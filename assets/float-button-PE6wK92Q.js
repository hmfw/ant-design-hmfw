import{B as Z}from"./index-C_Xm2Lp6.js";import{y as tt,d as f,u as R,c as a,v as $,C as nt,r as x,T as J,a as Y,k as ot,A as st,o as g,b as B,f as s,F as P,B as z,s as C,e as t,_ as O,q as D,w as u,E as at,g as c,h as et,i as lt}from"./index-dV6GQSVR.js";import{F as pt,V as ct,I as L,Q as K,C as it,a as dt,R as ut,L as X,G as rt,B as mt}from"./VerticalAlignTopOutlined-S5yqW0Cs.js";import{c as I}from"./cls-S9IiI6wd.js";import{T as kt}from"./Tooltip-Bs8IBLLf.js";import{C as gt}from"./CloseOutlined-BMlVguv3.js";import{P as ft}from"./PlusOutlined-DhPZGfq5.js";import{T as bt}from"./Trigger-D06LQVmT.js";import{S as G}from"./Space-_NefwuBe.js";import{E}from"./EditOutlined-DjJ2mC9a.js";import{D as M}from"./DeleteOutlined-pU8NyycV.js";import{B as yt}from"./Button-CbNYWpGi.js";import{S as w}from"./SettingOutlined-CikrUBue.js";import{S as A}from"./SearchOutlined-BKBlx0Sk.js";import"./LoadingOutlined-CdSjzm5S.js";function ht(n,e){const d=e==null?void 0:e();return d&&d.length?d:n?typeof n=="string"?n:tt(n,{class:"hmfw-icon"}):void 0}function vt(n){if(n)return typeof n=="string"?{title:n}:n}function Bt(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!nt(n)}const H=f({name:"FloatButton",inheritAttrs:!1,props:{type:{type:String,default:"default"},shape:{type:String,default:"circle"},icon:[Function,String],content:String,tooltip:[String,Object],badge:Object,href:String,target:String,htmlType:{type:String,default:"button"},disabled:Boolean,classNames:Object,styles:Object},emits:["click"],setup(n,{slots:e,emit:d,attrs:p}){const o=R("float-btn"),i=m=>{if(n.disabled){m.preventDefault();return}d("click",m)};return()=>{var v,S,h,T,j,V,Q,U,W;const m=n.content||e.content,k=n.icon??(m?void 0:pt),b=a("div",{class:I(`${o}-body`,(v=n.classNames)==null?void 0:v.body),style:(S=n.styles)==null?void 0:S.body},[k!==void 0&&a("div",{class:I(`${o}-icon`,(h=n.classNames)==null?void 0:h.icon),style:(T=n.styles)==null?void 0:T.icon},[ht(k,e.icon)]),m&&a("div",{class:I(`${o}-content`,(j=n.classNames)==null?void 0:j.content),style:(V=n.styles)==null?void 0:V.content},[((Q=e.content)==null?void 0:Q.call(e))??n.content])]),F=n.badge&&(n.badge.dot||n.badge.count!==void 0)?a(Z,{count:n.badge.count,dot:n.badge.dot,overflowCount:n.badge.overflowCount,color:n.badge.color,offset:n.badge.offset},Bt(b)?b:{default:()=>[b]}):b,r=vt(n.tooltip),y=r?a(kt,$(r,{placement:r.placement??"left"}),{default:()=>F,...e.tooltip?{title:e.tooltip}:{}}):F,q=I(o,`${o}-${n.type}`,`${o}-${n.shape}`,{[`${o}-disabled`]:n.disabled},p.class,(U=n.classNames)==null?void 0:U.root),_=[p.style,(W=n.styles)==null?void 0:W.root];return n.href?a("a",$(p,{class:q,style:_,href:n.href,target:n.target,onClick:i,"aria-disabled":n.disabled}),[y]):a("button",$(p,{type:n.htmlType,class:q,style:_,onClick:i,disabled:n.disabled}),[y])}}}),N=f({name:"FloatButtonGroup",inheritAttrs:!1,props:{shape:{type:String,default:"circle"},type:{type:String,default:"default"},trigger:String,placement:{type:String,default:"top"},open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},closeIcon:[Function,String],icon:[Function,String],tooltip:[String,Object],badge:Object,content:String,onOpenChange:Function},emits:["update:open","openChange","click"],setup(n,{slots:e,emit:d,attrs:p}){const o=R("float-btn"),i=x(null),m=x(n.defaultOpen),k=Y(()=>n.open!==void 0),b=Y(()=>k.value?n.open:m.value),F=r=>{var y;k.value||(m.value=r),d("update:open",r),d("openChange",r),(y=n.onOpenChange)==null||y.call(n,r)};return()=>{var _;const r=!!n.trigger,y=I(`${o}-group`,`${o}-group-${n.shape}`,`${o}-group-${n.placement}`,{[`${o}-group-trigger`]:r,[`${o}-group-open`]:b.value});if(!r)return a("div",$(p,{class:y,ref:i}),[(_=e.default)==null?void 0:_.call(e)]);const q=b.value?n.closeIcon??gt:n.icon??ft;return a(bt,{open:k.value?n.open:void 0,defaultOpen:n.defaultOpen,trigger:n.trigger,closeOnOutsideClick:!0,closeOnEscape:!0,mouseEnterDelay:0,mouseLeaveDelay:0,triggerDisplay:"block",popupStyle:{display:"none"},"onUpdate:open":F},{default:()=>a("div",$(p,{class:y,ref:i,onMousedown:v=>{n.trigger==="click"&&v.stopPropagation()}}),[a(J,{name:`${o}-group-wrap`},{default:()=>{var v;return[b.value&&a("div",{class:`${o}-group-wrap`,onClick:S=>S.stopPropagation()},[(v=e.default)==null?void 0:v.call(e)])]}}),a(H,{type:n.type,shape:n.shape,icon:q,tooltip:n.tooltip,badge:n.badge,content:n.content,onClick:v=>{n.trigger==="click"&&(v.stopPropagation(),F(!b.value)),d("click",v)}},null)])})}}}),xt=f({name:"FloatButtonBackTop",props:{visibilityHeight:{type:Number,default:400},target:Function,duration:{type:Number,default:450},icon:[Function,String],type:{type:String,default:"default"},shape:{type:String,default:"circle"},tooltip:[String,Object],content:String},emits:["click"],setup(n,{slots:e,emit:d}){const p=R("float-btn"),o=x(!1);let i=null;const m=()=>n.target?n.target():window,k=r=>r===window||r===document?document.documentElement.scrollTop||document.body.scrollTop:r.scrollTop,b=()=>{o.value=k(m())>=n.visibilityHeight},F=r=>{const y=m(),q=Date.now(),_=k(y),v=h=>h<.5?4*h*h*h:(h-1)*(2*h-2)*(2*h-2)+1,S=()=>{const h=Math.min((Date.now()-q)/n.duration,1),T=_*(1-v(h));y===window||y===document?window.scrollTo(0,T):y.scrollTop=T,h<1&&requestAnimationFrame(S)};requestAnimationFrame(S),d("click",r)};return ot(()=>{const r=m();i=r===document?window:r,i.addEventListener("scroll",b),b()}),st(()=>{i==null||i.removeEventListener("scroll",b),i=null}),()=>a(J,{name:`${p}-fade`},{default:()=>[o.value&&a(H,{type:n.type,shape:n.shape,icon:n.icon??ct,tooltip:n.tooltip,content:n.content,class:`${p}-back-top`,onClick:F},{default:()=>[e.icon?{icon:e.icon}:void 0]})]})}}),l=H;l.Group=N;l.BackTop=xt;const Ft={style:{display:"flex",gap:"24px"}},_t={class:"back-top-demo__inner"},St={class:"back-top-demo__inner"},Ot={class:"back-top-demo__inner"},qt=f({__name:"FloatButtonBackTopCustom",setup(n){const e=x(null),d=x(null),p=x(null),o={position:"absolute",insetInlineEnd:"12px",insetBlockEnd:"12px"};return(i,m)=>(g(),B("div",Ft,[s("div",{ref_key:"container1",ref:e,class:"back-top-demo"},[s("div",_t,[(g(),B(P,null,z(20,k=>s("p",{key:k},"默认样式，第 "+C(k)+" 行…",1)),64))]),a(t(l).BackTop,{target:()=>e.value,"visibility-height":50,style:o},null,8,["target"])],512),s("div",{ref_key:"container2",ref:d,class:"back-top-demo"},[s("div",St,[(g(),B(P,null,z(20,k=>s("p",{key:k},"自定义图标，第 "+C(k)+" 行…",1)),64))]),a(t(l).BackTop,{target:()=>d.value,"visibility-height":50,type:"primary",shape:"square",icon:"⬆",tooltip:"快速返回顶部",style:o},null,8,["target"])],512),s("div",{ref_key:"container3",ref:p,class:"back-top-demo"},[s("div",Ot,[(g(),B(P,null,z(20,k=>s("p",{key:k},"带文本，第 "+C(k)+" 行…",1)),64))]),a(t(l).BackTop,{target:()=>p.value,"visibility-height":50,type:"primary",shape:"square",content:"TOP",tooltip:"回到顶部",style:o},null,8,["target"])],512)]))}}),wt=O(qt,[["__scopeId","data-v-c74bb582"]]),Ct=`<template>
  <div style="display: flex; gap: 24px">
    <!-- 场景 1：默认样式 -->
    <div ref="container1" class="back-top-demo">
      <div class="back-top-demo__inner">
        <p v-for="n in 20" :key="n">默认样式，第 {{ n }} 行…</p>
      </div>
      <FloatButton.BackTop :target="() => container1" :visibility-height="50" :style="pos" />
    </div>

    <!-- 场景 2：自定义图标和形状 -->
    <div ref="container2" class="back-top-demo">
      <div class="back-top-demo__inner">
        <p v-for="n in 20" :key="n">自定义图标，第 {{ n }} 行…</p>
      </div>
      <FloatButton.BackTop
        :target="() => container2"
        :visibility-height="50"
        type="primary"
        shape="square"
        icon="⬆"
        tooltip="快速返回顶部"
        :style="pos"
      />
    </div>

    <!-- 场景 3：带文本内容 -->
    <div ref="container3" class="back-top-demo">
      <div class="back-top-demo__inner">
        <p v-for="n in 20" :key="n">带文本，第 {{ n }} 行…</p>
      </div>
      <FloatButton.BackTop
        :target="() => container3"
        :visibility-height="50"
        type="primary"
        shape="square"
        content="TOP"
        tooltip="回到顶部"
        :style="pos"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FloatButton } from '@hmfw/ant-design'

const container1 = ref<HTMLElement | null>(null)
const container2 = ref<HTMLElement | null>(null)
const container3 = ref<HTMLElement | null>(null)
const pos = { position: 'absolute', insetInlineEnd: '12px', insetBlockEnd: '12px' } as const
<\/script>

<style scoped>
.back-top-demo {
  position: relative;
  width: 200px;
  height: 300px;
  overflow: auto;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background: #fff;
}
.back-top-demo__inner {
  padding: 16px;
}
.back-top-demo__inner p {
  margin: 8px 0;
  color: #666;
}
</style>
`,Et={class:"back-top-demo__inner"},Tt=f({__name:"FloatButtonBackTopDemo",setup(n){const e=x(null),d=()=>e.value,p={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(o,i)=>(g(),B("div",{ref_key:"containerRef",ref:e,class:"back-top-demo"},[s("div",Et,[(g(),B(P,null,z(30,m=>s("p",{key:m},"向下滚动这块区域，第 "+C(m)+" 行…",1)),64))]),a(t(l).BackTop,{target:d,"visibility-height":80,tooltip:"回到顶部",style:p})],512))}}),It=O(Tt,[["__scopeId","data-v-8cfb5f52"]]),$t=`<template>
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
`,Nt=f({__name:"FloatButtonBadge",setup(n){const e={position:"static"};return(d,p)=>(g(),D(t(G),{size:32,align:"center"},{default:u(()=>[a(t(l),{badge:{count:5},icon:t(L),style:e},null,8,["icon"]),a(t(l),{badge:{count:128,overflowCount:99},icon:t(L),style:e},null,8,["icon"]),a(t(l),{badge:{dot:!0},icon:t(L),style:e},null,8,["icon"])]),_:1}))}}),Dt=`<template>
  <Space :size="32" align="center">
    <FloatButton :badge="{ count: 5 }" :icon="InfoCircleOutlined" :style="s" />
    <FloatButton :badge="{ count: 128, overflowCount: 99 }" :icon="InfoCircleOutlined" :style="s" />
    <FloatButton :badge="{ dot: true }" :icon="InfoCircleOutlined" :style="s" />
  </Space>
</template>

<script setup lang="ts">
import { FloatButton, Space } from '@hmfw/ant-design'
import { InfoCircleOutlined } from '@hmfw/icons'

const s = { position: 'static' } as const
<\/script>
`,Gt={class:"float-btn-demo"},Pt=f({__name:"FloatButtonBasic",setup(n){const e={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};function d(){console.log("点击悬浮按钮")}return(p,o)=>(g(),B("div",Gt,[a(t(l),{tooltip:"点击",style:e,onClick:d})]))}}),zt=O(Pt,[["__scopeId","data-v-726185db"]]),Lt=`<template>
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
`,Mt={style:{display:"flex","flex-direction":"column",gap:"24px"}},Rt={class:"demo-box"},At={class:"demo-box"},Ht={class:"demo-box"},jt={class:"demo-box"},Vt={class:"demo-box"},Qt=f({__name:"FloatButtonClassNames",setup(n){const e={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(d,p)=>(g(),B("div",Mt,[s("div",null,[p[0]||(p[0]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根节点（渐变背景）：",-1)),s("div",Rt,[a(t(l),{icon:t(K),"class-names":{root:"custom-root"},tooltip:"帮助",style:e},null,8,["icon"])])]),s("div",null,[p[1]||(p[1]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图标容器（放大图标）：",-1)),s("div",At,[a(t(l),{type:"primary",icon:t(it),"class-names":{icon:"custom-icon"},tooltip:"客服",style:e},null,8,["icon"])])]),s("div",null,[p[2]||(p[2]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内容区域（square 形状）：",-1)),s("div",Ht,[a(t(l),{shape:"square",icon:t(dt),content:"反馈","class-names":{body:"custom-body",content:"custom-content"},style:e},null,8,["icon"])])]),s("div",null,[p[3]||(p[3]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义（多个 key）：",-1)),s("div",jt,[a(t(l),{shape:"square",icon:t(E),content:"编辑","class-names":{root:"custom-combined-root",body:"custom-combined-body",icon:"custom-combined-icon",content:"custom-combined-content"},style:e},null,8,["icon"])])]),s("div",null,[p[4]||(p[4]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),s("div",Vt,[a(t(l),{type:"primary",shape:"square",icon:t(ut),content:"启动",styles:{root:{borderRadius:"12px",boxShadow:"0 4px 16px rgba(22, 119, 255, 0.3)"},body:{padding:"8px"},icon:{fontSize:"20px"},content:{fontWeight:"bold"}},style:e},null,8,["icon"])])])]))}}),Ut=O(Qt,[["__scopeId","data-v-0f18fa00"]]),Wt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根节点样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根节点（渐变背景）：</div>
      <div class="demo-box">
        <FloatButton
          :icon="QuestionCircleOutlined"
          :class-names="{ root: 'custom-root' }"
          tooltip="帮助"
          :style="demoStyle"
        />
      </div>
    </div>

    <!-- 场景 2：自定义图标容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图标容器（放大图标）：</div>
      <div class="demo-box">
        <FloatButton
          type="primary"
          :icon="CustomerServiceOutlined"
          :class-names="{ icon: 'custom-icon' }"
          tooltip="客服"
          :style="demoStyle"
        />
      </div>
    </div>

    <!-- 场景 3：自定义 square 形状的内容区域 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内容区域（square 形状）：</div>
      <div class="demo-box">
        <FloatButton
          shape="square"
          :icon="CommentOutlined"
          content="反馈"
          :class-names="{ body: 'custom-body', content: 'custom-content' }"
          :style="demoStyle"
        />
      </div>
    </div>

    <!-- 场景 4：组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义（多个 key）：</div>
      <div class="demo-box">
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
          :style="demoStyle"
        />
      </div>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <div class="demo-box">
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
          :style="demoStyle"
        />
      </div>
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

