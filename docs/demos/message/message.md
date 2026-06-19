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

### 位置配置

通过 `message.config` 的 `top` 参数配置消息距离顶部的距离。

<DemoBlock title="位置配置" :source="MessagePositionSource">
  <MessagePosition />
</DemoBlock>

### 悬停暂停

支持悬停时暂停计时器，移开后继续计时。可通过全局配置或单条消息配置控制。

<DemoBlock title="悬停暂停" :source="MessagePauseOnHoverSource">
  <MessagePauseOnHover />
</DemoBlock>

### 细粒度样式控制

通过调用 options 中的 `classNames` / `styles` 对 wrapper、notice、icon、title 等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="MessageClassNamesSource">
  <MessageClassNames />
</DemoBlock>

## API

组件提供以下静态方法，参数如下：

- `message.success(content, [duration], onClose)`
- `message.error(content, [duration], onClose)`
- `message.info(content, [duration], onClose)`
- `message.warning(content, [duration], onClose)`
- `message.loading(content, [duration], onClose)`

| 参数     | 说明                                                                     | 类型                                                      | 默认值 |
| -------- | ------------------------------------------------------------------------ | --------------------------------------------------------- | ------ |
| content  | 提示内容                                                                 | `string \| number \| VNode \| () => VNodeChild \| config` | -      |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭。也可直接传入 `onClose` 回调 | `number \| () => void`                                    | `3`    |
| onClose  | 关闭时触发的回调函数                                                     | `() => void`                                              | -      |

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

| 参数         | 说明                                                                             | 类型                                                       | 默认值 |
| ------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------ |
| content      | 提示内容                                                                         | `string \| number \| VNode \| () => VNodeChild`            | -      |
| duration     | 自动关闭的延时，单位秒。设为 0 时不自动关闭                                      | `number`                                                   | `3`    |
| type         | 提示类型                                                                         | `'info' \| 'success' \| 'error' \| 'warning' \| 'loading'` | -      |
| icon         | 自定义图标                                                                       | `VNode \| () => VNodeChild`                                | -      |
| key          | 当前提示的唯一标识，相同 key 会更新已有提示                                      | `string \| number`                                         | -      |
| style        | 自定义内联样式                                                                   | `CSSProperties`                                            | -      |
| className    | 自定义 CSS class                                                                 | `string`                                                   | -      |
| classNames   | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `MessageClassNames`                                        | -      |
| styles       | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `MessageStyles`                                            | -      |
| pauseOnHover | 悬停时是否暂停计时器，默认为全局配置的 `pauseOnHover`                            | `boolean`                                                  | `true` |
| onClick      | 点击时触发的回调函数                                                             | `(e: MouseEvent) => void`                                  | -      |
| onClose      | 关闭时触发的回调函数                                                             | `() => void`                                               | -      |

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

| 参数         | 说明                                             | 类型                | 默认值                |
| ------------ | ------------------------------------------------ | ------------------- | --------------------- |
| top          | 消息距离顶部的位置，单位 px                      | `string \| number`  | `8`                   |
| duration     | 默认自动关闭延时，单位秒                         | `number`            | `3`                   |
| maxCount     | 最大显示数，超过限制时关闭最早的提示             | `number`            | -                     |
| getContainer | 配置渲染节点的输出位置                           | `() => HTMLElement` | `() => document.body` |
| pauseOnHover | 悬停时是否暂停计时器（全局配置，单条消息可覆盖） | `boolean`           | `true`                |
| prefixCls    | 提示组件 class 前缀（预留，当前版本暂未实现）    | `string`            | `'hmfw-message'`      |

> **注意**：
>
> - 当设置 `top` 时，所有消息从顶部显示
> - `pauseOnHover` 可在全局配置，也可在单条消息中覆盖
> - 当前实现未支持 RTL（`rtl`）与 stack 折叠（`stack`）、`bottom` 定位，后续统一补充

## 语义化 className 与 style

Message 为命令式 API，没有模板标签，因此 `classNames` 和 `styles` 通过调用方法时的 **options 配置对象** 传入，对单条提示的各个子节点应用自定义样式，支持细粒度控制。

