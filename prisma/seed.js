import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()

async function main() {
    
    
    let resultMaterials = {}
    // let resultRentals = {}

    getUsersApi()
    
    for (let i = 0; i < Math.round(Math.random() * 30 + 20); i++){
        const createdAt = faker.date.past()
        const updatedAt = faker.date.between(createdAt, new Date())
        resultMaterials = await prisma.materials.create({
            data: {
                denomination: faker.commerce.productName(),
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
    return {resultMaterials}
}

async function getUsersApi() {
    let body  = []
    let resultUsers  = {}
    try {
        const res = await fetch(`http://localhost:3000/api/usersApi`)
        resultUsers = await res.json()
        resultUsers.forEach(user => {
            let datas = {
                id: user.id
              }
              body.push(
                datas
            )
            })
        createUsers(body)
        
    } catch (error) {
        console.error(error)
    }
    return resultUsers
}

async function createUsers(body) {
    let resultUsers  = {}
    try {
        const res = await fetch(`http://localhost:3000/api/usersApi`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data: body})
        })
        resultUsers = await res.json()
    } catch (error) {
        console.error(error)
    }
    return resultUsers
}

main()