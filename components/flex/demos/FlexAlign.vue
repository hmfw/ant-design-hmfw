<template>
  <Space direction="vertical" style="width: 100%">
    <div>align="flex-start"</div>
    <Flex align="flex-start" gap="small" style="height: 80px; background: #f5f5f5; padding: 8px">
      <div style="background: #1677ff; color: #fff; padding: 4px 8px">item 1</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #1677ff; color: #fff; padding: 16px 32px">item 3</div>
    </Flex>

    <div>align="center"</div>
    <Flex align="center" gap="small" style="height: 80px; background: #f5f5f5; padding: 8px">
      <div style="background: #52c41a; color: #fff; padding: 4px 8px">item 1</div>
      <div style="background: #52c41a; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #52c41a; color: #fff; padding: 16px 32px">item 3</div>
    </Flex>

    <div>align="flex-end"</div>
    <Flex align="flex-end" gap="small" style="height: 80px; background: #f5f5f5; padding: 8px">
      <div style="background: #faad14; color: #fff; padding: 4px 8px">item 1</div>
      <div style="background: #faad14; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #faad14; color: #fff; padding: 16px 32px">item 3</div>
    </Flex>

    <div>align="baseline"</div>
    <Flex align="baseline" gap="small" style="height: 80px; background: #f5f5f5; padding: 8px">
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px; font-size: 12px">small</div>
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px; font-size: 16px">medium</div>
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px; font-size: 20px">large</div>
    </Flex>

    <div>align="stretch"</div>
    <Flex align="stretch" gap="small" style="height: 80px; background: #f5f5f5; padding: 8px">
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 1</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 2</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px">item 3</div>
    </Flex>
  </Space>
</template>

<script setup lang="ts">
import { Flex, Space } from '@hmfw/ant-design'
</script>
