import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/associations',
      name: 'associations-list',
      component: () => import('../pages/Associations/List.vue')
    },
    {
      path: '/association/:id',
      name: 'associations-item',
      component: () => import('../pages/Associations/Item.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../pages/News/List.vue')
    },
    {
      path: '/news/:id',
      name: 'news-item',
      component: () => import('../pages/News/Item.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../pages/News/Search.vue')
    },
    {
      path: '/ilbo',
      name: 'ilbo',
      component: () => import('../pages/Ilbo.vue')
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('../pages/Library.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../pages/Gallery/List.vue')
    },
    {
      path: '/gallery/:id',
      name: 'gallery-item',
      component: () => import('../pages/Gallery/Item.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/Contacts.vue')
    },
  ]
})

export default router
