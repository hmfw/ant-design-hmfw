<script setup lang="ts">
import { Progress } from '@hmfw/ant-design'
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <span style="display: inline-block; width: 180px">默认（gapPlacement=bottom）</span>
      <Progress type="dashboard" :percent="75" :width="80" />
    </div>
    <div>
      <span style="display: inline-block; width: 180px">gapPlacement=top</span>
      <Progress type="dashboard" :percent="75" :width="80" gap-placement="top" />
    </div>
    <div>
      <span style="display: inline-block; width: 180px">gapPlacement=start</span>
      <Progress type="dashboard" :percent="75" :width="80" gap-placement="start" />
    </div>
    <div>
      <span style="display: inline-block; width: 180px">gapPlacement=end</span>
      <Progress type="dashboard" :percent="75" :width="80" gap-placement="end" />
    </div>
  </div>
</template>
