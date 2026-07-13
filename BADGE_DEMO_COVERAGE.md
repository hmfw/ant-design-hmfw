# Badge Demo 覆盖情况评估

## 📊 当前 Demo 清单

| Demo 文件              | 覆盖场景                        | 状态        |
| ---------------------- | ------------------------------- | ----------- |
| `BadgeBasic.vue`       | count、showZero、overflowCount  | ✅ 完整     |
| `BadgeStatus.vue`      | status 5 种状态                 | ✅ 完整     |
| `BadgeCustomColor.vue` | color 自定义颜色（数字模式）    | ⚠️ 部分     |
| `BadgeRibbon.vue`      | Ribbon 缎带（placement、color） | ✅ 完整     |
| `BadgeClassNames.vue`  | classNames/styles 语义化 API    | ✅ 完整     |
| `BadgeAnimation.vue`   | 动态变化 + status color 覆盖    | ✅ 额外亮点 |

---

## ✅ 已覆盖的场景

### 1. 基础功能

- ✅ count 数字徽标（BadgeBasic）
- ✅ showZero 显示 0（BadgeBasic）
- ✅ overflowCount 溢出显示（BadgeBasic: 99+, 100+）
- ✅ status 五种状态（BadgeStatus）
- ✅ status + text 状态文本（BadgeStatus）

### 2. 样式定制

- ✅ color 自定义颜色 - 数字模式（BadgeCustomColor）
- ✅ color 自定义颜色 - status 模式（BadgeAnimation）
- ✅ classNames/styles 语义化 API（BadgeClassNames）
- ✅ Ribbon 缎带（BadgeRibbon）

### 3. 高级特性

- ✅ 数字滚动动画（BadgeAnimation）
- ✅ status + color 优先级（BadgeAnimation）
- ✅ dot 模式语义化样式（BadgeClassNames）

---

## ⚠️ 缺失或可补充的场景

### 1. 核心功能缺失

#### 🔴 高优先级（建议补充）

**1.1 dot 小红点模式**

- 当前状态：仅在 `BadgeClassNames` 中作为语义化 API 示例出现
- 缺失内容：**独立的 dot 基础用法 demo**
- 影响：dot 是核心 API，应有独立演示
- 建议：创建 `BadgeDot.vue`

```vue
<!-- 建议新增：BadgeDot.vue -->
<template>
  <div style="display: flex; gap: 24px; align-items: center">
    <!-- 基础小红点 -->
    <Badge dot>
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>

    <!-- 小红点 + 自定义颜色 -->
    <Badge dot color="#52c41a">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>

    <!-- 小红点 + count（dot 优先） -->
    <Badge dot :count="99">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>

    <!-- 小红点 + 控制显隐 -->
    <Badge :dot="showDot">
      <Button>消息</Button>
    </Badge>
    <Button @click="showDot = !showDot">切换</Button>
  </div>
</template>
```

**1.2 size 尺寸**

- 当前状态：**完全未覆盖**
- 缺失内容：`size="small"` vs `size="middle"` 对比
- 影响：API 表格中有文档，但无可视化示例
- 建议：在 `BadgeBasic.vue` 中补充或创建独立 demo

```vue
<!-- 建议在 BadgeBasic 中补充 -->
<div style="margin-top: 16px">
  <h4>尺寸</h4>
  <div style="display: flex; gap: 24px">
    <Badge :count="5" size="small">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge :count="5" size="middle">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
  </div>
</div>
```

**1.3 offset 偏移**

- 当前状态：**完全未覆盖**（刚修复的边界检查功能）
- 缺失内容：`offset` 调整徽标位置的可视化示例
- 影响：offset 是重要的布局调整 API
- 建议：创建 `BadgeOffset.vue` 或在 BadgeBasic 中补充

```vue
<!-- 建议新增：BadgeOffset.vue -->
<template>
  <div style="display: flex; gap: 48px; align-items: center">
    <!-- 默认位置 -->
    <Badge :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>

    <!-- 向右偏移 -->
    <Badge :count="5" :offset="[10, 0]">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>

    <!-- 向下偏移 -->
    <Badge :count="5" :offset="[0, 10]">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>

    <!-- 同时偏移 -->
    <Badge :count="5" :offset="[10, 10]">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
  </div>
</template>
```

