<div align="center">
  <h1>ant-design-hmfw</h1>
  <p>基于 Ant Design v6 的 Vue3 UI 组件库</p>
  
  <p>
    <a href="https://www.npmjs.com/package/ant-design-hmfw"><img src="https://img.shields.io/npm/v/ant-design-hmfw.svg" alt="npm version"></a>
    <a href="https://github.com/hmfw/ant-design-hmfw/actions"><img src="https://img.shields.io/github/actions/workflow/status/hmfw/ant-design-hmfw/ci.yml?branch=main" alt="CI status"></a>
    <a href="https://github.com/hmfw/ant-design-hmfw/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/ant-design-hmfw.svg" alt="license"></a>
    <a href="https://www.npmjs.com/package/ant-design-hmfw"><img src="https://img.shields.io/npm/dm/ant-design-hmfw.svg" alt="downloads"></a>
    <img src="https://img.shields.io/badge/Vue-3.4+-4FC08D?logo=vue.js" alt="Vue 3.4+">
    <img src="https://img.shields.io/badge/TypeScript-5.4+-3178C6?logo=typescript" alt="TypeScript">
  </p>
  
  <p>
    <a href="https://hmfw.github.io/ant-design-hmfw">📖 文档</a> •
    <a href="https://hmfw.github.io/ant-design-hmfw/guide/getting-started">🚀 快速上手</a> •
    <a href="https://github.com/hmfw/ant-design-hmfw/issues">🐛 报告问题</a>
  </p>
</div>

---

## ✨ 特性

- 🚀 **高性能** - 基于 esbuild 构建，支持 Tree Shaking，按需加载
- 🎨 **主题定制** - 完整的 CSS Variables 设计 Token 系统，轻松定制主题
- 💪 **类型安全** - 完整的 TypeScript 类型定义，开发体验极佳
- ✅ **测试覆盖** - 67 个测试文件，702 个测试用例，质量有保障
- 📦 **66 个组件** - 覆盖通用、布局、导航、表单、数据展示等各类场景
- 🌍 **国际化** - 内置中英文语言包，支持自定义语言
- 📱 **响应式** - 移动端友好的栅格系统和断点设计
- 🔧 **开发友好** - 完善的文档和示例，快速上手

## 📦 安装

```bash
npm install ant-design-hmfw
# 或
pnpm add ant-design-hmfw
# 或
yarn add ant-design-hmfw
```

## 🔨 使用

### 完整引入

```typescript
import { createApp } from 'vue'
import AntDesignHmfw from 'ant-design-hmfw'
import 'ant-design-hmfw/style.css'
import App from './App.vue'

createApp(App).use(AntDesignHmfw).mount('#app')
```

### 按需引入（推荐）

```typescript
import { Button, Input, Table } from 'ant-design-hmfw'
import 'ant-design-hmfw/style.css'
```

### 基础示例

```vue
<template>
  <Space direction="vertical" :size="16">
    <Button type="primary" @click="handleClick">
      主要按钮
    </Button>
    <Input v-model:value="text" placeholder="请输入内容" />
    <div>输入的内容：{{ text }}</div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Input, Space } from 'ant-design-hmfw'

const text = ref('')
const handleClick = () => {
  console.log('按钮被点击了！')
}
</script>
```

> 💡 构建工具会自动进行 Tree Shaking，无需额外配置即可实现按需加载

## 📚 组件列表

### 通用（General）
Button 按钮 • Icon 图标 • Typography 排版

### 布局（Layout）
Divider 分割线 • Flex 弹性布局 • Grid 栅格 • Layout 布局 • Space 间距

### 导航（Navigation）
Anchor 锚点 • Breadcrumb 面包屑 • Dropdown 下拉菜单 • Menu 导航菜单 • Pagination 分页 • Steps 步骤条 • Tabs 标签页

### 数据录入（Data Entry）
AutoComplete 自动完成 • Cascader 级联选择 • Checkbox 多选框 • ColorPicker 颜色选择器 • DatePicker 日期选择器 • Form 表单 • Input 输入框 • InputNumber 数字输入框 • Radio 单选框 • RangePicker 范围选择器 • Rate 评分 • Select 选择器 • Slider 滑动输入条 • Switch 开关 • TimePicker 时间选择器 • Transfer 穿梭框 • TreeSelect 树选择 • Upload 上传

### 数据展示（Data Display）
Avatar 头像 • Badge 徽标 • Card 卡片 • Carousel 走马灯 • Collapse 折叠面板 • Descriptions 描述列表 • Empty 空状态 • Image 图片 • List 列表 • Popover 气泡卡片 • QRCode 二维码 • Segmented 分段控制器 • Table 表格 • Tag 标签 • Timeline 时间轴 • Tooltip 文字提示 • Tree 树形控件 • Watermark 水印

