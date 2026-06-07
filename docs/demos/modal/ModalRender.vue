<template>
  <Button @click="open = true"> 打开自定义容器 </Button>
  <Modal v-model:open="open" title="自定义渲染容器" :modal-render="modalRender" @ok="handleOk">
    <p>这是对话框内容。</p>
    <p>外层容器已通过 modalRender 自定义渲染。</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref, h, type VNode } from 'vue'
import { Modal, Button } from 'ant-design-hmfw'

const open = ref(false)

function modalRender(node: VNode): VNode {
  // 在对话框外包裹一个自定义容器
  return h(
    'div',
    {
      style: {
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
      },
    },
    [node],
  )
}

function handleOk() {
  console.log('确认')
  open.value = false
}
</script>
