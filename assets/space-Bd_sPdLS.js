import{B as l}from"./Button-BmgcCkF-.js";import{S as d}from"./Space-5kGmHLpd.js";import{o as m,A as r,i as g,R as a,n as s,K as e,m as o,k,h as n,_ as b,F as x,G as S,J as y,H as v,l as B}from"./index-DiKIrHqq.js";import{D as w}from"./Divider-C2c-75kb.js";import"./cls-S9IiI6wd.js";import"./Icon-Bqbb_T9L.js";import"./LoadingOutlined-C1ARyyrX.js";const N=m({__name:"SpaceBasic",setup(u){return(i,t)=>(r(),g(e(d),null,{default:a(()=>[s(e(l),{type:"primary"},{default:a(()=>[...t[0]||(t[0]=[o(" 按钮一 ",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[1]||(t[1]=[o("按钮二",-1)])]),_:1}),s(e(l),{type:"dashed"},{default:a(()=>[...t[2]||(t[2]=[o(" 按钮三 ",-1)])]),_:1})]),_:1}))}}),z=`<template>
  <Space>
    <Button type="primary"> 按钮一 </Button>
    <Button>按钮二</Button>
    <Button type="dashed"> 按钮三 </Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
<\/script>
`,q={style:{display:"flex","flex-direction":"column",gap:"24px"}},C=m({__name:"SpaceClassNames",setup(u){return(i,t)=>(r(),k("div",q,[n("div",null,[t[3]||(t[3]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义子元素容器样式：",-1)),s(e(d),{"class-names":{item:"custom-item"}},{default:a(()=>[s(e(l),null,{default:a(()=>[...t[0]||(t[0]=[o("按钮 1",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[1]||(t[1]=[o("按钮 2",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[2]||(t[2]=[o("按钮 3",-1)])]),_:1})]),_:1})]),n("div",null,[t[5]||(t[5]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义分隔符样式：",-1)),s(e(d),{separator:"|","class-names":{split:"custom-split"}},{default:a(()=>[...t[4]||(t[4]=[n("span",null,"选项 1",-1),n("span",null,"选项 2",-1),n("span",null,"选项 3",-1)])]),_:1})]),n("div",null,[t[7]||(t[7]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义根容器、子元素和分隔符：",-1)),s(e(d),{separator:"·","class-names":{root:"custom-root",item:"custom-item-combined",split:"custom-split-combined"}},{default:a(()=>[...t[6]||(t[6]=[n("span",null,"首页",-1),n("span",null,"产品",-1),n("span",null,"关于",-1)])]),_:1})]),n("div",null,[t[11]||(t[11]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"垂直布局自定义子元素：",-1)),s(e(d),{direction:"vertical","class-names":{item:"custom-item-vertical"}},{default:a(()=>[s(e(l),{type:"primary"},{default:a(()=>[...t[8]||(t[8]=[o("主按钮",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[9]||(t[9]=[o("次要按钮",-1)])]),_:1}),s(e(l),{type:"dashed"},{default:a(()=>[...t[10]||(t[10]=[o("虚线按钮",-1)])]),_:1})]),_:1})]),n("div",null,[t[13]||(t[13]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用 styles 内联样式：",-1)),s(e(d),{separator:"|",styles:{root:{padding:"12px",background:"#f0f5ff",borderRadius:"8px"},item:{padding:"4px 8px",background:"#e6f7ff",borderRadius:"4px"},split:{color:"#1890ff",fontWeight:"bold",margin:"0 4px"}}},{default:a(()=>[...t[12]||(t[12]=[n("span",null,"项目 A",-1),n("span",null,"项目 B",-1),n("span",null,"项目 C",-1)])]),_:1})])]))}}),D=b(C,[["__scopeId","data-v-c24bddb4"]]),E=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1: 自定义子元素容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义子元素容器样式：</div>
      <Space :class-names="{ item: 'custom-item' }">
        <Button>按钮 1</Button>
        <Button>按钮 2</Button>
        <Button>按钮 3</Button>
      </Space>
    </div>

    <!-- 场景 2: 自定义分隔符样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义分隔符样式：</div>
      <Space separator="|" :class-names="{ split: 'custom-split' }">
        <span>选项 1</span>
        <span>选项 2</span>
        <span>选项 3</span>
      </Space>
    </div>

    <!-- 场景 3: 组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义根容器、子元素和分隔符：</div>
      <Space
        separator="·"
        :class-names="{
          root: 'custom-root',
          item: 'custom-item-combined',
          split: 'custom-split-combined',
        }"
      >
        <span>首页</span>
        <span>产品</span>
        <span>关于</span>
      </Space>
    </div>

    <!-- 场景 4: 垂直布局自定义 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">垂直布局自定义子元素：</div>
      <Space direction="vertical" :class-names="{ item: 'custom-item-vertical' }">
        <Button type="primary">主按钮</Button>
        <Button>次要按钮</Button>
        <Button type="dashed">虚线按钮</Button>
      </Space>
    </div>

    <!-- 场景 5: 使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用 styles 内联样式：</div>
      <Space
        separator="|"
        :styles="{
          root: { padding: '12px', background: '#f0f5ff', borderRadius: '8px' },
          item: { padding: '4px 8px', background: '#e6f7ff', borderRadius: '4px' },
          split: { color: '#1890ff', fontWeight: 'bold', margin: '0 4px' },
        }"
      >
        <span>项目 A</span>
        <span>项目 B</span>
        <span>项目 C</span>
      </Space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
