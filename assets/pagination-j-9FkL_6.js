import{S as h}from"./Space-DHvzouOq.js";import{P as c}from"./Pagination-BScQOhWr.js";import{k as b,w as m,e as S,M as s,j as r,G as d,d as e,E as v,z as p,B as w,g as P,i as f,h as x}from"./index-DvxRruME.js";import"./cls-S9IiI6wd.js";const k=b({__name:"PaginationBasic",setup(g){const n=p(1);return(l,o)=>(m(),S(d(h),{direction:"vertical"},{default:s(()=>[r(d(c),{total:50,current:n.value,"onUpdate:current":o[0]||(o[0]=t=>n.value=t)},null,8,["current"]),e("p",null,"当前页："+v(n.value),1)]),_:1}))}}),C=`<template>
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
`,_=b({__name:"PaginationMore",setup(g){const n=p(1),l=p(10),o=(a,i)=>{console.log("页码变化:",a,i)},t=(a,i)=>{console.log("每页条数变化:",a,i)};return(a,i)=>(m(),S(d(h),{direction:"vertical"},{default:s(()=>[r(d(c),{current:n.value,"onUpdate:current":i[0]||(i[0]=u=>n.value=u),"page-size":l.value,"onUpdate:pageSize":i[1]||(i[1]=u=>l.value=u),total:500,"show-size-changer":"","show-quick-jumper":"","show-total":(u,z)=>`第 ${z[0]}-${z[1]} 条，共 ${u} 条`,onChange:o,onShowSizeChange:t},null,8,["current","page-size","show-total"]),e("p",null,"当前页："+v(n.value)+"，每页条数："+v(l.value),1)]),_:1}))}}),$=`<template>
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
`,B=b({__name:"PaginationSimple",setup(g){const n=p(1);return(l,o)=>(m(),S(d(c),{simple:"",total:50,current:n.value,"onUpdate:current":o[0]||(o[0]=t=>n.value=t)},null,8,["current"]))}}),y=`<template>
  <Pagination simple :total="50" v-model:current="current" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'ant-design-hmfw'

const current = ref(1)
<\/script>
`,U=b({__name:"PaginationSmall",setup(g){const n=p(1);return(l,o)=>(m(),S(d(h),{direction:"vertical"},{default:s(()=>[r(d(c),{size:"small",total:50,current:n.value,"onUpdate:current":o[0]||(o[0]=t=>n.value=t)},null,8,["current"]),r(d(c),{size:"small",total:50,current:n.value,"onUpdate:current":o[1]||(o[1]=t=>n.value=t),"show-size-changer":"","show-quick-jumper":""},null,8,["current"])]),_:1}))}}),j=`<template>
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
`,q={class:"markdown-body"},M={__name:"pagination",setup(g,{expose:n}){return n({frontmatter:{}}),(o,t)=>{const a=w("DemoBlock");return m(),P("div",q,[t[0]||(t[0]=e("h1",{id:"pagination-",tabindex:"-1"},"Pagination 分页",-1)),t[1]||(t[1]=e("p",null,"采用分页的形式分隔长列表，每次只加载一个页面。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"当加载/渲染所有数据将花费很多时间时"),e("li",null,"可切换页码浏览数据")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"基础分页。",-1)),r(a,{title:"基础用法",source:d(C)},{default:s(()=>[r(k)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"更多功能",-1)),t[8]||(t[8]=e("p",null,"展示总数、切换每页条数、快速跳转。",-1)),r(a,{title:"更多功能",source:d($)},{default:s(()=>[r(_)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"简洁模式",-1)),t[10]||(t[10]=e("p",null,[f("通过 "),e("code",null,"simple"),f(" 属性设置简洁模式。")],-1)),r(a,{title:"简洁模式",source:d(y)},{default:s(()=>[r(B)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"小型分页",-1)),t[12]||(t[12]=e("p",null,[f("通过 "),e("code",null,'size="small"'),f(" 设置小型分页。")],-1)),r(a,{title:"小型分页",source:d(j)},{default:s(()=>[r(U)]),_:1},8,["source"]),t[13]||(t[13]=x('<h2 id="api" tabindex="-1">API</h2><h3 id="pagination-props" tabindex="-1">Pagination Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数（v-model）</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultCurrent</td><td>默认的当前页数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>pageSize</td><td>每页条数（v-model）</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultPageSize</td><td>默认的每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>showSizeChanger</td><td>是否展示 pageSize 切换器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showQuickJumper</td><td>是否可以快速跳转至某页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showTotal</td><td>用于显示数据总量和当前数据顺序</td><td><code>(total: number, range: [number, number]) =&gt; string</code></td><td>-</td></tr><tr><td>size</td><td>当为 <code>small</code> 时，是小尺寸分页</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>simple</td><td>当添加该属性时，显示为简单分页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用分页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>hideOnSinglePage</td><td>只有一页时是否隐藏分页器</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="pagination-events" tabindex="-1">Pagination Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>页码或 pageSize 改变的回调</td><td><code>(page: number, pageSize: number) =&gt; void</code></td></tr><tr><td>showSizeChange</td><td>pageSize 变化的回调</td><td><code>(current: number, size: number) =&gt; void</code></td></tr></tbody></table>',5))])}}};export{M as default};
