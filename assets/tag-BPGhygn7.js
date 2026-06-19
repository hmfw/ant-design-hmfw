import{o as m,N as I,n as o,E as _,f as k,A as b,k as p,K as n,R as l,m as a,h as c,F as N,G as E,J as L,H as O,l as M}from"./index-Dxep-jrR.js";import{c as x}from"./cls-S9IiI6wd.js";const j=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple","success","processing","error","warning","default"],s=m({name:"Tag",props:{color:String,closable:Boolean,closeIcon:{type:[Object,Boolean,Function],default:void 0},bordered:{type:Boolean,default:!0},icon:Object,href:String,target:String,disabled:Boolean,classNames:Object,styles:Object},emits:["close"],setup(t,{slots:i,emit:e}){const r=I("tag"),d=_(!0),u=k(()=>t.color?j.includes(t.color):!1),f=k(()=>{var g;return x(r,{[`${r}-${t.color}`]:u.value||void 0,[`${r}-has-color`]:t.color&&!u.value||void 0,[`${r}-borderless`]:!t.bordered||void 0,[`${r}-hidden`]:!d.value||void 0,[`${r}-disabled`]:t.disabled||void 0},(g=t.classNames)==null?void 0:g.root)}),y=k(()=>{var T;const g={};return t.color&&!u.value&&!t.disabled&&(g.backgroundColor=t.color),{...g,...(T=t.styles)==null?void 0:T.root}}),B=g=>{t.disabled||(g.stopPropagation(),e("close",g),!g.defaultPrevented&&(d.value=!1))},P=g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),g.currentTarget.click())},D=()=>{var h;const g=(h=i.closeIcon)==null?void 0:h.call(i);if(g)return g;if(t.closeIcon===void 0||t.closeIcon===!0)return"×";if(t.closeIcon===!1)return null;if(typeof t.closeIcon=="function")return t.closeIcon();const T=t.closeIcon;return o(T,null,null)};return()=>{if(!d.value)return null;const g=t.icon,T=t.href?"a":"span",h=t.closable&&t.closeIcon!==!1;return o(T,{class:f.value,style:y.value,href:t.href&&!t.disabled?t.href:void 0,target:t.href?t.target:void 0,"aria-disabled":t.disabled||void 0},{default:()=>{var v,C,w,$,S;return[t.icon&&o(g,{class:x(`${r}-icon`,(v=t.classNames)==null?void 0:v.icon),style:(C=t.styles)==null?void 0:C.icon},null),(w=i.default)==null?void 0:w.call(i),h&&o("span",{class:x(`${r}-close-icon`,($=t.classNames)==null?void 0:$.closeIcon),style:(S=t.styles)==null?void 0:S.closeIcon,onClick:B,onKeydown:P,role:"button",tabindex:t.disabled?-1:0,"aria-label":"close","aria-disabled":t.disabled||void 0},[D()])]}})}}}),V=m({name:"CheckableTag",props:{checked:Boolean},emits:["change","update:checked"],setup(t,{slots:i,emit:e}){const r=I("tag"),d=k(()=>x(r,`${r}-checkable`,{[`${r}-checkable-checked`]:t.checked})),u=()=>{const f=!t.checked;e("update:checked",f),e("change",f)};return()=>{var f;return o("span",{class:d.value,onClick:u},[(f=i.default)==null?void 0:f.call(i)])}}}),F={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},K=m({__name:"TagBasic",setup(t){function i(){console.log("关闭标签")}return(e,r)=>(b(),p("div",F,[o(n(s),null,{default:l(()=>[...r[0]||(r[0]=[a("Tag 1",-1)])]),_:1}),o(n(s),null,{default:l(()=>[...r[1]||(r[1]=[c("a",{href:"https://github.com/ant-design/ant-design"},"Link",-1)])]),_:1}),o(n(s),{closable:"",onClose:i},{default:l(()=>[...r[2]||(r[2]=[a(" Tag 2 ",-1)])]),_:1}),o(n(s),{closable:"",bordered:!1},{default:l(()=>[...r[3]||(r[3]=[a(" Tag 3 ",-1)])]),_:1})]))}}),R=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design">Link</a>
    </Tag>
    <Tag closable @close="onClose"> Tag 2 </Tag>
    <Tag closable :bordered="false"> Tag 3 </Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'

