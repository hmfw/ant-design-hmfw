import{B as i}from"./Button-CzDMRACP.js";import{m as e}from"./message-CeFy713g.js";import{o as k,A as g,k as f,n as t,K as p,R as c,m as a,h as s,_ as b,i as w,H as x,l as h}from"./index-Bd8h9-ea.js";import"./cls-S9IiI6wd.js";import"./Icon-Dxbx6miQ.js";import"./LoadingOutlined-CasBxDZw.js";import"./ExclamationCircleFilled-Dg69dd-k.js";import"./CloseCircleFilled-BXFrONOc.js";import"./InfoCircleFilled-Bh6dSpT4.js";const v={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},C=k({__name:"MessageBasic",setup(m){function u(){e.success("操作成功！")}function r(){e.error("操作失败，请重试。")}function d(){e.warning("请注意此操作的风险。")}function n(){e.info("这是一条普通提示信息。")}function l(){e.loading("正在加载中...")}return(y,o)=>(g(),f("div",v,[t(p(i),{onClick:u},{default:c(()=>[...o[0]||(o[0]=[a(" 成功 ",-1)])]),_:1}),t(p(i),{onClick:r},{default:c(()=>[...o[1]||(o[1]=[a(" 错误 ",-1)])]),_:1}),t(p(i),{onClick:d},{default:c(()=>[...o[2]||(o[2]=[a(" 警告 ",-1)])]),_:1}),t(p(i),{onClick:n},{default:c(()=>[...o[3]||(o[3]=[a(" 信息 ",-1)])]),_:1}),t(p(i),{onClick:l},{default:c(()=>[...o[4]||(o[4]=[a(" 加载中 ",-1)])]),_:1})]))}}),B=`<template>
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
`,N={style:{display:"flex","flex-direction":"column",gap:"16px"}},S=k({__name:"MessageClassNames",setup(m){function u(){e.success({content:"保存成功",classNames:{notice:"msg-notice-gradient"}})}function r(){e.warning({content:"磁盘空间不足",classNames:{icon:"msg-icon-pulse",title:"msg-title-bold"}})}function d(){e.info({content:"提示靠右显示",classNames:{wrapper:"msg-wrapper-right"}})}function n(){e.info({content:"内联样式控制的提示",styles:{notice:{borderRadius:"16px",background:"#f0f5ff"},title:{color:"#1677ff",fontWeight:600}}})}function l(){e.error({content:"组合定制：className 打底，style 覆盖",classNames:{notice:"msg-notice-gradient"},styles:{notice:{borderRadius:"20px"},icon:{color:"#fff"},title:{color:"#fff"}}})}return(y,o)=>(g(),f("div",N,[s("div",null,[o[1]||(o[1]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义卡片主体（notice）：",-1)),t(p(i),{onClick:u},{default:c(()=>[...o[0]||(o[0]=[a(" 渐变卡片提示 ",-1)])]),_:1})]),s("div",null,[o[3]||(o[3]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图标与文本（icon + title）：",-1)),t(p(i),{onClick:r},{default:c(()=>[...o[2]||(o[2]=[a(" 强调图标与文字 ",-1)])]),_:1})]),s("div",null,[o[5]||(o[5]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义容器对齐（wrapper）：",-1)),t(p(i),{onClick:d},{default:c(()=>[...o[4]||(o[4]=[a(" 右对齐提示 ",-1)])]),_:1})]),s("div",null,[o[7]||(o[7]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联 styles：",-1)),t(p(i),{onClick:n},{default:c(()=>[...o[6]||(o[6]=[a(" 内联样式提示 ",-1)])]),_:1})]),s("div",null,[o[9]||(o[9]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"classNames + styles 组合：",-1)),t(p(i),{onClick:l},{default:c(()=>[...o[8]||(o[8]=[a(" 组合定制提示 ",-1)])]),_:1})])]))}}),M=b(S,[["__scopeId","data-v-dbe1df5b"]]),_=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <!-- 场景 1：通过 classNames 定制卡片主体（notice） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义卡片主体（notice）：</div>
      <Button @click="showNotice"> 渐变卡片提示 </Button>
    </div>

    <!-- 场景 2：通过 classNames 同时定制图标与文本（icon + title） -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图标与文本（icon + title）：</div>
      <Button @click="showIconTitle"> 强调图标与文字 </Button>
    </div>

    <!-- 场景 3：通过 classNames 定制最外层容器（wrapper），整体右对齐 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义容器对齐（wrapper）：</div>
      <Button @click="showWrapper"> 右对齐提示 </Button>
    </div>

    <!-- 场景 4：通过 styles 内联样式做临时定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联 styles：</div>
      <Button @click="showStyles"> 内联样式提示 </Button>
    </div>

    <!-- 场景 5：classNames 与 styles 组合使用 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">classNames + styles 组合：</div>
      <Button @click="showCombined"> 组合定制提示 </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

