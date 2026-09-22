<template>
  <SemanticPreview component="Carousel" :semantics="semantics" :height="280">
    <template #default="{ classNames }">
      <!-- arrows 开启（幻灯片数 > 每屏数量时才渲染左右箭头）；
           多张幻灯片 + dots 默认开启（页数 > 1 时才渲染指示器）；
           第一张为当前激活项，暴露 slideActive/dotActive -->
      <div style="width: 320px">
        <Carousel arrows :class-names="classNames">
          <div
            v-for="s in slides"
            :key="s.label"
            :style="{
              height: '160px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '18px',
              background: s.bg,
            }"
          >
            {{ s.label }}
          </div>
        </Carousel>
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Carousel } from '@hmfw/ant-design'

const slides = [
  { label: '幻灯片 1', bg: 'linear-gradient(135deg, #a78bfa, #7c3aed)' },
  { label: '幻灯片 2', bg: 'linear-gradient(135deg, #f472b6, #e11d48)' },
  { label: '幻灯片 3', bg: 'linear-gradient(135deg, #38bdf8, #0284c7)' },
]

// 与 CarouselClassNames / CarouselStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '走马灯根元素（div.hmfw-carousel）。承载整体定位与尺寸，垂直/渐显模式类名（.hmfw-carousel-vertical / -fade）作用于此，始终渲染。',
  },
  {
    name: 'list',
    desc: '可视区域容器（div.hmfw-carousel-list）。承载幻灯片可视窗口的裁剪（overflow: hidden）与自适应高度，始终渲染。',
  },
  {
    name: 'track',
    desc: '滑动轨道（div.hmfw-carousel-track）。承载所有幻灯片的横向排列与位移过渡（transform/transition），始终渲染。',
  },
  {
    name: 'slide',
    desc: '单个幻灯片（div.hmfw-carousel-slide）。承载每张幻灯片的宽度与间距，每张幻灯片各渲染一个（含循环克隆节点）。',
  },
  {
    name: 'slideActive',
    desc: '当前激活的幻灯片。与 slide 类名叠加作用于当前展示的那一张（同时带内置类 .hmfw-carousel-slide-active），仅激活项渲染此类名。',
  },
  {
    name: 'arrow',
    desc: '箭头按钮（button.hmfw-carousel-arrow，左右共用）。承载箭头的尺寸、圆角、背景与定位，仅在 arrows 开启且幻灯片数大于每屏数量时渲染（左右各一个）。',
  },
  {
    name: 'arrowLeft',
    desc: '左箭头。与 arrow 类名叠加作用于上一张按钮（同时带内置类 .hmfw-carousel-arrow-left），承载左侧定位，渲染条件同 arrow。',
  },
  {
    name: 'arrowRight',
    desc: '右箭头。与 arrow 类名叠加作用于下一张按钮（同时带内置类 .hmfw-carousel-arrow-right），承载右侧定位，渲染条件同 arrow。',
  },
  {
    name: 'dots',
    desc: '指示器容器（ul.hmfw-carousel-dots）。承载指示点列表的定位与间距，仅在 dots 开启且页数大于 1 时渲染。',
  },
  {
    name: 'dot',
    desc: '单个指示器（li）。承载每个指示点的样式，页数决定数量，渲染条件同 dots。',
  },
  {
    name: 'dotActive',
    desc: '当前激活的指示器。与 dot 类名叠加作用于当前页的指示点（同时带内置类 .hmfw-carousel-dot-active），仅激活项渲染此类名。',
  },
]
</script>
