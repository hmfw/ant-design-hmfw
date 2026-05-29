import{S as w}from"./Space-DHvzouOq.js";import{k as m,I as $,j as e,c as v,x as G,m as h,w as b,e as C,M as d,G as n,d as f,g as R,F as N,A as j,B,h as k,i as y}from"./index-DvxRruME.js";import{c as S}from"./cls-S9IiI6wd.js";const _=Symbol("RowContext"),c=m({name:"Row",props:{gutter:{type:[Number,Array,Object],default:0},align:{type:String,default:void 0},justify:{type:String,default:void 0},wrap:{type:Boolean,default:!0}},setup(l,{slots:u}){const t=$("row"),g=v(()=>{const o=[0,0];return(Array.isArray(l.gutter)?l.gutter:[l.gutter,0]).forEach((s,i)=>{typeof s=="object"?o[i]=0:o[i]=s||0}),o}),a=v(()=>{const[o,p]=g.value,s={};return o>0&&(s.marginLeft=`${-o/2}px`,s.marginRight=`${-o/2}px`),p>0&&(s.rowGap=`${p}px`),s}),x=v(()=>{const o=l.align,p=l.justify;return S(t,{[`${t}-no-wrap`]:!l.wrap,[`${t}-${p}`]:!!p,[`${t}-${o}`]:!!o})});return G(_,{gutter:g}),()=>{var o;return e("div",{class:x.value,style:a.value},[(o=u.default)==null?void 0:o.call(u)])}}});function O(l){return typeof l=="number"?`${l} ${l} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(l)?`0 0 ${l}`:l}const r=m({name:"Col",props:{span:{type:[Number,String],default:void 0},offset:{type:Number,default:0},order:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:[Number,Object],default:void 0},sm:{type:[Number,Object],default:void 0},md:{type:[Number,Object],default:void 0},lg:{type:[Number,Object],default:void 0},xl:{type:[Number,Object],default:void 0},xxl:{type:[Number,Object],default:void 0}},setup(l,{slots:u}){const t=$("col"),g=h(_,null),a=v(()=>{const o=[t];return l.span!==void 0&&o.push(`${t}-${l.span}`),l.offset&&o.push(`${t}-offset-${l.offset}`),l.order&&o.push(`${t}-order-${l.order}`),l.pull&&o.push(`${t}-pull-${l.pull}`),l.push&&o.push(`${t}-push-${l.push}`),["xs","sm","md","lg","xl","xxl"].forEach(s=>{const i=l[s];typeof i=="number"?o.push(`${t}-${s}-${i}`):typeof i=="object"&&(i.span!==void 0&&o.push(`${t}-${s}-${i.span}`),i.offset&&o.push(`${t}-${s}-offset-${i.offset}`),i.order&&o.push(`${t}-${s}-order-${i.order}`),i.pull&&o.push(`${t}-${s}-pull-${i.pull}`),i.push&&o.push(`${t}-${s}-push-${i.push}`))}),S(...o)}),x=v(()=>{const o={};if(g){const[p]=g.gutter.value;p>0&&(o.paddingLeft=`${p/2}px`,o.paddingRight=`${p/2}px`)}return l.span!==void 0&&typeof l.span=="string"&&(o.flex=O(l.span)),o});return()=>{var o;return e("div",{class:a.value,style:x.value},[(o=u.default)==null?void 0:o.call(u)])}}}),A=m({__name:"GridBasic",setup(l){return(u,t)=>(b(),C(n(w),{direction:"vertical",style:{width:"100%"}},{default:d(()=>[e(n(c),null,{default:d(()=>[e(n(r),{span:24},{default:d(()=>[...t[0]||(t[0]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"col-24",-1)])]),_:1})]),_:1}),e(n(c),null,{default:d(()=>[e(n(r),{span:12},{default:d(()=>[...t[1]||(t[1]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"col-12",-1)])]),_:1}),e(n(r),{span:12},{default:d(()=>[...t[2]||(t[2]=[f("div",{style:{background:"#4096ff",color:"#fff","text-align":"center",padding:"8px"}},"col-12",-1)])]),_:1})]),_:1}),e(n(c),null,{default:d(()=>[e(n(r),{span:8},{default:d(()=>[...t[3]||(t[3]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"col-8",-1)])]),_:1}),e(n(r),{span:8},{default:d(()=>[...t[4]||(t[4]=[f("div",{style:{background:"#4096ff",color:"#fff","text-align":"center",padding:"8px"}},"col-8",-1)])]),_:1}),e(n(r),{span:8},{default:d(()=>[...t[5]||(t[5]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"col-8",-1)])]),_:1})]),_:1}),e(n(c),null,{default:d(()=>[e(n(r),{span:6},{default:d(()=>[...t[6]||(t[6]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"col-6",-1)])]),_:1}),e(n(r),{span:6},{default:d(()=>[...t[7]||(t[7]=[f("div",{style:{background:"#4096ff",color:"#fff","text-align":"center",padding:"8px"}},"col-6",-1)])]),_:1}),e(n(r),{span:6},{default:d(()=>[...t[8]||(t[8]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"col-6",-1)])]),_:1}),e(n(r),{span:6},{default:d(()=>[...t[9]||(t[9]=[f("div",{style:{background:"#4096ff",color:"#fff","text-align":"center",padding:"8px"}},"col-6",-1)])]),_:1})]),_:1})]),_:1}))}}),P=`<template>
  <Space direction="vertical" style="width: 100%">
    <Row>
      <Col :span="24">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-24</div>
      </Col>
    </Row>
    <Row>
      <Col :span="12">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-12</div>
      </Col>
      <Col :span="12">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">col-12</div>
      </Col>
    </Row>
    <Row>
      <Col :span="8">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-8</div>
      </Col>
      <Col :span="8">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">col-8</div>
      </Col>
      <Col :span="8">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-8</div>
      </Col>
    </Row>
    <Row>
      <Col :span="6">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">col-6</div>
      </Col>
    </Row>
  </Space>
</template>

<script setup lang="ts">
import { Row, Col, Space } from 'ant-design-hmfw'
<\/script>
`,V=m({__name:"GridGutter",setup(l){return(u,t)=>(b(),C(n(w),{direction:"vertical",style:{width:"100%"}},{default:d(()=>[t[5]||(t[5]=f("div",null,"水平间距",-1)),e(n(c),{gutter:16},{default:d(()=>[e(n(r),{span:6},{default:d(()=>[...t[0]||(t[0]=[f("div",{style:{background:"#e6f4ff",border:"1px solid #91caff","text-align":"center",padding:"8px"}},"col-6",-1)])]),_:1}),e(n(r),{span:6},{default:d(()=>[...t[1]||(t[1]=[f("div",{style:{background:"#e6f4ff",border:"1px solid #91caff","text-align":"center",padding:"8px"}},"col-6",-1)])]),_:1}),e(n(r),{span:6},{default:d(()=>[...t[2]||(t[2]=[f("div",{style:{background:"#e6f4ff",border:"1px solid #91caff","text-align":"center",padding:"8px"}},"col-6",-1)])]),_:1}),e(n(r),{span:6},{default:d(()=>[...t[3]||(t[3]=[f("div",{style:{background:"#e6f4ff",border:"1px solid #91caff","text-align":"center",padding:"8px"}},"col-6",-1)])]),_:1})]),_:1}),t[6]||(t[6]=f("div",null,"水平 + 垂直间距",-1)),e(n(c),{gutter:[16,24]},{default:d(()=>[(b(),R(N,null,j(8,g=>e(n(r),{span:6,key:g},{default:d(()=>[...t[4]||(t[4]=[f("div",{style:{background:"#e6f4ff",border:"1px solid #91caff","text-align":"center",padding:"8px"}},"col-6",-1)])]),_:1})),64))]),_:1})]),_:1}))}}),E=`<template>
  <Space direction="vertical" style="width: 100%">
    <div>水平间距</div>
    <Row :gutter="16">
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px;">col-6</div>
      </Col>
      <Col :span="6">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px;">col-6</div>
      </Col>
    </Row>
    <div>水平 + 垂直间距</div>
    <Row :gutter="[16, 24]">
      <Col :span="6" v-for="i in 8" :key="i">
        <div style="background: #e6f4ff; border: 1px solid #91caff; text-align: center; padding: 8px;">col-6</div>
      </Col>
    </Row>
  </Space>
</template>

<script setup lang="ts">
import { Row, Col, Space } from 'ant-design-hmfw'
<\/script>
`,F=m({__name:"GridOffset",setup(l){return(u,t)=>(b(),C(n(w),{direction:"vertical",style:{width:"100%"}},{default:d(()=>[e(n(c),null,{default:d(()=>[e(n(r),{span:8},{default:d(()=>[...t[0]||(t[0]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"col-8",-1)])]),_:1}),e(n(r),{span:8,offset:8},{default:d(()=>[...t[1]||(t[1]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"col-8 offset-8",-1)])]),_:1})]),_:1}),e(n(c),null,{default:d(()=>[e(n(r),{span:6,offset:6},{default:d(()=>[...t[2]||(t[2]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"col-6 offset-6",-1)])]),_:1}),e(n(r),{span:6,offset:6},{default:d(()=>[...t[3]||(t[3]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"col-6 offset-6",-1)])]),_:1})]),_:1})]),_:1}))}}),L=`<template>
  <Space direction="vertical" style="width: 100%">
    <Row>
      <Col :span="8">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-8</div>
      </Col>
      <Col :span="8" :offset="8">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-8 offset-8</div>
      </Col>
    </Row>
    <Row>
      <Col :span="6" :offset="6">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-6 offset-6</div>
      </Col>
      <Col :span="6" :offset="6">
        <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">col-6 offset-6</div>
      </Col>
    </Row>
  </Space>
</template>

<script setup lang="ts">
import { Row, Col, Space } from 'ant-design-hmfw'
<\/script>
`,D=m({__name:"GridResponsive",setup(l){return(u,t)=>(b(),C(n(c),{gutter:16},{default:d(()=>[e(n(r),{xs:24,sm:12,md:8,lg:6,xl:4},{default:d(()=>[...t[0]||(t[0]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"响应式",-1)])]),_:1}),e(n(r),{xs:24,sm:12,md:8,lg:6,xl:4},{default:d(()=>[...t[1]||(t[1]=[f("div",{style:{background:"#4096ff",color:"#fff","text-align":"center",padding:"8px"}},"响应式",-1)])]),_:1}),e(n(r),{xs:24,sm:12,md:8,lg:6,xl:4},{default:d(()=>[...t[2]||(t[2]=[f("div",{style:{background:"#1677ff",color:"#fff","text-align":"center",padding:"8px"}},"响应式",-1)])]),_:1}),e(n(r),{xs:24,sm:12,md:8,lg:6,xl:4},{default:d(()=>[...t[3]||(t[3]=[f("div",{style:{background:"#4096ff",color:"#fff","text-align":"center",padding:"8px"}},"响应式",-1)])]),_:1})]),_:1}))}}),I=`<template>
  <Row :gutter="16">
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">响应式</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">响应式</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div style="background: #1677ff; color: #fff; text-align: center; padding: 8px;">响应式</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div style="background: #4096ff; color: #fff; text-align: center; padding: 8px;">响应式</div>
    </Col>
  </Row>
</template>

<script setup lang="ts">
import { Row, Col } from 'ant-design-hmfw'
<\/script>
`,z={class:"markdown-body"},q={__name:"grid",setup(l,{expose:u}){return u({frontmatter:{}}),(g,a)=>{const x=B("DemoBlock");return b(),R("div",z,[a[0]||(a[0]=k('<h1 id="grid-" tabindex="-1">Grid 栅格</h1><p>24 栅格系统。</p><h2 id="" tabindex="-1">何时使用</h2><ul><li>需要对页面进行栅格化布局时</li><li>需要响应式布局时</li><li>需要等分或按比例分配空间时</li></ul><h2 id="-1" tabindex="-1">代码演示</h2><h3 id="-2" tabindex="-1">基础栅格</h3><p>使用 <code>span</code> 属性设置列宽，总宽度为 24。</p>',7)),e(x,{title:"基础栅格",source:n(P)},{default:d(()=>[e(A)]),_:1},8,["source"]),a[1]||(a[1]=f("h3",{id:"-3",tabindex:"-1"},"区块间隔",-1)),a[2]||(a[2]=f("p",null,[y("通过 "),f("code",null,"gutter"),y(" 属性设置列间距，支持水平和垂直间距。")],-1)),e(x,{title:"区块间隔",source:n(E)},{default:d(()=>[e(V)]),_:1},8,["source"]),a[3]||(a[3]=f("h3",{id:"-4",tabindex:"-1"},"偏移",-1)),a[4]||(a[4]=f("p",null,[y("通过 "),f("code",null,"offset"),y(" 属性设置列偏移量。")],-1)),e(x,{title:"偏移",source:n(L)},{default:d(()=>[e(F)]),_:1},8,["source"]),a[5]||(a[5]=k('<h3 id="-5" tabindex="-1">响应式布局</h3><p>通过 <code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code> 属性设置不同断点下的列宽。</p>',2)),e(x,{title:"响应式布局",source:n(I)},{default:d(()=>[e(D)]),_:1},8,["source"]),a[6]||(a[6]=k('<h2 id="api" tabindex="-1">API</h2><h3 id="row-props" tabindex="-1">Row Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>gutter</td><td>栅格间距，支持 <code>[水平, 垂直]</code></td><td><code>number | [number, number]</code></td><td><code>0</code></td></tr><tr><td>justify</td><td>水平排列方式</td><td><code>&#39;start&#39; | &#39;end&#39; | &#39;center&#39; | &#39;space-around&#39; | &#39;space-between&#39;</code></td><td><code>&#39;start&#39;</code></td></tr><tr><td>align</td><td>垂直对齐方式</td><td><code>&#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39;</code></td><td><code>&#39;top&#39;</code></td></tr><tr><td>wrap</td><td>是否自动换行</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="col-props" tabindex="-1">Col Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>span</td><td>栅格占位格数，0 时隐藏</td><td><code>number</code></td><td>-</td></tr><tr><td>offset</td><td>栅格左侧的间隔格数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>push</td><td>栅格向右移动格数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>pull</td><td>栅格向左移动格数</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td>xs</td><td><code>&lt;576px</code> 响应式栅格</td><td><code>number | { span: number, offset: number }</code></td><td>-</td></tr><tr><td>sm</td><td><code>≥576px</code> 响应式栅格</td><td><code>number | { span: number, offset: number }</code></td><td>-</td></tr><tr><td>md</td><td><code>≥768px</code> 响应式栅格</td><td><code>number | { span: number, offset: number }</code></td><td>-</td></tr><tr><td>lg</td><td><code>≥992px</code> 响应式栅格</td><td><code>number | { span: number, offset: number }</code></td><td>-</td></tr><tr><td>xl</td><td><code>≥1200px</code> 响应式栅格</td><td><code>number | { span: number, offset: number }</code></td><td>-</td></tr><tr><td>xxl</td><td><code>≥1600px</code> 响应式栅格</td><td><code>number | { span: number, offset: number }</code></td><td>-</td></tr></tbody></table>',5))])}}};export{q as default};
