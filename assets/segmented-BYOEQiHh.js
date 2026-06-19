import{o as q,N as et,L as nt,Q as G,x as st,t as E,w as ot,n as s,E as r,f as M,r as at,A as O,k as $,F as lt,K as p,h as l,J as dt,i as V,p as m,_ as it,H as pt,R as I,m as P,l as ct}from"./index-DVYL9B-3.js";import{c as U}from"./cls-S9IiI6wd.js";import{T as ut}from"./Tooltip-CTJVv1IP.js";import{H as A}from"./HomeOutlined-D7zp5VNZ.js";import{I as v}from"./Icon-DOBD7t4S.js";import{U as B}from"./UserOutlined-Cxci2xvC.js";import{S as T}from"./SettingOutlined-DPN0Twzm.js";import{B as rt,P as mt}from"./PictureOutlined-DVbQhLYc.js";function vt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!at(e)}const g=q({name:"Segmented",props:{value:[String,Number],defaultValue:[String,Number],options:{type:Array,default:()=>[]},disabled:Boolean,block:Boolean,size:{type:String,default:"middle"},vertical:Boolean,orientation:String,shape:{type:String,default:"default"},name:String,classNames:Object,styles:Object},emits:["update:value","change"],setup(e,{emit:d}){var Y;const a=et("segmented"),f=nt(),t=r(),o=r(),h=M(()=>e.options.map(n=>typeof n=="object"?n:{label:String(n),value:n})),w=e.defaultValue??e.value??((Y=h.value[0])==null?void 0:Y.value),C=r(w),H=M(()=>e.value!==void 0),i=M(()=>H.value?e.value:C.value);G(()=>e.value,n=>{n!==void 0&&(C.value=n)});const c=M(()=>e.orientation?e.orientation==="vertical":e.vertical),J=M(()=>e.name||`segmented-${Math.random().toString(36).slice(2,9)}`),W=(n,x)=>{e.disabled||n.disabled||(C.value=n.value,d("update:value",n.value),d("change",n.value),E(()=>j(x)))},X=(n,x,b)=>{var N;if(e.disabled||x.disabled)return;const k=h.value,u=!c.value,S=f.value.direction==="rtl";let y=-1;if(u&&n.key==="ArrowRight"||!u&&n.key==="ArrowDown"?y=S&&u?b-1:b+1:(u&&n.key==="ArrowLeft"||!u&&n.key==="ArrowUp")&&(y=S&&u?b+1:b-1),y>=0&&y<k.length){n.preventDefault();const D=k[y];if(!D.disabled){W(D,y);const z=(N=t.value)==null?void 0:N.querySelectorAll('input[type="radio"]');z!=null&&z[y]&&z[y].focus()}}},j=n=>{if(!o.value||!t.value)return;const b=t.value.querySelectorAll(`.${a}-item`)[n];if(!b)return;const k=t.value.getBoundingClientRect(),u=b.getBoundingClientRect();if(c.value){const S=u.top-k.top+t.value.scrollTop;o.value.style.transform=`translateY(${S}px)`,o.value.style.height=`${u.height}px`,o.value.style.width="100%"}else{const S=u.left-k.left+t.value.scrollLeft;o.value.style.transform=`translateX(${S}px)`,o.value.style.width=`${u.width}px`,o.value.style.height="100%"}},_=()=>{const n=h.value.findIndex(x=>x.value===i.value);n>=0&&j(n)};let L=null;st(()=>{_(),t.value&&typeof ResizeObserver<"u"&&(L=new ResizeObserver(()=>{E(()=>_())}),L.observe(t.value))}),ot(()=>{L&&(L.disconnect(),L=null)}),G([i,h,c],()=>{E(()=>_())});const Z=n=>{var k,u,S,y,N,D;const x=!!n.icon,b=n.label!==void 0&&n.label!==null;return s("div",{class:U(`${a}-item-label`,(k=e.classNames)==null?void 0:k.itemLabel,{[`${a}-item-icon-only`]:x&&!b}),style:(u=e.styles)==null?void 0:u.itemLabel},[x&&s("span",{class:U(`${a}-item-icon`,(S=e.classNames)==null?void 0:S.itemIcon),style:(y=e.styles)==null?void 0:y.itemIcon},[n.icon]),b&&s("span",{class:U(`${a}-item-text`,(N=e.classNames)==null?void 0:N.itemText),style:(D=e.styles)==null?void 0:D.itemText},[n.label])])},tt=(n,x)=>{var S,y,N,D,z,Q,F,K;const b=n.value===i.value,k=e.disabled||n.disabled,u=s("label",{key:n.value,class:U(`${a}-item`,n.className,(S=e.classNames)==null?void 0:S.item,{[`${a}-item-selected`]:b,[`${a}-item-disabled`]:k},b&&((y=e.classNames)==null?void 0:y.itemSelected),k&&((N=e.classNames)==null?void 0:N.itemDisabled)),style:{...n.style,...(D=e.styles)==null?void 0:D.item,...b?(z=e.styles)==null?void 0:z.itemSelected:{},...k?(Q=e.styles)==null?void 0:Q.itemDisabled:{}},title:n.title},[s("input",{type:"radio",class:U(`${a}-item-input`,(F=e.classNames)==null?void 0:F.itemInput),style:(K=e.styles)==null?void 0:K.itemInput,name:J.value,value:n.value,checked:b,disabled:k,onChange:()=>W(n,x),onKeydown:R=>X(R,n,x)},null),Z(n)]);if(n.tooltip){const R=typeof n.tooltip=="string"?{title:n.tooltip}:n.tooltip;return s(ut,R,vt(u)?u:{default:()=>[u]})}return u};return()=>{var n,x,b,k,u,S;return s("div",{class:U(a,(n=e.classNames)==null?void 0:n.root,`${a}-${e.size}`,{[`${a}-disabled`]:e.disabled,[`${a}-block`]:e.block,[`${a}-vertical`]:c.value,[`${a}-rtl`]:f.value.direction==="rtl",[`${a}-shape-${e.shape}`]:e.shape==="round"}),style:(x=e.styles)==null?void 0:x.root},[s("div",{ref:t,class:U(`${a}-group`,(b=e.classNames)==null?void 0:b.group),style:(k=e.styles)==null?void 0:k.group},[s("div",{ref:o,class:U(`${a}-thumb`,(u=e.classNames)==null?void 0:u.thumb),style:(S=e.styles)==null?void 0:S.thumb},null),h.value.map((y,N)=>tt(y,N))])])}}}),gt=q({__name:"SegmentedBasic",setup(e){const d=r("Daily"),a=["Daily","Weekly","Monthly","Quarterly","Yearly"];return(f,t)=>(O(),$(lt,null,[s(p(g),{value:d.value,"onUpdate:value":t[0]||(t[0]=o=>d.value=o),options:a},null,8,["value"]),l("p",null,"当前选中："+dt(d.value),1)],64))}}),ft=`<template>
  <Segmented v-model:value="value" :options="options" />
  <p>当前选中：{{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
<\/script>
`,bt=q({__name:"SegmentedBlock",setup(e){const d=r("Map"),a=["Map","Transit","Satellite"];return(f,t)=>(O(),V(p(g),{value:d.value,"onUpdate:value":t[0]||(t[0]=o=>d.value=o),options:a,block:""},null,8,["value"]))}}),kt=`<template>
  <Segmented v-model:value="value" :options="options" block />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Map')
const options = ['Map', 'Transit', 'Satellite']
<\/script>
`,yt={style:{display:"flex","flex-direction":"column",gap:"24px"}},ht=q({__name:"SegmentedClassNames",setup(e){const d=r("选项一"),a=r("option1"),f=[{value:"option1",label:"启用选项"},{value:"option2",label:"另一选项"},{value:"option3",label:"禁用选项",disabled:!0}],t=r("list"),o=[{value:"list",label:"列表",icon:m(v,{component:A})},{value:"grid",label:"网格",icon:m(v,{component:B})}],h=r("Morning"),w=r("home"),C=[{value:"home",icon:m(v,{component:A})},{value:"user",icon:m(v,{component:B})},{value:"settings",icon:m(v,{component:T})}];return(H,i)=>(O(),$("div",yt,[l("div",null,[i[5]||(i[5]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器与动画滑块：",-1)),s(p(g),{value:d.value,"onUpdate:value":i[0]||(i[0]=c=>d.value=c),options:["选项一","选项二","选项三"],"class-names":{root:"custom-root",thumb:"custom-thumb"}},null,8,["value"])]),l("div",null,[i[6]||(i[6]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义选项与状态样式：",-1)),s(p(g),{value:a.value,"onUpdate:value":i[1]||(i[1]=c=>a.value=c),options:f,"class-names":{item:"custom-item",itemSelected:"custom-item-selected",itemDisabled:"custom-item-disabled"}},null,8,["value"])]),l("div",null,[i[7]||(i[7]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图标与文本样式：",-1)),s(p(g),{value:t.value,"onUpdate:value":i[2]||(i[2]=c=>t.value=c),options:o,"class-names":{itemIcon:"custom-icon",itemText:"custom-text"}},null,8,["value"])]),l("div",null,[i[8]||(i[8]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),s(p(g),{value:h.value,"onUpdate:value":i[3]||(i[3]=c=>h.value=c),options:["Morning","Afternoon","Evening"],styles:{root:{borderRadius:"16px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",padding:"4px"},thumb:{borderRadius:"12px",background:"#ffffff",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},itemText:{color:"#ffffff",fontWeight:500}}},null,8,["value"])]),l("div",null,[i[9]||(i[9]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用（垂直模式）：",-1)),s(p(g),{value:w.value,"onUpdate:value":i[4]||(i[4]=c=>w.value=c),options:C,vertical:"","class-names":{root:"custom-vertical-root",item:"custom-vertical-item"},styles:{itemIcon:{fontSize:"20px"},itemLabel:{padding:"8px 16px"}}},null,8,["value"])])]))}}),xt=it(ht,[["__scopeId","data-v-beefb5c2"]]),St=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器和滑块 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器与动画滑块：</div>
      <Segmented
        v-model:value="value1"
        :options="['选项一', '选项二', '选项三']"
        :class-names="{
          root: 'custom-root',
          thumb: 'custom-thumb',
        }"
      />
    </div>

    <!-- 场景 2：自定义选项样式（选中/禁用状态） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义选项与状态样式：</div>
      <Segmented
        v-model:value="value2"
        :options="options2"
        :class-names="{
          item: 'custom-item',
          itemSelected: 'custom-item-selected',
          itemDisabled: 'custom-item-disabled',
        }"
      />
    </div>

    <!-- 场景 3：自定义图标和文本 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图标与文本样式：</div>
      <Segmented
        v-model:value="value3"
        :options="options3"
        :class-names="{
          itemIcon: 'custom-icon',
          itemText: 'custom-text',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Segmented
        v-model:value="value4"
        :options="['Morning', 'Afternoon', 'Evening']"
        :styles="{
          root: {
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            padding: '4px',
          },
          thumb: { borderRadius: '12px', background: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' },
          itemText: { color: '#ffffff', fontWeight: 500 },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames 和 styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用（垂直模式）：</div>
      <Segmented
        v-model:value="value5"
        :options="options5"
        vertical
        :class-names="{
          root: 'custom-vertical-root',
          item: 'custom-vertical-item',
        }"
        :styles="{
          itemIcon: { fontSize: '20px' },
          itemLabel: { padding: '8px 16px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { HomeOutlined, UserOutlined, SettingOutlined } from 'ant-design-hmfw'

const value1 = ref('选项一')

const value2 = ref('option1')
const options2 = [
  { value: 'option1', label: '启用选项' },
  { value: 'option2', label: '另一选项' },
  { value: 'option3', label: '禁用选项', disabled: true },
]

const value3 = ref('list')
const options3 = [
  { value: 'list', label: '列表', icon: h(Icon, { component: HomeOutlined }) },
  { value: 'grid', label: '网格', icon: h(Icon, { component: UserOutlined }) },
]

const value4 = ref('Morning')

const value5 = ref('home')
const options5 = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }) },
  { value: 'user', icon: h(Icon, { component: UserOutlined }) },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }) },
]
<\/script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border: 2px solid #1677ff;
  padding: 4px;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.2);
}

