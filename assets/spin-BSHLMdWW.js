import{S as l}from"./Spin-CbrGcnkb.js";import{d as k,o as d,q as f,e as a,b as m,f as s,c as t,w as c,_ as y,r as g,g as i,k as b,l as S,A as x,h,i as q}from"./index-Da5IF3ma.js";import{B as v}from"./Button-4P7E4SUp.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-MZARQJkd.js";const w=k({__name:"SpinBasic",setup(r){return(e,p)=>(d(),f(a(l)))}}),N=`<template>
  <Spin />
</template>

<script setup lang="ts">
import { Spin } from '@hmfw/ant-design'
<\/script>
`,_={style:{display:"flex","flex-direction":"column",gap:"24px"}},B=k({__name:"SpinClassNames",setup(r){return(e,p)=>(d(),m("div",_,[s("div",null,[p[0]||(p[0]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义指示符与描述文案：",-1)),t(a(l),{tip:"数据加载中...","class-names":{dot:"demo-spin-dot",description:"demo-spin-desc"}})]),s("div",null,[p[1]||(p[1]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器卡片：",-1)),t(a(l),{tip:"正在处理","class-names":{root:"demo-spin-root",description:"demo-spin-desc"}})]),s("div",null,[p[3]||(p[3]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"嵌套加载浮层着色：",-1)),t(a(l),{spinning:"","class-names":{container:"demo-spin-container",dot:"demo-spin-dot"}},{default:c(()=>[...p[2]||(p[2]=[s("div",{style:{padding:"24px",background:"#f5f5f5","border-radius":"8px"}}," 这是一段被遮罩的内容区域，浮层通过 container 自定义背景。 ",-1)])]),_:1})]),s("div",null,[p[4]||(p[4]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式控制描述与根节点：",-1)),t(a(l),{tip:"上传中",styles:{root:{padding:"16px",background:"#f6ffed",borderRadius:"8px"},description:{color:"#52c41a",fontWeight:600}}})])]))}}),C=y(B,[["__scopeId","data-v-8ab8fd17"]]),E=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义指示符与描述（classNames） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义指示符与描述文案：</div>
      <Spin
        tip="数据加载中..."
        :class-names="{
          dot: 'demo-spin-dot',
          description: 'demo-spin-desc',
        }"
      />
    </div>

    <!-- 场景 2：自定义根容器（classNames.root） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器卡片：</div>
      <Spin tip="正在处理" :class-names="{ root: 'demo-spin-root', description: 'demo-spin-desc' }" />
    </div>

    <!-- 场景 3：嵌套加载浮层（classNames.container） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">嵌套加载浮层着色：</div>
      <Spin spinning :class-names="{ container: 'demo-spin-container', dot: 'demo-spin-dot' }">
        <div style="padding: 24px; background: #f5f5f5; border-radius: 8px">
          这是一段被遮罩的内容区域，浮层通过 container 自定义背景。
        </div>
      </Spin>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式控制描述与根节点：</div>
      <Spin
        tip="上传中"
        :styles="{
          root: { padding: '16px', background: '#f6ffed', borderRadius: '8px' },
          description: { color: '#52c41a', fontWeight: 600 },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Spin } from '@hmfw/ant-design'
<\/script>

<style scoped>
:deep(.demo-spin-dot .hmfw-spin-dot-item) {
  background: #722ed1;
}

:deep(.demo-spin-desc) {
  color: #722ed1;
  font-weight: 600;
  letter-spacing: 1px;
}

:deep(.demo-spin-root) {
  padding: 16px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
}

:deep(.demo-spin-root .hmfw-spin-dot-item) {
  background: #fff;
}

:deep(.demo-spin-root .demo-spin-desc) {
  color: #fff;
}

:deep(.demo-spin-container) {
  background: rgba(114, 46, 209, 0.12);
  backdrop-filter: blur(2px);
}
</style>
`,z=k({__name:"SpinDelay",setup(r){const e=g(!0);return(p,o)=>(d(),f(a(l),{spinning:e.value,delay:500},{default:c(()=>[...o[0]||(o[0]=[s("div",{style:{padding:"24px",background:"#f0f0f0","border-radius":"4px"}},[s("p",null,"延迟 500ms 后才显示加载状态")],-1)])]),_:1},8,["spinning"]))}}),P=`<template>
  <Spin :spinning="loading" :delay="500">
    <div style="padding: 24px; background: #f0f0f0; border-radius: 4px">
      <p>延迟 500ms 后才显示加载状态</p>
    </div>
  </Spin>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin } from '@hmfw/ant-design'

const loading = ref(true)
<\/script>
`,$=k({__name:"SpinNested",setup(r){const e=g(!0);return(p,o)=>(d(),m("div",null,[t(a(v),{onClick:o[0]||(o[0]=n=>e.value=!e.value)},{default:c(()=>[...o[1]||(o[1]=[i("切换加载状态",-1)])]),_:1}),t(a(l),{spinning:e.value,tip:"加载中..."},{default:c(()=>[...o[2]||(o[2]=[s("div",{style:{padding:"24px",background:"#f0f0f0","margin-top":"16px","border-radius":"4px"}},[s("p",null,"这是被遮罩的内容区域"),s("p",null,"加载时会显示遮罩层")],-1)])]),_:1},8,["spinning"])]))}}),A=`<template>
  <div>
    <Button @click="loading = !loading">切换加载状态</Button>
    <Spin :spinning="loading" tip="加载中...">
      <div style="padding: 24px; background: #f0f0f0; margin-top: 16px; border-radius: 4px">
        <p>这是被遮罩的内容区域</p>
        <p>加载时会显示遮罩层</p>
      </div>
    </Spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin, Button } from '@hmfw/ant-design'

const loading = ref(true)
<\/script>
`,D={style:{display:"flex",gap:"32px","align-items":"center"}},I=k({__name:"SpinPercent",setup(r){const e=g(0),p=g(!0);let o;b(()=>{o=setInterval(()=>{e.value=e.value>=100?0:e.value+10},500)}),S(()=>{o&&clearInterval(o)});function n(){p.value=!p.value}return(u,W)=>(d(),m("div",D,[t(a(l),{percent:e.value},null,8,["percent"]),t(a(l),{percent:e.value,size:"large"},null,8,["percent"]),t(a(l),{percent:"auto",spinning:p.value},null,8,["spinning"]),t(a(v),{onClick:n},{default:c(()=>[i(x(p.value?"停止 auto":"开始 auto"),1)]),_:1})]))}}),T=`<template>
  <div style="display: flex; gap: 32px; align-items: center">
    <Spin :percent="percent" />
    <Spin :percent="percent" size="large" />
    <Spin percent="auto" :spinning="autoSpinning" />
    <Button @click="toggleAuto">
      {{ autoSpinning ? '停止 auto' : '开始 auto' }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Spin, Button } from '@hmfw/ant-design'

// 受控 percent：手动在 0~100 之间循环递增，演示环形进度指示器。
const percent = ref(0)
const autoSpinning = ref(true)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    percent.value = percent.value >= 100 ? 0 : percent.value + 10
  }, 500)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

function toggleAuto() {
  autoSpinning.value = !autoSpinning.value
}
<\/script>
`,M={style:{display:"flex",gap:"24px","align-items":"center"}},R=k({__name:"SpinSize",setup(r){return(e,p)=>(d(),m("div",M,[t(a(l),{size:"small"}),t(a(l)),t(a(l),{size:"large"})]))}}),V=`<template>
  <div style="display: flex; gap: 24px; align-items: center">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>
</template>

<script setup lang="ts">
import { Spin } from '@hmfw/ant-design'
<\/script>
`,U={class:"markdown-body"},J={__name:"spin",setup(r,{expose:e}){return e({frontmatter:{}}),(o,n)=>{const u=h("DemoBlock");return d(),m("div",U,[n[0]||(n[0]=s("h1",{id:"spin-加载中",tabindex:"-1"},"Spin 加载中",-1)),n[1]||(n[1]=s("p",null,"用于页面和区块的加载中状态。",-1)),n[2]||(n[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=s("ul",null,[s("li",null,"页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑")],-1)),n[4]||(n[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=s("p",null,"一个简单的 loading 状态。",-1)),t(u,{title:"基础用法",source:a(N)},{default:c(()=>[t(w)]),_:1},8,["source"]),n[7]||(n[7]=s("h3",{id:"各种大小",tabindex:"-1"},"各种大小",-1)),n[8]||(n[8]=s("p",null,"小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。",-1)),t(u,{title:"各种大小",source:a(V)},{default:c(()=>[t(R)]),_:1},8,["source"]),n[9]||(n[9]=s("h3",{id:"嵌套内容",tabindex:"-1"},"嵌套内容",-1)),n[10]||(n[10]=s("p",null,"可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。",-1)),t(u,{title:"嵌套内容",source:a(A)},{default:c(()=>[t($)]),_:1},8,["source"]),n[11]||(n[11]=s("h3",{id:"延迟加载",tabindex:"-1"},"延迟加载",-1)),n[12]||(n[12]=s("p",null,"延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。",-1)),t(u,{title:"延迟加载",source:a(P)},{default:c(()=>[t(z)]),_:1},8,["source"]),n[13]||(n[13]=s("h3",{id:"进度",tabindex:"-1"},"进度",-1)),n[14]||(n[14]=s("p",null,[i("通过 "),s("code",null,"percent"),i(" 展示环形进度指示器。传入 "),s("code",null,"number"),i(" 为受控进度，传入 "),s("code",null,"'auto'"),i(" 时在 "),s("code",null,"spinning"),i(" 期间自动模拟递增。")],-1)),t(u,{title:"进度",source:a(T)},{default:c(()=>[t(I)]),_:1},8,["source"]),n[15]||(n[15]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[16]||(n[16]=s("p",null,[i("通过 "),s("code",null,"classNames"),i(" / "),s("code",null,"styles"),i(" 对 root、dot、container、description 等子元素做细粒度样式控制。")],-1)),t(u,{title:"语义化 className 与 style",source:a(E)},{default:c(()=>[t(C)]),_:1},8,["source"]),n[17]||(n[17]=q(`<h2 id="api" tabindex="-1">API</h2><h3 id="spin-props" tabindex="-1">Spin Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>spinning</td><td>是否为加载中状态</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>size</td><td>组件大小</td><td><code>&#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>tip</td><td>当作为包裹元素时，可以自定义描述文案</td><td><code>string</code></td><td>-</td></tr><tr><td>delay</td><td>延迟显示加载效果的时间（防止闪烁），单位：毫秒</td><td><code>number</code></td><td>-</td></tr><tr><td>percent</td><td>进度百分比；为 <code>&#39;auto&#39;</code> 时在 <code>spinning</code> 期间自动模拟递增</td><td><code>number | &#39;auto&#39;</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SpinClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SpinStyles</code></td><td>-</td></tr></tbody></table><h3 id="spin-slots" tabindex="-1">Spin Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>被遮罩的内容</td></tr><tr><td>indicator</td><td>加载指示符（自定义指示器时，插槽参数含 <code>percent</code>）</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Spin 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">SpinClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 加载组件根节点（&lt;span&gt; 或 fullscreen 模式下的遮罩 &lt;div&gt;）</span>
  dot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 加载指示符容器（四点动画 / 自定义 indicator）</span>
  container<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 嵌套加载时浮层容器（覆盖在内容之上）</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 描述文案（tip / description）</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SpinStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dot<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  container<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  description<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 基础用法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-spin hmfw-spin-spinning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-spin-dot-holder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-spin-dot hmfw-spin-dot-spin<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.dot / styles.dot 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-spin-dot-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ...共 4 个点 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-spin-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.description / styles.description 应用于此 --&gt;</span>
    加载中...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 嵌套加载（含 default 插槽） --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-spin-nested-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-spin-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.container / styles.container 应用于此（浮层） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-spin hmfw-spin-spinning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-spin-blur-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 被遮罩的内容 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义指示符与描述 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>数据加载中...<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ dot: &#39;my-dot&#39;, description: &#39;my-desc&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义嵌套浮层 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span> <span class="token attr-name">spinning</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ container: &#39;my-container&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>内容区域<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Spin</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-dot .hmfw-spin-dot-item)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #722ed1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-desc)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #722ed1<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-container)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>114<span class="token punctuation">,</span> 46<span class="token punctuation">,</span> 209<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制根节点与描述 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spin</span>
    <span class="token attr-name">tip</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>上传中<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { padding: &#39;16px&#39;, background: &#39;#f6ffed&#39;, borderRadius: &#39;8px&#39; },
      description: { color: &#39;#52c41a&#39;, fontWeight: 600 },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.dot</code> 应用于指示符容器 <code>.hmfw-spin-dot</code>，若要修改四个圆点颜色需用 <code>:deep(.my-dot .hmfw-spin-dot-item)</code> 这类后代选择器</li><li><code>classNames.container</code> 仅在使用 <code>default</code> 插槽的嵌套加载模式且 <code>spinning</code> 为 <code>true</code> 时渲染</li><li><code>fullscreen</code> 模式下根节点为遮罩 <code>&lt;div&gt;</code>，<code>classNames.root</code> / <code>styles.root</code> 应用在该遮罩上</li><li>自定义 <code>indicator</code> 插槽时，<code>classNames.dot</code> / <code>styles.dot</code> 仍应用于其外层容器 <code>.hmfw-spin-dot</code></li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Spin 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr></tbody></table>`,23))])}}};export{J as default};
