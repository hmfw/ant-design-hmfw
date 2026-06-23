import{o as O,N as un,M as dn,E as h,Q as kn,n as s,m as i,f as v,F as mn,t as gn,A as H,k as A,K as g,h as r,J as X,_ as vn,H as yn,R as j,l as hn}from"./index-DiKIrHqq.js";import{c}from"./cls-S9IiI6wd.js";import{T as fn}from"./Trigger-D7NQrFNR.js";function _(a){return String(a).padStart(2,"0")}function sa(a,o="YYYY-MM-DD"){return o.replace("YYYY",String(a.getFullYear())).replace("MM",_(a.getMonth()+1)).replace("DD",_(a.getDate())).replace("HH",_(a.getHours())).replace("mm",_(a.getMinutes())).replace("ss",_(a.getSeconds()))}function z(a){if(!a)return null;const o=new Date(a);return isNaN(o.getTime())?null:o}function Oa(a,o){return a.getFullYear()===o.getFullYear()&&a.getMonth()===o.getMonth()&&a.getDate()===o.getDate()}function bn(a,o){return a.getFullYear()===o.getFullYear()&&a.getMonth()===o.getMonth()}function wn(a,o){return a.getFullYear()===o.getFullYear()}function Ha(a,o){return new Date(a,o+1,0).getDate()}function xn(a,o){return new Date(a,o,1).getDay()}function Dn(a,o){const n=[],u=xn(a,o),e=Ha(a,o),k=Ha(a,o-1);for(let p=u-1;p>=0;p--)n.push({date:new Date(a,o-1,k-p),inCurrentMonth:!1});for(let p=1;p<=e;p++)n.push({date:new Date(a,o,p),inCurrentMonth:!0});const y=42-n.length;for(let p=1;p<=y;p++)n.push({date:new Date(a,o+1,p),inCurrentMonth:!1});return n}const S=O({name:"DatePicker",props:{value:String,defaultValue:String,format:String,disabled:Boolean,size:{type:String,default:"middle"},placeholder:String,allowClear:{type:Boolean,default:!0},picker:{type:String,default:"date"},showTime:[Boolean,Object],showToday:{type:Boolean,default:!0},showNow:Boolean,disabledDate:Function,status:{type:String,default:""},open:{type:Boolean,default:void 0},defaultOpen:Boolean,presets:Array,minDate:String,maxDate:String,renderExtraFooter:Function,cellRender:Function,classNames:Object,styles:Object},emits:["update:value","change","openChange","panelChange"],setup(a,{emit:o}){var ca,ra,ua;const n=un("date-picker"),u=dn(),e=new Date,k=v(()=>a.format?a.format:a.picker==="year"?"YYYY":a.picker==="month"?"YYYY-MM":a.picker==="quarter"?"YYYY-[Q]Q":a.showTime?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD"),y=v(()=>{if(a.placeholder)return a.placeholder;const t=u.value.DatePicker;return a.picker==="year"?t.yearPlaceholder:a.picker==="month"?t.monthPlaceholder:t.placeholder}),p=h(z(a.defaultValue??a.value)),I=h(((ca=p.value)==null?void 0:ca.getHours())??0),R=h(((ra=p.value)==null?void 0:ra.getMinutes())??0),V=h(((ua=p.value)==null?void 0:ua.getSeconds())??0),U=v(()=>a.showTime?typeof a.showTime=="boolean"?{}:a.showTime:null),W=v(()=>!!a.showTime),b=h((p.value??e).getFullYear()),T=h((p.value??e).getMonth()),G=h(a.defaultOpen??!1),C=h(a.picker==="year"?"year":a.picker==="month"?"month":"date"),Aa=h(),ea=v(()=>a.open!==void 0?a.open:G.value),Y=v(()=>a.value?z(a.value):p.value),oa=v(()=>a.minDate?z(a.minDate):null),la=v(()=>a.maxDate?z(a.maxDate):null),pa=v(()=>{const t=Y.value;if(!t)return"";if(a.picker==="quarter"){const l=Math.floor(t.getMonth()/3)+1;return`${t.getFullYear()}-Q${l}`}return sa(t,k.value)});kn(()=>a.value,t=>{p.value=z(t)});const Ia=()=>{if(a.disabled)return;const t=Y.value??e;b.value=t.getFullYear(),T.value=t.getMonth(),C.value=a.picker==="year"?"year":a.picker==="month"?"month":"date",W.value&&t&&(I.value=t.getHours(),R.value=t.getMinutes(),V.value=t.getSeconds()),G.value=!0,o("openChange",!0)},Z=()=>{G.value=!1,o("openChange",!1)},Q=t=>{var m;if((m=a.disabledDate)!=null&&m.call(a,t)||oa.value&&t<oa.value||la.value&&t>la.value)return;if(W.value){const w=new Date(t.getFullYear(),t.getMonth(),t.getDate(),I.value,R.value,V.value);p.value=w;return}p.value=t;const l=a.picker==="quarter"?`${t.getFullYear()}-Q${Math.floor(t.getMonth()/3)+1}`:sa(t,k.value);o("update:value",l),o("change",l,t),Z()},Ra=t=>{if(I.value=t,p.value){const l=p.value;p.value=new Date(l.getFullYear(),l.getMonth(),l.getDate(),t,R.value,V.value)}},Va=t=>{if(R.value=t,p.value){const l=p.value;p.value=new Date(l.getFullYear(),l.getMonth(),l.getDate(),I.value,t,V.value)}},Ua=t=>{if(V.value=t,p.value){const l=p.value;p.value=new Date(l.getFullYear(),l.getMonth(),l.getDate(),I.value,R.value,t)}},ja=()=>{if(!p.value)return;const t=sa(p.value,k.value);o("update:value",t),o("change",t,p.value),Z()},Qa=t=>{t.stopPropagation(),p.value=null,o("update:value",void 0),o("change",void 0,null)},za=t=>{const l=typeof t.value=="function"?t.value():t.value,m=z(l);m&&Q(m)},Wa=()=>{T.value===0?(b.value--,T.value=11):T.value--,o("panelChange",null,C.value)},La=()=>{T.value===11?(b.value++,T.value=0):T.value++,o("panelChange",null,C.value)},aa=()=>{b.value--,o("panelChange",null,C.value)},na=()=>{b.value++,o("panelChange",null,C.value)},Ja=v(()=>Dn(b.value,T.value)),Ka=v(()=>{const t=U.value;return t&&typeof t=="object"&&"hourStep"in t&&t.hourStep?t.hourStep:1}),Xa=v(()=>{const t=U.value;return t&&typeof t=="object"&&"minuteStep"in t&&t.minuteStep?t.minuteStep:1}),Ga=v(()=>{const t=U.value;return t&&typeof t=="object"&&"secondStep"in t&&t.secondStep?t.secondStep:1}),Za=v(()=>{const t=[];for(let l=0;l<24;l+=Ka.value)t.push(l);return t}),an=v(()=>{const t=[];for(let l=0;l<60;l+=Xa.value)t.push(l);return t}),nn=v(()=>{const t=[];for(let l=0;l<60;l+=Ga.value)t.push(l);return t}),tn=v(()=>{if(!W.value)return!1;const t=U.value&&"format"in U.value&&U.value.format?U.value.format:k.value;return t.includes("ss")||t.includes("s")}),J=v(()=>{const t=Math.floor(b.value/10)*10;return Array.from({length:10},(l,m)=>t+m)}),ta=(t,l)=>{t&&gn(()=>{const m=t.querySelector(`[data-value="${l}"]`);m&&typeof m.scrollIntoView=="function"&&m.scrollIntoView({block:"nearest"})})},sn=()=>{var t,l,m,w,q,P,N,$,f,M,F,B,E,L,da,ia,ka,ma,ga,va,ya,ha,fa,ba,wa,xa,Da,Sa,Ca,qa,Pa,Na,$a,Ma,Ya;return s("div",{class:c(`${n}-panel`,{[`${n}-panel-has-time`]:W.value},(t=a.classNames)==null?void 0:t.panel),style:(l=a.styles)==null?void 0:l.panel},[s("div",{class:c(`${n}-panel-header`,(m=a.classNames)==null?void 0:m.panelHeader),style:(w=a.styles)==null?void 0:w.panelHeader},[s("button",{class:`${n}-panel-header-btn`,onClick:aa},[i("«")]),s("button",{class:`${n}-panel-header-btn`,onClick:Wa},[i("‹")]),s("span",{class:`${n}-panel-header-title`},[s("button",{class:`${n}-panel-header-title-btn`,onClick:()=>{C.value="year",o("panelChange",null,"year")}},[b.value,i("年")]),s("button",{class:`${n}-panel-header-title-btn`,onClick:()=>{C.value="month",o("panelChange",null,"month")}},[u.value.DatePicker.months[T.value]])]),s("button",{class:`${n}-panel-header-btn`,onClick:La},[i("›")]),s("button",{class:`${n}-panel-header-btn`,onClick:na},[i("»")])]),s("div",{class:c(`${n}-panel-body`,(q=a.classNames)==null?void 0:q.panelBody),style:(P=a.styles)==null?void 0:P.panelBody},[s("div",{class:c(`${n}-weekdays`,(N=a.classNames)==null?void 0:N.weekdays),style:($=a.styles)==null?void 0:$.weekdays},[u.value.DatePicker.weekdays.map(d=>{var D,x;return s("span",{key:d,class:c(`${n}-weekday`,(D=a.classNames)==null?void 0:D.weekday),style:(x=a.styles)==null?void 0:x.weekday},[d])})]),s("div",{class:c(`${n}-days`,(f=a.classNames)==null?void 0:f.days),style:(M=a.styles)==null?void 0:M.days},[Ja.value.map(({date:d,inCurrentMonth:D},x)=>{var Ba,Ea,_a;const K=Oa(d,e),cn=Y.value?Oa(d,Y.value):!1,Ta=((Ba=a.disabledDate)==null?void 0:Ba.call(a,d))??!1,Fa=s("span",null,[d.getDate()]),rn=a.cellRender?a.cellRender(d,{originNode:Fa,today:e,type:"date"}):Fa;return s("button",{key:x,class:c(`${n}-day`,{[`${n}-day-other-month`]:!D,[`${n}-day-today`]:K,[`${n}-day-selected`]:cn,[`${n}-day-disabled`]:Ta},(Ea=a.classNames)==null?void 0:Ea.day),style:(_a=a.styles)==null?void 0:_a.day,disabled:Ta,onClick:()=>Q(d)},[rn])})])]),W.value&&s("div",{class:c(`${n}-time-panel`,(F=a.classNames)==null?void 0:F.timePanel),style:(B=a.styles)==null?void 0:B.timePanel},[s("div",{class:c(`${n}-time-content`,(E=a.classNames)==null?void 0:E.timeContent),style:(L=a.styles)==null?void 0:L.timeContent},[s("ul",{class:c(`${n}-time-column`,(da=a.classNames)==null?void 0:da.timeColumn),style:(ia=a.styles)==null?void 0:ia.timeColumn,ref:d=>ta(d,I.value)},[Za.value.map(d=>{var D,x;return s("li",{key:d,"data-value":d,class:c(`${n}-time-cell`,{[`${n}-time-cell-selected`]:I.value===d},(D=a.classNames)==null?void 0:D.timeCell),style:(x=a.styles)==null?void 0:x.timeCell,onClick:()=>Ra(d)},[_(d)])})]),s("ul",{class:c(`${n}-time-column`,(ka=a.classNames)==null?void 0:ka.timeColumn),style:(ma=a.styles)==null?void 0:ma.timeColumn,ref:d=>ta(d,R.value)},[an.value.map(d=>{var D,x;return s("li",{key:d,"data-value":d,class:c(`${n}-time-cell`,{[`${n}-time-cell-selected`]:R.value===d},(D=a.classNames)==null?void 0:D.timeCell),style:(x=a.styles)==null?void 0:x.timeCell,onClick:()=>Va(d)},[_(d)])})]),tn.value&&s("ul",{class:c(`${n}-time-column`,(ga=a.classNames)==null?void 0:ga.timeColumn),style:(va=a.styles)==null?void 0:va.timeColumn,ref:d=>ta(d,V.value)},[nn.value.map(d=>{var D,x;return s("li",{key:d,"data-value":d,class:c(`${n}-time-cell`,{[`${n}-time-cell-selected`]:V.value===d},(D=a.classNames)==null?void 0:D.timeCell),style:(x=a.styles)==null?void 0:x.timeCell,onClick:()=>Ua(d)},[_(d)])})])])]),(a.showToday||a.showNow||a.showTime||((ya=a.presets)==null?void 0:ya.length)||a.renderExtraFooter)&&s("div",{class:c(`${n}-panel-footer`,(ha=a.classNames)==null?void 0:ha.panelFooter),style:(fa=a.styles)==null?void 0:fa.panelFooter},[s("div",{class:c(`${n}-panel-footer-extra`,(ba=a.classNames)==null?void 0:ba.panelFooterExtra),style:(wa=a.styles)==null?void 0:wa.panelFooterExtra},[((xa=a.presets)==null?void 0:xa.length)&&s("div",{class:c(`${n}-presets`,(Da=a.classNames)==null?void 0:Da.presets),style:(Sa=a.styles)==null?void 0:Sa.presets},[a.presets.map((d,D)=>{var x,K;return s("button",{key:D,class:c(`${n}-preset-btn`,(x=a.classNames)==null?void 0:x.presetBtn),style:(K=a.styles)==null?void 0:K.presetBtn,onClick:()=>za(d)},[d.label])})]),(Ca=a.renderExtraFooter)==null?void 0:Ca.call(a)]),s("div",{class:c(`${n}-panel-footer-actions`,(qa=a.classNames)==null?void 0:qa.panelFooterActions),style:(Pa=a.styles)==null?void 0:Pa.panelFooterActions},[(a.showToday||a.showNow)&&s("button",{class:c(`${n}-panel-footer-today`,(Na=a.classNames)==null?void 0:Na.today),style:($a=a.styles)==null?void 0:$a.today,onClick:()=>Q(new Date)},[a.showNow?u.value.DatePicker.now:u.value.DatePicker.today]),a.showTime&&s("button",{class:c(`${n}-panel-footer-ok`,(Ma=a.classNames)==null?void 0:Ma.ok),style:(Ya=a.styles)==null?void 0:Ya.ok,onClick:ja},[u.value.DatePicker.ok])])])])},en=()=>{var t,l,m,w,q,P,N,$;return s("div",{class:c(`${n}-panel`,(t=a.classNames)==null?void 0:t.panel),style:(l=a.styles)==null?void 0:l.panel},[s("div",{class:c(`${n}-panel-header`,(m=a.classNames)==null?void 0:m.panelHeader),style:(w=a.styles)==null?void 0:w.panelHeader},[s("button",{class:`${n}-panel-header-btn`,onClick:aa},[i("«")]),s("span",{class:`${n}-panel-header-title`},[s("button",{class:`${n}-panel-header-title-btn`,onClick:()=>{C.value="year",o("panelChange",null,"year")}},[b.value,i("年")])]),s("button",{class:`${n}-panel-header-btn`,onClick:na},[i("»")])]),s("div",{class:c(`${n}-panel-body`,(q=a.classNames)==null?void 0:q.panelBody),style:(P=a.styles)==null?void 0:P.panelBody},[s("div",{class:c(`${n}-months`,(N=a.classNames)==null?void 0:N.months),style:($=a.styles)==null?void 0:$.months},[u.value.DatePicker.months.map((f,M)=>{var E,L;const F=new Date(b.value,M,1),B=Y.value?bn(F,Y.value):!1;return s("button",{key:M,class:c(`${n}-month`,{[`${n}-month-selected`]:B},(E=a.classNames)==null?void 0:E.month),style:(L=a.styles)==null?void 0:L.month,onClick:()=>{T.value=M,a.picker==="month"?Q(F):(C.value="date",o("panelChange",null,"date"))}},[f])})])])])},on=()=>{var t,l,m,w,q,P,N,$;return s("div",{class:c(`${n}-panel`,(t=a.classNames)==null?void 0:t.panel),style:(l=a.styles)==null?void 0:l.panel},[s("div",{class:c(`${n}-panel-header`,(m=a.classNames)==null?void 0:m.panelHeader),style:(w=a.styles)==null?void 0:w.panelHeader},[s("button",{class:`${n}-panel-header-btn`,onClick:()=>{b.value-=10}},[i("«")]),s("span",{class:`${n}-panel-header-title`},[J.value[0],i("年 - "),J.value[J.value.length-1],i("年")]),s("button",{class:`${n}-panel-header-btn`,onClick:()=>{b.value+=10}},[i("»")])]),s("div",{class:c(`${n}-panel-body`,(q=a.classNames)==null?void 0:q.panelBody),style:(P=a.styles)==null?void 0:P.panelBody},[s("div",{class:c(`${n}-years`,(N=a.classNames)==null?void 0:N.years),style:($=a.styles)==null?void 0:$.years},[J.value.map(f=>{var F,B;const M=Y.value?wn(new Date(f,0,1),Y.value):!1;return s("button",{key:f,class:c(`${n}-year`,{[`${n}-year-selected`]:M},(F=a.classNames)==null?void 0:F.year),style:(B=a.styles)==null?void 0:B.year,onClick:()=>{b.value=f,a.picker==="year"?Q(new Date(f,0,1)):(C.value="month",o("panelChange",null,"month"))}},[f,i("年")])})])])])},ln=()=>{var t,l,m,w,q,P,N,$;return s("div",{class:c(`${n}-panel`,(t=a.classNames)==null?void 0:t.panel),style:(l=a.styles)==null?void 0:l.panel},[s("div",{class:c(`${n}-panel-header`,(m=a.classNames)==null?void 0:m.panelHeader),style:(w=a.styles)==null?void 0:w.panelHeader},[s("button",{class:`${n}-panel-header-btn`,onClick:aa},[i("«")]),s("span",{class:`${n}-panel-header-title`},[b.value,i("年")]),s("button",{class:`${n}-panel-header-btn`,onClick:na},[i("»")])]),s("div",{class:c(`${n}-panel-body`,(q=a.classNames)==null?void 0:q.panelBody),style:(P=a.styles)==null?void 0:P.panelBody},[s("div",{class:c(`${n}-quarters`,(N=a.classNames)==null?void 0:N.quarters),style:($=a.styles)==null?void 0:$.quarters},[[1,2,3,4].map(f=>{var B,E;const M=new Date(b.value,(f-1)*3,1),F=Y.value?Y.value.getFullYear()===b.value&&Math.floor(Y.value.getMonth()/3)+1===f:!1;return s("button",{key:f,class:c(`${n}-quarter`,{[`${n}-quarter-selected`]:F},(B=a.classNames)==null?void 0:B.quarter),style:(E=a.styles)==null?void 0:E.quarter,onClick:()=>Q(M)},[i("Q"),f])})])])])},pn=()=>s(mn,null,[C.value==="date"&&a.picker!=="quarter"&&sn(),C.value==="month"&&en(),C.value==="year"&&on(),a.picker==="quarter"&&C.value==="date"&&ln()]);return()=>{var t,l;return s(fn,{open:ea.value,trigger:"click",placement:"bottomLeft",disabled:a.disabled,destroyOnHidden:!0,popupClass:c(`${n}-popup`,(t=a.classNames)==null?void 0:t.popup),popupStyle:(l=a.styles)==null?void 0:l.popup,onOpenChange:m=>{m?Ia():Z()}},{default:()=>{var m,w,q,P,N,$,f,M;return s("div",{ref:Aa,class:c(n,`${n}-${a.size}`,{[`${n}-open`]:ea.value,[`${n}-disabled`]:a.disabled,[`${n}-status-error`]:a.status==="error",[`${n}-status-warning`]:a.status==="warning"},(m=a.classNames)==null?void 0:m.root),style:(w=a.styles)==null?void 0:w.root},[s("span",{class:c(`${n}-input`,(q=a.classNames)==null?void 0:q.input),style:(P=a.styles)==null?void 0:P.input},[s("input",{readonly:!0,value:pa.value,placeholder:y.value,disabled:a.disabled,class:`${n}-input-inner`},null),a.allowClear&&pa.value&&!a.disabled&&s("span",{class:c(`${n}-clear`,(N=a.classNames)==null?void 0:N.clear),style:($=a.styles)==null?void 0:$.clear,onClick:Qa},[i("✕")]),s("span",{class:c(`${n}-suffix`,(f=a.classNames)==null?void 0:f.suffix),style:(M=a.styles)==null?void 0:M.suffix},[i("📅")])])])},popup:({placement:m})=>pn()})}}}),Sn={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Cn=O({__name:"DatePickerBasic",setup(a){const o=h(""),n=u=>{console.log("选中日期：",u)};return(u,e)=>(H(),A("div",Sn,[s(g(S),{value:o.value,"onUpdate:value":e[0]||(e[0]=k=>o.value=k),placeholder:"请选择日期",onChange:n},null,8,["value"]),r("p",null,"选中日期："+X(o.value),1)]))}}),qn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" placeholder="请选择日期" @change="handleChange" />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref<string>('')

const handleChange = (value: string) => {
  console.log('选中日期：', value)
}
<\/script>
`,Pn={style:{display:"flex","flex-direction":"column",gap:"24px"}},Nn=O({__name:"DatePickerClassNames",setup(a){return(o,n)=>(H(),A("div",Pn,[r("div",null,[n[0]||(n[0]=r("div",{style:{"margin-bottom":"8px",color:"#666"}},"渐变触发器：",-1)),s(g(S),{placeholder:"选择日期","class-names":{root:"custom-root",input:"custom-input",suffix:"custom-suffix"}})]),r("div",null,[n[1]||(n[1]=r("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义弹层面板：",-1)),s(g(S),{placeholder:"选择日期","class-names":{popup:"custom-popup",panel:"custom-panel",panelHeader:"custom-header"}})]),r("div",null,[n[2]||(n[2]=r("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义日期单元格：",-1)),s(g(S),{placeholder:"选择日期","class-names":{day:"custom-day",weekday:"custom-weekday"}})]),r("div",null,[n[3]||(n[3]=r("div",{style:{"margin-bottom":"8px",color:"#666"}},"带时间选择：",-1)),s(g(S),{placeholder:"选择日期时间","show-time":!0,"class-names":{root:"custom-datetime-root",timePanel:"custom-time-panel",timeColumn:"custom-time-column",timeCell:"custom-time-cell"}})]),r("div",null,[n[4]||(n[4]=r("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),s(g(S),{placeholder:"选择日期",styles:{root:{borderRadius:"20px",borderColor:"#722ed1"},input:{color:"#722ed1",fontWeight:500},popup:{borderRadius:"16px"},panel:{boxShadow:"0 8px 24px rgba(114, 46, 209, 0.15)"}}})])]))}}),$n=vn(Nn,[["__scopeId","data-v-def2708d"]]),Mn=`<template>
  <div style="display: flex; flex-direction: column; gap: 24px">
    <!-- 场景 1：自定义触发器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">渐变触发器：</div>
      <DatePicker
        placeholder="选择日期"
        :class-names="{
          root: 'custom-root',
          input: 'custom-input',
          suffix: 'custom-suffix',
        }"
      />
    </div>

    <!-- 场景 2：自定义弹层与面板 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义弹层面板：</div>
      <DatePicker
        placeholder="选择日期"
        :class-names="{
          popup: 'custom-popup',
          panel: 'custom-panel',
          panelHeader: 'custom-header',
        }"
      />
    </div>

    <!-- 场景 3：自定义日期单元格 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义日期单元格：</div>
      <DatePicker
        placeholder="选择日期"
        :class-names="{
          day: 'custom-day',
          weekday: 'custom-weekday',
        }"
      />
    </div>

    <!-- 场景 4：带时间选择的样式定制 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">带时间选择：</div>
      <DatePicker
        placeholder="选择日期时间"
        :show-time="true"
        :class-names="{
          root: 'custom-datetime-root',
          timePanel: 'custom-time-panel',
          timeColumn: 'custom-time-column',
          timeCell: 'custom-time-cell',
        }"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <DatePicker
        placeholder="选择日期"
        :styles="{
          root: { borderRadius: '20px', borderColor: '#722ed1' },
          input: { color: '#722ed1', fontWeight: 500 },
          popup: { borderRadius: '16px' },
          panel: { boxShadow: '0 8px 24px rgba(114, 46, 209, 0.15)' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DatePicker } from 'ant-design-hmfw'
