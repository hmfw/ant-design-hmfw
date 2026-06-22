# ant-design-hmfw

基于 Ant Design v6 的 Vue3 UI 组件库，使用 TypeScript + TSX 实现。

## 项目状态

**v0.1.0 发布版本** - 68 个组件全部完成，1891 个测试通过，已发布到 npm。

## 语言偏好

**重要**: 在处理此项目时，请始终使用**中文**进行回复和交流。

- **代码注释**: 中文
- **文档说明**: 中文
- **与用户交流**: 中文
- **commit 信息**: 中文
- **错误提示**: 中文

## 项目概述

从零开始构建的 Vue3 UI 组件库，参考 Ant Design v6 的设计规范和 API 设计，原生实现，最小化外部依赖。

### 核心特性

- 🎨 **68 个高质量组件** - 涵盖所有常用场景
- 💪 **完整 TypeScript 支持** - 所有组件提供完整类型定义
- 🎨 **语义化 API** - 所有组件支持 classNames/styles 精细化样式控制
- ⚡ **高性能** - Select/Table 支持虚拟滚动
- 🌍 **国际化** - 内置中英文语言包
- 🎨 **主题定制** - 基于 CSS Variables 的设计 Token 系统

## 技术栈

- **框架**: Vue 3.5+
- **语言**: TypeScript 5.9+
- **构建**: tsup（基于 esbuild）
- **测试**: Vitest + @vue/test-utils
- **E2E**: Playwright（36 个自动化测试）
- **包管理**: pnpm

## 项目结构

```
ant-design-hmfw/
├── components/          # 组件库核心源码（68 个组件）
│   ├── button/
│   ├── input/
│   ├── ...
│   ├── _theme/         # 设计 Token 系统
│   ├── index.ts        # 统一导出
│   └── style.css       # 统一样式
├── docs/                # 文档站（VitePress）
├── scripts/             # 构建脚本
│   ├── generate-icons.ts            # 图标组件生成
│   ├── generate-icon-metadata.ts    # 图标元数据生成
│   ├── generate-llm-manifest.ts     # LLM 文档生成
│   ├── prepublish-check.js          # 发布前检查
│   └── ...
├── e2e/                 # E2E 冒烟测试
├── dist/                # 构建产物（自动生成）
├── CLAUDE.md            # AI 开发指令（本文件）
├── README.md            # 项目说明
├── CHANGELOG.md         # 版本历史
└── package.json
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
pnpm test:watch       # 监听模式测试
pnpm test:coverage    # 测试覆盖率
pnpm e2e              # 运行 E2E 测试
pnpm typecheck        # 类型检查

# 图标
pnpm gen:icons            # 从 SVG 生成图标组件
pnpm gen:icon-metadata    # 生成图标元数据（分类、关键词）

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
├── style/
│   └── index.css       # 组件样式
├── __tests__/
│   ├── Button.test.tsx # 单元测试
│   └── Button.e2e.spec.ts # E2E 测试（可选）
└── types.ts            # 类型定义
```

### 语义化 API

所有组件都支持 `classNames` 和 `styles` 属性，用于精细化样式控制：

```typescript
interface SemanticAPI {
  classNames?: {
    root?: string
    // 组件特定的语义化节点
  }
  styles?: {
    root?: CSSProperties
    // 组件特定的语义化节点
  }
}
```

示例：

```vue
<Button :classNames="{ root: 'custom-button', icon: 'custom-icon' }" :styles="{ root: { marginTop: '10px' } }">
  点击我
</Button>
```

### 添加新组件

1. **创建组件目录**

   ```bash
   mkdir -p components/my-component/{style,__tests__}
   ```

2. **实现组件** - 参考现有组件的实现模式

3. **更新导出**
   - `components/index.ts` - 添加组件导出
   - `components/style.css` - 添加 `@import './my-component/style/index.css'`

4. **添加文档和演示**
   - `docs/demos/my-component/MyComponentBasic.vue` - demo 文件
   - `docs/demos/my-component/my-component.md` - 组件文档
   - `docs/src/nav/sidebar.ts` - 添加侧边栏条目

5. **编写测试**
   - 单元测试（必需）
   - E2E 测试（可选）

## 测试

### 单元测试

```bash
pnpm test                # 运行所有测试
pnpm test Button         # 运行特定组件测试
pnpm test:watch          # 监听模式
pnpm test:coverage       # 生成覆盖率报告
```

