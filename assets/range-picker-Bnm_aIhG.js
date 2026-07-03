import{S as Yn}from"./Space-D9xDm6ES.js";import{d as W,u as sa,C as ta,r as I,m as ea,c as t,a as b,g as f,o as z,q as en,w as Y,e as k,f as c,A as Bn,b as Hn,_ as pa,h as oa,i as la}from"./index-DCNtHlH3.js";import{c as u}from"./cls-S9IiI6wd.js";import{C as ca}from"./CloseCircleFilled-C78DeZ8j.js";import{C as ra}from"./CalendarOutlined-CI1GDkl_.js";import{T as ua}from"./Trigger-Dn9I4W9t.js";function En(n){return String(n).padStart(2,"0")}function sn(n,e="YYYY-MM-DD"){return e.replace("YYYY",String(n.getFullYear())).replace("MM",En(n.getMonth()+1)).replace("DD",En(n.getDate()))}function M(n){if(!n)return null;const e=new Date(n);return isNaN(e.getTime())?null:e}function tn(n,e){return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function Mn(n,e){return new Date(n,e+1,0).getDate()}function ia(n,e){return new Date(n,e,1).getDay()}function da(n,e){const a=[],o=ia(n,e),p=Mn(n,e),g=Mn(n,e-1);for(let r=o-1;r>=0;r--)a.push({date:new Date(n,e-1,g-r),inCurrentMonth:!1});for(let r=1;r<=p;r++)a.push({date:new Date(n,e,r),inCurrentMonth:!0});const w=42-a.length;for(let r=1;r<=w;r++)a.push({date:new Date(n,e+1,r),inCurrentMonth:!1});return a}const x=W({name:"RangePicker",props:{value:Array,defaultValue:Array,format:{type:String,default:"YYYY-MM-DD"},disabled:{type:[Boolean,Array],default:!1},placeholder:{type:Array},allowClear:{type:Boolean,default:!0},allowEmpty:{type:Array},order:{type:Boolean,default:!0},separator:{type:String,default:"→"},presets:{type:Array},size:{type:String,default:"middle"},disabledDate:Function,status:{type:String,default:""},open:{type:Boolean,default:void 0},classNames:Object,styles:Object},emits:["update:value","change","openChange","calendarChange"],setup(n,{emit:e}){const a=sa("date-picker"),o=ta(),p=new Date,g=b(()=>n.placeholder?n.placeholder:o.value.DatePicker.rangePlaceholder??["Start date","End date"]),w=s=>s?[M(s[0]),M(s[1])]:[null,null],r=I(w(n.defaultValue??n.value));ea(()=>n.value,s=>{r.value=w(s)});const $=b(()=>n.value?M(n.value[0]):r.value[0]),j=b(()=>n.value?M(n.value[1]):r.value[1]),pn=I(!1),K=b(()=>n.open!==void 0?n.open:pn.value),R=I("start"),H=I(null),T=I(($.value??p).getFullYear()),v=I(($.value??p).getMonth()),On=b(()=>v.value===11?T.value+1:T.value),An=b(()=>v.value===11?0:v.value+1),Vn=I(),L=b(()=>typeof n.disabled=="boolean"&&n.disabled),_n=b(()=>Array.isArray(n.disabled)?!!n.disabled[0]:!!n.disabled),Fn=b(()=>Array.isArray(n.disabled)?!!n.disabled[1]:!!n.disabled),Wn=b(()=>$.value?sn($.value,n.format):""),zn=b(()=>j.value?sn(j.value,n.format):""),jn=b(()=>!!($.value||j.value)),on=s=>{n.open===void 0&&(pn.value=s),e("openChange",s)},Ln=()=>{if(L.value||K.value)return;const s=$.value??p;T.value=s.getFullYear(),v.value=s.getMonth(),R.value=$.value&&!j.value?"end":"start",on(!0)},Q=()=>{H.value=null,on(!1)},U=s=>s?sn(s,n.format):null,Z=(s,l)=>{e("calendarChange",[U(s[0]),U(s[1])],s,{range:l})},ln=s=>{const l=[U(s[0]),U(s[1])];r.value=s,e("update:value",l),e("change",l,s)},Un=s=>{var l;if(!((l=n.disabledDate)!=null&&l.call(n,s,{type:"date",from:r.value[0]??void 0})))if(R.value==="start")r.value=[s,null],R.value="end",Z([s,null],"start");else{let i=r.value[0],m=s;n.order&&i&&m<i&&([i,m]=[m,i]);const d=[i,m];Z(d,"end"),ln(d),Q()}},Xn=s=>{const l=typeof s.value=="function"?s.value():s.value,i=[M(l[0]),M(l[1])];Z(i,"end"),ln(i),Q()},Gn=s=>{s.stopPropagation(),r.value=[null,null],R.value="start",e("update:value",[null,null]),e("change",[null,null],[null,null])},Jn=()=>{v.value===0?(T.value--,v.value=11):v.value--},Kn=()=>{v.value===11?(T.value++,v.value=0):v.value++};function Qn(s){const l=r.value[0],i=R.value==="end"?H.value??r.value[1]:r.value[1];if(!l||!i)return!1;const[m,d]=l<=i?[l,i]:[i,l];return s>m&&s<d}function Zn(s){const l=r.value[0];return!!(l&&tn(s,l))}function na(s){const l=R.value==="end"?H.value??r.value[1]:r.value[1];return!!(l&&tn(s,l))}function cn(s,l,i){var d,D,q,P,S,N,C,O,A,V,_,F,rn,un,dn,kn,gn,mn,yn,fn;const m=da(s,l);return t("div",{class:u(`${a}-panel`,(d=n.classNames)==null?void 0:d.panel),style:(D=n.styles)==null?void 0:D.panel},[t("div",{class:u(`${a}-panel-header`,(q=n.classNames)==null?void 0:q.panelHeader),style:(P=n.styles)==null?void 0:P.panelHeader},[i==="left"&&t("button",{class:u(`${a}-panel-header-btn`,(S=n.classNames)==null?void 0:S.panelHeaderBtn),style:(N=n.styles)==null?void 0:N.panelHeaderBtn,onClick:Jn},[f("‹")]),i==="right"&&t("span",{class:u(`${a}-panel-header-btn`,(C=n.classNames)==null?void 0:C.panelHeaderBtn),style:{visibility:"hidden",...(O=n.styles)==null?void 0:O.panelHeaderBtn}},[f("‹")]),t("span",{class:u(`${a}-panel-header-title`,(A=n.classNames)==null?void 0:A.panelHeaderTitle),style:(V=n.styles)==null?void 0:V.panelHeaderTitle},[s,f("年 "),o.value.DatePicker.months[l]]),i==="right"&&t("button",{class:u(`${a}-panel-header-btn`,(_=n.classNames)==null?void 0:_.panelHeaderBtn),style:(F=n.styles)==null?void 0:F.panelHeaderBtn,onClick:Kn},[f("›")]),i==="left"&&t("span",{class:u(`${a}-panel-header-btn`,(rn=n.classNames)==null?void 0:rn.panelHeaderBtn),style:{visibility:"hidden",...(un=n.styles)==null?void 0:un.panelHeaderBtn}},[f("›")])]),t("div",{class:u(`${a}-panel-body`,(dn=n.classNames)==null?void 0:dn.panelBody),style:(kn=n.styles)==null?void 0:kn.panelBody},[t("div",{class:u(`${a}-weekdays`,(gn=n.classNames)==null?void 0:gn.weekdays),style:(mn=n.styles)==null?void 0:mn.weekdays},[o.value.DatePicker.weekdays.map(h=>{var X,G;return t("span",{key:h,class:u(`${a}-weekday`,(X=n.classNames)==null?void 0:X.weekday),style:(G=n.styles)==null?void 0:G.weekday},[h])})]),t("div",{class:u(`${a}-days`,(yn=n.classNames)==null?void 0:yn.days),style:(fn=n.styles)==null?void 0:fn.days},[m.map(({date:h,inCurrentMonth:X},G)=>{var bn,vn,hn,wn,Sn,xn,Rn,Dn,qn,Pn,Nn,Cn,In,$n,Tn;const nn=tn(h,p),J=((bn=n.disabledDate)==null?void 0:bn.call(n,h,{type:"date",from:r.value[0]??void 0}))??!1,an=Qn(h),B=Zn(h),E=na(h);let y=(vn=n.styles)==null?void 0:vn.day;return nn&&((hn=n.styles)!=null&&hn.dayToday)&&(y={...y,...n.styles.dayToday}),(B||E)&&((wn=n.styles)!=null&&wn.daySelected)&&(y={...y,...n.styles.daySelected}),an&&((Sn=n.styles)!=null&&Sn.dayInRange)&&(y={...y,...n.styles.dayInRange}),B&&((xn=n.styles)!=null&&xn.dayRangeStart)&&(y={...y,...n.styles.dayRangeStart}),E&&((Rn=n.styles)!=null&&Rn.dayRangeEnd)&&(y={...y,...n.styles.dayRangeEnd}),J&&((Dn=n.styles)!=null&&Dn.dayDisabled)&&(y={...y,...n.styles.dayDisabled}),t("button",{key:G,class:u(`${a}-day`,{[`${a}-day-other-month`]:!X,[`${a}-day-today`]:nn,[`${a}-day-selected`]:B||E,[`${a}-day-disabled`]:J,[`${a}-day-in-range`]:an,[`${a}-day-range-start`]:B,[`${a}-day-range-end`]:E},(qn=n.classNames)==null?void 0:qn.day,nn&&((Pn=n.classNames)==null?void 0:Pn.dayToday),(B||E)&&((Nn=n.classNames)==null?void 0:Nn.daySelected),an&&((Cn=n.classNames)==null?void 0:Cn.dayInRange),B&&((In=n.classNames)==null?void 0:In.dayRangeStart),E&&(($n=n.classNames)==null?void 0:$n.dayRangeEnd),J&&((Tn=n.classNames)==null?void 0:Tn.dayDisabled)),style:y,disabled:J,onClick:()=>Un(h),onMouseenter:()=>{R.value==="end"&&(H.value=h)},onMouseleave:()=>{R.value==="end"&&(H.value=null)}},[h.getDate()])})])])])}const aa=()=>{var s,l,i,m,d,D,q,P;return t("div",{ref:Vn,class:u(`${a}-popup`,`${a}-range-popup`,(s=n.classNames)==null?void 0:s.popup),style:(l=n.styles)==null?void 0:l.popup},[t("div",{class:u(`${a}-range-wrapper`,(i=n.classNames)==null?void 0:i.rangeWrapper),style:(m=n.styles)==null?void 0:m.rangeWrapper},[n.presets&&n.presets.length>0&&t("div",{class:u(`${a}-presets`,(d=n.classNames)==null?void 0:d.presets),style:(D=n.styles)==null?void 0:D.presets},[t("ul",null,[n.presets.map(S=>{var N,C;return t("li",{key:S.label,class:u(`${a}-preset`,(N=n.classNames)==null?void 0:N.preset),style:(C=n.styles)==null?void 0:C.preset,onClick:()=>Xn(S)},[S.label])})])]),t("div",{class:u(`${a}-range-panels`,(q=n.classNames)==null?void 0:q.rangePanels),style:(P=n.styles)==null?void 0:P.rangePanels},[cn(T.value,v.value,"left"),cn(On.value,An.value,"right")])])])};return()=>{var s,l,i,m;return t(ua,{open:K.value,trigger:"click",placement:"bottomLeft",disabled:L.value,destroyOnHidden:!0,triggerClass:u(`${a}`,`${a}-range`,`${a}-${n.size}`,{[`${a}-open`]:K.value,[`${a}-disabled`]:L.value,[`${a}-status-error`]:n.status==="error",[`${a}-status-warning`]:n.status==="warning"},(s=n.classNames)==null?void 0:s.root),triggerStyle:(l=n.styles)==null?void 0:l.root,popupClass:u(`${a}-popup`,`${a}-range-popup`,(i=n.classNames)==null?void 0:i.popup),popupStyle:(m=n.styles)==null?void 0:m.popup,onOpenChange:d=>{d?Ln():Q()}},{default:()=>{var d,D,q,P,S,N,C,O,A,V,_,F;return t("span",{class:u(`${a}-input`,(d=n.classNames)==null?void 0:d.input),style:(D=n.styles)==null?void 0:D.input},[t("input",{readonly:!0,value:Wn.value,placeholder:g.value[0],disabled:_n.value,class:u(`${a}-input-inner`,(q=n.classNames)==null?void 0:q.startInput),style:(P=n.styles)==null?void 0:P.startInput},null),t("span",{class:u(`${a}-range-separator`,(S=n.classNames)==null?void 0:S.separator),style:(N=n.styles)==null?void 0:N.separator},[n.separator]),t("input",{readonly:!0,value:zn.value,placeholder:g.value[1],disabled:Fn.value,class:u(`${a}-input-inner`,(C=n.classNames)==null?void 0:C.endInput),style:(O=n.styles)==null?void 0:O.endInput},null),n.allowClear&&jn.value&&!L.value&&t("span",{class:u(`${a}-clear`,(A=n.classNames)==null?void 0:A.clear),style:(V=n.styles)==null?void 0:V.clear,onClick:Gn},[t(ca,null,null)]),t("span",{class:u(`${a}-suffix`,(_=n.classNames)==null?void 0:_.suffix),style:(F=n.styles)==null?void 0:F.suffix},[t(ra,null,null)])])},popup:({placement:d})=>aa()})}}}),ka=W({__name:"RangePickerBasic",setup(n){const e=I([null,null]);return(a,o)=>(z(),en(k(Yn),{direction:"vertical"},{default:Y(()=>[t(k(x),{value:e.value,"onUpdate:value":o[0]||(o[0]=p=>e.value=p)},null,8,["value"]),c("span",null,"选择范围："+Bn(e.value[0])+" ~ "+Bn(e.value[1]),1)]),_:1}))}}),ga=`<template>
  <Space direction="vertical">
    <RangePicker v-model:value="range" />
    <span>选择范围：{{ range[0] }} ~ {{ range[1] }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RangePicker, Space } from '@hmfw/ant-design'
import type { RangeValue } from '@hmfw/ant-design'

const range = ref<RangeValue>([null, null])
<\/script>
`,ma={style:{display:"flex","flex-direction":"column",gap:"32px"}},ya=W({__name:"RangePickerClassNames",setup(n){const e=[{label:"最近 7 天",value:()=>{const a=new Date,o=new Date;return o.setDate(o.getDate()-6),[o.toISOString().split("T")[0],a.toISOString().split("T")[0]]}},{label:"最近 30 天",value:()=>{const a=new Date,o=new Date;return o.setDate(o.getDate()-29),[o.toISOString().split("T")[0],a.toISOString().split("T")[0]]}},{label:"本月",value:()=>{const a=new Date,o=new Date(a.getFullYear(),a.getMonth(),1),p=new Date(a.getFullYear(),a.getMonth()+1,0);return[o.toISOString().split("T")[0],p.toISOString().split("T")[0]]}}];return(a,o)=>(z(),Hn("div",ma,[c("div",null,[o[0]||(o[0]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义输入框与分隔符样式：",-1)),t(k(x),{"class-names":{input:"custom-input",separator:"custom-separator",suffix:"custom-suffix"}})]),c("div",null,[o[1]||(o[1]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义弹层与预设范围：",-1)),t(k(x),{presets:e,"class-names":{popup:"custom-popup",presets:"custom-presets",preset:"custom-preset"}})]),c("div",null,[o[2]||(o[2]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义日期单元格与范围高亮：",-1)),t(k(x),{"class-names":{day:"custom-day",dayInRange:"custom-day-in-range",dayRangeStart:"custom-day-range-start",dayRangeEnd:"custom-day-range-end"}})]),c("div",null,[o[3]||(o[3]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),t(k(x),{styles:{root:{borderRadius:"12px"},input:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white"},separator:{color:"white",fontWeight:"bold"}}})]),c("div",null,[o[4]||(o[4]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合定制（渐变边框 + 高亮范围）：",-1)),t(k(x),{presets:e,"class-names":{root:"combined-root",input:"combined-input",popup:"combined-popup",dayInRange:"combined-day-in-range",dayRangeStart:"combined-day-range-start",dayRangeEnd:"combined-day-range-end"}})])]))}}),fa=pa(ya,[["__scopeId","data-v-9c3c3ff5"]]),ba=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义输入框与分隔符 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义输入框与分隔符样式：</div>
      <RangePicker
        :class-names="{
          input: 'custom-input',
          separator: 'custom-separator',
          suffix: 'custom-suffix',
        }"
      />
    </div>

    <!-- 场景 2：自定义弹层与预设范围 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义弹层与预设范围：</div>
      <RangePicker
        :presets="presets"
        :class-names="{
          popup: 'custom-popup',
          presets: 'custom-presets',
          preset: 'custom-preset',
        }"
      />
    </div>

    <!-- 场景 3：自定义日期单元格 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义日期单元格与范围高亮：</div>
      <RangePicker
        :class-names="{
          day: 'custom-day',
          dayInRange: 'custom-day-in-range',
          dayRangeStart: 'custom-day-range-start',
          dayRangeEnd: 'custom-day-range-end',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <RangePicker
        :styles="{
          root: { borderRadius: '12px' },
          input: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' },
          separator: { color: 'white', fontWeight: 'bold' },
        }"
      />
    </div>

    <!-- 场景 5：组合定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合定制（渐变边框 + 高亮范围）：</div>
      <RangePicker
        :presets="presets"
        :class-names="{
          root: 'combined-root',
          input: 'combined-input',
          popup: 'combined-popup',
          dayInRange: 'combined-day-in-range',
          dayRangeStart: 'combined-day-range-start',
          dayRangeEnd: 'combined-day-range-end',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RangePicker } from '@hmfw/ant-design'

const presets = [
  {
    label: '最近 7 天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setDate(start.getDate() - 6)
      return [start.toISOString().split('T')[0], end.toISOString().split('T')[0]] as [string, string]
    },
  },
  {
    label: '最近 30 天',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setDate(start.getDate() - 29)
      return [start.toISOString().split('T')[0], end.toISOString().split('T')[0]] as [string, string]
    },
  },
  {
    label: '本月',
    value: () => {
      const now = new Date()
      const start = new Date(now.getFullYear(), now.getMonth(), 1)
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      return [start.toISOString().split('T')[0], end.toISOString().split('T')[0]] as [string, string]
    },
  },
]
<\/script>

