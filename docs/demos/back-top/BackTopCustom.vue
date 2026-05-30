<template>
  <div style="height: 1500px; padding: 20px;">
    <p style="margin-bottom: 20px;">向下滚动页面，右下角会出现自定义的回到顶部按钮。</p>
    <p style="margin-bottom: 20px;">此示例设置 visibilityHeight 为 200px，并自定义了按钮样式。</p>
    <div v-for="i in 50" :key="i" style="margin-bottom: 10px;">
      内容行 {{ i }}
    </div>
    <BackTop :visibility-height="200" @click="onBackTop">
      <div style="
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s;
      ">
        ↑
      </div>
    </BackTop>
  </div>
</template>

<script setup lang="ts">
import { BackTop } from 'ant-design-hmfw'

function onBackTop() {
  console.log('回到顶部')
}
</script>
