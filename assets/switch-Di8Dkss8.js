import{S as v}from"./Space-ChZCQvS5.js";import{S as l}from"./Switch-DczXr117.js";import{d as m,o as k,q as w,w as r,f as t,c as e,e as c,A as x,r as d,b as f,_ as b,h as y,g,i as S}from"./index-cgVI-orz.js";import"./cls-S9IiI6wd.js";const q={style:{display:"flex","align-items":"center",gap:"8px"}},N={style:{display:"flex","align-items":"center",gap:"8px"}},C=m({__name:"SwitchBasic",setup(h){const o=d(!1),p=d(!0);return(i,n)=>(k(),w(c(v),{direction:"vertical",size:"middle"},{default:r(()=>[t("div",q,[e(c(l),{checked:o.value,"onUpdate:checked":n[0]||(n[0]=s=>o.value=s)},null,8,["checked"]),t("span",null,x(o.value?"开启":"关闭"),1)]),t("div",N,[e(c(l),{checked:p.value,"onUpdate:checked":n[1]||(n[1]=s=>p.value=s),disabled:""},null,8,["checked"]),n[2]||(n[2]=t("span",null,"禁用状态",-1))])]),_:1}))}}),z=`<template>
  <Space direction="vertical" size="middle">
    <div style="display: flex; align-items: center; gap: 8px">
      <Switch v-model:checked="checked" />
      <span>{{ checked ? '开启' : '关闭' }}</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px">
      <Switch v-model:checked="checked2" disabled />
      <span>禁用状态</span>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Space, Switch } from '@hmfw/ant-design'

const checked = ref(false)
const checked2 = ref(true)
<\/script>
`,E={style:{display:"flex","flex-direction":"column",gap:"24px"}},F=m({__name:"SwitchClassNames",setup(h){const o=d(!0),p=d(!0),i=d(!1),n=d(!0);return(s,a)=>(k(),f("div",E,[t("div",null,[a[4]||(a[4]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器渐变背景：",-1)),e(c(l),{checked:o.value,"onUpdate:checked":a[0]||(a[0]=u=>o.value=u),"class-names":{root:"gradient-switch"}},null,8,["checked"])]),t("div",null,[a[5]||(a[5]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义手柄样式：",-1)),e(c(l),{checked:p.value,"onUpdate:checked":a[1]||(a[1]=u=>p.value=u),"class-names":{root:"custom-root",handle:"custom-handle"}},null,8,["checked"])]),t("div",null,[a[6]||(a[6]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义内部文字样式：",-1)),e(c(l),{checked:i.value,"onUpdate:checked":a[2]||(a[2]=u=>i.value=u),"checked-children":"开","un-checked-children":"关","class-names":{inner:"custom-inner",checked:"custom-checked",unchecked:"custom-unchecked"}},null,8,["checked"])]),t("div",null,[a[7]||(a[7]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义加载图标：",-1)),e(c(l),{loading:"","class-names":{loadingIcon:"custom-loading"}})]),t("div",null,[a[8]||(a[8]=t("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),e(c(l),{checked:n.value,"onUpdate:checked":a[3]||(a[3]=u=>n.value=u),"checked-children":"ON","un-checked-children":"OFF",styles:{root:{minWidth:"60px",height:"28px",borderRadius:"14px"},handle:{width:"24px",height:"24px"},inner:{fontSize:"13px",fontWeight:"bold"}}},null,8,["checked"])])]))}}),U=b(F,[["__scopeId","data-v-69d40239"]]),B=`<template>
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
`,$=m({__name:"SwitchLabel",setup(h){const o=d(!0),p=d(!1),i=d(!0);return(n,s)=>(k(),w(c(v),{direction:"vertical",size:"middle"},{default:r(()=>[e(c(l),{checked:o.value,"onUpdate:checked":s[0]||(s[0]=a=>o.value=a),"checked-children":"开启","un-checked-children":"关闭"},null,8,["checked"]),e(c(l),{checked:p.value,"onUpdate:checked":s[1]||(s[1]=a=>p.value=a),"checked-children":"✓","un-checked-children":"✗"},null,8,["checked"]),e(c(l),{checked:i.value,"onUpdate:checked":s[2]||(s[2]=a=>i.value=a),"checked-children":"ON","un-checked-children":"OFF"},null,8,["checked"])]),_:1}))}}),O=`<template>
  <Space direction="vertical" size="middle">
    <Switch v-model:checked="checked1" checked-children="开启" un-checked-children="关闭" />
    <Switch v-model:checked="checked2" checked-children="✓" un-checked-children="✗" />
    <Switch v-model:checked="checked3" checked-children="ON" un-checked-children="OFF" />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Space, Switch } from '@hmfw/ant-design'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
<\/script>
`,I={style:{display:"flex","flex-direction":"column",gap:"16px"}},P={style:{display:"flex",gap:"8px"}},T={style:{display:"flex","align-items":"center",gap:"8px"}},_=m({__name:"SwitchLoading",setup(h){const o=d(!1),p=d(!1),i=n=>{p.value=!0,setTimeout(()=>{p.value=!1,o.value=n},1500)};return(n,s)=>(k(),f("div",I,[t("div",P,[e(c(l),{checked:!0,loading:""}),e(c(l),{checked:!1,loading:""})]),t("div",T,[e(c(l),{checked:o.value,"onUpdate:checked":s[0]||(s[0]=a=>o.value=a),loading:p.value,onChange:i},null,8,["checked","loading"]),t("span",null,x(p.value?"切换中...":o.value?"已开启":"已关闭"),1)])]))}}),D=`<template>
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
`,A={style:{display:"flex","flex-direction":"column",gap:"16px"}},V={style:{display:"flex","align-items":"center",gap:"16px"}},W={style:{display:"flex","align-items":"center",gap:"16px"}},L=m({__name:"SwitchSize",setup(h){const o=d(!0),p=d(!0);return(i,n)=>(k(),f("div",A,[t("div",V,[e(c(l),{checked:o.value,"onUpdate:checked":n[0]||(n[0]=s=>o.value=s)},null,8,["checked"]),n[3]||(n[3]=t("span",null,"默认大小",-1))]),t("div",W,[e(c(l),{checked:p.value,"onUpdate:checked":n[1]||(n[1]=s=>p.value=s),size:"small"},null,8,["checked"]),e(c(l),{checked:p.value,"onUpdate:checked":n[2]||(n[2]=s=>p.value=s),size:"small","checked-children":"on","un-checked-children":"off"},null,8,["checked"]),n[4]||(n[4]=t("span",null,"小号开关",-1))])]))}}),M=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; align-items: center; gap: 16px">
      <Switch v-model:checked="checked1" />
      <span>默认大小</span>
    </div>
    <div style="display: flex; align-items: center; gap: 16px">
      <Switch v-model:checked="checked2" size="small" />
      <Switch v-model:checked="checked2" size="small" checked-children="on" un-checked-children="off" />
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
`,R={class:"markdown-body"},J={__name:"switch",setup(h,{expose:o}){return o({frontmatter:{}}),(i,n)=>{const s=y("DemoBlock");return k(),f("div",R,[n[0]||(n[0]=t("h1",{id:"switch-开关",tabindex:"-1"},"Switch 开关",-1)),n[1]||(n[1]=t("p",null,"开关选择器。",-1)),n[2]||(n[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("ul",null,[t("li",null,"需要表示开关状态/两种状态之间的切换时。"),t("li",null,"和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),n[4]||(n[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=t("p",null,"最简单的用法。",-1)),e(s,{title:"基础用法",source:c(z)},{default:r(()=>[e(C)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"文字和图标",tabindex:"-1"},"文字和图标",-1)),n[8]||(n[8]=t("p",null,"带有文字和图标的开关。",-1)),e(s,{title:"文字和图标",source:c(O)},{default:r(()=>[e($)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"加载中",tabindex:"-1"},"加载中",-1)),n[10]||(n[10]=t("p",null,"标识开关操作仍在执行中。",-1)),e(s,{title:"加载中",source:c(D)},{default:r(()=>[e(_)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"不同尺寸",tabindex:"-1"},"不同尺寸",-1)),n[12]||(n[12]=t("p",null,[t("code",null,'size="small"'),g(" 表示小号开关。")],-1)),e(s,{title:"不同尺寸",source:c(M)},{default:r(()=>[e(L)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[14]||(n[14]=t("p",null,[g("通过 "),t("code",null,"classNames"),g(" / "),t("code",null,"styles"),g(" 对根容器、手柄、加载图标、内部文字等子元素做细粒度样式控制。")],-1)),e(s,{title:"语义化 className 与 style",source:c(B)},{default:r(()=>[e(U)]),_:1},8,["source"]),n[15]||(n[15]=S(`<h2 id="api" tabindex="-1">API</h2><h3 id="switch-props" tabindex="-1">Switch Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>loading</td><td>加载中的开关</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>开关大小</td><td><code>&#39;default&#39; | &#39;small&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>checkedChildren</td><td>选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td><td><code>string | VNode</code></td><td>-</td></tr><tr><td>autoFocus</td><td>组件自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>id</td><td>组件的 id</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>组件的 title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIndex</td><td>组件的 tab index</td><td><code>number</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SwitchClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>SwitchStyles</code></td><td>-</td></tr></tbody></table><h3 id="switch-events" tabindex="-1">Switch Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(checked: boolean, event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获取焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr></tbody></table><h3 id="switch-slots" tabindex="-1">Switch Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>checkedChildren</td><td>选中时的内容</td></tr><tr><td>unCheckedChildren</td><td>非选中时的内容</td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Switch 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>classNames.root</code> 会与组件内置的状态类名（如 <code>.hmfw-switch-checked</code>、<code>.hmfw-switch-loading</code>）合并</li><li><code>checked</code> 和 <code>unchecked</code> 对应开关内部的两个子内容节点，仅在设置 <code>checkedChildren</code> / <code>unCheckedChildren</code> 时渲染</li><li><code>loadingIcon</code> 仅在 <code>loading</code> 状态时渲染在 <code>handle</code> 内部</li><li>自定义 <code>root</code> 的尺寸时，可能需要同步调整 <code>handle</code> 的位置和尺寸以保持视觉协调</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Switch 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><h3 id="全局-token" tabindex="-1">全局 Token</h3><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色，用于选中状态的背景色和加载图标边框色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-motion-duration-mid</code></td><td>背景、内容切换的过渡动画时长</td><td><code>0.2s</code></td></tr></tbody></table><h3 id="组件-token" tabindex="-1">组件 Token</h3><p>组件专属变量定义在 <code>.hmfw-switch</code> 上，可直接覆盖以定制单个组件的尺寸与样式。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-switch-handle-bg</code></td><td>手柄背景色</td><td><code>#fff</code></td></tr><tr><td><code>--hmfw-switch-handle-shadow</code></td><td>手柄阴影</td><td><code>0 2px 4px 0 rgba(0, 35, 11, 0.2)</code></td></tr><tr><td><code>--hmfw-switch-handle-size</code></td><td>默认尺寸手柄大小</td><td><code>18px</code></td></tr><tr><td><code>--hmfw-switch-handle-size-sm</code></td><td>小尺寸手柄大小</td><td><code>12px</code></td></tr><tr><td><code>--hmfw-switch-inner-max-margin</code></td><td>默认尺寸内容区较宽一侧内边距</td><td><code>24px</code></td></tr><tr><td><code>--hmfw-switch-inner-max-margin-sm</code></td><td>小尺寸内容区较宽一侧内边距</td><td><code>18px</code></td></tr><tr><td><code>--hmfw-switch-inner-min-margin</code></td><td>默认尺寸内容区较窄一侧内边距</td><td><code>9px</code></td></tr><tr><td><code>--hmfw-switch-inner-min-margin-sm</code></td><td>小尺寸内容区较窄一侧内边距</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-switch-track-height</code></td><td>默认尺寸轨道高度</td><td><code>22px</code></td></tr><tr><td><code>--hmfw-switch-track-height-sm</code></td><td>小尺寸轨道高度</td><td><code>16px</code></td></tr><tr><td><code>--hmfw-switch-track-min-width</code></td><td>默认尺寸轨道最小宽度</td><td><code>44px</code></td></tr><tr><td><code>--hmfw-switch-track-min-width-sm</code></td><td>小尺寸轨道最小宽度</td><td><code>28px</code></td></tr><tr><td><code>--hmfw-switch-track-padding</code></td><td>轨道内边距（手柄与边缘间距）</td><td><code>2px</code></td></tr></tbody></table>`,29))])}}};export{J as default};
