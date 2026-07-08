import{a as Ue}from"./index-CODhpm4E.js";import{D as ln}from"./index-CFwYSLFM.js";import{B as re}from"./Button-Ddb1eo4r.js";import{C as ke}from"./Checkbox-CQ9x5A33.js";import{d as z,r as C,c as a,u as dn,C as rn,k as cn,l as un,m as ve,s as de,g as N,F as Ze,a as M,o as P,q as G,e as k,b as ce,f as d,_ as pn,L as mn,A as en,h as gn,w as O,i as kn}from"./index-BOp1Gurx.js";import{c as F}from"./cls-S9IiI6wd.js";import{F as yn}from"./FilterOutlined-B46e9Mr9.js";import{M as Ge}from"./MinusOutlined-xQZWzai7.js";import{P as Xe}from"./PlusOutlined-CMEXLZVM.js";import{E as fn}from"./Empty-SLwLg-bW.js";import{P as xn}from"./Pagination-CC3Mx5As.js";import{S as hn}from"./Spin-B9_1lO_a.js";import{I as we}from"./Input-l0tj8R8I.js";import"./index-BkscIBoQ.js";import"./Layout-7jD3kKHz.js";import"./LeftOutlined-BFfEXMCv.js";import"./RightOutlined-HDxSh9WB.js";import"./event-CMqgYmge.js";import"./Trigger-BSBv38Hy.js";import"./Tooltip-Ds-UX-n_.js";import"./DownOutlined-P5RWco7A.js";import"./LoadingOutlined-DpyU4f5h.js";import"./Select-BK5TX-Ik.js";import"./VirtualList-BzM3Xf6X.js";import"./CloseOutlined-KObd1yob.js";import"./EyeOutlined-CSP8sowO.js";import"./SearchOutlined-C5r1MMmZ.js";const bn=z({name:"FilterDropdown",props:{prefixCls:{type:String,required:!0},filters:{type:Array,default:()=>[]},filteredValue:{type:Array,default:()=>[]},filterMultiple:{type:Boolean,default:!0},locale:{type:Object,default:()=>({})},onConfirm:{type:Function,required:!0}},setup(e){const c=C([...e.filteredValue.filter(f=>typeof f=="string"||typeof f=="number")]),s=(f,J)=>{e.filterMultiple?J?c.value=[...c.value,f]:c.value=c.value.filter(S=>S!==f):c.value=J?[f]:[]},i=()=>{e.onConfirm(c.value)},n=()=>{c.value=[],e.onConfirm([])},l=()=>e.filters.map(f=>{const J=c.value.includes(f.value);return a("div",{key:String(f.value),class:`${e.prefixCls}-dropdown-menu-item`},[a(ke,{checked:J,onChange:S=>s(f.value,S.target.checked)},{default:()=>[f.text]})])});return()=>a("div",{class:`${e.prefixCls}-dropdown`},[a("div",{class:`${e.prefixCls}-dropdown-menu`},[l()]),a("div",{class:`${e.prefixCls}-dropdown-btns`},[a(re,{size:"small",onClick:n},{default:()=>[e.locale.filterReset||"重置"]}),a(re,{type:"primary",size:"small",onClick:i},{default:()=>[e.locale.filterConfirm||"确定"]})])])}}),vn={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},T=z({name:"Table",props:{dataSource:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},rowKey:[String,Function],loading:Boolean,bordered:Boolean,size:{type:String,default:"default"},scroll:Object,pagination:{type:[Boolean,Object],default:void 0},rowSelection:Object,expandable:Object,locale:Object,showHeader:{type:Boolean,default:!0},sticky:[Boolean,Object],summary:Function,title:[String,Function],footer:[String,Function],onRow:Function,onHeaderRow:Function,onChange:Function,classNames:Object,styles:Object,rootClassName:String},emits:["change"],setup(e,{emit:c}){var qe,_e,Ne;const s=dn("table"),i=rn(),n=C(),l=C(0),f=C(new Map),J=54,S=M(()=>{var t;return!!((t=e.scroll)!=null&&t.y&&e.dataSource&&e.dataSource.length>20)}),$=M(()=>{var t;return(t=e.scroll)!=null&&t.y?typeof e.scroll.y=="number"?e.scroll.y:parseInt(e.scroll.y)||400:0}),I=(t,o)=>{const p=Y(t,o);return f.value.get(p)||J},H=C("xxl"),ye=()=>{var p;const t=window.innerWidth,o=((p=Object.entries(vn).reverse().find(([u,m])=>t>=m))==null?void 0:p[0])||"xs";H.value=o};cn(()=>{ye(),window.addEventListener("resize",ye)}),un(()=>{window.removeEventListener("resize",ye)});const X=M(()=>{var t;return((t=e.columns)==null?void 0:t.filter(o=>!o.responsive||o.responsive.length===0?!0:o.responsive.includes(H.value)))??[]}),K=C([]),L=C({}),se=C({}),Se=C(1),Ie=C(10);ve(()=>X.value,t=>{t&&t.forEach(o=>{const p=o.key??o.dataIndex??"";o.filteredValue!==void 0&&o.filteredValue!==null&&(L.value[p]=o.filteredValue)})},{immediate:!0});const Y=(t,o)=>typeof e.rowKey=="function"?e.rowKey(t):typeof e.rowKey=="string"?t[e.rowKey]:t.key??String(o),Ce=(t,o)=>{if(o.dataIndex)return t[o.dataIndex]},Te=M(()=>{let t=[...e.dataSource??[]];return X.value.forEach(o=>{const p=o.key??o.dataIndex??"",u=L.value[p];u!=null&&u.length&&o.onFilter&&(t=t.filter(m=>u.some(y=>o.onFilter(y,m))))}),t}),te=M(()=>{const t=[...Te.value];return K.value.length===0||t.sort((o,p)=>{for(const u of K.value){const m=u.column;if(!m.sorter||!u.order)continue;const y=typeof m.sorter=="function"?m.sorter:void 0;if(!y)continue;const g=y(o,p);if(g!==0)return u.order==="descend"?-g:g}return 0}),t}),D=M(()=>{if(e.pagination===!1)return null;const t=typeof e.pagination=="object"?e.pagination:{};return{pageSize:(t==null?void 0:t.pageSize)??Ie.value,current:(t==null?void 0:t.current)??Se.value,total:(t==null?void 0:t.total)??te.value.length,onChange:t==null?void 0:t.onChange,showQuickJumper:t==null?void 0:t.showQuickJumper,showSizeChanger:t==null?void 0:t.showSizeChanger,showTotal:t==null?void 0:t.showTotal,pageSizeOptions:t==null?void 0:t.pageSizeOptions}}),h=M(()=>{if(!D.value)return te.value;const{current:t,pageSize:o}=D.value,p=(t-1)*o;return te.value.slice(p,p+o)}),fe=M(()=>{if(!S.value)return 0;let t=0,o=0;const p=5;for(;o<h.value.length;o++){if(t>=l.value)return Math.max(0,o-p);t+=I(h.value[o],o)}return 0}),xe=M(()=>{if(!S.value)return h.value.length;let t=0,o=0;const p=5,u=l.value+$.value;for(let m=0;m<h.value.length;m++)if(t+=I(h.value[m],m),t>=u){o=m;break}return Math.min(h.value.length,o+p+1)}),nn=M(()=>S.value?h.value.slice(fe.value,xe.value):h.value),$e=M(()=>{if(!S.value)return 0;let t=0;for(let o=0;o<fe.value;o++)t+=I(h.value[o],o);return t}),tn=t=>{if(!S.value)return;const o=t.target;l.value=o.scrollTop},De=(t,o)=>{var j;if(!t.sorter)return;const p=t.key??t.dataIndex??"",u=(o==null?void 0:o.shiftKey)||typeof t.sorter=="object"&&"multiple"in t.sorter,m=K.value.findIndex(b=>b.key===p);if(m>=0){const b=K.value[m];b.order==="ascend"?K.value[m]={key:p,order:"descend",column:t}:b.order==="descend"&&(K.value=K.value.filter((ae,W)=>W!==m))}else{const b={key:p,order:"ascend",column:t};u?K.value=[...K.value,b]:K.value=[b]}const y=K.value.map(b=>({column:b.column,order:b.order,field:b.column.dataIndex,columnKey:b.key})),g={currentDataSource:te.value,action:"sort"},R=y.length===1?y[0]:y;c("change",D.value,L.value,R,g),(j=e.onChange)==null||j.call(e,D.value,L.value,R,g)},an=(t,o)=>{var g,R,j;Se.value=t,Ie.value=o,(R=(g=D.value)==null?void 0:g.onChange)==null||R.call(g,t,o);const p={currentDataSource:h.value,action:"paginate"},u=K.value.map(b=>({column:b.column,order:b.order,field:b.column.dataIndex,columnKey:b.key})),m=u.length===1?u[0]:u,y={...D.value,current:t,pageSize:o};c("change",y,L.value,m,p),(j=e.onChange)==null||j.call(e,y,L.value,m,p)},V=C(((qe=e.rowSelection)==null?void 0:qe.selectedRowKeys)??[]);ve(()=>{var t;return(t=e.rowSelection)==null?void 0:t.selectedRowKeys},t=>{t&&(V.value=t)});const Q=C(((_e=e.expandable)==null?void 0:_e.expandedRowKeys)??((Ne=e.expandable)==null?void 0:Ne.defaultExpandedRowKeys)??[]);ve(()=>{var t;return(t=e.expandable)==null?void 0:t.expandedRowKeys},t=>{t!==void 0&&(Q.value=t)});const Re=(t,o)=>{var u,m,y,g;const p=Y(o,0);t?Q.value=[...Q.value,p]:Q.value=Q.value.filter(R=>R!==p),(m=(u=e.expandable)==null?void 0:u.onExpand)==null||m.call(u,t,o),(g=(y=e.expandable)==null?void 0:y.onExpandedRowsChange)==null||g.call(y,Q.value)},sn=(t,o)=>{var y;L.value[t]=o,se.value[t]=!1;const p={currentDataSource:Te.value,action:"filter"},u=K.value.map(g=>({column:g.column,order:g.order,field:g.column.dataIndex,columnKey:g.key})),m=u.length===1?u[0]:u;c("change",D.value,L.value,m,p),(y=e.onChange)==null||y.call(e,D.value,L.value,m,p)},ie=(t,o,p)=>{var g,R,j,b,ae;if(!e.rowSelection)return;let u,m="single";e.rowSelection.type==="radio"?u=p?[t]:[]:(u=p?[...V.value,t]:V.value.filter(W=>W!==t),m="multiple"),V.value=u;const y=((g=e.dataSource)==null?void 0:g.filter((W,ue)=>u.includes(Y(W,ue))))??[];(j=(R=e.rowSelection).onChange)==null||j.call(R,u,y,{type:m}),(ae=(b=e.rowSelection).onSelect)==null||ae.call(b,o,p,y,new Event("change"))},on=t=>{var u,m,y,g;if(!e.rowSelection)return;const o=t?h.value.map((R,j)=>Y(R,j)):[];V.value=o;const p=t?[...h.value]:[];(m=(u=e.rowSelection).onChange)==null||m.call(u,o,p,{type:t?"all":"none"}),(g=(y=e.rowSelection).onSelectAll)==null||g.call(y,t,p,h.value)};return()=>{var ae,W,ue,Ae,Ee,Fe,Ke,ze,Be,Pe,Je,je,Oe,Le,Me,He,Ve,Ye,Qe;const t=h.value.length===0,o=!!e.rowSelection,p=((ae=e.rowSelection)==null?void 0:ae.type)==="radio",u=!!((W=e.expandable)!=null&&W.expandedRowRender),m=h.value.length>0&&h.value.every((r,x)=>V.value.includes(Y(r,x))),y=h.value.some((r,x)=>V.value.includes(Y(r,x))),g=(X.value.length??0)+(o?1:0)+(u?1:0),R=typeof e.sticky=="object"?e.sticky:e.sticky?{offsetHeader:0}:void 0,j=R?{position:"sticky",top:`${R.offsetHeader||0}px`,zIndex:3}:{},b=a("div",{class:F(s,`${s}-${e.size}`,{[`${s}-bordered`]:e.bordered,[`${s}-loading`]:e.loading,[`${s}-scroll-horizontal`]:!!((ue=e.scroll)!=null&&ue.x),[`${s}-sticky`]:!!R},e.rootClassName,(Ae=e.classNames)==null?void 0:Ae.root),style:(Ee=e.styles)==null?void 0:Ee.root,role:"region","aria-label":"Data table"},[e.title&&a("div",{class:`${s}-title`},[typeof e.title=="function"?e.title(te.value):e.title]),a("div",{class:`${s}-container`},[a("div",{ref:n,class:`${s}-content`,style:{...(Fe=e.scroll)!=null&&Fe.x?{overflowX:"auto"}:{},...S.value?{overflowY:"auto",maxHeight:typeof((Ke=e.scroll)==null?void 0:Ke.y)=="number"?`${e.scroll.y}px`:(ze=e.scroll)==null?void 0:ze.y}:{}},onScroll:tn,role:"presentation"},[a("table",{role:"table","aria-rowcount":h.value.length,"aria-colcount":g,style:(Be=e.scroll)!=null&&Be.x?{minWidth:typeof e.scroll.x=="number"?`${e.scroll.x}px`:e.scroll.x}:{}},[e.showHeader&&a("thead",{class:F(`${s}-thead`,(Pe=e.classNames)==null?void 0:Pe.header),role:"rowgroup",style:{...j,...(Je=e.styles)==null?void 0:Je.header}},[a("tr",de(((je=e.onHeaderRow)==null?void 0:je.call(e,X.value??[],0))??{},{role:"row"}),[u&&a("th",{class:`${s}-cell ${s}-expand-icon-col`,style:{width:"48px"},role:"columnheader"},null),o&&a("th",{class:`${s}-cell ${s}-selection-column`,role:"columnheader","aria-label":"Row selection"},[!p&&a(ke,{checked:m,indeterminate:y&&!m,onChange:r=>on(r)},null)]),X.value.map(r=>{var U;const x=r.key??r.dataIndex??"",w=K.value.find(v=>v.key===x),q=!!w,A=r.fixed==="left",B=r.fixed==="right",Z=r.filters&&r.filters.length>0,ee=((U=L.value[x])==null?void 0:U.length)>0;return a("th",{key:x,scope:"col",role:"columnheader","aria-sort":q?w.order==="ascend"?"ascending":"descending":r.sorter?"none":void 0,tabindex:r.sorter?0:void 0,onKeydown:v=>{r.sorter&&(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),De(r,v))},class:F(`${s}-cell`,{[`${s}-column-sort`]:q,[`${s}-column-has-sorters`]:!!r.sorter,[`${s}-cell-fix-left`]:A,[`${s}-cell-fix-right`]:B}),style:{width:r.width?typeof r.width=="number"?`${r.width}px`:r.width:void 0,textAlign:r.align??"left"},onClick:v=>r.sorter&&De(r,v)},[a("div",{class:`${s}-column-title`},[r.title,r.sorter&&a("span",{class:`${s}-column-sorter`},[a("span",{class:F(`${s}-column-sorter-up`,{active:q&&(w==null?void 0:w.order)==="ascend"})},[N("▲")]),a("span",{class:F(`${s}-column-sorter-down`,{active:q&&(w==null?void 0:w.order)==="descend"})},[N("▼")])]),Z&&a(ln,{trigger:["click"],open:se.value[x],"onUpdate:open":v=>se.value[x]=v},{default:()=>a("span",{class:F(`${s}-filter-trigger`,{active:ee}),onClick:v=>{v.stopPropagation(),se.value[x]=!se.value[x]}},[a(yn,null,null)]),overlay:()=>a(bn,{prefixCls:s,filters:r.filters,filteredValue:L.value[x]||[],filterMultiple:r.filterMultiple??!0,locale:i.value.Table,onConfirm:v=>sn(x,v)},null)})])])})])]),a("tbody",{class:F(`${s}-tbody`,(Oe=e.classNames)==null?void 0:Oe.body),role:"rowgroup",style:(Le=e.styles)==null?void 0:Le.body},[t?a("tr",{class:`${s}-placeholder`,role:"row"},[a("td",{colspan:g,role:"cell"},[a(fn,{description:((Me=e.locale)==null?void 0:Me.emptyText)??i.value.Table.emptyText},null)])]):S.value?a(Ze,null,[$e.value>0&&a("tr",{style:{height:`${$e.value}px`},"aria-hidden":"true"},[a("td",{colspan:g},null)]),nn.value.flatMap((r,x)=>{var ee,U,v,ne,oe,_;const w=fe.value+x,q=Y(r,w),A=V.value.includes(q),B=Q.value.includes(q),Z=[a("tr",de({key:q,role:"row","aria-selected":o?A:void 0,"aria-expanded":u?B:void 0,class:F(`${s}-row`,{[`${s}-row-selected`]:A},(ee=e.classNames)==null?void 0:ee.row),style:(U=e.styles)==null?void 0:U.row},((v=e.onRow)==null?void 0:v.call(e,r,w))??{}),[u&&a("td",{class:`${s}-cell ${s}-expand-icon-cell`,role:"cell"},[a("button",{type:"button",class:F(`${s}-expand-icon`,{[`${s}-expand-icon-expanded`]:B}),onClick:()=>Re(!B,r),"aria-label":B?"Collapse row":"Expand row","aria-expanded":B},[B?a(Ge,null,null):a(Xe,null,null)])]),o&&a("td",{class:`${s}-cell ${s}-selection-column`,role:"cell"},[p?a(Ue,{checked:A,onChange:E=>ie(q,r,E)},null):a(ke,de({checked:A,onChange:E=>ie(q,r,E)},((oe=(ne=e.rowSelection)==null?void 0:ne.getCheckboxProps)==null?void 0:oe.call(ne,r))??{}),null)]),X.value.map(E=>{var le,We;const pe=E.key??E.dataIndex??"",me=Ce(r,E),he=E.render?E.render(me,r,w):me,be=E.fixed==="left",ge=E.fixed==="right";return a("td",{key:pe,role:"cell",class:F(`${s}-cell`,{[`${s}-cell-ellipsis`]:E.ellipsis,[`${s}-cell-fix-left`]:be,[`${s}-cell-fix-right`]:ge},(le=e.classNames)==null?void 0:le.cell),style:{textAlign:E.align??"left",...(We=e.styles)==null?void 0:We.cell}},[he])})])];return u&&B&&((_=e.expandable)!=null&&_.expandedRowRender)&&Z.push(a("tr",{key:`${q}-expanded`,class:`${s}-expanded-row`,role:"row"},[a("td",{colspan:g,class:`${s}-cell`,role:"cell"},[e.expandable.expandedRowRender(r,w,0,B)])])),Z}),xe.value<h.value.length&&(()=>{let r=0;for(let x=xe.value;x<h.value.length;x++)r+=I(h.value[x],x);return r>0?a("tr",{style:{height:`${r}px`},"aria-hidden":"true"},[a("td",{colspan:g},null)]):null})()]):h.value.flatMap((r,x)=>{var Z,ee,U,v,ne,oe;const w=Y(r,x),q=V.value.includes(w),A=Q.value.includes(w),B=[a("tr",de({key:w,role:"row","aria-selected":o?q:void 0,"aria-expanded":u?A:void 0,class:F(`${s}-row`,{[`${s}-row-selected`]:q},(Z=e.classNames)==null?void 0:Z.row),style:(ee=e.styles)==null?void 0:ee.row},((U=e.onRow)==null?void 0:U.call(e,r,x))??{}),[u&&a("td",{class:`${s}-cell ${s}-expand-icon-cell`,role:"cell"},[a("button",{type:"button",class:F(`${s}-expand-icon`,{[`${s}-expand-icon-expanded`]:A}),onClick:()=>Re(!A,r),"aria-label":A?"Collapse row":"Expand row","aria-expanded":A},[A?a(Ge,null,null):a(Xe,null,null)])]),o&&a("td",{class:`${s}-cell ${s}-selection-column`,role:"cell"},[p?a(Ue,{checked:q,onChange:_=>ie(w,r,_)},null):a(ke,de({checked:q,onChange:_=>ie(w,r,_)},((ne=(v=e.rowSelection)==null?void 0:v.getCheckboxProps)==null?void 0:ne.call(v,r))??{}),null)]),X.value.map(_=>{var ge,le;const E=_.key??_.dataIndex??"",pe=Ce(r,_),me=_.render?_.render(pe,r,x):pe,he=_.fixed==="left",be=_.fixed==="right";return a("td",{key:E,role:"cell",class:F(`${s}-cell`,{[`${s}-cell-ellipsis`]:_.ellipsis,[`${s}-cell-fix-left`]:he,[`${s}-cell-fix-right`]:be},(ge=e.classNames)==null?void 0:ge.cell),style:{textAlign:_.align??"left",...(le=e.styles)==null?void 0:le.cell}},[me])})])];return u&&A&&((oe=e.expandable)!=null&&oe.expandedRowRender)&&B.push(a("tr",{key:`${w}-expanded`,class:`${s}-expanded-row`,role:"row"},[a("td",{colspan:g,class:`${s}-cell`,role:"cell"},[e.expandable.expandedRowRender(r,x,0,A)])])),B})]),e.summary&&!t&&a("tfoot",{class:`${s}-summary`},[e.summary(h.value)])])])]),e.footer&&a("div",{class:F(`${s}-footer`,(He=e.classNames)==null?void 0:He.footer),style:(Ve=e.styles)==null?void 0:Ve.footer},[typeof e.footer=="function"?e.footer(te.value):e.footer]),D.value&&!t&&a("div",{class:F(`${s}-pagination`,`${s}-pagination-right`,(Ye=e.classNames)==null?void 0:Ye.pagination),style:(Qe=e.styles)==null?void 0:Qe.pagination},[a(xn,{total:D.value.total,pageSize:D.value.pageSize,current:D.value.current,showQuickJumper:D.value.showQuickJumper,showSizeChanger:D.value.showSizeChanger,showTotal:D.value.showTotal,pageSizeOptions:D.value.pageSizeOptions,onChange:an},null)])]);return e.loading?a("div",{style:{position:"relative"}},[a(hn,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10}},null),a("div",{style:{opacity:.5}},[b])]):b}}}),wn=z({__name:"TableBasic",setup(e){const c=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],s=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(i,n)=>(P(),G(k(T),{"data-source":c,columns:s,"row-key":"key"}))}}),Sn=`<template>
  <Table :data-source="dataSource" :columns="columns" row-key="key" />
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'

const dataSource = [
  { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
  { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
]

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '住址', dataIndex: 'address', key: 'address' },
]
<\/script>
`,In={class:"demo-table-classnames"},Cn={class:"demo-section"},Tn={class:"demo-section"},$n={class:"demo-section"},Dn={class:"demo-section"},Rn={class:"demo-section"},qn={class:"demo-section"},_n=z({__name:"TableClassNames",setup(e){const c=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"},{key:"3",name:"李小明",age:28,address:"上城区西湖大道3号"}],s=[...c,{key:"4",name:"王大锤",age:35,address:"滨江区江南大道4号"},{key:"5",name:"赵敏",age:24,address:"余杭区文一西路5号"}],i=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(n,l)=>(P(),ce("div",In,[d("section",Cn,[l[0]||(l[0]=d("h3",null,"1. 自定义根节点样式",-1)),a(k(T),{"data-source":c,columns:i,"row-key":"key","class-names":{root:"custom-root"}})]),d("section",Tn,[l[1]||(l[1]=d("h3",null,"2. 自定义表头样式",-1)),a(k(T),{"data-source":c,columns:i,"row-key":"key","class-names":{header:"custom-header"}})]),d("section",$n,[l[2]||(l[2]=d("h3",null,"3. 自定义行与单元格样式",-1)),a(k(T),{"data-source":c,columns:i,"row-key":"key","class-names":{row:"custom-row",cell:"custom-cell"}})]),d("section",Dn,[l[3]||(l[3]=d("h3",null,"4. 自定义底部与分页样式",-1)),a(k(T),{"data-source":s,columns:i,"row-key":"key",footer:()=>"表格底部信息",pagination:{pageSize:3,total:s.length,current:1},"class-names":{footer:"custom-footer",pagination:"custom-pagination"}},null,8,["pagination"])]),d("section",Rn,[l[4]||(l[4]=d("h3",null,"5. 组合使用多个 classNames",-1)),a(k(T),{"data-source":c,columns:i,"row-key":"key","class-names":{root:"combined-root",header:"combined-header",row:"combined-row",cell:"combined-cell"}})]),d("section",qn,[l[5]||(l[5]=d("h3",null,"6. 使用 styles 动态样式",-1)),a(k(T),{"data-source":c,columns:i,"row-key":"key",styles:{root:{border:"2px solid #1890ff",borderRadius:"12px",overflow:"hidden"},header:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},cell:{fontSize:"14px"}}})])]))}}),Nn=pn(_n,[["__scopeId","data-v-317fec8f"]]),An=`<template>
  <div class="demo-table-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <Table :data-source="dataSource" :columns="columns" row-key="key" :class-names="{ root: 'custom-root' }" />
    </section>

    <!-- 场景 2: 自定义表头 -->
    <section class="demo-section">
      <h3>2. 自定义表头样式</h3>
      <Table :data-source="dataSource" :columns="columns" row-key="key" :class-names="{ header: 'custom-header' }" />
    </section>

    <!-- 场景 3: 自定义行与单元格 -->
    <section class="demo-section">
      <h3>3. 自定义行与单元格样式</h3>
      <Table
        :data-source="dataSource"
        :columns="columns"
        row-key="key"
        :class-names="{ row: 'custom-row', cell: 'custom-cell' }"
      />
    </section>

    <!-- 场景 4: 自定义底部与分页 -->
    <section class="demo-section">
      <h3>4. 自定义底部与分页样式</h3>
      <Table
        :data-source="moreData"
        :columns="columns"
        row-key="key"
        :footer="() => '表格底部信息'"
        :pagination="{ pageSize: 3, total: moreData.length, current: 1 }"
        :class-names="{ footer: 'custom-footer', pagination: 'custom-pagination' }"
      />
    </section>

    <!-- 场景 5: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>5. 组合使用多个 classNames</h3>
      <Table
        :data-source="dataSource"
        :columns="columns"
        row-key="key"
        :class-names="{
          root: 'combined-root',
          header: 'combined-header',
          row: 'combined-row',
          cell: 'combined-cell',
        }"
      />
    </section>

    <!-- 场景 6: 使用 styles prop -->
    <section class="demo-section">
      <h3>6. 使用 styles 动态样式</h3>
      <Table
        :data-source="dataSource"
        :columns="columns"
        row-key="key"
        :styles="{
          root: { border: '2px solid #1890ff', borderRadius: '12px', overflow: 'hidden' },
          header: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
          cell: { fontSize: '14px' },
        }"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'

const dataSource = [
  { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
  { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
  { key: '3', name: '李小明', age: 28, address: '上城区西湖大道3号' },
]

const moreData = [
  ...dataSource,
  { key: '4', name: '王大锤', age: 35, address: '滨江区江南大道4号' },
  { key: '5', name: '赵敏', age: 24, address: '余杭区文一西路5号' },
]

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '住址', dataIndex: 'address', key: 'address' },
]
<\/script>

<style scoped>
.demo-table-classnames {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义根节点 */
:deep(.custom-root) {
  border: 2px dashed #722ed1;
  border-radius: 12px;
  padding: 8px;
  background: #f9f0ff;
}

/* 场景 2: 自定义表头 */
:deep(.custom-header) th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  font-weight: 600;
}

/* 场景 3: 自定义行与单元格 */
:deep(.custom-row) {
  transition: all 0.3s ease;
}

:deep(.custom-row:hover) {
  background: #e6f7ff;
  transform: scale(1.005);
}

:deep(.custom-cell) {
  border-bottom: 1px solid #91d5ff !important;
}

/* 场景 4: 自定义底部与分页 */
:deep(.custom-footer) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  color: white;
  font-weight: 600;
  border-radius: 0 0 8px 8px;
  text-align: center;
}

