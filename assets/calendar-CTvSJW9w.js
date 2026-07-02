import{R as yn,a as Z}from"./index-pyOH2AxT.js";import{d as M,u as vn,C as bn,r as v,m as O,c as p,a as D,v as nn,o as $,q as xn,e as f,b as z,f as c,_ as wn,h as Cn,w as P,g as H,i as Dn}from"./index-DpCWj_RH.js";import{c as i}from"./cls-S9IiI6wd.js";import{S as an}from"./Select-BD79ShA_.js";import"./LoadingOutlined-BZTKujXV.js";import"./DownOutlined-BfyIF5yt.js";import"./Trigger-BvJ5OT70.js";import"./VirtualList-DQXrAMvZ.js";function tn(n){return String(n).padStart(2,"0")}function j(n,s="YYYY-MM-DD"){return s.replace("YYYY",String(n.getFullYear())).replace("MM",tn(n.getMonth()+1)).replace("DD",tn(n.getDate()))}function L(n){if(!n)return null;if(n instanceof Date)return n;const s=new Date(n);return isNaN(s.getTime())?null:s}function I(n,s){return n.getFullYear()===s.getFullYear()&&n.getMonth()===s.getMonth()&&n.getDate()===s.getDate()}function Sn(n,s){return n.getFullYear()===s.getFullYear()&&n.getMonth()===s.getMonth()}function Nn(n,s,a){if(!s||!a)return!1;const d=n.getTime();return d>=s.getTime()&&d<=a.getTime()}function sn(n,s){return new Date(n,s+1,0).getDate()}function qn(n,s){return new Date(n,s,1).getDay()}function Rn(n,s){const a=[],d=qn(n,s),e=sn(n,s),k=sn(n,s-1);for(let u=d-1;u>=0;u--)a.push({date:new Date(n,s-1,k-u),inCurrentMonth:!1});for(let u=1;u<=e;u++)a.push({date:new Date(n,s,u),inCurrentMonth:!0});const h=42-a.length;for(let u=1;u<=h;u++)a.push({date:new Date(n,s+1,u),inCurrentMonth:!1});return a}const y=M({name:"Calendar",props:{value:[String,Date],defaultValue:[String,Date],mode:{type:String,default:"month"},fullscreen:{type:Boolean,default:!0},disabledDate:Function,validRange:Array,cellRender:Function,dateCellRender:Function,monthCellRender:Function,headerRender:Function,range:{type:Boolean,default:!1},rangeValue:Array,defaultRangeValue:Array,classNames:Object,styles:Object},emits:["update:value","change","select","panelChange","update:rangeValue","rangeChange"],setup(n,{emit:s}){const a=vn("calendar"),d=bn(),e=new Date,k=v(L(n.defaultValue??n.value)??e),h=v(n.mode),u=v(n.defaultRangeValue??n.rangeValue??[null,null]),F=v(!0),b=v(k.value.getFullYear()),q=v(k.value.getMonth()),en=D(()=>n.value!==void 0),V=D(()=>en.value?L(n.value)??e:k.value),ln=D(()=>n.rangeValue!==void 0),U=D(()=>ln.value&&n.rangeValue?n.rangeValue:u.value);O(()=>n.value,t=>{const l=L(t);l&&(k.value=l,b.value=l.getFullYear(),q.value=l.getMonth())}),O(()=>n.rangeValue,t=>{t&&(u.value=t)}),O(()=>n.mode,t=>{h.value=t});const on=t=>{if(!n.validRange)return!0;const[l,o]=n.validRange;return t>=l&&t<=o},_=t=>{var l;return on(t)?((l=n.disabledDate)==null?void 0:l.call(n,t))??!1:!0},pn=D(()=>Rn(b.value,q.value)),B=t=>{if(_(t))return;k.value=t;const l=j(t,"YYYY-MM-DD");s("update:value",l),s("change",l,t),s("select",l,t)},cn=t=>{if(n.range)if(F.value)u.value=[t,null],F.value=!1;else{const[l]=U.value;if(l){const o=t,r=l<=o?[l,o]:[o,l];u.value=r;const m=[j(r[0],"YYYY-MM-DD"),j(r[1],"YYYY-MM-DD")];s("update:rangeValue",r),s("rangeChange",m,r)}F.value=!0}else B(t)},dn=t=>{const l=new Date(b.value,t,V.value.getDate());B(l),q.value=t},rn=D(()=>{const t=e.getFullYear(),l=[];for(let o=t-100;o<=t+50;o++)l.push({label:`${o}年`,value:o});return l}),un=D(()=>d.value.DatePicker.months.map((t,l)=>({label:t,value:l}))),G=t=>{h.value=t,s("panelChange",null,t)},kn=()=>{var t,l;return p("div",{class:i(`${a}-header`,(t=n.classNames)==null?void 0:t.header),style:(l=n.styles)==null?void 0:l.header},[p("div",{class:`${a}-header-left`},[p(an,{value:b.value,options:rn.value,size:n.fullscreen?"middle":"small",onChange:o=>{b.value=o,s("panelChange",null,h.value)},style:{width:"100px"}},null),h.value==="month"&&p(an,{value:q.value,options:un.value,size:n.fullscreen?"middle":"small",onChange:o=>{q.value=o,s("panelChange",null,h.value)},style:{width:"80px",marginLeft:"8px"}},null)]),p("div",{class:`${a}-header-right`},[p(yn,{value:h.value,onChange:o=>G(o.target.value),size:n.fullscreen?"middle":"small"},{default:()=>[p(Z,{value:"month"},{default:()=>{var o;return[((o=d.value.Calendar)==null?void 0:o.month)??"月"]}}),p(Z,{value:"year"},{default:()=>{var o;return[((o=d.value.Calendar)==null?void 0:o.year)??"年"]}})]})])])},mn=(t,l)=>{var r,m;const o=nn("div",{class:i(`${a}-date`,(r=n.classNames)==null?void 0:r.date),style:(m=n.styles)==null?void 0:m.date},t.getDate());return n.cellRender?n.cellRender(t,{originNode:o,today:e,type:"month",locale:d.value}):n.dateCellRender?n.dateCellRender(t,{originNode:o,today:e}):o},gn=t=>{var r,m;const l=new Date(b.value,t,1),o=nn("div",{class:i(`${a}-month`,(r=n.classNames)==null?void 0:r.month),style:(m=n.styles)==null?void 0:m.month},d.value.DatePicker.months[t]);return n.cellRender?n.cellRender(l,{originNode:o,today:e,type:"year",locale:d.value}):n.monthCellRender?n.monthCellRender(l,d.value):o},fn=()=>{var t,l,o,r,m,x;return p("div",{class:i(`${a}-panel`,(t=n.classNames)==null?void 0:t.panel),style:(l=n.styles)==null?void 0:l.panel},[p("div",{class:i(`${a}-weekdays`,(o=n.classNames)==null?void 0:o.weekdays),style:(r=n.styles)==null?void 0:r.weekdays},[d.value.DatePicker.weekdays.map(g=>{var S,w;return p("div",{key:g,class:i(`${a}-weekday-cell`,(S=n.classNames)==null?void 0:S.weekdayCell),style:(w=n.styles)==null?void 0:w.weekdayCell},[g])})]),p("div",{class:i(`${a}-body`,(m=n.classNames)==null?void 0:m.body),style:(x=n.styles)==null?void 0:x.body},[pn.value.map(({date:g,inCurrentMonth:S},w)=>{var J,K,Q,X;const Y=I(g,e),R=_(g);let C=!1,N=!1,E=!1,W=!1;if(n.range){const[A,T]=U.value;N=A?I(g,A):!1,E=T?I(g,T):!1,C=N||E,W=Nn(g,A,T)}else C=I(g,V.value);return p("div",{key:w,class:i(`${a}-cell`,(J=n.classNames)==null?void 0:J.cell,{[`${a}-cell-in-view`]:S,[`${a}-cell-today`]:Y,[`${a}-cell-selected`]:C,[`${a}-cell-disabled`]:R,[`${a}-cell-range-start`]:N,[`${a}-cell-range-end`]:E,[`${a}-cell-in-range`]:W&&!C}),style:(K=n.styles)==null?void 0:K.cell,onClick:()=>!R&&cn(g)},[p("div",{class:i(`${a}-cell-inner`,(Q=n.classNames)==null?void 0:Q.cellInner),style:(X=n.styles)==null?void 0:X.cellInner},[mn(g)])])})])])},hn=()=>{var t,l,o,r;return p("div",{class:i(`${a}-panel`,(t=n.classNames)==null?void 0:t.panel),style:(l=n.styles)==null?void 0:l.panel},[p("div",{class:i(`${a}-year-panel`,(o=n.classNames)==null?void 0:o.yearPanel),style:(r=n.styles)==null?void 0:r.yearPanel},[Array.from({length:12},(m,x)=>{var Y,R,C,N;const g=new Date(b.value,x,1),S=Sn(g,V.value),w=_(g);return p("div",{key:x,class:i(`${a}-cell`,`${a}-month-cell`,(Y=n.classNames)==null?void 0:Y.monthCell,{[`${a}-cell-selected`]:S,[`${a}-cell-disabled`]:w}),style:(R=n.styles)==null?void 0:R.monthCell,onClick:()=>!w&&dn(x)},[p("div",{class:i(`${a}-cell-inner`,(C=n.classNames)==null?void 0:C.cellInner),style:(N=n.styles)==null?void 0:N.cellInner},[gn(x)])])})])])};return()=>{var l,o,r,m;const t=n.headerRender?n.headerRender({value:V.value,type:h.value,onChange:B,onTypeChange:G}):kn();return p("div",{class:i(a,(l=n.classNames)==null?void 0:l.root,{[`${a}-fullscreen`]:n.fullscreen,[`${a}-mini`]:!n.fullscreen}),style:(o=n.styles)==null?void 0:o.root},[t,p("div",{class:i(`${a}-content`,(r=n.classNames)==null?void 0:r.content),style:(m=n.styles)==null?void 0:m.content},[h.value==="month"?fn():hn()])])}}}),Mn=M({__name:"CalendarBasic",setup(n){const s=v(),a=d=>{console.log("选中日期：",d)};return(d,e)=>($(),xn(f(y),{value:s.value,"onUpdate:value":e[0]||(e[0]=k=>s.value=k),onSelect:a},null,8,["value"]))}}),$n=`<template>
  <Calendar v-model:value="value" @select="onSelect" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@hmfw/ant-design'

const value = ref<string>()

const onSelect = (dateStr: string) => {
  console.log('选中日期：', dateStr)
}
<\/script>
`,Vn={style:{display:"flex","flex-direction":"column",gap:"32px"}},Yn=M({__name:"CalendarClassNames",setup(n){return(s,a)=>($(),z("div",Vn,[c("div",null,[a[0]||(a[0]=c("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"14px"}},"自定义头部和面板背景：",-1)),p(f(y),{fullscreen:!1,"class-names":{root:"custom-calendar-root",header:"custom-header",panel:"custom-panel"}})]),c("div",null,[a[1]||(a[1]=c("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"14px"}},"自定义日期单元格：",-1)),p(f(y),{fullscreen:!1,"class-names":{cell:"custom-cell",cellInner:"custom-cell-inner",date:"custom-date"}})]),c("div",null,[a[2]||(a[2]=c("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"14px"}},"自定义星期头：",-1)),p(f(y),{fullscreen:!1,"class-names":{weekdays:"custom-weekdays",weekdayCell:"custom-weekday-cell"}})]),c("div",null,[a[3]||(a[3]=c("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"14px"}},"年视图自定义：",-1)),p(f(y),{mode:"year",fullscreen:!1,"class-names":{yearPanel:"custom-year-panel",monthCell:"custom-month-cell",month:"custom-month"}})]),c("div",null,[a[4]||(a[4]=c("div",{style:{"margin-bottom":"12px",color:"#666","font-size":"14px"}},"使用内联样式：",-1)),p(f(y),{fullscreen:!1,styles:{root:{borderRadius:"12px",boxShadow:"0 4px 16px rgba(0, 0, 0, 0.1)"},header:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"16px",borderRadius:"12px 12px 0 0"},body:{padding:"12px"},cell:{margin:"2px"}}})])]))}}),Pn=wn(Yn,[["__scopeId","data-v-8c6ccd34"]]),In=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义头部和面板背景 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">自定义头部和面板背景：</div>
      <Calendar
        :fullscreen="false"
        :class-names="{
          root: 'custom-calendar-root',
          header: 'custom-header',
          panel: 'custom-panel',
        }"
      />
    </div>

    <!-- 场景 2：自定义日期单元格 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">自定义日期单元格：</div>
      <Calendar
        :fullscreen="false"
        :class-names="{
          cell: 'custom-cell',
          cellInner: 'custom-cell-inner',
          date: 'custom-date',
        }"
      />
    </div>

    <!-- 场景 3：自定义星期头 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">自定义星期头：</div>
      <Calendar
        :fullscreen="false"
        :class-names="{
          weekdays: 'custom-weekdays',
          weekdayCell: 'custom-weekday-cell',
        }"
      />
    </div>

    <!-- 场景 4：年视图自定义 -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">年视图自定义：</div>
      <Calendar
        mode="year"
        :fullscreen="false"
        :class-names="{
          yearPanel: 'custom-year-panel',
          monthCell: 'custom-month-cell',
          month: 'custom-month',
        }"
      />
    </div>

    <!-- 场景 5：组合使用 styles -->
    <div>
      <div style="margin-bottom: 12px; color: #666; font-size: 14px">使用内联样式：</div>
      <Calendar
        :fullscreen="false"
        :styles="{
          root: { borderRadius: '12px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' },
          header: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '16px',
            borderRadius: '12px 12px 0 0',
          },
          body: { padding: '12px' },
          cell: { margin: '2px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar } from '@hmfw/ant-design'
<\/script>

<style scoped>
/* 场景 1：自定义头部和面板 */
:deep(.custom-calendar-root) {
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  overflow: hidden;
}

:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
  border-bottom: none;
}

