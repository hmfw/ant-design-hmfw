# Checkbox 组件修复行动计划

## 🎯 P0 级修复（必须立即处理）

### 1. 添加 Props satisfies 约束

**文件**：`components/checkbox/Checkbox.tsx`

**当前问题**：

- Line 19-34：Checkbox props 直接内联，未使用 satisfies 约束
- Line 209-217：CheckboxGroup props 同样缺少约束
- 违反项目 CLAUDE.md 中的强制规范

**修复步骤**：

#### 1.1 Checkbox Props

```typescript
// 在 Checkbox.tsx 顶部添加类型导入
import type { CheckboxProps, CheckboxClassNames, CheckboxStyles, CheckboxValueType } from './types'

// 提取 props 对象
const checkboxProps = {
  checked: { type: Boolean, default: undefined },
  defaultChecked: { type: Boolean, default: false },
  indeterminate: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  value: {
    type: [String, Number, Boolean] as PropType<CheckboxValueType>,
    default: undefined,
  },
  autoFocus: { type: Boolean, default: false },
  name: { type: String, default: undefined },
  id: { type: String, default: undefined },
  title: { type: String, default: undefined },
  tabIndex: { type: Number, default: undefined },
  required: { type: Boolean, default: false },
  skipGroup: { type: Boolean, default: false },
  classNames: {
    type: Object as PropType<CheckboxClassNames>,
    default: undefined,
  },
  styles: {
    type: Object as PropType<CheckboxStyles>,
    default: undefined,
  },
} satisfies Record<keyof CheckboxProps, any>

// 修改组件定义
export const Checkbox = defineComponent({
  name: 'Checkbox',
  props: checkboxProps, // 使用提取的 props
  emits: [/*...*/],
  setup(props, { slots, emit, expose }) {
    // ...
  },
})
```

#### 1.2 CheckboxGroup Props

```typescript
import type { CheckboxGroupProps, CheckboxValueType, CheckboxOptionType } from './types'

const checkboxGroupProps = {
  value: {
    type: Array as PropType<CheckboxValueType[]>,
    default: undefined,
  },
  defaultValue: {
    type: Array as PropType<CheckboxValueType[]>,
    default: undefined,
  },
  disabled: { type: Boolean, default: false },
  name: { type: String, default: undefined },
  options: {
    type: Array as PropType<Array<CheckboxValueType | CheckboxOptionType>>,
    default: undefined,
  },
  style: {
    type: Object as PropType<Record<string, any>>,
    default: undefined,
  },
  className: { type: String, default: undefined },
} satisfies Record<keyof CheckboxGroupProps, any>

export const CheckboxGroup = defineComponent({
  name: 'CheckboxGroup',
  props: checkboxGroupProps,
  emits: ['update:value', 'change'],
  setup(props, { slots, emit }) {
    // ...
  },
})
```

**验证**：

```bash
pnpm typecheck  # 应该通过类型检查
pnpm test checkbox  # 所有测试应该通过
```

---

### 2. 修复 autoFocus 的 SSR 兼容性

**文件**：`components/checkbox/Checkbox.tsx:62-64`

**当前代码**：

```typescript
if (props.autoFocus && inputRef.value) {
  inputRef.value.focus()
}
```

**修复为**：

```typescript
if (props.autoFocus && inputRef.value) {
  // SSR 兼容：确保在浏览器环境中执行
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    inputRef.value.focus()
  }
}
```

**或者更优雅的方式**（在文件顶部添加工具函数）：

```typescript
const isBrowser = () => typeof window !== 'undefined' && typeof document !== 'undefined'

// 在 onMounted 中使用
if (props.autoFocus && inputRef.value && isBrowser()) {
  inputRef.value.focus()
}
```

---

### 3. 移除类型断言 as any

**文件**：`components/checkbox/Checkbox.tsx:188`

**当前代码**：

```typescript
value={props.value as any}
```

**修复为**：

```typescript
value={props.value !== undefined ? String(props.value) : undefined}
```

**原因**：

