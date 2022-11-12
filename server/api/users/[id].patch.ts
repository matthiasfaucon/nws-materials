import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParams, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } = getRouterParams(event)
    const { prenom, nom, email } = await readBody(event)
    const user = {
        id: Number(id),
        prenom: prenom,
        nom: nom,
        email: email,
    }
    const result = await prisma.users.upsert({
        select: {
            id: true,
            prenom: true,
            nom: true,
            email: true
        },
        where: {
            id: Number(id)
        },
        update: {
            prenom: user.prenom,
            nom : user.nom,
            email : user.email
        },
        create: user
    })

    return result
})

