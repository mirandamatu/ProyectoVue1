import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/Contador.vue')
    },
    {
      path: '/listaDeTareas',
      name: 'listaDeTareas',
      component: () => import('../components/ListaDeTarea.vue')
    }
  ],
})

export default router
