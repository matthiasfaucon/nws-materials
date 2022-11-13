<template>
    <section>
        <nav class="navbar is-white">
            <div class="container">
                <div class="navbar-brand">
                    <p class="navbar-item brand-text">
                        NWS Admin
                    </p>
                    <div class="navbar-burger burger" data-target="navMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
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
                                    <option :selected="material.id === rental_ID_material" v-for="material in materials"
                                        :value="material.id">{{ material.denomination }}</option>
                                </select>
                            </div>
                            <div class="select is-rounded">
                                <select v-model="rental_ID_user">
                                    <option :selected="user.id === rental_ID_user" v-for="user in users"
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
import { createRental, getUsers, getMaterials, updateRental, updateMaterial, sendMailUser } from '../../../utils/api';
import { setFormatDate } from '../../../utils/utils';

const route = useRoute()
const id = route.params.id

const rental_material = ref('')
const rental_ID_material = ref(5)
const rental_user = ref('')
const rental_ID_user = ref(5)
const beginingRentals = ref(new Date().toISOString().split('T')[0])
const endingRentals = ref(new Date().toISOString().split('T')[0])
//    console.log(beginingRentals)
const materials = ref([])
const users = ref([])
onMounted(async () => {
    materials.value = await getMaterials()
    users.value = await getUsers()
    //    beginingRentals.value = rental.value.beginingRentals.split('T')[0]
    //    endingRentals.value = rental.value.endingRentals.split('T')[0]
})



async function createNewRental() {
    //    console.log(new Date(beginingRentals.value).toISOString())
    let bodyRental = {
        materialsId: rental_ID_material.value,
        userId: rental_ID_user.value,
        beginingRentals: new Date(beginingRentals.value).toISOString(),
        endingRentals: new Date(endingRentals.value).toISOString()
    }
    let bodyMaterial = {
        availability : "RENTED"
    }
    createRental(bodyRental)
    updateMaterial(rental_ID_material.value, bodyMaterial)
    sendMailUser(userId)
}
</script>