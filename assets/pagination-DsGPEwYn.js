import{S as x}from"./Space-DIK7Q-ya.js";import{P as i}from"./Pagination-BlR9s0ng.js";import{o as h,A as g,i as b,S as d,h as n,n as a,L as e,K as y,E as v,k as w,_ as S,p as f,H as q,m as u,l as P}from"./index-8XlzfTv5.js";import"./cls-S9IiI6wd.js";import"./LeftOutlined-DbjhzKe4.js";import"./RightOutlined-DQVUS5Tj.js";import"./Select-KQmpZrfp.js";import"./LoadingOutlined-DqorBNRC.js";import"./DownOutlined-Ct3Sxh2i.js";import"./Trigger-B5otcy1E.js";import"./VirtualList-yH7G4j2y.js";const z=h({__name:"PaginationAlign",setup(k){return(o,s)=>(g(),b(e(x),{direction:"vertical",style:{width:"100%"}},{default:d(()=>[n("div",null,[s[0]||(s[0]=n("h4",null,"左对齐（默认）",-1)),a(e(i),{total:50})]),n("div",null,[s[1]||(s[1]=n("h4",null,"居中对齐",-1)),a(e(i),{total:50,align:"center"})]),n("div",null,[s[2]||(s[2]=n("h4",null,"右对齐",-1)),a(e(i),{total:50,align:"end"})]),n("div",null,[s[3]||(s[3]=n("h4",null,"完整功能 + 居中对齐",-1)),a(e(i),{total:500,"show-size-changer":"","show-quick-jumper":"","show-total":l=>`共 ${l} 条`,align:"center"},null,8,["show-total"])])]),_:1}))}}),C=`<template>
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
import { Pagination, Space } from '@hmfw/ant-design'
<\/script>
`,N=h({__name:"PaginationBasic",setup(k){const o=v(1);return(s,l)=>(g(),b(e(x),{direction:"vertical"},{default:d(()=>[a(e(i),{current:o.value,"onUpdate:current":l[0]||(l[0]=t=>o.value=t),total:50},null,8,["current"]),n("p",null,"当前页："+y(o.value),1)]),_:1}))}}),j=`<template>
  <Space direction="vertical">
    <Pagination v-model:current="current" :total="50" />
    <p>当前页：{{ current }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from '@hmfw/ant-design'

const current = ref(1)
<\/script>
`,$={style:{display:"flex","flex-direction":"column",gap:"24px"}},E=h({__name:"PaginationClassNames",setup(k){return(o,s)=>(g(),w("div",$,[n("div",null,[s[0]||(s[0]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器与页码项：",-1)),a(e(i),{total:50,"class-names":{root:"custom-root",item:"custom-item",itemActive:"custom-item-active"}})]),n("div",null,[s[1]||(s[1]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义上一页/下一页按钮：",-1)),a(e(i),{total:100,"class-names":{prev:"custom-prev",next:"custom-next"}})]),n("div",null,[s[2]||(s[2]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义完整功能（显示总数、尺寸切换、快速跳转）：",-1)),a(e(i),{total:200,"show-size-changer":"","show-quick-jumper":"","show-total":l=>`共 ${l} 条`,"class-names":{root:"custom-full-root",total:"custom-total",sizeChanger:"custom-size-changer",quickJumper:"custom-quick-jumper"}},null,8,["show-total"])]),n("div",null,[s[3]||(s[3]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义向前/向后跳转按钮：",-1)),a(e(i),{total:150,"class-names":{jumpPrev:"custom-jump",jumpNext:"custom-jump"}})]),n("div",null,[s[4]||(s[4]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),a(e(i),{total:80,styles:{root:{padding:"16px",background:"#f0f5ff",borderRadius:"8px"},item:{fontWeight:"bold"},itemActive:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none"}}})])]))}}),R=S(E,[["__scopeId","data-v-c02cebbe"]]),A=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器和页码项 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器与页码项：</div>
      <Pagination
        :total="50"
        :class-names="{
          root: 'custom-root',
          item: 'custom-item',
          itemActive: 'custom-item-active',
        }"
      />
    </div>

    <!-- 场景 2：自定义上一页/下一页按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义上一页/下一页按钮：</div>
      <Pagination
        :total="100"
        :class-names="{
          prev: 'custom-prev',
          next: 'custom-next',
        }"
      />
    </div>

    <!-- 场景 3：自定义完整功能 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义完整功能（显示总数、尺寸切换、快速跳转）：</div>
      <Pagination
        :total="200"
        show-size-changer
        show-quick-jumper
        :show-total="(total) => \`共 \${total} 条\`"
        :class-names="{
          root: 'custom-full-root',
          total: 'custom-total',
          sizeChanger: 'custom-size-changer',
          quickJumper: 'custom-quick-jumper',
        }"
      />
    </div>

    <!-- 场景 4：自定义跳转按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义向前/向后跳转按钮：</div>
      <Pagination
        :total="150"
        :class-names="{
          jumpPrev: 'custom-jump',
          jumpNext: 'custom-jump',
        }"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Pagination
        :total="80"
        :styles="{
          root: { padding: '16px', background: '#f0f5ff', borderRadius: '8px' },
          item: { fontWeight: 'bold' },
          itemActive: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pagination } from '@hmfw/ant-design'
<\/script>

<style scoped>
/* 场景 1：自定义根容器和页码项 */
:deep(.custom-root) {
  padding: 12px;
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border-radius: 8px;
}

:deep(.custom-item) {
  transition: all 0.3s;
}

:deep(.custom-item:hover) {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.3);
}

:deep(.custom-item-active) {
  background: linear-gradient(135deg, #1677ff 0%, #096dd9 100%) !important;
  border: none !important;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.4);
}

/* 场景 2：自定义上一页/下一页 */
:deep(.custom-prev),
:deep(.custom-next) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  color: white;
  font-weight: bold;
  transition: all 0.3s;
}

:deep(.custom-prev:hover),
:deep(.custom-next:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4);
}

/* 场景 3：自定义完整功能 */
:deep(.custom-full-root) {
  padding: 16px;
  background: #fff7e6;
  border-radius: 12px;
  border: 2px dashed #faad14;
}

:deep(.custom-total) {
  color: #d46b08;
  font-weight: bold;
  font-size: 15px;
}

:deep(.custom-size-changer) {
  background: #fffbe6;
  padding: 4px 8px;
  border-radius: 6px;
}

:deep(.custom-quick-jumper) {
  background: #fffbe6;
  padding: 4px 8px;
  border-radius: 6px;
}

:deep(.custom-quick-jumper input) {
  border-color: #faad14;
}

:deep(.custom-quick-jumper input:focus) {
  border-color: #d48806;
  box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
}

/* 场景 4：自定义跳转按钮 */
:deep(.custom-jump) {
  color: #722ed1;
  font-size: 18px;
  transition: all 0.3s;
}

:deep(.custom-jump:hover) {
  color: #531dab;
  transform: scale(1.2);
}
</style>
`,T={style:{"margin-top":"8px",color:"#666"}},V=h({__name:"PaginationItemRender",setup(k){const o=v(1),s=(c,p,m)=>p==="prev"?f("a","上一页"):p==="next"?f("a","下一页"):m,l=(c,p,m)=>p==="page"?f("a",{style:{display:"inline-block",padding:"0 8px",border:"1px solid #d9d9d9",borderRadius:"4px",fontWeight:"bold"}},`[${c}]`):m,t=(c,p,m)=>p==="page"?f("a",{href:`#page-${c}`},c):p==="prev"?f("a",{href:"#prev"},"← 上一页"):p==="next"?f("a",{href:"#next"},"下一页 →"):m,r=c=>{o.value=c};return(c,p)=>(g(),b(e(x),{direction:"vertical",style:{width:"100%"}},{default:d(()=>[n("div",null,[p[0]||(p[0]=n("h4",null,"自定义上一页/下一页文本",-1)),a(e(i),{total:50,"item-render":s})]),n("div",null,[p[1]||(p[1]=n("h4",null,"自定义页码样式",-1)),a(e(i),{total:100,"item-render":l})]),n("div",null,[p[2]||(p[2]=n("h4",null,"链接模式",-1)),a(e(i),{total:50,"item-render":t,onChange:r}),n("p",T,"点击页码查看链接效果（当前页："+y(o.value)+"）",1)])]),_:1}))}}),_=`<template>
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
import { Pagination, Space } from '@hmfw/ant-design'
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
`,B=h({__name:"PaginationMore",setup(k){const o=v(1),s=v(10),l=(r,c)=>{console.log("页码变化:",r,c)},t=(r,c)=>{console.log("每页条数变化:",r,c)};return(r,c)=>(g(),b(e(x),{direction:"vertical"},{default:d(()=>[a(e(i),{current:o.value,"onUpdate:current":c[0]||(c[0]=p=>o.value=p),"page-size":s.value,"onUpdate:pageSize":c[1]||(c[1]=p=>s.value=p),total:500,"show-size-changer":"","show-quick-jumper":"","show-total":(p,m)=>`第 ${m[0]}-${m[1]} 条，共 ${p} 条`,onChange:l,onShowSizeChange:t},null,8,["current","page-size","show-total"]),n("p",null,"当前页："+y(o.value)+"，每页条数："+y(s.value),1)]),_:1}))}}),J=`<template>
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
import { Pagination, Space } from '@hmfw/ant-design'

const current = ref(1)
const pageSize = ref(10)

const onChange = (page: number, size: number) => {
  console.log('页码变化:', page, size)
}

const onShowSizeChange = (cur: number, size: number) => {
  console.log('每页条数变化:', cur, size)
}
<\/script>
`,D=h({__name:"PaginationSimple",setup(k){const o=v(1);return(s,l)=>(g(),b(e(i),{current:o.value,"onUpdate:current":l[0]||(l[0]=t=>o.value=t),simple:"",total:50},null,8,["current"]))}}),U=`<template>
  <Pagination v-model:current="current" simple :total="50" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from '@hmfw/ant-design'

const current = ref(1)
<\/script>
`,W=h({__name:"PaginationSmall",setup(k){const o=v(1);return(s,l)=>(g(),b(e(x),{direction:"vertical"},{default:d(()=>[a(e(i),{current:o.value,"onUpdate:current":l[0]||(l[0]=t=>o.value=t),size:"small",total:50},null,8,["current"]),a(e(i),{current:o.value,"onUpdate:current":l[1]||(l[1]=t=>o.value=t),size:"small",total:50,"show-size-changer":"","show-quick-jumper":""},null,8,["current"])]),_:1}))}}),I=`<template>
  <Space direction="vertical">
    <Pagination v-model:current="current" size="small" :total="50" />
    <Pagination v-model:current="current" size="small" :total="50" show-size-changer show-quick-jumper />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from '@hmfw/ant-design'

const current = ref(1)
<\/script>
`,L={class:"markdown-body"},tn={__name:"pagination",setup(k,{expose:o}){return o({frontmatter:{}}),(l,t)=>{const r=q("DemoBlock");return g(),w("div",L,[t[0]||(t[0]=n("h1",{id:"pagination-分页",tabindex:"-1"},"Pagination 分页",-1)),t[1]||(t[1]=n("p",null,"采用分页的形式分隔长列表，每次只加载一个页面。",-1)),t[2]||(t[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"当加载/渲染所有数据将花费很多时间时"),n("li",null,"可切换页码浏览数据")],-1)),t[4]||(t[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"基础分页。",-1)),a(r,{title:"基础用法",source:e(j)},{default:d(()=>[a(N)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"更多功能",tabindex:"-1"},"更多功能",-1)),t[8]||(t[8]=n("p",null,"展示总数、切换每页条数、快速跳转。",-1)),a(r,{title:"更多功能",source:e(J)},{default:d(()=>[a(B)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"简洁模式",tabindex:"-1"},"简洁模式",-1)),t[10]||(t[10]=n("p",null,[u("通过 "),n("code",null,"simple"),u(" 属性设置简洁模式。")],-1)),a(r,{title:"简洁模式",source:e(U)},{default:d(()=>[a(D)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"小型分页",tabindex:"-1"},"小型分页",-1)),t[12]||(t[12]=n("p",null,[u("通过 "),n("code",null,'size="small"'),u(" 设置小型分页。")],-1)),a(r,{title:"小型分页",source:e(I)},{default:d(()=>[a(W)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"自定义渲染",tabindex:"-1"},"自定义渲染",-1)),t[14]||(t[14]=n("p",null,[u("通过 "),n("code",null,"itemRender"),u(" 自定义页码的结构，可以自定义上一页/下一页文本、页码样式或渲染为链接等。")],-1)),a(r,{title:"自定义渲染",source:e(_)},{default:d(()=>[a(V)]),_:1},8,["source"]),t[15]||(t[15]=n("h3",{id:"对齐方式",tabindex:"-1"},"对齐方式",-1)),t[16]||(t[16]=n("p",null,[u("通过 "),n("code",null,"align"),u(" 属性设置分页器的对齐方式，支持左对齐（默认）、居中对齐和右对齐。")],-1)),a(r,{title:"对齐方式",source:e(C)},{default:d(()=>[a(z)]),_:1},8,["source"]),t[17]||(t[17]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[18]||(t[18]=n("p",null,[u("通过 "),n("code",null,"classNames"),u(" / "),n("code",null,"styles"),u(" 对各子元素做细粒度样式控制。")],-1)),a(r,{title:"语义化 className 与 style",source:e(A)},{default:d(()=>[a(R)]),_:1},8,["source"]),t[19]||(t[19]=P(`<h2 id="api" tabindex="-1">API</h2><h3 id="pagination-props" tabindex="-1">Pagination Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页数（v-model）</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultCurrent</td><td>默认的当前页数</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>total</td><td>数据总数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>pageSize</td><td>每页条数（v-model）</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultPageSize</td><td>默认的每页条数</td><td><code>number</code></td><td><code>10</code></td></tr><tr><td>pageSizeOptions</td><td>指定每页可以显示多少条</td><td><code>number[]</code></td><td><code>[10, 20, 50, 100]</code></td></tr><tr><td>showSizeChanger</td><td>是否展示 pageSize 切换器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showQuickJumper</td><td>是否可以快速跳转至某页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showTotal</td><td>用于显示数据总量和当前数据顺序</td><td><code>(total: number, range: [number, number]) =&gt; string</code></td><td>-</td></tr><tr><td>size</td><td>当为 <code>small</code> 时，是小尺寸分页</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>simple</td><td>当添加该属性时，显示为简单分页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>禁用分页</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>hideOnSinglePage</td><td>只有一页时是否隐藏分页器</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>itemRender</td><td>自定义页码的结构，可以自定义上一页/下一页文本、页码样式等</td><td><code>(page: number, type: &#39;page&#39; | &#39;prev&#39; | &#39;next&#39; | &#39;jump-prev&#39; | &#39;jump-next&#39;, originalElement: VNode) =&gt; VNode</code></td><td>-</td></tr><tr><td>responsive</td><td>当屏幕尺寸小于 576px 时，自动变为 small</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>align</td><td>分页器的对齐方式，可选 <code>start</code>（左对齐）、<code>center</code>（居中）、<code>end</code>（右对齐）</td><td><code>&#39;start&#39; | &#39;center&#39; | &#39;end&#39;</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>PaginationClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>PaginationStyles</code></td><td>-</td></tr></tbody></table><h3 id="pagination-events" tabindex="-1">Pagination Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>页码或 pageSize 改变的回调</td><td><code>(page: number, pageSize: number) =&gt; void</code></td></tr><tr><td>showSizeChange</td><td>pageSize 变化的回调</td><td><code>(current: number, size: number) =&gt; void</code></td></tr><tr><td>update:current</td><td>当前页数变化时触发（v-model）</td><td><code>(page: number) =&gt; void</code></td></tr><tr><td>update:pageSize</td><td>每页条数变化时触发（v-model）</td><td><code>(size: number) =&gt; void</code></td></tr></tbody></table><h3 id="itemrender-函数参数" tabindex="-1">itemRender 函数参数</h3><p><code>itemRender</code> 用于自定义页码渲染，函数签名为：</p><pre class="language-typescript"><code class="language-typescript"><span class="token punctuation">;</span><span class="token punctuation">(</span>page<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> type<span class="token operator">:</span> ItemType<span class="token punctuation">,</span> originalElement<span class="token operator">:</span> VNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> VNode
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
</code></pre><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对分页器的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">PaginationClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器 ul.hmfw-pagination</span>
  total<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 总数显示区域 li.hmfw-pagination-total-text</span>
  prev<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 上一页按钮 li.hmfw-pagination-prev</span>
  next<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 下一页按钮 li.hmfw-pagination-next</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 页码项 li.hmfw-pagination-item</span>
  itemActive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 当前激活的页码项 li.hmfw-pagination-item-active</span>
  jumpPrev<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 向前跳转按钮 li.hmfw-pagination-jump-prev</span>
  jumpNext<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 向后跳转按钮 li.hmfw-pagination-jump-next</span>
  options<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选项容器 li.hmfw-pagination-options</span>
  sizeChanger<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 页码尺寸切换器（Select 组件容器）</span>
  quickJumper<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 快速跳转输入框容器 li.hmfw-pagination-options-quick-jumper</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PaginationStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  total<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  prev<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  next<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemActive<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  jumpPrev<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  jumpNext<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  options<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  sizeChanger<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  quickJumper<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>

  <span class="token comment">&lt;!-- 总数显示（当 showTotal 存在时） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination-total-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.total / styles.total 应用于此 --&gt;</span>
    共 100 条
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 上一页按钮 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination-prev<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.prev / styles.prev 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="&lt;">&amp;lt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 页码项 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 当前激活的页码项 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination-item hmfw-pagination-item-active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.item + classNames.itemActive 叠加应用 --&gt;</span>
    <span class="token comment">&lt;!-- ↑ styles.item + styles.itemActive 合并应用 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 向前跳转按钮（显示为省略号 •••） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination-jump-prev<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.jumpPrev / styles.jumpPrev 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>•••<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 向后跳转按钮（显示为省略号 •••） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination-jump-next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.jumpNext / styles.jumpNext 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>•••<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 下一页按钮 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination-next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.next / styles.next 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="&gt;">&amp;gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 选项容器（包含尺寸切换器和快速跳转） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination-options<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.options / styles.options 应用于此 --&gt;</span>

    <span class="token comment">&lt;!-- 页码尺寸切换器（当 showSizeChanger 为 true 时） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination-options-size-changer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.sizeChanger / styles.sizeChanger 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">&gt;</span></span>
        ...
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 快速跳转输入框（当 showQuickJumper 为 true 时） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-pagination-options-quick-jumper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.quickJumper / styles.quickJumper 应用于此 --&gt;</span>
      跳至 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/&gt;</span></span> 页
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义根容器和页码项 --&gt;
  &lt;Pagination
    :total=&quot;100&quot;
    :class-names=&quot;{
      root: &#39;custom-pagination&#39;,
      item: &#39;custom-item&#39;,
      itemActive: &#39;custom-active&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义上一页/下一页按钮 --&gt;
  &lt;Pagination
    :total=&quot;100&quot;
    :class-names=&quot;{
      prev: &#39;custom-prev&#39;,
      next: &#39;custom-next&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义完整功能 --&gt;
  &lt;Pagination
    :total=&quot;200&quot;
    show-size-changer
    show-quick-jumper
    :show-total=&quot;(total) =&gt; \`共 \${total} 条\`&quot;
    :class-names=&quot;{
      total: &#39;custom-total&#39;,
      sizeChanger: &#39;custom-size-changer&#39;,
      quickJumper: &#39;custom-quick-jumper&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.custom-pagination) {
  padding: 12px;
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  border-radius: 8px;
}

:deep(.custom-item:hover) {
  transform: scale(1.1);
  transition: all 0.3s;
}

:deep(.custom-active) {
  background: linear-gradient(135deg, #1677ff 0%, #096dd9 100%) !important;
  border: none !important;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.4);
}

:deep(.custom-prev),
:deep(.custom-next) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  color: white;
  font-weight: bold;
}

:deep(.custom-total) {
  color: #d46b08;
  font-weight: bold;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制根容器和页码项 --&gt;
  &lt;Pagination
    :total=&quot;80&quot;
    :styles=&quot;{
      root: { padding: &#39;16px&#39;, background: &#39;#f0f5ff&#39;, borderRadius: &#39;8px&#39; },
      item: { fontWeight: &#39;bold&#39; },
      itemActive: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        border: &#39;none&#39;,
      },
    }&quot;
  /&gt;

  &lt;!-- 自定义上一页/下一页按钮样式 --&gt;
  &lt;Pagination
    :total=&quot;100&quot;
    :styles=&quot;{
      prev: { background: &#39;#52c41a&#39;, color: &#39;white&#39;, border: &#39;none&#39; },
      next: { background: &#39;#52c41a&#39;, color: &#39;white&#39;, border: &#39;none&#39; },
    }&quot;
  /&gt;

  &lt;!-- 自定义总数和选项样式 --&gt;
  &lt;Pagination
    :total=&quot;200&quot;
    show-size-changer
    :show-total=&quot;(total) =&gt; \`共 \${total} 条\`&quot;
    :styles=&quot;{
      total: { color: &#39;#d46b08&#39;, fontWeight: &#39;bold&#39;, fontSize: &#39;15px&#39; },
      sizeChanger: { background: &#39;#fffbe6&#39;, padding: &#39;4px 8px&#39;, borderRadius: &#39;6px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>激活状态的页码项时，<code>classNames.itemActive</code> 与 <code>classNames.item</code> 会<strong>叠加</strong>应用在同一个 <code>&lt;li&gt;</code> 上</li><li>激活状态的页码项时，<code>styles.itemActive</code> 与 <code>styles.item</code> 会<strong>合并</strong>应用，<code>styles.itemActive</code> 优先</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-pagination-disabled</code>、<code>.hmfw-pagination-simple</code>）合并</li><li>当使用 <code>simple</code> 模式时，只有 <code>root</code>、<code>prev</code>、<code>next</code> 等基础 key 生效，跳转按钮和选项容器不会渲染</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Pagination 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><h3 id="颜色" tabindex="-1">颜色</h3><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr></tbody></table><h3 id="字体" tabindex="-1">字体</h3><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr></tbody></table><h3 id="边框" tabindex="-1">边框</h3><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr></tbody></table><h3 id="动效" tabindex="-1">动效</h3><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr></tbody></table>`,37))])}}};export{tn as default};
