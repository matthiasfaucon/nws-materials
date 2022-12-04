import { PrismaClient } from '@prisma/client'
import { defineEventHandler } from 'h3'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';

export default defineEventHandler(async (event) => {
    let resultMaterials = {}
    for (let i = 0; i < Math.round(Math.random() * 30 + 20); i++){
        const createdAt = faker.date.past()
        const updatedAt = faker.date.between(createdAt, new Date())
        resultMaterials = await prisma.materials.create({
            data: {
                denomination: faker.commerce.productName(),
                quantite: Number(faker.finance.amount(1, 50, 0)),
                createdAt,
                updatedAt
            }
        })
    }
    return {resultMaterials}
})

