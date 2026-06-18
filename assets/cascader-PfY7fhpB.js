import{o as P,N as ve,E as v,Q as ge,x as pe,y as me,n as d,F as G,m as C,T as be,f as S,A as N,k as M,h as s,K as m,J,p as fe,_ as xe,i as Z,H as ye,R as H,l as Ce}from"./index-GV1C9GBE.js";import{c as U}from"./cls-S9IiI6wd.js";const $=P({name:"Cascader",inheritAttrs:!1,props:{value:[Array,Object],defaultValue:{type:[Array,Object],default:()=>[]},options:{type:Array,default:()=>[]},disabled:Boolean,placeholder:{type:String,default:"请选择"},allowClear:{type:Boolean,default:!0},size:{type:String,default:"middle"},status:{type:String,default:""},expandTrigger:{type:String,default:"click"},multiple:Boolean,showSearch:Boolean,changeOnSelect:Boolean,displayRender:Function,fieldNames:Object,open:{type:Boolean,default:void 0},defaultOpen:Boolean,notFoundContent:{type:String,default:"无匹配结果"},loadData:Function,showCheckedStrategy:{type:String,default:"SHOW_PARENT"},maxTagCount:Number,maxTagPlaceholder:[String,Function],maxTagTextLength:Number},emits:["update:value","update:open","change","search","focus","blur","clear"],setup(t,{emit:i,attrs:g,expose:b}){const n=ve("cascader"),c=S(()=>{var e;return((e=t.fieldNames)==null?void 0:e.label)??"label"}),z=S(()=>{var e;return((e=t.fieldNames)==null?void 0:e.value)??"value"}),B=S(()=>{var e;return((e=t.fieldNames)==null?void 0:e.children)??"children"}),h=e=>e[c.value],f=e=>e[z.value],L=e=>e[B.value],I=e=>e?t.multiple?Array.isArray(e)&&e.length>0&&Array.isArray(e[0])?e:[]:Array.isArray(e)&&e.length>0&&!Array.isArray(e[0])?[e]:[]:[],T=v(I(t.defaultValue??t.value)),K=v(t.defaultOpen??!1),k=v([]),w=v(""),D=v(),ee=v(),q=v({top:0,left:0,width:0}),E=v(),le=S(()=>t.value!==void 0),p=S(()=>le.value?I(t.value):T.value),V=S(()=>t.open!==void 0?t.open:K.value);ge(()=>t.value,e=>{e!==void 0&&(T.value=I(e))});const _=(e,l)=>{const a=[];let o=l;for(const u of e){const r=o.find(x=>f(x)===u);if(!r)break;a.push(r),o=L(r)??[]}return a},Q=(e,l)=>_(e,l).map(h),R=S(()=>{if(!t.multiple)return p.value;const e=p.value;return!t.showCheckedStrategy||e.length===0?e:t.showCheckedStrategy==="SHOW_CHILD"?e.filter(l=>!e.some(o=>o.length>l.length&&l.every((u,r)=>u===o[r]))):t.showCheckedStrategy==="SHOW_PARENT"?e.filter(l=>!e.some(o=>o.length<l.length&&o.every((u,r)=>u===l[r]))):e}),ne=(e,l)=>{if(!l)return[e];const a=e.toLowerCase(),o=l.toLowerCase(),u=a.indexOf(o);if(u===-1)return[e];const r=e.slice(0,u),x=e.slice(u,u+l.length),j=e.slice(u+l.length),y=[];return r&&y.push(r),y.push(d("span",{class:`${n}-menu-item-highlight`},[x])),j&&y.push(...ne(j,l)),y},W=S(()=>{if(t.multiple){const e=R.value;if(e.length===0)return"";const l=Q(e[0],t.options),a=_(e[0],t.options);return t.displayRender?t.displayRender(l,a):l.join(" / ")}else{if(p.value.length===0)return"";const e=Q(p.value[0],t.options),l=_(p.value[0],t.options);return t.displayRender?t.displayRender(e,l):e.join(" / ")}}),ae=S(()=>{const e=[t.options];let l=t.options;for(const a of k.value){const o=l.find(r=>f(r)===a);if(!o)break;const u=L(o);if(u!=null&&u.length)e.push(u),l=u;else break}return e}),de=S(()=>{const e=[],l=(a,o,u,r)=>{for(const x of a){const j=[...o,h(x)],y=[...u,f(x)],O=[...r,x],F=L(x);F!=null&&F.length&&!x.isLeaf?l(F,j,y,O):e.push({labels:j,values:y,options:O})}};return l(t.options,[],[],[]),e}),X=S(()=>{if(!w.value)return null;const e=w.value.toLowerCase();return de.value.filter(l=>l.labels.some(a=>a.toLowerCase().includes(e)))}),oe=()=>{if(!D.value)return;const e=D.value.getBoundingClientRect();q.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width}},se=()=>{t.disabled||(oe(),!t.multiple&&p.value.length>0&&(k.value=[...p.value[0]]),K.value=!0,i("update:open",!0))},Y=()=>{K.value=!1,w.value="",i("update:open",!1)},te=e=>{var l,a;!((l=D.value)!=null&&l.contains(e.target))&&!((a=ee.value)!=null&&a.contains(e.target))&&Y()};pe(()=>document.addEventListener("mousedown",te)),me(()=>document.removeEventListener("mousedown",te));const A=e=>{const l=t.multiple?e:e[0]??[],a=t.multiple?e.map(o=>_(o,t.options)):_(e[0]??[],t.options);i("update:value",l),i("change",l,a)},ue=(e,l)=>{if(e.disabled)return;const a=[...k.value.slice(0,l),f(e)];k.value=a;const o=L(e),u=!(o!=null&&o.length)||e.isLeaf;if(t.loadData&&!u&&!(o!=null&&o.length)){const r=_(a,t.options);t.loadData(r);return}if(t.multiple){if(u||t.changeOnSelect){const r=[...p.value],x=r.findIndex(j=>j.length===a.length&&j.every((y,O)=>y===a[O]));x>=0?r.splice(x,1):r.push(a),T.value=r,A(r)}}else(u||t.changeOnSelect)&&(T.value=[a],A([a]),u&&Y())},ie=(e,l)=>{if(t.expandTrigger!=="hover"||e.disabled)return;const a=[...k.value.slice(0,l),f(e)];k.value=a},re=(e,l)=>{if(t.multiple){const a=[...p.value,e];T.value=a,A(a)}else T.value=[e],A([e]),Y()},ce=e=>{e.stopPropagation(),T.value=[],A([]),i("clear")},he=(e,l)=>{l.stopPropagation();const a=p.value.filter(o=>!(o.length===e.length&&o.every((u,r)=>u===e[r])));T.value=a,A(a)};return b({focus:()=>{var e;return(e=E.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=E.value)==null?void 0:e.blur()}}),()=>d(G,null,[d("div",{ref:D,class:U(n,`${n}-${t.size}`,{[`${n}-open`]:V.value,[`${n}-disabled`]:t.disabled,[`${n}-multiple`]:t.multiple,[`${n}-status-error`]:t.status==="error",[`${n}-status-warning`]:t.status==="warning"},g.class),style:g.style,onClick:se},[d("span",{class:`${n}-selector`},[t.multiple?d(G,null,[R.value.slice(0,t.maxTagCount??R.value.length).map(e=>{const l=Q(e,t.options),a=_(e,t.options);let o;return t.displayRender?o=t.displayRender(l,a):o=l.join(" / "),typeof o=="string"&&t.maxTagTextLength&&o.length>t.maxTagTextLength&&(o=o.slice(0,t.maxTagTextLength)+"..."),d("span",{key:e.join("-"),class:`${n}-selection-item`},[d("span",{class:`${n}-selection-item-content`},[o]),!t.disabled&&d("span",{class:`${n}-selection-item-remove`,onClick:u=>he(e,u)},[C("×")])])}),t.maxTagCount&&R.value.length>t.maxTagCount&&d("span",{class:`${n}-selection-item`},[typeof t.maxTagPlaceholder=="function"?t.maxTagPlaceholder(R.value.slice(t.maxTagCount)):t.maxTagPlaceholder??`+${R.value.length-t.maxTagCount}`]),t.showSearch&&V.value&&d("input",{ref:E,class:`${n}-search-input`,value:w.value,placeholder:p.value.length===0?t.placeholder:"",onInput:e=>{w.value=e.target.value,i("search",w.value)},onClick:e=>e.stopPropagation(),autofocus:!0},null),p.value.length===0&&!w.value&&d("span",{class:`${n}-selection-placeholder`},[t.placeholder])]):d(G,null,[t.showSearch&&V.value?d("input",{ref:E,class:`${n}-search-input`,value:w.value,placeholder:typeof W.value=="string"&&W.value||t.placeholder,onInput:e=>{w.value=e.target.value,i("search",w.value)},onClick:e=>e.stopPropagation(),autofocus:!0},null):d("span",{class:U(`${n}-selection-item`,{[`${n}-selection-placeholder`]:!W.value})},[W.value||t.placeholder])])]),d("span",{class:`${n}-suffix`},[t.allowClear&&p.value.length>0&&!t.disabled?d("span",{class:`${n}-clear`,onMousedown:ce,onClick:e=>e.stopPropagation()},[C("✕")]):d("span",{class:U(`${n}-arrow`,{[`${n}-arrow-open`]:V.value})},[C("▾")])])]),V.value&&d(be,{to:"body"},{default:()=>[d("div",{ref:ee,class:`${n}-dropdown`,style:{position:"absolute",top:`${q.value.top}px`,left:`${q.value.left}px`,zIndex:1050}},[X.value?d("div",{class:`${n}-menu ${n}-menu-search`},[X.value.length===0?d("div",{class:`${n}-menu-item-empty`},[t.notFoundContent]):X.value.map((e,l)=>d("div",{key:l,class:`${n}-menu-item`,onMousedown:a=>{a.preventDefault(),re(e.values,e.options)}},[ne(e.labels.join(" / "),w.value)]))]):d("div",{class:`${n}-menus`},[ae.value.map((e,l)=>d("ul",{key:l,class:`${n}-menu`},[e.map(a=>{var y;const o=f(a),u=L(a),r=!!(u!=null&&u.length)&&!a.isLeaf,x=k.value[l]===o,j=t.multiple?p.value.some(O=>O[l]===o&&O.length>l):((y=p.value[0])==null?void 0:y[l])===o;return d("li",{key:o,class:U(`${n}-menu-item`,{[`${n}-menu-item-active`]:x,[`${n}-menu-item-selected`]:j,[`${n}-menu-item-disabled`]:a.disabled,[`${n}-menu-item-expand`]:r}),onClick:()=>ue(a,l),onMouseenter:()=>ie(a,l)},[t.multiple&&d("span",{class:`${n}-menu-item-checkbox`},[p.value.some(O=>O.length===l+1&&O[l]===o)&&"✓"]),d("span",{class:`${n}-menu-item-content`},[h(a)]),r&&d("span",{class:`${n}-menu-item-expand-icon`},[C("›")])])})]))])])]})])}}),we={class:"demo-cascader"},Se={style:{"margin-top":"8px",color:"#666"}},je={style:{"margin-top":"8px",color:"#666"}},Oe=P({__name:"CascaderAdvanced",setup(t){const i=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖"},{value:"binjiang",label:"滨江"}]},{value:"ningbo",label:"宁波"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京"},{value:"suzhou",label:"苏州"}]}],g=v([]),b=v([["zhejiang"],["zhejiang","hangzhou"],["zhejiang","hangzhou","xihu"],["jiangsu","nanjing"]]),n=v([["zhejiang"],["zhejiang","hangzhou"],["zhejiang","hangzhou","xihu"],["jiangsu","nanjing"]]),c=v(["zhejiang","hangzhou","xihu"]),z=B=>fe("span",{style:"color: #1677ff; font-weight: 600;"},B.join(" → "));return(B,h)=>(N(),M("div",we,[h[4]||(h[4]=s("h3",null,"搜索高亮",-1)),d(m($),{value:g.value,"onUpdate:value":h[0]||(h[0]=f=>g.value=f),options:i,"show-search":"",placeholder:"搜索城市（高亮显示匹配结果）",style:{width:"300px"}},null,8,["value"]),h[5]||(h[5]=s("h3",{style:{"margin-top":"24px"}},"showCheckedStrategy - SHOW_PARENT",-1)),d(m($),{value:b.value,"onUpdate:value":h[1]||(h[1]=f=>b.value=f),options:i,multiple:"","show-checked-strategy":"SHOW_PARENT",placeholder:"只显示父节点",style:{width:"400px"}},null,8,["value"]),s("div",Se,"当前选择: "+J(JSON.stringify(b.value)),1),h[6]||(h[6]=s("h3",{style:{"margin-top":"24px"}},"showCheckedStrategy - SHOW_CHILD",-1)),d(m($),{value:n.value,"onUpdate:value":h[2]||(h[2]=f=>n.value=f),options:i,multiple:"","show-checked-strategy":"SHOW_CHILD",placeholder:"只显示子节点",style:{width:"400px"}},null,8,["value"]),s("div",je,"当前选择: "+J(JSON.stringify(n.value)),1),h[7]||(h[7]=s("h3",{style:{"margin-top":"24px"}},"自定义 displayRender (VNode)",-1)),d(m($),{value:c.value,"onUpdate:value":h[3]||(h[3]=f=>c.value=f),options:i,"display-render":z,placeholder:"自定义渲染",style:{width:"300px"}},null,8,["value"])]))}}),ze=xe(Oe,[["__scopeId","data-v-e68487d7"]]),$e=`<template>
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
import { Cascader } from '../../../components'

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
`,Te=P({__name:"CascaderBasic",setup(t){const i=v([]),g=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]},{value:"ningbo",label:"宁波",children:[{value:"haishu",label:"海曙区"},{value:"jiangbei",label:"江北区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"},{value:"qinhuai",label:"秦淮区"}]}]}];return(b,n)=>(N(),Z(m($),{value:i.value,"onUpdate:value":n[0]||(n[0]=c=>i.value=c),options:g,placeholder:"请选择省市区",style:{width:"300px"}},null,8,["value"]))}}),ke=`<template>
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
`,_e={style:{"margin-top":"8px"}},Pe=P({__name:"CascaderChangeOnSelect",setup(t){const i=v([]),g=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"}]}]}],b=n=>{console.log("选中值：",n)};return(n,c)=>(N(),M("div",null,[d(m($),{value:i.value,"onUpdate:value":c[0]||(c[0]=z=>i.value=z),options:g,"change-on-select":!0,placeholder:"选择即改变",style:{width:"300px"},onChange:b},null,8,["value"]),s("p",_e,"当前值："+J(i.value),1)]))}}),Ne=`<template>
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
`,Re=P({__name:"CascaderHover",setup(t){const i=v([]),g=[{value:"frontend",label:"前端",children:[{value:"framework",label:"框架",children:[{value:"vue",label:"Vue"},{value:"react",label:"React"}]},{value:"language",label:"语言",children:[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"}]}]},{value:"backend",label:"后端",children:[{value:"node",label:"Node.js",children:[{value:"express",label:"Express"},{value:"koa",label:"Koa"}]}]}];return(b,n)=>(N(),Z(m($),{value:i.value,"onUpdate:value":n[0]||(n[0]=c=>i.value=c),options:g,"expand-trigger":"hover",placeholder:"鼠标悬停展开",style:{width:"300px"}},null,8,["value"]))}}),Ae=`<template>
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
`,He={style:{"margin-top":"8px"}},Le=P({__name:"CascaderMultiple",setup(t){const i=v([]),g=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]},{value:"ningbo",label:"宁波",children:[{value:"haishu",label:"海曙区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"}]}]}],b=(n,c)=>{console.log("选中值：",n,c)};return(n,c)=>(N(),M("div",null,[d(m($),{value:i.value,"onUpdate:value":c[0]||(c[0]=z=>i.value=z),options:g,multiple:!0,placeholder:"支持多选",style:{width:"300px"},onChange:b},null,8,["value"]),s("p",He,"当前值："+J(i.value),1)]))}}),Ve=`<template>
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
`,Be=P({__name:"CascaderSearch",setup(t){const i=v([]),g=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"}]}]}],b=n=>{console.log("搜索：",n)};return(n,c)=>(N(),Z(m($),{value:i.value,"onUpdate:value":c[0]||(c[0]=z=>i.value=z),options:g,"show-search":!0,placeholder:"请搜索并选择",style:{width:"300px"},onSearch:b},null,8,["value"]))}}),De=`<template>
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
`,Ee={class:"markdown-body"},Ue={__name:"cascader",setup(t,{expose:i}){return i({frontmatter:{}}),(b,n)=>{const c=ye("DemoBlock");return N(),M("div",Ee,[n[0]||(n[0]=s("h1",{id:"cascader-",tabindex:"-1"},"Cascader 级联选择",-1)),n[1]||(n[1]=s("p",null,"级联选择框。",-1)),n[2]||(n[2]=s("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=s("ul",null,[s("li",null,"需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。"),s("li",null,"从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。"),s("li",null,"比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。")],-1)),n[4]||(n[4]=s("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=s("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=s("p",null,"省市区级联。",-1)),d(c,{title:"基础用法",source:m(ke)},{default:H(()=>[d(Te)]),_:1},8,["source"]),n[7]||(n[7]=s("h3",{id:"hover-",tabindex:"-1"},"Hover 展开",-1)),n[8]||(n[8]=s("p",null,[C("通过 "),s("code",null,"expandTrigger"),C(" 设置为 "),s("code",null,"hover"),C(" 时，鼠标移入即展开下级菜单。")],-1)),d(c,{title:"Hover 展开",source:m(Ae)},{default:H(()=>[d(Re)]),_:1},8,["source"]),n[9]||(n[9]=s("h3",{id:"-3",tabindex:"-1"},"可搜索",-1)),n[10]||(n[10]=s("p",null,"可以直接搜索选项并选择。",-1)),d(c,{title:"可搜索",source:m(De)},{default:H(()=>[d(Be)]),_:1},8,["source"]),n[11]||(n[11]=s("h3",{id:"-4",tabindex:"-1"},"选择即改变",-1)),n[12]||(n[12]=s("p",null,[C("当 "),s("code",null,"changeOnSelect"),C(" 为 "),s("code",null,"true"),C(" 时，点选每级菜单选项值都会发生变化。")],-1)),d(c,{title:"选择即改变",source:m(Ne)},{default:H(()=>[d(Pe)]),_:1},8,["source"]),n[13]||(n[13]=s("h3",{id:"-5",tabindex:"-1"},"多选",-1)),n[14]||(n[14]=s("p",null,[C("通过 "),s("code",null,"multiple"),C(" 属性开启多选模式。")],-1)),d(c,{title:"多选",source:m(Ve)},{default:H(()=>[d(Le)]),_:1},8,["source"]),n[15]||(n[15]=s("h3",{id:"-6",tabindex:"-1"},"高级功能",-1)),n[16]||(n[16]=s("p",null,"展示搜索高亮、showCheckedStrategy 和自定义 displayRender（支持 VNode）。",-1)),d(c,{title:"高级功能",source:m($e)},{default:H(()=>[d(ze)]),_:1},8,["source"]),n[17]||(n[17]=Ce('<h2 id="api" tabindex="-1">API</h2><h3 id="cascader-props" tabindex="-1">Cascader Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中项</td><td><code>string[]</code> | <code>string[][]</code> (multiple)</td><td>-</td></tr><tr><td>defaultValue</td><td>默认的选中项</td><td><code>string[]</code> | <code>string[][]</code> (multiple)</td><td><code>[]</code></td></tr><tr><td>options</td><td>可选项数据源</td><td><code>CascaderOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>allowClear</td><td>是否支持清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>expandTrigger</td><td>次级菜单的展开方式</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>multiple</td><td>支持多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSearch</td><td>在选择框中显示搜索框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>changeOnSelect</td><td>当此项为 true 时，点选每级菜单选项值都会发生变化</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>displayRender</td><td>选择后展示的渲染函数</td><td><code>(labels: string[], selectedOptions?: CascaderOption[]) =&gt; string | VNode</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义 options 中 label value children 的字段</td><td><code>{ label?: string; value?: string; children?: string }</code></td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>open(v-model)</td><td>控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认展开浮层</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td><td><code>string</code></td><td><code>&#39;无匹配结果&#39;</code></td></tr><tr><td>loadData</td><td>用于动态加载选项</td><td><code>(selectedOptions: CascaderOption[]) =&gt; void</code></td><td>-</td></tr><tr><td>showCheckedStrategy</td><td>多选时的选中策略</td><td><code>&#39;SHOW_PARENT&#39; | &#39;SHOW_CHILD&#39;</code></td><td><code>&#39;SHOW_PARENT&#39;</code></td></tr><tr><td>maxTagCount</td><td>最多显示多少个 tag</td><td><code>number</code></td><td>-</td></tr><tr><td>maxTagPlaceholder</td><td>隐藏 tag 时显示的内容</td><td><code>string | ((omittedValues: string[][]) =&gt; string)</code></td><td>-</td></tr><tr><td>maxTagTextLength</td><td>最大显示的 tag 文本长度</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="cascaderoption" tabindex="-1">CascaderOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>children</td><td>子选项</td><td><code>CascaderOption[]</code></td></tr><tr><td>isLeaf</td><td>标记是否为叶子节点，设置了 <code>loadData</code> 时有效</td><td><code>boolean</code></td></tr></tbody></table><h3 id="cascader-events" tabindex="-1">Cascader Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择完成后的回调</td><td><code>(value: string[] | string[][]) =&gt; void</code></td></tr><tr><td>update:open</td><td>浮层显隐变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>选择完成后的回调</td><td><code>(value: string[] | string[][], selectedOptions: CascaderOption[] | CascaderOption[][]) =&gt; void</code></td></tr><tr><td>search</td><td>输入框搜索时的回调</td><td><code>(searchText: string) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="cascader-methods" tabindex="-1">Cascader Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table>',9))])}}};export{Ue as default};
