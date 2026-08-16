<template>
  <Cascader v-model:value="value" :options="options" placeholder="部分选项被禁用" style="width: 300px" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from '@hmfw/ant-design'
import type { CascaderValue } from '@hmfw/ant-design'

const value = ref<CascaderValue>([])

// 通过 CascaderOption.disabled 禁用指定选项，被禁用的节点不可点选也不可展开
const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州（禁用）',
        disabled: true,
        children: [{ value: 'xihu', label: '西湖' }],
      },
      { value: 'ningbo', label: '宁波' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [{ value: 'nanjing', label: '南京' }],
  },
]
</script>
