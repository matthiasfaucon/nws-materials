<template>
  <div class="is-flex">
    <td class="level-right">
      <nuxt-link :to="`rentals/page-rentals/${rental.id}`">
        <a class="button is-small is-primary">Update</a>
      </nuxt-link>
    </td>
    <td class="level-right">
      <nuxt-link @click="deleteSelectedRentals(rental)">
        <a class="button is-small is-primary">Rendre</a>
      </nuxt-link>
    </td>
  </div>
</template>

<script lang="ts" setup>
import { deleteRental, updateMaterial, getRentals } from '../utils/api'
import { useRentalsStore } from '../store/rentals';

const props = defineProps(['rental'])
const useRentals = useRentalsStore()

const rentals = ref([])

async function deleteSelectedRentals(rental) {
  console.log(rental)
  deleteRental(rental.id)
  let bodyMaterial = {
        availability : "AVAILABLE"
    }
  updateMaterial(rental.materialsId, bodyMaterial)
  rentals.value = await getRentals() 
  useRentals.setRentals(rentals.value)
}
</script>