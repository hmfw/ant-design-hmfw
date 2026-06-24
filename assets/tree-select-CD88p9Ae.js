import{S as ae}from"./Space-BIBt6cjD.js";import{o as V,N as _e,E as x,Q as re,n as l,F as de,m as G,f as N,A as K,i as se,R as M,K as y,h,J as le,k as xe,_ as Be,H as Oe,l as Ve}from"./index-B9Ix0zQ8.js";import{c as w}from"./cls-S9IiI6wd.js";import{D as Ke}from"./DownOutlined-CeXVKI2h.js";import{T as Le}from"./Trigger-C7LIrQfF.js";import{C as Ie,a as Fe}from"./CaretRightFilled-C2TMLU21.js";const P=V({name:"TreeSelect",props:{value:[String,Number,Array],defaultValue:[String,Number,Array],treeData:{type:Array,default:()=>[]},multiple:Boolean,treeCheckable:Boolean,treeCheckStrictly:Boolean,showCheckedStrategy:{type:String,default:"SHOW_CHILD"},showSearch:Boolean,autoClearSearchValue:{type:Boolean,default:!0},allowClear:Boolean,placeholder:{type:String,default:"请选择"},disabled:Boolean,size:{type:String,default:"middle"},status:{type:String,default:""},maxCount:Number,notFoundContent:{type:String,default:"暂无数据"},treeDefaultExpandAll:Boolean,treeDefaultExpandedKeys:{type:Array,default:()=>[]},open:{type:Boolean,default:void 0},defaultOpen:Boolean,fieldNames:Object,virtual:{type:Boolean,default:!0},listHeight:{type:Number,default:256},itemHeight:{type:Number,default:28},treeIcon:[Boolean,Object,String,Function],maxTagCount:[Number,String],maxTagPlaceholder:[String,Function],maxTagTextLength:Number,classNames:Object,styles:Object},emits:["update:value","update:open","change","search","select","treeExpand","dropdownVisibleChange","openChange","clear"],setup(e,{emit:c}){const a=_e("tree-select"),E=x(null),r=x(null),f=x(!!e.defaultOpen),b=x(""),Z=x(0),g=N(()=>{var t;return((t=e.fieldNames)==null?void 0:t.label)??"label"}),q=N(()=>{var t;return((t=e.fieldNames)==null?void 0:t.value)??"value"}),Se=N(()=>{var t;return((t=e.fieldNames)==null?void 0:t.children)??"children"}),L=t=>t[g.value],H=t=>t[q.value],O=t=>t[Se.value],ee=N(()=>e.multiple||e.treeCheckable),te=N(()=>e.open!==void 0?e.open:f.value),A=x((t=>t??(ee.value?[]:void 0))(e.defaultValue??e.value));re(()=>e.value,t=>{t!==void 0&&(A.value=t)});const Ce=N(()=>e.value!==void 0?e.value:A.value),C=N(()=>{const t=Ce.value;return t==null?[]:Array.isArray(t)?t:[t]}),D=N(()=>{const t=new Map,n=new Map,s=new Map,p=new Map,o=(u,d)=>{for(const k of u){const m=H(k);t.set(m,k),n.set(m,d),p.set(m,L(k));const i=O(k);i!=null&&i.length&&(s.set(m,i.map(H)),o(i,m))}};return o(e.treeData,void 0),{nodeMap:t,parentMap:n,childKeysMap:s,labelMap:p,rootKeys:e.treeData.map(H)}}),pe=t=>{const n=D.value.childKeysMap.get(t);return n!=null&&n.length?n.flatMap(s=>pe(s)):[t]},ue=t=>{const{childKeysMap:n,rootKeys:s}=D.value,p=new Set(t),o=new Set,u=d=>{const k=n.get(d);if(!(k!=null&&k.length))return p.has(d)?"checked":"none";let m=!0,i=!1;for(const v of k){const S=u(v);S==="checked"?i=!0:(S==="half"&&(i=!0),m=!1)}return m?(p.add(d),"checked"):(p.delete(d),i?(o.add(d),"half"):"none")};return s.forEach(u),{checked:p,half:o}},ie=t=>t.flatMap(n=>[H(n),...ie(O(n)??[])]),me=N(()=>e.treeDefaultExpandAll?ie(e.treeData):e.treeDefaultExpandedKeys),$=x([...me.value]);re(me,t=>{$.value=[...t]});function he(t,n=0,s=!1){return t.flatMap(p=>{const o=O(p),u=H(p),d=[{node:p,level:n,hasChildren:!!(o!=null&&o.length),valueKey:u,label:L(p),forceExpand:s}];return o!=null&&o.length&&(s||$.value.includes(u))&&d.push(...he(o,n+1,s)),d})}const _=N(()=>{if(!b.value)return he(e.treeData);const t=b.value.toLowerCase(),n=new Set,s=new Set,p=u=>{for(const d of u){const k=H(d);if(L(d).toLowerCase().includes(t)){n.add(k);let v=D.value.parentMap.get(k);for(;v!==void 0;)s.add(v),v=D.value.parentMap.get(v)}const i=O(d);i&&p(i)}};p(e.treeData);const o=(u,d=0)=>u.flatMap(k=>{const m=H(k),i=n.has(m),v=s.has(m);if(!i&&!v)return[];const S=O(k),B=[{node:k,level:d,hasChildren:!!(S!=null&&S.length),valueKey:m,label:L(k),forceExpand:v}];return S&&v&&B.push(...o(S,d+1)),B});return o(e.treeData)}),ke=N(()=>C.value.map(t=>D.value.labelMap.get(t)??String(t))),ne=N(()=>e.virtual&&e.itemHeight>0&&_.value.length*e.itemHeight>e.listHeight),oe=N(()=>{if(!ne.value)return{start:0,end:_.value.length,offset:0};const t=_.value.length,n=5,s=Math.max(0,Math.floor(Z.value/e.itemHeight)-n),p=Math.ceil(e.listHeight/e.itemHeight)+n*2,o=Math.min(t,s+p);return{start:s,end:o,offset:s*e.itemHeight}}),Ne=t=>{Z.value=t.target.scrollTop};re([b,()=>e.treeData,$],()=>{Z.value=0,r.value&&(r.value.scrollTop=0)});const Te=t=>{const n=e.maxTagTextLength;return n&&n>0&&t.length>n?`${t.slice(0,n)}...`:t},qe=t=>{const n=e.maxTagPlaceholder;return typeof n=="function"?n(t):typeof n=="string"?n:`+ ${t.length} ...`},ce=N(()=>{const t=C.value.length,n=e.maxTagCount;if(n===void 0||n==="responsive")return t;const s=Number(n);return!Number.isFinite(s)||s<0?t:Math.min(s,t)}),De=t=>{if(t.icon!==void 0&&t.icon!==null)return typeof t.icon=="function"?t.icon(t):t.icon;const n=e.treeIcon;if(n==null||n===!1)return null;if(n===!0){const s=O(t);return s!=null&&s.length?"📁":"📄"}return typeof n=="function"?n(t):n};function $e(){e.disabled||(f.value=!0,c("update:open",!0),c("dropdownVisibleChange",!0),c("openChange",!0))}function ve(){f.value=!1,b.value="",c("update:open",!1),c("dropdownVisibleChange",!1),c("openChange",!1)}function Ee(t){$.value.includes(t)?$.value=$.value.filter(n=>n!==t):$.value=[...$.value,t],c("treeExpand",$.value)}function ge(t){if(!(t.selectable!==!1)||t.disabled||e.disabled)return;const s=H(t),p=L(t);if(e.treeCheckable){if(t.disableCheckbox)return;let o;if(e.treeCheckStrictly){const u=[...C.value],d=u.indexOf(s);d>=0?u.splice(d,1):u.push(s),o=u}else{const u=pe(s),d=new Set(C.value);u.every(i=>d.has(i))?u.forEach(i=>d.delete(i)):u.forEach(i=>d.add(i));const{checked:m}=ue(d);e.showCheckedStrategy==="SHOW_ALL"?o=Array.from(m):e.showCheckedStrategy==="SHOW_PARENT"?o=Array.from(m).filter(i=>{const v=D.value.childKeysMap.get(i);return v!=null&&v.length?v.every(S=>m.has(S)):!0}):o=Array.from(m).filter(i=>{var v;return!((v=D.value.childKeysMap.get(i))!=null&&v.length)})}if(e.maxCount!==void 0&&o.length>e.maxCount)return;A.value=o,c("update:value",o),c("change",o,o.map(u=>D.value.labelMap.get(u)??String(u))),c("select",s,t),e.autoClearSearchValue&&(b.value="")}else if(ee.value){const o=[...C.value],u=o.indexOf(s);if(u>=0)o.splice(u,1);else{if(e.maxCount!==void 0&&o.length>=e.maxCount)return;o.push(s)}A.value=o,c("update:value",o),c("change",o,o.map(d=>D.value.labelMap.get(d)??String(d))),c("select",s,t),e.autoClearSearchValue&&(b.value="")}else A.value=s,c("update:value",s),c("change",s,p),c("select",s,t),ve()}function Me(t,n){n.stopPropagation();const s=C.value.filter(p=>p!==t);A.value=s,c("update:value",s),c("change",s,s.map(p=>D.value.labelMap.get(p)??String(p)))}function Pe(t){t.stopPropagation();const n=ee.value?[]:void 0;A.value=n,c("update:value",n),c("change",n,[]),c("clear")}const fe=(t,n,s)=>{var F,R,W,U,z,j,X,Y,J,Q;const{node:p,level:o,hasChildren:u,valueKey:d,label:k,forceExpand:m}=t,i=C.value.includes(d),v=m||$.value.includes(d),S=n.has(d),B=s.has(d),I=De(p);return l("div",{key:d,class:w(`${a}-tree-node`,(F=e.classNames)==null?void 0:F.treeNode,{[`${a}-tree-node-selected`]:i,[`${a}-tree-node-disabled`]:p.disabled}),style:{paddingLeft:`${o*20+8}px`,height:ne.value?`${e.itemHeight}px`:void 0,minHeight:ne.value?`${e.itemHeight}px`:void 0,...(R=e.styles)==null?void 0:R.treeNode}},[l("span",{class:w(`${a}-tree-switcher`,(W=e.classNames)==null?void 0:W.treeSwitcher,{[`${a}-tree-switcher-noop`]:!u}),style:(U=e.styles)==null?void 0:U.treeSwitcher,onClick:T=>{T.stopPropagation(),u&&!m&&Ee(d)}},[u&&!m?v?l(Ie,null,null):l(Fe,null,null):null]),e.treeCheckable&&l("span",{class:w(`${a}-tree-checkbox`,(z=e.classNames)==null?void 0:z.treeCheckbox,{[`${a}-tree-checkbox-checked`]:S,[`${a}-tree-checkbox-indeterminate`]:B,[`${a}-tree-checkbox-disabled`]:p.disabled||p.disableCheckbox}),style:(j=e.styles)==null?void 0:j.treeCheckbox,onClick:T=>{T.stopPropagation(),ge(p)}},[l("span",{class:`${a}-tree-checkbox-inner`},null)]),I!==null&&l("span",{class:w(`${a}-tree-icon`,(X=e.classNames)==null?void 0:X.treeIcon),style:(Y=e.styles)==null?void 0:Y.treeIcon},[I]),l("span",{class:w(`${a}-tree-node-content`,(J=e.classNames)==null?void 0:J.treeNodeContent),style:(Q=e.styles)==null?void 0:Q.treeNodeContent,onClick:()=>ge(p)},[k])])},He=(t,n)=>{var s,p;return _.value.length===0?l("div",{class:w(`${a}-dropdown-empty`,(s=e.classNames)==null?void 0:s.dropdownEmpty),style:(p=e.styles)==null?void 0:p.dropdownEmpty},[e.notFoundContent]):l("div",{ref:r,class:`${a}-dropdown-list`,style:{maxHeight:`${e.listHeight}px`,overflowY:"auto",position:"relative"},onScroll:Ne},[ne.value?l("div",{class:`${a}-dropdown-list-holder`,style:{height:`${_.value.length*e.itemHeight}px`,position:"relative"}},[l("div",{class:`${a}-dropdown-list-inner`,style:{transform:`translateY(${oe.value.offset}px)`,position:"absolute",top:0,left:0,right:0}},[_.value.slice(oe.value.start,oe.value.end).map(o=>fe(o,t,n))])]):_.value.map(o=>fe(o,t,n))])};return()=>{var o,u,d,k;const t=C.value.length>0,n=e.allowClear&&t&&!e.disabled;let s=new Set,p=new Set;if(e.treeCheckable&&!e.treeCheckStrictly){const m=new Set(C.value),i=ue(m);s=i.checked,p=i.half}else e.treeCheckable&&(s=new Set(C.value));return l(Le,{open:te.value,trigger:"click",placement:"bottomLeft",disabled:e.disabled,destroyOnHidden:!0,matchWidth:!0,triggerClass:w(a,`${a}-${e.size}`,(o=e.classNames)==null?void 0:o.root,{[`${a}-open`]:te.value,[`${a}-disabled`]:e.disabled,[`${a}-status-error`]:e.status==="error",[`${a}-status-warning`]:e.status==="warning"}),triggerStyle:(u=e.styles)==null?void 0:u.root,popupClass:w(`${a}-dropdown`,(d=e.classNames)==null?void 0:d.dropdown),popupStyle:(k=e.styles)==null?void 0:k.dropdown,onOpenChange:m=>{m?$e():ve()}},{default:()=>{var m,i,v,S,B,I,F,R,W,U,z,j,X,Y,J,Q;return l(de,null,[l("div",{ref:E,class:w(`${a}-selector`,(m=e.classNames)==null?void 0:m.selector),style:(i=e.styles)==null?void 0:i.selector},[ee.value?l(de,null,[ke.value.slice(0,ce.value).map((T,be)=>{var we,ye;return l("span",{key:C.value[be],class:w(`${a}-selection-item`,(we=e.classNames)==null?void 0:we.item),style:(ye=e.styles)==null?void 0:ye.item},[l("span",{class:`${a}-selection-item-content`},[Te(T)]),l("span",{class:`${a}-selection-item-remove`,onClick:Ae=>Me(C.value[be],Ae)},[G("×")])])}),C.value.length>ce.value&&l("span",{class:w(`${a}-selection-item`,`${a}-selection-overflow`)},[l("span",{class:`${a}-selection-item-content`},[qe(C.value.slice(ce.value))])]),e.showSearch&&l("input",{class:w(`${a}-selection-search`,(v=e.classNames)==null?void 0:v.search),style:(S=e.styles)==null?void 0:S.search,value:b.value,onInput:T=>{b.value=T.target.value,c("search",b.value)},onClick:T=>T.stopPropagation()},null),!t&&!b.value&&l("span",{class:w(`${a}-selection-placeholder`,(B=e.classNames)==null?void 0:B.placeholder),style:(I=e.styles)==null?void 0:I.placeholder},[e.placeholder])]):l(de,null,[t?l("span",{class:w(`${a}-selection-item`,(F=e.classNames)==null?void 0:F.item),style:(R=e.styles)==null?void 0:R.item},[ke.value[0]]):l("span",{class:w(`${a}-selection-placeholder`,(W=e.classNames)==null?void 0:W.placeholder),style:(U=e.styles)==null?void 0:U.placeholder},[e.placeholder]),e.showSearch&&te.value&&l("input",{class:w(`${a}-selection-search`,(z=e.classNames)==null?void 0:z.search),style:(j=e.styles)==null?void 0:j.search,value:b.value,onInput:T=>{b.value=T.target.value,c("search",b.value)},onClick:T=>T.stopPropagation()},null)])]),l("div",{class:w(`${a}-arrow`,(X=e.classNames)==null?void 0:X.arrow),style:(Y=e.styles)==null?void 0:Y.arrow},[l(Ke,{class:w(`${a}-arrow-icon`,{[`${a}-arrow-icon-open`]:te.value})},null)]),n&&l("span",{class:w(`${a}-clear`,(J=e.classNames)==null?void 0:J.clear),style:(Q=e.styles)==null?void 0:Q.clear,onClick:Pe},[G("×")])])},popup:({placement:m})=>He(s,p)})}}}),Re=V({__name:"TreeSelectBasic",setup(e){const c=x(),a=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return(E,r)=>(K(),se(y(ae),{direction:"vertical",style:{width:"300px"}},{default:M(()=>[l(y(P),{value:c.value,"onUpdate:value":r[0]||(r[0]=f=>c.value=f),"tree-data":a,placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),h("span",null,"选中："+le(c.value),1)]),_:1}))}}),We=`<template>
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
`,Ue=V({__name:"TreeSelectCheckable",setup(e){const c=x([]),a=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return(E,r)=>(K(),se(y(ae),{direction:"vertical",style:{width:"300px"}},{default:M(()=>[l(y(P),{value:c.value,"onUpdate:value":r[0]||(r[0]=f=>c.value=f),"tree-data":a,"tree-checkable":"",placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),h("span",null,"选中："+le(c.value),1)]),_:1}))}}),ze=`<template>
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
`,je={style:{display:"flex","flex-direction":"column",gap:"24px"}},Xe=V({__name:"TreeSelectClassNames",setup(e){const c=x(),a=x(),E=x([]),r=x([]),f=x(),b=[{value:"engineering",label:"工程部",children:[{value:"frontend",label:"前端团队"},{value:"backend",label:"后端团队"},{value:"mobile",label:"移动端团队"}]},{value:"product",label:"产品部",children:[{value:"pm",label:"产品经理"},{value:"design",label:"设计师"}]},{value:"marketing",label:"市场部",children:[{value:"sales",label:"销售团队"},{value:"promotion",label:"推广团队"}]}];return(Z,g)=>(K(),xe("div",je,[h("div",null,[g[5]||(g[5]=h("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义选择器容器（渐变背景）：",-1)),l(y(P),{value:c.value,"onUpdate:value":g[0]||(g[0]=q=>c.value=q),"tree-data":b,placeholder:"请选择部门","allow-clear":"","class-names":{root:"custom-selector-root",selector:"custom-selector",arrow:"custom-arrow"},style:{width:"280px"}},null,8,["value"])]),h("div",null,[g[6]||(g[6]=h("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义下拉面板与树节点样式：",-1)),l(y(P),{value:a.value,"onUpdate:value":g[1]||(g[1]=q=>a.value=q),"tree-data":b,placeholder:"选择分类","tree-default-expand-all":"","class-names":{dropdown:"custom-dropdown",treeNode:"custom-tree-node",treeNodeContent:"custom-tree-node-content"},style:{width:"280px"}},null,8,["value"])]),h("div",null,[g[7]||(g[7]=h("div",{style:{"margin-bottom":"8px",color:"#666"}},"多选模式自定义标签：",-1)),l(y(P),{value:E.value,"onUpdate:value":g[2]||(g[2]=q=>E.value=q),"tree-data":b,multiple:"",placeholder:"选择多个部门","allow-clear":"","class-names":{selector:"custom-multi-selector",item:"custom-multi-item"},style:{width:"320px"}},null,8,["value"])]),h("div",null,[g[8]||(g[8]=h("div",{style:{"margin-bottom":"8px",color:"#666"}},"可勾选模式自定义复选框：",-1)),l(y(P),{value:r.value,"onUpdate:value":g[3]||(g[3]=q=>r.value=q),"tree-data":b,"tree-checkable":"",placeholder:"勾选节点","show-checked-strategy":"SHOW_PARENT","class-names":{treeCheckbox:"custom-checkbox",treeSwitcher:"custom-switcher"},style:{width:"280px"}},null,8,["value"])]),h("div",null,[g[9]||(g[9]=h("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用 styles 内联样式：",-1)),l(y(P),{value:f.value,"onUpdate:value":g[4]||(g[4]=q=>f.value=q),"tree-data":b,placeholder:"内联样式示例","allow-clear":"",styles:{root:{borderRadius:"12px",borderColor:"#52c41a"},selector:{background:"linear-gradient(to right, #f0f9ff, #e0f2fe)"},dropdown:{borderRadius:"12px",boxShadow:"0 6px 20px rgba(82, 196, 26, 0.2)"},treeNode:{padding:"6px 8px"}},style:{width:"280px"}},null,8,["value"])])]))}}),Ye=Be(Xe,[["__scopeId","data-v-1c57bf20"]]),Je=`<template>
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
`,Qe=V({__name:"TreeSelectMultiple",setup(e){const c=x([]),a=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"}]}];return(E,r)=>(K(),se(y(ae),{direction:"vertical",style:{width:"300px"}},{default:M(()=>[l(y(P),{value:c.value,"onUpdate:value":r[0]||(r[0]=f=>c.value=f),"tree-data":a,multiple:"",placeholder:"请选择",style:{width:"100%"}},null,8,["value"]),h("span",null,"选中："+le(c.value),1)]),_:1}))}}),Ge=`<template>
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
`,Ze=V({__name:"TreeSelectSearch",setup(e){const c=x(),a=[{value:"parent1",label:"父节点 1",children:[{value:"child1-1",label:"子节点 1-1"},{value:"child1-2",label:"子节点 1-2"}]},{value:"parent2",label:"父节点 2",children:[{value:"child2-1",label:"子节点 2-1"},{value:"child2-2",label:"子节点 2-2"}]}];return(E,r)=>(K(),se(y(ae),{direction:"vertical",style:{width:"300px"}},{default:M(()=>[l(y(P),{value:c.value,"onUpdate:value":r[0]||(r[0]=f=>c.value=f),"tree-data":a,"show-search":"",placeholder:"搜索节点",style:{width:"100%"}},null,8,["value"]),h("span",null,"选中："+le(c.value),1)]),_:1}))}}),et=`<template>
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
`,tt={class:"markdown-body"},dt={__name:"tree-select",setup(e,{expose:c}){return c({frontmatter:{}}),(E,r)=>{const f=Oe("DemoBlock");return K(),xe("div",tt,[r[0]||(r[0]=h("h1",{id:"treeselect-树形选择",tabindex:"-1"},"TreeSelect 树形选择",-1)),r[1]||(r[1]=h("p",null,"树形选择控件，类似 Select 的选择控件，可选择的数据结构是一个树形结构。",-1)),r[2]||(r[2]=h("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),r[3]||(r[3]=h("ul",null,[h("li",null,"从一个树形结构中进行选择时，例如选择部门、分类等")],-1)),r[4]||(r[4]=h("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),r[5]||(r[5]=h("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),l(f,{title:"基础用法",source:y(We)},{default:M(()=>[l(Re)]),_:1},8,["source"]),r[6]||(r[6]=h("h3",{id:"多选",tabindex:"-1"},"多选",-1)),l(f,{title:"多选",source:y(Ge)},{default:M(()=>[l(Qe)]),_:1},8,["source"]),r[7]||(r[7]=h("h3",{id:"可勾选",tabindex:"-1"},"可勾选",-1)),l(f,{title:"可勾选",source:y(ze)},{default:M(()=>[l(Ue)]),_:1},8,["source"]),r[8]||(r[8]=h("h3",{id:"搜索",tabindex:"-1"},"搜索",-1)),l(f,{title:"搜索",source:y(et)},{default:M(()=>[l(Ze)]),_:1},8,["source"]),r[9]||(r[9]=h("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),r[10]||(r[10]=h("p",null,[G("通过 "),h("code",null,"classNames"),G(" / "),h("code",null,"styles"),G(" 对各子元素做细粒度样式控制。")],-1)),l(f,{title:"语义化 className 与 style",source:y(Je)},{default:M(()=>[l(Ye)]),_:1},8,["source"]),r[11]||(r[11]=Ve(`<h2 id="api" tabindex="-1">API</h2><h3 id="treeselect-props" tabindex="-1">TreeSelect Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>选中的值</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>treeData</td><td>树形数据</td><td><code>TreeSelectNode[]</code></td><td><code>[]</code></td></tr><tr><td>multiple</td><td>是否多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeCheckable</td><td>是否显示 checkbox</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeCheckStrictly</td><td>checkable 状态下节点选择完全受控（父子节点选中状态不再关联）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showCheckedStrategy</td><td>checkable 时选中项回填方式</td><td><code>&#39;SHOW_ALL&#39; | &#39;SHOW_PARENT&#39; | &#39;SHOW_CHILD&#39;</code></td><td><code>&#39;SHOW_CHILD&#39;</code></td></tr><tr><td>showSearch</td><td>是否显示搜索框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoClearSearchValue</td><td>多选模式下选中后自动清空搜索框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>allowClear</td><td>是否允许清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>maxCount</td><td>可选中的最多数量，仅在多选时生效</td><td><code>number</code></td><td>-</td></tr><tr><td>notFoundContent</td><td>下拉列表为空时显示的内容</td><td><code>string</code></td><td><code>&#39;暂无数据&#39;</code></td></tr><tr><td>treeDefaultExpandAll</td><td>是否默认展开所有节点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>treeDefaultExpandedKeys</td><td>默认展开的树节点 key</td><td><code>(string | number)[]</code></td><td><code>[]</code></td></tr><tr><td>open</td><td>受控展开下拉菜单</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否展开下拉菜单</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>fieldNames</td><td>自定义字段名</td><td><code>{ label?, value?, children? }</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TreeSelectClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TreeSelectStyles</code></td><td>-</td></tr></tbody></table><h3 id="treeselect-events" tabindex="-1">TreeSelect Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>选中树节点时调用</td><td><code>(value, labels)</code></td></tr><tr><td>select</td><td>被选中时调用</td><td><code>(value, node)</code></td></tr><tr><td>search</td><td>搜索框值变化时调用</td><td><code>(value: string)</code></td></tr><tr><td>treeExpand</td><td>展开节点时调用</td><td><code>(expandedKeys)</code></td></tr><tr><td>openChange</td><td>展开下拉菜单的回调</td><td><code>(open: boolean)</code></td></tr><tr><td>dropdownVisibleChange</td><td>展开下拉菜单的回调（同 openChange）</td><td><code>(visible: boolean)</code></td></tr><tr><td>clear</td><td>清除时调用</td><td><code>()</code></td></tr></tbody></table><h3 id="treeselectnode" tabindex="-1">TreeSelectNode</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>节点值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>节点标签</td><td><code>string</code></td></tr><tr><td>children</td><td>子节点</td><td><code>TreeSelectNode[]</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>selectable</td><td>是否可选（单选/普通多选时生效）</td><td><code>boolean</code></td></tr><tr><td>disableCheckbox</td><td>treeCheckable 时禁用该节点的勾选框</td><td><code>boolean</code></td></tr><tr><td>isLeaf</td><td>是否叶子节点（仅用于标记）</td><td><code>boolean</code></td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 TreeSelect 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>dropdown</code>、<code>dropdownEmpty</code>、<code>treeNode</code>、<code>treeNodeContent</code>、<code>treeSwitcher</code>、<code>treeCheckbox</code>、<code>treeIcon</code> 通过 <code>Teleport to=&quot;body&quot;</code> 渲染，因此其样式必须使用 <code>:global()</code> 而非 <code>:deep()</code>（scoped 样式无法穿透 Teleport）</li><li><code>clear</code> 仅在 <code>allowClear</code> 启用且有选中值时显示</li><li><code>placeholder</code> 仅在无选中值时显示</li><li><code>treeCheckbox</code> 仅在 <code>treeCheckable</code> 模式下显示</li><li><code>item</code> 在多选模式下对应每个标签</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr></tbody></table>`,23))])}}};export{dt as default};