:deep(.custom-pagination) {
  padding: 12px;
  background: #f6ffed;
  border-radius: 8px;
  margin-top: 8px;
}

/* 场景 5: 组合样式 */
:deep(.combined-root) {
  border: 2px solid #13c2c2;
  border-radius: 12px;
  overflow: hidden;
}

:deep(.combined-header) th {
  background: #13c2c2 !important;
  color: white !important;
}

:deep(.combined-row:nth-child(even)) {
  background: #e6fffb;
}

:deep(.combined-cell) {
  color: #006d75;
}
</style>
`,En=z({__name:"TableEditable",setup(e){const c=C([{key:1,name:"李明",age:28,address:"北京市朝阳区"},{key:2,name:"王芳",age:32,address:"上海市浦东新区"},{key:3,name:"张伟",age:25,address:"广州市天河区"}]),s=C(null),i=mn({}),n=$=>$.key===s.value,l=$=>{s.value=$.key,Object.assign(i,{...$})},f=$=>{const I=c.value.findIndex(H=>H.key===$);I>-1&&Object.assign(c.value[I],i),s.value=null},J=()=>{s.value=null},S=[{title:"姓名",dataIndex:"name",key:"name",width:200,render:($,I)=>n(I)?a(we,{value:i.name,onChange:H=>i.name=H.target.value},null):$},{title:"年龄",dataIndex:"age",key:"age",width:150,render:($,I)=>n(I)?a(we,{type:"number",value:i.age,onChange:H=>i.age=Number(H.target.value)},null):$},{title:"地址",dataIndex:"address",key:"address",render:($,I)=>n(I)?a(we,{value:i.address,onChange:H=>i.address=H.target.value},null):$},{title:"操作",key:"action",width:150,render:($,I)=>n(I)?a("span",null,[a(re,{type:"link",onClick:()=>f(I.key),style:{marginRight:"8px"}},{default:()=>[N("保存")]}),a(re,{type:"link",onClick:J},{default:()=>[N("取消")]})]):a(re,{type:"link",onClick:()=>l(I),disabled:s.value!==null},{default:()=>[N("编辑")]})}];return($,I)=>(P(),G(k(T),{"data-source":c.value,columns:S,pagination:!1,bordered:""},null,8,["data-source"]))}}),Fn=`<script setup lang="tsx">
import { ref, reactive } from 'vue'
import { Table, Input, Button } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

