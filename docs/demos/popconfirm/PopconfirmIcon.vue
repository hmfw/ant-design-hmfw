<template>
  <div style="display: flex; gap: 16px">
    <!-- 自定义图标 -->
    <Popconfirm title="确定要删除吗？" icon="🗑️" ok-text="删除" cancel-text="取消">
      <Button>自定义图标</Button>
    </Popconfirm>

    <!-- 使用插槽自定义图标 -->
    <Popconfirm title="确定要继续吗？" ok-text="继续" cancel-text="取消">
      <template #icon>
        <span style="color: #1890ff; font-size: 16px">ℹ️</span>
      </template>
      <Button>插槽图标</Button>
    </Popconfirm>

    <!-- 无图标 -->
    <Popconfirm title="确定要提交吗？" :icon="''" ok-text="提交" cancel-text="取消">
      <Button>无图标</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from 'ant-design-hmfw'
</script>
