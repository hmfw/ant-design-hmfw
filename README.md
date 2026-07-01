<div align="center">
  <h1>ant-design-hmfw</h1>
  <p>基于 Ant Design v6 的 Vue3 UI 组件库</p>
  
  <p>
    <a href="https://www.npmjs.com/package/ant-design-hmfw"><img src="https://img.shields.io/npm/v/ant-design-hmfw.svg?style=flat-square" alt="npm version"></a>
    <a href="https://www.npmjs.com/package/ant-design-hmfw"><img src="https://img.shields.io/npm/dm/ant-design-hmfw.svg?style=flat-square" alt="npm downloads"></a>
    <a href="https://github.com/hmfw/ant-design-hmfw/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/ant-design-hmfw.svg?style=flat-square" alt="license"></a>
    <a href="https://github.com/hmfw/ant-design-hmfw"><img src="https://img.shields.io/github/stars/hmfw/ant-design-hmfw?style=flat-square" alt="GitHub stars"></a>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/Vue-3.5+-4FC08D?style=flat-square&logo=vue.js&logoColor=white" alt="Vue 3.5+">
    <img src="https://img.shields.io/badge/TypeScript-5.9+-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5.9+">
    <img src="https://img.shields.io/badge/Tests-1891%20passed-success?style=flat-square" alt="Tests">
    <img src="https://img.shields.io/badge/Components-68-blue?style=flat-square" alt="68 Components">
  </p>
  
  <p>
    <a href="https://hmfw.github.io/ant-design-hmfw">📖 文档</a> •
    <a href="#-快速开始">🚀 快速开始</a> •
    <a href="#-组件">📦 组件</a> •
    <a href="https://github.com/hmfw/ant-design-hmfw/issues">🐛 报告问题</a>
  </p>
</div>

---

## ✨ 特性

- 🎨 **68 个高质量组件** - 涵盖通用、布局、导航、表单、数据展示、反馈等全场景
- 💪 **完整 TypeScript 支持** - 所有组件提供完整类型定义
- 🎯 **按需引入** - 支持 Tree Shaking，打包体积最小化
- 🌍 **国际化** - 内置中英文语言包，支持自定义语言
- 🎨 **主题定制** - 基于 CSS Variables 的设计 Token 系统
- 🎨 **语义化 API** - 所有组件支持 classNames/styles 精细化样式控制
- ⚡ **高性能** - Select/Table 支持虚拟滚动，流畅处理大数据
- 📱 **响应式** - 移动端友好的栅格系统和断点设计
- ✅ **质量保证** - 1889 个单元测试，代码质量有保障

---

## 📦 安装

```bash
# npm
npm install ant-design-hmfw

# pnpm (推荐)
pnpm add ant-design-hmfw

# yarn
yarn add ant-design-hmfw
```

### CDN

```html
<!-- 引入 Vue 3 -->
<script src="https://unpkg.com/vue@3"></script>

<!-- 引入 ant-design-hmfw -->
<link rel="stylesheet" href="https://unpkg.com/ant-design-hmfw/dist/style.css" />
<script src="https://unpkg.com/ant-design-hmfw"></script>
```

---

## 🚀 快速开始

### 完整引入

```typescript
// main.ts
import { createApp } from 'vue'
import AntDesignHmfw from 'ant-design-hmfw'
import 'ant-design-hmfw/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(AntDesignHmfw)
app.mount('#app')
```

### 按需引入（推荐）

现代构建工具会自动进行 Tree Shaking，无需额外配置：

```vue
<template>
  <div>
    <Button type="primary" @click="handleClick">点击我</Button>
    <Input v-model:value="text" placeholder="请输入内容" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input } from 'ant-design-hmfw'
import 'ant-design-hmfw/style.css'

const text = ref('')
const handleClick = () => {
  console.log('按钮被点击了！', text.value)
}
</script>
```

---

## 💡 使用示例

### 基础表单

