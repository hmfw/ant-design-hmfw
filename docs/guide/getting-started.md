# 快速上手

## 安装

```bash
npm install ant-design-hmfw
# 或
pnpm add ant-design-hmfw
```

## 完整引入

```ts
import { createApp } from 'vue'
import AntDesignHmfw from 'ant-design-hmfw'
import 'ant-design-hmfw/style.css'
import App from './App.vue'

createApp(App).use(AntDesignHmfw).mount('#app')
```

## 按需引入

```ts
import { Button, Input } from 'ant-design-hmfw'
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
import { ConfigProvider } from 'ant-design-hmfw'
import zhCN from 'ant-design-hmfw/locale/zh-CN'
</script>
```
