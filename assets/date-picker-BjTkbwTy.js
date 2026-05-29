import{k as C,I as de,H as oe,z as h,L as re,t as se,u as ue,j as a,i as r,T as ie,F as ce,c as y,w as P,g as Y,G as m,d as c,E as j,B as ve,M as B,h as pe}from"./index-DvxRruME.js";import{c as w}from"./cls-S9IiI6wd.js";function x(e){return String(e).padStart(2,"0")}function L(e,l="YYYY-MM-DD"){return l.replace("YYYY",String(e.getFullYear())).replace("MM",x(e.getMonth()+1)).replace("DD",x(e.getDate())).replace("HH",x(e.getHours())).replace("mm",x(e.getMinutes())).replace("ss",x(e.getSeconds()))}function V(e){if(!e)return null;const l=new Date(e);return isNaN(l.getTime())?null:l}function O(e,l){return e.getFullYear()===l.getFullYear()&&e.getMonth()===l.getMonth()&&e.getDate()===l.getDate()}function he(e,l){return e.getFullYear()===l.getFullYear()&&e.getMonth()===l.getMonth()}function fe(e,l){return e.getFullYear()===l.getFullYear()}function R(e,l){return new Date(e,l+1,0).getDate()}function me(e,l){return new Date(e,l,1).getDay()}function ge(e,l){const t=[],s=me(e,l),d=R(e,l),u=R(e,l-1);for(let o=s-1;o>=0;o--)t.push({date:new Date(e,l-1,u-o),inCurrentMonth:!1});for(let o=1;o<=d;o++)t.push({date:new Date(e,l,o),inCurrentMonth:!0});const v=42-t.length;for(let o=1;o<=v;o++)t.push({date:new Date(e,l+1,o),inCurrentMonth:!1});return t}const b=C({name:"DatePicker",props:{value:String,defaultValue:String,format:String,disabled:Boolean,size:{type:String,default:"middle"},placeholder:String,allowClear:{type:Boolean,default:!0},picker:{type:String,default:"date"},showTime:Boolean,showToday:{type:Boolean,default:!0},disabledDate:Function,status:{type:String,default:""},open:{type:Boolean,default:void 0}},emits:["update:value","change","openChange","panelChange"],setup(e,{emit:l}){const t=de("date-picker"),s=oe(),d=new Date,u=y(()=>e.format?e.format:e.picker==="year"?"YYYY":e.picker==="month"?"YYYY-MM":e.picker==="quarter"?"YYYY-[Q]Q":e.showTime?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD"),v=y(()=>{if(e.placeholder)return e.placeholder;const n=s.value.DatePicker;return e.picker==="year"?n.yearPlaceholder:e.picker==="month"?n.monthPlaceholder:n.placeholder}),o=h(V(e.defaultValue??e.value)),p=h((o.value??d).getFullYear()),D=h((o.value??d).getMonth()),F=h(!1),k=h(e.picker==="year"?"year":e.picker==="month"?"month":"date"),M=h(),A=h(),T=h({top:0,left:0}),H=y(()=>e.open!==void 0?e.open:F.value),g=y(()=>e.value?V(e.value):o.value),N=y(()=>{const n=g.value;if(!n)return"";if(e.picker==="quarter"){const i=Math.floor(n.getMonth()/3)+1;return`${n.getFullYear()}-Q${i}`}return L(n,u.value)});re(()=>e.value,n=>{o.value=V(n)});const G=()=>{if(!M.value)return;const n=M.value.getBoundingClientRect();T.value={top:n.bottom+window.scrollY+4,left:n.left+window.scrollX}},W=()=>{if(e.disabled)return;G();const n=g.value??d;p.value=n.getFullYear(),D.value=n.getMonth(),k.value=e.picker==="year"?"year":e.picker==="month"?"month":"date",F.value=!0,l("openChange",!0)},_=()=>{F.value=!1,l("openChange",!1)},Q=n=>{var i,f;!((i=M.value)!=null&&i.contains(n.target))&&!((f=A.value)!=null&&f.contains(n.target))&&_()};se(()=>document.addEventListener("mousedown",Q)),ue(()=>document.removeEventListener("mousedown",Q));const $=n=>{var f;if((f=e.disabledDate)!=null&&f.call(e,n))return;o.value=n;const i=e.picker==="quarter"?`${n.getFullYear()}-Q${Math.floor(n.getMonth()/3)+1}`:L(n,u.value);l("update:value",i),l("change",i,n),e.showTime||_()},X=n=>{n.stopPropagation(),o.value=null,l("update:value",void 0),l("change",void 0,null)},J=()=>{D.value===0?(p.value--,D.value=11):D.value--},K=()=>{D.value===11?(p.value++,D.value=0):D.value++},q=()=>{p.value--},E=()=>{p.value++},Z=y(()=>ge(p.value,D.value)),S=y(()=>{const n=Math.floor(p.value/10)*10;return Array.from({length:10},(i,f)=>n+f)}),ee=()=>a("div",{class:`${t}-panel`},[a("div",{class:`${t}-panel-header`},[a("button",{class:`${t}-panel-header-btn`,onClick:q},[r("«")]),a("button",{class:`${t}-panel-header-btn`,onClick:J},[r("‹")]),a("span",{class:`${t}-panel-header-title`},[a("button",{class:`${t}-panel-header-title-btn`,onClick:()=>{k.value="year"}},[p.value,r("年")]),a("button",{class:`${t}-panel-header-title-btn`,onClick:()=>{k.value="month"}},[s.value.DatePicker.months[D.value]])]),a("button",{class:`${t}-panel-header-btn`,onClick:K},[r("›")]),a("button",{class:`${t}-panel-header-btn`,onClick:E},[r("»")])]),a("div",{class:`${t}-panel-body`},[a("div",{class:`${t}-weekdays`},[s.value.DatePicker.weekdays.map(n=>a("span",{key:n,class:`${t}-weekday`},[n]))]),a("div",{class:`${t}-days`},[Z.value.map(({date:n,inCurrentMonth:i},f)=>{var I;const U=O(n,d),le=g.value?O(n,g.value):!1,z=((I=e.disabledDate)==null?void 0:I.call(e,n))??!1;return a("button",{key:f,class:w(`${t}-day`,{[`${t}-day-other-month`]:!i,[`${t}-day-today`]:U,[`${t}-day-selected`]:le,[`${t}-day-disabled`]:z}),disabled:z,onClick:()=>$(n)},[n.getDate()])})])]),(e.showToday||e.showTime)&&a("div",{class:`${t}-panel-footer`},[e.showToday&&a("button",{class:`${t}-panel-footer-today`,onClick:()=>$(new Date)},[s.value.DatePicker.today]),e.showTime&&a("button",{class:`${t}-panel-footer-ok`,onClick:_},[s.value.DatePicker.ok])])]),te=()=>a("div",{class:`${t}-panel`},[a("div",{class:`${t}-panel-header`},[a("button",{class:`${t}-panel-header-btn`,onClick:q},[r("«")]),a("span",{class:`${t}-panel-header-title`},[a("button",{class:`${t}-panel-header-title-btn`,onClick:()=>{k.value="year"}},[p.value,r("年")])]),a("button",{class:`${t}-panel-header-btn`,onClick:E},[r("»")])]),a("div",{class:`${t}-panel-body`},[a("div",{class:`${t}-months`},[s.value.DatePicker.months.map((n,i)=>{const f=new Date(p.value,i,1),U=g.value?he(f,g.value):!1;return a("button",{key:i,class:w(`${t}-month`,{[`${t}-month-selected`]:U}),onClick:()=>{D.value=i,e.picker==="month"?$(f):k.value="date"}},[n])})])])]),ae=()=>a("div",{class:`${t}-panel`},[a("div",{class:`${t}-panel-header`},[a("button",{class:`${t}-panel-header-btn`,onClick:()=>{p.value-=10}},[r("«")]),a("span",{class:`${t}-panel-header-title`},[S.value[0],r("年 - "),S.value[S.value.length-1],r("年")]),a("button",{class:`${t}-panel-header-btn`,onClick:()=>{p.value+=10}},[r("»")])]),a("div",{class:`${t}-panel-body`},[a("div",{class:`${t}-years`},[S.value.map(n=>{const i=g.value?fe(new Date(n,0,1),g.value):!1;return a("button",{key:n,class:w(`${t}-year`,{[`${t}-year-selected`]:i}),onClick:()=>{p.value=n,e.picker==="year"?$(new Date(n,0,1)):k.value="month"}},[n,r("年")])})])])]),ne=()=>a("div",{class:`${t}-panel`},[a("div",{class:`${t}-panel-header`},[a("button",{class:`${t}-panel-header-btn`,onClick:q},[r("«")]),a("span",{class:`${t}-panel-header-title`},[p.value,r("年")]),a("button",{class:`${t}-panel-header-btn`,onClick:E},[r("»")])]),a("div",{class:`${t}-panel-body`},[a("div",{class:`${t}-quarters`},[[1,2,3,4].map(n=>{const i=new Date(p.value,(n-1)*3,1),f=g.value?g.value.getFullYear()===p.value&&Math.floor(g.value.getMonth()/3)+1===n:!1;return a("button",{key:n,class:w(`${t}-quarter`,{[`${t}-quarter-selected`]:f}),onClick:()=>$(i)},[r("Q"),n])})])])]);return()=>a(ce,null,[a("div",{ref:M,class:w(t,`${t}-${e.size}`,{[`${t}-open`]:H.value,[`${t}-disabled`]:e.disabled,[`${t}-status-error`]:e.status==="error",[`${t}-status-warning`]:e.status==="warning"}),onClick:W},[a("span",{class:`${t}-input`},[a("input",{readonly:!0,value:N.value,placeholder:v.value,disabled:e.disabled,class:`${t}-input-inner`},null),e.allowClear&&N.value&&!e.disabled&&a("span",{class:`${t}-clear`,onClick:X},[r("✕")]),a("span",{class:`${t}-suffix`},[r("📅")])])]),H.value&&a(ie,{to:"body"},{default:()=>[a("div",{ref:A,class:`${t}-popup`,style:{position:"absolute",top:`${T.value.top}px`,left:`${T.value.left}px`,zIndex:1050}},[k.value==="date"&&e.picker!=="quarter"&&ee(),k.value==="month"&&te(),k.value==="year"&&ae(),e.picker==="quarter"&&k.value==="date"&&ne()])]})])}}),De={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},ke=C({__name:"DatePickerBasic",setup(e){const l=h(""),t=s=>{console.log("选中日期：",s)};return(s,d)=>(P(),Y("div",De,[a(m(b),{value:l.value,"onUpdate:value":d[0]||(d[0]=u=>l.value=u),placeholder:"请选择日期",onChange:t},null,8,["value"]),c("p",null,"选中日期："+j(l.value),1)]))}}),be=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <DatePicker
      v-model:value="date"
      placeholder="请选择日期"
      @change="handleChange"
    />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref<string>('')

const handleChange = (value: string) => {
  console.log('选中日期：', value)
}
<\/script>
`,ye={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},$e=C({__name:"DatePickerDisabledDate",setup(e){const l=h(""),t=h(""),s=u=>new Date(u)<new Date(new Date().toDateString()),d=u=>new Date(u)>new Date(new Date().toDateString());return(u,v)=>(P(),Y("div",ye,[a(m(b),{value:l.value,"onUpdate:value":v[0]||(v[0]=o=>l.value=o),"disabled-date":s,placeholder:"不可选择过去日期"},null,8,["value"]),a(m(b),{value:t.value,"onUpdate:value":v[1]||(v[1]=o=>t.value=o),"disabled-date":d,placeholder:"不可选择未来日期"},null,8,["value"])]))}}),we=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <DatePicker
      v-model:value="date"
      :disabled-date="disablePastDates"
      placeholder="不可选择过去日期"
    />
    <DatePicker
      v-model:value="date2"
      :disabled-date="disableFutureDates"
      placeholder="不可选择未来日期"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')
const date2 = ref('')

const disablePastDates = (dateStr: string) => {
  return new Date(dateStr) < new Date(new Date().toDateString())
}

const disableFutureDates = (dateStr: string) => {
  return new Date(dateStr) > new Date(new Date().toDateString())
}
<\/script>
`,xe={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Ce=C({__name:"DatePickerPicker",setup(e){const l=h(""),t=h(""),s=h(""),d=h("");return(u,v)=>(P(),Y("div",xe,[a(m(b),{value:l.value,"onUpdate:value":v[0]||(v[0]=o=>l.value=o),picker:"date",placeholder:"选择日期"},null,8,["value"]),a(m(b),{value:t.value,"onUpdate:value":v[1]||(v[1]=o=>t.value=o),picker:"month",placeholder:"选择月份"},null,8,["value"]),a(m(b),{value:s.value,"onUpdate:value":v[2]||(v[2]=o=>s.value=o),picker:"quarter",placeholder:"选择季度"},null,8,["value"]),a(m(b),{value:d.value,"onUpdate:value":v[3]||(v[3]=o=>d.value=o),picker:"year",placeholder:"选择年份"},null,8,["value"])]))}}),Pe=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <DatePicker
      v-model:value="date"
      picker="date"
      placeholder="选择日期"
    />
    <DatePicker
      v-model:value="month"
      picker="month"
      placeholder="选择月份"
    />
    <DatePicker
      v-model:value="quarter"
      picker="quarter"
      placeholder="选择季度"
    />
    <DatePicker
      v-model:value="year"
      picker="year"
      placeholder="选择年份"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')
const month = ref('')
const quarter = ref('')
const year = ref('')
<\/script>
`,Ye={style:{width:"300px"}},Me={style:{"margin-top":"8px"}},Se=C({__name:"DatePickerShowTime",setup(e){const l=h(""),t=s=>{console.log("选中日期时间：",s)};return(s,d)=>(P(),Y("div",Ye,[a(m(b),{value:l.value,"onUpdate:value":d[0]||(d[0]=u=>l.value=u),"show-time":!0,placeholder:"选择日期和时间",onChange:t},null,8,["value"]),c("p",Me,"选中："+j(l.value),1)]))}}),Be=`<template>
  <div style="width: 300px;">
    <DatePicker
      v-model:value="datetime"
      :show-time="true"
      placeholder="选择日期和时间"
      @change="handleChange"
    />
    <p style="margin-top: 8px;">选中：{{ datetime }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const datetime = ref('')

const handleChange = (value: string) => {
  console.log('选中日期时间：', value)
}
<\/script>
`,Fe={class:"markdown-body"},qe={__name:"date-picker",setup(e,{expose:l}){return l({frontmatter:{}}),(s,d)=>{const u=ve("DemoBlock");return P(),Y("div",Fe,[d[0]||(d[0]=c("h1",{id:"datepicker-",tabindex:"-1"},"DatePicker 日期选择框",-1)),d[1]||(d[1]=c("p",null,"输入或选择日期的控件。",-1)),d[2]||(d[2]=c("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=c("p",null,"当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。",-1)),d[4]||(d[4]=c("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=c("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),d[6]||(d[6]=c("p",null,"最简单的用法，在浮层中可以选择或者输入日期。",-1)),a(u,{title:"基础用法",source:m(be)},{default:B(()=>[a(ke)]),_:1},8,["source"]),d[7]||(d[7]=c("h3",{id:"-picker-",tabindex:"-1"},"不同 picker 类型",-1)),d[8]||(d[8]=c("p",null,[r("通过 "),c("code",null,"picker"),r(" 属性切换不同的选择器类型。")],-1)),a(u,{title:"不同 picker 类型",source:m(Pe)},{default:B(()=>[a(Ce)]),_:1},8,["source"]),d[9]||(d[9]=c("h3",{id:"-3",tabindex:"-1"},"禁用日期",-1)),d[10]||(d[10]=c("p",null,[r("可用 "),c("code",null,"disabledDate"),r(" 禁止选择某些日期。")],-1)),a(u,{title:"禁用日期",source:m(we)},{default:B(()=>[a($e)]),_:1},8,["source"]),d[11]||(d[11]=c("h3",{id:"-4",tabindex:"-1"},"带时间的日期选择",-1)),d[12]||(d[12]=c("p",null,[r("通过 "),c("code",null,"showTime"),r(" 属性增加选择时间功能。")],-1)),a(u,{title:"带时间的日期选择",source:m(Be)},{default:B(()=>[a(Se)]),_:1},8,["source"]),d[13]||(d[13]=pe('<h2 id="api" tabindex="-1">API</h2><h3 id="datepicker-props" tabindex="-1">DatePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>日期</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认日期</td><td><code>string</code></td><td>-</td></tr><tr><td>format</td><td>展示的日期格式</td><td><code>string</code></td><td><code>&#39;YYYY-MM-DD&#39;</code></td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>placeholder</td><td>输入框提示文字</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>是否显示清除按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>picker</td><td>设置选择器类型</td><td><code>&#39;date&#39; | &#39;month&#39; | &#39;year&#39; | &#39;quarter&#39;</code></td><td><code>&#39;date&#39;</code></td></tr><tr><td>showTime</td><td>增加时间选择功能</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showToday</td><td>是否展示&quot;今天&quot;按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabledDate</td><td>不可选择的日期</td><td><code>(dateStr: string) =&gt; boolean</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>控制弹层是否展开</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="datepicker-events" tabindex="-1">DatePicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>日期发生变化的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>日期发生变化的回调</td><td><code>(value: string, dateString: string) =&gt; void</code></td></tr><tr><td>openChange</td><td>弹出日历和关闭日历的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table>',5))])}}};export{qe as default};
