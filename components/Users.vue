<template>
  <div class="columns">
    <div class="column is-full">
      <div class="card">
        <div class="card-table">
          <table class="table">
            <HeaderListingUsers />
            <tbody class="is-large">
              <UnUser :user="user" v-for="user in useUsers.$state.users" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { getUsersApi } from '../utils/api';
import { useUsersStore } from '../store/users';

const users = ref([])
const useUsers = useUsersStore()

users.value = await getUsersApi()
await useUsers.$patch({
  users: users.value
})

</script>