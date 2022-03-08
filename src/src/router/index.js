import VueRouter, { createWebHistory, createRouter } from 'vue-router';
import Vue from 'vue';
import Home from './../views/Home.vue';
import About from './../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

Vue.use(VueRouter);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
