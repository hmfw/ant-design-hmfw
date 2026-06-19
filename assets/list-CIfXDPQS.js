import{R as F,C as it}from"./Col-CPwe0IpY.js";import{q as rt,B as at,o as I,N as K,E as N,Q as G,n as r,f as w,F as O,r as Z,s as dt,A as L,i as j,K as s,p,k as T,h as o,R as v,j as Q,J as W,m as h,_ as ot,H as st,l as lt}from"./index-BIs5wmTl.js";import{V as ct}from"./VirtualList-Dnaaby1I.js";import{E as mt}from"./Empty-DPv5T5ao.js";import{P as ut}from"./Pagination-CWmZTgFo.js";import{c as J}from"./cls-S9IiI6wd.js";import{S as Y}from"./Spin-CIILLB6y.js";import{A as tt}from"./Avatar-CSGRBCjk.js";import{C as et}from"./index-D-3gXhBN.js";import"./Icon-Bx-OH41K.js";import"./LeftOutlined-D8Aj_7HY.js";import"./RightOutlined-caiGX-HQ.js";import"./Select-DQTDmZsD.js";const nt=Symbol("ListContext");function pt(e){at(nt,e)}function gt(){return rt(nt,{})}function X(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Z(e)}const ht=I({name:"List",props:{dataSource:Array,renderItem:Function,header:[String,Object],footer:[String,Object],bordered:Boolean,size:{type:String,default:"default"},split:{type:Boolean,default:!0},loading:[Boolean,Object],locale:Object,pagination:[Boolean,Object],grid:Object,itemLayout:{type:String,default:"horizontal"},rowKey:[String,Function],loadMore:Object,virtual:Boolean,height:[Number,String],itemHeight:{type:Number,default:48}},setup(e,{slots:n}){const a=K("list"),i=w(()=>typeof e.pagination=="object"?e.pagination:{}),t=N(i.value.defaultCurrent||1),d=N(i.value.defaultPageSize||10);G(()=>i.value.current,l=>{l!==void 0&&(t.value=l)}),G(()=>i.value.pageSize,l=>{l!==void 0&&(d.value=l)});const m=w(()=>i.value.current??t.value),_=w(()=>i.value.pageSize??d.value),g=(l,D)=>{var f,b;t.value=l,d.value=D,(b=(f=i.value).onChange)==null||b.call(f,l,D)},c=w(()=>typeof e.loading=="boolean"?{spinning:e.loading}:e.loading||{}),$=w(()=>!!c.value.spinning);pt({grid:e.grid,itemLayout:e.itemLayout});const A=(l,D)=>typeof e.rowKey=="function"?e.rowKey(l):typeof e.rowKey=="string"?l[e.rowKey]:l&&typeof l=="object"&&"key"in l?l.key:`list-item-${D}`;return()=>{var q,R,U;const l=e.dataSource??[],D=l.length===0&&!n.default;let f=l;if(e.pagination&&l.length>0){const x=(m.value-1)*_.value,k=x+_.value;f=l.slice(x,k)}const b=(x,k)=>{if(!e.renderItem)return null;const V=A(x,k);return r(O,{key:V},[e.renderItem(x,k)])},y=f.map(b);let C=null;$.value&&f.length===0?C=r("div",{style:{minHeight:"53px"}},null):f.length>0?e.virtual&&e.height?e.grid?C=r(F,{class:`${a}-container`,gutter:e.grid.gutter},X(y)?y:{default:()=>[y]}):C=r(ct,{data:f,height:e.height,itemHeight:e.itemHeight,renderItem:(x,k)=>{var V;return((V=e.renderItem)==null?void 0:V.call(e,x,k))||null},itemKey:(x,k)=>A(x,k)},null):e.grid?C=r(F,{class:`${a}-container`,gutter:e.grid.gutter},X(y)?y:{default:()=>[y]}):C=r("ul",{class:`${a}-items`},[y]):D&&(C=r("div",{class:`${a}-empty-text`},[((q=e.locale)==null?void 0:q.emptyText)||r(mt,{description:"暂无数据"},null)]));const M=i.value.position||"bottom",z=!!e.pagination&&l.length>0,E=z?r("div",{class:`${a}-pagination`},[r(ut,{current:m.value,pageSize:_.value,total:i.value.total??l.length,onChange:g},null)]):null,H=!!(e.loadMore||z||e.footer||n.footer),S=J(a,{[`${a}-sm`]:e.size==="small",[`${a}-lg`]:e.size==="large",[`${a}-bordered`]:!!e.bordered,[`${a}-split`]:!!e.split,[`${a}-loading`]:!!$.value,[`${a}-grid`]:!!e.grid,[`${a}-vertical`]:e.itemLayout==="vertical",[`${a}-something-after-last-item`]:!!H});return r("div",{class:S},[(M==="top"||M==="both")&&E,(e.header||n.header)&&r("div",{class:`${a}-header`},[((R=n.header)==null?void 0:R.call(n))??e.header]),r(Y,{spinning:$.value},{default:()=>{var x;return[C,(x=n.default)==null?void 0:x.call(n)]}}),(e.footer||n.footer)&&r("div",{class:`${a}-footer`},[((U=n.footer)==null?void 0:U.call(n))??e.footer]),e.loadMore||(M==="bottom"||M==="both")&&E])}}});function ft(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Z(e)}const P=I({name:"ListItem",props:{extra:Object,actions:Array},setup(e,{slots:n}){const a=K("list"),i=gt(),t=w(()=>{var g;if(i.itemLayout==="vertical")return!!e.extra||!!n.extra;const d=(g=n.default)==null?void 0:g.call(n);if(!d||d.length===0)return!0;const m=d.length>1;return!(d.some(c=>typeof c.children=="string"||typeof c.type=="symbol")&&m)});return()=>{var l,D;const d=((l=n.extra)==null?void 0:l.call(n))??e.extra,m=((D=n.actions)==null?void 0:D.call(n))??e.actions,g=m&&(Array.isArray(m)?m.length>0:!0)?r("ul",{class:`${a}-item-action`,key:"actions"},[(Array.isArray(m)?m:[m]).map((f,b,y)=>r("li",{key:`action-${b}`},[f,b!==y.length-1&&r("em",{class:`${a}-item-action-split`},null)]))]):null,c=i.grid?"div":"li",$=J(`${a}-item`,{[`${a}-item-no-flex`]:!t.value}),A=r(c,{class:$},{default:()=>{var f,b;return[i.itemLayout==="vertical"&&d?r(O,null,[r("div",{class:`${a}-item-main`,key:"content"},[(f=n.default)==null?void 0:f.call(n),g]),r("div",{class:`${a}-item-extra`,key:"extra"},[d])]):r(O,null,[(b=n.default)==null?void 0:b.call(n),g,d&&r("div",{class:`${a}-item-extra`},[d])])]}});if(i.grid){const{column:f,xs:b,sm:y,md:C,lg:M,xl:z,xxl:E,gutter:H}=i.grid,S={};return f&&(S.span=24/f),b&&(S.xs=24/b),y&&(S.sm=24/y),C&&(S.md=24/C),M&&(S.lg=24/M),z&&(S.xl=24/z),E&&(S.xxl=24/E),r(it,dt(S,{style:{marginBottom:`${H||0}px`}}),ft(A)?A:{default:()=>[A]})}return A}}}),B=I({name:"ListItemMeta",props:{avatar:Object,title:[String,Object],description:[String,Object]},setup(e,{slots:n}){const a=K("list");return()=>{var _,g,c;const i=((_=n.avatar)==null?void 0:_.call(n))??e.avatar,t=((g=n.title)==null?void 0:g.call(n))??e.title,d=((c=n.description)==null?void 0:c.call(n))??e.description,m=t||d?r("div",{class:`${a}-item-meta-content`},[t&&r("h4",{class:`${a}-item-meta-title`},[t]),d&&r("div",{class:`${a}-item-meta-description`},[d])]):null;return r("div",{class:`${a}-item-meta`},[i&&r("div",{class:`${a}-item-meta-avatar`},[i]),m])}}}),u=ht;u.Item=P;u.Item.Meta=B;const vt=I({__name:"ListActions",setup(e){const n=[{title:"列表项 1"},{title:"列表项 2"},{title:"列表项 3"}];function a(d){console.log("编辑",d)}function i(d){console.log("删除",d)}const t=d=>p(u.Item,{actions:[p("a",{onClick:()=>a(d)},"编辑"),p("a",{onClick:()=>i(d)},"删除")]},()=>d.title);return(d,m)=>(L(),j(s(u),{"data-source":n,"render-item":t,bordered:""}))}}),bt=`<template>
  <List :data-source="data" :render-item="renderItem" bordered />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List } from 'ant-design-hmfw'

const data = [{ title: '列表项 1' }, { title: '列表项 2' }, { title: '列表项 3' }]

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
      actions: [h('a', { onClick: () => onEdit(item) }, '编辑'), h('a', { onClick: () => onDelete(item) }, '删除')],
    },
    () => item.title,
  )
<\/script>
`,yt=I({__name:"ListAvatar",setup(e){const n=[{title:"用户名称 1",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"},{title:"用户名称 2",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"},{title:"用户名称 3",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=3"}],a=i=>p(u.Item,null,()=>p(u.Item.Meta,{avatar:p(tt,{src:i.avatar}),title:i.title,description:i.description}));return(i,t)=>(L(),j(s(u),{"data-source":n,"render-item":a}))}}),xt=`<template>
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
    }),
  )
<\/script>
`,Lt=I({__name:"ListBasic",setup(e){const n=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl."],a=i=>p(u.Item,null,()=>i);return(i,t)=>(L(),j(s(u),{"data-source":n,"render-item":a,bordered:""}))}}),It=`<template>
  <List :data-source="data" :render-item="renderItem" bordered />
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
`,$t=I({__name:"ListGrid",setup(e){const n=["Content 1","Content 2","Content 3","Content 4","Content 5","Content 6","Content 7","Content 8"],a=i=>p(u.Item,null,()=>p(et,{title:i},()=>`Card content for ${i}`));return(i,t)=>(L(),j(s(u),{"data-source":n,"render-item":a,grid:{gutter:16,column:4}}))}}),_t=`<template>
  <List :data-source="data" :render-item="renderItem" :grid="{ gutter: 16, column: 4 }" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Card } from 'ant-design-hmfw'

const data = ['Content 1', 'Content 2', 'Content 3', 'Content 4', 'Content 5', 'Content 6', 'Content 7', 'Content 8']

const renderItem = (item: string) =>
  h(List.Item, null, () => h(Card, { title: item }, () => \`Card content for \${item}\`))
<\/script>
`,Ct={key:0,style:{"text-align":"center",padding:"12px"}},St={key:1,style:{"text-align":"center",padding:"12px",color:"#999"}},At={style:{"margin-top":"16px",color:"#666"}},Dt=I({__name:"ListInfiniteScroll",setup(e){const n=Array.from({length:1e3},(g,c)=>({id:`item-${c}`,name:`Item ${c+1}`,description:`Description for item ${c+1} - Lorem ipsum dolor sit amet`})),a=N(n.slice(0,20)),i=N(!1),t=N(),d=w(()=>a.value.length>=n.length),m=()=>{i.value||d.value||(i.value=!0,setTimeout(()=>{const g=a.value.length,c=n.slice(g,g+20);a.value=[...a.value,...c],i.value=!1},1e3))},_=g=>{const c=g.target,$=c.scrollTop,A=c.scrollHeight,l=c.clientHeight;A-$-l<100&&m()};return(g,c)=>(L(),T("div",null,[c[0]||(c[0]=o("h3",null,"无限滚动示例",-1)),o("div",{ref_key:"scrollContainer",ref:t,style:{height:"400px",overflow:"auto",border:"1px solid #d9d9d9","border-radius":"4px"},onScroll:_},[r(s(u),{"data-source":a.value,loading:i.value},{renderItem:v(({item:$})=>[r(s(P),null,{default:v(()=>[r(s(B),{avatar:`https://api.dicebear.com/7.x/miniavs/svg?seed=${$.id}`,title:`${$.name}`,description:`${$.description}`},null,8,["avatar","title","description"])]),_:2},1024)]),_:1},8,["data-source","loading"]),i.value?(L(),T("div",Ct,[r(s(Y))])):Q("",!0),d.value?(L(),T("div",St,"已加载全部数据")):Q("",!0)],544),o("div",At,"已加载: "+W(a.value.length)+" / "+W(s(n).length)+" 项",1)]))}}),wt=`<template>
  <div>
    <h3>无限滚动示例</h3>
    <div
      ref="scrollContainer"
      style="height: 400px; overflow: auto; border: 1px solid #d9d9d9; border-radius: 4px"
      @scroll="handleScroll"
    >
      <List :data-source="displayData" :loading="loading">
        <template #renderItem="{ item }">
          <ListItem>
            <ListItemMeta
              :avatar="\`https://api.dicebear.com/7.x/miniavs/svg?seed=\${item.id}\`"
              :title="\`\${item.name}\`"
              :description="\`\${item.description}\`"
            />
          </ListItem>
        </template>
      </List>
      <div v-if="loading" style="text-align: center; padding: 12px">
        <Spin />
      </div>
      <div v-if="noMore" style="text-align: center; padding: 12px; color: #999">已加载全部数据</div>
    </div>
    <div style="margin-top: 16px; color: #666">已加载: {{ displayData.length }} / {{ totalData.length }} 项</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { List, ListItem, ListItemMeta, Spin } from 'ant-design-hmfw'

// 模拟总数据（1000 项）
const totalData = Array.from({ length: 1000 }, (_, i) => ({
  id: \`item-\${i}\`,
  name: \`Item \${i + 1}\`,
  description: \`Description for item \${i + 1} - Lorem ipsum dolor sit amet\`,
}))

// 当前显示的数据
const displayData = ref(totalData.slice(0, 20))
const loading = ref(false)
const scrollContainer = ref<HTMLElement>()

const noMore = computed(() => displayData.value.length >= totalData.length)

// 模拟异步加载更多数据
const loadMore = () => {
  if (loading.value || noMore.value) return

  loading.value = true

  setTimeout(() => {
    const currentLength = displayData.value.length
    const nextBatch = totalData.slice(currentLength, currentLength + 20)
    displayData.value = [...displayData.value, ...nextBatch]
    loading.value = false
  }, 1000)
}

// 滚动事件处理
const handleScroll = (e: Event) => {
  const target = e.target as HTMLElement
  const scrollTop = target.scrollTop
  const scrollHeight = target.scrollHeight
  const clientHeight = target.clientHeight

  // 当滚动到距离底部 100px 时触发加载
  if (scrollHeight - scrollTop - clientHeight < 100) {
    loadMore()
  }
}
<\/script>
`,kt=I({__name:"ListPagination",setup(e){const n=Array.from({length:10},(i,t)=>`Item ${t+1}`),a=i=>p(u.Item,null,()=>i);return(i,t)=>(L(),j(s(u),{"data-source":s(n),"render-item":a,pagination:{pageSize:3},bordered:""},null,8,["data-source"]))}}),Mt=`<template>
  <List :data-source="data" :render-item="renderItem" :pagination="{ pageSize: 3 }" bordered />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List } from 'ant-design-hmfw'

const data = Array.from({ length: 10 }, (_, i) => \`Item \${i + 1}\`)

const renderItem = (item: string) => h(List.Item, null, () => item)
<\/script>
`,Tt={class:"list-responsive-grid-demo"},jt=I({__name:"ListResponsiveGrid",setup(e){const n=Array.from({length:12},(i,t)=>({id:t+1,title:`项目 ${t+1}`,content:`这是第 ${t+1} 个项目的内容`})),a=i=>p(u.Item,null,()=>p(et,{title:i.title,hoverable:!0},()=>i.content));return(i,t)=>(L(),T("div",Tt,[t[0]||(t[0]=o("h4",null,"响应式网格布局",-1)),t[1]||(t[1]=o("p",{style:{"margin-bottom":"16px",color:"#666"}},[h(" 调整浏览器窗口大小查看响应式效果： "),o("br"),h(" • 超小屏 (xs < 576px): 1 列 "),o("br"),h(" • 小屏 (sm ≥ 576px): 2 列 "),o("br"),h(" • 中屏 (md ≥ 768px): 3 列 "),o("br"),h(" • 大屏 (lg ≥ 992px): 4 列 "),o("br"),h(" • 超大屏 (xl ≥ 1200px): 6 列 ")],-1)),r(s(u),{"data-source":s(n),"render-item":a,grid:{gutter:16,xs:1,sm:2,md:3,lg:4,xl:6}},null,8,["data-source"])]))}}),zt=ot(jt,[["__scopeId","data-v-51c1bcca"]]),Et=`<template>
  <div class="list-responsive-grid-demo">
    <h4>响应式网格布局</h4>
    <p style="margin-bottom: 16px; color: #666">
      调整浏览器窗口大小查看响应式效果：
      <br />
      • 超小屏 (xs &lt; 576px): 1 列
      <br />
      • 小屏 (sm ≥ 576px): 2 列
      <br />
      • 中屏 (md ≥ 768px): 3 列
      <br />
      • 大屏 (lg ≥ 992px): 4 列
      <br />
      • 超大屏 (xl ≥ 1200px): 6 列
    </p>

    <List :data-source="data" :render-item="renderItem" :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Card } from 'ant-design-hmfw'

const data = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: \`项目 \${i + 1}\`,
  content: \`这是第 \${i + 1} 个项目的内容\`,
}))

const renderItem = (item: { id: number; title: string; content: string }) =>
  h(List.Item, null, () => h(Card, { title: item.title, hoverable: true }, () => item.content))
<\/script>

<style scoped>
.list-responsive-grid-demo h4 {
  margin-bottom: 8px;
  color: #262626;
}
</style>
`,Nt=I({__name:"ListVertical",setup(e){const n=[{title:"Ant Design Title 1",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=1",extra:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"},{title:"Ant Design Title 2",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=2",extra:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}],a=i=>p(u.Item,{extra:p("img",{src:i.extra,style:{width:"272px"}}),actions:[p("span","👁 156"),p("span","💬 2"),p("span","⭐ 156")]},()=>[p(u.Item.Meta,{avatar:p(tt,{src:i.avatar}),title:p("a",{href:"#"},i.title),description:i.description}),i.content]);return(i,t)=>(L(),j(s(u),{"data-source":n,"render-item":a,"item-layout":"vertical"}))}}),Vt=`<template>
  <List :data-source="data" :render-item="renderItem" item-layout="vertical" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Avatar } from 'ant-design-hmfw'

const data = [
  {
    title: 'Ant Design Title 1',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
    extra: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
  },
  {
    title: 'Ant Design Title 2',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
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
      actions: [h('span', '👁 156'), h('span', '💬 2'), h('span', '⭐ 156')],
    },
    () => [
      h(List.Item.Meta, {
        avatar: h(Avatar, { src: item.avatar }),
        title: h('a', { href: '#' }, item.title),
        description: item.description,
      }),
      item.content,
    ],
  )
<\/script>
`,Pt=I({__name:"ListVirtual",setup(e){const n=w(()=>Array.from({length:1e4},(i,t)=>({id:`item-${t}`,title:`Item ${t+1}`}))),a=w(()=>Array.from({length:5e4},(i,t)=>({id:`user-${t}`,name:`User ${t+1}`,email:`user${t+1}@example.com`,createdAt:new Date(2020,0,1+t%365).toLocaleDateString()})));return(i,t)=>(L(),T("div",null,[t[0]||(t[0]=o("h3",null,"基础虚拟滚动（10,000 项）",-1)),r(s(u),{"data-source":n.value,virtual:"",height:400,"item-height":48},{renderItem:v(({item:d,index:m})=>[r(s(P),null,{default:v(()=>[r(s(B),{title:`Item ${m+1}`,description:`This is item ${m+1} with ID: ${d.id}`},null,8,["title","description"])]),_:2},1024)]),_:1},8,["data-source"]),t[1]||(t[1]=o("h3",{style:{"margin-top":"24px"}},"带头像的虚拟滚动（50,000 项）",-1)),r(s(u),{"data-source":a.value,virtual:"",height:400,"item-height":73},{renderItem:v(({item:d,index:m})=>[r(s(P),null,{default:v(()=>[r(s(B),{avatar:`https://api.dicebear.com/7.x/miniavs/svg?seed=${d.id}`,title:`User ${m+1}: ${d.name}`,description:`Email: ${d.email} | Created: ${d.createdAt}`},null,8,["avatar","title","description"])]),_:2},1024)]),_:1},8,["data-source"])]))}}),Bt=`<template>
  <div>
    <h3>基础虚拟滚动（10,000 项）</h3>
    <List :data-source="data" virtual :height="400" :item-height="48">
      <template #renderItem="{ item, index }">
        <ListItem>
          <ListItemMeta :title="\`Item \${index + 1}\`" :description="\`This is item \${index + 1} with ID: \${item.id}\`" />
        </ListItem>
      </template>
    </List>

    <h3 style="margin-top: 24px">带头像的虚拟滚动（50,000 项）</h3>
    <List :data-source="largeData" virtual :height="400" :item-height="73">
      <template #renderItem="{ item, index }">
        <ListItem>
          <ListItemMeta
            :avatar="\`https://api.dicebear.com/7.x/miniavs/svg?seed=\${item.id}\`"
            :title="\`User \${index + 1}: \${item.name}\`"
            :description="\`Email: \${item.email} | Created: \${item.createdAt}\`"
          />
        </ListItem>
      </template>
    </List>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { List, ListItem, ListItemMeta } from 'ant-design-hmfw'

// 生成 10,000 项数据
const data = computed(() => {
  return Array.from({ length: 10000 }, (_, i) => ({
    id: \`item-\${i}\`,
    title: \`Item \${i + 1}\`,
  }))
})

// 生成 50,000 项数据
const largeData = computed(() => {
  return Array.from({ length: 50000 }, (_, i) => ({
    id: \`user-\${i}\`,
    name: \`User \${i + 1}\`,
    email: \`user\${i + 1}@example.com\`,
    createdAt: new Date(2020, 0, 1 + (i % 365)).toLocaleDateString(),
  }))
})
<\/script>
`,Ht={class:"markdown-body"},te={__name:"list",setup(e,{expose:n}){return n({frontmatter:{}}),(i,t)=>{const d=st("DemoBlock");return L(),T("div",Ht,[t[0]||(t[0]=o("h1",{id:"list-列表",tabindex:"-1"},"List 列表",-1)),t[1]||(t[1]=o("p",null,"通用列表。",-1)),t[2]||(t[2]=o("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=o("ul",null,[o("li",null,"最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面")],-1)),t[4]||(t[4]=o("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=o("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=o("p",null,"基础列表。",-1)),r(d,{title:"基础用法",source:s(It)},{default:v(()=>[r(Lt)]),_:1},8,["source"]),t[7]||(t[7]=o("h3",{id:"带操作",tabindex:"-1"},"带操作",-1)),t[8]||(t[8]=o("p",null,"可以配置额外操作。",-1)),r(d,{title:"带操作",source:s(bt)},{default:v(()=>[r(vt)]),_:1},8,["source"]),t[9]||(t[9]=o("h3",{id:"带头像",tabindex:"-1"},"带头像",-1)),t[10]||(t[10]=o("p",null,"带头像的列表。",-1)),r(d,{title:"带头像",source:s(xt)},{default:v(()=>[r(yt)]),_:1},8,["source"]),t[11]||(t[11]=o("h3",{id:"栅格列表",tabindex:"-1"},"栅格列表",-1)),t[12]||(t[12]=o("p",null,[h("通过设置 "),o("code",null,"grid"),h(" 属性来实现栅格列表。")],-1)),r(d,{title:"栅格列表",source:s(_t)},{default:v(()=>[r($t)]),_:1},8,["source"]),t[13]||(t[13]=o("h3",{id:"响应式网格",tabindex:"-1"},"响应式网格",-1)),t[14]||(t[14]=o("p",null,[h("通过 "),o("code",null,"grid"),h(" 的响应式属性（xs/sm/md/lg/xl）实现不同屏幕尺寸下的自适应布局。")],-1)),r(d,{title:"响应式网格",source:s(Et)},{default:v(()=>[r(zt)]),_:1},8,["source"]),t[15]||(t[15]=o("h3",{id:"翻页",tabindex:"-1"},"翻页",-1)),t[16]||(t[16]=o("p",null,[h("通过设置 "),o("code",null,"pagination"),h(" 属性来实现翻页。")],-1)),r(d,{title:"翻页",source:s(Mt)},{default:v(()=>[r(kt)]),_:1},8,["source"]),t[17]||(t[17]=o("h3",{id:"竖排列表",tabindex:"-1"},"竖排列表",-1)),t[18]||(t[18]=o("p",null,[h("通过设置 "),o("code",null,'itemLayout="vertical"'),h(" 来实现竖排列表。")],-1)),r(d,{title:"竖排列表",source:s(Vt)},{default:v(()=>[r(Nt)]),_:1},8,["source"]),t[19]||(t[19]=o("h3",{id:"虚拟滚动",tabindex:"-1"},"虚拟滚动",-1)),t[20]||(t[20]=o("p",null,[h("使用虚拟滚动支持大数据场景，通过 "),o("code",null,"virtual"),h(" 和 "),o("code",null,"height"),h(" 属性开启。")],-1)),r(d,{title:"虚拟滚动",source:s(Bt)},{default:v(()=>[r(Pt)]),_:1},8,["source"]),t[21]||(t[21]=o("h3",{id:"无限滚动",tabindex:"-1"},"无限滚动",-1)),t[22]||(t[22]=o("p",null,"通过监听滚动事件实现无限滚动加载更多数据。",-1)),r(d,{title:"无限滚动",source:s(wt)},{default:v(()=>[r(Dt)]),_:1},8,["source"]),t[23]||(t[23]=lt('<h2 id="api" tabindex="-1">API</h2><h3 id="list-props" tabindex="-1">List Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>列表数据源</td><td><code>any[]</code></td><td>-</td></tr><tr><td>renderItem</td><td>自定义渲染列表项</td><td><code>(item: T, index: number) =&gt; VNode</code></td><td>-</td></tr><tr><td>bordered</td><td>是否展示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>列表大小</td><td><code>&#39;default&#39; | &#39;small&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>split</td><td>是否展示分割线</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td><td><code>boolean | { spinning?: boolean }</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>对应的 pagination 配置，设置 false 不显示</td><td><code>boolean | PaginationConfig</code></td><td><code>false</code></td></tr><tr><td>grid</td><td>列表栅格配置</td><td><code>{ column?: number; gutter?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }</code></td><td>-</td></tr><tr><td>itemLayout</td><td>设置 List.Item 布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>rowKey</td><td>各项 key 的取值，可以是字符串或一个函数</td><td><code>string | ((item: T) =&gt; string | number)</code></td><td><code>&#39;key&#39;</code></td></tr><tr><td>header</td><td>列表头部</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>footer</td><td>列表底部</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>locale</td><td>默认文案设置，目前包括空数据文案</td><td><code>{ emptyText?: string | VNode }</code></td><td>-</td></tr><tr><td>loadMore</td><td>加载更多</td><td><code>VNode</code></td><td>-</td></tr><tr><td>virtual</td><td>是否开启虚拟滚动</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>height</td><td>虚拟滚动容器高度（开启 virtual 时必需）</td><td><code>number | string</code></td><td>-</td></tr><tr><td>itemHeight</td><td>虚拟滚动每项高度</td><td><code>number</code></td><td><code>48</code></td></tr></tbody></table><h3 id="paginationconfig" tabindex="-1">PaginationConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数</td><td><code>number</code></td><td>-</td></tr><tr><td>pageSize</td><td>每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultCurrent</td><td>默认的当前页数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>defaultPageSize</td><td>默认的每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>position</td><td>指定分页显示的位置</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;both&#39;</code></td><td><code>&#39;bottom&#39;</code></td></tr><tr><td>align</td><td>指定分页对齐方式</td><td><code>&#39;start&#39; | &#39;center&#39; | &#39;end&#39;</code></td><td><code>&#39;end&#39;</code></td></tr><tr><td>onChange</td><td>页码改变的回调</td><td><code>(page: number, pageSize: number) =&gt; void</code></td><td>-</td></tr><tr><td>onShowSizeChange</td><td>pageSize 变化的回调</td><td><code>(current: number, size: number) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="listitem-props" tabindex="-1">List.Item Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>actions</td><td>列表操作组，根据 itemLayout 的不同，位置在卡片底部或者最右侧</td><td><code>VNode[]</code></td><td>-</td></tr><tr><td>extra</td><td>额外内容，通常用在 itemLayout 为 vertical 的情况下，展示右侧内容</td><td><code>VNode</code></td><td>-</td></tr></tbody></table><h3 id="listitemmeta-props" tabindex="-1">List.Item.Meta Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>avatar</td><td>列表元素的图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>title</td><td>列表元素的标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>description</td><td>列表元素的描述内容</td><td><code>string | VNode</code></td><td>-</td></tr></tbody></table>',9))])}}};export{te as default};
