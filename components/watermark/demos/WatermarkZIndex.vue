<template>
  <div>
    <h4>默认 zIndex（999）</h4>
    <p style="color: #666; margin-bottom: 16px">水印的默认 z-index 为 999</p>
    <Watermark content="Ant Design">
      <div style="position: relative; height: 200px; border: 1px solid #d9d9d9; padding: 16px">
        <p>这是内容区域</p>
        <div
          style="
            position: absolute;
            top: 80px;
            left: 100px;
            width: 200px;
            height: 80px;
            background: rgba(255, 77, 79, 0.8);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          "
        >
          z-index: 1000<br />（遮挡水印）
        </div>
      </div>
    </Watermark>

    <Divider />

    <h4>自定义 zIndex（1001）</h4>
    <p style="color: #666; margin-bottom: 16px">设置水印的 z-index 为 1001</p>
    <Watermark content="Ant Design" :z-index="1001">
      <div style="position: relative; height: 200px; border: 1px solid #d9d9d9; padding: 16px">
        <p>这是内容区域</p>
        <div
          style="
            position: absolute;
            top: 80px;
            left: 100px;
            width: 200px;
            height: 80px;
            background: rgba(255, 77, 79, 0.8);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          "
        >
          z-index: 1000<br />（被水印遮挡）
        </div>
      </div>
    </Watermark>
  </div>
</template>

<script setup lang="ts">
import { Watermark, Divider } from '@hmfw/ant-design'
</script>
