import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/loginPage/LoginPage.vue";
import DashBoard from "@/views/dashBoard/DashBoard.vue";
import Allusers from "@/views/allUsers/AllUsers.vue";
import AllPosts from "@/views/posts/AllPosts.vue";
import PostDetails from "@/views/postDetails/PostDetails.vue";
import PageNotFound from "@/views/pagenotfound/PageNotFound.vue";

const routes = [
  {
    path: "/dashboard/:id/:name",
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
    meta: {
      title: "",
    },
  },
  {
    name: "PageNotFound",
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
    meta: {
      title: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
