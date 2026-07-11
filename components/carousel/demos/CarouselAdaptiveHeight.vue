<template>
  <div class="adaptive-height-demo">
    <h4>自适应高度（adaptiveHeight）</h4>
    <p style="color: #666; margin-bottom: 16px; font-size: 14px">
      容器高度跟随当前幻灯片的内容高度自动调整，切换时带有平滑过渡动画。
    </p>
    <Carousel adaptive-height arrows :loop="false">
      <div
        class="slide-item"
        style="
          height: 120px;
          background: #364d79;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        "
      >
        矮内容 — 120px
      </div>
      <div
        class="slide-item"
        style="
          height: 240px;
          background: #7dbcea;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        "
      >
        高内容 — 240px
      </div>
      <div
        class="slide-item"
        style="
          height: 160px;
          background: #00a0e9;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        "
      >
        中等内容 — 160px
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'
</script>

<style scoped>
.adaptive-height-demo h4 {
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.88);
}
</style>
