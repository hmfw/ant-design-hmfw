<template>
  <div>
    <Cascader
      :options="options"
      :default-value="['zhejiang', 'hangzhou', 'xihu']"
      placeholder="默认选中 浙江/杭州/西湖"
      style="width: 300px"
      @change="handleChange"
    />
    <p style="margin-top: 8px; color: #666">非受控模式：通过 defaultValue 指定初始选中项</p>

    <Cascader v-model:value="value" :options="options" placeholder="受控模式" style="width: 300px; margin-top: 16px" />
    <p style="margin-top: 8px; color: #666">受控模式当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from '@hmfw/ant-design'
import type { CascaderValue } from '@hmfw/ant-design'

const value = ref<CascaderValue>(['jiangsu', 'nanjing'])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
          { value: 'binjiang', label: '滨江' },
        ],
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

const handleChange = (val: CascaderValue) => {
  console.log('默认值示例选中：', val)
}
</script>
