<template>
  <div style="display: flex; gap: 32px; align-items: center">
    <Spin :percent="percent" />
    <Spin :percent="percent" size="large" />
    <Spin percent="auto" :spinning="autoSpinning" />
    <button @click="toggleAuto">
      {{ autoSpinning ? '停止 auto' : '开始 auto' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Spin } from 'ant-design-hmfw'

// 受控 percent：手动在 0~100 之间循环递增，演示环形进度指示器。
const percent = ref(0)
const autoSpinning = ref(true)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    percent.value = percent.value >= 100 ? 0 : percent.value + 10
  }, 500)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

function toggleAuto() {
  autoSpinning.value = !autoSpinning.value
}
</script>
