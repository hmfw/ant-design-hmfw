import{o as g,N as ot,E as q,Q as Z,x as lt,n as e,f as tt,F as ct,t as dt,A as y,i as N,K as c,k as z,h as s,_ as it,p as j,S as pt,O as rt,H as bt,l as nt,R as v,m as V}from"./index-Dewmb7_Q.js";import{c as C}from"./cls-S9IiI6wd.js";import{I as R}from"./Icon-Dgvr5Blx.js";import{C as ut}from"./CloseOutlined-z6AYgBVy.js";import{P as mt}from"./PlusOutlined-DjJbcUJe.js";import{a as kt,A as ft}from"./AppleOutlined-C-Z5iEqQ.js";const m=g({name:"Tabs",props:{activeKey:String,defaultActiveKey:String,type:{type:String,default:"line"},size:String,tabPosition:{type:String,default:"top"},centered:Boolean,items:Array,animated:{type:[Boolean,Object],default:!0},tabBarExtraContent:[Object,Function],tabBarGutter:Number,tabBarStyle:Object,hideAdd:Boolean,addIcon:Object,removeIcon:Object,destroyInactiveTabPane:Boolean,classNames:Object,styles:Object},emits:["update:activeKey","change","tabClick","edit"],setup(t,{slots:o,emit:d}){var G,F;const n=ot("tabs"),a=q(t.defaultActiveKey??((F=(G=t.items)==null?void 0:G[0])==null?void 0:F.key)??""),p=q(null),u=q(null);Z(()=>t.activeKey,i=>{i!==void 0&&(a.value=i)});const k=tt(()=>t.activeKey!==void 0?t.activeKey:a.value),x=tt(()=>typeof t.animated=="boolean"?{inkBar:t.animated,tabPane:t.animated}:{inkBar:!0,tabPane:!1,...t.animated}),T=()=>{if(!p.value||!u.value||t.type!=="line")return;const i=p.value.querySelector(`.${n}-tab-active`);if(!i)return;t.tabPosition==="left"||t.tabPosition==="right"?(u.value.style.top=`${i.offsetTop}px`,u.value.style.height=`${i.offsetHeight}px`,u.value.style.width="2px",u.value.style.left=t.tabPosition==="left"?"auto":"0",u.value.style.right=t.tabPosition==="left"?"0":"auto"):(u.value.style.left=`${i.offsetLeft}px`,u.value.style.width=`${i.offsetWidth}px`,u.value.style.height="2px",u.value.style.top="auto",u.value.style.bottom="0")};Z(k,()=>{dt(T)}),lt(()=>{T()});const M=(i,r)=>{a.value=i,d("update:activeKey",i),d("change",i),d("tabClick",i,r)},at=i=>{d("edit",i,"add")},et=(i,r)=>{r.stopPropagation(),d("edit",i,"remove")},st=(i,r,_)=>{var O,$,A;const f=t.items??[];let b=_;if(r.key==="ArrowLeft"||r.key==="ArrowUp")r.preventDefault(),b=_-1,b<0&&(b=f.length-1);else if(r.key==="ArrowRight"||r.key==="ArrowDown")r.preventDefault(),b=_+1,b>=f.length&&(b=0);else if(r.key==="Enter"||r.key===" "){r.preventDefault(),f[_].disabled||M(i,r);return}else return;let E=0;for(;(O=f[b])!=null&&O.disabled&&E<f.length;)b=r.key==="ArrowLeft"||r.key==="ArrowUp"?b-1:b+1,b<0&&(b=f.length-1),b>=f.length&&(b=0),E++;if(!(($=f[b])!=null&&$.disabled)){const P=(A=p.value)==null?void 0:A.querySelectorAll(`.${n}-tab`)[b];P==null||P.focus()}};return()=>{var $,A,P,L,U,H,Q,W;const i=t.items??[],r=t.type==="editable-card",_=t.size?`${n}-${t.size}`:"",f=t.tabPosition!=="top"?`${n}-${t.tabPosition}`:"",b=t.tabPosition==="left"||t.tabPosition==="right",E=t.tabBarGutter!==void 0?b?{marginBottom:`${t.tabBarGutter}px`}:{marginRight:`${t.tabBarGutter}px`}:{},O=()=>{if(!t.tabBarExtraContent)return null;if(typeof t.tabBarExtraContent=="object"&&"left"in t.tabBarExtraContent){const l=t.tabBarExtraContent;return e(ct,null,[l.left&&e("div",{class:`${n}-extra-content-left`},[l.left]),l.right&&e("div",{class:`${n}-extra-content-right`},[l.right])])}return e("div",{class:`${n}-extra-content`},[t.tabBarExtraContent])};return e("div",{class:C(n,`${n}-${t.type}`,_,f,{[`${n}-centered`]:t.centered},($=t.classNames)==null?void 0:$.root),style:(A=t.styles)==null?void 0:A.root},[e("div",{class:C(`${n}-nav`,(P=t.classNames)==null?void 0:P.nav),style:{...t.tabBarStyle,...(L=t.styles)==null?void 0:L.nav}},[O(),e("div",{class:`${n}-nav-wrap`},[e("div",{ref:p,class:`${n}-nav-list`,role:"tablist","aria-orientation":b?"vertical":"horizontal"},[i.map((l,h)=>{var B,I,S,J,X,Y;const w=l.key===k.value,D=r&&l.closable!==!1;return e("div",{key:l.key,id:`tab-${l.key}`,class:C(`${n}-tab`,{[`${n}-tab-active`]:w,[`${n}-tab-disabled`]:l.disabled},(B=t.classNames)==null?void 0:B.tab,w&&((I=t.classNames)==null?void 0:I.tabActive)),style:{...h<i.length-1?E:void 0,...(S=t.styles)==null?void 0:S.tab,...w?(J=t.styles)==null?void 0:J.tabActive:void 0},role:"tab","aria-selected":w,"aria-controls":`tabpanel-${l.key}`,"aria-disabled":l.disabled||void 0,tabindex:l.disabled?-1:w?0:-1,onClick:K=>!l.disabled&&M(l.key,K),onKeydown:K=>st(l.key,K,h)},[e("div",{class:`${n}-tab-btn`},[l.icon&&e("span",{class:C(`${n}-tab-icon`,(X=t.classNames)==null?void 0:X.tabIcon),style:(Y=t.styles)==null?void 0:Y.tabIcon},[l.icon]),l.label,D&&e("button",{type:"button",class:`${n}-tab-remove`,"aria-label":"remove",tabindex:-1,onClick:K=>et(l.key,K)},[l.closeIcon||t.removeIcon||e(R,{component:ut},null)])])])}),r&&!t.hideAdd&&e("button",{type:"button",class:`${n}-nav-add`,"aria-label":"add",onClick:at},[t.addIcon||e(R,{component:mt},null)])]),t.type==="line"&&e("div",{ref:u,class:C(`${n}-ink-bar`,{[`${n}-ink-bar-animated`]:x.value.inkBar},(U=t.classNames)==null?void 0:U.inkBar),style:(H=t.styles)==null?void 0:H.inkBar},null)])]),e("div",{class:`${n}-content-holder`},[e("div",{class:C(`${n}-content`,{[`${n}-content-animated`]:x.value.tabPane},(Q=t.classNames)==null?void 0:Q.content),style:(W=t.styles)==null?void 0:W.content},[i.map(l=>{var B,I,S;const h=l.key===k.value,w=h||l.forceRender||!t.destroyInactiveTabPane,D=t.destroyInactiveTabPane&&!h&&!l.forceRender;return e("div",{key:l.key,id:`tabpanel-${l.key}`,class:C(`${n}-tabpane`,{[`${n}-tabpane-active`]:h,[`${n}-tabpane-hidden`]:!h},(B=t.classNames)==null?void 0:B.tabpane),style:(I=t.styles)==null?void 0:I.tabpane,role:"tabpanel","aria-labelledby":`tab-${l.key}`,tabindex:h?0:-1,hidden:!h||void 0},[w&&!D&&(l.children??((S=o[l.key])==null?void 0:S.call(o)))])})])])])}}}),gt=g({__name:"TabsBasic",setup(t){const o=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],d=n=>{console.log("Active tab:",n)};return(n,a)=>(y(),N(c(m),{items:o,onChange:d}))}}),yt=`<template>
  <Tabs :items="items" @change="onChange" />
</template>

<script setup lang="ts">
import { Tabs } from 'ant-design-hmfw'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
]

const onChange = (key: string) => {
  console.log('Active tab:', key)
}
<\/script>
`,ht=g({__name:"TabsCard",setup(t){const o=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}];return(d,n)=>(y(),N(c(m),{type:"card",items:o}))}}),vt=`<template>
  <Tabs type="card" :items="items" />
</template>

<script setup lang="ts">
import { Tabs } from 'ant-design-hmfw'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
]
<\/script>
`,Tt=g({__name:"TabsCentered",setup(t){const o=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(d,n)=>(y(),N(c(m),{items:o,centered:""}))}}),xt=`<template>
  <Tabs :items="items" centered />
</template>

<script setup lang="ts">
import { Tabs } from 'ant-design-hmfw'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
<\/script>
`,wt={class:"demo-tabs-classnames"},Ct={class:"demo-section"},_t={class:"demo-section"},Pt={class:"demo-section"},qt={class:"demo-section"},Nt={class:"demo-section"},$t={class:"demo-section"},At={class:"demo-section"},Bt=g({__name:"TabsClassNames",setup(t){const o=[{key:"1",label:"标签一",children:"这是标签一的内容面板"},{key:"2",label:"标签二",children:"这是标签二的内容面板"},{key:"3",label:"标签三",children:"这是标签三的内容面板"}];return(d,n)=>(y(),z("div",wt,[s("section",Ct,[n[0]||(n[0]=s("h3",null,"1. 自定义根节点样式",-1)),e(c(m),{items:o,"class-names":{root:"custom-root"}})]),s("section",_t,[n[1]||(n[1]=s("h3",null,"2. 自定义标签栏样式",-1)),e(c(m),{items:o,"class-names":{nav:"custom-nav"}})]),s("section",Pt,[n[2]||(n[2]=s("h3",null,"3. 自定义标签项与激活态",-1)),e(c(m),{items:o,"class-names":{tab:"custom-tab",tabActive:"custom-tab-active"}})]),s("section",qt,[n[3]||(n[3]=s("h3",null,"4. 自定义墨条样式",-1)),e(c(m),{items:o,"class-names":{inkBar:"custom-inkbar"}})]),s("section",Nt,[n[4]||(n[4]=s("h3",null,"5. 自定义内容区域样式",-1)),e(c(m),{items:o,"class-names":{content:"custom-content",tabpane:"custom-tabpane"}})]),s("section",$t,[n[5]||(n[5]=s("h3",null,"6. 组合使用多个 classNames",-1)),e(c(m),{items:o,"class-names":{root:"combined-root",nav:"combined-nav",tab:"combined-tab",tabActive:"combined-tab-active",inkBar:"combined-inkbar",content:"combined-content"}})]),s("section",At,[n[6]||(n[6]=s("h3",null,"7. 使用 styles 动态样式",-1)),e(c(m),{items:o,styles:{root:{border:"2px solid #1890ff",borderRadius:"12px",padding:"12px"},nav:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"8px"},content:{padding:"16px",background:"#f0f2f5",borderRadius:"8px",marginTop:"12px"}}})])]))}}),It=it(Bt,[["__scopeId","data-v-2fe2f2b5"]]),St=`<template>
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
import { Tabs } from 'ant-design-hmfw'

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
`,Kt=g({__name:"TabsEditable",setup(t){const o=q("1"),d=q([{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3",closable:!1}]);let n=0;const a=(p,u)=>{if(u==="add"){const k=`newTab${n++}`;d.value.push({key:k,label:"New Tab",children:"Content of new Tab"}),o.value=k}else{const k=d.value.findIndex(T=>T.key===p),x=d.value.filter(T=>T.key!==p);if(x.length&&p===o.value){const T=x[k===x.length?k-1:k].key;o.value=T}d.value=x}};return(p,u)=>(y(),N(c(m),{"active-key":o.value,"onUpdate:activeKey":u[0]||(u[0]=k=>o.value=k),type:"editable-card",items:d.value,onEdit:a},null,8,["active-key","items"]))}}),Et=`<template>
  <Tabs v-model:active-key="activeKey" type="editable-card" :items="items" @edit="onEdit" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs } from 'ant-design-hmfw'

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
`,Ot=g({__name:"TabsExtra",setup(t){const o=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}],d=j("button",{style:"margin-left: 16px"},"Extra Action");return(n,a)=>(y(),N(c(m),{items:o,"tab-bar-extra-content":c(d)},null,8,["tab-bar-extra-content"]))}}),Rt=`<template>
  <Tabs :items="items" :tab-bar-extra-content="extra" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs } from 'ant-design-hmfw'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]

const extra = h('button', { style: 'margin-left: 16px' }, 'Extra Action')
<\/script>
`,zt=g({__name:"TabsIcon",setup(t){const o=[{key:"1",label:"Tab 1",icon:j(R,{component:kt}),children:"Content of Tab 1"},{key:"2",label:"Tab 2",icon:j(R,{component:ft}),children:"Content of Tab 2"}];return(d,n)=>(y(),N(c(m),{items:o}))}}),Dt=`<template>
  <Tabs :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs, Icon } from 'ant-design-hmfw'
import { AppleOutlined, AndroidOutlined } from 'ant-design-hmfw'

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
`,Vt={style:{"margin-bottom":"16px"}},jt=g({__name:"TabsPosition",setup(t){const o=q("top"),d=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(n,a)=>(y(),z("div",null,[s("div",Vt,[a[2]||(a[2]=s("span",null,"Tab Position: ",-1)),pt(s("select",{"onUpdate:modelValue":a[0]||(a[0]=p=>o.value=p)},[...a[1]||(a[1]=[s("option",{value:"top"},"top",-1),s("option",{value:"bottom"},"bottom",-1),s("option",{value:"left"},"left",-1),s("option",{value:"right"},"right",-1)])],512),[[rt,o.value]])]),e(c(m),{items:d,"tab-position":o.value},null,8,["tab-position"])]))}}),Mt=`<template>
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
import { Tabs } from 'ant-design-hmfw'
import type { TabsPosition } from 'ant-design-hmfw'

const tabPosition = ref<TabsPosition>('top')

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
<\/script>
`,Gt=g({__name:"TabsSize",setup(t){const o=[{key:"1",label:"Tab 1",children:"Content of Tab 1"},{key:"2",label:"Tab 2",children:"Content of Tab 2"},{key:"3",label:"Tab 3",children:"Content of Tab 3"}];return(d,n)=>(y(),z("div",null,[e(c(m),{items:o,size:"small",style:{"margin-bottom":"16px"}}),e(c(m),{items:o,style:{"margin-bottom":"16px"}}),e(c(m),{items:o,size:"large"})]))}}),Ft=`<template>
  <div>
    <Tabs :items="items" size="small" style="margin-bottom: 16px" />
    <Tabs :items="items" style="margin-bottom: 16px" />
    <Tabs :items="items" size="large" />
  </div>
</template>

<script setup lang="ts">
import { Tabs } from 'ant-design-hmfw'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
<\/script>
`,Lt={class:"markdown-body"},Yt={__name:"tabs",setup(t,{expose:o}){return o({frontmatter:{}}),(n,a)=>{const p=bt("DemoBlock");return y(),z("div",Lt,[a[0]||(a[0]=nt('<h1 id="tabs-标签页" tabindex="-1">Tabs 标签页</h1><p>选项卡切换组件。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><p>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</p><p>Ant Design 依次提供了三级选项卡，分别用于不同的场景。</p><ul><li>卡片式的页签，提供可关闭的样式，常用于容器顶部。</li><li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基本" tabindex="-1">基本</h3><p>默认选中第一项。</p>',9)),e(p,{title:"基本",source:c(yt)},{default:v(()=>[e(gt)]),_:1},8,["source"]),a[1]||(a[1]=s("h3",{id:"图标",tabindex:"-1"},"图标",-1)),a[2]||(a[2]=s("p",null,"有图标的标签。",-1)),e(p,{title:"图标",source:c(Dt)},{default:v(()=>[e(zt)]),_:1},8,["source"]),a[3]||(a[3]=s("h3",{id:"居中",tabindex:"-1"},"居中",-1)),a[4]||(a[4]=s("p",null,"标签居中展示。",-1)),e(p,{title:"居中",source:c(xt)},{default:v(()=>[e(Tt)]),_:1},8,["source"]),a[5]||(a[5]=s("h3",{id:"大小",tabindex:"-1"},"大小",-1)),a[6]||(a[6]=s("p",null,"大中小三种大小的标签页，提供了 large 和 small 两个尺寸。",-1)),e(p,{title:"大小",source:c(Ft)},{default:v(()=>[e(Gt)]),_:1},8,["source"]),a[7]||(a[7]=s("h3",{id:"位置",tabindex:"-1"},"位置",-1)),a[8]||(a[8]=s("p",null,"有四个位置，tabPosition=top|bottom|left|right。",-1)),e(p,{title:"位置",source:c(Mt)},{default:v(()=>[e(jt)]),_:1},8,["source"]),a[9]||(a[9]=s("h3",{id:"卡片式页签",tabindex:"-1"},"卡片式页签",-1)),a[10]||(a[10]=s("p",null,"另一种样式的页签，不提供对应的垂直样式。",-1)),e(p,{title:"卡片式页签",source:c(vt)},{default:v(()=>[e(ht)]),_:1},8,["source"]),a[11]||(a[11]=s("h3",{id:"新增和关闭页签",tabindex:"-1"},"新增和关闭页签",-1)),a[12]||(a[12]=s("p",null,"只有卡片样式的页签支持新增和关闭选项。使用 closable={false} 禁止关闭。",-1)),e(p,{title:"新增和关闭页签",source:c(Et)},{default:v(()=>[e(Kt)]),_:1},8,["source"]),a[13]||(a[13]=s("h3",{id:"附加内容",tabindex:"-1"},"附加内容",-1)),a[14]||(a[14]=s("p",null,"可以在页签右边添加附加操作。",-1)),e(p,{title:"附加内容",source:c(Rt)},{default:v(()=>[e(Ot)]),_:1},8,["source"]),a[15]||(a[15]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[16]||(a[16]=s("p",null,[V("通过 "),s("code",null,"classNames"),V(" / "),s("code",null,"styles"),V(" 对各子元素做细粒度样式控制。")],-1)),e(p,{title:"语义化 className 与 style",source:c(St)},{default:v(()=>[e(It)]),_:1},8,["source"]),a[17]||(a[17]=nt(`<h2 id="api" tabindex="-1">API</h2><h3 id="tabs" tabindex="-1">Tabs</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>activeKey(v-model)</td><td>当前激活 tab 面板的 key</td><td>string</td><td>-</td></tr><tr><td>defaultActiveKey</td><td>初始化选中面板的 key，如果没有设置 activeKey</td><td>string</td><td>第一个面板</td></tr><tr><td>type</td><td>页签的基本样式，可选 <code>line</code>、<code>card</code>、<code>editable-card</code> 类型</td><td>string</td><td><code>line</code></td></tr><tr><td>size</td><td>大小，提供 <code>large</code> 和 <code>small</code> 两种大小</td><td>string</td><td>-</td></tr><tr><td>tabPosition</td><td>页签位置，可选值有 <code>top</code> <code>right</code> <code>bottom</code> <code>left</code></td><td>string</td><td><code>top</code></td></tr><tr><td>centered</td><td>标签居中展示</td><td>boolean</td><td>false</td></tr><tr><td>items</td><td>配置选项卡内容</td><td>TabItem[]</td><td>[]</td></tr><tr><td>animated</td><td>是否使用动画切换 Tabs，可以是布尔值或对象 <code>{ inkBar: boolean, tabPane: boolean }</code></td><td>boolean | AnimatedConfig</td><td>true</td></tr><tr><td>tabBarExtraContent</td><td>tab bar 上额外的元素</td><td>VNode | { left?: VNode, right?: VNode }</td><td>-</td></tr><tr><td>tabBarGutter</td><td>tabs 之间的间隙</td><td>number</td><td>-</td></tr><tr><td>tabBarStyle</td><td>tab bar 的样式对象</td><td>object</td><td>-</td></tr><tr><td>hideAdd</td><td>是否隐藏加号图标，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>boolean</td><td>false</td></tr><tr><td>addIcon</td><td>自定义添加按钮图标</td><td>VNode</td><td>-</td></tr><tr><td>removeIcon</td><td>自定义删除按钮图标</td><td>VNode</td><td>-</td></tr><tr><td>destroyInactiveTabPane</td><td>被隐藏时是否销毁 DOM 结构</td><td>boolean</td><td>false</td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a>）</td><td>TabsClassNames</td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a>）</td><td>TabsStyles</td><td>-</td></tr></tbody></table><h3 id="tabs-事件" tabindex="-1">Tabs 事件</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>切换面板的回调</td><td>(activeKey: string) =&gt; void</td></tr><tr><td>tabClick</td><td>tab 被点击的回调</td><td>(key: string, event: MouseEvent) =&gt; void</td></tr><tr><td>edit</td><td>新增和删除页签的回调，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>(targetKey: string | MouseEvent, action: ‘add’ | ‘remove’) =&gt; void</td></tr></tbody></table><h3 id="tabitem" tabindex="-1">TabItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>对应 activeKey</td><td>string</td><td>-</td></tr><tr><td>label</td><td>选项卡头显示文字</td><td>string | VNode</td><td>-</td></tr><tr><td>children</td><td>选项卡内容</td><td>any</td><td>-</td></tr><tr><td>disabled</td><td>禁用某一项</td><td>boolean</td><td>false</td></tr><tr><td>closable</td><td>是否显示关闭按钮，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>boolean</td><td>true</td></tr><tr><td>icon</td><td>选项卡头显示图标</td><td>VNode</td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标，在 <code>type=&quot;editable-card&quot;</code> 时有效</td><td>VNode</td><td>-</td></tr><tr><td>forceRender</td><td>被隐藏时是否渲染 DOM 结构</td><td>boolean</td><td>false</td></tr><tr><td>destroyInactiveTabPane</td><td>被隐藏时是否销毁 DOM 结构</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Tabs的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>tabActive</code> 与 <code>tab</code> 同时应用于激活的标签上（两者叠加）</li><li><code>tabIcon</code> 仅在 <code>TabItem</code> 设置了 <code>icon</code> 时渲染</li><li><code>inkBar</code> 仅在 <code>type=&quot;line&quot;</code>（默认）时渲染，<code>card</code> 类型无墨条</li><li><code>styles.nav</code> 会与 <code>tabBarStyle</code> 合并；<code>styles.tabActive</code> 会与 <code>styles.tab</code> 在激活标签上合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-quaternary</code></td><td>四级填充色</td><td><code>rgba(0,0,0,0.02)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr></tbody></table>`,23))])}}};export{Yt as default};
