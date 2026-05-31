import{b as L,P as U,a as F,A as H}from"./icons-HvM7O8Mm.js";import{m as v,L as Q,B as _,O as z,v as W,l as a,d as q,F as J,r as X,y as k,g as I,I as u,n as S,i as O,f as s,Q as Y,M as Z,E as tt,j as M,P as x}from"./index-tBZazAzX.js";import{c as w}from"./cls-S9IiI6wd.js";import{I as A}from"./Icon-XkwbxCpM.js";const p=v({name:"Tabs",props:{activeKey:String,defaultActiveKey:String,type:{type:String,default:"line"},size:String,tabPosition:{type:String,default:"top"},centered:Boolean,items:Array,animated:{type:[Boolean,Object],default:!0},tabBarExtraContent:[Object,Function],tabBarGutter:Number,tabBarStyle:Object,hideAdd:Boolean,addIcon:Object,removeIcon:Object,destroyInactiveTabPane:Boolean},emits:["update:activeKey","change","tabClick","edit"],setup(t,{slots:d,emit:i}){var N,D;const n=Q("tabs"),e=_(t.defaultActiveKey??((D=(N=t.items)==null?void 0:N[0])==null?void 0:D.key)??""),r=_(null),m=_(null);z(()=>t.activeKey,l=>{l!==void 0&&(e.value=l)});const f=q(()=>t.activeKey!==void 0?t.activeKey:e.value),P=q(()=>typeof t.animated=="boolean"?{inkBar:t.animated,tabPane:t.animated}:{inkBar:!0,tabPane:!1,...t.animated}),g=()=>{if(!r.value||!m.value||t.type!=="line")return;const l=r.value.querySelector(`.${n}-tab-active`);if(!l)return;t.tabPosition==="left"||t.tabPosition==="right"?(m.value.style.top=`${l.offsetTop}px`,m.value.style.height=`${l.offsetHeight}px`,m.value.style.width="2px",m.value.style.left=t.tabPosition==="left"?"auto":"0",m.value.style.right=t.tabPosition==="left"?"0":"auto"):(m.value.style.left=`${l.offsetLeft}px`,m.value.style.width=`${l.offsetWidth}px`,m.value.style.height="2px",m.value.style.top="auto",m.value.style.bottom="0")};z(f,()=>{X(g)}),W(()=>{g()});const V=(l,b)=>{e.value=l,i("update:activeKey",l),i("change",l),i("tabClick",l,b)},R=l=>{i("edit",l,"add")},j=(l,b)=>{b.stopPropagation(),i("edit",l,"remove")},G=(l,b,$)=>{var K,o,y;const T=t.items??[];let c=$;if(b.key==="ArrowLeft"||b.key==="ArrowUp")b.preventDefault(),c=$-1,c<0&&(c=T.length-1);else if(b.key==="ArrowRight"||b.key==="ArrowDown")b.preventDefault(),c=$+1,c>=T.length&&(c=0);else if(b.key==="Enter"||b.key===" "){b.preventDefault(),T[$].disabled||V(l,b);return}else return;let B=0;for(;(K=T[c])!=null&&K.disabled&&B<T.length;)c=b.key==="ArrowLeft"||b.key==="ArrowUp"?c-1:c+1,c<0&&(c=T.length-1),c>=T.length&&(c=0),B++;if(!((o=T[c])!=null&&o.disabled)){const h=(y=r.value)==null?void 0:y.querySelectorAll(`.${n}-tab`)[c];h==null||h.focus()}};return()=>{const l=t.items??[],b=t.type==="editable-card",$=t.size?`${n}-${t.size}`:"",T=t.tabPosition!=="top"?`${n}-${t.tabPosition}`:"",c=t.tabPosition==="left"||t.tabPosition==="right",B=t.tabBarGutter!==void 0?c?{marginBottom:`${t.tabBarGutter}px`}:{marginRight:`${t.tabBarGutter}px`}:{},K=()=>{if(!t.tabBarExtraContent)return null;if(typeof t.tabBarExtraContent=="object"&&"left"in t.tabBarExtraContent){const o=t.tabBarExtraContent;return a(J,null,[o.left&&a("div",{class:`${n}-extra-content-left`},[o.left]),o.right&&a("div",{class:`${n}-extra-content-right`},[o.right])])}return a("div",{class:`${n}-extra-content`},[t.tabBarExtraContent])};return a("div",{class:w(n,`${n}-${t.type}`,$,T,{[`${n}-centered`]:t.centered})},[a("div",{class:`${n}-nav`,style:t.tabBarStyle},[K(),a("div",{class:`${n}-nav-wrap`},[a("div",{ref:r,class:`${n}-nav-list`,role:"tablist","aria-orientation":c?"vertical":"horizontal"},[l.map((o,y)=>{const h=o.key===f.value,E=b&&o.closable!==!1;return a("div",{key:o.key,id:`tab-${o.key}`,class:w(`${n}-tab`,{[`${n}-tab-active`]:h,[`${n}-tab-disabled`]:o.disabled}),style:y<l.length-1?B:void 0,role:"tab","aria-selected":h,"aria-controls":`tabpanel-${o.key}`,"aria-disabled":o.disabled||void 0,tabindex:o.disabled?-1:h?0:-1,onClick:C=>!o.disabled&&V(o.key,C),onKeydown:C=>G(o.key,C,y)},[a("div",{class:`${n}-tab-btn`},[o.icon&&a("span",{class:`${n}-tab-icon`},[o.icon]),o.label,E&&a("button",{type:"button",class:`${n}-tab-remove`,"aria-label":"remove",tabindex:-1,onClick:C=>j(o.key,C)},[o.closeIcon||t.removeIcon||a(A,{component:L},null)])])])}),b&&!t.hideAdd&&a("button",{type:"button",class:`${n}-nav-add`,"aria-label":"add",onClick:R},[t.addIcon||a(A,{component:U},null)])]),t.type==="line"&&a("div",{ref:m,class:w(`${n}-ink-bar`,{[`${n}-ink-bar-animated`]:P.value.inkBar})},null)])]),a("div",{class:`${n}-content-holder`},[a("div",{class:w(`${n}-content`,{[`${n}-content-animated`]:P.value.tabPane})},[l.map(o=>{var C;const y=o.key===f.value,h=y||o.forceRender||!t.destroyInactiveTabPane,E=t.destroyInactiveTabPane&&!y&&!o.forceRender;return a("div",{key:o.key,id:`tabpanel-${o.key}`,class:w(`${n}-tabpane`,{[`${n}-tabpane-active`]:y,[`${n}-tabpane-hidden`]:!y}),role:"tabpanel","aria-labelledby":`tab-${o.key}`,tabindex:y?0:-1,hidden:!y||void 0},[h&&!E&&(o.children??((C=d[o.key])==null?void 0:C.call(d)))])})])])])}}}),et=v({__name:"TabsBasic",setup(t){const d=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],i=n=>{console.log("Active tab:",n)};return(n,e)=>(k(),I(u(p),{items:d,onChange:i}))}}),nt=`<template>
  <Tabs :items="items" @change="onChange" />
</template>

<script setup lang="ts">
import { Tabs } from '../../../components'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
]

const onChange = (key: string) => {
  console.log('Active tab:', key)
}
<\/script>
`,at=v({__name:"TabsCard",setup(t){const d=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}];return(i,n)=>(k(),I(u(p),{type:"card",items:d}))}}),ot=`<template>
  <Tabs type="card" :items="items" />
</template>

<script setup lang="ts">
import { Tabs } from '../../../components'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
]
<\/script>
`,dt=v({__name:"TabsCentered",setup(t){const d=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(i,n)=>(k(),I(u(p),{items:d,centered:""}))}}),lt=`<template>
  <Tabs :items="items" centered />
</template>

<script setup lang="ts">
import { Tabs } from '../../../components'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
<\/script>
`,it=v({__name:"TabsEditable",setup(t){const d=_("1"),i=_([{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3",closable:!1}]);let n=0;const e=(r,m)=>{if(m==="add"){const f=`newTab${n++}`;i.value.push({key:f,label:"New Tab",children:"Content of new Tab"}),d.value=f}else{const f=i.value.findIndex(g=>g.key===r),P=i.value.filter(g=>g.key!==r);if(P.length&&r===d.value){const g=P[f===P.length?f-1:f].key;d.value=g}i.value=P}};return(r,m)=>(k(),I(u(p),{activeKey:d.value,"onUpdate:activeKey":m[0]||(m[0]=f=>d.value=f),type:"editable-card",items:i.value,onEdit:e},null,8,["activeKey","items"]))}}),st=`<template>
  <Tabs
    v-model:activeKey="activeKey"
    type="editable-card"
    :items="items"
    @edit="onEdit"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs } from '../../../components'

const activeKey = ref('1')
const items = ref([
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3', closable: false },
])

let newTabIndex = 0

const onEdit = (targetKey: string | MouseEvent, action: 'add' | 'remove') => {
  if (action === 'add') {
    const newKey = \`newTab\${newTabIndex++}\`
    items.value.push({
      key: newKey,
      label: 'New Tab',
      children: 'Content of new Tab',
    })
    activeKey.value = newKey
  } else {
    const targetIndex = items.value.findIndex((item) => item.key === targetKey)
    const newItems = items.value.filter((item) => item.key !== targetKey)

    if (newItems.length && targetKey === activeKey.value) {
      const newActiveKey =
        newItems[targetIndex === newItems.length ? targetIndex - 1 : targetIndex].key
      activeKey.value = newActiveKey
    }

    items.value = newItems
  }
}
<\/script>
`,rt=v({__name:"TabsExtra",setup(t){const d=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}],i=S("button",{style:"margin-left: 16px"},"Extra Action");return(n,e)=>(k(),I(u(p),{items:d,tabBarExtraContent:u(i)},null,8,["tabBarExtraContent"]))}}),bt=`<template>
  <Tabs :items="items" :tabBarExtraContent="extra" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs } from '../../../components'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]

const extra = h('button', { style: 'margin-left: 16px' }, 'Extra Action')
<\/script>
`,ct=v({__name:"TabsIcon",setup(t){const d=[{key:"1",label:"Tab 1",icon:S(A,{component:F}),children:"Content of Tab 1"},{key:"2",label:"Tab 2",icon:S(A,{component:H}),children:"Content of Tab 2"}];return(i,n)=>(k(),I(u(p),{items:d}))}}),ut=`<template>
  <Tabs :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs, Icon } from '../../../components'
import { AppleOutlined, AndroidOutlined } from '../../../components/icon/icons'

const items = [
  {
    key: '1',
    label: 'Tab 1',
    icon: h(Icon, { component: AppleOutlined }),
    children: 'Content of Tab 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    icon: h(Icon, { component: AndroidOutlined }),
    children: 'Content of Tab 2',
  },
]
<\/script>
`,mt={style:{"margin-bottom":"16px"}},ft=v({__name:"TabsPosition",setup(t){const d=_("top"),i=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(n,e)=>(k(),O("div",null,[s("div",mt,[e[2]||(e[2]=s("span",null,"Tab Position: ",-1)),Y(s("select",{"onUpdate:modelValue":e[0]||(e[0]=r=>d.value=r)},[...e[1]||(e[1]=[s("option",{value:"top"},"top",-1),s("option",{value:"bottom"},"bottom",-1),s("option",{value:"left"},"left",-1),s("option",{value:"right"},"right",-1)])],512),[[Z,d.value]])]),a(u(p),{items:i,tabPosition:d.value},null,8,["tabPosition"])]))}}),yt=`<template>
  <div>
    <div style="margin-bottom: 16px">
      <span>Tab Position: </span>
      <select v-model="tabPosition">
        <option value="top">top</option>
        <option value="bottom">bottom</option>
        <option value="left">left</option>
        <option value="right">right</option>
      </select>
    </div>
    <Tabs :items="items" :tabPosition="tabPosition" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs } from '../../../components'
import type { TabsPosition } from '../../../components/tabs/types'

const tabPosition = ref<TabsPosition>('top')

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
<\/script>
`,Tt=v({__name:"TabsSize",setup(t){const d=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(i,n)=>(k(),O("div",null,[a(u(p),{items:d,size:"small",style:{"margin-bottom":"16px"}}),a(u(p),{items:d,style:{"margin-bottom":"16px"}}),a(u(p),{items:d,size:"large"})]))}}),pt=`<template>
  <div>
    <Tabs :items="items" size="small" style="margin-bottom: 16px" />
    <Tabs :items="items" style="margin-bottom: 16px" />
    <Tabs :items="items" size="large" />
  </div>
</template>

<script setup lang="ts">
import { Tabs } from '../../../components'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
<\/script>
`,ht={class:"markdown-body"},xt={__name:"tabs",setup(t,{expose:d}){return d({frontmatter:{}}),(n,e)=>{const r=tt("DemoBlock");return k(),O("div",ht,[e[0]||(e[0]=M('<h1 id="tabs-" tabindex="-1">Tabs 标签页</h1><p>选项卡切换组件。</p><h2 id="" tabindex="-1">何时使用</h2><p>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</p><p>Ant Design 依次提供了三级选项卡，分别用于不同的场景。</p><ul><li>卡片式的页签，提供可关闭的样式，常用于容器顶部。</li><li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基本</h3><p>默认选中第一项。</p>',9)),a(r,{title:"基本",source:u(nt)},{default:x(()=>[a(et)]),_:1},8,["source"]),e[1]||(e[1]=s("h3",{id:"-3",tabindex:"-1"},"图标",-1)),e[2]||(e[2]=s("p",null,"有图标的标签。",-1)),a(r,{title:"图标",source:u(ut)},{default:x(()=>[a(ct)]),_:1},8,["source"]),e[3]||(e[3]=s("h3",{id:"-4",tabindex:"-1"},"居中",-1)),e[4]||(e[4]=s("p",null,"标签居中展示。",-1)),a(r,{title:"居中",source:u(lt)},{default:x(()=>[a(dt)]),_:1},8,["source"]),e[5]||(e[5]=s("h3",{id:"-5",tabindex:"-1"},"大小",-1)),e[6]||(e[6]=s("p",null,"大中小三种大小的标签页，提供了 large 和 small 两个尺寸。",-1)),a(r,{title:"大小",source:u(pt)},{default:x(()=>[a(Tt)]),_:1},8,["source"]),e[7]||(e[7]=s("h3",{id:"-6",tabindex:"-1"},"位置",-1)),e[8]||(e[8]=s("p",null,"有四个位置，tabPosition=top|bottom|left|right。",-1)),a(r,{title:"位置",source:u(yt)},{default:x(()=>[a(ft)]),_:1},8,["source"]),e[9]||(e[9]=s("h3",{id:"-7",tabindex:"-1"},"卡片式页签",-1)),e[10]||(e[10]=s("p",null,"另一种样式的页签，不提供对应的垂直样式。",-1)),a(r,{title:"卡片式页签",source:u(ot)},{default:x(()=>[a(at)]),_:1},8,["source"]),e[11]||(e[11]=s("h3",{id:"-8",tabindex:"-1"},"新增和关闭页签",-1)),e[12]||(e[12]=s("p",null,"只有卡片样式的页签支持新增和关闭选项。使用 closable={false} 禁止关闭。",-1)),a(r,{title:"新增和关闭页签",source:u(st)},{default:x(()=>[a(it)]),_:1},8,["source"]),e[13]||(e[13]=s("h3",{id:"-9",tabindex:"-1"},"附加内容",-1)),e[14]||(e[14]=s("p",null,"可以在页签右边添加附加操作。",-1)),a(r,{title:"附加内容",source:u(bt)},{default:x(()=>[a(rt)]),_:1},8,["source"]),e[15]||(e[15]=M('<h2 id="api" tabindex="-1">API</h2><h3 id="tabs" tabindex="-1">Tabs</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey(v-model)</td><td>当前激活 tab 面板的 key</td><td>string</td><td>-</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key，如果没有设置 activeKey</td><td>string</td><td>第一个面板</td></tr><tr><td>type</td><td>页签的基本样式，可选 <code>line</code>、<code>card</code>、<code>editable-card</code> 类型</td><td>string</td><td><code>line</code></td></tr><tr><td>size</td><td>大小，提供 <code>large</code> 和 <code>small</code> 两种大小</td><td>string</td><td>-</td></tr><tr><td>tabPosition</td><td>页签位置，可选值有 <code>top</code> <code>right</code> <code>bottom</code> <code>left</code></td><td>string</td><td><code>top</code></td></tr><tr><td>centered</td><td>标签居中展示</td><td>boolean</td><td>false</td></tr><tr><td>items</td><td>配置选项卡内容</td><td>TabItem[]</td><td>[]</td></tr><tr><td>animated</td><td>是否使用动画切换 Tabs，可以是布尔值或对象 <code>{ inkBar: boolean, tabPane: boolean }</code></td><td>boolean | AnimatedConfig</td><td>true</td></tr><tr><td>tabBarExtraContent</td><td>tab bar 上额外的元素</td><td>VNode | { left?: VNode, right?: VNode }</td><td>-</td></tr><tr><td>tabBarGutter</td><td>tabs 之间的间隙</td><td>number</td><td>-</td></tr><tr><td>tabBarStyle</td><td>tab bar 的样式对象</td><td>object</td><td>-</td></tr><tr><td>hideAdd</td><td>是否隐藏加号图标，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>boolean</td><td>false</td></tr><tr><td>addIcon</td><td>自定义添加按钮图标</td><td>VNode</td><td>-</td></tr><tr><td>removeIcon</td><td>自定义删除按钮图标</td><td>VNode</td><td>-</td></tr><tr><td>destroyInactiveTabPane</td><td>被隐藏时是否销毁 DOM 结构</td><td>boolean</td><td>false</td></tr></tbody></table><h3 id="tabs--1" tabindex="-1">Tabs 事件</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板的回调</td><td>(activeKey: string) =&gt; void</td></tr><tr><td>tabClick</td><td>tab 被点击的回调</td><td>(key: string, event: MouseEvent) =&gt; void</td></tr><tr><td>edit</td><td>新增和删除页签的回调，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>(targetKey: string | MouseEvent, action: ‘add’ | ‘remove’) =&gt; void</td></tr></tbody></table><h3 id="tabitem" tabindex="-1">TabItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td>string</td><td>-</td></tr><tr><td>label</td><td>选项卡头显示文字</td><td>string | VNode</td><td>-</td></tr><tr><td>children</td><td>选项卡内容</td><td>any</td><td>-</td></tr><tr><td>disabled</td><td>禁用某一项</td><td>boolean</td><td>false</td></tr><tr><td>closable</td><td>是否显示关闭按钮，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>boolean</td><td>true</td></tr><tr><td>icon</td><td>选项卡头显示图标</td><td>VNode</td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>VNode</td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td>boolean</td><td>false</td></tr><tr><td>destroyInactiveTabPane</td><td>被隐藏时是否销毁 DOM 结构</td><td>boolean</td><td>false</td></tr></tbody></table>',7))])}}};export{xt as default};
