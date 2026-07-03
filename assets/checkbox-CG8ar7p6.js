import{C as u,a as f}from"./Checkbox-zjGwQVUI.js";import{d as v,o as h,b as x,c as a,e as d,w as c,g as l,f as t,A as b,r as k,_ as y,D as w,h as G,i as N}from"./index-D624MvcT.js";import"./cls-S9IiI6wd.js";const S={style:{display:"flex","flex-direction":"column",gap:"8px"}},A=v({__name:"CheckboxBasic",setup(g){const p=k(!1),e=k(!1),r=k(!0);return(n,o)=>(h(),x("div",S,[a(d(u),{checked:p.value,"onUpdate:checked":o[0]||(o[0]=s=>p.value=s)},{default:c(()=>[...o[3]||(o[3]=[l(" 普通复选框 ",-1)])]),_:1},8,["checked"]),a(d(u),{checked:e.value,"onUpdate:checked":o[1]||(o[1]=s=>e.value=s),disabled:""},{default:c(()=>[...o[4]||(o[4]=[l(" 禁用复选框 ",-1)])]),_:1},8,["checked"]),a(d(u),{checked:r.value,"onUpdate:checked":o[2]||(o[2]=s=>r.value=s),disabled:""},{default:c(()=>[...o[5]||(o[5]=[l(" 禁用选中 ",-1)])]),_:1},8,["checked"]),t("p",null,"checked1: "+b(p.value)+", checked2: "+b(e.value)+", checked3: "+b(r.value),1)]))}}),q=`<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <Checkbox v-model:checked="checked1"> 普通复选框 </Checkbox>
    <Checkbox v-model:checked="checked2" disabled> 禁用复选框 </Checkbox>
    <Checkbox v-model:checked="checked3" disabled> 禁用选中 </Checkbox>
    <p>checked1: {{ checked1 }}, checked2: {{ checked2 }}, checked3: {{ checked3 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@hmfw/ant-design'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(true)
<\/script>
`,B={style:{"border-bottom":"1px solid #e8e8e8","padding-bottom":"8px","margin-bottom":"8px"}},D={style:{"margin-top":"8px"}},E=v({__name:"CheckboxCheckAll",setup(g){const p=[{label:"选项 A",value:"A"},{label:"选项 B",value:"B"},{label:"选项 C",value:"C"},{label:"选项 D",value:"D"}],e=k(["A","B"]),r=k(!1),n=k(!0),o=i=>{e.value=i.target.checked?p.map(m=>m.value):[],n.value=!1},s=i=>{n.value=!!i.length&&i.length<p.length,r.value=i.length===p.length};return(i,m)=>(h(),x("div",null,[t("div",B,[a(d(u),{checked:r.value,"onUpdate:checked":m[0]||(m[0]=C=>r.value=C),indeterminate:n.value,onChange:o},{default:c(()=>[...m[2]||(m[2]=[l(" 全选 ",-1)])]),_:1},8,["checked","indeterminate"])]),a(d(f),{value:e.value,"onUpdate:value":m[1]||(m[1]=C=>e.value=C),options:p,onChange:s},null,8,["value"]),t("p",D,"已选："+b(e.value),1)]))}}),V=`<template>
  <div>
    <div style="border-bottom: 1px solid #e8e8e8; padding-bottom: 8px; margin-bottom: 8px">
      <Checkbox v-model:checked="checkAll" :indeterminate="indeterminate" @change="handleCheckAllChange">
        全选
      </Checkbox>
    </div>
    <CheckboxGroup v-model:value="checkedList" :options="options" @change="handleGroupChange" />
    <p style="margin-top: 8px">已选：{{ checkedList }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox, CheckboxGroup } from '@hmfw/ant-design'
import type { CheckboxChangeEvent } from '@hmfw/ant-design'

const options = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C' },
  { label: '选项 D', value: 'D' },
]

const checkedList = ref<string[]>(['A', 'B'])
const checkAll = ref(false)
const indeterminate = ref(true)

const handleCheckAllChange = (e: CheckboxChangeEvent) => {
  checkedList.value = e.target.checked ? options.map((o) => o.value) : []
  indeterminate.value = false
}

const handleGroupChange = (list: string[]) => {
  indeterminate.value = !!list.length && list.length < options.length
  checkAll.value = list.length === options.length
}
<\/script>
`,$={class:"demo-checkbox-classnames"},U={class:"demo-section"},P={class:"demo-section"},T={class:"demo-section"},F={class:"demo-section"},O={class:"demo-section"},I={class:"demo-section"},L={class:"demo-section"},M=v({__name:"CheckboxClassNames",setup(g){return(p,e)=>(h(),x("div",$,[t("section",U,[e[1]||(e[1]=t("h3",null,"1. 自定义根节点样式",-1)),a(d(u),{"class-names":{root:"custom-root"}},{default:c(()=>[...e[0]||(e[0]=[l(" 自定义根节点 ",-1)])]),_:1})]),t("section",P,[e[3]||(e[3]=t("h3",null,"2. 自定义勾选框样式",-1)),a(d(u),{"class-names":{checkbox:"custom-checkbox"}},{default:c(()=>[...e[2]||(e[2]=[l(" 圆形勾选框 ",-1)])]),_:1})]),t("section",T,[e[5]||(e[5]=t("h3",null,"3. 自定义内部勾选图标",-1)),a(d(u),{"class-names":{inner:"custom-inner"}},{default:c(()=>[...e[4]||(e[4]=[l(" 星形勾选 ",-1)])]),_:1})]),t("section",F,[e[7]||(e[7]=t("h3",null,"4. 自定义文本标签样式",-1)),a(d(u),{"class-names":{label:"custom-label"}},{default:c(()=>[...e[6]||(e[6]=[l(" 渐变文字标签 ",-1)])]),_:1})]),t("section",O,[e[9]||(e[9]=t("h3",null,"5. 组合使用多个 classNames",-1)),a(d(u),{"class-names":{root:"combined-root",checkbox:"combined-checkbox",inner:"combined-inner",label:"combined-label"}},{default:c(()=>[...e[8]||(e[8]=[l(" 组合样式 ",-1)])]),_:1})]),t("section",I,[e[11]||(e[11]=t("h3",null,"6. 使用 styles 动态样式",-1)),a(d(u),{styles:{root:{padding:"8px 16px",border:"2px solid #1890ff",borderRadius:"8px"},checkbox:{transform:"scale(1.2)"},label:{fontWeight:"bold",color:"#1890ff"}}},{default:c(()=>[...e[10]||(e[10]=[l(" 动态样式 ",-1)])]),_:1})]),t("section",L,[e[13]||(e[13]=t("h3",null,"7. 半选状态自定义样式",-1)),a(d(u),{indeterminate:!0,"class-names":{checkbox:"indeterminate-custom",inner:"indeterminate-inner"}},{default:c(()=>[...e[12]||(e[12]=[l(" 自定义半选状态 ",-1)])]),_:1})])]))}}),z=y(M,[["__scopeId","data-v-bf3ed9c5"]]),W=`<template>
  <div class="demo-checkbox-classnames">
    <!-- 场景 1: 自定义根节点 -->
    <section class="demo-section">
      <h3>1. 自定义根节点样式</h3>
      <Checkbox :class-names="{ root: 'custom-root' }"> 自定义根节点 </Checkbox>
    </section>

    <!-- 场景 2: 自定义勾选框 -->
    <section class="demo-section">
      <h3>2. 自定义勾选框样式</h3>
      <Checkbox :class-names="{ checkbox: 'custom-checkbox' }"> 圆形勾选框 </Checkbox>
    </section>

    <!-- 场景 3: 自定义内部勾选图标 -->
    <section class="demo-section">
      <h3>3. 自定义内部勾选图标</h3>
      <Checkbox :class-names="{ inner: 'custom-inner' }"> 星形勾选 </Checkbox>
    </section>

    <!-- 场景 4: 自定义文本标签 -->
    <section class="demo-section">
      <h3>4. 自定义文本标签样式</h3>
      <Checkbox :class-names="{ label: 'custom-label' }"> 渐变文字标签 </Checkbox>
    </section>

    <!-- 场景 5: 组合使用多个 classNames -->
    <section class="demo-section">
      <h3>5. 组合使用多个 classNames</h3>
      <Checkbox
        :class-names="{
          root: 'combined-root',
          checkbox: 'combined-checkbox',
          inner: 'combined-inner',
          label: 'combined-label',
        }"
      >
        组合样式
      </Checkbox>
    </section>

    <!-- 场景 6: 使用 styles prop -->
    <section class="demo-section">
      <h3>6. 使用 styles 动态样式</h3>
      <Checkbox
        :styles="{
          root: { padding: '8px 16px', border: '2px solid #1890ff', borderRadius: '8px' },
          checkbox: { transform: 'scale(1.2)' },
          label: { fontWeight: 'bold', color: '#1890ff' },
        }"
      >
        动态样式
      </Checkbox>
    </section>

    <!-- 场景 7: 半选状态自定义 -->
    <section class="demo-section">
      <h3>7. 半选状态自定义样式</h3>
      <Checkbox :indeterminate="true" :class-names="{ checkbox: 'indeterminate-custom', inner: 'indeterminate-inner' }">
        自定义半选状态
      </Checkbox>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Checkbox } from '@hmfw/ant-design'
<\/script>

<style scoped>
.demo-checkbox-classnames {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.demo-section {
  padding: 16px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section h3 {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #666;
}

/* 场景 1: 自定义根节点 */
:deep(.custom-root) {
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
  transition: all 0.3s ease;
}

:deep(.custom-root:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* 场景 2: 自定义勾选框为圆形 */
:deep(.custom-checkbox),
:deep(.custom-checkbox .hmfw-checkbox-inner) {
  border-radius: 50% !important;
}

:deep(.custom-checkbox) {
  border: 2px solid #52c41a;
}

/* 场景 3: 自定义内部勾选图标为星形 */
:deep(.custom-inner::after) {
  content: '★';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #faad14;
  font-size: 12px;
  border: none !important;
}

:deep(.hmfw-checkbox-checked .custom-inner::after) {
  display: block;
}

/* 场景 4: 渐变文字标签 */
:deep(.custom-label) {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 16px;
}

/* 场景 5: 组合样式 */
:deep(.combined-root) {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border: 2px dashed #1890ff;
  border-radius: 6px;
  background: #e6f7ff;
  transition: all 0.3s ease;
}

:deep(.combined-root:hover) {
  border-color: #40a9ff;
  background: #bae7ff;
}

:deep(.combined-checkbox) {
  border: 2px solid #1890ff;
}

:deep(.combined-inner) {
  background: #1890ff;
}

:deep(.combined-label) {
  color: #0050b3;
  font-weight: 500;
}

/* 场景 7: 半选状态自定义 */
:deep(.indeterminate-custom) {
  border-color: #722ed1;
  background: #f9f0ff;
}

:deep(.indeterminate-inner::after) {
  background-color: #722ed1 !important;
}
</style>
`,K={style:{display:"flex","flex-direction":"column",gap:"16px"}},R=v({__name:"CheckboxGroup",setup(g){const p=k(["apple"]),e=k([]),r=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"},{label:"葡萄",value:"grape",disabled:!0}],n=[{label:"红色",value:"red"},{label:"绿色",value:"green"},{label:"蓝色",value:"blue"}];return(o,s)=>(h(),x("div",K,[t("div",null,[s[2]||(s[2]=t("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),a(d(f),{value:p.value,"onUpdate:value":s[0]||(s[0]=i=>p.value=i),options:r},null,8,["value"])]),t("div",null,[s[3]||(s[3]=t("p",{style:{"margin-bottom":"8px"}},"垂直排列（通过 style 控制）：",-1)),a(d(f),{value:e.value,"onUpdate:value":s[1]||(s[1]=i=>e.value=i),options:n,style:{display:"flex",flexDirection:"column",gap:"8px"}},null,8,["value"])]),t("p",null,"水果："+b(p.value)+"，颜色："+b(e.value),1)]))}}),Y=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">水平排列：</p>
      <CheckboxGroup v-model:value="selectedFruits" :options="fruitOptions" />
    </div>
    <div>
      <p style="margin-bottom: 8px">垂直排列（通过 style 控制）：</p>
      <CheckboxGroup
        v-model:value="selectedColors"
        :options="colorOptions"
        :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }"
      />
    </div>
    <p>水果：{{ selectedFruits }}，颜色：{{ selectedColors }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup } from '@hmfw/ant-design'

