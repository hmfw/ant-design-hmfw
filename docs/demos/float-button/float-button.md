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

### 禁用状态

通过 `disabled` 禁用按钮，禁用的锚点按钮不会触发跳转。

<DemoBlock title="禁用状态" :source="FloatButtonDisabledSource">
  <FloatButtonDisabled />
</DemoBlock>

### 链接跳转

设置 `href` 后按钮渲染为 `<a>` 标签，支持 `target` 属性。

<DemoBlock title="链接跳转" :source="FloatButtonLinkSource">
  <FloatButtonLink />
</DemoBlock>

### 气泡提示

`tooltip` 支持字符串或 `TooltipProps` 对象，可自定义位置、颜色等。

<DemoBlock title="气泡提示" :source="FloatButtonTooltipSource">
  <FloatButtonTooltip />
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

### 受控的菜单

通过 `v-model:open` 受控展开状态，触发按钮可配置 `closeIcon`、`tooltip`、`badge` 等。

<DemoBlock title="受控的菜单" :source="FloatButtonGroupControlledSource">
  <FloatButtonGroupControlled />
</DemoBlock>

### 回到顶部

`FloatButton.BackTop` 返回页面顶部的操作按钮。

<DemoBlock title="回到顶部" :source="FloatButtonBackTopDemoSource">
  <FloatButtonBackTopDemo />
</DemoBlock>

### 自定义 BackTop

可自定义 `icon`、`type`、`shape`、`content`、`tooltip` 等样式。

<DemoBlock title="自定义 BackTop" :source="FloatButtonBackTopCustomSource">
  <FloatButtonBackTopCustom />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="FloatButtonClassNamesSource">
  <FloatButtonClassNames />
</DemoBlock>

## API

组件提供了三种使用方式：

```ts
import { FloatButton } from '@hmfw/ant-design'

// 复合写法
<FloatButton />
<FloatButton.Group />
<FloatButton.BackTop />

// 或具名导入
import { FloatButton, FloatButtonGroup, FloatButtonBackTop } from '@hmfw/ant-design'
```

### FloatButton Props

| 参数       | 说明                                                                             | 类型                                                | 默认值             |
| ---------- | -------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------ |
| type       | 设置按钮类型                                                                     | `'default' \| 'primary'`                            | `'default'`        |
| shape      | 设置按钮形状                                                                     | `'circle' \| 'square'`                              | `'circle'`         |
| icon       | 自定义图标                                                                       | `IconComponent \| string \| slot`                   | `FileTextOutlined` |
| content    | 文字及其他内容（推荐用于 `square` 形状；`circle` 空间窄）                        | `string \| slot`                                    | -                  |
| tooltip    | 气泡提示的内容                                                                   | `string \| TooltipProps \| slot`                    | -                  |
| badge      | 带徽标数字的悬浮按钮                                                             | `{ count?, dot?, overflowCount?, color?, offset? }` | -                  |
| href       | 点击跳转的地址，指定时渲染为 `a` 标签                                            | `string`                                            | -                  |
| target     | 相当于 `a` 标签的 `target` 属性                                                  | `string`                                            | -                  |
| htmlType   | 设置原生 `button` 的 `type`                                                      | `'submit' \| 'reset' \| 'button'`                   | `'button'`         |
| disabled   | 是否禁用按钮                                                                     | `boolean`                                           | `false`            |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `FloatButtonClassNames`                             | -                  |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `FloatButtonStyles`                                 | -                  |

### FloatButton Events

| 事件名 | 说明             | 回调参数                  |
| ------ | ---------------- | ------------------------- |
| click  | 点击按钮时的回调 | `(e: MouseEvent) => void` |

### FloatButton.Group Props

| 参数        | 说明                                   | 类型                                     | 默认值          |
| ----------- | -------------------------------------- | ---------------------------------------- | --------------- |
| trigger     | 触发方式（不设置时默认展示所有子按钮） | `'click' \| 'hover'`                     | -               |
| type        | 设置触发按钮类型                       | `'default' \| 'primary'`                 | `'default'`     |
| shape       | 设置子按钮形状                         | `'circle' \| 'square'`                   | `'circle'`      |
| placement   | 自定义菜单展开方向                     | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'`         |
| open        | 受控展开状态                           | `boolean`                                | -               |
| defaultOpen | 默认展开状态                           | `boolean`                                | `false`         |
| icon        | 触发按钮的图标                         | `IconComponent \| string`                | `PlusOutlined`  |
| closeIcon   | 展开时触发按钮的图标                   | `IconComponent \| string`                | `CloseOutlined` |
| tooltip     | 触发按钮的气泡提示                     | `string \| TooltipProps`                 | -               |
| badge       | 触发按钮的徽标                         | `FloatButtonBadgeProps`                  | -               |
| content     | 触发按钮的内容（square 形状）          | `string`                                 | -               |

### FloatButton.Group Events

| 事件名                   | 说明                               | 回调参数                  |
| ------------------------ | ---------------------------------- | ------------------------- |
| openChange / update:open | 展开状态变化时的回调               | `(open: boolean) => void` |
| click                    | 点击触发按钮时的回调（仅菜单模式） | `(e: MouseEvent) => void` |

### FloatButton.BackTop Props

