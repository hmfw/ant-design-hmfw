<template>
  <SemanticPreview component="Rate" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <!-- allowHalf + 半星值：使 star-first（左半）与 star-second（右半）两个节点都真实渲染 -->
      <Rate :value="2.5" allow-half :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Rate } from '@hmfw/ant-design'

// 与 RateClassNames / RateStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '根容器（ul.hmfw-rate，role="radiogroup"）。承载整体布局、尺寸（small/large）、禁用与 RTL 状态类，始终渲染。',
  },
  {
    name: 'star',
    desc: '单颗星星项（li.hmfw-rate-star）。承载单星的间距与 full/half/zero/active/focused 状态类，每颗星各渲染一个（count 个）。',
  },
  {
    name: 'starFirst',
    desc: '星星前半部分（div.hmfw-rate-star-first）。承载半星左半区域的裁剪与着色样式，始终随每颗星渲染，在 allow-half 且当前为半星时显现为半亮。',
  },
  {
    name: 'starSecond',
    desc: '星星后半部分（div.hmfw-rate-star-second）。承载星星右半（或整颗）区域的样式，始终随每颗星渲染。',
  },
]
</script>
