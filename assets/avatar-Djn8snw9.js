import{A as o,a as g}from"./Avatar-BZWXxOgw.js";import{o as m,A as i,k as d,n as a,K as s,R as r,m as l,h as n,_ as v,H as x,l as f}from"./index-Y1x_vdlx.js";import{U as k}from"./UserOutlined-20uNASml.js";import"./cls-S9IiI6wd.js";const b={style:{display:"flex",gap:"16px","align-items":"center"}},y=m({__name:"AvatarBasic",setup(c){return(p,t)=>(i(),d("div",b,[a(s(o),{size:64,src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),a(s(o),{size:64},{default:r(()=>[...t[0]||(t[0]=[l(" U ",-1)])]),_:1}),a(s(o),{size:64,style:{"background-color":"#87d068"}},{default:r(()=>[...t[1]||(t[1]=[l(" USER ",-1)])]),_:1})]))}}),A=`<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Avatar :size="64" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    <Avatar :size="64"> U </Avatar>
    <Avatar :size="64" style="background-color: #87d068"> USER </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
<\/script>
`,h={style:{display:"flex","flex-direction":"column",gap:"24px"}},w={style:{display:"flex",gap:"16px","align-items":"center"}},q={style:{display:"flex",gap:"16px","align-items":"center"}},z={style:{display:"flex",gap:"16px","align-items":"center"}},S={style:{display:"flex",gap:"16px","align-items":"center"}},N={style:{display:"flex",gap:"16px","align-items":"center"}},C=m({__name:"AvatarClassNames",setup(c){return(p,t)=>(i(),d("div",h,[n("div",null,[t[2]||(t[2]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器样式：",-1)),n("div",w,[a(s(o),{"class-names":{root:"gradient-avatar"}},{default:r(()=>[...t[0]||(t[0]=[l("U",-1)])]),_:1}),a(s(o),{"class-names":{root:"gradient-avatar"},shape:"square"},{default:r(()=>[...t[1]||(t[1]=[l("U",-1)])]),_:1}),a(s(o),{src:"https://i.pravatar.cc/150?img=1","class-names":{root:"gradient-avatar"}})])]),n("div",null,[t[3]||(t[3]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图片样式：",-1)),n("div",q,[a(s(o),{src:"https://i.pravatar.cc/150?img=2","class-names":{img:"custom-img"},size:"{64}"}),a(s(o),{src:"https://i.pravatar.cc/150?img=3","class-names":{img:"custom-img"},size:"{64}",shape:"square"})])]),n("div",null,[t[7]||(t[7]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义文本容器样式：",-1)),n("div",z,[a(s(o),{"class-names":{string:"text-glow"},size:"{64}"},{default:r(()=>[...t[4]||(t[4]=[l("A",-1)])]),_:1}),a(s(o),{"class-names":{string:"text-glow"},size:"{64}"},{default:r(()=>[...t[5]||(t[5]=[l("李",-1)])]),_:1}),a(s(o),{"class-names":{string:"text-glow"},size:"{64}",shape:"square"},{default:r(()=>[...t[6]||(t[6]=[l("Vue",-1)])]),_:1})])]),n("div",null,[t[9]||(t[9]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合使用多个 key：",-1)),n("div",S,[a(s(o),{"class-names":{root:"gradient-avatar",string:"text-glow"},size:"{64}"},{default:r(()=>[...t[8]||(t[8]=[l(" K ",-1)])]),_:1}),a(s(o),{src:"https://i.pravatar.cc/150?img=4","class-names":{root:"gradient-avatar",img:"custom-img"},size:"{64}"})])]),n("div",null,[t[11]||(t[11]=n("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),n("div",N,[a(s(o),{styles:{root:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"3px solid #fff",boxShadow:"0 4px 12px rgba(102, 126, 234, 0.4)"},string:{color:"#fff",fontWeight:"bold"}},size:"{64}"},{default:r(()=>[...t[10]||(t[10]=[l(" JS ",-1)])]),_:1}),a(s(o),{src:"https://i.pravatar.cc/150?img=5",styles:{root:{borderRadius:"12px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.15)"},img:{filter:"grayscale(50%)"}},size:"{64}",shape:"square"})])])]))}}),_=v(C,[["__scopeId","data-v-eeea456d"]]),B=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器样式：</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Avatar :class-names="{ root: 'gradient-avatar' }">U</Avatar>
        <Avatar :class-names="{ root: 'gradient-avatar' }" shape="square">U</Avatar>
        <Avatar src="https://i.pravatar.cc/150?img=1" :class-names="{ root: 'gradient-avatar' }" />
      </div>
    </div>

    <!-- 场景 2：自定义图片样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图片样式：</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Avatar src="https://i.pravatar.cc/150?img=2" :class-names="{ img: 'custom-img' }" size="{64}" />
        <Avatar src="https://i.pravatar.cc/150?img=3" :class-names="{ img: 'custom-img' }" size="{64}" shape="square" />
      </div>
    </div>

    <!-- 场景 3：自定义文本容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义文本容器样式：</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Avatar :class-names="{ string: 'text-glow' }" size="{64}">A</Avatar>
        <Avatar :class-names="{ string: 'text-glow' }" size="{64}">李</Avatar>
        <Avatar :class-names="{ string: 'text-glow' }" size="{64}" shape="square">Vue</Avatar>
      </div>
    </div>

    <!-- 场景 4：组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合使用多个 key：</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Avatar :class-names="{ root: 'gradient-avatar', string: 'text-glow' }" size="{64}"> K </Avatar>
        <Avatar
          src="https://i.pravatar.cc/150?img=4"
          :class-names="{ root: 'gradient-avatar', img: 'custom-img' }"
          size="{64}"
        />
      </div>
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <div style="display: flex; gap: 16px; align-items: center">
        <Avatar
          :styles="{
            root: {
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: '3px solid #fff',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
            },
            string: { color: '#fff', fontWeight: 'bold' },
          }"
          size="{64}"
        >
          JS
        </Avatar>
        <Avatar
          src="https://i.pravatar.cc/150?img=5"
          :styles="{
            root: { borderRadius: '12px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)' },
            img: { filter: 'grayscale(50%)' },
          }"
          size="{64}"
          shape="square"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
<\/script>

<style scoped>
:deep(.gradient-avatar) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: 2px solid #fff;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
}

:deep(.gradient-avatar:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
}

:deep(.custom-img) {
  filter: saturate(1.5) contrast(1.1);
  transition: filter 0.3s;
}

:deep(.custom-img:hover) {
  filter: saturate(1.8) contrast(1.2);
}

:deep(.text-glow) {
  color: #fff;
  font-weight: bold;
  text-shadow:
    0 0 8px rgba(255, 255, 255, 0.8),
    0 0 16px rgba(102, 126, 234, 0.6);
}
</style>
`,E={style:{display:"flex","flex-direction":"column",gap:"16px"}},U=m({__name:"AvatarGroupDemo",setup(c){return(p,t)=>(i(),d("div",E,[a(s(g),{"max-count":3},{default:r(()=>[a(s(o),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}),a(s(o),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=2"}),a(s(o),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=3"}),a(s(o),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=4"}),a(s(o),{src:"https://api.dicebear.com/7.x/miniavs/svg?seed=5"})]),_:1}),a(s(g),{size:"large",shape:"square"},{default:r(()=>[a(s(o),{style:{background:"#f56a00"}},{default:r(()=>[...t[0]||(t[0]=[l(" A ",-1)])]),_:1}),a(s(o),{style:{background:"#1677ff"}},{default:r(()=>[...t[1]||(t[1]=[l(" B ",-1)])]),_:1}),a(s(o),{style:{background:"#87d068"}},{default:r(()=>[...t[2]||(t[2]=[l(" C ",-1)])]),_:1})]),_:1})]))}}),G=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <AvatarGroup :max-count="3">
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
    </AvatarGroup>

    <!-- size/shape 在 Group 上设置后自动下发给子 Avatar -->
    <AvatarGroup size="large" shape="square">
      <Avatar style="background: #f56a00"> A </Avatar>
      <Avatar style="background: #1677ff"> B </Avatar>
      <Avatar style="background: #87d068"> C </Avatar>
    </AvatarGroup>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarGroup } from 'ant-design-hmfw'
<\/script>
`,P={style:{display:"flex",gap:"16px","align-items":"center"}},$=m({__name:"AvatarResponsive",setup(c){return(p,t)=>(i(),d("div",P,[a(s(o),{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:100}},{default:r(()=>[...t[0]||(t[0]=[l(" 响应式 ",-1)])]),_:1}),a(s(o),{size:{xs:24,sm:32,md:40,lg:64,xl:80,xxl:100},icon:s(k)},null,8,["icon"]),t[1]||(t[1]=n("div",{style:{color:"#999","font-size":"12px"}},"调整浏览器窗口宽度查看头像尺寸变化",-1))]))}}),R=`<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
import { UserOutlined } from 'ant-design-hmfw'
<\/script>

<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
      <template #default> 响应式 </template>
    </Avatar>
    <Avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }" :icon="UserOutlined" />
    <div style="color: #999; font-size: 12px">调整浏览器窗口宽度查看头像尺寸变化</div>
  </div>
</template>
`,D={style:{display:"flex",gap:"16px","align-items":"center"}},V=m({__name:"AvatarSize",setup(c){return(p,t)=>(i(),d("div",D,[a(s(o),{size:"small"},{default:r(()=>[...t[0]||(t[0]=[l(" S ",-1)])]),_:1}),a(s(o),null,{default:r(()=>[...t[1]||(t[1]=[l("M",-1)])]),_:1}),a(s(o),{size:"large"},{default:r(()=>[...t[2]||(t[2]=[l(" L ",-1)])]),_:1}),a(s(o),{size:64},{default:r(()=>[...t[3]||(t[3]=[l(" 64 ",-1)])]),_:1})]))}}),O=`<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Avatar size="small"> S </Avatar>
    <Avatar>M</Avatar>
    <Avatar size="large"> L </Avatar>
    <Avatar :size="64"> 64 </Avatar>
  </div>
</template>

<script setup lang="ts">
import { Avatar } from 'ant-design-hmfw'
<\/script>
`,T={class:"markdown-body"},j={__name:"avatar",setup(c,{expose:p}){return p({frontmatter:{}}),(I,e)=>{const u=x("DemoBlock");return i(),d("div",T,[e[0]||(e[0]=n("h1",{id:"avatar-头像",tabindex:"-1"},"Avatar 头像",-1)),e[1]||(e[1]=n("p",null,"用来代表用户或事物，支持图片、图标或字符展示。",-1)),e[2]||(e[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=n("ul",null,[n("li",null,"需要展示用户头像或事物图标时"),n("li",null,"需要展示一组用户或事物时")],-1)),e[4]||(e[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=n("h3",{id:"基本用法",tabindex:"-1"},"基本用法",-1)),e[6]||(e[6]=n("p",null,"支持三种类型：图片、图标和字符。",-1)),a(u,{title:"基本用法",source:s(A)},{default:r(()=>[a(y)]),_:1},8,["source"]),e[7]||(e[7]=n("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),e[8]||(e[8]=n("p",null,"支持三种预设尺寸和自定义尺寸。",-1)),a(u,{title:"不同尺寸",source:s(O)},{default:r(()=>[a(V)]),_:1},8,["source"]),e[9]||(e[9]=n("h3",{id:"响应式尺寸",tabindex:"-1"},"响应式尺寸",-1)),e[10]||(e[10]=n("p",null,"支持响应式尺寸配置，根据屏幕断点自动调整头像大小。",-1)),a(u,{title:"响应式尺寸",source:s(R)},{default:r(()=>[a($)]),_:1},8,["source"]),e[11]||(e[11]=n("h3",{id:"头像组",tabindex:"-1"},"头像组",-1)),e[12]||(e[12]=n("p",null,"使用 AvatarGroup 可以展示一组头像。",-1)),a(u,{title:"头像组",source:s(G)},{default:r(()=>[a(U)]),_:1},8,["source"]),e[13]||(e[13]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[14]||(e[14]=n("p",null,[l("通过 "),n("code",null,"classNames"),l(" / "),n("code",null,"styles"),l(" 对各子元素做细粒度样式控制。")],-1)),a(u,{title:"语义化 className 与 style",source:s(B)},{default:r(()=>[a(_)]),_:1},8,["source"]),e[15]||(e[15]=f(`<h2 id="api" tabindex="-1">API</h2><h3 id="avatar-props" tabindex="-1">Avatar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>头像大小，支持响应式配置</td><td><code>number | &#39;small&#39; | &#39;default&#39; | &#39;large&#39; | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>头像形状</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr><tr><td>src</td><td>图片地址</td><td><code>string</code></td><td>-</td></tr><tr><td>srcSet</td><td>图片响应式资源地址</td><td><code>string</code></td><td>-</td></tr><tr><td>alt</td><td>图片无法显示时的替代文本</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标组件</td><td><code>Component</code></td><td>-</td></tr><tr><td>draggable</td><td>图片是否允许拖拽</td><td><code>boolean | &#39;true&#39; | &#39;false&#39;</code></td><td>-</td></tr><tr><td>crossOrigin</td><td>CORS 属性设置</td><td><code>&#39;&#39; | &#39;anonymous&#39; | &#39;use-credentials&#39;</code></td><td>-</td></tr><tr><td>referrerPolicy</td><td>referrer 策略</td><td><code>&#39;no-referrer&#39; | &#39;no-referrer-when-downgrade&#39; | &#39;origin&#39; | &#39;origin-when-cross-origin&#39; | &#39;same-origin&#39; | &#39;strict-origin&#39; | &#39;strict-origin-when-cross-origin&#39; | &#39;unsafe-url&#39;</code></td><td>-</td></tr><tr><td>gap</td><td>字符类型距离左右两侧边界单位像素</td><td><code>number</code></td><td><code>4</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AvatarClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>AvatarStyles</code></td><td>-</td></tr></tbody></table><h3 id="avatargroup-props" tabindex="-1">AvatarGroup Props</h3><p>设置后会自动下发 <code>size</code>/<code>shape</code> 给子 Avatar（子 Avatar 显式设置可覆盖）。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>maxCount</td><td>最多显示的头像数量</td><td><code>number</code></td><td>-</td></tr><tr><td>maxStyle</td><td>多余头像样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>size</td><td>头像大小（下发给子 Avatar），支持响应式配置</td><td><code>number | &#39;small&#39; | &#39;default&#39; | &#39;large&#39; | { xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>shape</td><td>头像形状（下发给子 Avatar）</td><td><code>&#39;circle&#39; | &#39;square&#39;</code></td><td><code>&#39;circle&#39;</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对头像的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">AvatarClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头像根容器 &lt;span&gt;</span>
  img<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 图片元素（src 模式）</span>
  <span class="token builtin">string</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 文本容器（字符/slot 模式）</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">AvatarStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  img<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  <span class="token builtin">string</span><span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 图片模式 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-avatar hmfw-avatar-circle hmfw-avatar-image<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.img / styles.img 应用于此 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 图标模式（无包裹层，icon 直接渲染） --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-avatar hmfw-avatar-circle hmfw-avatar-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconComponent</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ 图标组件无包裹层，不支持 classNames.icon --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 字符/slot 模式 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-avatar hmfw-avatar-circle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-avatar-string<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.string / styles.string 应用于此 --&gt;</span>
    文本内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义根容器样式 --&gt;
  &lt;Avatar :class-names=&quot;{ root: &#39;gradient-avatar&#39; }&quot;&gt;U&lt;/Avatar&gt;

  &lt;!-- 自定义图片样式 --&gt;
  &lt;Avatar src=&quot;https://example.com/avatar.jpg&quot; :class-names=&quot;{ root: &#39;custom-root&#39;, img: &#39;custom-img&#39; }&quot; /&gt;

  &lt;!-- 自定义文本容器 --&gt;
  &lt;Avatar :class-names=&quot;{ string: &#39;text-glow&#39; }&quot;&gt;李&lt;/Avatar&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.gradient-avatar) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: 2px solid #fff;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.custom-img) {
  filter: saturate(1.5) contrast(1.1);
  transition: filter 0.3s;
}

:deep(.text-glow) {
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制根容器 --&gt;
  &lt;Avatar
    :styles=&quot;{
      root: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        boxShadow: &#39;0 4px 12px rgba(102, 126, 234, 0.4)&#39;,
      },
    }&quot;
  &gt;
    JS
  &lt;/Avatar&gt;

  &lt;!-- 内联样式控制图片 --&gt;
  &lt;Avatar
    src=&quot;https://example.com/avatar.jpg&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;12px&#39; },
      img: { filter: &#39;grayscale(50%)&#39; },
    }&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Avatar
    :styles=&quot;{
      root: { background: &#39;#1677ff&#39; },
      string: { color: &#39;#fff&#39;, fontWeight: &#39;bold&#39; },
    }&quot;
  &gt;
    Vue
  &lt;/Avatar&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>图标模式（<code>icon</code> prop）下，图标组件直接渲染无包裹层，无法应用 <code>classNames.icon</code> 或 <code>styles.icon</code></li><li><code>classNames.string</code> 仅在字符/slot 模式下生效，<code>classNames.img</code> 仅在图片模式下生效</li><li><code>styles.string</code> 会与内置的 <code>transform</code> 样式合并，<code>styles.root</code> 会与内置的 <code>sizeStyle</code> 合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Avatar 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-color-text-placeholder</code></td><td>占位符文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr></tbody></table>`,24))])}}};export{j as default};
