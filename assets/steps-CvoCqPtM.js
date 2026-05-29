import{B as v}from"./Button-CNZPbvb9.js";import{S as h}from"./Space-CWm16sbO.js";import{k as m,I as x,j as i,w as f,e as S,M as u,G as o,i as c,d as r,E as B,z,B as k,g as w,h as C}from"./index-BNHhPN23.js";import{c as $}from"./cls-S9IiI6wd.js";import"./icons-DuMoCl7A.js";const b=m({name:"Steps",props:{current:{type:Number,default:0},direction:{type:String,default:"horizontal"},size:{type:String,default:"default"},status:{type:String,default:"process"},type:{type:String,default:"default"},labelPlacement:{type:String,default:"horizontal"},progressDot:Boolean,items:Array,initial:{type:Number,default:0}},emits:["change"],setup(n,{emit:s}){const e=x("steps"),p=(l,d)=>{if(d.status)return d.status;const a=l+n.initial;return a<n.current?"finish":a===n.current?n.status:"wait"},t=(l,d,a)=>a.icon?a.icon:n.progressDot?"•":d==="finish"?"✓":d==="error"?"✕":String(l+n.initial+1);return()=>{const l=n.items??[];return i("div",{class:$(e,`${e}-${n.direction}`,{[`${e}-${n.size}`]:n.size!=="default",[`${e}-label-${n.labelPlacement}`]:n.labelPlacement!=="horizontal",[`${e}-dot`]:n.progressDot,[`${e}-navigation`]:n.type==="navigation",[`${e}-inline`]:n.type==="inline"}),role:"list","aria-label":"步骤条"},[l.map((d,a)=>{const g=p(a,d),y=t(a,g,d),_=!d.disabled&&a!==n.current;return i("div",{key:a,class:$(`${e}-item`,`${e}-item-${g}`,{[`${e}-item-disabled`]:d.disabled,[`${e}-item-active`]:a+n.initial===n.current}),role:"listitem","aria-current":a+n.initial===n.current?"step":void 0,"aria-disabled":d.disabled||void 0,onClick:()=>_&&s("change",a+n.initial)},[i("div",{class:`${e}-item-container`},[i("div",{class:`${e}-item-tail`},null),i("div",{class:$(`${e}-item-icon`,{[`${e}-item-icon-${g}`]:!0})},[i("span",{class:`${e}-icon`},[y])]),i("div",{class:`${e}-item-content`},[i("div",{class:`${e}-item-title`},[d.title,d.subTitle&&i("span",{class:`${e}-item-subtitle`},[d.subTitle])]),d.description&&i("div",{class:`${e}-item-description`},[d.description])])])])})])}}}),D=m({__name:"StepsBasic",setup(n){const s=z(0),e=[{title:"第一步",description:"填写基本信息"},{title:"第二步",description:"确认订单信息"},{title:"第三步",description:"完成支付"}];return(p,t)=>(f(),S(o(h),{direction:"vertical",style:{width:"100%"}},{default:u(()=>[i(o(b),{current:s.value,items:e},null,8,["current"]),i(o(h),null,{default:u(()=>[i(o(v),{disabled:s.value===0,onClick:t[0]||(t[0]=l=>s.value--)},{default:u(()=>[...t[2]||(t[2]=[c("上一步",-1)])]),_:1},8,["disabled"]),i(o(v),{type:"primary",disabled:s.value===e.length-1,onClick:t[1]||(t[1]=l=>s.value++)},{default:u(()=>[...t[3]||(t[3]=[c("下一步",-1)])]),_:1},8,["disabled"])]),_:1}),r("p",null,"当前步骤："+B(s.value+1),1)]),_:1}))}}),P=`<template>
  <Space direction="vertical" style="width: 100%">
    <Steps :current="current" :items="items" />
    <Space>
      <Button :disabled="current === 0" @click="current--">上一步</Button>
      <Button type="primary" :disabled="current === items.length - 1" @click="current++">下一步</Button>
    </Space>
    <p>当前步骤：{{ current + 1 }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Steps, Button, Space } from 'ant-design-hmfw'

const current = ref(0)

const items = [
  { title: '第一步', description: '填写基本信息' },
  { title: '第二步', description: '确认订单信息' },
  { title: '第三步', description: '完成支付' },
]
<\/script>
`,I=m({__name:"StepsDot",setup(n){const s=[{title:"已完成",description:"2024-01-01"},{title:"进行中",description:"2024-01-02"},{title:"待处理",description:"2024-01-03"},{title:"待处理",description:"2024-01-04"}];return(e,p)=>(f(),S(o(b),{"progress-dot":"",current:1,items:s}))}}),N=`<template>
  <Steps
    progress-dot
    :current="1"
    :items="items"
  />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: '已完成', description: '2024-01-01' },
  { title: '进行中', description: '2024-01-02' },
  { title: '待处理', description: '2024-01-03' },
  { title: '待处理', description: '2024-01-04' },
]
<\/script>
`,V=m({__name:"StepsError",setup(n){const s=[{title:"已完成",description:"操作成功"},{title:"处理中",description:"操作失败",status:"error"},{title:"待处理",description:"等待处理"}];return(e,p)=>(f(),S(o(b),{current:1,status:"error",items:s}))}}),A=`<template>
  <Steps
    :current="1"
    status="error"
    :items="items"
  />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: '已完成', description: '操作成功' },
  { title: '处理中', description: '操作失败', status: 'error' },
  { title: '待处理', description: '等待处理' },
]
<\/script>
`,E=m({__name:"StepsSmall",setup(n){const s=[{title:"第一步"},{title:"第二步"},{title:"第三步"}];return(e,p)=>(f(),S(o(b),{size:"small",current:1,items:s}))}}),T=`<template>
  <Steps size="small" :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: '第一步' },
  { title: '第二步' },
  { title: '第三步' },
]
<\/script>
`,j=m({__name:"StepsVertical",setup(n){const s=[{title:"已完成",description:"这是一段描述文字。"},{title:"进行中",description:"这是一段描述文字。"},{title:"待处理",description:"这是一段描述文字。"}];return(e,p)=>(f(),S(o(b),{direction:"vertical",current:1,items:s}))}}),G=`<template>
  <Steps
    direction="vertical"
    :current="1"
    :items="items"
  />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  {
    title: '已完成',
    description: '这是一段描述文字。',
  },
  {
    title: '进行中',
    description: '这是一段描述文字。',
  },
  {
    title: '待处理',
    description: '这是一段描述文字。',
  },
]
<\/script>
`,M={class:"markdown-body"},L={__name:"steps",setup(n,{expose:s}){return s({frontmatter:{}}),(p,t)=>{const l=k("DemoBlock");return f(),w("div",M,[t[0]||(t[0]=r("h1",{id:"steps-",tabindex:"-1"},"Steps 步骤条",-1)),t[1]||(t[1]=r("p",null,"引导用户按照流程完成任务的导航条。",-1)),t[2]||(t[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=r("ul",null,[r("li",null,"当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务"),r("li",null,"需要展示当前操作的进度时")],-1)),t[4]||(t[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=r("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=r("p",null,"简单的步骤条。",-1)),i(l,{title:"基础用法",source:o(P)},{default:u(()=>[i(D)]),_:1},8,["source"]),t[7]||(t[7]=r("h3",{id:"-3",tabindex:"-1"},"垂直步骤条",-1)),t[8]||(t[8]=r("p",null,[c("通过 "),r("code",null,'direction="vertical"'),c(" 设置垂直方向步骤条。")],-1)),i(l,{title:"垂直步骤条",source:o(G)},{default:u(()=>[i(j)]),_:1},8,["source"]),t[9]||(t[9]=r("h3",{id:"-4",tabindex:"-1"},"点状步骤条",-1)),t[10]||(t[10]=r("p",null,[c("通过 "),r("code",null,"progress-dot"),c(" 属性设置点状步骤条。")],-1)),i(l,{title:"点状步骤条",source:o(N)},{default:u(()=>[i(I)]),_:1},8,["source"]),t[11]||(t[11]=r("h3",{id:"-5",tabindex:"-1"},"错误状态",-1)),t[12]||(t[12]=r("p",null,[c("通过 "),r("code",null,'status="error"'),c(" 设置错误状态。")],-1)),i(l,{title:"错误状态",source:o(A)},{default:u(()=>[i(V)]),_:1},8,["source"]),t[13]||(t[13]=r("h3",{id:"-6",tabindex:"-1"},"小型步骤条",-1)),t[14]||(t[14]=r("p",null,[c("通过 "),r("code",null,'size="small"'),c(" 设置小型步骤条。")],-1)),i(l,{title:"小型步骤条",source:o(T)},{default:u(()=>[i(E)]),_:1},8,["source"]),t[15]||(t[15]=C('<h2 id="api" tabindex="-1">API</h2><h3 id="steps-props" tabindex="-1">Steps Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>指定当前步骤，从 0 开始记数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>items</td><td>配置选项</td><td><code>StepItem[]</code></td><td><code>[]</code></td></tr><tr><td>direction</td><td>指定步骤条方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>size</td><td>指定大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>status</td><td>指定当前步骤的状态</td><td><code>&#39;wait&#39; | &#39;process&#39; | &#39;finish&#39; | &#39;error&#39;</code></td><td><code>&#39;process&#39;</code></td></tr><tr><td>progressDot</td><td>点状步骤条，可以自定义点的渲染</td><td><code>boolean | function</code></td><td><code>false</code></td></tr><tr><td>labelPlacement</td><td>指定标签放置位置</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr></tbody></table><h3 id="stepitem" tabindex="-1">StepItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>步骤的详情描述</td><td><code>string</code></td><td>-</td></tr><tr><td>subTitle</td><td>子标题</td><td><code>string</code></td><td>-</td></tr><tr><td>status</td><td>指定状态</td><td><code>&#39;wait&#39; | &#39;process&#39; | &#39;finish&#39; | &#39;error&#39;</code></td><td>-</td></tr><tr><td>icon</td><td>步骤图标</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用点击</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',5))])}}};export{L as default};
