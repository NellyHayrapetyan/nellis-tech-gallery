import {NextApiRequest, NextApiResponse} from "next";

const nodemailer = require("nodemailer");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const userId = process.env.USER_ID;
    const userPassword = process.env.USER_PASSWORD;

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: userId,
          pass: userPassword,
        },
      });

      const mailOptions = {
        from: email,
        to: 'hayrapetyannelly1@gmail.com',
        subject: `Portfolio email from ${name} - ${email})`,
        text: message,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
