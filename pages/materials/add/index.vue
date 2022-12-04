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
                <div class="column is-3">
                    <LeftMenu />
                </div>
                <div class="column is-flex is-flex-direction-column">
                    <h1 class="is-uppercase ml-5 is-size-4 has-text-weight-medium">Créer le matériel</h1>
                    <div class="column is-half mt-5">
                        <div class="control">
                            <input class="input is-rounded" type="text" v-model="material_denomination">
                        </div>
                        <!-- <div class="control mt-4">
                            <input class="input is-rounded" type="text" v-model="material_quantite">
                        </div> -->
                        <button class="button is-link is-rounded mt-5" @click=createNewMaterial()>Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
   
<script lang="ts" setup>
import Swal from 'sweetalert2';
import { computed, onMounted, ref } from 'vue';
import { createMaterial } from '../../../utils/api';
import { create } from 'domain';

const material_denomination = ref('denomination')
// const material_quantite = ref(20)

async function createNewMaterial() {
    let body = {
        denomination: material_denomination.value,
        // quantite: material_quantite.value,
    }
    let createMaterialPromise = await createMaterial(body)
    if (createMaterialPromise.statusCode === 500) {
        Swal.fire({
            title: 'Impossible de créer l\'équipement',
            text: 'Le matériel existe déjà',
            icon: 'error',
            confirmButtonText: 'Suivant'
        })
    }
    else {
        Swal.fire({
            title: 'L\'équipement a bien été créé',
            icon: 'success',
            confirmButtonText: 'Suivant'
        })
    }
}
</script>