# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 何时使用

- 需要展示用户头像或事物图标时
- 需要展示一组用户或事物时

## 代码演示

### 基本用法

支持三种类型：图片、图标和字符。

```vue
<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <Avatar :size="64" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    <Avatar :size="64">U</Avatar>
    <Avatar :size="64" style="background-color: #87d068;">USER</Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
</script>
```

### 不同尺寸

支持三种预设尺寸和自定义尺寸。

```vue
<template>
  <div style="display: flex; gap: 16px; align-items: center;">
    <Avatar size="small">S</Avatar>
    <Avatar>M</Avatar>
    <Avatar size="large">L</Avatar>
    <Avatar :size="64">64</Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
</script>
```

### 头像组

使用 AvatarGroup 可以展示一组头像。

```vue
<template>
  <AvatarGroup :max-count="3">
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
  </AvatarGroup>
</template>

<script setup lang="ts">
import { Avatar, AvatarGroup } from 'ant-design-hmfw'
</script>
```

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
