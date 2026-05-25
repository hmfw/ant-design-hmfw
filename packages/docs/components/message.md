# Message 全局提示

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式

## 代码演示

<script setup>
import MessageBasic from '../demos/message/MessageBasic.vue'
import MessageBasicSource from '../demos/message/MessageBasic.vue?raw'
import MessageDuration from '../demos/message/MessageDuration.vue'
import MessageDurationSource from '../demos/message/MessageDuration.vue?raw'
</script>

### 基础用法

信息提醒反馈。

<DemoBlock title="基础用法" :source="MessageBasicSource">
  <MessageBasic />
</DemoBlock>

### 自定义时长

自定义消息显示时长，默认 3 秒。

<DemoBlock title="自定义时长" :source="MessageDurationSource">
  <MessageDuration />
</DemoBlock>

## API

### message 方法

| 方法 | 说明 | 参数 |
| --- | --- | --- |
| message.success | 成功提示 | `(content: string, duration?: number, onClose?: () => void) => Promise` |
| message.error | 错误提示 | `(content: string, duration?: number, onClose?: () => void) => Promise` |
| message.warning | 警告提示 | `(content: string, duration?: number, onClose?: () => void) => Promise` |
| message.info | 普通提示 | `(content: string, duration?: number, onClose?: () => void) => Promise` |
| message.loading | 加载中提示 | `(content: string, duration?: number, onClose?: () => void) => Promise` |

### 参数说明

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | `string` | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | `number` | `3` |
| onClose | 关闭时触发的回调函数 | `() => void` | - |

所有方法均返回 `Promise`，可通过 `.then()` 在关闭后执行回调。
