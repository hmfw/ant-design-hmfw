<template>
  <Empty description="暂无数据">
    <Button @click="onCreate">立即创建</Button>
  </Empty>
</template>

<script setup lang="ts">
import { Empty, Button } from 'ant-design-hmfw'

function onCreate() {
  console.log('创建')
}
</script>
