import{n as d}from"./notification-DEAoO6zE.js";import{m as u,y as p,i as a,f as n,E as m,l as r,P as l,I as f,j as b}from"./index-Ct2ToimZ.js";import"./cls-S9IiI6wd.js";const g={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},x=u({__name:"NotificationBasic",setup(c){function i(){d.success({message:"操作成功",description:"您的操作已成功完成，请查看详情。"})}function e(){d.error({message:"操作失败",description:"操作过程中发生错误，请稍后重试。"})}function o(){d.warning({message:"警告",description:"此操作存在风险，请谨慎操作。"})}function t(){d.info({message:"提示信息",description:"这是一条普通的提示信息。"})}return(s,C)=>(p(),a("div",g,[n("button",{onClick:i},"成功"),n("button",{onClick:e},"错误"),n("button",{onClick:o},"警告"),n("button",{onClick:t},"信息")]))}}),k=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button @click="openSuccess">成功</button>
    <button @click="openError">错误</button>
    <button @click="openWarning">警告</button>
    <button @click="openInfo">信息</button>
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-hmfw'

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
`,h={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},y=u({__name:"NotificationPlacement",setup(c){function i(e){d.info({message:`通知 (${e})`,description:`这是一条来自${e}的通知消息。`,placement:e})}return(e,o)=>(p(),a("div",h,[n("button",{onClick:o[0]||(o[0]=t=>i("topLeft"))},"左上角"),n("button",{onClick:o[1]||(o[1]=t=>i("topRight"))},"右上角"),n("button",{onClick:o[2]||(o[2]=t=>i("bottomLeft"))},"左下角"),n("button",{onClick:o[3]||(o[3]=t=>i("bottomRight"))},"右下角")]))}}),w=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button @click="open('topLeft')">左上角</button>
    <button @click="open('topRight')">右上角</button>
    <button @click="open('bottomLeft')">左下角</button>
    <button @click="open('bottomRight')">右下角</button>
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-hmfw'

type Placement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

function open(placement: Placement) {
  notification.info({
    message: \`通知 (\${placement})\`,
    description: \`这是一条来自\${placement}的通知消息。\`,
    placement,
  })
}
<\/script>
`,v={class:"markdown-body"},N={__name:"notification",setup(c,{expose:i}){return i({frontmatter:{}}),(o,t)=>{const s=m("DemoBlock");return p(),a("div",v,[t[0]||(t[0]=n("h1",{id:"notification-",tabindex:"-1"},"Notification 通知提醒框",-1)),t[1]||(t[1]=n("p",null,"全局展示通知提醒信息。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"在系统四个角显示通知提醒信息"),n("li",null,"系统主动推送的消息，内容较为复杂时使用")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"最简单的用法，4.5 秒后自动关闭。",-1)),r(s,{title:"基础用法",source:f(k)},{default:l(()=>[r(x)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"四个位置",-1)),t[8]||(t[8]=n("p",null,"通知从屏幕四个角弹出。",-1)),r(s,{title:"四个位置",source:f(w)},{default:l(()=>[r(y)]),_:1},8,["source"]),t[9]||(t[9]=b('<h2 id="api" tabindex="-1">API</h2><h3 id="notification--1" tabindex="-1">notification 方法</h3><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>notification.success</td><td>成功通知</td></tr><tr><td>notification.error</td><td>错误通知</td></tr><tr><td>notification.warning</td><td>警告通知</td></tr><tr><td>notification.info</td><td>普通通知</td></tr></tbody></table><h3 id="-4" tabindex="-1">配置参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>通知提醒标题</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>通知提醒内容</td><td><code>string</code></td><td>-</td></tr><tr><td>duration</td><td>默认 4.5 秒后自动关闭，设置为 null 则不自动关闭</td><td><code>number | null</code></td><td><code>4.5</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>&#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39;</code></td><td><code>&#39;topRight&#39;</code></td></tr><tr><td>onClose</td><td>当通知关闭时触发</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>key</td><td>当前通知唯一标志</td><td><code>string</code></td><td>-</td></tr></tbody></table>',5))])}}};export{N as default};
