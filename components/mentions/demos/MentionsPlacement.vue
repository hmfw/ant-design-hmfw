<template>
  <Space direction="vertical" style="width: 100%; margin-top: 200px">
    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">向上展开</div>
      <Mentions :options="options" placement="top" placeholder="输入 @ 向上展开下拉菜单" />
    </div>

    <div>
      <div style="margin-bottom: 8px; color: rgba(0, 0, 0, 0.85)">向下展开（默认）</div>
      <Mentions :options="options" placement="bottom" placeholder="输入 @ 向下展开下拉菜单" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Space, Mentions } from '@hmfw/ant-design'

const options = [
  { value: 'alice', label: 'Alice' },
  { value: 'bob', label: 'Bob' },
  { value: 'charlie', label: 'Charlie' },
  { value: 'dave', label: 'Dave' },
]
</script>
