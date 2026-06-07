<template>
  <Result status="error" title="提交失败" sub-title="请检查并修改以下信息后，再重新提交。">
    <template #extra>
      <Button @click="onRetry">再次提交</Button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button } from 'ant-design-hmfw'

function onRetry() {
  console.log('重试')
}
</script>
