import{o as H,N as Gn,E as b,Q as Zn,x as ne,y as ee,n as t,F as hn,m as x,T as ae,f as q,A as _,k as nn,h as s,K as g,J as on,p as te,_ as Ln,i as vn,H as se,R as D,l as le}from"./index-X2tFbSxS.js";import{c as m}from"./cls-S9IiI6wd.js";const S=H({name:"Cascader",inheritAttrs:!1,props:{value:[Array,Object],defaultValue:{type:[Array,Object],default:()=>[]},options:{type:Array,default:()=>[]},disabled:Boolean,placeholder:{type:String,default:"请选择"},allowClear:{type:Boolean,default:!0},size:{type:String,default:"middle"},status:{type:String,default:""},expandTrigger:{type:String,default:"click"},multiple:Boolean,showSearch:Boolean,changeOnSelect:Boolean,displayRender:Function,fieldNames:Object,open:{type:Boolean,default:void 0},defaultOpen:Boolean,notFoundContent:{type:String,default:"无匹配结果"},loadData:Function,showCheckedStrategy:{type:String,default:"SHOW_PARENT"},maxTagCount:Number,maxTagPlaceholder:[String,Function],maxTagTextLength:Number,classNames:Object,styles:Object},emits:["update:value","update:open","change","search","focus","blur","clear"],setup(n,{emit:c,attrs:v,expose:i}){const a=Gn("cascader"),r=q(()=>{var e;return((e=n.fieldNames)==null?void 0:e.label)??"label"}),T=q(()=>{var e;return((e=n.fieldNames)==null?void 0:e.value)??"value"}),en=q(()=>{var e;return((e=n.fieldNames)==null?void 0:e.children)??"children"}),h=e=>e[r.value],w=e=>e[T.value],F=e=>e[en.value],cn=e=>e?n.multiple?Array.isArray(e)&&e.length>0&&Array.isArray(e[0])?e:[]:Array.isArray(e)&&e.length>0&&!Array.isArray(e[0])?[e]:[]:[],R=b(cn(n.defaultValue??n.value)),dn=b(n.defaultOpen??!1),A=b([]),N=b(""),an=b(),kn=b(),pn=b({top:0,left:0,width:0}),tn=b(),Bn=q(()=>n.value!==void 0),f=q(()=>Bn.value?cn(n.value):R.value),U=q(()=>n.open!==void 0?n.open:dn.value);Zn(()=>n.value,e=>{e!==void 0&&(R.value=cn(e))});const L=(e,l)=>{const o=[];let d=l;for(const p of e){const u=d.find(y=>w(y)===p);if(!u)break;o.push(u),d=F(u)??[]}return o},rn=(e,l)=>L(e,l).map(h),V=q(()=>{if(!n.multiple)return f.value;const e=f.value;return!n.showCheckedStrategy||e.length===0?e:n.showCheckedStrategy==="SHOW_CHILD"?e.filter(l=>!e.some(d=>d.length>l.length&&l.every((p,u)=>p===d[u]))):n.showCheckedStrategy==="SHOW_PARENT"?e.filter(l=>!e.some(d=>d.length<l.length&&d.every((p,u)=>p===l[u]))):e}),bn=(e,l)=>{var z,O;if(!l)return[e];const o=e.toLowerCase(),d=l.toLowerCase(),p=o.indexOf(d);if(p===-1)return[e];const u=e.slice(0,p),y=e.slice(p,p+l.length),j=e.slice(p+l.length),I=[];return u&&I.push(u),I.push(t("span",{class:m(`${a}-menu-item-highlight`,(z=n.classNames)==null?void 0:z.menuItemHighlight),style:(O=n.styles)==null?void 0:O.menuItemHighlight},[y])),j&&I.push(...bn(j,l)),I},sn=q(()=>{if(n.multiple){const e=V.value;if(e.length===0)return"";const l=rn(e[0],n.options),o=L(e[0],n.options);return n.displayRender?n.displayRender(l,o):l.join(" / ")}else{if(f.value.length===0)return"";const e=rn(f.value[0],n.options),l=L(f.value[0],n.options);return n.displayRender?n.displayRender(e,l):e.join(" / ")}}),Dn=q(()=>{const e=[n.options];let l=n.options;for(const o of A.value){const d=l.find(u=>w(u)===o);if(!d)break;const p=F(d);if(p!=null&&p.length)e.push(p),l=p;else break}return e}),Vn=q(()=>{const e=[],l=(o,d,p,u)=>{for(const y of o){const j=[...d,h(y)],I=[...p,w(y)],z=[...u,y],O=F(y);O!=null&&O.length&&!y.isLeaf?l(O,j,I,z):e.push({labels:j,values:I,options:z})}};return l(n.options,[],[],[]),e}),un=q(()=>{if(!N.value)return null;const e=N.value.toLowerCase();return Vn.value.filter(l=>l.labels.some(o=>o.toLowerCase().includes(e)))}),Wn=()=>{if(!an.value)return;const e=an.value.getBoundingClientRect();pn.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width}},Fn=()=>{n.disabled||(Wn(),!n.multiple&&f.value.length>0&&(A.value=[...f.value[0]]),dn.value=!0,c("update:open",!0))},mn=()=>{dn.value=!1,N.value="",c("update:open",!1)},fn=e=>{var l,o;!((l=an.value)!=null&&l.contains(e.target))&&!((o=kn.value)!=null&&o.contains(e.target))&&mn()};ne(()=>document.addEventListener("mousedown",fn)),ee(()=>document.removeEventListener("mousedown",fn));const W=e=>{const l=n.multiple?e:e[0]??[],o=n.multiple?e.map(d=>L(d,n.options)):L(e[0]??[],n.options);c("update:value",l),c("change",l,o)},Un=(e,l)=>{if(e.disabled)return;const o=[...A.value.slice(0,l),w(e)];A.value=o;const d=F(e),p=!(d!=null&&d.length)||e.isLeaf;if(n.loadData&&!p&&!(d!=null&&d.length)){const u=L(o,n.options);n.loadData(u);return}if(n.multiple){if(p||n.changeOnSelect){const u=[...f.value],y=u.findIndex(j=>j.length===o.length&&j.every((I,z)=>I===o[z]));y>=0?u.splice(y,1):u.push(o),R.value=u,W(u)}}else(p||n.changeOnSelect)&&(R.value=[o],W([o]),p&&mn())},Mn=(e,l)=>{if(n.expandTrigger!=="hover"||e.disabled)return;const o=[...A.value.slice(0,l),w(e)];A.value=o},Jn=(e,l)=>{if(n.multiple){const o=[...f.value,e];R.value=o,W(o)}else R.value=[e],W([e]),mn()},Kn=e=>{e.stopPropagation(),R.value=[],W([]),c("clear")},Xn=(e,l)=>{l.stopPropagation();const o=f.value.filter(d=>!(d.length===e.length&&d.every((p,u)=>p===e[u])));R.value=o,W(o)};return i({focus:()=>{var e;return(e=tn.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=tn.value)==null?void 0:e.blur()}}),()=>{var e,l,o,d,p,u,y,j,I,z,O,yn,xn,wn,Cn,Sn,In,Nn,jn,qn;return t(hn,null,[t("div",{ref:an,class:m(a,`${a}-${n.size}`,{[`${a}-open`]:U.value,[`${a}-disabled`]:n.disabled,[`${a}-multiple`]:n.multiple,[`${a}-status-error`]:n.status==="error",[`${a}-status-warning`]:n.status==="warning"},(e=n.classNames)==null?void 0:e.root,v.class),style:{...(l=n.styles)==null?void 0:l.root,...v.style},onClick:Fn},[t("span",{class:m(`${a}-selector`,(o=n.classNames)==null?void 0:o.selector),style:(d=n.styles)==null?void 0:d.selector},[n.multiple?t(hn,null,[V.value.slice(0,n.maxTagCount??V.value.length).map(k=>{var J,K,X,Y,E,C;const M=rn(k,n.options),ln=L(k,n.options);let P;return n.displayRender?P=n.displayRender(M,ln):P=M.join(" / "),typeof P=="string"&&n.maxTagTextLength&&P.length>n.maxTagTextLength&&(P=P.slice(0,n.maxTagTextLength)+"..."),t("span",{key:k.join("-"),class:m(`${a}-selection-item`,(J=n.classNames)==null?void 0:J.selectionItem),style:(K=n.styles)==null?void 0:K.selectionItem},[t("span",{class:m(`${a}-selection-item-content`,(X=n.classNames)==null?void 0:X.selectionItemContent),style:(Y=n.styles)==null?void 0:Y.selectionItemContent},[P]),!n.disabled&&t("span",{class:m(`${a}-selection-item-remove`,(E=n.classNames)==null?void 0:E.selectionItemRemove),style:(C=n.styles)==null?void 0:C.selectionItemRemove,onClick:B=>Xn(k,B)},[x("×")])])}),n.maxTagCount&&V.value.length>n.maxTagCount&&t("span",{class:m(`${a}-selection-item`,(p=n.classNames)==null?void 0:p.selectionItem),style:(u=n.styles)==null?void 0:u.selectionItem},[typeof n.maxTagPlaceholder=="function"?n.maxTagPlaceholder(V.value.slice(n.maxTagCount)):n.maxTagPlaceholder??`+${V.value.length-n.maxTagCount}`]),n.showSearch&&U.value&&t("input",{ref:tn,class:m(`${a}-search-input`,(y=n.classNames)==null?void 0:y.searchInput),style:(j=n.styles)==null?void 0:j.searchInput,value:N.value,placeholder:f.value.length===0?n.placeholder:"",onInput:k=>{N.value=k.target.value,c("search",N.value)},onClick:k=>k.stopPropagation(),autofocus:!0},null),f.value.length===0&&!N.value&&t("span",{class:m(`${a}-selection-placeholder`,(I=n.classNames)==null?void 0:I.selectionPlaceholder),style:(z=n.styles)==null?void 0:z.selectionPlaceholder},[n.placeholder])]):t(hn,null,[n.showSearch&&U.value?t("input",{ref:tn,class:m(`${a}-search-input`,(O=n.classNames)==null?void 0:O.searchInput),style:(yn=n.styles)==null?void 0:yn.searchInput,value:N.value,placeholder:typeof sn.value=="string"&&sn.value||n.placeholder,onInput:k=>{N.value=k.target.value,c("search",N.value)},onClick:k=>k.stopPropagation(),autofocus:!0},null):t("span",{class:m(`${a}-selection-item`,{[`${a}-selection-placeholder`]:!sn.value},(xn=n.classNames)==null?void 0:xn.selectionItem),style:(wn=n.styles)==null?void 0:wn.selectionItem},[sn.value||n.placeholder])])]),t("span",{class:m(`${a}-suffix`,(Cn=n.classNames)==null?void 0:Cn.suffix),style:(Sn=n.styles)==null?void 0:Sn.suffix},[n.allowClear&&f.value.length>0&&!n.disabled?t("span",{class:m(`${a}-clear`,(In=n.classNames)==null?void 0:In.clear),style:(Nn=n.styles)==null?void 0:Nn.clear,onMousedown:Kn,onClick:k=>k.stopPropagation()},[x("✕")]):t("span",{class:m(`${a}-arrow`,{[`${a}-arrow-open`]:U.value},(jn=n.classNames)==null?void 0:jn.arrow),style:(qn=n.styles)==null?void 0:qn.arrow},[x("▾")])])]),U.value&&t(ae,{to:"body"},{default:()=>{var k,M,ln,P,J,K,X,Y;return[t("div",{ref:kn,class:m(`${a}-dropdown`,(k=n.classNames)==null?void 0:k.dropdown),style:{position:"absolute",top:`${pn.value.top}px`,left:`${pn.value.left}px`,zIndex:1050,...(M=n.styles)==null?void 0:M.dropdown}},[un.value?t("div",{class:m(`${a}-menu`,`${a}-menu-search`,(ln=n.classNames)==null?void 0:ln.menu),style:(P=n.styles)==null?void 0:P.menu},[un.value.length===0?t("div",{class:m(`${a}-menu-item-empty`,(J=n.classNames)==null?void 0:J.menuItemEmpty),style:(K=n.styles)==null?void 0:K.menuItemEmpty},[n.notFoundContent]):un.value.map((E,C)=>{var B,Q;return t("div",{key:C,class:m(`${a}-menu-item`,(B=n.classNames)==null?void 0:B.menuItem),style:(Q=n.styles)==null?void 0:Q.menuItem,onMousedown:$=>{$.preventDefault(),Jn(E.values,E.options)}},[bn(E.labels.join(" / "),N.value)])})]):t("div",{class:m(`${a}-menus`,(X=n.classNames)==null?void 0:X.menus),style:(Y=n.styles)==null?void 0:Y.menus},[Dn.value.map((E,C)=>{var B,Q;return t("ul",{key:C,class:m(`${a}-menu`,(B=n.classNames)==null?void 0:B.menu),style:(Q=n.styles)==null?void 0:Q.menu},[E.map($=>{var On,Pn,Tn,$n,Rn,En,Hn,_n,An;const G=w($),gn=F($),zn=!!(gn!=null&&gn.length)&&!$.isLeaf,Yn=A.value[C]===G,Qn=n.multiple?f.value.some(Z=>Z[C]===G&&Z.length>C):((On=f.value[0])==null?void 0:On[C])===G;return t("li",{key:G,class:m(`${a}-menu-item`,{[`${a}-menu-item-active`]:Yn,[`${a}-menu-item-selected`]:Qn,[`${a}-menu-item-disabled`]:$.disabled,[`${a}-menu-item-expand`]:zn},(Pn=n.classNames)==null?void 0:Pn.menuItem),style:(Tn=n.styles)==null?void 0:Tn.menuItem,onClick:()=>Un($,C),onMouseenter:()=>Mn($,C)},[n.multiple&&t("span",{class:m(`${a}-menu-item-checkbox`,($n=n.classNames)==null?void 0:$n.menuItemCheckbox),style:(Rn=n.styles)==null?void 0:Rn.menuItemCheckbox},[f.value.some(Z=>Z.length===C+1&&Z[C]===G)&&"✓"]),t("span",{class:m(`${a}-menu-item-content`,(En=n.classNames)==null?void 0:En.menuItemContent),style:(Hn=n.styles)==null?void 0:Hn.menuItemContent},[h($)]),zn&&t("span",{class:m(`${a}-menu-item-expand-icon`,(_n=n.classNames)==null?void 0:_n.menuItemExpandIcon),style:(An=n.styles)==null?void 0:An.menuItemExpandIcon},[x("›")])])})])})])])]}})])}}}),oe={class:"demo-cascader"},ce={style:{"margin-top":"8px",color:"#666"}},de={style:{"margin-top":"8px",color:"#666"}},pe=H({__name:"CascaderAdvanced",setup(n){const c=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖"},{value:"binjiang",label:"滨江"}]},{value:"ningbo",label:"宁波"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京"},{value:"suzhou",label:"苏州"}]}],v=b([]),i=b([["zhejiang"],["zhejiang","hangzhou"],["zhejiang","hangzhou","xihu"],["jiangsu","nanjing"]]),a=b([["zhejiang"],["zhejiang","hangzhou"],["zhejiang","hangzhou","xihu"],["jiangsu","nanjing"]]),r=b(["zhejiang","hangzhou","xihu"]),T=en=>te("span",{style:"color: #1677ff; font-weight: 600;"},en.join(" → "));return(en,h)=>(_(),nn("div",oe,[h[4]||(h[4]=s("h3",null,"搜索高亮",-1)),t(g(S),{value:v.value,"onUpdate:value":h[0]||(h[0]=w=>v.value=w),options:c,"show-search":"",placeholder:"搜索城市（高亮显示匹配结果）",style:{width:"300px"}},null,8,["value"]),h[5]||(h[5]=s("h3",{style:{"margin-top":"24px"}},"showCheckedStrategy - SHOW_PARENT",-1)),t(g(S),{value:i.value,"onUpdate:value":h[1]||(h[1]=w=>i.value=w),options:c,multiple:"","show-checked-strategy":"SHOW_PARENT",placeholder:"只显示父节点",style:{width:"400px"}},null,8,["value"]),s("div",ce,"当前选择: "+on(JSON.stringify(i.value)),1),h[6]||(h[6]=s("h3",{style:{"margin-top":"24px"}},"showCheckedStrategy - SHOW_CHILD",-1)),t(g(S),{value:a.value,"onUpdate:value":h[2]||(h[2]=w=>a.value=w),options:c,multiple:"","show-checked-strategy":"SHOW_CHILD",placeholder:"只显示子节点",style:{width:"400px"}},null,8,["value"]),s("div",de,"当前选择: "+on(JSON.stringify(a.value)),1),h[7]||(h[7]=s("h3",{style:{"margin-top":"24px"}},"自定义 displayRender (VNode)",-1)),t(g(S),{value:r.value,"onUpdate:value":h[3]||(h[3]=w=>r.value=w),options:c,"display-render":T,placeholder:"自定义渲染",style:{width:"300px"}},null,8,["value"])]))}}),re=Ln(pe,[["__scopeId","data-v-ad0255c4"]]),ue=`<template>
  <div class="demo-cascader">
    <h3>搜索高亮</h3>
    <Cascader
      v-model:value="value1"
      :options="options"
      show-search
      placeholder="搜索城市（高亮显示匹配结果）"
      style="width: 300px"
    />

    <h3 style="margin-top: 24px">showCheckedStrategy - SHOW_PARENT</h3>
    <Cascader
      v-model:value="value2"
      :options="options"
      multiple
      show-checked-strategy="SHOW_PARENT"
      placeholder="只显示父节点"
      style="width: 400px"
    />
    <div style="margin-top: 8px; color: #666">当前选择: {{ JSON.stringify(value2) }}</div>

    <h3 style="margin-top: 24px">showCheckedStrategy - SHOW_CHILD</h3>
    <Cascader
      v-model:value="value3"
      :options="options"
      multiple
      show-checked-strategy="SHOW_CHILD"
      placeholder="只显示子节点"
      style="width: 400px"
    />
    <div style="margin-top: 8px; color: #666">当前选择: {{ JSON.stringify(value3) }}</div>

    <h3 style="margin-top: 24px">自定义 displayRender (VNode)</h3>
    <Cascader
      v-model:value="value4"
      :options="options"
      :display-render="customRender"
      placeholder="自定义渲染"
      style="width: 300px"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
          { value: 'binjiang', label: '滨江' },
        ],
      },
      { value: 'ningbo', label: '宁波' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      { value: 'nanjing', label: '南京' },
      { value: 'suzhou', label: '苏州' },
    ],
  },
]

const value1 = ref([])
const value2 = ref([['zhejiang'], ['zhejiang', 'hangzhou'], ['zhejiang', 'hangzhou', 'xihu'], ['jiangsu', 'nanjing']])
const value3 = ref([['zhejiang'], ['zhejiang', 'hangzhou'], ['zhejiang', 'hangzhou', 'xihu'], ['jiangsu', 'nanjing']])
const value4 = ref(['zhejiang', 'hangzhou', 'xihu'])

const customRender = (labels: string[]) => {
  return h('span', { style: 'color: #1677ff; font-weight: 600;' }, labels.join(' → '))
}
<\/script>

<style scoped>
.demo-cascader h3 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}
</style>
`,ie=H({__name:"CascaderBasic",setup(n){const c=b([]),v=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]},{value:"ningbo",label:"宁波",children:[{value:"haishu",label:"海曙区"},{value:"jiangbei",label:"江北区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"},{value:"qinhuai",label:"秦淮区"}]}]}];return(i,a)=>(_(),vn(g(S),{value:c.value,"onUpdate:value":a[0]||(a[0]=r=>c.value=r),options:v,placeholder:"请选择省市区",style:{width:"300px"}},null,8,["value"]))}}),me=`<template>
  <Cascader v-model:value="value" :options="options" placeholder="请选择省市区" style="width: 300px" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'yuhang', label: '余杭区' },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [
          { value: 'haishu', label: '海曙区' },
          { value: 'jiangbei', label: '江北区' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'xuanwu', label: '玄武区' },
          { value: 'qinhuai', label: '秦淮区' },
        ],
      },
    ],
  },
]
<\/script>
`,ge={style:{"margin-top":"8px"}},he=H({__name:"CascaderChangeOnSelect",setup(n){const c=b([]),v=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"}]}]}],i=a=>{console.log("选中值：",a)};return(a,r)=>(_(),nn("div",null,[t(g(S),{value:c.value,"onUpdate:value":r[0]||(r[0]=T=>c.value=T),options:v,"change-on-select":!0,placeholder:"选择即改变",style:{width:"300px"},onChange:i},null,8,["value"]),s("p",ge,"当前值："+on(c.value),1)]))}}),ve=`<template>
  <div>
    <Cascader
      v-model:value="value"
      :options="options"
      :change-on-select="true"
      placeholder="选择即改变"
      style="width: 300px"
      @change="handleChange"
    />
    <p style="margin-top: 8px">当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [{ value: 'xihu', label: '西湖区' }],
      },
    ],
  },
]

