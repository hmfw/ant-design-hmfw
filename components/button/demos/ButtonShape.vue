<template>
  <Flex gap="small" align="center" wrap>
    <Button type="primary" shape="circle" :icon="SearchOutlined" />
    <Button type="primary" shape="circle"> A </Button>
    <Button type="primary" shape="round"> Round </Button>
    <Button type="primary"> Default </Button>
  </Flex>
</template>

<script setup lang="ts">
import { Button, Flex } from '@hmfw/ant-design'
import { SearchOutlined } from '@hmfw/icons'
</script>
