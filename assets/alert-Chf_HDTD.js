import{m as p,L as T,l as t,B as $,d as y,y as u,i as m,I as o,E as F,f as r,P as f,k as g,j as k}from"./index-tBZazAzX.js";import{c as C}from"./cls-S9IiI6wd.js";const D={success:"✓",info:"ℹ",warning:"⚠",error:"✕"},s=p({name:"Alert",props:{type:{type:String,default:void 0},variant:{type:String,default:"outlined"},title:String,message:String,description:String,showIcon:{type:Boolean,default:void 0},closable:Boolean,closeText:String,banner:Boolean},emits:["close","afterClose"],setup(d,{slots:n,emit:l}){const i=T("alert"),e=$(!1),a=$(!1),S=y(()=>d.type!==void 0?d.type:d.banner?"warning":"info"),x=y(()=>d.banner&&d.showIcon===void 0?!0:!!d.showIcon),B=y(()=>d.title??d.message),I=c=>{a.value=!0,l("close",c),setTimeout(()=>{e.value=!0,l("afterClose")},300)};return()=>{var v,h,w,A,_;if(e.value)return null;const c=S.value,b=!!(d.description||n.description);return t("div",{role:"alert","aria-live":c==="error"||c==="warning"?"assertive":"polite",class:C(i,`${i}-${c}`,`${i}-${d.variant}`,{[`${i}-with-description`]:b,[`${i}-banner`]:d.banner,[`${i}-closing`]:a.value,[`${i}-no-icon`]:!x.value})},[x.value&&t("span",{class:C(`${i}-icon`,`${i}-icon-${c}`)},[((v=n.icon)==null?void 0:v.call(n))??D[c]]),t("div",{class:`${i}-content`},[t("div",{class:`${i}-message`},[((h=n.message)==null?void 0:h.call(n))??((w=n.title)==null?void 0:w.call(n))??B.value]),b&&t("div",{class:`${i}-description`},[((A=n.description)==null?void 0:A.call(n))??d.description])]),(d.closable||d.closeText||n.closeIcon)&&t("button",{type:"button",class:`${i}-close-icon`,"aria-label":"关闭",onClick:I},[((_=n.closeIcon)==null?void 0:_.call(n))??d.closeText??"×"]),n.action&&t("div",{class:`${i}-action`},[n.action()])])}}}),V={style:{display:"flex","flex-direction":"column",gap:"12px"}},E=p({__name:"AlertBanner",setup(d){return(n,l)=>(u(),m("div",V,[t(o(s),{banner:"",message:"顶部公告：banner 模式默认显示图标，类型默认为 warning。"}),t(o(s),{banner:"",type:"error",message:"错误公告"})]))}}),N=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Alert banner message="顶部公告：banner 模式默认显示图标，类型默认为 warning。" />
    <Alert banner type="error" message="错误公告" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,P={style:{display:"flex","flex-direction":"column",gap:"12px"}},M=p({__name:"AlertClosable",setup(d){function n(){console.log("关闭警告")}return(l,i)=>(u(),m("div",P,[t(o(s),{message:"警告提示",type:"warning",closable:"",onClose:n}),t(o(s),{message:"错误提示",description:"详细的错误描述信息。",type:"error",closable:""})]))}}),j=`<template>
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
`,L={style:{display:"flex","flex-direction":"column",gap:"12px"}},q=p({__name:"AlertDescription",setup(d){return(n,l)=>(u(),m("div",L,[t(o(s),{message:"成功提示",description:"详细的成功描述和对此次成功的说明。",type:"success","show-icon":""}),t(o(s),{message:"错误提示",description:"详细的错误描述和对此次错误的说明。",type:"error","show-icon":""})]))}}),z=`<template>
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
`,G={style:{display:"flex","flex-direction":"column",gap:"12px"}},H=p({__name:"AlertTypes",setup(d){return(n,l)=>(u(),m("div",G,[t(o(s),{message:"成功提示",type:"success"}),t(o(s),{message:"消息提示",type:"info"}),t(o(s),{message:"警告提示",type:"warning"}),t(o(s),{message:"错误提示",type:"error"})]))}}),J=`<template>
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
`,K={style:{display:"flex","flex-direction":"column",gap:"12px"}},O=p({__name:"AlertVariant",setup(d){return(n,l)=>(u(),m("div",K,[t(o(s),{type:"success",variant:"filled",message:"Filled 填充样式","show-icon":""}),t(o(s),{type:"info",variant:"filled",message:"Filled 填充样式","show-icon":""}),t(o(s),{type:"warning",variant:"filled",message:"Filled 填充样式","show-icon":""}),t(o(s),{type:"error",variant:"filled",message:"Filled 填充样式","show-icon":""})]))}}),Q=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Alert type="success" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="info" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="warning" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="error" variant="filled" message="Filled 填充样式" show-icon />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,R={class:"markdown-body"},X={__name:"alert",setup(d,{expose:n}){return n({frontmatter:{}}),(i,e)=>{const a=F("DemoBlock");return u(),m("div",R,[e[0]||(e[0]=r("h1",{id:"alert-",tabindex:"-1"},"Alert 警告提示",-1)),e[1]||(e[1]=r("p",null,"警告提示，展现需要关注的信息。",-1)),e[2]||(e[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=r("ul",null,[r("li",null,"当某个页面需要向用户显示警告的信息时"),r("li",null,"非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭")],-1)),e[4]||(e[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=r("h3",{id:"-2",tabindex:"-1"},"四种类型",-1)),e[6]||(e[6]=r("p",null,"共有四种样式 success、info、warning、error。",-1)),t(a,{title:"四种类型",source:o(J)},{default:f(()=>[t(H)]),_:1},8,["source"]),e[7]||(e[7]=r("h3",{id:"-3",tabindex:"-1"},"带描述",-1)),e[8]||(e[8]=r("p",null,"含有辅助性文字介绍的警告提示。",-1)),t(a,{title:"带描述",source:o(z)},{default:f(()=>[t(q)]),_:1},8,["source"]),e[9]||(e[9]=r("h3",{id:"-4",tabindex:"-1"},"可关闭",-1)),e[10]||(e[10]=r("p",null,"显示关闭按钮，点击可关闭警告提示。",-1)),t(a,{title:"可关闭",source:o(j)},{default:f(()=>[t(M)]),_:1},8,["source"]),e[11]||(e[11]=r("h3",{id:"-5",tabindex:"-1"},"填充样式",-1)),e[12]||(e[12]=r("p",null,[g("通过 "),r("code",null,'variant="filled"'),g(" 使用更强的背景填充。")],-1)),t(a,{title:"填充样式",source:o(Q)},{default:f(()=>[t(O)]),_:1},8,["source"]),e[13]||(e[13]=r("h3",{id:"-6",tabindex:"-1"},"顶部公告",-1)),e[14]||(e[14]=r("p",null,[g("通过 "),r("code",null,"banner"),g(" 用作顶部公告，默认显示图标且类型为 warning。")],-1)),t(a,{title:"顶部公告",source:o(N)},{default:f(()=>[t(E)]),_:1},8,["source"]),e[15]||(e[15]=k('<h2 id="api" tabindex="-1">API</h2><h3 id="alert-props" tabindex="-1">Alert Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>指定警告提示的样式</td><td><code>&#39;success&#39; | &#39;info&#39; | &#39;warning&#39; | &#39;error&#39;</code></td><td><code>&#39;info&#39;</code>（banner 模式为 <code>&#39;warning&#39;</code>）</td></tr><tr><td>variant</td><td>样式变体</td><td><code>&#39;outlined&#39; | &#39;filled&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>title</td><td>警告提示内容</td><td><code>string</code></td><td>-</td></tr><tr><td>message</td><td><code>title</code> 的别名（已废弃，请使用 <code>title</code>）</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>警告提示的辅助性文字介绍</td><td><code>string</code></td><td>-</td></tr><tr><td>showIcon</td><td>是否显示辅助图标（banner 模式默认 <code>true</code>）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closable</td><td>默认不显示关闭按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closeText</td><td>自定义关闭按钮文字</td><td><code>string</code></td><td>-</td></tr><tr><td>banner</td><td>是否用作顶部公告</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="alert-slots" tabindex="-1">Alert Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title / message</td><td>标题内容</td></tr><tr><td>description</td><td>辅助性文字介绍</td></tr><tr><td>icon</td><td>自定义图标</td></tr><tr><td>closeIcon</td><td>自定义关闭按钮</td></tr><tr><td>action</td><td>自定义操作项</td></tr></tbody></table><h3 id="alert-events" tabindex="-1">Alert Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭时触发的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>afterClose</td><td>关闭动画结束后触发的回调函数</td><td><code>() =&gt; void</code></td></tr></tbody></table>',7))])}}};export{X as default};
