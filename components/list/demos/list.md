# List 列表

通用列表。

## 何时使用

- 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面

## 代码演示

### 基础用法

基础列表。

<DemoBlock title="基础用法" :source="ListBasicSource">
  <ListBasic />
</DemoBlock>

### 带操作

可以配置额外操作。

<DemoBlock title="带操作" :source="ListActionsSource">
  <ListActions />
</DemoBlock>

### 带头像

带头像的列表。

<DemoBlock title="带头像" :source="ListAvatarSource">
  <ListAvatar />
</DemoBlock>

### 栅格列表

通过设置 `grid` 属性来实现栅格列表。

<DemoBlock title="栅格列表" :source="ListGridSource">
  <ListGrid />
</DemoBlock>

### 响应式网格

通过 `grid` 的响应式属性（xs/sm/md/lg/xl）实现不同屏幕尺寸下的自适应布局。

<DemoBlock title="响应式网格" :source="ListResponsiveGridSource">
  <ListResponsiveGrid />
</DemoBlock>

### 翻页

通过设置 `pagination` 属性来实现翻页。

<DemoBlock title="翻页" :source="ListPaginationSource">
  <ListPagination />
</DemoBlock>

### 竖排列表

通过设置 `itemLayout="vertical"` 来实现竖排列表。

<DemoBlock title="竖排列表" :source="ListVerticalSource">
  <ListVertical />
</DemoBlock>

### 虚拟滚动

使用虚拟滚动支持大数据场景，通过 `virtual` 和 `height` 属性开启。

<DemoBlock title="虚拟滚动" :source="ListVirtualSource">
  <ListVirtual />
</DemoBlock>

### 无限滚动

通过监听滚动事件实现无限滚动加载更多数据。

<DemoBlock title="无限滚动" :source="ListInfiniteScrollSource">
  <ListInfiniteScroll />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="ListClassNamesSource">
  <ListClassNames />
</DemoBlock>

## API

### List Props

| 参数       | 说明                                                                             | 类型                                                                                                                  | 默认值         |
| ---------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------- |
| dataSource | 列表数据源                                                                       | `any[]`                                                                                                               | -              |
| renderItem | 自定义渲染列表项                                                                 | `(item: T, index: number) => VNode`                                                                                   | -              |
| bordered   | 是否展示边框                                                                     | `boolean`                                                                                                             | `false`        |
| size       | 列表大小                                                                         | `'default' \| 'small' \| 'large'`                                                                                     | `'default'`    |
| split      | 是否展示分割线                                                                   | `boolean`                                                                                                             | `true`         |
| loading    | 当卡片内容还在加载中时，可以用 loading 展示一个占位                              | `boolean \| { spinning?: boolean }`                                                                                   | `false`        |
| pagination | 对应的 pagination 配置，设置 false 不显示                                        | `boolean \| PaginationConfig`                                                                                         | `false`        |
| grid       | 列表栅格配置                                                                     | `{ column?: number; gutter?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }` | -              |
| itemLayout | 设置 List.Item 布局                                                              | `'horizontal' \| 'vertical'`                                                                                          | `'horizontal'` |
| rowKey     | 各项 key 的取值，可以是字符串或一个函数                                          | `string \| ((item: T) => string \| number)`                                                                           | `'key'`        |
| header     | 列表头部                                                                         | `string \| VNode`                                                                                                     | -              |
| footer     | 列表底部                                                                         | `string \| VNode`                                                                                                     | -              |
| locale     | 默认文案设置，目前包括空数据文案                                                 | `{ emptyText?: string \| VNode }`                                                                                     | -              |
| loadMore   | 加载更多                                                                         | `VNode`                                                                                                               | -              |
| virtual    | 是否开启虚拟滚动                                                                 | `boolean`                                                                                                             | `false`        |
| height     | 虚拟滚动容器高度（开启 virtual 时必需）                                          | `number \| string`                                                                                                    | -              |
| itemHeight | 虚拟滚动每项高度                                                                 | `number`                                                                                                              | `48`           |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ListClassNames`                                                                                                      | -              |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ListStyles`                                                                                                          | -              |

### PaginationConfig

| 参数             | 说明                | 类型                                       | 默认值     |
| ---------------- | ------------------- | ------------------------------------------ | ---------- |
| current          | 当前页数            | `number`                                   | -          |
| pageSize         | 每页条数            | `number`                                   | `10`       |
| total            | 数据总数            | `number`                                   | -          |
| defaultCurrent   | 默认的当前页数      | `number`                                   | `1`        |
| defaultPageSize  | 默认的每页条数      | `number`                                   | `10`       |
| position         | 指定分页显示的位置  | `'top' \| 'bottom' \| 'both'`              | `'bottom'` |
| align            | 指定分页对齐方式    | `'start' \| 'center' \| 'end'`             | `'end'`    |
| onChange         | 页码改变的回调      | `(page: number, pageSize: number) => void` | -          |
| onShowSizeChange | pageSize 变化的回调 | `(current: number, size: number) => void`  | -          |

