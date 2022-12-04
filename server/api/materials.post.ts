import { PrismaClient } from '@prisma/client'
// import { defineEventHandler } from 'h3'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';

export default defineEventHandler(async (event) => {
    const { denomination } = await readBody(event)
    const result = await prisma.materials.create({
        data: {
            denomination: denomination,
        }
    })
    return result
})

