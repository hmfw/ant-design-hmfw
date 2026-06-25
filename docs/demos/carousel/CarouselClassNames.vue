<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器圆角与阴影：</div>
      <Carousel :class-names="{ root: 'custom-root' }">
        <div class="demo-slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
          <h3>Slide 1</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
          <h3>Slide 2</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">
          <h3>Slide 3</h3>
        </div>
      </Carousel>
    </div>

    <!-- 场景 2：自定义指示器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义指示器：圆形 dots 与渐变色：</div>
      <Carousel :class-names="{ dots: 'custom-dots', dot: 'custom-dot', dotActive: 'custom-dot-active' }">
        <div class="demo-slide" style="background: linear-gradient(to right, #f857a6, #ff5858)">
          <h3>Slide 1</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(to right, #a8edea, #fed6e3)">
          <h3>Slide 2</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(to right, #ffecd2, #fcb69f)">
          <h3>Slide 3</h3>
        </div>
      </Carousel>
    </div>

    <!-- 场景 3：自定义箭头样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义箭头：渐变背景与圆形：</div>
      <Carousel
        arrows
        :class-names="{
          arrow: 'custom-arrow',
          arrowLeft: 'custom-arrow-left',
          arrowRight: 'custom-arrow-right',
        }"
      >
        <div class="demo-slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
          <h3>Slide 1</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%)">
          <h3>Slide 2</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%)">
          <h3>Slide 3</h3>
        </div>
      </Carousel>
    </div>

    <!-- 场景 4：自定义幻灯片与激活状态 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义幻灯片缩放与激活态边框：</div>
      <Carousel
        :class-names="{
          list: 'custom-list',
          slide: 'custom-slide',
          slideActive: 'custom-slide-active',
        }"
      >
        <div class="demo-slide" style="background: linear-gradient(to right, #6a11cb, #2575fc)">
          <h3>Slide 1</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(to right, #ff6a00, #ee0979)">
          <h3>Slide 2</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(to right, #00c9ff, #92fe9d)">
          <h3>Slide 3</h3>
        </div>
      </Carousel>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用 styles 内联样式控制：</div>
      <Carousel
        arrows
        :styles="{
          root: { borderRadius: '16px', overflow: 'hidden' },
          dots: { bottom: '20px' },
          dot: { opacity: 0.8 },
          arrow: { background: 'rgba(255,255,255,0.9)', color: '#1677ff' },
        }"
      >
        <div class="demo-slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
          <h3>Slide 1</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
          <h3>Slide 2</h3>
        </div>
        <div class="demo-slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">
          <h3>Slide 3</h3>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'
</script>

<style scoped>
.demo-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  color: white;
  font-size: 24px;
}

.demo-slide h3 {
  margin: 0;
}

/* 场景 1：自定义根容器 */
:deep(.custom-root) {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s;
}

:deep(.custom-root:hover) {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

/* 场景 2：自定义指示器 */
:deep(.custom-dots) {
  gap: 10px;
  bottom: 16px;
}

:deep(.custom-dot button) {
  width: 12px !important;
  height: 12px !important;
  border-radius: 50% !important;
  background: rgba(255, 255, 255, 0.4) !important;
  transition: all 0.3s !important;
}

:deep(.custom-dot:hover button) {
  background: rgba(255, 255, 255, 0.7) !important;
  transform: scale(1.2);
}

:deep(.custom-dot-active button) {
  width: 12px !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  transform: scale(1.4);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.5);
}

/* 场景 3：自定义箭头 */
:deep(.custom-arrow) {
  width: 48px !important;
  height: 48px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  opacity: 0.9 !important;
  transition: all 0.3s !important;
  font-size: 24px !important;
}

:deep(.custom-arrow:hover) {
  opacity: 1 !important;
  transform: translateY(-50%) scale(1.1) !important;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.custom-arrow-left) {
  left: 16px;
}

:deep(.custom-arrow-right) {
  right: 16px;
}

/* 场景 4：自定义幻灯片 */
:deep(.custom-list) {
  padding: 8px;
}

:deep(.custom-slide) {
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  opacity: 0.7;
  transform: scale(0.95);
}

:deep(.custom-slide-active) {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
</style>