const handleChange = (val: string[]) => {
  console.log('选中值：', val)
}
<\/script>
`,ke={style:{display:"flex","flex-direction":"column",gap:"32px"}},be=H({__name:"CascaderClassNames",setup(n){const c=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州"},{value:"ningbo",label:"宁波"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京"},{value:"suzhou",label:"苏州"}]},{value:"guangdong",label:"广东",children:[{value:"guangzhou",label:"广州"},{value:"shenzhen",label:"深圳"}]}];return(v,i)=>(_(),nn("div",ke,[s("div",null,[i[0]||(i[0]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义选择器样式：",-1)),t(g(S),{options:c,placeholder:"请选择城市","class-names":{root:"custom-cascader-root",selector:"custom-selector",arrow:"custom-arrow"}})]),s("div",null,[i[1]||(i[1]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义下拉面板与菜单项：",-1)),t(g(S),{options:c,placeholder:"请选择城市","class-names":{dropdown:"custom-dropdown",menu:"custom-menu",menuItem:"custom-menu-item",menuItemContent:"custom-menu-item-content"}})]),s("div",null,[i[2]||(i[2]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"多选模式自定义标签：",-1)),t(g(S),{multiple:"",options:c,placeholder:"请选择多个城市","default-value":[["zhejiang","hangzhou"],["jiangsu","nanjing"]],"class-names":{selectionItem:"custom-tag",selectionItemContent:"custom-tag-content",selectionItemRemove:"custom-tag-remove"}})]),s("div",null,[i[3]||(i[3]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"搜索高亮自定义：",-1)),t(g(S),{"show-search":"",options:c,placeholder:"搜索城市","class-names":{searchInput:"custom-search-input",menuItemHighlight:"custom-highlight"}})]),s("div",null,[i[4]||(i[4]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),t(g(S),{options:c,placeholder:"请选择城市",styles:{root:{borderRadius:"20px",borderColor:"#722ed1"},selector:{padding:"8px 16px"},dropdown:{borderRadius:"12px",boxShadow:"0 6px 16px rgba(0, 0, 0, 0.12)"},menuItem:{padding:"10px 16px"}}})])]))}}),fe=Ln(be,[["__scopeId","data-v-ef69c369"]]),ye=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义选择器样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义选择器样式：</div>
      <Cascader
        :options="cityOptions"
        placeholder="请选择城市"
        :class-names="{
          root: 'custom-cascader-root',
          selector: 'custom-selector',
          arrow: 'custom-arrow',
        }"
      />
    </div>

    <!-- 场景 2：自定义下拉面板样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义下拉面板与菜单项：</div>
      <Cascader
        :options="cityOptions"
        placeholder="请选择城市"
        :class-names="{
          dropdown: 'custom-dropdown',
          menu: 'custom-menu',
          menuItem: 'custom-menu-item',
          menuItemContent: 'custom-menu-item-content',
        }"
      />
    </div>

    <!-- 场景 3：多选模式自定义标签样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">多选模式自定义标签：</div>
      <Cascader
        multiple
        :options="cityOptions"
        placeholder="请选择多个城市"
        :default-value="[
          ['zhejiang', 'hangzhou'],
          ['jiangsu', 'nanjing'],
        ]"
        :class-names="{
          selectionItem: 'custom-tag',
          selectionItemContent: 'custom-tag-content',
          selectionItemRemove: 'custom-tag-remove',
        }"
      />
    </div>

    <!-- 场景 4：搜索模式高亮样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">搜索高亮自定义：</div>
      <Cascader
        show-search
        :options="cityOptions"
        placeholder="搜索城市"
        :class-names="{
          searchInput: 'custom-search-input',
          menuItemHighlight: 'custom-highlight',
        }"
      />
    </div>

    <!-- 场景 5：使用 styles 内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式：</div>
      <Cascader
        :options="cityOptions"
        placeholder="请选择城市"
        :styles="{
          root: { borderRadius: '20px', borderColor: '#722ed1' },
          selector: { padding: '8px 16px' },
          dropdown: { borderRadius: '12px', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)' },
          menuItem: { padding: '10px 16px' },
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Cascader } from 'ant-design-hmfw'

const cityOptions = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      { value: 'hangzhou', label: '杭州' },
      { value: 'ningbo', label: '宁波' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      { value: 'nanjing', label: '南京' },
      { value: 'suzhou', label: '苏州' },
    ],
  },
  {
    value: 'guangdong',
    label: '广东',
    children: [
      { value: 'guangzhou', label: '广州' },
      { value: 'shenzhen', label: '深圳' },
    ],
  },
]
<\/script>

<style scoped>
:deep(.custom-cascader-root) {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  border-radius: 8px;
  transition: all 0.3s;
}

:deep(.custom-cascader-root:hover) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

:deep(.custom-selector) {
  padding: 6px 12px;
}

:deep(.custom-arrow) {
  color: #764ba2;
  transition: transform 0.3s;
}

:deep(.custom-tag) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 4px 8px;
  transition: all 0.3s;
}

:deep(.custom-tag:hover) {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
}

:deep(.custom-tag-content) {
  color: white;
  font-weight: 500;
}

:deep(.custom-tag-remove) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}

:deep(.custom-tag-remove:hover) {
  color: white;
  background: rgba(255, 255, 255, 0.2);
}

:deep(.custom-search-input) {
  border: 2px solid #722ed1;
  border-radius: 6px;
}

:deep(.custom-search-input:focus) {
  border-color: #531dab;
  box-shadow: 0 0 0 2px rgba(114, 46, 209, 0.1);
}

:deep(.custom-highlight) {
  color: #d4380d;
  font-weight: 600;
  background: #fff2e8;
  padding: 0 2px;
  border-radius: 2px;
}
</style>

<style>
/* 弹层通过 Teleport 渲染，必须使用 :global() */
:global(.custom-dropdown) {
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border: 2px solid #f0f0f0;
}

:global(.custom-menu) {
  background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
}

:global(.custom-menu-item) {
  border-radius: 6px;
  margin: 4px 8px;
  transition: all 0.3s;
}

:global(.custom-menu-item:hover) {
  background: linear-gradient(135deg, #e6f4ff 0%, #f0e6ff 100%);
  transform: translateX(4px);
}

:global(.custom-menu-item-content) {
  font-weight: 500;
  color: #262626;
}
</style>
`,xe=H({__name:"CascaderHover",setup(n){const c=b([]),v=[{value:"frontend",label:"前端",children:[{value:"framework",label:"框架",children:[{value:"vue",label:"Vue"},{value:"react",label:"React"}]},{value:"language",label:"语言",children:[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"}]}]},{value:"backend",label:"后端",children:[{value:"node",label:"Node.js",children:[{value:"express",label:"Express"},{value:"koa",label:"Koa"}]}]}];return(i,a)=>(_(),vn(g(S),{value:c.value,"onUpdate:value":a[0]||(a[0]=r=>c.value=r),options:v,"expand-trigger":"hover",placeholder:"鼠标悬停展开",style:{width:"300px"}},null,8,["value"]))}}),we=`<template>
  <Cascader
    v-model:value="value"
    :options="options"
    expand-trigger="hover"
    placeholder="鼠标悬停展开"
    style="width: 300px"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  {
    value: 'frontend',
    label: '前端',
    children: [
      {
        value: 'framework',
        label: '框架',
        children: [
          { value: 'vue', label: 'Vue' },
          { value: 'react', label: 'React' },
        ],
      },
      {
        value: 'language',
        label: '语言',
        children: [
          { value: 'ts', label: 'TypeScript' },
          { value: 'js', label: 'JavaScript' },
        ],
      },
    ],
  },
  {
    value: 'backend',
    label: '后端',
    children: [
      {
        value: 'node',
        label: 'Node.js',
        children: [
          { value: 'express', label: 'Express' },
          { value: 'koa', label: 'Koa' },
        ],
      },
    ],
  },
]
<\/script>
`,Ce={style:{"margin-top":"8px"}},Se=H({__name:"CascaderMultiple",setup(n){const c=b([]),v=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]},{value:"ningbo",label:"宁波",children:[{value:"haishu",label:"海曙区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"}]}]}],i=(a,r)=>{console.log("选中值：",a,r)};return(a,r)=>(_(),nn("div",null,[t(g(S),{value:c.value,"onUpdate:value":r[0]||(r[0]=T=>c.value=T),options:v,multiple:!0,placeholder:"支持多选",style:{width:"300px"},onChange:i},null,8,["value"]),s("p",Ce,"当前值："+on(c.value),1)]))}}),Ie=`<template>
  <div>
    <Cascader
      v-model:value="value"
      :options="options"
      :multiple="true"
      placeholder="支持多选"
      style="width: 300px"
      @change="handleChange"
    />
    <p style="margin-top: 8px">当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[][]>([])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'yuhang', label: '余杭区' },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [{ value: 'haishu', label: '海曙区' }],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [{ value: 'xuanwu', label: '玄武区' }],
      },
    ],
  },
]

const handleChange = (val: string[][], selectedOptions: any[]) => {
  console.log('选中值：', val, selectedOptions)
}
<\/script>
`,Ne=H({__name:"CascaderSearch",setup(n){const c=b([]),v=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"}]}]}],i=a=>{console.log("搜索：",a)};return(a,r)=>(_(),vn(g(S),{value:c.value,"onUpdate:value":r[0]||(r[0]=T=>c.value=T),options:v,"show-search":!0,placeholder:"请搜索并选择",style:{width:"300px"},onSearch:i},null,8,["value"]))}}),je=`<template>
  <Cascader
    v-model:value="value"
    :options="options"
    :show-search="true"
    placeholder="请搜索并选择"
    style="width: 300px"
    @search="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'yuhang', label: '余杭区' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [{ value: 'xuanwu', label: '玄武区' }],
      },
    ],
  },
]

