import{B as r}from"./Button-CbNYWpGi.js";import{M as i}from"./index-DQEYbaFu.js";import{d as b,o as m,b as v,F as q,c as t,e,w as o,g as l,f as p,r as f,_ as C,q as x,s as B,y as M,h as S,i as h}from"./index-dV6GQSVR.js";import{S as w}from"./Space-_NefwuBe.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-CdSjzm5S.js";import"./index-D7zNbZtM.js";import"./CloseOutlined-BMlVguv3.js";import"./ExclamationCircleFilled-CCi-arz4.js";import"./CheckCircleFilled-DZhCJfKm.js";import"./CloseCircleFilled-r9gMBFNY.js";import"./InfoCircleFilled-BQGQ_SGp.js";const N=b({__name:"ModalBasic",setup(g){const a=f(!1);function u(){console.log("确认"),a.value=!1}function c(){console.log("取消"),a.value=!1}return(n,s)=>(m(),v(q,null,[t(e(r),{onClick:s[0]||(s[0]=d=>a.value=!0)},{default:o(()=>[...s[2]||(s[2]=[l("打开对话框",-1)])]),_:1}),t(e(i),{open:a.value,"onUpdate:open":s[1]||(s[1]=d=>a.value=d),title:"基础对话框",onOk:u,onCancel:c},{default:o(()=>[...s[3]||(s[3]=[p("p",null,"对话框内容",-1),p("p",null,"对话框内容",-1),p("p",null,"对话框内容",-1)])]),_:1},8,["open"])],64))}}),O=`<template>
  <Button @click="open = true">打开对话框</Button>
  <Modal v-model:open="open" title="基础对话框" @ok="handleOk" @cancel="handleCancel">
    <p>对话框内容</p>
    <p>对话框内容</p>
    <p>对话框内容</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@hmfw/ant-design'

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
`,P=b({__name:"ModalCentered",setup(g){const a=f(!1);return(u,c)=>(m(),v(q,null,[t(e(r),{onClick:c[0]||(c[0]=n=>a.value=!0)},{default:o(()=>[...c[4]||(c[4]=[l("居中对话框",-1)])]),_:1}),t(e(i),{open:a.value,"onUpdate:open":c[1]||(c[1]=n=>a.value=n),title:"居中对话框",centered:"",onOk:c[2]||(c[2]=n=>a.value=!1),onCancel:c[3]||(c[3]=n=>a.value=!1)},{default:o(()=>[...c[5]||(c[5]=[p("p",null,"居中展示的对话框内容",-1)])]),_:1},8,["open"])],64))}}),T=`<template>
  <Button @click="open = true">居中对话框</Button>
  <Modal v-model:open="open" title="居中对话框" centered @ok="open = false" @cancel="open = false">
    <p>居中展示的对话框内容</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Modal, Button } from '@hmfw/ant-design'

const open = ref(false)
<\/script>
`,V=b({__name:"ModalClassNames",setup(g){const a=f(!1);function u(){console.log("确认"),a.value=!1}return(c,n)=>(m(),v(q,null,[t(e(r),{onClick:n[0]||(n[0]=s=>a.value=!0)},{default:o(()=>[...n[2]||(n[2]=[l(" 打开自定义样式对话框 ",-1)])]),_:1}),t(e(i),{open:a.value,"onUpdate:open":n[1]||(n[1]=s=>a.value=s),title:"细粒度样式控制","class-names":{header:"custom-header",body:"custom-body",footer:"custom-footer"},styles:{header:{background:"#f0f5ff",borderRadius:"8px 8px 0 0"},body:{padding:"32px"},footer:{background:"#fafafa"}},onOk:u},{default:o(()=>[...n[3]||(n[3]=[p("p",null,"通过 classNames 和 styles 可以细粒度控制对话框各部分的样式。",-1),p("p",null,"这个例子演示了如何自定义 header、body 和 footer 的样式。",-1)])]),_:1},8,["open"])],64))}}),E=C(V,[["__scopeId","data-v-5a070a22"]]),R=`<template>
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
import { Modal, Button } from '@hmfw/ant-design'

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
`,I=b({__name:"ModalConfirm",setup(g){function a(){i.confirm({title:"确认删除？",content:"该操作不可撤销。",okType:"danger",onOk:()=>{console.log("OK")},onCancel:()=>{console.log("Cancel")}})}function u(){i.info({title:"提示",content:"这是一条信息。"})}function c(){i.success({title:"操作成功",content:"保存完成。"})}function n(){i.error({title:"操作失败",content:"请重试。"})}function s(){i.warning({title:"注意",content:"即将关闭。"})}function d(){i.confirm({title:"提交中？",content:"OK 按钮会显示 loading 直到 Promise resolve。",onOk:()=>new Promise(y=>setTimeout(y,1500))})}return(y,k)=>(m(),x(e(w),null,{default:o(()=>[t(e(r),{onClick:a},{default:o(()=>[...k[0]||(k[0]=[l(" 删除项目 ",-1)])]),_:1}),t(e(r),{onClick:u},{default:o(()=>[...k[1]||(k[1]=[l(" 提示信息 ",-1)])]),_:1}),t(e(r),{onClick:c},{default:o(()=>[...k[2]||(k[2]=[l(" 成功 ",-1)])]),_:1}),t(e(r),{onClick:n},{default:o(()=>[...k[3]||(k[3]=[l(" 错误 ",-1)])]),_:1}),t(e(r),{onClick:s},{default:o(()=>[...k[4]||(k[4]=[l(" 警告 ",-1)])]),_:1}),t(e(r),{onClick:d},{default:o(()=>[...k[5]||(k[5]=[l(" 异步确认 ",-1)])]),_:1})]),_:1}))}}),$=`<template>
  <Space>
    <Button @click="confirm"> 删除项目 </Button>
    <Button @click="info"> 提示信息 </Button>
    <Button @click="success"> 成功 </Button>
    <Button @click="error"> 错误 </Button>
    <Button @click="warning"> 警告 </Button>
    <Button @click="asyncConfirm"> 异步确认 </Button>
  </Space>
</template>

<script setup lang="ts">
import { Modal, Button, Space } from '@hmfw/ant-design'

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
`,_=b({__name:"ModalCustomFooter",setup(g){const a=f(!1),u=f(!1),c=f("内容将在两秒后更新");function n(){c.value="正在提交...",u.value=!0,setTimeout(()=>{a.value=!1,u.value=!1},2e3)}return(s,d)=>(m(),v(q,null,[t(e(r),{onClick:d[0]||(d[0]=y=>a.value=!0)},{default:o(()=>[...d[3]||(d[3]=[l("打开对话框",-1)])]),_:1}),t(e(i),{open:a.value,"onUpdate:open":d[2]||(d[2]=y=>a.value=y),title:"自定义页脚","confirm-loading":u.value,onOk:n},{footer:o(()=>[t(e(r),{onClick:d[1]||(d[1]=y=>a.value=!1)},{default:o(()=>[...d[4]||(d[4]=[l("取消",-1)])]),_:1}),t(e(r),{onClick:n},{default:o(()=>[...d[5]||(d[5]=[l("确认",-1)])]),_:1})]),default:o(()=>[p("p",null,B(c.value),1)]),_:1},8,["open","confirm-loading"])],64))}}),F=`<template>
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
import { Modal, Button } from '@hmfw/ant-design'

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
`,z=b({__name:"ModalCustomIcon",setup(g){function a(){i.info({title:"自定义图标",content:"这个对话框使用了自定义的 VNode 作为图标。",icon:M("span",{style:{fontSize:"24px",color:"#1890ff"}},"🎨")})}function u(){i.confirm({title:"无图标确认",content:"通过设置 icon 为 null 可以隐藏图标。",icon:null})}return(c,n)=>(m(),x(e(w),null,{default:o(()=>[t(e(r),{onClick:a},{default:o(()=>[...n[0]||(n[0]=[l(" 使用自定义 VNode 图标 ",-1)])]),_:1}),t(e(r),{onClick:u},{default:o(()=>[...n[1]||(n[1]=[l(" 隐藏图标 ",-1)])]),_:1})]),_:1}))}}),A=`<template>
  <Space>
    <Button @click="showCustomIcon"> 使用自定义 VNode 图标 </Button>
    <Button @click="showNoIcon"> 隐藏图标 </Button>
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Modal, Button, Space } from '@hmfw/ant-design'

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
`,K=b({__name:"ModalRender",setup(g){const a=f(!1);function u(n){return M("div",{style:{padding:"20px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px"}},[n])}function c(){console.log("确认"),a.value=!1}return(n,s)=>(m(),v(q,null,[t(e(r),{onClick:s[0]||(s[0]=d=>a.value=!0)},{default:o(()=>[...s[2]||(s[2]=[l(" 打开自定义容器 ",-1)])]),_:1}),t(e(i),{open:a.value,"onUpdate:open":s[1]||(s[1]=d=>a.value=d),title:"自定义渲染容器","modal-render":u,onOk:c},{default:o(()=>[...s[3]||(s[3]=[p("p",null,"这是对话框内容。",-1),p("p",null,"外层容器已通过 modalRender 自定义渲染。",-1)])]),_:1},8,["open"])],64))}}),L=`<template>
  <Button @click="open = true"> 打开自定义容器 </Button>
  <Modal v-model:open="open" title="自定义渲染容器" :modal-render="modalRender" @ok="handleOk">
    <p>这是对话框内容。</p>
    <p>外层容器已通过 modalRender 自定义渲染。</p>
  </Modal>
</template>

<script setup lang="ts">
import { ref, h, type VNode } from 'vue'
import { Modal, Button } from '@hmfw/ant-design'

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
`,D={class:"markdown-body"},an={__name:"modal",setup(g,{expose:a}){return a({frontmatter:{}}),(c,n)=>{const s=S("DemoBlock");return m(),v("div",D,[n[0]||(n[0]=h('<h1 id="modal-对话框" tabindex="-1">Modal 对话框</h1><p>模态对话框。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</li><li>需要一个简洁的确认框询问用户时，可以使用静态方法 <code>Modal.confirm()</code> / <code>Modal.info()</code> / <code>Modal.success()</code> / <code>Modal.error()</code> / <code>Modal.warning()</code>。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基础用法" tabindex="-1">基础用法</h3><p>第一个对话框。</p>',7)),t(s,{title:"基础用法",source:e(O)},{default:o(()=>[t(N)]),_:1},8,["source"]),n[1]||(n[1]=p("h3",{id:"自定义页脚",tabindex:"-1"},"自定义页脚",-1)),n[2]||(n[2]=p("p",null,"更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。",-1)),t(s,{title:"自定义页脚",source:e(F)},{default:o(()=>[t(_)]),_:1},8,["source"]),n[3]||(n[3]=p("h3",{id:"居中展示",tabindex:"-1"},"居中展示",-1)),n[4]||(n[4]=p("p",null,"垂直居中展示对话框。",-1)),t(s,{title:"居中展示",source:e(T)},{default:o(()=>[t(P)]),_:1},8,["source"]),n[5]||(n[5]=p("h3",{id:"静态方法confirm--info--success--error--warning",tabindex:"-1"},"静态方法（confirm / info / success / error / warning）",-1)),n[6]||(n[6]=p("p",null,[l("不需要在模板中维护 open 状态，直接调用即可。"),p("code",null,"onOk"),l(" 返回 Promise 时按钮自动显示 loading。")],-1)),t(s,{title:"静态方法",source:e($)},{default:o(()=>[t(I)]),_:1},8,["source"]),n[7]||(n[7]=p("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[8]||(n[8]=p("p",null,[l("使用 "),p("code",null,"classNames"),l(" 和 "),p("code",null,"styles"),l(" 属性可以精确控制对话框各部分的样式。")],-1)),t(s,{title:"classNames 和 styles",source:e(R)},{default:o(()=>[t(E)]),_:1},8,["source"]),n[9]||(n[9]=p("h3",{id:"自定义渲染容器",tabindex:"-1"},"自定义渲染容器",-1)),n[10]||(n[10]=p("p",null,[l("使用 "),p("code",null,"modalRender"),l(" 可以自定义对话框的渲染容器。")],-1)),t(s,{title:"modalRender",source:e(L)},{default:o(()=>[t(K)]),_:1},8,["source"]),n[11]||(n[11]=p("h3",{id:"自定义图标",tabindex:"-1"},"自定义图标",-1)),n[12]||(n[12]=p("p",null,[l("静态方法支持使用 VNode 作为自定义图标，或通过 "),p("code",null,"null"),l(" 隐藏图标。")],-1)),t(s,{title:"自定义图标",source:e(A)},{default:o(()=>[t(z)]),_:1},8,["source"]),n[13]||(n[13]=h(`<h2 id="api" tabindex="-1">API</h2><h3 id="modal-props" tabindex="-1">Modal Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>对话框是否可见</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultOpen</td><td>非受控初始可见状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>标题</td><td><code>string | number | VNode | () =&gt; VNode | slot</code></td><td>-</td></tr><tr><td>width</td><td>宽度</td><td><code>number | string</code></td><td><code>520</code></td></tr><tr><td>centered</td><td>垂直居中展示</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closable</td><td>是否显示右上角关闭按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>IconComponent</code></td><td><code>CloseOutlined</code></td></tr><tr><td>mask</td><td>是否展示遮罩</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maskClosable</td><td>点击遮罩是否允许关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>keyboard</td><td>是否支持 Esc 键关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>footer</td><td>底部内容；<code>null</code> / <code>false</code> 隐藏</td><td><code>boolean | null | slot</code></td><td><code>true</code></td></tr><tr><td>okText</td><td>确认按钮文字</td><td><code>string</code></td><td>locale.okText</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td><code>string</code></td><td>locale.cancelText</td></tr><tr><td>okType</td><td>确认按钮类型，支持 <code>&#39;danger&#39;</code> 简写</td><td><code>LegacyButtonType</code></td><td><code>&#39;primary&#39;</code></td></tr><tr><td>okButtonProps</td><td>透传到 OK Button 的 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>透传到 Cancel Button 的 props</td><td><code>ButtonProps</code></td><td>-</td></tr><tr><td>confirmLoading</td><td>确定按钮 loading；同时阻止取消/Esc/遮罩关闭</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>整个对话框 body 显示骨架屏</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnHidden</td><td>关闭后销毁 body 内的子元素（5.25+ 命名）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnClose</td><td><code>destroyOnHidden</code> 的兼容别名</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>forceRender</td><td>强制渲染对话框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zIndex</td><td>层级</td><td><code>number</code></td><td><code>1000</code></td></tr><tr><td>wrapClassName</td><td>应用到包裹层 <code>.hmfw-modal-wrap</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>应用到根元素 <code>.hmfw-modal-root</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>focusTriggerAfterClose</td><td>关闭后是否将焦点还给打开前的元素</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>bodyStyle</td><td>body 内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>maskStyle</td><td>mask 内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ header?: string; body?: string; footer?: string; mask?: string; wrapper?: string; content?: string }</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>{ header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties; wrapper?: CSSProperties; content?: CSSProperties }</code></td><td>-</td></tr><tr><td>modalRender</td><td>自定义渲染对话框容器</td><td><code>(node: VNode) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="modal-events" tabindex="-1">Modal Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>可见状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>ok</td><td>点击确定按钮</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>cancel</td><td>点击遮罩 / 关闭按钮 / 取消按钮 / Esc 时触发</td><td><code>(e?: MouseEvent | KeyboardEvent) =&gt; void</code></td></tr><tr><td>afterClose</td><td>关闭动画结束后触发</td><td><code>() =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>显示/隐藏切换的动画结束后触发</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h3 id="modal-slots" tabindex="-1">Modal Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>对话框内容</td></tr><tr><td>title</td><td>标题</td></tr><tr><td>footer</td><td>底部内容；优先级高于 <code>footer</code> prop</td></tr></tbody></table><h3 id="静态方法" tabindex="-1">静态方法</h3><blockquote><p><code>Modal.info(config)</code> / <code>Modal.success(config)</code> / <code>Modal.error(config)</code> / <code>Modal.warning(config)</code> / <code>Modal.confirm(config)</code>，均返回 <code>{ destroy, update }</code>。</p></blockquote><p><code>Modal.destroyAll()</code> 关闭所有通过静态方法创建的对话框。</p><h4 id="modalfuncprops" tabindex="-1">ModalFuncProps</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>content</td><td>内容</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标，传 <code>null</code> 隐藏；支持 VNode</td><td><code>IconComponent | VNode | null</code></td><td>按 <code>type</code> 自动选择</td></tr><tr><td>type</td><td>类型；决定默认图标和 <code>okCancel</code> 默认值</td><td><code>&#39;info&#39; | &#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;confirm&#39;</code></td><td><code>&#39;confirm&#39;</code></td></tr><tr><td>okCancel</td><td>是否显示取消按钮（默认仅 <code>confirm</code> 显示）</td><td><code>boolean</code></td><td>-</td></tr><tr><td>okText / cancelText / okType</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>okButtonProps / cancelButtonProps</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>centered / width / mask / maskClosable / keyboard / closable / zIndex</td><td>同 Modal Props</td><td>-</td><td>-</td></tr><tr><td>className</td><td>应用到 <code>.hmfw-modal-root</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>wrapClassName</td><td>应用到 <code>.hmfw-modal-wrap</code> 的 class</td><td><code>string</code></td><td>-</td></tr><tr><td>onOk</td><td>点击 OK；返回 Promise 时按钮 loading 直到 resolve</td><td><code>() =&gt; any | Promise&lt;any&gt;</code></td><td>-</td></tr><tr><td>onCancel</td><td>点击 Cancel</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>afterClose</td><td>销毁后回调</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对对话框的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">ModalClassNames</span> <span class="token punctuation">{</span>
  mask<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 遮罩层</span>
  wrapper<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 容器包裹层</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容容器</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题区域</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容区域</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 底部操作区</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ModalStyles</span> <span class="token punctuation">{</span>
  mask<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 遮罩层</span>
  wrapper<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 容器包裹层</span>
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 内容容器</span>
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 标题区域</span>
  body<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 内容区域</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 底部操作区</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 遮罩层 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-mask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.mask / styles.mask 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 容器包裹层 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.wrapper / styles.wrapper 应用于此 --&gt;</span>

    <span class="token comment">&lt;!-- 对话框外层容器 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>

      <span class="token comment">&lt;!-- 对话框内容包裹 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 关闭按钮 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-close-x<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 标题区域 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.header / styles.header 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标题文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 内容区域 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
          对话框内容
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 底部操作区 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-modal-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.footer / styles.footer 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>取消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>确定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义遮罩和内容容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible1<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>自定义样式<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      mask: &#39;my-modal-mask&#39;,
      content: &#39;my-modal-content&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>对话框内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义头部和底部 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible2<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>渐变头部<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      header: &#39;my-modal-header&#39;,
      footer: &#39;my-modal-footer&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>对话框内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义 body 区域 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible3<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>自定义内容区<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      body: &#39;my-modal-body&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>对话框内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible4<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>完整自定义<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      mask: &#39;my-mask&#39;,
      wrapper: &#39;my-wrapper&#39;,
      content: &#39;my-content&#39;,
      header: &#39;my-header&#39;,
      body: &#39;my-body&#39;,
      footer: &#39;my-footer&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>完全自定义的对话框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-modal-mask)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-modal-content)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 8px 32px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-modal-header)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 16px 16px 0 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-modal-body)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f0f5ff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 32px 24px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-modal-footer)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid #e8e8e8<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px 24px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 0 16px 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制遮罩 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible1<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>自定义遮罩<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      mask: {
        background: &#39;rgba(0, 0, 0, 0.7)&#39;,
        backdropFilter: &#39;blur(4px)&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>对话框内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义内容容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible2<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>圆角对话框<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      content: {
        borderRadius: &#39;16px&#39;,
        boxShadow: &#39;0 8px 32px rgba(0, 0, 0, 0.2)&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>对话框内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义头部和底部 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible3<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>渐变头部<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      header: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        color: &#39;white&#39;,
        padding: &#39;20px 24px&#39;,
      },
      footer: {
        background: &#39;#fafafa&#39;,
        borderTop: &#39;2px solid #e8e8e8&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>对话框内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible4<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>完整自定义<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
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
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>完全自定义的对话框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>mask</code> / <code>wrapper</code> / <code>content</code> 影响对话框的外层结构，<code>header</code> / <code>body</code> / <code>footer</code> 影响内容区域</li><li>当同时设置 <code>bodyStyle</code> prop 和 <code>styles.body</code> 时，两者会合并（<code>styles.body</code> 优先）</li><li>当同时设置 <code>maskStyle</code> prop 和 <code>styles.mask</code> 时，两者会合并（<code>styles.mask</code> 优先）</li><li><code>wrapper</code> 是对话框的定位容器，修改其样式可能影响居中效果，建议谨慎使用</li><li>静态方法（<code>Modal.confirm</code> 等）创建的对话框暂不支持 <code>classNames</code> / <code>styles</code>，可使用 <code>className</code> / <code>wrapClassName</code> 配合全局样式</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-success</code></td><td>成功状态色</td><td><code>#52c41a</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr></tbody></table>`,27))])}}};export{an as default};
