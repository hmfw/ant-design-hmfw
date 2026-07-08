import{d as w,u as an,x as sn,r as k,m as en,k as on,c as o,a as z,B as ln,o as R,b as q,e as d,f as t,A,_ as pn,h as un,w as S,g as b,i as cn}from"./index-Da5IF3ma.js";import{c as B}from"./cls-S9IiI6wd.js";import{T as I}from"./Tooltip-DjQo5e4K.js";import"./Trigger-0PfXbYIf.js";function G(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!ln(a)}const m=w({name:"Rate",props:{value:Number,defaultValue:{type:Number,default:0},count:{type:Number,default:5},allowHalf:Boolean,allowClear:{type:Boolean,default:!0},disabled:Boolean,character:{type:[String,Function],default:"★"},tooltips:Array,size:String,keyboard:{type:Boolean,default:!0},autoFocus:Boolean,classNames:Object,styles:Object},emits:["update:value","change","hoverChange","focus","blur","keydown"],setup(a,{slots:l,emit:u,expose:i}){const n=an("rate"),s=sn(),g=k(),c=k([]),y=k(a.defaultValue??a.value??0),C=k(null),F=k(null),E=k(!1),W=z(()=>a.value!==void 0),U=z(()=>W.value?a.value:y.value),T=z(()=>a.size??s.value.componentSize),V=z(()=>s.value.direction==="rtl");en(()=>a.value,e=>{e!==void 0&&(y.value=e)}),on(()=>{var e;a.autoFocus&&((e=g.value)==null||e.focus())}),i({focus:()=>{var e;return(e=g.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=g.value)==null?void 0:e.blur()}});const J=e=>r=>{r&&(c.value[e]=r)},D=(e,r)=>{const p=V.value;let v=e+1;if(a.allowHalf){const x=c.value[e];if(x){const h=x.getBoundingClientRect().left+window.scrollX,N=x.clientWidth,$=r-h;(p&&$>N/2||!p&&$<N/2)&&(v-=.5)}}return v},j=e=>{a.disabled||(y.value=e,u("update:value",e),u("change",e))},Q=(e,r)=>{if(a.disabled)return;const p=D(r,e.pageX);let v=!1;a.allowClear&&(v=p===U.value),C.value=null,u("hoverChange",void 0),j(v?0:p),F.value=v?p:null},Y=(e,r)=>{if(a.disabled)return;const p=D(r,e.pageX);p!==F.value&&(C.value!==p&&(C.value=p,u("hoverChange",p)),F.value=null)},Z=()=>{a.disabled||(C.value=null,F.value=null,u("hoverChange",void 0))},M=z(()=>C.value??U.value),_=e=>{const r=M.value,p=e+1,v=e+.5,x=E.value&&(r===0?e===0:p===r);let f="zero";return r>=p?f="full":a.allowHalf&&r>=v&&(f="half"),{status:f,isFocused:x}},nn=e=>{if(!a.keyboard||a.disabled)return;u("keydown",e);const{key:r}=e,p=U.value,v=a.allowHalf?.5:1,x=V.value;let f=!1,h=p;r==="ArrowRight"&&!x&&p<a.count?(h=p+v,f=!0):r==="ArrowLeft"&&!x&&p>0||r==="ArrowRight"&&x&&p>0?(h=p-v,f=!0):r==="ArrowLeft"&&x&&p<a.count||r==="ArrowUp"&&p<a.count?(h=p+v,f=!0):r==="ArrowDown"&&p>0&&(h=p-v,f=!0),f&&h!==p&&(e.preventDefault(),j(h))},P=(e,r)=>{const p={index:e,value:U.value,isHalf:r};return typeof a.character=="function"?a.character(p):l.character?l.character(p):a.character},tn=e=>{var h,N,$,L,K,O,X;const{status:r,isFocused:p}=_(e),v=(h=a.tooltips)==null?void 0:h[e],x=r==="half"||r==="full",f=o("li",{ref:J(e),key:e,class:B(`${n}-star`,{[`${n}-star-full`]:r==="full",[`${n}-star-half`]:r==="half",[`${n}-star-zero`]:r==="zero",[`${n}-star-active`]:x,[`${n}-star-focused`]:p},(N=a.classNames)==null?void 0:N.star),style:($=a.styles)==null?void 0:$.star},[o("div",{onClick:H=>Q(H,e),onMousemove:H=>Y(H,e),role:"radio","aria-checked":M.value>e?"true":"false","aria-posinset":e+1,"aria-setsize":a.count,tabindex:a.disabled?-1:0},[o("div",{class:B(`${n}-star-first`,(L=a.classNames)==null?void 0:L.starFirst),style:(K=a.styles)==null?void 0:K.starFirst},[P(e,!0)]),o("div",{class:B(`${n}-star-second`,(O=a.classNames)==null?void 0:O.starSecond),style:(X=a.styles)==null?void 0:X.starSecond},[P(e,!1)])])]);return v?typeof v=="string"?o(I,{title:v},G(f)?f:{default:()=>[f]}):o(I,v,G(f)?f:{default:()=>[f]}):f};return()=>{var r,p;const e=Array.from({length:a.count},(v,x)=>x);return o("ul",{ref:g,class:B(n,{[`${n}-disabled`]:a.disabled,[`${n}-small`]:T.value==="small",[`${n}-large`]:T.value==="large",[`${n}-rtl`]:V.value},(r=a.classNames)==null?void 0:r.root),style:(p=a.styles)==null?void 0:p.root,onMouseleave:Z,onFocus:()=>{E.value=!0,u("focus")},onBlur:()=>{E.value=!1,u("blur")},onKeydown:nn,tabindex:a.disabled?-1:0,role:"radiogroup",dir:V.value?"rtl":void 0,"aria-disabled":a.disabled||void 0},[e.map(tn)])}}}),rn={style:{display:"flex","flex-direction":"column",gap:"16px"}},dn=w({__name:"RateBasic",setup(a){const l=k(3),u=k(2.5);return(i,n)=>(R(),q("div",rn,[o(d(m),{value:l.value,"onUpdate:value":n[0]||(n[0]=s=>l.value=s)},null,8,["value"]),o(d(m),{value:u.value,"onUpdate:value":n[1]||(n[1]=s=>u.value=s),disabled:""},null,8,["value"]),t("p",null,"评分："+A(l.value),1)]))}}),kn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Rate v-model:value="value" />
    <Rate v-model:value="value2" disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(3)
