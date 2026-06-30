<template>
  <div>
    <div style="margin-bottom: 16px">
      <span style="margin-right: 8px">对齐方式：</span>
      <Select v-model:value="align" :options="alignOptions" style="width: 120px" />
    </div>

    <!-- 垂直模式下的对齐演示 -->
    <div style="display: flex; gap: 24px">
      <Space direction="vertical" :align="align" style="border: 1px dashed #d9d9d9; padding: 16px">
        <Button type="primary"> Primary Button </Button>
        <Button>Default Button</Button>
        <Button type="dashed" size="small"> Small Button </Button>
        <Button type="link" size="large"> Large Link </Button>
      </Space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Space, Button, Select } from '@hmfw/ant-design'
import type { SpaceAlign } from '@hmfw/ant-design'

const align = ref<SpaceAlign>('start')

const alignOptions = [
  { value: 'start', label: 'start' },
  { value: 'center', label: 'center' },
  { value: 'end', label: 'end' },
  { value: 'baseline', label: 'baseline' },
]
</script>
