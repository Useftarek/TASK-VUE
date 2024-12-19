<template>
  <div class="users-page">
    <h2>All Users</h2>
    <div class="filter-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name..."
        class="search-input"
      />
    </div>
    <table v-if="filteredUsers.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No users found.</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
      searchQuery: "",
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  methods: {
    async getAllUsers() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.users = data;
    },
  },
  mounted() {
    this.getAllUsers();
  },
};
</script>

<style scoped lang="scss">
.users-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 8px;
}

.filter-container {
  margin-bottom: 20px;
  text-align: center;
}

.search-input {
  width: 300px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #990921;
  color: white;
}

p {
  text-align: center;
  color: #888;
}
</style>
