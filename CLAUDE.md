# ant-design-hmfw

基于 Ant Design v6 的 Vue3 UI 组件库，使用 TypeScript + TSX 实现。

## 语言偏好

**重要**: 在处理此项目时，请始终使用**中文**进行回复和交流。

- **代码注释**: 中文
- **文档说明**: 中文
- **与用户交流**: 中文
- **commit 信息**: 中文
- **错误提示**: 中文

## 项目概述

从零开始构建的 Vue3 UI 组件库，参考 Ant Design v6 的设计规范和 API 设计，原生实现，最小化外部依赖。

## 技术栈

- **框架**: Vue 3.5+
- **语言**: TypeScript 5.9+
- **构建**: tsup（基于 esbuild）
- **测试**: Vitest + @vue/test-utils
- **E2E**: Playwright CLI（`playwright-cli`）
- **包管理**: pnpm

## 项目结构

```
ant-design-hmfw/
├── components/          # 组件库核心源码
├── docs/                # 文档站（同时作为开发调试环境）
├── scripts/             # 构建脚本（图标生成等）
├── dist/                # 构建产物（自动生成）
├── IMPLEMENTATION_PLAN.md
├── CLAUDE.md
└── package.json
```

## 常用命令

```bash
pnpm install          # 安装依赖
pnpm dev              # 启动文档站（访问 http://localhost:5173）
pnpm build:lib        # 构建组件库
pnpm build:docs       # 构建文档站
pnpm test             # 运行测试
pnpm test:watch       # 监听模式测试
pnpm test:coverage    # 测试覆盖率
pnpm typecheck        # 类型检查
```

## 命名规范

- **组件名**: PascalCase（`Button`、`ConfigProvider`）
- **文件名**: PascalCase.tsx（`Button.tsx`）
- **CSS 类名**: `.hmfw-{component-name}`，遵循 BEM
- **类型名**: PascalCase + 后缀（`ButtonProps`、`ButtonType`）
- **CSS 变量**: `--hmfw-{token-name}`（`--hmfw-color-primary`）

## 开发工作流

### 开发新组件

```bash
# 1. 创建组件目录
mkdir -p components/my-component/{style,__tests__}

# 2. 实现后更新：
#    components/index.ts   — 添加导出
#    components/style.css  — 添加 @import

# 3. 在 docs 中添加演示和文档
#    docs/demos/my-component/MyComponentBasic.vue  — demo 文件
#    docs/demos/my-component/my-component.md       — 组件文档（路由自动生成）
#    docs/src/nav/sidebar.ts                       — 添加侧边栏条目

# 4. 更新 IMPLEMENTATION_PLAN.md 状态
```

### 运行测试

```bash
pnpm test
pnpm test:watch
pnpm test:coverage
```

### 构建

```bash
pnpm build:lib
```

### 启动文档站（开发调试）

```bash
pnpm dev
# 访问 http://localhost:5173
```

### E2E 验证

```bash
playwright-cli open http://localhost:5173
playwright-cli screenshot --filename=/tmp/demo.png
playwright-cli console error
playwright-cli close
```

## 设计 Token 系统

位于 `components/_theme/`：

- `seed.ts` — 基础 Token（颜色、字体、间距原始值）
- `map.ts` — 派生 Token（由 seed 计算）
- `inject.ts` — 注入为 CSS 变量

**重要**：`inject.ts` 中 `UNITLESS_KEYS` 列表包含不加 `px` 的键（`lineHeight`、`fontWeight`、`opacity`、`zIndex` 等）。

## 参考资源

- [Ant Design v6 官方文档](https://ant.design/)
- [Vue 3 文档](https://vuejs.org/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [Playwright 文档](https://playwright.dev/)

## 许可证

MIT
