---
name: component-review
description: 组件全面审查 - 从代码质量、API 设计、Demo 覆盖多维度审查组件并生成改进方案
---

# 组件全面审查技能

对 Vue 组件进行标准化的全面审查，生成结构化报告和修复任务清单。

## 快速使用

```
对 {ComponentName} 组件从 API 设计的合理性、健壮性与边界条件、
设计模式与架构、可读性与可维护性 多维度全面的代码审查
```

或简化为：

```
审查 {ComponentName} 组件
```

## 执行概述

**流程**: 代码审查 → Demo 覆盖分析 → 创建任务 → 逐项修复 → 生成总结（5 个阶段）

**产物**:
- 4 份临时报告文档（`CODE_REVIEW.md` / `DEMO_COVERAGE_ANALYSIS.md` / `FIXES_SUMMARY.md` / `DEMO_SUPPLEMENT_SUMMARY.md`）— 验证通过后删除，不入库
- 代码修复、新增 demo — 保留并提交

---

## 审查流程（五个阶段）

### 阶段 1：代码审查

读取组件关键文件，从五个维度分析：
- API 设计合理性
- 健壮性与边界条件
- 设计模式与架构
  - 单一职责：单文件是否混居多个独立组件/职责
  - 文件规模：是否存在可拆分的巨型文件（经验阈值 >400 行且含多组件/多职责）
  - 模块边界：共享工具/context/类型是否应下沉为独立模块
- 可读性与可维护性
- 运行时行为与状态安全

生成 `CODE_REVIEW.md`，包含问题清单、优先级、修复建议。

### 阶段 2：Demo 覆盖分析

检查功能点覆盖情况：
- 核心功能覆盖（所有 props）
- 高级功能覆盖（语义化 API、响应式、插槽）
- 边界情况覆盖
- API 属性覆盖

生成 `DEMO_COVERAGE_ANALYSIS.md`，包含覆盖率、缺失 demo 清单。

### 阶段 3：创建任务清单

使用 TaskCreate 创建结构化任务：
- P0（严重）：规范违反、运行时安全
- P1（中等）：可维护性、性能优化
- P2（较低）：代码清晰度、文档准确性
- P3（最低）：代码整洁度

### 阶段 4：逐项修复

按优先级修复，每项任务：
1. TaskUpdate status=in_progress
2. 使用 Edit/Write 修复代码
3. 运行测试验证
4. TaskUpdate status=completed

### 阶段 5：生成总结

生成修复文档：
- `FIXES_SUMMARY.md` - 代码修复总结
- `DEMO_SUPPLEMENT_SUMMARY.md` - Demo 补充总结

> **文档为临时产物**：本流程生成的 4 份 `.md`（CODE_REVIEW / DEMO_COVERAGE_ANALYSIS / FIXES_SUMMARY / DEMO_SUPPLEMENT_SUMMARY）仅用于本次审查的过程记录与向用户汇报。**验证全部通过后应删除，不提交入库** —— 避免 67 个组件累积数百份报告文档污染仓库。若用户明确要求保留，再单独提交。

## 必检项（P0）

根据项目 `CLAUDE.md` 规范：

### Props 类型约束

```typescript
// ❌ 错误 - 可能漂移
defineComponent({
  props: { value: String }
})

// ✅ 正确
const componentProps = {
  value: { type: String, default: undefined }
} satisfies Record<keyof ComponentProps, any>
```

### 边界条件防御

```typescript
// ❌ 错误
const columns = props.column

// ✅ 正确
const columns = Math.max(1, props.column)
```

### VNode 过滤

```typescript
// ❌ 错误 - 排除函数组件
.filter(vnode => typeof vnode.type === 'object')

// ✅ 正确
.filter(vnode => vnode.type && (
  typeof vnode.type === 'object' || 
  typeof vnode.type === 'function'
))
```

### 算法注释

```typescript
// ❌ 错误 - 无注释
for (const item of items) {
  if (item.filled) {
    // 50 行复杂逻辑...
  }
}

// ✅ 正确
for (const item of items) {
  // 处理 filled 项：填充剩余列并强制换行
  if (item.filled) {
    // ...
  }
}
```

