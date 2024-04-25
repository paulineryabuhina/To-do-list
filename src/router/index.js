import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue';
import Plan from '../pages/Plan.vue';
import Completed from '../pages/Completed.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan
    },
    {
      path: '/completed',
      name: 'completed',
      component: Completed
    }
  ]
})

export default router;
