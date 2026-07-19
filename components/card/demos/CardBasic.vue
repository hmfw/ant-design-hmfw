<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Card title="卡片标题" style="width: 300px">
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </Card>
    <Card size="small" title="小尺寸卡片" style="width: 300px">
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@hmfw/ant-design'
</script>
