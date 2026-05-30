# Switch 开关

开关选择器。


## 何时使用

- 需要表示开关状态/两种状态之间的切换时。
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="SwitchBasicSource">
  <SwitchBasic />
</DemoBlock>

### 文字和图标

带有文字和图标的开关。

<DemoBlock title="文字和图标" :source="SwitchLabelSource">
  <SwitchLabel />
</DemoBlock>

### 加载中

标识开关操作仍在执行中。

<DemoBlock title="加载中" :source="SwitchLoadingSource">
  <SwitchLoading />
</DemoBlock>

### 不同尺寸

`size="small"` 表示小号开关。

<DemoBlock title="不同尺寸" :source="SwitchSizeSource">
  <SwitchSize />
</DemoBlock>

## API

### Switch Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked(v-model) | 指定当前是否选中 | `boolean` | `false` |
| defaultChecked | 初始是否选中 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 加载中的开关 | `boolean` | `false` |
| size | 开关大小 | `'default' \| 'small'` | `'default'` |
| checkedChildren | 选中时的内容 | `string \| VNode` | - |
| unCheckedChildren | 非选中时的内容 | `string \| VNode` | - |
| autoFocus | 组件自动获取焦点 | `boolean` | `false` |
| id | 组件的 id | `string` | - |
| title | 组件的 title 属性 | `string` | - |
| tabIndex | 组件的 tab index | `number` | - |

### Switch Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:checked | 变化时回调函数 | `(checked: boolean) => void` |
| change | 变化时回调函数 | `(checked: boolean, event: MouseEvent) => void` |
| click | 点击时回调函数 | `(checked: boolean, event: MouseEvent) => void` |
| focus | 获取焦点时的回调 | `(event: FocusEvent) => void` |
| blur | 失去焦点时的回调 | `(event: FocusEvent) => void` |

### Switch Slots

| 插槽名 | 说明 |
|--------|------|
| checkedChildren | 选中时的内容 |
| unCheckedChildren | 非选中时的内容 |