### List.Item Props

| 参数       | 说明                                                                             | 类型                 | 默认值 |
| ---------- | -------------------------------------------------------------------------------- | -------------------- | ------ |
| actions    | 列表操作组，根据 itemLayout 的不同，位置在卡片底部或者最右侧                     | `VNode[]`            | -      |
| extra      | 额外内容，通常用在 itemLayout 为 vertical 的情况下，展示右侧内容                 | `VNode`              | -      |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ListItemClassNames` | -      |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ListItemStyles`     | -      |

### List.Item.Meta Props

| 参数        | 说明                                                                             | 类型                     | 默认值 |
| ----------- | -------------------------------------------------------------------------------- | ------------------------ | ------ |
| avatar      | 列表元素的图标                                                                   | `VNode`                  | -      |
| title       | 列表元素的标题                                                                   | `string \| VNode`        | -      |
| description | 列表元素的描述内容                                                               | `string \| VNode`        | -      |
| classNames  | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ListItemMetaClassNames` | -      |
| styles      | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ListItemMetaStyles`     | -      |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 List 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

// List
interface ListClassNames {
  root?: string // 根容器 div.hmfw-list
  header?: string // 头部区域 div.hmfw-list-header
  footer?: string // 底部区域 div.hmfw-list-footer
  items?: string // 列表容器 ul.hmfw-list-items 或 div.hmfw-list-container（grid 模式）
  empty?: string // 空状态容器 div.hmfw-list-empty-text
  pagination?: string // 分页器容器 div.hmfw-list-pagination
}

interface ListStyles {
  root?: CSSProperties
  header?: CSSProperties
  footer?: CSSProperties
  items?: CSSProperties
  empty?: CSSProperties
  pagination?: CSSProperties
}

// ListItem
interface ListItemClassNames {
  item?: string // 列表项根节点 li.hmfw-list-item 或 div.hmfw-list-item（grid 模式）
  main?: string // 主内容区域 div.hmfw-list-item-main（垂直布局时）
  extra?: string // 额外内容 div.hmfw-list-item-extra
  action?: string // 操作列表 ul.hmfw-list-item-action
  actionSplit?: string // 操作分隔符 em.hmfw-list-item-action-split
}

interface ListItemStyles {
  item?: CSSProperties
  main?: CSSProperties
  extra?: CSSProperties
  action?: CSSProperties
  actionSplit?: CSSProperties
}

// ListItemMeta
interface ListItemMetaClassNames {
  meta?: string // Meta 根容器 div.hmfw-list-item-meta
  avatar?: string // 头像容器 div.hmfw-list-item-meta-avatar
  content?: string // 内容容器 div.hmfw-list-item-meta-content
  title?: string // 标题 h4.hmfw-list-item-meta-title
  description?: string // 描述 div.hmfw-list-item-meta-description
}