interface DataType {
  key: number
  name: string
  age: number
  address: string
}

const dataSource = ref<DataType[]>([
  {
    key: 1,
    name: '李明',
    age: 28,
    address: '北京市朝阳区',
  },
  {
    key: 2,
    name: '王芳',
    age: 32,
    address: '上海市浦东新区',
  },
  {
    key: 3,
    name: '张伟',
    age: 25,
    address: '广州市天河区',
  },
])

const editingKey = ref<number | null>(null)
const editForm = reactive<Partial<DataType>>({})

const isEditing = (record: DataType) => record.key === editingKey.value

const edit = (record: DataType) => {
  editingKey.value = record.key
  Object.assign(editForm, { ...record })
}

const save = (key: number) => {
  const index = dataSource.value.findIndex((item) => item.key === key)
  if (index > -1) {
    Object.assign(dataSource.value[index], editForm)
  }
  editingKey.value = null
}

const cancel = () => {
  editingKey.value = null
}

const columns: TableColumn<DataType>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 200,
    render: (text: string, record: DataType) => {
      if (isEditing(record)) {
        return <Input value={editForm.name} onChange={(e) => (editForm.name = (e.target as HTMLInputElement).value)} />
      }
      return text
    },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 150,
    render: (text: number, record: DataType) => {
      if (isEditing(record)) {
        return (
          <Input
            type="number"
            value={editForm.age}
            onChange={(e) => (editForm.age = Number((e.target as HTMLInputElement).value))}
          />
        )
      }
      return text
    },
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    render: (text: string, record: DataType) => {
      if (isEditing(record)) {
        return (
          <Input value={editForm.address} onChange={(e) => (editForm.address = (e.target as HTMLInputElement).value)} />
        )
      }
      return text
    },
  },
  {
    title: '操作',
    key: 'action',
    width: 150,
    render: (_: any, record: DataType) => {
      if (isEditing(record)) {
        return (
          <span>
            <Button type="link" onClick={() => save(record.key)} style={{ marginRight: '8px' }}>
              保存
            </Button>
            <Button type="link" onClick={cancel}>
              取消
            </Button>
          </span>
        )
      }
      return (
        <Button type="link" onClick={() => edit(record)} disabled={editingKey.value !== null}>
          编辑
        </Button>
      )
    },
  },
]
<\/script>

