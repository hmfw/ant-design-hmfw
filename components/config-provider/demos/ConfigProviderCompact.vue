<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Space>
      <Button
        v-for="s in sizes"
        :key="s.value"
        :size="s.value"
        :type="current === s.value ? 'primary' : 'default'"
        @click="current = s.value"
      >
        {{ s.label }}
      </Button>
    </Space>
    <Space align="center" wrap>
      <Button type="primary" :size="current">Primary</Button>
      <Button :size="current">Default</Button>
      <Button type="dashed" :size="current">Dashed</Button>
      <Input :size="current" placeholder="输入框" style="width: 160px" />
      <Select
        :size="current"
        :options="[
          { value: '1', label: '选项一' },
          { value: '2', label: '选项二' },
        ]"
        placeholder="选择器"
        style="width: 140px"
      />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input, Select, Space } from '@hmfw/ant-design'

type DemoSize = 'middle' | 'small' | 'large'

const current = ref<DemoSize>('middle')
const sizes: { label: string; value: DemoSize }[] = [
  { label: 'Small', value: 'small' },
  { label: '默认', value: 'middle' },
  { label: 'Large', value: 'large' },
]
</script>