const value2 = ref(2.5)
<\/script>
`,vn={style:{display:"flex","flex-direction":"column",gap:"16px"}},mn=w({__name:"RateCharacterFunction",setup(a){const l=k(3),u=k(2),i=({index:g})=>g+1,n=["😢","😟","😐","😊","😍"],s=({index:g})=>n[g];return(g,c)=>(R(),q("div",vn,[t("div",null,[c[2]||(c[2]=t("p",{style:{"margin-bottom":"4px"}},"使用数字索引：",-1)),o(d(m),{value:l.value,"onUpdate:value":c[0]||(c[0]=y=>l.value=y),character:i},null,8,["value"])]),t("div",null,[c[3]||(c[3]=t("p",{style:{"margin-bottom":"4px"}},"根据索引显示不同表情：",-1)),o(d(m),{value:u.value,"onUpdate:value":c[1]||(c[1]=y=>u.value=y),character:s},null,8,["value"])])]))}}),fn=`<template>
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
import { Rate } from '@hmfw/ant-design'
import type { RateCharacterRenderContext } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(2)

const renderNumber = ({ index }: RateCharacterRenderContext) => index + 1

const emojis = ['😢', '😟', '😐', '😊', '😍']
const renderEmoji = ({ index }: RateCharacterRenderContext) => emojis[index]
<\/script>
`,gn={style:{display:"flex","flex-direction":"column",gap:"24px"}},yn=w({__name:"RateClassNames",setup(a){const l=k(3),u=k(2.5),i=k(4),n=k(3),s=k(4);return(g,c)=>(R(),q("div",gn,[t("div",null,[c[5]||(c[5]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义星星颜色（渐变效果）：",-1)),o(d(m),{value:l.value,"onUpdate:value":c[0]||(c[0]=y=>l.value=y),"class-names":{star:"gradient-star"}},null,8,["value"])]),t("div",null,[c[6]||(c[6]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"半星前后部分不同颜色：",-1)),o(d(m),{value:u.value,"onUpdate:value":c[1]||(c[1]=y=>u.value=y),"allow-half":"","class-names":{starFirst:"star-first-custom",starSecond:"star-second-custom"}},null,8,["value"])]),t("div",null,[c[7]||(c[7]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"容器背景 + 星星放大效果：",-1)),o(d(m),{value:i.value,"onUpdate:value":c[2]||(c[2]=y=>i.value=y),"class-names":{root:"custom-root",star:"custom-star"}},null,8,["value"])]),t("div",null,[c[8]||(c[8]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式控制尺寸：",-1)),o(d(m),{value:n.value,"onUpdate:value":c[3]||(c[3]=y=>n.value=y),styles:{root:{gap:"12px"},star:{fontSize:"32px"}}},null,8,["value"])]),t("div",null,[c[9]||(c[9]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"高亮激活星星（阴影 + 缩放）：",-1)),o(d(m),{value:s.value,"onUpdate:value":c[4]||(c[4]=y=>s.value=y),"class-names":{star:"highlight-star"}},null,8,["value"])])]))}}),bn=pn(yn,[["__scopeId","data-v-3902ef82"]]),xn=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义星星颜色 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义星星颜色（渐变效果）：</div>
      <Rate v-model:value="value1" :class-names="{ star: 'gradient-star' }" />
    </div>

    <!-- 场景 2：半星样式定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">半星前后部分不同颜色：</div>
      <Rate
        v-model:value="value2"
        allow-half
        :class-names="{
          starFirst: 'star-first-custom',
          starSecond: 'star-second-custom',
        }"
      />
    </div>

    <!-- 场景 3：容器与星星组合定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">容器背景 + 星星放大效果：</div>
      <Rate
        v-model:value="value3"
        :class-names="{
          root: 'custom-root',
          star: 'custom-star',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式控制尺寸：</div>
      <Rate
        v-model:value="value4"
        :styles="{
          root: { gap: '12px' },
          star: { fontSize: '32px' },
        }"
      />
    </div>

    <!-- 场景 5：组合样式 - 高亮激活星星 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">高亮激活星星（阴影 + 缩放）：</div>
      <Rate v-model:value="value5" :class-names="{ star: 'highlight-star' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(2.5)
const value3 = ref(4)
const value4 = ref(3)
const value5 = ref(4)
<\/script>

<style scoped>
/* 场景 1：渐变星星 */
:deep(.gradient-star) {
  color: transparent;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s;
}

:deep(.gradient-star:hover) {
  transform: scale(1.15);
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.6));
}

/* 场景 2：半星不同颜色 */
:deep(.star-first-custom) {
  color: #ff6b6b;
}

:deep(.star-second-custom) {
  color: #ffd93d;
}

/* 场景 3：容器与星星组合 */
:deep(.custom-root) {
  padding: 12px 16px;
  background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
  border-radius: 8px;
  border: 2px solid #dee2e6;
}

:deep(.custom-star) {
  transition: all 0.3s;
}

:deep(.custom-star:hover) {
  transform: scale(1.2) rotate(15deg);
}

/* 场景 5：高亮激活星星 */
:deep(.highlight-star.hmfw-rate-star-full) {
  color: #faad14;
  filter: drop-shadow(0 0 8px rgba(250, 173, 20, 0.8));
  transform: scale(1.1);
  transition: all 0.3s;
}

:deep(.highlight-star.hmfw-rate-star-half .hmfw-rate-star-first) {
  color: #faad14;
  filter: drop-shadow(0 0 8px rgba(250, 173, 20, 0.8));
}

:deep(.highlight-star:hover) {
  transform: scale(1.2);
}
</style>
`,hn={style:{display:"flex","flex-direction":"column",gap:"16px"}},wn=w({__name:"RateClear",setup(a){const l=k(3),u=k(3);return(i,n)=>(R(),q("div",hn,[t("div",null,[n[2]||(n[2]=t("p",{style:{"margin-bottom":"4px"}},"允许清除（默认）：",-1)),o(d(m),{value:l.value,"onUpdate:value":n[0]||(n[0]=s=>l.value=s)},null,8,["value"]),n[3]||(n[3]=t("p",{style:{"margin-top":"4px",color:"#666","font-size":"12px"}},"点击已选中的星星可清除评分",-1))]),t("div",null,[n[4]||(n[4]=t("p",{style:{"margin-bottom":"4px"}},"不允许清除：",-1)),o(d(m),{value:u.value,"onUpdate:value":n[1]||(n[1]=s=>u.value=s),"allow-clear":!1},null,8,["value"]),n[5]||(n[5]=t("p",{style:{"margin-top":"4px",color:"#666","font-size":"12px"}},"点击已选中的星星不会清除评分",-1))])]))}}),Rn=`<template>
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
import { Rate } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(3)
<\/script>
`,qn={style:{display:"flex","flex-direction":"column",gap:"16px"}},Sn=w({__name:"RateCustom",setup(a){const l=k(3),u=k(4),i=k(2);return(n,s)=>(R(),q("div",qn,[t("div",null,[s[3]||(s[3]=t("p",{style:{"margin-bottom":"4px"}},"使用表情：",-1)),o(d(m),{value:l.value,"onUpdate:value":s[0]||(s[0]=g=>l.value=g),character:"😊"},null,8,["value"])]),t("div",null,[s[4]||(s[4]=t("p",{style:{"margin-bottom":"4px"}},"使用文字：",-1)),o(d(m),{value:u.value,"onUpdate:value":s[1]||(s[1]=g=>u.value=g),character:"好"},null,8,["value"])]),t("div",null,[s[5]||(s[5]=t("p",{style:{"margin-bottom":"4px"}},"使用字母：",-1)),o(d(m),{value:i.value,"onUpdate:value":s[2]||(s[2]=g=>i.value=g),character:"A"},null,8,["value"])])]))}}),Cn=`<template>
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
import { Rate } from '@hmfw/ant-design'

const value1 = ref(3)
const value2 = ref(4)
const value3 = ref(2)
<\/script>
`,Nn={style:{display:"flex","flex-direction":"column",gap:"16px"}},$n=w({__name:"RateHalfStar",setup(a){const l=k(2.5),u=k(3.5);return(i,n)=>(R(),q("div",Nn,[o(d(m),{value:l.value,"onUpdate:value":n[0]||(n[0]=s=>l.value=s),"allow-half":""},null,8,["value"]),o(d(m),{value:u.value,"onUpdate:value":n[1]||(n[1]=s=>u.value=s),"allow-half":"",disabled:""},null,8,["value"]),t("p",null,"评分："+A(l.value),1)]))}}),zn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Rate v-model:value="value" allow-half />
    <Rate v-model:value="value2" allow-half disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(2.5)
