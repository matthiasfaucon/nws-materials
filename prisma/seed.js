import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()

async function main() {
    
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
    for (let i = 0; i < Math.round(Math.random() * 10 + 20); i++){
        const beginingRentals = faker.date.past().toISOString()
        const endingRentals = faker.date.future().toISOString()
        console.log(i)
        resultRentals = await prisma.rentals.create({
            data: {
                userId: Number(i+1),
                materialsId: Number(i+1),
                beginingRentals,
                endingRentals
            }
        })
    }
    return {resultMaterials, resultUsers, resultMaterials}
}
main()