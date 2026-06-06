import{B as s}from"./Button-8pevJcSq.js";import{n as c}from"./notification-DTHhJscr.js";import{m as x,y as u,i as m,l as n,I as e,P as i,k as d,E as k,j as b,f as l}from"./index-B2-fWtt3.js";import"./icons-B7DG7jjo.js";import"./Icon-BgwCb1-e.js";import"./cls-S9IiI6wd.js";const y={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},B=x({__name:"NotificationBasic",setup(g){function a(){c.success({message:"操作成功",description:"您的操作已成功完成，请查看详情。"})}function p(){c.error({message:"操作失败",description:"操作过程中发生错误，请稍后重试。"})}function t(){c.warning({message:"警告",description:"此操作存在风险，请谨慎操作。"})}function o(){c.info({message:"提示信息",description:"这是一条普通的提示信息。"})}return(r,f)=>(u(),m("div",y,[n(e(s),{onClick:a},{default:i(()=>[...f[0]||(f[0]=[d("成功",-1)])]),_:1}),n(e(s),{onClick:p},{default:i(()=>[...f[1]||(f[1]=[d("错误",-1)])]),_:1}),n(e(s),{onClick:t},{default:i(()=>[...f[2]||(f[2]=[d("警告",-1)])]),_:1}),n(e(s),{onClick:o},{default:i(()=>[...f[3]||(f[3]=[d("信息",-1)])]),_:1})]))}}),w=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button @click="openSuccess">成功</Button>
    <Button @click="openError">错误</Button>
    <Button @click="openWarning">警告</Button>
    <Button @click="openInfo">信息</Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from 'ant-design-hmfw'

function openSuccess() {
  notification.success({
    message: '操作成功',
    description: '您的操作已成功完成，请查看详情。',
  })
}

function openError() {
  notification.error({
    message: '操作失败',
    description: '操作过程中发生错误，请稍后重试。',
  })
}

function openWarning() {
  notification.warning({
    message: '警告',
    description: '此操作存在风险，请谨慎操作。',
  })
}

function openInfo() {
  notification.info({
    message: '提示信息',
    description: '这是一条普通的提示信息。',
  })
}
<\/script>
`,C={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},h=x({__name:"NotificationConfig",setup(g){function a(){c.open({key:"updatable",message:"正在加载...",description:"请稍候，正在处理您的请求。",duration:0}),setTimeout(()=>{c.success({key:"updatable",message:"加载完成",description:"您的请求已处理完成！",duration:3})},2e3)}function p(){c.config({maxCount:3,top:100,duration:2}),c.info({message:"全局配置生效",description:"已设置：maxCount=3, top=100px, duration=2s"}),c.info({message:"通知 2",description:"这是第二条通知"}),c.info({message:"通知 3",description:"这是第三条通知"}),c.info({message:"通知 4",description:"这是第四条通知（第一条将被移除）"}),setTimeout(()=>{c.config({maxCount:void 0,top:24,duration:4.5})},3e3)}return(t,o)=>(u(),m("div",C,[n(e(s),{onClick:a},{default:i(()=>[...o[0]||(o[0]=[d("打开并更新",-1)])]),_:1}),n(e(s),{onClick:p},{default:i(()=>[...o[1]||(o[1]=[d("全局配置",-1)])]),_:1})]))}}),N=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button @click="openWithUpdate">打开并更新</Button>
    <Button @click="openWithConfig">全局配置</Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from 'ant-design-hmfw'

function openWithUpdate() {
  notification.open({
    key: 'updatable',
    message: '正在加载...',
    description: '请稍候，正在处理您的请求。',
    duration: 0,
  })

  setTimeout(() => {
    notification.success({
      key: 'updatable',
      message: '加载完成',
      description: '您的请求已处理完成！',
      duration: 3,
    })
  }, 2000)
}

function openWithConfig() {
  notification.config({
    maxCount: 3,
    top: 100,
    duration: 2,
  })

  notification.info({
    message: '全局配置生效',
    description: '已设置：maxCount=3, top=100px, duration=2s',
  })

  notification.info({
    message: '通知 2',
    description: '这是第二条通知',
  })

  notification.info({
    message: '通知 3',
    description: '这是第三条通知',
  })

  notification.info({
    message: '通知 4',
    description: '这是第四条通知（第一条将被移除）',
  })

  // Reset config
  setTimeout(() => {
    notification.config({ maxCount: undefined, top: 24, duration: 4.5 })
  }, 3000)
}
<\/script>
`,v={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},$=x({__name:"NotificationDuration",setup(g){function a(){c.success({message:"默认关闭时间",description:"此通知将在 4.5 秒后自动关闭。"})}function p(){c.info({message:"较长关闭时间",description:"此通知将在 10 秒后自动关闭。",duration:10})}function t(){c.warning({message:"永不自动关闭",description:"此通知需要手动关闭，duration 设置为 0。",duration:0})}return(o,r)=>(u(),m("div",v,[n(e(s),{onClick:a},{default:i(()=>[...r[1]||(r[1]=[d("默认 4.5 秒",-1)])]),_:1}),n(e(s),{onClick:p},{default:i(()=>[...r[2]||(r[2]=[d("10 秒关闭",-1)])]),_:1}),n(e(s),{onClick:t},{default:i(()=>[...r[3]||(r[3]=[d("永不关闭",-1)])]),_:1}),n(e(s),{type:"default",onClick:r[0]||(r[0]=f=>e(c).destroy())},{default:i(()=>[...r[4]||(r[4]=[d("关闭全部",-1)])]),_:1})]))}}),V=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button @click="openWithDuration">默认 4.5 秒</Button>
    <Button @click="openLongDuration">10 秒关闭</Button>
    <Button @click="openNeverClose">永不关闭</Button>
    <Button type="default" @click="notification.destroy()">关闭全部</Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from 'ant-design-hmfw'

