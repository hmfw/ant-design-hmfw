<template>
  <Pagination simple :total="50" v-model:current="current" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'ant-design-hmfw'

const current = ref(1)
</script>
