<template>
    <tr class="is-large">
        <td class="is-vcentered">{{ material.id }}</td>
        <td class="is-vcentered">{{ material.denomination }}</td>
        <!-- <td class="is-vcentered">{{ material.quantite }}</td> -->
        <td class="is-vcentered">{{ material.availability }}</td>
        <td class="is-vcentered"><ActionsMaterials :material="material" /></td>
    </tr>
</template>

<script setup>
const props = defineProps(['material'])
console.log(props.material)
</script>

<style scoped>
</style>