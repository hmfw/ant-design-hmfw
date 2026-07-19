# Transfer 穿梭框

双栏穿梭选择框，用于将元素从一列移入另一列。

## 何时使用

- 需要在两个集合之间进行选择，且需要直观展示两个集合的内容时
- 用于将可选项在两个列表之间移动
- 权限分配、角色配置等需要批量选择和管理的场景
- 需要对已选项进行排序（配合 `draggable` 使用）
- 大数据量场景（1000+ 项），配合虚拟滚动优化性能

## 代码演示

### 基础用法

最简单的用法，展示了数据在左右两栏之间的移动。

<DemoBlock title="基础用法" :source="TransferBasicSource">
  <TransferBasic />
</DemoBlock>

### 带搜索框

支持搜索功能，可以快速找到目标项。

<DemoBlock title="带搜索框" :source="TransferSearchSource">
  <TransferSearch />
</DemoBlock>

### 自定义渲染

可以自定义每项的渲染内容。

<DemoBlock title="自定义渲染" :source="TransferCustomSource">
  <TransferCustom />
</DemoBlock>

### 分页

数据较多时，可以使用分页。

<DemoBlock title="分页" :source="TransferPaginationSource">
  <TransferPagination />
</DemoBlock>

### 单向模式

单向模式下，只能从左往右移动，右侧项可单独删除。

<DemoBlock title="单向模式" :source="TransferOneWaySource">
  <TransferOneWay />
</DemoBlock>

### 拖拽排序

设置 `draggable` 后，右侧列表项可通过 HTML5 拖拽调整顺序。

<DemoBlock title="拖拽排序" :source="TransferDraggableSource">
  <TransferDraggable />
</DemoBlock>

### 虚拟滚动

大数据量场景（1000+ 项）使用虚拟滚动优化性能，仅渲染可见区域。

<DemoBlock title="虚拟滚动" :source="TransferVirtualSource">
  <TransferVirtual />
</DemoBlock>

### 底部渲染

通过 `footer` 属性自定义列表底部内容。

<DemoBlock title="底部渲染" :source="TransferFooterSource">
  <TransferFooter />
</DemoBlock>

### 状态展示

支持 `disabled`、`status="error"` 和 `status="warning"` 状态。

<DemoBlock title="状态展示" :source="TransferStatusSource">
  <TransferStatus />
</DemoBlock>

### 高级用法

展示 `selectAllLabels`、`filterOption`、`rowKey` 等高级配置。

<DemoBlock title="高级用法" :source="TransferAdvancedSource">
  <TransferAdvanced />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对列表、列表项、头部、操作按钮等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="TransferClassNamesSource">
  <TransferClassNames />
</DemoBlock>

## API

### Transfer Props

| 参数                   | 说明                                                                             | 类型                                                                           | 默认值     |
| ---------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ---------- |
| dataSource             | 数据源                                                                           | `TransferItem[]`                                                               | `[]`       |
| targetKeys (v-model)   | 右侧列表的 key 集合                                                              | `TransferKey[]`                                                                | `[]`       |
| selectedKeys (v-model) | 选中项的 key 集合                                                                | `TransferKey[]`                                                                | `[]`       |
| titles                 | 标题集合                                                                         | `(VNode \| string)[]`                                                          | `['', '']` |
| actions                | 操作按钮文案 [左→右, 右→左]                                                      | `(VNode \| string)[]`                                                          | `[]`       |
| render                 | 自定义渲染函数                                                                   | `(item: TransferItem) => RenderResult`                                         | -          |
| rowKey                 | 自定义提取 key                                                                   | `(record: TransferItem) => TransferKey`                                        | -          |
| showSearch             | 显示搜索框                                                                       | `boolean \| TransferSearchOption`                                              | `false`    |
| filterOption           | 自定义搜索函数                                                                   | `(input: string, item: TransferItem, direction: TransferDirection) => boolean` | -          |
| footer                 | 列表底部渲染                                                                     | `(info: TransferListContext) => VNode \| string \| null`                       | -          |
| listStyle              | 列表样式                                                                         | `CSSProperties \| ((info: { direction: TransferDirection }) => CSSProperties)` | -          |
| disabled               | 是否禁用                                                                         | `boolean`                                                                      | `false`    |
| showSelectAll          | 是否展示全选勾选框                                                               | `boolean`                                                                      | `true`     |
| selectAllLabels        | 自定义全选文案                                                                   | `SelectAllLabel[]`                                                             | -          |
| oneWay                 | 单向模式                                                                         | `boolean`                                                                      | `false`    |
| draggable              | 是否允许通过拖拽对右侧列表项排序                                                 | `boolean`                                                                      | `false`    |
| pagination             | 分页配置                                                                         | `boolean \| PaginationType`                                                    | -          |
| status                 | 校验状态                                                                         | `'error' \| 'warning'`                                                         | -          |
| locale                 | 文案配置                                                                         | `Partial<TransferLocale>`                                                      | -          |
| virtual                | 是否启用虚拟滚动（大数据量时开启，与 pagination 互斥）                           | `boolean`                                                                      | `false`    |
| listHeight             | 虚拟滚动列表容器高度（px）                                                       | `number`                                                                       | `400`      |
| listItemHeight         | 虚拟滚动列表项高度（px）                                                         | `number`                                                                       | `40`       |
| classNames             | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TransferSemanticClassNames`                                                   | -          |
| styles                 | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `TransferSemanticStyles`                                                       | -          |

### Transfer Events

| 事件名       | 说明                           | 回调参数                                                                             |
| ------------ | ------------------------------ | ------------------------------------------------------------------------------------ |
| change       | 右侧列表变化时触发             | `(targetKeys: TransferKey[], direction: TransferDirection, moveKeys: TransferKey[])` |
| selectChange | 选中项变化时触发               | `(sourceSelectedKeys: TransferKey[], targetSelectedKeys: TransferKey[])`             |
| search       | 搜索框内容变化时触发           | `(direction: TransferDirection, value: string)`                                      |
| scroll       | 列表滚动时触发                 | `(direction: TransferDirection, e: Event)`                                           |
| reorder      | 右侧列表通过拖拽重新排序后触发 | `(info: TransferReorderInfo)`，详见下方 [TransferReorderInfo](#transferreorderinfo)  |

### TransferItem

| 参数        | 说明     | 类型               |
| ----------- | -------- | ------------------ |
| key         | 唯一标识 | `string \| number` |
| title       | 标题     | `string`           |
| description | 描述     | `string`           |
| disabled    | 是否禁用 | `boolean`          |

### PaginationType

```ts
type PaginationType =
  | boolean
  | {
      pageSize?: number
      simple?: boolean
      showSizeChanger?: boolean
      showLessItems?: boolean
    }
