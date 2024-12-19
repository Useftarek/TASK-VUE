<template>
  <nav class="navbar">
    <ul>
      <li v-for="link in myRoutes" :key="link.name">
        <router-link :to="link.path">{{ link.meta.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
  data() {
    return {
      myRoutes: [],
    };
  },
  mounted() {
    this.myRoutes = this.$router.options.routes;
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background: #1d1d1d;
  padding: 30px;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
    list-style: none;

    li {
      a {
        text-decoration: none;
        color: #ffffff7c;
        font-size: 1.5rem;
        &.router-link-exact-active {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