// 在 demo 容器内展示而非固定定位
const demoStyle = { position: 'absolute', insetInlineEnd: '24px', insetBlockEnd: '24px' } as const
<\/script>

<style scoped>
.demo-box {
  position: relative;
  height: 120px;
  border: 1px dashed #d9d9d9;
  border-radius: 8px;
  background: #fafafa;
}

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
`,Yt=f({__name:"FloatButtonDisabled",setup(n){const e={position:"static"};return(d,p)=>(g(),D(t(G),{size:24},{default:u(()=>[a(t(l),{icon:t(E),disabled:"",tooltip:"禁用态",style:e},null,8,["icon"]),a(t(l),{type:"primary",icon:t(M),disabled:"",style:e},null,8,["icon"]),a(t(l),{href:"https://example.com",target:"_blank",disabled:"",icon:t(X),tooltip:"禁用的链接（不跳转）",style:e},null,8,["icon"])]),_:1}))}}),Jt=`<template>
  <Space :size="24">
    <FloatButton :icon="EditOutlined" disabled tooltip="禁用态" :style="s" />
    <FloatButton type="primary" :icon="DeleteOutlined" disabled :style="s" />
    <FloatButton
      href="https://example.com"
      target="_blank"
      disabled
      :icon="LinkOutlined"
      tooltip="禁用的链接（不跳转）"
      :style="s"
    />
  </Space>
