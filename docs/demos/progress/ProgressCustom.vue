<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px">Custom Size (number)</div>
      <Progress type="circle" :percent="75" :size="80" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Small Size</div>
      <Progress type="circle" :percent="75" size="small" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Custom Gap Degree</div>
      <Progress type="dashboard" :percent="75" :gap-degree="30" />
    </div>
    <div>
      <div style="margin-bottom: 8px">Square Linecap</div>
      <Progress type="circle" :percent="75" stroke-linecap="square" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
</script>
