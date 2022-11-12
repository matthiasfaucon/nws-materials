import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParams, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } = getRouterParams(event)
    const { materialsId, userId, beginingRentals, endingRentals } = await readBody(event)
    let rental = {
        materialsId: materialsId,
        userId : userId,
        beginingRentals: beginingRentals,
        endingRentals: endingRentals
    }
    const result = await prisma.rentals.upsert({
        select: {
            id: true,
            materialsId: true,
            userId: true,
            beginingRentals: true,
            endingRentals: true
        },
        where: {
            id: Number(id)
        },
        update: {
            materialsId: materialsId,
            userId: userId,
            beginingRentals: beginingRentals,
            endingRentals: endingRentals
        },
        create: rental
    })

    return result
})

