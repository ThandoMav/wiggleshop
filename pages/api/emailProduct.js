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
  const { email, fullName, description } = req.body;
  if (!fullName ||!email || !email.includes('@')) {
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
          subject: 'Product Receipt | Appointment Details',
          html: `
           <p>${description}</p>

           <a href="ubuntumzansihub.co.za"}>START LISTING YOUR BIZNESS</a>
           <a href="ubuntumzansihub.co.za"}>Visit site</a>
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
