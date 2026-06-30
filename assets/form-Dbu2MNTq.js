import{B as I}from"./Button-1ex4Sfix.js";import{S as H}from"./Space-Bkm2b3xd.js";import{o as T,O as W,q as Q,n as o,m as h,f as C,E as B,B as Z,A as q,k as P,h as i,L as l,Q as r,K as X,j as U,D as $,_ as z,i as _,P as G,H as ee,l as te}from"./index-CEDKhEzr.js";import{c as E}from"./cls-S9IiI6wd.js";import{I as F,a as ne}from"./Input-CQrnS-8B.js";import{S as ae}from"./Select-BEiAeFib.js";import{S as se}from"./Switch-BKhPOfAY.js";import{I as Y}from"./InputNumber-DMDr4X6a.js";import"./LoadingOutlined-hrD8In55.js";import"./CloseOutlined-BlUYSe2f.js";import"./SearchOutlined-Db2Fdkg-.js";import"./DownOutlined-BVXNUlD5.js";import"./Trigger-C6BCQff1.js";import"./VirtualList-Ca_xQulB.js";const D=Symbol("form-context");function oe(e){return e==null||e===""?"":Array.isArray(e)?e.join("."):String(e)}function le(e,n){if(!e)return;if(!Array.isArray(n))return e[String(n)];let t=e;for(const s of n){if(t==null)return;t=t[String(s)]}return t}async function re(e,n){for(const t of n){if(t.required&&(e==null||e===""))return t.message??"此字段为必填项";if(t.min!==void 0&&typeof e=="string"&&e.length<t.min)return t.message??`最少 ${t.min} 个字符`;if(t.max!==void 0&&typeof e=="string"&&e.length>t.max)return t.message??`最多 ${t.max} 个字符`;if(t.pattern&&!t.pattern.test(String(e??"")))return t.message??"格式不正确";if(t.type==="email"&&e&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e)))return t.message??"请输入有效的邮箱地址";if(t.validator)try{await t.validator(t,e)}catch(s){return(s==null?void 0:s.message)??String(s)??"验证失败"}}return null}function de(){const e=Q(D,void 0);return{validate:async n=>{if(!e)return!0;const t=n??Object.keys(e.rules);return(await Promise.all(t.map(a=>e.validateField(a)))).every(Boolean)},validateFields:async n=>{if(!e)return{};const t=n??Object.keys(e.rules);if((await Promise.all(t.map(a=>e.validateField(a)))).every(Boolean))return e.model;throw{values:e.model,errorFields:Object.entries(e.errors).map(([a,d])=>({name:a,errors:[d]}))}},resetFields:()=>{e&&Object.keys(e.errors).forEach(n=>e.clearError(n))},clearValidate:n=>{if(!e)return;(n??Object.keys(e.errors)).forEach(s=>e.clearError(s))},getFieldValue:n=>{var t;return(t=e==null?void 0:e.model)==null?void 0:t[n]},getFieldsValue:()=>(e==null?void 0:e.model)??{},setFieldValue:(n,t)=>{e!=null&&e.model&&(e.model[n]=t)},setFieldsValue:n=>{e!=null&&e.model&&Object.entries(n).forEach(([t,s])=>{e.model[t]=s})},getFieldsError:n=>e?(n??Object.keys(e.rules)).map(s=>({name:s,errors:e.errors[s]?[e.errors[s]]:[]})):[],getFieldError:n=>e!=null&&e.errors[n]?[e.errors[n]]:[],isFieldsTouched:(n,t=!1)=>{if(!e)return!1;const s=n??Object.keys(e.rules);return t?s.every(a=>e.touched[a]):s.some(a=>e.touched[a])},isFieldTouched:n=>(e==null?void 0:e.touched[n])??!1,isFieldsValidating:n=>!1,scrollToField:n=>{var a;const s=document.querySelector(`[data-field-name="${n}"]`)??document.querySelector(".hmfw-form-item-has-error");(a=s==null?void 0:s.scrollIntoView)==null||a.call(s,{block:"nearest",behavior:"smooth"})}}}const S=T({name:"Form",props:{model:Object,rules:Object,layout:{type:String,default:"horizontal"},labelCol:Object,wrapperCol:Object,colon:{type:Boolean,default:!0},labelAlign:{type:String,default:"right"},size:{type:String,default:"middle"},disabled:Boolean,scrollToFirstError:Boolean,validateTrigger:{type:[String,Array],default:"change"},requiredMark:{type:[Boolean,String],default:!0},preserve:{type:Boolean,default:!1},classNames:Object,styles:Object},emits:["finish","finishFailed","valuesChange"],setup(e,{slots:n,emit:t,expose:s}){const a=W("form"),d=B({}),g=B({}),v=async u=>{var O;const p=(O=e.rules)==null?void 0:O[u];if(!p)return!0;const y=Array.isArray(p)?p:[p],x=u.includes(".")?u.split("."):u,N=le(e.model,x),R=await re(N,y);if(R)return d.value={...d.value,[u]:R},!1;const A={...d.value};return delete A[u],d.value=A,!0},b=()=>{var p;const u=document.querySelector(`.${a}-item-has-error`);(p=u==null?void 0:u.scrollIntoView)==null||p.call(u,{block:"nearest",behavior:"smooth"})};Z(D,{get model(){return e.model??{}},get rules(){return e.rules??{}},get layout(){return e.layout},get colon(){return e.colon},get labelAlign(){return e.labelAlign},get size(){return e.size},get disabled(){return e.disabled??!1},get labelCol(){return e.labelCol},get wrapperCol(){return e.wrapperCol},get validateTrigger(){return e.validateTrigger??"change"},get requiredMark(){return e.requiredMark??!0},get preserve(){return e.preserve??!1},get errors(){return d.value},get touched(){return g.value},setError:(u,p)=>{d.value={...d.value,[u]:p}},clearError:u=>{const p={...d.value};delete p[u],d.value=p},validateField:v,notifyValueChange:(u,p)=>{t("valuesChange",{[u]:p},e.model??{})},setFieldTouched:(u,p)=>{g.value={...g.value,[u]:p}}});const c=async()=>{const u=Object.keys(e.rules??{});(await Promise.all(u.map(v))).every(Boolean)?t("finish",e.model):(t("finishFailed",{values:e.model,errorFields:Object.entries(d.value).map(([x,N])=>({name:x,errors:[N]}))}),e.scrollToFirstError&&b())},m=u=>{u.preventDefault(),c()},w=async u=>{const p=u??Object.keys(e.rules??{});if((await Promise.all(p.map(v))).every(Boolean))return e.model;throw{values:e.model,errorFields:Object.entries(d.value).map(([x,N])=>({name:x,errors:[N]}))}},k=u=>{const p=u??Object.keys(d.value),y={...d.value};p.forEach(x=>{delete y[x]}),d.value=y};return s({validate:w,validateFields:w,clearValidate:k,resetFields:()=>k(),submit:c,scrollToField:u=>{var y;const p=document.querySelector(`[data-field-name="${u}"]`)??document.querySelector(`.${a}-item-has-error`);(y=p==null?void 0:p.scrollIntoView)==null||y.call(p,{block:"nearest",behavior:"smooth"})},getFieldsValue:()=>e.model??{},getFieldsError:u=>(u??Object.keys(e.rules??{})).map(y=>({name:y,errors:d.value[y]?[d.value[y]]:[]})),isFieldsTouched:(u,p=!1)=>{const y=u??Object.keys(e.rules??{});return p?y.every(x=>g.value[x]):y.some(x=>g.value[x])}}),()=>{var u,p,y;return o("form",{class:E(a,`${a}-${e.layout}`,{[`${a}-${e.size}`]:e.size!=="middle",[`${a}-hide-required-mark`]:e.requiredMark===!1},(u=e.classNames)==null?void 0:u.root),style:(p=e.styles)==null?void 0:p.root,onSubmit:m},[(y=n.default)==null?void 0:y.call(n)])}}});function K(e){if(!e)return;const n={};return e.span!==void 0&&(n.flex=`0 0 ${e.span/24*100}%`),e.offset!==void 0&&(n.marginLeft=`${e.offset/24*100}%`),n}const f=T({name:"FormItem",props:{name:[String,Number,Array],label:String,rules:[Object,Array],required:Boolean,colon:{type:Boolean,default:void 0},labelCol:Object,wrapperCol:Object,validateStatus:String,help:String,extra:String,hasFeedback:Boolean,noStyle:Boolean,hidden:Boolean,tooltip:String,validateTrigger:[String,Array],classNames:Object,styles:Object},setup(e,{slots:n}){const t=W("form"),s=Q(D,void 0),a=C(()=>oe(e.name)),d=C(()=>e.validateStatus==="error"&&e.help?e.help:a.value?s==null?void 0:s.errors[a.value]:void 0),g=C(()=>e.validateStatus?e.validateStatus:d.value?"error":""),v=C(()=>{if(e.required)return!0;const k=e.rules??(s==null?void 0:s.rules[a.value]);return k?(Array.isArray(k)?k:[k]).some(V=>V.required):!1}),b=C(()=>e.colon!==void 0?e.colon:(s==null?void 0:s.colon)??!0),c=C(()=>e.labelCol??(s==null?void 0:s.labelCol)),m=C(()=>e.wrapperCol??(s==null?void 0:s.wrapperCol)),w=C(()=>(s==null?void 0:s.layout)==="horizontal"||(s==null?void 0:s.layout)===void 0);return e.noStyle?()=>{var k;return(k=n.default)==null?void 0:k.call(n)}:e.hidden?()=>{var k;return o("div",{style:{display:"none"}},[(k=n.default)==null?void 0:k.call(n)])}:()=>{var u,p,y,x,N,R,A,O,L,M,J;const k=w.value?K(c.value):void 0,j=w.value?K(m.value):void 0,V=(s==null?void 0:s.requiredMark)==="optional"&&!v.value;return o("div",{class:E(`${t}-item`,{[`${t}-item-has-error`]:g.value==="error",[`${t}-item-has-warning`]:g.value==="warning",[`${t}-item-has-success`]:g.value==="success",[`${t}-item-required`]:v.value&&(s==null?void 0:s.requiredMark)!==!1},(u=e.classNames)==null?void 0:u.root),style:(p=e.styles)==null?void 0:p.root},[(e.label!==void 0||n.label)&&o("div",{class:E(`${t}-item-label`,(y=e.classNames)==null?void 0:y.label),style:{...k,...(x=e.styles)==null?void 0:x.label}},[o("label",{class:E({[`${t}-item-no-colon`]:!b.value})},[n.label?n.label():e.label,e.tooltip&&o("span",{class:`${t}-item-tooltip`,title:e.tooltip},[h("ⓘ")]),V&&o("span",{class:`${t}-item-optional`},[h("（可选）")])])]),o("div",{class:E(`${t}-item-control`,(N=e.classNames)==null?void 0:N.control),style:{...j,...(R=e.styles)==null?void 0:R.control}},[o("div",{class:`${t}-item-control-input`},[(A=n.default)==null?void 0:A.call(n)]),(d.value||e.help)&&o("div",{class:E(`${t}-item-explain`,{[`${t}-item-explain-error`]:g.value==="error",[`${t}-item-explain-warning`]:g.value==="warning",[`${t}-item-explain-success`]:g.value==="success"},(O=e.classNames)==null?void 0:O.feedback),style:(L=e.styles)==null?void 0:L.feedback},[d.value??e.help]),e.extra&&o("div",{class:E(`${t}-item-extra`,(M=e.classNames)==null?void 0:M.extra),style:(J=e.styles)==null?void 0:J.extra},[e.extra])])])}}});S.Item=f;S.useForm=de;const me={class:"form-advanced-api-demo"},ie={key:0,style:{"margin-top":"16px",padding:"12px",background:"#f5f5f5","border-radius":"4px"}},ue=T({__name:"FormAdvancedApi",setup(e){const n=B(),t=$({username:"",email:"",password:""}),s={username:[{required:!0,message:"请输入用户名"}],email:[{required:!0,message:"请输入邮箱"},{type:"email",message:"请输入有效的邮箱地址"}],password:[{required:!0,message:"请输入密码"},{min:6,message:"密码至少6个字符"}]},a=B(""),d=async()=>{var c;try{await((c=n.value)==null?void 0:c.validate()),a.value="✅ 表单验证通过"}catch(m){a.value=`❌ 表单验证失败
`+JSON.stringify(m,null,2)}},g=()=>{var m;const c=(m=n.value)==null?void 0:m.getFieldsError();a.value=`getFieldsError() 结果：
`+JSON.stringify(c,null,2)},v=()=>{var w,k;const c=(w=n.value)==null?void 0:w.isFieldsTouched(),m=(k=n.value)==null?void 0:k.isFieldsTouched(["username","email","password"],!0);a.value=`isFieldsTouched(): ${c}
isFieldsTouched(所有字段, true): ${m}`},b=()=>{var c;(c=n.value)==null||c.resetFields(),t.username="",t.email="",t.password="",a.value="表单已重置"};return(c,m)=>(q(),P("div",me,[m[8]||(m[8]=i("h4",null,"批量查询 API 演示",-1)),o(l(S),{ref_key:"formRef",ref:n,model:t,rules:s,layout:"vertical",style:{"max-width":"600px"}},{default:r(()=>[o(l(f),{label:"用户名",name:"username"},{default:r(()=>[o(l(F),{value:t.username,"onUpdate:value":m[0]||(m[0]=w=>t.username=w),placeholder:"请输入用户名"},null,8,["value"])]),_:1}),o(l(f),{label:"邮箱",name:"email"},{default:r(()=>[o(l(F),{value:t.email,"onUpdate:value":m[1]||(m[1]=w=>t.email=w),placeholder:"请输入邮箱"},null,8,["value"])]),_:1}),o(l(f),{label:"密码",name:"password"},{default:r(()=>[o(l(F),{value:t.password,"onUpdate:value":m[2]||(m[2]=w=>t.password=w),type:"password",placeholder:"请输入密码"},null,8,["value"])]),_:1}),o(l(f),null,{default:r(()=>[o(l(H),null,{default:r(()=>[o(l(I),{type:"primary",onClick:d},{default:r(()=>[...m[3]||(m[3]=[h(" 验证表单 ",-1)])]),_:1}),o(l(I),{onClick:g},{default:r(()=>[...m[4]||(m[4]=[h(" 获取错误 ",-1)])]),_:1}),o(l(I),{onClick:v},{default:r(()=>[...m[5]||(m[5]=[h(" 检查触摸状态 ",-1)])]),_:1}),o(l(I),{onClick:b},{default:r(()=>[...m[6]||(m[6]=[h(" 重置 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),a.value?(q(),P("div",ie,[m[7]||(m[7]=i("h5",null,"输出结果：",-1)),i("pre",null,X(a.value),1)])):U("",!0)]))}}),ce=z(ue,[["__scopeId","data-v-4cd3ff97"]]),pe=`<template>
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
import { Form, FormItem } from '@hmfw/ant-design'
import { Input } from '@hmfw/ant-design'
import { Button } from '@hmfw/ant-design'
import { Space } from '@hmfw/ant-design'

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
`,fe=T({__name:"FormBasic",setup(e){const n=$({username:"",password:""}),t=a=>{console.log("表单提交：",a)},s=()=>{n.username="",n.password=""};return(a,d)=>(q(),_(l(S),{model:n,"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"480px"},onFinish:t},{default:r(()=>[o(l(f),{label:"用户名",name:"username",rules:[{required:!0,message:"请输入用户名"}]},{default:r(()=>[o(l(F),{value:n.username,"onUpdate:value":d[0]||(d[0]=g=>n.username=g),placeholder:"请输入用户名"},null,8,["value"])]),_:1}),o(l(f),{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码"}]},{default:r(()=>[o(l(ne),{value:n.password,"onUpdate:value":d[1]||(d[1]=g=>n.password=g),placeholder:"请输入密码"},null,8,["value"])]),_:1}),o(l(f),{"wrapper-col":{offset:6,span:18}},{default:r(()=>[o(l(I),{type:"primary","html-type":"submit"},{default:r(()=>[...d[2]||(d[2]=[h(" 提交 ",-1)])]),_:1}),o(l(I),{style:{"margin-left":"8px"},onClick:s},{default:r(()=>[...d[3]||(d[3]=[h(" 重置 ",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),ge=`<template>
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
import { Form, FormItem, Input, InputPassword, Button } from '@hmfw/ant-design'

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
`,ve={class:"demo-form-classnames"},be={class:"demo-section"},ye={class:"demo-section"},he={class:"demo-section"},ke={class:"demo-section"},Fe={class:"demo-section"},we={class:"demo-section"},xe=T({__name:"FormClassNames",setup(e){const n=$({username:"",email:"",required:"",nickname:"",address:"",combined:""});return(t,s)=>(q(),P("div",ve,[i("section",be,[s[6]||(s[6]=i("h3",null,"1. 自定义标签样式",-1)),o(l(S),{model:n,"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"480px"}},{default:r(()=>[o(l(f),{label:"用户名",name:"username","class-names":{label:"custom-label"}},{default:r(()=>[o(l(F),{value:n.username,"onUpdate:value":s[0]||(s[0]=a=>n.username=a),placeholder:"请输入用户名"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),i("section",ye,[s[7]||(s[7]=i("h3",null,"2. 自定义控件区域样式",-1)),o(l(S),{model:n,"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"480px"}},{default:r(()=>[o(l(f),{label:"邮箱",name:"email","class-names":{control:"custom-control"}},{default:r(()=>[o(l(F),{value:n.email,"onUpdate:value":s[1]||(s[1]=a=>n.email=a),placeholder:"请输入邮箱"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),i("section",he,[s[8]||(s[8]=i("h3",null,"3. 自定义错误反馈样式",-1)),o(l(S),{model:n,"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"480px"}},{default:r(()=>[o(l(f),{label:"必填项",name:"required","validate-status":"error",help:"这是一个自定义样式的错误信息","class-names":{feedback:"custom-feedback"}},{default:r(()=>[o(l(F),{value:n.required,"onUpdate:value":s[2]||(s[2]=a=>n.required=a),placeholder:"触发错误"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),i("section",ke,[s[9]||(s[9]=i("h3",null,"4. 自定义额外提示样式",-1)),o(l(S),{model:n,"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"480px"}},{default:r(()=>[o(l(f),{label:"昵称",name:"nickname",extra:"这是额外的提示信息，可自定义样式","class-names":{extra:"custom-extra"}},{default:r(()=>[o(l(F),{value:n.nickname,"onUpdate:value":s[3]||(s[3]=a=>n.nickname=a),placeholder:"请输入昵称"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),i("section",Fe,[s[10]||(s[10]=i("h3",null,"5. 自定义表单项根节点样式",-1)),o(l(S),{model:n,"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"480px"}},{default:r(()=>[o(l(f),{label:"地址",name:"address","class-names":{root:"custom-item-root"}},{default:r(()=>[o(l(F),{value:n.address,"onUpdate:value":s[4]||(s[4]=a=>n.address=a),placeholder:"请输入地址"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),i("section",we,[s[11]||(s[11]=i("h3",null,"6. 组合使用 + Form 根节点 styles",-1)),o(l(S),{model:n,"label-col":{span:6},"wrapper-col":{span:18},style:{"max-width":"480px"},styles:{root:{padding:"24px",background:"#f9f0ff",borderRadius:"12px"}}},{default:r(()=>[o(l(f),{label:"综合",name:"combined",extra:"组合演示","class-names":{root:"combined-item-root",label:"combined-label",control:"combined-control",extra:"combined-extra"}},{default:r(()=>[o(l(F),{value:n.combined,"onUpdate:value":s[5]||(s[5]=a=>n.combined=a),placeholder:"组合样式"},null,8,["value"])]),_:1})]),_:1},8,["model"])])]))}}),Se=z(xe,[["__scopeId","data-v-f9a7dbb6"]]),Ie=`<template>
  <div class="demo-form-classnames">
    <!-- 场景 1: 自定义 FormItem 标签 -->
    <section class="demo-section">
      <h3>1. 自定义标签样式</h3>
      <Form :model="state" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
        <FormItem label="用户名" name="username" :class-names="{ label: 'custom-label' }">
          <Input v-model:value="state.username" placeholder="请输入用户名" />
        </FormItem>
      </Form>
    </section>

    <!-- 场景 2: 自定义控件区域 -->
    <section class="demo-section">
      <h3>2. 自定义控件区域样式</h3>
      <Form :model="state" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
        <FormItem label="邮箱" name="email" :class-names="{ control: 'custom-control' }">
          <Input v-model:value="state.email" placeholder="请输入邮箱" />
        </FormItem>
      </Form>
    </section>

    <!-- 场景 3: 自定义错误反馈 -->
    <section class="demo-section">
      <h3>3. 自定义错误反馈样式</h3>
      <Form :model="state" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
        <FormItem
          label="必填项"
          name="required"
          validate-status="error"
          help="这是一个自定义样式的错误信息"
          :class-names="{ feedback: 'custom-feedback' }"
        >
          <Input v-model:value="state.required" placeholder="触发错误" />
        </FormItem>
      </Form>
    </section>

    <!-- 场景 4: 自定义额外提示 -->
    <section class="demo-section">
      <h3>4. 自定义额外提示样式</h3>
      <Form :model="state" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
        <FormItem
          label="昵称"
          name="nickname"
          extra="这是额外的提示信息，可自定义样式"
          :class-names="{ extra: 'custom-extra' }"
        >
          <Input v-model:value="state.nickname" placeholder="请输入昵称" />
        </FormItem>
      </Form>
    </section>

    <!-- 场景 5: 自定义表单项根节点 -->
    <section class="demo-section">
      <h3>5. 自定义表单项根节点样式</h3>
      <Form :model="state" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" style="max-width: 480px">
        <FormItem label="地址" name="address" :class-names="{ root: 'custom-item-root' }">
          <Input v-model:value="state.address" placeholder="请输入地址" />
        </FormItem>
      </Form>
    </section>

    <!-- 场景 6: 组合 + Form 根节点 styles -->
    <section class="demo-section">
      <h3>6. 组合使用 + Form 根节点 styles</h3>
      <Form
        :model="state"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        style="max-width: 480px"
        :styles="{ root: { padding: '24px', background: '#f9f0ff', borderRadius: '12px' } }"
      >
        <FormItem
          label="综合"
          name="combined"
          extra="组合演示"
          :class-names="{
            root: 'combined-item-root',
            label: 'combined-label',
            control: 'combined-control',
            extra: 'combined-extra',
          }"
        >
          <Input v-model:value="state.combined" placeholder="组合样式" />
        </FormItem>
      </Form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form, FormItem, Input } from '@hmfw/ant-design'

const state = reactive({
  username: '',
  email: '',
  required: '',
  nickname: '',
  address: '',
  combined: '',
})
<\/script>

<style scoped>
.demo-form-classnames {
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

/* 场景 1: 自定义标签 */
:deep(.custom-label) label {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

/* 场景 2: 自定义控件区域 */
:deep(.custom-control) {
  padding: 8px;
  background: #e6f7ff;
  border-radius: 6px;
  border-left: 3px solid #1890ff;
}

/* 场景 3: 自定义错误反馈 */
:deep(.custom-feedback) {
  padding: 4px 12px;
  background: #fff1f0;
  border: 1px solid #ffccc7;
  border-radius: 4px;
  font-weight: 500;
  margin-top: 4px;
}

/* 场景 4: 自定义额外提示 */
:deep(.custom-extra) {
  padding: 4px 8px;
  background: #f6ffed;
  border-radius: 4px;
  color: #389e0d;
  font-size: 12px;
  margin-top: 4px;
}

/* 场景 5: 自定义表单项根节点 */
:deep(.custom-item-root) {
  padding: 12px;
  border: 2px dashed #722ed1;
  border-radius: 8px;
  background: #f9f0ff;
}

/* 场景 6: 组合样式 */
:deep(.combined-item-root) {
  padding: 12px;
  border: 1px solid #d3adf7;
  border-radius: 8px;
  background: white;
}

:deep(.combined-label) label {
  color: #722ed1;
  font-weight: 600;
}

:deep(.combined-control) {
  padding: 4px;
}

:deep(.combined-extra) {
  color: #9254de;
  font-size: 12px;
}
</style>
`,qe={class:"form-dependency-demo"},Ce={key:0,style:{"margin-top":"16px",padding:"12px",background:"#f0f9ff","border-radius":"4px",border:"1px solid #91d5ff"}},Ne=T({__name:"FormDependency",setup(e){const n=B(),t=$({contactType:"email",contact:"",password:"",confirmPassword:"",needNotify:!1,notifyEmail:""}),s=[{value:"email",label:"邮箱"},{value:"phone",label:"手机号"}],a=B(""),d=C(()=>({contactType:[{required:!0,message:"请选择联系方式类型"}],contact:[{required:!0,message:"请输入联系方式"},t.contactType==="email"?{type:"email",message:"请输入有效的邮箱地址"}:{pattern:/^1[3-9]\d{9}$/,message:"请输入有效的手机号"}],password:[{required:!0,message:"请输入密码"},{min:6,message:"密码至少6个字符"}],confirmPassword:[{required:!0,message:"请确认密码"},{validator:(b,c)=>c&&c!==t.password?Promise.reject("两次输入的密码不一致"):Promise.resolve()}],notifyEmail:t.needNotify?[{required:!0,message:"请输入通知邮箱"},{type:"email",message:"请输入有效的邮箱地址"}]:[]}));G(()=>t.password,()=>{var b;t.confirmPassword&&((b=n.value)==null||b.validateFields(["confirmPassword"]).catch(()=>{}))}),G(()=>t.contactType,()=>{t.contact="",n.value&&n.value.clearValidate(["contact"])});const g=async()=>{var b;try{await((b=n.value)==null?void 0:b.validate()),a.value=`✅ 提交成功！
`+JSON.stringify(t,null,2)}catch{a.value="❌ 验证失败，请检查表单"}},v=()=>{var b;(b=n.value)==null||b.resetFields(),t.contactType="email",t.contact="",t.password="",t.confirmPassword="",t.needNotify=!1,t.notifyEmail="",a.value=""};return(b,c)=>(q(),P("div",qe,[c[8]||(c[8]=i("h4",null,"表单联动场景演示",-1)),o(l(S),{ref_key:"formRef",ref:n,model:t,rules:d.value,layout:"vertical",style:{"max-width":"600px"}},{default:r(()=>[o(l(f),{label:"联系方式类型",name:"contactType"},{default:r(()=>[o(l(ae),{value:t.contactType,"onUpdate:value":c[0]||(c[0]=m=>t.contactType=m),options:s,placeholder:"请选择"},null,8,["value"])]),_:1}),o(l(f),{label:t.contactType==="email"?"邮箱地址":"手机号码",name:"contact"},{default:r(()=>[o(l(F),{value:t.contact,"onUpdate:value":c[1]||(c[1]=m=>t.contact=m),placeholder:t.contactType==="email"?"请输入邮箱":"请输入手机号"},null,8,["value","placeholder"])]),_:1},8,["label"]),o(l(f),{label:"密码",name:"password"},{default:r(()=>[o(l(F),{value:t.password,"onUpdate:value":c[2]||(c[2]=m=>t.password=m),type:"password",placeholder:"请输入密码"},null,8,["value"])]),_:1}),o(l(f),{label:"确认密码",name:"confirmPassword"},{default:r(()=>[o(l(F),{value:t.confirmPassword,"onUpdate:value":c[3]||(c[3]=m=>t.confirmPassword=m),type:"password",placeholder:"请再次输入密码"},null,8,["value"])]),_:1}),o(l(f),{label:"是否需要通知",name:"needNotify"},{default:r(()=>[o(l(se),{checked:t.needNotify,"onUpdate:checked":c[4]||(c[4]=m=>t.needNotify=m)},null,8,["checked"])]),_:1}),t.needNotify?(q(),_(l(f),{key:0,label:"通知邮箱",name:"notifyEmail"},{default:r(()=>[o(l(F),{value:t.notifyEmail,"onUpdate:value":c[5]||(c[5]=m=>t.notifyEmail=m),placeholder:"请输入通知邮箱"},null,8,["value"])]),_:1})):U("",!0),o(l(f),null,{default:r(()=>[o(l(H),null,{default:r(()=>[o(l(I),{type:"primary",onClick:g},{default:r(()=>[...c[6]||(c[6]=[h(" 提交 ",-1)])]),_:1}),o(l(I),{onClick:v},{default:r(()=>[...c[7]||(c[7]=[h(" 重置 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"]),a.value?(q(),P("div",Ce,[i("pre",null,X(a.value),1)])):U("",!0)]))}}),Te=z(Ne,[["__scopeId","data-v-7ad3e812"]]),Ee=`<template>
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
import { Form, FormItem } from '@hmfw/ant-design'
import { Input } from '@hmfw/ant-design'
import { Button } from '@hmfw/ant-design'
import { Space } from '@hmfw/ant-design'
import { Select } from '@hmfw/ant-design'
import { Switch } from '@hmfw/ant-design'

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
`,Be=T({__name:"FormInline",setup(e){const n=$({name:"",age:null}),t=s=>{console.log("搜索：",s)};return(s,a)=>(q(),_(l(S),{model:n,layout:"inline",onFinish:t},{default:r(()=>[o(l(f),{label:"姓名",name:"name"},{default:r(()=>[o(l(F),{value:n.name,"onUpdate:value":a[0]||(a[0]=d=>n.name=d),placeholder:"请输入姓名"},null,8,["value"])]),_:1}),o(l(f),{label:"年龄",name:"age"},{default:r(()=>[o(l(Y),{value:n.age,"onUpdate:value":a[1]||(a[1]=d=>n.age=d),placeholder:"年龄",style:{width:"100px"}},null,8,["value"])]),_:1}),o(l(f),null,{default:r(()=>[o(l(I),{type:"primary","html-type":"submit"},{default:r(()=>[...a[2]||(a[2]=[h(" 搜索 ",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),Pe=`<template>
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
import { Form, FormItem, Input, InputNumber, Button } from '@hmfw/ant-design'

const formState = reactive({
  name: '',
  age: null as number | null,
})

const handleSearch = (values: typeof formState) => {
  console.log('搜索：', values)
}
<\/script>
`,$e=T({__name:"FormValidation",setup(e){const n=B(),t=$({email:"",phone:"",age:null}),s={email:[{required:!0,message:"请输入邮箱"},{type:"email",message:"请输入有效的邮箱地址"}],phone:[{required:!0,message:"请输入手机号"},{pattern:/^1[3-9]\d{9}$/,message:"请输入有效的手机号"}],age:[{required:!0,message:"请输入年龄"}]},a=async()=>{var g;try{await((g=n.value)==null?void 0:g.validate()),console.log("校验通过")}catch(v){console.log("校验失败：",v)}},d=()=>{var g;(g=n.value)==null||g.clearValidate()};return(g,v)=>(q(),_(l(S),{ref_key:"formRef",ref:n,model:t,rules:s,"label-col":{span:5},"wrapper-col":{span:19},style:{"max-width":"480px"}},{default:r(()=>[o(l(f),{label:"邮箱",name:"email"},{default:r(()=>[o(l(F),{value:t.email,"onUpdate:value":v[0]||(v[0]=b=>t.email=b),placeholder:"请输入邮箱"},null,8,["value"])]),_:1}),o(l(f),{label:"手机号",name:"phone"},{default:r(()=>[o(l(F),{value:t.phone,"onUpdate:value":v[1]||(v[1]=b=>t.phone=b),placeholder:"请输入手机号"},null,8,["value"])]),_:1}),o(l(f),{label:"年龄",name:"age"},{default:r(()=>[o(l(Y),{value:t.age,"onUpdate:value":v[2]||(v[2]=b=>t.age=b),min:1,max:120,placeholder:"请输入年龄",style:{width:"100%"}},null,8,["value"])]),_:1}),o(l(f),{"wrapper-col":{offset:5,span:19}},{default:r(()=>[o(l(I),{type:"primary",onClick:a},{default:r(()=>[...v[3]||(v[3]=[h(" 校验 ",-1)])]),_:1}),o(l(I),{style:{"margin-left":"8px"},onClick:d},{default:r(()=>[...v[4]||(v[4]=[h(" 清除校验 ",-1)])]),_:1})]),_:1})]),_:1},8,["model"]))}}),Re=`<template>
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
import { Form, FormItem, Input, InputNumber, Button } from '@hmfw/ant-design'

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
`,Ae={class:"markdown-body"},Qe={__name:"form",setup(e,{expose:n}){return n({frontmatter:{}}),(s,a)=>{const d=ee("DemoBlock");return q(),P("div",Ae,[a[0]||(a[0]=i("h1",{id:"form-表单",tabindex:"-1"},"Form 表单",-1)),a[1]||(a[1]=i("p",null,"高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。",-1)),a[2]||(a[2]=i("h2",{id:"何时使用",tabindex:"-1"},"何时使用",-1)),a[3]||(a[3]=i("ul",null,[i("li",null,"用于创建一个实体或收集信息。"),i("li",null,"需要对输入的数据类型进行校验时。")],-1)),a[4]||(a[4]=i("h2",{id:"代码演示",tabindex:"-1"},"代码演示",-1)),a[5]||(a[5]=i("h3",{id:"基础表单",tabindex:"-1"},"基础表单",-1)),a[6]||(a[6]=i("p",null,"基本的表单数据域控制展示，包含布局、初始化、验证、提交。",-1)),o(d,{title:"基础表单",source:l(ge)},{default:r(()=>[o(fe)]),_:1},8,["source"]),a[7]||(a[7]=i("h3",{id:"表单校验",tabindex:"-1"},"表单校验",-1)),a[8]||(a[8]=i("p",null,[h("Form 组件提供了表单验证的功能，只需为 FormItem 设置 "),i("code",null,"rules"),h(" 属性即可。")],-1)),o(d,{title:"表单校验",source:l(Re)},{default:r(()=>[o($e)]),_:1},8,["source"]),a[9]||(a[9]=i("h3",{id:"内联表单",tabindex:"-1"},"内联表单",-1)),a[10]||(a[10]=i("p",null,"内联排列表单项。",-1)),o(d,{title:"内联表单",source:l(Pe)},{default:r(()=>[o(Be)]),_:1},8,["source"]),a[11]||(a[11]=i("h3",{id:"高级-api-演示",tabindex:"-1"},"高级 API 演示",-1)),a[12]||(a[12]=i("p",null,[h("展示 Form 的高级查询 API："),i("code",null,"getFieldsError"),h("、"),i("code",null,"isFieldsTouched"),h(" 等批量查询方法。")],-1)),o(d,{title:"高级 API",source:l(pe)},{default:r(()=>[o(ce)]),_:1},8,["source"]),a[13]||(a[13]=i("h3",{id:"表单联动",tabindex:"-1"},"表单联动",-1)),a[14]||(a[14]=i("p",null,"展示字段之间的依赖关系和动态验证规则。",-1)),o(d,{title:"表单联动",source:l(Ee)},{default:r(()=>[o(Te)]),_:1},8,["source"]),a[15]||(a[15]=i("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),a[16]||(a[16]=i("p",null,[h("通过 "),i("code",null,"classNames"),h(" / "),i("code",null,"styles"),h(" 对各子元素做细粒度样式控制。")],-1)),o(d,{title:"语义化 className 与 style",source:l(Ie)},{default:r(()=>[o(Se)]),_:1},8,["source"]),a[17]||(a[17]=te(`<h2 id="api" tabindex="-1">API</h2><h3 id="form-props" tabindex="-1">Form Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>model</td><td>表单数据对象</td><td><code>object</code></td><td>-</td></tr><tr><td>rules</td><td>表单验证规则</td><td><code>Record&lt;string, FormRule | FormRule[]&gt;</code></td><td>-</td></tr><tr><td>layout</td><td>表单布局</td><td><code>&#39;horizontal&#39; | &#39;vertical&#39; | &#39;inline&#39;</code></td><td><code>&#39;horizontal&#39;</code></td></tr><tr><td>labelCol</td><td>label 标签布局，同 Col 组件</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>wrapperCol</td><td>输入控件布局样式</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>labelAlign</td><td>label 文本对齐方式</td><td><code>&#39;left&#39; | &#39;right&#39;</code></td><td><code>&#39;right&#39;</code></td></tr><tr><td>colon</td><td>是否显示 label 后面的冒号（仅 horizontal 布局有效）</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>disabled</td><td>设置表单组件禁用，仅对 ant-design-hmfw 组件有效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>size</td><td>设置字段组件的尺寸</td><td><code>&#39;small&#39; | &#39;middle&#39; | &#39;large&#39;</code></td><td><code>&#39;middle&#39;</code></td></tr><tr><td>validateTrigger</td><td>统一设置字段触发验证的时机</td><td><code>&#39;blur&#39; | &#39;change&#39; | (&#39;blur&#39; | &#39;change&#39;)[]</code></td><td><code>&#39;change&#39;</code></td></tr><tr><td>requiredMark</td><td>必选样式：<code>true</code> 显示星号，<code>false</code> 不显示，<code>&#39;optional&#39;</code> 反向标注「可选」</td><td><code>boolean | &#39;optional&#39;</code></td><td><code>true</code></td></tr><tr><td>scrollToFirstError</td><td>提交失败自动滚动到第一个错误字段</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>preserve</td><td>字段卸载时是否保留字段值</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>FormClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>FormStyles</code></td><td>-</td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>label 标签的文本</td><td><code>string</code></td><td>-</td></tr><tr><td>name</td><td>字段名，支持数组（嵌套字段）</td><td><code>string | number | (string | number)[]</code></td><td>-</td></tr><tr><td>rules</td><td>校验规则，设置字段的校验逻辑</td><td><code>FormRule | FormRule[]</code></td><td>-</td></tr><tr><td>required</td><td>必填样式设置。如不设置，则会根据校验规则自动生成</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>validateStatus</td><td>校验状态</td><td><code>&#39;success&#39; | &#39;warning&#39; | &#39;error&#39; | &#39;validating&#39; | &#39;&#39;</code></td><td>-</td></tr><tr><td>help</td><td>提示信息，如不设置，则会根据校验规则自动生成</td><td><code>string</code></td><td>-</td></tr><tr><td>extra</td><td>额外的提示信息</td><td><code>string</code></td><td>-</td></tr><tr><td>labelCol</td><td>label 标签布局，优先级高于 Form 的 labelCol</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>wrapperCol</td><td>输入控件布局样式，优先级高于 Form 的 wrapperCol</td><td><code>{ span?: number; offset?: number }</code></td><td>-</td></tr><tr><td>validateTrigger</td><td>设置字段校验的时机</td><td><code>&#39;blur&#39; | &#39;change&#39; | (&#39;blur&#39; | &#39;change&#39;)[]</code></td><td>继承自 Form</td></tr><tr><td>tooltip</td><td>配置提示信息（鼠标悬停 ⓘ 图标显示）</td><td><code>string</code></td><td>-</td></tr><tr><td>noStyle</td><td>为 true 时不带样式，作为纯字段控件使用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>hidden</td><td>是否隐藏字段（依然会收集和校验字段）</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>colon</td><td>配合 label 属性，覆盖 Form 的 colon</td><td><code>boolean</code></td><td>继承自 Form</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>FormItemClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>FormItemStyles</code></td><td>-</td></tr></tbody></table><h3 id="formrule" tabindex="-1">FormRule</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>required</td><td>是否必填</td><td><code>boolean</code></td></tr><tr><td>message</td><td>校验失败时的提示信息</td><td><code>string</code></td></tr><tr><td>type</td><td>类型，常见有 <code>string</code> <code>number</code> <code>email</code> <code>url</code></td><td><code>string</code></td></tr><tr><td>min</td><td>最小长度（string）或最小值（number）</td><td><code>number</code></td></tr><tr><td>max</td><td>最大长度（string）或最大值（number）</td><td><code>number</code></td></tr><tr><td>pattern</td><td>正则表达式校验</td><td><code>RegExp</code></td></tr><tr><td>validator</td><td>自定义校验函数</td><td><code>(rule: FormRule, value: any) =&gt; Promise&lt;void&gt;</code></td></tr></tbody></table><h3 id="form-方法通过-ref-调用" tabindex="-1">Form 方法（通过 ref 调用）</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>validate</td><td>触发表单验证；成功 resolve 模型，失败 reject <code>{ values, errorFields }</code></td><td><code>(nameList?: string[]) =&gt; Promise&lt;values&gt;</code></td></tr><tr><td>validateFields</td><td><code>validate</code> 的别名（AntD 一致）</td><td><code>(nameList?: string[]) =&gt; Promise&lt;values&gt;</code></td></tr><tr><td>clearValidate</td><td>清理某些字段的校验信息</td><td><code>(nameList?: string[]) =&gt; void</code></td></tr><tr><td>resetFields</td><td>重置一组字段的校验信息</td><td><code>() =&gt; void</code></td></tr><tr><td>submit</td><td>触发表单提交，效果等同 <code>&lt;button type=&quot;submit&quot;&gt;</code></td><td><code>() =&gt; void</code></td></tr><tr><td>getFieldsValue</td><td>取当前表单全部字段值</td><td><code>() =&gt; object</code></td></tr><tr><td>getFieldsError</td><td>获取所有字段的错误信息</td><td><code>(nameList?: string[]) =&gt; { name: string, errors: string[] }[]</code></td></tr><tr><td>isFieldsTouched</td><td>检查字段是否被用户操作过</td><td><code>(nameList?: string[], allTouched?: boolean) =&gt; boolean</code></td></tr><tr><td>scrollToField</td><td>滚动到指定字段位置</td><td><code>(name: string) =&gt; void</code></td></tr></tbody></table><h3 id="form-events" tabindex="-1">Form Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>finish</td><td>提交表单且数据验证成功后触发</td><td><code>(values) =&gt; void</code></td></tr><tr><td>finishFailed</td><td>提交表单且数据验证失败后触发</td><td><code>({ values, errorFields }) =&gt; void</code></td></tr><tr><td>valuesChange</td><td>字段值更新时触发（需在控件中显式调用 ctx.notifyValueChange，详见说明）</td><td><code>(changedValues, allValues) =&gt; void</code></td></tr></tbody></table><h3 id="form-slots" tabindex="-1">Form Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>表单内容</td></tr></tbody></table><h3 id="formitem-slots" tabindex="-1">FormItem Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>表单控件</td></tr><tr><td>label</td><td>自定义 label 内容</td></tr></tbody></table><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对Form的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// Form</span>
<span class="token keyword">interface</span> <span class="token class-name">FormClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根节点 form.hmfw-form</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">FormStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>

<span class="token comment">// FormItem</span>
<span class="token keyword">interface</span> <span class="token class-name">FormItemClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 表单项根节点 div.hmfw-form-item</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 标签区域 div.hmfw-form-item-label</span>
  control<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 控件区域 div.hmfw-form-item-control</span>
  feedback<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 错误/帮助信息 div.hmfw-form-item-explain</span>
  extra<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 额外提示 div.hmfw-form-item-extra</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">FormItemStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  label<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  control<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  feedback<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  extra<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此（Form） --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-form-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此（FormItem） --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-form-item-label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.label / styles.label 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-form-item-control<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.control / styles.control 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-form-item-control-input<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>控件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-form-item-explain<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>错误信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.feedback / styles.feedback 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-form-item-extra<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>额外提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.extra / styles.extra 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- Form 级别 classNames --&gt;
  &lt;Form :model=&quot;state&quot; :class-names=&quot;{ root: &#39;my-form-root&#39; }&quot;&gt;
    &lt;!-- FormItem 级别 classNames --&gt;
    &lt;FormItem
      label=&quot;用户名&quot;
      name=&quot;username&quot;
      :class-names=&quot;{
        root: &#39;my-item&#39;,
        label: &#39;my-label&#39;,
        control: &#39;my-control&#39;,
        feedback: &#39;my-feedback&#39;,
        extra: &#39;my-extra&#39;,
      }&quot;
    &gt;
      &lt;Input v-model:value=&quot;state.username&quot; /&gt;
    &lt;/FormItem&gt;
  &lt;/Form&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-form-root) {
  background-color: #fafafa;
}

:deep(.my-label) {
  font-weight: 600;
}

:deep(.my-control) {
  border-left: 2px solid #1890ff;
  padding-left: 8px;
}

:deep(.my-feedback) {
  font-size: 12px;
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- Form 级别 styles --&gt;
  &lt;Form :model=&quot;state&quot; :styles=&quot;{ root: { padding: &#39;24px&#39;, backgroundColor: &#39;#fafafa&#39; } }&quot;&gt;
    &lt;!-- FormItem 级别 styles --&gt;
    &lt;FormItem
      label=&quot;用户名&quot;
      name=&quot;username&quot;
      :styles=&quot;{
        label: { fontWeight: 600 },
        control: { borderLeft: &#39;2px solid #1890ff&#39;, paddingLeft: &#39;8px&#39; },
        feedback: { fontSize: &#39;12px&#39;, color: &#39;#ff4d4f&#39; },
      }&quot;
    &gt;
      &lt;Input v-model:value=&quot;state.username&quot; /&gt;
    &lt;/FormItem&gt;
  &lt;/Form&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li>Form 的语义化 API 只控制 <code>&lt;form&gt;</code> 根节点；表单项的结构样式应使用 FormItem 的 <code>classNames</code> / <code>styles</code></li><li>FormItem 的 <code>styles.label</code> 会与 <code>labelCol</code> 计算出的布局样式合并；<code>styles.control</code> 会与 <code>wrapperCol</code> 计算出的布局样式合并</li><li><code>label</code> 应用于标签外层容器，若要定制 <code>&lt;label&gt;</code> 文本本身，可在 CSS 中用后代选择器（如 <code>.my-label label</code>）</li><li><code>feedback</code> 仅在有错误信息或 <code>help</code> 时渲染</li><li><code>extra</code> 仅在设置了 <code>extra</code> 属性时渲染</li><li><code>noStyle</code> 或 <code>hidden</code> 的 FormItem 不渲染结构节点，classNames 不生效</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Form 组件目前未直接消费 Design Token，样式以硬编码方式实现。后续会接入 Token 系统，主题切换需通过自定义 CSS 变量覆盖默认 className 实现。</p>`,31))])}}};export{Qe as default};