```ts
message.info({
  content: '消息',
  classNames: { notice: 'my-notice' },
  styles: { notice: { color: 'red' } },
})
```

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface MessageClassNames {
  wrapper?: string // 单条提示的最外层容器（控制进出场动画与定位）
  notice?: string // 提示卡片主体（背景、圆角、阴影、内边距）
  icon?: string // 状态图标容器
  title?: string // 提示文本内容容器
}

interface MessageStyles {
  wrapper?: CSSProperties
  notice?: CSSProperties
  icon?: CSSProperties
  title?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-message-notice-wrapper">
  <!-- ↑ classNames.wrapper / styles.wrapper 应用于此 -->
  <div class="hmfw-message-notice hmfw-message-notice-success">
    <!-- ↑ classNames.notice / styles.notice 应用于此 -->
    <div class="hmfw-message-notice-content">
      <span class="hmfw-message-notice-icon">
        <!-- ↑ classNames.icon / styles.icon 应用于此 -->
        <svg>...</svg>
      </span>
      <span class="hmfw-message-notice-title">
        <!-- ↑ classNames.title / styles.title 应用于此 -->
        提示内容
      </span>
    </div>
  </div>
</div>
```

### 使用 classNames

通过 options 的 `classNames` 字段为各子节点指定自定义 class：

```ts
message.success({
  content: '保存成功',
  classNames: {
    notice: 'my-notice',
    icon: 'my-icon',
    title: 'my-title',
  },
})
```

由于 Message 通过独立的 Vue 应用挂载在 `document.body` 上，位于业务组件的 DOM 树之外，在 SFC 中编写样式时需用 `:global()`（或非 scoped 样式）才能命中：

```vue
<style scoped>
:global(.my-notice) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

:global(.my-icon) {
  animation: pulse 1s ease-in-out infinite;
}

:global(.my-title) {
  font-weight: 700;
}
</style>
```

### 使用 styles

通过 options 的 `styles` 字段直接传入内联样式对象：

```ts
message.info({
  content: '内联样式控制的提示',
  styles: {
    notice: { borderRadius: '16px', background: '#f0f5ff' },
    title: { color: '#1677ff', fontWeight: 600 },
  },
})
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `classNames` / `styles` 通过 **调用 options** 传入，仅作用于当前这一条提示，不影响其他提示
- `styles.notice` 会与 options 的 `style`（及 `classNames.notice` 对应的 class）合并，`styles.notice` 优先级最高
- Message 挂载在 `document.body` 上，位于业务组件 DOM 树之外，scoped 样式的 `:deep()` 无法命中，请改用 `:global()` 或全局样式

## 设计 Token

Message 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                    | 说明         | 默认值                                                                                            |
| ----------------------------- | ------------ | ------------------------------------------------------------------------------------------------- |
| `--hmfw-color-bg-elevated`    | 浮层背景色   | `#ffffff`                                                                                         |
| `--hmfw-color-error`          | 错误状态色   | `#ff4d4f`                                                                                         |
| `--hmfw-color-primary`        | 主题色       | `#1677ff`                                                                                         |
| `--hmfw-color-success`        | 成功状态色   | `#52c41a`                                                                                         |
| `--hmfw-color-text`           | 主文本色     | `rgba(0,0,0,0.88)`                                                                                |
| `--hmfw-color-warning`        | 警告状态色   | `#faad14`                                                                                         |
| `--hmfw-font-size-base`       | 标准字号     | `14px`                                                                                            |
| `--hmfw-font-size-lg`         | 大号字号     | `16px`                                                                                            |
| `--hmfw-line-height`          | 标准行高     | `1.5714285714285714`                                                                              |
| `--hmfw-border-radius-lg`     | 大号圆角     | `8px`                                                                                             |
| `--hmfw-box-shadow-secondary` | 次级浮层阴影 | `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)` |
| `--hmfw-z-index-popup`        | 浮层层级     | `1010`                                                                                            |
