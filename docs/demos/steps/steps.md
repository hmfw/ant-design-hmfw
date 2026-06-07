# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 何时使用

- 当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务
- 需要展示当前操作的进度时

## 代码演示

### 基础用法

简单的步骤条。

<DemoBlock title="基础用法" :source="StepsBasicSource">
  <StepsBasic />
</DemoBlock>

### 垂直步骤条

通过 `direction="vertical"` 或 `orientation="vertical"` 设置垂直方向步骤条。

<DemoBlock title="垂直步骤条" :source="StepsVerticalSource">
  <StepsVertical />
</DemoBlock>

### 点状步骤条

通过 `type="dot"` 或 `progress-dot` 属性设置点状步骤条。

<DemoBlock title="点状步骤条" :source="StepsDotSource">
  <StepsDot />
</DemoBlock>

### 错误状态

通过 `status="error"` 设置错误状态。

<DemoBlock title="错误状态" :source="StepsErrorSource">
  <StepsError />
</DemoBlock>

### 小型步骤条

通过 `size="small"` 设置小型步骤条。

<DemoBlock title="小型步骤条" :source="StepsSmallSource">
  <StepsSmall />
</DemoBlock>

### 导航型步骤条

通过 `type="navigation"` 设置导航型步骤条。

<DemoBlock title="导航型步骤条" :source="StepsNavigationSource">
  <StepsNavigation />
</DemoBlock>

### 面板型步骤条

通过 `type="panel"` 设置面板型步骤条。

<DemoBlock title="面板型步骤条" :source="StepsPanelSource">
  <StepsPanel />
</DemoBlock>

### 进度百分比

通过 `percent` 属性显示当前步骤的进度百分比。

<DemoBlock title="进度百分比" :source="StepsProgressSource">
  <StepsProgress />
</DemoBlock>

### 内联型步骤条

通过 `type="inline"` 设置内联型步骤条。

<DemoBlock title="内联型步骤条" :source="StepsInlineSource">
  <StepsInline />
</DemoBlock>

## API

### Steps Props

| 参数           | 说明                                              | 类型                                                        | 默认值         |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------- | -------------- |
| current        | 指定当前步骤，从 0 开始记数                       | `number`                                                    | `0`            |
| initial        | 起始序号，从 0 开始记数                           | `number`                                                    | `0`            |
| items          | 配置选项                                          | `StepItem[]`                                                | `[]`           |
| direction      | 指定步骤条方向（已废弃，请使用 orientation）      | `'horizontal' \| 'vertical'`                                | `'horizontal'` |
| orientation    | 指定步骤条方向                                    | `'horizontal' \| 'vertical'`                                | `'horizontal'` |
| size           | 指定大小                                          | `'default' \| 'small'`                                      | `'default'`    |
| status         | 指定当前步骤的状态                                | `'wait' \| 'process' \| 'finish' \| 'error'`                | `'process'`    |
| type           | 步骤条类型                                        | `'default' \| 'navigation' \| 'inline' \| 'panel' \| 'dot'` | `'default'`    |
| progressDot    | 点状步骤条（已废弃，请使用 type="dot"）           | `boolean \| function`                                       | `false`        |
| labelPlacement | 指定标签放置位置（已废弃，请使用 titlePlacement） | `'horizontal' \| 'vertical'`                                | `'horizontal'` |
| titlePlacement | 指定标签放置位置                                  | `'horizontal' \| 'vertical'`                                | `'horizontal'` |
| variant        | 步骤条样式变体                                    | `'filled' \| 'outlined'`                                    | `'filled'`     |
| percent        | 当前步骤的进度百分比（0-100）                     | `number`                                                    | -              |
| responsive     | 是否响应式                                        | `boolean`                                                   | `true`         |
| ellipsis       | 是否省略过长的标题和描述                          | `boolean`                                                   | `false`        |
| offset         | 内联型步骤条的偏移量                              | `number`                                                    | `0`            |
| iconRender     | 自定义图标渲染函数                                | `(node, info) => VNode`                                     | -              |

### Steps Events

| 事件名 | 说明               | 回调参数                    |
| ------ | ------------------ | --------------------------- |
| change | 点击切换步骤时触发 | `(current: number) => void` |

### StepItem

| 参数        | 说明                                     | 类型                                         | 默认值  |
| ----------- | ---------------------------------------- | -------------------------------------------- | ------- |
| title       | 标题                                     | `string \| VNode`                            | -       |
| description | 步骤的详情描述（已废弃，请使用 content） | `string \| VNode`                            | -       |
| content     | 步骤的详情描述                           | `string \| VNode`                            | -       |
| subTitle    | 子标题                                   | `string \| VNode`                            | -       |
| status      | 指定状态                                 | `'wait' \| 'process' \| 'finish' \| 'error'` | -       |
| icon        | 步骤图标                                 | `VNode`                                      | -       |
| disabled    | 禁用点击                                 | `boolean`                                    | `false` |
| onClick     | 点击步骤时的回调                         | `(e: MouseEvent) => void`                    | -       |
