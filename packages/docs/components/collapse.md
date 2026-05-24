# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁
- 手风琴是一种特殊的折叠面板，只允许单个内容区域展开

## 代码演示

### 基本用法

可以同时展开多个面板。

```vue
<template>
  <Collapse v-model:active-key="activeKey">
    <CollapsePanel key="1" header="面板标题 1">
      <p>面板内容 1</p>
    </CollapsePanel>
    <CollapsePanel key="2" header="面板标题 2">
      <p>面板内容 2</p>
    </CollapsePanel>
    <CollapsePanel key="3" header="面板标题 3">
      <p>面板内容 3</p>
    </CollapsePanel>
  </Collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, CollapsePanel } from 'ant-design-hmfw'

const activeKey = ref(['1'])
</script>
```

### 手风琴模式

手风琴模式，每次只能展开一个面板。

```vue
<template>
  <Collapse v-model:active-key="activeKey" accordion>
    <CollapsePanel key="1" header="面板标题 1">
      <p>面板内容 1</p>
    </CollapsePanel>
    <CollapsePanel key="2" header="面板标题 2">
      <p>面板内容 2</p>
    </CollapsePanel>
    <CollapsePanel key="3" header="面板标题 3">
      <p>面板内容 3</p>
    </CollapsePanel>
  </Collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, CollapsePanel } from 'ant-design-hmfw'

const activeKey = ref(['1'])
</script>
```

### 无边框

无边框风格。

```vue
<template>
  <Collapse v-model:active-key="activeKey" :bordered="false">
    <CollapsePanel key="1" header="面板标题 1">
      <p>面板内容 1</p>
    </CollapsePanel>
    <CollapsePanel key="2" header="面板标题 2">
      <p>面板内容 2</p>
    </CollapsePanel>
  </Collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, CollapsePanel } from 'ant-design-hmfw'

const activeKey = ref(['1'])
</script>
```

## API

### Collapse Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey (v-model) | 当前激活 tab 面板的 key | `string[] \| string` | - |
| defaultActiveKey | 初始化选中面板的 key | `string[] \| string` | - |
| accordion | 手风琴模式 | `boolean` | `false` |
| bordered | 带边框风格的折叠面板 | `boolean` | `true` |
| ghost | 使折叠面板透明且无边框 | `boolean` | `false` |
| size | 设置折叠面板大小 | `'default' \| 'small' \| 'large'` | `'default'` |
| expandIconPosition | 设置图标位置 | `'start' \| 'end'` | `'start'` |

### Collapse Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:activeKey | 切换面板的回调 | `(key: string \| string[]) => void` |

### CollapsePanel Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 对应 activeKey | `string` | - |
| header | 面板头内容 | `string \| slot` | - |
| disabled | 禁用后的面板展开与否将无法通过用户交互改变 | `boolean` | `false` |
| showArrow | 是否展示箭头 | `boolean` | `true` |
| extra | 自定义渲染每个面板右上角的内容 | `string \| slot` | - |
