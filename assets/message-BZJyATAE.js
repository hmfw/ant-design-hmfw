import{B as p}from"./Button-CgFQ9v8N.js";import{m as s}from"./message-B8BwrAId.js";import{o as f,A as g,k,n,K as d,R as i,m as o,i as w,H as x,h as e,l as b}from"./index-DJdGgqDu.js";import"./cls-S9IiI6wd.js";import"./Icon-B3Sy0DYw.js";import"./LoadingOutlined-D4bpgc9j.js";import"./ExclamationCircleFilled-BHpRoHQB.js";import"./CloseCircleFilled-DwuEqd_1.js";import"./InfoCircleFilled-Ca97aSXN.js";const y={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},C=f({__name:"MessageBasic",setup(m){function l(){s.success("操作成功！")}function u(){s.error("操作失败，请重试。")}function c(){s.warning("请注意此操作的风险。")}function t(){s.info("这是一条普通提示信息。")}function a(){s.loading("正在加载中...")}return(W,r)=>(g(),k("div",y,[n(d(p),{onClick:l},{default:i(()=>[...r[0]||(r[0]=[o(" 成功 ",-1)])]),_:1}),n(d(p),{onClick:u},{default:i(()=>[...r[1]||(r[1]=[o(" 错误 ",-1)])]),_:1}),n(d(p),{onClick:c},{default:i(()=>[...r[2]||(r[2]=[o(" 警告 ",-1)])]),_:1}),n(d(p),{onClick:t},{default:i(()=>[...r[3]||(r[3]=[o(" 信息 ",-1)])]),_:1}),n(d(p),{onClick:a},{default:i(()=>[...r[4]||(r[4]=[o(" 加载中 ",-1)])]),_:1})]))}}),B=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="showSuccess"> 成功 </Button>
    <Button @click="showError"> 错误 </Button>
    <Button @click="showWarning"> 警告 </Button>
    <Button @click="showInfo"> 信息 </Button>
    <Button @click="showLoading"> 加载中 </Button>
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
`,h={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},v=f({__name:"MessageConfig",setup(m){function l(){s.config({maxCount:3,top:100}),s.info("已应用全局配置")}function u(){for(let c=1;c<=5;c++)s.info(`第 ${c} 条消息`)}return(c,t)=>(g(),k("div",h,[n(d(p),{onClick:l},{default:i(()=>[...t[0]||(t[0]=[o(" 设置 maxCount = 3 / top = 100 ",-1)])]),_:1}),n(d(p),{onClick:u},{default:i(()=>[...t[1]||(t[1]=[o(" 连续弹出 5 条 ",-1)])]),_:1})]))}}),_=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="setConfig"> 设置 maxCount = 3 / top = 100 </Button>
    <Button @click="spam"> 连续弹出 5 条 </Button>
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
`,M={style:{display:"flex",gap:"8px"}},S=f({__name:"MessageDuration",setup(m){function l(){s.success("这条消息将显示 10 秒",10)}function u(){const t=s.warning("点我手动关闭",0);setTimeout(t,5e3)}function c(){s.info("关闭后将触发回调",2).then(()=>{s.success("消息已关闭！")})}return(t,a)=>(g(),k("div",M,[n(d(p),{onClick:l},{default:i(()=>[...a[0]||(a[0]=[o(" 显示 10 秒 ",-1)])]),_:1}),n(d(p),{onClick:u},{default:i(()=>[...a[1]||(a[1]=[o(" 不自动关闭 ",-1)])]),_:1}),n(d(p),{onClick:c},{default:i(()=>[...a[2]||(a[2]=[o(" 关闭后回调 ",-1)])]),_:1})]))}}),H=`<template>
  <div style="display: flex; gap: 8px">
    <Button @click="showLong"> 显示 10 秒 </Button>
    <Button @click="showSticky"> 不自动关闭 </Button>
    <Button @click="showWithCallback"> 关闭后回调 </Button>
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
`,O={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},T=f({__name:"MessagePauseOnHover",setup(m){function l(){s.config({pauseOnHover:!0}),s.info("悬停时暂停计时，移开继续计时",5)}function u(){s.config({pauseOnHover:!1}),s.warning("悬停时不暂停计时，5 秒后自动关闭",5)}function c(){s.config({pauseOnHover:!0}),s.open({content:"这条消息悬停时不暂停",type:"success",duration:5,pauseOnHover:!1})}return(t,a)=>(g(),k("div",O,[n(d(p),{onClick:l},{default:i(()=>[...a[0]||(a[0]=[o(" 悬停暂停（默认） ",-1)])]),_:1}),n(d(p),{onClick:u},{default:i(()=>[...a[1]||(a[1]=[o(" 悬停不暂停 ",-1)])]),_:1}),n(d(p),{onClick:c},{default:i(()=>[...a[2]||(a[2]=[o(" 单独配置 ",-1)])]),_:1})]))}}),$=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="pauseEnabled"> 悬停暂停（默认） </Button>
    <Button @click="pauseDisabled"> 悬停不暂停 </Button>
    <Button @click="pauseCustom"> 单独配置 </Button>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function pauseEnabled() {
  message.config({ pauseOnHover: true })
  message.info('悬停时暂停计时，移开继续计时', 5)
}

