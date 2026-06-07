<template>
  <div style="display: flex; gap: 32px;">
    <Statistic
      title="反馈"
      :value="1128"
      :valueStyle="{ color: '#3f8600' }"
    >
      <template #prefix>
        <span style="font-size: 14px;">↑</span>
      </template>
      <template #suffix>
        <span style="font-size: 14px; color: #999;">/ 1000</span>
      </template>
    </Statistic>

    <Statistic
      title="空闲中"
      :value="93"
      suffix="%"
      :precision="2"
      :valueStyle="{ color: '#cf1322' }"
    >
      <template #prefix>
        <span style="font-size: 14px;">↓</span>
      </template>
    </Statistic>
  </div>
</template>

<script setup lang="ts">
import { Statistic } from '../../../components'
</script>