### 反馈（Feedback）
Alert 警告提示 • Drawer 抽屉 • Message 全局提示 • Modal 对话框 • Notification 通知提醒框 • Popconfirm 气泡确认框 • Progress 进度条 • Result 结果 • Skeleton 骨架屏 • Spin 加载中 • Tour 漫游引导

### 其他（Other）
App 全局上下文 • BackTop 回到顶部 • ConfigProvider 全局配置 • FloatButton 悬浮按钮

> 📖 查看 [完整文档](https://hmfw.github.io/ant-design-hmfw) 了解每个组件的详细用法和 API

## 🎨 主题定制

使用 ConfigProvider 轻松自定义主题：

```vue
<template>
  <ConfigProvider :theme="customTheme">
    <App />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-hmfw'

const customTheme = {
  colorPrimary: '#00b96b',      // 主色
  colorSuccess: '#52c41a',      // 成功色
  colorWarning: '#faad14',      // 警告色
  colorError: '#ff4d4f',        // 错误色
  borderRadius: 8,              // 圆角
  fontSize: 14,                 // 字体大小
}
</script>
```

### 支持的 Design Tokens

- **颜色系统**：colorPrimary、colorSuccess、colorWarning、colorError 等
- **尺寸系统**：fontSize、borderRadius、controlHeight 等
- **间距系统**：padding、margin、gap 等

详见 [主题定制文档](https://hmfw.github.io/ant-design-hmfw/guide/theming)

## 🌍 国际化

内置中英文语言包，支持动态切换：

```vue
<template>
  <ConfigProvider :locale="locale">
    <Space>
      <Button @click="locale = zhCN">中文</Button>
      <Button @click="locale = enUS">English</Button>
    </Space>
    <App />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ConfigProvider, zhCN, enUS } from 'ant-design-hmfw'

const locale = ref(zhCN)
</script>
```

### 支持的语言

- 🇨🇳 简体中文（zh-CN）
- 🇺🇸 英语（en-US）

详见 [国际化文档](https://hmfw.github.io/ant-design-hmfw/guide/i18n)

## 🌐 浏览器兼容性

支持现代浏览器和 IE11+（需要 polyfills）

| Edge | Firefox | Chrome | Safari |
| --- | --- | --- | --- |
| ≥ 79 | last 2 versions | last 2 versions | last 2 versions |

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

# 构建文档站
pnpm build:docs

# 类型检查
pnpm typecheck
```

### 项目结构

```
ant-design-hmfw/
├── components/          # 组件库源码
│   ├── button/         # 单个组件目录
│   │   ├── Button.tsx  # 组件实现（TSX）
│   │   ├── types.ts    # 类型定义
│   │   ├── style/      # 样式文件
│   │   └── __tests__/  # 单元测试
│   ├── index.ts        # 统一导出
│   └── style.css       # 全局样式
├── docs/               # 文档站
├── scripts/            # 构建脚本
└── dist/               # 构建产物（自动生成）
```

## ✅ 测试

项目包含完整的测试套件，确保代码质量：

- **单元测试**：67 个测试文件，702 个测试用例 ✅
- **测试框架**：Vitest + @vue/test-utils
- **E2E 测试**：Playwright CLI（核心交互流程）

```bash
# 运行所有测试
pnpm test

# 监听模式（开发时使用）
pnpm test:watch

# 生成测试覆盖率报告
pnpm test:coverage
```

## 🤝 参与贡献

我们欢迎所有形式的贡献！无论是报告 Bug、提出新功能建议、改进文档还是提交代码。

### 贡献方式

- 🐛 [报告 Bug](https://github.com/hmfw/ant-design-hmfw/issues/new)
- 💡 [提出新功能](https://github.com/hmfw/ant-design-hmfw/issues/new)
- 📝 改进文档
- 💻 提交代码

### 开发流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发规范

- 遵循 TypeScript 和 Vue 3 最佳实践
- 为新功能编写单元测试
- 更新相关文档
- 保持代码风格一致（使用 ESLint）

## 📖 文档

- [快速上手](https://hmfw.github.io/ant-design-hmfw/guide/getting-started) - 5 分钟快速开始
- [组件文档](https://hmfw.github.io/ant-design-hmfw/components/button) - 完整的组件 API 和示例
- [主题定制](https://hmfw.github.io/ant-design-hmfw/guide/theming) - 自定义主题色和样式
- [国际化](https://hmfw.github.io/ant-design-hmfw/guide/i18n) - 多语言支持

## 🔗 相关链接

- [Ant Design](https://ant.design/) - 设计规范参考
- [Vue 3](https://vuejs.org/) - 框架文档
- [TypeScript](https://www.typescriptlang.org/) - 语言文档
- [Vitest](https://vitest.dev/) - 测试框架

## 📄 许可证

[MIT](./LICENSE) © 2026 ant-design-hmfw

---

<div align="center">
  <sub>Built with ❤️ by the ant-design-hmfw team</sub>
</div>

