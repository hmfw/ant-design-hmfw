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

### 显示进度条

通过 `showProgress` 属性，可以在通知底部显示倒计时进度条，让用户直观地看到通知将在何时自动关闭。

<DemoBlock title="显示进度条" :source="NotificationShowProgressSource">
  <NotificationShowProgress />
</DemoBlock>

### 自定义关闭图标

可以通过 `closeIcon` 属性自定义单个通知的关闭图标，也可以通过 `notification.config({ closeIcon })` 设置全局关闭图标。单个通知的 `closeIcon` 会覆盖全局配置。

<DemoBlock title="自定义关闭图标" :source="NotificationCloseIconSource">
  <NotificationCloseIcon />
</DemoBlock>

### RTL 模式

通过 `notification.config({ rtl: true })` 开启 RTL（从右到左）布局模式，适用于阿拉伯语、希伯来语等从右到左阅读的语言。RTL 模式会自动调整图标和关闭按钮的位置。

<DemoBlock title="RTL 模式" :source="NotificationRtlSource">
  <NotificationRtl />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 调用参数对 notice、icon、message、description、btn、close 等子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="NotificationClassNamesSource">
  <NotificationClassNames />
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

| 参数         | 说明                                                                             | 类型                                                                            | 默认值              |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------- |
| message      | 通知提醒标题，必选                                                               | `string \| number \| VNode \| () => VNode`                                      | -                   |
| description  | 通知提醒内容，可选                                                               | `string \| number \| VNode \| () => VNode`                                      | -                   |
| duration     | 自动关闭的延时，单位秒。设为 0 时不自动关闭                                      | `number`                                                                        | `4.5`               |
| placement    | 弹出位置                                                                         | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight' \| 'top' \| 'bottom'` | `'topRight'`        |
| key          | 当前通知唯一标志，相同 key 会更新已有通知                                        | `string`                                                                        | -                   |
| icon         | 自定义图标                                                                       | `VNode \| () => VNode`                                                          | -                   |
| closeIcon    | 自定义关闭图标                                                                   | `VNode \| () => VNode`                                                          | `<CloseOutlined />` |
| btn          | 自定义按钮                                                                       | `VNode \| () => VNode`                                                          | -                   |
| onClick      | 点击通知时触发的回调函数                                                         | `() => void`                                                                    | -                   |
| onClose      | 关闭时触发的回调函数                                                             | `() => void`                                                                    | -                   |
| style        | 自定义内联样式                                                                   | `CSSProperties`                                                                 | -                   |
| className    | 自定义 CSS class                                                                 | `string`                                                                        | -                   |
| pauseOnHover | 鼠标悬停时暂停自动关闭                                                           | `boolean`                                                                       | `true`              |
| showProgress | 显示倒计时进度条                                                                 | `boolean`                                                                       | `false`             |
| role         | 可访问性角色属性                                                                 | `'alert' \| 'status'`                                                           | `'alert'`           |
| classNames   | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `NotificationClassNames`                                                        | -                   |
| styles       | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `NotificationStyles`                                                            | -                   |

### 全局配置方法

`notification.config(options)`

当你使用 `notification.config()` 时，可以对所有弹出的通知进行全局配置。

| 参数         | 说明                                           | 类型                    | 默认值                |
| ------------ | ---------------------------------------------- | ----------------------- | --------------------- |
| top          | 消息从顶部弹出时，距离顶部的位置，单位像素     | `number`                | `24`                  |
| bottom       | 消息从底部弹出时，距离底部的位置，单位像素     | `number`                | `24`                  |
| duration     | 默认自动关闭延时，单位秒                       | `number`                | `4.5`                 |
| placement    | 弹出位置                                       | `NotificationPlacement` | `'topRight'`          |
| maxCount     | 最大显示数，超过限制时，最早的消息会被自动关闭 | `number`                | -                     |
| getContainer | 配置渲染节点的输出位置                         | `() => HTMLElement`     | `() => document.body` |
| pauseOnHover | 鼠标悬停时暂停自动关闭                         | `boolean`               | `true`                |
| showProgress | 全局显示倒计时进度条                           | `boolean`               | `false`               |
| closeIcon    | 自定义关闭图标                                 | `VNode \| () => VNode`  | -                     |
| rtl          | 是否开启 RTL 模式                              | `boolean`               | `false`               |

### destroy 方法

`notification.destroy(key?)` - 关闭通知

- 当传入 `key` 时，关闭对应 key 的通知
- 不传参数时，关闭所有通知

## 语义化 className 与 style

