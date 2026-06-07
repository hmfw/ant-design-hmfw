<template>
  <Space direction="vertical" style="width: 100%">
    <Flex justify="flex-start" align="center" gap="small">
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 1</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 3</div>
    </Flex>
    <Flex justify="center" align="center" gap="small">
      <div style="background: #52c41a; color: #fff; padding: 8px 16px">item 1</div>
      <div style="background: #52c41a; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #52c41a; color: #fff; padding: 8px 16px">item 3</div>
    </Flex>
    <Flex justify="flex-end" align="center" gap="small">
      <div style="background: #faad14; color: #fff; padding: 8px 16px">item 1</div>
      <div style="background: #faad14; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #faad14; color: #fff; padding: 8px 16px">item 3</div>
    </Flex>
    <Flex justify="space-between" align="center">
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px">item 1</div>
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px">item 3</div>
    </Flex>
  </Space>
</template>

<script setup lang="ts">
import { Flex, Space } from 'ant-design-hmfw'
</script>
