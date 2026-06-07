<template>
  <Popconfirm title="确定要删除吗？" ok-text="确定" cancel-text="取消" @confirm="onConfirm" @cancel="onCancel">
    <button>删除</button>
  </Popconfirm>
</template>

<script setup lang="ts">
import { Popconfirm } from 'ant-design-hmfw'

function onConfirm() {
  console.log('已确认删除')
}

function onCancel() {
  console.log('已取消')
}
</script>
