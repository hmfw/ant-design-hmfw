import{M as b}from"./Modal-D0OSFbA4.js";import{k as v,w as p,g as f,F as g,d as e,j as a,G as u,M as s,z as i,E as k,B as M,h as x}from"./index-BNHhPN23.js";import"./cls-S9IiI6wd.js";const C=v({__name:"ModalBasic",setup(c){const o=i(!1);function r(){console.log("确认"),o.value=!1}function d(){console.log("取消"),o.value=!1}return(t,n)=>(p(),f(g,null,[e("button",{onClick:n[0]||(n[0]=l=>o.value=!0)},"打开对话框"),a(u(b),{open:o.value,"onUpdate:open":n[1]||(n[1]=l=>o.value=l),title:"基础对话框",onOk:r,onCancel:d},{default:s(()=>[...n[2]||(n[2]=[e("p",null,"对话框内容",-1),e("p",null,"对话框内容",-1),e("p",null,"对话框内容",-1)])]),_:1},8,["open"])],64))}}),h=`<template>
  <button @click="open = true">打开对话框</button>
  <Modal
    v-model:open="open"
    title="基础对话框"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <p>对话框内容</p>
    <p>对话框内容</p>
    <p>对话框内容</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal } from 'ant-design-hmfw'

const open = ref(false)

function handleOk() {
  console.log('确认')
  open.value = false
}

function handleCancel() {
  console.log('取消')
  open.value = false
}
<\/script>
`,y=v({__name:"ModalCentered",setup(c){const o=i(!1);return(r,d)=>(p(),f(g,null,[e("button",{onClick:d[0]||(d[0]=t=>o.value=!0)},"居中对话框"),a(u(b),{open:o.value,"onUpdate:open":d[1]||(d[1]=t=>o.value=t),title:"居中对话框",centered:"",onOk:d[2]||(d[2]=t=>o.value=!1),onCancel:d[3]||(d[3]=t=>o.value=!1)},{default:s(()=>[...d[4]||(d[4]=[e("p",null,"居中展示的对话框内容",-1)])]),_:1},8,["open"])],64))}}),O=`<template>
  <button @click="open = true">居中对话框</button>
  <Modal
    v-model:open="open"
    title="居中对话框"
    centered
    @ok="open = false"
    @cancel="open = false"
  >
    <p>居中展示的对话框内容</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal } from 'ant-design-hmfw'

const open = ref(false)
<\/script>
`,T=v({__name:"ModalCustomFooter",setup(c){const o=i(!1),r=i(!1),d=i("内容将在两秒后更新");function t(){d.value="正在提交...",r.value=!0,setTimeout(()=>{o.value=!1,r.value=!1},2e3)}return(n,l)=>(p(),f(g,null,[e("button",{onClick:l[0]||(l[0]=m=>o.value=!0)},"打开对话框"),a(u(b),{open:o.value,"onUpdate:open":l[2]||(l[2]=m=>o.value=m),title:"自定义页脚","confirm-loading":r.value,onOk:t},{footer:s(()=>[e("button",{onClick:l[1]||(l[1]=m=>o.value=!1)},"取消"),e("button",{onClick:t},"确认")]),default:s(()=>[e("p",null,k(d.value),1)]),_:1},8,["open","confirm-loading"])],64))}}),$=`<template>
  <button @click="open = true">打开对话框</button>
  <Modal
    v-model:open="open"
    title="自定义页脚"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
  >
    <p>{{ modalText }}</p>
    <template #footer>
      <button @click="open = false">取消</button>
      <button @click="handleOk">确认</button>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal } from 'ant-design-hmfw'

const open = ref(false)
const confirmLoading = ref(false)
const modalText = ref('内容将在两秒后更新')

function handleOk() {
  modalText.value = '正在提交...'
  confirmLoading.value = true
  setTimeout(() => {
    open.value = false
    confirmLoading.value = false
  }, 2000)
}
<\/script>
`,B={class:"markdown-body"},E={__name:"modal",setup(c,{expose:o}){return o({frontmatter:{}}),(d,t)=>{const n=M("DemoBlock");return p(),f("div",B,[t[0]||(t[0]=e("h1",{id:"modal-",tabindex:"-1"},"Modal 对话框",-1)),t[1]||(t[1]=e("p",null,"模态对话框。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"第一个对话框。",-1)),a(n,{title:"基础用法",source:u(h)},{default:s(()=>[a(C)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"自定义页脚",-1)),t[8]||(t[8]=e("p",null,"更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。",-1)),a(n,{title:"自定义页脚",source:u($)},{default:s(()=>[a(T)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"居中展示",-1)),t[10]||(t[10]=e("p",null,"垂直居中展示对话框。",-1)),a(n,{title:"居中展示",source:u(O)},{default:s(()=>[a(y)]),_:1},8,["source"]),t[11]||(t[11]=x('<h2 id="api" tabindex="-1">API</h2><h3 id="modal-props" tabindex="-1">Modal Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>对话框是否可见</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>标题</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>520</code></td></tr><tr><td>centered</td><td>垂直居中展示 Modal</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closable</td><td>是否显示右上角的关闭按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>mask</td><td>是否展示遮罩</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maskClosable</td><td>点击蒙层是否允许关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>footer</td><td>底部内容，当不需要默认底部按钮时，可以设为 null</td><td><code>string | slot | null</code></td><td>-</td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td><code>&#39;确定&#39;</code></td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td><code>&#39;取消&#39;</code></td></tr><tr><td>okType</td><td>确认按钮类型</td><td><code>string</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>confirmLoading</td><td>确定按钮 loading</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnClose</td><td>关闭时销毁 Modal 里的子元素</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="modal-events" tabindex="-1">Modal Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>可见状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>ok</td><td>点击确定回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击遮罩层或右上角叉或取消按钮的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>afterClose</td><td>Modal 完全关闭后的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="modal-slots" tabindex="-1">Modal Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>对话框内容</td></tr><tr><td>title</td><td>标题</td></tr><tr><td>footer</td><td>底部内容</td></tr></tbody></table>',7))])}}};export{E as default};
