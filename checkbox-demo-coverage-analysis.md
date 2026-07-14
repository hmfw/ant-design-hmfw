# Checkbox Demo 覆盖情况分析

## 现有 Demo 清单

| Demo 文件              | 覆盖功能                             | 状态 |
| ---------------------- | ------------------------------------ | ---- |
| CheckboxBasic.vue      | 基础用法、disabled                   | ✅   |
| CheckboxGroup.vue      | CheckboxGroup options、水平/垂直布局 | ✅   |
| CheckboxCheckAll.vue   | 全选、indeterminate                  | ✅   |
| CheckboxSkipGroup.vue  | skipGroup 独立控制                   | ✅   |
| CheckboxIdBinding.vue  | id 绑定、label[for] 配合             | ✅   |
| CheckboxClassNames.vue | 语义化 classNames/styles             | ✅   |

## 缺失的 Demo 场景

### 1. ⚠️ CheckboxGroup 禁用状态

- **功能**: disabled 属性（整组禁用 vs 单项禁用）
- **优先级**: P1
- **原因**: API 中有 disabled，但缺少示例

### 2. ⚠️ 受控 vs 非受控模式

- **功能**: defaultChecked vs checked、defaultValue vs value
- **优先级**: P1
- **原因**: 重要概念，用户易混淆

### 3. ⚠️ CheckboxGroup 的 name 属性

- **功能**: 统一设置 name 用于表单提交
- **优先级**: P2
- **原因**: 表单场景常用

### 4. ⚠️ 事件监听

- **功能**: change、click、focus、blur 等事件
- **优先级**: P2
- **原因**: API 中列出但无示例

### 5. ⚠️ 布局示例

- **功能**: CheckboxGroup 垂直布局、网格布局
- **优先级**: P2
- **原因**: 现有 demo 有提及但不够完整

### 6. ⚠️ CheckboxGroup 嵌套 Checkbox（非 options）

- **功能**: 直接在 CheckboxGroup 中使用 Checkbox 子组件
- **优先级**: P2
- **原因**: 两种用法都应有示例

### 7. ⚠️ CheckboxOption 完整配置

- **功能**: disabled、style、className、title、id、required
- **优先级**: P2
- **原因**: CheckboxOptionType 所有属性

### 8. ⚠️ 表单集成

- **功能**: required、validation、form 提交
- **优先级**: P3
- **原因**: 实际应用场景

### 9. ⚠️ 动态选项

- **功能**: 动态添加/删除选项
- **优先级**: P3
- **原因**: 实际应用场景

## 对比 Ant Design v6

Ant Design v6 的 Checkbox demo：

1. ✅ Basic（对应 CheckboxBasic）
2. ✅ Disabled（已包含在 Basic 中）
3. ✅ Controlled（**缺失**）
4. ✅ Group（对应 CheckboxGroup）
5. ✅ Check All（对应 CheckboxCheckAll）
6. ✅ Layout（**部分覆盖**，可增强）
7. ❌ Customize（对应 CheckboxClassNames）

## 建议补充的 Demo

### 优先级 P1（必须补充）

1. **CheckboxControlled.vue** - 受控/非受控模式对比
2. **CheckboxGroupDisabled.vue** - 禁用状态演示

### 优先级 P2（建议补充）

3. **CheckboxGroupLayout.vue** - 多种布局方式
4. **CheckboxGroupNested.vue** - 嵌套 Checkbox 用法
5. **CheckboxEvents.vue** - 事件监听示例
6. **CheckboxGroupOptions.vue** - CheckboxOptionType 完整配置

### 优先级 P3（可选补充）

7. **CheckboxForm.vue** - 表单集成示例
8. **CheckboxDynamic.vue** - 动态选项示例

## 总结

- **现有 Demo**: 6 个
- **建议补充**: 6 个（P1: 2, P2: 4, P3: 2）
- **覆盖率**: 约 60%（核心功能已覆盖，边缘场景缺失）
