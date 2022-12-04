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
   
<script lang="ts" setup>
import Swal from 'sweetalert2';
import { computed, onMounted, ref } from 'vue';
// import { createUser } from '../../../utils/api';

const user_nom = ref('nom')
const user_prenom = ref('prénom')
const user_email = ref('email')

async function createSelectedUser() {
    let body = {
        nom: user_nom.value,
        prenom: user_prenom.value,
        email: user_email.value
    }

    // let createUserPromise = await createUser(body)
    if (createUserPromise.statusCode === 500) {
        Swal.fire({
            title: 'Impossible de créer l\'utilisateur',
            text: 'L\'adresse e-mail est déjà utilisée',
            icon: 'error',
            confirmButtonText: 'Suivant'
        })
    }
    else {
        Swal.fire({
            title: 'L\'utilisateur a bien été créé',
            icon: 'success',
            confirmButtonText: 'Suivant'
        })
    }
}
</script>