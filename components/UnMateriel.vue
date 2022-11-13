<template>
    <tr class="is-large" v-if="material.quantite > 0">
        <td class="is-vcentered">{{ material.id }}</td>
        <td class="is-vcentered">{{ material.denomination }}</td>
        <!-- <td>{{ material.createdAt }}</td>
        <td>{{ material.updatedAt }}</td> -->
        <td class="is-vcentered">{{ material.availability }}</td>
        <td class="is-vcentered"><ActionsMaterials :material="material" /></td>
    </tr>
</template>

<script setup>
const props = defineProps(['material'])
// console.log(props)
</script>

<!-- https://github.com/prisma/prisma -->

<style scoped>
</style>