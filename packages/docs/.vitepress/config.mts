import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  title: 'ant-design-hmfw',
  description: 'A Vue3 UI component library based on Ant Design v6',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速上手', link: '/guide/getting-started' },
            { text: '主题定制', link: '/guide/theming' },
            { text: '国际化', link: '/guide/i18n' },
          ],
        },
      ],
      '/components/': [
        {
          text: '通用',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Typography 排版', link: '/components/typography' },
          ],
        },
        {
          text: '布局',
          items: [
            { text: 'Divider 分割线', link: '/components/divider' },
            { text: 'Flex 弹性布局', link: '/components/flex' },
            { text: 'Grid 栅格', link: '/components/grid' },
            { text: 'Layout 布局', link: '/components/layout' },
            { text: 'Space 间距', link: '/components/space' },
          ],
        },
        {
          text: '导航',
          items: [
            { text: 'Anchor 锚点', link: '/components/anchor' },
            { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
            { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
            { text: 'Menu 导航菜单', link: '/components/menu' },
            { text: 'Pagination 分页', link: '/components/pagination' },
            { text: 'Steps 步骤条', link: '/components/steps' },
          ],
        },
        {
          text: '数据录入',
          items: [
            { text: 'AutoComplete 自动完成', link: '/components/auto-complete' },
            { text: 'Cascader 级联选择', link: '/components/cascader' },
            { text: 'Checkbox 多选框', link: '/components/checkbox' },
            { text: 'DatePicker 日期选择框', link: '/components/date-picker' },
            { text: 'Form 表单', link: '/components/form' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'InputNumber 数字输入框', link: '/components/input-number' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Rate 评分', link: '/components/rate' },
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'Slider 滑动输入条', link: '/components/slider' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'TimePicker 时间选择框', link: '/components/time-picker' },
            { text: 'Upload 上传', link: '/components/upload' },
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: 'Avatar 头像', link: '/components/avatar' },
            { text: 'Badge 徽标数', link: '/components/badge' },
            { text: 'Card 卡片', link: '/components/card' },
            { text: 'Collapse 折叠面板', link: '/components/collapse' },
            { text: 'Descriptions 描述列表', link: '/components/descriptions' },
            { text: 'Empty 空状态', link: '/components/empty' },
            { text: 'List 列表', link: '/components/list' },
            { text: 'QRCode 二维码', link: '/components/qrcode' },
            { text: 'Result 结果', link: '/components/result' },
            { text: 'Segmented 分段控制器', link: '/components/segmented' },
            { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
            { text: 'Table 表格', link: '/components/table' },
            { text: 'Tag 标签', link: '/components/tag' },
            { text: 'Timeline 时间轴', link: '/components/timeline' },
            { text: 'Tree 树形控件', link: '/components/tree' },
            { text: 'Watermark 水印', link: '/components/watermark' },
          ],
        },
        {
          text: '反馈',
          items: [
            { text: 'Alert 警告提示', link: '/components/alert' },
            { text: 'Drawer 抽屉', link: '/components/drawer' },
            { text: 'FloatButton 悬浮按钮', link: '/components/float-button' },
            { text: 'Message 全局提示', link: '/components/message' },
            { text: 'Modal 对话框', link: '/components/modal' },
            { text: 'Notification 通知提醒框', link: '/components/notification' },
            { text: 'Popconfirm 气泡确认框', link: '/components/popconfirm' },
            { text: 'Popover 气泡卡片', link: '/components/popover' },
            { text: 'Progress 进度条', link: '/components/progress' },
            { text: 'Spin 加载中', link: '/components/spin' },
            { text: 'Tooltip 文字提示', link: '/components/tooltip' },
          ],
        },
        {
          text: '其他',
          items: [
            { text: 'BackTop 回到顶部', link: '/components/back-top' },
            { text: 'ConfigProvider 全局配置', link: '/components/config-provider' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hmfw/ant-design-hmfw' },
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 ant-design-hmfw',
    },
  },
  markdown: {
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    },
  },
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        'ant-design-hmfw': path.resolve(__dirname, '../../components/src/index.ts'),
      },
    },
  },
})
