# Anchor 锚点

用于跳转到页面指定位置。

## 何时使用

- 需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转时
- 需要固定在页面某个位置时

## 代码演示

### 基础用法（垂直）

最简单的用法，垂直方向展示锚点列表。

```vue
<template>
  <div style="display: flex; gap: 24px;">
    <div style="flex: 1;">
      <div id="part-1" style="height: 200px; background: #e6f4ff; padding: 16px; margin-bottom: 16px;">
        <h3>第一部分</h3>
        <p>这是第一部分的内容。</p>
      </div>
      <div id="part-2" style="height: 200px; background: #f6ffed; padding: 16px; margin-bottom: 16px;">
        <h3>第二部分</h3>
        <p>这是第二部分的内容。</p>
      </div>
      <div id="part-3" style="height: 200px; background: #fff7e6; padding: 16px; margin-bottom: 16px;">
        <h3>第三部分</h3>
        <p>这是第三部分的内容。</p>
      </div>
    </div>
    <Anchor
      :items="items"
      :offset-top="64"
      style="width: 160px;"
    />
  </div>
</template>

<script setup lang="ts">
import { Anchor } from 'ant-design-hmfw'

const items = [
  { href: '#part-1', title: '第一部分' },
  { href: '#part-2', title: '第二部分' },
  {
    href: '#part-3',
    title: '第三部分',
    children: [
      { href: '#part-3-1', title: '第三部分-1' },
      { href: '#part-3-2', title: '第三部分-2' },
    ],
  },
]
</script>
```

### 水平锚点

通过 `direction="horizontal"` 设置水平方向锚点。

```vue
<template>
  <div>
    <Anchor
      direction="horizontal"
      :items="items"
      style="margin-bottom: 24px;"
    />
    <div id="h-part-1" style="height: 160px; background: #e6f4ff; padding: 16px; margin-bottom: 16px;">
      <h3>第一部分</h3>
    </div>
    <div id="h-part-2" style="height: 160px; background: #f6ffed; padding: 16px; margin-bottom: 16px;">
      <h3>第二部分</h3>
    </div>
    <div id="h-part-3" style="height: 160px; background: #fff7e6; padding: 16px;">
      <h3>第三部分</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Anchor } from 'ant-design-hmfw'

const items = [
  { href: '#h-part-1', title: '第一部分' },
  { href: '#h-part-2', title: '第二部分' },
  { href: '#h-part-3', title: '第三部分' },
]
</script>
```

### 固定锚点

通过 `affix` 属性让锚点固定在页面某个位置。

```vue
<template>
  <Anchor
    affix
    :offset-top="80"
    :items="items"
    @change="onChange"
    @click="onClick"
  />
</template>

<script setup lang="ts">
import { Anchor } from 'ant-design-hmfw'

const items = [
  { href: '#section-a', title: '章节 A' },
  { href: '#section-b', title: '章节 B' },
  { href: '#section-c', title: '章节 C' },
]

const onChange = (currentLink: string) => {
  console.log('当前锚点:', currentLink)
}

const onClick = (e: Event, link: { href: string; title: string }) => {
  console.log('点击锚点:', link)
}
</script>
```

## API

### Anchor Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 数据化配置选项内容 | `AnchorLinkItem[]` | `[]` |
| affix | 固定模式 | `boolean` | `true` |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | `number` | `0` |
| direction | 锚点方向 | `'vertical' \| 'horizontal'` | `'vertical'` |
| bounds | 锚点区域边界 | `number` | `5` |

### AnchorLinkItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| href | 锚点链接 | `string` | - |
| title | 文字内容 | `string` | - |
| children | 子节点 | `AnchorLinkItem[]` | - |

### Anchor Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 锚点改变时触发 | `(currentActiveLink: string) => void` |
| click | 点击锚点时触发 | `(e: Event, link: AnchorLinkItem) => void` |
