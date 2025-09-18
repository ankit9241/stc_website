import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/app/emails/contact-form-template';
import { render } from '@react-email/render';
import React from 'react';

console.log('=== Resend Debug ===');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
if (process.env.RESEND_API_KEY) {
  console.log('Key starts with:', process.env.RESEND_API_KEY.substring(0, 3) + '...');
  console.log('Key length:', process.env.RESEND_API_KEY.length);
}

// Debug: Log environment variables
console.log('Environment variables:', {
  nodeEnv: process.env.NODE_ENV,
  resendApiKey: process.env.RESEND_API_KEY ? '***' + process.env.RESEND_API_KEY.slice(-4) : 'NOT FOUND'
});

// Initialize Resend with API key
const resendApiKey = process.env.RESEND_API_KEY?.trim();
if (!resendApiKey) {
  console.error('ERROR: RESEND_API_KEY is not set in environment variables');
  throw new Error('Resend API key is required');
}

// Verify API key format
if (!resendApiKey.startsWith('re_')) {
  console.error('ERROR: Invalid Resend API key format');
  throw new Error('Invalid Resend API key format');
}

console.log('Initializing Resend client...');
const resend = new Resend(resendApiKey);
console.log('Resend client initialized');

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
}

export async function POST(request: Request) {
  console.log('=== Contact Form Submission ===');
  
  try {
    const requestBody = await request.text();
    console.log('Request body:', requestBody);
    
    let jsonBody;
    try {
      jsonBody = JSON.parse(requestBody);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON format in request body' },
        { status: 400 }
      );
    }
    
    const { name, email, company, subject, message } = jsonBody as ContactFormData;
    
    console.log('Form data received:', { name, email, company, subject, message });

    // Validate required fields
    if (!name || !email || !message) {
      const errorMsg = 'Name, email, and message are required';
      console.error('Validation error:', errorMsg);
      return NextResponse.json(
        { error: errorMsg },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const errorMsg = 'Please enter a valid email address';
      console.error('Validation error:', errorMsg);
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

      console.log('Form data prepared for email:', formData);

      // Render email template
      console.log('Rendering email template...');
      const emailHtml = await render(
        React.createElement(ContactFormEmail, formData)
      );
      console.log('Email template rendered successfully');

      const recipientEmail = 'stchybridiitp@gmail.com';
      const fromEmail = 'STC IITP <onboarding@resend.dev>';
      
      console.log(`Environment: ${process.env.NODE_ENV}`);
      console.log('Recipient email set to:', recipientEmail);
      
      const emailSubject = formData.subject === 'No subject' 
        ? `New Contact Form Submission from ${formData.name}` 
        : formData.subject;
      
      const emailData = {
        from: fromEmail,
        to: [recipientEmail], // Must be an array
        reply_to: formData.email, // Use reply_to instead of replyTo
        subject: emailSubject,
        html: emailHtml,
      };
      
      console.log('Email data prepared:', {
        from: fromEmail,
        to: recipientEmail,
        subject: emailSubject,
        hasHtml: !!emailHtml,
        replyTo: formData.email
      });

      console.log('Attempting to send email...');
      
      console.log('Sending test email to:', recipientEmail);
      
      const { data, error } = await resend.emails.send(emailData);

      if (error) {
        console.error('Resend API error:', JSON.stringify(error, null, 2));
        
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

      console.log('Email sent successfully:', JSON.stringify(data, null, 2));
      return NextResponse.json({ 
        success: true,
        message: 'Your message has been sent successfully!',
        data
      });
      
    } catch (emailError: any) {
      console.error('Error in email processing:', emailError);
      console.error('Error details:', {
        name: emailError.name,
        message: emailError.message,
        stack: emailError.stack,
      });
      
      return NextResponse.json(
        { 
          error: 'Failed to process email. Please try again later.',
          details: process.env.NODE_ENV === 'development' ? emailError.message : undefined
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Unexpected error in contact form handler:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });
    
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
