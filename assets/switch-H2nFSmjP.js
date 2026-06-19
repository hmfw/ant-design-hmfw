import{S as l}from"./Switch-CqVZzS5T.js";import{o as g,A as u,k as h,h as t,n as s,K as c,J as v,E as p,_ as x,H as w,R as m,m as f,l as b}from"./index-BIs5wmTl.js";import"./cls-S9IiI6wd.js";const y={style:{display:"flex","flex-direction":"column",gap:"16px"}},S={style:{display:"flex","align-items":"center",gap:"8px"}},q={style:{display:"flex","align-items":"center",gap:"8px"}},N=g({__name:"SwitchBasic",setup(k){const o=p(!1),d=p(!0);return(i,n)=>(u(),h("div",y,[t("div",S,[s(c(l),{checked:o.value,"onUpdate:checked":n[0]||(n[0]=a=>o.value=a)},null,8,["checked"]),t("span",null,v(o.value?"开启":"关闭"),1)]),t("div",q,[s(c(l),{checked:d.value,"onUpdate:checked":n[1]||(n[1]=a=>d.value=a),disabled:""},null,8,["checked"]),n[2]||(n[2]=t("span",null,"禁用状态",-1))])]))}}),C=`<template>
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
`,E={style:{display:"flex","flex-direction":"column",gap:"24px"}},F=g({__name:"SwitchClassNames",setup(k){const o=p(!0),d=p(!0),i=p(!1),n=p(!0);return(a,e)=>(u(),h("div",E,[t("div",null,[e[4]||(e[4]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器渐变背景：",-1)),s(c(l),{checked:o.value,"onUpdate:checked":e[0]||(e[0]=r=>o.value=r),"class-names":{root:"gradient-switch"}},null,8,["checked"])]),t("div",null,[e[5]||(e[5]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义手柄样式：",-1)),s(c(l),{checked:d.value,"onUpdate:checked":e[1]||(e[1]=r=>d.value=r),"class-names":{root:"custom-root",handle:"custom-handle"}},null,8,["checked"])]),t("div",null,[e[6]||(e[6]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内部文字样式：",-1)),s(c(l),{checked:i.value,"onUpdate:checked":e[2]||(e[2]=r=>i.value=r),"checked-children":"开","un-checked-children":"关","class-names":{inner:"custom-inner",checked:"custom-checked",unchecked:"custom-unchecked"}},null,8,["checked"])]),t("div",null,[e[7]||(e[7]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义加载图标：",-1)),s(c(l),{loading:"","class-names":{loadingIcon:"custom-loading"}})]),t("div",null,[e[8]||(e[8]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),s(c(l),{checked:n.value,"onUpdate:checked":e[3]||(e[3]=r=>n.value=r),"checked-children":"ON","un-checked-children":"OFF",styles:{root:{minWidth:"60px",height:"28px",borderRadius:"14px"},handle:{width:"24px",height:"24px"},inner:{fontSize:"13px",fontWeight:"bold"}}},null,8,["checked"])])]))}}),$=x(F,[["__scopeId","data-v-777cdb14"]]),U=`<template>
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
import { Switch } from 'ant-design-hmfw'

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
`,_={style:{display:"flex","flex-direction":"column",gap:"16px"}},B=g({__name:"SwitchLabel",setup(k){const o=p(!0),d=p(!1),i=p(!0);return(n,a)=>(u(),h("div",_,[s(c(l),{checked:o.value,"onUpdate:checked":a[0]||(a[0]=e=>o.value=e),"checked-children":"开","un-checked-children":"关"},null,8,["checked"]),s(c(l),{checked:d.value,"onUpdate:checked":a[1]||(a[1]=e=>d.value=e),"checked-children":"✓","un-checked-children":"✗"},null,8,["checked"]),s(c(l),{checked:i.value,"onUpdate:checked":a[2]||(a[2]=e=>i.value=e),"checked-children":"ON","un-checked-children":"OFF"},null,8,["checked"])]))}}),O=`<template>
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
`,z={style:{display:"flex","flex-direction":"column",gap:"16px"}},I={style:{display:"flex",gap:"8px"}},P={style:{display:"flex","align-items":"center",gap:"8px"}},D=g({__name:"SwitchLoading",setup(k){const o=p(!1),d=p(!1),i=n=>{d.value=!0,setTimeout(()=>{d.value=!1,o.value=n},1500)};return(n,a)=>(u(),h("div",z,[t("div",I,[s(c(l),{checked:!0,loading:""}),s(c(l),{checked:!1,loading:""})]),t("div",P,[s(c(l),{checked:o.value,"onUpdate:checked":a[0]||(a[0]=e=>o.value=e),loading:d.value,onChange:i},null,8,["checked","loading"]),t("span",null,v(d.value?"切换中...":o.value?"已开启":"已关闭"),1)])]))}}),A=`<template>
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
`,T={style:{display:"flex","flex-direction":"column",gap:"16px"}},V={style:{display:"flex","align-items":"center",gap:"16px"}},W={style:{display:"flex","align-items":"center",gap:"16px"}},L=g({__name:"SwitchSize",setup(k){const o=p(!0),d=p(!0);return(i,n)=>(u(),h("div",T,[t("div",V,[s(c(l),{checked:o.value,"onUpdate:checked":n[0]||(n[0]=a=>o.value=a)},null,8,["checked"]),n[2]||(n[2]=t("span",null,"默认大小",-1))]),t("div",W,[s(c(l),{checked:d.value,"onUpdate:checked":n[1]||(n[1]=a=>d.value=a),size:"small"},null,8,["checked"]),n[3]||(n[3]=t("span",null,"小号开关",-1))])]))}}),R=`<template>
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
`,M={class:"markdown-body"},Y={__name:"switch",setup(k,{expose:o}){return o({frontmatter:{}}),(i,n)=>{const a=w("DemoBlock");return u(),h("div",M,[n[0]||(n[0]=t("h1",{id:"switch-开关",tabindex:"-1"},"Switch 开关",-1)),n[1]||(n[1]=t("p",null,"开关选择器。",-1)),n[2]||(n[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("ul",null,[t("li",null,"需要表示开关状态/两种状态之间的切换时。"),t("li",null,"和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),n[4]||(n[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=t("p",null,"最简单的用法。",-1)),s(a,{title:"基础用法",source:c(C)},{default:m(()=>[s(N)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"文字和图标",tabindex:"-1"},"文字和图标",-1)),n[8]||(n[8]=t("p",null,"带有文字和图标的开关。",-1)),s(a,{title:"文字和图标",source:c(O)},{default:m(()=>[s(B)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"加载中",tabindex:"-1"},"加载中",-1)),n[10]||(n[10]=t("p",null,"标识开关操作仍在执行中。",-1)),s(a,{title:"加载中",source:c(A)},{default:m(()=>[s(D)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),n[12]||(n[12]=t("p",null,[t("code",null,'size="small"'),f(" 表示小号开关。")],-1)),s(a,{title:"不同尺寸",source:c(R)},{default:m(()=>[s(L)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[14]||(n[14]=t("p",null,[f("通过 "),t("code",null,"classNames"),f(" / "),t("code",null,"styles"),f(" 对根容器、手柄、加载图标、内部文字等子元素做细粒度样式控制。")],-1)),s(a,{title:"语义化 className 与 style",source:c(U)},{default:m(()=>[s($)]),_:1},8,["source"]),n[15]||(n[15]=b(`<h2 id="api" tabindex="-1">API</h2><h3 id="switch-props" tabindex="-1">Switch Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>加载中的开关</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>开关大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>checkedChildren</td><td>选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>autoFocus</td><td>组件自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>id</td><td>组件的 id</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>组件的 title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIndex</td><td>组件的 tab index</td><td><code>number</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SwitchClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SwitchStyles</code></td><td>-</td></tr></tbody></table><h3 id="switch-events" tabindex="-1">Switch Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr></tbody></table><h3 id="switch-slots" tabindex="-1">Switch Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>checkedChildren</td><td>选中时的内容</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Switch 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义根容器渐变背景 --&gt;
  &lt;Switch v-model:checked=&quot;checked&quot; :class-names=&quot;{ root: &#39;gradient-switch&#39; }&quot; /&gt;

  &lt;!-- 自定义手柄样式 --&gt;
  &lt;Switch
    v-model:checked=&quot;checked&quot;
    :class-names=&quot;{
      root: &#39;custom-root&#39;,
      handle: &#39;custom-handle&#39;,
    }&quot;
  /&gt;

  &lt;!-- 自定义内部文字样式 --&gt;
  &lt;Switch
    v-model:checked=&quot;checked&quot;
    checked-children=&quot;开&quot;
    un-checked-children=&quot;关&quot;
    :class-names=&quot;{
      inner: &#39;custom-inner&#39;,
      checked: &#39;custom-checked&#39;,
      unchecked: &#39;custom-unchecked&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.gradient-switch) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transition: all 0.3s;
}

:deep(.custom-handle) {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.6);
}

:deep(.custom-inner) {
  font-weight: bold;
}

:deep(.custom-checked) {
  color: #fffb00;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制尺寸和颜色 --&gt;
  &lt;Switch
    v-model:checked=&quot;checked&quot;
    :styles=&quot;{
      root: { minWidth: &#39;60px&#39;, height: &#39;28px&#39; },
      handle: { width: &#39;24px&#39;, height: &#39;24px&#39; },
    }&quot;
  /&gt;

  &lt;!-- 自定义文字样式 --&gt;
  &lt;Switch
    v-model:checked=&quot;checked&quot;
    checked-children=&quot;ON&quot;
    un-checked-children=&quot;OFF&quot;
    :styles=&quot;{
      inner: { fontSize: &#39;13px&#39;, fontWeight: &#39;bold&#39; },
      checked: { color: &#39;#fffb00&#39; },
      unchecked: { color: &#39;#ffa940&#39; },
    }&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Switch
    v-model:checked=&quot;checked&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;14px&#39; },
      handle: { boxShadow: &#39;0 2px 8px rgba(0,0,0,0.3)&#39; },
      inner: { fontSize: &#39;12px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-switch-checked</code>、<code>.hmfw-switch-loading</code>）合并</li><li><code>checked</code> 和 <code>unchecked</code> 对应开关内部的两个子内容节点，仅在设置 <code>checkedChildren</code> / <code>unCheckedChildren</code> 时渲染</li><li><code>loadingIcon</code> 仅在 <code>loading</code> 状态时渲染在 <code>handle</code> 内部</li><li>自定义 <code>root</code> 的尺寸时，可能需要同步调整 <code>handle</code> 的位置和尺寸以保持视觉协调</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Switch 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色，用于选中状态的背景色和加载图标边框色</td><td><code>#1677ff</code></td></tr></tbody></table>`,25))])}}};export{Y as default};
