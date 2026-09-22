# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时
- 当需要告知用户当前位置时
- 当需要向上导航的功能时

## 代码演示

### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="BreadcrumbBasicSource">
  <BreadcrumbBasic />
</DemoBlock>

### 带链接

通过 `href` 属性设置链接。

<DemoBlock title="带链接" :source="BreadcrumbLinkSource">
  <BreadcrumbLink />
</DemoBlock>

### 自定义分隔符

通过 `separator` 属性自定义分隔符。

<DemoBlock title="自定义分隔符" :source="BreadcrumbSeparatorSource">
  <BreadcrumbSeparator />
</DemoBlock>

### 带图标

可以在 `title` 中使用图标。

<DemoBlock title="带图标" :source="BreadcrumbIconSource">
  <BreadcrumbIcon />
</DemoBlock>

### 带点击事件

通过 `onClick` 处理面包屑点击。

<DemoBlock title="带点击事件" :source="BreadcrumbClickSource">
  <BreadcrumbClick />
</DemoBlock>

### 参数替换

通过 `params` 属性替换路径中的参数。

<DemoBlock title="参数替换" :source="BreadcrumbParamsSource">
  <BreadcrumbParams />
</DemoBlock>

### 分隔符类型

可以在 `items` 中使用 `type: 'separator'` 来自定义每个分隔符。

<DemoBlock title="分隔符类型" :source="BreadcrumbSeparatorTypeSource">
  <BreadcrumbSeparatorType />
</DemoBlock>

### 路径拼接

使用 `path` 属性自动拼接路径。

<DemoBlock title="路径拼接" :source="BreadcrumbPathSource">
  <BreadcrumbPath />
</DemoBlock>

### 带下拉菜单

配置 `menu` 属性，面包屑项可以展开下拉菜单。

<DemoBlock title="带下拉菜单" :source="BreadcrumbMenuSource">
  <BreadcrumbMenu />
</DemoBlock>

### 自定义下拉图标

使用 `dropdownIcon` 属性自定义展开图标，同时可通过 `dropdownProps` 透传 Dropdown 属性（如 `trigger`）。

<DemoBlock title="自定义下拉图标" :source="BreadcrumbDropdownIconSource">
  <BreadcrumbDropdownIcon />
</DemoBlock>

### target 与 rel 属性

通过 `target` 和 `rel` 属性控制链接打开方式和安全性，与 HTML `<a>` 标签行为一致。

<DemoBlock title="target 与 rel" :source="BreadcrumbTargetSource">
  <BreadcrumbTarget />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="BreadcrumbClassNamesSource">
  <BreadcrumbClassNames />
</DemoBlock>

## API

### Breadcrumb Props

| 参数         | 说明                                                                             | 类型                                    | 默认值         |
| ------------ | -------------------------------------------------------------------------------- | --------------------------------------- | -------------- |
| items        | 路由栈信息                                                                       | `ItemType[]`                            | `[]`           |
| separator    | 分隔符                                                                           | `string \| VNode`                       | `'/'`          |
| params       | 路径参数                                                                         | `Record<string, any>`                   | `{}`           |
| dropdownIcon | 自定义下拉菜单展开图标                                                           | `VNode`                                 | `DownOutlined` |
| itemRender   | 自定义渲染面包屑项                                                               | `(item, params, items, paths) => VNode` | -              |
| classNames   | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `BreadcrumbClassNames`                  | -              |
| styles       | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `BreadcrumbStyles`                      | -              |

### ItemType

面包屑项或分隔符。

**BreadcrumbItemType:**

| 参数          | 说明                         | 类型                        | 默认值 |
| ------------- | ---------------------------- | --------------------------- | ------ |
| key           | 唯一标识                     | `string \| number`          | -      |
| title         | 名称                         | `string \| number \| VNode` | -      |
| href          | 链接地址                     | `string`                    | -      |
| path          | 路径（会自动拼接前面的路径） | `string`                    | -      |
| target        | 链接打开方式，同 `<a>` 标签  | `string`                    | -      |
| rel           | 链接关系属性，同 `<a>` 标签  | `string`                    | -      |
| className     | 自定义类名                   | `string`                    | -      |
| style         | 自定义样式                   | `CSSProperties`             | -      |
| onClick       | 点击事件                     | `(e: MouseEvent) => void`   | -      |
| menu          | 下拉菜单配置                 | `BreadcrumbMenu`            | -      |
| dropdownProps | 透传给 Dropdown 的属性       | `DropdownProps`             | -      |
| data-\*       | 自定义数据属性               | `any`                       | -      |
| aria-\*       | ARIA 无障碍属性              | `any`                       | -      |

