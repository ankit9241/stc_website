import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/connectdb';
import RegistrationResponse from '@/schema/RegistrationResponseSchema';
import { getServerSession } from 'next-auth';

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
    const { otp, ...body } = await request.json();
    if (!otp) {
      return NextResponse.json({ error: 'OTP is required' }, { status: 400 });
    }

    const { getOTP, deleteOTP } = await import('@/lib/redis');
    const storedOTP = await getOTP(body.collegeMail);

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
      forEvent: body.forEvent,
      collegeMail: body.collegeMail.toLowerCase(),
    });

    if (existingResponse) {
      return NextResponse.json(
        { error: 'You have already registered for this event with this email' },
        { status: 409 }
      );
    }

    const response = await RegistrationResponse.create({
      ...body,
      collegeMail: body.collegeMail.toLowerCase(),
    });

    await deleteOTP(body.collegeMail);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Registration successful!',
        data: response 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating response:', error);
    return NextResponse.json({ error: 'Failed to create response' }, { status: 500 });
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