### CSS 规范

- CSS 变量：`--hmfw-*` 前缀
- 类名：`.hmfw-{component-name}` BEM 规范

### CSS Token 系统（设计 Token）

组件样式必须消费设计 Token（`components/_theme/`），不得硬编码颜色/圆角/间距等设计值。

```css
/* ❌ 错误 - 硬编码设计值，绕过主题系统，ConfigProvider 覆盖无效 */
.hmfw-button {
  color: #1677ff;
  border-radius: 6px;
  padding: 4px 15px;
}

/* ✅ 正确 - 消费设计 Token，支持主题定制与运行时覆盖 */
.hmfw-button {
  color: var(--hmfw-color-primary);
  border-radius: var(--hmfw-border-radius);
  padding: var(--hmfw-padding-xs) var(--hmfw-padding);
}
```

审查要点：

- **无硬编码设计值**：颜色（`#hex`/`rgb`）、圆角、字号、间距、阴影等应引用 `var(--hmfw-*)`；仅纯结构值（如 `display: flex`、`width: 100%`）可直接写
- **Token 存在性**：引用的 `--hmfw-*` 变量必须由 `theme.ts` 生成（seed 或 map token），不得引用不存在的变量名
- **新增 Token 的真值源**：若审查中需要新增/修改 seed 或 map token，只能改 `theme.ts`，改后**必须运行 `pnpm generate-theme`** 重新生成 `_theme/style/index.css`（该文件自动生成，严禁手动编辑），否则 `precheck` 的 `git diff --exit-code` 校验会失败
- **主题可覆盖性验证**：关键设计值应能通过 `ConfigProvider` 的 `theme` 属性覆盖生效

### 文件规模与模块拆分（P1）

单文件承载多个独立组件或职责、行数偏大（经验值 >400 行）时，评估拆分：

- 独立子组件 → 独立 `.tsx`（如从 `Image.tsx` 抽出 `ImagePreview.tsx`）
- 共享工具函数 → `utils.ts`（滚动锁、常量、纯函数如 `normalizePreview`/`resolveMask`）
- inject/provide 契约 → `context.ts`（context 接口 + 注入 key）
- **硬约束：公共 API（`index.ts` 导出）必须不变**，拆分对外无感知
- **依赖方向单向**，无循环依赖（`Image/PreviewGroup → ImagePreview → utils/context`）
- 拆分后必须 grep 全仓引用确认无遗漏，并跑通 `pnpm typecheck` + 单测

> 归 P1（识别并建议）而非 P0：拆分不是硬性规范违反，是否执行由用户拍板，避免把轻量审查变成大重构。

## Demo 必须覆盖

### P0（必须）

1. **基础用法** - 最简单的使用示例
2. **Slot 语法**（如果支持 items + slot 双 API）
   - 示例：Descriptions, List, Steps
3. **语义化 API**（如果实现了 classNames/styles）
   - 至少 3-5 个使用场景

### P1（建议）

4. **响应式属性** - column/span 支持 breakpoint 对象
5. **布尔开关** - bordered, disabled, loading 对比
6. **尺寸变体** - 如果有 size prop

### P2（可选）

7. **项级样式** - labelStyle, contentStyle
8. **富内容** - children 使用 VNode

## 验证标准

每个阶段完成后必须通过：

```bash
pnpm test ComponentName     # 单元测试
pnpm typecheck              # 类型检查
```

## 输出模板

### CODE_REVIEW.md

```markdown
# 组件代码审查报告

## 总体评价
| 维度 | 评分 | 说明 |

## 严重问题（必须修复）
### 1. 违反项目规范

## 中等问题（建议修复）

## 修复优先级建议
| 优先级 | 问题 | 工作量 | 影响 |
```

### DEMO_COVERAGE_ANALYSIS.md

