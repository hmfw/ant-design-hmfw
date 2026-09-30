<div align="center">
  <h1>@hmfw/ant-design</h1>
  <p>基于 Ant Design v6 的 Vue3 UI 组件库</p>

  <p>
    <a href="https://www.npmjs.com/package/@hmfw/ant-design"><img src="https://img.shields.io/npm/v/@hmfw/ant-design.svg?style=flat-square" alt="npm version"></a>
    <a href="https://www.npmjs.com/package/@hmfw/ant-design"><img src="https://img.shields.io/npm/dm/@hmfw/ant-design.svg?style=flat-square" alt="npm downloads"></a>
    <a href="https://github.com/hmfw/ant-design-hmfw/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@hmfw/ant-design.svg?style=flat-square" alt="license"></a>
    <a href="https://github.com/hmfw/ant-design-hmfw"><img src="https://img.shields.io/github/stars/hmfw/ant-design-hmfw?style=flat-square" alt="GitHub stars"></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Vue-3.5+-4FC08D?style=flat-square&logo=vue.js&logoColor=white" alt="Vue 3.5+">
    <img src="https://img.shields.io/badge/TypeScript-5.9+-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5.9+">
    <img src="https://img.shields.io/badge/Tests-2598%20passed-success?style=flat-square" alt="Tests">
    <img src="https://img.shields.io/badge/Components-71-blue?style=flat-square" alt="71 Components">
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

- 🎨 **71 个高质量组件** - 涵盖通用、布局、导航、表单、数据展示、反馈等全场景
- 💪 **完整 TypeScript 支持** - 所有组件提供完整类型定义
- 🎯 **按需引入** - 支持 Tree Shaking，打包体积最小化
- 🌍 **国际化** - 内置中英文语言包，支持自定义语言
- 🎨 **主题定制** - 基于 CSS Variables 的设计 Token 系统
- 🎨 **语义化 API** - 所有组件支持 classNames/styles 精细化样式控制
- ⚡ **高性能** - Select/Table 支持虚拟滚动，流畅处理大数据
- 📱 **响应式** - 移动端友好的栅格系统和断点设计
- ✅ **质量保证** - 2598 个单元测试，代码质量有保障

---

## 📦 安装

```bash
# npm
npm install @hmfw/ant-design

# pnpm (推荐)
pnpm add @hmfw/ant-design

# yarn
yarn add @hmfw/ant-design
```

### CDN

```html
<!-- 引入 Vue 3 -->
<script src="https://unpkg.com/vue@3"></script>

<!-- 引入 @hmfw/ant-design -->
<link rel="stylesheet" href="https://unpkg.com/@hmfw/ant-design/dist/style.css" />
<script src="https://unpkg.com/@hmfw/ant-design/dist/ant-design.umd.js"></script>
```

---

## 🚀 快速开始

### 完整引入

```typescript
// main.ts
import { createApp } from 'vue'
import AntDesignHmfw from '@hmfw/ant-design'
import '@hmfw/ant-design/style.css'
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
import { Button, Input } from '@hmfw/ant-design'
import '@hmfw/ant-design/style.css'

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
import { Form, FormItem, Input, InputPassword, Button } from '@hmfw/ant-design'

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
import { Table } from '@hmfw/ant-design'

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
import { ConfigProvider } from '@hmfw/ant-design'

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

71 个组件，覆盖所有常用场景：

| 分类         | 数量 | 包含组件                                                                                                                                                                                  |
| ------------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **通用**     | 4    | Button, FloatButton, Icon, Typography                                                                                                                                                     |
| **布局**     | 7    | Divider, Flex, Grid, Layout, Masonry, Space, Splitter                                                                                                                                     |
| **导航**     | 7    | Anchor, Breadcrumb, Dropdown, Menu, Pagination, Steps, Tabs                                                                                                                               |
| **数据录入** | 19   | AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Mentions, Radio, RangePicker, Rate, Select, Slider, Switch, TimePicker, Transfer, TreeSelect, Upload |
| **数据展示** | 21   | Avatar, Badge, Calendar, Card, Carousel, Collapse, Descriptions, Empty, Image, List, Listy, QRCode, Result, Segmented, Skeleton, Statistic, Table, Tag, Timeline, Tree, Watermark         |
| **反馈**     | 10   | Alert, Drawer, Message, Modal, Notification, Popconfirm, Popover, Progress, Spin, Tooltip                                                                                                 |
| **其他**     | 3    | App, ConfigProvider, Tour                                                                                                                                                                 |

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
import AntDesignHmfw, { zhCN, enUS } from '@hmfw/ant-design'

const app = createApp(App)
app.use(AntDesignHmfw, { locale: zhCN }) // 或 enUS
```

