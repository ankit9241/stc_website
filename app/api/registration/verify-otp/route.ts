import { NextRequest, NextResponse } from 'next/server';
import { getOTP, deleteOTP } from '@/lib/redis';

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedOtp = otp.trim();

    console.log('=== OTP VERIFICATION DEBUG ===');
    console.log('Raw email:', JSON.stringify(email));
    console.log('Raw OTP:', JSON.stringify(otp));
    console.log('Normalized email:', JSON.stringify(normalizedEmail));
    console.log('Normalized OTP:', JSON.stringify(normalizedOtp));
    console.log('OTP length:', normalizedOtp.length);

    const storedOTP = await getOTP(normalizedEmail);

    const storedOTPString = storedOTP ? String(storedOTP) : null;

    if (!storedOTPString) {
      return NextResponse.json({ error: 'OTP expired or not found' }, { status: 400 });
    }

    if (storedOTPString !== normalizedOtp) {
      return NextResponse.json({ 
        error: 'Invalid OTP. Please check and try again.' 
      }, { status: 400 });
    }

    await deleteOTP(normalizedEmail);

    return NextResponse.json({ 
      success: true, 
      message: 'Email verified successfully' 
    });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json({ error: 'Failed to verify OTP' }, { status: 500 });
  }
}
