import{k as m,I as D,z as c,L as E,j as u,c as R,w as b,g,G as v,d as l,E as C,B as P,M as x,i as h,h as T}from"./index-BNHhPN23.js";import{c as N}from"./cls-S9IiI6wd.js";const f=m({name:"Rate",props:{value:Number,defaultValue:{type:Number,default:0},count:{type:Number,default:5},allowHalf:Boolean,allowClear:{type:Boolean,default:!0},disabled:Boolean,character:{type:String,default:"★"},tooltips:Array},emits:["update:value","change","hoverChange","focus","blur","keydown"],setup(a,{slots:o,emit:d}){const s=D("rate"),t=c(a.defaultValue??a.value??0),e=c(null),p=c(!1),U=R(()=>a.value!==void 0),w=R(()=>U.value?a.value:t.value);E(()=>a.value,r=>{r!==void 0&&(t.value=r)});const M=r=>{if(a.disabled)return;let n=r;a.allowClear&&r===w.value&&(n=0),t.value=n,d("update:value",n),d("change",n)},V=(r,n)=>n?r+.5:r+1,$=(r,n)=>{M(V(r,n))},k=(r,n)=>{const i=V(r,n);e.value!==i&&(e.value=i,d("hoverChange",i))},_=()=>{e.value=null,d("hoverChange",void 0)},z=R(()=>e.value??w.value),A=r=>{const n=z.value,i=r+1,y=r+.5;return n>=i?"full":a.allowHalf&&n>=y?"half":"zero"};return()=>{const r=Array.from({length:a.count},(n,i)=>i);return u("ul",{class:N(s,{[`${s}-disabled`]:a.disabled}),onMouseleave:_,onFocus:()=>{p.value=!0,d("focus")},onBlur:()=>{p.value=!1,d("blur")},tabindex:a.disabled?-1:0,role:"radiogroup"},[r.map(n=>{var S,H;const i=A(n),y=(S=a.tooltips)==null?void 0:S[n],B=((H=o.character)==null?void 0:H.call(o,{index:n}))??a.character;return u("li",{key:n,class:N(`${s}-star`,{[`${s}-star-full`]:i==="full",[`${s}-star-half`]:i==="half",[`${s}-star-zero`]:i==="zero"}),title:y,role:"radio","aria-checked":i!=="zero","aria-posinset":n+1,"aria-setsize":a.count},[a.allowHalf&&u("div",{class:`${s}-star-first`,onClick:()=>!a.disabled&&$(n,!0),onMousemove:()=>!a.disabled&&k(n,!0)},[B]),u("div",{class:`${s}-star-second`,onClick:()=>!a.disabled&&$(n,!1),onMousemove:()=>!a.disabled&&k(n,!1)},[B])])})])}}}),I={style:{display:"flex","flex-direction":"column",gap:"16px"}},L=m({__name:"RateBasic",setup(a){const o=c(3),d=c(2.5);return(s,t)=>(b(),g("div",I,[u(v(f),{value:o.value,"onUpdate:value":t[0]||(t[0]=e=>o.value=e)},null,8,["value"]),u(v(f),{value:d.value,"onUpdate:value":t[1]||(t[1]=e=>d.value=e),disabled:""},null,8,["value"]),l("p",null,"评分："+C(o.value),1)]))}}),j=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Rate v-model:value="value" />
    <Rate v-model:value="value2" disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(3)
const value2 = ref(2.5)
<\/script>
`,F={style:{display:"flex","flex-direction":"column",gap:"16px"}},G=m({__name:"RateCustom",setup(a){const o=c(3),d=c(4),s=c(2);return(t,e)=>(b(),g("div",F,[l("div",null,[e[3]||(e[3]=l("p",{style:{"margin-bottom":"4px"}},"使用表情：",-1)),u(v(f),{value:o.value,"onUpdate:value":e[0]||(e[0]=p=>o.value=p),character:"😊"},null,8,["value"])]),l("div",null,[e[4]||(e[4]=l("p",{style:{"margin-bottom":"4px"}},"使用文字：",-1)),u(v(f),{value:d.value,"onUpdate:value":e[1]||(e[1]=p=>d.value=p),character:"好"},null,8,["value"])]),l("div",null,[e[5]||(e[5]=l("p",{style:{"margin-bottom":"4px"}},"使用字母：",-1)),u(v(f),{value:s.value,"onUpdate:value":e[2]||(e[2]=p=>s.value=p),character:"A"},null,8,["value"])])]))}}),q=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 4px;">使用表情：</p>
      <Rate v-model:value="value1" character="😊" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">使用文字：</p>
      <Rate v-model:value="value2" character="好" />
    </div>
    <div>
      <p style="margin-bottom: 4px;">使用字母：</p>
      <Rate v-model:value="value3" character="A" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value1 = ref(3)
const value2 = ref(4)
const value3 = ref(2)
<\/script>
`,J={style:{display:"flex","flex-direction":"column",gap:"16px"}},K=m({__name:"RateHalfStar",setup(a){const o=c(2.5),d=c(3.5);return(s,t)=>(b(),g("div",J,[u(v(f),{value:o.value,"onUpdate:value":t[0]||(t[0]=e=>o.value=e),"allow-half":""},null,8,["value"]),u(v(f),{value:d.value,"onUpdate:value":t[1]||(t[1]=e=>d.value=e),"allow-half":"",disabled:""},null,8,["value"]),l("p",null,"评分："+C(o.value),1)]))}}),O=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Rate v-model:value="value" allow-half />
    <Rate v-model:value="value2" allow-half disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(2.5)
