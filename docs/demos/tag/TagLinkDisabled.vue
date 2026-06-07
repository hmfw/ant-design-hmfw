<template>
  <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap">
    <Tag href="https://ant.design" target="_blank"> 链接标签 </Tag>
    <Tag disabled> 禁用标签 </Tag>
    <Tag disabled closable> 禁用且不可关闭 </Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'
</script>
