import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { createError, defineEventHandler } from 'h3';
import { getMaterial, getUser } from '~~/utils/api';


export default defineEventHandler(async (event) => {
    const { userId, materialsId, beginningRentals, endingRentals } = await readBody(event)
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
        result = await prisma.rentals.create({
            data: {
                userId: userId,
                materialsId: materialsId,
                beginingRentals: beginningRentals,
                endingRentals: endingRentals,
            },
            include: {
                materials: true,
                user: true
              },
        })
    }
    else{
        throw createError({ statusCode: 400, message: "Le matériel est déjà loué" })
    }

    return result
})

