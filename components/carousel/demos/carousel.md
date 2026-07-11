# Carousel 走马灯

旋转播放的幻灯片。

## 何时使用

- 当有一组平级的内容，需要轮播展示时
- 常用于图片或卡片轮播

## 代码演示

### 基础用法

默认 scrollx 滚动效果，底部显示指示点，开启无限循环。

<DemoBlock title="基础用法" :source="CarouselBasicSource">
  <CarouselBasic />
</DemoBlock>

### 渐显效果

设置 `effect="fade"` 或 `fade` 使用渐显过渡。

<DemoBlock title="渐显效果" :source="CarouselFadeSource">
  <CarouselFade />
</DemoBlock>

### 切换箭头

设置 `arrows` 显示左右切换箭头。

<DemoBlock title="切换箭头" :source="CarouselArrowsSource">
  <CarouselArrows />
</DemoBlock>

### 等待动画完成

设置 `waitForAnimate` 为 `true`，动画进行中忽略重复点击，避免切换跳跃。

<DemoBlock title="等待动画完成" :source="CarouselWaitForAnimateSource">
  <CarouselWaitForAnimate />
</DemoBlock>

### 自动播放进度条

### 多项显示

设置 `slidesPerView` 一次显示多张，`slidesPerGroup` 控制每次滚动张数。`slidesPerView > 1` 时自动禁用 fade 效果。

<DemoBlock title="多项显示" :source="CarouselMultipleSource">
  <CarouselMultiple />
</DemoBlock>

### 自适应高度

设置 `adaptiveHeight` 为 `true`，容器高度跟随当前幻灯片内容自动调整。

<DemoBlock title="自适应高度" :source="CarouselAdaptiveHeightSource">
  <CarouselAdaptiveHeight />
</DemoBlock>

### 无限循环

基于 Swiper loop 克隆策略实现无缝循环：渲染 3 组 slides，动画跨越边界后瞬间重置到对应位置。

<DemoBlock title="无限循环" :source="CarouselInfiniteSource">
  <CarouselInfinite />
</DemoBlock>

### 语义化样式

通过 `classNames` / `styles` 对根容器、幻灯片、箭头、指示点等子节点做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="CarouselClassNamesSource">
  <CarouselClassNames />
</DemoBlock>

## API

### Carousel Props

