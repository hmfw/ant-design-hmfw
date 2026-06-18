import{S as l}from"./Spin-CRAfyn2b.js";import{o as c,A as u,i as S,K as i,R as p,h as t,E as g,k as f,n as e,m as s,x,y as b,J as y,H as _,l as B}from"./index-DJdGgqDu.js";import{B as v}from"./Button-CgFQ9v8N.js";import"./cls-S9IiI6wd.js";import"./Icon-B3Sy0DYw.js";import"./LoadingOutlined-D4bpgc9j.js";const k=c({__name:"SpinBasic",setup(m){return(o,r)=>(u(),S(i(l)))}}),z=`<template>
  <Spin />
</template>

<script setup lang="ts">
import { Spin } from 'ant-design-hmfw'
<\/script>
`,$=c({__name:"SpinDelay",setup(m){const o=g(!0);return(r,d)=>(u(),S(i(l),{spinning:o.value,delay:500},{default:p(()=>[...d[0]||(d[0]=[t("div",{style:{padding:"24px",background:"#f0f0f0","border-radius":"4px"}},[t("p",null,"延迟 500ms 后才显示加载状态")],-1)])]),_:1},8,["spinning"]))}}),w=`<template>
  <Spin :spinning="loading" :delay="500">
    <div style="padding: 24px; background: #f0f0f0; border-radius: 4px">
      <p>延迟 500ms 后才显示加载状态</p>
    </div>
  </Spin>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin } from 'ant-design-hmfw'

const loading = ref(true)
<\/script>
`,h=c({__name:"SpinNested",setup(m){const o=g(!0);return(r,d)=>(u(),f("div",null,[e(i(v),{onClick:d[0]||(d[0]=n=>o.value=!o.value)},{default:p(()=>[...d[1]||(d[1]=[s("切换加载状态",-1)])]),_:1}),e(i(l),{spinning:o.value,tip:"加载中..."},{default:p(()=>[...d[2]||(d[2]=[t("div",{style:{padding:"24px",background:"#f0f0f0","margin-top":"16px","border-radius":"4px"}},[t("p",null,"这是被遮罩的内容区域"),t("p",null,"加载时会显示遮罩层")],-1)])]),_:1},8,["spinning"])]))}}),I=`<template>
  <div>
    <Button @click="loading = !loading">切换加载状态</Button>
    <Spin :spinning="loading" tip="加载中...">
      <div style="padding: 24px; background: #f0f0f0; margin-top: 16px; border-radius: 4px">
        <p>这是被遮罩的内容区域</p>
        <p>加载时会显示遮罩层</p>
      </div>
    </Spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin, Button } from 'ant-design-hmfw'

const loading = ref(true)
<\/script>
`,N={style:{display:"flex",gap:"32px","align-items":"center"}},A=c({__name:"SpinPercent",setup(m){const o=g(0),r=g(!0);let d;x(()=>{d=setInterval(()=>{o.value=o.value>=100?0:o.value+10},500)}),b(()=>{d&&clearInterval(d)});function n(){r.value=!r.value}return(a,U)=>(u(),f("div",N,[e(i(l),{percent:o.value},null,8,["percent"]),e(i(l),{percent:o.value,size:"large"},null,8,["percent"]),e(i(l),{percent:"auto",spinning:r.value},null,8,["spinning"]),e(i(v),{onClick:n},{default:p(()=>[s(y(r.value?"停止 auto":"开始 auto"),1)]),_:1})]))}}),C=`<template>
  <div style="display: flex; gap: 32px; align-items: center">
    <Spin :percent="percent" />
    <Spin :percent="percent" size="large" />
    <Spin percent="auto" :spinning="autoSpinning" />
    <Button @click="toggleAuto">
      {{ autoSpinning ? '停止 auto' : '开始 auto' }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Spin, Button } from 'ant-design-hmfw'

// 受控 percent：手动在 0~100 之间循环递增，演示环形进度指示器。
const percent = ref(0)
const autoSpinning = ref(true)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    percent.value = percent.value >= 100 ? 0 : percent.value + 10
  }, 500)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

function toggleAuto() {
  autoSpinning.value = !autoSpinning.value
}
<\/script>
`,D={style:{display:"flex",gap:"24px","align-items":"center"}},P=c({__name:"SpinSize",setup(m){return(o,r)=>(u(),f("div",D,[e(i(l),{size:"small"}),e(i(l)),e(i(l),{size:"large"})]))}}),V=`<template>
  <div style="display: flex; gap: 24px; align-items: center">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>
</template>

<script setup lang="ts">
import { Spin } from 'ant-design-hmfw'
<\/script>
`,M={class:"markdown-body"},j={__name:"spin",setup(m,{expose:o}){return o({frontmatter:{}}),(d,n)=>{const a=_("DemoBlock");return u(),f("div",M,[n[0]||(n[0]=t("h1",{id:"spin-加载中",tabindex:"-1"},"Spin 加载中",-1)),n[1]||(n[1]=t("p",null,"用于页面和区块的加载中状态。",-1)),n[2]||(n[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("ul",null,[t("li",null,"页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑")],-1)),n[4]||(n[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=t("p",null,"一个简单的 loading 状态。",-1)),e(a,{title:"基础用法",source:i(z)},{default:p(()=>[e(k)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"各种大小",tabindex:"-1"},"各种大小",-1)),n[8]||(n[8]=t("p",null,"小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。",-1)),e(a,{title:"各种大小",source:i(V)},{default:p(()=>[e(P)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"嵌套内容",tabindex:"-1"},"嵌套内容",-1)),n[10]||(n[10]=t("p",null,"可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。",-1)),e(a,{title:"嵌套内容",source:i(I)},{default:p(()=>[e(h)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"延迟加载",tabindex:"-1"},"延迟加载",-1)),n[12]||(n[12]=t("p",null,"延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。",-1)),e(a,{title:"延迟加载",source:i(w)},{default:p(()=>[e($)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"进度",tabindex:"-1"},"进度",-1)),n[14]||(n[14]=t("p",null,[s("通过 "),t("code",null,"percent"),s(" 展示环形进度指示器。传入 "),t("code",null,"number"),s(" 为受控进度，传入 "),t("code",null,"'auto'"),s(" 时在 "),t("code",null,"spinning"),s(" 期间自动模拟递增。")],-1)),e(a,{title:"进度",source:i(C)},{default:p(()=>[e(A)]),_:1},8,["source"]),n[15]||(n[15]=B('<h2 id="api" tabindex="-1">API</h2><h3 id="spin-props" tabindex="-1">Spin Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>spinning</td><td>是否为加载中状态</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>size</td><td>组件大小</td><td><code>&#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>tip</td><td>当作为包裹元素时，可以自定义描述文案</td><td><code>string</code></td><td>-</td></tr><tr><td>delay</td><td>延迟显示加载效果的时间（防止闪烁），单位：毫秒</td><td><code>number</code></td><td>-</td></tr><tr><td>percent</td><td>进度百分比；为 <code>&#39;auto&#39;</code> 时在 <code>spinning</code> 期间自动模拟递增</td><td><code>number | &#39;auto&#39;</code></td><td>-</td></tr></tbody></table><h3 id="spin-slots" tabindex="-1">Spin Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>被遮罩的内容</td></tr><tr><td>indicator</td><td>加载指示符（自定义指示器时，插槽参数含 <code>percent</code>）</td></tr></tbody></table>',5))])}}};export{j as default};
