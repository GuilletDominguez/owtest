import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Characters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Characters" */ '../components/Characters.vue')
  },
  {
    path: '/episodes',
    name: 'Episodes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Episodes" */ '../components/Episodes.vue')
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
