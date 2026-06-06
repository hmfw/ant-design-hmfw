import{B as ne}from"./Button-8pevJcSq.js";import{e as re,S as de,D as ce,R as ie,L as ue}from"./icons-B7DG7jjo.js";import{D as pe}from"./index-CTEpDb9q.js";import{C as ae}from"./Checkbox-DK8T4LOI.js";import{I as Z}from"./Icon-BgwCb1-e.js";import{I as fe}from"./Input-Ds4E2UpZ.js";import{c as x}from"./cls-S9IiI6wd.js";import{P as me}from"./Pagination-QLEE4dGM.js";import{E as ye}from"./Empty-BbJ9Z2Wn.js";import{m as N,B as _,O as J,l,F as se,d as u,L as ge,K as he,y as B,g as V,I as w,E as ke,i as ve,f as k,P as U,j as be}from"./index-B2-fWtt3.js";import"./Menu-COQIU0pW.js";import"./Select-BPRclDG4.js";function Se(e){return!!e&&typeof e=="object"&&!("__v_isVNode"in e)&&"value"in e}function we(e,s){for(const d of[e,s.title,s.key]){if(typeof d=="string")return d;if(typeof d=="number")return String(d)}return""}function R(e){return e.filter(s=>!s.disabled).map(s=>s.key)}const le=N({name:"TransferList",props:{prefixCls:{type:String,required:!0},direction:{type:String,required:!0},titleText:{type:[String,Object],default:""},dataSource:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},disabled:Boolean,showSearch:{type:[Boolean,Object],default:!1},showSelectAll:{type:Boolean,default:!0},showRemove:Boolean,pagination:{type:[Boolean,Object],default:void 0},selectAllLabel:{type:[String,Object,Function],default:void 0},render:Function,filterOption:Function,footer:Function,listStyle:{type:Object,default:()=>({})},classNames:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},searchPlaceholder:{type:String,default:"请输入搜索内容"},notFoundContent:{type:[String,Object,Array],default:void 0},itemUnit:{type:String,default:"项"},itemsUnit:{type:String,default:"项"},selectAll:{type:String,default:"全选所有"},deselectAll:{type:String,default:"取消全选"},selectCurrent:{type:String,default:"全选当页"},selectInvert:{type:String,default:"反选当页"},removeAll:{type:String,default:"删除全部"},removeCurrent:{type:String,default:"删除当页"}},emits:["itemSelect","itemSelectAll","itemRemove","filter","scroll"],setup(e,{emit:s}){const d=u(()=>`${e.prefixCls}-list`),v=u(()=>`${e.prefixCls}-section`),t=u(()=>e.showSearch&&typeof e.showSearch=="object"?{defaultValue:"",placeholder:"",...e.showSearch}:{defaultValue:"",placeholder:""}),c=_(t.value.defaultValue||"");J(()=>t.value.defaultValue,n=>{c.value=n||""});const $=_(1),b=u(()=>e.pagination?{simple:!0,showSizeChanger:!1,showLessItems:!1,pageSize:10,...typeof e.pagination=="object"?e.pagination:{}}:null);function M(n){const r=e.render?e.render(n):null,y=Se(r),C=y?r.label:r,j=y?r.value:we(r,n);return{item:n,renderedEl:C??n.title??String(n.key),renderedText:j}}function F(n,r){return e.filterOption?e.filterOption(c.value,r,e.direction):n.toLowerCase().includes(c.value.toLowerCase())}const I=u(()=>{const n=[];return e.dataSource.forEach(r=>{const y=M(r);c.value&&!F(y.renderedText,r)||n.push(y)}),n}),O=u(()=>I.value.map(n=>n.item));J([I,b],()=>{const n=b.value;if(n){const r=Math.max(1,Math.ceil(I.value.length/n.pageSize));$.value=Math.min($.value,r)}});const L=u(()=>{const n=b.value;return n?I.value.slice(($.value-1)*n.pageSize,$.value*n.pageSize):I.value}),K=u(()=>O.value.filter(n=>e.checkedKeys.includes(n.key)&&!n.disabled)),T=u(()=>{if(K.value.length===0)return"none";const n=new Set(e.checkedKeys);return O.value.every(r=>n.has(r.key)||!!r.disabled)?"all":"part"});function P(n){c.value=n,s("filter",e.direction,n)}function W(){const n=R(O.value);s("itemSelectAll",n,T.value!=="all")}function q(n,r){const y=e.selectAllLabel;if(y)return typeof y=="function"?y({selectedCount:n,totalCount:r}):y;const C=r>1?e.itemsUnit:e.itemUnit;return`${n>0?`${n}/`:""}${r} ${C}`}const Q=u(()=>{const n=b.value;return e.showRemove?[n&&{key:"removeCurrent",label:e.removeCurrent,onClick:()=>s("itemRemove",R(L.value.map(r=>r.item)))},{key:"removeAll",label:e.removeAll,onClick:()=>s("itemRemove",R(O.value))}].filter(Boolean):[{key:"selectAll",label:T.value==="all"?e.deselectAll:e.selectAll,onClick:()=>{const r=R(O.value);s("itemSelectAll",r,r.length!==e.checkedKeys.length)}},n&&{key:"selectCurrent",label:e.selectCurrent,onClick:()=>s("itemSelectAll",R(L.value.map(r=>r.item)),!0)},{key:"selectInvert",label:e.selectInvert,onClick:()=>{const r=R(L.value.map(C=>C.item)),y=new Set(e.checkedKeys);r.forEach(C=>y.has(C)?y.delete(C):y.add(C)),s("itemSelectAll",[...y],"replace")}}].filter(Boolean)});function A(n){return e.classNames[n]}function S(n){return e.styles[n]}return()=>{const n=d.value,r=e.dataSource.some(o=>!o.disabled),y=l(ae,{class:`${n}-checkbox`,disabled:!r||e.disabled,checked:T.value==="all",indeterminate:T.value==="part",onChange:W},null),C=l(pe,{class:`${n}-header-dropdown`,disabled:e.disabled,menu:{items:Q.value}},{default:()=>[l("span",{class:`${n}-header-dropdown-trigger`},[l(Z,{component:re},null)])]}),j=e.showSearch?l("div",{class:`${n}-body-search-wrapper`},[l(fe,{class:`${n}-search`,value:c.value,placeholder:t.value.placeholder||e.searchPlaceholder,disabled:e.disabled,allowClear:!0,prefix:l(Z,{component:de},null),onInput:o=>P(o.target.value),onClear:()=>P("")},null)]):null,X=L.value.map(({item:o,renderedEl:i})=>{const p=o.key,m=e.disabled||o.disabled,f=e.checkedKeys.includes(p),g=l("span",{class:x(`${n}-content-item-text`,A("itemContent")),style:S("itemContent")},[i]);return e.showRemove?l("li",{key:p,class:x(`${n}-content-item`,A("item"),{[`${n}-content-item-disabled`]:m}),style:S("item")},[g,l("button",{type:"button",disabled:m,class:`${n}-content-item-remove`,"aria-label":e.removeCurrent,onClick:()=>!m&&s("itemRemove",[p])},[l(Z,{component:ce},null)])]):l("li",{key:p,class:x(`${n}-content-item`,A("item"),{[`${n}-content-item-disabled`]:m,[`${n}-content-item-checked`]:f&&!m}),style:S("item"),onClick:h=>!m&&s("itemSelect",p,!f,h)},[l(ae,{class:x(`${n}-checkbox`,A("itemIcon")),style:S("itemIcon"),checked:f,disabled:m},null),g])}),G=Array.isArray(e.notFoundContent)?e.notFoundContent[e.direction==="left"?0:1]:e.notFoundContent,H=L.value.length?l(se,null,[l("ul",{class:x(`${n}-content`,A("list"),{[`${n}-content-show-remove`]:e.showRemove}),style:S("list"),onScroll:o=>s("scroll",e.direction,o)},[X]),b.value&&l(me,{size:"small",disabled:e.disabled,simple:b.value.simple,pageSize:b.value.pageSize,showSizeChanger:b.value.showSizeChanger,class:`${n}-pagination`,total:I.value.length,current:$.value,onChange:o=>{$.value=o}},null)]):l("div",{class:`${n}-body-not-found`},[G??l(ye,{description:!1},null)]),a=e.footer?e.footer({direction:e.direction,filteredItems:O.value,selectedKeys:e.checkedKeys,disabled:e.disabled}):null;return l("div",{class:x(v.value,A("section"),{[`${v.value}-with-pagination`]:!!b.value,[`${v.value}-with-footer`]:!!a}),style:{...e.listStyle,...S("section")}},[l("div",{class:x(`${n}-header`,A("header")),style:S("header")},[e.showSelectAll?l(se,null,[!e.showRemove&&!b.value&&y,C]):null,l("span",{class:`${n}-header-selected`},[q(K.value.length,O.value.length)]),l("span",{class:x(`${n}-header-title`,A("title")),style:S("title")},[e.titleText])]),l("div",{class:x(`${n}-body`,A("body"),{[`${n}-body-with-search`]:!!e.showSearch}),style:S("body")},[j,H]),a&&l("div",{class:x(`${n}-footer`,A("footer")),style:S("footer")},[a])])}}}),E=N({name:"Transfer",props:{dataSource:{type:Array,default:()=>[]},targetKeys:Array,defaultTargetKeys:{type:Array,default:()=>[]},selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},titles:{type:Array,default:()=>["",""]},operations:{type:Array,default:()=>[]},render:Function,rowKey:Function,showSearch:{type:[Boolean,Object],default:!1},filterOption:Function,footer:Function,listStyle:{type:[Object,Function],default:()=>({})},disabled:Boolean,showSelectAll:{type:Boolean,default:!0},selectAllLabels:{type:Array,default:()=>[]},oneWay:Boolean,pagination:{type:[Boolean,Object],default:void 0},status:String,locale:{type:Object,default:()=>({})},rootClassName:String,classNames:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},emits:["update:targetKeys","change","update:selectedKeys","selectChange","search","scroll"],setup(e,{emit:s}){const d=ge("transfer"),v=he(),t=u(()=>({...v.value.Transfer,...e.locale})),c=_([...e.defaultTargetKeys]),$=_([...e.defaultSelectedKeys]);J(()=>e.targetKeys,a=>{a&&(c.value=[...a])}),J(()=>e.selectedKeys,a=>{a&&($.value=[...a])});const b=u(()=>e.targetKeys??c.value),M=u(()=>e.selectedKeys??$.value),F=u(()=>e.dataSource.map(a=>({...a,key:e.rowKey?e.rowKey(a):a.key}))),I=u(()=>F.value.filter(a=>!b.value.includes(a.key))),O=u(()=>new Map(F.value.map(a=>[a.key,a]))),L=u(()=>b.value.map(a=>O.value.get(a)).filter(Boolean)),K=u(()=>M.value.filter(a=>I.value.some(o=>o.key===a))),T=u(()=>M.value.filter(a=>L.value.some(o=>o.key===a)));function P(a){$.value=a,s("update:selectedKeys",a)}function W(a,o){const i=a==="left"?T.value:K.value,p=a==="left"?[...o,...i]:[...i,...o];P(p),a==="left"?s("selectChange",o,T.value):s("selectChange",K.value,o)}function q(a){const o=a==="right"?K.value:T.value,i=new Set(F.value.filter(h=>h.disabled).map(h=>h.key)),p=o.filter(h=>!i.has(h)),m=new Set(p),f=a==="right"?[...p,...b.value]:b.value.filter(h=>!m.has(h));c.value=f,s("update:targetKeys",f);const g=a==="right"?T.value:K.value;P(g),a==="right"?s("selectChange",[],T.value):s("selectChange",K.value,[]),s("change",f,a,p)}const Q=()=>q("right"),A=()=>q("left"),S={left:null,right:null};function n(a,o,i,p){var ee;const m=a==="left",f=m?K.value:T.value,g=(m?I.value:L.value).filter(z=>!z.disabled),h=g.findIndex(z=>z.key===o),D=new Set(f);if(p&&S[a]!==null){const z=Math.min(S[a],h),oe=Math.max(S[a],h);for(let Y=z;Y<=oe;Y++){const te=(ee=g[Y])==null?void 0:ee.key;te!==void 0&&D.add(te)}}else D.has(o)&&D.delete(o),i&&D.add(o),S[a]=i?h:null;W(a,[...D])}function r(a,o,i){const p=a==="left"?K.value:T.value;let m;if(i==="replace")m=o;else if(i)m=[...new Set([...p,...o])];else{const f=new Set(o);m=p.filter(g=>!f.has(g))}S[a]=null,W(a,m)}function y(a){const o=new Set(a),i=b.value.filter(p=>!o.has(p));c.value=i,s("update:targetKeys",i),P(K.value),s("change",i,"left",[...a])}function C(a){return typeof e.listStyle=="function"?e.listStyle({direction:a}):e.listStyle}const j=u(()=>K.value.length>0),X=u(()=>T.value.length>0),G=u(()=>e.operations||[]);function H(a){var p,m;const o=a==="left",i=t.value;return{prefixCls:d,direction:a,titleText:((p=e.titles)==null?void 0:p[o?0:1])??"",dataSource:o?I.value:L.value,checkedKeys:o?K.value:T.value,disabled:e.disabled,showSearch:e.showSearch,showSelectAll:e.showSelectAll,showRemove:e.oneWay&&!o,pagination:e.pagination,selectAllLabel:(m=e.selectAllLabels)==null?void 0:m[o?0:1],render:e.render,filterOption:e.filterOption,footer:e.footer,listStyle:C(a),classNames:e.classNames,styles:e.styles,searchPlaceholder:i.searchPlaceholder,notFoundContent:e.locale.notFoundContent??i.notFoundContent,itemUnit:i.itemUnit,itemsUnit:i.itemsUnit,selectAll:i.selectAll,deselectAll:i.deselectAll,selectCurrent:i.selectCurrent,selectInvert:i.selectInvert,removeAll:i.removeAll,removeCurrent:i.removeCurrent,onItemSelect:(f,g,h)=>n(a,f,g,h==null?void 0:h.shiftKey),onItemSelectAll:(f,g)=>r(a,f,g),onItemRemove:f=>y(f),onFilter:(f,g)=>s("search",f,g),onScroll:(f,g)=>s("scroll",f,g)}}return()=>l("div",{class:x(d,e.rootClassName,e.classNames.root,{[`${d}-disabled`]:e.disabled,[`${d}-status-error`]:e.status==="error",[`${d}-status-warning`]:e.status==="warning"}),style:e.styles.root},[l(le,H("left"),null),l("div",{class:x(`${d}-actions`,e.classNames.actions),style:e.styles.actions},[l(ne,{type:"primary",size:"small",icon:ie,disabled:!j.value||e.disabled,onClick:Q},{default:()=>[G.value[0]]}),!e.oneWay&&l(ne,{type:"primary",size:"small",icon:ue,disabled:!X.value||e.disabled,onClick:A},{default:()=>[G.value[1]]})]),l(le,H("right"),null)])}}),Te=N({__name:"TransferBasic",setup(e){const s=Array.from({length:10},(v,t)=>({key:String(t),title:`选项 ${t+1}`,description:`描述 ${t+1}`,disabled:t===3})),d=_(["1","3","5"]);return(v,t)=>(B(),V(w(E),{"data-source":w(s),"target-keys":d.value,"onUpdate:targetKeys":t[0]||(t[0]=c=>d.value=c),titles:["待选","已选"],"show-search":""},null,8,["data-source","target-keys"]))}}),Ke=`<template>
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :titles="['待选', '已选']"
    show-search
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from 'ant-design-hmfw'
import type { TransferItem } from 'ant-design-hmfw'

const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: \`选项 \${i + 1}\`,
  description: \`描述 \${i + 1}\`,
  disabled: i === 3,
}))

const targetKeys = ref(['1', '3', '5'])
<\/script>
`,Ce=N({__name:"TransferCustom",setup(e){const s=Array.from({length:10},(v,t)=>({key:String(t),title:`选项 ${t+1}`})),d=_(["1","3"]);return(v,t)=>(B(),V(w(E),{"data-source":w(s),"target-keys":d.value,"onUpdate:targetKeys":t[0]||(t[0]=c=>d.value=c),titles:["待选","已选"],render:c=>`[${c.title}]`},null,8,["data-source","target-keys","render"]))}}),Ae=`<template>
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :titles="['待选', '已选']"
    :render="(item) => \`[\${item.title}]\`"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from 'ant-design-hmfw'
import type { TransferItem } from 'ant-design-hmfw'

const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: \`选项 \${i + 1}\`,
}))

const targetKeys = ref<string[]>(['1', '3'])
<\/script>
`,xe=N({__name:"TransferOneWay",setup(e){const s=Array.from({length:10},(v,t)=>({key:String(t),title:`Item ${t+1}`})),d=_(["1","3"]);return(v,t)=>(B(),V(w(E),{"data-source":w(s),"target-keys":d.value,"onUpdate:targetKeys":t[0]||(t[0]=c=>d.value=c),titles:["源","目标"],"one-way":""},null,8,["data-source","target-keys"]))}}),$e=`<template>
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :titles="['源', '目标']"
    one-way
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from 'ant-design-hmfw'
import type { TransferItem } from 'ant-design-hmfw'

const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: \`Item \${i + 1}\`,
}))

const targetKeys = ref<string[]>(['1', '3'])
<\/script>
`,Ie=N({__name:"TransferPagination",setup(e){const s=Array.from({length:20},(v,t)=>({key:String(t),title:`选项 ${t+1}`})),d=_(["2","5","8"]);return(v,t)=>(B(),V(w(E),{"data-source":w(s),"target-keys":d.value,"onUpdate:targetKeys":t[0]||(t[0]=c=>d.value=c),titles:["源","目标"],pagination:{pageSize:5}},null,8,["data-source","target-keys"]))}}),Oe=`<template>
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :titles="['源', '目标']"
    :pagination="{ pageSize: 5 }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from 'ant-design-hmfw'
import type { TransferItem } from 'ant-design-hmfw'

const dataSource: TransferItem[] = Array.from({ length: 20 }, (_, i) => ({
  key: String(i),
  title: \`选项 \${i + 1}\`,
}))

const targetKeys = ref<string[]>(['2', '5', '8'])
<\/script>
`,Le=N({__name:"TransferSearch",setup(e){const s=Array.from({length:20},(v,t)=>({key:String(t),title:`选项 ${t+1}`,description:`描述 ${t+1}`,disabled:t%8===3})),d=_(["1","3","5"]);return(v,t)=>(B(),V(w(E),{"data-source":w(s),"target-keys":d.value,"onUpdate:targetKeys":t[0]||(t[0]=c=>d.value=c),titles:["待选","已选"],"show-search":""},null,8,["data-source","target-keys"]))}}),_e=`<template>
  <Transfer
    :data-source="dataSource"
    v-model:target-keys="targetKeys"
    :titles="['待选', '已选']"
    show-search
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from 'ant-design-hmfw'
import type { TransferItem } from 'ant-design-hmfw'

const dataSource: TransferItem[] = Array.from({ length: 20 }, (_, i) => ({
  key: String(i),
  title: \`选项 \${i + 1}\`,
  description: \`描述 \${i + 1}\`,
  disabled: i % 8 === 3,
}))

const targetKeys = ref<string[]>(['1', '3', '5'])
<\/script>
`,Ne={class:"markdown-body"},qe={__name:"transfer",setup(e,{expose:s}){return s({frontmatter:{}}),(v,t)=>{const c=ke("DemoBlock");return B(),ve("div",Ne,[t[0]||(t[0]=k("h1",{id:"transfer-",tabindex:"-1"},"Transfer 穿梭框",-1)),t[1]||(t[1]=k("p",null,"双栏穿梭选择框，用于将元素从一列移入另一列。",-1)),t[2]||(t[2]=k("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=k("ul",null,[k("li",null,"需要在两个集合之间进行选择，且需要直观展示两个集合的内容时"),k("li",null,"用于将可选项在两个列表之间移动")],-1)),t[4]||(t[4]=k("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=k("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=k("p",null,"最简单的用法，展示了数据在左右两栏之间的移动。",-1)),l(c,{title:"基础用法",source:w(Ke)},{default:U(()=>[l(Te)]),_:1},8,["source"]),t[7]||(t[7]=k("h3",{id:"-3",tabindex:"-1"},"带搜索框",-1)),t[8]||(t[8]=k("p",null,"支持搜索功能，可以快速找到目标项。",-1)),l(c,{title:"带搜索框",source:w(_e)},{default:U(()=>[l(Le)]),_:1},8,["source"]),t[9]||(t[9]=k("h3",{id:"-4",tabindex:"-1"},"自定义渲染",-1)),t[10]||(t[10]=k("p",null,"可以自定义每项的渲染内容。",-1)),l(c,{title:"自定义渲染",source:w(Ae)},{default:U(()=>[l(Ce)]),_:1},8,["source"]),t[11]||(t[11]=k("h3",{id:"-5",tabindex:"-1"},"分页",-1)),t[12]||(t[12]=k("p",null,"数据较多时，可以使用分页。",-1)),l(c,{title:"分页",source:w(Oe)},{default:U(()=>[l(Ie)]),_:1},8,["source"]),t[13]||(t[13]=k("h3",{id:"-6",tabindex:"-1"},"单向模式",-1)),t[14]||(t[14]=k("p",null,"单向模式下，只能从左往右移动，右侧项可单独删除。",-1)),l(c,{title:"单向模式",source:w($e)},{default:U(()=>[l(xe)]),_:1},8,["source"]),t[15]||(t[15]=be(`<h2 id="api" tabindex="-1">API</h2><h3 id="transfer-props" tabindex="-1">Transfer Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据源</td><td><code>TransferItem[]</code></td><td><code>[]</code></td></tr><tr><td>targetKeys (v-model)</td><td>右侧列表的 key 集合</td><td><code>TransferKey[]</code></td><td><code>[]</code></td></tr><tr><td>selectedKeys (v-model)</td><td>选中项的 key 集合</td><td><code>TransferKey[]</code></td><td><code>[]</code></td></tr><tr><td>titles</td><td>标题集合</td><td><code>(VNode | string)[]</code></td><td><code>[&#39;&#39;, &#39;&#39;]</code></td></tr><tr><td>operations</td><td>操作按钮文案（已废弃）</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>render</td><td>自定义渲染函数</td><td><code>(item: TransferItem) =&gt; RenderResult</code></td><td>-</td></tr><tr><td>rowKey</td><td>自定义提取 key</td><td><code>(record: TransferItem) =&gt; TransferKey</code></td><td>-</td></tr><tr><td>showSearch</td><td>显示搜索框</td><td><code>boolean | TransferSearchOption</code></td><td><code>false</code></td></tr><tr><td>filterOption</td><td>自定义搜索函数</td><td><code>(input: string, item: TransferItem, direction: TransferDirection) =&gt; boolean</code></td><td>-</td></tr><tr><td>footer</td><td>列表底部渲染</td><td><code>(info: TransferListContext) =&gt; VNode | string | null</code></td><td>-</td></tr><tr><td>listStyle</td><td>列表样式</td><td><code>CSSProperties | ((info: { direction: TransferDirection }) =&gt; CSSProperties)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSelectAll</td><td>是否展示全选勾选框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>selectAllLabels</td><td>自定义全选文案</td><td><code>SelectAllLabel[]</code></td><td>-</td></tr><tr><td>oneWay</td><td>单向模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>分页配置</td><td><code>boolean | PaginationType</code></td><td>-</td></tr><tr><td>status</td><td>校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>locale</td><td>文案配置</td><td><code>Partial&lt;TransferLocale&gt;</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根元素 class</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 class</td><td><code>TransferSemanticClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style</td><td><code>TransferSemanticStyles</code></td><td>-</td></tr></tbody></table><h3 id="transfer-events" tabindex="-1">Transfer Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>右侧列表变化时触发</td><td><code>(targetKeys: TransferKey[], direction: TransferDirection, moveKeys: TransferKey[])</code></td></tr><tr><td>selectChange</td><td>选中项变化时触发</td><td><code>(sourceSelectedKeys: TransferKey[], targetSelectedKeys: TransferKey[])</code></td></tr><tr><td>search</td><td>搜索框内容变化时触发</td><td><code>(direction: TransferDirection, value: string)</code></td></tr><tr><td>scroll</td><td>列表滚动时触发</td><td><code>(direction: TransferDirection, e: Event)</code></td></tr></tbody></table><h3 id="transferitem" tabindex="-1">TransferItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td></tr><tr><td>description</td><td>描述</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr></tbody></table><h3 id="paginationtype" tabindex="-1">PaginationType</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">PaginationType</span> <span class="token operator">=</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token punctuation">{</span>
  pageSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  simple<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  showSizeChanger<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  showLessItems<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="transferlocale" tabindex="-1">TransferLocale</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">TransferLocale</span> <span class="token punctuation">{</span>
  titles<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>VNode <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  notFoundContent<span class="token operator">?</span><span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span>VNode <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  searchPlaceholder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  itemUnit<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  itemsUnit<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  remove<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  selectAll<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  deselectAll<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  selectCurrent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  selectInvert<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  removeAll<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  removeCurrent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="transfersemanticclassnames" tabindex="-1">TransferSemanticClassNames</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">TransferSemanticClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  section<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  list<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  itemIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  itemContent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  actions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="-7" tabindex="-1">特性说明</h2><h3 id="-8" tabindex="-1">搜索</h3><p>设置 <code>showSearch</code> 为 <code>true</code> 启用搜索功能，也可传对象 <code>{ placeholder, defaultValue }</code> 自定义搜索框。默认搜索匹配 <code>title</code> 字段，可通过 <code>filterOption</code> 自定义匹配逻辑。</p><h3 id="-9" tabindex="-1">分页</h3><p>数据量大时，可以设置 <code>pagination</code> 为 <code>true</code> 或配置对象启用分页。分页后全选操作仅影响当前页，可通过 selections 下拉菜单操作所有项。</p><h3 id="-10" tabindex="-1">单向模式</h3><p>设置 <code>oneWay</code> 后，只显示右箭头按钮，右侧列表每项显示删除按钮，用于&quot;添加到列表&quot;的场景。</p><h3 id="shift-" tabindex="-1">Shift 多选</h3><p>按住 Shift 键点击可进行范围多选。</p><h3 id="-11" tabindex="-1">键盘操作</h3><p>暂不支持键盘导航（与 AntD 一致）。</p>`,24))])}}};export{qe as default};
