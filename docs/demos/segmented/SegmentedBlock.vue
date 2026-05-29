<template>
  <Segmented v-model:value="value" :options="options" block />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Map')
const options = ['Map', 'Transit', 'Satellite']
</script>
