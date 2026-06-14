import{I as Re}from"./Icon-BGDem5mI.js";import{A as je,a as Me,b as Ue,c as He,d as ze,e as Je,B as Ge,f as Qe,g as We,C as Ze,h as qe,i as Xe,j as Ye,k as et,l as tt,m as nt,n as dt,o as lt,p as at,q as ot,r as rt,D as it,s as st,t as ct,u as ut,v as ft,E as ht,w as yt,x as pt,y as kt,z as gt,F as ge,G as mt,H as me,I as be,J as bt,K as vt,L as xt,M as Nt,N as Dt,O as Ct,Q as wt,R as Kt,S as Tt,T as Ot,U as St,V as At,W as Et,X as It,Y as $t,Z as Lt,_ as Bt,$ as _t,a0 as Ft,a1 as Pt,a2 as Vt,a3 as Rt,a4 as jt,a5 as Mt,a6 as Ut,a7 as Ht,a8 as zt,a9 as Jt,aa as Gt,ab as Qt,ac as Wt,ad as Zt,ae as qt,af as Xt,ag as Yt,ah as en,ai as tn,aj as nn,ak as dn,al as ln,am as an,an as on,ao as rn,ap as sn}from"./icons-n88SZ_u-.js";import{g as cn,a as un,b as fn,i as hn,s as yn}from"./utils-PqaZQlNg.js";import{o as A,N as pn,E as C,Q as pe,n as h,f as T,m as x,t as kn,s as gn,A as E,i as te,K as g,k as _,h as c,_ as ne,F as ve,J as ee,S as mn,P as bn,H as vn,R as $,l as xn}from"./index-B09KCCs0.js";import{V as Nn}from"./VirtualList-DoIsak3W.js";import{c as J}from"./cls-S9IiI6wd.js";import{C as Dn}from"./Checkbox-idwaM24K.js";const Cn=Object.freeze(Object.defineProperty({__proto__:null,AndroidOutlined:je,AppleOutlined:Me,ArrowDownOutlined:Ue,ArrowLeftOutlined:He,ArrowRightOutlined:ze,ArrowUpOutlined:Je,BarsOutlined:Ge,BellFilled:Qe,BellOutlined:We,CalendarOutlined:Ze,CaretDownOutlined:qe,CaretLeftOutlined:Xe,CaretRightOutlined:Ye,CaretUpOutlined:et,CheckCircleFilled:tt,CheckOutlined:nt,ClockCircleOutlined:dt,CloseCircleFilled:lt,CloseOutlined:at,CloudOutlined:ot,CopyOutlined:rt,DeleteOutlined:it,DoubleLeftOutlined:st,DoubleRightOutlined:ct,DownOutlined:ut,DownloadOutlined:ft,EditOutlined:ht,EllipsisOutlined:yt,ExclamationCircleFilled:pt,ExclamationCircleOutlined:kt,EyeOutlined:gt,FileOutlined:ge,FilterOutlined:mt,FolderOpenOutlined:me,FolderOutlined:be,FullscreenExitOutlined:bt,FullscreenOutlined:vt,GlobalOutlined:xt,HeartFilled:Nt,HeartOutlined:Dt,HomeOutlined:Ct,Icon:Re,InfoCircleFilled:wt,InfoCircleOutlined:Kt,LeftOutlined:Tt,LinkOutlined:Ot,LoadingOutlined:St,LockOutlined:At,LoginOutlined:Et,LogoutOutlined:It,MailOutlined:$t,MenuOutlined:Lt,MessageOutlined:Bt,MinusCircleOutlined:_t,MinusOutlined:Ft,PhoneOutlined:Pt,PictureOutlined:Vt,PlusCircleOutlined:Rt,PlusOutlined:jt,QuestionCircleOutlined:Mt,ReloadOutlined:Ut,RightOutlined:Ht,RotateLeftOutlined:zt,RotateRightOutlined:Jt,SaveOutlined:Gt,SearchOutlined:Qt,SettingOutlined:Wt,ShareAltOutlined:Zt,StarFilled:qt,StarOutlined:Xt,SwapOutlined:Yt,SyncOutlined:en,UnlockOutlined:tn,UpOutlined:nn,UserOutlined:dn,VideoCameraOutlined:ln,WarningFilled:an,WarningOutlined:on,ZoomInOutlined:rn,ZoomOutOutlined:sn,getAllCategories:cn,getAllIcons:un,getIconsByCategory:fn,iconMetadata:hn,searchIcons:yn},Symbol.toStringTag,{value:"Module"}));function ke(t,i,o){if(!t)return null;if(typeof t=="function")return t(i,o);const y=Cn[t];return y?y({}):t}const xe=A({name:"Tree",props:{treeData:{type:Array,default:()=>[]},expandedKeys:Array,defaultExpandedKeys:{type:Array,default:()=>[]},defaultExpandAll:Boolean,defaultExpandParent:{type:Boolean,default:!0},autoExpandParent:Boolean,selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},checkedKeys:[Array,Object],defaultCheckedKeys:{type:Array,default:()=>[]},checkable:Boolean,checkStrictly:Boolean,multiple:Boolean,selectable:{type:Boolean,default:!0},disabled:Boolean,draggable:[Boolean,Function,Object],allowDrop:Function,showLine:[Boolean,Object],showIcon:Boolean,blockNode:Boolean,indent:{type:Number,default:24},filterTreeNode:Function,icon:[String,Function],switcherIcon:[String,Function],titleRender:Function,fieldNames:Object,virtual:Boolean,height:[Number,String],itemHeight:{type:Number,default:28},rootClassName:String,classNames:Object,styles:Object,expandAction:{type:[Boolean,String],default:void 0}},emits:["update:expandedKeys","update:selectedKeys","update:checkedKeys","expand","select","check","dblclick","rightClick","dragstart","dragenter","dragover","dragleave","dragend","drop"],setup(t,{emit:i}){const o=pn("tree"),y=T(()=>{var e;return((e=t.fieldNames)==null?void 0:e.key)??"key"}),l=T(()=>{var e;return((e=t.fieldNames)==null?void 0:e.title)??"title"}),r=T(()=>{var e;return((e=t.fieldNames)==null?void 0:e.children)??"children"}),u=e=>e[y.value],b=e=>e[l.value],N=e=>e[r.value],p=T(()=>{const e=new Map,n=(d,s,a,f)=>{d.forEach((m,k)=>{const D=u(m),w=`${f}-${k}`,S=N(m)??[];e.set(D,{node:m,parentKey:s,level:a,pos:w,index:k,childrenKeys:S.map(I=>u(I))}),S.length&&n(S,D,a+1,w)})};return n(t.treeData,null,0,"0"),e}),F=()=>Array.from(p.value.keys()),L=e=>{const n=p.value.get(e);return n?n.childrenKeys.flatMap(d=>[d,...L(d)]):[]},X=e=>{var s,a;const n=[];let d=((s=p.value.get(e))==null?void 0:s.parentKey)??null;for(;d!==null;)n.push(d),d=((a=p.value.get(d))==null?void 0:a.parentKey)??null;return n},de=e=>{const n=new Set(e);return e.forEach(d=>X(d).forEach(s=>n.add(s))),Array.from(n)},G=C((()=>{if(t.defaultExpandAll)return F();const e=t.expandedKeys??t.defaultExpandedKeys;return t.defaultExpandParent?de(e):[...e]})()),le=C([...t.defaultSelectedKeys]),Ne=e=>e?Array.isArray(e)?e:e.checked??[]:[],ae=C([...t.defaultCheckedKeys]),B=T(()=>t.expandedKeys??G.value),V=T(()=>t.selectedKeys??le.value),P=T(()=>t.checkedKeys!==void 0?Ne(t.checkedKeys):ae.value);pe(()=>t.treeData,()=>{t.defaultExpandAll&&(G.value=F())}),pe(()=>t.expandedKeys,e=>{e&&t.autoExpandParent&&(G.value=de(e))});const De=T(()=>{const e=new Set;if(t.checkStrictly)return e;const n=new Set(P.value);for(const[d]of p.value){if(n.has(d))continue;const s=L(d);s.length&&s.some(a=>n.has(a))&&e.add(d)}return e}),oe=(e,n=0,d="0")=>e.flatMap((s,a)=>{const f=u(s),m=N(s),k=`${d}-${a}`,D=!!(m!=null&&m.length),w=[{node:s,level:n,hasChildren:D,pos:k}];return D&&B.value.includes(f)&&w.push(...oe(m,n+1,k)),w}),Q=T(()=>oe(t.treeData)),re=e=>e.map(n=>{var d;return(d=p.value.get(n))==null?void 0:d.node}).filter(Boolean),Ce=e=>{G.value=e,i("update:expandedKeys",e)},R=(e,n,d)=>{const s=!B.value.includes(e),a=s?[...B.value,e]:B.value.filter(f=>f!==e);Ce(a),i("expand",a,{expanded:s,node:n,nativeEvent:d})},ie=(e,n,d)=>{if(t.disabled||n.disabled||n.selectable===!1||!t.selectable)return;const s=!V.value.includes(e);let a;t.multiple?a=s?[...V.value,e]:V.value.filter(f=>f!==e):a=V.value[0]===e?[]:[e],le.value=a,i("update:selectedKeys",a),i("select",a,{event:"select",selected:a.includes(e),node:n,selectedNodes:re(a),nativeEvent:d})},se=(e,n,d)=>{if(t.disabled||n.disabled||n.disableCheckbox||n.checkable===!1)return;const s=P.value.includes(e);let a;if(t.checkStrictly)a=s?P.value.filter(m=>m!==e):[...P.value,e];else{const m=L(e).filter(D=>{var S;const w=(S=p.value.get(D))==null?void 0:S.node;return w&&!w.disabled&&!w.disableCheckbox}),k=new Set(P.value);s?(k.delete(e),m.forEach(D=>k.delete(D)),X(e).forEach(D=>k.delete(D))):(k.add(e),m.forEach(D=>k.add(D)),X(e).forEach(D=>{var S;const w=(((S=p.value.get(D))==null?void 0:S.childrenKeys)??[]).filter(I=>{var z;const H=(z=p.value.get(I))==null?void 0:z.node;return H&&!H.disabled&&!H.disableCheckbox});w.length&&w.every(I=>k.has(I))&&k.add(D)})),a=Array.from(k)}ae.value=a;const f=Array.from(we(a));i("update:checkedKeys",t.checkStrictly?{checked:a,halfChecked:f}:a),i("check",a,{event:"check",checked:!s,node:n,checkedNodes:re(a),halfCheckedKeys:f,nativeEvent:d})},we=e=>{const n=new Set;if(t.checkStrictly)return n;const d=new Set(e);for(const[s]of p.value){if(d.has(s))continue;const a=L(s);a.length&&a.some(f=>d.has(f))&&n.add(s)}return n},W=C(null),Z=e=>{W.value=e,e!==null&&kn(()=>{var d;const n=(d=ce.value)==null?void 0:d.querySelector(`[data-key="${String(e)}"]`);n==null||n.focus()})},Ke=(e,n,d,s)=>{var m;const a=Q.value,f=a.findIndex(k=>u(k.node)===n);switch(e.key){case"ArrowDown":e.preventDefault(),f<a.length-1&&Z(u(a[f+1].node));break;case"ArrowUp":e.preventDefault(),f>0&&Z(u(a[f-1].node));break;case"ArrowRight":e.preventDefault(),s&&!B.value.includes(n)?R(n,d,e):s&&f<a.length-1&&Z(u(a[f+1].node));break;case"ArrowLeft":if(e.preventDefault(),s&&B.value.includes(n))R(n,d,e);else{const k=(m=p.value.get(n))==null?void 0:m.parentKey;k!=null&&Z(k)}break;case"Enter":case" ":e.preventDefault(),t.checkable?se(n,d,e):ie(n,d,e);break}},Te=(e,n,d,s)=>{ie(e,n,s),t.expandAction==="click"&&d&&R(e,n,s)},Oe=(e,n,d,s)=>{i("dblclick",s,n),t.expandAction==="doubleClick"&&d&&R(e,n,s)},Se=(e,n,d)=>{i("rightClick",{event:d,node:n})},K=C(null),j=C(null),Ae=e=>t.draggable?t.draggable===!0?!0:typeof t.draggable=="function"?t.draggable(e):typeof t.draggable=="object"&&t.draggable.nodeDraggable?t.draggable.nodeDraggable(e):!0:!1,Y=e=>{var d,s;if(K.value==null||K.value===e||L(K.value).includes(e))return!1;if(t.allowDrop){const a=(d=p.value.get(K.value))==null?void 0:d.node,f=(s=p.value.get(e))==null?void 0:s.node;if(a&&f)return t.allowDrop({dragNode:a,dropNode:f,dropPosition:0})}return!0},Ee=(e,n,d)=>{K.value=n,i("dragstart",{event:e,node:d})},Ie=(e,n,d)=>{j.value=Y(n)?n:null,i("dragenter",{event:e,node:d,expandedKeys:B.value})},$e=(e,n,d)=>{Y(n)&&e.preventDefault(),i("dragover",{event:e,node:d})},Le=(e,n)=>{i("dragleave",{event:e,node:n})},Be=(e,n)=>{K.value=null,j.value=null,i("dragend",{event:e,node:n})},_e=(e,n,d)=>{var f;if(e.preventDefault(),!Y(n)){K.value=null,j.value=null;return}const s=K.value!=null?(f=p.value.get(K.value))==null?void 0:f.node:void 0,a=p.value.get(n);i("drop",{node:d,dragNode:s,dragNodesKeys:K.value!=null?[K.value,...L(K.value)]:[],dropPosition:(a==null?void 0:a.index)??0,dropToGap:!1,nativeEvent:e}),K.value=null,j.value=null},ce=C(null),Fe=T(()=>typeof t.showLine=="object"?t.showLine.showLeafIcon!==!1:!!t.showLine),ue=T(()=>!!t.showLine),Pe=T(()=>!(typeof t.draggable=="object"&&t.draggable.icon===!1)),M=e=>{var n;return(n=t.classNames)==null?void 0:n[e]},U=e=>{var n;return(n=t.styles)==null?void 0:n[e]},Ve=(e,n,d)=>{if(t.switcherIcon){const s=typeof t.switcherIcon=="function"?t.switcherIcon({expanded:d,isLeaf:!n}):ke(t.switcherIcon,e);if(s)return s}return n?d?"▾":"▸":null},fe=(e,n)=>{var he,ye;const{node:d,level:s,hasChildren:a}=e,f=u(d),m=B.value.includes(f),k=V.value.includes(f),D=P.value.includes(f),w=De.value.has(f),S=W.value===f,I=!!(d.disabled||t.disabled),H=(he=t.filterTreeNode)==null?void 0:he.call(t,d),z=d.icon??t.icon,q=Ae(d);return h("div",{key:f,"data-key":String(f),class:J(`${o}-treenode`,M("item"),{[`${o}-treenode-selected`]:k,[`${o}-treenode-disabled`]:I,[`${o}-treenode-leaf`]:!a,[`${o}-treenode-active`]:S,[`${o}-treenode-draggable`]:q,[`${o}-treenode-drag-over`]:j.value===f}),role:"treeitem",tabindex:S||W.value===null&&s===0&&((ye=Q.value[0])==null?void 0:ye.node)===d?0:-1,"aria-level":s+1,"aria-expanded":a?m:void 0,"aria-selected":t.selectable?k:void 0,"aria-checked":t.checkable?D:void 0,"aria-disabled":I||void 0,style:{paddingLeft:`${s*t.indent}px`,...U("item")},draggable:q||void 0,onFocus:()=>{W.value=f},onKeydown:v=>Ke(v,f,d,a),onContextmenu:v=>Se(f,d,v),onDragstart:q?v=>Ee(v,f,d):void 0,onDragenter:t.draggable?v=>Ie(v,f,d):void 0,onDragover:t.draggable?v=>$e(v,f,d):void 0,onDragleave:t.draggable?v=>Le(v,d):void 0,onDragend:t.draggable?v=>Be(v,d):void 0,onDrop:t.draggable?v=>_e(v,f,d):void 0},[q&&Pe.value&&h("span",{class:`${o}-draggable-icon`},[x("⋮⋮")]),h("span",{class:J(`${o}-switcher`,M("itemSwitcher"),{[`${o}-switcher_open`]:a&&m,[`${o}-switcher_close`]:a&&!m,[`${o}-switcher-noop`]:!a}),style:U("itemSwitcher"),onClick:()=>a&&R(f,d)},[Ve(d,a,m)]),t.checkable&&h("span",{class:`${o}-checkbox-cell`,onClick:v=>v.stopPropagation()},[h(Dn,{checked:D,indeterminate:w,disabled:I||!!d.disableCheckbox,onChange:()=>se(f,d)},null)]),t.showIcon&&(z||ue.value&&Fe.value)&&h("span",{class:J(`${o}-iconEle`,M("itemIcon")),style:U("itemIcon")},[ke(z,d,{expanded:m,isLeaf:!a})]),h("span",{class:J(`${o}-node-content-wrapper`,M("itemTitle"),{[`${o}-node-content-wrapper-normal`]:!a,[`${o}-node-selected`]:k,[`${o}-node-content-wrapper-matched`]:H}),style:U("itemTitle"),onClick:v=>Te(f,d,a,v),onDblclick:v=>Oe(f,d,a,v)},[h("span",{class:`${o}-title`},[t.titleRender?t.titleRender(d):b(d)])])])};return()=>{const e=t.virtual&&t.height?h(Nn,{data:Q.value,height:t.height,itemHeight:t.itemHeight,renderItem:(n,d)=>fe(n),itemKey:n=>u(n.node)},null):Q.value.map((n,d)=>fe(n));return h("div",{ref:ce,class:J(o,t.rootClassName,M("root"),{[`${o}-show-line`]:ue.value,[`${o}-block-node`]:t.blockNode,[`${o}-disabled`]:t.disabled,[`${o}-icon-hide`]:!t.showIcon,[`${o}-unselectable`]:!t.selectable}),style:U("root"),role:"tree","aria-multiselectable":t.multiple||void 0},[e])}}}),wn=A({name:"DirectoryTree",props:{expandAction:{type:[Boolean,String],default:"click"},showIcon:{type:Boolean,default:!0}},setup(t,{attrs:i,slots:o}){const y=(l,r)=>l.icon?typeof l.icon=="function"?l.icon(l):l.icon:r!=null&&r.isLeaf?h(ge,null,null):r!=null&&r.expanded?h(me,null,null):h(be,null,null);return()=>h(xe,gn(i,{class:"hmfw-tree-directory",blockNode:!0,showIcon:t.showIcon,expandAction:t.expandAction,icon:y}),{default:()=>{var l;return[(l=o.default)==null?void 0:l.call(o)]}})}}),O=xe;O.DirectoryTree=wn;const Kn=A({__name:"TreeBasic",setup(t){const i=C(["0-0","0-0-0"]),o=C([]),y=[{title:"父节点 1",key:"0-0",children:[{title:"父节点 1-0",key:"0-0-0",children:[{title:"叶子节点",key:"0-0-0-0"},{title:"叶子节点",key:"0-0-0-1"}]},{title:"父节点 1-1",key:"0-0-1",children:[{title:"叶子节点",key:"0-0-1-0"}]}]}];return(l,r)=>(E(),te(g(O),{"expanded-keys":i.value,"onUpdate:expandedKeys":r[0]||(r[0]=u=>i.value=u),"selected-keys":o.value,"onUpdate:selectedKeys":r[1]||(r[1]=u=>o.value=u),"tree-data":y},null,8,["expanded-keys","selected-keys"]))}}),Tn=`<template>
  <Tree v-model:expanded-keys="expandedKeys" v-model:selected-keys="selectedKeys" :tree-data="treeData" />
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
        children: [{ title: '叶子节点', key: '0-0-1-0' }],
      },
    ],
  },
]
<\/script>
`,On=A({__name:"TreeBlockNode",setup(t){const i=[{key:"0-0",title:"Parent Node 0",children:[{key:"0-0-0",title:"Child Node 0-0"},{key:"0-0-1",title:"Child Node 0-1"},{key:"0-0-2",title:"Child Node 0-2"}]},{key:"0-1",title:"Parent Node 1",children:[{key:"0-1-0",title:"Child Node 1-0"},{key:"0-1-1",title:"Child Node 1-1"}]}];return(o,y)=>(E(),_("div",null,[y[0]||(y[0]=c("h3",null,"普通模式（默认）",-1)),h(g(O),{"tree-data":i,"default-expanded-keys":["0-0"],"default-selected-keys":["0-0-0"]}),y[1]||(y[1]=c("h3",{style:{"margin-top":"24px"}},"块级节点模式（blockNode）",-1)),h(g(O),{"tree-data":i,"default-expanded-keys":["0-0"],"default-selected-keys":["0-0-0"],"block-node":""})]))}}),Sn=ne(On,[["__scopeId","data-v-db8ea8c6"]]),An=`<template>
  <div>
    <h3>普通模式（默认）</h3>
    <Tree :tree-data="treeData" :default-expanded-keys="['0-0']" :default-selected-keys="['0-0-0']" />

    <h3 style="margin-top: 24px">块级节点模式（blockNode）</h3>
    <Tree :tree-data="treeData" :default-expanded-keys="['0-0']" :default-selected-keys="['0-0-0']" block-node />
  </div>
</template>

<script setup lang="ts">
import { Tree } from 'ant-design-hmfw'

const treeData = [
  {
    key: '0-0',
    title: 'Parent Node 0',
    children: [
      {
        key: '0-0-0',
        title: 'Child Node 0-0',
      },
      {
        key: '0-0-1',
        title: 'Child Node 0-1',
      },
      {
        key: '0-0-2',
        title: 'Child Node 0-2',
      },
    ],
  },
  {
    key: '0-1',
    title: 'Parent Node 1',
    children: [
      {
        key: '0-1-0',
        title: 'Child Node 1-0',
      },
      {
        key: '0-1-1',
        title: 'Child Node 1-1',
      },
    ],
  },
]
<\/script>

<style scoped>
h3 {
  margin-bottom: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
}
</style>
`,En=A({__name:"TreeCheckable",setup(t){const i=C(["0-0"]),o=C([]),y=[{title:"父节点 1",key:"0-0",children:[{title:"子节点 1-1",key:"0-0-0"},{title:"子节点 1-2",key:"0-0-1"}]},{title:"父节点 2",key:"0-1",children:[{title:"子节点 2-1",key:"0-1-0"}]}];return(l,r)=>(E(),_(ve,null,[h(g(O),{"checked-keys":o.value,"onUpdate:checkedKeys":r[0]||(r[0]=u=>o.value=u),"expanded-keys":i.value,"onUpdate:expandedKeys":r[1]||(r[1]=u=>i.value=u),checkable:"","tree-data":y},null,8,["checked-keys","expanded-keys"]),c("p",null,"已勾选："+ee(o.value.join(", ")),1)],64))}}),In=`<template>
  <Tree v-model:checked-keys="checkedKeys" v-model:expanded-keys="expandedKeys" checkable :tree-data="treeData" />
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
    children: [{ title: '子节点 2-1', key: '0-1-0' }],
  },
]
<\/script>
`,$n=A({__name:"TreeDirectory",setup(t){const i=C(["0-0"]),o=C([]),y=[{title:"src",key:"0-0",children:[{title:"components",key:"0-0-0",children:[{title:"Button.tsx",key:"0-0-0-0",isLeaf:!0},{title:"Tree.tsx",key:"0-0-0-1",isLeaf:!0}]},{title:"utils",key:"0-0-1",children:[{title:"index.ts",key:"0-0-1-0",isLeaf:!0}]}]}];return(l,r)=>(E(),te(g(O).DirectoryTree,{"expanded-keys":i.value,"onUpdate:expandedKeys":r[0]||(r[0]=u=>i.value=u),"selected-keys":o.value,"onUpdate:selectedKeys":r[1]||(r[1]=u=>o.value=u),multiple:"","tree-data":y},null,8,["expanded-keys","selected-keys"]))}}),Ln=`<template>
  <Tree.DirectoryTree
    v-model:expanded-keys="expandedKeys"
    v-model:selected-keys="selectedKeys"
    multiple
    :tree-data="treeData"
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
        children: [{ title: 'index.ts', key: '0-0-1-0', isLeaf: true }],
      },
    ],
  },
]
<\/script>
`,Bn=A({__name:"TreeDraggable",setup(t){const i=C([{title:"父节点 1",key:"0-0",children:[{title:"子节点 1-1",key:"0-0-0"},{title:"子节点 1-2",key:"0-0-1"}]},{title:"父节点 2",key:"0-1",children:[{title:"子节点 2-1",key:"0-1-0"}]}]),o=({dropNode:u})=>Array.isArray(u.children)&&u.children.length>0,y=(u,b)=>{for(let N=0;N<u.length;N++){if(u[N].key===b)return u.splice(N,1)[0];if(u[N].children){const p=y(u[N].children,b);if(p)return p}}return null},l=(u,b,N)=>{for(const p of u){if(p.key===b)return p.children||(p.children=[]),p.children.push(N),!0;if(p.children&&l(p.children,b,N))return!0}return!1},r=u=>{const b=JSON.parse(JSON.stringify(i.value)),N=y(b,u.dragNode.key);N&&(l(b,u.node.key,N),i.value=b)};return(u,b)=>(E(),_("div",null,[b[0]||(b[0]=c("p",{style:{"margin-bottom":"12px",color:"#666"}}," 拖动节点可重新排列。已内置边界检查：节点不能拖到自身或自己的后代上（防止循环引用）。 ",-1)),h(g(O),{draggable:"","block-node":"","tree-data":i.value,"default-expand-all":!0,"allow-drop":o,onDrop:r},null,8,["tree-data"]),b[1]||(b[1]=c("p",{style:{"margin-top":"12px",color:"#999","font-size":"12px"}}," 本示例通过 allowDrop 额外限制：叶子节点不能作为放置目标。 ",-1))]))}}),_n=`<template>
  <div>
    <p style="margin-bottom: 12px; color: #666">
      拖动节点可重新排列。已内置边界检查：节点不能拖到自身或自己的后代上（防止循环引用）。
    </p>
    <Tree
      draggable
      block-node
      :tree-data="treeData"
      :default-expand-all="true"
      :allow-drop="allowDrop"
      @drop="onDrop"
    />
    <p style="margin-top: 12px; color: #999; font-size: 12px">
      本示例通过 allowDrop 额外限制：叶子节点不能作为放置目标。
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tree } from 'ant-design-hmfw'

const treeData = ref([
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
    children: [{ title: '子节点 2-1', key: '0-1-0' }],
  },
])

// 额外限制：不允许放到叶子节点上（仅容器节点可接收）
const allowDrop = ({ dropNode }: any) => {
  return Array.isArray(dropNode.children) && dropNode.children.length > 0
}

// 在树中查找并移除某个 key 的节点，返回被移除的节点
const findAndRemove = (nodes: any[], key: string): any => {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].key === key) {
      return nodes.splice(i, 1)[0]
    }
    if (nodes[i].children) {
      const found = findAndRemove(nodes[i].children, key)
      if (found) return found
    }
  }
  return null
}

// 将节点插入到目标节点的子级
const insertInto = (nodes: any[], targetKey: string, dragNode: any): boolean => {
  for (const node of nodes) {
    if (node.key === targetKey) {
      if (!node.children) node.children = []
      node.children.push(dragNode)
      return true
    }
    if (node.children && insertInto(node.children, targetKey, dragNode)) {
      return true
    }
  }
  return false
}

const onDrop = (info: any) => {
  const data = JSON.parse(JSON.stringify(treeData.value))
  const dragNode = findAndRemove(data, info.dragNode.key)
  if (dragNode) {
    insertInto(data, info.node.key, dragNode)
    treeData.value = data
  }
}
<\/script>
`,Fn=A({__name:"TreeFieldNames",setup(t){const i=[{key:"1",title:"Node 1",children:[{key:"1-1",title:"Node 1-1"},{key:"1-2",title:"Node 1-2"}]},{key:"2",title:"Node 2"}],o=[{id:"node-1",name:"Custom Node 1",nodes:[{id:"node-1-1",name:"Custom Child 1-1"},{id:"node-1-2",name:"Custom Child 1-2"}]},{id:"node-2",name:"Custom Node 2"}],y=[{value:"dept-1",label:"研发部",items:[{value:"dept-1-1",label:"前端组",items:[{value:"dept-1-1-1",label:"Vue 团队"},{value:"dept-1-1-2",label:"React 团队"}]},{value:"dept-1-2",label:"后端组"}]},{value:"dept-2",label:"产品部",items:[{value:"dept-2-1",label:"B 端产品"},{value:"dept-2-2",label:"C 端产品"}]}];return(l,r)=>(E(),_("div",null,[r[0]||(r[0]=c("h3",null,"使用默认字段（key/title/children）",-1)),h(g(O),{"tree-data":i,"default-expanded-keys":["1"],"default-selected-keys":["1-1"]}),r[1]||(r[1]=c("h3",{style:{"margin-top":"24px"}},"自定义字段（fieldNames）",-1)),h(g(O),{"tree-data":o,"field-names":{key:"id",title:"name",children:"nodes"},"default-expanded-keys":["node-1"],"default-selected-keys":["node-1-1"]}),r[2]||(r[2]=c("h3",{style:{"margin-top":"24px"}},"API 数据格式示例",-1)),h(g(O),{"tree-data":y,"field-names":{key:"value",title:"label",children:"items"},"default-expanded-keys":["dept-1"]})]))}}),Pn=ne(Fn,[["__scopeId","data-v-00d43e08"]]),Vn=`<template>
  <div>
    <h3>使用默认字段（key/title/children）</h3>
    <Tree :tree-data="defaultTreeData" :default-expanded-keys="['1']" :default-selected-keys="['1-1']" />

    <h3 style="margin-top: 24px">自定义字段（fieldNames）</h3>
    <Tree
      :tree-data="customTreeData"
      :field-names="{ key: 'id', title: 'name', children: 'nodes' }"
      :default-expanded-keys="['node-1']"
      :default-selected-keys="['node-1-1']"
    />

    <h3 style="margin-top: 24px">API 数据格式示例</h3>
    <Tree
      :tree-data="apiTreeData"
      :field-names="{ key: 'value', title: 'label', children: 'items' }"
      :default-expanded-keys="['dept-1']"
    />
  </div>
</template>

<script setup lang="ts">
import { Tree } from 'ant-design-hmfw'

// 默认字段格式
const defaultTreeData = [
  {
    key: '1',
    title: 'Node 1',
    children: [
      {
        key: '1-1',
        title: 'Node 1-1',
      },
      {
        key: '1-2',
        title: 'Node 1-2',
      },
    ],
  },
  {
    key: '2',
    title: 'Node 2',
  },
]

// 自定义字段格式（id/name/nodes）
const customTreeData = [
  {
    id: 'node-1',
    name: 'Custom Node 1',
    nodes: [
      {
        id: 'node-1-1',
        name: 'Custom Child 1-1',
      },
      {
        id: 'node-1-2',
        name: 'Custom Child 1-2',
      },
    ],
  },
  {
    id: 'node-2',
    name: 'Custom Node 2',
  },
]

// API 返回的数据格式（value/label/items）
const apiTreeData = [
  {
    value: 'dept-1',
    label: '研发部',
    items: [
      {
        value: 'dept-1-1',
        label: '前端组',
        items: [
          {
            value: 'dept-1-1-1',
            label: 'Vue 团队',
          },
          {
            value: 'dept-1-1-2',
            label: 'React 团队',
          },
        ],
      },
      {
        value: 'dept-1-2',
        label: '后端组',
      },
    ],
  },
  {
    value: 'dept-2',
    label: '产品部',
    items: [
      {
        value: 'dept-2-1',
        label: 'B 端产品',
      },
      {
        value: 'dept-2-2',
        label: 'C 端产品',
      },
    ],
  },
]
<\/script>

<style scoped>
h3 {
  margin-bottom: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
}
</style>
`,Rn=A({__name:"TreeSearch",setup(t){const i=C(""),o=[{title:"父节点 1",key:"0-0",children:[{title:"子节点 apple",key:"0-0-0"},{title:"子节点 banana",key:"0-0-1"}]},{title:"父节点 2",key:"0-1",children:[{title:"子节点 cherry",key:"0-1-0"}]}],y=l=>i.value?String(l.title).toLowerCase().includes(i.value.toLowerCase()):!1;return(l,r)=>(E(),_(ve,null,[mn(c("input",{"onUpdate:modelValue":r[0]||(r[0]=u=>i.value=u),placeholder:"输入关键字高亮匹配节点",style:{"margin-bottom":"8px",padding:"4px 8px",width:"240px"}},null,512),[[bn,i.value]]),h(g(O),{"tree-data":o,"default-expand-all":!0,"filter-tree-node":y})],64))}}),jn=`<template>
  <input
    v-model="searchValue"
    placeholder="输入关键字高亮匹配节点"
    style="margin-bottom: 8px; padding: 4px 8px; width: 240px"
  />
  <Tree :tree-data="treeData" :default-expand-all="true" :filter-tree-node="filterNode" />
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
    children: [{ title: '子节点 cherry', key: '0-1-0' }],
  },
]

const filterNode = (node: any) => {
  if (!searchValue.value) return false
  return String(node.title).toLowerCase().includes(searchValue.value.toLowerCase())
}
<\/script>
`,Mn=A({__name:"TreeShowLine",setup(t){const i=[{title:"父节点",key:"0-0",children:[{title:"子节点 1",key:"0-0-0"},{title:"子节点 2",key:"0-0-1"},{title:"子节点 3",key:"0-0-2"}]}];return(o,y)=>(E(),te(g(O),{"show-line":"","tree-data":i,"default-expand-all":!0}))}}),Un=`<template>
  <Tree show-line :tree-data="treeData" :default-expand-all="true" />
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
`,Hn={style:{"margin-top":"16px",color:"#666"}},zn=A({__name:"TreeVirtual",setup(t){const i=(r,u,b)=>r>3?[]:Array.from({length:b},(N,p)=>{const F=`${u}-${p}`,L=r<3;return{key:F,title:`Node ${F}`,children:L?i(r+1,F,Math.min(10,b)):void 0}}),o=i(0,"0",100),y=C(["0-0","0-1","0-0-0","0-0-1"]),l=T(()=>{const r=u=>u.reduce((b,N)=>b+1+(N.children?r(N.children):0),0);return r(o)});return(r,u)=>(E(),_("div",null,[u[0]||(u[0]=c("h3",null,"虚拟滚动 - 10,000 个节点",-1)),h(g(O),{"tree-data":g(o),"default-expanded-keys":y.value,virtual:"",height:400,"item-height":28,"show-line":""},null,8,["tree-data","default-expanded-keys"]),c("div",Hn," 总节点数: "+ee(g(o).length)+" 个根节点，约 "+ee(l.value)+" 个节点 ",1)]))}}),Jn=ne(zn,[["__scopeId","data-v-40be5d6a"]]),Gn=`<template>
  <div>
    <h3>虚拟滚动 - 10,000 个节点</h3>
    <Tree
      :tree-data="treeData"
      :default-expanded-keys="expandedKeys"
      virtual
      :height="400"
      :item-height="28"
      show-line
    />

    <div style="margin-top: 16px; color: #666">
      总节点数: {{ treeData.length }} 个根节点，约 {{ totalNodes }} 个节点
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Tree } from 'ant-design-hmfw'

// 生成大量树节点
const generateTreeData = (level: number, parentKey: string, count: number): any[] => {
  if (level > 3) return []

  return Array.from({ length: count }, (_, i) => {
    const key = \`\${parentKey}-\${i}\`
    const hasChildren = level < 3

    return {
      key,
      title: \`Node \${key}\`,
      children: hasChildren ? generateTreeData(level + 1, key, Math.min(10, count)) : undefined,
    }
  })
}

const treeData = generateTreeData(0, '0', 100)

// 默认展开前几个节点
const expandedKeys = ref(['0-0', '0-1', '0-0-0', '0-0-1'])

// 计算总节点数
const totalNodes = computed(() => {
  const count = (nodes: any[]): number => {
    return nodes.reduce((sum, node) => {
      return sum + 1 + (node.children ? count(node.children) : 0)
    }, 0)
  }
  return count(treeData)
})
<\/script>

<style scoped>
h3 {
  margin-bottom: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
}
</style>
`,Qn={class:"markdown-body"},dd={__name:"tree",setup(t,{expose:i}){return i({frontmatter:{}}),(y,l)=>{const r=vn("DemoBlock");return E(),_("div",Qn,[l[0]||(l[0]=c("h1",{id:"tree-",tabindex:"-1"},"Tree 树形控件",-1)),l[1]||(l[1]=c("p",null,"多层次的结构列表。",-1)),l[2]||(l[2]=c("h2",{id:"",tabindex:"-1"},"何时使用",-1)),l[3]||(l[3]=c("ul",null,[c("li",null,"文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构"),c("li",null,"使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能")],-1)),l[4]||(l[4]=c("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),l[5]||(l[5]=c("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),l[6]||(l[6]=c("p",null,"最简单的用法，展示可选中，默认展开等功能。",-1)),h(r,{title:"基础用法",source:g(Tn)},{default:$(()=>[h(Kn)]),_:1},8,["source"]),l[7]||(l[7]=c("h3",{id:"-3",tabindex:"-1"},"可勾选",-1)),l[8]||(l[8]=c("p",null,[x("使用 "),c("code",null,"checkable"),x(" 属性可以在节点前添加 Checkbox 复选框，父子节点选中状态默认级联联动（半选态自动计算）。")],-1)),h(r,{title:"可勾选",source:g(In)},{default:$(()=>[h(En)]),_:1},8,["source"]),l[9]||(l[9]=c("h3",{id:"-4",tabindex:"-1"},"显示连接线",-1)),l[10]||(l[10]=c("p",null,[x("使用 "),c("code",null,"showLine"),x(" 属性可以显示连接线。")],-1)),h(r,{title:"显示连接线",source:g(Un)},{default:$(()=>[h(Mn)]),_:1},8,["source"]),l[11]||(l[11]=c("h3",{id:"-5",tabindex:"-1"},"目录树",-1)),l[12]||(l[12]=c("p",null,[x("内置的 "),c("code",null,"Tree.DirectoryTree"),x("，默认展示文件夹/文件图标，支持 "),c("code",null,"expandAction"),x(" 控制点击展开方式。")],-1)),h(r,{title:"目录树",source:g(Ln)},{default:$(()=>[h($n)]),_:1},8,["source"]),l[13]||(l[13]=c("h3",{id:"-6",tabindex:"-1"},"可拖拽",-1)),l[14]||(l[14]=c("p",null,[x("设置 "),c("code",null,"draggable"),x(" 后节点可拖动，拖放时触发 "),c("code",null,"drop"),x(" 事件。")],-1)),h(r,{title:"可拖拽",source:g(_n)},{default:$(()=>[h(Bn)]),_:1},8,["source"]),l[15]||(l[15]=c("h3",{id:"-7",tabindex:"-1"},"搜索高亮",-1)),l[16]||(l[16]=c("p",null,[x("配合 "),c("code",null,"filterTreeNode"),x(" 对命中的节点做高亮处理。")],-1)),h(r,{title:"搜索高亮",source:g(jn)},{default:$(()=>[h(Rn)]),_:1},8,["source"]),l[17]||(l[17]=c("h3",{id:"-8",tabindex:"-1"},"块级节点",-1)),l[18]||(l[18]=c("p",null,[x("设置 "),c("code",null,"blockNode"),x(" 后，节点将占据整行宽度，选中样式会覆盖整行。")],-1)),h(r,{title:"块级节点",source:g(An)},{default:$(()=>[h(Sn)]),_:1},8,["source"]),l[19]||(l[19]=c("h3",{id:"-9",tabindex:"-1"},"自定义字段",-1)),l[20]||(l[20]=c("p",null,[x("通过 "),c("code",null,"fieldNames"),x(" 可以自定义数据字段名，适配不同的后端接口格式。")],-1)),h(r,{title:"自定义字段",source:g(Vn)},{default:$(()=>[h(Pn)]),_:1},8,["source"]),l[21]||(l[21]=c("h3",{id:"-10",tabindex:"-1"},"虚拟滚动",-1)),l[22]||(l[22]=c("p",null,[x("设置 "),c("code",null,"virtual"),x(" 和 "),c("code",null,"height"),x(" 属性支持大数据场景的虚拟滚动。")],-1)),h(r,{title:"虚拟滚动",source:g(Gn)},{default:$(()=>[h(Jn)]),_:1},8,["source"]),l[23]||(l[23]=xn('<h2 id="api" tabindex="-1">API</h2><h3 id="tree-props" tabindex="-1">Tree Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>treeData</td><td>treeNodes 数据</td><td><code>TreeDataNode[]</code></td><td><code>[]</code></td></tr><tr><td>expandedKeys (v-model)</td><td>展开指定的树节点</td><td><code>(string | number)[]</code></td><td>-</td></tr><tr><td>defaultExpandedKeys</td><td>默认展开指定的树节点</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>defaultExpandAll</td><td>默认展开所有树节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultExpandParent</td><td>默认展开父节点</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>autoExpandParent</td><td>展开时自动展开父节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectedKeys (v-model)</td><td>设置选中的树节点</td><td><code>(string | number)[]</code></td><td>-</td></tr><tr><td>defaultSelectedKeys</td><td>默认选中的树节点</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>checkedKeys (v-model)</td><td>选中复选框的树节点；<code>checkStrictly</code> 时为 <code>{ checked, halfChecked }</code></td><td><code>(string | number)[] | { checked, halfChecked }</code></td><td>-</td></tr><tr><td>defaultCheckedKeys</td><td>默认勾选的树节点</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>checkable</td><td>节点前添加 Checkbox 复选框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>checkStrictly</td><td>父子节点选中状态不再关联</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>multiple</td><td>支持点选多个节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectable</td><td>是否可选中</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>将树禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>draggable</td><td>节点可拖拽</td><td><code>boolean | (node) =&gt; boolean | { icon?, nodeDraggable? }</code></td><td><code>false</code></td></tr><tr><td>allowDrop</td><td>是否允许拖放到目标节点，返回 <code>false</code> 阻止</td><td><code>({ dragNode, dropNode, dropPosition }) =&gt; boolean</code></td><td>-</td></tr><tr><td>showLine</td><td>是否展示连接线</td><td><code>boolean | { showLeafIcon }</code></td><td><code>false</code></td></tr><tr><td>showIcon</td><td>是否展示节点图标</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>blockNode</td><td>节点是否占据一行</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>indent</td><td>每级缩进像素</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>filterTreeNode</td><td>按需高亮节点，返回 <code>true</code> 高亮</td><td><code>(node) =&gt; boolean</code></td><td>-</td></tr><tr><td>icon</td><td>自定义节点图标（名称或渲染函数）</td><td><code>string | (node, ctx) =&gt; VNode</code></td><td>-</td></tr><tr><td>switcherIcon</td><td>自定义展开/收起图标</td><td><code>string | ({ expanded, isLeaf }) =&gt; VNode</code></td><td>-</td></tr><tr><td>titleRender</td><td>自定义节点标题渲染</td><td><code>(node) =&gt; VNode</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义节点 title、key、children 的字段</td><td><code>{ title?, key?, children? }</code></td><td>-</td></tr><tr><td>virtual</td><td>是否开启虚拟滚动</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>height</td><td>虚拟滚动容器高度（开启 virtual 时必需）</td><td><code>number | string</code></td><td>-</td></tr><tr><td>itemHeight</td><td>虚拟滚动每项高度</td><td><code>number</code></td><td><code>28</code></td></tr><tr><td>rootClassName</td><td>根节点 className</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 class（<code>root</code>/<code>item</code>/<code>itemIcon</code>/<code>itemTitle</code>/<code>itemSwitcher</code>）</td><td><code>object</code></td><td>-</td></tr><tr><td>styles</td><td>语义化内联样式（同上 key）</td><td><code>object</code></td><td>-</td></tr></tbody></table><h3 id="directorytree-props" tabindex="-1">DirectoryTree Props</h3><p>继承全部 Tree Props，并新增：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>expandAction</td><td>点击展开节点的方式，<code>false</code> 关闭</td><td><code>false | &#39;click&#39; | &#39;doubleClick&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>showIcon</td><td>是否展示图标</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="treedatanode" tabindex="-1">TreeDataNode</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>节点唯一标识</td><td><code>string | number</code></td><td>-</td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td>children</td><td>子节点</td><td><code>TreeDataNode[]</code></td><td>-</td></tr><tr><td>disabled</td><td>禁掉响应</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disableCheckbox</td><td>禁掉 checkbox</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectable</td><td>是否可选中</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>checkable</td><td>是否可勾选</td><td><code>boolean</code></td><td>-</td></tr><tr><td>isLeaf</td><td>设置为叶子节点</td><td><code>boolean</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标</td><td><code>string | (node) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="tree-events" tabindex="-1">Tree Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:expandedKeys</td><td>展开/收起节点时触发</td><td><code>(keys: Key[]) =&gt; void</code></td></tr><tr><td>update:selectedKeys</td><td>点击树节点触发</td><td><code>(keys: Key[]) =&gt; void</code></td></tr><tr><td>update:checkedKeys</td><td>点击复选框触发</td><td><code>(keys: Key[] | { checked, halfChecked }) =&gt; void</code></td></tr><tr><td>expand</td><td>展开/收起节点时触发</td><td><code>(keys, { expanded, node, nativeEvent }) =&gt; void</code></td></tr><tr><td>select</td><td>点击树节点触发</td><td><code>(keys, { event, selected, node, selectedNodes, nativeEvent }) =&gt; void</code></td></tr><tr><td>check</td><td>点击复选框触发</td><td><code>(keys, { event, checked, node, checkedNodes, halfCheckedKeys, nativeEvent }) =&gt; void</code></td></tr><tr><td>dblclick</td><td>双击节点</td><td><code>(event, node) =&gt; void</code></td></tr><tr><td>rightClick</td><td>右键节点</td><td><code>({ event, node }) =&gt; void</code></td></tr><tr><td>dragstart / dragenter / dragover / dragleave / dragend</td><td>拖拽过程事件</td><td><code>({ event, node, ... }) =&gt; void</code></td></tr><tr><td>drop</td><td>拖拽释放</td><td><code>({ node, dragNode, dragNodesKeys, dropPosition, dropToGap, nativeEvent }) =&gt; void</code></td></tr></tbody></table><h3 id="-11" tabindex="-1">键盘支持</h3><p>聚焦节点后支持：<code>↑</code>/<code>↓</code> 移动焦点，<code>→</code> 展开（或进入子节点），<code>←</code> 收起（或回到父节点），<code>Enter</code>/<code>Space</code> 选中或勾选。</p><h3 id="-12" tabindex="-1">不支持的能力（待后补）</h3><p>异步加载 <code>loadData</code>/<code>loadedKeys</code>、<code>TreeNode</code> 子组件式 JSX 声明、拖拽插入位置指示线（当前拖放仅支持放入目标节点子级，触发 <code>drop</code> 事件，并已内置循环引用边界检查与 <code>allowDrop</code> 校验）。</p>',14))])}}};export{dd as default};
