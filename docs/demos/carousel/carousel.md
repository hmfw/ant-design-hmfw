# Carousel 走马灯

旋转播放的幻灯片。

## 何时使用

- 当有一组平级的内容，需要轮播展示时
- 常用于图片或卡片轮播

## 代码演示

### 基础用法

默认 scrollx 滚动效果，底部显示 dots。

<DemoBlock title="基础用法" :source="CarouselBasicSource">
  <CarouselBasic />
</DemoBlock>

### 渐显效果

切换 effect 为 fade，使用渐显过渡。

<DemoBlock title="渐显效果" :source="CarouselFadeSource">
  <CarouselFade />
</DemoBlock>

### 切换箭头

设置 `arrows` 为 `true` 显示切换箭头。

<DemoBlock title="切换箭头" :source="CarouselArrowsSource">
  <CarouselArrows />
</DemoBlock>

### 自动播放进度条

设置 `autoplay.dotDuration` 为 `true`，指示点将显示进度条动画。

<DemoBlock title="自动播放进度条" :source="CarouselProgressSource">
  <CarouselProgress />
</DemoBlock>

### 多项显示

设置 `slidesToShow` 一次显示多个 slides，`slidesToScroll` 控制每次滚动的数量。

<DemoBlock title="多项显示" :source="CarouselMultipleSource">
  <CarouselMultiple />
</DemoBlock>

### 居中模式

设置 `centerMode` 为 `true`，当前激活的 slide 将居中显示，两侧露出部分其他 slides。

<DemoBlock title="居中模式" :source="CarouselCenterSource">
  <CarouselCenter />
</DemoBlock>

### 无限循环

设置 `infinite` 为 `true` 开启无限循环。使用克隆节点策略实现无缝循环（参考 Swiper loop 模块）。

<DemoBlock title="无限循环" :source="CarouselInfiniteSource">
  <CarouselInfinite />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="CarouselClassNamesSource">
  <CarouselClassNames />
</DemoBlock>

## API

### Carousel Props

