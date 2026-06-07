import{n as Y,M as Oe,L as Ie,D as m,P as qe,w as Ee,x as Ne,m as a,l as i,T as Ve,F as Ue,e as f,s as Ae,z as T,j as F,J as D,g as v,I as V,G as He,Q as _,k as je}from"./index-i0jnWELi.js";import{c as x}from"./cls-S9IiI6wd.js";function $(t){return String(t).padStart(2,"0")}function z(t,l="YYYY-MM-DD"){return l.replace("YYYY",String(t.getFullYear())).replace("MM",$(t.getMonth()+1)).replace("DD",$(t.getDate())).replace("HH",$(t.getHours())).replace("mm",$(t.getMinutes())).replace("ss",$(t.getSeconds()))}function O(t){if(!t)return null;const l=new Date(t);return isNaN(l.getTime())?null:l}function oe(t,l){return t.getFullYear()===l.getFullYear()&&t.getMonth()===l.getMonth()&&t.getDate()===l.getDate()}function Qe(t,l){return t.getFullYear()===l.getFullYear()&&t.getMonth()===l.getMonth()}function Re(t,l){return t.getFullYear()===l.getFullYear()}function re(t,l){return new Date(t,l+1,0).getDate()}function Le(t,l){return new Date(t,l,1).getDay()}function ze(t,l){const n=[],u=Le(t,l),d=re(t,l),c=re(t,l-1);for(let r=u-1;r>=0;r--)n.push({date:new Date(t,l-1,c-r),inCurrentMonth:!1});for(let r=1;r<=d;r++)n.push({date:new Date(t,l,r),inCurrentMonth:!0});const h=42-n.length;for(let r=1;r<=h;r++)n.push({date:new Date(t,l+1,r),inCurrentMonth:!1});return n}const y=Y({name:"DatePicker",props:{value:String,defaultValue:String,format:String,disabled:Boolean,size:{type:String,default:"middle"},placeholder:String,allowClear:{type:Boolean,default:!0},picker:{type:String,default:"date"},showTime:[Boolean,Object],showToday:{type:Boolean,default:!0},showNow:Boolean,disabledDate:Function,status:{type:String,default:""},open:{type:Boolean,default:void 0},defaultOpen:Boolean,presets:Array,minDate:String,maxDate:String,renderExtraFooter:Function,cellRender:Function},emits:["update:value","change","openChange","panelChange"],setup(t,{emit:l}){var ee,te,ne;const n=Oe("date-picker"),u=Ie(),d=new Date,c=f(()=>t.format?t.format:t.picker==="year"?"YYYY":t.picker==="month"?"YYYY-MM":t.picker==="quarter"?"YYYY-[Q]Q":t.showTime?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD"),h=f(()=>{if(t.placeholder)return t.placeholder;const e=u.value.DatePicker;return t.picker==="year"?e.yearPlaceholder:t.picker==="month"?e.monthPlaceholder:e.placeholder}),r=m(O(t.defaultValue??t.value)),S=m(((ee=r.value)==null?void 0:ee.getHours())??0),C=m(((te=r.value)==null?void 0:te.getMinutes())??0),P=m(((ne=r.value)==null?void 0:ne.getSeconds())??0),M=f(()=>t.showTime?typeof t.showTime=="boolean"?{}:t.showTime:null),I=f(()=>!!t.showTime),g=m((r.value??d).getFullYear()),w=m((r.value??d).getMonth()),U=m(t.defaultOpen??!1),k=m(t.picker==="year"?"year":t.picker==="month"?"month":"date"),q=m(),G=m(),A=m({top:0,left:0}),H=f(()=>t.open!==void 0?t.open:U.value),b=f(()=>t.value?O(t.value):r.value),J=f(()=>t.minDate?O(t.minDate):null),K=f(()=>t.maxDate?O(t.maxDate):null),W=f(()=>{const e=b.value;if(!e)return"";if(t.picker==="quarter"){const o=Math.floor(e.getMonth()/3)+1;return`${e.getFullYear()}-Q${o}`}return z(e,c.value)});qe(()=>t.value,e=>{r.value=O(e)});const se=()=>{if(!q.value)return;const e=q.value.getBoundingClientRect();A.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX}},ue=()=>{if(t.disabled)return;se();const e=b.value??d;g.value=e.getFullYear(),w.value=e.getMonth(),k.value=t.picker==="year"?"year":t.picker==="month"?"month":"date",I.value&&e&&(S.value=e.getHours(),C.value=e.getMinutes(),P.value=e.getSeconds()),U.value=!0,l("openChange",!0)},E=()=>{U.value=!1,l("openChange",!1)},X=e=>{var o,p;!((o=q.value)!=null&&o.contains(e.target))&&!((p=G.value)!=null&&p.contains(e.target))&&E()},Z=e=>{e.key==="Escape"&&H.value&&(E(),e.preventDefault())};Ee(()=>{document.addEventListener("mousedown",X),document.addEventListener("keydown",Z)}),Ne(()=>{document.removeEventListener("mousedown",X),document.removeEventListener("keydown",Z)});const B=e=>{var p;if((p=t.disabledDate)!=null&&p.call(t,e)||J.value&&e<J.value||K.value&&e>K.value)return;if(I.value){const s=new Date(e.getFullYear(),e.getMonth(),e.getDate(),S.value,C.value,P.value);r.value=s;return}r.value=e;const o=t.picker==="quarter"?`${e.getFullYear()}-Q${Math.floor(e.getMonth()/3)+1}`:z(e,c.value);l("update:value",o),l("change",o,e),E()},ie=e=>{if(S.value=e,r.value){const o=r.value;r.value=new Date(o.getFullYear(),o.getMonth(),o.getDate(),e,C.value,P.value)}},ce=e=>{if(C.value=e,r.value){const o=r.value;r.value=new Date(o.getFullYear(),o.getMonth(),o.getDate(),S.value,e,P.value)}},ve=e=>{if(P.value=e,r.value){const o=r.value;r.value=new Date(o.getFullYear(),o.getMonth(),o.getDate(),S.value,C.value,e)}},pe=()=>{if(!r.value)return;const e=z(r.value,c.value);l("update:value",e),l("change",e,r.value),E()},me=e=>{e.stopPropagation(),r.value=null,l("update:value",void 0),l("change",void 0,null)},fe=e=>{const o=typeof e.value=="function"?e.value():e.value,p=O(o);p&&B(p)},he=()=>{w.value===0?(g.value--,w.value=11):w.value--,l("panelChange",null,k.value)},ge=()=>{w.value===11?(g.value++,w.value=0):w.value++,l("panelChange",null,k.value)},j=()=>{g.value--,l("panelChange",null,k.value)},Q=()=>{g.value++,l("panelChange",null,k.value)},De=f(()=>ze(g.value,w.value)),ke=f(()=>{const e=M.value;return e&&typeof e=="object"&&"hourStep"in e&&e.hourStep?e.hourStep:1}),be=f(()=>{const e=M.value;return e&&typeof e=="object"&&"minuteStep"in e&&e.minuteStep?e.minuteStep:1}),we=f(()=>{const e=M.value;return e&&typeof e=="object"&&"secondStep"in e&&e.secondStep?e.secondStep:1}),ye=f(()=>{const e=[];for(let o=0;o<24;o+=ke.value)e.push(o);return e}),xe=f(()=>{const e=[];for(let o=0;o<60;o+=be.value)e.push(o);return e}),$e=f(()=>{const e=[];for(let o=0;o<60;o+=we.value)e.push(o);return e}),Se=f(()=>{if(!I.value)return!1;const e=M.value&&"format"in M.value&&M.value.format?M.value.format:c.value;return e.includes("ss")||e.includes("s")}),N=f(()=>{const e=Math.floor(g.value/10)*10;return Array.from({length:10},(o,p)=>e+p)}),R=(e,o)=>{e&&Ae(()=>{const p=e.querySelector(`[data-value="${o}"]`);p&&typeof p.scrollIntoView=="function"&&p.scrollIntoView({block:"nearest"})})},Ce=()=>{var e,o,p;return a("div",{class:x(`${n}-panel`,{[`${n}-panel-has-time`]:I.value})},[a("div",{class:`${n}-panel-header`},[a("button",{class:`${n}-panel-header-btn`,onClick:j},[i("«")]),a("button",{class:`${n}-panel-header-btn`,onClick:he},[i("‹")]),a("span",{class:`${n}-panel-header-title`},[a("button",{class:`${n}-panel-header-title-btn`,onClick:()=>{k.value="year",l("panelChange",null,"year")}},[g.value,i("年")]),a("button",{class:`${n}-panel-header-title-btn`,onClick:()=>{k.value="month",l("panelChange",null,"month")}},[u.value.DatePicker.months[w.value]])]),a("button",{class:`${n}-panel-header-btn`,onClick:ge},[i("›")]),a("button",{class:`${n}-panel-header-btn`,onClick:Q},[i("»")])]),a("div",{class:`${n}-panel-body`},[a("div",{class:`${n}-weekdays`},[u.value.DatePicker.weekdays.map(s=>a("span",{key:s,class:`${n}-weekday`},[s]))]),a("div",{class:`${n}-days`},[De.value.map(({date:s,inCurrentMonth:L},Te)=>{var de;const Fe=oe(s,d),Be=b.value?oe(s,b.value):!1,ae=((de=t.disabledDate)==null?void 0:de.call(t,s))??!1,le=a("span",null,[s.getDate()]),_e=t.cellRender?t.cellRender(s,{originNode:le,today:d,type:"date"}):le;return a("button",{key:Te,class:x(`${n}-day`,{[`${n}-day-other-month`]:!L,[`${n}-day-today`]:Fe,[`${n}-day-selected`]:Be,[`${n}-day-disabled`]:ae}),disabled:ae,onClick:()=>B(s)},[_e])})])]),I.value&&a("div",{class:`${n}-time-panel`},[a("div",{class:`${n}-time-content`},[a("ul",{class:`${n}-time-column`,ref:s=>R(s,S.value)},[ye.value.map(s=>a("li",{key:s,"data-value":s,class:x(`${n}-time-cell`,{[`${n}-time-cell-selected`]:S.value===s}),onClick:()=>ie(s)},[$(s)]))]),a("ul",{class:`${n}-time-column`,ref:s=>R(s,C.value)},[xe.value.map(s=>a("li",{key:s,"data-value":s,class:x(`${n}-time-cell`,{[`${n}-time-cell-selected`]:C.value===s}),onClick:()=>ce(s)},[$(s)]))]),Se.value&&a("ul",{class:`${n}-time-column`,ref:s=>R(s,P.value)},[$e.value.map(s=>a("li",{key:s,"data-value":s,class:x(`${n}-time-cell`,{[`${n}-time-cell-selected`]:P.value===s}),onClick:()=>ve(s)},[$(s)]))])])]),(t.showToday||t.showNow||t.showTime||((e=t.presets)==null?void 0:e.length)||t.renderExtraFooter)&&a("div",{class:`${n}-panel-footer`},[a("div",{class:`${n}-panel-footer-extra`},[((o=t.presets)==null?void 0:o.length)&&a("div",{class:`${n}-presets`},[t.presets.map((s,L)=>a("button",{key:L,class:`${n}-preset-btn`,onClick:()=>fe(s)},[s.label]))]),(p=t.renderExtraFooter)==null?void 0:p.call(t)]),a("div",{class:`${n}-panel-footer-actions`},[(t.showToday||t.showNow)&&a("button",{class:`${n}-panel-footer-today`,onClick:()=>B(new Date)},[t.showNow?u.value.DatePicker.now:u.value.DatePicker.today]),t.showTime&&a("button",{class:`${n}-panel-footer-ok`,onClick:pe},[u.value.DatePicker.ok])])])])},Pe=()=>a("div",{class:`${n}-panel`},[a("div",{class:`${n}-panel-header`},[a("button",{class:`${n}-panel-header-btn`,onClick:j},[i("«")]),a("span",{class:`${n}-panel-header-title`},[a("button",{class:`${n}-panel-header-title-btn`,onClick:()=>{k.value="year",l("panelChange",null,"year")}},[g.value,i("年")])]),a("button",{class:`${n}-panel-header-btn`,onClick:Q},[i("»")])]),a("div",{class:`${n}-panel-body`},[a("div",{class:`${n}-months`},[u.value.DatePicker.months.map((e,o)=>{const p=new Date(g.value,o,1),s=b.value?Qe(p,b.value):!1;return a("button",{key:o,class:x(`${n}-month`,{[`${n}-month-selected`]:s}),onClick:()=>{w.value=o,t.picker==="month"?B(p):(k.value="date",l("panelChange",null,"date"))}},[e])})])])]),Me=()=>a("div",{class:`${n}-panel`},[a("div",{class:`${n}-panel-header`},[a("button",{class:`${n}-panel-header-btn`,onClick:()=>{g.value-=10}},[i("«")]),a("span",{class:`${n}-panel-header-title`},[N.value[0],i("年 - "),N.value[N.value.length-1],i("年")]),a("button",{class:`${n}-panel-header-btn`,onClick:()=>{g.value+=10}},[i("»")])]),a("div",{class:`${n}-panel-body`},[a("div",{class:`${n}-years`},[N.value.map(e=>{const o=b.value?Re(new Date(e,0,1),b.value):!1;return a("button",{key:e,class:x(`${n}-year`,{[`${n}-year-selected`]:o}),onClick:()=>{g.value=e,t.picker==="year"?B(new Date(e,0,1)):(k.value="month",l("panelChange",null,"month"))}},[e,i("年")])})])])]),Ye=()=>a("div",{class:`${n}-panel`},[a("div",{class:`${n}-panel-header`},[a("button",{class:`${n}-panel-header-btn`,onClick:j},[i("«")]),a("span",{class:`${n}-panel-header-title`},[g.value,i("年")]),a("button",{class:`${n}-panel-header-btn`,onClick:Q},[i("»")])]),a("div",{class:`${n}-panel-body`},[a("div",{class:`${n}-quarters`},[[1,2,3,4].map(e=>{const o=new Date(g.value,(e-1)*3,1),p=b.value?b.value.getFullYear()===g.value&&Math.floor(b.value.getMonth()/3)+1===e:!1;return a("button",{key:e,class:x(`${n}-quarter`,{[`${n}-quarter-selected`]:p}),onClick:()=>B(o)},[i("Q"),e])})])])]);return()=>a(Ue,null,[a("div",{ref:q,class:x(n,`${n}-${t.size}`,{[`${n}-open`]:H.value,[`${n}-disabled`]:t.disabled,[`${n}-status-error`]:t.status==="error",[`${n}-status-warning`]:t.status==="warning"}),onClick:ue},[a("span",{class:`${n}-input`},[a("input",{readonly:!0,value:W.value,placeholder:h.value,disabled:t.disabled,class:`${n}-input-inner`},null),t.allowClear&&W.value&&!t.disabled&&a("span",{class:`${n}-clear`,onClick:me},[i("✕")]),a("span",{class:`${n}-suffix`},[i("📅")])])]),H.value&&a(Ve,{to:"body"},{default:()=>[a("div",{ref:G,class:`${n}-popup`,style:{position:"absolute",top:`${A.value.top}px`,left:`${A.value.left}px`,zIndex:1050}},[k.value==="date"&&t.picker!=="quarter"&&Ce(),k.value==="month"&&Pe(),k.value==="year"&&Me(),t.picker==="quarter"&&k.value==="date"&&Ye()])]})])}}),Ge={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Je=Y({__name:"DatePickerBasic",setup(t){const l=m(""),n=u=>{console.log("选中日期：",u)};return(u,d)=>(T(),F("div",Ge,[a(D(y),{value:l.value,"onUpdate:value":d[0]||(d[0]=c=>l.value=c),placeholder:"请选择日期",onChange:n},null,8,["value"]),v("p",null,"选中日期："+V(l.value),1)]))}}),Ke=`<template>
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
`,We={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Xe=Y({__name:"DatePickerDisabledDate",setup(t){const l=m(""),n=m(""),u=c=>new Date(c)<new Date(new Date().toDateString()),d=c=>new Date(c)>new Date(new Date().toDateString());return(c,h)=>(T(),F("div",We,[a(D(y),{value:l.value,"onUpdate:value":h[0]||(h[0]=r=>l.value=r),"disabled-date":u,placeholder:"不可选择过去日期"},null,8,["value"]),a(D(y),{value:n.value,"onUpdate:value":h[1]||(h[1]=r=>n.value=r),"disabled-date":d,placeholder:"不可选择未来日期"},null,8,["value"])]))}}),Ze=`<template>
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
`,et={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},tt=Y({__name:"DatePickerMinMax",setup(t){const l=m(""),n=f(()=>{const d=new Date;return d.setDate(1),d.toISOString().split("T")[0]}),u=f(()=>{const d=new Date;return d.setMonth(d.getMonth()+1,0),d.toISOString().split("T")[0]});return(d,c)=>(T(),F("div",et,[a(D(y),{value:l.value,"onUpdate:value":c[0]||(c[0]=h=>l.value=h),"min-date":n.value,"max-date":u.value,placeholder:"只能选择本月"},null,8,["value","min-date","max-date"]),v("p",null,"选中日期："+V(l.value),1)]))}}),nt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <DatePicker
      v-model:value="date"
      :min-date="minDate"
      :max-date="maxDate"
      placeholder="只能选择本月"
    />
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
`,at={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},lt=Y({__name:"DatePickerPicker",setup(t){const l=m(""),n=m(""),u=m(""),d=m("");return(c,h)=>(T(),F("div",at,[a(D(y),{value:l.value,"onUpdate:value":h[0]||(h[0]=r=>l.value=r),picker:"date",placeholder:"选择日期"},null,8,["value"]),a(D(y),{value:n.value,"onUpdate:value":h[1]||(h[1]=r=>n.value=r),picker:"month",placeholder:"选择月份"},null,8,["value"]),a(D(y),{value:u.value,"onUpdate:value":h[2]||(h[2]=r=>u.value=r),picker:"quarter",placeholder:"选择季度"},null,8,["value"]),a(D(y),{value:d.value,"onUpdate:value":h[3]||(h[3]=r=>d.value=r),picker:"year",placeholder:"选择年份"},null,8,["value"])]))}}),dt=`<template>
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
`,ot={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},rt=Y({__name:"DatePickerPresets",setup(t){const l=m(""),n=[{label:"昨天",value:()=>{const u=new Date;return u.setDate(u.getDate()-1),u.toISOString().split("T")[0]}},{label:"今天",value:()=>new Date().toISOString().split("T")[0]},{label:"明天",value:()=>{const u=new Date;return u.setDate(u.getDate()+1),u.toISOString().split("T")[0]}},{label:"一周后",value:()=>{const u=new Date;return u.setDate(u.getDate()+7),u.toISOString().split("T")[0]}}];return(u,d)=>(T(),F("div",ot,[a(D(y),{value:l.value,"onUpdate:value":d[0]||(d[0]=c=>l.value=c),presets:n,placeholder:"选择日期"},null,8,["value"]),v("p",null,"选中日期："+V(l.value),1)]))}}),st=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <DatePicker
      v-model:value="date"
      :presets="presets"
      placeholder="选择日期"
    />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')

const presets = [
  { label: '昨天', value: () => {
    const d = new Date()
    d.setDate(d.getDate() - 1)
    return d.toISOString().split('T')[0]
  }},
  { label: '今天', value: () => new Date().toISOString().split('T')[0] },
  { label: '明天', value: () => {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    return d.toISOString().split('T')[0]
  }},
  { label: '一周后', value: () => {
    const d = new Date()
    d.setDate(d.getDate() + 7)
    return d.toISOString().split('T')[0]
  }},
]
<\/script>
`,ut={style:{width:"300px"}},it={style:{"margin-top":"8px"}},ct=Y({__name:"DatePickerShowTime",setup(t){const l=m(""),n=u=>{console.log("选中日期时间：",u)};return(u,d)=>(T(),F("div",ut,[a(D(y),{value:l.value,"onUpdate:value":d[0]||(d[0]=c=>l.value=c),"show-time":!0,placeholder:"选择日期和时间",onChange:n},null,8,["value"]),v("p",it,"选中："+V(l.value),1)]))}}),vt=`<template>
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
`,pt={class:"markdown-body"},ht={__name:"date-picker",setup(t,{expose:l}){return l({frontmatter:{}}),(u,d)=>{const c=He("DemoBlock");return T(),F("div",pt,[d[0]||(d[0]=v("h1",{id:"datepicker-",tabindex:"-1"},"DatePicker 日期选择框",-1)),d[1]||(d[1]=v("p",null,"输入或选择日期的控件。",-1)),d[2]||(d[2]=v("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=v("p",null,"当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。",-1)),d[4]||(d[4]=v("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=v("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),d[6]||(d[6]=v("p",null,"最简单的用法，在浮层中可以选择或者输入日期。",-1)),a(c,{title:"基础用法",source:D(Ke)},{default:_(()=>[a(Je)]),_:1},8,["source"]),d[7]||(d[7]=v("h3",{id:"-picker-",tabindex:"-1"},"不同 picker 类型",-1)),d[8]||(d[8]=v("p",null,[i("通过 "),v("code",null,"picker"),i(" 属性切换不同的选择器类型。")],-1)),a(c,{title:"不同 picker 类型",source:D(dt)},{default:_(()=>[a(lt)]),_:1},8,["source"]),d[9]||(d[9]=v("h3",{id:"-3",tabindex:"-1"},"禁用日期",-1)),d[10]||(d[10]=v("p",null,[i("可用 "),v("code",null,"disabledDate"),i(" 禁止选择某些日期。")],-1)),a(c,{title:"禁用日期",source:D(Ze)},{default:_(()=>[a(Xe)]),_:1},8,["source"]),d[11]||(d[11]=v("h3",{id:"-4",tabindex:"-1"},"带时间的日期选择",-1)),d[12]||(d[12]=v("p",null,[i("通过 "),v("code",null,"showTime"),i(" 属性增加选择时间功能。")],-1)),a(c,{title:"带时间的日期选择",source:D(vt)},{default:_(()=>[a(ct)]),_:1},8,["source"]),d[13]||(d[13]=v("h3",{id:"-5",tabindex:"-1"},"预设范围",-1)),d[14]||(d[14]=v("p",null,[i("通过 "),v("code",null,"presets"),i(" 属性提供快捷选择。")],-1)),a(c,{title:"预设范围",source:D(st)},{default:_(()=>[a(rt)]),_:1},8,["source"]),d[15]||(d[15]=v("h3",{id:"-6",tabindex:"-1"},"限制日期范围",-1)),d[16]||(d[16]=v("p",null,[i("通过 "),v("code",null,"minDate"),i(" 和 "),v("code",null,"maxDate"),i(" 限制可选日期范围。")],-1)),a(c,{title:"限制日期范围",source:D(nt)},{default:_(()=>[a(tt)]),_:1},8,["source"]),d[17]||(d[17]=je('<h2 id="api" tabindex="-1">API</h2><h3 id="datepicker-props" tabindex="-1">DatePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>日期</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认日期</td><td><code>string</code></td><td>-</td></tr><tr><td>format</td><td>展示的日期格式</td><td><code>string</code></td><td><code>&#39;YYYY-MM-DD&#39;</code></td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>placeholder</td><td>输入框提示文字</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>是否显示清除按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>picker</td><td>设置选择器类型</td><td><code>&#39;date&#39; | &#39;month&#39; | &#39;year&#39; | &#39;quarter&#39;</code></td><td><code>&#39;date&#39;</code></td></tr><tr><td>showTime</td><td>增加时间选择功能，可配置时分秒步长</td><td><code>boolean | { format?, hourStep?, minuteStep?, secondStep? }</code></td><td><code>false</code></td></tr><tr><td>showToday</td><td>是否展示&quot;今天&quot;按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showNow</td><td>是否展示&quot;此刻&quot;按钮（优先于 showToday）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabledDate</td><td>不可选择的日期</td><td><code>(dateStr: string) =&gt; boolean</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>控制弹层是否展开</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否展开弹层</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>presets</td><td>预设时间范围快捷选择</td><td><code>PresetItem[]</code></td><td>-</td></tr><tr><td>minDate</td><td>最小可选日期</td><td><code>string</code></td><td>-</td></tr><tr><td>maxDate</td><td>最大可选日期</td><td><code>string</code></td><td>-</td></tr><tr><td>renderExtraFooter</td><td>在面板中添加额外的页脚</td><td><code>() =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="datepicker-events" tabindex="-1">DatePicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>日期发生变化的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>日期发生变化的回调</td><td><code>(value: string, dateString: string) =&gt; void</code></td></tr><tr><td>openChange</td><td>弹出日历和关闭日历的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>panelChange</td><td>日历面板切换的回调</td><td><code>(value: any, mode: string) =&gt; void</code></td></tr></tbody></table><h3 id="presetitem" tabindex="-1">PresetItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>预设项显示文本</td><td><code>string</code></td></tr><tr><td>value</td><td>预设值</td><td><code>string | (() =&gt; string)</code></td></tr></tbody></table>',7))])}}};export{ht as default};
