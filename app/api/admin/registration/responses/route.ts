import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/connectdb';
import RegistrationResponse from '@/schema/RegistrationResponseSchema';
import Registration from '@/schema/RegistrationSchema';
import { getServerSession } from 'next-auth';
import { sendConfirmationEmail } from '@/lib/nodemailer';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    await connectDB();
    const { searchParams } = new URL(request.url);
    const forEvent = searchParams.get('forEvent');

    let query = {};
    if (forEvent) {
      query = { forEvent };
    }

    const responses = await RegistrationResponse.find(query)
      .populate('forEvent', 'title')
      .sort({ createdAt: -1 });
    
    return NextResponse.json(responses);
  } catch (error) {
    console.error('Error fetching responses:', error);
    return NextResponse.json({ error: 'Failed to fetch responses' }, { status: 500 });
  }
}


export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { otp, formId, email, name, phoneNumber, rollNumber, extraInput, ...body } = await request.json();
    
    if (!otp) {
      return NextResponse.json({ error: 'OTP is required' }, { status: 400 });
    }

    // Support both new field names (formId, email) and old ones (forEvent, collegeMail)
    const eventId = formId || body.forEvent;
    const userEmail = email || body.collegeMail;
    
    // Support both phone/phoneNumber
    const phoneValue = body.phone || phoneNumber;
    
    // Support both course/rollNumber and semester
    const courseValue = body.course;
    const semesterValue = body.semester;

    const { getOTP, deleteOTP } = await import('@/lib/redis');
    const storedOTP = await getOTP(userEmail);

    if (!storedOTP) {
      return NextResponse.json({ error: 'OTP expired or invalid' }, { status: 400 });
    }

    const receivedOTPStr = String(otp).trim();
    const storedOTPStr = String(storedOTP).trim();

    if (storedOTPStr !== receivedOTPStr) {
      console.log('OTP Mismatch:', { 
        received: receivedOTPStr, 
        stored: storedOTPStr,
        match: storedOTPStr === receivedOTPStr 
      });
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
    }

    const existingResponse = await RegistrationResponse.findOne({
      forEvent: eventId,
      collegeMail: userEmail.toLowerCase(),
    });

    if (existingResponse) {
      return NextResponse.json(
        { error: 'You have already registered for this event with this email' },
        { status: 409 }
      );
    }

    const response = await RegistrationResponse.create({
      forEvent: eventId,
      collegeMail: userEmail.toLowerCase(),
      name: name || body.name,
      phone: phoneValue,
      course: courseValue,
      semester: semesterValue,
      extraInput: extraInput || body.extraInput,
    });

    await deleteOTP(userEmail);

    // Send confirmation email
    try {
      const eventDetails = await Registration.findById(eventId);
      if (eventDetails) {
        await sendConfirmationEmail({
          email: userEmail,
          name: name || body.name,
          eventTitle: eventDetails.title,
          eventDate: new Date(eventDetails.eventAt).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        });
      }
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      // Don't fail the registration if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful! A confirmation email has been sent to your email address.',
        data: response 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating response:', error);
    return NextResponse.json({ error: 'Failed to complete registration. Please try again.' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Response ID required' }, { status: 400 });
    }

    const response = await RegistrationResponse.findByIdAndDelete(id);

    if (!response) {
      return NextResponse.json({ error: 'Response not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting response:', error);
    return NextResponse.json({ error: 'Failed to delete response' }, { status: 500 });
  }
}
