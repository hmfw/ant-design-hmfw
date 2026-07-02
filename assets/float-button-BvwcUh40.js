import{v as T,d as b,u as P,c as s,s as $,r as E,T as L,a as j,B as U,k as Y,y as J,o as x,b as B,f as e,F as K,z as X,A as Z,e as a,_ as q,w as f,h as tt,g as u,i as nt}from"./index-DpCWj_RH.js";import{B as st}from"./index-DCqDR_0S.js";import{c as O}from"./cls-S9IiI6wd.js";import{T as at}from"./Tooltip-CGkZ9PxR.js";import{C as ot}from"./CloseOutlined-BtOkW6a2.js";import{P as et}from"./PlusOutlined-CWRbwEri.js";import{T as ct}from"./Trigger-BvJ5OT70.js";import{I as D,Q as pt,C as lt,a as dt,R as it}from"./RocketOutlined-B_aREE1x.js";import{E as N}from"./EditOutlined-CCHIQR47.js";import{D as Q}from"./DeleteOutlined-C3ChhOJJ.js";import{S as W}from"./SearchOutlined-BQExkVTi.js";import{S as _}from"./SettingOutlined-DPHRWPDI.js";const ut=()=>T("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",focusable:!1},[T("path",{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-178H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm192 356H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h376c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"})]),rt=()=>T("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",focusable:!1},[T("path",{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"})]);function kt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!U(t)}function mt(t,o){const c=o==null?void 0:o();return c&&c.length?c:t?typeof t=="string"?t:s(t,{class:"hmfw-icon"},null):void 0}function gt(t){if(t)return typeof t=="string"?{title:t}:t}const p=b({name:"FloatButton",inheritAttrs:!1,props:{type:{type:String,default:"default"},shape:{type:String,default:"circle"},icon:[Function,String],description:String,content:String,tooltip:[String,Object],badge:Object,href:String,target:String,htmlType:{type:String,default:"button"},disabled:Boolean,classNames:Object,styles:Object},emits:["click"],setup(t,{slots:o,emit:c,attrs:l}){const n=P("float-btn"),d=r=>{t.disabled||c("click",r)};return()=>{var S,m,C,z,G,M,R,H,V,A;const r=t.content??t.description,y=r||o.description||o.content,h=t.icon??(y?void 0:ut),k=s("div",{class:O(`${n}-body`,(S=t.classNames)==null?void 0:S.body),style:(m=t.styles)==null?void 0:m.body},[h!==void 0&&s("div",{class:O(`${n}-icon`,(C=t.classNames)==null?void 0:C.icon),style:(z=t.styles)==null?void 0:z.icon},[mt(h,o.icon)]),y&&s("div",{class:O(`${n}-content`,(G=t.classNames)==null?void 0:G.content),style:(M=t.styles)==null?void 0:M.content},[((R=o.content)==null?void 0:R.call(o))??((H=o.description)==null?void 0:H.call(o))??r])]),i=t.badge&&(t.badge.dot||t.badge.count!==void 0)?s(st,{count:t.badge.count,dot:t.badge.dot,overflowCount:t.badge.overflowCount,color:t.badge.color,offset:t.badge.offset},kt(k)?k:{default:()=>[k]}):k,g=gt(t.tooltip),F=g?s(at,$(g,{placement:g.placement??"left"}),{default:()=>i,...o.tooltip?{title:o.tooltip}:{}}):i,v=O(n,`${n}-${t.type}`,`${n}-${t.shape}`,{[`${n}-disabled`]:t.disabled},(V=t.classNames)==null?void 0:V.root),w=[l.style,(A=t.styles)==null?void 0:A.root];return t.href?s("a",$(l,{class:v,style:w,href:t.href,target:t.target,onClick:d,"aria-disabled":t.disabled}),[F]):s("button",$(l,{type:t.htmlType,class:v,style:w,onClick:d,disabled:t.disabled}),[F])}}}),I=b({name:"FloatButtonGroup",props:{shape:{type:String,default:"circle"},type:{type:String,default:"default"},trigger:String,placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},closeIcon:[Function,String],icon:[Function,String],tooltip:[String,Object],badge:Object,description:String,onOpenChange:Function},emits:["update:open","openChange","click"],setup(t,{slots:o,emit:c}){const l=P("float-btn"),n=E(null),d=E(t.defaultOpen),r=j(()=>t.open!==void 0),y=j(()=>r.value?t.open:d.value),h=k=>{var i;r.value||(d.value=k),c("update:open",k),c("openChange",k),(i=t.onOpenChange)==null||i.call(t,k)};return()=>{var F;const k=!!t.trigger,i=O(`${l}-group`,`${l}-group-${t.shape}`,`${l}-group-${t.placement}`,{[`${l}-group-trigger`]:k,[`${l}-group-open`]:y.value});if(!k)return s("div",{class:i,ref:n},[(F=o.default)==null?void 0:F.call(o)]);const g=y.value?t.closeIcon??ot:t.icon??et;return s(ct,{open:r.value?t.open:void 0,defaultOpen:t.defaultOpen,trigger:t.trigger,closeOnOutsideClick:!0,closeOnEscape:!0,mouseEnterDelay:0,mouseLeaveDelay:0,triggerDisplay:"block",popupStyle:{display:"none"},"onUpdate:open":h,onOpenChange:h},{default:()=>s("div",{class:i,ref:n},[s(L,{name:`${l}-group-wrap`},{default:()=>{var v;return[y.value&&s("div",{class:`${l}-group-wrap`,onClick:w=>w.stopPropagation()},[(v=o.default)==null?void 0:v.call(o)])]}}),s(p,{type:t.type,shape:t.shape,icon:g,tooltip:t.tooltip,badge:t.badge,content:t.description,onClick:v=>c("click",v)},null)])})}}}),ft=b({name:"FloatButtonBackTop",props:{visibilityHeight:{type:Number,default:400},target:Function,duration:{type:Number,default:450},icon:[Function,String],type:{type:String,default:"default"},shape:{type:String,default:"circle"},tooltip:[String,Object],content:String,description:String},emits:["click"],setup(t,{slots:o,emit:c}){const l=P("float-btn"),n=E(!1);let d=null;const r=()=>t.target?t.target():window,y=i=>i===window||i===document?document.documentElement.scrollTop||document.body.scrollTop:i.scrollTop,h=()=>{n.value=y(r())>=t.visibilityHeight},k=i=>{const g=r(),F=Date.now(),v=y(g),w=m=>m<.5?4*m*m*m:(m-1)*(2*m-2)*(2*m-2)+1,S=()=>{const m=Math.min((Date.now()-F)/t.duration,1),C=v*(1-w(m));g===window||g===document?window.scrollTo(0,C):g.scrollTop=C,m<1&&requestAnimationFrame(S)};requestAnimationFrame(S),c("click",i)};return Y(()=>{const i=r();d=i===document?window:i,d.addEventListener("scroll",h),h()}),J(()=>{d==null||d.removeEventListener("scroll",h),d=null}),()=>{const i=t.content??t.description;return s(L,{name:`${l}-fade`},{default:()=>[n.value&&s(p,{type:t.type,shape:t.shape,icon:t.icon??rt,tooltip:t.tooltip,content:i,class:`${l}-back-top`,onClick:k},{default:()=>[o.icon?{icon:o.icon}:void 0]})]})}}});p.Group=I;p.BackTop=ft;const bt={class:"back-top-demo__inner"},yt=b({__name:"FloatButtonBackTopDemo",setup(t){const o=E(null),c=()=>o.value,l={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(n,d)=>(x(),B("div",{ref_key:"containerRef",ref:o,class:"back-top-demo"},[e("div",bt,[(x(),B(K,null,X(30,r=>e("p",{key:r},"向下滚动这块区域，第 "+Z(r)+" 行…",1)),64))]),s(a(p).BackTop,{target:c,"visibility-height":80,tooltip:"回到顶部",style:l})],512))}}),ht=q(yt,[["__scopeId","data-v-8cfb5f52"]]),vt=`<template>
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
`,xt={class:"float-btn-showcase"},Bt=b({__name:"FloatButtonBadge",setup(t){const o={position:"static"};return(c,l)=>(x(),B("div",xt,[s(a(p),{badge:{count:5},icon:a(D),style:o},null,8,["icon"]),s(a(p),{badge:{count:128,overflowCount:99},icon:a(D),style:o},null,8,["icon"]),s(a(p),{badge:{dot:!0},icon:a(D),style:o},null,8,["icon"])]))}}),Ft=q(Bt,[["__scopeId","data-v-fa9b9394"]]),qt=`<template>
  <div class="float-btn-showcase">
    <FloatButton :badge="{ count: 5 }" :icon="InfoCircleOutlined" :style="s" />
    <FloatButton :badge="{ count: 128, overflowCount: 99 }" :icon="InfoCircleOutlined" :style="s" />
    <FloatButton :badge="{ dot: true }" :icon="InfoCircleOutlined" :style="s" />
  </div>
</template>

<script setup lang="ts">
import { FloatButton } from '@hmfw/ant-design'
import { InfoCircleOutlined } from '@hmfw/icons'

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
`,wt={class:"float-btn-demo"},St=b({__name:"FloatButtonBasic",setup(t){const o={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};function c(){console.log("点击悬浮按钮")}return(l,n)=>(x(),B("div",wt,[s(a(p),{tooltip:"点击",style:o,onClick:c})]))}}),Ct=q(St,[["__scopeId","data-v-726185db"]]),Ot=`<template>
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
`,_t={style:{display:"flex","flex-direction":"column",gap:"24px"}},Tt=b({__name:"FloatButtonClassNames",setup(t){return(o,c)=>(x(),B("div",_t,[e("div",null,[c[0]||(c[0]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根节点（渐变背景）：",-1)),s(a(p),{icon:a(pt),"class-names":{root:"custom-root"},tooltip:"帮助"},null,8,["icon"])]),e("div",null,[c[1]||(c[1]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图标容器（放大图标）：",-1)),s(a(p),{type:"primary",icon:a(lt),"class-names":{icon:"custom-icon"},tooltip:"客服"},null,8,["icon"])]),e("div",null,[c[2]||(c[2]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内容区域（square 形状）：",-1)),s(a(p),{shape:"square",icon:a(dt),content:"反馈","class-names":{body:"custom-body",content:"custom-content"}},null,8,["icon"])]),e("div",null,[c[3]||(c[3]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义（多个 key）：",-1)),s(a(p),{shape:"square",icon:a(N),content:"编辑","class-names":{root:"custom-combined-root",body:"custom-combined-body",icon:"custom-combined-icon",content:"custom-combined-content"}},null,8,["icon"])]),e("div",null,[c[4]||(c[4]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),s(a(p),{type:"primary",shape:"square",icon:a(it),content:"启动",styles:{root:{borderRadius:"12px",boxShadow:"0 4px 16px rgba(22, 119, 255, 0.3)"},body:{padding:"8px"},icon:{fontSize:"20px"},content:{fontWeight:"bold"}}},null,8,["icon"])])]))}}),Et=q(Tt,[["__scopeId","data-v-f9acbd99"]]),Nt=`<template>
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
import { FloatButton } from '@hmfw/ant-design'
import {
  QuestionCircleOutlined,
  CustomerServiceOutlined,
  CommentOutlined,
  EditOutlined,
  RocketOutlined,
} from '@hmfw/icons'
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
`,It={class:"float-btn-demo"},$t=b({__name:"FloatButtonGroupDemo",setup(t){const o={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(c,l)=>(x(),B("div",It,[s(a(I),{shape:"circle",style:o},{default:f(()=>[s(a(p),{icon:a(N),tooltip:"编辑"},null,8,["icon"]),s(a(p),{icon:a(Q),tooltip:"删除"},null,8,["icon"]),s(a(p),{icon:a(W),tooltip:"搜索"},null,8,["icon"])]),_:1})]))}}),Dt=q($t,[["__scopeId","data-v-9b697206"]]),Pt=`<template>
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
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@hmfw/icons'

const pos = { position: 'absolute', insetInlineEnd: '24px', insetBlockEnd: '24px' } as const
<\/script>

<style scoped>
.float-btn-demo {
  position: relative;
  height: 220px;
  overflow: hidden;
}
</style>
`,zt={class:"float-btn-demo"},Gt=b({__name:"FloatButtonMenu",setup(t){const o={position:"absolute",insetInlineEnd:"120px",insetBlockEnd:"24px"},c={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(l,n)=>(x(),B("div",zt,[s(a(I),{trigger:"click",type:"primary",icon:a(_),style:o},{default:f(()=>[s(a(p),{icon:a(N),tooltip:"编辑"},null,8,["icon"]),s(a(p),{icon:a(W),tooltip:"搜索"},null,8,["icon"])]),_:1},8,["icon"]),s(a(I),{trigger:"hover",style:c},{default:f(()=>[s(a(p),{icon:a(N),tooltip:"编辑"},null,8,["icon"]),s(a(p),{icon:a(Q),tooltip:"删除"},null,8,["icon"])]),_:1})]))}}),Mt=q(Gt,[["__scopeId","data-v-a6c8d123"]]),Rt=`<template>
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
import { SettingOutlined, EditOutlined, SearchOutlined, DeleteOutlined } from '@hmfw/icons'

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
`,Ht={class:"float-btn-showcase"},Vt=b({__name:"FloatButtonTypes",setup(t){const o={position:"static"};return(c,l)=>(x(),B("div",Ht,[s(a(p),{icon:a(_),style:o},null,8,["icon"]),s(a(p),{type:"primary",icon:a(_),style:o},null,8,["icon"]),s(a(p),{shape:"square",icon:a(_),style:o},null,8,["icon"]),s(a(p),{type:"primary",shape:"square",icon:a(_),style:o},null,8,["icon"]),s(a(p),{type:"primary",shape:"square",description:"文档",style:o})]))}}),At=q(Vt,[["__scopeId","data-v-81bb5c61"]]),jt=`<template>
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
import { SettingOutlined } from '@hmfw/icons'

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
`,Lt={class:"markdown-body"},on={__name:"float-button",setup(t,{expose:o}){return o({frontmatter:{}}),(l,n)=>{const d=tt("DemoBlock");return x(),B("div",Lt,[n[0]||(n[0]=e("h1",{id:"floatbutton-悬浮按钮",tabindex:"-1"},"FloatButton 悬浮按钮",-1)),n[1]||(n[1]=e("p",null,"悬浮于页面上方的按钮。",-1)),n[2]||(n[2]=e("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=e("ul",null,[e("li",null,"用于网站上的全局功能"),e("li",null,"无论浏览到页面的哪个位置，都可以看见的按钮")],-1)),n[4]||(n[4]=e("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=e("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=e("p",null,"最简单的用法。",-1)),s(d,{title:"基础用法",source:a(Ot)},{default:f(()=>[s(Ct)]),_:1},8,["source"]),n[7]||(n[7]=e("h3",{id:"不同类型",tabindex:"-1"},"不同类型",-1)),n[8]||(n[8]=e("p",null,[u("提供 "),e("code",null,"default"),u(" 和 "),e("code",null,"primary"),u(" 两种类型，以及 "),e("code",null,"circle"),u(" 和 "),e("code",null,"square"),u(" 两种形状。")],-1)),s(d,{title:"不同类型",source:a(jt)},{default:f(()=>[s(At)]),_:1},8,["source"]),n[9]||(n[9]=e("h3",{id:"徽标数字",tabindex:"-1"},"徽标数字",-1)),n[10]||(n[10]=e("p",null,"带徽标的悬浮按钮，徽标基于 Badge 组件实现。",-1)),s(d,{title:"徽标数字",source:a(qt)},{default:f(()=>[s(Ft)]),_:1},8,["source"]),n[11]||(n[11]=e("h3",{id:"浮动按钮组",tabindex:"-1"},"浮动按钮组",-1)),n[12]||(n[12]=e("p",null,[u("使用 "),e("code",null,"FloatButtonGroup"),u(" 可以将多个悬浮按钮组合在一起。设置 "),e("code",null,"trigger"),u(" 后会折叠为可展开的菜单。")],-1)),s(d,{title:"浮动按钮组",source:a(Pt)},{default:f(()=>[s(Dt)]),_:1},8,["source"]),n[13]||(n[13]=e("h3",{id:"菜单模式",tabindex:"-1"},"菜单模式",-1)),n[14]||(n[14]=e("p",null,[u("设置 "),e("code",null,"trigger"),u(" 为 "),e("code",null,"hover"),u(" 或 "),e("code",null,"click"),u("，鼠标悬停或点击展开菜单。")],-1)),s(d,{title:"菜单模式",source:a(Rt)},{default:f(()=>[s(Mt)]),_:1},8,["source"]),n[15]||(n[15]=e("h3",{id:"回到顶部",tabindex:"-1"},"回到顶部",-1)),n[16]||(n[16]=e("p",null,[e("code",null,"FloatButton.BackTop"),u(" 返回页面顶部的操作按钮。")],-1)),s(d,{title:"回到顶部",source:a(vt)},{default:f(()=>[s(ht)]),_:1},8,["source"]),n[17]||(n[17]=e("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[18]||(n[18]=e("p",null,[u("通过 "),e("code",null,"classNames"),u(" / "),e("code",null,"styles"),u(" 对各子元素做细粒度样式控制。")],-1)),s(d,{title:"语义化 className 与 style",source:a(Nt)},{default:f(()=>[s(Et)]),_:1},8,["source"]),n[19]||(n[19]=nt(`<h2 id="api" tabindex="-1">API</h2><p>组件提供了三种使用方式：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> FloatButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义根节点渐变背景 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FloatButton</span> <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>QuestionCircleOutlined<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;custom-root&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">tooltip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>帮助<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义图标和内容区域 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FloatButton</span>
    <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CommentOutlined<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>反馈<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ icon: &#39;custom-icon&#39;, content: &#39;custom-content&#39; }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.custom-root)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-root:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 6px 20px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-icon)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-content)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1677ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制根节点和图标 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FloatButton</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CustomerServiceOutlined<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;12px&#39; },
      icon: { fontSize: &#39;20px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- square 形状完整样式定制 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FloatButton</span>
    <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RocketOutlined<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>启动<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { boxShadow: &#39;0 4px 16px rgba(22, 119, 255, 0.3)&#39; },
      body: { padding: &#39;8px&#39; },
      icon: { fontSize: &#39;20px&#39; },
      content: { fontWeight: &#39;bold&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>content</code> key 仅在 <code>shape=&quot;square&quot;</code> 时渲染，<code>circle</code> 形状不显示文本内容</li><li>Badge 和 Tooltip 是外部组件，不在 <code>classNames</code> / <code>styles</code> 控制范围内</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-float-btn-disabled</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>FloatButton 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>浮层背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>三级填充色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-light-solid</code></td><td>浅色文本色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-font-family</code></td><td>字体族</td><td><code>-apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, &#39;Helvetica Neue&#39;, …</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,33))])}}};export{on as default};
