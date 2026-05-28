import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'
import HomePage from '../pages/HomePage.vue'

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
        // 指南
        { path: 'guide/getting-started', component: () => import('../../guide/getting-started.md') },
        { path: 'guide/theming', component: () => import('../../guide/theming.md') },
        { path: 'guide/i18n', component: () => import('../../guide/i18n.md') },

        // 通用
        { path: 'components/button', component: () => import('../../components/button.md') },
        { path: 'components/icon', component: () => import('../../components/icon.md') },
        { path: 'components/typography', component: () => import('../../components/typography.md') },

        // 布局
        { path: 'components/divider', component: () => import('../../components/divider.md') },
        { path: 'components/flex', component: () => import('../../components/flex.md') },
        { path: 'components/grid', component: () => import('../../components/grid.md') },
        { path: 'components/layout', component: () => import('../../components/layout.md') },
        { path: 'components/space', component: () => import('../../components/space.md') },

        // 导航
        { path: 'components/anchor', component: () => import('../../components/anchor.md') },
        { path: 'components/breadcrumb', component: () => import('../../components/breadcrumb.md') },
        { path: 'components/dropdown', component: () => import('../../components/dropdown.md') },
        { path: 'components/menu', component: () => import('../../components/menu.md') },
        { path: 'components/pagination', component: () => import('../../components/pagination.md') },
        { path: 'components/steps', component: () => import('../../components/steps.md') },

        // 数据录入
        { path: 'components/auto-complete', component: () => import('../../components/auto-complete.md') },
        { path: 'components/cascader', component: () => import('../../components/cascader.md') },
        { path: 'components/checkbox', component: () => import('../../components/checkbox.md') },
        { path: 'components/date-picker', component: () => import('../../components/date-picker.md') },
        { path: 'components/form', component: () => import('../../components/form.md') },
        { path: 'components/input', component: () => import('../../components/input.md') },
        { path: 'components/input-number', component: () => import('../../components/input-number.md') },
        { path: 'components/radio', component: () => import('../../components/radio.md') },
        { path: 'components/rate', component: () => import('../../components/rate.md') },
        { path: 'components/select', component: () => import('../../components/select.md') },
        { path: 'components/slider', component: () => import('../../components/slider.md') },
        { path: 'components/switch', component: () => import('../../components/switch.md') },
        { path: 'components/time-picker', component: () => import('../../components/time-picker.md') },
        { path: 'components/upload', component: () => import('../../components/upload.md') },

        // 数据展示
        { path: 'components/avatar', component: () => import('../../components/avatar.md') },
        { path: 'components/badge', component: () => import('../../components/badge.md') },
        { path: 'components/card', component: () => import('../../components/card.md') },
        { path: 'components/collapse', component: () => import('../../components/collapse.md') },
        { path: 'components/descriptions', component: () => import('../../components/descriptions.md') },
        { path: 'components/empty', component: () => import('../../components/empty.md') },
        { path: 'components/list', component: () => import('../../components/list.md') },
        { path: 'components/qrcode', component: () => import('../../components/qrcode.md') },
        { path: 'components/result', component: () => import('../../components/result.md') },
        { path: 'components/segmented', component: () => import('../../components/segmented.md') },
        { path: 'components/skeleton', component: () => import('../../components/skeleton.md') },
        { path: 'components/table', component: () => import('../../components/table.md') },
        { path: 'components/tag', component: () => import('../../components/tag.md') },
        { path: 'components/timeline', component: () => import('../../components/timeline.md') },
        { path: 'components/tree', component: () => import('../../components/tree.md') },
        { path: 'components/watermark', component: () => import('../../components/watermark.md') },

        // 反馈
        { path: 'components/alert', component: () => import('../../components/alert.md') },
        { path: 'components/drawer', component: () => import('../../components/drawer.md') },
        { path: 'components/float-button', component: () => import('../../components/float-button.md') },
        { path: 'components/message', component: () => import('../../components/message.md') },
        { path: 'components/modal', component: () => import('../../components/modal.md') },
        { path: 'components/notification', component: () => import('../../components/notification.md') },
        { path: 'components/popconfirm', component: () => import('../../components/popconfirm.md') },
        { path: 'components/popover', component: () => import('../../components/popover.md') },
        { path: 'components/progress', component: () => import('../../components/progress.md') },
        { path: 'components/spin', component: () => import('../../components/spin.md') },
        { path: 'components/tooltip', component: () => import('../../components/tooltip.md') },

        // 其他
        { path: 'components/back-top', component: () => import('../../components/back-top.md') },
        { path: 'components/config-provider', component: () => import('../../components/config-provider.md') },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
