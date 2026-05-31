import{m as w,L as de,B as c,O as ae,v as oe,w as ie,l as i,k as f,T as se,F as re,d as k,r as ue,y as P,i as S,I as p,f as o,H as ce,E as me,P as C,j as pe}from"./index-BZxHTh1S.js";import{c as B}from"./cls-S9IiI6wd.js";function T(t){return String(t).padStart(2,"0")}function D(t){if(!t)return{h:0,m:0,s:0};const s=t.toLowerCase(),u=s.includes("pm"),v=s.includes("am"),e=t.replace(/[^\d:]/g,"").split(":").map(x=>Number(x));let a=e[0]||0;const n=e[1]||0,m=e[2]||0;return u&&a<12&&(a+=12),v&&a===12&&(a=0),{h:a,m:n,s:m}}function E(t,s,u,v){const e=t>=12,a=t%12===0?12:t%12;return v.replace(/HH|H|hh|h|mm|m|ss|s|A|a/g,n=>{switch(n){case"HH":return T(t);case"H":return String(t);case"hh":return T(a);case"h":return String(a);case"mm":return T(s);case"m":return String(s);case"ss":return T(u);case"s":return String(u);case"A":return e?"PM":"AM";case"a":return e?"pm":"am";default:return n}})}function ve(t){return/s/.test(t)}const g=w({name:"TimePicker",props:{value:String,defaultValue:String,format:{type:String,default:"HH:mm:ss"},disabled:Boolean,size:{type:String,default:"middle"},placeholder:{type:String,default:"请选择时间"},allowClear:{type:Boolean,default:!0},hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},disabledTime:Function,hideDisabledOptions:Boolean,showNow:{type:Boolean,default:!0},use12Hours:Boolean,status:{type:String,default:""},open:{type:Boolean,default:void 0},needConfirm:Boolean,changeOnScroll:Boolean,renderExtraFooter:Function,variant:{type:String,default:"outlined"},placement:{type:String,default:"bottomLeft"}},emits:["update:value","change","openChange","focus","blur"],setup(t,{emit:s,expose:u,slots:v}){const e=de("time-picker"),a=D(t.defaultValue??t.value),n=c(a.h),m=c(a.m),x=c(a.s),V=c(!1),O=c(),L=c(),F=c(),H=c(!!t.defaultValue||!!t.value),R=k(()=>t.open!==void 0?t.open:V.value),I=k(()=>{if(t.value!==void 0){if(!t.value)return"";const l=D(t.value);return E(l.h,l.m,l.s,t.format)}return H.value?E(n.value,m.value,x.value,t.format):""}),U=k(()=>{if(t.value!==void 0){const l=D(t.value);return{h:l.h,m:l.m,s:l.s}}return{h:n.value,m:m.value,s:x.value}});ae(()=>t.value,l=>{if(l!==void 0)if(!l)n.value=0,m.value=0,x.value=0,H.value=!1;else{const d=D(l);n.value=d.h,m.value=d.m,x.value=d.s,H.value=!0}});const N=c({top:0,left:0}),X=()=>{if(!O.value)return;const l=O.value.getBoundingClientRect(),d=t.placement.startsWith("top"),r=t.placement.endsWith("Right");N.value={top:d?l.top+window.scrollY-300:l.bottom+window.scrollY+4,left:r?l.right+window.scrollX-200:l.left+window.scrollX}},Y=()=>{t.disabled||(X(),V.value=!0,s("openChange",!0))},z=()=>{V.value=!1,s("openChange",!1)},$=()=>{const l=E(n.value,m.value,x.value,t.format);H.value=!0,s("update:value",l),s("change",l,l),z()},j=()=>{const l=new Date;n.value=l.getHours(),m.value=l.getMinutes(),x.value=l.getSeconds(),t.needConfirm||$()},G=l=>{l.stopPropagation(),n.value=0,m.value=0,x.value=0,H.value=!1,s("update:value",void 0),s("change",void 0,"")},q=l=>{var d,r;!((d=O.value)!=null&&d.contains(l.target))&&!((r=L.value)!=null&&r.contains(l.target))&&z()};oe(()=>document.addEventListener("mousedown",q)),ie(()=>document.removeEventListener("mousedown",q));const A=k(()=>{var l;return((l=t.disabledTime)==null?void 0:l.call(t))??{}}),J=k(()=>{var h,b;const l=((b=(h=A.value).disabledHours)==null?void 0:b.call(h))??[],d=t.use12Hours?12:24,r=[];for(let y=0;y<d;y+=t.hourStep)(!t.hideDisabledOptions||!l.includes(y))&&r.push(y);return r.map(y=>({value:y,disabled:l.includes(y)}))}),K=k(()=>{var r,h;const l=((h=(r=A.value).disabledMinutes)==null?void 0:h.call(r,U.value.h))??[],d=[];for(let b=0;b<60;b+=t.minuteStep)(!t.hideDisabledOptions||!l.includes(b))&&d.push(b);return d.map(b=>({value:b,disabled:l.includes(b)}))}),Q=k(()=>{var r,h;const l=((h=(r=A.value).disabledSeconds)==null?void 0:h.call(r,U.value.h,U.value.m))??[],d=[];for(let b=0;b<60;b+=t.secondStep)(!t.hideDisabledOptions||!l.includes(b))&&d.push(b);return d.map(b=>({value:b,disabled:l.includes(b)}))}),Z=k(()=>[{value:"AM",disabled:!1},{value:"PM",disabled:!1}]),W=k(()=>U.value.h>=12?"PM":"AM"),_=k(()=>ve(t.format)),M=(l,d)=>{l&&ue(()=>{const r=l.querySelector(`[data-value="${d}"]`);r&&typeof r.scrollIntoView=="function"&&r.scrollIntoView({block:"nearest"})})},ee=(l,d)=>{d||(n.value=l,t.changeOnScroll&&!t.needConfirm&&$())},te=(l,d)=>{d||(m.value=l,t.changeOnScroll&&!t.needConfirm&&$())},ne=(l,d)=>{d||(x.value=l,t.changeOnScroll&&!t.needConfirm&&$())},le=l=>{const d=l==="PM",r=n.value>=12;d!==r&&(n.value=d?n.value+12:n.value-12,t.changeOnScroll&&!t.needConfirm&&$())};return u({focus:()=>{var l;return(l=F.value)==null?void 0:l.focus()},blur:()=>{var l;return(l=F.value)==null?void 0:l.blur()}}),()=>i(re,null,[i("div",{ref:O,class:B(e,`${e}-${t.size}`,`${e}-${t.variant}`,{[`${e}-open`]:R.value,[`${e}-disabled`]:t.disabled,[`${e}-status-error`]:t.status==="error",[`${e}-status-warning`]:t.status==="warning"}),onClick:Y},[i("span",{class:`${e}-input`},[i("input",{ref:F,readonly:!0,placeholder:t.placeholder,value:I.value,disabled:t.disabled,class:`${e}-input-inner`,onFocus:()=>s("focus"),onBlur:()=>s("blur")},null),t.allowClear&&I.value&&!t.disabled&&i("span",{class:`${e}-clear`,onClick:G},[f("✕")]),i("span",{class:`${e}-suffix`},[f("🕐")])])]),R.value&&i(se,{to:"body"},{default:()=>{var l;return[i("div",{ref:L,class:`${e}-panel-container`,style:{position:"absolute",top:`${N.value.top}px`,left:`${N.value.left}px`,zIndex:1050}},[i("div",{class:`${e}-panel`},[i("div",{class:`${e}-panel-inner`},[i("ul",{class:`${e}-panel-column`,ref:d=>M(d,t.use12Hours?n.value%12||12:n.value)},[J.value.map(({value:d,disabled:r})=>i("li",{key:d,"data-value":d,class:B(`${e}-panel-cell`,{[`${e}-panel-cell-selected`]:t.use12Hours?(n.value%12||12)===d:n.value===d,[`${e}-panel-cell-disabled`]:r}),onClick:()=>ee(d,r)},[T(d)]))]),i("ul",{class:`${e}-panel-column`,ref:d=>M(d,m.value)},[K.value.map(({value:d,disabled:r})=>i("li",{key:d,"data-value":d,class:B(`${e}-panel-cell`,{[`${e}-panel-cell-selected`]:m.value===d,[`${e}-panel-cell-disabled`]:r}),onClick:()=>te(d,r)},[T(d)]))]),_.value&&i("ul",{class:`${e}-panel-column`,ref:d=>M(d,x.value)},[Q.value.map(({value:d,disabled:r})=>i("li",{key:d,"data-value":d,class:B(`${e}-panel-cell`,{[`${e}-panel-cell-selected`]:x.value===d,[`${e}-panel-cell-disabled`]:r}),onClick:()=>ne(d,r)},[T(d)]))]),t.use12Hours&&i("ul",{class:`${e}-panel-column`,ref:d=>M(d,W.value)},[Z.value.map(({value:d})=>i("li",{key:d,"data-value":d,class:B(`${e}-panel-cell`,{[`${e}-panel-cell-selected`]:W.value===d}),onClick:()=>le(d)},[d]))])]),i("div",{class:`${e}-panel-footer`},[i("div",{class:`${e}-panel-footer-extra`},[(l=t.renderExtraFooter)==null?void 0:l.call(t)]),i("div",{class:`${e}-panel-footer-actions`},[t.showNow&&i("button",{class:`${e}-panel-footer-btn`,onClick:j},[f("此刻")]),t.needConfirm&&i("button",{class:`${e}-panel-footer-btn ${e}-panel-footer-ok`,onClick:$},[f("确定")])])])])])]}})])}}),fe={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},be=w({__name:"TimePickerBasic",setup(t){const s=c(""),u=c("10:30:00"),v=e=>{console.log("选中时间：",e)};return(e,a)=>(P(),S("div",fe,[i(p(g),{value:s.value,"onUpdate:value":a[0]||(a[0]=n=>s.value=n),placeholder:"请选择时间",onChange:v},null,8,["value"]),i(p(g),{value:u.value,"onUpdate:value":a[1]||(a[1]=n=>u.value=n),placeholder:"禁用状态",disabled:""},null,8,["value"]),o("p",null,"选中时间："+ce(s.value),1)]))}}),ge=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <TimePicker
      v-model:value="time"
      placeholder="请选择时间"
      @change="handleChange"
    />
    <TimePicker
      v-model:value="time2"
      placeholder="禁用状态"
      disabled
    />
    <p>选中时间：{{ time }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from 'ant-design-hmfw'

const time = ref('')
const time2 = ref('10:30:00')

const handleChange = (value: string) => {
  console.log('选中时间：', value)
}
<\/script>
`,xe={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},ke=w({__name:"TimePickerConfirm",setup(t){const s=c(""),u=c("");return(v,e)=>(P(),S("div",xe,[o("div",null,[e[2]||(e[2]=o("p",{style:{"margin-bottom":"4px"}},"需要确认（needConfirm）：",-1)),i(p(g),{value:s.value,"onUpdate:value":e[0]||(e[0]=a=>s.value=a),"need-confirm":!0,placeholder:"点击确定按钮生效"},null,8,["value"])]),o("div",null,[e[3]||(e[3]=o("p",{style:{"margin-bottom":"4px"}},"滚动即改变（changeOnScroll）：",-1)),i(p(g),{value:u.value,"onUpdate:value":e[1]||(e[1]=a=>u.value=a),"change-on-scroll":!0,"need-confirm":!1,placeholder:"选择即生效"},null,8,["value"])])]))}}),he=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">需要确认（needConfirm）：</p>
      <TimePicker
        v-model:value="time1"
        :need-confirm="true"
        placeholder="点击确定按钮生效"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">滚动即改变（changeOnScroll）：</p>
      <TimePicker
        v-model:value="time2"
        :change-on-scroll="true"
        :need-confirm="false"
        placeholder="选择即生效"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from 'ant-design-hmfw'

const time1 = ref('')
const time2 = ref('')
<\/script>
`,ye={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},Te=w({__name:"TimePickerDisabled",setup(t){const s=c(""),u=c(""),v=()=>({disabledHours:()=>[0,1,2,3,4,5]}),e=()=>({disabledHours:()=>[0,1,2,3,4,5]});return(a,n)=>(P(),S("div",ye,[o("div",null,[n[2]||(n[2]=o("p",{style:{"margin-bottom":"4px"}},"禁用部分小时：",-1)),i(p(g),{value:s.value,"onUpdate:value":n[0]||(n[0]=m=>s.value=m),"disabled-time":v,placeholder:"禁用 0-5 时"},null,8,["value"])]),o("div",null,[n[3]||(n[3]=o("p",{style:{"margin-bottom":"4px"}},"隐藏禁用选项：",-1)),i(p(g),{value:u.value,"onUpdate:value":n[1]||(n[1]=m=>u.value=m),"disabled-time":e,"hide-disabled-options":!0,placeholder:"隐藏 0-5 时"},null,8,["value"])])]))}}),we=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">禁用部分小时：</p>
      <TimePicker
        v-model:value="time1"
        :disabled-time="disabledTime1"
        placeholder="禁用 0-5 时"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">隐藏禁用选项：</p>
      <TimePicker
        v-model:value="time2"
        :disabled-time="disabledTime2"
        :hide-disabled-options="true"
        placeholder="隐藏 0-5 时"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from 'ant-design-hmfw'

const time1 = ref('')
const time2 = ref('')

const disabledTime1 = () => ({
  disabledHours: () => [0, 1, 2, 3, 4, 5],
})

const disabledTime2 = () => ({
  disabledHours: () => [0, 1, 2, 3, 4, 5],
})
<\/script>
`,Pe={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},Se=w({__name:"TimePickerFormat",setup(t){const s=c(""),u=c(""),v=c("");return(e,a)=>(P(),S("div",Pe,[o("div",null,[a[3]||(a[3]=o("p",{style:{"margin-bottom":"4px"}},"只显示时分（HH:mm）：",-1)),i(p(g),{value:s.value,"onUpdate:value":a[0]||(a[0]=n=>s.value=n),format:"HH:mm",placeholder:"选择时分"},null,8,["value"])]),o("div",null,[a[4]||(a[4]=o("p",{style:{"margin-bottom":"4px"}},"12 小时制：",-1)),i(p(g),{value:u.value,"onUpdate:value":a[1]||(a[1]=n=>u.value=n),"use12-hours":!0,format:"h:mm a",placeholder:"12 小时制"},null,8,["value"])]),o("div",null,[a[5]||(a[5]=o("p",{style:{"margin-bottom":"4px"}},"不显示秒：",-1)),i(p(g),{value:v.value,"onUpdate:value":a[2]||(a[2]=n=>v.value=n),format:"HH:mm","show-now":!1,placeholder:"不显示秒"},null,8,["value"])])]))}}),$e=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">只显示时分（HH:mm）：</p>
      <TimePicker
        v-model:value="time1"
        format="HH:mm"
        placeholder="选择时分"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">12 小时制：</p>
      <TimePicker
        v-model:value="time2"
        :use12-hours="true"
        format="h:mm a"
        placeholder="12 小时制"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">不显示秒：</p>
      <TimePicker
        v-model:value="time3"
        format="HH:mm"
        :show-now="false"
        placeholder="不显示秒"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from 'ant-design-hmfw'

const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
<\/script>
`,Ce={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},He=w({__name:"TimePickerStep",setup(t){const s=c(""),u=c(""),v=c("");return(e,a)=>(P(),S("div",Ce,[o("div",null,[a[3]||(a[3]=o("p",{style:{"margin-bottom":"4px"}},"小时步长 2：",-1)),i(p(g),{value:s.value,"onUpdate:value":a[0]||(a[0]=n=>s.value=n),"hour-step":2,placeholder:"小时步长 2"},null,8,["value"])]),o("div",null,[a[4]||(a[4]=o("p",{style:{"margin-bottom":"4px"}},"分钟步长 15：",-1)),i(p(g),{value:u.value,"onUpdate:value":a[1]||(a[1]=n=>u.value=n),"minute-step":15,placeholder:"分钟步长 15"},null,8,["value"])]),o("div",null,[a[5]||(a[5]=o("p",{style:{"margin-bottom":"4px"}},"秒步长 30：",-1)),i(p(g),{value:v.value,"onUpdate:value":a[2]||(a[2]=n=>v.value=n),"second-step":30,placeholder:"秒步长 30"},null,8,["value"])])]))}}),Be=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">小时步长 2：</p>
      <TimePicker
        v-model:value="time1"
        :hour-step="2"
        placeholder="小时步长 2"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">分钟步长 15：</p>
      <TimePicker
        v-model:value="time2"
        :minute-step="15"
        placeholder="分钟步长 15"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">秒步长 30：</p>
      <TimePicker
        v-model:value="time3"
        :second-step="30"
        placeholder="秒步长 30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from 'ant-design-hmfw'

const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
<\/script>
`,Oe={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},Ue=w({__name:"TimePickerVariant",setup(t){const s=c(""),u=c(""),v=c(""),e=c("");return(a,n)=>(P(),S("div",Oe,[o("div",null,[n[4]||(n[4]=o("p",{style:{"margin-bottom":"4px"}},"Outlined（默认）：",-1)),i(p(g),{value:s.value,"onUpdate:value":n[0]||(n[0]=m=>s.value=m),variant:"outlined",placeholder:"Outlined"},null,8,["value"])]),o("div",null,[n[5]||(n[5]=o("p",{style:{"margin-bottom":"4px"}},"Filled：",-1)),i(p(g),{value:u.value,"onUpdate:value":n[1]||(n[1]=m=>u.value=m),variant:"filled",placeholder:"Filled"},null,8,["value"])]),o("div",null,[n[6]||(n[6]=o("p",{style:{"margin-bottom":"4px"}},"Borderless：",-1)),i(p(g),{value:v.value,"onUpdate:value":n[2]||(n[2]=m=>v.value=m),variant:"borderless",placeholder:"Borderless"},null,8,["value"])]),o("div",null,[n[7]||(n[7]=o("p",{style:{"margin-bottom":"4px"}},"Underlined：",-1)),i(p(g),{value:e.value,"onUpdate:value":n[3]||(n[3]=m=>e.value=m),variant:"underlined",placeholder:"Underlined"},null,8,["value"])])]))}}),Me=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">Outlined（默认）：</p>
      <TimePicker
        v-model:value="time1"
        variant="outlined"
        placeholder="Outlined"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">Filled：</p>
      <TimePicker
        v-model:value="time2"
        variant="filled"
        placeholder="Filled"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">Borderless：</p>
      <TimePicker
        v-model:value="time3"
        variant="borderless"
        placeholder="Borderless"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">Underlined：</p>
      <TimePicker
        v-model:value="time4"
        variant="underlined"
        placeholder="Underlined"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from 'ant-design-hmfw'

const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
const time4 = ref('')
<\/script>
`,De={class:"markdown-body"},Ne={__name:"time-picker",setup(t,{expose:s}){return s({frontmatter:{}}),(v,e)=>{const a=me("DemoBlock");return P(),S("div",De,[e[0]||(e[0]=o("h1",{id:"timepicker-",tabindex:"-1"},"TimePicker 时间选择框",-1)),e[1]||(e[1]=o("p",null,"输入或选择时间的控件。",-1)),e[2]||(e[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=o("p",null,"当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。",-1)),e[4]||(e[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=o("p",null,"点击 TimePicker，然后可以在浮层中选择或者输入某一时间。",-1)),i(a,{title:"基础用法",source:p(ge)},{default:C(()=>[i(be)]),_:1},8,["source"]),e[7]||(e[7]=o("h3",{id:"-3",tabindex:"-1"},"步进",-1)),e[8]||(e[8]=o("p",null,[f("通过 "),o("code",null,"hour-step"),f("、"),o("code",null,"minute-step"),f("、"),o("code",null,"second-step"),f(" 设置时间步长。")],-1)),i(a,{title:"步进",source:p(Be)},{default:C(()=>[i(He)]),_:1},8,["source"]),e[9]||(e[9]=o("h3",{id:"-4",tabindex:"-1"},"格式化",-1)),e[10]||(e[10]=o("p",null,[f("通过 "),o("code",null,"format"),f(" 属性自定义时间格式，通过 "),o("code",null,"use12Hours"),f(" 开启 12 小时制。")],-1)),i(a,{title:"格式化",source:p($e)},{default:C(()=>[i(Se)]),_:1},8,["source"]),e[11]||(e[11]=o("h3",{id:"-5",tabindex:"-1"},"禁用时间",-1)),e[12]||(e[12]=o("p",null,[f("通过 "),o("code",null,"disabledTime"),f(" 禁用部分时间选项，"),o("code",null,"hideDisabledOptions"),f(" 可以隐藏禁用的选项。")],-1)),i(a,{title:"禁用时间",source:p(we)},{default:C(()=>[i(Te)]),_:1},8,["source"]),e[13]||(e[13]=o("h3",{id:"-6",tabindex:"-1"},"确认模式",-1)),e[14]||(e[14]=o("p",null,[f("通过 "),o("code",null,"needConfirm"),f(" 需要点击确定按钮才生效，"),o("code",null,"changeOnScroll"),f(" 可以在滚动时立即触发变化。")],-1)),i(a,{title:"确认模式",source:p(he)},{default:C(()=>[i(ke)]),_:1},8,["source"]),e[15]||(e[15]=o("h3",{id:"-7",tabindex:"-1"},"变体",-1)),e[16]||(e[16]=o("p",null,[f("通过 "),o("code",null,"variant"),f(" 设置不同的输入框样式。")],-1)),i(a,{title:"变体",source:p(Me)},{default:C(()=>[i(Ue)]),_:1},8,["source"]),e[17]||(e[17]=pe(`<h2 id="api" tabindex="-1">API</h2><h3 id="timepicker-props" tabindex="-1">TimePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>时间</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认时间</td><td><code>string</code></td><td>-</td></tr><tr><td>format</td><td>展示的时间格式</td><td><code>string</code></td><td><code>&#39;HH:mm:ss&#39;</code></td></tr><tr><td>disabled</td><td>禁用全部操作</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>placeholder</td><td>没有值的时候显示的内容</td><td><code>string</code></td><td><code>&#39;请选择时间&#39;</code></td></tr><tr><td>allowClear</td><td>是否展示清除按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>hourStep</td><td>小时选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>minuteStep</td><td>分钟选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>secondStep</td><td>秒选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>disabledTime</td><td>禁用部分时间选项</td><td><code>() =&gt; DisabledTimeConfig</code></td><td>-</td></tr><tr><td>hideDisabledOptions</td><td>隐藏禁用的选项</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showNow</td><td>面板是否显示&quot;此刻&quot;按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>use12Hours</td><td>使用 12 小时制，为 true 时 format 默认为 h:mm:ss a</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>needConfirm</td><td>需要点击确定按钮才触发值变化</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>changeOnScroll</td><td>滚动时立即触发选择</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>renderExtraFooter</td><td>在面板底部渲染额外的内容</td><td><code>() =&gt; VNodeChild</code></td><td>-</td></tr><tr><td>variant</td><td>输入框变体</td><td><code>&#39;outlined&#39; | &#39;borderless&#39; | &#39;filled&#39; | &#39;underlined&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>placement</td><td>浮层弹出位置</td><td><code>&#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;topLeft&#39; | &#39;topRight&#39;</code></td><td><code>&#39;bottomLeft&#39;</code></td></tr></tbody></table><h3 id="disabledtimeconfig" tabindex="-1">DisabledTimeConfig</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">DisabledTimeConfig</span> <span class="token punctuation">{</span>
  disabledHours<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  disabledMinutes<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>selectedHour<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  disabledSeconds<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>selectedHour<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> selectedMinute<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="timepicker-events" tabindex="-1">TimePicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>时间发生变化的回调</td><td><code>(value: string | undefined) =&gt; void</code></td></tr><tr><td>change</td><td>时间发生变化的回调</td><td><code>(value: string | undefined, timeString: string) =&gt; void</code></td></tr><tr><td>openChange</td><td>面板打开/关闭时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="timepicker-methods" tabindex="-1">TimePicker Methods</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>focus()</td><td>获取焦点</td></tr><tr><td>blur()</td><td>失去焦点</td></tr></tbody></table>`,9))])}}};export{Ne as default};
