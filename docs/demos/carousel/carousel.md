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

## API

### Carousel Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoplay | 是否自动切换，可指定 `autoplay.dotDuration` 显示进度条 | `boolean \| { dotDuration?: boolean }` | `false` | dotDuration: v0.2.0 |
| autoplaySpeed | 自动切换间隔（ms） | `number` | `3000` | - |
| arrows | 是否显示切换箭头 | `boolean` | `false` | v0.2.0 |
| dots | 是否显示指示点，可指定 `className` 自定义 class | `boolean \| { className?: string }` | `true` | 对象形式: v0.2.0 |
| dotPosition | 指示点位置（已废弃，推荐使用 `dotPlacement`） | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | - |
| dotPlacement | 指示点位置，`start`/`end` 替代 `left`/`right`，支持 RTL | `'top' \| 'bottom' \| 'start' \| 'end'` | `'bottom'` | v0.2.0 |
| effect | 切换效果 | `'scrollx' \| 'fade'` | `'scrollx'` | - |
| fade | 是否使用渐显过渡（优先级高于 `effect`） | `boolean` | - | v0.2.0 |
| infinite | 是否无限循环 | `boolean` | `true` | - |
| speed | 动画时长（ms） | `number` | `500` | v0.2.0 |
| easing | 过渡缓动函数 | `string` | `'ease'` | v0.2.0 |
| initialSlide | 初始 slide 索引 | `number` | `0` | v0.2.0 |
| waitForAnimate | 切换时是否等待动画完成 | `boolean` | `false` | v0.2.0 |
| prevArrow | 自定义前进箭头 | `VNode` | - | v0.2.0 |
| nextArrow | 自定义后退箭头 | `VNode` | - | v0.2.0 |
| rootClassName | 根元素 class | `string` | - | v0.2.0 |

### Carousel Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| beforeChange | 切换前回调 | `(from: number, to: number) => void` |
| afterChange | 切换后回调 | `(current: number) => void` |

### Carousel Ref 方法

通过 `ref` 可调用组件方法：

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| goTo | 跳转到指定索引 | `(slideNumber: number, dontAnimate?: boolean) => void` |
| next | 切换到下一张 | `() => void` |
| prev | 切换到上一张 | `() => void` |

## 可访问性

- 容器具有 `role="region"` 和 `aria-roledescription="carousel"`
- 每个 slide 具有 `role="group"` 和 `aria-label="N / 总数"`
- 箭头按钮具有 `aria-label="Previous/Next slide"`
- 指示点按钮具有 `aria-label="Go to slide N"`

## 注意

- 当前实现为轻量级原生版本，不依赖 react-slick
- 不支持高级特性：拖拽滑动、响应式断点、多列轮播、居中模式、懒加载等
- 需要这些高级能力时，建议直接集成第三方轮播库
