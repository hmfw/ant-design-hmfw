# ant-design-hmfw

基于 Ant Design v6 的 Vue3 UI 组件库，使用 TypeScript + TSX 实现。

## 项目概述

从零开始构建的 Vue3 UI 组件库，参考 Ant Design v6 的设计规范和 API 设计，原生实现，最小化外部依赖。

## 技术栈

- **框架**: Vue 3.5+
- **语言**: TypeScript 5.9+
- **构建**: tsup (基于 esbuild)
- **测试**: Vitest + @vue/test-utils
- **E2E**: Playwright CLI (`playwright-cli`)
- **包管理**: pnpm workspace (monorepo)

## 项目结构

```
ant-design-hmfw/
├── packages/
│   ├── components/              # 组件库核心
│   │   ├── src/
│   │   │   ├── _locale/         # 国际化（zh-CN / en-US）
│   │   │   ├── _theme/          # 设计 Token 系统
│   │   │   ├── _utils/          # 工具函数（cls, usePrefixCls 等）
│   │   │   ├── config-provider/ # 全局配置（主题 + 国际化）
│   │   │   ├── <component>/     # 各组件目录（见下方规范）
│   │   │   ├── index.ts         # 主导出
│   │   │   └── style.css        # 全局样式（@import 各组件 CSS）
│   │   ├── dist/                # 构建输出
│   │   ├── tsup.config.ts
│   │   └── package.json
│   ├── playground/              # 开发调试环境（Vite）
│   │   ├── src/
│   │   │   ├── App.tsx          # Tab 导航主应用（每组件一个 Tab）
│   │   │   ├── demos/           # 各组件演示文件（XxxDemo.tsx）
│   │   │   └── main.ts
│   │   └── package.json
│   └── docs/                    # 文档站（待实现）
├── IMPLEMENTATION_PLAN.md       # 实现计划与进度
├── CLAUDE.md                    # 本文件（开发指南）
└── package.json
```

## 组件目录规范

每个组件遵循以下结构：

```
component-name/
├── ComponentName.tsx        # 组件实现（TSX）
├── types.ts                 # TypeScript 类型定义
├── index.ts                 # 导出
├── style/
│   └── index.css            # 组件样式
└── __tests__/
    └── ComponentName.test.tsx  # 单元测试
```

## 命名规范

- **组件名**: PascalCase（如 `Button`、`ConfigProvider`）
- **文件名**: PascalCase.tsx（如 `Button.tsx`）
- **CSS 类名**: `.hmfw-{component-name}`，遵循 BEM（如 `.hmfw-button`、`.hmfw-button-primary`）
- **类型名**: PascalCase + 后缀（如 `ButtonProps`、`ButtonType`）
- **CSS 变量**: `--hmfw-{token-name}`（如 `--hmfw-color-primary`）

## 组件实现模板

