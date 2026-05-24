# Rate 评分

评分组件。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

### 基础用法

最简单的用法。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Rate v-model:value="value" />
    <Rate v-model:value="value2" disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(3)
const value2 = ref(2.5)
</script>
```

### 半星

通过 `allow-half` 属性支持选择半星。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Rate v-model:value="value" allow-half />
    <Rate v-model:value="value2" allow-half disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(2.5)
const value2 = ref(3.5)
</script>
```

### 自定义字符

可以将星星替换为其他字符，比如字母、数字、汉字等。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 4px;">使用表情：</p>
      <Rate v-model:value="value1" character="😊" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">使用文字：</p>
      <Rate v-model:value="value2" character="好" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">使用字母：</p>
      <Rate v-model:value="value3" character="A" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value1 = ref(3)
const value2 = ref(4)
const value3 = ref(2)
</script>
```

### 提示信息

通过 `tooltips` 属性为每个星星设置提示信息。

```vue
<template>
  <div>
    <Rate
      v-model:value="value"
      :tooltips="tooltips"
      @hover-change="handleHoverChange"
    />
    <p style="margin-top: 8px;">
      当前：{{ tooltips[value - 1] || '未评分' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(0)
const tooltips = ['极差', '差', '一般', '好', '极好']

const handleHoverChange = (hoverValue: number) => {
  console.log('悬停：', tooltips[hoverValue - 1])
}
</script>
```

## API

### Rate Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 当前数，受控值 | `number` | - |
| defaultValue | 默认值 | `number` | `0` |
| count | star 总数 | `number` | `5` |
| allowHalf | 是否允许半选 | `boolean` | `false` |
| allowClear | 是否允许再次点击后清除 | `boolean` | `true` |
| disabled | 只读，无法进行交互 | `boolean` | `false` |
| character | 自定义字符 | `string \| VNode` | `'★'` |
| tooltips | 自定义每项的提示信息 | `string[]` | - |

### Rate Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 选择时的回调 | `(value: number) => void` |
| change | 选择时的回调 | `(value: number) => void` |
| hoverChange | 鼠标经过时数值变化的回调 | `(value: number) => void` |
| focus | 获取焦点时的回调 | `() => void` |
| blur | 失去焦点时的回调 | `() => void` |
