<template>
  <div>
    <Paragraph copyable> 这段文字可以复制。 </Paragraph>
    <Paragraph :copyable="{ text: '自定义复制内容' }"> 显示文字与复制内容不同。 </Paragraph>
    <Text copyable> 行内可复制文本 </Text>
  </div>
</template>

<script setup lang="ts">
import { Paragraph, Text } from 'ant-design-hmfw'
</script>
