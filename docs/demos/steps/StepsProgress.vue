<template>
  <div style="padding: 20px">
    <Steps :items="items" :current="1" :percent="60" />
  </div>
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: 'Finished', content: 'This is a description' },
  { title: 'In Progress', content: 'This is a description' },
  { title: 'Waiting', content: 'This is a description' },
]
</script>
