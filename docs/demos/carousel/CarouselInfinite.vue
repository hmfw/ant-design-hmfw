<template>
  <div class="carousel-infinite-demo">
    <h4>无限循环 - 单项显示（原有行为）</h4>
    <Carousel infinite arrows>
      <div v-for="i in 5" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">无限循环 - 多项显示（无缝循环）</h4>
    <p style="color: #666; margin-bottom: 16px; font-size: 14px">使用克隆节点实现无缝循环，参考 Swiper 的实现方式</p>
    <Carousel :slides-to-show="3" :infinite="true" arrows>
      <div v-for="i in 6" :key="i" class="slide-item">
        <div class="slide-content">Slide {{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">无限循环 - 自动播放</h4>
    <Carousel :slides-to-show="4" :infinite="true" :autoplay="true" :autoplay-speed="2000" arrows>
      <div v-for="i in 8" :key="i" class="slide-item">
        <div class="slide-content small">{{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">无限循环 - 居中模式</h4>
    <Carousel :slides-to-show="3" :infinite="true" :center-mode="true" center-padding="15%" arrows>
      <div v-for="i in 7" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'
</script>

<style scoped>
.carousel-infinite-demo h4 {
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.88);
}

.slide-item {
  padding: 0 8px;
}

.slide-content {
  height: 160px;
  line-height: 160px;
  text-align: center;
  background: #364d79;
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s;
}

.slide-content.small {
  height: 120px;
  line-height: 120px;
  font-size: 24px;
}

:deep(.hmfw-carousel-slide-active) .slide-content {
  background: #1677ff;
}
</style>
