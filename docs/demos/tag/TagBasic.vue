<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design">Link</a>
    </Tag>
    <Tag closable @close="onClose">Tag 2</Tag>
    <Tag closable :bordered="false">Tag 3</Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'

function onClose() {
  console.log('关闭标签')
}
</script>
