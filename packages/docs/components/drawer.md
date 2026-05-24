# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 何时使用

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出
- 当需要在当前任务流中插入临时任务，创建或预览附加内容时

## 代码演示

### 基础用法

基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。

```vue
<template>
  <button @click="open = true">打开抽屉</button>
  <Drawer
    v-model:open="open"
    title="基础抽屉"
  >
    <p>抽屉内容</p>
    <p>抽屉内容</p>
    <p>抽屉内容</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer } from 'ant-design-hmfw'

const open = ref(false)
</script>
```

### 四个方向

抽屉可以从上、右、下、左四个方向滑出。

```vue
<template>
  <div style="display: flex; gap: 8px;">
    <button @click="show('top')">上</button>
    <button @click="show('right')">右</button>
    <button @click="show('bottom')">下</button>
    <button @click="show('left')">左</button>
  </div>
  <Drawer
    v-model:open="open"
    :placement="placement"
    :title="`从${placementText}滑出`"
  >
    <p>抽屉内容</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer } from 'ant-design-hmfw'

const open = ref(false)
const placement = ref<'top' | 'right' | 'bottom' | 'left'>('right')
const placementText = ref('右侧')

const textMap: Record<string, string> = {
  top: '顶部',
  right: '右侧',
  bottom: '底部',
  left: '左侧',
}

function show(dir: 'top' | 'right' | 'bottom' | 'left') {
  placement.value = dir
  placementText.value = textMap[dir]
  open.value = true
}
</script>
```

## API

### Drawer Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open (v-model) | 抽屉是否可见 | `boolean` | `false` |
| title | 标题 | `string \| slot` | - |
| placement | 抽屉的方向 | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` |
| width | 宽度 | `number \| string` | `378` |
| height | 高度，在 placement 为 top 或 bottom 时使用 | `number \| string` | `378` |
| closable | 是否显示左上角的关闭按钮 | `boolean` | `true` |
| mask | 是否展示遮罩 | `boolean` | `true` |
| maskClosable | 点击蒙层是否允许关闭 | `boolean` | `true` |
| footer | 抽屉的页脚 | `string \| slot` | - |
| extra | 抽屉右上角的操作区域 | `string \| slot` | - |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | `boolean` | `false` |

### Drawer Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:open | 可见状态变化时的回调 | `(open: boolean) => void` |
| close | 点击遮罩层或右上角叉或取消按钮的回调 | `(e: MouseEvent) => void` |
| afterOpenChange | 切换抽屉时动画结束后的回调 | `(open: boolean) => void` |