```tsx
import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export const MyComponent = defineComponent({
  name: 'MyComponent',
  props: {
    size: {
      type: String as PropType<'small' | 'middle' | 'large'>,
      default: 'middle',
    },
    disabled: Boolean,
  },
  emits: ['change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('my-component')

    const classes = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-${props.size}`]: props.size !== 'middle',
        [`${prefixCls}-disabled`]: props.disabled,
      })
    )

    return () => (
      <div class={classes.value}>
        {slots.default?.()}
      </div>
    )
  },
})
```

## 样式规范

- 使用 CSS 变量支持主题定制（`var(--hmfw-color-primary, #1677ff)`）
- 遵循 BEM 命名，前缀统一为 `hmfw-`
- 尺寸使用 `px`，颜色使用设计 tokens
- 过渡动画使用 `transition: all 0.2s`

## 测试规范

每个组件必须包含：渲染测试、Props 测试、事件测试、边界情况测试。

```tsx
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { MyComponent } from '../MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.classes()).toContain('hmfw-my-component')
  })
})
```

## 开发工作流

### 1. 开发新组件

```bash
# 创建目录结构
mkdir -p packages/components/src/my-component/{style,__tests__}

# 实现组件后，更新以下文件：
# packages/components/src/index.ts   — 添加导出
# packages/components/src/style.css  — 添加 @import
```

### 2. 运行测试

```bash
pnpm --filter ant-design-hmfw test          # 单次运行
pnpm --filter ant-design-hmfw test:watch    # 监听模式
pnpm --filter ant-design-hmfw test:coverage # 覆盖率
```

### 3. 构建

```bash
pnpm --filter ant-design-hmfw build
```

### 4. 开发调试（Playground）

```bash
# 启动 playground（端口自动递增，通常 5177）
pnpm --filter playground dev

# 访问 http://localhost:5177
```

### 5. Playwright E2E 验证

```bash
# 确保 playground 正在运行，然后：
playwright-cli open http://localhost:5177
playwright-cli screenshot --filename=/tmp/demo.png
playwright-cli console error
playwright-cli close
```

### 6. 完成组件后

1. 创建 `packages/playground/src/demos/XxxDemo.tsx`
2. 在 `packages/playground/src/App.tsx` 的 `demos` 数组中添加条目
3. 更新 `IMPLEMENTATION_PLAN.md` 状态

## 构建配置

### tsup.config.ts

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['vue'],
  treeshake: true,
  splitting: true,
  clean: true,
  sourcemap: true,
  esbuildOptions(options) {
    options.jsx = 'automatic'
    options.jsxImportSource = 'vue'
  },
})
```

## 设计 Token 系统

位于 `packages/components/src/_theme/`：

- `seed.ts` — 基础 Token（颜色、字体、间距等原始值）
- `map.ts` — 派生 Token（由 seed 计算得出）
- `inject.ts` — 将 Token 注入为 CSS 变量（注意：lineHeight 等无单位值不加 `px`）

**重要**：`inject.ts` 中 `UNITLESS_KEYS` 列表包含不应加 `px` 的 token 键名（`lineHeight`、`fontWeight`、`opacity`、`zIndex` 等）。

## 工具函数

### cls() — 类名合并

```typescript
import { cls } from '../_utils'

const classes = cls(
  'base-class',
  { 'conditional-class': condition },
  optionalString
)
```

### usePrefixCls() — 前缀管理

```typescript
import { usePrefixCls } from '../config-provider'

const prefixCls = usePrefixCls('button') // → 'hmfw-button'
```

## Playground 结构

`packages/playground/src/App.tsx` 维护一个 `demos` 数组，每个条目对应一个 Tab：

```typescript
const demos = [
  { key: 'button', label: 'Button', component: ButtonDemo },
  // ...
]
```

- 每个组件一个独立 Tab
- 导航栏使用 `flex-wrap: wrap` 支持换行
- 演示文件放在 `packages/playground/src/demos/XxxDemo.tsx`

## 常见问题

### Q: 为什么使用 TSX 而不是 SFC？
A: TSX 提供更好的类型推断和组合能力，适合构建组件库。

### Q: 为什么使用 tsup 而不是 Vite？
A: tsup 基于 esbuild，构建速度更快，配置更简单，专为库构建优化。

### Q: 如何处理 JSX 运行时？
A: 使用 `jsx: 'automatic'` 和 `jsxImportSource: 'vue'` 自动导入 Vue 的 JSX 运行时。

### Q: 为什么 line-height 变量值不对？
A: `inject.ts` 中所有数字值默认加 `px`，但 `lineHeight` 是无单位比值。已通过 `UNITLESS_KEYS` 列表修复。

### Q: Playground 端口是多少？
A: 默认从 5173 开始，若被占用自动递增。通常是 5177。

## 参考资源

- [Ant Design v6 官方文档](https://ant.design/)
- [Vue 3 文档](https://vuejs.org/)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [Playwright 文档](https://playwright.dev/)

## 许可证

MIT
