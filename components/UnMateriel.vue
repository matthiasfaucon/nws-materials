<template>
    <tr class="is-large" v-if="material.quantite > 0">
        <td>{{ material.id }}</td>
        <td>{{ material.denomination }}</td>
        <td>{{ material.createdAt }}</td>
        <td>{{ material.updatedAt }}</td>
        <td>{{ material.availability }}</td>
        <td><ActionsMaterials :material="material" /></td>
    </tr>
</template>

<script setup>
const props = defineProps(['material'])
// console.log(props)
</script>

<!-- https://github.com/prisma/prisma -->

<style scoped>
</style>