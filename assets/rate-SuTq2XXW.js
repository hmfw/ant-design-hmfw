import{o as g,N as Q,L as q,E as p,Q as G,x as W,n as o,f as $,r as X,A as y,k as R,K as i,h as e,J as V,H as Y,R as w,m as c,l as Z}from"./index-C7r7ERgN.js";import{c as j}from"./cls-S9IiI6wd.js";import{T as E}from"./Tooltip-BYigmGN0.js";function K(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!X(a)}const f=g({name:"Rate",props:{value:Number,defaultValue:{type:Number,default:0},count:{type:Number,default:5},allowHalf:Boolean,allowClear:{type:Boolean,default:!0},disabled:Boolean,character:{type:[String,Function],default:"★"},tooltips:Array,size:String,keyboard:{type:Boolean,default:!0},autoFocus:Boolean},emits:["update:value","change","hoverChange","focus","blur","keydown"],setup(a,{slots:d,emit:r,expose:u}){const t=Q("rate"),n=q(),m=p(),x=p(a.defaultValue??a.value??0),h=p(null),A=p(!1),F=$(()=>a.value!==void 0),k=$(()=>F.value?a.value:x.value),B=$(()=>a.size??n.value.componentSize),z=$(()=>n.value.direction==="rtl");G(()=>a.value,l=>{l!==void 0&&(x.value=l)}),W(()=>{var l;a.autoFocus&&((l=m.value)==null||l.focus())}),u({focus:()=>{var l;return(l=m.value)==null?void 0:l.focus()},blur:()=>{var l;return(l=m.value)==null?void 0:l.blur()}});const C=l=>{if(a.disabled)return;let s=l;a.allowClear&&l===k.value&&(s=0),x.value=s,r("update:value",s),r("change",s)},H=(l,s)=>s?l+.5:l+1,N=(l,s)=>{C(H(l,s))},M=(l,s)=>{const v=H(l,s);h.value!==v&&(h.value=v,r("hoverChange",v))},L=()=>{h.value=null,r("hoverChange",void 0)},T=$(()=>h.value??k.value),P=l=>{const s=T.value,v=l+1,b=l+.5;return s>=v?"full":a.allowHalf&&s>=b?"half":"zero"},I=l=>{if(!a.keyboard||a.disabled)return;r("keydown",l);const{key:s}=l,v=k.value,b=a.allowHalf?.5:1,U=z.value?["ArrowLeft","ArrowUp"]:["ArrowRight","ArrowUp"],J=z.value?["ArrowRight","ArrowDown"]:["ArrowLeft","ArrowDown"];if(U.includes(s)){l.preventDefault();const S=Math.min(v+b,a.count);S!==v&&C(S)}else if(J.includes(s)){l.preventDefault();const S=Math.max(v-b,0);S!==v&&C(S)}else s==="Home"?(l.preventDefault(),v!==0&&C(0)):s==="End"&&(l.preventDefault(),v!==a.count&&C(a.count))},D=(l,s)=>{const v={index:l,value:k.value,isHalf:s};return typeof a.character=="function"?a.character(v):d.character?d.character(v):a.character},O=l=>{var U;const s=P(l),v=(U=a.tooltips)==null?void 0:U[l],b=o("li",{key:l,class:j(`${t}-star`,{[`${t}-star-full`]:s==="full",[`${t}-star-half`]:s==="half",[`${t}-star-zero`]:s==="zero"}),role:"radio","aria-checked":s!=="zero","aria-posinset":l+1,"aria-setsize":a.count},[a.allowHalf&&o("div",{class:`${t}-star-first`,onClick:()=>!a.disabled&&N(l,!0),onMousemove:()=>!a.disabled&&M(l,!0)},[D(l,!0)]),o("div",{class:`${t}-star-second`,onClick:()=>!a.disabled&&N(l,!1),onMousemove:()=>!a.disabled&&M(l,!1)},[D(l,!1)])]);return v?typeof v=="string"?o(E,{title:v},K(b)?b:{default:()=>[b]}):o(E,v,K(b)?b:{default:()=>[b]}):b};return()=>{const l=Array.from({length:a.count},(s,v)=>v);return o("ul",{ref:m,class:j(t,{[`${t}-disabled`]:a.disabled,[`${t}-small`]:B.value==="small",[`${t}-large`]:B.value==="large",[`${t}-rtl`]:z.value}),onMouseleave:L,onFocus:()=>{A.value=!0,r("focus")},onBlur:()=>{A.value=!1,r("blur")},onKeydown:I,tabindex:a.disabled?-1:0,role:"radiogroup",dir:z.value?"rtl":void 0,"aria-disabled":a.disabled||void 0},[l.map(O)])}}}),_={style:{display:"flex","flex-direction":"column",gap:"16px"}},tt=g({__name:"RateBasic",setup(a){const d=p(3),r=p(2.5);return(u,t)=>(y(),R("div",_,[o(i(f),{value:d.value,"onUpdate:value":t[0]||(t[0]=n=>d.value=n)},null,8,["value"]),o(i(f),{value:r.value,"onUpdate:value":t[1]||(t[1]=n=>r.value=n),disabled:""},null,8,["value"]),e("p",null,"评分："+V(d.value),1)]))}}),et=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
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
`,lt={style:{display:"flex","flex-direction":"column",gap:"16px"}},nt=g({__name:"RateCharacterFunction",setup(a){const d=p(3),r=p(2),u=({index:m})=>m+1,t=["😢","😟","😐","😊","😍"],n=({index:m})=>t[m];return(m,x)=>(y(),R("div",lt,[e("div",null,[x[2]||(x[2]=e("p",{style:{"margin-bottom":"4px"}},"使用数字索引：",-1)),o(i(f),{value:d.value,"onUpdate:value":x[0]||(x[0]=h=>d.value=h),character:u},null,8,["value"])]),e("div",null,[x[3]||(x[3]=e("p",{style:{"margin-bottom":"4px"}},"根据索引显示不同表情：",-1)),o(i(f),{value:r.value,"onUpdate:value":x[1]||(x[1]=h=>r.value=h),character:n},null,8,["value"])])]))}}),at=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">使用数字索引：</p>
      <Rate v-model:value="value1" :character="renderNumber" />
    </div>
    <div>
      <p style="margin-bottom: 4px">根据索引显示不同表情：</p>
      <Rate v-model:value="value2" :character="renderEmoji" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'
import type { RateCharacterRenderContext } from 'ant-design-hmfw'

const value1 = ref(3)
const value2 = ref(2)

const renderNumber = ({ index }: RateCharacterRenderContext) => index + 1

const emojis = ['😢', '😟', '😐', '😊', '😍']
const renderEmoji = ({ index }: RateCharacterRenderContext) => emojis[index]
<\/script>
`,ot={style:{display:"flex","flex-direction":"column",gap:"16px"}},dt=g({__name:"RateClear",setup(a){const d=p(3),r=p(3);return(u,t)=>(y(),R("div",ot,[e("div",null,[t[2]||(t[2]=e("p",{style:{"margin-bottom":"4px"}},"允许清除（默认）：",-1)),o(i(f),{value:d.value,"onUpdate:value":t[0]||(t[0]=n=>d.value=n)},null,8,["value"]),t[3]||(t[3]=e("p",{style:{"margin-top":"4px",color:"#666","font-size":"12px"}},"点击已选中的星星可清除评分",-1))]),e("div",null,[t[4]||(t[4]=e("p",{style:{"margin-bottom":"4px"}},"不允许清除：",-1)),o(i(f),{value:r.value,"onUpdate:value":t[1]||(t[1]=n=>r.value=n),"allow-clear":!1},null,8,["value"]),t[5]||(t[5]=e("p",{style:{"margin-top":"4px",color:"#666","font-size":"12px"}},"点击已选中的星星不会清除评分",-1))])]))}}),rt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">允许清除（默认）：</p>
      <Rate v-model:value="value1" />
      <p style="margin-top: 4px; color: #666; font-size: 12px">点击已选中的星星可清除评分</p>
    </div>
    <div>
      <p style="margin-bottom: 4px">不允许清除：</p>
      <Rate v-model:value="value2" :allow-clear="false" />
      <p style="margin-top: 4px; color: #666; font-size: 12px">点击已选中的星星不会清除评分</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value1 = ref(3)
