<template>
  <div>
    <Cascader
      v-model:value="value"
      :options="options"
      :multiple="true"
      placeholder="支持多选"
      style="width: 300px;"
      @change="handleChange"
    />
    <p style="margin-top: 8px;">当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[][]>([])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'yuhang', label: '余杭区' },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [
          { value: 'haishu', label: '海曙区' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'xuanwu', label: '玄武区' },
        ],
      },
    ],
  },
]

const handleChange = (val: string[][], selectedOptions: any[]) => {
  console.log('选中值：', val, selectedOptions)
}
</script>
