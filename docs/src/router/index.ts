import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'
import HomePage from '../pages/HomePage.vue'

const demoMds = import.meta.glob('../../demos/*/*.md')

const componentRoutes = Object.entries(demoMds)
  .filter(([p]) => /\/demos\/([^/]+)\/\1\.md$/.test(p))
  .map(([p, component]) => ({
    path: `components/${p.match(/\/demos\/([^/]+)\//)![1]}`,
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
          component: () => import('../../guide/getting-started.md'),
        },
        { path: 'guide/theming', component: () => import('../../guide/theming.md') },
        { path: 'guide/i18n', component: () => import('../../guide/i18n.md') },
        { path: 'guide/changelog', component: () => import('../../guide/changelog.md') },
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
