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

### 填充样式

通过 `variant="filled"` 使用更强的背景填充。

<DemoBlock title="填充样式" :source="AlertVariantSource">
  <AlertVariant />
</DemoBlock>

### 顶部公告

通过 `banner` 用作顶部公告，默认显示图标且类型为 warning。

<DemoBlock title="顶部公告" :source="AlertBannerSource">
  <AlertBanner />
</DemoBlock>

## API

### Alert Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 指定警告提示的样式 | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'`（banner 模式为 `'warning'`） |
| variant | 样式变体 | `'outlined' \| 'filled'` | `'outlined'` |
| title | 警告提示内容 | `string` | - |
| message | `title` 的别名（已废弃，请使用 `title`） | `string` | - |
| description | 警告提示的辅助性文字介绍 | `string` | - |
| showIcon | 是否显示辅助图标（banner 模式默认 `true`） | `boolean` | `false` |
| icon | 自定义图标（`showIcon` 为 `true` 时有效） | `VNode \| slot` | - |
| closable | 是否显示关闭按钮，可传对象自定义图标与无障碍标签 | `boolean \| { closeIcon?, 'aria-label'? }` | `false` |
| closeIcon | 自定义关闭按钮图标 | `VNode \| slot` | - |
| closeText | 自定义关闭按钮文字（已废弃，请使用 `closeIcon`） | `string` | - |
| action | 自定义操作项 | `VNode \| slot` | - |
| role | 根节点 `role` 属性 | `string` | `'alert'` |
| banner | 是否用作顶部公告 | `boolean` | `false` |

### Alert Slots

| 名称 | 说明 |
| --- | --- |
| title / message | 标题内容 |
| description | 辅助性文字介绍 |
| icon | 自定义图标 |
| closeIcon | 自定义关闭按钮 |
| action | 自定义操作项 |

### Alert Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时触发的回调函数 | `(e: MouseEvent) => void` |
| afterClose | 关闭动画结束后触发的回调函数 | `() => void` |