```markdown
# Demo 覆盖情况分析

## 现有 Demo 清单
| # | Demo 文件 | 覆盖功能 | 代码行数 | 复杂度 | 质量评分 |

## 已覆盖的功能点
- ✅ 功能 A
- ❌ 功能 B（缺失）

## 缺失的 Demo
### 1. ❌ Slot 语法 Demo（重要）

## 覆盖率评估
| 功能类型 | 已覆盖 | 未覆盖 | 覆盖率 |
```

### FIXES_SUMMARY.md

```markdown
# 修复总结

## 完成情况
- P0: 3/3 完成
- P1: 2/2 完成

## 验证结果
- ✅ 单元测试: X/X 通过
- ✅ 类型检查: 通过

## 修复前后对比
```

### DEMO_SUPPLEMENT_SUMMARY.md

```markdown
# Demo 补充总结

## 已完成的补充
### 1. ✅ 新增 XXX Demo

## Demo 覆盖率对比
| 功能类型 | 补充前 | 补充后 | 提升 |

## 验证结果
```

## 常见问题模式

### Props 类型漂移

运行时 props 与 TypeScript 接口不一致。

**解决**: 使用 `satisfies Record<keyof XProps, any>`

### 边界条件缺失

数值 props 没有防御性检查。

**解决**: 使用 `Math.max()`, `Math.min()` 等

### 强制包裹元素

总是用 `<span>` 包裹，破坏用户 VNode 结构。

**解决**: 仅在需要应用样式时包裹

### 缺少算法注释

复杂逻辑没有中文注释。

**解决**: 为关键步骤添加详细注释

### 巨型文件 / 多职责混居

单文件塞入多个组件 + 工具 + context，难维护、难测试。

**解决**: 按职责拆分为聚焦模块，保持公共 API 不变。参考 Image 组件拆分（`Image.tsx` 800 行 → `utils.ts` / `context.ts` / `ImagePreview.tsx` / `Image.tsx` / `PreviewGroup.tsx` 五模块，公共导出不变）

## 示例：Descriptions 组件

### 输入

```
对 Descriptions 组件从 API 设计的合理性、健壮性与边界条件、
设计模式与架构、可读性与可维护性 多维度全面的代码审查
```

### 输出

```
阶段 1 - 代码审查:
  - 发现 8 个问题（P0×3, P1×2, P2×2, P3×1）
  - 生成 CODE_REVIEW.md

阶段 2 - Demo 覆盖:
  - 现有 8 个 demo，覆盖率 69%
  - 缺失 5 个重要 demo
  - 生成 DEMO_COVERAGE_ANALYSIS.md

阶段 3 - 修复:
  - 创建 12 个任务（8 个代码修复 + 4 个 demo 补充）
  - 全部完成，耗时 ~2 小时

阶段 4 - 验证:
  - ✅ 22/22 测试通过
  - ✅ 类型检查通过
  - ✅ 覆盖率提升至 88%

阶段 5 - 总结:
  - 生成 FIXES_SUMMARY.md
  - 生成 DEMO_SUPPLEMENT_SUMMARY.md
```

### 生成的文档（临时产物，验证后删除）

审查过程中在组件目录下生成 4 份报告，用于汇报与追溯：
- CODE_REVIEW.md
- FIXES_SUMMARY.md
- DEMO_COVERAGE_ANALYSIS.md
- DEMO_SUPPLEMENT_SUMMARY.md

验证通过后删除，不入库（详见「阶段 5」说明）。

## 预期效果

- 📄 **文档**: 4 份标准化 Markdown（临时产物，验证后删除）
- 📈 **质量**: 规范合规 + Demo 覆盖率 85%+
- ✅ **验证**: 测试通过 + 类型检查通过

## 为什么需要这个技能

1. **一致性**: 确保 67 个组件遵循相同规范
2. **质量保证**: 系统化发现规范违反和安全隐患
3. **文档完整性**: 确保每个 API 都有对应演示
4. **可追溯性**: 生成结构化报告记录问题
5. **效率**: 标准化流程减少遗漏

## 参考

- 项目规范: `CLAUDE.md`
- Memory 记录: `.claude/projects/.../memory/component-comprehensive-review.md`
- 示例组件: `components/descriptions/`