- HTML input 的 value 属性期望字符串类型
- as any 绕过类型检查，存在安全隐患

---

## 🔧 P1 级修复（强烈建议）

### 4. 统一 className vs classNames 命名

**影响文件**：

- `components/checkbox/Checkbox.tsx`
- `components/checkbox/types.ts`

**当前不一致**：

- Checkbox 使用 `classNames`（语义化）
- CheckboxGroup 使用 `className`（普通样式）

**建议方案 A**：CheckboxGroup 也改为 classNames

```typescript
// types.ts
export interface CheckboxGroupProps {
  // ...
  classNames?: {
    root?: string
    item?: string
  }
  styles?: {
    root?: CSSProperties
    item?: CSSProperties
  }
}

// Checkbox.tsx CheckboxGroup 渲染
return (
  <div
    class={cls(`${prefixCls}-group`, props.classNames?.root)}
    style={props.styles?.root}
  >
    {/* ... */}
  </div>
)
```

**建议方案 B**（简单）：保持现状，在文档中说明差异

```markdown
## API 说明

- `Checkbox.classNames`：精细化样式控制（5 个节点）
- `CheckboxGroup.className`：仅控制根节点样式
```

---

### 5. 增强 expose API

**文件**：`components/checkbox/Checkbox.tsx:140-142`

**当前代码**：

```typescript
expose({
  input: inputRef,
})
```

**修复为**：

```typescript
expose({
  input: inputRef,
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
})
```

**同步更新类型定义**（types.ts）：

```typescript
export interface CheckboxInstance {
  input: HTMLInputElement | null
  focus: () => void
  blur: () => void
}
```

---

### 6. 处理受控/非受控模式切换

**文件**：`components/checkbox/Checkbox.tsx:43-48`

**当前问题**：
当 checked 从有值切换到 undefined 时，不会正确切换到非受控模式。

**修复方案**：

```typescript
watch(
  () => props.checked,
  (newVal, oldVal) => {
    if (newVal !== undefined) {
      // 受控模式：同步 checked 值
      innerChecked.value = newVal
    } else if (oldVal !== undefined && newVal === undefined) {
      // 从受控切换到非受控：保留最后的受控值
      innerChecked.value = oldVal
    }
  },
)
```

---

## 🎨 P2 级修复（可选优化）

### 7. 提取工具函数

**新建文件**：`components/checkbox/utils.ts`

```typescript
/**
 * 将布尔值转换为 HTML 属性值
 * false -> undefined（避免 disabled="false"）
 * true -> true
 */
export const boolToAttr = (val: boolean): true | undefined => {
  return val || undefined
}

/**
 * 检查是否为浏览器环境
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

/**
 * 类型守卫：判断是否为 CheckboxOptionType 对象
 */
export function isOptionObject(opt: unknown): opt is import('./types').CheckboxOptionType {
  return typeof opt === 'object' && opt !== null && 'value' in opt && 'label' in opt
}
```

**使用示例**：

```typescript
import { boolToAttr, isBrowser, isOptionObject } from './utils'

// 在 Checkbox.tsx 中
disabled={boolToAttr(isDisabled.value)}
required={boolToAttr(props.required)}

// 在 CheckboxGroup.tsx 中
return (props.options ?? []).map((opt) => {
  if (isOptionObject(opt)) return opt
  return { label: String(opt), value: opt as CheckboxValueType }
})
```

---

### 8. 添加开发环境警告

**文件**：`components/checkbox/Checkbox.tsx`

```typescript
// 在 setup 中添加
if (import.meta.env.DEV) {
  // 警告 1：同时传入 checked 和 defaultChecked
  if (props.checked !== undefined && props.defaultChecked !== undefined) {
    console.warn(
      '[Checkbox] Both checked and defaultChecked are provided. ' + 'checked will be used as it is a controlled prop.',
    )
  }

  // 警告 2：skipGroup 但未提供 value
  watch(
    () => [props.skipGroup, props.value],
    ([skipGroup, value]) => {
      if (skipGroup && value === undefined && !group) {
        console.warn('[Checkbox] skipGroup is true but value is not provided. ' + 'This may cause unexpected behavior.')
      }
    },
    { immediate: true },
  )
}
```

