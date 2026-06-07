import{R as Ee}from"./index-BJ4y_y9E.js";import{D as Me}from"./index-DR458Ko9.js";import{B as de}from"./Button-BxE2sJbo.js";import{C as se}from"./Checkbox-DPUV7VuH.js";import{n as J,D as C,m as a,M as He,L as Oe,w as Ve,x as Ye,P as fe,r as ae,l as E,F as Be,e as L,z as j,h as X,J as k,B as Qe,j as ce,g as m,I as Je,G as We,Q as q,k as Ge}from"./index-i0jnWELi.js";import{c as M}from"./cls-S9IiI6wd.js";import{E as Ue}from"./Empty-VIClFYt1.js";import{P as Xe}from"./Pagination-B0t23Wby.js";import{S as Ze}from"./Spin-DuYAEpoI.js";import{I as pe}from"./Input-BQhJwkSQ.js";import"./Menu-pY4Zw3T2.js";import"./icons-DkTSuFEr.js";import"./Icon-D9pw0Su_.js";import"./Select-Eah8NrZx.js";import"./VirtualList-Cm94Yyr9.js";const et=J({name:"FilterDropdown",props:{prefixCls:{type:String,required:!0},filters:{type:Array,default:()=>[]},filteredValue:{type:Array,default:()=>[]},filterMultiple:{type:Boolean,default:!0},locale:{type:Object,default:()=>({})},onConfirm:{type:Function,required:!0}},setup(e){const c=C([...e.filteredValue.filter(f=>typeof f=="string"||typeof f=="number")]),d=(f,N)=>{e.filterMultiple?N?c.value=[...c.value,f]:c.value=c.value.filter(w=>w!==f):c.value=N?[f]:[]},u=()=>{e.onConfirm(c.value)},n=()=>{c.value=[],e.onConfirm([])},r=()=>e.filters.map(f=>{const N=c.value.includes(f.value);return a("div",{key:String(f.value),class:`${e.prefixCls}-dropdown-menu-item`},[a(se,{checked:N,onChange:w=>d(f.value,w)},{default:()=>[f.text]})])});return()=>a("div",{class:`${e.prefixCls}-dropdown`},[a("div",{class:`${e.prefixCls}-dropdown-menu`},[r()]),a("div",{class:`${e.prefixCls}-dropdown-btns`},[a(de,{size:"small",onClick:n},{default:()=>[e.locale.filterReset||"重置"]}),a(de,{type:"primary",size:"small",onClick:u},{default:()=>[e.locale.filterConfirm||"确定"]})])])}}),tt={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1600},H=J({name:"Table",props:{dataSource:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},rowKey:[String,Function],loading:Boolean,bordered:Boolean,size:{type:String,default:"default"},scroll:Object,pagination:{type:[Boolean,Object],default:void 0},rowSelection:Object,expandable:Object,locale:Object,showHeader:{type:Boolean,default:!0},sticky:[Boolean,Object],summary:Function,title:[String,Function],footer:[String,Function],onRow:Function,onHeaderRow:Function,onChange:Function},emits:["change"],setup(e,{emit:c}){var Ce,Te,$e;const d=He("table"),u=Oe(),n=C(),r=C(0),f=C(new Map),N=54,w=L(()=>{var t;return!!((t=e.scroll)!=null&&t.y&&e.dataSource&&e.dataSource.length>20)}),T=L(()=>{var t;return(t=e.scroll)!=null&&t.y?typeof e.scroll.y=="number"?e.scroll.y:parseInt(e.scroll.y)||400:0}),S=(t,l)=>{const s=W(t,l);return f.value.get(s)||N},O=C("xxl"),ue=()=>{var s;const t=window.innerWidth,l=((s=Object.entries(tt).reverse().find(([i,y])=>t>=y))==null?void 0:s[0])||"xs";O.value=l};Ve(()=>{ue(),window.addEventListener("resize",ue)}),Ye(()=>{window.removeEventListener("resize",ue)});const Z=L(()=>{var t;return((t=e.columns)==null?void 0:t.filter(l=>!l.responsive||l.responsive.length===0?!0:l.responsive.includes(O.value)))??[]}),F=C([]),P=C({}),he=C(1),ke=C(10);fe(()=>Z.value,t=>{t&&t.forEach(l=>{const s=l.key??l.dataIndex??"";l.filteredValue!==void 0&&l.filteredValue!==null&&(P.value[s]=l.filteredValue)})},{immediate:!0});const W=(t,l)=>typeof e.rowKey=="function"?e.rowKey(t):typeof e.rowKey=="string"?t[e.rowKey]:t.key??String(l),ve=(t,l)=>{if(l.dataIndex)return t[l.dataIndex]},be=L(()=>{let t=[...e.dataSource??[]];return Z.value.forEach(l=>{const s=l.key??l.dataIndex??"",i=P.value[s];i!=null&&i.length&&l.onFilter&&(t=t.filter(y=>i.some(x=>l.onFilter(x,y))))}),t}),te=L(()=>{let t=[...be.value];return F.value.length===0||t.sort((l,s)=>{for(const i of F.value){const y=i.column;if(!y.sorter||!i.order)continue;const x=typeof y.sorter=="function"?y.sorter:void 0;if(!x)continue;const g=x(l,s);if(g!==0)return i.order==="descend"?-g:g}return 0}),t}),$=L(()=>{if(e.pagination===!1)return null;const t=typeof e.pagination=="object"?e.pagination:{};return{pageSize:(t==null?void 0:t.pageSize)??ke.value,current:(t==null?void 0:t.current)??he.value,total:(t==null?void 0:t.total)??te.value.length,onChange:t==null?void 0:t.onChange,showQuickJumper:t==null?void 0:t.showQuickJumper,showSizeChanger:t==null?void 0:t.showSizeChanger,showTotal:t==null?void 0:t.showTotal,pageSizeOptions:t==null?void 0:t.pageSizeOptions}}),p=L(()=>{if(!$.value)return te.value;const{current:t,pageSize:l}=$.value,s=(t-1)*l;return te.value.slice(s,s+l)}),me=L(()=>{if(!w.value)return 0;let t=0,l=0;const s=5;for(;l<p.value.length;l++){if(t>=r.value)return Math.max(0,l-s);t+=S(p.value[l],l)}return 0}),ye=L(()=>{if(!w.value)return p.value.length;let t=0,l=0;const s=5,i=r.value+T.value;for(let y=0;y<p.value.length;y++)if(t+=S(p.value[y],y),t>=i){l=y;break}return Math.min(p.value.length,l+s+1)}),Ne=L(()=>w.value?p.value.slice(me.value,ye.value):p.value),we=L(()=>{if(!w.value)return 0;let t=0;for(let l=0;l<me.value;l++)t+=S(p.value[l],l);return t}),ze=t=>{if(!w.value)return;const l=t.target;r.value=l.scrollTop},Se=(t,l)=>{var z;if(!t.sorter)return;const s=t.key??t.dataIndex??"",i=(l==null?void 0:l.shiftKey)||typeof t.sorter=="object"&&"multiple"in t.sorter,y=F.value.findIndex(h=>h.key===s);if(y>=0){const h=F.value[y];h.order==="ascend"?F.value[y]={key:s,order:"descend",column:t}:h.order==="descend"&&(F.value=F.value.filter((ne,U)=>U!==y))}else{const h={key:s,order:"ascend",column:t};i?F.value=[...F.value,h]:F.value=[h]}const x=F.value.map(h=>({column:h.column,order:h.order,field:h.column.dataIndex,columnKey:h.key})),g={currentDataSource:te.value,action:"sort"},D=x.length===1?x[0]:x;c("change",$.value,P.value,D,g),(z=e.onChange)==null||z.call(e,$.value,P.value,D,g)},je=(t,l)=>{var g,D,z;he.value=t,ke.value=l,(D=(g=$.value)==null?void 0:g.onChange)==null||D.call(g,t,l);const s={currentDataSource:p.value,action:"paginate"},i=F.value.map(h=>({column:h.column,order:h.order,field:h.column.dataIndex,columnKey:h.key})),y=i.length===1?i[0]:i,x={...$.value,current:t,pageSize:l};c("change",x,P.value,y,s),(z=e.onChange)==null||z.call(e,x,P.value,y,s)},Y=C(((Ce=e.rowSelection)==null?void 0:Ce.selectedRowKeys)??[]);fe(()=>{var t;return(t=e.rowSelection)==null?void 0:t.selectedRowKeys},t=>{t&&(Y.value=t)});const G=C(((Te=e.expandable)==null?void 0:Te.expandedRowKeys)??(($e=e.expandable)==null?void 0:$e.defaultExpandedRowKeys)??[]);fe(()=>{var t;return(t=e.expandable)==null?void 0:t.expandedRowKeys},t=>{t!==void 0&&(G.value=t)});const Ie=(t,l)=>{var i,y,x,g;const s=W(l,0);t?G.value=[...G.value,s]:G.value=G.value.filter(D=>D!==s),(y=(i=e.expandable)==null?void 0:i.onExpand)==null||y.call(i,t,l),(g=(x=e.expandable)==null?void 0:x.onExpandedRowsChange)==null||g.call(x,G.value)},Pe=(t,l)=>{var x;P.value[t]=l;const s={currentDataSource:be.value,action:"filter"},i=F.value.map(g=>({column:g.column,order:g.order,field:g.column.dataIndex,columnKey:g.key})),y=i.length===1?i[0]:i;c("change",$.value,P.value,y,s),(x=e.onChange)==null||x.call(e,$.value,P.value,y,s)},le=(t,l,s)=>{var g,D,z,h,ne;if(!e.rowSelection)return;let i,y="single";e.rowSelection.type==="radio"?i=s?[t]:[]:(i=s?[...Y.value,t]:Y.value.filter(U=>U!==t),y="multiple"),Y.value=i;const x=((g=e.dataSource)==null?void 0:g.filter((U,oe)=>i.includes(W(U,oe))))??[];(z=(D=e.rowSelection).onChange)==null||z.call(D,i,x,{type:y}),(ne=(h=e.rowSelection).onSelect)==null||ne.call(h,l,s,x,new Event("change"))},Le=t=>{var i,y,x,g;if(!e.rowSelection)return;const l=t?p.value.map((D,z)=>W(D,z)):[];Y.value=l;const s=t?[...p.value]:[];(y=(i=e.rowSelection).onChange)==null||y.call(i,l,s,{type:t?"all":"none"}),(g=(x=e.rowSelection).onSelectAll)==null||g.call(x,t,s,p.value)};return()=>{var ne,U,oe,De,Re,_e,Ae,Ke,Fe;const t=p.value.length===0,l=!!e.rowSelection,s=((ne=e.rowSelection)==null?void 0:ne.type)==="radio",i=!!((U=e.expandable)!=null&&U.expandedRowRender),y=p.value.length>0&&p.value.every((o,v)=>Y.value.includes(W(o,v))),x=p.value.some((o,v)=>Y.value.includes(W(o,v))),g=(Z.value.length??0)+(l?1:0)+(i?1:0),D=typeof e.sticky=="object"?e.sticky:e.sticky?{offsetHeader:0}:void 0,z=D?{position:"sticky",top:`${D.offsetHeader||0}px`,zIndex:3}:{},h=a("div",{class:M(d,`${d}-${e.size}`,{[`${d}-bordered`]:e.bordered,[`${d}-loading`]:e.loading,[`${d}-scroll-horizontal`]:!!((oe=e.scroll)!=null&&oe.x),[`${d}-sticky`]:!!D}),role:"region","aria-label":"Data table"},[e.title&&a("div",{class:`${d}-title`},[typeof e.title=="function"?e.title(te.value):e.title]),a("div",{class:`${d}-container`},[a("div",{ref:n,class:`${d}-content`,style:{...(De=e.scroll)!=null&&De.x?{overflowX:"auto"}:{},...w.value?{overflowY:"auto",maxHeight:typeof((Re=e.scroll)==null?void 0:Re.y)=="number"?`${e.scroll.y}px`:(_e=e.scroll)==null?void 0:_e.y}:{}},onScroll:ze,role:"presentation"},[a("table",{role:"table","aria-rowcount":p.value.length,"aria-colcount":g,style:(Ae=e.scroll)!=null&&Ae.x?{minWidth:typeof e.scroll.x=="number"?`${e.scroll.x}px`:e.scroll.x}:{}},[e.showHeader&&a("thead",{class:`${d}-thead`,role:"rowgroup",style:z},[a("tr",ae(((Ke=e.onHeaderRow)==null?void 0:Ke.call(e,Z.value??[],0))??{},{role:"row"}),[i&&a("th",{class:`${d}-cell ${d}-expand-icon-col`,style:{width:"48px"},role:"columnheader"},null),l&&a("th",{class:`${d}-cell ${d}-selection-column`,role:"columnheader","aria-label":"Row selection"},[!s&&a(se,{checked:y,indeterminate:x&&!y,onChange:o=>Le(o)},null)]),Z.value.map(o=>{var V;const v=o.key??o.dataIndex??"",b=F.value.find(I=>I.key===v),R=!!b,A=o.fixed==="left",B=o.fixed==="right",ee=o.filters&&o.filters.length>0,Q=((V=P.value[v])==null?void 0:V.length)>0;return a("th",{key:v,scope:"col",role:"columnheader","aria-sort":R?b.order==="ascend"?"ascending":"descending":o.sorter?"none":void 0,tabindex:o.sorter?0:void 0,onKeydown:I=>{o.sorter&&(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),Se(o,I))},class:M(`${d}-cell`,{[`${d}-column-sort`]:R,[`${d}-column-has-sorters`]:!!o.sorter,[`${d}-cell-fix-left`]:A,[`${d}-cell-fix-right`]:B}),style:{width:o.width?typeof o.width=="number"?`${o.width}px`:o.width:void 0,textAlign:o.align??"left"},onClick:I=>o.sorter&&Se(o,I)},[a("div",{class:`${d}-column-title`},[o.title,o.sorter&&a("span",{class:`${d}-column-sorter`},[a("span",{class:M(`${d}-column-sorter-up`,{active:R&&(b==null?void 0:b.order)==="ascend"})},[E("▲")]),a("span",{class:M(`${d}-column-sorter-down`,{active:R&&(b==null?void 0:b.order)==="descend"})},[E("▼")])]),ee&&a(Me,{trigger:["click"]},{default:()=>[a("span",{class:M(`${d}-filter-trigger`,{active:Q}),onClick:I=>I.stopPropagation()},[E("🔽")])],overlay:()=>a(et,{prefixCls:d,filters:o.filters,filteredValue:P.value[v]||[],filterMultiple:o.filterMultiple??!0,locale:u.value.Table,onConfirm:I=>Pe(v,I)},null)})])])})])]),a("tbody",{class:`${d}-tbody`,role:"rowgroup"},[t?a("tr",{class:`${d}-placeholder`,role:"row"},[a("td",{colspan:g,role:"cell"},[a(Ue,{description:((Fe=e.locale)==null?void 0:Fe.emptyText)??u.value.Table.emptyText},null)])]):w.value?a(Be,null,[we.value>0&&a("tr",{style:{height:`${we.value}px`},"aria-hidden":"true"},[a("td",{colspan:g},null)]),Ne.value.flatMap((o,v)=>{var Q,V,I,_;const b=me.value+v,R=W(o,b),A=Y.value.includes(R),B=G.value.includes(R),ee=[a("tr",ae({key:R,role:"row","aria-selected":l?A:void 0,"aria-expanded":i?B:void 0,class:M(`${d}-row`,{[`${d}-row-selected`]:A})},((Q=e.onRow)==null?void 0:Q.call(e,o,b))??{}),[i&&a("td",{class:`${d}-cell ${d}-expand-icon-cell`,role:"cell"},[a("button",{type:"button",class:M(`${d}-expand-icon`,{[`${d}-expand-icon-expanded`]:B}),onClick:()=>Ie(!B,o),"aria-label":B?"Collapse row":"Expand row","aria-expanded":B},[B?"▼":"▶"])]),l&&a("td",{class:`${d}-cell ${d}-selection-column`,role:"cell"},[s?a(Ee,{checked:A,onChange:K=>le(R,o,K)},null):a(se,ae({checked:A,onChange:K=>le(R,o,K)},((I=(V=e.rowSelection)==null?void 0:V.getCheckboxProps)==null?void 0:I.call(V,o))??{}),null)]),Z.value.map(K=>{const re=K.key??K.dataIndex??"",ie=ve(o,K),ge=K.render?K.render(ie,o,b):ie,xe=K.fixed==="left",qe=K.fixed==="right";return a("td",{key:re,role:"cell",class:M(`${d}-cell`,{[`${d}-cell-ellipsis`]:K.ellipsis,[`${d}-cell-fix-left`]:xe,[`${d}-cell-fix-right`]:qe}),style:{textAlign:K.align??"left"}},[ge])})])];return i&&B&&((_=e.expandable)!=null&&_.expandedRowRender)&&ee.push(a("tr",{key:`${R}-expanded`,class:`${d}-expanded-row`,role:"row"},[a("td",{colspan:g,class:`${d}-cell`,role:"cell"},[e.expandable.expandedRowRender(o,b,0,B)])])),ee}),ye.value<p.value.length&&(()=>{let o=0;for(let v=ye.value;v<p.value.length;v++)o+=S(p.value[v],v);return o>0?a("tr",{style:{height:`${o}px`},"aria-hidden":"true"},[a("td",{colspan:g},null)]):null})()]):p.value.flatMap((o,v)=>{var ee,Q,V,I;const b=W(o,v),R=Y.value.includes(b),A=G.value.includes(b),B=[a("tr",ae({key:b,role:"row","aria-selected":l?R:void 0,"aria-expanded":i?A:void 0,class:M(`${d}-row`,{[`${d}-row-selected`]:R})},((ee=e.onRow)==null?void 0:ee.call(e,o,v))??{}),[i&&a("td",{class:`${d}-cell ${d}-expand-icon-cell`,role:"cell"},[a("button",{type:"button",class:M(`${d}-expand-icon`,{[`${d}-expand-icon-expanded`]:A}),onClick:()=>Ie(!A,o),"aria-label":A?"Collapse row":"Expand row","aria-expanded":A},[A?"▼":"▶"])]),l&&a("td",{class:`${d}-cell ${d}-selection-column`,role:"cell"},[s?a(Ee,{checked:R,onChange:_=>le(b,o,_)},null):a(se,ae({checked:R,onChange:_=>le(b,o,_)},((V=(Q=e.rowSelection)==null?void 0:Q.getCheckboxProps)==null?void 0:V.call(Q,o))??{}),null)]),Z.value.map(_=>{const K=_.key??_.dataIndex??"",re=ve(o,_),ie=_.render?_.render(re,o,v):re,ge=_.fixed==="left",xe=_.fixed==="right";return a("td",{key:K,role:"cell",class:M(`${d}-cell`,{[`${d}-cell-ellipsis`]:_.ellipsis,[`${d}-cell-fix-left`]:ge,[`${d}-cell-fix-right`]:xe}),style:{textAlign:_.align??"left"}},[ie])})])];return i&&A&&((I=e.expandable)!=null&&I.expandedRowRender)&&B.push(a("tr",{key:`${b}-expanded`,class:`${d}-expanded-row`,role:"row"},[a("td",{colspan:g,class:`${d}-cell`,role:"cell"},[e.expandable.expandedRowRender(o,v,0,A)])])),B})]),e.summary&&!t&&a("tfoot",{class:`${d}-summary`},[e.summary(p.value)])])])]),e.footer&&a("div",{class:`${d}-footer`},[typeof e.footer=="function"?e.footer(te.value):e.footer]),$.value&&!t&&a("div",{class:`${d}-pagination ${d}-pagination-right`},[a(Xe,{total:$.value.total,pageSize:$.value.pageSize,current:$.value.current,showQuickJumper:$.value.showQuickJumper,showSizeChanger:$.value.showSizeChanger,showTotal:$.value.showTotal,pageSizeOptions:$.value.pageSizeOptions,onChange:je},null)])]);return e.loading?a("div",{style:{position:"relative"}},[a(Ze,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10}},null),a("div",{style:{opacity:.5}},[h])]):h}}}),nt=J({__name:"TableBasic",setup(e){const c=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],d=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(u,n)=>(j(),X(k(H),{"data-source":c,columns:d,"row-key":"key"}))}}),at=`<template>
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
`,dt=J({__name:"TableEditable",setup(e){const c=C([{key:1,name:"李明",age:28,address:"北京市朝阳区"},{key:2,name:"王芳",age:32,address:"上海市浦东新区"},{key:3,name:"张伟",age:25,address:"广州市天河区"}]),d=C(null),u=Qe({}),n=T=>T.key===d.value,r=T=>{d.value=T.key,Object.assign(u,{...T})},f=T=>{const S=c.value.findIndex(O=>O.key===T);S>-1&&Object.assign(c.value[S],u),d.value=null},N=()=>{d.value=null},w=[{title:"姓名",dataIndex:"name",key:"name",width:200,render:(T,S)=>n(S)?a(pe,{value:u.name,onChange:O=>u.name=O.target.value},null):T},{title:"年龄",dataIndex:"age",key:"age",width:150,render:(T,S)=>n(S)?a(pe,{type:"number",value:u.age,onChange:O=>u.age=Number(O.target.value)},null):T},{title:"地址",dataIndex:"address",key:"address",render:(T,S)=>n(S)?a(pe,{value:u.address,onChange:O=>u.address=O.target.value},null):T},{title:"操作",key:"action",width:150,render:(T,S)=>n(S)?a("span",null,[a(de,{type:"link",onClick:()=>f(S.key),style:{marginRight:"8px"}},{default:()=>[E("保存")]}),a(de,{type:"link",onClick:N},{default:()=>[E("取消")]})]):a(de,{type:"link",onClick:()=>r(S),disabled:d.value!==null},{default:()=>[E("编辑")]})}];return(T,S)=>(j(),X(k(H),{"data-source":c.value,columns:w,pagination:!1,bordered:""},null,8,["data-source"]))}}),lt=`<script setup lang="tsx">
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
  const index = dataSource.value.findIndex(item => item.key === key)
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
        return (
          <Input
            value={editForm.name}
            onChange={(e) => (editForm.name = (e.target as HTMLInputElement).value)}
          />
        )
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
          <Input
            value={editForm.address}
            onChange={(e) => (editForm.address = (e.target as HTMLInputElement).value)}
          />
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
  <Table
    :data-source="dataSource"
    :columns="columns"
    :pagination="false"
    bordered
  />
</template>
`,ot=J({__name:"TableExpandable",setup(e){const c=C([]),d=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}],u=[{key:"1",name:"Joe",age:32,address:"New York",description:"My name is Joe, I am 32 years old, living in New York."},{key:"2",name:"Jim",age:28,address:"London",description:"My name is Jim, I am 28 years old, living in London."},{key:"3",name:"Alice",age:35,address:"Sydney",description:"My name is Alice, I am 35 years old, living in Sydney."}],n={expandedRowRender:r=>r.description,expandedRowKeys:c.value,onExpandedRowsChange:r=>{c.value=r}};return(r,f)=>(j(),X(k(H),{columns:d,dataSource:u,expandable:n}))}}),rt=`<template>
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
`,it=J({__name:"TableFilter",setup(e){const c=[{title:"Name",dataIndex:"name",key:"name",filters:[{text:"Joe",value:"Joe"},{text:"Jim",value:"Jim"},{text:"Alice",value:"Alice"}],onFilter:(u,n)=>n.name.includes(u)},{title:"Age",dataIndex:"age",key:"age",filters:[{text:"20-30",value:"20-30"},{text:"30-40",value:"30-40"}],onFilter:(u,n)=>{const r=n.age;return u==="20-30"?r>=20&&r<30:u==="30-40"?r>=30&&r<40:!1}},{title:"Address",dataIndex:"address",key:"address"}],d=[{key:"1",name:"Joe",age:32,address:"New York"},{key:"2",name:"Jim",age:28,address:"London"},{key:"3",name:"Alice",age:35,address:"Sydney"},{key:"4",name:"Bob",age:25,address:"Paris"}];return(u,n)=>(j(),X(k(H),{columns:c,dataSource:d}))}}),st=`<template>
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
`,ct=J({__name:"TableFixedColumns",setup(e){const c=[{title:"Name",dataIndex:"name",key:"name",fixed:"left",width:100},{title:"Age",dataIndex:"age",key:"age",width:80},{title:"Column 1",dataIndex:"col1",key:"col1",width:150},{title:"Column 2",dataIndex:"col2",key:"col2",width:150},{title:"Column 3",dataIndex:"col3",key:"col3",width:150},{title:"Column 4",dataIndex:"col4",key:"col4",width:150},{title:"Action",key:"action",fixed:"right",width:100,render:()=>"Edit"}],d=[{key:"1",name:"Joe",age:32,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"},{key:"2",name:"Jim",age:28,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"},{key:"3",name:"Alice",age:35,col1:"Data 1",col2:"Data 2",col3:"Data 3",col4:"Data 4"}];return(u,n)=>(j(),X(k(H),{columns:c,dataSource:d,scroll:{x:1200},bordered:""}))}}),ut=`<template>
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
`,mt=J({__name:"TableResponsive",setup(e){const c=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age",responsive:["sm","md","lg","xl","xxl"]},{title:"Email",dataIndex:"email",key:"email",responsive:["md","lg","xl","xxl"]},{title:"Phone",dataIndex:"phone",key:"phone",responsive:["lg","xl","xxl"]},{title:"Address",dataIndex:"address",key:"address",responsive:["xl","xxl"]}],d=[{key:"1",name:"Joe",age:32,email:"joe@example.com",phone:"123-456-7890",address:"New York No. 1 Lake Park"},{key:"2",name:"Jim",age:28,email:"jim@example.com",phone:"098-765-4321",address:"London No. 1 Lake Park"},{key:"3",name:"Alice",age:35,email:"alice@example.com",phone:"555-123-4567",address:"Sydney No. 1 Lake Park"}];return(u,n)=>(j(),X(k(H),{columns:c,dataSource:d}))}}),yt=`<template>
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
`,gt=J({__name:"TableRowSelection",setup(e){const c=C([]),d={selectedRowKeys:c,onChange:r=>{c.value=r}},u=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],n=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(r,f)=>(j(),ce(Be,null,[a(k(H),{"data-source":u,columns:n,"row-key":"key","row-selection":d}),m("p",null,"已选择："+Je(c.value.join(", ")),1)],64))}}),xt=`<template>
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
`,ft=J({__name:"TableSorter",setup(e){const c=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"},{key:"3",name:"李明",age:28,address:"朝阳区建国路88号"}],d=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age",sorter:(u,n)=>u.age-n.age},{title:"住址",dataIndex:"address",key:"address"}];return(u,n)=>(j(),X(k(H),{"data-source":c,columns:d,"row-key":"key"}))}}),pt=`<template>
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
`,ht={style:{height:"600px",overflow:"auto"}},kt=J({__name:"TableSticky",setup(e){const c=C(Array.from({length:100},(u,n)=>({key:n,name:`李明 ${n+1}`,age:20+n%50,address:`北京市朝阳区某街道 ${n+1} 号`,tags:n%2===0?["开发者","设计师"]:["产品经理"]}))),d=[{title:"姓名",dataIndex:"name",key:"name",width:150,fixed:"left"},{title:"年龄",dataIndex:"age",key:"age",width:100,sorter:(u,n)=>u.age-n.age},{title:"地址",dataIndex:"address",key:"address",width:300},{title:"标签",key:"tags",dataIndex:"tags",width:200,render:u=>u.join(", ")}];return(u,n)=>(j(),ce("div",ht,[n[0]||(n[0]=m("div",{style:{height:"300px",background:"#f0f0f0",display:"flex","align-items":"center","justify-content":"center","margin-bottom":"16px"}},[m("p",null,"向下滚动查看表头吸顶效果")],-1)),a(k(H),{"data-source":c.value,columns:d,pagination:!1,scroll:{y:300},sticky:!0,bordered:""},null,8,["data-source"]),n[1]||(n[1]=m("div",{style:{height:"300px",background:"#f0f0f0",display:"flex","align-items":"center","justify-content":"center","margin-top":"16px"}},[m("p",null,"底部内容")],-1))]))}}),vt=`<script setup lang="ts">
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
  }))
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
  <div style="height: 600px; overflow: auto;">
    <div style="height: 300px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
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
    <div style="height: 300px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; margin-top: 16px;">
      <p>底部内容</p>
    </div>
  </div>
