import{B as k}from"./Button-Bf04Y6dy.js";import{E as l,P as y}from"./Empty-D-gjwqDd.js";import{d as m,o as r,q as g,w as i,c as s,e as a,g as p,b as f,f as n,_ as x,A as h,J as b,r as E,h as v,i as w}from"./index-DpCWj_RH.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-BZTKujXV.js";const S=m({__name:"EmptyAction",setup(d){function o(){console.log("创建")}return(e,c)=>(r(),g(a(l),{description:"暂无数据"},{default:i(()=>[s(a(k),{onClick:o},{default:i(()=>[...c[0]||(c[0]=[p("立即创建",-1)])]),_:1})]),_:1}))}}),q=`<template>
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
`,_=m({__name:"EmptyBasic",setup(d){return(o,e)=>(r(),g(a(l)))}}),N=`<template>
  <Empty />
</template>

<script setup lang="ts">
import { Empty } from '@hmfw/ant-design'
<\/script>
`,B={style:{display:"flex","flex-direction":"column",gap:"32px"}},C=m({__name:"EmptyClassNames",setup(d){return(o,e)=>(r(),f("div",B,[n("div",null,[e[0]||(e[0]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器背景与圆角：",-1)),s(a(l),{"class-names":{root:"custom-root"},description:"精美卡片样式"})]),n("div",null,[e[1]||(e[1]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图片容器（渐变背景 + 动画）：",-1)),s(a(l),{"class-names":{image:"custom-image"},description:"图片增强效果"})]),n("div",null,[e[2]||(e[2]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义描述文本样式：",-1)),s(a(l),{"class-names":{description:"custom-description"},description:"醒目的提示文字"})]),n("div",null,[e[4]||(e[4]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义多个节点：",-1)),s(a(l),{"class-names":{root:"custom-combined-root",image:"custom-combined-image",description:"custom-combined-description",footer:"custom-combined-footer"},description:"完整定制体验"},{default:i(()=>[s(a(k),{type:"primary"},{default:i(()=>[...e[3]||(e[3]=[p("立即创建",-1)])]),_:1})]),_:1})]),n("div",null,[e[5]||(e[5]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),s(a(l),{styles:{root:{padding:"48px 24px",background:"#f0f5ff",borderRadius:"12px"},image:{height:"120px",opacity:"0.8"},description:{fontSize:"16px",color:"#1677ff",fontWeight:"500"}},description:"内联样式控制"})])]))}}),P=x(C,[["__scopeId","data-v-c8910f14"]]),D=`<template>
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
`,A=m({__name:"EmptyCustomDescription",setup(d){return(o,e)=>(r(),g(a(l),{description:"暂无数据，请稍后再试"}))}}),I=`<template>
  <Empty description="暂无数据，请稍后再试" />
</template>

<script setup lang="ts">
import { Empty } from '@hmfw/ant-design'
<\/script>
`,T=["data-theme"],M={style:{"margin-left":"12px"}},R=["data-theme"],$=m({__name:"EmptyDark",setup(d){const o=E("dark");return(e,c)=>(r(),f("div",null,[c[4]||(c[4]=n("p",{style:{"margin-bottom":"12px"}},"切换主题预览插画配色（暗黑模式下默认插画自动适配深色背景）：",-1)),n("div",{"data-theme":o.value,style:{"margin-bottom":"12px"}},[s(a(k),{onClick:c[0]||(c[0]=t=>o.value="light")},{default:i(()=>[...c[2]||(c[2]=[p("浅色",-1)])]),_:1}),s(a(k),{onClick:c[1]||(c[1]=t=>o.value="dark")},{default:i(()=>[...c[3]||(c[3]=[p("暗黑",-1)])]),_:1}),n("span",M,"当前："+h(o.value),1)],8,T),n("div",{"data-theme":o.value,style:b({padding:"24px",borderRadius:"8px",background:o.value==="dark"?"#141414":"#ffffff",color:o.value==="dark"?"rgba(255,255,255,0.65)":"inherit"})},[s(a(l),{description:"暗黑模式下的空状态"})],12,R)]))}}),z=`<template>
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
`,G={style:{display:"flex",gap:"32px","align-items":"flex-end","flex-wrap":"wrap"}},L=m({__name:"EmptyImageSize",setup(d){return(o,e)=>(r(),f("div",G,[s(a(l),{"image-width":48,"image-height":32,description:"小尺寸"}),s(a(l),{description:"默认尺寸"}),s(a(l),{"image-width":160,"image-height":100,description:"大尺寸"}),s(a(l),{"image-style":{height:"64px"},description:"imageStyle 控制"})]))}}),W=`<template>
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
`,V=m({__name:"EmptySimple",setup(d){return(o,e)=>(r(),g(a(l),{image:a(y),description:"简约空状态"},null,8,["image"]))}}),F=`<template>
  <Empty :image="PRESENTED_IMAGE_SIMPLE" description="简约空状态" />
</template>

<script setup lang="ts">
import { Empty, PRESENTED_IMAGE_SIMPLE } from '@hmfw/ant-design'
<\/script>
`,H={class:"markdown-body"},K={__name:"empty",setup(d,{expose:o}){return o({frontmatter:{}}),(c,t)=>{const u=v("DemoBlock");return r(),f("div",H,[t[0]||(t[0]=n("h1",{id:"empty-空状态",tabindex:"-1"},"Empty 空状态",-1)),t[1]||(t[1]=n("p",null,"空状态时的展示占位图。",-1)),t[2]||(t[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"当目前没有数据时，用于显式的用户提示"),n("li",null,"初始化场景时的引导创建流程")],-1)),t[4]||(t[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"简单的空状态展示。",-1)),s(u,{title:"基础用法",source:a(N)},{default:i(()=>[s(_)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"自定义描述",tabindex:"-1"},"自定义描述",-1)),t[8]||(t[8]=n("p",null,"自定义描述文字。",-1)),s(u,{title:"自定义描述",source:a(I)},{default:i(()=>[s(A)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"底部操作",tabindex:"-1"},"底部操作",-1)),t[10]||(t[10]=n("p",null,"带有操作按钮的空状态。",-1)),s(u,{title:"底部操作",source:a(q)},{default:i(()=>[s(S)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"简约模式",tabindex:"-1"},"简约模式",-1)),t[12]||(t[12]=n("p",null,[p("通过 "),n("code",null,'image="simple"'),p("（或 "),n("code",null,"PRESENTED_IMAGE_SIMPLE"),p("）使用更紧凑的简约空状态。")],-1)),s(u,{title:"简约模式",source:a(F)},{default:i(()=>[s(V)]),_:1},8,["source"]),t[13]||(t[13]=n("h3",{id:"自定义图片尺寸",tabindex:"-1"},"自定义图片尺寸",-1)),t[14]||(t[14]=n("p",null,[p("通过 "),n("code",null,"imageWidth"),p(" / "),n("code",null,"imageHeight"),p("（数字按 px 处理，也可传带单位字符串）或 "),n("code",null,"imageStyle"),p(" 控制默认插画的尺寸。")],-1)),s(u,{title:"自定义图片尺寸",source:a(W)},{default:i(()=>[s(L)]),_:1},8,["source"]),t[15]||(t[15]=n("h3",{id:"暗黑模式",tabindex:"-1"},"暗黑模式",-1)),t[16]||(t[16]=n("p",null,[p("默认插画的配色通过 CSS 变量驱动，会自动跟随系统配色（"),n("code",null,"prefers-color-scheme: dark"),p("）。也可在祖先元素上设置 "),n("code",null,'data-theme="dark"'),p("（或 "),n("code",null,".hmfw-theme-dark"),p(" 类）强制使用暗色插画。")],-1)),s(u,{title:"暗黑模式",source:a(z)},{default:i(()=>[s($)]),_:1},8,["source"]),t[17]||(t[17]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[18]||(t[18]=n("p",null,[p("通过 "),n("code",null,"classNames"),p(" / "),n("code",null,"styles"),p(" 对各子元素做细粒度样式控制。")],-1)),s(u,{title:"语义化 className 与 style",source:a(D)},{default:i(()=>[s(P)]),_:1},8,["source"]),t[19]||(t[19]=w(`<h2 id="api" tabindex="-1">API</h2><h3 id="empty-props" tabindex="-1">Empty Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>description</td><td>自定义描述内容，为 <code>false</code> 时不显示</td><td><code>string | false</code></td><td><code>&#39;暂无数据&#39;</code></td></tr><tr><td>image</td><td>显示图片：图片地址字符串，或预设标识 <code>&#39;default&#39;</code> / <code>&#39;simple&#39;</code>，为 <code>false</code> 时不显示</td><td><code>string | false</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>imageStyle</td><td>图片样式（优先级高于 imageWidth/imageHeight）</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>imageWidth</td><td>图片宽度，数字按 px 处理，亦可传带单位字符串</td><td><code>number | string</code></td><td>-</td></tr><tr><td>imageHeight</td><td>图片高度，数字按 px 处理，亦可传带单位字符串</td><td><code>number | string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>EmptyClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>EmptyStyles</code></td><td>-</td></tr></tbody></table><p>预设常量：<code>PRESENTED_IMAGE_DEFAULT</code>（<code>&#39;default&#39;</code>）、<code>PRESENTED_IMAGE_SIMPLE</code>（<code>&#39;simple&#39;</code>）。</p><h3 id="empty-slots" tabindex="-1">Empty Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>底部内容</td></tr><tr><td>description</td><td>自定义描述内容</td></tr><tr><td>image</td><td>自定义图片</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Empty 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义根容器背景 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Empty</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;my-empty-root&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>精美卡片样式<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义图片容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Empty</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ image: &#39;my-image-wrapper&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>图片增强效果<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Empty</span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-root&#39;,
      description: &#39;my-description&#39;,
      footer: &#39;my-footer&#39;,
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>完整定制<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>立即创建<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Empty</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-empty-root)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 48px 32px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-image-wrapper)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ffecd2<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-image-wrapper:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-description)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff4d4f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-footer)</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制根容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Empty</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { padding: &#39;48px 24px&#39;, background: &#39;#f0f5ff&#39;, borderRadius: &#39;12px&#39; },
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>自定义背景<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 内联样式控制图片尺寸 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Empty</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      image: { height: &#39;120px&#39;, opacity: &#39;0.8&#39; },
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>调整图片透明度<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Empty</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { background: &#39;#fff7e6&#39;, borderRadius: &#39;8px&#39; },
      description: { fontSize: &#39;16px&#39;, color: &#39;#fa8c16&#39;, fontWeight: &#39;500&#39; },
      footer: { marginTop: &#39;20px&#39; },
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>组合内联样式<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>创建<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Empty</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-empty-normal</code>）合并</li><li><code>description</code> 和 <code>footer</code> 节点仅在有内容时渲染，但 <code>classNames</code> / <code>styles</code> 会正确应用</li><li><code>styles.image</code> 与已有的 <code>imageStyle</code> prop 会合并，优先级：<code>sizeStyle</code> &lt; <code>imageStyle</code> &lt; <code>styles.image</code></li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Empty 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><h3 id="颜色类" tabindex="-1">颜色类</h3><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-empty-img-shadow</code></td><td>插画阴影色</td><td><code>#f5f5f5</code></td></tr><tr><td><code>--hmfw-empty-img-outline</code></td><td>插画轮廓色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-empty-img-bg</code></td><td>插画背景填充色</td><td><code>#fafafa</code></td></tr></tbody></table><h3 id="字体类" tabindex="-1">字体类</h3><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr></tbody></table><p><strong>说明</strong>：Empty 组件的插画配色（<code>--hmfw-empty-img-*</code>）支持暗黑模式，通过媒体查询（<code>prefers-color-scheme: dark</code>）或显式主题类（<code>data-theme=&quot;dark&quot;</code> / <code>.hmfw-theme-dark</code>）自动切换配色方案。</p>`,28))])}}};export{K as default};
