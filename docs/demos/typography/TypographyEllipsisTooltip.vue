<template>
  <div style="display: flex; flex-direction: column; gap: 12px; max-width: 240px">
    <Text :ellipsis="{ tooltip: true }">这是一段很长的文本，鼠标悬停时会通过 Tooltip 显示完整内容。</Text>
    <Text :ellipsis="{ tooltip: '自定义 Tooltip 文案' }">显示文字与 Tooltip 内容不同。</Text>
    <Paragraph :ellipsis="{ rows: 2, tooltip: { placement: 'topLeft', color: '#1677ff' }, onEllipsis: handleEllipsis }">
      多行省略时，可以传入完整的 Tooltip 配置（placement、color 等），并通过 onEllipsis 监听省略状态变化。
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
