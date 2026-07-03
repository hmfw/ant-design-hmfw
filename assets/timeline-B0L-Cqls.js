import{d as u,u as H,c as o,O as X,F as Y,o as m,q as b,e as l,b as T,f as s,_ as G,h as J,w as k,g,i as K}from"./index-D624MvcT.js";import{c as f}from"./cls-S9IiI6wd.js";import{L as Q}from"./LoadingOutlined-YZYQjBMp.js";function U(n){return n==="left"?"start":n==="right"?"end":n==="start"||n==="end"||n==="alternate"?n:"start"}function Z(n,e,a){return n.placement?n.placement:n.position==="left"?"start":n.position==="right"?"end":a==="alternate"?e%2===0?"start":"end":a}function j(n){if(!n)return[];const e=[];for(const a of n)if(a&&a.type!==X){if(a.type===Y&&Array.isArray(a.children)){e.push(...j(a.children));continue}a.props&&e.push(a.props)}return e}const nn=u({name:"TimelineItem",props:{title:[String,Object],content:[String,Object],icon:[String,Object],placement:String,loading:Boolean,label:[String,Object],children:null,dot:[String,Object],position:String,color:String,className:String,style:Object},setup(n,{slots:e}){return()=>{var a;return(a=e.default)==null?void 0:a.call(e)}}}),tn=u({name:"Timeline",props:{items:Array,mode:{type:String,default:"left"},orientation:{type:String,default:"vertical"},variant:{type:String,default:"outlined"},reverse:Boolean,titleSpan:[Number,String],pending:[Boolean,String,Object],pendingDot:[String,Object],classNames:Object,styles:Object},setup(n,{slots:e}){const a=H("timeline");return()=>{var S,N;const p=U(n.mode);let t=[];if(n.items)t=[...n.items];else if(e.default){const c=e.default();t=j(c)}if(n.pending){const c=typeof n.pending=="string"?n.pending:n.pending===!0?void 0:n.pending;t.push({content:c,icon:n.pendingDot,loading:!n.pendingDot,color:"gray"})}const d=n.reverse?[...t].reverse():t,q=f(a,{[`${a}-${n.orientation}`]:n.orientation==="horizontal",[`${a}-${p}`]:p!=="start",[`${a}-${n.variant}`]:n.variant!=="outlined",[`${a}-pending`]:!!n.pending,[`${a}-reverse`]:n.reverse},(S=n.classNames)==null?void 0:S.root),i={...(N=n.styles)==null?void 0:N.root};return n.titleSpan!==void 0&&p!=="alternate"&&(typeof n.titleSpan=="number"?i["--hmfw-timeline-title-span"]=`${n.titleSpan}px`:i["--hmfw-timeline-title-span"]=n.titleSpan),o("ul",{class:q,style:i},[d.map((c,x)=>{var $,z,I,P,O,B,V,D,E,F;const A=x===d.length-1,C=Z(c,x,p),_=c.title??c.label,L=c.content??c.children;let y=c.icon??c.dot;c.loading&&!y&&(y=o(Q,{class:"hmfw-icon hmfw-icon-spin"},null));const h=c.color??"blue",v=["blue","red","green","gray"].includes(h),W=!!y||c.loading,M=f(`${a}-item`,{[`${a}-item-last`]:A,[`${a}-item-${C}`]:C==="end",[`${a}-item-loading`]:c.loading},c.className,($=n.classNames)==null?void 0:$.item),R=f(`${a}-item-head`,{[`${a}-item-head-${h}`]:v,[`${a}-item-head-custom`]:W||!v},(z=n.classNames)==null?void 0:z.dot),w={...c.style,...(I=n.styles)==null?void 0:I.dot};return v||(w.borderColor=h,w.color=h),o("li",{key:c.key??x,class:M,style:(P=n.styles)==null?void 0:P.item},[_&&o("div",{class:f(`${a}-item-label`,(O=n.classNames)==null?void 0:O.label),style:(B=n.styles)==null?void 0:B.label},[_]),o("div",{class:f(`${a}-item-tail`,(V=n.classNames)==null?void 0:V.tail),style:(D=n.styles)==null?void 0:D.tail},null),o("div",{class:R,style:w},[y]),o("div",{class:f(`${a}-item-content`,(E=n.classNames)==null?void 0:E.content),style:(F=n.styles)==null?void 0:F.content},[L])])})])}}}),r=tn;r.Item=nn;const sn=u({__name:"TimelineAlternate",setup(n){const e=[{content:"创建服务现场 2015-09-01"},{content:"初步排除网络异常 2015-09-01"},{content:"技术测试异常 2015-09-01"},{content:"网络异常正在修复 2015-09-01"}];return(a,p)=>(m(),b(l(r),{mode:"alternate",items:e}))}}),an=`<template>
  <Timeline mode="alternate" :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { content: '创建服务现场 2015-09-01' },
  { content: '初步排除网络异常 2015-09-01' },
  { content: '技术测试异常 2015-09-01' },
  { content: '网络异常正在修复 2015-09-01' },
]
<\/script>
`,en=u({__name:"TimelineBasic",setup(n){const e=[{content:"创建服务现场 2015-09-01"},{content:"初步排除网络异常 2015-09-01"},{content:"技术测试异常 2015-09-01"},{content:"网络异常正在修复 2015-09-01"}];return(a,p)=>(m(),b(l(r),{items:e}))}}),on=`<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { content: '创建服务现场 2015-09-01' },
  { content: '初步排除网络异常 2015-09-01' },
  { content: '技术测试异常 2015-09-01' },
  { content: '网络异常正在修复 2015-09-01' },
]
<\/script>
`,ln={style:{display:"flex","flex-direction":"column",gap:"32px"}},pn=u({__name:"TimelineClassNames",setup(n){const e=[{content:"创建服务站点 2024-01-01"},{content:"初步排查网络异常 2024-01-02"},{content:"技术测试完成 2024-01-03",color:"green"},{content:"网络异常正在修复中 2024-01-04",color:"red"}],a=[{title:"2024-01-01",content:"创建服务站点"},{title:"2024-01-02",content:"初步排查网络异常"},{title:"2024-01-03",content:"技术测试完成",color:"green"}],p=[{content:"Create a services site 2024-01-01",color:"blue"},{content:"Solve initial network problems 2024-01-02",color:"blue"},{content:"Technical testing completed 2024-01-03",color:"green"}],t=[{title:"阶段一",content:"项目启动与需求分析",color:"blue"},{title:"阶段二",content:"技术方案设计与评审",color:"blue"},{title:"阶段三",content:"开发与测试进行中",color:"green"},{title:"阶段四",content:"即将上线部署",color:"gray"}],d=[{content:"步骤 1",color:"green"},{content:"步骤 2",color:"green"},{content:"步骤 3",color:"blue"},{content:"步骤 4",color:"gray"}];return(q,i)=>(m(),T("div",ln,[s("div",null,[i[0]||(i[0]=s("div",{style:{"margin-bottom":"12px",color:"#666","font-weight":"500"}},"自定义连接线与节点：",-1)),o(l(r),{items:e,"class-names":{root:"custom-timeline-root",tail:"custom-tail",dot:"custom-dot"}})]),s("div",null,[i[1]||(i[1]=s("div",{style:{"margin-bottom":"12px",color:"#666","font-weight":"500"}},"自定义标题与内容：",-1)),o(l(r),{mode:"alternate",items:a,"class-names":{label:"custom-label",content:"custom-content"}})]),s("div",null,[i[2]||(i[2]=s("div",{style:{"margin-bottom":"12px",color:"#666","font-weight":"500"}},"使用内联样式：",-1)),o(l(r),{items:p,styles:{root:{padding:"16px",backgroundColor:"#f0f5ff",borderRadius:"8px"},dot:{transform:"scale(1.2)"},content:{fontSize:"15px",fontWeight:500}}})]),s("div",null,[i[3]||(i[3]=s("div",{style:{"margin-bottom":"12px",color:"#666","font-weight":"500"}},"组合自定义所有子元素：",-1)),o(l(r),{mode:"left",items:t,"class-names":{root:"timeline-fancy",item:"timeline-fancy-item",label:"timeline-fancy-label",tail:"timeline-fancy-tail",dot:"timeline-fancy-dot",content:"timeline-fancy-content"}})]),s("div",null,[i[4]||(i[4]=s("div",{style:{"margin-bottom":"12px",color:"#666","font-weight":"500"}},"水平布局自定义：",-1)),o(l(r),{orientation:"horizontal",items:d,"class-names":{root:"horizontal-timeline",dot:"horizontal-dot",content:"horizontal-content"}})])]))}}),cn=G(pn,[["__scopeId","data-v-d74a695a"]]),rn=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义根容器和连接线 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">自定义连接线与节点：</div>
      <Timeline
        :items="basicItems"
        :class-names="{
          root: 'custom-timeline-root',
          tail: 'custom-tail',
          dot: 'custom-dot',
        }"
      />
    </div>

    <!-- 场景 2：自定义标题和内容区域 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">自定义标题与内容：</div>
      <Timeline
        mode="alternate"
        :items="labeledItems"
        :class-names="{
          label: 'custom-label',
          content: 'custom-content',
        }"
      />
    </div>

    <!-- 场景 3：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">使用内联样式：</div>
      <Timeline
        :items="colorItems"
        :styles="{
          root: { padding: '16px', backgroundColor: '#f0f5ff', borderRadius: '8px' },
          dot: { transform: 'scale(1.2)' },
          content: { fontSize: '15px', fontWeight: 500 },
        }"
      />
    </div>

    <!-- 场景 4：组合自定义所有子元素 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">组合自定义所有子元素：</div>
      <Timeline
        mode="left"
        :items="complexItems"
        :class-names="{
          root: 'timeline-fancy',
          item: 'timeline-fancy-item',
          label: 'timeline-fancy-label',
          tail: 'timeline-fancy-tail',
          dot: 'timeline-fancy-dot',
          content: 'timeline-fancy-content',
        }"
      />
    </div>

    <!-- 场景 5：水平布局自定义 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-weight: 500">水平布局自定义：</div>
      <Timeline
        orientation="horizontal"
        :items="horizontalItems"
        :class-names="{
          root: 'horizontal-timeline',
          dot: 'horizontal-dot',
          content: 'horizontal-content',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const basicItems = [
  { content: '创建服务站点 2024-01-01' },
  { content: '初步排查网络异常 2024-01-02' },
  { content: '技术测试完成 2024-01-03', color: 'green' },
  { content: '网络异常正在修复中 2024-01-04', color: 'red' },
]

