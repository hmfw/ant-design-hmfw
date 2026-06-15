import{B as ue}from"./Button-Cw7qEaQa.js";import{D as he}from"./index-DGM9rXHz.js";import{C as pe}from"./Checkbox-BdXD4T_H.js";import{I as oe}from"./Icon-Bn-1ylNX.js";import{D as ve}from"./DownOutlined-B23SxAsn.js";import{I as ke}from"./Input-Ba9GGOpG.js";import{S as be}from"./SearchOutlined-DqDpqZlu.js";import{c as I}from"./cls-S9IiI6wd.js";import{D as Se}from"./DeleteOutlined-s__hUXu2.js";import{P as Te}from"./Pagination-CZoHmSps.js";import{E as Ke}from"./Empty--sVDvgHG.js";import{o as B,E as w,Q as Z,n as o,s as fe,F as le,f,N as we,M as xe,A as j,i as q,K as h,k as ye,h as m,J as Ae,H as Ce,R as V,m as ge,l as Ie}from"./index-C7r7ERgN.js";import{R as $e}from"./RightOutlined-Ba5Kr1fR.js";import{L as De}from"./LeftOutlined-uiZ46h2s.js";import"./LoadingOutlined-CFTLq47r.js";import"./Menu-CGZROkSs.js";import"./CloseOutlined-BOy0Oguu.js";import"./EyeOutlined-BsTkzzPM.js";import"./Select-DesA3IGj.js";import"./VirtualList-B6mwTjGn.js";function Oe(t){return!!t&&typeof t=="object"&&!("__v_isVNode"in t)&&"value"in t}function Re(t,r){for(const c of[t,r.title,r.key]){if(typeof c=="string")return c;if(typeof c=="number")return String(c)}return""}function E(t){return t.filter(r=>!r.disabled).map(r=>r.key)}const me=B({name:"TransferList",props:{prefixCls:{type:String,required:!0},direction:{type:String,required:!0},titleText:{type:[String,Object],default:""},dataSource:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},disabled:Boolean,showSearch:{type:[Boolean,Object],default:!1},showSelectAll:{type:Boolean,default:!0},showRemove:Boolean,draggable:Boolean,pagination:{type:[Boolean,Object],default:void 0},selectAllLabel:{type:[String,Object,Function],default:void 0},render:Function,filterOption:Function,footer:Function,listStyle:{type:Object,default:()=>({})},classNames:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},searchPlaceholder:{type:String,default:"请输入搜索内容"},notFoundContent:{type:[String,Object,Array],default:void 0},itemUnit:{type:String,default:"项"},itemsUnit:{type:String,default:"项"},selectAll:{type:String,default:"全选所有"},deselectAll:{type:String,default:"取消全选"},selectCurrent:{type:String,default:"全选当页"},selectInvert:{type:String,default:"反选当页"},removeAll:{type:String,default:"删除全部"},removeCurrent:{type:String,default:"删除当页"}},emits:["itemSelect","itemSelectAll","itemRemove","reorder","filter","scroll"],setup(t,{emit:r}){const c=f(()=>`${t.prefixCls}-list`),y=f(()=>`${t.prefixCls}-section`),n=f(()=>t.showSearch&&typeof t.showSearch=="object"?{defaultValue:"",placeholder:"",...t.showSearch}:{defaultValue:"",placeholder:""}),l=w(n.value.defaultValue||"");Z(()=>n.value.defaultValue,e=>{l.value=e||""});const x=w(1),v=f(()=>t.pagination?{simple:!0,showSizeChanger:!1,showLessItems:!1,pageSize:10,...typeof t.pagination=="object"?t.pagination:{}}:null);function H(e){const a=t.render?t.render(e):null,s=Oe(a),d=s?a.label:a,g=s?a.value:Re(a,e);return{item:e,renderedEl:d??e.title??String(e.key),renderedText:g}}function W(e,a){return t.filterOption?t.filterOption(l.value,a,t.direction):e.toLowerCase().includes(l.value.toLowerCase())}const D=f(()=>{const e=[];return t.dataSource.forEach(a=>{const s=H(a);l.value&&!W(s.renderedText,a)||e.push(s)}),e}),O=f(()=>D.value.map(e=>e.item));Z([D,v],()=>{const e=v.value;if(e){const a=Math.max(1,Math.ceil(D.value.length/e.pageSize));x.value=Math.min(x.value,a)}});const R=f(()=>{const e=v.value;return e?D.value.slice((x.value-1)*e.pageSize,x.value*e.pageSize):D.value}),T=f(()=>O.value.filter(e=>t.checkedKeys.includes(e.key)&&!e.disabled)),S=f(()=>{if(T.value.length===0)return"none";const e=new Set(t.checkedKeys);return O.value.every(a=>e.has(a.key)||!!a.disabled)?"all":"part"});function z(e){l.value=e,r("filter",t.direction,e)}function J(){const e=E(O.value);r("itemSelectAll",e,S.value!=="all")}function Q(e,a){const s=t.selectAllLabel;if(s)return typeof s=="function"?s({selectedCount:e,totalCount:a}):s;const d=a>1?t.itemsUnit:t.itemUnit;return`${e>0?`${e}/`:""}${a} ${d}`}const ee=f(()=>{const e=v.value;return t.showRemove?[e&&{key:"removeCurrent",label:t.removeCurrent,onClick:()=>r("itemRemove",E(R.value.map(a=>a.item)))},{key:"removeAll",label:t.removeAll,onClick:()=>r("itemRemove",E(O.value))}].filter(Boolean):[{key:"selectAll",label:S.value==="all"?t.deselectAll:t.selectAll,onClick:()=>{const a=E(O.value);r("itemSelectAll",a,a.length!==t.checkedKeys.length)}},e&&{key:"selectCurrent",label:t.selectCurrent,onClick:()=>r("itemSelectAll",E(R.value.map(a=>a.item)),!0)},{key:"selectInvert",label:t.selectInvert,onClick:()=>{const a=E(R.value.map(d=>d.item)),s=new Set(t.checkedKeys);a.forEach(d=>s.has(d)?s.delete(d):s.add(d)),r("itemSelectAll",[...s],"replace")}}].filter(Boolean)});function A(e){return t.classNames[e]}function k(e){return t.styles[e]}const _=w(null),L=w(null),P=w(!1);function te(e){return!!t.draggable&&!t.disabled&&!e.disabled}function ne(e,a){if(_.value=a,e.dataTransfer){e.dataTransfer.effectAllowed="move";try{e.dataTransfer.setData("text/plain",String(a))}catch{}}}function ae(e,a){if(_.value===null||_.value===a)return;e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move");const d=e.currentTarget.getBoundingClientRect(),i=e.clientY-d.top>d.height/2;(L.value!==a||P.value!==i)&&(L.value=a,P.value=i)}function se(e,a){L.value===a&&(L.value=null)}function Y(e,a){e.preventDefault();const s=_.value,d=P.value;_.value=null,L.value=null,!(s===null||s===a)&&r("reorder",s,a,d)}function G(){_.value=null,L.value=null}return()=>{const e=c.value,a=t.dataSource.some(b=>!b.disabled),s=o(pe,{class:`${e}-checkbox`,disabled:!a||t.disabled,checked:S.value==="all",indeterminate:S.value==="part",onChange:J},null),d=o(he,{class:`${e}-header-dropdown`,disabled:t.disabled,menu:{items:ee.value}},{default:()=>[o("span",{class:`${e}-header-dropdown-trigger`},[o(oe,{component:ve},null)])]}),g=t.showSearch?o("div",{class:`${e}-body-search-wrapper`},[o(ke,{class:`${e}-search`,value:l.value,placeholder:n.value.placeholder||t.searchPlaceholder,disabled:t.disabled,allowClear:!0,prefix:o(oe,{component:be},null),onInput:b=>z(b.target.value),onClear:()=>z("")},null)]):null,i=R.value.map(({item:b,renderedEl:F})=>{const K=b.key,C=t.disabled||b.disabled,U=t.checkedKeys.includes(K),X=_.value===K,re=L.value===K,de=te(b)?{draggable:!0,onDragstart:N=>ne(N,K),onDragover:N=>ae(N,K),onDragleave:N=>se(N,K),onDrop:N=>Y(N,K),onDragend:()=>G()}:{},ce={[`${e}-content-item-draggable`]:!!t.draggable&&!C,[`${e}-content-item-dragging`]:X,[`${e}-content-item-drag-over`]:re&&!X,[`${e}-content-item-drag-over-after`]:re&&!X&&P.value,[`${e}-content-item-drag-over-before`]:re&&!X&&!P.value},ie=o("span",{class:I(`${e}-content-item-text`,A("itemContent")),style:k("itemContent")},[F]);return t.showRemove?o("li",fe({key:K,class:I(`${e}-content-item`,A("item"),ce,{[`${e}-content-item-disabled`]:C}),style:k("item")},de),[ie,o("button",{type:"button",disabled:C,class:`${e}-content-item-remove`,"aria-label":t.removeCurrent,onClick:()=>!C&&r("itemRemove",[K])},[o(oe,{component:Se},null)])]):o("li",fe({key:K,class:I(`${e}-content-item`,A("item"),ce,{[`${e}-content-item-disabled`]:C,[`${e}-content-item-checked`]:U&&!C}),style:k("item")},de,{onClick:N=>!C&&r("itemSelect",K,!U,N)}),[o(pe,{class:I(`${e}-checkbox`,A("itemIcon")),style:k("itemIcon"),checked:U,disabled:C},null),ie])}),u=Array.isArray(t.notFoundContent)?t.notFoundContent[t.direction==="left"?0:1]:t.notFoundContent,p=R.value.length?o(le,null,[o("ul",{class:I(`${e}-content`,A("list"),{[`${e}-content-show-remove`]:t.showRemove}),style:k("list"),onScroll:b=>r("scroll",t.direction,b)},[i]),v.value&&o(Te,{size:"small",disabled:t.disabled,simple:v.value.simple,pageSize:v.value.pageSize,showSizeChanger:v.value.showSizeChanger,class:`${e}-pagination`,total:D.value.length,current:x.value,onChange:b=>{x.value=b}},null)]):o("div",{class:`${e}-body-not-found`},[u??o(Ke,{description:!1},null)]),$=t.footer?t.footer({direction:t.direction,filteredItems:O.value,selectedKeys:t.checkedKeys,disabled:t.disabled}):null;return o("div",{class:I(y.value,A("section"),{[`${y.value}-with-pagination`]:!!v.value,[`${y.value}-with-footer`]:!!$}),style:{...t.listStyle,...k("section")}},[o("div",{class:I(`${e}-header`,A("header")),style:k("header")},[t.showSelectAll?o(le,null,[!t.showRemove&&!v.value&&s,d]):null,o("span",{class:`${e}-header-selected`},[Q(T.value.length,O.value.length)]),o("span",{class:I(`${e}-header-title`,A("title")),style:k("title")},[t.titleText])]),o("div",{class:I(`${e}-body`,A("body"),{[`${e}-body-with-search`]:!!t.showSearch}),style:k("body")},[g,p]),$&&o("div",{class:I(`${e}-footer`,A("footer")),style:k("footer")},[$])])}}}),M=B({name:"Transfer",props:{dataSource:{type:Array,default:()=>[]},targetKeys:Array,defaultTargetKeys:{type:Array,default:()=>[]},selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},titles:{type:Array,default:()=>["",""]},operations:{type:Array,default:()=>[]},render:Function,rowKey:Function,showSearch:{type:[Boolean,Object],default:!1},filterOption:Function,footer:Function,listStyle:{type:[Object,Function],default:()=>({})},disabled:Boolean,showSelectAll:{type:Boolean,default:!0},selectAllLabels:{type:Array,default:()=>[]},oneWay:Boolean,draggable:Boolean,pagination:{type:[Boolean,Object],default:void 0},status:String,locale:{type:Object,default:()=>({})},rootClassName:String,classNames:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},emits:["update:targetKeys","change","update:selectedKeys","selectChange","search","scroll","reorder"],setup(t,{emit:r}){const c=we("transfer"),y=xe(),n=f(()=>({...y.value.Transfer,...t.locale})),l=w([...t.defaultTargetKeys]),x=w([...t.defaultSelectedKeys]);Z(()=>t.targetKeys,e=>{e&&(l.value=[...e])}),Z(()=>t.selectedKeys,e=>{e&&(x.value=[...e])});const v=f(()=>t.targetKeys??l.value),H=f(()=>t.selectedKeys??x.value),W=f(()=>t.dataSource.map(e=>({...e,key:t.rowKey?t.rowKey(e):e.key}))),D=f(()=>W.value.filter(e=>!v.value.includes(e.key))),O=f(()=>new Map(W.value.map(e=>[e.key,e]))),R=f(()=>v.value.map(e=>O.value.get(e)).filter(Boolean)),T=f(()=>H.value.filter(e=>D.value.some(a=>a.key===e))),S=f(()=>H.value.filter(e=>R.value.some(a=>a.key===e)));function z(e){x.value=e,r("update:selectedKeys",e)}function J(e,a){const s=e==="left"?S.value:T.value,d=e==="left"?[...a,...s]:[...s,...a];z(d),e==="left"?r("selectChange",a,S.value):r("selectChange",T.value,a)}function Q(e){const a=e==="right"?T.value:S.value,s=new Set(W.value.filter(p=>p.disabled).map(p=>p.key)),d=a.filter(p=>!s.has(p)),g=new Set(d),i=e==="right"?[...d,...v.value]:v.value.filter(p=>!g.has(p));l.value=i,r("update:targetKeys",i);const u=e==="right"?S.value:T.value;z(u),e==="right"?r("selectChange",[],S.value):r("selectChange",T.value,[]),r("change",i,e,d)}const ee=()=>Q("right"),A=()=>Q("left"),k={left:null,right:null};function _(e,a,s,d){var b;const g=e==="left",i=g?T.value:S.value,u=(g?D.value:R.value).filter(F=>!F.disabled),p=u.findIndex(F=>F.key===a),$=new Set(i);if(d&&k[e]!==null){const F=Math.min(k[e],p),K=Math.max(k[e],p);for(let C=F;C<=K;C++){const U=(b=u[C])==null?void 0:b.key;U!==void 0&&$.add(U)}}else $.has(a)&&$.delete(a),s&&$.add(a),k[e]=s?p:null;J(e,[...$])}function L(e,a,s){const d=e==="left"?T.value:S.value;let g;if(s==="replace")g=a;else if(s)g=[...new Set([...d,...a])];else{const i=new Set(a);g=d.filter(u=>!i.has(u))}k[e]=null,J(e,g)}function P(e){const a=new Set(e),s=v.value.filter(d=>!a.has(d));l.value=s,r("update:targetKeys",s),z(T.value),r("change",s,"left",[...e])}function te(e,a,s){if(e===a)return;const d=[...v.value],g=d.indexOf(e),i=d.indexOf(a);if(g<0||i<0)return;const u=d.slice();u.splice(g,1);const p=u.indexOf(a),$=s?p+1:p;u.splice($,0,e),l.value=u,r("update:targetKeys",u);const b={direction:"right",oldTargetKeys:d,newTargetKeys:u,activeKey:e,fromIndex:g,toIndex:u.indexOf(e)};r("reorder",b)}function ne(e){return typeof t.listStyle=="function"?t.listStyle({direction:e}):t.listStyle}const ae=f(()=>T.value.length>0),se=f(()=>S.value.length>0),Y=f(()=>t.operations||[]);function G(e){var d,g;const a=e==="left",s=n.value;return{prefixCls:c,direction:e,titleText:((d=t.titles)==null?void 0:d[a?0:1])??"",dataSource:a?D.value:R.value,checkedKeys:a?T.value:S.value,disabled:t.disabled,showSearch:t.showSearch,showSelectAll:t.showSelectAll,showRemove:t.oneWay&&!a,draggable:!!t.draggable&&!a,pagination:t.pagination,selectAllLabel:(g=t.selectAllLabels)==null?void 0:g[a?0:1],render:t.render,filterOption:t.filterOption,footer:t.footer,listStyle:ne(e),classNames:t.classNames,styles:t.styles,searchPlaceholder:s.searchPlaceholder,notFoundContent:t.locale.notFoundContent??s.notFoundContent,itemUnit:s.itemUnit,itemsUnit:s.itemsUnit,selectAll:s.selectAll,deselectAll:s.deselectAll,selectCurrent:s.selectCurrent,selectInvert:s.selectInvert,removeAll:s.removeAll,removeCurrent:s.removeCurrent,onItemSelect:(i,u,p)=>_(e,i,u,p==null?void 0:p.shiftKey),onItemSelectAll:(i,u)=>L(e,i,u),onItemRemove:i=>P(i),onReorder:(i,u,p)=>te(i,u,p),onFilter:(i,u)=>r("search",i,u),onScroll:(i,u)=>r("scroll",i,u)}}return()=>o("div",{class:I(c,t.rootClassName,t.classNames.root,{[`${c}-disabled`]:t.disabled,[`${c}-status-error`]:t.status==="error",[`${c}-status-warning`]:t.status==="warning"}),style:t.styles.root},[o(me,G("left"),null),o("div",{class:I(`${c}-actions`,t.classNames.actions),style:t.styles.actions},[o(ue,{type:"primary",size:"small",icon:$e,disabled:!ae.value||t.disabled,onClick:ee},{default:()=>[Y.value[0]]}),!t.oneWay&&o(ue,{type:"primary",size:"small",icon:De,disabled:!se.value||t.disabled,onClick:A},{default:()=>[Y.value[1]]})]),o(me,G("right"),null)])}}),_e=B({__name:"TransferBasic",setup(t){const r=Array.from({length:10},(y,n)=>({key:String(n),title:`选项 ${n+1}`,description:`描述 ${n+1}`,disabled:n===3})),c=w(["1","3","5"]);return(y,n)=>(j(),q(h(M),{"target-keys":c.value,"onUpdate:targetKeys":n[0]||(n[0]=l=>c.value=l),"data-source":h(r),titles:["待选","已选"],"show-search":""},null,8,["target-keys","data-source"]))}}),Le=`<template>
  <Transfer v-model:target-keys="targetKeys" :data-source="dataSource" :titles="['待选', '已选']" show-search />
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
`,Ne=B({__name:"TransferCustom",setup(t){const r=Array.from({length:10},(y,n)=>({key:String(n),title:`选项 ${n+1}`})),c=w(["1","3"]);return(y,n)=>(j(),q(h(M),{"target-keys":c.value,"onUpdate:targetKeys":n[0]||(n[0]=l=>c.value=l),"data-source":h(r),titles:["待选","已选"],render:l=>`[${l.title}]`},null,8,["target-keys","data-source","render"]))}}),Be=`<template>
  <Transfer
    v-model:target-keys="targetKeys"
    :data-source="dataSource"
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
`,Pe={style:{"margin-top":"12px",color:"rgba(0, 0, 0, 0.45)","font-size":"12px"}},Fe=B({__name:"TransferDraggable",setup(t){const r=Array.from({length:8},(n,l)=>({key:String(l),title:`Item ${l+1}`})),c=w(["0","1","2","3"]);function y(n){console.log("reorder",n)}return(n,l)=>(j(),ye(le,null,[o(h(M),{"target-keys":c.value,"onUpdate:targetKeys":l[0]||(l[0]=x=>c.value=x),"data-source":h(r),titles:["源","目标（可拖拽排序）"],draggable:"",onReorder:y},null,8,["target-keys","data-source"]),m("p",Pe," 当前顺序："+Ae(c.value.join(", ")||"（空）"),1)],64))}}),je=`<template>
  <Transfer
    v-model:target-keys="targetKeys"
    :data-source="dataSource"
    :titles="['源', '目标（可拖拽排序）']"
    draggable
    @reorder="handleReorder"
  />
  <p style="margin-top: 12px; color: rgba(0, 0, 0, 0.45); font-size: 12px">
    当前顺序：{{ targetKeys.join(', ') || '（空）' }}
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from 'ant-design-hmfw'
import type { TransferItem, TransferReorderInfo } from 'ant-design-hmfw'

const dataSource: TransferItem[] = Array.from({ length: 8 }, (_, i) => ({
  key: String(i),
  title: \`Item \${i + 1}\`,
}))

const targetKeys = ref<(string | number)[]>(['0', '1', '2', '3'])

function handleReorder(info: TransferReorderInfo) {
  console.log('reorder', info)
}
<\/script>
`,ze=B({__name:"TransferOneWay",setup(t){const r=Array.from({length:10},(y,n)=>({key:String(n),title:`Item ${n+1}`})),c=w(["1","3"]);return(y,n)=>(j(),q(h(M),{"target-keys":c.value,"onUpdate:targetKeys":n[0]||(n[0]=l=>c.value=l),"data-source":h(r),titles:["源","目标"],"one-way":""},null,8,["target-keys","data-source"]))}}),Ue=`<template>
  <Transfer v-model:target-keys="targetKeys" :data-source="dataSource" :titles="['源', '目标']" one-way />
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
`,Ve=B({__name:"TransferPagination",setup(t){const r=Array.from({length:20},(y,n)=>({key:String(n),title:`选项 ${n+1}`})),c=w(["2","5","8"]);return(y,n)=>(j(),q(h(M),{"target-keys":c.value,"onUpdate:targetKeys":n[0]||(n[0]=l=>c.value=l),"data-source":h(r),titles:["源","目标"],pagination:{pageSize:5}},null,8,["target-keys","data-source"]))}}),Ee=`<template>
  <Transfer
    v-model:target-keys="targetKeys"
    :data-source="dataSource"
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
`,Me=B({__name:"TransferSearch",setup(t){const r=Array.from({length:20},(y,n)=>({key:String(n),title:`选项 ${n+1}`,description:`描述 ${n+1}`,disabled:n%8===3})),c=w(["1","3","5"]);return(y,n)=>(j(),q(h(M),{"target-keys":c.value,"onUpdate:targetKeys":n[0]||(n[0]=l=>c.value=l),"data-source":h(r),titles:["待选","已选"],"show-search":""},null,8,["target-keys","data-source"]))}}),We=`<template>
  <Transfer v-model:target-keys="targetKeys" :data-source="dataSource" :titles="['待选', '已选']" show-search />
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
`,qe={class:"markdown-body"},ft={__name:"transfer",setup(t,{expose:r}){return r({frontmatter:{}}),(y,n)=>{const l=Ce("DemoBlock");return j(),ye("div",qe,[n[0]||(n[0]=m("h1",{id:"transfer-",tabindex:"-1"},"Transfer 穿梭框",-1)),n[1]||(n[1]=m("p",null,"双栏穿梭选择框，用于将元素从一列移入另一列。",-1)),n[2]||(n[2]=m("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=m("ul",null,[m("li",null,"需要在两个集合之间进行选择，且需要直观展示两个集合的内容时"),m("li",null,"用于将可选项在两个列表之间移动")],-1)),n[4]||(n[4]=m("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=m("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=m("p",null,"最简单的用法，展示了数据在左右两栏之间的移动。",-1)),o(l,{title:"基础用法",source:h(Le)},{default:V(()=>[o(_e)]),_:1},8,["source"]),n[7]||(n[7]=m("h3",{id:"-3",tabindex:"-1"},"带搜索框",-1)),n[8]||(n[8]=m("p",null,"支持搜索功能，可以快速找到目标项。",-1)),o(l,{title:"带搜索框",source:h(We)},{default:V(()=>[o(Me)]),_:1},8,["source"]),n[9]||(n[9]=m("h3",{id:"-4",tabindex:"-1"},"自定义渲染",-1)),n[10]||(n[10]=m("p",null,"可以自定义每项的渲染内容。",-1)),o(l,{title:"自定义渲染",source:h(Be)},{default:V(()=>[o(Ne)]),_:1},8,["source"]),n[11]||(n[11]=m("h3",{id:"-5",tabindex:"-1"},"分页",-1)),n[12]||(n[12]=m("p",null,"数据较多时，可以使用分页。",-1)),o(l,{title:"分页",source:h(Ee)},{default:V(()=>[o(Ve)]),_:1},8,["source"]),n[13]||(n[13]=m("h3",{id:"-6",tabindex:"-1"},"单向模式",-1)),n[14]||(n[14]=m("p",null,"单向模式下，只能从左往右移动，右侧项可单独删除。",-1)),o(l,{title:"单向模式",source:h(Ue)},{default:V(()=>[o(ze)]),_:1},8,["source"]),n[15]||(n[15]=m("h3",{id:"-7",tabindex:"-1"},"拖拽排序",-1)),n[16]||(n[16]=m("p",null,[ge("设置 "),m("code",null,"draggable"),ge(" 后，右侧列表项可通过 HTML5 拖拽调整顺序。")],-1)),o(l,{title:"拖拽排序",source:h(je)},{default:V(()=>[o(Fe)]),_:1},8,["source"]),n[17]||(n[17]=Ie(`<h2 id="api" tabindex="-1">API</h2><h3 id="transfer-props" tabindex="-1">Transfer Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据源</td><td><code>TransferItem[]</code></td><td><code>[]</code></td></tr><tr><td>targetKeys (v-model)</td><td>右侧列表的 key 集合</td><td><code>TransferKey[]</code></td><td><code>[]</code></td></tr><tr><td>selectedKeys (v-model)</td><td>选中项的 key 集合</td><td><code>TransferKey[]</code></td><td><code>[]</code></td></tr><tr><td>titles</td><td>标题集合</td><td><code>(VNode | string)[]</code></td><td><code>[&#39;&#39;, &#39;&#39;]</code></td></tr><tr><td>operations</td><td>操作按钮文案（已废弃）</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>render</td><td>自定义渲染函数</td><td><code>(item: TransferItem) =&gt; RenderResult</code></td><td>-</td></tr><tr><td>rowKey</td><td>自定义提取 key</td><td><code>(record: TransferItem) =&gt; TransferKey</code></td><td>-</td></tr><tr><td>showSearch</td><td>显示搜索框</td><td><code>boolean | TransferSearchOption</code></td><td><code>false</code></td></tr><tr><td>filterOption</td><td>自定义搜索函数</td><td><code>(input: string, item: TransferItem, direction: TransferDirection) =&gt; boolean</code></td><td>-</td></tr><tr><td>footer</td><td>列表底部渲染</td><td><code>(info: TransferListContext) =&gt; VNode | string | null</code></td><td>-</td></tr><tr><td>listStyle</td><td>列表样式</td><td><code>CSSProperties | ((info: { direction: TransferDirection }) =&gt; CSSProperties)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSelectAll</td><td>是否展示全选勾选框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>selectAllLabels</td><td>自定义全选文案</td><td><code>SelectAllLabel[]</code></td><td>-</td></tr><tr><td>oneWay</td><td>单向模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>draggable</td><td>是否允许通过拖拽对右侧列表项排序</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>分页配置</td><td><code>boolean | PaginationType</code></td><td>-</td></tr><tr><td>status</td><td>校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>locale</td><td>文案配置</td><td><code>Partial&lt;TransferLocale&gt;</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根元素 class</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 class</td><td><code>TransferSemanticClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style</td><td><code>TransferSemanticStyles</code></td><td>-</td></tr></tbody></table><h3 id="transfer-events" tabindex="-1">Transfer Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>右侧列表变化时触发</td><td><code>(targetKeys: TransferKey[], direction: TransferDirection, moveKeys: TransferKey[])</code></td></tr><tr><td>selectChange</td><td>选中项变化时触发</td><td><code>(sourceSelectedKeys: TransferKey[], targetSelectedKeys: TransferKey[])</code></td></tr><tr><td>search</td><td>搜索框内容变化时触发</td><td><code>(direction: TransferDirection, value: string)</code></td></tr><tr><td>scroll</td><td>列表滚动时触发</td><td><code>(direction: TransferDirection, e: Event)</code></td></tr><tr><td>reorder</td><td>右侧列表通过拖拽重新排序后触发</td><td><code>(info: TransferReorderInfo)</code></td></tr></tbody></table><h3 id="transferitem" tabindex="-1">TransferItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td></tr><tr><td>description</td><td>描述</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr></tbody></table><h3 id="paginationtype" tabindex="-1">PaginationType</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">PaginationType</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token builtin">boolean</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
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
</code></pre><h3 id="transferreorderinfo" tabindex="-1">TransferReorderInfo</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">TransferReorderInfo</span> <span class="token punctuation">{</span>
  direction<span class="token operator">:</span> TransferDirection
  oldTargetKeys<span class="token operator">:</span> TransferKey<span class="token punctuation">[</span><span class="token punctuation">]</span>
  newTargetKeys<span class="token operator">:</span> TransferKey<span class="token punctuation">[</span><span class="token punctuation">]</span>
  activeKey<span class="token operator">:</span> TransferKey
  fromIndex<span class="token operator">:</span> <span class="token builtin">number</span>
  toIndex<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="-8" tabindex="-1">特性说明</h2><h3 id="-9" tabindex="-1">搜索</h3><p>设置 <code>showSearch</code> 为 <code>true</code> 启用搜索功能，也可传对象 <code>{ placeholder, defaultValue }</code> 自定义搜索框。默认搜索匹配 <code>title</code> 字段，可通过 <code>filterOption</code> 自定义匹配逻辑。</p><h3 id="-10" tabindex="-1">分页</h3><p>数据量大时，可以设置 <code>pagination</code> 为 <code>true</code> 或配置对象启用分页。分页后全选操作仅影响当前页，可通过 selections 下拉菜单操作所有项。</p><h3 id="-11" tabindex="-1">单向模式</h3><p>设置 <code>oneWay</code> 后，只显示右箭头按钮，右侧列表每项显示删除按钮，用于&quot;添加到列表&quot;的场景。</p><h3 id="-12" tabindex="-1">拖拽排序</h3><p>设置 <code>draggable</code> 后，右侧目标列表的每一项变为可拖拽元素（基于 HTML5 Drag and Drop）。拖拽并释放后会触发 <code>update:targetKeys</code> 与 <code>reorder</code> 事件，<code>reorder</code> 回调携带旧/新 <code>targetKeys</code> 顺序、被拖拽项 <code>activeKey</code> 以及 <code>fromIndex</code> / <code>toIndex</code>。禁用项不可拖拽。</p><h3 id="shift-" tabindex="-1">Shift 多选</h3><p>按住 Shift 键点击可进行范围多选。</p><h3 id="-13" tabindex="-1">键盘操作</h3><p>暂不支持键盘导航（与 AntD 一致）。</p>`,28))])}}};export{ft as default};
