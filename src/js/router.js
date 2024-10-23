import { createWebHistory, createRouter } from 'vue-router'

import Home from '../templates/Home.vue'
import Menu from '../templates/Menu.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
]

export const router = createRouter({
  history: createWebHistory(),
  base: '/coffee-house-vue3/',
 routes,
 scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
        offset: { x: 0, y: -80 }
      };
    }
    return { left: 0, top: 0 };  // Go to the top of the page if no hash
  },
});

