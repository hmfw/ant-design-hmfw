# Statistic 统计数值

展示统计数值。

## 何时使用

- 当需要突出某个或某组数字时。
- 当需要展示带描述的统计类数据时使用。

## 代码演示

### 基础用法

<DemoBlock title="基础用法" :source="StatisticBasicSource">
  <StatisticBasic />
</DemoBlock>

简单的展示统计数值，支持精度控制和后缀。

### 单位设置

<DemoBlock title="单位设置" :source="StatisticUnitSource">
  <StatisticUnit />
</DemoBlock>

通过前缀和后缀添加单位，可以使用字符串或 VNode。通过 `valueStyle` 可以设置数值样式。

### 倒计时

<DemoBlock title="倒计时" :source="StatisticCountdownSource">
  <StatisticCountdown />
</DemoBlock>

倒计时组件，支持多种时间格式和倒计时结束回调。

### 倒计时事件

<DemoBlock title="倒计时事件" :source="StatisticEventSource">
  <StatisticEvent />
</DemoBlock>

通过 `finish` 事件监听倒计时结束，通过 `change` 事件监听剩余时间变化（参数为剩余毫秒数）。

### 加载状态

<DemoBlock title="加载状态" :source="StatisticLoadingSource">
  <StatisticLoading />
</DemoBlock>

数据加载中时显示骨架屏占位。

### 自定义渲染

<DemoBlock title="自定义渲染" :source="StatisticCustomSource">
  <StatisticCustom />
</DemoBlock>

通过 `valueRender` 可以完全自定义数值的渲染方式。

### 细粒度样式控制

通过 `classNames` / `styles` 对各子元素做细粒度样式控制。

<DemoBlock title="语义化 className 与 style" :source="StatisticClassNamesSource">
  <StatisticClassNames />
</DemoBlock>

## API

### Statistic Props

