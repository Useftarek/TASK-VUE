<template>
  <h1>Single Post</h1>
  <div v-if="error" class="error">{{ error }}</div>
  <div v-if="post" class="post-details">
    <h2 class="post-title">Title: {{ post.title }}</h2>
    <h3 class="post-author">Author: {{ post.id }}</h3>
    <p class="post-body">Body: {{ post.body }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: null,
      error: "",
    };
  },
  methods: {
    async fetchPostDetails() {
      try {
        const postId = this.$route.params.postId;
        const { data } = await axios.get(
          `https://dummyjson.com/posts/${postId}`
        );
        this.post = data;
      } catch (error) {
        this.error = error.message;
      }
    },
  },
  mounted() {
    this.fetchPostDetails();
  },
};
</script>

<style scoped lang="scss">
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.5rem;
  color: red;
  font-weight: bold;
}
h1 {
  text-align: center;
  font-size: 3rem;
}
.post-details {
  width: 700px;
  height: 300px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 18px;
    color: #777;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
  }
}
</style>