</template>
`,bt=J({__name:"TableSummary",setup(e){const c=[{key:1,name:"笔记本电脑",category:"电子产品",price:5999,quantity:3},{key:2,name:"机械键盘",category:"电子产品",price:599,quantity:5},{key:3,name:"显示器",category:"电子产品",price:1999,quantity:2},{key:4,name:"鼠标",category:"电子产品",price:199,quantity:10},{key:5,name:"耳机",category:"电子产品",price:399,quantity:6}],d=[{title:"商品名称",dataIndex:"name",key:"name"},{title:"类别",dataIndex:"category",key:"category"},{title:"单价（元）",dataIndex:"price",key:"price",align:"right",render:n=>`¥${n.toFixed(2)}`},{title:"数量",dataIndex:"quantity",key:"quantity",align:"right"},{title:"总价（元）",key:"total",align:"right",render:(n,r)=>`¥${(r.price*r.quantity).toFixed(2)}`}],u=n=>{const r=n.reduce((N,w)=>N+w.quantity,0),f=n.reduce((N,w)=>N+w.price*w.quantity,0);return a("tr",null,[a("td",{colspan:"3",style:"text-align: right; font-weight: 600;"},[E("总计：")]),a("td",{style:"text-align: right; font-weight: 600;"},[r]),a("td",{style:"text-align: right; font-weight: 600;"},[E("¥"),f.toFixed(2)])])};return(n,r)=>(j(),X(k(H),{"data-source":c,columns:d,pagination:!1,summary:u,bordered:""}))}}),wt=`<script setup lang="tsx">
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
      <td colspan="3" style="text-align: right; font-weight: 600;">总计：</td>
      <td style="text-align: right; font-weight: 600;">{totalQuantity}</td>
      <td style="text-align: right; font-weight: 600;">¥{totalAmount.toFixed(2)}</td>
    </tr>
  )
}
<\/script>

