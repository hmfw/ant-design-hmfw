# 自定义图标脚本示例

这里提供从你自己的 SVG 文件批量生成图标组件的脚本示例。

## build-custom-icons.ts

从指定目录读取 SVG 文件，生成与 `ant-design-hmfw` 兼容的图标组件文件。

### 适用场景

- 需要在业务项目中使用品牌 Logo、自有图标等
- 希望复用 `<Icon />` 组件的 spin/rotate/color/size 能力
- 不希望手写大量 `h('svg', ...)` 模板代码

### 使用步骤

1. 复制 `build-custom-icons.ts` 到你自己的项目（例如 `scripts/build-my-icons.ts`）
2. 修改文件顶部的配置：
   - `SVG_DIR` 你的 SVG 文件所在目录（推荐 `./assets/icons`）
   - `OUTPUT_FILE` 生成的图标组件输出路径
   - `COMPONENT_PREFIX` 组件名前缀（避免与 ant-design-hmfw 内置图标冲突）
3. 准备 SVG 源文件：
   - 文件名使用 kebab-case：`my-logo.svg` -> `MyMyLogoOutlined`
   - 以 `-filled` 结尾会生成 `Filled` 后缀的组件：`my-logo-filled.svg` -> `MyMyLogoFilled`
   - SVG 必须包含 `viewBox` 属性
   - 颜色使用 `fill="currentColor"` 以便外部用 CSS `color` 控制
4. 添加 npm script 到你项目的 `package.json`：

   ```json
   {
     "scripts": {
       "gen:icons": "tsx scripts/build-my-icons.ts"
     }
   }
   ```

5. 运行 `pnpm gen:icons`，然后在业务代码中使用：

   ```vue
   <script setup lang="ts">
   import { Icon } from 'ant-design-hmfw'
   import { MyBrandLogoOutlined } from './src/icons'
   </script>

   <template>
     <Icon :component="MyBrandLogoOutlined" style="font-size: 24px; color: #1677ff" />
   </template>
   ```

### SVG 准备注意事项

- 推荐使用 `viewBox="0 0 1024 1024"` 与官方 AntD 图标对齐尺寸
- 设计稿可使用 SVGO 压缩后再放入 `SVG_DIR`
- 仅支持 `<path>` 元素，其他元素（rect/circle/g）需要先转换为 path
- 多色图标可保留单个 path 上的 `fill` 属性，但仅在该色与 `currentColor` 不同时生效
