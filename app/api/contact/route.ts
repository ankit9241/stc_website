import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/app/emails/contact-form-template';
import { render } from '@react-email/render';
import React from 'react';

// Environment variable check
if (!process.env.RESEND_API_KEY) {
  throw new Error('Resend API key is required');
}

// Verify API key format
const resendApiKey = process.env.RESEND_API_KEY.trim();
if (!resendApiKey.startsWith('re_')) {
  throw new Error('Invalid Resend API key format');
}

const resend = new Resend(resendApiKey);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const requestBody = await request.text();
    
    let jsonBody;
    try {
      jsonBody = JSON.parse(requestBody);
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON format in request body' },
        { status: 400 }
      );
    }
    
    const { name, email, company, subject, message } = jsonBody as ContactFormData;
    
    // Validate required fields
    if (!name || !email || !message) {
      const errorMsg = 'Name, email, and message are required';
      return NextResponse.json(
        { error: errorMsg },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const errorMsg = 'Please enter a valid email address';
      return NextResponse.json(
        { error: errorMsg },
        { status: 400 }
      );
    }

    try {
      // Prepare form data for email
      const formData = {
        name: name.trim(),
        email: email.trim(),
        company: company?.trim() || 'Not provided',
        subject: subject?.trim() || 'No subject',
        message: message.trim(),
      };

      const emailHtml = await render(
        React.createElement(ContactFormEmail, formData)
      );

      const recipientEmail = 'stchybridiitp@gmail.com';
      const fromEmail = 'STC IITP <onboarding@resend.dev>';
      
      const emailSubject = formData.subject === 'No subject' 
        ? `New Contact Form Submission from ${formData.name}` 
        : formData.subject;
      
      const emailData = {
        from: fromEmail,
        to: [recipientEmail],
        reply_to: formData.email,
        subject: emailSubject,
        html: emailHtml,
      };
      
      const { data, error } = await resend.emails.send(emailData);

      if (error) {
        if (error.message?.includes('not authorized')) {
          return NextResponse.json(
            { 
              error: 'Email sending is not authorized. Please check your API key.',
              details: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 403 }
          );
        }
        
        if (error.message?.includes('domain not verified')) {
          return NextResponse.json(
            { 
              error: 'The sending domain is not verified. Please verify your domain in Resend.',
              details: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 403 }
          );
        }
        
        return NextResponse.json(
          { 
            error: 'Failed to send email. Please try again later.',
            details: process.env.NODE_ENV === 'development' ? error : undefined
          },
          { status: 500 }
        );
      }
      return NextResponse.json({ 
        success: true,
        message: 'Your message has been sent successfully!',
        data
      });
      
    } catch (emailError: any) {
      
      return NextResponse.json(
        { 
          error: 'Failed to process email. Please try again later.',
          details: process.env.NODE_ENV === 'development' ? emailError.message : undefined
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
