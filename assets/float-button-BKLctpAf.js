import{n as C,m as B,L as G,l as e,q as $,B as E,v as H,u as P,c as L,d as q,p as N,y as F,i as x,f as i,F as R,D as A,H as U,I as d,_ as O,P as v,E as W,k as f,j as J}from"./index-CsoOETlJ.js";import{b as K,P as Q,f as D,E as M,D as V,S as j,h as S}from"./icons-BOELVDCf.js";import{B as X}from"./index-nccb5Lqp.js";import{T as Y}from"./Tooltip-CuI6zOXS.js";import{c as z}from"./cls-S9IiI6wd.js";import{I as Z}from"./Icon-Bu-seQlV.js";const tt=()=>C("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",focusable:!1},[C("path",{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-178H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm192 356H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h376c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"})]),nt=()=>C("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",focusable:!1},[C("path",{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"})]);function et(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!N(t)}function ot(t,o){const a=o==null?void 0:o();if(a&&a.length)return a;if(t)return typeof t=="string"?t:e(Z,{component:t},null)}function dt(t){if(t)return typeof t=="string"?{title:t}:t}const s=B({name:"FloatButton",inheritAttrs:!1,props:{type:{type:String,default:"default"},shape:{type:String,default:"circle"},icon:[Function,String],description:String,content:String,tooltip:[String,Object],badge:Object,href:String,target:String,htmlType:{type:String,default:"button"},disabled:Boolean},emits:["click"],setup(t,{slots:o,emit:a,attrs:c}){const n=G("float-btn"),l=p=>{t.disabled||a("click",p)};return()=>{var y,w;const p=t.content??t.description,m=p||o.description||o.content,h=t.icon??(m?void 0:tt),k=e("div",{class:`${n}-body`},[h!==void 0&&e("div",{class:`${n}-icon`},[ot(h,o.icon)]),m&&e("div",{class:`${n}-content`},[((y=o.content)==null?void 0:y.call(o))??((w=o.description)==null?void 0:w.call(o))??p])]),u=t.badge&&(t.badge.dot||t.badge.count!==void 0)?e(X,{count:t.badge.count,dot:t.badge.dot,overflowCount:t.badge.overflowCount,color:t.badge.color,offset:t.badge.offset},et(k)?k:{default:()=>[k]}):k,b=dt(t.tooltip),_=b?e(Y,$(b,{placement:b.placement??"left"}),{default:()=>u,...o.tooltip?{title:o.tooltip}:{}}):u,r=z(n,`${n}-${t.type}`,`${n}-${t.shape}`,{[`${n}-disabled`]:t.disabled});return t.href?e("a",$(c,{class:r,href:t.href,target:t.target,onClick:l,"aria-disabled":t.disabled}),[_]):e("button",$(c,{type:t.htmlType,class:r,onClick:l,disabled:t.disabled}),[_])}}}),I=B({name:"FloatButtonGroup",props:{shape:{type:String,default:"circle"},type:{type:String,default:"default"},trigger:String,placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},closeIcon:[Function,String],icon:[Function,String],tooltip:[String,Object],badge:Object,description:String,onOpenChange:Function},emits:["update:open","openChange","click"],setup(t,{slots:o,emit:a}){const c=G("float-btn"),n=E(t.defaultOpen),l=E(null),p=q(()=>t.open!==void 0),m=q(()=>p.value?t.open:n.value),h=r=>{var y;r!==m.value&&(p.value||(n.value=r),a("update:open",r),a("openChange",r),(y=t.onOpenChange)==null||y.call(t,r))},k=r=>{t.trigger==="click"&&h(!m.value),a("click",r)},u=()=>{t.trigger==="hover"&&h(!0)},b=()=>{t.trigger==="hover"&&h(!1)},_=r=>{t.trigger==="click"&&m.value&&l.value&&!l.value.contains(r.target)&&h(!1)};return H(()=>{t.trigger==="click"&&document.addEventListener("click",_,{capture:!0})}),P(()=>{t.trigger==="click"&&document.removeEventListener("click",_,{capture:!0})}),()=>{var g;const r=!!t.trigger,y=z(`${c}-group`,`${c}-group-${t.shape}`,`${c}-group-${t.placement}`,{[`${c}-group-trigger`]:r,[`${c}-group-open`]:m.value});if(!r)return e("div",{class:y,ref:l},[(g=o.default)==null?void 0:g.call(o)]);const w=m.value?t.closeIcon??K:t.icon??Q;return e("div",{class:y,ref:l,onMouseenter:u,onMouseleave:b},[e(L,{name:`${c}-group-wrap`},{default:()=>{var T;return[m.value&&e("div",{class:`${c}-group-wrap`},[(T=o.default)==null?void 0:T.call(o)])]}}),e(s,{type:t.type,shape:t.shape,icon:w,tooltip:t.tooltip,badge:t.badge,content:t.description,onClick:k},null)])}}}),it=B({name:"FloatButtonBackTop",props:{visibilityHeight:{type:Number,default:400},target:Function,duration:{type:Number,default:450},icon:[Function,String],type:{type:String,default:"default"},shape:{type:String,default:"circle"},tooltip:[String,Object],content:String,description:String},emits:["click"],setup(t,{slots:o,emit:a}){const c=G("float-btn"),n=E(!1);let l=null;const p=()=>t.target?t.target():window,m=u=>u===window||u===document?document.documentElement.scrollTop||document.body.scrollTop:u.scrollTop,h=()=>{n.value=m(p())>=t.visibilityHeight},k=u=>{const b=p(),_=Date.now(),r=m(b),y=g=>g<.5?4*g*g*g:(g-1)*(2*g-2)*(2*g-2)+1,w=()=>{const g=Math.min((Date.now()-_)/t.duration,1),T=r*(1-y(g));b===window||b===document?window.scrollTo(0,T):b.scrollTop=T,g<1&&requestAnimationFrame(w)};requestAnimationFrame(w),a("click",u)};return H(()=>{const u=p();l=u===document?window:u,l.addEventListener("scroll",h),h()}),P(()=>{l==null||l.removeEventListener("scroll",h),l=null}),()=>{const u=t.content??t.description;return e(L,{name:`${c}-fade`},{default:()=>[n.value&&e(s,{type:t.type,shape:t.shape,icon:t.icon??nt,tooltip:t.tooltip,content:u,class:`${c}-back-top`,onClick:k},{default:()=>[o.icon?{icon:o.icon}:void 0]})]})}}});s.Group=I;s.BackTop=it;const lt={class:"back-top-demo__inner"},at=B({__name:"FloatButtonBackTopDemo",setup(t){const o=E(null),a=()=>o.value,c={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(n,l)=>(F(),x("div",{class:"back-top-demo",ref_key:"containerRef",ref:o},[i("div",lt,[(F(),x(R,null,A(30,p=>i("p",{key:p},"向下滚动这块区域，第 "+U(p)+" 行…",1)),64))]),e(d(s).BackTop,{target:a,"visibility-height":80,tooltip:"回到顶部",style:c})],512))}}),ct=O(at,[["__scopeId","data-v-feb5a966"]]),st=`<template>
  <div class="back-top-demo" ref="containerRef">
    <div class="back-top-demo__inner">
      <p v-for="n in 30" :key="n">向下滚动这块区域，第 {{ n }} 行…</p>
    </div>
    <FloatButton.BackTop
      :target="getTarget"
      :visibility-height="80"
      tooltip="回到顶部"
      :style="pos"
    />
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
`,rt={class:"float-btn-showcase"},ut=B({__name:"FloatButtonBadge",setup(t){const o={position:"static"};return(a,c)=>(F(),x("div",rt,[e(d(s),{badge:{count:5},icon:d(D),style:o},null,8,["icon"]),e(d(s),{badge:{count:128,overflowCount:99},icon:d(D),style:o},null,8,["icon"]),e(d(s),{badge:{dot:!0},icon:d(D),style:o},null,8,["icon"])]))}}),pt=O(ut,[["__scopeId","data-v-e2adcfa0"]]),gt=`<template>
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
`,ft={class:"float-btn-demo"},mt=B({__name:"FloatButtonBasic",setup(t){const o={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};function a(){console.log("点击悬浮按钮")}return(c,n)=>(F(),x("div",ft,[e(d(s),{tooltip:"点击",style:o,onClick:a})]))}}),ht=O(mt,[["__scopeId","data-v-11138d77"]]),bt=`<template>
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
`,yt={class:"float-btn-demo"},vt=B({__name:"FloatButtonGroupDemo",setup(t){const o={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(a,c)=>(F(),x("div",yt,[e(d(I),{shape:"circle",style:o},{default:v(()=>[e(d(s),{icon:d(M),tooltip:"编辑"},null,8,["icon"]),e(d(s),{icon:d(V),tooltip:"删除"},null,8,["icon"]),e(d(s),{icon:d(j),tooltip:"搜索"},null,8,["icon"])]),_:1})]))}}),Bt=O(vt,[["__scopeId","data-v-3ab51241"]]),kt=`<template>
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
`,Ft={class:"float-btn-demo"},xt=B({__name:"FloatButtonMenu",setup(t){const o={position:"absolute",insetInlineEnd:"120px",insetBlockEnd:"24px"},a={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(c,n)=>(F(),x("div",Ft,[e(d(I),{trigger:"click",type:"primary",icon:d(S),style:o},{default:v(()=>[e(d(s),{icon:d(M),tooltip:"编辑"},null,8,["icon"]),e(d(s),{icon:d(j),tooltip:"搜索"},null,8,["icon"])]),_:1},8,["icon"]),e(d(I),{trigger:"hover",style:a},{default:v(()=>[e(d(s),{icon:d(M),tooltip:"编辑"},null,8,["icon"]),e(d(s),{icon:d(V),tooltip:"删除"},null,8,["icon"])]),_:1})]))}}),_t=O(xt,[["__scopeId","data-v-6b295807"]]),wt=`<template>
  <div class="float-btn-demo">
    <FloatButtonGroup
      trigger="click"
      type="primary"
      :icon="SettingOutlined"
      :style="left"
    >
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
`,Ot={class:"float-btn-showcase"},Tt=B({__name:"FloatButtonTypes",setup(t){const o={position:"static"};return(a,c)=>(F(),x("div",Ot,[e(d(s),{icon:d(S),style:o},null,8,["icon"]),e(d(s),{type:"primary",icon:d(S),style:o},null,8,["icon"]),e(d(s),{shape:"square",icon:d(S),style:o},null,8,["icon"]),e(d(s),{type:"primary",shape:"square",icon:d(S),style:o},null,8,["icon"]),e(d(s),{type:"primary",shape:"square",description:"文档",style:o})]))}}),St=O(Tt,[["__scopeId","data-v-cf4c6b3a"]]),Ct=`<template>
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
`,Et={class:"markdown-body"},Ht={__name:"float-button",setup(t,{expose:o}){return o({frontmatter:{}}),(c,n)=>{const l=W("DemoBlock");return F(),x("div",Et,[n[0]||(n[0]=i("h1",{id:"floatbutton-",tabindex:"-1"},"FloatButton 悬浮按钮",-1)),n[1]||(n[1]=i("p",null,"悬浮于页面上方的按钮。",-1)),n[2]||(n[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=i("ul",null,[i("li",null,"用于网站上的全局功能"),i("li",null,"无论浏览到页面的哪个位置，都可以看见的按钮")],-1)),n[4]||(n[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=i("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=i("p",null,"最简单的用法。",-1)),e(l,{title:"基础用法",source:d(bt)},{default:v(()=>[e(ht)]),_:1},8,["source"]),n[7]||(n[7]=i("h3",{id:"-3",tabindex:"-1"},"不同类型",-1)),n[8]||(n[8]=i("p",null,[f("提供 "),i("code",null,"default"),f(" 和 "),i("code",null,"primary"),f(" 两种类型，以及 "),i("code",null,"circle"),f(" 和 "),i("code",null,"square"),f(" 两种形状。")],-1)),e(l,{title:"不同类型",source:d(Ct)},{default:v(()=>[e(St)]),_:1},8,["source"]),n[9]||(n[9]=i("h3",{id:"-4",tabindex:"-1"},"徽标数字",-1)),n[10]||(n[10]=i("p",null,"带徽标的悬浮按钮，徽标基于 Badge 组件实现。",-1)),e(l,{title:"徽标数字",source:d(gt)},{default:v(()=>[e(pt)]),_:1},8,["source"]),n[11]||(n[11]=i("h3",{id:"-5",tabindex:"-1"},"浮动按钮组",-1)),n[12]||(n[12]=i("p",null,[f("使用 "),i("code",null,"FloatButtonGroup"),f(" 可以将多个悬浮按钮组合在一起。设置 "),i("code",null,"trigger"),f(" 后会折叠为可展开的菜单。")],-1)),e(l,{title:"浮动按钮组",source:d(kt)},{default:v(()=>[e(Bt)]),_:1},8,["source"]),n[13]||(n[13]=i("h3",{id:"-6",tabindex:"-1"},"菜单模式",-1)),n[14]||(n[14]=i("p",null,[f("设置 "),i("code",null,"trigger"),f(" 为 "),i("code",null,"hover"),f(" 或 "),i("code",null,"click"),f("，鼠标悬停或点击展开菜单。")],-1)),e(l,{title:"菜单模式",source:d(wt)},{default:v(()=>[e(_t)]),_:1},8,["source"]),n[15]||(n[15]=i("h3",{id:"-7",tabindex:"-1"},"回到顶部",-1)),n[16]||(n[16]=i("p",null,[i("code",null,"FloatButton.BackTop"),f(" 返回页面顶部的操作按钮。")],-1)),e(l,{title:"回到顶部",source:d(st)},{default:v(()=>[e(ct)]),_:1},8,["source"]),n[17]||(n[17]=J(`<h2 id="api" tabindex="-1">API</h2><p>组件提供了三种使用方式：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> FloatButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>

<span class="token comment">// 复合写法</span>
<span class="token operator">&lt;</span>FloatButton <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>FloatButton<span class="token punctuation">.</span>Group <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>FloatButton<span class="token punctuation">.</span>BackTop <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 或具名导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FloatButton<span class="token punctuation">,</span> FloatButtonGroup<span class="token punctuation">,</span> FloatButtonBackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>
</code></pre><h3 id="floatbutton-props" tabindex="-1">FloatButton Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>设置按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>设置按钮形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>icon</td><td>自定义图标</td><td><code>IconComponent | string | slot</code></td><td><code>FileTextOutlined</code></td></tr><tr><td>content</td><td>文字及其他内容，仅 <code>square</code> 形状展示</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>description</td><td>文字及其他内容（已废弃，请使用 <code>content</code>）</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>tooltip</td><td>气泡提示的内容</td><td><code>string | TooltipProps | slot</code></td><td>-</td></tr><tr><td>badge</td><td>带徽标数字的悬浮按钮</td><td><code>{ count?, dot?, overflowCount?, color?, offset? }</code></td><td>-</td></tr><tr><td>href</td><td>点击跳转的地址，指定时渲染为 <code>a</code> 标签</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>相当于 <code>a</code> 标签的 <code>target</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>htmlType</td><td>设置原生 <code>button</code> 的 <code>type</code></td><td><code>&#39;submit&#39; | &#39;reset&#39; | &#39;button&#39;</code></td><td><code>&#39;button&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="floatbutton-events" tabindex="-1">FloatButton Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="floatbuttongroup-props" tabindex="-1">FloatButton.Group Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>触发方式（不设置时默认展示所有子按钮）</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td>-</td></tr><tr><td>type</td><td>设置触发按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>设置子按钮形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>placement</td><td>自定义菜单展开方向</td><td><code>&#39;top&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;left&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>open</td><td>受控展开状态</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认展开状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>触发按钮的图标</td><td><code>IconComponent | string</code></td><td><code>PlusOutlined</code></td></tr><tr><td>closeIcon</td><td>展开时触发按钮的图标</td><td><code>IconComponent | string</code></td><td><code>CloseOutlined</code></td></tr><tr><td>tooltip</td><td>触发按钮的气泡提示</td><td><code>string | TooltipProps</code></td><td>-</td></tr><tr><td>badge</td><td>触发按钮的徽标</td><td><code>FloatButtonBadgeProps</code></td><td>-</td></tr><tr><td>description</td><td>触发按钮的描述（square 形状）</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="floatbuttongroup-events" tabindex="-1">FloatButton.Group Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>openChange / update:open</td><td>展开状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>click</td><td>点击触发按钮时的回调（仅菜单模式）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="floatbuttonbacktop-props" tabindex="-1">FloatButton.BackTop Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityHeight</td><td>滚动高度达到此参数值才出现</td><td><code>number</code></td><td><code>400</code></td></tr><tr><td>target</td><td>设置需要监听其滚动事件的元素</td><td><code>() =&gt; HTMLElement | Window | Document</code></td><td><code>() =&gt; window</code></td></tr><tr><td>duration</td><td>回到顶部所需时间（ms）</td><td><code>number</code></td><td><code>450</code></td></tr><tr><td>icon</td><td>自定义图标</td><td><code>IconComponent | string</code></td><td><code>VerticalAlignTopOutlined</code></td></tr><tr><td>type</td><td>设置按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>设置按钮形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>tooltip</td><td>气泡提示的内容</td><td><code>string | TooltipProps</code></td><td>-</td></tr><tr><td>content</td><td>文字及其他内容（square 形状）</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>文字及其他内容（已废弃，请使用 <code>content</code>）</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="floatbuttonbacktop-events" tabindex="-1">FloatButton.BackTop Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table>`,15))])}}};export{Ht as default};
