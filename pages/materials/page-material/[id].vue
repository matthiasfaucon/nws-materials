<template>
    <section>
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
                        <div class="control mt-4">
                            <input class="input is-rounded" type="text" v-model="material_quantite">
                        </div>
                        <button class="button is-link is-rounded mt-5" @click=updateSelectedMateriel()>Mettre à jour</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>import Swal from 'sweetalert2';
import { computed, onMounted, ref } from 'vue';
import { getMaterial, updateMaterial } from '../../../utils/api';

const route = useRoute()
const id = route.params.id

let material = ref([])
const material_denomination = ref('')
const material_quantite = ref('')
    onMounted(async () => {
        material.value = await getMaterial(id)
        material_denomination.value = material.value.denomination
        material_quantite.value = material.value.quantite
        // material_location.value = material.value.rentals
        // console.log(material.value)
    })

async function updateSelectedMateriel(){
    let body = {
        denomination: material_denomination.value,
        quantite: material_quantite.value,
    }
    // console.log(body)
    let createMaterialPromise = await updateMaterial(id, body)
    if (createMaterialPromise.statusCode === 500) {
        Swal.fire({
            title: 'Impossible de mettre à jour l\'équipement',
            text: 'Cet équipement existe déjà',
            icon: 'error',
            confirmButtonText: 'Suivant'
        })
    }
    else{
        Swal.fire({
            title: 'L\'équipement a été mis à jour',
            icon: 'success',
            confirmButtonText: 'Suivant'
        })
    }
}
</script>