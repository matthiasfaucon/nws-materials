<template>
    <div class="is-flex">
    <td class="level-right">
       <nuxt-link @click="deleteSelectedMaterial(material.id)">
            <a class="button is-small is-primary">Delete</a>
       </nuxt-link>
    </td>
    <td class="level-right">
       <nuxt-link :to="`materials/page-material/${material.id}`">
        <a class="button is-small is-primary">Update</a>
       </nuxt-link> 
    </td>
    </div>
</template>

<script lang="ts" setup>
import { deleteMaterial, getMaterials } from '../utils/api'
import { useMaterialsStore } from '../store/materials';

const props = defineProps(['material'])

const useMaterials = useMaterialsStore()

const materials = ref([])

async function deleteSelectedMaterial(id){
    deleteMaterial(id)
    materials.value = await getMaterials()
    useMaterials.setMaterials(materials.value)
}

</script>