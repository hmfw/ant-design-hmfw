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

## API

### Statistic Props

| 参数             | 说明           | 类型                       | 默认值  |
| ---------------- | -------------- | -------------------------- | ------- |
| title            | 标题           | `string \| VNode`          | -       |
| value            | 数值           | `string \| number`         | -       |
| precision        | 数值精度       | `number`                   | -       |
| prefix           | 前缀           | `string \| VNode`          | -       |
| suffix           | 后缀           | `string \| VNode`          | -       |
| valueStyle       | 数值样式       | `CSSProperties`            | -       |
| groupSeparator   | 千分位分隔符   | `string`                   | `,`     |
| decimalSeparator | 小数点分隔符   | `string`                   | `.`     |
| loading          | 加载状态       | `boolean`                  | `false` |
| valueRender      | 自定义渲染数值 | `(value: string) => VNode` | -       |

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