function pauseDisabled() {
  message.config({ pauseOnHover: false })
  message.warning('悬停时不暂停计时，5 秒后自动关闭', 5)
}

function pauseCustom() {
  message.config({ pauseOnHover: true })
  message.open({
    content: '这条消息悬停时不暂停',
    type: 'success',
    duration: 5,
    pauseOnHover: false,
  })
}
<\/script>
`,N={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},V=f({__name:"MessagePosition",setup(m){function l(){s.config({top:8}),s.info("默认顶部显示，距离 8px")}function u(){s.config({top:100}),s.success("自定义顶部距离 100px")}return(c,t)=>(g(),k("div",N,[n(d(p),{onClick:l},{default:i(()=>[...t[0]||(t[0]=[o(" 顶部显示（默认） ",-1)])]),_:1}),n(d(p),{onClick:u},{default:i(()=>[...t[1]||(t[1]=[o(" 顶部自定义距离 ",-1)])]),_:1})]))}}),E=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="showTop"> 顶部显示（默认） </Button>
    <Button @click="showTopCustom"> 顶部自定义距离 </Button>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function showTop() {
  message.config({ top: 8 })
  message.info('默认顶部显示，距离 8px')
}

function showTopCustom() {
  message.config({ top: 100 })
  message.success('自定义顶部距离 100px')
}
<\/script>
`,L=f({__name:"MessageUpdate",setup(m){function l(){const u="updatable";s.loading({content:"加载中...",key:u,duration:0}),setTimeout(()=>{s.success({content:"加载完成！",key:u,duration:2})},1500)}return(u,c)=>(g(),w(d(p),{onClick:l},{default:i(()=>[...c[0]||(c[0]=[o(" 开始加载 ",-1)])]),_:1}))}}),D=`<template>
  <Button @click="openMessage"> 开始加载 </Button>
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
`,P={class:"markdown-body"},G={__name:"message",setup(m,{expose:l}){return l({frontmatter:{}}),(c,t)=>{const a=x("DemoBlock");return g(),k("div",P,[t[0]||(t[0]=e("h1",{id:"message-全局提示",tabindex:"-1"},"Message 全局提示",-1)),t[1]||(t[1]=e("p",null,"全局展示操作反馈信息。",-1)),t[2]||(t[2]=e("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"可提供成功、警告和错误等反馈信息"),e("li",null,"顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式")],-1)),t[4]||(t[4]=e("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"信息提醒反馈。",-1)),n(a,{title:"基础用法",source:d(B)},{default:i(()=>[n(C)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"自定义时长",tabindex:"-1"},"自定义时长",-1)),t[8]||(t[8]=e("p",null,[o("自定义消息显示时长，默认 3 秒。"),e("code",null,"duration"),o(" 设为 "),e("code",null,"0"),o(" 时不自动关闭，方法返回值可作为函数调用以手动关闭。")],-1)),n(a,{title:"自定义时长",source:d(H)},{default:i(()=>[n(S)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"更新消息内容",tabindex:"-1"},"更新消息内容",-1)),t[10]||(t[10]=e("p",null,[o("通过相同的 "),e("code",null,"key"),o(" 更新已有消息内容，常用于异步加载场景，避免堆叠多条提示。")],-1)),n(a,{title:"更新消息内容",source:d(D)},{default:i(()=>[n(L)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"全局配置",tabindex:"-1"},"全局配置",-1)),t[12]||(t[12]=e("p",null,[o("通过 "),e("code",null,"message.config"),o(" 配置最大显示数量、距顶部距离等全局参数。")],-1)),n(a,{title:"全局配置",source:d(_)},{default:i(()=>[n(v)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"位置配置",tabindex:"-1"},"位置配置",-1)),t[14]||(t[14]=e("p",null,[o("通过 "),e("code",null,"message.config"),o(" 的 "),e("code",null,"top"),o(" 参数配置消息距离顶部的距离。")],-1)),n(a,{title:"位置配置",source:d(E)},{default:i(()=>[n(V)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"悬停暂停",tabindex:"-1"},"悬停暂停",-1)),t[16]||(t[16]=e("p",null,"支持悬停时暂停计时器，移开后继续计时。可通过全局配置或单条消息配置控制。",-1)),n(a,{title:"悬停暂停",source:d($)},{default:i(()=>[n(T)]),_:1},8,["source"]),t[17]||(t[17]=b(`<h2 id="api" tabindex="-1">API</h2><p>组件提供以下静态方法，参数如下：</p><ul><li><code>message.success(content, [duration], onClose)</code></li><li><code>message.error(content, [duration], onClose)</code></li><li><code>message.info(content, [duration], onClose)</code></li><li><code>message.warning(content, [duration], onClose)</code></li><li><code>message.loading(content, [duration], onClose)</code></li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>提示内容</td><td><code>string | number | VNode | () =&gt; VNodeChild | config</code></td><td>-</td></tr><tr><td>duration</td><td>自动关闭的延时，单位秒。设为 0 时不自动关闭。也可直接传入 <code>onClose</code> 回调</td><td><code>number | () =&gt; void</code></td><td><code>3</code></td></tr><tr><td>onClose</td><td>关闭时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table><p>所有方法均返回 <code>MessageType</code>：它既是一个可调用的函数（调用即手动关闭），又是 thenable，可通过 <code>.then()</code> 在关闭后执行回调。</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> close <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">&#39;加载中...&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 之后手动关闭</span>
<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;成功&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 消息关闭后执行</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h3 id="以配置对象调用" tabindex="-1">以配置对象调用</h3><p>支持将参数包裹在对象中传入：</p><ul><li><code>message.open(config)</code></li><li><code>message.success(config)</code> / <code>error</code> / <code>info</code> / <code>warning</code> / <code>loading</code></li></ul><p>config 对象属性如下：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>提示内容</td><td><code>string | number | VNode | () =&gt; VNodeChild</code></td><td>-</td></tr><tr><td>duration</td><td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td><td><code>number</code></td><td><code>3</code></td></tr><tr><td>type</td><td>提示类型</td><td><code>&#39;info&#39; | &#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;loading&#39;</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标</td><td><code>VNode | () =&gt; VNodeChild</code></td><td>-</td></tr><tr><td>key</td><td>当前提示的唯一标识，相同 key 会更新已有提示</td><td><code>string | number</code></td><td>-</td></tr><tr><td>style</td><td>自定义内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义 CSS class</td><td><code>string</code></td><td>-</td></tr><tr><td>pauseOnHover</td><td>悬停时是否暂停计时器，默认为全局配置的 <code>pauseOnHover</code></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>onClick</td><td>点击时触发的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr><tr><td>onClose</td><td>关闭时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="全局方法" tabindex="-1">全局方法</h3><p>还提供全局配置与销毁方法：</p><ul><li><code>message.config(options)</code></li><li><code>message.destroy()</code>：移除所有提示</li><li><code>message.destroy(key)</code>：移除指定 key 的提示</li></ul><h4 id="messageconfig" tabindex="-1">message.config</h4><pre class="language-js"><code class="language-js">message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxCount</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>top</td><td>消息距离顶部的位置，单位 px</td><td><code>string | number</code></td><td><code>8</code></td></tr><tr><td>duration</td><td>默认自动关闭延时，单位秒</td><td><code>number</code></td><td><code>3</code></td></tr><tr><td>maxCount</td><td>最大显示数，超过限制时关闭最早的提示</td><td><code>number</code></td><td>-</td></tr><tr><td>getContainer</td><td>配置渲染节点的输出位置</td><td><code>() =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>pauseOnHover</td><td>悬停时是否暂停计时器（全局配置，单条消息可覆盖）</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>prefixCls</td><td>提示组件 class 前缀（预留，当前版本暂未实现）</td><td><code>string</code></td><td><code>&#39;hmfw-message&#39;</code></td></tr></tbody></table><blockquote><p><strong>注意</strong>：</p><ul><li>当设置 <code>top</code> 时，所有消息从顶部显示</li><li><code>pauseOnHover</code> 可在全局配置，也可在单条消息中覆盖</li><li>当前实现未支持 RTL（<code>rtl</code>）与 stack 折叠（<code>stack</code>）、<code>bottom</code> 定位，后续统一补充</li></ul></blockquote>`,18))])}}};export{G as default};
