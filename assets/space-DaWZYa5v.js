import{B as l}from"./Button-4P7E4SUp.js";import{S as c}from"./Space-Dmv79I85.js";import{d as k,o as u,q as m,w as a,c as t,e as p,g as e,b as f,f as s,_ as b,F as x,z as y,A as S,h as v,i as B}from"./index-Da5IF3ma.js";import{D as w}from"./Divider-DB3-6Qre.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-MZARQJkd.js";const q=k({__name:"SpaceBasic",setup(r){return(i,n)=>(u(),m(p(c),null,{default:a(()=>[t(p(l),{type:"primary"},{default:a(()=>[...n[0]||(n[0]=[e(" 按钮一 ",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[1]||(n[1]=[e("按钮二",-1)])]),_:1}),t(p(l),{type:"dashed"},{default:a(()=>[...n[2]||(n[2]=[e(" 按钮三 ",-1)])]),_:1})]),_:1}))}}),N=`<template>
  <Space>
    <Button type="primary"> 按钮一 </Button>
    <Button>按钮二</Button>
    <Button type="dashed"> 按钮三 </Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from '@hmfw/ant-design'
<\/script>
`,z={style:{display:"flex","flex-direction":"column",gap:"24px"}},C=k({__name:"SpaceClassNames",setup(r){return(i,n)=>(u(),f("div",z,[s("div",null,[n[3]||(n[3]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义子元素容器样式：",-1)),t(p(c),{"class-names":{item:"custom-item"}},{default:a(()=>[t(p(l),null,{default:a(()=>[...n[0]||(n[0]=[e("按钮 1",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[1]||(n[1]=[e("按钮 2",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[2]||(n[2]=[e("按钮 3",-1)])]),_:1})]),_:1})]),s("div",null,[n[5]||(n[5]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义分隔符样式：",-1)),t(p(c),{separator:"|","class-names":{split:"custom-split"}},{default:a(()=>[...n[4]||(n[4]=[s("span",null,"选项 1",-1),s("span",null,"选项 2",-1),s("span",null,"选项 3",-1)])]),_:1})]),s("div",null,[n[7]||(n[7]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义根容器、子元素和分隔符：",-1)),t(p(c),{separator:"·","class-names":{root:"custom-root",item:"custom-item-combined",split:"custom-split-combined"}},{default:a(()=>[...n[6]||(n[6]=[s("span",null,"首页",-1),s("span",null,"产品",-1),s("span",null,"关于",-1)])]),_:1})]),s("div",null,[n[11]||(n[11]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"垂直布局自定义子元素：",-1)),t(p(c),{direction:"vertical","class-names":{item:"custom-item-vertical"}},{default:a(()=>[t(p(l),{type:"primary"},{default:a(()=>[...n[8]||(n[8]=[e("主按钮",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[9]||(n[9]=[e("次要按钮",-1)])]),_:1}),t(p(l),{type:"dashed"},{default:a(()=>[...n[10]||(n[10]=[e("虚线按钮",-1)])]),_:1})]),_:1})]),s("div",null,[n[13]||(n[13]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用 styles 内联样式：",-1)),t(p(c),{separator:"|",styles:{root:{padding:"12px",background:"#f0f5ff",borderRadius:"8px"},item:{padding:"4px 8px",background:"#e6f7ff",borderRadius:"4px"},split:{color:"#1890ff",fontWeight:"bold",margin:"0 4px"}}},{default:a(()=>[...n[12]||(n[12]=[s("span",null,"项目 A",-1),s("span",null,"项目 B",-1),s("span",null,"项目 C",-1)])]),_:1})])]))}}),D=b(C,[["__scopeId","data-v-d4dc312d"]]),E=`<template>
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
import { Space, Button } from '@hmfw/ant-design'
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
`,A=k({__name:"SpaceSize",setup(r){return(i,n)=>(u(),m(p(c),{direction:"vertical",size:16},{default:a(()=>[t(p(c),{size:"small"},{default:a(()=>[t(p(l),null,{default:a(()=>[...n[0]||(n[0]=[e("small",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[1]||(n[1]=[e("small",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[2]||(n[2]=[e("small",-1)])]),_:1})]),_:1}),t(p(c),{size:"middle"},{default:a(()=>[t(p(l),null,{default:a(()=>[...n[3]||(n[3]=[e("middle",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[4]||(n[4]=[e("middle",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[5]||(n[5]=[e("middle",-1)])]),_:1})]),_:1}),t(p(c),{size:"large"},{default:a(()=>[t(p(l),null,{default:a(()=>[...n[6]||(n[6]=[e("large",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[7]||(n[7]=[e("large",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[8]||(n[8]=[e("large",-1)])]),_:1})]),_:1}),t(p(c),{size:32},{default:a(()=>[t(p(l),null,{default:a(()=>[...n[9]||(n[9]=[e("32px",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[10]||(n[10]=[e("32px",-1)])]),_:1}),t(p(l),null,{default:a(()=>[...n[11]||(n[11]=[e("32px",-1)])]),_:1})]),_:1})]),_:1}))}}),V=`<template>
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
import { Space, Button } from '@hmfw/ant-design'
<\/script>
`,_=k({__name:"SpaceSplit",setup(r){return(i,n)=>(u(),m(p(c),null,{split:a(()=>[t(p(w),{type:"vertical"})]),default:a(()=>[n[0]||(n[0]=s("a",{href:"#"},"链接一",-1)),n[1]||(n[1]=s("a",{href:"#"},"链接二",-1)),n[2]||(n[2]=s("a",{href:"#"},"链接三",-1))]),_:1}))}}),$=`<template>
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
import { Space, Divider } from '@hmfw/ant-design'
<\/script>
`,P=k({__name:"SpaceVertical",setup(r){return(i,n)=>(u(),m(p(c),{direction:"vertical",style:{width:"100%"}},{default:a(()=>[t(p(l),{type:"primary",block:""},{default:a(()=>[...n[0]||(n[0]=[e(" 按钮一 ",-1)])]),_:1}),t(p(l),{block:""},{default:a(()=>[...n[1]||(n[1]=[e(" 按钮二 ",-1)])]),_:1}),t(p(l),{type:"dashed",block:""},{default:a(()=>[...n[2]||(n[2]=[e(" 按钮三 ",-1)])]),_:1})]),_:1}))}}),R=`<template>
  <Space direction="vertical" style="width: 100%">
    <Button type="primary" block> 按钮一 </Button>
    <Button block> 按钮二 </Button>
    <Button type="dashed" block> 按钮三 </Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from '@hmfw/ant-design'
<\/script>
`,W=k({__name:"SpaceWrap",setup(r){return(i,n)=>(u(),m(p(c),{size:[8,16],wrap:""},{default:a(()=>[(u(),f(x,null,y(20,g=>t(p(l),{key:g,class:"demo-btn"},{default:a(()=>[e("按钮 "+S(g),1)]),_:2},1024)),64))]),_:1}))}}),F=b(W,[["__scopeId","data-v-723ca9ad"]]),T=`<template>
  <Space :size="[8, 16]" wrap>
    <Button v-for="n in 20" :key="n" class="demo-btn">按钮 {{ n }}</Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from '@hmfw/ant-design'
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
`,I={class:"markdown-body"},G={__name:"space",setup(r,{expose:i}){return i({frontmatter:{}}),(g,o)=>{const d=v("DemoBlock");return u(),f("div",I,[o[0]||(o[0]=s("h1",{id:"space-间距",tabindex:"-1"},"Space 间距",-1)),o[1]||(o[1]=s("p",null,"设置组件之间的间距。",-1)),o[2]||(o[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),o[3]||(o[3]=s("ul",null,[s("li",null,"避免组件紧贴在一起，拉开统一的空间"),s("li",null,"适合行内元素的水平间距"),s("li",null,"可以设置各种水平对齐方式")],-1)),o[4]||(o[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),o[5]||(o[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),o[6]||(o[6]=s("p",null,"相邻组件水平间距。",-1)),t(d,{title:"基础用法",source:p(N)},{default:a(()=>[t(q)]),_:1},8,["source"]),o[7]||(o[7]=s("h3",{id:"垂直间距",tabindex:"-1"},"垂直间距",-1)),o[8]||(o[8]=s("p",null,[e("通过 "),s("code",null,"direction"),e(" 属性设置垂直方向间距。")],-1)),t(d,{title:"垂直间距",source:p(R)},{default:a(()=>[t(P)]),_:1},8,["source"]),o[9]||(o[9]=s("h3",{id:"自定义大小",tabindex:"-1"},"自定义大小",-1)),o[10]||(o[10]=s("p",null,[e("通过 "),s("code",null,"size"),e(" 属性设置间距大小，支持预设值和数字。")],-1)),t(d,{title:"自定义大小",source:p(V)},{default:a(()=>[t(A)]),_:1},8,["source"]),o[11]||(o[11]=s("h3",{id:"分隔符",tabindex:"-1"},"分隔符",-1)),o[12]||(o[12]=s("p",null,[e("通过 "),s("code",null,"separator"),e("（或别名 "),s("code",null,"split"),e("）属性设置分隔符。")],-1)),t(d,{title:"分隔符",source:p($)},{default:a(()=>[t(_)]),_:1},8,["source"]),o[13]||(o[13]=s("h3",{id:"自动换行",tabindex:"-1"},"自动换行",-1)),o[14]||(o[14]=s("p",null,[e("通过 "),s("code",null,"wrap"),e(" 属性允许子元素换行，换行后行间距由 "),s("code",null,"size"),e(" 的垂直分量控制。")],-1)),t(d,{title:"自动换行",source:p(T)},{default:a(()=>[t(F)]),_:1},8,["source"]),o[15]||(o[15]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),o[16]||(o[16]=s("p",null,[e("通过 "),s("code",null,"classNames"),e(" / "),s("code",null,"styles"),e(" 对各子元素做细粒度样式控制。")],-1)),t(d,{title:"语义化 className 与 style",source:p(E)},{default:a(()=>[t(D)]),_:1},8,["source"]),o[17]||(o[17]=B(`<h2 id="api" tabindex="-1">API</h2><h3 id="space-props" tabindex="-1">Space Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>间距大小，数组形式表示 <code>[水平, 垂直]</code></td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39; | number | [number, number]</code></td><td><code>&#39;small&#39;</code></td></tr><tr><td>direction</td><td>间距方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>vertical</td><td><code>direction=&quot;vertical&quot;</code> 的简写</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>align</td><td>对齐方式</td><td><code>&#39;start&#39; | &#39;end&#39; | &#39;center&#39; | &#39;baseline&#39;</code></td><td>-</td></tr><tr><td>wrap</td><td>是否自动换行，仅水平方向有效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>separator</td><td>设置分隔符</td><td><code>VNode | string</code></td><td>-</td></tr><tr><td>split</td><td><code>separator</code> 的别名（已废弃，请使用 <code>separator</code>）</td><td><code>VNode | string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SpaceClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SpaceStyles</code></td><td>-</td></tr></tbody></table><h3 id="space-slots" tabindex="-1">Space Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>子元素内容</td></tr><tr><td>split</td><td>自定义分隔符（优先级高于 <code>separator</code> prop）</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Space 组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Space</span>
    <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>|<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;custom-root&#39;,
      item: &#39;custom-item&#39;,
      split: &#39;custom-split&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>选项 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>选项 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>选项 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Space</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.custom-root)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #f6ffed<span class="token punctuation">,</span> #d9f7be<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-item)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-item:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.05<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-split)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Space</span>
    <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>|<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { padding: &#39;12px&#39;, background: &#39;#f0f5ff&#39;, borderRadius: &#39;8px&#39; },
      item: { padding: &#39;4px 8px&#39;, background: &#39;#e6f7ff&#39;, borderRadius: &#39;4px&#39; },
      split: { color: &#39;#1890ff&#39;, fontWeight: &#39;bold&#39;, margin: &#39;0 4px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>项目 A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>项目 B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>项目 C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Space</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>split</code> 节点仅在设置了 <code>separator</code> 或 <code>split</code> prop 时才会渲染</li><li>当使用 <code>wrap</code> 属性时，子元素容器会自动换行，可通过 <code>classNames.item</code> 自定义换行后的样式</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Space 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,20))])}}};export{G as default};
