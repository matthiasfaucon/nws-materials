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
                <div class="column is-3">
                    <LeftMenu />
                </div>
                <div class="column is-flex is-flex-direction-column">
                    <h1 class="is-uppercase ml-5 is-size-4 has-text-weight-medium">Créer le matériel</h1>
                    <div class="column is-half mt-5">
                        <div class="control">
                            <input class="input is-rounded" type="text" v-model="material_denomination">
                        </div>
                        <div class="control mt-4">
                            <input class="input is-rounded" type="text" v-model="material_quantite">
                        </div>
                        <button class="button is-link is-rounded mt-5" @click=createNewMaterial()>Mettre à jour</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
   
<script lang="ts" setup>import { computed, onMounted, ref } from 'vue';
import { createMaterial } from '../../../utils/api';

const material_denomination = ref('denomination')
const material_quantite = ref(20)

async function createNewMaterial() {
    let body = {
        denomination: material_denomination.value,
        quantite: material_quantite.value,
    }
    //    console.log(body)
    createMaterial(body)
}
</script>