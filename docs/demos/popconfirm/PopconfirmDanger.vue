<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <!-- 危险操作 - 使用 danger 简写 -->
    <Popconfirm
      title="确定要删除吗？"
      description="删除后数据将无法恢复"
      ok-type="danger"
      ok-text="删除"
      cancel-text="取消"
      @confirm="onConfirm"
    >
      <Button>删除（danger）</Button>
    </Popconfirm>

    <!-- 普通主题 -->
    <Popconfirm title="确定要保存吗？" ok-type="primary" ok-text="保存" cancel-text="取消" @confirm="onConfirm">
      <Button>保存（primary）</Button>
    </Popconfirm>

    <!-- 默认主题 -->
    <Popconfirm title="确定要继续吗？" ok-type="default" ok-text="继续" cancel-text="取消" @confirm="onConfirm">
      <Button>继续（default）</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from '@hmfw/ant-design'

function onConfirm() {
  console.log('已确认操作')
}
</script>