const handleSearch = (searchText: string) => {
  console.log('搜索：', searchText)
}
<\/script>
`,qe={class:"markdown-body"},Pe={__name:"cascader",setup(n,{expose:c}){return c({frontmatter:{}}),(i,a)=>{const r=se("DemoBlock");return _(),nn("div",qe,[a[0]||(a[0]=s("h1",{id:"cascader-级联选择",tabindex:"-1"},"Cascader 级联选择",-1)),a[1]||(a[1]=s("p",null,"级联选择框。",-1)),a[2]||(a[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=s("ul",null,[s("li",null,"需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。"),s("li",null,"从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。"),s("li",null,"比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。")],-1)),a[4]||(a[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),a[6]||(a[6]=s("p",null,"省市区级联。",-1)),t(r,{title:"基础用法",source:g(me)},{default:D(()=>[t(ie)]),_:1},8,["source"]),a[7]||(a[7]=s("h3",{id:"hover-展开",tabindex:"-1"},"Hover 展开",-1)),a[8]||(a[8]=s("p",null,[x("通过 "),s("code",null,"expandTrigger"),x(" 设置为 "),s("code",null,"hover"),x(" 时，鼠标移入即展开下级菜单。")],-1)),t(r,{title:"Hover 展开",source:g(we)},{default:D(()=>[t(xe)]),_:1},8,["source"]),a[9]||(a[9]=s("h3",{id:"可搜索",tabindex:"-1"},"可搜索",-1)),a[10]||(a[10]=s("p",null,"可以直接搜索选项并选择。",-1)),t(r,{title:"可搜索",source:g(je)},{default:D(()=>[t(Ne)]),_:1},8,["source"]),a[11]||(a[11]=s("h3",{id:"选择即改变",tabindex:"-1"},"选择即改变",-1)),a[12]||(a[12]=s("p",null,[x("当 "),s("code",null,"changeOnSelect"),x(" 为 "),s("code",null,"true"),x(" 时，点选每级菜单选项值都会发生变化。")],-1)),t(r,{title:"选择即改变",source:g(ve)},{default:D(()=>[t(he)]),_:1},8,["source"]),a[13]||(a[13]=s("h3",{id:"多选",tabindex:"-1"},"多选",-1)),a[14]||(a[14]=s("p",null,[x("通过 "),s("code",null,"multiple"),x(" 属性开启多选模式。")],-1)),t(r,{title:"多选",source:g(Ie)},{default:D(()=>[t(Se)]),_:1},8,["source"]),a[15]||(a[15]=s("h3",{id:"高级功能",tabindex:"-1"},"高级功能",-1)),a[16]||(a[16]=s("p",null,"展示搜索高亮、showCheckedStrategy 和自定义 displayRender（支持 VNode）。",-1)),t(r,{title:"高级功能",source:g(ue)},{default:D(()=>[t(re)]),_:1},8,["source"]),a[17]||(a[17]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[18]||(a[18]=s("p",null,[x("通过 "),s("code",null,"classNames"),x(" / "),s("code",null,"styles"),x(" 对各子元素做细粒度样式控制。")],-1)),t(r,{title:"语义化 className 与 style",source:g(ye)},{default:D(()=>[t(fe)]),_:1},8,["source"]),a[19]||(a[19]=le(`<h2 id="api" tabindex="-1">API</h2><h3 id="cascader-props" tabindex="-1">Cascader Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中项</td><td><code>string[]</code> | <code>string[][]</code> (multiple)</td><td>-</td></tr><tr><td>defaultValue</td><td>默认的选中项</td><td><code>string[]</code> | <code>string[][]</code> (multiple)</td><td><code>[]</code></td></tr><tr><td>options</td><td>可选项数据源</td><td><code>CascaderOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>allowClear</td><td>是否支持清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>expandTrigger</td><td>次级菜单的展开方式</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>multiple</td><td>支持多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSearch</td><td>在选择框中显示搜索框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>changeOnSelect</td><td>当此项为 true 时，点选每级菜单选项值都会发生变化</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>displayRender</td><td>选择后展示的渲染函数</td><td><code>(labels: string[], selectedOptions?: CascaderOption[]) =&gt; string | VNode</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义 options 中 label value children 的字段</td><td><code>{ label?: string; value?: string; children?: string }</code></td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>open(v-model)</td><td>控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认展开浮层</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td><td><code>string</code></td><td><code>&#39;无匹配结果&#39;</code></td></tr><tr><td>loadData</td><td>用于动态加载选项</td><td><code>(selectedOptions: CascaderOption[]) =&gt; void</code></td><td>-</td></tr><tr><td>showCheckedStrategy</td><td>多选时的选中策略</td><td><code>&#39;SHOW_PARENT&#39; | &#39;SHOW_CHILD&#39;</code></td><td><code>&#39;SHOW_PARENT&#39;</code></td></tr><tr><td>maxTagCount</td><td>最多显示多少个 tag</td><td><code>number</code></td><td>-</td></tr><tr><td>maxTagPlaceholder</td><td>隐藏 tag 时显示的内容</td><td><code>string | ((omittedValues: string[][]) =&gt; string)</code></td><td>-</td></tr><tr><td>maxTagTextLength</td><td>最大显示的 tag 文本长度</td><td><code>number</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CascaderClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CascaderStyles</code></td><td>-</td></tr></tbody></table><h3 id="cascaderoption" tabindex="-1">CascaderOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>children</td><td>子选项</td><td><code>CascaderOption[]</code></td></tr><tr><td>isLeaf</td><td>标记是否为叶子节点，设置了 <code>loadData</code> 时有效</td><td><code>boolean</code></td></tr></tbody></table><h3 id="cascader-events" tabindex="-1">Cascader Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择完成后的回调</td><td><code>(value: string[] | string[][]) =&gt; void</code></td></tr><tr><td>update:open</td><td>浮层显隐变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>选择完成后的回调</td><td><code>(value: string[] | string[][], selectedOptions: CascaderOption[] | CascaderOption[][]) =&gt; void</code></td></tr><tr><td>search</td><td>输入框搜索时的回调</td><td><code>(searchText: string) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="cascader-methods" tabindex="-1">Cascader Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Cascader 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">CascaderClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选择器容器</span>
  selectionItem<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 已选项标签</span>
  selectionItemContent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 已选项内容</span>
  selectionItemRemove<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 已选项删除按钮</span>
  selectionPlaceholder<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 占位符</span>
  searchInput<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 搜索输入框</span>
  suffix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 后缀区域</span>
  clear<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 清除按钮</span>
  arrow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 箭头图标</span>
  dropdown<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 下拉弹层容器</span>
  menus<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 多列菜单容器</span>
  menu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 单列菜单</span>
  menuItem<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 菜单项</span>
  menuItemContent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 菜单项内容</span>
  menuItemCheckbox<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 菜单项复选框（多选模式）</span>
  menuItemExpandIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 菜单项展开图标</span>
  menuItemHighlight<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 搜索高亮文本</span>
  menuItemEmpty<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 空状态提示</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CascaderStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  selector<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  selectionItem<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  selectionItemContent<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  selectionItemRemove<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  selectionPlaceholder<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  searchInput<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  suffix<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  clear<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  arrow<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dropdown<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  menus<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  menu<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  menuItem<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  menuItemContent<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  menuItemCheckbox<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  menuItemExpandIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  menuItemHighlight<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  menuItemEmpty<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-selector<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.selector / styles.selector 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-selection-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.selectionItem / styles.selectionItem 应用于此（多选模式） --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-selection-item-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>浙江 / 杭州<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.selectionItemContent / styles.selectionItemContent 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-selection-item-remove<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.selectionItemRemove / styles.selectionItemRemove 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-selection-placeholder<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请选择<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.selectionPlaceholder / styles.selectionPlaceholder 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-search-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.searchInput / styles.searchInput 应用于此（搜索模式） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-suffix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.suffix / styles.suffix 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.clear / styles.clear 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-arrow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>▾<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.arrow / styles.arrow 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Teleport 到 body --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-dropdown<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.dropdown / styles.dropdown 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-menus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.menus / styles.menus 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-menu<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.menu / styles.menu 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-menu-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.menuItem / styles.menuItem 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-menu-item-checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>☑<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.menuItemCheckbox / styles.menuItemCheckbox 应用于此（多选） --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-menu-item-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>浙江<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.menuItemContent / styles.menuItemContent 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-menu-item-expand-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>›<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.menuItemExpandIcon / styles.menuItemExpandIcon 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-cascader-menu-item-empty<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>无匹配结果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.menuItemEmpty / styles.menuItemEmpty 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Cascader
    :options=&quot;cityOptions&quot;
    :class-names=&quot;{
      root: &#39;my-cascader-root&#39;,
      selector: &#39;my-selector&#39;,
      dropdown: &#39;my-dropdown&#39;,
      menuItem: &#39;my-menu-item&#39;,
    }&quot;
  /&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-cascader-root) {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
  border-radius: 8px;
}

