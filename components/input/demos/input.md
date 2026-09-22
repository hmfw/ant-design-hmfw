# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

### 基础用法

基本使用。

<DemoBlock title="基础用法" :source="InputBasicSource">
  <InputBasic />
</DemoBlock>

### 前缀/后缀

在输入框上添加前缀或后缀图标。

<DemoBlock title="前缀/后缀" :source="InputAddonSource">
  <InputAddon />
</DemoBlock>

### 密码框

密码输入框，可切换密码可见性。

<DemoBlock title="密码框" :source="InputPasswordSource">
  <InputPassword />
</DemoBlock>

### 文本域

用于多行输入。

<DemoBlock title="文本域" :source="InputTextAreaSource">
  <InputTextArea />
</DemoBlock>

### 搜索框

带有搜索按钮的输入框。

<DemoBlock title="搜索框" :source="InputSearchSource">
  <InputSearch />
</DemoBlock>

### 校验状态

error / warning 状态的输入框。

<DemoBlock title="校验状态" :source="InputStatusSource">
  <InputStatus />
</DemoBlock>

### 高级功能

展示细粒度样式控制（classNames / styles）和 TextArea 的 pressEnter 事件。

<DemoBlock title="高级功能" :source="InputAdvancedSource">
  <InputAdvanced />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对前缀、后缀、输入框、字数统计等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="InputClassNamesSource">
  <InputClassNames />
</DemoBlock>

## API

### Input Props

| 参数           | 说明                                                                             | 类型                                                                                                                             | 默认值     |
| -------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| value(v-model) | 输入框内容（受控值，传入后转为受控模式）                                         | `string`                                                                                                                         | -          |
| defaultValue   | 非受控模式下的初始值（未传 `value` 时生效）                                      | `string`                                                                                                                         | -          |
| placeholder    | 输入框占位文本                                                                   | `string`                                                                                                                         | -          |
| disabled       | 是否禁用状态                                                                     | `boolean`                                                                                                                        | `false`    |
| size           | 控件大小                                                                         | `'small' \| 'middle' \| 'large'`                                                                                                 | `'middle'` |
| maxlength      | 最大长度                                                                         | `number`                                                                                                                         | -          |
| showCount      | 是否展示字数，支持自定义格式化                                                   | `boolean \| { formatter: (info) => VNode \| string }`                                                                            | `false`    |
| allowClear     | 可以点击清除图标删除内容，支持自定义清除图标                                     | `boolean \| { clearIcon?: VNode; disabled?: boolean }`                                                                           | `false`    |
| prefix         | 带有前缀图标的 input                                                             | `string \| VNode`                                                                                                                | -          |
| suffix         | 带有后缀图标的 input                                                             | `string \| VNode`                                                                                                                | -          |
| status         | 设置校验状态                                                                     | `'error' \| 'warning'`                                                                                                           | -          |
| readonly       | 是否只读                                                                         | `boolean`                                                                                                                        | `false`    |
| id             | 输入框的 id                                                                      | `string`                                                                                                                         | -          |
| classNames     | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `{ affixWrapper?: string; prefix?: string; suffix?: string; input?: string; count?: string }`                                    | -          |
| styles         | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `{ affixWrapper?: CSSProperties; prefix?: CSSProperties; suffix?: CSSProperties; input?: CSSProperties; count?: CSSProperties }` | -          |

### InputPassword Props

继承 Input 所有属性，额外支持：

| 参数             | 说明                             | 类型                                                                             | 默认值    |
| ---------------- | -------------------------------- | -------------------------------------------------------------------------------- | --------- |
| visibilityToggle | 是否显示切换按钮或者控制密码显隐 | `boolean \| { visible?: boolean; onVisibleChange?: (visible: boolean) => void }` | `true`    |
| iconRender       | 自定义切换按钮                   | `(visible: boolean) => VNode \| string`                                          | -         |
| action           | 切换按钮的触发方式               | `'click' \| 'hover'`                                                             | `'click'` |

### TextArea Props

继承 Input 所有属性，额外支持：

