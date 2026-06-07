<template>
  <div class="demo-cascader">
    <h3>搜索高亮</h3>
    <Cascader
      v-model:value="value1"
      :options="options"
      show-search
      placeholder="搜索城市（高亮显示匹配结果）"
      style="width: 300px;"
    />

    <h3 style="margin-top: 24px;">showCheckedStrategy - SHOW_PARENT</h3>
    <Cascader
      v-model:value="value2"
      :options="options"
      multiple
      show-checked-strategy="SHOW_PARENT"
      placeholder="只显示父节点"
      style="width: 400px;"
    />
    <div style="margin-top: 8px; color: #666;">
      当前选择: {{ JSON.stringify(value2) }}
    </div>

    <h3 style="margin-top: 24px;">showCheckedStrategy - SHOW_CHILD</h3>
    <Cascader
      v-model:value="value3"
      :options="options"
      multiple
      show-checked-strategy="SHOW_CHILD"
      placeholder="只显示子节点"
      style="width: 400px;"
    />
    <div style="margin-top: 8px; color: #666;">
      当前选择: {{ JSON.stringify(value3) }}
    </div>

    <h3 style="margin-top: 24px;">自定义 displayRender (VNode)</h3>
    <Cascader
      v-model:value="value4"
      :options="options"
      :display-render="customRender"
      placeholder="自定义渲染"
      style="width: 300px;"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Cascader } from '../../../components'

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
    children: [
      { value: 'nanjing', label: '南京' },
      { value: 'suzhou', label: '苏州' },
    ],
  },
]

const value1 = ref([])
const value2 = ref([
  ['zhejiang'],
  ['zhejiang', 'hangzhou'],
  ['zhejiang', 'hangzhou', 'xihu'],
  ['jiangsu', 'nanjing'],
])
const value3 = ref([
  ['zhejiang'],
  ['zhejiang', 'hangzhou'],
  ['zhejiang', 'hangzhou', 'xihu'],
  ['jiangsu', 'nanjing'],
])
const value4 = ref(['zhejiang', 'hangzhou', 'xihu'])

const customRender = (labels: string[]) => {
  return h('span', { style: 'color: #1677ff; font-weight: 600;' }, labels.join(' → '))
}
</script>

<style scoped>
.demo-cascader h3 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}
</style>
