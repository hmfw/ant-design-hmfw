<template>
  <div style="display: flex; gap: 16px">
    <!-- 简单骨架屏 -->
    <Card title="简单骨架屏" :loading="true" style="width: 300px">
      <p>卡片内容</p>
    </Card>

    <!-- 带头像的骨架屏 -->
    <Card title="带头像骨架屏" :loading="{ avatar: true, paragraph: { rows: 4 } }" style="width: 300px">
      <p>卡片内容</p>
    </Card>

    <!-- 小尺寸骨架屏 -->
    <Card title="小尺寸" size="small" :loading="{ avatar: true, paragraph: { rows: 2 } }" style="width: 300px">
      <p>卡片内容</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@hmfw/ant-design'
</script>
