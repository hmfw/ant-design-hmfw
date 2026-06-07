import{M as u}from"./index-Bi5xhape.js";import{n as v,z as m,j as g,F as C,g as e,m as n,J as a,Q as l,D as k,l as s,_ as h,I as B,o as x,G as w,k as M}from"./index-i0jnWELi.js";import{B as f}from"./Button-BxE2sJbo.js";import"./icons-DkTSuFEr.js";import"./index-fkmUQj8S.js";import"./cls-S9IiI6wd.js";import"./Icon-D9pw0Su_.js";const N=v({__name:"ModalBasic",setup(b){const o=k(!1);function c(){console.log("确认"),o.value=!1}function r(){console.log("取消"),o.value=!1}return(t,d)=>(m(),g(C,null,[e("button",{onClick:d[0]||(d[0]=i=>o.value=!0)},"打开对话框"),n(a(u),{open:o.value,"onUpdate:open":d[1]||(d[1]=i=>o.value=i),title:"基础对话框",onOk:c,onCancel:r},{default:l(()=>[...d[2]||(d[2]=[e("p",null,"对话框内容",-1),e("p",null,"对话框内容",-1),e("p",null,"对话框内容",-1)])]),_:1},8,["open"])],64))}}),O=`<template>
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
`,S=v({__name:"ModalCentered",setup(b){const o=k(!1);return(c,r)=>(m(),g(C,null,[e("button",{onClick:r[0]||(r[0]=t=>o.value=!0)},"居中对话框"),n(a(u),{open:o.value,"onUpdate:open":r[1]||(r[1]=t=>o.value=t),title:"居中对话框",centered:"",onOk:r[2]||(r[2]=t=>o.value=!1),onCancel:r[3]||(r[3]=t=>o.value=!1)},{default:l(()=>[...r[4]||(r[4]=[e("p",null,"居中展示的对话框内容",-1)])]),_:1},8,["open"])],64))}}),P=`<template>
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
`,V=v({__name:"ModalClassNames",setup(b){const o=k(!1);function c(){console.log("确认"),o.value=!1}return(r,t)=>(m(),g(C,null,[n(a(f),{onClick:t[0]||(t[0]=d=>o.value=!0)},{default:l(()=>[...t[2]||(t[2]=[s("打开自定义样式对话框",-1)])]),_:1}),n(a(u),{open:o.value,"onUpdate:open":t[1]||(t[1]=d=>o.value=d),title:"细粒度样式控制",classNames:{header:"custom-header",body:"custom-body",footer:"custom-footer"},styles:{header:{background:"#f0f5ff",borderRadius:"8px 8px 0 0"},body:{padding:"32px"},footer:{background:"#fafafa"}},onOk:c},{default:l(()=>[...t[3]||(t[3]=[e("p",null,"通过 classNames 和 styles 可以细粒度控制对话框各部分的样式。",-1),e("p",null,"这个例子演示了如何自定义 header、body 和 footer 的样式。",-1)])]),_:1},8,["open"])],64))}}),T=h(V,[["__scopeId","data-v-b0aa514a"]]),I=`<template>
  <Button @click="open = true">打开自定义样式对话框</Button>
  <Modal
    v-model:open="open"
    title="细粒度样式控制"
    :classNames="{
      header: 'custom-header',
      body: 'custom-body',
      footer: 'custom-footer',
    }"
    :styles="{
      header: { background: '#f0f5ff', borderRadius: '8px 8px 0 0' },
      body: { padding: '32px' },
      footer: { background: '#fafafa' },
    }"
    @ok="handleOk"
  >
    <p>通过 classNames 和 styles 可以细粒度控制对话框各部分的样式。</p>
    <p>这个例子演示了如何自定义 header、body 和 footer 的样式。</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from 'ant-design-hmfw'

const open = ref(false)

function handleOk() {
  console.log('确认')
  open.value = false
}
<\/script>

<style scoped>
:deep(.custom-header) {
  font-weight: bold;
}

:deep(.custom-body) {
  line-height: 1.8;
}

:deep(.custom-footer) {
  padding: 16px 24px;
}
</style>

`,R=v({__name:"ModalConfirm",setup(b){function o(){u.confirm({title:"确认删除？",content:"该操作不可撤销。",okType:"danger",onOk:()=>{console.log("OK")},onCancel:()=>{console.log("Cancel")}})}function c(){u.info({title:"提示",content:"这是一条信息。"})}function r(){u.success({title:"操作成功",content:"保存完成。"})}function t(){u.error({title:"操作失败",content:"请重试。"})}function d(){u.warning({title:"注意",content:"即将关闭。"})}function i(){u.confirm({title:"提交中？",content:"OK 按钮会显示 loading 直到 Promise resolve。",onOk:()=>new Promise(y=>setTimeout(y,1500))})}return(y,p)=>(m(),g(C,null,[n(a(f),{onClick:o},{default:l(()=>[...p[0]||(p[0]=[s("删除项目",-1)])]),_:1}),n(a(f),{onClick:c},{default:l(()=>[...p[1]||(p[1]=[s("提示信息",-1)])]),_:1}),n(a(f),{onClick:r},{default:l(()=>[...p[2]||(p[2]=[s("成功",-1)])]),_:1}),n(a(f),{onClick:t},{default:l(()=>[...p[3]||(p[3]=[s("错误",-1)])]),_:1}),n(a(f),{onClick:d},{default:l(()=>[...p[4]||(p[4]=[s("警告",-1)])]),_:1}),n(a(f),{onClick:i},{default:l(()=>[...p[5]||(p[5]=[s("异步确认",-1)])]),_:1})],64))}}),$=`<template>
  <Button @click="confirm">删除项目</Button>
  <Button @click="info">提示信息</Button>
  <Button @click="success">成功</Button>
  <Button @click="error">错误</Button>
  <Button @click="warning">警告</Button>
  <Button @click="asyncConfirm">异步确认</Button>
</template>

<script setup lang="ts">
import { Modal, Button } from 'ant-design-hmfw'

function confirm() {
  Modal.confirm({
    title: '确认删除？',
    content: '该操作不可撤销。',
    okType: 'danger',
    onOk: () => {
      console.log('OK')
    },
    onCancel: () => {
      console.log('Cancel')
    },
  })
}

function info() {
  Modal.info({ title: '提示', content: '这是一条信息。' })
}

function success() {
  Modal.success({ title: '操作成功', content: '保存完成。' })
}

function error() {
  Modal.error({ title: '操作失败', content: '请重试。' })
}

function warning() {
  Modal.warning({ title: '注意', content: '即将关闭。' })
}

function asyncConfirm() {
  Modal.confirm({
    title: '提交中？',
    content: 'OK 按钮会显示 loading 直到 Promise resolve。',
    onOk: () => new Promise<void>((resolve) => setTimeout(resolve, 1500)),
  })
}
<\/script>
`,_=v({__name:"ModalCustomFooter",setup(b){const o=k(!1),c=k(!1),r=k("内容将在两秒后更新");function t(){r.value="正在提交...",c.value=!0,setTimeout(()=>{o.value=!1,c.value=!1},2e3)}return(d,i)=>(m(),g(C,null,[e("button",{onClick:i[0]||(i[0]=y=>o.value=!0)},"打开对话框"),n(a(u),{open:o.value,"onUpdate:open":i[2]||(i[2]=y=>o.value=y),title:"自定义页脚","confirm-loading":c.value,onOk:t},{footer:l(()=>[e("button",{onClick:i[1]||(i[1]=y=>o.value=!1)},"取消"),e("button",{onClick:t},"确认")]),default:l(()=>[e("p",null,B(r.value),1)]),_:1},8,["open","confirm-loading"])],64))}}),E=`<template>
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
`,K=v({__name:"ModalCustomIcon",setup(b){function o(){u.info({title:"自定义图标",content:"这个对话框使用了自定义的 VNode 作为图标。",icon:x("span",{style:{fontSize:"24px",color:"#1890ff"}},"🎨")})}function c(){u.confirm({title:"无图标确认",content:"通过设置 icon 为 null 可以隐藏图标。",icon:null})}return(r,t)=>(m(),g(C,null,[n(a(f),{onClick:o},{default:l(()=>[...t[0]||(t[0]=[s("使用自定义 VNode 图标",-1)])]),_:1}),n(a(f),{onClick:c},{default:l(()=>[...t[1]||(t[1]=[s("隐藏图标",-1)])]),_:1})],64))}}),L=`<template>
  <Button @click="showCustomIcon">使用自定义 VNode 图标</Button>
  <Button @click="showNoIcon">隐藏图标</Button>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Modal, Button } from 'ant-design-hmfw'

function showCustomIcon() {
  Modal.info({
    title: '自定义图标',
    content: '这个对话框使用了自定义的 VNode 作为图标。',
    icon: h('span', {
      style: {
        fontSize: '24px',
        color: '#1890ff',
      },
    }, '🎨'),
  })
}

function showNoIcon() {
  Modal.confirm({
    title: '无图标确认',
    content: '通过设置 icon 为 null 可以隐藏图标。',
    icon: null,
  })
}
<\/script>
`,z=v({__name:"ModalRender",setup(b){const o=k(!1);function c(t){return x("div",{style:{padding:"20px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px"}},[t])}function r(){console.log("确认"),o.value=!1}return(t,d)=>(m(),g(C,null,[n(a(f),{onClick:d[0]||(d[0]=i=>o.value=!0)},{default:l(()=>[...d[2]||(d[2]=[s("打开自定义容器",-1)])]),_:1}),n(a(u),{open:o.value,"onUpdate:open":d[1]||(d[1]=i=>o.value=i),title:"自定义渲染容器","modal-render":c,onOk:r},{default:l(()=>[...d[3]||(d[3]=[e("p",null,"这是对话框内容。",-1),e("p",null,"外层容器已通过 modalRender 自定义渲染。",-1)])]),_:1},8,["open"])],64))}}),F=`<template>
  <Button @click="open = true">打开自定义容器</Button>
  <Modal
    v-model:open="open"
    title="自定义渲染容器"
    :modal-render="modalRender"
    @ok="handleOk"
  >
    <p>这是对话框内容。</p>
    <p>外层容器已通过 modalRender 自定义渲染。</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref, h, type VNode } from 'vue'
import { Modal, Button } from 'ant-design-hmfw'

const open = ref(false)

function modalRender(node: VNode): VNode {
  // 在对话框外包裹一个自定义容器
  return h(
    'div',
    {
      style: {
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
      },
    },
    [node]
  )
}

function handleOk() {
  console.log('确认')
  open.value = false
}
<\/script>

`,U={class:"markdown-body"},Q={__name:"modal",setup(b,{expose:o}){return o({frontmatter:{}}),(r,t)=>{const d=w("DemoBlock");return m(),g("div",U,[t[0]||(t[0]=M('<h1 id="modal-" tabindex="-1">Modal 对话框</h1><p>模态对话框。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</li><li>需要一个简洁的确认框询问用户时，可以使用静态方法 <code>Modal.confirm()</code> / <code>Modal.info()</code> / <code>Modal.success()</code> / <code>Modal.error()</code> / <code>Modal.warning()</code>。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>第一个对话框。</p>',7)),n(d,{title:"基础用法",source:a(O)},{default:l(()=>[n(N)]),_:1},8,["source"]),t[1]||(t[1]=e("h3",{id:"-3",tabindex:"-1"},"自定义页脚",-1)),t[2]||(t[2]=e("p",null,"更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。",-1)),n(d,{title:"自定义页脚",source:a(E)},{default:l(()=>[n(_)]),_:1},8,["source"]),t[3]||(t[3]=e("h3",{id:"-4",tabindex:"-1"},"居中展示",-1)),t[4]||(t[4]=e("p",null,"垂直居中展示对话框。",-1)),n(d,{title:"居中展示",source:a(P)},{default:l(()=>[n(S)]),_:1},8,["source"]),t[5]||(t[5]=e("h3",{id:"confirm--info--success--error--warning",tabindex:"-1"},"静态方法（confirm / info / success / error / warning）",-1)),t[6]||(t[6]=e("p",null,[s("不需要在模板中维护 open 状态，直接调用即可。"),e("code",null,"onOk"),s(" 返回 Promise 时按钮自动显示 loading。")],-1)),n(d,{title:"静态方法",source:a($)},{default:l(()=>[n(R)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-5",tabindex:"-1"},"细粒度样式控制",-1)),t[8]||(t[8]=e("p",null,[s("使用 "),e("code",null,"classNames"),s(" 和 "),e("code",null,"styles"),s(" 属性可以精确控制对话框各部分的样式。")],-1)),n(d,{title:"classNames 和 styles",source:a(I)},{default:l(()=>[n(T)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-6",tabindex:"-1"},"自定义渲染容器",-1)),t[10]||(t[10]=e("p",null,[s("使用 "),e("code",null,"modalRender"),s(" 可以自定义对话框的渲染容器。")],-1)),n(d,{title:"modalRender",source:a(F)},{default:l(()=>[n(z)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-7",tabindex:"-1"},"自定义图标",-1)),t[12]||(t[12]=e("p",null,[s("静态方法支持使用 VNode 作为自定义图标，或通过 "),e("code",null,"null"),s(" 隐藏图标。")],-1)),n(d,{title:"自定义图标",source:a(L)},{default:l(()=>[n(K)]),_:1},8,["source"]),t[13]||(t[13]=M('<h2 id="api" tabindex="-1">API</h2><h3 id="modal-props" tabindex="-1">Modal Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>对话框是否可见</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultOpen</td><td>非受控初始可见状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>标题</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>520</code></td></tr><tr><td>centered</td><td>垂直居中展示</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closable</td><td>是否显示右上角关闭按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>IconComponent</code></td><td><code>CloseOutlined</code></td></tr><tr><td>mask</td><td>是否展示遮罩</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maskClosable</td><td>点击遮罩是否允许关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>keyboard</td><td>是否支持 Esc 键关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>footer</td><td>底部内容；<code>null</code> / <code>false</code> 隐藏</td><td><code>boolean | null | slot</code></td><td><code>true</code></td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td>locale.okText</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td>locale.cancelText</td></tr><tr><td>okType</td><td>确认按钮类型，支持 <code>&#39;danger&#39;</code> 简写</td><td><code>LegacyButtonType</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>okButtonProps</td><td>透传到 OK Button 的 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>透传到 Cancel Button 的 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>confirmLoading</td><td>确定按钮 loading；同时阻止取消/Esc/遮罩关闭</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>整个对话框 body 显示骨架屏</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnHidden</td><td>关闭后销毁 body 内的子元素（5.25+ 命名）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnClose</td><td><code>destroyOnHidden</code> 的兼容别名</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>forceRender</td><td>强制渲染对话框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zIndex</td><td>层级</td><td><code>number</code></td><td><code>1000</code></td></tr><tr><td>wrapClassName</td><td>应用到包裹层 <code>.hmfw-modal-wrap</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>应用到根元素 <code>.hmfw-modal-root</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>focusTriggerAfterClose</td><td>关闭后是否将焦点还给打开前的元素</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>bodyStyle</td><td>body 内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>maskStyle</td><td>mask 内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>细粒度控制各部分的 class</td><td><code>{ header?: string; body?: string; footer?: string; mask?: string; wrapper?: string; content?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>细粒度控制各部分的 style</td><td><code>{ header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties; wrapper?: CSSProperties; content?: CSSProperties }</code></td><td>-</td></tr><tr><td>modalRender</td><td>自定义渲染对话框容器</td><td><code>(node: VNode) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="modal-events" tabindex="-1">Modal Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>可见状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>ok</td><td>点击确定按钮</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击遮罩 / 关闭按钮 / 取消按钮 / Esc 时触发</td><td><code>(e?: MouseEvent | KeyboardEvent) =&gt; void</code></td></tr><tr><td>afterClose</td><td>关闭动画结束后触发</td><td><code>() =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>显示/隐藏切换的动画结束后触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="modal-slots" tabindex="-1">Modal Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>对话框内容</td></tr><tr><td>title</td><td>标题</td></tr><tr><td>footer</td><td>底部内容；优先级高于 <code>footer</code> prop</td></tr></tbody></table><h3 id="-8" tabindex="-1">静态方法</h3><blockquote><p><code>Modal.info(config)</code> / <code>Modal.success(config)</code> / <code>Modal.error(config)</code> / <code>Modal.warning(config)</code> / <code>Modal.confirm(config)</code>，均返回 <code>{ destroy, update }</code>。</p></blockquote><p><code>Modal.destroyAll()</code> 关闭所有通过静态方法创建的对话框。</p><h4 id="modalfuncprops" tabindex="-1">ModalFuncProps</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>content</td><td>内容</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标，传 <code>null</code> 隐藏；支持 VNode</td><td><code>IconComponent | VNode | null</code></td><td>按 <code>type</code> 自动选择</td></tr><tr><td>type</td><td>类型；决定默认图标和 <code>okCancel</code> 默认值</td><td><code>&#39;info&#39; | &#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;confirm&#39;</code></td><td><code>&#39;confirm&#39;</code></td></tr><tr><td>okCancel</td><td>是否显示取消按钮（默认仅 <code>confirm</code> 显示）</td><td><code>boolean</code></td><td>-</td></tr><tr><td>okText / cancelText / okType</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>okButtonProps / cancelButtonProps</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>centered / width / mask / maskClosable / keyboard / closable / zIndex</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>className</td><td>应用到 <code>.hmfw-modal-root</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>wrapClassName</td><td>应用到 <code>.hmfw-modal-wrap</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>onOk</td><td>点击 OK；返回 Promise 时按钮 loading 直到 resolve</td><td><code>() =&gt; any | Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>onCancel</td><td>点击 Cancel</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>afterClose</td><td>销毁后回调</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table>',12))])}}};export{Q as default};
