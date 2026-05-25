# Button 按钮

按钮用于开始一个即时操作。

<script setup>
import ButtonBasic from '../demos/button/ButtonBasic.vue'
import ButtonBasicSource from '../demos/button/ButtonBasic.vue?raw'
import ButtonSize from '../demos/button/ButtonSize.vue'
import ButtonSizeSource from '../demos/button/ButtonSize.vue?raw'
import ButtonDisabled from '../demos/button/ButtonDisabled.vue'
import ButtonDisabledSource from '../demos/button/ButtonDisabled.vue?raw'
import ButtonLoading from '../demos/button/ButtonLoading.vue'
import ButtonLoadingSource from '../demos/button/ButtonLoading.vue?raw'
import ButtonDanger from '../demos/button/ButtonDanger.vue'
import ButtonDangerSource from '../demos/button/ButtonDanger.vue?raw'
import ButtonBlock from '../demos/button/ButtonBlock.vue'
import ButtonBlockSource from '../demos/button/ButtonBlock.vue?raw'
import ButtonGhost from '../demos/button/ButtonGhost.vue'
import ButtonGhostSource from '../demos/button/ButtonGhost.vue?raw'
import ButtonIcon from '../demos/button/ButtonIcon.vue'
import ButtonIconSource from '../demos/button/ButtonIcon.vue?raw'
</script>

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 ant-design-hmfw 中我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。
- Ghost：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。

## 代码演示

### 按钮类型

按钮有五种类型：主按钮、默认按钮、虚线按钮、文本按钮和链接按钮。

<DemoBlock title="按钮类型" :source="ButtonBasicSource">
  <ButtonBasic />
</DemoBlock>

### 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

<DemoBlock title="按钮尺寸" :source="ButtonSizeSource">
  <ButtonSize />
</DemoBlock>

### 禁用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

<DemoBlock title="禁用状态" :source="ButtonDisabledSource">
  <ButtonDisabled />
</DemoBlock>

### 加载状态

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

<DemoBlock title="加载状态" :source="ButtonLoadingSource">
  <ButtonLoading />
</DemoBlock>

### 危险按钮

危险按钮用于删除/移动/修改权限等危险操作。

<DemoBlock title="危险按钮" :source="ButtonDangerSource">
  <ButtonDanger />
</DemoBlock>

### Block 按钮

`block` 属性将使按钮适合其父宽度。

<DemoBlock title="Block 按钮" :source="ButtonBlockSource">
  <ButtonBlock />
</DemoBlock>

### Ghost 按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

<DemoBlock title="Ghost 按钮" :source="ButtonGhostSource">
  <ButtonGhost />
</DemoBlock>

### 图标按钮

当需要在 Button 内嵌入 Icon 时，可以设置 `icon` 属性。

<DemoBlock title="图标按钮" :source="ButtonIconSource">
  <ButtonIcon />
</DemoBlock>

## API

### Button Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 设置按钮类型 | `'default' \| 'primary' \| 'dashed' \| 'text' \| 'link'` | `'default'` |
| size | 设置按钮大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| htmlType | 设置 button 原生的 type 值 | `'submit' \| 'button' \| 'reset'` | `'button'` |
| loading | 设置按钮载入状态 | `boolean` | `false` |
| disabled | 设置按钮失效状态 | `boolean` | `false` |
| danger | 设置危险按钮 | `boolean` | `false` |
| block | 将按钮宽度调整为其父宽度的选项 | `boolean` | `false` |
| ghost | 幽灵属性，使按钮背景透明 | `boolean` | `false` |
| icon | 设置按钮的图标组件 | `object` | - |

### Button Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时的回调 | `(event: MouseEvent) => void` |

### Button Slots

| 插槽名 | 说明 |
|--------|------|
| default | 按钮内容 |
