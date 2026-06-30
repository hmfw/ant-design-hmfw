import{o as w,O as tt,M as et,R as K,x as nt,t as R,w as st,n as s,E as r,f as M,r as at,A as q,k as $,F as ot,L as c,h as l,K as lt,i as E,p as m,_ as dt,H as it,S as N,m as B,l as ct}from"./index-7wnt1Cyk.js";import{c as U}from"./cls-S9IiI6wd.js";import{T as pt}from"./Tooltip-UMwxxvHk.js";import{H as L}from"./HomeOutlined-CwE40qVY.js";import{U as I}from"./UserOutlined-nHnAGjJt.js";import{S as P}from"./SettingOutlined-0h7DWPmT.js";import{B as ut,P as rt}from"./PictureOutlined-CJM_lX74.js";import"./Trigger-CiLr3mxg.js";function mt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!at(e)}const v=w({name:"Segmented",props:{value:[String,Number],defaultValue:[String,Number],options:{type:Array,default:()=>[]},disabled:Boolean,block:Boolean,size:{type:String,default:"middle"},vertical:Boolean,orientation:String,shape:{type:String,default:"default"},name:String,classNames:Object,styles:Object},emits:["update:value","change"],setup(e,{emit:d}){var j;const o=tt("segmented"),g=et(),t=r(),a=r(),h=M(()=>e.options.map(n=>typeof n=="object"?n:{label:String(n),value:n})),S=e.defaultValue??e.value??((j=h.value[0])==null?void 0:j.value),C=r(S),A=M(()=>e.value!==void 0),i=M(()=>A.value?e.value:C.value);K(()=>e.value,n=>{n!==void 0&&(C.value=n)});const p=M(()=>e.orientation?e.orientation==="vertical":e.vertical),G=M(()=>e.name||`segmented-${Math.random().toString(36).slice(2,9)}`),V=(n,y)=>{e.disabled||n.disabled||(C.value=n.value,d("update:value",n.value),d("change",n.value),R(()=>W(y)))},X=(n,y,f)=>{var O;if(e.disabled||y.disabled)return;const b=h.value,u=!p.value,x=g.value.direction==="rtl";let k=-1;if(u&&n.key==="ArrowRight"||!u&&n.key==="ArrowDown"?k=x&&u?f-1:f+1:(u&&n.key==="ArrowLeft"||!u&&n.key==="ArrowUp")&&(k=x&&u?f+1:f-1),k>=0&&k<b.length){n.preventDefault();const D=b[k];if(!D.disabled){V(D,k);const z=(O=t.value)==null?void 0:O.querySelectorAll('input[type="radio"]');z!=null&&z[k]&&z[k].focus()}}},W=n=>{if(!a.value||!t.value)return;const f=t.value.querySelectorAll(`.${o}-item`)[n];if(!f)return;const b=t.value.getBoundingClientRect(),u=f.getBoundingClientRect();if(p.value){const x=u.top-b.top+t.value.scrollTop;a.value.style.transform=`translateY(${x}px)`,a.value.style.height=`${u.height}px`,a.value.style.width="100%"}else{const x=u.left-b.left+t.value.scrollLeft;a.value.style.transform=`translateX(${x}px)`,a.value.style.width=`${u.width}px`,a.value.style.height="100%"}},H=()=>{const n=h.value.findIndex(y=>y.value===i.value);n>=0&&W(n)};let T=null;nt(()=>{H(),t.value&&typeof ResizeObserver<"u"&&(T=new ResizeObserver(()=>{R(()=>H())}),T.observe(t.value))}),st(()=>{T&&(T.disconnect(),T=null)}),K([i,h,p],()=>{R(()=>H())});const J=n=>{var b,u,x,k,O,D;const y=!!n.icon,f=n.label!==void 0&&n.label!==null;return s("div",{class:U(`${o}-item-label`,(b=e.classNames)==null?void 0:b.itemLabel,{[`${o}-item-icon-only`]:y&&!f}),style:(u=e.styles)==null?void 0:u.itemLabel},[y&&s("span",{class:U(`${o}-item-icon`,(x=e.classNames)==null?void 0:x.itemIcon),style:(k=e.styles)==null?void 0:k.itemIcon},[n.icon]),f&&s("span",{class:U(`${o}-item-text`,(O=e.classNames)==null?void 0:O.itemText),style:(D=e.styles)==null?void 0:D.itemText},[n.label])])},Z=(n,y)=>{var x,k,O,D,z,Y,F,Q;const f=n.value===i.value,b=e.disabled||n.disabled,u=s("label",{key:n.value,class:U(`${o}-item`,n.className,(x=e.classNames)==null?void 0:x.item,{[`${o}-item-selected`]:f,[`${o}-item-disabled`]:b},f&&((k=e.classNames)==null?void 0:k.itemSelected),b&&((O=e.classNames)==null?void 0:O.itemDisabled)),style:{...n.style,...(D=e.styles)==null?void 0:D.item,...f?(z=e.styles)==null?void 0:z.itemSelected:{},...b?(Y=e.styles)==null?void 0:Y.itemDisabled:{}},title:n.title},[s("input",{type:"radio",class:U(`${o}-item-input`,(F=e.classNames)==null?void 0:F.itemInput),style:(Q=e.styles)==null?void 0:Q.itemInput,name:G.value,value:n.value,checked:f,disabled:b,onChange:()=>V(n,y),onKeydown:_=>X(_,n,y)},null),J(n)]);if(n.tooltip){const _=typeof n.tooltip=="string"?{title:n.tooltip}:n.tooltip;return s(pt,_,mt(u)?u:{default:()=>[u]})}return u};return()=>{var n,y,f,b,u,x;return s("div",{class:U(o,(n=e.classNames)==null?void 0:n.root,`${o}-${e.size}`,{[`${o}-disabled`]:e.disabled,[`${o}-block`]:e.block,[`${o}-vertical`]:p.value,[`${o}-rtl`]:g.value.direction==="rtl",[`${o}-shape-${e.shape}`]:e.shape==="round"}),style:(y=e.styles)==null?void 0:y.root},[s("div",{ref:t,class:U(`${o}-group`,(f=e.classNames)==null?void 0:f.group),style:(b=e.styles)==null?void 0:b.group},[s("div",{ref:a,class:U(`${o}-thumb`,(u=e.classNames)==null?void 0:u.thumb),style:(x=e.styles)==null?void 0:x.thumb},null),h.value.map((k,O)=>Z(k,O))])])}}}),vt=w({__name:"SegmentedBasic",setup(e){const d=r("Daily"),o=["Daily","Weekly","Monthly","Quarterly","Yearly"];return(g,t)=>(q(),$(ot,null,[s(c(v),{value:d.value,"onUpdate:value":t[0]||(t[0]=a=>d.value=a),options:o},null,8,["value"]),l("p",null,"当前选中："+lt(d.value),1)],64))}}),gt=`<template>
  <Segmented v-model:value="value" :options="options" />
  <p>当前选中：{{ value }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

const value = ref('Daily')
const options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']
<\/script>
`,ft=w({__name:"SegmentedBlock",setup(e){const d=r("Map"),o=["Map","Transit","Satellite"];return(g,t)=>(q(),E(c(v),{value:d.value,"onUpdate:value":t[0]||(t[0]=a=>d.value=a),options:o,block:""},null,8,["value"]))}}),bt=`<template>
  <Segmented v-model:value="value" :options="options" block />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from '@hmfw/ant-design'

const value = ref('Map')
const options = ['Map', 'Transit', 'Satellite']
<\/script>
`,kt={style:{display:"flex","flex-direction":"column",gap:"24px"}},ht=w({__name:"SegmentedClassNames",setup(e){const d=r("选项一"),o=r("option1"),g=[{value:"option1",label:"启用选项"},{value:"option2",label:"另一选项"},{value:"option3",label:"禁用选项",disabled:!0}],t=r("list"),a=[{value:"list",label:"列表",icon:m(L,{class:"hmfw-icon"})},{value:"grid",label:"网格",icon:m(I,{class:"hmfw-icon"})}],h=r("Morning"),S=r("home"),C=[{value:"home",icon:m(L,{class:"hmfw-icon"})},{value:"user",icon:m(I,{class:"hmfw-icon"})},{value:"settings",icon:m(P,{class:"hmfw-icon"})}];return(A,i)=>(q(),$("div",kt,[l("div",null,[i[5]||(i[5]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器与动画滑块：",-1)),s(c(v),{value:d.value,"onUpdate:value":i[0]||(i[0]=p=>d.value=p),options:["选项一","选项二","选项三"],"class-names":{root:"custom-root",thumb:"custom-thumb"}},null,8,["value"])]),l("div",null,[i[6]||(i[6]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义选项与状态样式：",-1)),s(c(v),{value:o.value,"onUpdate:value":i[1]||(i[1]=p=>o.value=p),options:g,"class-names":{item:"custom-item",itemSelected:"custom-item-selected",itemDisabled:"custom-item-disabled"}},null,8,["value"])]),l("div",null,[i[7]||(i[7]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图标与文本样式：",-1)),s(c(v),{value:t.value,"onUpdate:value":i[2]||(i[2]=p=>t.value=p),options:a,"class-names":{itemIcon:"custom-icon",itemText:"custom-text"}},null,8,["value"])]),l("div",null,[i[8]||(i[8]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),s(c(v),{value:h.value,"onUpdate:value":i[3]||(i[3]=p=>h.value=p),options:["Morning","Afternoon","Evening"],styles:{root:{borderRadius:"16px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",padding:"4px"},thumb:{borderRadius:"12px",background:"#ffffff",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},itemText:{color:"#ffffff",fontWeight:500}}},null,8,["value"])]),l("div",null,[i[9]||(i[9]=l("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用（垂直模式）：",-1)),s(c(v),{value:S.value,"onUpdate:value":i[4]||(i[4]=p=>S.value=p),options:C,vertical:"","class-names":{root:"custom-vertical-root",item:"custom-vertical-item"},styles:{itemIcon:{fontSize:"20px"},itemLabel:{padding:"8px 16px"}}},null,8,["value"])])]))}}),yt=dt(ht,[["__scopeId","data-v-dafb5226"]]),xt=`<template>
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
import { HomeOutlined, UserOutlined, SettingOutlined } from '@hmfw/ant-design'

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
`,St=w({__name:"SegmentedCustomStyle",setup(e){const d=r("apple"),o=[{value:"apple",label:"苹果",style:{color:"#cf1322",fontWeight:600}},{value:"orange",label:"橙子",style:{color:"#d46b08"}},{value:"pear",label:"梨",className:"demo-segmented-pear"}];return(g,t)=>(q(),E(c(v),{value:d.value,"onUpdate:value":t[0]||(t[0]=a=>d.value=a),options:o},null,8,["value"]))}}),wt=`<template>
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
`,qt=w({__name:"SegmentedDisabled",setup(e){const d=r("Daily"),o=[{value:"Daily",label:"每日"},{value:"Weekly",label:"每周",disabled:!0},{value:"Monthly",label:"每月"}];return(g,t)=>(q(),E(c(v),{value:d.value,"onUpdate:value":t[0]||(t[0]=a=>d.value=a),options:o},null,8,["value"]))}}),Ot=`<template>
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
`,Nt={style:{display:"flex","flex-direction":"column",gap:"16px"}},Dt=w({__name:"SegmentedIconLabel",setup(e){const d=r("list"),o=[{value:"list",label:"列表",icon:m(ut,{class:"hmfw-icon"})},{value:"grid",label:"网格",icon:m(rt,{class:"hmfw-icon"})}];return(g,t)=>(q(),$("div",Nt,[s(c(v),{value:d.value,"onUpdate:value":t[0]||(t[0]=a=>d.value=a),options:o},null,8,["value"]),s(c(v),{value:d.value,"onUpdate:value":t[1]||(t[1]=a=>d.value=a),options:o,size:"large"},null,8,["value"]),s(c(v),{value:d.value,"onUpdate:value":t[2]||(t[2]=a=>d.value=a),options:o,size:"small"},null,8,["value"])]))}}),Ut=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value" :options="options" />
    <Segmented v-model:value="value" :options="options" size="large" />
    <Segmented v-model:value="value" :options="options" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { PictureOutlined, BarsOutlined } from '@hmfw/ant-design'

const value = ref('list')
// 图标 + 文本同时存在的布局
const options = [
  { value: 'list', label: '列表', icon: h(BarsOutlined, { class: 'hmfw-icon' }) },
  { value: 'grid', label: '网格', icon: h(PictureOutlined, { class: 'hmfw-icon' }) },
]
<\/script>
`,$t={style:{display:"flex","flex-direction":"column",gap:"16px"}},Ct=w({__name:"SegmentedShape",setup(e){const d=r("light"),o=[{label:"Light",value:"light",icon:m(I,{class:"hmfw-icon"})},{label:"Dark",value:"dark",icon:m(P,{class:"hmfw-icon"})}],g=r("Daily"),t=["Daily","Weekly","Monthly"];return(a,h)=>(q(),$("div",$t,[s(c(v),{value:d.value,"onUpdate:value":h[0]||(h[0]=S=>d.value=S),options:o,shape:"round"},null,8,["value"]),s(c(v),{value:g.value,"onUpdate:value":h[1]||(h[1]=S=>g.value=S),options:t,shape:"round",size:"large"},null,8,["value"])]))}}),zt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value1" :options="options1" shape="round" />
    <Segmented v-model:value="value2" :options="options2" shape="round" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined } from '@hmfw/ant-design'

const value1 = ref('light')
const options1 = [
  { label: 'Light', value: 'light', icon: h(UserOutlined, { class: 'hmfw-icon' }) },
  { label: 'Dark', value: 'dark', icon: h(SettingOutlined, { class: 'hmfw-icon' }) },
]

const value2 = ref('Daily')
const options2 = ['Daily', 'Weekly', 'Monthly']
<\/script>
`,It={style:{display:"flex","flex-direction":"column",gap:"16px"}},Bt=w({__name:"SegmentedSize",setup(e){const d=r("Daily"),o=["Daily","Weekly","Monthly","Quarterly","Yearly"],g=r("list"),t=[{label:"List",value:"list",icon:m(I,{class:"hmfw-icon"})},{label:"Grid",value:"grid",icon:m(P,{class:"hmfw-icon"})}],a=r("home"),h=[{value:"home",icon:m(L,{class:"hmfw-icon"}),tooltip:"Home"},{value:"user",icon:m(I,{class:"hmfw-icon"}),tooltip:"User"},{value:"settings",icon:m(P,{class:"hmfw-icon"}),tooltip:"Settings"}],S=r("a"),C=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}];return(A,i)=>(q(),$("div",It,[s(c(v),{value:d.value,"onUpdate:value":i[0]||(i[0]=p=>d.value=p),options:o},null,8,["value"]),s(c(v),{value:g.value,"onUpdate:value":i[1]||(i[1]=p=>g.value=p),options:t},null,8,["value"]),s(c(v),{value:a.value,"onUpdate:value":i[2]||(i[2]=p=>a.value=p),options:h,size:"large"},null,8,["value"]),s(c(v),{value:S.value,"onUpdate:value":i[3]||(i[3]=p=>S.value=p),options:C,size:"small"},null,8,["value"])]))}}),Pt=`<template>
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
import { UserOutlined, SettingOutlined, HomeOutlined } from '@hmfw/ant-design'

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
`,Tt={style:{display:"flex",gap:"16px"}},Mt=w({__name:"SegmentedVertical",setup(e){const d=r("home"),o=[{value:"home",icon:m(L,{class:"hmfw-icon"})},{value:"user",icon:m(I,{class:"hmfw-icon"})},{value:"settings",icon:m(P,{class:"hmfw-icon"})}];return(g,t)=>(q(),$("div",Tt,[s(c(v),{value:d.value,"onUpdate:value":t[0]||(t[0]=a=>d.value=a),options:o,vertical:""},null,8,["value"])]))}}),Lt=`<template>
  <div style="display: flex; gap: 16px">
    <Segmented v-model:value="value" :options="options" vertical />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined, HomeOutlined } from '@hmfw/ant-design'

const value = ref('home')
const options = [
  { value: 'home', icon: h(HomeOutlined, { class: 'hmfw-icon' }) },
  { value: 'user', icon: h(UserOutlined, { class: 'hmfw-icon' }) },
  { value: 'settings', icon: h(SettingOutlined, { class: 'hmfw-icon' }) },
]
<\/script>
`,At={style:{display:"flex","flex-direction":"column",gap:"16px"}},Ht=w({__name:"SegmentedWithIcon",setup(e){const d=r("home"),o=[{value:"home",icon:m(L,{class:"hmfw-icon"}),tooltip:"Home Page"},{value:"user",icon:m(I,{class:"hmfw-icon"}),tooltip:"User Profile"},{value:"settings",icon:m(P,{class:"hmfw-icon"}),tooltip:"Settings"}];return(g,t)=>(q(),$("div",At,[s(c(v),{value:d.value,"onUpdate:value":t[0]||(t[0]=a=>d.value=a),options:o},null,8,["value"])]))}}),_t=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Segmented v-model:value="value" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Segmented } from '@hmfw/ant-design'
import { UserOutlined, SettingOutlined, HomeOutlined } from '@hmfw/ant-design'

const value = ref('home')
const options = [
  { value: 'home', icon: h(HomeOutlined, { class: 'hmfw-icon' }), tooltip: 'Home Page' },
  { value: 'user', icon: h(UserOutlined, { class: 'hmfw-icon' }), tooltip: 'User Profile' },
  { value: 'settings', icon: h(SettingOutlined, { class: 'hmfw-icon' }), tooltip: 'Settings' },
]
<\/script>
`,Rt={class:"markdown-body"},Gt={__name:"segmented",setup(e,{expose:d}){return d({frontmatter:{}}),(g,t)=>{const a=it("DemoBlock");return q(),$("div",Rt,[t[0]||(t[0]=l("h1",{id:"segmented-分段控制器",tabindex:"-1"},"Segmented 分段控制器",-1)),t[1]||(t[1]=l("p",null,"分段控制器。",-1)),t[2]||(t[2]=l("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=l("ul",null,[l("li",null,"用于展示多个选项并允许用户选择其中单个选项"),l("li",null,"当切换选中选项时,关联区域的内容会发生变化")],-1)),t[4]||(t[4]=l("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=l("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=l("p",null,"基本分段控制器。",-1)),s(a,{title:"基础用法",source:c(gt)},{default:N(()=>[s(vt)]),_:1},8,["source"]),t[7]||(t[7]=l("h3",{id:"block-模式",tabindex:"-1"},"Block 模式",-1)),t[8]||(t[8]=l("p",null,"block 属性使其适合父元素宽度。",-1)),s(a,{title:"Block 模式",source:c(bt)},{default:N(()=>[s(ft)]),_:1},8,["source"]),t[9]||(t[9]=l("h3",{id:"禁用",tabindex:"-1"},"禁用",-1)),t[10]||(t[10]=l("p",null,"禁用某些选项。",-1)),s(a,{title:"禁用",source:c(Ot)},{default:N(()=>[s(qt)]),_:1},8,["source"]),t[11]||(t[11]=l("h3",{id:"三种尺寸",tabindex:"-1"},"三种尺寸",-1)),t[12]||(t[12]=l("p",null,"提供 large、middle、small 三种尺寸。",-1)),s(a,{title:"三种尺寸",source:c(Pt)},{default:N(()=>[s(Bt)]),_:1},8,["source"]),t[13]||(t[13]=l("h3",{id:"垂直方向",tabindex:"-1"},"垂直方向",-1)),t[14]||(t[14]=l("p",null,"垂直布局的分段控制器。",-1)),s(a,{title:"垂直方向",source:c(Lt)},{default:N(()=>[s(Mt)]),_:1},8,["source"]),t[15]||(t[15]=l("h3",{id:"圆角形状",tabindex:"-1"},"圆角形状",-1)),t[16]||(t[16]=l("p",null,"胶囊型的分段控制器。",-1)),s(a,{title:"圆角形状",source:c(zt)},{default:N(()=>[s(Ct)]),_:1},8,["source"]),t[17]||(t[17]=l("h3",{id:"带图标",tabindex:"-1"},"带图标",-1)),t[18]||(t[18]=l("p",null,"在选项中使用图标。",-1)),s(a,{title:"带图标",source:c(_t)},{default:N(()=>[s(Ht)]),_:1},8,["source"]),t[19]||(t[19]=l("h3",{id:"图标--文本",tabindex:"-1"},"图标 + 文本",-1)),t[20]||(t[20]=l("p",null,"图标与文本同时存在时自动优化布局，间距统一。",-1)),s(a,{title:"图标 + 文本",source:c(Ut)},{default:N(()=>[s(Dt)]),_:1},8,["source"]),t[21]||(t[21]=l("h3",{id:"自定义选项样式",tabindex:"-1"},"自定义选项样式",-1)),t[22]||(t[22]=l("p",null,[B("每个选项支持单独的 "),l("code",null,"className"),B(" 与 "),l("code",null,"style"),B("。")],-1)),s(a,{title:"自定义选项样式",source:c(wt)},{default:N(()=>[s(St)]),_:1},8,["source"]),t[23]||(t[23]=l("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[24]||(t[24]=l("p",null,[B("通过 "),l("code",null,"classNames"),B(" / "),l("code",null,"styles"),B(" 对 root、group、thumb、item 等子元素做细粒度样式控制。")],-1)),s(a,{title:"语义化 className 与 style",source:c(xt)},{default:N(()=>[s(yt)]),_:1},8,["source"]),t[25]||(t[25]=ct(`<h2 id="api" tabindex="-1">API</h2><h3 id="segmented-props" tabindex="-1">Segmented Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>当前选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认选中的值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>options</td><td>数据化配置选项内容</td><td><code>string[] | number[] | SegmentedOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>将宽度调整为父元素宽度</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>控件大小</td><td><code>&#39;large&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>vertical</td><td>垂直方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>orientation</td><td>方向(优先级高于 vertical)</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>shape</td><td>形状</td><td><code>&#39;default&#39; | &#39;round&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>name</td><td>为所有 radio input 设置 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SegmentedClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SegmentedStyles</code></td><td>-</td></tr></tbody></table><h3 id="segmentedoption" tabindex="-1">SegmentedOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>选项值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>label</td><td>选项标签</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>icon</td><td>选项图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>HTML title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tooltip</td><td>提示信息</td><td><code>string | Omit&lt;TooltipProps, &#39;title&#39;&gt;</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="segmented-events" tabindex="-1">Segmented Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr><tr><td>change</td><td>选项变化时的回调函数</td><td><code>(value: string | number) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对分段控制器的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
import { Segmented } from &#39;@hmfw/ant-design&#39;

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
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>itemSelected</code> 和 <code>itemDisabled</code> 是条件节点，仅在选项处于对应状态时应用</li><li>选项的状态类名会<strong>叠加</strong>在 <code>item</code> 上：<code>classNames.item</code> + <code>classNames.itemSelected</code>（选中时）或 <code>classNames.itemDisabled</code>（禁用时）</li><li>选项的状态样式会<strong>合并</strong>：<code>styles.item</code> + <code>styles.itemSelected</code>（选中时）或 <code>styles.itemDisabled</code>（禁用时），后者优先</li><li><code>thumb</code> 是动画滑块，建议自定义其背景色、圆角、阴影等样式以匹配主题</li><li>每个选项还支持独立的 <code>className</code> 和 <code>style</code> 属性（见 <code>SegmentedOption</code> 配置），这些样式会与 <code>classNames.item</code> / <code>styles.item</code> 合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Segmented 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>浮层背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-bg-layout</code></td><td>布局背景色</td><td><code>#f5f5f5</code></td></tr><tr><td><code>--hmfw-color-fill</code></td><td>填充色</td><td><code>rgba(0,0,0,0.15)</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-label</code></td><td>标签文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-border-radius-xs</code></td><td>超小圆角</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-control-height</code></td><td>控件高度</td><td><code>32px</code></td></tr><tr><td><code>--hmfw-control-height-sm</code></td><td>小号控件高度</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-control-height-lg</code></td><td>大号控件高度</td><td><code>40px</code></td></tr><tr><td><code>--hmfw-control-padding-horizontal</code></td><td>控件水平内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-control-padding-horizontal-sm</code></td><td>小号控件内边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-line-width-bold</code></td><td>粗线宽</td><td><code>2px</code></td></tr><tr><td><code>--hmfw-margin-sm</code></td><td>小号外边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-duration-slow</code></td><td>慢速动画时长</td><td><code>0.3s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>缓入缓出曲线</td><td><code>cubic-bezier(0.645, 0.045, 0.355, 1)</code></td></tr></tbody></table>`,25))])}}};export{Gt as default};
