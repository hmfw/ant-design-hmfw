import{R as We}from"./index-CwBignI4.js";import{D as at}from"./index-dIxoZKWY.js";import{B as le}from"./Button-DSSb4voj.js";import{C as ge}from"./Checkbox-C2HuoJ14.js";import{o as z,E as C,n as a,N as dt,M as st,x as ot,y as lt,Q as be,s as oe,m as K,F as Ge,f as O,A as J,i as U,K as y,k as re,h as r,_ as rt,D as ct,J as Ue,H as it,R as L,l as ut}from"./index-GV1C9GBE.js";import{c as E}from"./cls-S9IiI6wd.js";import{E as pt}from"./Empty-7zglm6mC.js";import{P as mt}from"./Pagination-vvvxJpG-.js";import{S as gt}from"./Spin-CxXLZAPZ.js";import{I as ve}from"./Input-6b2cf6p_.js";import"./Menu-BYDkYbHy.js";import"./DownOutlined-ZO2MOa6J.js";import"./Icon-m2YBXu_N.js";import"./LoadingOutlined-Bntwy_Yd.js";import"./LeftOutlined-C2UDGUiH.js";import"./RightOutlined-Ckbyq-Iq.js";import"./Select-QKM0s4Bn.js";import"./VirtualList-D1QzxV36.js";import"./CloseOutlined-qamoVtn_.js";import"./EyeOutlined-CDpUofBj.js";import"./SearchOutlined-CpISnoU0.js";const yt=z({name:"FilterDropdown",props:{prefixCls:{type:String,required:!0},filters:{type:Array,default:()=>[]},filteredValue:{type:Array,default:()=>[]},filterMultiple:{type:Boolean,default:!0},locale:{type:Object,default:()=>({})},onConfirm:{type:Function,required:!0}},setup(e){const c=C([...e.filteredValue.filter(f=>typeof f=="string"||typeof f=="number")]),d=(f,P)=>{e.filterMultiple?P?c.value=[...c.value,f]:c.value=c.value.filter(S=>S!==f):c.value=P?[f]:[]},i=()=>{e.onConfirm(c.value)},n=()=>{c.value=[],e.onConfirm([])},o=()=>e.filters.map(f=>{const P=c.value.includes(f.value);return a("div",{key:String(f.value),class:`${e.prefixCls}-dropdown-menu-item`},[a(ge,{checked:P,onChange:S=>d(f.value,S)},{default:()=>[f.text]})])});return()=>a("div",{class:`${e.prefixCls}-dropdown`},[a("div",{class:`${e.prefixCls}-dropdown-menu`},[o()]),a("div",{class:`${e.prefixCls}-dropdown-btns`},[a(le,{size:"small",onClick:n},{default:()=>[e.locale.filterReset||"重置"]}),a(le,{type:"primary",size:"small",onClick:i},{default:()=>[e.locale.filterConfirm||"确定"]})])])}}),kt={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},T=z({name:"Table",props:{dataSource:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},rowKey:[String,Function],loading:Boolean,bordered:Boolean,size:{type:String,default:"default"},scroll:Object,pagination:{type:[Boolean,Object],default:void 0},rowSelection:Object,expandable:Object,locale:Object,showHeader:{type:Boolean,default:!0},sticky:[Boolean,Object],summary:Function,title:[String,Function],footer:[String,Function],onRow:Function,onHeaderRow:Function,onChange:Function,classNames:Object,styles:Object,rootClassName:String},emits:["change"],setup(e,{emit:c}){var Re,_e,qe;const d=dt("table"),i=st(),n=C(),o=C(0),f=C(new Map),P=54,S=O(()=>{var t;return!!((t=e.scroll)!=null&&t.y&&e.dataSource&&e.dataSource.length>20)}),$=O(()=>{var t;return(t=e.scroll)!=null&&t.y?typeof e.scroll.y=="number"?e.scroll.y:parseInt(e.scroll.y)||400:0}),I=(t,s)=>{const p=Y(t,s);return f.value.get(p)||P},H=C("xxl"),ye=()=>{var p;const t=window.innerWidth,s=((p=Object.entries(kt).reverse().find(([u,m])=>t>=m))==null?void 0:p[0])||"xs";H.value=s};ot(()=>{ye(),window.addEventListener("resize",ye)}),lt(()=>{window.removeEventListener("resize",ye)});const X=O(()=>{var t;return((t=e.columns)==null?void 0:t.filter(s=>!s.responsive||s.responsive.length===0?!0:s.responsive.includes(H.value)))??[]}),F=C([]),M=C({}),we=C(1),Se=C(10);be(()=>X.value,t=>{t&&t.forEach(s=>{const p=s.key??s.dataIndex??"";s.filteredValue!==void 0&&s.filteredValue!==null&&(M.value[p]=s.filteredValue)})},{immediate:!0});const Y=(t,s)=>typeof e.rowKey=="function"?e.rowKey(t):typeof e.rowKey=="string"?t[e.rowKey]:t.key??String(s),Ie=(t,s)=>{if(s.dataIndex)return t[s.dataIndex]},Ce=O(()=>{let t=[...e.dataSource??[]];return X.value.forEach(s=>{const p=s.key??s.dataIndex??"",u=M.value[p];u!=null&&u.length&&s.onFilter&&(t=t.filter(m=>u.some(k=>s.onFilter(k,m))))}),t}),ne=O(()=>{const t=[...Ce.value];return F.value.length===0||t.sort((s,p)=>{for(const u of F.value){const m=u.column;if(!m.sorter||!u.order)continue;const k=typeof m.sorter=="function"?m.sorter:void 0;if(!k)continue;const g=k(s,p);if(g!==0)return u.order==="descend"?-g:g}return 0}),t}),D=O(()=>{if(e.pagination===!1)return null;const t=typeof e.pagination=="object"?e.pagination:{};return{pageSize:(t==null?void 0:t.pageSize)??Se.value,current:(t==null?void 0:t.current)??we.value,total:(t==null?void 0:t.total)??ne.value.length,onChange:t==null?void 0:t.onChange,showQuickJumper:t==null?void 0:t.showQuickJumper,showSizeChanger:t==null?void 0:t.showSizeChanger,showTotal:t==null?void 0:t.showTotal,pageSizeOptions:t==null?void 0:t.pageSizeOptions}}),x=O(()=>{if(!D.value)return ne.value;const{current:t,pageSize:s}=D.value,p=(t-1)*s;return ne.value.slice(p,p+s)}),ke=O(()=>{if(!S.value)return 0;let t=0,s=0;const p=5;for(;s<x.value.length;s++){if(t>=o.value)return Math.max(0,s-p);t+=I(x.value[s],s)}return 0}),fe=O(()=>{if(!S.value)return x.value.length;let t=0,s=0;const p=5,u=o.value+$.value;for(let m=0;m<x.value.length;m++)if(t+=I(x.value[m],m),t>=u){s=m;break}return Math.min(x.value.length,s+p+1)}),Xe=O(()=>S.value?x.value.slice(ke.value,fe.value):x.value),Te=O(()=>{if(!S.value)return 0;let t=0;for(let s=0;s<ke.value;s++)t+=I(x.value[s],s);return t}),Ze=t=>{if(!S.value)return;const s=t.target;o.value=s.scrollTop},$e=(t,s)=>{var j;if(!t.sorter)return;const p=t.key??t.dataIndex??"",u=(s==null?void 0:s.shiftKey)||typeof t.sorter=="object"&&"multiple"in t.sorter,m=F.value.findIndex(h=>h.key===p);if(m>=0){const h=F.value[m];h.order==="ascend"?F.value[m]={key:p,order:"descend",column:t}:h.order==="descend"&&(F.value=F.value.filter((ae,W)=>W!==m))}else{const h={key:p,order:"ascend",column:t};u?F.value=[...F.value,h]:F.value=[h]}const k=F.value.map(h=>({column:h.column,order:h.order,field:h.column.dataIndex,columnKey:h.key})),g={currentDataSource:ne.value,action:"sort"},R=k.length===1?k[0]:k;c("change",D.value,M.value,R,g),(j=e.onChange)==null||j.call(e,D.value,M.value,R,g)},et=(t,s)=>{var g,R,j;we.value=t,Se.value=s,(R=(g=D.value)==null?void 0:g.onChange)==null||R.call(g,t,s);const p={currentDataSource:x.value,action:"paginate"},u=F.value.map(h=>({column:h.column,order:h.order,field:h.column.dataIndex,columnKey:h.key})),m=u.length===1?u[0]:u,k={...D.value,current:t,pageSize:s};c("change",k,M.value,m,p),(j=e.onChange)==null||j.call(e,k,M.value,m,p)},V=C(((Re=e.rowSelection)==null?void 0:Re.selectedRowKeys)??[]);be(()=>{var t;return(t=e.rowSelection)==null?void 0:t.selectedRowKeys},t=>{t&&(V.value=t)});const Q=C(((_e=e.expandable)==null?void 0:_e.expandedRowKeys)??((qe=e.expandable)==null?void 0:qe.defaultExpandedRowKeys)??[]);be(()=>{var t;return(t=e.expandable)==null?void 0:t.expandedRowKeys},t=>{t!==void 0&&(Q.value=t)});const De=(t,s)=>{var u,m,k,g;const p=Y(s,0);t?Q.value=[...Q.value,p]:Q.value=Q.value.filter(R=>R!==p),(m=(u=e.expandable)==null?void 0:u.onExpand)==null||m.call(u,t,s),(g=(k=e.expandable)==null?void 0:k.onExpandedRowsChange)==null||g.call(k,Q.value)},tt=(t,s)=>{var k;M.value[t]=s;const p={currentDataSource:Ce.value,action:"filter"},u=F.value.map(g=>({column:g.column,order:g.order,field:g.column.dataIndex,columnKey:g.key})),m=u.length===1?u[0]:u;c("change",D.value,M.value,m,p),(k=e.onChange)==null||k.call(e,D.value,M.value,m,p)},ce=(t,s,p)=>{var g,R,j,h,ae;if(!e.rowSelection)return;let u,m="single";e.rowSelection.type==="radio"?u=p?[t]:[]:(u=p?[...V.value,t]:V.value.filter(W=>W!==t),m="multiple"),V.value=u;const k=((g=e.dataSource)==null?void 0:g.filter((W,ie)=>u.includes(Y(W,ie))))??[];(j=(R=e.rowSelection).onChange)==null||j.call(R,u,k,{type:m}),(ae=(h=e.rowSelection).onSelect)==null||ae.call(h,s,p,k,new Event("change"))},nt=t=>{var u,m,k,g;if(!e.rowSelection)return;const s=t?x.value.map((R,j)=>Y(R,j)):[];V.value=s;const p=t?[...x.value]:[];(m=(u=e.rowSelection).onChange)==null||m.call(u,s,p,{type:t?"all":"none"}),(g=(k=e.rowSelection).onSelectAll)==null||g.call(k,t,p,x.value)};return()=>{var ae,W,ie,Ne,Ae,Ee,Fe,Ke,ze,Be,Je,Pe,je,Le,Me,Oe,He,Ve,Ye;const t=x.value.length===0,s=!!e.rowSelection,p=((ae=e.rowSelection)==null?void 0:ae.type)==="radio",u=!!((W=e.expandable)!=null&&W.expandedRowRender),m=x.value.length>0&&x.value.every((l,b)=>V.value.includes(Y(l,b))),k=x.value.some((l,b)=>V.value.includes(Y(l,b))),g=(X.value.length??0)+(s?1:0)+(u?1:0),R=typeof e.sticky=="object"?e.sticky:e.sticky?{offsetHeader:0}:void 0,j=R?{position:"sticky",top:`${R.offsetHeader||0}px`,zIndex:3}:{},h=a("div",{class:E(d,`${d}-${e.size}`,{[`${d}-bordered`]:e.bordered,[`${d}-loading`]:e.loading,[`${d}-scroll-horizontal`]:!!((ie=e.scroll)!=null&&ie.x),[`${d}-sticky`]:!!R},e.rootClassName,(Ne=e.classNames)==null?void 0:Ne.root),style:(Ae=e.styles)==null?void 0:Ae.root,role:"region","aria-label":"Data table"},[e.title&&a("div",{class:`${d}-title`},[typeof e.title=="function"?e.title(ne.value):e.title]),a("div",{class:`${d}-container`},[a("div",{ref:n,class:`${d}-content`,style:{...(Ee=e.scroll)!=null&&Ee.x?{overflowX:"auto"}:{},...S.value?{overflowY:"auto",maxHeight:typeof((Fe=e.scroll)==null?void 0:Fe.y)=="number"?`${e.scroll.y}px`:(Ke=e.scroll)==null?void 0:Ke.y}:{}},onScroll:Ze,role:"presentation"},[a("table",{role:"table","aria-rowcount":x.value.length,"aria-colcount":g,style:(ze=e.scroll)!=null&&ze.x?{minWidth:typeof e.scroll.x=="number"?`${e.scroll.x}px`:e.scroll.x}:{}},[e.showHeader&&a("thead",{class:E(`${d}-thead`,(Be=e.classNames)==null?void 0:Be.header),role:"rowgroup",style:{...j,...(Je=e.styles)==null?void 0:Je.header}},[a("tr",oe(((Pe=e.onHeaderRow)==null?void 0:Pe.call(e,X.value??[],0))??{},{role:"row"}),[u&&a("th",{class:`${d}-cell ${d}-expand-icon-col`,style:{width:"48px"},role:"columnheader"},null),s&&a("th",{class:`${d}-cell ${d}-selection-column`,role:"columnheader","aria-label":"Row selection"},[!p&&a(ge,{checked:m,indeterminate:k&&!m,onChange:l=>nt(l)},null)]),X.value.map(l=>{var G;const b=l.key??l.dataIndex??"",v=F.value.find(w=>w.key===b),_=!!v,N=l.fixed==="left",B=l.fixed==="right",Z=l.filters&&l.filters.length>0,ee=((G=M.value[b])==null?void 0:G.length)>0;return a("th",{key:b,scope:"col",role:"columnheader","aria-sort":_?v.order==="ascend"?"ascending":"descending":l.sorter?"none":void 0,tabindex:l.sorter?0:void 0,onKeydown:w=>{l.sorter&&(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),$e(l,w))},class:E(`${d}-cell`,{[`${d}-column-sort`]:_,[`${d}-column-has-sorters`]:!!l.sorter,[`${d}-cell-fix-left`]:N,[`${d}-cell-fix-right`]:B}),style:{width:l.width?typeof l.width=="number"?`${l.width}px`:l.width:void 0,textAlign:l.align??"left"},onClick:w=>l.sorter&&$e(l,w)},[a("div",{class:`${d}-column-title`},[l.title,l.sorter&&a("span",{class:`${d}-column-sorter`},[a("span",{class:E(`${d}-column-sorter-up`,{active:_&&(v==null?void 0:v.order)==="ascend"})},[K("▲")]),a("span",{class:E(`${d}-column-sorter-down`,{active:_&&(v==null?void 0:v.order)==="descend"})},[K("▼")])]),Z&&a(at,{trigger:["click"]},{default:()=>[a("span",{class:E(`${d}-filter-trigger`,{active:ee}),onClick:w=>w.stopPropagation()},[K("🔽")])],overlay:()=>a(yt,{prefixCls:d,filters:l.filters,filteredValue:M.value[b]||[],filterMultiple:l.filterMultiple??!0,locale:i.value.Table,onConfirm:w=>tt(b,w)},null)})])])})])]),a("tbody",{class:E(`${d}-tbody`,(je=e.classNames)==null?void 0:je.body),role:"rowgroup",style:(Le=e.styles)==null?void 0:Le.body},[t?a("tr",{class:`${d}-placeholder`,role:"row"},[a("td",{colspan:g,role:"cell"},[a(pt,{description:((Me=e.locale)==null?void 0:Me.emptyText)??i.value.Table.emptyText},null)])]):S.value?a(Ge,null,[Te.value>0&&a("tr",{style:{height:`${Te.value}px`},"aria-hidden":"true"},[a("td",{colspan:g},null)]),Xe.value.flatMap((l,b)=>{var ee,G,w,te,de,q;const v=ke.value+b,_=Y(l,v),N=V.value.includes(_),B=Q.value.includes(_),Z=[a("tr",oe({key:_,role:"row","aria-selected":s?N:void 0,"aria-expanded":u?B:void 0,class:E(`${d}-row`,{[`${d}-row-selected`]:N},(ee=e.classNames)==null?void 0:ee.row),style:(G=e.styles)==null?void 0:G.row},((w=e.onRow)==null?void 0:w.call(e,l,v))??{}),[u&&a("td",{class:`${d}-cell ${d}-expand-icon-cell`,role:"cell"},[a("button",{type:"button",class:E(`${d}-expand-icon`,{[`${d}-expand-icon-expanded`]:B}),onClick:()=>De(!B,l),"aria-label":B?"Collapse row":"Expand row","aria-expanded":B},[B?"▼":"▶"])]),s&&a("td",{class:`${d}-cell ${d}-selection-column`,role:"cell"},[p?a(We,{checked:N,onChange:A=>ce(_,l,A)},null):a(ge,oe({checked:N,onChange:A=>ce(_,l,A)},((de=(te=e.rowSelection)==null?void 0:te.getCheckboxProps)==null?void 0:de.call(te,l))??{}),null)]),X.value.map(A=>{var se,Qe;const ue=A.key??A.dataIndex??"",pe=Ie(l,A),xe=A.render?A.render(pe,l,v):pe,he=A.fixed==="left",me=A.fixed==="right";return a("td",{key:ue,role:"cell",class:E(`${d}-cell`,{[`${d}-cell-ellipsis`]:A.ellipsis,[`${d}-cell-fix-left`]:he,[`${d}-cell-fix-right`]:me},(se=e.classNames)==null?void 0:se.cell),style:{textAlign:A.align??"left",...(Qe=e.styles)==null?void 0:Qe.cell}},[xe])})])];return u&&B&&((q=e.expandable)!=null&&q.expandedRowRender)&&Z.push(a("tr",{key:`${_}-expanded`,class:`${d}-expanded-row`,role:"row"},[a("td",{colspan:g,class:`${d}-cell`,role:"cell"},[e.expandable.expandedRowRender(l,v,0,B)])])),Z}),fe.value<x.value.length&&(()=>{let l=0;for(let b=fe.value;b<x.value.length;b++)l+=I(x.value[b],b);return l>0?a("tr",{style:{height:`${l}px`},"aria-hidden":"true"},[a("td",{colspan:g},null)]):null})()]):x.value.flatMap((l,b)=>{var Z,ee,G,w,te,de;const v=Y(l,b),_=V.value.includes(v),N=Q.value.includes(v),B=[a("tr",oe({key:v,role:"row","aria-selected":s?_:void 0,"aria-expanded":u?N:void 0,class:E(`${d}-row`,{[`${d}-row-selected`]:_},(Z=e.classNames)==null?void 0:Z.row),style:(ee=e.styles)==null?void 0:ee.row},((G=e.onRow)==null?void 0:G.call(e,l,b))??{}),[u&&a("td",{class:`${d}-cell ${d}-expand-icon-cell`,role:"cell"},[a("button",{type:"button",class:E(`${d}-expand-icon`,{[`${d}-expand-icon-expanded`]:N}),onClick:()=>De(!N,l),"aria-label":N?"Collapse row":"Expand row","aria-expanded":N},[N?"▼":"▶"])]),s&&a("td",{class:`${d}-cell ${d}-selection-column`,role:"cell"},[p?a(We,{checked:_,onChange:q=>ce(v,l,q)},null):a(ge,oe({checked:_,onChange:q=>ce(v,l,q)},((te=(w=e.rowSelection)==null?void 0:w.getCheckboxProps)==null?void 0:te.call(w,l))??{}),null)]),X.value.map(q=>{var me,se;const A=q.key??q.dataIndex??"",ue=Ie(l,q),pe=q.render?q.render(ue,l,b):ue,xe=q.fixed==="left",he=q.fixed==="right";return a("td",{key:A,role:"cell",class:E(`${d}-cell`,{[`${d}-cell-ellipsis`]:q.ellipsis,[`${d}-cell-fix-left`]:xe,[`${d}-cell-fix-right`]:he},(me=e.classNames)==null?void 0:me.cell),style:{textAlign:q.align??"left",...(se=e.styles)==null?void 0:se.cell}},[pe])})])];return u&&N&&((de=e.expandable)!=null&&de.expandedRowRender)&&B.push(a("tr",{key:`${v}-expanded`,class:`${d}-expanded-row`,role:"row"},[a("td",{colspan:g,class:`${d}-cell`,role:"cell"},[e.expandable.expandedRowRender(l,b,0,N)])])),B})]),e.summary&&!t&&a("tfoot",{class:`${d}-summary`},[e.summary(x.value)])])])]),e.footer&&a("div",{class:E(`${d}-footer`,(Oe=e.classNames)==null?void 0:Oe.footer),style:(He=e.styles)==null?void 0:He.footer},[typeof e.footer=="function"?e.footer(ne.value):e.footer]),D.value&&!t&&a("div",{class:E(`${d}-pagination`,`${d}-pagination-right`,(Ve=e.classNames)==null?void 0:Ve.pagination),style:(Ye=e.styles)==null?void 0:Ye.pagination},[a(mt,{total:D.value.total,pageSize:D.value.pageSize,current:D.value.current,showQuickJumper:D.value.showQuickJumper,showSizeChanger:D.value.showSizeChanger,showTotal:D.value.showTotal,pageSizeOptions:D.value.pageSizeOptions,onChange:et},null)])]);return e.loading?a("div",{style:{position:"relative"}},[a(gt,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10}},null),a("div",{style:{opacity:.5}},[h])]):h}}}),ft=z({__name:"TableBasic",setup(e){const c=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],d=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(i,n)=>(J(),U(y(T),{"data-source":c,columns:d,"row-key":"key"}))}}),xt=`<template>
  <Table :data-source="dataSource" :columns="columns" row-key="key" />
</template>

<script setup lang="ts">
import { Table } from 'ant-design-hmfw'

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
`,ht={class:"demo-table-classnames"},bt={class:"demo-section"},vt={class:"demo-section"},wt={class:"demo-section"},St={class:"demo-section"},It={class:"demo-section"},Ct={class:"demo-section"},Tt=z({__name:"TableClassNames",setup(e){const c=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"},{key:"3",name:"李小明",age:28,address:"上城区西湖大道3号"}],d=[...c,{key:"4",name:"王大锤",age:35,address:"滨江区江南大道4号"},{key:"5",name:"赵敏",age:24,address:"余杭区文一西路5号"}],i=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(n,o)=>(J(),re("div",ht,[r("section",bt,[o[0]||(o[0]=r("h3",null,"1. 自定义根节点样式",-1)),a(y(T),{"data-source":c,columns:i,"row-key":"key","class-names":{root:"custom-root"}})]),r("section",vt,[o[1]||(o[1]=r("h3",null,"2. 自定义表头样式",-1)),a(y(T),{"data-source":c,columns:i,"row-key":"key","class-names":{header:"custom-header"}})]),r("section",wt,[o[2]||(o[2]=r("h3",null,"3. 自定义行与单元格样式",-1)),a(y(T),{"data-source":c,columns:i,"row-key":"key","class-names":{row:"custom-row",cell:"custom-cell"}})]),r("section",St,[o[3]||(o[3]=r("h3",null,"4. 自定义底部与分页样式",-1)),a(y(T),{"data-source":d,columns:i,"row-key":"key",footer:()=>"表格底部信息",pagination:{pageSize:3,total:d.length,current:1},"class-names":{footer:"custom-footer",pagination:"custom-pagination"}},null,8,["pagination"])]),r("section",It,[o[4]||(o[4]=r("h3",null,"5. 组合使用多个 classNames",-1)),a(y(T),{"data-source":c,columns:i,"row-key":"key","class-names":{root:"combined-root",header:"combined-header",row:"combined-row",cell:"combined-cell"}})]),r("section",Ct,[o[5]||(o[5]=r("h3",null,"6. 使用 styles 动态样式",-1)),a(y(T),{"data-source":c,columns:i,"row-key":"key",styles:{root:{border:"2px solid #1890ff",borderRadius:"12px",overflow:"hidden"},header:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},cell:{fontSize:"14px"}}})])]))}}),$t=rt(Tt,[["__scopeId","data-v-40513316"]]),Dt=`<template>
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
import { Table } from '../../../components'

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
`,Rt=z({__name:"TableEditable",setup(e){const c=C([{key:1,name:"李明",age:28,address:"北京市朝阳区"},{key:2,name:"王芳",age:32,address:"上海市浦东新区"},{key:3,name:"张伟",age:25,address:"广州市天河区"}]),d=C(null),i=ct({}),n=$=>$.key===d.value,o=$=>{d.value=$.key,Object.assign(i,{...$})},f=$=>{const I=c.value.findIndex(H=>H.key===$);I>-1&&Object.assign(c.value[I],i),d.value=null},P=()=>{d.value=null},S=[{title:"姓名",dataIndex:"name",key:"name",width:200,render:($,I)=>n(I)?a(ve,{value:i.name,onChange:H=>i.name=H.target.value},null):$},{title:"年龄",dataIndex:"age",key:"age",width:150,render:($,I)=>n(I)?a(ve,{type:"number",value:i.age,onChange:H=>i.age=Number(H.target.value)},null):$},{title:"地址",dataIndex:"address",key:"address",render:($,I)=>n(I)?a(ve,{value:i.address,onChange:H=>i.address=H.target.value},null):$},{title:"操作",key:"action",width:150,render:($,I)=>n(I)?a("span",null,[a(le,{type:"link",onClick:()=>f(I.key),style:{marginRight:"8px"}},{default:()=>[K("保存")]}),a(le,{type:"link",onClick:P},{default:()=>[K("取消")]})]):a(le,{type:"link",onClick:()=>o(I),disabled:d.value!==null},{default:()=>[K("编辑")]})}];return($,I)=>(J(),U(y(T),{"data-source":c.value,columns:S,pagination:!1,bordered:""},null,8,["data-source"]))}}),_t=`<script setup lang="tsx">
import { ref, reactive } from 'vue'
import { Table, Input, Button } from '../../../components'
import type { TableColumn } from '../../../components'

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
`,qt=z({__name:"TableExpandable",setup(e){const c=C([]),d=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}],i=[{key:"1",name:"Joe",age:32,address:"New York",description:"My name is Joe, I am 32 years old, living in New York."},{key:"2",name:"Jim",age:28,address:"London",description:"My name is Jim, I am 28 years old, living in London."},{key:"3",name:"Alice",age:35,address:"Sydney",description:"My name is Alice, I am 35 years old, living in Sydney."}],n={expandedRowRender:o=>o.description,expandedRowKeys:c.value,onExpandedRowsChange:o=>{c.value=o}};return(o,f)=>(J(),U(y(T),{columns:d,"data-source":i,expandable:n}))}}),Nt=`<template>
  <Table :columns="columns" :data-source="data" :expandable="expandable" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Table } from 'ant-design-hmfw'

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
`,At=z({__name:"TableFilter",setup(e){const c=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"},{text:"Alice",value:"Alice"}],onFilter:(i,n)=>n.name.includes(i)},{title:"Age",dataIndex:"age",key:"age",filters:[{text:"20-30",value:"20-30"},{text:"30-40",value:"30-40"}],onFilter:(i,n)=>{const o=n.age;return i==="20-30"?o>=20&&o<30:i==="30-40"?o>=30&&o<40:!1}},{title:"Address",dataIndex:"address",key:"address"}],d=[{key:"1",name:"Joe",age:32,address:"New York"},{key:"2",name:"Jim",age:28,address:"London"},{key:"3",name:"Alice",age:35,address:"Sydney"},{key:"4",name:"Bob",age:25,address:"Paris"}];return(i,n)=>(J(),U(y(T),{columns:c,"data-source":d}))}}),Et=`<template>
  <Table :columns="columns" :data-source="data" />
</template>

<script setup lang="ts">
import { Table } from 'ant-design-hmfw'

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
`,Ft=z({__name:"TableFixedColumns",setup(e){const c=[{title:"Name",dataIndex:"name",key:"name",fixed:"left",width:100},{title:"Age",dataIndex:"age",key:"age",width:80},{title:"Column 1",dataIndex:"col1",key:"col1",width:150},{title:"Column 2",dataIndex:"col2",key:"col2",width:150},{title:"Column 3",dataIndex:"col3",key:"col3",width:150},{title:"Column 4",dataIndex:"col4",key:"col4",width:150},{title:"Action",key:"action",fixed:"right",width:100,render:()=>"Edit"}],d=[{key:"1",name:"Joe",age:32,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"},{key:"2",name:"Jim",age:28,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"},{key:"3",name:"Alice",age:35,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"}];return(i,n)=>(J(),U(y(T),{columns:c,"data-source":d,scroll:{x:1200},bordered:""}))}}),Kt=`<template>
  <Table :columns="columns" :data-source="data" :scroll="{ x: 1200 }" bordered />
</template>

<script setup lang="ts">
import { Table } from 'ant-design-hmfw'

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
`,zt=z({__name:"TableResponsive",setup(e){const c=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age",responsive:["sm","md","lg","xl","xxl"]},{title:"Email",dataIndex:"email",key:"email",responsive:["md","lg","xl","xxl"]},{title:"Phone",dataIndex:"phone",key:"phone",responsive:["lg","xl","xxl"]},{title:"Address",dataIndex:"address",key:"address",responsive:["xl","xxl"]}],d=[{key:"1",name:"Joe",age:32,email:"joe@example.com",phone:"123-456-7890",address:"New York No. 1 Lake Park"},{key:"2",name:"Jim",age:28,email:"jim@example.com",phone:"098-765-4321",address:"London No. 1 Lake Park"},{key:"3",name:"Alice",age:35,email:"alice@example.com",phone:"555-123-4567",address:"Sydney No. 1 Lake Park"}];return(i,n)=>(J(),U(y(T),{columns:c,"data-source":d}))}}),Bt=`<template>
  <Table :columns="columns" :data-source="data" />
</template>

<script setup lang="ts">
import { Table } from 'ant-design-hmfw'

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
`,Jt=z({__name:"TableRowSelection",setup(e){const c=C([]),d={selectedRowKeys:c,onChange:o=>{c.value=o}},i=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],n=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(o,f)=>(J(),re(Ge,null,[a(y(T),{"data-source":i,columns:n,"row-key":"key","row-selection":d}),r("p",null,"已选择："+Ue(c.value.join(", ")),1)],64))}}),Pt=`<template>
  <Table :data-source="dataSource" :columns="columns" row-key="key" :row-selection="rowSelection" />
  <p>已选择：{{ selectedKeys.join(', ') }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Table } from 'ant-design-hmfw'

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
`,jt=z({__name:"TableSorter",setup(e){const c=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"},{key:"3",name:"李明",age:28,address:"朝阳区建国路88号"}],d=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age",sorter:(i,n)=>i.age-n.age},{title:"住址",dataIndex:"address",key:"address"}];return(i,n)=>(J(),U(y(T),{"data-source":c,columns:d,"row-key":"key"}))}}),Lt=`<template>
  <Table :data-source="dataSource" :columns="columns" row-key="key" />
</template>

<script setup lang="ts">
import { Table } from 'ant-design-hmfw'

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
`,Mt={style:{height:"600px",overflow:"auto"}},Ot=z({__name:"TableSticky",setup(e){const c=C(Array.from({length:100},(i,n)=>({key:n,name:`李明 ${n+1}`,age:20+n%50,address:`北京市朝阳区某街道 ${n+1} 号`,tags:n%2===0?["开发者","设计师"]:["产品经理"]}))),d=[{title:"姓名",dataIndex:"name",key:"name",width:150,fixed:"left"},{title:"年龄",dataIndex:"age",key:"age",width:100,sorter:(i,n)=>i.age-n.age},{title:"地址",dataIndex:"address",key:"address",width:300},{title:"标签",key:"tags",dataIndex:"tags",width:200,render:i=>i.join(", ")}];return(i,n)=>(J(),re("div",Mt,[n[0]||(n[0]=r("div",{style:{height:"300px",background:"#f0f0f0",display:"flex","align-items":"center","justify-content":"center","margin-bottom":"16px"}},[r("p",null,"向下滚动查看表头吸顶效果")],-1)),a(y(T),{"data-source":c.value,columns:d,pagination:!1,scroll:{y:300},sticky:!0,bordered:""},null,8,["data-source"]),n[1]||(n[1]=r("div",{style:{height:"300px",background:"#f0f0f0",display:"flex","align-items":"center","justify-content":"center","margin-top":"16px"}},[r("p",null,"底部内容")],-1))]))}}),Ht=`<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '../../../components'
import type { TableColumn } from '../../../components'

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
`,Vt=z({__name:"TableSummary",setup(e){const c=[{key:1,name:"笔记本电脑",category:"电子产品",price:5999,quantity:3},{key:2,name:"机械键盘",category:"电子产品",price:599,quantity:5},{key:3,name:"显示器",category:"电子产品",price:1999,quantity:2},{key:4,name:"鼠标",category:"电子产品",price:199,quantity:10},{key:5,name:"耳机",category:"电子产品",price:399,quantity:6}],d=[{title:"商品名称",dataIndex:"name",key:"name"},{title:"类别",dataIndex:"category",key:"category"},{title:"单价（元）",dataIndex:"price",key:"price",align:"right",render:n=>`¥${n.toFixed(2)}`},{title:"数量",dataIndex:"quantity",key:"quantity",align:"right"},{title:"总价（元）",key:"total",align:"right",render:(n,o)=>`¥${(o.price*o.quantity).toFixed(2)}`}],i=n=>{const o=n.reduce((P,S)=>P+S.quantity,0),f=n.reduce((P,S)=>P+S.price*S.quantity,0);return a("tr",null,[a("td",{colspan:"3",style:"text-align: right; font-weight: 600;"},[K("总计：")]),a("td",{style:"text-align: right; font-weight: 600;"},[o]),a("td",{style:"text-align: right; font-weight: 600;"},[K("¥"),f.toFixed(2)])])};return(n,o)=>(J(),U(y(T),{"data-source":c,columns:d,pagination:!1,summary:i,bordered:""}))}}),Yt=`<script setup lang="tsx">
import { Table } from '../../../components'
import type { TableColumn } from '../../../components'

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
`,Qt={style:{"margin-bottom":"16px"}},Wt=z({__name:"TableVirtualScroll",setup(e){const d=C((n=>Array.from({length:n},(o,f)=>({key:f,name:`用户 ${f+1}`,age:20+f%50,address:`北京市朝阳区某街道 ${f+1} 号`,email:`user${f+1}@example.com`,phone:`138${String(f).padStart(8,"0")}`})))(1e3)),i=[{title:"姓名",dataIndex:"name",key:"name",width:120,fixed:"left"},{title:"年龄",dataIndex:"age",key:"age",width:80,sorter:(n,o)=>n.age-o.age},{title:"地址",dataIndex:"address",key:"address",width:300,ellipsis:!0},{title:"邮箱",dataIndex:"email",key:"email",width:200},{title:"手机号",dataIndex:"phone",key:"phone",width:150}];return(n,o)=>(J(),re("div",null,[r("p",Qt,[o[0]||(o[0]=K(" 共 ",-1)),r("strong",null,Ue(d.value.length),1),o[1]||(o[1]=K(" 条数据，使用虚拟滚动优化性能 ",-1))]),a(y(T),{"data-source":d.value,columns:i,pagination:!1,scroll:{y:400,x:900},bordered:""},null,8,["data-source"])]))}}),Gt=`<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '../../../components'
import type { TableColumn } from '../../../components'

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
`,Ut={class:"markdown-body"},bn={__name:"table",setup(e,{expose:c}){return c({frontmatter:{}}),(i,n)=>{const o=it("DemoBlock");return J(),re("div",Ut,[n[0]||(n[0]=r("h1",{id:"table-",tabindex:"-1"},"Table 表格",-1)),n[1]||(n[1]=r("p",null,"展示行列数据。",-1)),n[2]||(n[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=r("ul",null,[r("li",null,"当有大量结构化的数据需要展现时"),r("li",null,"当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时")],-1)),n[4]||(n[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=r("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=r("p",null,"简单的表格，最后一列是各种操作。",-1)),a(o,{title:"基础用法",source:y(xt)},{default:L(()=>[a(ft)]),_:1},8,["source"]),n[7]||(n[7]=r("h3",{id:"-3",tabindex:"-1"},"排序",-1)),n[8]||(n[8]=r("p",null,"对某一列数据进行排序。支持多列排序（Shift + 点击表头）。",-1)),a(o,{title:"排序",source:y(Lt)},{default:L(()=>[a(jt)]),_:1},8,["source"]),n[9]||(n[9]=r("h3",{id:"-4",tabindex:"-1"},"行选择",-1)),n[10]||(n[10]=r("p",null,"第一列是联动的选择框，支持单选和多选。",-1)),a(o,{title:"行选择",source:y(Pt)},{default:L(()=>[a(Jt)]),_:1},8,["source"]),n[11]||(n[11]=r("h3",{id:"-5",tabindex:"-1"},"筛选",-1)),n[12]||(n[12]=r("p",null,"对某一列数据进行筛选。",-1)),a(o,{title:"筛选",source:y(Et)},{default:L(()=>[a(At)]),_:1},8,["source"]),n[13]||(n[13]=r("h3",{id:"-6",tabindex:"-1"},"固定列",-1)),n[14]||(n[14]=r("p",null,"固定左侧或右侧的列，横向滚动时保持可见。",-1)),a(o,{title:"固定列",source:y(Kt)},{default:L(()=>[a(Ft)]),_:1},8,["source"]),n[15]||(n[15]=r("h3",{id:"-7",tabindex:"-1"},"展开行",-1)),n[16]||(n[16]=r("p",null,"可展开的行，显示额外信息。",-1)),a(o,{title:"展开行",source:y(Nt)},{default:L(()=>[a(qt)]),_:1},8,["source"]),n[17]||(n[17]=r("h3",{id:"-8",tabindex:"-1"},"响应式",-1)),n[18]||(n[18]=r("p",null,"根据屏幕大小自动显示或隐藏列。",-1)),a(o,{title:"响应式",source:y(Bt)},{default:L(()=>[a(zt)]),_:1},8,["source"]),n[19]||(n[19]=r("h3",{id:"-9",tabindex:"-1"},"虚拟滚动",-1)),n[20]||(n[20]=r("p",null,"大数据场景下使用虚拟滚动优化性能，支持 1000+ 行数据流畅滚动。",-1)),a(o,{title:"虚拟滚动",source:y(Gt)},{default:L(()=>[a(Wt)]),_:1},8,["source"]),n[21]||(n[21]=r("h3",{id:"-10",tabindex:"-1"},"吸顶表头",-1)),n[22]||(n[22]=r("p",null,"当页面滚动时，表头会固定在页面顶部。",-1)),a(o,{title:"吸顶表头",source:y(Ht)},{default:L(()=>[a(Ot)]),_:1},8,["source"]),n[23]||(n[23]=r("h3",{id:"-11",tabindex:"-1"},"总结栏",-1)),n[24]||(n[24]=r("p",null,[K("通过 "),r("code",null,"summary"),K(" 可以在表格尾部添加合计行。")],-1)),a(o,{title:"总结栏",source:y(Yt)},{default:L(()=>[a(Vt)]),_:1},8,["source"]),n[25]||(n[25]=r("h3",{id:"-12",tabindex:"-1"},"可编辑单元格",-1)),n[26]||(n[26]=r("p",null,[K("通过自定义 "),r("code",null,"render"),K(" 函数实现可编辑的单元格。")],-1)),a(o,{title:"可编辑单元格",source:y(_t)},{default:L(()=>[a(Rt)]),_:1},8,["source"]),n[27]||(n[27]=ut(`<h2 id="api" tabindex="-1">API</h2><h3 id="table-props" tabindex="-1">Table Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据数组</td><td><code>any[]</code></td><td>-</td></tr><tr><td>columns</td><td>表格列的配置描述</td><td><code>TableColumn[]</code></td><td>-</td></tr><tr><td>rowKey</td><td>表格行 key 的取值</td><td><code>string | ((record: any) =&gt; Key)</code></td><td><code>&#39;key&#39;</code></td></tr><tr><td>loading</td><td>页面是否加载中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>分页器，设为 false 时不展示</td><td><code>TablePaginationConfig | false</code></td><td>-</td></tr><tr><td>rowSelection</td><td>列表项是否可选择</td><td><code>TableRowSelection</code></td><td>-</td></tr><tr><td>expandable</td><td>配置展开属性</td><td><code>ExpandableConfig</code></td><td>-</td></tr><tr><td>size</td><td>表格大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>bordered</td><td>是否展示外边框和列边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showHeader</td><td>是否显示表头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>sticky</td><td>设置粘性头部和滚动条</td><td><code>boolean | { offsetHeader?: number, offsetScroll?: number }</code></td><td><code>false</code></td></tr><tr><td>scroll</td><td>表格是否可滚动</td><td><code>{ x?: number | string, y?: number | string }</code></td><td>-</td></tr><tr><td>summary</td><td>总结栏</td><td><code>(pageData: any[]) =&gt; VNode</code></td><td>-</td></tr><tr><td>title</td><td>表格标题</td><td><code>string | ((data: any[]) =&gt; VNode)</code></td><td>-</td></tr><tr><td>footer</td><td>表格页脚</td><td><code>string | ((data: any[]) =&gt; VNode)</code></td><td>-</td></tr><tr><td>locale</td><td>国际化配置</td><td><code>{ emptyText?: string }</code></td><td>-</td></tr><tr><td>onChange</td><td>分页、排序、筛选变化时触发</td><td><code>(pagination, filters, sorter, extra) =&gt; void</code></td><td>-</td></tr><tr><td>onRow</td><td>设置行属性</td><td><code>(record, index) =&gt; object</code></td><td>-</td></tr><tr><td>onHeaderRow</td><td>设置表头行属性</td><td><code>(columns, index) =&gt; object</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname">详见下方</a>）</td><td><code>TableSemanticClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-style">详见下方</a>）</td><td><code>TableSemanticStyles</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根节点额外类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="tablecolumn" tabindex="-1">TableColumn</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>列的唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>列头显示文字</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>dataIndex</td><td>列数据在数据项中对应的路径</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>列宽度</td><td><code>number | string</code></td><td>-</td></tr><tr><td>align</td><td>设置列的对齐方式</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>fixed</td><td>列是否固定（左侧/右侧）</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>ellipsis</td><td>超过宽度将自动省略</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>sorter</td><td>排序函数，支持多列排序</td><td><code>CompareFn | { compare: CompareFn, multiple: number }</code></td><td>-</td></tr><tr><td>sortOrder</td><td>排序的受控属性</td><td><code>&#39;ascend&#39; | &#39;descend&#39; | null</code></td><td>-</td></tr><tr><td>filters</td><td>表头的筛选菜单项</td><td><code>ColumnFilterItem[]</code></td><td>-</td></tr><tr><td>filteredValue</td><td>筛选的受控属性</td><td><code>FilterValue</code></td><td>-</td></tr><tr><td>onFilter</td><td>筛选函数</td><td><code>(value: any, record: any) =&gt; boolean</code></td><td>-</td></tr><tr><td>filterMultiple</td><td>是否多选</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>responsive</td><td>响应式断点</td><td><code>(&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39;)[]</code></td><td>-</td></tr><tr><td>render</td><td>自定义渲染函数</td><td><code>(text: any, record: any, index: number) =&gt; any</code></td><td>-</td></tr></tbody></table><h3 id="tablerowselection" tabindex="-1">TableRowSelection</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>选择框类型</td><td><code>&#39;checkbox&#39; | &#39;radio&#39;</code></td><td><code>&#39;checkbox&#39;</code></td></tr><tr><td>selectedRowKeys</td><td>指定选中项的 key 数组</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>onChange</td><td>选中项发生变化时的回调</td><td><code>(keys: Key[], rows: any[], info: { type: string }) =&gt; void</code></td><td>-</td></tr><tr><td>onSelect</td><td>用户手动选择/取消选择某行的回调</td><td><code>(record, selected, selectedRows, nativeEvent) =&gt; void</code></td><td>-</td></tr><tr><td>onSelectAll</td><td>用户手动选择/取消选择所有行的回调</td><td><code>(selected, selectedRows, changeRows) =&gt; void</code></td><td>-</td></tr><tr><td>getCheckboxProps</td><td>选择框的默认属性配置</td><td><code>(record) =&gt; object</code></td><td>-</td></tr></tbody></table><h3 id="expandableconfig" tabindex="-1">ExpandableConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>expandedRowRender</td><td>额外的展开行内容</td><td><code>(record, index, indent, expanded) =&gt; VNode</code></td><td>-</td></tr><tr><td>expandedRowKeys</td><td>展开的行，受控属性</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>defaultExpandedRowKeys</td><td>默认展开的行</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>onExpand</td><td>点击展开图标时触发</td><td><code>(expanded, record) =&gt; void</code></td><td>-</td></tr><tr><td>onExpandedRowsChange</td><td>展开的行变化时触发</td><td><code>(expandedKeys: Key[]) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="tablepaginationconfig" tabindex="-1">TablePaginationConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数</td><td><code>number</code></td><td>-</td></tr><tr><td>pageSize</td><td>每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td>-</td></tr><tr><td>showQuickJumper</td><td>是否可以快速跳转至某页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSizeChanger</td><td>是否展示 pageSize 切换器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showTotal</td><td>用于显示数据总量和当前数据顺序</td><td><code>(total, range) =&gt; string</code></td><td>-</td></tr><tr><td>pageSizeOptions</td><td>指定每页可以显示多少条</td><td><code>number[]</code></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td>onChange</td><td>页码或 pageSize 改变的回调</td><td><code>(page, pageSize) =&gt; void</code></td><td>-</td></tr></tbody></table><h2 id="-13" tabindex="-1">特性说明</h2><h3 id="-14" tabindex="-1">多列排序</h3><p>按住 Shift 键点击多个列的表头，可以实现多列排序。排序优先级按照点击顺序。</p><h3 id="-15" tabindex="-1">响应式列</h3><p>通过配置 <code>responsive</code> 属性，可以根据屏幕断点自动显示或隐藏列：</p><ul><li><code>xs</code>: 0px</li><li><code>sm</code>: 576px</li><li><code>md</code>: 768px</li><li><code>lg</code>: 992px</li><li><code>xl</code>: 1200px</li><li><code>xxl</code>: 1600px</li></ul><h3 id="-16" tabindex="-1">固定列</h3><p>设置 <code>fixed</code> 为 <code>&#39;left&#39;</code> 或 <code>&#39;right&#39;</code>，可以固定列到左侧或右侧。滚动时会自动显示阴影效果。</p><h3 id="-17" tabindex="-1">可访问性</h3><p>Table 组件完全支持键盘导航和屏幕阅读器：</p><ul><li>使用 <code>Enter</code> 或 <code>Space</code> 键可以触发排序</li><li>完整的 ARIA 标签支持</li><li>符合 WCAG 2.1 AA 标准</li></ul><h2 id="-classname" tabindex="-1">语义化 className</h2><p>通过 <code>classNames</code> 属性可以自定义 Table 各部分的 className。</p><h3 id="tablesemanticclassnames" tabindex="-1">TableSemanticClassNames</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>root</td><td>根节点 <code>div.hmfw-table</code></td><td><code>string</code></td><td>-</td></tr><tr><td>header</td><td>表头 <code>thead.hmfw-table-thead</code></td><td><code>string</code></td><td>-</td></tr><tr><td>body</td><td>表体 <code>tbody.hmfw-table-tbody</code></td><td><code>string</code></td><td>-</td></tr><tr><td>row</td><td>数据行 <code>tr.hmfw-table-row</code></td><td><code>string</code></td><td>-</td></tr><tr><td>cell</td><td>数据单元格 <code>td.hmfw-table-cell</code></td><td><code>string</code></td><td>-</td></tr><tr><td>footer</td><td>表格页脚 <code>div.hmfw-table-footer</code></td><td><code>string</code></td><td>-</td></tr><tr><td>pagination</td><td>分页容器 <code>div.hmfw-table-pagination</code></td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="dom-" tabindex="-1">DOM 结构</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- root --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-thead<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- header --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>列头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-tbody<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- body --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- row --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>单元格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- cell --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>页脚<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- footer --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-table-pagination<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>分页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- pagination --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="-18" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
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
</code></pre><p><strong>注意事项：</strong></p><ul><li><code>cell</code> 同时应用于所有数据单元格（<code>&lt;td&gt;</code>），表头单元格（<code>&lt;th&gt;</code>）不应用此 className，如需定制表头单元格请通过 <code>header</code> 的后代选择器（如 <code>.my-header th</code>）</li><li><code>row</code> 应用于所有数据行，包括虚拟滚动模式下的行</li><li><code>header</code>/<code>body</code> 分别对应 <code>&lt;thead&gt;</code>/<code>&lt;tbody&gt;</code> 元素</li><li><code>footer</code> 仅在设置了 <code>footer</code> 属性时渲染</li><li><code>pagination</code> 仅在分页启用且有数据时渲染</li></ul><h2 id="-style" tabindex="-1">语义化 style</h2><p>通过 <code>styles</code> 属性可以自定义 Table 各部分的 style。</p><h3 id="tablesemanticstyles" tabindex="-1">TableSemanticStyles</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>root</td><td>根节点 <code>div.hmfw-table</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>header</td><td>表头 <code>thead.hmfw-table-thead</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>body</td><td>表体 <code>tbody.hmfw-table-tbody</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>row</td><td>数据行 <code>tr.hmfw-table-row</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>cell</td><td>数据单元格 <code>td.hmfw-table-cell</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>footer</td><td>表格页脚 <code>div.hmfw-table-footer</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>pagination</td><td>分页容器 <code>div.hmfw-table-pagination</code></td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="-19" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
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
</code></pre><p><strong>说明：</strong> <code>styles.header</code> 会与 sticky 模式下的定位样式合并；<code>styles.cell</code> 会与列的 <code>align</code> 对齐样式合并。</p><h3 id="-classname--style" tabindex="-1">语义化 className 与 style</h3>`,40)),a(o,{title:"语义化 className 与 style",source:y(Dt)},{default:L(()=>[a($t)]),_:1},8,["source"])])}}};export{bn as default};