**BreadcrumbSeparatorType:**

| 参数      | 说明                       | 类型               | 默认值 |
| --------- | -------------------------- | ------------------ | ------ |
| type      | 类型（必须为 'separator'） | `'separator'`      | -      |
| separator | 分隔符内容                 | `string \| VNode`  | -      |
| key       | 唯一标识                   | `string \| number` | -      |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对面包屑的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface BreadcrumbClassNames {
  root?: string // 根节点 nav.hmfw-breadcrumb
  list?: string // 列表容器 ol
  item?: string // 面包屑项 li.hmfw-breadcrumb-item
  link?: string // 链接/文本 a.hmfw-breadcrumb-link 或 span.hmfw-breadcrumb-link
  separator?: string // 分隔符 li.hmfw-breadcrumb-separator
  overlayLink?: string // 带下拉菜单的链接内容 span.hmfw-breadcrumb-overlay-link
}

interface BreadcrumbStyles {
  root?: CSSProperties
  list?: CSSProperties
  item?: CSSProperties
  link?: CSSProperties
  separator?: CSSProperties
  overlayLink?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<BreadcrumbSemantic />

### DOM 结构与 className 映射

```html
<nav class="hmfw-breadcrumb">
  <!-- ↑ classNames.root / styles.root -->
  <ol>
    <!-- ↑ classNames.list / styles.list -->
    <li class="hmfw-breadcrumb-item">
      <!-- ↑ classNames.item / styles.item -->
      <a class="hmfw-breadcrumb-link" href="#">首页</a>
      <!-- ↑ 设置 href 时为 <a>，否则为 <span>；classNames.link / styles.link -->
    </li>
    <li class="hmfw-breadcrumb-separator">/</li>
    <!-- ↑ 相邻条目之间自动渲染，classNames.separator / styles.separator -->
    <li class="hmfw-breadcrumb-item">
      <span class="hmfw-breadcrumb-link">当前页</span>
    </li>
  </ol>
</nav>

<!-- 条目配置了 menu 下拉菜单时，link 内会多一层 overlayLink -->
<li class="hmfw-breadcrumb-item">
  <span class="hmfw-breadcrumb-overlay-link">菜单项</span>
  <!-- ↑ classNames.overlayLink / styles.overlayLink -->
</li>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Breadcrumb
    :items="[{ title: '首页', href: '#' }, { title: '应用列表', href: '#' }, { title: '详情' }]"
    :class-names="{ root: 'custom-root', link: 'custom-link', separator: 'custom-separator' }"
  />

  <!-- styles：内联样式，优先级高于 classNames -->
  <Breadcrumb
    :items="[{ title: '首页', href: '#' }, { title: '设置', href: '#' }, { title: '个人信息' }]"
    :styles="{
      root: { padding: '12px 16px', background: '#f0f5ff', borderRadius: '8px' },
      link: { color: '#1677ff', fontWeight: 500 },
      separator: { color: '#d9d9d9', margin: '0 12px' },
    }"
  />

  <!-- 组合：classNames 与 styles 混用 -->
  <Breadcrumb
    :items="[{ title: '控制台', href: '#' }, { title: '项目管理', href: '#' }, { title: '详情' }]"
    :class-names="{ root: 'custom-root' }"
    :styles="{ separator: { margin: '0 16px' }, item: { display: 'flex', alignItems: 'center' } }"
  />
</template>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px 20px;
  border-radius: 8px;
}

:deep(.custom-root .hmfw-breadcrumb-link) {
  color: rgba(255, 255, 255, 0.85);
}

:deep(.custom-link) {
  color: #722ed1;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
}

:deep(.custom-link:hover) {
  background: #f9f0ff;
  color: #531dab;
}

:deep(.custom-separator) {
  color: #1677ff;
  font-weight: bold;
  margin: 0 12px;
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-breadcrumb-item`）合并，不会互相覆盖

## 设计 Token

Breadcrumb 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                    | 说明         | 默认值             |
| ----------------------------- | ------------ | ------------------ |
| `--hmfw-color-text`           | 主文本色     | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-secondary` | 次级文本色   | `rgba(0,0,0,0.65)` |
| `--hmfw-color-fill-secondary` | 次级填充色   | `rgba(0,0,0,0.06)` |
| `--hmfw-font-size-base`       | 基础字号     | `14px`             |
| `--hmfw-border-radius-sm`     | 小号圆角     | `4px`              |
| `--hmfw-margin-xs`            | 超小号外边距 | `8px`              |
| `--hmfw-motion-duration-mid`  | 中速动画时长 | `0.2s`             |
