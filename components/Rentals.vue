<template>
    <div class="columns">
        <div class="column is-full">
            <div class="card">
                <div class="card-table">
                    <table class="table">
                        <HeaderListingRentals />
                        <tbody class="is-large">
                            <UnRentals :rental="rental" v-for="rental in useRentals.$state.rentals" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getRentals, getUsersApi } from '../utils/api';
import UnRentals from './UnRentals.vue';
import { useRentalsStore } from '~~/store/rentals';

const rentals = ref([])
const useRentals = useRentalsStore()

rentals.value = await getRentals()
useRentals.$patch({
    rentals: rentals.value
})
onMounted(async () => {
})

</script>