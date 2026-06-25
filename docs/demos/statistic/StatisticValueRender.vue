<template>
  <div style="display: flex; gap: 32px">
    <Statistic title="自定义渲染" :value="98.5" :value-render="customRender" />
    <Countdown title="倒计时自定义" :value="deadline" format="HH:mm:ss" :value-render="countdownRender" />
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { Statistic, Countdown } from '@hmfw/ant-design'

const deadline = ref(Date.now() + 1000 * 60 * 60 * 24)

// 自定义数值渲染
const customRender = (value: string) => {
  return h(
    'span',
    {
      style: {
        color: '#1890ff',
        fontSize: '24px',
        fontWeight: 'bold',
      },
    },
    value + ' 分',
  )
}

// 自定义倒计时渲染
const countdownRender = (value: string) => {
  return h(
    'span',
    {
      style: {
        background: '#ff4d4f',
        color: '#fff',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '16px',
      },
    },
    value,
  )
}
</script>
