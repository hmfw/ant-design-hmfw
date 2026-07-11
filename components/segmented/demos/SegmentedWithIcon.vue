<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined, HomeOutlined } from '@hmfw/icons'

const value = ref('home')
const options = [
  { value: 'home', icon: h(HomeOutlined, { class: 'hmfw-icon' }), tooltip: 'Home Page' },
  { value: 'user', icon: h(UserOutlined, { class: 'hmfw-icon' }), tooltip: 'User Profile' },
  { value: 'settings', icon: h(SettingOutlined, { class: 'hmfw-icon' }), tooltip: 'Settings' },
]
</script>
