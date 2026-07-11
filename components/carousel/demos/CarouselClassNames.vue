<template>
  <div class="semantic-demo">
    <!-- ======================== classNames ======================== -->
    <section class="demo-block">
      <h4 class="demo-heading">classNames</h4>
      <p class="demo-note">
        通过 CSS 类名控制各语义槽位样式，<code>slideActive</code> / <code>dotActive</code> 会与基础类名叠加
      </p>
      <Carousel arrows :class-names="classNamesConfig">
        <div v-for="s in data" :key="s.label" class="card" :style="{ background: s.gradient }">
          <span class="card-icon">{{ s.icon }}</span>
          <span class="card-text">{{ s.label }}</span>
        </div>
      </Carousel>
    </section>

    <!-- ======================== styles ======================== -->
    <section class="demo-block">
      <h4 class="demo-heading">styles</h4>
      <p class="demo-note">
        通过内联样式控制，<code>styles.slideActive</code> 与 <code>styles.slide</code> 合并，激活态优先
      </p>
      <Carousel arrows :styles="stylesConfig">
        <div v-for="s in data" :key="s.label" class="card" :style="{ background: s.gradient }">
          <span class="card-icon">{{ s.icon }}</span>
          <span class="card-text">{{ s.label }}</span>
        </div>
      </Carousel>
    </section>

    <!-- ======================== 组合使用 ======================== -->
    <section class="demo-block">
      <h4 class="demo-heading">classNames + styles 组合</h4>
      <p class="demo-note">两者可同时使用，<code>styles</code> 内联样式优先级更高</p>
      <Carousel
        arrows
        :class-names="{ root: 'combo-root', arrow: 'combo-arrow', dots: 'combo-dots' }"
        :styles="{
          root: { boxShadow: '0 2px 12px rgb(0 0 0 / 6%)' },
          arrow: { fontSize: '18px' },
          dots: { gap: '10px' },
        }"
      >
        <div v-for="s in data" :key="s.label" class="card" :style="{ background: s.gradient }">
          <span class="card-icon">{{ s.icon }}</span>
          <span class="card-text">{{ s.label }}</span>
        </div>
      </Carousel>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'

const data = [
  { icon: '🎨', label: 'Design', gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)' },
  { icon: '⚡', label: 'Build', gradient: 'linear-gradient(135deg, #f472b6, #e11d48)' },
  { icon: '🚀', label: 'Launch', gradient: 'linear-gradient(135deg, #38bdf8, #0284c7)' },
  { icon: '✨', label: 'Polish', gradient: 'linear-gradient(135deg, #34d399, #059669)' },
]

const classNamesConfig = {
  root: 'cls-root',
  list: 'cls-list',
  slide: 'cls-slide',
  slideActive: 'cls-slide-active',
  arrow: 'cls-arrow',
  arrowLeft: 'cls-arrow-left',
  arrowRight: 'cls-arrow-right',
  dots: 'cls-dots',
  dot: 'cls-dot',
  dotActive: 'cls-dot-active',
}

const stylesConfig = {
  root: { borderRadius: '10px', overflow: 'hidden' },
  list: {},
  track: {},
  slide: { padding: '6px', opacity: '0.55', transform: 'scale(0.92)', transition: 'all .35s' },
  slideActive: { opacity: '1', transform: 'scale(1)' },
  arrow: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgb(255 255 255 / 88%)',
    color: '#475569',
    boxShadow: '0 1px 6px rgb(0 0 0 / 6%)',
    fontSize: '15px',
  },
  arrowLeft: { left: '10px' },
  arrowRight: { right: '10px' },
  dots: { bottom: '14px', gap: '8px' },
  dot: { opacity: '0.5', transition: 'all .3s' },
  dotActive: { opacity: '1', transform: 'scale(1.4)' },
}
</script>

<style scoped>
.semantic-demo {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-block {
  max-width: 600px;
}

.demo-heading {
  margin: 0 0 2px;
  font-size: 15px;
  font-weight: 600;
  color: #1e293b;
}

.demo-note {
  margin: 0 0 10px;
  font-size: 13px;
  color: #94a3b8;
  line-height: 1.5;
}

.demo-note code {
  font-size: 12px;
  padding: 0 5px;
  background: #f1f5f9;
  border-radius: 3px;
  color: #64748b;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 180px;
  color: #fff;
  border-radius: 8px;
  user-select: none;
}

.card-icon {
  font-size: 36px;
  line-height: 1;
}

.card-text {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.3px;
}

/* ======== classNames 示例的自定义样式 ======== */
:deep(.cls-root) {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgb(0 0 0 / 8%);
}

:deep(.cls-slide) {
  padding: 6px;
  opacity: 0.5;
  transform: scale(0.92);
  transition: all 0.35s;
}

:deep(.cls-slide-active) {
  opacity: 1;
  transform: scale(1);
}

:deep(.cls-arrow) {
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: rgb(255 255 255 / 88%) !important;
  box-shadow: 0 1px 6px rgb(0 0 0 / 6%);
  color: #475569 !important;
  font-size: 15px !important;
  opacity: 0 !important;
}

:deep(.cls-root:hover .cls-arrow) {
  opacity: 1 !important;
}

:deep(.cls-arrow-left) {
  left: 10px;
}

:deep(.cls-arrow-right) {
  right: 10px;
}

:deep(.cls-dots) {
  bottom: 14px;
  gap: 8px;
}

:deep(.cls-dot button) {
  width: 7px !important;
  height: 7px !important;
  border-radius: 50% !important;
  background: rgb(255 255 255 / 35%) !important;
  transition: all 0.3s !important;
}

:deep(.cls-dot-active button) {
  width: 22px !important;
  border-radius: 4px !important;
  background: #fff !important;
}

/* ======== 组合示例 ======== */
:deep(.combo-root) {
  border-radius: 10px;
  overflow: hidden;
}

:deep(.combo-arrow) {
  width: 36px !important;
  height: 36px !important;
  border-radius: 50% !important;
  background: rgb(255 255 255 / 88%) !important;
  color: #475569 !important;
  font-size: 15px !important;
  opacity: 0 !important;
}

:deep(.combo-root:hover .combo-arrow) {
  opacity: 1 !important;
}

:deep(.combo-dots) {
  bottom: 14px;
}
</style>
