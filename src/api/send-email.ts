import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, to } = await request.json();

    // Create transporter using SendPulse SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-pulse.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDPULSE_SMTP_USER || '',
        pass: process.env.SENDPULSE_SMTP_PASSWORD || '',
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