</template>

<script setup lang="ts">
import { FloatButton, Space } from '@hmfw/ant-design'
import { EditOutlined, DeleteOutlined, LinkOutlined } from '@hmfw/icons'

const s = { position: 'static' } as const
<\/script>
`,Kt={style:{display:"flex","flex-direction":"column",gap:"16px"}},Xt={class:"float-btn-demo"},Zt=f({__name:"FloatButtonGroupControlled",setup(n){const e=x(!1),d={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"},p=()=>{e.value=!e.value};return(o,i)=>(g(),B("div",Kt,[s("div",null,[i[1]||(i[1]=s("label",{style:{"margin-right":"8px"}},"受控展开状态：",-1)),a(t(yt),{onClick:at(p,["stop"])},{default:u(()=>[c(C(e.value?"关闭":"打开")+" (当前: "+C(e.value)+") ",1)]),_:1})]),s("div",Xt,[a(t(N),{open:e.value,"onUpdate:open":i[0]||(i[0]=m=>e.value=m),trigger:"click",type:"primary",icon:t(w),"close-icon":"✕",tooltip:"设置菜单",badge:{count:3},style:d},{default:u(()=>[a(t(l),{icon:t(E),tooltip:"编辑"},null,8,["icon"]),a(t(l),{icon:t(M),tooltip:"删除"},null,8,["icon"]),a(t(l),{icon:t(A),tooltip:"搜索"},null,8,["icon"])]),_:1},8,["open","icon"])])]))}}),tn=O(Zt,[["__scopeId","data-v-df1933b0"]]),nn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <label style="margin-right: 8px">受控展开状态：</label>
      <Button @click.stop="handleOpen"> {{ open ? '关闭' : '打开' }} (当前: {{ open }}) </Button>
    </div>
    <div class="float-btn-demo">
      <FloatButtonGroup
        v-model:open="open"
        trigger="click"
        type="primary"
        :icon="SettingOutlined"
        close-icon="✕"
        tooltip="设置菜单"
        :badge="{ count: 3 }"
        :style="pos"
      >
        <FloatButton :icon="EditOutlined" tooltip="编辑" />
        <FloatButton :icon="DeleteOutlined" tooltip="删除" />
        <FloatButton :icon="SearchOutlined" tooltip="搜索" />
      </FloatButtonGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, FloatButton, FloatButtonGroup } from '@hmfw/ant-design'
import { SettingOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@hmfw/icons'

const open = ref(false)
const pos = { position: 'absolute', insetInlineEnd: '24px', insetBlockEnd: '24px' } as const

const handleOpen = () => {
  open.value = !open.value
}
<\/script>

<style scoped>
.float-btn-demo {
  position: relative;
  height: 300px;
  border: 1px dashed #d9d9d9;
  border-radius: 8px;
  background: #fafafa;
}
</style>
`,on={class:"float-btn-demo"},sn=f({__name:"FloatButtonGroupDemo",setup(n){const e={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(d,p)=>(g(),B("div",on,[a(t(N),{shape:"circle",style:e},{default:u(()=>[a(t(l),{icon:t(E),tooltip:"编辑"},null,8,["icon"]),a(t(l),{icon:t(M),tooltip:"删除"},null,8,["icon"]),a(t(l),{icon:t(A),tooltip:"搜索"},null,8,["icon"])]),_:1})]))}}),an=O(sn,[["__scopeId","data-v-9b697206"]]),en=`<template>
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
`,ln=f({__name:"FloatButtonLink",setup(n){const e={position:"static"};return(d,p)=>(g(),D(t(G),{size:24},{default:u(()=>[a(t(l),{href:"https://github.com/ant-design/ant-design",target:"_blank",icon:t(rt),tooltip:"访问 GitHub",style:e},null,8,["icon"]),a(t(l),{href:"https://ant.design",target:"_blank",type:"primary",shape:"square",content:"官网",style:e}),a(t(l),{href:"#float-button",icon:t(X),tooltip:"锚点跳转",style:e},null,8,["icon"])]),_:1}))}}),pn=`<template>
  <Space :size="24">
    <FloatButton
      href="https://github.com/ant-design/ant-design"
      target="_blank"
      :icon="GithubOutlined"
      tooltip="访问 GitHub"
      :style="s"
    />
    <FloatButton href="https://ant.design" target="_blank" type="primary" shape="square" content="官网" :style="s" />
    <FloatButton href="#float-button" :icon="LinkOutlined" tooltip="锚点跳转" :style="s" />
  </Space>
</template>

<script setup lang="ts">
import { FloatButton, Space } from '@hmfw/ant-design'
import { GithubOutlined, LinkOutlined } from '@hmfw/icons'

const s = { position: 'static' } as const
<\/script>
`,cn={class:"float-btn-demo"},dn=f({__name:"FloatButtonMenu",setup(n){const e={position:"absolute",insetInlineEnd:"120px",insetBlockEnd:"24px"},d={position:"absolute",insetInlineEnd:"24px",insetBlockEnd:"24px"};return(p,o)=>(g(),B("div",cn,[a(t(N),{trigger:"click",type:"primary",icon:t(w),style:e},{default:u(()=>[a(t(l),{icon:t(E),tooltip:"编辑"},null,8,["icon"]),a(t(l),{icon:t(A),tooltip:"搜索"},null,8,["icon"])]),_:1},8,["icon"]),a(t(N),{trigger:"hover",style:d},{default:u(()=>[a(t(l),{icon:t(E),tooltip:"编辑"},null,8,["icon"]),a(t(l),{icon:t(M),tooltip:"删除"},null,8,["icon"])]),_:1})]))}}),un=O(dn,[["__scopeId","data-v-a6c8d123"]]),rn=`<template>
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
`,mn=f({__name:"FloatButtonTooltip",setup(n){const e={position:"static"};return(d,p)=>(g(),D(t(G),{size:24},{default:u(()=>[a(t(l),{icon:t(K),tooltip:"字符串提示",style:e},null,8,["icon"]),a(t(l),{icon:t(L),tooltip:{title:"自定义位置",placement:"top"},style:e},null,8,["icon"]),a(t(l),{type:"primary",icon:t(mt),tooltip:{title:"带颜色的提示",color:"#108ee9"},style:e},null,8,["icon"])]),_:1}))}}),kn=`<template>
  <Space :size="24">
    <FloatButton :icon="QuestionCircleOutlined" tooltip="字符串提示" :style="s" />
    <FloatButton :icon="InfoCircleOutlined" :tooltip="{ title: '自定义位置', placement: 'top' }" :style="s" />
    <FloatButton
      type="primary"
      :icon="BulbOutlined"
      :tooltip="{ title: '带颜色的提示', color: '#108ee9' }"
      :style="s"
    />
  </Space>
</template>

<script setup lang="ts">
import { FloatButton, Space } from '@hmfw/ant-design'
import { QuestionCircleOutlined, InfoCircleOutlined, BulbOutlined } from '@hmfw/icons'

const s = { position: 'static' } as const
<\/script>
`,gn=f({__name:"FloatButtonTypes",setup(n){const e={position:"static"};return(d,p)=>(g(),D(t(G),{size:24},{default:u(()=>[a(t(l),{icon:t(w),style:e},null,8,["icon"]),a(t(l),{type:"primary",icon:t(w),style:e},null,8,["icon"]),a(t(l),{shape:"square",icon:t(w),style:e},null,8,["icon"]),a(t(l),{type:"primary",shape:"square",icon:t(w),style:e},null,8,["icon"]),a(t(l),{type:"primary",shape:"square",content:"文档",style:e})]),_:1}))}}),fn=`<template>
  <Space :size="24">
    <FloatButton :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" :icon="SettingOutlined" :style="s" />
    <FloatButton shape="square" :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" shape="square" :icon="SettingOutlined" :style="s" />
    <FloatButton type="primary" shape="square" content="文档" :style="s" />
  </Space>
</template>

<script setup lang="ts">
import { FloatButton, Space } from '@hmfw/ant-design'
import { SettingOutlined } from '@hmfw/icons'

// Render inline within the demo box instead of fixed to the viewport
const s = { position: 'static' } as const
<\/script>
`,bn={class:"markdown-body"},$n={__name:"float-button",setup(n,{expose:e}){return e({frontmatter:{}}),(p,o)=>{const i=et("DemoBlock");return g(),B("div",bn,[o[0]||(o[0]=s("h1",{id:"floatbutton-悬浮按钮",tabindex:"-1"},"FloatButton 悬浮按钮",-1)),o[1]||(o[1]=s("p",null,"悬浮于页面上方的按钮。",-1)),o[2]||(o[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),o[3]||(o[3]=s("ul",null,[s("li",null,"用于网站上的全局功能"),s("li",null,"无论浏览到页面的哪个位置，都可以看见的按钮")],-1)),o[4]||(o[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),o[5]||(o[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),o[6]||(o[6]=s("p",null,"最简单的用法。",-1)),a(i,{title:"基础用法",source:t(Lt)},{default:u(()=>[a(zt)]),_:1},8,["source"]),o[7]||(o[7]=s("h3",{id:"不同类型",tabindex:"-1"},"不同类型",-1)),o[8]||(o[8]=s("p",null,[c("提供 "),s("code",null,"default"),c(" 和 "),s("code",null,"primary"),c(" 两种类型，以及 "),s("code",null,"circle"),c(" 和 "),s("code",null,"square"),c(" 两种形状。")],-1)),a(i,{title:"不同类型",source:t(fn)},{default:u(()=>[a(gn)]),_:1},8,["source"]),o[9]||(o[9]=s("h3",{id:"徽标数字",tabindex:"-1"},"徽标数字",-1)),o[10]||(o[10]=s("p",null,"带徽标的悬浮按钮，徽标基于 Badge 组件实现。",-1)),a(i,{title:"徽标数字",source:t(Dt)},{default:u(()=>[a(Nt)]),_:1},8,["source"]),o[11]||(o[11]=s("h3",{id:"禁用状态",tabindex:"-1"},"禁用状态",-1)),o[12]||(o[12]=s("p",null,[c("通过 "),s("code",null,"disabled"),c(" 禁用按钮，禁用的锚点按钮不会触发跳转。")],-1)),a(i,{title:"禁用状态",source:t(Jt)},{default:u(()=>[a(Yt)]),_:1},8,["source"]),o[13]||(o[13]=s("h3",{id:"链接跳转",tabindex:"-1"},"链接跳转",-1)),o[14]||(o[14]=s("p",null,[c("设置 "),s("code",null,"href"),c(" 后按钮渲染为 "),s("code",null,"<a>"),c(" 标签，支持 "),s("code",null,"target"),c(" 属性。")],-1)),a(i,{title:"链接跳转",source:t(pn)},{default:u(()=>[a(ln)]),_:1},8,["source"]),o[15]||(o[15]=s("h3",{id:"气泡提示",tabindex:"-1"},"气泡提示",-1)),o[16]||(o[16]=s("p",null,[s("code",null,"tooltip"),c(" 支持字符串或 "),s("code",null,"TooltipProps"),c(" 对象，可自定义位置、颜色等。")],-1)),a(i,{title:"气泡提示",source:t(kn)},{default:u(()=>[a(mn)]),_:1},8,["source"]),o[17]||(o[17]=s("h3",{id:"浮动按钮组",tabindex:"-1"},"浮动按钮组",-1)),o[18]||(o[18]=s("p",null,[c("使用 "),s("code",null,"FloatButtonGroup"),c(" 可以将多个悬浮按钮组合在一起。设置 "),s("code",null,"trigger"),c(" 后会折叠为可展开的菜单。")],-1)),a(i,{title:"浮动按钮组",source:t(en)},{default:u(()=>[a(an)]),_:1},8,["source"]),o[19]||(o[19]=s("h3",{id:"菜单模式",tabindex:"-1"},"菜单模式",-1)),o[20]||(o[20]=s("p",null,[c("设置 "),s("code",null,"trigger"),c(" 为 "),s("code",null,"hover"),c(" 或 "),s("code",null,"click"),c("，鼠标悬停或点击展开菜单。")],-1)),a(i,{title:"菜单模式",source:t(rn)},{default:u(()=>[a(un)]),_:1},8,["source"]),o[21]||(o[21]=s("h3",{id:"受控的菜单",tabindex:"-1"},"受控的菜单",-1)),o[22]||(o[22]=s("p",null,[c("通过 "),s("code",null,"v-model:open"),c(" 受控展开状态，触发按钮可配置 "),s("code",null,"closeIcon"),c("、"),s("code",null,"tooltip"),c("、"),s("code",null,"badge"),c(" 等。")],-1)),a(i,{title:"受控的菜单",source:t(nn)},{default:u(()=>[a(tn)]),_:1},8,["source"]),o[23]||(o[23]=s("h3",{id:"回到顶部",tabindex:"-1"},"回到顶部",-1)),o[24]||(o[24]=s("p",null,[s("code",null,"FloatButton.BackTop"),c(" 返回页面顶部的操作按钮。")],-1)),a(i,{title:"回到顶部",source:t($t)},{default:u(()=>[a(It)]),_:1},8,["source"]),o[25]||(o[25]=s("h3",{id:"自定义-backtop",tabindex:"-1"},"自定义 BackTop",-1)),o[26]||(o[26]=s("p",null,[c("可自定义 "),s("code",null,"icon"),c("、"),s("code",null,"type"),c("、"),s("code",null,"shape"),c("、"),s("code",null,"content"),c("、"),s("code",null,"tooltip"),c(" 等样式。")],-1)),a(i,{title:"自定义 BackTop",source:t(Ct)},{default:u(()=>[a(wt)]),_:1},8,["source"]),o[27]||(o[27]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),o[28]||(o[28]=s("p",null,[c("通过 "),s("code",null,"classNames"),c(" / "),s("code",null,"styles"),c(" 对各子元素做细粒度样式控制。")],-1)),a(i,{title:"语义化 className 与 style",source:t(Wt)},{default:u(()=>[a(Ut)]),_:1},8,["source"]),o[29]||(o[29]=lt(`<h2 id="api" tabindex="-1">API</h2><p>组件提供了三种使用方式：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> FloatButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>

<span class="token comment">// 复合写法</span>
<span class="token operator">&lt;</span>FloatButton <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>FloatButton<span class="token punctuation">.</span>Group <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>FloatButton<span class="token punctuation">.</span>BackTop <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 或具名导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FloatButton<span class="token punctuation">,</span> FloatButtonGroup<span class="token punctuation">,</span> FloatButtonBackTop <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>
</code></pre><h3 id="floatbutton-props" tabindex="-1">FloatButton Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>设置按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>设置按钮形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>icon</td><td>自定义图标</td><td><code>IconComponent | string | slot</code></td><td><code>FileTextOutlined</code></td></tr><tr><td>content</td><td>文字及其他内容（推荐用于 <code>square</code> 形状；<code>circle</code> 空间窄）</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>tooltip</td><td>气泡提示的内容</td><td><code>string | TooltipProps | slot</code></td><td>-</td></tr><tr><td>badge</td><td>带徽标数字的悬浮按钮</td><td><code>{ count?, dot?, overflowCount?, color?, offset? }</code></td><td>-</td></tr><tr><td>href</td><td>点击跳转的地址，指定时渲染为 <code>a</code> 标签</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>相当于 <code>a</code> 标签的 <code>target</code> 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>htmlType</td><td>设置原生 <code>button</code> 的 <code>type</code></td><td><code>&#39;submit&#39; | &#39;reset&#39; | &#39;button&#39;</code></td><td><code>&#39;button&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>FloatButtonClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>FloatButtonStyles</code></td><td>-</td></tr></tbody></table><h3 id="floatbutton-events" tabindex="-1">FloatButton Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="floatbuttongroup-props" tabindex="-1">FloatButton.Group Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>触发方式（不设置时默认展示所有子按钮）</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td>-</td></tr><tr><td>type</td><td>设置触发按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>设置子按钮形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>placement</td><td>自定义菜单展开方向</td><td><code>&#39;top&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;left&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>open</td><td>受控展开状态</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认展开状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>触发按钮的图标</td><td><code>IconComponent | string</code></td><td><code>PlusOutlined</code></td></tr><tr><td>closeIcon</td><td>展开时触发按钮的图标</td><td><code>IconComponent | string</code></td><td><code>CloseOutlined</code></td></tr><tr><td>tooltip</td><td>触发按钮的气泡提示</td><td><code>string | TooltipProps</code></td><td>-</td></tr><tr><td>badge</td><td>触发按钮的徽标</td><td><code>FloatButtonBadgeProps</code></td><td>-</td></tr><tr><td>content</td><td>触发按钮的内容（square 形状）</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="floatbuttongroup-events" tabindex="-1">FloatButton.Group Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>openChange / update:open</td><td>展开状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>click</td><td>点击触发按钮时的回调（仅菜单模式）</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="floatbuttonbacktop-props" tabindex="-1">FloatButton.BackTop Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityHeight</td><td>滚动高度达到此参数值才出现</td><td><code>number</code></td><td><code>400</code></td></tr><tr><td>target</td><td>设置需要监听其滚动事件的元素</td><td><code>() =&gt; HTMLElement | Window | Document</code></td><td><code>() =&gt; window</code></td></tr><tr><td>duration</td><td>回到顶部所需时间（ms）</td><td><code>number</code></td><td><code>450</code></td></tr><tr><td>icon</td><td>自定义图标</td><td><code>IconComponent | string</code></td><td><code>VerticalAlignTopOutlined</code></td></tr><tr><td>type</td><td>设置按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>设置按钮形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>tooltip</td><td>气泡提示的内容</td><td><code>string | TooltipProps</code></td><td>-</td></tr><tr><td>content</td><td>文字及其他内容（square 形状）</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="floatbuttonbacktop-events" tabindex="-1">FloatButton.BackTop Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>content</code> key 仅在 <code>shape=&quot;square&quot;</code> 时渲染，<code>circle</code> 形状不显示文本内容</li><li>Badge 和 Tooltip 是外部组件，不在 <code>classNames</code> / <code>styles</code> 控制范围内</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-float-btn-disabled</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>FloatButton 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>浮层背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>三级填充色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-light-solid</code></td><td>浅色文本色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-font-family</code></td><td>字体族</td><td><code>-apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, &#39;Helvetica Neue&#39;, …</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,33))])}}};export{$n as default};
