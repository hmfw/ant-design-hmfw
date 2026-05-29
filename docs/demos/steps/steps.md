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

通过 `direction="vertical"` 设置垂直方向步骤条。

<DemoBlock title="垂直步骤条" :source="StepsVerticalSource">
  <StepsVertical />
</DemoBlock>

### 点状步骤条

通过 `progress-dot` 属性设置点状步骤条。

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

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 指定当前步骤，从 0 开始记数 | `number` | `0` |
| items | 配置选项 | `StepItem[]` | `[]` |
| direction | 指定步骤条方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size | 指定大小 | `'default' \| 'small'` | `'default'` |
| status | 指定当前步骤的状态 | `'wait' \| 'process' \| 'finish' \| 'error'` | `'process'` |
| progressDot | 点状步骤条，可以自定义点的渲染 | `boolean \| function` | `false` |
| labelPlacement | 指定标签放置位置 | `'horizontal' \| 'vertical'` | `'horizontal'` |

### StepItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| description | 步骤的详情描述 | `string` | - |
| subTitle | 子标题 | `string` | - |
| status | 指定状态 | `'wait' \| 'process' \| 'finish' \| 'error'` | - |
| icon | 步骤图标 | `string` | - |
| disabled | 禁用点击 | `boolean` | `false` |
