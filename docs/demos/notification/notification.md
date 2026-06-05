# Notification 通知提醒框

全局展示通知提醒信息。

## 何时使用

- 在系统四个角显示通知提醒信息
- 系统主动推送的消息，内容较为复杂时使用
- 较为复杂的通知内容

## 代码演示

### 基础用法

最简单的用法，4.5 秒后自动关闭。通知提醒框左侧有图标，`message` 作为通知提醒标题，`description` 作为通知提醒内容。

<DemoBlock title="基础用法" :source="NotificationBasicSource">
  <NotificationBasic />
</DemoBlock>

### 自动关闭的延时

自定义通知框自动关闭的延时，默认 `4.5s`，取消自动关闭只要将该值设为 `0` 即可。

<DemoBlock title="自动关闭的延时" :source="NotificationDurationSource">
  <NotificationDuration />
</DemoBlock>

### 位置

通知从右上角、右下角、左下角、左上角、顶部居中、底部居中弹出。

<DemoBlock title="位置" :source="NotificationPlacementSource">
  <NotificationPlacement />
</DemoBlock>

### 更新消息内容和全局配置

可以通过唯一的 `key` 来更新内容。也可以通过 `notification.config()` 设置全局配置。

<DemoBlock title="更新消息内容" :source="NotificationConfigSource">
  <NotificationConfig />
</DemoBlock>

## API

组件提供了一些静态方法，使用方式和参数如下：

### 静态方法

- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.open(config)`
- `notification.destroy(key?)`
- `notification.config(options)`

### config 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 通知提醒标题，必选 | `string \| number \| VNode \| () => VNode` | - |
| description | 通知提醒内容，可选 | `string \| number \| VNode \| () => VNode` | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | `number` | `4.5` |
| placement | 弹出位置 | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'top' \| 'bottom'` | `'topRight'` |
| key | 当前通知唯一标志，相同 key 会更新已有通知 | `string` | - |
| icon | 自定义图标 | `VNode \| () => VNode` | - |
| closeIcon | 自定义关闭图标 | `VNode \| () => VNode` | `<CloseOutlined />` |
| btn | 自定义按钮 | `VNode \| () => VNode` | - |
| onClick | 点击通知时触发的回调函数 | `() => void` | - |
| onClose | 关闭时触发的回调函数 | `() => void` | - |
| style | 自定义内联样式 | `CSSProperties` | - |
| className | 自定义 CSS class | `string` | - |
| pauseOnHover | 鼠标悬停时暂停自动关闭 | `boolean` | `true` |
| role | 可访问性角色属性 | `'alert' \| 'status'` | `'alert'` |

### 全局配置方法

`notification.config(options)`

当你使用 `notification.config()` 时，可以对所有弹出的通知进行全局配置。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | `number` | `24` |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | `number` | `24` |
| duration | 默认自动关闭延时，单位秒 | `number` | `4.5` |
| placement | 弹出位置 | `NotificationPlacement` | `'topRight'` |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | `number` | - |
| getContainer | 配置渲染节点的输出位置 | `() => HTMLElement` | `() => document.body` |
| pauseOnHover | 鼠标悬停时暂停自动关闭 | `boolean` | `true` |
| closeIcon | 自定义关闭图标 | `VNode \| () => VNode` | - |
| rtl | 是否开启 RTL 模式 | `boolean` | `false` |

### destroy 方法

`notification.destroy(key?)` - 关闭通知

- 当传入 `key` 时，关闭对应 key 的通知
- 不传参数时，关闭所有通知

## 设计 Token

| Token 名称 | 说明 | 默认值 |
| --- | --- | --- |
| `--hmfw-z-index-popup` | 通知层级 | `1010` |
| `--hmfw-color-bg-elevated` | 通知背景色 | `#fff` |
| `--hmfw-box-shadow-secondary` | 通知阴影 | `0 6px 16px 0 rgba(0, 0, 0, 0.08), ...` |
| `--hmfw-color-success` | 成功状态颜色 | `#52c41a` |
| `--hmfw-color-info` | 信息状态颜色 | `#1677ff` |
| `--hmfw-color-warning` | 警告状态颜色 | `#faad14` |
| `--hmfw-color-error` | 错误状态颜色 | `#ff4d4f` |
| `--hmfw-color-text` | 标题文字颜色 | `rgba(0, 0, 0, 0.88)` |
| `--hmfw-color-text-secondary` | 描述文字颜色 | `rgba(0, 0, 0, 0.65)` |
| `--hmfw-color-text-tertiary` | 关闭图标颜色 | `rgba(0, 0, 0, 0.45)` |
