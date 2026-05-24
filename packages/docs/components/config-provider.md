# ConfigProvider 全局配置

为组件提供统一的全局化配置。

## 何时使用

- 需要统一配置组件库的主题、国际化、组件尺寸等全局属性时
- 在应用根组件处包裹，影响所有子组件

## 代码演示

### 主题配置

通过 theme 属性配置全局主题色。

```vue
<template>
  <ConfigProvider :theme="theme">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <button style="background: var(--hmfw-color-primary); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
        主色按钮
      </button>
      <p style="color: var(--hmfw-color-primary);">主色文字</p>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-hmfw'

const theme = {
  token: {
    colorPrimary: '#00b96b',
    borderRadius: 2,
  },
}
</script>
```

### 国际化

通过 locale 属性配置国际化语言。

```vue
<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px;">
    <button @click="locale = zhCN">中文</button>
    <button @click="locale = enUS">English</button>
  </div>
  <ConfigProvider :locale="locale">
    <p>当前语言：{{ locale.locale }}</p>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, zhCN, enUS } from 'ant-design-hmfw'

const locale = ref(zhCN)
</script>
```

### 全局尺寸

通过 componentSize 属性统一配置组件尺寸。

```vue
<template>
  <div style="display: flex; gap: 12px; margin-bottom: 16px;">
    <button @click="size = 'small'">小</button>
    <button @click="size = 'middle'">中</button>
    <button @click="size = 'large'">大</button>
  </div>
  <ConfigProvider :component-size="size">
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <input :style="inputStyle" placeholder="输入框" />
      <button :style="btnStyle">按钮</button>
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ConfigProvider } from 'ant-design-hmfw'

const size = ref<'small' | 'middle' | 'large'>('middle')

const heightMap = { small: '24px', middle: '32px', large: '40px' }

const inputStyle = computed(() => ({
  height: heightMap[size.value],
  padding: '0 8px',
  border: '1px solid #d9d9d9',
  borderRadius: '6px',
}))

const btnStyle = computed(() => ({
  height: heightMap[size.value],
  padding: '0 16px',
  border: '1px solid #d9d9d9',
  borderRadius: '6px',
  cursor: 'pointer',
}))
</script>
```

## API

### ConfigProvider Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 设置主题，包括主色等 Design Token | `{ token?: { colorPrimary?: string, borderRadius?: number, ... } }` | - |
| locale | 语言包配置 | `zhCN \| enUS` | `zhCN` |
| prefixCls | 设置统一样式前缀 | `string` | `'hmfw'` |
| componentSize | 设置 antd 组件大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| direction | 设置布局方向 | `'ltr' \| 'rtl'` | `'ltr'` |

### Theme Token（常用）

| Token | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colorPrimary | 品牌主色 | `string` | `'#1677ff'` |
| colorSuccess | 成功色 | `string` | `'#52c41a'` |
| colorWarning | 警告色 | `string` | `'#faad14'` |
| colorError | 错误色 | `string` | `'#ff4d4f'` |
| borderRadius | 基础圆角 | `number` | `6` |
| fontSize | 基础字号 | `number` | `14` |

### 国际化语言包

| 语言包 | 说明 |
| --- | --- |
| `zhCN` | 简体中文 |
| `enUS` | 英文 |
