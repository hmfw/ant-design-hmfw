import{S as H}from"./Space-2czrm96G.js";import{m as E,L as he,B as x,O as te,v as ve,u as fe,l as c,F as le,k as U,T as pe,d as C,r as be,y as L,g as F,P as _,I as w,f as m,H as I,E as me,i as ge,j as Se}from"./index-BQisgCTe.js";import{c as A}from"./cls-S9IiI6wd.js";const W=E({name:"TreeSelect",props:{value:[String,Number,Array],defaultValue:[String,Number,Array],treeData:{type:Array,default:()=>[]},multiple:Boolean,treeCheckable:Boolean,treeCheckStrictly:Boolean,showCheckedStrategy:{type:String,default:"SHOW_CHILD"},showSearch:Boolean,autoClearSearchValue:{type:Boolean,default:!0},allowClear:Boolean,placeholder:{type:String,default:"请选择"},disabled:Boolean,size:{type:String,default:"middle"},status:{type:String,default:""},maxCount:Number,notFoundContent:{type:String,default:"暂无数据"},treeDefaultExpandAll:Boolean,treeDefaultExpandedKeys:{type:Array,default:()=>[]},open:{type:Boolean,default:void 0},defaultOpen:Boolean,fieldNames:Object},emits:["update:value","update:open","change","search","select","treeExpand","dropdownVisibleChange","openChange","clear"],setup(t,{emit:a}){const n=he("tree-select"),T=x(null),r=x(null),b=x(!!t.defaultOpen),O=x({top:0,left:0,width:0}),g=x(""),ae=C(()=>{var e;return((e=t.fieldNames)==null?void 0:e.label)??"label"}),ne=C(()=>{var e;return((e=t.fieldNames)==null?void 0:e.value)??"value"}),de=C(()=>{var e;return((e=t.fieldNames)==null?void 0:e.children)??"children"}),B=e=>e[ae.value],D=e=>e[ne.value],V=e=>e[de.value],K=C(()=>t.multiple||t.treeCheckable),N=C(()=>t.open!==void 0?t.open:b.value),M=x((e=>e??(K.value?[]:void 0))(t.defaultValue??t.value));te(()=>t.value,e=>{e!==void 0&&(M.value=e)});const re=C(()=>t.value!==void 0?t.value:M.value),y=C(()=>{const e=re.value;return e==null?[]:Array.isArray(e)?e:[e]}),k=C(()=>{const e=new Map,u=new Map,d=new Map,h=new Map,l=(o,s)=>{for(const v of o){const f=D(v);e.set(f,v),u.set(f,s),h.set(f,B(v));const i=V(v);i!=null&&i.length&&(d.set(f,i.map(D)),l(i,f))}};return l(t.treeData,void 0),{nodeMap:e,parentMap:u,childKeysMap:d,labelMap:h,rootKeys:t.treeData.map(D)}}),j=e=>{const u=k.value.childKeysMap.get(e);return u!=null&&u.length?u.flatMap(d=>j(d)):[e]},q=e=>{const{childKeysMap:u,rootKeys:d}=k.value,h=new Set(e),l=new Set,o=s=>{const v=u.get(s);if(!(v!=null&&v.length))return h.has(s)?"checked":"none";let f=!0,i=!1;for(const p of v){const S=o(p);S==="checked"?i=!0:(S==="half"&&(i=!0),f=!1)}return f?(h.add(s),"checked"):(h.delete(s),i?(l.add(s),"half"):"none")};return d.forEach(o),{checked:h,half:l}},X=e=>e.flatMap(u=>[D(u),...X(V(u)??[])]),Y=C(()=>t.treeDefaultExpandAll?X(t.treeData):t.treeDefaultExpandedKeys),$=x([...Y.value]);te(Y,e=>{$.value=[...e]});function G(e,u=0,d=!1){return e.flatMap(h=>{const l=V(h),o=D(h),s=[{node:h,level:u,hasChildren:!!(l!=null&&l.length),valueKey:o,label:B(h),forceExpand:d}];return l!=null&&l.length&&(d||$.value.includes(o))&&s.push(...G(l,u+1,d)),s})}const J=C(()=>{if(!g.value)return G(t.treeData);const e=g.value.toLowerCase(),u=new Set,d=new Set,h=o=>{for(const s of o){const v=D(s);if(B(s).toLowerCase().includes(e)){u.add(v);let p=k.value.parentMap.get(v);for(;p!==void 0;)d.add(p),p=k.value.parentMap.get(p)}const i=V(s);i&&h(i)}};h(t.treeData);const l=(o,s=0)=>o.flatMap(v=>{const f=D(v),i=u.has(f),p=d.has(f);if(!i&&!p)return[];const S=V(v),P=[{node:v,level:s,hasChildren:!!(S!=null&&S.length),valueKey:f,label:B(v),forceExpand:p}];return S&&p&&P.push(...l(S,s+1)),P});return l(t.treeData)}),Q=C(()=>y.value.map(e=>k.value.labelMap.get(e)??String(e)));async function ce(){if(!t.disabled&&(b.value=!0,a("update:open",!0),a("dropdownVisibleChange",!0),a("openChange",!0),await be(),T.value)){const e=T.value.getBoundingClientRect();O.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width}}}function z(){b.value=!1,g.value="",a("update:open",!1),a("dropdownVisibleChange",!1),a("openChange",!1)}function oe(e){$.value.includes(e)?$.value=$.value.filter(u=>u!==e):$.value=[...$.value,e],a("treeExpand",$.value)}function Z(e){if(!(e.selectable!==!1)||e.disabled||t.disabled)return;const d=D(e),h=B(e);if(t.treeCheckable){if(e.disableCheckbox)return;let l;if(t.treeCheckStrictly){const o=[...y.value],s=o.indexOf(d);s>=0?o.splice(s,1):o.push(d),l=o}else{const o=j(d),s=new Set(y.value);o.every(i=>s.has(i))?o.forEach(i=>s.delete(i)):o.forEach(i=>s.add(i));const{checked:f}=q(s);t.showCheckedStrategy==="SHOW_ALL"?l=Array.from(f):t.showCheckedStrategy==="SHOW_PARENT"?l=Array.from(f).filter(i=>{const p=k.value.childKeysMap.get(i);return p!=null&&p.length?p.every(S=>f.has(S)):!0}):l=Array.from(f).filter(i=>{var p;return!((p=k.value.childKeysMap.get(i))!=null&&p.length)})}if(t.maxCount!==void 0&&l.length>t.maxCount)return;M.value=l,a("update:value",l),a("change",l,l.map(o=>k.value.labelMap.get(o)??String(o))),a("select",d,e),t.autoClearSearchValue&&(g.value="")}else if(K.value){const l=[...y.value],o=l.indexOf(d);if(o>=0)l.splice(o,1);else{if(t.maxCount!==void 0&&l.length>=t.maxCount)return;l.push(d)}M.value=l,a("update:value",l),a("change",l,l.map(s=>k.value.labelMap.get(s)??String(s))),a("select",d,e),t.autoClearSearchValue&&(g.value="")}else M.value=d,a("update:value",d),a("change",d,h),a("select",d,e),z()}function se(e,u){u.stopPropagation();const d=y.value.filter(h=>h!==e);M.value=d,a("update:value",d),a("change",d,d.map(h=>k.value.labelMap.get(h)??String(h)))}function ue(e){e.stopPropagation();const u=K.value?[]:void 0;M.value=u,a("update:value",u),a("change",u,[]),a("clear")}const ee=e=>{var u,d;N.value&&((u=T.value)!=null&&u.contains(e.target)||(d=r.value)!=null&&d.contains(e.target)||z())};return ve(()=>document.addEventListener("mousedown",ee)),fe(()=>document.removeEventListener("mousedown",ee)),()=>{const e=y.value.length>0,u=t.allowClear&&e&&!t.disabled;let d=new Set,h=new Set;if(t.treeCheckable&&!t.treeCheckStrictly){const l=new Set(y.value),o=q(l);d=o.checked,h=o.half}else t.treeCheckable&&(d=new Set(y.value));return c("div",{class:A(n,`${n}-${t.size}`,{[`${n}-open`]:N.value,[`${n}-disabled`]:t.disabled,[`${n}-status-error`]:t.status==="error",[`${n}-status-warning`]:t.status==="warning"})},[c("div",{ref:T,class:`${n}-selector`,onClick:N.value?z:ce},[K.value?c(le,null,[Q.value.map((l,o)=>c("span",{key:y.value[o],class:`${n}-selection-item`},[c("span",{class:`${n}-selection-item-content`},[l]),c("span",{class:`${n}-selection-item-remove`,onClick:s=>se(y.value[o],s)},[U("×")])])),t.showSearch&&c("input",{class:`${n}-selection-search`,value:g.value,onInput:l=>{g.value=l.target.value,a("search",g.value)},onClick:l=>l.stopPropagation()},null),!e&&!g.value&&c("span",{class:`${n}-selection-placeholder`},[t.placeholder])]):c(le,null,[e?c("span",{class:`${n}-selection-item`},[Q.value[0]]):c("span",{class:`${n}-selection-placeholder`},[t.placeholder]),t.showSearch&&N.value&&c("input",{class:`${n}-selection-search`,value:g.value,onInput:l=>{g.value=l.target.value,a("search",g.value)},onClick:l=>l.stopPropagation()},null)])]),c("div",{class:`${n}-arrow`},[c("span",{class:A(`${n}-arrow-icon`,{[`${n}-arrow-icon-open`]:N.value})},[U("▾")])]),u&&c("span",{class:`${n}-clear`,onClick:ue},[U("×")]),N.value&&c(pe,{to:"body"},{default:()=>[c("div",{ref:r,class:`${n}-dropdown`,style:{position:"absolute",top:`${O.value.top}px`,left:`${O.value.left}px`,minWidth:`${O.value.width}px`,zIndex:1050}},[J.value.length===0?c("div",{class:`${n}-dropdown-empty`},[t.notFoundContent]):J.value.map(({node:l,level:o,hasChildren:s,valueKey:v,label:f,forceExpand:i})=>{const p=y.value.includes(v),S=i||$.value.includes(v),P=d.has(v),ie=h.has(v);return c("div",{key:v,class:A(`${n}-tree-node`,{[`${n}-tree-node-selected`]:p,[`${n}-tree-node-disabled`]:l.disabled}),style:{paddingLeft:`${o*20+8}px`}},[c("span",{class:A(`${n}-tree-switcher`,{[`${n}-tree-switcher-noop`]:!s}),onClick:R=>{R.stopPropagation(),s&&!i&&oe(v)}},[s&&!i?S?"▾":"▸":null]),t.treeCheckable&&c("span",{class:A(`${n}-tree-checkbox`,{[`${n}-tree-checkbox-checked`]:P,[`${n}-tree-checkbox-indeterminate`]:ie,[`${n}-tree-checkbox-disabled`]:l.disabled||l.disableCheckbox}),onClick:R=>{R.stopPropagation(),Z(l)}},[c("span",{class:`${n}-tree-checkbox-inner`},null)]),c("span",{class:`${n}-tree-node-content`,onClick:()=>Z(l)},[f])])})])]})])}}}),we=E({__name:"TreeSelectBasic",setup(t){const a=x(),n=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return(T,r)=>(L(),F(w(H),{direction:"vertical",style:{width:"300px"}},{default:_(()=>[c(w(W),{value:a.value,"onUpdate:value":r[0]||(r[0]=b=>a.value=b),"tree-data":n,placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),m("span",null,"选中："+I(a.value),1)]),_:1}))}}),ye=`<template>
  <Space direction="vertical" style="width: 300px">
    <TreeSelect
      v-model:value="value"
      :tree-data="treeData"
      placeholder="请选择"
      style="width: 100%"
    />
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
    ],
  },
]
<\/script>
`,Ce=E({__name:"TreeSelectCheckable",setup(t){const a=x([]),n=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return(T,r)=>(L(),F(w(H),{direction:"vertical",style:{width:"300px"}},{default:_(()=>[c(w(W),{value:a.value,"onUpdate:value":r[0]||(r[0]=b=>a.value=b),"tree-data":n,"tree-checkable":"",placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),m("span",null,"选中："+I(a.value),1)]),_:1}))}}),xe=`<template>
  <Space direction="vertical" style="width: 300px">
    <TreeSelect
      v-model:value="value"
      :tree-data="treeData"
      tree-checkable
      placeholder="请选择"
      style="width: 100%"
    />
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
    children: [
      { value: 'child2-1', label: '子节点 2-1' },
    ],
  },
]
<\/script>
`,ke=E({__name:"TreeSelectMultiple",setup(t){const a=x([]),n=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return(T,r)=>(L(),F(w(H),{direction:"vertical",style:{width:"300px"}},{default:_(()=>[c(w(W),{value:a.value,"onUpdate:value":r[0]||(r[0]=b=>a.value=b),"tree-data":n,multiple:"",placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),m("span",null,"选中："+I(a.value),1)]),_:1}))}}),Te=`<template>
  <Space direction="vertical" style="width: 300px">
    <TreeSelect
      v-model:value="value"
      :tree-data="treeData"
      multiple
      placeholder="请选择"
      style="width: 100%"
    />
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
    children: [
      { value: 'child2-1', label: '子节点 2-1' },
    ],
  },
]
<\/script>
`,$e=E({__name:"TreeSelectSearch",setup(t){const a=x(),n=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"},{value:"child2-2",label:"子节点 2-2"}]}];return(T,r)=>(L(),F(w(H),{direction:"vertical",style:{width:"300px"}},{default:_(()=>[c(w(W),{value:a.value,"onUpdate:value":r[0]||(r[0]=b=>a.value=b),"tree-data":n,"show-search":"",placeholder:"搜索节点",style:{width:"100%"}},null,8,["value"]),m("span",null,"选中："+I(a.value),1)]),_:1}))}}),De=`<template>
  <Space direction="vertical" style="width: 300px">
    <TreeSelect
      v-model:value="value"
      :tree-data="treeData"
      show-search
      placeholder="搜索节点"
      style="width: 100%"
    />
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
`,_e={class:"markdown-body"},Ae={__name:"tree-select",setup(t,{expose:a}){return a({frontmatter:{}}),(T,r)=>{const b=me("DemoBlock");return L(),ge("div",_e,[r[0]||(r[0]=m("h1",{id:"treeselect-",tabindex:"-1"},"TreeSelect 树形选择",-1)),r[1]||(r[1]=m("p",null,"树形选择控件，类似 Select 的选择控件，可选择的数据结构是一个树形结构。",-1)),r[2]||(r[2]=m("h2",{id:"",tabindex:"-1"},"何时使用",-1)),r[3]||(r[3]=m("ul",null,[m("li",null,"从一个树形结构中进行选择时，例如选择部门、分类等")],-1)),r[4]||(r[4]=m("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),r[5]||(r[5]=m("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),c(b,{title:"基础用法",source:w(ye)},{default:_(()=>[c(we)]),_:1},8,["source"]),r[6]||(r[6]=m("h3",{id:"-3",tabindex:"-1"},"多选",-1)),c(b,{title:"多选",source:w(Te)},{default:_(()=>[c(ke)]),_:1},8,["source"]),r[7]||(r[7]=m("h3",{id:"-4",tabindex:"-1"},"可勾选",-1)),c(b,{title:"可勾选",source:w(xe)},{default:_(()=>[c(Ce)]),_:1},8,["source"]),r[8]||(r[8]=m("h3",{id:"-5",tabindex:"-1"},"搜索",-1)),c(b,{title:"搜索",source:w(De)},{default:_(()=>[c($e)]),_:1},8,["source"]),r[9]||(r[9]=Se('<h2 id="api" tabindex="-1">API</h2><h3 id="treeselect-props" tabindex="-1">TreeSelect Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>选中的值</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>treeData</td><td>树形数据</td><td><code>TreeSelectNode[]</code></td><td><code>[]</code></td></tr><tr><td>multiple</td><td>是否多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeCheckable</td><td>是否显示 checkbox</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeCheckStrictly</td><td>checkable 状态下节点选择完全受控（父子节点选中状态不再关联）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showCheckedStrategy</td><td>checkable 时选中项回填方式</td><td><code>&#39;SHOW_ALL&#39; | &#39;SHOW_PARENT&#39; | &#39;SHOW_CHILD&#39;</code></td><td><code>&#39;SHOW_CHILD&#39;</code></td></tr><tr><td>showSearch</td><td>是否显示搜索框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoClearSearchValue</td><td>多选模式下选中后自动清空搜索框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>allowClear</td><td>是否允许清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>maxCount</td><td>可选中的最多数量，仅在多选时生效</td><td><code>number</code></td><td>-</td></tr><tr><td>notFoundContent</td><td>下拉列表为空时显示的内容</td><td><code>string</code></td><td><code>&#39;暂无数据&#39;</code></td></tr><tr><td>treeDefaultExpandAll</td><td>是否默认展开所有节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeDefaultExpandedKeys</td><td>默认展开的树节点 key</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>open</td><td>受控展开下拉菜单</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否展开下拉菜单</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>fieldNames</td><td>自定义字段名</td><td><code>{ label?, value?, children? }</code></td><td>-</td></tr></tbody></table><h3 id="treeselect-events" tabindex="-1">TreeSelect Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中树节点时调用</td><td><code>(value, labels)</code></td></tr><tr><td>select</td><td>被选中时调用</td><td><code>(value, node)</code></td></tr><tr><td>search</td><td>搜索框值变化时调用</td><td><code>(value: string)</code></td></tr><tr><td>treeExpand</td><td>展开节点时调用</td><td><code>(expandedKeys)</code></td></tr><tr><td>openChange</td><td>展开下拉菜单的回调</td><td><code>(open: boolean)</code></td></tr><tr><td>dropdownVisibleChange</td><td>展开下拉菜单的回调（同 openChange）</td><td><code>(visible: boolean)</code></td></tr><tr><td>clear</td><td>清除时调用</td><td><code>()</code></td></tr></tbody></table><h3 id="treeselectnode" tabindex="-1">TreeSelectNode</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>节点值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>节点标签</td><td><code>string</code></td></tr><tr><td>children</td><td>子节点</td><td><code>TreeSelectNode[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>selectable</td><td>是否可选（单选/普通多选时生效）</td><td><code>boolean</code></td></tr><tr><td>disableCheckbox</td><td>treeCheckable 时禁用该节点的勾选框</td><td><code>boolean</code></td></tr><tr><td>isLeaf</td><td>是否叶子节点（仅用于标记）</td><td><code>boolean</code></td></tr></tbody></table>',7))])}}};export{Ae as default};