<template>
  <Table
    :data-source="dataSource"
    :columns="columns"
    :pagination="false"
    :summary="summaryRender"
    bordered
  />
</template>
`,St={style:{"margin-bottom":"16px"}},It=J({__name:"TableVirtualScroll",setup(e){const d=C((n=>Array.from({length:n},(r,f)=>({key:f,name:`用户 ${f+1}`,age:20+f%50,address:`北京市朝阳区某街道 ${f+1} 号`,email:`user${f+1}@example.com`,phone:`138${String(f).padStart(8,"0")}`})))(1e3)),u=[{title:"姓名",dataIndex:"name",key:"name",width:120,fixed:"left"},{title:"年龄",dataIndex:"age",key:"age",width:80,sorter:(n,r)=>n.age-r.age},{title:"地址",dataIndex:"address",key:"address",width:300,ellipsis:!0},{title:"邮箱",dataIndex:"email",key:"email",width:200},{title:"手机号",dataIndex:"phone",key:"phone",width:150}];return(n,r)=>(j(),ce("div",null,[m("p",St,[r[0]||(r[0]=E(" 共 ",-1)),m("strong",null,Je(d.value.length),1),r[1]||(r[1]=E(" 条数据，使用虚拟滚动优化性能 ",-1))]),a(k(H),{"data-source":d.value,columns:u,pagination:!1,scroll:{y:400,x:900},bordered:""},null,8,["data-source"])]))}}),Ct=`<script setup lang="ts">
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
    <p style="margin-bottom: 16px;">
      共 <strong>{{ dataSource.length }}</strong> 条数据，使用虚拟滚动优化性能
    </p>
    <Table
      :data-source="dataSource"
      :columns="columns"
      :pagination="false"
      :scroll="{ y: 400, x: 900 }"
      bordered
    />
  </div>
