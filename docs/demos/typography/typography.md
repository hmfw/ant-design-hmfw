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

段落组件支持省略和复制功能。

<DemoBlock title="段落" :source="TypographyParagraphSource">
  <TypographyParagraph />
</DemoBlock>

## API

### Title Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| level | 标题级别 | `1 \| 2 \| 3 \| 4 \| 5` | `1` |
| type | 文本类型 | `'default' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |

### Text Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 文本类型 | `'default' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| disabled | 禁用状态 | `boolean` | `false` |
| mark | 标记样式 | `boolean` | `false` |
| code | 代码样式 | `boolean` | `false` |
| keyboard | 键盘样式 | `boolean` | `false` |
| underline | 下划线 | `boolean` | `false` |
| delete | 删除线 | `boolean` | `false` |
| strong | 加粗 | `boolean` | `false` |
| italic | 斜体 | `boolean` | `false` |
| copyable | 是否可复制 | `boolean` | `false` |
| ellipsis | 省略配置 | `boolean \| { rows?: number }` | `false` |

### Paragraph Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| copyable | 是否可复制 | `boolean` | `false` |
| ellipsis | 省略配置 | `boolean \| { rows?: number }` | `false` |
