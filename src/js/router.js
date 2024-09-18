import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../templates/Home.vue'
import Menu from '../templates/Menu.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
]

export const router = createRouter({
 history: createMemoryHistory(),
 routes,
});

