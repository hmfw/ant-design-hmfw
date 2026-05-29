import{B as i}from"./Button-CtozVOI9.js";import{k as f,w as s,g as p,j as e,G as n,M as l,i as o,d as a,z as x,B as b,h as y}from"./index-DvxRruME.js";import{S as B,C as k,a as c}from"./icons-CgCOAJDO.js";import"./cls-S9IiI6wd.js";const D={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},v=f({__name:"ButtonBasic",setup(u){return(r,t)=>(s(),p("div",D,[e(n(i),{type:"primary"},{default:l(()=>[...t[0]||(t[0]=[o("Primary Button",-1)])]),_:1}),e(n(i),null,{default:l(()=>[...t[1]||(t[1]=[o("Default Button",-1)])]),_:1}),e(n(i),{type:"dashed"},{default:l(()=>[...t[2]||(t[2]=[o("Dashed Button",-1)])]),_:1}),e(n(i),{type:"text"},{default:l(()=>[...t[3]||(t[3]=[o("Text Button",-1)])]),_:1}),e(n(i),{type:"link"},{default:l(()=>[...t[4]||(t[4]=[o("Link Button",-1)])]),_:1})]))}}),_=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,h={style:{display:"flex","flex-direction":"column",gap:"8px"}},w=f({__name:"ButtonBlock",setup(u){return(r,t)=>(s(),p("div",h,[e(n(i),{type:"primary",block:""},{default:l(()=>[...t[0]||(t[0]=[o("Primary Block",-1)])]),_:1}),e(n(i),{block:""},{default:l(()=>[...t[1]||(t[1]=[o("Default Block",-1)])]),_:1}),e(n(i),{type:"dashed",block:""},{default:l(()=>[...t[2]||(t[2]=[o("Dashed Block",-1)])]),_:1})]))}}),S=`<template>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <Button type="primary" block>Primary Block</Button>
    <Button block>Default Block</Button>
    <Button type="dashed" block>Dashed Block</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,C={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},$=f({__name:"ButtonDanger",setup(u){return(r,t)=>(s(),p("div",C,[e(n(i),{type:"primary",danger:""},{default:l(()=>[...t[0]||(t[0]=[o("Primary Danger",-1)])]),_:1}),e(n(i),{danger:""},{default:l(()=>[...t[1]||(t[1]=[o("Default Danger",-1)])]),_:1}),e(n(i),{type:"text",danger:""},{default:l(()=>[...t[2]||(t[2]=[o("Text Danger",-1)])]),_:1}),e(n(i),{type:"link",danger:""},{default:l(()=>[...t[3]||(t[3]=[o("Link Danger",-1)])]),_:1})]))}}),L=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button type="primary" danger>Primary Danger</Button>
    <Button danger>Default Danger</Button>
    <Button type="text" danger>Text Danger</Button>
    <Button type="link" danger>Link Danger</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,z={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},G=f({__name:"ButtonDisabled",setup(u){return(r,t)=>(s(),p("div",z,[e(n(i),{type:"primary",disabled:""},{default:l(()=>[...t[0]||(t[0]=[o("Primary Disabled",-1)])]),_:1}),e(n(i),{disabled:""},{default:l(()=>[...t[1]||(t[1]=[o("Default Disabled",-1)])]),_:1}),e(n(i),{type:"dashed",disabled:""},{default:l(()=>[...t[2]||(t[2]=[o("Dashed Disabled",-1)])]),_:1}),e(n(i),{type:"text",disabled:""},{default:l(()=>[...t[3]||(t[3]=[o("Text Disabled",-1)])]),_:1}),e(n(i),{type:"link",disabled:""},{default:l(()=>[...t[4]||(t[4]=[o("Link Disabled",-1)])]),_:1})]))}}),P=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button type="primary" disabled>Primary Disabled</Button>
    <Button disabled>Default Disabled</Button>
    <Button type="dashed" disabled>Dashed Disabled</Button>
    <Button type="text" disabled>Text Disabled</Button>
    <Button type="link" disabled>Link Disabled</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,O={style:{padding:"16px",background:"#1677ff"}},T={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},I=f({__name:"ButtonGhost",setup(u){return(r,t)=>(s(),p("div",O,[a("div",T,[e(n(i),{type:"primary",ghost:""},{default:l(()=>[...t[0]||(t[0]=[o("Primary Ghost",-1)])]),_:1}),e(n(i),{ghost:""},{default:l(()=>[...t[1]||(t[1]=[o("Default Ghost",-1)])]),_:1}),e(n(i),{type:"dashed",ghost:""},{default:l(()=>[...t[2]||(t[2]=[o("Dashed Ghost",-1)])]),_:1})])]))}}),M=`<template>
  <div style="padding: 16px; background: #1677ff;">
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <Button type="primary" ghost>Primary Ghost</Button>
      <Button ghost>Default Ghost</Button>
      <Button type="dashed" ghost>Dashed Ghost</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,N={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},V=f({__name:"ButtonIcon",setup(u){return(r,t)=>(s(),p("div",N,[e(n(i),{type:"primary",icon:n(B)},{default:l(()=>[...t[0]||(t[0]=[o("Search",-1)])]),_:1},8,["icon"]),e(n(i),{type:"primary",icon:n(B)},null,8,["icon"]),e(n(i),{type:"primary",icon:n(k)},{default:l(()=>[...t[1]||(t[1]=[o("Confirm",-1)])]),_:1},8,["icon"]),e(n(i),{type:"dashed",icon:n(c)},{default:l(()=>[...t[2]||(t[2]=[o("Cancel",-1)])]),_:1},8,["icon"])]))}}),E=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button type="primary" :icon="SearchOutlined">Search</Button>
    <Button type="primary" :icon="SearchOutlined" />
    <Button type="primary" :icon="CheckOutlined">Confirm</Button>
    <Button type="dashed" :icon="CloseOutlined">Cancel</Button>
  </div>
