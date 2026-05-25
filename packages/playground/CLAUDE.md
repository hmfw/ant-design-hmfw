# packages/playground

组件库的开发调试环境，基于 Vite + Vue3 + TSX，每个组件对应一个独立 Tab。

## 包信息

- **包名**: `playground`（private）
- **构建工具**: Vite 5
- **依赖**: `ant-design-hmfw` workspace 本地包
- **默认端口**: 5173 起，自动递增（通常为 5177）

## 目录结构

```
src/
├── App.tsx          # Tab 导航主应用，维护 demos 数组
├── main.ts          # 应用入口
└── demos/           # 各组件演示文件
    └── XxxDemo.tsx
```

## 常用命令

```bash
pnpm dev     # 启动开发服务器（http://localhost:5177）
pnpm build   # 构建生产版本
pnpm preview # 预览构建结果
```

## 添加组件演示

1. 创建 `src/demos/XxxDemo.tsx`
2. 在 `src/App.tsx` 的 `demos` 数组中添加条目：

```typescript
const demos = [
  { key: 'button', label: 'Button', component: ButtonDemo },
  { key: 'xxx', label: 'Xxx', component: XxxDemo },  // 新增
]
```

## App.tsx 结构

- `demos` 数组驱动 Tab 导航
- 导航栏使用 `flex-wrap: wrap` 支持多行
- 每个 Tab 懒渲染对应的 Demo 组件

## E2E 验证（Playwright）

```bash
# 确保 playground 正在运行后执行：
playwright-cli open http://localhost:5177
playwright-cli screenshot --filename=/tmp/demo.png
playwright-cli console error
playwright-cli close
```

## 注意事项

- playground 依赖 `ant-design-hmfw` 的构建产物，开发时需同时运行 `pnpm --filter ant-design-hmfw dev`
- 或直接在 playground 中通过 Vite alias 指向 `src/` 源码（当前配置以 workspace 包为准）
