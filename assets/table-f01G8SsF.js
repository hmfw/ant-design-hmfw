import{a as We}from"./index-BEF_QnKG.js";import{D as at}from"./index-BpvMDX-S.js";import{B as le}from"./Button-BJ4qjE3i.js";import{C as ge}from"./Checkbox-CM6itQWk.js";import{d as z,r as C,c as a,u as st,C as ot,k as dt,l as lt,m as be,s as de,g as T,F as Ge,a as M,o as P,q as U,e as y,b as re,f as l,_ as rt,L as it,A as Ue,h as ct,w as L,i as ut}from"./index-DZWA4HiS.js";import{c as F}from"./cls-S9IiI6wd.js";import{E as pt}from"./Empty-Exi_iPK7.js";import{P as mt}from"./Pagination-B0nNRpma.js";import{S as gt}from"./Spin-BY4jtdzw.js";import{I as ve}from"./Input-fgyoHGwZ.js";import"./index-dTCcyIcq.js";import"./Layout-CzsTGCd_.js";import"./MinusOutlined-CPZPETbH.js";import"./LeftOutlined-D1RAhMdi.js";import"./RightOutlined-DxQZ7HNk.js";import"./event-CMqgYmge.js";import"./Trigger-B9GAuuS8.js";import"./Tooltip-Dpun1Uyv.js";import"./DownOutlined-7PX7T7iC.js";import"./LoadingOutlined-_M72e6LV.js";import"./Select-Dmp8H3ml.js";import"./VirtualList-BbiBeX9Z.js";import"./CloseOutlined-Kr3orOYj.js";import"./SearchOutlined-ChywRtum.js";const yt=z({name:"FilterDropdown",props:{prefixCls:{type:String,required:!0},filters:{type:Array,default:()=>[]},filteredValue:{type:Array,default:()=>[]},filterMultiple:{type:Boolean,default:!0},locale:{type:Object,default:()=>({})},onConfirm:{type:Function,required:!0}},setup(e){const i=C([...e.filteredValue.filter(f=>typeof f=="string"||typeof f=="number")]),s=(f,J)=>{e.filterMultiple?J?i.value=[...i.value,f]:i.value=i.value.filter(S=>S!==f):i.value=J?[f]:[]},c=()=>{e.onConfirm(i.value)},t=()=>{i.value=[],e.onConfirm([])},d=()=>e.filters.map(f=>{const J=i.value.includes(f.value);return a("div",{key:String(f.value),class:`${e.prefixCls}-dropdown-menu-item`},[a(ge,{checked:J,onChange:S=>s(f.value,S)},{default:()=>[f.text]})])});return()=>a("div",{class:`${e.prefixCls}-dropdown`},[a("div",{class:`${e.prefixCls}-dropdown-menu`},[d()]),a("div",{class:`${e.prefixCls}-dropdown-btns`},[a(le,{size:"small",onClick:t},{default:()=>[e.locale.filterReset||"重置"]}),a(le,{type:"primary",size:"small",onClick:c},{default:()=>[e.locale.filterConfirm||"确定"]})])])}}),kt={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},$=z({name:"Table",props:{dataSource:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},rowKey:[String,Function],loading:Boolean,bordered:Boolean,size:{type:String,default:"default"},scroll:Object,pagination:{type:[Boolean,Object],default:void 0},rowSelection:Object,expandable:Object,locale:Object,showHeader:{type:Boolean,default:!0},sticky:[Boolean,Object],summary:Function,title:[String,Function],footer:[String,Function],onRow:Function,onHeaderRow:Function,onChange:Function,classNames:Object,styles:Object,rootClassName:String},emits:["change"],setup(e,{emit:i}){var Re,_e,Ne;const s=st("table"),c=ot(),t=C(),d=C(0),f=C(new Map),J=54,S=M(()=>{var n;return!!((n=e.scroll)!=null&&n.y&&e.dataSource&&e.dataSource.length>20)}),D=M(()=>{var n;return(n=e.scroll)!=null&&n.y?typeof e.scroll.y=="number"?e.scroll.y:parseInt(e.scroll.y)||400:0}),I=(n,o)=>{const p=Y(n,o);return f.value.get(p)||J},H=C("xxl"),ye=()=>{var p;const n=window.innerWidth,o=((p=Object.entries(kt).reverse().find(([u,m])=>n>=m))==null?void 0:p[0])||"xs";H.value=o};dt(()=>{ye(),window.addEventListener("resize",ye)}),lt(()=>{window.removeEventListener("resize",ye)});const X=M(()=>{var n;return((n=e.columns)==null?void 0:n.filter(o=>!o.responsive||o.responsive.length===0?!0:o.responsive.includes(H.value)))??[]}),K=C([]),O=C({}),we=C(1),Se=C(10);be(()=>X.value,n=>{n&&n.forEach(o=>{const p=o.key??o.dataIndex??"";o.filteredValue!==void 0&&o.filteredValue!==null&&(O.value[p]=o.filteredValue)})},{immediate:!0});const Y=(n,o)=>typeof e.rowKey=="function"?e.rowKey(n):typeof e.rowKey=="string"?n[e.rowKey]:n.key??String(o),Ie=(n,o)=>{if(o.dataIndex)return n[o.dataIndex]},Ce=M(()=>{let n=[...e.dataSource??[]];return X.value.forEach(o=>{const p=o.key??o.dataIndex??"",u=O.value[p];u!=null&&u.length&&o.onFilter&&(n=n.filter(m=>u.some(k=>o.onFilter(k,m))))}),n}),ne=M(()=>{const n=[...Ce.value];return K.value.length===0||n.sort((o,p)=>{for(const u of K.value){const m=u.column;if(!m.sorter||!u.order)continue;const k=typeof m.sorter=="function"?m.sorter:void 0;if(!k)continue;const g=k(o,p);if(g!==0)return u.order==="descend"?-g:g}return 0}),n}),R=M(()=>{if(e.pagination===!1)return null;const n=typeof e.pagination=="object"?e.pagination:{};return{pageSize:(n==null?void 0:n.pageSize)??Se.value,current:(n==null?void 0:n.current)??we.value,total:(n==null?void 0:n.total)??ne.value.length,onChange:n==null?void 0:n.onChange,showQuickJumper:n==null?void 0:n.showQuickJumper,showSizeChanger:n==null?void 0:n.showSizeChanger,showTotal:n==null?void 0:n.showTotal,pageSizeOptions:n==null?void 0:n.pageSizeOptions}}),x=M(()=>{if(!R.value)return ne.value;const{current:n,pageSize:o}=R.value,p=(n-1)*o;return ne.value.slice(p,p+o)}),ke=M(()=>{if(!S.value)return 0;let n=0,o=0;const p=5;for(;o<x.value.length;o++){if(n>=d.value)return Math.max(0,o-p);n+=I(x.value[o],o)}return 0}),fe=M(()=>{if(!S.value)return x.value.length;let n=0,o=0;const p=5,u=d.value+D.value;for(let m=0;m<x.value.length;m++)if(n+=I(x.value[m],m),n>=u){o=m;break}return Math.min(x.value.length,o+p+1)}),Xe=M(()=>S.value?x.value.slice(ke.value,fe.value):x.value),Te=M(()=>{if(!S.value)return 0;let n=0;for(let o=0;o<ke.value;o++)n+=I(x.value[o],o);return n}),Ze=n=>{if(!S.value)return;const o=n.target;d.value=o.scrollTop},$e=(n,o)=>{var j;if(!n.sorter)return;const p=n.key??n.dataIndex??"",u=(o==null?void 0:o.shiftKey)||typeof n.sorter=="object"&&"multiple"in n.sorter,m=K.value.findIndex(h=>h.key===p);if(m>=0){const h=K.value[m];h.order==="ascend"?K.value[m]={key:p,order:"descend",column:n}:h.order==="descend"&&(K.value=K.value.filter((ae,W)=>W!==m))}else{const h={key:p,order:"ascend",column:n};u?K.value=[...K.value,h]:K.value=[h]}const k=K.value.map(h=>({column:h.column,order:h.order,field:h.column.dataIndex,columnKey:h.key})),g={currentDataSource:ne.value,action:"sort"},_=k.length===1?k[0]:k;i("change",R.value,O.value,_,g),(j=e.onChange)==null||j.call(e,R.value,O.value,_,g)},et=(n,o)=>{var g,_,j;we.value=n,Se.value=o,(_=(g=R.value)==null?void 0:g.onChange)==null||_.call(g,n,o);const p={currentDataSource:x.value,action:"paginate"},u=K.value.map(h=>({column:h.column,order:h.order,field:h.column.dataIndex,columnKey:h.key})),m=u.length===1?u[0]:u,k={...R.value,current:n,pageSize:o};i("change",k,O.value,m,p),(j=e.onChange)==null||j.call(e,k,O.value,m,p)},V=C(((Re=e.rowSelection)==null?void 0:Re.selectedRowKeys)??[]);be(()=>{var n;return(n=e.rowSelection)==null?void 0:n.selectedRowKeys},n=>{n&&(V.value=n)});const Q=C(((_e=e.expandable)==null?void 0:_e.expandedRowKeys)??((Ne=e.expandable)==null?void 0:Ne.defaultExpandedRowKeys)??[]);be(()=>{var n;return(n=e.expandable)==null?void 0:n.expandedRowKeys},n=>{n!==void 0&&(Q.value=n)});const De=(n,o)=>{var u,m,k,g;const p=Y(o,0);n?Q.value=[...Q.value,p]:Q.value=Q.value.filter(_=>_!==p),(m=(u=e.expandable)==null?void 0:u.onExpand)==null||m.call(u,n,o),(g=(k=e.expandable)==null?void 0:k.onExpandedRowsChange)==null||g.call(k,Q.value)},tt=(n,o)=>{var k;O.value[n]=o;const p={currentDataSource:Ce.value,action:"filter"},u=K.value.map(g=>({column:g.column,order:g.order,field:g.column.dataIndex,columnKey:g.key})),m=u.length===1?u[0]:u;i("change",R.value,O.value,m,p),(k=e.onChange)==null||k.call(e,R.value,O.value,m,p)},ie=(n,o,p)=>{var g,_,j,h,ae;if(!e.rowSelection)return;let u,m="single";e.rowSelection.type==="radio"?u=p?[n]:[]:(u=p?[...V.value,n]:V.value.filter(W=>W!==n),m="multiple"),V.value=u;const k=((g=e.dataSource)==null?void 0:g.filter((W,ce)=>u.includes(Y(W,ce))))??[];(j=(_=e.rowSelection).onChange)==null||j.call(_,u,k,{type:m}),(ae=(h=e.rowSelection).onSelect)==null||ae.call(h,o,p,k,new Event("change"))},nt=n=>{var u,m,k,g;if(!e.rowSelection)return;const o=n?x.value.map((_,j)=>Y(_,j)):[];V.value=o;const p=n?[...x.value]:[];(m=(u=e.rowSelection).onChange)==null||m.call(u,o,p,{type:n?"all":"none"}),(g=(k=e.rowSelection).onSelectAll)==null||g.call(k,n,p,x.value)};return()=>{var ae,W,ce,qe,Ae,Ee,Fe,Ke,ze,Be,Pe,Je,je,Le,Oe,Me,He,Ve,Ye;const n=x.value.length===0,o=!!e.rowSelection,p=((ae=e.rowSelection)==null?void 0:ae.type)==="radio",u=!!((W=e.expandable)!=null&&W.expandedRowRender),m=x.value.length>0&&x.value.every((r,b)=>V.value.includes(Y(r,b))),k=x.value.some((r,b)=>V.value.includes(Y(r,b))),g=(X.value.length??0)+(o?1:0)+(u?1:0),_=typeof e.sticky=="object"?e.sticky:e.sticky?{offsetHeader:0}:void 0,j=_?{position:"sticky",top:`${_.offsetHeader||0}px`,zIndex:3}:{},h=a("div",{class:F(s,`${s}-${e.size}`,{[`${s}-bordered`]:e.bordered,[`${s}-loading`]:e.loading,[`${s}-scroll-horizontal`]:!!((ce=e.scroll)!=null&&ce.x),[`${s}-sticky`]:!!_},e.rootClassName,(qe=e.classNames)==null?void 0:qe.root),style:(Ae=e.styles)==null?void 0:Ae.root,role:"region","aria-label":"Data table"},[e.title&&a("div",{class:`${s}-title`},[typeof e.title=="function"?e.title(ne.value):e.title]),a("div",{class:`${s}-container`},[a("div",{ref:t,class:`${s}-content`,style:{...(Ee=e.scroll)!=null&&Ee.x?{overflowX:"auto"}:{},...S.value?{overflowY:"auto",maxHeight:typeof((Fe=e.scroll)==null?void 0:Fe.y)=="number"?`${e.scroll.y}px`:(Ke=e.scroll)==null?void 0:Ke.y}:{}},onScroll:Ze,role:"presentation"},[a("table",{role:"table","aria-rowcount":x.value.length,"aria-colcount":g,style:(ze=e.scroll)!=null&&ze.x?{minWidth:typeof e.scroll.x=="number"?`${e.scroll.x}px`:e.scroll.x}:{}},[e.showHeader&&a("thead",{class:F(`${s}-thead`,(Be=e.classNames)==null?void 0:Be.header),role:"rowgroup",style:{...j,...(Pe=e.styles)==null?void 0:Pe.header}},[a("tr",de(((Je=e.onHeaderRow)==null?void 0:Je.call(e,X.value??[],0))??{},{role:"row"}),[u&&a("th",{class:`${s}-cell ${s}-expand-icon-col`,style:{width:"48px"},role:"columnheader"},null),o&&a("th",{class:`${s}-cell ${s}-selection-column`,role:"columnheader","aria-label":"Row selection"},[!p&&a(ge,{checked:m,indeterminate:k&&!m,onChange:r=>nt(r)},null)]),X.value.map(r=>{var G;const b=r.key??r.dataIndex??"",v=K.value.find(w=>w.key===b),N=!!v,A=r.fixed==="left",B=r.fixed==="right",Z=r.filters&&r.filters.length>0,ee=((G=O.value[b])==null?void 0:G.length)>0;return a("th",{key:b,scope:"col",role:"columnheader","aria-sort":N?v.order==="ascend"?"ascending":"descending":r.sorter?"none":void 0,tabindex:r.sorter?0:void 0,onKeydown:w=>{r.sorter&&(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),$e(r,w))},class:F(`${s}-cell`,{[`${s}-column-sort`]:N,[`${s}-column-has-sorters`]:!!r.sorter,[`${s}-cell-fix-left`]:A,[`${s}-cell-fix-right`]:B}),style:{width:r.width?typeof r.width=="number"?`${r.width}px`:r.width:void 0,textAlign:r.align??"left"},onClick:w=>r.sorter&&$e(r,w)},[a("div",{class:`${s}-column-title`},[r.title,r.sorter&&a("span",{class:`${s}-column-sorter`},[a("span",{class:F(`${s}-column-sorter-up`,{active:N&&(v==null?void 0:v.order)==="ascend"})},[T("▲")]),a("span",{class:F(`${s}-column-sorter-down`,{active:N&&(v==null?void 0:v.order)==="descend"})},[T("▼")])]),Z&&a(at,{trigger:["click"]},{default:()=>[a("span",{class:F(`${s}-filter-trigger`,{active:ee}),onClick:w=>w.stopPropagation()},[T("🔽")])],overlay:()=>a(yt,{prefixCls:s,filters:r.filters,filteredValue:O.value[b]||[],filterMultiple:r.filterMultiple??!0,locale:c.value.Table,onConfirm:w=>tt(b,w)},null)})])])})])]),a("tbody",{class:F(`${s}-tbody`,(je=e.classNames)==null?void 0:je.body),role:"rowgroup",style:(Le=e.styles)==null?void 0:Le.body},[n?a("tr",{class:`${s}-placeholder`,role:"row"},[a("td",{colspan:g,role:"cell"},[a(pt,{description:((Oe=e.locale)==null?void 0:Oe.emptyText)??c.value.Table.emptyText},null)])]):S.value?a(Ge,null,[Te.value>0&&a("tr",{style:{height:`${Te.value}px`},"aria-hidden":"true"},[a("td",{colspan:g},null)]),Xe.value.flatMap((r,b)=>{var ee,G,w,te,se,q;const v=ke.value+b,N=Y(r,v),A=V.value.includes(N),B=Q.value.includes(N),Z=[a("tr",de({key:N,role:"row","aria-selected":o?A:void 0,"aria-expanded":u?B:void 0,class:F(`${s}-row`,{[`${s}-row-selected`]:A},(ee=e.classNames)==null?void 0:ee.row),style:(G=e.styles)==null?void 0:G.row},((w=e.onRow)==null?void 0:w.call(e,r,v))??{}),[u&&a("td",{class:`${s}-cell ${s}-expand-icon-cell`,role:"cell"},[a("button",{type:"button",class:F(`${s}-expand-icon`,{[`${s}-expand-icon-expanded`]:B}),onClick:()=>De(!B,r),"aria-label":B?"Collapse row":"Expand row","aria-expanded":B},[B?"▼":"▶"])]),o&&a("td",{class:`${s}-cell ${s}-selection-column`,role:"cell"},[p?a(We,{checked:A,onChange:E=>ie(N,r,E)},null):a(ge,de({checked:A,onChange:E=>ie(N,r,E)},((se=(te=e.rowSelection)==null?void 0:te.getCheckboxProps)==null?void 0:se.call(te,r))??{}),null)]),X.value.map(E=>{var oe,Qe;const ue=E.key??E.dataIndex??"",pe=Ie(r,E),xe=E.render?E.render(pe,r,v):pe,he=E.fixed==="left",me=E.fixed==="right";return a("td",{key:ue,role:"cell",class:F(`${s}-cell`,{[`${s}-cell-ellipsis`]:E.ellipsis,[`${s}-cell-fix-left`]:he,[`${s}-cell-fix-right`]:me},(oe=e.classNames)==null?void 0:oe.cell),style:{textAlign:E.align??"left",...(Qe=e.styles)==null?void 0:Qe.cell}},[xe])})])];return u&&B&&((q=e.expandable)!=null&&q.expandedRowRender)&&Z.push(a("tr",{key:`${N}-expanded`,class:`${s}-expanded-row`,role:"row"},[a("td",{colspan:g,class:`${s}-cell`,role:"cell"},[e.expandable.expandedRowRender(r,v,0,B)])])),Z}),fe.value<x.value.length&&(()=>{let r=0;for(let b=fe.value;b<x.value.length;b++)r+=I(x.value[b],b);return r>0?a("tr",{style:{height:`${r}px`},"aria-hidden":"true"},[a("td",{colspan:g},null)]):null})()]):x.value.flatMap((r,b)=>{var Z,ee,G,w,te,se;const v=Y(r,b),N=V.value.includes(v),A=Q.value.includes(v),B=[a("tr",de({key:v,role:"row","aria-selected":o?N:void 0,"aria-expanded":u?A:void 0,class:F(`${s}-row`,{[`${s}-row-selected`]:N},(Z=e.classNames)==null?void 0:Z.row),style:(ee=e.styles)==null?void 0:ee.row},((G=e.onRow)==null?void 0:G.call(e,r,b))??{}),[u&&a("td",{class:`${s}-cell ${s}-expand-icon-cell`,role:"cell"},[a("button",{type:"button",class:F(`${s}-expand-icon`,{[`${s}-expand-icon-expanded`]:A}),onClick:()=>De(!A,r),"aria-label":A?"Collapse row":"Expand row","aria-expanded":A},[A?"▼":"▶"])]),o&&a("td",{class:`${s}-cell ${s}-selection-column`,role:"cell"},[p?a(We,{checked:N,onChange:q=>ie(v,r,q)},null):a(ge,de({checked:N,onChange:q=>ie(v,r,q)},((te=(w=e.rowSelection)==null?void 0:w.getCheckboxProps)==null?void 0:te.call(w,r))??{}),null)]),X.value.map(q=>{var me,oe;const E=q.key??q.dataIndex??"",ue=Ie(r,q),pe=q.render?q.render(ue,r,b):ue,xe=q.fixed==="left",he=q.fixed==="right";return a("td",{key:E,role:"cell",class:F(`${s}-cell`,{[`${s}-cell-ellipsis`]:q.ellipsis,[`${s}-cell-fix-left`]:xe,[`${s}-cell-fix-right`]:he},(me=e.classNames)==null?void 0:me.cell),style:{textAlign:q.align??"left",...(oe=e.styles)==null?void 0:oe.cell}},[pe])})])];return u&&A&&((se=e.expandable)!=null&&se.expandedRowRender)&&B.push(a("tr",{key:`${v}-expanded`,class:`${s}-expanded-row`,role:"row"},[a("td",{colspan:g,class:`${s}-cell`,role:"cell"},[e.expandable.expandedRowRender(r,b,0,A)])])),B})]),e.summary&&!n&&a("tfoot",{class:`${s}-summary`},[e.summary(x.value)])])])]),e.footer&&a("div",{class:F(`${s}-footer`,(Me=e.classNames)==null?void 0:Me.footer),style:(He=e.styles)==null?void 0:He.footer},[typeof e.footer=="function"?e.footer(ne.value):e.footer]),R.value&&!n&&a("div",{class:F(`${s}-pagination`,`${s}-pagination-right`,(Ve=e.classNames)==null?void 0:Ve.pagination),style:(Ye=e.styles)==null?void 0:Ye.pagination},[a(mt,{total:R.value.total,pageSize:R.value.pageSize,current:R.value.current,showQuickJumper:R.value.showQuickJumper,showSizeChanger:R.value.showSizeChanger,showTotal:R.value.showTotal,pageSizeOptions:R.value.pageSizeOptions,onChange:et},null)])]);return e.loading?a("div",{style:{position:"relative"}},[a(gt,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10}},null),a("div",{style:{opacity:.5}},[h])]):h}}}),ft=z({__name:"TableBasic",setup(e){const i=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],s=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(c,t)=>(P(),U(y($),{"data-source":i,columns:s,"row-key":"key"}))}}),xt=`<template>
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
`,ht={class:"demo-table-classnames"},bt={class:"demo-section"},vt={class:"demo-section"},wt={class:"demo-section"},St={class:"demo-section"},It={class:"demo-section"},Ct={class:"demo-section"},Tt=z({__name:"TableClassNames",setup(e){const i=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"},{key:"3",name:"李小明",age:28,address:"上城区西湖大道3号"}],s=[...i,{key:"4",name:"王大锤",age:35,address:"滨江区江南大道4号"},{key:"5",name:"赵敏",age:24,address:"余杭区文一西路5号"}],c=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(t,d)=>(P(),re("div",ht,[l("section",bt,[d[0]||(d[0]=l("h3",null,"1. 自定义根节点样式",-1)),a(y($),{"data-source":i,columns:c,"row-key":"key","class-names":{root:"custom-root"}})]),l("section",vt,[d[1]||(d[1]=l("h3",null,"2. 自定义表头样式",-1)),a(y($),{"data-source":i,columns:c,"row-key":"key","class-names":{header:"custom-header"}})]),l("section",wt,[d[2]||(d[2]=l("h3",null,"3. 自定义行与单元格样式",-1)),a(y($),{"data-source":i,columns:c,"row-key":"key","class-names":{row:"custom-row",cell:"custom-cell"}})]),l("section",St,[d[3]||(d[3]=l("h3",null,"4. 自定义底部与分页样式",-1)),a(y($),{"data-source":s,columns:c,"row-key":"key",footer:()=>"表格底部信息",pagination:{pageSize:3,total:s.length,current:1},"class-names":{footer:"custom-footer",pagination:"custom-pagination"}},null,8,["pagination"])]),l("section",It,[d[4]||(d[4]=l("h3",null,"5. 组合使用多个 classNames",-1)),a(y($),{"data-source":i,columns:c,"row-key":"key","class-names":{root:"combined-root",header:"combined-header",row:"combined-row",cell:"combined-cell"}})]),l("section",Ct,[d[5]||(d[5]=l("h3",null,"6. 使用 styles 动态样式",-1)),a(y($),{"data-source":i,columns:c,"row-key":"key",styles:{root:{border:"2px solid #1890ff",borderRadius:"12px",overflow:"hidden"},header:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},cell:{fontSize:"14px"}}})])]))}}),$t=rt(Tt,[["__scopeId","data-v-317fec8f"]]),Dt=`<template>
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
`,Rt=z({__name:"TableEditable",setup(e){const i=C([{key:1,name:"李明",age:28,address:"北京市朝阳区"},{key:2,name:"王芳",age:32,address:"上海市浦东新区"},{key:3,name:"张伟",age:25,address:"广州市天河区"}]),s=C(null),c=it({}),t=D=>D.key===s.value,d=D=>{s.value=D.key,Object.assign(c,{...D})},f=D=>{const I=i.value.findIndex(H=>H.key===D);I>-1&&Object.assign(i.value[I],c),s.value=null},J=()=>{s.value=null},S=[{title:"姓名",dataIndex:"name",key:"name",width:200,render:(D,I)=>t(I)?a(ve,{value:c.name,onChange:H=>c.name=H.target.value},null):D},{title:"年龄",dataIndex:"age",key:"age",width:150,render:(D,I)=>t(I)?a(ve,{type:"number",value:c.age,onChange:H=>c.age=Number(H.target.value)},null):D},{title:"地址",dataIndex:"address",key:"address",render:(D,I)=>t(I)?a(ve,{value:c.address,onChange:H=>c.address=H.target.value},null):D},{title:"操作",key:"action",width:150,render:(D,I)=>t(I)?a("span",null,[a(le,{type:"link",onClick:()=>f(I.key),style:{marginRight:"8px"}},{default:()=>[T("保存")]}),a(le,{type:"link",onClick:J},{default:()=>[T("取消")]})]):a(le,{type:"link",onClick:()=>d(I),disabled:s.value!==null},{default:()=>[T("编辑")]})}];return(D,I)=>(P(),U(y($),{"data-source":i.value,columns:S,pagination:!1,bordered:""},null,8,["data-source"]))}}),_t=`<script setup lang="tsx">
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
`,Nt=z({__name:"TableExpandable",setup(e){const i=C([]),s=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}],c=[{key:"1",name:"Joe",age:32,address:"New York",description:"My name is Joe, I am 32 years old, living in New York."},{key:"2",name:"Jim",age:28,address:"London",description:"My name is Jim, I am 28 years old, living in London."},{key:"3",name:"Alice",age:35,address:"Sydney",description:"My name is Alice, I am 35 years old, living in Sydney."}],t={expandedRowRender:d=>d.description,expandedRowKeys:i.value,onExpandedRowsChange:d=>{i.value=d}};return(d,f)=>(P(),U(y($),{columns:s,"data-source":c,expandable:t}))}}),qt=`<template>
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
`,At=z({__name:"TableFilter",setup(e){const i=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"},{text:"Alice",value:"Alice"}],onFilter:(c,t)=>t.name.includes(c)},{title:"Age",dataIndex:"age",key:"age",filters:[{text:"20-30",value:"20-30"},{text:"30-40",value:"30-40"}],onFilter:(c,t)=>{const d=t.age;return c==="20-30"?d>=20&&d<30:c==="30-40"?d>=30&&d<40:!1}},{title:"Address",dataIndex:"address",key:"address"}],s=[{key:"1",name:"Joe",age:32,address:"New York"},{key:"2",name:"Jim",age:28,address:"London"},{key:"3",name:"Alice",age:35,address:"Sydney"},{key:"4",name:"Bob",age:25,address:"Paris"}];return(c,t)=>(P(),U(y($),{columns:i,"data-source":s}))}}),Et=`<template>
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
`,Ft=z({__name:"TableFixedColumns",setup(e){const i=[{title:"Name",dataIndex:"name",key:"name",fixed:"left",width:100},{title:"Age",dataIndex:"age",key:"age",width:80},{title:"Column 1",dataIndex:"col1",key:"col1",width:150},{title:"Column 2",dataIndex:"col2",key:"col2",width:150},{title:"Column 3",dataIndex:"col3",key:"col3",width:150},{title:"Column 4",dataIndex:"col4",key:"col4",width:150},{title:"Action",key:"action",fixed:"right",width:100,render:()=>"Edit"}],s=[{key:"1",name:"Joe",age:32,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"},{key:"2",name:"Jim",age:28,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"},{key:"3",name:"Alice",age:35,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"}];return(c,t)=>(P(),U(y($),{columns:i,"data-source":s,scroll:{x:1200},bordered:""}))}}),Kt=`<template>
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
`,zt=z({__name:"TableResponsive",setup(e){const i=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age",responsive:["sm","md","lg","xl","xxl"]},{title:"Email",dataIndex:"email",key:"email",responsive:["md","lg","xl","xxl"]},{title:"Phone",dataIndex:"phone",key:"phone",responsive:["lg","xl","xxl"]},{title:"Address",dataIndex:"address",key:"address",responsive:["xl","xxl"]}],s=[{key:"1",name:"Joe",age:32,email:"joe@example.com",phone:"123-456-7890",address:"New York No. 1 Lake Park"},{key:"2",name:"Jim",age:28,email:"jim@example.com",phone:"098-765-4321",address:"London No. 1 Lake Park"},{key:"3",name:"Alice",age:35,email:"alice@example.com",phone:"555-123-4567",address:"Sydney No. 1 Lake Park"}];return(c,t)=>(P(),U(y($),{columns:i,"data-source":s}))}}),Bt=`<template>
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
`,Pt=z({__name:"TableRowSelection",setup(e){const i=C([]),s={selectedRowKeys:i,onChange:d=>{i.value=d}},c=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],t=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(d,f)=>(P(),re(Ge,null,[a(y($),{"data-source":c,columns:t,"row-key":"key","row-selection":s}),l("p",null,"已选择："+Ue(i.value.join(", ")),1)],64))}}),Jt=`<template>
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
`,jt=z({__name:"TableSorter",setup(e){const i=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"},{key:"3",name:"李明",age:28,address:"朝阳区建国路88号"}],s=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age",sorter:(c,t)=>c.age-t.age},{title:"住址",dataIndex:"address",key:"address"}];return(c,t)=>(P(),U(y($),{"data-source":i,columns:s,"row-key":"key"}))}}),Lt=`<template>
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
`,Ot={style:{height:"600px",overflow:"auto"}},Mt=z({__name:"TableSticky",setup(e){const i=C(Array.from({length:100},(c,t)=>({key:t,name:`李明 ${t+1}`,age:20+t%50,address:`北京市朝阳区某街道 ${t+1} 号`,tags:t%2===0?["开发者","设计师"]:["产品经理"]}))),s=[{title:"姓名",dataIndex:"name",key:"name",width:150,fixed:"left"},{title:"年龄",dataIndex:"age",key:"age",width:100,sorter:(c,t)=>c.age-t.age},{title:"地址",dataIndex:"address",key:"address",width:300},{title:"标签",key:"tags",dataIndex:"tags",width:200,render:c=>c.join(", ")}];return(c,t)=>(P(),re("div",Ot,[t[0]||(t[0]=l("div",{style:{height:"300px",background:"#f0f0f0",display:"flex","align-items":"center","justify-content":"center","margin-bottom":"16px"}},[l("p",null,"向下滚动查看表头吸顶效果")],-1)),a(y($),{"data-source":i.value,columns:s,pagination:!1,scroll:{y:300},sticky:!0,bordered:""},null,8,["data-source"]),t[1]||(t[1]=l("div",{style:{height:"300px",background:"#f0f0f0",display:"flex","align-items":"center","justify-content":"center","margin-top":"16px"}},[l("p",null,"底部内容")],-1))]))}}),Ht=`<script setup lang="ts">
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
`,Vt=z({__name:"TableSummary",setup(e){const i=[{key:1,name:"笔记本电脑",category:"电子产品",price:5999,quantity:3},{key:2,name:"机械键盘",category:"电子产品",price:599,quantity:5},{key:3,name:"显示器",category:"电子产品",price:1999,quantity:2},{key:4,name:"鼠标",category:"电子产品",price:199,quantity:10},{key:5,name:"耳机",category:"电子产品",price:399,quantity:6}],s=[{title:"商品名称",dataIndex:"name",key:"name"},{title:"类别",dataIndex:"category",key:"category"},{title:"单价（元）",dataIndex:"price",key:"price",align:"right",render:t=>`¥${t.toFixed(2)}`},{title:"数量",dataIndex:"quantity",key:"quantity",align:"right"},{title:"总价（元）",key:"total",align:"right",render:(t,d)=>`¥${(d.price*d.quantity).toFixed(2)}`}],c=t=>{const d=t.reduce((J,S)=>J+S.quantity,0),f=t.reduce((J,S)=>J+S.price*S.quantity,0);return a("tr",null,[a("td",{colspan:"3",style:"text-align: right; font-weight: 600;"},[T("总计：")]),a("td",{style:"text-align: right; font-weight: 600;"},[d]),a("td",{style:"text-align: right; font-weight: 600;"},[T("¥"),f.toFixed(2)])])};return(t,d)=>(P(),U(y($),{"data-source":i,columns:s,pagination:!1,summary:c,bordered:""}))}}),Yt=`<script setup lang="tsx">
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
`,Qt={style:{"margin-bottom":"16px"}},Wt=z({__name:"TableVirtualScroll",setup(e){const s=C((t=>Array.from({length:t},(d,f)=>({key:f,name:`用户 ${f+1}`,age:20+f%50,address:`北京市朝阳区某街道 ${f+1} 号`,email:`user${f+1}@example.com`,phone:`138${String(f).padStart(8,"0")}`})))(1e3)),c=[{title:"姓名",dataIndex:"name",key:"name",width:120,fixed:"left"},{title:"年龄",dataIndex:"age",key:"age",width:80,sorter:(t,d)=>t.age-d.age},{title:"地址",dataIndex:"address",key:"address",width:300,ellipsis:!0},{title:"邮箱",dataIndex:"email",key:"email",width:200},{title:"手机号",dataIndex:"phone",key:"phone",width:150}];return(t,d)=>(P(),re("div",null,[l("p",Qt,[d[0]||(d[0]=T(" 共 ",-1)),l("strong",null,Ue(s.value.length),1),d[1]||(d[1]=T(" 条数据，使用虚拟滚动优化性能 ",-1))]),a(y($),{"data-source":s.value,columns:c,pagination:!1,scroll:{y:400,x:900},bordered:""},null,8,["data-source"])]))}}),Gt=`<script setup lang="ts">
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
`,Ut={class:"markdown-body"},Sn={__name:"table",setup(e,{expose:i}){return i({frontmatter:{}}),(c,t)=>{const d=ct("DemoBlock");return P(),re("div",Ut,[t[0]||(t[0]=l("h1",{id:"table-表格",tabindex:"-1"},"Table 表格",-1)),t[1]||(t[1]=l("p",null,"展示行列数据。",-1)),t[2]||(t[2]=l("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=l("ul",null,[l("li",null,"当有大量结构化的数据需要展现时"),l("li",null,"当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时")],-1)),t[4]||(t[4]=l("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=l("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=l("p",null,"简单的表格，最后一列是各种操作。",-1)),a(d,{title:"基础用法",source:y(xt)},{default:L(()=>[a(ft)]),_:1},8,["source"]),t[7]||(t[7]=l("h3",{id:"排序",tabindex:"-1"},"排序",-1)),t[8]||(t[8]=l("p",null,"对某一列数据进行排序。支持多列排序（Shift + 点击表头）。",-1)),a(d,{title:"排序",source:y(Lt)},{default:L(()=>[a(jt)]),_:1},8,["source"]),t[9]||(t[9]=l("h3",{id:"行选择",tabindex:"-1"},"行选择",-1)),t[10]||(t[10]=l("p",null,"第一列是联动的选择框，支持单选和多选。",-1)),a(d,{title:"行选择",source:y(Jt)},{default:L(()=>[a(Pt)]),_:1},8,["source"]),t[11]||(t[11]=l("h3",{id:"筛选",tabindex:"-1"},"筛选",-1)),t[12]||(t[12]=l("p",null,"对某一列数据进行筛选。",-1)),a(d,{title:"筛选",source:y(Et)},{default:L(()=>[a(At)]),_:1},8,["source"]),t[13]||(t[13]=l("h3",{id:"固定列",tabindex:"-1"},"固定列",-1)),t[14]||(t[14]=l("p",null,"固定左侧或右侧的列，横向滚动时保持可见。",-1)),a(d,{title:"固定列",source:y(Kt)},{default:L(()=>[a(Ft)]),_:1},8,["source"]),t[15]||(t[15]=l("h3",{id:"展开行",tabindex:"-1"},"展开行",-1)),t[16]||(t[16]=l("p",null,"可展开的行，显示额外信息。",-1)),a(d,{title:"展开行",source:y(qt)},{default:L(()=>[a(Nt)]),_:1},8,["source"]),t[17]||(t[17]=l("h3",{id:"响应式",tabindex:"-1"},"响应式",-1)),t[18]||(t[18]=l("p",null,"根据屏幕大小自动显示或隐藏列。",-1)),a(d,{title:"响应式",source:y(Bt)},{default:L(()=>[a(zt)]),_:1},8,["source"]),t[19]||(t[19]=l("h3",{id:"虚拟滚动",tabindex:"-1"},"虚拟滚动",-1)),t[20]||(t[20]=l("p",null,"大数据场景下使用虚拟滚动优化性能，支持 1000+ 行数据流畅滚动。",-1)),a(d,{title:"虚拟滚动",source:y(Gt)},{default:L(()=>[a(Wt)]),_:1},8,["source"]),t[21]||(t[21]=l("h3",{id:"吸顶表头",tabindex:"-1"},"吸顶表头",-1)),t[22]||(t[22]=l("p",null,"当页面滚动时，表头会固定在页面顶部。",-1)),a(d,{title:"吸顶表头",source:y(Ht)},{default:L(()=>[a(Mt)]),_:1},8,["source"]),t[23]||(t[23]=l("h3",{id:"总结栏",tabindex:"-1"},"总结栏",-1)),t[24]||(t[24]=l("p",null,[T("通过 "),l("code",null,"summary"),T(" 可以在表格尾部添加合计行。")],-1)),a(d,{title:"总结栏",source:y(Yt)},{default:L(()=>[a(Vt)]),_:1},8,["source"]),t[25]||(t[25]=l("h3",{id:"可编辑单元格",tabindex:"-1"},"可编辑单元格",-1)),t[26]||(t[26]=l("p",null,[T("通过自定义 "),l("code",null,"render"),T(" 函数实现可编辑的单元格。")],-1)),a(d,{title:"可编辑单元格",source:y(_t)},{default:L(()=>[a(Rt)]),_:1},8,["source"]),t[27]||(t[27]=l("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[28]||(t[28]=l("p",null,[T("通过 "),l("code",null,"classNames"),T(" / "),l("code",null,"styles"),T(" 对各子元素做细粒度样式控制。")],-1)),a(d,{title:"语义化 className 与 style",source:y(Dt)},{default:L(()=>[a($t)]),_:1},8,["source"]),t[29]||(t[29]=ut(`<h2 id="api" tabindex="-1">API</h2><h3 id="table-props" tabindex="-1">Table Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据数组</td><td><code>any[]</code></td><td>-</td></tr><tr><td>columns</td><td>表格列的配置描述</td><td><code>TableColumn[]</code></td><td>-</td></tr><tr><td>rowKey</td><td>表格行 key 的取值</td><td><code>string | ((record: any) =&gt; Key)</code></td><td><code>&#39;key&#39;</code></td></tr><tr><td>loading</td><td>页面是否加载中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>分页器，设为 false 时不展示</td><td><code>TablePaginationConfig | false</code></td><td>-</td></tr><tr><td>rowSelection</td><td>列表项是否可选择</td><td><code>TableRowSelection</code></td><td>-</td></tr><tr><td>expandable</td><td>配置展开属性</td><td><code>ExpandableConfig</code></td><td>-</td></tr><tr><td>size</td><td>表格大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>bordered</td><td>是否展示外边框和列边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showHeader</td><td>是否显示表头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>sticky</td><td>设置粘性头部和滚动条</td><td><code>boolean | { offsetHeader?: number, offsetScroll?: number }</code></td><td><code>false</code></td></tr><tr><td>scroll</td><td>表格是否可滚动</td><td><code>{ x?: number | string, y?: number | string }</code></td><td>-</td></tr><tr><td>summary</td><td>总结栏</td><td><code>(pageData: any[]) =&gt; VNode</code></td><td>-</td></tr><tr><td>title</td><td>表格标题</td><td><code>string | ((data: any[]) =&gt; VNode)</code></td><td>-</td></tr><tr><td>footer</td><td>表格页脚</td><td><code>string | ((data: any[]) =&gt; VNode)</code></td><td>-</td></tr><tr><td>locale</td><td>国际化配置</td><td><code>{ emptyText?: string }</code></td><td>-</td></tr><tr><td>onChange</td><td>分页、排序、筛选变化时触发</td><td><code>(pagination, filters, sorter, extra) =&gt; void</code></td><td>-</td></tr><tr><td>onRow</td><td>设置行属性</td><td><code>(record, index) =&gt; object</code></td><td>-</td></tr><tr><td>onHeaderRow</td><td>设置表头行属性</td><td><code>(columns, index) =&gt; object</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">详见下方</a>）</td><td><code>TableSemanticClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">详见下方</a>）</td><td><code>TableSemanticStyles</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根节点额外类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="tablecolumn" tabindex="-1">TableColumn</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>列的唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>列头显示文字</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>dataIndex</td><td>列数据在数据项中对应的路径</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>列宽度</td><td><code>number | string</code></td><td>-</td></tr><tr><td>align</td><td>设置列的对齐方式</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>fixed</td><td>列是否固定（左侧/右侧）</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>ellipsis</td><td>超过宽度将自动省略</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>sorter</td><td>排序函数，支持多列排序</td><td><code>CompareFn | { compare: CompareFn, multiple: number }</code></td><td>-</td></tr><tr><td>sortOrder</td><td>排序的受控属性</td><td><code>&#39;ascend&#39; | &#39;descend&#39; | null</code></td><td>-</td></tr><tr><td>filters</td><td>表头的筛选菜单项</td><td><code>ColumnFilterItem[]</code></td><td>-</td></tr><tr><td>filteredValue</td><td>筛选的受控属性</td><td><code>FilterValue</code></td><td>-</td></tr><tr><td>onFilter</td><td>筛选函数</td><td><code>(value: any, record: any) =&gt; boolean</code></td><td>-</td></tr><tr><td>filterMultiple</td><td>是否多选</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>responsive</td><td>响应式断点</td><td><code>(&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39;)[]</code></td><td>-</td></tr><tr><td>render</td><td>自定义渲染函数</td><td><code>(text: any, record: any, index: number) =&gt; any</code></td><td>-</td></tr></tbody></table><h3 id="tablerowselection" tabindex="-1">TableRowSelection</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>选择框类型</td><td><code>&#39;checkbox&#39; | &#39;radio&#39;</code></td><td><code>&#39;checkbox&#39;</code></td></tr><tr><td>selectedRowKeys</td><td>指定选中项的 key 数组</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>onChange</td><td>选中项发生变化时的回调</td><td><code>(keys: Key[], rows: any[], info: { type: string }) =&gt; void</code></td><td>-</td></tr><tr><td>onSelect</td><td>用户手动选择/取消选择某行的回调</td><td><code>(record, selected, selectedRows, nativeEvent) =&gt; void</code></td><td>-</td></tr><tr><td>onSelectAll</td><td>用户手动选择/取消选择所有行的回调</td><td><code>(selected, selectedRows, changeRows) =&gt; void</code></td><td>-</td></tr><tr><td>getCheckboxProps</td><td>选择框的默认属性配置</td><td><code>(record) =&gt; object</code></td><td>-</td></tr></tbody></table><h3 id="expandableconfig" tabindex="-1">ExpandableConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>expandedRowRender</td><td>额外的展开行内容</td><td><code>(record, index, indent, expanded) =&gt; VNode</code></td><td>-</td></tr><tr><td>expandedRowKeys</td><td>展开的行，受控属性</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>defaultExpandedRowKeys</td><td>默认展开的行</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>onExpand</td><td>点击展开图标时触发</td><td><code>(expanded, record) =&gt; void</code></td><td>-</td></tr><tr><td>onExpandedRowsChange</td><td>展开的行变化时触发</td><td><code>(expandedKeys: Key[]) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="tablepaginationconfig" tabindex="-1">TablePaginationConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数</td><td><code>number</code></td><td>-</td></tr><tr><td>pageSize</td><td>每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td>-</td></tr><tr><td>showQuickJumper</td><td>是否可以快速跳转至某页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSizeChanger</td><td>是否展示 pageSize 切换器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showTotal</td><td>用于显示数据总量和当前数据顺序</td><td><code>(total, range) =&gt; string</code></td><td>-</td></tr><tr><td>pageSizeOptions</td><td>指定每页可以显示多少条</td><td><code>number[]</code></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td>onChange</td><td>页码或 pageSize 改变的回调</td><td><code>(page, pageSize) =&gt; void</code></td><td>-</td></tr></tbody></table><h2 id="特性说明" tabindex="-1">特性说明</h2><h3 id="多列排序" tabindex="-1">多列排序</h3><p>按住 Shift 键点击多个列的表头，可以实现多列排序。排序优先级按照点击顺序。</p><h3 id="响应式列" tabindex="-1">响应式列</h3><p>通过配置 <code>responsive</code> 属性，可以根据屏幕断点自动显示或隐藏列：</p><ul><li><code>xs</code>: 0px</li><li><code>sm</code>: 576px</li><li><code>md</code>: 768px</li><li><code>lg</code>: 992px</li><li><code>xl</code>: 1200px</li><li><code>xxl</code>: 1600px</li></ul><h3 id="固定列-1" tabindex="-1">固定列</h3><p>设置 <code>fixed</code> 为 <code>&#39;left&#39;</code> 或 <code>&#39;right&#39;</code>，可以固定列到左侧或右侧。滚动时会自动显示阴影效果。</p><h3 id="可访问性" tabindex="-1">可访问性</h3><p>Table 组件完全支持键盘导航和屏幕阅读器：</p><ul><li>使用 <code>Enter</code> 或 <code>Space</code> 键可以触发排序</li><li>完整的 ARIA 标签支持</li><li>符合 WCAG 2.1 AA 标准</li></ul><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Table的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Table
    :data-source=&quot;data&quot;
    :columns=&quot;columns&quot;
    :classNames=&quot;{
      root: &#39;my-table&#39;,
      header: &#39;my-header&#39;,
      row: &#39;my-row&#39;,
      cell: &#39;my-cell&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-table) {
  border-radius: 12px;
}

:deep(.my-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

:deep(.my-row:hover) {
  background: #f0f5ff;
}

:deep(.my-cell) {
  font-size: 14px;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Table
    :data-source=&quot;data&quot;
    :columns=&quot;columns&quot;
    :styles=&quot;{
      root: { border: &#39;2px solid #1890ff&#39;, borderRadius: &#39;12px&#39; },
      header: { background: &#39;#667eea&#39; },
      cell: { fontSize: &#39;14px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>cell</code> 同时应用于所有数据单元格（<code>&lt;td&gt;</code>），表头单元格（<code>&lt;th&gt;</code>）不应用此 className，如需定制表头单元格请通过 <code>header</code> 的后代选择器（如 <code>.my-header th</code>）</li><li><code>row</code> 应用于所有数据行，包括虚拟滚动模式下的行</li><li><code>header</code>/<code>body</code> 分别对应 <code>&lt;thead&gt;</code>/<code>&lt;tbody&gt;</code> 元素</li><li><code>footer</code> 仅在设置了 <code>footer</code> 属性时渲染</li><li><code>pagination</code> 仅在分页启用且有数据时渲染</li><li><code>styles.header</code> 会与 sticky 模式下的定位样式合并；<code>styles.cell</code> 会与列的 <code>align</code> 对齐样式合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr></tbody></table>`,36))])}}};export{Sn as default};
