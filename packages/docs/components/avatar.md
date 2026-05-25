# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 何时使用

- 需要展示用户头像或事物图标时
- 需要展示一组用户或事物时

## 代码演示

<script setup>
import AvatarBasic from '../demos/avatar/AvatarBasic.vue'
import AvatarBasicSource from '../demos/avatar/AvatarBasic.vue?raw'
import AvatarSize from '../demos/avatar/AvatarSize.vue'
import AvatarSizeSource from '../demos/avatar/AvatarSize.vue?raw'
import AvatarGroupDemo from '../demos/avatar/AvatarGroup.vue'
import AvatarGroupDemoSource from '../demos/avatar/AvatarGroup.vue?raw'
</script>

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

### 头像组

使用 AvatarGroup 可以展示一组头像。

<DemoBlock title="头像组" :source="AvatarGroupDemoSource">
  <AvatarGroupDemo />
</DemoBlock>

## API

### Avatar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 头像大小 | `number \| 'small' \| 'default' \| 'large'` | `'default'` |
| shape | 头像形状 | `'circle' \| 'square'` | `'circle'` |
| src | 图片地址 | `string` | - |
| alt | 图片无法显示时的替代文本 | `string` | - |
| gap | 字符类型距离左右两侧边界单位像素 | `number` | `4` |

### AvatarGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxCount | 最多显示的头像数量 | `number` | - |
| maxStyle | 多余头像样式 | `CSSProperties` | - |
| size | 头像大小 | `number \| 'small' \| 'default' \| 'large'` | `'default'` |
| shape | 头像形状 | `'circle' \| 'square'` | `'circle'` |
