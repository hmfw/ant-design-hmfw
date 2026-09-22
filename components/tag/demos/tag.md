# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度
- 进行分类

## 代码演示

### 基础用法

基本标签的用法，可以通过添加 closable 变为可关闭标签。

<DemoBlock title="基础用法" :source="TagBasicSource">
  <TagBasic />
</DemoBlock>

### 预设颜色

我们添加了多种预设色彩的标签样式，用作不同场景使用。

<DemoBlock title="预设颜色" :source="TagPresetColorSource">
  <TagPresetColor />
</DemoBlock>

### 自定义颜色

可以自定义标签颜色。

<DemoBlock title="自定义颜色" :source="TagCustomColorSource">
  <TagCustomColor />
</DemoBlock>

### 变体

通过 `variant` 控制标签样式：`outlined`（描边，默认）、`filled`（填充）、`solid`（实色）。`bordered={false}` 等价于 `variant="filled"`。

<DemoBlock title="变体" :source="TagVariantSource">
  <TagVariant />
</DemoBlock>

### 图标与自定义关闭

通过 `icon` 插槽添加前置图标，通过 `closeIcon` 插槽/属性自定义关闭图标，`:closeIcon="false"` 可隐藏关闭按钮。

<DemoBlock title="图标与自定义关闭" :source="TagIconCloseSource">
  <TagIconClose />
</DemoBlock>

### 可选中标签

可通过 CheckableTag 实现类似 Checkbox 的效果。

<DemoBlock title="可选中标签" :source="TagCheckableSource">
  <TagCheckable />
</DemoBlock>

### 标签选择组

通过 CheckableTagGroup 快速构建单选/多选的标签组，支持 `v-model:value`。

<DemoBlock title="标签选择组" :source="TagCheckableGroupSource">
  <TagCheckableGroup />
</DemoBlock>

### 链接与禁用

通过 `href` 渲染为链接，通过 `disabled` 禁用标签。

<DemoBlock title="链接与禁用" :source="TagLinkDisabledSource">
  <TagLinkDisabled />
</DemoBlock>

## API

### Tag Props

| 参数       | 说明                                                          | 类型                                  | 默认值       |
| ---------- | ------------------------------------------------------------- | ------------------------------------- | ------------ |
| color      | 标签色（预设色、状态色或自定义色值）                          | `string`                              | -            |
| variant    | 变体样式                                                      | `'outlined' \| 'filled' \| 'solid'`   | `'outlined'` |
| closable   | 标签是否可以关闭，关闭后自动隐藏                              | `boolean`                             | `false`      |
| closeIcon  | 自定义关闭图标，`false` 隐藏关闭按钮                          | `boolean \| Component \| () => VNode` | -            |
| icon       | 标签前置图标组件                                              | `Component`                           | -            |
| bordered   | 是否有边框（`false` 等价 `variant="filled"`）                 | `boolean`                             | `true`       |
| href       | 设置后标签渲染为 `<a>` 链接                                   | `string`                              | -            |
| target     | 链接打开方式，配合 `href`                                     | `string`                              | -            |
| disabled   | 禁用状态                                                      | `boolean`                             | `false`      |
| classNames | 语义化 className（`root` / `icon` / `content` / `closeIcon`） | `object`                              | -            |
| styles     | 语义化 style（同上）                                          | `object`                              | -            |

### Tag Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| default   | 标签内容       |
| icon      | 前置图标       |
| closeIcon | 自定义关闭图标 |

### Tag Events

| 事件名 | 说明                                                   | 回调参数                  |
| ------ | ------------------------------------------------------ | ------------------------- |
| close  | 关闭时的回调，调用 `e.preventDefault()` 可阻止自动隐藏 | `(e: MouseEvent) => void` |

### CheckableTag Props

| 参数     | 说明               | 类型        | 默认值  |
| -------- | ------------------ | ----------- | ------- |
| checked  | 设置标签的选中状态 | `boolean`   | `false` |
| icon     | 前置图标组件       | `Component` | -       |
| disabled | 禁用状态           | `boolean`   | `false` |

### CheckableTag Events

| 事件名 | 说明                 | 回调参数                     |
| ------ | -------------------- | ---------------------------- |
| change | 点击标签时触发的回调 | `(checked: boolean) => void` |

