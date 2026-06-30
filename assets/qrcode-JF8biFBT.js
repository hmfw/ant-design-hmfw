import{o as Q,O as V,x as W,R as K,n as c,s as U,E as F,p as C,m as z,F as Y,f as T,A as q,i as D,L as g,k as A,h as u,_ as X,H as J,S as E,l as Z}from"./index-7wnt1Cyk.js";import{c as H}from"./cls-S9IiI6wd.js";import{S as tt}from"./Spin-DRpm8iAL.js";import{L as nt}from"./LoadingOutlined-VcPrAqG4.js";const B=new Array(512),j=new Array(256);(()=>{let n=1;for(let e=0;e<255;e++)B[e]=n,j[n]=e,n<<=1,n&256&&(n^=285);for(let e=255;e<512;e++)B[e]=B[e-255]})();function G(n,e){return n===0||e===0?0:B[(j[n]+j[e])%255]}function et(n){let e=[1];for(let d=0;d<n.length;d++){const s=[1,B[d]],t=new Array(e.length+1).fill(0);for(let o=0;o<e.length;o++)for(let a=0;a<s.length;a++)t[o+a]^=G(e[o],s[a]);e=t}return e}function st(n,e){const d=et(Array.from({length:e},(t,o)=>o)),s=[...n,...new Array(e).fill(0)];for(let t=0;t<n.length;t++){const o=s[t];if(o!==0)for(let a=1;a<d.length;a++)s[t+a]^=G(d[a],o)}return s.slice(n.length)}const ot={1:{L:[19,7],M:[16,10],Q:[13,13],H:[9,17]},2:{L:[34,10],M:[28,16],Q:[22,22],H:[16,28]},3:{L:[55,15],M:[44,26],Q:[34,18],H:[26,22]},4:{L:[80,20],M:[64,18],Q:[48,26],H:[36,16]},5:{L:[108,26],M:[86,24],Q:[62,18],H:[46,22]},6:{L:[136,18],M:[108,16],Q:[76,24],H:[60,28]},7:{L:[156,20],M:[124,18],Q:[88,18],H:[66,26]}},at={L:1,M:0,Q:3,H:2},dt=21522;function rt(n){const e=new TextEncoder().encode(n),d=[],s=(t,o)=>{for(let a=o-1;a>=0;a--)d.push(t>>a&1)};return s(4,4),s(e.length,8),e.forEach(t=>s(t,8)),s(0,4),d}function lt(n,e){return[...n,...e]}function ct(n){return Array.from({length:n},()=>new Array(n).fill(-1))}function I(n,e,d){for(let s=0;s<7;s++)for(let t=0;t<7;t++){const o=s===0||s===6||t===0||t===6||s>=2&&s<=4&&t>=2&&t<=4?1:0;n[e+s][d+t]=o}}function it(n,e){for(let d=8;d<e-8;d++)n[6][d]=n[d][6]=d%2===0?1:0}function ut(n,e,d){for(let s=-2;s<=2;s++)for(let t=-2;t<=2;t++)n[e+s][d+t]=s===-2||s===2||t===-2||t===2||s===0&&t===0?1:0}const pt={1:[],2:[6,18],3:[6,22],4:[6,26],5:[6,30],6:[6,34],7:[6,22,38]};function gt(n,e,d){const t=[(o,a)=>(o+a)%2===0,o=>o%2===0,(o,a)=>a%3===0,(o,a)=>(o+a)%3===0,(o,a)=>(Math.floor(o/2)+Math.floor(a/3))%2===0,(o,a)=>o*a%2+o*a%3===0,(o,a)=>(o*a%2+o*a%3)%2===0,(o,a)=>((o+a)%2+o*a%3)%2===0][e];for(let o=0;o<d;o++)for(let a=0;a<d;a++)n[o][a]!==-1&&t(o,a)&&(n[o][a]^=1)}function O(n,e,d,s){let o=at[e]<<3|d,a=o;for(let p=0;p<10;p++)a=a<<1^(a>>9&1?1335:0);o=(o<<10|a)^dt;const w=Array.from({length:15},(p,l)=>o>>14-l&1),R=[[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,7],[8,8],[7,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]],h=[[s-1,8],[s-2,8],[s-3,8],[s-4,8],[s-5,8],[s-6,8],[s-7,8],[s-8,8],[8,s-8],[8,s-7],[8,s-6],[8,s-5],[8,s-4],[8,s-3],[8,s-2]];w.forEach((p,l)=>{n[R[l][0]][R[l][1]]=p,n[h[l][0]][h[l][1]]=p})}function ft(n,e="M"){var v,_,N,$,M;const d=rt(n);let s=1,t=0,o=0;for(;s<=7;s++){const i=(v=ot[s])==null?void 0:v[e];if(!i)return null;if(t=i[0],o=i[1],d.length<=t*8)break}if(s>7)return null;const a=t*8,w=[...d];for(;w.length<a;)w.push(0);const R=[];for(let i=0;i<w.length;i+=8){let f=0;for(let S=0;S<8;S++)f=f<<1|(w[i+S]??0);R.push(f)}for(;R.length<t;)R.push(R.length%2===0?236:17);const h=st(R,o),p=[];lt(R,h).forEach(i=>{for(let f=7;f>=0;f--)p.push(i>>f&1)});const l=s*4+17,r=ct(l);I(r,0,0),I(r,0,l-7),I(r,l-7,0);for(let i=0;i<8;i++)[0,l-8].forEach(f=>{r[i][f]===-1&&(r[i][f]=0)}),[0,l-8].forEach(f=>{r[f][i]===-1&&(r[f][i]=0)}),((_=r[l-1-i])==null?void 0:_[7])===-1&&(r[l-1-i][7]=0),((N=r[7])==null?void 0:N[l-1-i])===-1&&(r[7][l-1-i]=0),(($=r[l-8])==null?void 0:$[i])===-1&&(r[l-8][i]=0),((M=r[i])==null?void 0:M[l-8])===-1&&(r[i][l-8]=0);it(r,l);const x=pt[s]??[];for(let i=0;i<x.length;i++)for(let f=0;f<x.length;f++){const S=x[i],P=x[f];r[S][P]===-1&&ut(r,S,P)}r[l-8][8]=1,O(r,e,0,l);let y=0,m=-1,k=l-1;for(let i=l-1;i>=1;i-=2){i===6&&(i=5);for(let f=0;f<l;f++){const S=m===-1?k-f:f;[i,i-1].forEach(P=>{var L;((L=r[S])==null?void 0:L[P])===-1&&(r[S][P]=p[y++]??0)})}m=-m,k=m===-1?l-1:0}return gt(r,0,l),O(r,e,0,l),r.map(i=>i.map(f=>f===1))}const b=Q({name:"QRCode",props:{value:{type:String,required:!0},type:{type:String,default:"canvas"},size:{type:Number,default:160},color:{type:String,default:"#000000"},bgColor:{type:String,default:"transparent"},errorLevel:{type:String,default:"M"},status:{type:String,default:"active"},icon:String,iconSize:{type:[Number,Object],default:40},bordered:{type:Boolean,default:!0},statusRender:Function,marginSize:Number,onRefresh:Function,classNames:Object,styles:Object},setup(n,{attrs:e}){const d=V("qrcode"),s=F(),t=T(()=>n.value?ft(n.value,n.errorLevel):null),o=T(()=>typeof n.iconSize=="number"?{width:n.iconSize,height:n.iconSize}:n.iconSize),a=()=>{const h=s.value;if(!h||!t.value)return;const p=h.getContext("2d");if(!p)return;const l=t.value,r=n.size,x=r/l.length;if(p.clearRect(0,0,r,r),p.fillStyle=n.bgColor,p.fillRect(0,0,r,r),p.fillStyle=n.color,l.forEach((y,m)=>y.forEach((k,v)=>{k&&p.fillRect(v*x,m*x,x,x)})),n.icon){const y=new Image;y.crossOrigin="anonymous",y.src=n.icon,y.onload=()=>{const m=o.value,k=(r-m.width)/2,v=(r-m.height)/2;p.fillStyle=n.bgColor,p.fillRect(k-2,v-2,m.width+4,m.height+4),p.drawImage(y,k,v,m.width,m.height)}}};W(()=>{n.type==="canvas"&&a()}),K([()=>n.value,()=>n.size,()=>n.color,()=>n.bgColor,()=>n.errorLevel,()=>n.icon,()=>n.iconSize],()=>{n.type==="canvas"&&a()});const w=()=>{const h=t.value;if(!h)return null;const p=n.marginSize??0,l=1,r=h.length,x=r+2*p,y=[];h.forEach((v,_)=>{v.forEach((N,$)=>{N&&y.push(`M${$+p},${_+p}h${l}v${l}h-${l}z`)})});const m={viewBox:`0 0 ${x} ${x}`,width:n.size,height:n.size,style:{display:"block"}};Object.keys(e).forEach(v=>{(v.startsWith("aria-")||v.startsWith("data-"))&&(m[v]=e[v])});const k=[C("rect",{x:0,y:0,width:x,height:x,fill:n.bgColor}),C("path",{d:y.join(""),fill:n.color})];if(n.icon){const v=o.value,_=(r-v.width/n.size*r)/2+p,N=(r-v.height/n.size*r)/2+p,$=v.width/n.size*r,M=v.height/n.size*r;k.push(C("rect",{x:_-.1,y:N-.1,width:$+.2,height:M+.2,fill:n.bgColor}),C("image",{href:n.icon,x:_,y:N,width:$,height:M,crossOrigin:"anonymous"}))}return C("svg",m,k)},R=h=>h.status==="loading"?c(tt,null,null):h.status==="expired"?c(Y,null,[c("p",{class:`${d}-expired`},[z("二维码过期")]),h.onRefresh&&c("button",{type:"button",class:`${d}-refresh`,onClick:h.onRefresh},[c(nt,{class:"hmfw-icon",style:{marginRight:"4px"}},null),z("点击刷新")])]):h.status==="scanned"?c("p",{class:`${d}-scanned`},[z("已扫描")]):null;return()=>{var l,r,x,y;if(!n.value)return null;const h=H(d,{[`${d}-borderless`]:!n.bordered},(l=n.classNames)==null?void 0:l.root),p={width:n.size,height:n.size,style:{display:"block"}};return Object.keys(e).forEach(m=>{(m.startsWith("aria-")||m.startsWith("data-"))&&(p[m]=e[m])}),c("div",{class:h,style:{width:`${n.size}px`,height:`${n.size}px`,backgroundColor:n.bgColor,...(r=n.styles)==null?void 0:r.root}},[n.type==="canvas"?c("canvas",U({ref:s},p),null):w(),n.status!=="active"&&c("div",{class:H(`${d}-cover`,(x=n.classNames)==null?void 0:x.cover),style:(y=n.styles)==null?void 0:y.cover},[(n.statusRender??R)({status:n.status,onRefresh:n.onRefresh})])])}}}),mt=Q({__name:"QRCodeBasic",setup(n){return(e,d)=>(q(),D(g(b),{value:"https://ant.design"}))}}),ht=`<template>
  <QRCode value="https://ant.design" />
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'
<\/script>
`,vt={style:{display:"flex","flex-direction":"column",gap:"24px"}},bt={style:{"margin-top":"8px"}},xt=Q({__name:"QRCodeClassNames",setup(n){const e=F("expired"),d=()=>{e.value="loading",setTimeout(()=>{e.value="active"},1500)};return(s,t)=>(q(),A("div",vt,[u("div",null,[t[4]||(t[4]=u("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器（圆角边框）：",-1)),c(g(b),{value:"https://ant.design","class-names":{root:"custom-root"}})]),u("div",null,[t[5]||(t[5]=u("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义状态遮罩样式：",-1)),c(g(b),{value:"https://ant.design",status:"expired","class-names":{cover:"custom-cover"},"on-refresh":()=>{}})]),u("div",null,[t[6]||(t[6]=u("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义（根容器 + 遮罩）：",-1)),c(g(b),{value:"https://ant.design",status:"loading","class-names":{root:"custom-root-combo",cover:"custom-cover-combo"}})]),u("div",null,[t[7]||(t[7]=u("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),c(g(b),{value:"https://ant.design",styles:{root:{borderRadius:"16px",boxShadow:"0 4px 12px rgba(22, 119, 255, 0.3)"}}})]),u("div",null,[t[8]||(t[8]=u("div",{style:{"margin-bottom":"8px",color:"#666"}},"动态样式（状态切换）：",-1)),c(g(b),{value:"https://ant.design",status:e.value,"class-names":{root:"custom-dynamic",cover:"custom-dynamic-cover"},"on-refresh":d},null,8,["status"]),u("div",bt,[u("button",{style:{"margin-right":"8px"},onClick:t[0]||(t[0]=o=>e.value="active")},"激活"),u("button",{style:{"margin-right":"8px"},onClick:t[1]||(t[1]=o=>e.value="expired")},"过期"),u("button",{style:{"margin-right":"8px"},onClick:t[2]||(t[2]=o=>e.value="loading")},"加载中"),u("button",{onClick:t[3]||(t[3]=o=>e.value="scanned")},"已扫描")])])]))}}),yt=X(xt,[["__scopeId","data-v-905be358"]]),Rt=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义根容器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义根容器（圆角边框）：</div>
      <QRCode value="https://ant.design" :class-names="{ root: 'custom-root' }" />
    </div>

    <!-- 场景 2：自定义状态遮罩 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义状态遮罩样式：</div>
      <QRCode
        value="https://ant.design"
        status="expired"
        :class-names="{ cover: 'custom-cover' }"
        :on-refresh="() => {}"
      />
    </div>

    <!-- 场景 3：组合使用 classNames -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合自定义（根容器 + 遮罩）：</div>
      <QRCode
        value="https://ant.design"
        status="loading"
        :class-names="{
          root: 'custom-root-combo',
          cover: 'custom-cover-combo',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <QRCode
        value="https://ant.design"
        :styles="{
          root: {
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(22, 119, 255, 0.3)',
          },
        }"
      />
    </div>

    <!-- 场景 5：动态样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">动态样式（状态切换）：</div>
      <QRCode
        value="https://ant.design"
        :status="currentStatus"
        :class-names="{ root: 'custom-dynamic', cover: 'custom-dynamic-cover' }"
        :on-refresh="handleRefresh"
      />
      <div style="margin-top: 8px">
        <button style="margin-right: 8px" @click="currentStatus = 'active'">激活</button>
        <button style="margin-right: 8px" @click="currentStatus = 'expired'">过期</button>
        <button style="margin-right: 8px" @click="currentStatus = 'loading'">加载中</button>
        <button @click="currentStatus = 'scanned'">已扫描</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QRCode } from '@hmfw/ant-design'
import type { QRCodeStatus } from '@hmfw/ant-design'

const currentStatus = ref<QRCodeStatus>('expired')

const handleRefresh = () => {
  currentStatus.value = 'loading'
  setTimeout(() => {
    currentStatus.value = 'active'
  }, 1500)
}
<\/script>

<style scoped>
/* 场景 1：渐变边框 + 圆角 */
:deep(.custom-root) {
  border-radius: 12px;
  border: 3px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* 场景 2：自定义遮罩 */
:deep(.custom-cover) {
  background: linear-gradient(135deg, rgba(255, 77, 79, 0.9) 0%, rgba(255, 120, 117, 0.9) 100%);
  backdrop-filter: blur(4px);
}

/* 场景 3：组合样式 */
:deep(.custom-root-combo) {
  border-radius: 16px;
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 100%);
  padding: 8px;
}

:deep(.custom-cover-combo) {
  background: rgba(24, 144, 255, 0.15);
  backdrop-filter: blur(8px);
}

/* 场景 5：动态样式 */
:deep(.custom-dynamic) {
  border-radius: 8px;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 2px solid #d9d9d9;
}

:deep(.custom-dynamic:hover) {
  border-color: #1677ff;
  box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.1);
}

:deep(.custom-dynamic-cover) {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 245, 255, 0.95) 100%);
  backdrop-filter: blur(4px);
  border-radius: 6px;
}

button {
  padding: 4px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  color: #1677ff;
  border-color: #1677ff;
}
</style>
`,kt={style:{display:"flex",gap:"16px"}},Ct=Q({__name:"QRCodeCustomColor",setup(n){return(e,d)=>(q(),A("div",kt,[c(g(b),{value:"https://ant.design",color:"#1677ff"}),c(g(b),{value:"https://ant.design",color:"#52c41a","bg-color":"#f0f0f0"})]))}}),St=`<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" color="#1677ff" />
    <QRCode value="https://ant.design" color="#52c41a" bg-color="#f0f0f0" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'
<\/script>
`,wt={style:{display:"flex",gap:"16px"}},Qt=Q({__name:"QRCodeCustomStatusRender",setup(n){const e=s=>s.status==="expired"?C("div",{style:{color:"#ff4d4f"}},[C("div","❌ 已过期"),s.onRefresh&&C("button",{onClick:s.onRefresh,style:{marginTop:"8px",padding:"4px 12px",border:"1px solid #ff4d4f",borderRadius:"4px",background:"transparent",color:"#ff4d4f",cursor:"pointer"}},"重新生成")]):s.status==="loading"?C("div",{style:{color:"#1677ff"}},"⏳ 加载中..."):s.status==="scanned"?C("div",{style:{color:"#52c41a"}},"✅ 扫描成功"):null,d=()=>{console.log("刷新二维码")};return(s,t)=>(q(),A("div",wt,[c(g(b),{value:"https://ant.design",status:"expired","status-render":e,"on-refresh":d}),c(g(b),{value:"https://ant.design",status:"loading","status-render":e}),c(g(b),{value:"https://ant.design",status:"scanned","status-render":e})]))}}),qt=`<template>
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
import { QRCode } from '@hmfw/ant-design'
import type { StatusRenderInfo } from '@hmfw/ant-design'

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
`,_t="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",Nt=Q({__name:"QRCodeIcon",setup(n){return(e,d)=>(q(),D(g(b),{value:"https://ant.design",icon:_t,"icon-size":50,"error-level":"H"}))}}),$t=`<template>
  <QRCode value="https://ant.design" :icon="iconUrl" :icon-size="50" error-level="H" />
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'

const iconUrl = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
<\/script>
`,Et={style:{display:"flex",gap:"16px"}},zt=Q({__name:"QRCodeStatus",setup(n){function e(){console.log("刷新二维码")}return(d,s)=>(q(),A("div",Et,[c(g(b),{value:"https://ant.design",status:"active"}),c(g(b),{value:"https://ant.design",status:"expired",onRefresh:e}),c(g(b),{value:"https://ant.design",status:"loading"}),c(g(b),{value:"https://ant.design",status:"scanned"})]))}}),At=`<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" status="active" />
    <QRCode value="https://ant.design" status="expired" @refresh="onRefresh" />
    <QRCode value="https://ant.design" status="loading" />
    <QRCode value="https://ant.design" status="scanned" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'

function onRefresh() {
  console.log('刷新二维码')
}
<\/script>
`,Mt={style:{display:"flex",gap:"16px"}},Pt=Q({__name:"QRCodeType",setup(n){return(e,d)=>(q(),A("div",Mt,[c(g(b),{value:"https://ant.design",type:"canvas"}),c(g(b),{value:"https://ant.design",type:"svg"})]))}}),Bt=`<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" type="canvas" />
    <QRCode value="https://ant.design" type="svg" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'
<\/script>
`,It={class:"markdown-body"},Ot={__name:"qrcode",setup(n,{expose:e}){return e({frontmatter:{}}),(s,t)=>{const o=J("DemoBlock");return q(),A("div",It,[t[0]||(t[0]=u("h1",{id:"qrcode-二维码",tabindex:"-1"},"QRCode 二维码",-1)),t[1]||(t[1]=u("p",null,"生成二维码。",-1)),t[2]||(t[2]=u("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=u("ul",null,[u("li",null,"当需要将链接转换成为二维码时使用")],-1)),t[4]||(t[4]=u("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=u("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=u("p",null,"基本使用方法。",-1)),c(o,{title:"基础用法",source:g(ht)},{default:E(()=>[c(mt)]),_:1},8,["source"]),t[7]||(t[7]=u("h3",{id:"渲染类型",tabindex:"-1"},"渲染类型",-1)),t[8]||(t[8]=u("p",null,"支持 canvas 和 svg 两种渲染方式。",-1)),c(o,{title:"渲染类型",source:g(Bt)},{default:E(()=>[c(Pt)]),_:1},8,["source"]),t[9]||(t[9]=u("h3",{id:"自定义颜色",tabindex:"-1"},"自定义颜色",-1)),t[10]||(t[10]=u("p",null,"自定义二维码颜色。",-1)),c(o,{title:"自定义颜色",source:g(St)},{default:E(()=>[c(Ct)]),_:1},8,["source"]),t[11]||(t[11]=u("h3",{id:"带图标",tabindex:"-1"},"带图标",-1)),t[12]||(t[12]=u("p",null,"二维码中间可以显示图标。",-1)),c(o,{title:"带图标",source:g($t)},{default:E(()=>[c(Nt)]),_:1},8,["source"]),t[13]||(t[13]=u("h3",{id:"状态展示",tabindex:"-1"},"状态展示",-1)),t[14]||(t[14]=u("p",null,"二维码的不同状态。",-1)),c(o,{title:"状态展示",source:g(At)},{default:E(()=>[c(zt)]),_:1},8,["source"]),t[15]||(t[15]=u("h3",{id:"自定义状态渲染",tabindex:"-1"},"自定义状态渲染",-1)),t[16]||(t[16]=u("p",null,"通过 statusRender 自定义状态渲染内容。",-1)),c(o,{title:"自定义状态渲染",source:g(qt)},{default:E(()=>[c(Qt)]),_:1},8,["source"]),t[17]||(t[17]=u("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[18]||(t[18]=u("p",null,[z("通过 "),u("code",null,"classNames"),z(" / "),u("code",null,"styles"),z(" 对根容器和状态遮罩做细粒度样式控制。")],-1)),c(o,{title:"语义化 className 与 style",source:g(Rt)},{default:E(()=>[c(yt)]),_:1},8,["source"]),t[19]||(t[19]=Z(`<h2 id="api" tabindex="-1">API</h2><h3 id="qrcode-props" tabindex="-1">QRCode Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>扫描后的文本</td><td><code>string</code></td><td>-</td></tr><tr><td>type</td><td>渲染类型</td><td><code>&#39;canvas&#39; | &#39;svg&#39;</code></td><td><code>&#39;canvas&#39;</code></td></tr><tr><td>size</td><td>二维码大小</td><td><code>number</code></td><td><code>160</code></td></tr><tr><td>color</td><td>二维码颜色</td><td><code>string</code></td><td><code>&#39;#000000&#39;</code></td></tr><tr><td>bgColor</td><td>二维码背景颜色</td><td><code>string</code></td><td><code>&#39;transparent&#39;</code></td></tr><tr><td>errorLevel</td><td>二维码纠错等级</td><td><code>&#39;L&#39; | &#39;M&#39; | &#39;Q&#39; | &#39;H&#39;</code></td><td><code>&#39;M&#39;</code></td></tr><tr><td>status</td><td>二维码状态</td><td><code>&#39;active&#39; | &#39;expired&#39; | &#39;loading&#39; | &#39;scanned&#39;</code></td><td><code>&#39;active&#39;</code></td></tr><tr><td>icon</td><td>二维码中图片的地址</td><td><code>string</code></td><td>-</td></tr><tr><td>iconSize</td><td>二维码中图片的大小</td><td><code>number | { width: number; height: number }</code></td><td><code>40</code></td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>marginSize</td><td>SVG 类型二维码的边距</td><td><code>number</code></td><td>-</td></tr><tr><td>statusRender</td><td>自定义状态渲染函数</td><td><code>(info: StatusRenderInfo) =&gt; VNode | null</code></td><td>-</td></tr><tr><td>onRefresh</td><td>点击刷新的回调</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>QRCodeClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>QRCodeStyles</code></td><td>-</td></tr></tbody></table><h3 id="statusrenderinfo" tabindex="-1">StatusRenderInfo</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>status</td><td>当前状态</td><td><code>&#39;expired&#39; | &#39;loading&#39; | &#39;scanned&#39;</code></td></tr><tr><td>onRefresh</td><td>刷新回调</td><td><code>() =&gt; void | undefined</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">QRCodeClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器</span>
  cover<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 状态遮罩层（非 active 状态时显示）</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">QRCodeStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  cover<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-qrcode<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 或 &lt;svg&gt;...&lt;/svg&gt; --&gt;</span>

  <span class="token comment">&lt;!-- 仅在 status !== &#39;active&#39; 时渲染 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-qrcode-cover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.cover / styles.cover 应用于此 --&gt;</span>
    <span class="token comment">&lt;!-- 状态内容：loading / expired / scanned --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义根容器样式 --&gt;
  &lt;QRCode value=&quot;https://ant.design&quot; :class-names=&quot;{ root: &#39;my-qrcode&#39; }&quot; /&gt;

  &lt;!-- 自定义状态遮罩 --&gt;
  &lt;QRCode
    value=&quot;https://ant.design&quot;
    status=&quot;expired&quot;
    :class-names=&quot;{ cover: &#39;my-cover&#39; }&quot;
    :on-refresh=&quot;handleRefresh&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;QRCode
    value=&quot;https://ant.design&quot;
    status=&quot;loading&quot;
    :class-names=&quot;{
      root: &#39;my-qrcode&#39;,
      cover: &#39;my-cover&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-qrcode) {
  border-radius: 12px;
  border: 3px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  transition: all 0.3s;
}

:deep(.my-qrcode:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

:deep(.my-cover) {
  background: linear-gradient(135deg, rgba(255, 77, 79, 0.9) 0%, rgba(255, 120, 117, 0.9) 100%);
  backdrop-filter: blur(4px);
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制根容器 --&gt;
  &lt;QRCode
    value=&quot;https://ant.design&quot;
    :styles=&quot;{
      root: {
        borderRadius: &#39;16px&#39;,
        boxShadow: &#39;0 4px 12px rgba(22, 119, 255, 0.3)&#39;,
      },
    }&quot;
  /&gt;

  &lt;!-- 自定义遮罩样式 --&gt;
  &lt;QRCode
    value=&quot;https://ant.design&quot;
    status=&quot;expired&quot;
    :styles=&quot;{
      cover: {
        background: &#39;rgba(0, 0, 0, 0.8)&#39;,
        color: &#39;white&#39;,
      },
    }&quot;
    :on-refresh=&quot;handleRefresh&quot;
  /&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;QRCode
    value=&quot;https://ant.design&quot;
    status=&quot;loading&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;12px&#39;, padding: &#39;8px&#39; },
      cover: { backdropFilter: &#39;blur(8px)&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>cover</code> 节点仅在 <code>status</code> 不为 <code>&#39;active&#39;</code> 时渲染，因此相关样式仅在状态切换时生效</li><li>根容器的 <code>width</code>、<code>height</code>、<code>backgroundColor</code> 由 <code>size</code> 和 <code>bgColor</code> props 控制，会与 <code>styles.root</code> 合并（<code>styles.root</code> 优先）</li><li>canvas/svg 元素是 QR 码的核心渲染节点，其样式通过 <code>color</code>、<code>bgColor</code>、<code>size</code> 等专有 props 控制，不暴露在语义化 API 中</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>QRCode 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-padding-sm</code></td><td>小号内边距</td><td><code>8px</code></td></tr></tbody></table>`,23))])}}};export{Ot as default};