| 参数           | 说明                                                                           | 类型                                    | 默认值      | 版本   |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------- | ----------- | ------ |
| autoplay       | 是否自动切换                                                                   | `boolean`                               | `false`     |        |
| delay          | 自动切换间隔（ms）                                                             | `number`                                | `3000`      |        |
| arrows         | 是否显示切换箭头                                                               | `boolean`                               | `false`     | v0.2.0 |
| dots           | 是否显示指示点                                                                 | `boolean`                               | `true`      |        |
| dotPlacement   | 指示点位置，`start` / `end` 替代 `left` / `right`，适配 RTL                    | `'top' \| 'bottom' \| 'start' \| 'end'` | `'bottom'`  | v0.2.0 |
| effect         | 切换效果                                                                       | `'scrollx' \| 'fade'`                   | `'scrollx'` |        |
| fade           | 是否使用渐显过渡（优先级高于 `effect`）                                        | `boolean`                               |             | v0.2.0 |
| loop           | 是否无限循环                                                                   | `boolean`                               | `true`      |        |
| speed          | 动画时长（ms）                                                                 | `number`                                | `500`       | v0.2.0 |
| easing         | 过渡缓动函数                                                                   | `string`                                | `'ease'`    | v0.2.0 |
| initialSlide   | 初始 slide 索引                                                                | `number`                                | `0`         | v0.2.0 |
| waitForAnimate | 动画进行中是否忽略操作                                                         | `boolean`                               | `false`     | v0.2.0 |
| prevArrow      | 自定义上一张箭头                                                               | `VNode`                                 |             | v0.2.0 |
| nextArrow      | 自定义下一张箭头                                                               | `VNode`                                 |             | v0.2.0 |
| adaptiveHeight | 根据当前 slide 高度自适应                                                      | `boolean`                               | `false`     | v0.7.0 |
| slidesPerView  | 同时显示的 slide 数量                                                          | `number`                                | `1`         | v0.7.0 |
| slidesPerGroup | 每次滚动的 slide 数量                                                          | `number`                                | `1`         | v0.7.0 |
| spaceBetween   | slide 间距（px），仅 `slidesPerView > 1` 生效                                  | `number`                                | `0`         |        |
| classNames     | 语义化类名，见下方 [语义化 className 与 style](#语义化-classname-与-style)     | `CarouselClassNames`                    |             |        |
| styles         | 语义化内联样式，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CarouselStyles`                        |             |        |

### Carousel Events

| 事件名       | 说明           | 回调参数                             |
| ------------ | -------------- | ------------------------------------ |
| beforeChange | 切换前触发     | `(from: number, to: number) => void` |
| afterChange  | 切换完成时触发 | `(current: number) => void`          |

### Carousel Ref 方法

通过 `ref` 调用组件暴露的方法：

| 方法名   | 说明             | 签名                                             |
| -------- | ---------------- | ------------------------------------------------ |
| goTo     | 跳转到指定 slide | `(slide: number, dontAnimate?: boolean) => void` |
| next     | 切换到下一组     | `() => void`                                     |
| prev     | 切换到上一组     | `() => void`                                     |
| goToPage | 跳转到指定页     | `(page: number, dontAnimate?: boolean) => void`  |
| nextPage | 切换到下一页     | `() => void`                                     |
| prevPage | 切换到上一页     | `() => void`                                     |

> `next` / `prev` 按 `slidesPerGroup` 步长切换；`nextPage` / `prevPage` 按页切换，等价于 `goToPage(currentPage ± 1)`。

## 可访问性

| 元素       | ARIA 属性                                                                 |
| ---------- | ------------------------------------------------------------------------- |
| 根容器     | `role="region"` `aria-roledescription="carousel"` `aria-label="Carousel"` |
| 幻灯片     | `role="group"` `aria-roledescription="slide"` `aria-label="N / 总数"`     |
| 箭头按钮   | `aria-label="Previous page"` / `"Next page"`                              |
| 指示点按钮 | `aria-label="Go to page N"`                                               |

## 行为说明

- **fade + 多项显示**：`slidesPerView > 1` 时强制使用 `scrollx`，`fade` 不生效
- **无限循环**：
  - 采用三组克隆策略：`[原数组, 原数组, 原数组]`
  - 始终定位在中间组，动画跨越边界后瞬间无动画重置
  - next 始终左滑、prev 始终右滑，不受边界影响
- **dots 数量**：多项显示时 = 可滚动页数，非 slide 总数
  - 例：6 slides, `slidesPerView=3`, `slidesPerGroup=1` → 4 个 dots（页面：1-3, 2-4, 3-5, 4-6）
- **spaceBetween**：仅非 fade 模式 + `slidesPerView > 1` 时生效，通过 CSS `gap` + `calc()` 补偿实现

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 对走马灯各子节点做细粒度控制，class 叠加、style 合并，激活态优先。

### 类型定义

```typescript
interface CarouselClassNames {
  root?: string // 根元素
  list?: string // 可视区域
  track?: string // 滑动轨道
  slide?: string // 幻灯片
  slideActive?: string // 激活的幻灯片（与 slide 叠加）
  arrow?: string // 箭头按钮（左右共用）
  arrowLeft?: string // 左箭头（与 arrow 叠加）
  arrowRight?: string // 右箭头（与 arrow 叠加）
  dots?: string // 指示器容器
  dot?: string // 指示点
  dotActive?: string // 激活的指示点（与 dot 叠加）
}

interface CarouselStyles {
  root?: CSSProperties
  list?: CSSProperties
  track?: CSSProperties
  slide?: CSSProperties
  slideActive?: CSSProperties // 与 slide 合并，本对象优先
  arrow?: CSSProperties
  arrowLeft?: CSSProperties // 与 arrow 合并，本对象优先
  arrowRight?: CSSProperties
  dots?: CSSProperties
  dot?: CSSProperties
  dotActive?: CSSProperties // 与 dot 合并，本对象优先
}
```

### DOM 结构映射

```
hmfw-carousel                    ← root
├── hmfw-carousel-list           ← list
│   └── hmfw-carousel-track      ← track
│       ├── hmfw-carousel-slide                    ← slide
│       └── hmfw-carousel-slide  hmfw-carousel-slide-active  ← slide + slideActive
├── hmfw-carousel-arrow hmfw-carousel-arrow-left   ← arrow + arrowLeft
├── hmfw-carousel-arrow hmfw-carousel-arrow-right  ← arrow + arrowRight
└── hmfw-carousel-dots                             ← dots
    ├── hmfw-carousel-dot                          ← dot
    └── hmfw-carousel-dot hmfw-carousel-dot-active ← dot + dotActive
```

### 使用示例

```vue
<template>
  <!-- classNames：自定义指示点与激活态 -->
  <Carousel :class-names="{ dots: 'my-dots', dot: 'my-dot', dotActive: 'my-dot-active' }">
    <div>Slide 1</div>
    <div>Slide 2</div>
  </Carousel>

  <!-- styles：内联样式控制箭头 -->
  <Carousel
    arrows
    :styles="{
      arrow: { borderRadius: '50%', background: 'rgba(255,255,255,.9)' },
      slide: { padding: '8px' },
    }"
  >
    <div>Slide 1</div>
    <div>Slide 2</div>
  </Carousel>
</template>

<style scoped>
:deep(.my-dots) {
  gap: 10px;
  bottom: 16px;
}
:deep(.my-dot button) {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
:deep(.my-dot-active button) {
  background: #1677ff;
  transform: scale(1.3);
}
</style>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，冲突时 `styles` 优先
- 带 `Active` / `Left` / `Right` 后缀的槽位会与基础槽位**叠加**：`arrow` + `arrowLeft` 同时应用
- 箭头基于 Button 组件实现，`arrow` class 应用到 Button 根节点
- 指示点通过 `<li>` 承载 `dot` class，内部 `<button>` 需用 `:deep(.xxx button)` 选中

## 设计 Token

Carousel 暂未接入 Design Token 系统，样式硬编码实现。建议通过 `classNames` / `styles` 做主题定制。