function onClose() {
  console.log('关闭标签')
}
<\/script>
`,A={style:{display:"flex",gap:"8px"}},q=m({__name:"TagCheckable",setup(t){const i=["Movies","Books","Music","Sports"],e=_(["Books"]);function r(d,u){u?e.value=[...e.value,d]:e.value=e.value.filter(f=>f!==d)}return(d,u)=>(b(),p("div",A,[(b(),p(N,null,E(i,f=>o(n(V),{key:f,checked:e.value.includes(f),onChange:y=>r(f,y)},{default:l(()=>[a(L(f),1)]),_:2},1032,["checked","onChange"])),64))]))}}),G=`<template>
  <div style="display: flex; gap: 8px">
    <CheckableTag
      v-for="tag in tags"
      :key="tag"
      :checked="selectedTags.includes(tag)"
      @change="(checked) => handleChange(tag, checked)"
    >
      {{ tag }}
    </CheckableTag>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckableTag } from 'ant-design-hmfw'

const tags = ['Movies', 'Books', 'Music', 'Sports']
const selectedTags = ref<string[]>(['Books'])

function handleChange(tag: string, checked: boolean) {
  if (checked) {
    selectedTags.value = [...selectedTags.value, tag]
  } else {
    selectedTags.value = selectedTags.value.filter((t) => t !== tag)
  }
}
<\/script>
`,H={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},J=m({__name:"TagCustomColor",setup(t){return(i,e)=>(b(),p("div",H,[o(n(s),{color:"#f50"},{default:l(()=>[...e[0]||(e[0]=[a(" #f50 ",-1)])]),_:1}),o(n(s),{color:"#2db7f5"},{default:l(()=>[...e[1]||(e[1]=[a(" #2db7f5 ",-1)])]),_:1}),o(n(s),{color:"#87d068"},{default:l(()=>[...e[2]||(e[2]=[a(" #87d068 ",-1)])]),_:1}),o(n(s),{color:"#108ee9"},{default:l(()=>[...e[3]||(e[3]=[a(" #108ee9 ",-1)])]),_:1})]))}}),W=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tag color="#f50"> #f50 </Tag>
    <Tag color="#2db7f5"> #2db7f5 </Tag>
    <Tag color="#87d068"> #87d068 </Tag>
    <Tag color="#108ee9"> #108ee9 </Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'
<\/script>
`,z={style:{display:"flex",gap:"8px","align-items":"center","flex-wrap":"wrap"}},Q=m({__name:"TagLinkDisabled",setup(t){return(i,e)=>(b(),p("div",z,[o(n(s),{href:"https://ant.design",target:"_blank"},{default:l(()=>[...e[0]||(e[0]=[a(" 链接标签 ",-1)])]),_:1}),o(n(s),{disabled:""},{default:l(()=>[...e[1]||(e[1]=[a(" 禁用标签 ",-1)])]),_:1}),o(n(s),{disabled:"",closable:""},{default:l(()=>[...e[2]||(e[2]=[a(" 禁用且不可关闭 ",-1)])]),_:1})]))}}),U=`<template>
  <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap">
    <Tag href="https://ant.design" target="_blank"> 链接标签 </Tag>
    <Tag disabled> 禁用标签 </Tag>
    <Tag disabled closable> 禁用且不可关闭 </Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'
<\/script>
`,X={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},Y=m({__name:"TagPresetColor",setup(t){return(i,e)=>(b(),p("div",X,[o(n(s),{color:"magenta"},{default:l(()=>[...e[0]||(e[0]=[a(" magenta ",-1)])]),_:1}),o(n(s),{color:"red"},{default:l(()=>[...e[1]||(e[1]=[a(" red ",-1)])]),_:1}),o(n(s),{color:"volcano"},{default:l(()=>[...e[2]||(e[2]=[a(" volcano ",-1)])]),_:1}),o(n(s),{color:"orange"},{default:l(()=>[...e[3]||(e[3]=[a(" orange ",-1)])]),_:1}),o(n(s),{color:"gold"},{default:l(()=>[...e[4]||(e[4]=[a(" gold ",-1)])]),_:1}),o(n(s),{color:"lime"},{default:l(()=>[...e[5]||(e[5]=[a(" lime ",-1)])]),_:1}),o(n(s),{color:"green"},{default:l(()=>[...e[6]||(e[6]=[a(" green ",-1)])]),_:1}),o(n(s),{color:"cyan"},{default:l(()=>[...e[7]||(e[7]=[a(" cyan ",-1)])]),_:1}),o(n(s),{color:"blue"},{default:l(()=>[...e[8]||(e[8]=[a(" blue ",-1)])]),_:1}),o(n(s),{color:"geekblue"},{default:l(()=>[...e[9]||(e[9]=[a(" geekblue ",-1)])]),_:1}),o(n(s),{color:"purple"},{default:l(()=>[...e[10]||(e[10]=[a(" purple ",-1)])]),_:1})]))}}),Z=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Tag color="magenta"> magenta </Tag>
    <Tag color="red"> red </Tag>
    <Tag color="volcano"> volcano </Tag>
    <Tag color="orange"> orange </Tag>
    <Tag color="gold"> gold </Tag>
    <Tag color="lime"> lime </Tag>
    <Tag color="green"> green </Tag>
    <Tag color="cyan"> cyan </Tag>
    <Tag color="blue"> blue </Tag>
    <Tag color="geekblue"> geekblue </Tag>
    <Tag color="purple"> purple </Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'
