<template>
  <button @click="open = true">打开抽屉</button>
  <Drawer
    v-model:open="open"
    title="基础抽屉"
  >
    <p>抽屉内容</p>
    <p>抽屉内容</p>
    <p>抽屉内容</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer } from 'ant-design-hmfw'

const open = ref(false)
</script>
