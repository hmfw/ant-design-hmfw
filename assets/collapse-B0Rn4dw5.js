import{k as f,I as K,j as d,i as B,z as C,L as S,c as $,w as b,e as x,M as i,G as c,d as l,B as I,g as z,h as V}from"./index-DvxRruME.js";import{c as m}from"./cls-S9IiI6wd.js";const k=f({name:"Collapse",props:{activeKey:[String,Array],defaultActiveKey:[String,Array],accordion:Boolean,bordered:{type:Boolean,default:!0},ghost:Boolean,size:{type:String,default:"middle"},expandIconPosition:{type:String,default:"start"},items:Array,destroyInactivePanel:Boolean},emits:["update:activeKey","change"],setup(a,{slots:n,emit:r}){const e=K("collapse"),t=s=>s?Array.isArray(s)?s:[s]:[],y=C(t(a.defaultActiveKey??a.activeKey)),w=$(()=>a.activeKey!==void 0),g=$(()=>w.value?t(a.activeKey):y.value);S(()=>a.activeKey,s=>{s!==void 0&&(y.value=t(s))});const A=s=>{const v=g.value;let o;a.accordion?o=v.includes(s)?[]:[s]:o=v.includes(s)?v.filter(h=>h!==s):[...v,s],y.value=o;const p=a.accordion?o[0]??"":o;r("update:activeKey",p),r("change",p)};return()=>{var v;const s=a.items??[];return d("div",{class:m(e,{[`${e}-borderless`]:!a.bordered,[`${e}-ghost`]:a.ghost,[`${e}-${a.size}`]:a.size!=="middle",[`${e}-icon-position-end`]:a.expandIconPosition==="end"})},[s.map(o=>{var P;const p=g.value.includes(o.key),h=p||!a.destroyInactivePanel;return d("div",{key:o.key,class:m(`${e}-item`,{[`${e}-item-active`]:p,[`${e}-item-disabled`]:o.disabled})},[d("div",{class:`${e}-header`,onClick:()=>!o.disabled&&A(o.key),role:"button","aria-expanded":p},[o.showArrow!==!1&&d("span",{class:m(`${e}-expand-icon`,{[`${e}-expand-icon-active`]:p})},[B("▶")]),d("span",{class:`${e}-header-text`},[o.label]),o.extra&&d("span",{class:`${e}-extra`},[o.extra])]),h&&d("div",{class:m(`${e}-content`,{[`${e}-content-active`]:p,[`${e}-content-inactive`]:!p}),role:"region"},[d("div",{class:`${e}-content-box`},[o.children??((P=n[o.key])==null?void 0:P.call(n))])])])}),(v=n.default)==null?void 0:v.call(n)])}}}),u=f({name:"CollapsePanel",props:{header:String,disabled:Boolean,showArrow:{type:Boolean,default:!0},extra:String,forceRender:Boolean},setup(a,{slots:n}){const r=K("collapse");return()=>{var e;return d("div",{class:`${r}-item`},[d("div",{class:`${r}-header`},[a.showArrow&&d("span",{class:`${r}-expand-icon`},[B("▶")]),d("span",{class:`${r}-header-text`},[a.header]),a.extra&&d("span",{class:`${r}-extra`},[a.extra])]),d("div",{class:`${r}-content ${r}-content-active`},[d("div",{class:`${r}-content-box`},[(e=n.default)==null?void 0:e.call(n)])])])}}}),N=f({__name:"CollapseAccordion",setup(a){const n=C(["1"]);return(r,e)=>(b(),x(c(k),{"active-key":n.value,"onUpdate:activeKey":e[0]||(e[0]=t=>n.value=t),accordion:""},{default:i(()=>[d(c(u),{key:"1",header:"面板标题 1"},{default:i(()=>[...e[1]||(e[1]=[l("p",null,"面板内容 1",-1)])]),_:1}),d(c(u),{key:"2",header:"面板标题 2"},{default:i(()=>[...e[2]||(e[2]=[l("p",null,"面板内容 2",-1)])]),_:1}),d(c(u),{key:"3",header:"面板标题 3"},{default:i(()=>[...e[3]||(e[3]=[l("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),_=`<template>
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
`,U=f({__name:"CollapseBasic",setup(a){const n=C(["1"]);return(r,e)=>(b(),x(c(k),{"active-key":n.value,"onUpdate:activeKey":e[0]||(e[0]=t=>n.value=t)},{default:i(()=>[d(c(u),{key:"1",header:"面板标题 1"},{default:i(()=>[...e[1]||(e[1]=[l("p",null,"面板内容 1",-1)])]),_:1}),d(c(u),{key:"2",header:"面板标题 2"},{default:i(()=>[...e[2]||(e[2]=[l("p",null,"面板内容 2",-1)])]),_:1}),d(c(u),{key:"3",header:"面板标题 3"},{default:i(()=>[...e[3]||(e[3]=[l("p",null,"面板内容 3",-1)])]),_:1})]),_:1},8,["active-key"]))}}),D=`<template>
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
`,E=f({__name:"CollapseBorderless",setup(a){const n=C(["1"]);return(r,e)=>(b(),x(c(k),{"active-key":n.value,"onUpdate:activeKey":e[0]||(e[0]=t=>n.value=t),bordered:!1},{default:i(()=>[d(c(u),{key:"1",header:"面板标题 1"},{default:i(()=>[...e[1]||(e[1]=[l("p",null,"面板内容 1",-1)])]),_:1}),d(c(u),{key:"2",header:"面板标题 2"},{default:i(()=>[...e[2]||(e[2]=[l("p",null,"面板内容 2",-1)])]),_:1})]),_:1},8,["active-key"]))}}),R=`<template>
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
`,j={class:"markdown-body"},M={__name:"collapse",setup(a,{expose:n}){return n({frontmatter:{}}),(e,t)=>{const y=I("DemoBlock");return b(),z("div",j,[t[0]||(t[0]=l("h1",{id:"collapse-",tabindex:"-1"},"Collapse 折叠面板",-1)),t[1]||(t[1]=l("p",null,"可以折叠/展开的内容区域。",-1)),t[2]||(t[2]=l("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=l("ul",null,[l("li",null,"对复杂区域进行分组和隐藏，保持页面的整洁"),l("li",null,"手风琴是一种特殊的折叠面板，只允许单个内容区域展开")],-1)),t[4]||(t[4]=l("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=l("h3",{id:"-2",tabindex:"-1"},"基本用法",-1)),t[6]||(t[6]=l("p",null,"可以同时展开多个面板。",-1)),d(y,{title:"基本用法",source:c(D)},{default:i(()=>[d(U)]),_:1},8,["source"]),t[7]||(t[7]=l("h3",{id:"-3",tabindex:"-1"},"手风琴模式",-1)),t[8]||(t[8]=l("p",null,"手风琴模式，每次只能展开一个面板。",-1)),d(y,{title:"手风琴模式",source:c(_)},{default:i(()=>[d(N)]),_:1},8,["source"]),t[9]||(t[9]=l("h3",{id:"-4",tabindex:"-1"},"无边框",-1)),t[10]||(t[10]=l("p",null,"无边框风格。",-1)),d(y,{title:"无边框",source:c(R)},{default:i(()=>[d(E)]),_:1},8,["source"]),t[11]||(t[11]=V('<h2 id="api" tabindex="-1">API</h2><h3 id="collapse-props" tabindex="-1">Collapse Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey (v-model)</td><td>当前激活 tab 面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key</td><td><code>string[] | string</code></td><td>-</td></tr><tr><td>accordion</td><td>手风琴模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bordered</td><td>带边框风格的折叠面板</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>ghost</td><td>使折叠面板透明且无边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>设置折叠面板大小</td><td><code>&#39;default&#39; | &#39;small&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>expandIconPosition</td><td>设置图标位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;start&#39;</code></td></tr></tbody></table><h3 id="collapse-events" tabindex="-1">Collapse Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:activeKey</td><td>切换面板的回调</td><td><code>(key: string | string[]) =&gt; void</code></td></tr></tbody></table><h3 id="collapsepanel-props" tabindex="-1">CollapsePanel Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td><code>string</code></td><td>-</td></tr><tr><td>header</td><td>面板头内容</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用后的面板展开与否将无法通过用户交互改变</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showArrow</td><td>是否展示箭头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>extra</td><td>自定义渲染每个面板右上角的内容</td><td><code>string | slot</code></td><td>-</td></tr></tbody></table>',7))])}}};export{M as default};
