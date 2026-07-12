import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../views/AppLayout.vue'
import HomePage from '../views/HomePage.vue'
import { demoRoutes } from './demo-routes.gen'

const componentRoutes = Object.entries(demoRoutes).map(([name, component]) => ({
  path: `components/${name}`,
  component,
}))

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
          path: 'guide/getting-started',
          component: () => import('../views/GettingStarted.vue'),
        },
        { path: 'guide/theming', component: () => import('../views/Theming.vue') },
        { path: 'guide/i18n', component: () => import('../views/I18n.vue') },
        { path: 'guide/changelog', component: () => import('../../CHANGELOG.md') },
        ...componentRoutes,
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

// 恢复从 404.html 重定向过来的路径
const redirect = sessionStorage.getItem('redirect')
if (redirect) {
  sessionStorage.removeItem('redirect')
  router.replace(redirect.replace('/ant-design-hmfw', ''))
}
