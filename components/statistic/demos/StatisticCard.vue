<template>
  <div style="display: flex; gap: 32px">
    <Statistic
      title="反馈"
      :value="1128"
      :value-style="{ color: '#3f8600' }"
      :prefix="h('span', { style: { fontSize: '14px' } }, '↑')"
      :suffix="h('span', { style: { fontSize: '14px', color: '#999' } }, '/ 1000')"
    />

    <Statistic
      title="空闲中"
      :value="93"
      suffix="%"
      :precision="2"
      :value-style="{ color: '#cf1322' }"
      :prefix="h('span', { style: { fontSize: '14px' } }, '↓')"
    />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Statistic } from '@hmfw/ant-design'
</script>