**在 CheckboxGroup.tsx 中添加**：

```typescript
if (import.meta.env.DEV) {
  // 警告：受控模式下父组件未响应 update:value
  let lastEmittedValue: CheckboxValueType[] | null = null

  watch(
    () => props.value,
    (newVal) => {
      if (
        newVal !== undefined &&
        lastEmittedValue !== null &&
        JSON.stringify(newVal) !== JSON.stringify(lastEmittedValue)
      ) {
        console.warn(
          '[CheckboxGroup] value prop was updated but does not match the last emitted value. ' +
            'Make sure to use v-model:value or handle update:value event.',
        )
      }
    },
  )

  // 记录最后发射的值
  const originalHandleChange = handleChange
  handleChange = (val, checked) => {
    originalHandleChange(val, checked)
    lastEmittedValue = innerValue.value
  }
}
```

---

### 9. CSS 变量化

**文件**：`components/checkbox/style/index.css`

**当前硬编码值**：

```css
gap: 8px;
width: 16px;
height: 16px;
```

**改进为**：

```css
.hmfw-checkbox-wrapper {
  gap: var(--hmfw-checkbox-gap, 8px);
}

.hmfw-checkbox-inner {
  width: var(--hmfw-checkbox-size, 16px);
  height: var(--hmfw-checkbox-size, 16px);
  border-radius: var(--hmfw-border-radius-sm);
}

.hmfw-checkbox-group {
  gap: var(--hmfw-checkbox-group-gap, 8px);
}
```

**在 \_theme/theme.ts 中添加对应 token**（可选）：

```typescript
export interface MapTokens {
  // ...
  checkboxSize: number
  checkboxGap: number
  checkboxGroupGap: number
}

export const generateMapTokens = (seed: SeedTokens): MapTokens => ({
  // ...
  checkboxSize: 16,
  checkboxGap: 8,
  checkboxGroupGap: 8,
})
```

---

## ✅ 修复验证清单

修复完成后，执行以下检查：

```bash
# 1. 类型检查
pnpm typecheck

# 2. 单元测试
pnpm test checkbox

# 3. E2E 测试（如果有）
pnpm e2e --grep checkbox

# 4. 构建测试
pnpm build:lib

# 5. 文档站测试
pnpm dev
# 访问 http://localhost:5173 查看 Checkbox 文档

# 6. 发布前检查
pnpm precheck
```

---

## 📋 预计工作量

| 任务                 | 预计时间       | 优先级  |
| -------------------- | -------------- | ------- |
| P0-1: satisfies 约束 | 30 分钟        | ⚠️ 必须 |
| P0-2: SSR 兼容       | 10 分钟        | ⚠️ 必须 |
| P0-3: 移除 as any    | 5 分钟         | ⚠️ 必须 |
| P1-4: 命名统一       | 20 分钟        | 🔧 建议 |
| P1-5: expose API     | 15 分钟        | 🔧 建议 |
| P1-6: 模式切换       | 20 分钟        | 🔧 建议 |
| P2-7: 工具函数       | 30 分钟        | 💡 可选 |
| P2-8: 开发警告       | 40 分钟        | 💡 可选 |
| P2-9: CSS 变量       | 25 分钟        | 💡 可选 |
| **总计**             | **2.5-4 小时** |         |

---

## 🚀 实施建议

1. **第一阶段**（必须完成）：处理所有 P0 级修复
   - 预计 45 分钟
   - 可立即发布修复版本

2. **第二阶段**（强烈建议）：处理 P1 级修复
   - 预计 1 小时
   - 提升组件健壮性

3. **第三阶段**（长期优化）：逐步处理 P2 级修复
   - 预计 1.5 小时
   - 改善开发体验和可维护性

建议在下一个 minor 版本中完成第一和第二阶段的修复。
