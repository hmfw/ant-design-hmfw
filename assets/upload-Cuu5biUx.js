import{B as S}from"./Button-DXqNArqe.js";import{o as _,N as ut,E as C,n as o,F as Q,f as $,d as ct,m as c,s as pt,r as ft,A as x,i as E,R as b,K as U,k as P,G as mt,J as gt,j as Y,_ as ht,h as f,H as vt,l as X}from"./index-BIs5wmTl.js";import{c as j}from"./cls-S9IiI6wd.js";import"./Icon-Bx-OH41K.js";import"./LoadingOutlined-DBQWlWc3.js";function bt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ft(t)}let Ut=0;function yt(){return`__upload_${Date.now()}_${Ut++}`}function xt(t){return t?t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/1024/1024).toFixed(1)} MB`:""}const wt=/\.(jpg|jpeg|png|gif|bmp|webp|svg|ico|tiff?|avif|apng|heic|heif)$/i;function Ct(t){if(t.thumbUrl||t.type&&t.type.indexOf("image/")===0)return!0;const a=t.url||"";return a?wt.test(a)||/^data:image\//.test(a)?!0:!/\.[^./\\]+$/.test(a):!1}async function Lt(t,a){return typeof t=="function"?await t(a):t??""}async function $t(t,a){return typeof t=="function"?await t(a)??{}:t??{}}const R=_({name:"Upload",props:{accept:String,action:[String,Function],directory:Boolean,disabled:Boolean,fileList:Array,defaultFileList:Array,listType:{type:String,default:"text"},type:{type:String,default:"select"},maxCount:Number,multiple:Boolean,name:{type:String,default:"file"},showUploadList:{type:[Boolean,Object],default:!0},beforeUpload:Function,customRequest:Function,headers:Object,data:[Object,Function],withCredentials:Boolean,openFileDialogOnClick:{type:Boolean,default:!0},method:{type:String,default:"post"},onRemove:Function,isImageUrl:Function,itemRender:Function},emits:["update:fileList","change","remove","preview","download","drop"],setup(t,{slots:a,emit:d}){const n=ut("upload"),l=C(),i=C(t.defaultFileList??[]),p=C(0),g=$(()=>p.value>0),u=$(()=>t.fileList??i.value),h=e=>{i.value=e,d("update:fileList",e)},k=e=>{const r=new XMLHttpRequest,s=new FormData;e.data&&Object.entries(e.data).forEach(([m,y])=>s.append(m,y)),s.append(e.filename??"file",e.file),r.upload.onprogress=m=>{m.lengthComputable&&e.onProgress({percent:Math.round(m.loaded/m.total*100)})},r.onload=()=>{r.status>=200&&r.status<300?e.onSuccess(r.response,e.file):e.onError(new Error(`HTTP ${r.status}`))},r.onerror=()=>e.onError(new Error("Network error")),e.withCredentials&&(r.withCredentials=!0),e.headers&&Object.entries(e.headers).forEach(([m,y])=>r.setRequestHeader(m,y)),r.open(t.method??"post",e.action),r.send(s)},B=async e=>{const r=yt(),s={uid:r,name:e.name,size:e.size,type:e.type,status:"uploading",percent:0,originFileObj:e},m=[...u.value,s];t.maxCount===1?m.splice(0,m.length-1):t.maxCount&&m.length>t.maxCount&&m.splice(t.maxCount),h(m),d("change",{file:s,fileList:m});const y=L=>{const F=u.value.map(w=>w.uid===r?{...w,status:"done",response:L,percent:100}:w);h(F),d("change",{file:{...s,status:"done",percent:100,response:L},fileList:F})},dt=(L,F)=>{const w=u.value.map(A=>A.uid===r?{...A,status:"error",error:L,response:F}:A);h(w),d("change",{file:{...s,status:"error",error:L,response:F},fileList:w})},st=L=>{const F=u.value.map(w=>w.uid===r?{...w,percent:L.percent}:w);h(F),d("change",{file:{...s,percent:L.percent},fileList:F,event:L})},J=await Lt(t.action,e),rt=await $t(t.data,s),W={action:J,data:rt,file:e,filename:t.name,headers:t.headers,withCredentials:t.withCredentials,onSuccess:y,onError:dt,onProgress:st};if(t.customRequest){t.customRequest(W,{defaultRequest:k});return}if(!J){setTimeout(()=>y({}),500);return}k(W)},v=async e=>{for(const r of e){let s=r;if(t.beforeUpload){const m=t.beforeUpload(r,e),y=await Promise.resolve(m);if(y===!1)continue;y instanceof File?s=y:y instanceof Blob&&(s=new File([y],r.name,{type:y.type||r.type}))}await B(s)}},D=e=>{const r=Array.from(e.target.files??[]);v(r),l.value&&(l.value.value="")},I=e=>{e.preventDefault(),p.value+=1},z=e=>{e.preventDefault(),p.value=Math.max(0,p.value-1)},q=e=>{e.preventDefault()},N=e=>{var s;if(e.preventDefault(),p.value=0,d("drop",e),t.disabled)return;const r=Array.from(((s=e.dataTransfer)==null?void 0:s.files)??[]);v(r)},O=async e=>{if((t.onRemove?await Promise.resolve(t.onRemove(e)):!0)===!1)return;const s=u.value.filter(m=>m.uid!==e.uid);h(s),d("remove",e),d("change",{file:{...e,status:"removed"},fileList:s})},M=()=>{var e;!t.disabled&&t.openFileDialogOnClick&&((e=l.value)==null||e.click())},T=$(()=>t.listType==="picture-card"||t.listType==="picture-circle"),et=$(()=>t.type==="drag"),nt=$(()=>t.showUploadList!==!1),H=$(()=>typeof t.showUploadList=="object"?t.showUploadList.showRemoveIcon!==!1:!0),ot=$(()=>typeof t.showUploadList=="object"?t.showUploadList.showPreviewIcon!==!1:!0),K=$(()=>typeof t.showUploadList=="object"?!!t.showUploadList.showDownloadIcon:!1),lt=e=>t.isImageUrl?t.isImageUrl(e):Ct(e),at=e=>{const r=lt(e),s=e.thumbUrl||e.url;return o("div",{class:j(`${n}-list-item`,{[`${n}-list-item-${e.status}`]:!!e.status})},[(t.listType==="picture"||T.value)&&r&&s&&!T.value&&o("div",{class:`${n}-list-item-thumbnail`},[o("img",{src:s,alt:e.name},null)]),T.value?o("div",{class:`${n}-list-item-card`},[r&&s?o("img",{src:s,alt:e.name},null):o("span",{class:`${n}-list-item-icon`},[c("📄")]),e.status==="uploading"&&o("div",{class:`${n}-list-item-progress`},[o("div",{class:`${n}-list-item-progress-bar`,style:{width:`${e.percent??0}%`}},null)]),o("div",{class:`${n}-list-item-card-actions`},[(e.url||e.thumbUrl)&&ot.value&&o("button",{class:`${n}-list-item-action`,onClick:()=>d("preview",e)},[c("👁")]),K.value&&e.url&&o("button",{class:`${n}-list-item-action`,onClick:()=>d("download",e)},[c("⬇")]),H.value&&o("button",{class:`${n}-list-item-action`,onClick:()=>O(e)},[c("🗑")])])]):o("div",{class:`${n}-list-item-info`},[o("span",{class:`${n}-list-item-icon`},[e.status==="error"?"❌":e.status==="done"?"✅":"📄"]),o("span",{class:`${n}-list-item-name`},[e.name]),o("span",{class:`${n}-list-item-size`},[xt(e.size)]),e.status==="uploading"&&o("div",{class:`${n}-list-item-progress`},[o("div",{class:`${n}-list-item-progress-bar`,style:{width:`${e.percent??0}%`}},null)]),K.value&&e.url&&o("button",{class:`${n}-list-item-action ${n}-list-item-download`,onClick:()=>d("download",e)},[c("⬇")]),H.value&&o("button",{class:`${n}-list-item-action ${n}-list-item-remove`,onClick:()=>O(e)},[c("✕")])])])},Z=()=>{let e;return!nt.value||u.value.length===0?null:o(ct,{tag:"div",class:`${n}-list ${n}-list-${t.listType}`,name:`${n}-animate`},bt(e=u.value.map(s=>{const m=at(s);if(t.itemRender){const y={download:()=>d("download",s),preview:()=>d("preview",s),remove:()=>O(s)};return o("div",{key:s.uid,class:`${n}-list-item-container`},[t.itemRender(m,s,u.value,y)])}return o("div",{key:s.uid,class:`${n}-list-item-container`},[m])}))?e:{default:()=>[e]})},it=$(()=>t.maxCount?u.value.length<t.maxCount:!0),G=()=>{var e;return T.value?it.value?o("div",{class:j(`${n}-select`,`${n}-select-${t.listType}`,{[`${n}-disabled`]:t.disabled}),onClick:M,onDragenter:I,onDragover:q,onDragleave:z,onDrop:N},[a.default?a.default():o("div",{class:`${n}-select-btn`},[o("span",{class:`${n}-select-icon`},[c("+")]),o("span",{class:`${n}-select-text`},[c("上传")])])]):null:et.value?o("div",{class:j(`${n}-drag`,{[`${n}-drag-uploading`]:u.value.some(r=>r.status==="uploading"),[`${n}-drag-hover`]:g.value,[`${n}-disabled`]:t.disabled}),onClick:M,onDragenter:I,onDragover:q,onDragleave:z,onDrop:N},[o("div",{class:`${n}-drag-container`},[(e=a.default)==null?void 0:e.call(a)])]):o("div",{class:j(`${n}-select`,{[`${n}-disabled`]:t.disabled}),onClick:M},[a.default?a.default():null])};return()=>o("div",{class:j(n,{[`${n}-picture-card-wrapper`]:t.listType==="picture-card",[`${n}-picture-circle-wrapper`]:t.listType==="picture-circle"})},[o("input",{ref:l,type:"file",accept:t.accept,multiple:t.multiple,style:{display:"none"},onChange:D,webkitdirectory:t.directory||void 0},null),T.value?o("div",{class:`${n}-list-${t.listType}-wrapper`},[Z(),G()]):o(Q,null,[G(),Z()])])}}),tt=_({name:"UploadDragger",inheritAttrs:!1,setup(t,{slots:a,attrs:d}){return()=>o(R,pt(d,{type:"drag"}),{default:()=>{var n;return(n=a.default)==null?void 0:n.call(a)}})}});R.Dragger=tt;const kt=_({__name:"UploadBasic",setup(t){const a=C([]),d=n=>{n.file.status==="done"?console.log(`${n.file.name} 上传成功`):n.file.status==="error"&&console.log(`${n.file.name} 上传失败`),a.value=n.fileList};return(n,l)=>(x(),E(U(R),{"file-list":a.value,"onUpdate:fileList":l[0]||(l[0]=i=>a.value=i),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:d},{default:b(()=>[o(U(S),null,{default:b(()=>[...l[1]||(l[1]=[c("点击上传",-1)])]),_:1})]),_:1},8,["file-list"]))}}),Dt=`<template>
  <Upload
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    :multiple="true"
    @change="handleChange"
  >
    <Button>点击上传</Button>
  </Upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload, Button } from 'ant-design-hmfw'
