import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParams, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } = getRouterParams(event)
    const { denomination, quantite, availability } = await readBody(event)
    
    if (denomination && quantite) {
        let material = {
            denomination: denomination,
            quantite : quantite,
        }
                
        const result = await prisma.materials.upsert({
            select: {
                id: true,
                denomination: true,
                quantite: true,
                availability: true
            },
            where: {
                id: Number(id)
            },
            update: {
                denomination: denomination,
                quantite : quantite,
                availability: availability
            },
            create: material
        })
        return result
    }

    else if (availability && !denomination && !quantite){

        const result = await prisma.materials.update({
            where: {
                id: Number(id)
            },
            data: {
                availability: availability
            },
        })
        return result
    }

    
})

