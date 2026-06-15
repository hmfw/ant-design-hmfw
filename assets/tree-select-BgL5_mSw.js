import{S as I}from"./Space-CYS8Qg3Y.js";import{o as A,N as ye,E as x,Q as X,x as Ce,w as ke,n as o,F as se,m as G,T as Te,f as m,t as $e,A as L,i as R,R as N,K as C,h as S,J as W,H as De,k as Ne,l as Me}from"./index-C7r7ERgN.js";import{c as E}from"./cls-S9IiI6wd.js";const z=A({name:"TreeSelect",props:{value:[String,Number,Array],defaultValue:[String,Number,Array],treeData:{type:Array,default:()=>[]},multiple:Boolean,treeCheckable:Boolean,treeCheckStrictly:Boolean,showCheckedStrategy:{type:String,default:"SHOW_CHILD"},showSearch:Boolean,autoClearSearchValue:{type:Boolean,default:!0},allowClear:Boolean,placeholder:{type:String,default:"请选择"},disabled:Boolean,size:{type:String,default:"middle"},status:{type:String,default:""},maxCount:Number,notFoundContent:{type:String,default:"暂无数据"},treeDefaultExpandAll:Boolean,treeDefaultExpandedKeys:{type:Array,default:()=>[]},open:{type:Boolean,default:void 0},defaultOpen:Boolean,fieldNames:Object,virtual:{type:Boolean,default:!0},listHeight:{type:Number,default:256},itemHeight:{type:Number,default:28},treeIcon:[Boolean,Object,String,Function],maxTagCount:[Number,String],maxTagPlaceholder:[String,Function],maxTagTextLength:Number},emits:["update:value","update:open","change","search","select","treeExpand","dropdownVisibleChange","openChange","clear"],setup(t,{emit:r}){const d=ye("tree-select"),$=x(null),u=x(null),b=x(null),U=x(!!t.defaultOpen),K=x({top:0,left:0,width:0}),w=x(""),Y=x(0),ue=m(()=>{var e;return((e=t.fieldNames)==null?void 0:e.label)??"label"}),ie=m(()=>{var e;return((e=t.fieldNames)==null?void 0:e.value)??"value"}),he=m(()=>{var e;return((e=t.fieldNames)==null?void 0:e.children)??"children"}),V=e=>e[ue.value],D=e=>e[ie.value],H=e=>e[he.value],O=m(()=>t.multiple||t.treeCheckable),B=m(()=>t.open!==void 0?t.open:U.value),M=x((e=>e??(O.value?[]:void 0))(t.defaultValue??t.value));X(()=>t.value,e=>{e!==void 0&&(M.value=e)});const ve=m(()=>t.value!==void 0?t.value:M.value),g=m(()=>{const e=ve.value;return e==null?[]:Array.isArray(e)?e:[e]}),k=m(()=>{const e=new Map,l=new Map,n=new Map,i=new Map,a=(s,c)=>{for(const f of s){const v=D(f);e.set(v,f),l.set(v,c),i.set(v,V(f));const h=H(f);h!=null&&h.length&&(n.set(v,h.map(D)),a(h,v))}};return a(t.treeData,void 0),{nodeMap:e,parentMap:l,childKeysMap:n,labelMap:i,rootKeys:t.treeData.map(D)}}),Z=e=>{const l=k.value.childKeysMap.get(e);return l!=null&&l.length?l.flatMap(n=>Z(n)):[e]},ee=e=>{const{childKeysMap:l,rootKeys:n}=k.value,i=new Set(e),a=new Set,s=c=>{const f=l.get(c);if(!(f!=null&&f.length))return i.has(c)?"checked":"none";let v=!0,h=!1;for(const p of f){const y=s(p);y==="checked"?h=!0:(y==="half"&&(h=!0),v=!1)}return v?(i.add(c),"checked"):(i.delete(c),h?(a.add(c),"half"):"none")};return n.forEach(s),{checked:i,half:a}},te=e=>e.flatMap(l=>[D(l),...te(H(l)??[])]),le=m(()=>t.treeDefaultExpandAll?te(t.treeData):t.treeDefaultExpandedKeys),T=x([...le.value]);X(le,e=>{T.value=[...e]});function ae(e,l=0,n=!1){return e.flatMap(i=>{const a=H(i),s=D(i),c=[{node:i,level:l,hasChildren:!!(a!=null&&a.length),valueKey:s,label:V(i),forceExpand:n}];return a!=null&&a.length&&(n||T.value.includes(s))&&c.push(...ae(a,l+1,n)),c})}const _=m(()=>{if(!w.value)return ae(t.treeData);const e=w.value.toLowerCase(),l=new Set,n=new Set,i=s=>{for(const c of s){const f=D(c);if(V(c).toLowerCase().includes(e)){l.add(f);let p=k.value.parentMap.get(f);for(;p!==void 0;)n.add(p),p=k.value.parentMap.get(p)}const h=H(c);h&&i(h)}};i(t.treeData);const a=(s,c=0)=>s.flatMap(f=>{const v=D(f),h=l.has(v),p=n.has(v);if(!h&&!p)return[];const y=H(f),F=[{node:f,level:c,hasChildren:!!(y!=null&&y.length),valueKey:v,label:V(f),forceExpand:p}];return y&&p&&F.push(...a(y,c+1)),F});return a(t.treeData)}),ne=m(()=>g.value.map(e=>k.value.labelMap.get(e)??String(e))),P=m(()=>t.virtual&&t.itemHeight>0&&_.value.length*t.itemHeight>t.listHeight),j=m(()=>{if(!P.value)return{start:0,end:_.value.length,offset:0};const e=_.value.length,l=5,n=Math.max(0,Math.floor(Y.value/t.itemHeight)-l),i=Math.ceil(t.listHeight/t.itemHeight)+l*2,a=Math.min(e,n+i);return{start:n,end:a,offset:n*t.itemHeight}}),fe=e=>{Y.value=e.target.scrollTop};X([w,()=>t.treeData,T],()=>{Y.value=0,b.value&&(b.value.scrollTop=0)});const pe=e=>{const l=t.maxTagTextLength;return l&&l>0&&e.length>l?`${e.slice(0,l)}...`:e},be=e=>{const l=t.maxTagPlaceholder;return typeof l=="function"?l(e):typeof l=="string"?l:`+ ${e.length} ...`},q=m(()=>{const e=g.value.length,l=t.maxTagCount;if(l===void 0||l==="responsive")return e;const n=Number(l);return!Number.isFinite(n)||n<0?e:Math.min(n,e)}),ge=e=>{if(e.icon!==void 0&&e.icon!==null)return typeof e.icon=="function"?e.icon(e):e.icon;const l=t.treeIcon;if(l==null||l===!1)return null;if(l===!0){const n=H(e);return n!=null&&n.length?"📁":"📄"}return typeof l=="function"?l(e):l};async function me(){if(!t.disabled&&(U.value=!0,r("update:open",!0),r("dropdownVisibleChange",!0),r("openChange",!0),await $e(),$.value)){const e=$.value.getBoundingClientRect();K.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width}}}function J(){U.value=!1,w.value="",r("update:open",!1),r("dropdownVisibleChange",!1),r("openChange",!1)}function Se(e){T.value.includes(e)?T.value=T.value.filter(l=>l!==e):T.value=[...T.value,e],r("treeExpand",T.value)}function de(e){if(!(e.selectable!==!1)||e.disabled||t.disabled)return;const n=D(e),i=V(e);if(t.treeCheckable){if(e.disableCheckbox)return;let a;if(t.treeCheckStrictly){const s=[...g.value],c=s.indexOf(n);c>=0?s.splice(c,1):s.push(n),a=s}else{const s=Z(n),c=new Set(g.value);s.every(h=>c.has(h))?s.forEach(h=>c.delete(h)):s.forEach(h=>c.add(h));const{checked:v}=ee(c);t.showCheckedStrategy==="SHOW_ALL"?a=Array.from(v):t.showCheckedStrategy==="SHOW_PARENT"?a=Array.from(v).filter(h=>{const p=k.value.childKeysMap.get(h);return p!=null&&p.length?p.every(y=>v.has(y)):!0}):a=Array.from(v).filter(h=>{var p;return!((p=k.value.childKeysMap.get(h))!=null&&p.length)})}if(t.maxCount!==void 0&&a.length>t.maxCount)return;M.value=a,r("update:value",a),r("change",a,a.map(s=>k.value.labelMap.get(s)??String(s))),r("select",n,e),t.autoClearSearchValue&&(w.value="")}else if(O.value){const a=[...g.value],s=a.indexOf(n);if(s>=0)a.splice(s,1);else{if(t.maxCount!==void 0&&a.length>=t.maxCount)return;a.push(n)}M.value=a,r("update:value",a),r("change",a,a.map(c=>k.value.labelMap.get(c)??String(c))),r("select",n,e),t.autoClearSearchValue&&(w.value="")}else M.value=n,r("update:value",n),r("change",n,i),r("select",n,e),J()}function we(e,l){l.stopPropagation();const n=g.value.filter(i=>i!==e);M.value=n,r("update:value",n),r("change",n,n.map(i=>k.value.labelMap.get(i)??String(i)))}function xe(e){e.stopPropagation();const l=O.value?[]:void 0;M.value=l,r("update:value",l),r("change",l,[]),r("clear")}const re=e=>{var l,n;B.value&&((l=$.value)!=null&&l.contains(e.target)||(n=u.value)!=null&&n.contains(e.target)||J())};Ce(()=>document.addEventListener("mousedown",re)),ke(()=>document.removeEventListener("mousedown",re));const oe=(e,l,n)=>{const{node:i,level:a,hasChildren:s,valueKey:c,label:f,forceExpand:v}=e,h=g.value.includes(c),p=v||T.value.includes(c),y=l.has(c),F=n.has(c),ce=ge(i);return o("div",{key:c,class:E(`${d}-tree-node`,{[`${d}-tree-node-selected`]:h,[`${d}-tree-node-disabled`]:i.disabled}),style:{paddingLeft:`${a*20+8}px`,height:P.value?`${t.itemHeight}px`:void 0,minHeight:P.value?`${t.itemHeight}px`:void 0}},[o("span",{class:E(`${d}-tree-switcher`,{[`${d}-tree-switcher-noop`]:!s}),onClick:Q=>{Q.stopPropagation(),s&&!v&&Se(c)}},[s&&!v?p?"▾":"▸":null]),t.treeCheckable&&o("span",{class:E(`${d}-tree-checkbox`,{[`${d}-tree-checkbox-checked`]:y,[`${d}-tree-checkbox-indeterminate`]:F,[`${d}-tree-checkbox-disabled`]:i.disabled||i.disableCheckbox}),onClick:Q=>{Q.stopPropagation(),de(i)}},[o("span",{class:`${d}-tree-checkbox-inner`},null)]),ce!==null&&o("span",{class:`${d}-tree-icon`},[ce]),o("span",{class:`${d}-tree-node-content`,onClick:()=>de(i)},[f])])};return()=>{const e=g.value.length>0,l=t.allowClear&&e&&!t.disabled;let n=new Set,i=new Set;if(t.treeCheckable&&!t.treeCheckStrictly){const a=new Set(g.value),s=ee(a);n=s.checked,i=s.half}else t.treeCheckable&&(n=new Set(g.value));return o("div",{class:E(d,`${d}-${t.size}`,{[`${d}-open`]:B.value,[`${d}-disabled`]:t.disabled,[`${d}-status-error`]:t.status==="error",[`${d}-status-warning`]:t.status==="warning"})},[o("div",{ref:$,class:`${d}-selector`,onClick:B.value?J:me},[O.value?o(se,null,[ne.value.slice(0,q.value).map((a,s)=>o("span",{key:g.value[s],class:`${d}-selection-item`},[o("span",{class:`${d}-selection-item-content`},[pe(a)]),o("span",{class:`${d}-selection-item-remove`,onClick:c=>we(g.value[s],c)},[G("×")])])),g.value.length>q.value&&o("span",{class:E(`${d}-selection-item`,`${d}-selection-overflow`)},[o("span",{class:`${d}-selection-item-content`},[be(g.value.slice(q.value))])]),t.showSearch&&o("input",{class:`${d}-selection-search`,value:w.value,onInput:a=>{w.value=a.target.value,r("search",w.value)},onClick:a=>a.stopPropagation()},null),!e&&!w.value&&o("span",{class:`${d}-selection-placeholder`},[t.placeholder])]):o(se,null,[e?o("span",{class:`${d}-selection-item`},[ne.value[0]]):o("span",{class:`${d}-selection-placeholder`},[t.placeholder]),t.showSearch&&B.value&&o("input",{class:`${d}-selection-search`,value:w.value,onInput:a=>{w.value=a.target.value,r("search",w.value)},onClick:a=>a.stopPropagation()},null)])]),o("div",{class:`${d}-arrow`},[o("span",{class:E(`${d}-arrow-icon`,{[`${d}-arrow-icon-open`]:B.value})},[G("▾")])]),l&&o("span",{class:`${d}-clear`,onClick:xe},[G("×")]),B.value&&o(Te,{to:"body"},{default:()=>[o("div",{ref:u,class:`${d}-dropdown`,style:{position:"absolute",top:`${K.value.top}px`,left:`${K.value.left}px`,minWidth:`${K.value.width}px`,zIndex:1050}},[_.value.length===0?o("div",{class:`${d}-dropdown-empty`},[t.notFoundContent]):o("div",{ref:b,class:`${d}-dropdown-list`,style:{maxHeight:`${t.listHeight}px`,overflowY:"auto",position:"relative"},onScroll:fe},[P.value?o("div",{class:`${d}-dropdown-list-holder`,style:{height:`${_.value.length*t.itemHeight}px`,position:"relative"}},[o("div",{class:`${d}-dropdown-list-inner`,style:{transform:`translateY(${j.value.offset}px)`,position:"absolute",top:0,left:0,right:0}},[_.value.slice(j.value.start,j.value.end).map(a=>oe(a,n,i))])]):_.value.map(a=>oe(a,n,i))])])]})])}}}),_e=A({__name:"TreeSelectBasic",setup(t){const r=x(),d=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return($,u)=>(L(),R(C(I),{direction:"vertical",style:{width:"300px"}},{default:N(()=>[o(C(z),{value:r.value,"onUpdate:value":u[0]||(u[0]=b=>r.value=b),"tree-data":d,placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),S("span",null,"选中："+W(r.value),1)]),_:1}))}}),He=`<template>
  <Space direction="vertical" style="width: 300px">
    <TreeSelect v-model:value="value" :tree-data="treeData" placeholder="请选择" style="width: 100%" />
    <span>选中：{{ value }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect, Space } from 'ant-design-hmfw'
import type { TreeSelectNode } from 'ant-design-hmfw'

const value = ref<string>()

const treeData: TreeSelectNode[] = [
  {
    value: 'parent1',
    label: '父节点 1',
    children: [
      { value: 'child1-1', label: '子节点 1-1' },
      { value: 'child1-2', label: '子节点 1-2' },
    ],
  },
  {
    value: 'parent2',
    label: '父节点 2',
    children: [{ value: 'child2-1', label: '子节点 2-1' }],
  },
]
<\/script>
`,Be=A({__name:"TreeSelectCheckable",setup(t){const r=x([]),d=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return($,u)=>(L(),R(C(I),{direction:"vertical",style:{width:"300px"}},{default:N(()=>[o(C(z),{value:r.value,"onUpdate:value":u[0]||(u[0]=b=>r.value=b),"tree-data":d,"tree-checkable":"",placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),S("span",null,"选中："+W(r.value),1)]),_:1}))}}),Ee=`<template>
  <Space direction="vertical" style="width: 300px">
    <TreeSelect v-model:value="value" :tree-data="treeData" tree-checkable placeholder="请选择" style="width: 100%" />
    <span>选中：{{ value }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect, Space } from 'ant-design-hmfw'
import type { TreeSelectNode } from 'ant-design-hmfw'

const value = ref<(string | number)[]>([])

const treeData: TreeSelectNode[] = [
  {
    value: 'parent1',
    label: '父节点 1',
    children: [
      { value: 'child1-1', label: '子节点 1-1' },
      { value: 'child1-2', label: '子节点 1-2' },
    ],
  },
  {
    value: 'parent2',
    label: '父节点 2',
    children: [{ value: 'child2-1', label: '子节点 2-1' }],
  },
]
<\/script>
`,Ve=A({__name:"TreeSelectMultiple",setup(t){const r=x([]),d=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return($,u)=>(L(),R(C(I),{direction:"vertical",style:{width:"300px"}},{default:N(()=>[o(C(z),{value:r.value,"onUpdate:value":u[0]||(u[0]=b=>r.value=b),"tree-data":d,multiple:"",placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),S("span",null,"选中："+W(r.value),1)]),_:1}))}}),Ae=`<template>
  <Space direction="vertical" style="width: 300px">
    <TreeSelect v-model:value="value" :tree-data="treeData" multiple placeholder="请选择" style="width: 100%" />
    <span>选中：{{ value }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect, Space } from 'ant-design-hmfw'
import type { TreeSelectNode } from 'ant-design-hmfw'

const value = ref<(string | number)[]>([])

const treeData: TreeSelectNode[] = [
  {
    value: 'parent1',
    label: '父节点 1',
    children: [
      { value: 'child1-1', label: '子节点 1-1' },
      { value: 'child1-2', label: '子节点 1-2' },
    ],
  },
  {
    value: 'parent2',
    label: '父节点 2',
    children: [{ value: 'child2-1', label: '子节点 2-1' }],
  },
]
<\/script>
`,Le=A({__name:"TreeSelectSearch",setup(t){const r=x(),d=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"},{value:"child2-2",label:"子节点 2-2"}]}];return($,u)=>(L(),R(C(I),{direction:"vertical",style:{width:"300px"}},{default:N(()=>[o(C(z),{value:r.value,"onUpdate:value":u[0]||(u[0]=b=>r.value=b),"tree-data":d,"show-search":"",placeholder:"搜索节点",style:{width:"100%"}},null,8,["value"]),S("span",null,"选中："+W(r.value),1)]),_:1}))}}),Ke=`<template>
  <Space direction="vertical" style="width: 300px">
    <TreeSelect v-model:value="value" :tree-data="treeData" show-search placeholder="搜索节点" style="width: 100%" />
    <span>选中：{{ value }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect, Space } from 'ant-design-hmfw'
import type { TreeSelectNode } from 'ant-design-hmfw'

const value = ref<string>()

const treeData: TreeSelectNode[] = [
  {
    value: 'parent1',
    label: '父节点 1',
    children: [
      { value: 'child1-1', label: '子节点 1-1' },
      { value: 'child1-2', label: '子节点 1-2' },
    ],
  },
  {
    value: 'parent2',
    label: '父节点 2',
    children: [
      { value: 'child2-1', label: '子节点 2-1' },
      { value: 'child2-2', label: '子节点 2-2' },
    ],
  },
]
<\/script>
`,Oe={class:"markdown-body"},We={__name:"tree-select",setup(t,{expose:r}){return r({frontmatter:{}}),($,u)=>{const b=De("DemoBlock");return L(),Ne("div",Oe,[u[0]||(u[0]=S("h1",{id:"treeselect-",tabindex:"-1"},"TreeSelect 树形选择",-1)),u[1]||(u[1]=S("p",null,"树形选择控件，类似 Select 的选择控件，可选择的数据结构是一个树形结构。",-1)),u[2]||(u[2]=S("h2",{id:"",tabindex:"-1"},"何时使用",-1)),u[3]||(u[3]=S("ul",null,[S("li",null,"从一个树形结构中进行选择时，例如选择部门、分类等")],-1)),u[4]||(u[4]=S("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),u[5]||(u[5]=S("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),o(b,{title:"基础用法",source:C(He)},{default:N(()=>[o(_e)]),_:1},8,["source"]),u[6]||(u[6]=S("h3",{id:"-3",tabindex:"-1"},"多选",-1)),o(b,{title:"多选",source:C(Ae)},{default:N(()=>[o(Ve)]),_:1},8,["source"]),u[7]||(u[7]=S("h3",{id:"-4",tabindex:"-1"},"可勾选",-1)),o(b,{title:"可勾选",source:C(Ee)},{default:N(()=>[o(Be)]),_:1},8,["source"]),u[8]||(u[8]=S("h3",{id:"-5",tabindex:"-1"},"搜索",-1)),o(b,{title:"搜索",source:C(Ke)},{default:N(()=>[o(Le)]),_:1},8,["source"]),u[9]||(u[9]=Me('<h2 id="api" tabindex="-1">API</h2><h3 id="treeselect-props" tabindex="-1">TreeSelect Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>选中的值</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>treeData</td><td>树形数据</td><td><code>TreeSelectNode[]</code></td><td><code>[]</code></td></tr><tr><td>multiple</td><td>是否多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeCheckable</td><td>是否显示 checkbox</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeCheckStrictly</td><td>checkable 状态下节点选择完全受控（父子节点选中状态不再关联）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showCheckedStrategy</td><td>checkable 时选中项回填方式</td><td><code>&#39;SHOW_ALL&#39; | &#39;SHOW_PARENT&#39; | &#39;SHOW_CHILD&#39;</code></td><td><code>&#39;SHOW_CHILD&#39;</code></td></tr><tr><td>showSearch</td><td>是否显示搜索框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoClearSearchValue</td><td>多选模式下选中后自动清空搜索框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>allowClear</td><td>是否允许清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>maxCount</td><td>可选中的最多数量，仅在多选时生效</td><td><code>number</code></td><td>-</td></tr><tr><td>notFoundContent</td><td>下拉列表为空时显示的内容</td><td><code>string</code></td><td><code>&#39;暂无数据&#39;</code></td></tr><tr><td>treeDefaultExpandAll</td><td>是否默认展开所有节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeDefaultExpandedKeys</td><td>默认展开的树节点 key</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>open</td><td>受控展开下拉菜单</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否展开下拉菜单</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>fieldNames</td><td>自定义字段名</td><td><code>{ label?, value?, children? }</code></td><td>-</td></tr></tbody></table><h3 id="treeselect-events" tabindex="-1">TreeSelect Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中树节点时调用</td><td><code>(value, labels)</code></td></tr><tr><td>select</td><td>被选中时调用</td><td><code>(value, node)</code></td></tr><tr><td>search</td><td>搜索框值变化时调用</td><td><code>(value: string)</code></td></tr><tr><td>treeExpand</td><td>展开节点时调用</td><td><code>(expandedKeys)</code></td></tr><tr><td>openChange</td><td>展开下拉菜单的回调</td><td><code>(open: boolean)</code></td></tr><tr><td>dropdownVisibleChange</td><td>展开下拉菜单的回调（同 openChange）</td><td><code>(visible: boolean)</code></td></tr><tr><td>clear</td><td>清除时调用</td><td><code>()</code></td></tr></tbody></table><h3 id="treeselectnode" tabindex="-1">TreeSelectNode</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>节点值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>节点标签</td><td><code>string</code></td></tr><tr><td>children</td><td>子节点</td><td><code>TreeSelectNode[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>selectable</td><td>是否可选（单选/普通多选时生效）</td><td><code>boolean</code></td></tr><tr><td>disableCheckbox</td><td>treeCheckable 时禁用该节点的勾选框</td><td><code>boolean</code></td></tr><tr><td>isLeaf</td><td>是否叶子节点（仅用于标记）</td><td><code>boolean</code></td></tr></tbody></table>',7))])}}};export{We as default};
