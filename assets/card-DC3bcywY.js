import{C as d,a as h}from"./index-YXdMhGwC.js";import{o as u,A as i,i as b,Q as s,h as t,L as o,k as g,n as e,_ as y,m as l,E as f,K as x,H as C,l as v}from"./index-Bxt2WIDN.js";import"./cls-S9IiI6wd.js";const w=u({__name:"CardBasic",setup(c){return(p,n)=>(i(),b(o(d),{title:"卡片标题",style:{width:"300px"}},{default:s(()=>[...n[0]||(n[0]=[t("p",null,"卡片内容",-1),t("p",null,"卡片内容",-1),t("p",null,"卡片内容",-1)])]),_:1}))}}),S=`<template>
  <Card title="卡片标题" style="width: 300px">
    <p>卡片内容</p>
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from '@hmfw/ant-design'
<\/script>
`,q={class:"demo-card-classnames"},N={class:"demo-section"},G={class:"demo-section"},_={class:"demo-section"},E={class:"demo-section"},T={class:"demo-section"},B={class:"demo-section"},P={class:"demo-section"},A={class:"demo-section"},M=u({__name:"CardClassNames",setup(c){return(p,n)=>(i(),g("div",q,[t("section",N,[n[1]||(n[1]=t("h3",null,"1. 自定义根节点样式",-1)),e(o(d),{title:"自定义根节点","class-names":{root:"custom-root"}},{default:s(()=>[...n[0]||(n[0]=[t("p",null,"这是一个自定义根节点样式的卡片",-1)])]),_:1})]),t("section",G,[n[3]||(n[3]=t("h3",null,"2. 自定义头部样式",-1)),e(o(d),{title:"自定义头部","class-names":{head:"custom-head"}},{default:s(()=>[...n[2]||(n[2]=[t("p",null,"这是一个自定义头部样式的卡片",-1)])]),_:1})]),t("section",_,[n[5]||(n[5]=t("h3",null,"3. 自定义标题样式",-1)),e(o(d),{title:"渐变标题","class-names":{title:"custom-title"}},{default:s(()=>[...n[4]||(n[4]=[t("p",null,"这是一个自定义标题样式的卡片",-1)])]),_:1})]),t("section",E,[n[8]||(n[8]=t("h3",null,"4. 自定义扩展区域样式",-1)),e(o(d),{title:"标题","class-names":{extra:"custom-extra"}},{extra:s(()=>[...n[6]||(n[6]=[t("a",{href:"#"},"更多",-1)])]),default:s(()=>[n[7]||(n[7]=t("p",null,"这是一个自定义扩展区域样式的卡片",-1))]),_:1})]),t("section",T,[n[10]||(n[10]=t("h3",null,"5. 自定义主体内容样式",-1)),e(o(d),{title:"主体样式","class-names":{body:"custom-body"}},{default:s(()=>[...n[9]||(n[9]=[t("p",null,"这是一个自定义主体样式的卡片",-1),t("p",null,"内容可以有多个段落",-1)])]),_:1})]),t("section",B,[n[13]||(n[13]=t("h3",null,"6. 自定义操作区域样式",-1)),e(o(d),{title:"操作样式","class-names":{actions:"custom-actions"}},{actions:s(()=>[...n[11]||(n[11]=[t("li",null,[t("a",null,"设置")],-1),t("li",null,[t("a",null,"编辑")],-1),t("li",null,[t("a",null,"删除")],-1)])]),default:s(()=>[n[12]||(n[12]=t("p",null,"这是一个自定义操作区域样式的卡片",-1))]),_:1})]),t("section",P,[n[18]||(n[18]=t("h3",null,"7. 组合使用多个 classNames",-1)),e(o(d),{title:"综合样式","class-names":{root:"combined-root",head:"combined-head",title:"combined-title",body:"combined-body",actions:"combined-actions"}},{extra:s(()=>[...n[14]||(n[14]=[t("a",{href:"#"},"操作",-1)])]),actions:s(()=>[...n[15]||(n[15]=[t("li",null,[t("a",null,"操作 1")],-1),t("li",null,[t("a",null,"操作 2")],-1)])]),default:s(()=>[n[16]||(n[16]=t("p",null,"这是一个组合多个自定义样式的卡片",-1)),n[17]||(n[17]=t("p",null,"所有部分都有自定义样式",-1))]),_:1})]),t("section",A,[n[20]||(n[20]=t("h3",null,"8. 使用 styles 动态样式",-1)),e(o(d),{title:"动态样式卡片",styles:{root:{border:"2px solid #1890ff",borderRadius:"12px"},head:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white"},title:{fontWeight:"bold",fontSize:"18px"},body:{padding:"24px",background:"#f0f2f5"}}},{default:s(()=>[...n[19]||(n[19]=[t("p",null,"这是一个使用动态样式的卡片",-1)])]),_:1})])]))}}),$=y(M,[["__scopeId","data-v-5cf5e317"]]),K=`<template>
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
import { Card } from '@hmfw/ant-design'
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
`,L=u({__name:"CardCover",setup(c){return(p,n)=>(i(),b(o(d),{style:{width:"300px"}},{cover:s(()=>[...n[0]||(n[0]=[t("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",style:{width:"100%"}},null,-1)])]),default:s(()=>[e(o(h),{title:"卡片标题",description:"这是卡片的描述信息"})]),_:1}))}}),z=`<template>
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
import { Card, CardMeta } from '@hmfw/ant-design'
<\/script>
`,D=u({__name:"CardGrid",setup(c){return(p,n)=>(i(),b(o(d),{title:"网格卡片"},{default:s(()=>[e(o(d).Grid,null,{default:s(()=>[...n[0]||(n[0]=[l("内容 1",-1)])]),_:1}),e(o(d).Grid,null,{default:s(()=>[...n[1]||(n[1]=[l("内容 2",-1)])]),_:1}),e(o(d).Grid,null,{default:s(()=>[...n[2]||(n[2]=[l("内容 3",-1)])]),_:1}),e(o(d).Grid,null,{default:s(()=>[...n[3]||(n[3]=[l("内容 4",-1)])]),_:1}),e(o(d).Grid,null,{default:s(()=>[...n[4]||(n[4]=[l("内容 5",-1)])]),_:1}),e(o(d).Grid,null,{default:s(()=>[...n[5]||(n[5]=[l("内容 6",-1)])]),_:1})]),_:1}))}}),I=`<template>
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
import { Card } from '@hmfw/ant-design'
<\/script>
`,R=u({__name:"CardInner",setup(c){return(p,n)=>(i(),b(o(d),{type:"inner",title:"内部卡片"},{default:s(()=>[...n[0]||(n[0]=[t("p",null,'type="inner" 用于卡片内部嵌套展示。',-1)])]),_:1}))}}),V=`<template>
  <Card type="inner" title="内部卡片">
    <p>type="inner" 用于卡片内部嵌套展示。</p>
  </Card>
</template>

<script setup lang="ts">
import { Card } from '@hmfw/ant-design'
<\/script>
`,W=u({__name:"CardLoading",setup(c){const p=f(!0);return(n,m)=>(i(),b(o(d),{title:"卡片标题",loading:p.value,style:{width:"300px"}},{default:s(()=>[...m[0]||(m[0]=[t("p",null,"卡片内容",-1),t("p",null,"卡片内容",-1)])]),_:1},8,["loading"]))}}),H=`<template>
  <Card title="卡片标题" :loading="loading" style="width: 300px">
    <p>卡片内容</p>
    <p>卡片内容</p>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from '@hmfw/ant-design'

const loading = ref(true)
<\/script>
`,O={style:{display:"flex",gap:"16px"}},j=u({__name:"CardLoadingAvatar",setup(c){return(p,n)=>(i(),g("div",O,[e(o(d),{loading:{avatar:!0,paragraph:{rows:4}},style:{width:"300px"}},{default:s(()=>[e(o(d).Meta,{title:"Card title",description:"This is the description"},{avatar:s(()=>[...n[0]||(n[0]=[t("img",{src:"https://via.placeholder.com/48",alt:"avatar",style:{"border-radius":"50%"}},null,-1)])]),_:1})]),_:1}),e(o(d),{loading:{paragraph:{rows:3}},style:{width:"300px"}},{default:s(()=>[...n[1]||(n[1]=[t("p",null,"Card content",-1)])]),_:1})]))}}),F=`<template>
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
import { Card } from '@hmfw/ant-design'
<\/script>
`,J=u({__name:"CardTabs",setup(c){const p=[{key:"tab1",label:"选项卡一"},{key:"tab2",label:"选项卡二"},{key:"tab3",label:"选项卡三"}],n={tab1:"选项卡一的内容",tab2:"选项卡二的内容",tab3:"选项卡三的内容"},m=f("tab1"),a=r=>{m.value=r,console.log("Tab changed:",r)};return(r,k)=>(i(),b(o(d),{title:"卡片标题","tab-list":p,"active-tab-key":m.value,onTabChange:a},{tabBarExtraContent:s(()=>[...k[0]||(k[0]=[t("a",{href:"#"},"更多",-1)])]),default:s(()=>[t("p",null,x(n[m.value]),1)]),_:1},8,["active-tab-key"]))}}),Y=`<template>
  <Card title="卡片标题" :tab-list="tabList" :active-tab-key="activeKey" @tab-change="onTabChange">
    <template #tabBarExtraContent>
      <a href="#">更多</a>
    </template>
    <p>{{ contentMap[activeKey] }}</p>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from '@hmfw/ant-design'

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
`,Q={class:"markdown-body"},tt={__name:"card",setup(c,{expose:p}){return p({frontmatter:{}}),(m,a)=>{const r=C("DemoBlock");return i(),g("div",Q,[a[0]||(a[0]=t("h1",{id:"card-卡片",tabindex:"-1"},"Card 卡片",-1)),a[1]||(a[1]=t("p",null,"通用卡片容器。",-1)),a[2]||(a[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=t("ul",null,[t("li",null,"最基础的卡片容器，可承载文字、列表、图片、段落等内容"),t("li",null,"常用于后台概览页面")],-1)),a[4]||(a[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=t("h3",{id:"基础卡片",tabindex:"-1"},"基础卡片",-1)),a[6]||(a[6]=t("p",null,"包含标题、内容、操作区域。",-1)),e(r,{title:"基础卡片",source:o(S)},{default:s(()=>[e(w)]),_:1},8,["source"]),a[7]||(a[7]=t("h3",{id:"带封面",tabindex:"-1"},"带封面",-1)),a[8]||(a[8]=t("p",null,"可以配合 cover 插槽展示封面图片。",-1)),e(r,{title:"带封面",source:o(z)},{default:s(()=>[e(L)]),_:1},8,["source"]),a[9]||(a[9]=t("h3",{id:"加载中",tabindex:"-1"},"加载中",-1)),a[10]||(a[10]=t("p",null,"数据读入前会有文本块样式。",-1)),e(r,{title:"加载中",source:o(H)},{default:s(()=>[e(W)]),_:1},8,["source"]),a[11]||(a[11]=t("h3",{id:"带头像的加载状态",tabindex:"-1"},"带头像的加载状态",-1)),a[12]||(a[12]=t("p",null,"可以通过对象配置骨架屏，支持头像和自定义段落行数。",-1)),e(r,{title:"带头像的加载状态",source:o(F)},{default:s(()=>[e(j)]),_:1},8,["source"]),a[13]||(a[13]=t("h3",{id:"网格卡片",tabindex:"-1"},"网格卡片",-1)),a[14]||(a[14]=t("p",null,[l("通过 "),t("code",null,"Card.Grid"),l(" 在卡片内部划分等宽网格。")],-1)),e(r,{title:"网格卡片",source:o(I)},{default:s(()=>[e(D)]),_:1},8,["source"]),a[15]||(a[15]=t("h3",{id:"内部卡片",tabindex:"-1"},"内部卡片",-1)),a[16]||(a[16]=t("p",null,[l("通过 "),t("code",null,'type="inner"'),l(" 用于卡片内部嵌套展示。")],-1)),e(r,{title:"内部卡片",source:o(V)},{default:s(()=>[e(R)]),_:1},8,["source"]),a[17]||(a[17]=t("h3",{id:"带标签页的卡片",tabindex:"-1"},"带标签页的卡片",-1)),a[18]||(a[18]=t("p",null,"可以在卡片头部集成标签页。",-1)),e(r,{title:"带标签页的卡片",source:o(Y)},{default:s(()=>[e(J)]),_:1},8,["source"]),a[19]||(a[19]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[20]||(a[20]=t("p",null,[l("通过 "),t("code",null,"classNames"),l(" / "),t("code",null,"styles"),l(" 对各子元素做细粒度样式控制。")],-1)),e(r,{title:"语义化 className 与 style",source:o(K)},{default:s(()=>[e($)]),_:1},8,["source"]),a[21]||(a[21]=v(`<h2 id="api" tabindex="-1">API</h2><h3 id="card-props" tabindex="-1">Card Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题</td><td><code>string</code></td><td>-</td></tr><tr><td>extra</td><td>卡片右上角的操作区域</td><td><code>string | slot</code></td><td>-</td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>variant</td><td>边框变体（优先于 <code>bordered</code>）</td><td><code>&#39;borderless&#39; | &#39;outlined&#39;</code></td><td>-</td></tr><tr><td>type</td><td>卡片类型，可设为 <code>inner</code></td><td><code>&#39;inner&#39;</code></td><td>-</td></tr><tr><td>loading</td><td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td><td><code>boolean | { avatar?: boolean; paragraph?: { rows?: number } }</code></td><td><code>false</code></td></tr><tr><td>size</td><td>卡片的尺寸</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>hoverable</td><td>鼠标移过时可浮起</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bodyStyle</td><td>内容区域自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>headStyle</td><td>标题区域自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>tabList</td><td>标签页列表</td><td><code>Array&lt;{ key: string; label: string; disabled?: boolean }&gt;</code></td><td>-</td></tr><tr><td>activeTabKey</td><td>当前激活标签的 key</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultActiveTabKey</td><td>默认激活标签的 key</td><td><code>string</code></td><td>-</td></tr><tr><td>onTabChange</td><td>标签切换回调</td><td><code>(key: string) =&gt; void</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">详见下方</a>）</td><td><code>CardClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">详见下方</a>）</td><td><code>CardStyles</code></td><td>-</td></tr></tbody></table><h3 id="card-slots" tabindex="-1">Card Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>卡片内容</td></tr><tr><td>title</td><td>卡片标题</td></tr><tr><td>extra</td><td>卡片右上角的操作区域</td></tr><tr><td>cover</td><td>卡片封面</td></tr><tr><td>actions</td><td>卡片操作组</td></tr><tr><td>tabBarExtraContent</td><td>标签栏额外内容</td></tr></tbody></table><h3 id="card-events" tabindex="-1">Card Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tabChange</td><td>标签切换时触发</td><td><code>(key: string) =&gt; void</code></td></tr><tr><td>update:activeTabKey</td><td>标签切换时触发（支持 v-model）</td><td><code>(key: string) =&gt; void</code></td></tr></tbody></table><h3 id="cardgrid-props" tabindex="-1">Card.Grid Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>hoverable</td><td>鼠标移过时可浮起</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="cardmeta-props" tabindex="-1">CardMeta Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题内容</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>描述内容</td><td><code>string</code></td><td>-</td></tr><tr><td>avatar</td><td>头像/图标</td><td><code>string | slot</code></td><td>-</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Card的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">CardClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 div.hmfw-card</span>
  head<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头部容器 div.hmfw-card-head</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题 div.hmfw-card-head-title</span>
  extra<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 右侧扩展 div.hmfw-card-extra</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 主体内容 div.hmfw-card-body</span>
  actions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 底部操作 ul.hmfw-card-actions</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CardStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 根节点 div.hmfw-card</span>
  head<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 头部容器 div.hmfw-card-head</span>
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 标题 div.hmfw-card-head-title</span>
  extra<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 右侧扩展 div.hmfw-card-extra</span>
  body<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 主体内容 div.hmfw-card-body</span>
  actions<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 底部操作 ul.hmfw-card-actions</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-cover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>封面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-head<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.head / styles.head 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-head-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-head-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-extra<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>扩展<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.extra / styles.extra 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-card-actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    操作组
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.actions / styles.actions 应用于此 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
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

&lt;style scoped&gt;
:deep(.my-card-root) {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

:deep(.my-card-head) {
  background: linear-gradient(to right, #667eea, #764ba2);
}

:deep(.my-card-title) {
  color: white;
  font-weight: bold;
}

:deep(.my-card-body) {
  padding: 24px;
}

:deep(.my-card-actions) {
  background: #f0f2f5;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
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
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>title</code> 仅在设置了 <code>title</code> 属性或 <code>title</code> 插槽时渲染</li><li><code>extra</code> 仅在设置了 <code>extra</code> 插槽时渲染</li><li><code>actions</code> 仅在设置了 <code>actions</code> 插槽时渲染</li><li><code>styles.head</code> 会与 <code>headStyle</code> 合并，<code>styles.body</code> 会与 <code>bodyStyle</code> 合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-alter</code></td><td>替代填充色</td><td><code>rgba(0,0,0,0.02)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr></tbody></table>`,25))])}}};export{tt as default};
