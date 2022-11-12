import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParams } from 'h3'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    const { id } = getRouterParams(event)
    console.log(id)
    const result = await prisma.rentals.delete({
        where: {
            id: Number(id)
        }
    })

    return result
})

