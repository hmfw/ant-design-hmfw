<template>
  <div>
    <Cascader
      v-model:value="value"
      :options="options"
      :load-data="loadData"
      placeholder="点击节点动态加载子选项"
      style="width: 300px"
      @change="handleChange"
    />
    <p style="margin-top: 8px; color: #666">当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from '@hmfw/ant-design'
import type { CascaderOption, CascaderValue } from '@hmfw/ant-design'

const value = ref<CascaderValue>([])

// 动态加载模式下，非叶子节点通过 isLeaf: false 标记，等待 loadData 填充 children
const options = ref<CascaderOption[]>([
  { value: 'zhejiang', label: '浙江', isLeaf: false },
  { value: 'jiangsu', label: '江苏', isLeaf: false },
])

// 模拟异步接口：按选中节点填充下一级子选项
const loadData = (selectedOptions: CascaderOption[]) => {
  const target = selectedOptions[selectedOptions.length - 1]
  setTimeout(() => {
    if (target.value === 'zhejiang') {
      target.children = [
        { value: 'hangzhou', label: '杭州', isLeaf: false },
        { value: 'ningbo', label: '宁波', isLeaf: true },
      ]
    } else if (target.value === 'hangzhou') {
      target.children = [
        { value: 'xihu', label: '西湖', isLeaf: true },
        { value: 'binjiang', label: '滨江', isLeaf: true },
      ]
    } else if (target.value === 'jiangsu') {
      target.children = [
        { value: 'nanjing', label: '南京', isLeaf: true },
        { value: 'suzhou', label: '苏州', isLeaf: true },
      ]
    }
  }, 500)
}

const handleChange = (val: CascaderValue) => {
  console.log('动态加载选中：', val)
}
</script>
