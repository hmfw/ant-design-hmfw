<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px;">
    <button @click="size = 'small'">小</button>
    <button @click="size = 'middle'">中</button>
    <button @click="size = 'large'">大</button>
  </div>
  <ConfigProvider :component-size="size">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <input :style="inputStyle" placeholder="输入框" />
      <button :style="btnStyle">按钮</button>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ConfigProvider } from 'ant-design-hmfw'

const size = ref<'small' | 'middle' | 'large'>('middle')

const heightMap = { small: '24px', middle: '32px', large: '40px' }

const inputStyle = computed(() => ({
  height: heightMap[size.value],
  padding: '0 8px',
  border: '1px solid #d9d9d9',
  borderRadius: '6px',
}))

const btnStyle = computed(() => ({
  height: heightMap[size.value],
  padding: '0 16px',
  border: '1px solid #d9d9d9',
  borderRadius: '6px',
  cursor: 'pointer',
}))
</script>
