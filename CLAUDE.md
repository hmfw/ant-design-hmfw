# @hmfw/ant-design

基于 Ant Design v6 的 Vue3 UI 组件库，使用 TypeScript + TSX 实现。

## 语言偏好

**重要**: 处理此项目时，请始终使用**中文**进行回复和交流（代码注释、文档说明、commit 信息、错误提示）。

## 项目概述

从零开始构建的 Vue3 UI 组件库，参考 Ant Design v6 设计规范，原生实现，最小化外部依赖。

### 核心特性

- 🎨 **67 个高质量组件** - 涵盖所有常用场景
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
├── components/          # 组件库核心（67 个组件，含 demos）
│   ├── button/、input/、...
│   │   ├── *.tsx       # 组件实现
│   │   ├── style/      # 组件样式
│   │   ├── __tests__/  # 单元测试
│   │   └── demos/      # 文档 & 演示
│   ├── _theme/         # 设计 Token 系统
│   ├── index.ts        # 统一导出
│   └── style.css       # 统一样式
├── docs/               # 文档站框架（路由、布局、插件）
├── scripts/            # 构建脚本
└── dist/               # 构建产物
```

## 常用命令

```bash
# 开发
pnpm install          # 安装依赖
pnpm dev              # 启动文档站（http://localhost:5173）
# 注意：默认文档站服务已启动。启动前请先判断服务是否已在运行
#      （检查 http://localhost:5173 或对应端口），已启动则无需重复启动。

# 构建
pnpm build:lib        # 构建组件库（含主题 CSS 自动生成）
pnpm build:docs       # 构建文档站
pnpm generate-theme   # 单独生成主题 CSS（修改 seed/map 后运行）

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
├── Button.tsx              # 组件实现
├── index.ts                # 导出
├── types.ts                # 类型定义
├── style/index.css         # 组件样式
├── __tests__/Button.test.tsx
└── demos/                  # 文档与示例
    ├── button.md           # 组件文档（路由页面）
    └── ButtonBasic.vue     # 演示组件
```

### 语义化 API

所有组件都支持 `classNames` 和 `styles` 属性，用于精细化控制组件各节点的样式：

```typescript
interface SemanticAPI {
  classNames?: { root?: string /* 其他节点 */ }
  styles?: { root?: CSSProperties /* 其他节点 */ }
}
```

### Props 类型定义规范

**必须**使用 `satisfies Record<keyof XProps, any>` 模式确保运行时 props 与 TypeScript 接口一致，杜绝双源头漂移：

```typescript
// types.ts — 单一类型来源
export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  // ...
}

// Button.tsx
import type { ButtonProps } from './types'

// 1. 提取 props 对象，用 satisfies 强制 key 集合与接口完全一致
const buttonProps = {
  type: { type: String as PropType<ButtonType>, default: 'default' },
  size: { type: String as PropType<ButtonSize>, default: 'middle' },
  disabled: { type: Boolean, default: false },
  // 可选且无默认值的属性必须显式 default: undefined
  classNames: { type: Object as PropType<ButtonClassNames>, default: undefined },
} satisfies Record<keyof ButtonProps, any>
//  ↑ 接口中增/删属性 → 此处编译报错，强制同步

// 2. 组件引用 props 对象
export default defineComponent({
  name: 'Button',
  props: buttonProps,
  // ...
})
```

**注意**：

- 可选且**有**默认值的属性（如 `type: 'default'`）→ 写实际默认值
- 可选且**无**默认值的属性（如 `classNames`）→ 必须写 `default: undefined`，否则 `satisfies` 无法匹配 `?` 可选字段
- 若组件无 `emits` 事件（如 `Breadcrumb`），可进一步用 `defineComponent<XProps>({...})` 在 `setup(props)` 中获取接口类型

### 添加新组件流程

1. **创建目录**: `mkdir -p components/my-component/{style,__tests__}`
2. **实现组件**: 参考现有组件模式
3. **更新导出**:
   - `components/index.ts` - 添加组件导出
   - `components/style.css` - 添加 `@import './my-component/style/index.css'`
4. **添加文档**:
   - `components/my-component/demos/my-component.md` - 组件文档
   - `components/my-component/demos/MyComponentBasic.vue` - demo 文件
   - `docs/router/sidebar.ts` - 添加侧边栏条目
   - 运行 `pnpm gen:demo-routes` 更新路由
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

位于 `components/_theme/`，采用**构建时生成 + 运行时覆盖**架构：

- `theme.ts` - **唯一源文件**，包含完整三层管道：
  1. `SeedTokens` 接口 + `defaultSeedTokens`（18 个原始语义参数）
  2. `MapTokens` 接口 + `generateMapTokens()`（~100 个派生 Token，通过 `lighten`/`darken`/`alpha` 计算）
  3. `tokensToCssVars()` / `injectCssVars()` / `injectScopedCssVars()`（CSS 变量注入）
- `style/index.css` - 静态 CSS 变量默认值，由 `scripts/generate-theme-css.ts` **自动生成，严禁手动编辑**

### 关键约束

- **TS 代码是唯一真值源**：修改 seed 默认值或 map 派生逻辑后，必须运行 `pnpm generate-theme` 重新生成 CSS
- `precheck` 中会自动校验 CSS 是否与 TS 同步（`git diff --exit-code`），不匹配则发布失败
- `build:lib` 会先执行 `pnpm generate-theme` 再构建，确保产物中的 CSS 是最新的
- `isUnitless` 使用前缀匹配（`startsWith`）识别无单位属性（`lineHeight`、`zIndex`、`opacity` 等）

用户通过 `ConfigProvider` 的 `theme` 属性覆盖 seed token，所有派生 token 自动重算并注入：

```vue
<ConfigProvider :theme="{ colorPrimary: '#00b96b', borderRadius: 8 }">
  <App />
</ConfigProvider>
```

## 参考资源

- **Ant Design v6**: `/Users/hmfw/GitHub/ant-design` (本地源码)
- [Vue 3](https://vuejs.org/) | [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/) (使用 Playwright-Cli 运行)

## 许可证

MIT
