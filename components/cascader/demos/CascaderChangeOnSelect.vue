<template>
  <div>
    <Cascader
      v-model:value="value"
      :options="options"
      :change-on-select="true"
      placeholder="选择即改变"
      style="width: 300px"
      @change="handleChange"
    />
    <p style="margin-top: 8px">当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from '@hmfw/ant-design'

const value = ref<string[]>([])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [{ value: 'xihu', label: '西湖区' }],
      },
    ],
  },
]

const handleChange = (val: string[]) => {
  console.log('选中值：', val)
}
</script>
