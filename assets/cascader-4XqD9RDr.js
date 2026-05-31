import{m as _,L as ie,B as g,O as ce,v as ve,w as he,l as o,F as X,k as p,T as ge,d as C,y as z,g as Y,I as y,i as G,f as r,H as I,E as be,P as A,j as me}from"./index-3tP9IO2U.js";import{c as E}from"./cls-S9IiI6wd.js";const N=_({name:"Cascader",props:{value:[Array,Object],defaultValue:{type:[Array,Object],default:()=>[]},options:{type:Array,default:()=>[]},disabled:Boolean,placeholder:{type:String,default:"请选择"},allowClear:{type:Boolean,default:!0},size:{type:String,default:"middle"},status:{type:String,default:""},expandTrigger:{type:String,default:"click"},multiple:Boolean,showSearch:Boolean,changeOnSelect:Boolean,displayRender:Function,fieldNames:Object,open:{type:Boolean,default:void 0},defaultOpen:Boolean,notFoundContent:{type:String,default:"无匹配结果"},loadData:Function,showCheckedStrategy:{type:String,default:"SHOW_PARENT"},maxTagCount:Number,maxTagPlaceholder:[String,Function],maxTagTextLength:Number},emits:["update:value","update:open","change","search","focus","blur","clear"],setup(t,{emit:s,expose:b}){const a=ie("cascader"),n=C(()=>{var e;return((e=t.fieldNames)==null?void 0:e.label)??"label"}),i=C(()=>{var e;return((e=t.fieldNames)==null?void 0:e.value)??"value"}),$=C(()=>{var e;return((e=t.fieldNames)==null?void 0:e.children)??"children"}),F=e=>e[n.value],j=e=>e[i.value],L=e=>e[$.value],H=e=>e?t.multiple?Array.isArray(e)&&e.length>0&&Array.isArray(e[0])?e:[]:Array.isArray(e)&&e.length>0&&!Array.isArray(e[0])?[e]:[]:[],w=g(H(t.defaultValue??t.value)),M=g(t.defaultOpen??!1),S=g([]),f=g(""),R=g(),Q=g(),U=g({top:0,left:0,width:0}),V=g(),ee=C(()=>t.value!==void 0),c=C(()=>ee.value?H(t.value):w.value),B=C(()=>t.open!==void 0?t.open:M.value);ce(()=>t.value,e=>{e!==void 0&&(w.value=H(e))});const k=(e,d)=>{const l=[];let u=d;for(const v of e){const h=u.find(m=>j(m)===v);if(!h)break;l.push(h),u=L(h)??[]}return l},W=(e,d)=>k(e,d).map(F),q=C(()=>{if(t.multiple){const e=c.value;if(e.length===0)return"";const d=W(e[0],t.options),l=k(e[0],t.options);return t.displayRender?t.displayRender(d,l):d.join(" / ")}else{if(c.value.length===0)return"";const e=W(c.value[0],t.options),d=k(c.value[0],t.options);return t.displayRender?t.displayRender(e,d):e.join(" / ")}}),te=C(()=>{const e=[t.options];let d=t.options;for(const l of S.value){const u=d.find(h=>j(h)===l);if(!u)break;const v=L(u);if(v!=null&&v.length)e.push(v),d=v;else break}return e}),ne=C(()=>{const e=[],d=(l,u,v,h)=>{for(const m of l){const O=[...u,F(m)],T=[...v,j(m)],x=[...h,m],D=L(m);D!=null&&D.length&&!m.isLeaf?d(D,O,T,x):e.push({labels:O,values:T,options:x})}};return d(t.options,[],[],[]),e}),J=C(()=>{if(!f.value)return null;const e=f.value.toLowerCase();return ne.value.filter(d=>d.labels.some(l=>l.toLowerCase().includes(e)))}),le=()=>{if(!R.value)return;const e=R.value.getBoundingClientRect();U.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width}},ae=()=>{t.disabled||(le(),!t.multiple&&c.value.length>0&&(S.value=[...c.value[0]]),M.value=!0,s("update:open",!0))},K=()=>{M.value=!1,f.value="",s("update:open",!1)},Z=e=>{var d,l;!((d=R.value)!=null&&d.contains(e.target))&&!((l=Q.value)!=null&&l.contains(e.target))&&K()};ve(()=>document.addEventListener("mousedown",Z)),he(()=>document.removeEventListener("mousedown",Z));const P=e=>{const d=t.multiple?e:e[0]??[],l=t.multiple?e.map(u=>k(u,t.options)):k(e[0]??[],t.options);s("update:value",d),s("change",d,l)},de=(e,d)=>{if(e.disabled)return;const l=[...S.value.slice(0,d),j(e)];S.value=l;const u=L(e),v=!(u!=null&&u.length)||e.isLeaf;if(t.loadData&&!v&&!(u!=null&&u.length)){const h=k(l,t.options);t.loadData(h);return}if(t.multiple){if(v||t.changeOnSelect){const h=[...c.value],m=h.findIndex(O=>O.length===l.length&&O.every((T,x)=>T===l[x]));m>=0?h.splice(m,1):h.push(l),w.value=h,P(h)}}else(v||t.changeOnSelect)&&(w.value=[l],P([l]),v&&K())},oe=(e,d)=>{if(t.expandTrigger!=="hover"||e.disabled)return;const l=[...S.value.slice(0,d),j(e)];S.value=l},ue=(e,d)=>{if(t.multiple){const l=[...c.value,e];w.value=l,P(l)}else w.value=[e],P([e]),K()},se=e=>{e.stopPropagation(),w.value=[],P([]),s("clear")},re=(e,d)=>{d.stopPropagation();const l=c.value.filter(u=>!(u.length===e.length&&u.every((v,h)=>v===e[h])));w.value=l,P(l)};return b({focus:()=>{var e;return(e=V.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=V.value)==null?void 0:e.blur()}}),()=>o(X,null,[o("div",{ref:R,class:E(a,`${a}-${t.size}`,{[`${a}-open`]:B.value,[`${a}-disabled`]:t.disabled,[`${a}-multiple`]:t.multiple,[`${a}-status-error`]:t.status==="error",[`${a}-status-warning`]:t.status==="warning"}),onClick:ae},[o("span",{class:`${a}-selector`},[t.multiple?o(X,null,[c.value.slice(0,t.maxTagCount??c.value.length).map(e=>{let l=W(e,t.options).join(" / ");return t.maxTagTextLength&&l.length>t.maxTagTextLength&&(l=l.slice(0,t.maxTagTextLength)+"..."),o("span",{key:e.join("-"),class:`${a}-selection-item`},[o("span",{class:`${a}-selection-item-content`},[l]),!t.disabled&&o("span",{class:`${a}-selection-item-remove`,onClick:u=>re(e,u)},[p("×")])])}),t.maxTagCount&&c.value.length>t.maxTagCount&&o("span",{class:`${a}-selection-item`},[typeof t.maxTagPlaceholder=="function"?t.maxTagPlaceholder(c.value.slice(t.maxTagCount)):t.maxTagPlaceholder??`+${c.value.length-t.maxTagCount}`]),t.showSearch&&B.value&&o("input",{ref:V,class:`${a}-search-input`,value:f.value,placeholder:c.value.length===0?t.placeholder:"",onInput:e=>{f.value=e.target.value,s("search",f.value)},onClick:e=>e.stopPropagation(),autofocus:!0},null),c.value.length===0&&!f.value&&o("span",{class:`${a}-selection-placeholder`},[t.placeholder])]):o(X,null,[t.showSearch&&B.value?o("input",{ref:V,class:`${a}-search-input`,value:f.value,placeholder:q.value||t.placeholder,onInput:e=>{f.value=e.target.value,s("search",f.value)},onClick:e=>e.stopPropagation(),autofocus:!0},null):o("span",{class:E(`${a}-selection-item`,{[`${a}-selection-placeholder`]:!q.value})},[q.value||t.placeholder])])]),o("span",{class:`${a}-suffix`},[t.allowClear&&c.value.length>0&&!t.disabled?o("span",{class:`${a}-clear`,onMousedown:se,onClick:e=>e.stopPropagation()},[p("✕")]):o("span",{class:E(`${a}-arrow`,{[`${a}-arrow-open`]:B.value})},[p("▾")])])]),B.value&&o(ge,{to:"body"},{default:()=>[o("div",{ref:Q,class:`${a}-dropdown`,style:{position:"absolute",top:`${U.value.top}px`,left:`${U.value.left}px`,zIndex:1050}},[J.value?o("div",{class:`${a}-menu ${a}-menu-search`},[J.value.length===0?o("div",{class:`${a}-menu-item-empty`},[t.notFoundContent]):J.value.map((e,d)=>o("div",{key:d,class:`${a}-menu-item`,onMousedown:l=>{l.preventDefault(),ue(e.values,e.options)}},[e.labels.join(" / ")]))]):o("div",{class:`${a}-menus`},[te.value.map((e,d)=>o("ul",{key:d,class:`${a}-menu`},[e.map(l=>{var T;const u=j(l),v=L(l),h=!!(v!=null&&v.length)&&!l.isLeaf,m=S.value[d]===u,O=t.multiple?c.value.some(x=>x[d]===u&&x.length>d):((T=c.value[0])==null?void 0:T[d])===u;return o("li",{key:u,class:E(`${a}-menu-item`,{[`${a}-menu-item-active`]:m,[`${a}-menu-item-selected`]:O,[`${a}-menu-item-disabled`]:l.disabled,[`${a}-menu-item-expand`]:h}),onClick:()=>de(l,d),onMouseenter:()=>oe(l,d)},[t.multiple&&o("span",{class:`${a}-menu-item-checkbox`},[c.value.some(x=>x.length===d+1&&x[d]===u)&&"✓"]),o("span",{class:`${a}-menu-item-content`},[F(l)]),h&&o("span",{class:`${a}-menu-item-expand-icon`},[p("›")])])})]))])])]})])}}),pe=_({__name:"CascaderBasic",setup(t){const s=g([]),b=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]},{value:"ningbo",label:"宁波",children:[{value:"haishu",label:"海曙区"},{value:"jiangbei",label:"江北区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"},{value:"qinhuai",label:"秦淮区"}]}]}];return(a,n)=>(z(),Y(y(N),{value:s.value,"onUpdate:value":n[0]||(n[0]=i=>s.value=i),options:b,placeholder:"请选择省市区",style:{width:"300px"}},null,8,["value"]))}}),fe=`<template>
  <Cascader
    v-model:value="value"
    :options="options"
    placeholder="请选择省市区"
    style="width: 300px;"
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
`,xe={style:{"margin-top":"8px"}},Ce=_({__name:"CascaderChangeOnSelect",setup(t){const s=g([]),b=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"}]}]}],a=n=>{console.log("选中值：",n)};return(n,i)=>(z(),G("div",null,[o(y(N),{value:s.value,"onUpdate:value":i[0]||(i[0]=$=>s.value=$),options:b,"change-on-select":!0,placeholder:"选择即改变",style:{width:"300px"},onChange:a},null,8,["value"]),r("p",xe,"当前值："+I(s.value),1)]))}}),ye=`<template>
  <div>
    <Cascader
      v-model:value="value"
      :options="options"
      :change-on-select="true"
      placeholder="选择即改变"
      style="width: 300px;"
      @change="handleChange"
    />
    <p style="margin-top: 8px;">当前值：{{ value }}</p>
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
        children: [
          { value: 'xihu', label: '西湖区' },
        ],
      },
    ],
  },
]

