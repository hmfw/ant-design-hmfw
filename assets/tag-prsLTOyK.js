import{o as T,N as y,n as l,E as C,f as h,A as b,k as p,K as d,R as o,m as a,h as i,F as S,G as I,J as P,H as D,l as E}from"./index-C7r7ERgN.js";import{c as w}from"./cls-S9IiI6wd.js";const L=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple","success","processing","error","warning","default"],s=T({name:"Tag",props:{color:String,closable:Boolean,closeIcon:{type:[Object,Boolean,Function],default:void 0},bordered:{type:Boolean,default:!0},icon:Object,href:String,target:String,disabled:Boolean},emits:["close"],setup(n,{slots:g,emit:e}){const r=y("tag"),t=C(!0),c=h(()=>n.color?L.includes(n.color):!1),u=h(()=>w(r,{[`${r}-${n.color}`]:c.value||void 0,[`${r}-has-color`]:n.color&&!c.value||void 0,[`${r}-borderless`]:!n.bordered||void 0,[`${r}-hidden`]:!t.value||void 0,[`${r}-disabled`]:n.disabled||void 0})),k=h(()=>n.color&&!c.value&&!n.disabled?{backgroundColor:n.color}:{}),$=f=>{n.disabled||(f.stopPropagation(),e("close",f),!f.defaultPrevented&&(t.value=!1))},_=f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),f.currentTarget.click())},B=()=>{var m;const f=(m=g.closeIcon)==null?void 0:m.call(g);if(f)return f;if(n.closeIcon===void 0||n.closeIcon===!0)return"×";if(n.closeIcon===!1)return null;if(typeof n.closeIcon=="function")return n.closeIcon();const x=n.closeIcon;return l(x,null,null)};return()=>{if(!t.value)return null;const f=n.icon,x=n.href?"a":"span",m=n.closable&&n.closeIcon!==!1;return l(x,{class:u.value,style:k.value,href:n.href&&!n.disabled?n.href:void 0,target:n.href?n.target:void 0,"aria-disabled":n.disabled||void 0},{default:()=>{var v;return[n.icon&&l(f,{class:`${r}-icon`},null),(v=g.default)==null?void 0:v.call(g),m&&l("span",{class:`${r}-close-icon`,onClick:$,onKeydown:_,role:"button",tabindex:n.disabled?-1:0,"aria-label":"close","aria-disabled":n.disabled||void 0},[B()])]}})}}}),M=T({name:"CheckableTag",props:{checked:Boolean},emits:["change","update:checked"],setup(n,{slots:g,emit:e}){const r=y("tag"),t=h(()=>w(r,`${r}-checkable`,{[`${r}-checkable-checked`]:n.checked})),c=()=>{const u=!n.checked;e("update:checked",u),e("change",u)};return()=>{var u;return l("span",{class:t.value,onClick:c},[(u=g.default)==null?void 0:u.call(g)])}}}),N={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},O=T({__name:"TagBasic",setup(n){function g(){console.log("关闭标签")}return(e,r)=>(b(),p("div",N,[l(d(s),null,{default:o(()=>[...r[0]||(r[0]=[a("Tag 1",-1)])]),_:1}),l(d(s),null,{default:o(()=>[...r[1]||(r[1]=[i("a",{href:"https://github.com/ant-design/ant-design"},"Link",-1)])]),_:1}),l(d(s),{closable:"",onClose:g},{default:o(()=>[...r[2]||(r[2]=[a(" Tag 2 ",-1)])]),_:1}),l(d(s),{closable:"",bordered:!1},{default:o(()=>[...r[3]||(r[3]=[a(" Tag 3 ",-1)])]),_:1})]))}}),V=`<template>
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
`,F={style:{display:"flex",gap:"8px"}},K=T({__name:"TagCheckable",setup(n){const g=["Movies","Books","Music","Sports"],e=C(["Books"]);function r(t,c){c?e.value=[...e.value,t]:e.value=e.value.filter(u=>u!==t)}return(t,c)=>(b(),p("div",F,[(b(),p(S,null,I(g,u=>l(d(M),{key:u,checked:e.value.includes(u),onChange:k=>r(u,k)},{default:o(()=>[a(P(u),1)]),_:2},1032,["checked","onChange"])),64))]))}}),R=`<template>
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
`,j={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},A=T({__name:"TagCustomColor",setup(n){return(g,e)=>(b(),p("div",j,[l(d(s),{color:"#f50"},{default:o(()=>[...e[0]||(e[0]=[a(" #f50 ",-1)])]),_:1}),l(d(s),{color:"#2db7f5"},{default:o(()=>[...e[1]||(e[1]=[a(" #2db7f5 ",-1)])]),_:1}),l(d(s),{color:"#87d068"},{default:o(()=>[...e[2]||(e[2]=[a(" #87d068 ",-1)])]),_:1}),l(d(s),{color:"#108ee9"},{default:o(()=>[...e[3]||(e[3]=[a(" #108ee9 ",-1)])]),_:1})]))}}),G=`<template>
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
`,H={style:{display:"flex",gap:"8px","align-items":"center","flex-wrap":"wrap"}},J=T({__name:"TagLinkDisabled",setup(n){return(g,e)=>(b(),p("div",H,[l(d(s),{href:"https://ant.design",target:"_blank"},{default:o(()=>[...e[0]||(e[0]=[a(" 链接标签 ",-1)])]),_:1}),l(d(s),{disabled:""},{default:o(()=>[...e[1]||(e[1]=[a(" 禁用标签 ",-1)])]),_:1}),l(d(s),{disabled:"",closable:""},{default:o(()=>[...e[2]||(e[2]=[a(" 禁用且不可关闭 ",-1)])]),_:1})]))}}),W=`<template>
  <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap">
    <Tag href="https://ant.design" target="_blank"> 链接标签 </Tag>
    <Tag disabled> 禁用标签 </Tag>
    <Tag disabled closable> 禁用且不可关闭 </Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'
