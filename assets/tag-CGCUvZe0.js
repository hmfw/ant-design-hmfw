import{k as b,I as v,j as o,c as m,w as p,g as f,G as n,M as l,i as r,d as g,F as y,A as w,E as $,z as B,B as S,h as _}from"./index-DvxRruME.js";import{c as C}from"./cls-S9IiI6wd.js";const P=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple","success","processing","error","warning","default"],s=b({name:"Tag",props:{color:String,closable:Boolean,closeIcon:Object,bordered:{type:Boolean,default:!0},icon:Object},emits:["close"],setup(d,{slots:i,emit:e}){const a=v("tag"),t=m(()=>d.color?P.includes(d.color):!1),u=m(()=>C(a,{[`${a}-${d.color}`]:t.value||void 0,[`${a}-has-color`]:d.color&&!t.value||void 0,[`${a}-borderless`]:!d.bordered||void 0})),c=m(()=>d.color&&!t.value?{backgroundColor:d.color}:{}),h=T=>{T.stopPropagation(),e("close",T)};return()=>{var x;const T=d.icon,k=d.closeIcon;return o("span",{class:u.value,style:c.value},[d.icon&&o(T,{class:`${a}-icon`},null),(x=i.default)==null?void 0:x.call(i),d.closable&&o("span",{class:`${a}-close-icon`,onClick:h,role:"button","aria-label":"close"},[k?o(k,null,null):"×"])])}}}),E=b({name:"CheckableTag",props:{checked:Boolean},emits:["change","update:checked"],setup(d,{slots:i,emit:e}){const a=v("tag"),t=m(()=>C(a,`${a}-checkable`,{[`${a}-checkable-checked`]:d.checked})),u=()=>{const c=!d.checked;e("update:checked",c),e("change",c)};return()=>{var c;return o("span",{class:t.value,onClick:u},[(c=i.default)==null?void 0:c.call(i)])}}}),M={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},I=b({__name:"TagBasic",setup(d){function i(){console.log("关闭标签")}return(e,a)=>(p(),f("div",M,[o(n(s),null,{default:l(()=>[...a[0]||(a[0]=[r("Tag 1",-1)])]),_:1}),o(n(s),null,{default:l(()=>[...a[1]||(a[1]=[g("a",{href:"https://github.com/ant-design/ant-design"},"Link",-1)])]),_:1}),o(n(s),{closable:"",onClose:i},{default:l(()=>[...a[2]||(a[2]=[r("Tag 2",-1)])]),_:1}),o(n(s),{closable:"",bordered:!1},{default:l(()=>[...a[3]||(a[3]=[r("Tag 3",-1)])]),_:1})]))}}),L=`<template>
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
`,N={style:{display:"flex",gap:"8px"}},O=b({__name:"TagCheckable",setup(d){const i=["Movies","Books","Music","Sports"],e=B(["Books"]);function a(t,u){u?e.value=[...e.value,t]:e.value=e.value.filter(c=>c!==t)}return(t,u)=>(p(),f("div",N,[(p(),f(y,null,w(i,c=>o(n(E),{key:c,checked:e.value.includes(c),onChange:h=>a(c,h)},{default:l(()=>[r($(c),1)]),_:2},1032,["checked","onChange"])),64))]))}}),V=`<template>
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
`,j={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},D=b({__name:"TagCustomColor",setup(d){return(i,e)=>(p(),f("div",j,[o(n(s),{color:"#f50"},{default:l(()=>[...e[0]||(e[0]=[r("#f50",-1)])]),_:1}),o(n(s),{color:"#2db7f5"},{default:l(()=>[...e[1]||(e[1]=[r("#2db7f5",-1)])]),_:1}),o(n(s),{color:"#87d068"},{default:l(()=>[...e[2]||(e[2]=[r("#87d068",-1)])]),_:1}),o(n(s),{color:"#108ee9"},{default:l(()=>[...e[3]||(e[3]=[r("#108ee9",-1)])]),_:1})]))}}),A=`<template>
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
`,F={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},R=b({__name:"TagPresetColor",setup(d){return(i,e)=>(p(),f("div",F,[o(n(s),{color:"magenta"},{default:l(()=>[...e[0]||(e[0]=[r("magenta",-1)])]),_:1}),o(n(s),{color:"red"},{default:l(()=>[...e[1]||(e[1]=[r("red",-1)])]),_:1}),o(n(s),{color:"volcano"},{default:l(()=>[...e[2]||(e[2]=[r("volcano",-1)])]),_:1}),o(n(s),{color:"orange"},{default:l(()=>[...e[3]||(e[3]=[r("orange",-1)])]),_:1}),o(n(s),{color:"gold"},{default:l(()=>[...e[4]||(e[4]=[r("gold",-1)])]),_:1}),o(n(s),{color:"lime"},{default:l(()=>[...e[5]||(e[5]=[r("lime",-1)])]),_:1}),o(n(s),{color:"green"},{default:l(()=>[...e[6]||(e[6]=[r("green",-1)])]),_:1}),o(n(s),{color:"cyan"},{default:l(()=>[...e[7]||(e[7]=[r("cyan",-1)])]),_:1}),o(n(s),{color:"blue"},{default:l(()=>[...e[8]||(e[8]=[r("blue",-1)])]),_:1}),o(n(s),{color:"geekblue"},{default:l(()=>[...e[9]||(e[9]=[r("geekblue",-1)])]),_:1}),o(n(s),{color:"purple"},{default:l(()=>[...e[10]||(e[10]=[r("purple",-1)])]),_:1})]))}}),z=`<template>
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
`,G={class:"markdown-body"},J={__name:"tag",setup(d,{expose:i}){return i({frontmatter:{}}),(a,t)=>{const u=S("DemoBlock");return p(),f("div",G,[t[0]||(t[0]=g("h1",{id:"tag-",tabindex:"-1"},"Tag 标签",-1)),t[1]||(t[1]=g("p",null,"进行标记和分类的小标签。",-1)),t[2]||(t[2]=g("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=g("ul",null,[g("li",null,"用于标记事物的属性和维度"),g("li",null,"进行分类")],-1)),t[4]||(t[4]=g("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=g("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=g("p",null,"基本标签的用法，可以通过添加 closable 变为可关闭标签。",-1)),o(u,{title:"基础用法",source:n(L)},{default:l(()=>[o(I)]),_:1},8,["source"]),t[7]||(t[7]=g("h3",{id:"-3",tabindex:"-1"},"预设颜色",-1)),t[8]||(t[8]=g("p",null,"我们添加了多种预设色彩的标签样式，用作不同场景使用。",-1)),o(u,{title:"预设颜色",source:n(z)},{default:l(()=>[o(R)]),_:1},8,["source"]),t[9]||(t[9]=g("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=g("p",null,"可以自定义标签颜色。",-1)),o(u,{title:"自定义颜色",source:n(A)},{default:l(()=>[o(D)]),_:1},8,["source"]),t[11]||(t[11]=g("h3",{id:"-5",tabindex:"-1"},"可选中标签",-1)),t[12]||(t[12]=g("p",null,"可通过 CheckableTag 实现类似 Checkbox 的效果。",-1)),o(u,{title:"可选中标签",source:n(V)},{default:l(()=>[o(O)]),_:1},8,["source"]),t[13]||(t[13]=_('<h2 id="api" tabindex="-1">API</h2><h3 id="tag-props" tabindex="-1">Tag Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>标签色</td><td><code>string</code></td><td>-</td></tr><tr><td>closable</td><td>标签是否可以关闭</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="tag-events" tabindex="-1">Tag Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击标签时的回调</td><td><code>(e: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="checkabletag-props" tabindex="-1">CheckableTag Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked</td><td>设置标签的选中状态</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="checkabletag-events" tabindex="-1">CheckableTag Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>点击标签时触发的回调</td><td><code>(checked: boolean) =&gt; void</code></td></tr></tbody></table>',9))])}}};export{J as default};
