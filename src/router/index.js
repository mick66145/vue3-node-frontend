import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/front',
      children: [
        {
          path: 'front',
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
