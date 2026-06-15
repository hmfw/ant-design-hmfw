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

| 参数      | 说明                                          | 类型                      | 默认值  |
| --------- | --------------------------------------------- | ------------------------- | ------- |
| component | 图标组件（SVG 函数式组件）                    | `IconComponent`           | -       |
| spin      | 是否旋转                                      | `boolean`                 | `false` |
| rotate    | 旋转角度（deg）                               | `number`                  | -       |
| style     | 自定义样式（可用于设置 `font-size`、`color`） | `string \| CSSProperties` | -       |
| class     | 自定义类名                                    | `string`                  | -       |

### 内置图标

图标库已同步 Ant Design v6，提供 **681 个高质量图标**（447 个 Outlined + 234 个 Filled），覆盖反馈、操作、方向、导航、文件、编辑、品牌等全部分类。

完整列表请通过上方「图标浏览器」查看，或导入后直接使用，例如：

```ts
import {
  // 反馈
  CheckOutlined,
  WarningOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  InfoCircleFilled,
  QuestionCircleOutlined,

  // 操作
  SearchOutlined,
  PlusOutlined,
  MinusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  SettingOutlined,
  CopyOutlined,
  ReloadOutlined,
  SyncOutlined,
  SaveOutlined,
  ShareAltOutlined,
  DownloadOutlined,
  FilterOutlined,

  // 方向
  UpOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  SwapOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,

  // 导航
  HomeOutlined,
  MenuOutlined,
  BarsOutlined,
  EllipsisOutlined,
  LoginOutlined,
  LogoutOutlined,
  GlobalOutlined,

  // 通用
  UserOutlined,
  BellOutlined,
  BellFilled,
  StarOutlined,
  StarFilled,
  HeartOutlined,
  HeartFilled,
  LockOutlined,
  UnlockOutlined,
  CloudOutlined,
  LinkOutlined,
  MessageOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
  ClockCircleOutlined,

  // 文件
  FolderOutlined,
  FolderOpenOutlined,
  FileOutlined,
  PictureOutlined,
  VideoCameraOutlined,

  // 品牌
  AndroidOutlined,
  AppleOutlined,
} from 'ant-design-hmfw'
```

### 自定义图标

#### 方案一：内联函数式组件

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

#### 方案二：脚本批量生成

如果你有大量自定义 SVG（品牌 Logo、业务图标），推荐通过脚本批量生成图标组件文件。
仓库 `scripts/examples/build-custom-icons.ts` 提供了完整的脚本示例，使用方法见
`scripts/examples/README.md`。

简要流程：

1. 复制 `scripts/examples/build-custom-icons.ts` 到你的项目并改写顶部配置
2. 把 SVG 文件（kebab-case 命名）放入 `SVG_DIR`
3. 运行 `npx tsx scripts/build-my-icons.ts`，生成的图标组件可直接 `import` 使用
