<template>
  <div class="content-container">
    <h1>Add a New User:</h1>
    <br>
    <div class="add-user-input">
      <label for="newName">Name:</label>
      <input type="text" id="newName" v-model="user.name" placeholder="Enter your name..." />
      <br>
      <label for="newUsername">Username:</label>
      <input type="text" id="newUsername" v-model="user.username" placeholder="Enter your username..." />
      <br>
      <label for="newEmail">Email:</label>
      <input type="email" id="newEmail" v-model="user.email" placeholder="Enter your email..." />
      <br>
      <div>
        <button type="submit" v-on:click="addNewUser">Add User</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddNewUser',
  data () {
    return {
      user: {
        name: '',
        username: '',
        email: ''
      }
    }
  },
  methods: {
    addNewUser () {
      if ((this.user.name !== '') && (this.user.username !== '') && (this.user.email !== '')) {
        this.$emit('create-user', this.user)

        // Clear the variables used for reading in the new user's info
        this.user.name = ''
        this.user.username = ''
        this.user.email = ''
      }
    }
  }
}
</script>

<style scoped>
.content-container {
  width: 70%;
}

.add-user-input label {
  float: left;
  width: 25%;
  margin-top: 6px;
  padding: 4px;
}

.add-user-input input,button {
  float: left;
  width: 75%;
  margin-top: 6px;
  padding: 4px;
  font-size: 1em;
}

.add-user-input button:focus {
  border-color:#333;
}

.add-user-input button {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
