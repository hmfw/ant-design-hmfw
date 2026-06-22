import{p as E,o as v,N as M,n as o,s as $,E as T,x as j,w as Q,c as W,f as A,r as J,A as x,k as B,h as a,F as K,G as X,J as Z,K as e,_ as C,R as y,H as tt,m as u,l as nt}from"./index-X2tFbSxS.js";import{B as ot}from"./index-CNry2Pj7.js";import{c as O}from"./cls-S9IiI6wd.js";import{T as et}from"./Tooltip-aKqr0x27.js";import{C as st}from"./CloseOutlined-CLskzqDI.js";import{P as at}from"./PlusOutlined-Cuj-XGu6.js";import{I as ct}from"./Icon-CTmWlmQC.js";import{I as D,Q as lt,a as dt,C as it,E as N,R as pt}from"./RocketOutlined-BKDIExJm.js";import{D as U}from"./DeleteOutlined-DNJrr07t.js";import{S as Y}from"./SearchOutlined-kq83buNV.js";import{S as _}from"./SettingOutlined-CGK8VqEB.js";const rt=()=>E("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",focusable:!1},[E("path",{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-178H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm192 356H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h376c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"})]),ut=()=>E("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",focusable:!1},[E("path",{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"})]);function mt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!J(t)}function gt(t,s){const c=s==null?void 0:s();if(c&&c.length)return c;if(t)return typeof t=="string"?t:o(ct,{component:t},null)}function ft(t){if(t)return typeof t=="string"?{title:t}:t}const l=v({name:"FloatButton",inheritAttrs:!1,props:{type:{type:String,default:"default"},shape:{type:String,default:"circle"},icon:[Function,String],description:String,content:String,tooltip:[String,Object],badge:Object,href:String,target:String,htmlType:{type:String,default:"button"},disabled:Boolean,classNames:Object,styles:Object},emits:["click"],setup(t,{slots:s,emit:c,attrs:i}){const n=M("float-btn"),d=g=>{t.disabled||c("click",g)};return()=>{var S,r,w,G,P,z,R,H,L,V;const g=t.content??t.description,f=g||s.description||s.content,k=t.icon??(f?void 0:rt),F=o("div",{class:O(`${n}-body`,(S=t.classNames)==null?void 0:S.body),style:(r=t.styles)==null?void 0:r.body},[k!==void 0&&o("div",{class:O(`${n}-icon`,(w=t.classNames)==null?void 0:w.icon),style:(G=t.styles)==null?void 0:G.icon},[gt(k,s.icon)]),f&&o("div",{class:O(`${n}-content`,(P=t.classNames)==null?void 0:P.content),style:(z=t.styles)==null?void 0:z.content},[((R=s.content)==null?void 0:R.call(s))??((H=s.description)==null?void 0:H.call(s))??g])]),m=t.badge&&(t.badge.dot||t.badge.count!==void 0)?o(ot,{count:t.badge.count,dot:t.badge.dot,overflowCount:t.badge.overflowCount,color:t.badge.color,offset:t.badge.offset},mt(F)?F:{default:()=>[F]}):F,b=ft(t.tooltip),q=b?o(et,$(b,{placement:b.placement??"left"}),{default:()=>m,...s.tooltip?{title:s.tooltip}:{}}):m,p=O(n,`${n}-${t.type}`,`${n}-${t.shape}`,{[`${n}-disabled`]:t.disabled},(L=t.classNames)==null?void 0:L.root),h=[i.style,(V=t.styles)==null?void 0:V.root];return t.href?o("a",$(i,{class:p,style:h,href:t.href,target:t.target,onClick:d,"aria-disabled":t.disabled}),[q]):o("button",$(i,{type:t.htmlType,class:p,style:h,onClick:d,disabled:t.disabled}),[q])}}}),I=v({name:"FloatButtonGroup",props:{shape:{type:String,default:"circle"},type:{type:String,default:"default"},trigger:String,placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},closeIcon:[Function,String],icon:[Function,String],tooltip:[String,Object],badge:Object,description:String,onOpenChange:Function},emits:["update:open","openChange","click"],setup(t,{slots:s,emit:c}){const i=M("float-btn"),n=T(t.defaultOpen),d=T(null),g=A(()=>t.open!==void 0),f=A(()=>g.value?t.open:n.value),k=p=>{var h;p!==f.value&&(g.value||(n.value=p),c("update:open",p),c("openChange",p),(h=t.onOpenChange)==null||h.call(t,p))},F=p=>{t.trigger==="click"&&k(!f.value),c("click",p)},m=()=>{t.trigger==="hover"&&k(!0)},b=()=>{t.trigger==="hover"&&k(!1)},q=p=>{t.trigger==="click"&&f.value&&d.value&&!d.value.contains(p.target)&&k(!1)};return j(()=>{t.trigger==="click"&&document.addEventListener("click",q,{capture:!0})}),Q(()=>{t.trigger==="click"&&document.removeEventListener("click",q,{capture:!0})}),()=>{var r;const p=!!t.trigger,h=O(`${i}-group`,`${i}-group-${t.shape}`,`${i}-group-${t.placement}`,{[`${i}-group-trigger`]:p,[`${i}-group-open`]:f.value});if(!p)return o("div",{class:h,ref:d},[(r=s.default)==null?void 0:r.call(s)]);const S=f.value?t.closeIcon??st:t.icon??at;return o("div",{class:h,ref:d,onMouseenter:m,onMouseleave:b},[o(W,{name:`${i}-group-wrap`},{default:()=>{var w;return[f.value&&o("div",{class:`${i}-group-wrap`},[(w=s.default)==null?void 0:w.call(s)])]}}),o(l,{type:t.type,shape:t.shape,icon:S,tooltip:t.tooltip,badge:t.badge,content:t.description,onClick:F},null)])}}}),kt=v({name:"FloatButtonBackTop",props:{visibilityHeight:{type:Number,default:400},target:Function,duration:{type:Number,default:450},icon:[Function,String],type:{type:String,default:"default"},shape:{type:String,default:"circle"},tooltip:[String,Object],content:String,description:String},emits:["click"],setup(t,{slots:s,emit:c}){const i=M("float-btn"),n=T(!1);let d=null;const g=()=>t.target?t.target():window,f=m=>m===window||m===document?document.documentElement.scrollTop||document.body.scrollTop:m.scrollTop,k=()=>{n.value=f(g())>=t.visibilityHeight},F=m=>{const b=g(),q=Date.now(),p=f(b),h=r=>r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1,S=()=>{const r=Math.min((Date.now()-q)/t.duration,1),w=p*(1-h(r));b===window||b===document?window.scrollTo(0,w):b.scrollTop=w,r<1&&requestAnimationFrame(S)};requestAnimationFrame(S),c("click",m)};return j(()=>{const m=g();d=m===document?window:m,d.addEventListener("scroll",k),k()}),Q(()=>{d==null||d.removeEventListener("scroll",k),d=null}),()=>{const m=t.content??t.description;return o(W,{name:`${i}-fade`},{default:()=>[n.value&&o(l,{type:t.type,shape:t.shape,icon:t.icon??ut,tooltip:t.tooltip,content:m,class:`${i}-back-top`,onClick:F},{default:()=>[s.icon?{icon:s.icon}:void 0]})]})}}});l.Group=I;l.BackTop=kt;const bt={class:"back-top-demo__inner"},ht=v({__name:"FloatButtonBackTopDemo",setup(t){const s=T(null),c=()=>s.value,i={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(n,d)=>(x(),B("div",{ref_key:"containerRef",ref:s,class:"back-top-demo"},[a("div",bt,[(x(),B(K,null,X(30,g=>a("p",{key:g},"向下滚动这块区域，第 "+Z(g)+" 行…",1)),64))]),o(e(l).BackTop,{target:c,"visibility-height":80,tooltip:"回到顶部",style:i})],512))}}),yt=C(ht,[["__scopeId","data-v-2e513531"]]),vt=`<template>
  <div ref="containerRef" class="back-top-demo">
    <div class="back-top-demo__inner">
      <p v-for="n in 30" :key="n">向下滚动这块区域，第 {{ n }} 行…</p>
    </div>
    <FloatButton.BackTop :target="getTarget" :visibility-height="80" tooltip="回到顶部" :style="pos" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FloatButton } from 'ant-design-hmfw'

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
`,xt={class:"float-btn-showcase"},Bt=v({__name:"FloatButtonBadge",setup(t){const s={position:"static"};return(c,i)=>(x(),B("div",xt,[o(e(l),{badge:{count:5},icon:e(D),style:s},null,8,["icon"]),o(e(l),{badge:{count:128,overflowCount:99},icon:e(D),style:s},null,8,["icon"]),o(e(l),{badge:{dot:!0},icon:e(D),style:s},null,8,["icon"])]))}}),Ft=C(Bt,[["__scopeId","data-v-e2adcfa0"]]),wt=`<template>
  <div class="float-btn-showcase">
    <FloatButton :badge="{ count: 5 }" :icon="InfoCircleOutlined" :style="s" />
    <FloatButton :badge="{ count: 128, overflowCount: 99 }" :icon="InfoCircleOutlined" :style="s" />
    <FloatButton :badge="{ dot: true }" :icon="InfoCircleOutlined" :style="s" />
  </div>
</template>

<script setup lang="ts">
import { FloatButton } from 'ant-design-hmfw'
import { InfoCircleOutlined } from 'ant-design-hmfw'

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
`,qt={class:"float-btn-demo"},St=v({__name:"FloatButtonBasic",setup(t){const s={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};function c(){console.log("点击悬浮按钮")}return(i,n)=>(x(),B("div",qt,[o(e(l),{tooltip:"点击",style:s,onClick:c})]))}}),Ct=C(St,[["__scopeId","data-v-11138d77"]]),Ot=`<template>
  <div class="float-btn-demo">
    <FloatButton tooltip="点击" :style="demoStyle" @click="onClick" />
  </div>
</template>

<script setup lang="ts">
import { FloatButton } from 'ant-design-hmfw'

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
`,_t={style:{display:"flex","flex-direction":"column",gap:"24px"}},Et=v({__name:"FloatButtonClassNames",setup(t){return(s,c)=>(x(),B("div",_t,[a("div",null,[c[0]||(c[0]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根节点（渐变背景）：",-1)),o(e(l),{icon:e(lt),"class-names":{root:"custom-root"},tooltip:"帮助"},null,8,["icon"])]),a("div",null,[c[1]||(c[1]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图标容器（放大图标）：",-1)),o(e(l),{type:"primary",icon:e(dt),"class-names":{icon:"custom-icon"},tooltip:"客服"},null,8,["icon"])]),a("div",null,[c[2]||(c[2]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内容区域（square 形状）：",-1)),o(e(l),{shape:"square",icon:e(it),content:"反馈","class-names":{body:"custom-body",content:"custom-content"}},null,8,["icon"])]),a("div",null,[c[3]||(c[3]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义（多个 key）：",-1)),o(e(l),{shape:"square",icon:e(N),content:"编辑","class-names":{root:"custom-combined-root",body:"custom-combined-body",icon:"custom-combined-icon",content:"custom-combined-content"}},null,8,["icon"])]),a("div",null,[c[4]||(c[4]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),o(e(l),{type:"primary",shape:"square",icon:e(pt),content:"启动",styles:{root:{borderRadius:"12px",boxShadow:"0 4px 16px rgba(22, 119, 255, 0.3)"},body:{padding:"8px"},icon:{fontSize:"20px"},content:{fontWeight:"bold"}}},null,8,["icon"])])]))}}),Tt=C(Et,[["__scopeId","data-v-3393f5cc"]]),Nt=`<template>
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
} from 'ant-design-hmfw'
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
`,It={class:"float-btn-demo"},$t=v({__name:"FloatButtonGroupDemo",setup(t){const s={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(c,i)=>(x(),B("div",It,[o(e(I),{shape:"circle",style:s},{default:y(()=>[o(e(l),{icon:e(N),tooltip:"编辑"},null,8,["icon"]),o(e(l),{icon:e(U),tooltip:"删除"},null,8,["icon"]),o(e(l),{icon:e(Y),tooltip:"搜索"},null,8,["icon"])]),_:1})]))}}),Dt=C($t,[["__scopeId","data-v-3ab51241"]]),Mt=`<template>
  <div class="float-btn-demo">
    <FloatButtonGroup shape="circle" :style="pos">
      <FloatButton :icon="EditOutlined" tooltip="编辑" />
      <FloatButton :icon="DeleteOutlined" tooltip="删除" />
      <FloatButton :icon="SearchOutlined" tooltip="搜索" />
    </FloatButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { FloatButton, FloatButtonGroup } from 'ant-design-hmfw'
import { EditOutlined, DeleteOutlined, SearchOutlined } from 'ant-design-hmfw'

const pos = { position: 'absolute', insetInlineEnd: '24px', insetBlockEnd: '24px' } as const
<\/script>

<style scoped>
.float-btn-demo {
  position: relative;
  height: 220px;
  overflow: hidden;
}
</style>
`,Gt={class:"float-btn-demo"},Pt=v({__name:"FloatButtonMenu",setup(t){const s={position:"absolute",insetInlineEnd:"120px",insetBlockEnd:"24px"},c={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(i,n)=>(x(),B("div",Gt,[o(e(I),{trigger:"click",type:"primary",icon:e(_),style:s},{default:y(()=>[o(e(l),{icon:e(N),tooltip:"编辑"},null,8,["icon"]),o(e(l),{icon:e(Y),tooltip:"搜索"},null,8,["icon"])]),_:1},8,["icon"]),o(e(I),{trigger:"hover",style:c},{default:y(()=>[o(e(l),{icon:e(N),tooltip:"编辑"},null,8,["icon"]),o(e(l),{icon:e(U),tooltip:"删除"},null,8,["icon"])]),_:1})]))}}),zt=C(Pt,[["__scopeId","data-v-9b1f4366"]]),Rt=`<template>
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
import { FloatButton, FloatButtonGroup } from 'ant-design-hmfw'
import { SettingOutlined, EditOutlined, SearchOutlined, DeleteOutlined } from 'ant-design-hmfw'

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
`,Ht={class:"float-btn-showcase"},Lt=v({__name:"FloatButtonTypes",setup(t){const s={position:"static"};return(c,i)=>(x(),B("div",Ht,[o(e(l),{icon:e(_),style:s},null,8,["icon"]),o(e(l),{type:"primary",icon:e(_),style:s},null,8,["icon"]),o(e(l),{shape:"square",icon:e(_),style:s},null,8,["icon"]),o(e(l),{type:"primary",shape:"square",icon:e(_),style:s},null,8,["icon"]),o(e(l),{type:"primary",shape:"square",description:"文档",style:s})]))}}),Vt=C(Lt,[["__scopeId","data-v-cf4c6b3a"]]),At=`<template>
  <div class="float-btn-showcase">
    <FloatButton :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" :icon="SettingOutlined" :style="s" />
    <FloatButton shape="square" :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" shape="square" :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" shape="square" description="文档" :style="s" />
  </div>
</template>

<script setup lang="ts">
import { FloatButton } from 'ant-design-hmfw'
import { SettingOutlined } from 'ant-design-hmfw'

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
`,jt={class:"markdown-body"},en={__name:"float-button",setup(t,{expose:s}){return s({frontmatter:{}}),(i,n)=>{const d=tt("DemoBlock");return x(),B("div",jt,[n[0]||(n[0]=a("h1",{id:"floatbutton-悬浮按钮",tabindex:"-1"},"FloatButton 悬浮按钮",-1)),n[1]||(n[1]=a("p",null,"悬浮于页面上方的按钮。",-1)),n[2]||(n[2]=a("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=a("ul",null,[a("li",null,"用于网站上的全局功能"),a("li",null,"无论浏览到页面的哪个位置，都可以看见的按钮")],-1)),n[4]||(n[4]=a("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=a("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=a("p",null,"最简单的用法。",-1)),o(d,{title:"基础用法",source:e(Ot)},{default:y(()=>[o(Ct)]),_:1},8,["source"]),n[7]||(n[7]=a("h3",{id:"不同类型",tabindex:"-1"},"不同类型",-1)),n[8]||(n[8]=a("p",null,[u("提供 "),a("code",null,"default"),u(" 和 "),a("code",null,"primary"),u(" 两种类型，以及 "),a("code",null,"circle"),u(" 和 "),a("code",null,"square"),u(" 两种形状。")],-1)),o(d,{title:"不同类型",source:e(At)},{default:y(()=>[o(Vt)]),_:1},8,["source"]),n[9]||(n[9]=a("h3",{id:"徽标数字",tabindex:"-1"},"徽标数字",-1)),n[10]||(n[10]=a("p",null,"带徽标的悬浮按钮，徽标基于 Badge 组件实现。",-1)),o(d,{title:"徽标数字",source:e(wt)},{default:y(()=>[o(Ft)]),_:1},8,["source"]),n[11]||(n[11]=a("h3",{id:"浮动按钮组",tabindex:"-1"},"浮动按钮组",-1)),n[12]||(n[12]=a("p",null,[u("使用 "),a("code",null,"FloatButtonGroup"),u(" 可以将多个悬浮按钮组合在一起。设置 "),a("code",null,"trigger"),u(" 后会折叠为可展开的菜单。")],-1)),o(d,{title:"浮动按钮组",source:e(Mt)},{default:y(()=>[o(Dt)]),_:1},8,["source"]),n[13]||(n[13]=a("h3",{id:"菜单模式",tabindex:"-1"},"菜单模式",-1)),n[14]||(n[14]=a("p",null,[u("设置 "),a("code",null,"trigger"),u(" 为 "),a("code",null,"hover"),u(" 或 "),a("code",null,"click"),u("，鼠标悬停或点击展开菜单。")],-1)),o(d,{title:"菜单模式",source:e(Rt)},{default:y(()=>[o(zt)]),_:1},8,["source"]),n[15]||(n[15]=a("h3",{id:"回到顶部",tabindex:"-1"},"回到顶部",-1)),n[16]||(n[16]=a("p",null,[a("code",null,"FloatButton.BackTop"),u(" 返回页面顶部的操作按钮。")],-1)),o(d,{title:"回到顶部",source:e(vt)},{default:y(()=>[o(yt)]),_:1},8,["source"]),n[17]||(n[17]=a("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[18]||(n[18]=a("p",null,[u("通过 "),a("code",null,"classNames"),u(" / "),a("code",null,"styles"),u(" 对各子元素做细粒度样式控制。")],-1)),o(d,{title:"语义化 className 与 style",source:e(Nt)},{default:y(()=>[o(Tt)]),_:1},8,["source"]),n[19]||(n[19]=nt(`<h2 id="api" tabindex="-1">API</h2><p>组件提供了三种使用方式：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> FloatButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>

<span class="token comment">// 复合写法</span>
<span class="token operator">&lt;</span>FloatButton <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>FloatButton<span class="token punctuation">.</span>Group <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>FloatButton<span class="token punctuation">.</span>BackTop <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 或具名导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FloatButton<span class="token punctuation">,</span> FloatButtonGroup<span class="token punctuation">,</span> FloatButtonBackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>
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
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>content</code> key 仅在 <code>shape=&quot;square&quot;</code> 时渲染，<code>circle</code> 形状不显示文本内容</li><li>Badge 和 Tooltip 是外部组件，不在 <code>classNames</code> / <code>styles</code> 控制范围内</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-float-btn-disabled</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>FloatButton 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>浮层背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>三级填充色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-light-solid</code></td><td>浅色文本色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-font-family</code></td><td>字体族</td><td><code>-apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, &#39;Helvetica Neue&#39;, …</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,33))])}}};export{en as default};
