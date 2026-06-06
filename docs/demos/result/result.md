# Result 结果

用于反馈一系列操作任务的处理结果。

## 何时使用

- 当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用

## 代码演示


### 成功结果

成功的结果。

<DemoBlock title="成功结果" :source="ResultSuccessSource">
  <ResultSuccess />
</DemoBlock>

### 错误结果

复杂的错误反馈。

<DemoBlock title="错误结果" :source="ResultErrorSource">
  <ResultError />
</DemoBlock>

### 404 页面

此页面不存在。

<DemoBlock title="404 页面" :source="Result404Source">
  <Result404 />
</DemoBlock>

## API

### Result Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| status | 结果的状态，决定图标和颜色；`404/403/500` 渲染为异常插画 | `'success' \| 'error' \| 'warning' \| 'info' \| '404' \| '403' \| '500'` | `'info'` |
| title | 标题 | `string` | - |
| subTitle | 副标题 | `string` | - |
| icon | 自定义图标字符；设为 `false` 时隐藏图标（异常状态插画不受影响） | `string \| false` | - |
| extra | 操作区内容（`extra` 插槽优先级更高） | `string` | - |

### Result Slots

| 名称 | 说明 |
| --- | --- |
| icon | 自定义图标 |
| title | 自定义标题 |
| subTitle | 自定义副标题 |
| extra | 操作区 |
| default | 补充说明内容 |
