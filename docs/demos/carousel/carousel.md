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

## API

### Carousel Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否自动切换 | `boolean` | `false` |
| autoplaySpeed | 自动切换间隔（ms） | `number` | `3000` |
| dots | 是否显示指示点 | `boolean` | `true` |
| dotPosition | 指示点位置 | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` |
| effect | 切换效果 | `'scrollx' \| 'fade'` | `'scrollx'` |
| infinite | 是否无限循环 | `boolean` | `true` |

### Carousel Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| beforeChange | 切换前回调 | `(from: number, to: number) => void` |
| afterChange | 切换后回调 | `(current: number) => void` |
