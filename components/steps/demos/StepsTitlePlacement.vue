<template>
  <Space direction="vertical" style="width: 100%" size="large">
    <!-- 默认：标签水平放置（标题在图标右侧） -->
    <div>
      <h4 style="margin-top: 0">默认标签水平放置：<code>titlePlacement="horizontal"</code>（默认值）</h4>
      <Steps :current="1" :items="items" />
    </div>

    <!-- 标签垂直放置（标题在图标下方） -->
    <div>
      <h4 style="margin-top: 0">
        标签垂直放置：<code>titlePlacement="vertical"</code>，配合 <code>ellipsis</code> 省略过长文本
      </h4>
      <Steps :current="1" :items="items" title-placement="vertical" ellipsis />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Steps, Space } from '@hmfw/ant-design'

const items = [
  {
    title: 'Finished',
    subTitle: 'This is a subtitle',
    content: 'This is a description.',
  },
  {
    title: 'In Progress',
    subTitle: 'This is a longer subtitle text',
    content: 'This is a description of the current step.',
  },
  {
    title: 'Waiting',
    subTitle: 'Waiting for action',
    content: 'This step is waiting to be processed.',
  },
]
</script>
