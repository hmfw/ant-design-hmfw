# Layout 布局

协助进行页面级整体布局。

## 何时使用

- 需要搭建页面整体结构时
- 需要侧边栏导航布局时
- 需要顶部导航 + 内容区布局时

## 代码演示

### 基础布局（上中下）

最基本的上中下布局。

<DemoBlock title="基础布局（上中下）" :source="LayoutBasicSource">
  <LayoutBasic />
</DemoBlock>

### 带侧边栏

左侧边栏 + 右侧内容区布局。

<DemoBlock title="带侧边栏" :source="LayoutSiderSource">
  <LayoutSider />
</DemoBlock>

### 可折叠侧边栏

通过 `collapsible` 属性开启侧边栏折叠功能，支持 `onCollapse` 事件监听折叠状态变化。

<DemoBlock title="可折叠侧边栏" :source="LayoutCollapsibleSource">
  <LayoutCollapsible />
</DemoBlock>

### 响应式布局

通过 `breakpoint` 属性设置响应式断点，当窗口宽度小于断点时自动折叠侧边栏。设置 `collapsedWidth={0}` 会显示特殊的浮动触发器。

<DemoBlock title="响应式布局" :source="LayoutResponsiveSource">
  <LayoutResponsive />
</DemoBlock>

### 自定义触发器

设置 `trigger={null}` 隐藏默认触发器，可以在其他位置放置自定义触发器。

<DemoBlock title="自定义触发器" :source="LayoutCustomTriggerSource">
  <LayoutCustomTrigger />
</DemoBlock>

### 主题切换

侧边栏支持 `light` 和 `dark` 两种主题，主题切换时会有平滑的过渡动画。

<DemoBlock title="主题切换" :source="LayoutThemeSource">
  <LayoutTheme />
</DemoBlock>

## API

### Layout Props

| 参数     | 说明                                                               | 类型      | 默认值 |
| -------- | ------------------------------------------------------------------ | --------- | ------ |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | `boolean` | -      |

### Sider Props

| 参数                  | 说明                                                   | 类型                                                      | 默认值   |
| --------------------- | ------------------------------------------------------ | --------------------------------------------------------- | -------- |
| width                 | 宽度                                                   | `number \| string`                                        | `200`    |
| collapsible           | 是否可收起                                             | `boolean`                                                 | `false`  |
| collapsed(v-model)    | 当前收起状态                                           | `boolean`                                                 | -        |
| defaultCollapsed      | 是否默认收起                                           | `boolean`                                                 | `false`  |
| collapsedWidth        | 收缩宽度，设置为 0 会出现特殊 trigger                  | `number \| string`                                        | `80`     |
| breakpoint            | 触发响应式布局的断点                                   | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'xxxl'` | -        |
| theme                 | 主题颜色                                               | `'light' \| 'dark'`                                       | `'dark'` |
| trigger               | 自定义 trigger，设为 null 时隐藏 trigger               | `VNode \| null`                                           | -        |
| reverseArrow          | 翻转折叠提示箭头的方向                                 | `boolean`                                                 | `false`  |
| zeroWidthTriggerStyle | 指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式 | `CSSProperties`                                           | -        |

### Layout Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 子元素内容 |

### Sider Events

| 事件名     | 说明                     | 回调参数                                                             |
| ---------- | ------------------------ | -------------------------------------------------------------------- |
| collapse   | 展开/收起时触发          | `(collapsed: boolean, type: 'clickTrigger' \| 'responsive') => void` |
| breakpoint | 触发响应式布局断点时触发 | `(broken: boolean) => void`                                          |

## 组件说明

Layout: 布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。

Header: 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

Sider: 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。

Content: 内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

Footer: 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
