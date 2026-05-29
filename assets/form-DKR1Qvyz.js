import{B as v}from"./Button-CtozVOI9.js";import{k as y,I as k,m as _,j as n,c as h,z as A,x as N,w,e as B,M as s,G as d,i as b,y as C,B as O,g as z,d as f,h as P}from"./index-DvxRruME.js";import{c as x}from"./cls-S9IiI6wd.js";import{I as S,a as E}from"./Input-RQuQYnri.js";import{I as V}from"./InputNumber-ChDhesp8.js";import"./icons-CgCOAJDO.js";const j=Symbol("form-context");async function U(e,a){for(const r of a){if(r.required&&(e==null||e===""))return r.message??"此字段为必填项";if(r.min!==void 0&&typeof e=="string"&&e.length<r.min)return r.message??`最少 ${r.min} 个字符`;if(r.max!==void 0&&typeof e=="string"&&e.length>r.max)return r.message??`最多 ${r.max} 个字符`;if(r.pattern&&!r.pattern.test(String(e??"")))return r.message??"格式不正确";if(r.type==="email"&&e&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e)))return r.message??"请输入有效的邮箱地址";if(r.validator)try{await r.validator(r,e)}catch(o){return(o==null?void 0:o.message)??String(o)??"验证失败"}}return null}const $=y({name:"Form",props:{model:Object,rules:Object,layout:{type:String,default:"horizontal"},labelCol:Object,wrapperCol:Object,colon:{type:Boolean,default:!0},labelAlign:{type:String,default:"right"},size:{type:String,default:"middle"},disabled:Boolean,scrollToFirstError:Boolean,validateTrigger:[String,Array]},emits:["finish","finishFailed","valuesChange"],setup(e,{slots:a,emit:r}){const o=k("form"),t=A({}),m=async l=>{var F,R;const u=(F=e.rules)==null?void 0:F[l];if(!u)return!0;const c=Array.isArray(u)?u:[u],I=(R=e.model)==null?void 0:R[l],g=await U(I,c);if(g)return t.value={...t.value,[l]:g},!1;{const q={...t.value};return delete q[l],t.value=q,!0}};N(j,{get model(){return e.model??{}},get rules(){return e.rules??{}},get layout(){return e.layout},get colon(){return e.colon},get labelAlign(){return e.labelAlign},get size(){return e.size},get disabled(){return e.disabled??!1},get errors(){return t.value},setError:(l,u)=>{t.value={...t.value,[l]:u}},clearError:l=>{const u={...t.value};delete u[l],t.value=u},validateField:m});const i=async l=>{l.preventDefault();const u=Object.keys(e.rules??{});(await Promise.all(u.map(m))).every(Boolean)?r("finish",e.model):r("finishFailed",{values:e.model,errorFields:Object.entries(t.value).map(([g,F])=>({name:g,errors:[F]}))})};return()=>{var l;return n("form",{class:x(o,`${o}-${e.layout}`,{[`${o}-${e.size}`]:e.size!=="middle"}),onSubmit:i},[(l=a.default)==null?void 0:l.call(a)])}}}),p=y({name:"FormItem",props:{name:[String,Array],label:String,rules:[Object,Array],required:Boolean,colon:{type:Boolean,default:void 0},labelCol:Object,wrapperCol:Object,validateStatus:String,help:String,extra:String,hasFeedback:Boolean,noStyle:Boolean,hidden:Boolean,tooltip:String},setup(e,{slots:a}){const r=k("form"),o=_(j),t=h(()=>e.name?Array.isArray(e.name)?e.name.join("."):e.name:""),m=h(()=>e.validateStatus==="error"&&e.help?e.help:t.value?o==null?void 0:o.errors[t.value]:void 0),i=h(()=>e.validateStatus?e.validateStatus:m.value?"error":""),l=h(()=>{if(e.required)return!0;const c=e.rules??(o==null?void 0:o.rules[t.value]);return c?(Array.isArray(c)?c:[c]).some(g=>g.required):!1}),u=h(()=>e.colon!==void 0?e.colon:(o==null?void 0:o.colon)??!0);return e.noStyle?()=>{var c;return(c=a.default)==null?void 0:c.call(a)}:e.hidden?()=>{var c;return n("div",{style:{display:"none"}},[(c=a.default)==null?void 0:c.call(a)])}:()=>{var c;return n("div",{class:x(`${r}-item`,{[`${r}-item-has-error`]:i.value==="error",[`${r}-item-has-warning`]:i.value==="warning",[`${r}-item-has-success`]:i.value==="success",[`${r}-item-required`]:l.value})},[e.label!==void 0&&n("div",{class:`${r}-item-label`},[n("label",{class:x({[`${r}-item-no-colon`]:!u.value})},[e.label])]),n("div",{class:`${r}-item-control`},[n("div",{class:`${r}-item-control-input`},[(c=a.default)==null?void 0:c.call(a)]),(m.value||e.help)&&n("div",{class:x(`${r}-item-explain`,{[`${r}-item-explain-error`]:i.value==="error",[`${r}-item-explain-warning`]:i.value==="warning",[`${r}-item-explain-success`]:i.value==="success"})},[m.value??e.help]),e.extra&&n("div",{class:`${r}-item-extra`},[e.extra])])])}}}),T=y({__name:"FormBasic",setup(e){const a=C({username:"",password:""}),r=t=>{console.log("表单提交：",t)},o=()=>{a.username="",a.password=""};return(t,m)=>(w(),B(d($),{model:a,"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"480px"},onFinish:r},{default:s(()=>[n(d(p),{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"}]},{default:s(()=>[n(d(S),{value:a.username,"onUpdate:value":m[0]||(m[0]=i=>a.username=i),placeholder:"请输入用户名"},null,8,["value"])]),_:1}),n(d(p),{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}]},{default:s(()=>[n(d(E),{value:a.password,"onUpdate:value":m[1]||(m[1]=i=>a.password=i),placeholder:"请输入密码"},null,8,["value"])]),_:1}),n(d(p),{"wrapper-col":{offset:6,span:18}},{default:s(()=>[n(d(v),{type:"primary","html-type":"submit"},{default:s(()=>[...m[2]||(m[2]=[b("提交",-1)])]),_:1}),n(d(v),{style:{"margin-left":"8px"},onClick:o},{default:s(()=>[...m[3]||(m[3]=[b("重置",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),D=`<template>
  <Form
    :model="formState"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 18 }"
    style="max-width: 480px;"
    @finish="handleFinish"
  >
    <FormItem label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
      <Input v-model:value="formState.username" placeholder="请输入用户名" />
    </FormItem>
    <FormItem label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
      <InputPassword v-model:value="formState.password" placeholder="请输入密码" />
    </FormItem>
    <FormItem :wrapper-col="{ offset: 6, span: 18 }">
      <Button type="primary" html-type="submit">提交</Button>
      <Button style="margin-left: 8px;" @click="handleReset">重置</Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input, InputPassword, Button } from 'ant-design-hmfw'

const formState = reactive({
  username: '',
  password: '',
})

const handleFinish = (values: typeof formState) => {
  console.log('表单提交：', values)
}

const handleReset = () => {
  formState.username = ''
  formState.password = ''
}
<\/script>
`,L=y({__name:"FormInline",setup(e){const a=C({name:"",age:null}),r=o=>{console.log("搜索：",o)};return(o,t)=>(w(),B(d($),{model:a,layout:"inline",onFinish:r},{default:s(()=>[n(d(p),{label:"姓名",name:"name"},{default:s(()=>[n(d(S),{value:a.name,"onUpdate:value":t[0]||(t[0]=m=>a.name=m),placeholder:"请输入姓名"},null,8,["value"])]),_:1}),n(d(p),{label:"年龄",name:"age"},{default:s(()=>[n(d(V),{value:a.age,"onUpdate:value":t[1]||(t[1]=m=>a.age=m),placeholder:"年龄",style:{width:"100px"}},null,8,["value"])]),_:1}),n(d(p),null,{default:s(()=>[n(d(v),{type:"primary","html-type":"submit"},{default:s(()=>[...t[2]||(t[2]=[b("搜索",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),M=`<template>
  <Form
    :model="formState"
    layout="inline"
    @finish="handleSearch"
  >
    <FormItem label="姓名" name="name">
      <Input v-model:value="formState.name" placeholder="请输入姓名" />
    </FormItem>
    <FormItem label="年龄" name="age">
      <InputNumber v-model:value="formState.age" placeholder="年龄" style="width: 100px;" />
    </FormItem>
    <FormItem>
      <Button type="primary" html-type="submit">搜索</Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input, InputNumber, Button } from 'ant-design-hmfw'

const formState = reactive({
  name: '',
  age: null as number | null,
})

const handleSearch = (values: typeof formState) => {
  console.log('搜索：', values)
}
<\/script>
`,G=y({__name:"FormValidation",setup(e){const a=A(),r=C({email:"",phone:"",age:null}),o={email:[{required:!0,message:"请输入邮箱"},{type:"email",message:"请输入有效的邮箱地址"}],phone:[{required:!0,message:"请输入手机号"},{pattern:/^1[3-9]\d{9}$/,message:"请输入有效的手机号"}],age:[{required:!0,message:"请输入年龄"}]},t=async()=>{var i;try{await((i=a.value)==null?void 0:i.validate()),console.log("校验通过")}catch(l){console.log("校验失败：",l)}},m=()=>{var i;(i=a.value)==null||i.clearValidate()};return(i,l)=>(w(),B(d($),{ref_key:"formRef",ref:a,model:r,rules:o,"label-col":{span:5},"wrapper-col":{span:19},style:{"max-width":"480px"}},{default:s(()=>[n(d(p),{label:"邮箱",name:"email"},{default:s(()=>[n(d(S),{value:r.email,"onUpdate:value":l[0]||(l[0]=u=>r.email=u),placeholder:"请输入邮箱"},null,8,["value"])]),_:1}),n(d(p),{label:"手机号",name:"phone"},{default:s(()=>[n(d(S),{value:r.phone,"onUpdate:value":l[1]||(l[1]=u=>r.phone=u),placeholder:"请输入手机号"},null,8,["value"])]),_:1}),n(d(p),{label:"年龄",name:"age"},{default:s(()=>[n(d(V),{value:r.age,"onUpdate:value":l[2]||(l[2]=u=>r.age=u),min:1,max:120,placeholder:"请输入年龄",style:{width:"100%"}},null,8,["value"])]),_:1}),n(d(p),{"wrapper-col":{offset:5,span:19}},{default:s(()=>[n(d(v),{type:"primary",onClick:t},{default:s(()=>[...l[3]||(l[3]=[b("校验",-1)])]),_:1}),n(d(v),{style:{"margin-left":"8px"},onClick:m},{default:s(()=>[...l[4]||(l[4]=[b("清除校验",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),K=`<template>
  <Form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 19 }"
    style="max-width: 480px;"
  >
    <FormItem label="邮箱" name="email">
      <Input v-model:value="formState.email" placeholder="请输入邮箱" />
    </FormItem>
    <FormItem label="手机号" name="phone">
      <Input v-model:value="formState.phone" placeholder="请输入手机号" />
    </FormItem>
    <FormItem label="年龄" name="age">
      <InputNumber v-model:value="formState.age" :min="1" :max="120" placeholder="请输入年龄" style="width: 100%;" />
    </FormItem>
    <FormItem :wrapper-col="{ offset: 5, span: 19 }">
      <Button type="primary" @click="handleValidate">校验</Button>
      <Button style="margin-left: 8px;" @click="handleClear">清除校验</Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Form, FormItem, Input, InputNumber, Button } from 'ant-design-hmfw'

const formRef = ref()

const formState = reactive({
  email: '',
  phone: '',
  age: null as number | null,
})

const rules = {
  email: [
    { required: true, message: '请输入邮箱' },
    { type: 'email', message: '请输入有效的邮箱地址' },
  ],
  phone: [
    { required: true, message: '请输入手机号' },
    { pattern: /^1[3-9]\\d{9}$/, message: '请输入有效的手机号' },
  ],
  age: [
    { required: true, message: '请输入年龄' },
  ],
}

const handleValidate = async () => {
  try {
    await formRef.value?.validate()
    console.log('校验通过')
  } catch (error) {
    console.log('校验失败：', error)
  }
}

const handleClear = () => {
  formRef.value?.clearValidate()
}
<\/script>
`,X={class:"markdown-body"},ee={__name:"form",setup(e,{expose:a}){return a({frontmatter:{}}),(o,t)=>{const m=O("DemoBlock");return w(),z("div",X,[t[0]||(t[0]=f("h1",{id:"form-",tabindex:"-1"},"Form 表单",-1)),t[1]||(t[1]=f("p",null,"高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。",-1)),t[2]||(t[2]=f("h2",{id:"",tabindex:"-1"},"何时使用",-1)),t[3]||(t[3]=f("ul",null,[f("li",null,"用于创建一个实体或收集信息。"),f("li",null,"需要对输入的数据类型进行校验时。")],-1)),t[4]||(t[4]=f("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),t[5]||(t[5]=f("h3",{id:"-2",tabindex:"-1"},"基础表单",-1)),t[6]||(t[6]=f("p",null,"基本的表单数据域控制展示，包含布局、初始化、验证、提交。",-1)),n(m,{title:"基础表单",source:d(D)},{default:s(()=>[n(T)]),_:1},8,["source"]),t[7]||(t[7]=f("h3",{id:"-3",tabindex:"-1"},"表单校验",-1)),t[8]||(t[8]=f("p",null,[b("Form 组件提供了表单验证的功能，只需为 FormItem 设置 "),f("code",null,"rules"),b(" 属性即可。")],-1)),n(m,{title:"表单校验",source:d(K)},{default:s(()=>[n(G)]),_:1},8,["source"]),t[9]||(t[9]=f("h3",{id:"-4",tabindex:"-1"},"内联表单",-1)),t[10]||(t[10]=f("p",null,"内联排列表单项。",-1)),n(m,{title:"内联表单",source:d(M)},{default:s(()=>[n(L)]),_:1},8,["source"]),t[11]||(t[11]=P('<h2 id="api" tabindex="-1">API</h2><h3 id="form-props" tabindex="-1">Form Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td>表单数据对象</td><td><code>object</code></td><td>-</td></tr><tr><td>rules</td><td>表单验证规则</td><td><code>Record&lt;string, FormRule[]&gt;</code></td><td>-</td></tr><tr><td>layout</td><td>表单布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39; | &#39;inline&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>labelCol</td><td>label 标签布局，同 Col 组件</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>wrapperCol</td><td>需要为输入控件设置布局样式时，使用该属性，用法同 labelCol</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>disabled</td><td>设置表单组件禁用，仅对 ant-design-hmfw 组件有效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>设置字段组件的尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>label 标签的文本</td><td><code>string</code></td><td>-</td></tr><tr><td>name</td><td>字段名，支持数组</td><td><code>string | string[]</code></td><td>-</td></tr><tr><td>rules</td><td>校验规则，设置字段的校验逻辑</td><td><code>FormRule[]</code></td><td>-</td></tr><tr><td>required</td><td>必填样式设置。如不设置，则会根据校验规则自动生成</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>validateStatus</td><td>校验状态，如不设置，则会根据校验规则自动生成</td><td><code>&#39;success&#39; | &#39;warning&#39; | &#39;error&#39; | &#39;validating&#39;</code></td><td>-</td></tr><tr><td>help</td><td>提示信息，如不设置，则会根据校验规则自动生成</td><td><code>string</code></td><td>-</td></tr><tr><td>labelCol</td><td>label 标签布局，同 Col 组件，优先级高于 Form 的 labelCol</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>wrapperCol</td><td>输入控件布局样式，优先级高于 Form 的 wrapperCol</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr></tbody></table><h3 id="formrule" tabindex="-1">FormRule</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>required</td><td>是否必填</td><td><code>boolean</code></td></tr><tr><td>message</td><td>校验失败时的提示信息</td><td><code>string</code></td></tr><tr><td>type</td><td>类型，常见有 <code>string</code> <code>number</code> <code>email</code> <code>url</code></td><td><code>string</code></td></tr><tr><td>min</td><td>最小长度（string）或最小值（number）</td><td><code>number</code></td></tr><tr><td>max</td><td>最大长度（string）或最大值（number）</td><td><code>number</code></td></tr><tr><td>pattern</td><td>正则表达式校验</td><td><code>RegExp</code></td></tr><tr><td>validator</td><td>自定义校验函数</td><td><code>(rule: FormRule, value: any) =&gt; Promise&lt;void&gt;</code></td></tr></tbody></table><h3 id="form--ref-" tabindex="-1">Form 方法（通过 ref 调用）</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>validate</td><td>触发表单验证</td><td><code>(nameList?: string[]) =&gt; Promise&lt;void&gt;</code></td></tr><tr><td>resetFields</td><td>重置一组字段到初始值</td><td><code>(nameList?: string[]) =&gt; void</code></td></tr><tr><td>clearValidate</td><td>清理某个字段的表单验证信息</td><td><code>(nameList?: string[]) =&gt; void</code></td></tr></tbody></table><h3 id="form-slots" tabindex="-1">Form Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>表单内容</td></tr></tbody></table><h3 id="formitem-slots" tabindex="-1">FormItem Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>表单控件</td></tr><tr><td>label</td><td>自定义 label 内容</td></tr></tbody></table>',13))])}}};export{ee as default};
