<template>
 <section class="has-background-black-bis is-flex is-flex-direction-row hero is-fullheight">
        <LeftMenu />
        <div class="column is-flex is-flex-direction-column has-text-white">
            <h1 class="is-uppercase ml-5 is-size-4 has-text-weight-medium">Modifier le profil</h1>
            <div class="column is-half mt-5">
                <div class="control">
                    <input class="input is-rounded" type="text" v-model="user_nom" :placeholder="`${user.nom}`">
                </div>
                <div class="control mt-4">
                    <input class="input is-rounded" type="text" v-model="user_prenom" :placeholder="`${user.prenom}`">
                </div>
                <div class="control mt-4">
                    <input class="input is-rounded" type="email" v-model="user_email" :placeholder="`${user.email}`">
                </div>
                <button class="button is-link is-rounded mt-5" @click=updateSelectedUser() >Mettre à jour</button>
            </div>
      </div>
  </section>
</template>

<script lang="ts" setup>import { computed, onMounted, ref } from 'vue';
import { getUser, updateUser } from '../../../utils/api';

const route = useRoute()
const id = route.params.id


let user = ref([])
const user_nom = ref('')
const user_prenom = ref('')
const user_email = ref('')
    onMounted(async () => {
        user.value = await getUser(id)
        user_nom.value = user.value.nom
        user_prenom.value = user.value.prenom
        user_email.value = user.value.email
    })

async function updateSelectedUser(){
    let body = {
        nom: user_nom.value,
        prenom: user_prenom.value,
        email: user_email.value
    }
    console.log(body)
    updateUser(id, body)
}
</script>