<template>
  <Result status="404" title="404" sub-title="抱歉，您访问的页面不存在。">
    <template #extra>
      <button @click="onBack">返回首页</button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result } from 'ant-design-hmfw'

function onBack() {
  console.log('返回首页')
}
</script>
