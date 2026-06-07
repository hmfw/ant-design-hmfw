import{S as i}from"./Switch-DLgXq4pW.js";import{n as f,z as h,j as p,g as t,m as n,J as o,I as v,D as s,G as m,Q as k,l as x,k as g}from"./index-DBrYVvYd.js";import"./cls-S9IiI6wd.js";const y={style:{display:"flex","flex-direction":"column",gap:"16px"}},b={style:{display:"flex","align-items":"center",gap:"8px"}},w={style:{display:"flex","align-items":"center",gap:"8px"}},S=f({__name:"SwitchBasic",setup(u){const c=s(!1),l=s(!0);return(a,e)=>(h(),p("div",y,[t("div",b,[n(o(i),{checked:c.value,"onUpdate:checked":e[0]||(e[0]=d=>c.value=d)},null,8,["checked"]),t("span",null,v(c.value?"开启":"关闭"),1)]),t("div",w,[n(o(i),{checked:l.value,"onUpdate:checked":e[1]||(e[1]=d=>l.value=d),disabled:""},null,8,["checked"]),e[2]||(e[2]=t("span",null,"禁用状态",-1))])]))}}),_=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; align-items: center; gap: 8px">
      <Switch v-model:checked="checked" />
      <span>{{ checked ? '开启' : '关闭' }}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px">
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
`,C={style:{display:"flex","flex-direction":"column",gap:"16px"}},$=f({__name:"SwitchLabel",setup(u){const c=s(!0),l=s(!1),a=s(!0);return(e,d)=>(h(),p("div",C,[n(o(i),{checked:c.value,"onUpdate:checked":d[0]||(d[0]=r=>c.value=r),"checked-children":"开","un-checked-children":"关"},null,8,["checked"]),n(o(i),{checked:l.value,"onUpdate:checked":d[1]||(d[1]=r=>l.value=r),"checked-children":"✓","un-checked-children":"✗"},null,8,["checked"]),n(o(i),{checked:a.value,"onUpdate:checked":d[2]||(d[2]=r=>a.value=r),"checked-children":"ON","un-checked-children":"OFF"},null,8,["checked"])]))}}),N=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Switch v-model:checked="checked1" checked-children="开" un-checked-children="关" />
    <Switch v-model:checked="checked2" checked-children="✓" un-checked-children="✗" />
    <Switch v-model:checked="checked3" checked-children="ON" un-checked-children="OFF" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from 'ant-design-hmfw'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
<\/script>
`,U={style:{display:"flex","flex-direction":"column",gap:"16px"}},z={style:{display:"flex",gap:"8px"}},B={style:{display:"flex","align-items":"center",gap:"8px"}},F=f({__name:"SwitchLoading",setup(u){const c=s(!1),l=s(!1),a=e=>{l.value=!0,setTimeout(()=>{l.value=!1,c.value=e},1500)};return(e,d)=>(h(),p("div",U,[t("div",z,[n(o(i),{checked:!0,loading:""}),n(o(i),{checked:!1,loading:""})]),t("div",B,[n(o(i),{checked:c.value,"onUpdate:checked":d[0]||(d[0]=r=>c.value=r),loading:l.value,onChange:a},null,8,["checked","loading"]),t("span",null,v(l.value?"切换中...":c.value?"已开启":"已关闭"),1)])]))}}),E=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; gap: 8px">
      <Switch :checked="true" loading />
      <Switch :checked="false" loading />
    </div>
    <div style="display: flex; align-items: center; gap: 8px">
      <Switch v-model:checked="checked" :loading="loading" @change="handleChange" />
      <span>{{ loading ? '切换中...' : checked ? '已开启' : '已关闭' }}</span>
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
`,V={style:{display:"flex","flex-direction":"column",gap:"16px"}},D={style:{display:"flex","align-items":"center",gap:"16px"}},L={style:{display:"flex","align-items":"center",gap:"16px"}},O=f({__name:"SwitchSize",setup(u){const c=s(!0),l=s(!0);return(a,e)=>(h(),p("div",V,[t("div",D,[n(o(i),{checked:c.value,"onUpdate:checked":e[0]||(e[0]=d=>c.value=d)},null,8,["checked"]),e[2]||(e[2]=t("span",null,"默认大小",-1))]),t("div",L,[n(o(i),{checked:l.value,"onUpdate:checked":e[1]||(e[1]=d=>l.value=d),size:"small"},null,8,["checked"]),e[3]||(e[3]=t("span",null,"小号开关",-1))])]))}}),I=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; align-items: center; gap: 16px">
      <Switch v-model:checked="checked1" />
      <span>默认大小</span>
    </div>
    <div style="display: flex; align-items: center; gap: 16px">
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
`,T={class:"markdown-body"},A={__name:"switch",setup(u,{expose:c}){return c({frontmatter:{}}),(a,e)=>{const d=m("DemoBlock");return h(),p("div",T,[e[0]||(e[0]=t("h1",{id:"switch-",tabindex:"-1"},"Switch 开关",-1)),e[1]||(e[1]=t("p",null,"开关选择器。",-1)),e[2]||(e[2]=t("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=t("ul",null,[t("li",null,"需要表示开关状态/两种状态之间的切换时。"),t("li",null,"和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),e[4]||(e[4]=t("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=t("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=t("p",null,"最简单的用法。",-1)),n(d,{title:"基础用法",source:o(_)},{default:k(()=>[n(S)]),_:1},8,["source"]),e[7]||(e[7]=t("h3",{id:"-3",tabindex:"-1"},"文字和图标",-1)),e[8]||(e[8]=t("p",null,"带有文字和图标的开关。",-1)),n(d,{title:"文字和图标",source:o(N)},{default:k(()=>[n($)]),_:1},8,["source"]),e[9]||(e[9]=t("h3",{id:"-4",tabindex:"-1"},"加载中",-1)),e[10]||(e[10]=t("p",null,"标识开关操作仍在执行中。",-1)),n(d,{title:"加载中",source:o(E)},{default:k(()=>[n(F)]),_:1},8,["source"]),e[11]||(e[11]=t("h3",{id:"-5",tabindex:"-1"},"不同尺寸",-1)),e[12]||(e[12]=t("p",null,[t("code",null,'size="small"'),x(" 表示小号开关。")],-1)),n(d,{title:"不同尺寸",source:o(I)},{default:k(()=>[n(O)]),_:1},8,["source"]),e[13]||(e[13]=g('<h2 id="api" tabindex="-1">API</h2><h3 id="switch-props" tabindex="-1">Switch Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>加载中的开关</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>开关大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>checkedChildren</td><td>选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>autoFocus</td><td>组件自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>id</td><td>组件的 id</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>组件的 title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIndex</td><td>组件的 tab index</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="switch-events" tabindex="-1">Switch Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr></tbody></table><h3 id="switch-slots" tabindex="-1">Switch Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>checkedChildren</td><td>选中时的内容</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td></tr></tbody></table>',7))])}}};export{A as default};