const selectedFruits = ref<string[]>(['apple'])
const selectedColors = ref<string[]>([])

const fruitOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape', disabled: true },
]

const colorOptions = [
  { label: '红色', value: 'red' },
  { label: '绿色', value: 'green' },
  { label: '蓝色', value: 'blue' },
]
<\/script>
`,j={style:{display:"flex","flex-direction":"column",gap:"16px"}},H={style:{display:"flex",gap:"16px","align-items":"center"}},J={for:"agree-terms",style:{cursor:"pointer","user-select":"none"}},Q=v({__name:"CheckboxIdBinding",setup(g){const p=k(!1),e=k(!0),r=k(!1),n=k(["a"]);return(o,s)=>(h(),x("div",j,[t("div",null,[s[7]||(s[7]=t("p",{style:{"margin-bottom":"8px"}},"id 属性自动绑定到原生 input：",-1)),a(d(u),{id:"checkbox-1",checked:p.value,"onUpdate:checked":s[0]||(s[0]=i=>p.value=i)},{default:c(()=>[...s[5]||(s[5]=[l(' 复选框 1（id="checkbox-1"） ',-1)])]),_:1},8,["checked"]),a(d(u),{id:"checkbox-2",checked:e.value,"onUpdate:checked":s[1]||(s[1]=i=>e.value=i)},{default:c(()=>[...s[6]||(s[6]=[l(' 复选框 2（id="checkbox-2"） ',-1)])]),_:1},8,["checked"])]),t("div",null,[s[9]||(s[9]=t("p",{style:{"margin-bottom":"8px"}},"通过 label[for] 配合使用：",-1)),t("div",H,[a(d(u),{id:"agree-terms",checked:r.value,"onUpdate:checked":s[2]||(s[2]=i=>r.value=i)},null,8,["checked"]),t("label",J,[s[8]||(s[8]=l(" 我已阅读并同意",-1)),t("a",{href:"#",onClick:s[3]||(s[3]=w(()=>{},["prevent"]))},"《服务条款》")])])]),t("div",null,[s[10]||(s[10]=t("p",{style:{"margin-bottom":"8px"}},"CheckboxGroup 中的 id：",-1)),a(d(f),{value:n.value,"onUpdate:value":s[4]||(s[4]=i=>n.value=i),options:[{label:"选项 A",value:"a",id:"option-a"},{label:"选项 B",value:"b",id:"option-b"},{label:"选项 C",value:"c",id:"option-c"}]},null,8,["value"])]),t("div",null,[t("p",null,"状态："+b({checked1:p.value,checked2:e.value,agreeTerms:r.value,groupValue:n.value}),1)]),s[11]||(s[11]=t("div",null,[t("p",{style:{"margin-bottom":"8px"}},"用例说明："),t("ul",{style:{margin:"0","padding-left":"20px"}},[t("li",null,"id 属性自动绑定到原生 <input> 元素，方便表单验证和无障碍访问"),t("li",null,'可以配合 <label for="..."> 实现点击文本选中复选框'),t("li",null,"在 CheckboxGroup 的 options 中也可以指定 id")])],-1))]))}}),X=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">id 属性自动绑定到原生 input：</p>
      <Checkbox id="checkbox-1" v-model:checked="checked1"> 复选框 1（id="checkbox-1"） </Checkbox>
      <Checkbox id="checkbox-2" v-model:checked="checked2"> 复选框 2（id="checkbox-2"） </Checkbox>
    </div>
    <div>
      <p style="margin-bottom: 8px">通过 label[for] 配合使用：</p>
      <div style="display: flex; gap: 16px; align-items: center">
        <Checkbox id="agree-terms" v-model:checked="agreeTerms" />
        <label for="agree-terms" style="cursor: pointer; user-select: none">
          我已阅读并同意<a href="#" @click.prevent>《服务条款》</a>
        </label>
      </div>
    </div>
    <div>
      <p style="margin-bottom: 8px">CheckboxGroup 中的 id：</p>
      <CheckboxGroup
        v-model:value="groupValue"
        :options="[
          { label: '选项 A', value: 'a', id: 'option-a' },
          { label: '选项 B', value: 'b', id: 'option-b' },
          { label: '选项 C', value: 'c', id: 'option-c' },
        ]"
      />
    </div>
    <div>
      <p>状态：{{ { checked1, checked2, agreeTerms, groupValue } }}</p>
    </div>
    <div>
      <p style="margin-bottom: 8px">用例说明：</p>
      <ul style="margin: 0; padding-left: 20px">
        <li>id 属性自动绑定到原生 &lt;input&gt; 元素，方便表单验证和无障碍访问</li>
        <li>可以配合 &lt;label for="..."&gt; 实现点击文本选中复选框</li>
        <li>在 CheckboxGroup 的 options 中也可以指定 id</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup, Checkbox } from '@hmfw/ant-design'

const checked1 = ref(false)
const checked2 = ref(true)
const agreeTerms = ref(false)
const groupValue = ref<string[]>(['a'])
<\/script>
`,Z={style:{display:"flex","flex-direction":"column",gap:"16px"}},_=v({__name:"CheckboxSkipGroup",setup(g){const p=k(["a"]),e=k(!1),r=k(!0);return(n,o)=>(h(),x("div",Z,[t("div",null,[o[7]||(o[7]=t("p",{style:{"margin-bottom":"8px"}},"基本用法：skipGroup 跳过 CheckboxGroup 控制",-1)),a(d(f),{value:p.value,"onUpdate:value":o[2]||(o[2]=s=>p.value=s)},{default:c(()=>[a(d(u),{value:"a"},{default:c(()=>[...o[3]||(o[3]=[l(" A（受组控制） ",-1)])]),_:1}),a(d(u),{value:"b"},{default:c(()=>[...o[4]||(o[4]=[l(" B（受组控制） ",-1)])]),_:1}),a(d(u),{checked:e.value,"onUpdate:checked":o[0]||(o[0]=s=>e.value=s),value:"c","skip-group":""},{default:c(()=>[...o[5]||(o[5]=[l(" C（独立控制，skipGroup） ",-1)])]),_:1},8,["checked"]),a(d(u),{checked:r.value,"onUpdate:checked":o[1]||(o[1]=s=>r.value=s),value:"d","skip-group":""},{default:c(()=>[...o[6]||(o[6]=[l(" D（独立控制，skipGroup） ",-1)])]),_:1},8,["checked"])]),_:1},8,["value"])]),t("div",null,[t("p",null,"组值："+b(p.value),1),t("p",null,"C 独立值："+b(e.value),1),t("p",null,"D 独立值："+b(r.value),1)]),o[8]||(o[8]=t("div",null,[t("p",{style:{"margin-bottom":"8px"}},"用例说明："),t("ul",{style:{margin:"0","padding-left":"20px"}},[t("li",null,"A 和 B 由 CheckboxGroup 统一管理，选中状态反映在 groupValue 中"),t("li",null,"C 和 D 设置了 skipGroup，不受组控制，需要各自的 v-model:checked"),t("li",null,"适用场景：表单中有些复选框需要独立验证或特殊处理")])],-1))]))}}),tt=`<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 8px">基本用法：skipGroup 跳过 CheckboxGroup 控制</p>
      <CheckboxGroup v-model:value="groupValue">
        <Checkbox value="a"> A（受组控制） </Checkbox>
        <Checkbox value="b"> B（受组控制） </Checkbox>
        <Checkbox v-model:checked="independentC" value="c" skip-group> C（独立控制，skipGroup） </Checkbox>
        <Checkbox v-model:checked="independentD" value="d" skip-group> D（独立控制，skipGroup） </Checkbox>
      </CheckboxGroup>
    </div>
    <div>
      <p>组值：{{ groupValue }}</p>
      <p>C 独立值：{{ independentC }}</p>
      <p>D 独立值：{{ independentD }}</p>
    </div>
    <div>
      <p style="margin-bottom: 8px">用例说明：</p>
      <ul style="margin: 0; padding-left: 20px">
        <li>A 和 B 由 CheckboxGroup 统一管理，选中状态反映在 groupValue 中</li>
        <li>C 和 D 设置了 skipGroup，不受组控制，需要各自的 v-model:checked</li>
        <li>适用场景：表单中有些复选框需要独立验证或特殊处理</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup, Checkbox } from '@hmfw/ant-design'

const groupValue = ref<string[]>(['a'])
const independentC = ref(false)
const independentD = ref(true)
<\/script>
`,et={class:"markdown-body"},at={__name:"checkbox",setup(g,{expose:p}){return p({frontmatter:{}}),(r,n)=>{const o=G("DemoBlock");return h(),x("div",et,[n[0]||(n[0]=t("h1",{id:"checkbox-多选框",tabindex:"-1"},"Checkbox 多选框",-1)),n[1]||(n[1]=t("p",null,"多选框。",-1)),n[2]||(n[2]=t("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=t("ul",null,[t("li",null,"在一组可选项中进行多项选择时。"),t("li",null,"单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),n[4]||(n[4]=t("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=t("h3",{id:"基础用法",tabindex:"-1"},"基础用法",-1)),n[6]||(n[6]=t("p",null,"简单的 checkbox。",-1)),a(o,{title:"基础用法",source:d(q)},{default:c(()=>[a(A)]),_:1},8,["source"]),n[7]||(n[7]=t("h3",{id:"checkboxgroup",tabindex:"-1"},"CheckboxGroup",-1)),n[8]||(n[8]=t("p",null,"方便的从数组生成 Checkbox 组。",-1)),a(o,{title:"CheckboxGroup",source:d(Y)},{default:c(()=>[a(R)]),_:1},8,["source"]),n[9]||(n[9]=t("h3",{id:"全选",tabindex:"-1"},"全选",-1)),n[10]||(n[10]=t("p",null,[l("在实现全选效果时，你可能会用到 "),t("code",null,"indeterminate"),l(" 属性。")],-1)),a(o,{title:"全选",source:d(V)},{default:c(()=>[a(E)]),_:1},8,["source"]),n[11]||(n[11]=t("h3",{id:"skipgroup-属性",tabindex:"-1"},"skipGroup 属性",-1)),n[12]||(n[12]=t("p",null,[l("在 CheckboxGroup 中使用 "),t("code",null,"skipGroup"),l(" 可以让复选框独立控制，不受组管理。")],-1)),a(o,{title:"skipGroup",source:d(tt)},{default:c(()=>[a(_)]),_:1},8,["source"]),n[13]||(n[13]=t("h3",{id:"id-属性绑定",tabindex:"-1"},"id 属性绑定",-1)),n[14]||(n[14]=t("p",null,"id 属性会自动绑定到原生 input 元素，方便配合 label 使用。",-1)),a(o,{title:"id 属性",source:d(X)},{default:c(()=>[a(Q)]),_:1},8,["source"]),n[15]||(n[15]=t("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),n[16]||(n[16]=t("p",null,[l("通过 "),t("code",null,"classNames"),l(" / "),t("code",null,"styles"),l(" 对各子元素做细粒度样式控制。")],-1)),a(o,{title:"语义化 className 与 style",source:d(W)},{default:c(()=>[a(z)]),_:1},8,["source"]),n[17]||(n[17]=N(`<h2 id="api" tabindex="-1">API</h2><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>失效状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>indeterminate</td><td>设置 indeterminate 状态，只负责样式控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>checkbox 的 value，在 CheckboxGroup 中使用</td><td><code>string | number | boolean</code></td><td>-</td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>input[type=“checkbox”] 的 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>id</td><td>input[type=“checkbox”] 的 id 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>input[type=“checkbox”] 的 title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIndex</td><td>input[type=“checkbox”] 的 tabindex 属性</td><td><code>number</code></td><td>-</td></tr><tr><td>required</td><td>input[type=“checkbox”] 的 required 属性</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>skipGroup</td><td>在 CheckboxGroup 中时，跳过组控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化 className，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CheckboxClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>CheckboxStyles</code></td><td>-</td></tr></tbody></table><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中的选项</td><td><code>(string | number | boolean)[]</code></td><td><code>[]</code></td></tr><tr><td>defaultValue</td><td>默认选中的选项</td><td><code>(string | number | boolean)[]</code></td><td><code>[]</code></td></tr><tr><td>options</td><td>指定可选项</td><td><code>Array&lt;string | number | CheckboxOptionType&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>整组失效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>CheckboxGroup 下所有 input[type=“checkbox”] 的 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="checkboxoptiontype" tabindex="-1">CheckboxOptionType</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>选项显示文本</td><td><code>string</code></td></tr><tr><td>value</td><td>选项值</td><td><code>string | number | boolean</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td></tr><tr><td>title</td><td>title 属性</td><td><code>string</code></td></tr><tr><td>id</td><td>id 属性</td><td><code>string</code></td></tr><tr><td>required</td><td>required 属性</td><td><code>boolean</code></td></tr></tbody></table><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数（Checkbox）</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: CheckboxChangeEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>mouseenter</td><td>鼠标移入时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>mouseleave</td><td>鼠标移出时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时回调函数</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时回调函数</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>keypress</td><td>按键时回调函数</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>keydown</td><td>按键按下时回调函数</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>变化时回调函数</td><td><code>(value: (string | number | boolean)[]) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(value: (string | number | boolean)[]) =&gt; void</code></td></tr></tbody></table><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>checkbox 的内容</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Checkbox的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">CheckboxClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 label.hmfw-checkbox-wrapper</span>
  checkbox<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 复选框容器 span.hmfw-checkbox</span>
  input<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 原生 input 元素 input.hmfw-checkbox-input</span>
  inner<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 视觉勾选框 span.hmfw-checkbox-inner</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 文本标签 span.hmfw-checkbox-label</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">CheckboxStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  checkbox<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  input<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  inner<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  label<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-checkbox-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.checkbox / styles.checkbox 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-checkbox-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.input / styles.input 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-checkbox-inner<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.inner / styles.inner 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-checkbox-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.label / styles.label 应用于此，可选 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span>
    <span class="token attr-name">:classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: &#39;my-checkbox-root&#39;,
      checkbox: &#39;my-checkbox-box&#39;,
      inner: &#39;my-checkbox-inner&#39;,
      label: &#39;my-checkbox-label&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    自定义样式
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-checkbox-root)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-checkbox-inner)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-checkbox-label)</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      root: { padding: &#39;8px 16px&#39;, border: &#39;2px solid #1890ff&#39; },
      checkbox: { transform: &#39;scale(1.2)&#39; },
      label: { fontWeight: &#39;bold&#39;, color: &#39;#1890ff&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    动态样式
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>label</code> 的 className 仅在有文本内容（即 default slot 有内容）时生效</li><li><code>input</code> 元素是原生 <code>&lt;input type=&quot;checkbox&quot;&gt;</code>，通常隐藏不可见，但可自定义其样式</li><li><code>inner</code> 是视觉上的勾选框，可以完全自定义其外观（圆形、星形等）</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-text</code></td><td>主文本色</td><td><code>rgba(0,0,0,0.88)</code></td></tr><tr><td><code>--hmfw-color-text-disabled</code></td><td>禁用文本色</td><td><code>rgba(0,0,0,0.25)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-bg-container-disabled</code></td><td>禁用容器背景色</td><td><code>rgba(0,0,0,0.04)</code></td></tr><tr><td><code>--hmfw-font-size-base</code></td><td>基础字号</td><td><code>14px</code></td></tr><tr><td><code>--hmfw-border-radius-sm</code></td><td>小号圆角</td><td><code>4px</code></td></tr></tbody></table>`,27))])}}};export{at as default};
