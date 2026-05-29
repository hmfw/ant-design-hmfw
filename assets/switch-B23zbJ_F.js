import{k as p,I as b,z as h,L as w,j as c,c as g,w as k,g as f,d,G as o,E as x,B as S,M as v,i as C,h as $}from"./index-BNHhPN23.js";import{c as _}from"./cls-S9IiI6wd.js";const u=p({name:"Switch",props:{checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:Boolean,loading:Boolean,size:{type:String,default:"default"},checkedChildren:String,unCheckedChildren:String},emits:["update:checked","change","click"],setup(i,{slots:n,emit:l}){const a=b("switch"),e=h(i.defaultChecked??!1);w(()=>i.checked,r=>{r!==void 0&&(e.value=r)});const t=g(()=>i.checked!==void 0?i.checked:e.value),s=g(()=>i.disabled||i.loading),y=()=>{if(s.value)return;const r=!t.value;e.value=r,l("update:checked",r),l("change",r),l("click",r)};return()=>{var r,m;return c("button",{type:"button",role:"switch","aria-checked":t.value,class:_(a,{[`${a}-checked`]:t.value,[`${a}-disabled`]:s.value,[`${a}-loading`]:i.loading,[`${a}-small`]:i.size==="small"}),onClick:y,disabled:s.value},[c("span",{class:`${a}-handle`},[i.loading&&c("span",{class:`${a}-loading-icon`},null)]),c("span",{class:`${a}-inner`},[t.value?((r=n.checkedChildren)==null?void 0:r.call(n))??i.checkedChildren:((m=n.unCheckedChildren)==null?void 0:m.call(n))??i.unCheckedChildren])])}}}),B={style:{display:"flex","flex-direction":"column",gap:"16px"}},z={style:{display:"flex","align-items":"center",gap:"8px"}},N={style:{display:"flex","align-items":"center",gap:"8px"}},U=p({__name:"SwitchBasic",setup(i){const n=h(!1),l=h(!0);return(a,e)=>(k(),f("div",B,[d("div",z,[c(o(u),{checked:n.value,"onUpdate:checked":e[0]||(e[0]=t=>n.value=t)},null,8,["checked"]),d("span",null,x(n.value?"开启":"关闭"),1)]),d("div",N,[c(o(u),{checked:l.value,"onUpdate:checked":e[1]||(e[1]=t=>l.value=t),disabled:""},null,8,["checked"]),e[2]||(e[2]=d("span",null,"禁用状态",-1))])]))}}),V=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <Switch v-model:checked="checked" />
      <span>{{ checked ? '开启' : '关闭' }}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Switch v-model:checked="checked2" disabled />
      <span>禁用状态</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'ant-design-hmfw'