:deep(.my-selector) {
  padding: 6px 12px;
}

:deep(.my-menu-item) {
  font-weight: 500;
}
&lt;/style&gt;

&lt;style&gt;
/* dropdown 通过 Teleport 渲染，必须使用 :global() */
:global(.my-dropdown) {
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Cascader
    :options=&quot;cityOptions&quot;
    :styles=&quot;{
      root: { borderRadius: &#39;20px&#39;, borderColor: &#39;#722ed1&#39; },
      selector: { padding: &#39;8px 16px&#39; },
      dropdown: { borderRadius: &#39;12px&#39;, boxShadow: &#39;0 6px 16px rgba(0, 0, 0, 0.12)&#39; },
      menuItem: { padding: &#39;10px 16px&#39; },
    }&quot;
  /&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>dropdown</code>、<code>menus</code>、<code>menu</code>、<code>menuItem</code> 等通过 <code>Teleport to=&quot;body&quot;</code> 渲染，样式必须使用 <code>:global()</code> 而非 <code>:deep()</code></li><li><code>clear</code> 仅在 <code>allowClear</code> 启用且有选中值时显示</li><li><code>selectionPlaceholder</code> 仅在无选中值时显示</li><li><code>selectionItem</code>、<code>selectionItemContent</code>、<code>selectionItemRemove</code> 在多选模式下对应每个标签</li><li><code>searchInput</code> 在 <code>showSearch</code> 启用时显示</li><li><code>menuItemCheckbox</code> 仅在多选模式下显示</li><li><code>menuItemExpandIcon</code> 在有子节点时显示</li><li><code>menuItemHighlight</code> 在搜索模式下用于高亮匹配文本</li><li><code>menuItemEmpty</code> 在搜索无结果时显示</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用背景色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-bg-text-hover</code></td><td>文本悬浮背景色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-border-secondary</code></td><td>次要边框颜色</td><td><code>#f0f0f0</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态颜色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-error-bg</code></td><td>错误背景色</td><td><code>#fff2f0</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次要填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题背景色</td><td><code>#e6f4ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本颜色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本颜色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-placeholder</code></td><td>占位符文本颜色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本颜色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态颜色</td><td><code>#faad14</code></td></tr></tbody></table>`,25))])}}};export{Pe as default};
