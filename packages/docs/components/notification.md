# Notification 通知提醒框

全局展示通知提醒信息。

## 何时使用

- 在系统四个角显示通知提醒信息
- 系统主动推送的消息，内容较为复杂时使用

## 代码演示

<script setup>
import NotificationBasic from '../demos/notification/NotificationBasic.vue'
import NotificationBasicSource from '../demos/notification/NotificationBasic.vue?raw'
import NotificationPlacement from '../demos/notification/NotificationPlacement.vue'
import NotificationPlacementSource from '../demos/notification/NotificationPlacement.vue?raw'
</script>

### 基础用法

最简单的用法，4.5 秒后自动关闭。

<DemoBlock title="基础用法" :source="NotificationBasicSource">
  <NotificationBasic />
</DemoBlock>

### 四个位置

通知从屏幕四个角弹出。

<DemoBlock title="四个位置" :source="NotificationPlacementSource">
  <NotificationPlacement />
</DemoBlock>

## API

### notification 方法

| 方法 | 说明 |
| --- | --- |
| notification.success | 成功通知 |
| notification.error | 错误通知 |
| notification.warning | 警告通知 |
| notification.info | 普通通知 |

### 配置参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 通知提醒标题 | `string` | - |
| description | 通知提醒内容 | `string` | - |
| duration | 默认 4.5 秒后自动关闭，设置为 null 则不自动关闭 | `number \| null` | `4.5` |
| placement | 弹出位置 | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'topRight'` |
| onClose | 当通知关闭时触发 | `() => void` | - |
| key | 当前通知唯一标志 | `string` | - |