const value2 = ref(3)
<\/script>
`,ut={style:{display:"flex","flex-direction":"column",gap:"16px"}},st=g({__name:"RateCustom",setup(a){const d=p(3),r=p(4),u=p(2);return(t,n)=>(y(),R("div",ut,[e("div",null,[n[3]||(n[3]=e("p",{style:{"margin-bottom":"4px"}},"使用表情：",-1)),o(i(f),{value:d.value,"onUpdate:value":n[0]||(n[0]=m=>d.value=m),character:"😊"},null,8,["value"])]),e("div",null,[n[4]||(n[4]=e("p",{style:{"margin-bottom":"4px"}},"使用文字：",-1)),o(i(f),{value:r.value,"onUpdate:value":n[1]||(n[1]=m=>r.value=m),character:"好"},null,8,["value"])]),e("div",null,[n[5]||(n[5]=e("p",{style:{"margin-bottom":"4px"}},"使用字母：",-1)),o(i(f),{value:u.value,"onUpdate:value":n[2]||(n[2]=m=>u.value=m),character:"A"},null,8,["value"])])]))}}),it=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">使用表情：</p>
      <Rate v-model:value="value1" character="😊" />
    </div>
    <div>
      <p style="margin-bottom: 4px">使用文字：</p>
      <Rate v-model:value="value2" character="好" />
    </div>
    <div>
      <p style="margin-bottom: 4px">使用字母：</p>
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
`,vt={style:{display:"flex","flex-direction":"column",gap:"16px"}},pt=g({__name:"RateHalfStar",setup(a){const d=p(2.5),r=p(3.5);return(u,t)=>(y(),R("div",vt,[o(i(f),{value:d.value,"onUpdate:value":t[0]||(t[0]=n=>d.value=n),"allow-half":""},null,8,["value"]),o(i(f),{value:r.value,"onUpdate:value":t[1]||(t[1]=n=>r.value=n),"allow-half":"",disabled:""},null,8,["value"]),e("p",null,"评分："+V(d.value),1)]))}}),mt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
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
`,ft={style:{display:"flex","flex-direction":"column",gap:"16px"}},ct={style:{"margin-top":"8px"}},xt=g({__name:"RateKeyboard",setup(a){const d=p(3),r=p(2);return(u,t)=>(y(),R("div",ft,[e("div",null,[t[2]||(t[2]=e("p",{style:{"margin-bottom":"4px"}},"使用键盘方向键调整评分（聚焦后按 ← → 或 ↑ ↓）：",-1)),o(i(f),{value:d.value,"onUpdate:value":t[0]||(t[0]=n=>d.value=n),keyboard:!0},null,8,["value"]),e("p",ct,"当前评分："+V(d.value),1)]),e("div",null,[t[3]||(t[3]=e("p",{style:{"margin-bottom":"4px"}},"禁用键盘操作：",-1)),o(i(f),{value:r.value,"onUpdate:value":t[1]||(t[1]=n=>r.value=n),keyboard:!1},null,8,["value"])])]))}}),bt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">使用键盘方向键调整评分（聚焦后按 ← → 或 ↑ ↓）：</p>
      <Rate v-model:value="value" :keyboard="true" />
      <p style="margin-top: 8px">当前评分：{{ value }}</p>
    </div>
    <div>
      <p style="margin-bottom: 4px">禁用键盘操作：</p>
      <Rate v-model:value="value2" :keyboard="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(3)
const value2 = ref(2)
<\/script>
`,gt={style:{display:"flex","flex-direction":"column",gap:"16px"}},yt=g({__name:"RateSize",setup(a){const d=p(3);return(r,u)=>(y(),R("div",gt,[e("div",null,[u[3]||(u[3]=e("p",{style:{"margin-bottom":"4px"}},"Large:",-1)),o(i(f),{value:d.value,"onUpdate:value":u[0]||(u[0]=t=>d.value=t),size:"large"},null,8,["value"])]),e("div",null,[u[4]||(u[4]=e("p",{style:{"margin-bottom":"4px"}},"Middle (default):",-1)),o(i(f),{value:d.value,"onUpdate:value":u[1]||(u[1]=t=>d.value=t)},null,8,["value"])]),e("div",null,[u[5]||(u[5]=e("p",{style:{"margin-bottom":"4px"}},"Small:",-1)),o(i(f),{value:d.value,"onUpdate:value":u[2]||(u[2]=t=>d.value=t),size:"small"},null,8,["value"])])]))}}),Rt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">Large:</p>
      <Rate v-model:value="value" size="large" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Middle (default):</p>
      <Rate v-model:value="value" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Small:</p>
      <Rate v-model:value="value" size="small" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(3)
