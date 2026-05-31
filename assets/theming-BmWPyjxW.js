import{i as e,j as d,y as n}from"./index-CsoOETlJ.js";const a={class:"markdown-body"},i={__name:"theming",setup(s,{expose:o}){return o({frontmatter:{}}),(r,t)=>(n(),e("div",a,[...t[0]||(t[0]=[d(`<h1 id="" tabindex="-1">主题定制</h1><p>ant-design-hmfw 基于 CSS Variables 实现主题定制，通过 <code>ConfigProvider</code> 传入自定义 Token 即可覆盖默认样式。</p><h2 id="-token-" tabindex="-1">设计 Token 系统</h2><p>Token 分为三层：</p><ul><li><strong>Seed Token</strong>：最基础的设计变量，如主色、字体大小、圆角等</li><li><strong>Map Token</strong>：由 Seed Token 派生的中间层 Token</li><li><strong>CSS Variables</strong>：最终注入到 <code>:root</code> 的 CSS 变量</li></ul><h2 id="-configprovider-" tabindex="-1">通过 ConfigProvider 定制</h2><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;ConfigProvider :theme=&quot;theme&quot;&gt;
    &lt;Button type=&quot;primary&quot;&gt;自定义主题按钮&lt;/Button&gt;
  &lt;/ConfigProvider&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ConfigProvider, Button } from &#39;ant-design-hmfw&#39;

const theme = {
  token: {
    colorPrimary: &#39;#722ed1&#39;,
    borderRadius: 2,
  },
}
&lt;/script&gt;
</code></pre><h2 id="-token" tabindex="-1">可用 Token</h2><h3 id="-1" tabindex="-1">颜色</h3><table><thead><tr><th>Token</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>colorPrimary</code></td><td>主色</td><td><code>#1677ff</code></td></tr><tr><td><code>colorSuccess</code></td><td>成功色</td><td><code>#52c41a</code></td></tr><tr><td><code>colorWarning</code></td><td>警告色</td><td><code>#faad14</code></td></tr><tr><td><code>colorError</code></td><td>错误色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>colorInfo</code></td><td>信息色</td><td><code>#1677ff</code></td></tr><tr><td><code>colorTextBase</code></td><td>基础文字色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>colorBgBase</code></td><td>基础背景色</td><td><code>#ffffff</code></td></tr></tbody></table><h3 id="-2" tabindex="-1">字体</h3><table><thead><tr><th>Token</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>fontSize</code></td><td>基础字号</td><td><code>14</code></td></tr><tr><td><code>fontFamily</code></td><td>字体族</td><td><code>系统字体</code></td></tr><tr><td><code>lineHeight</code></td><td>行高</td><td><code>1.5714</code></td></tr></tbody></table><h3 id="-3" tabindex="-1">圆角</h3><table><thead><tr><th>Token</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>borderRadius</code></td><td>基础圆角</td><td><code>6</code></td></tr></tbody></table><h3 id="-4" tabindex="-1">间距</h3><table><thead><tr><th>Token</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>sizeUnit</code></td><td>间距单位</td><td><code>4</code></td></tr><tr><td><code>sizeStep</code></td><td>间距步长</td><td><code>4</code></td></tr></tbody></table><h2 id="-css-variables" tabindex="-1">直接使用 CSS Variables</h2><p>所有 Token 都会以 <code>--hmfw-</code> 前缀注入为 CSS 变量，可以在自定义样式中直接使用：</p><pre class="language-css"><code class="language-css"><span class="token selector">.my-component</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--hmfw-color-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--hmfw-border-radius<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--hmfw-font-size-base<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>`,19)])]))}};export{i as default};
