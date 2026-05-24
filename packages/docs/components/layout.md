# Layout 布局

协助进行页面级整体布局。

## 何时使用

- 需要搭建页面整体结构时
- 需要侧边栏导航布局时
- 需要顶部导航 + 内容区布局时

## 代码演示

### 基础布局（上中下）

最基本的上中下布局。

```vue
<template>
  <Layout style="min-height: 200px">
    <Header style="background: #001529; color: #fff; padding: 0 24px; line-height: 64px;">
      Header
    </Header>
    <Content style="padding: 24px; background: #fff;">
      Content
    </Content>
    <Footer style="text-align: center; background: #f5f5f5;">
      Footer ©2024 Created by ant-design-hmfw
    </Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Content, Footer } from 'ant-design-hmfw'
</script>
```

### 带侧边栏

左侧边栏 + 右侧内容区布局。

```vue
<template>
  <Layout style="min-height: 300px">
    <Header style="background: #001529; color: #fff; padding: 0 24px; line-height: 64px;">
      Header
    </Header>
    <Layout>
      <Sider :width="200" style="background: #fff; border-right: 1px solid #f0f0f0;">
        <div style="padding: 16px;">Sider</div>
      </Sider>
      <Content style="padding: 24px; background: #f5f5f5;">
        Content
      </Content>
    </Layout>
    <Footer style="text-align: center; background: #f5f5f5;">
      Footer ©2024
    </Footer>
  </Layout>
</template>

<script setup lang="ts">
import { Layout, Header, Content, Footer, Sider } from 'ant-design-hmfw'
</script>
```

### 可折叠侧边栏

通过 `collapsible` 属性开启侧边栏折叠功能。

```vue
<template>
  <Layout style="min-height: 300px">
    <Sider
      v-model:collapsed="collapsed"
      collapsible
      :width="200"
      :collapsed-width="64"
      style="background: #001529;"
    >
      <div style="color: #fff; padding: 16px; text-align: center;">
        {{ collapsed ? '收' : '导航菜单' }}
      </div>
    </Sider>
    <Layout>
      <Header style="background: #fff; padding: 0 24px; border-bottom: 1px solid #f0f0f0; line-height: 64px;">
        Header
      </Header>
      <Content style="padding: 24px; background: #f5f5f5;">
        <p>当前状态：{{ collapsed ? '已折叠' : '已展开' }}</p>
      </Content>
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout, Header, Content, Sider } from 'ant-design-hmfw'

const collapsed = ref(false)
</script>
```

## API

### Layout Props

Layout、Header、Footer、Content 均为容器组件，无特殊 Props，通过 slot 传入内容。

### Sider Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 宽度 | `number \| string` | `200` |
| collapsible | 是否可收起 | `boolean` | `false` |
| collapsed | 当前收起状态（v-model） | `boolean` | - |
| defaultCollapsed | 是否默认收起 | `boolean` | `false` |
| collapsedWidth | 收缩宽度，设置为 0 会出现特殊 trigger | `number` | `80` |
| breakpoint | 触发响应式布局的断点 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | - |
| trigger | 自定义 trigger，设为 null 时隐藏 trigger | `string \| null` | - |

### Layout Slots

| 名称 | 说明 |
| --- | --- |
| default | 子元素内容 |

### Sider Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| collapse | 展开/收起时触发 | `(collapsed: boolean, type: 'clickTrigger' \| 'responsive') => void` |
| breakpoint | 触发响应式布局断点时触发 | `(broken: boolean) => void` |
