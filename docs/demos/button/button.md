# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 ant-design-hmfw 中我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。
- Ghost：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。

## 代码演示

### 按钮类型

按钮有五种类型：主按钮、默认按钮、虚线按钮、文本按钮和链接按钮。

<DemoBlock title="按钮类型" :source="ButtonBasicSource">
  <ButtonBasic />
</DemoBlock>

### 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

<DemoBlock title="按钮尺寸" :source="ButtonSizeSource">
  <ButtonSize />
</DemoBlock>

### 禁用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

<DemoBlock title="禁用状态" :source="ButtonDisabledSource">
  <ButtonDisabled />
</DemoBlock>

### 加载状态

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

<DemoBlock title="加载状态" :source="ButtonLoadingSource">
  <ButtonLoading />
</DemoBlock>

### 危险按钮

危险按钮用于删除/移动/修改权限等危险操作。

<DemoBlock title="危险按钮" :source="ButtonDangerSource">
  <ButtonDanger />
</DemoBlock>

### Block 按钮

`block` 属性将使按钮适合其父宽度。

<DemoBlock title="Block 按钮" :source="ButtonBlockSource">
  <ButtonBlock />
</DemoBlock>

### Ghost 按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

<DemoBlock title="Ghost 按钮" :source="ButtonGhostSource">
  <ButtonGhost />
</DemoBlock>

### 图标按钮

当需要在 Button 内嵌入 Icon 时，可以设置 `icon` 属性。

<DemoBlock title="图标按钮" :source="ButtonIconSource">
  <ButtonIcon />
</DemoBlock>

### 按钮形状

按钮有多种形状：默认、圆形、圆角。

<DemoBlock title="按钮形状" :source="ButtonShapeSource">
  <ButtonShape />
</DemoBlock>

### 图标位置

可以通过 `iconPosition` 属性设置图标在按钮中的位置。

<DemoBlock title="图标位置" :source="ButtonIconPositionSource">
  <ButtonIconPosition />
</DemoBlock>

### 链接按钮

设置 `href` 属性后，按钮将渲染为 `<a>` 标签。

<DemoBlock title="链接按钮" :source="ButtonHrefSource">
  <ButtonHref />
</DemoBlock>

### 延迟加载

通过设置 `loading` 为对象并指定 `delay` 属性，可以延迟显示加载状态。

<DemoBlock title="延迟加载" :source="ButtonLoadingDelaySource">
  <ButtonLoadingDelay />
</DemoBlock>

### 语义化 className 与 style

通过 `classNames` / `styles` 对 root、icon、loading 等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="ButtonClassNamesSource">
  <ButtonClassNames />
</DemoBlock>

## API

### Button Props

