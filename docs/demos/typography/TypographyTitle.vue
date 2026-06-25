<template>
  <Space direction="vertical" :size="16">
    <Title :level="1"> h1. Ant Design </Title>
    <Title :level="2"> h2. Ant Design </Title>
    <Title :level="3"> h3. Ant Design </Title>
    <Title :level="4"> h4. Ant Design </Title>
    <Title :level="5"> h5. Ant Design </Title>
  </Space>
</template>

<script setup lang="ts">
import { Title, Space } from '@hmfw/ant-design'
</script>