import type { UploadFile } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([])

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  if (info.file.status === 'done') {
    console.log(\`\${info.file.name} 上传成功\`)
  } else if (info.file.status === 'error') {
    console.log(\`\${info.file.name} 上传失败\`)
  }
  fileList.value = info.fileList
}
<\/script>
`,Ft={class:"upload-chunked-demo"},_t={key:0,class:"upload-chunked-log"},V=1024*1024,Rt=_({__name:"UploadChunked",setup(t){const a=C([]),d=C([]),n=g=>(d.value=[],d.value.push(`选中文件 ${g.name}，大小 ${(g.size/1024).toFixed(1)} KB`),!0),l=async g=>{const{file:u,onSuccess:h,onError:k,onProgress:B}=g;try{const v=Math.ceil(u.size/V);d.value.push(`开始分片：共 ${v} 片`);for(let D=0;D<v;D++){const I=D*V,z=Math.min(I+V,u.size),q=u.slice(I,z);await i(u.name,D,v,q);const N=Math.round((D+1)/v*95);B({percent:N}),d.value.push(`第 ${D+1}/${v} 片上传完成（${q.size} 字节）`)}await p(u.name,v),B({percent:100}),d.value.push("合并完成"),h({url:URL.createObjectURL(u)})}catch(v){k(v),d.value.push(`上传失败：${v.message}`)}};function i(g,u,h,k){return new Promise(B=>{const v=new FormData;v.append("name",g),v.append("index",String(u)),v.append("total",String(h)),v.append("chunk",k),setTimeout(B,300)})}function p(g,u){return new Promise(h=>{setTimeout(()=>h(),400)})}return(g,u)=>(x(),P("div",Ft,[o(U(R),{"file-list":a.value,"onUpdate:fileList":u[0]||(u[0]=h=>a.value=h),"custom-request":l,"before-upload":n,multiple:""},{default:b(()=>[o(U(S),null,{default:b(()=>[...u[1]||(u[1]=[c("分片上传",-1)])]),_:1})]),_:1},8,["file-list"]),d.value.length?(x(),P("div",_t,[(x(!0),P(Q,null,mt(d.value,(h,k)=>(x(),P("div",{key:k},gt(h),1))),128))])):Y("",!0)]))}}),Bt=ht(Rt,[["__scopeId","data-v-eec3cc2f"]]),Pt=`<template>
  <div class="upload-chunked-demo">
    <Upload v-model:file-list="fileList" :custom-request="chunkedRequest" :before-upload="beforeUpload" multiple>
      <Button>分片上传</Button>
    </Upload>
    <div v-if="logs.length" class="upload-chunked-log">
      <div v-for="(log, i) in logs" :key="i">
        {{ log }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload, Button } from 'ant-design-hmfw'
import type { UploadFile, CustomRequestOptions } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([])
const logs = ref<string[]>([])

const CHUNK_SIZE = 1024 * 1024 // 每片 1MB

const beforeUpload = (file: File) => {
  logs.value = []
  logs.value.push(\`选中文件 \${file.name}，大小 \${(file.size / 1024).toFixed(1)} KB\`)
  return true
}

/**
 * 分片上传实现：
 * 1. 按 CHUNK_SIZE 切片
 * 2. 串行上传每片到 /api/upload-chunk（演示中用 setTimeout 模拟）
 * 3. 全部成功后调用 /api/merge-chunks 合并（演示中模拟）
 * 4. 通过 onProgress 上报整体进度
 */
const chunkedRequest = async (opts: CustomRequestOptions) => {
  const { file, onSuccess, onError, onProgress } = opts
  try {
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE)
    logs.value.push(\`开始分片：共 \${totalChunks} 片\`)

    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE
      const end = Math.min(start + CHUNK_SIZE, file.size)
      const chunk = file.slice(start, end)
      await uploadChunk(file.name, i, totalChunks, chunk)
      const percent = Math.round(((i + 1) / totalChunks) * 95)
      onProgress({ percent })
      logs.value.push(\`第 \${i + 1}/\${totalChunks} 片上传完成（\${chunk.size} 字节）\`)
    }

    // 通知服务端合并分片
    await mergeChunks(file.name, totalChunks)
    onProgress({ percent: 100 })
    logs.value.push('合并完成')
    onSuccess({ url: URL.createObjectURL(file) })
  } catch (err) {
    onError(err as Error)
    logs.value.push(\`上传失败：\${(err as Error).message}\`)
  }
}

/** 模拟单片上传：实际项目里这里会是 fetch('/api/upload-chunk', { method: 'POST', body: formData })。 */
function uploadChunk(name: string, index: number, total: number, chunk: Blob) {
  return new Promise<void>((resolve) => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('index', String(index))
    formData.append('total', String(total))
    formData.append('chunk', chunk)
    // 模拟网络耗时
    setTimeout(resolve, 300)
  })
}

/** 模拟合并请求：fetch('/api/merge-chunks', { method: 'POST', body: JSON.stringify({ name, total }) })。 */
function mergeChunks(_name: string, _total: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 400)
  })
}
<\/script>

<style scoped>
.upload-chunked-log {
  margin-top: 12px;
  padding: 8px 12px;
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
  max-height: 160px;
  overflow-y: auto;
}
</style>
`,St=_({__name:"UploadCustom",setup(t){const a=C([]),d=i=>i.type.startsWith("image/")?i.size/1024/1024<2?!0:(console.error("图片大小不能超过 2MB！"),!1):(console.error("只能上传图片文件！"),!1),n=({file:i,onSuccess:p,onProgress:g})=>{let u=0;const h=setInterval(()=>{u+=20,g({percent:u}),u>=100&&(clearInterval(h),p({url:URL.createObjectURL(i)}))},200)},l=i=>{a.value=i.fileList};return(i,p)=>(x(),E(U(R),{"file-list":a.value,"onUpdate:fileList":p[0]||(p[0]=g=>a.value=g),"custom-request":n,"before-upload":d,accept:".jpg,.jpeg,.png,.gif",onChange:l},{default:b(()=>[o(U(S),null,{default:b(()=>[...p[1]||(p[1]=[c("选择图片",-1)])]),_:1})]),_:1},8,["file-list"]))}}),It=`<template>
  <Upload
    v-model:file-list="fileList"
    :custom-request="customRequest"
    :before-upload="beforeUpload"
    accept=".jpg,.jpeg,.png,.gif"
    @change="handleChange"
  >
    <Button>选择图片</Button>
  </Upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload, Button } from 'ant-design-hmfw'
import type { UploadFile } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([])

const beforeUpload = (file: File) => {
  const isImage = file.type.startsWith('image/')
  if (!isImage) {
    console.error('只能上传图片文件！')
    return false
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    console.error('图片大小不能超过 2MB！')
    return false
  }
  return true
}

const customRequest = ({ file, onSuccess, onProgress }: any) => {
  // 模拟上传进度
  let percent = 0
  const timer = setInterval(() => {
    percent += 20
    onProgress({ percent })
    if (percent >= 100) {
      clearInterval(timer)
      onSuccess({ url: URL.createObjectURL(file) })
    }
  }, 200)
}

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  fileList.value = info.fileList
}
<\/script>
`,qt=_({__name:"UploadDragger",setup(t){const a=C([]),d=l=>{console.log("文件状态：",l.file.status),a.value=l.fileList},n=l=>{var i;console.log("拖拽文件：",(i=l.dataTransfer)==null?void 0:i.files)};return(l,i)=>(x(),E(U(tt),{"file-list":a.value,"onUpdate:fileList":i[0]||(i[0]=p=>a.value=p),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:d,onDrop:n},{default:b(()=>[...i[1]||(i[1]=[f("div",{style:{padding:"32px","text-align":"center"}},[f("p",{style:{"font-size":"48px","margin-bottom":"8px"}},"📥"),f("p",{style:{"font-size":"16px","margin-bottom":"4px"}},"点击或拖拽文件到此区域上传"),f("p",{style:{color:"#999","font-size":"14px"}},"支持单个或批量上传，严禁上传公司数据或其他违禁文件")],-1)])]),_:1},8,["file-list"]))}}),Tt=`<template>
  <UploadDragger
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    :multiple="true"
    @change="handleChange"
    @drop="handleDrop"
  >
    <div style="padding: 32px; text-align: center">
      <p style="font-size: 48px; margin-bottom: 8px">📥</p>
      <p style="font-size: 16px; margin-bottom: 4px">点击或拖拽文件到此区域上传</p>
      <p style="color: #999; font-size: 14px">支持单个或批量上传，严禁上传公司数据或其他违禁文件</p>
    </div>
  </UploadDragger>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploadDragger } from 'ant-design-hmfw'
import type { UploadFile } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([])

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  console.log('文件状态：', info.file.status)
  fileList.value = info.fileList
}

const handleDrop = (event: DragEvent) => {
  console.log('拖拽文件：', event.dataTransfer?.files)
}
<\/script>
`,jt=_({__name:"UploadItemRender",setup(t){const a=C([{uid:"-1",name:"design.pdf",status:"done",url:"https://example.com/design.pdf",size:204800},{uid:"-2",name:"cover.png",status:"done",url:"https://example.com/cover.png",size:102400}]),d=({onSuccess:l,onProgress:i})=>{let p=0;const g=setInterval(()=>{p+=25,i({percent:p}),p>=100&&(clearInterval(g),l({}))},200)},n=(l,i,p,g)=>o("div",{class:"custom-upload-item","data-status":i.status},[o("span",{class:"custom-upload-item-name"},[c("📎 "),i.name]),o("span",{class:"custom-upload-item-status"},[i.status]),o(S,{class:"custom-upload-item-btn",onClick:g.preview},{default:()=>[c("预览")]}),o(S,{class:"custom-upload-item-btn danger",onClick:g.remove},{default:()=>[c("删除")]})]);return(l,i)=>(x(),E(U(R),{"file-list":a.value,"onUpdate:fileList":i[0]||(i[0]=p=>a.value=p),"custom-request":d,"item-render":n,multiple:""},{default:b(()=>[o(U(S),null,{default:b(()=>[...i[1]||(i[1]=[c("自定义渲染",-1)])]),_:1})]),_:1},8,["file-list"]))}}),Et=`<template>
  <Upload v-model:file-list="fileList" :custom-request="customRequest" :item-render="itemRender" multiple>
    <Button>自定义渲染</Button>
  </Upload>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { Upload, Button } from 'ant-design-hmfw'
import type { UploadFile, ItemRenderActions } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([
  {
    uid: '-1',
    name: 'design.pdf',
    status: 'done',
    url: 'https://example.com/design.pdf',
    size: 204800,
  },
  {
    uid: '-2',
    name: 'cover.png',
    status: 'done',
    url: 'https://example.com/cover.png',
    size: 102400,
  },
])

const customRequest = ({ onSuccess, onProgress }: any) => {
  let percent = 0
  const timer = setInterval(() => {
    percent += 25
    onProgress({ percent })
    if (percent >= 100) {
      clearInterval(timer)
      onSuccess({})
    }
  }, 200)
}

/**
 * 自定义渲染：使用 actions 触发内置的预览/删除行为，外观完全自定义。
 * (originNode, file, fileList, actions) => VNode
 */
const itemRender = (_originNode: any, file: UploadFile, _list: UploadFile[], actions: ItemRenderActions) => (
  <div class="custom-upload-item" data-status={file.status}>
    <span class="custom-upload-item-name">📎 {file.name}</span>
    <span class="custom-upload-item-status">{file.status}</span>
    <Button class="custom-upload-item-btn" onClick={actions.preview}>
      预览
    </Button>
    <Button class="custom-upload-item-btn danger" onClick={actions.remove}>
      删除
    </Button>
  </div>
)
<\/script>

<style>
.custom-upload-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  margin-top: 8px;
}

.custom-upload-item-name {
  flex: 1;
  color: #1677ff;
}

.custom-upload-item-status {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
}

.custom-upload-item[data-status='error'] .custom-upload-item-name {
  color: #ff4d4f;
}

.custom-upload-item-btn {
  padding: 2px 8px;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.custom-upload-item-btn.danger {
  color: #ff4d4f;
  border-color: #ffa39e;
}
</style>
`,zt={key:0},Nt=_({__name:"UploadPictureCard",setup(t){const a=C([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]),d=l=>{console.log("预览：",l.url||l.thumbUrl)},n=l=>{a.value=l.fileList};return(l,i)=>(x(),E(U(R),{"file-list":a.value,"onUpdate:fileList":i[0]||(i[0]=p=>a.value=p),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188","list-type":"picture-card","max-count":8,onPreview:d,onChange:n},{default:b(()=>[a.value.length<8?(x(),P("div",zt,[...i[1]||(i[1]=[f("div",null,"+ 上传",-1)])])):Y("",!0)]),_:1},8,["file-list"]))}}),Ot=`<template>
  <Upload
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    list-type="picture-card"
    :max-count="8"
    @preview="handlePreview"
    @change="handleChange"
  >
    <div v-if="fileList.length < 8">
      <div>+ 上传</div>
    </div>
  </Upload>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload } from 'ant-design-hmfw'
import type { UploadFile } from 'ant-design-hmfw'

const fileList = ref<UploadFile[]>([
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
])

const handlePreview = (file: UploadFile) => {
  console.log('预览：', file.url || file.thumbUrl)
}

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  fileList.value = info.fileList
}
<\/script>
`,Mt={class:"markdown-body"},Gt={__name:"upload",setup(t,{expose:a}){return a({frontmatter:{}}),(n,l)=>{const i=vt("DemoBlock");return x(),P("div",Mt,[l[0]||(l[0]=X('<h1 id="upload-上传" tabindex="-1">Upload 上传</h1><p>文件选择上传和拖拽上传控件。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p><ul><li>当需要上传一个或一些文件时。</li><li>当需要展现上传的进度时。</li><li>当需要使用拖拽交互时。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="点击上传" tabindex="-1">点击上传</h3><p>经典款式，用户点击按钮弹出文件选择框。</p>',8)),o(i,{title:"点击上传",source:U(Dt)},{default:b(()=>[o(kt)]),_:1},8,["source"]),l[1]||(l[1]=f("h3",{id:"图片卡片",tabindex:"-1"},"图片卡片",-1)),l[2]||(l[2]=f("p",null,[c("使用 "),f("code",null,'list-type="picture-card"'),c(" 展示图片卡片样式。")],-1)),o(i,{title:"图片卡片",source:U(Ot)},{default:b(()=>[o(Nt)]),_:1},8,["source"]),l[3]||(l[3]=f("h3",{id:"拖拽上传",tabindex:"-1"},"拖拽上传",-1)),l[4]||(l[4]=f("p",null,"可以把文件拖入指定区域，完成上传，同样支持点击上传。",-1)),o(i,{title:"拖拽上传",source:U(Tt)},{default:b(()=>[o(qt)]),_:1},8,["source"]),l[5]||(l[5]=f("h3",{id:"自定义上传",tabindex:"-1"},"自定义上传",-1)),l[6]||(l[6]=f("p",null,[c("通过 "),f("code",null,"custom-request"),c(" 覆盖默认的上传行为，实现自定义上传逻辑。")],-1)),o(i,{title:"自定义上传",source:U(It)},{default:b(()=>[o(St)]),_:1},8,["source"]),l[7]||(l[7]=f("h3",{id:"自定义文件项渲染",tabindex:"-1"},"自定义文件项渲染",-1)),l[8]||(l[8]=f("p",null,[c("通过 "),f("code",null,"item-render"),c(" 自定义文件列表项外观，可通过 "),f("code",null,"actions"),c(" 调用内置的 "),f("code",null,"preview"),c("、"),f("code",null,"download"),c("、"),f("code",null,"remove"),c(" 行为。")],-1)),o(i,{title:"自定义文件项渲染",source:U(Et)},{default:b(()=>[o(jt)]),_:1},8,["source"]),l[9]||(l[9]=f("h3",{id:"分片上传",tabindex:"-1"},"分片上传",-1)),l[10]||(l[10]=f("p",null,[c("大文件场景下，通过 "),f("code",null,"custom-request"),c(" 配合 "),f("code",null,"File.slice()"),c(" 切片，多次请求上传到服务端，最后合并。下面演示了串行分片 + 进度上报的实现思路。")],-1)),o(i,{title:"分片上传",source:U(Pt)},{default:b(()=>[o(Bt)]),_:1},8,["source"]),l[11]||(l[11]=X(`<h2 id="api" tabindex="-1">API</h2><h3 id="upload-props" tabindex="-1">Upload Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>fileList(v-model)</td><td>已经上传的文件列表（受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>defaultFileList</td><td>默认已经上传的文件列表（非受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>accept</td><td>接受上传的文件类型，详见 input accept Attribute</td><td><code>string</code></td><td>-</td></tr><tr><td>action</td><td>上传的地址，支持函数返回字符串或 Promise</td><td><code>string | ((file: File) =&gt; string | Promise&lt;string&gt;)</code></td><td>-</td></tr><tr><td>data</td><td>上传所需额外参数，支持函数返回对象或 Promise</td><td><code>object | ((file: UploadFile) =&gt; object | Promise&lt;object&gt;)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>listType</td><td>上传列表的内建样式</td><td><code>&#39;text&#39; | &#39;picture&#39; | &#39;picture-card&#39; | &#39;picture-circle&#39;</code></td><td><code>&#39;text&#39;</code></td></tr><tr><td>type</td><td>触发器类型，<code>drag</code> 即拖拽上传区域</td><td><code>&#39;select&#39; | &#39;drag&#39;</code></td><td><code>&#39;select&#39;</code></td></tr><tr><td>maxCount</td><td>限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件</td><td><code>number</code></td><td>-</td></tr><tr><td>multiple</td><td>是否支持多选文件</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>发到后台的文件参数名</td><td><code>string</code></td><td><code>&#39;file&#39;</code></td></tr><tr><td>showUploadList</td><td>是否展示文件列表，可对象配置</td><td><code>boolean | { showRemoveIcon?: boolean; showPreviewIcon?: boolean }</code></td><td><code>true</code></td></tr><tr><td>beforeUpload</td><td>上传文件之前的钩子，返回 <code>false</code> 取消，返回 <code>File/Blob</code> 替换上传目标</td><td><code>(file: File, fileList: File[]) =&gt; boolean | File | Blob | Promise&lt;...&gt;</code></td><td>-</td></tr><tr><td>customRequest</td><td>覆盖默认上传行为；第二参数 <code>{ defaultRequest }</code> 可回退默认实现</td><td><code>(options, info?: { defaultRequest }) =&gt; void</code></td><td>-</td></tr><tr><td>onRemove</td><td>删除文件的拦截钩子，返回 <code>false</code> 阻止删除</td><td><code>(file: UploadFile) =&gt; boolean | Promise&lt;boolean&gt;</code></td><td>-</td></tr><tr><td>openFileDialogOnClick</td><td>点击触发器是否弹出文件选择框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>method</td><td>上传请求 HTTP 方法</td><td><code>string</code></td><td><code>&#39;post&#39;</code></td></tr><tr><td>isImageUrl</td><td>自定义判断是否为图片以决定是否显示缩略图</td><td><code>(file: UploadFile) =&gt; boolean</code></td><td>内置：扩展名 + MIME 检测</td></tr><tr><td>itemRender</td><td>自定义文件项渲染</td><td><code>(originNode, file, fileList, actions) =&gt; VNode</code></td><td>-</td></tr></tbody></table><h3 id="uploadfile" tabindex="-1">UploadFile</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>uid</td><td>文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突</td><td><code>string</code></td></tr><tr><td>name</td><td>文件名</td><td><code>string</code></td></tr><tr><td>size</td><td>文件大小（字节）</td><td><code>number</code></td></tr><tr><td>type</td><td>文件类型</td><td><code>string</code></td></tr><tr><td>status</td><td>上传状态</td><td><code>&#39;uploading&#39; | &#39;done&#39; | &#39;error&#39; | &#39;removed&#39;</code></td></tr><tr><td>percent</td><td>上传进度</td><td><code>number</code></td></tr><tr><td>url</td><td>下载链接额外的 html 属性</td><td><code>string</code></td></tr><tr><td>thumbUrl</td><td>缩略图地址</td><td><code>string</code></td></tr></tbody></table><h3 id="upload-events" tabindex="-1">Upload Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:fileList</td><td>文件列表变化时的回调</td><td><code>(fileList: UploadFile[]) =&gt; void</code></td></tr><tr><td>change</td><td>上传文件改变时的状态。进度变化时 <code>event</code> 字段携带 <code>{ percent }</code></td><td><code>(info: { file: UploadFile; fileList: UploadFile[]; event?: { percent: number } }) =&gt; void</code></td></tr><tr><td>remove</td><td>点击移除文件后触发（被 <code>onRemove</code> 拦截 false 时不触发）</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>preview</td><td>点击文件链接或预览图标时的回调</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>drop</td><td>文件拖拽到上传区域释放时触发</td><td><code>(event: DragEvent) =&gt; void</code></td></tr></tbody></table><h3 id="upload-slots" tabindex="-1">Upload Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发上传的控件，通常为按钮或图标</td></tr></tbody></table><h2 id="uploaddragger" tabindex="-1">Upload.Dragger</h2><p><code>&lt;UploadDragger&gt;</code> 是 <code>&lt;Upload type=&quot;drag&quot;&gt;</code> 的便捷别名，等同于 AntD 的 <code>Upload.Dragger</code>。也可通过 <code>Upload.Dragger</code> 访问。</p><pre class="language-vue"><code class="language-vue">&lt;UploadDragger v-model:file-list=&quot;fileList&quot; action=&quot;/api/upload&quot;&gt;
  ...
&lt;/UploadDragger&gt;
</code></pre>`,12))])}}};export{Gt as default};
