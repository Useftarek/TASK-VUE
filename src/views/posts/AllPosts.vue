<template>
  <div v-if="error" class="error">{{ error }}</div>
  <div>
    <h2>All Posts</h2>
    <div class="posts-container">
      <div v-for="post in posts" :key="post.id" class="post-item">
        <router-link :to="{ name: 'postDetails', params: { postId: post.id } }">
          <div class="post-content">
            <h2>Title: {{ post.title }}</h2>
            <h3>id: {{ post.id }}</h3>
            <p>Body: {{ post.body }}</p>
            <p v-if="error" class="error">{{ error }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      error: "",
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const { data } = await axios.get("https://dummyjson.com/posts");
        this.posts = data.posts;
      } catch (error) {
        this.error = error.message;
      }
    },
  },
  mounted() {
    this.fetchPosts();
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
h2 {
  text-align: center;
  font-size: 3rem;
}
.posts-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.post-item {
  width: 700px;
  height: 300px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  a {
    text-decoration: none;
    color: black;
  }

  .post-content {
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
}
</style>
