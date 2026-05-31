import{R as E,c as H}from"./icons-ef0p77fA.js";import{m as C,o as M,L as N,l as n,d as v,B as z,O as F,z as X,y as k,g as w,P as c,I as o,f as a,i as O,n as Y,E as q,k as S,j as G}from"./index-BZUMvgWw.js";import{I as B}from"./Icon-BOmCTdv5.js";import{c as K}from"./cls-S9IiI6wd.js";const V=Symbol("collapse-context"),J=C({name:"Collapse",props:{activeKey:[String,Array],defaultActiveKey:[String,Array],accordion:Boolean,bordered:{type:Boolean,default:!0},ghost:Boolean,size:{type:String,default:"middle"},expandIconPosition:{type:String,default:"start"},items:Array,destroyInactivePanel:Boolean,collapsible:String,expandIcon:Function},emits:["update:activeKey","change"],setup(d,{slots:l,emit:u}){const e=N("collapse"),t=r=>r?Array.isArray(r)?r:[r]:[],s=z(t(d.defaultActiveKey??d.activeKey)),m=v(()=>d.activeKey!==void 0),b=v(()=>m.value?t(d.activeKey):s.value);F(()=>d.activeKey,r=>{r!==void 0&&(s.value=t(r))});const g=r=>{const f=b.value;let x;d.accordion?x=f.includes(r)?[]:[r]:x=f.includes(r)?f.filter(p=>p!==r):[...f,r],s.value=x,u("update:activeKey",x),u("change",x)};X(V,{activeKeys:b,toggle:g,prefixCls:e,expandIconPosition:v(()=>d.expandIconPosition),collapsible:v(()=>d.collapsible),destroyInactivePanel:v(()=>d.destroyInactivePanel),expandIcon:v(()=>d.expandIcon)});const _=(r,f)=>d.expandIcon?d.expandIcon({isActive:r,panelKey:f}):n(B,{component:E,style:{transform:r?"rotate(90deg)":"rotate(0deg)"}},null);return()=>{var p;const r=d.items??[],f=(p=l.default)==null?void 0:p.call(l),x=(i,j,L,$={})=>{const I=b.value.includes(i),T=I||!d.destroyInactivePanel||$.forceRender,P=$.collapsible??d.collapsible,A=$.disabled||P==="disabled",R=!A&&P!=="icon",D=!A&&(P==="icon"||P==="header"||P===void 0);return n("div",{key:i,class:K(`${e}-item`,{[`${e}-item-active`]:I,[`${e}-item-disabled`]:A}),style:$.style},[n("div",{class:`${e}-header`,onClick:()=>R&&g(i),role:"button","aria-expanded":I,"aria-disabled":A,style:{cursor:R?"pointer":"default"}},[$.showArrow!==!1&&n("span",{class:K(`${e}-expand-icon`,{[`${e}-expand-icon-active`]:I}),onClick:U=>{P==="icon"&&D&&(U.stopPropagation(),g(i))},style:{cursor:D&&P==="icon"?"pointer":"inherit"}},[_(I,i)]),n("span",{class:`${e}-header-text`},[j]),$.extra&&n("span",{class:`${e}-extra`},[$.extra])]),T&&n("div",{class:K(`${e}-content`,{[`${e}-content-active`]:I,[`${e}-content-inactive`]:!I}),role:"region"},[n("div",{class:`${e}-content-box`},[L])])])};return n("div",{class:K(e,{[`${e}-borderless`]:!d.bordered,[`${e}-ghost`]:d.ghost,[`${e}-${d.size}`]:d.size!=="middle",[`${e}-icon-position-end`]:d.expandIconPosition==="end"})},[r.map(i=>x(i.key,i.label,i.children,{disabled:i.disabled,showArrow:i.showArrow,extra:i.extra,collapsible:i.collapsible,style:i.style,forceRender:i.forceRender})),f])}}}),h=C({name:"CollapsePanel",props:{header:String,disabled:Boolean,showArrow:{type:Boolean,default:!0},extra:[String,Object],forceRender:Boolean,collapsible:String,panelKey:String},setup(d,{slots:l,attrs:u}){const e=M(V,null);if(!e){const p=N("collapse");return()=>{var i;return n("div",{class:`${p}-item`},[n("div",{class:`${p}-header`},[d.showArrow&&n("span",{class:`${p}-expand-icon`},[n(B,{component:E},null)]),n("span",{class:`${p}-header-text`},[d.header]),d.extra&&n("span",{class:`${p}-extra`},[d.extra])]),n("div",{class:`${p}-content ${p}-content-active`},[n("div",{class:`${p}-content-box`},[(i=l.default)==null?void 0:i.call(l)])])])}}const t=v(()=>d.panelKey??u.key??""),s=v(()=>e.activeKeys.value.includes(t.value)),m=e.prefixCls,b=v(()=>d.collapsible??e.collapsible.value),g=v(()=>d.disabled||b.value==="disabled"),_=v(()=>!g.value&&b.value!=="icon"),r=v(()=>!g.value&&b.value!=="disabled"),f=v(()=>s.value||!e.destroyInactivePanel.value||d.forceRender),x=()=>e.expandIcon.value?e.expandIcon.value({isActive:s.value,panelKey:t.value}):n(B,{component:E,style:{transform:s.value?"rotate(90deg)":"rotate(0deg)"}},null);return()=>{var p;return n("div",{class:K(`${m}-item`,{[`${m}-item-active`]:s.value,[`${m}-item-disabled`]:g.value})},[n("div",{class:`${m}-header`,onClick:()=>_.value&&e.toggle(t.value),role:"button","aria-expanded":s.value,"aria-disabled":g.value,style:{cursor:_.value?"pointer":"default"}},[d.showArrow&&n("span",{class:K(`${m}-expand-icon`,{[`${m}-expand-icon-active`]:s.value}),onClick:i=>{b.value==="icon"&&r.value&&(i.stopPropagation(),e.toggle(t.value))},style:{cursor:r.value&&b.value==="icon"?"pointer":"inherit"}},[x()]),n("span",{class:`${m}-header-text`},[d.header]),d.extra&&n("span",{class:`${m}-extra`},[d.extra])]),f.value&&n("div",{class:K(`${m}-content`,{[`${m}-content-active`]:s.value,[`${m}-content-inactive`]:!s.value}),role:"region"},[n("div",{class:`${m}-content-box`},[(p=l.default)==null?void 0:p.call(l)])])])}}}),y=Object.assign(J,{Panel:h}),Q=C({__name:"CollapseAccordion",setup(d){const l=z(["1"]);return(u,e)=>(k(),w(o(y),{"active-key":l.value,"onUpdate:activeKey":e[0]||(e[0]=t=>l.value=t),accordion:""},{default:c(()=>[n(o(h),{key:"1",header:"面板标题 1"},{default:c(()=>[...e[1]||(e[1]=[a("p",null,"面板内容 1",-1)])]),_:1}),n(o(h),{key:"2",header:"面板标题 2"},{default:c(()=>[...e[2]||(e[2]=[a("p",null,"面板内容 2",-1)])]),_:1}),n(o(h),{key:"3",header:"面板标题 3"},{default:c(()=>[...e[3]||(e[3]=[a("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),W=`<template>
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
`,Z=C({__name:"CollapseBasic",setup(d){const l=z(["1"]);return(u,e)=>(k(),w(o(y),{"active-key":l.value,"onUpdate:activeKey":e[0]||(e[0]=t=>l.value=t)},{default:c(()=>[n(o(h),{key:"1",header:"面板标题 1"},{default:c(()=>[...e[1]||(e[1]=[a("p",null,"面板内容 1",-1)])]),_:1}),n(o(h),{key:"2",header:"面板标题 2"},{default:c(()=>[...e[2]||(e[2]=[a("p",null,"面板内容 2",-1)])]),_:1}),n(o(h),{key:"3",header:"面板标题 3"},{default:c(()=>[...e[3]||(e[3]=[a("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),ee=`<template>
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
`,te=C({__name:"CollapseBorderless",setup(d){const l=z(["1"]);return(u,e)=>(k(),w(o(y),{"active-key":l.value,"onUpdate:activeKey":e[0]||(e[0]=t=>l.value=t),bordered:!1},{default:c(()=>[n(o(h),{key:"1",header:"面板标题 1"},{default:c(()=>[...e[1]||(e[1]=[a("p",null,"面板内容 1",-1)])]),_:1}),n(o(h),{key:"2",header:"面板标题 2"},{default:c(()=>[...e[2]||(e[2]=[a("p",null,"面板内容 2",-1)])]),_:1})]),_:1},8,["active-key"]))}}),ne=`<template>
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
`,de={style:{display:"flex","flex-direction":"column",gap:"16px"}},le="这个面板可以通过点击文本或图标来折叠",ae=C({__name:"CollapseCollapsible",setup(d){const l=[{key:"1",label:"点击文本或图标可折叠",children:le}],u=[{key:"1",label:"只能点击图标折叠",children:"这个面板只能通过点击图标来折叠"}],e=[{key:"1",label:"无法折叠",children:"这个面板无法被折叠"}];return(t,s)=>(k(),O("div",de,[n(o(y),{collapsible:"header","default-active-key":["1"],items:l}),n(o(y),{collapsible:"icon","default-active-key":["1"],items:u}),n(o(y),{collapsible:"disabled",items:e})]))}}),oe=`<template>
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
`,se=C({__name:"CollapseCustomIcon",setup(d){const l=[{key:"1",label:"自定义展开图标 1",children:"这是面板内容 1"},{key:"2",label:"自定义展开图标 2",children:"这是面板内容 2"},{key:"3",label:"自定义展开图标 3",children:"这是面板内容 3"}],u=({isActive:e})=>Y(B,{component:H,style:{transform:e?"rotate(0deg)":"rotate(-90deg)",transition:"transform 0.3s"}});return(e,t)=>(k(),w(o(y),{"default-active-key":["1"],"expand-icon":u,items:l}))}}),re=`<template>
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
`,ie=C({__name:"CollapseExtra",setup(d){const l=[{key:"1",label:"面板标题 1",children:"这是面板内容 1",extra:"额外内容"},{key:"2",label:"面板标题 2",children:"这是面板内容 2",extra:"更多"},{key:"3",label:"面板标题 3",children:"这是面板内容 3",showArrow:!1}];return(u,e)=>(k(),w(o(y),{"default-active-key":["1"],items:l}))}}),ce=`<template>
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
`,pe={style:{display:"flex","flex-direction":"column",gap:"16px"}},ue=C({__name:"CollapseSize",setup(d){const l=[{key:"1",label:"面板标题",children:"这是面板内容"}];return(u,e)=>(k(),O("div",pe,[n(o(y),{items:l,size:"small"}),n(o(y),{items:l,size:"middle"}),n(o(y),{items:l,size:"large"})]))}}),me=`<template>
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
`,ve={class:"markdown-body"},he={__name:"collapse",setup(d,{expose:l}){return l({frontmatter:{}}),(e,t)=>{const s=q("DemoBlock");return k(),O("div",ve,[t[0]||(t[0]=a("h1",{id:"collapse-",tabindex:"-1"},"Collapse 折叠面板",-1)),t[1]||(t[1]=a("p",null,"可以折叠/展开的内容区域。",-1)),t[2]||(t[2]=a("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=a("ul",null,[a("li",null,"对复杂区域进行分组和隐藏，保持页面的整洁"),a("li",null,"手风琴是一种特殊的折叠面板，只允许单个内容区域展开")],-1)),t[4]||(t[4]=a("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=a("h3",{id:"-2",tabindex:"-1"},"基本用法",-1)),t[6]||(t[6]=a("p",null,"可以同时展开多个面板。",-1)),n(s,{title:"基本用法",source:o(ee)},{default:c(()=>[n(Z)]),_:1},8,["source"]),t[7]||(t[7]=a("h3",{id:"-3",tabindex:"-1"},"手风琴模式",-1)),t[8]||(t[8]=a("p",null,"手风琴模式，每次只能展开一个面板。",-1)),n(s,{title:"手风琴模式",source:o(W)},{default:c(()=>[n(Q)]),_:1},8,["source"]),t[9]||(t[9]=a("h3",{id:"-4",tabindex:"-1"},"无边框",-1)),t[10]||(t[10]=a("p",null,"无边框风格。",-1)),n(s,{title:"无边框",source:o(ne)},{default:c(()=>[n(te)]),_:1},8,["source"]),t[11]||(t[11]=a("h3",{id:"-5",tabindex:"-1"},"可折叠触发区域",-1)),t[12]||(t[12]=a("p",null,[S("通过 "),a("code",null,"collapsible"),S(" 属性，可以设置面板的可折叠触发区域。")],-1)),n(s,{title:"可折叠触发区域",source:o(oe)},{default:c(()=>[n(ae)]),_:1},8,["source"]),t[13]||(t[13]=a("h3",{id:"-6",tabindex:"-1"},"自定义展开图标",-1)),t[14]||(t[14]=a("p",null,[S("通过 "),a("code",null,"expandIcon"),S(" 可以自定义展开图标。")],-1)),n(s,{title:"自定义展开图标",source:o(re)},{default:c(()=>[n(se)]),_:1},8,["source"]),t[15]||(t[15]=a("h3",{id:"-7",tabindex:"-1"},"额外内容",-1)),t[16]||(t[16]=a("p",null,"可以在面板右上角添加额外内容。",-1)),n(s,{title:"额外内容",source:o(ce)},{default:c(()=>[n(ie)]),_:1},8,["source"]),t[17]||(t[17]=a("h3",{id:"-8",tabindex:"-1"},"不同尺寸",-1)),t[18]||(t[18]=a("p",null,"提供三种尺寸：small、middle（默认）、large。",-1)),n(s,{title:"不同尺寸",source:o(me)},{default:c(()=>[n(ue)]),_:1},8,["source"]),t[19]||(t[19]=G('<h2 id="api" tabindex="-1">API</h2><h3 id="collapse-props" tabindex="-1">Collapse Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey (v-model)</td><td>当前激活 tab 面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>accordion</td><td>手风琴模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bordered</td><td>带边框风格的折叠面板</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>ghost</td><td>使折叠面板透明且无边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>设置折叠面板大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>expandIconPosition</td><td>设置图标位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;start&#39;</code></td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td><code>&#39;header&#39;</code></td></tr><tr><td>expandIcon</td><td>自定义展开图标</td><td><code>(props: { isActive?: boolean, panelKey?: string }) =&gt; VNode</code></td><td>-</td></tr><tr><td>destroyInactivePanel</td><td>销毁折叠隐藏的面板</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>items</td><td>面板数据</td><td><code>CollapseItem[]</code></td><td>-</td></tr></tbody></table><h3 id="collapse-events" tabindex="-1">Collapse Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板的回调</td><td><code>(keys: string[]) =&gt; void</code></td></tr><tr><td>update:activeKey</td><td>切换面板的回调</td><td><code>(keys: string[]) =&gt; void</code></td></tr></tbody></table><h3 id="collapseitem" tabindex="-1">CollapseItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>面板头内容</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>面板内容</td><td><code>any</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>style</td><td>自定义面板样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="collapsepanel-props" tabindex="-1">CollapsePanel Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>header</td><td>面板头内容</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>collapsible</td><td>设置可折叠触发区域</td><td><code>&#39;header&#39; | &#39;icon&#39; | &#39;disabled&#39;</code></td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',9))])}}};export{he as default};
