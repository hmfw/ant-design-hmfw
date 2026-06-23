<template>
  <Space direction="vertical" :size="16">
    <Paragraph> 这是一段普通的段落文本。Ant Design 是一套企业级 UI 设计语言和 Vue 组件库。 </Paragraph>

    <Paragraph copyable> 这段文本可以复制。点击右侧图标复制内容。 </Paragraph>

    <Paragraph :ellipsis="{ rows: 2 }">
      Ant Design 是一套致力于提升「用户」和「设计者」使用体验的企业级 UI
      设计语言。它源自蚂蚁集团中后台产品的交互语言和视觉风格，秉承高效、确定、自然、生长的设计价值观，沉淀出一套完整的设计原则与组件规范。我们相信，好的设计不仅要美观，更要在真实业务场景中经得起推敲，帮助设计者与开发者高效协作、降低沟通成本，最终交付确定、流畅且令人愉悦的产品体验。当段落内容超过指定行数时，会自动以省略号结尾，超出部分将被隐藏。
    </Paragraph>
  </Space>
</template>

<script setup lang="ts">
import { Paragraph, Space } from 'ant-design-hmfw'
</script>
