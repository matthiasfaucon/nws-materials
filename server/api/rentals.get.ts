import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
import { createError, defineEventHandler } from 'h3';
const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {
    const result = await prisma.rentals.findMany({
        orderBy: {
            id: "asc"
        },
        include: {
            materials: true,
            user: true
          },
    })
        return result
})

