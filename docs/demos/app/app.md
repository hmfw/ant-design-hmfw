# App 全局化配置

应用级别的全局上下文，提供 `useApp()` 组合式 API，使子组件可以通过 hooks 调用 `message`、`notification`、`modal`，而无需手动挂载实例。

## 何时使用

- 需要在组件内部通过 `useApp()` 调用 `message.success()`、`notification.info()`、`modal.confirm()` 等命令式 API 时
- 替代直接导入全局静态方法，使调用与当前 ConfigProvider 的主题/国际化配置保持一致

## 代码演示

### 基础用法

在应用根部包裹 `<App>`，子组件内通过 `useApp()` 获取 `message`、`notification`、`modal` 实例。

<DemoBlock title="基础用法" :source="AppBasicSource">
  <AppBasic />
</DemoBlock>

## API

### App Props

| 参数 | 说明                           | 类型 | 默认值 |
| ---- | ------------------------------ | ---- | ------ |
| —    | 无额外 props，仅作为上下文容器 | —    | —      |

### useApp()

在 `<App>` 的子组件内调用，返回 `AppConfig` 对象。

```ts
import { useApp } from 'ant-design-hmfw'

const { message, notification, modal } = useApp()
```

| 属性         | 说明             | 类型                                         |
| ------------ | ---------------- | -------------------------------------------- |
| message      | 全局提示实例     | 同 `message` API                             |
| notification | 通知提醒实例     | 同 `notification` API                        |
| modal        | 对话框命令式方法 | `{ confirm, info, success, warning, error }` |

### modal 方法

| 方法                   | 说明       |
| ---------------------- | ---------- |
| `modal.confirm(props)` | 确认对话框 |
| `modal.info(props)`    | 信息对话框 |
| `modal.success(props)` | 成功对话框 |
| `modal.warning(props)` | 警告对话框 |
| `modal.error(props)`   | 错误对话框 |

props 与 `Modal` 组件的 props 一致，参见 [Modal API](/components/modal)。

---

App 是单元素透传组件，渲染为 Fragment（插槽内容 + 内部 Modal），可直接使用原生 class 和 style attribute 进行样式定制。

## 设计 Token

App 组件本身无视觉样式，其功能依赖 Modal、Message、Notification 各自的样式系统。如需定制这些子组件的样式，请参考：

- [Modal 设计 Token](/components/modal#设计-token)
- [Message 设计 Token](/components/message#设计-token)
- [Notification 设计 Token](/components/notification#设计-token)
