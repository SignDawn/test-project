import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  { path: "/home", component: () => import("../views/Home.vue") },
  //   TODO: 前两个不报错， /home/test 情况下会报 404
  { path: "/home/test", component: () => import("../views/Home.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
