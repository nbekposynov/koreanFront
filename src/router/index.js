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
      path: '/association/2',
      name: 'association-2',
      component: () => import('../pages/Associations/Item2.vue')
    },
    {
      path: '/association/3',
      name: 'association-3',
      component: () => import('../pages/Associations/Item3.vue')
    },
    {
      path: '/association/4',
      name: 'association-4',
      component: () => import('../pages/Associations/Item4.vue')
    },
    {
      path: '/association/5',
      name: 'association-5',
      component: () => import('../pages/Associations/Item5.vue')
    },
    {
      path: '/association/6',
      name: 'association-6',
      component: () => import('../pages/Associations/Item6.vue')
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
    // {
    //   path: '/ilbo',
    //   name: 'ilbo',
    //   component: () => import('../pages/Ilbo.vue')
    // },
    {
      path: '/ilbo',
      name: 'ilbo',
      component: () => import('../pages/Ilbo100/List.vue')
    },
    {
      path: '/ilbo/:id',
      name: 'ilbo-item',
      component: () => import('../pages/Ilbo100/Item.vue')
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
