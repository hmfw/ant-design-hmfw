import{B as g}from"./Button-Cv9KoN5D.js";import{E as i,P as k}from"./Empty-C6aqGMnC.js";import{o as u,A as l,i as f,Q as r,n as e,L as s,m as o,k as y,h as t,_ as x,K as h,v as b,E,H as v,l as w}from"./index-aeAUYztw.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-DS-uT1Fx.js";const S=u({__name:"EmptyAction",setup(c){function p(){console.log("创建")}return(a,d)=>(l(),f(s(i),{description:"暂无数据"},{default:r(()=>[e(s(g),{onClick:p},{default:r(()=>[...d[0]||(d[0]=[o("立即创建",-1)])]),_:1})]),_:1}))}}),_=`<template>
  <Empty description="暂无数据">
    <Button @click="onCreate">立即创建</Button>
  </Empty>
</template>

<script setup lang="ts">
import { Empty, Button } from '@hmfw/ant-design'

function onCreate() {
  console.log('创建')
}
<\/script>
`,q=u({__name:"EmptyBasic",setup(c){return(p,a)=>(l(),f(s(i)))}}),N=`<template>
  <Empty />
</template>

<script setup lang="ts">
import { Empty } from '@hmfw/ant-design'
<\/script>
`,B={style:{display:"flex","flex-direction":"column",gap:"32px"}},C=u({__name:"EmptyClassNames",setup(c){return(p,a)=>(l(),y("div",B,[t("div",null,[a[0]||(a[0]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器背景与圆角：",-1)),e(s(i),{"class-names":{root:"custom-root"},description:"精美卡片样式"})]),t("div",null,[a[1]||(a[1]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图片容器（渐变背景 + 动画）：",-1)),e(s(i),{"class-names":{image:"custom-image"},description:"图片增强效果"})]),t("div",null,[a[2]||(a[2]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义描述文本样式：",-1)),e(s(i),{"class-names":{description:"custom-description"},description:"醒目的提示文字"})]),t("div",null,[a[4]||(a[4]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义多个节点：",-1)),e(s(i),{"class-names":{root:"custom-combined-root",image:"custom-combined-image",description:"custom-combined-description",footer:"custom-combined-footer"},description:"完整定制体验"},{default:r(()=>[e(s(g),{type:"primary"},{default:r(()=>[...a[3]||(a[3]=[o("立即创建",-1)])]),_:1})]),_:1})]),t("div",null,[a[5]||(a[5]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),e(s(i),{styles:{root:{padding:"48px 24px",background:"#f0f5ff",borderRadius:"12px"},image:{height:"120px",opacity:"0.8"},description:{fontSize:"16px",color:"#1677ff",fontWeight:"500"}},description:"内联样式控制"})])]))}}),P=x(C,[["__scopeId","data-v-c8910f14"]]),D=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器背景与圆角：</div>
      <Empty :class-names="{ root: 'custom-root' }" description="精美卡片样式" />
    </div>

    <!-- 场景 2：自定义图片容器 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图片容器（渐变背景 + 动画）：</div>
      <Empty :class-names="{ image: 'custom-image' }" description="图片增强效果" />
    </div>

    <!-- 场景 3：自定义描述文本样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义描述文本样式：</div>
      <Empty :class-names="{ description: 'custom-description' }" description="醒目的提示文字" />
    </div>

    <!-- 场景 4：组合使用多个 key -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义多个节点：</div>
      <Empty
        :class-names="{
          root: 'custom-combined-root',
          image: 'custom-combined-image',
          description: 'custom-combined-description',
          footer: 'custom-combined-footer',
        }"
        description="完整定制体验"
      >
        <template #default>
          <Button type="primary">立即创建</Button>
        </template>
      </Empty>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Empty
        :styles="{
          root: { padding: '48px 24px', background: '#f0f5ff', borderRadius: '12px' },
          image: { height: '120px', opacity: '0.8' },
          description: { fontSize: '16px', color: '#1677ff', fontWeight: '500' },
        }"
        description="内联样式控制"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Empty, Button } from '@hmfw/ant-design'
<\/script>

<style scoped>
/* 场景 1：根容器样式 */
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 48px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
  color: white;
}

:deep(.custom-root .hmfw-empty-description) {
  color: rgba(255, 255, 255, 0.9);
}

/* 场景 2：图片容器样式 */
:deep(.custom-image) {
  padding: 24px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 50%;
  transition: all 0.3s;
}

