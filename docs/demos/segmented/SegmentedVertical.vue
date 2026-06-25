<template>
  <div style="display: flex; gap: 16px">
    <Segmented v-model:value="value" :options="options" vertical />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined, HomeOutlined } from '@hmfw/ant-design'

const value = ref('home')
const options = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }) },
  { value: 'user', icon: h(Icon, { component: UserOutlined }) },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }) },
]
</script>