| 参数             | 说明                                                                             | 类型                       | 默认值  |
| ---------------- | -------------------------------------------------------------------------------- | -------------------------- | ------- |
| title            | 标题                                                                             | `string \| VNode`          | -       |
| value            | 数值                                                                             | `string \| number`         | -       |
| precision        | 数值精度                                                                         | `number`                   | -       |
| prefix           | 前缀                                                                             | `string \| VNode`          | -       |
| suffix           | 后缀                                                                             | `string \| VNode`          | -       |
| valueStyle       | 数值样式                                                                         | `CSSProperties`            | -       |
| groupSeparator   | 千分位分隔符                                                                     | `string`                   | `,`     |
| decimalSeparator | 小数点分隔符                                                                     | `string`                   | `.`     |
| loading          | 加载状态                                                                         | `boolean`                  | `false` |
| valueRender      | 自定义渲染数值                                                                   | `(value: string) => VNode` | -       |
| classNames       | 语义化结构 class，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `StatisticClassNames`      | -       |
| styles           | 语义化结构 style，见下方 [语义化 className 与 style](#语义化-classname-与-style) | `StatisticStyles`          | -       |

### Countdown Props

| 参数        | 说明                      | 类型                       | 默认值     |
| ----------- | ------------------------- | -------------------------- | ---------- |
| title       | 标题                      | `string \| VNode`          | -          |
| value       | 目标时间（时间戳或 Date） | `number \| Date`           | -          |
| format      | 时间格式                  | `string`                   | `HH:mm:ss` |
| prefix      | 前缀                      | `string \| VNode`          | -          |
| suffix      | 后缀                      | `string \| VNode`          | -          |
| valueStyle  | 数值样式                  | `CSSProperties`            | -          |
| loading     | 加载状态                  | `boolean`                  | `false`    |
| valueRender | 自定义渲染数值            | `(value: string) => VNode` | -          |

### Countdown Events

| 事件名 | 说明             | 回调参数                  |
| ------ | ---------------- | ------------------------- |
| finish | 倒计时完成时触发 | `() => void`              |
| change | 倒计时变化时触发 | `(value: number) => void` |

### format 格式

| 占位符 | 说明         |
| ------ | ------------ |
| `DD`   | 天数（补零） |
| `D`    | 天数         |
| `HH`   | 小时（补零） |
| `H`    | 小时         |
| `mm`   | 分钟（补零） |
| `m`    | 分钟         |
| `ss`   | 秒（补零）   |
| `s`    | 秒           |
| `SSS`  | 毫秒（补零） |

---

## 语义化 className 与 style

通过 `classNames` 和 `styles` 属性可以对统计数值组件的各个子节点应用自定义样式，支持细粒度控制。

### 类型定义

```typescript
import type { CSSProperties } from 'vue'

interface StatisticClassNames {
  root?: string // 统计数值根容器
  title?: string // 标题区域
  content?: string // 数值内容容器
  prefix?: string // 前缀
  value?: string // 数值
  suffix?: string // 后缀
}

interface StatisticStyles {
  root?: CSSProperties
  title?: CSSProperties
  content?: CSSProperties
  prefix?: CSSProperties
  value?: CSSProperties
  suffix?: CSSProperties
}
```

### 语义化 DOM

将鼠标移到右侧任一节点上，左侧预览区会框出它对应的 DOM 元素。点击图钉可固定高亮，点击信息图标查看该节点的 `classNames` / `styles` 写法模板。

<StatisticSemantic />

### DOM 结构与 className 映射

```html
<div class="hmfw-statistic">
  <!-- ↑ classNames.root / styles.root -->
  <div class="hmfw-statistic-title">
    <!-- ↑ classNames.title / styles.title；仅设置 title 时渲染 -->
    标题
  </div>
  <div class="hmfw-statistic-content">
    <!-- ↑ classNames.content / styles.content（valueStyle 也作用于此） -->
    <span class="hmfw-statistic-content-prefix">
      <!-- ↑ classNames.prefix / styles.prefix；仅设置 prefix 时渲染 -->
      前缀
    </span>
    <span class="hmfw-statistic-content-value">
      <!-- ↑ classNames.value / styles.value -->
      1,234
    </span>
    <span class="hmfw-statistic-content-suffix">
      <!-- ↑ classNames.suffix / styles.suffix；仅设置 suffix 时渲染 -->
      后缀
    </span>
  </div>
</div>
```

### 用法

`classNames` 追加自定义类，`styles` 写内联样式，二者可同时作用于同一节点：

```vue
<template>
  <!-- classNames：追加自定义类 -->
  <Statistic
    title="总销售额"
    :value="1234567.89"
    :precision="2"
    prefix="¥"
    :class-names="{ root: 'custom-root', title: 'custom-title', value: 'custom-value' }"
  />

  <!-- styles：内联样式，优先级高于 classNames -->
  <Statistic
    title="转化率"
    :value="12.8"
    :precision="1"
    suffix="%"
    :styles="{
      root: {
        padding: '16px',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      },
      title: { fontWeight: 'bold', color: '#8b4513' },
      value: { fontSize: '28px', color: '#fff' },
      suffix: { color: '#fff', fontSize: '18px' },
    }"
  />

  <!-- 组合：classNames 与 styles 混用 -->
  <Statistic
    title="在线人数"
    :value="8888"
    suffix="人"
    :class-names="{ root: 'custom-root' }"
    :styles="{ content: { marginTop: '8px' }, value: { fontSize: '36px', color: '#52c41a' } }"
  />
</template>

<style scoped>
:deep(.custom-root) {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

:deep(.custom-title) {
  font-size: 16px;
  font-weight: bold;
  color: #1890ff;
  text-transform: uppercase;
}

:deep(.custom-value) {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
```

### 注意事项

- `styles` 内联样式优先级高于 `classNames`，二者可同时作用于同一节点
- 各语义化类名会与组件内置类名（如 `.hmfw-statistic`）合并，不会互相覆盖
- `styles.content` 与 `valueStyle` prop 会合并（`valueStyle` 在前、`styles.content` 在后，后者优先级更高）
- Countdown 组件通过 `extends StatisticProps` 自动继承全部语义化 API，可使用相同的 `classNames` 和 `styles`

## 设计 Token

Statistic 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。

| Token 名称                      | 说明                   | 默认值                                                       |
| ------------------------------- | ---------------------- | ------------------------------------------------------------ |
| `--hmfw-color-text`             | 根容器文本色           | `rgba(0,0,0,0.88)`                                           |
| `--hmfw-color-text-heading`     | 数值内容文本色         | `rgba(0,0,0,0.88)`                                           |
| `--hmfw-color-text-description` | 标题文本色             | `rgba(0,0,0,0.45)`                                           |
| `--hmfw-font-family`            | 字体族                 | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...` |
| `--hmfw-font-size`              | 标题字号               | `14px`                                                       |
| `--hmfw-line-height`            | 标题行高               | `1.5714285714285714`                                         |
| `--hmfw-font-size-heading-3`    | 数值内容字号           | `24px`                                                       |
| `--hmfw-line-height-heading-3`  | 数值内容行高           | `1.3333333333333333`                                         |
| `--hmfw-margin-xxs`             | 标题下间距、前后缀间距 | `4px`                                                        |
