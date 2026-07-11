<template>
  <div class="carousel-multiple-demo">
    <h4>一次显示 3 个（slidesPerView: 3）</h4>
    <Carousel :slides-per-view="3" :space-between="20" arrows>
      <div v-for="i in 9" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">一次显示 3 个，每次滚动 3 个</h4>
    <Carousel :slides-per-view="3" :slides-per-group="3" :space-between="16" arrows>
      <div v-for="i in 9" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>

    <h4 style="margin-top: 32px">一次显示 4 个，每次滚动 2 个</h4>
    <Carousel :slides-per-view="4" :slides-per-group="2" :space-between="10" arrows>
      <div v-for="i in 12" :key="i" class="slide-item">
        <div class="slide-content">{{ i }}</div>
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'
</script>

<style scoped>
.carousel-multiple-demo h4 {
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
}
</style>
