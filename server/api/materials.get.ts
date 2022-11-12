import { PrismaClient } from '@prisma/client'
import { defineEventHandler } from 'h3'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    const result = await prisma.materials.findMany({
        orderBy: {
            id: "asc"
        }
    })

    return result
})

