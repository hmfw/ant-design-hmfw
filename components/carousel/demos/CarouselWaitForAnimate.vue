<template>
  <div class="wait-for-animate-demo">
    <h4>等待动画完成（waitForAnimate）</h4>
    <p style="color: #666; margin-bottom: 16px; font-size: 14px">
      开启 <code>waitForAnimate</code> 后，动画进行中时重复点击不会触发切换，防止动画跳跃或跳跃式前进。
    </p>
    <Carousel wait-for-animate arrows :speed="800">
      <div
        class="slide-item"
        style="
          height: 160px;
          background: #364d79;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        "
      >
        Slide 1
      </div>
      <div
        class="slide-item"
        style="
          height: 160px;
          background: #7dbcea;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        "
      >
        Slide 2
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
          font-size: 24px;
        "
      >
        Slide 3
      </div>
      <div
        class="slide-item"
        style="
          height: 160px;
          background: #1890ff;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        "
      >
        Slide 4
      </div>
      <div
        class="slide-item"
        style="
          height: 160px;
          background: #6c5ce7;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        "
      >
        Slide 5
      </div>
    </Carousel>

    <div
      style="margin-top: 12px; padding: 8px 12px; background: #f6f8fa; border-radius: 6px; font-size: 13px; color: #666"
    >
      💡 快速连续点击箭头按钮，观察只有在当前动画完成后才会响应下一次点击。
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'
</script>

<style scoped>
.wait-for-animate-demo h4 {
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.88);
}
</style>
