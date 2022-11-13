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
              <UnUser :user="user" v-for="user in useUsers.$state.users" />
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
import { computed, onBeforeMount, onMounted, ref} from 'vue';
import { getUsers, sendMailUser } from '../utils/api';
import { useUsersStore } from '../store/users';

const users = ref([])
const useUsers = useUsersStore()

    users.value = await getUsers()
    await useUsers.$patch({
      users: users.value
})

</script>