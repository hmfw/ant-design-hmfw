import{C as o,a as k}from"./index-CRNTpxq8.js";import{o as u,A as i,i as b,R as e,h as n,K as d,k as g,n as s,_ as x,m as p,E as f,J as y,H as C,l as v}from"./index-GV1C9GBE.js";import"./cls-S9IiI6wd.js";const w=u({__name:"CardBasic",setup(c){return(r,t)=>(i(),b(d(o),{title:"卡片标题",style:{width:"300px"}},{default:e(()=>[...t[0]||(t[0]=[n("p",null,"卡片内容",-1),n("p",null,"卡片内容",-1),n("p",null,"卡片内容",-1)])]),_:1}))}}),q=`<template>
  <Card title="卡片标题" style="width: 300px">
    <p>卡片内容</p>
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,S={class:"demo-card-classnames"},G={class:"demo-section"},_={class:"demo-section"},N={class:"demo-section"},T={class:"demo-section"},E={class:"demo-section"},B={class:"demo-section"},A={class:"demo-section"},P={class:"demo-section"},M=u({__name:"CardClassNames",setup(c){return(r,t)=>(i(),g("div",S,[n("section",G,[t[1]||(t[1]=n("h3",null,"1. 自定义根节点样式",-1)),s(d(o),{title:"自定义根节点","class-names":{root:"custom-root"}},{default:e(()=>[...t[0]||(t[0]=[n("p",null,"这是一个自定义根节点样式的卡片",-1)])]),_:1})]),n("section",_,[t[3]||(t[3]=n("h3",null,"2. 自定义头部样式",-1)),s(d(o),{title:"自定义头部","class-names":{head:"custom-head"}},{default:e(()=>[...t[2]||(t[2]=[n("p",null,"这是一个自定义头部样式的卡片",-1)])]),_:1})]),n("section",N,[t[5]||(t[5]=n("h3",null,"3. 自定义标题样式",-1)),s(d(o),{title:"渐变标题","class-names":{title:"custom-title"}},{default:e(()=>[...t[4]||(t[4]=[n("p",null,"这是一个自定义标题样式的卡片",-1)])]),_:1})]),n("section",T,[t[8]||(t[8]=n("h3",null,"4. 自定义扩展区域样式",-1)),s(d(o),{title:"标题","class-names":{extra:"custom-extra"}},{extra:e(()=>[...t[6]||(t[6]=[n("a",{href:"#"},"更多",-1)])]),default:e(()=>[t[7]||(t[7]=n("p",null,"这是一个自定义扩展区域样式的卡片",-1))]),_:1})]),n("section",E,[t[10]||(t[10]=n("h3",null,"5. 自定义主体内容样式",-1)),s(d(o),{title:"主体样式","class-names":{body:"custom-body"}},{default:e(()=>[...t[9]||(t[9]=[n("p",null,"这是一个自定义主体样式的卡片",-1),n("p",null,"内容可以有多个段落",-1)])]),_:1})]),n("section",B,[t[13]||(t[13]=n("h3",null,"6. 自定义操作区域样式",-1)),s(d(o),{title:"操作样式","class-names":{actions:"custom-actions"}},{actions:e(()=>[...t[11]||(t[11]=[n("li",null,[n("a",null,"设置")],-1),n("li",null,[n("a",null,"编辑")],-1),n("li",null,[n("a",null,"删除")],-1)])]),default:e(()=>[t[12]||(t[12]=n("p",null,"这是一个自定义操作区域样式的卡片",-1))]),_:1})]),n("section",A,[t[18]||(t[18]=n("h3",null,"7. 组合使用多个 classNames",-1)),s(d(o),{title:"综合样式","class-names":{root:"combined-root",head:"combined-head",title:"combined-title",body:"combined-body",actions:"combined-actions"}},{extra:e(()=>[...t[14]||(t[14]=[n("a",{href:"#"},"操作",-1)])]),actions:e(()=>[...t[15]||(t[15]=[n("li",null,[n("a",null,"操作 1")],-1),n("li",null,[n("a",null,"操作 2")],-1)])]),default:e(()=>[t[16]||(t[16]=n("p",null,"这是一个组合多个自定义样式的卡片",-1)),t[17]||(t[17]=n("p",null,"所有部分都有自定义样式",-1))]),_:1})]),n("section",P,[t[20]||(t[20]=n("h3",null,"8. 使用 styles 动态样式",-1)),s(d(o),{title:"动态样式卡片",styles:{root:{border:"2px solid #1890ff",borderRadius:"12px"},head:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white"},title:{fontWeight:"bold",fontSize:"18px"},body:{padding:"24px",background:"#f0f2f5"}}},{default:e(()=>[...t[19]||(t[19]=[n("p",null,"这是一个使用动态样式的卡片",-1)])]),_:1})])]))}}),$=x(M,[["__scopeId","data-v-74887e82"]]),K=`<template>
  <div class="demo-card-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <Card title="自定义根节点" :class-names="{ root: 'custom-root' }">
        <p>这是一个自定义根节点样式的卡片</p>
      </Card>
    </section>

    <!-- 场景 2: 自定义头部 -->
    <section class="demo-section">
      <h3>2. 自定义头部样式</h3>
      <Card title="自定义头部" :class-names="{ head: 'custom-head' }">
        <p>这是一个自定义头部样式的卡片</p>
      </Card>
    </section>

    <!-- 场景 3: 自定义标题 -->
    <section class="demo-section">
      <h3>3. 自定义标题样式</h3>
      <Card title="渐变标题" :class-names="{ title: 'custom-title' }">
        <p>这是一个自定义标题样式的卡片</p>
      </Card>
    </section>

    <!-- 场景 4: 自定义扩展区域 -->
    <section class="demo-section">
      <h3>4. 自定义扩展区域样式</h3>
      <Card title="标题" :class-names="{ extra: 'custom-extra' }">
        <template #extra>
          <a href="#">更多</a>
        </template>
        <p>这是一个自定义扩展区域样式的卡片</p>
      </Card>
    </section>

    <!-- 场景 5: 自定义主体内容 -->
    <section class="demo-section">
      <h3>5. 自定义主体内容样式</h3>
      <Card title="主体样式" :class-names="{ body: 'custom-body' }">
        <p>这是一个自定义主体样式的卡片</p>
        <p>内容可以有多个段落</p>
      </Card>
    </section>

    <!-- 场景 6: 自定义操作区域 -->
    <section class="demo-section">
      <h3>6. 自定义操作区域样式</h3>
      <Card title="操作样式" :class-names="{ actions: 'custom-actions' }">
        <p>这是一个自定义操作区域样式的卡片</p>
        <template #actions>
          <li><a>设置</a></li>
          <li><a>编辑</a></li>
          <li><a>删除</a></li>
        </template>
      </Card>
    </section>

    <!-- 场景 7: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>7. 组合使用多个 classNames</h3>
      <Card
        title="综合样式"
        :class-names="{
          root: 'combined-root',
          head: 'combined-head',
          title: 'combined-title',
          body: 'combined-body',
          actions: 'combined-actions',
        }"
      >
        <template #extra>
          <a href="#">操作</a>
        </template>
        <p>这是一个组合多个自定义样式的卡片</p>
        <p>所有部分都有自定义样式</p>
        <template #actions>
          <li><a>操作 1</a></li>
          <li><a>操作 2</a></li>
        </template>
      </Card>
    </section>

    <!-- 场景 8: 使用 styles prop -->
    <section class="demo-section">
      <h3>8. 使用 styles 动态样式</h3>
      <Card
        title="动态样式卡片"
        :styles="{
          root: { border: '2px solid #1890ff', borderRadius: '12px' },
          head: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' },
          title: { fontWeight: 'bold', fontSize: '18px' },
          body: { padding: '24px', background: '#f0f2f5' },
        }"
      >
        <p>这是一个使用动态样式的卡片</p>
      </Card>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card } from '../../../components'
