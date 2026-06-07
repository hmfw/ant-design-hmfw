import{n as m,M as E,m as t,D as F,e as f,z as g,j as y,J as r,G as P,g as d,Q as b,l as x,k as M}from"./index-bv5A37HL.js";import{o as Q,x as z,Q as G,l as J,p as L}from"./icons-DrnBibzR.js";import{c as q}from"./cls-S9IiI6wd.js";const H={success:J,info:G,warning:z,error:Q};function h(n){return Object.prototype.toString.call(n)==="[object Object]"}const s=m({name:"Alert",props:{type:{type:String,default:void 0},variant:{type:String,default:"outlined"},title:String,message:String,description:String,showIcon:{type:Boolean,default:void 0},closable:{type:[Boolean,Object],default:void 0},closeText:[String,Object,Array,Function],closeIcon:[String,Object,Array,Function],icon:[String,Object,Array,Function],banner:Boolean,action:[String,Object,Array,Function],role:{type:String,default:"alert"}},emits:["close","afterClose"],setup(n,{slots:o,emit:c}){const i=E("alert"),e=F(!1),u=F(!1),N=f(()=>n.type!==void 0?n.type:n.banner?"warning":"info"),w=f(()=>n.banner&&n.showIcon===void 0?!0:!!n.showIcon),j=f(()=>n.title??n.message),B=f(()=>{const{closable:l,closeText:a,closeIcon:p}=n;return h(l)||a!=null&&a!==""?!0:typeof l=="boolean"?l:p!=null}),T=f(()=>{const{closable:l,closeText:a,closeIcon:p}=n;if(h(l)&&l.closeIcon!=null)return l.closeIcon;if(a!=null&&a!=="")return a;if(p!=null)return p;if(o.closeIcon)return o.closeIcon()}),O=f(()=>{const{closable:l}=n;return h(l)&&typeof l["aria-label"]=="string"?l["aria-label"]:"关闭"}),V=l=>{u.value=!0,c("close",l),setTimeout(()=>{e.value=!0,c("afterClose")},300)};return()=>{var _,C,$,I,S;if(e.value)return null;const l=N.value,a=!!(n.description||o.description),p=H[l],k=n.icon??((_=o.icon)==null?void 0:_.call(o))??t(p,null,null),D=T.value??t(L,null,null),v=((C=o.message)==null?void 0:C.call(o))??(($=o.title)==null?void 0:$.call(o))??j.value,A=n.action??((I=o.action)==null?void 0:I.call(o));return t("div",{role:n.role,"aria-live":l==="error"||l==="warning"?"assertive":"polite","data-show":!e.value,class:q(i,`${i}-${l}`,`${i}-${n.variant}`,{[`${i}-with-description`]:a,[`${i}-banner`]:n.banner,[`${i}-closing`]:u.value,[`${i}-no-icon`]:!w.value})},[w.value&&t("span",{class:`${i}-icon`},[k]),t("div",{class:`${i}-section`},[v!=null&&v!==""&&t("div",{class:`${i}-title`},[v]),a&&t("div",{class:`${i}-description`},[((S=o.description)==null?void 0:S.call(o))??n.description])]),A!=null&&t("div",{class:`${i}-actions`},[A]),B.value&&t("button",{type:"button",tabindex:0,class:`${i}-close-icon`,"aria-label":O.value,onClick:V},[D])])}}}),K={style:{display:"flex","flex-direction":"column",gap:"12px"}},R=m({__name:"AlertBanner",setup(n){return(o,c)=>(g(),y("div",K,[t(r(s),{banner:"",message:"顶部公告：banner 模式默认显示图标，类型默认为 warning。"}),t(r(s),{banner:"",type:"error",message:"错误公告"})]))}}),U=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert banner message="顶部公告：banner 模式默认显示图标，类型默认为 warning。" />
    <Alert banner type="error" message="错误公告" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,W={style:{display:"flex","flex-direction":"column",gap:"12px"}},X=m({__name:"AlertClosable",setup(n){function o(){console.log("关闭警告")}return(c,i)=>(g(),y("div",W,[t(r(s),{message:"警告提示",type:"warning",closable:"",onClose:o}),t(r(s),{message:"错误提示",description:"详细的错误描述信息。",type:"error",closable:""})]))}}),Y=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="警告提示" type="warning" closable @close="onClose" />
    <Alert message="错误提示" description="详细的错误描述信息。" type="error" closable />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'

function onClose() {
  console.log('关闭警告')
}
<\/script>
`,Z={style:{display:"flex","flex-direction":"column",gap:"12px"}},ee=m({__name:"AlertDescription",setup(n){return(o,c)=>(g(),y("div",Z,[t(r(s),{message:"成功提示",description:"详细的成功描述和对此次成功的说明。",type:"success","show-icon":""}),t(r(s),{message:"错误提示",description:"详细的错误描述和对此次错误的说明。",type:"error","show-icon":""})]))}}),te=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="成功提示" description="详细的成功描述和对此次成功的说明。" type="success" show-icon />
    <Alert message="错误提示" description="详细的错误描述和对此次错误的说明。" type="error" show-icon />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,ne={style:{display:"flex","flex-direction":"column",gap:"12px"}},oe=m({__name:"AlertTypes",setup(n){return(o,c)=>(g(),y("div",ne,[t(r(s),{message:"成功提示",type:"success"}),t(r(s),{message:"消息提示",type:"info"}),t(r(s),{message:"警告提示",type:"warning"}),t(r(s),{message:"错误提示",type:"error"})]))}}),de=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="成功提示" type="success" />
    <Alert message="消息提示" type="info" />
    <Alert message="警告提示" type="warning" />
    <Alert message="错误提示" type="error" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,re={style:{display:"flex","flex-direction":"column",gap:"12px"}},le=m({__name:"AlertVariant",setup(n){return(o,c)=>(g(),y("div",re,[t(r(s),{type:"success",variant:"filled",message:"Filled 填充样式","show-icon":""}),t(r(s),{type:"info",variant:"filled",message:"Filled 填充样式","show-icon":""}),t(r(s),{type:"warning",variant:"filled",message:"Filled 填充样式","show-icon":""}),t(r(s),{type:"error",variant:"filled",message:"Filled 填充样式","show-icon":""})]))}}),ie=`<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert type="success" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="info" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="warning" variant="filled" message="Filled 填充样式" show-icon />
    <Alert type="error" variant="filled" message="Filled 填充样式" show-icon />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'
