import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PostView from '@/views/PostView.vue';
import CategoryView from '@/views/CategoryView.vue';
const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  {
    path: '/post/:id',
    component: PostView,
    name: 'Post',
  },
  {
    path: '/:category',
    component: CategoryView,
    name: 'Category',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
