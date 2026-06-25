<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px">月视图：</div>
      <Calendar mode="month" :fullscreen="false" />
    </div>
    <div>
      <div style="margin-bottom: 8px">年视图：</div>
      <Calendar mode="year" :fullscreen="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar } from '@hmfw/ant-design'
</script>
