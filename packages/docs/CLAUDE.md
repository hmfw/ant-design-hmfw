# packages/docs

组件库的文档站，基于 VitePress，展示组件 API 文档和交互式代码演示。

## 包信息

- **包名**: `docs`（private）
- **构建工具**: VitePress 1.x
- **依赖**: `ant-design-hmfw` workspace 本地包
- **插件**: `@vitepress-demo-preview` 已安装但未使用（演示系统已改为自定义 DemoBlock）

## 目录结构

```
.vitepress/
├── config.mts              # VitePress 配置（导航、侧边栏、主题）
├── theme/
│   ├── components/
│   │   └── DemoBlock.vue   # 核心演示组件（预览+代码折叠+TS/JS切换）
│   ├── index.ts            # 主题入口（注册全局组件：ConfigProvider、DemoBlock）
│   └── custom.css          # Ant Design 风格样式覆盖
└── cache/                  # 构建缓存（不提交）
components/                 # 57 个组件文档（.md 文件）
demos/                      # 所有 demo .vue 文件（按组件目录分组）
│   ├── button/             # ButtonBasic.vue、ButtonSize.vue 等
│   ├── input/
│   └── ...（57 个组件各自目录）
guide/                      # 指南文档（快速上手、主题定制、国际化）
public/                     # 静态资源
index.md                    # 首页（layout: home）
```

## 常用命令

```bash
pnpm dev      # 启动文档开发服务器（端口自动递增，通常 5173+）
pnpm build    # 构建静态文档站
pnpm preview  # 预览构建结果
```

## 演示系统

文档站使用自定义 `DemoBlock` 组件实现交互式演示，支持：

- **组件预览** — 实时渲染组件效果
- **代码折叠/展开** — 点击"查看代码"展开源码
- **TS/JS 双版本** — TypeScript/JavaScript 切换查看
- **复制按钮** — 一键复制当前版本源码

### DemoBlock 使用方式

每个组件文档（`.md`）通过以下模式引入 demo：

```markdown
<script setup>
import ButtonBasic from '../demos/button/ButtonBasic.vue'
import ButtonBasicSource from '../demos/button/ButtonBasic.vue?raw'
</script>

<DemoBlock title="按钮类型" :source="ButtonBasicSource">
  <ButtonBasic />
</DemoBlock>
```

- `?raw` 导入是 Vite 原生支持，返回文件原始字符串内容
- `DemoBlock` 已全局注册，markdown 中无需 import
- TS→JS 转换在客户端 `DemoBlock.vue` 内部通过 regex 完成

### 添加新 demo

1. 在 `demos/{component}/` 下创建 `ComponentNameXxx.vue`（组件名+描述词）
2. 在对应的 `components/{component}.md` 中：
   - 在 `<script setup>` 块添加组件和 `?raw` 导入
   - 用 `<DemoBlock>` 替换或新增演示块

## 添加组件文档

1. 在 `components/` 下创建 `{component}.md`
2. 在 `demos/{component}/` 下创建 demo `.vue` 文件
3. 在 `.vitepress/config.mts` 的侧边栏配置中添加链接

## 样式定制（custom.css）

文档站覆盖了 VitePress 默认样式，实现 Ant Design 视觉风格：

- 品牌色：`#1677ff`（Ant Design 蓝）
- 字体：Ant Design 官方字体栈
- 侧边栏激活项：左侧 3px 蓝色竖线 + 浅蓝背景
- API 表格：`code` 标签浅蓝背景
- Features 卡片：悬停蓝色边框

## 注意事项

- 构建前确保 `ant-design-hmfw` 已构建（`pnpm --filter ant-design-hmfw build`）
- 开发时 Vite alias 将 `ant-design-hmfw` 指向 `../../components/src/index.ts`，无需预构建
