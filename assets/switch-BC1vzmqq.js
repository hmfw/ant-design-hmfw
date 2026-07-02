import{S as l}from"./Switch-CpQ7ZzOc.js";import{d as g,o as r,b as k,f as s,c as a,e as c,A as v,r as d,_ as x,h as w,w as m,g as f,i as y}from"./index-DpCWj_RH.js";import"./cls-S9IiI6wd.js";const b={style:{display:"flex","flex-direction":"column",gap:"16px"}},S={style:{display:"flex","align-items":"center",gap:"8px"}},q={style:{display:"flex","align-items":"center",gap:"8px"}},N=g({__name:"SwitchBasic",setup(h){const o=d(!1),p=d(!0);return(i,n)=>(r(),k("div",b,[s("div",S,[a(c(l),{checked:o.value,"onUpdate:checked":n[0]||(n[0]=e=>o.value=e)},null,8,["checked"]),s("span",null,v(o.value?"开启":"关闭"),1)]),s("div",q,[a(c(l),{checked:p.value,"onUpdate:checked":n[1]||(n[1]=e=>p.value=e),disabled:""},null,8,["checked"]),n[2]||(n[2]=s("span",null,"禁用状态",-1))])]))}}),C=`<template>
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
import { Switch } from '@hmfw/ant-design'

const checked = ref(false)
const checked2 = ref(true)
<\/script>
`,E={style:{display:"flex","flex-direction":"column",gap:"24px"}},F=g({__name:"SwitchClassNames",setup(h){const o=d(!0),p=d(!0),i=d(!1),n=d(!0);return(e,t)=>(r(),k("div",E,[s("div",null,[t[4]||(t[4]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器渐变背景：",-1)),a(c(l),{checked:o.value,"onUpdate:checked":t[0]||(t[0]=u=>o.value=u),"class-names":{root:"gradient-switch"}},null,8,["checked"])]),s("div",null,[t[5]||(t[5]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义手柄样式：",-1)),a(c(l),{checked:p.value,"onUpdate:checked":t[1]||(t[1]=u=>p.value=u),"class-names":{root:"custom-root",handle:"custom-handle"}},null,8,["checked"])]),s("div",null,[t[6]||(t[6]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内部文字样式：",-1)),a(c(l),{checked:i.value,"onUpdate:checked":t[2]||(t[2]=u=>i.value=u),"checked-children":"开","un-checked-children":"关","class-names":{inner:"custom-inner",checked:"custom-checked",unchecked:"custom-unchecked"}},null,8,["checked"])]),s("div",null,[t[7]||(t[7]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义加载图标：",-1)),a(c(l),{loading:"","class-names":{loadingIcon:"custom-loading"}})]),s("div",null,[t[8]||(t[8]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),a(c(l),{checked:n.value,"onUpdate:checked":t[3]||(t[3]=u=>n.value=u),"checked-children":"ON","un-checked-children":"OFF",styles:{root:{minWidth:"60px",height:"28px",borderRadius:"14px"},handle:{width:"24px",height:"24px"},inner:{fontSize:"13px",fontWeight:"bold"}}},null,8,["checked"])])]))}}),$=x(F,[["__scopeId","data-v-69d40239"]]),U=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器渐变背景 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器渐变背景：</div>
      <Switch v-model:checked="checked1" :class-names="{ root: 'gradient-switch' }" />
    </div>

    <!-- 场景 2：自定义手柄样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义手柄样式：</div>
      <Switch
        v-model:checked="checked2"
        :class-names="{
          root: 'custom-root',
          handle: 'custom-handle',
        }"
      />
    </div>

    <!-- 场景 3：自定义内部文字样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义内部文字样式：</div>
      <Switch
        v-model:checked="checked3"
        checked-children="开"
        un-checked-children="关"
        :class-names="{
          inner: 'custom-inner',
          checked: 'custom-checked',
          unchecked: 'custom-unchecked',
        }"
      />
    </div>

    <!-- 场景 4：自定义加载图标 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义加载图标：</div>
      <Switch loading :class-names="{ loadingIcon: 'custom-loading' }" />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Switch
        v-model:checked="checked4"
        checked-children="ON"
        un-checked-children="OFF"
        :styles="{
          root: { minWidth: '60px', height: '28px', borderRadius: '14px' },
          handle: { width: '24px', height: '24px' },
          inner: { fontSize: '13px', fontWeight: 'bold' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@hmfw/ant-design'

const checked1 = ref(true)
const checked2 = ref(true)
const checked3 = ref(false)
const checked4 = ref(true)
<\/script>

<style scoped>
:deep(.gradient-switch) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: all 0.3s;
}

