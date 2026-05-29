# List 列表

通用列表。

## 何时使用

- 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面

## 代码演示


### 基础用法

基础列表。

<DemoBlock title="基础用法" :source="ListBasicSource">
  <ListBasic />
</DemoBlock>

### 带操作

可以配置额外操作。

<DemoBlock title="带操作" :source="ListActionsSource">
  <ListActions />
</DemoBlock>

### 带头像

带头像的列表。

<DemoBlock title="带头像" :source="ListAvatarSource">
  <ListAvatar />
</DemoBlock>

## API

### List Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 列表数据源 | `any[]` | - |
| bordered | 是否展示边框 | `boolean` | `false` |
| size | 列表大小 | `'default' \| 'small' \| 'large'` | `'default'` |
| split | 是否展示分割线 | `boolean` | `true` |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | `boolean` | `false` |
| pagination | 对应的 pagination 配置，设置 false 不显示 | `object \| false` | `false` |
| header | 列表头部 | `string \| slot` | - |
| footer | 列表底部 | `string \| slot` | - |

### ListItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 列表操作组 | `slot[]` | - |
| extra | 额外内容 | `string \| slot` | - |

### ListItemMeta Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| avatar | 列表元素的图标 | `string \| slot` | - |
| title | 列表元素的标题 | `string \| slot` | - |
| description | 列表元素的描述内容 | `string \| slot` | - |
