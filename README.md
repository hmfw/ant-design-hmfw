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
    <img src="https://img.shields.io/badge/Vue-3.3+-4FC08D?style=flat-square&logo=vue.js&logoColor=white" alt="Vue 3.3+">
    <img src="https://img.shields.io/badge/TypeScript-5.4+-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5.4+">
    <img src="https://img.shields.io/badge/Tests-1888%2F1890-success?style=flat-square" alt="Tests">
    <img src="https://img.shields.io/badge/Components-66-blue?style=flat-square" alt="66 Components">
  </p>
  
  <p>
    <a href="https://hmfw.github.io/ant-design-hmfw">📖 文档</a> •
    <a href="#-快速开始">🚀 快速开始</a> •
    <a href="#-组件列表">📦 组件列表</a> •
    <a href="https://github.com/hmfw/ant-design-hmfw/issues">🐛 报告问题</a>
  </p>
</div>

---

## ✨ 特性

- 🎨 **66 个高质量组件** - 涵盖通用、布局、导航、表单、数据展示等各类场景
- 💪 **TypeScript 支持** - 完整的类型定义，提供极佳的开发体验
- 🎯 **按需引入** - 支持 Tree Shaking，打包体积最小化
- 🌍 **国际化** - 内置中英文语言包，支持自定义语言
- 🎨 **主题定制** - 完整的 CSS Variables 设计 Token 系统
- ⚡ **高性能** - 虚拟滚动支持 10,000+ 数据流畅渲染
- 📱 **响应式** - 移动端友好的栅格系统和断点设计
- ✅ **质量保证** - 1888 个单元测试，代码质量有保障

---

## 📦 安装

### 使用 npm
```bash
npm install ant-design-hmfw
```

### 使用 pnpm (推荐)
```bash
pnpm add ant-design-hmfw
```

### 使用 yarn
```bash
yarn add ant-design-hmfw
```

### CDN
```html
<!-- 引入 Vue 3 -->
<script src="https://unpkg.com/vue@3"></script>

<!-- 引入 ant-design-hmfw -->
<link rel="stylesheet" href="https://unpkg.com/ant-design-hmfw/dist/style.css">
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
    <Button type="primary" @click="handleClick">
      点击我
    </Button>
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
import 'ant-design-hmfw/style.css'

const formData = reactive({
  username: '',
  password: ''
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
import 'ant-design-hmfw/style.css'

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
import 'ant-design-hmfw/style.css'

const customTheme = {
  colorPrimary: '#00b96b',    // 主色
  colorSuccess: '#52c41a',    // 成功色
  colorWarning: '#faad14',    // 警告色
  colorError: '#ff4d4f',      // 错误色
  borderRadius: 8,            // 圆角
  fontSize: 14,               // 字体大小
}
</script>
```

---

## 📦 组件列表

### 通用组件 (3)
Button 按钮 • Icon 图标 • Typography 排版

### 布局组件 (5)
Divider 分割线 • Flex 弹性布局 • Grid 栅格 • Layout 布局 • Space 间距

### 导航组件 (7)
Anchor 锚点 • Breadcrumb 面包屑 • Dropdown 下拉菜单 • Menu 导航菜单 • Pagination 分页 • Steps 步骤条 • Tabs 标签页

### 数据录入组件 (18)
AutoComplete • Cascader • Checkbox • ColorPicker • DatePicker • Form • Input • InputNumber • Radio • RangePicker • Rate • Select • Slider • Switch • TimePicker • Transfer • TreeSelect • Upload

### 数据展示组件 (18)
Avatar • Badge • Calendar • Card • Carousel • Collapse • Descriptions • Empty • Image • List • Popover • Progress • QRCode • Segmented • Statistic • Table • Tag • Timeline • Tooltip • Tree • Watermark

### 反馈组件 (11)
Alert • Drawer • Message • Modal • Notification • Popconfirm • Result • Skeleton • Spin • Tour

### 其他组件 (4)
App • BackTop • ConfigProvider • FloatButton

> 📖 查看 [完整文档](https://hmfw.github.io/ant-design-hmfw) 了解每个组件的详细用法和 API

---

## 🎨 主题定制

### 支持的 Design Tokens

```typescript
{
  // 颜色
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1677ff',
  
  // 字体
  fontSize: 14,
  fontSizeBase: 14,
  fontFamily: '-apple-system, BlinkMacSystemFont, ...',
  
  // 尺寸
  borderRadius: 6,
  controlHeight: 32,
  
  // 间距
  padding: 16,
  margin: 16,
}
```

### 使用方式

```vue
<ConfigProvider :theme="{ colorPrimary: '#00b96b' }">
  <YourApp />
</ConfigProvider>
```

---

## 🌍 国际化

```vue
<template>
  <ConfigProvider :locale="locale">
    <Space>
      <Button @click="locale = zhCN">中文</Button>
      <Button @click="locale = enUS">English</Button>
    </Space>
    <YourApp />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, zhCN, enUS } from 'ant-design-hmfw'

const locale = ref(zhCN)
</script>
```

---

## 📊 浏览器兼容性

支持现代浏览器和 Node.js 18+

| ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) |
| --- | --- | --- | --- |
| Edge ≥ 79 | Firefox latest 2 | Chrome latest 2 | Safari latest 2 |

---

## 🔧 本地开发

```bash
# 克隆仓库
git clone https://github.com/hmfw/ant-design-hmfw.git
cd ant-design-hmfw

# 安装依赖
pnpm install

# 启动文档站（开发模式）
pnpm dev

# 运行测试
pnpm test

# 构建组件库
pnpm build:lib

# 类型检查
pnpm typecheck
```

---

## 📈 项目数据

- 🎯 **66 个组件** - 覆盖所有常用场景
- ✅ **1888 个测试** - 质量有保障
- 📦 **160 KB** - Gzip 后的体积
- 🌟 **79 个图标** - 内置图标库
- 🎨 **完整类型** - 100% TypeScript

---

## 🤝 参与贡献

我们欢迎所有形式的贡献！

### 贡献方式

- 🐛 [报告 Bug](https://github.com/hmfw/ant-design-hmfw/issues/new)
- 💡 [提出新功能](https://github.com/hmfw/ant-design-hmfw/issues/new)
- 📝 改进文档
- 💻 提交代码

### 开发流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: add some feature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证

[MIT](./LICENSE) © 2026 ant-design-hmfw

---

## 🔗 相关链接

- [📖 文档](https://hmfw.github.io/ant-design-hmfw)
- [🎨 Ant Design](https://ant.design/) - 设计规范参考
- [⚡ Vue 3](https://vuejs.org/)
- [📘 TypeScript](https://www.typescriptlang.org/)
- [🐛 报告问题](https://github.com/hmfw/ant-design-hmfw/issues)
- [💬 讨论区](https://github.com/hmfw/ant-design-hmfw/discussions)

---

<div align="center">
  <sub>Built with ❤️ using Vue 3 and TypeScript</sub>
</div>
