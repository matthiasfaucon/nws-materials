<template>
 <section class="has-background-black-bis is-flex is-flex-direction-row hero is-fullheight">
        <LeftMenu />
        <div class="column is-flex is-flex-direction-column has-text-white">
            <h1 class="is-uppercase ml-5 is-size-4 has-text-weight-medium">Modifier le profil</h1>
            <div class="column is-half mt-5"> 
                <div class="select is-rounded">
                    <select v-model="rental_ID_material">
                        <option :selected="material.id === rental_ID_material" v-for="material in materials" :value="material.id">{{ material.denomination }}</option>
                    </select>
                </div>
                <!-- <div class="control mt-4">
                    <input class="input is-rounded" type="email" v-model="rental_ID_user">
                </div> -->
                <div class="select is-rounded">
                    <select v-model="rental_ID_user">
                        <option :selected="user.id === rental_ID_user" v-for="user in users" :value="user.id">{{ `${user.nom} ${user.prenom}` }}</option>
                    </select>
                </div>
                <div class="control mt-4">
                    <input class="input is-rounded" type="date" v-model="beginingRentals">
                </div>
                <div class="control mt-4">
                    <input class="input is-rounded" type="date" v-model="endingRentals">
                </div>
                <button class="button is-link is-rounded mt-5" @click="updateSelectedRental()">Mettre à jour</button>
            </div>
        </div>
  </section>
</template>

<script lang="ts" setup>import { computed, onMounted, ref } from 'vue';
import { getRental, updateRental, getMaterials, getUsers } from '../../../utils/api';
import { setFormatDate } from '../../../utils/utils';

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
const users = ref([])
    onMounted(async () => {
        rental.value = await getRental(id)
        materials.value = await getMaterials()
        users.value = await getUsers()
        // console.log(materials.value)
        rental_material.value = rental.value.materials.denomination
        rental_ID_material.value = rental.value.materials.id
        rental_user.value = rental.value.user.nom + " " + rental.value.user.prenom
        rental_ID_user.value = rental.value.user.id
        beginingRentals.value = rental.value.beginingRentals.split('T')[0]
        endingRentals.value = rental.value.endingRentals.split('T')[0]
    })

    

    async function updateSelectedRental(){
        // console.log(new Date(beginingRentals.value).toISOString())
    let body = {
        materialsId: rental_ID_material.value,
        userId: rental_ID_user.value,
        beginingRentals: new Date(beginingRentals.value).toISOString(),
        endingRentals: new Date(endingRentals.value).toISOString()
    }
    // console.log(body)
    updateRental(id, body)
}
</script>