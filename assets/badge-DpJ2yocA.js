import{B as e}from"./index-BeTma_jj.js";import{d as k,o as l,b as d,c as a,e as o,w as p,f as n,_ as g,h as m,g as r,i as x}from"./index-Da5IF3ma.js";import"./cls-S9IiI6wd.js";const b={style:{display:"flex",gap:"24px"}},f=k({__name:"BadgeBasic",setup(u){return(c,s)=>(l(),d("div",b,[a(o(e),{count:5},{default:p(()=>[...s[0]||(s[0]=[n("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),a(o(e),{count:0,"show-zero":""},{default:p(()=>[...s[1]||(s[1]=[n("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),a(o(e),{count:99},{default:p(()=>[...s[2]||(s[2]=[n("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),a(o(e),{count:100},{default:p(()=>[...s[3]||(s[3]=[n("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1})]))}}),h=`<template>
  <div style="display: flex; gap: 24px">
    <Badge :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge :count="0" show-zero>
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge :count="99">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge :count="100">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@hmfw/ant-design'
<\/script>
`,y={style:{display:"flex","flex-direction":"column",gap:"24px"}},v={style:{display:"flex",gap:"16px"}},w=k({__name:"BadgeClassNames",setup(u){return(c,s)=>(l(),d("div",y,[n("div",null,[s[1]||(s[1]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义数字徽标样式：",-1)),a(o(e),{count:5,"class-names":{indicator:"custom-indicator"}},{default:p(()=>[...s[0]||(s[0]=[n("div",{style:{width:"42px",height:"42px",background:"#f0f0f0","border-radius":"4px"}},null,-1)])]),_:1})]),n("div",null,[s[2]||(s[2]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义状态点样式：",-1)),n("div",v,[a(o(e),{status:"success",text:"成功","class-names":{dot:"custom-dot-success",text:"custom-text"}}),a(o(e),{status:"processing",text:"进行中","class-names":{dot:"custom-dot-processing",text:"custom-text"}}),a(o(e),{status:"error",text:"错误","class-names":{dot:"custom-dot-error",text:"custom-text"}})])]),n("div",null,[s[4]||(s[4]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器样式：",-1)),a(o(e),{count:99,"class-names":{root:"custom-root",indicator:"custom-indicator-large"}},{default:p(()=>[...s[3]||(s[3]=[n("div",{style:{width:"42px",height:"42px",background:"#f0f0f0","border-radius":"4px"}},null,-1)])]),_:1})]),n("div",null,[s[6]||(s[6]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),a(o(e),{count:12,styles:{indicator:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",fontSize:"14px"}}},{default:p(()=>[...s[5]||(s[5]=[n("div",{style:{width:"42px",height:"42px",background:"#f0f0f0","border-radius":"4px"}},null,-1)])]),_:1})]),n("div",null,[s[8]||(s[8]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义（dot 模式）：",-1)),a(o(e),{dot:"","class-names":{indicator:"custom-dot-badge"}},{default:p(()=>[...s[7]||(s[7]=[n("div",{style:{width:"42px",height:"42px",background:"#f0f0f0","border-radius":"4px"}},null,-1)])]),_:1})])]))}}),B=g(w,[["__scopeId","data-v-77cdaf6f"]]),q=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义数字徽标 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义数字徽标样式：</div>
      <Badge :count="5" :class-names="{ indicator: 'custom-indicator' }">
        <div style="width: 42px; height: 42px; background: #f0f0f0; border-radius: 4px"></div>
      </Badge>
    </div>

    <!-- 场景 2：自定义状态点 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义状态点样式：</div>
      <div style="display: flex; gap: 16px">
        <Badge status="success" text="成功" :class-names="{ dot: 'custom-dot-success', text: 'custom-text' }" />
        <Badge status="processing" text="进行中" :class-names="{ dot: 'custom-dot-processing', text: 'custom-text' }" />
        <Badge status="error" text="错误" :class-names="{ dot: 'custom-dot-error', text: 'custom-text' }" />
      </div>
    </div>

    <!-- 场景 3：自定义根容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器样式：</div>
      <Badge :count="99" :class-names="{ root: 'custom-root', indicator: 'custom-indicator-large' }">
        <div style="width: 42px; height: 42px; background: #f0f0f0; border-radius: 4px"></div>
      </Badge>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Badge
        :count="12"
        :styles="{
          indicator: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '14px' },
        }"
      >
        <div style="width: 42px; height: 42px; background: #f0f0f0; border-radius: 4px"></div>
      </Badge>
    </div>

    <!-- 场景 5：组合自定义（dot 模式） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义（dot 模式）：</div>
      <Badge dot :class-names="{ indicator: 'custom-dot-badge' }">
        <div style="width: 42px; height: 42px; background: #f0f0f0; border-radius: 4px"></div>
      </Badge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@hmfw/ant-design'
<\/script>

<style scoped>
:deep(.custom-indicator) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
  font-weight: bold;
  transition: all 0.3s;
}

:deep(.custom-indicator:hover) {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.6);
}

:deep(.custom-indicator-large) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  font-size: 16px;
  padding: 0 8px;
  min-width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 14px;
}

:deep(.custom-dot-success) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(82, 196, 26, 0.6);
  animation: pulse-success 1.5s ease-in-out infinite;
}

:deep(.custom-dot-processing) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(22, 119, 255, 0.6);
  animation: pulse-processing 1.5s ease-in-out infinite;
}

:deep(.custom-dot-error) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 77, 79, 0.6);
  animation: pulse-error 1.5s ease-in-out infinite;
}

:deep(.custom-text) {
  font-weight: 600;
  font-size: 14px;
}

:deep(.custom-root) {
  display: inline-block;
  padding: 4px;
  border-radius: 8px;
  background: #f0f5ff;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  background: #e6f4ff;
  transform: translateY(-2px);
}

:deep(.custom-dot-badge) {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  width: 12px;
  height: 12px;
  box-shadow: 0 0 12px rgba(255, 107, 107, 0.8);
  animation: pulse-custom 1.5s ease-in-out infinite;
}

@keyframes pulse-success {
  0%,
  100% {
    box-shadow: 0 0 8px rgba(82, 196, 26, 0.6);
  }
  50% {
    box-shadow: 0 0 16px rgba(82, 196, 26, 1);
  }
}

@keyframes pulse-processing {
  0%,
  100% {
    box-shadow: 0 0 8px rgba(22, 119, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 16px rgba(22, 119, 255, 1);
  }
}

@keyframes pulse-error {
  0%,
  100% {
    box-shadow: 0 0 8px rgba(255, 77, 79, 0.6);
  }
  50% {
    box-shadow: 0 0 16px rgba(255, 77, 79, 1);
  }
}

@keyframes pulse-custom {
  0%,
  100% {
    box-shadow: 0 0 12px rgba(255, 107, 107, 0.8);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 107, 107, 1);
    transform: scale(1.1);
  }
}
</style>
`,S={style:{display:"flex",gap:"24px"}},N=k({__name:"BadgeCustomColor",setup(u){return(c,s)=>(l(),d("div",S,[a(o(e),{color:"#f50",count:5},{default:p(()=>[...s[0]||(s[0]=[n("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),a(o(e),{color:"#2db7f5",count:5},{default:p(()=>[...s[1]||(s[1]=[n("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1}),a(o(e),{color:"#87d068",count:5},{default:p(()=>[...s[2]||(s[2]=[n("div",{style:{width:"42px",height:"42px",background:"#eee","border-radius":"4px"}},null,-1)])]),_:1})]))}}),C=`<template>
  <div style="display: flex; gap: 24px">
    <Badge color="#f50" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge color="#2db7f5" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge color="#87d068" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@hmfw/ant-design'
<\/script>
`,_={style:{display:"flex",gap:"32px","flex-wrap":"wrap"}},R=k({__name:"BadgeRibbon",setup(u){return(c,s)=>(l(),d("div",_,[a(o(e).Ribbon,{text:"Hippies"},{default:p(()=>[...s[0]||(s[0]=[n("div",{class:"ribbon-card"},"缎带在右侧（默认）",-1)])]),_:1}),a(o(e).Ribbon,{text:"Pies",color:"green",placement:"start"},{default:p(()=>[...s[1]||(s[1]=[n("div",{class:"ribbon-card"},"缎带在左侧 + 预设色",-1)])]),_:1}),a(o(e).Ribbon,{text:"Custom",color:"#2db7f5"},{default:p(()=>[...s[2]||(s[2]=[n("div",{class:"ribbon-card"},"自定义颜色",-1)])]),_:1})]))}}),z=g(R,[["__scopeId","data-v-431f34de"]]),E=`<template>
  <div style="display: flex; gap: 32px; flex-wrap: wrap">
    <Badge.Ribbon text="Hippies">
      <div class="ribbon-card">缎带在右侧（默认）</div>
    </Badge.Ribbon>

    <Badge.Ribbon text="Pies" color="green" placement="start">
      <div class="ribbon-card">缎带在左侧 + 预设色</div>
    </Badge.Ribbon>

    <Badge.Ribbon text="Custom" color="#2db7f5">
      <div class="ribbon-card">自定义颜色</div>
    </Badge.Ribbon>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@hmfw/ant-design'
<\/script>

<style scoped>
.ribbon-card {
  width: 180px;
  height: 64px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;
}
</style>
`,P={style:{display:"flex","flex-direction":"column",gap:"16px"}},$=k({__name:"BadgeStatus",setup(u){return(c,s)=>(l(),d("div",P,[a(o(e),{status:"success",text:"成功"}),a(o(e),{status:"error",text:"错误"}),a(o(e),{status:"default",text:"默认"}),a(o(e),{status:"processing",text:"进行中"}),a(o(e),{status:"warning",text:"警告"})]))}}),A=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Badge status="success" text="成功" />
    <Badge status="error" text="错误" />
    <Badge status="default" text="默认" />
    <Badge status="processing" text="进行中" />
    <Badge status="warning" text="警告" />
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@hmfw/ant-design'
<\/script>
`,D={class:"markdown-body"},H={__name:"badge",setup(u,{expose:c}){return c({frontmatter:{}}),(T,t)=>{const i=m("DemoBlock");return l(),d("div",D,[t[0]||(t[0]=n("h1",{id:"badge-徽标数",tabindex:"-1"},"Badge 徽标数",-1)),t[1]||(t[1]=n("p",null,"图标右上角的圆形徽标数字。",-1)),t[2]||(t[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"当需要在图标或文字旁边展示数字或状态时"),n("li",null,"用于消息提醒、待办事项等场景")],-1)),t[4]||(t[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"基本用法",tabindex:"-1"},"基本用法",-1)),t[6]||(t[6]=n("p",null,"简单的徽章展示，当 count 为 0 时，默认不显示。",-1)),a(i,{title:"基本用法",source:o(h)},{default:p(()=>[a(f)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"状态点",tabindex:"-1"},"状态点",-1)),t[8]||(t[8]=n("p",null,"用于表示状态的小圆点。",-1)),a(i,{title:"状态点",source:o(A)},{default:p(()=>[a($)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"自定义颜色",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=n("p",null,"可以自定义徽标的颜色。",-1)),a(i,{title:"自定义颜色",source:o(C)},{default:p(()=>[a(N)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"缎带",tabindex:"-1"},"缎带",-1)),t[12]||(t[12]=n("p",null,[r("使用 "),n("code",null,"Badge.Ribbon"),r(" 展示缎带样式标记。")],-1)),a(i,{title:"缎带",source:o(E)},{default:p(()=>[a(z)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[14]||(t[14]=n("p",null,[r("通过 "),n("code",null,"classNames"),r(" / "),n("code",null,"styles"),r(" 对 root、indicator、dot、text 等子元素做细粒度样式控制。")],-1)),a(i,{title:"语义化 className 与 style",source:o(q)},{default:p(()=>[a(B)]),_:1},8,["source"]),t[15]||(t[15]=x(`<h2 id="api" tabindex="-1">API</h2><h3 id="badge-props" tabindex="-1">Badge Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>count</td><td>展示的数字</td><td><code>number | string</code></td><td>-</td></tr><tr><td>dot</td><td>不展示数字，只有一个小红点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>overflowCount</td><td>展示封顶的数字值</td><td><code>number</code></td><td><code>99</code></td></tr><tr><td>showZero</td><td>当数值为 0 时，是否展示 Badge</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>status</td><td>设置 Badge 为状态点</td><td><code>&#39;success&#39; | &#39;processing&#39; | &#39;default&#39; | &#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>color</td><td>自定义小圆点的颜色</td><td><code>string</code></td><td>-</td></tr><tr><td>offset</td><td>设置状态点的位置偏移</td><td><code>[number, number]</code></td><td>-</td></tr><tr><td>size</td><td>徽标大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>text</td><td>在设置了 status 的前提下有效，设置状态点的文本</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>鼠标悬停时的提示文字</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>BadgeClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>BadgeStyles</code></td><td>-</td></tr></tbody></table><h3 id="badgeribbon-props" tabindex="-1">Badge.Ribbon Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>缎带内容</td><td><code>string</code></td><td>-</td></tr><tr><td>color</td><td>缎带颜色（预设色或自定义色值）</td><td><code>string</code></td><td>-</td></tr><tr><td>placement</td><td>缎带位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td><code>&#39;end&#39;</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对徽标的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">BadgeClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 徽标根容器</span>
  indicator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 数字/点标记容器（count/dot 模式的 sup 元素）</span>
  dot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 状态点（status/color 独立模式的圆点）</span>
  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 状态文本（status/color 独立模式的文字）</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BadgeStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  indicator<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dot<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  text<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- count/dot 模式：带包裹元素 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-badge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>包裹内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sup</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-badge-count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.indicator / styles.indicator 应用于此 --&gt;</span>
    5
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sup</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- status/color 独立模式：无包裹元素 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-badge hmfw-badge-status<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-badge-status-dot<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.dot / styles.dot 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-badge-status-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.text / styles.text 应用于此 --&gt;</span>
    状态文本
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义数字徽标 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ indicator: &#39;my-indicator&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义状态点 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>成功<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ dot: &#39;my-dot&#39;, text: &#39;my-text&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义根容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>99<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;my-badge-root&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-indicator)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-dot)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 8px <span class="token function">rgba</span><span class="token punctuation">(</span>82<span class="token punctuation">,</span> 196<span class="token punctuation">,</span> 26<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> pulse 1.5s ease-in-out infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-text)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-badge-root)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f0f5ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> pulse</span> <span class="token punctuation">{</span>
  <span class="token selector">0%,
  100%</span> <span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 8px <span class="token function">rgba</span><span class="token punctuation">(</span>82<span class="token punctuation">,</span> 196<span class="token punctuation">,</span> 26<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 16px <span class="token function">rgba</span><span class="token punctuation">(</span>82<span class="token punctuation">,</span> 196<span class="token punctuation">,</span> 26<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制数字徽标 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span>
    <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      indicator: { background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;, fontSize: &#39;14px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义状态点颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span>
    <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>成功<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      dot: { width: &#39;12px&#39;, height: &#39;12px&#39;, boxShadow: &#39;0 0 8px rgba(82, 196, 26, 0.6)&#39; },
      text: { fontWeight: 600, fontSize: &#39;14px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span>
    <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { padding: &#39;4px&#39;, borderRadius: &#39;8px&#39;, background: &#39;#f0f5ff&#39; },
      indicator: { fontSize: &#39;16px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatar</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>square<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>Badge 有两种渲染模式： <ul><li><strong>count/dot 模式</strong>：<code>indicator</code> 应用于 <code>&lt;sup class=&quot;hmfw-badge-count&quot;&gt;</code> 元素</li><li><strong>status/color 独立模式</strong>：<code>dot</code> 和 <code>text</code> 分别应用于状态点和文本</li></ul></li><li><code>styles.indicator</code> 会与组件内部计算的 offset/color 样式合并，用户样式优先</li><li><code>styles.dot</code> 会与组件内部计算的 color 样式合并，用户样式优先</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-badge-status</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Badge 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-success</code></td><td>成功状态色</td><td><code>#52c41a</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-placeholder</code></td><td>占位文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr></tbody></table>`,23))])}}};export{H as default};