function openWithDuration() {
  notification.success({
    message: '默认关闭时间',
    description: '此通知将在 4.5 秒后自动关闭。',
  })
}

function openLongDuration() {
  notification.info({
    message: '较长关闭时间',
    description: '此通知将在 10 秒后自动关闭。',
    duration: 10,
  })
}

function openNeverClose() {
  notification.warning({
    message: '永不自动关闭',
    description: '此通知需要手动关闭，duration 设置为 0。',
    duration: 0,
  })
}
<\/script>
`,S={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},W=x({__name:"NotificationPlacement",setup(g){function a(p){c.info({message:`通知 (${p})`,description:`这是一条来自${p}的通知消息。`,placement:p})}return(p,t)=>(u(),m("div",S,[n(e(s),{onClick:t[0]||(t[0]=o=>a("topLeft"))},{default:i(()=>[...t[6]||(t[6]=[d("左上角",-1)])]),_:1}),n(e(s),{onClick:t[1]||(t[1]=o=>a("topRight"))},{default:i(()=>[...t[7]||(t[7]=[d("右上角",-1)])]),_:1}),n(e(s),{onClick:t[2]||(t[2]=o=>a("bottomLeft"))},{default:i(()=>[...t[8]||(t[8]=[d("左下角",-1)])]),_:1}),n(e(s),{onClick:t[3]||(t[3]=o=>a("bottomRight"))},{default:i(()=>[...t[9]||(t[9]=[d("右下角",-1)])]),_:1}),n(e(s),{onClick:t[4]||(t[4]=o=>a("top"))},{default:i(()=>[...t[10]||(t[10]=[d("顶部居中",-1)])]),_:1}),n(e(s),{onClick:t[5]||(t[5]=o=>a("bottom"))},{default:i(()=>[...t[11]||(t[11]=[d("底部居中",-1)])]),_:1})]))}}),L=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button @click="open('topLeft')">左上角</Button>
    <Button @click="open('topRight')">右上角</Button>
    <Button @click="open('bottomLeft')">左下角</Button>
    <Button @click="open('bottomRight')">右下角</Button>
    <Button @click="open('top')">顶部居中</Button>
    <Button @click="open('bottom')">底部居中</Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from 'ant-design-hmfw'
import type { NotificationPlacement } from 'ant-design-hmfw'

function open(placement: NotificationPlacement) {
  notification.info({
    message: \`通知 (\${placement})\`,
    description: \`这是一条来自\${placement}的通知消息。\`,
    placement,
  })
}
<\/script>
`,D={class:"markdown-body"},H={__name:"notification",setup(g,{expose:a}){return a({frontmatter:{}}),(t,o)=>{const r=k("DemoBlock");return u(),m("div",D,[o[0]||(o[0]=b('<h1 id="notification-" tabindex="-1">Notification 通知提醒框</h1><p>全局展示通知提醒信息。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>在系统四个角显示通知提醒信息</li><li>系统主动推送的消息，内容较为复杂时使用</li><li>较为复杂的通知内容</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>最简单的用法，4.5 秒后自动关闭。通知提醒框左侧有图标，<code>message</code> 作为通知提醒标题，<code>description</code> 作为通知提醒内容。</p>',7)),n(r,{title:"基础用法",source:e(w)},{default:i(()=>[n(B)]),_:1},8,["source"]),o[1]||(o[1]=l("h3",{id:"-3",tabindex:"-1"},"自动关闭的延时",-1)),o[2]||(o[2]=l("p",null,[d("自定义通知框自动关闭的延时，默认 "),l("code",null,"4.5s"),d("，取消自动关闭只要将该值设为 "),l("code",null,"0"),d(" 即可。")],-1)),n(r,{title:"自动关闭的延时",source:e(V)},{default:i(()=>[n($)]),_:1},8,["source"]),o[3]||(o[3]=l("h3",{id:"-4",tabindex:"-1"},"位置",-1)),o[4]||(o[4]=l("p",null,"通知从右上角、右下角、左下角、左上角、顶部居中、底部居中弹出。",-1)),n(r,{title:"位置",source:e(L)},{default:i(()=>[n(W)]),_:1},8,["source"]),o[5]||(o[5]=l("h3",{id:"-5",tabindex:"-1"},"更新消息内容和全局配置",-1)),o[6]||(o[6]=l("p",null,[d("可以通过唯一的 "),l("code",null,"key"),d(" 来更新内容。也可以通过 "),l("code",null,"notification.config()"),d(" 设置全局配置。")],-1)),n(r,{title:"更新消息内容",source:e(N)},{default:i(()=>[n(h)]),_:1},8,["source"]),o[7]||(o[7]=b('<h2 id="api" tabindex="-1">API</h2><p>组件提供了一些静态方法，使用方式和参数如下：</p><h3 id="-6" tabindex="-1">静态方法</h3><ul><li><code>notification.success(config)</code></li><li><code>notification.error(config)</code></li><li><code>notification.info(config)</code></li><li><code>notification.warning(config)</code></li><li><code>notification.open(config)</code></li><li><code>notification.destroy(key?)</code></li><li><code>notification.config(options)</code></li></ul><h3 id="config-" tabindex="-1">config 参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>通知提醒标题，必选</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>description</td><td>通知提醒内容，可选</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>duration</td><td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td><td><code>number</code></td><td><code>4.5</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>&#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;top&#39; | &#39;bottom&#39;</code></td><td><code>&#39;topRight&#39;</code></td></tr><tr><td>key</td><td>当前通知唯一标志，相同 key 会更新已有通知</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标</td><td><code>VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>VNode | () =&gt; VNode</code></td><td><code>&lt;CloseOutlined /&gt;</code></td></tr><tr><td>btn</td><td>自定义按钮</td><td><code>VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>onClick</td><td>点击通知时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>onClose</td><td>关闭时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>style</td><td>自定义内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义 CSS class</td><td><code>string</code></td><td>-</td></tr><tr><td>pauseOnHover</td><td>鼠标悬停时暂停自动关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>role</td><td>可访问性角色属性</td><td><code>&#39;alert&#39; | &#39;status&#39;</code></td><td><code>&#39;alert&#39;</code></td></tr></tbody></table><h3 id="-7" tabindex="-1">全局配置方法</h3><p><code>notification.config(options)</code></p><p>当你使用 <code>notification.config()</code> 时，可以对所有弹出的通知进行全局配置。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>top</td><td>消息从顶部弹出时，距离顶部的位置，单位像素</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>bottom</td><td>消息从底部弹出时，距离底部的位置，单位像素</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>duration</td><td>默认自动关闭延时，单位秒</td><td><code>number</code></td><td><code>4.5</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>NotificationPlacement</code></td><td><code>&#39;topRight&#39;</code></td></tr><tr><td>maxCount</td><td>最大显示数，超过限制时，最早的消息会被自动关闭</td><td><code>number</code></td><td>-</td></tr><tr><td>getContainer</td><td>配置渲染节点的输出位置</td><td><code>() =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>pauseOnHover</td><td>鼠标悬停时暂停自动关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>rtl</td><td>是否开启 RTL 模式</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="destroy-" tabindex="-1">destroy 方法</h3><p><code>notification.destroy(key?)</code> - 关闭通知</p><ul><li>当传入 <code>key</code> 时，关闭对应 key 的通知</li><li>不传参数时，关闭所有通知</li></ul><h2 id="-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-z-index-popup</code></td><td>通知层级</td><td><code>1010</code></td></tr><tr><td><code>--hmfw-color-bg-elevated</code></td><td>通知背景色</td><td><code>#fff</code></td></tr><tr><td><code>--hmfw-box-shadow-secondary</code></td><td>通知阴影</td><td><code>0 6px 16px 0 rgba(0, 0, 0, 0.08), ...</code></td></tr><tr><td><code>--hmfw-color-success</code></td><td>成功状态颜色</td><td><code>#52c41a</code></td></tr><tr><td><code>--hmfw-color-info</code></td><td>信息状态颜色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态颜色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态颜色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>标题文字颜色</td><td><code>rgba(0, 0, 0, 0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>描述文字颜色</td><td><code>rgba(0, 0, 0, 0.65)</code></td></tr><tr><td><code>--hmfw-color-text-tertiary</code></td><td>关闭图标颜色</td><td><code>rgba(0, 0, 0, 0.45)</code></td></tr></tbody></table>',15))])}}};export{H as default};
