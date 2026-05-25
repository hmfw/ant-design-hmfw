# BackTop 回到顶部

返回页面顶部的操作按钮。

## 何时使用

- 当页面内容区域比较长时
- 当用户需要频繁返回顶部查看相关内容时

## 代码演示

<script setup>
import BackTopBasic from '../demos/back-top/BackTopBasic.vue'
import BackTopBasicSource from '../demos/back-top/BackTopBasic.vue?raw'
import BackTopCustom from '../demos/back-top/BackTopCustom.vue'
import BackTopCustomSource from '../demos/back-top/BackTopCustom.vue?raw'
</script>

### 基础用法

滚动页面后，右下角会出现回到顶部按钮。

> 注意：需要滚动页面才能看到按钮出现。默认当页面滚动超过 400px 时显示。

<DemoBlock title="基础用法" :source="BackTopBasicSource">
  <BackTopBasic />
</DemoBlock>

### 自定义内容

可以自定义回到顶部按钮的样式。

<DemoBlock title="自定义内容" :source="BackTopCustomSource">
  <BackTopCustom />
</DemoBlock>

## API

### BackTop Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop | `number` | `400` |
| target | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | `() => HTMLElement` | `() => window` |
| duration | 回到顶部所需时间（ms） | `number` | `450` |

### BackTop Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮的回调函数 | `(e: MouseEvent) => void` |

### BackTop Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
