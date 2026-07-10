<template>
  <Space direction="vertical" style="width: 100%">
    <Steps :current="current" :items="items" />
    <Space>
      <Button :disabled="current === 0" @click="current--"> 上一步 </Button>
      <Button type="primary" :disabled="current === items.length - 1" @click="current++"> 下一步 </Button>
    </Space>
    <p>当前步骤：{{ current + 1 }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Steps, Button, Space } from '@hmfw/ant-design'

const current = ref(0)

const items = [
  { title: '第一步', content: '填写基本信息' },
  { title: '第二步', content: '确认订单信息' },
  { title: '第三步', content: '完成支付' },
]
</script>
