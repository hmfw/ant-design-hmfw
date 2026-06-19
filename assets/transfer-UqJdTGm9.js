import{B as mt}from"./Button-Dr1TfEzc.js";import{D as yt}from"./index-Bia_oMEf.js";import{C as gt}from"./Checkbox-DD2-heYo.js";import{I as rt}from"./Icon-DATzad6v.js";import{D as vt}from"./DownOutlined-BZcGPxnB.js";import{I as bt}from"./Input-C1FZ6rDu.js";import{S as ht}from"./SearchOutlined-CoVwb0aJ.js";import{c as $}from"./cls-S9IiI6wd.js";import{D as xt}from"./DeleteOutlined-BVOeYV2W.js";import{P as St}from"./Pagination-B_CM4Pys.js";import{E as wt}from"./Empty-CWSmkFk3.js";import{o as _,E as x,Q as tt,n as s,s as ft,F as ct,f as k,N as Tt,M as Kt,A as E,i as X,K as u,k as dt,h as p,_ as Ct,J as qt,H as At,R as U,m as H,l as It}from"./index-Dxep-jrR.js";import{R as $t}from"./RightOutlined-sqtcDwlp.js";import{L as Dt}from"./LeftOutlined-B1PhMOsW.js";import"./LoadingOutlined-CKq07YS5.js";import"./Menu-C12rIRmD.js";import"./CloseOutlined-Cg7mwYr0.js";import"./EyeOutlined-Mig8g8vQ.js";import"./Select-BMPcF3pW.js";import"./VirtualList-Cq9yc8Mi.js";function Nt(e){return!!e&&typeof e=="object"&&!("__v_isVNode"in e)&&"value"in e}function Rt(e,l){for(const c of[e,l.title,l.key]){if(typeof c=="string")return c;if(typeof c=="number")return String(c)}return""}function W(e){return e.filter(l=>!l.disabled).map(l=>l.key)}const kt=_({name:"TransferList",props:{prefixCls:{type:String,required:!0},direction:{type:String,required:!0},titleText:{type:[String,Object],default:""},dataSource:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},disabled:Boolean,showSearch:{type:[Boolean,Object],default:!1},showSelectAll:{type:Boolean,default:!0},showRemove:Boolean,draggable:Boolean,pagination:{type:[Boolean,Object],default:void 0},selectAllLabel:{type:[String,Object,Function],default:void 0},render:Function,filterOption:Function,footer:Function,listStyle:{type:Object,default:()=>({})},classNames:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},searchPlaceholder:{type:String,default:"请输入搜索内容"},notFoundContent:{type:[String,Object,Array],default:void 0},itemUnit:{type:String,default:"项"},itemsUnit:{type:String,default:"项"},selectAll:{type:String,default:"全选所有"},deselectAll:{type:String,default:"取消全选"},selectCurrent:{type:String,default:"全选当页"},selectInvert:{type:String,default:"反选当页"},removeAll:{type:String,default:"删除全部"},removeCurrent:{type:String,default:"删除当页"}},emits:["itemSelect","itemSelectAll","itemRemove","reorder","filter","scroll"],setup(e,{emit:l}){const c=k(()=>`${e.prefixCls}-list`),y=k(()=>`${e.prefixCls}-section`),n=k(()=>e.showSearch&&typeof e.showSearch=="object"?{defaultValue:"",placeholder:"",...e.showSearch}:{defaultValue:"",placeholder:""}),r=x(n.value.defaultValue||"");tt(()=>n.value.defaultValue,t=>{r.value=t||""});const T=x(1),b=k(()=>e.pagination?{simple:!0,showSizeChanger:!1,showLessItems:!1,pageSize:10,...typeof e.pagination=="object"?e.pagination:{}}:null);function F(t){const a=e.render?e.render(t):null,o=Nt(a),d=o?a.label:a,v=o?a.value:Rt(a,t);return{item:t,renderedEl:d??t.title??String(t.key),renderedText:v}}function i(t,a){return e.filterOption?e.filterOption(r.value,a,e.direction):t.toLowerCase().includes(r.value.toLowerCase())}const h=k(()=>{const t=[];return e.dataSource.forEach(a=>{const o=F(a);r.value&&!i(o.renderedText,a)||t.push(o)}),t}),R=k(()=>h.value.map(t=>t.item));tt([h,b],()=>{const t=b.value;if(t){const a=Math.max(1,Math.ceil(h.value.length/t.pageSize));T.value=Math.min(T.value,a)}});const O=k(()=>{const t=b.value;return t?h.value.slice((T.value-1)*t.pageSize,T.value*t.pageSize):h.value}),C=k(()=>R.value.filter(t=>e.checkedKeys.includes(t.key)&&!t.disabled)),K=k(()=>{if(C.value.length===0)return"none";const t=new Set(e.checkedKeys);return R.value.every(a=>t.has(a.key)||!!a.disabled)?"all":"part"});function V(t){r.value=t,l("filter",e.direction,t)}function Y(){const t=W(R.value);l("itemSelectAll",t,K.value!=="all")}function J(t,a){const o=e.selectAllLabel;if(o)return typeof o=="function"?o({selectedCount:t,totalCount:a}):o;const d=a>1?e.itemsUnit:e.itemUnit;return`${t>0?`${t}/`:""}${a} ${d}`}const et=k(()=>{const t=b.value;return e.showRemove?[t&&{key:"removeCurrent",label:e.removeCurrent,onClick:()=>l("itemRemove",W(O.value.map(a=>a.item)))},{key:"removeAll",label:e.removeAll,onClick:()=>l("itemRemove",W(R.value))}].filter(Boolean):[{key:"selectAll",label:K.value==="all"?e.deselectAll:e.selectAll,onClick:()=>{const a=W(R.value);l("itemSelectAll",a,a.length!==e.checkedKeys.length)}},t&&{key:"selectCurrent",label:e.selectCurrent,onClick:()=>l("itemSelectAll",W(O.value.map(a=>a.item)),!0)},{key:"selectInvert",label:e.selectInvert,onClick:()=>{const a=W(O.value.map(d=>d.item)),o=new Set(e.checkedKeys);a.forEach(d=>o.has(d)?o.delete(d):o.add(d)),l("itemSelectAll",[...o],"replace")}}].filter(Boolean)});function A(t){return e.classNames[t]}function S(t){return e.styles[t]}const P=x(null),L=x(null),z=x(!1);function nt(t){return!!e.draggable&&!e.disabled&&!t.disabled}function at(t,a){if(P.value=a,t.dataTransfer){t.dataTransfer.effectAllowed="move";try{t.dataTransfer.setData("text/plain",String(a))}catch{}}}function st(t,a){if(P.value===null||P.value===a)return;t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move");const d=t.currentTarget.getBoundingClientRect(),m=t.clientY-d.top>d.height/2;(L.value!==a||z.value!==m)&&(L.value=a,z.value=m)}function ot(t,a){L.value===a&&(L.value=null)}function Q(t,a){t.preventDefault();const o=P.value,d=z.value;P.value=null,L.value=null,!(o===null||o===a)&&l("reorder",o,a,d)}function G(){P.value=null,L.value=null}return()=>{const t=c.value,a=e.dataSource.some(w=>!w.disabled),o=s(gt,{class:`${t}-checkbox`,disabled:!a||e.disabled,checked:K.value==="all",indeterminate:K.value==="part",onChange:Y},null),d=s(yt,{class:`${t}-header-dropdown`,disabled:e.disabled,menu:{items:et.value}},{default:()=>[s("span",{class:`${t}-header-dropdown-trigger`},[s(rt,{component:vt},null)])]}),v=e.showSearch?s("div",{class:`${t}-body-search-wrapper`},[s(bt,{class:`${t}-search`,value:r.value,placeholder:n.value.placeholder||e.searchPlaceholder,disabled:e.disabled,allowClear:!0,prefix:s(rt,{component:ht},null),onInput:w=>V(w.target.value),onClear:()=>V("")},null)]):null,m=O.value.map(({item:w,renderedEl:j})=>{const q=w.key,I=e.disabled||w.disabled,M=e.checkedKeys.includes(q),Z=P.value===q,lt=L.value===q,pt=nt(w)?{draggable:!0,onDragstart:B=>at(B,q),onDragover:B=>st(B,q),onDragleave:B=>ot(B,q),onDrop:B=>Q(B,q),onDragend:()=>G()}:{},it={[`${t}-content-item-draggable`]:!!e.draggable&&!I,[`${t}-content-item-dragging`]:Z,[`${t}-content-item-drag-over`]:lt&&!Z,[`${t}-content-item-drag-over-after`]:lt&&!Z&&z.value,[`${t}-content-item-drag-over-before`]:lt&&!Z&&!z.value},ut=s("span",{class:$(`${t}-content-item-text`,A("itemContent")),style:S("itemContent")},[j]);return e.showRemove?s("li",ft({key:q,class:$(`${t}-content-item`,A("item"),it,{[`${t}-content-item-disabled`]:I}),style:S("item")},pt),[ut,s("button",{type:"button",disabled:I,class:`${t}-content-item-remove`,"aria-label":e.removeCurrent,onClick:()=>!I&&l("itemRemove",[q])},[s(rt,{component:xt},null)])]):s("li",ft({key:q,class:$(`${t}-content-item`,A("item"),it,{[`${t}-content-item-disabled`]:I,[`${t}-content-item-checked`]:M&&!I}),style:S("item")},pt,{onClick:B=>!I&&l("itemSelect",q,!M,B)}),[s(gt,{class:$(`${t}-checkbox`,A("itemIcon")),style:S("itemIcon"),checked:M,disabled:I},null),ut])}),g=Array.isArray(e.notFoundContent)?e.notFoundContent[e.direction==="left"?0:1]:e.notFoundContent,f=O.value.length?s(ct,null,[s("ul",{class:$(`${t}-content`,A("list"),{[`${t}-content-show-remove`]:e.showRemove}),style:S("list"),onScroll:w=>l("scroll",e.direction,w)},[m]),b.value&&s(St,{size:"small",disabled:e.disabled,simple:b.value.simple,pageSize:b.value.pageSize,showSizeChanger:b.value.showSizeChanger,class:`${t}-pagination`,total:h.value.length,current:T.value,onChange:w=>{T.value=w}},null)]):s("div",{class:`${t}-body-not-found`},[g??s(wt,{description:!1},null)]),D=e.footer?e.footer({direction:e.direction,filteredItems:R.value,selectedKeys:e.checkedKeys,disabled:e.disabled}):null;return s("div",{class:$(y.value,A("section"),{[`${y.value}-with-pagination`]:!!b.value,[`${y.value}-with-footer`]:!!D}),style:{...e.listStyle,...S("section")}},[s("div",{class:$(`${t}-header`,A("header")),style:S("header")},[e.showSelectAll?s(ct,null,[!e.showRemove&&!b.value&&o,d]):null,s("span",{class:`${t}-header-selected`},[J(C.value.length,R.value.length)]),s("span",{class:$(`${t}-header-title`,A("title")),style:S("title")},[e.titleText])]),s("div",{class:$(`${t}-body`,A("body"),{[`${t}-body-with-search`]:!!e.showSearch}),style:S("body")},[v,f]),D&&s("div",{class:$(`${t}-footer`,A("footer")),style:S("footer")},[D])])}}}),N=_({name:"Transfer",props:{dataSource:{type:Array,default:()=>[]},targetKeys:Array,defaultTargetKeys:{type:Array,default:()=>[]},selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},titles:{type:Array,default:()=>["",""]},operations:{type:Array,default:()=>[]},render:Function,rowKey:Function,showSearch:{type:[Boolean,Object],default:!1},filterOption:Function,footer:Function,listStyle:{type:[Object,Function],default:()=>({})},disabled:Boolean,showSelectAll:{type:Boolean,default:!0},selectAllLabels:{type:Array,default:()=>[]},oneWay:Boolean,draggable:Boolean,pagination:{type:[Boolean,Object],default:void 0},status:String,locale:{type:Object,default:()=>({})},rootClassName:String,classNames:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},emits:["update:targetKeys","change","update:selectedKeys","selectChange","search","scroll","reorder"],setup(e,{emit:l}){const c=Tt("transfer"),y=Kt(),n=k(()=>({...y.value.Transfer,...e.locale})),r=x([...e.defaultTargetKeys]),T=x([...e.defaultSelectedKeys]);tt(()=>e.targetKeys,t=>{t&&(r.value=[...t])}),tt(()=>e.selectedKeys,t=>{t&&(T.value=[...t])});const b=k(()=>e.targetKeys??r.value),F=k(()=>e.selectedKeys??T.value),i=k(()=>e.dataSource.map(t=>({...t,key:e.rowKey?e.rowKey(t):t.key}))),h=k(()=>i.value.filter(t=>!b.value.includes(t.key))),R=k(()=>new Map(i.value.map(t=>[t.key,t]))),O=k(()=>b.value.map(t=>R.value.get(t)).filter(Boolean)),C=k(()=>F.value.filter(t=>h.value.some(a=>a.key===t))),K=k(()=>F.value.filter(t=>O.value.some(a=>a.key===t)));function V(t){T.value=t,l("update:selectedKeys",t)}function Y(t,a){const o=t==="left"?K.value:C.value,d=t==="left"?[...a,...o]:[...o,...a];V(d),t==="left"?l("selectChange",a,K.value):l("selectChange",C.value,a)}function J(t){const a=t==="right"?C.value:K.value,o=new Set(i.value.filter(f=>f.disabled).map(f=>f.key)),d=a.filter(f=>!o.has(f)),v=new Set(d),m=t==="right"?[...d,...b.value]:b.value.filter(f=>!v.has(f));r.value=m,l("update:targetKeys",m);const g=t==="right"?K.value:C.value;V(g),t==="right"?l("selectChange",[],K.value):l("selectChange",C.value,[]),l("change",m,t,d)}const et=()=>J("right"),A=()=>J("left"),S={left:null,right:null};function P(t,a,o,d){var w;const v=t==="left",m=v?C.value:K.value,g=(v?h.value:O.value).filter(j=>!j.disabled),f=g.findIndex(j=>j.key===a),D=new Set(m);if(d&&S[t]!==null){const j=Math.min(S[t],f),q=Math.max(S[t],f);for(let I=j;I<=q;I++){const M=(w=g[I])==null?void 0:w.key;M!==void 0&&D.add(M)}}else D.has(a)&&D.delete(a),o&&D.add(a),S[t]=o?f:null;Y(t,[...D])}function L(t,a,o){const d=t==="left"?C.value:K.value;let v;if(o==="replace")v=a;else if(o)v=[...new Set([...d,...a])];else{const m=new Set(a);v=d.filter(g=>!m.has(g))}S[t]=null,Y(t,v)}function z(t){const a=new Set(t),o=b.value.filter(d=>!a.has(d));r.value=o,l("update:targetKeys",o),V(C.value),l("change",o,"left",[...t])}function nt(t,a,o){if(t===a)return;const d=[...b.value],v=d.indexOf(t),m=d.indexOf(a);if(v<0||m<0)return;const g=d.slice();g.splice(v,1);const f=g.indexOf(a),D=o?f+1:f;g.splice(D,0,t),r.value=g,l("update:targetKeys",g);const w={direction:"right",oldTargetKeys:d,newTargetKeys:g,activeKey:t,fromIndex:v,toIndex:g.indexOf(t)};l("reorder",w)}function at(t){return typeof e.listStyle=="function"?e.listStyle({direction:t}):e.listStyle}const st=k(()=>C.value.length>0),ot=k(()=>K.value.length>0),Q=k(()=>e.operations||[]);function G(t){var d,v;const a=t==="left",o=n.value;return{prefixCls:c,direction:t,titleText:((d=e.titles)==null?void 0:d[a?0:1])??"",dataSource:a?h.value:O.value,checkedKeys:a?C.value:K.value,disabled:e.disabled,showSearch:e.showSearch,showSelectAll:e.showSelectAll,showRemove:e.oneWay&&!a,draggable:!!e.draggable&&!a,pagination:e.pagination,selectAllLabel:(v=e.selectAllLabels)==null?void 0:v[a?0:1],render:e.render,filterOption:e.filterOption,footer:e.footer,listStyle:at(t),classNames:e.classNames,styles:e.styles,searchPlaceholder:o.searchPlaceholder,notFoundContent:e.locale.notFoundContent??o.notFoundContent,itemUnit:o.itemUnit,itemsUnit:o.itemsUnit,selectAll:o.selectAll,deselectAll:o.deselectAll,selectCurrent:o.selectCurrent,selectInvert:o.selectInvert,removeAll:o.removeAll,removeCurrent:o.removeCurrent,onItemSelect:(m,g,f)=>P(t,m,g,f==null?void 0:f.shiftKey),onItemSelectAll:(m,g)=>L(t,m,g),onItemRemove:m=>z(m),onReorder:(m,g,f)=>nt(m,g,f),onFilter:(m,g)=>l("search",m,g),onScroll:(m,g)=>l("scroll",m,g)}}return()=>s("div",{class:$(c,e.rootClassName,e.classNames.root,{[`${c}-disabled`]:e.disabled,[`${c}-status-error`]:e.status==="error",[`${c}-status-warning`]:e.status==="warning"}),style:e.styles.root},[s(kt,G("left"),null),s("div",{class:$(`${c}-actions`,e.classNames.actions),style:e.styles.actions},[s(mt,{type:"primary",size:"small",icon:$t,disabled:!st.value||e.disabled,onClick:et},{default:()=>[Q.value[0]]}),!e.oneWay&&s(mt,{type:"primary",size:"small",icon:Dt,disabled:!ot.value||e.disabled,onClick:A},{default:()=>[Q.value[1]]})]),s(kt,G("right"),null)])}}),Ot=_({__name:"TransferBasic",setup(e){const l=Array.from({length:10},(y,n)=>({key:String(n),title:`选项 ${n+1}`,description:`描述 ${n+1}`,disabled:n===3})),c=x(["1","3","5"]);return(y,n)=>(E(),X(u(N),{"target-keys":c.value,"onUpdate:targetKeys":n[0]||(n[0]=r=>c.value=r),"data-source":u(l),titles:["待选","已选"],"show-search":""},null,8,["target-keys","data-source"]))}}),Pt=`<template>
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
`,Lt={style:{display:"flex","flex-direction":"column",gap:"24px"}},Bt=_({__name:"TransferClassNames",setup(e){const c=(()=>{const F=[];for(let i=1;i<=10;i++)F.push({key:`item-${i}`,title:`选项 ${i}`,description:`这是选项 ${i} 的描述`});return F})(),y=x(["item-2","item-4"]),n=x(["item-1","item-3"]),r=x(["item-5","item-6"]),T=x(["item-7","item-8"]),b=x(["item-9","item-10"]);return(F,i)=>(E(),dt("div",Lt,[p("div",null,[i[5]||(i[5]=p("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义列表容器和项：",-1)),s(u(N),{"target-keys":y.value,"onUpdate:targetKeys":i[0]||(i[0]=h=>y.value=h),"data-source":u(c),"class-names":{list:"custom-list",item:"custom-item"},titles:["源列表","目标列表"]},null,8,["target-keys","data-source"])]),p("div",null,[i[6]||(i[6]=p("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义头部和标题：",-1)),s(u(N),{"target-keys":n.value,"onUpdate:targetKeys":i[1]||(i[1]=h=>n.value=h),"data-source":u(c),"class-names":{header:"custom-header",title:"custom-title"},titles:["可选项","已选项"]},null,8,["target-keys","data-source"])]),p("div",null,[i[7]||(i[7]=p("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义操作按钮区：",-1)),s(u(N),{"target-keys":r.value,"onUpdate:targetKeys":i[2]||(i[2]=h=>r.value=h),"data-source":u(c),"class-names":{actions:"custom-actions"},titles:["左侧","右侧"]},null,8,["target-keys","data-source"])]),p("div",null,[i[8]||(i[8]=p("div",{style:{"margin-bottom":"8px",color:"#666"}},"完整自定义（组合使用）：",-1)),s(u(N),{"target-keys":T.value,"onUpdate:targetKeys":i[3]||(i[3]=h=>T.value=h),"data-source":u(c),"class-names":{root:"complete-root",section:"complete-section",header:"complete-header",title:"complete-title",body:"complete-body",list:"complete-list",item:"complete-item",actions:"complete-actions"},titles:["待选区","已选区"]},null,8,["target-keys","data-source"])]),p("div",null,[i[9]||(i[9]=p("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式（styles）：",-1)),s(u(N),{"target-keys":b.value,"onUpdate:targetKeys":i[4]||(i[4]=h=>b.value=h),"data-source":u(c),styles:{section:{border:"2px solid #1890ff",borderRadius:"8px"},header:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"12px 16px"},list:{background:"#fafafa"},item:{padding:"12px 16px",borderRadius:"4px"}},titles:["来源","目标"]},null,8,["target-keys","data-source"])])]))}}),_t=Ct(Bt,[["__scopeId","data-v-f766746b"]]),Ft=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 自定义列表样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义列表容器和项：</div>
      <Transfer
        v-model:target-keys="targetKeys1"
        :data-source="basicData"
        :class-names="{
          list: 'custom-list',
          item: 'custom-item',
        }"
        :titles="['源列表', '目标列表']"
      />
    </div>

    <!-- 自定义头部和标题 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义头部和标题：</div>
      <Transfer
        v-model:target-keys="targetKeys2"
        :data-source="basicData"
        :class-names="{
          header: 'custom-header',
          title: 'custom-title',
        }"
        :titles="['可选项', '已选项']"
      />
    </div>

    <!-- 自定义操作按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义操作按钮区：</div>
      <Transfer
        v-model:target-keys="targetKeys3"
        :data-source="basicData"
        :class-names="{
          actions: 'custom-actions',
        }"
        :titles="['左侧', '右侧']"
      />
    </div>

    <!-- 完整自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">完整自定义（组合使用）：</div>
      <Transfer
        v-model:target-keys="targetKeys4"
        :data-source="basicData"
        :class-names="{
          root: 'complete-root',
          section: 'complete-section',
          header: 'complete-header',
          title: 'complete-title',
          body: 'complete-body',
          list: 'complete-list',
          item: 'complete-item',
          actions: 'complete-actions',
        }"
        :titles="['待选区', '已选区']"
      />
    </div>

    <!-- 使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Transfer
        v-model:target-keys="targetKeys5"
        :data-source="basicData"
        :styles="{
          section: { border: '2px solid #1890ff', borderRadius: '8px' },
          header: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px 16px',
          },
          list: { background: '#fafafa' },
          item: { padding: '12px 16px', borderRadius: '4px' },
        }"
        :titles="['来源', '目标']"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from 'ant-design-hmfw'

const generateData = () => {
  const data = []
  for (let i = 1; i <= 10; i++) {
    data.push({
      key: \`item-\${i}\`,
      title: \`选项 \${i}\`,
      description: \`这是选项 \${i} 的描述\`,
    })
  }
  return data
}

const basicData = generateData()

const targetKeys1 = ref(['item-2', 'item-4'])
const targetKeys2 = ref(['item-1', 'item-3'])
const targetKeys3 = ref(['item-5', 'item-6'])
const targetKeys4 = ref(['item-7', 'item-8'])
const targetKeys5 = ref(['item-9', 'item-10'])
<\/script>

<style scoped>
:deep(.custom-list) {
  background: linear-gradient(to bottom, #ffffff, #f5f5f5);
  border-radius: 4px;
}

:deep(.custom-item) {
  padding: 12px;
  transition: all 0.3s;
  border-radius: 4px;
  margin: 4px 8px;
}

:deep(.custom-item:hover) {
  background: #e6f7ff;
  transform: translateX(4px);
  box-shadow: 0 2px 4px rgba(24, 144, 255, 0.2);
}

:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 16px;
  border-radius: 8px 8px 0 0;
}

:deep(.custom-title) {
  color: white;
  font-weight: 600;
  font-size: 15px;
}

:deep(.custom-actions) {
  margin: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

:deep(.custom-actions button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  font-weight: 500;
  transition: all 0.3s;
}

:deep(.custom-actions button:hover) {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.complete-root) {
  background: #fafafa;
  padding: 20px;
  border-radius: 12px;
}

:deep(.complete-section) {
  border: 2px solid #1890ff;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
}

:deep(.complete-header) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  padding: 14px 16px;
  border-radius: 6px 6px 0 0;
}

:deep(.complete-title) {
  color: white;
  font-weight: 700;
  font-size: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

:deep(.complete-body) {
  background: #f5f5f5;
}

:deep(.complete-list) {
  background: white;
  padding: 8px;
}

:deep(.complete-item) {
  padding: 14px 16px;
  border-radius: 6px;
  margin: 6px 0;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.complete-item:hover) {
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  border-color: #1890ff;
  transform: translateX(6px);
  box-shadow: 0 4px 8px rgba(24, 144, 255, 0.15);
}

:deep(.complete-actions) {
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

:deep(.complete-actions button) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(82, 196, 26, 0.3);
  transition: all 0.3s;
}

:deep(.complete-actions button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.5);
}

:deep(.complete-actions button:disabled) {
  background: #d9d9d9;
  box-shadow: none;
}
</style>
`,Et=_({__name:"TransferCustom",setup(e){const l=Array.from({length:10},(y,n)=>({key:String(n),title:`选项 ${n+1}`})),c=x(["1","3"]);return(y,n)=>(E(),X(u(N),{"target-keys":c.value,"onUpdate:targetKeys":n[0]||(n[0]=r=>c.value=r),"data-source":u(l),titles:["待选","已选"],render:r=>`[${r.title}]`},null,8,["target-keys","data-source","render"]))}}),zt=`<template>
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
`,jt={style:{"margin-top":"12px",color:"rgba(0, 0, 0, 0.45)","font-size":"12px"}},Ut=_({__name:"TransferDraggable",setup(e){const l=Array.from({length:8},(n,r)=>({key:String(r),title:`Item ${r+1}`})),c=x(["0","1","2","3"]);function y(n){console.log("reorder",n)}return(n,r)=>(E(),dt(ct,null,[s(u(N),{"target-keys":c.value,"onUpdate:targetKeys":r[0]||(r[0]=T=>c.value=T),"data-source":u(l),titles:["源","目标（可拖拽排序）"],draggable:"",onReorder:y},null,8,["target-keys","data-source"]),p("p",jt," 当前顺序："+qt(c.value.join(", ")||"（空）"),1)],64))}}),Vt=`<template>
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
`,Mt=_({__name:"TransferOneWay",setup(e){const l=Array.from({length:10},(y,n)=>({key:String(n),title:`Item ${n+1}`})),c=x(["1","3"]);return(y,n)=>(E(),X(u(N),{"target-keys":c.value,"onUpdate:targetKeys":n[0]||(n[0]=r=>c.value=r),"data-source":u(l),titles:["源","目标"],"one-way":""},null,8,["target-keys","data-source"]))}}),Wt=`<template>
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
`,Ht=_({__name:"TransferPagination",setup(e){const l=Array.from({length:20},(y,n)=>({key:String(n),title:`选项 ${n+1}`})),c=x(["2","5","8"]);return(y,n)=>(E(),X(u(N),{"target-keys":c.value,"onUpdate:targetKeys":n[0]||(n[0]=r=>c.value=r),"data-source":u(l),titles:["源","目标"],pagination:{pageSize:5}},null,8,["target-keys","data-source"]))}}),Xt=`<template>
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
`,Yt=_({__name:"TransferSearch",setup(e){const l=Array.from({length:20},(y,n)=>({key:String(n),title:`选项 ${n+1}`,description:`描述 ${n+1}`,disabled:n%8===3})),c=x(["1","3","5"]);return(y,n)=>(E(),X(u(N),{"target-keys":c.value,"onUpdate:targetKeys":n[0]||(n[0]=r=>c.value=r),"data-source":u(l),titles:["待选","已选"],"show-search":""},null,8,["target-keys","data-source"]))}}),Jt=`<template>
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
`,Qt={class:"markdown-body"},ve={__name:"transfer",setup(e,{expose:l}){return l({frontmatter:{}}),(y,n)=>{const r=At("DemoBlock");return E(),dt("div",Qt,[n[0]||(n[0]=p("h1",{id:"transfer-穿梭框",tabindex:"-1"},"Transfer 穿梭框",-1)),n[1]||(n[1]=p("p",null,"双栏穿梭选择框，用于将元素从一列移入另一列。",-1)),n[2]||(n[2]=p("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=p("ul",null,[p("li",null,"需要在两个集合之间进行选择，且需要直观展示两个集合的内容时"),p("li",null,"用于将可选项在两个列表之间移动")],-1)),n[4]||(n[4]=p("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=p("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=p("p",null,"最简单的用法，展示了数据在左右两栏之间的移动。",-1)),s(r,{title:"基础用法",source:u(Pt)},{default:U(()=>[s(Ot)]),_:1},8,["source"]),n[7]||(n[7]=p("h3",{id:"带搜索框",tabindex:"-1"},"带搜索框",-1)),n[8]||(n[8]=p("p",null,"支持搜索功能，可以快速找到目标项。",-1)),s(r,{title:"带搜索框",source:u(Jt)},{default:U(()=>[s(Yt)]),_:1},8,["source"]),n[9]||(n[9]=p("h3",{id:"自定义渲染",tabindex:"-1"},"自定义渲染",-1)),n[10]||(n[10]=p("p",null,"可以自定义每项的渲染内容。",-1)),s(r,{title:"自定义渲染",source:u(zt)},{default:U(()=>[s(Et)]),_:1},8,["source"]),n[11]||(n[11]=p("h3",{id:"分页",tabindex:"-1"},"分页",-1)),n[12]||(n[12]=p("p",null,"数据较多时，可以使用分页。",-1)),s(r,{title:"分页",source:u(Xt)},{default:U(()=>[s(Ht)]),_:1},8,["source"]),n[13]||(n[13]=p("h3",{id:"单向模式",tabindex:"-1"},"单向模式",-1)),n[14]||(n[14]=p("p",null,"单向模式下，只能从左往右移动，右侧项可单独删除。",-1)),s(r,{title:"单向模式",source:u(Wt)},{default:U(()=>[s(Mt)]),_:1},8,["source"]),n[15]||(n[15]=p("h3",{id:"拖拽排序",tabindex:"-1"},"拖拽排序",-1)),n[16]||(n[16]=p("p",null,[H("设置 "),p("code",null,"draggable"),H(" 后，右侧列表项可通过 HTML5 拖拽调整顺序。")],-1)),s(r,{title:"拖拽排序",source:u(Vt)},{default:U(()=>[s(Ut)]),_:1},8,["source"]),n[17]||(n[17]=p("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[18]||(n[18]=p("p",null,[H("通过 "),p("code",null,"classNames"),H(" / "),p("code",null,"styles"),H(" 对列表、列表项、头部、操作按钮等子元素做细粒度样式控制。")],-1)),s(r,{title:"语义化 className 与 style",source:u(Ft)},{default:U(()=>[s(_t)]),_:1},8,["source"]),n[19]||(n[19]=It(`<h2 id="api" tabindex="-1">API</h2><h3 id="transfer-props" tabindex="-1">Transfer Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据源</td><td><code>TransferItem[]</code></td><td><code>[]</code></td></tr><tr><td>targetKeys (v-model)</td><td>右侧列表的 key 集合</td><td><code>TransferKey[]</code></td><td><code>[]</code></td></tr><tr><td>selectedKeys (v-model)</td><td>选中项的 key 集合</td><td><code>TransferKey[]</code></td><td><code>[]</code></td></tr><tr><td>titles</td><td>标题集合</td><td><code>(VNode | string)[]</code></td><td><code>[&#39;&#39;, &#39;&#39;]</code></td></tr><tr><td>operations</td><td>操作按钮文案（已废弃）</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>render</td><td>自定义渲染函数</td><td><code>(item: TransferItem) =&gt; RenderResult</code></td><td>-</td></tr><tr><td>rowKey</td><td>自定义提取 key</td><td><code>(record: TransferItem) =&gt; TransferKey</code></td><td>-</td></tr><tr><td>showSearch</td><td>显示搜索框</td><td><code>boolean | TransferSearchOption</code></td><td><code>false</code></td></tr><tr><td>filterOption</td><td>自定义搜索函数</td><td><code>(input: string, item: TransferItem, direction: TransferDirection) =&gt; boolean</code></td><td>-</td></tr><tr><td>footer</td><td>列表底部渲染</td><td><code>(info: TransferListContext) =&gt; VNode | string | null</code></td><td>-</td></tr><tr><td>listStyle</td><td>列表样式</td><td><code>CSSProperties | ((info: { direction: TransferDirection }) =&gt; CSSProperties)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSelectAll</td><td>是否展示全选勾选框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>selectAllLabels</td><td>自定义全选文案</td><td><code>SelectAllLabel[]</code></td><td>-</td></tr><tr><td>oneWay</td><td>单向模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>draggable</td><td>是否允许通过拖拽对右侧列表项排序</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>分页配置</td><td><code>boolean | PaginationType</code></td><td>-</td></tr><tr><td>status</td><td>校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>locale</td><td>文案配置</td><td><code>Partial&lt;TransferLocale&gt;</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根元素 class</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TransferSemanticClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TransferSemanticStyles</code></td><td>-</td></tr></tbody></table><h3 id="transfer-events" tabindex="-1">Transfer Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>右侧列表变化时触发</td><td><code>(targetKeys: TransferKey[], direction: TransferDirection, moveKeys: TransferKey[])</code></td></tr><tr><td>selectChange</td><td>选中项变化时触发</td><td><code>(sourceSelectedKeys: TransferKey[], targetSelectedKeys: TransferKey[])</code></td></tr><tr><td>search</td><td>搜索框内容变化时触发</td><td><code>(direction: TransferDirection, value: string)</code></td></tr><tr><td>scroll</td><td>列表滚动时触发</td><td><code>(direction: TransferDirection, e: Event)</code></td></tr><tr><td>reorder</td><td>右侧列表通过拖拽重新排序后触发</td><td><code>(info: TransferReorderInfo)</code></td></tr></tbody></table><h3 id="transferitem" tabindex="-1">TransferItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td></tr><tr><td>description</td><td>描述</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr></tbody></table><h3 id="paginationtype" tabindex="-1">PaginationType</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">PaginationType</span> <span class="token operator">=</span>
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
</code></pre><h3 id="transferreorderinfo" tabindex="-1">TransferReorderInfo</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">TransferReorderInfo</span> <span class="token punctuation">{</span>
  direction<span class="token operator">:</span> TransferDirection
  oldTargetKeys<span class="token operator">:</span> TransferKey<span class="token punctuation">[</span><span class="token punctuation">]</span>
  newTargetKeys<span class="token operator">:</span> TransferKey<span class="token punctuation">[</span><span class="token punctuation">]</span>
  activeKey<span class="token operator">:</span> TransferKey
  fromIndex<span class="token operator">:</span> <span class="token builtin">number</span>
  toIndex<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="特性说明" tabindex="-1">特性说明</h2><h3 id="搜索" tabindex="-1">搜索</h3><p>设置 <code>showSearch</code> 为 <code>true</code> 启用搜索功能，也可传对象 <code>{ placeholder, defaultValue }</code> 自定义搜索框。默认搜索匹配 <code>title</code> 字段，可通过 <code>filterOption</code> 自定义匹配逻辑。</p><h3 id="分页-1" tabindex="-1">分页</h3><p>数据量大时，可以设置 <code>pagination</code> 为 <code>true</code> 或配置对象启用分页。分页后全选操作仅影响当前页，可通过 selections 下拉菜单操作所有项。</p><h3 id="单向模式-1" tabindex="-1">单向模式</h3><p>设置 <code>oneWay</code> 后，只显示右箭头按钮，右侧列表每项显示删除按钮，用于&quot;添加到列表&quot;的场景。</p><h3 id="拖拽排序-1" tabindex="-1">拖拽排序</h3><p>设置 <code>draggable</code> 后，右侧目标列表的每一项变为可拖拽元素（基于 HTML5 Drag and Drop）。拖拽并释放后会触发 <code>update:targetKeys</code> 与 <code>reorder</code> 事件，<code>reorder</code> 回调携带旧/新 <code>targetKeys</code> 顺序、被拖拽项 <code>activeKey</code> 以及 <code>fromIndex</code> / <code>toIndex</code>。禁用项不可拖拽。</p><h3 id="shift-多选" tabindex="-1">Shift 多选</h3><p>按住 Shift 键点击可进行范围多选。</p><h3 id="键盘操作" tabindex="-1">键盘操作</h3><p>暂不支持键盘导航（与 AntD 一致）。</p><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对穿梭框的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">TransferSemanticClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 穿梭框根容器</span>
  section<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单侧列表容器（左右各一个）</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表头部区域</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题文本</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表主体容器</span>
  list<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表 &lt;ul&gt; 元素</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表项 &lt;li&gt;</span>
  itemIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表项图标（复选框）</span>
  itemContent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表项文本内容</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表底部区域</span>
  actions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 中间操作按钮组</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TransferSemanticStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 穿梭框根容器</span>
  section<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 单侧列表容器</span>
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 列表头部区域</span>
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 标题文本</span>
  body<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 列表主体容器</span>
  list<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 列表 &lt;ul&gt;</span>
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 列表项 &lt;li&gt;</span>
  itemIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 列表项图标</span>
  itemContent<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 列表项文本内容</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 列表底部区域</span>
  actions<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 中间操作按钮组</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>

  <span class="token comment">&lt;!-- 左侧列表 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-section hmfw-transfer-section-source<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.section / styles.section 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.header / styles.header 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>源列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.list / styles.list 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-item-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.itemIcon / styles.itemIcon 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-item-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>选项 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.itemContent / styles.itemContent 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.footer / styles.footer 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 中间操作区 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.actions / styles.actions 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>→<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>←<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 右侧列表（结构同左侧） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-transfer-section hmfw-transfer-section-target<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义列表样式 --&gt;
  &lt;Transfer
    :data-source=&quot;dataSource&quot;
    v-model:target-keys=&quot;targetKeys&quot;
    :class-names=&quot;{
      section: &#39;my-section&#39;,
      list: &#39;my-list&#39;,
      item: &#39;my-item&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义操作按钮区域 --&gt;
  &lt;Transfer
    :data-source=&quot;dataSource&quot;
    v-model:target-keys=&quot;targetKeys&quot;
    :class-names=&quot;{
      actions: &#39;my-actions&#39;,
      header: &#39;my-header&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义列表项内容 --&gt;
  &lt;Transfer
    :data-source=&quot;dataSource&quot;
    v-model:target-keys=&quot;targetKeys&quot;
    :class-names=&quot;{
      itemContent: &#39;my-item-content&#39;,
      itemIcon: &#39;my-item-icon&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-section) {
  border: 2px solid #1890ff;
  border-radius: 8px;
}

:deep(.my-list) {
  background: linear-gradient(to bottom, #ffffff, #f5f5f5);
}

:deep(.my-item) {
  padding: 12px;
  transition: all 0.3s;
}

:deep(.my-item:hover) {
  background: #e6f7ff;
  transform: translateX(4px);
}

:deep(.my-actions) {
  margin: 0 24px;
}

:deep(.my-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px;
}

:deep(.my-item-content) {
  font-weight: 500;
  color: #333;
}

:deep(.my-item-icon) {
  margin-right: 12px;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制间距 --&gt;
  &lt;Transfer
    :data-source=&quot;dataSource&quot;
    v-model:target-keys=&quot;targetKeys&quot;
    :styles=&quot;{
      section: { padding: &#39;16px&#39; },
      item: { padding: &#39;12px 16px&#39; },
    }&quot;
  /&gt;

  &lt;!-- 自定义头部和操作区 --&gt;
  &lt;Transfer
    :data-source=&quot;dataSource&quot;
    v-model:target-keys=&quot;targetKeys&quot;
    :styles=&quot;{
      header: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        color: &#39;white&#39;,
        padding: &#39;12px&#39;,
      },
      actions: {
        margin: &#39;0 24px&#39;,
      },
    }&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Transfer
    :data-source=&quot;dataSource&quot;
    v-model:target-keys=&quot;targetKeys&quot;
    :styles=&quot;{
      root: { maxWidth: &#39;800px&#39;, margin: &#39;0 auto&#39; },
      list: { maxHeight: &#39;400px&#39; },
      itemContent: { fontSize: &#39;14px&#39;, fontWeight: &#39;500&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>section</code> 会同时应用于左右两侧列表容器</li><li><code>item</code> / <code>itemIcon</code> / <code>itemContent</code> 会应用于所有列表项（左右两侧）</li><li>对于列表样式（<code>listStyle</code> prop），建议优先使用组件提供的 <code>listStyle</code> 属性；<code>styles.list</code> 适合做细微调整</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-fill-quaternary</code></td><td>四级填充色</td><td><code>rgba(0,0,0,0.02)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题色背景</td><td><code>#e6f4ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg-hover</code></td><td>主题色背景悬停态</td><td><code>#bae0ff</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用容器背景色</td><td><code>rgba(0,0,0,0.04)</code></td></tr></tbody></table>`,41))])}}};export{ve as default};
