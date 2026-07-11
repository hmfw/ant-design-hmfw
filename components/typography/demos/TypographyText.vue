<template>
  <Space direction="vertical">
    <Text>默认文本</Text>
    <Text type="secondary"> 次要文本 </Text>
    <Text type="success"> 成功文本 </Text>
    <Text type="warning"> 警告文本 </Text>
    <Text type="danger"> 危险文本 </Text>
    <Text disabled> 禁用文本 </Text>
  </Space>
</template>

<script setup lang="ts">
import { Text, Space } from '@hmfw/ant-design'
</script>
