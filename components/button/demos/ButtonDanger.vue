<template>
  <Flex gap="small" wrap>
    <Button type="primary" danger> Primary Danger </Button>
    <Button danger> Default Danger </Button>
    <Button type="dashed" danger> Dashed Danger </Button>
    <Button type="text" danger> Text Danger </Button>
    <Button type="link" danger> Link Danger </Button>
  </Flex>
</template>

<script setup lang="ts">
import { Button, Flex } from '@hmfw/ant-design'
</script>