const handleChange = (val: string[]) => {
  console.log('选中值：', val)
}
<\/script>
`,we=_({__name:"CascaderHover",setup(t){const s=g([]),b=[{value:"frontend",label:"前端",children:[{value:"framework",label:"框架",children:[{value:"vue",label:"Vue"},{value:"react",label:"React"}]},{value:"language",label:"语言",children:[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"}]}]},{value:"backend",label:"后端",children:[{value:"node",label:"Node.js",children:[{value:"express",label:"Express"},{value:"koa",label:"Koa"}]}]}];return(a,n)=>(z(),Y(y(N),{value:s.value,"onUpdate:value":n[0]||(n[0]=i=>s.value=i),options:b,"expand-trigger":"hover",placeholder:"鼠标悬停展开",style:{width:"300px"}},null,8,["value"]))}}),$e=`<template>
  <Cascader
    v-model:value="value"
    :options="options"
    expand-trigger="hover"
    placeholder="鼠标悬停展开"
    style="width: 300px;"
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
`,Se={style:{"margin-top":"8px"}},Oe=_({__name:"CascaderMultiple",setup(t){const s=g([]),b=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]},{value:"ningbo",label:"宁波",children:[{value:"haishu",label:"海曙区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"}]}]}],a=(n,i)=>{console.log("选中值：",n,i)};return(n,i)=>(z(),G("div",null,[o(y(N),{value:s.value,"onUpdate:value":i[0]||(i[0]=$=>s.value=$),options:b,multiple:!0,placeholder:"支持多选",style:{width:"300px"},onChange:a},null,8,["value"]),r("p",Se,"当前值："+I(s.value),1)]))}}),Te=`<template>
  <div>
    <Cascader
      v-model:value="value"
      :options="options"
      :multiple="true"
      placeholder="支持多选"
      style="width: 300px;"
      @change="handleChange"
    />
    <p style="margin-top: 8px;">当前值：{{ value }}</p>
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
        children: [
          { value: 'haishu', label: '海曙区' },
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
        ],
      },
    ],
  },
]

