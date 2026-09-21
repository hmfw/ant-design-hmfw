<template>
  <Flex gap="small" wrap>
    <Button type="primary" :icon="SearchOutlined"> Search </Button>
    <Button type="primary" :icon="SearchOutlined" />
    <Button type="primary" :icon="CheckOutlined"> Confirm </Button>
    <Button type="dashed" :icon="CloseOutlined"> Cancel </Button>
  </Flex>
</template>

<script setup lang="ts">
import { SearchOutlined, CheckOutlined, CloseOutlined } from '@hmfw/icons'
import { Button, Flex } from '@hmfw/ant-design'
</script>
