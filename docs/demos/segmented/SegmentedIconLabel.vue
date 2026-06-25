<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value" :options="options" />
    <Segmented v-model:value="value" :options="options" size="large" />
    <Segmented v-model:value="value" :options="options" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from '@hmfw/ant-design'
import { PictureOutlined, BarsOutlined } from '@hmfw/ant-design'

const value = ref('list')
// 图标 + 文本同时存在的布局
const options = [
  { value: 'list', label: '列表', icon: h(Icon, { component: BarsOutlined }) },
  { value: 'grid', label: '网格', icon: h(Icon, { component: PictureOutlined }) },
]
</script>
