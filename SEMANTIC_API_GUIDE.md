# 语义化 API 开发指南

> 为 ant-design-hmfw 组件添加语义化 API（classNames/styles）的完整指南

---

## 📋 目录

1. [快速开始](#快速开始)
2. [开发标准](#开发标准)
3. [实施流程](#实施流程)
4. [当前进度](#当前进度)
5. [参考示例](#参考示例)

---

## 快速开始

### 什么是语义化 API？

语义化 API 允许用户通过 `classNames` 和 `styles` props 对组件内部的子节点应用自定义样式，实现细粒度的样式控制。

```vue
<Button
  :class-names="{
    root: 'my-button',
    icon: 'my-icon',
  }"
  :styles="{
    root: { borderRadius: '8px' },
    icon: { fontSize: '18px' },
  }"
>
  自定义按钮
</Button>
```

### 为组件添加语义化 API 的三步流程

1. **源码实现** - 在组件中添加 `classNames` / `styles` props
2. **文档编写** - 在 md 文件中添加完整的语义化 API 文档
3. **Demo 创建** - 创建 `*ClassNames.vue` demo 文件并集成

---

## 开发标准

### 1. 源码实现标准

#### 类型定义（`types.ts`）

```typescript
// 定义语义化 className 接口
export interface ButtonClassNames {
  root?: string // 按钮根容器
  icon?: string // 图标容器
  loading?: string // 加载图标
}

// 定义语义化 style 接口
export interface ButtonStyles {
  root?: CSSProperties
  icon?: CSSProperties
  loading?: CSSProperties
}

// 添加到组件 Props
export interface ButtonProps {
  // ... 其他 props
  classNames?: ButtonClassNames
  styles?: ButtonStyles
}
```

#### 组件实现（`*.tsx`）

```typescript
import { cls } from '../_util/classNames'

export const Button = defineComponent({
  props: {
    // ... 其他 props
    classNames: Object as PropType<ButtonClassNames>,
    styles: Object as PropType<ButtonStyles>,
  },

  setup(props) {
    return () => (
      <button
        class={cls(`${prefixCls}`, props.classNames?.root)}
        style={props.styles?.root}
      >
        {icon && (
          <span
            class={cls(`${prefixCls}-icon`, props.classNames?.icon)}
            style={props.styles?.icon}
          >
            {icon}
          </span>
        )}
        {/* ... */}
      </button>
    )
  }
})
```

### 2. 文档编写标准

#### 文档结构

每个组件的 `*.md` 文件应包含以下部分：

````markdown
## 代码演示

### 基础用法

<DemoBlock title="基础用法" :source="ComponentBasicSource">
  <ComponentBasic />
</DemoBlock>

### 语义化 className 与 style

<DemoBlock title="语义化 className 与 style" :source="ComponentClassNamesSource">
  <ComponentClassNames />
</DemoBlock>

## API

### Component Props

| 参数       | 说明                                                           | 类型                  | 默认值 |
| ---------- | -------------------------------------------------------------- | --------------------- | ------ |
| classNames | 语义化结构 class，见下方 [语义化 className](#语义化-classname) | `ComponentClassNames` | -      |
| styles     | 语义化结构 style，见下方 [语义化 style](#语义化-style)         | `ComponentStyles`     | -      |

---

## 语义化 className

通过 `classNames` 属性可以对组件的各个子节点应用自定义 className。

### 类型定义

```typescript
interface ComponentClassNames {
  root?: string // 根容器
  icon?: string // 图标容器
  loading?: string // 加载状态
}
```
````

### DOM 结构与默认 className

```html
<button class="hmfw-button">
  <!-- ↑ classNames.root 应用于此 -->

  <span class="hmfw-button-icon">
    <!-- ↑ classNames.icon 应用于此 -->
    <svg>图标</svg>
  </span>

  <span>按钮文字</span>
</button>
```

### 使用示例

```vue
<template>
  <Component
    :class-names="{
      root: 'my-root',
      icon: 'my-icon',
    }"
  />
</template>

<style scoped>
:deep(.my-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

:deep(.my-icon) {
  color: white;
  font-size: 18px;
}
</style>
```

### 注意事项

- `classNames` 和 `styles` 可同时使用，`styles` 内联样式优先级更高
- （组件特定的注意事项）

---

## 语义化 style

通过 `styles` 属性可以对组件的各个子节点应用内联样式。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface ComponentStyles {
  root?: CSSProperties
  icon?: CSSProperties
  loading?: CSSProperties
}
```

### 使用示例

```vue
<template>
  <Component
    :styles="{
      root: { borderRadius: '8px', padding: '12px 24px' },
      icon: { fontSize: '18px', color: '#1890ff' },
    }"
  />
</template>
```

### 注意事项

- 内联样式优先级高于 className
- （组件特定的注意事项）

<script setup>
import ComponentBasic from './ComponentBasic.vue'
import ComponentBasicSource from './ComponentBasic.vue?raw'
import ComponentClassNames from './ComponentClassNames.vue'
import ComponentClassNamesSource from './ComponentClassNames.vue?raw'
</script>

````

### 3. Demo 文件标准

#### 文件命名

- 统一命名为 `{Component}ClassNames.vue`
- 放置在 `docs/demos/{component}/` 目录下

#### Demo 结构

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：基础用法 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器：</div>
      <Component
        :class-names="{ root: 'custom-root' }"
      />
    </div>

    <!-- 场景 2：组合使用 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义：</div>
      <Component
        :class-names="{
          root: 'custom-root',
          icon: 'custom-icon'
        }"
      />
    </div>

    <!-- 场景 3：使用 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Component
        :styles="{
          root: { borderRadius: '8px' },
          icon: { fontSize: '18px' }
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Component } from 'ant-design-hmfw'

// 响应式数据（如需要）
const value = ref('')
</script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.custom-icon) {
  font-size: 18px;
  margin-right: 8px;
}
</style>
````

#### Demo 设计原则

1. **渐进式**：从简单到复杂
2. **实用性**：每个场景都是真实使用场景
3. **视觉效果**：统一使用渐变、hover、动画
4. **代码质量**：注释清晰，易于理解

---

## 实施流程

### 完整流程图

```
1. 源码实现
   ├─ types.ts: 定义 ComponentClassNames / ComponentStyles
   └─ Component.tsx: 应用 classNames / styles

2. 文档编写
   ├─ 更新 API 表格（添加引用链接）
   ├─ 添加「语义化 className」模块
   └─ 添加「语义化 style」模块

3. Demo 创建
   ├─ 创建 ComponentClassNames.vue
   ├─ 在 md 中添加 demo 引用
   └─ 在 script setup 中导入 demo

4. 测试验证
   ├─ pnpm dev 启动开发服务器
   ├─ 访问组件页面检查 demo
   └─ 验证样式和交互效果
```

### 详细步骤

#### 步骤 1：源码实现

1. 在 `components/{component}/types.ts` 中定义类型：

   ```typescript
   export interface ComponentClassNames { ... }
   export interface ComponentStyles { ... }
   ```

2. 在 `ComponentProps` 中添加 props：

   ```typescript
   classNames?: ComponentClassNames
   styles?: ComponentStyles
   ```

3. 在 `components/{component}/Component.tsx` 中应用：
   ```typescript
   class={cls(`${prefixCls}`, props.classNames?.root)}
   style={props.styles?.root}
   ```

#### 步骤 2：文档编写

1. 打开 `docs/demos/{component}/{component}.md`

2. 更新 API 表格：

   ```markdown
   | classNames | 语义化结构 class，见下方 [语义化 className](#语义化-classname) | `ComponentClassNames` | - |
   | styles | 语义化结构 style，见下方 [语义化 style](#语义化-style) | `ComponentStyles` | - |
   ```

3. 在文档末尾（API 表格之后）添加两个独立模块：
   - `## 语义化 className`
   - `## 语义化 style`

4. 参考本指南的「文档编写标准」完成内容

#### 步骤 3：Demo 创建

1. 创建 `docs/demos/{component}/{Component}ClassNames.vue`

2. 参考本指南的「Demo 文件标准」编写至少 3-5 个场景

3. 在 `{component}.md` 的「代码演示」区添加：

   ```markdown
   ### 语义化 className 与 style

   通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

   <DemoBlock title="语义化 className 与 style" :source="ComponentClassNamesSource">
     <ComponentClassNames />
   </DemoBlock>
   ```

4. 在 `{component}.md` 末尾的 `<script setup>` 中添加：
   ```typescript
   import ComponentClassNames from './ComponentClassNames.vue'
   import ComponentClassNamesSource from './ComponentClassNames.vue?raw'
   ```

#### 步骤 4：测试验证

```bash
pnpm dev
# 访问 http://localhost:5173/components/{component}
# 检查：
# - demo 是否正常渲染
# - 样式是否符合预期
# - hover 效果是否流畅
# - 无控制台错误
```

---

## 当前进度

### 已完成组件（7/67）

| 组件         | 类型定义 Key 数量                                                                           | 文档 | Demo | 状态 |
| ------------ | ------------------------------------------------------------------------------------------- | ---- | ---- | ---- |
| **Button**   | 3 (root, icon, loading)                                                                     | ✅   | ✅   | 完成 |
| **Input**    | 5 (affixWrapper, prefix, suffix, input, count)                                              | ✅   | ✅   | 完成 |
| **Modal**    | 6 (mask, wrapper, content, header, body, footer)                                            | ✅   | ✅   | 完成 |
| **Popover**  | 2 (title, content)                                                                          | ✅   | ✅   | 完成 |
| **Progress** | 5 (root, body, rail, track, indicator)                                                      | ✅   | ✅   | 完成 |
| **Transfer** | 11 (root, section, header, title, body, list, item, itemIcon, itemContent, footer, actions) | ✅   | ✅   | 完成 |
| **Tree**     | 5 (root, item, itemIcon, itemTitle, itemSwitcher)                                           | ✅   | ✅   | 完成 |

### 待实现组件（优先级排序）

#### 第一批：高频组件

- [ ] **Select** - 下拉选择（建议 key: dropdown, option, optionIcon, optionLabel）
- [ ] **Checkbox** - 复选框（建议 key: root, input, inner, label）
- [ ] **Radio** - 单选框（建议 key: root, input, inner, label）
- [ ] **Card** - 卡片（建议 key: root, head, title, extra, body, actions）
- [ ] **Form** - 表单（建议 key: root, item, label, control, feedback, extra）
- [ ] **Table** - 表格（建议 key: root, header, body, row, cell, pagination）
- [ ] **Tabs** - 标签页（建议 key: root, nav, tab, tabActive, content）
- [ ] **Dropdown** - 下拉菜单（建议 key: trigger, dropdown, menu, item）

#### 第二批：布局/容器组件

- [ ] Layout (Header/Sider/Content/Footer)
- [ ] Grid (Row/Col)
- [ ] Space
- [ ] Divider
- [ ] Drawer

#### 第三批：反馈组件

- [ ] Message
- [ ] Notification
- [ ] Alert
- [ ] Spin

#### 第四批：其他组件

- [ ] 剩余 40+ 个组件

---

## 参考示例

### 示例 1：简单组件（Button）

**特点**：只有 3 个 key，结构简单

<details>
<summary>查看 Button 的完整实现</summary>

#### types.ts

```typescript
export interface ButtonClassNames {
  root?: string // 按钮根容器
  icon?: string // 图标容器
  loading?: string // 加载图标
}

export interface ButtonStyles {
  root?: CSSProperties
  icon?: CSSProperties
  loading?: CSSProperties
}
```

#### Button.tsx

```typescript
return () => (
  <button
    class={cls(`${prefixCls}`, props.classNames?.root)}
    style={props.styles?.root}
  >
    {icon && (
      <span
        class={cls(`${prefixCls}-icon`, props.classNames?.icon)}
        style={props.styles?.icon}
      >
        {icon}
      </span>
    )}
    {/* ... */}
  </button>
)
```

#### 文档路径

- `docs/demos/button/button.md` - 完整文档
- `docs/demos/button/ButtonClassNames.vue` - Demo 文件

</details>

### 示例 2：复杂组件（Transfer）

**特点**：11 个 key，左右两侧共享样式

<details>
<summary>查看 Transfer 的完整实现</summary>

#### types.ts

```typescript
export interface TransferClassNames {
  root?: string // 穿梭框根容器
  section?: string // 单侧列表容器（左右各一个）
  header?: string // 列表头部区域
  title?: string // 标题文本
  body?: string // 列表主体容器
  list?: string // 列表 <ul> 元素
  item?: string // 列表项 <li>
  itemIcon?: string // 列表项图标（复选框）
  itemContent?: string // 列表项文本内容
  footer?: string // 列表底部区域
  actions?: string // 中间操作按钮组
}
```

#### Transfer.tsx（简化）

```typescript
<div class={cls(`${prefixCls}`, props.classNames?.root)}>
  <div class={cls(`${prefixCls}-section`, props.classNames?.section)}>
    <div class={cls(`${prefixCls}-header`, props.classNames?.header)}>
      <span class={cls(`${prefixCls}-title`, props.classNames?.title)}>
        标题
      </span>
    </div>
    <div class={cls(`${prefixCls}-body`, props.classNames?.body)}>
      <ul class={cls(`${prefixCls}-list`, props.classNames?.list)}>
        <li class={cls(`${prefixCls}-item`, props.classNames?.item)}>
          <span class={cls(`${prefixCls}-item-icon`, props.classNames?.itemIcon)} />
          <span class={cls(`${prefixCls}-item-content`, props.classNames?.itemContent)}>
            内容
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div class={cls(`${prefixCls}-actions`, props.classNames?.actions)}>
    操作按钮
  </div>
  <div class={cls(`${prefixCls}-section`, props.classNames?.section)}>
    {/* 右侧结构同左侧 */}
  </div>
</div>
```

#### 文档路径

- `docs/demos/transfer/transfer.md` - 完整文档
- `docs/demos/transfer/TransferClassNames.vue` - Demo 文件（241 行）

</details>

### 示例 3：支持函数形式（Popover）

**特点**：classNames/styles 支持函数动态计算

<details>
<summary>查看 Popover 的函数形式实现</summary>

#### types.ts

```typescript
export interface PopoverClassNames {
  title?: string
  content?: string
}

// 支持函数形式
export type PopoverClassNamesProp = PopoverClassNames | ((info: { props: PopoverProps }) => PopoverClassNames)
```

#### 使用示例

```vue
<template>
  <Popover
    :title="dynamicTitle"
    content="内容"
    :class-names="
      (info) => ({
        title: info.props.title ? 'has-title' : 'no-title',
        content: 'dynamic-content',
      })
    "
  >
    <Button>动态样式</Button>
  </Popover>
</template>
```

</details>

---

## 常见问题

### Q1: 如何决定需要哪些 key？

**A:** 分析组件的 DOM 结构，为每个有意义的语义节点定义一个 key：

- 容器类：root, wrapper, container
- 内容类：header, body, footer, content
- 交互类：item, option, tab, button
- 装饰类：icon, avatar, badge, tag

**原则**：

- ✅ 用户可能需要自定义的节点
- ✅ 有明确语义的结构性节点
- ❌ 纯装饰性的内部实现节点

### Q2: classNames 和现有 className prop 的关系？

**A:**

- `className` / `rootClassName` - 应用于根元素，是单一字符串
- `classNames` - 应用于多个子节点，是对象形式

两者可以共存，`className` 作为快捷方式，`classNames` 提供更细粒度的控制。

### Q3: styles 为什么不用 CSSProperties 而用 Record<string, string>？

**A:** 在部分组件中使用 `Record<string, string>` 是为了兼容性和简化：

- `CSSProperties` 需要 `import type { CSSProperties } from 'vue'`
- `Record<string, string>` 更轻量，适合简单场景

**建议**：新组件统一使用 `CSSProperties` 以获得更好的类型提示。

### Q4: 如何处理响应式或条件渲染的节点？

**A:** className 应该始终应用，即使节点可能不渲染：

```typescript
// ✅ 正确：即使 icon 为空，className 也应用到 span 上（如果 span 渲染）
{icon && (
  <span class={cls(`${prefixCls}-icon`, props.classNames?.icon)}>
    {icon}
  </span>
)}

// ❌ 错误：条件判断包含了整个 className 逻辑
{icon && (
  <span class={props.classNames?.icon ? cls(`${prefixCls}-icon`, props.classNames?.icon) : `${prefixCls}-icon`}>
    {icon}
  </span>
)}
```

### Q5: Demo 一定要很多场景吗？

**A:** 建议至少 3-5 个场景：

- 1-2 个基础场景（单独使用）
- 1-2 个组合场景（多个 key 同时使用）
- 1 个 styles 场景（内联样式）
- （可选）特殊场景（函数形式、动态交互）

场景不在多而在精，每个场景都应该展示真实的使用价值。

---

## 统一的视觉风格

所有 demo 应遵循以下视觉规范：

### 配色方案

```css
/* 主色渐变 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 辅助色渐变 */
background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
background: linear-gradient(to right, #52c41a, #389e0d);

/* 浅色背景 */
background: #f0f5ff; /* 蓝色系 */
background: #f6ffed; /* 绿色系 */
background: #fff7e6; /* 橙色系 */
```

### 动画效果

```css
/* 平移 */
:deep(.custom-item:hover) {
  transform: translateX(4px);
  transition: all 0.3s;
}

/* 缩放 */
:deep(.custom-icon:hover) {
  transform: scale(1.1);
  transition: all 0.3s;
}

/* 阴影 */
:deep(.custom-card) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

:deep(.custom-card:hover) {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}
```

### 间距规范

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <div>
      <div style="margin-bottom: 8px; color: #666">场景描述</div>
      <Component />
    </div>
  </div>
</template>
```

---

## 快速命令

```bash
# 创建新组件的语义化 API
# 1. 编辑类型定义
code components/{component}/types.ts

# 2. 编辑组件实现
code components/{component}/{Component}.tsx

# 3. 编辑文档
code docs/demos/{component}/{component}.md

# 4. 创建 demo
code docs/demos/{component}/{Component}ClassNames.vue

# 5. 启动开发服务器
pnpm dev

# 6. 访问组件页面
open http://localhost:5173/components/{component}
```

---

## 检查清单

开发完成后，使用此清单验证：

### 源码实现 ✓

- [ ] 在 `types.ts` 中定义了 `ComponentClassNames` 接口
- [ ] 在 `types.ts` 中定义了 `ComponentStyles` 接口
- [ ] 在 `ComponentProps` 中添加了 `classNames` 和 `styles` props
- [ ] 在组件渲染中正确应用了 `classNames` 和 `styles`
- [ ] 每个 key 都有清晰的注释说明

### 文档编写 ✓

- [ ] API 表格中的 `classNames` / `styles` 添加了引用链接
- [ ] 添加了「语义化 className」独立模块
- [ ] 添加了「语义化 style」独立模块
- [ ] 类型定义完整且有注释
- [ ] DOM 结构图清晰标注了每个 key 的位置
- [ ] 至少有 2 个使用示例
- [ ] 注意事项说明了特殊行为

### Demo 创建 ✓

- [ ] 创建了 `{Component}ClassNames.vue` 文件
- [ ] 至少包含 3-5 个场景
- [ ] 覆盖了 `classNames` 和 `styles` 两种用法
- [ ] 样式符合统一的视觉规范
- [ ] 在 md 中添加了 demo 引用
- [ ] 在 script setup 中导入了 demo

### 测试验证 ✓

- [ ] `pnpm dev` 启动成功
- [ ] 组件页面正常显示
- [ ] demo 正常渲染
- [ ] 样式效果符合预期
- [ ] hover 动画流畅
- [ ] 无控制台错误或警告

---

## 更新日志

- **2026-06-17** - 完成 Button, Input, Modal, Popover, Progress, Transfer, Tree 共 7 个组件
- **2026-06-17** - 创建本开发指南

---

## 联系与支持

如有问题或建议，请：

- 查看已完成组件的实现作为参考
- 参考 Ant Design v6 官方文档
- 在项目中搜索 `classNames` 查看现有实现

---

**版本**：v1.0  
**最后更新**：2026-06-17
