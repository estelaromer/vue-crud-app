<template>
  <div class="content-container">
    <app-list-users v-bind:users="users"></app-list-users>
    <app-add-new-user v-on:create-user="createUser"></app-add-new-user>
  </div>
</template>

<script>
import ListUsers from './ListUsers.vue'
import AddNewUser from './AddNewUser'

export default {
  name: 'Content',
  components: {
    'app-list-users': ListUsers,
    'app-add-new-user': AddNewUser
  },
  data () {
    return {
      users: [
        {
          id: 1,
          name: 'User #1',
          username: 'user_1',
          email: 'email1@gmail.com'
        },
        {
          id: 2,
          name: 'User #2',
          username: 'user_2',
          email: 'email2@gmail.com'
        },
        {
          id: 3,
          name: 'User #3',
          username: 'user_3',
          email: 'email3@gmail.com'
        }
      ]
    }
  },
  methods: {
    createUser (user) {
      if ((user.name !== '') && (user.username !== '') && (user.email !== '')) {
        var newUser = {
          id: this.users.length + 1,
          name: user.name,
          username: user.username,
          email: user.email
        }

        // Add the user to the local array of users
        this.users.push(newUser)
      }
    }
  }
}
</script>

<style scoped>
.content-container {
  min-width: 450px;
  margin: auto;
}
</style>