const checked = ref(false)
const checked2 = ref(true)
<\/script>
`,E={style:{display:"flex","flex-direction":"column",gap:"16px"}},L=p({__name:"SwitchLabel",setup(i){const n=h(!0),l=h(!1),a=h(!0);return(e,t)=>(k(),f("div",E,[c(o(u),{checked:n.value,"onUpdate:checked":t[0]||(t[0]=s=>n.value=s),"checked-children":"开","un-checked-children":"关"},null,8,["checked"]),c(o(u),{checked:l.value,"onUpdate:checked":t[1]||(t[1]=s=>l.value=s),"checked-children":"✓","un-checked-children":"✗"},null,8,["checked"]),c(o(u),{checked:a.value,"onUpdate:checked":t[2]||(t[2]=s=>a.value=s),"checked-children":"ON","un-checked-children":"OFF"},null,8,["checked"])]))}}),D=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Switch
      v-model:checked="checked1"
      checked-children="开"
      un-checked-children="关"
    />
    <Switch
      v-model:checked="checked2"
      checked-children="✓"
      un-checked-children="✗"
    />
    <Switch
      v-model:checked="checked3"
      checked-children="ON"
      un-checked-children="OFF"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'ant-design-hmfw'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
<\/script>
`,F={style:{display:"flex","flex-direction":"column",gap:"16px"}},O={style:{display:"flex",gap:"8px"}},M={style:{display:"flex","align-items":"center",gap:"8px"}},P=p({__name:"SwitchLoading",setup(i){const n=h(!1),l=h(!1),a=e=>{l.value=!0,setTimeout(()=>{l.value=!1,n.value=e},1500)};return(e,t)=>(k(),f("div",F,[d("div",O,[c(o(u),{checked:!0,loading:""}),c(o(u),{checked:!1,loading:""})]),d("div",M,[c(o(u),{checked:n.value,"onUpdate:checked":t[0]||(t[0]=s=>n.value=s),loading:l.value,onChange:a},null,8,["checked","loading"]),d("span",null,x(l.value?"切换中...":n.value?"已开启":"已关闭"),1)])]))}}),T=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; gap: 8px;">
      <Switch :checked="true" loading />
      <Switch :checked="false" loading />
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <Switch
        v-model:checked="checked"
        :loading="loading"
        @change="handleChange"
      />
      <span>{{ loading ? '切换中...' : (checked ? '已开启' : '已关闭') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'ant-design-hmfw'

const checked = ref(false)
const loading = ref(false)

const handleChange = (val: boolean) => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    checked.value = val
  }, 1500)
}
<\/script>
`,I={style:{display:"flex","flex-direction":"column",gap:"16px"}},j={style:{display:"flex","align-items":"center",gap:"16px"}},A={style:{display:"flex","align-items":"center",gap:"16px"}},G=p({__name:"SwitchSize",setup(i){const n=h(!0),l=h(!0);return(a,e)=>(k(),f("div",I,[d("div",j,[c(o(u),{checked:n.value,"onUpdate:checked":e[0]||(e[0]=t=>n.value=t)},null,8,["checked"]),e[2]||(e[2]=d("span",null,"默认大小",-1))]),d("div",A,[c(o(u),{checked:l.value,"onUpdate:checked":e[1]||(e[1]=t=>l.value=t),size:"small"},null,8,["checked"]),e[3]||(e[3]=d("span",null,"小号开关",-1))])]))}}),q=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div style="display: flex; align-items: center; gap: 16px;">
      <Switch v-model:checked="checked1" />
      <span>默认大小</span>
    </div>
    <div style="display: flex; align-items: center; gap: 16px;">
      <Switch v-model:checked="checked2" size="small" />
      <span>小号开关</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'ant-design-hmfw'

const checked1 = ref(true)
const checked2 = ref(true)
<\/script>
`,H={class:"markdown-body"},Q={__name:"switch",setup(i,{expose:n}){return n({frontmatter:{}}),(a,e)=>{const t=S("DemoBlock");return k(),f("div",H,[e[0]||(e[0]=d("h1",{id:"switch-",tabindex:"-1"},"Switch 开关",-1)),e[1]||(e[1]=d("p",null,"开关选择器。",-1)),e[2]||(e[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=d("ul",null,[d("li",null,"需要表示开关状态/两种状态之间的切换时。"),d("li",null,"和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),e[4]||(e[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=d("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=d("p",null,"最简单的用法。",-1)),c(t,{title:"基础用法",source:o(V)},{default:v(()=>[c(U)]),_:1},8,["source"]),e[7]||(e[7]=d("h3",{id:"-3",tabindex:"-1"},"文字和图标",-1)),e[8]||(e[8]=d("p",null,"带有文字和图标的开关。",-1)),c(t,{title:"文字和图标",source:o(D)},{default:v(()=>[c(L)]),_:1},8,["source"]),e[9]||(e[9]=d("h3",{id:"-4",tabindex:"-1"},"加载中",-1)),e[10]||(e[10]=d("p",null,"标识开关操作仍在执行中。",-1)),c(t,{title:"加载中",source:o(T)},{default:v(()=>[c(P)]),_:1},8,["source"]),e[11]||(e[11]=d("h3",{id:"-5",tabindex:"-1"},"不同尺寸",-1)),e[12]||(e[12]=d("p",null,[d("code",null,'size="small"'),C(" 表示小号开关。")],-1)),c(t,{title:"不同尺寸",source:o(q)},{default:v(()=>[c(G)]),_:1},8,["source"]),e[13]||(e[13]=$('<h2 id="api" tabindex="-1">API</h2><h3 id="switch-props" tabindex="-1">Switch Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>加载中的开关</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>开关大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>checkedChildren</td><td>选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr></tbody></table><h3 id="switch-events" tabindex="-1">Switch Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table>',5))])}}};export{Q as default};
