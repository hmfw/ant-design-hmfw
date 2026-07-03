import{d as w,u as V,k as W,m as K,c as r,s as U,r as F,v as C,g as z,F as Y,a as T,o as Q,q as D,e as g,b as M,f as u,_ as X,h as J,w as E,i as Z}from"./index-D624MvcT.js";import{c as H}from"./cls-S9IiI6wd.js";import{S as nn}from"./Spin-_uLr1peZ.js";import{L as tn}from"./LoadingOutlined-YZYQjBMp.js";const B=new Array(512),j=new Array(256);(()=>{let t=1;for(let s=0;s<255;s++)B[s]=t,j[t]=s,t<<=1,t&256&&(t^=285);for(let s=255;s<512;s++)B[s]=B[s-255]})();function G(t,s){return t===0||s===0?0:B[(j[t]+j[s])%255]}function sn(t){let s=[1];for(let p=0;p<t.length;p++){const a=[1,B[p]],n=new Array(s.length+1).fill(0);for(let e=0;e<s.length;e++)for(let o=0;o<a.length;o++)n[e+o]^=G(s[e],a[o]);s=n}return s}function an(t,s){const p=sn(Array.from({length:s},(n,e)=>e)),a=[...t,...new Array(s).fill(0)];for(let n=0;n<t.length;n++){const e=a[n];if(e!==0)for(let o=1;o<p.length;o++)a[n+o]^=G(p[o],e)}return a.slice(t.length)}const en={1:{L:[19,7],M:[16,10],Q:[13,13],H:[9,17]},2:{L:[34,10],M:[28,16],Q:[22,22],H:[16,28]},3:{L:[55,15],M:[44,26],Q:[34,18],H:[26,22]},4:{L:[80,20],M:[64,18],Q:[48,26],H:[36,16]},5:{L:[108,26],M:[86,24],Q:[62,18],H:[46,22]},6:{L:[136,18],M:[108,16],Q:[76,24],H:[60,28]},7:{L:[156,20],M:[124,18],Q:[88,18],H:[66,26]}},on={L:1,M:0,Q:3,H:2},pn=21522;function cn(t){const s=new TextEncoder().encode(t),p=[],a=(n,e)=>{for(let o=e-1;o>=0;o--)p.push(n>>o&1)};return a(4,4),a(s.length,8),s.forEach(n=>a(n,8)),a(0,4),p}function ln(t,s){return[...t,...s]}function rn(t){return Array.from({length:t},()=>new Array(t).fill(-1))}function I(t,s,p){for(let a=0;a<7;a++)for(let n=0;n<7;n++){const e=a===0||a===6||n===0||n===6||a>=2&&a<=4&&n>=2&&n<=4?1:0;t[s+a][p+n]=e}}function dn(t,s){for(let p=8;p<s-8;p++)t[6][p]=t[p][6]=p%2===0?1:0}function un(t,s,p){for(let a=-2;a<=2;a++)for(let n=-2;n<=2;n++)t[s+a][p+n]=a===-2||a===2||n===-2||n===2||a===0&&n===0?1:0}const gn={1:[],2:[6,18],3:[6,22],4:[6,26],5:[6,30],6:[6,34],7:[6,22,38]};function kn(t,s,p){const n=[(e,o)=>(e+o)%2===0,e=>e%2===0,(e,o)=>o%3===0,(e,o)=>(e+o)%3===0,(e,o)=>(Math.floor(e/2)+Math.floor(o/3))%2===0,(e,o)=>e*o%2+e*o%3===0,(e,o)=>(e*o%2+e*o%3)%2===0,(e,o)=>((e+o)%2+e*o%3)%2===0][s];for(let e=0;e<p;e++)for(let o=0;o<p;o++)t[e][o]!==-1&&n(e,o)&&(t[e][o]^=1)}function O(t,s,p,a){let e=on[s]<<3|p,o=e;for(let i=0;i<10;i++)o=o<<1^(o>>9&1?1335:0);e=(e<<10|o)^pn;const q=Array.from({length:15},(i,l)=>e>>14-l&1),y=[[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,7],[8,8],[7,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]],m=[[a-1,8],[a-2,8],[a-3,8],[a-4,8],[a-5,8],[a-6,8],[a-7,8],[a-8,8],[8,a-8],[8,a-7],[8,a-6],[8,a-5],[8,a-4],[8,a-3],[8,a-2]];q.forEach((i,l)=>{t[y[l][0]][y[l][1]]=i,t[m[l][0]][m[l][1]]=i})}function fn(t,s="M"){var h,_,N,$,A;const p=cn(t);let a=1,n=0,e=0;for(;a<=7;a++){const d=(h=en[a])==null?void 0:h[s];if(!d)return null;if(n=d[0],e=d[1],p.length<=n*8)break}if(a>7)return null;const o=n*8,q=[...p];for(;q.length<o;)q.push(0);const y=[];for(let d=0;d<q.length;d+=8){let k=0;for(let S=0;S<8;S++)k=k<<1|(q[d+S]??0);y.push(k)}for(;y.length<n;)y.push(y.length%2===0?236:17);const m=an(y,e),i=[];ln(y,m).forEach(d=>{for(let k=7;k>=0;k--)i.push(d>>k&1)});const l=a*4+17,c=rn(l);I(c,0,0),I(c,0,l-7),I(c,l-7,0);for(let d=0;d<8;d++)[0,l-8].forEach(k=>{c[d][k]===-1&&(c[d][k]=0)}),[0,l-8].forEach(k=>{c[k][d]===-1&&(c[k][d]=0)}),((_=c[l-1-d])==null?void 0:_[7])===-1&&(c[l-1-d][7]=0),((N=c[7])==null?void 0:N[l-1-d])===-1&&(c[7][l-1-d]=0),(($=c[l-8])==null?void 0:$[d])===-1&&(c[l-8][d]=0),((A=c[d])==null?void 0:A[l-8])===-1&&(c[d][l-8]=0);dn(c,l);const b=gn[a]??[];for(let d=0;d<b.length;d++)for(let k=0;k<b.length;k++){const S=b[d],P=b[k];c[S][P]===-1&&un(c,S,P)}c[l-8][8]=1,O(c,s,0,l);let x=0,f=-1,R=l-1;for(let d=l-1;d>=1;d-=2){d===6&&(d=5);for(let k=0;k<l;k++){const S=f===-1?R-k:k;[d,d-1].forEach(P=>{var L;((L=c[S])==null?void 0:L[P])===-1&&(c[S][P]=i[x++]??0)})}f=-f,R=f===-1?l-1:0}return kn(c,0,l),O(c,s,0,l),c.map(d=>d.map(k=>k===1))}const v=w({name:"QRCode",props:{value:{type:String,required:!0},type:{type:String,default:"canvas"},size:{type:Number,default:160},color:{type:String,default:"#000000"},bgColor:{type:String,default:"transparent"},errorLevel:{type:String,default:"M"},status:{type:String,default:"active"},icon:String,iconSize:{type:[Number,Object],default:40},bordered:{type:Boolean,default:!0},statusRender:Function,marginSize:Number,onRefresh:Function,classNames:Object,styles:Object},setup(t,{attrs:s}){const p=V("qrcode"),a=F(),n=T(()=>t.value?fn(t.value,t.errorLevel):null),e=T(()=>typeof t.iconSize=="number"?{width:t.iconSize,height:t.iconSize}:t.iconSize),o=()=>{const m=a.value;if(!m||!n.value)return;const i=m.getContext("2d");if(!i)return;const l=n.value,c=t.size,b=c/l.length;if(i.clearRect(0,0,c,c),i.fillStyle=t.bgColor,i.fillRect(0,0,c,c),i.fillStyle=t.color,l.forEach((x,f)=>x.forEach((R,h)=>{R&&i.fillRect(h*b,f*b,b,b)})),t.icon){const x=new Image;x.crossOrigin="anonymous",x.src=t.icon,x.onload=()=>{const f=e.value,R=(c-f.width)/2,h=(c-f.height)/2;i.fillStyle=t.bgColor,i.fillRect(R-2,h-2,f.width+4,f.height+4),i.drawImage(x,R,h,f.width,f.height)}}};W(()=>{t.type==="canvas"&&o()}),K([()=>t.value,()=>t.size,()=>t.color,()=>t.bgColor,()=>t.errorLevel,()=>t.icon,()=>t.iconSize],()=>{t.type==="canvas"&&o()});const q=()=>{const m=n.value;if(!m)return null;const i=t.marginSize??0,l=1,c=m.length,b=c+2*i,x=[];m.forEach((h,_)=>{h.forEach((N,$)=>{N&&x.push(`M${$+i},${_+i}h${l}v${l}h-${l}z`)})});const f={viewBox:`0 0 ${b} ${b}`,width:t.size,height:t.size,style:{display:"block"}};Object.keys(s).forEach(h=>{(h.startsWith("aria-")||h.startsWith("data-"))&&(f[h]=s[h])});const R=[C("rect",{x:0,y:0,width:b,height:b,fill:t.bgColor}),C("path",{d:x.join(""),fill:t.color})];if(t.icon){const h=e.value,_=(c-h.width/t.size*c)/2+i,N=(c-h.height/t.size*c)/2+i,$=h.width/t.size*c,A=h.height/t.size*c;R.push(C("rect",{x:_-.1,y:N-.1,width:$+.2,height:A+.2,fill:t.bgColor}),C("image",{href:t.icon,x:_,y:N,width:$,height:A,crossOrigin:"anonymous"}))}return C("svg",f,R)},y=m=>m.status==="loading"?r(nn,null,null):m.status==="expired"?r(Y,null,[r("p",{class:`${p}-expired`},[z("二维码过期")]),m.onRefresh&&r("button",{type:"button",class:`${p}-refresh`,onClick:m.onRefresh},[r(tn,{class:"hmfw-icon",style:{marginRight:"4px"}},null),z("点击刷新")])]):m.status==="scanned"?r("p",{class:`${p}-scanned`},[z("已扫描")]):null;return()=>{var l,c,b,x;if(!t.value)return null;const m=H(p,{[`${p}-borderless`]:!t.bordered},(l=t.classNames)==null?void 0:l.root),i={width:t.size,height:t.size,style:{display:"block"}};return Object.keys(s).forEach(f=>{(f.startsWith("aria-")||f.startsWith("data-"))&&(i[f]=s[f])}),r("div",{class:m,style:{width:`${t.size}px`,height:`${t.size}px`,backgroundColor:t.bgColor,...(c=t.styles)==null?void 0:c.root}},[t.type==="canvas"?r("canvas",U({ref:a},i),null):q(),t.status!=="active"&&r("div",{class:H(`${p}-cover`,(b=t.classNames)==null?void 0:b.cover),style:(x=t.styles)==null?void 0:x.cover},[(t.statusRender??y)({status:t.status,onRefresh:t.onRefresh})])])}}}),mn=w({__name:"QRCodeBasic",setup(t){return(s,p)=>(Q(),D(g(v),{value:"https://ant.design"}))}}),hn=`<template>
  <QRCode value="https://ant.design" />
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'
<\/script>
`,vn={style:{display:"flex","flex-direction":"column",gap:"24px"}},bn={style:{"margin-top":"8px"}},xn=w({__name:"QRCodeClassNames",setup(t){const s=F("expired"),p=()=>{s.value="loading",setTimeout(()=>{s.value="active"},1500)};return(a,n)=>(Q(),M("div",vn,[u("div",null,[n[4]||(n[4]=u("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义根容器（圆角边框）：",-1)),r(g(v),{value:"https://ant.design","class-names":{root:"custom-root"}})]),u("div",null,[n[5]||(n[5]=u("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义状态遮罩样式：",-1)),r(g(v),{value:"https://ant.design",status:"expired","class-names":{cover:"custom-cover"},"on-refresh":()=>{}})]),u("div",null,[n[6]||(n[6]=u("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合自定义（根容器 + 遮罩）：",-1)),r(g(v),{value:"https://ant.design",status:"loading","class-names":{root:"custom-root-combo",cover:"custom-cover-combo"}})]),u("div",null,[n[7]||(n[7]=u("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),r(g(v),{value:"https://ant.design",styles:{root:{borderRadius:"16px",boxShadow:"0 4px 12px rgba(22, 119, 255, 0.3)"}}})]),u("div",null,[n[8]||(n[8]=u("div",{style:{"margin-bottom":"8px",color:"#666"}},"动态样式（状态切换）：",-1)),r(g(v),{value:"https://ant.design",status:s.value,"class-names":{root:"custom-dynamic",cover:"custom-dynamic-cover"},"on-refresh":p},null,8,["status"]),u("div",bn,[u("button",{style:{"margin-right":"8px"},onClick:n[0]||(n[0]=e=>s.value="active")},"激活"),u("button",{style:{"margin-right":"8px"},onClick:n[1]||(n[1]=e=>s.value="expired")},"过期"),u("button",{style:{"margin-right":"8px"},onClick:n[2]||(n[2]=e=>s.value="loading")},"加载中"),u("button",{onClick:n[3]||(n[3]=e=>s.value="scanned")},"已扫描")])])]))}}),yn=X(xn,[["__scopeId","data-v-905be358"]]),Rn=`<template>
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
`,Cn={style:{display:"flex",gap:"16px"}},Sn=w({__name:"QRCodeCustomColor",setup(t){return(s,p)=>(Q(),M("div",Cn,[r(g(v),{value:"https://ant.design",color:"#1677ff"}),r(g(v),{value:"https://ant.design",color:"#52c41a","bg-color":"#f0f0f0"})]))}}),qn=`<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" color="#1677ff" />
    <QRCode value="https://ant.design" color="#52c41a" bg-color="#f0f0f0" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'
<\/script>
`,wn={style:{display:"flex",gap:"16px"}},Qn=w({__name:"QRCodeCustomStatusRender",setup(t){const s=a=>a.status==="expired"?C("div",{style:{color:"#ff4d4f"}},[C("div","❌ 已过期"),a.onRefresh&&C("button",{onClick:a.onRefresh,style:{marginTop:"8px",padding:"4px 12px",border:"1px solid #ff4d4f",borderRadius:"4px",background:"transparent",color:"#ff4d4f",cursor:"pointer"}},"重新生成")]):a.status==="loading"?C("div",{style:{color:"#1677ff"}},"⏳ 加载中..."):a.status==="scanned"?C("div",{style:{color:"#52c41a"}},"✅ 扫描成功"):null,p=()=>{console.log("刷新二维码")};return(a,n)=>(Q(),M("div",wn,[r(g(v),{value:"https://ant.design",status:"expired","status-render":s,"on-refresh":p}),r(g(v),{value:"https://ant.design",status:"loading","status-render":s}),r(g(v),{value:"https://ant.design",status:"scanned","status-render":s})]))}}),_n=`<template>
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
`,Nn="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",$n=w({__name:"QRCodeIcon",setup(t){return(s,p)=>(Q(),D(g(v),{value:"https://ant.design",icon:Nn,"icon-size":50,"error-level":"H"}))}}),En=`<template>
  <QRCode value="https://ant.design" :icon="iconUrl" :icon-size="50" error-level="H" />
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'

const iconUrl = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
<\/script>
`,zn={style:{display:"flex",gap:"16px"}},Mn=w({__name:"QRCodeStatus",setup(t){function s(){console.log("刷新二维码")}return(p,a)=>(Q(),M("div",zn,[r(g(v),{value:"https://ant.design",status:"active"}),r(g(v),{value:"https://ant.design",status:"expired",onRefresh:s}),r(g(v),{value:"https://ant.design",status:"loading"}),r(g(v),{value:"https://ant.design",status:"scanned"})]))}}),An=`<template>
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
`,Pn={style:{display:"flex",gap:"16px"}},Bn=w({__name:"QRCodeType",setup(t){return(s,p)=>(Q(),M("div",Pn,[r(g(v),{value:"https://ant.design",type:"canvas"}),r(g(v),{value:"https://ant.design",type:"svg"})]))}}),In=`<template>
  <div style="display: flex; gap: 16px">
    <QRCode value="https://ant.design" type="canvas" />
    <QRCode value="https://ant.design" type="svg" />
  </div>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'
<\/script>
`,jn={class:"markdown-body"},Fn={__name:"qrcode",setup(t,{expose:s}){return s({frontmatter:{}}),(a,n)=>{const e=J("DemoBlock");return Q(),M("div",jn,[n[0]||(n[0]=u("h1",{id:"qrcode-二维码",tabindex:"-1"},"QRCode 二维码",-1)),n[1]||(n[1]=u("p",null,"生成二维码。",-1)),n[2]||(n[2]=u("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=u("ul",null,[u("li",null,"当需要将链接转换成为二维码时使用")],-1)),n[4]||(n[4]=u("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=u("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=u("p",null,"基本使用方法。",-1)),r(e,{title:"基础用法",source:g(hn)},{default:E(()=>[r(mn)]),_:1},8,["source"]),n[7]||(n[7]=u("h3",{id:"渲染类型",tabindex:"-1"},"渲染类型",-1)),n[8]||(n[8]=u("p",null,"支持 canvas 和 svg 两种渲染方式。",-1)),r(e,{title:"渲染类型",source:g(In)},{default:E(()=>[r(Bn)]),_:1},8,["source"]),n[9]||(n[9]=u("h3",{id:"自定义颜色",tabindex:"-1"},"自定义颜色",-1)),n[10]||(n[10]=u("p",null,"自定义二维码颜色。",-1)),r(e,{title:"自定义颜色",source:g(qn)},{default:E(()=>[r(Sn)]),_:1},8,["source"]),n[11]||(n[11]=u("h3",{id:"带图标",tabindex:"-1"},"带图标",-1)),n[12]||(n[12]=u("p",null,"二维码中间可以显示图标。",-1)),r(e,{title:"带图标",source:g(En)},{default:E(()=>[r($n)]),_:1},8,["source"]),n[13]||(n[13]=u("h3",{id:"状态展示",tabindex:"-1"},"状态展示",-1)),n[14]||(n[14]=u("p",null,"二维码的不同状态。",-1)),r(e,{title:"状态展示",source:g(An)},{default:E(()=>[r(Mn)]),_:1},8,["source"]),n[15]||(n[15]=u("h3",{id:"自定义状态渲染",tabindex:"-1"},"自定义状态渲染",-1)),n[16]||(n[16]=u("p",null,"通过 statusRender 自定义状态渲染内容。",-1)),r(e,{title:"自定义状态渲染",source:g(_n)},{default:E(()=>[r(Qn)]),_:1},8,["source"]),n[17]||(n[17]=u("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[18]||(n[18]=u("p",null,[z("通过 "),u("code",null,"classNames"),z(" / "),u("code",null,"styles"),z(" 对根容器和状态遮罩做细粒度样式控制。")],-1)),r(e,{title:"语义化 className 与 style",source:g(Rn)},{default:E(()=>[r(yn)]),_:1},8,["source"]),n[19]||(n[19]=Z(`<h2 id="api" tabindex="-1">API</h2><h3 id="qrcode-props" tabindex="-1">QRCode Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>扫描后的文本</td><td><code>string</code></td><td>-</td></tr><tr><td>type</td><td>渲染类型</td><td><code>&#39;canvas&#39; | &#39;svg&#39;</code></td><td><code>&#39;canvas&#39;</code></td></tr><tr><td>size</td><td>二维码大小</td><td><code>number</code></td><td><code>160</code></td></tr><tr><td>color</td><td>二维码颜色</td><td><code>string</code></td><td><code>&#39;#000000&#39;</code></td></tr><tr><td>bgColor</td><td>二维码背景颜色</td><td><code>string</code></td><td><code>&#39;transparent&#39;</code></td></tr><tr><td>errorLevel</td><td>二维码纠错等级</td><td><code>&#39;L&#39; | &#39;M&#39; | &#39;Q&#39; | &#39;H&#39;</code></td><td><code>&#39;M&#39;</code></td></tr><tr><td>status</td><td>二维码状态</td><td><code>&#39;active&#39; | &#39;expired&#39; | &#39;loading&#39; | &#39;scanned&#39;</code></td><td><code>&#39;active&#39;</code></td></tr><tr><td>icon</td><td>二维码中图片的地址</td><td><code>string</code></td><td>-</td></tr><tr><td>iconSize</td><td>二维码中图片的大小</td><td><code>number | { width: number; height: number }</code></td><td><code>40</code></td></tr><tr><td>bordered</td><td>是否有边框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>marginSize</td><td>SVG 类型二维码的边距</td><td><code>number</code></td><td>-</td></tr><tr><td>statusRender</td><td>自定义状态渲染函数</td><td><code>(info: StatusRenderInfo) =&gt; VNode | null</code></td><td>-</td></tr><tr><td>onRefresh</td><td>点击刷新的回调</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>QRCodeClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>QRCodeStyles</code></td><td>-</td></tr></tbody></table><h3 id="statusrenderinfo" tabindex="-1">StatusRenderInfo</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>status</td><td>当前状态</td><td><code>&#39;expired&#39; | &#39;loading&#39; | &#39;scanned&#39;</code></td></tr><tr><td>onRefresh</td><td>刷新回调</td><td><code>() =&gt; void | undefined</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义根容器样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QRCode</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://ant.design<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ root: &#39;my-qrcode&#39; }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义状态遮罩 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QRCode</span>
    <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://ant.design<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>expired<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ cover: &#39;my-cover&#39; }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:on-refresh</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRefresh<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QRCode</span>
    <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://ant.design<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-qrcode&#39;,
      cover: &#39;my-cover&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-qrcode)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 3px solid transparent<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>white<span class="token punctuation">,</span> white<span class="token punctuation">)</span> padding-box<span class="token punctuation">,</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span> border-box<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-qrcode:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-cover)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 77<span class="token punctuation">,</span> 79<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span> 0%<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 120<span class="token punctuation">,</span> 117<span class="token punctuation">,</span> 0.9<span class="token punctuation">)</span> 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">backdrop-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制根容器 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QRCode</span>
    <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://ant.design<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: {
        borderRadius: &#39;16px&#39;,
        boxShadow: &#39;0 4px 12px rgba(22, 119, 255, 0.3)&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义遮罩样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QRCode</span>
    <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://ant.design<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>expired<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      cover: {
        background: &#39;rgba(0, 0, 0, 0.8)&#39;,
        color: &#39;white&#39;,
      },
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:on-refresh</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRefresh<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QRCode</span>
    <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://ant.design<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;12px&#39;, padding: &#39;8px&#39; },
      cover: { backdropFilter: &#39;blur(8px)&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>cover</code> 节点仅在 <code>status</code> 不为 <code>&#39;active&#39;</code> 时渲染，因此相关样式仅在状态切换时生效</li><li>根容器的 <code>width</code>、<code>height</code>、<code>backgroundColor</code> 由 <code>size</code> 和 <code>bgColor</code> props 控制，会与 <code>styles.root</code> 合并（<code>styles.root</code> 优先）</li><li>canvas/svg 元素是 QR 码的核心渲染节点，其样式通过 <code>color</code>、<code>bgColor</code>、<code>size</code> 等专有 props 控制，不暴露在语义化 API 中</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>QRCode 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-line-height</code></td><td>标准行高</td><td><code>1.5714285714285714</code></td></tr><tr><td><code>--hmfw-border-radius-lg</code></td><td>大号圆角</td><td><code>8px</code></td></tr><tr><td><code>--hmfw-padding-sm</code></td><td>小号内边距</td><td><code>8px</code></td></tr></tbody></table>`,23))])}}};export{Fn as default};
