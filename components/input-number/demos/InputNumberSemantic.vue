<template>
  <SemanticPreview component="InputNumber" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <!-- 默认 input 模式：controls 开启渲染 handlerWrap + handlerUp/Down；prefix/suffix 触发前后缀节点 -->
      <InputNumber
        :default-value="10"
        prefix="￥"
        suffix="元"
        :min="0"
        :max="100"
        style="width: 220px"
        :class-names="classNames"
      />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { InputNumber } from '@hmfw/ant-design'

// 与 InputNumberClassNames / InputNumberStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-input-number）。承载边框、背景、尺寸、聚焦/禁用/校验态类名与整体布局，始终渲染。',
  },
  {
    name: 'input',
    desc: '原生输入框（input.hmfw-input-number-input）。承载数值文字排版与光标，始终渲染。',
  },
  {
    name: 'prefix',
    desc: '前缀节点（span.hmfw-input-number-prefix）。承载前缀内容与间距，仅在设置 prefix 属性或 prefix 插槽时渲染。',
  },
  {
    name: 'suffix',
    desc: '后缀节点（span.hmfw-input-number-suffix）。承载后缀内容与间距，仅在设置 suffix 属性或 suffix 插槽时渲染。',
  },
  {
    name: 'handlerWrap',
    desc: '操作按钮容器（div.hmfw-input-number-handler-wrap）。包裹上下步进按钮，仅在 input 模式且 controls 开启时渲染；spinner 模式下步进按钮分列两侧，此容器不渲染。',
  },
  {
    name: 'handlerUp',
    desc: '增加按钮（span.hmfw-input-number-handler-up）。承载步进「加」按钮的样式与禁用态，仅在 controls 开启时渲染。',
  },
  {
    name: 'handlerDown',
    desc: '减少按钮（span.hmfw-input-number-handler-down）。承载步进「减」按钮的样式与禁用态，仅在 controls 开启时渲染。',
  },
]
</script>
