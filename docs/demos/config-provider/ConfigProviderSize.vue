<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px">
    <Button @click="size = 'small'">小</Button>
    <Button @click="size = 'middle'">中</Button>
    <Button @click="size = 'large'">大</Button>
  </div>
  <ConfigProvider :component-size="size">
    <div style="display: flex; flex-direction: column; gap: 12px">
      <Input placeholder="输入框" />
      <Button>按钮</Button>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, Button, Input } from '@hmfw/ant-design'

const size = ref<'small' | 'middle' | 'large'>('middle')
</script>