---

## 🤖 AI 辅助开发

本库不在大模型的训练数据里，AI 编码助手默认只能「猜」API。为此 **npm 包根内置了两份离线文档**，无需联网、无需翻源码：

| 文件                                          | 体积    | 内容                                                            |
| --------------------------------------------- | ------- | --------------------------------------------------------------- |
| `node_modules/@hmfw/ant-design/llms.txt`      | ~9 KB   | 组件索引：71 个组件的名称、一句话简介与文档链接                 |
| `node_modules/@hmfw/ant-design/llms-full.txt` | ~300 KB | 全量文档：每个组件的 props / events / slots 表格 + 完整示例源码 |

把下面这段加进 `CLAUDE.md`（Claude Code）、`.cursor/rules/*.mdc`（Cursor）或 `.github/copilot-instructions.md`（Copilot），AI 就知道该去哪儿查：

```md
## @hmfw/ant-design

本项目使用 `@hmfw/ant-design`（Vue3 组件库，Ant Design v6 风格）。
写 UI 前先读包内文档，不要凭记忆猜 API —— 本库不在模型训练数据里。

- `node_modules/@hmfw/ant-design/llms.txt` —— 组件索引（约 9 KB），先读它确定用哪个组件
- `node_modules/@hmfw/ant-design/llms-full.txt` —— 全量文档（约 300 KB），含每个组件的
  props / events / slots 表格与完整示例源码

用法：从 llms.txt 定位组件后，到 llms-full.txt 检索该组件的 `## 组件名` 小节，只读该小节。
```

> 📖 接入细节、提示词模板与 token 预算见 [AI 辅助开发](https://hmfw.github.io/ant-design-hmfw/guide/ai)。

---

## 📊 项目数据

- 🎯 **71 个组件** - 覆盖所有常用场景
- ✅ **2605 个测试** - 质量有保障
- 📦 **12 KB (3 KB Gzip)** - ESM 构建产物体积
- 🌟 **681 个图标** - 独立图标库 [@hmfw/icons](https://www.npmjs.com/package/@hmfw/icons)
- 🎨 **完整类型** - 100% TypeScript

---

## 🛠️ 开发指南

### 组件审查规范

项目提供了标准化的组件审查流程，确保所有组件的代码质量和文档完整性：

- 📋 [组件审查技能](./.claude/skills/component-review/SKILL.md) - 完整的审查标准、检查清单和修复建议

**审查维度**:

- API 设计合理性
- 健壮性与边界条件
- 设计模式与架构
- 可读性与可维护性
- Demo 覆盖完整性

---

## 📄 许可证

[MIT](./LICENSE) © 2026 hmfw

---

## 🔗 相关链接

- [📖 在线文档](https://hmfw.github.io/ant-design-hmfw)
- [🎨 Ant Design](https://ant.design/)
- [⚡ Vue 3](https://vuejs.org/)
- [📘 TypeScript](https://www.typescriptlang.org/)
- [🐛 报告问题](https://github.com/hmfw/ant-design-hmfw/issues)
- [💬 讨论区](https://github.com/hmfw/ant-design-hmfw/discussions)
