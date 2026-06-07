<template>
  <div>
    <div style="margin-bottom: 16px">
      <span style="margin-right: 8px">对齐方式：</span>
      <select v-model="align" style="width: 120px">
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
        <option value="baseline">baseline</option>
      </select>
    </div>

    <!-- 垂直模式下的对齐演示 -->
    <div style="display: flex; gap: 24px">
      <Space direction="vertical" :align="align" style="border: 1px dashed #d9d9d9; padding: 16px">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed" size="small">Small Button</Button>
        <Button type="link" size="large">Large Link</Button>
      </Space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Space, Button } from 'ant-design-hmfw'
import type { SpaceAlign } from 'ant-design-hmfw'

const align = ref<SpaceAlign>('start')
</script>
