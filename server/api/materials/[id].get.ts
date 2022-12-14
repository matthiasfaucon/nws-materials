import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParams } from 'h3'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    const { id } = getRouterParams(event)
    const result = await prisma.materials.findUniqueOrThrow({
        where: {
            id: Number(id)
        }
    })

    return result
})

