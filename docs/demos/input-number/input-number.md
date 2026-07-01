# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

## 代码演示

### 基础用法

数字输入框。

<DemoBlock title="基础用法" :source="InputNumberBasicSource">
  <InputNumberBasic />
</DemoBlock>

### 最大最小值

通过 `min` 和 `max` 限制输入范围，通过 `step` 设置步长。

<DemoBlock title="最大最小值" :source="InputNumberMinMaxSource">
  <InputNumberMinMax />
</DemoBlock>

### 前缀和后缀

使用 `prefix` 和 `suffix` 添加前缀和后缀。

<DemoBlock title="前缀和后缀" :source="InputNumberSuffixSource">
  <InputNumberSuffix />
</DemoBlock>

### 显示模式

支持 `input` 和 `spinner` 两种模式。

<DemoBlock title="显示模式" :source="InputNumberModeSource">
  <InputNumberMode />
</DemoBlock>

### 格式化展示

通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。

<DemoBlock title="格式化展示" :source="InputNumberFormatterSource">
  <InputNumberFormatter />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="InputNumberClassNamesSource">
  <InputNumberClassNames />
</DemoBlock>

## API

### InputNumber Props

| 参数             | 说明                                                                             | 类型                                                                      | 默认值      |
| ---------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------- |
| value(v-model)   | 当前值                                                                           | `number \| null`                                                          | -           |
| defaultValue     | 初始值                                                                           | `number`                                                                  | -           |
| min              | 最小值                                                                           | `number`                                                                  | `-Infinity` |
| max              | 最大值                                                                           | `number`                                                                  | `Infinity`  |
| step             | 每次改变步数，可以为小数                                                         | `number`                                                                  | `1`         |
| precision        | 数值精度                                                                         | `number`                                                                  | -           |
| disabled         | 禁用                                                                             | `boolean`                                                                 | `false`     |
| readOnly         | 只读                                                                             | `boolean`                                                                 | `false`     |
| size             | 输入框大小                                                                       | `'small' \| 'middle' \| 'large'`                                          | `'middle'`  |
| status           | 设置校验状态                                                                     | `'error' \| 'warning'`                                                    | -           |
| mode             | 显示模式                                                                         | `'input' \| 'spinner'`                                                    | `'input'`   |
| prefix           | 前缀图标或文本                                                                   | `string \| VNode`                                                         | -           |
| suffix           | 后缀图标或文本                                                                   | `string \| VNode`                                                         | -           |
| controls         | 是否显示增减按钮，或自定义图标                                                   | `boolean \| { upIcon?: VNode \| string; downIcon?: VNode \| string }`     | `true`      |
| keyboard         | 是否启用键盘快捷行为                                                             | `boolean`                                                                 | `true`      |
| placeholder      | 占位符                                                                           | `string`                                                                  | -           |
| formatter        | 指定输入框展示值的格式                                                           | `(value: number, info: { userTyping: boolean; input: string }) => string` | -           |
| parser           | 指定从 formatter 里转换回数字的方式                                              | `(value: string) => number`                                               | -           |
| changeOnBlur     | 是否在失焦时触发 change                                                          | `boolean`                                                                 | `true`      |
| changeOnWheel    | 是否允许鼠标滚轮改变数值                                                         | `boolean`                                                                 | `false`     |
| decimalSeparator | 小数点                                                                           | `string`                                                                  | `'.'`       |
| stringMode       | 字符串模式，开启后支持高精度小数                                                 | `boolean`                                                                 | `false`     |
| classNames       | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `InputNumberClassNames`                                                   | -           |
| styles           | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `InputNumberStyles`                                                       | -           |

### InputNumber Events

| 事件名       | 说明               | 回调参数                                                                                                              |
| ------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| update:value | 变化回调           | `(value: number \| null) => void`                                                                                     |
| change       | 变化回调           | `(value: number \| null) => void`                                                                                     |
| focus        | 获取焦点时的回调   | `(event: FocusEvent) => void`                                                                                         |
| blur         | 失去焦点时的回调   | `(event: FocusEvent) => void`                                                                                         |
| pressEnter   | 按下回车的回调     | `(event: KeyboardEvent) => void`                                                                                      |
| step         | 点击上下箭头的回调 | `(value: number, info: { offset: number; type: 'up' \| 'down'; emitter: 'handler' \| 'keydown' \| 'wheel' }) => void` |

### InputNumber Methods

