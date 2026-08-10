# ColorPicker 颜色选择器

提供颜色选取的组件。

## 何时使用

- 需要用户选择颜色时，如主题配置、图表颜色等

## 代码演示

### 基础用法

点击色块打开颜色面板，支持拖拽选色和 HEX 输入。

<DemoBlock title="基础用法" :source="ColorPickerBasicSource">
  <ColorPickerBasic />
</DemoBlock>

### 三种尺寸

通过 `size` 设置触发器大小，可选 `small`、`middle`、`large`。

<DemoBlock title="三种尺寸" :source="ColorPickerSizeSource">
  <ColorPickerSize />
</DemoBlock>

### 禁用状态

设置 `disabled` 后触发器不可交互，面板无法打开。

<DemoBlock title="禁用状态" :source="ColorPickerDisabledSource">
  <ColorPickerDisabled />
</DemoBlock>

### 预设颜色

通过 presets 提供预设颜色快速选择。

<DemoBlock title="预设颜色" :source="ColorPickerPresetsSource">
  <ColorPickerPresets />
</DemoBlock>

### 清除颜色

设置 `allowClear` 后面板底部出现清除按钮，清除后 `value` 变为 `undefined` 并触发 `clear` 事件。

<DemoBlock title="清除颜色" :source="ColorPickerAllowClearSource">
  <ColorPickerAllowClear />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="ColorPickerClassNamesSource">
  <ColorPickerClassNames />
</DemoBlock>

## API

### ColorPicker Props

| 参数            | 说明                                                                               | 类型                                         | 默认值      |
| --------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- | ----------- |
| value (v-model) | 颜色值（HEX 格式）                                                                 | `string`                                     | `'#1677ff'` |
| defaultValue    | 默认颜色值                                                                         | `string`                                     | `'#1677ff'` |
| format          | 颜色格式。**当前仅实现 `hex`**，面板始终渲染 HEX 输入框，传入 `rgb`/`hsb` 暂无效果 | `'hex' \| 'rgb' \| 'hsb'`                    | `'hex'`     |
| disabled        | 是否禁用                                                                           | `boolean`                                    | `false`     |
| size            | 尺寸                                                                               | `'small' \| 'middle' \| 'large'`             | `'middle'`  |
| showText        | 是否显示颜色文本                                                                   | `boolean`                                    | `false`     |
| allowClear      | 是否允许清除                                                                       | `boolean`                                    | `false`     |
| presets         | 预设颜色组                                                                         | `Array<{ label: string; colors: string[] }>` | `[]`        |
| classNames      | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style)   | `ColorPickerClassNames`                      | -           |
| styles          | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style)   | `ColorPickerStyles`                          | -           |

### ColorPicker Events

| 事件名     | 说明            | 回调参数                  |
| ---------- | --------------- | ------------------------- |
| change     | 颜色变化时      | `(value: string) => void` |
| clear      | 清除时          | `() => void`              |
| openChange | 面板显示/隐藏时 | `(open: boolean) => void` |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对颜色选择器的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface ColorPickerClassNames {
  root?: string // 根容器
  trigger?: string // 触发器按钮
  colorBlock?: string // 触发器内的色块预览
  text?: string // 触发器内的文本
  panel?: string // 弹出面板容器
  saturation?: string // 饱和度/亮度选择器区域
  saturationCursor?: string // 饱和度/亮度选择器的光标
  hueSlider?: string // 色相滑块容器
  hueCursor?: string // 色相滑块光标
  inputContainer?: string // 输入容器
  preview?: string // 输入容器内的预览色块
  hexInput?: string // HEX 输入框
  formatLabel?: string // 格式标签（HEX）
  presets?: string // 预设颜色区域
  presetGroup?: string // 预设颜色组
  presetLabel?: string // 预设颜色组标签
  presetColors?: string // 预设颜色列表
  presetColor?: string // 单个预设颜色块
  clearBtn?: string // 清除按钮
}

