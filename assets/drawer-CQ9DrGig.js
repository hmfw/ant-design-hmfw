import{B as k}from"./Button-Dr1TfEzc.js";import{o as D,N as et,E as y,Q as W,w as at,n as s,c as st,s as ot,T as lt,f as B,A as $,k as N,F as L,K as d,R as o,m as p,h as a,_ as rt,J as dt,H as pt,l as it}from"./index-Dxep-jrR.js";import{S as ut}from"./index-fYlKPZB3.js";import{c as h}from"./cls-S9IiI6wd.js";import{I as ct}from"./Icon-DATzad6v.js";import{C as ft}from"./CloseOutlined-Cg7mwYr0.js";import"./LoadingOutlined-CKq07YS5.js";class mt{constructor(){this.drawers=new Map,this.uidCounter=0}register(){const l=++this.uidCounter,m=this.drawers.size;return this.drawers.set(l,m),l}unregister(l){this.drawers.delete(l)}getZIndex(l,c){const m=this.drawers.get(l)??0;return c+m*2}get size(){return this.drawers.size}}const F=new mt,kt='a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';function gt(e,l){var u;const c=document.activeElement,m=()=>Array.from(e.querySelectorAll(kt));(u=m()[0])==null||u.focus();const n=b=>{if(b.key!=="Tab")return;const i=m();if(!i.length)return;const g=i[0],v=i[i.length-1];b.shiftKey?document.activeElement===g&&(b.preventDefault(),v.focus()):document.activeElement===v&&(b.preventDefault(),g.focus())};return e.addEventListener("keydown",n),()=>{e.removeEventListener("keydown",n),l&&(c==null||c.focus())}}let A=0,K="";function bt(){typeof document>"u"||(A===0&&(K=document.body.style.overflow,document.body.style.overflow="hidden"),A+=1)}function V(){typeof document>"u"||(A=Math.max(0,A-1),A===0&&(document.body.style.overflow=K))}let yt=0;const M=378,wt=736;function Z(e,l){if(l){const c=l();if(c&&c.length)return c}if(!(e==null||e===""))return typeof e=="function"?e():e}function xt(e){return typeof e=="number"?`${e}px`:e}const x=D({name:"Drawer",inheritAttrs:!1,props:{open:{type:Boolean,default:void 0},defaultOpen:Boolean,title:{type:[String,Number,Object,Function],default:void 0},placement:{type:String,default:"right"},size:{type:[String,Number],default:void 0},width:{type:[Number,String],default:M},height:{type:[Number,String],default:M},closable:{type:Boolean,default:!0},closeIcon:{type:Function,default:void 0},maskClosable:{type:Boolean,default:!0},mask:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},loading:Boolean,zIndex:{type:Number,default:1e3},destroyOnClose:Boolean,destroyOnHidden:{type:Boolean,default:void 0},forceRender:Boolean,focusTriggerAfterClose:{type:Boolean,default:!0},getContainer:{type:[String,Object,Function,Boolean],default:void 0},rootClassName:{type:String,default:void 0},rootStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},headerStyle:{type:Object,default:void 0},footerStyle:{type:Object,default:void 0},maskStyle:{type:Object,default:void 0},contentWrapperStyle:{type:Object,default:void 0},classNames:{type:Object,default:void 0},styles:{type:Object,default:void 0}},emits:["update:open","close","afterOpenChange"],setup(e,{slots:l,emit:c,attrs:m}){const n=et("drawer"),u=`${n}-title-${yt+=1}`,b=y(e.defaultOpen??!1),i=y(null);let g=null,v=!1;const t=F.register(),f=B(()=>F.getZIndex(t,e.zIndex));W(()=>e.open,r=>{r!==void 0&&(b.value=r)});const q=B(()=>e.open!==void 0?e.open:b.value);W(q,async r=>{r?(e.mask&&(bt(),v=!0),await Promise.resolve(),i.value&&(g=gt(i.value,e.focusTriggerAfterClose))):(g==null||g(),g=null,v&&(V(),v=!1)),setTimeout(()=>c("afterOpenChange",r),0)},{flush:"post"}),at(()=>{g==null||g(),g=null,v&&(V(),v=!1),F.unregister(t)});const U=r=>{e.open===void 0&&(b.value=!1),c("update:open",!1),c("close",r)},G=r=>{e.mask&&e.maskClosable&&U(r)},J=r=>{r.key==="Escape"&&e.keyboard&&q.value&&U(r)},j=B(()=>e.placement==="left"||e.placement==="right"),H=B(()=>{const{size:r}=e;return r==="large"?`${wt}px`:r==="default"?`${M}px`:typeof r=="number"?`${r}px`:typeof r=="string"?/^\d+(\.\d+)?$/.test(r)?`${r}px`:r:xt(j.value?e.width:e.height)}),Q=B(()=>j.value?{width:H.value}:{height:H.value}),Y=B(()=>{const r=e.getContainer;return r===!1?"body":typeof r=="function"?r():typeof r=="string"||r instanceof HTMLElement?r:"body"}),X=()=>e.closable?s("button",{type:"button",class:`${n}-close`,onClick:r=>U(r),"aria-label":"Close"},[s(ct,{component:e.closeIcon??ft},null)]):null,_=()=>{var S,z,E,O,P,T,I;const r=Z(e.title,l.title),w=(S=l.extra)==null?void 0:S.call(l),C=r!=null&&r!=="";return!C&&!e.closable&&!w?null:s("div",{class:h(`${n}-header`,{[`${n}-header-close-only`]:e.closable&&!C&&!w},(z=e.classNames)==null?void 0:z.header),style:{...e.headerStyle,...(E=e.styles)==null?void 0:E.header}},[s("div",{class:`${n}-header-title`},[X(),C&&s("div",{id:u,class:h(`${n}-title`,(O=e.classNames)==null?void 0:O.title),style:(P=e.styles)==null?void 0:P.title},[r])]),w&&s("div",{class:h(`${n}-extra`,(T=e.classNames)==null?void 0:T.extra),style:(I=e.styles)==null?void 0:I.extra},[w])])},tt=()=>{var w,C,S;const r=(w=l.footer)==null?void 0:w.call(l);return!r||Array.isArray(r)&&!r.length?null:s("div",{class:h(`${n}-footer`,(C=e.classNames)==null?void 0:C.footer),style:{...e.footerStyle,...(S=e.styles)==null?void 0:S.footer}},[r])},nt=()=>{var w;return e.loading?s(ut,{active:!0,title:!1,paragraph:{rows:5},class:`${n}-body-skeleton`},null):(e.destroyOnHidden??e.destroyOnClose)&&!q.value?null:(w=l.default)==null?void 0:w.call(l)};return()=>{const r=Z(e.title,l.title)!=null,w={zIndex:f.value,...e.rootStyle},C=e.getContainer===!1;return s(lt,{to:Y.value,disabled:C},{default:()=>[s(st,{name:`hmfw-drawer-${e.placement}`,appear:!0},{default:()=>{var S,z,E,O,P,T,I,R;return[(q.value||e.forceRender)&&s("div",{class:h(`${n}-root`,e.rootClassName,{[`${n}-no-mask`]:!e.mask}),style:{...w,display:q.value?"":"none"},onKeydown:J},[e.mask&&s("div",{class:h(`${n}-mask`,(S=e.classNames)==null?void 0:S.mask),style:{...e.maskStyle,...(z=e.styles)==null?void 0:z.mask},onClick:G},null),s("div",ot({ref:i,class:h(`${n}-content-wrapper`,`${n}-${e.placement}`,(E=e.classNames)==null?void 0:E.wrapper),style:{...Q.value,...e.contentWrapperStyle,...(O=e.styles)==null?void 0:O.wrapper},role:"dialog","aria-modal":"true","aria-labelledby":r?u:void 0},m),[s("div",{class:h(`${n}-content`,(P=e.classNames)==null?void 0:P.content),style:(T=e.styles)==null?void 0:T.content},[_(),s("div",{class:h(`${n}-body`,(I=e.classNames)==null?void 0:I.body),style:{...e.bodyStyle,...(R=e.styles)==null?void 0:R.body}},[nt()]),tt()])])])]}})]})}}}),vt=D({__name:"DrawerBasic",setup(e){const l=y(!1);return(c,m)=>($(),N(L,null,[s(d(k),{type:"primary",onClick:m[0]||(m[0]=n=>l.value=!0)},{default:o(()=>[...m[2]||(m[2]=[p(" 打开抽屉 ",-1)])]),_:1}),s(d(x),{open:l.value,"onUpdate:open":m[1]||(m[1]=n=>l.value=n),title:"基础抽屉"},{default:o(()=>[...m[3]||(m[3]=[a("p",null,"抽屉内容",-1),a("p",null,"抽屉内容",-1),a("p",null,"抽屉内容",-1)])]),_:1},8,["open"])],64))}}),ht=`<template>
  <Button type="primary" @click="open = true"> 打开抽屉 </Button>
  <Drawer v-model:open="open" title="基础抽屉">
    <p>抽屉内容</p>
    <p>抽屉内容</p>
    <p>抽屉内容</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from 'ant-design-hmfw'

const open = ref(false)
<\/script>
`,Ct={class:"demo-drawer-classnames"},St={class:"demo-section"},Bt={class:"demo-section"},Dt={class:"demo-section"},$t={class:"demo-section"},Nt={class:"demo-section"},qt={class:"demo-section"},zt={class:"demo-section"},Et={class:"demo-section"},Ot=D({__name:"DrawerClassNames",setup(e){const l=y(!1),c=y(!1),m=y(!1),n=y(!1),u=y(!1),b=y(!1),i=y(!1),g=y(!1);return(v,t)=>($(),N("div",Ct,[a("section",St,[t[24]||(t[24]=a("h3",null,"1. 自定义遮罩样式",-1)),s(d(k),{type:"primary",onClick:t[0]||(t[0]=f=>l.value=!0)},{default:o(()=>[...t[22]||(t[22]=[p("打开抽屉（自定义遮罩）",-1)])]),_:1}),s(d(x),{open:l.value,"onUpdate:open":t[1]||(t[1]=f=>l.value=f),title:"自定义遮罩","class-names":{mask:"custom-mask"}},{default:o(()=>[...t[23]||(t[23]=[a("p",null,"这是一个自定义遮罩样式的抽屉",-1),a("p",null,"遮罩层使用渐变效果",-1)])]),_:1},8,["open"])]),a("section",Bt,[t[27]||(t[27]=a("h3",null,"2. 自定义包裹层样式",-1)),s(d(k),{type:"primary",onClick:t[2]||(t[2]=f=>c.value=!0)},{default:o(()=>[...t[25]||(t[25]=[p("打开抽屉（自定义包裹层）",-1)])]),_:1}),s(d(x),{open:c.value,"onUpdate:open":t[3]||(t[3]=f=>c.value=f),title:"自定义包裹层","class-names":{wrapper:"custom-wrapper"}},{default:o(()=>[...t[26]||(t[26]=[a("p",null,"这是一个自定义包裹层样式的抽屉",-1),a("p",null,"包裹层带有阴影和圆角效果",-1)])]),_:1},8,["open"])]),a("section",Dt,[t[30]||(t[30]=a("h3",null,"3. 自定义内容区样式",-1)),s(d(k),{type:"primary",onClick:t[4]||(t[4]=f=>m.value=!0)},{default:o(()=>[...t[28]||(t[28]=[p("打开抽屉（自定义内容区）",-1)])]),_:1}),s(d(x),{open:m.value,"onUpdate:open":t[5]||(t[5]=f=>m.value=f),title:"自定义内容区","class-names":{content:"custom-content"}},{default:o(()=>[...t[29]||(t[29]=[a("p",null,"这是一个自定义内容区样式的抽屉",-1),a("p",null,"内容区背景使用渐变色",-1)])]),_:1},8,["open"])]),a("section",$t,[t[35]||(t[35]=a("h3",null,"4. 自定义头部和标题样式",-1)),s(d(k),{type:"primary",onClick:t[6]||(t[6]=f=>n.value=!0)},{default:o(()=>[...t[31]||(t[31]=[p("打开抽屉（自定义头部）",-1)])]),_:1}),s(d(x),{open:n.value,"onUpdate:open":t[7]||(t[7]=f=>n.value=f),title:"渐变标题","class-names":{header:"custom-header",title:"custom-title"}},{extra:o(()=>[...t[32]||(t[32]=[a("a",{href:"#"},"操作",-1)])]),default:o(()=>[t[33]||(t[33]=a("p",null,"这是一个自定义头部和标题样式的抽屉",-1)),t[34]||(t[34]=a("p",null,"头部使用渐变背景，标题使用渐变文字",-1))]),_:1},8,["open"])]),a("section",Nt,[t[41]||(t[41]=a("h3",null,"5. 自定义主体和页脚样式",-1)),s(d(k),{type:"primary",onClick:t[8]||(t[8]=f=>u.value=!0)},{default:o(()=>[...t[36]||(t[36]=[p("打开抽屉（自定义主体和页脚）",-1)])]),_:1}),s(d(x),{open:u.value,"onUpdate:open":t[11]||(t[11]=f=>u.value=f),title:"自定义主体和页脚","class-names":{body:"custom-body",footer:"custom-footer"}},{footer:o(()=>[s(d(k),{style:{"margin-right":"8px"},onClick:t[9]||(t[9]=f=>u.value=!1)},{default:o(()=>[...t[37]||(t[37]=[p("取消",-1)])]),_:1}),s(d(k),{type:"primary",onClick:t[10]||(t[10]=f=>u.value=!1)},{default:o(()=>[...t[38]||(t[38]=[p("确定",-1)])]),_:1})]),default:o(()=>[t[39]||(t[39]=a("p",null,"这是一个自定义主体和页脚样式的抽屉",-1)),t[40]||(t[40]=a("p",null,"主体区域使用柔和的背景色",-1))]),_:1},8,["open"])]),a("section",qt,[t[46]||(t[46]=a("h3",null,"6. 自定义扩展区域样式",-1)),s(d(k),{type:"primary",onClick:t[12]||(t[12]=f=>b.value=!0)},{default:o(()=>[...t[42]||(t[42]=[p("打开抽屉（自定义扩展区域）",-1)])]),_:1}),s(d(x),{open:b.value,"onUpdate:open":t[13]||(t[13]=f=>b.value=f),title:"自定义扩展区域","class-names":{extra:"custom-extra"}},{extra:o(()=>[...t[43]||(t[43]=[a("a",{href:"#"},"链接 1",-1),a("a",{href:"#",style:{"margin-left":"8px"}},"链接 2",-1)])]),default:o(()=>[t[44]||(t[44]=a("p",null,"这是一个自定义扩展区域样式的抽屉",-1)),t[45]||(t[45]=a("p",null,"右上角的操作链接使用自定义样式",-1))]),_:1},8,["open"])]),a("section",zt,[t[53]||(t[53]=a("h3",null,"7. 组合使用多个 classNames",-1)),s(d(k),{type:"primary",onClick:t[14]||(t[14]=f=>i.value=!0)},{default:o(()=>[...t[47]||(t[47]=[p("打开抽屉（综合样式）",-1)])]),_:1}),s(d(x),{open:i.value,"onUpdate:open":t[17]||(t[17]=f=>i.value=f),title:"综合样式抽屉","class-names":{mask:"combined-mask",wrapper:"combined-wrapper",content:"combined-content",header:"combined-header",title:"combined-title",body:"combined-body",footer:"combined-footer"}},{extra:o(()=>[...t[48]||(t[48]=[a("a",{href:"#"},"操作",-1)])]),footer:o(()=>[s(d(k),{style:{"margin-right":"8px"},onClick:t[15]||(t[15]=f=>i.value=!1)},{default:o(()=>[...t[49]||(t[49]=[p("取消",-1)])]),_:1}),s(d(k),{type:"primary",onClick:t[16]||(t[16]=f=>i.value=!1)},{default:o(()=>[...t[50]||(t[50]=[p("确定",-1)])]),_:1})]),default:o(()=>[t[51]||(t[51]=a("p",null,"这是一个组合多个自定义样式的抽屉",-1)),t[52]||(t[52]=a("p",null,"所有部分都有自定义样式",-1))]),_:1},8,["open"])]),a("section",Et,[t[59]||(t[59]=a("h3",null,"8. 使用 styles 动态样式",-1)),s(d(k),{type:"primary",onClick:t[18]||(t[18]=f=>g.value=!0)},{default:o(()=>[...t[54]||(t[54]=[p("打开抽屉（动态样式）",-1)])]),_:1}),s(d(x),{open:g.value,"onUpdate:open":t[21]||(t[21]=f=>g.value=f),title:"动态样式抽屉",styles:{mask:{background:"rgba(0, 0, 0, 0.6)"},wrapper:{boxShadow:"0 8px 32px rgba(0, 0, 0, 0.3)"},content:{borderLeft:"4px solid #1890ff"},header:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white"},title:{fontWeight:"bold",fontSize:"18px"},body:{padding:"32px",background:"#f0f2f5"},footer:{background:"#fafafa",borderTop:"2px solid #1890ff"}}},{footer:o(()=>[s(d(k),{style:{"margin-right":"8px"},onClick:t[19]||(t[19]=f=>g.value=!1)},{default:o(()=>[...t[55]||(t[55]=[p("取消",-1)])]),_:1}),s(d(k),{type:"primary",onClick:t[20]||(t[20]=f=>g.value=!1)},{default:o(()=>[...t[56]||(t[56]=[p("确定",-1)])]),_:1})]),default:o(()=>[t[57]||(t[57]=a("p",null,"这是一个使用动态样式的抽屉",-1)),t[58]||(t[58]=a("p",null,"通过 styles 属性设置内联样式",-1))]),_:1},8,["open"])])]))}}),Pt=rt(Ot,[["__scopeId","data-v-6e16f6b4"]]),Tt=`<template>
  <div class="demo-drawer-classnames">
    <!-- 场景 1: 自定义遮罩样式 -->
    <section class="demo-section">
      <h3>1. 自定义遮罩样式</h3>
      <Button type="primary" @click="open1 = true">打开抽屉（自定义遮罩）</Button>
      <Drawer v-model:open="open1" title="自定义遮罩" :class-names="{ mask: 'custom-mask' }">
        <p>这是一个自定义遮罩样式的抽屉</p>
        <p>遮罩层使用渐变效果</p>
      </Drawer>
    </section>

    <!-- 场景 2: 自定义包裹层样式 -->
    <section class="demo-section">
      <h3>2. 自定义包裹层样式</h3>
      <Button type="primary" @click="open2 = true">打开抽屉（自定义包裹层）</Button>
      <Drawer v-model:open="open2" title="自定义包裹层" :class-names="{ wrapper: 'custom-wrapper' }">
        <p>这是一个自定义包裹层样式的抽屉</p>
        <p>包裹层带有阴影和圆角效果</p>
      </Drawer>
    </section>

    <!-- 场景 3: 自定义内容区样式 -->
    <section class="demo-section">
      <h3>3. 自定义内容区样式</h3>
      <Button type="primary" @click="open3 = true">打开抽屉（自定义内容区）</Button>
      <Drawer v-model:open="open3" title="自定义内容区" :class-names="{ content: 'custom-content' }">
        <p>这是一个自定义内容区样式的抽屉</p>
        <p>内容区背景使用渐变色</p>
      </Drawer>
    </section>

    <!-- 场景 4: 自定义头部和标题 -->
    <section class="demo-section">
      <h3>4. 自定义头部和标题样式</h3>
      <Button type="primary" @click="open4 = true">打开抽屉（自定义头部）</Button>
      <Drawer v-model:open="open4" title="渐变标题" :class-names="{ header: 'custom-header', title: 'custom-title' }">
        <template #extra>
          <a href="#">操作</a>
        </template>
        <p>这是一个自定义头部和标题样式的抽屉</p>
        <p>头部使用渐变背景，标题使用渐变文字</p>
      </Drawer>
    </section>

    <!-- 场景 5: 自定义主体和页脚 -->
    <section class="demo-section">
      <h3>5. 自定义主体和页脚样式</h3>
      <Button type="primary" @click="open5 = true">打开抽屉（自定义主体和页脚）</Button>
      <Drawer
        v-model:open="open5"
        title="自定义主体和页脚"
        :class-names="{ body: 'custom-body', footer: 'custom-footer' }"
      >
        <p>这是一个自定义主体和页脚样式的抽屉</p>
        <p>主体区域使用柔和的背景色</p>
        <template #footer>
          <Button style="margin-right: 8px" @click="open5 = false">取消</Button>
          <Button type="primary" @click="open5 = false">确定</Button>
        </template>
      </Drawer>
    </section>

    <!-- 场景 6: 自定义扩展区域 -->
    <section class="demo-section">
      <h3>6. 自定义扩展区域样式</h3>
      <Button type="primary" @click="open6 = true">打开抽屉（自定义扩展区域）</Button>
      <Drawer v-model:open="open6" title="自定义扩展区域" :class-names="{ extra: 'custom-extra' }">
        <template #extra>
          <a href="#">链接 1</a>
          <a href="#" style="margin-left: 8px">链接 2</a>
        </template>
        <p>这是一个自定义扩展区域样式的抽屉</p>
        <p>右上角的操作链接使用自定义样式</p>
      </Drawer>
    </section>

    <!-- 场景 7: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>7. 组合使用多个 classNames</h3>
      <Button type="primary" @click="open7 = true">打开抽屉（综合样式）</Button>
      <Drawer
        v-model:open="open7"
        title="综合样式抽屉"
        :class-names="{
          mask: 'combined-mask',
          wrapper: 'combined-wrapper',
          content: 'combined-content',
          header: 'combined-header',
          title: 'combined-title',
          body: 'combined-body',
          footer: 'combined-footer',
        }"
      >
        <template #extra>
          <a href="#">操作</a>
        </template>
        <p>这是一个组合多个自定义样式的抽屉</p>
        <p>所有部分都有自定义样式</p>
        <template #footer>
          <Button style="margin-right: 8px" @click="open7 = false">取消</Button>
          <Button type="primary" @click="open7 = false">确定</Button>
        </template>
      </Drawer>
    </section>

    <!-- 场景 8: 使用 styles prop -->
    <section class="demo-section">
      <h3>8. 使用 styles 动态样式</h3>
      <Button type="primary" @click="open8 = true">打开抽屉（动态样式）</Button>
      <Drawer
        v-model:open="open8"
        title="动态样式抽屉"
        :styles="{
          mask: { background: 'rgba(0, 0, 0, 0.6)' },
          wrapper: { boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' },
          content: { borderLeft: '4px solid #1890ff' },
          header: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' },
          title: { fontWeight: 'bold', fontSize: '18px' },
          body: { padding: '32px', background: '#f0f2f5' },
          footer: { background: '#fafafa', borderTop: '2px solid #1890ff' },
        }"
      >
        <p>这是一个使用动态样式的抽屉</p>
        <p>通过 styles 属性设置内联样式</p>
        <template #footer>
          <Button style="margin-right: 8px" @click="open8 = false">取消</Button>
          <Button type="primary" @click="open8 = false">确定</Button>
        </template>
      </Drawer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from 'ant-design-hmfw'

const open1 = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const open4 = ref(false)
const open5 = ref(false)
const open6 = ref(false)
const open7 = ref(false)
const open8 = ref(false)
<\/script>

<style scoped>
.demo-drawer-classnames {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义遮罩 */
:deep(.custom-mask) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%);
  backdrop-filter: blur(4px);
}

/* 场景 2: 自定义包裹层 */
:deep(.custom-wrapper) {
  border-radius: 16px 0 0 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

/* 场景 3: 自定义内容区 */
:deep(.custom-content) {
  background: linear-gradient(to bottom, #f0f5ff 0%, #ffffff 100%);
  border-left: 4px solid #1890ff;
}

/* 场景 4: 自定义头部和标题 */
:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-bottom: none;
  padding: 20px 24px;
}

:deep(.custom-header .hmfw-drawer-close) {
  color: white;
}

:deep(.custom-header .hmfw-drawer-close:hover) {
  background: rgba(255, 255, 255, 0.2);
}

:deep(.custom-title) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 20px;
}

:deep(.custom-header .hmfw-drawer-extra a) {
  color: white;
  font-weight: 600;
  text-decoration: none;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
}

:deep(.custom-header .hmfw-drawer-extra a:hover) {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

/* 场景 5: 自定义主体和页脚 */
:deep(.custom-body) {
  background: #f6ffed;
  padding: 32px;
  color: #389e0d;
  font-size: 15px;
  line-height: 1.8;
}

:deep(.custom-footer) {
  background: linear-gradient(to right, #52c41a, #389e0d);
  border-top: none;
  padding: 16px 24px;
}

:deep(.custom-footer .hmfw-btn) {
  border-radius: 6px;
}

/* 场景 6: 自定义扩展区域 */
:deep(.custom-extra a) {
  padding: 6px 14px;
  background: #1890ff;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

:deep(.custom-extra a:hover) {
  background: #40a9ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(24, 144, 255, 0.3);
}

/* 场景 7: 组合样式 */
:deep(.combined-mask) {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
}

:deep(.combined-wrapper) {
  border-radius: 12px 0 0 12px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.3s ease;
}

:deep(.combined-content) {
  background: linear-gradient(to bottom, #fff7e6 0%, #ffffff 50%, #e6f7ff 100%);
  border-left: 5px solid #faad14;
}

:deep(.combined-header) {
  background: linear-gradient(135deg, #fa8c16 0%, #faad14 100%);
  border-bottom: 2px solid #fa8c16;
  padding: 24px;
}

:deep(.combined-header .hmfw-drawer-close) {
  color: white;
}

:deep(.combined-header .hmfw-drawer-close:hover) {
  background: rgba(255, 255, 255, 0.25);
  transform: rotate(90deg);
}

:deep(.combined-title) {
  color: white;
  font-weight: 700;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

:deep(.combined-header .hmfw-drawer-extra a) {
  color: #fff7e6;
  font-weight: 600;
  text-decoration: none;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

:deep(.combined-header .hmfw-drawer-extra a:hover) {
  background: rgba(255, 255, 255, 0.35);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.1);
}

:deep(.combined-body) {
  padding: 32px;
  color: #8c6e3b;
  font-size: 15px;
  line-height: 1.8;
  background: linear-gradient(135deg, rgba(250, 173, 20, 0.05) 0%, rgba(24, 144, 255, 0.05) 100%);
}

:deep(.combined-footer) {
  background: #fffbe6;
  border-top: 2px solid #ffd666;
  padding: 20px 24px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
}
</style>
`,It={style:{display:"flex",gap:"8px"}},At={style:{"text-align":"right"}},Lt=D({__name:"DrawerExtraFooter",setup(e){const l=y(!1),c=y("default");return(m,n)=>($(),N(L,null,[a("div",It,[s(d(k),{onClick:n[0]||(n[0]=()=>{l.value=!0,c.value="default"})},{default:o(()=>[...n[6]||(n[6]=[p(" 默认 378px ",-1)])]),_:1}),s(d(k),{onClick:n[1]||(n[1]=()=>{l.value=!0,c.value="large"})},{default:o(()=>[...n[7]||(n[7]=[p(" 大号 736px ",-1)])]),_:1})]),s(d(x),{open:l.value,"onUpdate:open":n[5]||(n[5]=u=>l.value=u),size:c.value,title:"尺寸"},{extra:o(()=>[s(d(k),{type:"primary",onClick:n[2]||(n[2]=u=>l.value=!1)},{default:o(()=>[...n[8]||(n[8]=[p(" 确定 ",-1)])]),_:1})]),footer:o(()=>[a("div",At,[s(d(k),{style:{"margin-right":"8px"},onClick:n[3]||(n[3]=u=>l.value=!1)},{default:o(()=>[...n[9]||(n[9]=[p(" 取消 ",-1)])]),_:1}),s(d(k),{type:"primary",onClick:n[4]||(n[4]=u=>l.value=!1)},{default:o(()=>[...n[10]||(n[10]=[p(" 提交 ",-1)])]),_:1})])]),default:o(()=>[a("p",null,"当前尺寸："+dt(c.value),1)]),_:1},8,["open","size"])],64))}}),Ut=`<template>
  <div style="display: flex; gap: 8px">
    <Button
      @click="
        () => {
          open = true
          size = 'default'
        }
      "
    >
      默认 378px
    </Button>
    <Button
      @click="
        () => {
          open = true
          size = 'large'
        }
      "
    >
      大号 736px
    </Button>
  </div>
  <Drawer v-model:open="open" :size="size" title="尺寸">
    <template #extra>
      <Button type="primary" @click="open = false"> 确定 </Button>
    </template>
    <p>当前尺寸：{{ size }}</p>
    <template #footer>
      <div style="text-align: right">
        <Button style="margin-right: 8px" @click="open = false"> 取消 </Button>
        <Button type="primary" @click="open = false"> 提交 </Button>
      </div>
    </template>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from 'ant-design-hmfw'

const open = ref(false)
const size = ref<'default' | 'large'>('default')
<\/script>
`,Ft=D({__name:"DrawerLoading",setup(e){const l=y(!1),c=y(!1);function m(){l.value=!0,c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return(n,u)=>($(),N(L,null,[s(d(k),{onClick:m},{default:o(()=>[...u[1]||(u[1]=[p(" 打开（加载中） ",-1)])]),_:1}),s(d(x),{open:l.value,"onUpdate:open":u[0]||(u[0]=b=>l.value=b),title:"加载中",loading:c.value},{default:o(()=>[...u[2]||(u[2]=[a("p",null,"数据加载完成后的抽屉内容。",-1)])]),_:1},8,["open","loading"])],64))}}),Mt=`<template>
  <Button @click="showLoading"> 打开（加载中） </Button>
  <Drawer v-model:open="open" title="加载中" :loading="loading">
    <p>数据加载完成后的抽屉内容。</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from 'ant-design-hmfw'

const open = ref(false)
const loading = ref(false)

function showLoading() {
  open.value = true
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
<\/script>
`,jt={style:{display:"flex",gap:"8px"}},Ht=D({__name:"DrawerPlacement",setup(e){const l=y(!1),c=y("right"),m=y("右侧"),n={top:"顶部",right:"右侧",bottom:"底部",left:"左侧"};function u(b){c.value=b,m.value=n[b],l.value=!0}return(b,i)=>($(),N(L,null,[a("div",jt,[s(d(k),{onClick:i[0]||(i[0]=g=>u("top"))},{default:o(()=>[...i[5]||(i[5]=[p(" 上 ",-1)])]),_:1}),s(d(k),{onClick:i[1]||(i[1]=g=>u("right"))},{default:o(()=>[...i[6]||(i[6]=[p(" 右 ",-1)])]),_:1}),s(d(k),{onClick:i[2]||(i[2]=g=>u("bottom"))},{default:o(()=>[...i[7]||(i[7]=[p(" 下 ",-1)])]),_:1}),s(d(k),{onClick:i[3]||(i[3]=g=>u("left"))},{default:o(()=>[...i[8]||(i[8]=[p(" 左 ",-1)])]),_:1})]),s(d(x),{open:l.value,"onUpdate:open":i[4]||(i[4]=g=>l.value=g),placement:c.value,title:`从${m.value}滑出`},{default:o(()=>[...i[9]||(i[9]=[a("p",null,"抽屉内容",-1)])]),_:1},8,["open","placement","title"])],64))}}),Rt=`<template>
  <div style="display: flex; gap: 8px">
    <Button @click="show('top')"> 上 </Button>
    <Button @click="show('right')"> 右 </Button>
    <Button @click="show('bottom')"> 下 </Button>
    <Button @click="show('left')"> 左 </Button>
  </div>
  <Drawer v-model:open="open" :placement="placement" :title="\`从\${placementText}滑出\`">
    <p>抽屉内容</p>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Drawer, Button } from 'ant-design-hmfw'

const open = ref(false)
const placement = ref<'top' | 'right' | 'bottom' | 'left'>('right')
const placementText = ref('右侧')

const textMap: Record<string, string> = {
  top: '顶部',
  right: '右侧',
  bottom: '底部',
  left: '左侧',
}

function show(dir: 'top' | 'right' | 'bottom' | 'left') {
  placement.value = dir
  placementText.value = textMap[dir]
  open.value = true
}
<\/script>
`,Wt={class:"markdown-body"},Xt={__name:"drawer",setup(e,{expose:l}){return l({frontmatter:{}}),(m,n)=>{const u=pt("DemoBlock");return $(),N("div",Wt,[n[0]||(n[0]=a("h1",{id:"drawer-抽屉",tabindex:"-1"},"Drawer 抽屉",-1)),n[1]||(n[1]=a("p",null,"屏幕边缘滑出的浮层面板。",-1)),n[2]||(n[2]=a("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=a("ul",null,[a("li",null,"当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出"),a("li",null,"当需要在当前任务流中插入临时任务，创建或预览附加内容时")],-1)),n[4]||(n[4]=a("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=a("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=a("p",null,"基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。",-1)),s(u,{title:"基础用法",source:d(ht)},{default:o(()=>[s(vt)]),_:1},8,["source"]),n[7]||(n[7]=a("h3",{id:"四个方向",tabindex:"-1"},"四个方向",-1)),n[8]||(n[8]=a("p",null,"抽屉可以从上、右、下、左四个方向滑出。",-1)),s(u,{title:"四个方向",source:d(Rt)},{default:o(()=>[s(Ht)]),_:1},8,["source"]),n[9]||(n[9]=a("h3",{id:"额外操作与页脚",tabindex:"-1"},"额外操作与页脚",-1)),n[10]||(n[10]=a("p",null,[p("通过 "),a("code",null,"extra"),p(" 插槽在右上角放置操作区，"),a("code",null,"footer"),p(" 插槽放置页脚。"),a("code",null,"size"),p(" 可选 "),a("code",null,"default"),p("（378px）与 "),a("code",null,"large"),p("（736px）两种预设。")],-1)),s(u,{title:"额外操作与页脚",source:d(Ut)},{default:o(()=>[s(Lt)]),_:1},8,["source"]),n[11]||(n[11]=a("h3",{id:"加载中",tabindex:"-1"},"加载中",-1)),n[12]||(n[12]=a("p",null,[p("通过 "),a("code",null,"loading"),p(" 在内容未就绪时展示骨架屏。")],-1)),s(u,{title:"加载中",source:d(Mt)},{default:o(()=>[s(Ft)]),_:1},8,["source"]),n[13]||(n[13]=a("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[14]||(n[14]=a("p",null,[p("通过 "),a("code",null,"classNames"),p(" / "),a("code",null,"styles"),p(" 对各子元素做细粒度样式控制。")],-1)),s(u,{title:"语义化 className 与 style",source:d(Tt)},{default:o(()=>[s(Pt)]),_:1},8,["source"]),n[15]||(n[15]=it(`<h2 id="api" tabindex="-1">API</h2><h3 id="drawer-props" tabindex="-1">Drawer Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open (v-model)</td><td>抽屉是否可见</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultOpen</td><td>非受控时的默认可见状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>title</td><td>标题</td><td><code>string | number | VNode | slot</code></td><td>-</td></tr><tr><td>placement</td><td>抽屉的方向</td><td><code>&#39;top&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;left&#39;</code></td><td><code>&#39;right&#39;</code></td></tr><tr><td>size</td><td>预设尺寸，<code>default</code> 为 378px、<code>large</code> 为 736px，也可传数字或字符串</td><td><code>&#39;default&#39; | &#39;large&#39; | number | string</code></td><td>-</td></tr><tr><td>width</td><td>宽度，placement 为 <code>left</code>/<code>right</code> 时生效（<code>size</code> 优先）</td><td><code>number | string</code></td><td><code>378</code></td></tr><tr><td>height</td><td>高度，placement 为 <code>top</code>/<code>bottom</code> 时生效（<code>size</code> 优先）</td><td><code>number | string</code></td><td><code>378</code></td></tr><tr><td>closable</td><td>是否显示关闭按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td><code>IconComponent</code></td><td>-</td></tr><tr><td>mask</td><td>是否展示遮罩</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>maskClosable</td><td>点击蒙层是否允许关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>keyboard</td><td>是否支持按 Esc 关闭</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>loading</td><td>是否展示骨架屏</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>zIndex</td><td>设置 z-index</td><td><code>number</code></td><td><code>1000</code></td></tr><tr><td>destroyOnHidden</td><td>关闭时是否销毁抽屉内的子元素</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>destroyOnClose</td><td><code>destroyOnHidden</code> 的旧称</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>forceRender</td><td>预渲染抽屉内的内容</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>focusTriggerAfterClose</td><td>关闭后是否将焦点返回触发元素</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>getContainer</td><td>挂载节点，<code>false</code> 时渲染在当前位置</td><td><code>string | HTMLElement | () =&gt; HTMLElement | false</code></td><td><code>body</code></td></tr><tr><td>rootClassName</td><td>根容器（含遮罩）的类名</td><td><code>string</code></td><td>-</td></tr><tr><td>rootStyle</td><td>根容器（含遮罩）的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>contentWrapperStyle</td><td>抽屉内容包裹层的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>bodyStyle</td><td>抽屉内容部分的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>headerStyle</td><td>抽屉头部的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>footerStyle</td><td>抽屉页脚的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>maskStyle</td><td>遮罩的样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DrawerClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DrawerStyles</code></td><td>-</td></tr></tbody></table><h3 id="drawer-slots" tabindex="-1">Drawer Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>抽屉主体内容</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>extra</td><td>右上角的操作区域</td></tr><tr><td>footer</td><td>抽屉的页脚</td></tr></tbody></table><h3 id="drawer-events" tabindex="-1">Drawer Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:open</td><td>可见状态变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>close</td><td>点击遮罩层、关闭按钮或按 Esc 时的回调</td><td><code>(e?: Event) =&gt; void</code></td></tr><tr><td>afterOpenChange</td><td>切换抽屉时动画结束后的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr></tbody></table><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">DrawerClassNames</span> <span class="token punctuation">{</span>
  mask<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 遮罩层</span>
  wrapper<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 抽屉内容包裹层</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 抽屉内容区</span>
  header<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 头部区域</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标题</span>
  extra<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 右上角扩展区域</span>
  body<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 主体内容区</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 页脚区域</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">DrawerStyles</span> <span class="token punctuation">{</span>
  mask<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  wrapper<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  content<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  header<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  title<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  extra<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  body<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  footer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-mask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.mask / styles.mask 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-content-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.wrapper / styles.wrapper 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.content / styles.content 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.header / styles.header 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-header-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>关闭按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.title / styles.title 应用于此 --&gt;</span>
            标题内容
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-extra<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.extra / styles.extra 应用于此 --&gt;</span>
          额外操作区
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.body / styles.body 应用于此 --&gt;</span>
        主体内容
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-drawer-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.footer / styles.footer 应用于此 --&gt;</span>
        页脚内容
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Drawer
    v-model:open=&quot;open&quot;
    title=&quot;自定义抽屉&quot;
    :class-names=&quot;{
      mask: &#39;custom-mask&#39;,
      wrapper: &#39;custom-wrapper&#39;,
      header: &#39;custom-header&#39;,
      body: &#39;custom-body&#39;,
    }&quot;
  &gt;
    &lt;p&gt;抽屉内容&lt;/p&gt;
  &lt;/Drawer&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.custom-mask) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.7) 100%);
  backdrop-filter: blur(4px);
}

:deep(.custom-wrapper) {
  border-radius: 16px 0 0 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

:deep(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

:deep(.custom-body) {
  background: #f6ffed;
  padding: 32px;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Drawer
    v-model:open=&quot;open&quot;
    title=&quot;动态样式&quot;
    :styles=&quot;{
      mask: { background: &#39;rgba(0, 0, 0, 0.6)&#39; },
      wrapper: { boxShadow: &#39;0 8px 32px rgba(0, 0, 0, 0.3)&#39; },
      header: { background: &#39;#1890ff&#39;, color: &#39;white&#39; },
      body: { padding: &#39;32px&#39;, background: &#39;#f0f2f5&#39; },
      footer: { background: &#39;#fafafa&#39;, borderTop: &#39;2px solid #1890ff&#39; },
    }&quot;
  &gt;
    &lt;p&gt;抽屉内容&lt;/p&gt;
    &lt;template #footer&gt;
      &lt;Button type=&quot;primary&quot;&gt;确定&lt;/Button&gt;
    &lt;/template&gt;
  &lt;/Drawer&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>wrapper</code> 对应 <code>contentWrapperStyle</code> prop，<code>body</code> 对应 <code>bodyStyle</code> prop，<code>header</code> 对应 <code>headerStyle</code> prop，<code>footer</code> 对应 <code>footerStyle</code> prop，<code>mask</code> 对应 <code>maskStyle</code> prop，新增的 <code>classNames</code>/<code>styles</code> 提供更一致的 API</li><li>自定义 <code>header</code> 样式时，注意关闭按钮的颜色需要单独处理（如 <code>.hmfw-drawer-close</code>）</li><li>当 <code>placement</code> 为 <code>left</code> 时，<code>wrapper</code> 的圆角方向需要调整为右侧</li></ul><hr><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本颜色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本颜色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>标准字号</td><td><code>14px</code></td></tr></tbody></table>`,23))])}}};export{Xt as default};
