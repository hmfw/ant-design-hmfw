# Icon 图标

语义化的矢量图形，用于展示常用的操作和状态。

<script setup>
import IconBasic from '../demos/icon/IconBasic.vue'
import IconBasicSource from '../demos/icon/IconBasic.vue?raw'
import IconSize from '../demos/icon/IconSize.vue'
import IconSizeSource from '../demos/icon/IconSize.vue?raw'
import IconColor from '../demos/icon/IconColor.vue'
import IconColorSource from '../demos/icon/IconColor.vue?raw'
import IconSpin from '../demos/icon/IconSpin.vue'
import IconSpinSource from '../demos/icon/IconSpin.vue?raw'
</script>

## 何时使用

- 需要展示操作图标时
- 需要展示状态图标时
- 需要展示品牌图标时

## 代码演示

### 基础用法

展示内置的图标类型。

<DemoBlock title="基础用法" :source="IconBasicSource">
  <IconBasic />
</DemoBlock>

### 图标尺寸

通过 `size` 属性设置图标大小。

<DemoBlock title="图标尺寸" :source="IconSizeSource">
  <IconSize />
</DemoBlock>

### 图标颜色

通过 `color` 属性设置图标颜色。

<DemoBlock title="图标颜色" :source="IconColorSource">
  <IconColor />
</DemoBlock>

### 旋转动画

通过 `spin` 属性让图标旋转。

<DemoBlock title="旋转动画" :source="IconSpinSource">
  <IconSpin />
</DemoBlock>

## API

### Icon Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 图标类型 | `'search' \| 'close' \| 'check' \| 'warning' \| 'info' \| 'loading' \| 'up' \| 'down' \| 'left' \| 'right' \| 'plus' \| 'minus' \| 'edit' \| 'delete' \| 'eye' \| 'home' \| 'user' \| 'setting'` | - |
| size | 图标大小 | `number` | `16` |
| color | 图标颜色 | `string` | - |
| spin | 是否旋转 | `boolean` | `false` |
