<template>
  <Flex vertical gap="small" align="flex-start">
    <Flex gap="small">
      <Button type="primary" href="https://ant.design" target="_blank"> Link Button </Button>
      <Button type="link" href="https://ant.design" target="_blank"> Link Type </Button>
    </Flex>
    <Button type="primary" href="https://ant.design" disabled> Disabled Link </Button>
  </Flex>
</template>

<script setup lang="ts">
import { Button, Flex } from '@hmfw/ant-design'
</script>
