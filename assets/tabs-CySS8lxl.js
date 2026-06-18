import{o as h,N as st,E as q,Q as Y,x as ot,n as a,f as Z,F as dt,t as lt,A as g,i as $,K as l,k as D,h as o,_ as ct,p as z,S as it,O as rt,H as pt,l as tt,R as y}from"./index-GV1C9GBE.js";import{c as w}from"./cls-S9IiI6wd.js";import{I as R}from"./Icon-m2YBXu_N.js";import{C as bt}from"./CloseOutlined-qamoVtn_.js";import{P as ut}from"./PlusOutlined-R8o11HW5.js";import{a as mt,A as kt}from"./AppleOutlined-C0aP1Sl1.js";const m=h({name:"Tabs",props:{activeKey:String,defaultActiveKey:String,type:{type:String,default:"line"},size:String,tabPosition:{type:String,default:"top"},centered:Boolean,items:Array,animated:{type:[Boolean,Object],default:!0},tabBarExtraContent:[Object,Function],tabBarGutter:Number,tabBarStyle:Object,hideAdd:Boolean,addIcon:Object,removeIcon:Object,destroyInactiveTabPane:Boolean,classNames:Object,styles:Object},emits:["update:activeKey","change","tabClick","edit"],setup(t,{slots:s,emit:c}){var M,G;const n=st("tabs"),e=q(t.defaultActiveKey??((G=(M=t.items)==null?void 0:M[0])==null?void 0:G.key)??""),r=q(null),u=q(null);Y(()=>t.activeKey,i=>{i!==void 0&&(e.value=i)});const k=Z(()=>t.activeKey!==void 0?t.activeKey:e.value),x=Z(()=>typeof t.animated=="boolean"?{inkBar:t.animated,tabPane:t.animated}:{inkBar:!0,tabPane:!1,...t.animated}),T=()=>{if(!r.value||!u.value||t.type!=="line")return;const i=r.value.querySelector(`.${n}-tab-active`);if(!i)return;t.tabPosition==="left"||t.tabPosition==="right"?(u.value.style.top=`${i.offsetTop}px`,u.value.style.height=`${i.offsetHeight}px`,u.value.style.width="2px",u.value.style.left=t.tabPosition==="left"?"auto":"0",u.value.style.right=t.tabPosition==="left"?"0":"auto"):(u.value.style.left=`${i.offsetLeft}px`,u.value.style.width=`${i.offsetWidth}px`,u.value.style.height="2px",u.value.style.top="auto",u.value.style.bottom="0")};Y(k,()=>{lt(T)}),ot(()=>{T()});const j=(i,p)=>{e.value=i,c("update:activeKey",i),c("change",i),c("tabClick",i,p)},nt=i=>{c("edit",i,"add")},at=(i,p)=>{p.stopPropagation(),c("edit",i,"remove")},et=(i,p,_)=>{var O,A,I;const f=t.items??[];let b=_;if(p.key==="ArrowLeft"||p.key==="ArrowUp")p.preventDefault(),b=_-1,b<0&&(b=f.length-1);else if(p.key==="ArrowRight"||p.key==="ArrowDown")p.preventDefault(),b=_+1,b>=f.length&&(b=0);else if(p.key==="Enter"||p.key===" "){p.preventDefault(),f[_].disabled||j(i,p);return}else return;let E=0;for(;(O=f[b])!=null&&O.disabled&&E<f.length;)b=p.key==="ArrowLeft"||p.key==="ArrowUp"?b-1:b+1,b<0&&(b=f.length-1),b>=f.length&&(b=0),E++;if(!((A=f[b])!=null&&A.disabled)){const P=(I=r.value)==null?void 0:I.querySelectorAll(`.${n}-tab`)[b];P==null||P.focus()}};return()=>{var A,I,P,F,L,U,H,Q;const i=t.items??[],p=t.type==="editable-card",_=t.size?`${n}-${t.size}`:"",f=t.tabPosition!=="top"?`${n}-${t.tabPosition}`:"",b=t.tabPosition==="left"||t.tabPosition==="right",E=t.tabBarGutter!==void 0?b?{marginBottom:`${t.tabBarGutter}px`}:{marginRight:`${t.tabBarGutter}px`}:{},O=()=>{if(!t.tabBarExtraContent)return null;if(typeof t.tabBarExtraContent=="object"&&"left"in t.tabBarExtraContent){const d=t.tabBarExtraContent;return a(dt,null,[d.left&&a("div",{class:`${n}-extra-content-left`},[d.left]),d.right&&a("div",{class:`${n}-extra-content-right`},[d.right])])}return a("div",{class:`${n}-extra-content`},[t.tabBarExtraContent])};return a("div",{class:w(n,`${n}-${t.type}`,_,f,{[`${n}-centered`]:t.centered},(A=t.classNames)==null?void 0:A.root),style:(I=t.styles)==null?void 0:I.root},[a("div",{class:w(`${n}-nav`,(P=t.classNames)==null?void 0:P.nav),style:{...t.tabBarStyle,...(F=t.styles)==null?void 0:F.nav}},[O(),a("div",{class:`${n}-nav-wrap`},[a("div",{ref:r,class:`${n}-nav-list`,role:"tablist","aria-orientation":b?"vertical":"horizontal"},[i.map((d,v)=>{var B,S,N,W,J,X;const C=d.key===k.value,V=p&&d.closable!==!1;return a("div",{key:d.key,id:`tab-${d.key}`,class:w(`${n}-tab`,{[`${n}-tab-active`]:C,[`${n}-tab-disabled`]:d.disabled},(B=t.classNames)==null?void 0:B.tab,C&&((S=t.classNames)==null?void 0:S.tabActive)),style:{...v<i.length-1?E:void 0,...(N=t.styles)==null?void 0:N.tab,...C?(W=t.styles)==null?void 0:W.tabActive:void 0},role:"tab","aria-selected":C,"aria-controls":`tabpanel-${d.key}`,"aria-disabled":d.disabled||void 0,tabindex:d.disabled?-1:C?0:-1,onClick:K=>!d.disabled&&j(d.key,K),onKeydown:K=>et(d.key,K,v)},[a("div",{class:`${n}-tab-btn`},[d.icon&&a("span",{class:w(`${n}-tab-icon`,(J=t.classNames)==null?void 0:J.tabIcon),style:(X=t.styles)==null?void 0:X.tabIcon},[d.icon]),d.label,V&&a("button",{type:"button",class:`${n}-tab-remove`,"aria-label":"remove",tabindex:-1,onClick:K=>at(d.key,K)},[d.closeIcon||t.removeIcon||a(R,{component:bt},null)])])])}),p&&!t.hideAdd&&a("button",{type:"button",class:`${n}-nav-add`,"aria-label":"add",onClick:nt},[t.addIcon||a(R,{component:ut},null)])]),t.type==="line"&&a("div",{ref:u,class:w(`${n}-ink-bar`,{[`${n}-ink-bar-animated`]:x.value.inkBar},(L=t.classNames)==null?void 0:L.inkBar),style:(U=t.styles)==null?void 0:U.inkBar},null)])]),a("div",{class:`${n}-content-holder`},[a("div",{class:w(`${n}-content`,{[`${n}-content-animated`]:x.value.tabPane},(H=t.classNames)==null?void 0:H.content),style:(Q=t.styles)==null?void 0:Q.content},[i.map(d=>{var B,S,N;const v=d.key===k.value,C=v||d.forceRender||!t.destroyInactiveTabPane,V=t.destroyInactiveTabPane&&!v&&!d.forceRender;return a("div",{key:d.key,id:`tabpanel-${d.key}`,class:w(`${n}-tabpane`,{[`${n}-tabpane-active`]:v,[`${n}-tabpane-hidden`]:!v},(B=t.classNames)==null?void 0:B.tabpane),style:(S=t.styles)==null?void 0:S.tabpane,role:"tabpanel","aria-labelledby":`tab-${d.key}`,tabindex:v?0:-1,hidden:!v||void 0},[C&&!V&&(d.children??((N=s[d.key])==null?void 0:N.call(s)))])})])])])}}}),ft=h({__name:"TabsBasic",setup(t){const s=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],c=n=>{console.log("Active tab:",n)};return(n,e)=>(g(),$(l(m),{items:s,onChange:c}))}}),ht=`<template>
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
`,gt=h({__name:"TabsCard",setup(t){const s=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}];return(c,n)=>(g(),$(l(m),{type:"card",items:s}))}}),vt=`<template>
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
`,yt=h({__name:"TabsCentered",setup(t){const s=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(c,n)=>(g(),$(l(m),{items:s,centered:""}))}}),Tt=`<template>
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
`,xt={class:"demo-tabs-classnames"},Ct={class:"demo-section"},wt={class:"demo-section"},_t={class:"demo-section"},Pt={class:"demo-section"},qt={class:"demo-section"},$t={class:"demo-section"},At={class:"demo-section"},It=h({__name:"TabsClassNames",setup(t){const s=[{key:"1",label:"标签一",children:"这是标签一的内容面板"},{key:"2",label:"标签二",children:"这是标签二的内容面板"},{key:"3",label:"标签三",children:"这是标签三的内容面板"}];return(c,n)=>(g(),D("div",xt,[o("section",Ct,[n[0]||(n[0]=o("h3",null,"1. 自定义根节点样式",-1)),a(l(m),{items:s,"class-names":{root:"custom-root"}})]),o("section",wt,[n[1]||(n[1]=o("h3",null,"2. 自定义标签栏样式",-1)),a(l(m),{items:s,"class-names":{nav:"custom-nav"}})]),o("section",_t,[n[2]||(n[2]=o("h3",null,"3. 自定义标签项与激活态",-1)),a(l(m),{items:s,"class-names":{tab:"custom-tab",tabActive:"custom-tab-active"}})]),o("section",Pt,[n[3]||(n[3]=o("h3",null,"4. 自定义墨条样式",-1)),a(l(m),{items:s,"class-names":{inkBar:"custom-inkbar"}})]),o("section",qt,[n[4]||(n[4]=o("h3",null,"5. 自定义内容区域样式",-1)),a(l(m),{items:s,"class-names":{content:"custom-content",tabpane:"custom-tabpane"}})]),o("section",$t,[n[5]||(n[5]=o("h3",null,"6. 组合使用多个 classNames",-1)),a(l(m),{items:s,"class-names":{root:"combined-root",nav:"combined-nav",tab:"combined-tab",tabActive:"combined-tab-active",inkBar:"combined-inkbar",content:"combined-content"}})]),o("section",At,[n[6]||(n[6]=o("h3",null,"7. 使用 styles 动态样式",-1)),a(l(m),{items:s,styles:{root:{border:"2px solid #1890ff",borderRadius:"12px",padding:"12px"},nav:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px"},content:{padding:"16px",background:"#f0f2f5",borderRadius:"8px",marginTop:"12px"}}})])]))}}),Bt=ct(It,[["__scopeId","data-v-fb938e35"]]),St=`<template>
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
import { Tabs } from '../../../components'

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
`,Nt=h({__name:"TabsEditable",setup(t){const s=q("1"),c=q([{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3",closable:!1}]);let n=0;const e=(r,u)=>{if(u==="add"){const k=`newTab${n++}`;c.value.push({key:k,label:"New Tab",children:"Content of new Tab"}),s.value=k}else{const k=c.value.findIndex(T=>T.key===r),x=c.value.filter(T=>T.key!==r);if(x.length&&r===s.value){const T=x[k===x.length?k-1:k].key;s.value=T}c.value=x}};return(r,u)=>(g(),$(l(m),{"active-key":s.value,"onUpdate:activeKey":u[0]||(u[0]=k=>s.value=k),type:"editable-card",items:c.value,onEdit:e},null,8,["active-key","items"]))}}),Kt=`<template>
  <Tabs v-model:active-key="activeKey" type="editable-card" :items="items" @edit="onEdit" />
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
      const newActiveKey = newItems[targetIndex === newItems.length ? targetIndex - 1 : targetIndex].key
      activeKey.value = newActiveKey
    }

    items.value = newItems
  }
}
<\/script>
`,Et=h({__name:"TabsExtra",setup(t){const s=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}],c=z("button",{style:"margin-left: 16px"},"Extra Action");return(n,e)=>(g(),$(l(m),{items:s,"tab-bar-extra-content":l(c)},null,8,["tab-bar-extra-content"]))}}),Ot=`<template>
  <Tabs :items="items" :tab-bar-extra-content="extra" />
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
`,Rt=h({__name:"TabsIcon",setup(t){const s=[{key:"1",label:"Tab 1",icon:z(R,{component:mt}),children:"Content of Tab 1"},{key:"2",label:"Tab 2",icon:z(R,{component:kt}),children:"Content of Tab 2"}];return(c,n)=>(g(),$(l(m),{items:s}))}}),Dt=`<template>
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
`,Vt={style:{"margin-bottom":"16px"}},zt=h({__name:"TabsPosition",setup(t){const s=q("top"),c=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(n,e)=>(g(),D("div",null,[o("div",Vt,[e[2]||(e[2]=o("span",null,"Tab Position: ",-1)),it(o("select",{"onUpdate:modelValue":e[0]||(e[0]=r=>s.value=r)},[...e[1]||(e[1]=[o("option",{value:"top"},"top",-1),o("option",{value:"bottom"},"bottom",-1),o("option",{value:"left"},"left",-1),o("option",{value:"right"},"right",-1)])],512),[[rt,s.value]])]),a(l(m),{items:c,"tab-position":s.value},null,8,["tab-position"])]))}}),jt=`<template>
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
    <Tabs :items="items" :tab-position="tabPosition" />
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
`,Mt=h({__name:"TabsSize",setup(t){const s=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(c,n)=>(g(),D("div",null,[a(l(m),{items:s,size:"small",style:{"margin-bottom":"16px"}}),a(l(m),{items:s,style:{"margin-bottom":"16px"}}),a(l(m),{items:s,size:"large"})]))}}),Gt=`<template>
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
`,Ft={class:"markdown-body"},Xt={__name:"tabs",setup(t,{expose:s}){return s({frontmatter:{}}),(n,e)=>{const r=pt("DemoBlock");return g(),D("div",Ft,[e[0]||(e[0]=tt('<h1 id="tabs-" tabindex="-1">Tabs 标签页</h1><p>选项卡切换组件。</p><h2 id="" tabindex="-1">何时使用</h2><p>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</p><p>Ant Design 依次提供了三级选项卡，分别用于不同的场景。</p><ul><li>卡片式的页签，提供可关闭的样式，常用于容器顶部。</li><li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基本</h3><p>默认选中第一项。</p>',9)),a(r,{title:"基本",source:l(ht)},{default:y(()=>[a(ft)]),_:1},8,["source"]),e[1]||(e[1]=o("h3",{id:"-3",tabindex:"-1"},"图标",-1)),e[2]||(e[2]=o("p",null,"有图标的标签。",-1)),a(r,{title:"图标",source:l(Dt)},{default:y(()=>[a(Rt)]),_:1},8,["source"]),e[3]||(e[3]=o("h3",{id:"-4",tabindex:"-1"},"居中",-1)),e[4]||(e[4]=o("p",null,"标签居中展示。",-1)),a(r,{title:"居中",source:l(Tt)},{default:y(()=>[a(yt)]),_:1},8,["source"]),e[5]||(e[5]=o("h3",{id:"-5",tabindex:"-1"},"大小",-1)),e[6]||(e[6]=o("p",null,"大中小三种大小的标签页，提供了 large 和 small 两个尺寸。",-1)),a(r,{title:"大小",source:l(Gt)},{default:y(()=>[a(Mt)]),_:1},8,["source"]),e[7]||(e[7]=o("h3",{id:"-6",tabindex:"-1"},"位置",-1)),e[8]||(e[8]=o("p",null,"有四个位置，tabPosition=top|bottom|left|right。",-1)),a(r,{title:"位置",source:l(jt)},{default:y(()=>[a(zt)]),_:1},8,["source"]),e[9]||(e[9]=o("h3",{id:"-7",tabindex:"-1"},"卡片式页签",-1)),e[10]||(e[10]=o("p",null,"另一种样式的页签，不提供对应的垂直样式。",-1)),a(r,{title:"卡片式页签",source:l(vt)},{default:y(()=>[a(gt)]),_:1},8,["source"]),e[11]||(e[11]=o("h3",{id:"-8",tabindex:"-1"},"新增和关闭页签",-1)),e[12]||(e[12]=o("p",null,"只有卡片样式的页签支持新增和关闭选项。使用 closable={false} 禁止关闭。",-1)),a(r,{title:"新增和关闭页签",source:l(Kt)},{default:y(()=>[a(Nt)]),_:1},8,["source"]),e[13]||(e[13]=o("h3",{id:"-9",tabindex:"-1"},"附加内容",-1)),e[14]||(e[14]=o("p",null,"可以在页签右边添加附加操作。",-1)),a(r,{title:"附加内容",source:l(Ot)},{default:y(()=>[a(Et)]),_:1},8,["source"]),e[15]||(e[15]=tt(`<h2 id="api" tabindex="-1">API</h2><h3 id="tabs" tabindex="-1">Tabs</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey(v-model)</td><td>当前激活 tab 面板的 key</td><td>string</td><td>-</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key，如果没有设置 activeKey</td><td>string</td><td>第一个面板</td></tr><tr><td>type</td><td>页签的基本样式，可选 <code>line</code>、<code>card</code>、<code>editable-card</code> 类型</td><td>string</td><td><code>line</code></td></tr><tr><td>size</td><td>大小，提供 <code>large</code> 和 <code>small</code> 两种大小</td><td>string</td><td>-</td></tr><tr><td>tabPosition</td><td>页签位置，可选值有 <code>top</code> <code>right</code> <code>bottom</code> <code>left</code></td><td>string</td><td><code>top</code></td></tr><tr><td>centered</td><td>标签居中展示</td><td>boolean</td><td>false</td></tr><tr><td>items</td><td>配置选项卡内容</td><td>TabItem[]</td><td>[]</td></tr><tr><td>animated</td><td>是否使用动画切换 Tabs，可以是布尔值或对象 <code>{ inkBar: boolean, tabPane: boolean }</code></td><td>boolean | AnimatedConfig</td><td>true</td></tr><tr><td>tabBarExtraContent</td><td>tab bar 上额外的元素</td><td>VNode | { left?: VNode, right?: VNode }</td><td>-</td></tr><tr><td>tabBarGutter</td><td>tabs 之间的间隙</td><td>number</td><td>-</td></tr><tr><td>tabBarStyle</td><td>tab bar 的样式对象</td><td>object</td><td>-</td></tr><tr><td>hideAdd</td><td>是否隐藏加号图标，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>boolean</td><td>false</td></tr><tr><td>addIcon</td><td>自定义添加按钮图标</td><td>VNode</td><td>-</td></tr><tr><td>removeIcon</td><td>自定义删除按钮图标</td><td>VNode</td><td>-</td></tr><tr><td>destroyInactiveTabPane</td><td>被隐藏时是否销毁 DOM 结构</td><td>boolean</td><td>false</td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname">详见下方</a>）</td><td>TabsClassNames</td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-style">详见下方</a>）</td><td>TabsStyles</td><td>-</td></tr></tbody></table><h3 id="tabs--1" tabindex="-1">Tabs 事件</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板的回调</td><td>(activeKey: string) =&gt; void</td></tr><tr><td>tabClick</td><td>tab 被点击的回调</td><td>(key: string, event: MouseEvent) =&gt; void</td></tr><tr><td>edit</td><td>新增和删除页签的回调，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>(targetKey: string | MouseEvent, action: ‘add’ | ‘remove’) =&gt; void</td></tr></tbody></table><h3 id="tabitem" tabindex="-1">TabItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td>string</td><td>-</td></tr><tr><td>label</td><td>选项卡头显示文字</td><td>string | VNode</td><td>-</td></tr><tr><td>children</td><td>选项卡内容</td><td>any</td><td>-</td></tr><tr><td>disabled</td><td>禁用某一项</td><td>boolean</td><td>false</td></tr><tr><td>closable</td><td>是否显示关闭按钮，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>boolean</td><td>true</td></tr><tr><td>icon</td><td>选项卡头显示图标</td><td>VNode</td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>VNode</td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td>boolean</td><td>false</td></tr><tr><td>destroyInactiveTabPane</td><td>被隐藏时是否销毁 DOM 结构</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="-classname" tabindex="-1">语义化 className</h2><p>通过 <code>classNames</code> 属性可以自定义 Tabs 各部分的 className。</p><h3 id="tabsclassnames" tabindex="-1">TabsClassNames</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>root</td><td>根节点 <code>div.hmfw-tabs</code></td><td><code>string</code></td><td>-</td></tr><tr><td>nav</td><td>标签栏容器 <code>div.hmfw-tabs-nav</code></td><td><code>string</code></td><td>-</td></tr><tr><td>tab</td><td>单个标签 <code>div.hmfw-tabs-tab</code></td><td><code>string</code></td><td>-</td></tr><tr><td>tabActive</td><td>激活标签 <code>div.hmfw-tabs-tab-active</code>（与 tab 叠加）</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIcon</td><td>标签图标 <code>span.hmfw-tabs-tab-icon</code></td><td><code>string</code></td><td>-</td></tr><tr><td>inkBar</td><td>墨条 <code>div.hmfw-tabs-ink-bar</code>（仅 line 类型）</td><td><code>string</code></td><td>-</td></tr><tr><td>content</td><td>内容容器 <code>div.hmfw-tabs-content</code></td><td><code>string</code></td><td>-</td></tr><tr><td>tabpane</td><td>内容面板 <code>div.hmfw-tabs-tabpane</code></td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="dom-" tabindex="-1">DOM 结构</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- root --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- nav --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-nav-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-nav-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-tab hmfw-tabs-tab-active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- tab + tabActive --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-tab-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-tab-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>图标<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- tabIcon --&gt;</span>
            标签
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-ink-bar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token comment">&lt;!-- inkBar --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-content-holder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- content --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tabs-tabpane<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>面板内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- tabpane --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="-10" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
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
</code></pre><p><strong>注意事项：</strong></p><ul><li><code>tabActive</code> 与 <code>tab</code> 同时应用于激活的标签上（两者叠加）</li><li><code>tabIcon</code> 仅在 <code>TabItem</code> 设置了 <code>icon</code> 时渲染</li><li><code>inkBar</code> 仅在 <code>type=&quot;line&quot;</code>（默认）时渲染，<code>card</code> 类型无墨条</li></ul><h2 id="-style" tabindex="-1">语义化 style</h2><p>通过 <code>styles</code> 属性可以自定义 Tabs 各部分的 style。</p><h3 id="tabsstyles" tabindex="-1">TabsStyles</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>root</td><td>根节点 <code>div.hmfw-tabs</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>nav</td><td>标签栏容器 <code>div.hmfw-tabs-nav</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>tab</td><td>单个标签 <code>div.hmfw-tabs-tab</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>tabActive</td><td>激活标签 <code>div.hmfw-tabs-tab-active</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>tabIcon</td><td>标签图标 <code>span.hmfw-tabs-tab-icon</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>inkBar</td><td>墨条 <code>div.hmfw-tabs-ink-bar</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>content</td><td>内容容器 <code>div.hmfw-tabs-content</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>tabpane</td><td>内容面板 <code>div.hmfw-tabs-tabpane</code></td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="-11" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Tabs
    :items=&quot;items&quot;
    :styles=&quot;{
      root: { border: &#39;2px solid #1890ff&#39;, borderRadius: &#39;12px&#39; },
      nav: { background: &#39;#667eea&#39; },
      content: { padding: &#39;16px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><p><strong>说明：</strong> <code>styles.nav</code> 会与 <code>tabBarStyle</code> 合并；<code>styles.tabActive</code> 会与 <code>styles.tab</code> 在激活标签上合并。</p><h3 id="-classname--style" tabindex="-1">语义化 className 与 style</h3>`,25)),a(r,{title:"语义化 className 与 style",source:l(St)},{default:y(()=>[a(Bt)]),_:1},8,["source"])])}}};export{Xt as default};