| 方法名        | 说明              | 参数                                                                                  |
| ------------- | ----------------- | ------------------------------------------------------------------------------------- |
| focus         | 获取焦点          | `(options?: { cursor?: 'start' \| 'end' \| 'all'; preventScroll?: boolean }) => void` |
| blur          | 移除焦点          | `() => void`                                                                          |
| nativeElement | 获取原生 DOM 元素 | -                                                                                     |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对 InputNumber 的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface InputNumberClassNames {
  root?: string // 根节点 div.hmfw-input-number
  input?: string // 输入框 input.hmfw-input-number-input
  prefix?: string // 前缀 span.hmfw-input-number-prefix
  suffix?: string // 后缀 span.hmfw-input-number-suffix
  handlerWrap?: string // 操作按钮容器 div.hmfw-input-number-handler-wrap
  handlerUp?: string // 增加按钮 span.hmfw-input-number-handler-up
  handlerDown?: string // 减少按钮 span.hmfw-input-number-handler-down
}

interface InputNumberStyles {
  root?: CSSProperties
  input?: CSSProperties
  prefix?: CSSProperties
  suffix?: CSSProperties
  handlerWrap?: CSSProperties
  handlerUp?: CSSProperties
  handlerDown?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<!-- 基础结构 -->
<div class="hmfw-input-number">
  <!-- ↑ classNames.root / styles.root 应用于此 -->
  <span class="hmfw-input-number-prefix">
    <!-- ↑ classNames.prefix / styles.prefix 应用于此 -->
    ¥
  </span>
  <input class="hmfw-input-number-input" />
  <!-- ↑ classNames.input / styles.input 应用于此 -->
  <span class="hmfw-input-number-suffix">
    <!-- ↑ classNames.suffix / styles.suffix 应用于此 -->
    元
  </span>
  <div class="hmfw-input-number-handler-wrap">
    <!-- ↑ classNames.handlerWrap / styles.handlerWrap 应用于此 -->
    <span class="hmfw-input-number-handler-up">
      <!-- ↑ classNames.handlerUp / styles.handlerUp 应用于此 -->
      <span class="hmfw-icon">...</span>
    </span>
    <span class="hmfw-input-number-handler-down">
      <!-- ↑ classNames.handlerDown / styles.handlerDown 应用于此 -->
      <span class="hmfw-icon">...</span>
    </span>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义根容器 -->
  <InputNumber v-model:value="value" :class-names="{ root: 'custom-root' }" />

  <!-- 自定义输入框和操作按钮 -->
  <InputNumber
    v-model:value="value"
    :class-names="{
      input: 'custom-input',
      handlerUp: 'custom-handler-up',
      handlerDown: 'custom-handler-down',
    }"
  />

  <!-- 自定义前后缀 -->
  <InputNumber
    v-model:value="value"
    prefix="¥"
    suffix="元"
    :class-names="{
      prefix: 'custom-prefix',
      suffix: 'custom-suffix',
    }"
  />
</template>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
}

:deep(.custom-input) {
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: #1890ff;
}

:deep(.custom-handler-up) {
  color: #52c41a;
}

:deep(.custom-handler-down) {
  color: #ff4d4f;
}

:deep(.custom-prefix) {
  color: #52c41a;
  font-weight: bold;
  background: #f6ffed;
  padding: 0 8px;
  border-radius: 4px;
}

:deep(.custom-suffix) {
  color: #1890ff;
  background: #e6f7ff;
  padding: 0 8px;
  border-radius: 4px;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制 -->
  <InputNumber
    v-model:value="value"
    :styles="{
      root: { borderColor: '#722ed1', borderWidth: '2px' },
      input: { color: '#722ed1', fontWeight: 'bold' },
    }"
  />

  <!-- 自定义操作按钮容器 -->
  <InputNumber
    v-model:value="value"
    :styles="{
      handlerWrap: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      handlerUp: { color: '#52c41a' },
      handlerDown: { color: '#ff4d4f' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `classNames.root` 会与组件内置的状态类名（如 `.hmfw-input-number-disabled`、`.hmfw-input-number-focused`）合并
- `handlerUp` 和 `handlerDown` 分别对应增加和减少按钮，可单独定制样式
- `prefix` 和 `suffix` 仅在对应 props 有值时渲染

## 设计 Token

InputNumber 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称             | 说明   | 默认值    |
| ---------------------- | ------ | --------- |
| `--hmfw-color-primary` | 主题色 | `#1677ff` |
