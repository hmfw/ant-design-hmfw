# 共享 Hooks

跨组件复用的组合式函数（响应式行为 + 副作用）。**仅库内部使用，不对外导出。**

## 目录定位

| 目录                   | 职责                                   |
| ---------------------- | -------------------------------------- |
| `components/_hooks`    | 跨组件共享的 hooks（本目录）           |
| `components/_utils`    | 跨组件共享的纯函数（无状态、无副作用） |
| `components/_internal` | 跨组件共享的组件                       |

组件私有的 hooks 留在组件目录内（如 `input/hooks.ts`、`menu/composables/`、`tabs/useKeyboardNav.ts`），不放入本目录。判断标准：**只有一个组件用 → 留在组件内；多个组件用 → 放这里。**

## API

### useControlledState

统一处理组件的受控 / 非受控双模式，返回内部状态和更新函数。

**参数：**

- `controlledValue: () => T | undefined` - 受控值（来自 props，返回 `undefined` 表示非受控）
- `defaultValue: T` - 非受控时的默认值
- `onChange?: (value: T) => void` - 值变化回调（受控与非受控模式都会触发）

**示例：**

```typescript
import { useControlledState } from '../_hooks'

const [innerOpen, setInnerOpen] = useControlledState(
  () => props.open,
  props.defaultOpen ?? false,
  (value) => emit('update:open', value),
)
```

**行为：**

- 受控模式（`controlledValue()` 返回非 `undefined`）：内部状态跟随受控值，`setValue` 只触发 `onChange`
- 非受控模式：`setValue` 更新内部状态，同时触发 `onChange`

---

### useFocusTrap

将焦点限制在指定元素内，用于弹出层无障碍访问。

**参数：**

- `elementRef: Ref<HTMLElement | null>` - 要限制焦点的元素 ref
- `enabled: Ref<boolean>` - 是否启用焦点陷阱
- `restoreFocus?: boolean` - 关闭时是否恢复焦点到触发元素（默认 `true`）

**示例：**

```typescript
import { useFocusTrap } from '../_hooks'

const dialogRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

useFocusTrap(dialogRef, isOpen, true)
```

**行为：**

- 打开时自动聚焦第一个可聚焦元素
- Tab / Shift+Tab 在元素内循环聚焦
- 关闭时恢复焦点到触发元素（如果 `restoreFocus` 为 `true`）

---

### useScrollLock

锁定 body 滚动，支持多层弹出层（引用计数）。

**参数：**

- `enabled: Ref<boolean>` - 是否启用滚动锁定

**示例：**

```typescript
import { useScrollLock } from '../_hooks'

const isOpen = ref(false)
useScrollLock(isOpen)
```

**行为：**

- 使用引用计数：多个弹出层可以同时打开，只有全部关闭后才恢复滚动
- 自动缓存和恢复原始 `overflow` 值
- 组件卸载时自动清理

---

### useOverlayKeyboard

弹出层键盘事件处理。

**参数：**

- `visible: Ref<boolean>` - 弹出层是否可见
- `options: OverlayKeyboardOptions` - 配置项
  - `onClose?: () => void` - ESC 键关闭回调
  - `onPrev?: () => void` - 左箭头回调（可选）
  - `onNext?: () => void` - 右箭头回调（可选）
  - `keyboard?: Ref<boolean>` - 是否启用键盘事件（默认 `true`）

**示例：**

```typescript
import { useOverlayKeyboard } from '../_hooks'

// Modal/Drawer 场景
useOverlayKeyboard(isOpen, {
  onClose: () => close(),
  keyboard: computed(() => props.keyboard),
})

// ImagePreview 场景（支持左右切换）
useOverlayKeyboard(isOpen, {
  onClose: () => close(),
  onPrev: () => prev(),
  onNext: () => next(),
})
```

**支持的按键：**

- `Escape` - 调用 `onClose`
- `ArrowLeft` - 调用 `onPrev`（如果提供）
- `ArrowRight` - 调用 `onNext`（如果提供）

---

## 已集成组件

| 组件         | useFocusTrap | useScrollLock   | useOverlayKeyboard |
| ------------ | ------------ | --------------- | ------------------ |
| Modal        | ✅           | ✅              | ✅ (ESC)           |
| Drawer       | ✅           | ✅ (仅 mask 时) | ✅ (ESC)           |
| ImagePreview | ❌           | ✅              | ✅ (ESC + 方向键)  |

**注意：** ImagePreview 不使用 `useFocusTrap`，因为它是全屏图片查看器，不需要焦点管理。

---

## 设计原则

1. **组合优于继承** - 使用独立 Hooks 而非基类组件
2. **最小依赖** - 每个 Hook 独立工作，按需使用
3. **类型安全** - 完整的 TypeScript 类型定义
4. **可测试性** - 每个 Hook 可独立测试
5. **向后兼容** - 不影响现有组件 API

---

## 迁移指南

如需在新组件中使用这些 Hooks：

```typescript
import { ref, computed } from 'vue'
import { useFocusTrap, useScrollLock, useOverlayKeyboard } from '../_hooks'

export default defineComponent({
  setup(props, { emit }) {
    const overlayRef = ref<HTMLElement | null>(null)
    const isOpen = computed(() => props.open)

    // 1. 滚动锁定
    useScrollLock(isOpen)

    // 2. 焦点陷阱
    useFocusTrap(overlayRef, isOpen, true)

    // 3. 键盘事件
    useOverlayKeyboard(isOpen, {
      onClose: () => emit('update:open', false),
      keyboard: computed(() => props.keyboard),
    })

    return { overlayRef }
  },
})
```

---

## 常见问题

**Q: 为什么不创建 OverlayBase 基础组件？**

A: 三个组件的业务语义、Props 和渲染结构差异太大（只有 20% 重叠），基类会引入错误的继承关系。使用组合式 Hooks 更灵活、可维护。

**Q: 滚动锁定的引用计数是如何工作的？**

A: 全局维护一个 `lockCount`。每次调用 `lockScroll()` 时 +1，`unlockScroll()` 时 -1，只有计数归零时才恢复 body 滚动。这样多个弹出层可以同时打开。

**Q: 为什么 ImagePreview 不使用 useFocusTrap？**

A: ImagePreview 是全屏媒体查看器，主要交互是图片操作（缩放/旋转/拖拽），不需要表单输入等焦点管理。