<\/script>

<style scoped>
:deep(.custom-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.custom-root:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

:deep(.custom-input) {
  color: white;
}

:deep(.custom-input::placeholder) {
  color: rgba(255, 255, 255, 0.7);
}

:deep(.custom-suffix) {
  color: white;
  font-size: 16px;
}

:deep(.custom-datetime-root) {
  border-color: #52c41a;
  border-width: 2px;
  transition: all 0.3s;
}

:deep(.custom-datetime-root:hover) {
  border-color: #73d13d;
  box-shadow: 0 0 0 2px rgba(82, 196, 26, 0.1);
}
</style>

<style>
/* 弹层组件通过 Teleport 渲染到 body，必须使用 :global() */
:global(.custom-popup) {
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(102, 126, 234, 0.2);
}

:global(.custom-panel) {
  background: linear-gradient(180deg, #f0f5ff 0%, #ffffff 100%);
}

:global(.custom-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px 12px 0 0;
  padding: 12px 16px;
}

:global(.custom-day) {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
}

:global(.custom-day:hover) {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

:global(.custom-weekday) {
  color: #722ed1;
  font-weight: 600;
  font-size: 12px;
}

:global(.custom-time-panel) {
  border-left: 2px solid #52c41a;
}

:global(.custom-time-column) {
  background: #f6ffed;
}

:global(.custom-time-cell) {
  border-radius: 4px;
  transition: all 0.2s;
}

:global(.custom-time-cell:hover) {
  background: linear-gradient(135deg, #95de64 0%, #52c41a 100%);
  color: white;
  transform: translateX(4px);
}
</style>
`,Yn={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Tn=O({__name:"DatePickerDisabledDate",setup(a){const o=h(""),n=h(""),u=k=>new Date(k)<new Date(new Date().toDateString()),e=k=>new Date(k)>new Date(new Date().toDateString());return(k,y)=>(H(),A("div",Yn,[s(g(S),{value:o.value,"onUpdate:value":y[0]||(y[0]=p=>o.value=p),"disabled-date":u,placeholder:"不可选择过去日期"},null,8,["value"]),s(g(S),{value:n.value,"onUpdate:value":y[1]||(y[1]=p=>n.value=p),"disabled-date":e,placeholder:"不可选择未来日期"},null,8,["value"])]))}}),Fn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" :disabled-date="disablePastDates" placeholder="不可选择过去日期" />
    <DatePicker v-model:value="date2" :disabled-date="disableFutureDates" placeholder="不可选择未来日期" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')
const date2 = ref('')

const disablePastDates = (dateStr: string) => {
  return new Date(dateStr) < new Date(new Date().toDateString())
}

const disableFutureDates = (dateStr: string) => {
  return new Date(dateStr) > new Date(new Date().toDateString())
}
<\/script>
`,Bn={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},En=O({__name:"DatePickerMinMax",setup(a){const o=h(""),n=v(()=>{const e=new Date;return e.setDate(1),e.toISOString().split("T")[0]}),u=v(()=>{const e=new Date;return e.setMonth(e.getMonth()+1,0),e.toISOString().split("T")[0]});return(e,k)=>(H(),A("div",Bn,[s(g(S),{value:o.value,"onUpdate:value":k[0]||(k[0]=y=>o.value=y),"min-date":n.value,"max-date":u.value,placeholder:"只能选择本月"},null,8,["value","min-date","max-date"]),r("p",null,"选中日期："+X(o.value),1)]))}}),_n=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" :min-date="minDate" :max-date="maxDate" placeholder="只能选择本月" />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')

const minDate = computed(() => {
  const d = new Date()
  d.setDate(1)
  return d.toISOString().split('T')[0]
})

const maxDate = computed(() => {
  const d = new Date()
  d.setMonth(d.getMonth() + 1, 0)
  return d.toISOString().split('T')[0]
})
<\/script>
`,On={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Hn=O({__name:"DatePickerPicker",setup(a){const o=h(""),n=h(""),u=h(""),e=h("");return(k,y)=>(H(),A("div",On,[s(g(S),{value:o.value,"onUpdate:value":y[0]||(y[0]=p=>o.value=p),picker:"date",placeholder:"选择日期"},null,8,["value"]),s(g(S),{value:n.value,"onUpdate:value":y[1]||(y[1]=p=>n.value=p),picker:"month",placeholder:"选择月份"},null,8,["value"]),s(g(S),{value:u.value,"onUpdate:value":y[2]||(y[2]=p=>u.value=p),picker:"quarter",placeholder:"选择季度"},null,8,["value"]),s(g(S),{value:e.value,"onUpdate:value":y[3]||(y[3]=p=>e.value=p),picker:"year",placeholder:"选择年份"},null,8,["value"])]))}}),An=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" picker="date" placeholder="选择日期" />
    <DatePicker v-model:value="month" picker="month" placeholder="选择月份" />
    <DatePicker v-model:value="quarter" picker="quarter" placeholder="选择季度" />
    <DatePicker v-model:value="year" picker="year" placeholder="选择年份" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')
const month = ref('')
const quarter = ref('')
const year = ref('')
<\/script>
`,In={style:{display:"flex","flex-direction":"column",gap:"16px",width:"300px"}},Rn=O({__name:"DatePickerPresets",setup(a){const o=h(""),n=[{label:"昨天",value:()=>{const u=new Date;return u.setDate(u.getDate()-1),u.toISOString().split("T")[0]}},{label:"今天",value:()=>new Date().toISOString().split("T")[0]},{label:"明天",value:()=>{const u=new Date;return u.setDate(u.getDate()+1),u.toISOString().split("T")[0]}},{label:"一周后",value:()=>{const u=new Date;return u.setDate(u.getDate()+7),u.toISOString().split("T")[0]}}];return(u,e)=>(H(),A("div",In,[s(g(S),{value:o.value,"onUpdate:value":e[0]||(e[0]=k=>o.value=k),presets:n,placeholder:"选择日期"},null,8,["value"]),r("p",null,"选中日期："+X(o.value),1)]))}}),Vn=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" :presets="presets" placeholder="选择日期" />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')

const presets = [
  {
    label: '昨天',
    value: () => {
      const d = new Date()
      d.setDate(d.getDate() - 1)
      return d.toISOString().split('T')[0]
    },
  },
  { label: '今天', value: () => new Date().toISOString().split('T')[0] },
  {
    label: '明天',
    value: () => {
      const d = new Date()
      d.setDate(d.getDate() + 1)
      return d.toISOString().split('T')[0]
    },
  },
  {
    label: '一周后',
    value: () => {
      const d = new Date()
      d.setDate(d.getDate() + 7)
      return d.toISOString().split('T')[0]
    },
  },
]
<\/script>
`,Un={style:{width:"300px"}},jn={style:{"margin-top":"8px"}},Qn=O({__name:"DatePickerShowTime",setup(a){const o=h(""),n=u=>{console.log("选中日期时间：",u)};return(u,e)=>(H(),A("div",Un,[s(g(S),{value:o.value,"onUpdate:value":e[0]||(e[0]=k=>o.value=k),"show-time":!0,placeholder:"选择日期和时间",onChange:n},null,8,["value"]),r("p",jn,"选中："+X(o.value),1)]))}}),zn=`<template>
  <div style="width: 300px">
    <DatePicker v-model:value="datetime" :show-time="true" placeholder="选择日期和时间" @change="handleChange" />
    <p style="margin-top: 8px">选中：{{ datetime }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const datetime = ref('')

const handleChange = (value: string) => {
  console.log('选中日期时间：', value)
}
<\/script>
`,Wn={class:"markdown-body"},Xn={__name:"date-picker",setup(a,{expose:o}){return o({frontmatter:{}}),(u,e)=>{const k=yn("DemoBlock");return H(),A("div",Wn,[e[0]||(e[0]=r("h1",{id:"datepicker-日期选择框",tabindex:"-1"},"DatePicker 日期选择框",-1)),e[1]||(e[1]=r("p",null,"输入或选择日期的控件。",-1)),e[2]||(e[2]=r("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),e[3]||(e[3]=r("p",null,"当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。",-1)),e[4]||(e[4]=r("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),e[5]||(e[5]=r("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),e[6]||(e[6]=r("p",null,"最简单的用法，在浮层中可以选择或者输入日期。",-1)),s(k,{title:"基础用法",source:g(qn)},{default:j(()=>[s(Cn)]),_:1},8,["source"]),e[7]||(e[7]=r("h3",{id:"不同-picker-类型",tabindex:"-1"},"不同 picker 类型",-1)),e[8]||(e[8]=r("p",null,[i("通过 "),r("code",null,"picker"),i(" 属性切换不同的选择器类型。")],-1)),s(k,{title:"不同 picker 类型",source:g(An)},{default:j(()=>[s(Hn)]),_:1},8,["source"]),e[9]||(e[9]=r("h3",{id:"禁用日期",tabindex:"-1"},"禁用日期",-1)),e[10]||(e[10]=r("p",null,[i("可用 "),r("code",null,"disabledDate"),i(" 禁止选择某些日期。")],-1)),s(k,{title:"禁用日期",source:g(Fn)},{default:j(()=>[s(Tn)]),_:1},8,["source"]),e[11]||(e[11]=r("h3",{id:"带时间的日期选择",tabindex:"-1"},"带时间的日期选择",-1)),e[12]||(e[12]=r("p",null,[i("通过 "),r("code",null,"showTime"),i(" 属性增加选择时间功能。")],-1)),s(k,{title:"带时间的日期选择",source:g(zn)},{default:j(()=>[s(Qn)]),_:1},8,["source"]),e[13]||(e[13]=r("h3",{id:"预设范围",tabindex:"-1"},"预设范围",-1)),e[14]||(e[14]=r("p",null,[i("通过 "),r("code",null,"presets"),i(" 属性提供快捷选择。")],-1)),s(k,{title:"预设范围",source:g(Vn)},{default:j(()=>[s(Rn)]),_:1},8,["source"]),e[15]||(e[15]=r("h3",{id:"限制日期范围",tabindex:"-1"},"限制日期范围",-1)),e[16]||(e[16]=r("p",null,[i("通过 "),r("code",null,"minDate"),i(" 和 "),r("code",null,"maxDate"),i(" 限制可选日期范围。")],-1)),s(k,{title:"限制日期范围",source:g(_n)},{default:j(()=>[s(En)]),_:1},8,["source"]),e[17]||(e[17]=r("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[18]||(e[18]=r("p",null,[i("通过 "),r("code",null,"classNames"),i(" / "),r("code",null,"styles"),i(" 对各子元素做细粒度样式控制。")],-1)),s(k,{title:"语义化 className 与 style",source:g(Mn)},{default:j(()=>[s($n)]),_:1},8,["source"]),e[19]||(e[19]=hn(`<h2 id="api" tabindex="-1">API</h2><h3 id="datepicker-props" tabindex="-1">DatePicker Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>日期</td><td><code>string</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认日期</td><td><code>string</code></td><td>-</td></tr><tr><td>format</td><td>展示的日期格式</td><td><code>string</code></td><td><code>&#39;YYYY-MM-DD&#39;</code></td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>placeholder</td><td>输入框提示文字</td><td><code>string</code></td><td>-</td></tr><tr><td>allowClear</td><td>是否显示清除按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>picker</td><td>设置选择器类型</td><td><code>&#39;date&#39; | &#39;month&#39; | &#39;year&#39; | &#39;quarter&#39;</code></td><td><code>&#39;date&#39;</code></td></tr><tr><td>showTime</td><td>增加时间选择功能，可配置时分秒步长</td><td><code>boolean | { format?, hourStep?, minuteStep?, secondStep? }</code></td><td><code>false</code></td></tr><tr><td>showToday</td><td>是否展示&quot;今天&quot;按钮</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>showNow</td><td>是否展示&quot;此刻&quot;按钮（优先于 showToday）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabledDate</td><td>不可选择的日期</td><td><code>(dateStr: string) =&gt; boolean</code></td><td>-</td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>open</td><td>控制弹层是否展开</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认是否展开弹层</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>presets</td><td>预设时间范围快捷选择</td><td><code>PresetItem[]</code></td><td>-</td></tr><tr><td>minDate</td><td>最小可选日期</td><td><code>string</code></td><td>-</td></tr><tr><td>maxDate</td><td>最大可选日期</td><td><code>string</code></td><td>-</td></tr><tr><td>renderExtraFooter</td><td>在面板中添加额外的页脚</td><td><code>() =&gt; VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DatePickerClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>DatePickerStyles</code></td><td>-</td></tr></tbody></table><h3 id="datepicker-events" tabindex="-1">DatePicker Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>日期发生变化的回调</td><td><code>(value: string) =&gt; void</code></td></tr><tr><td>change</td><td>日期发生变化的回调</td><td><code>(value: string, dateString: string) =&gt; void</code></td></tr><tr><td>openChange</td><td>弹出日历和关闭日历的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>panelChange</td><td>日历面板切换的回调</td><td><code>(value: any, mode: string) =&gt; void</code></td></tr></tbody></table><h3 id="presetitem" tabindex="-1">PresetItem</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>预设项显示文本</td><td><code>string</code></td></tr><tr><td>value</td><td>预设值</td><td><code>string | (() =&gt; string)</code></td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 DatePicker 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">DatePickerClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点（触发器容器）</span>
  input<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 输入框容器</span>
  clear<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 清除按钮</span>
  suffix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 后缀图标</span>
  popup<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 弹层容器</span>
  panel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板容器</span>
  panelHeader<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板头部</span>
  panelBody<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板主体</span>
  weekdays<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 星期行容器</span>
  weekday<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个星期标签</span>
  days<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 日期网格容器</span>
  day<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个日期单元格</span>
  months<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 月份网格容器</span>
  month<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个月份单元格</span>
  years<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 年份网格容器</span>
  year<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个年份单元格</span>
  quarters<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 季度网格容器</span>
  quarter<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个季度单元格</span>
  timePanel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 时间选择面板</span>
  timeContent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 时间列容器</span>
  timeColumn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个时间列</span>
  timeCell<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 时间单元格</span>
  panelFooter<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 面板底部</span>
  panelFooterExtra<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 底部额外内容区</span>
  panelFooterActions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 底部操作按钮区</span>
  presets<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 预设按钮容器</span>
  presetBtn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单个预设按钮</span>
  today<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 今天/此刻按钮</span>
  ok<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 确定按钮（showTime 模式）</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">DatePickerStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 根节点（触发器容器）</span>
  input<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 输入框容器</span>
  clear<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 清除按钮</span>
  suffix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 后缀图标</span>
  popup<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 弹层容器</span>
  panel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 面板容器</span>
  panelHeader<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 面板头部</span>
  panelBody<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 面板主体</span>
  weekdays<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 星期行容器</span>
  weekday<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 单个星期标签</span>
  days<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 日期网格容器</span>
  day<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 单个日期单元格</span>
  months<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 月份网格容器</span>
  month<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 单个月份单元格</span>
  years<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 年份网格容器</span>
  year<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 单个年份单元格</span>
  quarters<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 季度网格容器</span>
  quarter<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 单个季度单元格</span>
  timePanel<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 时间选择面板</span>
  timeContent<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 时间列容器</span>
  timeColumn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 单个时间列</span>
  timeCell<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 时间单元格</span>
  panelFooter<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 面板底部</span>
  panelFooterExtra<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 底部额外内容区</span>
  panelFooterActions<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 底部操作按钮区</span>
  presets<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 预设按钮容器</span>
  presetBtn<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 单个预设按钮</span>
  today<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 今天/此刻按钮</span>
  ok<span class="token operator">?</span><span class="token operator">:</span> CSSProperties <span class="token comment">// 确定按钮（showTime 模式）</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.input / styles.input 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.clear / styles.clear 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>📅<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.suffix / styles.suffix 应用于此 --&gt;</span>

  <span class="token comment">&lt;!-- Teleport 到 body --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-popup<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.popup / styles.popup 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.panel / styles.panel 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel-header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.panelHeader / styles.panelHeader 应用于此 --&gt;</span>
        年月切换器
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel-body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.panelBody / styles.panelBody 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-weekdays<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.weekdays / styles.weekdays 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-weekday<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>日<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.weekday / styles.weekday 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-days<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.days / styles.days 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-day<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.day / styles.day 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- picker=&quot;month&quot; 时 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-months<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.months / styles.months 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-month<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>一月<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.month / styles.month 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- picker=&quot;year&quot; 时 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-years<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.years / styles.years 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-year<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2024<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.year / styles.year 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- picker=&quot;quarter&quot; 时 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-quarters<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.quarters / styles.quarters 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-quarter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Q1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.quarter / styles.quarter 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- showTime 时 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-time-panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.timePanel / styles.timePanel 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-time-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.timeContent / styles.timeContent 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-time-column<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.timeColumn / styles.timeColumn 应用于此 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-time-cell<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.timeCell / styles.timeCell 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel-footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.panelFooter / styles.panelFooter 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel-footer-extra<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.panelFooterExtra / styles.panelFooterExtra 应用于此 --&gt;</span>
          额外内容
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-presets<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.presets / styles.presets 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-preset-btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>昨天<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.presetBtn / styles.presetBtn 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-panel-footer-actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.panelFooterActions / styles.panelFooterActions 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-today<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>今天<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.today / styles.today 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-date-picker-ok<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>确定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.ok / styles.ok 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;DatePicker
    placeholder=&quot;选择日期&quot;
    :class-names=&quot;{
      root: &#39;my-date-picker-root&#39;,
      panel: &#39;my-date-picker-panel&#39;,
      day: &#39;my-date-picker-day&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style&gt;
/* popup/panel 通过 Teleport 渲染到 body，必须使用 :global() */
:global(.my-date-picker-panel) {
  border-radius: 12px;
  box-shadow: 0 6px 24px rgba(102, 126, 234, 0.2);
}

:global(.my-date-picker-day:hover) {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}
&lt;/style&gt;

&lt;style scoped&gt;
:deep(.my-date-picker-root) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
}

:deep(.my-date-picker-root:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;DatePicker
    placeholder=&quot;选择日期&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;20px&#39;, borderColor: &#39;#722ed1&#39; },
      input: { color: &#39;#722ed1&#39;, fontWeight: 500 },
      popup: { borderRadius: &#39;16px&#39; },
      panel: { boxShadow: &#39;0 8px 24px rgba(114, 46, 209, 0.15)&#39; },
      day: { borderRadius: &#39;8px&#39;, fontWeight: 500 },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>popup</code>、<code>panel</code> 及其所有子节点（如 <code>day</code>、<code>month</code>、<code>timeCell</code> 等）通过 <code>Teleport to=&quot;body&quot;</code> 渲染，因此其样式必须使用 <code>:global()</code> 而非 <code>:deep()</code></li><li><code>clear</code> 仅在 <code>allowClear</code> 启用且有选中值时显示</li><li><code>timePanel</code>、<code>timeContent</code>、<code>timeColumn</code>、<code>timeCell</code> 仅在 <code>showTime</code> 启用时显示</li><li><code>ok</code> 按钮仅在 <code>showTime</code> 模式下显示</li><li><code>today</code> 按钮受 <code>showToday</code> / <code>showNow</code> 控制</li><li>不同 <code>picker</code> 类型（date/month/year/quarter）会显示不同的单元格容器（days/months/years/quarters）</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用状态背景色</td><td><code>rgba(0, 0, 0, 0.04)</code></td></tr><tr><td><code>--hmfw-color-bg-text-hover</code></td><td>文本悬停背景色</td><td><code>rgba(0, 0, 0, 0.06)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-border-secondary</code></td><td>次要边框颜色</td><td><code>#f0f0f0</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态颜色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题浅色背景</td><td><code>#e6f4ff</code></td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主要文本颜色</td><td><code>rgba(0, 0, 0, 0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本颜色</td><td><code>rgba(0, 0, 0, 0.25)</code></td></tr><tr><td><code>--hmfw-color-text-placeholder</code></td><td>占位符文本颜色</td><td><code>rgba(0, 0, 0, 0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本颜色</td><td><code>rgba(0, 0, 0, 0.65)</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态颜色</td><td><code>#faad14</code></td></tr></tbody></table>`,23))])}}};export{Xn as default};
