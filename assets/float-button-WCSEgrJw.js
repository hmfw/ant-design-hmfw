import{p as E,o as b,O as P,n as o,s as $,E as T,c as j,f as L,r as U,x as Y,w as K,A as x,k as B,h as a,F as J,G as X,K as Z,L as e,_ as w,Q as k,H as tt,m as r,l as nt}from"./index-aeAUYztw.js";import{B as ot}from"./index-BHFt02vs.js";import{c as C}from"./cls-S9IiI6wd.js";import{T as et}from"./Tooltip-DfKv4R5d.js";import{C as st}from"./CloseOutlined-DW0mVAJL.js";import{P as at}from"./PlusOutlined-CRnzPHIh.js";import{T as ct}from"./Trigger-DUHNd6y-.js";import{I as D,Q as dt,a as lt,C as it,R as pt}from"./RocketOutlined-B4YW8WlP.js";import{E as N}from"./EditOutlined-BucXdjrc.js";import{D as Q}from"./DeleteOutlined-D8Q6D3V8.js";import{S as W}from"./SearchOutlined-DtFJTRVV.js";import{S as _}from"./SettingOutlined-Cpv62SOz.js";const rt=()=>E("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",focusable:!1},[E("path",{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-178H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm192 356H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h376c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"})]),ut=()=>E("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",focusable:!1},[E("path",{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"})]);function mt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!U(t)}function gt(t,s){const c=s==null?void 0:s();return c&&c.length?c:t?typeof t=="string"?t:o(t,{class:"hmfw-icon"},null):void 0}function ft(t){if(t)return typeof t=="string"?{title:t}:t}const d=b({name:"FloatButton",inheritAttrs:!1,props:{type:{type:String,default:"default"},shape:{type:String,default:"circle"},icon:[Function,String],description:String,content:String,tooltip:[String,Object],badge:Object,href:String,target:String,htmlType:{type:String,default:"button"},disabled:Boolean,classNames:Object,styles:Object},emits:["click"],setup(t,{slots:s,emit:c,attrs:l}){const n=P("float-btn"),i=u=>{t.disabled||c("click",u)};return()=>{var S,g,O,G,z,M,H,R,V,A;const u=t.content??t.description,y=u||s.description||s.content,h=t.icon??(y?void 0:rt),m=o("div",{class:C(`${n}-body`,(S=t.classNames)==null?void 0:S.body),style:(g=t.styles)==null?void 0:g.body},[h!==void 0&&o("div",{class:C(`${n}-icon`,(O=t.classNames)==null?void 0:O.icon),style:(G=t.styles)==null?void 0:G.icon},[gt(h,s.icon)]),y&&o("div",{class:C(`${n}-content`,(z=t.classNames)==null?void 0:z.content),style:(M=t.styles)==null?void 0:M.content},[((H=s.content)==null?void 0:H.call(s))??((R=s.description)==null?void 0:R.call(s))??u])]),p=t.badge&&(t.badge.dot||t.badge.count!==void 0)?o(ot,{count:t.badge.count,dot:t.badge.dot,overflowCount:t.badge.overflowCount,color:t.badge.color,offset:t.badge.offset},mt(m)?m:{default:()=>[m]}):m,f=ft(t.tooltip),F=f?o(et,$(f,{placement:f.placement??"left"}),{default:()=>p,...s.tooltip?{title:s.tooltip}:{}}):p,v=C(n,`${n}-${t.type}`,`${n}-${t.shape}`,{[`${n}-disabled`]:t.disabled},(V=t.classNames)==null?void 0:V.root),q=[l.style,(A=t.styles)==null?void 0:A.root];return t.href?o("a",$(l,{class:v,style:q,href:t.href,target:t.target,onClick:i,"aria-disabled":t.disabled}),[F]):o("button",$(l,{type:t.htmlType,class:v,style:q,onClick:i,disabled:t.disabled}),[F])}}}),I=b({name:"FloatButtonGroup",props:{shape:{type:String,default:"circle"},type:{type:String,default:"default"},trigger:String,placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},closeIcon:[Function,String],icon:[Function,String],tooltip:[String,Object],badge:Object,description:String,onOpenChange:Function},emits:["update:open","openChange","click"],setup(t,{slots:s,emit:c}){const l=P("float-btn"),n=T(null),i=T(t.defaultOpen),u=L(()=>t.open!==void 0),y=L(()=>u.value?t.open:i.value),h=m=>{var p;u.value||(i.value=m),c("update:open",m),c("openChange",m),(p=t.onOpenChange)==null||p.call(t,m)};return()=>{var F;const m=!!t.trigger,p=C(`${l}-group`,`${l}-group-${t.shape}`,`${l}-group-${t.placement}`,{[`${l}-group-trigger`]:m,[`${l}-group-open`]:y.value});if(!m)return o("div",{class:p,ref:n},[(F=s.default)==null?void 0:F.call(s)]);const f=y.value?t.closeIcon??st:t.icon??at;return o(ct,{open:u.value?t.open:void 0,defaultOpen:t.defaultOpen,trigger:t.trigger,closeOnOutsideClick:!0,closeOnEscape:!0,mouseEnterDelay:0,mouseLeaveDelay:0,triggerDisplay:"block",popupStyle:{display:"none"},"onUpdate:open":h,onOpenChange:h},{default:()=>o("div",{class:p,ref:n},[o(j,{name:`${l}-group-wrap`},{default:()=>{var v;return[y.value&&o("div",{class:`${l}-group-wrap`,onClick:q=>q.stopPropagation()},[(v=s.default)==null?void 0:v.call(s)])]}}),o(d,{type:t.type,shape:t.shape,icon:f,tooltip:t.tooltip,badge:t.badge,content:t.description,onClick:v=>c("click",v)},null)])})}}}),kt=b({name:"FloatButtonBackTop",props:{visibilityHeight:{type:Number,default:400},target:Function,duration:{type:Number,default:450},icon:[Function,String],type:{type:String,default:"default"},shape:{type:String,default:"circle"},tooltip:[String,Object],content:String,description:String},emits:["click"],setup(t,{slots:s,emit:c}){const l=P("float-btn"),n=T(!1);let i=null;const u=()=>t.target?t.target():window,y=p=>p===window||p===document?document.documentElement.scrollTop||document.body.scrollTop:p.scrollTop,h=()=>{n.value=y(u())>=t.visibilityHeight},m=p=>{const f=u(),F=Date.now(),v=y(f),q=g=>g<.5?4*g*g*g:(g-1)*(2*g-2)*(2*g-2)+1,S=()=>{const g=Math.min((Date.now()-F)/t.duration,1),O=v*(1-q(g));f===window||f===document?window.scrollTo(0,O):f.scrollTop=O,g<1&&requestAnimationFrame(S)};requestAnimationFrame(S),c("click",p)};return Y(()=>{const p=u();i=p===document?window:p,i.addEventListener("scroll",h),h()}),K(()=>{i==null||i.removeEventListener("scroll",h),i=null}),()=>{const p=t.content??t.description;return o(j,{name:`${l}-fade`},{default:()=>[n.value&&o(d,{type:t.type,shape:t.shape,icon:t.icon??ut,tooltip:t.tooltip,content:p,class:`${l}-back-top`,onClick:m},{default:()=>[s.icon?{icon:s.icon}:void 0]})]})}}});d.Group=I;d.BackTop=kt;const bt={class:"back-top-demo__inner"},yt=b({__name:"FloatButtonBackTopDemo",setup(t){const s=T(null),c=()=>s.value,l={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(n,i)=>(x(),B("div",{ref_key:"containerRef",ref:s,class:"back-top-demo"},[a("div",bt,[(x(),B(J,null,X(30,u=>a("p",{key:u},"向下滚动这块区域，第 "+Z(u)+" 行…",1)),64))]),o(e(d).BackTop,{target:c,"visibility-height":80,tooltip:"回到顶部",style:l})],512))}}),ht=w(yt,[["__scopeId","data-v-8cfb5f52"]]),vt=`<template>
  <div ref="containerRef" class="back-top-demo">
    <div class="back-top-demo__inner">
      <p v-for="n in 30" :key="n">向下滚动这块区域，第 {{ n }} 行…</p>
    </div>
    <FloatButton.BackTop :target="getTarget" :visibility-height="80" tooltip="回到顶部" :style="pos" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FloatButton } from '@hmfw/ant-design'

const containerRef = ref<HTMLElement | null>(null)
const getTarget = () => containerRef.value as HTMLElement

const pos = { position: 'absolute', insetInlineEnd: '24px', insetBlockEnd: '24px' } as const
<\/script>

<style scoped>
.back-top-demo {
  position: relative;
  height: 220px;
  overflow: auto;
  border: 1px solid var(--hmfw-color-border, #d9d9d9);
  border-radius: 8px;
  padding: 12px 16px;
}
.back-top-demo__inner p {
  margin: 8px 0;
}
</style>
`,xt={class:"float-btn-showcase"},Bt=b({__name:"FloatButtonBadge",setup(t){const s={position:"static"};return(c,l)=>(x(),B("div",xt,[o(e(d),{badge:{count:5},icon:e(D),style:s},null,8,["icon"]),o(e(d),{badge:{count:128,overflowCount:99},icon:e(D),style:s},null,8,["icon"]),o(e(d),{badge:{dot:!0},icon:e(D),style:s},null,8,["icon"])]))}}),Ft=w(Bt,[["__scopeId","data-v-0b2c4f19"]]),wt=`<template>
  <div class="float-btn-showcase">
    <FloatButton :badge="{ count: 5 }" :icon="InfoCircleOutlined" :style="s" />
    <FloatButton :badge="{ count: 128, overflowCount: 99 }" :icon="InfoCircleOutlined" :style="s" />
    <FloatButton :badge="{ dot: true }" :icon="InfoCircleOutlined" :style="s" />
  </div>
</template>

<script setup lang="ts">
import { FloatButton } from '@hmfw/ant-design'
import { InfoCircleOutlined } from '@hmfw/ant-design'

const s = { position: 'static' } as const
<\/script>

<style scoped>
.float-btn-showcase {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 8px 0;
}
</style>
`,qt={class:"float-btn-demo"},St=b({__name:"FloatButtonBasic",setup(t){const s={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};function c(){console.log("点击悬浮按钮")}return(l,n)=>(x(),B("div",qt,[o(e(d),{tooltip:"点击",style:s,onClick:c})]))}}),Ot=w(St,[["__scopeId","data-v-726185db"]]),Ct=`<template>
  <div class="float-btn-demo">
    <FloatButton tooltip="点击" :style="demoStyle" @click="onClick" />
  </div>
</template>

<script setup lang="ts">
import { FloatButton } from '@hmfw/ant-design'

const demoStyle = { position: 'absolute', insetInlineEnd: '24px', insetBlockEnd: '24px' } as const

function onClick() {
  console.log('点击悬浮按钮')
}
<\/script>

<style scoped>
.float-btn-demo {
  position: relative;
  height: 120px;
  overflow: hidden;
}
</style>
`,_t={style:{display:"flex","flex-direction":"column",gap:"24px"}},Et=b({__name:"FloatButtonClassNames",setup(t){return(s,c)=>(x(),B("div",_t,[a("div",null,[c[0]||(c[0]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根节点（渐变背景）：",-1)),o(e(d),{icon:e(dt),"class-names":{root:"custom-root"},tooltip:"帮助"},null,8,["icon"])]),a("div",null,[c[1]||(c[1]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图标容器（放大图标）：",-1)),o(e(d),{type:"primary",icon:e(lt),"class-names":{icon:"custom-icon"},tooltip:"客服"},null,8,["icon"])]),a("div",null,[c[2]||(c[2]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内容区域（square 形状）：",-1)),o(e(d),{shape:"square",icon:e(it),content:"反馈","class-names":{body:"custom-body",content:"custom-content"}},null,8,["icon"])]),a("div",null,[c[3]||(c[3]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义（多个 key）：",-1)),o(e(d),{shape:"square",icon:e(N),content:"编辑","class-names":{root:"custom-combined-root",body:"custom-combined-body",icon:"custom-combined-icon",content:"custom-combined-content"}},null,8,["icon"])]),a("div",null,[c[4]||(c[4]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),o(e(d),{type:"primary",shape:"square",icon:e(pt),content:"启动",styles:{root:{borderRadius:"12px",boxShadow:"0 4px 16px rgba(22, 119, 255, 0.3)"},body:{padding:"8px"},icon:{fontSize:"20px"},content:{fontWeight:"bold"}}},null,8,["icon"])])]))}}),Tt=w(Et,[["__scopeId","data-v-1935b508"]]),Nt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根节点样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根节点（渐变背景）：</div>
      <FloatButton :icon="QuestionCircleOutlined" :class-names="{ root: 'custom-root' }" tooltip="帮助" />
    </div>

    <!-- 场景 2：自定义图标容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图标容器（放大图标）：</div>
      <FloatButton
        type="primary"
        :icon="CustomerServiceOutlined"
        :class-names="{ icon: 'custom-icon' }"
        tooltip="客服"
      />
    </div>

    <!-- 场景 3：自定义 square 形状的内容区域 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内容区域（square 形状）：</div>
      <FloatButton
        shape="square"
        :icon="CommentOutlined"
        content="反馈"
        :class-names="{ body: 'custom-body', content: 'custom-content' }"
      />
    </div>

    <!-- 场景 4：组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义（多个 key）：</div>
      <FloatButton
        shape="square"
        :icon="EditOutlined"
        content="编辑"
        :class-names="{
          root: 'custom-combined-root',
          body: 'custom-combined-body',
          icon: 'custom-combined-icon',
          content: 'custom-combined-content',
        }"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <FloatButton
        type="primary"
        shape="square"
        :icon="RocketOutlined"
        content="启动"
        :styles="{
          root: { borderRadius: '12px', boxShadow: '0 4px 16px rgba(22, 119, 255, 0.3)' },
          body: { padding: '8px' },
          icon: { fontSize: '20px' },
          content: { fontWeight: 'bold' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FloatButton,
  QuestionCircleOutlined,
  CustomerServiceOutlined,
  CommentOutlined,
  EditOutlined,
  RocketOutlined,
} from '@hmfw/ant-design'
<\/script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

