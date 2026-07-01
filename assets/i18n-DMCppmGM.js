import{k as a,l as s,A as o}from"./index-Bxt2WIDN.js";const e={class:"markdown-body"},i={__name:"i18n",setup(p,{expose:t}){return t({frontmatter:{}}),(c,n)=>(o(),a("div",e,[...n[0]||(n[0]=[s(`<h1 id="国际化" tabindex="-1">国际化</h1><p>ant-design-hmfw 内置中文（<code>zhCN</code>）和英文（<code>enUS</code>）两种语言包，通过 <code>ConfigProvider</code> 的 <code>locale</code> 属性切换。</p><h2 id="使用语言包" tabindex="-1">使用语言包</h2><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;ConfigProvider :locale=&quot;locale&quot;&gt;
    &lt;App /&gt;
  &lt;/ConfigProvider&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref } from &#39;vue&#39;
import { ConfigProvider, zhCN, enUS } from &#39;@hmfw/ant-design&#39;

const locale = ref(zhCN)

const toggleLocale = () =&gt; {
  locale.value = locale.value === zhCN ? enUS : zhCN
}
&lt;/script&gt;
</code></pre><h2 id="内置语言包" tabindex="-1">内置语言包</h2><table><thead><tr><th>语言包</th><th>语言</th><th>导入路径</th></tr></thead><tbody><tr><td><code>zhCN</code></td><td>简体中文</td><td><code>import { zhCN } from &#39;@hmfw/ant-design&#39;</code></td></tr><tr><td><code>enUS</code></td><td>English</td><td><code>import { enUS } from &#39;@hmfw/ant-design&#39;</code></td></tr></tbody></table><h2 id="语言包内容" tabindex="-1">语言包内容</h2><p>语言包包含以下组件的文案：</p><ul><li><strong>Pagination</strong>：上一页、下一页、跳转等</li><li><strong>DatePicker / TimePicker</strong>：确定、今天、此刻等</li><li><strong>Modal</strong>：确定、取消等</li><li><strong>Popconfirm</strong>：确定、取消等</li><li><strong>Table</strong>：筛选、重置等</li><li><strong>Upload</strong>：上传文件等</li><li><strong>Empty</strong>：暂无数据等</li></ul><h2 id="自定义语言包" tabindex="-1">自定义语言包</h2><p>可以基于内置语言包扩展或完全自定义：</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> zhCN <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@hmfw/ant-design&#39;</span>

<span class="token keyword">const</span> myLocale <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>zhCN<span class="token punctuation">,</span>
  Pagination<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>zhCN<span class="token punctuation">.</span>Pagination<span class="token punctuation">,</span>
    prev_page<span class="token operator">:</span> <span class="token string">&#39;上一页&#39;</span><span class="token punctuation">,</span>
    next_page<span class="token operator">:</span> <span class="token string">&#39;下一页&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>`,12)])]))}};export{i as default};
