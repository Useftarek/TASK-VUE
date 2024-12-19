import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/loginPage/LoginPage.vue";
import DashBoard from "@/views/dashBoard/DashBoard.vue";
import Allusers from "@/views/allUsers/AllUsers.vue";
import AllPosts from "@/views/posts/AllPosts.vue";
import PostDetails from "@/views/postDetails/PostDetails.vue";

const routes = [
  {
    path: "/dashboard",
    name: DashBoard,
    component: DashBoard,
    meta: {
      title: "Dashboard",
    },
  },
  {
    path: "/users",
    name: Allusers,
    component: Allusers,
    meta: {
      title: "Users",
    },
  },
  {
    path: "/posts",
    name: AllPosts,
    component: AllPosts,
    meta: {
      title: "Posts",
    },
  },
  {
    path: "/",
    name: LoginPage,
    component: LoginPage,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/post/:postId",
    name: "postDetails",
    component: PostDetails,
    props: true,
    meta: {
      title: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
