import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParams } from 'h3'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    const { id } = getRouterParams(event)
    const result = await prisma.rentals.findUniqueOrThrow({
        where: {
            id: Number(id)
        },
        include: {
            materials: true,
            user: true
          },
    })

    return result
})

