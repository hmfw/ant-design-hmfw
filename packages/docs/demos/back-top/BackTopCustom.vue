<template>
  <div style="height: 1000px;">
    <p>向下滚动页面，右下角会出现自定义的回到顶部按钮。</p>
    <BackTop :visibility-height="200" @click="onBackTop">
      <div style="
        width: 40px;
        height: 40px;
        background: #1677ff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 18px;
      ">↑</div>
    </BackTop>
  </div>
</template>

<script setup lang="ts">
import { BackTop } from 'ant-design-hmfw'

function onBackTop() {
  console.log('回到顶部')
}
</script>
