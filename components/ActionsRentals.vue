<template>
  <div class="is-flex">
      <nuxt-link :to="`rentals/page-rentals/${rental.id}`">
        <a class="button is-small is-link">Mettre à jour</a>
      </nuxt-link>
      <nuxt-link @click="deleteSelectedRentals(rental)">
        <a class="button is-small is-link ml-4">Rendre</a>
      </nuxt-link>
      <nuxt-link @click="relanceSelectedrental(rental)">
        <a class="button is-small is-link ml-4">Relance</a>
      </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
import { deleteRental, updateMaterial, getRentals, sendMailRelanceUser } from '../utils/api'
import { useRentalsStore } from '../store/rentals';
import Swal from 'sweetalert2';
import { useUsersStore } from '../store/users';

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
      title: 'La location a bien été supprimé',
      icon: 'success',
      confirmButtonText: 'Suivant'
    })
  }

}

async function relanceSelectedrental(rental) {
  const useUsers = useUsersStore()
  let userTemp = useUsers.$state.users.find(({id}) => id === rental.user.id)
  let body = {
    userData: {
      emailUser: userTemp.mail
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