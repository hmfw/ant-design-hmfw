<template>
  <Steps size="small" :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: '第一步' },
  { title: '第二步' },
  { title: '第三步' },
]
</script>
