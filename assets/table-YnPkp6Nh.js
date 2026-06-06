import{R as we}from"./index-mkri1kNH.js";import{D as Se}from"./index-DTNjfWtH.js";import{B as ue}from"./Button-CwdPD8WR.js";import{C as Z}from"./Checkbox-YHaOB6n7.js";import{m as _,B as A,l as a,L as Ce,K as Ie,v as Re,w as $e,O as G,q as U,k as X,d as H,y as N,g as M,I,i as me,F as Te,f as g,H as Ke,E as Ae,P,j as De}from"./index-BQisgCTe.js";import{c as F}from"./cls-S9IiI6wd.js";import{E as _e}from"./Empty-Bd5f7qJn.js";import{P as Ee}from"./Pagination-Bm6iHOjw.js";import{S as Je}from"./Spin-P_X1VNY7.js";import"./Menu-CYqHKtUv.js";import"./icons-Buy98oKP.js";import"./Icon-BfLh2ono.js";import"./Select-CCSRH7Fa.js";const Fe=_({name:"FilterDropdown",props:{prefixCls:{type:String,required:!0},filters:{type:Array,default:()=>[]},filteredValue:{type:Array,default:()=>[]},filterMultiple:{type:Boolean,default:!0},locale:{type:Object,default:()=>({})},onConfirm:{type:Function,required:!0}},setup(t){const s=A([...t.filteredValue.filter(h=>typeof h=="string"||typeof h=="number")]),n=(h,p)=>{t.filterMultiple?p?s.value=[...s.value,h]:s.value=s.value.filter(v=>v!==h):s.value=p?[h]:[]},f=()=>{t.onConfirm(s.value)},d=()=>{s.value=[],t.onConfirm([])},y=()=>t.filters.map(h=>{const p=s.value.includes(h.value);return a("div",{key:String(h.value),class:`${t.prefixCls}-dropdown-menu-item`},[a(Z,{checked:p,onChange:v=>n(h.value,v)},{default:()=>[h.text]})])});return()=>a("div",{class:`${t.prefixCls}-dropdown`},[a("div",{class:`${t.prefixCls}-dropdown-menu`},[y()]),a("div",{class:`${t.prefixCls}-dropdown-btns`},[a(ue,{size:"small",onClick:d},{default:()=>[t.locale.filterReset||"重置"]}),a(ue,{type:"primary",size:"small",onClick:f},{default:()=>[t.locale.filterConfirm||"确定"]})])])}}),Ne={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},B=_({name:"Table",props:{dataSource:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},rowKey:[String,Function],loading:Boolean,bordered:Boolean,size:{type:String,default:"default"},scroll:Object,pagination:{type:[Boolean,Object],default:void 0},rowSelection:Object,expandable:Object,locale:Object,showHeader:{type:Boolean,default:!0},sticky:Boolean,title:[String,Function],footer:[String,Function],onRow:Function,onHeaderRow:Function,onChange:Function},emits:["change"],setup(t,{emit:s}){var oe,le,re;const n=Ce("table"),f=Ie(),d=A("xxl"),y=()=>{var i;const e=window.innerWidth,o=((i=Object.entries(Ne).reverse().find(([l,c])=>e>=c))==null?void 0:i[0])||"xs";d.value=o};Re(()=>{y(),window.addEventListener("resize",y)}),$e(()=>{window.removeEventListener("resize",y)});const h=H(()=>{var e;return((e=t.columns)==null?void 0:e.filter(o=>!o.responsive||o.responsive.length===0?!0:o.responsive.includes(d.value)))??[]}),p=A([]),v=A({}),ee=A(1),te=A(10);G(()=>h.value,e=>{e&&e.forEach(o=>{const i=o.key??o.dataIndex??"";o.filteredValue!==void 0&&o.filteredValue!==null&&(v.value[i]=o.filteredValue)})},{immediate:!0});const L=(e,o)=>typeof t.rowKey=="function"?t.rowKey(e):typeof t.rowKey=="string"?e[t.rowKey]:e.key??String(o),ye=(e,o)=>{if(o.dataIndex)return e[o.dataIndex]},ne=H(()=>{let e=[...t.dataSource??[]];return h.value.forEach(o=>{const i=o.key??o.dataIndex??"",l=v.value[i];l!=null&&l.length&&o.onFilter&&(e=e.filter(c=>l.some(m=>o.onFilter(m,c))))}),e}),j=H(()=>{let e=[...ne.value];return p.value.length===0||e.sort((o,i)=>{for(const l of p.value){const c=l.column;if(!c.sorter||!l.order)continue;const m=typeof c.sorter=="function"?c.sorter:void 0;if(!m)continue;const u=m(o,i);if(u!==0)return l.order==="descend"?-u:u}return 0}),e}),k=H(()=>{if(t.pagination===!1)return null;const e=typeof t.pagination=="object"?t.pagination:{};return{pageSize:(e==null?void 0:e.pageSize)??te.value,current:(e==null?void 0:e.current)??ee.value,total:(e==null?void 0:e.total)??j.value.length,onChange:e==null?void 0:e.onChange,showQuickJumper:e==null?void 0:e.showQuickJumper,showSizeChanger:e==null?void 0:e.showSizeChanger,showTotal:e==null?void 0:e.showTotal,pageSizeOptions:e==null?void 0:e.pageSizeOptions}}),T=H(()=>{if(!k.value)return j.value;const{current:e,pageSize:o}=k.value,i=(e-1)*o;return j.value.slice(i,i+o)}),de=(e,o)=>{var R;if(!e.sorter)return;const i=e.key??e.dataIndex??"",l=(o==null?void 0:o.shiftKey)||typeof e.sorter=="object"&&"multiple"in e.sorter,c=p.value.findIndex(x=>x.key===i);if(c>=0){const x=p.value[c];x.order==="ascend"?p.value[c]={key:i,order:"descend",column:e}:x.order==="descend"&&(p.value=p.value.filter((V,J)=>J!==c))}else{const x={key:i,order:"ascend",column:e};l?p.value=[...p.value,x]:p.value=[x]}const m=p.value.map(x=>({column:x.column,order:x.order,field:x.column.dataIndex,columnKey:x.key})),u={currentDataSource:j.value,action:"sort"},b=m.length===1?m[0]:m;s("change",k.value,v.value,b,u),(R=t.onChange)==null||R.call(t,k.value,v.value,b,u)},xe=(e,o)=>{var u,b,R;ee.value=e,te.value=o,(b=(u=k.value)==null?void 0:u.onChange)==null||b.call(u,e,o);const i={currentDataSource:T.value,action:"paginate"},l=p.value.map(x=>({column:x.column,order:x.order,field:x.column.dataIndex,columnKey:x.key})),c=l.length===1?l[0]:l,m={...k.value,current:e,pageSize:o};s("change",m,v.value,c,i),(R=t.onChange)==null||R.call(t,m,v.value,c,i)},E=A(((oe=t.rowSelection)==null?void 0:oe.selectedRowKeys)??[]);G(()=>{var e;return(e=t.rowSelection)==null?void 0:e.selectedRowKeys},e=>{e&&(E.value=e)});const z=A(((le=t.expandable)==null?void 0:le.expandedRowKeys)??((re=t.expandable)==null?void 0:re.defaultExpandedRowKeys)??[]);G(()=>{var e;return(e=t.expandable)==null?void 0:e.expandedRowKeys},e=>{e!==void 0&&(z.value=e)});const ge=(e,o)=>{var l,c,m,u;const i=L(o,0);e?z.value=[...z.value,i]:z.value=z.value.filter(b=>b!==i),(c=(l=t.expandable)==null?void 0:l.onExpand)==null||c.call(l,e,o),(u=(m=t.expandable)==null?void 0:m.onExpandedRowsChange)==null||u.call(m,z.value)},fe=(e,o)=>{var m;v.value[e]=o;const i={currentDataSource:ne.value,action:"filter"},l=p.value.map(u=>({column:u.column,order:u.order,field:u.column.dataIndex,columnKey:u.key})),c=l.length===1?l[0]:l;s("change",k.value,v.value,c,i),(m=t.onChange)==null||m.call(t,k.value,v.value,c,i)},ae=(e,o,i)=>{var u,b,R,x,V;if(!t.rowSelection)return;let l,c="single";t.rowSelection.type==="radio"?l=i?[e]:[]:(l=i?[...E.value,e]:E.value.filter(J=>J!==e),c="multiple"),E.value=l;const m=((u=t.dataSource)==null?void 0:u.filter((J,Q)=>l.includes(L(J,Q))))??[];(R=(b=t.rowSelection).onChange)==null||R.call(b,l,m,{type:c}),(V=(x=t.rowSelection).onSelect)==null||V.call(x,o,i,m,new Event("change"))},he=e=>{var l,c,m,u;if(!t.rowSelection)return;const o=e?T.value.map((b,R)=>L(b,R)):[];E.value=o;const i=e?[...T.value]:[];(c=(l=t.rowSelection).onChange)==null||c.call(l,o,i,{type:e?"all":"none"}),(u=(m=t.rowSelection).onSelectAll)==null||u.call(m,e,i,T.value)};return()=>{var R,x,V,J,Q,ie,se;const e=T.value.length===0,o=!!t.rowSelection,i=((R=t.rowSelection)==null?void 0:R.type)==="radio",l=!!((x=t.expandable)!=null&&x.expandedRowRender),c=T.value.length>0&&T.value.every((r,C)=>E.value.includes(L(r,C))),m=T.value.some((r,C)=>E.value.includes(L(r,C))),u=(h.value.length??0)+(o?1:0)+(l?1:0),b=a("div",{class:F(n,`${n}-${t.size}`,{[`${n}-bordered`]:t.bordered,[`${n}-loading`]:t.loading,[`${n}-scroll-horizontal`]:!!((V=t.scroll)!=null&&V.x)}),role:"region","aria-label":"Data table"},[t.title&&a("div",{class:`${n}-title`},[typeof t.title=="function"?t.title(j.value):t.title]),a("div",{class:`${n}-container`},[a("div",{class:`${n}-content`,style:(J=t.scroll)!=null&&J.x?{overflowX:"auto"}:{},role:"presentation"},[a("table",{role:"table","aria-rowcount":T.value.length,"aria-colcount":u,style:(Q=t.scroll)!=null&&Q.x?{minWidth:typeof t.scroll.x=="number"?`${t.scroll.x}px`:t.scroll.x}:{}},[t.showHeader&&a("thead",{class:`${n}-thead`,role:"rowgroup"},[a("tr",U(((ie=t.onHeaderRow)==null?void 0:ie.call(t,h.value??[],0))??{},{role:"row"}),[l&&a("th",{class:`${n}-cell ${n}-expand-icon-col`,style:{width:"48px"},role:"columnheader"},null),o&&a("th",{class:`${n}-cell ${n}-selection-column`,role:"columnheader","aria-label":"Row selection"},[!i&&a(Z,{checked:c,indeterminate:m&&!c,onChange:r=>he(r)},null)]),h.value.map(r=>{var Y;const C=r.key??r.dataIndex??"",w=p.value.find(S=>S.key===C),D=!!w,K=r.fixed==="left",q=r.fixed==="right",W=r.filters&&r.filters.length>0,O=((Y=v.value[C])==null?void 0:Y.length)>0;return a("th",{key:C,scope:"col",role:"columnheader","aria-sort":D?w.order==="ascend"?"ascending":"descending":r.sorter?"none":void 0,tabindex:r.sorter?0:void 0,onKeydown:S=>{r.sorter&&(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),de(r,S))},class:F(`${n}-cell`,{[`${n}-column-sort`]:D,[`${n}-column-has-sorters`]:!!r.sorter,[`${n}-cell-fix-left`]:K,[`${n}-cell-fix-right`]:q}),style:{width:r.width?typeof r.width=="number"?`${r.width}px`:r.width:void 0,textAlign:r.align??"left"},onClick:S=>r.sorter&&de(r,S)},[a("div",{class:`${n}-column-title`},[r.title,r.sorter&&a("span",{class:`${n}-column-sorter`},[a("span",{class:F(`${n}-column-sorter-up`,{active:D&&(w==null?void 0:w.order)==="ascend"})},[X("▲")]),a("span",{class:F(`${n}-column-sorter-down`,{active:D&&(w==null?void 0:w.order)==="descend"})},[X("▼")])]),W&&a(Se,{trigger:["click"]},{default:()=>[a("span",{class:F(`${n}-filter-trigger`,{active:O}),onClick:S=>S.stopPropagation()},[X("🔽")])],overlay:()=>a(Fe,{prefixCls:n,filters:r.filters,filteredValue:v.value[C]||[],filterMultiple:r.filterMultiple??!0,locale:f.value.Table,onConfirm:S=>fe(C,S)},null)})])])})])]),a("tbody",{class:`${n}-tbody`,role:"rowgroup"},[e?a("tr",{class:`${n}-placeholder`,role:"row"},[a("td",{colspan:u,role:"cell"},[a(_e,{description:((se=t.locale)==null?void 0:se.emptyText)??f.value.Table.emptyText},null)])]):T.value.flatMap((r,C)=>{var W,O,Y,S;const w=L(r,C),D=E.value.includes(w),K=z.value.includes(w),q=[a("tr",U({key:w,role:"row","aria-selected":o?D:void 0,"aria-expanded":l?K:void 0,class:F(`${n}-row`,{[`${n}-row-selected`]:D})},((W=t.onRow)==null?void 0:W.call(t,r,C))??{}),[l&&a("td",{class:`${n}-cell ${n}-expand-icon-cell`,role:"cell"},[a("button",{type:"button",class:F(`${n}-expand-icon`,{[`${n}-expand-icon-expanded`]:K}),onClick:()=>ge(!K,r),"aria-label":K?"Collapse row":"Expand row","aria-expanded":K},[K?"▼":"▶"])]),o&&a("td",{class:`${n}-cell ${n}-selection-column`,role:"cell"},[i?a(we,{checked:D,onChange:$=>ae(w,r,$)},null):a(Z,U({checked:D,onChange:$=>ae(w,r,$)},((Y=(O=t.rowSelection)==null?void 0:O.getCheckboxProps)==null?void 0:Y.call(O,r))??{}),null)]),h.value.map($=>{const pe=$.key??$.dataIndex??"",ce=ye(r,$),ke=$.render?$.render(ce,r,C):ce,ve=$.fixed==="left",be=$.fixed==="right";return a("td",{key:pe,role:"cell",class:F(`${n}-cell`,{[`${n}-cell-ellipsis`]:$.ellipsis,[`${n}-cell-fix-left`]:ve,[`${n}-cell-fix-right`]:be}),style:{textAlign:$.align??"left"}},[ke])})])];return l&&K&&((S=t.expandable)!=null&&S.expandedRowRender)&&q.push(a("tr",{key:`${w}-expanded`,class:`${n}-expanded-row`,role:"row"},[a("td",{colspan:u,class:`${n}-cell`,role:"cell"},[t.expandable.expandedRowRender(r,C,0,K)])])),q})])])])]),t.footer&&a("div",{class:`${n}-footer`},[typeof t.footer=="function"?t.footer(j.value):t.footer]),k.value&&!e&&a("div",{class:`${n}-pagination ${n}-pagination-right`},[a(Ee,{total:k.value.total,pageSize:k.value.pageSize,current:k.value.current,showQuickJumper:k.value.showQuickJumper,showSizeChanger:k.value.showSizeChanger,showTotal:k.value.showTotal,pageSizeOptions:k.value.pageSizeOptions,onChange:xe},null)])]);return t.loading?a("div",{style:{position:"relative"}},[a(Je,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10}},null),a("div",{style:{opacity:.5}},[b])]):b}}}),ze=_({__name:"TableBasic",setup(t){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],n=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(f,d)=>(N(),M(I(B),{"data-source":s,columns:n,"row-key":"key"}))}}),Pe=`<template>
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
`,Be=_({__name:"TableExpandable",setup(t){const s=A([]),n=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}],f=[{key:"1",name:"Joe",age:32,address:"New York",description:"My name is Joe, I am 32 years old, living in New York."},{key:"2",name:"Jim",age:28,address:"London",description:"My name is Jim, I am 28 years old, living in London."},{key:"3",name:"Alice",age:35,address:"Sydney",description:"My name is Alice, I am 35 years old, living in Sydney."}],d={expandedRowRender:y=>y.description,expandedRowKeys:s.value,onExpandedRowsChange:y=>{s.value=y}};return(y,h)=>(N(),M(I(B),{columns:n,dataSource:f,expandable:d}))}}),Le=`<template>
  <Table :columns="columns" :dataSource="data" :expandable="expandable" />
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
  { key: '1', name: 'Joe', age: 32, address: 'New York', description: 'My name is Joe, I am 32 years old, living in New York.' },
  { key: '2', name: 'Jim', age: 28, address: 'London', description: 'My name is Jim, I am 28 years old, living in London.' },
  { key: '3', name: 'Alice', age: 35, address: 'Sydney', description: 'My name is Alice, I am 35 years old, living in Sydney.' },
]

const expandable = {
  expandedRowRender: (record: any) => record.description,
  expandedRowKeys: expandedKeys.value,
  onExpandedRowsChange: (keys: string[]) => {
    expandedKeys.value = keys
  },
}
<\/script>
`,je=_({__name:"TableFilter",setup(t){const s=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"},{text:"Alice",value:"Alice"}],onFilter:(f,d)=>d.name.includes(f)},{title:"Age",dataIndex:"age",key:"age",filters:[{text:"20-30",value:"20-30"},{text:"30-40",value:"30-40"}],onFilter:(f,d)=>{const y=d.age;return f==="20-30"?y>=20&&y<30:f==="30-40"?y>=30&&y<40:!1}},{title:"Address",dataIndex:"address",key:"address"}],n=[{key:"1",name:"Joe",age:32,address:"New York"},{key:"2",name:"Jim",age:28,address:"London"},{key:"3",name:"Alice",age:35,address:"Sydney"},{key:"4",name:"Bob",age:25,address:"Paris"}];return(f,d)=>(N(),M(I(B),{columns:s,dataSource:n}))}}),Ve=`<template>
  <Table :columns="columns" :dataSource="data" />
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
`,Oe=_({__name:"TableFixedColumns",setup(t){const s=[{title:"Name",dataIndex:"name",key:"name",fixed:"left",width:100},{title:"Age",dataIndex:"age",key:"age",width:80},{title:"Column 1",dataIndex:"col1",key:"col1",width:150},{title:"Column 2",dataIndex:"col2",key:"col2",width:150},{title:"Column 3",dataIndex:"col3",key:"col3",width:150},{title:"Column 4",dataIndex:"col4",key:"col4",width:150},{title:"Action",key:"action",fixed:"right",width:100,render:()=>"Edit"}],n=[{key:"1",name:"Joe",age:32,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"},{key:"2",name:"Jim",age:28,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"},{key:"3",name:"Alice",age:35,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"}];return(f,d)=>(N(),M(I(B),{columns:s,dataSource:n,scroll:{x:1200},bordered:""}))}}),Me=`<template>
  <Table :columns="columns" :dataSource="data" :scroll="{ x: 1200 }" bordered />
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
  { key: '1', name: 'Joe', age: 32, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4' },
  { key: '2', name: 'Jim', age: 28, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4' },
  { key: '3', name: 'Alice', age: 35, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4' },
]
<\/script>
`,Ye=_({__name:"TableResponsive",setup(t){const s=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age",responsive:["sm","md","lg","xl","xxl"]},{title:"Email",dataIndex:"email",key:"email",responsive:["md","lg","xl","xxl"]},{title:"Phone",dataIndex:"phone",key:"phone",responsive:["lg","xl","xxl"]},{title:"Address",dataIndex:"address",key:"address",responsive:["xl","xxl"]}],n=[{key:"1",name:"Joe",age:32,email:"joe@example.com",phone:"123-456-7890",address:"New York No. 1 Lake Park"},{key:"2",name:"Jim",age:28,email:"jim@example.com",phone:"098-765-4321",address:"London No. 1 Lake Park"},{key:"3",name:"Alice",age:35,email:"alice@example.com",phone:"555-123-4567",address:"Sydney No. 1 Lake Park"}];return(f,d)=>(N(),M(I(B),{columns:s,dataSource:n}))}}),He=`<template>
  <Table :columns="columns" :dataSource="data" />
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
`,Qe=_({__name:"TableRowSelection",setup(t){const s=A([]),n={selectedRowKeys:s,onChange:y=>{s.value=y}},f=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],d=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(y,h)=>(N(),me(Te,null,[a(I(B),{"data-source":f,columns:d,"row-key":"key","row-selection":n}),g("p",null,"已选择："+Ke(s.value.join(", ")),1)],64))}}),qe=`<template>
  <Table
    :data-source="dataSource"
    :columns="columns"
    row-key="key"
    :row-selection="rowSelection"
  />
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
`,We=_({__name:"TableSorter",setup(t){const s=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"},{key:"3",name:"李明",age:28,address:"朝阳区建国路88号"}],n=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age",sorter:(f,d)=>f.age-d.age},{title:"住址",dataIndex:"address",key:"address"}];return(f,d)=>(N(),M(I(B),{"data-source":s,columns:n,"row-key":"key"}))}}),Ge=`<template>
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
`,Ue={class:"markdown-body"},ut={__name:"table",setup(t,{expose:s}){return s({frontmatter:{}}),(f,d)=>{const y=Ae("DemoBlock");return N(),me("div",Ue,[d[0]||(d[0]=g("h1",{id:"table-",tabindex:"-1"},"Table 表格",-1)),d[1]||(d[1]=g("p",null,"展示行列数据。",-1)),d[2]||(d[2]=g("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=g("ul",null,[g("li",null,"当有大量结构化的数据需要展现时"),g("li",null,"当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时")],-1)),d[4]||(d[4]=g("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=g("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),d[6]||(d[6]=g("p",null,"简单的表格，最后一列是各种操作。",-1)),a(y,{title:"基础用法",source:I(Pe)},{default:P(()=>[a(ze)]),_:1},8,["source"]),d[7]||(d[7]=g("h3",{id:"-3",tabindex:"-1"},"排序",-1)),d[8]||(d[8]=g("p",null,"对某一列数据进行排序。支持多列排序（Shift + 点击表头）。",-1)),a(y,{title:"排序",source:I(Ge)},{default:P(()=>[a(We)]),_:1},8,["source"]),d[9]||(d[9]=g("h3",{id:"-4",tabindex:"-1"},"行选择",-1)),d[10]||(d[10]=g("p",null,"第一列是联动的选择框，支持单选和多选。",-1)),a(y,{title:"行选择",source:I(qe)},{default:P(()=>[a(Qe)]),_:1},8,["source"]),d[11]||(d[11]=g("h3",{id:"-5",tabindex:"-1"},"筛选",-1)),d[12]||(d[12]=g("p",null,"对某一列数据进行筛选。",-1)),a(y,{title:"筛选",source:I(Ve)},{default:P(()=>[a(je)]),_:1},8,["source"]),d[13]||(d[13]=g("h3",{id:"-6",tabindex:"-1"},"固定列",-1)),d[14]||(d[14]=g("p",null,"固定左侧或右侧的列，横向滚动时保持可见。",-1)),a(y,{title:"固定列",source:I(Me)},{default:P(()=>[a(Oe)]),_:1},8,["source"]),d[15]||(d[15]=g("h3",{id:"-7",tabindex:"-1"},"展开行",-1)),d[16]||(d[16]=g("p",null,"可展开的行，显示额外信息。",-1)),a(y,{title:"展开行",source:I(Le)},{default:P(()=>[a(Be)]),_:1},8,["source"]),d[17]||(d[17]=g("h3",{id:"-8",tabindex:"-1"},"响应式",-1)),d[18]||(d[18]=g("p",null,"根据屏幕大小自动显示或隐藏列。",-1)),a(y,{title:"响应式",source:I(He)},{default:P(()=>[a(Ye)]),_:1},8,["source"]),d[19]||(d[19]=De('<h2 id="api" tabindex="-1">API</h2><h3 id="table-props" tabindex="-1">Table Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据数组</td><td><code>any[]</code></td><td>-</td></tr><tr><td>columns</td><td>表格列的配置描述</td><td><code>TableColumn[]</code></td><td>-</td></tr><tr><td>rowKey</td><td>表格行 key 的取值</td><td><code>string | ((record: any) =&gt; Key)</code></td><td><code>&#39;key&#39;</code></td></tr><tr><td>loading</td><td>页面是否加载中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>分页器，设为 false 时不展示</td><td><code>TablePaginationConfig | false</code></td><td>-</td></tr><tr><td>rowSelection</td><td>列表项是否可选择</td><td><code>TableRowSelection</code></td><td>-</td></tr><tr><td>expandable</td><td>配置展开属性</td><td><code>ExpandableConfig</code></td><td>-</td></tr><tr><td>size</td><td>表格大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>bordered</td><td>是否展示外边框和列边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showHeader</td><td>是否显示表头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>scroll</td><td>表格是否可滚动</td><td><code>{ x?: number | string, y?: number | string }</code></td><td>-</td></tr><tr><td>title</td><td>表格标题</td><td><code>string | ((data: any[]) =&gt; VNode)</code></td><td>-</td></tr><tr><td>footer</td><td>表格页脚</td><td><code>string | ((data: any[]) =&gt; VNode)</code></td><td>-</td></tr><tr><td>locale</td><td>国际化配置</td><td><code>{ emptyText?: string }</code></td><td>-</td></tr><tr><td>onChange</td><td>分页、排序、筛选变化时触发</td><td><code>(pagination, filters, sorter, extra) =&gt; void</code></td><td>-</td></tr><tr><td>onRow</td><td>设置行属性</td><td><code>(record, index) =&gt; object</code></td><td>-</td></tr><tr><td>onHeaderRow</td><td>设置表头行属性</td><td><code>(columns, index) =&gt; object</code></td><td>-</td></tr></tbody></table><h3 id="tablecolumn" tabindex="-1">TableColumn</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>列的唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>列头显示文字</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>dataIndex</td><td>列数据在数据项中对应的路径</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>列宽度</td><td><code>number | string</code></td><td>-</td></tr><tr><td>align</td><td>设置列的对齐方式</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>fixed</td><td>列是否固定（左侧/右侧）</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>ellipsis</td><td>超过宽度将自动省略</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>sorter</td><td>排序函数，支持多列排序</td><td><code>CompareFn | { compare: CompareFn, multiple: number }</code></td><td>-</td></tr><tr><td>sortOrder</td><td>排序的受控属性</td><td><code>&#39;ascend&#39; | &#39;descend&#39; | null</code></td><td>-</td></tr><tr><td>filters</td><td>表头的筛选菜单项</td><td><code>ColumnFilterItem[]</code></td><td>-</td></tr><tr><td>filteredValue</td><td>筛选的受控属性</td><td><code>FilterValue</code></td><td>-</td></tr><tr><td>onFilter</td><td>筛选函数</td><td><code>(value: any, record: any) =&gt; boolean</code></td><td>-</td></tr><tr><td>filterMultiple</td><td>是否多选</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>responsive</td><td>响应式断点</td><td><code>(&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39;)[]</code></td><td>-</td></tr><tr><td>render</td><td>自定义渲染函数</td><td><code>(text: any, record: any, index: number) =&gt; any</code></td><td>-</td></tr></tbody></table><h3 id="tablerowselection" tabindex="-1">TableRowSelection</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>选择框类型</td><td><code>&#39;checkbox&#39; | &#39;radio&#39;</code></td><td><code>&#39;checkbox&#39;</code></td></tr><tr><td>selectedRowKeys</td><td>指定选中项的 key 数组</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>onChange</td><td>选中项发生变化时的回调</td><td><code>(keys: Key[], rows: any[], info: { type: string }) =&gt; void</code></td><td>-</td></tr><tr><td>onSelect</td><td>用户手动选择/取消选择某行的回调</td><td><code>(record, selected, selectedRows, nativeEvent) =&gt; void</code></td><td>-</td></tr><tr><td>onSelectAll</td><td>用户手动选择/取消选择所有行的回调</td><td><code>(selected, selectedRows, changeRows) =&gt; void</code></td><td>-</td></tr><tr><td>getCheckboxProps</td><td>选择框的默认属性配置</td><td><code>(record) =&gt; object</code></td><td>-</td></tr></tbody></table><h3 id="expandableconfig" tabindex="-1">ExpandableConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>expandedRowRender</td><td>额外的展开行内容</td><td><code>(record, index, indent, expanded) =&gt; VNode</code></td><td>-</td></tr><tr><td>expandedRowKeys</td><td>展开的行，受控属性</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>defaultExpandedRowKeys</td><td>默认展开的行</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>onExpand</td><td>点击展开图标时触发</td><td><code>(expanded, record) =&gt; void</code></td><td>-</td></tr><tr><td>onExpandedRowsChange</td><td>展开的行变化时触发</td><td><code>(expandedKeys: Key[]) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="tablepaginationconfig" tabindex="-1">TablePaginationConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数</td><td><code>number</code></td><td>-</td></tr><tr><td>pageSize</td><td>每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td>-</td></tr><tr><td>showQuickJumper</td><td>是否可以快速跳转至某页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSizeChanger</td><td>是否展示 pageSize 切换器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showTotal</td><td>用于显示数据总量和当前数据顺序</td><td><code>(total, range) =&gt; string</code></td><td>-</td></tr><tr><td>pageSizeOptions</td><td>指定每页可以显示多少条</td><td><code>number[]</code></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td>onChange</td><td>页码或 pageSize 改变的回调</td><td><code>(page, pageSize) =&gt; void</code></td><td>-</td></tr></tbody></table><h2 id="-9" tabindex="-1">特性说明</h2><h3 id="-10" tabindex="-1">多列排序</h3><p>按住 Shift 键点击多个列的表头，可以实现多列排序。排序优先级按照点击顺序。</p><h3 id="-11" tabindex="-1">响应式列</h3><p>通过配置 <code>responsive</code> 属性，可以根据屏幕断点自动显示或隐藏列：</p><ul><li><code>xs</code>: 0px</li><li><code>sm</code>: 576px</li><li><code>md</code>: 768px</li><li><code>lg</code>: 992px</li><li><code>xl</code>: 1200px</li><li><code>xxl</code>: 1600px</li></ul><h3 id="-12" tabindex="-1">固定列</h3><p>设置 <code>fixed</code> 为 <code>&#39;left&#39;</code> 或 <code>&#39;right&#39;</code>，可以固定列到左侧或右侧。滚动时会自动显示阴影效果。</p><h3 id="-13" tabindex="-1">可访问性</h3><p>Table 组件完全支持键盘导航和屏幕阅读器：</p><ul><li>使用 <code>Enter</code> 或 <code>Space</code> 键可以触发排序</li><li>完整的 ARIA 标签支持</li><li>符合 WCAG 2.1 AA 标准</li></ul>',22))])}}};export{ut as default};
