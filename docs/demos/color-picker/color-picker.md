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

## API

### ColorPicker Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value (v-model) | 颜色值（HEX 格式） | `string` | `'#1677ff'` |
| defaultValue | 默认颜色值 | `string` | `'#1677ff'` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| showText | 是否显示颜色文本 | `boolean` | `false` |
| allowClear | 是否允许清除 | `boolean` | `false` |
| presets | 预设颜色组 | `Array<{ label: string; colors: string[] }>` | `[]` |

### ColorPicker Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 颜色变化时 | `(value: string) => void` |
| clear | 清除时 | `() => void` |
| openChange | 面板显示/隐藏时 | `(open: boolean) => void` |
