import{m as T,L as v,l as n,B as y,d as m,y as p,i as b,I as l,P as a,k as o,f as i,F as B,D as S,H as P,E as D,j as E}from"./index-BZxHTh1S.js";import{c as C}from"./cls-S9IiI6wd.js";const I=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple","success","processing","error","warning","default"],s=T({name:"Tag",props:{color:String,closable:Boolean,closeIcon:Object,bordered:{type:Boolean,default:!0},icon:Object,href:String,target:String,disabled:Boolean},emits:["close"],setup(d,{slots:g,emit:e}){const r=v("tag"),t=y(!0),u=m(()=>d.color?I.includes(d.color):!1),c=m(()=>C(r,{[`${r}-${d.color}`]:u.value||void 0,[`${r}-has-color`]:d.color&&!u.value||void 0,[`${r}-borderless`]:!d.bordered||void 0,[`${r}-hidden`]:!t.value||void 0,[`${r}-disabled`]:d.disabled||void 0})),h=m(()=>d.color&&!u.value&&!d.disabled?{backgroundColor:d.color}:{}),w=f=>{d.disabled||(f.stopPropagation(),e("close",f),!f.defaultPrevented&&(t.value=!1))},$=f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),f.currentTarget.click())};return()=>{if(!t.value)return null;const f=d.icon,k=d.closeIcon,_=d.href?"a":"span";return n(_,{class:c.value,style:h.value,href:d.href&&!d.disabled?d.href:void 0,target:d.href?d.target:void 0,"aria-disabled":d.disabled||void 0},{default:()=>{var x;return[d.icon&&n(f,{class:`${r}-icon`},null),(x=g.default)==null?void 0:x.call(g),d.closable&&n("span",{class:`${r}-close-icon`,onClick:w,onKeydown:$,role:"button",tabindex:d.disabled?-1:0,"aria-label":"close","aria-disabled":d.disabled||void 0},[k?n(k,null,null):"×"])]}})}}}),L=T({name:"CheckableTag",props:{checked:Boolean},emits:["change","update:checked"],setup(d,{slots:g,emit:e}){const r=v("tag"),t=m(()=>C(r,`${r}-checkable`,{[`${r}-checkable-checked`]:d.checked})),u=()=>{const c=!d.checked;e("update:checked",c),e("change",c)};return()=>{var c;return n("span",{class:t.value,onClick:u},[(c=g.default)==null?void 0:c.call(g)])}}}),M={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},N=T({__name:"TagBasic",setup(d){function g(){console.log("关闭标签")}return(e,r)=>(p(),b("div",M,[n(l(s),null,{default:a(()=>[...r[0]||(r[0]=[o("Tag 1",-1)])]),_:1}),n(l(s),null,{default:a(()=>[...r[1]||(r[1]=[i("a",{href:"https://github.com/ant-design/ant-design"},"Link",-1)])]),_:1}),n(l(s),{closable:"",onClose:g},{default:a(()=>[...r[2]||(r[2]=[o("Tag 2",-1)])]),_:1}),n(l(s),{closable:"",bordered:!1},{default:a(()=>[...r[3]||(r[3]=[o("Tag 3",-1)])]),_:1})]))}}),O=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design">Link</a>
    </Tag>
    <Tag closable @close="onClose">Tag 2</Tag>
    <Tag closable :bordered="false">Tag 3</Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'