<\/script>

<style scoped>
/* 场景 1: 自定义子元素容器 */
:deep(.custom-item) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 8px 16px;
  border-radius: 6px;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

:deep(.custom-item:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* 场景 2: 自定义分隔符样式 */
:deep(.custom-split) {
  color: #1890ff;
  font-size: 20px;
  font-weight: bold;
  margin: 0 8px;
}

/* 场景 3: 组合使用 */
:deep(.custom-root) {
  padding: 16px;
  background: linear-gradient(to right, #f6ffed, #d9f7be);
  border-radius: 8px;
  border: 2px solid #52c41a;
}

:deep(.custom-item-combined) {
  padding: 6px 12px;
  background: white;
  border-radius: 4px;
  color: #52c41a;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

:deep(.custom-item-combined:hover) {
  background: #52c41a;
  color: white;
  transform: scale(1.05);
}

:deep(.custom-split-combined) {
  color: #52c41a;
  font-size: 18px;
  font-weight: bold;
}

/* 场景 4: 垂直布局 */
:deep(.custom-item-vertical) {
  border-left: 4px solid #1890ff;
  padding-left: 12px;
  transition: all 0.3s ease;
}

:deep(.custom-item-vertical:hover) {
  border-left-color: #722ed1;
  padding-left: 16px;
  background: #f9f0ff;
}
</style>
`,A=m({__name:"SpaceSize",setup(u){return(i,t)=>(r(),g(e(d),{direction:"vertical",size:16},{default:a(()=>[s(e(d),{size:"small"},{default:a(()=>[s(e(l),null,{default:a(()=>[...t[0]||(t[0]=[o("small",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[1]||(t[1]=[o("small",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[2]||(t[2]=[o("small",-1)])]),_:1})]),_:1}),s(e(d),{size:"middle"},{default:a(()=>[s(e(l),null,{default:a(()=>[...t[3]||(t[3]=[o("middle",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[4]||(t[4]=[o("middle",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[5]||(t[5]=[o("middle",-1)])]),_:1})]),_:1}),s(e(d),{size:"large"},{default:a(()=>[s(e(l),null,{default:a(()=>[...t[6]||(t[6]=[o("large",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[7]||(t[7]=[o("large",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[8]||(t[8]=[o("large",-1)])]),_:1})]),_:1}),s(e(d),{size:32},{default:a(()=>[s(e(l),null,{default:a(()=>[...t[9]||(t[9]=[o("32px",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[10]||(t[10]=[o("32px",-1)])]),_:1}),s(e(l),null,{default:a(()=>[...t[11]||(t[11]=[o("32px",-1)])]),_:1})]),_:1})]),_:1}))}}),V=`<template>
  <Space direction="vertical" :size="16">
    <Space size="small">
      <Button>small</Button>
      <Button>small</Button>
      <Button>small</Button>
    </Space>
    <Space size="middle">
      <Button>middle</Button>
      <Button>middle</Button>
      <Button>middle</Button>
    </Space>
    <Space size="large">
      <Button>large</Button>
      <Button>large</Button>
      <Button>large</Button>
    </Space>
    <Space :size="32">
      <Button>32px</Button>
      <Button>32px</Button>
      <Button>32px</Button>
    </Space>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
<\/script>
`,_=m({__name:"SpaceSplit",setup(u){return(i,t)=>(r(),g(e(d),null,{split:a(()=>[s(e(w),{type:"vertical"})]),default:a(()=>[t[0]||(t[0]=n("a",{href:"#"},"链接一",-1)),t[1]||(t[1]=n("a",{href:"#"},"链接二",-1)),t[2]||(t[2]=n("a",{href:"#"},"链接三",-1))]),_:1}))}}),R=`<template>
  <Space>
    <template #split>
      <Divider type="vertical" />
    </template>
    <a href="#">链接一</a>
    <a href="#">链接二</a>
    <a href="#">链接三</a>
  </Space>
</template>

<script setup lang="ts">
import { Space, Divider } from 'ant-design-hmfw'
<\/script>
`,$=m({__name:"SpaceVertical",setup(u){return(i,t)=>(r(),g(e(d),{direction:"vertical",style:{width:"100%"}},{default:a(()=>[s(e(l),{type:"primary",block:""},{default:a(()=>[...t[0]||(t[0]=[o(" 按钮一 ",-1)])]),_:1}),s(e(l),{block:""},{default:a(()=>[...t[1]||(t[1]=[o(" 按钮二 ",-1)])]),_:1}),s(e(l),{type:"dashed",block:""},{default:a(()=>[...t[2]||(t[2]=[o(" 按钮三 ",-1)])]),_:1})]),_:1}))}}),P=`<template>
  <Space direction="vertical" style="width: 100%">
    <Button type="primary" block> 按钮一 </Button>
    <Button block> 按钮二 </Button>
    <Button type="dashed" block> 按钮三 </Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
<\/script>
`,W=m({__name:"SpaceWrap",setup(u){return(i,t)=>(r(),g(e(d),{size:[8,16],wrap:""},{default:a(()=>[(r(),k(x,null,S(20,f=>s(e(l),{key:f,class:"demo-btn"},{default:a(()=>[o("按钮 "+y(f),1)]),_:2},1024)),64))]),_:1}))}}),F=b(W,[["__scopeId","data-v-aea801d7"]]),T=`<template>
  <Space :size="[8, 16]" wrap>
    <Button v-for="n in 20" :key="n" class="demo-btn">按钮 {{ n }}</Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
<\/script>

<style scoped>
.demo-btn {
  padding: 4px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
}
</style>
`,I={class:"markdown-body"},O={__name:"space",setup(u,{expose:i}){return i({frontmatter:{}}),(f,p)=>{const c=v("DemoBlock");return r(),k("div",I,[p[0]||(p[0]=n("h1",{id:"space-间距",tabindex:"-1"},"Space 间距",-1)),p[1]||(p[1]=n("p",null,"设置组件之间的间距。",-1)),p[2]||(p[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),p[3]||(p[3]=n("ul",null,[n("li",null,"避免组件紧贴在一起，拉开统一的空间"),n("li",null,"适合行内元素的水平间距"),n("li",null,"可以设置各种水平对齐方式")],-1)),p[4]||(p[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),p[5]||(p[5]=n("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),p[6]||(p[6]=n("p",null,"相邻组件水平间距。",-1)),s(c,{title:"基础用法",source:e(z)},{default:a(()=>[s(N)]),_:1},8,["source"]),p[7]||(p[7]=n("h3",{id:"垂直间距",tabindex:"-1"},"垂直间距",-1)),p[8]||(p[8]=n("p",null,[o("通过 "),n("code",null,"direction"),o(" 属性设置垂直方向间距。")],-1)),s(c,{title:"垂直间距",source:e(P)},{default:a(()=>[s($)]),_:1},8,["source"]),p[9]||(p[9]=n("h3",{id:"自定义大小",tabindex:"-1"},"自定义大小",-1)),p[10]||(p[10]=n("p",null,[o("通过 "),n("code",null,"size"),o(" 属性设置间距大小，支持预设值和数字。")],-1)),s(c,{title:"自定义大小",source:e(V)},{default:a(()=>[s(A)]),_:1},8,["source"]),p[11]||(p[11]=n("h3",{id:"分隔符",tabindex:"-1"},"分隔符",-1)),p[12]||(p[12]=n("p",null,[o("通过 "),n("code",null,"separator"),o("（或别名 "),n("code",null,"split"),o("）属性设置分隔符。")],-1)),s(c,{title:"分隔符",source:e(R)},{default:a(()=>[s(_)]),_:1},8,["source"]),p[13]||(p[13]=n("h3",{id:"自动换行",tabindex:"-1"},"自动换行",-1)),p[14]||(p[14]=n("p",null,[o("通过 "),n("code",null,"wrap"),o(" 属性允许子元素换行，换行后行间距由 "),n("code",null,"size"),o(" 的垂直分量控制。")],-1)),s(c,{title:"自动换行",source:e(T)},{default:a(()=>[s(F)]),_:1},8,["source"]),p[15]||(p[15]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),p[16]||(p[16]=n("p",null,[o("通过 "),n("code",null,"classNames"),o(" / "),n("code",null,"styles"),o(" 对各子元素做细粒度样式控制。")],-1)),s(c,{title:"语义化 className 与 style",source:e(E)},{default:a(()=>[s(D)]),_:1},8,["source"]),p[17]||(p[17]=B(`<h2 id="api" tabindex="-1">API</h2><h3 id="space-props" tabindex="-1">Space Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>间距大小，数组形式表示 <code>[水平, 垂直]</code></td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39; | number | [number, number]</code></td><td><code>&#39;small&#39;</code></td></tr><tr><td>direction</td><td>间距方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>vertical</td><td><code>direction=&quot;vertical&quot;</code> 的简写</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>align</td><td>对齐方式</td><td><code>&#39;start&#39; | &#39;end&#39; | &#39;center&#39; | &#39;baseline&#39;</code></td><td>-</td></tr><tr><td>wrap</td><td>是否自动换行，仅水平方向有效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>separator</td><td>设置分隔符</td><td><code>VNode | string</code></td><td>-</td></tr><tr><td>split</td><td><code>separator</code> 的别名（已废弃，请使用 <code>separator</code>）</td><td><code>VNode | string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SpaceClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SpaceStyles</code></td><td>-</td></tr></tbody></table><h3 id="space-slots" tabindex="-1">Space Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr><tr><td>split</td><td>自定义分隔符（优先级高于 <code>separator</code> prop）</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Space 组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">SpaceClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 子元素容器</span>
  split<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分隔符容器</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SpaceStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  split<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-space hmfw-space-horizontal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-space-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>按钮 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-space-item-split<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.split / styles.split 应用于此 --&gt;</span>
    |
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-space-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>按钮 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Space
    separator=&quot;|&quot;
    :class-names=&quot;{
      root: &#39;custom-root&#39;,
      item: &#39;custom-item&#39;,
      split: &#39;custom-split&#39;,
    }&quot;
  &gt;
    &lt;span&gt;选项 1&lt;/span&gt;
    &lt;span&gt;选项 2&lt;/span&gt;
    &lt;span&gt;选项 3&lt;/span&gt;
  &lt;/Space&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.custom-root) {
  padding: 16px;
  background: linear-gradient(to right, #f6ffed, #d9f7be);
  border-radius: 8px;
}

:deep(.custom-item) {
  padding: 6px 12px;
  background: white;
  border-radius: 4px;
  transition: all 0.3s ease;
}

:deep(.custom-item:hover) {
  background: #52c41a;
  color: white;
  transform: scale(1.05);
}

:deep(.custom-split) {
  color: #52c41a;
  font-size: 18px;
  font-weight: bold;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Space
    separator=&quot;|&quot;
    :styles=&quot;{
      root: { padding: &#39;12px&#39;, background: &#39;#f0f5ff&#39;, borderRadius: &#39;8px&#39; },
      item: { padding: &#39;4px 8px&#39;, background: &#39;#e6f7ff&#39;, borderRadius: &#39;4px&#39; },
      split: { color: &#39;#1890ff&#39;, fontWeight: &#39;bold&#39;, margin: &#39;0 4px&#39; },
    }&quot;
  &gt;
    &lt;span&gt;项目 A&lt;/span&gt;
    &lt;span&gt;项目 B&lt;/span&gt;
    &lt;span&gt;项目 C&lt;/span&gt;
  &lt;/Space&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>split</code> 节点仅在设置了 <code>separator</code> 或 <code>split</code> prop 时才会渲染</li><li>当使用 <code>wrap</code> 属性时，子元素容器会自动换行，可通过 <code>classNames.item</code> 自定义换行后的样式</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Space 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,20))])}}};export{O as default};
