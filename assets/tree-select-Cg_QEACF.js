import{S as le}from"./Space-Bktr5yjC.js";import{o as R,N as Be,E as w,Q as ue,x as _e,w as Ve,n as l,F as ye,m as I,T as Oe,f as N,t as Le,A as F,i as oe,R as H,K as y,h,J as ce,k as xe,_ as Ke,H as Ie,l as Re}from"./index-X2tFbSxS.js";import{c as b}from"./cls-S9IiI6wd.js";const A=R({name:"TreeSelect",props:{value:[String,Number,Array],defaultValue:[String,Number,Array],treeData:{type:Array,default:()=>[]},multiple:Boolean,treeCheckable:Boolean,treeCheckStrictly:Boolean,showCheckedStrategy:{type:String,default:"SHOW_CHILD"},showSearch:Boolean,autoClearSearchValue:{type:Boolean,default:!0},allowClear:Boolean,placeholder:{type:String,default:"请选择"},disabled:Boolean,size:{type:String,default:"middle"},status:{type:String,default:""},maxCount:Number,notFoundContent:{type:String,default:"暂无数据"},treeDefaultExpandAll:Boolean,treeDefaultExpandedKeys:{type:Array,default:()=>[]},open:{type:Boolean,default:void 0},defaultOpen:Boolean,fieldNames:Object,virtual:{type:Boolean,default:!0},listHeight:{type:Number,default:256},itemHeight:{type:Number,default:28},treeIcon:[Boolean,Object,String,Function],maxTagCount:[Number,String],maxTagPlaceholder:[String,Function],maxTagTextLength:Number,classNames:Object,styles:Object},emits:["update:value","update:open","change","search","select","treeExpand","dropdownVisibleChange","openChange","clear"],setup(e,{emit:o}){const s=Be("tree-select"),$=w(null),c=w(null),g=w(null),M=w(!!e.defaultOpen),U=w({top:0,left:0,width:0}),u=w(""),T=w(0),Se=N(()=>{var t;return((t=e.fieldNames)==null?void 0:t.label)??"label"}),Ce=N(()=>{var t;return((t=e.fieldNames)==null?void 0:t.value)??"value"}),Ne=N(()=>{var t;return((t=e.fieldNames)==null?void 0:t.children)??"children"}),W=t=>t[Se.value],B=t=>t[Ce.value],L=t=>t[Ne.value],ae=N(()=>e.multiple||e.treeCheckable),K=N(()=>e.open!==void 0?e.open:M.value),_=w((t=>t??(ae.value?[]:void 0))(e.defaultValue??e.value));ue(()=>e.value,t=>{t!==void 0&&(_.value=t)});const Te=N(()=>e.value!==void 0?e.value:_.value),C=N(()=>{const t=Te.value;return t==null?[]:Array.isArray(t)?t:[t]}),D=N(()=>{const t=new Map,n=new Map,a=new Map,p=new Map,r=(i,d)=>{for(const k of i){const v=B(k);t.set(v,k),n.set(v,d),p.set(v,W(k));const m=L(k);m!=null&&m.length&&(a.set(v,m.map(B)),r(m,v))}};return r(e.treeData,void 0),{nodeMap:t,parentMap:n,childKeysMap:a,labelMap:p,rootKeys:e.treeData.map(B)}}),ie=t=>{const n=D.value.childKeysMap.get(t);return n!=null&&n.length?n.flatMap(a=>ie(a)):[t]},me=t=>{const{childKeysMap:n,rootKeys:a}=D.value,p=new Set(t),r=new Set,i=d=>{const k=n.get(d);if(!(k!=null&&k.length))return p.has(d)?"checked":"none";let v=!0,m=!1;for(const f of k){const S=i(f);S==="checked"?m=!0:(S==="half"&&(m=!0),v=!1)}return v?(p.add(d),"checked"):(p.delete(d),m?(r.add(d),"half"):"none")};return a.forEach(i),{checked:p,half:r}},he=t=>t.flatMap(n=>[B(n),...he(L(n)??[])]),ve=N(()=>e.treeDefaultExpandAll?he(e.treeData):e.treeDefaultExpandedKeys),E=w([...ve.value]);ue(ve,t=>{E.value=[...t]});function ke(t,n=0,a=!1){return t.flatMap(p=>{const r=L(p),i=B(p),d=[{node:p,level:n,hasChildren:!!(r!=null&&r.length),valueKey:i,label:W(p),forceExpand:a}];return r!=null&&r.length&&(a||E.value.includes(i))&&d.push(...ke(r,n+1,a)),d})}const V=N(()=>{if(!u.value)return ke(e.treeData);const t=u.value.toLowerCase(),n=new Set,a=new Set,p=i=>{for(const d of i){const k=B(d);if(W(d).toLowerCase().includes(t)){n.add(k);let f=D.value.parentMap.get(k);for(;f!==void 0;)a.add(f),f=D.value.parentMap.get(f)}const m=L(d);m&&p(m)}};p(e.treeData);const r=(i,d=0)=>i.flatMap(k=>{const v=B(k),m=n.has(v),f=a.has(v);if(!m&&!f)return[];const S=L(k),O=[{node:k,level:d,hasChildren:!!(S!=null&&S.length),valueKey:v,label:W(k),forceExpand:f}];return S&&f&&O.push(...r(S,d+1)),O});return r(e.treeData)}),fe=N(()=>C.value.map(t=>D.value.labelMap.get(t)??String(t))),se=N(()=>e.virtual&&e.itemHeight>0&&V.value.length*e.itemHeight>e.listHeight),re=N(()=>{if(!se.value)return{start:0,end:V.value.length,offset:0};const t=V.value.length,n=5,a=Math.max(0,Math.floor(T.value/e.itemHeight)-n),p=Math.ceil(e.listHeight/e.itemHeight)+n*2,r=Math.min(t,a+p);return{start:a,end:r,offset:a*e.itemHeight}}),$e=t=>{T.value=t.target.scrollTop};ue([u,()=>e.treeData,E],()=>{T.value=0,g.value&&(g.value.scrollTop=0)});const qe=t=>{const n=e.maxTagTextLength;return n&&n>0&&t.length>n?`${t.slice(0,n)}...`:t},De=t=>{const n=e.maxTagPlaceholder;return typeof n=="function"?n(t):typeof n=="string"?n:`+ ${t.length} ...`},de=N(()=>{const t=C.value.length,n=e.maxTagCount;if(n===void 0||n==="responsive")return t;const a=Number(n);return!Number.isFinite(a)||a<0?t:Math.min(a,t)}),Ee=t=>{if(t.icon!==void 0&&t.icon!==null)return typeof t.icon=="function"?t.icon(t):t.icon;const n=e.treeIcon;if(n==null||n===!1)return null;if(n===!0){const a=L(t);return a!=null&&a.length?"📁":"📄"}return typeof n=="function"?n(t):n};async function Me(){if(!e.disabled&&(M.value=!0,o("update:open",!0),o("dropdownVisibleChange",!0),o("openChange",!0),await Le(),$.value)){const t=$.value.getBoundingClientRect();U.value={top:t.bottom+window.scrollY+4,left:t.left+window.scrollX,width:t.width}}}function pe(){M.value=!1,u.value="",o("update:open",!1),o("dropdownVisibleChange",!1),o("openChange",!1)}function Pe(t){E.value.includes(t)?E.value=E.value.filter(n=>n!==t):E.value=[...E.value,t],o("treeExpand",E.value)}function ge(t){if(!(t.selectable!==!1)||t.disabled||e.disabled)return;const a=B(t),p=W(t);if(e.treeCheckable){if(t.disableCheckbox)return;let r;if(e.treeCheckStrictly){const i=[...C.value],d=i.indexOf(a);d>=0?i.splice(d,1):i.push(a),r=i}else{const i=ie(a),d=new Set(C.value);i.every(m=>d.has(m))?i.forEach(m=>d.delete(m)):i.forEach(m=>d.add(m));const{checked:v}=me(d);e.showCheckedStrategy==="SHOW_ALL"?r=Array.from(v):e.showCheckedStrategy==="SHOW_PARENT"?r=Array.from(v).filter(m=>{const f=D.value.childKeysMap.get(m);return f!=null&&f.length?f.every(S=>v.has(S)):!0}):r=Array.from(v).filter(m=>{var f;return!((f=D.value.childKeysMap.get(m))!=null&&f.length)})}if(e.maxCount!==void 0&&r.length>e.maxCount)return;_.value=r,o("update:value",r),o("change",r,r.map(i=>D.value.labelMap.get(i)??String(i))),o("select",a,t),e.autoClearSearchValue&&(u.value="")}else if(ae.value){const r=[...C.value],i=r.indexOf(a);if(i>=0)r.splice(i,1);else{if(e.maxCount!==void 0&&r.length>=e.maxCount)return;r.push(a)}_.value=r,o("update:value",r),o("change",r,r.map(d=>D.value.labelMap.get(d)??String(d))),o("select",a,t),e.autoClearSearchValue&&(u.value="")}else _.value=a,o("update:value",a),o("change",a,p),o("select",a,t),pe()}function He(t,n){n.stopPropagation();const a=C.value.filter(p=>p!==t);_.value=a,o("update:value",a),o("change",a,a.map(p=>D.value.labelMap.get(p)??String(p)))}function Ae(t){t.stopPropagation();const n=ae.value?[]:void 0;_.value=n,o("update:value",n),o("change",n,[]),o("clear")}const be=t=>{var n,a;K.value&&((n=$.value)!=null&&n.contains(t.target)||(a=c.value)!=null&&a.contains(t.target)||pe())};_e(()=>document.addEventListener("mousedown",be)),Ve(()=>document.removeEventListener("mousedown",be));const we=(t,n,a)=>{var j,X,Y,J,Q,G,Z,ee,x,q;const{node:p,level:r,hasChildren:i,valueKey:d,label:k,forceExpand:v}=t,m=C.value.includes(d),f=v||E.value.includes(d),S=n.has(d),O=a.has(d),z=Ee(p);return l("div",{key:d,class:b(`${s}-tree-node`,(j=e.classNames)==null?void 0:j.treeNode,{[`${s}-tree-node-selected`]:m,[`${s}-tree-node-disabled`]:p.disabled}),style:{paddingLeft:`${r*20+8}px`,height:se.value?`${e.itemHeight}px`:void 0,minHeight:se.value?`${e.itemHeight}px`:void 0,...(X=e.styles)==null?void 0:X.treeNode}},[l("span",{class:b(`${s}-tree-switcher`,(Y=e.classNames)==null?void 0:Y.treeSwitcher,{[`${s}-tree-switcher-noop`]:!i}),style:(J=e.styles)==null?void 0:J.treeSwitcher,onClick:P=>{P.stopPropagation(),i&&!v&&Pe(d)}},[i&&!v?f?"▾":"▸":null]),e.treeCheckable&&l("span",{class:b(`${s}-tree-checkbox`,(Q=e.classNames)==null?void 0:Q.treeCheckbox,{[`${s}-tree-checkbox-checked`]:S,[`${s}-tree-checkbox-indeterminate`]:O,[`${s}-tree-checkbox-disabled`]:p.disabled||p.disableCheckbox}),style:(G=e.styles)==null?void 0:G.treeCheckbox,onClick:P=>{P.stopPropagation(),ge(p)}},[l("span",{class:`${s}-tree-checkbox-inner`},null)]),z!==null&&l("span",{class:b(`${s}-tree-icon`,(Z=e.classNames)==null?void 0:Z.treeIcon),style:(ee=e.styles)==null?void 0:ee.treeIcon},[z]),l("span",{class:b(`${s}-tree-node-content`,(x=e.classNames)==null?void 0:x.treeNodeContent),style:(q=e.styles)==null?void 0:q.treeNodeContent,onClick:()=>ge(p)},[k])])};return()=>{var r,i,d,k,v,m,f,S,O,z,j,X,Y,J,Q,G,Z,ee;const t=C.value.length>0,n=e.allowClear&&t&&!e.disabled;let a=new Set,p=new Set;if(e.treeCheckable&&!e.treeCheckStrictly){const x=new Set(C.value),q=me(x);a=q.checked,p=q.half}else e.treeCheckable&&(a=new Set(C.value));return l("div",{class:b(s,`${s}-${e.size}`,(r=e.classNames)==null?void 0:r.root,{[`${s}-open`]:K.value,[`${s}-disabled`]:e.disabled,[`${s}-status-error`]:e.status==="error",[`${s}-status-warning`]:e.status==="warning"}),style:(i=e.styles)==null?void 0:i.root},[l("div",{ref:$,class:b(`${s}-selector`,(d=e.classNames)==null?void 0:d.selector),style:(k=e.styles)==null?void 0:k.selector,onClick:K.value?pe:Me},[ae.value?l(ye,null,[fe.value.slice(0,de.value).map((x,q)=>{var P,te;return l("span",{key:C.value[q],class:b(`${s}-selection-item`,(P=e.classNames)==null?void 0:P.item),style:(te=e.styles)==null?void 0:te.item},[l("span",{class:`${s}-selection-item-content`},[qe(x)]),l("span",{class:`${s}-selection-item-remove`,onClick:ne=>He(C.value[q],ne)},[I("×")])])}),C.value.length>de.value&&l("span",{class:b(`${s}-selection-item`,`${s}-selection-overflow`)},[l("span",{class:`${s}-selection-item-content`},[De(C.value.slice(de.value))])]),e.showSearch&&l("input",{class:b(`${s}-selection-search`,(v=e.classNames)==null?void 0:v.search),style:(m=e.styles)==null?void 0:m.search,value:u.value,onInput:x=>{u.value=x.target.value,o("search",u.value)},onClick:x=>x.stopPropagation()},null),!t&&!u.value&&l("span",{class:b(`${s}-selection-placeholder`,(f=e.classNames)==null?void 0:f.placeholder),style:(S=e.styles)==null?void 0:S.placeholder},[e.placeholder])]):l(ye,null,[t?l("span",{class:b(`${s}-selection-item`,(O=e.classNames)==null?void 0:O.item),style:(z=e.styles)==null?void 0:z.item},[fe.value[0]]):l("span",{class:b(`${s}-selection-placeholder`,(j=e.classNames)==null?void 0:j.placeholder),style:(X=e.styles)==null?void 0:X.placeholder},[e.placeholder]),e.showSearch&&K.value&&l("input",{class:b(`${s}-selection-search`,(Y=e.classNames)==null?void 0:Y.search),style:(J=e.styles)==null?void 0:J.search,value:u.value,onInput:x=>{u.value=x.target.value,o("search",u.value)},onClick:x=>x.stopPropagation()},null)])]),l("div",{class:b(`${s}-arrow`,(Q=e.classNames)==null?void 0:Q.arrow),style:(G=e.styles)==null?void 0:G.arrow},[l("span",{class:b(`${s}-arrow-icon`,{[`${s}-arrow-icon-open`]:K.value})},[I("▾")])]),n&&l("span",{class:b(`${s}-clear`,(Z=e.classNames)==null?void 0:Z.clear),style:(ee=e.styles)==null?void 0:ee.clear,onClick:Ae},[I("×")]),K.value&&l(Oe,{to:"body"},{default:()=>{var x,q,P,te;return[l("div",{ref:c,class:b(`${s}-dropdown`,(x=e.classNames)==null?void 0:x.dropdown),style:{position:"absolute",top:`${U.value.top}px`,left:`${U.value.left}px`,minWidth:`${U.value.width}px`,zIndex:1050,...(q=e.styles)==null?void 0:q.dropdown}},[V.value.length===0?l("div",{class:b(`${s}-dropdown-empty`,(P=e.classNames)==null?void 0:P.dropdownEmpty),style:(te=e.styles)==null?void 0:te.dropdownEmpty},[e.notFoundContent]):l("div",{ref:g,class:`${s}-dropdown-list`,style:{maxHeight:`${e.listHeight}px`,overflowY:"auto",position:"relative"},onScroll:$e},[se.value?l("div",{class:`${s}-dropdown-list-holder`,style:{height:`${V.value.length*e.itemHeight}px`,position:"relative"}},[l("div",{class:`${s}-dropdown-list-inner`,style:{transform:`translateY(${re.value.offset}px)`,position:"absolute",top:0,left:0,right:0}},[V.value.slice(re.value.start,re.value.end).map(ne=>we(ne,a,p))])]):V.value.map(ne=>we(ne,a,p))])])]}})])}}}),Fe=R({__name:"TreeSelectBasic",setup(e){const o=w(),s=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return($,c)=>(F(),oe(y(le),{direction:"vertical",style:{width:"300px"}},{default:H(()=>[l(y(A),{value:o.value,"onUpdate:value":c[0]||(c[0]=g=>o.value=g),"tree-data":s,placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),h("span",null,"选中："+ce(o.value),1)]),_:1}))}}),Ue=`<template>
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
`,We=R({__name:"TreeSelectCheckable",setup(e){const o=w([]),s=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return($,c)=>(F(),oe(y(le),{direction:"vertical",style:{width:"300px"}},{default:H(()=>[l(y(A),{value:o.value,"onUpdate:value":c[0]||(c[0]=g=>o.value=g),"tree-data":s,"tree-checkable":"",placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),h("span",null,"选中："+ce(o.value),1)]),_:1}))}}),ze=`<template>
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
`,je={style:{display:"flex","flex-direction":"column",gap:"24px"}},Xe=R({__name:"TreeSelectClassNames",setup(e){const o=w(),s=w(),$=w([]),c=w([]),g=w(),M=[{value:"engineering",label:"工程部",children:[{value:"frontend",label:"前端团队"},{value:"backend",label:"后端团队"},{value:"mobile",label:"移动端团队"}]},{value:"product",label:"产品部",children:[{value:"pm",label:"产品经理"},{value:"design",label:"设计师"}]},{value:"marketing",label:"市场部",children:[{value:"sales",label:"销售团队"},{value:"promotion",label:"推广团队"}]}];return(U,u)=>(F(),xe("div",je,[h("div",null,[u[5]||(u[5]=h("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义选择器容器（渐变背景）：",-1)),l(y(A),{value:o.value,"onUpdate:value":u[0]||(u[0]=T=>o.value=T),"tree-data":M,placeholder:"请选择部门","allow-clear":"","class-names":{root:"custom-selector-root",selector:"custom-selector",arrow:"custom-arrow"},style:{width:"280px"}},null,8,["value"])]),h("div",null,[u[6]||(u[6]=h("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义下拉面板与树节点样式：",-1)),l(y(A),{value:s.value,"onUpdate:value":u[1]||(u[1]=T=>s.value=T),"tree-data":M,placeholder:"选择分类","tree-default-expand-all":"","class-names":{dropdown:"custom-dropdown",treeNode:"custom-tree-node",treeNodeContent:"custom-tree-node-content"},style:{width:"280px"}},null,8,["value"])]),h("div",null,[u[7]||(u[7]=h("div",{style:{"margin-bottom":"8px",color:"#666"}},"多选模式自定义标签：",-1)),l(y(A),{value:$.value,"onUpdate:value":u[2]||(u[2]=T=>$.value=T),"tree-data":M,multiple:"",placeholder:"选择多个部门","allow-clear":"","class-names":{selector:"custom-multi-selector",item:"custom-multi-item"},style:{width:"320px"}},null,8,["value"])]),h("div",null,[u[8]||(u[8]=h("div",{style:{"margin-bottom":"8px",color:"#666"}},"可勾选模式自定义复选框：",-1)),l(y(A),{value:c.value,"onUpdate:value":u[3]||(u[3]=T=>c.value=T),"tree-data":M,"tree-checkable":"",placeholder:"勾选节点","show-checked-strategy":"SHOW_PARENT","class-names":{treeCheckbox:"custom-checkbox",treeSwitcher:"custom-switcher"},style:{width:"280px"}},null,8,["value"])]),h("div",null,[u[9]||(u[9]=h("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用 styles 内联样式：",-1)),l(y(A),{value:g.value,"onUpdate:value":u[4]||(u[4]=T=>g.value=T),"tree-data":M,placeholder:"内联样式示例","allow-clear":"",styles:{root:{borderRadius:"12px",borderColor:"#52c41a"},selector:{background:"linear-gradient(to right, #f0f9ff, #e0f2fe)"},dropdown:{borderRadius:"12px",boxShadow:"0 6px 20px rgba(82, 196, 26, 0.2)"},treeNode:{padding:"6px 8px"}},style:{width:"280px"}},null,8,["value"])])]))}}),Ye=Ke(Xe,[["__scopeId","data-v-1c57bf20"]]),Je=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义选择器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义选择器容器（渐变背景）：</div>
      <TreeSelect
        v-model:value="value1"
        :tree-data="treeData"
        placeholder="请选择部门"
        allow-clear
        :class-names="{
          root: 'custom-selector-root',
          selector: 'custom-selector',
          arrow: 'custom-arrow',
        }"
        style="width: 280px"
      />
    </div>

    <!-- 场景 2：自定义下拉面板与树节点 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义下拉面板与树节点样式：</div>
      <TreeSelect
        v-model:value="value2"
        :tree-data="treeData"
        placeholder="选择分类"
        tree-default-expand-all
        :class-names="{
          dropdown: 'custom-dropdown',
          treeNode: 'custom-tree-node',
          treeNodeContent: 'custom-tree-node-content',
        }"
        style="width: 280px"
      />
    </div>

    <!-- 场景 3：多选模式自定义标签样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">多选模式自定义标签：</div>
      <TreeSelect
        v-model:value="value3"
        :tree-data="treeData"
        multiple
        placeholder="选择多个部门"
        allow-clear
        :class-names="{
          selector: 'custom-multi-selector',
          item: 'custom-multi-item',
        }"
        style="width: 320px"
      />
    </div>

    <!-- 场景 4：可勾选模式自定义复选框 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">可勾选模式自定义复选框：</div>
      <TreeSelect
        v-model:value="value4"
        :tree-data="treeData"
        tree-checkable
        placeholder="勾选节点"
        show-checked-strategy="SHOW_PARENT"
        :class-names="{
          treeCheckbox: 'custom-checkbox',
          treeSwitcher: 'custom-switcher',
        }"
        style="width: 280px"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用 styles 内联样式：</div>
      <TreeSelect
        v-model:value="value5"
        :tree-data="treeData"
        placeholder="内联样式示例"
        allow-clear
        :styles="{
          root: { borderRadius: '12px', borderColor: '#52c41a' },
          selector: { background: 'linear-gradient(to right, #f0f9ff, #e0f2fe)' },
          dropdown: { borderRadius: '12px', boxShadow: '0 6px 20px rgba(82, 196, 26, 0.2)' },
          treeNode: { padding: '6px 8px' },
        }"
        style="width: 280px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TreeSelect } from 'ant-design-hmfw'
