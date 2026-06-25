<template>
  <Popconfirm title="确定要删除吗？" ok-text="确定" cancel-text="取消" @confirm="onConfirm" @cancel="onCancel">
    <Button>删除</Button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm, Button } from '@hmfw/ant-design'

function onConfirm() {
  console.log('已确认删除')
}

function onCancel() {
  console.log('已取消')
}
</script>
