<template>
    <div class="is-flex">
        <nuxt-link @click="deleteSelectedMaterial(material.id)">
                <a class="button is-small is-link">Supprimer</a>
        </nuxt-link>
        <nuxt-link :to="`materials/page-material/${material.id}`">
            <a class="button is-small is-link ml-4">Mettre à jour</a>
        </nuxt-link> 
    </div>
</template>

<script lang="ts" setup>
import { deleteMaterial, getMaterials } from '../utils/api'
import { useMaterialsStore } from '../store/materials';
import Swal from 'sweetalert2';

const props = defineProps(['material'])

const useMaterials = useMaterialsStore()

const materials = ref([])

async function deleteSelectedMaterial(id){
    let createMaterialPromise = await deleteMaterial(id)
    if (createMaterialPromise.statusCode === 500) {
        Swal.fire({
            title: 'Impossible de supprimer l\'équipement',
            text: 'L\'équipement est associé à une location, veuillez donc supprimer la location avant de supprimer cet équipement',
            icon: 'error',
            confirmButtonText: 'Suivant'
        })
    }
    else{
        Swal.fire({
            title: 'L\'équipement a bien été supprimé',
            icon: 'success',
            confirmButtonText: 'Suivant'
        })
    }
    materials.value = await getMaterials()
    useMaterials.$patch({
      materials: materials.value
    })
}

</script>