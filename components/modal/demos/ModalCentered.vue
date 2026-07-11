<template>
  <Button @click="open = true">居中对话框</Button>
  <Modal v-model:open="open" title="居中对话框" centered @ok="open = false" @cancel="open = false">
    <p>居中展示的对话框内容</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@hmfw/ant-design'

const open = ref(false)
</script>
