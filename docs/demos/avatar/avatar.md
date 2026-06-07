# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 何时使用

- 需要展示用户头像或事物图标时
- 需要展示一组用户或事物时

## 代码演示

### 基本用法

支持三种类型：图片、图标和字符。

<DemoBlock title="基本用法" :source="AvatarBasicSource">
  <AvatarBasic />
</DemoBlock>

### 不同尺寸

支持三种预设尺寸和自定义尺寸。

<DemoBlock title="不同尺寸" :source="AvatarSizeSource">
  <AvatarSize />
</DemoBlock>

### 响应式尺寸

支持响应式尺寸配置，根据屏幕断点自动调整头像大小。

<DemoBlock title="响应式尺寸" :source="AvatarResponsiveSource">
  <AvatarResponsive />
</DemoBlock>

### 头像组

使用 AvatarGroup 可以展示一组头像。

<DemoBlock title="头像组" :source="AvatarGroupDemoSource">
  <AvatarGroupDemo />
</DemoBlock>

## API

### Avatar Props

| 参数           | 说明                             | 类型                                                                                                                                                                               | 默认值      |
| -------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| size           | 头像大小，支持响应式配置         | `number \| 'small' \| 'default' \| 'large' \| { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }`                                                   | `'default'` |
| shape          | 头像形状                         | `'circle' \| 'square'`                                                                                                                                                             | `'circle'`  |
| src            | 图片地址                         | `string`                                                                                                                                                                           | -           |
| srcSet         | 图片响应式资源地址               | `string`                                                                                                                                                                           | -           |
| alt            | 图片无法显示时的替代文本         | `string`                                                                                                                                                                           | -           |
| icon           | 自定义图标组件                   | `Component`                                                                                                                                                                        | -           |
| draggable      | 图片是否允许拖拽                 | `boolean \| 'true' \| 'false'`                                                                                                                                                     | -           |
| crossOrigin    | CORS 属性设置                    | `'' \| 'anonymous' \| 'use-credentials'`                                                                                                                                           | -           |
| referrerPolicy | referrer 策略                    | `'no-referrer' \| 'no-referrer-when-downgrade' \| 'origin' \| 'origin-when-cross-origin' \| 'same-origin' \| 'strict-origin' \| 'strict-origin-when-cross-origin' \| 'unsafe-url'` | -           |
| gap            | 字符类型距离左右两侧边界单位像素 | `number`                                                                                                                                                                           | `4`         |

### AvatarGroup Props

设置后会自动下发 `size`/`shape` 给子 Avatar（子 Avatar 显式设置可覆盖）。

| 参数     | 说明                                        | 类型                                                                                                                             | 默认值      |
| -------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| maxCount | 最多显示的头像数量                          | `number`                                                                                                                         | -           |
| maxStyle | 多余头像样式                                | `CSSProperties`                                                                                                                  | -           |
| size     | 头像大小（下发给子 Avatar），支持响应式配置 | `number \| 'small' \| 'default' \| 'large' \| { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }` | `'default'` |
| shape    | 头像形状（下发给子 Avatar）                 | `'circle' \| 'square'`                                                                                                           | `'circle'`  |
