# ant-design-hmfw

基于 Ant Design v6 的 Vue3 UI 组件库，使用 TypeScript + TSX 实现。

## 项目概述

从零开始构建的 Vue3 UI 组件库，参考 Ant Design v6 的设计规范和 API 设计，原生实现，最小化外部依赖。

## 技术栈

- **框架**: Vue 3.5+
- **语言**: TypeScript 5.9+
- **构建**: tsup（基于 esbuild）
- **测试**: Vitest + @vue/test-utils
- **E2E**: Playwright CLI（`playwright-cli`）
- **包管理**: pnpm workspace（monorepo）

## Monorepo 结构

```
ant-design-hmfw/
├── packages/
│   ├── components/   # 组件库核心 → 见 packages/components/CLAUDE.md
│   ├── playground/   # 开发调试环境 → 见 packages/playground/CLAUDE.md
│   └── docs/         # 文档站 → 见 packages/docs/CLAUDE.md
├── IMPLEMENTATION_PLAN.md
├── CLAUDE.md
└── package.json
```

各子包的详细说明见对应目录下的 CLAUDE.md。

## 根目录命令

```bash
# 安装所有依赖
pnpm install

# 各包独立操作（推荐）
pnpm --filter ant-design-hmfw <script>   # 组件库
pnpm --filter playground <script>        # playground
pnpm --filter docs <script>              # 文档站
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
# 1. 在 components 包中创建组件
mkdir -p packages/components/src/my-component/{style,__tests__}

# 2. 实现后更新：
#    packages/components/src/index.ts   — 添加导出
#    packages/components/src/style.css  — 添加 @import

# 3. 在 playground 中添加演示
#    packages/playground/src/demos/MyComponentDemo.tsx
#    packages/playground/src/App.tsx    — 添加到 demos 数组

# 4. 更新 IMPLEMENTATION_PLAN.md 状态
```

### 运行测试

```bash
pnpm --filter ant-design-hmfw test
pnpm --filter ant-design-hmfw test:watch
pnpm --filter ant-design-hmfw test:coverage
```

### 构建

```bash
pnpm --filter ant-design-hmfw build
```

### 启动 Playground

```bash
pnpm --filter playground dev
# 访问 http://localhost:5177
```

### E2E 验证

```bash
playwright-cli open http://localhost:5177
playwright-cli screenshot --filename=/tmp/demo.png
playwright-cli console error
playwright-cli close
```

## 设计 Token 系统

位于 `packages/components/src/_theme/`：

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
