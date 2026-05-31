import{S as s}from"./Spin-D-FOCMmS.js";import{m,y as o,g,I as i,P as r,f as n,B as S,i as f,l as e,E as b,j as x}from"./index-BZxHTh1S.js";import"./cls-S9IiI6wd.js";const c=m({__name:"SpinBasic",setup(l){return(d,a)=>(o(),g(i(s)))}}),v=`<template>
  <Spin />
</template>

<script setup lang="ts">
import { Spin } from 'ant-design-hmfw'
<\/script>
`,y=m({__name:"SpinDelay",setup(l){const d=S(!0);return(a,p)=>(o(),g(i(s),{spinning:d.value,delay:500},{default:r(()=>[...p[0]||(p[0]=[n("div",{style:{padding:"24px",background:"#f0f0f0","border-radius":"4px"}},[n("p",null,"延迟 500ms 后才显示加载状态")],-1)])]),_:1},8,["spinning"]))}}),_=`<template>
  <Spin :spinning="loading" :delay="500">
    <div style="padding: 24px; background: #f0f0f0; border-radius: 4px;">
      <p>延迟 500ms 后才显示加载状态</p>
    </div>
  </Spin>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin } from 'ant-design-hmfw'

const loading = ref(true)
<\/script>
`,k=m({__name:"SpinNested",setup(l){const d=S(!0);return(a,p)=>(o(),f("div",null,[n("button",{onClick:p[0]||(p[0]=t=>d.value=!d.value)},"切换加载状态"),e(i(s),{spinning:d.value,tip:"加载中..."},{default:r(()=>[...p[1]||(p[1]=[n("div",{style:{padding:"24px",background:"#f0f0f0","margin-top":"16px","border-radius":"4px"}},[n("p",null,"这是被遮罩的内容区域"),n("p",null,"加载时会显示遮罩层")],-1)])]),_:1},8,["spinning"])]))}}),B=`<template>
  <div>
    <button @click="loading = !loading">切换加载状态</button>
    <Spin :spinning="loading" tip="加载中...">
      <div style="padding: 24px; background: #f0f0f0; margin-top: 16px; border-radius: 4px;">
        <p>这是被遮罩的内容区域</p>
        <p>加载时会显示遮罩层</p>
      </div>
    </Spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin } from 'ant-design-hmfw'

const loading = ref(true)
<\/script>
`,h={style:{display:"flex",gap:"24px","align-items":"center"}},z=m({__name:"SpinSize",setup(l){return(d,a)=>(o(),f("div",h,[e(i(s),{size:"small"}),e(i(s)),e(i(s),{size:"large"})]))}}),w=`<template>
  <div style="display: flex; gap: 24px; align-items: center;">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>
</template>

<script setup lang="ts">
import { Spin } from 'ant-design-hmfw'
<\/script>
`,$={class:"markdown-body"},P={__name:"spin",setup(l,{expose:d}){return d({frontmatter:{}}),(p,t)=>{const u=b("DemoBlock");return o(),f("div",$,[t[0]||(t[0]=n("h1",{id:"spin-",tabindex:"-1"},"Spin 加载中",-1)),t[1]||(t[1]=n("p",null,"用于页面和区块的加载中状态。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=n("p",null,"一个简单的 loading 状态。",-1)),e(u,{title:"基础用法",source:i(v)},{default:r(()=>[e(c)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"各种大小",-1)),t[8]||(t[8]=n("p",null,"小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。",-1)),e(u,{title:"各种大小",source:i(w)},{default:r(()=>[e(z)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"-4",tabindex:"-1"},"嵌套内容",-1)),t[10]||(t[10]=n("p",null,"可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。",-1)),e(u,{title:"嵌套内容",source:i(B)},{default:r(()=>[e(k)]),_:1},8,["source"]),t[11]||(t[11]=n("h3",{id:"-5",tabindex:"-1"},"延迟加载",-1)),t[12]||(t[12]=n("p",null,"延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。",-1)),e(u,{title:"延迟加载",source:i(_)},{default:r(()=>[e(y)]),_:1},8,["source"]),t[13]||(t[13]=x('<h2 id="api" tabindex="-1">API</h2><h3 id="spin-props" tabindex="-1">Spin Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>spinning</td><td>是否为加载中状态</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>size</td><td>组件大小</td><td><code>&#39;small&#39; | &#39;default&#39; | &#39;large&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>tip</td><td>当作为包裹元素时，可以自定义描述文案</td><td><code>string</code></td><td>-</td></tr><tr><td>delay</td><td>延迟显示加载效果的时间（防止闪烁），单位：毫秒</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="spin-slots" tabindex="-1">Spin Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>被遮罩的内容</td></tr><tr><td>indicator</td><td>加载指示符</td></tr></tbody></table>',5))])}}};export{P as default};
