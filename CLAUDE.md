# @hmfw/ant-design

基于 Ant Design v6 的 Vue3 UI 组件库，使用 TypeScript + TSX 实现。

## 项目状态

**v0.1.0 发布版本** - 68 个组件全部完成，1828 个测试通过，已发布到 npm。

## 语言偏好

**重要**: 处理此项目时，请始终使用**中文**进行回复和交流（代码注释、文档说明、commit 信息、错误提示）。

## 项目概述

从零开始构建的 Vue3 UI 组件库，参考 Ant Design v6 设计规范，原生实现，最小化外部依赖。

### 核心特性

- 🎨 **68 个高质量组件** - 涵盖所有常用场景
- 💪 **完整 TypeScript 支持** - 所有组件提供完整类型定义
- 🎨 **语义化 API** - 所有组件支持 classNames/styles 精细化样式控制
- ⚡ **高性能** - Select/Table 支持虚拟滚动
- 🌍 **国际化** - 内置中英文语言包
- 🎨 **主题定制** - 基于 CSS Variables 的设计 Token 系统

## 技术栈

- **框架**: Vue 3.5+ | **语言**: TypeScript 5.9+ | **构建**: tsup
- **测试**: Vitest + @vue/test-utils | **E2E**: Playwright（36 个自动化测试）

## 项目结构

```
ant-design-hmfw/
├── components/          # 组件库核心（68 个组件）
│   ├── button/、input/、...
│   ├── _theme/         # 设计 Token 系统
│   ├── index.ts        # 统一导出
│   └── style.css       # 统一样式
├── docs/               # 文档站（VitePress）
├── scripts/            # 构建脚本
├── e2e/                # E2E 冒烟测试
└── dist/               # 构建产物
```

## 常用命令

```bash
# 开发
pnpm install          # 安装依赖
pnpm dev              # 启动文档站（http://localhost:5173）

# 构建
pnpm build:lib        # 构建组件库
pnpm build:docs       # 构建文档站

# 测试
pnpm test             # 运行单元测试
pnpm test:watch       # 监听模式
pnpm test:coverage    # 测试覆盖率
pnpm e2e              # E2E 测试
pnpm typecheck        # 类型检查

# 发布
pnpm precheck         # 发布前检查
pnpm release          # 发布到 npm
```

## 命名规范

- **组件名**: PascalCase（`Button`、`ConfigProvider`）
- **文件名**: PascalCase.tsx（`Button.tsx`）
- **CSS 类名**: `.hmfw-{component-name}`，遵循 BEM
- **类型名**: PascalCase + 后缀（`ButtonProps`、`ButtonType`）
- **CSS 变量**: `--hmfw-{token-name}`（`--hmfw-color-primary`）

## 组件开发规范

### 组件目录结构

```
components/button/
├── Button.tsx           # 组件实现
├── index.ts             # 导出
├── style/index.css      # 组件样式
├── __tests__/Button.test.tsx
└── types.ts             # 类型定义
```

### 语义化 API

所有组件都支持 `classNames` 和 `styles` 属性：

```typescript
interface SemanticAPI {
  classNames?: { root?: string /* 其他节点 */ }
  styles?: { root?: CSSProperties /* 其他节点 */ }
}
```

示例：

```vue
<Button :classNames="{ root: 'custom-btn', icon: 'custom-icon' }" :styles="{ root: { marginTop: '10px' } }">
  点击我
</Button>
```

### 添加新组件流程

1. **创建目录**: `mkdir -p components/my-component/{style,__tests__}`
2. **实现组件**: 参考现有组件模式
3. **更新导出**:
   - `components/index.ts` - 添加组件导出
   - `components/style.css` - 添加 `@import './my-component/style/index.css'`
4. **添加文档**:
   - `docs/demos/my-component/MyComponentBasic.vue` - demo 文件
   - `docs/demos/my-component/my-component.md` - 组件文档
   - `docs/src/nav/sidebar.ts` - 添加侧边栏条目
5. **编写测试**: 单元测试（必需）+ E2E 测试（可选）

## 测试

```bash
pnpm test Button         # 运行特定组件测试
pnpm e2e --headed        # 带浏览器界面运行 E2E
```

E2E 测试文件命名：`*.e2e.spec.ts`

## 图标系统

图标系统已独立为 npm 包 [`@hmfw/icons`](https://www.npmjs.com/package/@hmfw/icons)，包含 **681 个高质量图标**（从 Ant Design v6 同步）。

### 使用方式

```typescript
// 直接从图标包导入
import { SearchOutlined } from '@hmfw/icons'
```

### 图标搜索 API

```typescript
import { searchIcons, getIconsByCategory, getAllCategories, getAllIcons } from '@hmfw/icons'

const results = searchIcons('home') // 支持中英文
const editIcons = getIconsByCategory('编辑操作') // 按分类获取
const categories = getAllCategories() // 所有分类
const allIcons = getAllIcons() // 681 个图标
```

### 修改图标

在 [`hmfw/ant-design-icons`](https://github.com/hmfw/ant-design-icons) 仓库中：

1. 将 SVG 放入 `svg/`，运行 `pnpm gen:icons && pnpm gen:icon-metadata`
2. 发布新版本：`npm publish`
3. 主包升级依赖：`pnpm update @hmfw/icons`

## 设计 Token 系统

位于 `components/_theme/`：

- `seed.ts` - 基础 Token（颜色、字体、间距原始值）
- `map.ts` - 派生 Token（由 seed 计算）
- `inject.ts` - 注入为 CSS 变量

**重要**：`inject.ts` 中 `UNITLESS_KEYS` 列表包含不加 `px` 的键（`lineHeight`、`fontWeight`、`opacity`、`zIndex` 等）。

用户通过 `ConfigProvider` 的 `theme` 属性覆盖：

```vue
<ConfigProvider :theme="{ colorPrimary: '#00b96b', borderRadius: 8 }">
  <App />
</ConfigProvider>
```

## 发布流程

1. 更新 `package.json` 版本号
2. 更新 `CHANGELOG.md`
3. 运行 `pnpm precheck`
4. 发布 `pnpm release`
5. 打标签 `git tag vX.X.X && git push --tags`

## 参考资源

- **Ant Design v6**: `/Users/hmfw/GitHub/ant-design` (本地源码)
- [Vue 3](https://vuejs.org/) | [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/) (使用 Playwright-Cli 运行)

## 许可证

MIT
