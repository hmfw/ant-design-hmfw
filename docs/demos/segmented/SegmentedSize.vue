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
import { Segmented, Icon } from 'ant-design-hmfw'
import { UserOutlined, SettingOutlined, HomeOutlined } from 'ant-design-hmfw'

const value1 = ref('Daily')
const options1 = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']

const value2 = ref('list')
const options2 = [
  { label: 'List', value: 'list', icon: h(Icon, { component: UserOutlined }) },
  { label: 'Grid', value: 'grid', icon: h(Icon, { component: SettingOutlined }) },
]

const value3 = ref('home')
const options3 = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }), tooltip: 'Home' },
  { value: 'user', icon: h(Icon, { component: UserOutlined }), tooltip: 'User' },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }), tooltip: 'Settings' },
]

const value4 = ref('a')
const options4 = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]
</script>
