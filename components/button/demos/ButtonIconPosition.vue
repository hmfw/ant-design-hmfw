<template>
  <Flex vertical gap="middle">
    <Flex gap="small">
      <Button type="primary" :icon="SearchOutlined"> Search </Button>
      <Button type="primary" :icon="SearchOutlined" icon-position="end"> Search </Button>
    </Flex>
    <Flex gap="small">
      <Button type="default" :icon="DownloadOutlined"> Download </Button>
      <Button type="default" :icon="DownloadOutlined" icon-position="end"> Download </Button>
    </Flex>
  </Flex>
</template>

<script setup lang="ts">
import { Button, Flex } from '@hmfw/ant-design'
import { SearchOutlined, DownloadOutlined } from '@hmfw/icons'
</script>
