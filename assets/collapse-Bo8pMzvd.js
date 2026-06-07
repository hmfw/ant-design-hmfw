import{n as k,p as G,M as T,m as t,c as j,e as f,D as z,P as J,A as Q,z as P,h as _,Q as c,J as s,g as o,j as R,o as X,G as Y,l as S,k as q}from"./index-i0jnWELi.js";import{a7 as O,u as W}from"./icons-DkTSuFEr.js";import{I as L}from"./Icon-D9pw0Su_.js";import{c as K}from"./cls-S9IiI6wd.js";const m={onBeforeEnter(l){const d=l;d.style.height="0",d.style.opacity="0"},onEnter(l){const d=l,p=d.scrollHeight;d.offsetHeight,d.style.height=`${p}px`,d.style.opacity="1"},onAfterEnter(l){const d=l;d.style.height="",d.style.opacity=""},onBeforeLeave(l){const d=l;d.style.height=`${d.offsetHeight}px`,d.style.opacity="1"},onLeave(l){const d=l;d.offsetHeight,d.style.height="0",d.style.opacity="0"},onAfterLeave(l){const d=l;d.style.height="",d.style.opacity=""}},M=Symbol("collapse-context"),Z=k({name:"Collapse",props:{activeKey:[String,Array],defaultActiveKey:[String,Array],accordion:Boolean,bordered:{type:Boolean,default:!0},ghost:Boolean,size:{type:String,default:"middle"},expandIconPosition:{type:String,default:"start"},items:Array,destroyInactivePanel:Boolean,collapsible:String,expandIcon:Function},emits:["update:activeKey","change"],setup(l,{slots:d,emit:p}){const e=T("collapse"),n=i=>i?Array.isArray(i)?i:[i]:[],r=z(n(l.defaultActiveKey??l.activeKey)),u=f(()=>l.activeKey!==void 0),b=f(()=>u.value?n(l.activeKey):r.value);J(()=>l.activeKey,i=>{i!==void 0&&(r.value=n(i))});const $=i=>{const y=b.value;let h;l.accordion?h=y.includes(i)?[]:[i]:h=y.includes(i)?y.filter(w=>w!==i):[...y,i],r.value=h,p("update:activeKey",h),p("change",h)};Q(M,{activeKeys:b,toggle:$,prefixCls:e,expandIconPosition:f(()=>l.expandIconPosition),collapsible:f(()=>l.collapsible),destroyInactivePanel:f(()=>l.destroyInactivePanel),expandIcon:f(()=>l.expandIcon)});const B=(i,y)=>l.expandIcon?l.expandIcon({isActive:i,panelKey:y}):t(L,{component:O,style:{transform:i?"rotate(90deg)":"rotate(0deg)"}},null);return()=>{var w;const i=l.items??[],y=(w=d.default)==null?void 0:w.call(d),h=(a,x,D,I={})=>{const C=b.value.includes(a),N=C||!l.destroyInactivePanel||I.forceRender,A=I.collapsible??l.collapsible,E=I.disabled||A==="disabled",V=!E&&A!=="icon",H=!E&&(A==="icon"||A==="header"||A===void 0),U=!I.forceRender;return t("div",{key:a,class:K(`${e}-item`,{[`${e}-item-active`]:C,[`${e}-item-disabled`]:E}),style:I.style},[t("div",{class:`${e}-header`,onClick:()=>V&&$(a),role:"button","aria-expanded":C,"aria-disabled":E,style:{cursor:V?"pointer":"default"}},[I.showArrow!==!1&&t("span",{class:K(`${e}-expand-icon`,{[`${e}-expand-icon-active`]:C}),onClick:F=>{A==="icon"&&H&&(F.stopPropagation(),$(a))},style:{cursor:H&&A==="icon"?"pointer":"inherit"}},[B(C,a)]),t("span",{class:`${e}-header-text`},[x]),I.extra&&t("span",{class:`${e}-extra`},[I.extra])]),U?t(j,{name:`${e}-motion`,onBeforeEnter:m.onBeforeEnter,onEnter:m.onEnter,onAfterEnter:m.onAfterEnter,onBeforeLeave:m.onBeforeLeave,onLeave:m.onLeave,onAfterLeave:m.onAfterLeave},{default:()=>[N&&C&&t("div",{class:`${e}-content`,role:"region"},[t("div",{class:`${e}-content-box`},[D])])]}):N&&t("div",{class:K(`${e}-content`,{[`${e}-content-hidden`]:!C}),role:"region",style:{height:C?void 0:"0",opacity:C?void 0:"0"}},[t("div",{class:`${e}-content-box`},[D])])])};return t("div",{class:K(e,{[`${e}-borderless`]:!l.bordered,[`${e}-ghost`]:l.ghost,[`${e}-${l.size}`]:l.size!=="middle",[`${e}-icon-position-end`]:l.expandIconPosition==="end"})},[i.map(a=>h(a.key,a.label,a.children,{disabled:a.disabled,showArrow:a.showArrow,extra:a.extra,collapsible:a.collapsible,style:a.style,forceRender:a.forceRender})),y])}}}),g=k({name:"CollapsePanel",props:{header:String,disabled:Boolean,showArrow:{type:Boolean,default:!0},extra:[String,Object],forceRender:Boolean,collapsible:String,panelKey:String},setup(l,{slots:d,attrs:p}){const e=G(M,null);if(!e){const a=T("collapse");return()=>{var x;return t("div",{class:`${a}-item`},[t("div",{class:`${a}-header`},[l.showArrow&&t("span",{class:`${a}-expand-icon`},[t(L,{component:O},null)]),t("span",{class:`${a}-header-text`},[l.header]),l.extra&&t("span",{class:`${a}-extra`},[l.extra])]),t("div",{class:`${a}-content ${a}-content-active`},[t("div",{class:`${a}-content-box`},[(x=d.default)==null?void 0:x.call(d)])])])}}const n=f(()=>l.panelKey??p.key??""),r=f(()=>e.activeKeys.value.includes(n.value)),u=e.prefixCls,b=f(()=>l.collapsible??e.collapsible.value),$=f(()=>l.disabled||b.value==="disabled"),B=f(()=>!$.value&&b.value!=="icon"),i=f(()=>!$.value&&b.value!=="disabled"),y=f(()=>r.value||!e.destroyInactivePanel.value||l.forceRender),h=f(()=>!l.forceRender),w=()=>e.expandIcon.value?e.expandIcon.value({isActive:r.value,panelKey:n.value}):t(L,{component:O,style:{transform:r.value?"rotate(90deg)":"rotate(0deg)"}},null);return()=>{var a;return t("div",{class:K(`${u}-item`,{[`${u}-item-active`]:r.value,[`${u}-item-disabled`]:$.value})},[t("div",{class:`${u}-header`,onClick:()=>B.value&&e.toggle(n.value),role:"button","aria-expanded":r.value,"aria-disabled":$.value,style:{cursor:B.value?"pointer":"default"}},[l.showArrow&&t("span",{class:K(`${u}-expand-icon`,{[`${u}-expand-icon-active`]:r.value}),onClick:x=>{b.value==="icon"&&i.value&&(x.stopPropagation(),e.toggle(n.value))},style:{cursor:i.value&&b.value==="icon"?"pointer":"inherit"}},[w()]),t("span",{class:`${u}-header-text`},[l.header]),l.extra&&t("span",{class:`${u}-extra`},[l.extra])]),h.value?t(j,{name:`${u}-motion`,onBeforeEnter:m.onBeforeEnter,onEnter:m.onEnter,onAfterEnter:m.onAfterEnter,onBeforeLeave:m.onBeforeLeave,onLeave:m.onLeave,onAfterLeave:m.onAfterLeave},{default:()=>{var x;return[y.value&&r.value&&t("div",{class:`${u}-content`,role:"region"},[t("div",{class:`${u}-content-box`},[(x=d.default)==null?void 0:x.call(d)])])]}}):y.value&&t("div",{class:K(`${u}-content`,{[`${u}-content-hidden`]:!r.value}),role:"region",style:{height:r.value?void 0:"0",opacity:r.value?void 0:"0"}},[t("div",{class:`${u}-content-box`},[(a=d.default)==null?void 0:a.call(d)])])])}}}),v=Object.assign(Z,{Panel:g}),ee=k({__name:"CollapseAccordion",setup(l){const d=z(["1"]);return(p,e)=>(P(),_(s(v),{"active-key":d.value,"onUpdate:activeKey":e[0]||(e[0]=n=>d.value=n),accordion:""},{default:c(()=>[t(s(g),{key:"1",header:"面板标题 1"},{default:c(()=>[...e[1]||(e[1]=[o("p",null,"面板内容 1",-1)])]),_:1}),t(s(g),{key:"2",header:"面板标题 2"},{default:c(()=>[...e[2]||(e[2]=[o("p",null,"面板内容 2",-1)])]),_:1}),t(s(g),{key:"3",header:"面板标题 3"},{default:c(()=>[...e[3]||(e[3]=[o("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),te=`<template>
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
`,ne=k({__name:"CollapseBasic",setup(l){const d=z(["1"]);return(p,e)=>(P(),_(s(v),{"active-key":d.value,"onUpdate:activeKey":e[0]||(e[0]=n=>d.value=n)},{default:c(()=>[t(s(g),{key:"1",header:"面板标题 1"},{default:c(()=>[...e[1]||(e[1]=[o("p",null,"面板内容 1",-1)])]),_:1}),t(s(g),{key:"2",header:"面板标题 2"},{default:c(()=>[...e[2]||(e[2]=[o("p",null,"面板内容 2",-1)])]),_:1}),t(s(g),{key:"3",header:"面板标题 3"},{default:c(()=>[...e[3]||(e[3]=[o("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),de=`<template>
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
`,le=k({__name:"CollapseBorderless",setup(l){const d=z(["1"]);return(p,e)=>(P(),_(s(v),{"active-key":d.value,"onUpdate:activeKey":e[0]||(e[0]=n=>d.value=n),bordered:!1},{default:c(()=>[t(s(g),{key:"1",header:"面板标题 1"},{default:c(()=>[...e[1]||(e[1]=[o("p",null,"面板内容 1",-1)])]),_:1}),t(s(g),{key:"2",header:"面板标题 2"},{default:c(()=>[...e[2]||(e[2]=[o("p",null,"面板内容 2",-1)])]),_:1})]),_:1},8,["active-key"]))}}),oe=`<template>
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
`,ae={style:{display:"flex","flex-direction":"column",gap:"16px"}},se="这个面板可以通过点击文本或图标来折叠",re=k({__name:"CollapseCollapsible",setup(l){const d=[{key:"1",label:"点击文本或图标可折叠",children:se}],p=[{key:"1",label:"只能点击图标折叠",children:"这个面板只能通过点击图标来折叠"}],e=[{key:"1",label:"无法折叠",children:"这个面板无法被折叠"}];return(n,r)=>(P(),R("div",ae,[t(s(v),{collapsible:"header","default-active-key":["1"],items:d}),t(s(v),{collapsible:"icon","default-active-key":["1"],items:p}),t(s(v),{collapsible:"disabled",items:e})]))}}),ie=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
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
`,ce=k({__name:"CollapseCustomIcon",setup(l){const d=[{key:"1",label:"自定义展开图标 1",children:"这是面板内容 1"},{key:"2",label:"自定义展开图标 2",children:"这是面板内容 2"},{key:"3",label:"自定义展开图标 3",children:"这是面板内容 3"}],p=({isActive:e})=>X(L,{component:W,style:{transform:e?"rotate(0deg)":"rotate(-90deg)",transition:"transform 0.3s"}});return(e,n)=>(P(),_(s(v),{"default-active-key":["1"],"expand-icon":p,items:d}))}}),pe=`<template>
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
`,ue=k({__name:"CollapseExtra",setup(l){const d=[{key:"1",label:"面板标题 1",children:"这是面板内容 1",extra:"额外内容"},{key:"2",label:"面板标题 2",children:"这是面板内容 2",extra:"更多"},{key:"3",label:"面板标题 3",children:"这是面板内容 3",showArrow:!1}];return(p,e)=>(P(),_(s(v),{"default-active-key":["1"],items:d}))}}),fe=`<template>
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
`,me={style:{display:"flex","flex-direction":"column",gap:"16px"}},ye=k({__name:"CollapseSize",setup(l){const d=[{key:"1",label:"面板标题",children:"这是面板内容"}];return(p,e)=>(P(),R("div",me,[t(s(v),{items:d,size:"small"}),t(s(v),{items:d,size:"middle"}),t(s(v),{items:d,size:"large"})]))}}),ve=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
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
`,be={class:"markdown-body"},ke={__name:"collapse",setup(l,{expose:d}){return d({frontmatter:{}}),(e,n)=>{const r=Y("DemoBlock");return P(),R("div",be,[n[0]||(n[0]=o("h1",{id:"collapse-",tabindex:"-1"},"Collapse 折叠面板",-1)),n[1]||(n[1]=o("p",null,"可以折叠/展开的内容区域。",-1)),n[2]||(n[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=o("ul",null,[o("li",null,"对复杂区域进行分组和隐藏，保持页面的整洁"),o("li",null,"手风琴是一种特殊的折叠面板，只允许单个内容区域展开")],-1)),n[4]||(n[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=o("h3",{id:"-2",tabindex:"-1"},"基本用法",-1)),n[6]||(n[6]=o("p",null,"可以同时展开多个面板。",-1)),t(r,{title:"基本用法",source:s(de)},{default:c(()=>[t(ne)]),_:1},8,["source"]),n[7]||(n[7]=o("h3",{id:"-3",tabindex:"-1"},"手风琴模式",-1)),n[8]||(n[8]=o("p",null,"手风琴模式，每次只能展开一个面板。",-1)),t(r,{title:"手风琴模式",source:s(te)},{default:c(()=>[t(ee)]),_:1},8,["source"]),n[9]||(n[9]=o("h3",{id:"-4",tabindex:"-1"},"无边框",-1)),n[10]||(n[10]=o("p",null,"无边框风格。",-1)),t(r,{title:"无边框",source:s(oe)},{default:c(()=>[t(le)]),_:1},8,["source"]),n[11]||(n[11]=o("h3",{id:"-5",tabindex:"-1"},"可折叠触发区域",-1)),n[12]||(n[12]=o("p",null,[S("通过 "),o("code",null,"collapsible"),S(" 属性，可以设置面板的可折叠触发区域。")],-1)),t(r,{title:"可折叠触发区域",source:s(ie)},{default:c(()=>[t(re)]),_:1},8,["source"]),n[13]||(n[13]=o("h3",{id:"-6",tabindex:"-1"},"自定义展开图标",-1)),n[14]||(n[14]=o("p",null,[S("通过 "),o("code",null,"expandIcon"),S(" 可以自定义展开图标。")],-1)),t(r,{title:"自定义展开图标",source:s(pe)},{default:c(()=>[t(ce)]),_:1},8,["source"]),n[15]||(n[15]=o("h3",{id:"-7",tabindex:"-1"},"额外内容",-1)),n[16]||(n[16]=o("p",null,"可以在面板右上角添加额外内容。",-1)),t(r,{title:"额外内容",source:s(fe)},{default:c(()=>[t(ue)]),_:1},8,["source"]),n[17]||(n[17]=o("h3",{id:"-8",tabindex:"-1"},"不同尺寸",-1)),n[18]||(n[18]=o("p",null,"提供三种尺寸：small、middle（默认）、large。",-1)),t(r,{title:"不同尺寸",source:s(ve)},{default:c(()=>[t(ye)]),_:1},8,["source"]),n[19]||(n[19]=q('<h2 id="api" tabindex="-1">API</h2><h3 id="collapse-props" tabindex="-1">Collapse Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey (v-model)</td><td>当前激活 tab 面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>accordion</td><td>手风琴模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bordered</td><td>带边框风格的折叠面板</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>ghost</td><td>使折叠面板透明且无边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>设置折叠面板大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>expandIconPosition</td><td>设置图标位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;start&#39;</code></td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td><code>&#39;header&#39;</code></td></tr><tr><td>expandIcon</td><td>自定义展开图标</td><td><code>(props: { isActive?: boolean, panelKey?: string }) =&gt; VNode</code></td><td>-</td></tr><tr><td>destroyInactivePanel</td><td>销毁折叠隐藏的面板</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>items</td><td>面板数据</td><td><code>CollapseItem[]</code></td><td>-</td></tr></tbody></table><h3 id="collapse-events" tabindex="-1">Collapse Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板的回调</td><td><code>(keys: string[]) =&gt; void</code></td></tr><tr><td>update:activeKey</td><td>切换面板的回调</td><td><code>(keys: string[]) =&gt; void</code></td></tr></tbody></table><h3 id="collapseitem" tabindex="-1">CollapseItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>面板头内容</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>面板内容</td><td><code>any</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>style</td><td>自定义面板样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="collapsepanel-props" tabindex="-1">CollapsePanel Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>header</td><td>面板头内容</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',9))])}}};export{ke as default};
