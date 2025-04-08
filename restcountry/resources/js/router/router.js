import { createRouter, createWebHistory } from 'vue-router';
import Show from '../Pages/Countries/Show.vue';

const routes = [
    {
        path: '/countries/:name',
        name: 'country.show',
        component: () => import('@/Pages/Countries/Show.vue'),
      }
      
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
