import{m as o}from"./message-GhpcJRyH.js";import{m,y as a,i as c,f as n,E as p,l as i,P as l,I as g,j as b}from"./index-CsoOETlJ.js";import"./cls-S9IiI6wd.js";const f={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},h=m({__name:"MessageBasic",setup(u){function e(){o.success("操作成功！")}function s(){o.error("操作失败，请重试。")}function r(){o.warning("请注意此操作的风险。")}function t(){o.info("这是一条普通提示信息。")}function d(){o.loading("正在加载中...")}return(y,_)=>(a(),c("div",f,[n("button",{onClick:e},"成功"),n("button",{onClick:s},"错误"),n("button",{onClick:r},"警告"),n("button",{onClick:t},"信息"),n("button",{onClick:d},"加载中")]))}}),w=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button @click="showSuccess">成功</button>
    <button @click="showError">错误</button>
    <button @click="showWarning">警告</button>
    <button @click="showInfo">信息</button>
    <button @click="showLoading">加载中</button>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-hmfw'

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
`,x={style:{display:"flex",gap:"8px"}},k=m({__name:"MessageDuration",setup(u){function e(){o.success("这条消息将显示 10 秒",10)}function s(){o.info("关闭后将触发回调",2).then(()=>{o.success("消息已关闭！")})}return(r,t)=>(a(),c("div",x,[n("button",{onClick:e},"显示 10 秒"),n("button",{onClick:s},"关闭后回调")]))}}),C=`<template>
  <div style="display: flex; gap: 8px;">
    <button @click="showLong">显示 10 秒</button>
    <button @click="showWithCallback">关闭后回调</button>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-hmfw'

function showLong() {
  message.success('这条消息将显示 10 秒', 10)
}

function showWithCallback() {
  message.info('关闭后将触发回调', 2).then(() => {
    message.success('消息已关闭！')
  })
}
<\/script>
`,v={class:"markdown-body"},S={__name:"message",setup(u,{expose:e}){return e({frontmatter:{}}),(r,t)=>{const d=p("DemoBlock");return a(),c("div",v,[t[0]||(t[0]=n("h1",{id:"message-",tabindex:"-1"},"Message 全局提示",-1)),t[1]||(t[1]=n("p",null,"全局展示操作反馈信息。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"可提供成功、警告和错误等反馈信息"),n("li",null,"顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"信息提醒反馈。",-1)),i(d,{title:"基础用法",source:g(w)},{default:l(()=>[i(h)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"自定义时长",-1)),t[8]||(t[8]=n("p",null,"自定义消息显示时长，默认 3 秒。",-1)),i(d,{title:"自定义时长",source:g(C)},{default:l(()=>[i(k)]),_:1},8,["source"]),t[9]||(t[9]=b('<h2 id="api" tabindex="-1">API</h2><h3 id="message--1" tabindex="-1">message 方法</h3><table><thead><tr><th>方法</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>message.success</td><td>成功提示</td><td><code>(content: string, duration?: number, onClose?: () =&gt; void) =&gt; Promise</code></td></tr><tr><td>message.error</td><td>错误提示</td><td><code>(content: string, duration?: number, onClose?: () =&gt; void) =&gt; Promise</code></td></tr><tr><td>message.warning</td><td>警告提示</td><td><code>(content: string, duration?: number, onClose?: () =&gt; void) =&gt; Promise</code></td></tr><tr><td>message.info</td><td>普通提示</td><td><code>(content: string, duration?: number, onClose?: () =&gt; void) =&gt; Promise</code></td></tr><tr><td>message.loading</td><td>加载中提示</td><td><code>(content: string, duration?: number, onClose?: () =&gt; void) =&gt; Promise</code></td></tr></tbody></table><h3 id="-4" tabindex="-1">参数说明</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>提示内容</td><td><code>string</code></td><td>-</td></tr><tr><td>duration</td><td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td><td><code>number</code></td><td><code>3</code></td></tr><tr><td>onClose</td><td>关闭时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table><p>所有方法均返回 <code>Promise</code>，可通过 <code>.then()</code> 在关闭后执行回调。</p>',6))])}}};export{S as default};
