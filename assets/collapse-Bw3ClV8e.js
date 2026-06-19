import{o as $,q as Y,N as F,n as t,c as U,f,E as D,Q as G,F as J,e as W,B as Z,A,i as E,R as c,K as o,h as a,k as V,p as ee,H as te,m as R,l as ne}from"./index-CCJgYszN.js";import{I as O}from"./Icon-DcJqStDf.js";import{R as N}from"./RightOutlined-CqpmqJKp.js";import{c as w}from"./cls-S9IiI6wd.js";import{D as le}from"./DownOutlined-R26cp9nY.js";const v={onBeforeEnter(d){const l=d;l.style.height="0",l.style.opacity="0"},onEnter(d){const l=d,p=l.scrollHeight;l.offsetHeight,l.style.height=`${p}px`,l.style.opacity="1"},onAfterEnter(d){const l=d;l.style.height="",l.style.opacity=""},onBeforeLeave(d){const l=d;l.style.height=`${l.offsetHeight}px`,l.style.opacity="1"},onLeave(d){const l=d;l.offsetHeight,l.style.height="0",l.style.opacity="0"},onAfterLeave(d){const l=d;l.style.height="",l.style.opacity=""}},q=Symbol("collapse-context"),de=$({name:"Collapse",props:{activeKey:[String,Array],defaultActiveKey:[String,Array],accordion:Boolean,bordered:{type:Boolean,default:!0},ghost:Boolean,size:{type:String,default:"middle"},expandIconPosition:{type:String,default:"start"},items:Array,destroyInactivePanel:Boolean,collapsible:String,expandIcon:Function},emits:["update:activeKey","change"],setup(d,{slots:l,emit:p}){const e=F("collapse"),n=i=>i?Array.isArray(i)?i:[i]:[],r=D(n(d.defaultActiveKey??d.activeKey)),u=f(()=>d.activeKey!==void 0),h=f(()=>u.value?n(d.activeKey):r.value);G(()=>d.activeKey,i=>{i!==void 0&&(r.value=n(i))});const I=i=>{const y=h.value;let x;d.accordion?x=y.includes(i)?[]:[i]:x=y.includes(i)?y.filter(_=>_!==i):[...y,i],r.value=x,p("update:activeKey",x),p("change",x)};Z(q,{activeKeys:h,toggle:I,prefixCls:e,expandIconPosition:f(()=>d.expandIconPosition),collapsible:f(()=>d.collapsible),destroyInactivePanel:f(()=>d.destroyInactivePanel),expandIcon:f(()=>d.expandIcon)});const S=(i,y)=>d.expandIcon?d.expandIcon({isActive:i,panelKey:y}):t(O,{component:N,style:{transform:i?"rotate(90deg)":"rotate(0deg)"}},null);return()=>{var H;const i=d.items??[],y=(s,B)=>{const L=s.key!=null?String(s.key):String(B);return W(s,{panelKey:L})},x=((H=l.default)==null?void 0:H.call(l))??[];let _=0;const m=x.flatMap(s=>s.type===J&&Array.isArray(s.children)?s.children.map(B=>y(B,_++)):[y(s,_++)]),C=(s,B,L,P={})=>{const g=h.value.includes(s),T=g||!d.destroyInactivePanel||P.forceRender,K=P.collapsible??d.collapsible,z=P.disabled||K==="disabled",M=!z&&K!=="icon",j=!z&&(K==="icon"||K==="header"||K===void 0),Q=!P.forceRender;return t("div",{key:s,class:w(`${e}-item`,{[`${e}-item-active`]:g,[`${e}-item-disabled`]:z}),style:P.style},[t("div",{class:`${e}-header`,onClick:()=>M&&I(s),role:"button","aria-expanded":g,"aria-disabled":z,style:{cursor:M?"pointer":"default"}},[P.showArrow!==!1&&t("span",{class:w(`${e}-expand-icon`,{[`${e}-expand-icon-active`]:g}),onClick:X=>{K==="icon"&&j&&(X.stopPropagation(),I(s))},style:{cursor:j&&K==="icon"?"pointer":"inherit"}},[S(g,s)]),t("span",{class:`${e}-header-text`},[B]),P.extra&&t("span",{class:`${e}-extra`},[P.extra])]),Q?t(U,{name:`${e}-motion`,onBeforeEnter:v.onBeforeEnter,onEnter:v.onEnter,onAfterEnter:v.onAfterEnter,onBeforeLeave:v.onBeforeLeave,onLeave:v.onLeave,onAfterLeave:v.onAfterLeave},{default:()=>[T&&g&&t("div",{class:`${e}-content`,role:"region"},[t("div",{class:`${e}-content-box`},[L])])]}):T&&t("div",{class:w(`${e}-content`,{[`${e}-content-hidden`]:!g}),role:"region",style:{height:g?void 0:"0",opacity:g?void 0:"0"}},[t("div",{class:`${e}-content-box`},[L])])])};return t("div",{class:w(e,{[`${e}-borderless`]:!d.bordered,[`${e}-ghost`]:d.ghost,[`${e}-${d.size}`]:d.size!=="middle",[`${e}-icon-position-end`]:d.expandIconPosition==="end"})},[i.map(s=>C(s.key,s.label,s.children,{disabled:s.disabled,showArrow:s.showArrow,extra:s.extra,collapsible:s.collapsible,style:s.style,forceRender:s.forceRender})),m])}}}),k=$({name:"CollapsePanel",props:{header:String,disabled:Boolean,showArrow:{type:Boolean,default:!0},extra:[String,Object],forceRender:Boolean,collapsible:String,panelKey:String},setup(d,{slots:l,attrs:p}){const e=Y(q,null);if(!e){const m=F("collapse");return()=>{var C;return t("div",{class:`${m}-item`},[t("div",{class:`${m}-header`},[d.showArrow&&t("span",{class:`${m}-expand-icon`},[t(O,{component:N},null)]),t("span",{class:`${m}-header-text`},[d.header]),d.extra&&t("span",{class:`${m}-extra`},[d.extra])]),t("div",{class:`${m}-content ${m}-content-active`},[t("div",{class:`${m}-content-box`},[(C=l.default)==null?void 0:C.call(l)])])])}}const n=f(()=>d.panelKey??p.key??""),r=f(()=>e.activeKeys.value.includes(n.value)),u=e.prefixCls,h=f(()=>d.collapsible??e.collapsible.value),I=f(()=>d.disabled||h.value==="disabled"),S=f(()=>!I.value&&h.value!=="icon"),i=f(()=>!I.value&&h.value!=="disabled"),y=f(()=>r.value||!e.destroyInactivePanel.value||d.forceRender),x=f(()=>!d.forceRender),_=()=>e.expandIcon.value?e.expandIcon.value({isActive:r.value,panelKey:n.value}):t(O,{component:N,style:{transform:r.value?"rotate(90deg)":"rotate(0deg)"}},null);return()=>{var m;return t("div",{class:w(`${u}-item`,{[`${u}-item-active`]:r.value,[`${u}-item-disabled`]:I.value})},[t("div",{class:`${u}-header`,onClick:()=>S.value&&e.toggle(n.value),role:"button","aria-expanded":r.value,"aria-disabled":I.value,style:{cursor:S.value?"pointer":"default"}},[d.showArrow&&t("span",{class:w(`${u}-expand-icon`,{[`${u}-expand-icon-active`]:r.value}),onClick:C=>{h.value==="icon"&&i.value&&(C.stopPropagation(),e.toggle(n.value))},style:{cursor:i.value&&h.value==="icon"?"pointer":"inherit"}},[_()]),t("span",{class:`${u}-header-text`},[d.header]),d.extra&&t("span",{class:`${u}-extra`},[d.extra])]),x.value?t(U,{name:`${u}-motion`,onBeforeEnter:v.onBeforeEnter,onEnter:v.onEnter,onAfterEnter:v.onAfterEnter,onBeforeLeave:v.onBeforeLeave,onLeave:v.onLeave,onAfterLeave:v.onAfterLeave},{default:()=>{var C;return[y.value&&r.value&&t("div",{class:`${u}-content`,role:"region"},[t("div",{class:`${u}-content-box`},[(C=l.default)==null?void 0:C.call(l)])])]}}):y.value&&t("div",{class:w(`${u}-content`,{[`${u}-content-hidden`]:!r.value}),role:"region",style:{height:r.value?void 0:"0",opacity:r.value?void 0:"0"}},[t("div",{class:`${u}-content-box`},[(m=l.default)==null?void 0:m.call(l)])])])}}}),b=Object.assign(de,{Panel:k}),ae=$({__name:"CollapseAccordion",setup(d){const l=D(["1"]);return(p,e)=>(A(),E(o(b),{"active-key":l.value,"onUpdate:activeKey":e[0]||(e[0]=n=>l.value=n),accordion:""},{default:c(()=>[t(o(k),{key:"1",header:"面板标题 1"},{default:c(()=>[...e[1]||(e[1]=[a("p",null,"面板内容 1",-1)])]),_:1}),t(o(k),{key:"2",header:"面板标题 2"},{default:c(()=>[...e[2]||(e[2]=[a("p",null,"面板内容 2",-1)])]),_:1}),t(o(k),{key:"3",header:"面板标题 3"},{default:c(()=>[...e[3]||(e[3]=[a("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),oe=`<template>
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
`,se=$({__name:"CollapseBasic",setup(d){const l=D(["1"]);return(p,e)=>(A(),E(o(b),{"active-key":l.value,"onUpdate:activeKey":e[0]||(e[0]=n=>l.value=n)},{default:c(()=>[t(o(k),{key:"1",header:"面板标题 1"},{default:c(()=>[...e[1]||(e[1]=[a("p",null,"面板内容 1",-1)])]),_:1}),t(o(k),{key:"2",header:"面板标题 2"},{default:c(()=>[...e[2]||(e[2]=[a("p",null,"面板内容 2",-1)])]),_:1}),t(o(k),{key:"3",header:"面板标题 3"},{default:c(()=>[...e[3]||(e[3]=[a("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),re=`<template>
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
`,ie=$({__name:"CollapseBorderless",setup(d){const l=D(["1"]);return(p,e)=>(A(),E(o(b),{"active-key":l.value,"onUpdate:activeKey":e[0]||(e[0]=n=>l.value=n),bordered:!1},{default:c(()=>[t(o(k),{key:"1",header:"面板标题 1"},{default:c(()=>[...e[1]||(e[1]=[a("p",null,"面板内容 1",-1)])]),_:1}),t(o(k),{key:"2",header:"面板标题 2"},{default:c(()=>[...e[2]||(e[2]=[a("p",null,"面板内容 2",-1)])]),_:1})]),_:1},8,["active-key"]))}}),ce=`<template>
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
`,pe={style:{display:"flex","flex-direction":"column",gap:"16px"}},ue="这个面板可以通过点击文本或图标来折叠",fe=$({__name:"CollapseCollapsible",setup(d){const l=[{key:"1",label:"点击文本或图标可折叠",children:ue}],p=[{key:"1",label:"只能点击图标折叠",children:"这个面板只能通过点击图标来折叠"}],e=[{key:"1",label:"无法折叠",children:"这个面板无法被折叠"}];return(n,r)=>(A(),V("div",pe,[t(o(b),{collapsible:"header","default-active-key":["1"],items:l}),t(o(b),{collapsible:"icon","default-active-key":["1"],items:p}),t(o(b),{collapsible:"disabled",items:e})]))}}),me=`<template>
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
`,ye=$({__name:"CollapseCustomIcon",setup(d){const l=[{key:"1",label:"自定义展开图标 1",children:"这是面板内容 1"},{key:"2",label:"自定义展开图标 2",children:"这是面板内容 2"},{key:"3",label:"自定义展开图标 3",children:"这是面板内容 3"}],p=({isActive:e})=>ee(O,{component:le,style:{transform:e?"rotate(0deg)":"rotate(-90deg)",transition:"transform 0.3s"}});return(e,n)=>(A(),E(o(b),{"default-active-key":["1"],"expand-icon":p,items:l}))}}),ve=`<template>
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
`,be=$({__name:"CollapseExtra",setup(d){const l=[{key:"1",label:"面板标题 1",children:"这是面板内容 1",extra:"额外内容"},{key:"2",label:"面板标题 2",children:"这是面板内容 2",extra:"更多"},{key:"3",label:"面板标题 3",children:"这是面板内容 3",showArrow:!1}];return(p,e)=>(A(),E(o(b),{"default-active-key":["1"],items:l}))}}),he=`<template>
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
`,xe={style:{display:"flex","flex-direction":"column",gap:"16px"}},Ce=$({__name:"CollapseSize",setup(d){const l=[{key:"1",label:"面板标题",children:"这是面板内容"}];return(p,e)=>(A(),V("div",xe,[t(o(b),{items:l,size:"small"}),t(o(b),{items:l,size:"middle"}),t(o(b),{items:l,size:"large"})]))}}),ge=`<template>
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
`,ke={class:"markdown-body"},we={__name:"collapse",setup(d,{expose:l}){return l({frontmatter:{}}),(e,n)=>{const r=te("DemoBlock");return A(),V("div",ke,[n[0]||(n[0]=a("h1",{id:"collapse-折叠面板",tabindex:"-1"},"Collapse 折叠面板",-1)),n[1]||(n[1]=a("p",null,"可以折叠/展开的内容区域。",-1)),n[2]||(n[2]=a("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=a("ul",null,[a("li",null,"对复杂区域进行分组和隐藏，保持页面的整洁"),a("li",null,"手风琴是一种特殊的折叠面板，只允许单个内容区域展开")],-1)),n[4]||(n[4]=a("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=a("h3",{id:"基本用法",tabindex:"-1"},"基本用法",-1)),n[6]||(n[6]=a("p",null,"可以同时展开多个面板。",-1)),t(r,{title:"基本用法",source:o(re)},{default:c(()=>[t(se)]),_:1},8,["source"]),n[7]||(n[7]=a("h3",{id:"手风琴模式",tabindex:"-1"},"手风琴模式",-1)),n[8]||(n[8]=a("p",null,"手风琴模式，每次只能展开一个面板。",-1)),t(r,{title:"手风琴模式",source:o(oe)},{default:c(()=>[t(ae)]),_:1},8,["source"]),n[9]||(n[9]=a("h3",{id:"无边框",tabindex:"-1"},"无边框",-1)),n[10]||(n[10]=a("p",null,"无边框风格。",-1)),t(r,{title:"无边框",source:o(ce)},{default:c(()=>[t(ie)]),_:1},8,["source"]),n[11]||(n[11]=a("h3",{id:"可折叠触发区域",tabindex:"-1"},"可折叠触发区域",-1)),n[12]||(n[12]=a("p",null,[R("通过 "),a("code",null,"collapsible"),R(" 属性，可以设置面板的可折叠触发区域。")],-1)),t(r,{title:"可折叠触发区域",source:o(me)},{default:c(()=>[t(fe)]),_:1},8,["source"]),n[13]||(n[13]=a("h3",{id:"自定义展开图标",tabindex:"-1"},"自定义展开图标",-1)),n[14]||(n[14]=a("p",null,[R("通过 "),a("code",null,"expandIcon"),R(" 可以自定义展开图标。")],-1)),t(r,{title:"自定义展开图标",source:o(ve)},{default:c(()=>[t(ye)]),_:1},8,["source"]),n[15]||(n[15]=a("h3",{id:"额外内容",tabindex:"-1"},"额外内容",-1)),n[16]||(n[16]=a("p",null,"可以在面板右上角添加额外内容。",-1)),t(r,{title:"额外内容",source:o(he)},{default:c(()=>[t(be)]),_:1},8,["source"]),n[17]||(n[17]=a("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),n[18]||(n[18]=a("p",null,"提供三种尺寸：small、middle（默认）、large。",-1)),t(r,{title:"不同尺寸",source:o(ge)},{default:c(()=>[t(Ce)]),_:1},8,["source"]),n[19]||(n[19]=ne('<h2 id="api" tabindex="-1">API</h2><h3 id="collapse-props" tabindex="-1">Collapse Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey (v-model)</td><td>当前激活 tab 面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>accordion</td><td>手风琴模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bordered</td><td>带边框风格的折叠面板</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>ghost</td><td>使折叠面板透明且无边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>设置折叠面板大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>expandIconPosition</td><td>设置图标位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;start&#39;</code></td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td><code>&#39;header&#39;</code></td></tr><tr><td>expandIcon</td><td>自定义展开图标</td><td><code>(props: { isActive?: boolean, panelKey?: string }) =&gt; VNode</code></td><td>-</td></tr><tr><td>destroyInactivePanel</td><td>销毁折叠隐藏的面板</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>items</td><td>面板数据</td><td><code>CollapseItem[]</code></td><td>-</td></tr></tbody></table><h3 id="collapse-events" tabindex="-1">Collapse Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板的回调</td><td><code>(keys: string[]) =&gt; void</code></td></tr><tr><td>update:activeKey</td><td>切换面板的回调</td><td><code>(keys: string[]) =&gt; void</code></td></tr></tbody></table><h3 id="collapseitem" tabindex="-1">CollapseItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>面板头内容</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>面板内容</td><td><code>any</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>style</td><td>自定义面板样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="collapsepanel-props" tabindex="-1">CollapsePanel Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>header</td><td>面板头内容</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',9))])}}};export{we as default};
