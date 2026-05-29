# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭

## 代码演示


### 四种类型

共有四种样式 success、info、warning、error。

<DemoBlock title="四种类型" :source="AlertTypesSource">
  <AlertTypes />
</DemoBlock>

### 带描述

含有辅助性文字介绍的警告提示。

<DemoBlock title="带描述" :source="AlertDescriptionSource">
  <AlertDescription />
</DemoBlock>

### 可关闭

显示关闭按钮，点击可关闭警告提示。

<DemoBlock title="可关闭" :source="AlertClosableSource">
  <AlertClosable />
</DemoBlock>

## API

### Alert Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 指定警告提示的样式 | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` |
| message | 警告提示内容 | `string` | - |
| description | 警告提示的辅助性文字介绍 | `string` | - |
| showIcon | 是否显示辅助图标 | `boolean` | `false` |
| closable | 默认不显示关闭按钮 | `boolean` | `false` |
| banner | 是否用作顶部公告 | `boolean` | `false` |
| action | 自定义操作项 | `slot` | - |

### Alert Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时触发的回调函数 | `(e: MouseEvent) => void` |
| afterClose | 关闭动画结束后触发的回调函数 | `() => void` |
