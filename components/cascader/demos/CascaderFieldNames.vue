<template>
  <div>
    <Cascader
      v-model:value="value"
      :options="options"
      :field-names="{ label: 'name', value: 'id', children: 'sub' }"
      placeholder="自定义字段名（id/name/sub）"
      style="width: 300px"
    />
    <p style="margin-top: 8px; color: #666">当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from '@hmfw/ant-design'
import type { CascaderValue } from '@hmfw/ant-design'

const value = ref<CascaderValue>([])

// 通过 fieldNames 对接后端常见的 id/name 字段结构，无需前端转换数据
const options = [
  {
    id: 'zhejiang',
    name: '浙江',
    sub: [
      {
        id: 'hangzhou',
        name: '杭州',
        sub: [{ id: 'xihu', name: '西湖' }],
      },
      { id: 'ningbo', name: '宁波' },
    ],
  },
  {
    id: 'jiangsu',
    name: '江苏',
    sub: [{ id: 'nanjing', name: '南京' }],
  },
]
</script>
