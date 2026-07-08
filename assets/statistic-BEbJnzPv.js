import{S as V}from"./Space-BXsqDMEi.js";import{S as L}from"./index-BQGxfreX.js";import{d as y,u as W,x as U,c as n,m as Y,k as G,l as J,r as w,o as h,b as q,e as p,w as k,_ as N,f as o,v as F,g as b,A as K,h as Q,i as X}from"./index-BOp1Gurx.js";import{c as i}from"./cls-S9IiI6wd.js";import{m as Z}from"./message-Cz_nqXlN.js";import{B as tt}from"./Button-Ddb1eo4r.js";import"./LoadingOutlined-DpyU4f5h.js";import"./CheckCircleFilled-Bro5_HTc.js";import"./CloseCircleFilled-C-P4KiXU.js";import"./ExclamationCircleFilled-C3TwJkTP.js";import"./InfoCircleFilled-CvkR71VK.js";function nt(t,e,a=",",c="."){if(t==null||t==="")return"";const s=typeof t=="string"?parseFloat(t):t;if(isNaN(s))return String(t);const d=(e!==void 0?s.toFixed(e):String(s)).split("."),f=d[0],m=d[1],g=f.replace(/\B(?=(\d{3})+(?!\d))/g,a);return m!==void 0?`${g}${c}${m}`:g}const u=y({name:"Statistic",props:{title:[String,Object],value:[String,Number],precision:Number,prefix:[String,Object],suffix:[String,Object],valueStyle:Object,groupSeparator:{type:String,default:","},decimalSeparator:{type:String,default:"."},loading:Boolean,valueRender:Function,classNames:Object,styles:Object},setup(t){const e=W("statistic"),a=U();return()=>{var l,d,f,m,g,v,x,r,S,_,C,D,$,H,z,B;if(t.loading)return n("div",{class:i(e,(l=t.classNames)==null?void 0:l.root,{[`${e}-rtl`]:a.value.direction==="rtl"}),style:(d=t.styles)==null?void 0:d.root},[t.title&&n("div",{class:i(`${e}-title`,(f=t.classNames)==null?void 0:f.title),style:(m=t.styles)==null?void 0:m.title},[t.title]),n(L,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}},null)]);const c=nt(t.value,t.precision,t.groupSeparator,t.decimalSeparator),s=()=>t.valueRender?t.valueRender(c):c;return n("div",{class:i(e,(g=t.classNames)==null?void 0:g.root,{[`${e}-rtl`]:a.value.direction==="rtl"}),style:(v=t.styles)==null?void 0:v.root},[t.title&&n("div",{class:i(`${e}-title`,(x=t.classNames)==null?void 0:x.title),style:(r=t.styles)==null?void 0:r.title},[t.title]),n("div",{class:i(`${e}-content`,(S=t.classNames)==null?void 0:S.content),style:{...t.valueStyle,...(_=t.styles)==null?void 0:_.content}},[t.prefix&&n("span",{class:i(`${e}-content-prefix`,(C=t.classNames)==null?void 0:C.prefix),style:(D=t.styles)==null?void 0:D.prefix},[t.prefix]),n("span",{class:i(`${e}-content-value`,($=t.classNames)==null?void 0:$.value),style:(H=t.styles)==null?void 0:H.value},[s()]),t.suffix&&n("span",{class:i(`${e}-content-suffix`,(z=t.classNames)==null?void 0:z.suffix),style:(B=t.styles)==null?void 0:B.suffix},[t.suffix])])])}}});function st(t,e="HH:mm:ss"){if(t<=0)return e.replace(/Y+|M+|D+|H+|m+|s+|S+/g,v=>"0".repeat(v.length));const a=Math.floor(t/1e3),c=Math.floor(a/60),s=Math.floor(c/60),l=Math.floor(s/24),d=a%60,f=c%60,m=s%24,g={DD:String(l).padStart(2,"0"),D:String(l),HH:String(m).padStart(2,"0"),H:String(m),mm:String(f).padStart(2,"0"),m:String(f),ss:String(d).padStart(2,"0"),s:String(d),SSS:String(t%1e3).padStart(3,"0")};return e.replace(/DD|D|HH|H|mm|m|ss|s|SSS/g,v=>g[v]??v)}const P=y({name:"Countdown",props:{title:[String,Object],value:[Number,Date],format:{type:String,default:"HH:mm:ss"},prefix:[String,Object],suffix:[String,Object],valueStyle:Object,loading:Boolean,valueRender:Function,classNames:Object,styles:Object,onFinish:Function,onChange:Function},setup(t,{emit:e}){const a=W("statistic"),c=U(),s=w(0);let l=null,d=0;const f=()=>{if(!t.value)return 0;const x=t.value instanceof Date?t.value.getTime():t.value,r=Date.now();return Math.max(0,x-r)},m=x=>{var S;const r=f();if(s.value=r,t.onChange&&r!==d&&(t.onChange(r),d=r),r<=0){l!==null&&(cancelAnimationFrame(l),l=null),(S=t.onFinish)==null||S.call(t),e("finish");return}l=requestAnimationFrame(m)},g=()=>{l!==null&&cancelAnimationFrame(l),s.value=f(),d=s.value,l=requestAnimationFrame(m)},v=()=>{l!==null&&(cancelAnimationFrame(l),l=null)};return Y(()=>t.value,()=>{g()}),G(()=>{g()}),J(()=>{v()}),()=>{var S,_,C,D,$,H,z,B,R,O,j,A,E,I,M,T;if(t.loading)return n("div",{class:i(a,(S=t.classNames)==null?void 0:S.root,{[`${a}-rtl`]:c.value.direction==="rtl"}),style:(_=t.styles)==null?void 0:_.root},[t.title&&n("div",{class:i(`${a}-title`,(C=t.classNames)==null?void 0:C.title),style:(D=t.styles)==null?void 0:D.title},[t.title]),n(L,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}},null)]);const x=st(s.value,t.format),r=()=>t.valueRender?t.valueRender(x):x;return n("div",{class:i(a,`${a}-countdown`,($=t.classNames)==null?void 0:$.root,{[`${a}-rtl`]:c.value.direction==="rtl"}),style:(H=t.styles)==null?void 0:H.root},[t.title&&n("div",{class:i(`${a}-title`,(z=t.classNames)==null?void 0:z.title),style:(B=t.styles)==null?void 0:B.title},[t.title]),n("div",{class:i(`${a}-content`,(R=t.classNames)==null?void 0:R.content),style:{...t.valueStyle,...(O=t.styles)==null?void 0:O.content}},[t.prefix&&n("span",{class:i(`${a}-content-prefix`,(j=t.classNames)==null?void 0:j.prefix),style:(A=t.styles)==null?void 0:A.prefix},[t.prefix]),n("span",{class:i(`${a}-content-value`,(E=t.classNames)==null?void 0:E.value),style:(I=t.styles)==null?void 0:I.value},[r()]),t.suffix&&n("span",{class:i(`${a}-content-suffix`,(M=t.classNames)==null?void 0:M.suffix),style:(T=t.styles)==null?void 0:T.suffix},[t.suffix])])])}}}),at={class:"statistic-demo"},et=y({__name:"StatisticBasic",setup(t){return(e,a)=>(h(),q("div",at,[n(p(V),{size:32},{default:k(()=>[n(p(u),{title:"用户数",value:112893}),n(p(u),{title:"账户余额（元）",value:112893,precision:2}),n(p(u),{title:"活跃用户",value:93,suffix:"/ 100"})]),_:1})]))}}),ot=N(et,[["__scopeId","data-v-a78806ac"]]),pt=`<template>
  <div class="statistic-demo">
    <Space :size="32">
      <Statistic title="用户数" :value="112893" />
      <Statistic title="账户余额（元）" :value="112893" :precision="2" />
      <Statistic title="活跃用户" :value="93" suffix="/ 100" />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Statistic, Space } from '@hmfw/ant-design'
<\/script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
`,lt={style:{display:"flex","flex-direction":"column",gap:"24px"}},ct=y({__name:"StatisticClassNames",setup(t){return(e,a)=>(h(),q("div",lt,[o("div",null,[a[0]||(a[0]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器：",-1)),n(p(u),{title:"活跃用户",value:93185,"class-names":{root:"custom-root"},prefix:"👥"})]),o("div",null,[a[1]||(a[1]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义标题与数值：",-1)),n(p(u),{title:"总销售额",value:123456789e-2,precision:2,"class-names":{title:"custom-title",value:"custom-value"},prefix:"¥"})]),o("div",null,[a[2]||(a[2]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义前缀和后缀：",-1)),n(p(u),{title:"增长率",value:28.5,precision:1,"class-names":{prefix:"custom-prefix",suffix:"custom-suffix"},prefix:"📈",suffix:"%"})]),o("div",null,[a[3]||(a[3]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义：",-1)),n(p(u),{title:"在线人数",value:8888,"class-names":{root:"combined-root",title:"combined-title",content:"combined-content",value:"combined-value"},suffix:"人"})]),o("div",null,[a[4]||(a[4]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),n(p(u),{title:"转化率",value:12.8,precision:1,styles:{root:{padding:"16px",borderRadius:"8px",background:"linear-gradient(135deg, #f6d365 0%, #fda085 100%)"},title:{fontWeight:"bold",color:"#8b4513"},value:{fontSize:"28px",color:"#fff"},suffix:{color:"#fff",fontSize:"18px"}},suffix:"%"})])]))}}),it=N(ct,[["__scopeId","data-v-26e373e7"]]),ut=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器：</div>
      <Statistic title="活跃用户" :value="93185" :class-names="{ root: 'custom-root' }" prefix="👥" />
    </div>

    <!-- 场景 2：自定义标题与数值样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义标题与数值：</div>
      <Statistic
        title="总销售额"
        :value="1234567.89"
        :precision="2"
        :class-names="{
          title: 'custom-title',
          value: 'custom-value',
        }"
        prefix="¥"
      />
    </div>

    <!-- 场景 3：自定义前缀和后缀样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义前缀和后缀：</div>
      <Statistic
        title="增长率"
        :value="28.5"
        :precision="1"
        :class-names="{
          prefix: 'custom-prefix',
          suffix: 'custom-suffix',
        }"
        prefix="📈"
        suffix="%"
      />
    </div>

    <!-- 场景 4：组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义：</div>
      <Statistic
        title="在线人数"
        :value="8888"
        :class-names="{
          root: 'combined-root',
          title: 'combined-title',
          content: 'combined-content',
          value: 'combined-value',
        }"
        suffix="人"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Statistic
        title="转化率"
        :value="12.8"
        :precision="1"
        :styles="{
          root: {
            padding: '16px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
          },
          title: { fontWeight: 'bold', color: '#8b4513' },
          value: { fontSize: '28px', color: '#fff' },
          suffix: { color: '#fff', fontSize: '18px' },
        }"
        suffix="%"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Statistic } from '@hmfw/ant-design'
