import{S}from"./Space-ddxr_8jW.js";import{P as s}from"./Pagination-CsXCndfX.js";import{m as v,y as c,g as b,P as l,l as d,I as r,f as e,H as h,B as f,n as P,E as x,i as w,k as p,j as y}from"./index-BZUMvgWw.js";import"./cls-S9IiI6wd.js";import"./icons-ef0p77fA.js";import"./Icon-BOmCTdv5.js";import"./Select-Dv_6FnjH.js";const C=v({__name:"PaginationBasic",setup(m){const o=f(1);return(i,n)=>(c(),b(r(S),{direction:"vertical"},{default:l(()=>[d(r(s),{total:50,current:o.value,"onUpdate:current":n[0]||(n[0]=t=>o.value=t)},null,8,["current"]),e("p",null,"当前页："+h(o.value),1)]),_:1}))}}),_=`<template>
  <Space direction="vertical">
    <Pagination :total="50" v-model:current="current" />
    <p>当前页：{{ current }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
<\/script>
`,k=v({__name:"PaginationCustom",setup(m){const o=(i,n,t)=>n==="prev"?P("a","上一页"):n==="next"?P("a","下一页"):t;return(i,n)=>(c(),b(r(S),{direction:"vertical",style:{width:"100%"}},{default:l(()=>[e("div",null,[n[0]||(n[0]=e("h4",null,"对齐方式",-1)),d(r(s),{total:50,align:"start",style:{"margin-bottom":"16px"}}),d(r(s),{total:50,align:"center",style:{"margin-bottom":"16px"}}),d(r(s),{total:50,align:"end"})]),e("div",null,[n[1]||(n[1]=e("h4",null,"自定义渲染",-1)),d(r(s),{total:50,"item-render":o})])]),_:1}))}}),$=`<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <h4>对齐方式</h4>
      <Pagination :total="50" align="start" style="margin-bottom: 16px" />
      <Pagination :total="50" align="center" style="margin-bottom: 16px" />
      <Pagination :total="50" align="end" />
    </div>
    <div>
      <h4>自定义渲染</h4>
      <Pagination :total="50" :item-render="itemRender" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'
import type { VNode } from 'vue'

const itemRender = (page: number, type: string, originalElement: VNode) => {
  if (type === 'prev') {
    return h('a', '上一页')
  }
  if (type === 'next') {
    return h('a', '下一页')
  }
  return originalElement
}
<\/script>
`,B=v({__name:"PaginationMore",setup(m){const o=f(1),i=f(10),n=(a,u)=>{console.log("页码变化:",a,u)},t=(a,u)=>{console.log("每页条数变化:",a,u)};return(a,u)=>(c(),b(r(S),{direction:"vertical"},{default:l(()=>[d(r(s),{current:o.value,"onUpdate:current":u[0]||(u[0]=g=>o.value=g),"page-size":i.value,"onUpdate:pageSize":u[1]||(u[1]=g=>i.value=g),total:500,"show-size-changer":"","show-quick-jumper":"","show-total":(g,z)=>`第 ${z[0]}-${z[1]} 条，共 ${g} 条`,onChange:n,onShowSizeChange:t},null,8,["current","page-size","show-total"]),e("p",null,"当前页："+h(o.value)+"，每页条数："+h(i.value),1)]),_:1}))}}),N=`<template>
  <Space direction="vertical">
    <Pagination
      v-model:current="current"
      v-model:page-size="pageSize"
      :total="500"
      show-size-changer
      show-quick-jumper
      :show-total="(total, range) => \`第 \${range[0]}-\${range[1]} 条，共 \${total} 条\`"
      @change="onChange"
      @show-size-change="onShowSizeChange"
    />
    <p>当前页：{{ current }}，每页条数：{{ pageSize }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
const pageSize = ref(10)

const onChange = (page: number, size: number) => {
  console.log('页码变化:', page, size)
}

const onShowSizeChange = (cur: number, size: number) => {
  console.log('每页条数变化:', cur, size)
}
<\/script>
`,V=v({__name:"PaginationSimple",setup(m){const o=f(1);return(i,n)=>(c(),b(r(s),{simple:"",total:50,current:o.value,"onUpdate:current":n[0]||(n[0]=t=>o.value=t)},null,8,["current"]))}}),j=`<template>
  <Pagination simple :total="50" v-model:current="current" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'ant-design-hmfw'

const current = ref(1)
<\/script>
`,E=v({__name:"PaginationSmall",setup(m){const o=f(1);return(i,n)=>(c(),b(r(S),{direction:"vertical"},{default:l(()=>[d(r(s),{size:"small",total:50,current:o.value,"onUpdate:current":n[0]||(n[0]=t=>o.value=t)},null,8,["current"]),d(r(s),{size:"small",total:50,current:o.value,"onUpdate:current":n[1]||(n[1]=t=>o.value=t),"show-size-changer":"","show-quick-jumper":""},null,8,["current"])]),_:1}))}}),U=`<template>
  <Space direction="vertical">
    <Pagination size="small" :total="50" v-model:current="current" />
    <Pagination
      size="small"
      :total="50"
      v-model:current="current"
      show-size-changer
      show-quick-jumper
    />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
<\/script>
`,R={class:"markdown-body"},H={__name:"pagination",setup(m,{expose:o}){return o({frontmatter:{}}),(n,t)=>{const a=x("DemoBlock");return c(),w("div",R,[t[0]||(t[0]=e("h1",{id:"pagination-",tabindex:"-1"},"Pagination 分页",-1)),t[1]||(t[1]=e("p",null,"采用分页的形式分隔长列表，每次只加载一个页面。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"当加载/渲染所有数据将花费很多时间时"),e("li",null,"可切换页码浏览数据")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"基础分页。",-1)),d(a,{title:"基础用法",source:r(_)},{default:l(()=>[d(C)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"更多功能",-1)),t[8]||(t[8]=e("p",null,"展示总数、切换每页条数、快速跳转。",-1)),d(a,{title:"更多功能",source:r(N)},{default:l(()=>[d(B)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"简洁模式",-1)),t[10]||(t[10]=e("p",null,[p("通过 "),e("code",null,"simple"),p(" 属性设置简洁模式。")],-1)),d(a,{title:"简洁模式",source:r(j)},{default:l(()=>[d(V)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"小型分页",-1)),t[12]||(t[12]=e("p",null,[p("通过 "),e("code",null,'size="small"'),p(" 设置小型分页。")],-1)),d(a,{title:"小型分页",source:r(U)},{default:l(()=>[d(E)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"-6",tabindex:"-1"},"自定义渲染",-1)),t[14]||(t[14]=e("p",null,[p("通过 "),e("code",null,"itemRender"),p(" 自定义页码渲染，通过 "),e("code",null,"align"),p(" 设置对齐方式。")],-1)),d(a,{title:"自定义渲染",source:r($)},{default:l(()=>[d(k)]),_:1},8,["source"]),t[15]||(t[15]=y('<h2 id="api" tabindex="-1">API</h2><h3 id="pagination-props" tabindex="-1">Pagination Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数（v-model）</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultCurrent</td><td>默认的当前页数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>pageSize</td><td>每页条数（v-model）</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultPageSize</td><td>默认的每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>pageSizeOptions</td><td>指定每页可以显示多少条</td><td><code>number[]</code></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td>showSizeChanger</td><td>是否展示 pageSize 切换器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showQuickJumper</td><td>是否可以快速跳转至某页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showTotal</td><td>用于显示数据总量和当前数据顺序</td><td><code>(total: number, range: [number, number]) =&gt; string</code></td><td>-</td></tr><tr><td>size</td><td>当为 <code>small</code> 时，是小尺寸分页</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>simple</td><td>当添加该属性时，显示为简单分页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用分页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>hideOnSinglePage</td><td>只有一页时是否隐藏分页器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>itemRender</td><td>自定义页码的结构</td><td><code>(page: number, type: &#39;page&#39; | &#39;prev&#39; | &#39;next&#39; | &#39;jump-prev&#39; | &#39;jump-next&#39;, originalElement: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>responsive</td><td>当屏幕尺寸小于 576px 时，自动变为 small</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>align</td><td>对齐方式</td><td><code>&#39;start&#39; | &#39;center&#39; | &#39;end&#39;</code></td><td>-</td></tr></tbody></table><h3 id="pagination-events" tabindex="-1">Pagination Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>页码或 pageSize 改变的回调</td><td><code>(page: number, pageSize: number) =&gt; void</code></td></tr><tr><td>showSizeChange</td><td>pageSize 变化的回调</td><td><code>(current: number, size: number) =&gt; void</code></td></tr><tr><td>update:current</td><td>当前页数变化时触发（v-model）</td><td><code>(page: number) =&gt; void</code></td></tr><tr><td>update:pageSize</td><td>每页条数变化时触发（v-model）</td><td><code>(size: number) =&gt; void</code></td></tr></tbody></table>',5))])}}};export{H as default};
