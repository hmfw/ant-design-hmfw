import{k as c,I as A,j as i,c as _,w as g,e as h,M as s,d as n,G as m,B as z,g as B,h as I}from"./index-BNHhPN23.js";const b=c({name:"Watermark",props:{content:[String,Array],width:{type:Number,default:120},height:{type:Number,default:64},rotate:{type:Number,default:-22},zIndex:{type:Number,default:9},image:String,font:Object,gap:{type:Array,default:()=>[100,100]},offset:Array,inherit:{type:Boolean,default:!0}},setup(e,{slots:a}){const d=A("watermark"),x=_(()=>{const t=document.createElement("canvas"),o=window.devicePixelRatio||1,[p,k]=e.gap,y=(e.width+p)*o,W=(e.height+k)*o;t.width=y,t.height=W;const r=t.getContext("2d");if(!r)return"";r.scale(o,o),r.translate(e.width/2+p/2,e.height/2+k/2),r.rotate(e.rotate*Math.PI/180);const l=e.font??{};if(r.font=`${l.fontStyle??"normal"} ${l.fontWeight??"normal"} ${l.fontSize??14}px ${l.fontFamily??"sans-serif"}`,r.fillStyle=l.color??"rgba(0, 0, 0, 0.15)",r.textAlign="center",r.textBaseline="middle",e.image){const u=new Image;u.src=e.image,r.drawImage(u,-e.width/2,-e.height/2,e.width,e.height)}else{const u=Array.isArray(e.content)?e.content:[e.content??""],f=(l.fontSize??14)*1.5,w=u.length*f;u.forEach((v,S)=>{r.fillText(v,0,-w/2+S*f+f/2)})}return`url(${t.toDataURL()})`});return()=>{var t;return i("div",{class:d,style:{position:"relative"}},[(t=a.default)==null?void 0:t.call(a),i("div",{class:`${d}-wrapper`,style:{backgroundImage:x.value,backgroundSize:`${e.width+e.gap[0]}px ${e.height+e.gap[1]}px`,zIndex:e.zIndex}},null)])}}}),$=c({__name:"WatermarkBasic",setup(e){return(a,d)=>(g(),h(m(b),{content:"Ant Design"},{default:s(()=>[...d[0]||(d[0]=[n("div",{style:{height:"500px"}},null,-1)])]),_:1}))}}),D=`<template>
  <Watermark content="Ant Design">
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
<\/script>
`,C=c({__name:"WatermarkCustomStyle",setup(e){return(a,d)=>(g(),h(m(b),{content:"Ant Design",font:{color:"rgba(23, 119, 255, 0.15)",fontSize:20,fontWeight:"bold"},rotate:-22},{default:s(()=>[...d[0]||(d[0]=[n("div",{style:{height:"500px"}},null,-1)])]),_:1}))}}),N=`<template>
  <Watermark
    content="Ant Design"
    :font="{ color: 'rgba(23, 119, 255, 0.15)', fontSize: 20, fontWeight: 'bold' }"
    :rotate="-22"
  >
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
<\/script>
`,H=c({__name:"WatermarkMultiline",setup(e){return(a,d)=>(g(),h(m(b),{content:["Ant Design","Happy Working"]},{default:s(()=>[...d[0]||(d[0]=[n("div",{style:{height:"500px"}},null,-1)])]),_:1}))}}),P=`<template>
  <Watermark :content="['Ant Design', 'Happy Working']">
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
<\/script>
`,M={class:"markdown-body"},V={__name:"watermark",setup(e,{expose:a}){return a({frontmatter:{}}),(x,t)=>{const o=z("DemoBlock");return g(),B("div",M,[t[0]||(t[0]=n("h1",{id:"watermark-",tabindex:"-1"},"Watermark 水印",-1)),t[1]||(t[1]=n("p",null,"给页面的某个区域加上水印。",-1)),t[2]||(t[2]=n("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"页面需要添加水印标识版权时使用")],-1)),t[4]||(t[4]=n("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=n("h3",{id:"-2",tabindex:"-1"},"文字水印",-1)),t[6]||(t[6]=n("p",null,"使用 content 设置文字水印。",-1)),i(o,{title:"文字水印",source:m(D)},{default:s(()=>[i($)]),_:1},8,["source"]),t[7]||(t[7]=n("h3",{id:"-3",tabindex:"-1"},"多行水印",-1)),t[8]||(t[8]=n("p",null,"使用 content 数组设置多行文字水印。",-1)),i(o,{title:"多行水印",source:m(P)},{default:s(()=>[i(H)]),_:1},8,["source"]),t[9]||(t[9]=n("h3",{id:"-4",tabindex:"-1"},"自定义样式",-1)),t[10]||(t[10]=n("p",null,"自定义水印字体样式。",-1)),i(o,{title:"自定义样式",source:m(N)},{default:s(()=>[i(C)]),_:1},8,["source"]),t[11]||(t[11]=I('<h2 id="api" tabindex="-1">API</h2><h3 id="watermark-props" tabindex="-1">Watermark Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>水印文字内容</td><td><code>string | string[]</code></td><td>-</td></tr><tr><td>font</td><td>文字样式</td><td><code>{ color?: string, fontSize?: number, fontWeight?: string | number, fontFamily?: string }</code></td><td>-</td></tr><tr><td>rotate</td><td>水印绘制时，旋转的角度</td><td><code>number</code></td><td><code>-22</code></td></tr><tr><td>gap</td><td>水印之间的间距</td><td><code>[number, number]</code></td><td><code>[100, 100]</code></td></tr><tr><td>offset</td><td>水印距离容器左上角的偏移量</td><td><code>[number, number]</code></td><td>-</td></tr><tr><td>zIndex</td><td>追加的水印元素的 z-index</td><td><code>number</code></td><td><code>9</code></td></tr><tr><td>image</td><td>图片源，建议使用 2x 或 3x 图，优先级高于文字</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>水印的宽度</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td>height</td><td>水印的高度</td><td><code>number</code></td><td><code>64</code></td></tr></tbody></table><h3 id="watermark-slots" tabindex="-1">Watermark Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>被水印覆盖的内容</td></tr></tbody></table>',5))])}}};export{V as default};
