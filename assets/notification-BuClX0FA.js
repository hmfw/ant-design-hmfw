import{B as c}from"./Button-dLk1ExkL.js";import{n as r}from"./notification-CVN_C2ed.js";import{n as x,z as f,j as m,m as n,J as d,Q as s,l as o,o as b,G as C,k,g as l}from"./index-DBrYVvYd.js";import{o as B,l as w}from"./icons-CTzpiRs0.js";import{I as y}from"./Icon-CiCvy_Uq.js";import"./cls-S9IiI6wd.js";const h={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},v=x({__name:"NotificationBasic",setup(g){function a(){r.success({message:"操作成功",description:"您的操作已成功完成，请查看详情。"})}function p(){r.error({message:"操作失败",description:"操作过程中发生错误，请稍后重试。"})}function e(){r.warning({message:"警告",description:"此操作存在风险，请谨慎操作。"})}function t(){r.info({message:"提示信息",description:"这是一条普通的提示信息。"})}return(i,u)=>(f(),m("div",h,[n(d(c),{onClick:a},{default:s(()=>[...u[0]||(u[0]=[o(" 成功 ",-1)])]),_:1}),n(d(c),{onClick:p},{default:s(()=>[...u[1]||(u[1]=[o(" 错误 ",-1)])]),_:1}),n(d(c),{onClick:e},{default:s(()=>[...u[2]||(u[2]=[o(" 警告 ",-1)])]),_:1}),n(d(c),{onClick:t},{default:s(()=>[...u[3]||(u[3]=[o(" 信息 ",-1)])]),_:1})]))}}),N=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="openSuccess"> 成功 </Button>
    <Button @click="openError"> 错误 </Button>
    <Button @click="openWarning"> 警告 </Button>
    <Button @click="openInfo"> 信息 </Button>
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
`,I={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},R=x({__name:"NotificationCloseIcon",setup(g){function a(){r.info({message:"自定义关闭图标",description:"此通知使用了自定义的关闭图标（实心圆形关闭图标）。",closeIcon:()=>b(y,{component:B}),duration:0})}function p(){r.config({closeIcon:()=>b(y,{component:w})}),r.success({message:"全局关闭图标已设置",description:"所有新通知都将使用对勾图标作为关闭按钮，除非单独指定。",duration:3})}function e(){r.config({closeIcon:void 0}),r.info({message:"已重置为默认图标",description:"关闭图标已恢复为默认样式。",duration:3})}return(t,i)=>(f(),m("div",I,[n(d(c),{type:"primary",onClick:a},{default:s(()=>[...i[0]||(i[0]=[o(" 自定义关闭图标 ",-1)])]),_:1}),n(d(c),{onClick:p},{default:s(()=>[...i[1]||(i[1]=[o(" 设置全局关闭图标 ",-1)])]),_:1}),n(d(c),{onClick:e},{default:s(()=>[...i[2]||(i[2]=[o(" 重置全局配置 ",-1)])]),_:1})]))}}),$=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" @click="openWithCustomIcon"> 自定义关闭图标 </Button>
    <Button @click="setGlobalCloseIcon"> 设置全局关闭图标 </Button>
    <Button @click="resetGlobalCloseIcon"> 重置全局配置 </Button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { notification, Button, Icon, CloseCircleFilled, CheckCircleFilled } from '../../../components'

function openWithCustomIcon() {
  notification.info({
    message: '自定义关闭图标',
    description: '此通知使用了自定义的关闭图标（实心圆形关闭图标）。',
    closeIcon: () => h(Icon, { component: CloseCircleFilled }),
    duration: 0,
  })
}

function setGlobalCloseIcon() {
  notification.config({
    closeIcon: () => h(Icon, { component: CheckCircleFilled }),
  })

  notification.success({
    message: '全局关闭图标已设置',
    description: '所有新通知都将使用对勾图标作为关闭按钮，除非单独指定。',
    duration: 3,
  })
}

function resetGlobalCloseIcon() {
  notification.config({
    closeIcon: undefined,
  })

  notification.info({
    message: '已重置为默认图标',
    description: '关闭图标已恢复为默认样式。',
    duration: 3,
  })
}
<\/script>
`,L={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},_=x({__name:"NotificationConfig",setup(g){function a(){r.open({key:"updatable",message:"正在加载...",description:"请稍候，正在处理您的请求。",duration:0}),setTimeout(()=>{r.success({key:"updatable",message:"加载完成",description:"您的请求已处理完成！",duration:3})},2e3)}function p(){r.config({maxCount:3,top:100,duration:2}),r.info({message:"全局配置生效",description:"已设置：maxCount=3, top=100px, duration=2s"}),r.info({message:"通知 2",description:"这是第二条通知"}),r.info({message:"通知 3",description:"这是第三条通知"}),r.info({message:"通知 4",description:"这是第四条通知（第一条将被移除）"}),setTimeout(()=>{r.config({maxCount:void 0,top:24,duration:4.5})},3e3)}return(e,t)=>(f(),m("div",L,[n(d(c),{onClick:a},{default:s(()=>[...t[0]||(t[0]=[o(" 打开并更新 ",-1)])]),_:1}),n(d(c),{onClick:p},{default:s(()=>[...t[1]||(t[1]=[o(" 全局配置 ",-1)])]),_:1})]))}}),P=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="openWithUpdate"> 打开并更新 </Button>
    <Button @click="openWithConfig"> 全局配置 </Button>
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
`,T={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},W=x({__name:"NotificationDuration",setup(g){function a(){r.success({message:"默认关闭时间",description:"此通知将在 4.5 秒后自动关闭。"})}function p(){r.info({message:"较长关闭时间",description:"此通知将在 10 秒后自动关闭。",duration:10})}function e(){r.warning({message:"永不自动关闭",description:"此通知需要手动关闭，duration 设置为 0。",duration:0})}return(t,i)=>(f(),m("div",T,[n(d(c),{onClick:a},{default:s(()=>[...i[1]||(i[1]=[o(" 默认 4.5 秒 ",-1)])]),_:1}),n(d(c),{onClick:p},{default:s(()=>[...i[2]||(i[2]=[o(" 10 秒关闭 ",-1)])]),_:1}),n(d(c),{onClick:e},{default:s(()=>[...i[3]||(i[3]=[o(" 永不关闭 ",-1)])]),_:1}),n(d(c),{type:"default",onClick:i[0]||(i[0]=u=>d(r).destroy())},{default:s(()=>[...i[4]||(i[4]=[o(" 关闭全部 ",-1)])]),_:1})]))}}),S=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="openWithDuration"> 默认 4.5 秒 </Button>
    <Button @click="openLongDuration"> 10 秒关闭 </Button>
    <Button @click="openNeverClose"> 永不关闭 </Button>
    <Button type="default" @click="notification.destroy()"> 关闭全部 </Button>
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
`,V={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},D=x({__name:"NotificationPlacement",setup(g){function a(p){r.info({message:`通知 (${p})`,description:`这是一条来自${p}的通知消息。`,placement:p})}return(p,e)=>(f(),m("div",V,[n(d(c),{onClick:e[0]||(e[0]=t=>a("topLeft"))},{default:s(()=>[...e[6]||(e[6]=[o(" 左上角 ",-1)])]),_:1}),n(d(c),{onClick:e[1]||(e[1]=t=>a("topRight"))},{default:s(()=>[...e[7]||(e[7]=[o(" 右上角 ",-1)])]),_:1}),n(d(c),{onClick:e[2]||(e[2]=t=>a("bottomLeft"))},{default:s(()=>[...e[8]||(e[8]=[o(" 左下角 ",-1)])]),_:1}),n(d(c),{onClick:e[3]||(e[3]=t=>a("bottomRight"))},{default:s(()=>[...e[9]||(e[9]=[o(" 右下角 ",-1)])]),_:1}),n(d(c),{onClick:e[4]||(e[4]=t=>a("top"))},{default:s(()=>[...e[10]||(e[10]=[o(" 顶部居中 ",-1)])]),_:1}),n(d(c),{onClick:e[5]||(e[5]=t=>a("bottom"))},{default:s(()=>[...e[11]||(e[11]=[o(" 底部居中 ",-1)])]),_:1})]))}}),G=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="open('topLeft')"> 左上角 </Button>
    <Button @click="open('topRight')"> 右上角 </Button>
    <Button @click="open('bottomLeft')"> 左下角 </Button>
    <Button @click="open('bottomRight')"> 右下角 </Button>
    <Button @click="open('top')"> 顶部居中 </Button>
    <Button @click="open('bottom')"> 底部居中 </Button>
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
`,F={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},E=x({__name:"NotificationRtl",setup(g){function a(){r.config({rtl:!0}),r.success({message:"RTL 模式已启用",description:"通知现在将以从右到左的布局显示，适用于阿拉伯语等语言。图标和关闭按钮位置已自动调整。",duration:3})}function p(){r.config({rtl:!1}),r.info({message:"RTL 模式已禁用",description:"通知已恢复为默认的从左到右布局。",duration:3})}function e(){r.open({message:"测试通知",description:"这是一条测试通知，用于查看当前布局方向的效果。",duration:3})}return(t,i)=>(f(),m("div",F,[n(d(c),{type:"primary",onClick:a},{default:s(()=>[...i[0]||(i[0]=[o(" 启用 RTL 模式 ",-1)])]),_:1}),n(d(c),{onClick:p},{default:s(()=>[...i[1]||(i[1]=[o(" 禁用 RTL 模式 ",-1)])]),_:1}),n(d(c),{onClick:e},{default:s(()=>[...i[2]||(i[2]=[o(" 打开通知 ",-1)])]),_:1})]))}}),H=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" @click="enableRtl"> 启用 RTL 模式 </Button>
    <Button @click="disableRtl"> 禁用 RTL 模式 </Button>
    <Button @click="openNotification"> 打开通知 </Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from 'ant-design-hmfw'

function enableRtl() {
  notification.config({
    rtl: true,
  })

  notification.success({
    message: 'RTL 模式已启用',
    description: '通知现在将以从右到左的布局显示，适用于阿拉伯语等语言。图标和关闭按钮位置已自动调整。',
    duration: 3,
  })
}

function disableRtl() {
  notification.config({
    rtl: false,
  })

  notification.info({
    message: 'RTL 模式已禁用',
    description: '通知已恢复为默认的从左到右布局。',
    duration: 3,
  })
}

function openNotification() {
  notification.open({
    message: '测试通知',
    description: '这是一条测试通知，用于查看当前布局方向的效果。',
    duration: 3,
  })
}
<\/script>
`,O={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},U=x({__name:"NotificationShowProgress",setup(g){function a(){r.success({message:"带进度条的通知",description:"此通知会在 5 秒后自动关闭，底部显示倒计时进度条。",duration:5,showProgress:!0})}function p(){r.info({message:"不带进度条的通知",description:"此通知 5 秒后关闭，但不显示进度条。",duration:5,showProgress:!1})}return(e,t)=>(f(),m("div",O,[n(d(c),{type:"primary",onClick:a},{default:s(()=>[...t[0]||(t[0]=[o(" 显示进度条 ",-1)])]),_:1}),n(d(c),{onClick:p},{default:s(()=>[...t[1]||(t[1]=[o(" 不显示进度条 ",-1)])]),_:1})]))}}),z=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" @click="openWithProgress"> 显示进度条 </Button>
    <Button @click="openWithoutProgress"> 不显示进度条 </Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from 'ant-design-hmfw'

