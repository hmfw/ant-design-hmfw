<template>
  <div style="display: flex; gap: 16px">
    <Segmented v-model:value="value" :options="options" vertical />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined, HomeOutlined } from '@hmfw/icons'

const value = ref('home')
const options = [
  { value: 'home', icon: h(HomeOutlined, { class: 'hmfw-icon' }) },
  { value: 'user', icon: h(UserOutlined, { class: 'hmfw-icon' }) },
  { value: 'settings', icon: h(SettingOutlined, { class: 'hmfw-icon' }) },
]
</script>
