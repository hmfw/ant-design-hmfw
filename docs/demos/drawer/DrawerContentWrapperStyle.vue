<template>
  <div>
    <a-button type="primary" @click="open = true"> 打开抽屉 </a-button>
    <a-drawer
      v-model:open="open"
      title="自定义内容包裹层样式"
      placement="right"
      :content-wrapper-style="{
        backgroundColor: '#f0f2f5',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
      }"
    >
      <div style="padding: 20px; background: white; border-radius: 8px">
        <p>通过 <code>contentWrapperStyle</code> 属性可以自定义内容包裹层的样式。</p>
        <p>这对于需要特殊视觉效果的场景很有用，比如：</p>
        <ul>
          <li>修改背景色</li>
          <li>添加阴影效果</li>
          <li>调整边框样式</li>
          <li>自定义圆角</li>
        </ul>
      </div>
    </a-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>
