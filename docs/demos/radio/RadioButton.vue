<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">outline 样式（默认）：</p>
      <RadioGroup v-model:value="size" :options="sizeOptions" option-type="button" button-style="outline" />
    </div>
    <div>
      <p style="margin-bottom: 8px">solid 样式：</p>
      <RadioGroup v-model:value="size2" :options="sizeOptions" option-type="button" button-style="solid" />
    </div>
    <div>
      <p style="margin-bottom: 8px">大尺寸：</p>
      <RadioGroup v-model:value="size3" :options="sizeOptions" option-type="button" size="large" />
    </div>
    <div>
      <p style="margin-bottom: 8px">小尺寸：</p>
      <RadioGroup v-model:value="size4" :options="sizeOptions" option-type="button" size="small" />
    </div>
    <div>
      <p style="margin-bottom: 8px">禁用状态：</p>
      <RadioGroup v-model:value="size5" :options="sizeOptions" option-type="button" disabled />
    </div>
    <p>选中：{{ size }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup } from 'ant-design-hmfw'

const size = ref('middle')
const size2 = ref('middle')
const size3 = ref('large')
const size4 = ref('small')
const size5 = ref('middle')

const sizeOptions = [
  { label: '大', value: 'large' },
  { label: '中', value: 'middle' },
  { label: '小', value: 'small' },
]
</script>
