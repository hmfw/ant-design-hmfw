<template>
  <Cascader
    v-model:value="value"
    :options="options"
    expand-trigger="hover"
    placeholder="鼠标悬停展开"
    style="width: 300px;"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  {
    value: 'frontend',
    label: '前端',
    children: [
      {
        value: 'framework',
        label: '框架',
        children: [
          { value: 'vue', label: 'Vue' },
          { value: 'react', label: 'React' },
        ],
      },
      {
        value: 'language',
        label: '语言',
        children: [
          { value: 'ts', label: 'TypeScript' },
          { value: 'js', label: 'JavaScript' },
        ],
      },
    ],
  },
  {
    value: 'backend',
    label: '后端',
    children: [
      {
        value: 'node',
        label: 'Node.js',
        children: [
          { value: 'express', label: 'Express' },
          { value: 'koa', label: 'Koa' },
        ],
      },
    ],
  },
]
</script>
