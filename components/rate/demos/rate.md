# Rate 评分

评分组件。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="RateBasicSource">
  <RateBasic />
</DemoBlock>

### 半星

通过 `allow-half` 属性支持选择半星。

<DemoBlock title="半星" :source="RateHalfStarSource">
  <RateHalfStar />
</DemoBlock>

### 自定义字符

可以将星星替换为其他字符，比如字母、数字、汉字等。

<DemoBlock title="自定义字符" :source="RateCustomSource">
  <RateCustom />
</DemoBlock>

### 提示信息

通过 `tooltips` 属性为每个星星设置提示信息。

<DemoBlock title="提示信息" :source="RateTooltipSource">
  <RateTooltip />
</DemoBlock>

### 文案展现

给评分组件加上文案展示。

<DemoBlock title="文案展现" :source="RateTextSource">
  <RateText />
</DemoBlock>

### 尺寸

通过 `size` 属性设置评分组件的尺寸，支持 `small`、`middle`（默认）、`large` 三种尺寸。

<DemoBlock title="尺寸" :source="RateSizeSource">
  <RateSize />
</DemoBlock>

### 清除评分

通过 `allow-clear` 属性控制是否允许清除评分。

<DemoBlock title="清除评分" :source="RateClearSource">
  <RateClear />
</DemoBlock>

### 自定义字符函数

`character` 属性支持传入函数，可以根据索引动态渲染不同的字符。

<DemoBlock title="自定义字符函数" :source="RateCharacterFunctionSource">
  <RateCharacterFunction />
</DemoBlock>

### 键盘操作

通过 `keyboard` 属性控制是否支持键盘操作（方向键调整评分）。

<DemoBlock title="键盘操作" :source="RateKeyboardSource">
  <RateKeyboard />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="RateClassNamesSource">
  <RateClassNames />
</DemoBlock>

## API

### Rate Props

| 参数           | 说明                                                                             | 类型                                                   | 默认值                              |
| -------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------ | ----------------------------------- |
| value(v-model) | 当前数，受控值                                                                   | `number`                                               | -                                   |
| defaultValue   | 默认值                                                                           | `number`                                               | `0`                                 |
| count          | star 总数                                                                        | `number`                                               | `5`                                 |
| allowHalf      | 是否允许半选                                                                     | `boolean`                                              | `false`                             |
| allowClear     | 是否允许再次点击后清除                                                           | `boolean`                                              | `true`                              |
| disabled       | 只读，无法进行交互                                                               | `boolean`                                              | `false`                             |
| character      | 自定义字符                                                                       | `string \| ((ctx: RateCharacterRenderContext) => any)` | `'★'`                               |
| tooltips       | 自定义每项的提示信息                                                             | `(string \| TooltipProps)[]`                           | -                                   |
| size           | 组件尺寸                                                                         | `'small' \| 'middle' \| 'large'`                       | `'middle'`（继承自 ConfigProvider） |
| keyboard       | 是否支持键盘操作                                                                 | `boolean`                                              | `true`                              |
| autoFocus      | 自动获取焦点                                                                     | `boolean`                                              | `false`                             |
| classNames     | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `RateClassNames`                                       | -                                   |
| styles         | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `RateStyles`                                           | -                                   |

### Rate Events

| 事件名       | 说明                     | 回调参数                               |
| ------------ | ------------------------ | -------------------------------------- |
| update:value | 选择时的回调             | `(value: number) => void`              |
| change       | 选择时的回调             | `(value: number) => void`              |
| hoverChange  | 鼠标经过时数值变化的回调 | `(value: number \| undefined) => void` |
| focus        | 获取焦点时的回调         | `() => void`                           |
| blur         | 失去焦点时的回调         | `() => void`                           |
| keydown      | 键盘按下时的回调         | `(event: KeyboardEvent) => void`       |

### Rate Methods

| 方法名 | 说明     | 参数 |
| ------ | -------- | ---- |
| focus  | 获取焦点 | -    |
| blur   | 失去焦点 | -    |

### RateCharacterRenderContext

| 属性  | 说明                        | 类型     |
| ----- | --------------------------- | -------- |
| index | 当前星星的索引（从 0 开始） | `number` |
| value | 当前评分值                  | `number` |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对评分组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface RateClassNames {
  root?: string // 根容器 ul.hmfw-rate
  star?: string // 星星项 li.hmfw-rate-star
  starFirst?: string // 半星前半部分 div.hmfw-rate-star-first
  starSecond?: string // 星星后半部分 div.hmfw-rate-star-second
}

