import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';
import { createError, defineEventHandler } from 'h3';


export default defineEventHandler(async (event) => {
    const { data } = await readBody(event)
    const result = await prisma.users.createMany({
        data,
        skipDuplicates: true,
      })
      return result
})