<\/script>
`,se={class:"markdown-body"},pe={__name:"alert",setup(n,{expose:o}){return o({frontmatter:{}}),(i,e)=>{const u=P("DemoBlock");return g(),y("div",se,[e[0]||(e[0]=d("h1",{id:"alert-",tabindex:"-1"},"Alert 警告提示",-1)),e[1]||(e[1]=d("p",null,"警告提示，展现需要关注的信息。",-1)),e[2]||(e[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=d("ul",null,[d("li",null,"当某个页面需要向用户显示警告的信息时"),d("li",null,"非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭")],-1)),e[4]||(e[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=d("h3",{id:"-2",tabindex:"-1"},"四种类型",-1)),e[6]||(e[6]=d("p",null,"共有四种样式 success、info、warning、error。",-1)),t(u,{title:"四种类型",source:r(de)},{default:b(()=>[t(oe)]),_:1},8,["source"]),e[7]||(e[7]=d("h3",{id:"-3",tabindex:"-1"},"带描述",-1)),e[8]||(e[8]=d("p",null,"含有辅助性文字介绍的警告提示。",-1)),t(u,{title:"带描述",source:r(te)},{default:b(()=>[t(ee)]),_:1},8,["source"]),e[9]||(e[9]=d("h3",{id:"-4",tabindex:"-1"},"可关闭",-1)),e[10]||(e[10]=d("p",null,"显示关闭按钮，点击可关闭警告提示。",-1)),t(u,{title:"可关闭",source:r(Y)},{default:b(()=>[t(X)]),_:1},8,["source"]),e[11]||(e[11]=d("h3",{id:"-5",tabindex:"-1"},"填充样式",-1)),e[12]||(e[12]=d("p",null,[x("通过 "),d("code",null,'variant="filled"'),x(" 使用更强的背景填充。")],-1)),t(u,{title:"填充样式",source:r(ie)},{default:b(()=>[t(le)]),_:1},8,["source"]),e[13]||(e[13]=d("h3",{id:"-6",tabindex:"-1"},"顶部公告",-1)),e[14]||(e[14]=d("p",null,[x("通过 "),d("code",null,"banner"),x(" 用作顶部公告，默认显示图标且类型为 warning。")],-1)),t(u,{title:"顶部公告",source:r(U)},{default:b(()=>[t(R)]),_:1},8,["source"]),e[15]||(e[15]=M('<h2 id="api" tabindex="-1">API</h2><h3 id="alert-props" tabindex="-1">Alert Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>指定警告提示的样式</td><td><code>&#39;success&#39; | &#39;info&#39; | &#39;warning&#39; | &#39;error&#39;</code></td><td><code>&#39;info&#39;</code>（banner 模式为 <code>&#39;warning&#39;</code>）</td></tr><tr><td>variant</td><td>样式变体</td><td><code>&#39;outlined&#39; | &#39;filled&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>title</td><td>警告提示内容</td><td><code>string</code></td><td>-</td></tr><tr><td>message</td><td><code>title</code> 的别名（已废弃，请使用 <code>title</code>）</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>警告提示的辅助性文字介绍</td><td><code>string</code></td><td>-</td></tr><tr><td>showIcon</td><td>是否显示辅助图标（banner 模式默认 <code>true</code>）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>自定义图标（<code>showIcon</code> 为 <code>true</code> 时有效）</td><td><code>VNode | slot</code></td><td>-</td></tr><tr><td>closable</td><td>是否显示关闭按钮，可传对象自定义图标与无障碍标签</td><td><code>boolean | { closeIcon?, &#39;aria-label&#39;? }</code></td><td><code>false</code></td></tr><tr><td>closeIcon</td><td>自定义关闭按钮图标</td><td><code>VNode | slot</code></td><td>-</td></tr><tr><td>closeText</td><td>自定义关闭按钮文字（已废弃，请使用 <code>closeIcon</code>）</td><td><code>string</code></td><td>-</td></tr><tr><td>action</td><td>自定义操作项</td><td><code>VNode | slot</code></td><td>-</td></tr><tr><td>role</td><td>根节点 <code>role</code> 属性</td><td><code>string</code></td><td><code>&#39;alert&#39;</code></td></tr><tr><td>banner</td><td>是否用作顶部公告</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="alert-slots" tabindex="-1">Alert Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title / message</td><td>标题内容</td></tr><tr><td>description</td><td>辅助性文字介绍</td></tr><tr><td>icon</td><td>自定义图标</td></tr><tr><td>closeIcon</td><td>自定义关闭按钮</td></tr><tr><td>action</td><td>自定义操作项</td></tr></tbody></table><h3 id="alert-events" tabindex="-1">Alert Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭时触发的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>afterClose</td><td>关闭动画结束后触发的回调函数</td><td><code>() =&gt; void</code></td></tr></tbody></table>',7))])}}};export{pe as default};
