import { defineStore } from 'pinia'

export const useUsersStore = defineStore('data', {
    state: () => {
        return {
             users: [] 
            }
      },
      actions: {
        setUsers(body) {
          this.users = body
        },
    }
})