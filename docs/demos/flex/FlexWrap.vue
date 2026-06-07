<template>
  <Flex wrap gap="small" style="max-width: 400px">
    <div v-for="i in 12" :key="i" style="background: #1677ff; color: #fff; padding: 8px 16px; border-radius: 4px">
      item {{ i }}
    </div>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from 'ant-design-hmfw'
</script>
