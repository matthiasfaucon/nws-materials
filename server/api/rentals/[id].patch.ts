import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParams, readBody } from 'h3'
import { getMaterial } from '~~/utils/api'

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
    const currentRental = await prisma.rentals.findUniqueOrThrow({
        where: {
            id: Number(id)
        }
    })
    console.log(currentRental)
    console.log(resultMaterial.id)
    if (resultUser && resultMaterial.availability === "AVAILABLE" || currentRental.materialsId === resultMaterial.id) {
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