:deep(.custom-image:hover) {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 8px 20px rgba(252, 182, 159, 0.4);
}

/* 场景 3：描述文本样式 */
:deep(.custom-description) {
  font-size: 18px;
  font-weight: 600;
  color: #ff4d4f;
  text-shadow: 0 2px 4px rgba(255, 77, 79, 0.2);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* 场景 4：组合样式 */
:deep(.custom-combined-root) {
  background: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  padding: 56px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(250, 112, 154, 0.3);
}

:deep(.custom-combined-image) {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  transition: transform 0.3s;
}

:deep(.custom-combined-root:hover .custom-combined-image) {
  transform: translateY(-8px);
}

:deep(.custom-combined-description) {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

:deep(.custom-combined-footer) {
  margin-top: 24px;
}

:deep(.custom-combined-footer .hmfw-button) {
  background: white;
  color: #fa709a;
  border: none;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

:deep(.custom-combined-footer .hmfw-button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.4);
}
</style>
`,A=u({__name:"EmptyCustomDescription",setup(c){return(p,a)=>(l(),f(s(i),{description:"暂无数据，请稍后再试"}))}}),I=`<template>
  <Empty description="暂无数据，请稍后再试" />
</template>

<script setup lang="ts">
import { Empty } from '@hmfw/ant-design'
<\/script>
`,T=["data-theme"],M={style:{"margin-left":"12px"}},R=["data-theme"],$=u({__name:"EmptyDark",setup(c){const p=E("dark");return(a,d)=>(l(),y("div",null,[d[4]||(d[4]=t("p",{style:{"margin-bottom":"12px"}},"切换主题预览插画配色（暗黑模式下默认插画自动适配深色背景）：",-1)),t("div",{"data-theme":p.value,style:{"margin-bottom":"12px"}},[e(s(g),{onClick:d[0]||(d[0]=n=>p.value="light")},{default:r(()=>[...d[2]||(d[2]=[o("浅色",-1)])]),_:1}),e(s(g),{onClick:d[1]||(d[1]=n=>p.value="dark")},{default:r(()=>[...d[3]||(d[3]=[o("暗黑",-1)])]),_:1}),t("span",M,"当前："+h(p.value),1)],8,T),t("div",{"data-theme":p.value,style:b({padding:"24px",borderRadius:"8px",background:p.value==="dark"?"#141414":"#ffffff",color:p.value==="dark"?"rgba(255,255,255,0.65)":"inherit"})},[e(s(i),{description:"暗黑模式下的空状态"})],12,R)]))}}),z=`<template>
  <div>
    <p style="margin-bottom: 12px">切换主题预览插画配色（暗黑模式下默认插画自动适配深色背景）：</p>
    <div :data-theme="theme" style="margin-bottom: 12px">
      <Button @click="theme = 'light'">浅色</Button>
      <Button @click="theme = 'dark'">暗黑</Button>
      <span style="margin-left: 12px">当前：{{ theme }}</span>
    </div>
    <div
      :data-theme="theme"
      :style="{
        padding: '24px',
        borderRadius: '8px',
        background: theme === 'dark' ? '#141414' : '#ffffff',
        color: theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'inherit',
      }"
    >
      <Empty description="暗黑模式下的空状态" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Empty, Button } from '@hmfw/ant-design'

// 通过祖先元素的 data-theme="dark" / data-theme="light" 切换插画配色
// 也可使用 .hmfw-theme-dark / .hmfw-theme-light 类，或直接跟随系统配色
const theme = ref<'light' | 'dark'>('dark')
<\/script>
`,L={style:{display:"flex",gap:"32px","align-items":"flex-end","flex-wrap":"wrap"}},G=u({__name:"EmptyImageSize",setup(c){return(p,a)=>(l(),y("div",L,[e(s(i),{"image-width":48,"image-height":32,description:"小尺寸"}),e(s(i),{description:"默认尺寸"}),e(s(i),{"image-width":160,"image-height":100,description:"大尺寸"}),e(s(i),{"image-style":{height:"64px"},description:"imageStyle 控制"})]))}}),W=`<template>
  <div style="display: flex; gap: 32px; align-items: flex-end; flex-wrap: wrap">
    <Empty :image-width="48" :image-height="32" description="小尺寸" />
    <Empty description="默认尺寸" />
    <Empty :image-width="160" :image-height="100" description="大尺寸" />
    <Empty :image-style="{ height: '64px' }" description="imageStyle 控制" />
  </div>
</template>

