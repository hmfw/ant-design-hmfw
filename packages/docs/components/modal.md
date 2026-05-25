# Modal 对话框

模态对话框。

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作

## 代码演示

<script setup>
import ModalBasic from '../demos/modal/ModalBasic.vue'
import ModalBasicSource from '../demos/modal/ModalBasic.vue?raw'
import ModalCustomFooter from '../demos/modal/ModalCustomFooter.vue'
import ModalCustomFooterSource from '../demos/modal/ModalCustomFooter.vue?raw'
import ModalCentered from '../demos/modal/ModalCentered.vue'
import ModalCenteredSource from '../demos/modal/ModalCentered.vue?raw'
</script>

### 基础用法

第一个对话框。

<DemoBlock title="基础用法" :source="ModalBasicSource">
  <ModalBasic />
</DemoBlock>

### 自定义页脚

更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。

<DemoBlock title="自定义页脚" :source="ModalCustomFooterSource">
  <ModalCustomFooter />
</DemoBlock>

### 居中展示

垂直居中展示对话框。

<DemoBlock title="居中展示" :source="ModalCenteredSource">
  <ModalCentered />
</DemoBlock>

## API

### Modal Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open (v-model) | 对话框是否可见 | `boolean` | `false` |
| title | 标题 | `string \| slot` | - |
| width | 宽度 | `number \| string` | `520` |
| centered | 垂直居中展示 Modal | `boolean` | `false` |
| closable | 是否显示右上角的关闭按钮 | `boolean` | `true` |
| mask | 是否展示遮罩 | `boolean` | `true` |
| maskClosable | 点击蒙层是否允许关闭 | `boolean` | `true` |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 null | `string \| slot \| null` | - |
| okText | 确认按钮文字 | `string` | `'确定'` |
| cancelText | 取消按钮文字 | `string` | `'取消'` |
| okType | 确认按钮类型 | `string` | `'primary'` |
| confirmLoading | 确定按钮 loading | `boolean` | `false` |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | `boolean` | `false` |

### Modal Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:open | 可见状态变化时的回调 | `(open: boolean) => void` |
| ok | 点击确定回调 | `(e: MouseEvent) => void` |
| cancel | 点击遮罩层或右上角叉或取消按钮的回调 | `(e: MouseEvent) => void` |
| afterClose | Modal 完全关闭后的回调 | `() => void` |

### Modal Slots

| 名称 | 说明 |
| --- | --- |
| default | 对话框内容 |
| title | 标题 |
| footer | 底部内容 |