<template>
  <Table :data-source="dataSource" :columns="columns" :pagination="false" bordered />
</template>
`,Kn=z({__name:"TableExpandable",setup(e){const c=C([]),s=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}],i=[{key:"1",name:"Joe",age:32,address:"New York",description:"My name is Joe, I am 32 years old, living in New York."},{key:"2",name:"Jim",age:28,address:"London",description:"My name is Jim, I am 28 years old, living in London."},{key:"3",name:"Alice",age:35,address:"Sydney",description:"My name is Alice, I am 35 years old, living in Sydney."}],n={expandedRowRender:l=>l.description,expandedRowKeys:c.value,onExpandedRowsChange:l=>{c.value=l}};return(l,f)=>(P(),G(k(T),{columns:s,"data-source":i,expandable:n}))}}),zn=`<template>
  <Table :columns="columns" :data-source="data" :expandable="expandable" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '@hmfw/ant-design'

const expandedKeys = ref<string[]>([])

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const data = [
  {
    key: '1',
    name: 'Joe',
    age: 32,
    address: 'New York',
    description: 'My name is Joe, I am 32 years old, living in New York.',
  },
  {
    key: '2',
    name: 'Jim',
    age: 28,
    address: 'London',
    description: 'My name is Jim, I am 28 years old, living in London.',
  },
  {
    key: '3',
    name: 'Alice',
    age: 35,
    address: 'Sydney',
    description: 'My name is Alice, I am 35 years old, living in Sydney.',
  },
]

