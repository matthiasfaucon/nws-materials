import { describe, expect, expectTypeOf, it } from 'vitest'
import { $fetch, isDev, setup } from '@nuxt/test-utils'
import { getUsers, getUser,getMaterials, getMaterial, createMaterial, updateMaterial, deleteMaterial, getRentals, getRental, createRental, updateRental, deleteRental } from "../utils/api"
import { faker } from '@faker-js/faker';

describe('Should test the CRUD for the users', async () => {
  setup({
    rootDir: "../",
    server: true,
    browser: true,
    configFile: "../.env"
  })

  it('Should get users', async () => {
    let users = await getUsers()
    expectTypeOf(users).toBeArray()
    expect(users.length).toBeGreaterThan(0)
  })
})

  // it('Should get one user', async () => {
  //   let user = await getUser(5)
  //   expect(user).toContain({
  //       id: 5,
  //     })
  //     expectTypeOf(user).toBeObject()
  // })

  // it('Should create one user', async () => {
  //   let prenom = faker.name.firstName()
  //   let nom = faker.name.lastName()
  //   let email = faker.internet.email()

  //   let user = await createUser({prenom: prenom, nom: nom, email: email})
  //   expect(user).toContain({
  //     nom: nom,
  //     prenom: prenom,
  //     email: email,
  //   })
  // })

//   it('Should update one user', async () => {
//     let user = await getUser(6)
//     let userUpdated = await updateUser(6, {prenom: faker.name.firstName(), nom: faker.name.lastName(), email: faker.internet.email()})
//     expect(userUpdated).not.toBe(user)
//   })

//   it('Should delete one user', async () => {
//     await deleteUser(8)
//     let userAfterDeleting = await getUser(8)
//     expect(userAfterDeleting).toContain({
//       url: '/api/users/8',
//       statusCode: 500,
//       message: "No Users found",
//     })
//   })
// })

describe('Should test the CRUD for the materials', async () => {
  setup({
    rootDir: "../",
    server: true,
    browser: true,
    configFile: "../.env"
  })

  it('Should get materials', async () => {
    let materials = await getMaterials()
    expectTypeOf(materials).toBeArray()
    expect(materials.length).toBeGreaterThan(0)
  })

  it('Should get one material', async () => {
    let user = await getMaterial(5)
    expect(user).toContain({
        id: 5
      })
      expectTypeOf(user).toBeObject()
  })

  it('Should create one material', async () => {
    let denomination = faker.commerce.productName()
    let materialCreated = await createMaterial({denomination: denomination})
    expect(materialCreated).toContain({
      denomination: denomination
    })
  })

  it('Should update one material', async () => {
    let denomination = faker.commerce.productName()
    let material = await getMaterial(6)
    let materialUpdated = await updateMaterial(6, {denomination: denomination})
    console.log(material)
    console.log(materialUpdated)
    expect(materialUpdated).not.toBe(material)
    expect(materialUpdated).toContain({
      denomination: denomination,
    })
  })

  it('Should delete one material', async () => {
    await deleteMaterial(7)
    let materialAfterDeleting = await getMaterial(7)
    console.log(materialAfterDeleting)
    expect(materialAfterDeleting).toContain({
      url: '/api/materials/7',
      statusCode: 500,
      message: "No Materials found",
    }

    )
  })
})

describe('Should test the CRUD for the rentals', async () => {
  setup({
    rootDir: "../",
    server: true,
    browser: true,
    configFile: "../.env"
  })
  
  it('Should create one rental', async () => {
    let materials = getMaterials()
    let users = getUsers()
    let materialsId = Number(faker.finance.amount(1, (await materials).length, 0))
    let userId = Number(faker.finance.amount(1, (await users).length, 0))
    let beginingRentals = faker.date.past()
    let endingRentals = faker.date.future()
    let rentalCreated = await createRental({materialsId: materialsId, userId: userId, beginingRentals: beginingRentals, endingRentals: endingRentals})
    console.log(rentalCreated)
    expect(rentalCreated).toContain({
      materialsId: materialsId,
      userId: userId
    })
  })

  it('Should get rentals', async () => {
    let rentals = await getRentals()
    expectTypeOf(rentals).toBeArray()
    expect(rentals.length).toBeGreaterThan(0)
  })

  it('Should get one rental', async () => {
    let rental = await getRental(1)
    expect(rental).toContain({
      id: 1
    })
    expectTypeOf(rental).toBeObject()
  })


  it('Should update one rental', async () => {
    let rental = await getRental(1)
    let materials = getMaterials()
    let users = getUsers()
    let materialsId = Number(faker.finance.amount(1, (await materials).length, 0))
    let userId = Number(faker.finance.amount(1, (await users).length, 0))
    let beginingRentals = faker.date.past()
    let endingRentals = faker.date.future()
    let rentalUpdated = await updateRental(1, {materialsId: materialsId, userId: userId, beginingRentals: beginingRentals, endingRentals: endingRentals})
    expect(rentalUpdated).not.toBe(rental)
    expect(rentalUpdated).toContain({
      materialsId: materialsId, 
      userId: userId
    })
  })

  it('Should delete one rental', async () => {
    await deleteRental(1)
    let materialAfterDeleting = await getRental(1)
    expect(materialAfterDeleting).toContain({
      url: '/api/rentals/1',
      statusCode: 500,
      message: "No Rentals found",
    })
  })
})