:deep(.custom-thumb) {
  background: linear-gradient(135deg, #1677ff 0%, #4096ff 100%);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.3);
}

:deep(.custom-item) {
  transition: all 0.3s;
}

:deep(.custom-item:hover) {
  transform: translateY(-1px);
}

:deep(.custom-item-selected) {
  color: #ffffff;
  font-weight: 600;
}

:deep(.custom-item-disabled) {
  opacity: 0.4;
  text-decoration: line-through;
}

:deep(.custom-icon) {
  font-size: 18px;
  filter: drop-shadow(0 0 2px rgba(22, 119, 255, 0.4));
}

:deep(.custom-text) {
  font-weight: 500;
  letter-spacing: 0.5px;
}

:deep(.custom-vertical-root) {
  background: #f6ffed;
  border: 2px solid #52c41a;
  padding: 4px;
  border-radius: 12px;
}

:deep(.custom-vertical-item) {
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.custom-vertical-item:hover) {
  background: rgba(82, 196, 26, 0.1);
}
</style>
`,wt=q({__name:"SegmentedCustomStyle",setup(e){const d=r("apple"),a=[{value:"apple",label:"苹果",style:{color:"#cf1322",fontWeight:600}},{value:"orange",label:"橙子",style:{color:"#d46b08"}},{value:"pear",label:"梨",className:"demo-segmented-pear"}];return(f,t)=>(O(),V(p(g),{value:d.value,"onUpdate:value":t[0]||(t[0]=o=>d.value=o),options:a},null,8,["value"]))}}),qt=`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('apple')
// 每个选项支持单独的 className 和 style
const options = [
  { value: 'apple', label: '苹果', style: { color: '#cf1322', fontWeight: 600 } },
  { value: 'orange', label: '橙子', style: { color: '#d46b08' } },
  { value: 'pear', label: '梨', className: 'demo-segmented-pear' },
]
<\/script>

<style>
.demo-segmented-pear {
  font-style: italic;
}
</style>
`,Ot=q({__name:"SegmentedDisabled",setup(e){const d=r("Daily"),a=[{value:"Daily",label:"每日"},{value:"Weekly",label:"每周",disabled:!0},{value:"Monthly",label:"每月"}];return(f,t)=>(O(),V(p(g),{value:d.value,"onUpdate:value":t[0]||(t[0]=o=>d.value=o),options:a},null,8,["value"]))}}),Nt=`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('Daily')
const options = [
  { value: 'Daily', label: '每日' },
  { value: 'Weekly', label: '每周', disabled: true },
  { value: 'Monthly', label: '每月' },
]
<\/script>
`,It={style:{display:"flex","flex-direction":"column",gap:"16px"}},Dt=q({__name:"SegmentedIconLabel",setup(e){const d=r("list"),a=[{value:"list",label:"列表",icon:m(v,{component:rt})},{value:"grid",label:"网格",icon:m(v,{component:mt})}];return(f,t)=>(O(),$("div",It,[s(p(g),{value:d.value,"onUpdate:value":t[0]||(t[0]=o=>d.value=o),options:a},null,8,["value"]),s(p(g),{value:d.value,"onUpdate:value":t[1]||(t[1]=o=>d.value=o),options:a,size:"large"},null,8,["value"]),s(p(g),{value:d.value,"onUpdate:value":t[2]||(t[2]=o=>d.value=o),options:a,size:"small"},null,8,["value"])]))}}),Ut=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value" :options="options" />
    <Segmented v-model:value="value" :options="options" size="large" />
    <Segmented v-model:value="value" :options="options" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { PictureOutlined, BarsOutlined } from 'ant-design-hmfw'

const value = ref('list')
// 图标 + 文本同时存在的布局
const options = [
  { value: 'list', label: '列表', icon: h(Icon, { component: BarsOutlined }) },
  { value: 'grid', label: '网格', icon: h(Icon, { component: PictureOutlined }) },
]
<\/script>
`,$t={style:{display:"flex","flex-direction":"column",gap:"16px"}},Ct=q({__name:"SegmentedShape",setup(e){const d=r("light"),a=[{label:"Light",value:"light",icon:m(v,{component:B})},{label:"Dark",value:"dark",icon:m(v,{component:T})}],f=r("Daily"),t=["Daily","Weekly","Monthly"];return(o,h)=>(O(),$("div",$t,[s(p(g),{value:d.value,"onUpdate:value":h[0]||(h[0]=w=>d.value=w),options:a,shape:"round"},null,8,["value"]),s(p(g),{value:f.value,"onUpdate:value":h[1]||(h[1]=w=>f.value=w),options:t,shape:"round",size:"large"},null,8,["value"])]))}}),zt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value1" :options="options1" shape="round" />
    <Segmented v-model:value="value2" :options="options2" shape="round" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { UserOutlined, SettingOutlined } from 'ant-design-hmfw'

const value1 = ref('light')
const options1 = [
  { label: 'Light', value: 'light', icon: h(Icon, { component: UserOutlined }) },
  { label: 'Dark', value: 'dark', icon: h(Icon, { component: SettingOutlined }) },
]

const value2 = ref('Daily')
const options2 = ['Daily', 'Weekly', 'Monthly']
<\/script>
`,Bt={style:{display:"flex","flex-direction":"column",gap:"16px"}},Pt=q({__name:"SegmentedSize",setup(e){const d=r("Daily"),a=["Daily","Weekly","Monthly","Quarterly","Yearly"],f=r("list"),t=[{label:"List",value:"list",icon:m(v,{component:B})},{label:"Grid",value:"grid",icon:m(v,{component:T})}],o=r("home"),h=[{value:"home",icon:m(v,{component:A}),tooltip:"Home"},{value:"user",icon:m(v,{component:B}),tooltip:"User"},{value:"settings",icon:m(v,{component:T}),tooltip:"Settings"}],w=r("a"),C=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}];return(H,i)=>(O(),$("div",Bt,[s(p(g),{value:d.value,"onUpdate:value":i[0]||(i[0]=c=>d.value=c),options:a},null,8,["value"]),s(p(g),{value:f.value,"onUpdate:value":i[1]||(i[1]=c=>f.value=c),options:t},null,8,["value"]),s(p(g),{value:o.value,"onUpdate:value":i[2]||(i[2]=c=>o.value=c),options:h,size:"large"},null,8,["value"]),s(p(g),{value:w.value,"onUpdate:value":i[3]||(i[3]=c=>w.value=c),options:C,size:"small"},null,8,["value"])]))}}),Tt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value1" :options="options1" />
    <Segmented v-model:value="value2" :options="options2" />
    <Segmented v-model:value="value3" :options="options3" size="large" />
    <Segmented v-model:value="value4" :options="options4" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { UserOutlined, SettingOutlined, HomeOutlined } from 'ant-design-hmfw'

const value1 = ref('Daily')
const options1 = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']

const value2 = ref('list')
const options2 = [
  { label: 'List', value: 'list', icon: h(Icon, { component: UserOutlined }) },
  { label: 'Grid', value: 'grid', icon: h(Icon, { component: SettingOutlined }) },
]

const value3 = ref('home')
const options3 = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }), tooltip: 'Home' },
  { value: 'user', icon: h(Icon, { component: UserOutlined }), tooltip: 'User' },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }), tooltip: 'Settings' },
]

const value4 = ref('a')
const options4 = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]
<\/script>
`,Lt={style:{display:"flex",gap:"16px"}},Mt=q({__name:"SegmentedVertical",setup(e){const d=r("home"),a=[{value:"home",icon:m(v,{component:A})},{value:"user",icon:m(v,{component:B})},{value:"settings",icon:m(v,{component:T})}];return(f,t)=>(O(),$("div",Lt,[s(p(g),{value:d.value,"onUpdate:value":t[0]||(t[0]=o=>d.value=o),options:a,vertical:""},null,8,["value"])]))}}),At=`<template>
  <div style="display: flex; gap: 16px">
    <Segmented v-model:value="value" :options="options" vertical />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { UserOutlined, SettingOutlined, HomeOutlined } from 'ant-design-hmfw'

const value = ref('home')
const options = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }) },
  { value: 'user', icon: h(Icon, { component: UserOutlined }) },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }) },
]
<\/script>
`,Ht={style:{display:"flex","flex-direction":"column",gap:"16px"}},_t=q({__name:"SegmentedWithIcon",setup(e){const d=r("home"),a=[{value:"home",icon:m(v,{component:A}),tooltip:"Home Page"},{value:"user",icon:m(v,{component:B}),tooltip:"User Profile"},{value:"settings",icon:m(v,{component:T}),tooltip:"Settings"}];return(f,t)=>(O(),$("div",Ht,[s(p(g),{value:d.value,"onUpdate:value":t[0]||(t[0]=o=>d.value=o),options:a},null,8,["value"])]))}}),Rt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented, Icon } from 'ant-design-hmfw'
import { UserOutlined, SettingOutlined, HomeOutlined } from 'ant-design-hmfw'

