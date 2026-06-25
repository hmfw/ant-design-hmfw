<template>
  <Result
    status="success"
    title="成功提交采购申请"
    sub-title="订单号：2017182818828182881，云顾问正在对接中，请耐心等待。"
  >
    <template #extra>
      <Button @click="onGoOrder">查看订单</Button>
      <Button @click="onBuyAgain">再次购买</Button>
    </template>
  </Result>
</template>

<script setup lang="ts">
import { Result, Button } from '@hmfw/ant-design'

function onGoOrder() {
  console.log('查看订单')
}

function onBuyAgain() {
  console.log('再次购买')
}
</script>
