<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <!-- hover 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="hover"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('hover 确认')"
    >
      <Button>鼠标悬停触发</Button>
    </Popconfirm>

    <!-- click 触发（默认） -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="click"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('click 确认')"
    >
      <Button>点击触发</Button>
    </Popconfirm>

    <!-- focus 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="focus"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('focus 确认')"
    >
      <Button>聚焦触发</Button>
    </Popconfirm>

    <!-- contextMenu 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="contextMenu"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('contextMenu 确认')"
    >
      <Button>右键触发</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from '@hmfw/ant-design'
</script>
