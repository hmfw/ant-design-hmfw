<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value1" :options="options1" />
    <Segmented v-model:value="value2" :options="options2" />
    <Segmented v-model:value="value3" :options="options3" size="large" />
    <Segmented v-model:value="value4" :options="options4" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined, HomeOutlined } from '@hmfw/icons'

const value1 = ref('Daily')
const options1 = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']

const value2 = ref('list')
const options2 = [
  { label: 'List', value: 'list', icon: h(UserOutlined, { class: 'hmfw-icon' }) },
  { label: 'Grid', value: 'grid', icon: h(SettingOutlined, { class: 'hmfw-icon' }) },
]

const value3 = ref('home')
const options3 = [
  { value: 'home', icon: h(HomeOutlined, { class: 'hmfw-icon' }), tooltip: 'Home' },
  { value: 'user', icon: h(UserOutlined, { class: 'hmfw-icon' }), tooltip: 'User' },
  { value: 'settings', icon: h(SettingOutlined, { class: 'hmfw-icon' }), tooltip: 'Settings' },
]

const value4 = ref('a')
const options4 = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]
</script>