interface ColorPickerStyles {
  root?: CSSProperties
  trigger?: CSSProperties
  colorBlock?: CSSProperties
  text?: CSSProperties
  panel?: CSSProperties
  saturation?: CSSProperties
  saturationCursor?: CSSProperties
  hueSlider?: CSSProperties
  hueCursor?: CSSProperties
  inputContainer?: CSSProperties
  preview?: CSSProperties
  hexInput?: CSSProperties
  formatLabel?: CSSProperties
  presets?: CSSProperties
  presetGroup?: CSSProperties
  presetLabel?: CSSProperties
  presetColors?: CSSProperties
  presetColor?: CSSProperties
  clearBtn?: CSSProperties
}
```

### DOM 结构与 className 映射

```html
<div class="hmfw-color-picker">
  <!-- ↑ classNames.root / styles.root 应用于此 -->

  <div class="hmfw-color-picker-trigger">
    <!-- ↑ classNames.trigger / styles.trigger 应用于此 -->
    <div class="hmfw-color-picker-color-block" style="background: #1677ff">
      <!-- ↑ classNames.colorBlock / styles.colorBlock 应用于此 -->
    </div>
    <span class="hmfw-color-picker-text">
      <!-- ↑ classNames.text / styles.text 应用于此 -->
      #1677ff
    </span>
  </div>

  <!-- 弹出面板（Teleport 到 body） -->
  <div class="hmfw-color-picker-panel">
    <!-- ↑ classNames.panel / styles.panel 应用于此 -->

    <!-- 饱和度/亮度选择器 -->
    <div class="hmfw-color-picker-sb">
      <!-- ↑ classNames.saturation / styles.saturation 应用于此 -->
      <div class="hmfw-color-picker-sb-cursor">
        <!-- ↑ classNames.saturationCursor / styles.saturationCursor 应用于此 -->
      </div>
    </div>

    <!-- 色相滑块 -->
    <div class="hmfw-color-picker-hue">
      <!-- ↑ classNames.hueSlider / styles.hueSlider 应用于此 -->
      <div class="hmfw-color-picker-hue-cursor">
        <!-- ↑ classNames.hueCursor / styles.hueCursor 应用于此 -->
      </div>
    </div>

    <!-- HEX 输入 -->
    <div class="hmfw-color-picker-input-container">
      <!-- ↑ classNames.inputContainer / styles.inputContainer 应用于此 -->
      <div class="hmfw-color-picker-preview">
        <!-- ↑ classNames.preview / styles.preview 应用于此 -->
      </div>
      <input class="hmfw-color-picker-hex-input" />
      <!-- ↑ classNames.hexInput / styles.hexInput 应用于此 -->
      <span class="hmfw-color-picker-format-label">HEX</span>
      <!-- ↑ classNames.formatLabel / styles.formatLabel 应用于此 -->
    </div>

    <!-- 预设颜色 -->
    <div class="hmfw-color-picker-presets">
      <!-- ↑ classNames.presets / styles.presets 应用于此 -->
      <div class="hmfw-color-picker-preset-group">
        <!-- ↑ classNames.presetGroup / styles.presetGroup 应用于此 -->
        <div class="hmfw-color-picker-preset-label">推荐色</div>
        <!-- ↑ classNames.presetLabel / styles.presetLabel 应用于此 -->
        <div class="hmfw-color-picker-preset-colors">
          <!-- ↑ classNames.presetColors / styles.presetColors 应用于此 -->
          <div class="hmfw-color-picker-preset-color">
            <!-- ↑ classNames.presetColor / styles.presetColor 应用于此 -->
          </div>
        </div>
      </div>
    </div>

    <!-- 清除按钮 -->
    <div class="hmfw-color-picker-clear-btn">
      <!-- ↑ classNames.clearBtn / styles.clearBtn 应用于此 -->
      清除
    </div>
  </div>
