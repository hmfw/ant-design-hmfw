<template>
  <div style="padding: 16px; background: #1677ff">
    <Flex gap="small" wrap>
      <Button type="primary" ghost> Primary Ghost </Button>
      <Button ghost> Default Ghost </Button>
      <Button type="dashed" ghost> Dashed Ghost </Button>
      <Button type="primary" danger ghost> Danger Ghost </Button>
    </Flex>
  </div>
</template>

<script setup lang="ts">
import { Button, Flex } from '@hmfw/ant-design'
</script>