通过调用参数中的 `classNames` 和 `styles` 可以对通知的各个子节点应用自定义样式，支持细粒度控制。由于 Notification 是命令式 API，`classNames` / `styles` 通过 `notification.info(...)` 等方法的配置对象传入。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface NotificationClassNames {
  notice?: string // 单条通知根容器
  icon?: string // 左侧图标容器
  message?: string // 标题文本
  description?: string // 描述文本
  btn?: string // 自定义按钮容器
  close?: string // 关闭按钮
}

interface NotificationStyles {
  notice?: CSSProperties
  icon?: CSSProperties
  message?: CSSProperties
  description?: CSSProperties
  btn?: CSSProperties
  close?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-notification-notice">
  <!-- ↑ classNames.notice / styles.notice 应用于此 -->
  <div class="hmfw-notification-notice-content">
    <div class="hmfw-notification-notice-icon">
      <!-- ↑ classNames.icon / styles.icon 应用于此 -->
    </div>
    <div class="hmfw-notification-notice-message-wrapper">
      <div class="hmfw-notification-notice-message">
        <!-- ↑ classNames.message / styles.message 应用于此 -->
      </div>
      <div class="hmfw-notification-notice-description">
        <!-- ↑ classNames.description / styles.description 应用于此 -->
      </div>
      <div class="hmfw-notification-notice-btn">
        <!-- ↑ classNames.btn / styles.btn 应用于此 -->
      </div>
    </div>
  </div>
  <button class="hmfw-notification-notice-close">
    <!-- ↑ classNames.close / styles.close 应用于此 -->
  </button>
</div>
```

### 使用 classNames

通过配置对象的 `classNames` 字段应用自定义 CSS 类（类名需定义在全局或带 `:deep()` 的作用域样式中）：

```ts
notification.info({
  message: '系统更新',
  description: '新版本已发布，建议尽快升级。',
  classNames: {
    notice: 'my-notice',
    message: 'my-message',
    icon: 'my-icon',
    close: 'my-close',
  },
})
```

```css
/* 在全局样式或 :deep() 作用域中定义 */
.my-notice {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}

.my-message {
  color: #fff;
}

.my-icon {
  color: #fff;
}
```

### 使用 styles

通过配置对象的 `styles` 字段直接传入内联样式对象：

```ts
notification.error({
  message: '操作失败',
  description: '请求超时，请检查网络后重试。',
  styles: {
    notice: { borderRadius: '12px', borderLeft: '4px solid #ff4d4f' },
    message: { fontSize: '17px', color: '#cf1322' },
    description: { color: '#a8071a' },
  },
})
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- Notification 为命令式 API，`classNames` / `styles` 通过调用方法的配置对象传入，而非组件 props
- `classNames.notice` / `styles.notice` 会与组件内置的状态类名（如 `.hmfw-notification-notice-success`、`.hmfw-notification-notice-leaving`）及配置项 `className` / `style` 合并
- 通知渲染在 `document.body` 下，若使用 `<style scoped>` 定义类名，需配合 `:deep()` 选择器或改用全局样式

## 设计 Token

| Token 名称                     | 说明                       | 默认值                                                                                            |
| ------------------------------ | -------------------------- | ------------------------------------------------------------------------------------------------- |
| `--hmfw-color-bg-elevated`     | 通知背景色                 | `#ffffff`                                                                                         |
| `--hmfw-color-error`           | 错误状态图标颜色           | `#ff4d4f`                                                                                         |
| `--hmfw-color-fill-quaternary` | 关闭按钮 hover 背景色      | `rgba(0,0,0,0.02)`                                                                                |
| `--hmfw-color-info`            | 信息状态图标颜色           | `#1677ff`                                                                                         |
| `--hmfw-color-primary`         | 进度条颜色                 | `#1677ff`                                                                                         |
| `--hmfw-color-success`         | 成功状态图标颜色           | `#52c41a`                                                                                         |
| `--hmfw-color-text`            | 标题文字颜色               | `rgba(0,0,0,0.88)`                                                                                |
| `--hmfw-color-text-secondary`  | 描述文字 / 关闭 hover 颜色 | `rgba(0,0,0,0.65)`                                                                                |
| `--hmfw-color-text-tertiary`   | 关闭图标颜色               | `rgba(0,0,0,0.45)`                                                                                |
| `--hmfw-color-warning`         | 警告状态图标颜色           | `#faad14`                                                                                         |
| `--hmfw-border-radius`         | 通知圆角                   | `6px`                                                                                             |
| `--hmfw-border-radius-sm`      | 关闭按钮圆角               | `4px`                                                                                             |
| `--hmfw-box-shadow-secondary`  | 通知阴影                   | `0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)` |
| `--hmfw-z-index-popup`         | 通知层级                   | `1010`                                                                                            |
