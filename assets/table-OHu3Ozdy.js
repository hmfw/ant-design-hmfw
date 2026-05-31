import{m as _,L as ne,K as ae,O as W,B as $,l as o,k as X,d as B,y as z,g as q,I,i as G,F as de,f as i,H as oe,E as le,P as E,j as re}from"./index-CsoOETlJ.js";import{c as p}from"./cls-S9IiI6wd.js";import{E as se}from"./Empty-C4KqP8r5.js";import{P as ce}from"./Pagination-CXs6GDwb.js";import{S as ie}from"./Spin-DewjD7b8.js";import"./icons-BOELVDCf.js";import"./Icon-Bu-seQlV.js";import"./Select-V1X2yJAT.js";const P=_({name:"Table",props:{dataSource:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},rowKey:[String,Function],loading:Boolean,bordered:Boolean,size:{type:String,default:"default"},scroll:Object,pagination:{type:[Boolean,Object],default:void 0},rowSelection:Object,expandable:Object,locale:Object,showHeader:{type:Boolean,default:!0},sticky:Boolean,onChange:Function},emits:["change"],setup(n,{emit:u}){var A;const d=ne("table"),v=ae(),t=$({key:"",order:null}),m=$({}),j=$(1),F=$(10);W(()=>n.columns,e=>{e&&e.forEach(a=>{const l=a.key??a.dataIndex??"";a.filteredValue!==void 0&&(m.value[l]=a.filteredValue)})},{immediate:!0});const C=(e,a)=>typeof n.rowKey=="function"?n.rowKey(e):typeof n.rowKey=="string"?e[n.rowKey]:e.key??String(a),J=(e,a)=>{if(a.dataIndex)return e[a.dataIndex]},M=B(()=>{var a;let e=[...n.dataSource??[]];return(a=n.columns)==null||a.forEach(l=>{const s=l.key??l.dataIndex??"",c=m.value[s];c!=null&&c.length&&l.onFilter&&(e=e.filter(g=>c.some(y=>l.onFilter(y,g))))}),e}),R=B(()=>{var s;const e=[...M.value];if(!t.value.key||!t.value.order)return e;const a=(s=n.columns)==null?void 0:s.find(c=>(c.key??c.dataIndex)===t.value.key);if(!(a!=null&&a.sorter))return e;const l=typeof a.sorter=="function"?a.sorter:void 0;return l&&e.sort((c,g)=>{const y=l(c,g);return t.value.order==="descend"?-y:y}),e}),f=B(()=>{if(n.pagination===!1)return null;const e=typeof n.pagination=="object"?n.pagination:{};return{pageSize:(e==null?void 0:e.pageSize)??F.value,current:(e==null?void 0:e.current)??j.value,total:(e==null?void 0:e.total)??R.value.length,onChange:e==null?void 0:e.onChange}}),S=B(()=>{if(!f.value)return R.value;const{current:e,pageSize:a}=f.value,l=(e-1)*a;return R.value.slice(l,l+a)}),Q=e=>{if(!e.sorter)return;const a=e.key??e.dataIndex??"";t.value.key!==a?t.value={key:a,order:"ascend"}:t.value.order==="ascend"?t.value={key:a,order:"descend"}:t.value={key:"",order:null},u("change",f.value,m.value,t.value)},U=(e,a)=>{var l,s;j.value=e,F.value=a,(s=(l=f.value)==null?void 0:l.onChange)==null||s.call(l,e,a),u("change",{...f.value,current:e,pageSize:a},m.value,t.value)},h=$(((A=n.rowSelection)==null?void 0:A.selectedRowKeys)??[]);W(()=>{var e;return(e=n.rowSelection)==null?void 0:e.selectedRowKeys},e=>{e&&(h.value=e)});const Y=(e,a,l)=>{var g,y,T;if(!n.rowSelection)return;let s;n.rowSelection.type==="radio"?s=l?[e]:[]:s=l?[...h.value,e]:h.value.filter(w=>w!==e),h.value=s;const c=((g=n.dataSource)==null?void 0:g.filter((w,K)=>s.includes(C(w,K))))??[];(T=(y=n.rowSelection).onChange)==null||T.call(y,s,c)},Z=e=>{var s,c;if(!n.rowSelection)return;const a=e?S.value.map((g,y)=>C(g,y)):[];h.value=a;const l=e?[...S.value]:[];(c=(s=n.rowSelection).onChange)==null||c.call(s,a,l)};return()=>{var y,T,w,K,D,O,V;const e=S.value.length===0,a=!!n.rowSelection,l=((y=n.rowSelection)==null?void 0:y.type)==="radio",s=S.value.length>0&&S.value.every((r,k)=>h.value.includes(C(r,k))),c=S.value.some((r,k)=>h.value.includes(C(r,k))),g=o("div",{class:p(d,`${d}-${n.size}`,{[`${d}-bordered`]:n.bordered,[`${d}-loading`]:n.loading,[`${d}-scroll-horizontal`]:!!((T=n.scroll)!=null&&T.x)})},[o("div",{class:`${d}-container`},[o("div",{class:`${d}-content`,style:(w=n.scroll)!=null&&w.x?{overflowX:"auto"}:{}},[o("table",{style:(K=n.scroll)!=null&&K.x?{minWidth:typeof n.scroll.x=="number"?`${n.scroll.x}px`:n.scroll.x}:{}},[n.showHeader&&o("thead",{class:`${d}-thead`},[o("tr",null,[a&&o("th",{class:`${d}-cell ${d}-selection-column`},[!l&&o("input",{type:"checkbox",checked:s,indeterminate:c&&!s,onChange:r=>Z(r.target.checked)},null)]),(D=n.columns)==null?void 0:D.map(r=>{const k=r.key??r.dataIndex??"",x=t.value.key===k;return o("th",{key:k,scope:"col","aria-sort":x?t.value.order==="ascend"?"ascending":"descending":r.sorter?"none":void 0,class:p(`${d}-cell`,{[`${d}-column-sort`]:x,[`${d}-column-has-sorters`]:!!r.sorter}),style:{width:r.width?typeof r.width=="number"?`${r.width}px`:r.width:void 0,textAlign:r.align??"left"},onClick:()=>Q(r)},[o("div",{class:`${d}-column-title`},[r.title,r.sorter&&o("span",{class:`${d}-column-sorter`},[o("span",{class:p(`${d}-column-sorter-up`,{active:x&&t.value.order==="ascend"})},[X("▲")]),o("span",{class:p(`${d}-column-sorter-down`,{active:x&&t.value.order==="descend"})},[X("▼")])])])])})])]),o("tbody",{class:`${d}-tbody`},[e?o("tr",{class:`${d}-placeholder`},[o("td",{colspan:(((O=n.columns)==null?void 0:O.length)??0)+(a?1:0)},[o(se,{description:((V=n.locale)==null?void 0:V.emptyText)??v.value.Table.emptyText},null)])]):S.value.map((r,k)=>{var H;const x=C(r,k),N=h.value.includes(x);return o("tr",{key:x,class:p(`${d}-row`,{[`${d}-row-selected`]:N})},[a&&o("td",{class:`${d}-cell ${d}-selection-column`},[o("input",{type:l?"radio":"checkbox",checked:N,onChange:b=>Y(x,r,b.target.checked)},null)]),(H=n.columns)==null?void 0:H.map(b=>{const ee=b.key??b.dataIndex??"",L=J(r,b),te=b.render?b.render(L,r,k):L;return o("td",{key:ee,class:p(`${d}-cell`,{[`${d}-cell-ellipsis`]:b.ellipsis}),style:{textAlign:b.align??"left"}},[te])})])})])])])]),f.value&&!e&&o("div",{class:`${d}-pagination ${d}-pagination-right`},[o(ce,{total:f.value.total,pageSize:f.value.pageSize,current:f.value.current,onChange:U},null)])]);return n.loading?o("div",{style:{position:"relative"}},[o(ie,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10}},null),o("div",{style:{opacity:.5}},[g])]):g}}}),ue=_({__name:"TableBasic",setup(n){const u=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],d=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(v,t)=>(z(),q(I(P),{"data-source":u,columns:d,"row-key":"key"}))}}),ye=`<template>
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
`,me=_({__name:"TableRowSelection",setup(n){const u=$([]),d={selectedRowKeys:u,onChange:m=>{u.value=m}},v=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"}],t=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(m,j)=>(z(),G(de,null,[o(I(P),{"data-source":v,columns:t,"row-key":"key","row-selection":d}),i("p",null,"已选择："+oe(u.value.join(", ")),1)],64))}}),ge=`<template>
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
`,fe=_({__name:"TableSorter",setup(n){const u=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园2号"},{key:"3",name:"李明",age:28,address:"朝阳区建国路88号"}],d=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age",sorter:(v,t)=>v.age-t.age},{title:"住址",dataIndex:"address",key:"address"}];return(v,t)=>(z(),q(I(P),{"data-source":u,columns:d,"row-key":"key"}))}}),ke=`<template>
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
`,be={class:"markdown-body"},Ce={__name:"table",setup(n,{expose:u}){return u({frontmatter:{}}),(v,t)=>{const m=le("DemoBlock");return z(),G("div",be,[t[0]||(t[0]=i("h1",{id:"table-",tabindex:"-1"},"Table 表格",-1)),t[1]||(t[1]=i("p",null,"展示行列数据。",-1)),t[2]||(t[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=i("ul",null,[i("li",null,"当有大量结构化的数据需要展现时"),i("li",null,"当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时")],-1)),t[4]||(t[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=i("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=i("p",null,"简单的表格，最后一列是各种操作。",-1)),o(m,{title:"基础用法",source:I(ye)},{default:E(()=>[o(ue)]),_:1},8,["source"]),t[7]||(t[7]=i("h3",{id:"-3",tabindex:"-1"},"排序",-1)),t[8]||(t[8]=i("p",null,"对某一列数据进行排序。",-1)),o(m,{title:"排序",source:I(ke)},{default:E(()=>[o(fe)]),_:1},8,["source"]),t[9]||(t[9]=i("h3",{id:"-4",tabindex:"-1"},"行选择",-1)),t[10]||(t[10]=i("p",null,"第一列是联动的选择框。",-1)),o(m,{title:"行选择",source:I(ge)},{default:E(()=>[o(me)]),_:1},8,["source"]),t[11]||(t[11]=re('<h2 id="api" tabindex="-1">API</h2><h3 id="table-props" tabindex="-1">Table Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>数据数组</td><td><code>any[]</code></td><td>-</td></tr><tr><td>columns</td><td>表格列的配置描述</td><td><code>TableColumn[]</code></td><td>-</td></tr><tr><td>rowKey</td><td>表格行 key 的取值</td><td><code>string | ((record: any) =&gt; string)</code></td><td><code>&#39;key&#39;</code></td></tr><tr><td>loading</td><td>页面是否加载中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>分页器，设为 false 时不展示</td><td><code>object | false</code></td><td>-</td></tr><tr><td>rowSelection</td><td>列表项是否可选择</td><td><code>object</code></td><td>-</td></tr><tr><td>size</td><td>表格大小</td><td><code>&#39;default&#39; | &#39;middle&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>bordered</td><td>是否展示外边框和列边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>scroll</td><td>表格是否可滚动</td><td><code>{ x?: number, y?: number }</code></td><td>-</td></tr></tbody></table><h3 id="tablecolumn" tabindex="-1">TableColumn</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>列的唯一标识</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>列头显示文字</td><td><code>string</code></td><td>-</td></tr><tr><td>dataIndex</td><td>列数据在数据项中对应的路径</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>列宽度</td><td><code>number | string</code></td><td>-</td></tr><tr><td>fixed</td><td>列是否固定</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr><tr><td>sorter</td><td>排序函数</td><td><code>boolean | ((a: any, b: any) =&gt; number)</code></td><td>-</td></tr><tr><td>filters</td><td>表头的筛选菜单项</td><td><code>{ text: string, value: any }[]</code></td><td>-</td></tr><tr><td>render</td><td>自定义渲染函数</td><td><code>(text: any, record: any) =&gt; any</code></td><td>-</td></tr><tr><td>align</td><td>设置列的对齐方式</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td></tr></tbody></table>',5))])}}};export{Ce as default};
