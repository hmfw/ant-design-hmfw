import{o as E,q as ye,N as ie,n as t,c as ue,f as y,E as M,Q as fe,F as ke,e as he,B as ge,A as $,i as F,R as c,K as d,h as o,k as U,_ as ve,p as be,H as xe,m as _,l as Ce}from"./index-B9Ix0zQ8.js";import{c as p}from"./cls-S9IiI6wd.js";import{I as H}from"./Icon-D0ODznex.js";import{R as W}from"./RightOutlined-timAD9m0.js";import{D as we}from"./DownOutlined-CeXVKI2h.js";const C={onBeforeEnter(e){const s=e;s.style.height="0",s.style.opacity="0"},onEnter(e){const s=e,l=s.scrollHeight;s.offsetHeight,s.style.height=`${l}px`,s.style.opacity="1"},onAfterEnter(e){const s=e;s.style.height="",s.style.opacity=""},onBeforeLeave(e){const s=e;s.style.height=`${s.offsetHeight}px`,s.style.opacity="1"},onLeave(e){const s=e;s.offsetHeight,s.style.height="0",s.style.opacity="0"},onAfterLeave(e){const s=e;s.style.height="",s.style.opacity=""}},me=Symbol("collapse-context"),Ne=E({name:"Collapse",props:{activeKey:[String,Array],defaultActiveKey:[String,Array],accordion:Boolean,bordered:{type:Boolean,default:!0},ghost:Boolean,size:{type:String,default:"middle"},expandIconPosition:{type:String,default:"start"},items:Array,destroyInactivePanel:Boolean,collapsible:String,expandIcon:Function,classNames:Object,styles:Object},emits:["update:activeKey","change"],setup(e,{slots:s,emit:l}){const n=ie("collapse"),a=u=>u?Array.isArray(u)?u:[u]:[],i=M(a(e.defaultActiveKey??e.activeKey)),f=y(()=>e.activeKey!==void 0),g=y(()=>f.value?a(e.activeKey):i.value);fe(()=>e.activeKey,u=>{u!==void 0&&(i.value=a(u))});const v=u=>{const b=g.value;let N;e.accordion?N=b.includes(u)?[]:[u]:N=b.includes(u)?b.filter(I=>I!==u):[...b,u],i.value=N,l("update:activeKey",N),l("change",N)};ge(me,{activeKeys:g,toggle:v,prefixCls:n,expandIconPosition:y(()=>e.expandIconPosition),collapsible:y(()=>e.collapsible),destroyInactivePanel:y(()=>e.destroyInactivePanel),expandIcon:y(()=>e.expandIcon),classNames:y(()=>e.classNames),styles:y(()=>e.styles)});const A=(u,b)=>e.expandIcon?e.expandIcon({isActive:u,panelKey:b}):t(H,{component:W,style:{transform:u?"rotate(90deg)":"rotate(0deg)"}},null);return()=>{var m,P,z;const u=e.items??[],b=(r,q)=>{const B=r.key!=null?String(r.key):String(q);return he(r,{panelKey:B})},N=((m=s.default)==null?void 0:m.call(s))??[];let I=0;const X=N.flatMap(r=>r.type===ke&&Array.isArray(r.children)?r.children.map(q=>b(q,I++)):[b(r,I++)]),Q=(r,q,B,w={})=>{var O,L,Y,G,J,Z,ee,te,ne,ae,se,oe,le,de;const x=g.value.includes(r),T=x||!e.destroyInactivePanel||w.forceRender,S=w.collapsible??e.collapsible,K=w.disabled||S==="disabled",R=!K&&S!=="icon",D=!K&&(S==="icon"||S==="header"||S===void 0),j=!w.forceRender;return t("div",{key:r,class:p(`${n}-item`,(O=e.classNames)==null?void 0:O.item,{[`${n}-item-active`]:x,[`${n}-item-disabled`]:K}),style:{...w.style,...(L=e.styles)==null?void 0:L.item}},[t("div",{class:p(`${n}-header`,(Y=e.classNames)==null?void 0:Y.header),onClick:()=>R&&v(r),role:"button","aria-expanded":x,"aria-disabled":K,style:{cursor:R?"pointer":"default",...(G=e.styles)==null?void 0:G.header}},[w.showArrow!==!1&&t("span",{class:p(`${n}-expand-icon`,(J=e.classNames)==null?void 0:J.icon,{[`${n}-expand-icon-active`]:x}),onClick:V=>{S==="icon"&&D&&(V.stopPropagation(),v(r))},style:{cursor:D&&S==="icon"?"pointer":"inherit",...(Z=e.styles)==null?void 0:Z.icon}},[A(x,r)]),t("span",{class:p(`${n}-header-text`,(ee=e.classNames)==null?void 0:ee.headerText),style:(te=e.styles)==null?void 0:te.headerText},[q]),w.extra&&t("span",{class:p(`${n}-extra`,(ne=e.classNames)==null?void 0:ne.extra),style:(ae=e.styles)==null?void 0:ae.extra},[w.extra])]),j?t(ue,{name:`${n}-motion`,onBeforeEnter:C.onBeforeEnter,onEnter:C.onEnter,onAfterEnter:C.onAfterEnter,onBeforeLeave:C.onBeforeLeave,onLeave:C.onLeave,onAfterLeave:C.onAfterLeave},{default:()=>{var V,ce,re,pe;return[T&&x&&t("div",{class:p(`${n}-content`,(V=e.classNames)==null?void 0:V.content),role:"region",style:(ce=e.styles)==null?void 0:ce.content},[t("div",{class:p(`${n}-content-box`,(re=e.classNames)==null?void 0:re.body),style:(pe=e.styles)==null?void 0:pe.body},[B])])]}}):T&&t("div",{class:p(`${n}-content`,(se=e.classNames)==null?void 0:se.content,{[`${n}-content-hidden`]:!x}),role:"region",style:{height:x?void 0:"0",opacity:x?void 0:"0",...(oe=e.styles)==null?void 0:oe.content}},[t("div",{class:p(`${n}-content-box`,(le=e.classNames)==null?void 0:le.body),style:(de=e.styles)==null?void 0:de.body},[B])])])};return t("div",{class:p(n,(P=e.classNames)==null?void 0:P.root,{[`${n}-borderless`]:!e.bordered,[`${n}-ghost`]:e.ghost,[`${n}-${e.size}`]:e.size!=="middle",[`${n}-icon-position-end`]:e.expandIconPosition==="end"}),style:(z=e.styles)==null?void 0:z.root},[u.map(r=>Q(r.key,r.label,r.children,{disabled:r.disabled,showArrow:r.showArrow,extra:r.extra,collapsible:r.collapsible,style:r.style,forceRender:r.forceRender})),X])}}}),h=E({name:"CollapsePanel",props:{header:String,disabled:Boolean,showArrow:{type:Boolean,default:!0},extra:[String,Object],forceRender:Boolean,collapsible:String,panelKey:String,classNames:Object,styles:Object},setup(e,{slots:s,attrs:l}){const n=ye(me,null);if(!n){const m=ie("collapse");return()=>{var P,z,r,q,B,w,x,T,S,K,R,D,j,O,L;return t("div",{class:p(`${m}-item`,(P=e.classNames)==null?void 0:P.item),style:(z=e.styles)==null?void 0:z.item},[t("div",{class:p(`${m}-header`,(r=e.classNames)==null?void 0:r.header),style:(q=e.styles)==null?void 0:q.header},[e.showArrow&&t("span",{class:p(`${m}-expand-icon`,(B=e.classNames)==null?void 0:B.icon),style:(w=e.styles)==null?void 0:w.icon},[t(H,{component:W},null)]),t("span",{class:p(`${m}-header-text`,(x=e.classNames)==null?void 0:x.headerText),style:(T=e.styles)==null?void 0:T.headerText},[e.header]),e.extra&&t("span",{class:p(`${m}-extra`,(S=e.classNames)==null?void 0:S.extra),style:(K=e.styles)==null?void 0:K.extra},[e.extra])]),t("div",{class:p(`${m}-content ${m}-content-active`,(R=e.classNames)==null?void 0:R.content),style:(D=e.styles)==null?void 0:D.content},[t("div",{class:p(`${m}-content-box`,(j=e.classNames)==null?void 0:j.body),style:(O=e.styles)==null?void 0:O.body},[(L=s.default)==null?void 0:L.call(s)])])])}}const a=y(()=>e.panelKey??l.key??""),i=y(()=>n.activeKeys.value.includes(a.value)),f=n.prefixCls,g=y(()=>{var m;return{...(m=n.classNames)==null?void 0:m.value,...e.classNames}}),v=y(()=>{var m;return{...(m=n.styles)==null?void 0:m.value,...e.styles}}),A=y(()=>e.collapsible??n.collapsible.value),u=y(()=>e.disabled||A.value==="disabled"),b=y(()=>!u.value&&A.value!=="icon"),N=y(()=>!u.value&&A.value!=="disabled"),I=y(()=>i.value||!n.destroyInactivePanel.value||e.forceRender),X=y(()=>!e.forceRender),Q=()=>n.expandIcon.value?n.expandIcon.value({isActive:i.value,panelKey:a.value}):t(H,{component:W,style:{transform:i.value?"rotate(90deg)":"rotate(0deg)"}},null);return()=>{var m;return t("div",{class:p(`${f}-item`,g.value.item,{[`${f}-item-active`]:i.value,[`${f}-item-disabled`]:u.value}),style:v.value.item},[t("div",{class:p(`${f}-header`,g.value.header),onClick:()=>b.value&&n.toggle(a.value),role:"button","aria-expanded":i.value,"aria-disabled":u.value,style:{cursor:b.value?"pointer":"default",...v.value.header}},[e.showArrow&&t("span",{class:p(`${f}-expand-icon`,g.value.icon,{[`${f}-expand-icon-active`]:i.value}),onClick:P=>{A.value==="icon"&&N.value&&(P.stopPropagation(),n.toggle(a.value))},style:{cursor:N.value&&A.value==="icon"?"pointer":"inherit",...v.value.icon}},[Q()]),t("span",{class:p(`${f}-header-text`,g.value.headerText),style:v.value.headerText},[e.header]),e.extra&&t("span",{class:p(`${f}-extra`,g.value.extra),style:v.value.extra},[e.extra])]),X.value?t(ue,{name:`${f}-motion`,onBeforeEnter:C.onBeforeEnter,onEnter:C.onEnter,onAfterEnter:C.onAfterEnter,onBeforeLeave:C.onBeforeLeave,onLeave:C.onLeave,onAfterLeave:C.onAfterLeave},{default:()=>{var P;return[I.value&&i.value&&t("div",{class:p(`${f}-content`,g.value.content),role:"region",style:v.value.content},[t("div",{class:p(`${f}-content-box`,g.value.body),style:v.value.body},[(P=s.default)==null?void 0:P.call(s)])])]}}):I.value&&t("div",{class:p(`${f}-content`,g.value.content,{[`${f}-content-hidden`]:!i.value}),role:"region",style:{height:i.value?void 0:"0",opacity:i.value?void 0:"0",...v.value.content}},[t("div",{class:p(`${f}-content-box`,g.value.body),style:v.value.body},[(m=s.default)==null?void 0:m.call(s)])])])}}}),k=Object.assign(Ne,{Panel:h}),Pe=E({__name:"CollapseAccordion",setup(e){const s=M(["1"]);return(l,n)=>($(),F(d(k),{"active-key":s.value,"onUpdate:activeKey":n[0]||(n[0]=a=>s.value=a),accordion:""},{default:c(()=>[t(d(h),{key:"1",header:"面板标题 1"},{default:c(()=>[...n[1]||(n[1]=[o("p",null,"面板内容 1",-1)])]),_:1}),t(d(h),{key:"2",header:"面板标题 2"},{default:c(()=>[...n[2]||(n[2]=[o("p",null,"面板内容 2",-1)])]),_:1}),t(d(h),{key:"3",header:"面板标题 3"},{default:c(()=>[...n[3]||(n[3]=[o("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),Se=`<template>
  <Collapse v-model:active-key="activeKey" accordion>
    <CollapsePanel key="1" header="面板标题 1">
      <p>面板内容 1</p>
    </CollapsePanel>
    <CollapsePanel key="2" header="面板标题 2">
      <p>面板内容 2</p>
    </CollapsePanel>
    <CollapsePanel key="3" header="面板标题 3">
      <p>面板内容 3</p>
    </CollapsePanel>
  </Collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, CollapsePanel } from 'ant-design-hmfw'

const activeKey = ref(['1'])
<\/script>
`,Ee=E({__name:"CollapseBasic",setup(e){const s=M(["1"]);return(l,n)=>($(),F(d(k),{"active-key":s.value,"onUpdate:activeKey":n[0]||(n[0]=a=>s.value=a)},{default:c(()=>[t(d(h),{key:"1",header:"面板标题 1"},{default:c(()=>[...n[1]||(n[1]=[o("p",null,"面板内容 1",-1)])]),_:1}),t(d(h),{key:"2",header:"面板标题 2"},{default:c(()=>[...n[2]||(n[2]=[o("p",null,"面板内容 2",-1)])]),_:1}),t(d(h),{key:"3",header:"面板标题 3"},{default:c(()=>[...n[3]||(n[3]=[o("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),$e=`<template>
  <Collapse v-model:active-key="activeKey">
    <CollapsePanel key="1" header="面板标题 1">
      <p>面板内容 1</p>
    </CollapsePanel>
    <CollapsePanel key="2" header="面板标题 2">
      <p>面板内容 2</p>
    </CollapsePanel>
    <CollapsePanel key="3" header="面板标题 3">
      <p>面板内容 3</p>
    </CollapsePanel>
  </Collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, CollapsePanel } from 'ant-design-hmfw'

const activeKey = ref(['1'])
<\/script>
`,qe=E({__name:"CollapseBorderless",setup(e){const s=M(["1"]);return(l,n)=>($(),F(d(k),{"active-key":s.value,"onUpdate:activeKey":n[0]||(n[0]=a=>s.value=a),bordered:!1},{default:c(()=>[t(d(h),{key:"1",header:"面板标题 1"},{default:c(()=>[...n[1]||(n[1]=[o("p",null,"面板内容 1",-1)])]),_:1}),t(d(h),{key:"2",header:"面板标题 2"},{default:c(()=>[...n[2]||(n[2]=[o("p",null,"面板内容 2",-1)])]),_:1})]),_:1},8,["active-key"]))}}),Ae=`<template>
  <Collapse v-model:active-key="activeKey" :bordered="false">
    <CollapsePanel key="1" header="面板标题 1">
      <p>面板内容 1</p>
    </CollapsePanel>
    <CollapsePanel key="2" header="面板标题 2">
      <p>面板内容 2</p>
    </CollapsePanel>
  </Collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Collapse, CollapsePanel } from 'ant-design-hmfw'

const activeKey = ref(['1'])
<\/script>
`,Ie={style:{display:"flex","flex-direction":"column",gap:"24px"}},Be=E({__name:"CollapseClassNames",setup(e){return(s,l)=>($(),U("div",Ie,[o("div",null,[l[1]||(l[1]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义头部渐变背景：",-1)),t(d(k),{"default-active-key":["1"],"class-names":{header:"custom-header",icon:"custom-icon"}},{default:c(()=>[t(d(h),{key:"1",header:"渐变头部面板"},{default:c(()=>[...l[0]||(l[0]=[o("p",null,"通过 classNames.header 自定义头部背景色，使用渐变效果。",-1),o("p",null,"通过 classNames.icon 控制图标样式。",-1)])]),_:1})]),_:1})]),o("div",null,[l[3]||(l[3]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内容区域样式：",-1)),t(d(k),{"default-active-key":["2"],"class-names":{body:"custom-body",content:"custom-content"}},{default:c(()=>[t(d(h),{key:"2",header:"自定义内容面板"},{default:c(()=>[...l[2]||(l[2]=[o("p",null,"通过 classNames.body 控制实际内容容器。",-1),o("p",null,"通过 classNames.content 控制外层动画容器。",-1)])]),_:1})]),_:1})]),o("div",null,[l[5]||(l[5]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合多个语义节点：",-1)),t(d(k),{"default-active-key":["3"],"class-names":{item:"custom-item",header:"custom-header-combined",headerText:"custom-header-text",icon:"custom-icon-combined",body:"custom-body-combined"}},{default:c(()=>[t(d(h),{key:"3",header:"完整定制面板",extra:"标签"},{default:c(()=>[...l[4]||(l[4]=[o("p",null,"同时自定义多个语义节点的样式。",-1),o("p",null,"包括面板项、头部、头部文本、图标和内容。",-1)])]),_:1})]),_:1})]),o("div",null,[l[7]||(l[7]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),t(d(k),{"default-active-key":["4"],styles:{header:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",borderRadius:"8px",padding:"12px 16px"},icon:{color:"white",fontSize:"16px"},body:{backgroundColor:"#f0f5ff",padding:"16px",borderRadius:"0 0 8px 8px"}}},{default:c(()=>[t(d(h),{key:"4",header:"内联样式面板"},{default:c(()=>[...l[6]||(l[6]=[o("p",null,"通过 styles 属性直接应用内联样式。",-1),o("p",null,"styles 优先级高于 classNames。",-1)])]),_:1})]),_:1})]),o("div",null,[l[9]||(l[9]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"悬停效果与动画：",-1)),t(d(k),{"default-active-key":["5"],"class-names":{item:"hover-item",header:"hover-header",icon:"hover-icon"}},{default:c(()=>[t(d(h),{key:"5",header:"悬停效果面板"},{default:c(()=>[...l[8]||(l[8]=[o("p",null,"通过 CSS 为头部添加悬停动画效果。",-1),o("p",null,"图标旋转和头部阴影变化。",-1)])]),_:1})]),_:1})])]))}}),Ke=ve(Be,[["__scopeId","data-v-6ab9bccc"]]),_e=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义头部样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义头部渐变背景：</div>
      <Collapse
        :default-active-key="['1']"
        :class-names="{
          header: 'custom-header',
          icon: 'custom-icon',
        }"
      >
        <CollapsePanel key="1" header="渐变头部面板">
          <p>通过 classNames.header 自定义头部背景色，使用渐变效果。</p>
          <p>通过 classNames.icon 控制图标样式。</p>
        </CollapsePanel>
      </Collapse>
    </div>

    <!-- 场景 2：自定义内容区域 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内容区域样式：</div>
      <Collapse
        :default-active-key="['2']"
        :class-names="{
          body: 'custom-body',
          content: 'custom-content',
        }"
      >
        <CollapsePanel key="2" header="自定义内容面板">
          <p>通过 classNames.body 控制实际内容容器。</p>
          <p>通过 classNames.content 控制外层动画容器。</p>
        </CollapsePanel>
      </Collapse>
    </div>

    <!-- 场景 3：高级组合定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合多个语义节点：</div>
      <Collapse
        :default-active-key="['3']"
        :class-names="{
          item: 'custom-item',
          header: 'custom-header-combined',
          headerText: 'custom-header-text',
          icon: 'custom-icon-combined',
          body: 'custom-body-combined',
        }"
      >
        <CollapsePanel key="3" header="完整定制面板" extra="标签">
          <p>同时自定义多个语义节点的样式。</p>
          <p>包括面板项、头部、头部文本、图标和内容。</p>
        </CollapsePanel>
      </Collapse>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Collapse
        :default-active-key="['4']"
        :styles="{
          header: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '8px',
            padding: '12px 16px',
          },
          icon: { color: 'white', fontSize: '16px' },
          body: { backgroundColor: '#f0f5ff', padding: '16px', borderRadius: '0 0 8px 8px' },
        }"
      >
        <CollapsePanel key="4" header="内联样式面板">
          <p>通过 styles 属性直接应用内联样式。</p>
          <p>styles 优先级高于 classNames。</p>
        </CollapsePanel>
      </Collapse>
    </div>

    <!-- 场景 5：悬停效果与动画 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">悬停效果与动画：</div>
      <Collapse
        :default-active-key="['5']"
        :class-names="{
          item: 'hover-item',
          header: 'hover-header',
          icon: 'hover-icon',
        }"
      >
        <CollapsePanel key="5" header="悬停效果面板">
          <p>通过 CSS 为头部添加悬停动画效果。</p>
          <p>图标旋转和头部阴影变化。</p>
        </CollapsePanel>
      </Collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Collapse, CollapsePanel } from 'ant-design-hmfw'
<\/script>

<style scoped>
/* 场景 1：渐变头部 */
:deep(.custom-header) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  color: white;
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.custom-header:hover) {
  transform: translateX(4px);
}

:deep(.custom-icon) {
  color: white;
  font-size: 16px;
}

/* 场景 2：内容区域 */
:deep(.custom-body) {
  background-color: #f6ffed;
  border-left: 3px solid #52c41a;
  padding: 16px;
}

:deep(.custom-content) {
  border-radius: 0 0 6px 6px;
  overflow: hidden;
}

/* 场景 3：组合定制 */
:deep(.custom-item) {
  border: 2px solid #1890ff;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
}

:deep(.custom-header-combined) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
}

:deep(.custom-header-text) {
  font-weight: 600;
  font-size: 16px;
}

:deep(.custom-icon-combined) {
  color: #fadb14;
  font-size: 18px;
}

:deep(.custom-body-combined) {
  background: #e6f7ff;
  padding: 20px;
}

/* 场景 5：悬停效果 */
:deep(.hover-item) {
  transition: all 0.3s;
  border-radius: 6px;
}

:deep(.hover-header) {
  transition: all 0.3s;
}

:deep(.hover-header:hover) {
  background-color: #fafafa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

:deep(.hover-icon) {
  transition: transform 0.3s;
}

:deep(.hover-header:hover .hover-icon) {
  transform: scale(1.2);
}
</style>
`,ze={style:{display:"flex","flex-direction":"column",gap:"16px"}},Te="这个面板可以通过点击文本或图标来折叠",Re=E({__name:"CollapseCollapsible",setup(e){const s=[{key:"1",label:"点击文本或图标可折叠",children:Te}],l=[{key:"1",label:"只能点击图标折叠",children:"这个面板只能通过点击图标来折叠"}],n=[{key:"1",label:"无法折叠",children:"这个面板无法被折叠"}];return(a,i)=>($(),U("div",ze,[t(d(k),{collapsible:"header","default-active-key":["1"],items:s}),t(d(k),{collapsible:"icon","default-active-key":["1"],items:l}),t(d(k),{collapsible:"disabled",items:n})]))}}),De=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Collapse collapsible="header" :default-active-key="['1']" :items="headerItems" />
    <Collapse collapsible="icon" :default-active-key="['1']" :items="iconItems" />
    <Collapse collapsible="disabled" :items="disabledItems" />
  </div>
</template>

<script setup lang="ts">
import { Collapse } from 'ant-design-hmfw'

const text = '这个面板可以通过点击文本或图标来折叠'

const headerItems = [
  {
    key: '1',
    label: '点击文本或图标可折叠',
    children: text,
  },
]

const iconItems = [
  {
    key: '1',
    label: '只能点击图标折叠',
    children: '这个面板只能通过点击图标来折叠',
  },
]

const disabledItems = [
  {
    key: '1',
    label: '无法折叠',
    children: '这个面板无法被折叠',
  },
]
<\/script>
`,Oe=E({__name:"CollapseCustomIcon",setup(e){const s=[{key:"1",label:"自定义展开图标 1",children:"这是面板内容 1"},{key:"2",label:"自定义展开图标 2",children:"这是面板内容 2"},{key:"3",label:"自定义展开图标 3",children:"这是面板内容 3"}],l=({isActive:n})=>be(H,{component:we,style:{transform:n?"rotate(0deg)":"rotate(-90deg)",transition:"transform 0.3s"}});return(n,a)=>($(),F(d(k),{"default-active-key":["1"],"expand-icon":l,items:s}))}}),Le=`<template>
  <Collapse :default-active-key="['1']" :expand-icon="customExpandIcon" :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Collapse, Icon, DownOutlined } from 'ant-design-hmfw'

const items = [
  {
    key: '1',
    label: '自定义展开图标 1',
    children: '这是面板内容 1',
  },
  {
    key: '2',
    label: '自定义展开图标 2',
    children: '这是面板内容 2',
  },
  {
    key: '3',
    label: '自定义展开图标 3',
    children: '这是面板内容 3',
  },
]

const customExpandIcon = ({ isActive }: { isActive?: boolean }) => {
  return h(Icon, {
    component: DownOutlined,
    style: {
      transform: isActive ? 'rotate(0deg)' : 'rotate(-90deg)',
      transition: 'transform 0.3s',
    },
  })
}
<\/script>
`,Fe=E({__name:"CollapseExtra",setup(e){const s=[{key:"1",label:"面板标题 1",children:"这是面板内容 1",extra:"额外内容"},{key:"2",label:"面板标题 2",children:"这是面板内容 2",extra:"更多"},{key:"3",label:"面板标题 3",children:"这是面板内容 3",showArrow:!1}];return(l,n)=>($(),F(d(k),{"default-active-key":["1"],items:s}))}}),je=`<template>
  <Collapse :default-active-key="['1']" :items="items" />
</template>

<script setup lang="ts">
import { Collapse } from 'ant-design-hmfw'

const items = [
  {
    key: '1',
    label: '面板标题 1',
    children: '这是面板内容 1',
    extra: '额外内容',
  },
  {
    key: '2',
    label: '面板标题 2',
    children: '这是面板内容 2',
    extra: '更多',
  },
  {
    key: '3',
    label: '面板标题 3',
    children: '这是面板内容 3',
    showArrow: false,
  },
]
<\/script>
`,Ve={style:{display:"flex","flex-direction":"column",gap:"16px"}},He=E({__name:"CollapseSize",setup(e){const s=[{key:"1",label:"面板标题",children:"这是面板内容"}];return(l,n)=>($(),U("div",Ve,[t(d(k),{items:s,size:"small"}),t(d(k),{items:s,size:"middle"}),t(d(k),{items:s,size:"large"})]))}}),Me=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Collapse :items="items" size="small" />
    <Collapse :items="items" size="middle" />
    <Collapse :items="items" size="large" />
  </div>
</template>

<script setup lang="ts">
import { Collapse } from 'ant-design-hmfw'

const items = [
  {
    key: '1',
    label: '面板标题',
    children: '这是面板内容',
  },
]
<\/script>
`,Ue={class:"markdown-body"},Je={__name:"collapse",setup(e,{expose:s}){return s({frontmatter:{}}),(n,a)=>{const i=xe("DemoBlock");return $(),U("div",Ue,[a[0]||(a[0]=o("h1",{id:"collapse-折叠面板",tabindex:"-1"},"Collapse 折叠面板",-1)),a[1]||(a[1]=o("p",null,"可以折叠/展开的内容区域。",-1)),a[2]||(a[2]=o("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=o("ul",null,[o("li",null,"对复杂区域进行分组和隐藏，保持页面的整洁"),o("li",null,"手风琴是一种特殊的折叠面板，只允许单个内容区域展开")],-1)),a[4]||(a[4]=o("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=o("h3",{id:"基本用法",tabindex:"-1"},"基本用法",-1)),a[6]||(a[6]=o("p",null,"可以同时展开多个面板。",-1)),t(i,{title:"基本用法",source:d($e)},{default:c(()=>[t(Ee)]),_:1},8,["source"]),a[7]||(a[7]=o("h3",{id:"手风琴模式",tabindex:"-1"},"手风琴模式",-1)),a[8]||(a[8]=o("p",null,"手风琴模式，每次只能展开一个面板。",-1)),t(i,{title:"手风琴模式",source:d(Se)},{default:c(()=>[t(Pe)]),_:1},8,["source"]),a[9]||(a[9]=o("h3",{id:"无边框",tabindex:"-1"},"无边框",-1)),a[10]||(a[10]=o("p",null,"无边框风格。",-1)),t(i,{title:"无边框",source:d(Ae)},{default:c(()=>[t(qe)]),_:1},8,["source"]),a[11]||(a[11]=o("h3",{id:"可折叠触发区域",tabindex:"-1"},"可折叠触发区域",-1)),a[12]||(a[12]=o("p",null,[_("通过 "),o("code",null,"collapsible"),_(" 属性，可以设置面板的可折叠触发区域。")],-1)),t(i,{title:"可折叠触发区域",source:d(De)},{default:c(()=>[t(Re)]),_:1},8,["source"]),a[13]||(a[13]=o("h3",{id:"自定义展开图标",tabindex:"-1"},"自定义展开图标",-1)),a[14]||(a[14]=o("p",null,[_("通过 "),o("code",null,"expandIcon"),_(" 可以自定义展开图标。")],-1)),t(i,{title:"自定义展开图标",source:d(Le)},{default:c(()=>[t(Oe)]),_:1},8,["source"]),a[15]||(a[15]=o("h3",{id:"额外内容",tabindex:"-1"},"额外内容",-1)),a[16]||(a[16]=o("p",null,"可以在面板右上角添加额外内容。",-1)),t(i,{title:"额外内容",source:d(je)},{default:c(()=>[t(Fe)]),_:1},8,["source"]),a[17]||(a[17]=o("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),a[18]||(a[18]=o("p",null,"提供三种尺寸：small、middle（默认）、large。",-1)),t(i,{title:"不同尺寸",source:d(Me)},{default:c(()=>[t(He)]),_:1},8,["source"]),a[19]||(a[19]=o("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[20]||(a[20]=o("p",null,[_("通过 "),o("code",null,"classNames"),_(" / "),o("code",null,"styles"),_(" 对各子元素做细粒度样式控制。")],-1)),t(i,{title:"语义化 className 与 style",source:d(_e)},{default:c(()=>[t(Ke)]),_:1},8,["source"]),a[21]||(a[21]=Ce(`<h2 id="api" tabindex="-1">API</h2><h3 id="collapse-props" tabindex="-1">Collapse Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey (v-model)</td><td>当前激活 tab 面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>accordion</td><td>手风琴模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bordered</td><td>带边框风格的折叠面板</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>ghost</td><td>使折叠面板透明且无边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>设置折叠面板大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>expandIconPosition</td><td>设置图标位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;start&#39;</code></td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td><code>&#39;header&#39;</code></td></tr><tr><td>expandIcon</td><td>自定义展开图标</td><td><code>(props: { isActive?: boolean, panelKey?: string }) =&gt; VNode</code></td><td>-</td></tr><tr><td>destroyInactivePanel</td><td>销毁折叠隐藏的面板</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>items</td><td>面板数据</td><td><code>CollapseItem[]</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseStyles</code></td><td>-</td></tr></tbody></table><h3 id="collapse-events" tabindex="-1">Collapse Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板的回调</td><td><code>(keys: string[]) =&gt; void</code></td></tr><tr><td>update:activeKey</td><td>切换面板的回调</td><td><code>(keys: string[]) =&gt; void</code></td></tr></tbody></table><h3 id="collapseitem" tabindex="-1">CollapseItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>面板头内容</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>面板内容</td><td><code>any</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>style</td><td>自定义面板样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseStyles</code></td><td>-</td></tr></tbody></table><h3 id="collapsepanel-props" tabindex="-1">CollapsePanel Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>header</td><td>面板头内容</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseStyles</code></td><td>-</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Collapse 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">CollapseClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 最外层容器 div.hmfw-collapse</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 折叠面板项 div.hmfw-collapse-item</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板头部 div.hmfw-collapse-header</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 展开/收起图标 span.hmfw-collapse-icon</span>
  headerText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头部文本 span.hmfw-collapse-header-text</span>
  extra<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头部右侧额外内容 div.hmfw-collapse-extra</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容区域（带动画的外层）div.hmfw-collapse-content</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容盒子（实际内容容器）div.hmfw-collapse-content-box</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CollapseStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  icon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  headerText<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  extra<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  body<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-collapse<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-collapse-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-collapse-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.header / styles.header 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-collapse-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RightOutlined</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-collapse-header-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.headerText / styles.headerText 应用于此 --&gt;</span>
        面板标题
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-collapse-extra<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.extra / styles.extra 应用于此（仅 extra prop 存在时） --&gt;</span>
        额外内容
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-collapse-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此（仅展开或 forceRender 时） --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-collapse-content-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
        面板内容
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- Collapse 级别 classNames --&gt;
  &lt;Collapse
    :default-active-key=&quot;[&#39;1&#39;]&quot;
    :class-names=&quot;{
      header: &#39;my-header&#39;,
      icon: &#39;my-icon&#39;,
      body: &#39;my-body&#39;,
    }&quot;
  &gt;
    &lt;CollapsePanel key=&quot;1&quot; header=&quot;自定义样式面板&quot;&gt; 面板内容 &lt;/CollapsePanel&gt;
  &lt;/Collapse&gt;

  &lt;!-- CollapsePanel 级别 classNames（优先级更高） --&gt;
  &lt;Collapse&gt;
    &lt;CollapsePanel
      key=&quot;1&quot;
      header=&quot;面板级样式&quot;
      :class-names=&quot;{
        item: &#39;my-item&#39;,
        header: &#39;my-header-override&#39;,
      }&quot;
    &gt;
      CollapsePanel 的 classNames 会覆盖 Collapse 传递的同名 key
    &lt;/CollapsePanel&gt;
  &lt;/Collapse&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-header) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  color: white;
  border-radius: 6px;
}

:deep(.my-icon) {
  color: white;
  font-size: 16px;
}

:deep(.my-body) {
  background-color: #f6ffed;
  border-left: 3px solid #52c41a;
  padding: 16px;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- Collapse 级别 styles --&gt;
  &lt;Collapse
    :default-active-key=&quot;[&#39;1&#39;]&quot;
    :styles=&quot;{
      header: { background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;, color: &#39;white&#39;, borderRadius: &#39;8px&#39; },
      icon: { color: &#39;white&#39;, fontSize: &#39;16px&#39; },
      body: { backgroundColor: &#39;#f0f5ff&#39;, padding: &#39;16px&#39; },
    }&quot;
  &gt;
    &lt;CollapsePanel key=&quot;1&quot; header=&quot;内联样式面板&quot;&gt; 面板内容 &lt;/CollapsePanel&gt;
  &lt;/Collapse&gt;

  &lt;!-- CollapsePanel 级别 styles --&gt;
  &lt;Collapse&gt;
    &lt;CollapsePanel
      key=&quot;1&quot;
      header=&quot;面板级内联样式&quot;
      :styles=&quot;{
        header: { fontWeight: 600, fontSize: &#39;16px&#39; },
        body: { padding: &#39;20px&#39;, backgroundColor: &#39;#e6f7ff&#39; },
      }&quot;
    &gt;
      CollapsePanel 的 styles 会覆盖 Collapse 传递的同名 key
    &lt;/CollapsePanel&gt;
  &lt;/Collapse&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>Collapse 通过 <code>provide</code> / <code>inject</code> 将 <code>classNames</code> 和 <code>styles</code> 传递给子组件 CollapsePanel</li><li>CollapsePanel 自己的 <code>classNames</code> / <code>styles</code> props 优先级<strong>高于</strong> Collapse 传递的值（用于单独定制某个面板）</li><li><code>icon</code> 仅在 <code>showArrow</code> 为 <code>true</code> 时渲染</li><li><code>extra</code> 仅在设置了 <code>extra</code> prop 时渲染</li><li><code>content</code> 和 <code>body</code> 在面板收起时： <ul><li><code>destroyInactivePanel</code> 为 <code>true</code> 时不渲染</li><li><code>forceRender</code> 为 <code>true</code> 时渲染但隐藏（<code>display: none</code>）</li><li>默认使用 <code>&lt;Transition&gt;</code> 渲染但隐藏（<code>height: 0; overflow: hidden</code>）</li></ul></li><li><code>headerText</code> 应用于 <code>header</code> prop 或 <code>label</code> 字段的文本节点；若使用 slot 自定义 header，需自行包裹容器控制样式</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Collapse 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-alter</code></td><td>交替填充色</td><td><code>rgba(0,0,0,0.02)</code> <em>(注：Token 未定义)</em></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr><tr><td><code>--hmfw-padding</code></td><td>标准内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-padding-lg</code></td><td>大号内边距</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-padding-sm</code></td><td>小号内边距</td><td><code>8px</code></td></tr></tbody></table>`,26))])}}};export{Je as default};
