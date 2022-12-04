<template>
    <tr class="is-large">
        <td class="is-vcentered">{{ user.id }}</td>
        <td class="is-vcentered">{{ user.nom }}</td>
        <td class="is-vcentered">{{ user.prenom }}</td>
        <td class="is-vcentered">{{ user.mail }}</td>
        <!-- <td class="is-vcentered">{{ user.createdAt }}</td>
        <td class="is-vcentered">{{ user.updatedAt }}</td> -->
        <!-- <td class="is-vcentered"><ActionsUsers :user="user"/></td> -->
    </tr>
</template>

<script setup>
const props = defineProps(['user'])
</script>

<style scoped>

</style>