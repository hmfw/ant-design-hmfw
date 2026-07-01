import{S as V}from"./Space-C6j8fgWe.js";import{S as L}from"./index-DtT-wXXG.js";import{o as y,O as W,M as U,n,P as Y,x as K,y as Q,E as q,A as h,k as w,L as i,Q as m,_ as N,h as o,p as F,m as b,K as G,H as J,l as X}from"./index-lneS_oZ6.js";import{c}from"./cls-S9IiI6wd.js";import{m as Z}from"./message-6QDGzdFc.js";import{B as tt}from"./Button-Dp-6_p5h.js";import"./LoadingOutlined-BE1i3WFZ.js";import"./CheckCircleFilled-Bgww0oOs.js";import"./CloseCircleFilled-C924Lq4d.js";import"./ExclamationCircleFilled-lfxhkJGG.js";import"./InfoCircleFilled-BTi4z6WO.js";function nt(t,a,s=",",d="."){if(t==null||t==="")return"";const e=typeof t=="string"?parseFloat(t):t;if(isNaN(e))return String(t);const u=(a!==void 0?e.toFixed(a):String(e)).split("."),g=u[0],f=u[1],v=g.replace(/\B(?=(\d{3})+(?!\d))/g,s);return f!==void 0?`${v}${d}${f}`:v}const r=y({name:"Statistic",props:{title:[String,Object],value:[String,Number],precision:Number,prefix:[String,Object],suffix:[String,Object],valueStyle:Object,groupSeparator:{type:String,default:","},decimalSeparator:{type:String,default:"."},loading:Boolean,valueRender:Function,classNames:Object,styles:Object},setup(t){const a=W("statistic"),s=U();return()=>{var l,u,g,f,v,x,k,p,S,_,C,D,$,H,z,B;if(t.loading)return n("div",{class:c(a,(l=t.classNames)==null?void 0:l.root,{[`${a}-rtl`]:s.value.direction==="rtl"}),style:(u=t.styles)==null?void 0:u.root},[t.title&&n("div",{class:c(`${a}-title`,(g=t.classNames)==null?void 0:g.title),style:(f=t.styles)==null?void 0:f.title},[t.title]),n(L,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}},null)]);const d=nt(t.value,t.precision,t.groupSeparator,t.decimalSeparator),e=()=>t.valueRender?t.valueRender(d):d;return n("div",{class:c(a,(v=t.classNames)==null?void 0:v.root,{[`${a}-rtl`]:s.value.direction==="rtl"}),style:(x=t.styles)==null?void 0:x.root},[t.title&&n("div",{class:c(`${a}-title`,(k=t.classNames)==null?void 0:k.title),style:(p=t.styles)==null?void 0:p.title},[t.title]),n("div",{class:c(`${a}-content`,(S=t.classNames)==null?void 0:S.content),style:{...t.valueStyle,...(_=t.styles)==null?void 0:_.content}},[t.prefix&&n("span",{class:c(`${a}-content-prefix`,(C=t.classNames)==null?void 0:C.prefix),style:(D=t.styles)==null?void 0:D.prefix},[t.prefix]),n("span",{class:c(`${a}-content-value`,($=t.classNames)==null?void 0:$.value),style:(H=t.styles)==null?void 0:H.value},[e()]),t.suffix&&n("span",{class:c(`${a}-content-suffix`,(z=t.classNames)==null?void 0:z.suffix),style:(B=t.styles)==null?void 0:B.suffix},[t.suffix])])])}}});function et(t,a="HH:mm:ss"){if(t<=0)return a.replace(/Y+|M+|D+|H+|m+|s+|S+/g,x=>"0".repeat(x.length));const s=Math.floor(t/1e3),d=Math.floor(s/60),e=Math.floor(d/60),l=Math.floor(e/24),u=s%60,g=d%60,f=e%24,v={DD:String(l).padStart(2,"0"),D:String(l),HH:String(f).padStart(2,"0"),H:String(f),mm:String(g).padStart(2,"0"),m:String(g),ss:String(u).padStart(2,"0"),s:String(u),SSS:String(t%1e3).padStart(3,"0")};return a.replace(/DD|D|HH|H|mm|m|ss|s|SSS/g,x=>v[x]??x)}const P=y({name:"Countdown",props:{title:[String,Object],value:[Number,Date],format:{type:String,default:"HH:mm:ss"},prefix:[String,Object],suffix:[String,Object],valueStyle:Object,loading:Boolean,valueRender:Function,classNames:Object,styles:Object,onFinish:Function,onChange:Function},setup(t,{emit:a}){const s=W("statistic"),d=U(),e=q(0);let l=null,u=0;const g=()=>{if(!t.value)return 0;const k=t.value instanceof Date?t.value.getTime():t.value,p=Date.now();return Math.max(0,k-p)},f=k=>{var S;const p=g();if(e.value=p,t.onChange&&p!==u&&(t.onChange(p),u=p),p<=0){l!==null&&(cancelAnimationFrame(l),l=null),(S=t.onFinish)==null||S.call(t),a("finish");return}l=requestAnimationFrame(f)},v=()=>{l!==null&&cancelAnimationFrame(l),e.value=g(),u=e.value,l=requestAnimationFrame(f)},x=()=>{l!==null&&(cancelAnimationFrame(l),l=null)};return Y(()=>t.value,()=>{v()}),K(()=>{v()}),Q(()=>{x()}),()=>{var S,_,C,D,$,H,z,B,R,O,E,j,A,I,M,T;if(t.loading)return n("div",{class:c(s,(S=t.classNames)==null?void 0:S.root,{[`${s}-rtl`]:d.value.direction==="rtl"}),style:(_=t.styles)==null?void 0:_.root},[t.title&&n("div",{class:c(`${s}-title`,(C=t.classNames)==null?void 0:C.title),style:(D=t.styles)==null?void 0:D.title},[t.title]),n(L,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}},null)]);const k=et(e.value,t.format),p=()=>t.valueRender?t.valueRender(k):k;return n("div",{class:c(s,`${s}-countdown`,($=t.classNames)==null?void 0:$.root,{[`${s}-rtl`]:d.value.direction==="rtl"}),style:(H=t.styles)==null?void 0:H.root},[t.title&&n("div",{class:c(`${s}-title`,(z=t.classNames)==null?void 0:z.title),style:(B=t.styles)==null?void 0:B.title},[t.title]),n("div",{class:c(`${s}-content`,(R=t.classNames)==null?void 0:R.content),style:{...t.valueStyle,...(O=t.styles)==null?void 0:O.content}},[t.prefix&&n("span",{class:c(`${s}-content-prefix`,(E=t.classNames)==null?void 0:E.prefix),style:(j=t.styles)==null?void 0:j.prefix},[t.prefix]),n("span",{class:c(`${s}-content-value`,(A=t.classNames)==null?void 0:A.value),style:(I=t.styles)==null?void 0:I.value},[p()]),t.suffix&&n("span",{class:c(`${s}-content-suffix`,(M=t.classNames)==null?void 0:M.suffix),style:(T=t.styles)==null?void 0:T.suffix},[t.suffix])])])}}}),st={class:"statistic-demo"},at=y({__name:"StatisticBasic",setup(t){return(a,s)=>(h(),w("div",st,[n(i(V),{size:32},{default:m(()=>[n(i(r),{title:"用户数",value:112893}),n(i(r),{title:"账户余额（元）",value:112893,precision:2}),n(i(r),{title:"活跃用户",value:93,suffix:"/ 100"})]),_:1})]))}}),ot=N(at,[["__scopeId","data-v-a78806ac"]]),it=`<template>
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
`,lt={style:{display:"flex","flex-direction":"column",gap:"24px"}},dt=y({__name:"StatisticClassNames",setup(t){return(a,s)=>(h(),w("div",lt,[o("div",null,[s[0]||(s[0]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器：",-1)),n(i(r),{title:"活跃用户",value:93185,"class-names":{root:"custom-root"},prefix:"👥"})]),o("div",null,[s[1]||(s[1]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义标题与数值：",-1)),n(i(r),{title:"总销售额",value:123456789e-2,precision:2,"class-names":{title:"custom-title",value:"custom-value"},prefix:"¥"})]),o("div",null,[s[2]||(s[2]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义前缀和后缀：",-1)),n(i(r),{title:"增长率",value:28.5,precision:1,"class-names":{prefix:"custom-prefix",suffix:"custom-suffix"},prefix:"📈",suffix:"%"})]),o("div",null,[s[3]||(s[3]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义：",-1)),n(i(r),{title:"在线人数",value:8888,"class-names":{root:"combined-root",title:"combined-title",content:"combined-content",value:"combined-value"},suffix:"人"})]),o("div",null,[s[4]||(s[4]=o("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),n(i(r),{title:"转化率",value:12.8,precision:1,styles:{root:{padding:"16px",borderRadius:"8px",background:"linear-gradient(135deg, #f6d365 0%, #fda085 100%)"},title:{fontWeight:"bold",color:"#8b4513"},value:{fontSize:"28px",color:"#fff"},suffix:{color:"#fff",fontSize:"18px"}},suffix:"%"})])]))}}),ct=N(dt,[["__scopeId","data-v-26e373e7"]]),rt=`<template>
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
`,ut={class:"statistic-demo"},pt=y({__name:"StatisticCountdown",setup(t){const a=q(Date.now()+72e5),s=q(Date.now()+1e3*60*60*24*2+1e3*30*30),d=q(Date.now()+1e3*10),e=()=>{Z.success("倒计时结束！")};return(l,u)=>(h(),w("div",ut,[n(i(V),{direction:"vertical",size:16},{default:m(()=>[n(i(P),{title:"倒计时",value:a.value,format:"HH:mm:ss"},null,8,["value"]),n(i(P),{title:"天数倒计时",value:s.value,format:"DD 天 HH 时 mm 分 ss 秒"},null,8,["value"]),n(i(P),{title:"毫秒倒计时",value:d.value,format:"HH:mm:ss:SSS",onFinish:e},null,8,["value"])]),_:1})]))}}),mt=N(pt,[["__scopeId","data-v-b242e756"]]),ft=`<template>
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
`,gt={class:"statistic-demo"},vt=y({__name:"StatisticCustom",setup(t){const a=s=>F("span",{style:{color:"#cf1322",fontWeight:"bold"}},[F("span","💰 "),s,F("span"," 元")]);return(s,d)=>(h(),w("div",gt,[n(i(V),{size:32},{default:m(()=>[n(i(r),{title:"自定义渲染",value:112893,"value-render":a}),n(i(r),{title:"增长率",value:9.3,precision:2,suffix:"%","value-style":{color:"#3f8600"},prefix:F("span",{style:{color:"#3f8600"}},"↑")},null,8,["prefix"])]),_:1})]))}}),xt=N(vt,[["__scopeId","data-v-3b67ebae"]]),kt=`<template>
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
`,St={class:"statistic-demo"},bt={style:{"margin-top":"16px"}},yt=y({__name:"StatisticLoading",setup(t){const a=q(!0),s=q(112893),d=()=>{a.value=!a.value};return(e,l)=>(h(),w("div",St,[n(i(V),{size:32},{default:m(()=>[n(i(r),{title:"用户数",value:s.value,loading:a.value},null,8,["value","loading"]),n(i(r),{title:"活跃用户",value:93,suffix:"/ 100",loading:a.value},null,8,["loading"]),n(i(P),{title:"倒计时",value:Date.now()+6e4,loading:a.value},null,8,["value","loading"])]),_:1}),o("div",bt,[n(i(tt),{onClick:d},{default:m(()=>[b(G(a.value?"显示内容":"显示加载"),1)]),_:1})])]))}}),ht=N(yt,[["__scopeId","data-v-6eca9204"]]),wt=`<template>
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
`,qt={class:"statistic-demo"},Nt=y({__name:"StatisticUnit",setup(t){return(a,s)=>(h(),w("div",qt,[n(i(V),{size:32},{default:m(()=>[n(i(r),{title:"账户余额",value:112893,precision:2,prefix:"$"}),n(i(r),{title:"增长率",value:9.3,precision:2,suffix:"%"}),n(i(r),{title:"价格",value:568.08,precision:2,prefix:"¥","value-style":{color:"#3f8600"}})]),_:1})]))}}),_t=N(Nt,[["__scopeId","data-v-9bd15624"]]),Ct=`<template>
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
`,Dt={class:"markdown-body"},At={__name:"statistic",setup(t,{expose:a}){return a({frontmatter:{}}),(d,e)=>{const l=J("DemoBlock");return h(),w("div",Dt,[e[0]||(e[0]=o("h1",{id:"statistic-统计数值",tabindex:"-1"},"Statistic 统计数值",-1)),e[1]||(e[1]=o("p",null,"展示统计数值。",-1)),e[2]||(e[2]=o("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=o("ul",null,[o("li",null,"当需要突出某个或某组数字时。"),o("li",null,"当需要展示带描述的统计类数据时使用。")],-1)),e[4]||(e[4]=o("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=o("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n(l,{title:"基础用法",source:i(it)},{default:m(()=>[n(ot)]),_:1},8,["source"]),e[6]||(e[6]=o("p",null,"简单的展示统计数值，支持精度控制和后缀。",-1)),e[7]||(e[7]=o("h3",{id:"单位设置",tabindex:"-1"},"单位设置",-1)),n(l,{title:"单位设置",source:i(Ct)},{default:m(()=>[n(_t)]),_:1},8,["source"]),e[8]||(e[8]=o("p",null,[b("通过前缀和后缀添加单位，可以使用字符串或 VNode。通过 "),o("code",null,"valueStyle"),b(" 可以设置数值样式。")],-1)),e[9]||(e[9]=o("h3",{id:"倒计时",tabindex:"-1"},"倒计时",-1)),n(l,{title:"倒计时",source:i(ft)},{default:m(()=>[n(mt)]),_:1},8,["source"]),e[10]||(e[10]=o("p",null,"倒计时组件，支持多种时间格式和倒计时结束回调。",-1)),e[11]||(e[11]=o("h3",{id:"加载状态",tabindex:"-1"},"加载状态",-1)),n(l,{title:"加载状态",source:i(wt)},{default:m(()=>[n(ht)]),_:1},8,["source"]),e[12]||(e[12]=o("p",null,"数据加载中时显示骨架屏占位。",-1)),e[13]||(e[13]=o("h3",{id:"自定义渲染",tabindex:"-1"},"自定义渲染",-1)),n(l,{title:"自定义渲染",source:i(kt)},{default:m(()=>[n(xt)]),_:1},8,["source"]),e[14]||(e[14]=o("p",null,[b("通过 "),o("code",null,"valueRender"),b(" 可以完全自定义数值的渲染方式。")],-1)),e[15]||(e[15]=o("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[16]||(e[16]=o("p",null,[b("通过 "),o("code",null,"classNames"),b(" / "),o("code",null,"styles"),b(" 对各子元素做细粒度样式控制。")],-1)),n(l,{title:"语义化 className 与 style",source:i(rt)},{default:m(()=>[n(ct)]),_:1},8,["source"]),e[17]||(e[17]=X(`<h2 id="api" tabindex="-1">API</h2><h3 id="statistic-props" tabindex="-1">Statistic Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>value</td><td>数值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>precision</td><td>数值精度</td><td><code>number</code></td><td>-</td></tr><tr><td>prefix</td><td>前缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>后缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>valueStyle</td><td>数值样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>groupSeparator</td><td>千分位分隔符</td><td><code>string</code></td><td><code>,</code></td></tr><tr><td>decimalSeparator</td><td>小数点分隔符</td><td><code>string</code></td><td><code>.</code></td></tr><tr><td>loading</td><td>加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>valueRender</td><td>自定义渲染数值</td><td><code>(value: string) =&gt; VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>StatisticClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>StatisticStyles</code></td><td>-</td></tr></tbody></table><h3 id="countdown-props" tabindex="-1">Countdown Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>value</td><td>目标时间（时间戳或 Date）</td><td><code>number | Date</code></td><td>-</td></tr><tr><td>format</td><td>时间格式</td><td><code>string</code></td><td><code>HH:mm:ss</code></td></tr><tr><td>prefix</td><td>前缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>后缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>valueStyle</td><td>数值样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>loading</td><td>加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>valueRender</td><td>自定义渲染数值</td><td><code>(value: string) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="countdown-events" tabindex="-1">Countdown Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>finish</td><td>倒计时完成时触发</td><td><code>() =&gt; void</code></td></tr><tr><td>change</td><td>倒计时变化时触发</td><td><code>(value: number) =&gt; void</code></td></tr></tbody></table><h3 id="format-格式" tabindex="-1">format 格式</h3><table><thead><tr><th>占位符</th><th>说明</th></tr></thead><tbody><tr><td><code>DD</code></td><td>天数（补零）</td></tr><tr><td><code>D</code></td><td>天数</td></tr><tr><td><code>HH</code></td><td>小时（补零）</td></tr><tr><td><code>H</code></td><td>小时</td></tr><tr><td><code>mm</code></td><td>分钟（补零）</td></tr><tr><td><code>m</code></td><td>分钟</td></tr><tr><td><code>ss</code></td><td>秒（补零）</td></tr><tr><td><code>s</code></td><td>秒</td></tr><tr><td><code>SSS</code></td><td>毫秒（补零）</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对统计数值组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义根容器样式 --&gt;
  &lt;Statistic title=&quot;活跃用户&quot; :value=&quot;93185&quot; :class-names=&quot;{ root: &#39;custom-root&#39; }&quot; prefix=&quot;👥&quot; /&gt;

  &lt;!-- 自定义标题与数值 --&gt;
  &lt;Statistic
    title=&quot;总销售额&quot;
    :value=&quot;1234567.89&quot;
    :precision=&quot;2&quot;
    :class-names=&quot;{
      title: &#39;custom-title&#39;,
      value: &#39;custom-value&#39;,
    }&quot;
    prefix=&quot;¥&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Statistic
    title=&quot;在线人数&quot;
    :value=&quot;8888&quot;
    :class-names=&quot;{
      root: &#39;combined-root&#39;,
      title: &#39;combined-title&#39;,
      content: &#39;combined-content&#39;,
      value: &#39;combined-value&#39;,
    }&quot;
    suffix=&quot;人&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.custom-root) {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

:deep(.custom-title) {
  font-size: 16px;
  font-weight: bold;
  color: #1890ff;
  text-transform: uppercase;
}

:deep(.custom-value) {
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制 --&gt;
  &lt;Statistic
    title=&quot;转化率&quot;
    :value=&quot;12.8&quot;
    :precision=&quot;1&quot;
    :styles=&quot;{
      root: {
        padding: &#39;16px&#39;,
        borderRadius: &#39;8px&#39;,
        background: &#39;linear-gradient(135deg, #f6d365 0%, #fda085 100%)&#39;,
      },
      title: { fontWeight: &#39;bold&#39;, color: &#39;#8b4513&#39; },
      value: { fontSize: &#39;28px&#39;, color: &#39;#fff&#39; },
      suffix: { color: &#39;#fff&#39;, fontSize: &#39;18px&#39; },
    }&quot;
    suffix=&quot;%&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Statistic
    title=&quot;增长率&quot;
    :value=&quot;28.5&quot;
    :precision=&quot;1&quot;
    :styles=&quot;{
      title: { color: &#39;#52c41a&#39;, fontWeight: 600 },
      content: { marginTop: &#39;8px&#39; },
      value: { fontSize: &#39;36px&#39;, color: &#39;#52c41a&#39; },
      prefix: { fontSize: &#39;24px&#39;, marginRight: &#39;8px&#39; },
    }&quot;
    prefix=&quot;📈&quot;
    suffix=&quot;%&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>styles.content</code> 与现有的 <code>valueStyle</code> prop 会合并，<code>valueStyle</code> 在前、<code>styles.content</code> 在后，后者优先级更高</li><li>Countdown 组件通过 <code>extends StatisticProps</code> 自动继承所有语义化 API，可使用相同的 <code>classNames</code> 和 <code>styles</code></li><li>加载状态（<code>loading={true}</code>）时，组件显示骨架屏，<code>classNames.root</code> 仍会应用于根容器</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Statistic 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-heading</code></td><td>标题文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-family</code></td><td>字体族</td><td><code>-apple-system, BlinkMacSystemFont, &#39;Segoe UI&#39;, Roboto, ...</code></td></tr><tr><td><code>--hmfw-font-size</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr></tbody></table>`,27))])}}};export{At as default};
