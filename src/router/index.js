import { createRouter, createWebHistory } from 'vue-router'
import { createMetaManager, defaultConfig } from 'vue-meta'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue'),
      meta: { title: 'Главная страница' }

      
    },
    {
      path: '/associations',
      name: 'associations-list',
      component: () => import('../pages/Associations/List.vue')
    },
    {
      path: '/association/:id',
      name: 'associations-item',
      component: () => import('../pages/Associations/Item-new.vue'),
      meta: { title: 'Структура АКК' }
    },
    {
      path: '/association/2',
      name: 'association-2',
      component: () => import('../pages/Associations/Item2.vue'),
      meta: { title: 'Президиум АКК' }
    },
    {
      path: '/association/3',
      name: 'association-3',
      component: () => import('../pages/Associations/Item3.vue'),
      meta: { title: 'Попечительный союз' }
    },
    {
      path: '/association/4',
      name: 'association-4',
      component: () => import('../pages/Associations/Item4.vue'),
      meta: { title: 'План Развития АКК до 2027 года' }
    },
    {
      path: '/association/5',
      name: 'association-5',
      component: () => import('../pages/Associations/Item5.vue'),
      meta: { title: 'Проект развития ОЮЛ' }
    },
    {
      path: '/association/6',
      name: 'association-6',
      component: () => import('../pages/Associations/Item6.vue'),
      meta: { title: 'История АКК' }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../pages/News/List.vue'),
      meta: { title: 'Новости' }
    },
    {
      path: '/news/:id',
      name: 'news-item',
      component: () => import('../pages/News/Item.vue'),
      meta: { title: 'Новости' }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../pages/News/Search.vue'),
      meta: { title: 'Поиск' }
    },
    // {
    //   path: '/ilbo',
    //   name: 'ilbo',
    //   component: () => import('../pages/Ilbo.vue')
    // },
    {
      path: '/ilbo',
      name: 'ilbo',
      component: () => import('../pages/Ilbo100/List.vue'),
      meta: { title: 'Коре Ильбо 100 лет' }
    },
    {
      path: '/ilbo/:id',
      name: 'ilbo-item',
      component: () => import('../pages/Ilbo100/Item.vue'),
      meta: { title: 'Коре Ильбо 100 лет' }
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('../pages/Library.vue'),
      meta: { title: 'Библиотека' }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../pages/Gallery/List.vue'),
      meta: { title: 'Галерея' }
    },
    {
      path: '/gallery/:id',
      name: 'gallery-item',
      component: () => import('../pages/Gallery/Item.vue'),
      meta: { title: 'Галерея' }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/Contacts.vue'),
      meta: { title: 'Контакты' }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Всегда прокручивайте к верху, кроме случаев с сохранённой позицией
    if (savedPosition) {
      return { x: 0, y: 0 };
    } else {
      return { x: 0, y: 0 };
    }
  },
})



// Глобальное изменение заголовка для всех страниц
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Заголовок по умолчанию';
  next();
});


export default router
