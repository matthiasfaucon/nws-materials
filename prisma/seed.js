import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
import { getUsersApi } from '../utils/api';
const prisma = new PrismaClient()

async function main() {
    
    let resultUsers = {}
    let resultMaterials = {}
    // let resultRentals = {}
    resultUsers = await getUsersApi()
    for (let i = 0; i < Math.round(Math.random() * 30 + 20); i++){
        const createdAt = faker.date.past()
        const updatedAt = faker.date.between(createdAt, new Date())
        resultMaterials = await prisma.materials.create({
            data: {
                denomination: faker.commerce.productName(),
                // quantite: Number(faker.finance.amount(1, 50, 0)),
                createdAt,
                updatedAt
            }
        })
    }
    // for (let i = 0; i < Math.round(Math.random() * 10 + 20); i++){
    //     const beginingRentals = faker.date.past().toISOString()
    //     const endingRentals = faker.date.future().toISOString()
    //     resultRentals = await prisma.rentals.create({
    //         data: {
    //             userId: Number(i+1),
    //             materialsId: Number(i+1),
    //             beginingRentals,
    //             endingRentals
    //         }
    //     })
    // }
    return {resultMaterials, resultUsers}
}
main()