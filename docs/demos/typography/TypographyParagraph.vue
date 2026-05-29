<template>
  <Space direction="vertical" :size="16">
    <Paragraph>
      这是一段普通的段落文本。Ant Design 是一套企业级 UI 设计语言和 React 组件库。
    </Paragraph>

    <Paragraph copyable>
      这段文本可以复制。点击右侧图标复制内容。
    </Paragraph>

    <Paragraph :ellipsis="{ rows: 2 }">
      这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。
      这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。
      这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。
    </Paragraph>
  </Space>
</template>

<script setup lang="ts">
import { Paragraph, Space } from 'ant-design-hmfw'
</script>
