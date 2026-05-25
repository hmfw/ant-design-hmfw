<template>
  <Empty description="暂无数据">
    <button @click="onCreate">立即创建</button>
  </Empty>
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-hmfw'

function onCreate() {
  console.log('创建')
}
</script>
