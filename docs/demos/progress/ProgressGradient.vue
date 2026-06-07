<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <div style="margin-bottom: 8px;">线形渐变（from-to）</div>
      <Progress :percent="60" :stroke-color="{ from: '#108ee9', to: '#87d068' }" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">线形渐变（多色 stop）</div>
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
      <div style="margin-bottom: 8px;">成功分段 success.percent</div>
      <Progress :percent="60" :success="{ percent: 30, strokeColor: '#52c41a' }" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">圆形 / 仪表盘渐变</div>
      <div style="display: flex; gap: 24px;">
        <Progress
          type="circle"
          :percent="70"
          :stroke-color="{ '0%': '#108ee9', '100%': '#87d068' }"
        />
        <Progress
          type="dashboard"
          :percent="70"
          :stroke-color="{ '0%': '#108ee9', '100%': '#87d068' }"
        />
        <Progress
          type="circle"
          :percent="90"
          :stroke-color="{ from: '#1677ff', to: '#ff4d4f' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
</script>
