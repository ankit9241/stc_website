import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || '',
  },
});

interface SendOTPEmailParams {
  email: string;
  otp: string;
  event?: string;
}

export async function sendOTPEmail({ email, otp, event }: SendOTPEmailParams) {
  const mailOptions = {
    from: {
      name: 'STC Hybrid',
      address: process.env.EMAIL_USER || '',
    },
    to: email,
    subject: 'Verify Your Registration - STC IITP for Hybrid Programs',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>OTP Verification</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 30px 40px; background: linear-gradient(135deg, #0f2a4d 0%, #1a4b8c 100%); border-radius: 10px 10px 0 0;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; text-align: center;">
                        STC IITP Hybrid
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px; text-align: center;">
                        Student Technology Council, IIT Patna
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Body -->
                  <tr>
                    <td style="padding: 40px 40px 30px 40px;">
                      <h2 style="margin: 0 0 20px 0; color: #0f2a4d; font-size: 24px; font-weight: 600;">
                        Verify Your Email
                      </h2>
                      <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        Hello,
                      </p>
                      <p style="margin: 0 0 30px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
                        Thank you for registering${event ? ` for <strong>${event}</strong>` : ''} with STC IITP Hybrid. To complete your registration, please use the One-Time Password (OTP) below:
                      </p>
                      
                      <!-- OTP Box -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0 0 30px 0;">
                        <tr>
                          <td align="center" style="padding: 30px; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-radius: 8px; border: 2px dashed #1a4b8c;">
                            <div style="font-size: 36px; font-weight: 700; color: #0f2a4d; letter-spacing: 8px; font-family: 'Courier New', monospace;">
                              ${otp}
                            </div>
                            <p style="margin: 15px 0 0 0; color: #1a4b8c; font-size: 14px; font-weight: 500;">
                              Enter this code to verify your email
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Important Notice -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0 0 20px 0; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
                        <tr>
                          <td style="padding: 15px 20px;">
                            <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 1.5;">
                              <strong>⚠️ Important:</strong> This OTP is valid for <strong>5 minutes</strong> only. Do not share this code with anyone.
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                      <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                        If you didn't request this verification, please ignore this email.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 40px; background-color: #f9fafb; border-radius: 0 0 10px 10px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 13px; text-align: center; line-height: 1.5;">
                        This is an automated email. Please do not reply to this message.
                      </p>
                      <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center;">
                        © 2025 STC IITP Hybrid. All rights reserved.
                      </p>
                      <p style="margin: 10px 0 0 0; color: #9ca3af; font-size: 12px; text-align: center;">
                        Indian Institute of Technology Patna
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
    text: `
      STC IITP Hybrid - Email Verification

      Hello,

      Thank you for registering with STC IITP Hybrid. Your One-Time Password (OTP) is:

      ${otp}
      
      This OTP is valid for 5 minutes only. Please use it to complete your registration.
      
      If you didn't request this verification, please ignore this email.
      
      Best regards,
      STC Hybrid Team
      Indian Institute of Technology Patna
    `,
  };

  await transporter.sendMail(mailOptions);
}

export default transporter;
