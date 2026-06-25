<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <!-- 异步确认 -->
    <Popconfirm
      title="确定要提交吗？"
      description="提交后将发送到服务器"
      ok-text="提交"
      cancel-text="取消"
      :ok-button-props="{ loading: loading1 }"
      @confirm="handleAsyncConfirm"
    >
      <Button>异步提交</Button>
    </Popconfirm>

    <!-- 禁用按钮 -->
    <Popconfirm title="确定要执行吗？" ok-text="确定" cancel-text="取消" :ok-button-props="{ disabled: true }">
      <Button>确定按钮禁用</Button>
    </Popconfirm>

    <!-- 自定义按钮属性 -->
    <Popconfirm
      title="确定要删除吗？"
      ok-type="danger"
      ok-text="强制删除"
      cancel-text="取消"
      :ok-button-props="{ loading: loading2 }"
      :cancel-button-props="{ disabled: loading2 }"
      @confirm="handleForceDelete"
    >
      <Button>强制删除</Button>
    </Popconfirm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Popconfirm, Button } from '@hmfw/ant-design'

const loading1 = ref(false)
const loading2 = ref(false)

function handleAsyncConfirm() {
  loading1.value = true
  // 模拟异步操作
  setTimeout(() => {
    console.log('提交成功')
    loading1.value = false
  }, 2000)
}

function handleForceDelete() {
  loading2.value = true
  // 模拟异步删除
  setTimeout(() => {
    console.log('删除成功')
    loading2.value = false
  }, 2000)
}
</script>
