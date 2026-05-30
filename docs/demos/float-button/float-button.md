# FloatButton 悬浮按钮

悬浮于页面上方的按钮。

## 何时使用

- 用于网站上的全局功能
- 无论浏览到页面的哪个位置，都可以看见的按钮

## 代码演示


### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="FloatButtonBasicSource">
  <FloatButtonBasic />
</DemoBlock>

### 不同类型

提供 `default` 和 `primary` 两种类型，以及 `circle` 和 `square` 两种形状。

<DemoBlock title="不同类型" :source="FloatButtonTypesSource">
  <FloatButtonTypes />
</DemoBlock>

### 徽标数字

带徽标的悬浮按钮，徽标基于 Badge 组件实现。

<DemoBlock title="徽标数字" :source="FloatButtonBadgeSource">
  <FloatButtonBadge />
</DemoBlock>

### 浮动按钮组

使用 `FloatButtonGroup` 可以将多个悬浮按钮组合在一起。设置 `trigger` 后会折叠为可展开的菜单。

<DemoBlock title="浮动按钮组" :source="FloatButtonGroupDemoSource">
  <FloatButtonGroupDemo />
</DemoBlock>

### 菜单模式

设置 `trigger` 为 `hover` 或 `click`，鼠标悬停或点击展开菜单。

<DemoBlock title="菜单模式" :source="FloatButtonMenuSource">
  <FloatButtonMenu />
</DemoBlock>

### 回到顶部

`FloatButton.BackTop` 返回页面顶部的操作按钮。

<DemoBlock title="回到顶部" :source="FloatButtonBackTopDemoSource">
  <FloatButtonBackTopDemo />
</DemoBlock>

## API

组件提供了三种使用方式：

```ts
import { FloatButton } from 'ant-design-hmfw'

// 复合写法
<FloatButton />
<FloatButton.Group />
<FloatButton.BackTop />

// 或具名导入
import { FloatButton, FloatButtonGroup, FloatButtonBackTop } from 'ant-design-hmfw'
```

### FloatButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 设置按钮类型 | `'default' \| 'primary'` | `'default'` |
| shape | 设置按钮形状 | `'circle' \| 'square'` | `'circle'` |
| icon | 自定义图标 | `IconComponent \| string \| slot` | - |
| description | 文字及其他内容，仅 `square` 形状展示 | `string \| slot` | - |
| tooltip | 气泡提示的内容 | `string \| slot` | - |
| badge | 带徽标数字的悬浮按钮 | `{ count?, dot?, overflowCount?, color?, offset? }` | - |
| href | 点击跳转的地址，指定时渲染为 `a` 标签 | `string` | - |
| target | 相当于 `a` 标签的 `target` 属性 | `string` | - |
| htmlType | 设置原生 `button` 的 `type` | `'submit' \| 'reset' \| 'button'` | `'button'` |

### FloatButton Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时的回调 | `(e: MouseEvent) => void` |

### FloatButton.Group Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 触发方式（不设置时默认展示所有子按钮） | `'click' \| 'hover'` | - |
| type | 设置触发按钮类型 | `'default' \| 'primary'` | `'default'` |
| shape | 设置子按钮形状 | `'circle' \| 'square'` | `'circle'` |
| placement | 自定义菜单展开方向 | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` |
| open | 受控展开状态 | `boolean` | - |
| defaultOpen | 默认展开状态 | `boolean` | `false` |
| icon | 触发按钮的图标 | `IconComponent \| string` | `PlusOutlined` |
| closeIcon | 展开时触发按钮的图标 | `IconComponent \| string` | `CloseOutlined` |
| tooltip | 触发按钮的气泡提示 | `string` | - |
| badge | 触发按钮的徽标 | `FloatButtonBadgeProps` | - |

### FloatButton.Group Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| openChange / update:open | 展开状态变化时的回调 | `(open: boolean) => void` |

### FloatButton.BackTop Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visibilityHeight | 滚动高度达到此参数值才出现 | `number` | `400` |
| target | 设置需要监听其滚动事件的元素 | `() => HTMLElement \| Window \| Document` | `() => window` |
| duration | 回到顶部所需时间（ms） | `number` | `450` |
| icon | 自定义图标 | `IconComponent \| string` | `UpOutlined` |
| type | 设置按钮类型 | `'default' \| 'primary'` | `'default'` |
| shape | 设置按钮形状 | `'circle' \| 'square'` | `'circle'` |
| tooltip | 气泡提示的内容 | `string` | - |

### FloatButton.BackTop Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时的回调 | `(e: MouseEvent) => void` |