:deep(.gradient-switch:not(.hmfw-switch-checked)) {
  background: linear-gradient(135deg, #bdc3c7 0%, #95a5a6 100%);
}

:deep(.gradient-switch:hover) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.custom-root) {
  background: #52c41a;
  border: 2px solid #389e0d;
}

:deep(.custom-root:not(.hmfw-switch-checked)) {
  background: #ff4d4f;
  border: 2px solid #cf1322;
}

:deep(.custom-handle) {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.6);
  transition: all 0.3s;
}

:deep(.custom-handle:hover) {
  transform: scale(1.1);
}

:deep(.custom-inner) {
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

:deep(.custom-checked) {
  color: #fffb00;
}

:deep(.custom-unchecked) {
  color: #ffa940;
}

:deep(.custom-loading) {
  width: 12px;
  height: 12px;
  border-width: 2.5px;
  border-top-color: #ff4d4f;
}
</style>
`,_={style:{display:"flex","flex-direction":"column",gap:"16px"}},B=g({__name:"SwitchLabel",setup(h){const o=d(!0),p=d(!1),i=d(!0);return(n,e)=>(r(),k("div",_,[a(c(l),{checked:o.value,"onUpdate:checked":e[0]||(e[0]=t=>o.value=t),"checked-children":"开","un-checked-children":"关"},null,8,["checked"]),a(c(l),{checked:p.value,"onUpdate:checked":e[1]||(e[1]=t=>p.value=t),"checked-children":"✓","un-checked-children":"✗"},null,8,["checked"]),a(c(l),{checked:i.value,"onUpdate:checked":e[2]||(e[2]=t=>i.value=t),"checked-children":"ON","un-checked-children":"OFF"},null,8,["checked"])]))}}),O=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Switch v-model:checked="checked1" checked-children="开" un-checked-children="关" />
    <Switch v-model:checked="checked2" checked-children="✓" un-checked-children="✗" />
    <Switch v-model:checked="checked3" checked-children="ON" un-checked-children="OFF" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@hmfw/ant-design'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
<\/script>
`,z={style:{display:"flex","flex-direction":"column",gap:"16px"}},I={style:{display:"flex",gap:"8px"}},P={style:{display:"flex","align-items":"center",gap:"8px"}},D=g({__name:"SwitchLoading",setup(h){const o=d(!1),p=d(!1),i=n=>{p.value=!0,setTimeout(()=>{p.value=!1,o.value=n},1500)};return(n,e)=>(r(),k("div",z,[s("div",I,[a(c(l),{checked:!0,loading:""}),a(c(l),{checked:!1,loading:""})]),s("div",P,[a(c(l),{checked:o.value,"onUpdate:checked":e[0]||(e[0]=t=>o.value=t),loading:p.value,onChange:i},null,8,["checked","loading"]),s("span",null,v(p.value?"切换中...":o.value?"已开启":"已关闭"),1)])]))}}),A=`<template>
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
import { Switch } from '@hmfw/ant-design'

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
`,T={style:{display:"flex","flex-direction":"column",gap:"16px"}},V={style:{display:"flex","align-items":"center",gap:"16px"}},W={style:{display:"flex","align-items":"center",gap:"16px"}},L=g({__name:"SwitchSize",setup(h){const o=d(!0),p=d(!0);return(i,n)=>(r(),k("div",T,[s("div",V,[a(c(l),{checked:o.value,"onUpdate:checked":n[0]||(n[0]=e=>o.value=e)},null,8,["checked"]),n[2]||(n[2]=s("span",null,"默认大小",-1))]),s("div",W,[a(c(l),{checked:p.value,"onUpdate:checked":n[1]||(n[1]=e=>p.value=e),size:"small"},null,8,["checked"]),n[3]||(n[3]=s("span",null,"小号开关",-1))])]))}}),M=`<template>
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
import { Switch } from '@hmfw/ant-design'

const checked1 = ref(true)
const checked2 = ref(true)
<\/script>
`,R={class:"markdown-body"},H={__name:"switch",setup(h,{expose:o}){return o({frontmatter:{}}),(i,n)=>{const e=w("DemoBlock");return r(),k("div",R,[n[0]||(n[0]=s("h1",{id:"switch-开关",tabindex:"-1"},"Switch 开关",-1)),n[1]||(n[1]=s("p",null,"开关选择器。",-1)),n[2]||(n[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=s("ul",null,[s("li",null,"需要表示开关状态/两种状态之间的切换时。"),s("li",null,"和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),n[4]||(n[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=s("p",null,"最简单的用法。",-1)),a(e,{title:"基础用法",source:c(C)},{default:m(()=>[a(N)]),_:1},8,["source"]),n[7]||(n[7]=s("h3",{id:"文字和图标",tabindex:"-1"},"文字和图标",-1)),n[8]||(n[8]=s("p",null,"带有文字和图标的开关。",-1)),a(e,{title:"文字和图标",source:c(O)},{default:m(()=>[a(B)]),_:1},8,["source"]),n[9]||(n[9]=s("h3",{id:"加载中",tabindex:"-1"},"加载中",-1)),n[10]||(n[10]=s("p",null,"标识开关操作仍在执行中。",-1)),a(e,{title:"加载中",source:c(A)},{default:m(()=>[a(D)]),_:1},8,["source"]),n[11]||(n[11]=s("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),n[12]||(n[12]=s("p",null,[s("code",null,'size="small"'),f(" 表示小号开关。")],-1)),a(e,{title:"不同尺寸",source:c(M)},{default:m(()=>[a(L)]),_:1},8,["source"]),n[13]||(n[13]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[14]||(n[14]=s("p",null,[f("通过 "),s("code",null,"classNames"),f(" / "),s("code",null,"styles"),f(" 对根容器、手柄、加载图标、内部文字等子元素做细粒度样式控制。")],-1)),a(e,{title:"语义化 className 与 style",source:c(U)},{default:m(()=>[a($)]),_:1},8,["source"]),n[15]||(n[15]=y(`<h2 id="api" tabindex="-1">API</h2><h3 id="switch-props" tabindex="-1">Switch Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>加载中的开关</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>开关大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>checkedChildren</td><td>选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>autoFocus</td><td>组件自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>id</td><td>组件的 id</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>组件的 title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIndex</td><td>组件的 tab index</td><td><code>number</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SwitchClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SwitchStyles</code></td><td>-</td></tr></tbody></table><h3 id="switch-events" tabindex="-1">Switch Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr></tbody></table><h3 id="switch-slots" tabindex="-1">Switch Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>checkedChildren</td><td>选中时的内容</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Switch 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">SwitchClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 button.hmfw-switch</span>
  handle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 滑动手柄 span.hmfw-switch-handle</span>
  loadingIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 加载图标 span.hmfw-switch-loading-icon</span>
  inner<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 内部内容容器 span.hmfw-switch-inner</span>
  checked<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选中状态的子内容 span.hmfw-switch-inner-checked</span>
  unchecked<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 未选中状态的子内容 span.hmfw-switch-inner-unchecked</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SwitchStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  handle<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  loadingIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  inner<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  checked<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  unchecked<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 基础开关 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-switch hmfw-switch-checked<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-switch-handle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.handle / styles.handle 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-switch-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.inner / styles.inner 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-switch-inner-checked<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.checked / styles.checked 应用于此 --&gt;</span>
      开
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-switch-inner-unchecked<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.unchecked / styles.unchecked 应用于此 --&gt;</span>
      关
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 加载状态 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-switch hmfw-switch-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-switch-handle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.handle / styles.handle 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-switch-loading-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.loadingIcon / styles.loadingIcon 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义根容器渐变背景 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name"><span class="token namespace">v-model:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;gradient-switch&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义手柄样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;custom-root&#39;,
      handle: &#39;custom-handle&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义内部文字样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">checked-children</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>开<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">un-checked-children</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>关<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      inner: &#39;custom-inner&#39;,
      checked: &#39;custom-checked&#39;,
      unchecked: &#39;custom-unchecked&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.gradient-switch)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-handle)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #ffd700 0%<span class="token punctuation">,</span> #ffed4e 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 215<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-inner)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.custom-checked)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fffb00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制尺寸和颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { minWidth: &#39;60px&#39;, height: &#39;28px&#39; },
      handle: { width: &#39;24px&#39;, height: &#39;24px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义文字样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">checked-children</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ON<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">un-checked-children</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>OFF<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      inner: { fontSize: &#39;13px&#39;, fontWeight: &#39;bold&#39; },
      checked: { color: &#39;#fffb00&#39; },
      unchecked: { color: &#39;#ffa940&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>
    <span class="token attr-name"><span class="token namespace">v-model:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;14px&#39; },
      handle: { boxShadow: &#39;0 2px 8px rgba(0,0,0,0.3)&#39; },
      inner: { fontSize: &#39;12px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-switch-checked</code>、<code>.hmfw-switch-loading</code>）合并</li><li><code>checked</code> 和 <code>unchecked</code> 对应开关内部的两个子内容节点，仅在设置 <code>checkedChildren</code> / <code>unCheckedChildren</code> 时渲染</li><li><code>loadingIcon</code> 仅在 <code>loading</code> 状态时渲染在 <code>handle</code> 内部</li><li>自定义 <code>root</code> 的尺寸时，可能需要同步调整 <code>handle</code> 的位置和尺寸以保持视觉协调</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Switch 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色，用于选中状态的背景色和加载图标边框色</td><td><code>#1677ff</code></td></tr></tbody></table>`,25))])}}};export{H as default};
