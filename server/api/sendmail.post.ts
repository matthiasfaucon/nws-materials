import nodemailer from "nodemailer";
import { defineEventHandler } from 'h3';
import { env } from "process";
import { setFormatDate } from "~~/utils/utils";

export default defineEventHandler(async (event) => {
    const { emailUser, denominationMaterial, beginingRentals, endingRentals } = await readBody(event)
    let beginingRentalsDate = new Date(beginingRentals)
    let endingRentalsDate = new Date(endingRentals)
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
        text: `Votre réservation pour l'équipement suivant: ${denominationMaterial}, débutera le ${setFormatDate(beginingRentalsDate)} et se finira le ${setFormatDate(endingRentalsDate)}`,
        html: `<p>Votre réservation pour l'équipement suivant: <b>${denominationMaterial}</b>, débutera le <b>${setFormatDate(beginingRentalsDate)}</b> et se finira le <b>${setFormatDate(endingRentalsDate)}</b></p>`
    })

    return res
})