<script setup lang="ts">
import { Empty } from '@hmfw/ant-design'
<\/script>
`,H=u({__name:"EmptySimple",setup(c){return(p,a)=>(l(),f(s(i),{image:s(k),description:"简约空状态"},null,8,["image"]))}}),V=`<template>
  <Empty :image="PRESENTED_IMAGE_SIMPLE" description="简约空状态" />
</template>

<script setup lang="ts">
import { Empty, PRESENTED_IMAGE_SIMPLE } from '@hmfw/ant-design'
<\/script>
`,F={class:"markdown-body"},j={__name:"empty",setup(c,{expose:p}){return p({frontmatter:{}}),(d,n)=>{const m=v("DemoBlock");return l(),y("div",F,[n[0]||(n[0]=t("h1",{id:"empty-空状态",tabindex:"-1"},"Empty 空状态",-1)),n[1]||(n[1]=t("p",null,"空状态时的展示占位图。",-1)),n[2]||(n[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("ul",null,[t("li",null,"当目前没有数据时，用于显式的用户提示"),t("li",null,"初始化场景时的引导创建流程")],-1)),n[4]||(n[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=t("p",null,"简单的空状态展示。",-1)),e(m,{title:"基础用法",source:s(N)},{default:r(()=>[e(q)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"自定义描述",tabindex:"-1"},"自定义描述",-1)),n[8]||(n[8]=t("p",null,"自定义描述文字。",-1)),e(m,{title:"自定义描述",source:s(I)},{default:r(()=>[e(A)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"底部操作",tabindex:"-1"},"底部操作",-1)),n[10]||(n[10]=t("p",null,"带有操作按钮的空状态。",-1)),e(m,{title:"底部操作",source:s(_)},{default:r(()=>[e(S)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"简约模式",tabindex:"-1"},"简约模式",-1)),n[12]||(n[12]=t("p",null,[o("通过 "),t("code",null,'image="simple"'),o("（或 "),t("code",null,"PRESENTED_IMAGE_SIMPLE"),o("）使用更紧凑的简约空状态。")],-1)),e(m,{title:"简约模式",source:s(V)},{default:r(()=>[e(H)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"自定义图片尺寸",tabindex:"-1"},"自定义图片尺寸",-1)),n[14]||(n[14]=t("p",null,[o("通过 "),t("code",null,"imageWidth"),o(" / "),t("code",null,"imageHeight"),o("（数字按 px 处理，也可传带单位字符串）或 "),t("code",null,"imageStyle"),o(" 控制默认插画的尺寸。")],-1)),e(m,{title:"自定义图片尺寸",source:s(W)},{default:r(()=>[e(G)]),_:1},8,["source"]),n[15]||(n[15]=t("h3",{id:"暗黑模式",tabindex:"-1"},"暗黑模式",-1)),n[16]||(n[16]=t("p",null,[o("默认插画的配色通过 CSS 变量驱动，会自动跟随系统配色（"),t("code",null,"prefers-color-scheme: dark"),o("）。也可在祖先元素上设置 "),t("code",null,'data-theme="dark"'),o("（或 "),t("code",null,".hmfw-theme-dark"),o(" 类）强制使用暗色插画。")],-1)),e(m,{title:"暗黑模式",source:s(z)},{default:r(()=>[e($)]),_:1},8,["source"]),n[17]||(n[17]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[18]||(n[18]=t("p",null,[o("通过 "),t("code",null,"classNames"),o(" / "),t("code",null,"styles"),o(" 对各子元素做细粒度样式控制。")],-1)),e(m,{title:"语义化 className 与 style",source:s(D)},{default:r(()=>[e(P)]),_:1},8,["source"]),n[19]||(n[19]=w(`<h2 id="api" tabindex="-1">API</h2><h3 id="empty-props" tabindex="-1">Empty Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>description</td><td>自定义描述内容，为 <code>false</code> 时不显示</td><td><code>string | false</code></td><td><code>&#39;暂无数据&#39;</code></td></tr><tr><td>image</td><td>显示图片：图片地址字符串，或预设标识 <code>&#39;default&#39;</code> / <code>&#39;simple&#39;</code>，为 <code>false</code> 时不显示</td><td><code>string | false</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>imageStyle</td><td>图片样式（优先级高于 imageWidth/imageHeight）</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>imageWidth</td><td>图片宽度，数字按 px 处理，亦可传带单位字符串</td><td><code>number | string</code></td><td>-</td></tr><tr><td>imageHeight</td><td>图片高度，数字按 px 处理，亦可传带单位字符串</td><td><code>number | string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>EmptyClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>EmptyStyles</code></td><td>-</td></tr></tbody></table><p>预设常量：<code>PRESENTED_IMAGE_DEFAULT</code>（<code>&#39;default&#39;</code>）、<code>PRESENTED_IMAGE_SIMPLE</code>（<code>&#39;simple&#39;</code>）。</p><h3 id="empty-slots" tabindex="-1">Empty Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>底部内容</td></tr><tr><td>description</td><td>自定义描述内容</td></tr><tr><td>image</td><td>自定义图片</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Empty 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">EmptyClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器</span>
  image<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 图片容器</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 描述文本</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 底部操作区</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">EmptyStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  image<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  description<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  footer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 基础结构 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-empty<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-empty-image<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.image / styles.image 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-empty-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.description / styles.description 应用于此 --&gt;</span>
    暂无数据
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-empty-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.footer / styles.footer 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>立即创建<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义根容器背景 --&gt;
  &lt;Empty :class-names=&quot;{ root: &#39;my-empty-root&#39; }&quot; description=&quot;精美卡片样式&quot; /&gt;

  &lt;!-- 自定义图片容器 --&gt;
  &lt;Empty :class-names=&quot;{ image: &#39;my-image-wrapper&#39; }&quot; description=&quot;图片增强效果&quot; /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Empty
    :class-names=&quot;{
      root: &#39;my-root&#39;,
      description: &#39;my-description&#39;,
      footer: &#39;my-footer&#39;,
    }&quot;
    description=&quot;完整定制&quot;
  &gt;
    &lt;Button type=&quot;primary&quot;&gt;立即创建&lt;/Button&gt;
  &lt;/Empty&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-empty-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 48px 32px;
  border-radius: 16px;
}

:deep(.my-image-wrapper) {
  padding: 24px;
  background: #ffecd2;
  border-radius: 50%;
  transition: transform 0.3s;
}

:deep(.my-image-wrapper:hover) {
  transform: scale(1.1);
}

:deep(.my-description) {
  font-size: 18px;
  font-weight: 600;
  color: #ff4d4f;
}

:deep(.my-footer) {
  margin-top: 24px;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制根容器 --&gt;
  &lt;Empty
    :styles=&quot;{
      root: { padding: &#39;48px 24px&#39;, background: &#39;#f0f5ff&#39;, borderRadius: &#39;12px&#39; },
    }&quot;
    description=&quot;自定义背景&quot;
  /&gt;

  &lt;!-- 内联样式控制图片尺寸 --&gt;
  &lt;Empty
    :styles=&quot;{
      image: { height: &#39;120px&#39;, opacity: &#39;0.8&#39; },
    }&quot;
    description=&quot;调整图片透明度&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Empty
    :styles=&quot;{
      root: { background: &#39;#fff7e6&#39;, borderRadius: &#39;8px&#39; },
      description: { fontSize: &#39;16px&#39;, color: &#39;#fa8c16&#39;, fontWeight: &#39;500&#39; },
      footer: { marginTop: &#39;20px&#39; },
    }&quot;
    description=&quot;组合内联样式&quot;
  &gt;
    &lt;Button&gt;创建&lt;/Button&gt;
  &lt;/Empty&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-empty-normal</code>）合并</li><li><code>description</code> 和 <code>footer</code> 节点仅在有内容时渲染，但 <code>classNames</code> / <code>styles</code> 会正确应用</li><li><code>styles.image</code> 与已有的 <code>imageStyle</code> prop 会合并，优先级：<code>sizeStyle</code> &lt; <code>imageStyle</code> &lt; <code>styles.image</code></li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Empty 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><h3 id="颜色类" tabindex="-1">颜色类</h3><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-empty-img-shadow</code></td><td>插画阴影色</td><td><code>#f5f5f5</code></td></tr><tr><td><code>--hmfw-empty-img-outline</code></td><td>插画轮廓色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-empty-img-bg</code></td><td>插画背景填充色</td><td><code>#fafafa</code></td></tr></tbody></table><h3 id="字体类" tabindex="-1">字体类</h3><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr></tbody></table><p><strong>说明</strong>：Empty 组件的插画配色（<code>--hmfw-empty-img-*</code>）支持暗黑模式，通过媒体查询（<code>prefers-color-scheme: dark</code>）或显式主题类（<code>data-theme=&quot;dark&quot;</code> / <code>.hmfw-theme-dark</code>）自动切换配色方案。</p>`,28))])}}};export{j as default};
