import{d as B,u as En,r,m as tn,c as l,a as T,g as x,n as hn,o as O,b as M,e as m,f as a,A as Un,_ as Vn,h as Dn,w as A,i as Fn}from"./index-DpCWj_RH.js";import{c as v}from"./cls-S9IiI6wd.js";import{C as Rn}from"./CloseCircleFilled-CIh3C0a9.js";import{C as In}from"./ClockCircleOutlined-BPzV3AtJ.js";import{T as zn}from"./Trigger-BvJ5OT70.js";function E(n){return String(n).padStart(2,"0")}function L(n){if(!n)return{h:0,m:0,s:0};const c=n.toLowerCase(),i=c.includes("pm"),p=c.includes("am"),t=n.replace(/[^\d:]/g,"").split(":").map(w=>Number(w));let e=t[0]||0;const o=t[1]||0,k=t[2]||0;return i&&e<12&&(e+=12),p&&e===12&&(e=0),{h:e,m:o,s:k}}function an(n,c,i,p){const t=n>=12,e=n%12===0?12:n%12;return p.replace(/HH|H|hh|h|mm|m|ss|s|A|a/g,o=>{switch(o){case"HH":return E(n);case"H":return String(n);case"hh":return E(e);case"h":return String(e);case"mm":return E(c);case"m":return String(c);case"ss":return E(i);case"s":return String(i);case"A":return t?"PM":"AM";case"a":return t?"pm":"am";default:return o}})}function Wn(n){return/s/.test(n)}const b=B({name:"TimePicker",props:{value:String,defaultValue:String,format:{type:String,default:"HH:mm:ss"},disabled:Boolean,size:{type:String,default:"middle"},placeholder:{type:String,default:"请选择时间"},allowClear:{type:Boolean,default:!0},hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},disabledTime:Function,hideDisabledOptions:Boolean,showNow:{type:Boolean,default:!0},use12Hours:Boolean,status:{type:String,default:""},open:{type:Boolean,default:void 0},needConfirm:{type:Boolean,default:!0},changeOnScroll:Boolean,renderExtraFooter:Function,variant:{type:String,default:"outlined"},placement:{type:String,default:"bottomLeft"},classNames:Object,styles:Object},emits:["update:value","change","openChange","focus","blur"],setup(n,{emit:c,expose:i}){const p=En("time-picker"),t=L(n.defaultValue??n.value),e=r(t.h),o=r(t.m),k=r(t.s),w=r(t.h),N=r(t.m),q=r(t.s),j=r(!1),wn=r(),X=r(),V=r(!!n.defaultValue||!!n.value),Y=r(),G=r(),J=r(),Q=r(),z=T(()=>n.open!==void 0?n.open:j.value),en=T(()=>{if(n.value!==void 0){if(!n.value)return"";const s=L(n.value);return an(s.h,s.m,s.s,n.format)}return V.value?an(e.value,o.value,k.value,n.format):""}),h=T(()=>{if(n.value!==void 0){const s=L(n.value);return{h:s.h,m:s.m,s:s.s}}return n.needConfirm?{h:w.value,m:N.value,s:q.value}:{h:e.value,m:o.value,s:k.value}});tn(()=>n.value,s=>{if(s!==void 0)if(!s)e.value=0,o.value=0,k.value=0,w.value=0,N.value=0,q.value=0,V.value=!1;else{const d=L(s);e.value=d.h,o.value=d.m,k.value=d.s,w.value=d.h,N.value=d.m,q.value=d.s,V.value=!0}});const Cn=()=>{n.disabled||(n.needConfirm&&(w.value=e.value,N.value=o.value,q.value=k.value),j.value=!0,c("openChange",!0))},sn=()=>{n.needConfirm&&(w.value=e.value,N.value=o.value,q.value=k.value),j.value=!1,c("openChange",!1)},U=()=>{n.needConfirm&&(e.value=w.value,o.value=N.value,k.value=q.value);const s=an(e.value,o.value,k.value,n.format);V.value=!0,c("update:value",s),c("change",s,s),sn()},Sn=()=>{const s=new Date;n.needConfirm?(w.value=s.getHours(),N.value=s.getMinutes(),q.value=s.getSeconds()):(e.value=s.getHours(),o.value=s.getMinutes(),k.value=s.getSeconds()),n.needConfirm||U()},Pn=s=>{s.stopPropagation(),e.value=0,o.value=0,k.value=0,w.value=0,N.value=0,q.value=0,V.value=!1,c("update:value",void 0),c("change",void 0,"")},Z=T(()=>{var s;return((s=n.disabledTime)==null?void 0:s.call(n))??{}}),Tn=T(()=>{var y,u;const s=((u=(y=Z.value).disabledHours)==null?void 0:u.call(y))??[],d=n.use12Hours?12:24,g=[];for(let C=0;C<d;C+=n.hourStep)(!n.hideDisabledOptions||!s.includes(C))&&g.push(C);return g.map(C=>({value:C,disabled:s.includes(C)}))}),Nn=T(()=>{var g,y;const s=((y=(g=Z.value).disabledMinutes)==null?void 0:y.call(g,h.value.h))??[],d=[];for(let u=0;u<60;u+=n.minuteStep)(!n.hideDisabledOptions||!s.includes(u))&&d.push(u);return d.map(u=>({value:u,disabled:s.includes(u)}))}),qn=T(()=>{var g,y;const s=((y=(g=Z.value).disabledSeconds)==null?void 0:y.call(g,h.value.h,h.value.m))??[],d=[];for(let u=0;u<60;u+=n.secondStep)(!n.hideDisabledOptions||!s.includes(u))&&d.push(u);return d.map(u=>({value:u,disabled:s.includes(u)}))}),$n=T(()=>[{value:"AM",disabled:!1},{value:"PM",disabled:!1}]),W=T(()=>h.value.h>=12?"PM":"AM"),K=T(()=>Wn(n.format));let _=0;const nn=r({}),$=(s,d,g)=>{s&&nn.value[g]!==d&&(nn.value[g]=d,_&&cancelAnimationFrame(_),_=requestAnimationFrame(()=>{const y=s.querySelector(`[data-value="${d}"]`);y&&typeof y.scrollIntoView=="function"&&y.scrollIntoView({block:"nearest",behavior:"smooth"})}))};tn(z,s=>{s?hn(()=>{const d=n.use12Hours?h.value.h%12||12:h.value.h;$(Y.value,d,"h"),$(G.value,h.value.m,"m"),K.value&&$(J.value,h.value.s,"s"),n.use12Hours&&$(Q.value,W.value,"p")}):nn.value={}}),tn(()=>[h.value.h,h.value.m,h.value.s,W.value],()=>{z.value&&hn(()=>{const s=n.use12Hours?h.value.h%12||12:h.value.h;$(Y.value,s,"h"),$(G.value,h.value.m,"m"),K.value&&$(J.value,h.value.s,"s"),n.use12Hours&&$(Q.value,W.value,"p")})});const Hn=(s,d)=>{d||(n.needConfirm?w.value=s:(e.value=s,n.changeOnScroll&&U()))},Bn=(s,d)=>{d||(n.needConfirm?N.value=s:(o.value=s,n.changeOnScroll&&U()))},On=(s,d)=>{d||(n.needConfirm?q.value=s:(k.value=s,n.changeOnScroll&&U()))},Mn=s=>{const d=s==="PM",g=n.needConfirm?w.value:e.value,y=g>=12;if(d!==y){const u=d?g+12:g-12;n.needConfirm?w.value=u:(e.value=u,n.changeOnScroll&&U())}};i({focus:()=>{var s;return(s=X.value)==null?void 0:s.focus()},blur:()=>{var s;return(s=X.value)==null?void 0:s.blur()}});const An=()=>{var s,d,g,y,u,C,D,F,R,I,on,ln,pn,cn,dn,rn,un,mn,kn,fn,gn,vn,bn,yn,xn;return l("div",{ref:wn,class:v(`${p}-popup`,(s=n.classNames)==null?void 0:s.popup),style:(d=n.styles)==null?void 0:d.popup},[l("div",{class:v(`${p}-panel`,(g=n.classNames)==null?void 0:g.panel),style:(y=n.styles)==null?void 0:y.panel},[l("div",{class:v(`${p}-panel-inner`,(u=n.classNames)==null?void 0:u.panelInner),style:(C=n.styles)==null?void 0:C.panelInner},[l("ul",{class:v(`${p}-panel-column`,(D=n.classNames)==null?void 0:D.column),style:(F=n.styles)==null?void 0:F.column,ref:Y},[Tn.value.map(({value:f,disabled:S})=>{var P,H;return l("li",{key:f,"data-value":f,class:v(`${p}-panel-cell`,{[`${p}-panel-cell-selected`]:n.use12Hours?(h.value.h%12||12)===f:h.value.h===f,[`${p}-panel-cell-disabled`]:S},(P=n.classNames)==null?void 0:P.cell),style:(H=n.styles)==null?void 0:H.cell,onClick:()=>Hn(f,S)},[E(f)])})]),l("ul",{class:v(`${p}-panel-column`,(R=n.classNames)==null?void 0:R.column),style:(I=n.styles)==null?void 0:I.column,ref:G},[Nn.value.map(({value:f,disabled:S})=>{var P,H;return l("li",{key:f,"data-value":f,class:v(`${p}-panel-cell`,{[`${p}-panel-cell-selected`]:h.value.m===f,[`${p}-panel-cell-disabled`]:S},(P=n.classNames)==null?void 0:P.cell),style:(H=n.styles)==null?void 0:H.cell,onClick:()=>Bn(f,S)},[E(f)])})]),K.value&&l("ul",{class:v(`${p}-panel-column`,(on=n.classNames)==null?void 0:on.column),style:(ln=n.styles)==null?void 0:ln.column,ref:J},[qn.value.map(({value:f,disabled:S})=>{var P,H;return l("li",{key:f,"data-value":f,class:v(`${p}-panel-cell`,{[`${p}-panel-cell-selected`]:h.value.s===f,[`${p}-panel-cell-disabled`]:S},(P=n.classNames)==null?void 0:P.cell),style:(H=n.styles)==null?void 0:H.cell,onClick:()=>On(f,S)},[E(f)])})]),n.use12Hours&&l("ul",{class:v(`${p}-panel-column`,(pn=n.classNames)==null?void 0:pn.column),style:(cn=n.styles)==null?void 0:cn.column,ref:Q},[$n.value.map(({value:f})=>{var S,P;return l("li",{key:f,"data-value":f,class:v(`${p}-panel-cell`,{[`${p}-panel-cell-selected`]:W.value===f},(S=n.classNames)==null?void 0:S.cell),style:(P=n.styles)==null?void 0:P.cell,onClick:()=>Mn(f)},[f])})])]),l("div",{class:v(`${p}-panel-footer`,(dn=n.classNames)==null?void 0:dn.footer),style:(rn=n.styles)==null?void 0:rn.footer},[l("div",{class:v(`${p}-panel-footer-extra`,(un=n.classNames)==null?void 0:un.footerExtra),style:(mn=n.styles)==null?void 0:mn.footerExtra},[(kn=n.renderExtraFooter)==null?void 0:kn.call(n)]),l("div",{class:v(`${p}-panel-footer-actions`,(fn=n.classNames)==null?void 0:fn.footerActions),style:(gn=n.styles)==null?void 0:gn.footerActions},[n.showNow&&l("button",{class:v(`${p}-panel-footer-btn`,(vn=n.classNames)==null?void 0:vn.now),style:(bn=n.styles)==null?void 0:bn.now,onClick:Sn},[x("此刻")]),n.needConfirm&&l("button",{class:v(`${p}-panel-footer-btn`,`${p}-panel-footer-ok`,(yn=n.classNames)==null?void 0:yn.ok),style:(xn=n.styles)==null?void 0:xn.ok,onClick:U},[x("确定")])])])])])};return()=>{var s,d,g,y;return l(zn,{open:z.value,trigger:"click",placement:n.placement,disabled:n.disabled,destroyOnHidden:!0,triggerClass:v(p,`${p}-${n.size}`,`${p}-${n.variant}`,{[`${p}-open`]:z.value,[`${p}-disabled`]:n.disabled,[`${p}-status-error`]:n.status==="error",[`${p}-status-warning`]:n.status==="warning"},(s=n.classNames)==null?void 0:s.root),triggerStyle:(d=n.styles)==null?void 0:d.root,popupClass:v(`${p}-popup`,(g=n.classNames)==null?void 0:g.popup),popupStyle:(y=n.styles)==null?void 0:y.popup,onOpenChange:u=>{u?Cn():sn()}},{default:()=>{var u,C,D,F,R,I;return l("span",{class:v(`${p}-input`,(u=n.classNames)==null?void 0:u.input),style:(C=n.styles)==null?void 0:C.input},[l("input",{ref:X,readonly:!0,placeholder:n.placeholder,value:en.value,disabled:n.disabled,class:`${p}-input-inner`,onFocus:()=>c("focus"),onBlur:()=>c("blur")},null),n.allowClear&&en.value&&!n.disabled&&l("span",{class:v(`${p}-clear`,(D=n.classNames)==null?void 0:D.clear),style:(F=n.styles)==null?void 0:F.clear,onClick:Pn},[l(Rn,null,null)]),l("span",{class:v(`${p}-suffix`,(R=n.classNames)==null?void 0:R.suffix),style:(I=n.styles)==null?void 0:I.suffix},[l(In,null,null)])])},popup:({placement:u})=>An()})}}}),Ln={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},jn=B({__name:"TimePickerBasic",setup(n){const c=r(""),i=r("10:30:00"),p=t=>{console.log("选中时间：",t)};return(t,e)=>(O(),M("div",Ln,[l(m(b),{value:c.value,"onUpdate:value":e[0]||(e[0]=o=>c.value=o),placeholder:"请选择时间",onChange:p},null,8,["value"]),l(m(b),{value:i.value,"onUpdate:value":e[1]||(e[1]=o=>i.value=o),placeholder:"禁用状态",disabled:""},null,8,["value"]),a("p",null,"选中时间："+Un(c.value),1)]))}}),Xn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <TimePicker v-model:value="time" placeholder="请选择时间" @change="handleChange" />
    <TimePicker v-model:value="time2" placeholder="禁用状态" disabled />
    <p>选中时间：{{ time }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time = ref('')
const time2 = ref('10:30:00')

const handleChange = (value: string) => {
  console.log('选中时间：', value)
}
<\/script>
`,Yn={style:{display:"flex","flex-direction":"column",gap:"24px"}},Gn=B({__name:"TimePickerClassNames",setup(n){return(c,i)=>(O(),M("div",Yn,[a("div",null,[i[0]||(i[0]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义触发器与输入区域：",-1)),l(m(b),{placeholder:"选择时间","class-names":{root:"custom-trigger",input:"custom-input",suffix:"custom-suffix"}})]),a("div",null,[i[1]||(i[1]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义弹层与时间列：",-1)),l(m(b),{placeholder:"选择时间","class-names":{popup:"custom-popup",panel:"custom-panel",column:"custom-column",cell:"custom-cell"}})]),a("div",null,[i[2]||(i[2]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义底部按钮样式：",-1)),l(m(b),{placeholder:"选择时间","need-confirm":!0,"class-names":{footer:"custom-footer",now:"custom-now-btn",ok:"custom-ok-btn"}})]),a("div",null,[i[3]||(i[3]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式对象：",-1)),l(m(b),{placeholder:"选择时间",styles:{root:{borderRadius:"20px",borderColor:"#722ed1"},input:{color:"#722ed1",fontWeight:500},suffix:{color:"#722ed1",fontSize:"18px"}}})]),a("div",null,[i[4]||(i[4]=a("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合 classNames 与 styles：",-1)),l(m(b),{placeholder:"选择时间","need-confirm":!0,"class-names":{root:"gradient-trigger",popup:"gradient-popup",ok:"gradient-ok"},styles:{panel:{borderRadius:"12px"},cell:{fontWeight:500}}})])]))}}),Jn=Vn(Gn,[["__scopeId","data-v-8e2f9a88"]]),Qn=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义触发器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义触发器与输入区域：</div>
      <TimePicker
        placeholder="选择时间"
        :class-names="{
          root: 'custom-trigger',
          input: 'custom-input',
          suffix: 'custom-suffix',
        }"
      />
    </div>

    <!-- 场景 2：自定义弹层与面板 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义弹层与时间列：</div>
      <TimePicker
        placeholder="选择时间"
        :class-names="{
          popup: 'custom-popup',
          panel: 'custom-panel',
          column: 'custom-column',
          cell: 'custom-cell',
        }"
      />
    </div>

    <!-- 场景 3：自定义底部按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义底部按钮样式：</div>
      <TimePicker
        placeholder="选择时间"
        :need-confirm="true"
        :class-names="{
          footer: 'custom-footer',
          now: 'custom-now-btn',
          ok: 'custom-ok-btn',
        }"
      />
    </div>

    <!-- 场景 4：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式对象：</div>
      <TimePicker
        placeholder="选择时间"
        :styles="{
          root: { borderRadius: '20px', borderColor: '#722ed1' },
          input: { color: '#722ed1', fontWeight: 500 },
          suffix: { color: '#722ed1', fontSize: '18px' },
        }"
      />
    </div>

    <!-- 场景 5：组合使用 classNames + styles -->
    <div>
      <div style="margin-bottom: 8px; color: #666">组合 classNames 与 styles：</div>
      <TimePicker
        placeholder="选择时间"
        :need-confirm="true"
        :class-names="{
          root: 'gradient-trigger',
          popup: 'gradient-popup',
          ok: 'gradient-ok',
        }"
        :styles="{
          panel: { borderRadius: '12px' },
          cell: { fontWeight: 500 },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TimePicker } from '@hmfw/ant-design'
<\/script>

<style scoped>
/* 场景 1：触发器渐变 */
:deep(.custom-trigger) {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  transition: all 0.3s;
}

:deep(.custom-trigger:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

:deep(.custom-input) {
  color: #667eea;
  font-weight: 500;
}

:deep(.custom-suffix) {
  color: #764ba2;
  font-size: 18px;
}

/* 场景 5：整体渐变主题 */
:deep(.gradient-trigger) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  transition: all 0.3s;
}

:deep(.gradient-trigger:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

:deep(.gradient-trigger .hmfw-time-picker-input) {
  color: white;
}

:deep(.gradient-trigger .hmfw-time-picker-suffix) {
  color: white;
}

:deep(.gradient-ok) {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%) !important;
  border: none !important;
  color: white !important;
  font-weight: 500;
  transition: all 0.3s;
}

:deep(.gradient-ok:hover) {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4);
}
</style>

<style>
/* 弹层通过 Teleport 渲染到 body，必须使用全局样式（非 scoped） */

/* 场景 2：弹层与面板自定义 */
.custom-popup {
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2) !important;
}

.custom-panel {
  border-radius: 12px;
  background: linear-gradient(to bottom, #f0f5ff 0%, #ffffff 100%);
}

.custom-column {
  scrollbar-width: thin;
  scrollbar-color: #667eea #f0f5ff;
}

.custom-cell {
  transition: all 0.3s;
  border-radius: 4px;
  margin: 2px 4px;
}

.custom-cell:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  transform: scale(1.05);
}

.custom-cell.hmfw-time-picker-panel-cell-selected {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%) !important;
  color: white !important;
  font-weight: 600;
}

/* 场景 3：底部按钮自定义 */
.custom-footer {
  background: #f6ffed;
  border-top: 2px solid #b7eb8f;
}

.custom-now-btn {
  color: #52c41a;
  font-weight: 500;
  transition: all 0.3s;
}

.custom-now-btn:hover {
  background: #d9f7be !important;
  transform: translateX(2px);
}

.custom-ok-btn {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%) !important;
  border: none !important;
  color: white !important;
  font-weight: 500;
  transition: all 0.3s;
}

.custom-ok-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(82, 196, 26, 0.4);
}

/* 场景 5：渐变弹层 */
.gradient-popup {
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.3) !important;
}

.gradient-popup .hmfw-time-picker-panel {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
}

.gradient-popup .hmfw-time-picker-panel-cell:hover {
  background: rgba(102, 126, 234, 0.1) !important;
  color: #667eea !important;
}

.gradient-popup .hmfw-time-picker-panel-cell-selected {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
}
</style>
`,Zn={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},Kn=B({__name:"TimePickerConfirm",setup(n){const c=r(""),i=r("");return(p,t)=>(O(),M("div",Zn,[a("div",null,[t[2]||(t[2]=a("p",{style:{"margin-bottom":"4px"}},"需要确认（needConfirm）：",-1)),l(m(b),{value:c.value,"onUpdate:value":t[0]||(t[0]=e=>c.value=e),"need-confirm":!0,placeholder:"点击确定按钮生效"},null,8,["value"])]),a("div",null,[t[3]||(t[3]=a("p",{style:{"margin-bottom":"4px"}},"滚动即改变（changeOnScroll）：",-1)),l(m(b),{value:i.value,"onUpdate:value":t[1]||(t[1]=e=>i.value=e),"change-on-scroll":!0,"need-confirm":!1,placeholder:"选择即生效"},null,8,["value"])])]))}}),_n=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">需要确认（needConfirm）：</p>
      <TimePicker v-model:value="time1" :need-confirm="true" placeholder="点击确定按钮生效" />
    </div>
    <div>
      <p style="margin-bottom: 4px">滚动即改变（changeOnScroll）：</p>
      <TimePicker v-model:value="time2" :change-on-scroll="true" :need-confirm="false" placeholder="选择即生效" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time1 = ref('')
const time2 = ref('')
<\/script>
`,nt={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},tt=B({__name:"TimePickerDisabled",setup(n){const c=r(""),i=r(""),p=()=>({disabledHours:()=>[0,1,2,3,4,5]}),t=()=>({disabledHours:()=>[0,1,2,3,4,5]});return(e,o)=>(O(),M("div",nt,[a("div",null,[o[2]||(o[2]=a("p",{style:{"margin-bottom":"4px"}},"禁用部分小时：",-1)),l(m(b),{value:c.value,"onUpdate:value":o[0]||(o[0]=k=>c.value=k),"disabled-time":p,placeholder:"禁用 0-5 时"},null,8,["value"])]),a("div",null,[o[3]||(o[3]=a("p",{style:{"margin-bottom":"4px"}},"隐藏禁用选项：",-1)),l(m(b),{value:i.value,"onUpdate:value":o[1]||(o[1]=k=>i.value=k),"disabled-time":t,"hide-disabled-options":!0,placeholder:"隐藏 0-5 时"},null,8,["value"])])]))}}),at=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">禁用部分小时：</p>
      <TimePicker v-model:value="time1" :disabled-time="disabledTime1" placeholder="禁用 0-5 时" />
    </div>
    <div>
      <p style="margin-bottom: 4px">隐藏禁用选项：</p>
      <TimePicker
        v-model:value="time2"
        :disabled-time="disabledTime2"
        :hide-disabled-options="true"
        placeholder="隐藏 0-5 时"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time1 = ref('')
const time2 = ref('')

const disabledTime1 = () => ({
  disabledHours: () => [0, 1, 2, 3, 4, 5],
})

const disabledTime2 = () => ({
  disabledHours: () => [0, 1, 2, 3, 4, 5],
})
<\/script>
`,et={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},st=B({__name:"TimePickerFormat",setup(n){const c=r(""),i=r(""),p=r("");return(t,e)=>(O(),M("div",et,[a("div",null,[e[3]||(e[3]=a("p",{style:{"margin-bottom":"4px"}},"只显示时分（HH:mm）：",-1)),l(m(b),{value:c.value,"onUpdate:value":e[0]||(e[0]=o=>c.value=o),format:"HH:mm",placeholder:"选择时分"},null,8,["value"])]),a("div",null,[e[4]||(e[4]=a("p",{style:{"margin-bottom":"4px"}},"12 小时制：",-1)),l(m(b),{value:i.value,"onUpdate:value":e[1]||(e[1]=o=>i.value=o),"use12-hours":!0,format:"h:mm a",placeholder:"12 小时制"},null,8,["value"])]),a("div",null,[e[5]||(e[5]=a("p",{style:{"margin-bottom":"4px"}},"不显示秒：",-1)),l(m(b),{value:p.value,"onUpdate:value":e[2]||(e[2]=o=>p.value=o),format:"HH:mm","show-now":!1,placeholder:"不显示秒"},null,8,["value"])])]))}}),ot=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">只显示时分（HH:mm）：</p>
      <TimePicker v-model:value="time1" format="HH:mm" placeholder="选择时分" />
    </div>
    <div>
      <p style="margin-bottom: 4px">12 小时制：</p>
      <TimePicker v-model:value="time2" :use12-hours="true" format="h:mm a" placeholder="12 小时制" />
    </div>
    <div>
      <p style="margin-bottom: 4px">不显示秒：</p>
      <TimePicker v-model:value="time3" format="HH:mm" :show-now="false" placeholder="不显示秒" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
<\/script>
`,lt={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},pt=B({__name:"TimePickerStep",setup(n){const c=r(""),i=r(""),p=r("");return(t,e)=>(O(),M("div",lt,[a("div",null,[e[3]||(e[3]=a("p",{style:{"margin-bottom":"4px"}},"小时步长 2：",-1)),l(m(b),{value:c.value,"onUpdate:value":e[0]||(e[0]=o=>c.value=o),"hour-step":2,placeholder:"小时步长 2"},null,8,["value"])]),a("div",null,[e[4]||(e[4]=a("p",{style:{"margin-bottom":"4px"}},"分钟步长 15：",-1)),l(m(b),{value:i.value,"onUpdate:value":e[1]||(e[1]=o=>i.value=o),"minute-step":15,placeholder:"分钟步长 15"},null,8,["value"])]),a("div",null,[e[5]||(e[5]=a("p",{style:{"margin-bottom":"4px"}},"秒步长 30：",-1)),l(m(b),{value:p.value,"onUpdate:value":e[2]||(e[2]=o=>p.value=o),"second-step":30,placeholder:"秒步长 30"},null,8,["value"])])]))}}),ct=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">小时步长 2：</p>
      <TimePicker v-model:value="time1" :hour-step="2" placeholder="小时步长 2" />
    </div>
    <div>
      <p style="margin-bottom: 4px">分钟步长 15：</p>
      <TimePicker v-model:value="time2" :minute-step="15" placeholder="分钟步长 15" />
    </div>
    <div>
      <p style="margin-bottom: 4px">秒步长 30：</p>
      <TimePicker v-model:value="time3" :second-step="30" placeholder="秒步长 30" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
<\/script>
`,it={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},dt=B({__name:"TimePickerVariant",setup(n){const c=r(""),i=r(""),p=r(""),t=r("");return(e,o)=>(O(),M("div",it,[a("div",null,[o[4]||(o[4]=a("p",{style:{"margin-bottom":"4px"}},"Outlined（默认）：",-1)),l(m(b),{value:c.value,"onUpdate:value":o[0]||(o[0]=k=>c.value=k),variant:"outlined",placeholder:"Outlined"},null,8,["value"])]),a("div",null,[o[5]||(o[5]=a("p",{style:{"margin-bottom":"4px"}},"Filled：",-1)),l(m(b),{value:i.value,"onUpdate:value":o[1]||(o[1]=k=>i.value=k),variant:"filled",placeholder:"Filled"},null,8,["value"])]),a("div",null,[o[6]||(o[6]=a("p",{style:{"margin-bottom":"4px"}},"Borderless：",-1)),l(m(b),{value:p.value,"onUpdate:value":o[2]||(o[2]=k=>p.value=k),variant:"borderless",placeholder:"Borderless"},null,8,["value"])]),a("div",null,[o[7]||(o[7]=a("p",{style:{"margin-bottom":"4px"}},"Underlined：",-1)),l(m(b),{value:t.value,"onUpdate:value":o[3]||(o[3]=k=>t.value=k),variant:"underlined",placeholder:"Underlined"},null,8,["value"])])]))}}),rt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">Outlined（默认）：</p>
      <TimePicker v-model:value="time1" variant="outlined" placeholder="Outlined" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Filled：</p>
      <TimePicker v-model:value="time2" variant="filled" placeholder="Filled" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Borderless：</p>
      <TimePicker v-model:value="time3" variant="borderless" placeholder="Borderless" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Underlined：</p>
      <TimePicker v-model:value="time4" variant="underlined" placeholder="Underlined" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time1 = ref('')
const time2 = ref('')
const time3 = ref('')
const time4 = ref('')
<\/script>
`,ut={class:"markdown-body"},bt={__name:"time-picker",setup(n,{expose:c}){return c({frontmatter:{}}),(p,t)=>{const e=Dn("DemoBlock");return O(),M("div",ut,[t[0]||(t[0]=a("h1",{id:"timepicker-时间选择框",tabindex:"-1"},"TimePicker 时间选择框",-1)),t[1]||(t[1]=a("p",null,"输入或选择时间的控件。",-1)),t[2]||(t[2]=a("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=a("p",null,"当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。",-1)),t[4]||(t[4]=a("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=a("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=a("p",null,"点击 TimePicker，然后可以在浮层中选择或者输入某一时间。",-1)),l(e,{title:"基础用法",source:m(Xn)},{default:A(()=>[l(jn)]),_:1},8,["source"]),t[7]||(t[7]=a("h3",{id:"步进",tabindex:"-1"},"步进",-1)),t[8]||(t[8]=a("p",null,[x("通过 "),a("code",null,"hour-step"),x("、"),a("code",null,"minute-step"),x("、"),a("code",null,"second-step"),x(" 设置时间步长。")],-1)),l(e,{title:"步进",source:m(ct)},{default:A(()=>[l(pt)]),_:1},8,["source"]),t[9]||(t[9]=a("h3",{id:"格式化",tabindex:"-1"},"格式化",-1)),t[10]||(t[10]=a("p",null,[x("通过 "),a("code",null,"format"),x(" 属性自定义时间格式，通过 "),a("code",null,"use12Hours"),x(" 开启 12 小时制。")],-1)),l(e,{title:"格式化",source:m(ot)},{default:A(()=>[l(st)]),_:1},8,["source"]),t[11]||(t[11]=a("h3",{id:"禁用时间",tabindex:"-1"},"禁用时间",-1)),t[12]||(t[12]=a("p",null,[x("通过 "),a("code",null,"disabledTime"),x(" 禁用部分时间选项，"),a("code",null,"hideDisabledOptions"),x(" 可以隐藏禁用的选项。")],-1)),l(e,{title:"禁用时间",source:m(at)},{default:A(()=>[l(tt)]),_:1},8,["source"]),t[13]||(t[13]=a("h3",{id:"确认模式",tabindex:"-1"},"确认模式",-1)),t[14]||(t[14]=a("p",null,[x("通过 "),a("code",null,"needConfirm"),x(" 需要点击确定按钮才生效，"),a("code",null,"changeOnScroll"),x(" 可以在滚动时立即触发变化。")],-1)),l(e,{title:"确认模式",source:m(_n)},{default:A(()=>[l(Kn)]),_:1},8,["source"]),t[15]||(t[15]=a("h3",{id:"变体",tabindex:"-1"},"变体",-1)),t[16]||(t[16]=a("p",null,[x("通过 "),a("code",null,"variant"),x(" 设置不同的输入框样式。")],-1)),l(e,{title:"变体",source:m(rt)},{default:A(()=>[l(dt)]),_:1},8,["source"]),t[17]||(t[17]=a("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[18]||(t[18]=a("p",null,[x("通过 "),a("code",null,"classNames"),x(" / "),a("code",null,"styles"),x(" 对各子元素做细粒度样式控制。")],-1)),l(e,{title:"语义化 className 与 style",source:m(Qn)},{default:A(()=>[l(Jn)]),_:1},8,["source"]),t[19]||(t[19]=Fn(`<h2 id="api" tabindex="-1">API</h2><h3 id="timepicker-props" tabindex="-1">TimePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>时间</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认时间</td><td><code>string</code></td><td>-</td></tr><tr><td>format</td><td>展示的时间格式</td><td><code>string</code></td><td><code>&#39;HH:mm:ss&#39;</code></td></tr><tr><td>disabled</td><td>禁用全部操作</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>placeholder</td><td>没有值的时候显示的内容</td><td><code>string</code></td><td><code>&#39;请选择时间&#39;</code></td></tr><tr><td>allowClear</td><td>是否展示清除按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>hourStep</td><td>小时选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>minuteStep</td><td>分钟选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>secondStep</td><td>秒选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>disabledTime</td><td>禁用部分时间选项</td><td><code>() =&gt; DisabledTimeConfig</code></td><td>-</td></tr><tr><td>hideDisabledOptions</td><td>隐藏禁用的选项</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showNow</td><td>面板是否显示&quot;此刻&quot;按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>use12Hours</td><td>使用 12 小时制，为 true 时 format 默认为 h:mm:ss a</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>needConfirm</td><td>需要点击确定按钮才触发值变化</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>changeOnScroll</td><td>滚动时立即触发选择</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>renderExtraFooter</td><td>在面板底部渲染额外的内容</td><td><code>() =&gt; VNodeChild</code></td><td>-</td></tr><tr><td>variant</td><td>输入框变体</td><td><code>&#39;outlined&#39; | &#39;borderless&#39; | &#39;filled&#39; | &#39;underlined&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>placement</td><td>浮层弹出位置</td><td><code>&#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;topLeft&#39; | &#39;topRight&#39;</code></td><td><code>&#39;bottomLeft&#39;</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TimePickerClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TimePickerStyles</code></td><td>-</td></tr></tbody></table><h3 id="disabledtimeconfig" tabindex="-1">DisabledTimeConfig</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">DisabledTimeConfig</span> <span class="token punctuation">{</span>
  disabledHours<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  disabledMinutes<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>selectedHour<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  disabledSeconds<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>selectedHour<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> selectedMinute<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="timepicker-events" tabindex="-1">TimePicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>时间发生变化的回调</td><td><code>(value: string | undefined) =&gt; void</code></td></tr><tr><td>change</td><td>时间发生变化的回调</td><td><code>(value: string | undefined, timeString: string) =&gt; void</code></td></tr><tr><td>openChange</td><td>面板打开/关闭时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时的回调</td><td><code>() =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="timepicker-methods" tabindex="-1">TimePicker Methods</h3><table><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>focus()</td><td>获取焦点</td></tr><tr><td>blur()</td><td>失去焦点</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">TimePickerClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器</span>
  input<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 输入区域</span>
  clear<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 清除按钮</span>
  suffix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 后缀图标</span>
  popup<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 弹层容器</span>
  panel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板</span>
  panelInner<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板内部容器</span>
  column<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 时间列（小时/分钟/秒共用）</span>
  cell<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 时间单元格（所有列共用）</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 底部区域</span>
  footerExtra<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 额外底部内容</span>
  footerActions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 底部按钮区域</span>
  now<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// &quot;此刻&quot;按钮</span>
  ok<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// &quot;确定&quot;按钮</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">TimePickerStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  input<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  clear<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  suffix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  popup<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  panel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  panelInner<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  column<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  cell<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  footer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  footerExtra<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  footerActions<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  now<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  ok<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 触发器部分 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-input<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>12:00:00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.input / styles.input 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.clear / styles.clear 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>🕐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.suffix / styles.suffix 应用于此 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 弹层部分（Teleport 到 body） --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-popup<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.popup / styles.popup 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.panel / styles.panel 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-panel-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.panelInner / styles.panelInner 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-panel-column<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.column / styles.column 应用于此（小时/分钟/秒/AM-PM 共用） --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-panel-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.cell / styles.cell 应用于此（所有列的单元格共用） --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-panel-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.footer / styles.footer 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-panel-footer-extra<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>额外内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.footerExtra / styles.footerExtra 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-panel-footer-actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.footerActions / styles.footerActions 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-panel-footer-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>此刻<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.now / styles.now 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-time-picker-panel-footer-ok<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>确定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.ok / styles.ok 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>
    <span class="token attr-name">:classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-trigger&#39;,
      input: &#39;my-input&#39;,
      popup: &#39;my-popup&#39;,
      cell: &#39;my-cell&#39;,
      ok: &#39;my-ok-btn&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">/* popup 通过 Teleport 渲染到 body，必须使用全局样式 */</span>
<span class="token selector">.my-popup</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 8px 24px <span class="token function">rgba</span><span class="token punctuation">(</span>102<span class="token punctuation">,</span> 126<span class="token punctuation">,</span> 234<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.my-cell:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-trigger)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid transparent<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>white<span class="token punctuation">,</span> white<span class="token punctuation">)</span> padding-box<span class="token punctuation">,</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-input)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #667eea<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-ok-btn)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #52c41a 0%<span class="token punctuation">,</span> #389e0d 100%<span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;20px&#39;, borderColor: &#39;#722ed1&#39; },
      input: { color: &#39;#722ed1&#39;, fontWeight: 500 },
      suffix: { color: &#39;#722ed1&#39;, fontSize: &#39;18px&#39; },
      panel: { borderRadius: &#39;12px&#39; },
      cell: { fontWeight: 500 },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>popup</code>、<code>panel</code>、<code>column</code>、<code>cell</code>、<code>footer</code> 等弹层元素通过 <code>Teleport to=&quot;body&quot;</code> 渲染，其样式必须使用 <code>:global()</code> 或非 scoped 的全局样式，使用 <code>:deep()</code> 无法穿透</li><li><code>clear</code> 仅在 <code>allowClear</code> 启用且有选中值时显示</li><li><code>column</code> 应用于所有时间列（小时/分钟/秒/AM-PM），<code>cell</code> 应用于所有列的单元格</li><li><code>footer</code> 包含 <code>footerExtra</code>（<code>renderExtraFooter</code> 渲染的内容）和 <code>footerActions</code>（“此刻”/&quot;确定&quot;按钮区域）</li><li><code>now</code> 按钮仅在 <code>showNow</code> 为 <code>true</code> 时显示，<code>ok</code> 按钮仅在 <code>needConfirm</code> 为 <code>true</code> 时显示</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题色背景</td><td><code>#e6f4ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态颜色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态颜色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本颜色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本颜色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本颜色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-placeholder</code></td><td>占位符文本颜色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-border-secondary</code></td><td>次要边框颜色</td><td><code>#f0f0f0</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次要填充颜色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>三级填充颜色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用容器背景</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-bg-text-hover</code></td><td>文本悬停背景</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr></tbody></table>`,25))])}}};export{bt as default};
