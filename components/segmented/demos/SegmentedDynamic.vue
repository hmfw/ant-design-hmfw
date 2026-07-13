<template>
  <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start">
    <div style="display: flex; gap: 8px">
      <Button size="small" @click="addOption">增加选项</Button>
      <Button size="small" :disabled="options.length <= 1" @click="removeOption">删除末项</Button>
      <Button size="small" @click="loadAsync">模拟异步加载</Button>
    </div>
    <!-- 选项动态增删 / 异步填充时，首项会自动兜底选中 -->
    <Segmented v-model:value="value" :options="options" />
    <p>当前选中：{{ value ?? '（无）' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented, Button } from '@hmfw/ant-design'

const options = ref(['选项 1', '选项 2', '选项 3'])
const value = ref('选项 1')
let counter = options.value.length

const addOption = () => {
  counter += 1
  options.value = [...options.value, `选项 ${counter}`]
}

const removeOption = () => {
  const next = options.value.slice(0, -1)
  options.value = next
  // 若删掉的正是当前选中项，将选中值移到新的末项，避免孤儿值
  if (!next.includes(value.value)) value.value = next[next.length - 1]
}

// 模拟异步：先清空（加载中滑块自动隐藏），填充新数据后把选中值重置到首项
const loadAsync = () => {
  options.value = []
  setTimeout(() => {
    counter = 4
    const next = ['每日', '每周', '每月', '每季']
    options.value = next
    value.value = next[0]
  }, 600)
}
</script>
