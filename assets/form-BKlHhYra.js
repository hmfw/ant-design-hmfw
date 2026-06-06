import{B as I}from"./Button-CwdPD8WR.js";import{m as C,L as z,o as N,l as a,k as v,d as y,B as _,z as U,y as q,g as j,P as m,I as i,A as R,E as L,i as D,f,j as K}from"./index-BQisgCTe.js";import{c as k}from"./cls-S9IiI6wd.js";import{I as $,a as H}from"./Input-BUC9oEY6.js";import{I as M}from"./InputNumber-V-J_J_o8.js";import"./icons-Buy98oKP.js";import"./Icon-BfLh2ono.js";const O=Symbol("form-context");function W(e){return e==null||e===""?"":Array.isArray(e)?e.join("."):String(e)}function X(e,r){if(!e)return;if(!Array.isArray(r))return e[String(r)];let t=e;for(const l of r){if(t==null)return;t=t[String(l)]}return t}async function Y(e,r){for(const t of r){if(t.required&&(e==null||e===""))return t.message??"此字段为必填项";if(t.min!==void 0&&typeof e=="string"&&e.length<t.min)return t.message??`最少 ${t.min} 个字符`;if(t.max!==void 0&&typeof e=="string"&&e.length>t.max)return t.message??`最多 ${t.max} 个字符`;if(t.pattern&&!t.pattern.test(String(e??"")))return t.message??"格式不正确";if(t.type==="email"&&e&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e)))return t.message??"请输入有效的邮箱地址";if(t.validator)try{await t.validator(t,e)}catch(l){return(l==null?void 0:l.message)??String(l)??"验证失败"}}return null}function G(){const e=N(O);return{validate:async r=>{if(!e)return!0;const t=r??Object.keys(e.rules);return(await Promise.all(t.map(d=>e.validateField(d)))).every(Boolean)},validateFields:async r=>{if(!e)return{};const t=r??Object.keys(e.rules);if((await Promise.all(t.map(d=>e.validateField(d)))).every(Boolean))return e.model;throw{values:e.model,errorFields:Object.entries(e.errors).map(([d,n])=>({name:d,errors:[n]}))}},resetFields:()=>{e&&Object.keys(e.errors).forEach(r=>e.clearError(r))},clearValidate:r=>{if(!e)return;(r??Object.keys(e.errors)).forEach(l=>e.clearError(l))},getFieldValue:r=>{var t;return(t=e==null?void 0:e.model)==null?void 0:t[r]},getFieldsValue:()=>(e==null?void 0:e.model)??{},setFieldValue:(r,t)=>{e!=null&&e.model&&(e.model[r]=t)},setFieldsValue:r=>{e!=null&&e.model&&Object.entries(r).forEach(([t,l])=>{e.model[t]=l})}}}const B=C({name:"Form",props:{model:Object,rules:Object,layout:{type:String,default:"horizontal"},labelCol:Object,wrapperCol:Object,colon:{type:Boolean,default:!0},labelAlign:{type:String,default:"right"},size:{type:String,default:"middle"},disabled:Boolean,scrollToFirstError:Boolean,validateTrigger:{type:[String,Array],default:"change"},requiredMark:{type:[Boolean,String],default:!0}},emits:["finish","finishFailed","valuesChange"],setup(e,{slots:r,emit:t,expose:l}){const d=z("form"),n=_({}),u=async o=>{var P;const s=(P=e.rules)==null?void 0:P[o];if(!s)return!0;const h=Array.isArray(s)?s:[s],F=o.includes(".")?o.split("."):o,S=X(e.model,F),A=await Y(S,h);if(A)return n.value={...n.value,[o]:A},!1;const E={...n.value};return delete E[o],n.value=E,!0},c=()=>{var s;const o=document.querySelector(`.${d}-item-has-error`);(s=o==null?void 0:o.scrollIntoView)==null||s.call(o,{block:"nearest",behavior:"smooth"})};U(O,{get model(){return e.model??{}},get rules(){return e.rules??{}},get layout(){return e.layout},get colon(){return e.colon},get labelAlign(){return e.labelAlign},get size(){return e.size},get disabled(){return e.disabled??!1},get labelCol(){return e.labelCol},get wrapperCol(){return e.wrapperCol},get validateTrigger(){return e.validateTrigger??"change"},get requiredMark(){return e.requiredMark??!0},get errors(){return n.value},setError:(o,s)=>{n.value={...n.value,[o]:s}},clearError:o=>{const s={...n.value};delete s[o],n.value=s},validateField:u,notifyValueChange:(o,s)=>{t("valuesChange",{[o]:s},e.model??{})}});const b=async()=>{const o=Object.keys(e.rules??{});(await Promise.all(o.map(u))).every(Boolean)?t("finish",e.model):(t("finishFailed",{values:e.model,errorFields:Object.entries(n.value).map(([F,S])=>({name:F,errors:[S]}))}),e.scrollToFirstError&&c())},V=o=>{o.preventDefault(),b()},x=async o=>{const s=o??Object.keys(e.rules??{});if((await Promise.all(s.map(u))).every(Boolean))return e.model;throw{values:e.model,errorFields:Object.entries(n.value).map(([F,S])=>({name:F,errors:[S]}))}},w=o=>{const s=o??Object.keys(n.value),h={...n.value};s.forEach(F=>{delete h[F]}),n.value=h};return l({validate:x,validateFields:x,clearValidate:w,resetFields:()=>w(),submit:b,getFieldsValue:()=>e.model??{}}),()=>{var o;return a("form",{class:k(d,`${d}-${e.layout}`,{[`${d}-${e.size}`]:e.size!=="middle",[`${d}-hide-required-mark`]:e.requiredMark===!1}),onSubmit:V},[(o=r.default)==null?void 0:o.call(r)])}}});function T(e){if(!e)return;const r={};return e.span!==void 0&&(r.flex=`0 0 ${e.span/24*100}%`),e.offset!==void 0&&(r.marginLeft=`${e.offset/24*100}%`),r}const p=C({name:"FormItem",props:{name:[String,Number,Array],label:String,rules:[Object,Array],required:Boolean,colon:{type:Boolean,default:void 0},labelCol:Object,wrapperCol:Object,validateStatus:String,help:String,extra:String,hasFeedback:Boolean,noStyle:Boolean,hidden:Boolean,tooltip:String,validateTrigger:[String,Array]},setup(e,{slots:r}){const t=z("form"),l=N(O),d=y(()=>W(e.name)),n=y(()=>e.validateStatus==="error"&&e.help?e.help:d.value?l==null?void 0:l.errors[d.value]:void 0),u=y(()=>e.validateStatus?e.validateStatus:n.value?"error":""),c=y(()=>{if(e.required)return!0;const g=e.rules??(l==null?void 0:l.rules[d.value]);return g?(Array.isArray(g)?g:[g]).some(s=>s.required):!1}),b=y(()=>e.colon!==void 0?e.colon:(l==null?void 0:l.colon)??!0),V=y(()=>e.labelCol??(l==null?void 0:l.labelCol)),x=y(()=>e.wrapperCol??(l==null?void 0:l.wrapperCol)),w=y(()=>(l==null?void 0:l.layout)==="horizontal"||(l==null?void 0:l.layout)===void 0);return e.noStyle?()=>{var g;return(g=r.default)==null?void 0:g.call(r)}:e.hidden?()=>{var g;return a("div",{style:{display:"none"}},[(g=r.default)==null?void 0:g.call(r)])}:()=>{var h;const g=w.value?T(V.value):void 0,o=w.value?T(x.value):void 0,s=(l==null?void 0:l.requiredMark)==="optional"&&!c.value;return a("div",{class:k(`${t}-item`,{[`${t}-item-has-error`]:u.value==="error",[`${t}-item-has-warning`]:u.value==="warning",[`${t}-item-has-success`]:u.value==="success",[`${t}-item-required`]:c.value&&(l==null?void 0:l.requiredMark)!==!1})},[(e.label!==void 0||r.label)&&a("div",{class:`${t}-item-label`,style:g},[a("label",{class:k({[`${t}-item-no-colon`]:!b.value})},[r.label?r.label():e.label,e.tooltip&&a("span",{class:`${t}-item-tooltip`,title:e.tooltip},[v("ⓘ")]),s&&a("span",{class:`${t}-item-optional`},[v("（可选）")])])]),a("div",{class:`${t}-item-control`,style:o},[a("div",{class:`${t}-item-control-input`},[(h=r.default)==null?void 0:h.call(r)]),(n.value||e.help)&&a("div",{class:k(`${t}-item-explain`,{[`${t}-item-explain-error`]:u.value==="error",[`${t}-item-explain-warning`]:u.value==="warning",[`${t}-item-explain-success`]:u.value==="success"})},[n.value??e.help]),e.extra&&a("div",{class:`${t}-item-extra`},[e.extra])])])}}});B.Item=p;B.useForm=G;const J=C({__name:"FormBasic",setup(e){const r=R({username:"",password:""}),t=d=>{console.log("表单提交：",d)},l=()=>{r.username="",r.password=""};return(d,n)=>(q(),j(i(B),{model:r,"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"480px"},onFinish:t},{default:m(()=>[a(i(p),{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"}]},{default:m(()=>[a(i($),{value:r.username,"onUpdate:value":n[0]||(n[0]=u=>r.username=u),placeholder:"请输入用户名"},null,8,["value"])]),_:1}),a(i(p),{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}]},{default:m(()=>[a(i(H),{value:r.password,"onUpdate:value":n[1]||(n[1]=u=>r.password=u),placeholder:"请输入密码"},null,8,["value"])]),_:1}),a(i(p),{"wrapper-col":{offset:6,span:18}},{default:m(()=>[a(i(I),{type:"primary","html-type":"submit"},{default:m(()=>[...n[2]||(n[2]=[v("提交",-1)])]),_:1}),a(i(I),{style:{"margin-left":"8px"},onClick:l},{default:m(()=>[...n[3]||(n[3]=[v("重置",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),Q=`<template>
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
`,Z=C({__name:"FormInline",setup(e){const r=R({name:"",age:null}),t=l=>{console.log("搜索：",l)};return(l,d)=>(q(),j(i(B),{model:r,layout:"inline",onFinish:t},{default:m(()=>[a(i(p),{label:"姓名",name:"name"},{default:m(()=>[a(i($),{value:r.name,"onUpdate:value":d[0]||(d[0]=n=>r.name=n),placeholder:"请输入姓名"},null,8,["value"])]),_:1}),a(i(p),{label:"年龄",name:"age"},{default:m(()=>[a(i(M),{value:r.age,"onUpdate:value":d[1]||(d[1]=n=>r.age=n),placeholder:"年龄",style:{width:"100px"}},null,8,["value"])]),_:1}),a(i(p),null,{default:m(()=>[a(i(I),{type:"primary","html-type":"submit"},{default:m(()=>[...d[2]||(d[2]=[v("搜索",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),ee=`<template>
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
`,te=C({__name:"FormValidation",setup(e){const r=_(),t=R({email:"",phone:"",age:null}),l={email:[{required:!0,message:"请输入邮箱"},{type:"email",message:"请输入有效的邮箱地址"}],phone:[{required:!0,message:"请输入手机号"},{pattern:/^1[3-9]\d{9}$/,message:"请输入有效的手机号"}],age:[{required:!0,message:"请输入年龄"}]},d=async()=>{var u;try{await((u=r.value)==null?void 0:u.validate()),console.log("校验通过")}catch(c){console.log("校验失败：",c)}},n=()=>{var u;(u=r.value)==null||u.clearValidate()};return(u,c)=>(q(),j(i(B),{ref_key:"formRef",ref:r,model:t,rules:l,"label-col":{span:5},"wrapper-col":{span:19},style:{"max-width":"480px"}},{default:m(()=>[a(i(p),{label:"邮箱",name:"email"},{default:m(()=>[a(i($),{value:t.email,"onUpdate:value":c[0]||(c[0]=b=>t.email=b),placeholder:"请输入邮箱"},null,8,["value"])]),_:1}),a(i(p),{label:"手机号",name:"phone"},{default:m(()=>[a(i($),{value:t.phone,"onUpdate:value":c[1]||(c[1]=b=>t.phone=b),placeholder:"请输入手机号"},null,8,["value"])]),_:1}),a(i(p),{label:"年龄",name:"age"},{default:m(()=>[a(i(M),{value:t.age,"onUpdate:value":c[2]||(c[2]=b=>t.age=b),min:1,max:120,placeholder:"请输入年龄",style:{width:"100%"}},null,8,["value"])]),_:1}),a(i(p),{"wrapper-col":{offset:5,span:19}},{default:m(()=>[a(i(I),{type:"primary",onClick:d},{default:m(()=>[...c[3]||(c[3]=[v("校验",-1)])]),_:1}),a(i(I),{style:{"margin-left":"8px"},onClick:n},{default:m(()=>[...c[4]||(c[4]=[v("清除校验",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),re=`<template>
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
`,de={class:"markdown-body"},me={__name:"form",setup(e,{expose:r}){return r({frontmatter:{}}),(l,d)=>{const n=L("DemoBlock");return q(),D("div",de,[d[0]||(d[0]=f("h1",{id:"form-",tabindex:"-1"},"Form 表单",-1)),d[1]||(d[1]=f("p",null,"高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。",-1)),d[2]||(d[2]=f("h2",{id:"",tabindex:"-1"},"何时使用",-1)),d[3]||(d[3]=f("ul",null,[f("li",null,"用于创建一个实体或收集信息。"),f("li",null,"需要对输入的数据类型进行校验时。")],-1)),d[4]||(d[4]=f("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),d[5]||(d[5]=f("h3",{id:"-2",tabindex:"-1"},"基础表单",-1)),d[6]||(d[6]=f("p",null,"基本的表单数据域控制展示，包含布局、初始化、验证、提交。",-1)),a(n,{title:"基础表单",source:i(Q)},{default:m(()=>[a(J)]),_:1},8,["source"]),d[7]||(d[7]=f("h3",{id:"-3",tabindex:"-1"},"表单校验",-1)),d[8]||(d[8]=f("p",null,[v("Form 组件提供了表单验证的功能，只需为 FormItem 设置 "),f("code",null,"rules"),v(" 属性即可。")],-1)),a(n,{title:"表单校验",source:i(re)},{default:m(()=>[a(te)]),_:1},8,["source"]),d[9]||(d[9]=f("h3",{id:"-4",tabindex:"-1"},"内联表单",-1)),d[10]||(d[10]=f("p",null,"内联排列表单项。",-1)),a(n,{title:"内联表单",source:i(ee)},{default:m(()=>[a(Z)]),_:1},8,["source"]),d[11]||(d[11]=K('<h2 id="api" tabindex="-1">API</h2><h3 id="form-props" tabindex="-1">Form Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td>表单数据对象</td><td><code>object</code></td><td>-</td></tr><tr><td>rules</td><td>表单验证规则</td><td><code>Record&lt;string, FormRule | FormRule[]&gt;</code></td><td>-</td></tr><tr><td>layout</td><td>表单布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39; | &#39;inline&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>labelCol</td><td>label 标签布局，同 Col 组件</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>wrapperCol</td><td>输入控件布局样式</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>labelAlign</td><td>label 文本对齐方式</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td><code>&#39;right&#39;</code></td></tr><tr><td>colon</td><td>是否显示 label 后面的冒号（仅 horizontal 布局有效）</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>设置表单组件禁用，仅对 ant-design-hmfw 组件有效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>设置字段组件的尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>validateTrigger</td><td>统一设置字段触发验证的时机</td><td><code>&#39;blur&#39; | &#39;change&#39; | (&#39;blur&#39; | &#39;change&#39;)[]</code></td><td><code>&#39;change&#39;</code></td></tr><tr><td>requiredMark</td><td>必选样式：<code>true</code> 显示星号，<code>false</code> 不显示，<code>&#39;optional&#39;</code> 反向标注「可选」</td><td><code>boolean | &#39;optional&#39;</code></td><td><code>true</code></td></tr><tr><td>scrollToFirstError</td><td>提交失败自动滚动到第一个错误字段</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>label 标签的文本</td><td><code>string</code></td><td>-</td></tr><tr><td>name</td><td>字段名，支持数组（嵌套字段）</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>rules</td><td>校验规则，设置字段的校验逻辑</td><td><code>FormRule | FormRule[]</code></td><td>-</td></tr><tr><td>required</td><td>必填样式设置。如不设置，则会根据校验规则自动生成</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>validateStatus</td><td>校验状态</td><td><code>&#39;success&#39; | &#39;warning&#39; | &#39;error&#39; | &#39;validating&#39; | &#39;&#39;</code></td><td>-</td></tr><tr><td>help</td><td>提示信息，如不设置，则会根据校验规则自动生成</td><td><code>string</code></td><td>-</td></tr><tr><td>extra</td><td>额外的提示信息</td><td><code>string</code></td><td>-</td></tr><tr><td>labelCol</td><td>label 标签布局，优先级高于 Form 的 labelCol</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>wrapperCol</td><td>输入控件布局样式，优先级高于 Form 的 wrapperCol</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>validateTrigger</td><td>设置字段校验的时机</td><td><code>&#39;blur&#39; | &#39;change&#39; | (&#39;blur&#39; | &#39;change&#39;)[]</code></td><td>继承自 Form</td></tr><tr><td>tooltip</td><td>配置提示信息（鼠标悬停 ⓘ 图标显示）</td><td><code>string</code></td><td>-</td></tr><tr><td>noStyle</td><td>为 true 时不带样式，作为纯字段控件使用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>hidden</td><td>是否隐藏字段（依然会收集和校验字段）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>colon</td><td>配合 label 属性，覆盖 Form 的 colon</td><td><code>boolean</code></td><td>继承自 Form</td></tr></tbody></table><h3 id="formrule" tabindex="-1">FormRule</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>required</td><td>是否必填</td><td><code>boolean</code></td></tr><tr><td>message</td><td>校验失败时的提示信息</td><td><code>string</code></td></tr><tr><td>type</td><td>类型，常见有 <code>string</code> <code>number</code> <code>email</code> <code>url</code></td><td><code>string</code></td></tr><tr><td>min</td><td>最小长度（string）或最小值（number）</td><td><code>number</code></td></tr><tr><td>max</td><td>最大长度（string）或最大值（number）</td><td><code>number</code></td></tr><tr><td>pattern</td><td>正则表达式校验</td><td><code>RegExp</code></td></tr><tr><td>validator</td><td>自定义校验函数</td><td><code>(rule: FormRule, value: any) =&gt; Promise&lt;void&gt;</code></td></tr></tbody></table><h3 id="form--ref-" tabindex="-1">Form 方法（通过 ref 调用）</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>validate</td><td>触发表单验证；成功 resolve 模型，失败 reject <code>{ values, errorFields }</code></td><td><code>(nameList?: string[]) =&gt; Promise&lt;values&gt;</code></td></tr><tr><td>validateFields</td><td><code>validate</code> 的别名（AntD 一致）</td><td><code>(nameList?: string[]) =&gt; Promise&lt;values&gt;</code></td></tr><tr><td>clearValidate</td><td>清理某些字段的校验信息</td><td><code>(nameList?: string[]) =&gt; void</code></td></tr><tr><td>resetFields</td><td>重置一组字段的校验信息</td><td><code>() =&gt; void</code></td></tr><tr><td>submit</td><td>触发表单提交，效果等同 <code>&lt;button type=&quot;submit&quot;&gt;</code></td><td><code>() =&gt; void</code></td></tr><tr><td>getFieldsValue</td><td>取当前表单全部字段值</td><td><code>() =&gt; object</code></td></tr></tbody></table><h3 id="form-events" tabindex="-1">Form Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>finish</td><td>提交表单且数据验证成功后触发</td><td><code>(values) =&gt; void</code></td></tr><tr><td>finishFailed</td><td>提交表单且数据验证失败后触发</td><td><code>({ values, errorFields }) =&gt; void</code></td></tr><tr><td>valuesChange</td><td>字段值更新时触发（需在控件中显式调用 ctx.notifyValueChange，详见说明）</td><td><code>(changedValues, allValues) =&gt; void</code></td></tr></tbody></table><h3 id="form-slots" tabindex="-1">Form Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>表单内容</td></tr></tbody></table><h3 id="formitem-slots" tabindex="-1">FormItem Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>表单控件</td></tr><tr><td>label</td><td>自定义 label 内容</td></tr></tbody></table>',15))])}}};export{me as default};
