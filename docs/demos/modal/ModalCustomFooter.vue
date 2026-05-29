<template>
  <button @click="open = true">打开对话框</button>
  <Modal
    v-model:open="open"
    title="自定义页脚"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
  >
    <p>{{ modalText }}</p>
    <template #footer>
      <button @click="open = false">取消</button>
      <button @click="handleOk">确认</button>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal } from 'ant-design-hmfw'

const open = ref(false)
const confirmLoading = ref(false)
const modalText = ref('内容将在两秒后更新')

function handleOk() {
  modalText.value = '正在提交...'
  confirmLoading.value = true
  setTimeout(() => {
    open.value = false
    confirmLoading.value = false
  }, 2000)
}
</script>
