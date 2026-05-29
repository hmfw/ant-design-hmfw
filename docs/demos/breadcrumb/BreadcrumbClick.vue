<template>
  <Breadcrumb :items="items" />
  <p style="margin-top: 8px; color: #666;">点击了：{{ clicked }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Breadcrumb } from 'ant-design-hmfw'

const clicked = ref('无')

const items = [
  {
    title: '首页',
    onClick: () => { clicked.value = '首页' },
  },
  {
    title: '应用列表',
    onClick: () => { clicked.value = '应用列表' },
  },
  { title: '某应用' },
]
</script>
