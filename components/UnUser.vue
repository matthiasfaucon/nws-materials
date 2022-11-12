<template>
    <tr class="is-large">
        <td>{{ user.id }}</td>
        <td>{{ user.nom }}</td>
        <td>{{ user.prenom }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.createdAt }}</td>
        <td>{{ user.updatedAt }}</td>
        <td><ActionsUsers :user="user"/></td>
    </tr>
</template>

<script setup>
const props = defineProps(['user'])
// console.log(props)
</script>

<!-- https://github.com/prisma/prisma -->

<style scoped>

</style>