**1.4 独立使用（无包裹元素）**

- 当前状态：status 模式有独立用法，但 **count/dot 独立模式未覆盖**
- 缺失内容：不包裹子元素的数字徽标
- 影响：应展示 `.hmfw-badge-not-a-wrapper` 类名的应用场景
- 建议：在 BadgeBasic 中补充

```vue
<!-- 建议在 BadgeBasic 中补充 -->
<div style="margin-top: 16px">
  <h4>独立徽标（不包裹元素）</h4>
  <div style="display: flex; gap: 16px; align-items: center">
    <Badge :count="5" />
    <Badge :count="99" />
    <Badge :count="100" />
    <Badge dot />
  </div>
</div>
```

#### 🟡 中优先级（建议补充）

**1.5 预设颜色展示**

- 当前状态：CustomColor 只展示了 3 个自定义 RGB 颜色
- 缺失内容：13 个预设颜色（pink、red、volcano 等）的完整展示
- 影响：用户不知道有哪些预设颜色可用
- 建议：创建 `BadgePresetColors.vue`

```vue
<!-- 建议新增：BadgePresetColors.vue -->
<template>
  <div>
    <h4>预设颜色（status 模式）</h4>
    <div style="display: flex; gap: 16px; flex-wrap: wrap">
      <Badge color="pink" text="pink" />
      <Badge color="red" text="red" />
      <Badge color="volcano" text="volcano" />
      <Badge color="orange" text="orange" />
      <Badge color="gold" text="gold" />
      <Badge color="yellow" text="yellow" />
      <Badge color="lime" text="lime" />
      <Badge color="green" text="green" />
      <Badge color="cyan" text="cyan" />
      <Badge color="blue" text="blue" />
      <Badge color="geekblue" text="geekblue" />
      <Badge color="purple" text="purple" />
      <Badge color="magenta" text="magenta" />
    </div>

    <h4 style="margin-top: 24px">预设颜色（count 模式）</h4>
    <div style="display: flex; gap: 16px; flex-wrap: wrap">
      <Badge color="pink" :count="5">
        <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
      </Badge>
      <!-- 其他颜色... -->
    </div>
  </div>
</template>
```

**1.6 title 提示文本**

- 当前状态：**完全未覆盖**
- 缺失内容：鼠标悬停显示 title 的示例
- 影响：较低（辅助功能）
- 建议：在 BadgeBasic 或 BadgeCustomColor 中补充

```vue
<Badge :count="5" title="5 条未读消息">
  <Button>消息</Button>
</Badge>
```

**1.7 字符串 count**

- 当前状态：**完全未覆盖**
- 缺失内容：`count="new"`, `count="hot"` 等自定义文本
- 影响：API 支持但无示例
- 建议：在 BadgeBasic 中补充

```vue
<div style="display: flex; gap: 16px">
  <Badge count="new">
    <Button>按钮</Button>
  </Badge>
  <Badge count="hot" color="#ff4d4f">
    <Button>热门</Button>
  </Badge>
  <Badge count="99+">
    <Button>消息</Button>
  </Badge>
</div>
```

#### 🟢 低优先级（可选）

**1.8 综合场景示例**

- 当前状态：各 demo 相对独立
- 缺失内容：真实业务场景（如邮箱、购物车、通知中心）
- 影响：帮助用户理解实际应用
- 建议：创建 `BadgeScenarios.vue`

```vue
<!-- 可选新增：BadgeScenarios.vue -->
<template>
  <div style="display: flex; gap: 32px; flex-wrap: wrap">
    <!-- 消息通知 -->
    <Badge :count="12">
      <BellOutlined style="font-size: 24px" />
    </Badge>

    <!-- 购物车 -->
    <Badge :count="cartCount" :overflow-count="99">
      <ShoppingCartOutlined style="font-size: 24px" />
    </Badge>

    <!-- 用户头像 -->
    <Badge dot>
      <Avatar src="/avatar.jpg" />
    </Badge>

    <!-- 标签页未读 -->
    <Tabs>
      <TabPane key="1" tab={<Badge dot>消息</Badge>}>内容</TabPane>
      <TabPane key="2" tab={<Badge :count="5">通知</Badge>}>内容</TabPane>
    </Tabs>
  </div>
</template>
```

---

