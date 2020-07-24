<template>
  <div class="content-container">
    <h1>List of Users:</h1>
    <br>
    <table id="users-table">
      <!-- Table Header Row -->
      <tr>
        <th>User ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
      <!-- Table Elements (Rows) -->
      <tr v-for="user in users" v-bind:key="user">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
    <br>
  </div>
</template>

<script>
export default {
  name: 'ListUsers',
  props: {
    users: Array
  }
}
</script>

<style scoped>
table {
  table-layout: fixed;
}

td, th {
  border: 1px solid #ddd;
  padding: 8px;
  overflow: hidden;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f0ad4e;
  color: white;
}

button {
  padding: 4px;
  border-radius: 4px;
  font-size: 0.8em;
  margin: 0 4px;
}

#deleteButton:hover, #cancelEditButton:hover {
  color: red;
  cursor: pointer;
}

#editButton:hover {
  color: green;
  cursor: pointer;
}

#updateButton:hover {
  color: green;
  cursor: pointer;
}

input {
  font-size: 0.8em;
}

.textInputColumn {
  padding-right: 2em;
  min-width: 140px;
}
.actionColumn {
  padding-right: 8em;
}
</style>
