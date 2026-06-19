import{B as K}from"./Button-Dr1TfEzc.js";import{S as X}from"./Space-BxpGTspH.js";import{o as k,n as e,m as c,N as nt,f as w,p as C,A as y,i as N,R as u,K as i,h as s,J as et,E as q,k as $,_ as st,H as at,l as ot}from"./index-Dxep-jrR.js";import{c as b}from"./cls-S9IiI6wd.js";import{C as it}from"./CloseOutlined-Cg7mwYr0.js";import{I as G}from"./Icon-DATzad6v.js";import{C as ct}from"./CheckOutlined-CWPL7Iin.js";import"./LoadingOutlined-CKq07YS5.js";const lt=k({name:"ProgressIcon",props:{prefixCls:{type:String,required:!0},percent:{type:Number,required:!0}},setup(n,{slots:o}){return()=>{var x;const a=`${n.prefixCls}-item-progress-icon`,l=`${a}-circle`,t=14,r=`${2*Math.PI*t*n.percent/100} 9999`;return e("span",{class:a},[e("svg",{class:`${a}-svg`,viewBox:"0 0 100 100",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":n.percent},[e("title",null,[c("Progress")]),e("circle",{class:`${l} ${l}-rail`,cx:"50",cy:"50",r:t},null),e("circle",{class:`${l} ${l}-ptg`,cx:"50",cy:"50",r:t,"stroke-dasharray":r,transform:"rotate(-90 50 50)"},null)]),(x=o.default)==null?void 0:x.call(o)])}}}),rt=k({name:"PanelArrow",props:{prefixCls:{type:String,required:!0}},setup(n){return()=>e("svg",{class:`${n.prefixCls}-panel-arrow`,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},[e("title",null,[c("Arrow")]),e("path",{d:"M 0 0 L 100 50 L 0 100"},null)])}}),m=k({name:"Steps",props:{current:{type:Number,default:0},initial:{type:Number,default:0},items:{type:Array,default:()=>[]},direction:{type:String},orientation:{type:String},size:{type:String,default:"default"},status:{type:String,default:"process"},type:{type:String,default:"default"},labelPlacement:{type:String},titlePlacement:{type:String},progressDot:{type:[Boolean,Function]},variant:{type:String,default:"filled"},percent:Number,responsive:{type:Boolean,default:!0},ellipsis:Boolean,offset:{type:Number,default:0},iconRender:Function,classNames:Object,styles:Object},emits:["change"],setup(n,{emit:o}){const a=nt("steps"),l=w(()=>n.type&&n.type!=="default"?n.type:n.progressDot?"dot":n.type),t=w(()=>l.value==="dot"||l.value==="inline"),r=w(()=>l.value==="inline"),x=w(()=>{const g=n.orientation||n.direction;return l.value==="panel"?"horizontal":g==="vertical"?"vertical":"horizontal"}),P=w(()=>t.value||x.value==="vertical"?x.value==="vertical"?"horizontal":"vertical":n.type==="navigation"?"horizontal":n.titlePlacement||n.labelPlacement||"horizontal"),_=w(()=>r.value?void 0:n.percent),Q=(g,d)=>{if(d.status)return d.status;const v=g+n.initial;return v<n.current?"finish":v===n.current?n.status:"wait"},U=(g,d,v)=>{const p=`${a}-item-icon`;let f=null;if(t.value||v.icon)f=v.icon||C("span",{class:`${a}-icon-dot`});else switch(d){case"finish":f=C(G,{component:ct,class:`${p}-finish`});break;case"error":f=C(G,{component:it,class:`${p}-error`});break;default:{const h=C("span",{class:`${p}-number`},g+n.initial+1);d==="process"&&_.value!==void 0?f=C(lt,{prefixCls:a,percent:_.value},{default:()=>h}):f=h}}let S=f;if(n.iconRender){const h={index:g,active:g+n.initial===n.current,item:{...v,status:d}};S=n.iconRender(S,h)}else if(typeof n.progressDot=="function"){const h={index:g,active:g+n.initial===n.current,item:{...v,status:d}};S=n.progressDot(S,h)}return S},Y=(g,d,v)=>{if(d.disabled)return;d.onClick&&d.onClick(v);const p=g+n.initial;p!==n.current&&o("change",p)};return()=>{var d,v;const g=n.items??[];return e("div",{class:b(a,`${a}-${x.value}`,`${a}-${n.variant}`,{[`${a}-${n.size}`]:n.size!=="default",[`${a}-label-${P.value}`]:P.value!=="horizontal",[`${a}-dot`]:t.value,[`${a}-navigation`]:n.type==="navigation",[`${a}-inline`]:r.value,[`${a}-panel`]:l.value==="panel",[`${a}-with-progress`]:_.value!==void 0,[`${a}-ellipsis`]:n.ellipsis},(d=n.classNames)==null?void 0:d.root),style:(v=n.styles)==null?void 0:v.root,role:"list","aria-label":"步骤条"},[g.map((p,f)=>{var B,I,T,D,E,A,F,V,R,W,O,j,M,L,H,J;const S=Q(f,p),h=U(f,S,p),Z=!p.disabled,z=p.content||p.description;return e("div",{key:f,class:b(`${a}-item`,`${a}-item-${S}`,{[`${a}-item-disabled`]:p.disabled,[`${a}-item-active`]:f+n.initial===n.current},(B=n.classNames)==null?void 0:B.item),style:(I=n.styles)==null?void 0:I.item,role:"listitem","aria-current":f+n.initial===n.current?"step":void 0,"aria-disabled":p.disabled||void 0,onClick:tt=>Z&&Y(f,p,tt)},[e("div",{class:b(`${a}-item-container`,(T=n.classNames)==null?void 0:T.container),style:(D=n.styles)==null?void 0:D.container},[e("div",{class:b(`${a}-item-tail`,(E=n.classNames)==null?void 0:E.tail),style:(A=n.styles)==null?void 0:A.tail},null),e("div",{class:b(`${a}-item-icon`,(F=n.classNames)==null?void 0:F.icon),style:(V=n.styles)==null?void 0:V.icon},[h]),e("div",{class:b(`${a}-item-content`,(R=n.classNames)==null?void 0:R.content),style:(W=n.styles)==null?void 0:W.content},[e("div",{class:b(`${a}-item-title`,(O=n.classNames)==null?void 0:O.title),style:(j=n.styles)==null?void 0:j.title},[p.title,p.subTitle&&e("span",{class:b(`${a}-item-subtitle`,(M=n.classNames)==null?void 0:M.subtitle),style:(L=n.styles)==null?void 0:L.subtitle},[p.subTitle])]),z&&e("div",{class:b(`${a}-item-description`,(H=n.classNames)==null?void 0:H.description),style:(J=n.styles)==null?void 0:J.description},[z])])]),l.value==="panel"&&e(rt,{prefixCls:a},null)])})])}}}),pt=k({__name:"StepsBasic",setup(n){const o=q(0),a=[{title:"第一步",description:"填写基本信息"},{title:"第二步",description:"确认订单信息"},{title:"第三步",description:"完成支付"}];return(l,t)=>(y(),N(i(X),{direction:"vertical",style:{width:"100%"}},{default:u(()=>[e(i(m),{current:o.value,items:a},null,8,["current"]),e(i(X),null,{default:u(()=>[e(i(K),{disabled:o.value===0,onClick:t[0]||(t[0]=r=>o.value--)},{default:u(()=>[...t[2]||(t[2]=[c(" 上一步 ",-1)])]),_:1},8,["disabled"]),e(i(K),{type:"primary",disabled:o.value===a.length-1,onClick:t[1]||(t[1]=r=>o.value++)},{default:u(()=>[...t[3]||(t[3]=[c(" 下一步 ",-1)])]),_:1},8,["disabled"])]),_:1}),s("p",null,"当前步骤："+et(o.value+1),1)]),_:1}))}}),dt=`<template>
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
`,ut={style:{display:"flex","flex-direction":"column",gap:"32px"}},mt=k({__name:"StepsClassNames",setup(n){const o=[{title:"已完成",content:"这是第一步的描述"},{title:"进行中",content:"这是第二步的描述"},{title:"待处理",content:"这是第三步的描述"}],a=[{title:"注册账号",content:"填写基本信息并验证邮箱"},{title:"完善资料",content:"上传头像并填写个人详情"},{title:"开始使用",content:"探索产品功能"}];return(l,t)=>(y(),$("div",ut,[s("div",null,[t[0]||(t[0]=s("div",{style:{"margin-bottom":"12px",color:"#666"}},"自定义根容器背景：",-1)),e(i(m),{current:1,items:o,"class-names":{root:"custom-root"}})]),s("div",null,[t[1]||(t[1]=s("div",{style:{"margin-bottom":"12px",color:"#666"}},"自定义图标与标题：",-1)),e(i(m),{current:1,items:o,"class-names":{icon:"custom-icon",title:"custom-title"}})]),s("div",null,[t[2]||(t[2]=s("div",{style:{"margin-bottom":"12px",color:"#666"}},"自定义连接线：",-1)),e(i(m),{current:1,items:a,"class-names":{tail:"custom-tail",description:"custom-description"}})]),s("div",null,[t[3]||(t[3]=s("div",{style:{"margin-bottom":"12px",color:"#666"}},"使用内联样式：",-1)),e(i(m),{current:2,items:o,styles:{root:{padding:"20px",backgroundColor:"#fafafa",borderRadius:"8px"},icon:{fontSize:"20px"},title:{fontWeight:600,color:"#1677ff"}}})]),s("div",null,[t[4]||(t[4]=s("div",{style:{"margin-bottom":"12px",color:"#666"}},"垂直步骤条组合定制：",-1)),e(i(m),{orientation:"vertical",current:1,items:a,"class-names":{item:"custom-vertical-item",container:"custom-container",content:"custom-content"}})])]))}}),gt=st(mt,[["__scopeId","data-v-b923a00f"]]),ft=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器背景 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义根容器背景：</div>
      <Steps :current="1" :items="basicItems" :class-names="{ root: 'custom-root' }" />
    </div>

    <!-- 场景 2：自定义图标和标题样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义图标与标题：</div>
      <Steps
        :current="1"
        :items="basicItems"
        :class-names="{
          icon: 'custom-icon',
          title: 'custom-title',
        }"
      />
    </div>

    <!-- 场景 3：自定义连接线样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">自定义连接线：</div>
      <Steps
        :current="1"
        :items="itemsWithDescription"
        :class-names="{
          tail: 'custom-tail',
          description: 'custom-description',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">使用内联样式：</div>
      <Steps
        :current="2"
        :items="basicItems"
        :styles="{
          root: { padding: '20px', backgroundColor: '#fafafa', borderRadius: '8px' },
          icon: { fontSize: '20px' },
          title: { fontWeight: 600, color: '#1677ff' },
        }"
      />
    </div>

    <!-- 场景 5：垂直步骤条组合定制 -->
    <div>
      <div style="margin-bottom: 12px; color: #666">垂直步骤条组合定制：</div>
      <Steps
        orientation="vertical"
        :current="1"
        :items="itemsWithDescription"
        :class-names="{
          item: 'custom-vertical-item',
          container: 'custom-container',
          content: 'custom-content',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const basicItems = [
  { title: '已完成', content: '这是第一步的描述' },
  { title: '进行中', content: '这是第二步的描述' },
  { title: '待处理', content: '这是第三步的描述' },
]

const itemsWithDescription = [
  { title: '注册账号', content: '填写基本信息并验证邮箱' },
  { title: '完善资料', content: '上传头像并填写个人详情' },
  { title: '开始使用', content: '探索产品功能' },
]
<\/script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(to right, #f0f5ff, #e6f4ff);
  padding: 16px;
  border-radius: 8px;
}

:deep(.custom-icon) {
  transform: scale(1.2);
  transition: all 0.3s;
}

:deep(.custom-icon:hover) {
  transform: scale(1.3) rotate(360deg);
  transition: all 0.5s;
}

:deep(.custom-title) {
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

:deep(.custom-tail) {
  background: linear-gradient(to bottom, #1677ff 0%, #722ed1 100%) !important;
  height: 3px !important;
}

:deep(.custom-description) {
  color: #722ed1;
  font-style: italic;
}

:deep(.custom-vertical-item) {
  padding: 12px;
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.custom-vertical-item:hover) {
  background-color: #f0f5ff;
  transform: translateX(4px);
}

:deep(.custom-container) {
  padding-left: 8px;
}

:deep(.custom-content) {
  margin-top: 4px;
}
</style>
`,kt=k({__name:"StepsDot",setup(n){const o=[{title:"已完成",description:"2024-01-01"},{title:"进行中",description:"2024-01-02"},{title:"待处理",description:"2024-01-03"},{title:"待处理",description:"2024-01-04"}];return(a,l)=>(y(),N(i(m),{"progress-dot":"",current:1,items:o}))}}),vt=`<template>
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
`,yt=k({__name:"StepsError",setup(n){const o=[{title:"已完成",description:"操作成功"},{title:"处理中",description:"操作失败",status:"error"},{title:"待处理",description:"等待处理"}];return(a,l)=>(y(),N(i(m),{current:1,status:"error",items:o}))}}),bt=`<template>
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
`,St={style:{padding:"20px"}},ht=k({__name:"StepsInline",setup(n){const o=[{title:"Step 1",content:"First step"},{title:"Step 2",content:"Second step"},{title:"Step 3",content:"Third step"},{title:"Step 4",content:"Fourth step"}];return(a,l)=>(y(),$("div",St,[e(i(m),{items:o,type:"inline",current:1})]))}}),xt=`<template>
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
`,wt={style:{padding:"20px"}},$t=k({__name:"StepsNavigation",setup(n){const o=q(1),a=[{title:"Step 1",content:"First step"},{title:"Step 2",content:"Second step"},{title:"Step 3",content:"Third step"}],l=t=>{o.value=t};return(t,r)=>(y(),$("div",wt,[e(i(m),{items:a,type:"navigation",current:o.value,onChange:l},null,8,["current"])]))}}),Ct=`<template>
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
`,Nt={style:{padding:"20px"}},_t=k({__name:"StepsPanel",setup(n){const o=q(1),a=[{title:"Step 1",content:"First step description"},{title:"Step 2",content:"Second step description"},{title:"Step 3",content:"Third step description"}],l=t=>{o.value=t};return(t,r)=>(y(),$("div",Nt,[e(i(m),{items:a,type:"panel",current:o.value,onChange:l},null,8,["current"])]))}}),qt=`<template>
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
`,Pt={style:{padding:"20px"}},zt=k({__name:"StepsProgress",setup(n){const o=[{title:"Finished",content:"This is a description"},{title:"In Progress",content:"This is a description"},{title:"Waiting",content:"This is a description"}];return(a,l)=>(y(),$("div",Pt,[e(i(m),{items:o,current:1,percent:60})]))}}),Bt=`<template>
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
`,It=k({__name:"StepsSmall",setup(n){const o=[{title:"第一步"},{title:"第二步"},{title:"第三步"}];return(a,l)=>(y(),N(i(m),{size:"small",current:1,items:o}))}}),Tt=`<template>
  <Steps size="small" :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [{ title: '第一步' }, { title: '第二步' }, { title: '第三步' }]
<\/script>
`,Dt=k({__name:"StepsVertical",setup(n){const o=[{title:"已完成",description:"这是一段描述文字。"},{title:"进行中",description:"这是一段描述文字。"},{title:"待处理",description:"这是一段描述文字。"}];return(a,l)=>(y(),N(i(m),{direction:"vertical",current:1,items:o}))}}),Et=`<template>
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
`,At={class:"markdown-body"},Ht={__name:"steps",setup(n,{expose:o}){return o({frontmatter:{}}),(l,t)=>{const r=at("DemoBlock");return y(),$("div",At,[t[0]||(t[0]=s("h1",{id:"steps-步骤条",tabindex:"-1"},"Steps 步骤条",-1)),t[1]||(t[1]=s("p",null,"引导用户按照流程完成任务的导航条。",-1)),t[2]||(t[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=s("ul",null,[s("li",null,"当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务"),s("li",null,"需要展示当前操作的进度时")],-1)),t[4]||(t[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=s("p",null,"简单的步骤条。",-1)),e(r,{title:"基础用法",source:i(dt)},{default:u(()=>[e(pt)]),_:1},8,["source"]),t[7]||(t[7]=s("h3",{id:"垂直步骤条",tabindex:"-1"},"垂直步骤条",-1)),t[8]||(t[8]=s("p",null,[c("通过 "),s("code",null,'direction="vertical"'),c(" 或 "),s("code",null,'orientation="vertical"'),c(" 设置垂直方向步骤条。")],-1)),e(r,{title:"垂直步骤条",source:i(Et)},{default:u(()=>[e(Dt)]),_:1},8,["source"]),t[9]||(t[9]=s("h3",{id:"点状步骤条",tabindex:"-1"},"点状步骤条",-1)),t[10]||(t[10]=s("p",null,[c("通过 "),s("code",null,'type="dot"'),c(" 或 "),s("code",null,"progress-dot"),c(" 属性设置点状步骤条。")],-1)),e(r,{title:"点状步骤条",source:i(vt)},{default:u(()=>[e(kt)]),_:1},8,["source"]),t[11]||(t[11]=s("h3",{id:"错误状态",tabindex:"-1"},"错误状态",-1)),t[12]||(t[12]=s("p",null,[c("通过 "),s("code",null,'status="error"'),c(" 设置错误状态。")],-1)),e(r,{title:"错误状态",source:i(bt)},{default:u(()=>[e(yt)]),_:1},8,["source"]),t[13]||(t[13]=s("h3",{id:"小型步骤条",tabindex:"-1"},"小型步骤条",-1)),t[14]||(t[14]=s("p",null,[c("通过 "),s("code",null,'size="small"'),c(" 设置小型步骤条。")],-1)),e(r,{title:"小型步骤条",source:i(Tt)},{default:u(()=>[e(It)]),_:1},8,["source"]),t[15]||(t[15]=s("h3",{id:"导航型步骤条",tabindex:"-1"},"导航型步骤条",-1)),t[16]||(t[16]=s("p",null,[c("通过 "),s("code",null,'type="navigation"'),c(" 设置导航型步骤条。")],-1)),e(r,{title:"导航型步骤条",source:i(Ct)},{default:u(()=>[e($t)]),_:1},8,["source"]),t[17]||(t[17]=s("h3",{id:"面板型步骤条",tabindex:"-1"},"面板型步骤条",-1)),t[18]||(t[18]=s("p",null,[c("通过 "),s("code",null,'type="panel"'),c(" 设置面板型步骤条。")],-1)),e(r,{title:"面板型步骤条",source:i(qt)},{default:u(()=>[e(_t)]),_:1},8,["source"]),t[19]||(t[19]=s("h3",{id:"进度百分比",tabindex:"-1"},"进度百分比",-1)),t[20]||(t[20]=s("p",null,[c("通过 "),s("code",null,"percent"),c(" 属性显示当前步骤的进度百分比。")],-1)),e(r,{title:"进度百分比",source:i(Bt)},{default:u(()=>[e(zt)]),_:1},8,["source"]),t[21]||(t[21]=s("h3",{id:"内联型步骤条",tabindex:"-1"},"内联型步骤条",-1)),t[22]||(t[22]=s("p",null,[c("通过 "),s("code",null,'type="inline"'),c(" 设置内联型步骤条。")],-1)),e(r,{title:"内联型步骤条",source:i(xt)},{default:u(()=>[e(ht)]),_:1},8,["source"]),t[23]||(t[23]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[24]||(t[24]=s("p",null,[c("通过 "),s("code",null,"classNames"),c(" / "),s("code",null,"styles"),c(" 对各子元素做细粒度样式控制。")],-1)),e(r,{title:"语义化 className 与 style",source:i(ft)},{default:u(()=>[e(gt)]),_:1},8,["source"]),t[25]||(t[25]=ot(`<h2 id="api" tabindex="-1">API</h2><h3 id="steps-props" tabindex="-1">Steps Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>指定当前步骤，从 0 开始记数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>initial</td><td>起始序号，从 0 开始记数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>items</td><td>配置选项</td><td><code>StepItem[]</code></td><td><code>[]</code></td></tr><tr><td>direction</td><td>指定步骤条方向（已废弃，请使用 orientation）</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>orientation</td><td>指定步骤条方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>size</td><td>指定大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>status</td><td>指定当前步骤的状态</td><td><code>&#39;wait&#39; | &#39;process&#39; | &#39;finish&#39; | &#39;error&#39;</code></td><td><code>&#39;process&#39;</code></td></tr><tr><td>type</td><td>步骤条类型</td><td><code>&#39;default&#39; | &#39;navigation&#39; | &#39;inline&#39; | &#39;panel&#39; | &#39;dot&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>progressDot</td><td>点状步骤条（已废弃，请使用 type=“dot”）</td><td><code>boolean | function</code></td><td><code>false</code></td></tr><tr><td>labelPlacement</td><td>指定标签放置位置（已废弃，请使用 titlePlacement）</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>titlePlacement</td><td>指定标签放置位置</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>variant</td><td>步骤条样式变体</td><td><code>&#39;filled&#39; | &#39;outlined&#39;</code></td><td><code>&#39;filled&#39;</code></td></tr><tr><td>percent</td><td>当前步骤的进度百分比（0-100）</td><td><code>number</code></td><td>-</td></tr><tr><td>responsive</td><td>是否响应式</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>ellipsis</td><td>是否省略过长的标题和描述</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>offset</td><td>内联型步骤条的偏移量</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>iconRender</td><td>自定义图标渲染函数</td><td><code>(node, info) =&gt; VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>StepsClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>StepsStyles</code></td><td>-</td></tr></tbody></table><h3 id="steps-events" tabindex="-1">Steps Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>点击切换步骤时触发</td><td><code>(current: number) =&gt; void</code></td></tr></tbody></table><h3 id="stepitem" tabindex="-1">StepItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>description</td><td>步骤的详情描述（已废弃，请使用 content）</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>content</td><td>步骤的详情描述</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>subTitle</td><td>子标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>status</td><td>指定状态</td><td><code>&#39;wait&#39; | &#39;process&#39; | &#39;finish&#39; | &#39;error&#39;</code></td><td>-</td></tr><tr><td>icon</td><td>步骤图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用点击</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>onClick</td><td>点击步骤时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Steps 组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">StepsClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 div.hmfw-steps</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 步骤项 div.hmfw-steps-item</span>
  container<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 步骤项容器 div.hmfw-steps-item-container</span>
  tail<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 步骤连接线 div.hmfw-steps-item-tail</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 步骤图标容器 div.hmfw-steps-item-icon</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 步骤内容容器 div.hmfw-steps-item-content</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 步骤标题 div.hmfw-steps-item-title</span>
  subtitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 步骤副标题 span.hmfw-steps-item-subtitle</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 步骤描述 div.hmfw-steps-item-description</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">StepsStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  container<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  tail<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  icon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  subtitle<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  description<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item hmfw-steps-item-finish<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.container / styles.container 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-tail<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.tail / styles.tail 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
          标题
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-subtitle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.subtitle / styles.subtitle 应用于此 --&gt;</span>
            副标题
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.description / styles.description 应用于此 --&gt;</span>
          描述信息
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 其他步骤项... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Steps
    :current=&quot;1&quot;
    :items=&quot;items&quot;
    :class-names=&quot;{
      root: &#39;my-steps-root&#39;,
      icon: &#39;my-icon&#39;,
      title: &#39;my-title&#39;,
      tail: &#39;my-tail&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-steps-root) {
  background: linear-gradient(to right, #f0f5ff, #e6f4ff);
  padding: 16px;
  border-radius: 8px;
}

:deep(.my-icon) {
  transform: scale(1.2);
  transition: all 0.3s;
}

:deep(.my-title) {
  font-weight: 600;
  color: #1677ff;
}

:deep(.my-tail) {
  background: linear-gradient(to bottom, #1677ff 0%, #722ed1 100%) !important;
  height: 3px !important;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Steps
    :current=&quot;1&quot;
    :items=&quot;items&quot;
    :styles=&quot;{
      root: { padding: &#39;20px&#39;, backgroundColor: &#39;#fafafa&#39;, borderRadius: &#39;8px&#39; },
      icon: { fontSize: &#39;20px&#39; },
      title: { fontWeight: 600, color: &#39;#1677ff&#39; },
      description: { color: &#39;#666&#39;, fontSize: &#39;13px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>item</code>、<code>container</code>、<code>tail</code>、<code>icon</code>、<code>content</code>、<code>title</code>、<code>subtitle</code>、<code>description</code> 这些节点类名会应用到<strong>每个步骤项</strong>上</li><li><code>tail</code> 是连接线，在最后一个步骤项中不渲染</li><li><code>subtitle</code> 和 <code>description</code> 仅在配置了对应内容时渲染</li><li>垂直方向步骤条（<code>orientation=&quot;vertical&quot;</code>）的 <code>tail</code> 会垂直延伸</li><li>点状步骤条（<code>type=&quot;dot&quot;</code>）的图标会变为小圆点，自定义 <code>icon</code> 样式依然生效</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Steps 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题背景色</td><td><code>#e6f4ff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr></tbody></table>`,25))])}}};export{Ht as default};
