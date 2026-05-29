import{k as S,I as G,z as m,L as X,t as Y,u as J,j as a,i as v,T as K,F as Q,c as g,w as $,g as H,G as p,d as o,E as W,B as Z,M as B,h as _}from"./index-DvxRruME.js";import{c as k}from"./cls-S9IiI6wd.js";function b(t){return String(t).padStart(2,"0")}function w(t){if(!t)return{h:0,m:0,s:0};const u=t.split(":").map(Number);return{h:u[0]??0,m:u[1]??0,s:u[2]??0}}function N(t,u,d,c="HH:mm:ss"){return c.replace("HH",b(t)).replace("mm",b(u)).replace("ss",b(d)).replace("H",String(t)).replace("m",String(u)).replace("s",String(d))}function ee(t="HH:mm:ss"){return t.includes("s")}const f=S({name:"TimePicker",props:{value:String,defaultValue:String,format:{type:String,default:"HH:mm:ss"},disabled:Boolean,size:{type:String,default:"middle"},placeholder:{type:String,default:"请选择时间"},allowClear:{type:Boolean,default:!0},hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},disabledHours:Function,disabledMinutes:Function,disabledSeconds:Function,showNow:{type:Boolean,default:!0},use12Hours:Boolean,status:{type:String,default:""},open:{type:Boolean,default:void 0}},emits:["update:value","change","openChange"],setup(t,{emit:u}){const d=G("time-picker"),c=w(t.defaultValue??t.value),l=m(c.h),n=m(c.m),i=m(c.s),h=m(!1),y=m(),V=m(),U=g(()=>t.open!==void 0?t.open:h.value),D=g(()=>{if(t.value){const e=w(t.value);return N(e.h,e.m,e.s,t.format)}return h.value||l.value||n.value||i.value?N(l.value,n.value,i.value,t.format):""}),T=g(()=>{if(t.value){const e=w(t.value);return{h:e.h,m:e.m,s:e.s}}return{h:l.value,m:n.value,s:i.value}});X(()=>t.value,e=>{if(e){const r=w(e);l.value=r.h,n.value=r.m,i.value=r.s}});const P=m({top:0,left:0}),E=()=>{if(!y.value)return;const e=y.value.getBoundingClientRect();P.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX}},M=()=>{t.disabled||(E(),h.value=!0,u("openChange",!0))},F=()=>{h.value=!1,u("openChange",!1)},z=()=>{const e=N(l.value,n.value,i.value,t.format);u("update:value",e),u("change",e),F()},I=()=>{const e=new Date;l.value=e.getHours(),n.value=e.getMinutes(),i.value=e.getSeconds()},q=e=>{e.stopPropagation(),l.value=0,n.value=0,i.value=0,u("update:value",void 0),u("change",void 0)},A=e=>{var r,s;!((r=y.value)!=null&&r.contains(e.target))&&!((s=V.value)!=null&&s.contains(e.target))&&F()};Y(()=>document.addEventListener("mousedown",A)),J(()=>document.removeEventListener("mousedown",A));const L=g(()=>{var r;const e=((r=t.disabledHours)==null?void 0:r.call(t))??[];return Array.from({length:t.use12Hours?12:24},(s,x)=>x*(t.hourStep??1)).filter(s=>!e.includes(s))}),O=g(()=>{var r;const e=((r=t.disabledMinutes)==null?void 0:r.call(t,T.value.h))??[];return Array.from({length:60},(s,x)=>x).filter(s=>s%(t.minuteStep??1)===0&&!e.includes(s))}),R=g(()=>{var r;const e=((r=t.disabledSeconds)==null?void 0:r.call(t,T.value.h,T.value.m))??[];return Array.from({length:60},(s,x)=>x).filter(s=>s%(t.secondStep??1)===0&&!e.includes(s))}),j=g(()=>ee(t.format)),C=(e,r)=>{if(!e)return;const s=e.querySelector(`[data-value="${r}"]`);s&&s.scrollIntoView({block:"nearest"})};return()=>a(Q,null,[a("div",{ref:y,class:k(d,`${d}-${t.size}`,{[`${d}-open`]:U.value,[`${d}-disabled`]:t.disabled,[`${d}-status-error`]:t.status==="error",[`${d}-status-warning`]:t.status==="warning"}),onClick:M},[a("span",{class:`${d}-input`},[a("input",{readonly:!0,placeholder:t.placeholder,value:D.value,disabled:t.disabled,class:`${d}-input-inner`},null),t.allowClear&&D.value&&!t.disabled&&a("span",{class:`${d}-clear`,onClick:q},[v("✕")]),a("span",{class:`${d}-suffix`},[v("🕐")])])]),U.value&&a(K,{to:"body"},{default:()=>[a("div",{ref:V,class:`${d}-panel-container`,style:{position:"absolute",top:`${P.value.top}px`,left:`${P.value.left}px`,zIndex:1050}},[a("div",{class:`${d}-panel`},[a("div",{class:`${d}-panel-inner`},[a("ul",{class:`${d}-panel-column`,ref:e=>C(e,l.value)},[L.value.map(e=>a("li",{key:e,"data-value":e,class:k(`${d}-panel-cell`,{[`${d}-panel-cell-selected`]:l.value===e}),onClick:()=>{l.value=e}},[b(e)]))]),a("ul",{class:`${d}-panel-column`,ref:e=>C(e,n.value)},[O.value.map(e=>a("li",{key:e,"data-value":e,class:k(`${d}-panel-cell`,{[`${d}-panel-cell-selected`]:n.value===e}),onClick:()=>{n.value=e}},[b(e)]))]),j.value&&a("ul",{class:`${d}-panel-column`,ref:e=>C(e,i.value)},[R.value.map(e=>a("li",{key:e,"data-value":e,class:k(`${d}-panel-cell`,{[`${d}-panel-cell-selected`]:i.value===e}),onClick:()=>{i.value=e}},[b(e)]))])]),a("div",{class:`${d}-panel-footer`},[t.showNow&&a("button",{class:`${d}-panel-footer-btn`,onClick:I},[v("此刻")]),a("button",{class:`${d}-panel-footer-btn ${d}-panel-footer-ok`,onClick:z},[v("确定")])])])])]})])}}),te={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},ne=S({__name:"TimePickerBasic",setup(t){const u=m(""),d=m("10:30:00"),c=l=>{console.log("选中时间：",l)};return(l,n)=>($(),H("div",te,[a(p(f),{value:u.value,"onUpdate:value":n[0]||(n[0]=i=>u.value=i),placeholder:"请选择时间",onChange:c},null,8,["value"]),a(p(f),{value:d.value,"onUpdate:value":n[1]||(n[1]=i=>d.value=i),placeholder:"禁用状态",disabled:""},null,8,["value"]),o("p",null,"选中时间："+W(u.value),1)]))}}),le=`<template>
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
`,de={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},ae=S({__name:"TimePickerFormat",setup(t){const u=m(""),d=m(""),c=m("");return(l,n)=>($(),H("div",de,[o("div",null,[n[3]||(n[3]=o("p",{style:{"margin-bottom":"4px"}},"只显示时分（HH:mm）：",-1)),a(p(f),{value:u.value,"onUpdate:value":n[0]||(n[0]=i=>u.value=i),format:"HH:mm",placeholder:"选择时分"},null,8,["value"])]),o("div",null,[n[4]||(n[4]=o("p",{style:{"margin-bottom":"4px"}},"12 小时制：",-1)),a(p(f),{value:d.value,"onUpdate:value":n[1]||(n[1]=i=>d.value=i),"use12-hours":!0,format:"h:mm a",placeholder:"12 小时制"},null,8,["value"])]),o("div",null,[n[5]||(n[5]=o("p",{style:{"margin-bottom":"4px"}},"不显示秒：",-1)),a(p(f),{value:c.value,"onUpdate:value":n[2]||(n[2]=i=>c.value=i),format:"HH:mm","show-now":!1,placeholder:"不显示秒"},null,8,["value"])])]))}}),oe=`<template>
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
`,ie={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},ue=S({__name:"TimePickerStep",setup(t){const u=m(""),d=m(""),c=m("");return(l,n)=>($(),H("div",ie,[o("div",null,[n[3]||(n[3]=o("p",{style:{"margin-bottom":"4px"}},"小时步长 2：",-1)),a(p(f),{value:u.value,"onUpdate:value":n[0]||(n[0]=i=>u.value=i),"hour-step":2,placeholder:"小时步长 2"},null,8,["value"])]),o("div",null,[n[4]||(n[4]=o("p",{style:{"margin-bottom":"4px"}},"分钟步长 15：",-1)),a(p(f),{value:d.value,"onUpdate:value":n[1]||(n[1]=i=>d.value=i),"minute-step":15,placeholder:"分钟步长 15"},null,8,["value"])]),o("div",null,[n[5]||(n[5]=o("p",{style:{"margin-bottom":"4px"}},"秒步长 30：",-1)),a(p(f),{value:c.value,"onUpdate:value":n[2]||(n[2]=i=>c.value=i),"second-step":30,placeholder:"秒步长 30"},null,8,["value"])])]))}}),re=`<template>
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
`,se={class:"markdown-body"},ve={__name:"time-picker",setup(t,{expose:u}){return u({frontmatter:{}}),(c,l)=>{const n=Z("DemoBlock");return $(),H("div",se,[l[0]||(l[0]=o("h1",{id:"timepicker-",tabindex:"-1"},"TimePicker 时间选择框",-1)),l[1]||(l[1]=o("p",null,"输入或选择时间的控件。",-1)),l[2]||(l[2]=o("h2",{id:"",tabindex:"-1"},"何时使用",-1)),l[3]||(l[3]=o("p",null,"当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。",-1)),l[4]||(l[4]=o("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),l[5]||(l[5]=o("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),l[6]||(l[6]=o("p",null,"点击 TimePicker，然后可以在浮层中选择或者输入某一时间。",-1)),a(n,{title:"基础用法",source:p(le)},{default:B(()=>[a(ne)]),_:1},8,["source"]),l[7]||(l[7]=o("h3",{id:"-3",tabindex:"-1"},"步进",-1)),l[8]||(l[8]=o("p",null,[v("通过 "),o("code",null,"hour-step"),v("、"),o("code",null,"minute-step"),v("、"),o("code",null,"second-step"),v(" 设置时间步长。")],-1)),a(n,{title:"步进",source:p(re)},{default:B(()=>[a(ue)]),_:1},8,["source"]),l[9]||(l[9]=o("h3",{id:"-4",tabindex:"-1"},"格式化",-1)),l[10]||(l[10]=o("p",null,[v("通过 "),o("code",null,"format"),v(" 属性自定义时间格式，通过 "),o("code",null,"use12Hours"),v(" 开启 12 小时制。")],-1)),a(n,{title:"格式化",source:p(oe)},{default:B(()=>[a(ae)]),_:1},8,["source"]),l[11]||(l[11]=_('<h2 id="api" tabindex="-1">API</h2><h3 id="timepicker-props" tabindex="-1">TimePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>时间</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认时间</td><td><code>string</code></td><td>-</td></tr><tr><td>format</td><td>展示的时间格式</td><td><code>string</code></td><td><code>&#39;HH:mm:ss&#39;</code></td></tr><tr><td>disabled</td><td>禁用全部操作</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>placeholder</td><td>没有值的时候显示的内容</td><td><code>string</code></td><td><code>&#39;请选择时间&#39;</code></td></tr><tr><td>allowClear</td><td>是否展示清除按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>hourStep</td><td>小时选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>minuteStep</td><td>分钟选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>secondStep</td><td>秒选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>showNow</td><td>面板是否显示&quot;此刻&quot;按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>use12Hours</td><td>使用 12 小时制，为 true 时 format 默认为 h:mm:ss a</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr></tbody></table><h3 id="timepicker-events" tabindex="-1">TimePicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>时间发生变化的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>时间发生变化的回调</td><td><code>(value: string, timeString: string) =&gt; void</code></td></tr><tr><td>openChange</td><td>面板打开/关闭时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table>',5))])}}};export{ve as default};
