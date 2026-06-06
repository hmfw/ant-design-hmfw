import{R as X,C as Z}from"./Col-A1nEiXyU.js";import{o as G,z as J,m as y,L as E,B as T,O as B,l as d,d as A,F as D,p as K,y as L,g as w,I as p,n as s,E as H,i as Y,f as c,P as S,k as $,j as tt}from"./index-BQisgCTe.js";import{E as et}from"./Empty-Bd5f7qJn.js";import{P as nt}from"./Pagination-Bm6iHOjw.js";import{c as q}from"./cls-S9IiI6wd.js";import{S as it}from"./Spin-P_X1VNY7.js";import{A as F}from"./Avatar-CppZcZnN.js";import{C as at}from"./index-DGMvqqEv.js";import"./icons-Buy98oKP.js";import"./Icon-BfLh2ono.js";import"./Select-CCSRH7Fa.js";const Q=Symbol("ListContext");function dt(t){J(Q,t)}function rt(){return G(Q,{})}function ot(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!K(t)}const ct=y({name:"List",props:{dataSource:Array,renderItem:Function,header:[String,Object],footer:[String,Object],bordered:Boolean,size:{type:String,default:"default"},split:{type:Boolean,default:!0},loading:[Boolean,Object],locale:Object,pagination:[Boolean,Object],grid:Object,itemLayout:{type:String,default:"horizontal"},rowKey:[String,Function],loadMore:Object},setup(t,{slots:n}){const a=E("list"),i=A(()=>typeof t.pagination=="object"?t.pagination:{}),e=T(i.value.defaultCurrent||1),r=T(i.value.defaultPageSize||10);B(()=>i.value.current,o=>{o!==void 0&&(e.value=o)}),B(()=>i.value.pageSize,o=>{o!==void 0&&(r.value=o)});const m=A(()=>i.value.current??e.value),v=A(()=>i.value.pageSize??r.value),g=(o,b)=>{var u,f;e.value=o,r.value=b,(f=(u=i.value).onChange)==null||f.call(u,o,b)},h=A(()=>typeof t.loading=="boolean"?{spinning:t.loading}:t.loading||{}),k=A(()=>!!h.value.spinning);dt({grid:t.grid,itemLayout:t.itemLayout});const I=(o,b)=>typeof t.rowKey=="function"?t.rowKey(o):typeof t.rowKey=="string"?o[t.rowKey]:o&&typeof o=="object"&&"key"in o?o.key:`list-item-${b}`;return()=>{var V,M,O;const o=t.dataSource??[],b=o.length===0&&!n.default;let u=o;if(t.pagination&&o.length>0){const x=(m.value-1)*v.value,j=x+v.value;u=o.slice(x,j)}const f=(x,j)=>{if(!t.renderItem)return null;const W=I(x,j);return d(D,{key:W},[t.renderItem(x,j)])},C=u.map(f);let _=null;k.value&&u.length===0?_=d("div",{style:{minHeight:"53px"}},null):u.length>0?t.grid?_=d(X,{class:`${a}-container`,gutter:t.grid.gutter},ot(C)?C:{default:()=>[C]}):_=d("ul",{class:`${a}-items`},[C]):b&&(_=d("div",{class:`${a}-empty-text`},[((V=t.locale)==null?void 0:V.emptyText)||d(et,{description:"暂无数据"},null)]));const z=i.value.position||"bottom";i.value.align;const N=!!t.pagination&&o.length>0,P=N?d("div",{class:`${a}-pagination`},[d(nt,{current:m.value,pageSize:v.value,total:i.value.total??o.length,onChange:g},null)]):null,R=!!(t.loadMore||N||t.footer||n.footer);t.size==="small"||t.size;const U=q(a,{[`${a}-sm`]:t.size==="small",[`${a}-lg`]:t.size==="large",[`${a}-bordered`]:!!t.bordered,[`${a}-split`]:!!t.split,[`${a}-loading`]:!!k.value,[`${a}-grid`]:!!t.grid,[`${a}-vertical`]:t.itemLayout==="vertical",[`${a}-something-after-last-item`]:!!R});return d("div",{class:U},[(z==="top"||z==="both")&&P,(t.header||n.header)&&d("div",{class:`${a}-header`},[((M=n.header)==null?void 0:M.call(n))??t.header]),d(it,{spinning:k.value},{default:()=>{var x;return[_,(x=n.default)==null?void 0:x.call(n)]}}),(t.footer||n.footer)&&d("div",{class:`${a}-footer`},[((O=n.footer)==null?void 0:O.call(n))??t.footer]),t.loadMore||(z==="bottom"||z==="both")&&P])}}});function st(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!K(t)}const lt=y({name:"ListItem",props:{extra:Object,actions:Array},setup(t,{slots:n}){const a=E("list"),i=rt(),e=A(()=>{var g;if(i.itemLayout==="vertical")return!!t.extra||!!n.extra;const r=(g=n.default)==null?void 0:g.call(n);if(!r||r.length===0)return!0;const m=r.length>1;return!(r.some(h=>typeof h.children=="string"||typeof h.type=="symbol")&&m)});return()=>{var o,b;const r=((o=n.extra)==null?void 0:o.call(n))??t.extra,m=((b=n.actions)==null?void 0:b.call(n))??t.actions,g=m&&(Array.isArray(m)?m.length>0:!0)?d("ul",{class:`${a}-item-action`,key:"actions"},[(Array.isArray(m)?m:[m]).map((u,f,C)=>d("li",{key:`action-${f}`},[u,f!==C.length-1&&d("em",{class:`${a}-item-action-split`},null)]))]):null,h=i.grid?"div":"li",k=q(`${a}-item`,{[`${a}-item-no-flex`]:!e.value}),I=d(h,{class:k},{default:()=>{var u,f;return[i.itemLayout==="vertical"&&r?d(D,null,[d("div",{class:`${a}-item-main`,key:"content"},[(u=n.default)==null?void 0:u.call(n),g]),d("div",{class:`${a}-item-extra`,key:"extra"},[r])]):d(D,null,[(f=n.default)==null?void 0:f.call(n),g,r&&d("div",{class:`${a}-item-extra`},[r])])]}});if(i.grid){const u=24/(i.grid.column||1);return d(Z,{span:u,style:{marginBottom:`${i.grid.gutter||0}px`}},st(I)?I:{default:()=>[I]})}return I}}}),mt=y({name:"ListItemMeta",props:{avatar:Object,title:[String,Object],description:[String,Object]},setup(t,{slots:n}){const a=E("list");return()=>{var v,g,h;const i=((v=n.avatar)==null?void 0:v.call(n))??t.avatar,e=((g=n.title)==null?void 0:g.call(n))??t.title,r=((h=n.description)==null?void 0:h.call(n))??t.description,m=e||r?d("div",{class:`${a}-item-meta-content`},[e&&d("h4",{class:`${a}-item-meta-title`},[e]),r&&d("div",{class:`${a}-item-meta-description`},[r])]):null;return d("div",{class:`${a}-item-meta`},[i&&d("div",{class:`${a}-item-meta-avatar`},[i]),m])}}}),l=ct;l.Item=lt;l.Item.Meta=mt;const ut=y({__name:"ListActions",setup(t){const n=[{title:"列表项 1"},{title:"列表项 2"},{title:"列表项 3"}];function a(r){console.log("编辑",r)}function i(r){console.log("删除",r)}const e=r=>s(l.Item,{actions:[s("a",{onClick:()=>a(r)},"编辑"),s("a",{onClick:()=>i(r)},"删除")]},()=>r.title);return(r,m)=>(L(),w(p(l),{"data-source":n,"render-item":e,bordered:""}))}}),pt=`<template>
  <List :data-source="data" :render-item="renderItem" bordered />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List } from 'ant-design-hmfw'

const data = [
  { title: '列表项 1' },
  { title: '列表项 2' },
  { title: '列表项 3' },
]

function onEdit(item: any) {
  console.log('编辑', item)
}

function onDelete(item: any) {
  console.log('删除', item)
}

const renderItem = (item: any) =>
  h(
    List.Item,
    {
      actions: [
        h('a', { onClick: () => onEdit(item) }, '编辑'),
        h('a', { onClick: () => onDelete(item) }, '删除'),
      ],
    },
    () => item.title
  )
<\/script>
`,gt=y({__name:"ListAvatar",setup(t){const n=[{title:"用户名称 1",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"},{title:"用户名称 2",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"},{title:"用户名称 3",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=3"}],a=i=>s(l.Item,null,()=>s(l.Item.Meta,{avatar:s(F,{src:i.avatar}),title:i.title,description:i.description}));return(i,e)=>(L(),w(p(l),{"data-source":n,"render-item":a}))}}),ft=`<template>
  <List :data-source="data" :render-item="renderItem" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Avatar } from 'ant-design-hmfw'

const data = [
  {
    title: '用户名称 1',
    description: '这是一段描述信息',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
  },
  {
    title: '用户名称 2',
    description: '这是一段描述信息',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
  },
  {
    title: '用户名称 3',
    description: '这是一段描述信息',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
  },
]

const renderItem = (item: any) =>
  h(List.Item, null, () =>
    h(List.Item.Meta, {
      avatar: h(Avatar, { src: item.avatar }),
      title: item.title,
      description: item.description,
    })
  )
<\/script>
`,ht=y({__name:"ListBasic",setup(t){const n=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl."],a=i=>s(l.Item,null,()=>i);return(i,e)=>(L(),w(p(l),{"data-source":n,"render-item":a,bordered:""}))}}),bt=`<template>
  <List
    :data-source="data"
    :render-item="renderItem"
    bordered
  />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List } from 'ant-design-hmfw'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
]

const renderItem = (item: string) => h(List.Item, null, () => item)
<\/script>
`,yt=y({__name:"ListGrid",setup(t){const n=["Content 1","Content 2","Content 3","Content 4","Content 5","Content 6","Content 7","Content 8"],a=i=>s(l.Item,null,()=>s(at,{title:i},()=>`Card content for ${i}`));return(i,e)=>(L(),w(p(l),{"data-source":n,"render-item":a,grid:{gutter:16,column:4}}))}}),vt=`<template>
  <List
    :data-source="data"
    :render-item="renderItem"
    :grid="{ gutter: 16, column: 4 }"
  />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Card } from 'ant-design-hmfw'

const data = [
  'Content 1',
  'Content 2',
  'Content 3',
  'Content 4',
  'Content 5',
  'Content 6',
  'Content 7',
  'Content 8',
]

const renderItem = (item: string) =>
  h(List.Item, null, () => h(Card, { title: item }, () => \`Card content for \${item}\`))
<\/script>
`,xt=y({__name:"ListPagination",setup(t){const n=Array.from({length:10},(i,e)=>`Item ${e+1}`),a=i=>s(l.Item,null,()=>i);return(i,e)=>(L(),w(p(l),{"data-source":p(n),"render-item":a,pagination:{pageSize:3},bordered:""},null,8,["data-source"]))}}),Lt=`<template>
  <List
    :data-source="data"
    :render-item="renderItem"
    :pagination="{ pageSize: 3 }"
    bordered
  />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List } from 'ant-design-hmfw'

const data = Array.from({ length: 10 }, (_, i) => \`Item \${i + 1}\`)

const renderItem = (item: string) => h(List.Item, null, () => item)
<\/script>
`,It=y({__name:"ListVertical",setup(t){const n=[{title:"Ant Design Title 1",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=1",extra:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"},{title:"Ant Design Title 2",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=2",extra:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}],a=i=>s(l.Item,{extra:s("img",{src:i.extra,style:{width:"272px"}}),actions:[s("span","👁 156"),s("span","💬 2"),s("span","⭐ 156")]},()=>[s(l.Item.Meta,{avatar:s(F,{src:i.avatar}),title:s("a",{href:"#"},i.title),description:i.description}),i.content]);return(i,e)=>(L(),w(p(l),{"data-source":n,"render-item":a,"item-layout":"vertical"}))}}),Ct=`<template>
  <List
    :data-source="data"
    :render-item="renderItem"
    item-layout="vertical"
  />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Avatar } from 'ant-design-hmfw'

const data = [
  {
    title: 'Ant Design Title 1',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
    extra: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  },
  {
    title: 'Ant Design Title 2',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
    extra: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  },
]

const renderItem = (item: any) =>
  h(
    List.Item,
    {
      extra: h('img', { src: item.extra, style: { width: '272px' } }),
      actions: [
        h('span', '👁 156'),
        h('span', '💬 2'),
        h('span', '⭐ 156'),
      ],
    },
    () => [
      h(List.Item.Meta, {
        avatar: h(Avatar, { src: item.avatar }),
        title: h('a', { href: '#' }, item.title),
        description: item.description,
      }),
      item.content,
    ]
  )
<\/script>
`,St={class:"markdown-body"},Vt={__name:"list",setup(t,{expose:n}){return n({frontmatter:{}}),(i,e)=>{const r=H("DemoBlock");return L(),Y("div",St,[e[0]||(e[0]=c("h1",{id:"list-",tabindex:"-1"},"List 列表",-1)),e[1]||(e[1]=c("p",null,"通用列表。",-1)),e[2]||(e[2]=c("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=c("ul",null,[c("li",null,"最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面")],-1)),e[4]||(e[4]=c("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=c("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=c("p",null,"基础列表。",-1)),d(r,{title:"基础用法",source:p(bt)},{default:S(()=>[d(ht)]),_:1},8,["source"]),e[7]||(e[7]=c("h3",{id:"-3",tabindex:"-1"},"带操作",-1)),e[8]||(e[8]=c("p",null,"可以配置额外操作。",-1)),d(r,{title:"带操作",source:p(pt)},{default:S(()=>[d(ut)]),_:1},8,["source"]),e[9]||(e[9]=c("h3",{id:"-4",tabindex:"-1"},"带头像",-1)),e[10]||(e[10]=c("p",null,"带头像的列表。",-1)),d(r,{title:"带头像",source:p(ft)},{default:S(()=>[d(gt)]),_:1},8,["source"]),e[11]||(e[11]=c("h3",{id:"-5",tabindex:"-1"},"栅格列表",-1)),e[12]||(e[12]=c("p",null,[$("通过设置 "),c("code",null,"grid"),$(" 属性来实现栅格列表。")],-1)),d(r,{title:"栅格列表",source:p(vt)},{default:S(()=>[d(yt)]),_:1},8,["source"]),e[13]||(e[13]=c("h3",{id:"-6",tabindex:"-1"},"翻页",-1)),e[14]||(e[14]=c("p",null,[$("通过设置 "),c("code",null,"pagination"),$(" 属性来实现翻页。")],-1)),d(r,{title:"翻页",source:p(Lt)},{default:S(()=>[d(xt)]),_:1},8,["source"]),e[15]||(e[15]=c("h3",{id:"-7",tabindex:"-1"},"竖排列表",-1)),e[16]||(e[16]=c("p",null,[$("通过设置 "),c("code",null,'itemLayout="vertical"'),$(" 来实现竖排列表。")],-1)),d(r,{title:"竖排列表",source:p(Ct)},{default:S(()=>[d(It)]),_:1},8,["source"]),e[17]||(e[17]=tt('<h2 id="api" tabindex="-1">API</h2><h3 id="list-props" tabindex="-1">List Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>列表数据源</td><td><code>any[]</code></td><td>-</td></tr><tr><td>renderItem</td><td>自定义渲染列表项</td><td><code>(item: T, index: number) =&gt; VNode</code></td><td>-</td></tr><tr><td>bordered</td><td>是否展示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>列表大小</td><td><code>&#39;default&#39; | &#39;small&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>split</td><td>是否展示分割线</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td><td><code>boolean | { spinning?: boolean }</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>对应的 pagination 配置，设置 false 不显示</td><td><code>boolean | PaginationConfig</code></td><td><code>false</code></td></tr><tr><td>grid</td><td>列表栅格配置</td><td><code>{ column?: number; gutter?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }</code></td><td>-</td></tr><tr><td>itemLayout</td><td>设置 List.Item 布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>rowKey</td><td>各项 key 的取值，可以是字符串或一个函数</td><td><code>string | ((item: T) =&gt; string | number)</code></td><td><code>&#39;key&#39;</code></td></tr><tr><td>header</td><td>列表头部</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>footer</td><td>列表底部</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>locale</td><td>默认文案设置，目前包括空数据文案</td><td><code>{ emptyText?: string | VNode }</code></td><td>-</td></tr><tr><td>loadMore</td><td>加载更多</td><td><code>VNode</code></td><td>-</td></tr></tbody></table><h3 id="paginationconfig" tabindex="-1">PaginationConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数</td><td><code>number</code></td><td>-</td></tr><tr><td>pageSize</td><td>每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultCurrent</td><td>默认的当前页数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>defaultPageSize</td><td>默认的每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>position</td><td>指定分页显示的位置</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;both&#39;</code></td><td><code>&#39;bottom&#39;</code></td></tr><tr><td>align</td><td>指定分页对齐方式</td><td><code>&#39;start&#39; | &#39;center&#39; | &#39;end&#39;</code></td><td><code>&#39;end&#39;</code></td></tr><tr><td>onChange</td><td>页码改变的回调</td><td><code>(page: number, pageSize: number) =&gt; void</code></td><td>-</td></tr><tr><td>onShowSizeChange</td><td>pageSize 变化的回调</td><td><code>(current: number, size: number) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="listitem-props" tabindex="-1">List.Item Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>actions</td><td>列表操作组，根据 itemLayout 的不同，位置在卡片底部或者最右侧</td><td><code>VNode[]</code></td><td>-</td></tr><tr><td>extra</td><td>额外内容，通常用在 itemLayout 为 vertical 的情况下，展示右侧内容</td><td><code>VNode</code></td><td>-</td></tr></tbody></table><h3 id="listitemmeta-props" tabindex="-1">List.Item.Meta Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>avatar</td><td>列表元素的图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>title</td><td>列表元素的标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>description</td><td>列表元素的描述内容</td><td><code>string | VNode</code></td><td>-</td></tr></tbody></table>',9))])}}};export{Vt as default};
