# Grid 栅格

24 栅格系统。

## 何时使用

- 需要对页面进行栅格化布局时
- 需要响应式布局时
- 需要等分或按比例分配空间时

## 代码演示

### 基础栅格

使用 `span` 属性设置列宽，总宽度为 24。

```vue
<template>
  <Space direction="vertical" style="width: 100%">
    <Row>
      <Col :span="24">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-24</div>
      </Col>
    </Row>
    <Row>
      <Col :span="12">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-12</div>
      </Col>
      <Col :span="12">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">col-12</div>
      </Col>
    </Row>
    <Row>
      <Col :span="8">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-8</div>
      </Col>
      <Col :span="8">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">col-8</div>
      </Col>
      <Col :span="8">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-8</div>
      </Col>
    </Row>
    <Row>
      <Col :span="6">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">col-6</div>
      </Col>
    </Row>
  </Space>
</template>

<script setup lang="ts">
import { Row, Col, Space } from 'ant-design-hmfw'
</script>
```

### 区块间隔

通过 `gutter` 属性设置列间距，支持水平和垂直间距。

```vue
<template>
  <Space direction="vertical" style="width: 100%">
    <div>水平间距</div>
    <Row :gutter="16">
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px;">col-6</div>
      </Col>
    </Row>
    <div>水平 + 垂直间距</div>
    <Row :gutter="[16, 24]">
      <Col :span="6" v-for="i in 8" :key="i">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px;">col-6</div>
      </Col>
    </Row>
  </Space>
</template>

<script setup lang="ts">
import { Row, Col, Space } from 'ant-design-hmfw'
</script>
```

### 偏移

通过 `offset` 属性设置列偏移量。

```vue
<template>
  <Space direction="vertical" style="width: 100%">
    <Row>
      <Col :span="8">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-8</div>
      </Col>
      <Col :span="8" :offset="8">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-8 offset-8</div>
      </Col>
    </Row>
    <Row>
      <Col :span="6" :offset="6">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-6 offset-6</div>
      </Col>
      <Col :span="6" :offset="6">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-6 offset-6</div>
      </Col>
    </Row>
  </Space>
</template>

<script setup lang="ts">
import { Row, Col, Space } from 'ant-design-hmfw'
</script>
```

### 响应式布局

通过 `xs`、`sm`、`md`、`lg`、`xl`、`xxl` 属性设置不同断点下的列宽。

```vue
<template>
  <Row :gutter="16">
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">响应式</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">响应式</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">响应式</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">响应式</div>
    </Col>
  </Row>
</template>

<script setup lang="ts">
import { Row, Col } from 'ant-design-hmfw'
</script>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 栅格间距，支持 `[水平, 垂直]` | `number \| [number, number]` | `0` |
| justify | 水平排列方式 | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between'` | `'start'` |
| align | 垂直对齐方式 | `'top' \| 'middle' \| 'bottom'` | `'top'` |
| wrap | 是否自动换行 | `boolean` | `true` |

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 栅格占位格数，0 时隐藏 | `number` | - |
| offset | 栅格左侧的间隔格数 | `number` | `0` |
| push | 栅格向右移动格数 | `number` | `0` |
| pull | 栅格向左移动格数 | `number` | `0` |
| xs | `<576px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
| sm | `≥576px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
| md | `≥768px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
| lg | `≥992px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
| xl | `≥1200px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
| xxl | `≥1600px` 响应式栅格 | `number \| { span: number, offset: number }` | - |
