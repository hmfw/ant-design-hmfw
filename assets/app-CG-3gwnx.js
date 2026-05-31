import{B as i}from"./Button-D5N1epLo.js";import{S as b}from"./Space-nMQRznJ5.js";import{n as f}from"./notification-DY5d9g8A.js";import{m as h}from"./message-ByddIrxV.js";import{o as _,m as r,l as d,q as y,F as C,G as M,z as x,y as A,g as B,P as g,I as l,n as c,E as P,i as S,j as m}from"./index-BZxHTh1S.js";import{M as I}from"./index-CH7bo5GH.js";import"./icons-D7iQGqyN.js";import"./Icon-B8OCUOt-.js";import"./cls-S9IiI6wd.js";import"./index-CCPTIogN.js";const p=()=>{},N={confirm:p,info:p,success:p,warning:p,error:p},k=Symbol("App"),v={message:h,notification:f,modal:N};function E(){return _(k,v)}const j=r({name:"App",setup(u,{slots:e}){const o=M({open:!1,type:"info",props:{}});function n(t,a){o.type=t,o.props=a,o.open=!0}return x(k,{message:h,notification:f,modal:{confirm:t=>n("confirm",t),info:t=>n("info",t),success:t=>n("success",t),warning:t=>n("warning",t),error:t=>n("error",t)}}),()=>{var t;return d(C,null,[(t=e.default)==null?void 0:t.call(e),d(I,y({open:o.open},o.props,{"onUpdate:open":a=>{o.open=a},onCancel:()=>{o.open=!1}}),null)])}}}),D=r({__name:"AppBasic",setup(u){const e=r({setup(){const{message:o,notification:n,modal:s}=E();function t(){o.success("操作成功！")}function a(){n.info({message:"系统通知",description:"这是通过 useApp() 触发的通知。"})}function w(){s.info({title:"提示",content:"这是通过 useApp() 触发的对话框。"})}return()=>c(b,null,{default:()=>[c(i,{type:"primary",onClick:t},{default:()=>"Message"}),c(i,{onClick:a},{default:()=>"Notification"}),c(i,{onClick:w},{default:()=>"Modal"})]})}});return(o,n)=>(A(),B(l(j),null,{default:g(()=>[d(l(e))]),_:1}))}}),F=`<template>
  <App>
    <AppActions />
  </App>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { App, useApp, Button, Space } from 'ant-design-hmfw'

// useApp() 在 App 子组件内调用，获取 message/notification/modal 实例
const AppActions = defineComponent({
  setup() {
    const { message, notification, modal } = useApp()

    function showMessage() {
      message.success('操作成功！')
    }

    function showNotification() {
      notification.info({
        message: '系统通知',
        description: '这是通过 useApp() 触发的通知。',
      })
    }

    function showModal() {
      modal.info({
        title: '提示',
        content: '这是通过 useApp() 触发的对话框。',
      })
    }

    return () =>
      h(Space, null, {
        default: () => [
          h(Button, { type: 'primary', onClick: showMessage }, { default: () => 'Message' }),
          h(Button, { onClick: showNotification }, { default: () => 'Notification' }),
          h(Button, { onClick: showModal }, { default: () => 'Modal' }),
        ],
      })
  },
})
<\/script>
`,V={class:"markdown-body"},L={__name:"app",setup(u,{expose:e}){return e({frontmatter:{}}),(n,s)=>{const t=P("DemoBlock");return A(),S("div",V,[s[0]||(s[0]=m('<h1 id="app-" tabindex="-1">App 全局化配置</h1><p>应用级别的全局上下文，提供 <code>useApp()</code> 组合式 API，使子组件可以通过 hooks 调用 <code>message</code>、<code>notification</code>、<code>modal</code>，而无需手动挂载实例。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>需要在组件内部通过 <code>useApp()</code> 调用 <code>message.success()</code>、<code>notification.info()</code>、<code>modal.confirm()</code> 等命令式 API 时</li><li>替代直接导入全局静态方法，使调用与当前 ConfigProvider 的主题/国际化配置保持一致</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>在应用根部包裹 <code>&lt;App&gt;</code>，子组件内通过 <code>useApp()</code> 获取 <code>message</code>、<code>notification</code>、<code>modal</code> 实例。</p>',7)),d(t,{title:"基础用法",source:l(F)},{default:g(()=>[d(D)]),_:1},8,["source"]),s[1]||(s[1]=m(`<h2 id="api" tabindex="-1">API</h2><h3 id="app-props" tabindex="-1">App Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>—</td><td>无额外 props，仅作为上下文容器</td><td>—</td><td>—</td></tr></tbody></table><h3 id="useapp" tabindex="-1">useApp()</h3><p>在 <code>&lt;App&gt;</code> 的子组件内调用，返回 <code>AppConfig</code> 对象。</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> useApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> notification<span class="token punctuation">,</span> modal <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>message</td><td>全局提示实例</td><td>同 <code>message</code> API</td></tr><tr><td>notification</td><td>通知提醒实例</td><td>同 <code>notification</code> API</td></tr><tr><td>modal</td><td>对话框命令式方法</td><td><code>{ confirm, info, success, warning, error }</code></td></tr></tbody></table><h3 id="modal-" tabindex="-1">modal 方法</h3><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td><code>modal.confirm(props)</code></td><td>确认对话框</td></tr><tr><td><code>modal.info(props)</code></td><td>信息对话框</td></tr><tr><td><code>modal.success(props)</code></td><td>成功对话框</td></tr><tr><td><code>modal.warning(props)</code></td><td>警告对话框</td></tr><tr><td><code>modal.error(props)</code></td><td>错误对话框</td></tr></tbody></table><p>props 与 <code>Modal</code> 组件的 props 一致，参见 <a href="/components/modal">Modal API</a>。</p>`,10))])}}};export{L as default};
