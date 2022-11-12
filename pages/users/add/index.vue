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
                        <button class="button is-link is-rounded mt-5" @click=createSelectedUser()>Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
   
<script lang="ts" setup>import { computed, onMounted, ref } from 'vue';
import { createUser } from '../../../utils/api';

const user_nom = ref('nom')
const user_prenom = ref('prénom')
const user_email = ref('email')

async function createSelectedUser() {
    let body = {
        nom: user_nom.value,
        prenom: user_prenom.value,
        email: user_email.value
    }
    //    console.log(body)
    createUser(body)
}
</script>