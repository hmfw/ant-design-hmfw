<template>
  <Space :size="24">
    <FloatButton
      href="https://github.com/ant-design/ant-design"
      target="_blank"
      :icon="GithubOutlined"
      tooltip="访问 GitHub"
      :style="s"
    />
    <FloatButton href="https://ant.design" target="_blank" type="primary" shape="square" content="官网" :style="s" />
    <FloatButton href="#float-button" :icon="LinkOutlined" tooltip="锚点跳转" :style="s" />
  </Space>
</template>

<script setup lang="ts">
import { FloatButton, Space } from '@hmfw/ant-design'
import { GithubOutlined, LinkOutlined } from '@hmfw/icons'

const s = { position: 'static' } as const
</script>