| 参数            | 说明                                                           | 类型                                                     | 默认值      |
| --------------- | -------------------------------------------------------------- | -------------------------------------------------------- | ----------- |
| type            | 设置按钮类型                                                   | `'default' \| 'primary' \| 'dashed' \| 'text' \| 'link'` | `'default'` |
| size            | 设置按钮大小                                                   | `'small' \| 'middle' \| 'large'`                         | `'middle'`  |
| shape           | 设置按钮形状                                                   | `'default' \| 'circle' \| 'round'`                       | `'default'` |
| htmlType        | 设置 button 原生的 type 值                                     | `'submit' \| 'button' \| 'reset'`                        | `'button'`  |
| loading         | 设置按钮载入状态                                               | `boolean \| { delay?: number }`                          | `false`     |
| disabled        | 设置按钮失效状态                                               | `boolean`                                                | `false`     |
| danger          | 设置危险按钮                                                   | `boolean`                                                | `false`     |
| block           | 将按钮宽度调整为其父宽度的选项                                 | `boolean`                                                | `false`     |
| ghost           | 幽灵属性，使按钮背景透明                                       | `boolean`                                                | `false`     |
| icon            | 设置按钮的图标组件                                             | `IconComponent`                                          | -           |
| iconPosition    | 设置图标位置                                                   | `'start' \| 'end'`                                       | `'start'`   |
| href            | 点击跳转的地址，指定此属性后按钮渲染为 a 标签                  | `string`                                                 | -           |
| target          | 相当于 a 标签的 target 属性，href 存在时生效                   | `string`                                                 | -           |
| autoInsertSpace | 是否在两个汉字之间插入空格                                     | `boolean`                                                | `true`      |
| classNames      | 语义化结构 class，见下方 [语义化 className](#语义化-classname) | `ButtonClassNames`                                       | -           |
| styles          | 语义化结构 style，见下方 [语义化 style](#语义化-style)         | `ButtonStyles`                                           | -           |

### Button Events

| 事件名 | 说明             | 回调参数                      |
| ------ | ---------------- | ----------------------------- |
| click  | 点击按钮时的回调 | `(event: MouseEvent) => void` |

### Button Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 按钮内容 |

---

## 语义化 className

通过 `classNames` 属性可以对按钮的各个子节点应用自定义 className，支持细粒度样式控制。

### 类型定义

```typescript
interface ButtonClassNames {
  root?: string // 按钮根节点（<button> 或 <a>）
  icon?: string // 图标容器
  loading?: string // 加载状态图标容器（与 icon 叠加）
}
```

### DOM 结构与默认 className

```html
<!-- 基础按钮 -->
<button class="hmfw-button hmfw-button-default">
  <!-- ↑ classNames.root 应用于此 -->
  <span>按钮文字</span>
</button>

<!-- 带图标按钮 -->
<button class="hmfw-button hmfw-button-primary">
  <span class="hmfw-button-icon">
    <!-- ↑ classNames.icon 应用于此 -->
    <svg>...</svg>
  </span>
  <span>搜索</span>
</button>

<!-- 加载状态 -->
<button class="hmfw-button hmfw-button-primary hmfw-button-loading">
  <!-- ↑ classNames.root 应用于此 -->
  <span class="hmfw-button-icon hmfw-button-loading-icon">
    <!-- ↑ classNames.icon + classNames.loading 叠加应用 -->
    <svg class="hmfw-icon-spin">...</svg>
  </span>
  <span>提交中</span>
</button>
```

### 使用示例

```vue
<template>
  <!-- 自定义图标样式 -->
  <Button type="primary" :icon="SearchOutlined" :class-names="{ icon: 'my-icon-wrapper' }"> 搜索 </Button>

  <!-- 自定义加载动画 -->
  <Button loading :class-names="{ loading: 'my-loading-emphasis' }"> 加载中 </Button>

  <!-- 自定义根节点样式 -->
  <Button :class-names="{ root: 'my-button-root' }"> 自定义按钮 </Button>
</template>

<style scoped>
:deep(.my-icon-wrapper) {
  color: #fadb14;
  filter: drop-shadow(0 0 2px rgba(250, 219, 20, 0.6));
}

:deep(.my-loading-emphasis) {
  font-size: 16px;
}

:deep(.my-button-root) {
  border-radius: 16px;
}
</style>
```

### 注意事项

- 加载状态时，`classNames.loading` 与 `classNames.icon` 会**叠加**应用在同一个 `<span>` 上
- `classNames.root` 会与组件内置的状态类名（如 `.hmfw-button-loading`）合并

---

## 语义化 style

通过 `styles` 属性可以对按钮的各个子节点应用内联样式。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface ButtonStyles {
  root?: CSSProperties // 按钮根节点
  icon?: CSSProperties // 图标容器
  loading?: CSSProperties // 加载状态图标容器（与 icon 合并）
}
```

### 使用示例

```vue
<template>
  <!-- 内联样式控制图标 -->
  <Button
    type="primary"
    :icon="SearchOutlined"
    :styles="{
      icon: { color: '#fadb14', fontSize: '18px' },
    }"
  >
    搜索
  </Button>

  <!-- 自定义边框颜色 -->
  <Button
    :icon="SearchOutlined"
    icon-position="end"
    :styles="{
      root: {
        borderColor: '#722ed1',
        color: '#722ed1',
      },
    }"
  >
    尾部图标
  </Button>

  <!-- 组合使用 -->
  <Button
    :icon="SearchOutlined"
    :styles="{
      root: { borderRadius: '16px' },
      icon: { fontSize: '20px' },
    }"
  >
    组合样式
  </Button>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 加载状态时，`styles.loading` 与 `styles.icon` 会**合并**（loading 的样式优先）