interface RateStyles {
  root?: CSSProperties
  star?: CSSProperties
  starFirst?: CSSProperties
  starSecond?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<RateSemantic />

### DOM 结构与 className 映射

```html
<!-- 基础评分 -->
<ul class="hmfw-rate">
  <!-- ↑ classNames.root / styles.root -->
  <li class="hmfw-rate-star hmfw-rate-star-full">
    <!-- ↑ classNames.star / styles.star -->
    <div class="hmfw-rate-star-second">
      <!-- ↑ classNames.starSecond / styles.starSecond -->
      <span>★</span>
    </div>
  </li>
  <!-- 其他星星... -->
</ul>

<!-- 半星模式 (allowHalf) -->
<ul class="hmfw-rate">
  <!-- ↑ classNames.root / styles.root -->
  <li class="hmfw-rate-star hmfw-rate-star-half">
    <!-- ↑ classNames.star / styles.star -->
    <div class="hmfw-rate-star-first">
      <!-- ↑ classNames.starFirst / styles.starFirst -->
      <span>★</span>
    </div>
    <div class="hmfw-rate-star-second">
      <!-- ↑ classNames.starSecond / styles.starSecond -->
      <span>★</span>
    </div>
  </li>
  <!-- 其他星星... -->
</ul>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Rate v-model:value="rating" :class-names="{ root: 'custom-root', star: 'gradient-star' }" />

  <!-- styles：内联样式，优先级高于 classNames -->
  <Rate v-model:value="rating" :styles="{ root: { gap: '12px' }, star: { fontSize: '32px', color: '#ff4d4f' } }" />

  <!-- 组合：classNames 与 styles 混用 -->
  <Rate
    v-model:value="rating"
    allow-half
    :class-names="{ starFirst: 'star-first-custom', starSecond: 'star-second-custom' }"
    :styles="{ star: { fontSize: '28px' } }"
  />
</template>

<style scoped>
:deep(.gradient-star) {
  color: transparent;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s;
}

:deep(.gradient-star:hover) {
  transform: scale(1.15);
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.6));
}

:deep(.custom-root) {
  padding: 12px 16px;
  background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
  border-radius: 8px;
}

:deep(.star-first-custom) {
  color: #ff6b6b;
}

:deep(.star-second-custom) {
  color: #ffd93d;
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-rate`）合并，不会互相覆盖

## 设计 Token

Rate 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 组件专有 Token

Rate 组件提供以下专有 CSS 变量，可直接覆盖以定制样式：

| Token 名称                     | 说明             | 默认值                           |
| ------------------------------ | ---------------- | -------------------------------- |
| `--hmfw-rate-star-color`       | 星星激活颜色     | `#fadb14`                        |
| `--hmfw-rate-star-bg`          | 星星背景色       | `rgba(0, 0, 0, 0.06)`            |
| `--hmfw-rate-star-size`        | 星星尺寸（默认） | `20px` (controlHeight × 0.625)   |
| `--hmfw-rate-star-size-sm`     | 星星尺寸（小）   | `15px` (controlHeightSM × 0.625) |
| `--hmfw-rate-star-size-lg`     | 星星尺寸（大）   | `25px` (controlHeightLG × 0.625) |
| `--hmfw-rate-star-hover-scale` | 悬浮时缩放比例   | `1.1`                            |

**使用示例**：

```vue
<template>
  <!-- 通过内联样式覆盖 -->
  <Rate
    :value="3"
    :style="{
      '--hmfw-rate-star-color': '#ff6b00',
      '--hmfw-rate-star-size': '24px',
    }"
  />

  <!-- 通过 CSS 类覆盖 -->
  <Rate :value="3" class="custom-rate" />
</template>

<style>
.custom-rate {
  --hmfw-rate-star-color: #52c41a;
  --hmfw-rate-star-hover-scale: 1.2;
}
</style>
```

### 全局 Token

Rate 组件还依赖以下全局 Design Token：

| Token 名称                   | 说明         | 默认值             |
| ---------------------------- | ------------ | ------------------ |
| `--hmfw-color-fill-content`  | 填充内容色   | `rgba(0,0,0,0.06)` |
| `--hmfw-control-height`      | 标准控件高度 | `32px`             |
| `--hmfw-control-height-lg`   | 大号控件高度 | `40px`             |
| `--hmfw-control-height-sm`   | 小号控件高度 | `24px`             |
| `--hmfw-margin-xs`           | 超小间距     | `8px`              |
| `--hmfw-motion-duration-mid` | 中速动画时长 | `0.2s`             |
