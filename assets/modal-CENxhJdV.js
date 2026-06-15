import{B as u}from"./Button-Cw7qEaQa.js";import{M as p}from"./index-zMSnOzqV.js";import{o as v,A as m,k as g,F as C,n as o,K as l,R as n,m as s,h as r,E as b,_ as B,J as w,p as x,H as N,l as M}from"./index-C7r7ERgN.js";import"./cls-S9IiI6wd.js";import"./Icon-Bn-1ylNX.js";import"./LoadingOutlined-CFTLq47r.js";import"./index-Ds52g3hA.js";import"./CloseOutlined-BOy0Oguu.js";import"./ExclamationCircleFilled-BDZvHzJ_.js";import"./CloseCircleFilled-D8GUAtQ3.js";import"./InfoCircleFilled-y_F_mdmS.js";const O=v({__name:"ModalBasic",setup(k){const d=b(!1);function i(){console.log("确认"),d.value=!1}function a(){console.log("取消"),d.value=!1}return(t,e)=>(m(),g(C,null,[o(l(u),{onClick:e[0]||(e[0]=c=>d.value=!0)},{default:n(()=>[...e[2]||(e[2]=[s("打开对话框",-1)])]),_:1}),o(l(p),{open:d.value,"onUpdate:open":e[1]||(e[1]=c=>d.value=c),title:"基础对话框",onOk:i,onCancel:a},{default:n(()=>[...e[3]||(e[3]=[r("p",null,"对话框内容",-1),r("p",null,"对话框内容",-1),r("p",null,"对话框内容",-1)])]),_:1},8,["open"])],64))}}),h=`<template>
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
`,S=v({__name:"ModalCentered",setup(k){const d=b(!1);return(i,a)=>(m(),g(C,null,[o(l(u),{onClick:a[0]||(a[0]=t=>d.value=!0)},{default:n(()=>[...a[4]||(a[4]=[s("居中对话框",-1)])]),_:1}),o(l(p),{open:d.value,"onUpdate:open":a[1]||(a[1]=t=>d.value=t),title:"居中对话框",centered:"",onOk:a[2]||(a[2]=t=>d.value=!1),onCancel:a[3]||(a[3]=t=>d.value=!1)},{default:n(()=>[...a[5]||(a[5]=[r("p",null,"居中展示的对话框内容",-1)])]),_:1},8,["open"])],64))}}),P=`<template>
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
`,V=v({__name:"ModalClassNames",setup(k){const d=b(!1);function i(){console.log("确认"),d.value=!1}return(a,t)=>(m(),g(C,null,[o(l(u),{onClick:t[0]||(t[0]=e=>d.value=!0)},{default:n(()=>[...t[2]||(t[2]=[s(" 打开自定义样式对话框 ",-1)])]),_:1}),o(l(p),{open:d.value,"onUpdate:open":t[1]||(t[1]=e=>d.value=e),title:"细粒度样式控制","class-names":{header:"custom-header",body:"custom-body",footer:"custom-footer"},styles:{header:{background:"#f0f5ff",borderRadius:"8px 8px 0 0"},body:{padding:"32px"},footer:{background:"#fafafa"}},onOk:i},{default:n(()=>[...t[3]||(t[3]=[r("p",null,"通过 classNames 和 styles 可以细粒度控制对话框各部分的样式。",-1),r("p",null,"这个例子演示了如何自定义 header、body 和 footer 的样式。",-1)])]),_:1},8,["open"])],64))}}),T=B(V,[["__scopeId","data-v-125c4de0"]]),R=`<template>
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
`,I=v({__name:"ModalConfirm",setup(k){function d(){p.confirm({title:"确认删除？",content:"该操作不可撤销。",okType:"danger",onOk:()=>{console.log("OK")},onCancel:()=>{console.log("Cancel")}})}function i(){p.info({title:"提示",content:"这是一条信息。"})}function a(){p.success({title:"操作成功",content:"保存完成。"})}function t(){p.error({title:"操作失败",content:"请重试。"})}function e(){p.warning({title:"注意",content:"即将关闭。"})}function c(){p.confirm({title:"提交中？",content:"OK 按钮会显示 loading 直到 Promise resolve。",onOk:()=>new Promise(y=>setTimeout(y,1500))})}return(y,f)=>(m(),g(C,null,[o(l(u),{onClick:d},{default:n(()=>[...f[0]||(f[0]=[s(" 删除项目 ",-1)])]),_:1}),o(l(u),{onClick:i},{default:n(()=>[...f[1]||(f[1]=[s(" 提示信息 ",-1)])]),_:1}),o(l(u),{onClick:a},{default:n(()=>[...f[2]||(f[2]=[s(" 成功 ",-1)])]),_:1}),o(l(u),{onClick:t},{default:n(()=>[...f[3]||(f[3]=[s(" 错误 ",-1)])]),_:1}),o(l(u),{onClick:e},{default:n(()=>[...f[4]||(f[4]=[s(" 警告 ",-1)])]),_:1}),o(l(u),{onClick:c},{default:n(()=>[...f[5]||(f[5]=[s(" 异步确认 ",-1)])]),_:1})],64))}}),$=`<template>
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
`,E=v({__name:"ModalCustomFooter",setup(k){const d=b(!1),i=b(!1),a=b("内容将在两秒后更新");function t(){a.value="正在提交...",i.value=!0,setTimeout(()=>{d.value=!1,i.value=!1},2e3)}return(e,c)=>(m(),g(C,null,[o(l(u),{onClick:c[0]||(c[0]=y=>d.value=!0)},{default:n(()=>[...c[3]||(c[3]=[s("打开对话框",-1)])]),_:1}),o(l(p),{open:d.value,"onUpdate:open":c[2]||(c[2]=y=>d.value=y),title:"自定义页脚","confirm-loading":i.value,onOk:t},{footer:n(()=>[o(l(u),{onClick:c[1]||(c[1]=y=>d.value=!1)},{default:n(()=>[...c[4]||(c[4]=[s("取消",-1)])]),_:1}),o(l(u),{onClick:t},{default:n(()=>[...c[5]||(c[5]=[s("确认",-1)])]),_:1})]),default:n(()=>[r("p",null,w(a.value),1)]),_:1},8,["open","confirm-loading"])],64))}}),K=`<template>
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
`,_=v({__name:"ModalCustomIcon",setup(k){function d(){p.info({title:"自定义图标",content:"这个对话框使用了自定义的 VNode 作为图标。",icon:x("span",{style:{fontSize:"24px",color:"#1890ff"}},"🎨")})}function i(){p.confirm({title:"无图标确认",content:"通过设置 icon 为 null 可以隐藏图标。",icon:null})}return(a,t)=>(m(),g(C,null,[o(l(u),{onClick:d},{default:n(()=>[...t[0]||(t[0]=[s(" 使用自定义 VNode 图标 ",-1)])]),_:1}),o(l(u),{onClick:i},{default:n(()=>[...t[1]||(t[1]=[s(" 隐藏图标 ",-1)])]),_:1})],64))}}),L=`<template>
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
`,F=v({__name:"ModalRender",setup(k){const d=b(!1);function i(t){return x("div",{style:{padding:"20px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px"}},[t])}function a(){console.log("确认"),d.value=!1}return(t,e)=>(m(),g(C,null,[o(l(u),{onClick:e[0]||(e[0]=c=>d.value=!0)},{default:n(()=>[...e[2]||(e[2]=[s(" 打开自定义容器 ",-1)])]),_:1}),o(l(p),{open:d.value,"onUpdate:open":e[1]||(e[1]=c=>d.value=c),title:"自定义渲染容器","modal-render":i,onOk:a},{default:n(()=>[...e[3]||(e[3]=[r("p",null,"这是对话框内容。",-1),r("p",null,"外层容器已通过 modalRender 自定义渲染。",-1)])]),_:1},8,["open"])],64))}}),U=`<template>
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
`,z={class:"markdown-body"},Z={__name:"modal",setup(k,{expose:d}){return d({frontmatter:{}}),(a,t)=>{const e=N("DemoBlock");return m(),g("div",z,[t[0]||(t[0]=M('<h1 id="modal-" tabindex="-1">Modal 对话框</h1><p>模态对话框。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</li><li>需要一个简洁的确认框询问用户时，可以使用静态方法 <code>Modal.confirm()</code> / <code>Modal.info()</code> / <code>Modal.success()</code> / <code>Modal.error()</code> / <code>Modal.warning()</code>。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>第一个对话框。</p>',7)),o(e,{title:"基础用法",source:l(h)},{default:n(()=>[o(O)]),_:1},8,["source"]),t[1]||(t[1]=r("h3",{id:"-3",tabindex:"-1"},"自定义页脚",-1)),t[2]||(t[2]=r("p",null,"更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。",-1)),o(e,{title:"自定义页脚",source:l(K)},{default:n(()=>[o(E)]),_:1},8,["source"]),t[3]||(t[3]=r("h3",{id:"-4",tabindex:"-1"},"居中展示",-1)),t[4]||(t[4]=r("p",null,"垂直居中展示对话框。",-1)),o(e,{title:"居中展示",source:l(P)},{default:n(()=>[o(S)]),_:1},8,["source"]),t[5]||(t[5]=r("h3",{id:"confirm--info--success--error--warning",tabindex:"-1"},"静态方法（confirm / info / success / error / warning）",-1)),t[6]||(t[6]=r("p",null,[s("不需要在模板中维护 open 状态，直接调用即可。"),r("code",null,"onOk"),s(" 返回 Promise 时按钮自动显示 loading。")],-1)),o(e,{title:"静态方法",source:l($)},{default:n(()=>[o(I)]),_:1},8,["source"]),t[7]||(t[7]=r("h3",{id:"-5",tabindex:"-1"},"细粒度样式控制",-1)),t[8]||(t[8]=r("p",null,[s("使用 "),r("code",null,"classNames"),s(" 和 "),r("code",null,"styles"),s(" 属性可以精确控制对话框各部分的样式。")],-1)),o(e,{title:"classNames 和 styles",source:l(R)},{default:n(()=>[o(T)]),_:1},8,["source"]),t[9]||(t[9]=r("h3",{id:"-6",tabindex:"-1"},"自定义渲染容器",-1)),t[10]||(t[10]=r("p",null,[s("使用 "),r("code",null,"modalRender"),s(" 可以自定义对话框的渲染容器。")],-1)),o(e,{title:"modalRender",source:l(U)},{default:n(()=>[o(F)]),_:1},8,["source"]),t[11]||(t[11]=r("h3",{id:"-7",tabindex:"-1"},"自定义图标",-1)),t[12]||(t[12]=r("p",null,[s("静态方法支持使用 VNode 作为自定义图标，或通过 "),r("code",null,"null"),s(" 隐藏图标。")],-1)),o(e,{title:"自定义图标",source:l(L)},{default:n(()=>[o(_)]),_:1},8,["source"]),t[13]||(t[13]=M('<h2 id="api" tabindex="-1">API</h2><h3 id="modal-props" tabindex="-1">Modal Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>对话框是否可见</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultOpen</td><td>非受控初始可见状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>标题</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>520</code></td></tr><tr><td>centered</td><td>垂直居中展示</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closable</td><td>是否显示右上角关闭按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>IconComponent</code></td><td><code>CloseOutlined</code></td></tr><tr><td>mask</td><td>是否展示遮罩</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maskClosable</td><td>点击遮罩是否允许关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>keyboard</td><td>是否支持 Esc 键关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>footer</td><td>底部内容；<code>null</code> / <code>false</code> 隐藏</td><td><code>boolean | null | slot</code></td><td><code>true</code></td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td>locale.okText</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td>locale.cancelText</td></tr><tr><td>okType</td><td>确认按钮类型，支持 <code>&#39;danger&#39;</code> 简写</td><td><code>LegacyButtonType</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>okButtonProps</td><td>透传到 OK Button 的 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>透传到 Cancel Button 的 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>confirmLoading</td><td>确定按钮 loading；同时阻止取消/Esc/遮罩关闭</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>整个对话框 body 显示骨架屏</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnHidden</td><td>关闭后销毁 body 内的子元素（5.25+ 命名）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnClose</td><td><code>destroyOnHidden</code> 的兼容别名</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>forceRender</td><td>强制渲染对话框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zIndex</td><td>层级</td><td><code>number</code></td><td><code>1000</code></td></tr><tr><td>wrapClassName</td><td>应用到包裹层 <code>.hmfw-modal-wrap</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>应用到根元素 <code>.hmfw-modal-root</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>focusTriggerAfterClose</td><td>关闭后是否将焦点还给打开前的元素</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>bodyStyle</td><td>body 内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>maskStyle</td><td>mask 内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>细粒度控制各部分的 class</td><td><code>{ header?: string; body?: string; footer?: string; mask?: string; wrapper?: string; content?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>细粒度控制各部分的 style</td><td><code>{ header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties; wrapper?: CSSProperties; content?: CSSProperties }</code></td><td>-</td></tr><tr><td>modalRender</td><td>自定义渲染对话框容器</td><td><code>(node: VNode) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="modal-events" tabindex="-1">Modal Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>可见状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>ok</td><td>点击确定按钮</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击遮罩 / 关闭按钮 / 取消按钮 / Esc 时触发</td><td><code>(e?: MouseEvent | KeyboardEvent) =&gt; void</code></td></tr><tr><td>afterClose</td><td>关闭动画结束后触发</td><td><code>() =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>显示/隐藏切换的动画结束后触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="modal-slots" tabindex="-1">Modal Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>对话框内容</td></tr><tr><td>title</td><td>标题</td></tr><tr><td>footer</td><td>底部内容；优先级高于 <code>footer</code> prop</td></tr></tbody></table><h3 id="-8" tabindex="-1">静态方法</h3><blockquote><p><code>Modal.info(config)</code> / <code>Modal.success(config)</code> / <code>Modal.error(config)</code> / <code>Modal.warning(config)</code> / <code>Modal.confirm(config)</code>，均返回 <code>{ destroy, update }</code>。</p></blockquote><p><code>Modal.destroyAll()</code> 关闭所有通过静态方法创建的对话框。</p><h4 id="modalfuncprops" tabindex="-1">ModalFuncProps</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>content</td><td>内容</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标，传 <code>null</code> 隐藏；支持 VNode</td><td><code>IconComponent | VNode | null</code></td><td>按 <code>type</code> 自动选择</td></tr><tr><td>type</td><td>类型；决定默认图标和 <code>okCancel</code> 默认值</td><td><code>&#39;info&#39; | &#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;confirm&#39;</code></td><td><code>&#39;confirm&#39;</code></td></tr><tr><td>okCancel</td><td>是否显示取消按钮（默认仅 <code>confirm</code> 显示）</td><td><code>boolean</code></td><td>-</td></tr><tr><td>okText / cancelText / okType</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>okButtonProps / cancelButtonProps</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>centered / width / mask / maskClosable / keyboard / closable / zIndex</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>className</td><td>应用到 <code>.hmfw-modal-root</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>wrapClassName</td><td>应用到 <code>.hmfw-modal-wrap</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>onOk</td><td>点击 OK；返回 Promise 时按钮 loading 直到 resolve</td><td><code>() =&gt; any | Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>onCancel</td><td>点击 Cancel</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>afterClose</td><td>销毁后回调</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table>',12))])}}};export{Z as default};
