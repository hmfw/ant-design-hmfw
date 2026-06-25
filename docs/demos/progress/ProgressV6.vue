<script setup lang="ts">
import { Progress } from '@hmfw/ant-design'
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <span style="display: inline-block; width: 200px">size=[200, 12]（数组）</span>
      <Progress :percent="60" :size="[200, 12]" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px">size={width:300, height:10}</span>
      <Progress :percent="40" :size="{ width: 300, height: 10 }" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px">size=14（小圆形 + Tooltip）</span>
      <Progress type="circle" :percent="60" :size="14" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px">steps={count:6, gap:8}</span>
      <Progress :percent="50" :steps="{ count: 6, gap: 8 }" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px">strokeColor 数组（每段不同色）</span>
      <Progress :percent="60" :steps="5" :stroke-color="['#f5222d', '#fa8c16', '#fadb14', '#52c41a', '#1677ff']" />
    </div>
    <div>
      <span style="display: inline-block; width: 200px">rounding=Math.ceil</span>
      <Progress :percent="41" :steps="5" :rounding="Math.ceil" />
    </div>
  </div>
</template>
