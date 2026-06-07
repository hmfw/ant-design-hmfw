import{U as q}from"./icons-CTzpiRs0.js";import{n as z,M as V,w as D,P as W,m as c,r as K,D as U,o as S,l as P,F as J,e as O,z as A,h as F,J as p,j as L,G as X,g as m,Q as E,k as Y}from"./index-DBrYVvYd.js";import{c as Z}from"./cls-S9IiI6wd.js";import{S as tt}from"./Spin-BhQlRwvj.js";import{I as et}from"./Icon-CiCvy_Uq.js";const k=new Array(512),H=new Array(256);(()=>{let t=1;for(let o=0;o<255;o++)k[o]=t,H[t]=o,t<<=1,t&256&&(t^=285);for(let o=255;o<512;o++)k[o]=k[o-255]})();function G(t,o){return t===0||o===0?0:k[(H[t]+H[o])%255]}function nt(t){let o=[1];for(let d=0;d<t.length;d++){const n=[1,k[d]],e=new Array(o.length+1).fill(0);for(let s=0;s<o.length;s++)for(let r=0;r<n.length;r++)e[s+r]^=G(o[s],n[r]);o=e}return o}function ot(t,o){const d=nt(Array.from({length:o},(e,s)=>s)),n=[...t,...new Array(o).fill(0)];for(let e=0;e<t.length;e++){const s=n[e];if(s!==0)for(let r=1;r<d.length;r++)n[e+r]^=G(d[r],s)}return n.slice(t.length)}const st={1:{L:[19,7],M:[16,10],Q:[13,13],H:[9,17]},2:{L:[34,10],M:[28,16],Q:[22,22],H:[16,28]},3:{L:[55,15],M:[44,26],Q:[34,18],H:[26,22]},4:{L:[80,20],M:[64,18],Q:[48,26],H:[36,16]},5:{L:[108,26],M:[86,24],Q:[62,18],H:[46,22]},6:{L:[136,18],M:[108,16],Q:[76,24],H:[60,28]},7:{L:[156,20],M:[124,18],Q:[88,18],H:[66,26]}},rt={L:1,M:0,Q:3,H:2},dt=21522;function at(t){const o=new TextEncoder().encode(t),d=[],n=(e,s)=>{for(let r=s-1;r>=0;r--)d.push(e>>r&1)};return n(4,4),n(o.length,8),o.forEach(e=>n(e,8)),n(0,4),d}function it(t,o){return[...t,...o]}function lt(t){return Array.from({length:t},()=>new Array(t).fill(-1))}function B(t,o,d){for(let n=0;n<7;n++)for(let e=0;e<7;e++){const s=n===0||n===6||e===0||e===6||n>=2&&n<=4&&e>=2&&e<=4?1:0;t[o+n][d+e]=s}}function ct(t,o){for(let d=8;d<o-8;d++)t[6][d]=t[d][6]=d%2===0?1:0}function ut(t,o,d){for(let n=-2;n<=2;n++)for(let e=-2;e<=2;e++)t[o+n][d+e]=n===-2||n===2||e===-2||e===2||n===0&&e===0?1:0}const ft={1:[],2:[6,18],3:[6,22],4:[6,26],5:[6,30],6:[6,34],7:[6,22,38]};function ht(t,o,d){const e=[(s,r)=>(s+r)%2===0,s=>s%2===0,(s,r)=>r%3===0,(s,r)=>(s+r)%3===0,(s,r)=>(Math.floor(s/2)+Math.floor(r/3))%2===0,(s,r)=>s*r%2+s*r%3===0,(s,r)=>(s*r%2+s*r%3)%2===0,(s,r)=>((s+r)%2+s*r%3)%2===0][o];for(let s=0;s<d;s++)for(let r=0;r<d;r++)t[s][r]!==-1&&e(s,r)&&(t[s][r]^=1)}function T(t,o,d,n){let s=rt[o]<<3|d,r=s;for(let u=0;u<10;u++)r=r<<1^(r>>9&1?1335:0);s=(s<<10|r)^dt;const _=Array.from({length:15},(u,a)=>s>>14-a&1),y=[[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,7],[8,8],[7,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]],h=[[n-1,8],[n-2,8],[n-3,8],[n-4,8],[n-5,8],[n-6,8],[n-7,8],[n-8,8],[8,n-8],[8,n-7],[8,n-6],[8,n-5],[8,n-4],[8,n-3],[8,n-2]];_.forEach((u,a)=>{t[y[a][0]][y[a][1]]=u,t[h[a][0]][h[a][1]]=u})}function gt(t,o="M"){var g,w,$,M,I;const d=at(t);let n=1,e=0,s=0;for(;n<=7;n++){const l=(g=st[n])==null?void 0:g[o];if(!l)return null;if(e=l[0],s=l[1],d.length<=e*8)break}if(n>7)return null;const r=e*8,_=[...d];for(;_.length<r;)_.push(0);const y=[];for(let l=0;l<_.length;l+=8){let f=0;for(let Q=0;Q<8;Q++)f=f<<1|(_[l+Q]??0);y.push(f)}for(;y.length<e;)y.push(y.length%2===0?236:17);const h=ot(y,s),u=[];it(y,h).forEach(l=>{for(let f=7;f>=0;f--)u.push(l>>f&1)});const a=n*4+17,i=lt(a);B(i,0,0),B(i,0,a-7),B(i,a-7,0);for(let l=0;l<8;l++)[0,a-8].forEach(f=>{i[l][f]===-1&&(i[l][f]=0)}),[0,a-8].forEach(f=>{i[f][l]===-1&&(i[f][l]=0)}),((w=i[a-1-l])==null?void 0:w[7])===-1&&(i[a-1-l][7]=0),(($=i[7])==null?void 0:$[a-1-l])===-1&&(i[7][a-1-l]=0),((M=i[a-8])==null?void 0:M[l])===-1&&(i[a-8][l]=0),((I=i[l])==null?void 0:I[a-8])===-1&&(i[l][a-8]=0);ct(i,a);const R=ft[n]??[];for(let l=0;l<R.length;l++)for(let f=0;f<R.length;f++){const Q=R[l],j=R[f];i[Q][j]===-1&&ut(i,Q,j)}i[a-8][8]=1,T(i,o,0,a);let b=0,v=-1,C=a-1;for(let l=a-1;l>=1;l-=2){l===6&&(l=5);for(let f=0;f<a;f++){const Q=v===-1?C-f:f;[l,l-1].forEach(j=>{var N;((N=i[Q])==null?void 0:N[j])===-1&&(i[Q][j]=u[b++]??0)})}v=-v,C=v===-1?a-1:0}return ht(i,0,a),T(i,o,0,a),i.map(l=>l.map(f=>f===1))}const x=z({name:"QRCode",props:{value:{type:String,required:!0},type:{type:String,default:"canvas"},size:{type:Number,default:160},color:{type:String,default:"#000000"},bgColor:{type:String,default:"transparent"},errorLevel:{type:String,default:"M"},status:{type:String,default:"active"},icon:String,iconSize:{type:[Number,Object],default:40},bordered:{type:Boolean,default:!0},statusRender:Function,marginSize:Number,onRefresh:Function},setup(t,{attrs:o}){const d=V("qrcode"),n=U(),e=O(()=>t.value?gt(t.value,t.errorLevel):null),s=O(()=>typeof t.iconSize=="number"?{width:t.iconSize,height:t.iconSize}:t.iconSize),r=()=>{const h=n.value;if(!h||!e.value)return;const u=h.getContext("2d");if(!u)return;const a=e.value,i=t.size,R=i/a.length;if(u.clearRect(0,0,i,i),u.fillStyle=t.bgColor,u.fillRect(0,0,i,i),u.fillStyle=t.color,a.forEach((b,v)=>b.forEach((C,g)=>{C&&u.fillRect(g*R,v*R,R,R)})),t.icon){const b=new Image;b.crossOrigin="anonymous",b.src=t.icon,b.onload=()=>{const v=s.value,C=(i-v.width)/2,g=(i-v.height)/2;u.fillStyle=t.bgColor,u.fillRect(C-2,g-2,v.width+4,v.height+4),u.drawImage(b,C,g,v.width,v.height)}}};D(()=>{t.type==="canvas"&&r()}),W([()=>t.value,()=>t.size,()=>t.color,()=>t.bgColor,()=>t.errorLevel,()=>t.icon,()=>t.iconSize],()=>{t.type==="canvas"&&r()});const _=()=>{const h=e.value;if(!h)return null;const u=t.marginSize??0,a=1,i=h.length,R=i+2*u,b=[];h.forEach((g,w)=>{g.forEach(($,M)=>{$&&b.push(`M${M+u},${w+u}h${a}v${a}h-${a}z`)})});const v={viewBox:`0 0 ${R} ${R}`,width:t.size,height:t.size,style:{display:"block"}};Object.keys(o).forEach(g=>{(g.startsWith("aria-")||g.startsWith("data-"))&&(v[g]=o[g])});const C=[S("rect",{x:0,y:0,width:R,height:R,fill:t.bgColor}),S("path",{d:b.join(""),fill:t.color})];if(t.icon){const g=s.value,w=(i-g.width/t.size*i)/2+u,$=(i-g.height/t.size*i)/2+u,M=g.width/t.size*i,I=g.height/t.size*i;C.push(S("rect",{x:w-.1,y:$-.1,width:M+.2,height:I+.2,fill:t.bgColor}),S("image",{href:t.icon,x:w,y:$,width:M,height:I,crossOrigin:"anonymous"}))}return S("svg",v,C)},y=h=>h.status==="loading"?c(tt,null,null):h.status==="expired"?c(J,null,[c("p",{class:`${d}-expired`},[P("二维码过期")]),h.onRefresh&&c("button",{type:"button",class:`${d}-refresh`,onClick:h.onRefresh},[c(et,{component:q,style:{marginRight:"4px"}},null),P("点击刷新")])]):h.status==="scanned"?c("p",{class:`${d}-scanned`},[P("已扫描")]):null;return()=>{if(!t.value)return null;const h=Z(d,{[`${d}-borderless`]:!t.bordered}),u={width:t.size,height:t.size,style:{display:"block"}};return Object.keys(o).forEach(a=>{(a.startsWith("aria-")||a.startsWith("data-"))&&(u[a]=o[a])}),c("div",{class:h,style:{width:`${t.size}px`,height:`${t.size}px`,backgroundColor:t.bgColor}},[t.type==="canvas"?c("canvas",K({ref:n},u),null):_(),t.status!=="active"&&c("div",{class:`${d}-cover`},[(t.statusRender??y)({status:t.status,onRefresh:t.onRefresh})])])}}}),pt=z({__name:"QRCodeBasic",setup(t){return(o,d)=>(A(),F(p(x),{value:"https://ant.design"}))}}),mt=`<template>
  <QRCode value="https://ant.design" />
</template>

<script setup lang="ts">
import { QRCode } from 'ant-design-hmfw'
<\/script>
`,vt={style:{display:"flex",gap:"16px"}},Rt=z({__name:"QRCodeCustomColor",setup(t){return(o,d)=>(A(),L("div",vt,[c(p(x),{value:"https://ant.design",color:"#1677ff"}),c(p(x),{value:"https://ant.design",color:"#52c41a","bg-color":"#f0f0f0"})]))}}),xt=`<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" color="#1677ff" />
    <QRCode value="https://ant.design" color="#52c41a" bg-color="#f0f0f0" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from 'ant-design-hmfw'
<\/script>
`,yt={style:{display:"flex",gap:"16px"}},bt=z({__name:"QRCodeCustomStatusRender",setup(t){const o=n=>n.status==="expired"?S("div",{style:{color:"#ff4d4f"}},[S("div","❌ 已过期"),n.onRefresh&&S("button",{onClick:n.onRefresh,style:{marginTop:"8px",padding:"4px 12px",border:"1px solid #ff4d4f",borderRadius:"4px",background:"transparent",color:"#ff4d4f",cursor:"pointer"}},"重新生成")]):n.status==="loading"?S("div",{style:{color:"#1677ff"}},"⏳ 加载中..."):n.status==="scanned"?S("div",{style:{color:"#52c41a"}},"✅ 扫描成功"):null,d=()=>{console.log("刷新二维码")};return(n,e)=>(A(),L("div",yt,[c(p(x),{value:"https://ant.design",status:"expired","status-render":o,"on-refresh":d}),c(p(x),{value:"https://ant.design",status:"loading","status-render":o}),c(p(x),{value:"https://ant.design",status:"scanned","status-render":o})]))}}),Ct=`<template>
  <div style="display: flex; gap: 16px">
    <QRCode
      value="https://ant.design"
      status="expired"
      :status-render="customStatusRender"
      :on-refresh="handleRefresh"
    />
    <QRCode value="https://ant.design" status="loading" :status-render="customStatusRender" />
    <QRCode value="https://ant.design" status="scanned" :status-render="customStatusRender" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { QRCode } from 'ant-design-hmfw'
import type { StatusRenderInfo } from 'ant-design-hmfw'

const customStatusRender = (info: StatusRenderInfo) => {
  if (info.status === 'expired') {
    return h('div', { style: { color: '#ff4d4f' } }, [
      h('div', '❌ 已过期'),
      info.onRefresh &&
        h(
          'button',
          {
            onClick: info.onRefresh,
            style: {
              marginTop: '8px',
              padding: '4px 12px',
              border: '1px solid #ff4d4f',
              borderRadius: '4px',
              background: 'transparent',
              color: '#ff4d4f',
              cursor: 'pointer',
            },
          },
          '重新生成',
        ),
    ])
  }
  if (info.status === 'loading') {
    return h('div', { style: { color: '#1677ff' } }, '⏳ 加载中...')
  }
  if (info.status === 'scanned') {
    return h('div', { style: { color: '#52c41a' } }, '✅ 扫描成功')
  }
  return null
}

const handleRefresh = () => {
  console.log('刷新二维码')
}
<\/script>
`,St="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",Qt=z({__name:"QRCodeIcon",setup(t){return(o,d)=>(A(),F(p(x),{value:"https://ant.design",icon:St,"icon-size":50,"error-level":"H"}))}}),_t=`<template>
  <QRCode value="https://ant.design" :icon="iconUrl" :icon-size="50" error-level="H" />
</template>

<script setup lang="ts">
import { QRCode } from 'ant-design-hmfw'

const iconUrl = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
<\/script>
`,wt={style:{display:"flex",gap:"16px"}},$t=z({__name:"QRCodeStatus",setup(t){function o(){console.log("刷新二维码")}return(d,n)=>(A(),L("div",wt,[c(p(x),{value:"https://ant.design",status:"active"}),c(p(x),{value:"https://ant.design",status:"expired",onRefresh:o}),c(p(x),{value:"https://ant.design",status:"loading"}),c(p(x),{value:"https://ant.design",status:"scanned"})]))}}),Mt=`<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" status="active" />
    <QRCode value="https://ant.design" status="expired" @refresh="onRefresh" />
    <QRCode value="https://ant.design" status="loading" />
    <QRCode value="https://ant.design" status="scanned" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from 'ant-design-hmfw'

function onRefresh() {
  console.log('刷新二维码')
}
<\/script>
`,zt={style:{display:"flex",gap:"16px"}},At=z({__name:"QRCodeType",setup(t){return(o,d)=>(A(),L("div",zt,[c(p(x),{value:"https://ant.design",type:"canvas"}),c(p(x),{value:"https://ant.design",type:"svg"})]))}}),Et=`<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" type="canvas" />
    <QRCode value="https://ant.design" type="svg" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from 'ant-design-hmfw'
<\/script>
`,It={class:"markdown-body"},Ht={__name:"qrcode",setup(t,{expose:o}){return o({frontmatter:{}}),(n,e)=>{const s=X("DemoBlock");return A(),L("div",It,[e[0]||(e[0]=m("h1",{id:"qrcode-",tabindex:"-1"},"QRCode 二维码",-1)),e[1]||(e[1]=m("p",null,"生成二维码。",-1)),e[2]||(e[2]=m("h2",{id:"",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=m("ul",null,[m("li",null,"当需要将链接转换成为二维码时使用")],-1)),e[4]||(e[4]=m("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=m("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=m("p",null,"基本使用方法。",-1)),c(s,{title:"基础用法",source:p(mt)},{default:E(()=>[c(pt)]),_:1},8,["source"]),e[7]||(e[7]=m("h3",{id:"-3",tabindex:"-1"},"渲染类型",-1)),e[8]||(e[8]=m("p",null,"支持 canvas 和 svg 两种渲染方式。",-1)),c(s,{title:"渲染类型",source:p(Et)},{default:E(()=>[c(At)]),_:1},8,["source"]),e[9]||(e[9]=m("h3",{id:"-4",tabindex:"-1"},"自定义颜色",-1)),e[10]||(e[10]=m("p",null,"自定义二维码颜色。",-1)),c(s,{title:"自定义颜色",source:p(xt)},{default:E(()=>[c(Rt)]),_:1},8,["source"]),e[11]||(e[11]=m("h3",{id:"-5",tabindex:"-1"},"带图标",-1)),e[12]||(e[12]=m("p",null,"二维码中间可以显示图标。",-1)),c(s,{title:"带图标",source:p(_t)},{default:E(()=>[c(Qt)]),_:1},8,["source"]),e[13]||(e[13]=m("h3",{id:"-6",tabindex:"-1"},"状态展示",-1)),e[14]||(e[14]=m("p",null,"二维码的不同状态。",-1)),c(s,{title:"状态展示",source:p(Mt)},{default:E(()=>[c($t)]),_:1},8,["source"]),e[15]||(e[15]=m("h3",{id:"-7",tabindex:"-1"},"自定义状态渲染",-1)),e[16]||(e[16]=m("p",null,"通过 statusRender 自定义状态渲染内容。",-1)),c(s,{title:"自定义状态渲染",source:p(Ct)},{default:E(()=>[c(bt)]),_:1},8,["source"]),e[17]||(e[17]=Y('<h2 id="api" tabindex="-1">API</h2><h3 id="qrcode-props" tabindex="-1">QRCode Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>扫描后的文本</td><td><code>string</code></td><td>-</td></tr><tr><td>type</td><td>渲染类型</td><td><code>&#39;canvas&#39; | &#39;svg&#39;</code></td><td><code>&#39;canvas&#39;</code></td></tr><tr><td>size</td><td>二维码大小</td><td><code>number</code></td><td><code>160</code></td></tr><tr><td>color</td><td>二维码颜色</td><td><code>string</code></td><td><code>&#39;#000000&#39;</code></td></tr><tr><td>bgColor</td><td>二维码背景颜色</td><td><code>string</code></td><td><code>&#39;transparent&#39;</code></td></tr><tr><td>errorLevel</td><td>二维码纠错等级</td><td><code>&#39;L&#39; | &#39;M&#39; | &#39;Q&#39; | &#39;H&#39;</code></td><td><code>&#39;M&#39;</code></td></tr><tr><td>status</td><td>二维码状态</td><td><code>&#39;active&#39; | &#39;expired&#39; | &#39;loading&#39; | &#39;scanned&#39;</code></td><td><code>&#39;active&#39;</code></td></tr><tr><td>icon</td><td>二维码中图片的地址</td><td><code>string</code></td><td>-</td></tr><tr><td>iconSize</td><td>二维码中图片的大小</td><td><code>number | { width: number; height: number }</code></td><td><code>40</code></td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>marginSize</td><td>SVG 类型二维码的边距</td><td><code>number</code></td><td>-</td></tr><tr><td>statusRender</td><td>自定义状态渲染函数</td><td><code>(info: StatusRenderInfo) =&gt; VNode | null</code></td><td>-</td></tr><tr><td>onRefresh</td><td>点击刷新的回调</td><td><code>() =&gt; void</code></td><td>-</td></tr></tbody></table><h3 id="statusrenderinfo" tabindex="-1">StatusRenderInfo</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>status</td><td>当前状态</td><td><code>&#39;expired&#39; | &#39;loading&#39; | &#39;scanned&#39;</code></td></tr><tr><td>onRefresh</td><td>刷新回调</td><td><code>() =&gt; void | undefined</code></td></tr></tbody></table>',5))])}}};export{Ht as default};