</template>

<script setup lang="ts">
import { Button, SearchOutlined, CheckOutlined, CloseOutlined } from 'ant-design-hmfw'
<\/script>
`,j={style:{display:"flex",gap:"8px","flex-wrap":"wrap"}},A=f({__name:"ButtonLoading",setup(u){const r=x(!1),t=()=>{r.value=!0,setTimeout(()=>{r.value=!1},2e3)};return(g,d)=>(s(),p("div",j,[e(n(i),{type:"primary",loading:""},{default:l(()=>[...d[0]||(d[0]=[o("Loading",-1)])]),_:1}),e(n(i),{type:"primary",size:"small",loading:""},{default:l(()=>[...d[1]||(d[1]=[o("Loading",-1)])]),_:1}),e(n(i),{type:"primary",loading:r.value,onClick:t},{default:l(()=>[...d[2]||(d[2]=[o(" Click me! ",-1)])]),_:1},8,["loading"])]))}}),q=`<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button type="primary" loading>Loading</Button>
    <Button type="primary" size="small" loading>Loading</Button>
    <Button type="primary" :loading="loading" @click="handleClick">
      Click me!
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-hmfw'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
<\/script>
`,F={style:{display:"flex",gap:"8px","align-items":"center"}},H=f({__name:"ButtonSize",setup(u){return(r,t)=>(s(),p("div",F,[e(n(i),{type:"primary",size:"large"},{default:l(()=>[...t[0]||(t[0]=[o("Large",-1)])]),_:1}),e(n(i),{type:"primary"},{default:l(()=>[...t[1]||(t[1]=[o("Middle",-1)])]),_:1}),e(n(i),{type:"primary",size:"small"},{default:l(()=>[...t[2]||(t[2]=[o("Small",-1)])]),_:1})]))}}),J=`<template>
  <div style="display: flex; gap: 8px; align-items: center;">
    <Button type="primary" size="large">Large</Button>
    <Button type="primary">Middle</Button>
    <Button type="primary" size="small">Small</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