// 场景 1：定制卡片主体——渐变背景 + 白色文字
function showNotice() {
  message.success({
    content: '保存成功',
    classNames: { notice: 'msg-notice-gradient' },
  })
}

// 场景 2：强调图标与文本
function showIconTitle() {
  message.warning({
    content: '磁盘空间不足',
    classNames: {
      icon: 'msg-icon-pulse',
      title: 'msg-title-bold',
    },
  })
}

// 场景 3：定制最外层容器，让提示整体靠右
function showWrapper() {
  message.info({
    content: '提示靠右显示',
    classNames: { wrapper: 'msg-wrapper-right' },
  })
}

// 场景 4：纯内联样式定制
function showStyles() {
  message.info({
    content: '内联样式控制的提示',
    styles: {
      notice: { borderRadius: '16px', background: '#f0f5ff' },
      title: { color: '#1677ff', fontWeight: 600 },
    },
  })
}

// 场景 5：classNames 与 styles 组合，styles 优先级更高
function showCombined() {
  message.error({
    content: '组合定制：className 打底，style 覆盖',
    classNames: { notice: 'msg-notice-gradient' },
    styles: {
      notice: { borderRadius: '20px' },
      icon: { color: '#fff' },
      title: { color: '#fff' },
    },
  })
}
<\/script>

<!--
  message 通过独立的 Vue 应用挂载在 document.body 上，
  位于本 demo 组件的 DOM 树之外，scoped 的 :deep() 无法命中，
  因此这里用 :global() 让自定义 className 生效。
-->
<style scoped>
:global(.msg-notice-gradient) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: #fff !important;
  border: none;
}

:global(.msg-notice-gradient .hmfw-message-notice-icon),
:global(.msg-notice-gradient .hmfw-message-notice-title) {
  color: #fff;
}

:global(.msg-icon-pulse) {
  animation: msg-icon-pulse 1s ease-in-out infinite;
}

@keyframes msg-icon-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
}

:global(.msg-title-bold) {
  font-weight: 700;
  letter-spacing: 0.5px;
}

