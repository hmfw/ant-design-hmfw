import{d as O,u as Tn,r as u,m as dn,c as l,a as P,g as b,n as rn,o as A,b as E,e as k,f as s,A as Pn,_ as Nn,h as qn,w as U,i as Hn}from"./index-Bp9Mx9oa.js";import{c as w}from"./cls-S9IiI6wd.js";import{C as $n}from"./CloseCircleFilled-C5Je1nk1.js";import{C as Bn}from"./ClockCircleOutlined-CLNeHCmo.js";import{T as Mn}from"./Trigger-BibV-SUH.js";function R(n){return String(n).padStart(2,"0")}function X(n){if(!n)return{h:0,m:0,s:0};const c=n.toLowerCase(),i=c.includes("pm"),p=c.includes("am"),t=n.replace(/[^\d:]/g,"").split(":").map(S=>Number(S));let e=t[0]||0;const o=t[1]||0,f=t[2]||0;return i&&e<12&&(e+=12),p&&e===12&&(e=0),{h:e,m:o,s:f}}function Z(n,c,i,p){const t=n>=12,e=n%12===0?12:n%12;return p.replace(/HH|H|hh|h|mm|m|ss|s|A|a/g,o=>{switch(o){case"HH":return R(n);case"H":return String(n);case"hh":return R(e);case"h":return String(e);case"mm":return R(c);case"m":return String(c);case"ss":return R(i);case"s":return String(i);case"A":return t?"PM":"AM";case"a":return t?"pm":"am";default:return o}})}function On(n){return/s/.test(n)}const v=O({name:"TimePicker",props:{value:String,defaultValue:String,format:{type:String,default:"HH:mm:ss"},disabled:Boolean,size:{type:String,default:"middle"},placeholder:{type:String,default:"请选择时间"},allowClear:{type:Boolean,default:!0},hourStep:{type:Number,default:1},minuteStep:{type:Number,default:1},secondStep:{type:Number,default:1},disabledTime:Function,hideDisabledOptions:Boolean,showNow:{type:Boolean,default:!0},use12Hours:Boolean,status:{type:String,default:""},open:{type:Boolean,default:void 0},needConfirm:{type:Boolean,default:!0},changeOnScroll:Boolean,renderExtraFooter:Function,variant:{type:String,default:"outlined"},placement:{type:String,default:"bottomLeft"},classNames:Object,styles:Object},emits:["update:value","change","openChange","focus","blur"],setup(n,{emit:c,expose:i}){const p=Tn("time-picker"),t=X(n.defaultValue??n.value),e=u(t.h),o=u(t.m),f=u(t.s),S=u(t.h),N=u(t.m),q=u(t.s),Y=u(!1),un=u(),G=u(),D=u(!!n.defaultValue||!!n.value),K=u(),_=u(),nn=u(),tn=u(),I=P(()=>n.open!==void 0?n.open:Y.value),an=P(()=>{if(n.value!==void 0){if(!n.value)return"";const a=X(n.value);return Z(a.h,a.m,a.s,n.format)}return D.value?Z(e.value,o.value,f.value,n.format):""}),x=P(()=>{if(n.needConfirm)return{h:S.value,m:N.value,s:q.value};if(n.value!==void 0){const a=X(n.value);return{h:a.h,m:a.m,s:a.s}}return{h:e.value,m:o.value,s:f.value}});dn(()=>n.value,a=>{if(a!==void 0)if(!a)e.value=0,o.value=0,f.value=0,S.value=0,N.value=0,q.value=0,D.value=!1;else{const d=X(a);e.value=d.h,o.value=d.m,f.value=d.s,S.value=d.h,N.value=d.m,q.value=d.s,D.value=!0}});const mn=()=>{n.disabled||(n.needConfirm&&(S.value=e.value,N.value=o.value,q.value=f.value),Y.value=!0,c("openChange",!0))},sn=()=>{n.needConfirm&&(S.value=e.value,N.value=o.value,q.value=f.value),Q.value={},Y.value=!1,c("openChange",!1)},F=()=>{n.needConfirm&&(e.value=S.value,o.value=N.value,f.value=q.value);const a=Z(e.value,o.value,f.value,n.format);D.value=!0,c("update:value",a),c("change",a,a),sn()},kn=()=>{const a=new Date;n.needConfirm?(S.value=a.getHours(),N.value=a.getMinutes(),q.value=a.getSeconds()):(e.value=a.getHours(),o.value=a.getMinutes(),f.value=a.getSeconds()),n.needConfirm||F()},fn=a=>{a.stopPropagation(),e.value=0,o.value=0,f.value=0,S.value=0,N.value=0,q.value=0,D.value=!1,c("update:value",void 0),c("change",void 0,"")},J=P(()=>{var a;return((a=n.disabledTime)==null?void 0:a.call(n))??{}}),gn=P(()=>{var g,r;const a=((r=(g=J.value).disabledHours)==null?void 0:r.call(g))??[],d=n.use12Hours?12:24,m=[];for(let h=0;h<d;h+=n.hourStep)(!n.hideDisabledOptions||!a.includes(h))&&m.push(h);return m.map(h=>({value:h,disabled:a.includes(h)}))}),vn=P(()=>{var m,g;const a=((g=(m=J.value).disabledMinutes)==null?void 0:g.call(m,x.value.h))??[],d=[];for(let r=0;r<60;r+=n.minuteStep)(!n.hideDisabledOptions||!a.includes(r))&&d.push(r);return d.map(r=>({value:r,disabled:a.includes(r)}))}),bn=P(()=>{var m,g;const a=((g=(m=J.value).disabledSeconds)==null?void 0:g.call(m,x.value.h,x.value.m))??[],d=[];for(let r=0;r<60;r+=n.secondStep)(!n.hideDisabledOptions||!a.includes(r))&&d.push(r);return d.map(r=>({value:r,disabled:a.includes(r)}))}),xn=P(()=>[{value:"AM",disabled:!1},{value:"PM",disabled:!1}]),z=P(()=>x.value.h>=12?"PM":"AM"),en=P(()=>On(n.format)),W=u({}),Q=u({}),L=(a,d,m,g=!1)=>{if(!a||!g&&Q.value[m]===d)return;Q.value[m]=d;const r=()=>{const h=a.querySelector(`[data-value="${d}"]`);if(h){const C=h.offsetTop;g?a.scrollTop=C:typeof a.scrollTo=="function"?a.scrollTo({top:C,behavior:"smooth"}):a.scrollTop=C}};g?r():(W.value[m]&&cancelAnimationFrame(W.value[m]),W.value[m]=requestAnimationFrame(()=>{r(),delete W.value[m]}))};dn(()=>[x.value.h,x.value.m,x.value.s,z.value],()=>{I.value&&rn(()=>{const a=n.use12Hours?x.value.h%12||12:x.value.h;L(K.value,a,"h",!1),L(_.value,x.value.m,"m",!1),en.value&&L(nn.value,x.value.s,"s",!1),n.use12Hours&&L(tn.value,z.value,"p",!1)})});const hn=(a,d)=>{d||(n.needConfirm?S.value=a:(e.value=a,n.changeOnScroll&&F()))},yn=(a,d)=>{d||(n.needConfirm?N.value=a:(o.value=a,n.changeOnScroll&&F()))},wn=(a,d)=>{d||(n.needConfirm?q.value=a:(f.value=a,n.changeOnScroll&&F()))},Sn=a=>{const d=a==="PM",m=n.needConfirm?S.value:e.value,g=m>=12;if(d!==g){const r=d?m+12:m-12;n.needConfirm?S.value=r:(e.value=r,n.changeOnScroll&&F())}};i({focus:()=>{var a;return(a=G.value)==null?void 0:a.focus()},blur:()=>{var a;return(a=G.value)==null?void 0:a.blur()}});const j=a=>{var H,$;const{items:d,colRef:m,isSelected:g,onClick:r,formatValue:h=y=>typeof y=="number"?R(y):String(y),selectedValue:C}=a;return l("ul",{class:w(`${p}-panel-column`,(H=n.classNames)==null?void 0:H.column),style:($=n.styles)==null?void 0:$.column,ref:y=>{const T=y,V=!m.value&&T;m.value=T,V&&I.value&&rn(()=>{const B=T.querySelector(`[data-value="${C}"]`);B&&(T.scrollTop=B.offsetTop)})}},[d.map(({value:y,disabled:T})=>{var V,B;return l("li",{key:y,"data-value":y,class:w(`${p}-panel-cell`,{[`${p}-panel-cell-selected`]:g(y),[`${p}-panel-cell-disabled`]:T},(V=n.classNames)==null?void 0:V.cell),style:(B=n.styles)==null?void 0:B.cell,onClick:()=>r(y,T)},[h(y)])})])},Cn=()=>{var a,d,m,g,r,h,C,H,$,y,T,V,B,on,ln,pn,cn;return l("div",{ref:un,class:w(`${p}-popup`,(a=n.classNames)==null?void 0:a.popup),style:(d=n.styles)==null?void 0:d.popup},[l("div",{class:w(`${p}-panel`,(m=n.classNames)==null?void 0:m.panel),style:(g=n.styles)==null?void 0:g.panel},[l("div",{class:w(`${p}-panel-inner`,(r=n.classNames)==null?void 0:r.panelInner),style:(h=n.styles)==null?void 0:h.panelInner},[j({items:gn.value,colRef:K,isSelected:M=>n.use12Hours?(x.value.h%12||12)===M:x.value.h===M,onClick:hn,selectedValue:n.use12Hours?x.value.h%12||12:x.value.h}),j({items:vn.value,colRef:_,isSelected:M=>x.value.m===M,onClick:yn,selectedValue:x.value.m}),en.value&&j({items:bn.value,colRef:nn,isSelected:M=>x.value.s===M,onClick:wn,selectedValue:x.value.s}),n.use12Hours&&j({items:xn.value,colRef:tn,isSelected:M=>z.value===M,onClick:Sn,selectedValue:z.value})]),l("div",{class:w(`${p}-panel-footer`,(C=n.classNames)==null?void 0:C.footer),style:(H=n.styles)==null?void 0:H.footer},[l("div",{class:w(`${p}-panel-footer-extra`,($=n.classNames)==null?void 0:$.footerExtra),style:(y=n.styles)==null?void 0:y.footerExtra},[(T=n.renderExtraFooter)==null?void 0:T.call(n)]),l("div",{class:w(`${p}-panel-footer-actions`,(V=n.classNames)==null?void 0:V.footerActions),style:(B=n.styles)==null?void 0:B.footerActions},[n.showNow&&l("button",{class:w(`${p}-panel-footer-btn`,(on=n.classNames)==null?void 0:on.now),style:(ln=n.styles)==null?void 0:ln.now,onClick:kn},[b("此刻")]),n.needConfirm&&l("button",{class:w(`${p}-panel-footer-btn`,`${p}-panel-footer-ok`,(pn=n.classNames)==null?void 0:pn.ok),style:(cn=n.styles)==null?void 0:cn.ok,onClick:F},[b("确定")])])])])])};return()=>{var a,d,m,g;return l(Mn,{open:I.value,trigger:"click",placement:n.placement,disabled:n.disabled,destroyOnHidden:!0,triggerClass:w(p,`${p}-${n.size}`,`${p}-${n.variant}`,{[`${p}-open`]:I.value,[`${p}-disabled`]:n.disabled,[`${p}-status-error`]:n.status==="error",[`${p}-status-warning`]:n.status==="warning"},(a=n.classNames)==null?void 0:a.root),triggerStyle:(d=n.styles)==null?void 0:d.root,popupClass:w(`${p}-popup`,(m=n.classNames)==null?void 0:m.popup),popupStyle:(g=n.styles)==null?void 0:g.popup,onOpenChange:r=>{r?mn():sn()}},{default:()=>{var r,h,C,H,$,y;return l("span",{class:w(`${p}-input`,(r=n.classNames)==null?void 0:r.input),style:(h=n.styles)==null?void 0:h.input},[l("input",{ref:G,readonly:!0,placeholder:n.placeholder,value:an.value,disabled:n.disabled,class:`${p}-input-inner`,onFocus:()=>c("focus"),onBlur:()=>c("blur")},null),n.allowClear&&an.value&&!n.disabled&&l("span",{class:w(`${p}-clear`,(C=n.classNames)==null?void 0:C.clear),style:(H=n.styles)==null?void 0:H.clear,onClick:fn},[l($n,null,null)]),l("span",{class:w(`${p}-suffix`,($=n.classNames)==null?void 0:$.suffix),style:(y=n.styles)==null?void 0:y.suffix},[l(Bn,null,null)])])},popup:({placement:r})=>Cn()})}}}),An={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},En=O({__name:"TimePickerBasic",setup(n){const c=u(""),i=u("10:30:00"),p=t=>{console.log("选中时间：",t)};return(t,e)=>(A(),E("div",An,[l(k(v),{value:c.value,"onUpdate:value":e[0]||(e[0]=o=>c.value=o),placeholder:"请选择时间",onChange:p},null,8,["value"]),l(k(v),{value:i.value,"onUpdate:value":e[1]||(e[1]=o=>i.value=o),placeholder:"禁用状态",disabled:""},null,8,["value"]),s("p",null,"选中时间："+Pn(c.value),1)]))}}),Vn=`<template>
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
`,Un={style:{display:"flex","flex-direction":"column",gap:"24px"}},Fn=O({__name:"TimePickerClassNames",setup(n){return(c,i)=>(A(),E("div",Un,[s("div",null,[i[0]||(i[0]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义触发器与输入区域：",-1)),l(k(v),{placeholder:"选择时间","class-names":{root:"custom-trigger",input:"custom-input",suffix:"custom-suffix"}})]),s("div",null,[i[1]||(i[1]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义弹层与时间列：",-1)),l(k(v),{placeholder:"选择时间","class-names":{popup:"custom-popup",panel:"custom-panel",column:"custom-column",cell:"custom-cell"}})]),s("div",null,[i[2]||(i[2]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义底部按钮样式：",-1)),l(k(v),{placeholder:"选择时间","need-confirm":!0,"class-names":{footer:"custom-footer",now:"custom-now-btn",ok:"custom-ok-btn"}})]),s("div",null,[i[3]||(i[3]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式对象：",-1)),l(k(v),{placeholder:"选择时间",styles:{root:{borderRadius:"20px",borderColor:"#722ed1"},input:{color:"#722ed1",fontWeight:500},suffix:{color:"#722ed1",fontSize:"18px"}}})]),s("div",null,[i[4]||(i[4]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"组合 classNames 与 styles：",-1)),l(k(v),{placeholder:"选择时间","need-confirm":!0,"class-names":{root:"gradient-trigger",popup:"gradient-popup",ok:"gradient-ok"},styles:{panel:{borderRadius:"12px"},cell:{fontWeight:500}}})])]))}}),Dn=Nn(Fn,[["__scopeId","data-v-8e2f9a88"]]),Rn=`<template>
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
`,In={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},zn=O({__name:"TimePickerConfirm",setup(n){const c=u(""),i=u("");return(p,t)=>(A(),E("div",In,[s("div",null,[t[2]||(t[2]=s("p",{style:{"margin-bottom":"4px"}},"需要确认（needConfirm）：",-1)),l(k(v),{value:c.value,"onUpdate:value":t[0]||(t[0]=e=>c.value=e),"need-confirm":!0,placeholder:"点击确定按钮生效"},null,8,["value"])]),s("div",null,[t[3]||(t[3]=s("p",{style:{"margin-bottom":"4px"}},"滚动即改变（changeOnScroll）：",-1)),l(k(v),{value:i.value,"onUpdate:value":t[1]||(t[1]=e=>i.value=e),"change-on-scroll":!0,"need-confirm":!1,placeholder:"选择即生效"},null,8,["value"])])]))}}),Wn=`<template>
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
`,Ln={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},jn=O({__name:"TimePickerDisabled",setup(n){const c=u(""),i=u(""),p=()=>({disabledHours:()=>[0,1,2,3,4,5]}),t=()=>({disabledHours:()=>[0,1,2,3,4,5]});return(e,o)=>(A(),E("div",Ln,[s("div",null,[o[2]||(o[2]=s("p",{style:{"margin-bottom":"4px"}},"禁用部分小时：",-1)),l(k(v),{value:c.value,"onUpdate:value":o[0]||(o[0]=f=>c.value=f),"disabled-time":p,placeholder:"禁用 0-5 时"},null,8,["value"])]),s("div",null,[o[3]||(o[3]=s("p",{style:{"margin-bottom":"4px"}},"隐藏禁用选项：",-1)),l(k(v),{value:i.value,"onUpdate:value":o[1]||(o[1]=f=>i.value=f),"disabled-time":t,"hide-disabled-options":!0,placeholder:"隐藏 0-5 时"},null,8,["value"])])]))}}),Xn=`<template>
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
`,Yn={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},Gn=O({__name:"TimePickerFormat",setup(n){const c=u(""),i=u(""),p=u("");return(t,e)=>(A(),E("div",Yn,[s("div",null,[e[3]||(e[3]=s("p",{style:{"margin-bottom":"4px"}},"只显示时分（HH:mm）：",-1)),l(k(v),{value:c.value,"onUpdate:value":e[0]||(e[0]=o=>c.value=o),format:"HH:mm",placeholder:"选择时分"},null,8,["value"])]),s("div",null,[e[4]||(e[4]=s("p",{style:{"margin-bottom":"4px"}},"12 小时制：",-1)),l(k(v),{value:i.value,"onUpdate:value":e[1]||(e[1]=o=>i.value=o),"use12-hours":!0,format:"h:mm a",placeholder:"12 小时制"},null,8,["value"])]),s("div",null,[e[5]||(e[5]=s("p",{style:{"margin-bottom":"4px"}},"不显示秒：",-1)),l(k(v),{value:p.value,"onUpdate:value":e[2]||(e[2]=o=>p.value=o),format:"HH:mm","show-now":!1,placeholder:"不显示秒"},null,8,["value"])])]))}}),Jn=`<template>
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
`,Qn={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},Zn=O({__name:"TimePickerStep",setup(n){const c=u(""),i=u(""),p=u("");return(t,e)=>(A(),E("div",Qn,[s("div",null,[e[3]||(e[3]=s("p",{style:{"margin-bottom":"4px"}},"小时步长 2：",-1)),l(k(v),{value:c.value,"onUpdate:value":e[0]||(e[0]=o=>c.value=o),"hour-step":2,placeholder:"小时步长 2"},null,8,["value"])]),s("div",null,[e[4]||(e[4]=s("p",{style:{"margin-bottom":"4px"}},"分钟步长 15：",-1)),l(k(v),{value:i.value,"onUpdate:value":e[1]||(e[1]=o=>i.value=o),"minute-step":15,placeholder:"分钟步长 15"},null,8,["value"])]),s("div",null,[e[5]||(e[5]=s("p",{style:{"margin-bottom":"4px"}},"秒步长 30：",-1)),l(k(v),{value:p.value,"onUpdate:value":e[2]||(e[2]=o=>p.value=o),"second-step":30,placeholder:"秒步长 30"},null,8,["value"])])]))}}),Kn=`<template>
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
`,_n={style:{display:"flex","flex-direction":"column",gap:"16px","max-width":"300px"}},nt=O({__name:"TimePickerVariant",setup(n){const c=u(""),i=u(""),p=u(""),t=u("");return(e,o)=>(A(),E("div",_n,[s("div",null,[o[4]||(o[4]=s("p",{style:{"margin-bottom":"4px"}},"Outlined（默认）：",-1)),l(k(v),{value:c.value,"onUpdate:value":o[0]||(o[0]=f=>c.value=f),variant:"outlined",placeholder:"Outlined"},null,8,["value"])]),s("div",null,[o[5]||(o[5]=s("p",{style:{"margin-bottom":"4px"}},"Filled：",-1)),l(k(v),{value:i.value,"onUpdate:value":o[1]||(o[1]=f=>i.value=f),variant:"filled",placeholder:"Filled"},null,8,["value"])]),s("div",null,[o[6]||(o[6]=s("p",{style:{"margin-bottom":"4px"}},"Borderless：",-1)),l(k(v),{value:p.value,"onUpdate:value":o[2]||(o[2]=f=>p.value=f),variant:"borderless",placeholder:"Borderless"},null,8,["value"])]),s("div",null,[o[7]||(o[7]=s("p",{style:{"margin-bottom":"4px"}},"Underlined：",-1)),l(k(v),{value:t.value,"onUpdate:value":o[3]||(o[3]=f=>t.value=f),variant:"underlined",placeholder:"Underlined"},null,8,["value"])])]))}}),tt=`<template>
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
`,at={class:"markdown-body"},ct={__name:"time-picker",setup(n,{expose:c}){return c({frontmatter:{}}),(p,t)=>{const e=qn("DemoBlock");return A(),E("div",at,[t[0]||(t[0]=s("h1",{id:"timepicker-时间选择框",tabindex:"-1"},"TimePicker 时间选择框",-1)),t[1]||(t[1]=s("p",null,"输入或选择时间的控件。",-1)),t[2]||(t[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=s("p",null,"当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。",-1)),t[4]||(t[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=s("p",null,"点击 TimePicker，然后可以在浮层中选择或者输入某一时间。",-1)),l(e,{title:"基础用法",source:k(Vn)},{default:U(()=>[l(En)]),_:1},8,["source"]),t[7]||(t[7]=s("h3",{id:"步进",tabindex:"-1"},"步进",-1)),t[8]||(t[8]=s("p",null,[b("通过 "),s("code",null,"hour-step"),b("、"),s("code",null,"minute-step"),b("、"),s("code",null,"second-step"),b(" 设置时间步长。")],-1)),l(e,{title:"步进",source:k(Kn)},{default:U(()=>[l(Zn)]),_:1},8,["source"]),t[9]||(t[9]=s("h3",{id:"格式化",tabindex:"-1"},"格式化",-1)),t[10]||(t[10]=s("p",null,[b("通过 "),s("code",null,"format"),b(" 属性自定义时间格式，通过 "),s("code",null,"use12Hours"),b(" 开启 12 小时制。")],-1)),l(e,{title:"格式化",source:k(Jn)},{default:U(()=>[l(Gn)]),_:1},8,["source"]),t[11]||(t[11]=s("h3",{id:"禁用时间",tabindex:"-1"},"禁用时间",-1)),t[12]||(t[12]=s("p",null,[b("通过 "),s("code",null,"disabledTime"),b(" 禁用部分时间选项，"),s("code",null,"hideDisabledOptions"),b(" 可以隐藏禁用的选项。")],-1)),l(e,{title:"禁用时间",source:k(Xn)},{default:U(()=>[l(jn)]),_:1},8,["source"]),t[13]||(t[13]=s("h3",{id:"确认模式",tabindex:"-1"},"确认模式",-1)),t[14]||(t[14]=s("p",null,[b("通过 "),s("code",null,"needConfirm"),b(" 需要点击确定按钮才生效，"),s("code",null,"changeOnScroll"),b(" 可以在滚动时立即触发变化。")],-1)),l(e,{title:"确认模式",source:k(Wn)},{default:U(()=>[l(zn)]),_:1},8,["source"]),t[15]||(t[15]=s("h3",{id:"变体",tabindex:"-1"},"变体",-1)),t[16]||(t[16]=s("p",null,[b("通过 "),s("code",null,"variant"),b(" 设置不同的输入框样式。")],-1)),l(e,{title:"变体",source:k(tt)},{default:U(()=>[l(nt)]),_:1},8,["source"]),t[17]||(t[17]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),t[18]||(t[18]=s("p",null,[b("通过 "),s("code",null,"classNames"),b(" / "),s("code",null,"styles"),b(" 对各子元素做细粒度样式控制。")],-1)),l(e,{title:"语义化 className 与 style",source:k(Rn)},{default:U(()=>[l(Dn)]),_:1},8,["source"]),t[19]||(t[19]=Hn(`<h2 id="api" tabindex="-1">API</h2><h3 id="timepicker-props" tabindex="-1">TimePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>时间</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认时间</td><td><code>string</code></td><td>-</td></tr><tr><td>format</td><td>展示的时间格式</td><td><code>string</code></td><td><code>&#39;HH:mm:ss&#39;</code></td></tr><tr><td>disabled</td><td>禁用全部操作</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>placeholder</td><td>没有值的时候显示的内容</td><td><code>string</code></td><td><code>&#39;请选择时间&#39;</code></td></tr><tr><td>allowClear</td><td>是否展示清除按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>hourStep</td><td>小时选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>minuteStep</td><td>分钟选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>secondStep</td><td>秒选项间隔</td><td><code>number</code></td><td><code>1</code></td></tr><tr><td>disabledTime</td><td>禁用部分时间选项</td><td><code>() =&gt; DisabledTimeConfig</code></td><td>-</td></tr><tr><td>hideDisabledOptions</td><td>隐藏禁用的选项</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showNow</td><td>面板是否显示&quot;此刻&quot;按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>use12Hours</td><td>使用 12 小时制，为 true 时 format 默认为 h:mm:ss a</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>needConfirm</td><td>需要点击确定按钮才触发值变化</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>changeOnScroll</td><td>滚动时立即触发选择</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>renderExtraFooter</td><td>在面板底部渲染额外的内容</td><td><code>() =&gt; VNodeChild</code></td><td>-</td></tr><tr><td>variant</td><td>输入框变体</td><td><code>&#39;outlined&#39; | &#39;borderless&#39; | &#39;filled&#39; | &#39;underlined&#39;</code></td><td><code>&#39;outlined&#39;</code></td></tr><tr><td>placement</td><td>浮层弹出位置</td><td><code>&#39;bottomLeft&#39; | &#39;bottomRight&#39; | &#39;topLeft&#39; | &#39;topRight&#39;</code></td><td><code>&#39;bottomLeft&#39;</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TimePickerClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>TimePickerStyles</code></td><td>-</td></tr></tbody></table><h3 id="disabledtimeconfig" tabindex="-1">DisabledTimeConfig</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">interface</span> <span class="token class-name">DisabledTimeConfig</span> <span class="token punctuation">{</span>
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
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>popup</code>、<code>panel</code>、<code>column</code>、<code>cell</code>、<code>footer</code> 等弹层元素通过 <code>Teleport to=&quot;body&quot;</code> 渲染，其样式必须使用 <code>:global()</code> 或非 scoped 的全局样式，使用 <code>:deep()</code> 无法穿透</li><li><code>clear</code> 仅在 <code>allowClear</code> 启用且有选中值时显示</li><li><code>column</code> 应用于所有时间列（小时/分钟/秒/AM-PM），<code>cell</code> 应用于所有列的单元格</li><li><code>footer</code> 包含 <code>footerExtra</code>（<code>renderExtraFooter</code> 渲染的内容）和 <code>footerActions</code>（“此刻”/&quot;确定&quot;按钮区域）</li><li><code>now</code> 按钮仅在 <code>showNow</code> 为 <code>true</code> 时显示，<code>ok</code> 按钮仅在 <code>needConfirm</code> 为 <code>true</code> 时显示</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题色背景</td><td><code>#e6f4ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态颜色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态颜色</td><td><code>#faad14</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本颜色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本颜色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本颜色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-placeholder</code></td><td>占位符文本颜色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-border-secondary</code></td><td>次要边框颜色</td><td><code>#f0f0f0</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次要填充颜色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-fill-tertiary</code></td><td>三级填充颜色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用容器背景</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-bg-text-hover</code></td><td>文本悬停背景</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr></tbody></table>`,25))])}}};export{ct as default};