const value2 = ref(3.5)
<\/script>
`,Fn={style:{display:"flex","flex-direction":"column",gap:"16px"}},Un={style:{"margin-top":"8px"}},Vn=w({__name:"RateKeyboard",setup(a){const l=k(3),u=k(2);return(i,n)=>(R(),q("div",Fn,[t("div",null,[n[2]||(n[2]=t("p",{style:{"margin-bottom":"4px"}},"使用键盘方向键调整评分（聚焦后按 ← → 或 ↑ ↓）：",-1)),o(d(m),{value:l.value,"onUpdate:value":n[0]||(n[0]=s=>l.value=s),keyboard:!0},null,8,["value"]),t("p",Un,"当前评分："+A(l.value),1)]),t("div",null,[n[3]||(n[3]=t("p",{style:{"margin-bottom":"4px"}},"禁用键盘操作：",-1)),o(d(m),{value:u.value,"onUpdate:value":n[1]||(n[1]=s=>u.value=s),keyboard:!1},null,8,["value"])])]))}}),Bn=`<template>
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
import { Rate } from '@hmfw/ant-design'

const value = ref(3)
const value2 = ref(2)
<\/script>
`,An={style:{display:"flex","flex-direction":"column",gap:"16px"}},En=w({__name:"RateSize",setup(a){const l=k(3);return(u,i)=>(R(),q("div",An,[t("div",null,[i[3]||(i[3]=t("p",{style:{"margin-bottom":"4px"}},"Large:",-1)),o(d(m),{value:l.value,"onUpdate:value":i[0]||(i[0]=n=>l.value=n),size:"large"},null,8,["value"])]),t("div",null,[i[4]||(i[4]=t("p",{style:{"margin-bottom":"4px"}},"Middle (default):",-1)),o(d(m),{value:l.value,"onUpdate:value":i[1]||(i[1]=n=>l.value=n)},null,8,["value"])]),t("div",null,[i[5]||(i[5]=t("p",{style:{"margin-bottom":"4px"}},"Small:",-1)),o(d(m),{value:l.value,"onUpdate:value":i[2]||(i[2]=n=>l.value=n),size:"small"},null,8,["value"])])]))}}),Hn=`<template>
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
import { Rate } from '@hmfw/ant-design'

