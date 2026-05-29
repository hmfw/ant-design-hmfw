<template>
  <Segmented v-model:value="value" :options="options" />
  <p>当前选中：{{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
</script>
