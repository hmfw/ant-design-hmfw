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

### 翻转箭头

通过 `reverseArrow` 属性翻转折叠箭头的方向。

<DemoBlock title="翻转箭头" :source="LayoutReverseArrowSource">
  <LayoutReverseArrow />
</DemoBlock>

### 主题切换

侧边栏支持 `light` 和 `dark` 两种主题，主题切换时会有平滑的过渡动画。

<DemoBlock title="主题切换" :source="LayoutThemeSource">
  <LayoutTheme />
</DemoBlock>

### 语义化 API

通过 `classNames` / `styles` 精细化控制 Sider 根容器与内容包装容器的样式，支持按折叠状态动态切换。

<DemoBlock title="语义化 API" :source="LayoutSemanticSource">
  <LayoutSemantic />
</DemoBlock>

### 顶部-侧边布局

顶部水平导航 + 侧边栏垂直导航 + 面包屑的经典企业后台布局。

<DemoBlock title="顶部-侧边布局" :source="LayoutTopSideSource">
  <LayoutTopSide />
</DemoBlock>

### 固定头部

Header 使用 sticky 定位，内容区滚动时头部保持固定在顶部。

<DemoBlock title="固定头部" :source="LayoutFixedSource">
  <LayoutFixed />
</DemoBlock>

## API

### Layout Props

| 参数     | 说明                                                               | 类型      | 默认值 |
| -------- | ------------------------------------------------------------------ | --------- | ------ |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | `boolean` | -      |

### Sider Props

| 参数                  | 说明                                                                                                            | 类型                                                      | 默认值   |
| --------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------- |
| width                 | 宽度                                                                                                            | `number \| string`                                        | `200`    |
| collapsible           | 是否可收起                                                                                                      | `boolean`                                                 | `false`  |
| collapsed(v-model)    | 当前收起状态                                                                                                    | `boolean`                                                 | -        |
| defaultCollapsed      | 是否默认收起                                                                                                    | `boolean`                                                 | `false`  |
| collapsedWidth        | 收缩宽度，设置为 0 会出现特殊 trigger                                                                           | `number \| string`                                        | `80`     |
| breakpoint            | 触发响应式布局的断点                                                                                            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'xxxl'` | -        |
| theme                 | 主题颜色                                                                                                        | `'light' \| 'dark'`                                       | `'dark'` |
| trigger               | 自定义 trigger，设为 null 时隐藏 trigger。**注意：`trigger` 为 VNode prop 而非 slot**，需通过 `h()` 或 JSX 传入 | `VNode \| null`                                           | -        |
| reverseArrow          | 翻转折叠提示箭头的方向                                                                                          | `boolean`                                                 | `false`  |
| zeroWidthTriggerStyle | 指定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式                                                          | `CSSProperties`                                           | -        |
| classNames            | 语义化结构 className                                                                                            | `{ root?, body? }`                                        | -        |
| styles                | 语义化结构 style                                                                                                | `{ root?: CSSProperties, body?: CSSProperties }`          | -        |

### Layout Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 子元素内容 |

### Sider Events

| 事件名           | 说明                     | 回调参数                                                             |
| ---------------- | ------------------------ | -------------------------------------------------------------------- |
| collapse         | 展开/收起时触发          | `(collapsed: boolean, type: 'clickTrigger' \| 'responsive') => void` |
| update:collapsed | 折叠状态变化（v-model）  | `(collapsed: boolean) => void`                                       |
| breakpoint       | 触发响应式布局断点时触发 | `(broken: boolean) => void`                                          |

事件回调类型 `SiderCollapseHandler` / `SiderBreakpointHandler` 可从 `@hmfw/ant-design` 导入。

### Sider Slots

| 名称    | 说明       |
| ------- | ---------- |
| default | 侧边栏内容 |

> **注意**：Sider 的自定义触发器通过 `trigger` prop（VNode）传入，而非 slot。参见上方 Sider Props 表格。

## 组件说明

Layout: 布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。

Header: 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

Sider: 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。

Content: 内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

Footer: 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

Layout 系列组件（Layout/Header/Footer/Content/Sider）多为单元素透传组件，可直接使用原生 class 和 style attribute 进行样式定制。Sider 的 trigger 元素如需自定义样式，可通过 `trigger` prop 传入自定义 VNode，或设为 `null` 隐藏后自行实现。

## 设计 Token

Layout 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                      | 说明                                                               | 默认值             |
| ------------------------------- | ------------------------------------------------------------------ | ------------------ |
| `--hmfw-color-bg-header`        | Header/Sider（dark）背景色                                         | `#001529`          |
| `--hmfw-color-bg-layout`        | Layout/Footer 背景色                                               | `#f5f5f5`          |
| `--hmfw-color-bg-container`     | Sider（light）/Trigger（light）背景色                              | `#ffffff`          |
| `--hmfw-color-border`           | light 主题边框色                                                   | `#d9d9d9`          |
| `--hmfw-color-text`             | 主文本色                                                           | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-light-solid` | 浅色文本（白色）                                                   | `#ffffff`          |
| `--hmfw-font-size-base`         | Footer 字号                                                        | `14px`             |
| `--hmfw-font-size-xl`           | 零宽触发器字号                                                     | `18px`             |
| `--hmfw-control-height`         | Header 高度基准（派生：`× 2` = 64px）                              | `32px`             |
| `--hmfw-control-height-sm`      | Footer 上下内边距（24px）                                          | `24px`             |
| `--hmfw-control-height-lg`      | Header 左右内边距（派生：`× 1.25` = 50px）、触发器与零宽触发器尺寸 | `40px`             |
| `--hmfw-margin-xxs`             | 触发器高度派生（`control-height-lg + × 2` = 48px）                 | `4px`              |
| `--hmfw-border-radius-lg`       | 零宽触发器圆角                                                     | `8px`              |
| `--hmfw-motion-duration-mid`    | 宽度等快速过渡时长（0.2s）                                         | `0.2s`             |
| `--hmfw-motion-duration-slow`   | 颜色等平滑过渡时长（0.3s）                                         | `0.3s`             |

### 组件 Token

组件专属变量定义在 `.hmfw-layout-sider` 上，可直接覆盖以定制单个组件的样式。

| Token 名称                      | 说明                 | 默认值                      |
| ------------------------------- | -------------------- | --------------------------- |
| `--hmfw-layout-sider-dark-text` | 深色侧边栏次级文字色 | `rgba(255, 255, 255, 0.65)` |
