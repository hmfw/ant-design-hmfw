import{B as d}from"./Button-1ex4Sfix.js";import{n as p}from"./notification-CSyMLDtq.js";import{o as y,A as m,k as g,n as s,L as o,Q as a,m as t,h as c,p as b,_ as v,H as N,l as x}from"./index-CEDKhEzr.js";import{C}from"./CloseCircleFilled-JEI3_UNE.js";import{C as w}from"./CheckCircleFilled-CsIzQbUh.js";import"./cls-S9IiI6wd.js";import"./LoadingOutlined-hrD8In55.js";import"./CloseOutlined-BlUYSe2f.js";import"./ExclamationCircleFilled-D6KJMMeL.js";import"./InfoCircleFilled-DFnawvy2.js";const h={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},B=y({__name:"NotificationBasic",setup(k){function l(){p.success({message:"操作成功",description:"您的操作已成功完成，请查看详情。"})}function u(){p.error({message:"操作失败",description:"操作过程中发生错误，请稍后重试。"})}function e(){p.warning({message:"警告",description:"此操作存在风险，请谨慎操作。"})}function n(){p.info({message:"提示信息",description:"这是一条普通的提示信息。"})}return(i,f)=>(m(),g("div",h,[s(o(d),{onClick:l},{default:a(()=>[...f[0]||(f[0]=[t(" 成功 ",-1)])]),_:1}),s(o(d),{onClick:u},{default:a(()=>[...f[1]||(f[1]=[t(" 错误 ",-1)])]),_:1}),s(o(d),{onClick:e},{default:a(()=>[...f[2]||(f[2]=[t(" 警告 ",-1)])]),_:1}),s(o(d),{onClick:n},{default:a(()=>[...f[3]||(f[3]=[t(" 信息 ",-1)])]),_:1})]))}}),S=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="openSuccess"> 成功 </Button>
    <Button @click="openError"> 错误 </Button>
    <Button @click="openWarning"> 警告 </Button>
    <Button @click="openInfo"> 信息 </Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from '@hmfw/ant-design'

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
`,R={style:{display:"flex","flex-direction":"column",gap:"16px"}},I=y({__name:"NotificationClassNames",setup(k){function l(){p.info({message:"系统更新",description:"新版本已发布，建议尽快升级以获得更好体验。",classNames:{notice:"demo-gradient-notice",message:"demo-gradient-message",description:"demo-gradient-desc",icon:"demo-gradient-icon",close:"demo-gradient-close"}})}function u(){p.success({message:"保存成功",description:"您的更改已自动保存到云端。",classNames:{message:"demo-highlight-message",icon:"demo-highlight-icon"}})}function e(){p.warning({message:"订阅即将到期",description:"您的会员将于 3 天后到期，请及时续费。",btn:b(d,{type:"primary"},()=>"立即续费"),classNames:{notice:"demo-action-notice",btn:"demo-action-btn",close:"demo-action-close"}})}function n(){p.error({message:"操作失败",description:"请求超时，请检查网络后重试。",styles:{notice:{borderRadius:"12px",borderLeft:"4px solid #ff4d4f"},message:{fontSize:"17px",color:"#cf1322"},description:{color:"#a8071a"}}})}function i(){p.info({message:"组合定制",description:"classNames 控制结构样式，styles 内联样式优先级更高。",classNames:{notice:"demo-combined-notice",icon:"demo-combined-icon"},styles:{message:{color:"#fff",fontSize:"16px"},description:{color:"rgba(255, 255, 255, 0.85)"}}})}return(f,r)=>(m(),g("div",R,[c("div",null,[r[1]||(r[1]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义渐变通知卡片（classNames）：",-1)),s(o(d),{onClick:l},{default:a(()=>[...r[0]||(r[0]=[t("渐变通知",-1)])]),_:1})]),c("div",null,[r[3]||(r[3]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"突出标题与图标（classNames）：",-1)),s(o(d),{onClick:u},{default:a(()=>[...r[2]||(r[2]=[t("高亮标题",-1)])]),_:1})]),c("div",null,[r[5]||(r[5]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"操作型通知（classNames）：",-1)),s(o(d),{onClick:e},{default:a(()=>[...r[4]||(r[4]=[t("带操作按钮",-1)])]),_:1})]),c("div",null,[r[7]||(r[7]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式（styles）：",-1)),s(o(d),{onClick:n},{default:a(()=>[...r[6]||(r[6]=[t("内联样式",-1)])]),_:1})]),c("div",null,[r[9]||(r[9]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"classNames 与 styles 叠加：",-1)),s(o(d),{onClick:i},{default:a(()=>[...r[8]||(r[8]=[t("组合定制",-1)])]),_:1})])]))}}),P=v(I,[["__scopeId","data-v-df990c5c"]]),L=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <!-- 场景 1：通过 classNames 自定义渐变卡片 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义渐变通知卡片（classNames）：</div>
      <Button @click="openGradient">渐变通知</Button>
    </div>

    <!-- 场景 2：突出标题与图标 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">突出标题与图标（classNames）：</div>
      <Button @click="openHighlight">高亮标题</Button>
    </div>

    <!-- 场景 3：操作型通知，定制按钮区与关闭按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">操作型通知（classNames）：</div>
      <Button @click="openAction">带操作按钮</Button>
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式（styles）：</div>
      <Button @click="openInlineStyles">内联样式</Button>
    </div>

    <!-- 场景 5：classNames 与 styles 叠加 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">classNames 与 styles 叠加：</div>
      <Button @click="openCombined">组合定制</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { notification, Button } from '@hmfw/ant-design'

// 场景 1：通过 classNames 应用渐变背景与白色文本
function openGradient() {
  notification.info({
    message: '系统更新',
    description: '新版本已发布，建议尽快升级以获得更好体验。',
    classNames: {
      notice: 'demo-gradient-notice',
      message: 'demo-gradient-message',
      description: 'demo-gradient-desc',
      icon: 'demo-gradient-icon',
      close: 'demo-gradient-close',
    },
  })
}

// 场景 2：突出标题与图标
function openHighlight() {
  notification.success({
    message: '保存成功',
    description: '您的更改已自动保存到云端。',
    classNames: {
      message: 'demo-highlight-message',
      icon: 'demo-highlight-icon',
    },
  })
}

// 场景 3：操作型通知，定制按钮区与关闭按钮
function openAction() {
  notification.warning({
    message: '订阅即将到期',
    description: '您的会员将于 3 天后到期，请及时续费。',
    btn: h(Button, { type: 'primary' }, () => '立即续费'),
    classNames: {
      notice: 'demo-action-notice',
      btn: 'demo-action-btn',
      close: 'demo-action-close',
    },
  })
}

// 场景 4：使用 styles 内联样式对象
function openInlineStyles() {
  notification.error({
    message: '操作失败',
    description: '请求超时，请检查网络后重试。',
    styles: {
      notice: { borderRadius: '12px', borderLeft: '4px solid #ff4d4f' },
      message: { fontSize: '17px', color: '#cf1322' },
      description: { color: '#a8071a' },
    },
  })
}

// 场景 5：classNames 与 styles 同时使用（styles 优先级更高）
function openCombined() {
  notification.info({
    message: '组合定制',
    description: 'classNames 控制结构样式，styles 内联样式优先级更高。',
    classNames: {
      notice: 'demo-combined-notice',
      icon: 'demo-combined-icon',
    },
    styles: {
      message: { color: '#fff', fontSize: '16px' },
      description: { color: 'rgba(255, 255, 255, 0.85)' },
    },
  })
}
<\/script>

<style scoped>
/* 场景 1：渐变通知卡片 */
:deep(.demo-gradient-notice) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
}

:deep(.demo-gradient-message) {
  color: #fff;
}

:deep(.demo-gradient-desc) {
  color: rgba(255, 255, 255, 0.85);
}

:deep(.demo-gradient-icon) {
  color: #fff;
}

:deep(.demo-gradient-close) {
  color: rgba(255, 255, 255, 0.7);
}

:deep(.demo-gradient-close:hover) {
  color: #fff;
}

/* 场景 2：突出标题与图标 */
:deep(.demo-highlight-message) {
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(to right, #52c41a, #389e0d);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

:deep(.demo-highlight-icon) {
  transform: scale(1.15);
  transition: transform 0.3s;
}

/* 场景 3：操作型通知 */
:deep(.demo-action-notice) {
  background: #fffbe6;
  border: 1px solid #ffe58f;
}

:deep(.demo-action-btn) {
  display: flex;
  justify-content: flex-end;
}

:deep(.demo-action-close:hover) {
  background-color: rgba(250, 173, 20, 0.15);
}

/* 场景 5：组合定制 */
:deep(.demo-combined-notice) {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border: none;
  box-shadow: 0 4px 16px rgba(9, 109, 217, 0.35);
}

:deep(.demo-combined-icon) {
  color: #fff;
}
</style>
`,$={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},q=y({__name:"NotificationCloseIcon",setup(k){function l(){p.info({message:"自定义关闭图标",description:"此通知使用了自定义的关闭图标（实心圆形关闭图标）。",closeIcon:()=>b(C,{class:"hmfw-icon"}),duration:0})}function u(){p.config({closeIcon:()=>b(w,{class:"hmfw-icon"})}),p.success({message:"全局关闭图标已设置",description:"所有新通知都将使用对勾图标作为关闭按钮，除非单独指定。",duration:3})}function e(){p.config({closeIcon:void 0}),p.info({message:"已重置为默认图标",description:"关闭图标已恢复为默认样式。",duration:3})}return(n,i)=>(m(),g("div",$,[s(o(d),{type:"primary",onClick:l},{default:a(()=>[...i[0]||(i[0]=[t(" 自定义关闭图标 ",-1)])]),_:1}),s(o(d),{onClick:u},{default:a(()=>[...i[1]||(i[1]=[t(" 设置全局关闭图标 ",-1)])]),_:1}),s(o(d),{onClick:e},{default:a(()=>[...i[2]||(i[2]=[t(" 重置全局配置 ",-1)])]),_:1})]))}}),T=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" @click="openWithCustomIcon"> 自定义关闭图标 </Button>
    <Button @click="setGlobalCloseIcon"> 设置全局关闭图标 </Button>
    <Button @click="resetGlobalCloseIcon"> 重置全局配置 </Button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { notification, Button, CloseCircleFilled, CheckCircleFilled } from '@hmfw/ant-design'