| 参数       | 说明                                                                             | 类型                                                   | 默认值  |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------------ | ------- |
| rows       | 输入框行数                                                                       | `number`                                               | `4`     |
| autoSize   | 自适应内容高度，可设置为 true \| false 或对象：`{ minRows, maxRows }`            | `boolean \| { minRows?: number; maxRows?: number }`    | `false` |
| allowClear | 可以点击清除图标删除内容                                                         | `boolean \| { clearIcon?: VNode; disabled?: boolean }` | `false` |
| showCount  | 是否展示字数，支持自定义格式化                                                   | `boolean \| { formatter: (info) => VNode \| string }`  | `false` |
| count      | 高级计数配置，支持自定义计数策略和格式，见下方说明                               | `CountConfig`                                          | -       |
| classNames | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `{ textarea?: string; count?: string }`                | -       |
| styles     | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `{ textarea?: CSSProperties; count?: CSSProperties }`  | -       |

**CountConfig 类型：**

```typescript
interface CountConfig {
  // 是否显示计数
  show?: boolean | ((args: { value: string; count: number; maxLength?: number }) => VNode | string)
  // 最大值限制（超出时计数变红，不会截断输入）
  max?: number
  // 自定义计数策略（默认为字符数）
  strategy?: (text: string) => number
  // 自定义显示格式
  showFormatter?: (args: { value: string; count: number; maxLength?: number }) => VNode | string
}
```

**count 使用示例：**

```vue
<!-- 按字节数计数（中文算2字符） -->
<TextArea
  :count="{
    show: true,
    max: 20,
    strategy: (txt) => txt.split('').reduce((len, char) => len + (char.charCodeAt(0) > 255 ? 2 : 1), 0),
  }"
/>

<!-- 自定义显示格式 -->
<TextArea
  :count="{
    show: true,
    max: 100,
    showFormatter: ({ count, maxLength }) => `已输入 ${count}/${maxLength} 字`,
  }"
/>
```

### InputSearch Props

继承 Input 所有属性，额外支持：

| 参数        | 说明                           | 类型                | 默认值  |
| ----------- | ------------------------------ | ------------------- | ------- |
| enterButton | 是否有确认按钮，可设为按钮文字 | `boolean \| string` | `false` |
| loading     | 搜索 loading                   | `boolean`           | `false` |
| searchIcon  | 自定义搜索图标                 | `string \| VNode`   | -       |

### Input Events

| 事件名       | 说明                   | 回调参数                         |
| ------------ | ---------------------- | -------------------------------- |
| update:value | 输入框内容变化时的回调 | `(value: string) => void`        |
| change       | 输入框内容变化时的回调 | `(event: Event) => void`         |
| focus        | 获取焦点时的回调       | `(event: FocusEvent) => void`    |
| blur         | 失去焦点时的回调       | `(event: FocusEvent) => void`    |
| pressEnter   | 按下回车的回调         | `(event: KeyboardEvent) => void` |
| clear        | 点击清除按钮时的回调   | `() => void`                     |

### Input Methods

| 方法名 | 说明     | 参数                                                                                  |
| ------ | -------- | ------------------------------------------------------------------------------------- |
| focus  | 获取焦点 | `(options?: { preventScroll?: boolean; cursor?: 'start' \| 'end' \| 'all' }) => void` |
| blur   | 移除焦点 | `() => void`                                                                          |

### InputSearch Events

继承 Input 所有事件，额外支持：

| 事件名 | 说明                                         | 回调参数                                                                      |
| ------ | -------------------------------------------- | ----------------------------------------------------------------------------- |
| search | 点击搜索图标、清除图标，或按下回车键时的回调 | `(value: string, event: Event, info: { source: 'input' \| 'clear' }) => void` |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对输入框的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

**Input 类型**

```typescript
import type { CSSProperties } from 'vue'

interface InputClassNames {
  affixWrapper?: string // 带前后缀时的外层容器
  prefix?: string // 前缀容器
  suffix?: string // 后缀容器
  input?: string // 输入框元素本身
  count?: string // 字数统计容器
}

interface InputStyles {
  affixWrapper?: CSSProperties // 带前后缀时的外层容器
  prefix?: CSSProperties // 前缀容器
  suffix?: CSSProperties // 后缀容器
  input?: CSSProperties // 输入框元素本身
  count?: CSSProperties // 字数统计容器
}
```

**TextArea 类型**

