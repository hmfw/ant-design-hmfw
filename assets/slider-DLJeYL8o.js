import{k as E,I as Y,L as F,j as o,z as v,c as j,w as N,g as L,d as i,E as _,G as g,B as I,h as D,M as U,i as k}from"./index-DvxRruME.js";import{c as S}from"./cls-S9IiI6wd.js";const p=E({name:"Slider",props:{value:[Number,Array],defaultValue:[Number,Array],min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,range:Boolean,vertical:Boolean,reverse:Boolean,marks:Object,tooltip:{type:Object},included:{type:Boolean,default:!0}},emits:["update:value","change","afterChange"],setup(e,{emit:u}){const l=Y("slider"),b=v(null),t=v(null),d=v(null),$=e.defaultValue??e.value??(e.range?[0,0]:0),T=v($),R=j(()=>e.value!==void 0),V=j(()=>R.value?e.value:T.value);F(()=>e.value,n=>{n!==void 0&&(T.value=n)});const z=n=>Math.min(e.max,Math.max(e.min,n)),A=n=>{const a=Math.round((n-e.min)/e.step);return z(e.min+a*e.step)},C=n=>(n-e.min)/(e.max-e.min)*100,P=n=>{if(!b.value)return 0;const a=b.value.getBoundingClientRect(),r="touches"in n?n.touches[0].clientX:n.clientX,s="touches"in n?n.touches[0].clientY:n.clientY;let m;return e.vertical?m=e.reverse?(s-a.top)/a.height:1-(s-a.top)/a.height:m=e.reverse?1-(r-a.left)/a.width:(r-a.left)/a.width,m=Math.max(0,Math.min(1,m)),A(e.min+m*(e.max-e.min))},f=n=>{T.value=n,u("update:value",n),u("change",n)},O=n=>{if(e.disabled)return;const a=P(n);if(e.range){const[r,s]=V.value,m=Math.abs(a-r),x=Math.abs(a-s);m<=x?f([a,s]):f([r,a])}else f(a)},M=n=>a=>{if(e.disabled)return;a.preventDefault(),t.value=n,d.value=n;const r=m=>{const x=P(m);if(e.range){const[h,c]=V.value;f(n==="start"?[Math.min(x,c),c]:[h,Math.max(x,h)])}else f(x)},s=()=>{t.value=null,d.value=null,u("afterChange",V.value),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",s),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",s)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",s),document.addEventListener("touchmove",r),document.addEventListener("touchend",s)},w=n=>{var a,r;return((a=e.tooltip)==null?void 0:a.formatter)===null?null:(r=e.tooltip)!=null&&r.formatter?e.tooltip.formatter(n):String(n)};return()=>{const n=V.value,a=e.range?n[0]:n,r=e.range?n[1]:n,s=C(a),m=C(r),x=e.vertical?e.included?{bottom:`${e.range?s:0}%`,height:`${e.range?m-s:m}%`}:{}:e.included?{left:`${e.range?s:0}%`,width:`${e.range?m-s:m}%`}:{},h=e.marks?Object.entries(e.marks).map(([c,y])=>({value:Number(c),label:y})):[];return o("div",{class:S(l,{[`${l}-disabled`]:e.disabled,[`${l}-vertical`]:e.vertical,[`${l}-with-marks`]:h.length>0})},[o("div",{ref:b,class:`${l}-rail`,onClick:O},[o("div",{class:`${l}-track`,style:x},null),h.map(({value:c})=>{const y=C(c),B=e.vertical?{bottom:`${y}%`}:{left:`${y}%`};return o("span",{key:c,class:S(`${l}-dot`,{[`${l}-dot-active`]:e.range?c>=a&&c<=r:c<=r}),style:B},null)}),e.range&&o("div",{class:S(`${l}-handle`,`${l}-handle-1`,{[`${l}-handle-dragging`]:t.value==="start"}),style:e.vertical?{bottom:`${s}%`}:{left:`${s}%`},role:"slider","aria-label":"最小值","aria-orientation":e.vertical?"vertical":"horizontal","aria-valuemin":e.min,"aria-valuemax":r,"aria-valuenow":a,"aria-disabled":e.disabled,tabindex:e.disabled?-1:0,onMousedown:M("start"),onTouchstart:M("start"),onMouseenter:()=>{d.value="start"},onMouseleave:()=>{t.value!=="start"&&(d.value=null)}},[d.value==="start"&&w(a)!==null&&o("div",{class:`${l}-tooltip`},[w(a)])]),o("div",{class:S(`${l}-handle`,e.range?`${l}-handle-2`:"",{[`${l}-handle-dragging`]:t.value==="end"||!e.range&&t.value!==null}),style:e.vertical?{bottom:`${m}%`}:{left:`${m}%`},role:"slider","aria-label":e.range?"最大值":"滑块","aria-orientation":e.vertical?"vertical":"horizontal","aria-valuemin":e.range?a:e.min,"aria-valuemax":e.max,"aria-valuenow":r,"aria-disabled":e.disabled,tabindex:e.disabled?-1:0,onMousedown:M((e.range,"end")),onTouchstart:M((e.range,"end")),onMouseenter:()=>{d.value="end"},onMouseleave:()=>{t.value!=="end"&&(d.value=null)}},[d.value==="end"&&w(r)!==null&&o("div",{class:`${l}-tooltip`},[w(r)])])]),h.length>0&&o("div",{class:`${l}-mark`},[h.map(({value:c,label:y})=>{const B=C(c),X=e.vertical?{bottom:`${B}%`}:{left:`${B}%`};return o("span",{key:c,class:S(`${l}-mark-text`,{[`${l}-mark-text-active`]:e.range?c>=a&&c<=r:c<=r}),style:X,onClick:()=>!e.disabled&&f(c)},[y])})])])}}}),G={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},q={style:{"margin-bottom":"8px"}},H=E({__name:"SliderBasic",setup(e){const u=v(30),l=v(50);return(b,t)=>(N(),L("div",G,[i("div",null,[i("p",q,"基础滑块："+_(u.value),1),o(g(p),{value:u.value,"onUpdate:value":t[0]||(t[0]=d=>u.value=d)},null,8,["value"])]),i("div",null,[t[2]||(t[2]=i("p",{style:{"margin-bottom":"8px"}},"禁用状态：",-1)),o(g(p),{value:l.value,"onUpdate:value":t[1]||(t[1]=d=>l.value=d),disabled:""},null,8,["value"])])]))}}),J=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px;">
    <div>
      <p style="margin-bottom: 8px;">基础滑块：{{ value1 }}</p>
      <Slider v-model:value="value1" />
    </div>
    <div>
      <p style="margin-bottom: 8px;">禁用状态：</p>
      <Slider v-model:value="value2" disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from 'ant-design-hmfw'

const value1 = ref(30)
const value2 = ref(50)
<\/script>
`,K={style:{display:"flex","flex-direction":"column",gap:"40px",padding:"0 16px"}},Q={style:{"margin-bottom":"8px"}},W={style:{"margin-bottom":"8px"}},Z=E({__name:"SliderMarks",setup(e){const u=v(37),l=v(0),b={0:"0°C",26:"26°C",37:"37°C",100:{label:"100°C",style:{color:"#f50"}}};return(t,d)=>(N(),L("div",K,[i("div",null,[i("p",Q,"带刻度标记："+_(u.value),1),o(g(p),{value:u.value,"onUpdate:value":d[0]||(d[0]=$=>u.value=$),marks:b},null,8,["value"])]),i("div",null,[i("p",W,"只能选择刻度点："+_(l.value),1),o(g(p),{value:l.value,"onUpdate:value":d[1]||(d[1]=$=>l.value=$),marks:b,step:null},null,8,["value"])])]))}}),ee=`<template>
  <div style="display: flex; flex-direction: column; gap: 40px; padding: 0 16px;">
    <div>
      <p style="margin-bottom: 8px;">带刻度标记：{{ value1 }}</p>
      <Slider v-model:value="value1" :marks="marks" />
    </div>
    <div>
      <p style="margin-bottom: 8px;">只能选择刻度点：{{ value2 }}</p>
      <Slider v-model:value="value2" :marks="marks" :step="null" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from 'ant-design-hmfw'

const value1 = ref(37)
const value2 = ref(0)

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    label: '100°C',
    style: { color: '#f50' },
  },
}
<\/script>
`,te={style:{display:"flex","flex-direction":"column",gap:"24px",padding:"0 16px"}},ne={style:{"margin-bottom":"8px"}},le={style:{"margin-bottom":"8px"}},ae=E({__name:"SliderRange",setup(e){const u=v([20,70]),l=v([20,60]);return(b,t)=>(N(),L("div",te,[i("div",null,[i("p",ne,"范围选择："+_(u.value),1),o(g(p),{value:u.value,"onUpdate:value":t[0]||(t[0]=d=>u.value=d),range:""},null,8,["value"])]),i("div",null,[i("p",le,"带步长的范围选择："+_(l.value),1),o(g(p),{value:l.value,"onUpdate:value":t[1]||(t[1]=d=>l.value=d),range:"",step:10},null,8,["value"])])]))}}),de=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px;">
    <div>
      <p style="margin-bottom: 8px;">范围选择：{{ rangeValue }}</p>
      <Slider v-model:value="rangeValue" range />
    </div>
    <div>
      <p style="margin-bottom: 8px;">带步长的范围选择：{{ rangeValue2 }}</p>
      <Slider v-model:value="rangeValue2" range :step="10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from 'ant-design-hmfw'

const rangeValue = ref<[number, number]>([20, 70])
const rangeValue2 = ref<[number, number]>([20, 60])
<\/script>
`,re={class:"markdown-body"},ue={__name:"slider",setup(e,{expose:u}){return u({frontmatter:{}}),(b,t)=>{const d=I("DemoBlock");return N(),L("div",re,[t[0]||(t[0]=D('<h1 id="slider-" tabindex="-1">Slider 滑动输入条</h1><p>滑动型输入器，展示当前值和可选范围。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。</li><li>当用户需要自定义数值范围时。</li><li>适合于对数值不太精确的场景。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础用法</h3><p>基本滑动条。当 <code>range</code> 为 <code>true</code> 时，渲染为双滑块。</p>',7)),o(d,{title:"基础用法",source:g(J)},{default:U(()=>[o(H)]),_:1},8,["source"]),t[1]||(t[1]=i("h3",{id:"-3",tabindex:"-1"},"范围选择",-1)),t[2]||(t[2]=i("p",null,[k("通过 "),i("code",null,"range"),k(" 属性开启范围选择。")],-1)),o(d,{title:"范围选择",source:g(de)},{default:U(()=>[o(ae)]),_:1},8,["source"]),t[3]||(t[3]=i("h3",{id:"-4",tabindex:"-1"},"刻度标记",-1)),t[4]||(t[4]=i("p",null,[k("使用 "),i("code",null,"marks"),k(" 属性标注分段式滑块，使用 "),i("code",null,'step="null"'),k(" 时，Slider 的可选值仅有 marks 标出来的部分。")],-1)),o(d,{title:"刻度标记",source:g(ee)},{default:U(()=>[o(Z)]),_:1},8,["source"]),t[5]||(t[5]=D('<h2 id="api" tabindex="-1">API</h2><h3 id="slider-props" tabindex="-1">Slider Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>设置当前取值。当 <code>range</code> 为 false 时，使用 number，否则用 [number, number]</td><td><code>number | [number, number]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>设置初始取值</td><td><code>number | [number, number]</code></td><td><code>0</code></td></tr><tr><td>min</td><td>最小值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>max</td><td>最大值</td><td><code>number</code></td><td><code>100</code></td></tr><tr><td>step</td><td>步长，取值必须大于 0，并且可被 (max - min) 整除。当 <code>marks</code> 不为空对象时，可以设置 <code>step</code> 为 null，此时 Slider 的可选值仅有 marks 标出来的部分</td><td><code>number | null</code></td><td><code>1</code></td></tr><tr><td>disabled</td><td>值为 true 时，滑块为禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>vertical</td><td>值为 true 时，Slider 为垂直方向</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>range</td><td>双滑块模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>marks</td><td>刻度标记，key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式</td><td><code>Record&lt;number, string | { label: string; style?: object }&gt;</code></td><td>-</td></tr><tr><td>tooltip</td><td>Tooltip 相关配置</td><td><code>{ open?: boolean; formatter?: (value: number) =&gt; string }</code></td><td>-</td></tr></tbody></table><h3 id="slider-events" tabindex="-1">Slider Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>当 Slider 的值发生改变时，会触发 change 事件，并把改变后的值作为参数传入</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr><tr><td>change</td><td>当 Slider 的值发生改变时触发</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr><tr><td>afterChange</td><td>与 mouseup 触发时机一致，把当前值作为参数传入</td><td><code>(value: number | [number, number]) =&gt; void</code></td></tr></tbody></table>',5))])}}};export{ue as default};
