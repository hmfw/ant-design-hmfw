import{D as p}from"./Divider-hRqvefmD.js";import{d as m,o as d,b as r,f as t,c as a,e as o,w as i,g as e,_ as k,h as g,i as v}from"./index-ChNLT6yU.js";import"./cls-S9IiI6wd.js";const f=m({__name:"DividerBasic",setup(u){return(l,n)=>(d(),r("div",null,[n[0]||(n[0]=t("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",-1)),a(o(p)),n[1]||(n[1]=t("p",null,"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",-1)),a(o(p),{dashed:""}),n[2]||(n[2]=t("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco.",-1))]))}}),x=`<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Divider />
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Divider dashed />
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from '@hmfw/ant-design'
<\/script>
`,b={class:"demo-divider-classnames"},D={class:"demo-section"},y={class:"demo-section"},S={class:"demo-section"},w={style:{display:"flex","align-items":"center",gap:"8px"}},N={class:"demo-section"},L={class:"demo-section"},q=m({__name:"DividerClassNames",setup(u){return(l,n)=>(d(),r("div",b,[t("section",D,[n[2]||(n[2]=t("h3",null,"1. 自定义根容器样式",-1)),t("div",null,[n[0]||(n[0]=t("p",null,"内容上方",-1)),a(o(p),{"class-names":{root:"custom-root"}}),n[1]||(n[1]=t("p",null,"内容下方",-1))])]),t("section",y,[n[6]||(n[6]=t("h3",null,"2. 自定义带文字的分割线",-1)),t("div",null,[n[4]||(n[4]=t("p",null,"第一段内容",-1)),a(o(p),{"class-names":{root:"gradient-divider",text:"gradient-text"}},{default:i(()=>[...n[3]||(n[3]=[e(" 渐变文字 ",-1)])]),_:1}),n[5]||(n[5]=t("p",null,"第二段内容",-1))])]),t("section",S,[n[10]||(n[10]=t("h3",null,"3. 自定义垂直分割线",-1)),t("div",w,[n[7]||(n[7]=t("a",{href:"#"},"链接 1",-1)),a(o(p),{type:"vertical","class-names":{root:"custom-vertical"}}),n[8]||(n[8]=t("a",{href:"#"},"链接 2",-1)),a(o(p),{type:"vertical","class-names":{root:"custom-vertical"}}),n[9]||(n[9]=t("a",{href:"#"},"链接 3",-1))])]),t("section",N,[n[14]||(n[14]=t("h3",null,"4. 组合使用 classNames",-1)),t("div",null,[n[12]||(n[12]=t("p",null,"这是一个组合样式的示例",-1)),a(o(p),{"class-names":{root:"combined-root",text:"combined-text"}},{default:i(()=>[...n[11]||(n[11]=[e(" 特殊标记 ",-1)])]),_:1}),n[13]||(n[13]=t("p",null,"通过组合 root 和 text 实现完整的自定义效果",-1))])]),t("section",L,[n[18]||(n[18]=t("h3",null,"5. 使用 styles 动态样式",-1)),t("div",null,[n[16]||(n[16]=t("p",null,"第一部分内容",-1)),a(o(p),{styles:{root:{borderColor:"#1890ff",borderWidth:"2px",margin:"32px 0"},text:{fontSize:"16px",color:"#1890ff",fontWeight:"bold"}}},{default:i(()=>[...n[15]||(n[15]=[e(" 动态样式文字 ",-1)])]),_:1}),n[17]||(n[17]=t("p",null,"第二部分内容",-1))])])]))}}),h=k(q,[["__scopeId","data-v-fa8293f3"]]),z=`<template>
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
import { Divider } from '@hmfw/ant-design'
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
`,C=m({__name:"DividerSize",setup(u){return(l,n)=>(d(),r("div",null,[n[0]||(n[0]=t("p",null,"Small",-1)),a(o(p),{size:"small"}),n[1]||(n[1]=t("p",null,"Middle",-1)),a(o(p),{size:"middle"}),n[2]||(n[2]=t("p",null,"Large（默认）",-1)),a(o(p),{size:"large"}),n[3]||(n[3]=t("p",null,"底部内容",-1))]))}}),B=`<template>
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
import { Divider } from '@hmfw/ant-design'
<\/script>
`,E=m({__name:"DividerVariant",setup(u){return(l,n)=>(d(),r("div",null,[n[3]||(n[3]=t("p",null,"Lorem ipsum dolor sit amet.",-1)),a(o(p),{variant:"solid"},{default:i(()=>[...n[0]||(n[0]=[e(" 实线 Solid ",-1)])]),_:1}),n[4]||(n[4]=t("p",null,"Lorem ipsum dolor sit amet.",-1)),a(o(p),{variant:"dashed"},{default:i(()=>[...n[1]||(n[1]=[e(" 虚线 Dashed ",-1)])]),_:1}),n[5]||(n[5]=t("p",null,"Lorem ipsum dolor sit amet.",-1)),a(o(p),{variant:"dotted"},{default:i(()=>[...n[2]||(n[2]=[e(" 点线 Dotted ",-1)])]),_:1}),n[6]||(n[6]=t("p",null,"Lorem ipsum dolor sit amet.",-1))]))}}),V=`<template>
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
import { Divider } from '@hmfw/ant-design'
<\/script>
`,W=m({__name:"DividerVertical",setup(u){return(l,n)=>(d(),r("div",null,[n[0]||(n[0]=t("a",{href:"#"},"链接一",-1)),a(o(p),{type:"vertical"}),n[1]||(n[1]=t("a",{href:"#"},"链接二",-1)),a(o(p),{type:"vertical"}),n[2]||(n[2]=t("a",{href:"#"},"链接三",-1))]))}}),$=`<template>
  <div>
    <a href="#">链接一</a>
    <Divider type="vertical" />
    <a href="#">链接二</a>
    <Divider type="vertical" />
    <a href="#">链接三</a>
  </div>
</template>

<script setup lang="ts">
import { Divider } from '@hmfw/ant-design'
<\/script>
`,T=m({__name:"DividerWithText",setup(u){return(l,n)=>(d(),r("div",null,[n[4]||(n[4]=t("p",null,"Lorem ipsum dolor sit amet.",-1)),a(o(p),null,{default:i(()=>[...n[0]||(n[0]=[e("居中文字",-1)])]),_:1}),n[5]||(n[5]=t("p",null,"Lorem ipsum dolor sit amet.",-1)),a(o(p),{orientation:"left"},{default:i(()=>[...n[1]||(n[1]=[e(" 左对齐 ",-1)])]),_:1}),n[6]||(n[6]=t("p",null,"Lorem ipsum dolor sit amet.",-1)),a(o(p),{orientation:"right"},{default:i(()=>[...n[2]||(n[2]=[e(" 右对齐 ",-1)])]),_:1}),n[7]||(n[7]=t("p",null,"Lorem ipsum dolor sit amet.",-1)),a(o(p),{orientation:"left",plain:""},{default:i(()=>[...n[3]||(n[3]=[e(" 朴素文字 ",-1)])]),_:1}),n[8]||(n[8]=t("p",null,"Lorem ipsum dolor sit amet.",-1))]))}}),A=`<template>
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
import { Divider } from '@hmfw/ant-design'
<\/script>
`,P={class:"markdown-body"},O={__name:"divider",setup(u,{expose:l}){return l({frontmatter:{}}),(M,s)=>{const c=g("DemoBlock");return d(),r("div",P,[s[0]||(s[0]=t("h1",{id:"divider-分割线",tabindex:"-1"},"Divider 分割线",-1)),s[1]||(s[1]=t("p",null,"区隔内容的分割线。",-1)),s[2]||(s[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=t("ul",null,[t("li",null,"对不同章节的文本段落进行分割"),t("li",null,"对行内文字/链接进行分割，例如表格的操作列")],-1)),s[4]||(s[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=t("h3",{id:"水平分割线",tabindex:"-1"},"水平分割线",-1)),s[6]||(s[6]=t("p",null,"默认为水平分割线，可在中间加入文字。",-1)),a(c,{title:"水平分割线",source:o(x)},{default:i(()=>[a(f)]),_:1},8,["source"]),s[7]||(s[7]=t("h3",{id:"带文字的分割线",tabindex:"-1"},"带文字的分割线",-1)),s[8]||(s[8]=t("p",null,[e("通过 "),t("code",null,"orientation"),e(" 属性设置文字位置。")],-1)),a(c,{title:"带文字的分割线",source:o(A)},{default:i(()=>[a(T)]),_:1},8,["source"]),s[9]||(s[9]=t("h3",{id:"垂直分割线",tabindex:"-1"},"垂直分割线",-1)),s[10]||(s[10]=t("p",null,[e("使用 "),t("code",null,'type="vertical"'),e(" 设置为行内的垂直分割线。")],-1)),a(c,{title:"垂直分割线",source:o($)},{default:i(()=>[a(W)]),_:1},8,["source"]),s[11]||(s[11]=t("h3",{id:"分割线样式",tabindex:"-1"},"分割线样式",-1)),s[12]||(s[12]=t("p",null,[e("通过 "),t("code",null,"variant"),e(" 设置分割线为实线、虚线或点线。"),t("code",null,"dashed"),e(" 为 "),t("code",null,'variant="dashed"'),e(" 的简写。")],-1)),a(c,{title:"分割线样式",source:o(V)},{default:i(()=>[a(E)]),_:1},8,["source"]),s[13]||(s[13]=t("h3",{id:"不同间距",tabindex:"-1"},"不同间距",-1)),s[14]||(s[14]=t("p",null,[e("通过 "),t("code",null,"size"),e(" 设置水平分割线的上下间距，可选 "),t("code",null,"small"),e("、"),t("code",null,"middle"),e("、"),t("code",null,"large"),e("（默认）。")],-1)),a(c,{title:"不同间距",source:o(B)},{default:i(()=>[a(C)]),_:1},8,["source"]),s[15]||(s[15]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),s[16]||(s[16]=t("p",null,[e("通过 "),t("code",null,"classNames"),e(" / "),t("code",null,"styles"),e(" 对各子元素做细粒度样式控制。")],-1)),a(c,{title:"语义化 className 与 style",source:o(z)},{default:i(()=>[a(h)]),_:1},8,["source"]),s[17]||(s[17]=v(`<h2 id="api" tabindex="-1">API</h2><h3 id="divider-props" tabindex="-1">Divider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>水平还是垂直类型</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>orientation</td><td>分割线标题的位置</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;center&#39;</code></td></tr><tr><td>orientationMargin</td><td>标题和最近 left/right 边框之间的距离，去除分割线，同时 <code>orientation</code> 必须为 <code>left</code> 或 <code>right</code></td><td><code>string | number</code></td><td>-</td></tr><tr><td>dashed</td><td>是否虚线，等价于 <code>variant=&quot;dashed&quot;</code></td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>variant</td><td>分割线样式，优先级高于 <code>dashed</code></td><td><code>&#39;solid&#39; | &#39;dashed&#39; | &#39;dotted&#39;</code></td><td><code>&#39;solid&#39;</code></td></tr><tr><td>plain</td><td>文字是否显示为普通正文样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>分割线间距大小（仅水平分割线生效）</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;large&#39;</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DividerClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DividerStyles</code></td><td>-</td></tr></tbody></table><h3 id="divider-slots" tabindex="-1">Divider Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>嵌入分割线中的内容</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>内容上方<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;custom-divider&#39;, text: &#39;custom-text&#39; }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 自定义文字 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Divider</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>内容下方<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.custom-divider)</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 2px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>90deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-image-slice</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-text)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>内容上方<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Divider</span>
      <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
        root: { borderColor: &#39;#1890ff&#39;, borderWidth: &#39;2px&#39;, margin: &#39;32px 0&#39; },
        text: { fontSize: &#39;16px&#39;, color: &#39;#1890ff&#39;, fontWeight: &#39;bold&#39; },
      }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      动态样式文字
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Divider</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>内容下方<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>text</code> 只在分割线有内容（通过默认插槽传入）时生效</li><li>垂直分割线（<code>type=&quot;vertical&quot;</code>）不支持文字内容，因此 <code>text</code> 样式不生效</li></ul><hr><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Divider 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,21))])}}};export{O as default};
