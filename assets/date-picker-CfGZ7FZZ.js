import{o as Y,N as Oe,M as Ie,E as m,Q as Ee,x as qe,y as Ne,n,m as i,T as Ve,F as Ue,f,t as Ae,A as T,k as F,K as D,h as v,J as V,H as He,R as _,l as Re}from"./index-GV1C9GBE.js";import{c as x}from"./cls-S9IiI6wd.js";function $(t){return String(t).padStart(2,"0")}function z(t,l="YYYY-MM-DD"){return l.replace("YYYY",String(t.getFullYear())).replace("MM",$(t.getMonth()+1)).replace("DD",$(t.getDate())).replace("HH",$(t.getHours())).replace("mm",$(t.getMinutes())).replace("ss",$(t.getSeconds()))}function O(t){if(!t)return null;const l=new Date(t);return isNaN(l.getTime())?null:l}function oe(t,l){return t.getFullYear()===l.getFullYear()&&t.getMonth()===l.getMonth()&&t.getDate()===l.getDate()}function Qe(t,l){return t.getFullYear()===l.getFullYear()&&t.getMonth()===l.getMonth()}function je(t,l){return t.getFullYear()===l.getFullYear()}function re(t,l){return new Date(t,l+1,0).getDate()}function Le(t,l){return new Date(t,l,1).getDay()}function ze(t,l){const a=[],s=Le(t,l),d=re(t,l),c=re(t,l-1);for(let r=s-1;r>=0;r--)a.push({date:new Date(t,l-1,c-r),inCurrentMonth:!1});for(let r=1;r<=d;r++)a.push({date:new Date(t,l,r),inCurrentMonth:!0});const h=42-a.length;for(let r=1;r<=h;r++)a.push({date:new Date(t,l+1,r),inCurrentMonth:!1});return a}const y=Y({name:"DatePicker",props:{value:String,defaultValue:String,format:String,disabled:Boolean,size:{type:String,default:"middle"},placeholder:String,allowClear:{type:Boolean,default:!0},picker:{type:String,default:"date"},showTime:[Boolean,Object],showToday:{type:Boolean,default:!0},showNow:Boolean,disabledDate:Function,status:{type:String,default:""},open:{type:Boolean,default:void 0},defaultOpen:Boolean,presets:Array,minDate:String,maxDate:String,renderExtraFooter:Function,cellRender:Function},emits:["update:value","change","openChange","panelChange"],setup(t,{emit:l}){var ee,te,ae;const a=Oe("date-picker"),s=Ie(),d=new Date,c=f(()=>t.format?t.format:t.picker==="year"?"YYYY":t.picker==="month"?"YYYY-MM":t.picker==="quarter"?"YYYY-[Q]Q":t.showTime?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD"),h=f(()=>{if(t.placeholder)return t.placeholder;const e=s.value.DatePicker;return t.picker==="year"?e.yearPlaceholder:t.picker==="month"?e.monthPlaceholder:e.placeholder}),r=m(O(t.defaultValue??t.value)),S=m(((ee=r.value)==null?void 0:ee.getHours())??0),C=m(((te=r.value)==null?void 0:te.getMinutes())??0),P=m(((ae=r.value)==null?void 0:ae.getSeconds())??0),M=f(()=>t.showTime?typeof t.showTime=="boolean"?{}:t.showTime:null),I=f(()=>!!t.showTime),g=m((r.value??d).getFullYear()),w=m((r.value??d).getMonth()),U=m(t.defaultOpen??!1),k=m(t.picker==="year"?"year":t.picker==="month"?"month":"date"),E=m(),K=m(),A=m({top:0,left:0}),H=f(()=>t.open!==void 0?t.open:U.value),b=f(()=>t.value?O(t.value):r.value),J=f(()=>t.minDate?O(t.minDate):null),W=f(()=>t.maxDate?O(t.maxDate):null),X=f(()=>{const e=b.value;if(!e)return"";if(t.picker==="quarter"){const o=Math.floor(e.getMonth()/3)+1;return`${e.getFullYear()}-Q${o}`}return z(e,c.value)});Ee(()=>t.value,e=>{r.value=O(e)});const ue=()=>{if(!E.value)return;const e=E.value.getBoundingClientRect();A.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX}},se=()=>{if(t.disabled)return;ue();const e=b.value??d;g.value=e.getFullYear(),w.value=e.getMonth(),k.value=t.picker==="year"?"year":t.picker==="month"?"month":"date",I.value&&e&&(S.value=e.getHours(),C.value=e.getMinutes(),P.value=e.getSeconds()),U.value=!0,l("openChange",!0)},q=()=>{U.value=!1,l("openChange",!1)},G=e=>{var o,p;!((o=E.value)!=null&&o.contains(e.target))&&!((p=K.value)!=null&&p.contains(e.target))&&q()},Z=e=>{e.key==="Escape"&&H.value&&(q(),e.preventDefault())};qe(()=>{document.addEventListener("mousedown",G),document.addEventListener("keydown",Z)}),Ne(()=>{document.removeEventListener("mousedown",G),document.removeEventListener("keydown",Z)});const B=e=>{var p;if((p=t.disabledDate)!=null&&p.call(t,e)||J.value&&e<J.value||W.value&&e>W.value)return;if(I.value){const u=new Date(e.getFullYear(),e.getMonth(),e.getDate(),S.value,C.value,P.value);r.value=u;return}r.value=e;const o=t.picker==="quarter"?`${e.getFullYear()}-Q${Math.floor(e.getMonth()/3)+1}`:z(e,c.value);l("update:value",o),l("change",o,e),q()},ie=e=>{if(S.value=e,r.value){const o=r.value;r.value=new Date(o.getFullYear(),o.getMonth(),o.getDate(),e,C.value,P.value)}},ce=e=>{if(C.value=e,r.value){const o=r.value;r.value=new Date(o.getFullYear(),o.getMonth(),o.getDate(),S.value,e,P.value)}},ve=e=>{if(P.value=e,r.value){const o=r.value;r.value=new Date(o.getFullYear(),o.getMonth(),o.getDate(),S.value,C.value,e)}},pe=()=>{if(!r.value)return;const e=z(r.value,c.value);l("update:value",e),l("change",e,r.value),q()},me=e=>{e.stopPropagation(),r.value=null,l("update:value",void 0),l("change",void 0,null)},fe=e=>{const o=typeof e.value=="function"?e.value():e.value,p=O(o);p&&B(p)},he=()=>{w.value===0?(g.value--,w.value=11):w.value--,l("panelChange",null,k.value)},ge=()=>{w.value===11?(g.value++,w.value=0):w.value++,l("panelChange",null,k.value)},R=()=>{g.value--,l("panelChange",null,k.value)},Q=()=>{g.value++,l("panelChange",null,k.value)},De=f(()=>ze(g.value,w.value)),ke=f(()=>{const e=M.value;return e&&typeof e=="object"&&"hourStep"in e&&e.hourStep?e.hourStep:1}),be=f(()=>{const e=M.value;return e&&typeof e=="object"&&"minuteStep"in e&&e.minuteStep?e.minuteStep:1}),we=f(()=>{const e=M.value;return e&&typeof e=="object"&&"secondStep"in e&&e.secondStep?e.secondStep:1}),ye=f(()=>{const e=[];for(let o=0;o<24;o+=ke.value)e.push(o);return e}),xe=f(()=>{const e=[];for(let o=0;o<60;o+=be.value)e.push(o);return e}),$e=f(()=>{const e=[];for(let o=0;o<60;o+=we.value)e.push(o);return e}),Se=f(()=>{if(!I.value)return!1;const e=M.value&&"format"in M.value&&M.value.format?M.value.format:c.value;return e.includes("ss")||e.includes("s")}),N=f(()=>{const e=Math.floor(g.value/10)*10;return Array.from({length:10},(o,p)=>e+p)}),j=(e,o)=>{e&&Ae(()=>{const p=e.querySelector(`[data-value="${o}"]`);p&&typeof p.scrollIntoView=="function"&&p.scrollIntoView({block:"nearest"})})},Ce=()=>{var e,o,p;return n("div",{class:x(`${a}-panel`,{[`${a}-panel-has-time`]:I.value})},[n("div",{class:`${a}-panel-header`},[n("button",{class:`${a}-panel-header-btn`,onClick:R},[i("«")]),n("button",{class:`${a}-panel-header-btn`,onClick:he},[i("‹")]),n("span",{class:`${a}-panel-header-title`},[n("button",{class:`${a}-panel-header-title-btn`,onClick:()=>{k.value="year",l("panelChange",null,"year")}},[g.value,i("年")]),n("button",{class:`${a}-panel-header-title-btn`,onClick:()=>{k.value="month",l("panelChange",null,"month")}},[s.value.DatePicker.months[w.value]])]),n("button",{class:`${a}-panel-header-btn`,onClick:ge},[i("›")]),n("button",{class:`${a}-panel-header-btn`,onClick:Q},[i("»")])]),n("div",{class:`${a}-panel-body`},[n("div",{class:`${a}-weekdays`},[s.value.DatePicker.weekdays.map(u=>n("span",{key:u,class:`${a}-weekday`},[u]))]),n("div",{class:`${a}-days`},[De.value.map(({date:u,inCurrentMonth:L},Te)=>{var de;const Fe=oe(u,d),Be=b.value?oe(u,b.value):!1,ne=((de=t.disabledDate)==null?void 0:de.call(t,u))??!1,le=n("span",null,[u.getDate()]),_e=t.cellRender?t.cellRender(u,{originNode:le,today:d,type:"date"}):le;return n("button",{key:Te,class:x(`${a}-day`,{[`${a}-day-other-month`]:!L,[`${a}-day-today`]:Fe,[`${a}-day-selected`]:Be,[`${a}-day-disabled`]:ne}),disabled:ne,onClick:()=>B(u)},[_e])})])]),I.value&&n("div",{class:`${a}-time-panel`},[n("div",{class:`${a}-time-content`},[n("ul",{class:`${a}-time-column`,ref:u=>j(u,S.value)},[ye.value.map(u=>n("li",{key:u,"data-value":u,class:x(`${a}-time-cell`,{[`${a}-time-cell-selected`]:S.value===u}),onClick:()=>ie(u)},[$(u)]))]),n("ul",{class:`${a}-time-column`,ref:u=>j(u,C.value)},[xe.value.map(u=>n("li",{key:u,"data-value":u,class:x(`${a}-time-cell`,{[`${a}-time-cell-selected`]:C.value===u}),onClick:()=>ce(u)},[$(u)]))]),Se.value&&n("ul",{class:`${a}-time-column`,ref:u=>j(u,P.value)},[$e.value.map(u=>n("li",{key:u,"data-value":u,class:x(`${a}-time-cell`,{[`${a}-time-cell-selected`]:P.value===u}),onClick:()=>ve(u)},[$(u)]))])])]),(t.showToday||t.showNow||t.showTime||((e=t.presets)==null?void 0:e.length)||t.renderExtraFooter)&&n("div",{class:`${a}-panel-footer`},[n("div",{class:`${a}-panel-footer-extra`},[((o=t.presets)==null?void 0:o.length)&&n("div",{class:`${a}-presets`},[t.presets.map((u,L)=>n("button",{key:L,class:`${a}-preset-btn`,onClick:()=>fe(u)},[u.label]))]),(p=t.renderExtraFooter)==null?void 0:p.call(t)]),n("div",{class:`${a}-panel-footer-actions`},[(t.showToday||t.showNow)&&n("button",{class:`${a}-panel-footer-today`,onClick:()=>B(new Date)},[t.showNow?s.value.DatePicker.now:s.value.DatePicker.today]),t.showTime&&n("button",{class:`${a}-panel-footer-ok`,onClick:pe},[s.value.DatePicker.ok])])])])},Pe=()=>n("div",{class:`${a}-panel`},[n("div",{class:`${a}-panel-header`},[n("button",{class:`${a}-panel-header-btn`,onClick:R},[i("«")]),n("span",{class:`${a}-panel-header-title`},[n("button",{class:`${a}-panel-header-title-btn`,onClick:()=>{k.value="year",l("panelChange",null,"year")}},[g.value,i("年")])]),n("button",{class:`${a}-panel-header-btn`,onClick:Q},[i("»")])]),n("div",{class:`${a}-panel-body`},[n("div",{class:`${a}-months`},[s.value.DatePicker.months.map((e,o)=>{const p=new Date(g.value,o,1),u=b.value?Qe(p,b.value):!1;return n("button",{key:o,class:x(`${a}-month`,{[`${a}-month-selected`]:u}),onClick:()=>{w.value=o,t.picker==="month"?B(p):(k.value="date",l("panelChange",null,"date"))}},[e])})])])]),Me=()=>n("div",{class:`${a}-panel`},[n("div",{class:`${a}-panel-header`},[n("button",{class:`${a}-panel-header-btn`,onClick:()=>{g.value-=10}},[i("«")]),n("span",{class:`${a}-panel-header-title`},[N.value[0],i("年 - "),N.value[N.value.length-1],i("年")]),n("button",{class:`${a}-panel-header-btn`,onClick:()=>{g.value+=10}},[i("»")])]),n("div",{class:`${a}-panel-body`},[n("div",{class:`${a}-years`},[N.value.map(e=>{const o=b.value?je(new Date(e,0,1),b.value):!1;return n("button",{key:e,class:x(`${a}-year`,{[`${a}-year-selected`]:o}),onClick:()=>{g.value=e,t.picker==="year"?B(new Date(e,0,1)):(k.value="month",l("panelChange",null,"month"))}},[e,i("年")])})])])]),Ye=()=>n("div",{class:`${a}-panel`},[n("div",{class:`${a}-panel-header`},[n("button",{class:`${a}-panel-header-btn`,onClick:R},[i("«")]),n("span",{class:`${a}-panel-header-title`},[g.value,i("年")]),n("button",{class:`${a}-panel-header-btn`,onClick:Q},[i("»")])]),n("div",{class:`${a}-panel-body`},[n("div",{class:`${a}-quarters`},[[1,2,3,4].map(e=>{const o=new Date(g.value,(e-1)*3,1),p=b.value?b.value.getFullYear()===g.value&&Math.floor(b.value.getMonth()/3)+1===e:!1;return n("button",{key:e,class:x(`${a}-quarter`,{[`${a}-quarter-selected`]:p}),onClick:()=>B(o)},[i("Q"),e])})])])]);return()=>n(Ue,null,[n("div",{ref:E,class:x(a,`${a}-${t.size}`,{[`${a}-open`]:H.value,[`${a}-disabled`]:t.disabled,[`${a}-status-error`]:t.status==="error",[`${a}-status-warning`]:t.status==="warning"}),onClick:se},[n("span",{class:`${a}-input`},[n("input",{readonly:!0,value:X.value,placeholder:h.value,disabled:t.disabled,class:`${a}-input-inner`},null),t.allowClear&&X.value&&!t.disabled&&n("span",{class:`${a}-clear`,onClick:me},[i("✕")]),n("span",{class:`${a}-suffix`},[i("📅")])])]),H.value&&n(Ve,{to:"body"},{default:()=>[n("div",{ref:K,class:`${a}-popup`,style:{position:"absolute",top:`${A.value.top}px`,left:`${A.value.left}px`,zIndex:1050}},[k.value==="date"&&t.picker!=="quarter"&&Ce(),k.value==="month"&&Pe(),k.value==="year"&&Me(),t.picker==="quarter"&&k.value==="date"&&Ye()])]})])}}),Ke={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Je=Y({__name:"DatePickerBasic",setup(t){const l=m(""),a=s=>{console.log("选中日期：",s)};return(s,d)=>(T(),F("div",Ke,[n(D(y),{value:l.value,"onUpdate:value":d[0]||(d[0]=c=>l.value=c),placeholder:"请选择日期",onChange:a},null,8,["value"]),v("p",null,"选中日期："+V(l.value),1)]))}}),We=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" placeholder="请选择日期" @change="handleChange" />
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
`,Xe={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Ge=Y({__name:"DatePickerDisabledDate",setup(t){const l=m(""),a=m(""),s=c=>new Date(c)<new Date(new Date().toDateString()),d=c=>new Date(c)>new Date(new Date().toDateString());return(c,h)=>(T(),F("div",Xe,[n(D(y),{value:l.value,"onUpdate:value":h[0]||(h[0]=r=>l.value=r),"disabled-date":s,placeholder:"不可选择过去日期"},null,8,["value"]),n(D(y),{value:a.value,"onUpdate:value":h[1]||(h[1]=r=>a.value=r),"disabled-date":d,placeholder:"不可选择未来日期"},null,8,["value"])]))}}),Ze=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" :disabled-date="disablePastDates" placeholder="不可选择过去日期" />
    <DatePicker v-model:value="date2" :disabled-date="disableFutureDates" placeholder="不可选择未来日期" />
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
`,et={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},tt=Y({__name:"DatePickerMinMax",setup(t){const l=m(""),a=f(()=>{const d=new Date;return d.setDate(1),d.toISOString().split("T")[0]}),s=f(()=>{const d=new Date;return d.setMonth(d.getMonth()+1,0),d.toISOString().split("T")[0]});return(d,c)=>(T(),F("div",et,[n(D(y),{value:l.value,"onUpdate:value":c[0]||(c[0]=h=>l.value=h),"min-date":a.value,"max-date":s.value,placeholder:"只能选择本月"},null,8,["value","min-date","max-date"]),v("p",null,"选中日期："+V(l.value),1)]))}}),at=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" :min-date="minDate" :max-date="maxDate" placeholder="只能选择本月" />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')

const minDate = computed(() => {
  const d = new Date()
  d.setDate(1)
  return d.toISOString().split('T')[0]
})

const maxDate = computed(() => {
  const d = new Date()
  d.setMonth(d.getMonth() + 1, 0)
  return d.toISOString().split('T')[0]
})
<\/script>
`,nt={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},lt=Y({__name:"DatePickerPicker",setup(t){const l=m(""),a=m(""),s=m(""),d=m("");return(c,h)=>(T(),F("div",nt,[n(D(y),{value:l.value,"onUpdate:value":h[0]||(h[0]=r=>l.value=r),picker:"date",placeholder:"选择日期"},null,8,["value"]),n(D(y),{value:a.value,"onUpdate:value":h[1]||(h[1]=r=>a.value=r),picker:"month",placeholder:"选择月份"},null,8,["value"]),n(D(y),{value:s.value,"onUpdate:value":h[2]||(h[2]=r=>s.value=r),picker:"quarter",placeholder:"选择季度"},null,8,["value"]),n(D(y),{value:d.value,"onUpdate:value":h[3]||(h[3]=r=>d.value=r),picker:"year",placeholder:"选择年份"},null,8,["value"])]))}}),dt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" picker="date" placeholder="选择日期" />
    <DatePicker v-model:value="month" picker="month" placeholder="选择月份" />
    <DatePicker v-model:value="quarter" picker="quarter" placeholder="选择季度" />
    <DatePicker v-model:value="year" picker="year" placeholder="选择年份" />
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
`,ot={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},rt=Y({__name:"DatePickerPresets",setup(t){const l=m(""),a=[{label:"昨天",value:()=>{const s=new Date;return s.setDate(s.getDate()-1),s.toISOString().split("T")[0]}},{label:"今天",value:()=>new Date().toISOString().split("T")[0]},{label:"明天",value:()=>{const s=new Date;return s.setDate(s.getDate()+1),s.toISOString().split("T")[0]}},{label:"一周后",value:()=>{const s=new Date;return s.setDate(s.getDate()+7),s.toISOString().split("T")[0]}}];return(s,d)=>(T(),F("div",ot,[n(D(y),{value:l.value,"onUpdate:value":d[0]||(d[0]=c=>l.value=c),presets:a,placeholder:"选择日期"},null,8,["value"]),v("p",null,"选中日期："+V(l.value),1)]))}}),ut=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" :presets="presets" placeholder="选择日期" />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')

const presets = [
  {
    label: '昨天',
    value: () => {
      const d = new Date()
      d.setDate(d.getDate() - 1)
      return d.toISOString().split('T')[0]
    },
  },
  { label: '今天', value: () => new Date().toISOString().split('T')[0] },
  {
    label: '明天',
    value: () => {
      const d = new Date()
      d.setDate(d.getDate() + 1)
      return d.toISOString().split('T')[0]
    },
  },
  {
    label: '一周后',
    value: () => {
      const d = new Date()
      d.setDate(d.getDate() + 7)
      return d.toISOString().split('T')[0]
    },
  },
]
<\/script>
`,st={style:{width:"300px"}},it={style:{"margin-top":"8px"}},ct=Y({__name:"DatePickerShowTime",setup(t){const l=m(""),a=s=>{console.log("选中日期时间：",s)};return(s,d)=>(T(),F("div",st,[n(D(y),{value:l.value,"onUpdate:value":d[0]||(d[0]=c=>l.value=c),"show-time":!0,placeholder:"选择日期和时间",onChange:a},null,8,["value"]),v("p",it,"选中："+V(l.value),1)]))}}),vt=`<template>
  <div style="width: 300px">
    <DatePicker v-model:value="datetime" :show-time="true" placeholder="选择日期和时间" @change="handleChange" />
    <p style="margin-top: 8px">选中：{{ datetime }}</p>
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
`,pt={class:"markdown-body"},ht={__name:"date-picker",setup(t,{expose:l}){return l({frontmatter:{}}),(s,d)=>{const c=He("DemoBlock");return T(),F("div",pt,[d[0]||(d[0]=v("h1",{id:"datepicker-",tabindex:"-1"},"DatePicker 日期选择框",-1)),d[1]||(d[1]=v("p",null,"输入或选择日期的控件。",-1)),d[2]||(d[2]=v("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=v("p",null,"当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。",-1)),d[4]||(d[4]=v("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=v("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),d[6]||(d[6]=v("p",null,"最简单的用法，在浮层中可以选择或者输入日期。",-1)),n(c,{title:"基础用法",source:D(We)},{default:_(()=>[n(Je)]),_:1},8,["source"]),d[7]||(d[7]=v("h3",{id:"-picker-",tabindex:"-1"},"不同 picker 类型",-1)),d[8]||(d[8]=v("p",null,[i("通过 "),v("code",null,"picker"),i(" 属性切换不同的选择器类型。")],-1)),n(c,{title:"不同 picker 类型",source:D(dt)},{default:_(()=>[n(lt)]),_:1},8,["source"]),d[9]||(d[9]=v("h3",{id:"-3",tabindex:"-1"},"禁用日期",-1)),d[10]||(d[10]=v("p",null,[i("可用 "),v("code",null,"disabledDate"),i(" 禁止选择某些日期。")],-1)),n(c,{title:"禁用日期",source:D(Ze)},{default:_(()=>[n(Ge)]),_:1},8,["source"]),d[11]||(d[11]=v("h3",{id:"-4",tabindex:"-1"},"带时间的日期选择",-1)),d[12]||(d[12]=v("p",null,[i("通过 "),v("code",null,"showTime"),i(" 属性增加选择时间功能。")],-1)),n(c,{title:"带时间的日期选择",source:D(vt)},{default:_(()=>[n(ct)]),_:1},8,["source"]),d[13]||(d[13]=v("h3",{id:"-5",tabindex:"-1"},"预设范围",-1)),d[14]||(d[14]=v("p",null,[i("通过 "),v("code",null,"presets"),i(" 属性提供快捷选择。")],-1)),n(c,{title:"预设范围",source:D(ut)},{default:_(()=>[n(rt)]),_:1},8,["source"]),d[15]||(d[15]=v("h3",{id:"-6",tabindex:"-1"},"限制日期范围",-1)),d[16]||(d[16]=v("p",null,[i("通过 "),v("code",null,"minDate"),i(" 和 "),v("code",null,"maxDate"),i(" 限制可选日期范围。")],-1)),n(c,{title:"限制日期范围",source:D(at)},{default:_(()=>[n(tt)]),_:1},8,["source"]),d[17]||(d[17]=Re('<h2 id="api" tabindex="-1">API</h2><h3 id="datepicker-props" tabindex="-1">DatePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>日期</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认日期</td><td><code>string</code></td><td>-</td></tr><tr><td>format</td><td>展示的日期格式</td><td><code>string</code></td><td><code>&#39;YYYY-MM-DD&#39;</code></td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>placeholder</td><td>输入框提示文字</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>是否显示清除按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>picker</td><td>设置选择器类型</td><td><code>&#39;date&#39; | &#39;month&#39; | &#39;year&#39; | &#39;quarter&#39;</code></td><td><code>&#39;date&#39;</code></td></tr><tr><td>showTime</td><td>增加时间选择功能，可配置时分秒步长</td><td><code>boolean | { format?, hourStep?, minuteStep?, secondStep? }</code></td><td><code>false</code></td></tr><tr><td>showToday</td><td>是否展示&quot;今天&quot;按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showNow</td><td>是否展示&quot;此刻&quot;按钮（优先于 showToday）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabledDate</td><td>不可选择的日期</td><td><code>(dateStr: string) =&gt; boolean</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>控制弹层是否展开</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否展开弹层</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>presets</td><td>预设时间范围快捷选择</td><td><code>PresetItem[]</code></td><td>-</td></tr><tr><td>minDate</td><td>最小可选日期</td><td><code>string</code></td><td>-</td></tr><tr><td>maxDate</td><td>最大可选日期</td><td><code>string</code></td><td>-</td></tr><tr><td>renderExtraFooter</td><td>在面板中添加额外的页脚</td><td><code>() =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="datepicker-events" tabindex="-1">DatePicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>日期发生变化的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>日期发生变化的回调</td><td><code>(value: string, dateString: string) =&gt; void</code></td></tr><tr><td>openChange</td><td>弹出日历和关闭日历的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>panelChange</td><td>日历面板切换的回调</td><td><code>(value: any, mode: string) =&gt; void</code></td></tr></tbody></table><h3 id="presetitem" tabindex="-1">PresetItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>预设项显示文本</td><td><code>string</code></td></tr><tr><td>value</td><td>预设值</td><td><code>string | (() =&gt; string)</code></td></tr></tbody></table>',7))])}}};export{ht as default};
