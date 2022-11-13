<template>
    <div class="columns">
        <div class="column is-full">
            <div class="card">
                <div class="card-table">
                    <table class="table">
                        <HeaderListingMaterials />
                        <tbody class="is-large">
                            <UnMateriel :material="material" v-for="material in useMaterials.$state.materials" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, onUpdated, ref } from 'vue';
import { useMaterialsStore } from '~~/store/materials';
import { getMaterials, sendMailUser } from '../utils/api';
import UnMateriel from './UnMateriel.vue';

const useMaterials = useMaterialsStore()
const materials = ref([])

onMounted(async () => {
    materials.value = await getMaterials()
    useMaterials.$patch({
        materials: materials.value
    })
})

    // let el = computed (() => users.el.value)
    // console.log(el)
</script>