### E2E 测试

```bash
pnpm e2e                 # 运行所有 E2E 测试
pnpm e2e --headed        # 带浏览器界面
pnpm e2e --debug         # 调试模式
```

E2E 测试文件命名：`*.e2e.spec.ts`

## 图标系统

项目包含 **681 个高质量图标**（从 Ant Design v6 同步），支持自动化生成和元数据管理。

### 图标文件结构

```
components/icon/
├── svg/                # 源 SVG 文件（681 个）
├── icons/              # 生成的图标组件（自动生成）
│   ├── HomeOutlined.ts
│   ├── HomeFilled.ts
│   └── ...
├── metadata.ts         # 图标元数据（自动生成）
├── utils.ts            # 搜索和分类工具
└── Icon.tsx            # 图标包装组件
```

### 图标生成流程

1. **添加 SVG 文件** - 将 SVG 文件放入 `components/icon/svg/`
   - 文件名使用 kebab-case（如 `home.svg`、`home-filled.svg`）
   - Outlined 图标不带后缀，Filled 图标以 `-filled` 结尾

2. **生成图标组件** - 运行 `pnpm gen:icons`
   - 自动解析 SVG 的 `viewBox` 和 `path`
   - 生成 Vue 函数式组件（`HomeOutlined`、`HomeFilled`）
   - 生成统一导出文件 `icons/index.ts`

3. **生成元数据** - 运行 `pnpm gen:icon-metadata`
   - 基于文件名智能推导分类（feedback、action、navigation 等）
   - 自动生成搜索关键词和同义词
   - 输出到 `metadata.ts`（2700+ 行）

4. **构建时自动执行** - `pnpm build:lib` 会自动运行上述两个脚本

### 图标元数据

`metadata.ts` 为每个图标提供：

- **category**: 所属分类（15 个中文分类：方向指示、品牌标识、提示建议、编辑格式、数据图表、网络通讯、文件文档、网站通用、编辑操作、商业财产、时间日期、多媒体、地图交通、办公应用、标记）
- **keywords**: 搜索关键词（包含中英文同义词，如 `home` → `['home', 'house', 'homepage', '首页', '主页']`）
- **tags**: 特殊标记（如 `loading` 标记为 `animation`）

### 图标搜索 API

```typescript
import { searchIcons, getIconsByCategory, getAllCategories, getAllIcons } from 'ant-design-hmfw'

// 搜索图标（支持中英文名称、关键词、同义词）
const results = searchIcons('home') // 可搜索 'home'、'house'、'首页'

// 按分类获取
const editIcons = getIconsByCategory('编辑操作') // 62 个

// 获取所有分类
const categories = getAllCategories() // ['办公应用', '品牌标识', ...]

// 获取所有图标
const allIcons = getAllIcons() // 681 个
```

### 修改图标元数据规则

编辑 `scripts/generate-icon-metadata.ts`：

- **调整分类规则** - 修改 `categoryRules` 对象
- **添加同义词** - 修改 `synonyms` 对象
- **自定义分类逻辑** - 修改 `inferCategory` 函数

修改后运行 `pnpm gen:icon-metadata` 重新生成。

## 设计 Token 系统

位于 `components/_theme/`：

- `seed.ts` - 基础 Token（颜色、字体、间距原始值）
- `map.ts` - 派生 Token（由 seed 计算）
- `inject.ts` - 注入为 CSS 变量

**重要**：`inject.ts` 中 `UNITLESS_KEYS` 列表包含不加 `px` 的键（`lineHeight`、`fontWeight`、`opacity`、`zIndex` 等）。

用户可通过 `ConfigProvider` 的 `theme` 属性覆盖：

```vue
<ConfigProvider :theme="{ colorPrimary: '#00b96b', borderRadius: 8 }">
  <App />
</ConfigProvider>
```

## 发布流程

1. **更新版本号** - 修改 `package.json` 中的 `version`
2. **更新 CHANGELOG.md** - 记录版本变更
3. **运行发布检查** - `pnpm precheck`
4. **发布到 npm** - `pnpm release`
5. **打标签并推送** - `git tag vX.X.X && git push --tags`

## 参考资源

- [Ant Design v6 官方文档](https://ant.design/)
- [Vue 3 文档](https://vuejs.org/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [Playwright 文档](https://playwright.dev/)

## 许可证

MIT
