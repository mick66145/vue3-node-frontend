import { createRouter, createWebHistory } from 'vue-router'

/* Layout */
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          component: () => import('@/views/front/Front.vue'),
          name: 'Front',
          meta: { title: 'front' },
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/views/error-page/404.vue'),
    },
  ],
})

export default router
