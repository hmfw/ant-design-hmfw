<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value1" :options="options1" shape="round" />
    <Segmented v-model:value="value2" :options="options2" shape="round" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined } from '@hmfw/ant-design'

const value1 = ref('light')
const options1 = [
  { label: 'Light', value: 'light', icon: h(Icon, { component: UserOutlined }) },
  { label: 'Dark', value: 'dark', icon: h(Icon, { component: SettingOutlined }) },
]

const value2 = ref('Daily')
const options2 = ['Daily', 'Weekly', 'Monthly']
</script>
