import{B as I}from"./Button-mNkoEchB.js";import{S as L}from"./Space-BXFZnpuO.js";import{o as C,N as J,q as G,n as o,m as b,f as x,E as B,B as W,A as T,k as $,h as p,K as l,R as s,J as K,j as A,D as E,_ as H,i as O,Q as D,H as X,l as Y}from"./index-B09KCCs0.js";import{c as V}from"./cls-S9IiI6wd.js";import{I as k,a as Z}from"./Input-C64oq2XC.js";import{S as ee}from"./Select-BZuMXyo3.js";import{S as te}from"./Switch-DzdsrY2K.js";import{I as Q}from"./InputNumber-C9LFNyJp.js";import"./icons-n88SZ_u-.js";import"./Icon-BGDem5mI.js";import"./VirtualList-DoIsak3W.js";const j=Symbol("form-context");function re(e){return e==null||e===""?"":Array.isArray(e)?e.join("."):String(e)}function ne(e,r){if(!e)return;if(!Array.isArray(r))return e[String(r)];let t=e;for(const a of r){if(t==null)return;t=t[String(a)]}return t}async function oe(e,r){for(const t of r){if(t.required&&(e==null||e===""))return t.message??"此字段为必填项";if(t.min!==void 0&&typeof e=="string"&&e.length<t.min)return t.message??`最少 ${t.min} 个字符`;if(t.max!==void 0&&typeof e=="string"&&e.length>t.max)return t.message??`最多 ${t.max} 个字符`;if(t.pattern&&!t.pattern.test(String(e??"")))return t.message??"格式不正确";if(t.type==="email"&&e&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e)))return t.message??"请输入有效的邮箱地址";if(t.validator)try{await t.validator(t,e)}catch(a){return(a==null?void 0:a.message)??String(a)??"验证失败"}}return null}function ae(){const e=G(j);return{validate:async r=>{if(!e)return!0;const t=r??Object.keys(e.rules);return(await Promise.all(t.map(n=>e.validateField(n)))).every(Boolean)},validateFields:async r=>{if(!e)return{};const t=r??Object.keys(e.rules);if((await Promise.all(t.map(n=>e.validateField(n)))).every(Boolean))return e.model;throw{values:e.model,errorFields:Object.entries(e.errors).map(([n,d])=>({name:n,errors:[d]}))}},resetFields:()=>{e&&Object.keys(e.errors).forEach(r=>e.clearError(r))},clearValidate:r=>{if(!e)return;(r??Object.keys(e.errors)).forEach(a=>e.clearError(a))},getFieldValue:r=>{var t;return(t=e==null?void 0:e.model)==null?void 0:t[r]},getFieldsValue:()=>(e==null?void 0:e.model)??{},setFieldValue:(r,t)=>{e!=null&&e.model&&(e.model[r]=t)},setFieldsValue:r=>{e!=null&&e.model&&Object.entries(r).forEach(([t,a])=>{e.model[t]=a})},getFieldsError:r=>e?(r??Object.keys(e.rules)).map(a=>({name:a,errors:e.errors[a]?[e.errors[a]]:[]})):[],getFieldError:r=>e!=null&&e.errors[r]?[e.errors[r]]:[],isFieldsTouched:(r,t=!1)=>{if(!e)return!1;const a=r??Object.keys(e.rules);return t?a.every(n=>e.touched[n]):a.some(n=>e.touched[n])},isFieldTouched:r=>(e==null?void 0:e.touched[r])??!1,isFieldsValidating:r=>!1,scrollToField:r=>{var n;const a=document.querySelector(`[data-field-name="${r}"]`)??document.querySelector(".hmfw-form-item-has-error");(n=a==null?void 0:a.scrollIntoView)==null||n.call(a,{block:"nearest",behavior:"smooth"})}}}const q=C({name:"Form",props:{model:Object,rules:Object,layout:{type:String,default:"horizontal"},labelCol:Object,wrapperCol:Object,colon:{type:Boolean,default:!0},labelAlign:{type:String,default:"right"},size:{type:String,default:"middle"},disabled:Boolean,scrollToFirstError:Boolean,validateTrigger:{type:[String,Array],default:"change"},requiredMark:{type:[Boolean,String],default:!0},preserve:{type:Boolean,default:!1}},emits:["finish","finishFailed","valuesChange"],setup(e,{slots:r,emit:t,expose:a}){const n=J("form"),d=B({}),f=B({}),v=async u=>{var z;const c=(z=e.rules)==null?void 0:z[u];if(!c)return!0;const F=Array.isArray(c)?c:[c],S=u.includes(".")?u.split("."):u,R=ne(e.model,S),_=await oe(R,F);if(_)return d.value={...d.value,[u]:_},!1;const U={...d.value};return delete U[u],d.value=U,!0},g=()=>{var c;const u=document.querySelector(`.${n}-item-has-error`);(c=u==null?void 0:u.scrollIntoView)==null||c.call(u,{block:"nearest",behavior:"smooth"})};W(j,{get model(){return e.model??{}},get rules(){return e.rules??{}},get layout(){return e.layout},get colon(){return e.colon},get labelAlign(){return e.labelAlign},get size(){return e.size},get disabled(){return e.disabled??!1},get labelCol(){return e.labelCol},get wrapperCol(){return e.wrapperCol},get validateTrigger(){return e.validateTrigger??"change"},get requiredMark(){return e.requiredMark??!0},get preserve(){return e.preserve??!1},get errors(){return d.value},get touched(){return f.value},setError:(u,c)=>{d.value={...d.value,[u]:c}},clearError:u=>{const c={...d.value};delete c[u],d.value=c},validateField:v,notifyValueChange:(u,c)=>{t("valuesChange",{[u]:c},e.model??{})},setFieldTouched:(u,c)=>{f.value={...f.value,[u]:c}}});const m=async()=>{const u=Object.keys(e.rules??{});(await Promise.all(u.map(v))).every(Boolean)?t("finish",e.model):(t("finishFailed",{values:e.model,errorFields:Object.entries(d.value).map(([S,R])=>({name:S,errors:[R]}))}),e.scrollToFirstError&&g())},i=u=>{u.preventDefault(),m()},w=async u=>{const c=u??Object.keys(e.rules??{});if((await Promise.all(c.map(v))).every(Boolean))return e.model;throw{values:e.model,errorFields:Object.entries(d.value).map(([S,R])=>({name:S,errors:[R]}))}},h=u=>{const c=u??Object.keys(d.value),F={...d.value};c.forEach(S=>{delete F[S]}),d.value=F};return a({validate:w,validateFields:w,clearValidate:h,resetFields:()=>h(),submit:m,scrollToField:u=>{var F;const c=document.querySelector(`[data-field-name="${u}"]`)??document.querySelector(`.${n}-item-has-error`);(F=c==null?void 0:c.scrollIntoView)==null||F.call(c,{block:"nearest",behavior:"smooth"})},getFieldsValue:()=>e.model??{},getFieldsError:u=>(u??Object.keys(e.rules??{})).map(F=>({name:F,errors:d.value[F]?[d.value[F]]:[]})),isFieldsTouched:(u,c=!1)=>{const F=u??Object.keys(e.rules??{});return c?F.every(S=>f.value[S]):F.some(S=>f.value[S])}}),()=>{var u;return o("form",{class:V(n,`${n}-${e.layout}`,{[`${n}-${e.size}`]:e.size!=="middle",[`${n}-hide-required-mark`]:e.requiredMark===!1}),onSubmit:i},[(u=r.default)==null?void 0:u.call(r)])}}});function M(e){if(!e)return;const r={};return e.span!==void 0&&(r.flex=`0 0 ${e.span/24*100}%`),e.offset!==void 0&&(r.marginLeft=`${e.offset/24*100}%`),r}const y=C({name:"FormItem",props:{name:[String,Number,Array],label:String,rules:[Object,Array],required:Boolean,colon:{type:Boolean,default:void 0},labelCol:Object,wrapperCol:Object,validateStatus:String,help:String,extra:String,hasFeedback:Boolean,noStyle:Boolean,hidden:Boolean,tooltip:String,validateTrigger:[String,Array]},setup(e,{slots:r}){const t=J("form"),a=G(j),n=x(()=>re(e.name)),d=x(()=>e.validateStatus==="error"&&e.help?e.help:n.value?a==null?void 0:a.errors[n.value]:void 0),f=x(()=>e.validateStatus?e.validateStatus:d.value?"error":""),v=x(()=>{if(e.required)return!0;const h=e.rules??(a==null?void 0:a.rules[n.value]);return h?(Array.isArray(h)?h:[h]).some(P=>P.required):!1}),g=x(()=>e.colon!==void 0?e.colon:(a==null?void 0:a.colon)??!0),m=x(()=>e.labelCol??(a==null?void 0:a.labelCol)),i=x(()=>e.wrapperCol??(a==null?void 0:a.wrapperCol)),w=x(()=>(a==null?void 0:a.layout)==="horizontal"||(a==null?void 0:a.layout)===void 0);return e.noStyle?()=>{var h;return(h=r.default)==null?void 0:h.call(r)}:e.hidden?()=>{var h;return o("div",{style:{display:"none"}},[(h=r.default)==null?void 0:h.call(r)])}:()=>{var u;const h=w.value?M(m.value):void 0,N=w.value?M(i.value):void 0,P=(a==null?void 0:a.requiredMark)==="optional"&&!v.value;return o("div",{class:V(`${t}-item`,{[`${t}-item-has-error`]:f.value==="error",[`${t}-item-has-warning`]:f.value==="warning",[`${t}-item-has-success`]:f.value==="success",[`${t}-item-required`]:v.value&&(a==null?void 0:a.requiredMark)!==!1})},[(e.label!==void 0||r.label)&&o("div",{class:`${t}-item-label`,style:h},[o("label",{class:V({[`${t}-item-no-colon`]:!g.value})},[r.label?r.label():e.label,e.tooltip&&o("span",{class:`${t}-item-tooltip`,title:e.tooltip},[b("ⓘ")]),P&&o("span",{class:`${t}-item-optional`},[b("（可选）")])])]),o("div",{class:`${t}-item-control`,style:N},[o("div",{class:`${t}-item-control-input`},[(u=r.default)==null?void 0:u.call(r)]),(d.value||e.help)&&o("div",{class:V(`${t}-item-explain`,{[`${t}-item-explain-error`]:f.value==="error",[`${t}-item-explain-warning`]:f.value==="warning",[`${t}-item-explain-success`]:f.value==="success"})},[d.value??e.help]),e.extra&&o("div",{class:`${t}-item-extra`},[e.extra])])])}}});q.Item=y;q.useForm=ae;const le={class:"form-advanced-api-demo"},de={key:0,style:{"margin-top":"16px",padding:"12px",background:"#f5f5f5","border-radius":"4px"}},se=C({__name:"FormAdvancedApi",setup(e){const r=B(),t=E({username:"",email:"",password:""}),a={username:[{required:!0,message:"请输入用户名"}],email:[{required:!0,message:"请输入邮箱"},{type:"email",message:"请输入有效的邮箱地址"}],password:[{required:!0,message:"请输入密码"},{min:6,message:"密码至少6个字符"}]},n=B(""),d=async()=>{var m;try{await((m=r.value)==null?void 0:m.validate()),n.value="✅ 表单验证通过"}catch(i){n.value=`❌ 表单验证失败
`+JSON.stringify(i,null,2)}},f=()=>{var i;const m=(i=r.value)==null?void 0:i.getFieldsError();n.value=`getFieldsError() 结果：
`+JSON.stringify(m,null,2)},v=()=>{var w,h;const m=(w=r.value)==null?void 0:w.isFieldsTouched(),i=(h=r.value)==null?void 0:h.isFieldsTouched(["username","email","password"],!0);n.value=`isFieldsTouched(): ${m}
isFieldsTouched(所有字段, true): ${i}`},g=()=>{var m;(m=r.value)==null||m.resetFields(),t.username="",t.email="",t.password="",n.value="表单已重置"};return(m,i)=>(T(),$("div",le,[i[8]||(i[8]=p("h4",null,"批量查询 API 演示",-1)),o(l(q),{ref_key:"formRef",ref:r,model:t,rules:a,layout:"vertical",style:{"max-width":"600px"}},{default:s(()=>[o(l(y),{label:"用户名",name:"username"},{default:s(()=>[o(l(k),{value:t.username,"onUpdate:value":i[0]||(i[0]=w=>t.username=w),placeholder:"请输入用户名"},null,8,["value"])]),_:1}),o(l(y),{label:"邮箱",name:"email"},{default:s(()=>[o(l(k),{value:t.email,"onUpdate:value":i[1]||(i[1]=w=>t.email=w),placeholder:"请输入邮箱"},null,8,["value"])]),_:1}),o(l(y),{label:"密码",name:"password"},{default:s(()=>[o(l(k),{value:t.password,"onUpdate:value":i[2]||(i[2]=w=>t.password=w),type:"password",placeholder:"请输入密码"},null,8,["value"])]),_:1}),o(l(y),null,{default:s(()=>[o(l(L),null,{default:s(()=>[o(l(I),{type:"primary",onClick:d},{default:s(()=>[...i[3]||(i[3]=[b(" 验证表单 ",-1)])]),_:1}),o(l(I),{onClick:f},{default:s(()=>[...i[4]||(i[4]=[b(" 获取错误 ",-1)])]),_:1}),o(l(I),{onClick:v},{default:s(()=>[...i[5]||(i[5]=[b(" 检查触摸状态 ",-1)])]),_:1}),o(l(I),{onClick:g},{default:s(()=>[...i[6]||(i[6]=[b(" 重置 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),n.value?(T(),$("div",de,[i[7]||(i[7]=p("h5",null,"输出结果：",-1)),p("pre",null,K(n.value),1)])):A("",!0)]))}}),ie=H(se,[["__scopeId","data-v-525d5a1b"]]),ue=`<template>
  <div class="form-advanced-api-demo">
    <h4>批量查询 API 演示</h4>
    <Form ref="formRef" :model="formState" :rules="rules" :layout="'vertical'" style="max-width: 600px">
      <FormItem label="用户名" name="username">
        <Input v-model:value="formState.username" placeholder="请输入用户名" />
      </FormItem>

      <FormItem label="邮箱" name="email">
        <Input v-model:value="formState.email" placeholder="请输入邮箱" />
      </FormItem>

      <FormItem label="密码" name="password">
        <Input v-model:value="formState.password" type="password" placeholder="请输入密码" />
      </FormItem>

      <FormItem>
        <Space>
          <Button type="primary" @click="handleValidate"> 验证表单 </Button>
          <Button @click="handleGetErrors"> 获取错误 </Button>
          <Button @click="handleCheckTouched"> 检查触摸状态 </Button>
          <Button @click="handleReset"> 重置 </Button>
        </Space>
      </FormItem>
    </Form>

    <div v-if="output" style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px">
      <h5>输出结果：</h5>
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Form, FormItem } from '../../../components/form'
import { Input } from '../../../components/input'
import { Button } from '../../../components/button'
import { Space } from '../../../components/space'

const formRef = ref()
const formState = reactive({
  username: '',
  email: '',
  password: '',
})

const rules = {
  username: [{ required: true, message: '请输入用户名' }],
  email: [
    { required: true, message: '请输入邮箱' },
    { type: 'email', message: '请输入有效的邮箱地址' },
  ],
  password: [
    { required: true, message: '请输入密码' },
    { min: 6, message: '密码至少6个字符' },
  ],
}

const output = ref('')

const handleValidate = async () => {
  try {
    await formRef.value?.validate()
    output.value = '✅ 表单验证通过'
  } catch (e) {
    output.value = '❌ 表单验证失败\\n' + JSON.stringify(e, null, 2)
  }
}

const handleGetErrors = () => {
  const errors = formRef.value?.getFieldsError()
  output.value = 'getFieldsError() 结果：\\n' + JSON.stringify(errors, null, 2)
}

const handleCheckTouched = () => {
  const touched = formRef.value?.isFieldsTouched()
  const allTouched = formRef.value?.isFieldsTouched(['username', 'email', 'password'], true)
  output.value = \`isFieldsTouched(): \${touched}\\nisFieldsTouched(所有字段, true): \${allTouched}\`
}

const handleReset = () => {
  formRef.value?.resetFields()
  formState.username = ''
  formState.email = ''
  formState.password = ''
  output.value = '表单已重置'
}
<\/script>

<style scoped>
.form-advanced-api-demo h4 {
  margin-bottom: 16px;
}

.form-advanced-api-demo h5 {
  margin: 0 0 8px 0;
}

.form-advanced-api-demo pre {
  margin: 0;
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
`,me=C({__name:"FormBasic",setup(e){const r=E({username:"",password:""}),t=n=>{console.log("表单提交：",n)},a=()=>{r.username="",r.password=""};return(n,d)=>(T(),O(l(q),{model:r,"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"480px"},onFinish:t},{default:s(()=>[o(l(y),{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"}]},{default:s(()=>[o(l(k),{value:r.username,"onUpdate:value":d[0]||(d[0]=f=>r.username=f),placeholder:"请输入用户名"},null,8,["value"])]),_:1}),o(l(y),{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}]},{default:s(()=>[o(l(Z),{value:r.password,"onUpdate:value":d[1]||(d[1]=f=>r.password=f),placeholder:"请输入密码"},null,8,["value"])]),_:1}),o(l(y),{"wrapper-col":{offset:6,span:18}},{default:s(()=>[o(l(I),{type:"primary","html-type":"submit"},{default:s(()=>[...d[2]||(d[2]=[b(" 提交 ",-1)])]),_:1}),o(l(I),{style:{"margin-left":"8px"},onClick:a},{default:s(()=>[...d[3]||(d[3]=[b(" 重置 ",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),ce=`<template>
  <Form
    :model="formState"
    :label-col="{ span: 6 }"
    :wrapper-col="{ span: 18 }"
    style="max-width: 480px"
    @finish="handleFinish"
  >
    <FormItem label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名' }]">
      <Input v-model:value="formState.username" placeholder="请输入用户名" />
    </FormItem>
    <FormItem label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
      <InputPassword v-model:value="formState.password" placeholder="请输入密码" />
    </FormItem>
    <FormItem :wrapper-col="{ offset: 6, span: 18 }">
      <Button type="primary" html-type="submit"> 提交 </Button>
      <Button style="margin-left: 8px" @click="handleReset"> 重置 </Button>
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
`,fe={class:"form-dependency-demo"},pe={key:0,style:{"margin-top":"16px",padding:"12px",background:"#f0f9ff","border-radius":"4px",border:"1px solid #91d5ff"}},ve=C({__name:"FormDependency",setup(e){const r=B(),t=E({contactType:"email",contact:"",password:"",confirmPassword:"",needNotify:!1,notifyEmail:""}),a=[{value:"email",label:"邮箱"},{value:"phone",label:"手机号"}],n=B(""),d=x(()=>({contactType:[{required:!0,message:"请选择联系方式类型"}],contact:[{required:!0,message:"请输入联系方式"},t.contactType==="email"?{type:"email",message:"请输入有效的邮箱地址"}:{pattern:/^1[3-9]\d{9}$/,message:"请输入有效的手机号"}],password:[{required:!0,message:"请输入密码"},{min:6,message:"密码至少6个字符"}],confirmPassword:[{required:!0,message:"请确认密码"},{validator:(g,m)=>m&&m!==t.password?Promise.reject("两次输入的密码不一致"):Promise.resolve()}],notifyEmail:t.needNotify?[{required:!0,message:"请输入通知邮箱"},{type:"email",message:"请输入有效的邮箱地址"}]:[]}));D(()=>t.password,()=>{var g;t.confirmPassword&&((g=r.value)==null||g.validateFields(["confirmPassword"]).catch(()=>{}))}),D(()=>t.contactType,()=>{t.contact="",r.value&&r.value.clearValidate(["contact"])});const f=async()=>{var g;try{await((g=r.value)==null?void 0:g.validate()),n.value=`✅ 提交成功！
`+JSON.stringify(t,null,2)}catch{n.value="❌ 验证失败，请检查表单"}},v=()=>{var g;(g=r.value)==null||g.resetFields(),t.contactType="email",t.contact="",t.password="",t.confirmPassword="",t.needNotify=!1,t.notifyEmail="",n.value=""};return(g,m)=>(T(),$("div",fe,[m[8]||(m[8]=p("h4",null,"表单联动场景演示",-1)),o(l(q),{ref_key:"formRef",ref:r,model:t,rules:d.value,layout:"vertical",style:{"max-width":"600px"}},{default:s(()=>[o(l(y),{label:"联系方式类型",name:"contactType"},{default:s(()=>[o(l(ee),{value:t.contactType,"onUpdate:value":m[0]||(m[0]=i=>t.contactType=i),options:a,placeholder:"请选择"},null,8,["value"])]),_:1}),o(l(y),{label:t.contactType==="email"?"邮箱地址":"手机号码",name:"contact"},{default:s(()=>[o(l(k),{value:t.contact,"onUpdate:value":m[1]||(m[1]=i=>t.contact=i),placeholder:t.contactType==="email"?"请输入邮箱":"请输入手机号"},null,8,["value","placeholder"])]),_:1},8,["label"]),o(l(y),{label:"密码",name:"password"},{default:s(()=>[o(l(k),{value:t.password,"onUpdate:value":m[2]||(m[2]=i=>t.password=i),type:"password",placeholder:"请输入密码"},null,8,["value"])]),_:1}),o(l(y),{label:"确认密码",name:"confirmPassword"},{default:s(()=>[o(l(k),{value:t.confirmPassword,"onUpdate:value":m[3]||(m[3]=i=>t.confirmPassword=i),type:"password",placeholder:"请再次输入密码"},null,8,["value"])]),_:1}),o(l(y),{label:"是否需要通知",name:"needNotify"},{default:s(()=>[o(l(te),{checked:t.needNotify,"onUpdate:checked":m[4]||(m[4]=i=>t.needNotify=i)},null,8,["checked"])]),_:1}),t.needNotify?(T(),O(l(y),{key:0,label:"通知邮箱",name:"notifyEmail"},{default:s(()=>[o(l(k),{value:t.notifyEmail,"onUpdate:value":m[5]||(m[5]=i=>t.notifyEmail=i),placeholder:"请输入通知邮箱"},null,8,["value"])]),_:1})):A("",!0),o(l(y),null,{default:s(()=>[o(l(L),null,{default:s(()=>[o(l(I),{type:"primary",onClick:f},{default:s(()=>[...m[6]||(m[6]=[b(" 提交 ",-1)])]),_:1}),o(l(I),{onClick:v},{default:s(()=>[...m[7]||(m[7]=[b(" 重置 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"]),n.value?(T(),$("div",pe,[p("pre",null,K(n.value),1)])):A("",!0)]))}}),ge=H(ve,[["__scopeId","data-v-b817525b"]]),ye=`<template>
  <div class="form-dependency-demo">
    <h4>表单联动场景演示</h4>

    <Form ref="formRef" :model="formState" :rules="rules" :layout="'vertical'" style="max-width: 600px">
      <FormItem label="联系方式类型" name="contactType">
        <Select v-model:value="formState.contactType" :options="contactTypeOptions" placeholder="请选择" />
      </FormItem>

      <FormItem :label="formState.contactType === 'email' ? '邮箱地址' : '手机号码'" name="contact">
        <Input
          v-model:value="formState.contact"
          :placeholder="formState.contactType === 'email' ? '请输入邮箱' : '请输入手机号'"
        />
      </FormItem>

      <FormItem label="密码" name="password">
        <Input v-model:value="formState.password" type="password" placeholder="请输入密码" />
      </FormItem>

      <FormItem label="确认密码" name="confirmPassword">
        <Input v-model:value="formState.confirmPassword" type="password" placeholder="请再次输入密码" />
      </FormItem>

      <FormItem label="是否需要通知" name="needNotify">
        <Switch v-model:checked="formState.needNotify" />
      </FormItem>

      <FormItem v-if="formState.needNotify" label="通知邮箱" name="notifyEmail">
        <Input v-model:value="formState.notifyEmail" placeholder="请输入通知邮箱" />
      </FormItem>

      <FormItem>
        <Space>
          <Button type="primary" @click="handleSubmit"> 提交 </Button>
          <Button @click="handleReset"> 重置 </Button>
        </Space>
      </FormItem>
    </Form>

    <div
      v-if="result"
      style="margin-top: 16px; padding: 12px; background: #f0f9ff; border-radius: 4px; border: 1px solid #91d5ff"
    >
      <pre>{{ result }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import { Form, FormItem } from '../../../components/form'
import { Input } from '../../../components/input'
import { Button } from '../../../components/button'
import { Space } from '../../../components/space'
import { Select } from '../../../components/select'
import { Switch } from '../../../components/switch'

const formRef = ref()
const formState = reactive({
  contactType: 'email',
  contact: '',
  password: '',
  confirmPassword: '',
  needNotify: false,
  notifyEmail: '',
})

const contactTypeOptions = [
  { value: 'email', label: '邮箱' },
  { value: 'phone', label: '手机号' },
]

const result = ref('')

// 动态规则：根据联系方式类型切换验证规则
const rules = computed(() => ({
  contactType: [{ required: true, message: '请选择联系方式类型' }],
  contact: [
    { required: true, message: '请输入联系方式' },
    formState.contactType === 'email'
      ? { type: 'email' as const, message: '请输入有效的邮箱地址' }
      : { pattern: /^1[3-9]\\d{9}$/, message: '请输入有效的手机号' },
  ],
  password: [
    { required: true, message: '请输入密码' },
    { min: 6, message: '密码至少6个字符' },
  ],
  confirmPassword: [
    { required: true, message: '请确认密码' },
    {
      validator: (_rule: any, value: any) => {
        if (value && value !== formState.password) {
          return Promise.reject('两次输入的密码不一致')
        }
        return Promise.resolve()
      },
    },
  ],
  notifyEmail: formState.needNotify
    ? [
        { required: true, message: '请输入通知邮箱' },
        { type: 'email' as const, message: '请输入有效的邮箱地址' },
      ]
    : [],
}))

// 监听密码变化，自动重新验证确认密码
watch(
  () => formState.password,
  () => {
    if (formState.confirmPassword) {
      formRef.value?.validateFields(['confirmPassword']).catch(() => {})
    }
  },
)

// 监听联系方式类型变化，清空联系方式输入并重新验证
watch(
  () => formState.contactType,
  () => {
    formState.contact = ''
    if (formRef.value) {
      formRef.value.clearValidate(['contact'])
    }
  },
)

const handleSubmit = async () => {
  try {
    await formRef.value?.validate()
    result.value = '✅ 提交成功！\\n' + JSON.stringify(formState, null, 2)
  } catch (e) {
    result.value = '❌ 验证失败，请检查表单'
  }
}

const handleReset = () => {
  formRef.value?.resetFields()
  formState.contactType = 'email'
  formState.contact = ''
  formState.password = ''
  formState.confirmPassword = ''
  formState.needNotify = false
  formState.notifyEmail = ''
  result.value = ''
}
<\/script>

<style scoped>
.form-dependency-demo h4 {
  margin-bottom: 16px;
}

.form-dependency-demo pre {
  margin: 0;
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
`,he=C({__name:"FormInline",setup(e){const r=E({name:"",age:null}),t=a=>{console.log("搜索：",a)};return(a,n)=>(T(),O(l(q),{model:r,layout:"inline",onFinish:t},{default:s(()=>[o(l(y),{label:"姓名",name:"name"},{default:s(()=>[o(l(k),{value:r.name,"onUpdate:value":n[0]||(n[0]=d=>r.name=d),placeholder:"请输入姓名"},null,8,["value"])]),_:1}),o(l(y),{label:"年龄",name:"age"},{default:s(()=>[o(l(Q),{value:r.age,"onUpdate:value":n[1]||(n[1]=d=>r.age=d),placeholder:"年龄",style:{width:"100px"}},null,8,["value"])]),_:1}),o(l(y),null,{default:s(()=>[o(l(I),{type:"primary","html-type":"submit"},{default:s(()=>[...n[2]||(n[2]=[b(" 搜索 ",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),be=`<template>
  <Form :model="formState" layout="inline" @finish="handleSearch">
    <FormItem label="姓名" name="name">
      <Input v-model:value="formState.name" placeholder="请输入姓名" />
    </FormItem>
    <FormItem label="年龄" name="age">
      <InputNumber v-model:value="formState.age" placeholder="年龄" style="width: 100px" />
    </FormItem>
    <FormItem>
      <Button type="primary" html-type="submit"> 搜索 </Button>
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
`,Fe=C({__name:"FormValidation",setup(e){const r=B(),t=E({email:"",phone:"",age:null}),a={email:[{required:!0,message:"请输入邮箱"},{type:"email",message:"请输入有效的邮箱地址"}],phone:[{required:!0,message:"请输入手机号"},{pattern:/^1[3-9]\d{9}$/,message:"请输入有效的手机号"}],age:[{required:!0,message:"请输入年龄"}]},n=async()=>{var f;try{await((f=r.value)==null?void 0:f.validate()),console.log("校验通过")}catch(v){console.log("校验失败：",v)}},d=()=>{var f;(f=r.value)==null||f.clearValidate()};return(f,v)=>(T(),O(l(q),{ref_key:"formRef",ref:r,model:t,rules:a,"label-col":{span:5},"wrapper-col":{span:19},style:{"max-width":"480px"}},{default:s(()=>[o(l(y),{label:"邮箱",name:"email"},{default:s(()=>[o(l(k),{value:t.email,"onUpdate:value":v[0]||(v[0]=g=>t.email=g),placeholder:"请输入邮箱"},null,8,["value"])]),_:1}),o(l(y),{label:"手机号",name:"phone"},{default:s(()=>[o(l(k),{value:t.phone,"onUpdate:value":v[1]||(v[1]=g=>t.phone=g),placeholder:"请输入手机号"},null,8,["value"])]),_:1}),o(l(y),{label:"年龄",name:"age"},{default:s(()=>[o(l(Q),{value:t.age,"onUpdate:value":v[2]||(v[2]=g=>t.age=g),min:1,max:120,placeholder:"请输入年龄",style:{width:"100%"}},null,8,["value"])]),_:1}),o(l(y),{"wrapper-col":{offset:5,span:19}},{default:s(()=>[o(l(I),{type:"primary",onClick:n},{default:s(()=>[...v[3]||(v[3]=[b(" 校验 ",-1)])]),_:1}),o(l(I),{style:{"margin-left":"8px"},onClick:d},{default:s(()=>[...v[4]||(v[4]=[b(" 清除校验 ",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),we=`<template>
  <Form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 19 }"
    style="max-width: 480px"
  >
    <FormItem label="邮箱" name="email">
      <Input v-model:value="formState.email" placeholder="请输入邮箱" />
    </FormItem>
    <FormItem label="手机号" name="phone">
      <Input v-model:value="formState.phone" placeholder="请输入手机号" />
    </FormItem>
    <FormItem label="年龄" name="age">
      <InputNumber v-model:value="formState.age" :min="1" :max="120" placeholder="请输入年龄" style="width: 100%" />
    </FormItem>
    <FormItem :wrapper-col="{ offset: 5, span: 19 }">
      <Button type="primary" @click="handleValidate"> 校验 </Button>
      <Button style="margin-left: 8px" @click="handleClear"> 清除校验 </Button>
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
  age: [{ required: true, message: '请输入年龄' }],
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
`,Se={class:"markdown-body"},Ve={__name:"form",setup(e,{expose:r}){return r({frontmatter:{}}),(a,n)=>{const d=X("DemoBlock");return T(),$("div",Se,[n[0]||(n[0]=p("h1",{id:"form-",tabindex:"-1"},"Form 表单",-1)),n[1]||(n[1]=p("p",null,"高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。",-1)),n[2]||(n[2]=p("h2",{id:"",tabindex:"-1"},"何时使用",-1)),n[3]||(n[3]=p("ul",null,[p("li",null,"用于创建一个实体或收集信息。"),p("li",null,"需要对输入的数据类型进行校验时。")],-1)),n[4]||(n[4]=p("h2",{id:"-1",tabindex:"-1"},"代码演示",-1)),n[5]||(n[5]=p("h3",{id:"-2",tabindex:"-1"},"基础表单",-1)),n[6]||(n[6]=p("p",null,"基本的表单数据域控制展示，包含布局、初始化、验证、提交。",-1)),o(d,{title:"基础表单",source:l(ce)},{default:s(()=>[o(me)]),_:1},8,["source"]),n[7]||(n[7]=p("h3",{id:"-3",tabindex:"-1"},"表单校验",-1)),n[8]||(n[8]=p("p",null,[b("Form 组件提供了表单验证的功能，只需为 FormItem 设置 "),p("code",null,"rules"),b(" 属性即可。")],-1)),o(d,{title:"表单校验",source:l(we)},{default:s(()=>[o(Fe)]),_:1},8,["source"]),n[9]||(n[9]=p("h3",{id:"-4",tabindex:"-1"},"内联表单",-1)),n[10]||(n[10]=p("p",null,"内联排列表单项。",-1)),o(d,{title:"内联表单",source:l(be)},{default:s(()=>[o(he)]),_:1},8,["source"]),n[11]||(n[11]=p("h3",{id:"-api-",tabindex:"-1"},"高级 API 演示",-1)),n[12]||(n[12]=p("p",null,[b("展示 Form 的高级查询 API："),p("code",null,"getFieldsError"),b("、"),p("code",null,"isFieldsTouched"),b(" 等批量查询方法。")],-1)),o(d,{title:"高级 API",source:l(ue)},{default:s(()=>[o(ie)]),_:1},8,["source"]),n[13]||(n[13]=p("h3",{id:"-5",tabindex:"-1"},"表单联动",-1)),n[14]||(n[14]=p("p",null,"展示字段之间的依赖关系和动态验证规则。",-1)),o(d,{title:"表单联动",source:l(ye)},{default:s(()=>[o(ge)]),_:1},8,["source"]),n[15]||(n[15]=Y('<h2 id="api" tabindex="-1">API</h2><h3 id="form-props" tabindex="-1">Form Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td>表单数据对象</td><td><code>object</code></td><td>-</td></tr><tr><td>rules</td><td>表单验证规则</td><td><code>Record&lt;string, FormRule | FormRule[]&gt;</code></td><td>-</td></tr><tr><td>layout</td><td>表单布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39; | &#39;inline&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>labelCol</td><td>label 标签布局，同 Col 组件</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>wrapperCol</td><td>输入控件布局样式</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>labelAlign</td><td>label 文本对齐方式</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td><code>&#39;right&#39;</code></td></tr><tr><td>colon</td><td>是否显示 label 后面的冒号（仅 horizontal 布局有效）</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>设置表单组件禁用，仅对 ant-design-hmfw 组件有效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>设置字段组件的尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>validateTrigger</td><td>统一设置字段触发验证的时机</td><td><code>&#39;blur&#39; | &#39;change&#39; | (&#39;blur&#39; | &#39;change&#39;)[]</code></td><td><code>&#39;change&#39;</code></td></tr><tr><td>requiredMark</td><td>必选样式：<code>true</code> 显示星号，<code>false</code> 不显示，<code>&#39;optional&#39;</code> 反向标注「可选」</td><td><code>boolean | &#39;optional&#39;</code></td><td><code>true</code></td></tr><tr><td>scrollToFirstError</td><td>提交失败自动滚动到第一个错误字段</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>preserve</td><td>字段卸载时是否保留字段值</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>label 标签的文本</td><td><code>string</code></td><td>-</td></tr><tr><td>name</td><td>字段名，支持数组（嵌套字段）</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>rules</td><td>校验规则，设置字段的校验逻辑</td><td><code>FormRule | FormRule[]</code></td><td>-</td></tr><tr><td>required</td><td>必填样式设置。如不设置，则会根据校验规则自动生成</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>validateStatus</td><td>校验状态</td><td><code>&#39;success&#39; | &#39;warning&#39; | &#39;error&#39; | &#39;validating&#39; | &#39;&#39;</code></td><td>-</td></tr><tr><td>help</td><td>提示信息，如不设置，则会根据校验规则自动生成</td><td><code>string</code></td><td>-</td></tr><tr><td>extra</td><td>额外的提示信息</td><td><code>string</code></td><td>-</td></tr><tr><td>labelCol</td><td>label 标签布局，优先级高于 Form 的 labelCol</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>wrapperCol</td><td>输入控件布局样式，优先级高于 Form 的 wrapperCol</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>validateTrigger</td><td>设置字段校验的时机</td><td><code>&#39;blur&#39; | &#39;change&#39; | (&#39;blur&#39; | &#39;change&#39;)[]</code></td><td>继承自 Form</td></tr><tr><td>tooltip</td><td>配置提示信息（鼠标悬停 ⓘ 图标显示）</td><td><code>string</code></td><td>-</td></tr><tr><td>noStyle</td><td>为 true 时不带样式，作为纯字段控件使用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>hidden</td><td>是否隐藏字段（依然会收集和校验字段）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>colon</td><td>配合 label 属性，覆盖 Form 的 colon</td><td><code>boolean</code></td><td>继承自 Form</td></tr></tbody></table><h3 id="formrule" tabindex="-1">FormRule</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>required</td><td>是否必填</td><td><code>boolean</code></td></tr><tr><td>message</td><td>校验失败时的提示信息</td><td><code>string</code></td></tr><tr><td>type</td><td>类型，常见有 <code>string</code> <code>number</code> <code>email</code> <code>url</code></td><td><code>string</code></td></tr><tr><td>min</td><td>最小长度（string）或最小值（number）</td><td><code>number</code></td></tr><tr><td>max</td><td>最大长度（string）或最大值（number）</td><td><code>number</code></td></tr><tr><td>pattern</td><td>正则表达式校验</td><td><code>RegExp</code></td></tr><tr><td>validator</td><td>自定义校验函数</td><td><code>(rule: FormRule, value: any) =&gt; Promise&lt;void&gt;</code></td></tr></tbody></table><h3 id="form--ref-" tabindex="-1">Form 方法（通过 ref 调用）</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>validate</td><td>触发表单验证；成功 resolve 模型，失败 reject <code>{ values, errorFields }</code></td><td><code>(nameList?: string[]) =&gt; Promise&lt;values&gt;</code></td></tr><tr><td>validateFields</td><td><code>validate</code> 的别名（AntD 一致）</td><td><code>(nameList?: string[]) =&gt; Promise&lt;values&gt;</code></td></tr><tr><td>clearValidate</td><td>清理某些字段的校验信息</td><td><code>(nameList?: string[]) =&gt; void</code></td></tr><tr><td>resetFields</td><td>重置一组字段的校验信息</td><td><code>() =&gt; void</code></td></tr><tr><td>submit</td><td>触发表单提交，效果等同 <code>&lt;button type=&quot;submit&quot;&gt;</code></td><td><code>() =&gt; void</code></td></tr><tr><td>getFieldsValue</td><td>取当前表单全部字段值</td><td><code>() =&gt; object</code></td></tr><tr><td>getFieldsError</td><td>获取所有字段的错误信息</td><td><code>(nameList?: string[]) =&gt; { name: string, errors: string[] }[]</code></td></tr><tr><td>isFieldsTouched</td><td>检查字段是否被用户操作过</td><td><code>(nameList?: string[], allTouched?: boolean) =&gt; boolean</code></td></tr><tr><td>scrollToField</td><td>滚动到指定字段位置</td><td><code>(name: string) =&gt; void</code></td></tr></tbody></table><h3 id="form-events" tabindex="-1">Form Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>finish</td><td>提交表单且数据验证成功后触发</td><td><code>(values) =&gt; void</code></td></tr><tr><td>finishFailed</td><td>提交表单且数据验证失败后触发</td><td><code>({ values, errorFields }) =&gt; void</code></td></tr><tr><td>valuesChange</td><td>字段值更新时触发（需在控件中显式调用 ctx.notifyValueChange，详见说明）</td><td><code>(changedValues, allValues) =&gt; void</code></td></tr></tbody></table><h3 id="form-slots" tabindex="-1">Form Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>表单内容</td></tr></tbody></table><h3 id="formitem-slots" tabindex="-1">FormItem Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>表单控件</td></tr><tr><td>label</td><td>自定义 label 内容</td></tr></tbody></table>',15))])}}};export{Ve as default};
