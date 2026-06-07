<template>
  <div class="demo-dynamic-content">
    <p>当浮层内容动态变化时，Tooltip 会通过 ResizeObserver 自动重新计算位置，确保浮层不会溢出视口。</p>

    <div style="display: flex; gap: 20px; margin-top: 20px">
      <Tooltip :title="tooltipContent" placement="top" :open="open">
        <Button @click="open = !open">{{ open ? '关闭' : '打开' }}提示</Button>
      </Tooltip>

      <Button @click="toggleContent">
        {{ isLongContent ? '切换为短内容' : '切换为长内容' }}
      </Button>
    </div>

    <p style="margin-top: 20px; color: #666; font-size: 12px">提示：打开浮层后切换内容长度，浮层位置会自动调整</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Tooltip, Button } from 'ant-design-hmfw'

const open = ref(false)
const isLongContent = ref(false)

const tooltipContent = computed(() => {
  return isLongContent.value
    ? '这是一段很长的提示文字，用于演示当内容动态变化时，浮层位置会自动重新计算，确保不会溢出视口边界，提供更好的用户体验。'
    : '短提示'
})

const toggleContent = () => {
  isLongContent.value = !isLongContent.value
}
</script>

<style scoped>
.demo-dynamic-content {
  padding: 20px;
}
</style>
