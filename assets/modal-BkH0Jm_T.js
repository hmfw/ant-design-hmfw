import{B as u}from"./Button-DSSb4voj.js";import{M as i}from"./index-DW3N15n6.js";import{o as v,A as k,k as f,F as y,n,K as s,R as a,m as p,h as d,E as b,_ as C,J as q,p as h,H as w,l as M}from"./index-GV1C9GBE.js";import"./cls-S9IiI6wd.js";import"./Icon-m2YBXu_N.js";import"./LoadingOutlined-Bntwy_Yd.js";import"./index-AomJsufk.js";import"./CloseOutlined-qamoVtn_.js";import"./ExclamationCircleFilled-CicV3W2p.js";import"./CloseCircleFilled-Csk4-wSr.js";import"./InfoCircleFilled-CVsmfxyA.js";const B=v({__name:"ModalBasic",setup(g){const o=b(!1);function r(){console.log("确认"),o.value=!1}function l(){console.log("取消"),o.value=!1}return(t,e)=>(k(),f(y,null,[n(s(u),{onClick:e[0]||(e[0]=c=>o.value=!0)},{default:a(()=>[...e[2]||(e[2]=[p("打开对话框",-1)])]),_:1}),n(s(i),{open:o.value,"onUpdate:open":e[1]||(e[1]=c=>o.value=c),title:"基础对话框",onOk:r,onCancel:l},{default:a(()=>[...e[3]||(e[3]=[d("p",null,"对话框内容",-1),d("p",null,"对话框内容",-1),d("p",null,"对话框内容",-1)])]),_:1},8,["open"])],64))}}),N=`<template>
  <Button @click="open = true">打开对话框</Button>
  <Modal v-model:open="open" title="基础对话框" @ok="handleOk" @cancel="handleCancel">
    <p>对话框内容</p>
    <p>对话框内容</p>
    <p>对话框内容</p>
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

function handleCancel() {
  console.log('取消')
  open.value = false
}
<\/script>
`,S=v({__name:"ModalCentered",setup(g){const o=b(!1);return(r,l)=>(k(),f(y,null,[n(s(u),{onClick:l[0]||(l[0]=t=>o.value=!0)},{default:a(()=>[...l[4]||(l[4]=[p("居中对话框",-1)])]),_:1}),n(s(i),{open:o.value,"onUpdate:open":l[1]||(l[1]=t=>o.value=t),title:"居中对话框",centered:"",onOk:l[2]||(l[2]=t=>o.value=!1),onCancel:l[3]||(l[3]=t=>o.value=!1)},{default:a(()=>[...l[5]||(l[5]=[d("p",null,"居中展示的对话框内容",-1)])]),_:1},8,["open"])],64))}}),O=`<template>
  <Button @click="open = true">居中对话框</Button>
  <Modal v-model:open="open" title="居中对话框" centered @ok="open = false" @cancel="open = false">
    <p>居中展示的对话框内容</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from 'ant-design-hmfw'

const open = ref(false)
<\/script>
`,P=v({__name:"ModalClassNames",setup(g){const o=b(!1);function r(){console.log("确认"),o.value=!1}return(l,t)=>(k(),f(y,null,[n(s(u),{onClick:t[0]||(t[0]=e=>o.value=!0)},{default:a(()=>[...t[2]||(t[2]=[p(" 打开自定义样式对话框 ",-1)])]),_:1}),n(s(i),{open:o.value,"onUpdate:open":t[1]||(t[1]=e=>o.value=e),title:"细粒度样式控制","class-names":{header:"custom-header",body:"custom-body",footer:"custom-footer"},styles:{header:{background:"#f0f5ff",borderRadius:"8px 8px 0 0"},body:{padding:"32px"},footer:{background:"#fafafa"}},onOk:r},{default:a(()=>[...t[3]||(t[3]=[d("p",null,"通过 classNames 和 styles 可以细粒度控制对话框各部分的样式。",-1),d("p",null,"这个例子演示了如何自定义 header、body 和 footer 的样式。",-1)])]),_:1},8,["open"])],64))}}),T=C(P,[["__scopeId","data-v-125c4de0"]]),V=`<template>
  <Button @click="open = true"> 打开自定义样式对话框 </Button>
  <Modal
    v-model:open="open"
    title="细粒度样式控制"
    :class-names="{
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
`,R=v({__name:"ModalConfirm",setup(g){function o(){i.confirm({title:"确认删除？",content:"该操作不可撤销。",okType:"danger",onOk:()=>{console.log("OK")},onCancel:()=>{console.log("Cancel")}})}function r(){i.info({title:"提示",content:"这是一条信息。"})}function l(){i.success({title:"操作成功",content:"保存完成。"})}function t(){i.error({title:"操作失败",content:"请重试。"})}function e(){i.warning({title:"注意",content:"即将关闭。"})}function c(){i.confirm({title:"提交中？",content:"OK 按钮会显示 loading 直到 Promise resolve。",onOk:()=>new Promise(x=>setTimeout(x,1500))})}return(x,m)=>(k(),f(y,null,[n(s(u),{onClick:o},{default:a(()=>[...m[0]||(m[0]=[p(" 删除项目 ",-1)])]),_:1}),n(s(u),{onClick:r},{default:a(()=>[...m[1]||(m[1]=[p(" 提示信息 ",-1)])]),_:1}),n(s(u),{onClick:l},{default:a(()=>[...m[2]||(m[2]=[p(" 成功 ",-1)])]),_:1}),n(s(u),{onClick:t},{default:a(()=>[...m[3]||(m[3]=[p(" 错误 ",-1)])]),_:1}),n(s(u),{onClick:e},{default:a(()=>[...m[4]||(m[4]=[p(" 警告 ",-1)])]),_:1}),n(s(u),{onClick:c},{default:a(()=>[...m[5]||(m[5]=[p(" 异步确认 ",-1)])]),_:1})],64))}}),E=`<template>
  <Button @click="confirm"> 删除项目 </Button>
  <Button @click="info"> 提示信息 </Button>
  <Button @click="success"> 成功 </Button>
  <Button @click="error"> 错误 </Button>
  <Button @click="warning"> 警告 </Button>
  <Button @click="asyncConfirm"> 异步确认 </Button>
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
`,I=v({__name:"ModalCustomFooter",setup(g){const o=b(!1),r=b(!1),l=b("内容将在两秒后更新");function t(){l.value="正在提交...",r.value=!0,setTimeout(()=>{o.value=!1,r.value=!1},2e3)}return(e,c)=>(k(),f(y,null,[n(s(u),{onClick:c[0]||(c[0]=x=>o.value=!0)},{default:a(()=>[...c[3]||(c[3]=[p("打开对话框",-1)])]),_:1}),n(s(i),{open:o.value,"onUpdate:open":c[2]||(c[2]=x=>o.value=x),title:"自定义页脚","confirm-loading":r.value,onOk:t},{footer:a(()=>[n(s(u),{onClick:c[1]||(c[1]=x=>o.value=!1)},{default:a(()=>[...c[4]||(c[4]=[p("取消",-1)])]),_:1}),n(s(u),{onClick:t},{default:a(()=>[...c[5]||(c[5]=[p("确认",-1)])]),_:1})]),default:a(()=>[d("p",null,q(l.value),1)]),_:1},8,["open","confirm-loading"])],64))}}),$=`<template>
  <Button @click="open = true">打开对话框</Button>
  <Modal v-model:open="open" title="自定义页脚" :confirm-loading="confirmLoading" @ok="handleOk">
    <p>{{ modalText }}</p>
    <template #footer>
      <Button @click="open = false">取消</Button>
      <Button @click="handleOk">确认</Button>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from 'ant-design-hmfw'

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
`,A=v({__name:"ModalCustomIcon",setup(g){function o(){i.info({title:"自定义图标",content:"这个对话框使用了自定义的 VNode 作为图标。",icon:h("span",{style:{fontSize:"24px",color:"#1890ff"}},"🎨")})}function r(){i.confirm({title:"无图标确认",content:"通过设置 icon 为 null 可以隐藏图标。",icon:null})}return(l,t)=>(k(),f(y,null,[n(s(u),{onClick:o},{default:a(()=>[...t[0]||(t[0]=[p(" 使用自定义 VNode 图标 ",-1)])]),_:1}),n(s(u),{onClick:r},{default:a(()=>[...t[1]||(t[1]=[p(" 隐藏图标 ",-1)])]),_:1})],64))}}),F=`<template>
  <Button @click="showCustomIcon"> 使用自定义 VNode 图标 </Button>
  <Button @click="showNoIcon"> 隐藏图标 </Button>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Modal, Button } from 'ant-design-hmfw'

function showCustomIcon() {
  Modal.info({
    title: '自定义图标',
    content: '这个对话框使用了自定义的 VNode 作为图标。',
    icon: h(
      'span',
      {
        style: {
          fontSize: '24px',
          color: '#1890ff',
        },
      },
      '🎨',
    ),
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
`,K=v({__name:"ModalRender",setup(g){const o=b(!1);function r(t){return h("div",{style:{padding:"20px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px"}},[t])}function l(){console.log("确认"),o.value=!1}return(t,e)=>(k(),f(y,null,[n(s(u),{onClick:e[0]||(e[0]=c=>o.value=!0)},{default:a(()=>[...e[2]||(e[2]=[p(" 打开自定义容器 ",-1)])]),_:1}),n(s(i),{open:o.value,"onUpdate:open":e[1]||(e[1]=c=>o.value=c),title:"自定义渲染容器","modal-render":r,onOk:l},{default:a(()=>[...e[3]||(e[3]=[d("p",null,"这是对话框内容。",-1),d("p",null,"外层容器已通过 modalRender 自定义渲染。",-1)])]),_:1},8,["open"])],64))}}),_=`<template>
  <Button @click="open = true"> 打开自定义容器 </Button>
  <Modal v-model:open="open" title="自定义渲染容器" :modal-render="modalRender" @ok="handleOk">
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
    [node],
  )
}

function handleOk() {
  console.log('确认')
  open.value = false
}
<\/script>
`,L={class:"markdown-body"},Z={__name:"modal",setup(g,{expose:o}){return o({frontmatter:{}}),(l,t)=>{const e=w("DemoBlock");return k(),f("div",L,[t[0]||(t[0]=M('<h1 id="modal-" tabindex="-1">Modal 对话框</h1><p>模态对话框。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</li><li>需要一个简洁的确认框询问用户时，可以使用静态方法 <code>Modal.confirm()</code> / <code>Modal.info()</code> / <code>Modal.success()</code> / <code>Modal.error()</code> / <code>Modal.warning()</code>。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>第一个对话框。</p>',7)),n(e,{title:"基础用法",source:s(N)},{default:a(()=>[n(B)]),_:1},8,["source"]),t[1]||(t[1]=d("h3",{id:"-3",tabindex:"-1"},"自定义页脚",-1)),t[2]||(t[2]=d("p",null,"更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。",-1)),n(e,{title:"自定义页脚",source:s($)},{default:a(()=>[n(I)]),_:1},8,["source"]),t[3]||(t[3]=d("h3",{id:"-4",tabindex:"-1"},"居中展示",-1)),t[4]||(t[4]=d("p",null,"垂直居中展示对话框。",-1)),n(e,{title:"居中展示",source:s(O)},{default:a(()=>[n(S)]),_:1},8,["source"]),t[5]||(t[5]=d("h3",{id:"confirm--info--success--error--warning",tabindex:"-1"},"静态方法（confirm / info / success / error / warning）",-1)),t[6]||(t[6]=d("p",null,[p("不需要在模板中维护 open 状态，直接调用即可。"),d("code",null,"onOk"),p(" 返回 Promise 时按钮自动显示 loading。")],-1)),n(e,{title:"静态方法",source:s(E)},{default:a(()=>[n(R)]),_:1},8,["source"]),t[7]||(t[7]=d("h3",{id:"-5",tabindex:"-1"},"细粒度样式控制",-1)),t[8]||(t[8]=d("p",null,[p("使用 "),d("code",null,"classNames"),p(" 和 "),d("code",null,"styles"),p(" 属性可以精确控制对话框各部分的样式。")],-1)),n(e,{title:"classNames 和 styles",source:s(V)},{default:a(()=>[n(T)]),_:1},8,["source"]),t[9]||(t[9]=d("h3",{id:"-6",tabindex:"-1"},"自定义渲染容器",-1)),t[10]||(t[10]=d("p",null,[p("使用 "),d("code",null,"modalRender"),p(" 可以自定义对话框的渲染容器。")],-1)),n(e,{title:"modalRender",source:s(_)},{default:a(()=>[n(K)]),_:1},8,["source"]),t[11]||(t[11]=d("h3",{id:"-7",tabindex:"-1"},"自定义图标",-1)),t[12]||(t[12]=d("p",null,[p("静态方法支持使用 VNode 作为自定义图标，或通过 "),d("code",null,"null"),p(" 隐藏图标。")],-1)),n(e,{title:"自定义图标",source:s(F)},{default:a(()=>[n(A)]),_:1},8,["source"]),t[13]||(t[13]=M(`<h2 id="api" tabindex="-1">API</h2><h3 id="modal-props" tabindex="-1">Modal Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>对话框是否可见</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultOpen</td><td>非受控初始可见状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>标题</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>520</code></td></tr><tr><td>centered</td><td>垂直居中展示</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closable</td><td>是否显示右上角关闭按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>IconComponent</code></td><td><code>CloseOutlined</code></td></tr><tr><td>mask</td><td>是否展示遮罩</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maskClosable</td><td>点击遮罩是否允许关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>keyboard</td><td>是否支持 Esc 键关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>footer</td><td>底部内容；<code>null</code> / <code>false</code> 隐藏</td><td><code>boolean | null | slot</code></td><td><code>true</code></td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td>locale.okText</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td>locale.cancelText</td></tr><tr><td>okType</td><td>确认按钮类型，支持 <code>&#39;danger&#39;</code> 简写</td><td><code>LegacyButtonType</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>okButtonProps</td><td>透传到 OK Button 的 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>透传到 Cancel Button 的 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>confirmLoading</td><td>确定按钮 loading；同时阻止取消/Esc/遮罩关闭</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>整个对话框 body 显示骨架屏</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnHidden</td><td>关闭后销毁 body 内的子元素（5.25+ 命名）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnClose</td><td><code>destroyOnHidden</code> 的兼容别名</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>forceRender</td><td>强制渲染对话框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zIndex</td><td>层级</td><td><code>number</code></td><td><code>1000</code></td></tr><tr><td>wrapClassName</td><td>应用到包裹层 <code>.hmfw-modal-wrap</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>应用到根元素 <code>.hmfw-modal-root</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>focusTriggerAfterClose</td><td>关闭后是否将焦点还给打开前的元素</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>bodyStyle</td><td>body 内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>maskStyle</td><td>mask 内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname">语义化 className</a></td><td><code>{ header?: string; body?: string; footer?: string; mask?: string; wrapper?: string; content?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-style">语义化 style</a></td><td><code>{ header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties; wrapper?: CSSProperties; content?: CSSProperties }</code></td><td>-</td></tr><tr><td>modalRender</td><td>自定义渲染对话框容器</td><td><code>(node: VNode) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="modal-events" tabindex="-1">Modal Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>可见状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>ok</td><td>点击确定按钮</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击遮罩 / 关闭按钮 / 取消按钮 / Esc 时触发</td><td><code>(e?: MouseEvent | KeyboardEvent) =&gt; void</code></td></tr><tr><td>afterClose</td><td>关闭动画结束后触发</td><td><code>() =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>显示/隐藏切换的动画结束后触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="modal-slots" tabindex="-1">Modal Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>对话框内容</td></tr><tr><td>title</td><td>标题</td></tr><tr><td>footer</td><td>底部内容；优先级高于 <code>footer</code> prop</td></tr></tbody></table><h3 id="-8" tabindex="-1">静态方法</h3><blockquote><p><code>Modal.info(config)</code> / <code>Modal.success(config)</code> / <code>Modal.error(config)</code> / <code>Modal.warning(config)</code> / <code>Modal.confirm(config)</code>，均返回 <code>{ destroy, update }</code>。</p></blockquote><p><code>Modal.destroyAll()</code> 关闭所有通过静态方法创建的对话框。</p><h4 id="modalfuncprops" tabindex="-1">ModalFuncProps</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>content</td><td>内容</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标，传 <code>null</code> 隐藏；支持 VNode</td><td><code>IconComponent | VNode | null</code></td><td>按 <code>type</code> 自动选择</td></tr><tr><td>type</td><td>类型；决定默认图标和 <code>okCancel</code> 默认值</td><td><code>&#39;info&#39; | &#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;confirm&#39;</code></td><td><code>&#39;confirm&#39;</code></td></tr><tr><td>okCancel</td><td>是否显示取消按钮（默认仅 <code>confirm</code> 显示）</td><td><code>boolean</code></td><td>-</td></tr><tr><td>okText / cancelText / okType</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>okButtonProps / cancelButtonProps</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>centered / width / mask / maskClosable / keyboard / closable / zIndex</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>className</td><td>应用到 <code>.hmfw-modal-root</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>wrapClassName</td><td>应用到 <code>.hmfw-modal-wrap</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>onOk</td><td>点击 OK；返回 Promise 时按钮 loading 直到 resolve</td><td><code>() =&gt; any | Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>onCancel</td><td>点击 Cancel</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>afterClose</td><td>销毁后回调</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table><hr><h2 id="-classname" tabindex="-1">语义化 className</h2><p>通过 <code>classNames</code> 属性可以对对话框的各个子节点应用自定义 className，支持细粒度样式控制。</p><h3 id="-9" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">ModalClassNames</span> <span class="token punctuation">{</span>
  mask<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 遮罩层</span>
  wrapper<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 容器包裹层</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容容器</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题区域</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容区域</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 底部操作区</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom--classname" tabindex="-1">DOM 结构与默认 className</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 遮罩层 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-mask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.mask 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 容器包裹层 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.wrapper 应用于此 --&gt;</span>

    <span class="token comment">&lt;!-- 内容容器 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.content 应用于此 --&gt;</span>

      <span class="token comment">&lt;!-- 关闭按钮 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

      <span class="token comment">&lt;!-- 标题区域 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.header 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标题文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token comment">&lt;!-- 内容区域 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.body 应用于此 --&gt;</span>
        对话框内容
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token comment">&lt;!-- 底部操作区 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.footer 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>取消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>确定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="-10" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义遮罩和内容容器 --&gt;
  &lt;Modal
    v-model:open=&quot;visible1&quot;
    title=&quot;自定义样式&quot;
    :class-names=&quot;{
      mask: &#39;my-modal-mask&#39;,
      content: &#39;my-modal-content&#39;,
    }&quot;
  &gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/Modal&gt;

  &lt;!-- 自定义头部和底部 --&gt;
  &lt;Modal
    v-model:open=&quot;visible2&quot;
    title=&quot;渐变头部&quot;
    :class-names=&quot;{
      header: &#39;my-modal-header&#39;,
      footer: &#39;my-modal-footer&#39;,
    }&quot;
  &gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/Modal&gt;

  &lt;!-- 自定义 body 区域 --&gt;
  &lt;Modal
    v-model:open=&quot;visible3&quot;
    title=&quot;自定义内容区&quot;
    :class-names=&quot;{
      body: &#39;my-modal-body&#39;,
    }&quot;
  &gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/Modal&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Modal
    v-model:open=&quot;visible4&quot;
    title=&quot;完整自定义&quot;
    :class-names=&quot;{
      mask: &#39;my-mask&#39;,
      wrapper: &#39;my-wrapper&#39;,
      content: &#39;my-content&#39;,
      header: &#39;my-header&#39;,
      body: &#39;my-body&#39;,
      footer: &#39;my-footer&#39;,
    }&quot;
  &gt;
    &lt;p&gt;完全自定义的对话框&lt;/p&gt;
  &lt;/Modal&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import { Modal } from &#39;ant-design-hmfw&#39;

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
&lt;/script&gt;

&lt;style scoped&gt;
:deep(.my-modal-mask) {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

:deep(.my-modal-content) {
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

:deep(.my-modal-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px 16px 0 0;
  padding: 20px 24px;
}

:deep(.my-modal-body) {
  background: #f0f5ff;
  padding: 32px 24px;
  font-size: 16px;
}

:deep(.my-modal-footer) {
  background: #fafafa;
  border-top: 2px solid #e8e8e8;
  padding: 16px 24px;
  border-radius: 0 0 16px 16px;
}
&lt;/style&gt;
</code></pre><hr><h2 id="-style" tabindex="-1">语义化 style</h2><p>通过 <code>styles</code> 属性可以对对话框的各个子节点应用内联样式。</p><h3 id="-11" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">ModalStyles</span> <span class="token punctuation">{</span>
  mask<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 遮罩层</span>
  wrapper<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 容器包裹层</span>
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 内容容器</span>
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 标题区域</span>
  body<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 内容区域</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 底部操作区</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="-12" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制遮罩 --&gt;
  &lt;Modal
    v-model:open=&quot;visible1&quot;
    title=&quot;自定义遮罩&quot;
    :styles=&quot;{
      mask: {
        background: &#39;rgba(0, 0, 0, 0.7)&#39;,
        backdropFilter: &#39;blur(4px)&#39;,
      },
    }&quot;
  &gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/Modal&gt;

  &lt;!-- 自定义内容容器 --&gt;
  &lt;Modal
    v-model:open=&quot;visible2&quot;
    title=&quot;圆角对话框&quot;
    :styles=&quot;{
      content: {
        borderRadius: &#39;16px&#39;,
        boxShadow: &#39;0 8px 32px rgba(0, 0, 0, 0.2)&#39;,
      },
    }&quot;
  &gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/Modal&gt;

  &lt;!-- 自定义头部和底部 --&gt;
  &lt;Modal
    v-model:open=&quot;visible3&quot;
    title=&quot;渐变头部&quot;
    :styles=&quot;{
      header: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        color: &#39;white&#39;,
        padding: &#39;20px 24px&#39;,
      },
      footer: {
        background: &#39;#fafafa&#39;,
        borderTop: &#39;2px solid #e8e8e8&#39;,
      },
    }&quot;
  &gt;
    &lt;p&gt;对话框内容&lt;/p&gt;
  &lt;/Modal&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Modal
    v-model:open=&quot;visible4&quot;
    title=&quot;完整自定义&quot;
    :styles=&quot;{
      mask: { background: &#39;rgba(0, 0, 0, 0.8)&#39; },
      content: { borderRadius: &#39;16px&#39; },
      header: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        color: &#39;white&#39;,
      },
      body: {
        background: &#39;#f0f5ff&#39;,
        padding: &#39;32px 24px&#39;,
        fontSize: &#39;16px&#39;,
      },
      footer: { background: &#39;#fafafa&#39; },
    }&quot;
  &gt;
    &lt;p&gt;完全自定义的对话框&lt;/p&gt;
  &lt;/Modal&gt;
&lt;/template&gt;
</code></pre><h3 id="-13" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>mask</code> / <code>wrapper</code> / <code>content</code> 影响对话框的外层结构，<code>header</code> / <code>body</code> / <code>footer</code> 影响内容区域</li><li>当同时设置 <code>bodyStyle</code> prop 和 <code>styles.body</code> 时，两者会合并（<code>styles.body</code> 优先）</li><li>当同时设置 <code>maskStyle</code> prop 和 <code>styles.mask</code> 时，两者会合并（<code>styles.mask</code> 优先）</li><li><code>wrapper</code> 是对话框的定位容器，修改其样式可能影响居中效果，建议谨慎使用</li><li>静态方法（<code>Modal.confirm</code> 等）创建的对话框暂不支持 <code>classNames</code> / <code>styles</code>，可使用 <code>className</code> / <code>wrapClassName</code> 配合全局样式</li></ul>`,30))])}}};export{Z as default};
