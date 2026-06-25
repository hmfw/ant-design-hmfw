# 快速上手

## 安装

```bash
npm install @hmfw/ant-design
# 或
pnpm add @hmfw/ant-design
```

## 完整引入

```ts
import { createApp } from 'vue'
import AntDesignHmfw from '@hmfw/ant-design'
import 'ant-design-hmfw/style.css'
import App from './App.vue'

createApp(App).use(AntDesignHmfw).mount('#app')
```

## 按需引入

```ts
import { Button, Input } from '@hmfw/ant-design'
import 'ant-design-hmfw/style.css'
```

## 使用 ConfigProvider

```vue
<template>
  <ConfigProvider :locale="zhCN" :theme="{ colorPrimary: '#1677ff' }">
    <App />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from '@hmfw/ant-design'
import zhCN from 'ant-design-hmfw/locale/zh-CN'
</script>
```
