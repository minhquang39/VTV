import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PostView from "@/views/PostView.vue";
const routes = [
  { path: "/", component: HomeView, name: "Home" },
  {
    path: "/post/:id",
    component: PostView,
    name: "Post",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
