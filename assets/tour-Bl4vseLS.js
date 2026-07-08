import{B}from"./Button-CnMq9a0G.js";import{S as hn}from"./Space-CKjJe6BD.js";import{d as j,u as Sn,r as y,m as A,k as Bn,y as Nn,v as u,I as Tn,a as $,n as Cn,B as Pn,o as D,b as L,c as i,e as k,w as x,g as b,f as e,_ as In,h as On,i as $n}from"./index-Dhlw_h7w.js";import{c as v}from"./cls-S9IiI6wd.js";import{C as Vn}from"./CloseOutlined-N_iBbuHV.js";import"./LoadingOutlined-BpH-uTyr.js";function yn(n){if(!n)return;const{children:o,onClick:s,...m}=n;return m}function bn(n){return n?typeof n=="function"?n():document.querySelector(n):null}function zn(n){if(!n)return null;const o=n.getBoundingClientRect();return{top:o.top+window.scrollY,left:o.left+window.scrollX,width:o.width,height:o.height}}function En(n,o,s="bottom",m=12){if(!n||!o)return{top:100,left:100};const t=o.offsetWidth||300,d=o.offsetHeight||200,w=n.left+n.width/2,h=n.top+n.height/2;if(s.startsWith("bottom")){const c=n.top+n.height+m,r=s==="bottom"?w-t/2:s==="bottomLeft"?n.left:n.left+n.width-t;return{top:c,left:r}}if(s.startsWith("top")){const c=n.top-d-m,r=s==="top"?w-t/2:s==="topLeft"?n.left:n.left+n.width-t;return{top:c,left:r}}if(s.startsWith("right")){const c=n.left+n.width+m;return{top:s==="right"?h-d/2:s==="rightTop"?n.top:n.top+n.height-d,left:c}}if(s.startsWith("left")){const c=n.left-t-m;return{top:s==="left"?h-d/2:s==="leftTop"?n.top:n.top+n.height-d,left:c}}return{top:n.top+n.height+m,left:w-t/2}}function F(n){return n==null?null:typeof n=="function"?n():Pn(n)?n:String(n)}const T=j({name:"Tour",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},current:{type:Number,default:void 0},defaultCurrent:{type:Number,default:0},steps:{type:Array,default:()=>[]},arrow:{type:[Boolean,Object],default:!0},placement:{type:String,default:void 0},mask:{type:[Boolean,Object],default:!0},type:{type:String,default:"default"},scrollIntoViewOptions:{type:[Boolean,Object],default:!0},zIndex:{type:Number,default:1001},gap:{type:Object,default:void 0},indicatorsRender:{type:Function,default:void 0},closeIcon:{type:[Object,Function,Boolean],default:void 0},classNames:{type:Object,default:void 0},styles:{type:Object,default:void 0}},emits:["update:open","update:current","change","close","finish"],setup(n,{emit:o}){const s=Sn("tour"),m=y(n.defaultOpen),t=y(n.defaultCurrent),d=y(null),w=y({top:100,left:100}),h=y(null),c=$(()=>n.open!==void 0?n.open:m.value),r=$(()=>n.current!==void 0?n.current:t.value),l=$(()=>n.steps[r.value]??null),P=$(()=>n.steps.length),I=$(()=>{var S;const p=(S=l.value)==null?void 0:S.mask;return p!==void 0?p:n.mask}),a=$(()=>{var p;return((p=l.value)==null?void 0:p.type)??n.type});A(()=>n.open,p=>{p!==void 0&&(m.value=p)}),A(()=>n.current,p=>{p!==void 0&&(t.value=p)});async function g(){var C;const p=l.value?bn(l.value.target):null;if(!p)return;const S=((C=l.value)==null?void 0:C.scrollIntoViewOptions)??n.scrollIntoViewOptions??!0;if(S){const z=typeof S=="boolean"?{block:"center",behavior:"smooth"}:S;p.scrollIntoView(z)}}async function V(){var S,C;await Cn();const p=l.value?bn(l.value.target):null;if(h.value=zn(p),d.value){const z=((S=l.value)==null?void 0:S.placement)??n.placement??"bottom",O=((C=n.gap)==null?void 0:C.offset)??12,E=typeof O=="number"?O:O[0];w.value=En(h.value,d.value,z,E)}}A([c,r],async([p])=>{p&&(await g(),await V())},{immediate:!0}),Bn(()=>{window.addEventListener("resize",V),window.addEventListener("scroll",V,!0)}),Nn(()=>{window.removeEventListener("resize",V),window.removeEventListener("scroll",V,!0)});function M(){m.value=!1,o("update:open",!1),o("close")}function U(p){t.value=p,o("update:current",p),o("change",p)}function xn(){r.value>0&&U(r.value-1)}function wn(){r.value<P.value-1?U(r.value+1):(M(),o("finish"))}const qn=()=>n.closeIcon===!1?null:n.closeIcon===void 0?u(Vn,{class:"hmfw-icon"}):typeof n.closeIcon=="function"?n.closeIcon():n.closeIcon;return()=>{var W,H,X,Y,G,J,K,Q,Z,R,_,nn,tn,sn,an,on,en,pn,ln,cn,rn,un,dn,kn,mn,fn,gn;if(!c.value||!l.value)return null;const p=a.value==="primary",S=r.value===P.value-1,C=I.value!==!1,z=typeof I.value=="object"?I.value.style:void 0,O=typeof I.value=="object"?I.value.color:"rgba(0,0,0,0.45)",E=qn();return u(Tn,{to:"body"},[u("div",{class:v(`${s}-root`,(W=n.classNames)==null?void 0:W.root),style:{zIndex:n.zIndex,...(H=n.styles)==null?void 0:H.root}},[C&&u("div",{class:v(`${s}-mask`,(X=n.classNames)==null?void 0:X.mask),style:{...z,...(Y=n.styles)==null?void 0:Y.mask}},[h.value?u("svg",{class:`${s}-mask-svg`,width:"100%",height:"100%"},[u("defs",[u("mask",{id:"tour-mask"},[u("rect",{width:"100%",height:"100%",fill:"white"}),u("rect",{x:h.value.left-4,y:h.value.top-4,width:h.value.width+8,height:h.value.height+8,rx:((G=n.gap)==null?void 0:G.radius)??4,fill:"black"})])]),u("rect",{width:"100%",height:"100%",fill:O,mask:"url(#tour-mask)"})]):u("div",{class:`${s}-mask-fill`,style:{background:O}})]),u("div",{ref:d,class:v(`${s}-popover`,{[`${s}-popover-primary`]:p},l.value.className,(J=n.classNames)==null?void 0:J.popover),style:{position:"absolute",top:`${w.value.top}px`,left:`${w.value.left}px`,zIndex:n.zIndex+1,...l.value.style,...(K=n.styles)==null?void 0:K.popover}},[u("div",{class:v(`${s}-popover-inner`,(Q=n.classNames)==null?void 0:Q.popoverInner),style:(Z=n.styles)==null?void 0:Z.popoverInner},[E!==null&&u("button",{type:"button",class:v(`${s}-close`,(R=n.classNames)==null?void 0:R.close),style:(_=n.styles)==null?void 0:_.close,onClick:M,"aria-label":"Close"},[E]),l.value.cover&&u("div",{class:v(`${s}-cover`,(nn=n.classNames)==null?void 0:nn.cover),style:(tn=n.styles)==null?void 0:tn.cover},[typeof l.value.cover=="string"?u("img",{src:l.value.cover,alt:""}):F(l.value.cover)]),l.value.title&&u("div",{class:v(`${s}-title`,(sn=n.classNames)==null?void 0:sn.title),style:(an=n.styles)==null?void 0:an.title},[F(l.value.title)]),l.value.description&&u("div",{class:v(`${s}-description`,(on=n.classNames)==null?void 0:on.description),style:(en=n.styles)==null?void 0:en.description},[F(l.value.description)]),u("div",{class:v(`${s}-footer`,(pn=n.classNames)==null?void 0:pn.footer),style:(ln=n.styles)==null?void 0:ln.footer},[P.value>1&&u("div",{class:v(`${s}-indicators`,(cn=n.classNames)==null?void 0:cn.indicators),style:(rn=n.styles)==null?void 0:rn.indicators},[n.indicatorsRender?n.indicatorsRender(r.value,P.value):n.steps.map((q,f)=>{var N,vn;return u("span",{key:f,class:v(`${s}-indicator`,{[`${s}-indicator-active`]:f===r.value},(N=n.classNames)==null?void 0:N.indicator),style:(vn=n.styles)==null?void 0:vn.indicator,onClick:()=>U(f)})})]),u("div",{class:v(`${s}-buttons`,(un=n.classNames)==null?void 0:un.buttons),style:(dn=n.styles)==null?void 0:dn.buttons},[r.value>0&&u(B,{size:"small",type:"default",ghost:p,class:v(`${s}-prev-btn`,(kn=n.classNames)==null?void 0:kn.prevBtn),style:(mn=n.styles)==null?void 0:mn.prevBtn,onClick:()=>{var q,f,N;(N=(f=(q=l.value)==null?void 0:q.prevButtonProps)==null?void 0:f.onClick)==null||N.call(f),xn()},...yn(l.value.prevButtonProps)},{default:()=>{var q,f;return((f=(q=l.value)==null?void 0:q.prevButtonProps)==null?void 0:f.children)??"上一步"}}),u(B,{size:"small",type:p?"default":"primary",ghost:p,class:v(`${s}-next-btn`,(fn=n.classNames)==null?void 0:fn.nextBtn),style:(gn=n.styles)==null?void 0:gn.nextBtn,onClick:()=>{var q,f,N;(N=(f=(q=l.value)==null?void 0:q.nextButtonProps)==null?void 0:f.onClick)==null||N.call(f),wn()},...yn(l.value.nextButtonProps)},{default:()=>{var q,f;return((f=(q=l.value)==null?void 0:q.nextButtonProps)==null?void 0:f.children)??(S?"完成":"下一步")}})])])])])])])}}}),jn=j({__name:"TourBasic",setup(n){const o=y(!1),s=[{title:"第一步",description:"这是漫游引导的第一步，介绍页面的主要功能。"},{title:"第二步",description:"这是第二步，继续介绍其他功能。"},{title:"完成",description:"引导完成！现在你已经了解了所有功能。"}];return(m,t)=>(D(),L("div",null,[i(k(hn),null,{default:x(()=>[i(k(B),{ref:"btnRef",type:"primary",onClick:t[0]||(t[0]=d=>o.value=!0)},{default:x(()=>[...t[3]||(t[3]=[b(" 开始引导 ",-1)])]),_:1},512)]),_:1}),i(k(T),{open:o.value,"onUpdate:open":t[1]||(t[1]=d=>o.value=d),steps:s,onFinish:t[2]||(t[2]=d=>o.value=!1)},null,8,["open"])]))}}),Dn=`<template>
  <div>
    <Space>
      <Button ref="btnRef" type="primary" @click="open = true"> 开始引导 </Button>
    </Space>
    <Tour v-model:open="open" :steps="steps" @finish="open = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tour, Button, Space } from '@hmfw/ant-design'
import type { TourStep } from '@hmfw/ant-design'

const open = ref(false)

const steps: TourStep[] = [
  {
    title: '第一步',
    description: '这是漫游引导的第一步，介绍页面的主要功能。',
  },
  {
    title: '第二步',
    description: '这是第二步，继续介绍其他功能。',
  },
  {
    title: '完成',
    description: '引导完成！现在你已经了解了所有功能。',
  },
]
<\/script>
`,Ln={style:{display:"flex","flex-direction":"column",gap:"24px"}},Un=j({__name:"TourClassNames",setup(n){const o=y(!1),s=y(!1),m=y(!1),t=y(!1),d=y(!1),w=y(),h=[{title:"渐变卡片",description:"通过 classNames 自定义卡片背景和遮罩颜色"}],c=[{title:"自定义文字",description:"可以对标题、描述、关闭按钮分别应用不同样式",target:()=>w.value||null}],r=[{title:"第一步",description:"这是多步骤引导的第一步"},{title:"第二步",description:"这是多步骤引导的第二步"},{title:"第三步",description:"这是多步骤引导的第三步"}],l=[{title:"内联样式",description:"通过 styles 属性应用内联样式，优先级更高"}],P=[{title:"组合样式",description:"classNames 和 styles 可以同时使用，实现更灵活的样式控制"},{title:"完成",description:"所有样式都生效了"}];return(I,a)=>(D(),L("div",Ln,[e("div",null,[a[11]||(a[11]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义遮罩与卡片样式：",-1)),i(k(B),{type:"primary",onClick:a[0]||(a[0]=g=>o.value=!0)},{default:x(()=>[...a[10]||(a[10]=[b("打开渐变卡片引导",-1)])]),_:1}),i(k(T),{open:o.value,"onUpdate:open":a[1]||(a[1]=g=>o.value=g),steps:h,"class-names":{mask:"custom-mask",popover:"custom-popover",popoverInner:"custom-popover-inner"}},null,8,["open"])]),e("div",null,[a[13]||(a[13]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义标题与描述样式：",-1)),i(k(B),{type:"primary",onClick:a[2]||(a[2]=g=>s.value=!0)},{default:x(()=>[...a[12]||(a[12]=[b("打开自定义文字引导",-1)])]),_:1}),e("div",{ref_key:"target2",ref:w,style:{"margin-top":"8px",padding:"16px",border:"1px dashed #d9d9d9","border-radius":"8px"}}," 目标元素 ",512),i(k(T),{open:s.value,"onUpdate:open":a[3]||(a[3]=g=>s.value=g),steps:c,"class-names":{title:"custom-title",description:"custom-description",close:"custom-close"}},null,8,["open"])]),e("div",null,[a[15]||(a[15]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义指示器与按钮样式：",-1)),i(k(B),{type:"primary",onClick:a[4]||(a[4]=g=>m.value=!0)},{default:x(()=>[...a[14]||(a[14]=[b("打开多步骤引导",-1)])]),_:1}),i(k(T),{open:m.value,"onUpdate:open":a[5]||(a[5]=g=>m.value=g),steps:r,"class-names":{indicators:"custom-indicators",indicator:"custom-indicator",buttons:"custom-buttons",prevBtn:"custom-prev-btn",nextBtn:"custom-next-btn"}},null,8,["open"])]),e("div",null,[a[17]||(a[17]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),i(k(B),{type:"primary",onClick:a[6]||(a[6]=g=>t.value=!0)},{default:x(()=>[...a[16]||(a[16]=[b("打开内联样式引导",-1)])]),_:1}),i(k(T),{open:t.value,"onUpdate:open":a[7]||(a[7]=g=>t.value=g),steps:l,styles:{popoverInner:{borderRadius:"16px",padding:"24px"},title:{color:"#722ed1",fontSize:"18px"},description:{color:"#52c41a",fontSize:"15px"},footer:{marginTop:"20px"}}},null,8,["open"])]),e("div",null,[a[19]||(a[19]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用 classNames 与 styles：",-1)),i(k(B),{type:"primary",onClick:a[8]||(a[8]=g=>d.value=!0)},{default:x(()=>[...a[18]||(a[18]=[b("打开组合样式引导",-1)])]),_:1}),i(k(T),{open:d.value,"onUpdate:open":a[9]||(a[9]=g=>d.value=g),steps:P,"class-names":{popoverInner:"gradient-card",indicator:"gradient-indicator"},styles:{title:{fontWeight:"bold"},buttons:{gap:"12px"}}},null,8,["open"])])]))}}),An=In(Un,[["__scopeId","data-v-df9ad9f4"]]),Fn=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义遮罩和弹出卡片 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义遮罩与卡片样式：</div>
      <Button type="primary" @click="open1 = true">打开渐变卡片引导</Button>
      <Tour
        v-model:open="open1"
        :steps="steps1"
        :class-names="{
          mask: 'custom-mask',
          popover: 'custom-popover',
          popoverInner: 'custom-popover-inner',
        }"
      />
    </div>

    <!-- 场景 2：自定义标题和描述 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义标题与描述样式：</div>
      <Button type="primary" @click="open2 = true">打开自定义文字引导</Button>
      <div ref="target2" style="margin-top: 8px; padding: 16px; border: 1px dashed #d9d9d9; border-radius: 8px">
        目标元素
      </div>
      <Tour
        v-model:open="open2"
        :steps="steps2"
        :class-names="{
          title: 'custom-title',
          description: 'custom-description',
          close: 'custom-close',
        }"
      />
    </div>

    <!-- 场景 3：自定义指示器和按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义指示器与按钮样式：</div>
      <Button type="primary" @click="open3 = true">打开多步骤引导</Button>
      <Tour
        v-model:open="open3"
        :steps="steps3"
        :class-names="{
          indicators: 'custom-indicators',
          indicator: 'custom-indicator',
          buttons: 'custom-buttons',
          prevBtn: 'custom-prev-btn',
          nextBtn: 'custom-next-btn',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Button type="primary" @click="open4 = true">打开内联样式引导</Button>
      <Tour
        v-model:open="open4"
        :steps="steps4"
        :styles="{
          popoverInner: { borderRadius: '16px', padding: '24px' },
          title: { color: '#722ed1', fontSize: '18px' },
          description: { color: '#52c41a', fontSize: '15px' },
          footer: { marginTop: '20px' },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用 classNames 与 styles：</div>
      <Button type="primary" @click="open5 = true">打开组合样式引导</Button>
      <Tour
        v-model:open="open5"
        :steps="steps5"
        :class-names="{
          popoverInner: 'gradient-card',
          indicator: 'gradient-indicator',
        }"
        :styles="{
          title: { fontWeight: 'bold' },
          buttons: { gap: '12px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Tour } from '@hmfw/ant-design'

const open1 = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const open4 = ref(false)
const open5 = ref(false)

const target2 = ref<HTMLElement>()

const steps1 = [
  {
    title: '渐变卡片',
    description: '通过 classNames 自定义卡片背景和遮罩颜色',
  },
]

const steps2 = [
  {
    title: '自定义文字',
    description: '可以对标题、描述、关闭按钮分别应用不同样式',
    target: () => target2.value || null,
  },
]

const steps3 = [
  {
    title: '第一步',
    description: '这是多步骤引导的第一步',
  },
  {
    title: '第二步',
    description: '这是多步骤引导的第二步',
  },
  {
    title: '第三步',
    description: '这是多步骤引导的第三步',
  },
]

const steps4 = [
  {
    title: '内联样式',
    description: '通过 styles 属性应用内联样式，优先级更高',
  },
]

const steps5 = [
  {
    title: '组合样式',
    description: 'classNames 和 styles 可以同时使用，实现更灵活的样式控制',
  },
  {
    title: '完成',
    description: '所有样式都生效了',
  },
]
<\/script>

<style scoped>
/* 场景 1：渐变卡片 */
:global(.custom-mask) {
  background: rgba(102, 126, 234, 0.25) !important;
  backdrop-filter: blur(4px);
}

:global(.custom-popover) {
  transform: scale(1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

:global(.custom-popover-inner) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4) !important;
}

:global(.custom-popover-inner .hmfw-tour-title) {
  color: white !important;
}

:global(.custom-popover-inner .hmfw-tour-description) {
  color: rgba(255, 255, 255, 0.9) !important;
}

/* 场景 2：自定义文字 */
:global(.custom-title) {
  color: #1890ff !important;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(24, 144, 255, 0.2);
}

:global(.custom-description) {
  color: #52c41a !important;
  font-size: 15px;
  line-height: 1.8;
}

:global(.custom-close) {
  color: #ff4d4f !important;
  font-size: 16px;
  transition: all 0.3s;
}

:global(.custom-close:hover) {
  color: #ff7875 !important;
  transform: rotate(90deg);
  background-color: rgba(255, 77, 79, 0.1) !important;
}

/* 场景 3：自定义指示器和按钮 */
:global(.custom-indicators) {
  gap: 10px;
}

:global(.custom-indicator) {
  width: 8px !important;
  height: 8px !important;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  transition: all 0.3s;
}

:global(.custom-indicator:hover) {
  transform: scale(1.3);
}

:global(.hmfw-tour-indicator-active.custom-indicator) {
  width: 24px !important;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
}

:global(.custom-buttons) {
  gap: 12px;
}

:global(.custom-prev-btn) {
  border-color: #d9d9d9;
  color: #595959;
  transition: all 0.3s;
}

:global(.custom-prev-btn:hover) {
  border-color: #40a9ff;
  color: #40a9ff;
  transform: translateX(-2px);
}

:global(.custom-next-btn) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border: none;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
  transition: all 0.3s;
}

:global(.custom-next-btn:hover) {
  transform: translateX(2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
}

/* 场景 5：组合样式 */
:global(.gradient-card) {
  background: linear-gradient(to right, #52c41a, #389e0d) !important;
  color: white !important;
}

:global(.gradient-card .hmfw-tour-title) {
  color: white !important;
}

:global(.gradient-card .hmfw-tour-description) {
  color: rgba(255, 255, 255, 0.9) !important;
}

:global(.gradient-indicator) {
  background: rgba(255, 255, 255, 0.5) !important;
}

:global(.hmfw-tour-indicator-active.gradient-indicator) {
  background: white !important;
  width: 20px !important;
}
</style>
`,Mn=j({__name:"TourType",setup(n){const o=y(!1),s=y(!1),m=[{title:"默认样式",description:"这是默认样式的引导，白色背景。"},{title:"第二步",description:"继续介绍功能..."}],t=[{title:"主题样式",description:"这是主题样式的引导，蓝色背景。"},{title:"第二步",description:"继续介绍功能..."}];function d(){o.value=!0}function w(){s.value=!0}return(h,c)=>(D(),L("div",null,[i(k(hn),null,{default:x(()=>[i(k(B),{type:"primary",onClick:d},{default:x(()=>[...c[4]||(c[4]=[b(" 默认样式 ",-1)])]),_:1}),i(k(B),{type:"primary",onClick:w},{default:x(()=>[...c[5]||(c[5]=[b(" 主题样式 ",-1)])]),_:1})]),_:1}),i(k(T),{open:o.value,"onUpdate:open":c[0]||(c[0]=r=>o.value=r),steps:m,onFinish:c[1]||(c[1]=r=>o.value=!1)},null,8,["open"]),i(k(T),{open:s.value,"onUpdate:open":c[2]||(c[2]=r=>s.value=r),type:"primary",steps:t,onFinish:c[3]||(c[3]=r=>s.value=!1)},null,8,["open"])]))}}),Wn=`<template>
  <div>
    <Space>
      <Button type="primary" @click="openDefault"> 默认样式 </Button>
      <Button type="primary" @click="openPrimary"> 主题样式 </Button>
    </Space>
    <Tour v-model:open="defaultOpen" :steps="defaultSteps" @finish="defaultOpen = false" />
    <Tour v-model:open="primaryOpen" type="primary" :steps="primarySteps" @finish="primaryOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tour, Button, Space } from '@hmfw/ant-design'
import type { TourStep } from '@hmfw/ant-design'

const defaultOpen = ref(false)
const primaryOpen = ref(false)

const defaultSteps: TourStep[] = [
  {
    title: '默认样式',
    description: '这是默认样式的引导，白色背景。',
  },
  {
    title: '第二步',
    description: '继续介绍功能...',
  },
]

const primarySteps: TourStep[] = [
  {
    title: '主题样式',
    description: '这是主题样式的引导，蓝色背景。',
  },
  {
    title: '第二步',
    description: '继续介绍功能...',
  },
]

function openDefault() {
  defaultOpen.value = true
}

function openPrimary() {
  primaryOpen.value = true
}
<\/script>
`,Hn={class:"markdown-body"},Zn={__name:"tour",setup(n,{expose:o}){return o({frontmatter:{}}),(m,t)=>{const d=On("DemoBlock");return D(),L("div",Hn,[t[0]||(t[0]=e("h1",{id:"tour-漫游引导",tabindex:"-1"},"Tour 漫游引导",-1)),t[1]||(t[1]=e("p",null,"用于分步引导用户了解产品功能的组件。",-1)),t[2]||(t[2]=e("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"新功能上线时，引导用户了解新功能"),e("li",null,"复杂操作流程，需要分步骤引导用户完成"),e("li",null,"对于特定的元素进行操作指引")],-1)),t[4]||(t[4]=e("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"最简单的用法，无目标元素，居中展示。",-1)),i(d,{title:"基础用法",source:k(Dn)},{default:x(()=>[i(jn)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"不同类型",tabindex:"-1"},"不同类型",-1)),t[8]||(t[8]=e("p",null,[b("Tour 有两种类型："),e("code",null,"default"),b(" 和 "),e("code",null,"primary"),b("。")],-1)),i(d,{title:"不同类型",source:k(Wn)},{default:x(()=>[i(Mn)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[10]||(t[10]=e("p",null,[b("通过 "),e("code",null,"classNames"),b(" / "),e("code",null,"styles"),b(" 对遮罩、卡片、标题、描述、指示器、按钮等子元素做细粒度样式控制。")],-1)),i(d,{title:"语义化 className 与 style",source:k(Fn)},{default:x(()=>[i(An)]),_:1},8,["source"]),t[11]||(t[11]=$n(`<h2 id="api" tabindex="-1">API</h2><h3 id="tour-props" tabindex="-1">Tour Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>是否显示</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>current (v-model)</td><td>当前步骤</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>steps</td><td>步骤配置</td><td><code>TourStep[]</code></td><td><code>[]</code></td></tr><tr><td>arrow</td><td>是否显示箭头</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>placement</td><td>引导卡片相对于目标元素的位置</td><td><code>TooltipPlacement</code></td><td><code>&#39;bottom&#39;</code></td></tr><tr><td>mask</td><td>是否显示遮罩</td><td><code>boolean | { style?: CSSProperties; color?: string }</code></td><td><code>true</code></td></tr><tr><td>type</td><td>类型，影响底色与文字颜色</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>scrollIntoViewOptions</td><td>是否滚动到目标元素，支持传入滚动选项</td><td><code>boolean | ScrollIntoViewOptions</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>Tour 的 z-index</td><td><code>number</code></td><td><code>1001</code></td></tr><tr><td>gap</td><td>引导卡片与目标元素的距离和箭头偏移</td><td><code>{ offset?: number | [number, number]; radius?: number }</code></td><td><code>{ offset: 12, radius: 4 }</code></td></tr><tr><td>indicatorsRender</td><td>自定义指示器渲染</td><td><code>(current: number, total: number) =&gt; VNode</code></td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标，设置为 <code>false</code> 时隐藏关闭按钮</td><td><code>VNode | (() =&gt; VNode) | false</code></td><td><code>&lt;CloseOutlined /&gt;</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TourClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TourStyles</code></td><td>-</td></tr></tbody></table><h3 id="tourstep" tabindex="-1">TourStep</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>description</td><td>描述</td><td><code>string | VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>target</td><td>目标元素（CSS 选择器或返回元素的函数）</td><td><code>string | (() =&gt; HTMLElement | null)</code></td><td>-</td></tr><tr><td>placement</td><td>弹出位置</td><td><code>TooltipPlacement</code></td><td>-</td></tr><tr><td>cover</td><td>封面图片或自定义内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>type</td><td>类型，优先级高于 Tour 的 type</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td>-</td></tr><tr><td>mask</td><td>是否显示遮罩，优先级高于 Tour 的 mask</td><td><code>boolean | { style?: CSSProperties; color?: string }</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>nextButtonProps</td><td>下一步按钮的属性</td><td><code>TourButtonProps</code></td><td>-</td></tr><tr><td>prevButtonProps</td><td>上一步按钮的属性</td><td><code>TourButtonProps</code></td><td>-</td></tr><tr><td>scrollIntoViewOptions</td><td>是否滚动到目标元素</td><td><code>boolean | ScrollIntoViewOptions</code></td><td>-</td></tr></tbody></table><h3 id="tourbuttonprops" tabindex="-1">TourButtonProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>children</td><td>按钮文本</td><td><code>string | VNode</code></td></tr><tr><td>onClick</td><td>点击回调</td><td><code>() =&gt; void</code></td></tr><tr><td>…其他</td><td>Button 组件的其他属性</td><td><code>ButtonProps</code></td></tr></tbody></table><h3 id="tour-events" tabindex="-1">Tour Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>步骤改变时</td><td><code>(current: number) =&gt; void</code></td></tr><tr><td>close</td><td>关闭时</td><td><code>() =&gt; void</code></td></tr><tr><td>finish</td><td>完成时（最后一步点击下一步）</td><td><code>() =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Tour 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TourClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器 div.hmfw-tour-root</span>
  mask<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 遮罩层 div.hmfw-tour-mask</span>
  popover<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 弹出卡片 div.hmfw-tour-popover</span>
  popoverInner<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 卡片内层 div.hmfw-tour-popover-inner</span>
  close<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 关闭按钮 button.hmfw-tour-close</span>
  cover<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 封面图片区域 div.hmfw-tour-cover</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题 div.hmfw-tour-title</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 描述文本 div.hmfw-tour-description</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 底部区域 div.hmfw-tour-footer</span>
  indicators<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 指示器容器 div.hmfw-tour-indicators</span>
  indicator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个指示器点 span.hmfw-tour-indicator</span>
  buttons<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 按钮组 div.hmfw-tour-buttons</span>
  prevBtn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 上一步按钮 button.hmfw-tour-prev-btn</span>
  nextBtn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 下一步/完成按钮 button.hmfw-tour-next-btn</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TourStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  mask<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  popover<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  popoverInner<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  close<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  cover<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  description<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  footer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  indicators<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  indicator<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  buttons<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  prevBtn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  nextBtn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- Tour 根容器 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>

  <span class="token comment">&lt;!-- 遮罩层 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-mask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.mask / styles.mask 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-mask-svg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 弹出卡片 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-popover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.popover / styles.popover 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-popover-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.popoverInner / styles.popoverInner 应用于此 --&gt;</span>

      <span class="token comment">&lt;!-- 关闭按钮 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.close / styles.close 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CloseOutlined</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

      <span class="token comment">&lt;!-- 封面（可选） --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-cover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.cover / styles.cover 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token comment">&lt;!-- 标题 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
        标题文本
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token comment">&lt;!-- 描述 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.description / styles.description 应用于此 --&gt;</span>
        描述文本
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token comment">&lt;!-- 底部 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.footer / styles.footer 应用于此 --&gt;</span>

        <span class="token comment">&lt;!-- 指示器 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-indicators<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.indicators / styles.indicators 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-indicator<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.indicator / styles.indicator 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-indicator hmfw-tour-indicator-active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-indicator<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 按钮组 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tour-buttons<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.buttons / styles.buttons 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-button hmfw-tour-prev-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.prevBtn / styles.prevBtn 应用于此 --&gt;</span>
            上一步
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-button hmfw-button-primary hmfw-tour-next-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.nextBtn / styles.nextBtn 应用于此 --&gt;</span>
            下一步
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open = true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>打开引导<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tour</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>steps<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      mask: &#39;my-mask&#39;,
      popoverInner: &#39;my-popover-inner&#39;,
      title: &#39;my-title&#39;,
      indicator: &#39;my-indicator&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Tour <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>

<span class="token keyword">const</span> open <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;欢迎&#39;</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">&#39;这是一个漫游引导&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;第二步&#39;</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">&#39;继续了解更多功能&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">/* 自定义遮罩 */</span>
<span class="token selector">:global(.my-mask)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 自定义卡片背景 */</span>
<span class="token selector">:global(.my-popover-inner)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 自定义标题 */</span>
<span class="token selector">:global(.my-title)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 自定义指示器 */</span>
<span class="token selector">:global(.my-indicator)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:global(.hmfw-tour-indicator-active.my-indicator)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20px <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open = true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>打开引导<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tour</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>steps<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      popoverInner: { borderRadius: &#39;16px&#39;, padding: &#39;24px&#39; },
      title: { color: &#39;#722ed1&#39;, fontSize: &#39;18px&#39; },
      description: { color: &#39;#52c41a&#39;, fontSize: &#39;15px&#39; },
      footer: { marginTop: &#39;20px&#39; },
      buttons: { gap: &#39;12px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Tour <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>

<span class="token keyword">const</span> open <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;内联样式&#39;</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">&#39;通过 styles 属性应用内联样式&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>Tour 是弹层组件，挂载到 <code>body</code> 之外，样式定义需要使用 <code>:global()</code> 而非 <code>:deep()</code></li><li><code>classNames.indicator</code> 会应用到所有指示器点，包括激活状态的点（<code>.hmfw-tour-indicator-active</code>）</li><li><code>classNames.prevBtn</code> 和 <code>classNames.nextBtn</code> 会与 Button 组件的样式类名合并</li><li>在 primary 类型下，弹出卡片的背景和文字颜色会自动切换为主题色和白色</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Tour 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>卡片背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色（primary 类型背景 &amp; 激活指示器）</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>标题文字颜色</td><td><code>rgba(0, 0, 0, 0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>描述文字颜色</td><td><code>rgba(0, 0, 0, 0.65)</code></td></tr><tr><td><code>--hmfw-color-text-tertiary</code></td><td>关闭图标颜色</td><td><code>rgba(0, 0, 0, 0.45)</code></td></tr><tr><td><code>--hmfw-color-white</code></td><td>白色（primary 类型文字颜色）</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-fill-quaternary</code></td><td>关闭按钮悬停背景</td><td><code>rgba(0, 0, 0, 0.04)</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>指示器默认背景</td><td><code>rgba(0, 0, 0, 0.15)</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>指示器悬停背景</td><td><code>rgba(0, 0, 0, 0.25)</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>卡片与封面圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>关闭按钮圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-box-shadow-secondary</code></td><td>卡片阴影</td><td><code>0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), …</code></td></tr></tbody></table>`,27))])}}};export{Zn as default};
