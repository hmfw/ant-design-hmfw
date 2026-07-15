import type { RouteRecordRaw } from 'vue-router'

/** 分组通用形状：title 为分组标题，children 为分组下的条目 */
export interface Group<T> {
  title: string
  children: T[]
}

/** 导航条目：title 为显示标签，path 为导航路径 */
export interface NavItem {
  title: string
  path: string
}

/** 组件清单项：name 为组件目录名，title 为侧边栏/文档标题 */
export interface ComponentMeta {
  name: string
  title: string
}

/** 导航分组（侧边栏渲染用） */
export type NavGroup = Group<NavItem>

/** 组件分组（单一数据源用） */
export type ComponentGroup = Group<ComponentMeta>

// ============================================================
// 单一数据源：组件分组清单
// 新增组件时，只需在对应分组按字母序添加一项 { name, title }，
// 侧边栏与 demo 路由会自动派生。
// ============================================================
export const componentGroups: ComponentGroup[] = [
  {
    title: '通用',
    children: [
      { name: 'button', title: 'Button 按钮' },
      { name: 'float-button', title: 'FloatButton 悬浮按钮' },
      { name: 'icon', title: 'Icon 图标' },
      { name: 'typography', title: 'Typography 排版' },
    ],
  },
  {
    title: '布局',
    children: [
      { name: 'divider', title: 'Divider 分割线' },
      { name: 'flex', title: 'Flex 弹性布局' },
      { name: 'grid', title: 'Grid 栅格' },
      { name: 'layout', title: 'Layout 布局' },
      { name: 'space', title: 'Space 间距' },
    ],
  },
  {
    title: '导航',
    children: [
      { name: 'anchor', title: 'Anchor 锚点' },
      { name: 'breadcrumb', title: 'Breadcrumb 面包屑' },
      { name: 'dropdown', title: 'Dropdown 下拉菜单' },
      { name: 'menu', title: 'Menu 导航菜单' },
      { name: 'pagination', title: 'Pagination 分页' },
      { name: 'steps', title: 'Steps 步骤条' },
      { name: 'tabs', title: 'Tabs 标签页' },
    ],
  },
  {
    title: '数据录入',
    children: [
      { name: 'auto-complete', title: 'AutoComplete 自动完成' },
      { name: 'cascader', title: 'Cascader 级联选择' },
      { name: 'checkbox', title: 'Checkbox 多选框' },
      { name: 'color-picker', title: 'ColorPicker 颜色选择器' },
      { name: 'date-picker', title: 'DatePicker 日期选择框' },
      { name: 'form', title: 'Form 表单' },
      { name: 'input', title: 'Input 输入框' },
      { name: 'input-number', title: 'InputNumber 数字输入框' },
      { name: 'radio', title: 'Radio 单选框' },
      { name: 'range-picker', title: 'RangePicker 日期范围选择' },
      { name: 'rate', title: 'Rate 评分' },
      { name: 'select', title: 'Select 选择器' },
      { name: 'slider', title: 'Slider 滑动输入条' },
      { name: 'switch', title: 'Switch 开关' },
      { name: 'time-picker', title: 'TimePicker 时间选择框' },
      { name: 'transfer', title: 'Transfer 穿梭框' },
      { name: 'tree-select', title: 'TreeSelect 树形选择' },
      { name: 'upload', title: 'Upload 上传' },
    ],
  },
  {
    title: '数据展示',
    children: [
      { name: 'avatar', title: 'Avatar 头像' },
      { name: 'badge', title: 'Badge 徽标数' },
      { name: 'calendar', title: 'Calendar 日历' },
      { name: 'card', title: 'Card 卡片' },
      { name: 'carousel', title: 'Carousel 走马灯' },
      { name: 'collapse', title: 'Collapse 折叠面板' },
      { name: 'descriptions', title: 'Descriptions 描述列表' },
      { name: 'empty', title: 'Empty 空状态' },
      { name: 'image', title: 'Image 图片' },
      { name: 'list', title: 'List 列表' },
      { name: 'qrcode', title: 'QRCode 二维码' },
      { name: 'result', title: 'Result 结果' },
      { name: 'segmented', title: 'Segmented 分段控制器' },
      { name: 'skeleton', title: 'Skeleton 骨架屏' },
      { name: 'statistic', title: 'Statistic 统计数值' },
      { name: 'table', title: 'Table 表格' },
      { name: 'tag', title: 'Tag 标签' },
      { name: 'timeline', title: 'Timeline 时间轴' },
      { name: 'tree', title: 'Tree 树形控件' },
      { name: 'watermark', title: 'Watermark 水印' },
    ],
  },
  {
    title: '反馈',
    children: [
      { name: 'alert', title: 'Alert 警告提示' },
      { name: 'drawer', title: 'Drawer 抽屉' },
      { name: 'message', title: 'Message 全局提示' },
      { name: 'modal', title: 'Modal 对话框' },
      { name: 'notification', title: 'Notification 通知提醒框' },
      { name: 'popconfirm', title: 'Popconfirm 气泡确认框' },
      { name: 'popover', title: 'Popover 气泡卡片' },
      { name: 'progress', title: 'Progress 进度条' },
      { name: 'spin', title: 'Spin 加载中' },
      { name: 'tooltip', title: 'Tooltip 文字提示' },
    ],
  },
  {
    title: '其他',
    children: [
      { name: 'app', title: 'App 包裹组件' },
      { name: 'config-provider', title: 'ConfigProvider 全局配置' },
      { name: 'tour', title: 'Tour 漫游引导' },
    ],
  },
]
// 预加载所有组件 demo 的 markdown（懒加载）
const demoModules = import.meta.glob('../../components/*/demos/*.md')

/** 由 componentGroups 派生的组件侧边栏 */
export const componentsSidebar: NavGroup[] = componentGroups.map((group) => ({
  title: group.title,
  children: group.children.map((item) => ({
    title: item.title,
    path: `/components/${item.name}`,
  })),
}))

/** 由 componentGroups 派生的组件 demo 路由（按组件名去重） */
export const demoRoutes: RouteRecordRaw[] = Array.from(
  new Map(componentGroups.flatMap((group) => group.children).map((item) => [item.name, item] as const)).values(),
).map((item) => {
  const component = demoModules[`../../components/${item.name}/demos/${item.name}.md`]
  if (!component) {
    throw new Error(`未找到组件 demo 文件：components/${item.name}/demos/${item.name}.md`)
  }
  return {
    path: `/components/${item.name}`,
    component,
    meta: { title: item.title },
  }
})

/** 指南侧边栏（无组件派生，直接维护） */
export const guideSidebar: NavGroup[] = [
  {
    title: '指南',
    children: [
      { title: '快速上手', path: '/guide/getting-started' },
      { title: '主题定制', path: '/guide/theming' },
      { title: '国际化', path: '/guide/i18n' },
      { title: '更新日志', path: '/guide/changelog' },
    ],
  },
]
