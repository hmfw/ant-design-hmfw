<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">带附加内容：</p>
      <TimePicker v-model:value="time" :render-extra-footer="renderFooter" placeholder="带附加内容" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time = ref('')

const renderFooter = () =>
  h(
    'div',
    { style: 'padding: 8px 12px; color: #999; font-size: 12px; border-top: 1px solid #f0f0f0' },
    '提示：请选择工作时间 9:00-18:00',
  )
</script>