<style>
/* 场景 1：弹层使用 :global() */
.custom-popup {
  border-radius: 12px !important;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3) !important;
}
</style>

<style scoped>
/* 场景 1：输入框与分隔符 */
:deep(.custom-input) {
  background: linear-gradient(135deg, #e6f4ff 0%, #f0f5ff 100%);
  border-color: #1890ff;
  transition: all 0.3s;
}

:deep(.custom-input:hover) {
  border-color: #40a9ff;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.2);
}

:deep(.custom-separator) {
  color: #1890ff;
  font-weight: bold;
  font-size: 16px;
}

:deep(.custom-suffix) {
  color: #1890ff;
  transition: transform 0.3s;
}

:deep(.custom-suffix:hover) {
  transform: scale(1.2);
}

/* 场景 2：预设范围（弹层必须用 :global） */
:deep(.custom-presets) {
  background: linear-gradient(to bottom, #f0f5ff, #e6f4ff);
  border-right-color: #1890ff;
}

:deep(.custom-preset) {
  font-weight: 500;
  transition: all 0.3s;
}

:deep(.custom-preset:hover) {
  background: #1890ff !important;
  color: white;
  transform: translateX(4px);
}

/* 场景 3：日期单元格 */
:deep(.custom-day) {
  font-weight: 500;
  transition: all 0.3s;
}

:deep(.custom-day:hover) {
  transform: scale(1.1);
  box-shadow: 0 2px 6px rgba(24, 144, 255, 0.3);
}

:deep(.custom-day-in-range) {
  background: linear-gradient(135deg, #e6f4ff 0%, #bae0ff 100%) !important;
}

:deep(.custom-day-range-start) {
  background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%) !important;
  color: white !important;
  font-weight: bold;
}

:deep(.custom-day-range-end) {
  background: linear-gradient(135deg, #40a9ff 0%, #1890ff 100%) !important;
  color: white !important;
  font-weight: bold;
}

/* 场景 5：组合定制 */
:deep(.combined-root) {
  border: 2px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.combined-root:hover) {
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
}

:deep(.combined-input) {
  font-weight: 500;
}

:deep(.combined-day-in-range) {
  background: linear-gradient(135deg, #f0e6ff 0%, #e6d9ff 100%) !important;
}

:deep(.combined-day-range-start),
:deep(.combined-day-range-end) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  font-weight: bold;
  position: relative;
}

:deep(.combined-day-range-start::after),
:deep(.combined-day-range-end::after) {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.2);
  opacity: 0;
  transition: opacity 0.3s;
}

:deep(.combined-day-range-start:hover::after),
:deep(.combined-day-range-end:hover::after) {
  opacity: 1;
}
</style>
`,va=W({__name:"RangePickerDisabled",setup(n){return(e,a)=>(z(),en(k(Yn),{direction:"vertical"},{default:Y(()=>[t(k(x),{disabled:[!0,!1]}),t(k(x),{disabled:"",value:["2024-01-01","2024-01-31"]})]),_:1}))}}),ha=`<template>
  <Space direction="vertical">
    <RangePicker :disabled="[true, false]" />
    <RangePicker disabled :value="['2024-01-01', '2024-01-31']" />
  </Space>
</template>

<script setup lang="ts">
import { RangePicker, Space } from '@hmfw/ant-design'
<\/script>
`,wa=W({__name:"RangePickerPresets",setup(n){function e(g){const w=new Date;return w.setDate(w.getDate()-g),w.toISOString().slice(0,10)}function a(){return new Date().toISOString().slice(0,10)}const o=[{label:"最近 7 天",value:[e(7),a()]},{label:"最近 14 天",value:[e(14),a()]},{label:"最近 30 天",value:()=>[e(30),a()]}];function p(g){console.log("range:",g)}return(g,w)=>(z(),en(k(x),{presets:o,onChange:p}))}}),Sa=`<template>
  <RangePicker :presets="presets" @change="onChange" />
</template>

<script setup lang="ts">
import { RangePicker } from '@hmfw/ant-design'
import type { RangeValue } from '@hmfw/ant-design'

type RangePreset = { label: string; value: RangeValue | (() => RangeValue) }

function daysAgo(n: number): string {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d.toISOString().slice(0, 10)
}
function today(): string {
  return new Date().toISOString().slice(0, 10)
}

const presets: RangePreset[] = [
  { label: '最近 7 天', value: [daysAgo(7), today()] },
  { label: '最近 14 天', value: [daysAgo(14), today()] },
  { label: '最近 30 天', value: () => [daysAgo(30), today()] },
]

function onChange(value: RangeValue) {
  console.log('range:', value)
}
<\/script>
`,xa={class:"markdown-body"},Ia={__name:"range-picker",setup(n,{expose:e}){return e({frontmatter:{}}),(o,p)=>{const g=oa("DemoBlock");return z(),Hn("div",xa,[p[0]||(p[0]=c("h1",{id:"rangepicker-日期范围选择框",tabindex:"-1"},"RangePicker 日期范围选择框",-1)),p[1]||(p[1]=c("p",null,"日期范围选择器。",-1)),p[2]||(p[2]=c("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),p[3]||(p[3]=c("ul",null,[c("li",null,"需要选择一段时间范围时，如查询时间区间、预订日期等")],-1)),p[4]||(p[4]=c("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),p[5]||(p[5]=c("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t(g,{title:"基础用法",source:k(ga)},{default:Y(()=>[t(ka)]),_:1},8,["source"]),p[6]||(p[6]=c("h3",{id:"预设范围",tabindex:"-1"},"预设范围",-1)),p[7]||(p[7]=c("p",null,[f("通过 "),c("code",null,"presets"),f(" 提供快捷选项，"),c("code",null,"value"),f(" 支持直接传范围或返回范围的函数。")],-1)),t(g,{title:"预设范围",source:k(Sa)},{default:Y(()=>[t(wa)]),_:1},8,["source"]),p[8]||(p[8]=c("h3",{id:"禁用",tabindex:"-1"},"禁用",-1)),p[9]||(p[9]=c("p",null,[c("code",null,"disabled"),f(" 传布尔值禁用整个控件，传 "),c("code",null,"[boolean, boolean]"),f(" 可分别禁用起止输入框。")],-1)),t(g,{title:"禁用",source:k(ha)},{default:Y(()=>[t(va)]),_:1},8,["source"]),p[10]||(p[10]=c("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),p[11]||(p[11]=c("p",null,[f("通过 "),c("code",null,"classNames"),f(" / "),c("code",null,"styles"),f(" 对各子元素做细粒度样式控制。")],-1)),t(g,{title:"语义化 className 与 style",source:k(ba)},{default:Y(()=>[t(fa)]),_:1},8,["source"]),p[12]||(p[12]=la(`<h2 id="api" tabindex="-1">API</h2><h3 id="rangepicker-props" tabindex="-1">RangePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value (v-model)</td><td>日期范围</td><td><code>[string | null, string | null]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认日期范围</td><td><code>[string | null, string | null]</code></td><td>-</td></tr><tr><td>format</td><td>日期格式</td><td><code>string</code></td><td><code>&#39;YYYY-MM-DD&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用，可分别禁用起止</td><td><code>boolean | [boolean, boolean]</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本，缺省时使用当前语言包</td><td><code>[string, string]</code></td><td>locale.rangePlaceholder</td></tr><tr><td>allowClear</td><td>是否允许清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>allowEmpty</td><td>允许起止留空</td><td><code>[boolean, boolean]</code></td><td>-</td></tr><tr><td>order</td><td>自动排序起止日期</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>separator</td><td>起止输入框之间的分隔符</td><td><code>string</code></td><td><code>&#39;→&#39;</code></td></tr><tr><td>presets</td><td>预设范围快捷选项</td><td><code>{ label: string, value: RangeValue | (() =&gt; RangeValue) }[]</code></td><td>-</td></tr><tr><td>size</td><td>尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>disabledDate</td><td>不可选日期</td><td><code>(date: Date, info?: { from?: Date, type?: string }) =&gt; boolean</code></td><td>-</td></tr><tr><td>status</td><td>校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39; | &#39;&#39;</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>open</td><td>受控的弹层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>RangePickerClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>RangePickerStyles</code></td><td>-</td></tr></tbody></table><h3 id="rangepicker-events" tabindex="-1">RangePicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>日期范围变化时</td><td><code>(value: RangeValue, dates: [Date | null, Date | null]) =&gt; void</code></td></tr><tr><td>calendarChange</td><td>面板选择起止日期时</td><td><code>(value: RangeValue, dates: [Date | null, Date | null], info: { range: &#39;start&#39; | &#39;end&#39; }) =&gt; void</code></td></tr><tr><td>openChange</td><td>弹出/关闭时</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 RangePicker 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">RangePickerClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 div.hmfw-date-picker</span>
  input<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 输入框容器 span.hmfw-date-picker-input</span>
  startInput<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 开始日期输入框 input.hmfw-date-picker-input-inner</span>
  endInput<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 结束日期输入框 input.hmfw-date-picker-input-inner</span>
  separator<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 分隔符 span.hmfw-date-picker-range-separator</span>
  clear<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 清除按钮 span.hmfw-date-picker-clear</span>
  suffix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 后缀图标 span.hmfw-date-picker-suffix</span>
  popup<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 弹出层容器 div.hmfw-date-picker-popup</span>
  rangeWrapper<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 范围选择器包裹容器 div.hmfw-date-picker-range-wrapper</span>
  presets<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预设范围容器 div.hmfw-date-picker-presets</span>
  preset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个预设项 li.hmfw-date-picker-preset</span>
  rangePanels<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板容器（左右各一个） div.hmfw-date-picker-range-panels</span>
  panel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个日历面板 div.hmfw-date-picker-panel</span>
  panelHeader<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板头部 div.hmfw-date-picker-panel-header</span>
  panelHeaderBtn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头部按钮 button.hmfw-date-picker-panel-header-btn</span>
  panelHeaderTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头部标题 span.hmfw-date-picker-panel-header-title</span>
  panelBody<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板主体 div.hmfw-date-picker-panel-body</span>
  weekdays<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 星期标题行 div.hmfw-date-picker-weekdays</span>
  weekday<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个星期标题 span.hmfw-date-picker-weekday</span>
  days<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 日期网格容器 div.hmfw-date-picker-days</span>
  day<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个日期单元格 button.hmfw-date-picker-day</span>
  dayToday<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 今天的日期单元格 button.hmfw-date-picker-day-today</span>
  daySelected<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选中的日期单元格 button.hmfw-date-picker-day-selected</span>
  dayInRange<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 范围内的日期单元格 button.hmfw-date-picker-day-in-range</span>
  dayRangeStart<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 范围起始日期 button.hmfw-date-picker-day-range-start</span>
  dayRangeEnd<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 范围结束日期 button.hmfw-date-picker-day-range-end</span>
  dayDisabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 禁用的日期单元格 button.hmfw-date-picker-day-disabled</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">RangePickerStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  input<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  startInput<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  endInput<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  separator<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  clear<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  suffix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  popup<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  rangeWrapper<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  presets<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  preset<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  rangePanels<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  panel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  panelHeader<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  panelHeaderBtn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  panelHeaderTitle<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  panelBody<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  weekdays<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  weekday<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  days<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  day<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dayToday<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  daySelected<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dayInRange<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dayRangeStart<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dayRangeEnd<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dayDisabled<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-input<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.input / styles.input 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-input-inner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>开始日期<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.startInput / styles.startInput 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-range-separator<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>→<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.separator / styles.separator 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-input-inner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>结束日期<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.endInput / styles.endInput 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.clear / styles.clear 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>📅<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.suffix / styles.suffix 应用于此 --&gt;</span>

  <span class="token comment">&lt;!-- Teleport 到 body --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-popup<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.popup / styles.popup 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-range-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.rangeWrapper / styles.rangeWrapper 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-presets<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.presets / styles.presets 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-preset<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>最近 7 天<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.preset / styles.preset 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-range-panels<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.rangePanels / styles.rangePanels 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.panel / styles.panel 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.panelHeader / styles.panelHeader 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel-header-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>‹<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.panelHeaderBtn / styles.panelHeaderBtn 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel-header-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2024 年 1 月<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.panelHeaderTitle / styles.panelHeaderTitle 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.panelBody / styles.panelBody 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-weekdays<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token comment">&lt;!-- ↑ classNames.weekdays / styles.weekdays 应用于此 --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-weekday<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>日<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
              <span class="token comment">&lt;!-- ↑ classNames.weekday / styles.weekday 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-days<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
              <span class="token comment">&lt;!-- ↑ classNames.days / styles.days 应用于此 --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-day<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
              <span class="token comment">&lt;!-- ↑ classNames.day / styles.day 应用于此 --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-day hmfw-date-picker-day-today<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
              <span class="token comment">&lt;!-- ↑ classNames.dayToday / styles.dayToday 应用于此 --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-day hmfw-date-picker-day-in-range<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
              <span class="token comment">&lt;!-- ↑ classNames.dayInRange / styles.dayInRange 应用于此 --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-day hmfw-date-picker-day-range-start<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
              <span class="token comment">&lt;!-- ↑ classNames.dayRangeStart / styles.dayRangeStart 应用于此 --&gt;</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-day hmfw-date-picker-day-range-end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
              <span class="token comment">&lt;!-- ↑ classNames.dayRangeEnd / styles.dayRangeEnd 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 右侧面板结构同左侧 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RangePicker</span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-range-picker-root&#39;,
      input: &#39;my-input&#39;,
      separator: &#39;my-separator&#39;,
      popup: &#39;my-popup&#39;,
      dayInRange: &#39;my-day-in-range&#39;,
      dayRangeStart: &#39;my-day-range-start&#39;,
      dayRangeEnd: &#39;my-day-range-end&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">/* popup 通过 Teleport 渲染到 body，必须使用 :global() */</span>
<span class="token selector">:global(.my-popup)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 6px 20px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-range-picker-root)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid transparent<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>white<span class="token punctuation">,</span> white<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-origin</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">,</span> border-box<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-input)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #e6f4ff 0%<span class="token punctuation">,</span> #f0f5ff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-separator)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #1890ff<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-day-in-range)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #e6f4ff 0%<span class="token punctuation">,</span> #bae0ff 100%<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-day-range-start),
:deep(.my-day-range-end)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #1890ff 0%<span class="token punctuation">,</span> #40a9ff 100%<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RangePicker</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;12px&#39; },
      input: { background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;, color: &#39;white&#39; },
      separator: { color: &#39;white&#39;, fontWeight: &#39;bold&#39; },
      popup: { borderRadius: &#39;12px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>popup</code>、<code>presets</code>、<code>preset</code>、<code>rangePanels</code>、<code>panel</code> 等弹层相关节点通过 <code>Teleport to=&quot;body&quot;</code> 渲染，因此其样式必须使用 <code>:global()</code> 包裹（在 scoped 样式中），或在独立的非 scoped <code>&lt;style&gt;</code> 块中定义</li><li><code>clear</code> 仅在 <code>allowClear</code> 启用且有选中值时显示</li><li><code>dayToday</code>、<code>daySelected</code>、<code>dayInRange</code>、<code>dayRangeStart</code>、<code>dayRangeEnd</code> 是状态类 className，会与 <code>day</code> 同时应用</li><li>左右两个日历面板共享 <code>panel</code>、<code>panelHeader</code>、<code>panelBody</code> 等样式</li><li>预设范围仅在传入 <code>presets</code> 属性时显示</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主色浅背景色</td><td>由主色计算（浅 90%）</td></tr></tbody></table>`,21))])}}};export{Ia as default};
