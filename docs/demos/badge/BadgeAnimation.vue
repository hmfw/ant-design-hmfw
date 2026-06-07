<template>
  <div style="display: flex; gap: 24px; align-items: center">
    <Badge :count="count">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <div style="display: flex; gap: 8px">
      <Button @click="increase">+</Button>
      <Button @click="decrease">-</Button>
      <Button @click="randomize">随机</Button>
    </div>
    <div>当前值: {{ count }}</div>
  </div>
  <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 16px">
    <h4>Status 颜色自定义</h4>
    <Badge status="success" color="#ff6b6b" text="自定义红色" />
    <Badge status="processing" color="#4ecb73" text="自定义绿色" />
    <Badge status="error" color="blue" text="自定义蓝色（预设）" />
    <Badge status="warning" color="#8b5cf6" text="自定义紫色" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Badge, Button } from 'ant-design-hmfw'

const count = ref(5)

const increase = () => {
  count.value++
}

const decrease = () => {
  if (count.value > 0) {
    count.value--
  }
}

const randomize = () => {
  count.value = Math.floor(Math.random() * 200)
}
</script>
