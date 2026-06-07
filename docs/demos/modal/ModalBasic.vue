<template>
  <Button @click="open = true">打开对话框</Button>
  <Modal v-model:open="open" title="基础对话框" @ok="handleOk" @cancel="handleCancel">
    <p>对话框内容</p>
    <p>对话框内容</p>
    <p>对话框内容</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from 'ant-design-hmfw'

const open = ref(false)

function handleOk() {
  console.log('确认')
  open.value = false
}

function handleCancel() {
  console.log('取消')
  open.value = false
}
</script>
