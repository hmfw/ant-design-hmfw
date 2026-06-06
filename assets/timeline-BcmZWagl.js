import{m as P}from"./icons-CwohsDOf.js";import{m,L as j,l as d,C as F,F as z,y as u,g,I as s,i as C,f as i,E as A,P as p,k as f,j as D}from"./index-Qxz1plB-.js";import{c as v}from"./cls-S9IiI6wd.js";import{I as L}from"./Icon-BOXWN2fu.js";function E(e){return e==="left"?"start":e==="right"?"end":e==="start"||e==="end"||e==="alternate"?e:"start"}function H(e,o,n){return e.placement?e.placement:e.position==="left"?"start":e.position==="right"?"end":n==="alternate"?o%2===0?"start":"end":n}function N(e){if(!e)return[];const o=[];for(const n of e)if(n&&n.type!==F){if(n.type===z&&Array.isArray(n.children)){o.push(...N(n.children));continue}n.props&&o.push(n.props)}return o}const M=m({name:"TimelineItem",props:{title:[String,Object],content:[String,Object],icon:[String,Object],placement:String,loading:Boolean,label:[String,Object],children:null,dot:[String,Object],position:String,color:String,className:String,style:Object},setup(e,{slots:o}){return()=>{var n;return(n=o.default)==null?void 0:n.call(o)}}}),q=m({name:"Timeline",props:{items:Array,mode:{type:String,default:"left"},orientation:{type:String,default:"vertical"},variant:{type:String,default:"outlined"},reverse:Boolean,titleSpan:[Number,String],pending:[Boolean,String,Object],pendingDot:[String,Object]},setup(e,{slots:o}){const n=j("timeline");return()=>{const l=E(e.mode);let t=[];if(e.items)t=[...e.items];else if(o.default){const r=o.default();t=N(r)}if(e.pending){const r=typeof e.pending=="string"?e.pending:e.pending===!0?void 0:e.pending;t.push({content:r,icon:e.pendingDot,loading:!e.pendingDot,color:"gray"})}const c=e.reverse?[...t].reverse():t,w=v(n,{[`${n}-${e.orientation}`]:e.orientation==="horizontal",[`${n}-${l}`]:l!=="start",[`${n}-${e.variant}`]:e.variant!=="outlined",[`${n}-pending`]:!!e.pending,[`${n}-reverse`]:e.reverse}),T={};return e.titleSpan!==void 0&&l!=="alternate"&&(typeof e.titleSpan=="number"?T["--hmfw-timeline-title-span"]=`${e.titleSpan}px`:T["--hmfw-timeline-title-span"]=e.titleSpan),d("ul",{class:w,style:T},[c.map((r,y)=>{const I=y===c.length-1,x=H(r,y,l),$=r.title??r.label,V=r.content??r.children;let b=r.icon??r.dot;r.loading&&!b&&(b=d(L,{component:P,spin:!0},null));const h=r.color??"blue",S=["blue","red","green","gray"].includes(h),k=!!b||r.loading,B=v(`${n}-item`,{[`${n}-item-last`]:I,[`${n}-item-${x}`]:x==="end",[`${n}-item-loading`]:r.loading},r.className),O=v(`${n}-item-head`,{[`${n}-item-head-${h}`]:S,[`${n}-item-head-custom`]:k||!S}),_={...r.style};return S||(_.borderColor=h,_.color=h),d("li",{key:r.key??y,class:B},[$&&d("div",{class:`${n}-item-label`},[$]),d("div",{class:`${n}-item-tail`},null),d("div",{class:O,style:_},[b]),d("div",{class:`${n}-item-content`},[V])])})])}}}),a=q;a.Item=M;const G=m({__name:"TimelineAlternate",setup(e){const o=[{content:"创建服务现场 2015-09-01"},{content:"初步排除网络异常 2015-09-01"},{content:"技术测试异常 2015-09-01"},{content:"网络异常正在修复 2015-09-01"}];return(n,l)=>(u(),g(s(a),{mode:"alternate",items:o}))}}),J=`<template>
  <Timeline mode="alternate" :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { content: '创建服务现场 2015-09-01' },
  { content: '初步排除网络异常 2015-09-01' },
  { content: '技术测试异常 2015-09-01' },
  { content: '网络异常正在修复 2015-09-01' },
]
<\/script>

`,K=m({__name:"TimelineBasic",setup(e){const o=[{content:"创建服务现场 2015-09-01"},{content:"初步排除网络异常 2015-09-01"},{content:"技术测试异常 2015-09-01"},{content:"网络异常正在修复 2015-09-01"}];return(n,l)=>(u(),g(s(a),{items:o}))}}),Q=`<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { content: '创建服务现场 2015-09-01' },
  { content: '初步排除网络异常 2015-09-01' },
  { content: '技术测试异常 2015-09-01' },
  { content: '网络异常正在修复 2015-09-01' },
]
<\/script>

`,R=m({__name:"TimelineCustomColor",setup(e){const o=[{content:"成功事件",color:"green"},{content:"失败事件",color:"red"},{content:"警告事件",color:"gray"},{content:"自定义颜色",color:"#00CCFF"}];return(n,l)=>(u(),g(s(a),{items:o}))}}),U=`<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { content: '成功事件', color: 'green' },
  { content: '失败事件', color: 'red' },
  { content: '警告事件', color: 'gray' },
  { content: '自定义颜色', color: '#00CCFF' },
]
<\/script>

`,W=m({__name:"TimelineHorizontal",setup(e){const o=[{title:"2015-09",content:"创建服务"},{title:"2015-10",content:"排除异常"},{title:"2015-11",content:"技术测试"},{title:"2015-12",content:"修复完成"}];return(n,l)=>(u(),g(s(a),{orientation:"horizontal",items:o}))}}),X=`<template>
  <Timeline orientation="horizontal" :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { title: '2015-09', content: '创建服务' },
  { title: '2015-10', content: '排除异常' },
  { title: '2015-11', content: '技术测试' },
  { title: '2015-12', content: '修复完成' },
]
<\/script>
`,Y=m({__name:"TimelineLoading",setup(e){const o=[{content:"创建服务现场",loading:!0},{content:"初步排除网络异常",color:"green"},{content:"技术测试异常",color:"red"}];return(n,l)=>(u(),g(s(a),{items:o}))}}),Z=`<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'
import { h } from 'vue'

const items = [
  { content: '创建服务现场', loading: true },
  { content: '初步排除网络异常', color: 'green' },
  { content: '技术测试异常', color: 'red' },
]
<\/script>
`,tt=m({__name:"TimelinePending",setup(e){const o=[{content:"创建服务现场 2015-09-01"},{content:"初步排除网络异常 2015-09-01"},{content:"技术测试异常 2015-09-01"}];return(n,l)=>(u(),g(s(a),{items:o,pending:"记录中..."}))}}),et=`<template>
  <Timeline :items="items" pending="记录中..." />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { content: '创建服务现场 2015-09-01' },
  { content: '初步排除网络异常 2015-09-01' },
  { content: '技术测试异常 2015-09-01' },
]
<\/script>
`,nt={style:{display:"flex",gap:"32px"}},ot=m({__name:"TimelineVariant",setup(e){const o=[{content:"成功事件",color:"green"},{content:"进行中",color:"blue"},{content:"失败事件",color:"red"}];return(n,l)=>(u(),C("div",nt,[i("div",null,[l[0]||(l[0]=i("h4",null,"Outlined (默认)",-1)),d(s(a),{items:o})]),i("div",null,[l[1]||(l[1]=i("h4",null,"Filled",-1)),d(s(a),{items:o,variant:"filled"})])]))}}),it=`<template>
  <div style="display: flex; gap: 32px;">
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
import { Timeline } from 'ant-design-hmfw'

const items = [
  { content: '成功事件', color: 'green' },
  { content: '进行中', color: 'blue' },
  { content: '失败事件', color: 'red' },
]
<\/script>
`,dt={class:"markdown-body"},at={__name:"timeline",setup(e,{expose:o}){return o({frontmatter:{}}),(l,t)=>{const c=A("DemoBlock");return u(),C("div",dt,[t[0]||(t[0]=i("h1",{id:"timeline-",tabindex:"-1"},"Timeline 时间轴",-1)),t[1]||(t[1]=i("p",null,"垂直展示的时间流信息。",-1)),t[2]||(t[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=i("ul",null,[i("li",null,"当有一系列信息需按时间排列时"),i("li",null,"需要有一条时间轴进行视觉上的串联时")],-1)),t[4]||(t[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=i("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=i("p",null,"基本的时间轴。",-1)),d(c,{title:"基础用法",source:s(Q)},{default:p(()=>[d(K)]),_:1},8,["source"]),t[7]||(t[7]=i("h3",{id:"-3",tabindex:"-1"},"交替展示",-1)),t[8]||(t[8]=i("p",null,"内容在时间轴两侧交替出现。",-1)),d(c,{title:"交替展示",source:s(J)},{default:p(()=>[d(G)]),_:1},8,["source"]),t[9]||(t[9]=i("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=i("p",null,"可以设置为 red、green、blue、gray，或者自定义颜色。",-1)),d(c,{title:"自定义颜色",source:s(U)},{default:p(()=>[d(R)]),_:1},8,["source"]),t[11]||(t[11]=i("h3",{id:"-5",tabindex:"-1"},"等待中",-1)),t[12]||(t[12]=i("p",null,"当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点。",-1)),d(c,{title:"等待中",source:s(et)},{default:p(()=>[d(tt)]),_:1},8,["source"]),t[13]||(t[13]=i("h3",{id:"-6",tabindex:"-1"},"加载状态",-1)),t[14]||(t[14]=i("p",null,[f("设置 "),i("code",null,"loading"),f(" 属性显示加载中的图标。")],-1)),d(c,{title:"加载状态",source:s(Z)},{default:p(()=>[d(Y)]),_:1},8,["source"]),t[15]||(t[15]=i("h3",{id:"-7",tabindex:"-1"},"变体样式",-1)),t[16]||(t[16]=i("p",null,[f("可以设置为 "),i("code",null,"outlined"),f("（默认）或 "),i("code",null,"filled"),f(" 样式。")],-1)),d(c,{title:"变体样式",source:s(it)},{default:p(()=>[d(ot)]),_:1},8,["source"]),t[17]||(t[17]=i("h3",{id:"-8",tabindex:"-1"},"水平布局",-1)),t[18]||(t[18]=i("p",null,"时间轴可以水平展示。",-1)),d(c,{title:"水平布局",source:s(X)},{default:p(()=>[d(W)]),_:1},8,["source"]),t[19]||(t[19]=D('<h2 id="api" tabindex="-1">API</h2><h3 id="timeline-props" tabindex="-1">Timeline Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>items</td><td>选项配置</td><td><code>TimelineItemProps[]</code></td><td>-</td></tr><tr><td>mode</td><td>通过设置 mode 可以改变时间轴和内容的相对位置</td><td><code>&#39;left&#39; | &#39;right&#39; | &#39;start&#39; | &#39;end&#39; | &#39;alternate&#39;</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>orientation</td><td>设置时间轴的方向</td><td><code>&#39;vertical&#39; | &#39;horizontal&#39;</code></td><td><code>&#39;vertical&#39;</code></td></tr><tr><td>variant</td><td>设置样式变体</td><td><code>&#39;outlined&#39; | &#39;filled&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>reverse</td><td>节点排序</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>titleSpan</td><td>设置标题占比空间（到 dot 中心点距离）</td><td><code>number | string</code></td><td>-</td></tr><tr><td>pending</td><td>指定最后一个幽灵节点是否存在或内容（已废弃，建议使用 items 中的 loading）</td><td><code>boolean | string | VNode</code></td><td>-</td></tr><tr><td>pendingDot</td><td>当最后一个幽灵节点存在时，指定其时间图点（已废弃）</td><td><code>string | VNode</code></td><td>-</td></tr></tbody></table><h3 id="timelineitemprops" tabindex="-1">TimelineItemProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>设置标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>content</td><td>设置内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>icon</td><td>自定义节点图标</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>placement</td><td>自定义节点位置</td><td><code>&#39;start&#39; | &#39;end&#39;</code></td><td>-</td></tr><tr><td>loading</td><td>设置加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>color</td><td>指定圆圈颜色</td><td><code>&#39;blue&#39; | &#39;red&#39; | &#39;green&#39; | &#39;gray&#39; | string</code></td><td><code>&#39;blue&#39;</code></td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>key</td><td>唯一标识</td><td><code>string | number</code></td><td>-</td></tr><tr><td>label</td><td>设置标签（已废弃，使用 title）</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>children</td><td>内容（已废弃，使用 content）</td><td><code>unknown</code></td><td>-</td></tr><tr><td>dot</td><td>自定义时间轴点（已废弃，使用 icon）</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>position</td><td>自定义节点位置（已废弃，使用 placement）</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td>-</td></tr></tbody></table>',5))])}}};export{at as default};