<\/script>
`,ht={style:{"margin-top":"8px"}},wt=g({__name:"RateTooltip",setup(a){const d=p(0),r=["极差","差","一般","好","极好"],u=t=>{console.log("悬停：",r[t-1])};return(t,n)=>(y(),R("div",null,[o(i(f),{value:d.value,"onUpdate:value":n[0]||(n[0]=m=>d.value=m),tooltips:r,onHoverChange:u},null,8,["value"]),e("p",ht,"当前："+V(r[d.value-1]||"未评分"),1)]))}}),Ct=`<template>
  <div>
    <Rate v-model:value="value" :tooltips="tooltips" @hover-change="handleHoverChange" />
    <p style="margin-top: 8px">当前：{{ tooltips[value - 1] || '未评分' }}</p>
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
`,St={class:"markdown-body"},Ut={__name:"rate",setup(a,{expose:d}){return d({frontmatter:{}}),(u,t)=>{const n=Y("DemoBlock");return y(),R("div",St,[t[0]||(t[0]=e("h1",{id:"rate-",tabindex:"-1"},"Rate 评分",-1)),t[1]||(t[1]=e("p",null,"评分组件。",-1)),t[2]||(t[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=e("ul",null,[e("li",null,"对评价进行展示。"),e("li",null,"对事物进行快速的评级操作。")],-1)),t[4]||(t[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=e("p",null,"最简单的用法。",-1)),o(n,{title:"基础用法",source:i(et)},{default:w(()=>[o(tt)]),_:1},8,["source"]),t[7]||(t[7]=e("h3",{id:"-3",tabindex:"-1"},"半星",-1)),t[8]||(t[8]=e("p",null,[c("通过 "),e("code",null,"allow-half"),c(" 属性支持选择半星。")],-1)),o(n,{title:"半星",source:i(mt)},{default:w(()=>[o(pt)]),_:1},8,["source"]),t[9]||(t[9]=e("h3",{id:"-4",tabindex:"-1"},"自定义字符",-1)),t[10]||(t[10]=e("p",null,"可以将星星替换为其他字符，比如字母、数字、汉字等。",-1)),o(n,{title:"自定义字符",source:i(it)},{default:w(()=>[o(st)]),_:1},8,["source"]),t[11]||(t[11]=e("h3",{id:"-5",tabindex:"-1"},"提示信息",-1)),t[12]||(t[12]=e("p",null,[c("通过 "),e("code",null,"tooltips"),c(" 属性为每个星星设置提示信息。")],-1)),o(n,{title:"提示信息",source:i(Ct)},{default:w(()=>[o(wt)]),_:1},8,["source"]),t[13]||(t[13]=e("h3",{id:"-6",tabindex:"-1"},"尺寸",-1)),t[14]||(t[14]=e("p",null,[c("通过 "),e("code",null,"size"),c(" 属性设置评分组件的尺寸，支持 "),e("code",null,"small"),c("、"),e("code",null,"middle"),c("（默认）、"),e("code",null,"large"),c(" 三种尺寸。")],-1)),o(n,{title:"尺寸",source:i(Rt)},{default:w(()=>[o(yt)]),_:1},8,["source"]),t[15]||(t[15]=e("h3",{id:"-7",tabindex:"-1"},"清除评分",-1)),t[16]||(t[16]=e("p",null,[c("通过 "),e("code",null,"allow-clear"),c(" 属性控制是否允许清除评分。")],-1)),o(n,{title:"清除评分",source:i(rt)},{default:w(()=>[o(dt)]),_:1},8,["source"]),t[17]||(t[17]=e("h3",{id:"-8",tabindex:"-1"},"自定义字符函数",-1)),t[18]||(t[18]=e("p",null,[e("code",null,"character"),c(" 属性支持传入函数，可以根据索引动态渲染不同的字符。")],-1)),o(n,{title:"自定义字符函数",source:i(at)},{default:w(()=>[o(nt)]),_:1},8,["source"]),t[19]||(t[19]=e("h3",{id:"-9",tabindex:"-1"},"键盘操作",-1)),t[20]||(t[20]=e("p",null,[c("通过 "),e("code",null,"keyboard"),c(" 属性控制是否支持键盘操作（方向键调整评分）。")],-1)),o(n,{title:"键盘操作",source:i(bt)},{default:w(()=>[o(xt)]),_:1},8,["source"]),t[21]||(t[21]=Z('<h2 id="api" tabindex="-1">API</h2><h3 id="rate-props" tabindex="-1">Rate Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>当前数，受控值</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>count</td><td>star 总数</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td>allowHalf</td><td>是否允许半选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>是否允许再次点击后清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>只读，无法进行交互</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>character</td><td>自定义字符</td><td><code>string | ((ctx: RateCharacterRenderContext) =&gt; any)</code></td><td><code>&#39;★&#39;</code></td></tr><tr><td>tooltips</td><td>自定义每项的提示信息</td><td><code>(string | TooltipProps)[]</code></td><td>-</td></tr><tr><td>size</td><td>组件尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>keyboard</td><td>是否支持键盘操作</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="rate-events" tabindex="-1">Rate Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>change</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>hoverChange</td><td>鼠标经过时数值变化的回调</td><td><code>(value: number | undefined) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>keydown</td><td>键盘按下时的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr></tbody></table><h3 id="rate-methods" tabindex="-1">Rate Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table><h3 id="ratecharacterrendercontext" tabindex="-1">RateCharacterRenderContext</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>index</td><td>当前星星的索引（从 0 开始）</td><td><code>number</code></td></tr><tr><td>value</td><td>当前评分值</td><td><code>number</code></td></tr></tbody></table>',9))])}}};export{Ut as default};
