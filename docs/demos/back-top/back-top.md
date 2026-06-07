# BackTop 回到顶部

返回页面顶部的操作按钮。

> **已废弃**: 此组件已被 FloatButton.BackTop 替代，但仍保持兼容性支持。

## 何时使用

- 当页面内容区域比较长时
- 当用户需要频繁返回顶部查看相关内容时

## 代码演示

<script setup lang="ts">
import BackTopBasic from './BackTopBasic.vue'
import BackTopCustom from './BackTopCustom.vue'
import BackTopTarget from './BackTopTarget.vue'
import BackTopBasicSource from './BackTopBasic.vue?raw'
import BackTopCustomSource from './BackTopCustom.vue?raw'
import BackTopTargetSource from './BackTopTarget.vue?raw'
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

### 指定容器

在指定容器内滚动时显示回到顶部按钮。

<DemoBlock title="指定容器" :source="BackTopTargetSource">
  <BackTopTarget />
</DemoBlock>

## API

### BackTop Props

| 参数             | 说明                                                          | 类型                                      | 默认值         |
| ---------------- | ------------------------------------------------------------- | ----------------------------------------- | -------------- |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop                            | `number`                                  | `400`          |
| target           | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | `() => HTMLElement \| Window \| Document` | `() => window` |
| duration         | 回到顶部所需时间（ms）                                        | `number`                                  | `450`          |
| className        | 自定义类名                                                    | `string`                                  | -              |
| rootClassName    | 根节点类名                                                    | `string`                                  | -              |
| style            | 自定义样式                                                    | `CSSProperties`                           | -              |
| prefixCls        | 自定义前缀                                                    | `string`                                  | `'hmfw'`       |

### BackTop Events

| 事件名 | 说明               | 回调参数                  |
| ------ | ------------------ | ------------------------- |
| click  | 点击按钮的回调函数 | `(e: MouseEvent) => void` |

### BackTop Slots

| 名称    | 说明                           |
| ------- | ------------------------------ |
| default | 自定义内容，默认为向上箭头图标 |

## 设计 Token

| Token                | 说明         | 默认值                |
| -------------------- | ------------ | --------------------- |
| controlHeightLG      | 按钮尺寸     | `40px`                |
| colorTextDescription | 背景颜色     | `rgba(0, 0, 0, 0.45)` |
| colorText            | 悬停背景颜色 | `rgba(0, 0, 0, 0.85)` |
| colorTextLightSolid  | 图标颜色     | `#fff`                |
| fontSizeHeading3     | 图标字体大小 | `24px`                |
| motionDurationMid    | 动画时长     | `0.2s`                |
| zIndexBase           | 基础 z-index | `0`                   |
