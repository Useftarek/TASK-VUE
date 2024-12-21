<template>
  <div class="container">
    <form action="" @submit.prevent>
      <label for="emailoruser">Email Or UserName</label>
      <input
        v-model="emailoruser"
        type="text"
        name="emailoruser"
        id="emailoruser"
      />
      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" id="password" />
      <button @click="handleLogin">Submit</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      emailoruser: "",
      password: "password",
      error: "",
      users: [],
    };
  },
  methods: {
    async getAllusers() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.users = data;
    },
    checkUser() {
      return this.users.find(
        (user) =>
          user.username == this.emailoruser ||
          (user.email == this.emailoruser && this.password === "password")
      );
    },
    navigateToDashboard() {
      this.$router.push("/dashboard/${user.id}/${user.name}");
    },
    handleLogin() {
      const user = this.checkUser();
      if (user) {
        this.navigateToDashboard();
      } else {
        this.error = "invaild credentails";
      }
      this.storeUser(user);
    },
    storeUser(user) {
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
  mounted() {
    this.getAllusers();
  },
};
</script>

<style scoped lang="scss">
.container {
  margin: auto;
  width: 600px;
  height: 600px;
  .error {
    color: red;
    margin-top: 10px;
  }
  button {
    background: #1d1d1d;
    border: none;
    padding: 15px 150px;
    border-radius: 15px;
    color: #fff;
    cursor: pointer;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    label {
      font-weight: 700;
      font-size: 1.3rem;
    }
    input {
      background: rgb(218, 218, 219);
      padding: 25px 250px;
      padding-inline-start: 30px;
      border: none;
      border-radius: 1.5rem;
      margin-bottom: 3rem;
      margin-top: 1rem;
    }
  }
}
</style>