</div>
```

### 使用 classNames

通过 `classNames` 属性应用自定义 CSS 类：

```vue
<template>
  <!-- 自定义触发器样式 -->
  <ColorPicker
    v-model:value="color"
    show-text
    :class-names="{
      trigger: 'my-trigger',
      colorBlock: 'my-color-block',
    }"
  />

  <!-- 自定义面板样式 -->
  <ColorPicker
    v-model:value="color"
    :class-names="{
      panel: 'my-panel',
      saturation: 'my-saturation',
      hueSlider: 'my-hue-slider',
    }"
  />
</template>

<style scoped>
:global(.my-trigger) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
}

:global(.my-color-block) {
  border: 2px solid white;
  border-radius: 6px;
}

:global(.my-panel) {
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

:global(.my-saturation) {
  border-radius: 8px;
}

:global(.my-hue-slider) {
  border-radius: 6px;
  height: 14px;
}
</style>
```

### 使用 styles

通过 `styles` 属性应用内联样式：

```vue
<template>
  <!-- 自定义触发器 -->
  <ColorPicker
    v-model:value="color"
    show-text
    :styles="{
      trigger: { borderRadius: '12px', padding: '6px 12px', border: '2px solid #722ed1' },
      colorBlock: { borderRadius: '8px', width: '32px', height: '32px' },
      text: { color: '#722ed1', fontWeight: '500', marginLeft: '8px' },
    }"
  />

  <!-- 自定义光标样式 -->
  <ColorPicker
    v-model:value="color"
    :styles="{
      saturationCursor: { width: '24px', height: '24px', border: '3px solid white' },
      hueCursor: { width: '20px', height: '20px' },
    }"
  />
</template>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- 弹出面板通过 `Teleport` 挂载到 `body`，样式定制需使用 `:global()` 而非 `:deep()`
- `classNames.saturationCursor` 和 `classNames.hueCursor` 用于自定义选色器光标的外观
- 预设颜色的 `presetColor` 在选中时会自动添加 `hmfw-color-picker-preset-color-active` 类名

## 设计 Token

ColorPicker 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

### 全局 Token

| Token 名称                      | 说明                                          | 默认值                |
| ------------------------------- | --------------------------------------------- | --------------------- |
| `--hmfw-color-primary`          | 主题色，用于 hover/打开态边框、选中预设色描边 | `#1677ff`             |
| `--hmfw-color-border`           | 触发器、预览块、输入框、分隔线的边框色        | `#d9d9d9`             |
| `--hmfw-color-bg-container`     | 触发器背景色                                  | `#ffffff`             |
| `--hmfw-color-text`             | 触发器文本色（showText）                      | `rgba(0, 0, 0, 0.88)` |
| `--hmfw-color-text-description` | 格式标签、预设组标签、清除按钮的文本色        | `rgba(0, 0, 0, 0.45)` |
| `--hmfw-font-size`              | 触发器文本字号                                | `14px`                |
| `--hmfw-font-size-sm`           | 输入框、标签、清除按钮字号                    | `12px`                |
| `--hmfw-border-radius`          | 触发器圆角                                    | `6px`                 |
| `--hmfw-border-radius-sm`       | 色块、取色画布、输入框、预设色块圆角          | `4px`                 |
| `--hmfw-control-height`         | 默认尺寸触发器最小宽高                        | `32px`                |
| `--hmfw-control-height-sm`      | 小尺寸触发器最小宽高                          | `24px`                |
| `--hmfw-control-height-lg`      | 大尺寸触发器最小宽高                          | `40px`                |
| `--hmfw-padding-xxs`            | 触发器纵向内边距、清除按钮内边距              | `4px`                 |
| `--hmfw-padding-xs`             | 触发器横向内边距、输入框内边距                | `8px`                 |
| `--hmfw-padding-sm`             | 面板内边距、大尺寸触发器横向内边距            | `12px`                |
| `--hmfw-margin-xxs`             | 预设色块间距、分隔线外边距                    | `4px`                 |
| `--hmfw-margin-xs`              | 触发器内元素间距、输入区间距                  | `8px`                 |
| `--hmfw-margin-sm`              | 取色画布与滑块的下外边距                      | `12px`                |
| `--hmfw-line-width-bold`        | 选中预设色的描边宽度                          | `2px`                 |
| `--hmfw-motion-duration-fast`   | 预设色块 hover 缩放过渡时长                   | `0.1s`                |
| `--hmfw-motion-duration-mid`    | 边框色、文本色过渡时长                        | `0.2s`                |

