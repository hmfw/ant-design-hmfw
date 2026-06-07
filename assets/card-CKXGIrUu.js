import{C as o,a as y}from"./index-BKN6uVb5.js";import{n as m,z as p,h as c,Q as n,g as d,J as a,m as r,l as s,D as g,j as f,I as h,G as x,k as v}from"./index-i0jnWELi.js";import"./cls-S9IiI6wd.js";const w=m({__name:"CardBasic",setup(u){return(i,e)=>(p(),c(a(o),{title:"卡片标题",style:{width:"300px"}},{default:n(()=>[...e[0]||(e[0]=[d("p",null,"卡片内容",-1),d("p",null,"卡片内容",-1),d("p",null,"卡片内容",-1)])]),_:1}))}}),_=`<template>
  <Card title="卡片标题" style="width: 300px;">
    <p>卡片内容</p>
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,G=m({__name:"CardCover",setup(u){return(i,e)=>(p(),c(a(o),{style:{width:"300px"}},{cover:n(()=>[...e[0]||(e[0]=[d("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",style:{width:"100%"}},null,-1)])]),default:n(()=>[r(a(y),{title:"卡片标题",description:"这是卡片的描述信息"})]),_:1}))}}),k=`<template>
  <Card style="width: 300px;">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        style="width: 100%;"
      />
    </template>
    <CardMeta
      title="卡片标题"
      description="这是卡片的描述信息"
    />
  </Card>
</template>

<script setup lang="ts">
import { Card, CardMeta } from 'ant-design-hmfw'
<\/script>
`,T=m({__name:"CardGrid",setup(u){return(i,e)=>(p(),c(a(o),{title:"网格卡片"},{default:n(()=>[r(a(o).Grid,null,{default:n(()=>[...e[0]||(e[0]=[s("内容 1",-1)])]),_:1}),r(a(o).Grid,null,{default:n(()=>[...e[1]||(e[1]=[s("内容 2",-1)])]),_:1}),r(a(o).Grid,null,{default:n(()=>[...e[2]||(e[2]=[s("内容 3",-1)])]),_:1}),r(a(o).Grid,null,{default:n(()=>[...e[3]||(e[3]=[s("内容 4",-1)])]),_:1}),r(a(o).Grid,null,{default:n(()=>[...e[4]||(e[4]=[s("内容 5",-1)])]),_:1}),r(a(o).Grid,null,{default:n(()=>[...e[5]||(e[5]=[s("内容 6",-1)])]),_:1})]),_:1}))}}),S=`<template>
  <Card title="网格卡片">
    <Card.Grid>内容 1</Card.Grid>
    <Card.Grid>内容 2</Card.Grid>
    <Card.Grid>内容 3</Card.Grid>
    <Card.Grid>内容 4</Card.Grid>
    <Card.Grid>内容 5</Card.Grid>
    <Card.Grid>内容 6</Card.Grid>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,B=m({__name:"CardInner",setup(u){return(i,e)=>(p(),c(a(o),{type:"inner",title:"内部卡片"},{default:n(()=>[...e[0]||(e[0]=[d("p",null,'type="inner" 用于卡片内部嵌套展示。',-1)])]),_:1}))}}),K=`<template>
  <Card type="inner" title="内部卡片">
    <p>type="inner" 用于卡片内部嵌套展示。</p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,M=m({__name:"CardLoading",setup(u){const i=g(!0);return(e,b)=>(p(),c(a(o),{title:"卡片标题",loading:i.value,style:{width:"300px"}},{default:n(()=>[...b[0]||(b[0]=[d("p",null,"卡片内容",-1),d("p",null,"卡片内容",-1)])]),_:1},8,["loading"]))}}),L=`<template>
  <Card title="卡片标题" :loading="loading" style="width: 300px;">
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'ant-design-hmfw'

