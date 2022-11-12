<template>
    <tr>
        <td>{{ rental.id }}</td>
        <td>{{ rental.materialsId }}</td>
        <td>{{ rental.materials.denomination }}</td>
        <td>{{ rental.userId }}</td>
        <td>{{ `${rental.user.nom} ${rental.user.prenom}` }}</td>
        <td>{{ beginingRentals }}</td>
        <td>{{ endingRentals }}</td>
        <td><ActionsRentals :rental="rental" /></td>
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