<template>
    <tr>
        <td class="is-vcentered">{{ rental.id }}</td>
        <td class="is-vcentered">{{ rental.materialsId }}</td>
        <td class="is-vcentered">{{ rental.materials.denomination }}</td>
        <td class="is-vcentered">{{ rental.userId }}</td>
        <td class="is-vcentered">{{ `${useUsers.$state.users[rental.userId-1].nom} ${useUsers.$state.users[rental.userId-1].prenom}` }}</td>
        <td class="is-vcentered">{{ beginingRentals }}</td>
        <td class="is-vcentered">{{ endingRentals }}</td>
        <td class="is-vcentered"><ActionsRentals :rental="rental"/></td>
    </tr>
</template>

<script setup>
import { setFormatDate  } from "../utils/utils";
import { useUsersStore } from '../store/users';
const props = defineProps(['rental'])
let beginingRentals = setFormatDate(new Date(props.rental.beginingRentals))
let endingRentals = setFormatDate(new Date(props.rental.endingRentals))

const useUsers = useUsersStore()

const users = ref([])
users.value = await getUsersApi()
useUsers.$patch({
  users: users.value
})
</script>

<style scoped>
</style>