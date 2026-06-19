import{D as a}from"./Divider-Dn52MyNW.js";import{o as c,A as r,k as p,h as n,n as s,K as i,R as d,m as o,_ as v,H as g,l as f}from"./index-DVYL9B-3.js";import"./cls-S9IiI6wd.js";const x=c({__name:"DividerBasic",setup(m){return(l,t)=>(r(),p("div",null,[t[0]||(t[0]=n("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),s(i(a)),t[1]||(t[1]=n("p",null,"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1)),s(i(a),{dashed:""}),t[2]||(t[2]=n("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco.",-1))]))}}),b=`<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Divider />
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Divider dashed />
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>
`,k={class:"demo-divider-classnames"},D={class:"demo-section"},y={class:"demo-section"},S={class:"demo-section"},w={style:{display:"flex","align-items":"center",gap:"8px"}},N={class:"demo-section"},L={class:"demo-section"},q=c({__name:"DividerClassNames",setup(m){return(l,t)=>(r(),p("div",k,[n("section",D,[t[2]||(t[2]=n("h3",null,"1. 自定义根容器样式",-1)),n("div",null,[t[0]||(t[0]=n("p",null,"内容上方",-1)),s(i(a),{"class-names":{root:"custom-root"}}),t[1]||(t[1]=n("p",null,"内容下方",-1))])]),n("section",y,[t[6]||(t[6]=n("h3",null,"2. 自定义带文字的分割线",-1)),n("div",null,[t[4]||(t[4]=n("p",null,"第一段内容",-1)),s(i(a),{"class-names":{root:"gradient-divider",text:"gradient-text"}},{default:d(()=>[...t[3]||(t[3]=[o(" 渐变文字 ",-1)])]),_:1}),t[5]||(t[5]=n("p",null,"第二段内容",-1))])]),n("section",S,[t[10]||(t[10]=n("h3",null,"3. 自定义垂直分割线",-1)),n("div",w,[t[7]||(t[7]=n("a",{href:"#"},"链接 1",-1)),s(i(a),{type:"vertical","class-names":{root:"custom-vertical"}}),t[8]||(t[8]=n("a",{href:"#"},"链接 2",-1)),s(i(a),{type:"vertical","class-names":{root:"custom-vertical"}}),t[9]||(t[9]=n("a",{href:"#"},"链接 3",-1))])]),n("section",N,[t[14]||(t[14]=n("h3",null,"4. 组合使用 classNames",-1)),n("div",null,[t[12]||(t[12]=n("p",null,"这是一个组合样式的示例",-1)),s(i(a),{"class-names":{root:"combined-root",text:"combined-text"}},{default:d(()=>[...t[11]||(t[11]=[o(" 特殊标记 ",-1)])]),_:1}),t[13]||(t[13]=n("p",null,"通过组合 root 和 text 实现完整的自定义效果",-1))])]),n("section",L,[t[18]||(t[18]=n("h3",null,"5. 使用 styles 动态样式",-1)),n("div",null,[t[16]||(t[16]=n("p",null,"第一部分内容",-1)),s(i(a),{styles:{root:{borderColor:"#1890ff",borderWidth:"2px",margin:"32px 0"},text:{fontSize:"16px",color:"#1890ff",fontWeight:"bold"}}},{default:d(()=>[...t[15]||(t[15]=[o(" 动态样式文字 ",-1)])]),_:1}),t[17]||(t[17]=n("p",null,"第二部分内容",-1))])])]))}}),h=v(q,[["__scopeId","data-v-67951df3"]]),z=`<template>
  <div class="demo-divider-classnames">
    <!-- 场景 1: 自定义根容器样式 -->
    <section class="demo-section">
      <h3>1. 自定义根容器样式</h3>
      <div>
        <p>内容上方</p>
        <Divider :class-names="{ root: 'custom-root' }" />
        <p>内容下方</p>
      </div>
    </section>

    <!-- 场景 2: 自定义带文字的分割线 -->
    <section class="demo-section">
      <h3>2. 自定义带文字的分割线</h3>
      <div>
        <p>第一段内容</p>
        <Divider :class-names="{ root: 'gradient-divider', text: 'gradient-text' }"> 渐变文字 </Divider>
        <p>第二段内容</p>
      </div>
    </section>

    <!-- 场景 3: 自定义垂直分割线 -->
    <section class="demo-section">
      <h3>3. 自定义垂直分割线</h3>
      <div style="display: flex; align-items: center; gap: 8px">
        <a href="#">链接 1</a>
        <Divider type="vertical" :class-names="{ root: 'custom-vertical' }" />
        <a href="#">链接 2</a>
        <Divider type="vertical" :class-names="{ root: 'custom-vertical' }" />
        <a href="#">链接 3</a>
      </div>
    </section>

    <!-- 场景 4: 组合使用 classNames -->
    <section class="demo-section">
      <h3>4. 组合使用 classNames</h3>
      <div>
        <p>这是一个组合样式的示例</p>
        <Divider
          :class-names="{
            root: 'combined-root',
            text: 'combined-text',
          }"
        >
          特殊标记
        </Divider>
        <p>通过组合 root 和 text 实现完整的自定义效果</p>
      </div>
    </section>

    <!-- 场景 5: 使用 styles 动态样式 -->
    <section class="demo-section">
      <h3>5. 使用 styles 动态样式</h3>
      <div>
        <p>第一部分内容</p>
        <Divider
          :styles="{
            root: { borderColor: '#1890ff', borderWidth: '2px', margin: '32px 0' },
            text: { fontSize: '16px', color: '#1890ff', fontWeight: 'bold' },
          }"
        >
          动态样式文字
        </Divider>
        <p>第二部分内容</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>

<style scoped>
.demo-divider-classnames {
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

/* 场景 1: 自定义根容器 */
:deep(.custom-root) {
  border-top: 3px solid transparent;
  border-image: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-image-slice: 1;
  transition: all 0.3s ease;
}

:deep(.custom-root:hover) {
  border-image: linear-gradient(90deg, #764ba2 0%, #667eea 100%);
}

/* 场景 2: 渐变分割线与文字 */
:deep(.gradient-divider) {
  border-top: 2px solid transparent;
  border-image: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
  border-image-slice: 1;
}

:deep(.gradient-text) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 16px;
  padding: 0 24px;
}

/* 场景 3: 自定义垂直分割线 */
:deep(.custom-vertical) {
  border-left: 2px solid #52c41a;
  height: 24px;
  transition: all 0.3s ease;
}

:deep(.custom-vertical:hover) {
  border-left-color: #73d13d;
  border-left-width: 3px;
}

/* 场景 4: 组合样式 */
:deep(.combined-root) {
  border-top: 2px dashed #1890ff;
  margin: 24px 0;
  position: relative;
}

:deep(.combined-text) {
  background: #e6f7ff;
  color: #1890ff;
  padding: 8px 24px;
  border-radius: 20px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.2);
  transition: all 0.3s ease;
}

:deep(.combined-text:hover) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
}
</style>
`,C=c({__name:"DividerSize",setup(m){return(l,t)=>(r(),p("div",null,[t[0]||(t[0]=n("p",null,"Small",-1)),s(i(a),{size:"small"}),t[1]||(t[1]=n("p",null,"Middle",-1)),s(i(a),{size:"middle"}),t[2]||(t[2]=n("p",null,"Large（默认）",-1)),s(i(a),{size:"large"}),t[3]||(t[3]=n("p",null,"底部内容",-1))]))}}),B=`<template>
  <div>
    <p>Small</p>
    <Divider size="small" />
    <p>Middle</p>
    <Divider size="middle" />
    <p>Large（默认）</p>
    <Divider size="large" />
    <p>底部内容</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>
`,E=c({__name:"DividerVariant",setup(m){return(l,t)=>(r(),p("div",null,[t[3]||(t[3]=n("p",null,"Lorem ipsum dolor sit amet.",-1)),s(i(a),{variant:"solid"},{default:d(()=>[...t[0]||(t[0]=[o(" 实线 Solid ",-1)])]),_:1}),t[4]||(t[4]=n("p",null,"Lorem ipsum dolor sit amet.",-1)),s(i(a),{variant:"dashed"},{default:d(()=>[...t[1]||(t[1]=[o(" 虚线 Dashed ",-1)])]),_:1}),t[5]||(t[5]=n("p",null,"Lorem ipsum dolor sit amet.",-1)),s(i(a),{variant:"dotted"},{default:d(()=>[...t[2]||(t[2]=[o(" 点线 Dotted ",-1)])]),_:1}),t[6]||(t[6]=n("p",null,"Lorem ipsum dolor sit amet.",-1))]))}}),V=`<template>
  <div>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider variant="solid"> 实线 Solid </Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider variant="dashed"> 虚线 Dashed </Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider variant="dotted"> 点线 Dotted </Divider>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>
`,W=c({__name:"DividerVertical",setup(m){return(l,t)=>(r(),p("div",null,[t[0]||(t[0]=n("a",{href:"#"},"链接一",-1)),s(i(a),{type:"vertical"}),t[1]||(t[1]=n("a",{href:"#"},"链接二",-1)),s(i(a),{type:"vertical"}),t[2]||(t[2]=n("a",{href:"#"},"链接三",-1))]))}}),$=`<template>
  <div>
    <a href="#">链接一</a>
    <Divider type="vertical" />
    <a href="#">链接二</a>
    <Divider type="vertical" />
    <a href="#">链接三</a>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>
`,A=c({__name:"DividerWithText",setup(m){return(l,t)=>(r(),p("div",null,[t[4]||(t[4]=n("p",null,"Lorem ipsum dolor sit amet.",-1)),s(i(a),null,{default:d(()=>[...t[0]||(t[0]=[o("居中文字",-1)])]),_:1}),t[5]||(t[5]=n("p",null,"Lorem ipsum dolor sit amet.",-1)),s(i(a),{orientation:"left"},{default:d(()=>[...t[1]||(t[1]=[o(" 左对齐 ",-1)])]),_:1}),t[6]||(t[6]=n("p",null,"Lorem ipsum dolor sit amet.",-1)),s(i(a),{orientation:"right"},{default:d(()=>[...t[2]||(t[2]=[o(" 右对齐 ",-1)])]),_:1}),t[7]||(t[7]=n("p",null,"Lorem ipsum dolor sit amet.",-1)),s(i(a),{orientation:"left",plain:""},{default:d(()=>[...t[3]||(t[3]=[o(" 朴素文字 ",-1)])]),_:1}),t[8]||(t[8]=n("p",null,"Lorem ipsum dolor sit amet.",-1))]))}}),T=`<template>
  <div>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider>居中文字</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="left"> 左对齐 </Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="right"> 右对齐 </Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="left" plain> 朴素文字 </Divider>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
<\/script>
`,P={class:"markdown-body"},H={__name:"divider",setup(m,{expose:l}){return l({frontmatter:{}}),(M,e)=>{const u=g("DemoBlock");return r(),p("div",P,[e[0]||(e[0]=n("h1",{id:"divider-分割线",tabindex:"-1"},"Divider 分割线",-1)),e[1]||(e[1]=n("p",null,"区隔内容的分割线。",-1)),e[2]||(e[2]=n("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=n("ul",null,[n("li",null,"对不同章节的文本段落进行分割"),n("li",null,"对行内文字/链接进行分割，例如表格的操作列")],-1)),e[4]||(e[4]=n("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=n("h3",{id:"水平分割线",tabindex:"-1"},"水平分割线",-1)),e[6]||(e[6]=n("p",null,"默认为水平分割线，可在中间加入文字。",-1)),s(u,{title:"水平分割线",source:i(b)},{default:d(()=>[s(x)]),_:1},8,["source"]),e[7]||(e[7]=n("h3",{id:"带文字的分割线",tabindex:"-1"},"带文字的分割线",-1)),e[8]||(e[8]=n("p",null,[o("通过 "),n("code",null,"orientation"),o(" 属性设置文字位置。")],-1)),s(u,{title:"带文字的分割线",source:i(T)},{default:d(()=>[s(A)]),_:1},8,["source"]),e[9]||(e[9]=n("h3",{id:"垂直分割线",tabindex:"-1"},"垂直分割线",-1)),e[10]||(e[10]=n("p",null,[o("使用 "),n("code",null,'type="vertical"'),o(" 设置为行内的垂直分割线。")],-1)),s(u,{title:"垂直分割线",source:i($)},{default:d(()=>[s(W)]),_:1},8,["source"]),e[11]||(e[11]=n("h3",{id:"分割线样式",tabindex:"-1"},"分割线样式",-1)),e[12]||(e[12]=n("p",null,[o("通过 "),n("code",null,"variant"),o(" 设置分割线为实线、虚线或点线。"),n("code",null,"dashed"),o(" 为 "),n("code",null,'variant="dashed"'),o(" 的简写。")],-1)),s(u,{title:"分割线样式",source:i(V)},{default:d(()=>[s(E)]),_:1},8,["source"]),e[13]||(e[13]=n("h3",{id:"不同间距",tabindex:"-1"},"不同间距",-1)),e[14]||(e[14]=n("p",null,[o("通过 "),n("code",null,"size"),o(" 设置水平分割线的上下间距，可选 "),n("code",null,"small"),o("、"),n("code",null,"middle"),o("、"),n("code",null,"large"),o("（默认）。")],-1)),s(u,{title:"不同间距",source:i(B)},{default:d(()=>[s(C)]),_:1},8,["source"]),e[15]||(e[15]=n("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[16]||(e[16]=n("p",null,[o("通过 "),n("code",null,"classNames"),o(" / "),n("code",null,"styles"),o(" 对各子元素做细粒度样式控制。")],-1)),s(u,{title:"语义化 className 与 style",source:i(z)},{default:d(()=>[s(h)]),_:1},8,["source"]),e[17]||(e[17]=f(`<h2 id="api" tabindex="-1">API</h2><h3 id="divider-props" tabindex="-1">Divider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>水平还是垂直类型</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>orientation</td><td>分割线标题的位置</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;center&#39;</code></td></tr><tr><td>orientationMargin</td><td>标题和最近 left/right 边框之间的距离，去除分割线，同时 <code>orientation</code> 必须为 <code>left</code> 或 <code>right</code></td><td><code>string | number</code></td><td>-</td></tr><tr><td>dashed</td><td>是否虚线，等价于 <code>variant=&quot;dashed&quot;</code></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>variant</td><td>分割线样式，优先级高于 <code>dashed</code></td><td><code>&#39;solid&#39; | &#39;dashed&#39; | &#39;dotted&#39;</code></td><td><code>&#39;solid&#39;</code></td></tr><tr><td>plain</td><td>文字是否显示为普通正文样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>分割线间距大小（仅水平分割线生效）</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;large&#39;</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DividerClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DividerStyles</code></td><td>-</td></tr></tbody></table><h3 id="divider-slots" tabindex="-1">Divider Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>嵌入分割线中的内容</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">DividerClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分割线根容器</span>
  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分割线中的文字容器</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">DividerStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  text<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-divider<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-divider-inner-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.text / styles.text 应用于此 --&gt;</span>
    文字内容
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;内容上方&lt;/p&gt;
    &lt;Divider :class-names=&quot;{ root: &#39;custom-divider&#39;, text: &#39;custom-text&#39; }&quot;&gt; 自定义文字 &lt;/Divider&gt;
    &lt;p&gt;内容下方&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.custom-divider) {
  border-top: 2px solid transparent;
  border-image: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-image-slice: 1;
}

:deep(.custom-text) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;内容上方&lt;/p&gt;
    &lt;Divider
      :styles=&quot;{
        root: { borderColor: &#39;#1890ff&#39;, borderWidth: &#39;2px&#39;, margin: &#39;32px 0&#39; },
        text: { fontSize: &#39;16px&#39;, color: &#39;#1890ff&#39;, fontWeight: &#39;bold&#39; },
      }&quot;
    &gt;
      动态样式文字
    &lt;/Divider&gt;
    &lt;p&gt;内容下方&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>text</code> 只在分割线有内容（通过默认插槽传入）时生效</li><li>垂直分割线（<code>type=&quot;vertical&quot;</code>）不支持文字内容，因此 <code>text</code> 样式不生效</li></ul><hr><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Divider 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,21))])}}};export{H as default};
