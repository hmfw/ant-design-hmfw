import{m as k,L as C,B as h,O as $,v as _,l as c,d as x,y as f,i as v,f as t,I as a,H as b,E as B,P as m,k as F,j as N}from"./index-BZUMvgWw.js";import{c as z}from"./cls-S9IiI6wd.js";const u=k({name:"Switch",props:{checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:Boolean,loading:Boolean,size:{type:String,default:"default"},checkedChildren:null,unCheckedChildren:null,autoFocus:Boolean,id:String,title:String,tabIndex:Number},emits:["update:checked","change","click","focus","blur"],setup(l,{slots:n,emit:i}){const o=C("switch"),e=h(l.defaultChecked??!1),d=h();$(()=>l.checked,r=>{r!==void 0&&(e.value=r)});const s=x(()=>l.checked!==void 0?l.checked:e.value),g=x(()=>l.disabled||l.loading);_(()=>{l.autoFocus&&d.value&&d.value.focus()});const y=r=>{if(g.value)return;const p=!s.value;e.value=p,i("update:checked",p),i("change",p,r),i("click",p,r)},w=r=>{i("focus",r)},S=r=>{i("blur",r)};return()=>{var r,p;return c("button",{ref:d,type:"button",role:"switch","aria-checked":s.value,id:l.id,title:l.title,tabindex:l.tabIndex,class:z(o,{[`${o}-checked`]:s.value,[`${o}-disabled`]:g.value,[`${o}-loading`]:l.loading,[`${o}-small`]:l.size==="small"}),onClick:y,onFocus:w,onBlur:S,disabled:g.value},[c("span",{class:`${o}-handle`},[l.loading&&c("span",{class:`${o}-loading-icon`},null)]),c("span",{class:`${o}-inner`},[s.value?((r=n.checkedChildren)==null?void 0:r.call(n))??l.checkedChildren:((p=n.unCheckedChildren)==null?void 0:p.call(n))??l.unCheckedChildren])])}}}),U={style:{display:"flex","flex-direction":"column",gap:"16px"}},E={style:{display:"flex","align-items":"center",gap:"8px"}},V={style:{display:"flex","align-items":"center",gap:"8px"}},I=k({__name:"SwitchBasic",setup(l){const n=h(!1),i=h(!0);return(o,e)=>(f(),v("div",U,[t("div",E,[c(a(u),{checked:n.value,"onUpdate:checked":e[0]||(e[0]=d=>n.value=d)},null,8,["checked"]),t("span",null,b(n.value?"开启":"关闭"),1)]),t("div",V,[c(a(u),{checked:i.value,"onUpdate:checked":e[1]||(e[1]=d=>i.value=d),disabled:""},null,8,["checked"]),e[2]||(e[2]=t("span",null,"禁用状态",-1))])]))}}),L=`<template>
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
`,O={style:{display:"flex","flex-direction":"column",gap:"16px"}},D=k({__name:"SwitchLabel",setup(l){const n=h(!0),i=h(!1),o=h(!0);return(e,d)=>(f(),v("div",O,[c(a(u),{checked:n.value,"onUpdate:checked":d[0]||(d[0]=s=>n.value=s),"checked-children":"开","un-checked-children":"关"},null,8,["checked"]),c(a(u),{checked:i.value,"onUpdate:checked":d[1]||(d[1]=s=>i.value=s),"checked-children":"✓","un-checked-children":"✗"},null,8,["checked"]),c(a(u),{checked:o.value,"onUpdate:checked":d[2]||(d[2]=s=>o.value=s),"checked-children":"ON","un-checked-children":"OFF"},null,8,["checked"])]))}}),P=`<template>
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
`,M={style:{display:"flex","flex-direction":"column",gap:"16px"}},T={style:{display:"flex",gap:"8px"}},j={style:{display:"flex","align-items":"center",gap:"8px"}},A=k({__name:"SwitchLoading",setup(l){const n=h(!1),i=h(!1),o=e=>{i.value=!0,setTimeout(()=>{i.value=!1,n.value=e},1500)};return(e,d)=>(f(),v("div",M,[t("div",T,[c(a(u),{checked:!0,loading:""}),c(a(u),{checked:!1,loading:""})]),t("div",j,[c(a(u),{checked:n.value,"onUpdate:checked":d[0]||(d[0]=s=>n.value=s),loading:i.value,onChange:o},null,8,["checked","loading"]),t("span",null,b(i.value?"切换中...":n.value?"已开启":"已关闭"),1)])]))}}),H=`<template>
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
`,R={style:{display:"flex","flex-direction":"column",gap:"16px"}},q={style:{display:"flex","align-items":"center",gap:"16px"}},G={style:{display:"flex","align-items":"center",gap:"16px"}},J=k({__name:"SwitchSize",setup(l){const n=h(!0),i=h(!0);return(o,e)=>(f(),v("div",R,[t("div",q,[c(a(u),{checked:n.value,"onUpdate:checked":e[0]||(e[0]=d=>n.value=d)},null,8,["checked"]),e[2]||(e[2]=t("span",null,"默认大小",-1))]),t("div",G,[c(a(u),{checked:i.value,"onUpdate:checked":e[1]||(e[1]=d=>i.value=d),size:"small"},null,8,["checked"]),e[3]||(e[3]=t("span",null,"小号开关",-1))])]))}}),K=`<template>
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
`,Q={class:"markdown-body"},Y={__name:"switch",setup(l,{expose:n}){return n({frontmatter:{}}),(o,e)=>{const d=B("DemoBlock");return f(),v("div",Q,[e[0]||(e[0]=t("h1",{id:"switch-",tabindex:"-1"},"Switch 开关",-1)),e[1]||(e[1]=t("p",null,"开关选择器。",-1)),e[2]||(e[2]=t("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"需要表示开关状态/两种状态之间的切换时。"),t("li",null,"和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),e[4]||(e[4]=t("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=t("p",null,"最简单的用法。",-1)),c(d,{title:"基础用法",source:a(L)},{default:m(()=>[c(I)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"-3",tabindex:"-1"},"文字和图标",-1)),e[8]||(e[8]=t("p",null,"带有文字和图标的开关。",-1)),c(d,{title:"文字和图标",source:a(P)},{default:m(()=>[c(D)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"-4",tabindex:"-1"},"加载中",-1)),e[10]||(e[10]=t("p",null,"标识开关操作仍在执行中。",-1)),c(d,{title:"加载中",source:a(H)},{default:m(()=>[c(A)]),_:1},8,["source"]),e[11]||(e[11]=t("h3",{id:"-5",tabindex:"-1"},"不同尺寸",-1)),e[12]||(e[12]=t("p",null,[t("code",null,'size="small"'),F(" 表示小号开关。")],-1)),c(d,{title:"不同尺寸",source:a(K)},{default:m(()=>[c(J)]),_:1},8,["source"]),e[13]||(e[13]=N('<h2 id="api" tabindex="-1">API</h2><h3 id="switch-props" tabindex="-1">Switch Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>加载中的开关</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>开关大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>checkedChildren</td><td>选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>autoFocus</td><td>组件自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>id</td><td>组件的 id</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>组件的 title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIndex</td><td>组件的 tab index</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="switch-events" tabindex="-1">Switch Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr></tbody></table><h3 id="switch-slots" tabindex="-1">Switch Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>checkedChildren</td><td>选中时的内容</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td></tr></tbody></table>',7))])}}};export{Y as default};
