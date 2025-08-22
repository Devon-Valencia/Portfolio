import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { user_name, user_email, subject, message } = await req.json();

  // Note: It's highly recommended to use a dedicated email service (e.g., SendGrid, Mailgun)
  // instead of a personal Gmail account in production.
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${user_name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // The email address you want to receive messages on
      replyTo: user_email,
      subject: `New message from ${user_name}: ${subject}`,
      text: message,
      html: `<p>You have a new message from:</p>
             <p><strong>Name:</strong> ${user_name}</p>
             <p><strong>Email:</strong> ${user_email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}
