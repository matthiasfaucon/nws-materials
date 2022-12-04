import { PrismaClient } from '@prisma/client'
import { defineEventHandler, getRouterParams, readBody } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } = getRouterParams(event)
    const { denomination, availability } = await readBody(event)
    
    if (denomination) {
        let material = {
            denomination: denomination,
        }
                
        const result = await prisma.materials.upsert({
            select: {
                id: true,
                denomination: true,
                availability: true
            },
            where: {
                id: Number(id)
            },
            update: {
                denomination: denomination,
                availability: availability
            },
            create: material
        })
        return result
    }

    else if (availability && !denomination){

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

