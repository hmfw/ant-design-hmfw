import{m as y,L as ve,K as pe,B as h,O as he,v as me,w as fe,l as n,k as s,T as ge,F as De,d as b,y as $,i as P,I as f,f as u,H as O,E as ke,P as C,j as be}from"./index-tBZazAzX.js";import{c as M}from"./cls-S9IiI6wd.js";function T(e){return String(e).padStart(2,"0")}function W(e,l="YYYY-MM-DD"){return l.replace("YYYY",String(e.getFullYear())).replace("MM",T(e.getMonth()+1)).replace("DD",T(e.getDate())).replace("HH",T(e.getHours())).replace("mm",T(e.getMinutes())).replace("ss",T(e.getSeconds()))}function Y(e){if(!e)return null;const l=new Date(e);return isNaN(l.getTime())?null:l}function X(e,l){return e.getFullYear()===l.getFullYear()&&e.getMonth()===l.getMonth()&&e.getDate()===l.getDate()}function we(e,l){return e.getFullYear()===l.getFullYear()&&e.getMonth()===l.getMonth()}function xe(e,l){return e.getFullYear()===l.getFullYear()}function G(e,l){return new Date(e,l+1,0).getDate()}function ye(e,l){return new Date(e,l,1).getDay()}function $e(e,l){const t=[],o=ye(e,l),a=G(e,l),i=G(e,l-1);for(let r=o-1;r>=0;r--)t.push({date:new Date(e,l-1,i-r),inCurrentMonth:!1});for(let r=1;r<=a;r++)t.push({date:new Date(e,l,r),inCurrentMonth:!0});const v=42-t.length;for(let r=1;r<=v;r++)t.push({date:new Date(e,l+1,r),inCurrentMonth:!1});return t}const x=y({name:"DatePicker",props:{value:String,defaultValue:String,format:String,disabled:Boolean,size:{type:String,default:"middle"},placeholder:String,allowClear:{type:Boolean,default:!0},picker:{type:String,default:"date"},showTime:Boolean,showToday:{type:Boolean,default:!0},showNow:Boolean,disabledDate:Function,status:{type:String,default:""},open:{type:Boolean,default:void 0},defaultOpen:Boolean,presets:Array,minDate:String,maxDate:String,renderExtraFooter:Function},emits:["update:value","change","openChange","panelChange"],setup(e,{emit:l}){const t=ve("date-picker"),o=pe(),a=new Date,i=b(()=>e.format?e.format:e.picker==="year"?"YYYY":e.picker==="month"?"YYYY-MM":e.picker==="quarter"?"YYYY-[Q]Q":e.showTime?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD"),v=b(()=>{if(e.placeholder)return e.placeholder;const d=o.value.DatePicker;return e.picker==="year"?d.yearPlaceholder:e.picker==="month"?d.monthPlaceholder:d.placeholder}),r=h(Y(e.defaultValue??e.value)),m=h((r.value??a).getFullYear()),w=h((r.value??a).getMonth()),I=h(e.defaultOpen??!1),g=h(e.picker==="year"?"year":e.picker==="month"?"month":"date"),B=h(),A=h(),E=h({top:0,left:0}),q=b(()=>e.open!==void 0?e.open:I.value),k=b(()=>e.value?Y(e.value):r.value),H=b(()=>e.minDate?Y(e.minDate):null),L=b(()=>e.maxDate?Y(e.maxDate):null),Q=b(()=>{const d=k.value;if(!d)return"";if(e.picker==="quarter"){const c=Math.floor(d.getMonth()/3)+1;return`${d.getFullYear()}-Q${c}`}return W(d,i.value)});he(()=>e.value,d=>{r.value=Y(d)});const J=()=>{if(!B.value)return;const d=B.value.getBoundingClientRect();E.value={top:d.bottom+window.scrollY+4,left:d.left+window.scrollX}},Z=()=>{if(e.disabled)return;J();const d=k.value??a;m.value=d.getFullYear(),w.value=d.getMonth(),g.value=e.picker==="year"?"year":e.picker==="month"?"month":"date",I.value=!0,l("openChange",!0)},_=()=>{I.value=!1,l("openChange",!1)},z=d=>{var c,p;!((c=B.value)!=null&&c.contains(d.target))&&!((p=A.value)!=null&&p.contains(d.target))&&_()},R=d=>{d.key==="Escape"&&q.value&&(_(),d.preventDefault())};me(()=>{document.addEventListener("mousedown",z),document.addEventListener("keydown",R)}),fe(()=>{document.removeEventListener("mousedown",z),document.removeEventListener("keydown",R)});const S=d=>{var p;if((p=e.disabledDate)!=null&&p.call(e,d)||H.value&&d<H.value||L.value&&d>L.value)return;r.value=d;const c=e.picker==="quarter"?`${d.getFullYear()}-Q${Math.floor(d.getMonth()/3)+1}`:W(d,i.value);l("update:value",c),l("change",c,d),e.showTime||_()},ee=d=>{d.stopPropagation(),r.value=null,l("update:value",void 0),l("change",void 0,null)},te=d=>{const c=typeof d.value=="function"?d.value():d.value,p=Y(c);p&&S(p)},ne=()=>{w.value===0?(m.value--,w.value=11):w.value--,l("panelChange",null,g.value)},ae=()=>{w.value===11?(m.value++,w.value=0):w.value++,l("panelChange",null,g.value)},N=()=>{m.value--,l("panelChange",null,g.value)},U=()=>{m.value++,l("panelChange",null,g.value)},le=b(()=>$e(m.value,w.value)),F=b(()=>{const d=Math.floor(m.value/10)*10;return Array.from({length:10},(c,p)=>d+p)}),de=()=>{var d,c,p;return n("div",{class:`${t}-panel`},[n("div",{class:`${t}-panel-header`},[n("button",{class:`${t}-panel-header-btn`,onClick:N},[s("«")]),n("button",{class:`${t}-panel-header-btn`,onClick:ne},[s("‹")]),n("span",{class:`${t}-panel-header-title`},[n("button",{class:`${t}-panel-header-title-btn`,onClick:()=>{g.value="year",l("panelChange",null,"year")}},[m.value,s("年")]),n("button",{class:`${t}-panel-header-title-btn`,onClick:()=>{g.value="month",l("panelChange",null,"month")}},[o.value.DatePicker.months[w.value]])]),n("button",{class:`${t}-panel-header-btn`,onClick:ae},[s("›")]),n("button",{class:`${t}-panel-header-btn`,onClick:U},[s("»")])]),n("div",{class:`${t}-panel-body`},[n("div",{class:`${t}-weekdays`},[o.value.DatePicker.weekdays.map(D=>n("span",{key:D,class:`${t}-weekday`},[D]))]),n("div",{class:`${t}-days`},[le.value.map(({date:D,inCurrentMonth:V},ue)=>{var K;const ie=X(D,a),ce=k.value?X(D,k.value):!1,j=((K=e.disabledDate)==null?void 0:K.call(e,D))??!1;return n("button",{key:ue,class:M(`${t}-day`,{[`${t}-day-other-month`]:!V,[`${t}-day-today`]:ie,[`${t}-day-selected`]:ce,[`${t}-day-disabled`]:j}),disabled:j,onClick:()=>S(D)},[D.getDate()])})])]),(e.showToday||e.showNow||e.showTime||((d=e.presets)==null?void 0:d.length)||e.renderExtraFooter)&&n("div",{class:`${t}-panel-footer`},[n("div",{class:`${t}-panel-footer-extra`},[((c=e.presets)==null?void 0:c.length)&&n("div",{class:`${t}-presets`},[e.presets.map((D,V)=>n("button",{key:V,class:`${t}-preset-btn`,onClick:()=>te(D)},[D.label]))]),(p=e.renderExtraFooter)==null?void 0:p.call(e)]),n("div",{class:`${t}-panel-footer-actions`},[(e.showToday||e.showNow)&&n("button",{class:`${t}-panel-footer-today`,onClick:()=>S(new Date)},[e.showNow?o.value.DatePicker.now:o.value.DatePicker.today]),e.showTime&&n("button",{class:`${t}-panel-footer-ok`,onClick:_},[o.value.DatePicker.ok])])])])},oe=()=>n("div",{class:`${t}-panel`},[n("div",{class:`${t}-panel-header`},[n("button",{class:`${t}-panel-header-btn`,onClick:N},[s("«")]),n("span",{class:`${t}-panel-header-title`},[n("button",{class:`${t}-panel-header-title-btn`,onClick:()=>{g.value="year",l("panelChange",null,"year")}},[m.value,s("年")])]),n("button",{class:`${t}-panel-header-btn`,onClick:U},[s("»")])]),n("div",{class:`${t}-panel-body`},[n("div",{class:`${t}-months`},[o.value.DatePicker.months.map((d,c)=>{const p=new Date(m.value,c,1),D=k.value?we(p,k.value):!1;return n("button",{key:c,class:M(`${t}-month`,{[`${t}-month-selected`]:D}),onClick:()=>{w.value=c,e.picker==="month"?S(p):(g.value="date",l("panelChange",null,"date"))}},[d])})])])]),re=()=>n("div",{class:`${t}-panel`},[n("div",{class:`${t}-panel-header`},[n("button",{class:`${t}-panel-header-btn`,onClick:()=>{m.value-=10}},[s("«")]),n("span",{class:`${t}-panel-header-title`},[F.value[0],s("年 - "),F.value[F.value.length-1],s("年")]),n("button",{class:`${t}-panel-header-btn`,onClick:()=>{m.value+=10}},[s("»")])]),n("div",{class:`${t}-panel-body`},[n("div",{class:`${t}-years`},[F.value.map(d=>{const c=k.value?xe(new Date(d,0,1),k.value):!1;return n("button",{key:d,class:M(`${t}-year`,{[`${t}-year-selected`]:c}),onClick:()=>{m.value=d,e.picker==="year"?S(new Date(d,0,1)):(g.value="month",l("panelChange",null,"month"))}},[d,s("年")])})])])]),se=()=>n("div",{class:`${t}-panel`},[n("div",{class:`${t}-panel-header`},[n("button",{class:`${t}-panel-header-btn`,onClick:N},[s("«")]),n("span",{class:`${t}-panel-header-title`},[m.value,s("年")]),n("button",{class:`${t}-panel-header-btn`,onClick:U},[s("»")])]),n("div",{class:`${t}-panel-body`},[n("div",{class:`${t}-quarters`},[[1,2,3,4].map(d=>{const c=new Date(m.value,(d-1)*3,1),p=k.value?k.value.getFullYear()===m.value&&Math.floor(k.value.getMonth()/3)+1===d:!1;return n("button",{key:d,class:M(`${t}-quarter`,{[`${t}-quarter-selected`]:p}),onClick:()=>S(c)},[s("Q"),d])})])])]);return()=>n(De,null,[n("div",{ref:B,class:M(t,`${t}-${e.size}`,{[`${t}-open`]:q.value,[`${t}-disabled`]:e.disabled,[`${t}-status-error`]:e.status==="error",[`${t}-status-warning`]:e.status==="warning"}),onClick:Z},[n("span",{class:`${t}-input`},[n("input",{readonly:!0,value:Q.value,placeholder:v.value,disabled:e.disabled,class:`${t}-input-inner`},null),e.allowClear&&Q.value&&!e.disabled&&n("span",{class:`${t}-clear`,onClick:ee},[s("✕")]),n("span",{class:`${t}-suffix`},[s("📅")])])]),q.value&&n(ge,{to:"body"},{default:()=>[n("div",{ref:A,class:`${t}-popup`,style:{position:"absolute",top:`${E.value.top}px`,left:`${E.value.left}px`,zIndex:1050}},[g.value==="date"&&e.picker!=="quarter"&&de(),g.value==="month"&&oe(),g.value==="year"&&re(),e.picker==="quarter"&&g.value==="date"&&se()])]})])}}),Pe={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Se=y({__name:"DatePickerBasic",setup(e){const l=h(""),t=o=>{console.log("选中日期：",o)};return(o,a)=>($(),P("div",Pe,[n(f(x),{value:l.value,"onUpdate:value":a[0]||(a[0]=i=>l.value=i),placeholder:"请选择日期",onChange:t},null,8,["value"]),u("p",null,"选中日期："+O(l.value),1)]))}}),Ce=`<template>
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
`,Ye={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Me=y({__name:"DatePickerDisabledDate",setup(e){const l=h(""),t=h(""),o=i=>new Date(i)<new Date(new Date().toDateString()),a=i=>new Date(i)>new Date(new Date().toDateString());return(i,v)=>($(),P("div",Ye,[n(f(x),{value:l.value,"onUpdate:value":v[0]||(v[0]=r=>l.value=r),"disabled-date":o,placeholder:"不可选择过去日期"},null,8,["value"]),n(f(x),{value:t.value,"onUpdate:value":v[1]||(v[1]=r=>t.value=r),"disabled-date":a,placeholder:"不可选择未来日期"},null,8,["value"])]))}}),Te=`<template>
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
`,Be={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},_e=y({__name:"DatePickerMinMax",setup(e){const l=h(""),t=b(()=>{const a=new Date;return a.setDate(1),a.toISOString().split("T")[0]}),o=b(()=>{const a=new Date;return a.setMonth(a.getMonth()+1,0),a.toISOString().split("T")[0]});return(a,i)=>($(),P("div",Be,[n(f(x),{value:l.value,"onUpdate:value":i[0]||(i[0]=v=>l.value=v),"min-date":t.value,"max-date":o.value,placeholder:"只能选择本月"},null,8,["value","min-date","max-date"]),u("p",null,"选中日期："+O(l.value),1)]))}}),Fe=`<template>
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
`,Oe={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Ie=y({__name:"DatePickerPicker",setup(e){const l=h(""),t=h(""),o=h(""),a=h("");return(i,v)=>($(),P("div",Oe,[n(f(x),{value:l.value,"onUpdate:value":v[0]||(v[0]=r=>l.value=r),picker:"date",placeholder:"选择日期"},null,8,["value"]),n(f(x),{value:t.value,"onUpdate:value":v[1]||(v[1]=r=>t.value=r),picker:"month",placeholder:"选择月份"},null,8,["value"]),n(f(x),{value:o.value,"onUpdate:value":v[2]||(v[2]=r=>o.value=r),picker:"quarter",placeholder:"选择季度"},null,8,["value"]),n(f(x),{value:a.value,"onUpdate:value":v[3]||(v[3]=r=>a.value=r),picker:"year",placeholder:"选择年份"},null,8,["value"])]))}}),Ee=`<template>
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
`,qe={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Ne=y({__name:"DatePickerPresets",setup(e){const l=h(""),t=[{label:"昨天",value:()=>{const o=new Date;return o.setDate(o.getDate()-1),o.toISOString().split("T")[0]}},{label:"今天",value:()=>new Date().toISOString().split("T")[0]},{label:"明天",value:()=>{const o=new Date;return o.setDate(o.getDate()+1),o.toISOString().split("T")[0]}},{label:"一周后",value:()=>{const o=new Date;return o.setDate(o.getDate()+7),o.toISOString().split("T")[0]}}];return(o,a)=>($(),P("div",qe,[n(f(x),{value:l.value,"onUpdate:value":a[0]||(a[0]=i=>l.value=i),presets:t,placeholder:"选择日期"},null,8,["value"]),u("p",null,"选中日期："+O(l.value),1)]))}}),Ue=`<template>
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
`,Ve={style:{width:"300px"}},Ae={style:{"margin-top":"8px"}},He=y({__name:"DatePickerShowTime",setup(e){const l=h(""),t=o=>{console.log("选中日期时间：",o)};return(o,a)=>($(),P("div",Ve,[n(f(x),{value:l.value,"onUpdate:value":a[0]||(a[0]=i=>l.value=i),"show-time":!0,placeholder:"选择日期和时间",onChange:t},null,8,["value"]),u("p",Ae,"选中："+O(l.value),1)]))}}),Le=`<template>
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
`,Qe={class:"markdown-body"},je={__name:"date-picker",setup(e,{expose:l}){return l({frontmatter:{}}),(o,a)=>{const i=ke("DemoBlock");return $(),P("div",Qe,[a[0]||(a[0]=u("h1",{id:"datepicker-",tabindex:"-1"},"DatePicker 日期选择框",-1)),a[1]||(a[1]=u("p",null,"输入或选择日期的控件。",-1)),a[2]||(a[2]=u("h2",{id:"",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=u("p",null,"当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。",-1)),a[4]||(a[4]=u("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=u("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),a[6]||(a[6]=u("p",null,"最简单的用法，在浮层中可以选择或者输入日期。",-1)),n(i,{title:"基础用法",source:f(Ce)},{default:C(()=>[n(Se)]),_:1},8,["source"]),a[7]||(a[7]=u("h3",{id:"-picker-",tabindex:"-1"},"不同 picker 类型",-1)),a[8]||(a[8]=u("p",null,[s("通过 "),u("code",null,"picker"),s(" 属性切换不同的选择器类型。")],-1)),n(i,{title:"不同 picker 类型",source:f(Ee)},{default:C(()=>[n(Ie)]),_:1},8,["source"]),a[9]||(a[9]=u("h3",{id:"-3",tabindex:"-1"},"禁用日期",-1)),a[10]||(a[10]=u("p",null,[s("可用 "),u("code",null,"disabledDate"),s(" 禁止选择某些日期。")],-1)),n(i,{title:"禁用日期",source:f(Te)},{default:C(()=>[n(Me)]),_:1},8,["source"]),a[11]||(a[11]=u("h3",{id:"-4",tabindex:"-1"},"带时间的日期选择",-1)),a[12]||(a[12]=u("p",null,[s("通过 "),u("code",null,"showTime"),s(" 属性增加选择时间功能。")],-1)),n(i,{title:"带时间的日期选择",source:f(Le)},{default:C(()=>[n(He)]),_:1},8,["source"]),a[13]||(a[13]=u("h3",{id:"-5",tabindex:"-1"},"预设范围",-1)),a[14]||(a[14]=u("p",null,[s("通过 "),u("code",null,"presets"),s(" 属性提供快捷选择。")],-1)),n(i,{title:"预设范围",source:f(Ue)},{default:C(()=>[n(Ne)]),_:1},8,["source"]),a[15]||(a[15]=u("h3",{id:"-6",tabindex:"-1"},"限制日期范围",-1)),a[16]||(a[16]=u("p",null,[s("通过 "),u("code",null,"minDate"),s(" 和 "),u("code",null,"maxDate"),s(" 限制可选日期范围。")],-1)),n(i,{title:"限制日期范围",source:f(Fe)},{default:C(()=>[n(_e)]),_:1},8,["source"]),a[17]||(a[17]=be('<h2 id="api" tabindex="-1">API</h2><h3 id="datepicker-props" tabindex="-1">DatePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>日期</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认日期</td><td><code>string</code></td><td>-</td></tr><tr><td>format</td><td>展示的日期格式</td><td><code>string</code></td><td><code>&#39;YYYY-MM-DD&#39;</code></td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>placeholder</td><td>输入框提示文字</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>是否显示清除按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>picker</td><td>设置选择器类型</td><td><code>&#39;date&#39; | &#39;month&#39; | &#39;year&#39; | &#39;quarter&#39;</code></td><td><code>&#39;date&#39;</code></td></tr><tr><td>showTime</td><td>增加时间选择功能</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showToday</td><td>是否展示&quot;今天&quot;按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showNow</td><td>是否展示&quot;此刻&quot;按钮（优先于 showToday）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabledDate</td><td>不可选择的日期</td><td><code>(dateStr: string) =&gt; boolean</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>控制弹层是否展开</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否展开弹层</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>presets</td><td>预设时间范围快捷选择</td><td><code>PresetItem[]</code></td><td>-</td></tr><tr><td>minDate</td><td>最小可选日期</td><td><code>string</code></td><td>-</td></tr><tr><td>maxDate</td><td>最大可选日期</td><td><code>string</code></td><td>-</td></tr><tr><td>renderExtraFooter</td><td>在面板中添加额外的页脚</td><td><code>() =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="datepicker-events" tabindex="-1">DatePicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>日期发生变化的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>日期发生变化的回调</td><td><code>(value: string, dateString: string) =&gt; void</code></td></tr><tr><td>openChange</td><td>弹出日历和关闭日历的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>panelChange</td><td>日历面板切换的回调</td><td><code>(value: any, mode: string) =&gt; void</code></td></tr></tbody></table><h3 id="presetitem" tabindex="-1">PresetItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>预设项显示文本</td><td><code>string</code></td></tr><tr><td>value</td><td>预设值</td><td><code>string | (() =&gt; string)</code></td></tr></tbody></table>',7))])}}};export{je as default};
