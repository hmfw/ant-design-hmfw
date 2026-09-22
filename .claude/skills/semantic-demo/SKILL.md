---
name: semantic-demo
description: 为组件生成交互式语义化 DOM 演示（XxxSemantic.vue）并接入文档。当用户要求“实现某组件的 Semantic / 语义化 DOM 演示 / SemanticPreview”时使用。
---

# 语义化 DOM 演示技能

为指定组件生成一个基于 `SemanticPreview` 的交互式语义化演示 `{Component}Semantic.vue`，
并接入该组件文档的“语义化 className 与 style”章节。演示效果：鼠标悬停右侧语义节点列表时，
左侧预览区框出对应的 DOM 元素；可图钉固定高亮、查看用法示例。

参考实现：`components/button/demos/ButtonSemantic.vue`、`components/divider/demos/DividerSemantic.vue`。

## 快速使用

```
实现 {ComponentName} 的 Semantic 演示
```

## 前置检查

1. 确认组件的 `classNames` / `styles` 支持：读 `components/{name}/types.ts`，找到
   `{Component}ClassNames` 接口，取出其所有 key（如 `root` / `rail` / `content`）。
   若组件不支持语义化 API，则不适用本技能，向用户说明。
2. 读组件实现 `components/{name}/{Component}.tsx`，确认每个 key 实际被应用到某个 DOM 节点
   （搜索 `classNames?.{key}`），并记录该节点对应的内置类名（如 `.hmfw-divider-inner-text`）
   与渲染条件（是否总是渲染、依赖哪个 prop / 插槽）。
3. 确认演示文件不存在：`components/{name}/demos/{Component}Semantic.vue`。

## SemanticPreview 契约

组件位于 `docs/views/SemanticPreview.vue`，已全局注册（`docs/main.ts`），demo 内直接用，无需 import。

Props：
- `component`：代码示例中显示的标签名，传组件名（如 `Divider`）。
- `semantics`：`{ name, desc, version? }[]`，`name` 必须与 `classNames` 的 key 逐字一致。
- `height?`：预览区最小高度（px），按组件体积选一个能完整展示的值。
- `padding?`：传 `false` 去掉预览区内边距（如组件自带边距或需铺满时）。

关键约束：
- 作用域插槽下发 `classNames`，**必须**原样透传给组件的 `:class-names`；插槽 prop 名不做
  kebab→camel 归一化，解构时写 `{ classNames }`。
- 高亮靠测量标记类的 DOM 位置实现，因此**每个语义节点都要真实渲染出来**。若某节点依赖
  文字/插槽/状态才渲染（如 Divider 的 `rail`/`content` 需要有文字），在演示里构造出对应条件
  （传入文字、设置相应 prop），否则该节点无法被框选。
- 一个语义 key 命中多个 DOM 节点时（如 Divider 的 `rail` 作用于左右两翼），会各画一个高亮框，
  这是预期行为。

## 实现步骤

1. 创建 `components/{name}/demos/{Component}Semantic.vue`：

   ```vue
   <template>
     <SemanticPreview component="{Component}" :semantics="semantics" :height="{H}">
       <template #default="{ classNames }">
         <!-- 构造能让所有语义节点都渲染的最小用例，透传 classNames -->
         <{Component} :class-names="classNames" ...使各节点渲染的必要 props/插槽 />
       </template>
     </SemanticPreview>
   </template>

   <script setup lang="ts">
   import { {Component} } from '@hmfw/ant-design'

   // 与 {Component}ClassNames / {Component}Styles 的 key 一一对应
   const semantics = [
     { name: 'root', desc: '……（职责 + 承载的样式 + 内置类名 + 渲染条件）' },
     // 其余 key，顺序与类型定义一致
   ]
   </script>
   ```

   desc 写法：说明该节点是什么元素、承载哪些样式职责、对应的内置类名、以及渲染条件
   （何时不渲染）。语气与既有 demo 保持一致，用中文。

2. 接入文档 `components/{name}/demos/{name}.md`：在“语义化 className 与 style”章节的
   `### DOM 结构与 className 映射` **之前**插入：

   ```markdown
   ### 语义化 DOM

   将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的用法示例。

   <{Component}Semantic />
   ```

   demo 的 `.vue` 由 `docs/plugins/auto-demo-imports.ts` 按文件名自动导入并注册，**无需**手动
   写 import 或改路由。若文档尚无“语义化 className 与 style”章节，参考 `button.md` / `divider.md`
   的结构补齐（类型定义 → 语义化 DOM → DOM 结构映射 → 使用示例 → 注意事项）。

## 验证

1. `pnpm typecheck` 通过。
2. 文档站访问该组件页面（默认已在 http://localhost:5173 运行，勿重复启动），确认：
   - 每个语义节点悬停都能框出对应 DOM（没有“悬停无高亮”的节点 = 该节点没渲染，需调整用例）。
   - 图钉固定、信息弹层用法示例正常。
   可用 playwright-cli 截图核对。

## 规范

- 全程中文交流与注释（见 CLAUDE.md 语言偏好）。
- 文件名 PascalCase：`{Component}Semantic.vue`。
- `semantics` 数组顺序、key 名与 `{Component}ClassNames` 类型定义严格一致。
