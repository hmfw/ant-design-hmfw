import{g as a,h as t,w as p}from"./index-BNHhPN23.js";const e={class:"markdown-body"},r={__name:"getting-started",setup(o,{expose:s}){return s({frontmatter:{}}),(l,n)=>(p(),a("div",e,[...n[0]||(n[0]=[t(`<h1 id="" tabindex="-1">快速上手</h1><h2 id="-1" tabindex="-1">安装</h2><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> ant-design-hmfw
<span class="token comment"># 或</span>
<span class="token function">pnpm</span> <span class="token function">add</span> ant-design-hmfw
</code></pre><h2 id="-2" tabindex="-1">完整引入</h2><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> AntDesignHmfw <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-hmfw/style.css&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>AntDesignHmfw<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><h2 id="-3" tabindex="-1">按需引入</h2><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-hmfw&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;ant-design-hmfw/style.css&#39;</span>
</code></pre><h2 id="-configprovider" tabindex="-1">使用 ConfigProvider</h2><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;ConfigProvider :locale=&quot;zhCN&quot; :theme=&quot;{ colorPrimary: &#39;#1677ff&#39; }&quot;&gt;
    &lt;App /&gt;
  &lt;/ConfigProvider&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ConfigProvider } from &#39;ant-design-hmfw&#39;
import zhCN from &#39;ant-design-hmfw/locale/zh-CN&#39;
&lt;/script&gt;
</code></pre>`,9)])]))}};export{r as default};
