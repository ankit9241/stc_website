import { NextRequest, NextResponse } from 'next/server';
import { setOTP } from '@/lib/redis';
import { sendOTPEmail } from '@/lib/nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, event } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !email.endsWith('@iitp.ac.in')) {
      return NextResponse.json({ error: 'Invalid email format or domain, use your iitp email' }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await setOTP(email, otp);
    await sendOTPEmail({ email, otp, event });

    return NextResponse.json({ 
      success: true, 
      message: 'OTP sent successfully to your email' 
    });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP. Please try again.' },
      { status: 500 }
    );
  }
}