const labeledItems = [
  { title: '2024-01-01', content: '创建服务站点' },
  { title: '2024-01-02', content: '初步排查网络异常' },
  { title: '2024-01-03', content: '技术测试完成', color: 'green' },
]

const colorItems = [
  { content: 'Create a services site 2024-01-01', color: 'blue' },
  { content: 'Solve initial network problems 2024-01-02', color: 'blue' },
  { content: 'Technical testing completed 2024-01-03', color: 'green' },
]

const complexItems = [
  { title: '阶段一', content: '项目启动与需求分析', color: 'blue' },
  { title: '阶段二', content: '技术方案设计与评审', color: 'blue' },
  { title: '阶段三', content: '开发与测试进行中', color: 'green' },
  { title: '阶段四', content: '即将上线部署', color: 'gray' },
]

const horizontalItems = [
  { content: '步骤 1', color: 'green' },
  { content: '步骤 2', color: 'green' },
  { content: '步骤 3', color: 'blue' },
  { content: '步骤 4', color: 'gray' },
]
<\/script>

<style scoped>
/* 场景 1：自定义连接线与节点 */
:deep(.custom-timeline-root) {
  margin-left: 8px;
}

:deep(.custom-tail) {
  border-left-width: 3px;
  border-left-style: dashed;
  border-left-color: #1890ff;
}