<\/script>
`,K={class:"markdown-body"},X={__name:"button",setup(u,{expose:r}){return r({frontmatter:{}}),(g,d)=>{const m=b("DemoBlock");return s(),p("div",K,[d[0]||(d[0]=y('<h1 id="button-" tabindex="-1">Button 按钮</h1><p>按钮用于开始一个即时操作。</p><h2 id="" tabindex="-1">何时使用</h2><p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p><p>在 ant-design-hmfw 中我们提供了五种按钮。</p><ul><li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li><li>默认按钮：用于没有主次之分的一组行动点。</li><li>虚线按钮：常用于添加操作。</li><li>文本按钮：用于最次级的行动点。</li><li>链接按钮：一般用于链接，即导航至某位置。</li></ul><p>以及四种状态属性与上面配合使用。</p><ul><li>危险：删除/移动/修改权限等危险操作，一般需要二次确认。</li><li>禁用：行动点不可用的时候，一般需要文案解释。</li><li>加载中：用于异步操作等待反馈的时候，也可以避免多次提交。</li><li>Ghost：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">按钮类型</h3><p>按钮有五种类型：主按钮、默认按钮、虚线按钮、文本按钮和链接按钮。</p>',11)),e(m,{title:"按钮类型",source:n(_)},{default:l(()=>[e(v)]),_:1},8,["source"]),d[1]||(d[1]=a("h3",{id:"-3",tabindex:"-1"},"按钮尺寸",-1)),d[2]||(d[2]=a("p",null,"按钮有大、中、小三种尺寸。",-1)),d[3]||(d[3]=a("p",null,[o("通过设置 "),a("code",null,"size"),o(" 为 "),a("code",null,"large"),o(),a("code",null,"small"),o(" 分别把按钮设为大、小尺寸。若不设置 "),a("code",null,"size"),o("，则尺寸为中。")],-1)),e(m,{title:"按钮尺寸",source:n(J)},{default:l(()=>[e(H)]),_:1},8,["source"]),d[4]||(d[4]=a("h3",{id:"-4",tabindex:"-1"},"禁用状态",-1)),d[5]||(d[5]=a("p",null,[o("添加 "),a("code",null,"disabled"),o(" 属性即可让按钮处于不可用状态，同时按钮样式也会改变。")],-1)),e(m,{title:"禁用状态",source:n(P)},{default:l(()=>[e(G)]),_:1},8,["source"]),d[6]||(d[6]=a("h3",{id:"-5",tabindex:"-1"},"加载状态",-1)),d[7]||(d[7]=a("p",null,[o("添加 "),a("code",null,"loading"),o(" 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。")],-1)),e(m,{title:"加载状态",source:n(q)},{default:l(()=>[e(A)]),_:1},8,["source"]),d[8]||(d[8]=a("h3",{id:"-6",tabindex:"-1"},"危险按钮",-1)),d[9]||(d[9]=a("p",null,"危险按钮用于删除/移动/修改权限等危险操作。",-1)),e(m,{title:"危险按钮",source:n(L)},{default:l(()=>[e($)]),_:1},8,["source"]),d[10]||(d[10]=a("h3",{id:"block-",tabindex:"-1"},"Block 按钮",-1)),d[11]||(d[11]=a("p",null,[a("code",null,"block"),o(" 属性将使按钮适合其父宽度。")],-1)),e(m,{title:"Block 按钮",source:n(S)},{default:l(()=>[e(w)]),_:1},8,["source"]),d[12]||(d[12]=a("h3",{id:"ghost-",tabindex:"-1"},"Ghost 按钮",-1)),d[13]||(d[13]=a("p",null,"幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。",-1)),e(m,{title:"Ghost 按钮",source:n(M)},{default:l(()=>[e(I)]),_:1},8,["source"]),d[14]||(d[14]=a("h3",{id:"-7",tabindex:"-1"},"图标按钮",-1)),d[15]||(d[15]=a("p",null,[o("当需要在 Button 内嵌入 Icon 时，可以设置 "),a("code",null,"icon"),o(" 属性。")],-1)),e(m,{title:"图标按钮",source:n(E)},{default:l(()=>[e(V)]),_:1},8,["source"]),d[16]||(d[16]=y('<h2 id="api" tabindex="-1">API</h2><h3 id="button-props" tabindex="-1">Button Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>设置按钮类型</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;dashed&#39; | &#39;text&#39; | &#39;link&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>size</td><td>设置按钮大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>htmlType</td><td>设置 button 原生的 type 值</td><td><code>&#39;submit&#39; | &#39;button&#39; | &#39;reset&#39;</code></td><td><code>&#39;button&#39;</code></td></tr><tr><td>loading</td><td>设置按钮载入状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>设置按钮失效状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>danger</td><td>设置危险按钮</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>block</td><td>将按钮宽度调整为其父宽度的选项</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>ghost</td><td>幽灵属性，使按钮背景透明</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>icon</td><td>设置按钮的图标组件</td><td><code>object</code></td><td>-</td></tr></tbody></table><h3 id="button-events" tabindex="-1">Button Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击按钮时的回调</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr></tbody></table><h3 id="button-slots" tabindex="-1">Button Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>按钮内容</td></tr></tbody></table>',7))])}}};export{X as default};