<\/script>

<style scoped>
.demo-card-classnames {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义根节点 */
:deep(.custom-root) {
  border: 3px solid #722ed1;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(114, 46, 209, 0.2);
  transition: all 0.3s ease;
}

:deep(.custom-root:hover) {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(114, 46, 209, 0.3);
}

/* 场景 2: 自定义头部 */
:deep(.custom-head) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px 8px 0 0;
}

:deep(.custom-head .hmfw-card-head-title) {
  color: white;
}

/* 场景 3: 自定义标题 */
:deep(.custom-title) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 20px;
}

/* 场景 4: 自定义扩展区域 */
:deep(.custom-extra a) {
  padding: 4px 12px;
  background: #1890ff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

:deep(.custom-extra a:hover) {
  background: #40a9ff;
  transform: scale(1.05);
}

/* 场景 5: 自定义主体内容 */
:deep(.custom-body) {
  background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
  padding: 24px;
  border-radius: 8px;
  color: #1890ff;
  font-weight: 500;
}

/* 场景 6: 自定义操作区域 */
:deep(.custom-actions) {
  background: #f0f2f5;
  border-radius: 0 0 8px 8px;
}

:deep(.custom-actions li) {
  transition: all 0.3s ease;
}

:deep(.custom-actions li:hover) {
  background: #e6f7ff;
  transform: translateY(-2px);
}

:deep(.custom-actions a) {
  color: #1890ff;
  font-weight: 600;
}

/* 场景 7: 组合样式 */
:deep(.combined-root) {
  border: 2px dashed #52c41a;
  border-radius: 16px;
  background: #f6ffed;
  transition: all 0.3s ease;
}

:deep(.combined-root:hover) {
  border-color: #73d13d;
  background: #d9f7be;
}

:deep(.combined-head) {
  background: #52c41a;
  color: white;
  border-radius: 14px 14px 0 0;
}

:deep(.combined-title) {
  color: white;
  font-weight: 700;
}

:deep(.combined-body) {
  padding: 24px;
  color: #389e0d;
}

:deep(.combined-actions) {
  background: #d9f7be;
}

:deep(.combined-actions a) {
  color: #389e0d;
  font-weight: 600;
}
</style>
`,L=u({__name:"CardCover",setup(c){return(r,t)=>(i(),b(d(o),{style:{width:"300px"}},{cover:e(()=>[...t[0]||(t[0]=[n("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",style:{width:"100%"}},null,-1)])]),default:e(()=>[s(d(k),{title:"卡片标题",description:"这是卡片的描述信息"})]),_:1}))}}),z=`<template>
  <Card style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        style="width: 100%"
      />
    </template>
    <CardMeta title="卡片标题" description="这是卡片的描述信息" />
  </Card>
</template>

<script setup lang="ts">
import { Card, CardMeta } from 'ant-design-hmfw'
<\/script>
`,D=u({__name:"CardGrid",setup(c){return(r,t)=>(i(),b(d(o),{title:"网格卡片"},{default:e(()=>[s(d(o).Grid,null,{default:e(()=>[...t[0]||(t[0]=[p("内容 1",-1)])]),_:1}),s(d(o).Grid,null,{default:e(()=>[...t[1]||(t[1]=[p("内容 2",-1)])]),_:1}),s(d(o).Grid,null,{default:e(()=>[...t[2]||(t[2]=[p("内容 3",-1)])]),_:1}),s(d(o).Grid,null,{default:e(()=>[...t[3]||(t[3]=[p("内容 4",-1)])]),_:1}),s(d(o).Grid,null,{default:e(()=>[...t[4]||(t[4]=[p("内容 5",-1)])]),_:1}),s(d(o).Grid,null,{default:e(()=>[...t[5]||(t[5]=[p("内容 6",-1)])]),_:1})]),_:1}))}}),R=`<template>
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
`,I=u({__name:"CardInner",setup(c){return(r,t)=>(i(),b(d(o),{type:"inner",title:"内部卡片"},{default:e(()=>[...t[0]||(t[0]=[n("p",null,'type="inner" 用于卡片内部嵌套展示。',-1)])]),_:1}))}}),V=`<template>
  <Card type="inner" title="内部卡片">
    <p>type="inner" 用于卡片内部嵌套展示。</p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,W=u({__name:"CardLoading",setup(c){const r=f(!0);return(t,m)=>(i(),b(d(o),{title:"卡片标题",loading:r.value,style:{width:"300px"}},{default:e(()=>[...m[0]||(m[0]=[n("p",null,"卡片内容",-1),n("p",null,"卡片内容",-1)])]),_:1},8,["loading"]))}}),H=`<template>
  <Card title="卡片标题" :loading="loading" style="width: 300px">
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from 'ant-design-hmfw'

const loading = ref(true)
<\/script>
`,J={style:{display:"flex",gap:"16px"}},O=u({__name:"CardLoadingAvatar",setup(c){return(r,t)=>(i(),g("div",J,[s(d(o),{loading:{avatar:!0,paragraph:{rows:4}},style:{width:"300px"}},{default:e(()=>[s(d(o).Meta,{title:"Card title",description:"This is the description"},{avatar:e(()=>[...t[0]||(t[0]=[n("img",{src:"https://via.placeholder.com/48",alt:"avatar",style:{"border-radius":"50%"}},null,-1)])]),_:1})]),_:1}),s(d(o),{loading:{paragraph:{rows:3}},style:{width:"300px"}},{default:e(()=>[...t[1]||(t[1]=[n("p",null,"Card content",-1)])]),_:1})]))}}),j=`<template>
  <div style="display: flex; gap: 16px">
    <Card :loading="{ avatar: true, paragraph: { rows: 4 } }" style="width: 300px">
      <Card.Meta title="Card title" description="This is the description">
        <template #avatar>
          <img src="https://via.placeholder.com/48" alt="avatar" style="border-radius: 50%" />
        </template>
      </Card.Meta>
    </Card>
    <Card :loading="{ paragraph: { rows: 3 } }" style="width: 300px">
      <p>Card content</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-hmfw'
<\/script>
`,F=u({__name:"CardTabs",setup(c){const r=[{key:"tab1",label:"选项卡一"},{key:"tab2",label:"选项卡二"},{key:"tab3",label:"选项卡三"}],t={tab1:"选项卡一的内容",tab2:"选项卡二的内容",tab3:"选项卡三的内容"},m=f("tab1"),a=l=>{m.value=l,console.log("Tab changed:",l)};return(l,h)=>(i(),b(d(o),{title:"卡片标题","tab-list":r,"active-tab-key":m.value,onTabChange:a},{tabBarExtraContent:e(()=>[...h[0]||(h[0]=[n("a",{href:"#"},"更多",-1)])]),default:e(()=>[n("p",null,y(t[m.value]),1)]),_:1},8,["active-tab-key"]))}}),Y=`<template>
  <Card title="卡片标题" :tab-list="tabList" :active-tab-key="activeKey" @tab-change="onTabChange">
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
`,Q={class:"markdown-body"},tt={__name:"card",setup(c,{expose:r}){return r({frontmatter:{}}),(m,a)=>{const l=C("DemoBlock");return i(),g("div",Q,[a[0]||(a[0]=n("h1",{id:"card-",tabindex:"-1"},"Card 卡片",-1)),a[1]||(a[1]=n("p",null,"通用卡片容器。",-1)),a[2]||(a[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=n("ul",null,[n("li",null,"最基础的卡片容器，可承载文字、列表、图片、段落等内容"),n("li",null,"常用于后台概览页面")],-1)),a[4]||(a[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=n("h3",{id:"-2",tabindex:"-1"},"基础卡片",-1)),a[6]||(a[6]=n("p",null,"包含标题、内容、操作区域。",-1)),s(l,{title:"基础卡片",source:d(q)},{default:e(()=>[s(w)]),_:1},8,["source"]),a[7]||(a[7]=n("h3",{id:"-3",tabindex:"-1"},"带封面",-1)),a[8]||(a[8]=n("p",null,"可以配合 cover 插槽展示封面图片。",-1)),s(l,{title:"带封面",source:d(z)},{default:e(()=>[s(L)]),_:1},8,["source"]),a[9]||(a[9]=n("h3",{id:"-4",tabindex:"-1"},"加载中",-1)),a[10]||(a[10]=n("p",null,"数据读入前会有文本块样式。",-1)),s(l,{title:"加载中",source:d(H)},{default:e(()=>[s(W)]),_:1},8,["source"]),a[11]||(a[11]=n("h3",{id:"-5",tabindex:"-1"},"带头像的加载状态",-1)),a[12]||(a[12]=n("p",null,"可以通过对象配置骨架屏，支持头像和自定义段落行数。",-1)),s(l,{title:"带头像的加载状态",source:d(j)},{default:e(()=>[s(O)]),_:1},8,["source"]),a[13]||(a[13]=n("h3",{id:"-6",tabindex:"-1"},"网格卡片",-1)),a[14]||(a[14]=n("p",null,[p("通过 "),n("code",null,"Card.Grid"),p(" 在卡片内部划分等宽网格。")],-1)),s(l,{title:"网格卡片",source:d(R)},{default:e(()=>[s(D)]),_:1},8,["source"]),a[15]||(a[15]=n("h3",{id:"-7",tabindex:"-1"},"内部卡片",-1)),a[16]||(a[16]=n("p",null,[p("通过 "),n("code",null,'type="inner"'),p(" 用于卡片内部嵌套展示。")],-1)),s(l,{title:"内部卡片",source:d(V)},{default:e(()=>[s(I)]),_:1},8,["source"]),a[17]||(a[17]=n("h3",{id:"-8",tabindex:"-1"},"带标签页的卡片",-1)),a[18]||(a[18]=n("p",null,"可以在卡片头部集成标签页。",-1)),s(l,{title:"带标签页的卡片",source:d(Y)},{default:e(()=>[s(F)]),_:1},8,["source"]),a[19]||(a[19]=v(`<h2 id="api" tabindex="-1">API</h2><h3 id="card-props" tabindex="-1">Card Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题</td><td><code>string</code></td><td>-</td></tr><tr><td>extra</td><td>卡片右上角的操作区域</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>variant</td><td>边框变体（优先于 <code>bordered</code>）</td><td><code>&#39;borderless&#39; | &#39;outlined&#39;</code></td><td>-</td></tr><tr><td>type</td><td>卡片类型，可设为 <code>inner</code></td><td><code>&#39;inner&#39;</code></td><td>-</td></tr><tr><td>loading</td><td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td><td><code>boolean | { avatar?: boolean; paragraph?: { rows?: number } }</code></td><td><code>false</code></td></tr><tr><td>size</td><td>卡片的尺寸</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>hoverable</td><td>鼠标移过时可浮起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bodyStyle</td><td>内容区域自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>headStyle</td><td>标题区域自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>tabList</td><td>标签页列表</td><td><code>Array&lt;{ key: string; label: string; disabled?: boolean }&gt;</code></td><td>-</td></tr><tr><td>activeTabKey</td><td>当前激活标签的 key</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultActiveTabKey</td><td>默认激活标签的 key</td><td><code>string</code></td><td>-</td></tr><tr><td>onTabChange</td><td>标签切换回调</td><td><code>(key: string) =&gt; void</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname">详见下方</a>）</td><td><code>CardClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-style">详见下方</a>）</td><td><code>CardStyles</code></td><td>-</td></tr></tbody></table><h3 id="card-slots" tabindex="-1">Card Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>卡片内容</td></tr><tr><td>title</td><td>卡片标题</td></tr><tr><td>extra</td><td>卡片右上角的操作区域</td></tr><tr><td>cover</td><td>卡片封面</td></tr><tr><td>actions</td><td>卡片操作组</td></tr><tr><td>tabBarExtraContent</td><td>标签栏额外内容</td></tr></tbody></table><h3 id="card-events" tabindex="-1">Card Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tabChange</td><td>标签切换时触发</td><td><code>(key: string) =&gt; void</code></td></tr><tr><td>update:activeTabKey</td><td>标签切换时触发（支持 v-model）</td><td><code>(key: string) =&gt; void</code></td></tr></tbody></table><h3 id="cardgrid-props" tabindex="-1">Card.Grid Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>hoverable</td><td>鼠标移过时可浮起</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="cardmeta-props" tabindex="-1">CardMeta Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题内容</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>描述内容</td><td><code>string</code></td><td>-</td></tr><tr><td>avatar</td><td>头像/图标</td><td><code>string | slot</code></td><td>-</td></tr></tbody></table><h2 id="-classname" tabindex="-1">语义化 className</h2><p>通过 <code>classNames</code> 属性可以自定义 Card 各部分的 className。</p><h3 id="cardclassnames" tabindex="-1">CardClassNames</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>root</td><td>根节点 <code>div.hmfw-card</code></td><td><code>string</code></td><td>-</td></tr><tr><td>head</td><td>头部容器 <code>div.hmfw-card-head</code></td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>标题 <code>div.hmfw-card-head-title</code></td><td><code>string</code></td><td>-</td></tr><tr><td>extra</td><td>右侧扩展 <code>div.hmfw-card-extra</code></td><td><code>string</code></td><td>-</td></tr><tr><td>body</td><td>主体内容 <code>div.hmfw-card-body</code></td><td><code>string</code></td><td>-</td></tr><tr><td>actions</td><td>底部操作 <code>ul.hmfw-card-actions</code></td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="dom-" tabindex="-1">DOM 结构</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- root --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-cover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>封面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-head<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- head --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-head-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-head-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- title --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-extra<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>扩展<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- extra --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- body --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    操作组
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- actions --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="-9" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Card
    title=&quot;标题&quot;
    :classNames=&quot;{
      root: &#39;my-card-root&#39;,
      head: &#39;my-card-head&#39;,
      title: &#39;my-card-title&#39;,
      body: &#39;my-card-body&#39;,
      actions: &#39;my-card-actions&#39;,
    }&quot;
  &gt;
    内容
  &lt;/Card&gt;
&lt;/template&gt;
</code></pre><p><strong>注意事项：</strong></p><ul><li><code>title</code> 仅在设置了 <code>title</code> 属性或 <code>title</code> 插槽时渲染</li><li><code>extra</code> 仅在设置了 <code>extra</code> 插槽时渲染</li><li><code>actions</code> 仅在设置了 <code>actions</code> 插槽时渲染</li><li><code>styles.head</code> 会与 <code>headStyle</code> 合并，<code>styles.body</code> 会与 <code>bodyStyle</code> 合并</li></ul><h2 id="-style" tabindex="-1">语义化 style</h2><p>通过 <code>styles</code> 属性可以自定义 Card 各部分的 style。</p><h3 id="cardstyles" tabindex="-1">CardStyles</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>root</td><td>根节点 <code>div.hmfw-card</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>head</td><td>头部容器 <code>div.hmfw-card-head</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>title</td><td>标题 <code>div.hmfw-card-head-title</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>extra</td><td>右侧扩展 <code>div.hmfw-card-extra</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>body</td><td>主体内容 <code>div.hmfw-card-body</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>actions</td><td>底部操作 <code>ul.hmfw-card-actions</code></td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="-10" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Card
    title=&quot;动态样式&quot;
    :styles=&quot;{
      root: { border: &#39;2px solid #1890ff&#39;, borderRadius: &#39;12px&#39; },
      head: { background: &#39;#667eea&#39;, color: &#39;white&#39; },
      body: { padding: &#39;24px&#39; },
    }&quot;
  &gt;
    内容
  &lt;/Card&gt;
&lt;/template&gt;
</code></pre><h3 id="-classname--style" tabindex="-1">语义化 className 与 style</h3>`,28)),s(l,{title:"语义化 className 与 style",source:d(K)},{default:e(()=>[s($)]),_:1},8,["source"])])}}};export{tt as default};