function openWithProgress() {
  notification.success({
    message: '带进度条的通知',
    description: '此通知会在 5 秒后自动关闭，底部显示倒计时进度条。',
    duration: 5,
    showProgress: true,
  })
}

function openWithoutProgress() {
  notification.info({
    message: '不带进度条的通知',
    description: '此通知 5 秒后关闭，但不显示进度条。',
    duration: 5,
    showProgress: false,
  })
}
<\/script>
`,j={class:"markdown-body"},X={__name:"notification",setup(g,{expose:a}){return a({frontmatter:{}}),(e,t)=>{const i=C("DemoBlock");return f(),m("div",j,[t[0]||(t[0]=k('<h1 id="notification-" tabindex="-1">Notification 通知提醒框</h1><p>全局展示通知提醒信息。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>在系统四个角显示通知提醒信息</li><li>系统主动推送的消息，内容较为复杂时使用</li><li>较为复杂的通知内容</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>最简单的用法，4.5 秒后自动关闭。通知提醒框左侧有图标，<code>message</code> 作为通知提醒标题，<code>description</code> 作为通知提醒内容。</p>',7)),n(i,{title:"基础用法",source:d(N)},{default:s(()=>[n(v)]),_:1},8,["source"]),t[1]||(t[1]=l("h3",{id:"-3",tabindex:"-1"},"自动关闭的延时",-1)),t[2]||(t[2]=l("p",null,[o("自定义通知框自动关闭的延时，默认 "),l("code",null,"4.5s"),o("，取消自动关闭只要将该值设为 "),l("code",null,"0"),o(" 即可。")],-1)),n(i,{title:"自动关闭的延时",source:d(S)},{default:s(()=>[n(W)]),_:1},8,["source"]),t[3]||(t[3]=l("h3",{id:"-4",tabindex:"-1"},"位置",-1)),t[4]||(t[4]=l("p",null,"通知从右上角、右下角、左下角、左上角、顶部居中、底部居中弹出。",-1)),n(i,{title:"位置",source:d(G)},{default:s(()=>[n(D)]),_:1},8,["source"]),t[5]||(t[5]=l("h3",{id:"-5",tabindex:"-1"},"更新消息内容和全局配置",-1)),t[6]||(t[6]=l("p",null,[o("可以通过唯一的 "),l("code",null,"key"),o(" 来更新内容。也可以通过 "),l("code",null,"notification.config()"),o(" 设置全局配置。")],-1)),n(i,{title:"更新消息内容",source:d(P)},{default:s(()=>[n(_)]),_:1},8,["source"]),t[7]||(t[7]=l("h3",{id:"-6",tabindex:"-1"},"显示进度条",-1)),t[8]||(t[8]=l("p",null,[o("通过 "),l("code",null,"showProgress"),o(" 属性，可以在通知底部显示倒计时进度条，让用户直观地看到通知将在何时自动关闭。")],-1)),n(i,{title:"显示进度条",source:d(z)},{default:s(()=>[n(U)]),_:1},8,["source"]),t[9]||(t[9]=l("h3",{id:"-7",tabindex:"-1"},"自定义关闭图标",-1)),t[10]||(t[10]=l("p",null,[o("可以通过 "),l("code",null,"closeIcon"),o(" 属性自定义单个通知的关闭图标，也可以通过 "),l("code",null,"notification.config({ closeIcon })"),o(" 设置全局关闭图标。单个通知的 "),l("code",null,"closeIcon"),o(" 会覆盖全局配置。")],-1)),n(i,{title:"自定义关闭图标",source:d($)},{default:s(()=>[n(R)]),_:1},8,["source"]),t[11]||(t[11]=l("h3",{id:"rtl-",tabindex:"-1"},"RTL 模式",-1)),t[12]||(t[12]=l("p",null,[o("通过 "),l("code",null,"notification.config({ rtl: true })"),o(" 开启 RTL（从右到左）布局模式，适用于阿拉伯语、希伯来语等从右到左阅读的语言。RTL 模式会自动调整图标和关闭按钮的位置。")],-1)),n(i,{title:"RTL 模式",source:d(H)},{default:s(()=>[n(E)]),_:1},8,["source"]),t[13]||(t[13]=k('<h2 id="api" tabindex="-1">API</h2><p>组件提供了一些静态方法，使用方式和参数如下：</p><h3 id="-8" tabindex="-1">静态方法</h3><ul><li><code>notification.success(config)</code></li><li><code>notification.error(config)</code></li><li><code>notification.info(config)</code></li><li><code>notification.warning(config)</code></li><li><code>notification.open(config)</code></li><li><code>notification.destroy(key?)</code></li><li><code>notification.config(options)</code></li></ul><h3 id="config-" tabindex="-1">config 参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>通知提醒标题，必选</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>description</td><td>通知提醒内容，可选</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>duration</td><td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td><td><code>number</code></td><td><code>4.5</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>&#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;top&#39; | &#39;bottom&#39;</code></td><td><code>&#39;topRight&#39;</code></td></tr><tr><td>key</td><td>当前通知唯一标志，相同 key 会更新已有通知</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标</td><td><code>VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>VNode | () =&gt; VNode</code></td><td><code>&lt;CloseOutlined /&gt;</code></td></tr><tr><td>btn</td><td>自定义按钮</td><td><code>VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>onClick</td><td>点击通知时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>onClose</td><td>关闭时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>style</td><td>自定义内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义 CSS class</td><td><code>string</code></td><td>-</td></tr><tr><td>pauseOnHover</td><td>鼠标悬停时暂停自动关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showProgress</td><td>显示倒计时进度条</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>role</td><td>可访问性角色属性</td><td><code>&#39;alert&#39; | &#39;status&#39;</code></td><td><code>&#39;alert&#39;</code></td></tr></tbody></table><h3 id="-9" tabindex="-1">全局配置方法</h3><p><code>notification.config(options)</code></p><p>当你使用 <code>notification.config()</code> 时，可以对所有弹出的通知进行全局配置。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>top</td><td>消息从顶部弹出时，距离顶部的位置，单位像素</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>bottom</td><td>消息从底部弹出时，距离底部的位置，单位像素</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>duration</td><td>默认自动关闭延时，单位秒</td><td><code>number</code></td><td><code>4.5</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>NotificationPlacement</code></td><td><code>&#39;topRight&#39;</code></td></tr><tr><td>maxCount</td><td>最大显示数，超过限制时，最早的消息会被自动关闭</td><td><code>number</code></td><td>-</td></tr><tr><td>getContainer</td><td>配置渲染节点的输出位置</td><td><code>() =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>pauseOnHover</td><td>鼠标悬停时暂停自动关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showProgress</td><td>全局显示倒计时进度条</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>rtl</td><td>是否开启 RTL 模式</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="destroy-" tabindex="-1">destroy 方法</h3><p><code>notification.destroy(key?)</code> - 关闭通知</p><ul><li>当传入 <code>key</code> 时，关闭对应 key 的通知</li><li>不传参数时，关闭所有通知</li></ul><h2 id="-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-z-index-popup</code></td><td>通知层级</td><td><code>1010</code></td></tr><tr><td><code>--hmfw-color-bg-elevated</code></td><td>通知背景色</td><td><code>#fff</code></td></tr><tr><td><code>--hmfw-box-shadow-secondary</code></td><td>通知阴影</td><td><code>0 6px 16px 0 rgba(0, 0, 0, 0.08), ...</code></td></tr><tr><td><code>--hmfw-color-success</code></td><td>成功状态颜色</td><td><code>#52c41a</code></td></tr><tr><td><code>--hmfw-color-info</code></td><td>信息状态颜色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态颜色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态颜色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>标题文字颜色</td><td><code>rgba(0, 0, 0, 0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>描述文字颜色</td><td><code>rgba(0, 0, 0, 0.65)</code></td></tr><tr><td><code>--hmfw-color-text-tertiary</code></td><td>关闭图标颜色</td><td><code>rgba(0, 0, 0, 0.45)</code></td></tr></tbody></table>',15))])}}};export{X as default};
