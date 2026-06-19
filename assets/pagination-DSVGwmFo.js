import{S as x}from"./Space-BxAy7a4l.js";import{P as s}from"./Pagination-CVyoZXos.js";import{o as b,A as g,i as S,R as u,h as e,n,K as o,J as z,E as h,p as f,H as P,k as w,m,l as y}from"./index-Dewmb7_Q.js";import"./cls-S9IiI6wd.js";import"./Icon-Dgvr5Blx.js";import"./LeftOutlined-BSF2yIO_.js";import"./RightOutlined-ZZ0TtTWb.js";import"./Select-BTUp91wf.js";import"./VirtualList-CDq20xkE.js";const k=b({__name:"PaginationAlign",setup(v){return(r,i)=>(g(),S(o(x),{direction:"vertical",style:{width:"100%"}},{default:u(()=>[e("div",null,[i[0]||(i[0]=e("h4",null,"左对齐（默认）",-1)),n(o(s),{total:50})]),e("div",null,[i[1]||(i[1]=e("h4",null,"居中对齐",-1)),n(o(s),{total:50,align:"center"})]),e("div",null,[i[2]||(i[2]=e("h4",null,"右对齐",-1)),n(o(s),{total:50,align:"end"})]),e("div",null,[i[3]||(i[3]=e("h4",null,"完整功能 + 居中对齐",-1)),n(o(s),{total:500,"show-size-changer":"","show-quick-jumper":"","show-total":a=>`共 ${a} 条`,align:"center"},null,8,["show-total"])])]),_:1}))}}),C=`<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <h4>左对齐（默认）</h4>
      <Pagination :total="50" />
    </div>
    <div>
      <h4>居中对齐</h4>
      <Pagination :total="50" align="center" />
    </div>
    <div>
      <h4>右对齐</h4>
      <Pagination :total="50" align="end" />
    </div>
    <div>
      <h4>完整功能 + 居中对齐</h4>
      <Pagination
        :total="500"
        show-size-changer
        show-quick-jumper
        :show-total="(total) => \`共 \${total} 条\`"
        align="center"
      />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { Pagination, Space } from 'ant-design-hmfw'
<\/script>
`,R=b({__name:"PaginationBasic",setup(v){const r=h(1);return(i,a)=>(g(),S(o(x),{direction:"vertical"},{default:u(()=>[n(o(s),{current:r.value,"onUpdate:current":a[0]||(a[0]=t=>r.value=t),total:50},null,8,["current"]),e("p",null,"当前页："+z(r.value),1)]),_:1}))}}),$=`<template>
  <Space direction="vertical">
    <Pagination v-model:current="current" :total="50" />
    <p>当前页：{{ current }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
<\/script>
`,E={style:{"margin-top":"8px",color:"#666"}},N=b({__name:"PaginationItemRender",setup(v){const r=h(1),i=(l,d,c)=>d==="prev"?f("a","上一页"):d==="next"?f("a","下一页"):c,a=(l,d,c)=>d==="page"?f("a",{style:{display:"inline-block",padding:"0 8px",border:"1px solid #d9d9d9",borderRadius:"4px",fontWeight:"bold"}},`[${l}]`):c,t=(l,d,c)=>d==="page"?f("a",{href:`#page-${l}`},l):d==="prev"?f("a",{href:"#prev"},"← 上一页"):d==="next"?f("a",{href:"#next"},"下一页 →"):c,p=l=>{r.value=l};return(l,d)=>(g(),S(o(x),{direction:"vertical",style:{width:"100%"}},{default:u(()=>[e("div",null,[d[0]||(d[0]=e("h4",null,"自定义上一页/下一页文本",-1)),n(o(s),{total:50,"item-render":i})]),e("div",null,[d[1]||(d[1]=e("h4",null,"自定义页码样式",-1)),n(o(s),{total:100,"item-render":a})]),e("div",null,[d[2]||(d[2]=e("h4",null,"链接模式",-1)),n(o(s),{total:50,"item-render":t,onChange:p}),e("p",E,"点击页码查看链接效果（当前页："+z(r.value)+"）",1)])]),_:1}))}}),V=`<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <h4>自定义上一页/下一页文本</h4>
      <Pagination :total="50" :item-render="itemRenderText" />
    </div>
    <div>
      <h4>自定义页码样式</h4>
      <Pagination :total="100" :item-render="itemRenderCustom" />
    </div>
    <div>
      <h4>链接模式</h4>
      <Pagination :total="50" :item-render="itemRenderLink" @change="handleChange" />
      <p style="margin-top: 8px; color: #666">点击页码查看链接效果（当前页：{{ current }}）</p>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'
import type { VNode } from 'vue'

const current = ref(1)

// 自定义上一页/下一页文本
const itemRenderText = (page: number, type: string, originalElement: VNode) => {
  if (type === 'prev') {
    return h('a', '上一页')
  }
  if (type === 'next') {
    return h('a', '下一页')
  }
  return originalElement
}

// 自定义页码样式
const itemRenderCustom = (page: number, type: string, originalElement: VNode) => {
  if (type === 'page') {
    return h(
      'a',
      {
        style: {
          display: 'inline-block',
          padding: '0 8px',
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          fontWeight: 'bold',
        },
      },
      \`[\${page}]\`,
    )
  }
  return originalElement
}

// 自定义链接
const itemRenderLink = (page: number, type: string, originalElement: VNode) => {
  if (type === 'page') {
    return h(
      'a',
      {
        href: \`#page-\${page}\`,
      },
      page,
    )
  }
  if (type === 'prev') {
    return h('a', { href: '#prev' }, '← 上一页')
  }
  if (type === 'next') {
    return h('a', { href: '#next' }, '下一页 →')
  }
  return originalElement
}

const handleChange = (page: number) => {
  current.value = page
}
<\/script>
`,j=b({__name:"PaginationMore",setup(v){const r=h(1),i=h(10),a=(p,l)=>{console.log("页码变化:",p,l)},t=(p,l)=>{console.log("每页条数变化:",p,l)};return(p,l)=>(g(),S(o(x),{direction:"vertical"},{default:u(()=>[n(o(s),{current:r.value,"onUpdate:current":l[0]||(l[0]=d=>r.value=d),"page-size":i.value,"onUpdate:pageSize":l[1]||(l[1]=d=>i.value=d),total:500,"show-size-changer":"","show-quick-jumper":"","show-total":(d,c)=>`第 ${c[0]}-${c[1]} 条，共 ${d} 条`,onChange:a,onShowSizeChange:t},null,8,["current","page-size","show-total"]),e("p",null,"当前页："+z(r.value)+"，每页条数："+z(i.value),1)]),_:1}))}}),_=`<template>
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
`,B=b({__name:"PaginationSimple",setup(v){const r=h(1);return(i,a)=>(g(),S(o(s),{current:r.value,"onUpdate:current":a[0]||(a[0]=t=>r.value=t),simple:"",total:50},null,8,["current"]))}}),q=`<template>
  <Pagination v-model:current="current" simple :total="50" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'ant-design-hmfw'

const current = ref(1)
<\/script>
`,T=b({__name:"PaginationSmall",setup(v){const r=h(1);return(i,a)=>(g(),S(o(x),{direction:"vertical"},{default:u(()=>[n(o(s),{current:r.value,"onUpdate:current":a[0]||(a[0]=t=>r.value=t),size:"small",total:50},null,8,["current"]),n(o(s),{current:r.value,"onUpdate:current":a[1]||(a[1]=t=>r.value=t),size:"small",total:50,"show-size-changer":"","show-quick-jumper":""},null,8,["current"])]),_:1}))}}),U=`<template>
  <Space direction="vertical">
    <Pagination v-model:current="current" size="small" :total="50" />
    <Pagination v-model:current="current" size="small" :total="50" show-size-changer show-quick-jumper />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
<\/script>
`,A={class:"markdown-body"},Q={__name:"pagination",setup(v,{expose:r}){return r({frontmatter:{}}),(a,t)=>{const p=P("DemoBlock");return g(),w("div",A,[t[0]||(t[0]=e("h1",{id:"pagination-分页",tabindex:"-1"},"Pagination 分页",-1)),t[1]||(t[1]=e("p",null,"采用分页的形式分隔长列表，每次只加载一个页面。",-1)),t[2]||(t[2]=e("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"当加载/渲染所有数据将花费很多时间时"),e("li",null,"可切换页码浏览数据")],-1)),t[4]||(t[4]=e("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"基础分页。",-1)),n(p,{title:"基础用法",source:o($)},{default:u(()=>[n(R)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"更多功能",tabindex:"-1"},"更多功能",-1)),t[8]||(t[8]=e("p",null,"展示总数、切换每页条数、快速跳转。",-1)),n(p,{title:"更多功能",source:o(_)},{default:u(()=>[n(j)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"简洁模式",tabindex:"-1"},"简洁模式",-1)),t[10]||(t[10]=e("p",null,[m("通过 "),e("code",null,"simple"),m(" 属性设置简洁模式。")],-1)),n(p,{title:"简洁模式",source:o(q)},{default:u(()=>[n(B)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"小型分页",tabindex:"-1"},"小型分页",-1)),t[12]||(t[12]=e("p",null,[m("通过 "),e("code",null,'size="small"'),m(" 设置小型分页。")],-1)),n(p,{title:"小型分页",source:o(U)},{default:u(()=>[n(T)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"自定义渲染",tabindex:"-1"},"自定义渲染",-1)),t[14]||(t[14]=e("p",null,[m("通过 "),e("code",null,"itemRender"),m(" 自定义页码的结构，可以自定义上一页/下一页文本、页码样式或渲染为链接等。")],-1)),n(p,{title:"自定义渲染",source:o(V)},{default:u(()=>[n(N)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"对齐方式",tabindex:"-1"},"对齐方式",-1)),t[16]||(t[16]=e("p",null,[m("通过 "),e("code",null,"align"),m(" 属性设置分页器的对齐方式，支持左对齐（默认）、居中对齐和右对齐。")],-1)),n(p,{title:"对齐方式",source:o(C)},{default:u(()=>[n(k)]),_:1},8,["source"]),t[17]||(t[17]=y(`<h2 id="api" tabindex="-1">API</h2><h3 id="pagination-props" tabindex="-1">Pagination Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数（v-model）</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultCurrent</td><td>默认的当前页数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>pageSize</td><td>每页条数（v-model）</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultPageSize</td><td>默认的每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>pageSizeOptions</td><td>指定每页可以显示多少条</td><td><code>number[]</code></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td>showSizeChanger</td><td>是否展示 pageSize 切换器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showQuickJumper</td><td>是否可以快速跳转至某页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showTotal</td><td>用于显示数据总量和当前数据顺序</td><td><code>(total: number, range: [number, number]) =&gt; string</code></td><td>-</td></tr><tr><td>size</td><td>当为 <code>small</code> 时，是小尺寸分页</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>simple</td><td>当添加该属性时，显示为简单分页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用分页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>hideOnSinglePage</td><td>只有一页时是否隐藏分页器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>itemRender</td><td>自定义页码的结构，可以自定义上一页/下一页文本、页码样式等</td><td><code>(page: number, type: &#39;page&#39; | &#39;prev&#39; | &#39;next&#39; | &#39;jump-prev&#39; | &#39;jump-next&#39;, originalElement: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>responsive</td><td>当屏幕尺寸小于 576px 时，自动变为 small</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>align</td><td>分页器的对齐方式，可选 <code>start</code>（左对齐）、<code>center</code>（居中）、<code>end</code>（右对齐）</td><td><code>&#39;start&#39; | &#39;center&#39; | &#39;end&#39;</code></td><td>-</td></tr></tbody></table><h3 id="pagination-events" tabindex="-1">Pagination Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>页码或 pageSize 改变的回调</td><td><code>(page: number, pageSize: number) =&gt; void</code></td></tr><tr><td>showSizeChange</td><td>pageSize 变化的回调</td><td><code>(current: number, size: number) =&gt; void</code></td></tr><tr><td>update:current</td><td>当前页数变化时触发（v-model）</td><td><code>(page: number) =&gt; void</code></td></tr><tr><td>update:pageSize</td><td>每页条数变化时触发（v-model）</td><td><code>(size: number) =&gt; void</code></td></tr></tbody></table><h3 id="itemrender-函数参数" tabindex="-1">itemRender 函数参数</h3><p><code>itemRender</code> 用于自定义页码渲染，函数签名为：</p><pre class="language-typescript"><code class="language-typescript"><span class="token punctuation">;</span><span class="token punctuation">(</span>page<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> type<span class="token operator">:</span> ItemType<span class="token punctuation">,</span> originalElement<span class="token operator">:</span> VNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> VNode
</code></pre><p><strong>参数说明</strong>：</p><ul><li><p><code>page</code>：目标页码</p><ul><li>对于 <code>type: &#39;page&#39;</code> —— 当前页码数字</li><li>对于 <code>type: &#39;prev&#39;</code> —— 上一页的页码（current - 1）</li><li>对于 <code>type: &#39;next&#39;</code> —— 下一页的页码（current + 1）</li><li>对于 <code>type: &#39;jump-prev&#39;</code> —— 向前跳转 5 页的目标页码</li><li>对于 <code>type: &#39;jump-next&#39;</code> —— 向后跳转 5 页的目标页码</li></ul></li><li><p><code>type</code>：渲染项的类型</p><ul><li><code>&#39;page&#39;</code> —— 普通页码按钮</li><li><code>&#39;prev&#39;</code> —— 上一页按钮</li><li><code>&#39;next&#39;</code> —— 下一页按钮</li><li><code>&#39;jump-prev&#39;</code> —— 向前快速跳转（显示为省略号 <code>•••</code>）</li><li><code>&#39;jump-next&#39;</code> —— 向后快速跳转（显示为省略号 <code>•••</code>）</li></ul></li><li><p><code>originalElement</code>：原始渲染的 VNode，可以直接返回或基于此进行修改</p></li></ul><p><strong>使用示例</strong>：</p><pre class="language-vue"><code class="language-vue">&lt;script setup&gt;
import { h } from &#39;vue&#39;

const itemRender = (page, type, originalElement) =&gt; {
  if (type === &#39;prev&#39;) {
    return h(&#39;a&#39;, &#39;上一页&#39;)
  }
  if (type === &#39;next&#39;) {
    return h(&#39;a&#39;, &#39;下一页&#39;)
  }
  // 其他情况返回原始元素
  return originalElement
}
&lt;/script&gt;
</code></pre>`,12))])}}};export{Q as default};