<\/script>

<style scoped>
/* 场景 1：渐变背景根容器 */
:deep(.custom-root) {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

:deep(.custom-root .hmfw-statistic-title) {
  color: rgba(255, 255, 255, 0.85);
}

:deep(.custom-root .hmfw-statistic-content) {
  color: #fff;
}

/* 场景 2：自定义标题和数值 */
:deep(.custom-title) {
  font-size: 16px;
  font-weight: bold;
  color: #1890ff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

:deep(.custom-value) {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 场景 3：自定义前缀和后缀 */
:deep(.custom-prefix) {
  font-size: 24px;
  margin-right: 8px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

:deep(.custom-suffix) {
  color: #52c41a;
  font-weight: bold;
  font-size: 20px;
  margin-left: 4px;
}

/* 场景 4：组合样式 */
:deep(.combined-root) {
  padding: 16px 24px;
  background: linear-gradient(to right, #f0f5ff, #e6f7ff);
  border: 2px solid #1890ff;
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.combined-root:hover) {
  border-color: #096dd9;
  box-shadow: 0 4px 16px rgba(24, 144, 255, 0.3);
}

:deep(.combined-title) {
  color: #096dd9;
  font-weight: 600;
}

:deep(.combined-content) {
  margin-top: 8px;
}

:deep(.combined-value) {
  font-size: 36px;
  color: #1890ff;
  font-weight: bold;
}
</style>
`,dt={class:"statistic-demo"},rt=y({__name:"StatisticCountdown",setup(t){const e=w(Date.now()+72e5),a=w(Date.now()+1e3*60*60*24*2+1e3*30*30),c=w(Date.now()+1e3*10),s=()=>{Z.success("倒计时结束！")};return(l,d)=>(h(),q("div",dt,[n(p(V),{direction:"vertical",size:16},{default:k(()=>[n(p(P),{title:"倒计时",value:e.value,format:"HH:mm:ss"},null,8,["value"]),n(p(P),{title:"天数倒计时",value:a.value,format:"DD 天 HH 时 mm 分 ss 秒"},null,8,["value"]),n(p(P),{title:"毫秒倒计时",value:c.value,format:"HH:mm:ss:SSS",onFinish:s},null,8,["value"])]),_:1})]))}}),kt=N(rt,[["__scopeId","data-v-b242e756"]]),mt=`<template>
  <div class="statistic-demo">
    <Space direction="vertical" :size="16">
      <Countdown title="倒计时" :value="deadline" format="HH:mm:ss" />
      <Countdown title="天数倒计时" :value="deadline2" format="DD 天 HH 时 mm 分 ss 秒" />
      <Countdown title="毫秒倒计时" :value="deadline3" format="HH:mm:ss:SSS" @finish="onFinish" />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Countdown, Space, message } from '@hmfw/ant-design'

const deadline = ref(Date.now() + 1000 * 60 * 60 * 2) // 2小时后
const deadline2 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 * 30) // 2天半后
const deadline3 = ref(Date.now() + 1000 * 10) // 10秒后

const onFinish = () => {
  message.success('倒计时结束！')
}
<\/script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
`,ft={class:"statistic-demo"},gt=y({__name:"StatisticCustom",setup(t){const e=a=>F("span",{style:{color:"#cf1322",fontWeight:"bold"}},[F("span","💰 "),a,F("span"," 元")]);return(a,c)=>(h(),q("div",ft,[n(p(V),{size:32},{default:k(()=>[n(p(u),{title:"自定义渲染",value:112893,"value-render":e}),n(p(u),{title:"增长率",value:9.3,precision:2,suffix:"%","value-style":{color:"#3f8600"},prefix:F("span",{style:{color:"#3f8600"}},"↑")},null,8,["prefix"])]),_:1})]))}}),vt=N(gt,[["__scopeId","data-v-3b67ebae"]]),xt=`<template>
  <div class="statistic-demo">
    <Space :size="32">
      <Statistic title="自定义渲染" :value="112893" :value-render="customRender" />
      <Statistic
        title="增长率"
        :value="9.3"
        :precision="2"
        suffix="%"
        :value-style="{ color: '#3f8600' }"
        :prefix="h('span', { style: { color: '#3f8600' } }, '↑')"
      />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Statistic, Space } from '@hmfw/ant-design'

const customRender = (value: string) => {
  return h('span', { style: { color: '#cf1322', fontWeight: 'bold' } }, [h('span', '💰 '), value, h('span', ' 元')])
}
<\/script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
`,St={class:"statistic-demo"},bt={style:{"margin-top":"16px"}},yt=y({__name:"StatisticLoading",setup(t){const e=w(!0),a=w(112893),c=()=>{e.value=!e.value};return(s,l)=>(h(),q("div",St,[n(p(V),{size:32},{default:k(()=>[n(p(u),{title:"用户数",value:a.value,loading:e.value},null,8,["value","loading"]),n(p(u),{title:"活跃用户",value:93,suffix:"/ 100",loading:e.value},null,8,["loading"]),n(p(P),{title:"倒计时",value:Date.now()+6e4,loading:e.value},null,8,["value","loading"])]),_:1}),o("div",bt,[n(p(tt),{onClick:c},{default:k(()=>[b(K(e.value?"显示内容":"显示加载"),1)]),_:1})])]))}}),ht=N(yt,[["__scopeId","data-v-6eca9204"]]),qt=`<template>
  <div class="statistic-demo">
    <Space :size="32">
      <Statistic title="用户数" :value="value" :loading="loading" />
      <Statistic title="活跃用户" :value="93" suffix="/ 100" :loading="loading" />
      <Countdown title="倒计时" :value="Date.now() + 60000" :loading="loading" />
    </Space>
    <div style="margin-top: 16px">
      <Button @click="toggleLoading">
        {{ loading ? '显示内容' : '显示加载' }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Statistic, Countdown, Space, Button } from '@hmfw/ant-design'

const loading = ref(true)
const value = ref(112893)

const toggleLoading = () => {
  loading.value = !loading.value
}
<\/script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
`,wt={class:"statistic-demo"},Nt=y({__name:"StatisticUnit",setup(t){return(e,a)=>(h(),q("div",wt,[n(p(V),{size:32},{default:k(()=>[n(p(u),{title:"账户余额",value:112893,precision:2,prefix:"$"}),n(p(u),{title:"增长率",value:9.3,precision:2,suffix:"%"}),n(p(u),{title:"价格",value:568.08,precision:2,prefix:"¥","value-style":{color:"#3f8600"}})]),_:1})]))}}),_t=N(Nt,[["__scopeId","data-v-9bd15624"]]),Ct=`<template>
  <div class="statistic-demo">
    <Space :size="32">
      <Statistic title="账户余额" :value="112893" :precision="2" prefix="$" />
      <Statistic title="增长率" :value="9.3" :precision="2" suffix="%" />
      <Statistic title="价格" :value="568.08" :precision="2" prefix="¥" :value-style="{ color: '#3f8600' }" />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Statistic, Space } from '@hmfw/ant-design'
<\/script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
`,Dt={class:"markdown-body"},Et={__name:"statistic",setup(t,{expose:e}){return e({frontmatter:{}}),(c,s)=>{const l=Q("DemoBlock");return h(),q("div",Dt,[s[0]||(s[0]=o("h1",{id:"statistic-统计数值",tabindex:"-1"},"Statistic 统计数值",-1)),s[1]||(s[1]=o("p",null,"展示统计数值。",-1)),s[2]||(s[2]=o("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),s[3]||(s[3]=o("ul",null,[o("li",null,"当需要突出某个或某组数字时。"),o("li",null,"当需要展示带描述的统计类数据时使用。")],-1)),s[4]||(s[4]=o("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),s[5]||(s[5]=o("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n(l,{title:"基础用法",source:p(pt)},{default:k(()=>[n(ot)]),_:1},8,["source"]),s[6]||(s[6]=o("p",null,"简单的展示统计数值，支持精度控制和后缀。",-1)),s[7]||(s[7]=o("h3",{id:"单位设置",tabindex:"-1"},"单位设置",-1)),n(l,{title:"单位设置",source:p(Ct)},{default:k(()=>[n(_t)]),_:1},8,["source"]),s[8]||(s[8]=o("p",null,[b("通过前缀和后缀添加单位，可以使用字符串或 VNode。通过 "),o("code",null,"valueStyle"),b(" 可以设置数值样式。")],-1)),s[9]||(s[9]=o("h3",{id:"倒计时",tabindex:"-1"},"倒计时",-1)),n(l,{title:"倒计时",source:p(mt)},{default:k(()=>[n(kt)]),_:1},8,["source"]),s[10]||(s[10]=o("p",null,"倒计时组件，支持多种时间格式和倒计时结束回调。",-1)),s[11]||(s[11]=o("h3",{id:"加载状态",tabindex:"-1"},"加载状态",-1)),n(l,{title:"加载状态",source:p(qt)},{default:k(()=>[n(ht)]),_:1},8,["source"]),s[12]||(s[12]=o("p",null,"数据加载中时显示骨架屏占位。",-1)),s[13]||(s[13]=o("h3",{id:"自定义渲染",tabindex:"-1"},"自定义渲染",-1)),n(l,{title:"自定义渲染",source:p(xt)},{default:k(()=>[n(vt)]),_:1},8,["source"]),s[14]||(s[14]=o("p",null,[b("通过 "),o("code",null,"valueRender"),b(" 可以完全自定义数值的渲染方式。")],-1)),s[15]||(s[15]=o("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),s[16]||(s[16]=o("p",null,[b("通过 "),o("code",null,"classNames"),b(" / "),o("code",null,"styles"),b(" 对各子元素做细粒度样式控制。")],-1)),n(l,{title:"语义化 className 与 style",source:p(ut)},{default:k(()=>[n(it)]),_:1},8,["source"]),s[17]||(s[17]=X(`<h2 id="api" tabindex="-1">API</h2><h3 id="statistic-props" tabindex="-1">Statistic Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>value</td><td>数值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>precision</td><td>数值精度</td><td><code>number</code></td><td>-</td></tr><tr><td>prefix</td><td>前缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>后缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>valueStyle</td><td>数值样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>groupSeparator</td><td>千分位分隔符</td><td><code>string</code></td><td><code>,</code></td></tr><tr><td>decimalSeparator</td><td>小数点分隔符</td><td><code>string</code></td><td><code>.</code></td></tr><tr><td>loading</td><td>加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>valueRender</td><td>自定义渲染数值</td><td><code>(value: string) =&gt; VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>StatisticClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>StatisticStyles</code></td><td>-</td></tr></tbody></table><h3 id="countdown-props" tabindex="-1">Countdown Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>value</td><td>目标时间（时间戳或 Date）</td><td><code>number | Date</code></td><td>-</td></tr><tr><td>format</td><td>时间格式</td><td><code>string</code></td><td><code>HH:mm:ss</code></td></tr><tr><td>prefix</td><td>前缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>后缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>valueStyle</td><td>数值样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>loading</td><td>加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>valueRender</td><td>自定义渲染数值</td><td><code>(value: string) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="countdown-events" tabindex="-1">Countdown Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>finish</td><td>倒计时完成时触发</td><td><code>() =&gt; void</code></td></tr><tr><td>change</td><td>倒计时变化时触发</td><td><code>(value: number) =&gt; void</code></td></tr></tbody></table><h3 id="format-格式" tabindex="-1">format 格式</h3><table><thead><tr><th>占位符</th><th>说明</th></tr></thead><tbody><tr><td><code>DD</code></td><td>天数（补零）</td></tr><tr><td><code>D</code></td><td>天数</td></tr><tr><td><code>HH</code></td><td>小时（补零）</td></tr><tr><td><code>H</code></td><td>小时</td></tr><tr><td><code>mm</code></td><td>分钟（补零）</td></tr><tr><td><code>m</code></td><td>分钟</td></tr><tr><td><code>ss</code></td><td>秒（补零）</td></tr><tr><td><code>s</code></td><td>秒</td></tr><tr><td><code>SSS</code></td><td>毫秒（补零）</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对统计数值组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">StatisticClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 统计数值根容器</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题区域</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 数值内容容器</span>
  prefix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 前缀</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 数值</span>
  suffix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 后缀</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">StatisticStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  prefix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  value<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  suffix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-statistic<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-statistic-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
    标题
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-statistic-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-statistic-content-prefix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.prefix / styles.prefix 应用于此 --&gt;</span>
      前缀
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-statistic-content-value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.value / styles.value 应用于此 --&gt;</span>
      1,234
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-statistic-content-suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.suffix / styles.suffix 应用于此 --&gt;</span>
      后缀
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义根容器样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Statistic</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>活跃用户<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>93185<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;custom-root&#39; }<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>👥<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义标题与数值 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Statistic</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>总销售额<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1234567.89<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:precision</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      title: &#39;custom-title&#39;,
      value: &#39;custom-value&#39;,
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>¥<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Statistic</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>在线人数<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8888<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;combined-root&#39;,
      title: &#39;combined-title&#39;,
      content: &#39;combined-content&#39;,
      value: &#39;combined-value&#39;,
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">suffix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>人<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.custom-root)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-root:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 6px 20px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-title)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
  <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-value)</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #1890ff 0%<span class="token punctuation">,</span> #096dd9 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Statistic</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>转化率<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12.8<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:precision</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: {
        padding: &#39;16px&#39;,
        borderRadius: &#39;8px&#39;,
        background: &#39;linear-gradient(135deg, #f6d365 0%, #fda085 100%)&#39;,
      },
      title: { fontWeight: &#39;bold&#39;, color: &#39;#8b4513&#39; },
      value: { fontSize: &#39;28px&#39;, color: &#39;#fff&#39; },
      suffix: { color: &#39;#fff&#39;, fontSize: &#39;18px&#39; },
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">suffix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>%<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Statistic</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>增长率<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>28.5<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:precision</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      title: { color: &#39;#52c41a&#39;, fontWeight: 600 },
      content: { marginTop: &#39;8px&#39; },
      value: { fontSize: &#39;36px&#39;, color: &#39;#52c41a&#39; },
      prefix: { fontSize: &#39;24px&#39;, marginRight: &#39;8px&#39; },
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>📈<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">suffix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>%<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>styles.content</code> 与现有的 <code>valueStyle</code> prop 会合并，<code>valueStyle</code> 在前、<code>styles.content</code> 在后，后者优先级更高</li><li>Countdown 组件通过 <code>extends StatisticProps</code> 自动继承所有语义化 API，可使用相同的 <code>classNames</code> 和 <code>styles</code></li><li>加载状态（<code>loading={true}</code>）时，组件显示骨架屏，<code>classNames.root</code> 仍会应用于根容器</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Statistic 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-heading</code></td><td>标题文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-family</code></td><td>字体族</td><td><code>-apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, ...</code></td></tr><tr><td><code>--hmfw-font-size</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr></tbody></table>`,27))])}}};export{Et as default};
