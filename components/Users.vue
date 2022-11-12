<template>
  <div class="columns">
    <div class="column is-full">
      <div class="card">
        <div class="card-table">
          <table class="table">
            <thead>
              <tr>
                <th width="3%">ID</th>
                <th width="5%">Nom</th>
                <th width="5%">Prénom</th>
                <th width="8%">E-mail</th>
                <th width="5%">Date création</th>
                <th width="5%">Date modification</th>
                <th width="8%">Actions</th>
              </tr>
            </thead>
            <tbody class="is-large">
              <UnUser :user="user" v-for="user in usersComputed" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="column is-6">
      <div class="card">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, onUpdated, ref } from 'vue';
import { getUsers, sendMailUser } from '../utils/api';
import { useUsersStore } from '../store/users';



const users = ref([])
const useUsers = useUsersStore()

const usersComputed = computed(() => {
  return useUsers.users
})

onMounted(async () => {
  users.value = await getUsers()
  useUsers.setUsers(users.value)
  // sendMailUser()
})

    // let el = computed (() => users.el.value)
    // console.log(el)
</script>