```typescript
interface TextAreaClassNames {
  textarea?: string // 文本域元素本身
  count?: string // 字数统计容器
}

interface TextAreaStyles {
  textarea?: CSSProperties // 文本域元素
  count?: CSSProperties // 字数统计容器
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<InputSemantic />

### DOM 结构与 className 映射

**Input - 普通输入框（无前后缀）**

```html
<input class="hmfw-input" />
<!-- ↑ classNames.input / styles.input -->
```

**Input - 带前缀/后缀的输入框**

```html
<span class="hmfw-input-affix-wrapper">
  <!-- ↑ classNames.affixWrapper / styles.affixWrapper -->

  <span class="hmfw-input-prefix">
    <!-- ↑ classNames.prefix / styles.prefix -->
    <svg>搜索图标</svg>
  </span>

  <input class="hmfw-input" />
  <!-- ↑ classNames.input / styles.input -->

  <span class="hmfw-input-suffix">
    <!-- ↑ classNames.suffix / styles.suffix -->
    <svg>清除图标</svg>
  </span>
</span>
```

**Input - 带字数统计的输入框**

```html
<span class="hmfw-input-affix-wrapper">
  <input class="hmfw-input" />
  <span class="hmfw-input-show-count-suffix">
    <!-- ↑ classNames.count / styles.count -->
    10 / 100
  </span>
</span>
```

**TextArea - DOM 结构**

```html
<textarea class="hmfw-input hmfw-input-textarea">
  <!-- ↑ classNames.textarea / styles.textarea -->
</textarea>

<!-- 带字数统计时 -->
<div class="hmfw-input-textarea-show-count">
  <textarea class="hmfw-input hmfw-input-textarea"></textarea>
  <span class="hmfw-input-show-count-suffix">
    <!-- ↑ classNames.count / styles.count -->
    50 / 200
  </span>
</div>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Input
    v-model:value="value1"
    placeholder="搜索"
    :prefix="SearchOutlined"
    :class-names="{ affixWrapper: 'my-wrapper', prefix: 'my-prefix', suffix: 'my-suffix' }"
  />

  <!-- styles：内联样式，优先级高于 classNames -->
  <Input
    v-model:value="value2"
    :styles="{
      input: { background: 'linear-gradient(to right, #ffffff, #f5f5f5)', fontWeight: '500' },
    }"
  />

  <!-- 组合：classNames 与 styles 混用（TextArea） -->
  <TextArea
    v-model:value="textarea"
    :rows="4"
    show-count
    :class-names="{ textarea: 'my-textarea' }"
    :styles="{ count: { fontSize: '12px', color: '#8c8c8c' } }"
  />
</template>

<style scoped>
:deep(.my-prefix) {
  color: #1890ff;
  font-size: 16px;
}

:deep(.my-suffix) {
  color: #52c41a;
}

:deep(.my-wrapper) {
  border: 2px solid #722ed1;
  border-radius: 8px;
}

:deep(.my-textarea) {
  background: #f0f5ff;
  font-family: 'Courier New', monospace;
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-input`）合并，不会互相覆盖

## 设计 Token

Input 组件使用以下设计 Token，可通过 CSS 变量覆盖实现主题定制。

| Token 名称                           | 说明           | 默认值             |
| ------------------------------------ | -------------- | ------------------ |
| `--hmfw-color-text`                  | 主文本色       | `rgba(0,0,0,0.88)` |
| `--hmfw-color-text-secondary`        | 次要文本色     | `rgba(0,0,0,0.65)` |
| `--hmfw-color-text-placeholder`      | 占位符文本色   | `rgba(0,0,0,0.25)` |
| `--hmfw-color-text-disabled`         | 禁用文本色     | `rgba(0,0,0,0.25)` |
| `--hmfw-color-primary`               | 主题色         | `#1677ff`          |
| `--hmfw-color-error`                 | 错误状态色     | `#ff4d4f`          |
| `--hmfw-color-warning`               | 警告状态色     | `#faad14`          |
| `--hmfw-color-border`                | 边框色         | `#d9d9d9`          |
| `--hmfw-color-bg-container-disabled` | 禁用容器背景色 | `rgba(0,0,0,0.04)` |
| `--hmfw-font-size-base`              | 基础字号       | `14px`             |
| `--hmfw-border-radius`               | 基础圆角       | `6px`              |
| `--hmfw-border-radius-sm`            | 小号圆角       | `4px`              |
| `--hmfw-border-radius-lg`            | 大号圆角       | `8px`              |