import type { TreeSelectNode } from 'ant-design-hmfw'

const value1 = ref<string | number>()
const value2 = ref<string | number>()
const value3 = ref<(string | number)[]>([])
const value4 = ref<(string | number)[]>([])
const value5 = ref<string | number>()

const treeData: TreeSelectNode[] = [
  {
    value: 'engineering',
    label: '工程部',
    children: [
      { value: 'frontend', label: '前端团队' },
      { value: 'backend', label: '后端团队' },
      { value: 'mobile', label: '移动端团队' },
    ],
  },
  {
    value: 'product',
    label: '产品部',
    children: [
      { value: 'pm', label: '产品经理' },
      { value: 'design', label: '设计师' },
    ],
  },
  {
    value: 'marketing',
    label: '市场部',
    children: [
      { value: 'sales', label: '销售团队' },
      { value: 'promotion', label: '推广团队' },
    ],
  },
]
<\/script>

<style scoped>
/* 场景 1：渐变选择器 */
:deep(.custom-selector-root) {
  border-color: #722ed1;
  transition: all 0.3s;
}

:deep(.custom-selector-root:hover) {
  border-color: #9254de;
  box-shadow: 0 2px 8px rgba(114, 46, 209, 0.2);
}

:deep(.custom-selector) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

:deep(.custom-arrow) {
  color: white;
}

