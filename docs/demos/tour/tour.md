# Tour 漫游引导

用于分步引导用户了解产品功能的组件。

## 何时使用

- 新功能上线时，引导用户了解新功能
- 复杂操作流程，需要分步骤引导用户完成
- 对于特定的元素进行操作指引

## 代码演示

### 基础用法

最简单的用法，无目标元素，居中展示。

<DemoBlock title="基础用法" :source="TourBasicSource">
  <TourBasic />
</DemoBlock>

### 不同类型

Tour 有两种类型：`default` 和 `primary`。

<DemoBlock title="不同类型" :source="TourTypeSource">
  <TourType />
</DemoBlock>

## API

### Tour Props

| 参数                  | 说明                                          | 类型                                                       | 默认值                      |
| --------------------- | --------------------------------------------- | ---------------------------------------------------------- | --------------------------- |
| open (v-model)        | 是否显示                                      | `boolean`                                                  | `false`                     |
| current (v-model)     | 当前步骤                                      | `number`                                                   | `0`                         |
| steps                 | 步骤配置                                      | `TourStep[]`                                               | `[]`                        |
| arrow                 | 是否显示箭头                                  | `boolean \| { pointAtCenter?: boolean }`                   | `true`                      |
| placement             | 引导卡片相对于目标元素的位置                  | `TooltipPlacement`                                         | `'bottom'`                  |
| mask                  | 是否显示遮罩                                  | `boolean \| { style?: CSSProperties; color?: string }`     | `true`                      |
| type                  | 类型，影响底色与文字颜色                      | `'default' \| 'primary'`                                   | `'default'`                 |
| scrollIntoViewOptions | 是否滚动到目标元素，支持传入滚动选项          | `boolean \| ScrollIntoViewOptions`                         | `true`                      |
| zIndex                | Tour 的 z-index                               | `number`                                                   | `1001`                      |
| gap                   | 引导卡片与目标元素的距离和箭头偏移            | `{ offset?: number \| [number, number]; radius?: number }` | `{ offset: 12, radius: 4 }` |
| indicatorsRender      | 自定义指示器渲染                              | `(current: number, total: number) => VNode`                | -                           |
| closeIcon             | 自定义关闭图标，设置为 `false` 时隐藏关闭按钮 | `VNode \| (() => VNode) \| false`                          | `<CloseOutlined />`         |

### TourStep

| 参数                  | 说明                                   | 类型                                                   | 默认值 |
| --------------------- | -------------------------------------- | ------------------------------------------------------ | ------ |
| title                 | 标题                                   | `string \| VNode \| (() => VNode)`                     | -      |
| description           | 描述                                   | `string \| VNode \| (() => VNode)`                     | -      |
| target                | 目标元素（CSS 选择器或返回元素的函数） | `string \| (() => HTMLElement \| null)`                | -      |
| placement             | 弹出位置                               | `TooltipPlacement`                                     | -      |
| cover                 | 封面图片或自定义内容                   | `string \| VNode`                                      | -      |
| type                  | 类型，优先级高于 Tour 的 type          | `'default' \| 'primary'`                               | -      |
| mask                  | 是否显示遮罩，优先级高于 Tour 的 mask  | `boolean \| { style?: CSSProperties; color?: string }` | -      |
| style                 | 自定义样式                             | `CSSProperties`                                        | -      |
| className             | 自定义类名                             | `string`                                               | -      |
| nextButtonProps       | 下一步按钮的属性                       | `TourButtonProps`                                      | -      |
| prevButtonProps       | 上一步按钮的属性                       | `TourButtonProps`                                      | -      |
| scrollIntoViewOptions | 是否滚动到目标元素                     | `boolean \| ScrollIntoViewOptions`                     | -      |

### TourButtonProps

| 参数     | 说明                  | 类型              |
| -------- | --------------------- | ----------------- |
| children | 按钮文本              | `string \| VNode` |
| onClick  | 点击回调              | `() => void`      |
| ...其他  | Button 组件的其他属性 | `ButtonProps`     |

### Tour Events

| 事件名 | 说明                         | 回调参数                    |
| ------ | ---------------------------- | --------------------------- |
| change | 步骤改变时                   | `(current: number) => void` |
| close  | 关闭时                       | `() => void`                |
| finish | 完成时（最后一步点击下一步） | `() => void`                |

## 设计 Token

| Token 名称                    | 说明                                    | 默认值                                |
| ----------------------------- | --------------------------------------- | ------------------------------------- |
| `--hmfw-color-bg-elevated`    | 卡片背景色                              | `#fff`                                |
| `--hmfw-box-shadow-secondary` | 卡片阴影                                | `0 6px 16px rgba(0, 0, 0, 0.08), ...` |
| `--hmfw-color-primary`        | 主题色（primary 类型背景 & 激活指示器） | `#1677ff`                             |
| `--hmfw-color-text`           | 标题文字颜色                            | `rgba(0, 0, 0, 0.88)`                 |
| `--hmfw-color-text-secondary` | 描述文字颜色                            | `rgba(0, 0, 0, 0.65)`                 |
| `--hmfw-color-text-tertiary`  | 关闭图标颜色                            | `rgba(0, 0, 0, 0.45)`                 |
| `--hmfw-border-radius`        | 卡片圆角                                | `8px`                                 |
| `--hmfw-border-radius-sm`     | 按钮小圆角                              | `4px`                                 |
