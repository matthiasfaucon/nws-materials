<template>
 <section class="has-background-black-bis is-flex is-flex-direction-row hero is-fullheight">
        <LeftMenu />
        <div class="column is-flex is-flex-direction-column has-text-white">
            <h1 class="is-uppercase ml-5 is-size-4 has-text-weight-medium">Modifier le matériel</h1>
            <div class="column is-half mt-5">
                <div class="control">
                    <input class="input is-rounded" type="text" v-model="material_denomination" :placeholder="`${material.nom}`">
                </div>
                <div class="control mt-4">
                    <input class="input is-rounded" type="text" v-model="material_quantite" readonly>
                </div>
                <button class="button is-link is-rounded mt-5" @click=updateSelectedMateriel() >Mettre à jour</button>
            </div>
      </div>
  </section>
</template>

<script lang="ts" setup>import { computed, onMounted, ref } from 'vue';
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
    updateMaterial(id, body)
}
</script>