## 📋 补充建议优先级总结

| 优先级 | 缺失场景                | 影响范围 | 建议操作     |
| ------ | ----------------------- | -------- | ------------ |
| 🔴 P0  | **dot 小红点独立 demo** | 核心 API | **必须补充** |
| 🔴 P0  | **size 尺寸对比**       | 核心 API | **必须补充** |
| 🔴 P0  | **offset 偏移**         | 核心 API | **必须补充** |
| 🟡 P1  | count/dot 独立模式      | 常用场景 | 建议补充     |
| 🟡 P1  | 预设颜色完整展示        | 用户体验 | 建议补充     |
| 🟡 P1  | 字符串 count            | 灵活用法 | 建议补充     |
| 🟢 P2  | title 提示              | 辅助功能 | 可选         |
| 🟢 P2  | 综合场景示例            | 最佳实践 | 可选         |

---

## 🎯 快速实施方案

### 方案 1：最小化补充（推荐）

在现有 `BadgeBasic.vue` 中补充缺失场景，保持 demo 数量不变：

```vue
<!-- BadgeBasic.vue 重构版 -->
<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 基础数字 -->
    <section>
      <h4>基础数字</h4>
      <div style="display: flex; gap: 24px">
        <Badge :count="5">...</Badge>
        <Badge :count="0" show-zero>...</Badge>
        <Badge :count="99">...</Badge>
        <Badge :count="100">...</Badge>
      </div>
    </section>

    <!-- 🆕 小红点 -->
    <section>
      <h4>小红点</h4>
      <div style="display: flex; gap: 24px">
        <Badge dot>...</Badge>
        <Badge dot color="#52c41a">...</Badge>
      </div>
    </section>

    <!-- 🆕 尺寸 -->
    <section>
      <h4>尺寸</h4>
      <div style="display: flex; gap: 24px">
        <Badge :count="5" size="small">...</Badge>
        <Badge :count="5" size="middle">...</Badge>
      </div>
    </section>

    <!-- 🆕 偏移 -->
    <section>
      <h4>位置偏移</h4>
      <div style="display: flex; gap: 48px">
        <Badge :count="5">...</Badge>
        <Badge :count="5" :offset="[10, 0]">...</Badge>
        <Badge :count="5" :offset="[0, 10]">...</Badge>
      </div>
    </section>

    <!-- 🆕 独立模式 -->
    <section>
      <h4>独立使用</h4>
      <div style="display: flex; gap: 16px">
        <Badge :count="5" />
        <Badge dot />
        <Badge count="new" />
      </div>
    </section>
  </div>
</template>
```

### 方案 2：标准化补充

创建 3 个新 demo 文件：

1. `BadgeDot.vue` - 小红点专项
2. `BadgeOffset.vue` - 偏移专项
3. `BadgePresetColors.vue` - 预设颜色展示

---

## 🔍 对比 Ant Design 官方

Ant Design v6 Badge 官方文档共有 **11 个 demo**：

| 官方 Demo    | 当前项目                    | 覆盖状态     |
| ------------ | --------------------------- | ------------ |
| Basic        | ✅ BadgeBasic               | 已覆盖       |
| Standalone   | ⚠️ 部分（在 BadgeBasic 中） | **建议独立** |
| Overflow     | ✅ BadgeBasic               | 已覆盖       |
| Dot          | ❌                          | **缺失**     |
| Change       | ✅ BadgeAnimation           | 已覆盖       |
| Status       | ✅ BadgeStatus              | 已覆盖       |
| Custom color | ✅ BadgeCustomColor         | 已覆盖       |
| Ribbon       | ✅ BadgeRibbon              | 已覆盖       |
| Offset       | ❌                          | **缺失**     |
| Size         | ❌                          | **缺失**     |
| Title        | ⚠️                          | 可选         |

**覆盖率：6/11（54.5%）**

---

## ✅ 结论

当前 Badge demo 覆盖了**主要功能场景**，但缺失了 **3 个核心 API 的可视化示例**：

1. **dot 小红点**（核心功能）
2. **size 尺寸**（核心 API）
3. **offset 偏移**（刚修复的功能，应展示成果）

**建议**：采用**方案 1**，在 `BadgeBasic.vue` 中补充这 3 个场景，将覆盖率提升到 **90%+**。
