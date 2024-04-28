import nodemailer from 'nodemailer';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});

export async function POST(req, res) {
  const { senderEmail, subject, message } = req.body;

  try {
    // Send the email with the sender's email address dynamically
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.RES,
      subject: subject,
      text: `Sender's Email: ${senderEmail}\n\nSubject: ${subject}\n\nMessage: ${message}`,
    });

    return res.status(200).json({ success: true }); 
  } catch (error) {
    console.error('An error occurred while sending the email:', error);
    return res.status(500).json({ error: 'An error occurred while sending the email.' });
  }
}