:global(.msg-wrapper-right) {
  justify-content: flex-end !important;
  padding-right: 24px;
}
</style>
`,T={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},E=k({__name:"MessageConfig",setup(m){function u(){e.config({maxCount:3,top:100}),e.info("已应用全局配置")}function r(){for(let d=1;d<=5;d++)e.info(`第 ${d} 条消息`)}return(d,n)=>(g(),f("div",T,[t(p(i),{onClick:u},{default:c(()=>[...n[0]||(n[0]=[a(" 设置 maxCount = 3 / top = 100 ",-1)])]),_:1}),t(p(i),{onClick:r},{default:c(()=>[...n[1]||(n[1]=[a(" 连续弹出 5 条 ",-1)])]),_:1})]))}}),O=`<template>
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
`,q={style:{display:"flex",gap:"8px"}},H=k({__name:"MessageDuration",setup(m){function u(){e.success("这条消息将显示 10 秒",10)}function r(){const n=e.warning("点我手动关闭",0);setTimeout(n,5e3)}function d(){e.info("关闭后将触发回调",2).then(()=>{e.success("消息已关闭！")})}return(n,l)=>(g(),f("div",q,[t(p(i),{onClick:u},{default:c(()=>[...l[0]||(l[0]=[a(" 显示 10 秒 ",-1)])]),_:1}),t(p(i),{onClick:r},{default:c(()=>[...l[1]||(l[1]=[a(" 不自动关闭 ",-1)])]),_:1}),t(p(i),{onClick:d},{default:c(()=>[...l[2]||(l[2]=[a(" 关闭后回调 ",-1)])]),_:1})]))}}),$=`<template>
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
`,D={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},P=k({__name:"MessagePauseOnHover",setup(m){function u(){e.config({pauseOnHover:!0}),e.info("悬停时暂停计时，移开继续计时",5)}function r(){e.config({pauseOnHover:!1}),e.warning("悬停时不暂停计时，5 秒后自动关闭",5)}function d(){e.config({pauseOnHover:!0}),e.open({content:"这条消息悬停时不暂停",type:"success",duration:5,pauseOnHover:!1})}return(n,l)=>(g(),f("div",D,[t(p(i),{onClick:u},{default:c(()=>[...l[0]||(l[0]=[a(" 悬停暂停（默认） ",-1)])]),_:1}),t(p(i),{onClick:r},{default:c(()=>[...l[1]||(l[1]=[a(" 悬停不暂停 ",-1)])]),_:1}),t(p(i),{onClick:d},{default:c(()=>[...l[2]||(l[2]=[a(" 单独配置 ",-1)])]),_:1})]))}}),V=`<template>
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
`,W={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},I=k({__name:"MessagePosition",setup(m){function u(){e.config({top:8}),e.info("默认顶部显示，距离 8px")}function r(){e.config({top:100}),e.success("自定义顶部距离 100px")}return(d,n)=>(g(),f("div",W,[t(p(i),{onClick:u},{default:c(()=>[...n[0]||(n[0]=[a(" 顶部显示（默认） ",-1)])]),_:1}),t(p(i),{onClick:r},{default:c(()=>[...n[1]||(n[1]=[a(" 顶部自定义距离 ",-1)])]),_:1})]))}}),L=`<template>
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
`,A=k({__name:"MessageUpdate",setup(m){function u(){const r="updatable";e.loading({content:"加载中...",key:r,duration:0}),setTimeout(()=>{e.success({content:"加载完成！",key:r,duration:2})},1500)}return(r,d)=>(g(),w(p(i),{onClick:u},{default:c(()=>[...d[0]||(d[0]=[a(" 开始加载 ",-1)])]),_:1}))}}),R=`<template>
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
`,j={class:"markdown-body"},Z={__name:"message",setup(m,{expose:u}){return u({frontmatter:{}}),(d,n)=>{const l=x("DemoBlock");return g(),f("div",j,[n[0]||(n[0]=s("h1",{id:"message-全局提示",tabindex:"-1"},"Message 全局提示",-1)),n[1]||(n[1]=s("p",null,"全局展示操作反馈信息。",-1)),n[2]||(n[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=s("ul",null,[s("li",null,"可提供成功、警告和错误等反馈信息"),s("li",null,"顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式")],-1)),n[4]||(n[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=s("p",null,"信息提醒反馈。",-1)),t(l,{title:"基础用法",source:p(B)},{default:c(()=>[t(C)]),_:1},8,["source"]),n[7]||(n[7]=s("h3",{id:"自定义时长",tabindex:"-1"},"自定义时长",-1)),n[8]||(n[8]=s("p",null,[a("自定义消息显示时长，默认 3 秒。"),s("code",null,"duration"),a(" 设为 "),s("code",null,"0"),a(" 时不自动关闭，方法返回值可作为函数调用以手动关闭。")],-1)),t(l,{title:"自定义时长",source:p($)},{default:c(()=>[t(H)]),_:1},8,["source"]),n[9]||(n[9]=s("h3",{id:"更新消息内容",tabindex:"-1"},"更新消息内容",-1)),n[10]||(n[10]=s("p",null,[a("通过相同的 "),s("code",null,"key"),a(" 更新已有消息内容，常用于异步加载场景，避免堆叠多条提示。")],-1)),t(l,{title:"更新消息内容",source:p(R)},{default:c(()=>[t(A)]),_:1},8,["source"]),n[11]||(n[11]=s("h3",{id:"全局配置",tabindex:"-1"},"全局配置",-1)),n[12]||(n[12]=s("p",null,[a("通过 "),s("code",null,"message.config"),a(" 配置最大显示数量、距顶部距离等全局参数。")],-1)),t(l,{title:"全局配置",source:p(O)},{default:c(()=>[t(E)]),_:1},8,["source"]),n[13]||(n[13]=s("h3",{id:"位置配置",tabindex:"-1"},"位置配置",-1)),n[14]||(n[14]=s("p",null,[a("通过 "),s("code",null,"message.config"),a(" 的 "),s("code",null,"top"),a(" 参数配置消息距离顶部的距离。")],-1)),t(l,{title:"位置配置",source:p(L)},{default:c(()=>[t(I)]),_:1},8,["source"]),n[15]||(n[15]=s("h3",{id:"悬停暂停",tabindex:"-1"},"悬停暂停",-1)),n[16]||(n[16]=s("p",null,"支持悬停时暂停计时器，移开后继续计时。可通过全局配置或单条消息配置控制。",-1)),t(l,{title:"悬停暂停",source:p(V)},{default:c(()=>[t(P)]),_:1},8,["source"]),n[17]||(n[17]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[18]||(n[18]=s("p",null,[a("通过调用 options 中的 "),s("code",null,"classNames"),a(" / "),s("code",null,"styles"),a(" 对 wrapper、notice、icon、title 等子元素做细粒度样式控制。")],-1)),t(l,{title:"语义化 className 与 style",source:p(_)},{default:c(()=>[t(M)]),_:1},8,["source"]),n[19]||(n[19]=h(`<h2 id="api" tabindex="-1">API</h2><p>组件提供以下静态方法，参数如下：</p><ul><li><code>message.success(content, [duration], onClose)</code></li><li><code>message.error(content, [duration], onClose)</code></li><li><code>message.info(content, [duration], onClose)</code></li><li><code>message.warning(content, [duration], onClose)</code></li><li><code>message.loading(content, [duration], onClose)</code></li></ul><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>提示内容</td><td><code>string | number | VNode | () =&gt; VNodeChild | config</code></td><td>-</td></tr><tr><td>duration</td><td>自动关闭的延时，单位秒。设为 0 时不自动关闭。也可直接传入 <code>onClose</code> 回调</td><td><code>number | () =&gt; void</code></td><td><code>3</code></td></tr><tr><td>onClose</td><td>关闭时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table><p>所有方法均返回 <code>MessageType</code>：它既是一个可调用的函数（调用即手动关闭），又是 thenable，可通过 <code>.then()</code> 在关闭后执行回调。</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> close <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token string">&#39;加载中...&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 之后手动关闭</span>
<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;成功&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 消息关闭后执行</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h3 id="以配置对象调用" tabindex="-1">以配置对象调用</h3><p>支持将参数包裹在对象中传入：</p><ul><li><code>message.open(config)</code></li><li><code>message.success(config)</code> / <code>error</code> / <code>info</code> / <code>warning</code> / <code>loading</code></li></ul><p>config 对象属性如下：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>提示内容</td><td><code>string | number | VNode | () =&gt; VNodeChild</code></td><td>-</td></tr><tr><td>duration</td><td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td><td><code>number</code></td><td><code>3</code></td></tr><tr><td>type</td><td>提示类型</td><td><code>&#39;info&#39; | &#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;loading&#39;</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标</td><td><code>VNode | () =&gt; VNodeChild</code></td><td>-</td></tr><tr><td>key</td><td>当前提示的唯一标识，相同 key 会更新已有提示</td><td><code>string | number</code></td><td>-</td></tr><tr><td>style</td><td>自定义内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义 CSS class</td><td><code>string</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>MessageClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>MessageStyles</code></td><td>-</td></tr><tr><td>pauseOnHover</td><td>悬停时是否暂停计时器，默认为全局配置的 <code>pauseOnHover</code></td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>onClick</td><td>点击时触发的回调函数</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr><tr><td>onClose</td><td>关闭时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="全局方法" tabindex="-1">全局方法</h3><p>还提供全局配置与销毁方法：</p><ul><li><code>message.config(options)</code></li><li><code>message.destroy()</code>：移除所有提示</li><li><code>message.destroy(key)</code>：移除指定 key 的提示</li></ul><h4 id="messageconfig" tabindex="-1">message.config</h4><pre class="language-js"><code class="language-js">message<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxCount</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>top</td><td>消息距离顶部的位置，单位 px</td><td><code>string | number</code></td><td><code>8</code></td></tr><tr><td>duration</td><td>默认自动关闭延时，单位秒</td><td><code>number</code></td><td><code>3</code></td></tr><tr><td>maxCount</td><td>最大显示数，超过限制时关闭最早的提示</td><td><code>number</code></td><td>-</td></tr><tr><td>getContainer</td><td>配置渲染节点的输出位置</td><td><code>() =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>pauseOnHover</td><td>悬停时是否暂停计时器（全局配置，单条消息可覆盖）</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>prefixCls</td><td>提示组件 class 前缀（预留，当前版本暂未实现）</td><td><code>string</code></td><td><code>&#39;hmfw-message&#39;</code></td></tr></tbody></table><blockquote><p><strong>注意</strong>：</p><ul><li>当设置 <code>top</code> 时，所有消息从顶部显示</li><li><code>pauseOnHover</code> 可在全局配置，也可在单条消息中覆盖</li><li>当前实现未支持 RTL（<code>rtl</code>）与 stack 折叠（<code>stack</code>）、<code>bottom</code> 定位，后续统一补充</li></ul></blockquote><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>Message 为命令式 API，没有模板标签，因此 <code>classNames</code> 和 <code>styles</code> 通过调用方法时的 <strong>options 配置对象</strong> 传入，对单条提示的各个子节点应用自定义样式，支持细粒度控制。</p><pre class="language-ts"><code class="language-ts">message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  content<span class="token operator">:</span> <span class="token string">&#39;消息&#39;</span><span class="token punctuation">,</span>
  classNames<span class="token operator">:</span> <span class="token punctuation">{</span> notice<span class="token operator">:</span> <span class="token string">&#39;my-notice&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  styles<span class="token operator">:</span> <span class="token punctuation">{</span> notice<span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">MessageClassNames</span> <span class="token punctuation">{</span>
  wrapper<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单条提示的最外层容器（控制进出场动画与定位）</span>
  notice<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 提示卡片主体（背景、圆角、阴影、内边距）</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 状态图标容器</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 提示文本内容容器</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MessageStyles</span> <span class="token punctuation">{</span>
  wrapper<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  notice<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  icon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-message-notice-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.wrapper / styles.wrapper 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-message-notice hmfw-message-notice-success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.notice / styles.notice 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-message-notice-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-message-notice-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-message-notice-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
        提示内容
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 options 的 <code>classNames</code> 字段为各子节点指定自定义 class：</p><pre class="language-ts"><code class="language-ts">message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  content<span class="token operator">:</span> <span class="token string">&#39;保存成功&#39;</span><span class="token punctuation">,</span>
  classNames<span class="token operator">:</span> <span class="token punctuation">{</span>
    notice<span class="token operator">:</span> <span class="token string">&#39;my-notice&#39;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;my-icon&#39;</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">&#39;my-title&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><p>由于 Message 通过独立的 Vue 应用挂载在 <code>document.body</code> 上，位于业务组件的 DOM 树之外，在 SFC 中编写样式时需用 <code>:global()</code>（或非 scoped 样式）才能命中：</p><pre class="language-vue"><code class="language-vue">&lt;style scoped&gt;
:global(.my-notice) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

:global(.my-icon) {
  animation: pulse 1s ease-in-out infinite;
}

:global(.my-title) {
  font-weight: 700;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 options 的 <code>styles</code> 字段直接传入内联样式对象：</p><pre class="language-ts"><code class="language-ts">message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  content<span class="token operator">:</span> <span class="token string">&#39;内联样式控制的提示&#39;</span><span class="token punctuation">,</span>
  styles<span class="token operator">:</span> <span class="token punctuation">{</span>
    notice<span class="token operator">:</span> <span class="token punctuation">{</span> borderRadius<span class="token operator">:</span> <span class="token string">&#39;16px&#39;</span><span class="token punctuation">,</span> background<span class="token operator">:</span> <span class="token string">&#39;#f0f5ff&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&#39;#1677ff&#39;</span><span class="token punctuation">,</span> fontWeight<span class="token operator">:</span> <span class="token number">600</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames</code> / <code>styles</code> 通过 <strong>调用 options</strong> 传入，仅作用于当前这一条提示，不影响其他提示</li><li><code>styles.notice</code> 会与 options 的 <code>style</code>（及 <code>classNames.notice</code> 对应的 class）合并，<code>styles.notice</code> 优先级最高</li><li>Message 挂载在 <code>document.body</code> 上，位于业务组件 DOM 树之外，scoped 样式的 <code>:deep()</code> 无法命中，请改用 <code>:global()</code> 或全局样式</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Message 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>浮层背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-success</code></td><td>成功状态色</td><td><code>#52c41a</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-box-shadow-secondary</code></td><td>次级浮层阴影</td><td><code>0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)</code></td></tr><tr><td><code>--hmfw-z-index-popup</code></td><td>浮层层级</td><td><code>1010</code></td></tr></tbody></table>`,38))])}}};export{Z as default};