const expandable = {
  expandedRowRender: (record: any) => record.description,
  expandedRowKeys: expandedKeys.value,
  onExpandedRowsChange: (keys: string[]) => {
    expandedKeys.value = keys
  },
}
<\/script>
`,Bn=z({__name:"TableFilter",setup(e){const c=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"},{text:"Alice",value:"Alice"}],onFilter:(i,n)=>n.name.includes(i)},{title:"Age",dataIndex:"age",key:"age",filters:[{text:"20-30",value:"20-30"},{text:"30-40",value:"30-40"}],onFilter:(i,n)=>{const l=n.age;return i==="20-30"?l>=20&&l<30:i==="30-40"?l>=30&&l<40:!1}},{title:"Address",dataIndex:"address",key:"address"}],s=[{key:"1",name:"Joe",age:32,address:"New York"},{key:"2",name:"Jim",age:28,address:"London"},{key:"3",name:"Alice",age:35,address:"Sydney"},{key:"4",name:"Bob",age:25,address:"Paris"}];return(i,n)=>(P(),G(k(T),{columns:c,"data-source":s}))}}),Pn=`<template>
  <Table :columns="columns" :data-source="data" />
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filters: [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' },
      { text: 'Alice', value: 'Alice' },
    ],
    onFilter: (value: string, record: any) => record.name.includes(value),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    filters: [
      { text: '20-30', value: '20-30' },
      { text: '30-40', value: '30-40' },
    ],
    onFilter: (value: string, record: any) => {
      const age = record.age
      if (value === '20-30') return age >= 20 && age < 30
      if (value === '30-40') return age >= 30 && age < 40
      return false
    },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const data = [
  { key: '1', name: 'Joe', age: 32, address: 'New York' },
  { key: '2', name: 'Jim', age: 28, address: 'London' },
  { key: '3', name: 'Alice', age: 35, address: 'Sydney' },
  { key: '4', name: 'Bob', age: 25, address: 'Paris' },
]
<\/script>
`,Jn=z({__name:"TableFixedColumns",setup(e){const c=[{title:"Name",dataIndex:"name",key:"name",fixed:"left",width:100},{title:"Age",dataIndex:"age",key:"age",width:80},{title:"Column 1",dataIndex:"col1",key:"col1",width:150},{title:"Column 2",dataIndex:"col2",key:"col2",width:150},{title:"Column 3",dataIndex:"col3",key:"col3",width:150},{title:"Column 4",dataIndex:"col4",key:"col4",width:150},{title:"Action",key:"action",fixed:"right",width:100,render:()=>"Edit"}],s=[{key:"1",name:"Joe",age:32,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"},{key:"2",name:"Jim",age:28,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"},{key:"3",name:"Alice",age:35,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"}];return(i,n)=>(P(),G(k(T),{columns:c,"data-source":s,scroll:{x:1200},bordered:""}))}}),jn=`<template>
  <Table :columns="columns" :data-source="data" :scroll="{ x: 1200 }" bordered />
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    width: 100,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Column 1',
    dataIndex: 'col1',
    key: 'col1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'col2',
    key: 'col2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'col3',
    key: 'col3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'col4',
    key: 'col4',
    width: 150,
  },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 100,
    render: () => 'Edit',
  },
]

const data = [
  {
    key: '1',
    name: 'Joe',
    age: 32,
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
  },
  {
    key: '2',
    name: 'Jim',
    age: 28,
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
  },
  {
    key: '3',
    name: 'Alice',
    age: 35,
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
  },
]
<\/script>
`,On=z({__name:"TableResponsive",setup(e){const c=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age",responsive:["sm","md","lg","xl","xxl"]},{title:"Email",dataIndex:"email",key:"email",responsive:["md","lg","xl","xxl"]},{title:"Phone",dataIndex:"phone",key:"phone",responsive:["lg","xl","xxl"]},{title:"Address",dataIndex:"address",key:"address",responsive:["xl","xxl"]}],s=[{key:"1",name:"Joe",age:32,email:"joe@example.com",phone:"123-456-7890",address:"New York No. 1 Lake Park"},{key:"2",name:"Jim",age:28,email:"jim@example.com",phone:"098-765-4321",address:"London No. 1 Lake Park"},{key:"3",name:"Alice",age:35,email:"alice@example.com",phone:"555-123-4567",address:"Sydney No. 1 Lake Park"}];return(i,n)=>(P(),G(k(T),{columns:c,"data-source":s}))}}),Ln=`<template>
  <Table :columns="columns" :data-source="data" />
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    responsive: ['sm', 'md', 'lg', 'xl', 'xxl'], // 隐藏在 xs 屏幕
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    responsive: ['md', 'lg', 'xl', 'xxl'], // 隐藏在 xs, sm 屏幕
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    responsive: ['lg', 'xl', 'xxl'], // 隐藏在 xs, sm, md 屏幕
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    responsive: ['xl', 'xxl'], // 只在 xl, xxl 屏幕显示
  },
]

