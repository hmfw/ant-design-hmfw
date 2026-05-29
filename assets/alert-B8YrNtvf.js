import{k as p,I as A,j as t,z as h,w as u,g as m,G as d,B as _,d as r,M as f,h as $}from"./index-DvxRruME.js";import{c as v}from"./cls-S9IiI6wd.js";const C={success:"✓",info:"ℹ",warning:"⚠",error:"✕"},i=p({name:"Alert",props:{type:{type:String,default:"info"},message:String,description:String,showIcon:Boolean,closable:Boolean,closeText:String,banner:Boolean},emits:["close","afterClose"],setup(o,{slots:n,emit:a}){const s=A("alert"),e=h(!1),c=h(!1),w=l=>{c.value=!0,a("close",l),setTimeout(()=>{e.value=!0,a("afterClose")},300)};return()=>{var y,x,b;if(e.value)return null;const l=o.banner?"warning":o.type??"info",g=!!(o.description||n.description);return t("div",{role:"alert","aria-live":l==="error"||l==="warning"?"assertive":"polite",class:v(s,`${s}-${l}`,{[`${s}-with-description`]:g,[`${s}-banner`]:o.banner,[`${s}-closing`]:c.value,[`${s}-no-icon`]:!o.showIcon})},[o.showIcon&&t("span",{class:v(`${s}-icon`,`${s}-icon-${l}`)},[C[l]]),t("div",{class:`${s}-content`},[t("div",{class:`${s}-message`},[((y=n.message)==null?void 0:y.call(n))??o.message]),g&&t("div",{class:`${s}-description`},[((x=n.description)==null?void 0:x.call(n))??o.description])]),(o.closable||o.closeText||n.closeIcon)&&t("button",{type:"button",class:`${s}-close-icon`,"aria-label":"关闭",onClick:w},[((b=n.closeIcon)==null?void 0:b.call(n))??o.closeText??"×"]),n.action&&t("div",{class:`${s}-action`},[n.action()])])}}}),B={style:{display:"flex","flex-direction":"column",gap:"12px"}},I=p({__name:"AlertClosable",setup(o){function n(){console.log("关闭警告")}return(a,s)=>(u(),m("div",B,[t(d(i),{message:"警告提示",type:"warning",closable:"",onClose:n}),t(d(i),{message:"错误提示",description:"详细的错误描述信息。",type:"error",closable:""})]))}}),S=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Alert
      message="警告提示"
      type="warning"
      closable
      @close="onClose"
    />
    <Alert
      message="错误提示"
      description="详细的错误描述信息。"
      type="error"
      closable
    />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'

function onClose() {
  console.log('关闭警告')
}
<\/script>
`,k={style:{display:"flex","flex-direction":"column",gap:"12px"}},D=p({__name:"AlertDescription",setup(o){return(n,a)=>(u(),m("div",k,[t(d(i),{message:"成功提示",description:"详细的成功描述和对此次成功的说明。",type:"success","show-icon":""}),t(d(i),{message:"错误提示",description:"详细的错误描述和对此次错误的说明。",type:"error","show-icon":""})]))}}),T=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Alert
      message="成功提示"
      description="详细的成功描述和对此次成功的说明。"
      type="success"
      show-icon
    />
    <Alert
      message="错误提示"
      description="详细的错误描述和对此次错误的说明。"
      type="error"
      show-icon
    />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,E={style:{display:"flex","flex-direction":"column",gap:"12px"}},M=p({__name:"AlertTypes",setup(o){return(n,a)=>(u(),m("div",E,[t(d(i),{message:"成功提示",type:"success"}),t(d(i),{message:"消息提示",type:"info"}),t(d(i),{message:"警告提示",type:"warning"}),t(d(i),{message:"错误提示",type:"error"})]))}}),N=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Alert message="成功提示" type="success" />
    <Alert message="消息提示" type="info" />
    <Alert message="警告提示" type="warning" />
    <Alert message="错误提示" type="error" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,P={class:"markdown-body"},z={__name:"alert",setup(o,{expose:n}){return n({frontmatter:{}}),(s,e)=>{const c=_("DemoBlock");return u(),m("div",P,[e[0]||(e[0]=r("h1",{id:"alert-",tabindex:"-1"},"Alert 警告提示",-1)),e[1]||(e[1]=r("p",null,"警告提示，展现需要关注的信息。",-1)),e[2]||(e[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=r("ul",null,[r("li",null,"当某个页面需要向用户显示警告的信息时"),r("li",null,"非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭")],-1)),e[4]||(e[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=r("h3",{id:"-2",tabindex:"-1"},"四种类型",-1)),e[6]||(e[6]=r("p",null,"共有四种样式 success、info、warning、error。",-1)),t(c,{title:"四种类型",source:d(N)},{default:f(()=>[t(M)]),_:1},8,["source"]),e[7]||(e[7]=r("h3",{id:"-3",tabindex:"-1"},"带描述",-1)),e[8]||(e[8]=r("p",null,"含有辅助性文字介绍的警告提示。",-1)),t(c,{title:"带描述",source:d(T)},{default:f(()=>[t(D)]),_:1},8,["source"]),e[9]||(e[9]=r("h3",{id:"-4",tabindex:"-1"},"可关闭",-1)),e[10]||(e[10]=r("p",null,"显示关闭按钮，点击可关闭警告提示。",-1)),t(c,{title:"可关闭",source:d(S)},{default:f(()=>[t(I)]),_:1},8,["source"]),e[11]||(e[11]=$('<h2 id="api" tabindex="-1">API</h2><h3 id="alert-props" tabindex="-1">Alert Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>指定警告提示的样式</td><td><code>&#39;success&#39; | &#39;info&#39; | &#39;warning&#39; | &#39;error&#39;</code></td><td><code>&#39;info&#39;</code></td></tr><tr><td>message</td><td>警告提示内容</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>警告提示的辅助性文字介绍</td><td><code>string</code></td><td>-</td></tr><tr><td>showIcon</td><td>是否显示辅助图标</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closable</td><td>默认不显示关闭按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>banner</td><td>是否用作顶部公告</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>action</td><td>自定义操作项</td><td><code>slot</code></td><td>-</td></tr></tbody></table><h3 id="alert-events" tabindex="-1">Alert Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭时触发的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>afterClose</td><td>关闭动画结束后触发的回调函数</td><td><code>() =&gt; void</code></td></tr></tbody></table>',5))])}}};export{z as default};
