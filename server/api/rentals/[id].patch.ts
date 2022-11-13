import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParams, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } = getRouterParams(event)
    console.log(id)
    const { materialsId, userId, beginingRentals, endingRentals } = await readBody(event)
    let rental = {
        materialsId: materialsId,
        userId : userId,
        beginingRentals: beginingRentals,
        endingRentals: endingRentals
    }
    const resultUser = await prisma.users.findUniqueOrThrow({
        where: {
            id: Number(userId)
        }
    })
    const resultMaterial = await prisma.materials.findUniqueOrThrow({
        where: {
            id: Number(materialsId)
        }
    })
    let result = []
    if (resultUser && resultMaterial.availability === "AVAILABLE") {
        result = await prisma.rentals.upsert({
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
    }
    else  {
        throw createError({message: "Le matériel est déjà loué", statusCode: 400})
    }
    return result
})