:deep(.custom-icon) {
  font-size: 20px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

:deep(.custom-body) {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

:deep(.custom-content) {
  color: #52c41a;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

:deep(.custom-combined-root) {
  background: linear-gradient(to right, #fa8c16, #faad14);
  border: 2px solid #fff;
  box-shadow: 0 4px 12px rgba(250, 140, 22, 0.4);
}

:deep(.custom-combined-body) {
  padding: 4px;
}

:deep(.custom-combined-icon) {
  color: #fff;
  font-size: 18px;
}

:deep(.custom-combined-content) {
  color: #fff;
  font-size: 12px;
  margin-top: 2px;
}
</style>
`,It={class:"float-btn-demo"},$t=b({__name:"FloatButtonGroupDemo",setup(t){const s={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(c,l)=>(x(),B("div",It,[o(e(I),{shape:"circle",style:s},{default:k(()=>[o(e(d),{icon:e(N),tooltip:"编辑"},null,8,["icon"]),o(e(d),{icon:e(Q),tooltip:"删除"},null,8,["icon"]),o(e(d),{icon:e(W),tooltip:"搜索"},null,8,["icon"])]),_:1})]))}}),Dt=w($t,[["__scopeId","data-v-a3d0d027"]]),Pt=`<template>
  <div class="float-btn-demo">
    <FloatButtonGroup shape="circle" :style="pos">
      <FloatButton :icon="EditOutlined" tooltip="编辑" />
      <FloatButton :icon="DeleteOutlined" tooltip="删除" />
      <FloatButton :icon="SearchOutlined" tooltip="搜索" />
    </FloatButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { FloatButton, FloatButtonGroup } from '@hmfw/ant-design'
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@hmfw/ant-design'

const pos = { position: 'absolute', insetInlineEnd: '24px', insetBlockEnd: '24px' } as const
<\/script>

<style scoped>
.float-btn-demo {
  position: relative;
  height: 220px;
  overflow: hidden;
}
</style>
`,Gt={class:"float-btn-demo"},zt=b({__name:"FloatButtonMenu",setup(t){const s={position:"absolute",insetInlineEnd:"120px",insetBlockEnd:"24px"},c={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(l,n)=>(x(),B("div",Gt,[o(e(I),{trigger:"click",type:"primary",icon:e(_),style:s},{default:k(()=>[o(e(d),{icon:e(N),tooltip:"编辑"},null,8,["icon"]),o(e(d),{icon:e(W),tooltip:"搜索"},null,8,["icon"])]),_:1},8,["icon"]),o(e(I),{trigger:"hover",style:c},{default:k(()=>[o(e(d),{icon:e(N),tooltip:"编辑"},null,8,["icon"]),o(e(d),{icon:e(Q),tooltip:"删除"},null,8,["icon"])]),_:1})]))}}),Mt=w(zt,[["__scopeId","data-v-022b3d62"]]),Ht=`<template>
  <div class="float-btn-demo">
    <FloatButtonGroup trigger="click" type="primary" :icon="SettingOutlined" :style="left">
      <FloatButton :icon="EditOutlined" tooltip="编辑" />
      <FloatButton :icon="SearchOutlined" tooltip="搜索" />
    </FloatButtonGroup>

    <FloatButtonGroup trigger="hover" :style="right">
      <FloatButton :icon="EditOutlined" tooltip="编辑" />
      <FloatButton :icon="DeleteOutlined" tooltip="删除" />
    </FloatButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { FloatButton, FloatButtonGroup } from '@hmfw/ant-design'
import { SettingOutlined, EditOutlined, SearchOutlined, DeleteOutlined } from '@hmfw/ant-design'

const left = { position: 'absolute', insetInlineEnd: '120px', insetBlockEnd: '24px' } as const
const right = { position: 'absolute', insetInlineEnd: '24px', insetBlockEnd: '24px' } as const
<\/script>

<style scoped>
.float-btn-demo {
  position: relative;
  height: 240px;
  overflow: hidden;
}
</style>
`,Rt={class:"float-btn-showcase"},Vt=b({__name:"FloatButtonTypes",setup(t){const s={position:"static"};return(c,l)=>(x(),B("div",Rt,[o(e(d),{icon:e(_),style:s},null,8,["icon"]),o(e(d),{type:"primary",icon:e(_),style:s},null,8,["icon"]),o(e(d),{shape:"square",icon:e(_),style:s},null,8,["icon"]),o(e(d),{type:"primary",shape:"square",icon:e(_),style:s},null,8,["icon"]),o(e(d),{type:"primary",shape:"square",description:"文档",style:s})]))}}),At=w(Vt,[["__scopeId","data-v-ad453991"]]),Lt=`<template>
  <div class="float-btn-showcase">
    <FloatButton :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" :icon="SettingOutlined" :style="s" />
    <FloatButton shape="square" :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" shape="square" :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" shape="square" description="文档" :style="s" />
  </div>
</template>

<script setup lang="ts">
import { FloatButton } from '@hmfw/ant-design'
import { SettingOutlined } from '@hmfw/ant-design'

// Render inline within the demo box instead of fixed to the viewport
const s = { position: 'static' } as const
<\/script>

<style scoped>
.float-btn-showcase {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 8px 0;
}
</style>
`,jt={class:"markdown-body"},sn={__name:"float-button",setup(t,{expose:s}){return s({frontmatter:{}}),(l,n)=>{const i=tt("DemoBlock");return x(),B("div",jt,[n[0]||(n[0]=a("h1",{id:"floatbutton-悬浮按钮",tabindex:"-1"},"FloatButton 悬浮按钮",-1)),n[1]||(n[1]=a("p",null,"悬浮于页面上方的按钮。",-1)),n[2]||(n[2]=a("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=a("ul",null,[a("li",null,"用于网站上的全局功能"),a("li",null,"无论浏览到页面的哪个位置，都可以看见的按钮")],-1)),n[4]||(n[4]=a("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=a("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=a("p",null,"最简单的用法。",-1)),o(i,{title:"基础用法",source:e(Ct)},{default:k(()=>[o(Ot)]),_:1},8,["source"]),n[7]||(n[7]=a("h3",{id:"不同类型",tabindex:"-1"},"不同类型",-1)),n[8]||(n[8]=a("p",null,[r("提供 "),a("code",null,"default"),r(" 和 "),a("code",null,"primary"),r(" 两种类型，以及 "),a("code",null,"circle"),r(" 和 "),a("code",null,"square"),r(" 两种形状。")],-1)),o(i,{title:"不同类型",source:e(Lt)},{default:k(()=>[o(At)]),_:1},8,["source"]),n[9]||(n[9]=a("h3",{id:"徽标数字",tabindex:"-1"},"徽标数字",-1)),n[10]||(n[10]=a("p",null,"带徽标的悬浮按钮，徽标基于 Badge 组件实现。",-1)),o(i,{title:"徽标数字",source:e(wt)},{default:k(()=>[o(Ft)]),_:1},8,["source"]),n[11]||(n[11]=a("h3",{id:"浮动按钮组",tabindex:"-1"},"浮动按钮组",-1)),n[12]||(n[12]=a("p",null,[r("使用 "),a("code",null,"FloatButtonGroup"),r(" 可以将多个悬浮按钮组合在一起。设置 "),a("code",null,"trigger"),r(" 后会折叠为可展开的菜单。")],-1)),o(i,{title:"浮动按钮组",source:e(Pt)},{default:k(()=>[o(Dt)]),_:1},8,["source"]),n[13]||(n[13]=a("h3",{id:"菜单模式",tabindex:"-1"},"菜单模式",-1)),n[14]||(n[14]=a("p",null,[r("设置 "),a("code",null,"trigger"),r(" 为 "),a("code",null,"hover"),r(" 或 "),a("code",null,"click"),r("，鼠标悬停或点击展开菜单。")],-1)),o(i,{title:"菜单模式",source:e(Ht)},{default:k(()=>[o(Mt)]),_:1},8,["source"]),n[15]||(n[15]=a("h3",{id:"回到顶部",tabindex:"-1"},"回到顶部",-1)),n[16]||(n[16]=a("p",null,[a("code",null,"FloatButton.BackTop"),r(" 返回页面顶部的操作按钮。")],-1)),o(i,{title:"回到顶部",source:e(vt)},{default:k(()=>[o(ht)]),_:1},8,["source"]),n[17]||(n[17]=a("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[18]||(n[18]=a("p",null,[r("通过 "),a("code",null,"classNames"),r(" / "),a("code",null,"styles"),r(" 对各子元素做细粒度样式控制。")],-1)),o(i,{title:"语义化 className 与 style",source:e(Nt)},{default:k(()=>[o(Tt)]),_:1},8,["source"]),n[19]||(n[19]=nt(`<h2 id="api" tabindex="-1">API</h2><p>组件提供了三种使用方式：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> FloatButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>

<span class="token comment">// 复合写法</span>
<span class="token operator">&lt;</span>FloatButton <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>FloatButton<span class="token punctuation">.</span>Group <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>FloatButton<span class="token punctuation">.</span>BackTop <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 或具名导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FloatButton<span class="token punctuation">,</span> FloatButtonGroup<span class="token punctuation">,</span> FloatButtonBackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>
</code></pre><h3 id="floatbutton-props" tabindex="-1">FloatButton Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>设置按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>设置按钮形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>icon</td><td>自定义图标</td><td><code>IconComponent | string | slot</code></td><td><code>FileTextOutlined</code></td></tr><tr><td>content</td><td>文字及其他内容，仅 <code>square</code> 形状展示</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>description</td><td>文字及其他内容（已废弃，请使用 <code>content</code>）</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>tooltip</td><td>气泡提示的内容</td><td><code>string | TooltipProps | slot</code></td><td>-</td></tr><tr><td>badge</td><td>带徽标数字的悬浮按钮</td><td><code>{ count?, dot?, overflowCount?, color?, offset? }</code></td><td>-</td></tr><tr><td>href</td><td>点击跳转的地址，指定时渲染为 <code>a</code> 标签</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>相当于 <code>a</code> 标签的 <code>target</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>htmlType</td><td>设置原生 <code>button</code> 的 <code>type</code></td><td><code>&#39;submit&#39; | &#39;reset&#39; | &#39;button&#39;</code></td><td><code>&#39;button&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>FloatButtonClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>FloatButtonStyles</code></td><td>-</td></tr></tbody></table><h3 id="floatbutton-events" tabindex="-1">FloatButton Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="floatbuttongroup-props" tabindex="-1">FloatButton.Group Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>触发方式（不设置时默认展示所有子按钮）</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td>-</td></tr><tr><td>type</td><td>设置触发按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>设置子按钮形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>placement</td><td>自定义菜单展开方向</td><td><code>&#39;top&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;left&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>open</td><td>受控展开状态</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认展开状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>触发按钮的图标</td><td><code>IconComponent | string</code></td><td><code>PlusOutlined</code></td></tr><tr><td>closeIcon</td><td>展开时触发按钮的图标</td><td><code>IconComponent | string</code></td><td><code>CloseOutlined</code></td></tr><tr><td>tooltip</td><td>触发按钮的气泡提示</td><td><code>string | TooltipProps</code></td><td>-</td></tr><tr><td>badge</td><td>触发按钮的徽标</td><td><code>FloatButtonBadgeProps</code></td><td>-</td></tr><tr><td>description</td><td>触发按钮的描述（square 形状）</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="floatbuttongroup-events" tabindex="-1">FloatButton.Group Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>openChange / update:open</td><td>展开状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>click</td><td>点击触发按钮时的回调（仅菜单模式）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="floatbuttonbacktop-props" tabindex="-1">FloatButton.BackTop Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityHeight</td><td>滚动高度达到此参数值才出现</td><td><code>number</code></td><td><code>400</code></td></tr><tr><td>target</td><td>设置需要监听其滚动事件的元素</td><td><code>() =&gt; HTMLElement | Window | Document</code></td><td><code>() =&gt; window</code></td></tr><tr><td>duration</td><td>回到顶部所需时间（ms）</td><td><code>number</code></td><td><code>450</code></td></tr><tr><td>icon</td><td>自定义图标</td><td><code>IconComponent | string</code></td><td><code>VerticalAlignTopOutlined</code></td></tr><tr><td>type</td><td>设置按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>设置按钮形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>tooltip</td><td>气泡提示的内容</td><td><code>string | TooltipProps</code></td><td>-</td></tr><tr><td>content</td><td>文字及其他内容（square 形状）</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>文字及其他内容（已废弃，请使用 <code>content</code>）</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="floatbuttonbacktop-events" tabindex="-1">FloatButton.BackTop Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">FloatButtonClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点（button 或 a 标签）</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 主体容器</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 图标容器</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 文本内容容器（仅 square 形状显示）</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">FloatButtonStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  body<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  icon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- circle 形状（仅图标） --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-float-btn hmfw-float-btn-default hmfw-float-btn-circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-float-btn-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-float-btn-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- square 形状（图标 + 文本） --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-float-btn hmfw-float-btn-primary hmfw-float-btn-square<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-float-btn-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-float-btn-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-float-btn-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
      反馈
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义根节点渐变背景 --&gt;
  &lt;FloatButton :icon=&quot;QuestionCircleOutlined&quot; :class-names=&quot;{ root: &#39;custom-root&#39; }&quot; tooltip=&quot;帮助&quot; /&gt;

  &lt;!-- 自定义图标和内容区域 --&gt;
  &lt;FloatButton
    shape=&quot;square&quot;
    :icon=&quot;CommentOutlined&quot;
    content=&quot;反馈&quot;
    :class-names=&quot;{ icon: &#39;custom-icon&#39;, content: &#39;custom-content&#39; }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

:deep(.custom-icon) {
  font-size: 20px;
  color: #52c41a;
}

:deep(.custom-content) {
  font-weight: bold;
  color: #1677ff;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制根节点和图标 --&gt;
  &lt;FloatButton
    type=&quot;primary&quot;
    :icon=&quot;CustomerServiceOutlined&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;12px&#39; },
      icon: { fontSize: &#39;20px&#39; },
    }&quot;
  /&gt;

  &lt;!-- square 形状完整样式定制 --&gt;
  &lt;FloatButton
    shape=&quot;square&quot;
    :icon=&quot;RocketOutlined&quot;
    content=&quot;启动&quot;
    :styles=&quot;{
      root: { boxShadow: &#39;0 4px 16px rgba(22, 119, 255, 0.3)&#39; },
      body: { padding: &#39;8px&#39; },
      icon: { fontSize: &#39;20px&#39; },
      content: { fontWeight: &#39;bold&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>content</code> key 仅在 <code>shape=&quot;square&quot;</code> 时渲染，<code>circle</code> 形状不显示文本内容</li><li>Badge 和 Tooltip 是外部组件，不在 <code>classNames</code> / <code>styles</code> 控制范围内</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-float-btn-disabled</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>FloatButton 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>浮层背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>三级填充色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-light-solid</code></td><td>浅色文本色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-font-family</code></td><td>字体族</td><td><code>-apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, &#39;Helvetica Neue&#39;, …</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,33))])}}};export{sn as default};
