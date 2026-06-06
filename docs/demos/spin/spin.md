# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

- 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑

## 代码演示


### 基础用法

一个简单的 loading 状态。

<DemoBlock title="基础用法" :source="SpinBasicSource">
  <SpinBasic />
</DemoBlock>

### 各种大小

小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

<DemoBlock title="各种大小" :source="SpinSizeSource">
  <SpinSize />
</DemoBlock>

### 嵌套内容

可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。

<DemoBlock title="嵌套内容" :source="SpinNestedSource">
  <SpinNested />
</DemoBlock>

### 延迟加载

延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。

<DemoBlock title="延迟加载" :source="SpinDelaySource">
  <SpinDelay />
</DemoBlock>

### 进度

通过 `percent` 展示环形进度指示器。传入 `number` 为受控进度，传入 `'auto'` 时在 `spinning` 期间自动模拟递增。

<DemoBlock title="进度" :source="SpinPercentSource">
  <SpinPercent />
</DemoBlock>

## API

### Spin Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spinning | 是否为加载中状态 | `boolean` | `true` |
| size | 组件大小 | `'small' \| 'default' \| 'large'` | `'default'` |
| tip | 当作为包裹元素时，可以自定义描述文案 | `string` | - |
| delay | 延迟显示加载效果的时间（防止闪烁），单位：毫秒 | `number` | - |
| percent | 进度百分比；为 `'auto'` 时在 `spinning` 期间自动模拟递增 | `number \| 'auto'` | - |

### Spin Slots

| 名称 | 说明 |
| --- | --- |
| default | 被遮罩的内容 |
| indicator | 加载指示符（自定义指示器时，插槽参数含 `percent`） |
