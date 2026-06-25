<template>
  <Space direction="vertical" style="width: 100%">
    <div>small 间距</div>
    <Flex gap="small">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
    </Flex>
    <div>middle 间距</div>
    <Flex gap="middle">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
    </Flex>
    <div>large 间距</div>
    <Flex gap="large">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
    </Flex>
    <div>自定义 32px 间距</div>
    <Flex :gap="32">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px">item</div>
    </Flex>
  </Space>
</template>

<script setup lang="ts">
import { Flex, Space } from '@hmfw/ant-design'
</script>
