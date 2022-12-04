<template>
    <section>
        <nav class="navbar is-white is-hidden-mobile">
      <div class="container">
        <div class="navbar-brand">
          <p class="navbar-item brand-text">
            NWS Admin
          </p>
        </div>
      </div>
    </nav>
        <HamburgerMenu />
        <!-- END NAV -->
        <div class="container">
            <div class="columns">
                <div class="column is-3 ">
                    <LeftMenu />
                </div>
                <div class="column is-flex is-flex-direction-column">
                    <h1 class="is-uppercase ml-5 is-size-4 has-text-weight-medium">Créer une location</h1>
                    <div class="column is-half mt-5">
                        <div class="is-flex">
                            <div class="select is-rounded">
                                <select v-model="rental_ID_material">
                                    <option :selected="material.id === material.id" v-for="material in materials"
                                        :value="material.id">{{ material.denomination }}</option>
                                </select>
                            </div>
                            <div class="select is-rounded">
                                <select v-model="rental_ID_user">
                                    <option :selected="user.id === rental_ID_user" v-for="user in useUsers.$state.users"
                                        :value="user.id">{{
                                                `${user.nom} ${user.prenom}`
                                        }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="control mt-4">
                            <input class="input is-rounded" type="date" v-model="beginingRentals">
                        </div>
                        <div class="control mt-4">
                            <input class="input is-rounded" type="date" v-model="endingRentals">
                        </div>
                        <button class="button is-link is-rounded mt-5" @click="createNewRental()">Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
   
<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { createRental, getUsers, getMaterials, updateRental, updateMaterial, sendMailUser, getMaterial, getUsersApi } from '../../../utils/api';
import Swal from 'sweetalert2'
import { useUsersStore } from '@/store/users';


const useUsers = useUsersStore()

const users = ref([])
users.value = await getUsersApi()
await useUsers.$patch({
  users: users.value
})


const rental_material = ref('')
const rental_ID_material = ref(5)
const rental_user = ref('')
const rental_ID_user = ref(5)
const beginingRentals = ref(new Date().toISOString().split('T')[0])
const endingRentals = ref(new Date().toISOString().split('T')[0])
const materials = ref([])
onMounted(async () => {
    materials.value = await getMaterials()
})



async function createNewRental() {
    let bodyRental = {
        materialsId: rental_ID_material.value,
        userId: rental_ID_user.value,
        beginingRentals: new Date(beginingRentals.value).toISOString(),
        endingRentals: new Date(endingRentals.value).toISOString()
    }
    let bodyMaterial = {
        availability : "RENTED"
    }
    let createRentalPromise = await createRental(bodyRental)
    if (createRentalPromise.statusCode === 400) {
        Swal.fire({
            title: 'Impossible de créer la location',
            text: createRentalPromise.message,
            icon: 'error',
            confirmButtonText: 'Suivant'
        })
    }
    else {
        await updateMaterial(rental_ID_material.value, bodyMaterial)
        let user = useUsers.$state.users.find(({id}) => id === rental_ID_user.value)
        let material = await getMaterial(rental_ID_material.value)
        let body = {
            userData: {
                emailUser: user.mail
            },
            materialData: {
                denominationMaterial: material.denomination
            },
            rentalData: {
                beginingRentals: beginingRentals.value,
                endingRentals: endingRentals.value
            }
        }
        sendMailUser(body)
        Swal.fire({
            title: 'La location a bien été créé',
            icon: 'success',
            confirmButtonText: 'Suivant'
        })
    }
}
</script>