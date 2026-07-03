import{d as R,u as Rn,r as S,m as En,c as e,F as rn,g as N,a as z,o as E,b as Q,f as s,e as k,A as on,v as Hn,_ as xn,q as mn,h as _n,w as A,i as An}from"./index-DCNtHlH3.js";import{c as m}from"./cls-S9IiI6wd.js";import{D as Ln}from"./DownOutlined-NqsBDvU3.js";import{T as Dn}from"./Trigger-Dn9I4W9t.js";const j=R({name:"Cascader",inheritAttrs:!1,props:{value:[Array,Object],defaultValue:{type:[Array,Object],default:()=>[]},options:{type:Array,default:()=>[]},disabled:Boolean,placeholder:{type:String,default:"请选择"},allowClear:{type:Boolean,default:!0},size:{type:String,default:"middle"},status:{type:String,default:""},expandTrigger:{type:String,default:"click"},multiple:Boolean,showSearch:Boolean,changeOnSelect:Boolean,displayRender:Function,fieldNames:Object,open:{type:Boolean,default:void 0},defaultOpen:Boolean,notFoundContent:{type:String,default:"无匹配结果"},loadData:Function,showCheckedStrategy:{type:String,default:"SHOW_PARENT"},maxTagCount:Number,maxTagPlaceholder:[String,Function],maxTagTextLength:Number,classNames:Object,styles:Object},emits:["update:value","update:open","change","search","focus","blur","clear"],setup(n,{emit:c,attrs:y,expose:i}){const a=Rn("cascader"),r=z(()=>{var t;return((t=n.fieldNames)==null?void 0:t.label)??"label"}),P=z(()=>{var t;return((t=n.fieldNames)==null?void 0:t.value)??"value"}),Z=z(()=>{var t;return((t=n.fieldNames)==null?void 0:t.children)??"children"}),v=t=>t[r.value],I=t=>t[P.value],B=t=>t[Z.value],ln=t=>t?n.multiple?Array.isArray(t)&&t.length>0&&Array.isArray(t[0])?t:[]:Array.isArray(t)&&t.length>0&&!Array.isArray(t[0])?[t]:[]:[],T=S(ln(n.defaultValue??n.value)),cn=S(n.defaultOpen??!1),H=S([]),O=S(""),wn=S(),nn=S(),Cn=z(()=>n.value!==void 0),w=z(()=>Cn.value?ln(n.value):T.value),W=z(()=>n.open!==void 0?n.open:cn.value);En(()=>n.value,t=>{t!==void 0&&(T.value=ln(t))});const _=(t,o)=>{const l=[];let p=o;for(const u of t){const d=p.find(h=>I(h)===u);if(!d)break;l.push(d),p=B(d)??[]}return l},pn=(t,o)=>_(t,o).map(v),L=z(()=>{if(!n.multiple)return w.value;const t=w.value;return!n.showCheckedStrategy||t.length===0?t:n.showCheckedStrategy==="SHOW_CHILD"?t.filter(o=>!t.some(p=>p.length>o.length&&o.every((u,d)=>u===p[d]))):n.showCheckedStrategy==="SHOW_PARENT"?t.filter(o=>!t.some(p=>p.length<o.length&&p.every((u,d)=>u===o[d]))):t}),gn=(t,o)=>{var C,b;if(!o)return[t];const l=t.toLowerCase(),p=o.toLowerCase(),u=l.indexOf(p);if(u===-1)return[t];const d=t.slice(0,u),h=t.slice(u,u+o.length),g=t.slice(u+o.length),f=[];return d&&f.push(d),f.push(e("span",{class:m(`${a}-menu-item-highlight`,(C=n.classNames)==null?void 0:C.menuItemHighlight),style:(b=n.styles)==null?void 0:b.menuItemHighlight},[h])),g&&f.push(...gn(g,o)),f},an=z(()=>{if(n.multiple){const t=L.value;if(t.length===0)return"";const o=pn(t[0],n.options),l=_(t[0],n.options);return n.displayRender?n.displayRender(o,l):o.join(" / ")}else{if(w.value.length===0)return"";const t=pn(w.value[0],n.options),o=_(w.value[0],n.options);return n.displayRender?n.displayRender(t,o):t.join(" / ")}}),Sn=z(()=>{const t=[n.options];let o=n.options;for(const l of H.value){const p=o.find(d=>I(d)===l);if(!p)break;const u=B(p);if(u!=null&&u.length)t.push(u),o=u;else break}return t}),In=z(()=>{const t=[],o=(l,p,u,d)=>{for(const h of l){const g=[...p,v(h)],f=[...u,I(h)],C=[...d,h],b=B(h);b!=null&&b.length&&!h.isLeaf?o(b,g,f,C):t.push({labels:g,values:f,options:C})}};return o(n.options,[],[],[]),t}),un=z(()=>{if(!O.value)return null;const t=O.value.toLowerCase();return In.value.filter(o=>o.labels.some(l=>l.toLowerCase().includes(t)))}),Nn=()=>{n.disabled||(!n.multiple&&w.value.length>0&&(H.value=[...w.value[0]]),cn.value=!0,c("update:open",!0))},dn=()=>{cn.value=!1,O.value="",c("update:open",!1)},D=t=>{const o=n.multiple?t:t[0]??[],l=n.multiple?t.map(p=>_(p,n.options)):_(t[0]??[],n.options);c("update:value",o),c("change",o,l)},jn=(t,o)=>{if(t.disabled)return;const l=[...H.value.slice(0,o),I(t)];H.value=l;const p=B(t),u=!(p!=null&&p.length)||t.isLeaf;if(n.loadData&&!u&&!(p!=null&&p.length)){const d=_(l,n.options);n.loadData(d);return}if(n.multiple){if(u||n.changeOnSelect){const d=[...w.value],h=d.findIndex(g=>g.length===l.length&&g.every((f,C)=>f===l[C]));h>=0?d.splice(h,1):d.push(l),T.value=d,D(d)}}else(u||n.changeOnSelect)&&(T.value=[l],D([l]),u&&dn())},qn=(t,o)=>{if(n.expandTrigger!=="hover"||t.disabled)return;const l=[...H.value.slice(0,o),I(t)];H.value=l},On=(t,o)=>{if(n.multiple){const l=[...w.value,t];T.value=l,D(l)}else T.value=[t],D([t]),dn()},zn=t=>{t.stopPropagation(),T.value=[],D([]),c("clear")},Pn=(t,o)=>{o.stopPropagation();const l=w.value.filter(p=>!(p.length===t.length&&p.every((u,d)=>u===t[d])));T.value=l,D(l)};i({focus:()=>{var t;return(t=nn.value)==null?void 0:t.focus()},blur:()=>{var t;return(t=nn.value)==null?void 0:t.blur()}});const Tn=()=>{var t,o,l,p,u,d;return e(rn,null,[un.value?e("div",{class:m(`${a}-menu`,`${a}-menu-search`,(t=n.classNames)==null?void 0:t.menu),style:(o=n.styles)==null?void 0:o.menu},[un.value.length===0?e("div",{class:m(`${a}-menu-item-empty`,(l=n.classNames)==null?void 0:l.menuItemEmpty),style:(p=n.styles)==null?void 0:p.menuItemEmpty},[n.notFoundContent]):un.value.map((h,g)=>{var f,C;return e("div",{key:g,class:m(`${a}-menu-item`,(f=n.classNames)==null?void 0:f.menuItem),style:(C=n.styles)==null?void 0:C.menuItem,onMousedown:b=>{b.preventDefault(),On(h.values,h.options)}},[gn(h.labels.join(" / "),O.value)])})]):e("div",{class:m(`${a}-menus`,(u=n.classNames)==null?void 0:u.menus),style:(d=n.styles)==null?void 0:d.menus},[Sn.value.map((h,g)=>{var f,C;return e("ul",{key:g,class:m(`${a}-menu`,(f=n.classNames)==null?void 0:f.menu),style:(C=n.styles)==null?void 0:C.menu},[h.map(b=>{var U,M,J,K,X,Y,x,G,sn;const $=I(b),V=B(b),F=!!(V!=null&&V.length)&&!b.isLeaf,tn=H.value[g]===$,en=n.multiple?w.value.some(q=>q[g]===$&&q.length>g):((U=w.value[0])==null?void 0:U[g])===$;return e("li",{key:$,class:m(`${a}-menu-item`,{[`${a}-menu-item-active`]:tn,[`${a}-menu-item-selected`]:en,[`${a}-menu-item-disabled`]:b.disabled,[`${a}-menu-item-expand`]:F},(M=n.classNames)==null?void 0:M.menuItem),style:(J=n.styles)==null?void 0:J.menuItem,onClick:()=>jn(b,g),onMouseenter:()=>qn(b,g)},[n.multiple&&e("span",{class:m(`${a}-menu-item-checkbox`,(K=n.classNames)==null?void 0:K.menuItemCheckbox),style:(X=n.styles)==null?void 0:X.menuItemCheckbox},[w.value.some(q=>q.length===g+1&&q[g]===$)&&"✓"]),e("span",{class:m(`${a}-menu-item-content`,(Y=n.classNames)==null?void 0:Y.menuItemContent),style:(x=n.styles)==null?void 0:x.menuItemContent},[v(b)]),F&&e("span",{class:m(`${a}-menu-item-expand-icon`,(G=n.classNames)==null?void 0:G.menuItemExpandIcon),style:(sn=n.styles)==null?void 0:sn.menuItemExpandIcon},[N("›")])])})])})])])};return()=>{var t,o;return e(Dn,{open:W.value,trigger:"click",placement:"bottomLeft",disabled:n.disabled,destroyOnHidden:!0,popupClass:m(`${a}-dropdown`,(t=n.classNames)==null?void 0:t.dropdown),popupStyle:(o=n.styles)==null?void 0:o.dropdown,onOpenChange:l=>{l?Nn():dn()}},{default:()=>{var l,p,u,d,h,g,f,C,b,$,V,F,tn,en,U,M,J,K,X,Y;return e("div",{ref:wn,class:m(a,`${a}-${n.size}`,{[`${a}-open`]:W.value,[`${a}-disabled`]:n.disabled,[`${a}-multiple`]:n.multiple,[`${a}-status-error`]:n.status==="error",[`${a}-status-warning`]:n.status==="warning"},(l=n.classNames)==null?void 0:l.root,y.class),style:{...(p=n.styles)==null?void 0:p.root,...y.style}},[e("span",{class:m(`${a}-selector`,(u=n.classNames)==null?void 0:u.selector),style:(d=n.styles)==null?void 0:d.selector},[n.multiple?e(rn,null,[L.value.slice(0,n.maxTagCount??L.value.length).map(x=>{var hn,kn,vn,bn,fn,yn;const G=pn(x,n.options),sn=_(x,n.options);let q;return n.displayRender?q=n.displayRender(G,sn):q=G.join(" / "),typeof q=="string"&&n.maxTagTextLength&&q.length>n.maxTagTextLength&&(q=q.slice(0,n.maxTagTextLength)+"..."),e("span",{key:x.join("-"),class:m(`${a}-selection-item`,(hn=n.classNames)==null?void 0:hn.selectionItem),style:(kn=n.styles)==null?void 0:kn.selectionItem},[e("span",{class:m(`${a}-selection-item-content`,(vn=n.classNames)==null?void 0:vn.selectionItemContent),style:(bn=n.styles)==null?void 0:bn.selectionItemContent},[q]),!n.disabled&&e("span",{class:m(`${a}-selection-item-remove`,(fn=n.classNames)==null?void 0:fn.selectionItemRemove),style:(yn=n.styles)==null?void 0:yn.selectionItemRemove,onClick:$n=>Pn(x,$n)},[N("×")])])}),n.maxTagCount&&L.value.length>n.maxTagCount&&e("span",{class:m(`${a}-selection-item`,(h=n.classNames)==null?void 0:h.selectionItem),style:(g=n.styles)==null?void 0:g.selectionItem},[typeof n.maxTagPlaceholder=="function"?n.maxTagPlaceholder(L.value.slice(n.maxTagCount)):n.maxTagPlaceholder??`+${L.value.length-n.maxTagCount}`]),n.showSearch&&W.value&&e("input",{ref:nn,class:m(`${a}-search-input`,(f=n.classNames)==null?void 0:f.searchInput),style:(C=n.styles)==null?void 0:C.searchInput,value:O.value,placeholder:w.value.length===0?n.placeholder:"",onInput:x=>{O.value=x.target.value,c("search",O.value)},onClick:x=>x.stopPropagation(),autofocus:!0},null),w.value.length===0&&!O.value&&e("span",{class:m(`${a}-selection-placeholder`,(b=n.classNames)==null?void 0:b.selectionPlaceholder),style:($=n.styles)==null?void 0:$.selectionPlaceholder},[n.placeholder])]):e(rn,null,[n.showSearch&&W.value?e("input",{ref:nn,class:m(`${a}-search-input`,(V=n.classNames)==null?void 0:V.searchInput),style:(F=n.styles)==null?void 0:F.searchInput,value:O.value,placeholder:typeof an.value=="string"&&an.value||n.placeholder,onInput:x=>{O.value=x.target.value,c("search",O.value)},onClick:x=>x.stopPropagation(),autofocus:!0},null):e("span",{class:m(`${a}-selection-item`,{[`${a}-selection-placeholder`]:!an.value},(tn=n.classNames)==null?void 0:tn.selectionItem),style:(en=n.styles)==null?void 0:en.selectionItem},[an.value||n.placeholder])])]),e("span",{class:m(`${a}-suffix`,(U=n.classNames)==null?void 0:U.suffix),style:(M=n.styles)==null?void 0:M.suffix},[n.allowClear&&w.value.length>0&&!n.disabled?e("span",{class:m(`${a}-clear`,(J=n.classNames)==null?void 0:J.clear),style:(K=n.styles)==null?void 0:K.clear,onMousedown:zn,onClick:x=>x.stopPropagation()},[N("✕")]):e(Ln,{class:m(`${a}-arrow`,{[`${a}-arrow-open`]:W.value},(X=n.classNames)==null?void 0:X.arrow),style:(Y=n.styles)==null?void 0:Y.arrow},null)])])},popup:({placement:l})=>Tn()})}}}),Vn={class:"demo-cascader"},Bn={style:{"margin-top":"8px",color:"#666"}},Wn={style:{"margin-top":"8px",color:"#666"}},Fn=R({__name:"CascaderAdvanced",setup(n){const c=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖"},{value:"binjiang",label:"滨江"}]},{value:"ningbo",label:"宁波"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京"},{value:"suzhou",label:"苏州"}]}],y=S([]),i=S([["zhejiang"],["zhejiang","hangzhou"],["zhejiang","hangzhou","xihu"],["jiangsu","nanjing"]]),a=S([["zhejiang"],["zhejiang","hangzhou"],["zhejiang","hangzhou","xihu"],["jiangsu","nanjing"]]),r=S(["zhejiang","hangzhou","xihu"]),P=Z=>Hn("span",{style:"color: #1677ff; font-weight: 600;"},Z.join(" → "));return(Z,v)=>(E(),Q("div",Vn,[v[4]||(v[4]=s("h3",null,"搜索高亮",-1)),e(k(j),{value:y.value,"onUpdate:value":v[0]||(v[0]=I=>y.value=I),options:c,"show-search":"",placeholder:"搜索城市（高亮显示匹配结果）",style:{width:"300px"}},null,8,["value"]),v[5]||(v[5]=s("h3",{style:{"margin-top":"24px"}},"showCheckedStrategy - SHOW_PARENT",-1)),e(k(j),{value:i.value,"onUpdate:value":v[1]||(v[1]=I=>i.value=I),options:c,multiple:"","show-checked-strategy":"SHOW_PARENT",placeholder:"只显示父节点",style:{width:"400px"}},null,8,["value"]),s("div",Bn,"当前选择: "+on(JSON.stringify(i.value)),1),v[6]||(v[6]=s("h3",{style:{"margin-top":"24px"}},"showCheckedStrategy - SHOW_CHILD",-1)),e(k(j),{value:a.value,"onUpdate:value":v[2]||(v[2]=I=>a.value=I),options:c,multiple:"","show-checked-strategy":"SHOW_CHILD",placeholder:"只显示子节点",style:{width:"400px"}},null,8,["value"]),s("div",Wn,"当前选择: "+on(JSON.stringify(a.value)),1),v[7]||(v[7]=s("h3",{style:{"margin-top":"24px"}},"自定义 displayRender (VNode)",-1)),e(k(j),{value:r.value,"onUpdate:value":v[3]||(v[3]=I=>r.value=I),options:c,"display-render":P,placeholder:"自定义渲染",style:{width:"300px"}},null,8,["value"])]))}}),Un=xn(Fn,[["__scopeId","data-v-8c996b82"]]),Mn=`<template>
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
import { Cascader } from '@hmfw/ant-design'

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
`,Jn=R({__name:"CascaderBasic",setup(n){const c=S([]),y=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]},{value:"ningbo",label:"宁波",children:[{value:"haishu",label:"海曙区"},{value:"jiangbei",label:"江北区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"},{value:"qinhuai",label:"秦淮区"}]}]}];return(i,a)=>(E(),mn(k(j),{value:c.value,"onUpdate:value":a[0]||(a[0]=r=>c.value=r),options:y,placeholder:"请选择省市区",style:{width:"300px"}},null,8,["value"]))}}),Kn=`<template>
  <Cascader v-model:value="value" :options="options" placeholder="请选择省市区" style="width: 300px" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from '@hmfw/ant-design'

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
`,Xn={style:{"margin-top":"8px"}},Yn=R({__name:"CascaderChangeOnSelect",setup(n){const c=S([]),y=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"}]}]}],i=a=>{console.log("选中值：",a)};return(a,r)=>(E(),Q("div",null,[e(k(j),{value:c.value,"onUpdate:value":r[0]||(r[0]=P=>c.value=P),options:y,"change-on-select":!0,placeholder:"选择即改变",style:{width:"300px"},onChange:i},null,8,["value"]),s("p",Xn,"当前值："+on(c.value),1)]))}}),Gn=`<template>
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
import { Cascader } from '@hmfw/ant-design'

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
`,Qn={style:{display:"flex","flex-direction":"column",gap:"32px"}},Zn=R({__name:"CascaderClassNames",setup(n){const c=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州"},{value:"ningbo",label:"宁波"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京"},{value:"suzhou",label:"苏州"}]},{value:"guangdong",label:"广东",children:[{value:"guangzhou",label:"广州"},{value:"shenzhen",label:"深圳"}]}];return(y,i)=>(E(),Q("div",Qn,[s("div",null,[i[0]||(i[0]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义选择器样式：",-1)),e(k(j),{options:c,placeholder:"请选择城市","class-names":{root:"custom-cascader-root",selector:"custom-selector",arrow:"custom-arrow"}})]),s("div",null,[i[1]||(i[1]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义下拉面板与菜单项：",-1)),e(k(j),{options:c,placeholder:"请选择城市","class-names":{dropdown:"custom-dropdown",menu:"custom-menu",menuItem:"custom-menu-item",menuItemContent:"custom-menu-item-content"}})]),s("div",null,[i[2]||(i[2]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"多选模式自定义标签：",-1)),e(k(j),{multiple:"",options:c,placeholder:"请选择多个城市","default-value":[["zhejiang","hangzhou"],["jiangsu","nanjing"]],"class-names":{selectionItem:"custom-tag",selectionItemContent:"custom-tag-content",selectionItemRemove:"custom-tag-remove"}})]),s("div",null,[i[3]||(i[3]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"搜索高亮自定义：",-1)),e(k(j),{"show-search":"",options:c,placeholder:"搜索城市","class-names":{searchInput:"custom-search-input",menuItemHighlight:"custom-highlight"}})]),s("div",null,[i[4]||(i[4]=s("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式：",-1)),e(k(j),{options:c,placeholder:"请选择城市",styles:{root:{borderRadius:"20px",borderColor:"#722ed1"},selector:{padding:"8px 16px"},dropdown:{borderRadius:"12px",boxShadow:"0 6px 16px rgba(0, 0, 0, 0.12)"},menuItem:{padding:"10px 16px"}}})])]))}}),na=xn(Zn,[["__scopeId","data-v-93017861"]]),aa=`<template>
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
import { Cascader } from '@hmfw/ant-design'

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
`,ta=R({__name:"CascaderHover",setup(n){const c=S([]),y=[{value:"frontend",label:"前端",children:[{value:"framework",label:"框架",children:[{value:"vue",label:"Vue"},{value:"react",label:"React"}]},{value:"language",label:"语言",children:[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"}]}]},{value:"backend",label:"后端",children:[{value:"node",label:"Node.js",children:[{value:"express",label:"Express"},{value:"koa",label:"Koa"}]}]}];return(i,a)=>(E(),mn(k(j),{value:c.value,"onUpdate:value":a[0]||(a[0]=r=>c.value=r),options:y,"expand-trigger":"hover",placeholder:"鼠标悬停展开",style:{width:"300px"}},null,8,["value"]))}}),ea=`<template>
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
import { Cascader } from '@hmfw/ant-design'

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
`,sa={style:{"margin-top":"8px"}},oa=R({__name:"CascaderMultiple",setup(n){const c=S([]),y=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]},{value:"ningbo",label:"宁波",children:[{value:"haishu",label:"海曙区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"}]}]}],i=(a,r)=>{console.log("选中值：",a,r)};return(a,r)=>(E(),Q("div",null,[e(k(j),{value:c.value,"onUpdate:value":r[0]||(r[0]=P=>c.value=P),options:y,multiple:!0,placeholder:"支持多选",style:{width:"300px"},onChange:i},null,8,["value"]),s("p",sa,"当前值："+on(c.value),1)]))}}),la=`<template>
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
import { Cascader } from '@hmfw/ant-design'

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
`,ca=R({__name:"CascaderSearch",setup(n){const c=S([]),y=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"}]}]}],i=a=>{console.log("搜索：",a)};return(a,r)=>(E(),mn(k(j),{value:c.value,"onUpdate:value":r[0]||(r[0]=P=>c.value=P),options:y,"show-search":!0,placeholder:"请搜索并选择",style:{width:"300px"},onSearch:i},null,8,["value"]))}}),pa=`<template>
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
import { Cascader } from '@hmfw/ant-design'

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
`,ua={class:"markdown-body"},ga={__name:"cascader",setup(n,{expose:c}){return c({frontmatter:{}}),(i,a)=>{const r=_n("DemoBlock");return E(),Q("div",ua,[a[0]||(a[0]=s("h1",{id:"cascader-级联选择",tabindex:"-1"},"Cascader 级联选择",-1)),a[1]||(a[1]=s("p",null,"级联选择框。",-1)),a[2]||(a[2]=s("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=s("ul",null,[s("li",null,"需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。"),s("li",null,"从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。"),s("li",null,"比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。")],-1)),a[4]||(a[4]=s("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=s("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),a[6]||(a[6]=s("p",null,"省市区级联。",-1)),e(r,{title:"基础用法",source:k(Kn)},{default:A(()=>[e(Jn)]),_:1},8,["source"]),a[7]||(a[7]=s("h3",{id:"hover-展开",tabindex:"-1"},"Hover 展开",-1)),a[8]||(a[8]=s("p",null,[N("通过 "),s("code",null,"expandTrigger"),N(" 设置为 "),s("code",null,"hover"),N(" 时，鼠标移入即展开下级菜单。")],-1)),e(r,{title:"Hover 展开",source:k(ea)},{default:A(()=>[e(ta)]),_:1},8,["source"]),a[9]||(a[9]=s("h3",{id:"可搜索",tabindex:"-1"},"可搜索",-1)),a[10]||(a[10]=s("p",null,"可以直接搜索选项并选择。",-1)),e(r,{title:"可搜索",source:k(pa)},{default:A(()=>[e(ca)]),_:1},8,["source"]),a[11]||(a[11]=s("h3",{id:"选择即改变",tabindex:"-1"},"选择即改变",-1)),a[12]||(a[12]=s("p",null,[N("当 "),s("code",null,"changeOnSelect"),N(" 为 "),s("code",null,"true"),N(" 时，点选每级菜单选项值都会发生变化。")],-1)),e(r,{title:"选择即改变",source:k(Gn)},{default:A(()=>[e(Yn)]),_:1},8,["source"]),a[13]||(a[13]=s("h3",{id:"多选",tabindex:"-1"},"多选",-1)),a[14]||(a[14]=s("p",null,[N("通过 "),s("code",null,"multiple"),N(" 属性开启多选模式。")],-1)),e(r,{title:"多选",source:k(la)},{default:A(()=>[e(oa)]),_:1},8,["source"]),a[15]||(a[15]=s("h3",{id:"高级功能",tabindex:"-1"},"高级功能",-1)),a[16]||(a[16]=s("p",null,"展示搜索高亮、showCheckedStrategy 和自定义 displayRender（支持 VNode）。",-1)),e(r,{title:"高级功能",source:k(Mn)},{default:A(()=>[e(Un)]),_:1},8,["source"]),a[17]||(a[17]=s("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[18]||(a[18]=s("p",null,[N("通过 "),s("code",null,"classNames"),N(" / "),s("code",null,"styles"),N(" 对各子元素做细粒度样式控制。")],-1)),e(r,{title:"语义化 className 与 style",source:k(aa)},{default:A(()=>[e(na)]),_:1},8,["source"]),a[19]||(a[19]=An(`<h2 id="api" tabindex="-1">API</h2><h3 id="cascader-props" tabindex="-1">Cascader Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中项</td><td><code>string[]</code> | <code>string[][]</code> (multiple)</td><td>-</td></tr><tr><td>defaultValue</td><td>默认的选中项</td><td><code>string[]</code> | <code>string[][]</code> (multiple)</td><td><code>[]</code></td></tr><tr><td>options</td><td>可选项数据源</td><td><code>CascaderOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>allowClear</td><td>是否支持清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>expandTrigger</td><td>次级菜单的展开方式</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>multiple</td><td>支持多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSearch</td><td>在选择框中显示搜索框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>changeOnSelect</td><td>当此项为 true 时，点选每级菜单选项值都会发生变化</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>displayRender</td><td>选择后展示的渲染函数</td><td><code>(labels: string[], selectedOptions?: CascaderOption[]) =&gt; string | VNode</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义 options 中 label value children 的字段</td><td><code>{ label?: string; value?: string; children?: string }</code></td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>open(v-model)</td><td>控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认展开浮层</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td><td><code>string</code></td><td><code>&#39;无匹配结果&#39;</code></td></tr><tr><td>loadData</td><td>用于动态加载选项</td><td><code>(selectedOptions: CascaderOption[]) =&gt; void</code></td><td>-</td></tr><tr><td>showCheckedStrategy</td><td>多选时的选中策略</td><td><code>&#39;SHOW_PARENT&#39; | &#39;SHOW_CHILD&#39;</code></td><td><code>&#39;SHOW_PARENT&#39;</code></td></tr><tr><td>maxTagCount</td><td>最多显示多少个 tag</td><td><code>number</code></td><td>-</td></tr><tr><td>maxTagPlaceholder</td><td>隐藏 tag 时显示的内容</td><td><code>string | ((omittedValues: string[][]) =&gt; string)</code></td><td>-</td></tr><tr><td>maxTagTextLength</td><td>最大显示的 tag 文本长度</td><td><code>number</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CascaderClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CascaderStyles</code></td><td>-</td></tr></tbody></table><h3 id="cascaderoption" tabindex="-1">CascaderOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>children</td><td>子选项</td><td><code>CascaderOption[]</code></td></tr><tr><td>isLeaf</td><td>标记是否为叶子节点，设置了 <code>loadData</code> 时有效</td><td><code>boolean</code></td></tr></tbody></table><h3 id="cascader-events" tabindex="-1">Cascader Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择完成后的回调</td><td><code>(value: string[] | string[][]) =&gt; void</code></td></tr><tr><td>update:open</td><td>浮层显隐变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>选择完成后的回调</td><td><code>(value: string[] | string[][], selectedOptions: CascaderOption[] | CascaderOption[][]) =&gt; void</code></td></tr><tr><td>search</td><td>输入框搜索时的回调</td><td><code>(searchText: string) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="cascader-methods" tabindex="-1">Cascader Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对 Cascader 的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cityOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-cascader-root&#39;,
      selector: &#39;my-selector&#39;,
      dropdown: &#39;my-dropdown&#39;,
      menuItem: &#39;my-menu-item&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-cascader-root)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px solid transparent<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>white<span class="token punctuation">,</span> white<span class="token punctuation">)</span> padding-box<span class="token punctuation">,</span>
    <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> #667eea 0%<span class="token punctuation">,</span> #764ba2 100%<span class="token punctuation">)</span> border-box<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-selector)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-menu-item)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">/* dropdown 通过 Teleport 渲染，必须使用 :global() */</span>
<span class="token selector">:global(.my-dropdown)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 8px 24px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cityOptions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { borderRadius: &#39;20px&#39;, borderColor: &#39;#722ed1&#39; },
      selector: { padding: &#39;8px 16px&#39; },
      dropdown: { borderRadius: &#39;12px&#39;, boxShadow: &#39;0 6px 16px rgba(0, 0, 0, 0.12)&#39; },
      menuItem: { padding: &#39;10px 16px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>dropdown</code>、<code>menus</code>、<code>menu</code>、<code>menuItem</code> 等通过 <code>Teleport to=&quot;body&quot;</code> 渲染，样式必须使用 <code>:global()</code> 而非 <code>:deep()</code></li><li><code>clear</code> 仅在 <code>allowClear</code> 启用且有选中值时显示</li><li><code>selectionPlaceholder</code> 仅在无选中值时显示</li><li><code>selectionItem</code>、<code>selectionItemContent</code>、<code>selectionItemRemove</code> 在多选模式下对应每个标签</li><li><code>searchInput</code> 在 <code>showSearch</code> 启用时显示</li><li><code>menuItemCheckbox</code> 仅在多选模式下显示</li><li><code>menuItemExpandIcon</code> 在有子节点时显示</li><li><code>menuItemHighlight</code> 在搜索模式下用于高亮匹配文本</li><li><code>menuItemEmpty</code> 在搜索无结果时显示</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-border-radius</code></td><td>基础圆角</td><td><code>6px</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用背景色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-color-bg-text-hover</code></td><td>文本悬浮背景色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框颜色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-border-secondary</code></td><td>次要边框颜色</td><td><code>#f0f0f0</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态颜色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-error-bg</code></td><td>错误背景色</td><td><code>#fff2f0</code></td></tr><tr><td><code>--hmfw-color-fill-secondary</code></td><td>次要填充色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题背景色</td><td><code>#e6f4ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本颜色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本颜色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-placeholder</code></td><td>占位符文本颜色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次要文本颜色</td><td><code>rgba(0,0,0,0.65)</code></td></tr><tr><td><code>--hmfw-color-warning</code></td><td>警告状态颜色</td><td><code>#faad14</code></td></tr></tbody></table>`,25))])}}};export{ga as default};
