import{B}from"./Button-CgFQ9v8N.js";import{S as N}from"./Space-Q7SAsP7p.js";import{o as f,n as i,m as l,N as E,f as _,p as x,A as v,i as w,R as m,K as c,h as r,J as R,E as k,k as C,H as O,l as q}from"./index-DJdGgqDu.js";import{c as T}from"./cls-S9IiI6wd.js";import{C as M}from"./CloseOutlined-IFElrYRj.js";import{I}from"./Icon-B3Sy0DYw.js";import{C as j}from"./CheckOutlined-CUmF_27O.js";import"./LoadingOutlined-D4bpgc9j.js";const L=f({name:"ProgressIcon",props:{prefixCls:{type:String,required:!0},percent:{type:Number,required:!0}},setup(e,{slots:d}){return()=>{var $;const n=`${e.prefixCls}-item-progress-icon`,s=`${n}-circle`,t=14,a=`${2*Math.PI*t*e.percent/100} 9999`;return i("span",{class:n},[i("svg",{class:`${n}-svg`,viewBox:"0 0 100 100",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":e.percent},[i("title",null,[l("Progress")]),i("circle",{class:`${s} ${s}-rail`,cx:"50",cy:"50",r:t},null),i("circle",{class:`${s} ${s}-ptg`,cx:"50",cy:"50",r:t,"stroke-dasharray":a,transform:"rotate(-90 50 50)"},null)]),($=d.default)==null?void 0:$.call(d)])}}}),W=f({name:"PanelArrow",props:{prefixCls:{type:String,required:!0}},setup(e){return()=>i("svg",{class:`${e.prefixCls}-panel-arrow`,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},[i("title",null,[l("Arrow")]),i("path",{d:"M 0 0 L 100 50 L 0 100"},null)])}}),h=f({name:"Steps",props:{current:{type:Number,default:0},initial:{type:Number,default:0},items:{type:Array,default:()=>[]},direction:{type:String},orientation:{type:String},size:{type:String,default:"default"},status:{type:String,default:"process"},type:{type:String,default:"default"},labelPlacement:{type:String},titlePlacement:{type:String},progressDot:{type:[Boolean,Function]},variant:{type:String,default:"filled"},percent:Number,responsive:{type:Boolean,default:!0},ellipsis:Boolean,offset:{type:Number,default:0},iconRender:Function},emits:["change"],setup(e,{emit:d}){const n=E("steps"),s=_(()=>e.type&&e.type!=="default"?e.type:e.progressDot?"dot":e.type),t=_(()=>s.value==="dot"||s.value==="inline"),a=_(()=>s.value==="inline"),$=_(()=>{const p=e.orientation||e.direction;return s.value==="panel"?"horizontal":p==="vertical"?"vertical":"horizontal"}),z=_(()=>t.value||$.value==="vertical"?$.value==="vertical"?"horizontal":"vertical":e.type==="navigation"?"horizontal":e.titlePlacement||e.labelPlacement||"horizontal"),P=_(()=>a.value?void 0:e.percent),F=(p,o)=>{if(o.status)return o.status;const u=p+e.initial;return u<e.current?"finish":u===e.current?e.status:"wait"},V=(p,o,u)=>{const S=`${n}-item-icon`;let b=null;if(t.value||u.icon)b=u.icon||x("span",{class:`${n}-icon-dot`});else switch(o){case"finish":b=x(I,{component:j,class:`${S}-finish`});break;case"error":b=x(I,{component:M,class:`${S}-error`});break;default:{const g=x("span",{class:`${S}-number`},p+e.initial+1);o==="process"&&P.value!==void 0?b=x(L,{prefixCls:n,percent:P.value},{default:()=>g}):b=g}}let y=b;if(e.iconRender){const g={index:p,active:p+e.initial===e.current,item:{...u,status:o}};y=e.iconRender(y,g)}else if(typeof e.progressDot=="function"){const g={index:p,active:p+e.initial===e.current,item:{...u,status:o}};y=e.progressDot(y,g)}return y},D=(p,o,u)=>{if(o.disabled)return;o.onClick&&o.onClick(u);const S=p+e.initial;S!==e.current&&d("change",S)};return()=>{const p=e.items??[];return i("div",{class:T(n,`${n}-${$.value}`,`${n}-${e.variant}`,{[`${n}-${e.size}`]:e.size!=="default",[`${n}-label-${z.value}`]:z.value!=="horizontal",[`${n}-dot`]:t.value,[`${n}-navigation`]:e.type==="navigation",[`${n}-inline`]:a.value,[`${n}-panel`]:s.value==="panel",[`${n}-with-progress`]:P.value!==void 0,[`${n}-ellipsis`]:e.ellipsis}),role:"list","aria-label":"步骤条"},[p.map((o,u)=>{const S=F(u,o),b=V(u,S,o),y=!o.disabled,g=o.content||o.description;return i("div",{key:u,class:T(`${n}-item`,`${n}-item-${S}`,{[`${n}-item-disabled`]:o.disabled,[`${n}-item-active`]:u+e.initial===e.current}),role:"listitem","aria-current":u+e.initial===e.current?"step":void 0,"aria-disabled":o.disabled||void 0,onClick:A=>y&&D(u,o,A)},[i("div",{class:`${n}-item-container`},[i("div",{class:`${n}-item-tail`},null),i("div",{class:`${n}-item-icon`},[b]),i("div",{class:`${n}-item-content`},[i("div",{class:`${n}-item-title`},[o.title,o.subTitle&&i("span",{class:`${n}-item-subtitle`},[o.subTitle])]),g&&i("div",{class:`${n}-item-description`},[g])])]),s.value==="panel"&&i(W,{prefixCls:n},null)])})])}}}),H=f({__name:"StepsBasic",setup(e){const d=k(0),n=[{title:"第一步",description:"填写基本信息"},{title:"第二步",description:"确认订单信息"},{title:"第三步",description:"完成支付"}];return(s,t)=>(v(),w(c(N),{direction:"vertical",style:{width:"100%"}},{default:m(()=>[i(c(h),{current:d.value,items:n},null,8,["current"]),i(c(N),null,{default:m(()=>[i(c(B),{disabled:d.value===0,onClick:t[0]||(t[0]=a=>d.value--)},{default:m(()=>[...t[2]||(t[2]=[l(" 上一步 ",-1)])]),_:1},8,["disabled"]),i(c(B),{type:"primary",disabled:d.value===n.length-1,onClick:t[1]||(t[1]=a=>d.value++)},{default:m(()=>[...t[3]||(t[3]=[l(" 下一步 ",-1)])]),_:1},8,["disabled"])]),_:1}),r("p",null,"当前步骤："+R(d.value+1),1)]),_:1}))}}),J=`<template>
  <Space direction="vertical" style="width: 100%">
    <Steps :current="current" :items="items" />
    <Space>
      <Button :disabled="current === 0" @click="current--"> 上一步 </Button>
      <Button type="primary" :disabled="current === items.length - 1" @click="current++"> 下一步 </Button>
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
`,K=f({__name:"StepsDot",setup(e){const d=[{title:"已完成",description:"2024-01-01"},{title:"进行中",description:"2024-01-02"},{title:"待处理",description:"2024-01-03"},{title:"待处理",description:"2024-01-04"}];return(n,s)=>(v(),w(c(h),{"progress-dot":"",current:1,items:d}))}}),G=`<template>
  <Steps progress-dot :current="1" :items="items" />
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
`,Q=f({__name:"StepsError",setup(e){const d=[{title:"已完成",description:"操作成功"},{title:"处理中",description:"操作失败",status:"error"},{title:"待处理",description:"等待处理"}];return(n,s)=>(v(),w(c(h),{current:1,status:"error",items:d}))}}),U=`<template>
  <Steps :current="1" status="error" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: '已完成', description: '操作成功' },
  { title: '处理中', description: '操作失败', status: 'error' },
  { title: '待处理', description: '等待处理' },
]
<\/script>
`,X={style:{padding:"20px"}},Y=f({__name:"StepsInline",setup(e){const d=[{title:"Step 1",content:"First step"},{title:"Step 2",content:"Second step"},{title:"Step 3",content:"Third step"},{title:"Step 4",content:"Fourth step"}];return(n,s)=>(v(),C("div",X,[i(c(h),{items:d,type:"inline",current:1})]))}}),Z=`<template>
  <div style="padding: 20px">
    <Steps :items="items" type="inline" :current="1" />
  </div>
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: 'Step 1', content: 'First step' },
  { title: 'Step 2', content: 'Second step' },
  { title: 'Step 3', content: 'Third step' },
  { title: 'Step 4', content: 'Fourth step' },
]
<\/script>
`,tt={style:{padding:"20px"}},et=f({__name:"StepsNavigation",setup(e){const d=k(1),n=[{title:"Step 1",content:"First step"},{title:"Step 2",content:"Second step"},{title:"Step 3",content:"Third step"}],s=t=>{d.value=t};return(t,a)=>(v(),C("div",tt,[i(c(h),{items:n,type:"navigation",current:d.value,onChange:s},null,8,["current"])]))}}),nt=`<template>
  <div style="padding: 20px">
    <Steps :items="items" type="navigation" :current="current" @change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Steps } from 'ant-design-hmfw'

const current = ref(1)

const items = [
  { title: 'Step 1', content: 'First step' },
  { title: 'Step 2', content: 'Second step' },
  { title: 'Step 3', content: 'Third step' },
]

const onChange = (value: number) => {
  current.value = value
}
<\/script>
`,it={style:{padding:"20px"}},rt=f({__name:"StepsPanel",setup(e){const d=k(1),n=[{title:"Step 1",content:"First step description"},{title:"Step 2",content:"Second step description"},{title:"Step 3",content:"Third step description"}],s=t=>{d.value=t};return(t,a)=>(v(),C("div",it,[i(c(h),{items:n,type:"panel",current:d.value,onChange:s},null,8,["current"])]))}}),dt=`<template>
  <div style="padding: 20px">
    <Steps :items="items" type="panel" :current="current" @change="onChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Steps } from 'ant-design-hmfw'

const current = ref(1)

const items = [
  { title: 'Step 1', content: 'First step description' },
  { title: 'Step 2', content: 'Second step description' },
  { title: 'Step 3', content: 'Third step description' },
]

const onChange = (value: number) => {
  current.value = value
}
<\/script>
`,st={style:{padding:"20px"}},ot=f({__name:"StepsProgress",setup(e){const d=[{title:"Finished",content:"This is a description"},{title:"In Progress",content:"This is a description"},{title:"Waiting",content:"This is a description"}];return(n,s)=>(v(),C("div",st,[i(c(h),{items:d,current:1,percent:60})]))}}),lt=`<template>
  <div style="padding: 20px">
    <Steps :items="items" :current="1" :percent="60" />
  </div>
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: 'Finished', content: 'This is a description' },
  { title: 'In Progress', content: 'This is a description' },
  { title: 'Waiting', content: 'This is a description' },
]
<\/script>
`,ct=f({__name:"StepsSmall",setup(e){const d=[{title:"第一步"},{title:"第二步"},{title:"第三步"}];return(n,s)=>(v(),w(c(h),{size:"small",current:1,items:d}))}}),at=`<template>
  <Steps size="small" :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [{ title: '第一步' }, { title: '第二步' }, { title: '第三步' }]
<\/script>
`,ut=f({__name:"StepsVertical",setup(e){const d=[{title:"已完成",description:"这是一段描述文字。"},{title:"进行中",description:"这是一段描述文字。"},{title:"待处理",description:"这是一段描述文字。"}];return(n,s)=>(v(),w(c(h),{direction:"vertical",current:1,items:d}))}}),pt=`<template>
  <Steps direction="vertical" :current="1" :items="items" />
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
`,mt={class:"markdown-body"},_t={__name:"steps",setup(e,{expose:d}){return d({frontmatter:{}}),(s,t)=>{const a=O("DemoBlock");return v(),C("div",mt,[t[0]||(t[0]=r("h1",{id:"steps-步骤条",tabindex:"-1"},"Steps 步骤条",-1)),t[1]||(t[1]=r("p",null,"引导用户按照流程完成任务的导航条。",-1)),t[2]||(t[2]=r("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=r("ul",null,[r("li",null,"当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务"),r("li",null,"需要展示当前操作的进度时")],-1)),t[4]||(t[4]=r("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=r("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=r("p",null,"简单的步骤条。",-1)),i(a,{title:"基础用法",source:c(J)},{default:m(()=>[i(H)]),_:1},8,["source"]),t[7]||(t[7]=r("h3",{id:"垂直步骤条",tabindex:"-1"},"垂直步骤条",-1)),t[8]||(t[8]=r("p",null,[l("通过 "),r("code",null,'direction="vertical"'),l(" 或 "),r("code",null,'orientation="vertical"'),l(" 设置垂直方向步骤条。")],-1)),i(a,{title:"垂直步骤条",source:c(pt)},{default:m(()=>[i(ut)]),_:1},8,["source"]),t[9]||(t[9]=r("h3",{id:"点状步骤条",tabindex:"-1"},"点状步骤条",-1)),t[10]||(t[10]=r("p",null,[l("通过 "),r("code",null,'type="dot"'),l(" 或 "),r("code",null,"progress-dot"),l(" 属性设置点状步骤条。")],-1)),i(a,{title:"点状步骤条",source:c(G)},{default:m(()=>[i(K)]),_:1},8,["source"]),t[11]||(t[11]=r("h3",{id:"错误状态",tabindex:"-1"},"错误状态",-1)),t[12]||(t[12]=r("p",null,[l("通过 "),r("code",null,'status="error"'),l(" 设置错误状态。")],-1)),i(a,{title:"错误状态",source:c(U)},{default:m(()=>[i(Q)]),_:1},8,["source"]),t[13]||(t[13]=r("h3",{id:"小型步骤条",tabindex:"-1"},"小型步骤条",-1)),t[14]||(t[14]=r("p",null,[l("通过 "),r("code",null,'size="small"'),l(" 设置小型步骤条。")],-1)),i(a,{title:"小型步骤条",source:c(at)},{default:m(()=>[i(ct)]),_:1},8,["source"]),t[15]||(t[15]=r("h3",{id:"导航型步骤条",tabindex:"-1"},"导航型步骤条",-1)),t[16]||(t[16]=r("p",null,[l("通过 "),r("code",null,'type="navigation"'),l(" 设置导航型步骤条。")],-1)),i(a,{title:"导航型步骤条",source:c(nt)},{default:m(()=>[i(et)]),_:1},8,["source"]),t[17]||(t[17]=r("h3",{id:"面板型步骤条",tabindex:"-1"},"面板型步骤条",-1)),t[18]||(t[18]=r("p",null,[l("通过 "),r("code",null,'type="panel"'),l(" 设置面板型步骤条。")],-1)),i(a,{title:"面板型步骤条",source:c(dt)},{default:m(()=>[i(rt)]),_:1},8,["source"]),t[19]||(t[19]=r("h3",{id:"进度百分比",tabindex:"-1"},"进度百分比",-1)),t[20]||(t[20]=r("p",null,[l("通过 "),r("code",null,"percent"),l(" 属性显示当前步骤的进度百分比。")],-1)),i(a,{title:"进度百分比",source:c(lt)},{default:m(()=>[i(ot)]),_:1},8,["source"]),t[21]||(t[21]=r("h3",{id:"内联型步骤条",tabindex:"-1"},"内联型步骤条",-1)),t[22]||(t[22]=r("p",null,[l("通过 "),r("code",null,'type="inline"'),l(" 设置内联型步骤条。")],-1)),i(a,{title:"内联型步骤条",source:c(Z)},{default:m(()=>[i(Y)]),_:1},8,["source"]),t[23]||(t[23]=q('<h2 id="api" tabindex="-1">API</h2><h3 id="steps-props" tabindex="-1">Steps Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>指定当前步骤，从 0 开始记数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>initial</td><td>起始序号，从 0 开始记数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>items</td><td>配置选项</td><td><code>StepItem[]</code></td><td><code>[]</code></td></tr><tr><td>direction</td><td>指定步骤条方向（已废弃，请使用 orientation）</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>orientation</td><td>指定步骤条方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>size</td><td>指定大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>status</td><td>指定当前步骤的状态</td><td><code>&#39;wait&#39; | &#39;process&#39; | &#39;finish&#39; | &#39;error&#39;</code></td><td><code>&#39;process&#39;</code></td></tr><tr><td>type</td><td>步骤条类型</td><td><code>&#39;default&#39; | &#39;navigation&#39; | &#39;inline&#39; | &#39;panel&#39; | &#39;dot&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>progressDot</td><td>点状步骤条（已废弃，请使用 type=“dot”）</td><td><code>boolean | function</code></td><td><code>false</code></td></tr><tr><td>labelPlacement</td><td>指定标签放置位置（已废弃，请使用 titlePlacement）</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>titlePlacement</td><td>指定标签放置位置</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>variant</td><td>步骤条样式变体</td><td><code>&#39;filled&#39; | &#39;outlined&#39;</code></td><td><code>&#39;filled&#39;</code></td></tr><tr><td>percent</td><td>当前步骤的进度百分比（0-100）</td><td><code>number</code></td><td>-</td></tr><tr><td>responsive</td><td>是否响应式</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>ellipsis</td><td>是否省略过长的标题和描述</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>offset</td><td>内联型步骤条的偏移量</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>iconRender</td><td>自定义图标渲染函数</td><td><code>(node, info) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="steps-events" tabindex="-1">Steps Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>点击切换步骤时触发</td><td><code>(current: number) =&gt; void</code></td></tr></tbody></table><h3 id="stepitem" tabindex="-1">StepItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>description</td><td>步骤的详情描述（已废弃，请使用 content）</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>content</td><td>步骤的详情描述</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>subTitle</td><td>子标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>status</td><td>指定状态</td><td><code>&#39;wait&#39; | &#39;process&#39; | &#39;finish&#39; | &#39;error&#39;</code></td><td>-</td></tr><tr><td>icon</td><td>步骤图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用点击</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>onClick</td><td>点击步骤时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr></tbody></table>',7))])}}};export{_t as default};
