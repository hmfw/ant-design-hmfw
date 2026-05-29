# packages/docs

组件库的文档站，同时作为开发调试环境。基于 Vite + Vue 3 + Vue Router，展示组件 API 文档和交互式代码演示。

## 包信息

- **包名**: `docs`（private）
- **构建工具**: Vite 5
- **依赖**: `ant-design-hmfw` workspace 本地包
- **默认端口**: 5173

## 目录结构

```
src/
├── App.vue               # 应用根组件
├── main.ts               # 应用入口
├── components/
│   ├── DemoBlock.vue     # 核心演示组件（预览+代码折叠+TS/JS切换）
│   ├── NavBar.vue        # 顶部导航栏
│   ├── Sidebar.vue       # 左侧侧边栏
│   └── TocNav.vue        # 右侧目录导航
├── layouts/
│   └── AppLayout.vue     # 文档页布局（NavBar + Sidebar + 内容 + TocNav）
├── nav/
│   └── sidebar.ts        # 侧边栏配置（组件列表、指南列表）
├── pages/
│   └── HomePage.vue      # 首页
├── router/
│   └── index.ts          # 路由配置（组件路由自动生成，无需手动维护）
└── styles/               # 全局样式
plugins/
└── auto-demo-imports.ts  # Vite 插件：自动注入 demo import 语句
demos/                    # 所有组件目录，每个包含 .md 文档和 .vue demo 文件
│   ├── button/
│   │   ├── button.md     # 组件文档（无需 <script setup>，由插件自动注入）
│   │   ├── ButtonBasic.vue
│   │   └── ...
│   └── ...（57 个组件各自目录）
guide/                    # 指南文档（.md 文件）
public/                   # 静态资源（logo、favicon）
```

## 常用命令

```bash
pnpm dev      # 启动开发服务器（http://localhost:5173）
pnpm build    # 构建静态文档站
pnpm preview  # 预览构建结果
```

## 演示系统

文档站使用自定义 `DemoBlock` 组件实现交互式演示，支持：

- **组件预览** — 实时渲染组件效果
- **代码折叠/展开** — 点击"查看代码"展开源码
- **TS/JS 双版本** — TypeScript/JavaScript 切换查看
- **复制按钮** — 一键复制当前版本源码

### DemoBlock 使用方式

每个组件文档（`demos/{name}/{name}.md`）中直接使用 `DemoBlock`，**无需手动 import**：

```markdown
## 代码演示

### 按钮类型

<DemoBlock title="按钮类型" :source="ButtonBasicSource">
  <ButtonBasic />
</DemoBlock>
```

- `ButtonBasic` 和 `ButtonBasicSource` 由 `plugins/auto-demo-imports.ts` 在构建时自动注入
- 变量名规则：文件名去掉 `.vue` 后缀即为组件名，加 `Source` 后缀为原始代码字符串
- `DemoBlock` 已全局注册（`src/main.ts`），markdown 中无需 import

### 添加新 demo

1. 在 `demos/{component}/` 下创建 `ComponentNameXxx.vue`
2. 在对应的 `demos/{component}/{component}.md` 中直接使用 `<DemoBlock>`，无需添加 import

## 添加组件文档

1. 在 `demos/{component}/` 下创建 demo `.vue` 文件和 `{component}.md`
2. 在 `src/nav/sidebar.ts` 中添加侧边栏链接

路由会自动从 `demos/` 目录扫描生成，**无需修改** `src/router/index.ts`。

## 注意事项

- 开发时 Vite alias 将 `ant-design-hmfw` 指向 `../../components/src/index.ts`，无需预构建
- Markdown 文件通过 `unplugin-vue-markdown` 插件渲染为 Vue 组件
- `plugins/auto-demo-imports.ts` 在 `unplugin-vue-markdown` 之前运行（`enforce: 'pre'`），自动扫描同目录 `.vue` 文件并注入 `<script setup>` 块
