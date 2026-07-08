import{B as J}from"./Button-CnMq9a0G.js";import{S as K}from"./Space-CKjJe6BD.js";import{d as b,u as tt,c as e,a as x,v as q,o as h,q as w,w as f,e as p,g as l,f as s,A as nt,r as st,b as C,_ as at,h as et,i as ot}from"./index-Dhlw_h7w.js";import{c as m}from"./cls-S9IiI6wd.js";import{C as pt}from"./CloseOutlined-N_iBbuHV.js";import{C as ct}from"./CheckOutlined-DAYAUbEl.js";import"./LoadingOutlined-BpH-uTyr.js";const v=b({name:"Steps",props:{current:{type:Number,default:0},initial:{type:Number,default:0},items:{type:Array,default:()=>[]},direction:{type:String},orientation:{type:String},size:{type:String,default:"default"},status:{type:String,default:"process"},type:{type:String,default:"default"},labelPlacement:{type:String},titlePlacement:{type:String},progressDot:{type:[Boolean,Function]},variant:{type:String,default:"filled"},responsive:{type:Boolean,default:!0},ellipsis:Boolean,offset:{type:Number,default:0},iconRender:Function,classNames:Object,styles:Object},emits:["change"],setup(n,{emit:o}){const a=tt("steps"),k=x(()=>n.type&&n.type!=="default"?n.type:n.progressDot?"dot":n.type),t=x(()=>k.value==="dot"||k.value==="inline"),g=x(()=>k.value==="inline"),N=x(()=>(n.orientation||n.direction)==="vertical"?"vertical":"horizontal"),$=x(()=>t.value||N.value==="vertical"?N.value==="vertical"?"horizontal":"vertical":n.titlePlacement||n.labelPlacement||"horizontal"),L=(d,i)=>{if(i.status)return i.status;const r=d+n.initial;return r<n.current?"finish":r===n.current?n.status:"wait"},Q=(d,i,r)=>{const c=`${a}-item-icon`;let u=null;if(t.value||r.icon)u=r.icon||q("span",{class:`${a}-icon-dot`});else switch(i){case"finish":u=q(ct,{class:m("hmfw-icon",`${c}-finish`)});break;case"error":u=q(pt,{class:m("hmfw-icon",`${c}-error`)});break;default:u=q("span",{class:`${c}-number`},d+n.initial+1)}let y=u;if(n.iconRender){const S={index:d,active:d+n.initial===n.current,item:{...r,status:i}};y=n.iconRender(y,S)}else if(typeof n.progressDot=="function"){const S={index:d,active:d+n.initial===n.current,item:{...r,status:i}};y=n.progressDot(y,S)}return y},U=(d,i,r)=>{if(i.disabled)return;i.onClick&&i.onClick(r);const c=d+n.initial;c!==n.current&&o("change",c)};return()=>{var i,r;const d=n.items??[];return e("div",{class:m(a,`${a}-${N.value}`,`${a}-${n.variant}`,{[`${a}-${n.size}`]:n.size!=="default",[`${a}-label-${$.value}`]:$.value!=="horizontal",[`${a}-dot`]:t.value,[`${a}-inline`]:g.value,[`${a}-ellipsis`]:n.ellipsis},(i=n.classNames)==null?void 0:i.root),style:(r=n.styles)==null?void 0:r.root,role:"list","aria-label":"步骤条"},[d.map((c,u)=>{var z,B,P,D,I,E,V,T,A,F,O,R,W,j,M,X,G,H;const y=L(u,c),S=Q(u,y,c),Y=!c.disabled,_=c.content||c.description;return e("div",{key:u,class:m(`${a}-item`,`${a}-item-${y}`,{[`${a}-item-disabled`]:c.disabled,[`${a}-item-active`]:u+n.initial===n.current},(z=n.classNames)==null?void 0:z.item),style:(B=n.styles)==null?void 0:B.item,role:"listitem","aria-current":u+n.initial===n.current?"step":void 0,"aria-disabled":c.disabled||void 0,onClick:Z=>Y&&U(u,c,Z)},[e("div",{class:m(`${a}-item-header`,(P=n.classNames)==null?void 0:P.header),style:(D=n.styles)==null?void 0:D.header},[e("div",{class:m(`${a}-item-icon`,(I=n.classNames)==null?void 0:I.icon),style:(E=n.styles)==null?void 0:E.icon},[S]),e("div",{class:m(`${a}-item-title`,(V=n.classNames)==null?void 0:V.title),style:(T=n.styles)==null?void 0:T.title},[c.title,c.subTitle&&e("span",{class:m(`${a}-item-subtitle`,(A=n.classNames)==null?void 0:A.subtitle),style:(F=n.styles)==null?void 0:F.subtitle},[c.subTitle])]),e("div",{class:m(`${a}-item-tail`,(O=n.classNames)==null?void 0:O.tail),style:(R=n.styles)==null?void 0:R.tail},null)]),e("div",{class:m(`${a}-item-content`,(W=n.classNames)==null?void 0:W.content),style:(j=n.styles)==null?void 0:j.content},[e("div",{class:m(`${a}-item-icon`,`${a}-item-icon-placeholder`,(M=n.classNames)==null?void 0:M.icon),style:(X=n.styles)==null?void 0:X.icon},null),_&&e("div",{class:m(`${a}-item-description`,(G=n.classNames)==null?void 0:G.description),style:(H=n.styles)==null?void 0:H.description},[_])])])})])}}}),lt=b({__name:"StepsBasic",setup(n){const o=st(0),a=[{title:"第一步",description:"填写基本信息"},{title:"第二步",description:"确认订单信息"},{title:"第三步",description:"完成支付"}];return(k,t)=>(h(),w(p(K),{direction:"vertical",style:{width:"100%"}},{default:f(()=>[e(p(v),{current:o.value,items:a},null,8,["current"]),e(p(K),null,{default:f(()=>[e(p(J),{disabled:o.value===0,onClick:t[0]||(t[0]=g=>o.value--)},{default:f(()=>[...t[2]||(t[2]=[l(" 上一步 ",-1)])]),_:1},8,["disabled"]),e(p(J),{type:"primary",disabled:o.value===a.length-1,onClick:t[1]||(t[1]=g=>o.value++)},{default:f(()=>[...t[3]||(t[3]=[l(" 下一步 ",-1)])]),_:1},8,["disabled"])]),_:1}),s("p",null,"当前步骤："+nt(o.value+1),1)]),_:1}))}}),it=`<template>
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
import { Steps, Button, Space } from '@hmfw/ant-design'

const current = ref(0)

const items = [
  { title: '第一步', description: '填写基本信息' },
  { title: '第二步', description: '确认订单信息' },
  { title: '第三步', description: '完成支付' },
]
<\/script>
`,dt={style:{display:"flex","flex-direction":"column",gap:"32px"}},rt=b({__name:"StepsClassNames",setup(n){const o=[{title:"已完成",content:"这是第一步的描述"},{title:"进行中",content:"这是第二步的描述"},{title:"待处理",content:"这是第三步的描述"}],a=[{title:"注册账号",content:"填写基本信息并验证邮箱"},{title:"完善资料",content:"上传头像并填写个人详情"},{title:"开始使用",content:"探索产品功能"}];return(k,t)=>(h(),C("div",dt,[s("div",null,[t[0]||(t[0]=s("div",{style:{"margin-bottom":"12px",color:"#666"}},"自定义根容器背景：",-1)),e(p(v),{current:1,items:o,"class-names":{root:"custom-root"}})]),s("div",null,[t[1]||(t[1]=s("div",{style:{"margin-bottom":"12px",color:"#666"}},"自定义图标与标题：",-1)),e(p(v),{current:1,items:o,"class-names":{icon:"custom-icon",title:"custom-title"}})]),s("div",null,[t[2]||(t[2]=s("div",{style:{"margin-bottom":"12px",color:"#666"}},"自定义连接线：",-1)),e(p(v),{current:1,items:a,"class-names":{tail:"custom-tail",description:"custom-description"}})]),s("div",null,[t[3]||(t[3]=s("div",{style:{"margin-bottom":"12px",color:"#666"}},"使用内联样式：",-1)),e(p(v),{current:2,items:o,styles:{root:{padding:"20px",backgroundColor:"#fafafa",borderRadius:"8px"},icon:{fontSize:"20px"},title:{fontWeight:600,color:"#1677ff"}}})]),s("div",null,[t[4]||(t[4]=s("div",{style:{"margin-bottom":"12px",color:"#666"}},"垂直步骤条组合定制：",-1)),e(p(v),{orientation:"vertical",current:1,items:a,"class-names":{item:"custom-vertical-item",container:"custom-container",content:"custom-content"}})])]))}}),ut=at(rt,[["__scopeId","data-v-473a969e"]]),mt=`<template>
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
import { Steps } from '@hmfw/ant-design'

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
`,kt=b({__name:"StepsDot",setup(n){const o=[{title:"已完成",description:"2024-01-01"},{title:"进行中",description:"2024-01-02"},{title:"待处理",description:"2024-01-03"},{title:"待处理",description:"2024-01-04"}];return(a,k)=>(h(),w(p(v),{"progress-dot":"",current:1,items:o}))}}),gt=`<template>
  <Steps progress-dot :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from '@hmfw/ant-design'

const items = [
  { title: '已完成', description: '2024-01-01' },
  { title: '进行中', description: '2024-01-02' },
  { title: '待处理', description: '2024-01-03' },
  { title: '待处理', description: '2024-01-04' },
]
<\/script>
`,ft=b({__name:"StepsError",setup(n){const o=[{title:"已完成",description:"操作成功"},{title:"处理中",description:"操作失败",status:"error"},{title:"待处理",description:"等待处理"}];return(a,k)=>(h(),w(p(v),{current:1,status:"error",items:o}))}}),vt=`<template>
  <Steps :current="1" status="error" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from '@hmfw/ant-design'

const items = [
  { title: '已完成', description: '操作成功' },
  { title: '处理中', description: '操作失败', status: 'error' },
  { title: '待处理', description: '等待处理' },
]
<\/script>
`,yt={style:{padding:"20px"}},bt=b({__name:"StepsInline",setup(n){const o=[{title:"Step 1",content:"First step"},{title:"Step 2",content:"Second step"},{title:"Step 3",content:"Third step"},{title:"Step 4",content:"Fourth step"}];return(a,k)=>(h(),C("div",yt,[e(p(v),{items:o,type:"inline",current:1})]))}}),ht=`<template>
  <div style="padding: 20px">
    <Steps :items="items" type="inline" :current="1" />
  </div>
</template>

<script setup lang="ts">
import { Steps } from '@hmfw/ant-design'

const items = [
  { title: 'Step 1', content: 'First step' },
  { title: 'Step 2', content: 'Second step' },
  { title: 'Step 3', content: 'Third step' },
  { title: 'Step 4', content: 'Fourth step' },
]
<\/script>
`,St=b({__name:"StepsSmall",setup(n){const o=[{title:"第一步"},{title:"第二步"},{title:"第三步"}];return(a,k)=>(h(),w(p(v),{size:"small",current:1,items:o}))}}),xt=`<template>
  <Steps size="small" :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from '@hmfw/ant-design'

const items = [{ title: '第一步' }, { title: '第二步' }, { title: '第三步' }]
<\/script>
`,wt=b({__name:"StepsVertical",setup(n){const o=[{title:"已完成",description:"这是一段描述文字。"},{title:"进行中",description:"这是一段描述文字。"},{title:"待处理",description:"这是一段描述文字。"}];return(a,k)=>(h(),w(p(v),{direction:"vertical",current:1,items:o}))}}),qt=`<template>
  <Steps direction="vertical" :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from '@hmfw/ant-design'

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
`,Nt={class:"markdown-body"},It={__name:"steps",setup(n,{expose:o}){return o({frontmatter:{}}),(k,t)=>{const g=et("DemoBlock");return h(),C("div",Nt,[t[0]||(t[0]=s("h1",{id:"steps-步骤条",tabindex:"-1"},"Steps 步骤条",-1)),t[1]||(t[1]=s("p",null,"引导用户按照流程完成任务的导航条。",-1)),t[2]||(t[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=s("ul",null,[s("li",null,"当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务"),s("li",null,"需要展示当前操作的进度时")],-1)),t[4]||(t[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=s("p",null,"简单的步骤条。",-1)),e(g,{title:"基础用法",source:p(it)},{default:f(()=>[e(lt)]),_:1},8,["source"]),t[7]||(t[7]=s("h3",{id:"垂直步骤条",tabindex:"-1"},"垂直步骤条",-1)),t[8]||(t[8]=s("p",null,[l("通过 "),s("code",null,'direction="vertical"'),l(" 或 "),s("code",null,'orientation="vertical"'),l(" 设置垂直方向步骤条。")],-1)),e(g,{title:"垂直步骤条",source:p(qt)},{default:f(()=>[e(wt)]),_:1},8,["source"]),t[9]||(t[9]=s("h3",{id:"点状步骤条",tabindex:"-1"},"点状步骤条",-1)),t[10]||(t[10]=s("p",null,[l("通过 "),s("code",null,'type="dot"'),l(" 或 "),s("code",null,"progress-dot"),l(" 属性设置点状步骤条。")],-1)),e(g,{title:"点状步骤条",source:p(gt)},{default:f(()=>[e(kt)]),_:1},8,["source"]),t[11]||(t[11]=s("h3",{id:"错误状态",tabindex:"-1"},"错误状态",-1)),t[12]||(t[12]=s("p",null,[l("通过 "),s("code",null,'status="error"'),l(" 设置错误状态。")],-1)),e(g,{title:"错误状态",source:p(vt)},{default:f(()=>[e(ft)]),_:1},8,["source"]),t[13]||(t[13]=s("h3",{id:"小型步骤条",tabindex:"-1"},"小型步骤条",-1)),t[14]||(t[14]=s("p",null,[l("通过 "),s("code",null,'size="small"'),l(" 设置小型步骤条。")],-1)),e(g,{title:"小型步骤条",source:p(xt)},{default:f(()=>[e(St)]),_:1},8,["source"]),t[15]||(t[15]=s("h3",{id:"内联型步骤条",tabindex:"-1"},"内联型步骤条",-1)),t[16]||(t[16]=s("p",null,[l("通过 "),s("code",null,'type="inline"'),l(" 设置内联型步骤条。")],-1)),e(g,{title:"内联型步骤条",source:p(ht)},{default:f(()=>[e(bt)]),_:1},8,["source"]),t[17]||(t[17]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[18]||(t[18]=s("p",null,[l("通过 "),s("code",null,"classNames"),l(" / "),s("code",null,"styles"),l(" 对各子元素做细粒度样式控制。")],-1)),e(g,{title:"语义化 className 与 style",source:p(mt)},{default:f(()=>[e(ut)]),_:1},8,["source"]),t[19]||(t[19]=ot(`<h2 id="api" tabindex="-1">API</h2><h3 id="steps-props" tabindex="-1">Steps Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>指定当前步骤，从 0 开始记数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>initial</td><td>起始序号，从 0 开始记数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>items</td><td>配置选项</td><td><code>StepItem[]</code></td><td><code>[]</code></td></tr><tr><td>direction</td><td>指定步骤条方向（已废弃，请使用 orientation）</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>orientation</td><td>指定步骤条方向</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>size</td><td>指定大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>status</td><td>指定当前步骤的状态</td><td><code>&#39;wait&#39; | &#39;process&#39; | &#39;finish&#39; | &#39;error&#39;</code></td><td><code>&#39;process&#39;</code></td></tr><tr><td>type</td><td>步骤条类型</td><td><code>&#39;default&#39; | &#39;inline&#39; | &#39;dot&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>progressDot</td><td>点状步骤条（已废弃，请使用 type=“dot”）</td><td><code>boolean | function</code></td><td><code>false</code></td></tr><tr><td>labelPlacement</td><td>指定标签放置位置（已废弃，请使用 titlePlacement）</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>titlePlacement</td><td>指定标签放置位置</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>variant</td><td>步骤条样式变体</td><td><code>&#39;filled&#39; | &#39;outlined&#39;</code></td><td><code>&#39;filled&#39;</code></td></tr><tr><td>responsive</td><td>是否响应式</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>ellipsis</td><td>是否省略过长的标题和描述</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>offset</td><td>内联型步骤条的偏移量</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>iconRender</td><td>自定义图标渲染函数</td><td><code>(node, info) =&gt; VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>StepsClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>StepsStyles</code></td><td>-</td></tr></tbody></table><h3 id="steps-events" tabindex="-1">Steps Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>点击切换步骤时触发</td><td><code>(current: number) =&gt; void</code></td></tr></tbody></table><h3 id="stepitem" tabindex="-1">StepItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>description</td><td>步骤的详情描述（已废弃，请使用 content）</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>content</td><td>步骤的详情描述</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>subTitle</td><td>子标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>status</td><td>指定状态</td><td><code>&#39;wait&#39; | &#39;process&#39; | &#39;finish&#39; | &#39;error&#39;</code></td><td>-</td></tr><tr><td>icon</td><td>步骤图标</td><td><code>VNode</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用点击</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>onClick</td><td>点击步骤时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Steps 组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">StepsClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 div.hmfw-steps</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 步骤项 div.hmfw-steps-item</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 步骤项 header div.hmfw-steps-item-header</span>
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
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
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
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.header / styles.header 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.icon / styles.icon 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
        标题
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-subtitle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.subtitle / styles.subtitle 应用于此 --&gt;</span>
          副标题
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-tail<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.tail / styles.tail 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-icon hmfw-steps-item-icon-placeholder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ 空占位符，与 header icon 列对齐 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-steps-item-description<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.description / styles.description 应用于此 --&gt;</span>
        描述信息
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 其他步骤项... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Steps</span>
    <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-steps-root&#39;,
      icon: &#39;my-icon&#39;,
      title: &#39;my-title&#39;,
      tail: &#39;my-tail&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-steps-root)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #f0f5ff<span class="token punctuation">,</span> #e6f4ff<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-icon)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-title)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1677ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-tail)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> #1677ff 0%<span class="token punctuation">,</span> #722ed1 100%<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 3px <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Steps</span>
    <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { padding: &#39;20px&#39;, backgroundColor: &#39;#fafafa&#39;, borderRadius: &#39;8px&#39; },
      icon: { fontSize: &#39;20px&#39; },
      title: { fontWeight: 600, color: &#39;#1677ff&#39; },
      description: { color: &#39;#666&#39;, fontSize: &#39;13px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>item</code>、<code>header</code>、<code>tail</code>、<code>icon</code>、<code>content</code>、<code>title</code>、<code>subtitle</code>、<code>description</code> 这些节点类名会应用到<strong>每个步骤项</strong>上</li><li><code>tail</code> 是连接线，在最后一个步骤项中不渲染</li><li><code>subtitle</code> 和 <code>description</code> 仅在配置了对应内容时渲染</li><li>垂直方向步骤条（<code>orientation=&quot;vertical&quot;</code>）的 <code>tail</code> 会垂直延伸</li><li>点状步骤条（<code>type=&quot;dot&quot;</code>）的图标会变为小圆点，content 区的占位符 icon 会隐藏</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Steps 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr><tr><td><code>--hmfw-steps-gap</code></td><td>步骤项间距</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-steps-icon-size</code></td><td>图标尺寸</td><td><code>32px</code></td></tr><tr><td><code>--hmfw-steps-dot-size</code></td><td>dot 图标尺寸</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-steps-tail-width</code></td><td>连接线粗细</td><td><code>1px</code></td></tr><tr><td><code>--hmfw-steps-tail-min-width</code></td><td>连接线最小宽</td><td><code>20px</code></td></tr></tbody></table>`,25))])}}};export{It as default};