| 参数             | 说明                          | 类型                                      | 默认值                     |
| ---------------- | ----------------------------- | ----------------------------------------- | -------------------------- |
| visibilityHeight | 滚动高度达到此参数值才出现    | `number`                                  | `400`                      |
| target           | 设置需要监听其滚动事件的元素  | `() => HTMLElement \| Window \| Document` | `() => window`             |
| duration         | 回到顶部所需时间（ms）        | `number`                                  | `450`                      |
| icon             | 自定义图标                    | `IconComponent \| string`                 | `VerticalAlignTopOutlined` |
| type             | 设置按钮类型                  | `'default' \| 'primary'`                  | `'default'`                |
| shape            | 设置按钮形状                  | `'circle' \| 'square'`                    | `'circle'`                 |
| tooltip          | 气泡提示的内容                | `string \| TooltipProps`                  | -                          |
| content          | 文字及其他内容（square 形状） | `string`                                  | -                          |

### FloatButton.BackTop Events

| 事件名 | 说明             | 回调参数                  |
| ------ | ---------------- | ------------------------- |
| click  | 点击按钮时的回调 | `(e: MouseEvent) => void` |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface FloatButtonClassNames {
  root?: string // 根节点（button 或 a 标签）
  body?: string // 主体容器
  icon?: string // 图标容器
  content?: string // 文本内容容器（仅 square 形状显示）
}

interface FloatButtonStyles {
  root?: CSSProperties
  body?: CSSProperties
  icon?: CSSProperties
  content?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- circle 形状（仅图标） -->
<button class="hmfw-float-btn hmfw-float-btn-default hmfw-float-btn-circle">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-float-btn-body">
    <!-- ↑ classNames.body / styles.body 应用于此 -->
    <div class="hmfw-float-btn-icon">
      <!-- ↑ classNames.icon / styles.icon 应用于此 -->
      <span class="hmfw-icon">
        <svg>...</svg>
      </span>
    </div>
  </div>
</button>

<!-- square 形状（图标 + 文本） -->
<button class="hmfw-float-btn hmfw-float-btn-primary hmfw-float-btn-square">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-float-btn-body">
    <!-- ↑ classNames.body / styles.body 应用于此 -->
    <div class="hmfw-float-btn-icon">
      <!-- ↑ classNames.icon / styles.icon 应用于此 -->
      <span class="hmfw-icon">
        <svg>...</svg>
      </span>
    </div>
    <div class="hmfw-float-btn-content">
      <!-- ↑ classNames.content / styles.content 应用于此 -->
      反馈
    </div>
  </div>
</button>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义根节点渐变背景 -->
  <FloatButton :icon="QuestionCircleOutlined" :class-names="{ root: 'custom-root' }" tooltip="帮助" />

  <!-- 自定义图标和内容区域 -->
  <FloatButton
    shape="square"
    :icon="CommentOutlined"
    content="反馈"
    :class-names="{ icon: 'custom-icon', content: 'custom-content' }"
  />
</template>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

:deep(.custom-icon) {
  font-size: 20px;
  color: #52c41a;
}

:deep(.custom-content) {
  font-weight: bold;
  color: #1677ff;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制根节点和图标 -->
  <FloatButton
    type="primary"
    :icon="CustomerServiceOutlined"
    :styles="{
      root: { borderRadius: '12px' },
      icon: { fontSize: '20px' },
    }"
  />

  <!-- square 形状完整样式定制 -->
  <FloatButton
    shape="square"
    :icon="RocketOutlined"
    content="启动"
    :styles="{
      root: { boxShadow: '0 4px 16px rgba(22, 119, 255, 0.3)' },
      body: { padding: '8px' },
      icon: { fontSize: '20px' },
      content: { fontWeight: 'bold' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `content` key 仅在 `shape="square"` 时渲染，`circle` 形状不显示文本内容
- Badge 和 Tooltip 是外部组件，不在 `classNames` / `styles` 控制范围内
- `classNames.root` 会与组件内置的状态类名（如 `.hmfw-float-btn-disabled`）合并

## 设计 Token

FloatButton 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                      | 说明         | 默认值                                                                       |
| ------------------------------- | ------------ | ---------------------------------------------------------------------------- |
| `--hmfw-color-bg-elevated`      | 浮层背景色   | `#ffffff`                                                                    |
| `--hmfw-color-border`           | 边框色       | `#d9d9d9`                                                                    |
| `--hmfw-color-fill-tertiary`    | 三级填充色   | `rgba(0,0,0,0.04)`                                                           |
| `--hmfw-color-primary`          | 主题色       | `#1677ff`                                                                    |
| `--hmfw-color-primary-hover`    | 主题色悬停态 | `#4096ff`                                                                    |
| `--hmfw-color-text`             | 主文本色     | `rgba(0,0,0,0.88)`                                                           |
| `--hmfw-color-text-light-solid` | 浅色文本色   | `#ffffff`                                                                    |
| `--hmfw-font-family`            | 字体族       | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', …` |
| `--hmfw-font-size-sm`           | 小号字号     | `12px`                                                                       |
| `--hmfw-border-radius-lg`       | 大号圆角     | `8px`                                                                        |
| `--hmfw-motion-duration-mid`    | 中速动画时长 | `0.2s`                                                                       |
| `--hmfw-motion-ease-in-out`     | 缓入缓出曲线 | `cubic-bezier(0.645, 0.045, 0.355, 1)`                                       |
