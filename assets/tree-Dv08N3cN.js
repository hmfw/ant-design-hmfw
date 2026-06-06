import{I as Le}from"./Icon-BOXWN2fu.js";import{A as Be,a as Fe,C as Pe,b as _e,c as je,d as Ve,D as Re,e as Ue,f as Me,E as He,g as qe,h as Ge,F as ue,i as fe,j as ye,H as Ze,k as ze,l as We,L as Je,m as Qe,M as Xe,P as Ye,R as et,n as tt,o as dt,S as nt,p as lt,q as at,U as ot,r as rt,W as ct,Z as st,s as it}from"./icons-CwohsDOf.js";import{g as ut,a as ft,b as yt,i as ht,s as kt}from"./utils-Do5MdjaU.js";import{m as O,L as gt,B as m,O as se,l as u,k as K,d as w,r as bt,q as pt,y as A,g as W,I as D,i as G,F as J,f as i,H as vt,Q as mt,N as xt,E as Kt,P as L,j as wt}from"./index-Qxz1plB-.js";import{c as R}from"./cls-S9IiI6wd.js";import{C as Dt}from"./Checkbox-Bi1ErwpC.js";const Tt=Object.freeze(Object.defineProperty({__proto__:null,AndroidOutlined:Be,AppleOutlined:Fe,CheckCircleFilled:Pe,CheckOutlined:_e,CloseCircleFilled:je,CloseOutlined:Ve,DeleteOutlined:Re,DownOutlined:Ue,DownloadOutlined:Me,EditOutlined:He,ExclamationCircleFilled:qe,EyeOutlined:Ge,FileOutlined:ue,FolderOpenOutlined:fe,FolderOutlined:ye,HomeOutlined:Ze,Icon:Le,InfoCircleFilled:ze,InfoCircleOutlined:We,LeftOutlined:Je,LoadingOutlined:Qe,MinusOutlined:Xe,PlusOutlined:Ye,RightOutlined:et,RotateLeftOutlined:tt,RotateRightOutlined:dt,SearchOutlined:nt,SettingOutlined:lt,SwapOutlined:at,UpOutlined:ot,UserOutlined:rt,WarningOutlined:ct,ZoomInOutlined:st,ZoomOutOutlined:it,getAllCategories:ut,getAllIcons:ft,getIconsByCategory:yt,iconMetadata:ht,searchIcons:kt},Symbol.toStringTag,{value:"Module"}));function ie(t,c,r){if(!t)return null;if(typeof t=="function")return t(c,r);const g=Tt[t];return g?g({}):t}const he=O({name:"Tree",props:{treeData:{type:Array,default:()=>[]},expandedKeys:Array,defaultExpandedKeys:{type:Array,default:()=>[]},defaultExpandAll:Boolean,defaultExpandParent:{type:Boolean,default:!0},autoExpandParent:Boolean,selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},checkedKeys:[Array,Object],defaultCheckedKeys:{type:Array,default:()=>[]},checkable:Boolean,checkStrictly:Boolean,multiple:Boolean,selectable:{type:Boolean,default:!0},disabled:Boolean,draggable:[Boolean,Function,Object],showLine:[Boolean,Object],showIcon:Boolean,blockNode:Boolean,indent:{type:Number,default:24},filterTreeNode:Function,icon:[String,Function],switcherIcon:[String,Function],titleRender:Function,fieldNames:Object,rootClassName:String,classNames:Object,styles:Object,expandAction:{type:[Boolean,String],default:void 0}},emits:["update:expandedKeys","update:selectedKeys","update:checkedKeys","expand","select","check","dblclick","rightClick","dragstart","dragenter","dragover","dragleave","dragend","drop"],setup(t,{emit:c}){const r=gt("tree"),g=w(()=>{var e;return((e=t.fieldNames)==null?void 0:e.key)??"key"}),a=w(()=>{var e;return((e=t.fieldNames)==null?void 0:e.title)??"title"}),s=w(()=>{var e;return((e=t.fieldNames)==null?void 0:e.children)??"children"}),y=e=>e[g.value],ke=e=>e[a.value],Q=e=>e[s.value],x=w(()=>{const e=new Map,d=(n,l,o,f)=>{n.forEach((b,h)=>{const p=y(b),v=`${f}-${h}`,T=Q(b)??[];e.set(p,{node:b,parentKey:l,level:o,pos:v,index:h,childrenKeys:T.map(C=>y(C))}),T.length&&d(T,p,o+1,v)})};return d(t.treeData,null,0,"0"),e}),X=()=>Array.from(x.value.keys()),B=e=>{const d=x.value.get(e);return d?d.childrenKeys.flatMap(n=>[n,...B(n)]):[]},Z=e=>{var l,o;const d=[];let n=((l=x.value.get(e))==null?void 0:l.parentKey)??null;for(;n!==null;)d.push(n),n=((o=x.value.get(n))==null?void 0:o.parentKey)??null;return d},Y=e=>{const d=new Set(e);return e.forEach(n=>Z(n).forEach(l=>d.add(l))),Array.from(d)},U=m((()=>{if(t.defaultExpandAll)return X();const e=t.expandedKeys??t.defaultExpandedKeys;return t.defaultExpandParent?Y(e):[...e]})()),ee=m([...t.defaultSelectedKeys]),ge=e=>e?Array.isArray(e)?e:e.checked??[]:[],te=m([...t.defaultCheckedKeys]),S=w(()=>t.expandedKeys??U.value),F=w(()=>t.selectedKeys??ee.value),$=w(()=>t.checkedKeys!==void 0?ge(t.checkedKeys):te.value);se(()=>t.treeData,()=>{t.defaultExpandAll&&(U.value=X())}),se(()=>t.expandedKeys,e=>{e&&t.autoExpandParent&&(U.value=Y(e))});const be=w(()=>{const e=new Set;if(t.checkStrictly)return e;const d=new Set($.value);for(const[n]of x.value){if(d.has(n))continue;const l=B(n);l.length&&l.some(o=>d.has(o))&&e.add(n)}return e}),de=(e,d=0,n="0")=>e.flatMap((l,o)=>{const f=y(l),b=Q(l),h=`${n}-${o}`,p=!!(b!=null&&b.length),v=[{node:l,level:d,hasChildren:p,pos:h}];return p&&S.value.includes(f)&&v.push(...de(b,d+1,h)),v}),z=w(()=>de(t.treeData)),ne=e=>e.map(d=>{var n;return(n=x.value.get(d))==null?void 0:n.node}).filter(Boolean),pe=e=>{U.value=e,c("update:expandedKeys",e)},P=(e,d,n)=>{const l=!S.value.includes(e),o=l?[...S.value,e]:S.value.filter(f=>f!==e);pe(o),c("expand",o,{expanded:l,node:d,nativeEvent:n})},le=(e,d,n)=>{if(t.disabled||d.disabled||d.selectable===!1||!t.selectable)return;const l=!F.value.includes(e);let o;t.multiple?o=l?[...F.value,e]:F.value.filter(f=>f!==e):o=F.value[0]===e?[]:[e],ee.value=o,c("update:selectedKeys",o),c("select",o,{event:"select",selected:o.includes(e),node:d,selectedNodes:ne(o),nativeEvent:n})},ae=(e,d,n)=>{if(t.disabled||d.disabled||d.disableCheckbox||d.checkable===!1)return;const l=$.value.includes(e);let o;if(t.checkStrictly)o=l?$.value.filter(b=>b!==e):[...$.value,e];else{const b=B(e).filter(p=>{var T;const v=(T=x.value.get(p))==null?void 0:T.node;return v&&!v.disabled&&!v.disableCheckbox}),h=new Set($.value);l?(h.delete(e),b.forEach(p=>h.delete(p)),Z(e).forEach(p=>h.delete(p))):(h.add(e),b.forEach(p=>h.add(p)),Z(e).forEach(p=>{var T;const v=(((T=x.value.get(p))==null?void 0:T.childrenKeys)??[]).filter(C=>{var V;const E=(V=x.value.get(C))==null?void 0:V.node;return E&&!E.disabled&&!E.disableCheckbox});v.length&&v.every(C=>h.has(C))&&h.add(p)})),o=Array.from(h)}te.value=o;const f=Array.from(ve(o));c("update:checkedKeys",t.checkStrictly?{checked:o,halfChecked:f}:o),c("check",o,{event:"check",checked:!l,node:d,checkedNodes:ne(o),halfCheckedKeys:f,nativeEvent:n})},ve=e=>{const d=new Set;if(t.checkStrictly)return d;const n=new Set(e);for(const[l]of x.value){if(n.has(l))continue;const o=B(l);o.length&&o.some(f=>n.has(f))&&d.add(l)}return d},M=m(null),H=e=>{M.value=e,e!==null&&bt(()=>{var n;const d=(n=oe.value)==null?void 0:n.querySelector(`[data-key="${String(e)}"]`);d==null||d.focus()})},me=(e,d,n,l)=>{var b;const o=z.value,f=o.findIndex(h=>y(h.node)===d);switch(e.key){case"ArrowDown":e.preventDefault(),f<o.length-1&&H(y(o[f+1].node));break;case"ArrowUp":e.preventDefault(),f>0&&H(y(o[f-1].node));break;case"ArrowRight":e.preventDefault(),l&&!S.value.includes(d)?P(d,n,e):l&&f<o.length-1&&H(y(o[f+1].node));break;case"ArrowLeft":if(e.preventDefault(),l&&S.value.includes(d))P(d,n,e);else{const h=(b=x.value.get(d))==null?void 0:b.parentKey;h!=null&&H(h)}break;case"Enter":case" ":e.preventDefault(),t.checkable?ae(d,n,e):le(d,n,e);break}},xe=(e,d,n,l)=>{le(e,d,l),t.expandAction==="click"&&n&&P(e,d,l)},Ke=(e,d,n,l)=>{c("dblclick",l,d),t.expandAction==="doubleClick"&&n&&P(e,d,l)},we=(e,d,n)=>{c("rightClick",{event:n,node:d})},N=m(null),q=m(null),De=e=>t.draggable?t.draggable===!0?!0:typeof t.draggable=="function"?t.draggable(e):typeof t.draggable=="object"&&t.draggable.nodeDraggable?t.draggable.nodeDraggable(e):!0:!1,Te=(e,d,n)=>{N.value=d,c("dragstart",{event:e,node:n})},Se=(e,d,n)=>{q.value=d,c("dragenter",{event:e,node:n,expandedKeys:S.value})},Ne=(e,d)=>{e.preventDefault(),c("dragover",{event:e,node:d})},Ce=(e,d)=>{c("dragleave",{event:e,node:d})},Ee=(e,d)=>{N.value=null,q.value=null,c("dragend",{event:e,node:d})},Oe=(e,d,n)=>{var f;e.preventDefault();const l=N.value!=null?(f=x.value.get(N.value))==null?void 0:f.node:void 0,o=x.value.get(d);c("drop",{node:n,dragNode:l,dragNodesKeys:N.value!=null?[N.value,...B(N.value)]:[],dropPosition:(o==null?void 0:o.index)??0,dropToGap:!1,nativeEvent:e}),N.value=null,q.value=null},oe=m(null),Ae=w(()=>typeof t.showLine=="object"?t.showLine.showLeafIcon!==!1:!!t.showLine),re=w(()=>!!t.showLine),Ie=w(()=>!(typeof t.draggable=="object"&&t.draggable.icon===!1)),_=e=>{var d;return(d=t.classNames)==null?void 0:d[e]},j=e=>{var d;return(d=t.styles)==null?void 0:d[e]},$e=(e,d,n)=>{if(t.switcherIcon){const l=typeof t.switcherIcon=="function"?t.switcherIcon({expanded:n,isLeaf:!d}):ie(t.switcherIcon,e);if(l)return l}return d?n?"▾":"▸":null};return()=>u("div",{ref:oe,class:R(r,t.rootClassName,_("root"),{[`${r}-show-line`]:re.value,[`${r}-block-node`]:t.blockNode,[`${r}-disabled`]:t.disabled,[`${r}-icon-hide`]:!t.showIcon,[`${r}-unselectable`]:!t.selectable}),style:j("root"),role:"tree","aria-multiselectable":t.multiple||void 0},[z.value.map(({node:e,level:d,hasChildren:n})=>{var V,ce;const l=y(e),o=S.value.includes(l),f=F.value.includes(l),b=$.value.includes(l),h=be.value.has(l),p=M.value===l,v=!!(e.disabled||t.disabled),T=(V=t.filterTreeNode)==null?void 0:V.call(t,e),C=e.icon??t.icon,E=De(e);return u("div",{key:l,"data-key":String(l),class:R(`${r}-treenode`,_("item"),{[`${r}-treenode-selected`]:f,[`${r}-treenode-disabled`]:v,[`${r}-treenode-leaf`]:!n,[`${r}-treenode-active`]:p,[`${r}-treenode-draggable`]:E,[`${r}-treenode-drag-over`]:q.value===l}),role:"treeitem",tabindex:p||M.value===null&&d===0&&((ce=z.value[0])==null?void 0:ce.node)===e?0:-1,"aria-level":d+1,"aria-expanded":n?o:void 0,"aria-selected":t.selectable?f:void 0,"aria-checked":t.checkable?b:void 0,"aria-disabled":v||void 0,style:{paddingLeft:`${d*t.indent}px`,...j("item")},draggable:E||void 0,onFocus:()=>{M.value=l},onKeydown:k=>me(k,l,e,n),onContextmenu:k=>we(l,e,k),onDragstart:E?k=>Te(k,l,e):void 0,onDragenter:t.draggable?k=>Se(k,l,e):void 0,onDragover:t.draggable?k=>Ne(k,e):void 0,onDragleave:t.draggable?k=>Ce(k,e):void 0,onDragend:t.draggable?k=>Ee(k,e):void 0,onDrop:t.draggable?k=>Oe(k,l,e):void 0},[E&&Ie.value&&u("span",{class:`${r}-draggable-icon`},[K("⋮⋮")]),u("span",{class:R(`${r}-switcher`,_("itemSwitcher"),{[`${r}-switcher_open`]:n&&o,[`${r}-switcher_close`]:n&&!o,[`${r}-switcher-noop`]:!n}),style:j("itemSwitcher"),onClick:()=>n&&P(l,e)},[$e(e,n,o)]),t.checkable&&u("span",{class:`${r}-checkbox-cell`,onClick:k=>k.stopPropagation()},[u(Dt,{checked:b,indeterminate:h,disabled:v||!!e.disableCheckbox,onChange:()=>ae(l,e)},null)]),t.showIcon&&(C||re.value&&Ae.value)&&u("span",{class:R(`${r}-iconEle`,_("itemIcon")),style:j("itemIcon")},[ie(C,e,{expanded:o,isLeaf:!n})]),u("span",{class:R(`${r}-node-content-wrapper`,_("itemTitle"),{[`${r}-node-content-wrapper-normal`]:!n,[`${r}-node-selected`]:f,[`${r}-node-content-wrapper-matched`]:T}),style:j("itemTitle"),onClick:k=>xe(l,e,n,k),onDblclick:k=>Ke(l,e,n,k)},[u("span",{class:`${r}-title`},[t.titleRender?t.titleRender(e):ke(e)])])])})])}}),St=O({name:"DirectoryTree",props:{expandAction:{type:[Boolean,String],default:"click"},showIcon:{type:Boolean,default:!0}},setup(t,{attrs:c,slots:r}){const g=(a,s)=>a.icon?typeof a.icon=="function"?a.icon(a):a.icon:s!=null&&s.isLeaf?u(ue,null,null):s!=null&&s.expanded?u(fe,null,null):u(ye,null,null);return()=>u(he,pt(c,{class:"hmfw-tree-directory",blockNode:!0,showIcon:t.showIcon,expandAction:t.expandAction,icon:g}),{default:()=>{var a;return[(a=r.default)==null?void 0:a.call(r)]}})}}),I=he;I.DirectoryTree=St;const Nt=O({__name:"TreeBasic",setup(t){const c=m(["0-0","0-0-0"]),r=m([]),g=[{title:"父节点 1",key:"0-0",children:[{title:"父节点 1-0",key:"0-0-0",children:[{title:"叶子节点",key:"0-0-0-0"},{title:"叶子节点",key:"0-0-0-1"}]},{title:"父节点 1-1",key:"0-0-1",children:[{title:"叶子节点",key:"0-0-1-0"}]}]}];return(a,s)=>(A(),W(D(I),{"tree-data":g,"expanded-keys":c.value,"onUpdate:expandedKeys":s[0]||(s[0]=y=>c.value=y),"selected-keys":r.value,"onUpdate:selectedKeys":s[1]||(s[1]=y=>r.value=y)},null,8,["expanded-keys","selected-keys"]))}}),Ct=`<template>
  <Tree
    :tree-data="treeData"
    v-model:expanded-keys="expandedKeys"
    v-model:selected-keys="selectedKeys"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const expandedKeys = ref(['0-0', '0-0-0'])
const selectedKeys = ref<string[]>([])

const treeData = [
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      {
        title: '父节点 1-0',
        key: '0-0-0',
        children: [
          { title: '叶子节点', key: '0-0-0-0' },
          { title: '叶子节点', key: '0-0-0-1' },
        ],
      },
      {
        title: '父节点 1-1',
        key: '0-0-1',
        children: [
          { title: '叶子节点', key: '0-0-1-0' },
        ],
      },
    ],
  },
]
<\/script>
`,Et=O({__name:"TreeCheckable",setup(t){const c=m(["0-0"]),r=m([]),g=[{title:"父节点 1",key:"0-0",children:[{title:"子节点 1-1",key:"0-0-0"},{title:"子节点 1-2",key:"0-0-1"}]},{title:"父节点 2",key:"0-1",children:[{title:"子节点 2-1",key:"0-1-0"}]}];return(a,s)=>(A(),G(J,null,[u(D(I),{checkable:"","tree-data":g,"checked-keys":r.value,"onUpdate:checkedKeys":s[0]||(s[0]=y=>r.value=y),"expanded-keys":c.value,"onUpdate:expandedKeys":s[1]||(s[1]=y=>c.value=y)},null,8,["checked-keys","expanded-keys"]),i("p",null,"已勾选："+vt(r.value.join(", ")),1)],64))}}),Ot=`<template>
  <Tree
    checkable
    :tree-data="treeData"
    v-model:checked-keys="checkedKeys"
    v-model:expanded-keys="expandedKeys"
  />
  <p>已勾选：{{ checkedKeys.join(', ') }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const expandedKeys = ref(['0-0'])
const checkedKeys = ref<string[]>([])

const treeData = [
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      { title: '子节点 1-1', key: '0-0-0' },
      { title: '子节点 1-2', key: '0-0-1' },
    ],
  },
  {
    title: '父节点 2',
    key: '0-1',
    children: [
      { title: '子节点 2-1', key: '0-1-0' },
    ],
  },
]
<\/script>
`,At=O({__name:"TreeDirectory",setup(t){const c=m(["0-0"]),r=m([]),g=[{title:"src",key:"0-0",children:[{title:"components",key:"0-0-0",children:[{title:"Button.tsx",key:"0-0-0-0",isLeaf:!0},{title:"Tree.tsx",key:"0-0-0-1",isLeaf:!0}]},{title:"utils",key:"0-0-1",children:[{title:"index.ts",key:"0-0-1-0",isLeaf:!0}]}]}];return(a,s)=>(A(),W(D(I).DirectoryTree,{multiple:"","tree-data":g,"expanded-keys":c.value,"onUpdate:expandedKeys":s[0]||(s[0]=y=>c.value=y),"selected-keys":r.value,"onUpdate:selectedKeys":s[1]||(s[1]=y=>r.value=y)},null,8,["expanded-keys","selected-keys"]))}}),It=`<template>
  <Tree.DirectoryTree
    multiple
    :tree-data="treeData"
    v-model:expanded-keys="expandedKeys"
    v-model:selected-keys="selectedKeys"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const expandedKeys = ref(['0-0'])
const selectedKeys = ref<string[]>([])

const treeData = [
  {
    title: 'src',
    key: '0-0',
    children: [
      {
        title: 'components',
        key: '0-0-0',
        children: [
          { title: 'Button.tsx', key: '0-0-0-0', isLeaf: true },
          { title: 'Tree.tsx', key: '0-0-0-1', isLeaf: true },
        ],
      },
      {
        title: 'utils',
        key: '0-0-1',
        children: [
          { title: 'index.ts', key: '0-0-1-0', isLeaf: true },
        ],
      },
    ],
  },
]
<\/script>
`,$t=O({__name:"TreeDraggable",setup(t){const c=[{title:"父节点 1",key:"0-0",children:[{title:"子节点 1-1",key:"0-0-0"},{title:"子节点 1-2",key:"0-0-1"}]},{title:"父节点 2",key:"0-1",children:[{title:"子节点 2-1",key:"0-1-0"}]}],r=g=>{var a,s;console.log("drop",(a=g.dragNode)==null?void 0:a.key,"->",(s=g.node)==null?void 0:s.key)};return(g,a)=>(A(),G(J,null,[u(D(I),{draggable:"","block-node":"","tree-data":c,"default-expand-all":!0,onDrop:r}),a[0]||(a[0]=i("p",null,"提示：拖动节点查看 drop 事件（本示例仅打印，不改变数据）。",-1))],64))}}),Lt=`<template>
  <Tree
    draggable
    block-node
    :tree-data="treeData"
    :default-expand-all="true"
    @drop="onDrop"
  />
  <p>提示：拖动节点查看 drop 事件（本示例仅打印，不改变数据）。</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const treeData = [
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      { title: '子节点 1-1', key: '0-0-0' },
      { title: '子节点 1-2', key: '0-0-1' },
    ],
  },
  {
    title: '父节点 2',
    key: '0-1',
    children: [
      { title: '子节点 2-1', key: '0-1-0' },
    ],
  },
]

const onDrop = (info: any) => {
  // eslint-disable-next-line no-console
  console.log('drop', info.dragNode?.key, '->', info.node?.key)
}
<\/script>
`,Bt=O({__name:"TreeSearch",setup(t){const c=m(""),r=[{title:"父节点 1",key:"0-0",children:[{title:"子节点 apple",key:"0-0-0"},{title:"子节点 banana",key:"0-0-1"}]},{title:"父节点 2",key:"0-1",children:[{title:"子节点 cherry",key:"0-1-0"}]}],g=a=>c.value?String(a.title).toLowerCase().includes(c.value.toLowerCase()):!1;return(a,s)=>(A(),G(J,null,[mt(i("input",{"onUpdate:modelValue":s[0]||(s[0]=y=>c.value=y),placeholder:"输入关键字高亮匹配节点",style:{"margin-bottom":"8px",padding:"4px 8px",width:"240px"}},null,512),[[xt,c.value]]),u(D(I),{"tree-data":r,"default-expand-all":!0,"filter-tree-node":g})],64))}}),Ft=`<template>
  <input
    v-model="searchValue"
    placeholder="输入关键字高亮匹配节点"
    style="margin-bottom: 8px; padding: 4px 8px; width: 240px;"
  />
  <Tree
    :tree-data="treeData"
    :default-expand-all="true"
    :filter-tree-node="filterNode"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const searchValue = ref('')

const treeData = [
  {
    title: '父节点 1',
    key: '0-0',
    children: [
      { title: '子节点 apple', key: '0-0-0' },
      { title: '子节点 banana', key: '0-0-1' },
    ],
  },
  {
    title: '父节点 2',
    key: '0-1',
    children: [
      { title: '子节点 cherry', key: '0-1-0' },
    ],
  },
]

const filterNode = (node: any) => {
  if (!searchValue.value) return false
  return String(node.title).toLowerCase().includes(searchValue.value.toLowerCase())
}
<\/script>
`,Pt=O({__name:"TreeShowLine",setup(t){const c=[{title:"父节点",key:"0-0",children:[{title:"子节点 1",key:"0-0-0"},{title:"子节点 2",key:"0-0-1"},{title:"子节点 3",key:"0-0-2"}]}];return(r,g)=>(A(),W(D(I),{"show-line":"","tree-data":c,"default-expand-all":!0}))}}),_t=`<template>
  <Tree
    show-line
    :tree-data="treeData"
    :default-expand-all="true"
  />
</template>

<script setup lang="ts">
import { Tree } from 'ant-design-hmfw'

const treeData = [
  {
    title: '父节点',
    key: '0-0',
    children: [
      { title: '子节点 1', key: '0-0-0' },
      { title: '子节点 2', key: '0-0-1' },
      { title: '子节点 3', key: '0-0-2' },
    ],
  },
]
<\/script>
`,jt={class:"markdown-body"},Zt={__name:"tree",setup(t,{expose:c}){return c({frontmatter:{}}),(g,a)=>{const s=Kt("DemoBlock");return A(),G("div",jt,[a[0]||(a[0]=i("h1",{id:"tree-",tabindex:"-1"},"Tree 树形控件",-1)),a[1]||(a[1]=i("p",null,"多层次的结构列表。",-1)),a[2]||(a[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=i("ul",null,[i("li",null,"文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构"),i("li",null,"使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能")],-1)),a[4]||(a[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=i("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),a[6]||(a[6]=i("p",null,"最简单的用法，展示可选中，默认展开等功能。",-1)),u(s,{title:"基础用法",source:D(Ct)},{default:L(()=>[u(Nt)]),_:1},8,["source"]),a[7]||(a[7]=i("h3",{id:"-3",tabindex:"-1"},"可勾选",-1)),a[8]||(a[8]=i("p",null,[K("使用 "),i("code",null,"checkable"),K(" 属性可以在节点前添加 Checkbox 复选框，父子节点选中状态默认级联联动（半选态自动计算）。")],-1)),u(s,{title:"可勾选",source:D(Ot)},{default:L(()=>[u(Et)]),_:1},8,["source"]),a[9]||(a[9]=i("h3",{id:"-4",tabindex:"-1"},"显示连接线",-1)),a[10]||(a[10]=i("p",null,[K("使用 "),i("code",null,"showLine"),K(" 属性可以显示连接线。")],-1)),u(s,{title:"显示连接线",source:D(_t)},{default:L(()=>[u(Pt)]),_:1},8,["source"]),a[11]||(a[11]=i("h3",{id:"-5",tabindex:"-1"},"目录树",-1)),a[12]||(a[12]=i("p",null,[K("内置的 "),i("code",null,"Tree.DirectoryTree"),K("，默认展示文件夹/文件图标，支持 "),i("code",null,"expandAction"),K(" 控制点击展开方式。")],-1)),u(s,{title:"目录树",source:D(It)},{default:L(()=>[u(At)]),_:1},8,["source"]),a[13]||(a[13]=i("h3",{id:"-6",tabindex:"-1"},"可拖拽",-1)),a[14]||(a[14]=i("p",null,[K("设置 "),i("code",null,"draggable"),K(" 后节点可拖动，拖放时触发 "),i("code",null,"drop"),K(" 事件。")],-1)),u(s,{title:"可拖拽",source:D(Lt)},{default:L(()=>[u($t)]),_:1},8,["source"]),a[15]||(a[15]=i("h3",{id:"-7",tabindex:"-1"},"搜索高亮",-1)),a[16]||(a[16]=i("p",null,[K("配合 "),i("code",null,"filterTreeNode"),K(" 对命中的节点做高亮处理。")],-1)),u(s,{title:"搜索高亮",source:D(Ft)},{default:L(()=>[u(Bt)]),_:1},8,["source"]),a[17]||(a[17]=wt('<h2 id="api" tabindex="-1">API</h2><h3 id="tree-props" tabindex="-1">Tree Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>treeData</td><td>treeNodes 数据</td><td><code>TreeDataNode[]</code></td><td><code>[]</code></td></tr><tr><td>expandedKeys (v-model)</td><td>展开指定的树节点</td><td><code>(string | number)[]</code></td><td>-</td></tr><tr><td>defaultExpandedKeys</td><td>默认展开指定的树节点</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>defaultExpandAll</td><td>默认展开所有树节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultExpandParent</td><td>默认展开父节点</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>autoExpandParent</td><td>展开时自动展开父节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectedKeys (v-model)</td><td>设置选中的树节点</td><td><code>(string | number)[]</code></td><td>-</td></tr><tr><td>defaultSelectedKeys</td><td>默认选中的树节点</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>checkedKeys (v-model)</td><td>选中复选框的树节点；<code>checkStrictly</code> 时为 <code>{ checked, halfChecked }</code></td><td><code>(string | number)[] | { checked, halfChecked }</code></td><td>-</td></tr><tr><td>defaultCheckedKeys</td><td>默认勾选的树节点</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>checkable</td><td>节点前添加 Checkbox 复选框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>checkStrictly</td><td>父子节点选中状态不再关联</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>multiple</td><td>支持点选多个节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectable</td><td>是否可选中</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>将树禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>draggable</td><td>节点可拖拽</td><td><code>boolean | (node) =&gt; boolean | { icon?, nodeDraggable? }</code></td><td><code>false</code></td></tr><tr><td>showLine</td><td>是否展示连接线</td><td><code>boolean | { showLeafIcon }</code></td><td><code>false</code></td></tr><tr><td>showIcon</td><td>是否展示节点图标</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>blockNode</td><td>节点是否占据一行</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>indent</td><td>每级缩进像素</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>filterTreeNode</td><td>按需高亮节点，返回 <code>true</code> 高亮</td><td><code>(node) =&gt; boolean</code></td><td>-</td></tr><tr><td>icon</td><td>自定义节点图标（名称或渲染函数）</td><td><code>string | (node, ctx) =&gt; VNode</code></td><td>-</td></tr><tr><td>switcherIcon</td><td>自定义展开/收起图标</td><td><code>string | ({ expanded, isLeaf }) =&gt; VNode</code></td><td>-</td></tr><tr><td>titleRender</td><td>自定义节点标题渲染</td><td><code>(node) =&gt; VNode</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义节点 title、key、children 的字段</td><td><code>{ title?, key?, children? }</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根节点 className</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 class（<code>root</code>/<code>item</code>/<code>itemIcon</code>/<code>itemTitle</code>/<code>itemSwitcher</code>）</td><td><code>object</code></td><td>-</td></tr><tr><td>styles</td><td>语义化内联样式（同上 key）</td><td><code>object</code></td><td>-</td></tr></tbody></table><h3 id="directorytree-props" tabindex="-1">DirectoryTree Props</h3><p>继承全部 Tree Props，并新增：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>expandAction</td><td>点击展开节点的方式，<code>false</code> 关闭</td><td><code>false | &#39;click&#39; | &#39;doubleClick&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>showIcon</td><td>是否展示图标</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="treedatanode" tabindex="-1">TreeDataNode</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>节点唯一标识</td><td><code>string | number</code></td><td>-</td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>子节点</td><td><code>TreeDataNode[]</code></td><td>-</td></tr><tr><td>disabled</td><td>禁掉响应</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disableCheckbox</td><td>禁掉 checkbox</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectable</td><td>是否可选中</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>checkable</td><td>是否可勾选</td><td><code>boolean</code></td><td>-</td></tr><tr><td>isLeaf</td><td>设置为叶子节点</td><td><code>boolean</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标</td><td><code>string | (node) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="tree-events" tabindex="-1">Tree Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:expandedKeys</td><td>展开/收起节点时触发</td><td><code>(keys: Key[]) =&gt; void</code></td></tr><tr><td>update:selectedKeys</td><td>点击树节点触发</td><td><code>(keys: Key[]) =&gt; void</code></td></tr><tr><td>update:checkedKeys</td><td>点击复选框触发</td><td><code>(keys: Key[] | { checked, halfChecked }) =&gt; void</code></td></tr><tr><td>expand</td><td>展开/收起节点时触发</td><td><code>(keys, { expanded, node, nativeEvent }) =&gt; void</code></td></tr><tr><td>select</td><td>点击树节点触发</td><td><code>(keys, { event, selected, node, selectedNodes, nativeEvent }) =&gt; void</code></td></tr><tr><td>check</td><td>点击复选框触发</td><td><code>(keys, { event, checked, node, checkedNodes, halfCheckedKeys, nativeEvent }) =&gt; void</code></td></tr><tr><td>dblclick</td><td>双击节点</td><td><code>(event, node) =&gt; void</code></td></tr><tr><td>rightClick</td><td>右键节点</td><td><code>({ event, node }) =&gt; void</code></td></tr><tr><td>dragstart / dragenter / dragover / dragleave / dragend</td><td>拖拽过程事件</td><td><code>({ event, node, ... }) =&gt; void</code></td></tr><tr><td>drop</td><td>拖拽释放</td><td><code>({ node, dragNode, dragNodesKeys, dropPosition, dropToGap, nativeEvent }) =&gt; void</code></td></tr></tbody></table><h3 id="-8" tabindex="-1">键盘支持</h3><p>聚焦节点后支持：<code>↑</code>/<code>↓</code> 移动焦点，<code>→</code> 展开（或进入子节点），<code>←</code> 收起（或回到父节点），<code>Enter</code>/<code>Space</code> 选中或勾选。</p><h3 id="-9" tabindex="-1">不支持的能力（待后补）</h3><p>虚拟滚动 <code>virtual</code>、异步加载 <code>loadData</code>/<code>loadedKeys</code>、<code>TreeNode</code> 子组件式 JSX 声明、拖拽 <code>dropToGap</code>/插入位置指示线（当前仅触发 <code>drop</code> 事件，不自动改数据）。</p>',14))])}}};export{Zt as default};
