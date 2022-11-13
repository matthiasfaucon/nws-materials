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
import Swal from 'sweetalert2';

const props = defineProps(['rental'])
const useRentals = useRentalsStore()

const rentals = ref([])

async function deleteSelectedRentals(rental) {
  let createRentalPromise = await deleteRental(rental.id)
  if (createRentalPromise.statusCode === 500) {
    Swal.fire({
      title: 'Impossible de supprimer la location',
      text: 'La location n\'existe plus',
      icon: 'error',
      confirmButtonText: 'Suivant'
    })
  }
  else {
    let bodyMaterial = {
      availability: "AVAILABLE"
    }
    updateMaterial(rental.materialsId, bodyMaterial)
    rentals.value = await getRentals()
    useRentals.$patch({
      rentals: rentals.value
    })
    Swal.fire({
      title: 'La location a bien été supprimer',
      icon: 'success',
      confirmButtonText: 'Suivant'
    })
  }

}

async function relanceSelectedrental(rental) {
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
  
  let createRentalPromise = await sendMailRelanceUser(body)
  if (createRentalPromise.statusCode === 500 || !body.userData.emailUser || !body.materialData.denominationMaterial || !body.rentalData.beginingRentals || !body.rentalData.endingRentals ) {
    Swal.fire({
      title: 'Impossible d\'envoyer le mail de relance',
      text: 'La location n\'existe plus',
      icon: 'error',
      confirmButtonText: 'Suivant'
    })
  }
  else {
    let bodyMaterial = {
      availability: "AVAILABLE"
    }
    updateMaterial(rental.materialsId, bodyMaterial)
    rentals.value = await getRentals()
    useRentals.$patch({
      rentals: rentals.value
    })
    Swal.fire({
      title: 'Mail de relance envoyé',
      icon: 'success',
      confirmButtonText: 'Suivant'
    })
  }
}
</script>