import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';
import { createError, defineEventHandler } from 'h3';


export default defineEventHandler(async (event) => {
    const { nom, prenom, email } = await readBody(event)
    const result = await prisma.users.create({
        data: {
            nom: nom,
            prenom: prenom,
            email: email
        }
    })
    return result
})