<\/script>
`,q={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},z=T({__name:"TagPresetColor",setup(n){return(g,e)=>(b(),p("div",q,[l(d(s),{color:"magenta"},{default:o(()=>[...e[0]||(e[0]=[a(" magenta ",-1)])]),_:1}),l(d(s),{color:"red"},{default:o(()=>[...e[1]||(e[1]=[a(" red ",-1)])]),_:1}),l(d(s),{color:"volcano"},{default:o(()=>[...e[2]||(e[2]=[a(" volcano ",-1)])]),_:1}),l(d(s),{color:"orange"},{default:o(()=>[...e[3]||(e[3]=[a(" orange ",-1)])]),_:1}),l(d(s),{color:"gold"},{default:o(()=>[...e[4]||(e[4]=[a(" gold ",-1)])]),_:1}),l(d(s),{color:"lime"},{default:o(()=>[...e[5]||(e[5]=[a(" lime ",-1)])]),_:1}),l(d(s),{color:"green"},{default:o(()=>[...e[6]||(e[6]=[a(" green ",-1)])]),_:1}),l(d(s),{color:"cyan"},{default:o(()=>[...e[7]||(e[7]=[a(" cyan ",-1)])]),_:1}),l(d(s),{color:"blue"},{default:o(()=>[...e[8]||(e[8]=[a(" blue ",-1)])]),_:1}),l(d(s),{color:"geekblue"},{default:o(()=>[...e[9]||(e[9]=[a(" geekblue ",-1)])]),_:1}),l(d(s),{color:"purple"},{default:o(()=>[...e[10]||(e[10]=[a(" purple ",-1)])]),_:1})]))}}),Q=`<template>
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
`,U={class:"markdown-body"},Z={__name:"tag",setup(n,{expose:g}){return g({frontmatter:{}}),(r,t)=>{const c=D("DemoBlock");return b(),p("div",U,[t[0]||(t[0]=i("h1",{id:"tag-",tabindex:"-1"},"Tag 标签",-1)),t[1]||(t[1]=i("p",null,"进行标记和分类的小标签。",-1)),t[2]||(t[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=i("ul",null,[i("li",null,"用于标记事物的属性和维度"),i("li",null,"进行分类")],-1)),t[4]||(t[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=i("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=i("p",null,"基本标签的用法，可以通过添加 closable 变为可关闭标签。",-1)),l(c,{title:"基础用法",source:d(V)},{default:o(()=>[l(O)]),_:1},8,["source"]),t[7]||(t[7]=i("h3",{id:"-3",tabindex:"-1"},"预设颜色",-1)),t[8]||(t[8]=i("p",null,"我们添加了多种预设色彩的标签样式，用作不同场景使用。",-1)),l(c,{title:"预设颜色",source:d(Q)},{default:o(()=>[l(z)]),_:1},8,["source"]),t[9]||(t[9]=i("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=i("p",null,"可以自定义标签颜色。",-1)),l(c,{title:"自定义颜色",source:d(G)},{default:o(()=>[l(A)]),_:1},8,["source"]),t[11]||(t[11]=i("h3",{id:"-5",tabindex:"-1"},"可选中标签",-1)),t[12]||(t[12]=i("p",null,"可通过 CheckableTag 实现类似 Checkbox 的效果。",-1)),l(c,{title:"可选中标签",source:d(R)},{default:o(()=>[l(K)]),_:1},8,["source"]),t[13]||(t[13]=i("h3",{id:"-6",tabindex:"-1"},"链接与禁用",-1)),t[14]||(t[14]=i("p",null,[a("通过 "),i("code",null,"href"),a(" 渲染为链接，通过 "),i("code",null,"disabled"),a(" 禁用标签。")],-1)),l(c,{title:"链接与禁用",source:d(W)},{default:o(()=>[l(J)]),_:1},8,["source"]),t[15]||(t[15]=E('<h2 id="api" tabindex="-1">API</h2><h3 id="tag-props" tabindex="-1">Tag Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>标签色（预设色或自定义色值）</td><td><code>string</code></td><td>-</td></tr><tr><td>closable</td><td>标签是否可以关闭，关闭后自动隐藏</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标组件</td><td><code>Component</code></td><td>-</td></tr><tr><td>icon</td><td>标签图标组件</td><td><code>Component</code></td><td>-</td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>href</td><td>设置后标签渲染为 <code>&lt;a&gt;</code> 链接</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式，配合 <code>href</code></td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="tag-events" tabindex="-1">Tag Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭时的回调，调用 <code>e.preventDefault()</code> 可阻止自动隐藏</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="checkabletag-props" tabindex="-1">CheckableTag Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked</td><td>设置标签的选中状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="checkabletag-events" tabindex="-1">CheckableTag Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>点击标签时触发的回调</td><td><code>(checked: boolean) =&gt; void</code></td></tr></tbody></table>',9))])}}};export{Z as default};