const value = ref(3)
<\/script>
`,Tn={style:{"margin-top":"8px"}},Dn=w({__name:"RateTooltip",setup(a){const l=k(0),u=["极差","差","一般","好","极好"],i=n=>{console.log("悬停：",u[n-1])};return(n,s)=>(R(),q("div",null,[o(d(m),{value:l.value,"onUpdate:value":s[0]||(s[0]=g=>l.value=g),tooltips:u,onHoverChange:i},null,8,["value"]),t("p",Tn,"当前："+A(u[l.value-1]||"未评分"),1)]))}}),jn=`<template>
  <div>
    <Rate v-model:value="value" :tooltips="tooltips" @hover-change="handleHoverChange" />
    <p style="margin-top: 8px">当前：{{ tooltips[value - 1] || '未评分' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(0)
const tooltips = ['极差', '差', '一般', '好', '极好']

const handleHoverChange = (hoverValue: number) => {
  console.log('悬停：', tooltips[hoverValue - 1])
}
<\/script>
`,Mn={class:"markdown-body"},Xn={__name:"rate",setup(a,{expose:l}){return l({frontmatter:{}}),(i,n)=>{const s=un("DemoBlock");return R(),q("div",Mn,[n[0]||(n[0]=t("h1",{id:"rate-评分",tabindex:"-1"},"Rate 评分",-1)),n[1]||(n[1]=t("p",null,"评分组件。",-1)),n[2]||(n[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("ul",null,[t("li",null,"对评价进行展示。"),t("li",null,"对事物进行快速的评级操作。")],-1)),n[4]||(n[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=t("p",null,"最简单的用法。",-1)),o(s,{title:"基础用法",source:d(kn)},{default:S(()=>[o(dn)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"半星",tabindex:"-1"},"半星",-1)),n[8]||(n[8]=t("p",null,[b("通过 "),t("code",null,"allow-half"),b(" 属性支持选择半星。")],-1)),o(s,{title:"半星",source:d(zn)},{default:S(()=>[o($n)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"自定义字符",tabindex:"-1"},"自定义字符",-1)),n[10]||(n[10]=t("p",null,"可以将星星替换为其他字符，比如字母、数字、汉字等。",-1)),o(s,{title:"自定义字符",source:d(Cn)},{default:S(()=>[o(Sn)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"提示信息",tabindex:"-1"},"提示信息",-1)),n[12]||(n[12]=t("p",null,[b("通过 "),t("code",null,"tooltips"),b(" 属性为每个星星设置提示信息。")],-1)),o(s,{title:"提示信息",source:d(jn)},{default:S(()=>[o(Dn)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"尺寸",tabindex:"-1"},"尺寸",-1)),n[14]||(n[14]=t("p",null,[b("通过 "),t("code",null,"size"),b(" 属性设置评分组件的尺寸，支持 "),t("code",null,"small"),b("、"),t("code",null,"middle"),b("（默认）、"),t("code",null,"large"),b(" 三种尺寸。")],-1)),o(s,{title:"尺寸",source:d(Hn)},{default:S(()=>[o(En)]),_:1},8,["source"]),n[15]||(n[15]=t("h3",{id:"清除评分",tabindex:"-1"},"清除评分",-1)),n[16]||(n[16]=t("p",null,[b("通过 "),t("code",null,"allow-clear"),b(" 属性控制是否允许清除评分。")],-1)),o(s,{title:"清除评分",source:d(Rn)},{default:S(()=>[o(wn)]),_:1},8,["source"]),n[17]||(n[17]=t("h3",{id:"自定义字符函数",tabindex:"-1"},"自定义字符函数",-1)),n[18]||(n[18]=t("p",null,[t("code",null,"character"),b(" 属性支持传入函数，可以根据索引动态渲染不同的字符。")],-1)),o(s,{title:"自定义字符函数",source:d(fn)},{default:S(()=>[o(mn)]),_:1},8,["source"]),n[19]||(n[19]=t("h3",{id:"键盘操作",tabindex:"-1"},"键盘操作",-1)),n[20]||(n[20]=t("p",null,[b("通过 "),t("code",null,"keyboard"),b(" 属性控制是否支持键盘操作（方向键调整评分）。")],-1)),o(s,{title:"键盘操作",source:d(Bn)},{default:S(()=>[o(Vn)]),_:1},8,["source"]),n[21]||(n[21]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[22]||(n[22]=t("p",null,[b("通过 "),t("code",null,"classNames"),b(" / "),t("code",null,"styles"),b(" 对各子元素做细粒度样式控制。")],-1)),o(s,{title:"语义化 className 与 style",source:d(xn)},{default:S(()=>[o(bn)]),_:1},8,["source"]),n[23]||(n[23]=cn(`<h2 id="api" tabindex="-1">API</h2><h3 id="rate-props" tabindex="-1">Rate Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>当前数，受控值</td><td><code>number</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认值</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>count</td><td>star 总数</td><td><code>number</code></td><td><code>5</code></td></tr><tr><td>allowHalf</td><td>是否允许半选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>allowClear</td><td>是否允许再次点击后清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>只读，无法进行交互</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>character</td><td>自定义字符</td><td><code>string | ((ctx: RateCharacterRenderContext) =&gt; any)</code></td><td><code>&#39;★&#39;</code></td></tr><tr><td>tooltips</td><td>自定义每项的提示信息</td><td><code>(string | TooltipProps)[]</code></td><td>-</td></tr><tr><td>size</td><td>组件尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>keyboard</td><td>是否支持键盘操作</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>RateClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>RateStyles</code></td><td>-</td></tr></tbody></table><h3 id="rate-events" tabindex="-1">Rate Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>change</td><td>选择时的回调</td><td><code>(value: number) =&gt; void</code></td></tr><tr><td>hoverChange</td><td>鼠标经过时数值变化的回调</td><td><code>(value: number | undefined) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>keydown</td><td>键盘按下时的回调</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr></tbody></table><h3 id="rate-methods" tabindex="-1">Rate Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table><h3 id="ratecharacterrendercontext" tabindex="-1">RateCharacterRenderContext</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>index</td><td>当前星星的索引（从 0 开始）</td><td><code>number</code></td></tr><tr><td>value</td><td>当前评分值</td><td><code>number</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对评分组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">RateClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器 ul.hmfw-rate</span>
  star<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 星星项 li.hmfw-rate-star</span>
  starFirst<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 半星前半部分 div.hmfw-rate-star-first</span>
  starSecond<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 星星后半部分 div.hmfw-rate-star-second</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">RateStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  star<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  starFirst<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  starSecond<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 基础评分 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate-star hmfw-rate-star-full<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.star / styles.star 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate-star-second<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.starSecond / styles.starSecond 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>★<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 其他星星... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 半星模式 (allowHalf) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate-star hmfw-rate-star-half<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.star / styles.star 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate-star-first<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.starFirst / styles.starFirst 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>★<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-rate-star-second<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.starSecond / styles.starSecond 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>★<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 其他星星... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义星星颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ star: &#39;gradient-star&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 半星不同颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">allow-half</span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      starFirst: &#39;star-first-custom&#39;,
      starSecond: &#39;star-second-custom&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 容器与星星组合定制 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;custom-root&#39;,
      star: &#39;custom-star&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.gradient-star)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.gradient-star:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>0 0 8px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.star-first-custom)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff6b6b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.star-second-custom)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffd93d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-root)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px 16px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #f6f8fb 0%<span class="token punctuation">,</span> #e9ecef 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-star:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>15deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制尺寸 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { gap: &#39;12px&#39; },
      star: { fontSize: &#39;32px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      star: { color: &#39;#ff4d4f&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 半星样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rating<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">allow-half</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      starFirst: { color: &#39;#ff6b6b&#39; },
      starSecond: { color: &#39;#ffd93d&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.star</code> 会应用到所有星星项，包括已选中、半选、未选中状态</li><li>在 <code>allowHalf</code> 模式下，每个星星包含 <code>starFirst</code> 和 <code>starSecond</code> 两个部分</li><li><code>starFirst</code> 仅在 <code>allowHalf</code> 为 <code>true</code> 时渲染，用于实现半星效果</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-rate-disabled</code>）合并</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Rate 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><h3 id="组件专有-token" tabindex="-1">组件专有 Token</h3><p>Rate 组件提供以下专有 CSS 变量，可直接覆盖以定制样式：</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-rate-star-color</code></td><td>星星激活颜色</td><td><code>#fadb14</code></td></tr><tr><td><code>--hmfw-rate-star-bg</code></td><td>星星背景色</td><td><code>rgba(0, 0, 0, 0.06)</code></td></tr><tr><td><code>--hmfw-rate-star-size</code></td><td>星星尺寸（默认）</td><td><code>20px</code> (controlHeight × 0.625)</td></tr><tr><td><code>--hmfw-rate-star-size-sm</code></td><td>星星尺寸（小）</td><td><code>15px</code> (controlHeightSM × 0.625)</td></tr><tr><td><code>--hmfw-rate-star-size-lg</code></td><td>星星尺寸（大）</td><td><code>25px</code> (controlHeightLG × 0.625)</td></tr><tr><td><code>--hmfw-rate-star-hover-scale</code></td><td>悬浮时缩放比例</td><td><code>1.1</code></td></tr></tbody></table><p><strong>使用示例</strong>：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 通过内联样式覆盖 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span>
    <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      &#39;--hmfw-rate-star-color&#39;: &#39;#ff6b00&#39;,
      &#39;--hmfw-rate-star-size&#39;: &#39;24px&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 通过 CSS 类覆盖 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Rate</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom-rate<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">.custom-rate</span> <span class="token punctuation">{</span>
  <span class="token property">--hmfw-rate-star-color</span><span class="token punctuation">:</span> #52c41a<span class="token punctuation">;</span>
  <span class="token property">--hmfw-rate-star-hover-scale</span><span class="token punctuation">:</span> 1.2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="全局-token" tabindex="-1">全局 Token</h3><p>Rate 组件还依赖以下全局 Design Token：</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-fill-content</code></td><td>填充内容色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-control-height</code></td><td>标准控件高度</td><td><code>32px</code></td></tr><tr><td><code>--hmfw-control-height-lg</code></td><td>大号控件高度</td><td><code>40px</code></td></tr><tr><td><code>--hmfw-control-height-sm</code></td><td>小号控件高度</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-margin-xs</code></td><td>超小间距</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>中速动画时长</td><td><code>0.2s</code></td></tr></tbody></table>`,34))])}}};export{Xn as default};
