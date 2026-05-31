# Message 全局提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式

## 代码演示

### 基础用法

信息提醒反馈。

<DemoBlock title="基础用法" :source="MessageBasicSource">
  <MessageBasic />
</DemoBlock>

### 自定义时长

自定义消息显示时长，默认 3 秒。`duration` 设为 `0` 时不自动关闭，方法返回值可作为函数调用以手动关闭。

<DemoBlock title="自定义时长" :source="MessageDurationSource">
  <MessageDuration />
</DemoBlock>

### 更新消息内容

通过相同的 `key` 更新已有消息内容，常用于异步加载场景，避免堆叠多条提示。

<DemoBlock title="更新消息内容" :source="MessageUpdateSource">
  <MessageUpdate />
</DemoBlock>

### 全局配置

通过 `message.config` 配置最大显示数量、距顶部距离等全局参数。

<DemoBlock title="全局配置" :source="MessageConfigSource">
  <MessageConfig />
</DemoBlock>

## API

组件提供以下静态方法，参数如下：

- `message.success(content, [duration], onClose)`
- `message.error(content, [duration], onClose)`
- `message.info(content, [duration], onClose)`
- `message.warning(content, [duration], onClose)`
- `message.loading(content, [duration], onClose)`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | `string \| number \| VNode \| () => VNodeChild \| config` | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。也可直接传入 `onClose` 回调 | `number \| () => void` | `3` |
| onClose | 关闭时触发的回调函数 | `() => void` | - |

所有方法均返回 `MessageType`：它既是一个可调用的函数（调用即手动关闭），又是 thenable，可通过 `.then()` 在关闭后执行回调。

```ts
const close = message.loading('加载中...', 0)
// 之后手动关闭
close()

message.success('成功', 1).then(() => {
  // 消息关闭后执行
})
```

### 以配置对象调用

支持将参数包裹在对象中传入：

- `message.open(config)`
- `message.success(config)` / `error` / `info` / `warning` / `loading`

config 对象属性如下：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | `string \| number \| VNode \| () => VNodeChild` | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | `number` | `3` |
| type | 提示类型 | `'info' \| 'success' \| 'error' \| 'warning' \| 'loading'` | - |
| icon | 自定义图标 | `VNode \| () => VNodeChild` | - |
| key | 当前提示的唯一标识，相同 key 会更新已有提示 | `string \| number` | - |
| style | 自定义内联样式 | `CSSProperties` | - |
| className | 自定义 CSS class | `string` | - |
| pauseOnHover | 悬停时是否暂停计时器 | `boolean` | `true` |
| onClick | 点击时触发的回调函数 | `(e: MouseEvent) => void` | - |
| onClose | 关闭时触发的回调函数 | `() => void` | - |

### 全局方法

还提供全局配置与销毁方法：

- `message.config(options)`
- `message.destroy()`：移除所有提示
- `message.destroy(key)`：移除指定 key 的提示

#### message.config

```js
message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
})
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| top | 消息距离顶部的位置 | `string \| number` | `8` |
| duration | 默认自动关闭延时，单位秒 | `number` | `3` |
| maxCount | 最大显示数，超过限制时关闭最早的提示 | `number` | - |
| getContainer | 配置渲染节点的输出位置 | `() => HTMLElement` | `() => document.body` |
| pauseOnHover | 悬停时是否暂停计时器 | `boolean` | `true` |

> 当前实现未支持 RTL（`rtl`）与 stack 折叠（`stack`），后续统一补充。
