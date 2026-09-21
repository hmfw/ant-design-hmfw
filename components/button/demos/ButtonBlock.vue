<template>
  <Flex vertical gap="small" style="width: 100%">
    <Button type="primary" block> Primary Block </Button>
    <Button block> Default Block </Button>
    <Button type="dashed" block> Dashed Block </Button>
    <Button disabled block> Disabled Block </Button>
    <Button type="text" block> Text Block </Button>
    <Button type="link" block> Link Block </Button>
  </Flex>
</template>

<script setup lang="ts">
import { Button, Flex } from '@hmfw/ant-design'
</script>
