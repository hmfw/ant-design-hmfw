<template>
  <Button @click="open = true">打开自定义样式对话框</Button>
  <Modal
    v-model:open="open"
    title="细粒度样式控制"
    :classNames="{
      header: 'custom-header',
      body: 'custom-body',
      footer: 'custom-footer',
    }"
    :styles="{
      header: { background: '#f0f5ff', borderRadius: '8px 8px 0 0' },
      body: { padding: '32px' },
      footer: { background: '#fafafa' },
    }"
    @ok="handleOk"
  >
    <p>通过 classNames 和 styles 可以细粒度控制对话框各部分的样式。</p>
    <p>这个例子演示了如何自定义 header、body 和 footer 的样式。</p>
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
</script>

<style scoped>
:deep(.custom-header) {
  font-weight: bold;
}

:deep(.custom-body) {
  line-height: 1.8;
}

:deep(.custom-footer) {
  padding: 16px 24px;
}
</style>