```

### TransferLocale

```ts
interface TransferLocale {
  titles?: (VNode | string)[]
  notFoundContent?: VNode | string | (VNode | string)[]
  searchPlaceholder?: string
  itemUnit?: string
  itemsUnit?: string
  remove?: string
  selectAll?: string
  deselectAll?: string
  selectCurrent?: string
  selectInvert?: string
  removeAll?: string
  removeCurrent?: string
}
```

### TransferReorderInfo

```ts
interface TransferReorderInfo {
  direction: TransferDirection
  oldTargetKeys: TransferKey[]
  newTargetKeys: TransferKey[]
  activeKey: TransferKey
  fromIndex: number
  toIndex: number
}
```

## 特性说明

### 搜索

设置 `showSearch` 为 `true` 启用搜索功能，也可传对象 `{ placeholder, defaultValue }` 自定义搜索框。默认搜索匹配 `title` 字段，可通过 `filterOption` 自定义匹配逻辑。

### 分页

数据量大时，可以设置 `pagination` 为 `true` 或配置对象启用分页。分页后全选操作仅影响当前页，可通过 selections 下拉菜单操作所有项。

### 单向模式

设置 `oneWay` 后，只显示右箭头按钮，右侧列表每项显示删除按钮，用于"添加到列表"的场景。

### 拖拽排序

设置 `draggable` 后，右侧目标列表的每一项变为可拖拽元素（基于 HTML5 Drag and Drop）。拖拽并释放后会触发 `update:targetKeys` 与 `reorder` 事件，`reorder` 回调携带旧/新 `targetKeys` 顺序、被拖拽项 `activeKey` 以及 `fromIndex` / `toIndex`。禁用项不可拖拽。

### 虚拟滚动

数据量大时（1000+ 项），可以设置 `virtual` 为 `true` 启用虚拟滚动。虚拟滚动仅渲染可见区域的列表项，显著提升性能。

**配置项**：

- `virtual`：是否启用虚拟滚动（默认 `false`）
- `listHeight`：列表容器高度（px，默认 `400`）
- `listItemHeight`：列表项高度（px，默认 `40`）

**注意事项**：

- 虚拟滚动与 `pagination` 互斥，启用分页时虚拟滚动自动禁用
- 所有列表项应保持统一高度，否则可能出现滚动异常
- 适用于 1000+ 项的大数据量场景

### Shift 多选

按住 Shift 键点击可进行范围多选。

### 键盘操作

暂不支持键盘导航（与 AntD 一致）。

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对穿梭框的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
interface TransferSemanticClassNames {
  root?: string // 穿梭框根容器
  section?: string // 单侧列表容器（左右各一个）
  header?: string // 列表头部区域
  title?: string // 标题文本
  body?: string // 列表主体容器
  list?: string // 列表 <ul> 元素
  item?: string // 列表项 <li>
  itemIcon?: string // 列表项图标（复选框）
  itemContent?: string // 列表项文本内容
  footer?: string // 列表底部区域
  actions?: string // 中间操作按钮组
}

interface TransferSemanticStyles {
  root?: CSSProperties // 穿梭框根容器
  section?: CSSProperties // 单侧列表容器
  header?: CSSProperties // 列表头部区域
  title?: CSSProperties // 标题文本
  body?: CSSProperties // 列表主体容器
  list?: CSSProperties // 列表 <ul>
  item?: CSSProperties // 列表项 <li>
  itemIcon?: CSSProperties // 列表项图标
  itemContent?: CSSProperties // 列表项文本内容
  footer?: CSSProperties // 列表底部区域
  actions?: CSSProperties // 中间操作按钮组
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-transfer">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <!-- 左侧列表 -->
  <div class="hmfw-transfer-section hmfw-transfer-section-source">
    <!-- ↑ classNames.section / styles.section 应用于此 -->
    <div class="hmfw-transfer-header">
      <!-- ↑ classNames.header / styles.header 应用于此 -->
      <span class="hmfw-transfer-title">源列表</span>
      <!-- ↑ classNames.title / styles.title 应用于此 -->
    </div>
    <div class="hmfw-transfer-body">
      <!-- ↑ classNames.body / styles.body 应用于此 -->
      <ul class="hmfw-transfer-list">
        <!-- ↑ classNames.list / styles.list 应用于此 -->
        <li class="hmfw-transfer-item">
          <!-- ↑ classNames.item / styles.item 应用于此 -->
          <span class="hmfw-transfer-item-icon">
            <!-- ↑ classNames.itemIcon / styles.itemIcon 应用于此 -->
            <input type="checkbox" />
          </span>
          <span class="hmfw-transfer-item-content">选项 1</span>
          <!-- ↑ classNames.itemContent / styles.itemContent 应用于此 -->
        </li>
      </ul>
    </div>
    <div class="hmfw-transfer-footer">
      <!-- ↑ classNames.footer / styles.footer 应用于此 -->
    </div>
  </div>

  <!-- 中间操作区 -->
  <div class="hmfw-transfer-actions">
    <!-- ↑ classNames.actions / styles.actions 应用于此 -->
    <button>→</button>
    <button>←</button>
  </div>

  <!-- 右侧列表（结构同左侧） -->
  <div class="hmfw-transfer-section hmfw-transfer-section-target">...</div>
</div>
```

