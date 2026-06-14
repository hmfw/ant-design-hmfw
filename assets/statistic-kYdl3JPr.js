import{S as y}from"./Space-BXFZnpuO.js";import{S as V}from"./index-Ce21NaBn.js";import{o as g,N as B,L as F,n as e,Q as k,x as R,y as z,E as x,A as h,k as _,K as a,R as r,_ as w,p as C,h as s,m as H,J as j,H as I,l as M}from"./index-B09KCCs0.js";import{c as D}from"./cls-S9IiI6wd.js";import{m as O}from"./message-CLoSA5Kq.js";import{B as P}from"./Button-mNkoEchB.js";import"./icons-n88SZ_u-.js";import"./Icon-BGDem5mI.js";function A(t,d,i=",",l="."){if(t==null||t==="")return"";const n=typeof t=="string"?parseFloat(t):t;if(isNaN(n))return String(t);const c=(d!==void 0?n.toFixed(d):String(n)).split("."),p=c[0],m=c[1],v=p.replace(/\B(?=(\d{3})+(?!\d))/g,i);return m!==void 0?`${v}${l}${m}`:v}const u=g({name:"Statistic",props:{title:[String,Object],value:[String,Number],precision:Number,prefix:[String,Object],suffix:[String,Object],valueStyle:Object,groupSeparator:{type:String,default:","},decimalSeparator:{type:String,default:"."},loading:Boolean,valueRender:Function},setup(t){const d=B("statistic"),i=F();return()=>{if(t.loading)return e("div",{class:D(d,{[`${d}-rtl`]:i.value.direction==="rtl"})},[t.title&&e("div",{class:`${d}-title`},[t.title]),e(V,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}},null)]);const l=A(t.value,t.precision,t.groupSeparator,t.decimalSeparator),n=()=>t.valueRender?t.valueRender(l):l;return e("div",{class:D(d,{[`${d}-rtl`]:i.value.direction==="rtl"})},[t.title&&e("div",{class:`${d}-title`},[t.title]),e("div",{class:`${d}-content`,style:t.valueStyle},[t.prefix&&e("span",{class:`${d}-content-prefix`},[t.prefix]),e("span",{class:`${d}-content-value`},[n()]),t.suffix&&e("span",{class:`${d}-content-suffix`},[t.suffix])])])}}});function L(t,d="HH:mm:ss"){if(t<=0)return d.replace(/Y+|M+|D+|H+|m+|s+|S+/g,S=>"0".repeat(S.length));const i=Math.floor(t/1e3),l=Math.floor(i/60),n=Math.floor(l/60),o=Math.floor(n/24),c=i%60,p=l%60,m=n%24,v={DD:String(o).padStart(2,"0"),D:String(o),HH:String(m).padStart(2,"0"),H:String(m),mm:String(p).padStart(2,"0"),m:String(p),ss:String(c).padStart(2,"0"),s:String(c),SSS:String(t%1e3).padStart(3,"0")};return d.replace(/DD|D|HH|H|mm|m|ss|s|SSS/g,S=>v[S]??S)}const $=g({name:"Countdown",props:{title:[String,Object],value:[Number,Date],format:{type:String,default:"HH:mm:ss"},prefix:[String,Object],suffix:[String,Object],valueStyle:Object,loading:Boolean,valueRender:Function,onFinish:Function,onChange:Function},setup(t,{emit:d}){const i=B("statistic"),l=F(),n=x(0);let o=null,c=0;const p=()=>{if(!t.value)return 0;const b=t.value instanceof Date?t.value.getTime():t.value,f=Date.now();return Math.max(0,b-f)},m=b=>{var N;const f=p();if(n.value=f,t.onChange&&f!==c&&(t.onChange(f),c=f),f<=0){o!==null&&(cancelAnimationFrame(o),o=null),(N=t.onFinish)==null||N.call(t),d("finish");return}o=requestAnimationFrame(m)},v=()=>{o!==null&&cancelAnimationFrame(o),n.value=p(),c=n.value,o=requestAnimationFrame(m)},S=()=>{o!==null&&(cancelAnimationFrame(o),o=null)};return k(()=>t.value,()=>{v()}),R(()=>{v()}),z(()=>{S()}),()=>{if(t.loading)return e("div",{class:D(i,{[`${i}-rtl`]:l.value.direction==="rtl"})},[t.title&&e("div",{class:`${i}-title`},[t.title]),e(V,{active:!0,title:!1,paragraph:{rows:1,width:"100%"}},null)]);const b=L(n.value,t.format),f=()=>t.valueRender?t.valueRender(b):b;return e("div",{class:D(i,`${i}-countdown`,{[`${i}-rtl`]:l.value.direction==="rtl"})},[t.title&&e("div",{class:`${i}-title`},[t.title]),e("div",{class:`${i}-content`,style:t.valueStyle},[t.prefix&&e("span",{class:`${i}-content-prefix`},[t.prefix]),e("span",{class:`${i}-content-value`},[f()]),t.suffix&&e("span",{class:`${i}-content-suffix`},[t.suffix])])])}}}),T={class:"statistic-demo"},U=g({__name:"StatisticBasic",setup(t){return(d,i)=>(h(),_("div",T,[e(a(y),{size:32},{default:r(()=>[e(a(u),{title:"用户数",value:112893}),e(a(u),{title:"账户余额（元）",value:112893,precision:2}),e(a(u),{title:"活跃用户",value:93,suffix:"/ 100"})]),_:1})]))}}),E=w(U,[["__scopeId","data-v-55cb24ae"]]),q=`<template>
  <div class="statistic-demo">
    <Space :size="32">
      <Statistic title="用户数" :value="112893" />
      <Statistic title="账户余额（元）" :value="112893" :precision="2" />
      <Statistic title="活跃用户" :value="93" suffix="/ 100" />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Statistic, Space } from '../../../components'
<\/script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
`,W={class:"statistic-demo"},J=g({__name:"StatisticCountdown",setup(t){const d=x(Date.now()+72e5),i=x(Date.now()+1e3*60*60*24*2+1e3*30*30),l=x(Date.now()+1e3*10),n=()=>{O.success("倒计时结束！")};return(o,c)=>(h(),_("div",W,[e(a(y),{direction:"vertical",size:16},{default:r(()=>[e(a($),{title:"倒计时",value:d.value,format:"HH:mm:ss"},null,8,["value"]),e(a($),{title:"天数倒计时",value:i.value,format:"DD 天 HH 时 mm 分 ss 秒"},null,8,["value"]),e(a($),{title:"毫秒倒计时",value:l.value,format:"HH:mm:ss:SSS",onFinish:n},null,8,["value"])]),_:1})]))}}),K=w(J,[["__scopeId","data-v-10227bd6"]]),Q=`<template>
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
import { Countdown, Space, message } from '../../../components'

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
`,Y={class:"statistic-demo"},G=g({__name:"StatisticCustom",setup(t){const d=i=>C("span",{style:{color:"#cf1322",fontWeight:"bold"}},[C("span","💰 "),i,C("span"," 元")]);return(i,l)=>(h(),_("div",Y,[e(a(y),{size:32},{default:r(()=>[e(a(u),{title:"自定义渲染",value:112893,"value-render":d}),e(a(u),{title:"增长率",value:9.3,precision:2,suffix:"%","value-style":{color:"#3f8600"},prefix:C("span",{style:{color:"#3f8600"}},"↑")},null,8,["prefix"])]),_:1})]))}}),X=w(G,[["__scopeId","data-v-ea587276"]]),Z=`<template>
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
import { Statistic, Space } from '../../../components'

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
`,tt={class:"statistic-demo"},et={style:{"margin-top":"16px"}},nt=g({__name:"StatisticLoading",setup(t){const d=x(!0),i=x(112893),l=()=>{d.value=!d.value};return(n,o)=>(h(),_("div",tt,[e(a(y),{size:32},{default:r(()=>[e(a(u),{title:"用户数",value:i.value,loading:d.value},null,8,["value","loading"]),e(a(u),{title:"活跃用户",value:93,suffix:"/ 100",loading:d.value},null,8,["loading"]),e(a($),{title:"倒计时",value:Date.now()+6e4,loading:d.value},null,8,["value","loading"])]),_:1}),s("div",et,[e(a(P),{onClick:l},{default:r(()=>[H(j(d.value?"显示内容":"显示加载"),1)]),_:1})])]))}}),dt=w(nt,[["__scopeId","data-v-958894ad"]]),it=`<template>
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
import { Statistic, Countdown, Space, Button } from '../../../components'

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
`,at={class:"statistic-demo"},ot=g({__name:"StatisticUnit",setup(t){return(d,i)=>(h(),_("div",at,[e(a(y),{size:32},{default:r(()=>[e(a(u),{title:"账户余额",value:112893,precision:2,prefix:"$"}),e(a(u),{title:"增长率",value:9.3,precision:2,suffix:"%"}),e(a(u),{title:"价格",value:568.08,precision:2,prefix:"¥","value-style":{color:"#3f8600"}})]),_:1})]))}}),st=w(ot,[["__scopeId","data-v-d410109d"]]),lt=`<template>
  <div class="statistic-demo">
    <Space :size="32">
      <Statistic title="账户余额" :value="112893" :precision="2" prefix="$" />
      <Statistic title="增长率" :value="9.3" :precision="2" suffix="%" />
      <Statistic title="价格" :value="568.08" :precision="2" prefix="¥" :value-style="{ color: '#3f8600' }" />
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Statistic, Space } from '../../../components'
<\/script>

<style scoped>
.statistic-demo {
  padding: 24px;
  background: #fafafa;
}
</style>
`,rt={class:"markdown-body"},xt={__name:"statistic",setup(t,{expose:d}){return d({frontmatter:{}}),(l,n)=>{const o=I("DemoBlock");return h(),_("div",rt,[n[0]||(n[0]=s("h1",{id:"statistic-",tabindex:"-1"},"Statistic 统计数值",-1)),n[1]||(n[1]=s("p",null,"展示统计数值。",-1)),n[2]||(n[2]=s("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=s("ul",null,[s("li",null,"当需要突出某个或某组数字时。"),s("li",null,"当需要展示带描述的统计类数据时使用。")],-1)),n[4]||(n[4]=s("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=s("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e(o,{title:"基础用法",source:a(q)},{default:r(()=>[e(E)]),_:1},8,["source"]),n[6]||(n[6]=s("p",null,"简单的展示统计数值，支持精度控制和后缀。",-1)),n[7]||(n[7]=s("h3",{id:"-3",tabindex:"-1"},"单位设置",-1)),e(o,{title:"单位设置",source:a(lt)},{default:r(()=>[e(st)]),_:1},8,["source"]),n[8]||(n[8]=s("p",null,[H("通过前缀和后缀添加单位，可以使用字符串或 VNode。通过 "),s("code",null,"valueStyle"),H(" 可以设置数值样式。")],-1)),n[9]||(n[9]=s("h3",{id:"-4",tabindex:"-1"},"倒计时",-1)),e(o,{title:"倒计时",source:a(Q)},{default:r(()=>[e(K)]),_:1},8,["source"]),n[10]||(n[10]=s("p",null,"倒计时组件，支持多种时间格式和倒计时结束回调。",-1)),n[11]||(n[11]=s("h3",{id:"-5",tabindex:"-1"},"加载状态",-1)),e(o,{title:"加载状态",source:a(it)},{default:r(()=>[e(dt)]),_:1},8,["source"]),n[12]||(n[12]=s("p",null,"数据加载中时显示骨架屏占位。",-1)),n[13]||(n[13]=s("h3",{id:"-6",tabindex:"-1"},"自定义渲染",-1)),e(o,{title:"自定义渲染",source:a(Z)},{default:r(()=>[e(X)]),_:1},8,["source"]),n[14]||(n[14]=M('<p>通过 <code>valueRender</code> 可以完全自定义数值的渲染方式。</p><h2 id="api" tabindex="-1">API</h2><h3 id="statistic-props" tabindex="-1">Statistic Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>value</td><td>数值</td><td><code>string | number</code></td><td>-</td></tr><tr><td>precision</td><td>数值精度</td><td><code>number</code></td><td>-</td></tr><tr><td>prefix</td><td>前缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>后缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>valueStyle</td><td>数值样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>groupSeparator</td><td>千分位分隔符</td><td><code>string</code></td><td><code>,</code></td></tr><tr><td>decimalSeparator</td><td>小数点分隔符</td><td><code>string</code></td><td><code>.</code></td></tr><tr><td>loading</td><td>加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>valueRender</td><td>自定义渲染数值</td><td><code>(value: string) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="countdown-props" tabindex="-1">Countdown Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>value</td><td>目标时间（时间戳或 Date）</td><td><code>number | Date</code></td><td>-</td></tr><tr><td>format</td><td>时间格式</td><td><code>string</code></td><td><code>HH:mm:ss</code></td></tr><tr><td>prefix</td><td>前缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>suffix</td><td>后缀</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>valueStyle</td><td>数值样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>loading</td><td>加载状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>valueRender</td><td>自定义渲染数值</td><td><code>(value: string) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="countdown-events" tabindex="-1">Countdown Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>finish</td><td>倒计时完成时触发</td><td><code>() =&gt; void</code></td></tr><tr><td>change</td><td>倒计时变化时触发</td><td><code>(value: number) =&gt; void</code></td></tr></tbody></table><h3 id="format-" tabindex="-1">format 格式</h3><table><thead><tr><th>占位符</th><th>说明</th></tr></thead><tbody><tr><td><code>DD</code></td><td>天数（补零）</td></tr><tr><td><code>D</code></td><td>天数</td></tr><tr><td><code>HH</code></td><td>小时（补零）</td></tr><tr><td><code>H</code></td><td>小时</td></tr><tr><td><code>mm</code></td><td>分钟（补零）</td></tr><tr><td><code>m</code></td><td>分钟</td></tr><tr><td><code>ss</code></td><td>秒（补零）</td></tr><tr><td><code>s</code></td><td>秒</td></tr><tr><td><code>SSS</code></td><td>毫秒（补零）</td></tr></tbody></table>',10))])}}};export{xt as default};
