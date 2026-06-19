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

### 可选中标签

可通过 CheckableTag 实现类似 Checkbox 的效果。

<DemoBlock title="可选中标签" :source="TagCheckableSource">
  <TagCheckable />
</DemoBlock>

### 链接与禁用

通过 `href` 渲染为链接，通过 `disabled` 禁用标签。

<DemoBlock title="链接与禁用" :source="TagLinkDisabledSource">
  <TagLinkDisabled />
</DemoBlock>

## API

### Tag Props

| 参数      | 说明                             | 类型        | 默认值  |
| --------- | -------------------------------- | ----------- | ------- |
| color     | 标签色（预设色或自定义色值）     | `string`    | -       |
| closable  | 标签是否可以关闭，关闭后自动隐藏 | `boolean`   | `false` |
| closeIcon | 自定义关闭图标组件               | `Component` | -       |
| icon      | 标签图标组件                     | `Component` | -       |
| bordered  | 是否有边框                       | `boolean`   | `true`  |
| href      | 设置后标签渲染为 `<a>` 链接      | `string`    | -       |
| target    | 链接打开方式，配合 `href`        | `string`    | -       |
| disabled  | 禁用状态                         | `boolean`   | `false` |

### Tag Events

| 事件名 | 说明                                                   | 回调参数                  |
| ------ | ------------------------------------------------------ | ------------------------- |
| close  | 关闭时的回调，调用 `e.preventDefault()` 可阻止自动隐藏 | `(e: MouseEvent) => void` |

### CheckableTag Props

| 参数    | 说明               | 类型      | 默认值  |
| ------- | ------------------ | --------- | ------- |
| checked | 设置标签的选中状态 | `boolean` | `false` |

### CheckableTag Events

| 事件名 | 说明                 | 回调参数                     |
| ------ | -------------------- | ---------------------------- |
| change | 点击标签时触发的回调 | `(checked: boolean) => void` |

---

Tag 是单元素透传组件，可直接使用原生 class 和 style attribute 进行样式定制。

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
