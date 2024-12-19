<template>
  <TheNav />
  <router-view />
</template>
<script>
import TheNav from "@/components/navbar/Navbar.vue";
export default {
  components: {
    TheNav,
  },
};
</script>
