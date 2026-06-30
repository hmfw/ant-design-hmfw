import{R as dt,C as bt}from"./Col-DCO2pBOE.js";import{q as xt,B as Lt,o as S,O as U,E as H,P as pt,n as a,f as P,F as R,r as kt,s as It,A as w,i as O,L as r,p as m,k as V,h as i,_ as ft,Q as h,j as mt,K as ut,m as k,H as wt,l as St}from"./index-aeAUYztw.js";import{c as f}from"./cls-S9IiI6wd.js";import{V as Ct}from"./VirtualList-DxjmNnJl.js";import{E as Nt}from"./Empty-C6aqGMnC.js";import{P as $t}from"./Pagination-DlgDGv7w.js";import{S as ht}from"./Spin-Q5w_EB4B.js";import{A as X}from"./Avatar-CsWmjoVs.js";import{C as yt}from"./index-DP1fi7bO.js";import"./LeftOutlined-CwH079FJ.js";import"./RightOutlined-LA_EhZJ6.js";import"./Select-CwdzfgA-.js";import"./LoadingOutlined-DS-uT1Fx.js";import"./DownOutlined-BRuKGSP9.js";import"./Trigger-DUHNd6y-.js";const vt=Symbol("ListContext");function qt(t){Lt(vt,t)}function At(){return xt(vt,{})}function gt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!kt(t)}const _t=S({name:"List",props:{dataSource:Array,renderItem:Function,header:[String,Object],footer:[String,Object],bordered:Boolean,size:{type:String,default:"default"},split:{type:Boolean,default:!0},loading:[Boolean,Object],locale:Object,pagination:[Boolean,Object],grid:Object,itemLayout:{type:String,default:"horizontal"},rowKey:[String,Function],loadMore:Object,virtual:Boolean,height:[Number,String],itemHeight:{type:Number,default:48},classNames:Object,styles:Object},setup(t,{slots:e}){const o=U("list"),s=P(()=>typeof t.pagination=="object"?t.pagination:{}),n=H(s.value.defaultCurrent||1),l=H(s.value.defaultPageSize||10);pt(()=>s.value.current,d=>{d!==void 0&&(n.value=d)}),pt(()=>s.value.pageSize,d=>{d!==void 0&&(l.value=d)});const g=P(()=>s.value.current??n.value),C=P(()=>s.value.pageSize??l.value),u=(d,$)=>{var b,_;n.value=d,l.value=$,(_=(b=s.value).onChange)==null||_.call(b,d,$)},c=P(()=>typeof t.loading=="boolean"?{spinning:t.loading}:t.loading||{}),v=P(()=>!!c.value.spinning);qt({grid:t.grid,itemLayout:t.itemLayout});const N=(d,$)=>typeof t.rowKey=="function"?t.rowKey(d):typeof t.rowKey=="string"?d[t.rowKey]:d&&typeof d=="object"&&"key"in d?d.key:`list-item-${$}`;return()=>{var B,j,T,A,G,Q,Z,J,Y,tt,nt,et,at,st,ot,it,lt,rt,ct;const d=t.dataSource??[],$=d.length===0&&!e.default;let b=d;if(t.pagination&&d.length>0){const q=(g.value-1)*C.value,z=q+C.value;b=d.slice(q,z)}const _=(q,z)=>{if(!t.renderItem)return null;const K=N(q,z);return a(R,{key:K},[t.renderItem(q,z)])},L=b.map(_);let I=null;v.value&&b.length===0?I=a("div",{style:{minHeight:"53px"}},null):b.length>0?t.virtual&&t.height?t.grid?I=a(dt,{class:f(`${o}-container`,(B=t.classNames)==null?void 0:B.items),style:(j=t.styles)==null?void 0:j.items,gutter:t.grid.gutter},gt(L)?L:{default:()=>[L]}):I=a(Ct,{data:b,height:t.height,itemHeight:t.itemHeight,renderItem:(q,z)=>{var K;return((K=t.renderItem)==null?void 0:K.call(t,q,z))||null},itemKey:(q,z)=>N(q,z)},null):t.grid?I=a(dt,{class:f(`${o}-container`,(T=t.classNames)==null?void 0:T.items),style:(A=t.styles)==null?void 0:A.items,gutter:t.grid.gutter},gt(L)?L:{default:()=>[L]}):I=a("ul",{class:f(`${o}-items`,(G=t.classNames)==null?void 0:G.items),style:(Q=t.styles)==null?void 0:Q.items},[L]):$&&(I=a("div",{class:f(`${o}-empty-text`,(Z=t.classNames)==null?void 0:Z.empty),style:(J=t.styles)==null?void 0:J.empty},[((Y=t.locale)==null?void 0:Y.emptyText)||a(Nt,{description:"暂无数据"},null)]));const y=s.value.position||"bottom",x=!!t.pagination&&d.length>0,D=x?a("div",{class:f(`${o}-pagination`,(tt=t.classNames)==null?void 0:tt.pagination),style:(nt=t.styles)==null?void 0:nt.pagination},[a($t,{current:g.value,pageSize:C.value,total:s.value.total??d.length,onChange:u},null)]):null,E=!!(t.loadMore||x||t.footer||e.footer),M=f(o,{[`${o}-sm`]:t.size==="small",[`${o}-lg`]:t.size==="large",[`${o}-bordered`]:!!t.bordered,[`${o}-split`]:!!t.split,[`${o}-loading`]:!!v.value,[`${o}-grid`]:!!t.grid,[`${o}-vertical`]:t.itemLayout==="vertical",[`${o}-something-after-last-item`]:!!E},(et=t.classNames)==null?void 0:et.root);return a("div",{class:M,style:(at=t.styles)==null?void 0:at.root},[(y==="top"||y==="both")&&D,(t.header||e.header)&&a("div",{class:f(`${o}-header`,(st=t.classNames)==null?void 0:st.header),style:(ot=t.styles)==null?void 0:ot.header},[((it=e.header)==null?void 0:it.call(e))??t.header]),a(ht,{spinning:v.value},{default:()=>{var q;return[I,(q=e.default)==null?void 0:q.call(e)]}}),(t.footer||e.footer)&&a("div",{class:f(`${o}-footer`,(lt=t.classNames)==null?void 0:lt.footer),style:(rt=t.styles)==null?void 0:rt.footer},[((ct=e.footer)==null?void 0:ct.call(e))??t.footer]),t.loadMore||(y==="bottom"||y==="both")&&D])}}});function Dt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!kt(t)}const F=S({name:"ListItem",props:{extra:Object,actions:Array,classNames:Object,styles:Object},setup(t,{slots:e}){const o=U("list"),s=At(),n=P(()=>{var u;if(s.itemLayout==="vertical")return!!t.extra||!!e.extra;const l=(u=e.default)==null?void 0:u.call(e);if(!l||l.length===0)return!0;const g=l.length>1;return!(l.some(c=>typeof c.children=="string"||typeof c.type=="symbol")&&g)});return()=>{var d,$,b,_,L,I;const l=((d=e.extra)==null?void 0:d.call(e))??t.extra,g=(($=e.actions)==null?void 0:$.call(e))??t.actions,u=g&&(Array.isArray(g)?g.length>0:!0)?a("ul",{class:f(`${o}-item-action`,(b=t.classNames)==null?void 0:b.action),style:(_=t.styles)==null?void 0:_.action,key:"actions"},[(Array.isArray(g)?g:[g]).map((y,x,D)=>{var E,M;return a("li",{key:`action-${x}`},[y,x!==D.length-1&&a("em",{class:f(`${o}-item-action-split`,(E=t.classNames)==null?void 0:E.actionSplit),style:(M=t.styles)==null?void 0:M.actionSplit},null)])})]):null,c=s.grid?"div":"li",v=f(`${o}-item`,{[`${o}-item-no-flex`]:!n.value},(L=t.classNames)==null?void 0:L.item),N=a(c,{class:v,style:(I=t.styles)==null?void 0:I.item},{default:()=>{var y,x,D,E,M,B,j,T;return[s.itemLayout==="vertical"&&l?a(R,null,[a("div",{class:f(`${o}-item-main`,(y=t.classNames)==null?void 0:y.main),style:(x=t.styles)==null?void 0:x.main,key:"content"},[(D=e.default)==null?void 0:D.call(e),u]),a("div",{class:f(`${o}-item-extra`,(E=t.classNames)==null?void 0:E.extra),style:(M=t.styles)==null?void 0:M.extra,key:"extra"},[l])]):a(R,null,[(B=e.default)==null?void 0:B.call(e),u,l&&a("div",{class:f(`${o}-item-extra`,(j=t.classNames)==null?void 0:j.extra),style:(T=t.styles)==null?void 0:T.extra},[l])])]}});if(s.grid){const{column:y,xs:x,sm:D,md:E,lg:M,xl:B,xxl:j,gutter:T}=s.grid,A={};return y&&(A.span=24/y),x&&(A.xs=24/x),D&&(A.sm=24/D),E&&(A.md=24/E),M&&(A.lg=24/M),B&&(A.xl=24/B),j&&(A.xxl=24/j),a(bt,It(A,{style:{marginBottom:`${T||0}px`}}),Dt(N)?N:{default:()=>[N]})}return N}}}),W=S({name:"ListItemMeta",props:{avatar:Object,title:[String,Object],description:[String,Object],classNames:Object,styles:Object},setup(t,{slots:e}){const o=U("list");return()=>{var C,u,c,v,N,d,$,b,_,L,I,y,x;const s=((C=e.avatar)==null?void 0:C.call(e))??t.avatar,n=((u=e.title)==null?void 0:u.call(e))??t.title,l=((c=e.description)==null?void 0:c.call(e))??t.description,g=n||l?a("div",{class:f(`${o}-item-meta-content`,(v=t.classNames)==null?void 0:v.content),style:(N=t.styles)==null?void 0:N.content},[n&&a("h4",{class:f(`${o}-item-meta-title`,(d=t.classNames)==null?void 0:d.title),style:($=t.styles)==null?void 0:$.title},[n]),l&&a("div",{class:f(`${o}-item-meta-description`,(b=t.classNames)==null?void 0:b.description),style:(_=t.styles)==null?void 0:_.description},[l])]):null;return a("div",{class:f(`${o}-item-meta`,(L=t.classNames)==null?void 0:L.meta),style:(I=t.styles)==null?void 0:I.meta},[s&&a("div",{class:f(`${o}-item-meta-avatar`,(y=t.classNames)==null?void 0:y.avatar),style:(x=t.styles)==null?void 0:x.avatar},[s]),g])}}}),p=_t;p.Item=F;p.Item.Meta=W;const Et=S({__name:"ListActions",setup(t){const e=[{title:"列表项 1"},{title:"列表项 2"},{title:"列表项 3"}];function o(l){console.log("编辑",l)}function s(l){console.log("删除",l)}const n=l=>m(p.Item,{actions:[m("a",{onClick:()=>o(l)},"编辑"),m("a",{onClick:()=>s(l)},"删除")]},()=>l.title);return(l,g)=>(w(),O(r(p),{"data-source":e,"render-item":n,bordered:""}))}}),Mt=`<template>
  <List :data-source="data" :render-item="renderItem" bordered />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List } from '@hmfw/ant-design'

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
`,Pt=S({__name:"ListAvatar",setup(t){const e=[{title:"用户名称 1",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"},{title:"用户名称 2",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"},{title:"用户名称 3",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=3"}],o=s=>m(p.Item,null,()=>m(p.Item.Meta,{avatar:m(X,{src:s.avatar}),title:s.title,description:s.description}));return(s,n)=>(w(),O(r(p),{"data-source":e,"render-item":o}))}}),Bt=`<template>
  <List :data-source="data" :render-item="renderItem" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Avatar } from '@hmfw/ant-design'

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
`,jt=S({__name:"ListBasic",setup(t){const e=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl."],o=s=>m(p.Item,null,()=>s);return(s,n)=>(w(),O(r(p),{"data-source":e,"render-item":o,bordered:""}))}}),zt=`<template>
  <List :data-source="data" :render-item="renderItem" bordered />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List } from '@hmfw/ant-design'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
]

const renderItem = (item: string) => h(List.Item, null, () => item)
<\/script>
`,Tt={style:{display:"flex","flex-direction":"column",gap:"32px"}},Vt=S({__name:"ListClassNames",setup(t){const e=["Vue 3 组件库开发实战","TypeScript 类型体操进阶","Vite 构建工具深度解析"],o=[{title:"用户体验设计",description:"提升产品的整体用户体验"},{title:"性能优化",description:"前端性能优化最佳实践"},{title:"代码规范",description:"团队协作的代码规范建议"}],s=["完成需求文档评审","实现用户反馈功能","修复已知 Bug"],n=["条目 1","条目 2","条目 3","条目 4","条目 5","条目 6","条目 7"],l=u=>m(p.Item,null,()=>u),g=u=>m(p.Item,{actions:[m("a",{style:"color: #1677ff"},"编辑"),m("a",{style:"color: #1677ff"},"删除")],classNames:{item:"custom-item",action:"custom-action"}},()=>m(p.Item.Meta,{avatar:m(X,{style:{backgroundColor:"#1677ff"}},()=>u.title[0]),title:u.title,description:u.description,classNames:{title:"custom-title",description:"custom-description"}})),C=u=>m(p.Item,null,()=>u);return(u,c)=>(w(),V("div",Tt,[i("div",null,[c[0]||(c[0]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义头部和底部：",-1)),a(r(p),{"data-source":e,"render-item":l,header:"精选文章",footer:"查看更多 →",bordered:"","class-names":{header:"custom-header",footer:"custom-footer"}})]),i("div",null,[c[1]||(c[1]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义列表项和操作样式：",-1)),a(r(p),{"data-source":o,"render-item":g,bordered:""})]),i("div",null,[c[2]||(c[2]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),a(r(p),{"data-source":s,"render-item":C,header:"任务列表",bordered:"",styles:{root:{borderRadius:"12px",overflow:"hidden"},header:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",fontWeight:600},items:{background:"#fafafa"}}})]),i("div",null,[c[3]||(c[3]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义分页器：",-1)),a(r(p),{"data-source":n,"render-item":l,pagination:{pageSize:3},"class-names":{pagination:"custom-pagination"}})]),i("div",null,[c[4]||(c[4]=i("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义空状态：",-1)),a(r(p),{"data-source":[],bordered:"","class-names":{empty:"custom-empty"}})])]))}}),Ot=ft(Vt,[["__scopeId","data-v-71cc51aa"]]),Ht=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义头部和底部样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义头部和底部：</div>
      <List
        :data-source="data1"
        :render-item="renderItem1"
        header="精选文章"
        footer="查看更多 →"
        bordered
        :class-names="{
          header: 'custom-header',
          footer: 'custom-footer',
        }"
      />
    </div>

    <!-- 场景 2：自定义列表项和操作按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义列表项和操作样式：</div>
      <List :data-source="data2" :render-item="renderItem2" bordered />
    </div>

    <!-- 场景 3：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <List
        :data-source="data3"
        :render-item="renderItem3"
        header="任务列表"
        bordered
        :styles="{
          root: { borderRadius: '12px', overflow: 'hidden' },
          header: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', fontWeight: 600 },
          items: { background: '#fafafa' },
        }"
      />
    </div>

    <!-- 场景 4：自定义分页器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义分页器：</div>
      <List
        :data-source="longData"
        :render-item="renderItem1"
        :pagination="{ pageSize: 3 }"
        :class-names="{
          pagination: 'custom-pagination',
        }"
      />
    </div>

    <!-- 场景 5：空状态自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义空状态：</div>
      <List
        :data-source="[]"
        bordered
        :class-names="{
          empty: 'custom-empty',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Avatar } from '@hmfw/ant-design'

const data1 = ['Vue 3 组件库开发实战', 'TypeScript 类型体操进阶', 'Vite 构建工具深度解析']

const data2 = [
  { title: '用户体验设计', description: '提升产品的整体用户体验' },
  { title: '性能优化', description: '前端性能优化最佳实践' },
  { title: '代码规范', description: '团队协作的代码规范建议' },
]

const data3 = ['完成需求文档评审', '实现用户反馈功能', '修复已知 Bug']

const longData = ['条目 1', '条目 2', '条目 3', '条目 4', '条目 5', '条目 6', '条目 7']

const renderItem1 = (item: string) => h(List.Item, null, () => item)

const renderItem2 = (item: { title: string; description: string }) =>
  h(
    List.Item,
    {
      actions: [h('a', { style: 'color: #1677ff' }, '编辑'), h('a', { style: 'color: #1677ff' }, '删除')],
      classNames: {
        item: 'custom-item',
        action: 'custom-action',
      },
    },
    () =>
      h(List.Item.Meta, {
        avatar: h(Avatar, { style: { backgroundColor: '#1677ff' } }, () => item.title[0]),
        title: item.title,
        description: item.description,
        classNames: {
          title: 'custom-title',
          description: 'custom-description',
        },
      }),
  )

const renderItem3 = (item: string) => h(List.Item, null, () => item)
<\/script>

<style scoped>
:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
}

:deep(.custom-header:hover) {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

:deep(.custom-footer) {
  background: #f0f5ff;
  color: #1677ff;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

:deep(.custom-footer:hover) {
  background: #e6f0ff;
  color: #0958d9;
}

:deep(.custom-item) {
  transition: all 0.3s;
  padding: 16px;
}

:deep(.custom-item:hover) {
  background: #f0f5ff;
  transform: translateX(4px);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);
}

:deep(.custom-action) {
  gap: 12px;
}

:deep(.custom-action a:hover) {
  color: #0958d9 !important;
  text-decoration: underline;
}

:deep(.custom-title) {
  color: #1677ff;
  font-weight: 600;
}

:deep(.custom-description) {
  font-style: italic;
  color: #8c8c8c;
}

:deep(.custom-pagination) {
  margin-top: 24px;
  text-align: center;
}

:deep(.custom-empty) {
  padding: 48px 0;
  color: #bfbfbf;
  font-size: 16px;
  font-style: italic;
}
</style>
`,Kt=S({__name:"ListGrid",setup(t){const e=["Content 1","Content 2","Content 3","Content 4","Content 5","Content 6","Content 7","Content 8"],o=s=>m(p.Item,null,()=>m(yt,{title:s},()=>`Card content for ${s}`));return(s,n)=>(w(),O(r(p),{"data-source":e,"render-item":o,grid:{gutter:16,column:4}}))}}),Ft=`<template>
  <List :data-source="data" :render-item="renderItem" :grid="{ gutter: 16, column: 4 }" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Card } from '@hmfw/ant-design'

const data = ['Content 1', 'Content 2', 'Content 3', 'Content 4', 'Content 5', 'Content 6', 'Content 7', 'Content 8']

const renderItem = (item: string) =>
  h(List.Item, null, () => h(Card, { title: item }, () => \`Card content for \${item}\`))
<\/script>
`,Wt={key:0,style:{"text-align":"center",padding:"12px"}},Rt={key:1,style:{"text-align":"center",padding:"12px",color:"#999"}},Ut={style:{"margin-top":"16px",color:"#666"}},Xt=S({__name:"ListInfiniteScroll",setup(t){const e=Array.from({length:1e3},(u,c)=>({id:`item-${c}`,name:`Item ${c+1}`,description:`Description for item ${c+1} - Lorem ipsum dolor sit amet`})),o=H(e.slice(0,20)),s=H(!1),n=H(),l=P(()=>o.value.length>=e.length),g=()=>{s.value||l.value||(s.value=!0,setTimeout(()=>{const u=o.value.length,c=e.slice(u,u+20);o.value=[...o.value,...c],s.value=!1},1e3))},C=u=>{const c=u.target,v=c.scrollTop,N=c.scrollHeight,d=c.clientHeight;N-v-d<100&&g()};return(u,c)=>(w(),V("div",null,[c[0]||(c[0]=i("h3",null,"无限滚动示例",-1)),i("div",{ref_key:"scrollContainer",ref:n,style:{height:"400px",overflow:"auto",border:"1px solid #d9d9d9","border-radius":"4px"},onScroll:C},[a(r(p),{"data-source":o.value,loading:s.value},{renderItem:h(({item:v})=>[a(r(F),null,{default:h(()=>[a(r(W),{avatar:`https://api.dicebear.com/7.x/miniavs/svg?seed=${v.id}`,title:`${v.name}`,description:`${v.description}`},null,8,["avatar","title","description"])]),_:2},1024)]),_:1},8,["data-source","loading"]),s.value?(w(),V("div",Wt,[a(r(ht))])):mt("",!0),l.value?(w(),V("div",Rt,"已加载全部数据")):mt("",!0)],544),i("div",Ut,"已加载: "+ut(o.value.length)+" / "+ut(r(e).length)+" 项",1)]))}}),Gt=`<template>
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
import { List, ListItem, ListItemMeta, Spin } from '@hmfw/ant-design'

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
`,Qt=S({__name:"ListPagination",setup(t){const e=Array.from({length:10},(s,n)=>`Item ${n+1}`),o=s=>m(p.Item,null,()=>s);return(s,n)=>(w(),O(r(p),{"data-source":r(e),"render-item":o,pagination:{pageSize:3},bordered:""},null,8,["data-source"]))}}),Zt=`<template>
  <List :data-source="data" :render-item="renderItem" :pagination="{ pageSize: 3 }" bordered />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List } from '@hmfw/ant-design'

const data = Array.from({ length: 10 }, (_, i) => \`Item \${i + 1}\`)

const renderItem = (item: string) => h(List.Item, null, () => item)
<\/script>
`,Jt={class:"list-responsive-grid-demo"},Yt=S({__name:"ListResponsiveGrid",setup(t){const e=Array.from({length:12},(s,n)=>({id:n+1,title:`项目 ${n+1}`,content:`这是第 ${n+1} 个项目的内容`})),o=s=>m(p.Item,null,()=>m(yt,{title:s.title,hoverable:!0},()=>s.content));return(s,n)=>(w(),V("div",Jt,[n[0]||(n[0]=i("h4",null,"响应式网格布局",-1)),n[1]||(n[1]=i("p",{style:{"margin-bottom":"16px",color:"#666"}},[k(" 调整浏览器窗口大小查看响应式效果： "),i("br"),k(" • 超小屏 (xs < 576px): 1 列 "),i("br"),k(" • 小屏 (sm ≥ 576px): 2 列 "),i("br"),k(" • 中屏 (md ≥ 768px): 3 列 "),i("br"),k(" • 大屏 (lg ≥ 992px): 4 列 "),i("br"),k(" • 超大屏 (xl ≥ 1200px): 6 列 ")],-1)),a(r(p),{"data-source":r(e),"render-item":o,grid:{gutter:16,xs:1,sm:2,md:3,lg:4,xl:6}},null,8,["data-source"])]))}}),tn=ft(Yt,[["__scopeId","data-v-55c5fc78"]]),nn=`<template>
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
import { List, Card } from '@hmfw/ant-design'

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
`,en=S({__name:"ListVertical",setup(t){const e=[{title:"Ant Design Title 1",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=1",extra:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"},{title:"Ant Design Title 2",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=2",extra:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}],o=s=>m(p.Item,{extra:m("img",{src:s.extra,style:{width:"272px"}}),actions:[m("span","👁 156"),m("span","💬 2"),m("span","⭐ 156")]},()=>[m(p.Item.Meta,{avatar:m(X,{src:s.avatar}),title:m("a",{href:"#"},s.title),description:s.description}),s.content]);return(s,n)=>(w(),O(r(p),{"data-source":e,"render-item":o,"item-layout":"vertical"}))}}),an=`<template>
  <List :data-source="data" :render-item="renderItem" item-layout="vertical" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Avatar } from '@hmfw/ant-design'

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
`,sn=S({__name:"ListVirtual",setup(t){const e=P(()=>Array.from({length:1e4},(s,n)=>({id:`item-${n}`,title:`Item ${n+1}`}))),o=P(()=>Array.from({length:5e4},(s,n)=>({id:`user-${n}`,name:`User ${n+1}`,email:`user${n+1}@example.com`,createdAt:new Date(2020,0,1+n%365).toLocaleDateString()})));return(s,n)=>(w(),V("div",null,[n[0]||(n[0]=i("h3",null,"基础虚拟滚动（10,000 项）",-1)),a(r(p),{"data-source":e.value,virtual:"",height:400,"item-height":48},{renderItem:h(({item:l,index:g})=>[a(r(F),null,{default:h(()=>[a(r(W),{title:`Item ${g+1}`,description:`This is item ${g+1} with ID: ${l.id}`},null,8,["title","description"])]),_:2},1024)]),_:1},8,["data-source"]),n[1]||(n[1]=i("h3",{style:{"margin-top":"24px"}},"带头像的虚拟滚动（50,000 项）",-1)),a(r(p),{"data-source":o.value,virtual:"",height:400,"item-height":73},{renderItem:h(({item:l,index:g})=>[a(r(F),null,{default:h(()=>[a(r(W),{avatar:`https://api.dicebear.com/7.x/miniavs/svg?seed=${l.id}`,title:`User ${g+1}: ${l.name}`,description:`Email: ${l.email} | Created: ${l.createdAt}`},null,8,["avatar","title","description"])]),_:2},1024)]),_:1},8,["data-source"])]))}}),on=`<template>
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
import { List, ListItem, ListItemMeta } from '@hmfw/ant-design'

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
`,ln={class:"markdown-body"},In={__name:"list",setup(t,{expose:e}){return e({frontmatter:{}}),(s,n)=>{const l=wt("DemoBlock");return w(),V("div",ln,[n[0]||(n[0]=i("h1",{id:"list-列表",tabindex:"-1"},"List 列表",-1)),n[1]||(n[1]=i("p",null,"通用列表。",-1)),n[2]||(n[2]=i("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=i("ul",null,[i("li",null,"最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面")],-1)),n[4]||(n[4]=i("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=i("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=i("p",null,"基础列表。",-1)),a(l,{title:"基础用法",source:r(zt)},{default:h(()=>[a(jt)]),_:1},8,["source"]),n[7]||(n[7]=i("h3",{id:"带操作",tabindex:"-1"},"带操作",-1)),n[8]||(n[8]=i("p",null,"可以配置额外操作。",-1)),a(l,{title:"带操作",source:r(Mt)},{default:h(()=>[a(Et)]),_:1},8,["source"]),n[9]||(n[9]=i("h3",{id:"带头像",tabindex:"-1"},"带头像",-1)),n[10]||(n[10]=i("p",null,"带头像的列表。",-1)),a(l,{title:"带头像",source:r(Bt)},{default:h(()=>[a(Pt)]),_:1},8,["source"]),n[11]||(n[11]=i("h3",{id:"栅格列表",tabindex:"-1"},"栅格列表",-1)),n[12]||(n[12]=i("p",null,[k("通过设置 "),i("code",null,"grid"),k(" 属性来实现栅格列表。")],-1)),a(l,{title:"栅格列表",source:r(Ft)},{default:h(()=>[a(Kt)]),_:1},8,["source"]),n[13]||(n[13]=i("h3",{id:"响应式网格",tabindex:"-1"},"响应式网格",-1)),n[14]||(n[14]=i("p",null,[k("通过 "),i("code",null,"grid"),k(" 的响应式属性（xs/sm/md/lg/xl）实现不同屏幕尺寸下的自适应布局。")],-1)),a(l,{title:"响应式网格",source:r(nn)},{default:h(()=>[a(tn)]),_:1},8,["source"]),n[15]||(n[15]=i("h3",{id:"翻页",tabindex:"-1"},"翻页",-1)),n[16]||(n[16]=i("p",null,[k("通过设置 "),i("code",null,"pagination"),k(" 属性来实现翻页。")],-1)),a(l,{title:"翻页",source:r(Zt)},{default:h(()=>[a(Qt)]),_:1},8,["source"]),n[17]||(n[17]=i("h3",{id:"竖排列表",tabindex:"-1"},"竖排列表",-1)),n[18]||(n[18]=i("p",null,[k("通过设置 "),i("code",null,'itemLayout="vertical"'),k(" 来实现竖排列表。")],-1)),a(l,{title:"竖排列表",source:r(an)},{default:h(()=>[a(en)]),_:1},8,["source"]),n[19]||(n[19]=i("h3",{id:"虚拟滚动",tabindex:"-1"},"虚拟滚动",-1)),n[20]||(n[20]=i("p",null,[k("使用虚拟滚动支持大数据场景，通过 "),i("code",null,"virtual"),k(" 和 "),i("code",null,"height"),k(" 属性开启。")],-1)),a(l,{title:"虚拟滚动",source:r(on)},{default:h(()=>[a(sn)]),_:1},8,["source"]),n[21]||(n[21]=i("h3",{id:"无限滚动",tabindex:"-1"},"无限滚动",-1)),n[22]||(n[22]=i("p",null,"通过监听滚动事件实现无限滚动加载更多数据。",-1)),a(l,{title:"无限滚动",source:r(Gt)},{default:h(()=>[a(Xt)]),_:1},8,["source"]),n[23]||(n[23]=i("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[24]||(n[24]=i("p",null,[k("通过 "),i("code",null,"classNames"),k(" / "),i("code",null,"styles"),k(" 对各子元素做细粒度样式控制。")],-1)),a(l,{title:"语义化 className 与 style",source:r(Ht)},{default:h(()=>[a(Ot)]),_:1},8,["source"]),n[25]||(n[25]=St(`<h2 id="api" tabindex="-1">API</h2><h3 id="list-props" tabindex="-1">List Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>列表数据源</td><td><code>any[]</code></td><td>-</td></tr><tr><td>renderItem</td><td>自定义渲染列表项</td><td><code>(item: T, index: number) =&gt; VNode</code></td><td>-</td></tr><tr><td>bordered</td><td>是否展示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>列表大小</td><td><code>&#39;default&#39; | &#39;small&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>split</td><td>是否展示分割线</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td><td><code>boolean | { spinning?: boolean }</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>对应的 pagination 配置，设置 false 不显示</td><td><code>boolean | PaginationConfig</code></td><td><code>false</code></td></tr><tr><td>grid</td><td>列表栅格配置</td><td><code>{ column?: number; gutter?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }</code></td><td>-</td></tr><tr><td>itemLayout</td><td>设置 List.Item 布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>rowKey</td><td>各项 key 的取值，可以是字符串或一个函数</td><td><code>string | ((item: T) =&gt; string | number)</code></td><td><code>&#39;key&#39;</code></td></tr><tr><td>header</td><td>列表头部</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>footer</td><td>列表底部</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>locale</td><td>默认文案设置，目前包括空数据文案</td><td><code>{ emptyText?: string | VNode }</code></td><td>-</td></tr><tr><td>loadMore</td><td>加载更多</td><td><code>VNode</code></td><td>-</td></tr><tr><td>virtual</td><td>是否开启虚拟滚动</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>height</td><td>虚拟滚动容器高度（开启 virtual 时必需）</td><td><code>number | string</code></td><td>-</td></tr><tr><td>itemHeight</td><td>虚拟滚动每项高度</td><td><code>number</code></td><td><code>48</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ListClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ListStyles</code></td><td>-</td></tr></tbody></table><h3 id="paginationconfig" tabindex="-1">PaginationConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数</td><td><code>number</code></td><td>-</td></tr><tr><td>pageSize</td><td>每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultCurrent</td><td>默认的当前页数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>defaultPageSize</td><td>默认的每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>position</td><td>指定分页显示的位置</td><td><code>&#39;top&#39; | &#39;bottom&#39; | &#39;both&#39;</code></td><td><code>&#39;bottom&#39;</code></td></tr><tr><td>align</td><td>指定分页对齐方式</td><td><code>&#39;start&#39; | &#39;center&#39; | &#39;end&#39;</code></td><td><code>&#39;end&#39;</code></td></tr><tr><td>onChange</td><td>页码改变的回调</td><td><code>(page: number, pageSize: number) =&gt; void</code></td><td>-</td></tr><tr><td>onShowSizeChange</td><td>pageSize 变化的回调</td><td><code>(current: number, size: number) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="listitem-props" tabindex="-1">List.Item Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>actions</td><td>列表操作组，根据 itemLayout 的不同，位置在卡片底部或者最右侧</td><td><code>VNode[]</code></td><td>-</td></tr><tr><td>extra</td><td>额外内容，通常用在 itemLayout 为 vertical 的情况下，展示右侧内容</td><td><code>VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ListItemClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ListItemStyles</code></td><td>-</td></tr></tbody></table><h3 id="listitemmeta-props" tabindex="-1">List.Item.Meta Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>avatar</td><td>列表元素的图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>title</td><td>列表元素的标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>description</td><td>列表元素的描述内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ListItemMetaClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>ListItemMetaStyles</code></td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 List 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// List</span>
<span class="token keyword">interface</span> <span class="token class-name">ListClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器 div.hmfw-list</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头部区域 div.hmfw-list-header</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 底部区域 div.hmfw-list-footer</span>
  items<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表容器 ul.hmfw-list-items 或 div.hmfw-list-container（grid 模式）</span>
  empty<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 空状态容器 div.hmfw-list-empty-text</span>
  pagination<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分页器容器 div.hmfw-list-pagination</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ListStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  footer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  items<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  empty<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  pagination<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// ListItem</span>
<span class="token keyword">interface</span> <span class="token class-name">ListItemClassNames</span> <span class="token punctuation">{</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表项根节点 li.hmfw-list-item 或 div.hmfw-list-item（grid 模式）</span>
  main<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 主内容区域 div.hmfw-list-item-main（垂直布局时）</span>
  extra<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 额外内容 div.hmfw-list-item-extra</span>
  action<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 操作列表 ul.hmfw-list-item-action</span>
  actionSplit<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 操作分隔符 em.hmfw-list-item-action-split</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ListItemStyles</span> <span class="token punctuation">{</span>
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  main<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  extra<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  action<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  actionSplit<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// ListItemMeta</span>
<span class="token keyword">interface</span> <span class="token class-name">ListItemMetaClassNames</span> <span class="token punctuation">{</span>
  meta<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// Meta 根容器 div.hmfw-list-item-meta</span>
  avatar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头像容器 div.hmfw-list-item-meta-avatar</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容容器 div.hmfw-list-item-meta-content</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题 h4.hmfw-list-item-meta-title</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 描述 div.hmfw-list-item-meta-description</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ListItemMetaStyles</span> <span class="token punctuation">{</span>
  meta<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  avatar<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  description<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- List 主组件 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.header / styles.header 应用于此 --&gt;</span>
    头部内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.items / styles.items 应用于此 --&gt;</span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ ListItem 的 classNames.item / styles.item 应用于此 --&gt;</span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-item-meta<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ ListItemMeta 的 classNames.meta / styles.meta 应用于此 --&gt;</span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-item-meta-avatar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ ListItemMeta 的 classNames.avatar / styles.avatar 应用于此 --&gt;</span>
          头像
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-item-meta-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ ListItemMeta 的 classNames.content / styles.content 应用于此 --&gt;</span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-item-meta-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ ListItemMeta 的 classNames.title / styles.title 应用于此 --&gt;</span>
            标题
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-item-meta-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ ListItemMeta 的 classNames.description / styles.description 应用于此 --&gt;</span>
            描述
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-item-action<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ ListItem 的 classNames.action / styles.action 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>操作1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-item-action-split<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ ListItem 的 classNames.actionSplit / styles.actionSplit 应用于此 --&gt;</span>
          |
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>操作2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.footer / styles.footer 应用于此 --&gt;</span>
    底部内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-pagination<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.pagination / styles.pagination 应用于此 --&gt;</span>
    分页器
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 空状态 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-items<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-list-empty-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.empty / styles.empty 应用于此 --&gt;</span>
      暂无数据
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- List 主组件 --&gt;
  &lt;List
    :data-source=&quot;data&quot;
    :render-item=&quot;renderItem&quot;
    header=&quot;文章列表&quot;
    footer=&quot;查看更多&quot;
    :class-names=&quot;{
      root: &#39;my-list&#39;,
      header: &#39;my-header&#39;,
      footer: &#39;my-footer&#39;,
      items: &#39;my-items&#39;,
    }&quot;
  /&gt;

  &lt;!-- ListItem --&gt;
  &lt;List :data-source=&quot;data&quot; :render-item=&quot;renderItemWithActions&quot; /&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { h } from &#39;vue&#39;
import { List, Avatar } from &#39;@hmfw/ant-design&#39;

const data = [{ id: 1, title: &#39;标题&#39;, description: &#39;描述&#39; }]

const renderItemWithActions = (item: any) =&gt;
  h(
    List.Item,
    {
      actions: [h(&#39;a&#39;, &#39;编辑&#39;), h(&#39;a&#39;, &#39;删除&#39;)],
      classNames: {
        item: &#39;my-item&#39;,
        action: &#39;my-action&#39;,
      },
    },
    () =&gt;
      h(List.Item.Meta, {
        avatar: h(Avatar, () =&gt; &#39;A&#39;),
        title: item.title,
        description: item.description,
        classNames: {
          meta: &#39;my-meta&#39;,
          title: &#39;my-title&#39;,
          description: &#39;my-desc&#39;,
        },
      }),
  )
&lt;/script&gt;

&lt;style scoped&gt;
:deep(.my-list) {
  border-radius: 12px;
  overflow: hidden;
}

:deep(.my-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
}

:deep(.my-footer) {
  background: #f0f5ff;
  color: #1677ff;
  text-align: center;
  cursor: pointer;
}

:deep(.my-item:hover) {
  background: #f0f5ff;
  transform: translateX(4px);
}

:deep(.my-action) {
  gap: 12px;
}

:deep(.my-title) {
  color: #1677ff;
  font-weight: 600;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- List 主组件 --&gt;
  &lt;List
    :data-source=&quot;data&quot;
    :render-item=&quot;renderItem&quot;
    header=&quot;任务列表&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;12px&#39;, overflow: &#39;hidden&#39; },
      header: { background: &#39;#1677ff&#39;, color: &#39;white&#39;, fontWeight: 600 },
      items: { background: &#39;#fafafa&#39; },
    }&quot;
  /&gt;

  &lt;!-- ListItem 和 ListItemMeta --&gt;
  &lt;List :data-source=&quot;data&quot; :render-item=&quot;renderItemWithStyles&quot; /&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { h } from &#39;vue&#39;
import { List, Avatar } from &#39;@hmfw/ant-design&#39;

const renderItemWithStyles = (item: any) =&gt;
  h(
    List.Item,
    {
      styles: {
        item: { padding: &#39;20px&#39;, borderLeft: &#39;3px solid #1677ff&#39; },
      },
    },
    () =&gt;
      h(List.Item.Meta, {
        avatar: h(Avatar, () =&gt; &#39;A&#39;),
        title: item.title,
        description: item.description,
        styles: {
          title: { color: &#39;#1677ff&#39;, fontSize: &#39;16px&#39; },
          description: { fontStyle: &#39;italic&#39; },
        },
      }),
  )
&lt;/script&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>List、ListItem、ListItemMeta 的 <code>classNames</code> 和 <code>styles</code> 是独立的，需要分别在各自组件上设置</li><li><code>items</code> 应用于列表容器（普通模式是 <code>&lt;ul&gt;</code>，grid 模式是 <code>&lt;div&gt;</code>）</li><li><code>empty</code> 仅在数据源为空时渲染</li><li><code>pagination</code> 仅在设置了 <code>pagination</code> 属性时渲染</li><li><code>main</code> 仅在垂直布局（<code>itemLayout=&quot;vertical&quot;</code>）时渲染</li><li><code>extra</code> 仅在 ListItem 设置了 <code>extra</code> 属性时渲染</li><li><code>action</code> 和 <code>actionSplit</code> 仅在 ListItem 设置了 <code>actions</code> 属性时渲染</li><li>使用 <code>renderItem</code> 时，需在渲染函数中手动传递 <code>classNames</code> 和 <code>styles</code> 给 ListItem 和 ListItemMeta</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>List 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-control-height</code></td><td>控件高度</td><td><code>32px</code></td></tr><tr><td><code>--hmfw-margin</code></td><td>标准外边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-margin-lg</code></td><td>大号外边距</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-margin-sm</code></td><td>小号外边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-padding</code></td><td>标准内边距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-padding-lg</code></td><td>大号内边距</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-padding-sm</code></td><td>小号内边距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-padding-xs</code></td><td>超小内边距</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr></tbody></table>`,27))])}}};export{In as default};