### 使用 classNames

```vue
<template>
  <!-- 自定义列表样式 -->
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :class-names="{
      section: 'my-section',
      list: 'my-list',
      item: 'my-item',
    }"
  />

  <!-- 自定义操作按钮区域 -->
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :class-names="{
      actions: 'my-actions',
      header: 'my-header',
    }"
  />

  <!-- 自定义列表项内容 -->
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :class-names="{
      itemContent: 'my-item-content',
      itemIcon: 'my-item-icon',
    }"
  />
</template>

<style scoped>
:deep(.my-section) {
  border: 2px solid #1890ff;
  border-radius: 8px;
}

:deep(.my-list) {
  background: linear-gradient(to bottom, #ffffff, #f5f5f5);
}

:deep(.my-item) {
  padding: 12px;
  transition: all 0.3s;
}

:deep(.my-item:hover) {
  background: #e6f7ff;
  transform: translateX(4px);
}

:deep(.my-actions) {
  margin: 0 24px;
}

:deep(.my-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px;
}

:deep(.my-item-content) {
  font-weight: 500;
  color: #333;
}

:deep(.my-item-icon) {
  margin-right: 12px;
}
</style>
```

### 使用 styles

```vue
<template>
  <!-- 内联样式控制间距 -->
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :styles="{
      section: { padding: '16px' },
      item: { padding: '12px 16px' },
    }"
  />

  <!-- 自定义头部和操作区 -->
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :styles="{
      header: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '12px',
      },
      actions: {
        margin: '0 24px',
      },
    }"
  />

  <!-- 组合使用 -->
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :styles="{
      root: { maxWidth: '800px', margin: '0 auto' },
      list: { maxHeight: '400px' },
      itemContent: { fontSize: '14px', fontWeight: '500' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `section` 会同时应用于左右两侧列表容器
- `item` / `itemIcon` / `itemContent` 会应用于所有列表项（左右两侧）
- 对于列表样式（`listStyle` prop），建议优先使用组件提供的 `listStyle` 属性；`styles.list` 适合做细微调整

## 设计 Token

| Token 名称                           | 说明             | 默认值             |
| ------------------------------------ | ---------------- | ------------------ |
| `--hmfw-color-border`                | 边框色           | `#d9d9d9`          |
| `--hmfw-color-error`                 | 错误状态色       | `#ff4d4f`          |
| `--hmfw-color-fill-quaternary`       | 四级填充色       | `rgba(0,0,0,0.02)` |
| `--hmfw-color-primary`               | 主题色           | `#1677ff`          |
| `--hmfw-color-primary-bg`            | 主题色背景       | `#e6f4ff`          |
| `--hmfw-color-primary-bg-hover`      | 主题色背景悬停态 | `#bae0ff`          |
| `--hmfw-color-warning`               | 警告状态色       | `#faad14`          |
| `--hmfw-color-bg-container`          | 容器背景色       | `#ffffff`          |
| `--hmfw-color-bg-container-disabled` | 禁用容器背景色   | `rgba(0,0,0,0.04)` |
