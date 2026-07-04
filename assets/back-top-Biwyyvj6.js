import{d as h,x as H,u as R,r as T,k as M,y as $,c as l,T as L,a as D,o as u,b as k,f as p,F as N,z as C,A as _,e as r,_ as O,w as y,h as z,i as F,g as w}from"./index-D5KOSvVL.js";import{c as B}from"./cls-S9IiI6wd.js";import{U as P}from"./UpOutlined-CWkHuvlg.js";function j(t){let s=null;const e=function(...a){s===null&&(s=requestAnimationFrame(()=>{t.apply(this,a),s=null}))};return e.cancel=()=>{s!==null&&(cancelAnimationFrame(s),s=null)},e}function A(t){return typeof window>"u"||!t?0:t===window||t.window===t?t.pageYOffset:t instanceof Document?t.documentElement.scrollTop:t instanceof HTMLElement?t.scrollTop:0}function I(t,s,e,a){const n=e-s;return t/=a/2,t<1?n/2*t*t*t+s:(t-=2,n/2*(t*t*t+2)+s)}function V(t,s={}){const{getContainer:e=()=>window,duration:a=450,callback:n}=s,c=e(),x=A(c),g=Date.now();let d;const v=()=>{const f=Date.now()-g,b=I(f>a?a:f,x,t,a);c===window||c.window===c?c.scrollTo(window.pageXOffset,b):c instanceof Document?c.documentElement.scrollTop=b:c instanceof HTMLElement&&(c.scrollTop=b),f<a?d=requestAnimationFrame(v):n&&n()};return d=requestAnimationFrame(v),()=>{cancelAnimationFrame(d)}}const m=h({name:"BackTop",props:{visibilityHeight:{type:Number,default:400},target:Function,duration:{type:Number,default:450},className:String,rootClassName:String,style:[String,Object],prefixCls:String,classNames:Object,styles:Object},emits:["click"],setup(t,{slots:s,emit:e}){const a=H(),n=t.prefixCls||R("back-top"),c=T(t.visibilityHeight===0),x=T(),g=()=>{var o;return((o=x.value)==null?void 0:o.ownerDocument)||window},d=j(o=>{const i=A(o.target);c.value=i>=t.visibilityHeight}),v=o=>{const i=t.target||g;V(0,{getContainer:i,duration:t.duration}),e("click",o)};M(()=>{const i=(t.target||g)();d({target:i}),i==null||i.addEventListener("scroll",d)}),$(()=>{const i=(t.target||g)();d.cancel(),i==null||i.removeEventListener("scroll",d)});const S=D(()=>{var o;return B(n,{[`${n}-rtl`]:a.value.direction==="rtl"},t.className,t.rootClassName,(o=t.classNames)==null?void 0:o.root)}),f=D(()=>{var i;const o=(i=t.styles)==null?void 0:i.root;return o?typeof t.style=="string"?o:{...t.style,...o}:t.style}),b=()=>{var o,i,q,E;return l("div",{class:B(`${n}-content`,(o=t.classNames)==null?void 0:o.content),style:(i=t.styles)==null?void 0:i.content},[l("div",{class:B(`${n}-icon`,(q=t.classNames)==null?void 0:q.icon),style:(E=t.styles)==null?void 0:E.icon},[l(P,{class:"hmfw-icon"},null)])])};return()=>l("div",{ref:x,class:S.value,style:f.value,onClick:v},[l(L,{name:"hmfw-fade"},{default:()=>{var o;return[c.value&&(((o=s.default)==null?void 0:o.call(s))||b())]}})])}}),U={style:{height:"1500px",padding:"20px",background:"linear-gradient(to bottom, #fff, #f0f0f0)"}},Y=h({__name:"BackTopBasic",setup(t){return(s,e)=>(u(),k("div",U,[e[0]||(e[0]=p("p",{style:{"margin-bottom":"20px"}},"向下滚动页面，右下角会出现回到顶部按钮。",-1)),e[1]||(e[1]=p("p",{style:{"margin-bottom":"20px"}},"默认当页面滚动超过 400px 时显示。",-1)),(u(),k(N,null,C(50,a=>p("div",{key:a,style:{"margin-bottom":"10px"}},"内容行 "+_(a),1)),64)),l(r(m))]))}}),W=`<template>
  <div style="height: 1500px; padding: 20px; background: linear-gradient(to bottom, #fff, #f0f0f0)">
    <p style="margin-bottom: 20px">向下滚动页面，右下角会出现回到顶部按钮。</p>
    <p style="margin-bottom: 20px">默认当页面滚动超过 400px 时显示。</p>
    <div v-for="i in 50" :key="i" style="margin-bottom: 10px">内容行 {{ i }}</div>
    <BackTop />
  </div>
</template>

<script setup lang="ts">
import { BackTop } from '@hmfw/ant-design'
<\/script>
`,X={style:{position:"relative",height:"220px",overflow:"auto",border:"1px solid #f0f0f0","border-radius":"8px",padding:"16px"}},G={style:{height:"800px",padding:"8px"}},J=h({__name:"BackTopClassNames",setup(t){const s=T(),e=()=>s.value||document.body;return(a,n)=>(u(),k("div",X,[p("div",G,[n[0]||(n[0]=p("p",{style:{color:"#666"}},"在此容器内向下滚动，即可看到经过语义化定制的回到顶部按钮。",-1)),n[1]||(n[1]=p("p",{style:{color:"#999","margin-top":"8px"}}," 下面通过 classNames / styles 对 root、content、icon 三个子节点做细粒度样式控制。 ",-1)),l(r(m),{target:e,"visibility-height":0,"class-names":{root:"demo-bt-root"}}),l(r(m),{target:e,"visibility-height":0,"class-names":{content:"demo-bt-content",icon:"demo-bt-icon"},style:{right:"100px"}}),l(r(m),{target:e,"visibility-height":0,styles:{content:{borderRadius:"12px",background:"linear-gradient(135deg, #1890ff 0%, #096dd9 100%)"},icon:{color:"#fff"}},style:{right:"180px"}})])]))}}),K=O(J,[["__scopeId","data-v-4014528c"]]),Q=`<template>
  <div
    style="
      position: relative;
      height: 220px;
      overflow: auto;
      border: 1px solid #f0f0f0;
      border-radius: 8px;
      padding: 16px;
    "
  >
    <div style="height: 800px; padding: 8px">
      <p style="color: #666">在此容器内向下滚动，即可看到经过语义化定制的回到顶部按钮。</p>
      <p style="color: #999; margin-top: 8px">
        下面通过 classNames / styles 对 root、content、icon 三个子节点做细粒度样式控制。
      </p>

      <!-- 场景 1：自定义根容器 -->
      <BackTop :target="getTarget" :visibility-height="0" :class-names="{ root: 'demo-bt-root' }" />

      <!-- 场景 2：自定义内容容器 + 图标 -->
      <BackTop
        :target="getTarget"
        :visibility-height="0"
        :class-names="{ content: 'demo-bt-content', icon: 'demo-bt-icon' }"
        style="right: 100px"
      />

      <!-- 场景 3：使用内联 styles -->
      <BackTop
        :target="getTarget"
        :visibility-height="0"
        :styles="{
          content: { borderRadius: '12px', background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)' },
          icon: { color: '#fff' },
        }"
        style="right: 180px"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BackTop } from '@hmfw/ant-design'

const containerRef = ref<HTMLElement>()

// target 指向当前滚动容器，这里返回 demo 外层可滚动元素
const getTarget = () => {
  // 取最近的可滚动祖先（演示用途，返回 document 兜底）
  return (containerRef.value as HTMLElement) || document.body
}
<\/script>

<style scoped>
/* 场景 1：渐变根容器 */
:deep(.demo-bt-root) {
  transition: all 0.3s;
}

:deep(.demo-bt-root:hover) {
  transform: translateY(-2px);
}

/* 场景 2：自定义内容容器与图标 */
:deep(.demo-bt-content) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.demo-bt-icon) {
  color: #fff;
  transition: transform 0.3s;
}

:deep(.demo-bt-content:hover .demo-bt-icon) {
  transform: scale(1.2);
}
</style>
`,Z={style:{height:"1500px",padding:"20px"}},tt=h({__name:"BackTopCustom",setup(t){function s(){console.log("回到顶部")}return(e,a)=>(u(),k("div",Z,[a[1]||(a[1]=p("p",{style:{"margin-bottom":"20px"}},"向下滚动页面，右下角会出现自定义的回到顶部按钮。",-1)),a[2]||(a[2]=p("p",{style:{"margin-bottom":"20px"}},"此示例设置 visibilityHeight 为 200px，并自定义了按钮样式。",-1)),(u(),k(N,null,C(50,n=>p("div",{key:n,style:{"margin-bottom":"10px"}},"内容行 "+_(n),1)),64)),l(r(m),{"visibility-height":200,onClick:s},{default:y(()=>[...a[0]||(a[0]=[p("div",{style:{width:"50px",height:"50px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center",color:"white","font-size":"20px","font-weight":"bold","box-shadow":"0 4px 12px rgba(0, 0, 0, 0.15)",transition:"all 0.3s"}}," ↑ ",-1)])]),_:1})]))}}),nt=`<template>
  <div style="height: 1500px; padding: 20px">
    <p style="margin-bottom: 20px">向下滚动页面，右下角会出现自定义的回到顶部按钮。</p>
    <p style="margin-bottom: 20px">此示例设置 visibilityHeight 为 200px，并自定义了按钮样式。</p>
    <div v-for="i in 50" :key="i" style="margin-bottom: 10px">内容行 {{ i }}</div>
    <BackTop :visibility-height="200" @click="onBackTop">
      <div
        style="
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s;
        "
      >
        ↑
      </div>
    </BackTop>
  </div>
</template>

<script setup lang="ts">
import { BackTop } from '@hmfw/ant-design'

function onBackTop() {
  console.log('回到顶部')
}
<\/script>
`,st=h({__name:"BackTopTarget",setup(t){const s=T(),e=()=>s.value;return(a,n)=>(u(),k("div",null,[n[0]||(n[0]=p("p",{style:{"margin-bottom":"20px"}},"在指定容器内滚动时显示回到顶部按钮。",-1)),p("div",{ref_key:"containerRef",ref:s,style:{height:"400px","overflow-y":"auto",border:"1px solid #d9d9d9","border-radius":"4px",padding:"20px",position:"relative"}},[(u(),k(N,null,C(100,c=>p("div",{key:c,style:{"margin-bottom":"10px"}},"容器内容行 "+_(c),1)),64)),l(r(m),{target:e,"visibility-height":100})],512)]))}}),at=`<template>
  <div>
    <p style="margin-bottom: 20px">在指定容器内滚动时显示回到顶部按钮。</p>
    <div
      ref="containerRef"
      style="
        height: 400px;
        overflow-y: auto;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 20px;
        position: relative;
      "
    >
      <div v-for="i in 100" :key="i" style="margin-bottom: 10px">容器内容行 {{ i }}</div>
      <BackTop :target="getContainer" :visibility-height="100" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BackTop } from '@hmfw/ant-design'

const containerRef = ref<HTMLElement>()

const getContainer = () => containerRef.value!
<\/script>
`,et={class:"markdown-body"},lt={__name:"back-top",setup(t,{expose:s}){return s({frontmatter:{}}),(a,n)=>{const c=z("DemoBlock");return u(),k("div",et,[n[0]||(n[0]=F('<h1 id="backtop-回到顶部" tabindex="-1">BackTop 回到顶部</h1><p>返回页面顶部的操作按钮。</p><blockquote><p><strong>已废弃</strong>: 此组件已被 FloatButton.BackTop 替代，但仍保持兼容性支持。</p></blockquote><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>当页面内容区域比较长时</li><li>当用户需要频繁返回顶部查看相关内容时</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基础用法" tabindex="-1">基础用法</h3><p>滚动页面后，右下角会出现回到顶部按钮。</p><blockquote><p>注意：需要滚动页面才能看到按钮出现。默认当页面滚动超过 400px 时显示。</p></blockquote>',9)),l(c,{title:"基础用法",source:r(W)},{default:y(()=>[l(Y)]),_:1},8,["source"]),n[1]||(n[1]=p("h3",{id:"自定义内容",tabindex:"-1"},"自定义内容",-1)),n[2]||(n[2]=p("p",null,"可以自定义回到顶部按钮的样式。",-1)),l(c,{title:"自定义内容",source:r(nt)},{default:y(()=>[l(tt)]),_:1},8,["source"]),n[3]||(n[3]=p("h3",{id:"指定容器",tabindex:"-1"},"指定容器",-1)),n[4]||(n[4]=p("p",null,"在指定容器内滚动时显示回到顶部按钮。",-1)),l(c,{title:"指定容器",source:r(at)},{default:y(()=>[l(st)]),_:1},8,["source"]),n[5]||(n[5]=p("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[6]||(n[6]=p("p",null,[w("通过 "),p("code",null,"classNames"),w(" / "),p("code",null,"styles"),w(" 对各子元素做细粒度样式控制。")],-1)),l(c,{title:"语义化 className 与 style",source:r(Q)},{default:y(()=>[l(K)]),_:1},8,["source"]),n[7]||(n[7]=F(`<h2 id="api" tabindex="-1">API</h2><h3 id="backtop-props" tabindex="-1">BackTop Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>visibilityHeight</td><td>滚动高度达到此参数值才出现 BackTop</td><td><code>number</code></td><td><code>400</code></td></tr><tr><td>target</td><td>设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数</td><td><code>() =&gt; HTMLElement | Window | Document</code></td><td><code>() =&gt; window</code></td></tr><tr><td>duration</td><td>回到顶部所需时间（ms）</td><td><code>number</code></td><td><code>450</code></td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>rootClassName</td><td>根节点类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>BackTopClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>BackTopStyles</code></td><td>-</td></tr><tr><td>prefixCls</td><td>自定义前缀</td><td><code>string</code></td><td><code>&#39;hmfw&#39;</code></td></tr></tbody></table><h3 id="backtop-events" tabindex="-1">BackTop Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="backtop-slots" tabindex="-1">BackTop Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义内容，默认为向上箭头图标</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">BackTopClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 默认内容容器</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 图标容器</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">BackTopStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  icon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-back-top<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-back-top-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此（仅当使用默认内容时） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-back-top-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此（仅当使用默认内容时） --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BackTop</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;my-back-top&#39;, content: &#39;my-content&#39;, icon: &#39;my-icon&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-back-top:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-content)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-icon)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BackTop</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      content: { borderRadius: &#39;12px&#39;, background: &#39;linear-gradient(135deg, #1890ff 0%, #096dd9 100%)&#39; },
      icon: { color: &#39;#fff&#39;, fontSize: &#39;18px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>content</code> 和 <code>icon</code> 仅在使用默认内容时生效（未传入 default slot）</li><li>传入自定义 slot 时，可以通过 <code>classNames.root</code> / <code>styles.root</code> 控制根容器样式</li></ul><hr><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text</code></td><td>悬停背景颜色</td><td><code>rgba(0, 0, 0, 0.88)</code></td></tr><tr><td><code>--hmfw-color-text-description</code></td><td>默认背景颜色</td><td><code>rgba(0, 0, 0, 0.45)</code></td></tr><tr><td><code>--hmfw-color-text-light-solid</code></td><td>图标颜色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-control-height-lg</code></td><td>按钮尺寸</td><td><code>40px</code></td></tr><tr><td><code>--hmfw-font-size-heading3</code></td><td>图标字体大小</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-motion-ease-in-out</code></td><td>动画缓动函数</td><td><code>cubic-bezier(...)</code></td></tr><tr><td><code>--hmfw-z-index-base</code></td><td>基础层级（未使用）</td><td><code>0</code></td></tr></tbody></table>`,23))])}}};export{lt as default};