const loading = ref(true)
<\/script>
`,$={style:{display:"flex",gap:"16px"}},A=m({__name:"CardLoadingAvatar",setup(u){return(i,e)=>(p(),f("div",$,[r(a(o),{loading:{avatar:!0,paragraph:{rows:4}},style:{width:"300px"}},{default:n(()=>[r(a(o).Meta,{title:"Card title",description:"This is the description"},{avatar:n(()=>[...e[0]||(e[0]=[d("img",{src:"https://via.placeholder.com/48",alt:"avatar",style:{"border-radius":"50%"}},null,-1)])]),_:1})]),_:1}),r(a(o),{loading:{paragraph:{rows:3}},style:{width:"300px"}},{default:n(()=>[...e[1]||(e[1]=[d("p",null,"Card content",-1)])]),_:1})]))}}),E=`<template>
  <div style="display: flex; gap: 16px;">
    <Card :loading="{ avatar: true, paragraph: { rows: 4 } }" style="width: 300px;">
      <Card.Meta
        title="Card title"
        description="This is the description"
      >
        <template #avatar>
          <img src="https://via.placeholder.com/48" alt="avatar" style="border-radius: 50%;" />
        </template>
      </Card.Meta>
    </Card>
    <Card :loading="{ paragraph: { rows: 3 } }" style="width: 300px;">
      <p>Card content</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,P=m({__name:"CardTabs",setup(u){const i=[{key:"tab1",label:"选项卡一"},{key:"tab2",label:"选项卡二"},{key:"tab3",label:"选项卡三"}],e={tab1:"选项卡一的内容",tab2:"选项卡二的内容",tab3:"选项卡三的内容"},b=g("tab1"),t=l=>{b.value=l,console.log("Tab changed:",l)};return(l,C)=>(p(),c(a(o),{title:"卡片标题",tabList:i,activeTabKey:b.value,onTabChange:t},{tabBarExtraContent:n(()=>[...C[0]||(C[0]=[d("a",{href:"#"},"更多",-1)])]),default:n(()=>[d("p",null,h(e[b.value]),1)]),_:1},8,["activeTabKey"]))}}),q=`<template>
  <Card
    title="卡片标题"
    :tabList="tabList"
    :activeTabKey="activeKey"
    @tabChange="onTabChange"
  >
    <template #tabBarExtraContent>
      <a href="#">更多</a>
    </template>
    <p>{{ contentMap[activeKey] }}</p>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'ant-design-hmfw'

const tabList = [
  { key: 'tab1', label: '选项卡一' },
  { key: 'tab2', label: '选项卡二' },
  { key: 'tab3', label: '选项卡三' },
]

const contentMap: Record<string, string> = {
  tab1: '选项卡一的内容',
  tab2: '选项卡二的内容',
  tab3: '选项卡三的内容',
}

const activeKey = ref('tab1')

const onTabChange = (key: string) => {
  activeKey.value = key
  console.log('Tab changed:', key)
}
<\/script>
`,z={class:"markdown-body"},V={__name:"card",setup(u,{expose:i}){return i({frontmatter:{}}),(b,t)=>{const l=x("DemoBlock");return p(),f("div",z,[t[0]||(t[0]=d("h1",{id:"card-",tabindex:"-1"},"Card 卡片",-1)),t[1]||(t[1]=d("p",null,"通用卡片容器。",-1)),t[2]||(t[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=d("ul",null,[d("li",null,"最基础的卡片容器，可承载文字、列表、图片、段落等内容"),d("li",null,"常用于后台概览页面")],-1)),t[4]||(t[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=d("h3",{id:"-2",tabindex:"-1"},"基础卡片",-1)),t[6]||(t[6]=d("p",null,"包含标题、内容、操作区域。",-1)),r(l,{title:"基础卡片",source:a(_)},{default:n(()=>[r(w)]),_:1},8,["source"]),t[7]||(t[7]=d("h3",{id:"-3",tabindex:"-1"},"带封面",-1)),t[8]||(t[8]=d("p",null,"可以配合 cover 插槽展示封面图片。",-1)),r(l,{title:"带封面",source:a(k)},{default:n(()=>[r(G)]),_:1},8,["source"]),t[9]||(t[9]=d("h3",{id:"-4",tabindex:"-1"},"加载中",-1)),t[10]||(t[10]=d("p",null,"数据读入前会有文本块样式。",-1)),r(l,{title:"加载中",source:a(L)},{default:n(()=>[r(M)]),_:1},8,["source"]),t[11]||(t[11]=d("h3",{id:"-5",tabindex:"-1"},"带头像的加载状态",-1)),t[12]||(t[12]=d("p",null,"可以通过对象配置骨架屏，支持头像和自定义段落行数。",-1)),r(l,{title:"带头像的加载状态",source:a(E)},{default:n(()=>[r(A)]),_:1},8,["source"]),t[13]||(t[13]=d("h3",{id:"-6",tabindex:"-1"},"网格卡片",-1)),t[14]||(t[14]=d("p",null,[s("通过 "),d("code",null,"Card.Grid"),s(" 在卡片内部划分等宽网格。")],-1)),r(l,{title:"网格卡片",source:a(S)},{default:n(()=>[r(T)]),_:1},8,["source"]),t[15]||(t[15]=d("h3",{id:"-7",tabindex:"-1"},"内部卡片",-1)),t[16]||(t[16]=d("p",null,[s("通过 "),d("code",null,'type="inner"'),s(" 用于卡片内部嵌套展示。")],-1)),r(l,{title:"内部卡片",source:a(K)},{default:n(()=>[r(B)]),_:1},8,["source"]),t[17]||(t[17]=d("h3",{id:"-8",tabindex:"-1"},"带标签页的卡片",-1)),t[18]||(t[18]=d("p",null,"可以在卡片头部集成标签页。",-1)),r(l,{title:"带标签页的卡片",source:a(q)},{default:n(()=>[r(P)]),_:1},8,["source"]),t[19]||(t[19]=v('<h2 id="api" tabindex="-1">API</h2><h3 id="card-props" tabindex="-1">Card Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题</td><td><code>string</code></td><td>-</td></tr><tr><td>extra</td><td>卡片右上角的操作区域</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>variant</td><td>边框变体（优先于 <code>bordered</code>）</td><td><code>&#39;borderless&#39; | &#39;outlined&#39;</code></td><td>-</td></tr><tr><td>type</td><td>卡片类型，可设为 <code>inner</code></td><td><code>&#39;inner&#39;</code></td><td>-</td></tr><tr><td>loading</td><td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td><td><code>boolean | { avatar?: boolean; paragraph?: { rows?: number } }</code></td><td><code>false</code></td></tr><tr><td>size</td><td>卡片的尺寸</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>hoverable</td><td>鼠标移过时可浮起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bodyStyle</td><td>内容区域自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>headStyle</td><td>标题区域自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>tabList</td><td>标签页列表</td><td><code>Array&lt;{ key: string; label: string; disabled?: boolean }&gt;</code></td><td>-</td></tr><tr><td>activeTabKey</td><td>当前激活标签的 key</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultActiveTabKey</td><td>默认激活标签的 key</td><td><code>string</code></td><td>-</td></tr><tr><td>onTabChange</td><td>标签切换回调</td><td><code>(key: string) =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="card-slots" tabindex="-1">Card Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>卡片内容</td></tr><tr><td>title</td><td>卡片标题</td></tr><tr><td>extra</td><td>卡片右上角的操作区域</td></tr><tr><td>cover</td><td>卡片封面</td></tr><tr><td>actions</td><td>卡片操作组</td></tr><tr><td>tabBarExtraContent</td><td>标签栏额外内容</td></tr></tbody></table><h3 id="card-events" tabindex="-1">Card Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tabChange</td><td>标签切换时触发</td><td><code>(key: string) =&gt; void</code></td></tr><tr><td>update:activeTabKey</td><td>标签切换时触发（支持 v-model）</td><td><code>(key: string) =&gt; void</code></td></tr></tbody></table><h3 id="cardgrid-props" tabindex="-1">Card.Grid Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>hoverable</td><td>鼠标移过时可浮起</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="cardmeta-props" tabindex="-1">CardMeta Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题内容</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>描述内容</td><td><code>string</code></td><td>-</td></tr><tr><td>avatar</td><td>头像/图标</td><td><code>string | slot</code></td><td>-</td></tr></tbody></table>',11))])}}};export{V as default};