```vue
<template>
  <Form :model="formData" @submit="handleSubmit">
    <FormItem label="用户名" name="username">
      <Input v-model:value="formData.username" />
    </FormItem>
    <FormItem label="密码" name="password">
      <InputPassword v-model:value="formData.password" />
    </FormItem>
    <FormItem>
      <Button type="primary" html-type="submit">提交</Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input, InputPassword, Button } from 'ant-design-hmfw'

const formData = reactive({
  username: '',
  password: '',
})

const handleSubmit = () => {
  console.log('表单数据：', formData)
}
</script>
```

### 数据表格

```vue
<template>
  <Table :columns="columns" :data-source="dataSource" />
</template>

<script setup lang="ts">
import { Table } from 'ant-design-hmfw'

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '地址', dataIndex: 'address', key: 'address' },
]

const dataSource = [
  { key: '1', name: '张三', age: 32, address: '北京市' },
  { key: '2', name: '李四', age: 42, address: '上海市' },
]
</script>
```

### 主题定制

```vue
<template>
  <ConfigProvider :theme="customTheme">
    <App />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-hmfw'

const customTheme = {
  colorPrimary: '#00b96b',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  borderRadius: 8,
  fontSize: 14,
}
</script>
```

---

## 📦 组件

68 个组件，覆盖所有常用场景：

| 分类         | 数量 | 包含组件                                                                                                                                                                             |
| ------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **通用**     | 3    | Button, Icon, Typography                                                                                                                                                             |
| **布局**     | 5    | Divider, Flex, Grid, Layout, Space                                                                                                                                                   |
| **导航**     | 7    | Anchor, Breadcrumb, Dropdown, Menu, Pagination, Steps, Tabs                                                                                                                          |
| **数据录入** | 18   | AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Radio, RangePicker, Rate, Select, Slider, Switch, TimePicker, Transfer, TreeSelect, Upload      |
| **数据展示** | 18   | Avatar, Badge, Calendar, Card, Carousel, Collapse, Descriptions, Empty, Image, List, Popover, Progress, QRCode, Segmented, Statistic, Table, Tag, Timeline, Tooltip, Tree, Watermark |
| **反馈**     | 11   | Alert, Drawer, Message, Modal, Notification, Popconfirm, Result, Skeleton, Spin, Tour                                                                                                |
| **其他**     | 4    | App, BackTop, ConfigProvider, FloatButton                                                                                                                                            |

> 📖 查看 [完整文档](https://hmfw.github.io/ant-design-hmfw) 了解每个组件的详细用法和 API

---

## 🎨 主题定制

支持通过 ConfigProvider 配置主题 Token：

```typescript
const theme = {
  colorPrimary: '#1890ff', // 主色
  colorSuccess: '#52c41a', // 成功色
  colorWarning: '#faad14', // 警告色
  colorError: '#ff4d4f', // 错误色
  colorInfo: '#1890ff', // 信息色
  borderRadius: 6, // 圆角
  fontSize: 14, // 字体大小
  fontFamily: 'sans-serif', // 字体
}
```

---

## 🌍 国际化

内置中英文语言包：

```typescript
import { createApp } from 'vue'
import AntDesignHmfw, { zhCN, enUS } from 'ant-design-hmfw'

const app = createApp(App)
app.use(AntDesignHmfw, { locale: zhCN }) // 或 enUS
```

---

## 📊 项目数据

- 🎯 **68 个组件** - 覆盖所有常用场景
- ✅ **1891 个测试** - 质量有保障
- 📦 **12 KB (3 KB Gzip)** - ESM 构建产物体积
- 🌟 **681 个图标** - 独立图标库 [@hmfw/icons](https://www.npmjs.com/package/@hmfw/icons)
- 🎨 **完整类型** - 100% TypeScript

---

## 📄 许可证

[MIT](./LICENSE) © 2026 ant-design-hmfw

---

## 🔗 相关链接

- [📖 在线文档](https://hmfw.github.io/ant-design-hmfw)
- [🎨 Ant Design](https://ant.design/)
- [⚡ Vue 3](https://vuejs.org/)
- [📘 TypeScript](https://www.typescriptlang.org/)
- [🐛 报告问题](https://github.com/hmfw/ant-design-hmfw/issues)
- [💬 讨论区](https://github.com/hmfw/ant-design-hmfw/discussions)
