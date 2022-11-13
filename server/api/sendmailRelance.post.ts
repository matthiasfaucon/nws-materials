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
        subject: `RAPPEL: Réservation d'un(e) ${denominationMaterial}`,
        text: `Votre réservation pour l'équipement suivant: ${denominationMaterial}, a débuté le ${setFormatDate(beginingRentalsDate)} et s'est ou se terminera le ${setFormatDate(endingRentalsDate)} Merci de bien vouloir le/la ramener`,
        html: `<p>Votre réservation pour l'équipement suivant: <b>${denominationMaterial}</b>, a débuté le <b>${setFormatDate(beginingRentalsDate)}</b> et s'est ou se terminera le <b>${setFormatDate(endingRentalsDate)}</b></p> <br><b>Merci de bien vouloir le/la ramener</b></br>`
    })

    return res
})