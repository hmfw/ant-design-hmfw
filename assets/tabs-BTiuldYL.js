import{o as h,O as st,E as B,P as Y,x as ot,y as lt,n as a,f as Z,r as ct,t as dt,A as y,i as P,L as c,k as z,h as o,_ as it,p as D,H as pt,l as tt,Q as T,m as V}from"./index-ON6sqzpw.js";import{c as q}from"./cls-S9IiI6wd.js";import{C as rt}from"./CloseOutlined-B2QL5xeC.js";import{P as bt}from"./PlusOutlined-BP6tHD7v.js";import{B as ut}from"./Button-BjmJBmDE.js";import{a as mt,A as kt}from"./AppleOutlined-Cq2q-eNE.js";import{S as ft}from"./Select-BEqCH42u.js";import"./LoadingOutlined-CiFLsQlT.js";import"./DownOutlined-DckNvu8B.js";import"./Trigger-DNeGWijK.js";import"./VirtualList-6PlhPgTL.js";const m=h({name:"Tabs",props:{activeKey:String,defaultActiveKey:String,type:{type:String,default:"line"},size:String,tabPosition:{type:String,default:"top"},centered:Boolean,items:Array,animated:{type:[Boolean,Object],default:!0},tabBarExtraContent:[Object,Function],tabBarGutter:Number,tabBarStyle:Object,hideAdd:Boolean,addIcon:Object,removeIcon:Object,destroyInactiveTabPane:Boolean,classNames:Object,styles:Object},emits:["update:activeKey","change","tabClick","edit"],setup(t,{slots:s,emit:i}){var j,M;const n=st("tabs"),e=B(t.defaultActiveKey??((M=(j=t.items)==null?void 0:j[0])==null?void 0:M.key)??""),d=B(null),b=B(null);Y(()=>t.activeKey,p=>{p!==void 0&&(e.value=p)});const k=Z(()=>t.activeKey!==void 0?t.activeKey:e.value),w=Z(()=>typeof t.animated=="boolean"?{inkBar:t.animated,tabPane:t.animated}:{inkBar:!0,tabPane:!1,...t.animated}),f=()=>{if(!d.value||!b.value||t.type!=="line")return;const p=d.value.querySelector(`.${n}-tab-active`);if(!p)return;if(t.tabPosition==="left"||t.tabPosition==="right")b.value.style.top=`${p.offsetTop}px`,b.value.style.height=`${p.offsetHeight}px`,b.value.style.width="2px",b.value.style.left=t.tabPosition==="left"?"auto":"0",b.value.style.right=t.tabPosition==="left"?"0":"auto";else{const x=d.value.offsetLeft;b.value.style.left=`${x+p.offsetLeft}px`,b.value.style.width=`${p.offsetWidth}px`,b.value.style.height="2px",b.value.style.top="auto",b.value.style.bottom="0"}};Y(k,()=>{dt(f)}),ot(()=>{f(),window.addEventListener("resize",f)}),lt(()=>{window.removeEventListener("resize",f)});const L=(p,r)=>{e.value=p,i("update:activeKey",p),i("change",p),i("tabClick",p,r)},nt=p=>{i("edit",p,"add")},at=(p,r)=>{r.stopPropagation(),i("edit",p,"remove")},et=(p,r,x)=>{var N,$,A;const g=t.items??[];let u=x;if(r.key==="ArrowLeft"||r.key==="ArrowUp")r.preventDefault(),u=x-1,u<0&&(u=g.length-1);else if(r.key==="ArrowRight"||r.key==="ArrowDown")r.preventDefault(),u=x+1,u>=g.length&&(u=0);else if(r.key==="Enter"||r.key===" "){r.preventDefault(),g[x].disabled||L(p,r);return}else return;let O=0;for(;(N=g[u])!=null&&N.disabled&&O<g.length;)u=r.key==="ArrowLeft"||r.key==="ArrowUp"?u-1:u+1,u<0&&(u=g.length-1),u>=g.length&&(u=0),O++;if(!(($=g[u])!=null&&$.disabled)){const _=(A=d.value)==null?void 0:A.querySelectorAll(`.${n}-tab`)[u];_==null||_.focus()}};return()=>{var $,A,_,G,U,F,H,Q;const p=t.items??[],r=t.type==="editable-card",x=t.size?`${n}-${t.size}`:"",g=t.tabPosition!=="top"?`${n}-${t.tabPosition}`:"",u=t.tabPosition==="left"||t.tabPosition==="right",O=t.tabBarGutter!==void 0?u?{marginBottom:`${t.tabBarGutter}px`}:{marginRight:`${t.tabBarGutter}px`}:{},N=()=>{if(!t.tabBarExtraContent)return{left:null,right:null};if(!ct(t.tabBarExtraContent)&&typeof t.tabBarExtraContent=="object"&&("left"in t.tabBarExtraContent||"right"in t.tabBarExtraContent)){const l=t.tabBarExtraContent;return{left:l.left?a("div",{class:`${n}-extra-content-left`},[l.left]):null,right:l.right?a("div",{class:`${n}-extra-content-right`},[l.right]):null}}return{left:null,right:a("div",{class:`${n}-extra-content`},[t.tabBarExtraContent])}};return a("div",{class:q(n,`${n}-${t.type}`,x,g,{[`${n}-centered`]:t.centered},($=t.classNames)==null?void 0:$.root),style:(A=t.styles)==null?void 0:A.root},[a("div",{class:q(`${n}-nav`,(_=t.classNames)==null?void 0:_.nav),style:{...t.tabBarStyle,...(G=t.styles)==null?void 0:G.nav}},[N().left,a("div",{class:`${n}-nav-wrap`},[a("div",{ref:d,class:`${n}-nav-list`,role:"tablist","aria-orientation":u?"vertical":"horizontal"},[p.map((l,v)=>{var S,I,E,W,J,X;const C=l.key===k.value,R=r&&l.closable!==!1;return a("div",{key:l.key,id:`tab-${l.key}`,class:q(`${n}-tab`,{[`${n}-tab-active`]:C,[`${n}-tab-disabled`]:l.disabled},(S=t.classNames)==null?void 0:S.tab,C&&((I=t.classNames)==null?void 0:I.tabActive)),style:{...v<p.length-1?O:void 0,...(E=t.styles)==null?void 0:E.tab,...C?(W=t.styles)==null?void 0:W.tabActive:void 0},role:"tab","aria-selected":C,"aria-controls":`tabpanel-${l.key}`,"aria-disabled":l.disabled||void 0,tabindex:l.disabled?-1:C?0:-1,onClick:K=>!l.disabled&&L(l.key,K),onKeydown:K=>et(l.key,K,v)},[a("div",{class:`${n}-tab-btn`},[l.icon&&a("span",{class:q(`${n}-tab-icon`,(J=t.classNames)==null?void 0:J.tabIcon),style:(X=t.styles)==null?void 0:X.tabIcon},[l.icon]),l.label,R&&a("button",{type:"button",class:`${n}-tab-remove`,"aria-label":"remove",tabindex:-1,onClick:K=>at(l.key,K)},[l.closeIcon||t.removeIcon||a(rt,{class:"hmfw-icon"},null)])])])}),r&&!t.hideAdd&&a("button",{type:"button",class:`${n}-nav-add`,"aria-label":"add",onClick:nt},[t.addIcon||a(bt,{class:"hmfw-icon"},null)])]),t.type==="line"&&a("div",{ref:b,class:q(`${n}-ink-bar`,{[`${n}-ink-bar-animated`]:w.value.inkBar},(U=t.classNames)==null?void 0:U.inkBar),style:(F=t.styles)==null?void 0:F.inkBar},null)]),N().right]),a("div",{class:`${n}-content-holder`},[a("div",{class:q(`${n}-content`,{[`${n}-content-animated`]:w.value.tabPane},(H=t.classNames)==null?void 0:H.content),style:(Q=t.styles)==null?void 0:Q.content},[p.map(l=>{var S,I,E;const v=l.key===k.value,C=v||l.forceRender||!t.destroyInactiveTabPane,R=t.destroyInactiveTabPane&&!v&&!l.forceRender;return a("div",{key:l.key,id:`tabpanel-${l.key}`,class:q(`${n}-tabpane`,{[`${n}-tabpane-active`]:v,[`${n}-tabpane-hidden`]:!v},(S=t.classNames)==null?void 0:S.tabpane),style:(I=t.styles)==null?void 0:I.tabpane,role:"tabpanel","aria-labelledby":`tab-${l.key}`,tabindex:v?0:-1,hidden:!v||void 0},[C&&!R&&(l.children??((E=s[l.key])==null?void 0:E.call(s)))])})])])])}}}),gt=h({__name:"TabsBasic",setup(t){const s=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],i=n=>{console.log("Active tab:",n)};return(n,e)=>(y(),P(c(m),{items:s,onChange:i}))}}),ht=`<template>
  <Tabs :items="items" @change="onChange" />
</template>

<script setup lang="ts">
import { Tabs } from '@hmfw/ant-design'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
]

const onChange = (key: string) => {
  console.log('Active tab:', key)
}
<\/script>
`,yt=h({__name:"TabsCard",setup(t){const s=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}];return(i,n)=>(y(),P(c(m),{type:"card",items:s}))}}),vt=`<template>
  <Tabs type="card" :items="items" />
</template>

<script setup lang="ts">
import { Tabs } from '@hmfw/ant-design'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
]
<\/script>
`,Tt=h({__name:"TabsCentered",setup(t){const s=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(i,n)=>(y(),P(c(m),{items:s,centered:""}))}}),xt=`<template>
  <Tabs :items="items" centered />
</template>

<script setup lang="ts">
import { Tabs } from '@hmfw/ant-design'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
<\/script>
`,wt={class:"demo-tabs-classnames"},Ct={class:"demo-section"},qt={class:"demo-section"},_t={class:"demo-section"},Bt={class:"demo-section"},Pt={class:"demo-section"},Nt={class:"demo-section"},$t={class:"demo-section"},At=h({__name:"TabsClassNames",setup(t){const s=[{key:"1",label:"标签一",children:"这是标签一的内容面板"},{key:"2",label:"标签二",children:"这是标签二的内容面板"},{key:"3",label:"标签三",children:"这是标签三的内容面板"}];return(i,n)=>(y(),z("div",wt,[o("section",Ct,[n[0]||(n[0]=o("h3",null,"1. 自定义根节点样式",-1)),a(c(m),{items:s,"class-names":{root:"custom-root"}})]),o("section",qt,[n[1]||(n[1]=o("h3",null,"2. 自定义标签栏样式",-1)),a(c(m),{items:s,"class-names":{nav:"custom-nav"}})]),o("section",_t,[n[2]||(n[2]=o("h3",null,"3. 自定义标签项与激活态",-1)),a(c(m),{items:s,"class-names":{tab:"custom-tab",tabActive:"custom-tab-active"}})]),o("section",Bt,[n[3]||(n[3]=o("h3",null,"4. 自定义墨条样式",-1)),a(c(m),{items:s,"class-names":{inkBar:"custom-inkbar"}})]),o("section",Pt,[n[4]||(n[4]=o("h3",null,"5. 自定义内容区域样式",-1)),a(c(m),{items:s,"class-names":{content:"custom-content",tabpane:"custom-tabpane"}})]),o("section",Nt,[n[5]||(n[5]=o("h3",null,"6. 组合使用多个 classNames",-1)),a(c(m),{items:s,"class-names":{root:"combined-root",nav:"combined-nav",tab:"combined-tab",tabActive:"combined-tab-active",inkBar:"combined-inkbar",content:"combined-content"}})]),o("section",$t,[n[6]||(n[6]=o("h3",null,"7. 使用 styles 动态样式",-1)),a(c(m),{items:s,styles:{root:{border:"2px solid #1890ff",borderRadius:"12px",padding:"12px"},nav:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px"},content:{padding:"16px",background:"#f0f2f5",borderRadius:"8px",marginTop:"12px"}}})])]))}}),St=it(At,[["__scopeId","data-v-5c7ab74c"]]),It=`<template>
  <div class="demo-tabs-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <Tabs :items="items" :class-names="{ root: 'custom-root' }" />
    </section>

    <!-- 场景 2: 自定义标签栏 -->
    <section class="demo-section">
      <h3>2. 自定义标签栏样式</h3>
      <Tabs :items="items" :class-names="{ nav: 'custom-nav' }" />
    </section>

    <!-- 场景 3: 自定义标签项与激活态 -->
    <section class="demo-section">
      <h3>3. 自定义标签项与激活态</h3>
      <Tabs :items="items" :class-names="{ tab: 'custom-tab', tabActive: 'custom-tab-active' }" />
    </section>

    <!-- 场景 4: 自定义墨条 -->
    <section class="demo-section">
      <h3>4. 自定义墨条样式</h3>
      <Tabs :items="items" :class-names="{ inkBar: 'custom-inkbar' }" />
    </section>

    <!-- 场景 5: 自定义内容区域 -->
    <section class="demo-section">
      <h3>5. 自定义内容区域样式</h3>
      <Tabs :items="items" :class-names="{ content: 'custom-content', tabpane: 'custom-tabpane' }" />
    </section>

    <!-- 场景 6: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>6. 组合使用多个 classNames</h3>
      <Tabs
        :items="items"
        :class-names="{
          root: 'combined-root',
          nav: 'combined-nav',
          tab: 'combined-tab',
          tabActive: 'combined-tab-active',
          inkBar: 'combined-inkbar',
          content: 'combined-content',
        }"
      />
    </section>

    <!-- 场景 7: 使用 styles prop -->
    <section class="demo-section">
      <h3>7. 使用 styles 动态样式</h3>
      <Tabs
        :items="items"
        :styles="{
          root: { border: '2px solid #1890ff', borderRadius: '12px', padding: '12px' },
          nav: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '8px' },
          content: { padding: '16px', background: '#f0f2f5', borderRadius: '8px', marginTop: '12px' },
        }"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Tabs } from '@hmfw/ant-design'

const items = [
  { key: '1', label: '标签一', children: '这是标签一的内容面板' },
  { key: '2', label: '标签二', children: '这是标签二的内容面板' },
  { key: '3', label: '标签三', children: '这是标签三的内容面板' },
]
<\/script>

<style scoped>
.demo-tabs-classnames {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义根节点 */
:deep(.custom-root) {
  border: 2px dashed #722ed1;
  border-radius: 12px;
  padding: 12px;
  background: #f9f0ff;
}

/* 场景 2: 自定义标签栏 */
:deep(.custom-nav) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  padding: 4px 8px;
}

:deep(.custom-nav .hmfw-tabs-tab) {
  color: rgba(255, 255, 255, 0.75);
}

:deep(.custom-nav .hmfw-tabs-tab-active) {
  color: white;
}

/* 场景 3: 自定义标签项与激活态 */
:deep(.custom-tab) {
  border-radius: 6px 6px 0 0;
  transition: all 0.3s ease;
}

:deep(.custom-tab:hover) {
  background: #e6f7ff;
}

:deep(.custom-tab-active) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white !important;
  font-weight: 600;
}

/* 场景 4: 自定义墨条 */
:deep(.custom-inkbar) {
  height: 4px !important;
  background: linear-gradient(to right, #52c41a, #389e0d) !important;
  border-radius: 2px;
}

/* 场景 5: 自定义内容区域 */
:deep(.custom-content) {
  background: #fff7e6;
  border-radius: 8px;
  margin-top: 8px;
}

:deep(.custom-tabpane) {
  padding: 16px;
  color: #d4380d;
  font-weight: 500;
}

/* 场景 6: 组合样式 */
:deep(.combined-root) {
  border: 2px solid #13c2c2;
  border-radius: 12px;
  padding: 12px;
  background: #e6fffb;
}

:deep(.combined-nav) {
  background: #13c2c2;
  border-radius: 8px;
  padding: 4px 8px;
}

:deep(.combined-tab) {
  color: rgba(255, 255, 255, 0.75);
  border-radius: 6px 6px 0 0;
}

:deep(.combined-tab-active) {
  color: white !important;
  font-weight: 600;
}

:deep(.combined-inkbar) {
  background: #fff !important;
  height: 3px !important;
}

:deep(.combined-content) {
  background: white;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
}
</style>
`,Et=h({__name:"TabsEditable",setup(t){const s=B("1"),i=B([{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3",closable:!1}]);let n=0;const e=(d,b)=>{if(b==="add"){const k=`newTab${n++}`;i.value.push({key:k,label:"New Tab",children:"Content of new Tab"}),s.value=k}else{const k=i.value.findIndex(f=>f.key===d),w=i.value.filter(f=>f.key!==d);if(w.length&&d===s.value){const f=w[k===w.length?k-1:k].key;s.value=f}i.value=w}};return(d,b)=>(y(),P(c(m),{"active-key":s.value,"onUpdate:activeKey":b[0]||(b[0]=k=>s.value=k),type:"editable-card",items:i.value,onEdit:e},null,8,["active-key","items"]))}}),Kt=`<template>
  <Tabs v-model:active-key="activeKey" type="editable-card" :items="items" @edit="onEdit" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs } from '@hmfw/ant-design'

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
      const newActiveKey = newItems[targetIndex === newItems.length ? targetIndex - 1 : targetIndex].key
      activeKey.value = newActiveKey
    }

    items.value = newItems
  }
}
<\/script>
`,Ot=h({__name:"TabsExtra",setup(t){const s=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}],i=D(ut,{style:"margin-left: 16px"},()=>"Extra Action");return(n,e)=>(y(),P(c(m),{items:s,"tab-bar-extra-content":c(i)},null,8,["tab-bar-extra-content"]))}}),zt=`<template>
  <Tabs :items="items" :tab-bar-extra-content="extra" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Button, Tabs } from '@hmfw/ant-design'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]

const extra = h(Button, { style: 'margin-left: 16px' }, () => 'Extra Action')
<\/script>
`,Rt=h({__name:"TabsIcon",setup(t){const s=[{key:"1",label:"Tab 1",icon:D(mt,{class:"hmfw-icon"}),children:"Content of Tab 1"},{key:"2",label:"Tab 2",icon:D(kt,{class:"hmfw-icon"}),children:"Content of Tab 2"}];return(i,n)=>(y(),P(c(m),{items:s}))}}),Vt=`<template>
  <Tabs :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs } from '@hmfw/ant-design'
import { AppleOutlined, AndroidOutlined } from '@hmfw/ant-design'

const items = [
  {
    key: '1',
    label: 'Tab 1',
    icon: h(AppleOutlined, { class: 'hmfw-icon' }),
    children: 'Content of Tab 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    icon: h(AndroidOutlined, { class: 'hmfw-icon' }),
    children: 'Content of Tab 2',
  },
]
<\/script>
`,Dt={style:{"margin-bottom":"16px"}},Lt=h({__name:"TabsPosition",setup(t){const s=B("top"),i=[{value:"top",label:"top"},{value:"bottom",label:"bottom"},{value:"left",label:"left"},{value:"right",label:"right"}],n=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(e,d)=>(y(),z("div",null,[o("div",Dt,[d[1]||(d[1]=o("span",{style:{"margin-right":"8px"}},"Tab Position: ",-1)),a(c(ft),{value:s.value,"onUpdate:value":d[0]||(d[0]=b=>s.value=b),options:i,style:{width:"120px"}},null,8,["value"])]),a(c(m),{items:n,"tab-position":s.value},null,8,["tab-position"])]))}}),jt=`<template>
  <div>
    <div style="margin-bottom: 16px">
      <span style="margin-right: 8px">Tab Position: </span>
      <Select v-model:value="tabPosition" :options="positionOptions" style="width: 120px" />
    </div>
    <Tabs :items="items" :tab-position="tabPosition" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, Select } from '@hmfw/ant-design'
