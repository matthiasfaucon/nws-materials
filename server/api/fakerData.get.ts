import { PrismaClient } from '@prisma/client'
import { defineEventHandler } from 'h3'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';

export default defineEventHandler(async (event) => {
    let resultUsers = {}
    let resultMaterials = {}
    let resultRentals = {}
    for (let i = 0; i < Math.round(Math.random() * 30 + 20); i++){
        const createdAt = faker.date.past()
        const updatedAt = faker.date.between(createdAt, new Date())
        resultUsers = await prisma.users.create({
            data: {
                nom: faker.name.firstName(),
                prenom: faker.name.lastName(),
                email: faker.internet.email(),
                createdAt,
                updatedAt
            }
        })
    }
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
    // for (let i = 0; i < Math.round(Math.random() * 30 + 20); i++){
    //     const createdAt = faker.date.past()
    //     const updatedAt = faker.date.between(createdAt, new Date())
    //     resultRentals = await prisma.rentals.create({
    //         data: {
    //             beginingRentals: faker.date.past(),
    //             endingRentals: faker.date.future(),

                
    //         }
    //     })
    // }
    return {resultMaterials, resultUsers}
})
