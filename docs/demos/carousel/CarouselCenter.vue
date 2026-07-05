<template>
  <div class="carousel-center-demo">
    <h4>居中模式（centerMode）</h4>
    <Carousel :slides-to-show="3" :center-mode="true" center-padding="10%" arrows>
      <div v-for="i in 7" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">居中模式 - 自定义 padding</h4>
    <Carousel :slides-to-show="1" :center-mode="true" center-padding="15%" arrows>
      <div v-for="i in 5" :key="i" class="slide-item">
        <div class="slide-content large">Slide {{ i }}</div>
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'
</script>

<style scoped>
.carousel-center-demo h4 {
  margin-bottom: 16px;
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
  font-size: 24px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s;
}

.slide-content.large {
  height: 200px;
  line-height: 200px;
  font-size: 32px;
}

:deep(.hmfw-carousel-slide-active) .slide-content {
  background: #1677ff;
  transform: scale(1.05);
}
</style>