function openWithCustomIcon() {
  notification.info({
    message: '自定义关闭图标',
    description: '此通知使用了自定义的关闭图标（实心圆形关闭图标）。',
    closeIcon: () => h(CloseCircleFilled, { class: 'hmfw-icon' }),
    duration: 0,
  })
}

function setGlobalCloseIcon() {
  notification.config({
    closeIcon: () => h(CheckCircleFilled, { class: 'hmfw-icon' }),
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
`,W={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},_=y({__name:"NotificationConfig",setup(k){function l(){p.open({key:"updatable",message:"正在加载...",description:"请稍候，正在处理您的请求。",duration:0}),setTimeout(()=>{p.success({key:"updatable",message:"加载完成",description:"您的请求已处理完成！",duration:3})},2e3)}function u(){p.config({maxCount:3,top:100,duration:2}),p.info({message:"全局配置生效",description:"已设置：maxCount=3, top=100px, duration=2s"}),p.info({message:"通知 2",description:"这是第二条通知"}),p.info({message:"通知 3",description:"这是第三条通知"}),p.info({message:"通知 4",description:"这是第四条通知（第一条将被移除）"}),setTimeout(()=>{p.config({maxCount:void 0,top:24,duration:4.5})},3e3)}return(e,n)=>(m(),g("div",W,[s(o(d),{onClick:l},{default:a(()=>[...n[0]||(n[0]=[t(" 打开并更新 ",-1)])]),_:1}),s(o(d),{onClick:u},{default:a(()=>[...n[1]||(n[1]=[t(" 全局配置 ",-1)])]),_:1})]))}}),V=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="openWithUpdate"> 打开并更新 </Button>
    <Button @click="openWithConfig"> 全局配置 </Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from '@hmfw/ant-design'

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
`,E={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},D=y({__name:"NotificationDuration",setup(k){function l(){p.success({message:"默认关闭时间",description:"此通知将在 4.5 秒后自动关闭。"})}function u(){p.info({message:"较长关闭时间",description:"此通知将在 10 秒后自动关闭。",duration:10})}function e(){p.warning({message:"永不自动关闭",description:"此通知需要手动关闭，duration 设置为 0。",duration:0})}return(n,i)=>(m(),g("div",E,[s(o(d),{onClick:l},{default:a(()=>[...i[1]||(i[1]=[t(" 默认 4.5 秒 ",-1)])]),_:1}),s(o(d),{onClick:u},{default:a(()=>[...i[2]||(i[2]=[t(" 10 秒关闭 ",-1)])]),_:1}),s(o(d),{onClick:e},{default:a(()=>[...i[3]||(i[3]=[t(" 永不关闭 ",-1)])]),_:1}),s(o(d),{type:"default",onClick:i[0]||(i[0]=f=>o(p).destroy())},{default:a(()=>[...i[4]||(i[4]=[t(" 关闭全部 ",-1)])]),_:1})]))}}),A=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="openWithDuration"> 默认 4.5 秒 </Button>
    <Button @click="openLongDuration"> 10 秒关闭 </Button>
    <Button @click="openNeverClose"> 永不关闭 </Button>
    <Button type="default" @click="notification.destroy()"> 关闭全部 </Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from '@hmfw/ant-design'

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
`,G={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},F=y({__name:"NotificationPlacement",setup(k){function l(u){p.info({message:`通知 (${u})`,description:`这是一条来自${u}的通知消息。`,placement:u})}return(u,e)=>(m(),g("div",G,[s(o(d),{onClick:e[0]||(e[0]=n=>l("topLeft"))},{default:a(()=>[...e[6]||(e[6]=[t(" 左上角 ",-1)])]),_:1}),s(o(d),{onClick:e[1]||(e[1]=n=>l("topRight"))},{default:a(()=>[...e[7]||(e[7]=[t(" 右上角 ",-1)])]),_:1}),s(o(d),{onClick:e[2]||(e[2]=n=>l("bottomLeft"))},{default:a(()=>[...e[8]||(e[8]=[t(" 左下角 ",-1)])]),_:1}),s(o(d),{onClick:e[3]||(e[3]=n=>l("bottomRight"))},{default:a(()=>[...e[9]||(e[9]=[t(" 右下角 ",-1)])]),_:1}),s(o(d),{onClick:e[4]||(e[4]=n=>l("top"))},{default:a(()=>[...e[10]||(e[10]=[t(" 顶部居中 ",-1)])]),_:1}),s(o(d),{onClick:e[5]||(e[5]=n=>l("bottom"))},{default:a(()=>[...e[11]||(e[11]=[t(" 底部居中 ",-1)])]),_:1})]))}}),z=`<template>
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
import { notification, Button } from '@hmfw/ant-design'
import type { NotificationPlacement } from '@hmfw/ant-design'

function open(placement: NotificationPlacement) {
  notification.info({
    message: \`通知 (\${placement})\`,
    description: \`这是一条来自\${placement}的通知消息。\`,
    placement,
  })
}
<\/script>
`,H={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},O=y({__name:"NotificationRtl",setup(k){function l(){p.config({rtl:!0}),p.success({message:"RTL 模式已启用",description:"通知现在将以从右到左的布局显示，适用于阿拉伯语等语言。图标和关闭按钮位置已自动调整。",duration:3})}function u(){p.config({rtl:!1}),p.info({message:"RTL 模式已禁用",description:"通知已恢复为默认的从左到右布局。",duration:3})}function e(){p.open({message:"测试通知",description:"这是一条测试通知，用于查看当前布局方向的效果。",duration:3})}return(n,i)=>(m(),g("div",H,[s(o(d),{type:"primary",onClick:l},{default:a(()=>[...i[0]||(i[0]=[t(" 启用 RTL 模式 ",-1)])]),_:1}),s(o(d),{onClick:u},{default:a(()=>[...i[1]||(i[1]=[t(" 禁用 RTL 模式 ",-1)])]),_:1}),s(o(d),{onClick:e},{default:a(()=>[...i[2]||(i[2]=[t(" 打开通知 ",-1)])]),_:1})]))}}),U=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" @click="enableRtl"> 启用 RTL 模式 </Button>
    <Button @click="disableRtl"> 禁用 RTL 模式 </Button>
    <Button @click="openNotification"> 打开通知 </Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from '@hmfw/ant-design'

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
`,M={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},j=y({__name:"NotificationShowProgress",setup(k){function l(){p.success({message:"带进度条的通知",description:"此通知会在 5 秒后自动关闭，底部显示倒计时进度条。",duration:5,showProgress:!0})}function u(){p.info({message:"不带进度条的通知",description:"此通知 5 秒后关闭，但不显示进度条。",duration:5,showProgress:!1})}return(e,n)=>(m(),g("div",M,[s(o(d),{type:"primary",onClick:l},{default:a(()=>[...n[0]||(n[0]=[t(" 显示进度条 ",-1)])]),_:1}),s(o(d),{onClick:u},{default:a(()=>[...n[1]||(n[1]=[t(" 不显示进度条 ",-1)])]),_:1})]))}}),Q=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" @click="openWithProgress"> 显示进度条 </Button>
    <Button @click="openWithoutProgress"> 不显示进度条 </Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from '@hmfw/ant-design'

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
`,J={class:"markdown-body"},cn={__name:"notification",setup(k,{expose:l}){return l({frontmatter:{}}),(e,n)=>{const i=N("DemoBlock");return m(),g("div",J,[n[0]||(n[0]=x('<h1 id="notification-通知提醒框" tabindex="-1">Notification 通知提醒框</h1><p>全局展示通知提醒信息。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><ul><li>在系统四个角显示通知提醒信息</li><li>系统主动推送的消息，内容较为复杂时使用</li><li>较为复杂的通知内容</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="基础用法" tabindex="-1">基础用法</h3><p>最简单的用法，4.5 秒后自动关闭。通知提醒框左侧有图标，<code>message</code> 作为通知提醒标题，<code>description</code> 作为通知提醒内容。</p>',7)),s(i,{title:"基础用法",source:o(S)},{default:a(()=>[s(B)]),_:1},8,["source"]),n[1]||(n[1]=c("h3",{id:"自动关闭的延时",tabindex:"-1"},"自动关闭的延时",-1)),n[2]||(n[2]=c("p",null,[t("自定义通知框自动关闭的延时，默认 "),c("code",null,"4.5s"),t("，取消自动关闭只要将该值设为 "),c("code",null,"0"),t(" 即可。")],-1)),s(i,{title:"自动关闭的延时",source:o(A)},{default:a(()=>[s(D)]),_:1},8,["source"]),n[3]||(n[3]=c("h3",{id:"位置",tabindex:"-1"},"位置",-1)),n[4]||(n[4]=c("p",null,"通知从右上角、右下角、左下角、左上角、顶部居中、底部居中弹出。",-1)),s(i,{title:"位置",source:o(z)},{default:a(()=>[s(F)]),_:1},8,["source"]),n[5]||(n[5]=c("h3",{id:"更新消息内容和全局配置",tabindex:"-1"},"更新消息内容和全局配置",-1)),n[6]||(n[6]=c("p",null,[t("可以通过唯一的 "),c("code",null,"key"),t(" 来更新内容。也可以通过 "),c("code",null,"notification.config()"),t(" 设置全局配置。")],-1)),s(i,{title:"更新消息内容",source:o(V)},{default:a(()=>[s(_)]),_:1},8,["source"]),n[7]||(n[7]=c("h3",{id:"显示进度条",tabindex:"-1"},"显示进度条",-1)),n[8]||(n[8]=c("p",null,[t("通过 "),c("code",null,"showProgress"),t(" 属性，可以在通知底部显示倒计时进度条，让用户直观地看到通知将在何时自动关闭。")],-1)),s(i,{title:"显示进度条",source:o(Q)},{default:a(()=>[s(j)]),_:1},8,["source"]),n[9]||(n[9]=c("h3",{id:"自定义关闭图标",tabindex:"-1"},"自定义关闭图标",-1)),n[10]||(n[10]=c("p",null,[t("可以通过 "),c("code",null,"closeIcon"),t(" 属性自定义单个通知的关闭图标，也可以通过 "),c("code",null,"notification.config({ closeIcon })"),t(" 设置全局关闭图标。单个通知的 "),c("code",null,"closeIcon"),t(" 会覆盖全局配置。")],-1)),s(i,{title:"自定义关闭图标",source:o(T)},{default:a(()=>[s(q)]),_:1},8,["source"]),n[11]||(n[11]=c("h3",{id:"rtl-模式",tabindex:"-1"},"RTL 模式",-1)),n[12]||(n[12]=c("p",null,[t("通过 "),c("code",null,"notification.config({ rtl: true })"),t(" 开启 RTL（从右到左）布局模式，适用于阿拉伯语、希伯来语等从右到左阅读的语言。RTL 模式会自动调整图标和关闭按钮的位置。")],-1)),s(i,{title:"RTL 模式",source:o(U)},{default:a(()=>[s(O)]),_:1},8,["source"]),n[13]||(n[13]=c("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[14]||(n[14]=c("p",null,[t("通过 "),c("code",null,"classNames"),t(" / "),c("code",null,"styles"),t(" 调用参数对 notice、icon、message、description、btn、close 等子元素做细粒度样式控制。")],-1)),s(i,{title:"语义化 className 与 style",source:o(L)},{default:a(()=>[s(P)]),_:1},8,["source"]),n[15]||(n[15]=x(`<h2 id="api" tabindex="-1">API</h2><p>组件提供了一些静态方法，使用方式和参数如下：</p><h3 id="静态方法" tabindex="-1">静态方法</h3><ul><li><code>notification.success(config)</code></li><li><code>notification.error(config)</code></li><li><code>notification.info(config)</code></li><li><code>notification.warning(config)</code></li><li><code>notification.open(config)</code></li><li><code>notification.destroy(key?)</code></li><li><code>notification.config(options)</code></li></ul><h3 id="config-参数" tabindex="-1">config 参数</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>通知提醒标题，必选</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>description</td><td>通知提醒内容，可选</td><td><code>string | number | VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>duration</td><td>自动关闭的延时，单位秒。设为 0 时不自动关闭</td><td><code>number</code></td><td><code>4.5</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>&#39;topLeft&#39; | &#39;topRight&#39; | &#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;top&#39; | &#39;bottom&#39;</code></td><td><code>&#39;topRight&#39;</code></td></tr><tr><td>key</td><td>当前通知唯一标志，相同 key 会更新已有通知</td><td><code>string</code></td><td>-</td></tr><tr><td>icon</td><td>自定义图标</td><td><code>VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>VNode | () =&gt; VNode</code></td><td><code>&lt;CloseOutlined /&gt;</code></td></tr><tr><td>btn</td><td>自定义按钮</td><td><code>VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>onClick</td><td>点击通知时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>onClose</td><td>关闭时触发的回调函数</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>style</td><td>自定义内联样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义 CSS class</td><td><code>string</code></td><td>-</td></tr><tr><td>pauseOnHover</td><td>鼠标悬停时暂停自动关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showProgress</td><td>显示倒计时进度条</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>role</td><td>可访问性角色属性</td><td><code>&#39;alert&#39; | &#39;status&#39;</code></td><td><code>&#39;alert&#39;</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>NotificationClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>NotificationStyles</code></td><td>-</td></tr></tbody></table><h3 id="全局配置方法" tabindex="-1">全局配置方法</h3><p><code>notification.config(options)</code></p><p>当你使用 <code>notification.config()</code> 时，可以对所有弹出的通知进行全局配置。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>top</td><td>消息从顶部弹出时，距离顶部的位置，单位像素</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>bottom</td><td>消息从底部弹出时，距离底部的位置，单位像素</td><td><code>number</code></td><td><code>24</code></td></tr><tr><td>duration</td><td>默认自动关闭延时，单位秒</td><td><code>number</code></td><td><code>4.5</code></td></tr><tr><td>placement</td><td>弹出位置</td><td><code>NotificationPlacement</code></td><td><code>&#39;topRight&#39;</code></td></tr><tr><td>maxCount</td><td>最大显示数，超过限制时，最早的消息会被自动关闭</td><td><code>number</code></td><td>-</td></tr><tr><td>getContainer</td><td>配置渲染节点的输出位置</td><td><code>() =&gt; HTMLElement</code></td><td><code>() =&gt; document.body</code></td></tr><tr><td>pauseOnHover</td><td>鼠标悬停时暂停自动关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showProgress</td><td>全局显示倒计时进度条</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>VNode | () =&gt; VNode</code></td><td>-</td></tr><tr><td>rtl</td><td>是否开启 RTL 模式</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="destroy-方法" tabindex="-1">destroy 方法</h3><p><code>notification.destroy(key?)</code> - 关闭通知</p><ul><li>当传入 <code>key</code> 时，关闭对应 key 的通知</li><li>不传参数时，关闭所有通知</li></ul><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过调用参数中的 <code>classNames</code> 和 <code>styles</code> 可以对通知的各个子节点应用自定义样式，支持细粒度控制。由于 Notification 是命令式 API，<code>classNames</code> / <code>styles</code> 通过 <code>notification.info(...)</code> 等方法的配置对象传入。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">NotificationClassNames</span> <span class="token punctuation">{</span>
  notice<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单条通知根容器</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 左侧图标容器</span>
  message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题文本</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 描述文本</span>
  btn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 自定义按钮容器</span>
  close<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 关闭按钮</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">NotificationStyles</span> <span class="token punctuation">{</span>
  notice<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  icon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  message<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  description<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  btn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  close<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-notification-notice<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.notice / styles.notice 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-notification-notice-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-notification-notice-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-notification-notice-message-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-notification-notice-message<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.message / styles.message 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-notification-notice-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.description / styles.description 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-notification-notice-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.btn / styles.btn 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-notification-notice-close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.close / styles.close 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过配置对象的 <code>classNames</code> 字段应用自定义 CSS 类（类名需定义在全局或带 <code>:deep()</code> 的作用域样式中）：</p><pre class="language-ts"><code class="language-ts">notification<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">&#39;系统更新&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;新版本已发布，建议尽快升级。&#39;</span><span class="token punctuation">,</span>
  classNames<span class="token operator">:</span> <span class="token punctuation">{</span>
    notice<span class="token operator">:</span> <span class="token string">&#39;my-notice&#39;</span><span class="token punctuation">,</span>
    message<span class="token operator">:</span> <span class="token string">&#39;my-message&#39;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;my-icon&#39;</span><span class="token punctuation">,</span>
    close<span class="token operator">:</span> <span class="token string">&#39;my-close&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><pre class="language-css"><code class="language-css"><span class="token comment">/* 在全局样式或 :deep() 作用域中定义 */</span>
<span class="token selector">.my-notice</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-message</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-icon</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过配置对象的 <code>styles</code> 字段直接传入内联样式对象：</p><pre class="language-ts"><code class="language-ts">notification<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token string">&#39;操作失败&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;请求超时，请检查网络后重试。&#39;</span><span class="token punctuation">,</span>
  styles<span class="token operator">:</span> <span class="token punctuation">{</span>
    notice<span class="token operator">:</span> <span class="token punctuation">{</span> borderRadius<span class="token operator">:</span> <span class="token string">&#39;12px&#39;</span><span class="token punctuation">,</span> borderLeft<span class="token operator">:</span> <span class="token string">&#39;4px solid #ff4d4f&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    message<span class="token operator">:</span> <span class="token punctuation">{</span> fontSize<span class="token operator">:</span> <span class="token string">&#39;17px&#39;</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token string">&#39;#cf1322&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">&#39;#a8071a&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>Notification 为命令式 API，<code>classNames</code> / <code>styles</code> 通过调用方法的配置对象传入，而非组件 props</li><li><code>classNames.notice</code> / <code>styles.notice</code> 会与组件内置的状态类名（如 <code>.hmfw-notification-notice-success</code>、<code>.hmfw-notification-notice-leaving</code>）及配置项 <code>className</code> / <code>style</code> 合并</li><li>通知渲染在 <code>document.body</code> 下，若使用 <code>&lt;style scoped&gt;</code> 定义类名，需配合 <code>:deep()</code> 选择器或改用全局样式</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-elevated</code></td><td>通知背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态图标颜色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-fill-quaternary</code></td><td>关闭按钮 hover 背景色</td><td><code>rgba(0,0,0,0.02)</code></td></tr><tr><td><code>--hmfw-color-info</code></td><td>信息状态图标颜色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>进度条颜色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-success</code></td><td>成功状态图标颜色</td><td><code>#52c41a</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>标题文字颜色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>描述文字 / 关闭 hover 颜色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-text-tertiary</code></td><td>关闭图标颜色</td><td><code>rgba(0,0,0,0.45)</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态图标颜色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>通知圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>关闭按钮圆角</td><td><code>4px</code></td></tr><tr><td><code>--hmfw-box-shadow-secondary</code></td><td>通知阴影</td><td><code>0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)</code></td></tr><tr><td><code>--hmfw-z-index-popup</code></td><td>通知层级</td><td><code>1010</code></td></tr></tbody></table>`,30))])}}};export{cn as default};
