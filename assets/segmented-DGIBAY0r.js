import{d as w,u as nn,x as tn,m as G,k as sn,n as R,y as an,c as a,r,a as M,B as en,o as q,b as $,F as on,e as i,f as l,A as ln,q as V,v as m,_ as pn,h as cn,w as N,g as B,i as un}from"./index-ChNLT6yU.js";import{c as U}from"./cls-S9IiI6wd.js";import{T as dn}from"./Tooltip-dvVnn5TX.js";import{H as L}from"./HomeOutlined-CkeOUIY9.js";import{S as P}from"./SettingOutlined-FMLqWF9l.js";import{U as I}from"./UserOutlined-BOtefll9.js";import{B as rn,P as mn}from"./PictureOutlined-B6_SXvTP.js";import"./Trigger-D8zctwaG.js";function kn(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!en(t)}const k=w({name:"Segmented",props:{value:[String,Number],defaultValue:[String,Number],options:{type:Array,default:()=>[]},disabled:Boolean,block:Boolean,size:{type:String,default:"middle"},vertical:Boolean,orientation:String,shape:{type:String,default:"default"},name:String,classNames:Object,styles:Object},emits:["update:value","change"],setup(t,{emit:p}){var j;const o=nn("segmented"),v=tn(),n=r(),e=r(),h=M(()=>t.options.map(s=>typeof s=="object"?s:{label:String(s),value:s})),S=t.defaultValue??t.value??((j=h.value[0])==null?void 0:j.value),C=r(S),A=M(()=>t.value!==void 0),c=M(()=>A.value?t.value:C.value);G(()=>t.value,s=>{s!==void 0&&(C.value=s)});const u=M(()=>t.orientation?t.orientation==="vertical":t.vertical),K=M(()=>t.name||`segmented-${Math.random().toString(36).slice(2,9)}`),E=(s,y)=>{t.disabled||s.disabled||(C.value=s.value,p("update:value",s.value),p("change",s.value),R(()=>W(y)))},X=(s,y,g)=>{var O;if(t.disabled||y.disabled)return;const f=h.value,d=!u.value,x=v.value.direction==="rtl";let b=-1;if(d&&s.key==="ArrowRight"||!d&&s.key==="ArrowDown"?b=x&&d?g-1:g+1:(d&&s.key==="ArrowLeft"||!d&&s.key==="ArrowUp")&&(b=x&&d?g+1:g-1),b>=0&&b<f.length){s.preventDefault();const D=f[b];if(!D.disabled){E(D,b);const z=(O=n.value)==null?void 0:O.querySelectorAll('input[type="radio"]');z!=null&&z[b]&&z[b].focus()}}},W=s=>{if(!e.value||!n.value)return;const g=n.value.querySelectorAll(`.${o}-item`)[s];if(!g)return;const f=n.value.getBoundingClientRect(),d=g.getBoundingClientRect();if(u.value){const x=d.top-f.top+n.value.scrollTop;e.value.style.transform=`translateY(${x}px)`,e.value.style.height=`${d.height}px`,e.value.style.width="100%"}else{const x=d.left-f.left+n.value.scrollLeft;e.value.style.transform=`translateX(${x}px)`,e.value.style.width=`${d.width}px`,e.value.style.height="100%"}},_=()=>{const s=h.value.findIndex(y=>y.value===c.value);s>=0&&W(s)};let T=null;sn(()=>{_(),n.value&&typeof ResizeObserver<"u"&&(T=new ResizeObserver(()=>{R(()=>_())}),T.observe(n.value))}),an(()=>{T&&(T.disconnect(),T=null)}),G([c,h,u],()=>{R(()=>_())});const J=s=>{var f,d,x,b,O,D;const y=!!s.icon,g=s.label!==void 0&&s.label!==null;return a("div",{class:U(`${o}-item-label`,(f=t.classNames)==null?void 0:f.itemLabel,{[`${o}-item-icon-only`]:y&&!g}),style:(d=t.styles)==null?void 0:d.itemLabel},[y&&a("span",{class:U(`${o}-item-icon`,(x=t.classNames)==null?void 0:x.itemIcon),style:(b=t.styles)==null?void 0:b.itemIcon},[s.icon]),g&&a("span",{class:U(`${o}-item-text`,(O=t.classNames)==null?void 0:O.itemText),style:(D=t.styles)==null?void 0:D.itemText},[s.label])])},Z=(s,y)=>{var x,b,O,D,z,Y,F,Q;const g=s.value===c.value,f=t.disabled||s.disabled,d=a("label",{key:s.value,class:U(`${o}-item`,s.className,(x=t.classNames)==null?void 0:x.item,{[`${o}-item-selected`]:g,[`${o}-item-disabled`]:f},g&&((b=t.classNames)==null?void 0:b.itemSelected),f&&((O=t.classNames)==null?void 0:O.itemDisabled)),style:{...s.style,...(D=t.styles)==null?void 0:D.item,...g?(z=t.styles)==null?void 0:z.itemSelected:{},...f?(Y=t.styles)==null?void 0:Y.itemDisabled:{}},title:s.title},[a("input",{type:"radio",class:U(`${o}-item-input`,(F=t.classNames)==null?void 0:F.itemInput),style:(Q=t.styles)==null?void 0:Q.itemInput,name:K.value,value:s.value,checked:g,disabled:f,onChange:()=>E(s,y),onKeydown:H=>X(H,s,y)},null),J(s)]);if(s.tooltip){const H=typeof s.tooltip=="string"?{title:s.tooltip}:s.tooltip;return a(dn,H,kn(d)?d:{default:()=>[d]})}return d};return()=>{var s,y,g,f,d,x;return a("div",{class:U(o,(s=t.classNames)==null?void 0:s.root,`${o}-${t.size}`,{[`${o}-disabled`]:t.disabled,[`${o}-block`]:t.block,[`${o}-vertical`]:u.value,[`${o}-rtl`]:v.value.direction==="rtl",[`${o}-shape-${t.shape}`]:t.shape==="round"}),style:(y=t.styles)==null?void 0:y.root},[a("div",{ref:n,class:U(`${o}-group`,(g=t.classNames)==null?void 0:g.group),style:(f=t.styles)==null?void 0:f.group},[a("div",{ref:e,class:U(`${o}-thumb`,(d=t.classNames)==null?void 0:d.thumb),style:(x=t.styles)==null?void 0:x.thumb},null),h.value.map((b,O)=>Z(b,O))])])}}}),vn=w({__name:"SegmentedBasic",setup(t){const p=r("Daily"),o=["Daily","Weekly","Monthly","Quarterly","Yearly"];return(v,n)=>(q(),$(on,null,[a(i(k),{value:p.value,"onUpdate:value":n[0]||(n[0]=e=>p.value=e),options:o},null,8,["value"]),l("p",null,"当前选中："+ln(p.value),1)],64))}}),gn=`<template>
  <Segmented v-model:value="value" :options="options" />
  <p>当前选中：{{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
<\/script>
`,fn=w({__name:"SegmentedBlock",setup(t){const p=r("Map"),o=["Map","Transit","Satellite"];return(v,n)=>(q(),V(i(k),{value:p.value,"onUpdate:value":n[0]||(n[0]=e=>p.value=e),options:o,block:""},null,8,["value"]))}}),bn=`<template>
  <Segmented v-model:value="value" :options="options" block />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

const value = ref('Map')
const options = ['Map', 'Transit', 'Satellite']
<\/script>
`,hn={style:{display:"flex","flex-direction":"column",gap:"24px"}},yn=w({__name:"SegmentedClassNames",setup(t){const p=r("选项一"),o=r("option1"),v=[{value:"option1",label:"启用选项"},{value:"option2",label:"另一选项"},{value:"option3",label:"禁用选项",disabled:!0}],n=r("list"),e=[{value:"list",label:"列表",icon:m(L,{class:"hmfw-icon"})},{value:"grid",label:"网格",icon:m(I,{class:"hmfw-icon"})}],h=r("Morning"),S=r("home"),C=[{value:"home",icon:m(L,{class:"hmfw-icon"})},{value:"user",icon:m(I,{class:"hmfw-icon"})},{value:"settings",icon:m(P,{class:"hmfw-icon"})}];return(A,c)=>(q(),$("div",hn,[l("div",null,[c[5]||(c[5]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器与动画滑块：",-1)),a(i(k),{value:p.value,"onUpdate:value":c[0]||(c[0]=u=>p.value=u),options:["选项一","选项二","选项三"],"class-names":{root:"custom-root",thumb:"custom-thumb"}},null,8,["value"])]),l("div",null,[c[6]||(c[6]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义选项与状态样式：",-1)),a(i(k),{value:o.value,"onUpdate:value":c[1]||(c[1]=u=>o.value=u),options:v,"class-names":{item:"custom-item",itemSelected:"custom-item-selected",itemDisabled:"custom-item-disabled"}},null,8,["value"])]),l("div",null,[c[7]||(c[7]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图标与文本样式：",-1)),a(i(k),{value:n.value,"onUpdate:value":c[2]||(c[2]=u=>n.value=u),options:e,"class-names":{itemIcon:"custom-icon",itemText:"custom-text"}},null,8,["value"])]),l("div",null,[c[8]||(c[8]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),a(i(k),{value:h.value,"onUpdate:value":c[3]||(c[3]=u=>h.value=u),options:["Morning","Afternoon","Evening"],styles:{root:{borderRadius:"16px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",padding:"4px"},thumb:{borderRadius:"12px",background:"#ffffff",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},itemText:{color:"#ffffff",fontWeight:500}}},null,8,["value"])]),l("div",null,[c[9]||(c[9]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用（垂直模式）：",-1)),a(i(k),{value:S.value,"onUpdate:value":c[4]||(c[4]=u=>S.value=u),options:C,vertical:"","class-names":{root:"custom-vertical-root",item:"custom-vertical-item"},styles:{itemIcon:{fontSize:"20px"},itemLabel:{padding:"8px 16px"}}},null,8,["value"])])]))}}),xn=pn(yn,[["__scopeId","data-v-f3fb3570"]]),Sn=`<template>
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
import { Segmented } from '@hmfw/ant-design'
import { HomeOutlined, UserOutlined, SettingOutlined } from '@hmfw/icons'

const value1 = ref('选项一')

const value2 = ref('option1')
const options2 = [
  { value: 'option1', label: '启用选项' },
  { value: 'option2', label: '另一选项' },
  { value: 'option3', label: '禁用选项', disabled: true },
]

const value3 = ref('list')
const options3 = [
  { value: 'list', label: '列表', icon: h(HomeOutlined, { class: 'hmfw-icon' }) },
  { value: 'grid', label: '网格', icon: h(UserOutlined, { class: 'hmfw-icon' }) },
]

const value4 = ref('Morning')

const value5 = ref('home')
const options5 = [
  { value: 'home', icon: h(HomeOutlined, { class: 'hmfw-icon' }) },
  { value: 'user', icon: h(UserOutlined, { class: 'hmfw-icon' }) },
  { value: 'settings', icon: h(SettingOutlined, { class: 'hmfw-icon' }) },
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
`,wn=w({__name:"SegmentedCustomStyle",setup(t){const p=r("apple"),o=[{value:"apple",label:"苹果",style:{color:"#cf1322",fontWeight:600}},{value:"orange",label:"橙子",style:{color:"#d46b08"}},{value:"pear",label:"梨",className:"demo-segmented-pear"}];return(v,n)=>(q(),V(i(k),{value:p.value,"onUpdate:value":n[0]||(n[0]=e=>p.value=e),options:o},null,8,["value"]))}}),qn=`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

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
`,On=w({__name:"SegmentedDisabled",setup(t){const p=r("Daily"),o=[{value:"Daily",label:"每日"},{value:"Weekly",label:"每周",disabled:!0},{value:"Monthly",label:"每月"}];return(v,n)=>(q(),V(i(k),{value:p.value,"onUpdate:value":n[0]||(n[0]=e=>p.value=e),options:o},null,8,["value"]))}}),Nn=`<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

const value = ref('Daily')
const options = [
  { value: 'Daily', label: '每日' },
  { value: 'Weekly', label: '每周', disabled: true },
  { value: 'Monthly', label: '每月' },
]
<\/script>
`,Dn={style:{display:"flex","flex-direction":"column",gap:"16px"}},Un=w({__name:"SegmentedIconLabel",setup(t){const p=r("list"),o=[{value:"list",label:"列表",icon:m(rn,{class:"hmfw-icon"})},{value:"grid",label:"网格",icon:m(mn,{class:"hmfw-icon"})}];return(v,n)=>(q(),$("div",Dn,[a(i(k),{value:p.value,"onUpdate:value":n[0]||(n[0]=e=>p.value=e),options:o},null,8,["value"]),a(i(k),{value:p.value,"onUpdate:value":n[1]||(n[1]=e=>p.value=e),options:o,size:"large"},null,8,["value"]),a(i(k),{value:p.value,"onUpdate:value":n[2]||(n[2]=e=>p.value=e),options:o,size:"small"},null,8,["value"])]))}}),$n=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value" :options="options" />
    <Segmented v-model:value="value" :options="options" size="large" />
    <Segmented v-model:value="value" :options="options" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { PictureOutlined, BarsOutlined } from '@hmfw/icons'

const value = ref('list')
// 图标 + 文本同时存在的布局
const options = [
  { value: 'list', label: '列表', icon: h(BarsOutlined, { class: 'hmfw-icon' }) },
  { value: 'grid', label: '网格', icon: h(PictureOutlined, { class: 'hmfw-icon' }) },
]
<\/script>
`,Cn={style:{display:"flex","flex-direction":"column",gap:"16px"}},zn=w({__name:"SegmentedShape",setup(t){const p=r("light"),o=[{label:"Light",value:"light",icon:m(I,{class:"hmfw-icon"})},{label:"Dark",value:"dark",icon:m(P,{class:"hmfw-icon"})}],v=r("Daily"),n=["Daily","Weekly","Monthly"];return(e,h)=>(q(),$("div",Cn,[a(i(k),{value:p.value,"onUpdate:value":h[0]||(h[0]=S=>p.value=S),options:o,shape:"round"},null,8,["value"]),a(i(k),{value:v.value,"onUpdate:value":h[1]||(h[1]=S=>v.value=S),options:n,shape:"round",size:"large"},null,8,["value"])]))}}),In=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value1" :options="options1" shape="round" />
    <Segmented v-model:value="value2" :options="options2" shape="round" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined } from '@hmfw/icons'

const value1 = ref('light')
const options1 = [
  { label: 'Light', value: 'light', icon: h(UserOutlined, { class: 'hmfw-icon' }) },
  { label: 'Dark', value: 'dark', icon: h(SettingOutlined, { class: 'hmfw-icon' }) },
]

const value2 = ref('Daily')
const options2 = ['Daily', 'Weekly', 'Monthly']
<\/script>
`,Bn={style:{display:"flex","flex-direction":"column",gap:"16px"}},Pn=w({__name:"SegmentedSize",setup(t){const p=r("Daily"),o=["Daily","Weekly","Monthly","Quarterly","Yearly"],v=r("list"),n=[{label:"List",value:"list",icon:m(I,{class:"hmfw-icon"})},{label:"Grid",value:"grid",icon:m(P,{class:"hmfw-icon"})}],e=r("home"),h=[{value:"home",icon:m(L,{class:"hmfw-icon"}),tooltip:"Home"},{value:"user",icon:m(I,{class:"hmfw-icon"}),tooltip:"User"},{value:"settings",icon:m(P,{class:"hmfw-icon"}),tooltip:"Settings"}],S=r("a"),C=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}];return(A,c)=>(q(),$("div",Bn,[a(i(k),{value:p.value,"onUpdate:value":c[0]||(c[0]=u=>p.value=u),options:o},null,8,["value"]),a(i(k),{value:v.value,"onUpdate:value":c[1]||(c[1]=u=>v.value=u),options:n},null,8,["value"]),a(i(k),{value:e.value,"onUpdate:value":c[2]||(c[2]=u=>e.value=u),options:h,size:"large"},null,8,["value"]),a(i(k),{value:S.value,"onUpdate:value":c[3]||(c[3]=u=>S.value=u),options:C,size:"small"},null,8,["value"])]))}}),Tn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value1" :options="options1" />
    <Segmented v-model:value="value2" :options="options2" />
    <Segmented v-model:value="value3" :options="options3" size="large" />
    <Segmented v-model:value="value4" :options="options4" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined, HomeOutlined } from '@hmfw/icons'

const value1 = ref('Daily')
const options1 = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']

const value2 = ref('list')
const options2 = [
  { label: 'List', value: 'list', icon: h(UserOutlined, { class: 'hmfw-icon' }) },
  { label: 'Grid', value: 'grid', icon: h(SettingOutlined, { class: 'hmfw-icon' }) },
]

const value3 = ref('home')
const options3 = [
  { value: 'home', icon: h(HomeOutlined, { class: 'hmfw-icon' }), tooltip: 'Home' },
  { value: 'user', icon: h(UserOutlined, { class: 'hmfw-icon' }), tooltip: 'User' },
  { value: 'settings', icon: h(SettingOutlined, { class: 'hmfw-icon' }), tooltip: 'Settings' },
]

const value4 = ref('a')
const options4 = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]
<\/script>
`,Mn={style:{display:"flex",gap:"16px"}},Ln=w({__name:"SegmentedVertical",setup(t){const p=r("home"),o=[{value:"home",icon:m(L,{class:"hmfw-icon"})},{value:"user",icon:m(I,{class:"hmfw-icon"})},{value:"settings",icon:m(P,{class:"hmfw-icon"})}];return(v,n)=>(q(),$("div",Mn,[a(i(k),{value:p.value,"onUpdate:value":n[0]||(n[0]=e=>p.value=e),options:o,vertical:""},null,8,["value"])]))}}),An=`<template>
  <div style="display: flex; gap: 16px">
    <Segmented v-model:value="value" :options="options" vertical />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined, HomeOutlined } from '@hmfw/icons'

const value = ref('home')
const options = [
  { value: 'home', icon: h(HomeOutlined, { class: 'hmfw-icon' }) },
  { value: 'user', icon: h(UserOutlined, { class: 'hmfw-icon' }) },
  { value: 'settings', icon: h(SettingOutlined, { class: 'hmfw-icon' }) },
]
<\/script>
`,_n={style:{display:"flex","flex-direction":"column",gap:"16px"}},Hn=w({__name:"SegmentedWithIcon",setup(t){const p=r("home"),o=[{value:"home",icon:m(L,{class:"hmfw-icon"}),tooltip:"Home Page"},{value:"user",icon:m(I,{class:"hmfw-icon"}),tooltip:"User Profile"},{value:"settings",icon:m(P,{class:"hmfw-icon"}),tooltip:"Settings"}];return(v,n)=>(q(),$("div",_n,[a(i(k),{value:p.value,"onUpdate:value":n[0]||(n[0]=e=>p.value=e),options:o},null,8,["value"])]))}}),Rn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined, HomeOutlined } from '@hmfw/icons'

const value = ref('home')
const options = [
  { value: 'home', icon: h(HomeOutlined, { class: 'hmfw-icon' }), tooltip: 'Home Page' },
  { value: 'user', icon: h(UserOutlined, { class: 'hmfw-icon' }), tooltip: 'User Profile' },
  { value: 'settings', icon: h(SettingOutlined, { class: 'hmfw-icon' }), tooltip: 'Settings' },
]
<\/script>
`,Vn={class:"markdown-body"},Xn={__name:"segmented",setup(t,{expose:p}){return p({frontmatter:{}}),(v,n)=>{const e=cn("DemoBlock");return q(),$("div",Vn,[n[0]||(n[0]=l("h1",{id:"segmented-分段控制器",tabindex:"-1"},"Segmented 分段控制器",-1)),n[1]||(n[1]=l("p",null,"分段控制器。",-1)),n[2]||(n[2]=l("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=l("ul",null,[l("li",null,"用于展示多个选项并允许用户选择其中单个选项"),l("li",null,"当切换选中选项时,关联区域的内容会发生变化")],-1)),n[4]||(n[4]=l("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=l("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=l("p",null,"基本分段控制器。",-1)),a(e,{title:"基础用法",source:i(gn)},{default:N(()=>[a(vn)]),_:1},8,["source"]),n[7]||(n[7]=l("h3",{id:"block-模式",tabindex:"-1"},"Block 模式",-1)),n[8]||(n[8]=l("p",null,"block 属性使其适合父元素宽度。",-1)),a(e,{title:"Block 模式",source:i(bn)},{default:N(()=>[a(fn)]),_:1},8,["source"]),n[9]||(n[9]=l("h3",{id:"禁用",tabindex:"-1"},"禁用",-1)),n[10]||(n[10]=l("p",null,"禁用某些选项。",-1)),a(e,{title:"禁用",source:i(Nn)},{default:N(()=>[a(On)]),_:1},8,["source"]),n[11]||(n[11]=l("h3",{id:"三种尺寸",tabindex:"-1"},"三种尺寸",-1)),n[12]||(n[12]=l("p",null,"提供 large、middle、small 三种尺寸。",-1)),a(e,{title:"三种尺寸",source:i(Tn)},{default:N(()=>[a(Pn)]),_:1},8,["source"]),n[13]||(n[13]=l("h3",{id:"垂直方向",tabindex:"-1"},"垂直方向",-1)),n[14]||(n[14]=l("p",null,"垂直布局的分段控制器。",-1)),a(e,{title:"垂直方向",source:i(An)},{default:N(()=>[a(Ln)]),_:1},8,["source"]),n[15]||(n[15]=l("h3",{id:"圆角形状",tabindex:"-1"},"圆角形状",-1)),n[16]||(n[16]=l("p",null,"胶囊型的分段控制器。",-1)),a(e,{title:"圆角形状",source:i(In)},{default:N(()=>[a(zn)]),_:1},8,["source"]),n[17]||(n[17]=l("h3",{id:"带图标",tabindex:"-1"},"带图标",-1)),n[18]||(n[18]=l("p",null,"在选项中使用图标。",-1)),a(e,{title:"带图标",source:i(Rn)},{default:N(()=>[a(Hn)]),_:1},8,["source"]),n[19]||(n[19]=l("h3",{id:"图标--文本",tabindex:"-1"},"图标 + 文本",-1)),n[20]||(n[20]=l("p",null,"图标与文本同时存在时自动优化布局，间距统一。",-1)),a(e,{title:"图标 + 文本",source:i($n)},{default:N(()=>[a(Un)]),_:1},8,["source"]),n[21]||(n[21]=l("h3",{id:"自定义选项样式",tabindex:"-1"},"自定义选项样式",-1)),n[22]||(n[22]=l("p",null,[B("每个选项支持单独的 "),l("code",null,"className"),B(" 与 "),l("code",null,"style"),B("。")],-1)),a(e,{title:"自定义选项样式",source:i(qn)},{default:N(()=>[a(wn)]),_:1},8,["source"]),n[23]||(n[23]=l("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[24]||(n[24]=l("p",null,[B("通过 "),l("code",null,"classNames"),B(" / "),l("code",null,"styles"),B(" 对 root、group、thumb、item 等子元素做细粒度样式控制。")],-1)),a(e,{title:"语义化 className 与 style",source:i(Sn)},{default:N(()=>[a(xn)]),_:1},8,["source"]),n[25]||(n[25]=un(`<h2 id="api" tabindex="-1">API</h2><h3 id="segmented-props" tabindex="-1">Segmented Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容</td><td><code>string[] | number[] | SegmentedOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>将宽度调整为父元素宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;large&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>vertical</td><td>垂直方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>orientation</td><td>方向(优先级高于 vertical)</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;default&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>name</td><td>为所有 radio input 设置 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SegmentedClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SegmentedStyles</code></td><td>-</td></tr></tbody></table><h3 id="segmentedoption" tabindex="-1">SegmentedOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>label</td><td>选项标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>icon</td><td>选项图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>HTML title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tooltip</td><td>提示信息</td><td><code>string | Omit&lt;TooltipProps, &#39;title&#39;&gt;</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="segmented-events" tabindex="-1">Segmented Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对分段控制器的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义根容器和滑块 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Segmented</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;选项一&#39;, &#39;选项二&#39;, &#39;选项三&#39;]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;custom-root&#39;,
      thumb: &#39;custom-thumb&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义选项状态 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Segmented</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      item: &#39;custom-item&#39;,
      itemSelected: &#39;custom-item-selected&#39;,
      itemDisabled: &#39;custom-item-disabled&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义图标和文本 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Segmented</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      itemIcon: &#39;custom-icon&#39;,
      itemText: &#39;custom-text&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Segmented <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>

<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;选项一&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;option1&#39;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&#39;启用选项&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token string">&#39;option2&#39;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&#39;禁用选项&#39;</span><span class="token punctuation">,</span> disabled<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.custom-root)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #f0f5ff 0%<span class="token punctuation">,</span> #e6f4ff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #1677ff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-thumb)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #1677ff 0%<span class="token punctuation">,</span> #4096ff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>22<span class="token punctuation">,</span> 119<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-item-selected)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-item-disabled)</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.4<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> line-through<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-icon)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 0 2px <span class="token function">rgba</span><span class="token punctuation">(</span>22<span class="token punctuation">,</span> 119<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-text)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 0.5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 渐变背景和自定义滑块 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Segmented</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&#39;Morning&#39;, &#39;Afternoon&#39;, &#39;Evening&#39;]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
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
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用（垂直模式） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Segmented</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">vertical</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      itemIcon: { fontSize: &#39;20px&#39; },
      itemLabel: { padding: &#39;8px 16px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>itemSelected</code> 和 <code>itemDisabled</code> 是条件节点，仅在选项处于对应状态时应用</li><li>选项的状态类名会<strong>叠加</strong>在 <code>item</code> 上：<code>classNames.item</code> + <code>classNames.itemSelected</code>（选中时）或 <code>classNames.itemDisabled</code>（禁用时）</li><li>选项的状态样式会<strong>合并</strong>：<code>styles.item</code> + <code>styles.itemSelected</code>（选中时）或 <code>styles.itemDisabled</code>（禁用时），后者优先</li><li><code>thumb</code> 是动画滑块，建议自定义其背景色、圆角、阴影等样式以匹配主题</li><li>每个选项还支持独立的 <code>className</code> 和 <code>style</code> 属性（见 <code>SegmentedOption</code> 配置），这些样式会与 <code>classNames.item</code> / <code>styles.item</code> 合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Segmented 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>浮层背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-bg-layout</code></td><td>布局背景色</td><td><code>#f5f5f5</code></td></tr><tr><td><code>--hmfw-color-fill</code></td><td>填充色</td><td><code>rgba(0,0,0,0.15)</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-label</code></td><td>标签文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-border-radius-xs</code></td><td>超小圆角</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-control-height</code></td><td>控件高度</td><td><code>32px</code></td></tr><tr><td><code>--hmfw-control-height-sm</code></td><td>小号控件高度</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-control-height-lg</code></td><td>大号控件高度</td><td><code>40px</code></td></tr><tr><td><code>--hmfw-control-padding-horizontal</code></td><td>控件水平内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-control-padding-horizontal-sm</code></td><td>小号控件内边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-line-width-bold</code></td><td>粗线宽</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-margin-sm</code></td><td>小号外边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-duration-slow</code></td><td>慢速动画时长</td><td><code>0.3s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,25))])}}};export{Xn as default};
