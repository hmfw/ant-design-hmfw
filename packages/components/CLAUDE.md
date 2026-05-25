# packages/components

组件库核心包（`ant-design-hmfw`），包含所有 Vue3 组件实现、设计 Token 系统和工具函数。

## 包信息

- **包名**: `ant-design-hmfw`
- **构建工具**: tsup（基于 esbuild）
- **输出格式**: ESM + CJS，附带 `.d.ts` 类型声明
- **入口**: `src/index.ts` → `dist/index.{mjs,js,d.ts}`
- **样式入口**: `dist/style.css`

## 目录结构

```
src/
├── _locale/         # 国际化（zh-CN / en-US）
├── _theme/          # 设计 Token 系统（seed → map → inject）
├── _utils/          # 工具函数（cls, usePrefixCls 等）
├── config-provider/ # 全局配置（主题 + 国际化）
├── <component>/     # 各组件目录
├── index.ts         # 主导出（所有组件 + 类型）
└── style.css        # 全局样式（@import 各组件 CSS）
```

## 常用命令

```bash
pnpm test              # 单次运行所有测试
pnpm test:watch        # 监听模式
pnpm test:coverage     # 生成覆盖率报告
pnpm build             # 构建到 dist/
pnpm dev               # 监听模式构建（供 playground 热更新）
pnpm typecheck         # tsc 类型检查（不输出文件）
```

## 组件目录规范

```
component-name/
├── ComponentName.tsx        # 组件实现（TSX）
├── types.ts                 # TypeScript 类型定义
├── index.ts                 # 导出
├── style/
│   └── index.css            # 组件样式
└── __tests__/
    └── ComponentName.test.tsx
```

## 添加新组件

1. 创建目录：`mkdir -p src/my-component/{style,__tests__}`
2. 实现组件（参考下方模板）
3. `src/index.ts` 添加导出
4. `src/style.css` 添加 `@import './my-component/style/index.css'`

### 组件实现模板

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

## 命名规范

- **组件名**: PascalCase（`Button`、`ConfigProvider`）
- **文件名**: PascalCase.tsx（`Button.tsx`）
- **CSS 类名**: `.hmfw-{component-name}`，遵循 BEM
- **类型名**: PascalCase + 后缀（`ButtonProps`、`ButtonType`）
- **CSS 变量**: `--hmfw-{token-name}`（`--hmfw-color-primary`）

## 样式规范

- CSS 变量支持主题定制：`var(--hmfw-color-primary, #1677ff)`
- BEM 命名，前缀统一为 `hmfw-`
- 尺寸用 `px`，颜色用设计 tokens
- 过渡动画：`transition: all 0.2s`

## 设计 Token 系统（`src/_theme/`）

- `seed.ts` — 基础 Token（颜色、字体、间距原始值）
- `map.ts` — 派生 Token（由 seed 计算）
- `inject.ts` — 注入为 CSS 变量

**注意**：`inject.ts` 中 `UNITLESS_KEYS` 列表包含不加 `px` 的键（`lineHeight`、`fontWeight`、`opacity`、`zIndex` 等）。

## 工具函数

```typescript
import { cls } from '../_utils'
// cls('base', { 'mod': condition }, optionalStr)

import { usePrefixCls } from '../config-provider'
// usePrefixCls('button') → 'hmfw-button'
```

## 测试规范

每个组件必须覆盖：渲染、Props、事件、边界情况。

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

## 构建配置（tsup.config.ts）

```typescript
esbuildOptions(options) {
  options.jsx = 'automatic'
  options.jsxImportSource = 'vue'  // Vue JSX 运行时自动导入
}
```
