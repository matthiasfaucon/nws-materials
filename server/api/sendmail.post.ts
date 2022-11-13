import nodemailer from "nodemailer";
import { defineEventHandler } from 'h3';
import { env } from "process";

export default defineEventHandler(async (event) => {
    const { emailUser } = await readBody(event)
    // nodemailer.createTestAccount((err, account) => {
    //   if (err) {
    //       console.error('Failed to create a testing account. ' + err.message);
    //       return process.exit(1);
    //   }

    //   console.log('Credentials obtained, sending message...');

    //   // Create a SMTP transporter object
    //   let transporter = nodemailer.createTransport({
    //       host: account.smtp.host,
    //       port: account.smtp.port,
    //       secure: account.smtp.secure,
    //       auth: {
    //           user: account.user,
    //           pass: account.pass
    //       }
    //   });

    //   // Message object
    //   let message = {
    //       from: 'Sender Name <sender@example.com>',
    //       to: 'Recipient <recipient@example.com>',
    //       subject: 'Nodemailer is unicode friendly ✔',
    //       text: 'Hello to myself!',
    //       html: '<p><b>Hello</b> to myself!</p>'
    //   };

    //   transporter.sendMail(message, (err, info) => {
    //       if (err) {
    //           console.log('Error occurred. ' + err.message);
    //           return process.exit(1);
    //       }

    //       console.log('Message sent: %s', info.messageId);
    //       // Preview only available when sending through an Ethereal account
    //       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    //   });
    // })
    const client = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "testnwsmail@gmail.com",
            pass: env.GMAIL_APP_PASSWORD
        }
    });

    const res = await client.sendMail({
        to: emailUser,
        subject: "WOLA MARCHE",
        text: "Comment il me zhef ce n3rdine w3aldik"
    })
    console.log(res)
})