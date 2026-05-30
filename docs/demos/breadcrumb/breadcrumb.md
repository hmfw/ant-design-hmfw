# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时
- 当需要告知用户当前位置时
- 当需要向上导航的功能时

## 代码演示

### 基础用法

最简单的用法。

<DemoBlock title="基础用法" :source="BreadcrumbBasicSource">
  <BreadcrumbBasic />
</DemoBlock>

### 带链接

通过 `href` 属性设置链接。

<DemoBlock title="带链接" :source="BreadcrumbLinkSource">
  <BreadcrumbLink />
</DemoBlock>

### 自定义分隔符

通过 `separator` 属性自定义分隔符。

<DemoBlock title="自定义分隔符" :source="BreadcrumbSeparatorSource">
  <BreadcrumbSeparator />
</DemoBlock>

### 带图标

可以在 `title` 中使用图标。

<DemoBlock title="带图标" :source="BreadcrumbIconSource">
  <BreadcrumbIcon />
</DemoBlock>

### 带点击事件

通过 `onClick` 处理面包屑点击。

<DemoBlock title="带点击事件" :source="BreadcrumbClickSource">
  <BreadcrumbClick />
</DemoBlock>

### 参数替换

通过 `params` 属性替换路径中的参数。

<DemoBlock title="参数替换" :source="BreadcrumbParamsSource">
  <BreadcrumbParams />
</DemoBlock>

### 分隔符类型

可以在 `items` 中使用 `type: 'separator'` 来自定义每个分隔符。

<DemoBlock title="分隔符类型" :source="BreadcrumbSeparatorTypeSource">
  <BreadcrumbSeparatorType />
</DemoBlock>

### 路径拼接

使用 `path` 属性自动拼接路径。

<DemoBlock title="路径拼接" :source="BreadcrumbPathSource">
  <BreadcrumbPath />
</DemoBlock>

## API

### Breadcrumb Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 路由栈信息 | `ItemType[]` | `[]` |
| separator | 分隔符 | `string \| VNode` | `'/'` |
| params | 路径参数 | `Record<string, any>` | `{}` |

### ItemType

面包屑项或分隔符。

**BreadcrumbItemType:**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识 | `string \| number` | - |
| title | 名称 | `string \| number \| VNode` | - |
| href | 链接地址 | `string` | - |
| path | 路径（会自动拼接前面的路径） | `string` | - |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `CSSProperties` | - |
| onClick | 点击事件 | `(e: MouseEvent) => void` | - |
| data-* | 自定义数据属性 | `any` | - |
| aria-* | ARIA 无障碍属性 | `any` | - |

**BreadcrumbSeparatorType:**

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型（必须为 'separator'） | `'separator'` | - |
| separator | 分隔符内容 | `string \| VNode` | - |
| key | 唯一标识 | `string \| number` | - |

<script setup>
import BreadcrumbBasic from './BreadcrumbBasic.vue'
import BreadcrumbBasicSource from './BreadcrumbBasic.vue?raw'
import BreadcrumbLink from './BreadcrumbLink.vue'
import BreadcrumbLinkSource from './BreadcrumbLink.vue?raw'
import BreadcrumbSeparator from './BreadcrumbSeparator.vue'
import BreadcrumbSeparatorSource from './BreadcrumbSeparator.vue?raw'
import BreadcrumbIcon from './BreadcrumbIcon.vue'
import BreadcrumbIconSource from './BreadcrumbIcon.vue?raw'
import BreadcrumbClick from './BreadcrumbClick.vue'
import BreadcrumbClickSource from './BreadcrumbClick.vue?raw'
import BreadcrumbParams from './BreadcrumbParams.vue'
import BreadcrumbParamsSource from './BreadcrumbParams.vue?raw'
import BreadcrumbSeparatorType from './BreadcrumbSeparatorType.vue'
import BreadcrumbSeparatorTypeSource from './BreadcrumbSeparatorType.vue?raw'
import BreadcrumbPath from './BreadcrumbPath.vue'
import BreadcrumbPathSource from './BreadcrumbPath.vue?raw'
</script>
