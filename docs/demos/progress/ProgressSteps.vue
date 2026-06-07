<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px">Steps Progress (5 steps)</div>
      <Progress :percent="50" :steps="5" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Steps Progress (10 steps)</div>
      <Progress :percent="30" :steps="10" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Small Steps</div>
      <Progress :percent="60" :steps="5" size="small" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Steps with Custom Color</div>
      <Progress :percent="80" :steps="5" stroke-color="#52c41a" />
    </div>
    <div>
      <div style="margin-bottom: 8px">对象形式 steps（指定段数与间距）</div>
      <Progress :percent="50" :steps="{ count: 4, gap: 12 }" />
    </div>
    <div>
      <div style="margin-bottom: 8px">分段渐变色（数组）</div>
      <Progress :percent="60" :steps="5" :stroke-color="['#f5222d', '#fa8c16', '#fadb14', '#52c41a', '#1677ff']" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
</script>
