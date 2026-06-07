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
      <button>鼠标悬停触发</button>
    </Popconfirm>

    <!-- click 触发（默认） -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="click"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('click 确认')"
    >
      <button>点击触发</button>
    </Popconfirm>

    <!-- focus 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="focus"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('focus 确认')"
    >
      <button>聚焦触发</button>
    </Popconfirm>

    <!-- contextMenu 触发 -->
    <Popconfirm
      title="确定要删除吗？"
      trigger="contextMenu"
      ok-text="删除"
      cancel-text="取消"
      @confirm="() => console.log('contextMenu 确认')"
    >
      <button>右键触发</button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'
</script>