/* 场景 2：下拉面板与树节点（使用 :global，因为通过 Teleport 渲染） */
:global(.custom-dropdown) {
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  border: 2px solid #1677ff;
}

:global(.custom-tree-node) {
  transition: all 0.3s;
}

:global(.custom-tree-node:hover) {
  background: linear-gradient(90deg, #e6f4ff 0%, #bae0ff 100%);
  transform: translateX(4px);
}

:global(.custom-tree-node-content) {
  font-weight: 500;
  color: #1677ff;
}

/* 场景 3：多选标签 */
:deep(.custom-multi-selector) {
  background: #f0f5ff;
  border-color: #adc6ff;
  padding: 4px 8px;
}

:deep(.custom-multi-item) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 4px 12px;
  font-size: 13px;
  transition: all 0.3s;
}

:deep(.custom-multi-item:hover) {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
}

/* 场景 4：复选框与展开按钮（使用 :global） */
:global(.custom-checkbox) {
  border-color: #52c41a;
  border-width: 2px;
  border-radius: 4px;
}

:global(.hmfw-tree-select-tree-checkbox-checked .custom-checkbox) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border-color: #52c41a;
}

:global(.custom-switcher) {
  color: #1677ff;
  font-weight: bold;
}

:global(.custom-switcher:hover) {
  color: #096dd9;
}
</style>
`,Qe=R({__name:"TreeSelectMultiple",setup(e){const o=w([]),s=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return($,c)=>(F(),oe(y(le),{direction:"vertical",style:{width:"300px"}},{default:H(()=>[l(y(A),{value:o.value,"onUpdate:value":c[0]||(c[0]=g=>o.value=g),"tree-data":s,multiple:"",placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),h("span",null,"选中："+ce(o.value),1)]),_:1}))}}),Ge=`<template>
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
`,Ze=R({__name:"TreeSelectSearch",setup(e){const o=w(),s=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"},{value:"child2-2",label:"子节点 2-2"}]}];return($,c)=>(F(),oe(y(le),{direction:"vertical",style:{width:"300px"}},{default:H(()=>[l(y(A),{value:o.value,"onUpdate:value":c[0]||(c[0]=g=>o.value=g),"tree-data":s,"show-search":"",placeholder:"搜索节点",style:{width:"100%"}},null,8,["value"]),h("span",null,"选中："+ce(o.value),1)]),_:1}))}}),et=`<template>
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
`,tt={class:"markdown-body"},ot={__name:"tree-select",setup(e,{expose:o}){return o({frontmatter:{}}),($,c)=>{const g=Ie("DemoBlock");return F(),xe("div",tt,[c[0]||(c[0]=h("h1",{id:"treeselect-树形选择",tabindex:"-1"},"TreeSelect 树形选择",-1)),c[1]||(c[1]=h("p",null,"树形选择控件，类似 Select 的选择控件，可选择的数据结构是一个树形结构。",-1)),c[2]||(c[2]=h("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),c[3]||(c[3]=h("ul",null,[h("li",null,"从一个树形结构中进行选择时，例如选择部门、分类等")],-1)),c[4]||(c[4]=h("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),c[5]||(c[5]=h("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),l(g,{title:"基础用法",source:y(Ue)},{default:H(()=>[l(Fe)]),_:1},8,["source"]),c[6]||(c[6]=h("h3",{id:"多选",tabindex:"-1"},"多选",-1)),l(g,{title:"多选",source:y(Ge)},{default:H(()=>[l(Qe)]),_:1},8,["source"]),c[7]||(c[7]=h("h3",{id:"可勾选",tabindex:"-1"},"可勾选",-1)),l(g,{title:"可勾选",source:y(ze)},{default:H(()=>[l(We)]),_:1},8,["source"]),c[8]||(c[8]=h("h3",{id:"搜索",tabindex:"-1"},"搜索",-1)),l(g,{title:"搜索",source:y(et)},{default:H(()=>[l(Ze)]),_:1},8,["source"]),c[9]||(c[9]=h("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),c[10]||(c[10]=h("p",null,[I("通过 "),h("code",null,"classNames"),I(" / "),h("code",null,"styles"),I(" 对各子元素做细粒度样式控制。")],-1)),l(g,{title:"语义化 className 与 style",source:y(Je)},{default:H(()=>[l(Ye)]),_:1},8,["source"]),c[11]||(c[11]=Re(`<h2 id="api" tabindex="-1">API</h2><h3 id="treeselect-props" tabindex="-1">TreeSelect Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>选中的值</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>treeData</td><td>树形数据</td><td><code>TreeSelectNode[]</code></td><td><code>[]</code></td></tr><tr><td>multiple</td><td>是否多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeCheckable</td><td>是否显示 checkbox</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeCheckStrictly</td><td>checkable 状态下节点选择完全受控（父子节点选中状态不再关联）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showCheckedStrategy</td><td>checkable 时选中项回填方式</td><td><code>&#39;SHOW_ALL&#39; | &#39;SHOW_PARENT&#39; | &#39;SHOW_CHILD&#39;</code></td><td><code>&#39;SHOW_CHILD&#39;</code></td></tr><tr><td>showSearch</td><td>是否显示搜索框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoClearSearchValue</td><td>多选模式下选中后自动清空搜索框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>allowClear</td><td>是否允许清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>maxCount</td><td>可选中的最多数量，仅在多选时生效</td><td><code>number</code></td><td>-</td></tr><tr><td>notFoundContent</td><td>下拉列表为空时显示的内容</td><td><code>string</code></td><td><code>&#39;暂无数据&#39;</code></td></tr><tr><td>treeDefaultExpandAll</td><td>是否默认展开所有节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeDefaultExpandedKeys</td><td>默认展开的树节点 key</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>open</td><td>受控展开下拉菜单</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否展开下拉菜单</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>fieldNames</td><td>自定义字段名</td><td><code>{ label?, value?, children? }</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TreeSelectClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TreeSelectStyles</code></td><td>-</td></tr></tbody></table><h3 id="treeselect-events" tabindex="-1">TreeSelect Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中树节点时调用</td><td><code>(value, labels)</code></td></tr><tr><td>select</td><td>被选中时调用</td><td><code>(value, node)</code></td></tr><tr><td>search</td><td>搜索框值变化时调用</td><td><code>(value: string)</code></td></tr><tr><td>treeExpand</td><td>展开节点时调用</td><td><code>(expandedKeys)</code></td></tr><tr><td>openChange</td><td>展开下拉菜单的回调</td><td><code>(open: boolean)</code></td></tr><tr><td>dropdownVisibleChange</td><td>展开下拉菜单的回调（同 openChange）</td><td><code>(visible: boolean)</code></td></tr><tr><td>clear</td><td>清除时调用</td><td><code>()</code></td></tr></tbody></table><h3 id="treeselectnode" tabindex="-1">TreeSelectNode</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>节点值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>节点标签</td><td><code>string</code></td></tr><tr><td>children</td><td>子节点</td><td><code>TreeSelectNode[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>selectable</td><td>是否可选（单选/普通多选时生效）</td><td><code>boolean</code></td></tr><tr><td>disableCheckbox</td><td>treeCheckable 时禁用该节点的勾选框</td><td><code>boolean</code></td></tr><tr><td>isLeaf</td><td>是否叶子节点（仅用于标记）</td><td><code>boolean</code></td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 TreeSelect 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TreeSelectClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 div.hmfw-tree-select</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选择器容器 div.hmfw-tree-select-selector</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 已选项 span.hmfw-tree-select-selection-item（多选模式下为标签）</span>
  placeholder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 占位符 span.hmfw-tree-select-selection-placeholder</span>
  search<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 搜索输入框 input.hmfw-tree-select-selection-search</span>
  arrow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 后缀箭头容器 div.hmfw-tree-select-arrow</span>
  clear<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 清除按钮 span.hmfw-tree-select-clear</span>
  dropdown<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 下拉面板 div.hmfw-tree-select-dropdown</span>
  dropdownEmpty<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 空状态 div.hmfw-tree-select-dropdown-empty</span>
  treeNode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 树节点 div.hmfw-tree-select-tree-node</span>
  treeNodeContent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 树节点内容 span.hmfw-tree-select-tree-node-content</span>
  treeSwitcher<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 展开/收起按钮 span.hmfw-tree-select-tree-switcher</span>
  treeCheckbox<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 复选框 span.hmfw-tree-select-tree-checkbox</span>
  treeIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 节点图标 span.hmfw-tree-select-tree-icon</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TreeSelectStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 根节点 div.hmfw-tree-select</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 选择器容器 div.hmfw-tree-select-selector</span>
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 已选项 span.hmfw-tree-select-selection-item</span>
  placeholder<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 占位符 span.hmfw-tree-select-selection-placeholder</span>
  search<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 搜索输入框 input.hmfw-tree-select-selection-search</span>
  arrow<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 后缀箭头容器 div.hmfw-tree-select-arrow</span>
  clear<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 清除按钮 span.hmfw-tree-select-clear</span>
  dropdown<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 下拉面板 div.hmfw-tree-select-dropdown</span>
  dropdownEmpty<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 空状态 div.hmfw-tree-select-dropdown-empty</span>
  treeNode<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 树节点 div.hmfw-tree-select-tree-node</span>
  treeNodeContent<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 树节点内容 span.hmfw-tree-select-tree-node-content</span>
  treeSwitcher<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 展开/收起按钮 span.hmfw-tree-select-tree-switcher</span>
  treeCheckbox<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 复选框 span.hmfw-tree-select-tree-checkbox</span>
  treeIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 节点图标 span.hmfw-tree-select-tree-icon</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-selector<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.selector / styles.selector 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-selection-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>已选项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-selection-placeholder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请选择<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.placeholder / styles.placeholder 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-selection-search<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.search / styles.search 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-arrow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>▾<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.arrow / styles.arrow 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.clear / styles.clear 应用于此 --&gt;</span>

  <span class="token comment">&lt;!-- Teleport 到 body --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-dropdown<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.dropdown / styles.dropdown 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-dropdown-empty<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>暂无数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.dropdownEmpty / styles.dropdownEmpty 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-tree-node<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.treeNode / styles.treeNode 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-tree-switcher<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.treeSwitcher / styles.treeSwitcher 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-tree-checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>☑<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.treeCheckbox / styles.treeCheckbox 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-tree-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>📁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.treeIcon / styles.treeIcon 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-tree-select-tree-node-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>节点内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.treeNodeContent / styles.treeNodeContent 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;TreeSelect
    :tree-data=&quot;treeData&quot;
    :classNames=&quot;{
      root: &#39;my-tree-select-root&#39;,
      selector: &#39;my-selector&#39;,
      dropdown: &#39;my-dropdown&#39;,
      treeNode: &#39;my-tree-node&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style&gt;
/* dropdown 通过 Teleport 渲染到 body，必须使用 :global() */
:global(.my-dropdown) {
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

:global(.my-tree-node:hover) {
  background: linear-gradient(90deg, #e6f4ff 0%, #bae0ff 100%);
  transform: translateX(4px);
}
&lt;/style&gt;

&lt;style scoped&gt;
:deep(.my-tree-select-root) {
  border-color: #722ed1;
}

:deep(.my-selector) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;TreeSelect
    :tree-data=&quot;treeData&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;12px&#39;, borderColor: &#39;#52c41a&#39; },
      selector: { background: &#39;linear-gradient(to right, #f0f9ff, #e0f2fe)&#39; },
      dropdown: { borderRadius: &#39;12px&#39;, boxShadow: &#39;0 6px 20px rgba(82, 196, 26, 0.2)&#39; },
      treeNode: { padding: &#39;6px 8px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>dropdown</code>、<code>dropdownEmpty</code>、<code>treeNode</code>、<code>treeNodeContent</code>、<code>treeSwitcher</code>、<code>treeCheckbox</code>、<code>treeIcon</code> 通过 <code>Teleport to=&quot;body&quot;</code> 渲染，因此其样式必须使用 <code>:global()</code> 而非 <code>:deep()</code>（scoped 样式无法穿透 Teleport）</li><li><code>clear</code> 仅在 <code>allowClear</code> 启用且有选中值时显示</li><li><code>placeholder</code> 仅在无选中值时显示</li><li><code>treeCheckbox</code> 仅在 <code>treeCheckable</code> 模式下显示</li><li><code>item</code> 在多选模式下对应每个标签</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr></tbody></table>`,23))])}}};export{ot as default};
