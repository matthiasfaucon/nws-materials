async function getUsersApi() {
    let datas = []
    let body  = []
    try {
        const res = await fetch(`${location.origin}/api/usersApi`)
        datas = await res.json()
        datas.forEach(user => {
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
    return datas
}

async function getUsers() {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/users`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function createUsers(body) {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/usersApi`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data: body})
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function getUser(id) {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/users/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

// async function createUser(body) {
//     let datas = []
//     try {
//         const res = await fetch(`${location.origin}/api/users`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({prenom: body.prenom, nom: body.nom, email: body.email})
//         })
//         datas = await res.json()
//     } catch (error) {
//         console.error(error)
//     }
//     return datas
// }


// async function updateUser(id, body) {
//     let datas = []
//     try {
//         const res = await fetch(`${location.origin}/api/users/${id}`, {
//             method: 'PATCH',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({prenom: body.prenom, nom: body.nom, email: body.email})
//         })
//         datas = await res.json()
//     } catch (error) {
//         console.error(error)
//     }
//     return datas
// }

// async function deleteUser(id) {
//     let datas = []
//     try {
//         const res = await fetch(`${location.origin}/api/users/${id}`, {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' },
//         })
//         datas = await res.json()
//     } catch (error) {
//         console.error(error)
//     }
//     return datas
// }

async function getMaterials() {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/materials`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function getMaterial(id) {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/materials/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function createMaterial(body) {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/materials`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({denomination: body.denomination, quantite: body.quantite})
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function updateMaterial(id, body) {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/materials/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({denomination: body.denomination, quantite: body.quantite, availability: body.availability})
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function deleteMaterial(id) {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/materials/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function getRentals() {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/rentals`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function getRental(id) {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/rentals/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function createRental(body) {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/rentals`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({userId: body.userId, materialsId: body.materialsId, beginningRentals: body.beginningRentals, endingRentals: body.endingRentals})
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function updateRental(id, body) {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/rentals/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({materialsId: body.materialsId, userId: body.userId, beginingRentals: body.beginingRentals, endingRentals: body.endingRentals})
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function deleteRental(id) {
    let datas = []
    try {
        const res = await fetch(`${location.origin}/api/rentals/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        datas = await res.json()
    } catch (error) {
        console.error(error)
    }
    return datas
}

async function sendMailUser(body) {
    let email = ""
    try {
        const res = await fetch(`${location.origin}/api/sendmail`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({emailUser: body.userData.emailUser, denominationMaterial: body.materialData.denominationMaterial, beginingRentals: body.rentalData.beginingRentals, endingRentals: body.rentalData.endingRentals})
        })
        email = await res.json()
    } catch (error) {
        console.error(error)
    }
    return email
}

async function sendMailRelanceUser(body) {
    let email = ""
    try {
        const res = await fetch(`${location.origin}/api/sendmailRelance`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({emailUser: body.userData.emailUser, denominationMaterial: body.materialData.denominationMaterial, beginingRentals: body.rentalData.beginingRentals, endingRentals: body.rentalData.endingRentals})
        })
        email = await res.json()
    } catch (error) {
        console.error(error)
    }
    return email
}

export { getUsersApi, getUsers, getUser, createUsers, getMaterials, getMaterial, createMaterial, updateMaterial, deleteMaterial, getRentals, getRental, createRental, updateRental, deleteRental, sendMailUser, sendMailRelanceUser}