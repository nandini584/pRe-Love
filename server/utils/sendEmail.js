import nodemailer from  "nodemailer"
import Mailgen from 'mailgen';
import ENV from '../config.js';

export const sendEmail = async( options ) =>{

    const transporter = nodemailer.createTransport({
        host: ENV.SMTP_PORT,
        port :ENV.SMTP_PORT,
        service: ENV.SMTP_SERVICE,
        auth: {
            user: ENV.SMTP_EMAIL,
            pass: ENV.SMTP_PASSWORD
        }
    })

    //**********this is for the future so when we need to customise our mails and prevent it from going into spams************* */
    // const MailGenerator = new Mailgen({
    //     theme: "default",
    //     product : {
    //         name: "Mailgen",
    //         link: 'https://mailgen.js/'
    //     }
    // })
    // const email = {
    //     body: {
    //         name: `${options.name}`,
    //         intro: options.intro || 'Welcome to pRe_Love! We\'re very excited to have you on board.',
    //         action: {
    //             instructions: options.instructions ||'To get started with us, please click here:',
    //             button: {
    //                 color: '#22BC66', // Optional action button color
    //                 text: options.buttonText ||'Confirm your account',
    //                 link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
    //             }
    //         },
    //         outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    //     }
    // };

    // const emailBody = MailGenerator.generate(email);

    const mailOptions = {
        from : ENV.EMAIL,
        to: options.email,
        subject : options.subject,
        html : options.message,
    }
    await transporter.sendMail(mailOptions)
}