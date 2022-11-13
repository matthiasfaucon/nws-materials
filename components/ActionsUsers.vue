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
import Swal from 'sweetalert2';
import { useUsersStore } from '~~/store/users';
import { deleteUser, getUsers } from '../utils/api'
const props = defineProps(['user'])

const useUsers = useUsersStore()

const users = ref([])

async function deleteSelectedUser(id){
    let createUserPromise = await deleteUser(id)
    console.log(createUserPromise)
    if (createUserPromise.statusCode === 500) {
        Swal.fire({
            title: 'Impossible de supprimer l\'utilisateur',
            text: 'L\'utilisateur est associé à une location, veuillez donc supprimez la location avant de supprimer cet utilisateur',
            icon: 'error',
            confirmButtonText: 'Suivant'
        })
    }
    else{
        Swal.fire({
            title: 'L\'utilisateur a bien été supprimer',
            icon: 'success',
            confirmButtonText: 'Suivant'
        })
    }
    users.value = await getUsers()
    useUsers.$patch({
        users: users.value
    })
}
</script>