:deep(.custom-dot) {
  border-width: 3px;
  transform: scale(1.2);
  box-shadow: 0 0 8px rgba(24, 144, 255, 0.4);
  transition: all 0.3s;
}

:deep(.custom-dot:hover) {
  transform: scale(1.4);
  box-shadow: 0 0 12px rgba(24, 144, 255, 0.6);
}

/* 场景 2：自定义标题和内容区域 */
:deep(.custom-label) {
  font-weight: 600;
  color: #1890ff;
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  padding: 4px 12px;
  border-radius: 12px;
  display: inline-block;
}

:deep(.custom-content) {
  background-color: #f0f5ff;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 3px solid #1890ff;
  transition: all 0.3s;
}

:deep(.custom-content:hover) {
  background-color: #d6e4ff;
  transform: translateX(4px);
}

/* 场景 4：组合自定义所有子元素 */
:deep(.timeline-fancy) {
  background: linear-gradient(to right, #f0f5ff, #fff);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #d6e4ff;
}

:deep(.timeline-fancy-item) {
  margin-bottom: 24px;
}

:deep(.timeline-fancy-label) {
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 6px 16px;
  border-radius: 16px;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

:deep(.timeline-fancy-tail) {
  border-left-width: 2px;
  border-left-style: solid;
  border-image: linear-gradient(to bottom, #667eea, #764ba2) 1;
}

:deep(.timeline-fancy-dot) {
  border: 3px solid #667eea;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
  transition: all 0.3s;
}

:deep(.timeline-fancy-dot:hover) {
  transform: scale(1.3) rotate(90deg);
  box-shadow: 0 0 0 6px rgba(102, 126, 234, 0.3);
}

:deep(.timeline-fancy-content) {
  background: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

:deep(.timeline-fancy-content:hover) {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

/* 场景 5：水平布局自定义 */
:deep(.horizontal-timeline) {
  padding: 24px;
  background: linear-gradient(to right, #f6ffed, #d9f7be);
  border-radius: 12px;
}

:deep(.horizontal-dot) {
  border-width: 3px;
  transform: scale(1.3);
  box-shadow: 0 0 12px rgba(82, 196, 26, 0.5);
  transition: all 0.3s;
}

:deep(.horizontal-dot:hover) {
  transform: scale(1.5);
  box-shadow: 0 0 16px rgba(82, 196, 26, 0.7);
}

:deep(.horizontal-content) {
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-weight: 500;
}
</style>
`,dn=u({__name:"TimelineCustomColor",setup(n){const e=[{content:"成功事件",color:"green"},{content:"失败事件",color:"red"},{content:"警告事件",color:"gray"},{content:"自定义颜色",color:"#00CCFF"}];return(a,p)=>(m(),b(l(r),{items:e}))}}),un=`<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { content: '成功事件', color: 'green' },
  { content: '失败事件', color: 'red' },
  { content: '警告事件', color: 'gray' },
  { content: '自定义颜色', color: '#00CCFF' },
]
<\/script>
`,mn=u({__name:"TimelineHorizontal",setup(n){const e=[{title:"2015-09",content:"创建服务"},{title:"2015-10",content:"排除异常"},{title:"2015-11",content:"技术测试"},{title:"2015-12",content:"修复完成"}];return(a,p)=>(m(),b(l(r),{orientation:"horizontal",items:e}))}}),kn=`<template>
  <Timeline orientation="horizontal" :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { title: '2015-09', content: '创建服务' },
  { title: '2015-10', content: '排除异常' },
  { title: '2015-11', content: '技术测试' },
  { title: '2015-12', content: '修复完成' },
]
<\/script>
`,gn=u({__name:"TimelineLoading",setup(n){const e=[{content:"创建服务现场",loading:!0},{content:"初步排除网络异常",color:"green"},{content:"技术测试异常",color:"red"}];return(a,p)=>(m(),b(l(r),{items:e}))}}),fn=`<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { content: '创建服务现场', loading: true },
  { content: '初步排除网络异常', color: 'green' },
  { content: '技术测试异常', color: 'red' },
]
<\/script>
`,bn=u({__name:"TimelinePending",setup(n){const e=[{content:"创建服务现场 2015-09-01"},{content:"初步排除网络异常 2015-09-01"},{content:"技术测试异常 2015-09-01"}];return(a,p)=>(m(),b(l(r),{items:e,pending:"记录中..."}))}}),yn=`<template>
  <Timeline :items="items" pending="记录中..." />
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { content: '创建服务现场 2015-09-01' },
  { content: '初步排除网络异常 2015-09-01' },
  { content: '技术测试异常 2015-09-01' },
]
<\/script>
`,hn={style:{display:"flex",gap:"32px"}},xn=u({__name:"TimelineVariant",setup(n){const e=[{content:"成功事件",color:"green"},{content:"进行中",color:"blue"},{content:"失败事件",color:"red"}];return(a,p)=>(m(),T("div",hn,[s("div",null,[p[0]||(p[0]=s("h4",null,"Outlined (默认)",-1)),o(l(r),{items:e})]),s("div",null,[p[1]||(p[1]=s("h4",null,"Filled",-1)),o(l(r),{items:e,variant:"filled"})])]))}}),vn=`<template>
  <div style="display: flex; gap: 32px">
    <div>
      <h4>Outlined (默认)</h4>
      <Timeline :items="items" />
    </div>
    <div>
      <h4>Filled</h4>
      <Timeline :items="items" variant="filled" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { content: '成功事件', color: 'green' },
  { content: '进行中', color: 'blue' },
  { content: '失败事件', color: 'red' },
]
<\/script>
`,wn={class:"markdown-body"},Nn={__name:"timeline",setup(n,{expose:e}){return e({frontmatter:{}}),(p,t)=>{const d=J("DemoBlock");return m(),T("div",wn,[t[0]||(t[0]=s("h1",{id:"timeline-时间轴",tabindex:"-1"},"Timeline 时间轴",-1)),t[1]||(t[1]=s("p",null,"垂直展示的时间流信息。",-1)),t[2]||(t[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=s("ul",null,[s("li",null,"当有一系列信息需按时间排列时"),s("li",null,"需要有一条时间轴进行视觉上的串联时")],-1)),t[4]||(t[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=s("p",null,"基本的时间轴。",-1)),o(d,{title:"基础用法",source:l(on)},{default:k(()=>[o(en)]),_:1},8,["source"]),t[7]||(t[7]=s("h3",{id:"交替展示",tabindex:"-1"},"交替展示",-1)),t[8]||(t[8]=s("p",null,"内容在时间轴两侧交替出现。",-1)),o(d,{title:"交替展示",source:l(an)},{default:k(()=>[o(sn)]),_:1},8,["source"]),t[9]||(t[9]=s("h3",{id:"自定义颜色",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=s("p",null,"可以设置为 red、green、blue、gray，或者自定义颜色。",-1)),o(d,{title:"自定义颜色",source:l(un)},{default:k(()=>[o(dn)]),_:1},8,["source"]),t[11]||(t[11]=s("h3",{id:"等待中",tabindex:"-1"},"等待中",-1)),t[12]||(t[12]=s("p",null,"当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点。",-1)),o(d,{title:"等待中",source:l(yn)},{default:k(()=>[o(bn)]),_:1},8,["source"]),t[13]||(t[13]=s("h3",{id:"加载状态",tabindex:"-1"},"加载状态",-1)),t[14]||(t[14]=s("p",null,[g("设置 "),s("code",null,"loading"),g(" 属性显示加载中的图标。")],-1)),o(d,{title:"加载状态",source:l(fn)},{default:k(()=>[o(gn)]),_:1},8,["source"]),t[15]||(t[15]=s("h3",{id:"变体样式",tabindex:"-1"},"变体样式",-1)),t[16]||(t[16]=s("p",null,[g("可以设置为 "),s("code",null,"outlined"),g("（默认）或 "),s("code",null,"filled"),g(" 样式。")],-1)),o(d,{title:"变体样式",source:l(vn)},{default:k(()=>[o(xn)]),_:1},8,["source"]),t[17]||(t[17]=s("h3",{id:"水平布局",tabindex:"-1"},"水平布局",-1)),t[18]||(t[18]=s("p",null,"时间轴可以水平展示。",-1)),o(d,{title:"水平布局",source:l(kn)},{default:k(()=>[o(mn)]),_:1},8,["source"]),t[19]||(t[19]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[20]||(t[20]=s("p",null,[g("通过 "),s("code",null,"classNames"),g(" / "),s("code",null,"styles"),g(" 对各子元素做细粒度样式控制。")],-1)),o(d,{title:"语义化 className 与 style",source:l(rn)},{default:k(()=>[o(cn)]),_:1},8,["source"]),t[21]||(t[21]=K(`<h2 id="api" tabindex="-1">API</h2><h3 id="timeline-props" tabindex="-1">Timeline Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>选项配置</td><td><code>TimelineItemProps[]</code></td><td>-</td></tr><tr><td>mode</td><td>通过设置 mode 可以改变时间轴和内容的相对位置</td><td><code>&#39;left&#39; | &#39;right&#39; | &#39;start&#39; | &#39;end&#39; | &#39;alternate&#39;</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>orientation</td><td>设置时间轴的方向</td><td><code>&#39;vertical&#39; | &#39;horizontal&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>variant</td><td>设置样式变体</td><td><code>&#39;outlined&#39; | &#39;filled&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>reverse</td><td>节点排序</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>titleSpan</td><td>设置标题占比空间（到 dot 中心点距离）</td><td><code>number | string</code></td><td>-</td></tr><tr><td>pending</td><td>指定最后一个幽灵节点是否存在或内容（已废弃，建议使用 items 中的 loading）</td><td><code>boolean | string | VNode</code></td><td>-</td></tr><tr><td>pendingDot</td><td>当最后一个幽灵节点存在时，指定其时间图点（已废弃）</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TimelineClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TimelineStyles</code></td><td>-</td></tr></tbody></table><h3 id="timelineitemprops" tabindex="-1">TimelineItemProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>设置标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>content</td><td>设置内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>icon</td><td>自定义节点图标</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>placement</td><td>自定义节点位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td>-</td></tr><tr><td>loading</td><td>设置加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>指定圆圈颜色</td><td><code>&#39;blue&#39; | &#39;red&#39; | &#39;green&#39; | &#39;gray&#39; | string</code></td><td><code>&#39;blue&#39;</code></td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr><tr><td>label</td><td>设置标签（已废弃，使用 title）</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>children</td><td>内容（已废弃，使用 content）</td><td><code>unknown</code></td><td>-</td></tr><tr><td>dot</td><td>自定义时间轴点（已废弃，使用 icon）</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>position</td><td>自定义节点位置（已废弃，使用 placement）</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Timeline 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TimelineClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 时间轴根容器 ul.hmfw-timeline</span>
  item<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 时间轴项 li.hmfw-timeline-item</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题/标签 div.hmfw-timeline-item-label</span>
  tail<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 连接线 div.hmfw-timeline-item-tail</span>
  dot<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 时间节点/圆点 div.hmfw-timeline-item-head</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容区域 div.hmfw-timeline-item-content</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TimelineStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  item<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  label<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  tail<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dot<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-timeline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-timeline-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.item / styles.item 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-timeline-item-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.label / styles.label 应用于此 --&gt;</span>
      标题
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-timeline-item-tail<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.tail / styles.tail 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-timeline-item-head<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.dot / styles.dot 应用于此 --&gt;</span>
      节点图标
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-timeline-item-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
      内容
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义连接线和节点 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      tail: &#39;custom-tail&#39;,
      dot: &#39;custom-dot&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义标题和内容 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span>
    <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alternate<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>labeledItems<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      label: &#39;custom-label&#39;,
      content: &#39;custom-content&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合自定义所有子元素 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;timeline-fancy&#39;,
      item: &#39;timeline-fancy-item&#39;,
      label: &#39;timeline-fancy-label&#39;,
      tail: &#39;timeline-fancy-tail&#39;,
      dot: &#39;timeline-fancy-dot&#39;,
      content: &#39;timeline-fancy-content&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.custom-tail)</span> <span class="token punctuation">{</span>
  <span class="token property">border-left-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">border-left-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-dot)</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 8px <span class="token function">rgba</span><span class="token punctuation">(</span>24<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-label)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #e6f7ff 0%<span class="token punctuation">,</span> #bae7ff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 4px 12px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-content)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f0f5ff<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px 16px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> 3px solid #1890ff<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.timeline-fancy)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #f0f5ff<span class="token punctuation">,</span> #fff<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.timeline-fancy-dot)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 3px solid #667eea<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 4px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制各子元素 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { padding: &#39;16px&#39;, backgroundColor: &#39;#f0f5ff&#39;, borderRadius: &#39;8px&#39; },
      dot: { transform: &#39;scale(1.2)&#39; },
      content: { fontSize: &#39;15px&#39;, fontWeight: 500 },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义连接线样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      tail: { borderLeftWidth: &#39;3px&#39;, borderLeftStyle: &#39;dashed&#39; },
      label: { fontWeight: 600, color: &#39;#1890ff&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 水平布局自定义 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span>
    <span class="token attr-name">orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>horizontal<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>items<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { padding: &#39;24px&#39;, backgroundColor: &#39;#f6ffed&#39;, borderRadius: &#39;12px&#39; },
      dot: { transform: &#39;scale(1.3)&#39;, boxShadow: &#39;0 0 12px rgba(82, 196, 26, 0.5)&#39; },
      content: { padding: &#39;8px 16px&#39;, fontWeight: 500 },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.item</code> / <code>styles.item</code> 应用于每个时间轴节点，会与 <code>items[i].className</code> / <code>items[i].style</code> 合并</li><li><code>classNames.label</code> / <code>styles.label</code> 仅在设置了 <code>title</code> 或 <code>label</code> 属性的项上生效</li><li><code>classNames.dot</code> / <code>styles.dot</code> 会与 <code>items[i].style</code> 合并应用到节点圆点上</li><li><code>classNames.tail</code> 作用于连接线，可用于自定义线型（虚线、点线）、颜色、粗细</li><li>水平布局（<code>orientation=&quot;horizontal&quot;</code>）和垂直布局的 DOM 结构相同，但样式应用效果不同，需分别调试</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Timeline 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-success</code></td><td>成功状态色</td><td><code>#52c41a</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-timeline-title-span</code></td><td>标题占比空间</td><td>根据 titleSpan 设置</td></tr></tbody></table>`,23))])}}};export{Nn as default};
