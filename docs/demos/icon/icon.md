# Icon 图标

语义化的矢量图形，用于展示常用的操作和状态。


## 何时使用

- 需要展示操作图标时
- 需要展示状态图标时
- 需要展示品牌图标时

## 代码演示

### 图标浏览器

浏览所有内置图标，支持搜索和分类过滤。点击图标可复制代码。

<DemoBlock title="图标浏览器" :source="IconBrowserSource">
  <IconBrowser />
</DemoBlock>

### 基础用法

展示内置的图标类型。

<DemoBlock title="基础用法" :source="IconBasicSource">
  <IconBasic />
</DemoBlock>

### 图标尺寸

通过 `style="font-size: Npx"` 控制图标大小（图标使用 `1em` 跟随字体大小）。

<DemoBlock title="图标尺寸" :source="IconSizeSource">
  <IconSize />
</DemoBlock>

### 图标颜色

通过 `style="color: #xxx"` 控制图标颜色（图标使用 `currentColor` 继承文字颜色）。

<DemoBlock title="图标颜色" :source="IconColorSource">
  <IconColor />
</DemoBlock>

### 旋转动画

通过 `spin` 属性让图标旋转。

<DemoBlock title="旋转动画" :source="IconSpinSource">
  <IconSpin />
</DemoBlock>

## API

### Icon Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | 图标组件（SVG 函数式组件） | `IconComponent` | - |
| spin | 是否旋转 | `boolean` | `false` |
| rotate | 旋转角度（deg） | `number` | - |
| style | 自定义样式（可用于设置 `font-size`、`color`） | `string \| CSSProperties` | - |
| class | 自定义类名 | `string` | - |

### 内置图标

| 导出名 | 说明 |
| --- | --- |
| `SearchOutlined` | 搜索 |
| `CloseOutlined` | 关闭 |
| `CheckOutlined` | 勾选 |
| `WarningOutlined` | 警告 |
| `InfoCircleOutlined` | 信息 |
| `LoadingOutlined` | 加载中 |
| `UpOutlined` | 向上 |
| `DownOutlined` | 向下 |
| `LeftOutlined` | 向左 |
| `RightOutlined` | 向右 |
| `PlusOutlined` | 加号 |
| `MinusOutlined` | 减号 |
| `EditOutlined` | 编辑 |
| `DeleteOutlined` | 删除 |
| `EyeOutlined` | 查看 |
| `HomeOutlined` | 首页 |
| `UserOutlined` | 用户 |
| `SettingOutlined` | 设置 |

### 自定义图标

实现 `IconComponent` 类型（`FunctionalComponent<SVGAttributes>`）即可传入任意 SVG 图标：

```tsx
import type { IconComponent } from 'ant-design-hmfw'

const MyIcon: IconComponent = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="..." />
  </svg>
)
```

```vue
<Icon :component="MyIcon" />
```
