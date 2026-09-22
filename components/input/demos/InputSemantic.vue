<template>
  <SemanticPreview component="Input" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <!-- prefix + suffix + showCount + maxLength + 值，让 affixWrapper / prefix / suffix / count 全部渲染 -->
      <Input
        :prefix="UserOutlined"
        :suffix="InfoCircleOutlined"
        :default-value="'Kiro'"
        :max-length="20"
        show-count
        allow-clear
        placeholder="请输入"
        style="width: 260px"
        :class-names="classNames"
      />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { UserOutlined, InfoCircleOutlined } from '@hmfw/icons'
import { Input } from '@hmfw/ant-design'

// 与 InputClassNames / InputStyles 的 key 一一对应
const semantics = [
  {
    name: 'affixWrapper',
    desc: '前后缀包裹容器（span.hmfw-input-affix-wrapper）。承载边框、背景、聚焦态与整体布局，仅在存在 prefix / suffix / allowClear / showCount 时渲染；纯输入框时不渲染，样式直接落到 input 上。',
  },
  {
    name: 'prefix',
    desc: '前缀节点（span.hmfw-input-prefix）。承载前缀内容与右侧间距，仅在设置 prefix 属性或 prefix 插槽时渲染。',
  },
  {
    name: 'suffix',
    desc: '后缀节点（span.hmfw-input-suffix）。承载后缀内容、清除按钮与计数，仅在存在 suffix / allowClear / showCount 时渲染。',
  },
  {
    name: 'input',
    desc: '原生输入框（input 元素）。承载文字排版与光标；有前后缀包裹时类名为 hmfw-input，无包裹时为独立的 hmfw-input，始终渲染。',
  },
  {
    name: 'count',
    desc: '字数计数节点（span.hmfw-input-show-count-suffix）。承载「当前/最大」字数展示，仅在开启 showCount 时渲染，位于后缀区域内。',
  },
]
</script>
