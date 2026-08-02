<template>
  <div class="demo-container">
    <div class="demo-item">
      <h4>默认（div 容器）</h4>
      <App style="border: 1px solid #d9d9d9; padding: 16px; border-radius: 4px">
        <p style="margin: 0">默认渲染为 div 元素</p>
      </App>
    </div>

    <div class="demo-item">
      <h4>自定义（section 容器）</h4>
      <App component="section" style="border: 1px solid #1677ff; padding: 16px; border-radius: 4px">
        <p style="margin: 0">渲染为 section 元素</p>
      </App>
    </div>

    <div class="demo-item">
      <h4>无包裹（component={false}）</h4>
      <App :component="false">
        <p style="border: 1px solid #52c41a; padding: 16px; margin: 0; border-radius: 4px">
          不创建额外 DOM 节点，直接渲染子元素（Fragment）
        </p>
      </App>
    </div>
  </div>
</template>

<script setup lang="ts">
import { App } from '@hmfw/ant-design'
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-item h4 {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}
</style>
