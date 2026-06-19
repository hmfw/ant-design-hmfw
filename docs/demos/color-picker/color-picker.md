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

### 预设颜色

通过 presets 提供预设颜色快速选择。

<DemoBlock title="预设颜色" :source="ColorPickerPresetsSource">
  <ColorPickerPresets />
</DemoBlock>

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="ColorPickerClassNamesSource">
  <ColorPickerClassNames />
</DemoBlock>

## API

### ColorPicker Props

| 参数            | 说明                                                                             | 类型                                         | 默认值      |
| --------------- | -------------------------------------------------------------------------------- | -------------------------------------------- | ----------- |
| value (v-model) | 颜色值（HEX 格式）                                                               | `string`                                     | `'#1677ff'` |
| defaultValue    | 默认颜色值                                                                       | `string`                                     | `'#1677ff'` |
| disabled        | 是否禁用                                                                         | `boolean`                                    | `false`     |
| size            | 尺寸                                                                             | `'small' \| 'middle' \| 'large'`             | `'middle'`  |
| showText        | 是否显示颜色文本                                                                 | `boolean`                                    | `false`     |
| allowClear      | 是否允许清除                                                                     | `boolean`                                    | `false`     |
| presets         | 预设颜色组                                                                       | `Array<{ label: string; colors: string[] }>` | `[]`        |
| classNames      | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ColorPickerClassNames`                      | -           |
| styles          | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `ColorPickerStyles`                          | -           |

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

| Token 名称             | 说明   | 默认值    |
| ---------------------- | ------ | --------- |
| `--hmfw-color-border`  | 边框色 | `#d9d9d9` |
| `--hmfw-color-primary` | 主题色 | `#1677ff` |
