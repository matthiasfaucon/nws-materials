import nodemailer from "nodemailer";
import { defineEventHandler } from 'h3';
import { env } from "process";

export default defineEventHandler(async (event) => {
    const { emailUser, denominationMaterial, beginingRentals, endingRentals } = await readBody(event)
    console.log(emailUser)
    const client = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "testnwsmail@gmail.com",
            pass: env.GMAIL_APP_PASSWORD
        }
    });

    const res = await client.sendMail({
        to: emailUser,
        subject: `RAPPEL: Réservation d'un(e) ${denominationMaterial}`,
        text: `Votre réservation pour l'équipement suivant: ${denominationMaterial}, a débuté le ${beginingRentals} et s'est ou se terminera le ${endingRentals} Merci de bien vouloir le ramener`,
        html: `<p>Votre réservation pour l'équipement suivant: <b>${denominationMaterial}</b>, a débuté le <b>${beginingRentals}</b> et s'est ou se terminera le <b>${endingRentals}</b></p> <br><b>Merci de bien vouloir le ramener</b></br>`
    })
    console.log(res)
})