const value2 = ref(3.5)
<\/script>
`,Q={style:{"margin-top":"8px"}},W=m({__name:"RateTooltip",setup(a){const o=c(0),d=["极差","差","一般","好","极好"],s=t=>{console.log("悬停：",d[t-1])};return(t,e)=>(b(),g("div",null,[u(v(f),{value:o.value,"onUpdate:value":e[0]||(e[0]=p=>o.value=p),tooltips:d,onHoverChange:s},null,8,["value"]),l("p",Q," 当前："+C(d[o.value-1]||"未评分"),1)]))}}),X=`<template>
  <div>
    <Rate
      v-model:value="value"
      :tooltips="tooltips"
      @hover-change="handleHoverChange"
    />
    <p style="margin-top: 8px;">
      当前：{{ tooltips[value - 1] || '未评分' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(0)
const tooltips = ['极差', '差', '一般', '好', '极好']

const handleHoverChange = (hoverValue: number) => {
  console.log('悬停：', tooltips[hoverValue - 1])
}
<\/script>
`,Y={class:"markdown-body"},et={__name:"rate",setup(a,{expose:o}){return o({frontmatter:{}}),(s,t)=>{const e=P("DemoBlock");return b(),g("div",Y,[t[0]||(t[0]=l("h1",{id:"rate-",tabindex:"-1"},"Rate 评分",-1)),t[1]||(t[1]=l("p",null,"评分组件。",-1)),t[2]||(t[2]=l("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=l("ul",null,[l("li",null,"对评价进行展示。"),l("li",null,"对事物进行快速的评级操作。")],-1)),t[4]||(t[4]=l("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=l("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=l("p",null,"最简单的用法。",-1)),u(e,{title:"基础用法",source:v(j)},{default:x(()=>[u(L)]),_:1},8,["source"]),t[7]||(t[7]=l("h3",{id:"-3",tabindex:"-1"},"半星",-1)),t[8]||(t[8]=l("p",null,[h("通过 "),l("code",null,"allow-half"),h(" 属性支持选择半星。")],-1)),u(e,{title:"半星",source:v(O)},{default:x(()=>[u(K)]),_:1},8,["source"]),t[9]||(t[9]=l("h3",{id:"-4",tabindex:"-1"},"自定义字符",-1)),t[10]||(t[10]=l("p",null,"可以将星星替换为其他字符，比如字母、数字、汉字等。",-1)),u(e,{title:"自定义字符",source:v(q)},{default:x(()=>[u(G)]),_:1},8,["source"]),t[11]||(t[11]=l("h3",{id:"-5",tabindex:"-1"},"提示信息",-1)),t[12]||(t[12]=l("p",null,[h("通过 "),l("code",null,"tooltips"),h(" 属性为每个星星设置提示信息。")],-1)),u(e,{title:"提示信息",source:v(X)},{default:x(()=>[u(W)]),_:1},8,["source"]),t[13]||(t[13]=T('<h2 id="api" tabindex="-1">API</h2><h3 id="rate-props" tabindex="-1">Rate Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>当前数，受控值</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>count</td><td>star 总数</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td>allowHalf</td><td>是否允许半选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>是否允许再次点击后清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>只读，无法进行交互</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>character</td><td>自定义字符</td><td><code>string | VNode</code></td><td><code>&#39;★&#39;</code></td></tr><tr><td>tooltips</td><td>自定义每项的提示信息</td><td><code>string[]</code></td><td>-</td></tr></tbody></table><h3 id="rate-events" tabindex="-1">Rate Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>change</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>hoverChange</td><td>鼠标经过时数值变化的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table>',5))])}}};export{et as default};
