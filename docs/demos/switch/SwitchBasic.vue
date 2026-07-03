<template>
  <Space direction="vertical" size="middle">
    <div style="display: flex; align-items: center; gap: 8px">
      <Switch v-model:checked="checked" />
      <span>{{ checked ? '开启' : '关闭' }}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px">
      <Switch v-model:checked="checked2" disabled />
      <span>禁用状态</span>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Space, Switch } from '@hmfw/ant-design'

const checked = ref(false)
const checked2 = ref(true)
</script>