import type { TabsPosition } from '@hmfw/ant-design'

const tabPosition = ref<TabsPosition>('top')

const positionOptions = [
  { value: 'top', label: 'top' },
  { value: 'bottom', label: 'bottom' },
  { value: 'left', label: 'left' },
  { value: 'right', label: 'right' },
]

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
<\/script>
`,Mt=h({__name:"TabsSize",setup(t){const s=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(i,n)=>(y(),z("div",null,[a(c(m),{items:s,size:"small",style:{"margin-bottom":"16px"}}),a(c(m),{items:s,style:{"margin-bottom":"16px"}}),a(c(m),{items:s,size:"large"})]))}}),Gt=`<template>
  <div>
    <Tabs :items="items" size="small" style="margin-bottom: 16px" />
    <Tabs :items="items" style="margin-bottom: 16px" />
    <Tabs :items="items" size="large" />
  </div>
</template>

<script setup lang="ts">
import { Tabs } from '@hmfw/ant-design'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
<\/script>
`,Ut={class:"markdown-body"},en={__name:"tabs",setup(t,{expose:s}){return s({frontmatter:{}}),(n,e)=>{const d=pt("DemoBlock");return y(),z("div",Ut,[e[0]||(e[0]=tt('<h1 id="tabs-标签页" tabindex="-1">Tabs 标签页</h1><p>选项卡切换组件。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><p>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</p><p>Ant Design 依次提供了三级选项卡，分别用于不同的场景。</p><ul><li>卡片式的页签，提供可关闭的样式，常用于容器顶部。</li><li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基本" tabindex="-1">基本</h3><p>默认选中第一项。</p>',9)),a(d,{title:"基本",source:c(ht)},{default:T(()=>[a(gt)]),_:1},8,["source"]),e[1]||(e[1]=o("h3",{id:"图标",tabindex:"-1"},"图标",-1)),e[2]||(e[2]=o("p",null,"有图标的标签。",-1)),a(d,{title:"图标",source:c(Vt)},{default:T(()=>[a(Rt)]),_:1},8,["source"]),e[3]||(e[3]=o("h3",{id:"居中",tabindex:"-1"},"居中",-1)),e[4]||(e[4]=o("p",null,"标签居中展示。",-1)),a(d,{title:"居中",source:c(xt)},{default:T(()=>[a(Tt)]),_:1},8,["source"]),e[5]||(e[5]=o("h3",{id:"大小",tabindex:"-1"},"大小",-1)),e[6]||(e[6]=o("p",null,"大中小三种大小的标签页，提供了 large 和 small 两个尺寸。",-1)),a(d,{title:"大小",source:c(Gt)},{default:T(()=>[a(Mt)]),_:1},8,["source"]),e[7]||(e[7]=o("h3",{id:"位置",tabindex:"-1"},"位置",-1)),e[8]||(e[8]=o("p",null,"有四个位置，tabPosition=top|bottom|left|right。",-1)),a(d,{title:"位置",source:c(jt)},{default:T(()=>[a(Lt)]),_:1},8,["source"]),e[9]||(e[9]=o("h3",{id:"卡片式页签",tabindex:"-1"},"卡片式页签",-1)),e[10]||(e[10]=o("p",null,"另一种样式的页签，不提供对应的垂直样式。",-1)),a(d,{title:"卡片式页签",source:c(vt)},{default:T(()=>[a(yt)]),_:1},8,["source"]),e[11]||(e[11]=o("h3",{id:"新增和关闭页签",tabindex:"-1"},"新增和关闭页签",-1)),e[12]||(e[12]=o("p",null,"只有卡片样式的页签支持新增和关闭选项。使用 closable={false} 禁止关闭。",-1)),a(d,{title:"新增和关闭页签",source:c(Kt)},{default:T(()=>[a(Et)]),_:1},8,["source"]),e[13]||(e[13]=o("h3",{id:"附加内容",tabindex:"-1"},"附加内容",-1)),e[14]||(e[14]=o("p",null,"可以在页签右边添加附加操作。",-1)),a(d,{title:"附加内容",source:c(zt)},{default:T(()=>[a(Ot)]),_:1},8,["source"]),e[15]||(e[15]=o("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[16]||(e[16]=o("p",null,[V("通过 "),o("code",null,"classNames"),V(" / "),o("code",null,"styles"),V(" 对各子元素做细粒度样式控制。")],-1)),a(d,{title:"语义化 className 与 style",source:c(It)},{default:T(()=>[a(St)]),_:1},8,["source"]),e[17]||(e[17]=tt(`<h2 id="api" tabindex="-1">API</h2><h3 id="tabs" tabindex="-1">Tabs</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey(v-model)</td><td>当前激活 tab 面板的 key</td><td>string</td><td>-</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key，如果没有设置 activeKey</td><td>string</td><td>第一个面板</td></tr><tr><td>type</td><td>页签的基本样式，可选 <code>line</code>、<code>card</code>、<code>editable-card</code> 类型</td><td>string</td><td><code>line</code></td></tr><tr><td>size</td><td>大小，提供 <code>large</code> 和 <code>small</code> 两种大小</td><td>string</td><td>-</td></tr><tr><td>tabPosition</td><td>页签位置，可选值有 <code>top</code> <code>right</code> <code>bottom</code> <code>left</code></td><td>string</td><td><code>top</code></td></tr><tr><td>centered</td><td>标签居中展示</td><td>boolean</td><td>false</td></tr><tr><td>items</td><td>配置选项卡内容</td><td>TabItem[]</td><td>[]</td></tr><tr><td>animated</td><td>是否使用动画切换 Tabs，可以是布尔值或对象 <code>{ inkBar: boolean, tabPane: boolean }</code></td><td>boolean | AnimatedConfig</td><td>true</td></tr><tr><td>tabBarExtraContent</td><td>tab bar 上额外的元素</td><td>VNode | { left?: VNode, right?: VNode }</td><td>-</td></tr><tr><td>tabBarGutter</td><td>tabs 之间的间隙</td><td>number</td><td>-</td></tr><tr><td>tabBarStyle</td><td>tab bar 的样式对象</td><td>object</td><td>-</td></tr><tr><td>hideAdd</td><td>是否隐藏加号图标，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>boolean</td><td>false</td></tr><tr><td>addIcon</td><td>自定义添加按钮图标</td><td>VNode</td><td>-</td></tr><tr><td>removeIcon</td><td>自定义删除按钮图标</td><td>VNode</td><td>-</td></tr><tr><td>destroyInactiveTabPane</td><td>被隐藏时是否销毁 DOM 结构</td><td>boolean</td><td>false</td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a>）</td><td>TabsClassNames</td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a>）</td><td>TabsStyles</td><td>-</td></tr></tbody></table><h3 id="tabs-事件" tabindex="-1">Tabs 事件</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板的回调</td><td>(activeKey: string) =&gt; void</td></tr><tr><td>tabClick</td><td>tab 被点击的回调</td><td>(key: string, event: MouseEvent) =&gt; void</td></tr><tr><td>edit</td><td>新增和删除页签的回调，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>(targetKey: string | MouseEvent, action: ‘add’ | ‘remove’) =&gt; void</td></tr></tbody></table><h3 id="tabitem" tabindex="-1">TabItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td>string</td><td>-</td></tr><tr><td>label</td><td>选项卡头显示文字</td><td>string | VNode</td><td>-</td></tr><tr><td>children</td><td>选项卡内容</td><td>any</td><td>-</td></tr><tr><td>disabled</td><td>禁用某一项</td><td>boolean</td><td>false</td></tr><tr><td>closable</td><td>是否显示关闭按钮，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>boolean</td><td>true</td></tr><tr><td>icon</td><td>选项卡头显示图标</td><td>VNode</td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>VNode</td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td>boolean</td><td>false</td></tr><tr><td>destroyInactiveTabPane</td><td>被隐藏时是否销毁 DOM 结构</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Tabs的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TabsClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 div.hmfw-tabs</span>
  nav<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标签栏容器 div.hmfw-tabs-nav</span>
  tab<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个标签 div.hmfw-tabs-tab</span>
  tabActive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 激活标签 div.hmfw-tabs-tab-active（与 tab 叠加）</span>
  tabIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标签图标 span.hmfw-tabs-tab-icon</span>
  inkBar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 墨条 div.hmfw-tabs-ink-bar（仅 line 类型）</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容容器 div.hmfw-tabs-content</span>
  tabpane<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容面板 div.hmfw-tabs-tabpane</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TabsStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 根节点 div.hmfw-tabs</span>
  nav<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 标签栏容器 div.hmfw-tabs-nav</span>
  tab<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 单个标签 div.hmfw-tabs-tab</span>
  tabActive<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 激活标签 div.hmfw-tabs-tab-active</span>
  tabIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 标签图标 span.hmfw-tabs-tab-icon</span>
  inkBar<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 墨条 div.hmfw-tabs-ink-bar</span>
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 内容容器 div.hmfw-tabs-content</span>
  tabpane<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 内容面板 div.hmfw-tabs-tabpane</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.nav / styles.nav 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-extra-content-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>左侧附加内容（可选）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-nav-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-nav-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-tab hmfw-tabs-tab-active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.tab + classNames.tabActive / styles.tab + styles.tabActive 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-tab-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-tab-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>图标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.tabIcon / styles.tabIcon 应用于此 --&gt;</span>
            标签
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-ink-bar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.inkBar / styles.inkBar 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-extra-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>右侧附加内容（可选）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-content-holder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-tabpane<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>面板内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.tabpane / styles.tabpane 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Tabs
    :items=&quot;items&quot;
    :classNames=&quot;{
      root: &#39;my-tabs-root&#39;,
      nav: &#39;my-tabs-nav&#39;,
      tab: &#39;my-tabs-tab&#39;,
      tabActive: &#39;my-tabs-tab-active&#39;,
      content: &#39;my-tabs-content&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-tabs-root) {
  border: 2px solid #1890ff;
  border-radius: 12px;
}

:deep(.my-tabs-nav) {
  background: #f0f0f0;
  padding: 8px;
}

:deep(.my-tabs-tab-active) {
  font-weight: 600;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Tabs
    :items=&quot;items&quot;
    :styles=&quot;{
      root: { border: &#39;2px solid #1890ff&#39;, borderRadius: &#39;12px&#39; },
      nav: { background: &#39;#667eea&#39; },
      content: { padding: &#39;16px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>tabActive</code> 与 <code>tab</code> 同时应用于激活的标签上（两者叠加）</li><li><code>tabIcon</code> 仅在 <code>TabItem</code> 设置了 <code>icon</code> 时渲染</li><li><code>inkBar</code> 仅在 <code>type=&quot;line&quot;</code>（默认）时渲染，<code>card</code> 类型无墨条</li><li><code>styles.nav</code> 会与 <code>tabBarStyle</code> 合并；<code>styles.tabActive</code> 会与 <code>styles.tab</code> 在激活标签上合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-quaternary</code></td><td>四级填充色</td><td><code>rgba(0,0,0,0.02)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr></tbody></table>`,23))])}}};export{en as default};