function onClose() {
  console.log('关闭标签')
}
<\/script>
`,V={style:{display:"flex",gap:"8px"}},j=T({__name:"TagCheckable",setup(d){const g=["Movies","Books","Music","Sports"],e=y(["Books"]);function r(t,u){u?e.value=[...e.value,t]:e.value=e.value.filter(c=>c!==t)}return(t,u)=>(p(),b("div",V,[(p(),b(B,null,S(g,c=>n(l(L),{key:c,checked:e.value.includes(c),onChange:h=>r(c,h)},{default:a(()=>[o(P(c),1)]),_:2},1032,["checked","onChange"])),64))]))}}),F=`<template>
  <div style="display: flex; gap: 8px;">
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
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  }
}
<\/script>
`,K={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},R=T({__name:"TagCustomColor",setup(d){return(g,e)=>(p(),b("div",K,[n(l(s),{color:"#f50"},{default:a(()=>[...e[0]||(e[0]=[o("#f50",-1)])]),_:1}),n(l(s),{color:"#2db7f5"},{default:a(()=>[...e[1]||(e[1]=[o("#2db7f5",-1)])]),_:1}),n(l(s),{color:"#87d068"},{default:a(()=>[...e[2]||(e[2]=[o("#87d068",-1)])]),_:1}),n(l(s),{color:"#108ee9"},{default:a(()=>[...e[3]||(e[3]=[o("#108ee9",-1)])]),_:1})]))}}),A=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tag color="#f50">#f50</Tag>
    <Tag color="#2db7f5">#2db7f5</Tag>
    <Tag color="#87d068">#87d068</Tag>
    <Tag color="#108ee9">#108ee9</Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'
<\/script>
`,H={style:{display:"flex",gap:"8px","align-items":"center","flex-wrap":"wrap"}},W=T({__name:"TagLinkDisabled",setup(d){return(g,e)=>(p(),b("div",H,[n(l(s),{href:"https://ant.design",target:"_blank"},{default:a(()=>[...e[0]||(e[0]=[o("链接标签",-1)])]),_:1}),n(l(s),{disabled:""},{default:a(()=>[...e[1]||(e[1]=[o("禁用标签",-1)])]),_:1}),n(l(s),{disabled:"",closable:""},{default:a(()=>[...e[2]||(e[2]=[o("禁用且不可关闭",-1)])]),_:1})]))}}),q=`<template>
  <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
    <Tag href="https://ant.design" target="_blank">链接标签</Tag>
    <Tag disabled>禁用标签</Tag>
    <Tag disabled closable>禁用且不可关闭</Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'
<\/script>
`,z={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},G=T({__name:"TagPresetColor",setup(d){return(g,e)=>(p(),b("div",z,[n(l(s),{color:"magenta"},{default:a(()=>[...e[0]||(e[0]=[o("magenta",-1)])]),_:1}),n(l(s),{color:"red"},{default:a(()=>[...e[1]||(e[1]=[o("red",-1)])]),_:1}),n(l(s),{color:"volcano"},{default:a(()=>[...e[2]||(e[2]=[o("volcano",-1)])]),_:1}),n(l(s),{color:"orange"},{default:a(()=>[...e[3]||(e[3]=[o("orange",-1)])]),_:1}),n(l(s),{color:"gold"},{default:a(()=>[...e[4]||(e[4]=[o("gold",-1)])]),_:1}),n(l(s),{color:"lime"},{default:a(()=>[...e[5]||(e[5]=[o("lime",-1)])]),_:1}),n(l(s),{color:"green"},{default:a(()=>[...e[6]||(e[6]=[o("green",-1)])]),_:1}),n(l(s),{color:"cyan"},{default:a(()=>[...e[7]||(e[7]=[o("cyan",-1)])]),_:1}),n(l(s),{color:"blue"},{default:a(()=>[...e[8]||(e[8]=[o("blue",-1)])]),_:1}),n(l(s),{color:"geekblue"},{default:a(()=>[...e[9]||(e[9]=[o("geekblue",-1)])]),_:1}),n(l(s),{color:"purple"},{default:a(()=>[...e[10]||(e[10]=[o("purple",-1)])]),_:1})]))}}),J=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'
<\/script>
`,Q={class:"markdown-body"},Y={__name:"tag",setup(d,{expose:g}){return g({frontmatter:{}}),(r,t)=>{const u=D("DemoBlock");return p(),b("div",Q,[t[0]||(t[0]=i("h1",{id:"tag-",tabindex:"-1"},"Tag 标签",-1)),t[1]||(t[1]=i("p",null,"进行标记和分类的小标签。",-1)),t[2]||(t[2]=i("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=i("ul",null,[i("li",null,"用于标记事物的属性和维度"),i("li",null,"进行分类")],-1)),t[4]||(t[4]=i("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=i("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=i("p",null,"基本标签的用法，可以通过添加 closable 变为可关闭标签。",-1)),n(u,{title:"基础用法",source:l(O)},{default:a(()=>[n(N)]),_:1},8,["source"]),t[7]||(t[7]=i("h3",{id:"-3",tabindex:"-1"},"预设颜色",-1)),t[8]||(t[8]=i("p",null,"我们添加了多种预设色彩的标签样式，用作不同场景使用。",-1)),n(u,{title:"预设颜色",source:l(J)},{default:a(()=>[n(G)]),_:1},8,["source"]),t[9]||(t[9]=i("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=i("p",null,"可以自定义标签颜色。",-1)),n(u,{title:"自定义颜色",source:l(A)},{default:a(()=>[n(R)]),_:1},8,["source"]),t[11]||(t[11]=i("h3",{id:"-5",tabindex:"-1"},"可选中标签",-1)),t[12]||(t[12]=i("p",null,"可通过 CheckableTag 实现类似 Checkbox 的效果。",-1)),n(u,{title:"可选中标签",source:l(F)},{default:a(()=>[n(j)]),_:1},8,["source"]),t[13]||(t[13]=i("h3",{id:"-6",tabindex:"-1"},"链接与禁用",-1)),t[14]||(t[14]=i("p",null,[o("通过 "),i("code",null,"href"),o(" 渲染为链接，通过 "),i("code",null,"disabled"),o(" 禁用标签。")],-1)),n(u,{title:"链接与禁用",source:l(q)},{default:a(()=>[n(W)]),_:1},8,["source"]),t[15]||(t[15]=E('<h2 id="api" tabindex="-1">API</h2><h3 id="tag-props" tabindex="-1">Tag Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>标签色（预设色或自定义色值）</td><td><code>string</code></td><td>-</td></tr><tr><td>closable</td><td>标签是否可以关闭，关闭后自动隐藏</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标组件</td><td><code>Component</code></td><td>-</td></tr><tr><td>icon</td><td>标签图标组件</td><td><code>Component</code></td><td>-</td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>href</td><td>设置后标签渲染为 <code>&lt;a&gt;</code> 链接</td><td><code>string</code></td><td>-</td></tr><tr><td>target</td><td>链接打开方式，配合 <code>href</code></td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>禁用状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="tag-events" tabindex="-1">Tag Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭时的回调，调用 <code>e.preventDefault()</code> 可阻止自动隐藏</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="checkabletag-props" tabindex="-1">CheckableTag Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked</td><td>设置标签的选中状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="checkabletag-events" tabindex="-1">CheckableTag Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>点击标签时触发的回调</td><td><code>(checked: boolean) =&gt; void</code></td></tr></tbody></table>',9))])}}};export{Y as default};
