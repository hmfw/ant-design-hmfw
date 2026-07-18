<template>
  <div>
    <h4>inherit=true（默认）</h4>
    <p style="color: #666; margin-bottom: 16px">水印会传导到 Modal 和 Drawer</p>
    <Watermark content="Ant Design" :inherit="true">
      <div style="height: 200px">
        <Button type="primary" @click="modalVisible = true">打开 Modal</Button>
        <Button style="margin-left: 8px" @click="drawerVisible = true">打开 Drawer</Button>
      </div>

      <!-- Modal 和 Drawer 必须作为 Watermark 的子元素 -->
      <Modal v-model:open="modalVisible" title="Modal 中的水印">
        <div style="height: 300px">
          <p>当 inherit=true 时，水印会自动传导到 Modal</p>
          <p>这是 Watermark 组件的核心特性之一</p>
        </div>
      </Modal>

      <Drawer v-model:open="drawerVisible" title="Drawer 中的水印" :width="400">
        <div style="height: 300px">
          <p>当 inherit=true 时，水印会自动传导到 Drawer</p>
          <p>这是 Watermark 组件的核心特性之一</p>
        </div>
      </Drawer>
    </Watermark>

    <Divider />

    <h4>inherit=false</h4>
    <p style="color: #666; margin-bottom: 16px">水印不会传导到弹出组件</p>
    <Watermark content="Ant Design" :inherit="false">
      <div style="height: 200px">
        <Button type="primary" @click="modalVisible2 = true">打开 Modal（无水印）</Button>
      </div>

      <!-- Modal 也必须作为 Watermark 的子元素 -->
      <Modal v-model:open="modalVisible2" title="无水印的 Modal">
        <div style="height: 300px">
          <p>当 inherit=false 时，水印不会传导到 Modal</p>
          <p>弹出组件内部没有水印覆盖</p>
        </div>
      </Modal>
    </Watermark>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Watermark, Button, Modal, Drawer, Divider } from '@hmfw/ant-design'

const modalVisible = ref(false)
const drawerVisible = ref(false)
const modalVisible2 = ref(false)
</script>
