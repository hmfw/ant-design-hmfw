# Typography 排版

文本的基本格式。

## 何时使用

- 当需要展示标题、段落、列表内容时
- 当需要对文字进行强调、标记、删除线等操作时
- 当需要展示代码片段时

## 代码演示

### 标题

通过 `level` 属性设置标题级别。

<DemoBlock title="标题" :source="TypographyTitleSource">
  <TypographyTitle />
</DemoBlock>

### 文本类型

通过 `type` 属性设置文本类型。

<DemoBlock title="文本类型" :source="TypographyTextSource">
  <TypographyText />
</DemoBlock>

### 文本修饰

支持多种文本修饰样式。

<DemoBlock title="文本修饰" :source="TypographyDecorationsSource">
  <TypographyDecorations />
</DemoBlock>

### 段落

段落组件以 `<p>` 渲染。

<DemoBlock title="段落" :source="TypographyParagraphSource">
  <TypographyParagraph />
</DemoBlock>

### 链接

使用 `Link` 渲染超链接，支持 `disabled`。

<DemoBlock title="链接" :source="TypographyLinkSource">
  <TypographyLink />
</DemoBlock>

### 可复制

通过 `copyable` 添加复制按钮，对象形式可自定义复制内容与回调。

<DemoBlock title="可复制" :source="TypographyCopyableSource">
  <TypographyCopyable />
</DemoBlock>

### 省略

通过 `ellipsis` 设置单行省略。

<DemoBlock title="省略" :source="TypographyEllipsisSource">
  <TypographyEllipsis />
</DemoBlock>

### 省略 Tooltip 与回调

通过 `ellipsis.tooltip` 在省略时显示完整内容（支持自定义 Tooltip 配置），通过 `ellipsis.onEllipsis` 监听省略状态。

<DemoBlock title="省略 Tooltip 与回调" :source="TypographyEllipsisTooltipSource">
  <TypographyEllipsisTooltip />
</DemoBlock>

## API

### 通用 Props（Text / Title / Paragraph / Link 共享）

| 参数      | 说明                                                                                    | 类型                                                | 默认值  |
| --------- | --------------------------------------------------------------------------------------- | --------------------------------------------------- | ------- |
| type      | 文本类型                                                                                | `'secondary' \| 'success' \| 'warning' \| 'danger'` | -       |
| disabled  | 禁用状态                                                                                | `boolean`                                           | `false` |
| mark      | 标记样式                                                                                | `boolean`                                           | `false` |
| code      | 代码样式                                                                                | `boolean`                                           | `false` |
| keyboard  | 键盘样式                                                                                | `boolean`                                           | `false` |
| underline | 下划线                                                                                  | `boolean`                                           | `false` |
| delete    | 删除线                                                                                  | `boolean`                                           | `false` |
| strong    | 加粗                                                                                    | `boolean`                                           | `false` |
| italic    | 斜体                                                                                    | `boolean`                                           | `false` |
| copyable  | 是否可复制，对象形式 `{ text?, onCopy?, tooltips?, icon? }`                             | `boolean \| CopyableConfig`                         | `false` |
| ellipsis  | 单行省略；对象形式 `{ rows?, tooltip?, onEllipsis? }` 支持多行省略、悬停 Tooltip 与回调 | `boolean \| EllipsisConfig`                         | `false` |

### Title Props

继承通用 Props，额外：

| 参数  | 说明     | 类型                    | 默认值 |
| ----- | -------- | ----------------------- | ------ |
| level | 标题级别 | `1 \| 2 \| 3 \| 4 \| 5` | `1`    |

### Link Props

继承通用 Props，额外：

| 参数   | 说明         | 类型     | 默认值 |
| ------ | ------------ | -------- | ------ |
| href   | 链接地址     | `string` | -      |
| target | 链接打开方式 | `string` | -      |

### CopyableConfig

| 参数     | 说明                                                     | 类型                        | 默认值      |
| -------- | -------------------------------------------------------- | --------------------------- | ----------- |
| text     | 自定义复制内容                                           | `string`                    | 节点文本    |
| onCopy   | 复制回调                                                 | `(e: MouseEvent) => void`   | -           |
| tooltips | Tooltip 文案 `[复制前, 复制后]`，传 `false` 关闭 Tooltip | `false \| [string, string]` | 跟随 locale |
| icon     | 自定义图标 `[复制前, 复制后]`                            | `[VNode, VNode]`            | -           |

### EllipsisConfig

| 参数       | 说明                                                                                    | 类型                                          | 默认值 |
| ---------- | --------------------------------------------------------------------------------------- | --------------------------------------------- | ------ |
| rows       | 最多显示行数                                                                            | `number`                                      | `1`    |
| tooltip    | 省略时显示 Tooltip：`true` 用纯文本，字符串/数字自定义文案，对象传入完整 `TooltipProps` | `boolean \| string \| number \| TooltipProps` | -      |
| onEllipsis | 省略状态变化回调                                                                        | `(ellipsis: boolean) => void`                 | -      |
