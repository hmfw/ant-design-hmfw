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

### 高级功能

展示细粒度样式控制（classNames / styles）和 TextArea 的 pressEnter 事件。

<DemoBlock title="高级功能" :source="InputAdvancedSource">
  <InputAdvanced />
</DemoBlock>

## API

### Input Props

| 参数           | 说明                                         | 类型                                                                                                                             | 默认值     |
| -------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| value(v-model) | 输入框内容                                   | `string`                                                                                                                         | -          |
| defaultValue   | 输入框默认内容                               | `string`                                                                                                                         | -          |
| placeholder    | 输入框占位文本                               | `string`                                                                                                                         | -          |
| disabled       | 是否禁用状态                                 | `boolean`                                                                                                                        | `false`    |
| size           | 控件大小                                     | `'small' \| 'middle' \| 'large'`                                                                                                 | `'middle'` |
| maxlength      | 最大长度                                     | `number`                                                                                                                         | -          |
| showCount      | 是否展示字数，支持自定义格式化               | `boolean \| { formatter: (info) => VNode \| string }`                                                                            | `false`    |
| allowClear     | 可以点击清除图标删除内容，支持自定义清除图标 | `boolean \| { clearIcon?: VNode; disabled?: boolean }`                                                                           | `false`    |
| prefix         | 带有前缀图标的 input                         | `string \| VNode`                                                                                                                | -          |
| suffix         | 带有后缀图标的 input                         | `string \| VNode`                                                                                                                | -          |
| status         | 设置校验状态                                 | `'error' \| 'warning'`                                                                                                           | -          |
| readonly       | 是否只读                                     | `boolean`                                                                                                                        | `false`    |
| id             | 输入框的 id                                  | `string`                                                                                                                         | -          |
| rootClassName  | 根节点的 className                           | `string`                                                                                                                         | -          |
| classNames     | 细粒度样式类名                               | `{ affixWrapper?: string; prefix?: string; suffix?: string; input?: string; count?: string }`                                    | -          |
| styles         | 细粒度样式对象                               | `{ affixWrapper?: CSSProperties; prefix?: CSSProperties; suffix?: CSSProperties; input?: CSSProperties; count?: CSSProperties }` | -          |

### InputPassword Props

继承 Input 所有属性，额外支持：

| 参数             | 说明                             | 类型                                                                             | 默认值    |
| ---------------- | -------------------------------- | -------------------------------------------------------------------------------- | --------- |
| visibilityToggle | 是否显示切换按钮或者控制密码显隐 | `boolean \| { visible?: boolean; onVisibleChange?: (visible: boolean) => void }` | `true`    |
| iconRender       | 自定义切换按钮                   | `(visible: boolean) => VNode \| string`                                          | -         |
| action           | 切换按钮的触发方式               | `'click' \| 'hover'`                                                             | `'click'` |

### TextArea Props

继承 Input 所有属性，额外支持：

| 参数       | 说明                                          | 类型                                                   | 默认值  |
| ---------- | --------------------------------------------- | ------------------------------------------------------ | ------- |
| rows       | 输入框行数                                    | `number`                                               | `4`     |
| autoSize   | 自适应内容高度，可设置为 true \| false 或对象 | `boolean \| { minRows?: number; maxRows?: number }`    | `false` |
| allowClear | 可以点击清除图标删除内容                      | `boolean \| { clearIcon?: VNode; disabled?: boolean }` | `false` |
| showCount  | 是否展示字数，支持自定义格式化                | `boolean \| { formatter: (info) => VNode \| string }`  | `false` |
| classNames | 细粒度样式类名                                | `{ textarea?: string; count?: string }`                | -       |
| styles     | 细粒度样式对象                                | `{ textarea?: CSSProperties; count?: CSSProperties }`  | -       |

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
