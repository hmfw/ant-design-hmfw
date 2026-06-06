import{B as p}from"./Button-8pevJcSq.js";import{m as d}from"./message-Di3aDBVQ.js";import{m as f,y as g,i as k,l as o,I as e,P as a,k as s,g as b,E as w,f as n,j as y}from"./index-B2-fWtt3.js";import"./icons-B7DG7jjo.js";import"./Icon-BgwCb1-e.js";import"./cls-S9IiI6wd.js";const h={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},x=f({__name:"MessageBasic",setup(m){function r(){d.success("操作成功！")}function l(){d.error("操作失败，请重试。")}function i(){d.warning("请注意此操作的风险。")}function t(){d.info("这是一条普通提示信息。")}function c(){d.loading("正在加载中...")}return(T,u)=>(g(),k("div",h,[o(e(p),{onClick:r},{default:a(()=>[...u[0]||(u[0]=[s("成功",-1)])]),_:1}),o(e(p),{onClick:l},{default:a(()=>[...u[1]||(u[1]=[s("错误",-1)])]),_:1}),o(e(p),{onClick:i},{default:a(()=>[...u[2]||(u[2]=[s("警告",-1)])]),_:1}),o(e(p),{onClick:t},{default:a(()=>[...u[3]||(u[3]=[s("信息",-1)])]),_:1}),o(e(p),{onClick:c},{default:a(()=>[...u[4]||(u[4]=[s("加载中",-1)])]),_:1})]))}}),C=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button @click="showSuccess">成功</Button>
    <Button @click="showError">错误</Button>
    <Button @click="showWarning">警告</Button>
    <Button @click="showInfo">信息</Button>
    <Button @click="showLoading">加载中</Button>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function showSuccess() {
  message.success('操作成功！')
}

function showError() {
  message.error('操作失败，请重试。')
}

function showWarning() {
  message.warning('请注意此操作的风险。')
}

function showInfo() {
  message.info('这是一条普通提示信息。')
}