interface ListItemMetaStyles {
  meta?: CSSProperties
  avatar?: CSSProperties
  content?: CSSProperties
  title?: CSSProperties
  description?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<ListSemantic />

### DOM 结构与 className 映射

```html
<!-- List 主组件 -->
<div class="hmfw-list">
  <!-- ↑ classNames.root / styles.root -->
  <div class="hmfw-list-header">头部内容</div>
  <!-- ↑ classNames.header / styles.header -->

  <ul class="hmfw-list-items">
    <!-- ↑ grid 模式下为 div.hmfw-list-container；classNames.items / styles.items -->
    <li class="hmfw-list-item">
      <!-- ↑ ListItem 的 classNames.item / styles.item -->
      <div class="hmfw-list-item-meta">
        <!-- ↑ ListItemMeta 的 classNames.meta / styles.meta -->
        <div class="hmfw-list-item-meta-avatar">头像</div>
        <!-- ↑ ListItemMeta 的 classNames.avatar / styles.avatar -->
        <div class="hmfw-list-item-meta-content">
          <!-- ↑ ListItemMeta 的 classNames.content / styles.content -->
          <h4 class="hmfw-list-item-meta-title">标题</h4>
          <!-- ↑ ListItemMeta 的 classNames.title / styles.title -->
          <div class="hmfw-list-item-meta-description">描述</div>
          <!-- ↑ ListItemMeta 的 classNames.description / styles.description -->
        </div>
      </div>

      <ul class="hmfw-list-item-action">
        <!-- ↑ 设置 actions 时渲染；ListItem 的 classNames.action / styles.action -->
        <li>操作1</li>
        <em class="hmfw-list-item-action-split">|</em>
        <!-- ↑ ListItem 的 classNames.actionSplit / styles.actionSplit -->
        <li>操作2</li>
      </ul>
    </li>
  </ul>

  <div class="hmfw-list-footer">底部内容</div>
  <!-- ↑ classNames.footer / styles.footer -->
  <div class="hmfw-list-pagination">分页器</div>
  <!-- ↑ 开启 pagination 时渲染；classNames.pagination / styles.pagination -->
</div>

<!-- 空状态：dataSource 为空时 -->
<div class="hmfw-list">
  <ul class="hmfw-list-items">
    <div class="hmfw-list-empty-text">暂无数据</div>
    <!-- ↑ classNames.empty / styles.empty -->
  </ul>
</div>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点。List、ListItem、ListItemMeta 各自独立设置，`renderItem` 中需手动把 `classNames` / `styles` 传给 ListItem 与 ListItemMeta：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <List
    :data-source="data"
    :render-item="renderItem"
    header="文章列表"
    footer="查看更多"
    :class-names="{ root: 'my-list', header: 'my-header', footer: 'my-footer' }"
  />

  <!-- styles：内联样式，优先级高于 classNames -->
  <List
    :data-source="data"
    :render-item="renderItem"
    header="任务列表"
    :styles="{
      root: { borderRadius: '12px', overflow: 'hidden' },
      header: { background: '#1677ff', color: 'white', fontWeight: 600 },
      items: { background: '#fafafa' },
    }"
  />

  <!-- 组合：List 上混用 classNames 与 styles，ListItem / ListItemMeta 在 renderItem 中传入 -->
  <List :data-source="data" :render-item="renderItemMixed" :class-names="{ root: 'my-list' }" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Avatar } from '@hmfw/ant-design'

const data = [{ id: 1, title: '标题', description: '描述' }]

const renderItem = (item: any) =>
  h(List.Item, () =>
    h(List.Item.Meta, {
      avatar: h(Avatar, () => 'A'),
      title: item.title,
      description: item.description,
    }),
  )

const renderItemMixed = (item: any) =>
  h(
    List.Item,
    {
      actions: [h('a', '编辑'), h('a', '删除')],
      classNames: { item: 'my-item', action: 'my-action' },
      styles: { item: { padding: '20px', borderLeft: '3px solid #1677ff' } },
    },
    () =>
      h(List.Item.Meta, {
        avatar: h(Avatar, () => 'A'),
        title: item.title,
        description: item.description,
        classNames: { title: 'my-title' },
        styles: { description: { fontStyle: 'italic' } },
      }),
  )
</script>

<style scoped>
:deep(.my-list) {
  border-radius: 12px;
  overflow: hidden;
}

:deep(.my-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
}

:deep(.my-footer) {
  background: #f0f5ff;
  color: #1677ff;
  text-align: center;
  cursor: pointer;
}

:deep(.my-item:hover) {
  background: #f0f5ff;
  transform: translateX(4px);
}

:deep(.my-action) {
  gap: 12px;
}

:deep(.my-title) {
  color: #1677ff;
  font-weight: 600;
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-list-item`）合并，不会互相覆盖
- List、ListItem、ListItemMeta 的 `classNames` 和 `styles` 是独立的，需要分别在各自组件上设置
- `extra` 仅在 ListItem 设置了 `extra` 属性时渲染
- `action` 和 `actionSplit` 仅在 ListItem 设置了 `actions` 属性时渲染
- 使用 `renderItem` 时，需在渲染函数中手动传递 `classNames` 和 `styles` 给 ListItem 和 ListItemMeta

## 设计 Token

List 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                    | 说明         | 默认值               |
| ----------------------------- | ------------ | -------------------- |
| `--hmfw-color-border`         | 边框色       | `#d9d9d9`            |
| `--hmfw-color-primary`        | 主题色       | `#1677ff`            |
| `--hmfw-color-text`           | 主文本色     | `rgba(0,0,0,0.88)`   |
| `--hmfw-color-text-disabled`  | 禁用文本色   | `rgba(0,0,0,0.25)`   |
| `--hmfw-color-text-secondary` | 次要文本色   | `rgba(0,0,0,0.65)`   |
| `--hmfw-font-size-base`       | 基础字号     | `14px`               |
| `--hmfw-font-size-lg`         | 大号字号     | `16px`               |
| `--hmfw-line-height`          | 标准行高     | `1.5714285714285714` |
| `--hmfw-border-radius-lg`     | 大号圆角     | `8px`                |
| `--hmfw-control-height`       | 控件高度     | `32px`               |
| `--hmfw-margin`               | 标准外边距   | `12px`               |
| `--hmfw-margin-lg`            | 大号外边距   | `24px`               |
| `--hmfw-margin-sm`            | 小号外边距   | `8px`                |
| `--hmfw-padding`              | 标准内边距   | `12px`               |
| `--hmfw-padding-lg`           | 大号内边距   | `24px`               |
| `--hmfw-padding-sm`           | 小号内边距   | `8px`                |
| `--hmfw-padding-xs`           | 超小内边距   | `4px`                |
| `--hmfw-motion-duration-mid`  | 中速动画时长 | `0.2s`               |