:deep(.custom-header .hmfw-select-selector) {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

:deep(.custom-header .hmfw-select-arrow) {
  color: white;
}

:deep(.custom-header .hmfw-radio-group) {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 2px;
}

:deep(.custom-header .hmfw-radio-button-wrapper) {
  background: transparent;
  border-color: transparent;
  color: white;
}

:deep(.custom-header .hmfw-radio-button-wrapper-checked) {
  background: white;
  color: #667eea;
}

:deep(.custom-panel) {
  background: linear-gradient(to bottom, #f8faff 0%, #ffffff 100%);
}

/* 场景 2：自定义日期单元格 */
:deep(.custom-cell) {
  border-radius: 8px;
  margin: 2px;
  transition: all 0.3s;
}

:deep(.custom-cell:hover) {
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

:deep(.custom-cell.hmfw-calendar-cell-selected .custom-cell-inner) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 6px;
}

:deep(.custom-cell.hmfw-calendar-cell-today .custom-cell-inner) {
  border: 2px solid #667eea;
  border-radius: 6px;
}

:deep(.custom-cell-inner) {
  border-radius: 6px;
  transition: all 0.3s;
}

:deep(.custom-date) {
  font-weight: 500;
}

/* 场景 3：自定义星期头 */
:deep(.custom-weekdays) {
  background: linear-gradient(to right, #f0f5ff, #e6f0ff);
  border-radius: 8px;
  margin-bottom: 8px;
}

:deep(.custom-weekday-cell) {
  font-weight: 600;
  color: #667eea;
  padding: 12px 0;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
}

/* 场景 4：年视图自定义 */
:deep(.custom-year-panel) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 16px;
}

:deep(.custom-month-cell) {
  border-radius: 12px;
  transition: all 0.3s;
  border: 2px solid transparent;
}

:deep(.custom-month-cell:hover) {
  border-color: #667eea;
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

:deep(.custom-month-cell.hmfw-calendar-cell-selected) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
}

:deep(.custom-month-cell.hmfw-calendar-cell-selected .custom-month) {
  color: white;
  font-weight: 600;
}

:deep(.custom-month) {
  font-size: 16px;
  padding: 16px 0;
  transition: all 0.3s;
}
</style>
`,zn={style:{width:"300px",border:"1px solid #d9d9d9","border-radius":"8px"}},Fn=M({__name:"CalendarMini",setup(n){const s=v();return(a,d)=>($(),z("div",zn,[p(f(y),{value:s.value,"onUpdate:value":d[0]||(d[0]=e=>s.value=e),fullscreen:!1},null,8,["value"])]))}}),_n=`<template>
  <div style="width: 300px; border: 1px solid #d9d9d9; border-radius: 8px">
    <Calendar v-model:value="value" :fullscreen="false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@hmfw/ant-design'

const value = ref<string>()
<\/script>
`,Bn={style:{display:"flex","flex-direction":"column",gap:"16px"}},En=M({__name:"CalendarMode",setup(n){return(s,a)=>($(),z("div",Bn,[c("div",null,[a[0]||(a[0]=c("div",{style:{"margin-bottom":"8px"}},"月视图：",-1)),p(f(y),{mode:"month",fullscreen:!1})]),c("div",null,[a[1]||(a[1]=c("div",{style:{"margin-bottom":"8px"}},"年视图：",-1)),p(f(y),{mode:"year",fullscreen:!1})])]))}}),An=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px">月视图：</div>
      <Calendar mode="month" :fullscreen="false" />
    </div>
    <div>
      <div style="margin-bottom: 8px">年视图：</div>
      <Calendar mode="year" :fullscreen="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar } from '@hmfw/ant-design'
<\/script>
`,Tn={class:"markdown-body"},Kn={__name:"calendar",setup(n,{expose:s}){return s({frontmatter:{}}),(d,e)=>{const k=Cn("DemoBlock");return $(),z("div",Tn,[e[0]||(e[0]=c("h1",{id:"calendar-日历",tabindex:"-1"},"Calendar 日历",-1)),e[1]||(e[1]=c("p",null,"按照日历形式展示数据的容器。",-1)),e[2]||(e[2]=c("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=c("p",null,"当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。",-1)),e[4]||(e[4]=c("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=c("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=c("p",null,"一个通用的日历面板，支持年/月切换。",-1)),p(k,{title:"基础用法",source:f($n)},{default:P(()=>[p(Mn)]),_:1},8,["source"]),e[7]||(e[7]=c("h3",{id:"卡片模式",tabindex:"-1"},"卡片模式",-1)),e[8]||(e[8]=c("p",null,"用于嵌套在空间有限的容器中。",-1)),p(k,{title:"卡片模式",source:f(_n)},{default:P(()=>[p(Fn)]),_:1},8,["source"]),e[9]||(e[9]=c("h3",{id:"切换模式",tabindex:"-1"},"切换模式",-1)),e[10]||(e[10]=c("p",null,"支持在月视图和年视图之间切换。",-1)),p(k,{title:"切换模式",source:f(An)},{default:P(()=>[p(En)]),_:1},8,["source"]),e[11]||(e[11]=c("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[12]||(e[12]=c("p",null,[H("通过 "),c("code",null,"classNames"),H(" / "),c("code",null,"styles"),H(" 对各子元素做细粒度样式控制。")],-1)),p(k,{title:"语义化 className 与 style",source:f(In)},{default:P(()=>[p(Pn)]),_:1},8,["source"]),e[13]||(e[13]=Dn(`<h2 id="api" tabindex="-1">API</h2><h3 id="calendar-props" tabindex="-1">Calendar Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>展示日期</td><td><code>string | Date</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认展示日期</td><td><code>string | Date</code></td><td>当前日期</td></tr><tr><td>mode</td><td>初始模式</td><td><code>&#39;month&#39; | &#39;year&#39;</code></td><td><code>&#39;month&#39;</code></td></tr><tr><td>fullscreen</td><td>是否全屏显示</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabledDate</td><td>不可选择的日期</td><td><code>(date: Date) =&gt; boolean</code></td><td>-</td></tr><tr><td>validRange</td><td>设置可以显示的日期范围</td><td><code>[Date, Date]</code></td><td>-</td></tr><tr><td>cellRender</td><td>自定义单元格渲染（统一 API）</td><td><code>(current: Date, info: CellRenderInfo) =&gt; VNode</code></td><td>-</td></tr><tr><td>dateCellRender</td><td>自定义日期单元格内容（月视图）</td><td><code>(current: Date) =&gt; VNode</code></td><td>-</td></tr><tr><td>monthCellRender</td><td>自定义月份单元格内容（年视图）</td><td><code>(current: Date) =&gt; VNode</code></td><td>-</td></tr><tr><td>headerRender</td><td>自定义头部内容</td><td><code>(config: HeaderConfig) =&gt; VNode</code></td><td>-</td></tr><tr><td>range</td><td>是否开启范围选择模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>rangeValue</td><td>选中的日期范围（range 模式）</td><td><code>[Date | null, Date | null]</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CalendarClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CalendarStyles</code></td><td>-</td></tr></tbody></table><h3 id="calendar-events" tabindex="-1">Calendar Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>日期变化时触发</td><td><code>(dateStr: string) =&gt; void</code></td></tr><tr><td>change</td><td>日期变化时触发</td><td><code>(dateStr: string, date: Date) =&gt; void</code></td></tr><tr><td>select</td><td>点击选择日期时触发</td><td><code>(dateStr: string, date: Date) =&gt; void</code></td></tr><tr><td>panelChange</td><td>日期面板变化（年/月）时触发</td><td><code>(date: string | null, mode: string) =&gt; void</code></td></tr><tr><td>rangeChange</td><td>范围选择变化时触发</td><td><code>(range: [string, string]) =&gt; void</code></td></tr><tr><td>update:rangeValue</td><td>范围选择变化时触发</td><td><code>(range: [Date, Date]) =&gt; void</code></td></tr></tbody></table><h3 id="cellrenderinfo" tabindex="-1">CellRenderInfo</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>originNode</td><td>原始渲染节点</td><td><code>VNode</code></td></tr><tr><td>today</td><td>当前日期</td><td><code>Date</code></td></tr><tr><td>type</td><td>当前视图类型</td><td><code>&#39;month&#39; | &#39;year&#39;</code></td></tr><tr><td>locale</td><td>语言包</td><td><code>any</code></td></tr></tbody></table><h3 id="headerconfig" tabindex="-1">HeaderConfig</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>当前选中的日期</td><td><code>Date</code></td></tr><tr><td>type</td><td>当前视图类型</td><td><code>&#39;month&#39; | &#39;year&#39;</code></td></tr><tr><td>onChange</td><td>日期变化回调</td><td><code>(date: Date) =&gt; void</code></td></tr><tr><td>onTypeChange</td><td>视图类型变化回调</td><td><code>(type: CalendarMode) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Calendar 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">CalendarClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头部区域</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内容区域</span>
  panel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板容器</span>
  weekdays<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 星期头容器</span>
  weekdayCell<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 星期单元格</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 日期格子容器</span>
  cell<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 日期/月份单元格</span>
  cellInner<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单元格内部</span>
  date<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 日期内容节点</span>
  month<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 月份内容节点</span>
  yearPanel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 年视图面板</span>
  monthCell<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 月份单元格（年视图）</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CalendarStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  panel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  weekdays<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  weekdayCell<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  body<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  cell<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  cellInner<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  date<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  month<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  yearPanel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  monthCell<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.header / styles.header 应用于此 --&gt;</span>
    <span class="token comment">&lt;!-- 头部：年月选择器、视图切换按钮 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>

    <span class="token comment">&lt;!-- 月视图 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.panel / styles.panel 应用于此 --&gt;</span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-weekdays<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.weekdays / styles.weekdays 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-weekday-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>日<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.weekdayCell / styles.weekdayCell 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.cell / styles.cell 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-cell-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.cellInner / styles.cellInner 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-date<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.date / styles.date 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 年视图 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.panel / styles.panel 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-year-panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.yearPanel / styles.yearPanel 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-month-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.monthCell / styles.monthCell 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-cell-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.cellInner / styles.cellInner 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-calendar-month<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>一月<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.month / styles.month 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span>
    <span class="token attr-name">:fullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-calendar&#39;,
      header: &#39;my-header&#39;,
      cell: &#39;my-cell&#39;,
      cellInner: &#39;my-cell-inner&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-calendar)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #e0e7ff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-header)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-cell)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-cell:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.05<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-cell.hmfw-calendar-cell-selected .my-cell-inner)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span>
    <span class="token attr-name">:fullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;12px&#39;, boxShadow: &#39;0 4px 16px rgba(0, 0, 0, 0.1)&#39; },
      header: {
        background: &#39;linear-gradient(135deg, #667eea 0%, #764ba2 100%)&#39;,
        color: &#39;white&#39;,
        padding: &#39;16px&#39;,
      },
      cell: { margin: &#39;2px&#39;, borderRadius: &#39;8px&#39; },
      cellInner: { transition: &#39;all 0.3s&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>cell</code> 既用于月视图的日期单元格，也用于年视图的月份单元格，使用时注意区分</li><li><code>monthCell</code> 仅在年视图中生效，专门用于月份单元格的额外样式</li><li><code>date</code> 和 <code>month</code> 分别控制日期数字和月份文字的样式</li><li>自定义样式时建议结合状态类名（如 <code>.hmfw-calendar-cell-selected</code>、<code>.hmfw-calendar-cell-today</code>）实现更精细的控制</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题色背景</td><td><code>#e6f4ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg-hover</code></td><td>主题色背景悬停</td><td><code>#bae0ff</code></td></tr><tr><td><code>--hmfw-color-primary-border</code></td><td>主题色边框</td><td><code>#91caff</code></td></tr><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>三级填充色</td><td><code>rgba(0, 0, 0, 0.04)</code></td></tr><tr><td><code>--hmfw-color-fill-quaternary</code></td><td>四级填充色</td><td><code>rgba(0, 0, 0, 0.02)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本颜色</td><td><code>rgba(0, 0, 0, 0.65)</code></td></tr><tr><td><code>--hmfw-color-text-quaternary</code></td><td>四级文本颜色</td><td><code>rgba(0, 0, 0, 0.25)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本颜色</td><td><code>rgba(0, 0, 0, 0.25)</code></td></tr><tr><td><code>--hmfw-font-size</code></td><td>标准字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-font-size-sm</code></td><td>小号字号</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-font-size-lg</code></td><td>大号字号</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr></tbody></table>`,26))])}}};export{Kn as default};
