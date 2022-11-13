<template>
  <div class="is-flex">
    <td class="level-right">
      <nuxt-link :to="`rentals/page-rentals/${rental.id}`">
        <a class="button is-small is-primary">Mettre à jour</a>
      </nuxt-link>
    </td>
    <td class="level-right">
      <nuxt-link @click="deleteSelectedRentals(rental)">
        <a class="button is-small is-primary">Rendre</a>
      </nuxt-link>
    </td>
    <td class="level-right">
      <nuxt-link @click="relanceSelectedrental(rental)">
        <a class="button is-small is-primary">Relance</a>
      </nuxt-link>
    </td>
  </div>
</template>

<script lang="ts" setup>
import { deleteRental, updateMaterial, getRentals, sendMailRelanceUser } from '../utils/api'
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

async function relanceSelectedrental(rental){
  console.log(rental.materials)
  let body = {
        userData: {
          emailUser: rental.user.email
        },
        materialData: {
          denominationMaterial: rental.materials.denomination
        },
        rentalData: {
          beginingRentals: rental.beginingRentals,
          endingRentals: rental.endingRentals
        }
    }
  sendMailRelanceUser(body)
}
</script>