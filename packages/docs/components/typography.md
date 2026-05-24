# Typography 排版

文本的基本格式。

## 何时使用

- 当需要展示标题、段落、列表内容时
- 当需要对文字进行强调、标记、删除线等操作时
- 当需要展示代码片段时

## 代码演示

### 标题

通过 `level` 属性设置标题级别。

```vue
<template>
  <Space direction="vertical" :size="16">
    <Title :level="1">h1. Ant Design</Title>
    <Title :level="2">h2. Ant Design</Title>
    <Title :level="3">h3. Ant Design</Title>
    <Title :level="4">h4. Ant Design</Title>
    <Title :level="5">h5. Ant Design</Title>
  </Space>
</template>

<script setup lang="ts">
import { Title, Space } from 'ant-design-hmfw'
</script>
```

### 文本类型

通过 `type` 属性设置文本类型。

```vue
<template>
  <Space direction="vertical">
    <Text>默认文本</Text>
    <Text type="secondary">次要文本</Text>
    <Text type="success">成功文本</Text>
    <Text type="warning">警告文本</Text>
    <Text type="danger">危险文本</Text>
    <Text disabled>禁用文本</Text>
  </Space>
</template>

<script setup lang="ts">
import { Text, Space } from 'ant-design-hmfw'
</script>
```

### 文本修饰

支持多种文本修饰样式。

```vue
<template>
  <Space direction="vertical">
    <Text mark>标记文本</Text>
    <Text code>代码文本</Text>
    <Text keyboard>Ctrl</Text>
    <Text underline>下划线文本</Text>
    <Text delete>删除线文本</Text>
    <Text strong>加粗文本</Text>
    <Text italic>斜体文本</Text>
  </Space>
</template>

<script setup lang="ts">
import { Text, Space } from 'ant-design-hmfw'
</script>
```

### 段落

段落组件支持省略和复制功能。

```vue
<template>
  <Space direction="vertical" :size="16">
    <Paragraph>
      这是一段普通的段落文本。Ant Design 是一套企业级 UI 设计语言和 React 组件库。
    </Paragraph>
    
    <Paragraph copyable>
      这段文本可以复制。点击右侧图标复制内容。
    </Paragraph>
    
    <Paragraph :ellipsis="{ rows: 2 }">
      这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。
      这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。
      这是一段很长的文本,会被省略显示。当文本超过指定行数时,会自动显示省略号。
    </Paragraph>
  </Space>
</template>

<script setup lang="ts">
import { Paragraph, Space } from 'ant-design-hmfw'
</script>
```

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
