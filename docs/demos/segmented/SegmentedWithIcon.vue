<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Segmented v-model:value="value" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { UserOutlined, SettingOutlined, HomeOutlined } from 'ant-design-hmfw'

const value = ref('home')
const options = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }), tooltip: 'Home Page' },
  { value: 'user', icon: h(Icon, { component: UserOutlined }), tooltip: 'User Profile' },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }), tooltip: 'Settings' },
]
</script>
