<template>
  <div style="display: flex; gap: 24px; flex-wrap: wrap">
    <Popover._InternalPanelDoNotUseOrYouWillBeFired title="标题" content="这是直接内联渲染的气泡卡片面板" />
    <Popover._InternalPanelDoNotUseOrYouWillBeFired title="仅标题" placement="bottom" />
    <Popover._InternalPanelDoNotUseOrYouWillBeFired
      content="无箭头 + 自定义背景色"
      :arrow="false"
      color="#1677ff"
      :styles="{ content: { color: '#fff' } }"
    />
  </div>
</template>

<script setup lang="ts">
import { Popover } from 'ant-design-hmfw'
</script>
