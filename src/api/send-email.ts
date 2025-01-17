import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, to } = await request.json();

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bloghubsupabase@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || '',
      },
    });

    // Prepare email content
    const mailOptions = {
      from: 'bloghubsupabase@gmail.com',
      to,
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 

Let me update the email configuration to use Gmail's SMTP server instead of SendPulse. We'll need to modify the SMTP settings in the send-email.ts file.

<lov-code>
Let's update the send-email.ts file to use Gmail's SMTP server:

<lov-write file_path="src/api/send-email.ts">
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, to } = await request.json();

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || '',
        pass: process.env.GMAIL_APP_PASSWORD || '', // App Password, not your regular Gmail password
      },
    });

    // Prepare email content
    const mailOptions = {
      from: 'bloghubsupabase@gmail.com',
      to,
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}