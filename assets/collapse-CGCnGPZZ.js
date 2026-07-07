import{d as S,j as mn,u as rn,c as t,T as un,a as m,r as H,m as yn,F as gn,E as fn,p as hn,o as E,q as j,w as c,e as p,f as o,b as M,_ as vn,v as bn,h as xn,g as _,i as Cn}from"./index-cgVI-orz.js";import{c as r}from"./cls-S9IiI6wd.js";import{R as W}from"./RightOutlined-CAi0GUia.js";import{D as wn}from"./DownOutlined-Lt7RJDf6.js";const C={onBeforeEnter(n){const s=n;s.style.height="0",s.style.opacity="0"},onEnter(n){const s=n,l=s.scrollHeight;s.offsetHeight,s.style.height=`${l}px`,s.style.opacity="1"},onAfterEnter(n){const s=n;s.style.height="",s.style.opacity=""},onBeforeLeave(n){const s=n;s.style.height=`${s.offsetHeight}px`,s.style.opacity="1"},onLeave(n){const s=n;s.offsetHeight,s.style.height="0",s.style.opacity="0"},onAfterLeave(n){const s=n;s.style.height="",s.style.opacity=""}},kn=Symbol("collapse-context"),Nn=S({name:"Collapse",props:{activeKey:[String,Array],defaultActiveKey:[String,Array],accordion:Boolean,bordered:{type:Boolean,default:!0},ghost:Boolean,size:{type:String,default:"middle"},expandIconPosition:{type:String,default:"start"},items:Array,destroyInactivePanel:Boolean,collapsible:String,expandIcon:Function,classNames:Object,styles:Object},emits:["update:activeKey","change"],setup(n,{slots:s,emit:l}){const a=rn("collapse"),e=u=>u?Array.isArray(u)?u:[u]:[],i=H(e(n.defaultActiveKey??n.activeKey)),y=m(()=>n.activeKey!==void 0),h=m(()=>y.value?e(n.activeKey):i.value);yn(()=>n.activeKey,u=>{u!==void 0&&(i.value=e(u))});const v=u=>{const b=h.value;let N;n.accordion?N=b.includes(u)?[]:[u]:N=b.includes(u)?b.filter(I=>I!==u):[...b,u],i.value=N,l("update:activeKey",N),l("change",N)};hn(kn,{activeKeys:h,toggle:v,prefixCls:a,expandIconPosition:m(()=>n.expandIconPosition),collapsible:m(()=>n.collapsible),destroyInactivePanel:m(()=>n.destroyInactivePanel),expandIcon:m(()=>n.expandIcon),classNames:m(()=>n.classNames),styles:m(()=>n.styles)});const A=(u,b)=>n.expandIcon?n.expandIcon({isActive:u,panelKey:b}):t(W,{class:"hmfw-icon",style:{transform:u?"rotate(90deg)":"rotate(0deg)"}},null);return()=>{var k,P,z;const u=n.items??[],b=(d,$)=>{const B=d.key!=null?String(d.key):String($);return fn(d,{panelKey:B})},N=((k=s.default)==null?void 0:k.call(s))??[];let I=0;const U=N.flatMap(d=>d.type===gn&&Array.isArray(d.children)?d.children.map($=>b($,I++)):[b(d,I++)]),X=(d,$,B,w={})=>{var O,L,Y,G,J,Q,Z,nn,tn,an,en,sn,on,ln;const x=h.value.includes(d),T=x||!n.destroyInactivePanel||w.forceRender,q=w.collapsible??n.collapsible,K=w.disabled||q==="disabled",R=!K&&q!=="icon",D=!K&&(q==="icon"||q==="header"||q===void 0),F=!w.forceRender;return t("div",{key:d,class:r(`${a}-item`,(O=n.classNames)==null?void 0:O.item,{[`${a}-item-active`]:x,[`${a}-item-disabled`]:K}),style:{...w.style,...(L=n.styles)==null?void 0:L.item}},[t("div",{class:r(`${a}-header`,(Y=n.classNames)==null?void 0:Y.header),onClick:()=>R&&v(d),role:"button","aria-expanded":x,"aria-disabled":K,style:{cursor:R?"pointer":"default",...(G=n.styles)==null?void 0:G.header}},[w.showArrow!==!1&&t("span",{class:r(`${a}-expand-icon`,(J=n.classNames)==null?void 0:J.icon,{[`${a}-expand-icon-active`]:x}),onClick:V=>{q==="icon"&&D&&(V.stopPropagation(),v(d))},style:{cursor:D&&q==="icon"?"pointer":"inherit",...(Q=n.styles)==null?void 0:Q.icon}},[A(x,d)]),t("span",{class:r(`${a}-header-text`,(Z=n.classNames)==null?void 0:Z.headerText),style:(nn=n.styles)==null?void 0:nn.headerText},[$]),w.extra&&t("span",{class:r(`${a}-extra`,(tn=n.classNames)==null?void 0:tn.extra),style:(an=n.styles)==null?void 0:an.extra},[w.extra])]),F?t(un,{name:`${a}-motion`,onBeforeEnter:C.onBeforeEnter,onEnter:C.onEnter,onAfterEnter:C.onAfterEnter,onBeforeLeave:C.onBeforeLeave,onLeave:C.onLeave,onAfterLeave:C.onAfterLeave},{default:()=>{var V,pn,cn,dn;return[T&&x&&t("div",{class:r(`${a}-content`,(V=n.classNames)==null?void 0:V.content),role:"region",style:(pn=n.styles)==null?void 0:pn.content},[t("div",{class:r(`${a}-content-box`,(cn=n.classNames)==null?void 0:cn.body),style:(dn=n.styles)==null?void 0:dn.body},[B])])]}}):T&&t("div",{class:r(`${a}-content`,(en=n.classNames)==null?void 0:en.content,{[`${a}-content-hidden`]:!x}),role:"region",style:{height:x?void 0:"0",opacity:x?void 0:"0",...(sn=n.styles)==null?void 0:sn.content}},[t("div",{class:r(`${a}-content-box`,(on=n.classNames)==null?void 0:on.body),style:(ln=n.styles)==null?void 0:ln.body},[B])])])};return t("div",{class:r(a,(P=n.classNames)==null?void 0:P.root,{[`${a}-borderless`]:!n.bordered,[`${a}-ghost`]:n.ghost,[`${a}-${n.size}`]:n.size!=="middle",[`${a}-icon-position-end`]:n.expandIconPosition==="end"}),style:(z=n.styles)==null?void 0:z.root},[u.map(d=>X(d.key,d.label,d.children,{disabled:d.disabled,showArrow:d.showArrow,extra:d.extra,collapsible:d.collapsible,style:d.style,forceRender:d.forceRender})),U])}}}),f=S({name:"CollapsePanel",props:{header:String,disabled:Boolean,showArrow:{type:Boolean,default:!0},extra:[String,Object],forceRender:Boolean,collapsible:String,panelKey:String,classNames:Object,styles:Object},setup(n,{slots:s,attrs:l}){const a=mn(kn,null);if(!a){const k=rn("collapse");return()=>{var P,z,d,$,B,w,x,T,q,K,R,D,F,O,L;return t("div",{class:r(`${k}-item`,(P=n.classNames)==null?void 0:P.item),style:(z=n.styles)==null?void 0:z.item},[t("div",{class:r(`${k}-header`,(d=n.classNames)==null?void 0:d.header),style:($=n.styles)==null?void 0:$.header},[n.showArrow&&t("span",{class:r(`${k}-expand-icon`,(B=n.classNames)==null?void 0:B.icon),style:(w=n.styles)==null?void 0:w.icon},[t(W,{class:"hmfw-icon"},null)]),t("span",{class:r(`${k}-header-text`,(x=n.classNames)==null?void 0:x.headerText),style:(T=n.styles)==null?void 0:T.headerText},[n.header]),n.extra&&t("span",{class:r(`${k}-extra`,(q=n.classNames)==null?void 0:q.extra),style:(K=n.styles)==null?void 0:K.extra},[n.extra])]),t("div",{class:r(`${k}-content ${k}-content-active`,(R=n.classNames)==null?void 0:R.content),style:(D=n.styles)==null?void 0:D.content},[t("div",{class:r(`${k}-content-box`,(F=n.classNames)==null?void 0:F.body),style:(O=n.styles)==null?void 0:O.body},[(L=s.default)==null?void 0:L.call(s)])])])}}const e=m(()=>n.panelKey??l.key??""),i=m(()=>a.activeKeys.value.includes(e.value)),y=a.prefixCls,h=m(()=>{var k;return{...(k=a.classNames)==null?void 0:k.value,...n.classNames}}),v=m(()=>{var k;return{...(k=a.styles)==null?void 0:k.value,...n.styles}}),A=m(()=>n.collapsible??a.collapsible.value),u=m(()=>n.disabled||A.value==="disabled"),b=m(()=>!u.value&&A.value!=="icon"),N=m(()=>!u.value&&A.value!=="disabled"),I=m(()=>i.value||!a.destroyInactivePanel.value||n.forceRender),U=m(()=>!n.forceRender),X=()=>a.expandIcon.value?a.expandIcon.value({isActive:i.value,panelKey:e.value}):t(W,{class:"hmfw-icon",style:{transform:i.value?"rotate(90deg)":"rotate(0deg)"}},null);return()=>{var k;return t("div",{class:r(`${y}-item`,h.value.item,{[`${y}-item-active`]:i.value,[`${y}-item-disabled`]:u.value}),style:v.value.item},[t("div",{class:r(`${y}-header`,h.value.header),onClick:()=>b.value&&a.toggle(e.value),role:"button","aria-expanded":i.value,"aria-disabled":u.value,style:{cursor:b.value?"pointer":"default",...v.value.header}},[n.showArrow&&t("span",{class:r(`${y}-expand-icon`,h.value.icon,{[`${y}-expand-icon-active`]:i.value}),onClick:P=>{A.value==="icon"&&N.value&&(P.stopPropagation(),a.toggle(e.value))},style:{cursor:N.value&&A.value==="icon"?"pointer":"inherit",...v.value.icon}},[X()]),t("span",{class:r(`${y}-header-text`,h.value.headerText),style:v.value.headerText},[n.header]),n.extra&&t("span",{class:r(`${y}-extra`,h.value.extra),style:v.value.extra},[n.extra])]),U.value?t(un,{name:`${y}-motion`,onBeforeEnter:C.onBeforeEnter,onEnter:C.onEnter,onAfterEnter:C.onAfterEnter,onBeforeLeave:C.onBeforeLeave,onLeave:C.onLeave,onAfterLeave:C.onAfterLeave},{default:()=>{var P;return[I.value&&i.value&&t("div",{class:r(`${y}-content`,h.value.content),role:"region",style:v.value.content},[t("div",{class:r(`${y}-content-box`,h.value.body),style:v.value.body},[(P=s.default)==null?void 0:P.call(s)])])]}}):I.value&&t("div",{class:r(`${y}-content`,h.value.content,{[`${y}-content-hidden`]:!i.value}),role:"region",style:{height:i.value?void 0:"0",opacity:i.value?void 0:"0",...v.value.content}},[t("div",{class:r(`${y}-content-box`,h.value.body),style:v.value.body},[(k=s.default)==null?void 0:k.call(s)])])])}}}),g=Object.assign(Nn,{Panel:f}),Pn=S({__name:"CollapseAccordion",setup(n){const s=H(["1"]);return(l,a)=>(E(),j(p(g),{"active-key":s.value,"onUpdate:activeKey":a[0]||(a[0]=e=>s.value=e),accordion:""},{default:c(()=>[t(p(f),{key:"1",header:"面板标题 1"},{default:c(()=>[...a[1]||(a[1]=[o("p",null,"面板内容 1",-1)])]),_:1}),t(p(f),{key:"2",header:"面板标题 2"},{default:c(()=>[...a[2]||(a[2]=[o("p",null,"面板内容 2",-1)])]),_:1}),t(p(f),{key:"3",header:"面板标题 3"},{default:c(()=>[...a[3]||(a[3]=[o("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),qn=`<template>
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
import { Collapse, CollapsePanel } from '@hmfw/ant-design'

const activeKey = ref(['1'])
<\/script>
`,Sn=S({__name:"CollapseBasic",setup(n){const s=H(["1"]);return(l,a)=>(E(),j(p(g),{"active-key":s.value,"onUpdate:activeKey":a[0]||(a[0]=e=>s.value=e)},{default:c(()=>[t(p(f),{key:"1",header:"面板标题 1"},{default:c(()=>[...a[1]||(a[1]=[o("p",null,"面板内容 1",-1)])]),_:1}),t(p(f),{key:"2",header:"面板标题 2"},{default:c(()=>[...a[2]||(a[2]=[o("p",null,"面板内容 2",-1)])]),_:1}),t(p(f),{key:"3",header:"面板标题 3"},{default:c(()=>[...a[3]||(a[3]=[o("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),En=`<template>
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
import { Collapse, CollapsePanel } from '@hmfw/ant-design'

const activeKey = ref(['1'])
<\/script>
`,$n=S({__name:"CollapseBorderless",setup(n){const s=H(["1"]);return(l,a)=>(E(),j(p(g),{"active-key":s.value,"onUpdate:activeKey":a[0]||(a[0]=e=>s.value=e),bordered:!1},{default:c(()=>[t(p(f),{key:"1",header:"面板标题 1"},{default:c(()=>[...a[1]||(a[1]=[o("p",null,"面板内容 1",-1)])]),_:1}),t(p(f),{key:"2",header:"面板标题 2"},{default:c(()=>[...a[2]||(a[2]=[o("p",null,"面板内容 2",-1)])]),_:1})]),_:1},8,["active-key"]))}}),An=`<template>
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
import { Collapse, CollapsePanel } from '@hmfw/ant-design'

const activeKey = ref(['1'])
<\/script>
`,In={style:{display:"flex","flex-direction":"column",gap:"24px"}},Bn=S({__name:"CollapseClassNames",setup(n){return(s,l)=>(E(),M("div",In,[o("div",null,[l[1]||(l[1]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义头部渐变背景：",-1)),t(p(g),{"default-active-key":["1"],"class-names":{header:"custom-header",icon:"custom-icon"}},{default:c(()=>[t(p(f),{key:"1",header:"渐变头部面板"},{default:c(()=>[...l[0]||(l[0]=[o("p",null,"通过 classNames.header 自定义头部背景色，使用渐变效果。",-1),o("p",null,"通过 classNames.icon 控制图标样式。",-1)])]),_:1})]),_:1})]),o("div",null,[l[3]||(l[3]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内容区域样式：",-1)),t(p(g),{"default-active-key":["2"],"class-names":{body:"custom-body",content:"custom-content"}},{default:c(()=>[t(p(f),{key:"2",header:"自定义内容面板"},{default:c(()=>[...l[2]||(l[2]=[o("p",null,"通过 classNames.body 控制实际内容容器。",-1),o("p",null,"通过 classNames.content 控制外层动画容器。",-1)])]),_:1})]),_:1})]),o("div",null,[l[5]||(l[5]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合多个语义节点：",-1)),t(p(g),{"default-active-key":["3"],"class-names":{item:"custom-item",header:"custom-header-combined",headerText:"custom-header-text",icon:"custom-icon-combined",body:"custom-body-combined"}},{default:c(()=>[t(p(f),{key:"3",header:"完整定制面板",extra:"标签"},{default:c(()=>[...l[4]||(l[4]=[o("p",null,"同时自定义多个语义节点的样式。",-1),o("p",null,"包括面板项、头部、头部文本、图标和内容。",-1)])]),_:1})]),_:1})]),o("div",null,[l[7]||(l[7]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),t(p(g),{"default-active-key":["4"],styles:{header:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",borderRadius:"8px",padding:"12px 16px"},icon:{color:"white",fontSize:"16px"},body:{backgroundColor:"#f0f5ff",padding:"16px",borderRadius:"0 0 8px 8px"}}},{default:c(()=>[t(p(f),{key:"4",header:"内联样式面板"},{default:c(()=>[...l[6]||(l[6]=[o("p",null,"通过 styles 属性直接应用内联样式。",-1),o("p",null,"styles 优先级高于 classNames。",-1)])]),_:1})]),_:1})]),o("div",null,[l[9]||(l[9]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"悬停效果与动画：",-1)),t(p(g),{"default-active-key":["5"],"class-names":{item:"hover-item",header:"hover-header",icon:"hover-icon"}},{default:c(()=>[t(p(f),{key:"5",header:"悬停效果面板"},{default:c(()=>[...l[8]||(l[8]=[o("p",null,"通过 CSS 为头部添加悬停动画效果。",-1),o("p",null,"图标旋转和头部阴影变化。",-1)])]),_:1})]),_:1})])]))}}),Kn=vn(Bn,[["__scopeId","data-v-b251cfeb"]]),_n=`<template>
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
import { Collapse, CollapsePanel } from '@hmfw/ant-design'
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
`,zn={style:{display:"flex","flex-direction":"column",gap:"16px"}},Tn="这个面板可以通过点击文本或图标来折叠",Rn=S({__name:"CollapseCollapsible",setup(n){const s=[{key:"1",label:"点击文本或图标可折叠",children:Tn}],l=[{key:"1",label:"只能点击图标折叠",children:"这个面板只能通过点击图标来折叠"}],a=[{key:"1",label:"无法折叠",children:"这个面板无法被折叠"}];return(e,i)=>(E(),M("div",zn,[t(p(g),{collapsible:"header","default-active-key":["1"],items:s}),t(p(g),{collapsible:"icon","default-active-key":["1"],items:l}),t(p(g),{collapsible:"disabled",items:a})]))}}),Dn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Collapse collapsible="header" :default-active-key="['1']" :items="headerItems" />
    <Collapse collapsible="icon" :default-active-key="['1']" :items="iconItems" />
    <Collapse collapsible="disabled" :items="disabledItems" />
  </div>
</template>

<script setup lang="ts">
import { Collapse } from '@hmfw/ant-design'

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
`,On=S({__name:"CollapseCustomIcon",setup(n){const s=[{key:"1",label:"自定义展开图标 1",children:"这是面板内容 1"},{key:"2",label:"自定义展开图标 2",children:"这是面板内容 2"},{key:"3",label:"自定义展开图标 3",children:"这是面板内容 3"}],l=({isActive:a})=>bn(wn,{class:"hmfw-icon",style:{transform:a?"rotate(0deg)":"rotate(-90deg)",transition:"transform 0.3s"}});return(a,e)=>(E(),j(p(g),{"default-active-key":["1"],"expand-icon":l,items:s}))}}),Ln=`<template>
  <Collapse :default-active-key="['1']" :expand-icon="customExpandIcon" :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { DownOutlined } from '@hmfw/icons'
import { Collapse } from '@hmfw/ant-design'

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
  return h(DownOutlined, {
    class: 'hmfw-icon',
    style: {
      transform: isActive ? 'rotate(0deg)' : 'rotate(-90deg)',
      transition: 'transform 0.3s',
    },
  })
}
<\/script>
`,jn=S({__name:"CollapseExtra",setup(n){const s=[{key:"1",label:"面板标题 1",children:"这是面板内容 1",extra:"额外内容"},{key:"2",label:"面板标题 2",children:"这是面板内容 2",extra:"更多"},{key:"3",label:"面板标题 3",children:"这是面板内容 3",showArrow:!1}];return(l,a)=>(E(),j(p(g),{"default-active-key":["1"],items:s}))}}),Fn=`<template>
  <Collapse :default-active-key="['1']" :items="items" />
</template>

<script setup lang="ts">
import { Collapse } from '@hmfw/ant-design'

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
`,Vn={style:{display:"flex","flex-direction":"column",gap:"16px"}},Hn=S({__name:"CollapseSize",setup(n){const s=[{key:"1",label:"面板标题",children:"这是面板内容"}];return(l,a)=>(E(),M("div",Vn,[t(p(g),{items:s,size:"small"}),t(p(g),{items:s,size:"middle"}),t(p(g),{items:s,size:"large"})]))}}),Mn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Collapse :items="items" size="small" />
    <Collapse :items="items" size="middle" />
    <Collapse :items="items" size="large" />
  </div>
</template>

<script setup lang="ts">
import { Collapse } from '@hmfw/ant-design'

const items = [
  {
    key: '1',
    label: '面板标题',
    children: '这是面板内容',
  },
]
<\/script>
`,Un={class:"markdown-body"},Jn={__name:"collapse",setup(n,{expose:s}){return s({frontmatter:{}}),(a,e)=>{const i=xn("DemoBlock");return E(),M("div",Un,[e[0]||(e[0]=o("h1",{id:"collapse-折叠面板",tabindex:"-1"},"Collapse 折叠面板",-1)),e[1]||(e[1]=o("p",null,"可以折叠/展开的内容区域。",-1)),e[2]||(e[2]=o("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=o("ul",null,[o("li",null,"对复杂区域进行分组和隐藏，保持页面的整洁"),o("li",null,"手风琴是一种特殊的折叠面板，只允许单个内容区域展开")],-1)),e[4]||(e[4]=o("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=o("h3",{id:"基本用法",tabindex:"-1"},"基本用法",-1)),e[6]||(e[6]=o("p",null,"可以同时展开多个面板。",-1)),t(i,{title:"基本用法",source:p(En)},{default:c(()=>[t(Sn)]),_:1},8,["source"]),e[7]||(e[7]=o("h3",{id:"手风琴模式",tabindex:"-1"},"手风琴模式",-1)),e[8]||(e[8]=o("p",null,"手风琴模式，每次只能展开一个面板。",-1)),t(i,{title:"手风琴模式",source:p(qn)},{default:c(()=>[t(Pn)]),_:1},8,["source"]),e[9]||(e[9]=o("h3",{id:"无边框",tabindex:"-1"},"无边框",-1)),e[10]||(e[10]=o("p",null,"无边框风格。",-1)),t(i,{title:"无边框",source:p(An)},{default:c(()=>[t($n)]),_:1},8,["source"]),e[11]||(e[11]=o("h3",{id:"可折叠触发区域",tabindex:"-1"},"可折叠触发区域",-1)),e[12]||(e[12]=o("p",null,[_("通过 "),o("code",null,"collapsible"),_(" 属性，可以设置面板的可折叠触发区域。")],-1)),t(i,{title:"可折叠触发区域",source:p(Dn)},{default:c(()=>[t(Rn)]),_:1},8,["source"]),e[13]||(e[13]=o("h3",{id:"自定义展开图标",tabindex:"-1"},"自定义展开图标",-1)),e[14]||(e[14]=o("p",null,[_("通过 "),o("code",null,"expandIcon"),_(" 可以自定义展开图标。")],-1)),t(i,{title:"自定义展开图标",source:p(Ln)},{default:c(()=>[t(On)]),_:1},8,["source"]),e[15]||(e[15]=o("h3",{id:"额外内容",tabindex:"-1"},"额外内容",-1)),e[16]||(e[16]=o("p",null,"可以在面板右上角添加额外内容。",-1)),t(i,{title:"额外内容",source:p(Fn)},{default:c(()=>[t(jn)]),_:1},8,["source"]),e[17]||(e[17]=o("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),e[18]||(e[18]=o("p",null,"提供三种尺寸：small、middle（默认）、large。",-1)),t(i,{title:"不同尺寸",source:p(Mn)},{default:c(()=>[t(Hn)]),_:1},8,["source"]),e[19]||(e[19]=o("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[20]||(e[20]=o("p",null,[_("通过 "),o("code",null,"classNames"),_(" / "),o("code",null,"styles"),_(" 对各子元素做细粒度样式控制。")],-1)),t(i,{title:"语义化 className 与 style",source:p(_n)},{default:c(()=>[t(Kn)]),_:1},8,["source"]),e[21]||(e[21]=Cn(`<h2 id="api" tabindex="-1">API</h2><h3 id="collapse-props" tabindex="-1">Collapse Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey (v-model)</td><td>当前激活 tab 面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>accordion</td><td>手风琴模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bordered</td><td>带边框风格的折叠面板</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>ghost</td><td>使折叠面板透明且无边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>设置折叠面板大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>expandIconPosition</td><td>设置图标位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;start&#39;</code></td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td><code>&#39;header&#39;</code></td></tr><tr><td>expandIcon</td><td>自定义展开图标</td><td><code>(props: { isActive?: boolean, panelKey?: string }) =&gt; VNode</code></td><td>-</td></tr><tr><td>destroyInactivePanel</td><td>销毁折叠隐藏的面板</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>items</td><td>面板数据</td><td><code>CollapseItem[]</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseStyles</code></td><td>-</td></tr></tbody></table><h3 id="collapse-events" tabindex="-1">Collapse Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板的回调</td><td><code>(keys: string[]) =&gt; void</code></td></tr><tr><td>update:activeKey</td><td>切换面板的回调</td><td><code>(keys: string[]) =&gt; void</code></td></tr></tbody></table><h3 id="collapseitem" tabindex="-1">CollapseItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>面板头内容</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>面板内容</td><td><code>any</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>style</td><td>自定义面板样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseStyles</code></td><td>-</td></tr></tbody></table><h3 id="collapsepanel-props" tabindex="-1">CollapsePanel Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>header</td><td>面板头内容</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CollapseStyles</code></td><td>-</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Collapse 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Collapse 级别 classNames --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse</span>
    <span class="token attr-name">:default-active-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;1&#39;]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      header: &#39;my-header&#39;,
      icon: &#39;my-icon&#39;,
      body: &#39;my-body&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CollapsePanel</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>自定义样式面板<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 面板内容 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CollapsePanel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- CollapsePanel 级别 classNames（优先级更高） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CollapsePanel</span>
      <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>面板级样式<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
        item: &#39;my-item&#39;,
        header: &#39;my-header-override&#39;,
      }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      CollapsePanel 的 classNames 会覆盖 Collapse 传递的同名 key
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CollapsePanel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-header)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #52c41a<span class="token punctuation">,</span> #389e0d<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-icon)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-body)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f6ffed<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 3px solid #52c41a<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Collapse 级别 styles --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse</span>
    <span class="token attr-name">:default-active-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;1&#39;]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      header: { background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;, color: &#39;white&#39;, borderRadius: &#39;8px&#39; },
      icon: { color: &#39;white&#39;, fontSize: &#39;16px&#39; },
      body: { backgroundColor: &#39;#f0f5ff&#39;, padding: &#39;16px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CollapsePanel</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>内联样式面板<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 面板内容 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CollapsePanel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- CollapsePanel 级别 styles --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Collapse</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CollapsePanel</span>
      <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>面板级内联样式<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
        header: { fontWeight: 600, fontSize: &#39;16px&#39; },
        body: { padding: &#39;20px&#39;, backgroundColor: &#39;#e6f7ff&#39; },
      }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      CollapsePanel 的 styles 会覆盖 Collapse 传递的同名 key
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CollapsePanel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Collapse</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>Collapse 通过 <code>provide</code> / <code>inject</code> 将 <code>classNames</code> 和 <code>styles</code> 传递给子组件 CollapsePanel</li><li>CollapsePanel 自己的 <code>classNames</code> / <code>styles</code> props 优先级<strong>高于</strong> Collapse 传递的值（用于单独定制某个面板）</li><li><code>icon</code> 仅在 <code>showArrow</code> 为 <code>true</code> 时渲染</li><li><code>extra</code> 仅在设置了 <code>extra</code> prop 时渲染</li><li><code>content</code> 和 <code>body</code> 在面板收起时： <ul><li><code>destroyInactivePanel</code> 为 <code>true</code> 时不渲染</li><li><code>forceRender</code> 为 <code>true</code> 时渲染但隐藏（<code>display: none</code>）</li><li>默认使用 <code>&lt;Transition&gt;</code> 渲染但隐藏（<code>height: 0; overflow: hidden</code>）</li></ul></li><li><code>headerText</code> 应用于 <code>header</code> prop 或 <code>label</code> 字段的文本节点；若使用 slot 自定义 header，需自行包裹容器控制样式</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Collapse 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-alter</code></td><td>交替填充色</td><td><code>rgba(0,0,0,0.02)</code> <em>(注：Token 未定义)</em></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr><tr><td><code>--hmfw-padding</code></td><td>标准内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-padding-lg</code></td><td>大号内边距</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-padding-sm</code></td><td>小号内边距</td><td><code>8px</code></td></tr></tbody></table>`,26))])}}};export{Jn as default};