const data = [
  {
    key: '1',
    name: 'Joe',
    age: 32,
    email: 'joe@example.com',
    phone: '123-456-7890',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim',
    age: 28,
    email: 'jim@example.com',
    phone: '098-765-4321',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Alice',
    age: 35,
    email: 'alice@example.com',
    phone: '555-123-4567',
    address: 'Sydney No. 1 Lake Park',
  },
]
<\/script>
`,Mn=z({__name:"TableRowSelection",setup(e){const c=C([]),s={selectedRowKeys:c,onChange:l=>{c.value=l}},i=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],n=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(l,f)=>(P(),ce(Ze,null,[a(k(T),{"data-source":i,columns:n,"row-key":"key","row-selection":s}),d("p",null,"已选择："+en(c.value.join(", ")),1)],64))}}),Hn=`<template>
  <Table :data-source="dataSource" :columns="columns" row-key="key" :row-selection="rowSelection" />
  <p>已选择：{{ selectedKeys.join(', ') }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '@hmfw/ant-design'

const selectedKeys = ref<string[]>([])

const rowSelection = {
  selectedRowKeys: selectedKeys,
  onChange: (keys: string[]) => {
    selectedKeys.value = keys
  },
}

const dataSource = [
  { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
  { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
]

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '住址', dataIndex: 'address', key: 'address' },
]
<\/script>
`,Vn=z({__name:"TableSorter",setup(e){const c=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"},{key:"3",name:"李明",age:28,address:"朝阳区建国路88号"}],s=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age",sorter:(i,n)=>i.age-n.age},{title:"住址",dataIndex:"address",key:"address"}];return(i,n)=>(P(),G(k(T),{"data-source":c,columns:s,"row-key":"key"}))}}),Yn=`<template>
  <Table :data-source="dataSource" :columns="columns" row-key="key" />
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'

const dataSource = [
  { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
  { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
  { key: '3', name: '李明', age: 28, address: '朝阳区建国路88号' },
]

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: (a: any, b: any) => a.age - b.age,
  },
  { title: '住址', dataIndex: 'address', key: 'address' },
]
<\/script>
`,Qn={style:{height:"600px",overflow:"auto"}},Wn=z({__name:"TableSticky",setup(e){const c=C(Array.from({length:100},(i,n)=>({key:n,name:`李明 ${n+1}`,age:20+n%50,address:`北京市朝阳区某街道 ${n+1} 号`,tags:n%2===0?["开发者","设计师"]:["产品经理"]}))),s=[{title:"姓名",dataIndex:"name",key:"name",width:150,fixed:"left"},{title:"年龄",dataIndex:"age",key:"age",width:100,sorter:(i,n)=>i.age-n.age},{title:"地址",dataIndex:"address",key:"address",width:300},{title:"标签",key:"tags",dataIndex:"tags",width:200,render:i=>i.join(", ")}];return(i,n)=>(P(),ce("div",Qn,[n[0]||(n[0]=d("div",{style:{height:"300px",background:"#f0f0f0",display:"flex","align-items":"center","justify-content":"center","margin-bottom":"16px"}},[d("p",null,"向下滚动查看表头吸顶效果")],-1)),a(k(T),{"data-source":c.value,columns:s,pagination:!1,scroll:{y:300},sticky:!0,bordered:""},null,8,["data-source"]),n[1]||(n[1]=d("div",{style:{height:"300px",background:"#f0f0f0",display:"flex","align-items":"center","justify-content":"center","margin-top":"16px"}},[d("p",null,"底部内容")],-1))]))}}),Un=`<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

interface DataType {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

const dataSource = ref<DataType[]>(
  Array.from({ length: 100 }, (_, i) => ({
    key: i,
    name: \`李明 \${i + 1}\`,
    age: 20 + (i % 50),
    address: \`北京市朝阳区某街道 \${i + 1} 号\`,
    tags: i % 2 === 0 ? ['开发者', '设计师'] : ['产品经理'],
  })),
)

const columns: TableColumn<DataType>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    fixed: 'left',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 100,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    width: 300,
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    width: 200,
    render: (tags: string[]) => tags.join(', '),
  },
]
<\/script>

<template>
  <div style="height: 600px; overflow: auto">
    <div
      style="
        height: 300px;
        background: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
      "
    >
      <p>向下滚动查看表头吸顶效果</p>
    </div>
    <Table
      :data-source="dataSource"
      :columns="columns"
      :pagination="false"
      :scroll="{ y: 300 }"
      :sticky="true"
      bordered
    />
    <div
      style="
        height: 300px;
        background: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 16px;
      "
    >
      <p>底部内容</p>
    </div>
  </div>
</template>
`,Gn=z({__name:"TableSummary",setup(e){const c=[{key:1,name:"笔记本电脑",category:"电子产品",price:5999,quantity:3},{key:2,name:"机械键盘",category:"电子产品",price:599,quantity:5},{key:3,name:"显示器",category:"电子产品",price:1999,quantity:2},{key:4,name:"鼠标",category:"电子产品",price:199,quantity:10},{key:5,name:"耳机",category:"电子产品",price:399,quantity:6}],s=[{title:"商品名称",dataIndex:"name",key:"name"},{title:"类别",dataIndex:"category",key:"category"},{title:"单价（元）",dataIndex:"price",key:"price",align:"right",render:n=>`¥${n.toFixed(2)}`},{title:"数量",dataIndex:"quantity",key:"quantity",align:"right"},{title:"总价（元）",key:"total",align:"right",render:(n,l)=>`¥${(l.price*l.quantity).toFixed(2)}`}],i=n=>{const l=n.reduce((J,S)=>J+S.quantity,0),f=n.reduce((J,S)=>J+S.price*S.quantity,0);return a("tr",null,[a("td",{colspan:"3",style:"text-align: right; font-weight: 600;"},[N("总计：")]),a("td",{style:"text-align: right; font-weight: 600;"},[l]),a("td",{style:"text-align: right; font-weight: 600;"},[N("¥"),f.toFixed(2)])])};return(n,l)=>(P(),G(k(T),{"data-source":c,columns:s,pagination:!1,summary:i,bordered:""}))}}),Xn=`<script setup lang="tsx">
import { Table } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

interface DataType {
  key: number
  name: string
  category: string
  price: number
  quantity: number
}

const dataSource: DataType[] = [
  {
    key: 1,
    name: '笔记本电脑',
    category: '电子产品',
    price: 5999,
    quantity: 3,
  },
  {
    key: 2,
    name: '机械键盘',
    category: '电子产品',
    price: 599,
    quantity: 5,
  },
  {
    key: 3,
    name: '显示器',
    category: '电子产品',
    price: 1999,
    quantity: 2,
  },
  {
    key: 4,
    name: '鼠标',
    category: '电子产品',
    price: 199,
    quantity: 10,
  },
  {
    key: 5,
    name: '耳机',
    category: '电子产品',
    price: 399,
    quantity: 6,
  },
]

const columns: TableColumn<DataType>[] = [
  {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类别',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '单价（元）',
    dataIndex: 'price',
    key: 'price',
    align: 'right',
    render: (value: number) => \`¥\${value.toFixed(2)}\`,
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'right',
  },
  {
    title: '总价（元）',
    key: 'total',
    align: 'right',
    render: (_: any, record: DataType) => \`¥\${(record.price * record.quantity).toFixed(2)}\`,
  },
]

// Summary 渲染函数
const summaryRender = (pageData: DataType[]) => {
  const totalQuantity = pageData.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = pageData.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <tr>
      <td colspan="3" style="text-align: right; font-weight: 600;">
        总计：
      </td>
      <td style="text-align: right; font-weight: 600;">{totalQuantity}</td>
      <td style="text-align: right; font-weight: 600;">¥{totalAmount.toFixed(2)}</td>
    </tr>
  )
}
<\/script>

<template>
  <Table :data-source="dataSource" :columns="columns" :pagination="false" :summary="summaryRender" bordered />
</template>
`,Zn={style:{"margin-bottom":"16px"}},et=z({__name:"TableVirtualScroll",setup(e){const s=C((n=>Array.from({length:n},(l,f)=>({key:f,name:`用户 ${f+1}`,age:20+f%50,address:`北京市朝阳区某街道 ${f+1} 号`,email:`user${f+1}@example.com`,phone:`138${String(f).padStart(8,"0")}`})))(1e3)),i=[{title:"姓名",dataIndex:"name",key:"name",width:120,fixed:"left"},{title:"年龄",dataIndex:"age",key:"age",width:80,sorter:(n,l)=>n.age-l.age},{title:"地址",dataIndex:"address",key:"address",width:300,ellipsis:!0},{title:"邮箱",dataIndex:"email",key:"email",width:200},{title:"手机号",dataIndex:"phone",key:"phone",width:150}];return(n,l)=>(P(),ce("div",null,[d("p",Zn,[l[0]||(l[0]=N(" 共 ",-1)),d("strong",null,en(s.value.length),1),l[1]||(l[1]=N(" 条数据，使用虚拟滚动优化性能 ",-1))]),a(k(T),{"data-source":s.value,columns:i,pagination:!1,scroll:{y:400,x:900},bordered:""},null,8,["data-source"])]))}}),nt=`<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

interface DataType {
  key: number
  name: string
  age: number
  address: string
  email: string
  phone: string
}

// 生成大量数据
const generateData = (count: number): DataType[] => {
  return Array.from({ length: count }, (_, i) => ({
    key: i,
    name: \`用户 \${i + 1}\`,
    age: 20 + (i % 50),
    address: \`北京市朝阳区某街道 \${i + 1} 号\`,
    email: \`user\${i + 1}@example.com\`,
    phone: \`138\${String(i).padStart(8, '0')}\`,
  }))
}

const dataSource = ref<DataType[]>(generateData(1000))

const columns: TableColumn<DataType>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 120,
    fixed: 'left',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 80,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    width: 300,
    ellipsis: true,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    width: 200,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
    width: 150,
  },
]
<\/script>

<template>
  <div>
    <p style="margin-bottom: 16px">
      共 <strong>{{ dataSource.length }}</strong> 条数据，使用虚拟滚动优化性能
    </p>
    <Table :data-source="dataSource" :columns="columns" :pagination="false" :scroll="{ y: 400, x: 900 }" bordered />
  </div>
</template>
`,tt={class:"markdown-body"},qt={__name:"table",setup(e,{expose:c}){return c({frontmatter:{}}),(i,n)=>{const l=gn("DemoBlock");return P(),ce("div",tt,[n[0]||(n[0]=d("h1",{id:"table-表格",tabindex:"-1"},"Table 表格",-1)),n[1]||(n[1]=d("p",null,"展示行列数据。",-1)),n[2]||(n[2]=d("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=d("ul",null,[d("li",null,"当有大量结构化的数据需要展现时"),d("li",null,"当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时")],-1)),n[4]||(n[4]=d("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=d("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=d("p",null,"简单的表格，最后一列是各种操作。",-1)),a(l,{title:"基础用法",source:k(Sn)},{default:O(()=>[a(wn)]),_:1},8,["source"]),n[7]||(n[7]=d("h3",{id:"排序",tabindex:"-1"},"排序",-1)),n[8]||(n[8]=d("p",null,"对某一列数据进行排序。支持多列排序（Shift + 点击表头）。",-1)),a(l,{title:"排序",source:k(Yn)},{default:O(()=>[a(Vn)]),_:1},8,["source"]),n[9]||(n[9]=d("h3",{id:"行选择",tabindex:"-1"},"行选择",-1)),n[10]||(n[10]=d("p",null,"第一列是联动的选择框，支持单选和多选。",-1)),a(l,{title:"行选择",source:k(Hn)},{default:O(()=>[a(Mn)]),_:1},8,["source"]),n[11]||(n[11]=d("h3",{id:"筛选",tabindex:"-1"},"筛选",-1)),n[12]||(n[12]=d("p",null,"对某一列数据进行筛选。",-1)),a(l,{title:"筛选",source:k(Pn)},{default:O(()=>[a(Bn)]),_:1},8,["source"]),n[13]||(n[13]=d("h3",{id:"固定列",tabindex:"-1"},"固定列",-1)),n[14]||(n[14]=d("p",null,"固定左侧或右侧的列，横向滚动时保持可见。",-1)),a(l,{title:"固定列",source:k(jn)},{default:O(()=>[a(Jn)]),_:1},8,["source"]),n[15]||(n[15]=d("h3",{id:"展开行",tabindex:"-1"},"展开行",-1)),n[16]||(n[16]=d("p",null,"可展开的行，显示额外信息。",-1)),a(l,{title:"展开行",source:k(zn)},{default:O(()=>[a(Kn)]),_:1},8,["source"]),n[17]||(n[17]=d("h3",{id:"响应式",tabindex:"-1"},"响应式",-1)),n[18]||(n[18]=d("p",null,"根据屏幕大小自动显示或隐藏列。",-1)),a(l,{title:"响应式",source:k(Ln)},{default:O(()=>[a(On)]),_:1},8,["source"]),n[19]||(n[19]=d("h3",{id:"虚拟滚动",tabindex:"-1"},"虚拟滚动",-1)),n[20]||(n[20]=d("p",null,"大数据场景下使用虚拟滚动优化性能，支持 1000+ 行数据流畅滚动。",-1)),a(l,{title:"虚拟滚动",source:k(nt)},{default:O(()=>[a(et)]),_:1},8,["source"]),n[21]||(n[21]=d("h3",{id:"吸顶表头",tabindex:"-1"},"吸顶表头",-1)),n[22]||(n[22]=d("p",null,"当页面滚动时，表头会固定在页面顶部。",-1)),a(l,{title:"吸顶表头",source:k(Un)},{default:O(()=>[a(Wn)]),_:1},8,["source"]),n[23]||(n[23]=d("h3",{id:"总结栏",tabindex:"-1"},"总结栏",-1)),n[24]||(n[24]=d("p",null,[N("通过 "),d("code",null,"summary"),N(" 可以在表格尾部添加合计行。")],-1)),a(l,{title:"总结栏",source:k(Xn)},{default:O(()=>[a(Gn)]),_:1},8,["source"]),n[25]||(n[25]=d("h3",{id:"可编辑单元格",tabindex:"-1"},"可编辑单元格",-1)),n[26]||(n[26]=d("p",null,[N("通过自定义 "),d("code",null,"render"),N(" 函数实现可编辑的单元格。")],-1)),a(l,{title:"可编辑单元格",source:k(Fn)},{default:O(()=>[a(En)]),_:1},8,["source"]),n[27]||(n[27]=d("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[28]||(n[28]=d("p",null,[N("通过 "),d("code",null,"classNames"),N(" / "),d("code",null,"styles"),N(" 对各子元素做细粒度样式控制。")],-1)),a(l,{title:"语义化 className 与 style",source:k(An)},{default:O(()=>[a(Nn)]),_:1},8,["source"]),n[29]||(n[29]=kn(`<h2 id="api" tabindex="-1">API</h2><h3 id="table-props" tabindex="-1">Table Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据数组</td><td><code>any[]</code></td><td>-</td></tr><tr><td>columns</td><td>表格列的配置描述</td><td><code>TableColumn[]</code></td><td>-</td></tr><tr><td>rowKey</td><td>表格行 key 的取值</td><td><code>string | ((record: any) =&gt; Key)</code></td><td><code>&#39;key&#39;</code></td></tr><tr><td>loading</td><td>页面是否加载中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>分页器，设为 false 时不展示</td><td><code>TablePaginationConfig | false</code></td><td>-</td></tr><tr><td>rowSelection</td><td>列表项是否可选择</td><td><code>TableRowSelection</code></td><td>-</td></tr><tr><td>expandable</td><td>配置展开属性</td><td><code>ExpandableConfig</code></td><td>-</td></tr><tr><td>size</td><td>表格大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>bordered</td><td>是否展示外边框和列边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showHeader</td><td>是否显示表头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>sticky</td><td>设置粘性头部和滚动条</td><td><code>boolean | { offsetHeader?: number, offsetScroll?: number }</code></td><td><code>false</code></td></tr><tr><td>scroll</td><td>表格是否可滚动</td><td><code>{ x?: number | string, y?: number | string }</code></td><td>-</td></tr><tr><td>summary</td><td>总结栏</td><td><code>(pageData: any[]) =&gt; VNode</code></td><td>-</td></tr><tr><td>title</td><td>表格标题</td><td><code>string | ((data: any[]) =&gt; VNode)</code></td><td>-</td></tr><tr><td>footer</td><td>表格页脚</td><td><code>string | ((data: any[]) =&gt; VNode)</code></td><td>-</td></tr><tr><td>locale</td><td>国际化配置</td><td><code>{ emptyText?: string }</code></td><td>-</td></tr><tr><td>onChange</td><td>分页、排序、筛选变化时触发</td><td><code>(pagination, filters, sorter, extra) =&gt; void</code></td><td>-</td></tr><tr><td>onRow</td><td>设置行属性</td><td><code>(record, index) =&gt; object</code></td><td>-</td></tr><tr><td>onHeaderRow</td><td>设置表头行属性</td><td><code>(columns, index) =&gt; object</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">详见下方</a>）</td><td><code>TableSemanticClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">详见下方</a>）</td><td><code>TableSemanticStyles</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根节点额外类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="tablecolumn" tabindex="-1">TableColumn</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>列的唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>列头显示文字</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>dataIndex</td><td>列数据在数据项中对应的路径</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>列宽度</td><td><code>number | string</code></td><td>-</td></tr><tr><td>align</td><td>设置列的对齐方式</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>fixed</td><td>列是否固定（左侧/右侧）</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>ellipsis</td><td>超过宽度将自动省略</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>sorter</td><td>排序函数，支持多列排序</td><td><code>CompareFn | { compare: CompareFn, multiple: number }</code></td><td>-</td></tr><tr><td>sortOrder</td><td>排序的受控属性</td><td><code>&#39;ascend&#39; | &#39;descend&#39; | null</code></td><td>-</td></tr><tr><td>filters</td><td>表头的筛选菜单项</td><td><code>ColumnFilterItem[]</code></td><td>-</td></tr><tr><td>filteredValue</td><td>筛选的受控属性</td><td><code>FilterValue</code></td><td>-</td></tr><tr><td>onFilter</td><td>筛选函数</td><td><code>(value: any, record: any) =&gt; boolean</code></td><td>-</td></tr><tr><td>filterMultiple</td><td>是否多选</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>responsive</td><td>响应式断点</td><td><code>(&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39;)[]</code></td><td>-</td></tr><tr><td>render</td><td>自定义渲染函数</td><td><code>(text: any, record: any, index: number) =&gt; any</code></td><td>-</td></tr></tbody></table><h3 id="tablerowselection" tabindex="-1">TableRowSelection</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>选择框类型</td><td><code>&#39;checkbox&#39; | &#39;radio&#39;</code></td><td><code>&#39;checkbox&#39;</code></td></tr><tr><td>selectedRowKeys</td><td>指定选中项的 key 数组</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>onChange</td><td>选中项发生变化时的回调</td><td><code>(keys: Key[], rows: any[], info: { type: string }) =&gt; void</code></td><td>-</td></tr><tr><td>onSelect</td><td>用户手动选择/取消选择某行的回调</td><td><code>(record, selected, selectedRows, nativeEvent) =&gt; void</code></td><td>-</td></tr><tr><td>onSelectAll</td><td>用户手动选择/取消选择所有行的回调</td><td><code>(selected, selectedRows, changeRows) =&gt; void</code></td><td>-</td></tr><tr><td>getCheckboxProps</td><td>选择框的默认属性配置</td><td><code>(record) =&gt; object</code></td><td>-</td></tr></tbody></table><h3 id="expandableconfig" tabindex="-1">ExpandableConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>expandedRowRender</td><td>额外的展开行内容</td><td><code>(record, index, indent, expanded) =&gt; VNode</code></td><td>-</td></tr><tr><td>expandedRowKeys</td><td>展开的行，受控属性</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>defaultExpandedRowKeys</td><td>默认展开的行</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>onExpand</td><td>点击展开图标时触发</td><td><code>(expanded, record) =&gt; void</code></td><td>-</td></tr><tr><td>onExpandedRowsChange</td><td>展开的行变化时触发</td><td><code>(expandedKeys: Key[]) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="tablepaginationconfig" tabindex="-1">TablePaginationConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数</td><td><code>number</code></td><td>-</td></tr><tr><td>pageSize</td><td>每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td>-</td></tr><tr><td>showQuickJumper</td><td>是否可以快速跳转至某页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSizeChanger</td><td>是否展示 pageSize 切换器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showTotal</td><td>用于显示数据总量和当前数据顺序</td><td><code>(total, range) =&gt; string</code></td><td>-</td></tr><tr><td>pageSizeOptions</td><td>指定每页可以显示多少条</td><td><code>number[]</code></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td>onChange</td><td>页码或 pageSize 改变的回调</td><td><code>(page, pageSize) =&gt; void</code></td><td>-</td></tr></tbody></table><h2 id="特性说明" tabindex="-1">特性说明</h2><h3 id="多列排序" tabindex="-1">多列排序</h3><p>按住 Shift 键点击多个列的表头，可以实现多列排序。排序优先级按照点击顺序。</p><h3 id="响应式列" tabindex="-1">响应式列</h3><p>通过配置 <code>responsive</code> 属性，可以根据屏幕断点自动显示或隐藏列：</p><ul><li><code>xs</code>: 0px</li><li><code>sm</code>: 576px</li><li><code>md</code>: 768px</li><li><code>lg</code>: 992px</li><li><code>xl</code>: 1200px</li><li><code>xxl</code>: 1600px</li></ul><h3 id="固定列-1" tabindex="-1">固定列</h3><p>设置 <code>fixed</code> 为 <code>&#39;left&#39;</code> 或 <code>&#39;right&#39;</code>，可以固定列到左侧或右侧。滚动时会自动显示阴影效果。</p><h3 id="可访问性" tabindex="-1">可访问性</h3><p>Table 组件完全支持键盘导航和屏幕阅读器：</p><ul><li>使用 <code>Enter</code> 或 <code>Space</code> 键可以触发排序</li><li>完整的 ARIA 标签支持</li><li>符合 WCAG 2.1 AA 标准</li></ul><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Table的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TableSemanticClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 div.hmfw-table</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 表头 thead.hmfw-table-thead</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 表体 tbody.hmfw-table-tbody</span>
  row<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 数据行 tr.hmfw-table-row</span>
  cell<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 数据单元格 td.hmfw-table-cell</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 表格页脚 div.hmfw-table-footer</span>
  pagination<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分页容器 div.hmfw-table-pagination</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TableSemanticStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  body<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  row<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  cell<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  footer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  pagination<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-thead<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.header / styles.header 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>列头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-tbody<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.row / styles.row 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>单元格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.cell / styles.cell 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>页脚<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.footer / styles.footer 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-pagination<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>分页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.pagination / styles.pagination 应用于此 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>
    <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-table&#39;,
      header: &#39;my-header&#39;,
      row: &#39;my-row&#39;,
      cell: &#39;my-cell&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-table)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-header)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-row:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f0f5ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-cell)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>
    <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { border: &#39;2px solid #1890ff&#39;, borderRadius: &#39;12px&#39; },
      header: { background: &#39;#667eea&#39; },
      cell: { fontSize: &#39;14px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>cell</code> 同时应用于所有数据单元格（<code>&lt;td&gt;</code>），表头单元格（<code>&lt;th&gt;</code>）不应用此 className，如需定制表头单元格请通过 <code>header</code> 的后代选择器（如 <code>.my-header th</code>）</li><li><code>row</code> 应用于所有数据行，包括虚拟滚动模式下的行</li><li><code>header</code>/<code>body</code> 分别对应 <code>&lt;thead&gt;</code>/<code>&lt;tbody&gt;</code> 元素</li><li><code>footer</code> 仅在设置了 <code>footer</code> 属性时渲染</li><li><code>pagination</code> 仅在分页启用且有数据时渲染</li><li><code>styles.header</code> 会与 sticky 模式下的定位样式合并；<code>styles.cell</code> 会与列的 <code>align</code> 对齐样式合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr></tbody></table>`,36))])}}};export{qt as default};
