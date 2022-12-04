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
                    <h1 class="is-uppercase ml-5 is-size-4 has-text-weight-medium">Modifier la location</h1>
                    <div class="column is-half mt-5">
                        <div class="is-flex">
                            <div class="select is-rounded">
                                <select v-model="rental_ID_material">
                                    <option :selected="material.id === rental_ID_material" v-for="material in materials"
                                        :value="material.id">{{ material.denomination }}</option>
                                </select>
                            </div>
                            <div class="select is-rounded">
                                <select v-model="rental_ID_user">
                                    <option :selected="user.id === rental_ID_user" v-for="user in useUsers"
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
                        <button class="button is-link is-rounded mt-5" @click="updateSelectedRental()">Mettre à
                            jour</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>import Swal from 'sweetalert2';
import { computed, onMounted, ref } from 'vue';
import { getRental, updateRental, getMaterials, getUsers, updateMaterial, getRentals } from '../../../utils/api';
import { setFormatDate } from '../../../utils/utils';
import { useUsersStore } from '@/store/users';

const useUsers = useUsersStore()

const route = useRoute()
const id = route.params.id

let rental = ref([])
const rental_material = ref('')
const rental_ID_material = ref('')
const rental_user = ref('')
const rental_ID_user = ref('')
const beginingRentals = ref(new Date())
const endingRentals = ref(new Date())
const materials = ref([])
onMounted(async () => {
    rental.value = await getRental(id)
    materials.value = await getMaterials()
    rental_material.value = rental.value.materials.denomination
    rental_ID_material.value = rental.value.materials.id
    rental_user.value = rental.value.user.nom + " " + rental.value.user.prenom
    rental_ID_user.value = rental.value.user.id
    beginingRentals.value = rental.value.beginingRentals.split('T')[0]
    endingRentals.value = rental.value.endingRentals.split('T')[0]
})



async function updateSelectedRental() {
    let body = {
        materialsId: rental_ID_material.value,
        userId: rental_ID_user.value,
        beginingRentals: new Date(beginingRentals.value).toISOString(),
        endingRentals: new Date(endingRentals.value).toISOString()
    }
    let createRentalPromise = await updateRental(id, body)
    if (createRentalPromise.statusCode === 400 || !body.materialsId || !body.userId || !body.beginingRentals || !body.endingRentals) {
        Swal.fire({
            title: 'Impossible de mettre à jour la location',
            text: 'L\'équipement sélectionné est déjà loué',
            icon: 'error',
            confirmButtonText: 'Suivant'
        })
    }
    else if (createRentalPromise.statusCode === 500) {
        Swal.fire({
            title: 'Impossible de mettre à jour la location',
            text: 'Aucun utilisateur trouvé',
            icon: 'error',
            confirmButtonText: 'Suivant'
        })
    }
    else {
        let bodyLatestMaterial = {
            availability: "AVAILABLE"
        }
        let bodySelectedMaterial = {
            availability: "RENTED"
        }
        updateMaterial(rental.value.materials.id, bodyLatestMaterial)
        updateMaterial(rental_ID_material.value, bodySelectedMaterial)
        Swal.fire({
            title: 'La location a bien été mise à jour',
            icon: 'success',
            confirmButtonText: 'Suivant'
        })
    }
}
</script>