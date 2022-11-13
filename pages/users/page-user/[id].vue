<template>
    <section>
        <HamburgerMenu />
        <!-- END NAV -->
        <div class="container">
            <div class="columns">
                <div class="column is-3 ">
                    <LeftMenu />
                </div>
                <div class="column is-flex is-flex-direction-column">
                    <h1 class="is-uppercase ml-5 is-size-3 has-text-weight-medium">Ajouter un utilisateur</h1>
                    <div class="column is-half mt-3">
                        <div class="control">
                            <input class="input is-rounded" type="text" v-model="user_nom">
                        </div>
                        <div class="control mt-4">
                            <input class="input is-rounded" type="text" v-model="user_prenom">
                        </div>
                        <div class="control mt-4">
                            <input class="input is-rounded" type="email" v-model="user_email">
                        </div>
                        <button class="button is-link is-rounded mt-5" @click=updateSelectedUser()>Mettre à
                            jour</button>
                    </div>
                </div>
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

async function updateSelectedUser() {
    let body = {
        nom: user_nom.value,
        prenom: user_prenom.value,
        email: user_email.value
    }
    console.log(body)
    updateUser(id, body)
}
</script>