<template>
    <div class="is-flex">
        <td class="level-right">
            <nuxt-link @click="deleteSelectedUser(user.id)">
                <a class="button is-small is-primary">Supprimer</a>
            </nuxt-link>
       </td>
       <td class="level-right">
        <nuxt-link :to="`users/page-user/${user.id}`">
            <a class="button is-small is-primary">Update</a>
        </nuxt-link>
        </td>
    </div>
</template>

<script lang="ts" setup>
import { useUsersStore } from '~~/store/users';
import { deleteUser, getUsers } from '../utils/api'
const props = defineProps(['user'])

const useUsers = useUsersStore()

const users = ref([])

async function deleteSelectedUser(id){
    deleteUser(id)
    users.value = await getUsers()
    useUsers.setUsers(users.value)
}
</script>