<\/script>
`,ee={class:"markdown-body"},oe={__name:"tag",setup(t,{expose:i}){return i({frontmatter:{}}),(r,d)=>{const u=O("DemoBlock");return b(),p("div",ee,[d[0]||(d[0]=c("h1",{id:"tag-标签",tabindex:"-1"},"Tag 标签",-1)),d[1]||(d[1]=c("p",null,"进行标记和分类的小标签。",-1)),d[2]||(d[2]=c("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=c("ul",null,[c("li",null,"用于标记事物的属性和维度"),c("li",null,"进行分类")],-1)),d[4]||(d[4]=c("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=c("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),d[6]||(d[6]=c("p",null,"基本标签的用法，可以通过添加 closable 变为可关闭标签。",-1)),o(u,{title:"基础用法",source:n(R)},{default:l(()=>[o(K)]),_:1},8,["source"]),d[7]||(d[7]=c("h3",{id:"预设颜色",tabindex:"-1"},"预设颜色",-1)),d[8]||(d[8]=c("p",null,"我们添加了多种预设色彩的标签样式，用作不同场景使用。",-1)),o(u,{title:"预设颜色",source:n(Z)},{default:l(()=>[o(Y)]),_:1},8,["source"]),d[9]||(d[9]=c("h3",{id:"自定义颜色",tabindex:"-1"},"自定义颜色",-1)),d[10]||(d[10]=c("p",null,"可以自定义标签颜色。",-1)),o(u,{title:"自定义颜色",source:n(W)},{default:l(()=>[o(J)]),_:1},8,["source"]),d[11]||(d[11]=c("h3",{id:"可选中标签",tabindex:"-1"},"可选中标签",-1)),d[12]||(d[12]=c("p",null,"可通过 CheckableTag 实现类似 Checkbox 的效果。",-1)),o(u,{title:"可选中标签",source:n(G)},{default:l(()=>[o(q)]),_:1},8,["source"]),d[13]||(d[13]=c("h3",{id:"链接与禁用",tabindex:"-1"},"链接与禁用",-1)),d[14]||(d[14]=c("p",null,[a("通过 "),c("code",null,"href"),a(" 渲染为链接，通过 "),c("code",null,"disabled"),a(" 禁用标签。")],-1)),o(u,{title:"链接与禁用",source:n(U)},{default:l(()=>[o(Q)]),_:1},8,["source"]),d[15]||(d[15]=M('<h2 id="api" tabindex="-1">API</h2><h3 id="tag-props" tabindex="-1">Tag Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>标签色（预设色或自定义色值）</td><td><code>string</code></td><td>-</td></tr><tr><td>closable</td><td>标签是否可以关闭，关闭后自动隐藏</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标组件</td><td><code>Component</code></td><td>-</td></tr><tr><td>icon</td><td>标签图标组件</td><td><code>Component</code></td><td>-</td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>href</td><td>设置后标签渲染为 <code>&lt;a&gt;</code> 链接</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式，配合 <code>href</code></td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="tag-events" tabindex="-1">Tag Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭时的回调，调用 <code>e.preventDefault()</code> 可阻止自动隐藏</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="checkabletag-props" tabindex="-1">CheckableTag Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked</td><td>设置标签的选中状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="checkabletag-events" tabindex="-1">CheckableTag Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>点击标签时触发的回调</td><td><code>(checked: boolean) =&gt; void</code></td></tr></tbody></table><hr><p>Tag 是单元素透传组件，可直接使用原生 class 和 style attribute 进行样式定制。</p><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Tag 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用背景色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次级填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-fill-quaternary</code></td><td>四级填充色</td><td><code>rgba(0,0,0,0.02)</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr></tbody></table>',14))])}}};export{oe as default};
