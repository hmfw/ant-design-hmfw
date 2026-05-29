import{k as j,I as ee,z as h,L as te,t as ne,u as le,j as d,i as b,T as ae,F as de,c as p,w as O,e as H,G as f,g as q,d as r,E as oe,B as se,M as V,h as re}from"./index-BNHhPN23.js";import{c as P}from"./cls-S9IiI6wd.js";const L=j({name:"Cascader",props:{value:Array,defaultValue:{type:Array,default:()=>[]},options:{type:Array,default:()=>[]},disabled:Boolean,placeholder:{type:String,default:"请选择"},allowClear:{type:Boolean,default:!0},size:{type:String,default:"middle"},status:{type:String,default:""},expandTrigger:{type:String,default:"click"},multiple:Boolean,showSearch:Boolean,changeOnSelect:Boolean,displayRender:Function,fieldNames:Object,open:{type:Boolean,default:void 0}},emits:["update:value","change","search","focus","blur","clear"],setup(l,{emit:s}){const n=ee("cascader"),g=p(()=>{var e;return((e=l.fieldNames)==null?void 0:e.label)??"label"}),t=p(()=>{var e;return((e=l.fieldNames)==null?void 0:e.value)??"value"}),u=p(()=>{var e;return((e=l.fieldNames)==null?void 0:e.children)??"children"}),m=e=>e[g.value],w=e=>e[t.value],$=e=>e[u.value],S=h([...l.defaultValue??l.value??[]]),N=h(!1),x=h([]),C=h(""),z=h(),M=h(),E=h({top:0,left:0,width:0}),J=p(()=>l.value!==void 0),k=p(()=>J.value?l.value:S.value),B=p(()=>l.open!==void 0?l.open:N.value);te(()=>l.value,e=>{e&&(S.value=[...e])});const R=(e,o)=>{const a=[];let i=o;for(const c of e){const v=i.find(y=>w(y)===c);if(!v)break;a.push(m(v)),i=$(v)??[]}return a},D=p(()=>{if(!k.value.length)return"";const e=R(k.value,l.options);return l.displayRender?l.displayRender(e):e.join(" / ")}),K=p(()=>{const e=[l.options];let o=l.options;for(const a of x.value){const i=o.find(v=>w(v)===a);if(!i)break;const c=$(i);if(c!=null&&c.length)e.push(c),o=c;else break}return e}),G=p(()=>{const e=[],o=(a,i,c)=>{for(const v of a){const y=[...i,m(v)],T=[...c,w(v)],_=$(v);_!=null&&_.length?o(_,y,T):e.push({labels:y,values:T})}};return o(l.options,[],[]),e}),A=p(()=>{if(!C.value)return null;const e=C.value.toLowerCase();return G.value.filter(o=>o.labels.some(a=>a.toLowerCase().includes(e)))}),X=()=>{if(!z.value)return;const e=z.value.getBoundingClientRect();E.value={top:e.bottom+window.scrollY+4,left:e.left+window.scrollX,width:e.width}},Y=()=>{l.disabled||(X(),x.value=[...k.value],N.value=!0)},F=()=>{N.value=!1,C.value=""},U=e=>{var o,a;!((o=z.value)!=null&&o.contains(e.target))&&!((a=M.value)!=null&&a.contains(e.target))&&F()};ne(()=>document.addEventListener("mousedown",U)),le(()=>document.removeEventListener("mousedown",U));const I=(e,o)=>{if(e.disabled)return;const a=[...x.value.slice(0,o),w(e)];x.value=a;const i=$(e),c=!(i!=null&&i.length)||e.isLeaf;(c||l.changeOnSelect)&&(S.value=a,s("update:value",a),s("change",a,R(a,l.options)),c&&F())},Q=(e,o)=>{if(l.expandTrigger!=="hover"||e.disabled)return;const a=[...x.value.slice(0,o),w(e)];x.value=a},W=e=>{S.value=e,s("update:value",e),s("change",e,R(e,l.options)),F()},Z=e=>{e.stopPropagation(),S.value=[],s("update:value",[]),s("change",[],[]),s("clear")};return()=>d(de,null,[d("div",{ref:z,class:P(n,`${n}-${l.size}`,{[`${n}-open`]:B.value,[`${n}-disabled`]:l.disabled,[`${n}-status-error`]:l.status==="error",[`${n}-status-warning`]:l.status==="warning"}),onClick:Y},[d("span",{class:`${n}-selector`},[l.showSearch&&B.value?d("input",{class:`${n}-search-input`,value:C.value,placeholder:D.value||l.placeholder,onInput:e=>{C.value=e.target.value,s("search",C.value)},onClick:e=>e.stopPropagation(),autofocus:!0},null):d("span",{class:P(`${n}-selection-item`,{[`${n}-selection-placeholder`]:!D.value})},[D.value||l.placeholder])]),d("span",{class:`${n}-suffix`},[l.allowClear&&k.value.length>0&&!l.disabled?d("span",{class:`${n}-clear`,onMousedown:Z,onClick:e=>e.stopPropagation()},[b("✕")]):d("span",{class:P(`${n}-arrow`,{[`${n}-arrow-open`]:B.value})},[b("▾")])])]),B.value&&d(ae,{to:"body"},{default:()=>[d("div",{ref:M,class:`${n}-dropdown`,style:{position:"absolute",top:`${E.value.top}px`,left:`${E.value.left}px`,zIndex:1050}},[A.value?d("div",{class:`${n}-menu ${n}-menu-search`},[A.value.length===0?d("div",{class:`${n}-menu-item-empty`},[b("无匹配结果")]):A.value.map((e,o)=>d("div",{key:o,class:`${n}-menu-item`,onMousedown:a=>{a.preventDefault(),W(e.values)}},[e.labels.join(" / ")]))]):d("div",{class:`${n}-menus`},[K.value.map((e,o)=>d("ul",{key:o,class:`${n}-menu`},[e.map(a=>{const i=w(a),c=$(a),v=!!(c!=null&&c.length),y=x.value[o]===i,T=k.value[o]===i;return d("li",{key:i,class:P(`${n}-menu-item`,{[`${n}-menu-item-active`]:y,[`${n}-menu-item-selected`]:T,[`${n}-menu-item-disabled`]:a.disabled,[`${n}-menu-item-expand`]:v}),onClick:()=>I(a,o),onMouseenter:()=>Q(a,o)},[d("span",{class:`${n}-menu-item-content`},[m(a)]),v&&d("span",{class:`${n}-menu-item-expand-icon`},[b("›")])])})]))])])]})])}}),ue=j({__name:"CascaderBasic",setup(l){const s=h([]),n=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]},{value:"ningbo",label:"宁波",children:[{value:"haishu",label:"海曙区"},{value:"jiangbei",label:"江北区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"},{value:"qinhuai",label:"秦淮区"}]}]}];return(g,t)=>(O(),H(f(L),{value:s.value,"onUpdate:value":t[0]||(t[0]=u=>s.value=u),options:n,placeholder:"请选择省市区",style:{width:"300px"}},null,8,["value"]))}}),ce=`<template>
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
`,ie={style:{"margin-top":"8px"}},ve=j({__name:"CascaderChangeOnSelect",setup(l){const s=h([]),n=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"}]}]}],g=t=>{console.log("选中值：",t)};return(t,u)=>(O(),q("div",null,[d(f(L),{value:s.value,"onUpdate:value":u[0]||(u[0]=m=>s.value=m),options:n,"change-on-select":!0,placeholder:"选择即改变",style:{width:"300px"},onChange:g},null,8,["value"]),r("p",ie,"当前值："+oe(s.value),1)]))}}),he=`<template>
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
`,pe=j({__name:"CascaderHover",setup(l){const s=h([]),n=[{value:"frontend",label:"前端",children:[{value:"framework",label:"框架",children:[{value:"vue",label:"Vue"},{value:"react",label:"React"}]},{value:"language",label:"语言",children:[{value:"ts",label:"TypeScript"},{value:"js",label:"JavaScript"}]}]},{value:"backend",label:"后端",children:[{value:"node",label:"Node.js",children:[{value:"express",label:"Express"},{value:"koa",label:"Koa"}]}]}];return(g,t)=>(O(),H(f(L),{value:s.value,"onUpdate:value":t[0]||(t[0]=u=>s.value=u),options:n,"expand-trigger":"hover",placeholder:"鼠标悬停展开",style:{width:"300px"}},null,8,["value"]))}}),be=`<template>
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
`,ge=j({__name:"CascaderSearch",setup(l){const s=h([]),n=[{value:"zhejiang",label:"浙江",children:[{value:"hangzhou",label:"杭州",children:[{value:"xihu",label:"西湖区"},{value:"yuhang",label:"余杭区"}]}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"xuanwu",label:"玄武区"}]}]}],g=t=>{console.log("搜索：",t)};return(t,u)=>(O(),H(f(L),{value:s.value,"onUpdate:value":u[0]||(u[0]=m=>s.value=m),options:n,"show-search":!0,placeholder:"请搜索并选择",style:{width:"300px"},onSearch:g},null,8,["value"]))}}),fe=`<template>
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
`,me={class:"markdown-body"},Ce={__name:"cascader",setup(l,{expose:s}){return s({frontmatter:{}}),(g,t)=>{const u=se("DemoBlock");return O(),q("div",me,[t[0]||(t[0]=r("h1",{id:"cascader-",tabindex:"-1"},"Cascader 级联选择",-1)),t[1]||(t[1]=r("p",null,"级联选择框。",-1)),t[2]||(t[2]=r("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=r("ul",null,[r("li",null,"需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。"),r("li",null,"从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。"),r("li",null,"比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。")],-1)),t[4]||(t[4]=r("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=r("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),t[6]||(t[6]=r("p",null,"省市区级联。",-1)),d(u,{title:"基础用法",source:f(ce)},{default:V(()=>[d(ue)]),_:1},8,["source"]),t[7]||(t[7]=r("h3",{id:"hover-",tabindex:"-1"},"Hover 展开",-1)),t[8]||(t[8]=r("p",null,[b("通过 "),r("code",null,"expandTrigger"),b(" 设置为 "),r("code",null,"hover"),b(" 时，鼠标移入即展开下级菜单。")],-1)),d(u,{title:"Hover 展开",source:f(be)},{default:V(()=>[d(pe)]),_:1},8,["source"]),t[9]||(t[9]=r("h3",{id:"-3",tabindex:"-1"},"可搜索",-1)),t[10]||(t[10]=r("p",null,"可以直接搜索选项并选择。",-1)),d(u,{title:"可搜索",source:f(fe)},{default:V(()=>[d(ge)]),_:1},8,["source"]),t[11]||(t[11]=r("h3",{id:"-4",tabindex:"-1"},"选择即改变",-1)),t[12]||(t[12]=r("p",null,[b("当 "),r("code",null,"changeOnSelect"),b(" 为 "),r("code",null,"true"),b(" 时，点选每级菜单选项值都会发生变化。")],-1)),d(u,{title:"选择即改变",source:f(he)},{default:V(()=>[d(ve)]),_:1},8,["source"]),t[13]||(t[13]=re('<h2 id="api" tabindex="-1">API</h2><h3 id="cascader-props" tabindex="-1">Cascader Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中项</td><td><code>string[]</code></td><td>-</td></tr><tr><td>defaultValue</td><td>默认的选中项</td><td><code>string[]</code></td><td><code>[]</code></td></tr><tr><td>options</td><td>可选项数据源</td><td><code>CascaderOption[]</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>allowClear</td><td>是否支持清除</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>size</td><td>输入框大小</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>status</td><td>设置校验状态</td><td><code>&#39;error&#39; | &#39;warning&#39;</code></td><td>-</td></tr><tr><td>expandTrigger</td><td>次级菜单的展开方式</td><td><code>&#39;click&#39; | &#39;hover&#39;</code></td><td><code>&#39;click&#39;</code></td></tr><tr><td>showSearch</td><td>在选择框中显示搜索框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>changeOnSelect</td><td>当此项为 true 时，点选每级菜单选项值都会发生变化</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>displayRender</td><td>选择后展示的渲染函数</td><td><code>(labels: string[]) =&gt; string</code></td><td>-</td></tr><tr><td>fieldNames</td><td>自定义 options 中 label value children 的字段</td><td><code>{ label?: string; value?: string; children?: string }</code></td><td><code>{ label: &#39;label&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr></tbody></table><h3 id="cascaderoption" tabindex="-1">CascaderOption</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>value</td><td>选项的值</td><td><code>string</code></td></tr><tr><td>label</td><td>选项的标签</td><td><code>string</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>children</td><td>子选项</td><td><code>CascaderOption[]</code></td></tr><tr><td>isLeaf</td><td>标记是否为叶子节点，设置了 <code>loadData</code> 时有效</td><td><code>boolean</code></td></tr></tbody></table><h3 id="cascader-events" tabindex="-1">Cascader Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>选择完成后的回调</td><td><code>(value: string[]) =&gt; void</code></td></tr><tr><td>change</td><td>选择完成后的回调</td><td><code>(value: string[], selectedOptions: CascaderOption[]) =&gt; void</code></td></tr><tr><td>search</td><td>输入框搜索时的回调</td><td><code>(searchText: string) =&gt; void</code></td></tr><tr><td>clear</td><td>点击清除按钮时的回调</td><td><code>() =&gt; void</code></td></tr></tbody></table>',7))])}}};export{Ce as default};