</template>
`,Tt={class:"markdown-body"},qt={__name:"table",setup(e,{expose:c}){return c({frontmatter:{}}),(u,n)=>{const r=We("DemoBlock");return j(),ce("div",Tt,[n[0]||(n[0]=m("h1",{id:"table-",tabindex:"-1"},"Table 表格",-1)),n[1]||(n[1]=m("p",null,"展示行列数据。",-1)),n[2]||(n[2]=m("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=m("ul",null,[m("li",null,"当有大量结构化的数据需要展现时"),m("li",null,"当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时")],-1)),n[4]||(n[4]=m("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=m("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=m("p",null,"简单的表格，最后一列是各种操作。",-1)),a(r,{title:"基础用法",source:k(at)},{default:q(()=>[a(nt)]),_:1},8,["source"]),n[7]||(n[7]=m("h3",{id:"-3",tabindex:"-1"},"排序",-1)),n[8]||(n[8]=m("p",null,"对某一列数据进行排序。支持多列排序（Shift + 点击表头）。",-1)),a(r,{title:"排序",source:k(pt)},{default:q(()=>[a(ft)]),_:1},8,["source"]),n[9]||(n[9]=m("h3",{id:"-4",tabindex:"-1"},"行选择",-1)),n[10]||(n[10]=m("p",null,"第一列是联动的选择框，支持单选和多选。",-1)),a(r,{title:"行选择",source:k(xt)},{default:q(()=>[a(gt)]),_:1},8,["source"]),n[11]||(n[11]=m("h3",{id:"-5",tabindex:"-1"},"筛选",-1)),n[12]||(n[12]=m("p",null,"对某一列数据进行筛选。",-1)),a(r,{title:"筛选",source:k(st)},{default:q(()=>[a(it)]),_:1},8,["source"]),n[13]||(n[13]=m("h3",{id:"-6",tabindex:"-1"},"固定列",-1)),n[14]||(n[14]=m("p",null,"固定左侧或右侧的列，横向滚动时保持可见。",-1)),a(r,{title:"固定列",source:k(ut)},{default:q(()=>[a(ct)]),_:1},8,["source"]),n[15]||(n[15]=m("h3",{id:"-7",tabindex:"-1"},"展开行",-1)),n[16]||(n[16]=m("p",null,"可展开的行，显示额外信息。",-1)),a(r,{title:"展开行",source:k(rt)},{default:q(()=>[a(ot)]),_:1},8,["source"]),n[17]||(n[17]=m("h3",{id:"-8",tabindex:"-1"},"响应式",-1)),n[18]||(n[18]=m("p",null,"根据屏幕大小自动显示或隐藏列。",-1)),a(r,{title:"响应式",source:k(yt)},{default:q(()=>[a(mt)]),_:1},8,["source"]),n[19]||(n[19]=m("h3",{id:"-9",tabindex:"-1"},"虚拟滚动",-1)),n[20]||(n[20]=m("p",null,"大数据场景下使用虚拟滚动优化性能，支持 1000+ 行数据流畅滚动。",-1)),a(r,{title:"虚拟滚动",source:k(Ct)},{default:q(()=>[a(It)]),_:1},8,["source"]),n[21]||(n[21]=m("h3",{id:"-10",tabindex:"-1"},"吸顶表头",-1)),n[22]||(n[22]=m("p",null,"当页面滚动时，表头会固定在页面顶部。",-1)),a(r,{title:"吸顶表头",source:k(vt)},{default:q(()=>[a(kt)]),_:1},8,["source"]),n[23]||(n[23]=m("h3",{id:"-11",tabindex:"-1"},"总结栏",-1)),n[24]||(n[24]=m("p",null,[E("通过 "),m("code",null,"summary"),E(" 可以在表格尾部添加合计行。")],-1)),a(r,{title:"总结栏",source:k(wt)},{default:q(()=>[a(bt)]),_:1},8,["source"]),n[25]||(n[25]=m("h3",{id:"-12",tabindex:"-1"},"可编辑单元格",-1)),n[26]||(n[26]=m("p",null,[E("通过自定义 "),m("code",null,"render"),E(" 函数实现可编辑的单元格。")],-1)),a(r,{title:"可编辑单元格",source:k(lt)},{default:q(()=>[a(dt)]),_:1},8,["source"]),n[27]||(n[27]=Ge('<h2 id="api" tabindex="-1">API</h2><h3 id="table-props" tabindex="-1">Table Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据数组</td><td><code>any[]</code></td><td>-</td></tr><tr><td>columns</td><td>表格列的配置描述</td><td><code>TableColumn[]</code></td><td>-</td></tr><tr><td>rowKey</td><td>表格行 key 的取值</td><td><code>string | ((record: any) =&gt; Key)</code></td><td><code>&#39;key&#39;</code></td></tr><tr><td>loading</td><td>页面是否加载中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>分页器，设为 false 时不展示</td><td><code>TablePaginationConfig | false</code></td><td>-</td></tr><tr><td>rowSelection</td><td>列表项是否可选择</td><td><code>TableRowSelection</code></td><td>-</td></tr><tr><td>expandable</td><td>配置展开属性</td><td><code>ExpandableConfig</code></td><td>-</td></tr><tr><td>size</td><td>表格大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>bordered</td><td>是否展示外边框和列边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showHeader</td><td>是否显示表头</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>sticky</td><td>设置粘性头部和滚动条</td><td><code>boolean | { offsetHeader?: number, offsetScroll?: number }</code></td><td><code>false</code></td></tr><tr><td>scroll</td><td>表格是否可滚动</td><td><code>{ x?: number | string, y?: number | string }</code></td><td>-</td></tr><tr><td>summary</td><td>总结栏</td><td><code>(pageData: any[]) =&gt; VNode</code></td><td>-</td></tr><tr><td>title</td><td>表格标题</td><td><code>string | ((data: any[]) =&gt; VNode)</code></td><td>-</td></tr><tr><td>footer</td><td>表格页脚</td><td><code>string | ((data: any[]) =&gt; VNode)</code></td><td>-</td></tr><tr><td>locale</td><td>国际化配置</td><td><code>{ emptyText?: string }</code></td><td>-</td></tr><tr><td>onChange</td><td>分页、排序、筛选变化时触发</td><td><code>(pagination, filters, sorter, extra) =&gt; void</code></td><td>-</td></tr><tr><td>onRow</td><td>设置行属性</td><td><code>(record, index) =&gt; object</code></td><td>-</td></tr><tr><td>onHeaderRow</td><td>设置表头行属性</td><td><code>(columns, index) =&gt; object</code></td><td>-</td></tr></tbody></table><h3 id="tablecolumn" tabindex="-1">TableColumn</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>列的唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>列头显示文字</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>dataIndex</td><td>列数据在数据项中对应的路径</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>列宽度</td><td><code>number | string</code></td><td>-</td></tr><tr><td>align</td><td>设置列的对齐方式</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>fixed</td><td>列是否固定（左侧/右侧）</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>ellipsis</td><td>超过宽度将自动省略</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>sorter</td><td>排序函数，支持多列排序</td><td><code>CompareFn | { compare: CompareFn, multiple: number }</code></td><td>-</td></tr><tr><td>sortOrder</td><td>排序的受控属性</td><td><code>&#39;ascend&#39; | &#39;descend&#39; | null</code></td><td>-</td></tr><tr><td>filters</td><td>表头的筛选菜单项</td><td><code>ColumnFilterItem[]</code></td><td>-</td></tr><tr><td>filteredValue</td><td>筛选的受控属性</td><td><code>FilterValue</code></td><td>-</td></tr><tr><td>onFilter</td><td>筛选函数</td><td><code>(value: any, record: any) =&gt; boolean</code></td><td>-</td></tr><tr><td>filterMultiple</td><td>是否多选</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>responsive</td><td>响应式断点</td><td><code>(&#39;xs&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;xl&#39; | &#39;xxl&#39;)[]</code></td><td>-</td></tr><tr><td>render</td><td>自定义渲染函数</td><td><code>(text: any, record: any, index: number) =&gt; any</code></td><td>-</td></tr></tbody></table><h3 id="tablerowselection" tabindex="-1">TableRowSelection</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>选择框类型</td><td><code>&#39;checkbox&#39; | &#39;radio&#39;</code></td><td><code>&#39;checkbox&#39;</code></td></tr><tr><td>selectedRowKeys</td><td>指定选中项的 key 数组</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>onChange</td><td>选中项发生变化时的回调</td><td><code>(keys: Key[], rows: any[], info: { type: string }) =&gt; void</code></td><td>-</td></tr><tr><td>onSelect</td><td>用户手动选择/取消选择某行的回调</td><td><code>(record, selected, selectedRows, nativeEvent) =&gt; void</code></td><td>-</td></tr><tr><td>onSelectAll</td><td>用户手动选择/取消选择所有行的回调</td><td><code>(selected, selectedRows, changeRows) =&gt; void</code></td><td>-</td></tr><tr><td>getCheckboxProps</td><td>选择框的默认属性配置</td><td><code>(record) =&gt; object</code></td><td>-</td></tr></tbody></table><h3 id="expandableconfig" tabindex="-1">ExpandableConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>expandedRowRender</td><td>额外的展开行内容</td><td><code>(record, index, indent, expanded) =&gt; VNode</code></td><td>-</td></tr><tr><td>expandedRowKeys</td><td>展开的行，受控属性</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>defaultExpandedRowKeys</td><td>默认展开的行</td><td><code>Key[]</code></td><td>-</td></tr><tr><td>onExpand</td><td>点击展开图标时触发</td><td><code>(expanded, record) =&gt; void</code></td><td>-</td></tr><tr><td>onExpandedRowsChange</td><td>展开的行变化时触发</td><td><code>(expandedKeys: Key[]) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="tablepaginationconfig" tabindex="-1">TablePaginationConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数</td><td><code>number</code></td><td>-</td></tr><tr><td>pageSize</td><td>每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td>-</td></tr><tr><td>showQuickJumper</td><td>是否可以快速跳转至某页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSizeChanger</td><td>是否展示 pageSize 切换器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showTotal</td><td>用于显示数据总量和当前数据顺序</td><td><code>(total, range) =&gt; string</code></td><td>-</td></tr><tr><td>pageSizeOptions</td><td>指定每页可以显示多少条</td><td><code>number[]</code></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td>onChange</td><td>页码或 pageSize 改变的回调</td><td><code>(page, pageSize) =&gt; void</code></td><td>-</td></tr></tbody></table><h2 id="-13" tabindex="-1">特性说明</h2><h3 id="-14" tabindex="-1">多列排序</h3><p>按住 Shift 键点击多个列的表头，可以实现多列排序。排序优先级按照点击顺序。</p><h3 id="-15" tabindex="-1">响应式列</h3><p>通过配置 <code>responsive</code> 属性，可以根据屏幕断点自动显示或隐藏列：</p><ul><li><code>xs</code>: 0px</li><li><code>sm</code>: 576px</li><li><code>md</code>: 768px</li><li><code>lg</code>: 992px</li><li><code>xl</code>: 1200px</li><li><code>xxl</code>: 1600px</li></ul><h3 id="-16" tabindex="-1">固定列</h3><p>设置 <code>fixed</code> 为 <code>&#39;left&#39;</code> 或 <code>&#39;right&#39;</code>，可以固定列到左侧或右侧。滚动时会自动显示阴影效果。</p><h3 id="-17" tabindex="-1">可访问性</h3><p>Table 组件完全支持键盘导航和屏幕阅读器：</p><ul><li>使用 <code>Enter</code> 或 <code>Space</code> 键可以触发排序</li><li>完整的 ARIA 标签支持</li><li>符合 WCAG 2.1 AA 标准</li></ul>',22))])}}};export{qt as default};
