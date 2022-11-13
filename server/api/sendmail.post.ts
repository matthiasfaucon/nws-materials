import nodemailer from "nodemailer";
import { defineEventHandler } from 'h3';
import { env } from "process";

export default defineEventHandler(async (event) => {
    const { emailUser, denominationMaterial, beginingRentals, endingRentals } = await readBody(event)
    const client = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "testnwsmail@gmail.com",
            pass: env.GMAIL_APP_PASSWORD
        }
    });

    const res = await client.sendMail({
        to: emailUser,
        subject: `Réservation d'un(e) ${denominationMaterial}`,
        text: `Votre réservation pour l'équipement suivant: ${denominationMaterial}, débutera le ${beginingRentals} et se finira le ${endingRentals}`,
        html: `<p>Votre réservation pour l'équipement suivant: <b>${denominationMaterial}</b>, débutera le <b>${beginingRentals}</b> et se finira le <b>${endingRentals}</b></p>`
    })
})