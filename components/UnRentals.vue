<template>
    <tr>
        <td class="is-vcentered">{{ rental.id }}</td>
        <td class="is-vcentered">{{ rental.materialsId }}</td>
        <td class="is-vcentered">{{ rental.materials.denomination }}</td>
        <td class="is-vcentered">{{ rental.userId }}</td>
        <td class="is-vcentered">{{ `${rental.user.nom} ${rental.user.prenom}` }}</td>
        <td class="is-vcentered">{{ beginingRentals }}</td>
        <td class="is-vcentered">{{ endingRentals }}</td>
        <td class="is-vcentered"><ActionsRentals :rental="rental"/></td>
    </tr>
</template>

<script setup>
import { setFormatDate  } from "../utils/utils";
const props = defineProps(['rental'])
let beginingRentals = setFormatDate(new Date(props.rental.beginingRentals))
let endingRentals = setFormatDate(new Date(props.rental.endingRentals))
// console.log(props)
</script>

<!-- https://github.com/prisma/prisma -->

<style scoped>
</style>