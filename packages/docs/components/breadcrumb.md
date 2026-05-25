# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

<script setup>
import BreadcrumbBasic from '../demos/breadcrumb/BreadcrumbBasic.vue'
import BreadcrumbBasicSource from '../demos/breadcrumb/BreadcrumbBasic.vue?raw'
import BreadcrumbLink from '../demos/breadcrumb/BreadcrumbLink.vue'
import BreadcrumbLinkSource from '../demos/breadcrumb/BreadcrumbLink.vue?raw'
import BreadcrumbSeparator from '../demos/breadcrumb/BreadcrumbSeparator.vue'
import BreadcrumbSeparatorSource from '../demos/breadcrumb/BreadcrumbSeparator.vue?raw'
import BreadcrumbClick from '../demos/breadcrumb/BreadcrumbClick.vue'
import BreadcrumbClickSource from '../demos/breadcrumb/BreadcrumbClick.vue?raw'
</script>

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

### 带点击事件

通过 `onClick` 处理面包屑点击。

<DemoBlock title="带点击事件" :source="BreadcrumbClickSource">
  <BreadcrumbClick />
</DemoBlock>

## API

### Breadcrumb Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 路由栈信息 | `BreadcrumbItem[]` | `[]` |
| separator | 分隔符 | `string` | `'/'` |

### BreadcrumbItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 名称 | `string` | - |
| href | 链接地址 | `string` | - |
| onClick | 点击事件 | `(e: MouseEvent) => void` | - |
