//import { mailgun } from '../../utils';
import mg from 'mailgun-js';

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }
  const { email, name, subject, message } = req.body;
  if (!name || !subject || !message || !email || !email.includes('@')) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  } else {
    mailgun()
      .messages()
      .send(
        {
          from: `<${email}>`,
          to: 'Portolio <mkholowthandow@gmail.com>',
          subject: `<${subject}>`,
          html: `
           <p>${message}</p>
           <a href="sastudentgroove.co.za"}>Visit site</a>
           `,
        },
        (error, body) => {
          console.log(error);
          console.log(body);
        }
      );
    res.status(201).json({ message: 'Ill get back to you.!' });
    return;
  }
}

export default handler;
