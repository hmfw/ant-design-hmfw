<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <div style="margin-bottom: 8px;">Gradient (from-to)</div>
      <Progress :percent="60" :stroke-color="{ from: '#108ee9', to: '#87d068' }" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Gradient (multi-stop)</div>
      <Progress
        :percent="80"
        :stroke-color="{
          '0%': '#108ee9',
          '50%': '#87d068',
          '100%': '#ffcb00',
        }"
      />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Success Segment</div>
      <Progress :percent="60" :success="{ percent: 30, strokeColor: '#52c41a' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
</script>
