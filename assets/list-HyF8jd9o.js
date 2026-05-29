import{k as m,I as f,j as a,w as g,e as h,M as c,G as l,i as _,E as y,d as r,B as k,g as S,h as w}from"./index-BNHhPN23.js";import{E as C}from"./Empty-vYQdLy9t.js";import{S as B}from"./Spin-_FNCP3u9.js";import{P as A}from"./Pagination-DeRA1UMG.js";import{c as E}from"./cls-S9IiI6wd.js";const M=m({name:"ListItemMeta",props:{avatar:[String,Object],title:String,description:String},setup(n,{slots:e}){const i=f("list");return()=>{var d,t,o;return a("div",{class:`${i}-item-meta`},[(n.avatar||e.avatar)&&a("div",{class:`${i}-item-meta-avatar`},[((d=e.avatar)==null?void 0:d.call(e))??n.avatar]),a("div",{class:`${i}-item-meta-content`},[(n.title||e.title)&&a("h4",{class:`${i}-item-meta-title`},[((t=e.title)==null?void 0:t.call(e))??n.title]),(n.description||e.description)&&a("div",{class:`${i}-item-meta-description`},[((o=e.description)==null?void 0:o.call(e))??n.description])])])}}}),b=m({name:"ListItem",props:{extra:String,actions:Array},setup(n,{slots:e}){const i=f("list");return()=>{var d,t,o,s;return a("li",{class:`${i}-item`},[a("div",{class:`${i}-item-main`},[(d=e.default)==null?void 0:d.call(e)]),(n.extra||e.extra)&&a("div",{class:`${i}-item-extra`},[((t=e.extra)==null?void 0:t.call(e))??n.extra]),(n.actions||e.actions)&&a("ul",{class:`${i}-item-action`},[(s=((o=e.actions)==null?void 0:o.call(e))??n.actions)==null?void 0:s.map((u,p)=>a("li",{key:p},[u]))])])}}}),v=m({name:"List",props:{dataSource:Array,renderItem:Function,header:String,footer:String,bordered:Boolean,size:{type:String,default:"default"},split:{type:Boolean,default:!0},loading:Boolean,locale:Object,pagination:[Boolean,Object],grid:Object},setup(n,{slots:e}){const i=f("list");return()=>{var p,L,x;const d=n.dataSource??[],t=d.length===0,o=a("ul",{class:`${i}-items`},[t?a("li",{class:`${i}-empty-text`},[a(C,{description:((p=n.locale)==null?void 0:p.emptyText)??"暂无数据"},null)]):d.map((I,$)=>n.renderItem?n.renderItem(I,$):e.renderItem?e.renderItem({item:I,index:$}):null)]),s=typeof n.pagination=="object"?n.pagination:{},u=!!n.pagination;return a("div",{class:E(i,`${i}-${n.size}`,{[`${i}-bordered`]:n.bordered,[`${i}-split`]:n.split,[`${i}-loading`]:n.loading,[`${i}-grid`]:!!n.grid})},[(n.header||e.header)&&a("div",{class:`${i}-header`},[((L=e.header)==null?void 0:L.call(e))??n.header]),n.loading?a("div",{class:`${i}-spin`},[a(B,null,null)]):o,(n.footer||e.footer)&&a("div",{class:`${i}-footer`},[((x=e.footer)==null?void 0:x.call(e))??n.footer]),u&&!t&&a("div",{class:`${i}-pagination`},[a(A,{total:s.total??d.length,pageSize:s.pageSize??10,current:s.current,onChange:s.onChange},null)])])}}}),P=["onClick"],j=["onClick"],D=m({__name:"ListActions",setup(n){const e=[{title:"列表项 1"},{title:"列表项 2"},{title:"列表项 3"}];function i(t){console.log("编辑",t)}function d(t){console.log("删除",t)}return(t,o)=>(g(),h(l(v),{"data-source":e,bordered:""},{renderItem:c(({item:s})=>[a(l(b),null,{actions:c(()=>[r("a",{onClick:u=>i(s)},"编辑",8,P),r("a",{onClick:u=>d(s)},"删除",8,j)]),default:c(()=>[_(" "+y(s.title),1)]),_:2},1024)]),_:1}))}}),z=`<template>
  <List :data-source="data" bordered>
    <template #renderItem="{ item }">
      <ListItem>
        <template #actions>
          <a @click="onEdit(item)">编辑</a>
          <a @click="onDelete(item)">删除</a>
        </template>
        {{ item.title }}
      </ListItem>
    </template>
  </List>
</template>

<script setup lang="ts">
import { List, ListItem } from 'ant-design-hmfw'

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
<\/script>
`,N=m({__name:"ListAvatar",setup(n){const e=[{title:"用户名称 1",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"},{title:"用户名称 2",description:"这是一段描述信息",avatar:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"}];return(i,d)=>(g(),h(l(v),{"data-source":e},{renderItem:c(({item:t})=>[a(l(b),null,{default:c(()=>[a(l(M),{avatar:t.avatar,title:t.title,description:t.description},null,8,["avatar","title","description"])]),_:2},1024)]),_:1}))}}),O=`<template>
  <List :data-source="data">
    <template #renderItem="{ item }">
      <ListItem>
        <ListItemMeta
          :avatar="item.avatar"
          :title="item.title"
          :description="item.description"
        />
      </ListItem>
    </template>
  </List>
</template>

<script setup lang="ts">
import { List, ListItem, ListItemMeta } from 'ant-design-hmfw'

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
]
<\/script>
`,V=m({__name:"ListBasic",setup(n){const e=["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl."];return(i,d)=>(g(),h(l(v),{"data-source":e,bordered:""},{renderItem:c(({item:t})=>[a(l(b),null,{default:c(()=>[_(y(t),1)]),_:2},1024)]),_:1}))}}),J=`<template>
  <List
    :data-source="data"
    bordered
  >
    <template #renderItem="{ item }">
      <ListItem>{{ item }}</ListItem>
    </template>
  </List>
</template>

<script setup lang="ts">
import { List, ListItem } from 'ant-design-hmfw'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
]
<\/script>
`,R={class:"markdown-body"},K={__name:"list",setup(n,{expose:e}){return e({frontmatter:{}}),(d,t)=>{const o=k("DemoBlock");return g(),S("div",R,[t[0]||(t[0]=r("h1",{id:"list-",tabindex:"-1"},"List 列表",-1)),t[1]||(t[1]=r("p",null,"通用列表。",-1)),t[2]||(t[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=r("ul",null,[r("li",null,"最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面")],-1)),t[4]||(t[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=r("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=r("p",null,"基础列表。",-1)),a(o,{title:"基础用法",source:l(J)},{default:c(()=>[a(V)]),_:1},8,["source"]),t[7]||(t[7]=r("h3",{id:"-3",tabindex:"-1"},"带操作",-1)),t[8]||(t[8]=r("p",null,"可以配置额外操作。",-1)),a(o,{title:"带操作",source:l(z)},{default:c(()=>[a(D)]),_:1},8,["source"]),t[9]||(t[9]=r("h3",{id:"-4",tabindex:"-1"},"带头像",-1)),t[10]||(t[10]=r("p",null,"带头像的列表。",-1)),a(o,{title:"带头像",source:l(O)},{default:c(()=>[a(N)]),_:1},8,["source"]),t[11]||(t[11]=w('<h2 id="api" tabindex="-1">API</h2><h3 id="list-props" tabindex="-1">List Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dataSource</td><td>列表数据源</td><td><code>any[]</code></td><td>-</td></tr><tr><td>bordered</td><td>是否展示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>列表大小</td><td><code>&#39;default&#39; | &#39;small&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>split</td><td>是否展示分割线</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>pagination</td><td>对应的 pagination 配置，设置 false 不显示</td><td><code>object | false</code></td><td><code>false</code></td></tr><tr><td>header</td><td>列表头部</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>footer</td><td>列表底部</td><td><code>string | slot</code></td><td>-</td></tr></tbody></table><h3 id="listitem-props" tabindex="-1">ListItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>actions</td><td>列表操作组</td><td><code>slot[]</code></td><td>-</td></tr><tr><td>extra</td><td>额外内容</td><td><code>string | slot</code></td><td>-</td></tr></tbody></table><h3 id="listitemmeta-props" tabindex="-1">ListItemMeta Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>avatar</td><td>列表元素的图标</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>title</td><td>列表元素的标题</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>description</td><td>列表元素的描述内容</td><td><code>string | slot</code></td><td>-</td></tr></tbody></table>',7))])}}};export{K as default};
