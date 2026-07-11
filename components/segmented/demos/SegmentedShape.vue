<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value1" :options="options1" shape="round" />
    <Segmented v-model:value="value2" :options="options2" shape="round" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined } from '@hmfw/icons'

const value1 = ref('light')
const options1 = [
  { label: 'Light', value: 'light', icon: h(UserOutlined, { class: 'hmfw-icon' }) },
  { label: 'Dark', value: 'dark', icon: h(SettingOutlined, { class: 'hmfw-icon' }) },
]

const value2 = ref('Daily')
const options2 = ['Daily', 'Weekly', 'Monthly']
</script>
