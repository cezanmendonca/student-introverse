import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
  try {
    const { name, email, message, to } = await request.json();

    // Initialize SendGrid with API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

    // Prepare email content
    const msg = {
      to,
      from: 'noreply@yourdomain.com', // Replace with your verified SendGrid sender
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
    await sgMail.send(msg);

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