| 参数           | 说明                                                                             | 类型                                     | 默认值      | 版本                |
| -------------- | -------------------------------------------------------------------------------- | ---------------------------------------- | ----------- | ------------------- |
| autoplay       | 是否自动切换，可指定 `autoplay.dotDuration` 显示进度条                           | `boolean \| { dotDuration?: boolean }`   | `false`     | dotDuration: v0.2.0 |
| autoplaySpeed  | 自动切换间隔（ms）                                                               | `number`                                 | `3000`      | -                   |
| arrows         | 是否显示切换箭头                                                                 | `boolean`                                | `false`     | v0.2.0              |
| dots           | 是否显示指示点，可指定 `className` 自定义 class                                  | `boolean \| { className?: string }`      | `true`      | 对象形式: v0.2.0    |
| dotPosition    | 指示点位置（已废弃，推荐使用 `dotPlacement`）                                    | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'`  | -                   |
| dotPlacement   | 指示点位置，`start`/`end` 替代 `left`/`right`，支持 RTL                          | `'top' \| 'bottom' \| 'start' \| 'end'`  | `'bottom'`  | v0.2.0              |
| effect         | 切换效果                                                                         | `'scrollx' \| 'fade'`                    | `'scrollx'` | -                   |
| fade           | 是否使用渐显过渡（优先级高于 `effect`）                                          | `boolean`                                | -           | v0.2.0              |
| infinite       | 是否无限循环                                                                     | `boolean`                                | `true`      | -                   |
| speed          | 动画时长（ms）                                                                   | `number`                                 | `500`       | v0.2.0              |
| easing         | 过渡缓动函数                                                                     | `string`                                 | `'ease'`    | v0.2.0              |
| initialSlide   | 初始 slide 索引                                                                  | `number`                                 | `0`         | v0.2.0              |
| waitForAnimate | 切换时是否等待动画完成                                                           | `boolean`                                | `false`     | v0.2.0              |
| prevArrow      | 自定义前进箭头                                                                   | `VNode`                                  | -           | v0.2.0              |
| nextArrow      | 自定义后退箭头                                                                   | `VNode`                                  | -           | v0.2.0              |
| adaptiveHeight | 根据当前 slide 自动调整高度                                                      | `boolean`                                | `false`     | v0.7.0              |
| slidesToShow   | 一次显示几个 slides                                                              | `number`                                 | `1`         | v0.7.0              |
| slidesToScroll | 一次滚动几个 slides                                                              | `number`                                 | `1`         | v0.7.0              |
| centerMode     | 居中模式：当前 slide 居中，两侧露出部分 slide                                    | `boolean`                                | `false`     | v0.7.0              |
| centerPadding  | 居中模式下两侧的 padding（可以是 px 或 %）                                       | `string`                                 | `'50px'`    | v0.7.0              |
| rootClassName  | 根元素 class                                                                     | `string`                                 | -           | v0.2.0              |
| classNames     | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CarouselClassNames`                     | -           | -                   |
| styles         | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `CarouselStyles`                         | -           | -                   |

### Carousel Events

| 事件名       | 说明       | 回调参数                             |
| ------------ | ---------- | ------------------------------------ |
| beforeChange | 切换前回调 | `(from: number, to: number) => void` |
| afterChange  | 切换后回调 | `(current: number) => void`          |

### Carousel Ref 方法

通过 `ref` 可调用组件方法：

| 方法名   | 说明             | 参数                                                   |
| -------- | ---------------- | ------------------------------------------------------ |
| goTo     | 跳转到指定 slide | `(slideNumber: number, dontAnimate?: boolean) => void` |
| next     | 切换到下一张     | `() => void`                                           |
| prev     | 切换到上一张     | `() => void`                                           |
| goToPage | 跳转到指定页     | `(pageNumber: number, dontAnimate?: boolean) => void`  |
| nextPage | 切换到下一页     | `() => void`                                           |
| prevPage | 切换到上一页     | `() => void`                                           |

## 可访问性

- 容器具有 `role="region"` 和 `aria-roledescription="carousel"`
- 每个 slide 具有 `role="group"` 和 `aria-label="N / 总数"`
- 箭头按钮具有 `aria-label="Previous/Next slide"`
- 指示点按钮具有 `aria-label="Go to slide N"`

## 注意

- 当前实现为轻量级原生版本，不依赖 react-slick
- 不支持高级特性：拖拽滑动、响应式断点、懒加载等
- **多项显示**（`slidesToShow > 1`）时会自动禁用 fade 效果
- **居中模式**（`centerMode`）需要设置合适的 `centerPadding` 以获得最佳视觉效果
- **无限循环**（`infinite`）实现原理：
  - 采用 **Swiper loop 模块**的克隆节点策略
  - 渲染 3 组 slides：`[原数组] + [原数组] + [原数组]`
  - 初始定位在中间组，动画滚动到克隆区域后瞬间重置
  - **循环方向**：next 按钮始终往左滑，prev 按钮始终往右滑，无论是否跨越边界
  - **Dots 数量**：多项显示时，dots 数量 = 可滚动的页面数，而非 slides 总数
    - 例如：6 个 slides，`slidesToShow=3`，`slidesToScroll=1` → 4 个 dots（页面：1-2-3, 2-3-4, 3-4-5, 4-5-6）
- 需要高级能力时，建议直接集成第三方轮播库

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对走马灯的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface CarouselClassNames {
  root?: string // 根元素
  list?: string // 可视区域容器
  track?: string // 滑动轨道
  slide?: string // 单个幻灯片
  slideActive?: string // 当前激活的幻灯片
  arrow?: string // 箭头按钮（左右共用）
  arrowLeft?: string // 左箭头
  arrowRight?: string // 右箭头
  dots?: string // 指示器容器
  dot?: string // 单个指示器
  dotActive?: string // 当前激活的指示器
}

interface CarouselStyles {
  root?: CSSProperties
  list?: CSSProperties
  track?: CSSProperties
  slide?: CSSProperties
  slideActive?: CSSProperties
  arrow?: CSSProperties
  arrowLeft?: CSSProperties
  arrowRight?: CSSProperties
  dots?: CSSProperties
  dot?: CSSProperties
  dotActive?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-carousel">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <div class="hmfw-carousel-list">
    <!-- ↑ classNames.list / styles.list 应用于此 -->

    <div class="hmfw-carousel-track">
      <!-- ↑ classNames.track / styles.track 应用于此 -->

      <div class="hmfw-carousel-slide">
        <!-- ↑ classNames.slide / styles.slide 应用于此 -->
        <!-- 幻灯片内容 -->
      </div>

      <div class="hmfw-carousel-slide hmfw-carousel-slide-active">
        <!-- ↑ classNames.slide + classNames.slideActive 叠加应用 -->
        <!-- ↑ styles.slide + styles.slideActive 合并应用 -->
        <!-- 当前激活的幻灯片内容 -->
      </div>
    </div>
  </div>

  <!-- 箭头（当 arrows=true 时） -->
  <button class="hmfw-carousel-arrow hmfw-carousel-arrow-left">
    <!-- ↑ classNames.arrow + classNames.arrowLeft 叠加应用 -->
    <!-- ↑ styles.arrow + styles.arrowLeft 合并应用 -->
  </button>

  <button class="hmfw-carousel-arrow hmfw-carousel-arrow-right">
    <!-- ↑ classNames.arrow + classNames.arrowRight 叠加应用 -->
    <!-- ↑ styles.arrow + styles.arrowRight 合并应用 -->
  </button>

  <!-- 指示器容器 -->
  <ul class="hmfw-carousel-dots">
    <!-- ↑ classNames.dots / styles.dots 应用于此 -->

    <li class="hmfw-carousel-dot">
      <!-- ↑ classNames.dot / styles.dot 应用于此 -->
      <button></button>
    </li>

    <li class="hmfw-carousel-dot hmfw-carousel-dot-active">
      <!-- ↑ classNames.dot + classNames.dotActive 叠加应用 -->
      <!-- ↑ styles.dot + styles.dotActive 合并应用 -->
      <button></button>
    </li>
  </ul>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义指示器样式 -->
  <Carousel :class-names="{ dots: 'my-dots', dotActive: 'my-active-dot' }">
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
  </Carousel>

  <!-- 自定义箭头样式 -->
  <Carousel
    arrows
    :class-names="{
      arrow: 'my-arrow',
      arrowLeft: 'my-arrow-left',
      arrowRight: 'my-arrow-right',
    }"
  >
    <div>Slide 1</div>
    <div>Slide 2</div>
  </Carousel>

  <!-- 自定义幻灯片与激活态 -->
  <Carousel
    :class-names="{
      slide: 'my-slide',
      slideActive: 'my-active-slide',
    }"
  >
    <div>Slide 1</div>
    <div>Slide 2</div>
  </Carousel>
</template>

<style scoped>
:deep(.my-dots) {
  gap: 12px;
  bottom: 20px;
}

:deep(.my-active-dot button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  border-radius: 50%;
  transform: scale(1.3);
}

:deep(.my-arrow) {
  border-radius: 50% !important;
  width: 48px !important;
  height: 48px !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

:deep(.my-arrow:hover) {
  transform: translateY(-50%) scale(1.1) !important;
}

:deep(.my-slide) {
  transition: all 0.3s;
  opacity: 0.7;
}

:deep(.my-active-slide) {
  opacity: 1;
  transform: scale(1.05);
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 内联样式控制根容器 -->
  <Carousel
    :styles="{
      root: { borderRadius: '16px', overflow: 'hidden' },
    }"
  >
    <div>Slide 1</div>
    <div>Slide 2</div>
  </Carousel>

  <!-- 自定义指示器位置与样式 -->
  <Carousel
    :styles="{
      dots: { bottom: '24px' },
      dot: { opacity: 0.8 },
      dotActive: { transform: 'scale(1.5)' },
    }"
  >
    <div>Slide 1</div>
    <div>Slide 2</div>
  </Carousel>

  <!-- 组合使用多个节点样式 -->
  <Carousel
    arrows
    :styles="{
      root: { boxShadow: '0 4px 12px rgba(0,0,0,0.15)' },
      arrow: { background: 'rgba(255,255,255,0.9)', color: '#1677ff' },
      slide: { padding: '8px' },
    }"
  >
    <div>Slide 1</div>
    <div>Slide 2</div>
  </Carousel>
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- `slideActive` / `dotActive` / `arrowLeft` / `arrowRight` 会与对应的基础 className（`slide` / `dot` / `arrow`）**叠加**应用
- `styles.slideActive` / `styles.dotActive` 会与 `styles.slide` / `styles.dot` **合并**，激活态样式优先
- 箭头按钮基于 Button 组件实现，`classNames.arrow` 会应用到 Button 的根节点
- 指示器按钮的样式通过 `classNames.dot` 应用到 `<li>` 元素，实际按钮在其内部

## 设计 Token

Carousel 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。
