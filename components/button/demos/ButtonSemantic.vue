<template>
  <SemanticPreview component="Button" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <Button type="primary" :icon="SearchOutlined" :class-names="classNames">按钮</Button>
      <Button loading :class-names="classNames">加载中</Button>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { SearchOutlined } from '@hmfw/icons'
import { Button } from '@hmfw/ant-design'

// 与 ButtonClassNames / ButtonStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根元素（<button>，设置 href 后为 <a>）。承载边框、背景、内边距、圆角、阴影、过渡动画、光标与对齐等完整按钮外观。',
  },
  {
    name: 'icon',
    desc: '图标容器。控制图标的字号、颜色继承与居中对齐，图标位置由 iconPosition 决定。',
  },
  {
    name: 'content',
    desc: '文本内容容器。纯图标按钮（无子节点）时不渲染。两个汉字的间距优化作用在其内层节点上。',
  },
  {
    name: 'loading',
    desc: '加载图标容器。loading 状态下与 icon 叠加在同一节点上，styles.loading 优先级高于 styles.icon。',
  },
]
</script>
