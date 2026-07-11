<template>
  <Space direction="vertical" size="middle">
    <Switch v-model:checked="checked1" checked-children="开启" un-checked-children="关闭" />
    <Switch v-model:checked="checked2" checked-children="✓" un-checked-children="✗" />
    <Switch v-model:checked="checked3" checked-children="ON" un-checked-children="OFF" />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Space, Switch } from '@hmfw/ant-design'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
</script>
