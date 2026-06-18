import{C as u,a as f}from"./Checkbox-C2HuoJ14.js";import{o as g,A as m,k as x,n as s,K as l,R as a,m as r,h as e,J as k,E as b,_ as y,U as G,H as w,l as A}from"./index-GV1C9GBE.js";import"./cls-S9IiI6wd.js";const S={style:{display:"flex","flex-direction":"column",gap:"8px"}},q=g({__name:"CheckboxBasic",setup(v){const c=b(!1),t=b(!1),i=b(!0);return(o,d)=>(m(),x("div",S,[s(l(u),{checked:c.value,"onUpdate:checked":d[0]||(d[0]=n=>c.value=n)},{default:a(()=>[...d[3]||(d[3]=[r(" 普通复选框 ",-1)])]),_:1},8,["checked"]),s(l(u),{checked:t.value,"onUpdate:checked":d[1]||(d[1]=n=>t.value=n),disabled:""},{default:a(()=>[...d[4]||(d[4]=[r(" 禁用复选框 ",-1)])]),_:1},8,["checked"]),s(l(u),{checked:i.value,"onUpdate:checked":d[2]||(d[2]=n=>i.value=n),disabled:""},{default:a(()=>[...d[5]||(d[5]=[r(" 禁用选中 ",-1)])]),_:1},8,["checked"]),e("p",null,"checked1: "+k(c.value)+", checked2: "+k(t.value)+", checked3: "+k(i.value),1)]))}}),B=`<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <Checkbox v-model:checked="checked1"> 普通复选框 </Checkbox>
    <Checkbox v-model:checked="checked2" disabled> 禁用复选框 </Checkbox>
    <Checkbox v-model:checked="checked3" disabled> 禁用选中 </Checkbox>
    <p>checked1: {{ checked1 }}, checked2: {{ checked2 }}, checked3: {{ checked3 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from 'ant-design-hmfw'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(true)
<\/script>
`,N={style:{"border-bottom":"1px solid #e8e8e8","padding-bottom":"8px","margin-bottom":"8px"}},D={style:{"margin-top":"8px"}},E=g({__name:"CheckboxCheckAll",setup(v){const c=[{label:"选项 A",value:"A"},{label:"选项 B",value:"B"},{label:"选项 C",value:"C"},{label:"选项 D",value:"D"}],t=b(["A","B"]),i=b(!1),o=b(!0),d=p=>{t.value=p?c.map(h=>h.value):[],o.value=!1},n=p=>{o.value=!!p.length&&p.length<c.length,i.value=p.length===c.length};return(p,h)=>(m(),x("div",null,[e("div",N,[s(l(u),{checked:i.value,"onUpdate:checked":h[0]||(h[0]=C=>i.value=C),indeterminate:o.value,onChange:d},{default:a(()=>[...h[2]||(h[2]=[r(" 全选 ",-1)])]),_:1},8,["checked","indeterminate"])]),s(l(f),{value:t.value,"onUpdate:value":h[1]||(h[1]=C=>t.value=C),options:c,onChange:n},null,8,["value"]),e("p",D,"已选："+k(t.value),1)]))}}),V=`<template>
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
import { Checkbox, CheckboxGroup } from 'ant-design-hmfw'

const options = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C' },
  { label: '选项 D', value: 'D' },
]

const checkedList = ref<string[]>(['A', 'B'])
const checkAll = ref(false)
const indeterminate = ref(true)

const handleCheckAllChange = (checked: boolean) => {
  checkedList.value = checked ? options.map((o) => o.value) : []
  indeterminate.value = false
}

const handleGroupChange = (list: string[]) => {
  indeterminate.value = !!list.length && list.length < options.length
  checkAll.value = list.length === options.length
}
<\/script>
`,U={class:"demo-checkbox-classnames"},$={class:"demo-section"},P={class:"demo-section"},F={class:"demo-section"},O={class:"demo-section"},T={class:"demo-section"},I={class:"demo-section"},L={class:"demo-section"},M=g({__name:"CheckboxClassNames",setup(v){return(c,t)=>(m(),x("div",U,[e("section",$,[t[1]||(t[1]=e("h3",null,"1. 自定义根节点样式",-1)),s(l(u),{"class-names":{root:"custom-root"}},{default:a(()=>[...t[0]||(t[0]=[r(" 自定义根节点 ",-1)])]),_:1})]),e("section",P,[t[3]||(t[3]=e("h3",null,"2. 自定义勾选框样式",-1)),s(l(u),{"class-names":{checkbox:"custom-checkbox"}},{default:a(()=>[...t[2]||(t[2]=[r(" 圆形勾选框 ",-1)])]),_:1})]),e("section",F,[t[5]||(t[5]=e("h3",null,"3. 自定义内部勾选图标",-1)),s(l(u),{"class-names":{inner:"custom-inner"}},{default:a(()=>[...t[4]||(t[4]=[r(" 星形勾选 ",-1)])]),_:1})]),e("section",O,[t[7]||(t[7]=e("h3",null,"4. 自定义文本标签样式",-1)),s(l(u),{"class-names":{label:"custom-label"}},{default:a(()=>[...t[6]||(t[6]=[r(" 渐变文字标签 ",-1)])]),_:1})]),e("section",T,[t[9]||(t[9]=e("h3",null,"5. 组合使用多个 classNames",-1)),s(l(u),{"class-names":{root:"combined-root",checkbox:"combined-checkbox",inner:"combined-inner",label:"combined-label"}},{default:a(()=>[...t[8]||(t[8]=[r(" 组合样式 ",-1)])]),_:1})]),e("section",I,[t[11]||(t[11]=e("h3",null,"6. 使用 styles 动态样式",-1)),s(l(u),{styles:{root:{padding:"8px 16px",border:"2px solid #1890ff",borderRadius:"8px"},checkbox:{transform:"scale(1.2)"},label:{fontWeight:"bold",color:"#1890ff"}}},{default:a(()=>[...t[10]||(t[10]=[r(" 动态样式 ",-1)])]),_:1})]),e("section",L,[t[13]||(t[13]=e("h3",null,"7. 半选状态自定义样式",-1)),s(l(u),{indeterminate:!0,"class-names":{checkbox:"indeterminate-custom",inner:"indeterminate-inner"}},{default:a(()=>[...t[12]||(t[12]=[r(" 自定义半选状态 ",-1)])]),_:1})])]))}}),z=y(M,[["__scopeId","data-v-9058a797"]]),K=`<template>
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
import { Checkbox } from '../../../components'
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
`,R={style:{display:"flex","flex-direction":"column",gap:"16px"}},W=g({__name:"CheckboxGroup",setup(v){const c=b(["apple"]),t=b([]),i=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"},{label:"葡萄",value:"grape",disabled:!0}],o=[{label:"红色",value:"red"},{label:"绿色",value:"green"},{label:"蓝色",value:"blue"}];return(d,n)=>(m(),x("div",R,[e("div",null,[n[2]||(n[2]=e("p",{style:{"margin-bottom":"8px"}},"水平排列：",-1)),s(l(f),{value:c.value,"onUpdate:value":n[0]||(n[0]=p=>c.value=p),options:i},null,8,["value"])]),e("div",null,[n[3]||(n[3]=e("p",{style:{"margin-bottom":"8px"}},"垂直排列（通过 style 控制）：",-1)),s(l(f),{value:t.value,"onUpdate:value":n[1]||(n[1]=p=>t.value=p),options:o,style:{display:"flex",flexDirection:"column",gap:"8px"}},null,8,["value"])]),e("p",null,"水果："+k(c.value)+"，颜色："+k(t.value),1)]))}}),H=`<template>
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
import { CheckboxGroup } from 'ant-design-hmfw'

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
`,J={style:{display:"flex","flex-direction":"column",gap:"16px"}},Y={style:{display:"flex",gap:"16px","align-items":"center"}},j={for:"agree-terms",style:{cursor:"pointer","user-select":"none"}},Q=g({__name:"CheckboxIdBinding",setup(v){const c=b(!1),t=b(!0),i=b(!1),o=b(["a"]);return(d,n)=>(m(),x("div",J,[e("div",null,[n[7]||(n[7]=e("p",{style:{"margin-bottom":"8px"}},"id 属性自动绑定到原生 input：",-1)),s(l(u),{id:"checkbox-1",checked:c.value,"onUpdate:checked":n[0]||(n[0]=p=>c.value=p)},{default:a(()=>[...n[5]||(n[5]=[r(' 复选框 1（id="checkbox-1"） ',-1)])]),_:1},8,["checked"]),s(l(u),{id:"checkbox-2",checked:t.value,"onUpdate:checked":n[1]||(n[1]=p=>t.value=p)},{default:a(()=>[...n[6]||(n[6]=[r(' 复选框 2（id="checkbox-2"） ',-1)])]),_:1},8,["checked"])]),e("div",null,[n[9]||(n[9]=e("p",{style:{"margin-bottom":"8px"}},"通过 label[for] 配合使用：",-1)),e("div",Y,[s(l(u),{id:"agree-terms",checked:i.value,"onUpdate:checked":n[2]||(n[2]=p=>i.value=p)},null,8,["checked"]),e("label",j,[n[8]||(n[8]=r(" 我已阅读并同意",-1)),e("a",{href:"#",onClick:n[3]||(n[3]=G(()=>{},["prevent"]))},"《服务条款》")])])]),e("div",null,[n[10]||(n[10]=e("p",{style:{"margin-bottom":"8px"}},"CheckboxGroup 中的 id：",-1)),s(l(f),{value:o.value,"onUpdate:value":n[4]||(n[4]=p=>o.value=p),options:[{label:"选项 A",value:"a",id:"option-a"},{label:"选项 B",value:"b",id:"option-b"},{label:"选项 C",value:"c",id:"option-c"}]},null,8,["value"])]),e("div",null,[e("p",null,"状态："+k({checked1:c.value,checked2:t.value,agreeTerms:i.value,groupValue:o.value}),1)]),n[11]||(n[11]=e("div",null,[e("p",{style:{"margin-bottom":"8px"}},"用例说明："),e("ul",{style:{margin:"0","padding-left":"20px"}},[e("li",null,"id 属性自动绑定到原生 <input> 元素，方便表单验证和无障碍访问"),e("li",null,'可以配合 <label for="..."> 实现点击文本选中复选框'),e("li",null,"在 CheckboxGroup 的 options 中也可以指定 id")])],-1))]))}}),X=`<template>
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
import { CheckboxGroup, Checkbox } from 'ant-design-hmfw'

const checked1 = ref(false)
const checked2 = ref(true)
const agreeTerms = ref(false)
const groupValue = ref<string[]>(['a'])
<\/script>
`,Z={style:{display:"flex","flex-direction":"column",gap:"16px"}},_=g({__name:"CheckboxSkipGroup",setup(v){const c=b(["a"]),t=b(!1),i=b(!0);return(o,d)=>(m(),x("div",Z,[e("div",null,[d[7]||(d[7]=e("p",{style:{"margin-bottom":"8px"}},"基本用法：skipGroup 跳过 CheckboxGroup 控制",-1)),s(l(f),{value:c.value,"onUpdate:value":d[2]||(d[2]=n=>c.value=n)},{default:a(()=>[s(l(u),{value:"a"},{default:a(()=>[...d[3]||(d[3]=[r(" A（受组控制） ",-1)])]),_:1}),s(l(u),{value:"b"},{default:a(()=>[...d[4]||(d[4]=[r(" B（受组控制） ",-1)])]),_:1}),s(l(u),{checked:t.value,"onUpdate:checked":d[0]||(d[0]=n=>t.value=n),value:"c","skip-group":""},{default:a(()=>[...d[5]||(d[5]=[r(" C（独立控制，skipGroup） ",-1)])]),_:1},8,["checked"]),s(l(u),{checked:i.value,"onUpdate:checked":d[1]||(d[1]=n=>i.value=n),value:"d","skip-group":""},{default:a(()=>[...d[6]||(d[6]=[r(" D（独立控制，skipGroup） ",-1)])]),_:1},8,["checked"])]),_:1},8,["value"])]),e("div",null,[e("p",null,"组值："+k(c.value),1),e("p",null,"C 独立值："+k(t.value),1),e("p",null,"D 独立值："+k(i.value),1)]),d[8]||(d[8]=e("div",null,[e("p",{style:{"margin-bottom":"8px"}},"用例说明："),e("ul",{style:{margin:"0","padding-left":"20px"}},[e("li",null,"A 和 B 由 CheckboxGroup 统一管理，选中状态反映在 groupValue 中"),e("li",null,"C 和 D 设置了 skipGroup，不受组控制，需要各自的 v-model:checked"),e("li",null,"适用场景：表单中有些复选框需要独立验证或特殊处理")])],-1))]))}}),ee=`<template>
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
import { CheckboxGroup, Checkbox } from 'ant-design-hmfw'

const groupValue = ref<string[]>(['a'])
const independentC = ref(false)
const independentD = ref(true)
<\/script>
`,te={class:"markdown-body"},se={__name:"checkbox",setup(v,{expose:c}){return c({frontmatter:{}}),(i,o)=>{const d=w("DemoBlock");return m(),x("div",te,[o[0]||(o[0]=e("h1",{id:"checkbox-",tabindex:"-1"},"Checkbox 多选框",-1)),o[1]||(o[1]=e("p",null,"多选框。",-1)),o[2]||(o[2]=e("h2",{id:"",tabindex:"-1"},"何时使用",-1)),o[3]||(o[3]=e("ul",null,[e("li",null,"在一组可选项中进行多项选择时。"),e("li",null,"单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。")],-1)),o[4]||(o[4]=e("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),o[5]||(o[5]=e("h3",{id:"-2",tabindex:"-1"},"基础用法",-1)),o[6]||(o[6]=e("p",null,"简单的 checkbox。",-1)),s(d,{title:"基础用法",source:l(B)},{default:a(()=>[s(q)]),_:1},8,["source"]),o[7]||(o[7]=e("h3",{id:"checkboxgroup",tabindex:"-1"},"CheckboxGroup",-1)),o[8]||(o[8]=e("p",null,"方便的从数组生成 Checkbox 组。",-1)),s(d,{title:"CheckboxGroup",source:l(H)},{default:a(()=>[s(W)]),_:1},8,["source"]),o[9]||(o[9]=e("h3",{id:"-3",tabindex:"-1"},"全选",-1)),o[10]||(o[10]=e("p",null,[r("在实现全选效果时，你可能会用到 "),e("code",null,"indeterminate"),r(" 属性。")],-1)),s(d,{title:"全选",source:l(V)},{default:a(()=>[s(E)]),_:1},8,["source"]),o[11]||(o[11]=e("h3",{id:"skipgroup-",tabindex:"-1"},"skipGroup 属性",-1)),o[12]||(o[12]=e("p",null,[r("在 CheckboxGroup 中使用 "),e("code",null,"skipGroup"),r(" 可以让复选框独立控制，不受组管理。")],-1)),s(d,{title:"skipGroup",source:l(ee)},{default:a(()=>[s(_)]),_:1},8,["source"]),o[13]||(o[13]=e("h3",{id:"id-",tabindex:"-1"},"id 属性绑定",-1)),o[14]||(o[14]=e("p",null,"id 属性会自动绑定到原生 input 元素，方便配合 label 使用。",-1)),s(d,{title:"id 属性",source:l(X)},{default:a(()=>[s(Q)]),_:1},8,["source"]),o[15]||(o[15]=A(`<h2 id="api" tabindex="-1">API</h2><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>checked(v-model)</td><td>指定当前是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>defaultChecked</td><td>初始是否选中</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>disabled</td><td>失效状态</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>indeterminate</td><td>设置 indeterminate 状态，只负责样式控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>value</td><td>checkbox 的 value，在 CheckboxGroup 中使用</td><td><code>string | number | boolean</code></td><td>-</td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>input[type=“checkbox”] 的 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>id</td><td>input[type=“checkbox”] 的 id 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>input[type=“checkbox”] 的 title 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>tabIndex</td><td>input[type=“checkbox”] 的 tabindex 属性</td><td><code>number</code></td><td>-</td></tr><tr><td>required</td><td>input[type=“checkbox”] 的 required 属性</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>skipGroup</td><td>在 CheckboxGroup 中时，跳过组控制</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化 className（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname">详见下方</a>）</td><td><code>CheckboxClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化 style（<a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-style">详见下方</a>）</td><td><code>CheckboxStyles</code></td><td>-</td></tr></tbody></table><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value(v-model)</td><td>指定选中的选项</td><td><code>(string | number | boolean)[]</code></td><td><code>[]</code></td></tr><tr><td>defaultValue</td><td>默认选中的选项</td><td><code>(string | number | boolean)[]</code></td><td><code>[]</code></td></tr><tr><td>options</td><td>指定可选项</td><td><code>Array&lt;string | number | CheckboxOptionType&gt;</code></td><td><code>[]</code></td></tr><tr><td>disabled</td><td>整组失效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>CheckboxGroup 下所有 input[type=“checkbox”] 的 name 属性</td><td><code>string</code></td><td>-</td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="checkboxoptiontype" tabindex="-1">CheckboxOptionType</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>label</td><td>选项显示文本</td><td><code>string</code></td></tr><tr><td>value</td><td>选项值</td><td><code>string | number | boolean</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td></tr><tr><td>style</td><td>自定义样式</td><td><code>CSSProperties</code></td></tr><tr><td>className</td><td>自定义类名</td><td><code>string</code></td></tr><tr><td>title</td><td>title 属性</td><td><code>string</code></td></tr><tr><td>id</td><td>id 属性</td><td><code>string</code></td></tr><tr><td>required</td><td>required 属性</td><td><code>boolean</code></td></tr></tbody></table><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:checked</td><td>变化时回调函数（Checkbox）</td><td><code>(checked: boolean) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(event: CheckboxChangeEvent) =&gt; void</code></td></tr><tr><td>click</td><td>点击时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>mouseenter</td><td>鼠标移入时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>mouseleave</td><td>鼠标移出时回调函数</td><td><code>(event: MouseEvent) =&gt; void</code></td></tr><tr><td>focus</td><td>获得焦点时回调函数</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>blur</td><td>失去焦点时回调函数</td><td><code>(event: FocusEvent) =&gt; void</code></td></tr><tr><td>keypress</td><td>按键时回调函数</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr><tr><td>keydown</td><td>按键按下时回调函数</td><td><code>(event: KeyboardEvent) =&gt; void</code></td></tr></tbody></table><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:value</td><td>变化时回调函数</td><td><code>(value: (string | number | boolean)[]) =&gt; void</code></td></tr><tr><td>change</td><td>变化时回调函数</td><td><code>(value: (string | number | boolean)[]) =&gt; void</code></td></tr></tbody></table><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>checkbox 的内容</td></tr></tbody></table><h2 id="-classname" tabindex="-1">语义化 className</h2><p>通过 <code>classNames</code> 属性可以自定义 Checkbox 各部分的 className。</p><h3 id="checkboxclassnames" tabindex="-1">CheckboxClassNames</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>root</td><td>根节点 <code>label.hmfw-checkbox-wrapper</code></td><td><code>string</code></td><td>-</td></tr><tr><td>checkbox</td><td>复选框容器 <code>span.hmfw-checkbox</code></td><td><code>string</code></td><td>-</td></tr><tr><td>input</td><td>原生 input 元素 <code>input.hmfw-checkbox-input</code></td><td><code>string</code></td><td>-</td></tr><tr><td>inner</td><td>视觉勾选框 <code>span.hmfw-checkbox-inner</code></td><td><code>string</code></td><td>-</td></tr><tr><td>label</td><td>文本标签 <code>span.hmfw-checkbox-label</code></td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="dom-" tabindex="-1">DOM 结构</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-checkbox-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- root --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- checkbox --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-checkbox-input<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- input --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-checkbox-inner<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!-- inner --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-checkbox-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>文字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- label，可选 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="-4" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Checkbox
    :classNames=&quot;{
      root: &#39;my-checkbox-root&#39;,
      checkbox: &#39;my-checkbox-box&#39;,
      inner: &#39;my-checkbox-inner&#39;,
      label: &#39;my-checkbox-label&#39;,
    }&quot;
  &gt;
    自定义样式
  &lt;/Checkbox&gt;
&lt;/template&gt;
</code></pre><p><strong>注意事项：</strong></p><ul><li><code>label</code> 的 className 仅在有文本内容（即 default slot 有内容）时生效</li><li><code>input</code> 元素是原生 <code>&lt;input type=&quot;checkbox&quot;&gt;</code>，通常隐藏不可见，但可自定义其样式</li><li><code>inner</code> 是视觉上的勾选框，可以完全自定义其外观（圆形、星形等）</li></ul><h2 id="-style" tabindex="-1">语义化 style</h2><p>通过 <code>styles</code> 属性可以自定义 Checkbox 各部分的 style。</p><h3 id="checkboxstyles" tabindex="-1">CheckboxStyles</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>版本</th></tr></thead><tbody><tr><td>root</td><td>根节点 <code>label.hmfw-checkbox-wrapper</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>checkbox</td><td>复选框容器 <code>span.hmfw-checkbox</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>input</td><td>原生 input 元素 <code>input.hmfw-checkbox-input</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>inner</td><td>视觉勾选框 <code>span.hmfw-checkbox-inner</code></td><td><code>CSSProperties</code></td><td>-</td></tr><tr><td>label</td><td>文本标签 <code>span.hmfw-checkbox-label</code></td><td><code>CSSProperties</code></td><td>-</td></tr></tbody></table><h3 id="-5" tabindex="-1">使用示例</h3><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;Checkbox
    :styles=&quot;{
      root: { padding: &#39;8px 16px&#39;, border: &#39;2px solid #1890ff&#39; },
      checkbox: { transform: &#39;scale(1.2)&#39; },
      label: { fontWeight: &#39;bold&#39;, color: &#39;#1890ff&#39; },
    }&quot;
  &gt;
    动态样式
  &lt;/Checkbox&gt;
&lt;/template&gt;
</code></pre><h3 id="-classname--style" tabindex="-1">语义化 className 与 style</h3>`,30)),s(d,{title:"语义化 className 与 style",source:l(K)},{default:a(()=>[s(z)]),_:1},8,["source"])])}}};export{se as default};
