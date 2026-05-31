import{m as I,L as rt,o as dt,O as q,v as it,u as st,l as p,B,d as K,z as lt,y as E,g as T,P as x,f as d,I as b,E as ct,i as mt,j as ut}from"./index-tBZazAzX.js";const et=3,ft=2,gt=100,ht=100,tt=Symbol("WatermarkContext");function pt(){return window.devicePixelRatio||1}function nt(e){return Array.isArray(e)?e:e?[e]:[]}function xt(e,s,o){const r=e*Math.cos(o)-s*Math.sin(o),t=e*Math.sin(o)+s*Math.cos(o);return[r,t]}function Q(e,s,o=1){const r=document.createElement("canvas"),t=r.getContext("2d"),l=e*o,W=s*o;return r.setAttribute("width",`${l}px`),r.setAttribute("height",`${W}px`),t.save(),[t,r,l,W]}function bt(e,s,o,r,t,l,W,O){const[h,X,A,w]=Q(r,t,o);if(e instanceof HTMLImageElement)h.drawImage(e,0,0,A,w);else{const{color:m,fontSize:g,fontStyle:_,fontWeight:$,fontFamily:U,textAlign:V}=l,R=Number(g)*o;h.font=`${_} normal ${$} ${R}px/${t}px ${U}`,h.fillStyle=m,h.textAlign=V,h.textBaseline="top",nt(e).forEach((ot,at)=>{h.fillText(ot??"",A/2,at*(R+et*o))})}const F=Math.PI/180*Number(s),N=Math.max(r,t),[P,J,z]=Q(N,N,o);P.translate(z/2,z/2),P.rotate(F),A>0&&w>0&&P.drawImage(X,-A/2,-w/2);let M=0,L=0,v=0,H=0;const D=A/2,S=w/2;[[0-D,0-S],[0+D,0-S],[0+D,0+S],[0-D,0+S]].forEach(([m,g])=>{const[_,$]=xt(m,g,F);M=Math.min(M,_),L=Math.max(L,_),v=Math.min(v,$),H=Math.max(H,$)});const Y=M+z/2,G=v+z/2,n=L-M,a=H-v,i=W*o,c=O*o,u=(n+i)*ft,k=a+c,[f,C]=Q(u,k),y=(m=0,g=0)=>{f.drawImage(J,Y,G,n,a,m,g,n,a)};return y(),y(n+i,-a/2-c/2),y(n+i,+a/2+c/2),[C.toDataURL(),u/o]}const j=I({name:"Watermark",props:{content:[String,Array],width:Number,height:Number,rotate:{type:Number,default:-22},zIndex:Number,image:String,font:Object,gap:{type:Array,default:()=>[gt,ht]},offset:Array,inherit:{type:Boolean,default:!0}},setup(e,{slots:s}){var Y,G;const o=rt("watermark"),r=B(),t=B(),l=B(null),W=B(""),O=B(0),h=dt(tt,null),X=B(new Set),[A,w]=e.gap,F=A/2,N=w/2,P=((Y=e.offset)==null?void 0:Y[0])??F,J=((G=e.offset)==null?void 0:G[1])??N,z=K(()=>e.zIndex??999),M=K(()=>{const n={zIndex:z.value,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"};let a=P-F,i=J-N;return a>0&&(n.left=`${a}px`,n.width=`calc(100% - ${a}px)`,a=0),i>0&&(n.top=`${i}px`,n.height=`calc(100% - ${i}px)`,i=0),n.backgroundPosition=`${a}px ${i}px`,n}),L=n=>{var c,u;let a=120,i=64;if(!e.image&&n.measureText){const k=Number(((c=e.font)==null?void 0:c.fontSize)??16),f=((u=e.font)==null?void 0:u.fontFamily)??"sans-serif";n.font=`${k}px ${f}`;const C=nt(e.content),y=C.map(m=>{const g=n.measureText(m);return[g.width,g.fontBoundingBoxAscent+g.fontBoundingBoxDescent]});a=Math.ceil(Math.max(...y.map(m=>m[0]))),i=Math.ceil(Math.max(...y.map(m=>m[1])))*C.length+(C.length-1)*et}return[e.width??a,e.height??i]},v=()=>{const a=document.createElement("canvas").getContext("2d");if(a){const i=pt(),[c,u]=L(a),k=f=>{var g,_,$,U,V,R;const C={color:((g=e.font)==null?void 0:g.color)??"rgba(0, 0, 0, 0.15)",fontSize:Number(((_=e.font)==null?void 0:_.fontSize)??16),fontStyle:(($=e.font)==null?void 0:$.fontStyle)??"normal",fontWeight:((U=e.font)==null?void 0:U.fontWeight)??"normal",fontFamily:((V=e.font)==null?void 0:V.fontFamily)??"sans-serif",textAlign:((R=e.font)==null?void 0:R.textAlign)??"center"},[y,m]=bt(f||e.content||"",e.rotate,i,c,u,C,A,w);W.value=y,O.value=m};if(e.image){const f=new Image;f.onload=()=>{k(f)},f.onerror=()=>{k(e.content)},f.crossOrigin="anonymous",f.referrerPolicy="no-referrer",f.src=e.image}else k(e.content)}},H=(n,a)=>{t.value&&r.value&&(t.value.setAttribute("style",Object.entries({...M.value,backgroundImage:`url('${n}')`,backgroundSize:`${Math.floor(a)}px`}).map(([i,c])=>`${i.replace(/[A-Z]/g,u=>`-${u.toLowerCase()}`)}: ${c};`).join(" ")),t.value.removeAttribute("class"))},D=()=>{t.value&&r.value&&(r.value.removeChild(t.value),t.value=void 0)},S=n=>n===t.value;q([W,O],([n,a])=>{n&&a&&H(n,a)}),q(()=>[e.rotate,e.width,e.height,e.image,e.content,e.font,e.gap,e.offset],()=>{v()},{deep:!0}),it(()=>{if(r.value){const n=document.createElement("div");t.value=n,r.value.appendChild(n),v(),h&&h.add(r.value);const a=new MutationObserver(i=>{i.forEach(c=>{var u;c.type==="childList"&&Array.from(c.removedNodes).some(S)&&t.value&&((u=r.value)==null||u.appendChild(t.value),v()),c.type==="attributes"&&S(c.target)&&v()})});a.observe(r.value,{childList:!0,attributes:!0,subtree:!0}),l.value=()=>a.disconnect()}}),st(()=>{var n;(n=l.value)==null||n.call(l),h&&r.value&&h.remove(r.value),D()});const Z={add:n=>{X.value.add(n)},remove:n=>{X.value.delete(n)}};return e.inherit&&lt(tt,Z),()=>{var n;return p("div",{ref:r,class:o,style:{position:"relative",overflow:"hidden"}},[(n=s.default)==null?void 0:n.call(s)])}}}),vt=I({__name:"WatermarkBasic",setup(e){return(s,o)=>(E(),T(b(j),{content:"Ant Design"},{default:x(()=>[...o[0]||(o[0]=[d("div",{style:{height:"500px"}},null,-1)])]),_:1}))}}),At=`<template>
  <Watermark content="Ant Design">
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
<\/script>
`,kt=I({__name:"WatermarkCustomStyle",setup(e){return(s,o)=>(E(),T(b(j),{content:"Ant Design",font:{color:"rgba(23, 119, 255, 0.15)",fontSize:20,fontWeight:"bold"},rotate:-22},{default:x(()=>[...o[0]||(o[0]=[d("div",{style:{height:"500px"}},null,-1)])]),_:1}))}}),yt=`<template>
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
`,Wt=I({__name:"WatermarkImage",setup(e){return(s,o)=>(E(),T(b(j),{height:30,width:130,image:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original",content:"Ant Design"},{default:x(()=>[...o[0]||(o[0]=[d("div",{style:{height:"500px"}},null,-1)])]),_:1}))}}),wt=`<template>
  <Watermark
    :height="30"
    :width="130"
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
    content="Ant Design"
  >
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
<\/script>
`,St=I({__name:"WatermarkMultiline",setup(e){return(s,o)=>(E(),T(b(j),{content:["Ant Design","Happy Working"]},{default:x(()=>[...o[0]||(o[0]=[d("div",{style:{height:"500px"}},null,-1)])]),_:1}))}}),Ct=`<template>
  <Watermark :content="['Ant Design', 'Happy Working']">
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
<\/script>
`,_t=I({__name:"WatermarkOffset",setup(e){return(s,o)=>(E(),T(b(j),{content:"Ant Design",gap:[50,50],offset:[25,25],rotate:-45,font:{fontSize:18,fontWeight:"bold",fontStyle:"italic"}},{default:x(()=>[...o[0]||(o[0]=[d("div",{style:{height:"500px"}},null,-1)])]),_:1}))}}),$t=`<template>
  <Watermark
    content="Ant Design"
    :gap="[50, 50]"
    :offset="[25, 25]"
    :rotate="-45"
    :font="{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' }"
  >
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
<\/script>
`,zt={class:"markdown-body"},Bt={__name:"watermark",setup(e,{expose:s}){return s({frontmatter:{}}),(r,t)=>{const l=ct("DemoBlock");return E(),mt("div",zt,[t[0]||(t[0]=d("h1",{id:"watermark-",tabindex:"-1"},"Watermark 水印",-1)),t[1]||(t[1]=d("p",null,"给页面的某个区域加上水印。",-1)),t[2]||(t[2]=d("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=d("ul",null,[d("li",null,"页面需要添加水印标识版权时使用"),d("li",null,"适用于防止信息盗用")],-1)),t[4]||(t[4]=d("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=d("h3",{id:"-2",tabindex:"-1"},"文字水印",-1)),t[6]||(t[6]=d("p",null,"使用 content 设置文字水印。",-1)),p(l,{title:"文字水印",source:b(At)},{default:x(()=>[p(vt)]),_:1},8,["source"]),t[7]||(t[7]=d("h3",{id:"-3",tabindex:"-1"},"多行水印",-1)),t[8]||(t[8]=d("p",null,"使用 content 数组设置多行文字水印。",-1)),p(l,{title:"多行水印",source:b(Ct)},{default:x(()=>[p(St)]),_:1},8,["source"]),t[9]||(t[9]=d("h3",{id:"-4",tabindex:"-1"},"自定义样式",-1)),t[10]||(t[10]=d("p",null,"自定义水印字体样式。",-1)),p(l,{title:"自定义样式",source:b(yt)},{default:x(()=>[p(kt)]),_:1},8,["source"]),t[11]||(t[11]=d("h3",{id:"-5",tabindex:"-1"},"图片水印",-1)),t[12]||(t[12]=d("p",null,"使用 image 设置图片水印。当图片加载失败时，会回退到 content 文字水印。",-1)),p(l,{title:"图片水印",source:b(wt)},{default:x(()=>[p(Wt)]),_:1},8,["source"]),t[13]||(t[13]=d("h3",{id:"-6",tabindex:"-1"},"偏移量",-1)),t[14]||(t[14]=d("p",null,"通过 offset 设置水印的偏移量。",-1)),p(l,{title:"偏移量",source:b($t)},{default:x(()=>[p(_t)]),_:1},8,["source"]),t[15]||(t[15]=ut('<h2 id="api" tabindex="-1">API</h2><h3 id="watermark-props" tabindex="-1">Watermark Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>水印文字内容</td><td><code>string | string[]</code></td><td>-</td></tr><tr><td>font</td><td>文字样式</td><td><code>WatermarkFont</code></td><td>-</td></tr><tr><td>rotate</td><td>水印绘制时，旋转的角度，单位 <code>°</code></td><td><code>number</code></td><td><code>-22</code></td></tr><tr><td>gap</td><td>水印之间的间距</td><td><code>[number, number]</code></td><td><code>[100, 100]</code></td></tr><tr><td>offset</td><td>水印距离容器左上角的偏移量，默认为 <code>gap/2</code></td><td><code>[number, number]</code></td><td><code>[gap[0]/2, gap[1]/2]</code></td></tr><tr><td>zIndex</td><td>追加的水印元素的 z-index</td><td><code>number</code></td><td><code>999</code></td></tr><tr><td>image</td><td>图片源，建议使用 2x 或 3x 图，优先级高于文字（支持 base64 格式）</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>水印的宽度，<code>content</code> 的默认值为自身的宽度</td><td><code>number</code></td><td><code>120</code></td></tr><tr><td>height</td><td>水印的高度，<code>content</code> 的默认值为自身的高度</td><td><code>number</code></td><td><code>64</code></td></tr><tr><td>inherit</td><td>是否将水印传导给弹出组件如 Modal、Drawer</td><td><code>boolean</code></td><td><code>true</code></td></tr></tbody></table><h3 id="watermarkfont" tabindex="-1">WatermarkFont</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>字体颜色</td><td><code>string</code></td><td><code>rgba(0, 0, 0, 0.15)</code></td></tr><tr><td>fontSize</td><td>字体大小</td><td><code>number | string</code></td><td><code>16</code></td></tr><tr><td>fontWeight</td><td>字体粗细</td><td><code>&#39;normal&#39; | &#39;lighter&#39; | &#39;bold&#39; | &#39;bolder&#39; | number</code></td><td><code>&#39;normal&#39;</code></td></tr><tr><td>fontStyle</td><td>字体样式</td><td><code>&#39;none&#39; | &#39;normal&#39; | &#39;italic&#39; | &#39;oblique&#39;</code></td><td><code>&#39;normal&#39;</code></td></tr><tr><td>fontFamily</td><td>字体类型</td><td><code>string</code></td><td><code>&#39;sans-serif&#39;</code></td></tr><tr><td>textAlign</td><td>文本对齐方向</td><td><code>CanvasTextAlign</code></td><td><code>&#39;center&#39;</code></td></tr></tbody></table><h3 id="watermark-slots" tabindex="-1">Watermark Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>被水印覆盖的内容</td></tr></tbody></table>',7))])}}};export{Bt as default};
