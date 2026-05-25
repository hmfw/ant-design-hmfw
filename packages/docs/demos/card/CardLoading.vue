<template>
  <Card title="卡片标题" :loading="loading" style="width: 300px;">
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'ant-design-hmfw'

const loading = ref(true)
</script>
