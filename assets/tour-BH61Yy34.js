import{B}from"./Button-B7cCICCq.js";import{S as yt}from"./Space-3bEPr88J.js";import{o as L,O as St,E as b,P as A,x as qt,w as Bt,p as i,T as Nt,f as $,t as Tt,r as Ct,A as j,k as D,n as d,L as m,Q as x,m as y,h as e,_ as Pt,H as It,l as Ot}from"./index-Bxt2WIDN.js";import{c as v}from"./cls-S9IiI6wd.js";import{C as $t}from"./CloseOutlined-U1-bOQkR.js";import"./LoadingOutlined-T50wZmIy.js";function vt(t){if(!t)return;const{children:o,onClick:s,...k}=t;return k}function bt(t){return t?typeof t=="function"?t():document.querySelector(t):null}function Vt(t){if(!t)return null;const o=t.getBoundingClientRect();return{top:o.top+window.scrollY,left:o.left+window.scrollX,width:o.width,height:o.height}}function zt(t,o,s="bottom",k=12){if(!t||!o)return{top:100,left:100};const n=o.offsetWidth||300,u=o.offsetHeight||200,w=t.left+t.width/2,h=t.top+t.height/2;if(s.startsWith("bottom")){const r=t.top+t.height+k,c=s==="bottom"?w-n/2:s==="bottomLeft"?t.left:t.left+t.width-n;return{top:r,left:c}}if(s.startsWith("top")){const r=t.top-u-k,c=s==="top"?w-n/2:s==="topLeft"?t.left:t.left+t.width-n;return{top:r,left:c}}if(s.startsWith("right")){const r=t.left+t.width+k;return{top:s==="right"?h-u/2:s==="rightTop"?t.top:t.top+t.height-u,left:r}}if(s.startsWith("left")){const r=t.left-n-k;return{top:s==="left"?h-u/2:s==="leftTop"?t.top:t.top+t.height-u,left:r}}return{top:t.top+t.height+k,left:w-n/2}}function F(t){return t==null?null:typeof t=="function"?t():Ct(t)?t:String(t)}const T=L({name:"Tour",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},current:{type:Number,default:void 0},defaultCurrent:{type:Number,default:0},steps:{type:Array,default:()=>[]},arrow:{type:[Boolean,Object],default:!0},placement:{type:String,default:void 0},mask:{type:[Boolean,Object],default:!0},type:{type:String,default:"default"},scrollIntoViewOptions:{type:[Boolean,Object],default:!0},zIndex:{type:Number,default:1001},gap:{type:Object,default:void 0},indicatorsRender:{type:Function,default:void 0},closeIcon:{type:[Object,Function,Boolean],default:void 0},classNames:{type:Object,default:void 0},styles:{type:Object,default:void 0}},emits:["update:open","update:current","change","close","finish"],setup(t,{emit:o}){const s=St("tour"),k=b(t.defaultOpen),n=b(t.defaultCurrent),u=b(null),w=b({top:100,left:100}),h=b(null),r=$(()=>t.open!==void 0?t.open:k.value),c=$(()=>t.current!==void 0?t.current:n.value),l=$(()=>t.steps[c.value]??null),P=$(()=>t.steps.length),I=$(()=>{var q;const p=(q=l.value)==null?void 0:q.mask;return p!==void 0?p:t.mask}),a=$(()=>{var p;return((p=l.value)==null?void 0:p.type)??t.type});A(()=>t.open,p=>{p!==void 0&&(k.value=p)}),A(()=>t.current,p=>{p!==void 0&&(n.value=p)});async function g(){var C;const p=l.value?bt(l.value.target):null;if(!p)return;const q=((C=l.value)==null?void 0:C.scrollIntoViewOptions)??t.scrollIntoViewOptions??!0;if(q){const z=typeof q=="boolean"?{block:"center",behavior:"smooth"}:q;p.scrollIntoView(z)}}async function V(){var q,C;await Tt();const p=l.value?bt(l.value.target):null;if(h.value=Vt(p),u.value){const z=((q=l.value)==null?void 0:q.placement)??t.placement??"bottom",O=((C=t.gap)==null?void 0:C.offset)??12,E=typeof O=="number"?O:O[0];w.value=zt(h.value,u.value,z,E)}}A([r,c],async([p])=>{p&&(await g(),await V())},{immediate:!0}),qt(()=>{window.addEventListener("resize",V),window.addEventListener("scroll",V,!0)}),Bt(()=>{window.removeEventListener("resize",V),window.removeEventListener("scroll",V,!0)});function M(){k.value=!1,o("update:open",!1),o("close")}function U(p){n.value=p,o("update:current",p),o("change",p)}function ht(){c.value>0&&U(c.value-1)}function xt(){c.value<P.value-1?U(c.value+1):(M(),o("finish"))}const wt=()=>t.closeIcon===!1?null:t.closeIcon===void 0?i($t,{class:"hmfw-icon"}):typeof t.closeIcon=="function"?t.closeIcon():t.closeIcon;return()=>{var W,H,X,Q,Y,G,J,K,Z,R,_,tt,nt,st,at,ot,et,pt,lt,rt,ct,it,dt,ut,mt,kt,ft;if(!r.value||!l.value)return null;const p=a.value==="primary",q=c.value===P.value-1,C=I.value!==!1,z=typeof I.value=="object"?I.value.style:void 0,O=typeof I.value=="object"?I.value.color:"rgba(0,0,0,0.45)",E=wt();return i(Nt,{to:"body"},[i("div",{class:v(`${s}-root`,(W=t.classNames)==null?void 0:W.root),style:{zIndex:t.zIndex,...(H=t.styles)==null?void 0:H.root}},[C&&i("div",{class:v(`${s}-mask`,(X=t.classNames)==null?void 0:X.mask),style:{...z,...(Q=t.styles)==null?void 0:Q.mask}},[h.value?i("svg",{class:`${s}-mask-svg`,width:"100%",height:"100%"},[i("defs",[i("mask",{id:"tour-mask"},[i("rect",{width:"100%",height:"100%",fill:"white"}),i("rect",{x:h.value.left-4,y:h.value.top-4,width:h.value.width+8,height:h.value.height+8,rx:((Y=t.gap)==null?void 0:Y.radius)??4,fill:"black"})])]),i("rect",{width:"100%",height:"100%",fill:O,mask:"url(#tour-mask)"})]):i("div",{class:`${s}-mask-fill`,style:{background:O}})]),i("div",{ref:u,class:v(`${s}-popover`,{[`${s}-popover-primary`]:p},l.value.className,(G=t.classNames)==null?void 0:G.popover),style:{position:"absolute",top:`${w.value.top}px`,left:`${w.value.left}px`,zIndex:t.zIndex+1,...l.value.style,...(J=t.styles)==null?void 0:J.popover}},[i("div",{class:v(`${s}-popover-inner`,(K=t.classNames)==null?void 0:K.popoverInner),style:(Z=t.styles)==null?void 0:Z.popoverInner},[E!==null&&i("button",{type:"button",class:v(`${s}-close`,(R=t.classNames)==null?void 0:R.close),style:(_=t.styles)==null?void 0:_.close,onClick:M,"aria-label":"Close"},[E]),l.value.cover&&i("div",{class:v(`${s}-cover`,(tt=t.classNames)==null?void 0:tt.cover),style:(nt=t.styles)==null?void 0:nt.cover},[typeof l.value.cover=="string"?i("img",{src:l.value.cover,alt:""}):F(l.value.cover)]),l.value.title&&i("div",{class:v(`${s}-title`,(st=t.classNames)==null?void 0:st.title),style:(at=t.styles)==null?void 0:at.title},[F(l.value.title)]),l.value.description&&i("div",{class:v(`${s}-description`,(ot=t.classNames)==null?void 0:ot.description),style:(et=t.styles)==null?void 0:et.description},[F(l.value.description)]),i("div",{class:v(`${s}-footer`,(pt=t.classNames)==null?void 0:pt.footer),style:(lt=t.styles)==null?void 0:lt.footer},[P.value>1&&i("div",{class:v(`${s}-indicators`,(rt=t.classNames)==null?void 0:rt.indicators),style:(ct=t.styles)==null?void 0:ct.indicators},[t.indicatorsRender?t.indicatorsRender(c.value,P.value):t.steps.map((S,f)=>{var N,gt;return i("span",{key:f,class:v(`${s}-indicator`,{[`${s}-indicator-active`]:f===c.value},(N=t.classNames)==null?void 0:N.indicator),style:(gt=t.styles)==null?void 0:gt.indicator,onClick:()=>U(f)})})]),i("div",{class:v(`${s}-buttons`,(it=t.classNames)==null?void 0:it.buttons),style:(dt=t.styles)==null?void 0:dt.buttons},[c.value>0&&i(B,{size:"small",type:"default",ghost:p,class:v(`${s}-prev-btn`,(ut=t.classNames)==null?void 0:ut.prevBtn),style:(mt=t.styles)==null?void 0:mt.prevBtn,onClick:()=>{var S,f,N;(N=(f=(S=l.value)==null?void 0:S.prevButtonProps)==null?void 0:f.onClick)==null||N.call(f),ht()},...vt(l.value.prevButtonProps)},{default:()=>{var S,f;return((f=(S=l.value)==null?void 0:S.prevButtonProps)==null?void 0:f.children)??"上一步"}}),i(B,{size:"small",type:p?"default":"primary",ghost:p,class:v(`${s}-next-btn`,(kt=t.classNames)==null?void 0:kt.nextBtn),style:(ft=t.styles)==null?void 0:ft.nextBtn,onClick:()=>{var S,f,N;(N=(f=(S=l.value)==null?void 0:S.nextButtonProps)==null?void 0:f.onClick)==null||N.call(f),xt()},...vt(l.value.nextButtonProps)},{default:()=>{var S,f;return((f=(S=l.value)==null?void 0:S.nextButtonProps)==null?void 0:f.children)??(q?"完成":"下一步")}})])])])])])])}}}),Et=L({__name:"TourBasic",setup(t){const o=b(!1),s=[{title:"第一步",description:"这是漫游引导的第一步，介绍页面的主要功能。"},{title:"第二步",description:"这是第二步，继续介绍其他功能。"},{title:"完成",description:"引导完成！现在你已经了解了所有功能。"}];return(k,n)=>(j(),D("div",null,[d(m(yt),null,{default:x(()=>[d(m(B),{ref:"btnRef",type:"primary",onClick:n[0]||(n[0]=u=>o.value=!0)},{default:x(()=>[...n[3]||(n[3]=[y(" 开始引导 ",-1)])]),_:1},512)]),_:1}),d(m(T),{open:o.value,"onUpdate:open":n[1]||(n[1]=u=>o.value=u),steps:s,onFinish:n[2]||(n[2]=u=>o.value=!1)},null,8,["open"])]))}}),Lt=`<template>
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
`,jt={style:{display:"flex","flex-direction":"column",gap:"24px"}},Dt=L({__name:"TourClassNames",setup(t){const o=b(!1),s=b(!1),k=b(!1),n=b(!1),u=b(!1),w=b(),h=[{title:"渐变卡片",description:"通过 classNames 自定义卡片背景和遮罩颜色"}],r=[{title:"自定义文字",description:"可以对标题、描述、关闭按钮分别应用不同样式",target:()=>w.value||null}],c=[{title:"第一步",description:"这是多步骤引导的第一步"},{title:"第二步",description:"这是多步骤引导的第二步"},{title:"第三步",description:"这是多步骤引导的第三步"}],l=[{title:"内联样式",description:"通过 styles 属性应用内联样式，优先级更高"}],P=[{title:"组合样式",description:"classNames 和 styles 可以同时使用，实现更灵活的样式控制"},{title:"完成",description:"所有样式都生效了"}];return(I,a)=>(j(),D("div",jt,[e("div",null,[a[11]||(a[11]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义遮罩与卡片样式：",-1)),d(m(B),{type:"primary",onClick:a[0]||(a[0]=g=>o.value=!0)},{default:x(()=>[...a[10]||(a[10]=[y("打开渐变卡片引导",-1)])]),_:1}),d(m(T),{open:o.value,"onUpdate:open":a[1]||(a[1]=g=>o.value=g),steps:h,"class-names":{mask:"custom-mask",popover:"custom-popover",popoverInner:"custom-popover-inner"}},null,8,["open"])]),e("div",null,[a[13]||(a[13]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义标题与描述样式：",-1)),d(m(B),{type:"primary",onClick:a[2]||(a[2]=g=>s.value=!0)},{default:x(()=>[...a[12]||(a[12]=[y("打开自定义文字引导",-1)])]),_:1}),e("div",{ref_key:"target2",ref:w,style:{"margin-top":"8px",padding:"16px",border:"1px dashed #d9d9d9","border-radius":"8px"}}," 目标元素 ",512),d(m(T),{open:s.value,"onUpdate:open":a[3]||(a[3]=g=>s.value=g),steps:r,"class-names":{title:"custom-title",description:"custom-description",close:"custom-close"}},null,8,["open"])]),e("div",null,[a[15]||(a[15]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义指示器与按钮样式：",-1)),d(m(B),{type:"primary",onClick:a[4]||(a[4]=g=>k.value=!0)},{default:x(()=>[...a[14]||(a[14]=[y("打开多步骤引导",-1)])]),_:1}),d(m(T),{open:k.value,"onUpdate:open":a[5]||(a[5]=g=>k.value=g),steps:c,"class-names":{indicators:"custom-indicators",indicator:"custom-indicator",buttons:"custom-buttons",prevBtn:"custom-prev-btn",nextBtn:"custom-next-btn"}},null,8,["open"])]),e("div",null,[a[17]||(a[17]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),d(m(B),{type:"primary",onClick:a[6]||(a[6]=g=>n.value=!0)},{default:x(()=>[...a[16]||(a[16]=[y("打开内联样式引导",-1)])]),_:1}),d(m(T),{open:n.value,"onUpdate:open":a[7]||(a[7]=g=>n.value=g),steps:l,styles:{popoverInner:{borderRadius:"16px",padding:"24px"},title:{color:"#722ed1",fontSize:"18px"},description:{color:"#52c41a",fontSize:"15px"},footer:{marginTop:"20px"}}},null,8,["open"])]),e("div",null,[a[19]||(a[19]=e("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用 classNames 与 styles：",-1)),d(m(B),{type:"primary",onClick:a[8]||(a[8]=g=>u.value=!0)},{default:x(()=>[...a[18]||(a[18]=[y("打开组合样式引导",-1)])]),_:1}),d(m(T),{open:u.value,"onUpdate:open":a[9]||(a[9]=g=>u.value=g),steps:P,"class-names":{popoverInner:"gradient-card",indicator:"gradient-indicator"},styles:{title:{fontWeight:"bold"},buttons:{gap:"12px"}}},null,8,["open"])])]))}}),Ut=Pt(Dt,[["__scopeId","data-v-df9ad9f4"]]),At=`<template>
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
`,Ft=L({__name:"TourType",setup(t){const o=b(!1),s=b(!1),k=[{title:"默认样式",description:"这是默认样式的引导，白色背景。"},{title:"第二步",description:"继续介绍功能..."}],n=[{title:"主题样式",description:"这是主题样式的引导，蓝色背景。"},{title:"第二步",description:"继续介绍功能..."}];function u(){o.value=!0}function w(){s.value=!0}return(h,r)=>(j(),D("div",null,[d(m(yt),null,{default:x(()=>[d(m(B),{type:"primary",onClick:u},{default:x(()=>[...r[4]||(r[4]=[y(" 默认样式 ",-1)])]),_:1}),d(m(B),{type:"primary",onClick:w},{default:x(()=>[...r[5]||(r[5]=[y(" 主题样式 ",-1)])]),_:1})]),_:1}),d(m(T),{open:o.value,"onUpdate:open":r[0]||(r[0]=c=>o.value=c),steps:k,onFinish:r[1]||(r[1]=c=>o.value=!1)},null,8,["open"]),d(m(T),{open:s.value,"onUpdate:open":r[2]||(r[2]=c=>s.value=c),type:"primary",steps:n,onFinish:r[3]||(r[3]=c=>s.value=!1)},null,8,["open"])]))}}),Mt=`<template>
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
`,Wt={class:"markdown-body"},Kt={__name:"tour",setup(t,{expose:o}){return o({frontmatter:{}}),(k,n)=>{const u=It("DemoBlock");return j(),D("div",Wt,[n[0]||(n[0]=e("h1",{id:"tour-漫游引导",tabindex:"-1"},"Tour 漫游引导",-1)),n[1]||(n[1]=e("p",null,"用于分步引导用户了解产品功能的组件。",-1)),n[2]||(n[2]=e("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=e("ul",null,[e("li",null,"新功能上线时，引导用户了解新功能"),e("li",null,"复杂操作流程，需要分步骤引导用户完成"),e("li",null,"对于特定的元素进行操作指引")],-1)),n[4]||(n[4]=e("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=e("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=e("p",null,"最简单的用法，无目标元素，居中展示。",-1)),d(u,{title:"基础用法",source:m(Lt)},{default:x(()=>[d(Et)]),_:1},8,["source"]),n[7]||(n[7]=e("h3",{id:"不同类型",tabindex:"-1"},"不同类型",-1)),n[8]||(n[8]=e("p",null,[y("Tour 有两种类型："),e("code",null,"default"),y(" 和 "),e("code",null,"primary"),y("。")],-1)),d(u,{title:"不同类型",source:m(Mt)},{default:x(()=>[d(Ft)]),_:1},8,["source"]),n[9]||(n[9]=e("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[10]||(n[10]=e("p",null,[y("通过 "),e("code",null,"classNames"),y(" / "),e("code",null,"styles"),y(" 对遮罩、卡片、标题、描述、指示器、按钮等子元素做细粒度样式控制。")],-1)),d(u,{title:"语义化 className 与 style",source:m(At)},{default:x(()=>[d(Ut)]),_:1},8,["source"]),n[11]||(n[11]=Ot(`<h2 id="api" tabindex="-1">API</h2><h3 id="tour-props" tabindex="-1">Tour Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>是否显示</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>current (v-model)</td><td>当前步骤</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>steps</td><td>步骤配置</td><td><code>TourStep[]</code></td><td><code>[]</code></td></tr><tr><td>arrow</td><td>是否显示箭头</td><td><code>boolean | { pointAtCenter?: boolean }</code></td><td><code>true</code></td></tr><tr><td>placement</td><td>引导卡片相对于目标元素的位置</td><td><code>TooltipPlacement</code></td><td><code>&#39;bottom&#39;</code></td></tr><tr><td>mask</td><td>是否显示遮罩</td><td><code>boolean | { style?: CSSProperties; color?: string }</code></td><td><code>true</code></td></tr><tr><td>type</td><td>类型，影响底色与文字颜色</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>scrollIntoViewOptions</td><td>是否滚动到目标元素，支持传入滚动选项</td><td><code>boolean | ScrollIntoViewOptions</code></td><td><code>true</code></td></tr><tr><td>zIndex</td><td>Tour 的 z-index</td><td><code>number</code></td><td><code>1001</code></td></tr><tr><td>gap</td><td>引导卡片与目标元素的距离和箭头偏移</td><td><code>{ offset?: number | [number, number]; radius?: number }</code></td><td><code>{ offset: 12, radius: 4 }</code></td></tr><tr><td>indicatorsRender</td><td>自定义指示器渲染</td><td><code>(current: number, total: number) =&gt; VNode</code></td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标，设置为 <code>false</code> 时隐藏关闭按钮</td><td><code>VNode | (() =&gt; VNode) | false</code></td><td><code>&lt;CloseOutlined /&gt;</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TourClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TourStyles</code></td><td>-</td></tr></tbody></table><h3 id="tourstep" tabindex="-1">TourStep</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>description</td><td>描述</td><td><code>string | VNode | (() =&gt; VNode)</code></td><td>-</td></tr><tr><td>target</td><td>目标元素（CSS 选择器或返回元素的函数）</td><td><code>string | (() =&gt; HTMLElement | null)</code></td><td>-</td></tr><tr><td>placement</td><td>弹出位置</td><td><code>TooltipPlacement</code></td><td>-</td></tr><tr><td>cover</td><td>封面图片或自定义内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>type</td><td>类型，优先级高于 Tour 的 type</td><td><code>&#39;default&#39; | &#39;primary&#39;</code></td><td>-</td></tr><tr><td>mask</td><td>是否显示遮罩，优先级高于 Tour 的 mask</td><td><code>boolean | { style?: CSSProperties; color?: string }</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>nextButtonProps</td><td>下一步按钮的属性</td><td><code>TourButtonProps</code></td><td>-</td></tr><tr><td>prevButtonProps</td><td>上一步按钮的属性</td><td><code>TourButtonProps</code></td><td>-</td></tr><tr><td>scrollIntoViewOptions</td><td>是否滚动到目标元素</td><td><code>boolean | ScrollIntoViewOptions</code></td><td>-</td></tr></tbody></table><h3 id="tourbuttonprops" tabindex="-1">TourButtonProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>children</td><td>按钮文本</td><td><code>string | VNode</code></td></tr><tr><td>onClick</td><td>点击回调</td><td><code>() =&gt; void</code></td></tr><tr><td>…其他</td><td>Button 组件的其他属性</td><td><code>ButtonProps</code></td></tr></tbody></table><h3 id="tour-events" tabindex="-1">Tour Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>步骤改变时</td><td><code>(current: number) =&gt; void</code></td></tr><tr><td>close</td><td>关闭时</td><td><code>() =&gt; void</code></td></tr><tr><td>finish</td><td>完成时（最后一步点击下一步）</td><td><code>() =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Tour 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Button type=&quot;primary&quot; @click=&quot;open = true&quot;&gt;打开引导&lt;/Button&gt;

  &lt;Tour
    v-model:open=&quot;open&quot;
    :steps=&quot;steps&quot;
    :class-names=&quot;{
      mask: &#39;my-mask&#39;,
      popoverInner: &#39;my-popover-inner&#39;,
      title: &#39;my-title&#39;,
      indicator: &#39;my-indicator&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import { Button, Tour } from &#39;@hmfw/ant-design&#39;

const open = ref(false)
const steps = [
  {
    title: &#39;欢迎&#39;,
    description: &#39;这是一个漫游引导&#39;,
  },
  {
    title: &#39;第二步&#39;,
    description: &#39;继续了解更多功能&#39;,
  },
]
&lt;/script&gt;

&lt;style scoped&gt;
/* 自定义遮罩 */
:global(.my-mask) {
  background: rgba(102, 126, 234, 0.25) !important;
  backdrop-filter: blur(4px);
}

/* 自定义卡片背景 */
:global(.my-popover-inner) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
}

/* 自定义标题 */
:global(.my-title) {
  color: white !important;
  font-size: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 自定义指示器 */
:global(.my-indicator) {
  background: rgba(255, 255, 255, 0.5) !important;
  transition: all 0.3s;
}

:global(.hmfw-tour-indicator-active.my-indicator) {
  background: white !important;
  width: 20px !important;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Button type=&quot;primary&quot; @click=&quot;open = true&quot;&gt;打开引导&lt;/Button&gt;

  &lt;Tour
    v-model:open=&quot;open&quot;
    :steps=&quot;steps&quot;
    :styles=&quot;{
      popoverInner: { borderRadius: &#39;16px&#39;, padding: &#39;24px&#39; },
      title: { color: &#39;#722ed1&#39;, fontSize: &#39;18px&#39; },
      description: { color: &#39;#52c41a&#39;, fontSize: &#39;15px&#39; },
      footer: { marginTop: &#39;20px&#39; },
      buttons: { gap: &#39;12px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import { Button, Tour } from &#39;@hmfw/ant-design&#39;

const open = ref(false)
const steps = [
  {
    title: &#39;内联样式&#39;,
    description: &#39;通过 styles 属性应用内联样式&#39;,
  },
]
&lt;/script&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>Tour 是弹层组件，挂载到 <code>body</code> 之外，样式定义需要使用 <code>:global()</code> 而非 <code>:deep()</code></li><li><code>classNames.indicator</code> 会应用到所有指示器点，包括激活状态的点（<code>.hmfw-tour-indicator-active</code>）</li><li><code>classNames.prevBtn</code> 和 <code>classNames.nextBtn</code> 会与 Button 组件的样式类名合并</li><li>在 primary 类型下，弹出卡片的背景和文字颜色会自动切换为主题色和白色</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Tour 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>卡片背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色（primary 类型背景 &amp; 激活指示器）</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>标题文字颜色</td><td><code>rgba(0, 0, 0, 0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>描述文字颜色</td><td><code>rgba(0, 0, 0, 0.65)</code></td></tr><tr><td><code>--hmfw-color-text-tertiary</code></td><td>关闭图标颜色</td><td><code>rgba(0, 0, 0, 0.45)</code></td></tr><tr><td><code>--hmfw-color-white</code></td><td>白色（primary 类型文字颜色）</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-fill-quaternary</code></td><td>关闭按钮悬停背景</td><td><code>rgba(0, 0, 0, 0.04)</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>指示器默认背景</td><td><code>rgba(0, 0, 0, 0.15)</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>指示器悬停背景</td><td><code>rgba(0, 0, 0, 0.25)</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>卡片与封面圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>关闭按钮圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-box-shadow-secondary</code></td><td>卡片阴影</td><td><code>0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), …</code></td></tr></tbody></table>`,27))])}}};export{Kt as default};
