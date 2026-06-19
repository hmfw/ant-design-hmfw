import{o as $,N as ve,E as r,Q as j,x as fe,y as be,n as s,m as g,T as ge,F as xe,f as y,t as te,A as H,k as B,K as v,h as o,J as he,H as ke,R as O,l as ye}from"./index-CCJgYszN.js";import{c as D}from"./cls-S9IiI6wd.js";function S(e){return String(e).padStart(2,"0")}function R(e){if(!e)return{h:0,m:0,s:0};const u=e.toLowerCase(),m=u.includes("pm"),i=u.includes("am"),n=e.replace(/[^\d:]/g,"").split(":").map(k=>Number(k));let l=n[0]||0;const d=n[1]||0,p=n[2]||0;return m&&l<12&&(l+=12),i&&l===12&&(l=0),{h:l,m:d,s:p}}function G(e,u,m,i){const n=e>=12,l=e%12===0?12:e%12;return i.replace(/HH|H|hh|h|mm|m|ss|s|A|a/g,d=>{switch(d){case"HH":return S(e);case"H":return String(e);case"hh":return S(l);case"h":return String(l);case"mm":return S(u);case"m":return String(u);case"ss":return S(m);case"s":return String(m);case"A":return n?"PM":"AM";case"a":return n?"pm":"am";default:return d}})}function Te(e){return/s/.test(e)}const x=$({name:"TimePicker",props:{value:String,defaultValue:String,format:{type:String,default:"HH:mm:ss"},disabled:Boolean,size:{type:String,default:"middle"},placeholder:{type:String,default:"请选择时间"},allowClear:{type:Boolean,default:!0},hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},disabledTime:Function,hideDisabledOptions:Boolean,showNow:{type:Boolean,default:!0},use12Hours:Boolean,status:{type:String,default:""},open:{type:Boolean,default:void 0},needConfirm:{type:Boolean,default:!0},changeOnScroll:Boolean,renderExtraFooter:Function,variant:{type:String,default:"outlined"},placement:{type:String,default:"bottomLeft"}},emits:["update:value","change","openChange","focus","blur"],setup(e,{emit:u,expose:m}){const i=ve("time-picker"),n=R(e.defaultValue??e.value),l=r(n.h),d=r(n.m),p=r(n.s),k=r(n.h),T=r(n.m),C=r(n.s),A=r(!1),V=r(),K=r(),E=r(),U=r(!!e.defaultValue||!!e.value),L=r(),I=r(),q=r(),z=r(),F=y(()=>e.open!==void 0?e.open:A.value),Z=y(()=>{if(e.value!==void 0){if(!e.value)return"";const t=R(e.value);return G(t.h,t.m,t.s,e.format)}return U.value?G(l.value,d.value,p.value,e.format):""}),b=y(()=>{if(e.value!==void 0){const t=R(e.value);return{h:t.h,m:t.m,s:t.s}}return e.needConfirm?{h:k.value,m:T.value,s:C.value}:{h:l.value,m:d.value,s:p.value}});j(()=>e.value,t=>{if(t!==void 0)if(!t)l.value=0,d.value=0,p.value=0,k.value=0,T.value=0,C.value=0,U.value=!1;else{const a=R(t);l.value=a.h,d.value=a.m,p.value=a.s,k.value=a.h,T.value=a.m,C.value=a.s,U.value=!0}});const W=r({top:0,left:0}),ne=()=>{if(!V.value)return;const t=V.value.getBoundingClientRect(),a=e.placement.startsWith("top"),c=e.placement.endsWith("Right");W.value={top:a?t.top+window.scrollY-300:t.bottom+window.scrollY+4,left:c?t.right+window.scrollX-200:t.left+window.scrollX}},le=()=>{e.disabled||(ne(),e.needConfirm&&(k.value=l.value,T.value=d.value,C.value=p.value),A.value=!0,u("openChange",!0))},_=()=>{e.needConfirm&&(k.value=l.value,T.value=d.value,C.value=p.value),A.value=!1,u("openChange",!1)},M=()=>{e.needConfirm&&(l.value=k.value,d.value=T.value,p.value=C.value);const t=G(l.value,d.value,p.value,e.format);U.value=!0,u("update:value",t),u("change",t,t),_()},ae=()=>{const t=new Date;e.needConfirm?(k.value=t.getHours(),T.value=t.getMinutes(),C.value=t.getSeconds()):(l.value=t.getHours(),d.value=t.getMinutes(),p.value=t.getSeconds()),e.needConfirm||M()},de=t=>{t.stopPropagation(),l.value=0,d.value=0,p.value=0,k.value=0,T.value=0,C.value=0,U.value=!1,u("update:value",void 0),u("change",void 0,"")},ee=t=>{var a,c;!((a=V.value)!=null&&a.contains(t.target))&&!((c=K.value)!=null&&c.contains(t.target))&&_()};fe(()=>document.addEventListener("mousedown",ee)),be(()=>document.removeEventListener("mousedown",ee));const X=y(()=>{var t;return((t=e.disabledTime)==null?void 0:t.call(e))??{}}),oe=y(()=>{var h,f;const t=((f=(h=X.value).disabledHours)==null?void 0:f.call(h))??[],a=e.use12Hours?12:24,c=[];for(let P=0;P<a;P+=e.hourStep)(!e.hideDisabledOptions||!t.includes(P))&&c.push(P);return c.map(P=>({value:P,disabled:t.includes(P)}))}),ie=y(()=>{var c,h;const t=((h=(c=X.value).disabledMinutes)==null?void 0:h.call(c,b.value.h))??[],a=[];for(let f=0;f<60;f+=e.minuteStep)(!e.hideDisabledOptions||!t.includes(f))&&a.push(f);return a.map(f=>({value:f,disabled:t.includes(f)}))}),se=y(()=>{var c,h;const t=((h=(c=X.value).disabledSeconds)==null?void 0:h.call(c,b.value.h,b.value.m))??[],a=[];for(let f=0;f<60;f+=e.secondStep)(!e.hideDisabledOptions||!t.includes(f))&&a.push(f);return a.map(f=>({value:f,disabled:t.includes(f)}))}),ue=y(()=>[{value:"AM",disabled:!1},{value:"PM",disabled:!1}]),N=y(()=>b.value.h>=12?"PM":"AM"),Y=y(()=>Te(e.format));let J=0;const Q=r({}),w=(t,a,c)=>{t&&Q.value[c]!==a&&(Q.value[c]=a,J&&cancelAnimationFrame(J),J=requestAnimationFrame(()=>{const h=t.querySelector(`[data-value="${a}"]`);h&&typeof h.scrollIntoView=="function"&&h.scrollIntoView({block:"nearest",behavior:"smooth"})}))};j(F,t=>{t?te(()=>{const a=e.use12Hours?b.value.h%12||12:b.value.h;w(L.value,a,"h"),w(I.value,b.value.m,"m"),Y.value&&w(q.value,b.value.s,"s"),e.use12Hours&&w(z.value,N.value,"p")}):Q.value={}}),j(()=>[b.value.h,b.value.m,b.value.s,N.value],()=>{F.value&&te(()=>{const t=e.use12Hours?b.value.h%12||12:b.value.h;w(L.value,t,"h"),w(I.value,b.value.m,"m"),Y.value&&w(q.value,b.value.s,"s"),e.use12Hours&&w(z.value,N.value,"p")})});const re=(t,a)=>{a||(e.needConfirm?k.value=t:(l.value=t,e.changeOnScroll&&M()))},ce=(t,a)=>{a||(e.needConfirm?T.value=t:(d.value=t,e.changeOnScroll&&M()))},me=(t,a)=>{a||(e.needConfirm?C.value=t:(p.value=t,e.changeOnScroll&&M()))},pe=t=>{const a=t==="PM",c=e.needConfirm?k.value:l.value,h=c>=12;if(a!==h){const f=a?c+12:c-12;e.needConfirm?k.value=f:(l.value=f,e.changeOnScroll&&M())}};return m({focus:()=>{var t;return(t=E.value)==null?void 0:t.focus()},blur:()=>{var t;return(t=E.value)==null?void 0:t.blur()}}),()=>s(xe,null,[s("div",{ref:V,class:D(i,`${i}-${e.size}`,`${i}-${e.variant}`,{[`${i}-open`]:F.value,[`${i}-disabled`]:e.disabled,[`${i}-status-error`]:e.status==="error",[`${i}-status-warning`]:e.status==="warning"}),onClick:le},[s("span",{class:`${i}-input`},[s("input",{ref:E,readonly:!0,placeholder:e.placeholder,value:Z.value,disabled:e.disabled,class:`${i}-input-inner`,onFocus:()=>u("focus"),onBlur:()=>u("blur")},null),e.allowClear&&Z.value&&!e.disabled&&s("span",{class:`${i}-clear`,onClick:de},[g("✕")]),s("span",{class:`${i}-suffix`},[g("🕐")])])]),F.value&&s(ge,{to:"body"},{default:()=>{var t;return[s("div",{ref:K,class:`${i}-panel-container`,style:{position:"absolute",top:`${W.value.top}px`,left:`${W.value.left}px`,zIndex:1050}},[s("div",{class:`${i}-panel`},[s("div",{class:`${i}-panel-inner`},[s("ul",{class:`${i}-panel-column`,ref:L},[oe.value.map(({value:a,disabled:c})=>s("li",{key:a,"data-value":a,class:D(`${i}-panel-cell`,{[`${i}-panel-cell-selected`]:e.use12Hours?(b.value.h%12||12)===a:b.value.h===a,[`${i}-panel-cell-disabled`]:c}),onClick:()=>re(a,c)},[S(a)]))]),s("ul",{class:`${i}-panel-column`,ref:I},[ie.value.map(({value:a,disabled:c})=>s("li",{key:a,"data-value":a,class:D(`${i}-panel-cell`,{[`${i}-panel-cell-selected`]:b.value.m===a,[`${i}-panel-cell-disabled`]:c}),onClick:()=>ce(a,c)},[S(a)]))]),Y.value&&s("ul",{class:`${i}-panel-column`,ref:q},[se.value.map(({value:a,disabled:c})=>s("li",{key:a,"data-value":a,class:D(`${i}-panel-cell`,{[`${i}-panel-cell-selected`]:b.value.s===a,[`${i}-panel-cell-disabled`]:c}),onClick:()=>me(a,c)},[S(a)]))]),e.use12Hours&&s("ul",{class:`${i}-panel-column`,ref:z},[ue.value.map(({value:a})=>s("li",{key:a,"data-value":a,class:D(`${i}-panel-cell`,{[`${i}-panel-cell-selected`]:N.value===a}),onClick:()=>pe(a)},[a]))])]),s("div",{class:`${i}-panel-footer`},[s("div",{class:`${i}-panel-footer-extra`},[(t=e.renderExtraFooter)==null?void 0:t.call(e)]),s("div",{class:`${i}-panel-footer-actions`},[e.showNow&&s("button",{class:`${i}-panel-footer-btn`,onClick:ae},[g("此刻")]),e.needConfirm&&s("button",{class:`${i}-panel-footer-btn ${i}-panel-footer-ok`,onClick:M},[g("确定")])])])])])]}})])}}),Ce={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},we=$({__name:"TimePickerBasic",setup(e){const u=r(""),m=r("10:30:00"),i=n=>{console.log("选中时间：",n)};return(n,l)=>(H(),B("div",Ce,[s(v(x),{value:u.value,"onUpdate:value":l[0]||(l[0]=d=>u.value=d),placeholder:"请选择时间",onChange:i},null,8,["value"]),s(v(x),{value:m.value,"onUpdate:value":l[1]||(l[1]=d=>m.value=d),placeholder:"禁用状态",disabled:""},null,8,["value"]),o("p",null,"选中时间："+he(u.value),1)]))}}),Pe=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <TimePicker v-model:value="time" placeholder="请选择时间" @change="handleChange" />
    <TimePicker v-model:value="time2" placeholder="禁用状态" disabled />
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
`,Se={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},$e=$({__name:"TimePickerConfirm",setup(e){const u=r(""),m=r("");return(i,n)=>(H(),B("div",Se,[o("div",null,[n[2]||(n[2]=o("p",{style:{"margin-bottom":"4px"}},"需要确认（needConfirm）：",-1)),s(v(x),{value:u.value,"onUpdate:value":n[0]||(n[0]=l=>u.value=l),"need-confirm":!0,placeholder:"点击确定按钮生效"},null,8,["value"])]),o("div",null,[n[3]||(n[3]=o("p",{style:{"margin-bottom":"4px"}},"滚动即改变（changeOnScroll）：",-1)),s(v(x),{value:m.value,"onUpdate:value":n[1]||(n[1]=l=>m.value=l),"change-on-scroll":!0,"need-confirm":!1,placeholder:"选择即生效"},null,8,["value"])])]))}}),He=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">需要确认（needConfirm）：</p>
      <TimePicker v-model:value="time1" :need-confirm="true" placeholder="点击确定按钮生效" />
    </div>
    <div>
      <p style="margin-bottom: 4px">滚动即改变（changeOnScroll）：</p>
      <TimePicker v-model:value="time2" :change-on-scroll="true" :need-confirm="false" placeholder="选择即生效" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from 'ant-design-hmfw'

const time1 = ref('')
const time2 = ref('')
<\/script>
`,Be={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},Me=$({__name:"TimePickerDisabled",setup(e){const u=r(""),m=r(""),i=()=>({disabledHours:()=>[0,1,2,3,4,5]}),n=()=>({disabledHours:()=>[0,1,2,3,4,5]});return(l,d)=>(H(),B("div",Be,[o("div",null,[d[2]||(d[2]=o("p",{style:{"margin-bottom":"4px"}},"禁用部分小时：",-1)),s(v(x),{value:u.value,"onUpdate:value":d[0]||(d[0]=p=>u.value=p),"disabled-time":i,placeholder:"禁用 0-5 时"},null,8,["value"])]),o("div",null,[d[3]||(d[3]=o("p",{style:{"margin-bottom":"4px"}},"隐藏禁用选项：",-1)),s(v(x),{value:m.value,"onUpdate:value":d[1]||(d[1]=p=>m.value=p),"disabled-time":n,"hide-disabled-options":!0,placeholder:"隐藏 0-5 时"},null,8,["value"])])]))}}),Oe=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">禁用部分小时：</p>
      <TimePicker v-model:value="time1" :disabled-time="disabledTime1" placeholder="禁用 0-5 时" />
    </div>
    <div>
      <p style="margin-bottom: 4px">隐藏禁用选项：</p>
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
`,Ue={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},De=$({__name:"TimePickerFormat",setup(e){const u=r(""),m=r(""),i=r("");return(n,l)=>(H(),B("div",Ue,[o("div",null,[l[3]||(l[3]=o("p",{style:{"margin-bottom":"4px"}},"只显示时分（HH:mm）：",-1)),s(v(x),{value:u.value,"onUpdate:value":l[0]||(l[0]=d=>u.value=d),format:"HH:mm",placeholder:"选择时分"},null,8,["value"])]),o("div",null,[l[4]||(l[4]=o("p",{style:{"margin-bottom":"4px"}},"12 小时制：",-1)),s(v(x),{value:m.value,"onUpdate:value":l[1]||(l[1]=d=>m.value=d),"use12-hours":!0,format:"h:mm a",placeholder:"12 小时制"},null,8,["value"])]),o("div",null,[l[5]||(l[5]=o("p",{style:{"margin-bottom":"4px"}},"不显示秒：",-1)),s(v(x),{value:i.value,"onUpdate:value":l[2]||(l[2]=d=>i.value=d),format:"HH:mm","show-now":!1,placeholder:"不显示秒"},null,8,["value"])])]))}}),Ve=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">只显示时分（HH:mm）：</p>
      <TimePicker v-model:value="time1" format="HH:mm" placeholder="选择时分" />
    </div>
    <div>
      <p style="margin-bottom: 4px">12 小时制：</p>
      <TimePicker v-model:value="time2" :use12-hours="true" format="h:mm a" placeholder="12 小时制" />
    </div>
    <div>
      <p style="margin-bottom: 4px">不显示秒：</p>
      <TimePicker v-model:value="time3" format="HH:mm" :show-now="false" placeholder="不显示秒" />
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
`,Fe={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},Ne=$({__name:"TimePickerStep",setup(e){const u=r(""),m=r(""),i=r("");return(n,l)=>(H(),B("div",Fe,[o("div",null,[l[3]||(l[3]=o("p",{style:{"margin-bottom":"4px"}},"小时步长 2：",-1)),s(v(x),{value:u.value,"onUpdate:value":l[0]||(l[0]=d=>u.value=d),"hour-step":2,placeholder:"小时步长 2"},null,8,["value"])]),o("div",null,[l[4]||(l[4]=o("p",{style:{"margin-bottom":"4px"}},"分钟步长 15：",-1)),s(v(x),{value:m.value,"onUpdate:value":l[1]||(l[1]=d=>m.value=d),"minute-step":15,placeholder:"分钟步长 15"},null,8,["value"])]),o("div",null,[l[5]||(l[5]=o("p",{style:{"margin-bottom":"4px"}},"秒步长 30：",-1)),s(v(x),{value:i.value,"onUpdate:value":l[2]||(l[2]=d=>i.value=d),"second-step":30,placeholder:"秒步长 30"},null,8,["value"])])]))}}),Re=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">小时步长 2：</p>
      <TimePicker v-model:value="time1" :hour-step="2" placeholder="小时步长 2" />
    </div>
    <div>
      <p style="margin-bottom: 4px">分钟步长 15：</p>
      <TimePicker v-model:value="time2" :minute-step="15" placeholder="分钟步长 15" />
    </div>
    <div>
      <p style="margin-bottom: 4px">秒步长 30：</p>
      <TimePicker v-model:value="time3" :second-step="30" placeholder="秒步长 30" />
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
`,Ae={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},Ee=$({__name:"TimePickerVariant",setup(e){const u=r(""),m=r(""),i=r(""),n=r("");return(l,d)=>(H(),B("div",Ae,[o("div",null,[d[4]||(d[4]=o("p",{style:{"margin-bottom":"4px"}},"Outlined（默认）：",-1)),s(v(x),{value:u.value,"onUpdate:value":d[0]||(d[0]=p=>u.value=p),variant:"outlined",placeholder:"Outlined"},null,8,["value"])]),o("div",null,[d[5]||(d[5]=o("p",{style:{"margin-bottom":"4px"}},"Filled：",-1)),s(v(x),{value:m.value,"onUpdate:value":d[1]||(d[1]=p=>m.value=p),variant:"filled",placeholder:"Filled"},null,8,["value"])]),o("div",null,[d[6]||(d[6]=o("p",{style:{"margin-bottom":"4px"}},"Borderless：",-1)),s(v(x),{value:i.value,"onUpdate:value":d[2]||(d[2]=p=>i.value=p),variant:"borderless",placeholder:"Borderless"},null,8,["value"])]),o("div",null,[d[7]||(d[7]=o("p",{style:{"margin-bottom":"4px"}},"Underlined：",-1)),s(v(x),{value:n.value,"onUpdate:value":d[3]||(d[3]=p=>n.value=p),variant:"underlined",placeholder:"Underlined"},null,8,["value"])])]))}}),Le=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">Outlined（默认）：</p>
      <TimePicker v-model:value="time1" variant="outlined" placeholder="Outlined" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Filled：</p>
      <TimePicker v-model:value="time2" variant="filled" placeholder="Filled" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Borderless：</p>
      <TimePicker v-model:value="time3" variant="borderless" placeholder="Borderless" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Underlined：</p>
      <TimePicker v-model:value="time4" variant="underlined" placeholder="Underlined" />
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
`,Ie={class:"markdown-body"},We={__name:"time-picker",setup(e,{expose:u}){return u({frontmatter:{}}),(i,n)=>{const l=ke("DemoBlock");return H(),B("div",Ie,[n[0]||(n[0]=o("h1",{id:"timepicker-时间选择框",tabindex:"-1"},"TimePicker 时间选择框",-1)),n[1]||(n[1]=o("p",null,"输入或选择时间的控件。",-1)),n[2]||(n[2]=o("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=o("p",null,"当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。",-1)),n[4]||(n[4]=o("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=o("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=o("p",null,"点击 TimePicker，然后可以在浮层中选择或者输入某一时间。",-1)),s(l,{title:"基础用法",source:v(Pe)},{default:O(()=>[s(we)]),_:1},8,["source"]),n[7]||(n[7]=o("h3",{id:"步进",tabindex:"-1"},"步进",-1)),n[8]||(n[8]=o("p",null,[g("通过 "),o("code",null,"hour-step"),g("、"),o("code",null,"minute-step"),g("、"),o("code",null,"second-step"),g(" 设置时间步长。")],-1)),s(l,{title:"步进",source:v(Re)},{default:O(()=>[s(Ne)]),_:1},8,["source"]),n[9]||(n[9]=o("h3",{id:"格式化",tabindex:"-1"},"格式化",-1)),n[10]||(n[10]=o("p",null,[g("通过 "),o("code",null,"format"),g(" 属性自定义时间格式，通过 "),o("code",null,"use12Hours"),g(" 开启 12 小时制。")],-1)),s(l,{title:"格式化",source:v(Ve)},{default:O(()=>[s(De)]),_:1},8,["source"]),n[11]||(n[11]=o("h3",{id:"禁用时间",tabindex:"-1"},"禁用时间",-1)),n[12]||(n[12]=o("p",null,[g("通过 "),o("code",null,"disabledTime"),g(" 禁用部分时间选项，"),o("code",null,"hideDisabledOptions"),g(" 可以隐藏禁用的选项。")],-1)),s(l,{title:"禁用时间",source:v(Oe)},{default:O(()=>[s(Me)]),_:1},8,["source"]),n[13]||(n[13]=o("h3",{id:"确认模式",tabindex:"-1"},"确认模式",-1)),n[14]||(n[14]=o("p",null,[g("通过 "),o("code",null,"needConfirm"),g(" 需要点击确定按钮才生效，"),o("code",null,"changeOnScroll"),g(" 可以在滚动时立即触发变化。")],-1)),s(l,{title:"确认模式",source:v(He)},{default:O(()=>[s($e)]),_:1},8,["source"]),n[15]||(n[15]=o("h3",{id:"变体",tabindex:"-1"},"变体",-1)),n[16]||(n[16]=o("p",null,[g("通过 "),o("code",null,"variant"),g(" 设置不同的输入框样式。")],-1)),s(l,{title:"变体",source:v(Le)},{default:O(()=>[s(Ee)]),_:1},8,["source"]),n[17]||(n[17]=ye(`<h2 id="api" tabindex="-1">API</h2><h3 id="timepicker-props" tabindex="-1">TimePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>时间</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认时间</td><td><code>string</code></td><td>-</td></tr><tr><td>format</td><td>展示的时间格式</td><td><code>string</code></td><td><code>&#39;HH:mm:ss&#39;</code></td></tr><tr><td>disabled</td><td>禁用全部操作</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>placeholder</td><td>没有值的时候显示的内容</td><td><code>string</code></td><td><code>&#39;请选择时间&#39;</code></td></tr><tr><td>allowClear</td><td>是否展示清除按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>hourStep</td><td>小时选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>minuteStep</td><td>分钟选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>secondStep</td><td>秒选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>disabledTime</td><td>禁用部分时间选项</td><td><code>() =&gt; DisabledTimeConfig</code></td><td>-</td></tr><tr><td>hideDisabledOptions</td><td>隐藏禁用的选项</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showNow</td><td>面板是否显示&quot;此刻&quot;按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>use12Hours</td><td>使用 12 小时制，为 true 时 format 默认为 h:mm:ss a</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>needConfirm</td><td>需要点击确定按钮才触发值变化</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>changeOnScroll</td><td>滚动时立即触发选择</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>renderExtraFooter</td><td>在面板底部渲染额外的内容</td><td><code>() =&gt; VNodeChild</code></td><td>-</td></tr><tr><td>variant</td><td>输入框变体</td><td><code>&#39;outlined&#39; | &#39;borderless&#39; | &#39;filled&#39; | &#39;underlined&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>placement</td><td>浮层弹出位置</td><td><code>&#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;topLeft&#39; | &#39;topRight&#39;</code></td><td><code>&#39;bottomLeft&#39;</code></td></tr></tbody></table><h3 id="disabledtimeconfig" tabindex="-1">DisabledTimeConfig</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">DisabledTimeConfig</span> <span class="token punctuation">{</span>
  disabledHours<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  disabledMinutes<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>selectedHour<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  disabledSeconds<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>selectedHour<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> selectedMinute<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="timepicker-events" tabindex="-1">TimePicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>时间发生变化的回调</td><td><code>(value: string | undefined) =&gt; void</code></td></tr><tr><td>change</td><td>时间发生变化的回调</td><td><code>(value: string | undefined, timeString: string) =&gt; void</code></td></tr><tr><td>openChange</td><td>面板打开/关闭时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="timepicker-methods" tabindex="-1">TimePicker Methods</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>focus()</td><td>获取焦点</td></tr><tr><td>blur()</td><td>失去焦点</td></tr></tbody></table>`,9))])}}};export{We as default};
