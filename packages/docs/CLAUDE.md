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
│   └── index.ts          # 路由配置
└── styles/               # 全局样式
components/               # 57 个组件文档（.md 文件，unplugin-vue-markdown 渲染）
demos/                    # 所有 demo .vue 文件（按组件目录分组）
│   ├── button/           # ButtonBasic.vue、ButtonSize.vue 等
│   ├── input/
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

每个组件文档（`.md`）通过以下模式引入 demo：

```markdown
<script setup>
import ButtonBasic from '../demos/button/ButtonBasic.vue'
import ButtonBasicSource from '../demos/button/ButtonBasic.vue?raw'
</script>

<DemoBlock title="按钮类型" :source="ButtonBasicSource">
  <ButtonBasic />
</DemoBlock>
```

- `?raw` 导入是 Vite 原生支持，返回文件原始字符串内容
- `DemoBlock` 已全局注册（`src/main.ts`），markdown 中无需 import
- TS→JS 转换在客户端 `DemoBlock.vue` 内部通过 regex 完成

### 添加新 demo

1. 在 `demos/{component}/` 下创建 `ComponentNameXxx.vue`（组件名+描述词）
2. 在对应的 `components/{component}.md` 中：
   - 在 `<script setup>` 块添加组件和 `?raw` 导入
   - 用 `<DemoBlock>` 新增演示块

## 添加组件文档

1. 在 `demos/{component}/` 下创建 demo `.vue` 文件
2. 在 `components/` 下创建 `{component}.md`
3. 在 `src/router/index.ts` 中添加路由
4. 在 `src/nav/sidebar.ts` 中添加侧边栏链接

## 注意事项

- 开发时 Vite alias 将 `ant-design-hmfw` 指向 `../../components/src/index.ts`，无需预构建
- Markdown 文件通过 `unplugin-vue-markdown` 插件渲染为 Vue 组件
