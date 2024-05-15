import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "dhavinf.a@gmail.com",
      pass: "Vin@12345",
    },
  });

  const mailOptions = {
    from: "dhavinf.a@gmail.c",
    to: email,
    subject: "Anda diterima",
    html: "Silahkan join grup kamjaya berikut link nya",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}