面板的背景、圆角与阴影由 Trigger 内部原语统一提供（`--hmfw-color-bg-elevated`、`--hmfw-border-radius-lg`、`--hmfw-box-shadow-secondary`）。

### 组件 Token

组件专属变量按**消费位置分两处定义**，覆盖时需选对宿主元素。原因是弹出面板通过 `Teleport` 挂载到 `body`，不在触发器 DOM 子树内，无法继承定义在触发器根节点上的 CSS 变量。

#### 触发器 Token（定义在 `.hmfw-color-picker`）

| Token 名称                           | 说明                                                | 默认值 |
| ------------------------------------ | --------------------------------------------------- | ------ |
| `--hmfw-color-picker-block-size`     | 触发器内色块尺寸                                    | `16px` |
| `--hmfw-color-picker-text-min-width` | showText 文本最小宽度，避免切换颜色时触发器宽度跳动 | `60px` |
| `--hmfw-color-picker-trans-bg`       | 透明棋盘格灰色                                      | `#ccc` |

#### 面板 Token（定义在 `.hmfw-color-picker-panel`）

派生规则参考 Ant Design 的 `prepareComponentToken`。覆盖这些变量需作用于面板元素，可通过 `classNames.panel` 挂自定义类实现。

| Token 名称                               | 说明                                                      | 默认值                     |
| ---------------------------------------- | --------------------------------------------------------- | -------------------------- |
| `--hmfw-color-picker-width`              | 面板宽度（对齐 AntD `colorPickerWidth`）                  | `234px`                    |
| `--hmfw-color-picker-sb-height`          | 饱和度/明度取色画布高度                                   | `160px`                    |
| `--hmfw-color-picker-slider-height`      | 色相滑块高度（AntD 为 8px，本项目取 12px 便于触摸操作）   | `12px`                     |
| `--hmfw-color-picker-handler-size`       | 色相滑块游标尺寸（AntD `colorPickerHandlerSize` 为 16px） | `14px`                     |
| `--hmfw-color-picker-handler-size-sm`    | 取色画布游标尺寸（对齐 AntD `colorPickerHandlerSizeSM`）  | `12px`                     |
| `--hmfw-color-picker-preview-size`       | 输入区预览色块尺寸                                        | `24px`                     |
| `--hmfw-color-picker-preset-color-size`  | 预设色块尺寸（AntD `colorPickerPresetColorSize` 为 24px） | `20px`                     |
| `--hmfw-color-picker-input-width`        | HEX 输入框宽度                                            | `120px`                    |
| `--hmfw-color-picker-input-height`       | HEX 输入框高度                                            | `28px`                     |
| `--hmfw-color-picker-format-label-width` | 格式标签列宽                                              | `28px`                     |
| `--hmfw-color-picker-cursor-ring`        | 游标白环颜色                                              | `#fff`                     |
| `--hmfw-color-picker-cursor-shadow`      | 游标外描边阴影                                            | `0 0 0 1px rgba(0,0,0,.3)` |

覆盖面板 Token 的示例：

```vue
<template>
  <ColorPicker v-model:value="color" :class-names="{ panel: 'wide-panel' }" />
</template>

<style scoped>
/* 面板 Teleport 到 body，需用 :global() 而非 :deep() */
:global(.wide-panel) {
  --hmfw-color-picker-width: 320px;
  --hmfw-color-picker-sb-height: 220px;
}
</style>
```

> 说明：取色画布的黑白渐变、色相滑块的色相环渐变，以及游标的白环与描边，属 HSV 色彩空间本身的绘制，**不随主题反转**。若跟随暗色主题反转会导致取色结果错误或游标不可见，因此这几项固定为上表默认值；确有定制需求时可覆盖 `--hmfw-color-picker-cursor-ring` 与 `--hmfw-color-picker-cursor-shadow`。
