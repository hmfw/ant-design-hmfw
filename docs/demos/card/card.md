# Card 卡片

通用卡片容器。

## 何时使用

- 最基础的卡片容器，可承载文字、列表、图片、段落等内容
- 常用于后台概览页面

## 代码演示

### 基础卡片

包含标题、内容、操作区域。

<DemoBlock title="基础卡片" :source="CardBasicSource">
  <CardBasic />
</DemoBlock>

### 带封面

可以配合 cover 插槽展示封面图片。

<DemoBlock title="带封面" :source="CardCoverSource">
  <CardCover />
</DemoBlock>

### 加载中

数据读入前会有文本块样式。

<DemoBlock title="加载中" :source="CardLoadingSource">
  <CardLoading />
</DemoBlock>

### 带头像的加载状态

可以通过对象配置骨架屏，支持头像和自定义段落行数。

<DemoBlock title="带头像的加载状态" :source="CardLoadingAvatarSource">
  <CardLoadingAvatar />
</DemoBlock>

### 网格卡片

通过 `Card.Grid` 在卡片内部划分等宽网格。

<DemoBlock title="网格卡片" :source="CardGridSource">
  <CardGrid />
</DemoBlock>

### 内部卡片

通过 `type="inner"` 用于卡片内部嵌套展示。

<DemoBlock title="内部卡片" :source="CardInnerSource">
  <CardInner />
</DemoBlock>

### 带标签页的卡片

可以在卡片头部集成标签页。

<DemoBlock title="带标签页的卡片" :source="CardTabsSource">
  <CardTabs />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="CardClassNamesSource">
  <CardClassNames />
</DemoBlock>

## API

### Card Props

