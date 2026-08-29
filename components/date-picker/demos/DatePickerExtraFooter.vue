<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" :render-extra-footer="renderFooter" placeholder="选择日期" />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import { DatePicker } from '@hmfw/ant-design'

const date = ref<string>('')

// 面板底部追加自定义内容
const renderFooter = () =>
  h('div', { style: { color: '#999', fontSize: '12px', padding: '4px 0' } }, '自定义页脚：可选择任意日期')
</script>
