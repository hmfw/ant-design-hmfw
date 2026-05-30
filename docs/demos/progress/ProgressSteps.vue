<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <div style="margin-bottom: 8px;">Steps Progress (5 steps)</div>
      <Progress :percent="50" :steps="5" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Steps Progress (10 steps)</div>
      <Progress :percent="30" :steps="10" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Small Steps</div>
      <Progress :percent="60" :steps="5" size="small" />
    </div>
    <div>
      <div style="margin-bottom: 8px;">Steps with Custom Color</div>
      <Progress :percent="80" :steps="5" stroke-color="#52c41a" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
</script>
