import { createWebHistory, createRouter } from 'vue-router'

import Home from '../templates/Home.vue'
import Menu from '../templates/Menu.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
]

export const router = createRouter({
 history: createWebHistory(),
 routes,
 scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { left: 0, top: 0 };  // Go to the top of the page if no hash
  },
});

