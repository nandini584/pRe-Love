import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

import ENV from '../config.js';

const nodeGmailConfig ={
    service: 'gmail',
    auth: {
        user: ENV.SMTP_EMAIL,
        pass: ENV.SMTP_PASSWORD
    }
}
// const transporter = nodemailer.createTransport(nodeConfig);
const transporter = nodemailer.createTransport(nodeGmailConfig);

const MailGenerator = new Mailgen({
    theme: "default",
    product : {
        name: "Mailgen",
        link: 'https://mailgen.js/'
    }
})

/** POST: http://localhost:8080/api/registerMail 
 * @param: {
  "username" : "example123",
  "userEmail" : "admin123",
  "text" : "",
  "subject" : "",
}
*/

export const registerMail = async (req, res) => {
    const { username, userEmail, text, subject } = req.body;

    // body of the email
    const email = {
        body : {
            name: username,
            intro : text || 'Welcome to pRe-Love ! We\'re very excited to have you on board.',
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }

    const emailBody = MailGenerator.generate(email);

    const message = {
        from : ENV.SMTP_EMAIL,
        to: userEmail,
        subject : subject || "Signup Successful",
        html : emailBody
    }

    // send mail
    transporter.sendMail(message)
        .then(() => {
            return res.status(200).send({ msg: "You should receive an email from us."})
        })
        .catch(error => res.status(500).send({ error }))

}