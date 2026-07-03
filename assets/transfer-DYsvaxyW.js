import{B as mn}from"./Button-DUAUyor1.js";import{D as vn}from"./index-BdiM2Xp3.js";import{C as gn}from"./Checkbox-zjGwQVUI.js";import{D as hn}from"./DownOutlined-D0hknCoY.js";import{D as bn}from"./DeleteOutlined-DeajUC4n.js";import{S as xn}from"./SearchOutlined-Djx-C46f.js";import{I as Sn}from"./Input-D0wr-smq.js";import{c as $}from"./cls-S9IiI6wd.js";import{P as wn}from"./Pagination-DIZBCRhD.js";import{E as Tn}from"./Empty-CQVjz52k.js";import{d as _,r as x,m as nn,c as e,s as fn,F as pn,a as f,u as Kn,C as qn,o as E,q as X,e as u,b as cn,f as i,_ as Cn,A as An,h as In,w as V,g as H,i as $n}from"./index-D624MvcT.js";import{R as Dn}from"./RightOutlined-DuHGjLUj.js";import{L as Nn}from"./LeftOutlined-De9bAUho.js";import"./LoadingOutlined-YZYQjBMp.js";import"./index-DViEnr3B.js";import"./Layout-C5sEkQPo.js";import"./MinusOutlined-BVlLTb1f.js";import"./event-CMqgYmge.js";import"./Trigger-D8KlWo3g.js";import"./Tooltip-N_Z7Umoy.js";import"./CloseOutlined-BVCBReO7.js";import"./EyeOutlined-BDMlzO8P.js";import"./Select-CChPXbCg.js";import"./VirtualList-C7kIDEhj.js";function Rn(t){return!!t&&typeof t=="object"&&!("__v_isVNode"in t)&&"value"in t}function On(t,l){for(const c of[t,l.title,l.key]){if(typeof c=="string")return c;if(typeof c=="number")return String(c)}return""}function W(t){return t.filter(l=>!l.disabled).map(l=>l.key)}const yn=_({name:"TransferList",props:{prefixCls:{type:String,required:!0},direction:{type:String,required:!0},titleText:{type:[String,Object],default:""},dataSource:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},disabled:Boolean,showSearch:{type:[Boolean,Object],default:!1},showSelectAll:{type:Boolean,default:!0},showRemove:Boolean,draggable:Boolean,pagination:{type:[Boolean,Object],default:void 0},selectAllLabel:{type:[String,Object,Function],default:void 0},render:Function,filterOption:Function,footer:Function,listStyle:{type:Object,default:()=>({})},classNames:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},searchPlaceholder:{type:String,default:"请输入搜索内容"},notFoundContent:{type:[String,Object,Array],default:void 0},itemUnit:{type:String,default:"项"},itemsUnit:{type:String,default:"项"},selectAll:{type:String,default:"全选所有"},deselectAll:{type:String,default:"取消全选"},selectCurrent:{type:String,default:"全选当页"},selectInvert:{type:String,default:"反选当页"},removeAll:{type:String,default:"删除全部"},removeCurrent:{type:String,default:"删除当页"}},emits:["itemSelect","itemSelectAll","itemRemove","reorder","filter","scroll"],setup(t,{emit:l}){const c=f(()=>`${t.prefixCls}-list`),y=f(()=>`${t.prefixCls}-section`),a=f(()=>t.showSearch&&typeof t.showSearch=="object"?{defaultValue:"",placeholder:"",...t.showSearch}:{defaultValue:"",placeholder:""}),p=x(a.value.defaultValue||"");nn(()=>a.value.defaultValue,n=>{p.value=n||""});const T=x(1),h=f(()=>t.pagination?{simple:!0,showSizeChanger:!1,showLessItems:!1,pageSize:10,...typeof t.pagination=="object"?t.pagination:{}}:null);function F(n){const s=t.render?t.render(n):null,o=Rn(s),r=o?s.label:s,v=o?s.value:On(s,n);return{item:n,renderedEl:r??n.title??String(n.key),renderedText:v}}function d(n,s){return t.filterOption?t.filterOption(p.value,s,t.direction):n.toLowerCase().includes(p.value.toLowerCase())}const b=f(()=>{const n=[];return t.dataSource.forEach(s=>{const o=F(s);p.value&&!d(o.renderedText,s)||n.push(o)}),n}),O=f(()=>b.value.map(n=>n.item));nn([b,h],()=>{const n=h.value;if(n){const s=Math.max(1,Math.ceil(b.value.length/n.pageSize));T.value=Math.min(T.value,s)}});const P=f(()=>{const n=h.value;return n?b.value.slice((T.value-1)*n.pageSize,T.value*n.pageSize):b.value}),C=f(()=>O.value.filter(n=>t.checkedKeys.includes(n.key)&&!n.disabled)),K=f(()=>{if(C.value.length===0)return"none";const n=new Set(t.checkedKeys);return O.value.every(s=>n.has(s.key)||!!s.disabled)?"all":"part"});function M(n){p.value=n,l("filter",t.direction,n)}function Y(){const n=W(O.value);l("itemSelectAll",n,K.value!=="all")}function G(n,s){const o=t.selectAllLabel;if(o)return typeof o=="function"?o({selectedCount:n,totalCount:s}):o;const r=s>1?t.itemsUnit:t.itemUnit;return`${n>0?`${n}/`:""}${s} ${r}`}const tn=f(()=>{const n=h.value;return t.showRemove?[n&&{key:"removeCurrent",label:t.removeCurrent,onClick:()=>l("itemRemove",W(P.value.map(s=>s.item)))},{key:"removeAll",label:t.removeAll,onClick:()=>l("itemRemove",W(O.value))}].filter(Boolean):[{key:"selectAll",label:K.value==="all"?t.deselectAll:t.selectAll,onClick:()=>{const s=W(O.value);l("itemSelectAll",s,s.length!==t.checkedKeys.length)}},n&&{key:"selectCurrent",label:t.selectCurrent,onClick:()=>l("itemSelectAll",W(P.value.map(s=>s.item)),!0)},{key:"selectInvert",label:t.selectInvert,onClick:()=>{const s=W(P.value.map(r=>r.item)),o=new Set(t.checkedKeys);s.forEach(r=>o.has(r)?o.delete(r):o.add(r)),l("itemSelectAll",[...o],"replace")}}].filter(Boolean)});function I(n){return t.classNames[n]}function S(n){return t.styles[n]}const L=x(null),B=x(null),z=x(!1);function an(n){return!!t.draggable&&!t.disabled&&!n.disabled}function sn(n,s){if(L.value=s,n.dataTransfer){n.dataTransfer.effectAllowed="move";try{n.dataTransfer.setData("text/plain",String(s))}catch{}}}function en(n,s){if(L.value===null||L.value===s)return;n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect="move");const r=n.currentTarget.getBoundingClientRect(),k=n.clientY-r.top>r.height/2;(B.value!==s||z.value!==k)&&(B.value=s,z.value=k)}function on(n,s){B.value===s&&(B.value=null)}function J(n,s){n.preventDefault();const o=L.value,r=z.value;L.value=null,B.value=null,!(o===null||o===s)&&l("reorder",o,s,r)}function Q(){L.value=null,B.value=null}return()=>{const n=c.value,s=t.dataSource.some(w=>!w.disabled),o=e(gn,{class:`${n}-checkbox`,disabled:!s||t.disabled,checked:K.value==="all",indeterminate:K.value==="part",onChange:Y},null),r=e(vn,{class:`${n}-header-dropdown`,disabled:t.disabled,menu:{items:tn.value}},{default:()=>[e("span",{class:`${n}-header-dropdown-trigger`},[e(hn,{class:"hmfw-icon"},null)])]}),v=t.showSearch?e("div",{class:`${n}-body-search-wrapper`},[e(Sn,{class:`${n}-search`,value:p.value,placeholder:a.value.placeholder||t.searchPlaceholder,disabled:t.disabled,allowClear:!0,prefix:e(xn,{class:"hmfw-icon"},null),onInput:w=>M(w.target.value),onClear:()=>M("")},null)]):null,k=P.value.map(({item:w,renderedEl:j})=>{const q=w.key,A=t.disabled||w.disabled,U=t.checkedKeys.includes(q),Z=L.value===q,ln=B.value===q,rn=an(w)?{draggable:!0,onDragstart:N=>sn(N,q),onDragover:N=>en(N,q),onDragleave:N=>on(N,q),onDrop:N=>J(N,q),onDragend:()=>Q()}:{},dn={[`${n}-content-item-draggable`]:!!t.draggable&&!A,[`${n}-content-item-dragging`]:Z,[`${n}-content-item-drag-over`]:ln&&!Z,[`${n}-content-item-drag-over-after`]:ln&&!Z&&z.value,[`${n}-content-item-drag-over-before`]:ln&&!Z&&!z.value},un=e("span",{class:$(`${n}-content-item-text`,I("itemContent")),style:S("itemContent")},[j]);return t.showRemove?e("li",fn({key:q,class:$(`${n}-content-item`,I("item"),dn,{[`${n}-content-item-disabled`]:A}),style:S("item")},rn),[un,e("button",{type:"button",disabled:A,class:`${n}-content-item-remove`,"aria-label":t.removeCurrent,onClick:()=>!A&&l("itemRemove",[q])},[e(bn,{class:"hmfw-icon"},null)])]):e("li",fn({key:q,class:$(`${n}-content-item`,I("item"),dn,{[`${n}-content-item-disabled`]:A,[`${n}-content-item-checked`]:U&&!A}),style:S("item")},rn,{onClick:N=>!A&&l("itemSelect",q,!U,N)}),[e(gn,{class:$(`${n}-checkbox`,I("itemIcon")),style:S("itemIcon"),checked:U,disabled:A,onChange:N=>{var kn;A||((kn=N.nativeEvent)==null||kn.stopPropagation(),l("itemSelect",q,!U))}},null),un])}),m=Array.isArray(t.notFoundContent)?t.notFoundContent[t.direction==="left"?0:1]:t.notFoundContent,g=P.value.length?e(pn,null,[e("ul",{class:$(`${n}-content`,I("list"),{[`${n}-content-show-remove`]:t.showRemove}),style:S("list"),onScroll:w=>l("scroll",t.direction,w)},[k]),h.value&&e(wn,{size:"small",disabled:t.disabled,simple:h.value.simple,pageSize:h.value.pageSize,showSizeChanger:h.value.showSizeChanger,class:`${n}-pagination`,total:b.value.length,current:T.value,onChange:w=>{T.value=w}},null)]):e("div",{class:`${n}-body-not-found`},[m??e(Tn,{description:!1},null)]),D=t.footer?t.footer({direction:t.direction,filteredItems:O.value,selectedKeys:t.checkedKeys,disabled:t.disabled}):null;return e("div",{class:$(y.value,I("section"),{[`${y.value}-with-pagination`]:!!h.value,[`${y.value}-with-footer`]:!!D}),style:{...t.listStyle,...S("section")}},[e("div",{class:$(`${n}-header`,I("header")),style:S("header")},[t.showSelectAll?e(pn,null,[!t.showRemove&&!h.value&&o,r]):null,e("span",{class:`${n}-header-selected`},[G(C.value.length,O.value.length)]),e("span",{class:$(`${n}-header-title`,I("title")),style:S("title")},[t.titleText])]),e("div",{class:$(`${n}-body`,I("body"),{[`${n}-body-with-search`]:!!t.showSearch}),style:S("body")},[v,g]),D&&e("div",{class:$(`${n}-footer`,I("footer")),style:S("footer")},[D])])}}}),R=_({name:"Transfer",props:{dataSource:{type:Array,default:()=>[]},targetKeys:Array,defaultTargetKeys:{type:Array,default:()=>[]},selectedKeys:Array,defaultSelectedKeys:{type:Array,default:()=>[]},titles:{type:Array,default:()=>["",""]},operations:{type:Array,default:()=>[]},render:Function,rowKey:Function,showSearch:{type:[Boolean,Object],default:!1},filterOption:Function,footer:Function,listStyle:{type:[Object,Function],default:()=>({})},disabled:Boolean,showSelectAll:{type:Boolean,default:!0},selectAllLabels:{type:Array,default:()=>[]},oneWay:Boolean,draggable:Boolean,pagination:{type:[Boolean,Object],default:void 0},status:String,locale:{type:Object,default:()=>({})},rootClassName:String,classNames:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},emits:["update:targetKeys","change","update:selectedKeys","selectChange","search","scroll","reorder"],setup(t,{emit:l}){const c=Kn("transfer"),y=qn(),a=f(()=>({...y.value.Transfer,...t.locale})),p=x([...t.defaultTargetKeys]),T=x([...t.defaultSelectedKeys]);nn(()=>t.targetKeys,n=>{n&&(p.value=[...n])}),nn(()=>t.selectedKeys,n=>{n&&(T.value=[...n])});const h=f(()=>t.targetKeys??p.value),F=f(()=>t.selectedKeys??T.value),d=f(()=>t.dataSource.map(n=>({...n,key:t.rowKey?t.rowKey(n):n.key}))),b=f(()=>d.value.filter(n=>!h.value.includes(n.key))),O=f(()=>new Map(d.value.map(n=>[n.key,n]))),P=f(()=>h.value.map(n=>O.value.get(n)).filter(Boolean)),C=f(()=>F.value.filter(n=>b.value.some(s=>s.key===n))),K=f(()=>F.value.filter(n=>P.value.some(s=>s.key===n)));function M(n){T.value=n,l("update:selectedKeys",n)}function Y(n,s){const o=n==="left"?K.value:C.value,r=n==="left"?[...s,...o]:[...o,...s];M(r),n==="left"?l("selectChange",s,K.value):l("selectChange",C.value,s)}function G(n){const s=n==="right"?C.value:K.value,o=new Set(d.value.filter(g=>g.disabled).map(g=>g.key)),r=s.filter(g=>!o.has(g)),v=new Set(r),k=n==="right"?[...r,...h.value]:h.value.filter(g=>!v.has(g));p.value=k,l("update:targetKeys",k);const m=n==="right"?K.value:C.value;M(m),n==="right"?l("selectChange",[],K.value):l("selectChange",C.value,[]),l("change",k,n,r)}const tn=()=>G("right"),I=()=>G("left"),S={left:null,right:null};function L(n,s,o,r){var w;const v=n==="left",k=v?C.value:K.value,m=(v?b.value:P.value).filter(j=>!j.disabled),g=m.findIndex(j=>j.key===s),D=new Set(k);if(r&&S[n]!==null){const j=Math.min(S[n],g),q=Math.max(S[n],g);for(let A=j;A<=q;A++){const U=(w=m[A])==null?void 0:w.key;U!==void 0&&D.add(U)}}else D.has(s)&&D.delete(s),o&&D.add(s),S[n]=o?g:null;Y(n,[...D])}function B(n,s,o){const r=n==="left"?C.value:K.value;let v;if(o==="replace")v=s;else if(o)v=[...new Set([...r,...s])];else{const k=new Set(s);v=r.filter(m=>!k.has(m))}S[n]=null,Y(n,v)}function z(n){const s=new Set(n),o=h.value.filter(r=>!s.has(r));p.value=o,l("update:targetKeys",o),M(C.value),l("change",o,"left",[...n])}function an(n,s,o){if(n===s)return;const r=[...h.value],v=r.indexOf(n),k=r.indexOf(s);if(v<0||k<0)return;const m=r.slice();m.splice(v,1);const g=m.indexOf(s),D=o?g+1:g;m.splice(D,0,n),p.value=m,l("update:targetKeys",m);const w={direction:"right",oldTargetKeys:r,newTargetKeys:m,activeKey:n,fromIndex:v,toIndex:m.indexOf(n)};l("reorder",w)}function sn(n){return typeof t.listStyle=="function"?t.listStyle({direction:n}):t.listStyle}const en=f(()=>C.value.length>0),on=f(()=>K.value.length>0),J=f(()=>t.operations||[]);function Q(n){var r,v;const s=n==="left",o=a.value;return{prefixCls:c,direction:n,titleText:((r=t.titles)==null?void 0:r[s?0:1])??"",dataSource:s?b.value:P.value,checkedKeys:s?C.value:K.value,disabled:t.disabled,showSearch:t.showSearch,showSelectAll:t.showSelectAll,showRemove:t.oneWay&&!s,draggable:!!t.draggable&&!s,pagination:t.pagination,selectAllLabel:(v=t.selectAllLabels)==null?void 0:v[s?0:1],render:t.render,filterOption:t.filterOption,footer:t.footer,listStyle:sn(n),classNames:t.classNames,styles:t.styles,searchPlaceholder:o.searchPlaceholder,notFoundContent:t.locale.notFoundContent??o.notFoundContent,itemUnit:o.itemUnit,itemsUnit:o.itemsUnit,selectAll:o.selectAll,deselectAll:o.deselectAll,selectCurrent:o.selectCurrent,selectInvert:o.selectInvert,removeAll:o.removeAll,removeCurrent:o.removeCurrent,onItemSelect:(k,m,g)=>L(n,k,m,g==null?void 0:g.shiftKey),onItemSelectAll:(k,m)=>B(n,k,m),onItemRemove:k=>z(k),onReorder:(k,m,g)=>an(k,m,g),onFilter:(k,m)=>l("search",k,m),onScroll:(k,m)=>l("scroll",k,m)}}return()=>e("div",{class:$(c,t.rootClassName,t.classNames.root,{[`${c}-disabled`]:t.disabled,[`${c}-status-error`]:t.status==="error",[`${c}-status-warning`]:t.status==="warning"}),style:t.styles.root},[e(yn,Q("left"),null),e("div",{class:$(`${c}-actions`,t.classNames.actions),style:t.styles.actions},[e(mn,{type:"primary",size:"small",icon:Dn,disabled:!en.value||t.disabled,onClick:tn},{default:()=>[J.value[0]]}),!t.oneWay&&e(mn,{type:"primary",size:"small",icon:Nn,disabled:!on.value||t.disabled,onClick:I},{default:()=>[J.value[1]]})]),e(yn,Q("right"),null)])}}),Pn=_({__name:"TransferBasic",setup(t){const l=Array.from({length:10},(y,a)=>({key:String(a),title:`选项 ${a+1}`,description:`描述 ${a+1}`,disabled:a===3})),c=x(["1","3","5"]);return(y,a)=>(E(),X(u(R),{"target-keys":c.value,"onUpdate:targetKeys":a[0]||(a[0]=p=>c.value=p),"data-source":u(l),titles:["待选","已选"],"show-search":""},null,8,["target-keys","data-source"]))}}),Ln=`<template>
  <Transfer v-model:target-keys="targetKeys" :data-source="dataSource" :titles="['待选', '已选']" show-search />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: \`选项 \${i + 1}\`,
  description: \`描述 \${i + 1}\`,
  disabled: i === 3,
}))

const targetKeys = ref(['1', '3', '5'])
<\/script>
`,Bn={style:{display:"flex","flex-direction":"column",gap:"24px"}},_n=_({__name:"TransferClassNames",setup(t){const c=(()=>{const F=[];for(let d=1;d<=10;d++)F.push({key:`item-${d}`,title:`选项 ${d}`,description:`这是选项 ${d} 的描述`});return F})(),y=x(["item-2","item-4"]),a=x(["item-1","item-3"]),p=x(["item-5","item-6"]),T=x(["item-7","item-8"]),h=x(["item-9","item-10"]);return(F,d)=>(E(),cn("div",Bn,[i("div",null,[d[5]||(d[5]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义列表容器和项：",-1)),e(u(R),{"target-keys":y.value,"onUpdate:targetKeys":d[0]||(d[0]=b=>y.value=b),"data-source":u(c),"class-names":{list:"custom-list",item:"custom-item"},titles:["源列表","目标列表"]},null,8,["target-keys","data-source"])]),i("div",null,[d[6]||(d[6]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义头部和标题：",-1)),e(u(R),{"target-keys":a.value,"onUpdate:targetKeys":d[1]||(d[1]=b=>a.value=b),"data-source":u(c),"class-names":{header:"custom-header",title:"custom-title"},titles:["可选项","已选项"]},null,8,["target-keys","data-source"])]),i("div",null,[d[7]||(d[7]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义操作按钮区：",-1)),e(u(R),{"target-keys":p.value,"onUpdate:targetKeys":d[2]||(d[2]=b=>p.value=b),"data-source":u(c),"class-names":{actions:"custom-actions"},titles:["左侧","右侧"]},null,8,["target-keys","data-source"])]),i("div",null,[d[8]||(d[8]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"完整自定义（组合使用）：",-1)),e(u(R),{"target-keys":T.value,"onUpdate:targetKeys":d[3]||(d[3]=b=>T.value=b),"data-source":u(c),"class-names":{root:"complete-root",section:"complete-section",header:"complete-header",title:"complete-title",body:"complete-body",list:"complete-list",item:"complete-item",actions:"complete-actions"},titles:["待选区","已选区"]},null,8,["target-keys","data-source"])]),i("div",null,[d[9]||(d[9]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式（styles）：",-1)),e(u(R),{"target-keys":h.value,"onUpdate:targetKeys":d[4]||(d[4]=b=>h.value=b),"data-source":u(c),styles:{section:{border:"2px solid #1890ff",borderRadius:"8px"},header:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"12px 16px"},list:{background:"#fafafa"},item:{padding:"12px 16px",borderRadius:"4px"}},titles:["来源","目标"]},null,8,["target-keys","data-source"])])]))}}),Fn=Cn(_n,[["__scopeId","data-v-736c8795"]]),En=`<template>
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
import { Transfer } from '@hmfw/ant-design'

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
`,zn=_({__name:"TransferCustom",setup(t){const l=Array.from({length:10},(y,a)=>({key:String(a),title:`选项 ${a+1}`})),c=x(["1","3"]);return(y,a)=>(E(),X(u(R),{"target-keys":c.value,"onUpdate:targetKeys":a[0]||(a[0]=p=>c.value=p),"data-source":u(l),titles:["待选","已选"],render:p=>`[${p.title}]`},null,8,["target-keys","data-source","render"]))}}),jn=`<template>
  <Transfer
    v-model:target-keys="targetKeys"
    :data-source="dataSource"
    :titles="['待选', '已选']"
    :render="(item) => \`[\${item.title}]\`"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: \`选项 \${i + 1}\`,
}))

const targetKeys = ref<string[]>(['1', '3'])
<\/script>
`,Un={style:{"margin-top":"12px",color:"rgba(0, 0, 0, 0.45)","font-size":"12px"}},Vn=_({__name:"TransferDraggable",setup(t){const l=Array.from({length:8},(a,p)=>({key:String(p),title:`Item ${p+1}`})),c=x(["0","1","2","3"]);function y(a){console.log("reorder",a)}return(a,p)=>(E(),cn(pn,null,[e(u(R),{"target-keys":c.value,"onUpdate:targetKeys":p[0]||(p[0]=T=>c.value=T),"data-source":u(l),titles:["源","目标（可拖拽排序）"],draggable:"",onReorder:y},null,8,["target-keys","data-source"]),i("p",Un," 当前顺序："+An(c.value.join(", ")||"（空）"),1)],64))}}),Mn=`<template>
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
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem, TransferReorderInfo } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 8 }, (_, i) => ({
  key: String(i),
  title: \`Item \${i + 1}\`,
}))

const targetKeys = ref<(string | number)[]>(['0', '1', '2', '3'])

function handleReorder(info: TransferReorderInfo) {
  console.log('reorder', info)
}
<\/script>
`,Wn=_({__name:"TransferOneWay",setup(t){const l=Array.from({length:10},(y,a)=>({key:String(a),title:`Item ${a+1}`})),c=x(["1","3"]);return(y,a)=>(E(),X(u(R),{"target-keys":c.value,"onUpdate:targetKeys":a[0]||(a[0]=p=>c.value=p),"data-source":u(l),titles:["源","目标"],"one-way":""},null,8,["target-keys","data-source"]))}}),Hn=`<template>
  <Transfer v-model:target-keys="targetKeys" :data-source="dataSource" :titles="['源', '目标']" one-way />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: String(i),
  title: \`Item \${i + 1}\`,
}))

const targetKeys = ref<string[]>(['1', '3'])
<\/script>
`,Xn=_({__name:"TransferPagination",setup(t){const l=Array.from({length:20},(y,a)=>({key:String(a),title:`选项 ${a+1}`})),c=x(["2","5","8"]);return(y,a)=>(E(),X(u(R),{"target-keys":c.value,"onUpdate:targetKeys":a[0]||(a[0]=p=>c.value=p),"data-source":u(l),titles:["源","目标"],pagination:{pageSize:5}},null,8,["target-keys","data-source"]))}}),Yn=`<template>
  <Transfer
    v-model:target-keys="targetKeys"
    :data-source="dataSource"
    :titles="['源', '目标']"
    :pagination="{ pageSize: 5 }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 20 }, (_, i) => ({
  key: String(i),
  title: \`选项 \${i + 1}\`,
}))

const targetKeys = ref<string[]>(['2', '5', '8'])
<\/script>
`,Gn=_({__name:"TransferSearch",setup(t){const l=Array.from({length:20},(y,a)=>({key:String(a),title:`选项 ${a+1}`,description:`描述 ${a+1}`,disabled:a%8===3})),c=x(["1","3","5"]);return(y,a)=>(E(),X(u(R),{"target-keys":c.value,"onUpdate:targetKeys":a[0]||(a[0]=p=>c.value=p),"data-source":u(l),titles:["待选","已选"],"show-search":""},null,8,["target-keys","data-source"]))}}),Jn=`<template>
  <Transfer v-model:target-keys="targetKeys" :data-source="dataSource" :titles="['待选', '已选']" show-search />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Transfer } from '@hmfw/ant-design'
import type { TransferItem } from '@hmfw/ant-design'

const dataSource: TransferItem[] = Array.from({ length: 20 }, (_, i) => ({
  key: String(i),
  title: \`选项 \${i + 1}\`,
  description: \`描述 \${i + 1}\`,
  disabled: i % 8 === 3,
}))

const targetKeys = ref<string[]>(['1', '3', '5'])
<\/script>
`,Qn={class:"markdown-body"},wt={__name:"transfer",setup(t,{expose:l}){return l({frontmatter:{}}),(y,a)=>{const p=In("DemoBlock");return E(),cn("div",Qn,[a[0]||(a[0]=i("h1",{id:"transfer-穿梭框",tabindex:"-1"},"Transfer 穿梭框",-1)),a[1]||(a[1]=i("p",null,"双栏穿梭选择框，用于将元素从一列移入另一列。",-1)),a[2]||(a[2]=i("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=i("ul",null,[i("li",null,"需要在两个集合之间进行选择，且需要直观展示两个集合的内容时"),i("li",null,"用于将可选项在两个列表之间移动")],-1)),a[4]||(a[4]=i("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=i("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),a[6]||(a[6]=i("p",null,"最简单的用法，展示了数据在左右两栏之间的移动。",-1)),e(p,{title:"基础用法",source:u(Ln)},{default:V(()=>[e(Pn)]),_:1},8,["source"]),a[7]||(a[7]=i("h3",{id:"带搜索框",tabindex:"-1"},"带搜索框",-1)),a[8]||(a[8]=i("p",null,"支持搜索功能，可以快速找到目标项。",-1)),e(p,{title:"带搜索框",source:u(Jn)},{default:V(()=>[e(Gn)]),_:1},8,["source"]),a[9]||(a[9]=i("h3",{id:"自定义渲染",tabindex:"-1"},"自定义渲染",-1)),a[10]||(a[10]=i("p",null,"可以自定义每项的渲染内容。",-1)),e(p,{title:"自定义渲染",source:u(jn)},{default:V(()=>[e(zn)]),_:1},8,["source"]),a[11]||(a[11]=i("h3",{id:"分页",tabindex:"-1"},"分页",-1)),a[12]||(a[12]=i("p",null,"数据较多时，可以使用分页。",-1)),e(p,{title:"分页",source:u(Yn)},{default:V(()=>[e(Xn)]),_:1},8,["source"]),a[13]||(a[13]=i("h3",{id:"单向模式",tabindex:"-1"},"单向模式",-1)),a[14]||(a[14]=i("p",null,"单向模式下，只能从左往右移动，右侧项可单独删除。",-1)),e(p,{title:"单向模式",source:u(Hn)},{default:V(()=>[e(Wn)]),_:1},8,["source"]),a[15]||(a[15]=i("h3",{id:"拖拽排序",tabindex:"-1"},"拖拽排序",-1)),a[16]||(a[16]=i("p",null,[H("设置 "),i("code",null,"draggable"),H(" 后，右侧列表项可通过 HTML5 拖拽调整顺序。")],-1)),e(p,{title:"拖拽排序",source:u(Mn)},{default:V(()=>[e(Vn)]),_:1},8,["source"]),a[17]||(a[17]=i("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[18]||(a[18]=i("p",null,[H("通过 "),i("code",null,"classNames"),H(" / "),i("code",null,"styles"),H(" 对列表、列表项、头部、操作按钮等子元素做细粒度样式控制。")],-1)),e(p,{title:"语义化 className 与 style",source:u(En)},{default:V(()=>[e(Fn)]),_:1},8,["source"]),a[19]||(a[19]=$n(`<h2 id="api" tabindex="-1">API</h2><h3 id="transfer-props" tabindex="-1">Transfer Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据源</td><td><code>TransferItem[]</code></td><td><code>[]</code></td></tr><tr><td>targetKeys (v-model)</td><td>右侧列表的 key 集合</td><td><code>TransferKey[]</code></td><td><code>[]</code></td></tr><tr><td>selectedKeys (v-model)</td><td>选中项的 key 集合</td><td><code>TransferKey[]</code></td><td><code>[]</code></td></tr><tr><td>titles</td><td>标题集合</td><td><code>(VNode | string)[]</code></td><td><code>[&#39;&#39;, &#39;&#39;]</code></td></tr><tr><td>operations</td><td>操作按钮文案（已废弃）</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>render</td><td>自定义渲染函数</td><td><code>(item: TransferItem) =&gt; RenderResult</code></td><td>-</td></tr><tr><td>rowKey</td><td>自定义提取 key</td><td><code>(record: TransferItem) =&gt; TransferKey</code></td><td>-</td></tr><tr><td>showSearch</td><td>显示搜索框</td><td><code>boolean | TransferSearchOption</code></td><td><code>false</code></td></tr><tr><td>filterOption</td><td>自定义搜索函数</td><td><code>(input: string, item: TransferItem, direction: TransferDirection) =&gt; boolean</code></td><td>-</td></tr><tr><td>footer</td><td>列表底部渲染</td><td><code>(info: TransferListContext) =&gt; VNode | string | null</code></td><td>-</td></tr><tr><td>listStyle</td><td>列表样式</td><td><code>CSSProperties | ((info: { direction: TransferDirection }) =&gt; CSSProperties)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSelectAll</td><td>是否展示全选勾选框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>selectAllLabels</td><td>自定义全选文案</td><td><code>SelectAllLabel[]</code></td><td>-</td></tr><tr><td>oneWay</td><td>单向模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>draggable</td><td>是否允许通过拖拽对右侧列表项排序</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>分页配置</td><td><code>boolean | PaginationType</code></td><td>-</td></tr><tr><td>status</td><td>校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>locale</td><td>文案配置</td><td><code>Partial&lt;TransferLocale&gt;</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根元素 class</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TransferSemanticClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TransferSemanticStyles</code></td><td>-</td></tr></tbody></table><h3 id="transfer-events" tabindex="-1">Transfer Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>右侧列表变化时触发</td><td><code>(targetKeys: TransferKey[], direction: TransferDirection, moveKeys: TransferKey[])</code></td></tr><tr><td>selectChange</td><td>选中项变化时触发</td><td><code>(sourceSelectedKeys: TransferKey[], targetSelectedKeys: TransferKey[])</code></td></tr><tr><td>search</td><td>搜索框内容变化时触发</td><td><code>(direction: TransferDirection, value: string)</code></td></tr><tr><td>scroll</td><td>列表滚动时触发</td><td><code>(direction: TransferDirection, e: Event)</code></td></tr><tr><td>reorder</td><td>右侧列表通过拖拽重新排序后触发</td><td><code>(info: TransferReorderInfo)</code></td></tr></tbody></table><h3 id="transferitem" tabindex="-1">TransferItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td></tr><tr><td>title</td><td>标题</td><td><code>string</code></td></tr><tr><td>description</td><td>描述</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr></tbody></table><h3 id="paginationtype" tabindex="-1">PaginationType</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">PaginationType</span> <span class="token operator">=</span>
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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义列表样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transfer</span>
    <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>target-keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>targetKeys<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      section: &#39;my-section&#39;,
      list: &#39;my-list&#39;,
      item: &#39;my-item&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义操作按钮区域 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transfer</span>
    <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>target-keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>targetKeys<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      actions: &#39;my-actions&#39;,
      header: &#39;my-header&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义列表项内容 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transfer</span>
    <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>target-keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>targetKeys<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      itemContent: &#39;my-item-content&#39;,
      itemIcon: &#39;my-item-icon&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-section)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #1890ff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-list)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> #ffffff<span class="token punctuation">,</span> #f5f5f5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-item)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-item:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #e6f7ff<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-actions)</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-header)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-item-content)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-item-icon)</span> <span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制间距 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transfer</span>
    <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>target-keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>targetKeys<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      section: { padding: &#39;16px&#39; },
      item: { padding: &#39;12px 16px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义头部和操作区 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transfer</span>
    <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>target-keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>targetKeys<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      header: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        color: &#39;white&#39;,
        padding: &#39;12px&#39;,
      },
      actions: {
        margin: &#39;0 24px&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Transfer</span>
    <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dataSource<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>target-keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>targetKeys<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { maxWidth: &#39;800px&#39;, margin: &#39;0 auto&#39; },
      list: { maxHeight: &#39;400px&#39; },
      itemContent: { fontSize: &#39;14px&#39;, fontWeight: &#39;500&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>section</code> 会同时应用于左右两侧列表容器</li><li><code>item</code> / <code>itemIcon</code> / <code>itemContent</code> 会应用于所有列表项（左右两侧）</li><li>对于列表样式（<code>listStyle</code> prop），建议优先使用组件提供的 <code>listStyle</code> 属性；<code>styles.list</code> 适合做细微调整</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-fill-quaternary</code></td><td>四级填充色</td><td><code>rgba(0,0,0,0.02)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题色背景</td><td><code>#e6f4ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg-hover</code></td><td>主题色背景悬停态</td><td><code>#bae0ff</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用容器背景色</td><td><code>rgba(0,0,0,0.04)</code></td></tr></tbody></table>`,41))])}}};export{wt as default};