function showLoading() {
  message.loading('正在加载中...')
}
<\/script>
`,B={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},v=f({__name:"MessageConfig",setup(m){function r(){d.config({maxCount:3,top:100}),d.info("已应用全局配置")}function l(){for(let i=1;i<=5;i++)d.info(`第 ${i} 条消息`)}return(i,t)=>(g(),k("div",B,[o(e(p),{onClick:r},{default:a(()=>[...t[0]||(t[0]=[s("设置 maxCount = 3 / top = 100",-1)])]),_:1}),o(e(p),{onClick:l},{default:a(()=>[...t[1]||(t[1]=[s("连续弹出 5 条",-1)])]),_:1})]))}}),M=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button @click="setConfig">设置 maxCount = 3 / top = 100</Button>
    <Button @click="spam">连续弹出 5 条</Button>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function setConfig() {
  // 全局配置：最多同时显示 3 条，距顶部 100px
  message.config({ maxCount: 3, top: 100 })
  message.info('已应用全局配置')
}

function spam() {
  for (let i = 1; i <= 5; i++) {
    message.info(\`第 \${i} 条消息\`)
  }
}
<\/script>
`,S={style:{display:"flex",gap:"8px"}},_=f({__name:"MessageDuration",setup(m){function r(){d.success("这条消息将显示 10 秒",10)}function l(){const t=d.warning("点我手动关闭",0);setTimeout(t,5e3)}function i(){d.info("关闭后将触发回调",2).then(()=>{d.success("消息已关闭！")})}return(t,c)=>(g(),k("div",S,[o(e(p),{onClick:r},{default:a(()=>[...c[0]||(c[0]=[s("显示 10 秒",-1)])]),_:1}),o(e(p),{onClick:l},{default:a(()=>[...c[1]||(c[1]=[s("不自动关闭",-1)])]),_:1}),o(e(p),{onClick:i},{default:a(()=>[...c[2]||(c[2]=[s("关闭后回调",-1)])]),_:1})]))}}),N=`<template>
  <div style="display: flex; gap: 8px;">
    <Button @click="showLong">显示 10 秒</Button>
    <Button @click="showSticky">不自动关闭</Button>
    <Button @click="showWithCallback">关闭后回调</Button>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function showLong() {
  message.success('这条消息将显示 10 秒', 10)
}

function showSticky() {
  // duration 设为 0，不会自动关闭，返回值可调用以手动关闭
  const close = message.warning('点我手动关闭', 0)
  setTimeout(close, 5000)
}

function showWithCallback() {
  message.info('关闭后将触发回调', 2).then(() => {
    message.success('消息已关闭！')
  })
}
<\/script>
`,V=f({__name:"MessageUpdate",setup(m){function r(){const l="updatable";d.loading({content:"加载中...",key:l,duration:0}),setTimeout(()=>{d.success({content:"加载完成！",key:l,duration:2})},1500)}return(l,i)=>(g(),b(e(p),{onClick:r},{default:a(()=>[...i[0]||(i[0]=[s("开始加载",-1)])]),_:1}))}}),$=`<template>
  <Button @click="openMessage">开始加载</Button>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function openMessage() {
  const key = 'updatable'
  message.loading({ content: '加载中...', key, duration: 0 })
  setTimeout(() => {
    // 相同 key：原地更新内容与类型，而非堆叠新提示
    message.success({ content: '加载完成！', key, duration: 2 })
  }, 1500)
}
<\/script>
`,L={class:"markdown-body"},P={__name:"message",setup(m,{expose:r}){return r({frontmatter:{}}),(i,t)=>{const c=w("DemoBlock");return g(),k("div",L,[t[0]||(t[0]=n("h1",{id:"message-",tabindex:"-1"},"Message 全局提示",-1)),t[1]||(t[1]=n("p",null,"全局展示操作反馈信息。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"可提供成功、警告和错误等反馈信息"),n("li",null,"顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"信息提醒反馈。",-1)),o(c,{title:"基础用法",source:e(C)},{default:a(()=>[o(x)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"自定义时长",-1)),t[8]||(t[8]=n("p",null,[s("自定义消息显示时长，默认 3 秒。"),n("code",null,"duration"),s(" 设为 "),n("code",null,"0"),s(" 时不自动关闭，方法返回值可作为函数调用以手动关闭。")],-1)),o(c,{title:"自定义时长",source:e(N)},{default:a(()=>[o(_)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"-4",tabindex:"-1"},"更新消息内容",-1)),t[10]||(t[10]=n("p",null,[s("通过相同的 "),n("code",null,"key"),s(" 更新已有消息内容，常用于异步加载场景，避免堆叠多条提示。")],-1)),o(c,{title:"更新消息内容",source:e($)},{default:a(()=>[o(V)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"-5",tabindex:"-1"},"全局配置",-1)),t[12]||(t[12]=n("p",null,[s("通过 "),n("code",null,"message.config"),s(" 配置最大显示数量、距顶部距离等全局参数。")],-1)),o(c,{title:"全局配置",source:e(M)},{default:a(()=>[o(v)]),_:1},8,["source"]),t[13]||(t[13]=y(`<h2 id="api" tabindex="-1">API</h2><p>组件提供以下静态方法，参数如下：</p><ul><li><code>message.success(content, [duration], onClose)</code></li><li><code>message.error(content, [duration], onClose)</code></li><li><code>message.info(content, [duration], onClose)</code></li><li><code>message.warning(content, [duration], onClose)</code></li><li><code>message.loading(content, [duration], onClose)</code></li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>提示内容</td><td><code>string | number | VNode | () =&gt; VNodeChild | config</code></td><td>-</td></tr><tr><td>duration</td><td>自动关闭的延时，单位秒。设为 0 时不自动关闭。也可直接传入 <code>onClose</code> 回调</td><td><code>number | () =&gt; void</code></td><td><code>3</code></td></tr><tr><td>onClose</td><td>关闭时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table><p>所有方法均返回 <code>MessageType</code>：它既是一个可调用的函数（调用即手动关闭），又是 thenable，可通过 <code>.then()</code> 在关闭后执行回调。</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> close <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">&#39;加载中...&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 之后手动关闭</span>
<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;成功&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 消息关闭后执行</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h3 id="-6" tabindex="-1">以配置对象调用</h3><p>支持将参数包裹在对象中传入：</p><ul><li><code>message.open(config)</code></li><li><code>message.success(config)</code> / <code>error</code> / <code>info</code> / <code>warning</code> / <code>loading</code></li></ul><p>config 对象属性如下：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>提示内容</td><td><code>string | number | VNode | () =&gt; VNodeChild</code></td><td>-</td></tr><tr><td>duration</td><td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td><td><code>number</code></td><td><code>3</code></td></tr><tr><td>type</td><td>提示类型</td><td><code>&#39;info&#39; | &#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;loading&#39;</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标</td><td><code>VNode | () =&gt; VNodeChild</code></td><td>-</td></tr><tr><td>key</td><td>当前提示的唯一标识，相同 key 会更新已有提示</td><td><code>string | number</code></td><td>-</td></tr><tr><td>style</td><td>自定义内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义 CSS class</td><td><code>string</code></td><td>-</td></tr><tr><td>pauseOnHover</td><td>悬停时是否暂停计时器</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>onClick</td><td>点击时触发的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr><tr><td>onClose</td><td>关闭时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="-7" tabindex="-1">全局方法</h3><p>还提供全局配置与销毁方法：</p><ul><li><code>message.config(options)</code></li><li><code>message.destroy()</code>：移除所有提示</li><li><code>message.destroy(key)</code>：移除指定 key 的提示</li></ul><h4 id="messageconfig" tabindex="-1">message.config</h4><pre class="language-js"><code class="language-js">message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxCount</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>top</td><td>消息距离顶部的位置</td><td><code>string | number</code></td><td><code>8</code></td></tr><tr><td>duration</td><td>默认自动关闭延时，单位秒</td><td><code>number</code></td><td><code>3</code></td></tr><tr><td>maxCount</td><td>最大显示数，超过限制时关闭最早的提示</td><td><code>number</code></td><td>-</td></tr><tr><td>getContainer</td><td>配置渲染节点的输出位置</td><td><code>() =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>pauseOnHover</td><td>悬停时是否暂停计时器</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><blockquote><p>当前实现未支持 RTL（<code>rtl</code>）与 stack 折叠（<code>stack</code>），后续统一补充。</p></blockquote>`,18))])}}};export{P as default};
