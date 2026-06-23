<template>
  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 240px">
    <Text :ellipsis="{ tooltip: true }">
      这是一段超出容器宽度的长文本，鼠标悬停时会通过 Tooltip 显示完整内容，方便用户查看被省略的部分。
    </Text>
    <Text :ellipsis="{ tooltip: '自定义 Tooltip 文案' }">
      显示的文字会被省略，但悬停时 Tooltip 展示的内容与之不同。
    </Text>
    <Paragraph
      :ellipsis="{
        rows: 2,
        tooltip: { placement: 'topLeft', color: '#1677ff' },
        onEllipsis: handleEllipsis,
      }"
    >
      多行省略时，可以传入完整的 Tooltip 配置（placement、color 等），并通过 onEllipsis
      监听省略状态的变化，从而在文本被截断时做出相应的交互处理。
    </Paragraph>
    <div style="font-size: 12px; color: #999">省略状态: {{ ellipsisState }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Text, Paragraph } from 'ant-design-hmfw'

const ellipsisState = ref<boolean>(false)
function handleEllipsis(v: boolean) {
  ellipsisState.value = v
}
</script>
