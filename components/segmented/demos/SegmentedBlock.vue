<template>
  <Segmented v-model:value="value" :options="options" block />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

const value = ref('Map')
const options = ['Map', 'Transit', 'Satellite']
</script>
