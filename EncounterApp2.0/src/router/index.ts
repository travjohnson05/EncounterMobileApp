import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/events',
    component: () => import ('../views/Events.vue')
  },
  {
    path: '/podcasts',
    component: () => import ('../views/Podcasts.vue')
  },
  {
    path: '/signups',
    component: () => import ('../views/Signups.vue')
  },
  {
    path: '/give',
    redirect: '/home'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
