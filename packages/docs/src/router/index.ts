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
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: 'guide/getting-started', component: () => import('../../guide/getting-started.md') },
        { path: 'guide/theming', component: () => import('../../guide/theming.md') },
        { path: 'guide/i18n', component: () => import('../../guide/i18n.md') },
        ...componentRoutes,
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
