import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../views/AppLayout.vue'
import HomePage from '../views/HomePage.vue'
import { demoRoutes } from './sidebar'

export const router = createRouter({
  history: createWebHistory('/ant-design-hmfw/'),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/guide/getting-started',
          component: () => import('../views/GettingStarted.vue'),
        },
        { path: '/guide/theming', component: () => import('../views/Theming.vue') },
        { path: '/guide/i18n', component: () => import('../views/I18n.vue') },
        { path: '/guide/changelog', component: () => import('../../CHANGELOG.md') },
        ...demoRoutes,
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

// 根据路由 meta.title 更新文档标题
const BASE_TITLE = '@hmfw/ant-design'
router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ? `${title} - ${BASE_TITLE}` : BASE_TITLE
})

// 恢复从 404.html 重定向过来的路径
const redirect = sessionStorage.getItem('redirect')
if (redirect) {
  sessionStorage.removeItem('redirect')
  router.replace(redirect.replace('/ant-design-hmfw', ''))
}