const handleChange = (val: string[][], selectedOptions: any[]) => {
  console.log('选中值：', val, selectedOptions)
}
<\/script>
`,je=_({__name:"CascaderSearch",setup(t){const s=g([]),b=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"}]}]}],a=n=>{console.log("搜索：",n)};return(n,i)=>(z(),Y(y(N),{value:s.value,"onUpdate:value":i[0]||(i[0]=$=>s.value=$),options:b,"show-search":!0,placeholder:"请搜索并选择",style:{width:"300px"},onSearch:a},null,8,["value"]))}}),ke=`<template>
  <Cascader
    v-model:value="value"
    :options="options"
    :show-search="true"
    placeholder="请搜索并选择"
    style="width: 300px;"
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
        children: [
          { value: 'xuanwu', label: '玄武区' },
        ],
      },
    ],
  },
]

const handleSearch = (searchText: string) => {
  console.log('搜索：', searchText)
}
<\/script>
`,Pe={class:"markdown-body"},Le={__name:"cascader",setup(t,{expose:s}){return s({frontmatter:{}}),(a,n)=>{const i=be("DemoBlock");return z(),G("div",Pe,[n[0]||(n[0]=r("h1",{id:"cascader-",tabindex:"-1"},"Cascader 级联选择",-1)),n[1]||(n[1]=r("p",null,"级联选择框。",-1)),n[2]||(n[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=r("ul",null,[r("li",null,"需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。"),r("li",null,"从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。"),r("li",null,"比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。")],-1)),n[4]||(n[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=r("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=r("p",null,"省市区级联。",-1)),o(i,{title:"基础用法",source:y(fe)},{default:A(()=>[o(pe)]),_:1},8,["source"]),n[7]||(n[7]=r("h3",{id:"hover-",tabindex:"-1"},"Hover 展开",-1)),n[8]||(n[8]=r("p",null,[p("通过 "),r("code",null,"expandTrigger"),p(" 设置为 "),r("code",null,"hover"),p(" 时，鼠标移入即展开下级菜单。")],-1)),o(i,{title:"Hover 展开",source:y($e)},{default:A(()=>[o(we)]),_:1},8,["source"]),n[9]||(n[9]=r("h3",{id:"-3",tabindex:"-1"},"可搜索",-1)),n[10]||(n[10]=r("p",null,"可以直接搜索选项并选择。",-1)),o(i,{title:"可搜索",source:y(ke)},{default:A(()=>[o(je)]),_:1},8,["source"]),n[11]||(n[11]=r("h3",{id:"-4",tabindex:"-1"},"选择即改变",-1)),n[12]||(n[12]=r("p",null,[p("当 "),r("code",null,"changeOnSelect"),p(" 为 "),r("code",null,"true"),p(" 时，点选每级菜单选项值都会发生变化。")],-1)),o(i,{title:"选择即改变",source:y(ye)},{default:A(()=>[o(Ce)]),_:1},8,["source"]),n[13]||(n[13]=r("h3",{id:"-5",tabindex:"-1"},"多选",-1)),n[14]||(n[14]=r("p",null,[p("通过 "),r("code",null,"multiple"),p(" 属性开启多选模式。")],-1)),o(i,{title:"多选",source:y(Te)},{default:A(()=>[o(Oe)]),_:1},8,["source"]),n[15]||(n[15]=me('<h2 id="api" tabindex="-1">API</h2><h3 id="cascader-props" tabindex="-1">Cascader Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中项</td><td><code>string[]</code> | <code>string[][]</code> (multiple)</td><td>-</td></tr><tr><td>defaultValue</td><td>默认的选中项</td><td><code>string[]</code> | <code>string[][]</code> (multiple)</td><td><code>[]</code></td></tr><tr><td>options</td><td>可选项数据源</td><td><code>CascaderOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>allowClear</td><td>是否支持清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>expandTrigger</td><td>次级菜单的展开方式</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>multiple</td><td>支持多选</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>showSearch</td><td>在选择框中显示搜索框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>changeOnSelect</td><td>当此项为 true 时，点选每级菜单选项值都会发生变化</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>displayRender</td><td>选择后展示的渲染函数</td><td><code>(labels: string[], selectedOptions?: CascaderOption[]) =&gt; string</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义 options 中 label value children 的字段</td><td><code>{ label?: string; value?: string; children?: string }</code></td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>open(v-model)</td><td>控制浮层显隐</td><td><code>boolean</code></td><td>-</td></tr><tr><td>defaultOpen</td><td>默认展开浮层</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>notFoundContent</td><td>当下拉列表为空时显示的内容</td><td><code>string</code></td><td><code>&#39;无匹配结果&#39;</code></td></tr><tr><td>loadData</td><td>用于动态加载选项</td><td><code>(selectedOptions: CascaderOption[]) =&gt; void</code></td><td>-</td></tr><tr><td>showCheckedStrategy</td><td>多选时的选中策略</td><td><code>&#39;SHOW_PARENT&#39; | &#39;SHOW_CHILD&#39;</code></td><td><code>&#39;SHOW_PARENT&#39;</code></td></tr><tr><td>maxTagCount</td><td>最多显示多少个 tag</td><td><code>number</code></td><td>-</td></tr><tr><td>maxTagPlaceholder</td><td>隐藏 tag 时显示的内容</td><td><code>string | ((omittedValues: string[][]) =&gt; string)</code></td><td>-</td></tr><tr><td>maxTagTextLength</td><td>最大显示的 tag 文本长度</td><td><code>number</code></td><td>-</td></tr></tbody></table><h3 id="cascaderoption" tabindex="-1">CascaderOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string | number</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>children</td><td>子选项</td><td><code>CascaderOption[]</code></td></tr><tr><td>isLeaf</td><td>标记是否为叶子节点，设置了 <code>loadData</code> 时有效</td><td><code>boolean</code></td></tr></tbody></table><h3 id="cascader-events" tabindex="-1">Cascader Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择完成后的回调</td><td><code>(value: string[] | string[][]) =&gt; void</code></td></tr><tr><td>update:open</td><td>浮层显隐变化时的回调</td><td><code>(open: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>选择完成后的回调</td><td><code>(value: string[] | string[][], selectedOptions: CascaderOption[] | CascaderOption[][]) =&gt; void</code></td></tr><tr><td>search</td><td>输入框搜索时的回调</td><td><code>(searchText: string) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table><h3 id="cascader-methods" tabindex="-1">Cascader Methods</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>获取焦点</td><td>-</td></tr><tr><td>blur</td><td>失去焦点</td><td>-</td></tr></tbody></table>',9))])}}};export{Le as default};