| 参数                | 说明                                                       | 类型                                                             | 默认值      |
| ------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------- | ----------- |
| title               | 卡片标题                                                   | `string`                                                         | -           |
| extra               | 卡片右上角的操作区域                                       | `string \| slot`                                                 | -           |
| bordered            | 是否有边框                                                 | `boolean`                                                        | `true`      |
| variant             | 边框变体（优先于 `bordered`）                              | `'borderless' \| 'outlined'`                                     | -           |
| type                | 卡片类型，可设为 `inner`                                   | `'inner'`                                                        | -           |
| loading             | 当卡片内容还在加载中时，可以用 loading 展示一个占位        | `boolean \| { avatar?: boolean; paragraph?: { rows?: number } }` | `false`     |
| size                | 卡片的尺寸                                                 | `'default' \| 'small'`                                           | `'default'` |
| hoverable           | 鼠标移过时可浮起                                           | `boolean`                                                        | `false`     |
| bodyStyle           | 内容区域自定义样式                                         | `CSSProperties`                                                  | -           |
| headStyle           | 标题区域自定义样式                                         | `CSSProperties`                                                  | -           |
| tabList             | 标签页列表                                                 | `Array<{ key: string; label: string; disabled?: boolean }>`      | -           |
| activeTabKey        | 当前激活标签的 key                                         | `string`                                                         | -           |
| defaultActiveTabKey | 默认激活标签的 key                                         | `string`                                                         | -           |
| onTabChange         | 标签切换回调                                               | `(key: string) => void`                                          | -           |
| classNames          | 语义化 className（[详见下方](#语义化-classname-与-style)） | `CardClassNames`                                                 | -           |
| styles              | 语义化 style（[详见下方](#语义化-classname-与-style)）     | `CardStyles`                                                     | -           |

### Card Slots

| 名称               | 说明                 |
| ------------------ | -------------------- |
| default            | 卡片内容             |
| title              | 卡片标题             |
| extra              | 卡片右上角的操作区域 |
| cover              | 卡片封面             |
| actions            | 卡片操作组           |
| tabBarExtraContent | 标签栏额外内容       |

### Card Events

| 事件名              | 说明                           | 回调参数                |
| ------------------- | ------------------------------ | ----------------------- |
| tabChange           | 标签切换时触发                 | `(key: string) => void` |
| update:activeTabKey | 标签切换时触发（支持 v-model） | `(key: string) => void` |

### Card.Grid Props

| 参数      | 说明             | 类型      | 默认值 |
| --------- | ---------------- | --------- | ------ |
| hoverable | 鼠标移过时可浮起 | `boolean` | `true` |

### CardMeta Props

| 参数        | 说明      | 类型             | 默认值 |
| ----------- | --------- | ---------------- | ------ |
| title       | 标题内容  | `string`         | -      |
| description | 描述内容  | `string`         | -      |
| avatar      | 头像/图标 | `string \| slot` | -      |

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对Card的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface CardClassNames {
  root?: string // 根节点 div.hmfw-card
  head?: string // 头部容器 div.hmfw-card-head
  title?: string // 标题 div.hmfw-card-head-title
  extra?: string // 右侧扩展 div.hmfw-card-extra
  body?: string // 主体内容 div.hmfw-card-body
  actions?: string // 底部操作 ul.hmfw-card-actions
}

interface CardStyles {
  root?: CSSProperties // 根节点 div.hmfw-card
  head?: CSSProperties // 头部容器 div.hmfw-card-head
  title?: CSSProperties // 标题 div.hmfw-card-head-title
  extra?: CSSProperties // 右侧扩展 div.hmfw-card-extra
  body?: CSSProperties // 主体内容 div.hmfw-card-body
  actions?: CSSProperties // 底部操作 ul.hmfw-card-actions
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-card">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <div class="hmfw-card-cover">封面</div>
  <div class="hmfw-card-head">
    <!-- ↑ classNames.head / styles.head 应用于此 -->
    <div class="hmfw-card-head-wrapper">
      <div class="hmfw-card-head-title">标题</div>
      <!-- ↑ classNames.title / styles.title 应用于此 -->
      <div class="hmfw-card-extra">扩展</div>
      <!-- ↑ classNames.extra / styles.extra 应用于此 -->
    </div>
  </div>
  <div class="hmfw-card-body">内容</div>
  <!-- ↑ classNames.body / styles.body 应用于此 -->
  <ul class="hmfw-card-actions">
    操作组
  </ul>
  <!-- ↑ classNames.actions / styles.actions 应用于此 -->
</div>
```

### 使用 classNames

```vue
<template>
  <Card
    title="标题"
    :classNames="{
      root: 'my-card-root',
      head: 'my-card-head',
      title: 'my-card-title',
      body: 'my-card-body',
      actions: 'my-card-actions',
    }"
  >
    内容
  </Card>
</template>

<style scoped>
:deep(.my-card-root) {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

:deep(.my-card-head) {
  background: linear-gradient(to right, #667eea, #764ba2);
}

:deep(.my-card-title) {
  color: white;
  font-weight: bold;
}

:deep(.my-card-body) {
  padding: 24px;
}

:deep(.my-card-actions) {
  background: #f0f2f5;
}
</style>
```

### 使用 styles

```vue
<template>
  <Card
    title="动态样式"
    :styles="{
      root: { border: '2px solid #1890ff', borderRadius: '12px' },
      head: { background: '#667eea', color: 'white' },
      body: { padding: '24px' },
    }"
  >
    内容
  </Card>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `title` 仅在设置了 `title` 属性或 `title` 插槽时渲染
- `extra` 仅在设置了 `extra` 插槽时渲染
- `actions` 仅在设置了 `actions` 插槽时渲染
- `styles.head` 会与 `headStyle` 合并，`styles.body` 会与 `bodyStyle` 合并

## 设计 Token

| Token 名称                    | 说明       | 默认值             |
| ----------------------------- | ---------- | ------------------ |
| `--hmfw-color-border`         | 边框色     | `#d9d9d9`          |
| `--hmfw-color-fill-alter`     | 替代填充色 | `rgba(0,0,0,0.02)` |
| `--hmfw-color-primary`        | 主题色     | `#1677ff`          |
| `--hmfw-color-text`           | 主文本色   | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-disabled`  | 禁用文本色 | `rgba(0,0,0,0.25)` |
| `--hmfw-color-text-secondary` | 次要文本色 | `rgba(0,0,0,0.65)` |
| `--hmfw-font-size-base`       | 基础字号   | `14px`             |
| `--hmfw-border-radius-lg`     | 大号圆角   | `8px`              |