const value = ref('home')
const options = [
  { value: 'home', icon: h(Icon, { component: HomeOutlined }), tooltip: 'Home Page' },
  { value: 'user', icon: h(Icon, { component: UserOutlined }), tooltip: 'User Profile' },
  { value: 'settings', icon: h(Icon, { component: SettingOutlined }), tooltip: 'Settings' },
]
<\/script>
`,Et={class:"markdown-body"},Jt={__name:"segmented",setup(e,{expose:d}){return d({frontmatter:{}}),(f,t)=>{const o=pt("DemoBlock");return O(),$("div",Et,[t[0]||(t[0]=l("h1",{id:"segmented-分段控制器",tabindex:"-1"},"Segmented 分段控制器",-1)),t[1]||(t[1]=l("p",null,"分段控制器。",-1)),t[2]||(t[2]=l("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=l("ul",null,[l("li",null,"用于展示多个选项并允许用户选择其中单个选项"),l("li",null,"当切换选中选项时,关联区域的内容会发生变化")],-1)),t[4]||(t[4]=l("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=l("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=l("p",null,"基本分段控制器。",-1)),s(o,{title:"基础用法",source:p(ft)},{default:I(()=>[s(gt)]),_:1},8,["source"]),t[7]||(t[7]=l("h3",{id:"block-模式",tabindex:"-1"},"Block 模式",-1)),t[8]||(t[8]=l("p",null,"block 属性使其适合父元素宽度。",-1)),s(o,{title:"Block 模式",source:p(kt)},{default:I(()=>[s(bt)]),_:1},8,["source"]),t[9]||(t[9]=l("h3",{id:"禁用",tabindex:"-1"},"禁用",-1)),t[10]||(t[10]=l("p",null,"禁用某些选项。",-1)),s(o,{title:"禁用",source:p(Nt)},{default:I(()=>[s(Ot)]),_:1},8,["source"]),t[11]||(t[11]=l("h3",{id:"三种尺寸",tabindex:"-1"},"三种尺寸",-1)),t[12]||(t[12]=l("p",null,"提供 large、middle、small 三种尺寸。",-1)),s(o,{title:"三种尺寸",source:p(Tt)},{default:I(()=>[s(Pt)]),_:1},8,["source"]),t[13]||(t[13]=l("h3",{id:"垂直方向",tabindex:"-1"},"垂直方向",-1)),t[14]||(t[14]=l("p",null,"垂直布局的分段控制器。",-1)),s(o,{title:"垂直方向",source:p(At)},{default:I(()=>[s(Mt)]),_:1},8,["source"]),t[15]||(t[15]=l("h3",{id:"圆角形状",tabindex:"-1"},"圆角形状",-1)),t[16]||(t[16]=l("p",null,"胶囊型的分段控制器。",-1)),s(o,{title:"圆角形状",source:p(zt)},{default:I(()=>[s(Ct)]),_:1},8,["source"]),t[17]||(t[17]=l("h3",{id:"带图标",tabindex:"-1"},"带图标",-1)),t[18]||(t[18]=l("p",null,"在选项中使用图标。",-1)),s(o,{title:"带图标",source:p(Rt)},{default:I(()=>[s(_t)]),_:1},8,["source"]),t[19]||(t[19]=l("h3",{id:"图标--文本",tabindex:"-1"},"图标 + 文本",-1)),t[20]||(t[20]=l("p",null,"图标与文本同时存在时自动优化布局，间距统一。",-1)),s(o,{title:"图标 + 文本",source:p(Ut)},{default:I(()=>[s(Dt)]),_:1},8,["source"]),t[21]||(t[21]=l("h3",{id:"自定义选项样式",tabindex:"-1"},"自定义选项样式",-1)),t[22]||(t[22]=l("p",null,[P("每个选项支持单独的 "),l("code",null,"className"),P(" 与 "),l("code",null,"style"),P("。")],-1)),s(o,{title:"自定义选项样式",source:p(qt)},{default:I(()=>[s(wt)]),_:1},8,["source"]),t[23]||(t[23]=l("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[24]||(t[24]=l("p",null,[P("通过 "),l("code",null,"classNames"),P(" / "),l("code",null,"styles"),P(" 对 root、group、thumb、item 等子元素做细粒度样式控制。")],-1)),s(o,{title:"语义化 className 与 style",source:p(St)},{default:I(()=>[s(xt)]),_:1},8,["source"]),t[25]||(t[25]=ct(`<h2 id="api" tabindex="-1">API</h2><h3 id="segmented-props" tabindex="-1">Segmented Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容</td><td><code>string[] | number[] | SegmentedOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>将宽度调整为父元素宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;large&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>vertical</td><td>垂直方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>orientation</td><td>方向(优先级高于 vertical)</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;default&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>name</td><td>为所有 radio input 设置 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SegmentedClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SegmentedStyles</code></td><td>-</td></tr></tbody></table><h3 id="segmentedoption" tabindex="-1">SegmentedOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>label</td><td>选项标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>icon</td><td>选项图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>HTML title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tooltip</td><td>提示信息</td><td><code>string | Omit&lt;TooltipProps, &#39;title&#39;&gt;</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="segmented-events" tabindex="-1">Segmented Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对分段控制器的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">SegmentedClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点</span>
  group<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选项组容器</span>
  thumb<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 动画滑块</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选项（label 元素）</span>
  itemSelected<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选中状态的选项</span>
  itemDisabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 禁用状态的选项</span>
  itemInput<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 隐藏的 radio input</span>
  itemLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选项内容包裹层</span>
  itemIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选项图标</span>
  itemText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选项文本</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SegmentedStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  group<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  thumb<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemSelected<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemDisabled<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemInput<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemLabel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemText<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-segmented<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-segmented-group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.group / styles.group 应用于此 --&gt;</span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-segmented-thumb<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.thumb / styles.thumb 应用于此（动画滑块） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-segmented-item hmfw-segmented-item-selected<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
      <span class="token comment">&lt;!-- ↑ 选中状态时叠加 classNames.itemSelected / styles.itemSelected --&gt;</span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-segmented-item-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.itemInput / styles.itemInput 应用于此（隐藏的 radio） --&gt;</span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-segmented-item-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.itemLabel / styles.itemLabel 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-segmented-item-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.itemIcon / styles.itemIcon 应用于此 --&gt;</span>
          <span class="token comment">&lt;!-- 图标内容 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-segmented-item-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.itemText / styles.itemText 应用于此 --&gt;</span>
          选项文本
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-segmented-item hmfw-segmented-item-disabled<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ 禁用状态时叠加 classNames.itemDisabled / styles.itemDisabled --&gt;</span>
      <span class="token comment">&lt;!-- ... --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义根容器和滑块 --&gt;
  &lt;Segmented
    v-model:value=&quot;value&quot;
    :options=&quot;[&#39;选项一&#39;, &#39;选项二&#39;, &#39;选项三&#39;]&quot;
    :class-names=&quot;{
      root: &#39;custom-root&#39;,
      thumb: &#39;custom-thumb&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义选项状态 --&gt;
  &lt;Segmented
    v-model:value=&quot;value&quot;
    :options=&quot;options&quot;
    :class-names=&quot;{
      item: &#39;custom-item&#39;,
      itemSelected: &#39;custom-item-selected&#39;,
      itemDisabled: &#39;custom-item-disabled&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义图标和文本 --&gt;
  &lt;Segmented
    v-model:value=&quot;value&quot;
    :options=&quot;iconOptions&quot;
    :class-names=&quot;{
      itemIcon: &#39;custom-icon&#39;,
      itemText: &#39;custom-text&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import { Segmented } from &#39;ant-design-hmfw&#39;

const value = ref(&#39;选项一&#39;)
const options = [
  { value: &#39;option1&#39;, label: &#39;启用选项&#39; },
  { value: &#39;option2&#39;, label: &#39;禁用选项&#39;, disabled: true },
]
&lt;/script&gt;

&lt;style scoped&gt;
:deep(.custom-root) {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border: 2px solid #1677ff;
  padding: 4px;
}

:deep(.custom-thumb) {
  background: linear-gradient(135deg, #1677ff 0%, #4096ff 100%);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.3);
}

:deep(.custom-item-selected) {
  color: #ffffff;
  font-weight: 600;
}

:deep(.custom-item-disabled) {
  opacity: 0.4;
  text-decoration: line-through;
}

:deep(.custom-icon) {
  font-size: 18px;
  filter: drop-shadow(0 0 2px rgba(22, 119, 255, 0.4));
}

:deep(.custom-text) {
  font-weight: 500;
  letter-spacing: 0.5px;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 渐变背景和自定义滑块 --&gt;
  &lt;Segmented
    v-model:value=&quot;value&quot;
    :options=&quot;[&#39;Morning&#39;, &#39;Afternoon&#39;, &#39;Evening&#39;]&quot;
    :styles=&quot;{
      root: {
        borderRadius: &#39;16px&#39;,
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        border: &#39;none&#39;,
        padding: &#39;4px&#39;,
      },
      thumb: {
        borderRadius: &#39;12px&#39;,
        background: &#39;#ffffff&#39;,
        boxShadow: &#39;0 2px 8px rgba(0,0,0,0.15)&#39;,
      },
      itemText: {
        color: &#39;#ffffff&#39;,
        fontWeight: 500,
      },
    }&quot;
  /&gt;

  &lt;!-- 组合使用（垂直模式） --&gt;
  &lt;Segmented
    v-model:value=&quot;value&quot;
    :options=&quot;iconOptions&quot;
    vertical
    :styles=&quot;{
      itemIcon: { fontSize: &#39;20px&#39; },
      itemLabel: { padding: &#39;8px 16px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>itemSelected</code> 和 <code>itemDisabled</code> 是条件节点，仅在选项处于对应状态时应用</li><li>选项的状态类名会<strong>叠加</strong>在 <code>item</code> 上：<code>classNames.item</code> + <code>classNames.itemSelected</code>（选中时）或 <code>classNames.itemDisabled</code>（禁用时）</li><li>选项的状态样式会<strong>合并</strong>：<code>styles.item</code> + <code>styles.itemSelected</code>（选中时）或 <code>styles.itemDisabled</code>（禁用时），后者优先</li><li><code>thumb</code> 是动画滑块，建议自定义其背景色、圆角、阴影等样式以匹配主题</li><li>每个选项还支持独立的 <code>className</code> 和 <code>style</code> 属性（见 <code>SegmentedOption</code> 配置），这些样式会与 <code>classNames.item</code> / <code>styles.item</code> 合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Segmented 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>浮层背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-bg-layout</code></td><td>布局背景色</td><td><code>#f5f5f5</code></td></tr><tr><td><code>--hmfw-color-fill</code></td><td>填充色</td><td><code>rgba(0,0,0,0.15)</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-label</code></td><td>标签文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-border-radius-xs</code></td><td>超小圆角</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-control-height</code></td><td>控件高度</td><td><code>32px</code></td></tr><tr><td><code>--hmfw-control-height-sm</code></td><td>小号控件高度</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-control-height-lg</code></td><td>大号控件高度</td><td><code>40px</code></td></tr><tr><td><code>--hmfw-control-padding-horizontal</code></td><td>控件水平内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-control-padding-horizontal-sm</code></td><td>小号控件内边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-line-width-bold</code></td><td>粗线宽</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-margin-sm</code></td><td>小号外边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-duration-slow</code></td><td>慢速动画时长</td><td><code>0.3s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,25))])}}};export{Jt as default};