### CheckableTagGroup Props

| 参数         | 说明                               | 类型                                         | 默认值  |
| ------------ | ---------------------------------- | -------------------------------------------- | ------- |
| options      | 选项列表（对象或原始值）           | `(CheckableTagOption \| string \| number)[]` | -       |
| value        | 当前选中值（配合 `v-model:value`） | `Value \| Value[] \| null`                   | -       |
| defaultValue | 非受控默认值                       | `Value \| Value[] \| null`                   | -       |
| multiple     | 是否多选                           | `boolean`                                    | `false` |
| disabled     | 整组禁用                           | `boolean`                                    | `false` |

### CheckableTagGroup Events

| 事件名 | 说明             | 回调参数                            |
| ------ | ---------------- | ----------------------------------- |
| change | 选中值变化时触发 | `(value: Value \| Value[] \| null)` |

---

Tag 是单元素透传组件，可直接使用原生 class 和 style attribute 进行样式定制。

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对标签的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface TagClassNames {
  root?: string // 根节点 span.hmfw-tag（设置 href 后为 a.hmfw-tag）
  icon?: string // 前置图标 .hmfw-tag-icon
  content?: string // 内容包裹节点 .hmfw-tag-content（仅在存在 icon 时渲染）
  closeIcon?: string // 关闭图标 span.hmfw-tag-close-icon
}

interface TagStyles {
  root?: CSSProperties
  icon?: CSSProperties
  content?: CSSProperties
  closeIcon?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<TagSemantic />

### DOM 结构与 className 映射

```html
<span class="hmfw-tag hmfw-tag-outlined">
  <!-- ↑ classNames.root / styles.root（设置 href 后为 <a>） -->
  <span class="hmfw-tag-icon" role="img"></span>
  <!-- ↑ classNames.icon / styles.icon（设置 icon 时渲染） -->
  <span class="hmfw-tag-content">标签文字</span>
  <!-- ↑ classNames.content / styles.content（仅在同时存在 icon 与文字时渲染） -->
  <span class="hmfw-tag-close-icon" role="button"></span>
  <!-- ↑ classNames.closeIcon / styles.closeIcon（closable 时渲染） -->
</span>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Tag
    :icon="TagsOutlined"
    closable
    :class-names="{ root: 'custom-tag', icon: 'custom-icon', closeIcon: 'custom-close' }"
  >
    标签
  </Tag>

  <!-- styles：内联样式，优先级高于 classNames -->
  <Tag :styles="{ root: { borderStyle: 'dashed', borderColor: '#722ed1' } }">标签</Tag>

  <!-- 组合：classNames 与 styles 混用 -->
  <Tag :icon="TagsOutlined" :class-names="{ icon: 'custom-icon' }" :styles="{ root: { borderRadius: '12px' } }">
    标签
  </Tag>
</template>

<style scoped>
:deep(.custom-tag) {
  border-radius: 12px;
}
:deep(.custom-icon) {
  color: #722ed1;
}
:deep(.custom-close) {
  color: #ff4d4f;
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-tag`）合并，不会互相覆盖

## 设计 Token

Tag 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                           | 说明         | 默认值             |
| ------------------------------------ | ------------ | ------------------ |
| `--hmfw-color-primary`               | 主题色       | `#1677ff`          |
| `--hmfw-color-primary-hover`         | 主题色悬停态 | `#4096ff`          |
| `--hmfw-color-text`                  | 主文本色     | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-secondary`        | 次要文本色   | `rgba(0,0,0,0.65)` |
| `--hmfw-color-text-disabled`         | 禁用文本色   | `rgba(0,0,0,0.25)` |
| `--hmfw-color-bg-container-disabled` | 禁用背景色   | `rgba(0,0,0,0.04)` |
| `--hmfw-color-border`                | 边框色       | `#d9d9d9`          |
| `--hmfw-color-fill-secondary`        | 次级填充色   | `rgba(0,0,0,0.06)` |
| `--hmfw-color-fill-quaternary`       | 四级填充色   | `rgba(0,0,0,0.02)` |
| `--hmfw-border-radius`               | 基础圆角     | `6px`              |
