import { defineEventHandler } from 'h3'

export default defineEventHandler(async event => {
    const result = await $fetch("http://vps-a47222b1.vps.ovh.net:4242/Student")
    console.log(result)
    return result
})