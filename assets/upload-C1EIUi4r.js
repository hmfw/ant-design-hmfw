import{B as z}from"./Button-BjmJBmDE.js";import{o as B,O as zt,E as w,n as s,F as Nt,f as D,d as Et,m as u,s as Tt,r as At,A as I,i as Z,Q as b,L as g,k as E,G as Ot,K as Vt,j as St,_ as $t,h as c,H as Zt,l as wt}from"./index-ON6sqzpw.js";import{c as k}from"./cls-S9IiI6wd.js";import{U as Lt,I as It}from"./UploadOutlined-DLJasQYk.js";import{P as Mt}from"./PlusOutlined-BP6tHD7v.js";import"./LoadingOutlined-CiFLsQlT.js";function Wt(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!At(t)}let Ht=0;function Jt(){return`__upload_${Date.now()}_${Ht++}`}function Kt(t){return t?t<1024?`${t} B`:t<1024*1024?`${(t/1024).toFixed(1)} KB`:`${(t/1024/1024).toFixed(1)} MB`:""}const Gt=/\.(jpg|jpeg|png|gif|bmp|webp|svg|ico|tiff?|avif|apng|heic|heif)$/i;function Xt(t){if(t.thumbUrl||t.type&&t.type.indexOf("image/")===0)return!0;const o=t.url||"";return o?Gt.test(o)||/^data:image\//.test(o)?!0:!/\.[^./\\]+$/.test(o):!1}async function Yt(t,o){return typeof t=="function"?await t(o):t??""}async function Qt(t,o){return typeof t=="function"?await t(o)??{}:t??{}}const L=B({name:"Upload",props:{accept:String,action:[String,Function],directory:Boolean,disabled:Boolean,fileList:Array,defaultFileList:Array,listType:{type:String,default:"text"},type:{type:String,default:"select"},maxCount:Number,multiple:Boolean,name:{type:String,default:"file"},showUploadList:{type:[Boolean,Object],default:!0},beforeUpload:Function,customRequest:Function,headers:Object,data:[Object,Function],withCredentials:Boolean,openFileDialogOnClick:{type:Boolean,default:!0},method:{type:String,default:"post"},onRemove:Function,isImageUrl:Function,itemRender:Function,classNames:Object,styles:Object},emits:["update:fileList","change","remove","preview","download","drop"],setup(t,{slots:o,emit:i}){const a=zt("upload"),e=w(),l=w(t.defaultFileList??[]),f=w(0),p=D(()=>f.value>0),d=D(()=>t.fileList??l.value),y=n=>{l.value=n,i("update:fileList",n)},j=n=>{const r=new XMLHttpRequest,m=new FormData;n.data&&Object.entries(n.data).forEach(([v,h])=>m.append(v,h)),m.append(n.filename??"file",n.file),r.upload.onprogress=v=>{v.lengthComputable&&n.onProgress({percent:Math.round(v.loaded/v.total*100)})},r.onload=()=>{r.status>=200&&r.status<300?n.onSuccess(r.response,n.file):n.onError(new Error(`HTTP ${r.status}`))},r.onerror=()=>n.onError(new Error("Network error")),n.withCredentials&&(r.withCredentials=!0),n.headers&&Object.entries(n.headers).forEach(([v,h])=>r.setRequestHeader(v,h)),r.open(t.method??"post",n.action),r.send(m)},T=async n=>{const r=Jt(),m={uid:r,name:n.name,size:n.size,type:n.type,status:"uploading",percent:0,originFileObj:n},v=[...d.value,m];t.maxCount===1?v.splice(0,v.length-1):t.maxCount&&v.length>t.maxCount&&v.splice(t.maxCount),y(v),i("change",{file:m,fileList:v});const h=U=>{const C=d.value.map(q=>q.uid===r?{...q,status:"done",response:U,percent:100}:q);y(C),i("change",{file:{...m,status:"done",percent:100,response:U},fileList:C})},$=(U,C)=>{const q=d.value.map(_=>_.uid===r?{..._,status:"error",error:U,response:C}:_);y(q),i("change",{file:{...m,status:"error",error:U,response:C},fileList:q})},P=U=>{const C=d.value.map(q=>q.uid===r?{...q,percent:U.percent}:q);y(C),i("change",{file:{...m,percent:U.percent},fileList:C,event:U})},N=await Yt(t.action,n),F=await Qt(t.data,m),S={action:N,data:F,file:n,filename:t.name,headers:t.headers,withCredentials:t.withCredentials,onSuccess:h,onError:$,onProgress:P};if(t.customRequest){t.customRequest(S,{defaultRequest:j});return}if(!N){setTimeout(()=>h({}),500);return}j(S)},x=async n=>{for(const r of n){let m=r;if(t.beforeUpload){const v=t.beforeUpload(r,n),h=await Promise.resolve(v);if(h===!1)continue;h instanceof File?m=h:h instanceof Blob&&(m=new File([h],r.name,{type:h.type||r.type}))}await T(m)}},R=n=>{const r=Array.from(n.target.files??[]);x(r),e.value&&(e.value.value="")},A=n=>{n.preventDefault(),f.value+=1},M=n=>{n.preventDefault(),f.value=Math.max(0,f.value-1)},O=n=>{n.preventDefault()},W=n=>{var m;if(n.preventDefault(),f.value=0,i("drop",n),t.disabled)return;const r=Array.from(((m=n.dataTransfer)==null?void 0:m.files)??[]);x(r)},H=async n=>{if((t.onRemove?await Promise.resolve(t.onRemove(n)):!0)===!1)return;const m=d.value.filter(v=>v.uid!==n.uid);y(m),i("remove",n),i("change",{file:{...n,status:"removed"},fileList:m})},J=()=>{var n;!t.disabled&&t.openFileDialogOnClick&&((n=e.value)==null||n.click())},V=D(()=>t.listType==="picture-card"||t.listType==="picture-circle"),Ft=D(()=>t.type==="drag"),Dt=D(()=>t.showUploadList!==!1),G=D(()=>typeof t.showUploadList=="object"?t.showUploadList.showRemoveIcon!==!1:!0),Bt=D(()=>typeof t.showUploadList=="object"?t.showUploadList.showPreviewIcon!==!1:!0),X=D(()=>typeof t.showUploadList=="object"?!!t.showUploadList.showDownloadIcon:!1),jt=n=>t.isImageUrl?t.isImageUrl(n):Xt(n),Rt=n=>{var v,h,$,P,N,F,S,U,C,q,_,tt,nt,st,at,et,ot,lt,pt,ct,it,rt,dt,ut,mt,gt,kt,ft,vt,ht,bt,yt,xt,Ut,qt,Ct;const r=jt(n),m=n.thumbUrl||n.url;return s("div",{class:k(`${a}-list-item`,{[`${a}-list-item-${n.status}`]:!!n.status},(v=t.classNames)==null?void 0:v.listItem),style:(h=t.styles)==null?void 0:h.listItem},[(t.listType==="picture"||V.value)&&r&&m&&!V.value&&s("div",{class:k(`${a}-list-item-thumbnail`,($=t.classNames)==null?void 0:$.thumbnail),style:(P=t.styles)==null?void 0:P.thumbnail},[s("img",{src:m,alt:n.name},null)]),V.value?s("div",{class:k(`${a}-list-item-card`,(N=t.classNames)==null?void 0:N.itemCard),style:(F=t.styles)==null?void 0:F.itemCard},[r&&m?s("img",{src:m,alt:n.name},null):s("span",{class:k(`${a}-list-item-icon`,(S=t.classNames)==null?void 0:S.itemIcon),style:(U=t.styles)==null?void 0:U.itemIcon},[u("📄")]),n.status==="uploading"&&s("div",{class:k(`${a}-list-item-progress`,(C=t.classNames)==null?void 0:C.progress),style:(q=t.styles)==null?void 0:q.progress},[s("div",{class:k(`${a}-list-item-progress-bar`,(_=t.classNames)==null?void 0:_.progressBar),style:{width:`${n.percent??0}%`,...(tt=t.styles)==null?void 0:tt.progressBar}},null)]),s("div",{class:k(`${a}-list-item-card-actions`,(nt=t.classNames)==null?void 0:nt.cardActions),style:(st=t.styles)==null?void 0:st.cardActions},[(n.url||n.thumbUrl)&&Bt.value&&s("button",{class:k(`${a}-list-item-action`,(at=t.classNames)==null?void 0:at.itemAction),style:(et=t.styles)==null?void 0:et.itemAction,onClick:()=>i("preview",n)},[u("👁")]),X.value&&n.url&&s("button",{class:k(`${a}-list-item-action`,(ot=t.classNames)==null?void 0:ot.itemAction),style:(lt=t.styles)==null?void 0:lt.itemAction,onClick:()=>i("download",n)},[u("⬇")]),G.value&&s("button",{class:k(`${a}-list-item-action`,(pt=t.classNames)==null?void 0:pt.itemAction),style:(ct=t.styles)==null?void 0:ct.itemAction,onClick:()=>H(n)},[u("🗑")])])]):s("div",{class:k(`${a}-list-item-info`,(it=t.classNames)==null?void 0:it.itemInfo),style:(rt=t.styles)==null?void 0:rt.itemInfo},[s("span",{class:k(`${a}-list-item-icon`,(dt=t.classNames)==null?void 0:dt.itemIcon),style:(ut=t.styles)==null?void 0:ut.itemIcon},[n.status==="error"?"❌":n.status==="done"?"✅":"📄"]),s("span",{class:k(`${a}-list-item-name`,(mt=t.classNames)==null?void 0:mt.itemName),style:(gt=t.styles)==null?void 0:gt.itemName},[n.name]),s("span",{class:k(`${a}-list-item-size`,(kt=t.classNames)==null?void 0:kt.itemSize),style:(ft=t.styles)==null?void 0:ft.itemSize},[Kt(n.size)]),n.status==="uploading"&&s("div",{class:k(`${a}-list-item-progress`,(vt=t.classNames)==null?void 0:vt.progress),style:(ht=t.styles)==null?void 0:ht.progress},[s("div",{class:k(`${a}-list-item-progress-bar`,(bt=t.classNames)==null?void 0:bt.progressBar),style:{width:`${n.percent??0}%`,...(yt=t.styles)==null?void 0:yt.progressBar}},null)]),X.value&&n.url&&s("button",{class:k(`${a}-list-item-action`,`${a}-list-item-download`,(xt=t.classNames)==null?void 0:xt.itemAction),style:(Ut=t.styles)==null?void 0:Ut.itemAction,onClick:()=>i("download",n)},[u("⬇")]),G.value&&s("button",{class:k(`${a}-list-item-action`,`${a}-list-item-remove`,(qt=t.classNames)==null?void 0:qt.itemAction),style:(Ct=t.styles)==null?void 0:Ct.itemAction,onClick:()=>H(n)},[u("✕")])])])},Y=()=>{var m,v;let n;return!Dt.value||d.value.length===0?null:s(Et,{tag:"div",class:k(`${a}-list`,`${a}-list-${t.listType}`,(m=t.classNames)==null?void 0:m.list),style:(v=t.styles)==null?void 0:v.list,name:`${a}-animate`},Wt(n=d.value.map(h=>{var P,N,F,S;const $=Rt(h);if(t.itemRender){const U={download:()=>i("download",h),preview:()=>i("preview",h),remove:()=>H(h)};return s("div",{key:h.uid,class:k(`${a}-list-item-container`,(P=t.classNames)==null?void 0:P.listItemContainer),style:(N=t.styles)==null?void 0:N.listItemContainer},[t.itemRender($,h,d.value,U)])}return s("div",{key:h.uid,class:k(`${a}-list-item-container`,(F=t.classNames)==null?void 0:F.listItemContainer),style:(S=t.styles)==null?void 0:S.listItemContainer},[$])}))?n:{default:()=>[n]})},_t=D(()=>t.maxCount?d.value.length<t.maxCount:!0),Q=()=>{var n,r,m,v,h,$,P,N,F,S,U,C,q;return V.value?_t.value?s("div",{class:k(`${a}-select`,`${a}-select-${t.listType}`,{[`${a}-disabled`]:t.disabled},(n=t.classNames)==null?void 0:n.select),style:(r=t.styles)==null?void 0:r.select,onClick:J,onDragenter:A,onDragover:O,onDragleave:M,onDrop:W},[o.default?o.default():s("div",{class:`${a}-select-btn`},[s("span",{class:k(`${a}-select-icon`,(m=t.classNames)==null?void 0:m.selectIcon),style:(v=t.styles)==null?void 0:v.selectIcon},[u("+")]),s("span",{class:k(`${a}-select-text`,(h=t.classNames)==null?void 0:h.selectText),style:($=t.styles)==null?void 0:$.selectText},[u("上传")])])]):null:Ft.value?s("div",{class:k(`${a}-drag`,{[`${a}-drag-uploading`]:d.value.some(_=>_.status==="uploading"),[`${a}-drag-hover`]:p.value,[`${a}-disabled`]:t.disabled},(P=t.classNames)==null?void 0:P.drag),style:(N=t.styles)==null?void 0:N.drag,onClick:J,onDragenter:A,onDragover:O,onDragleave:M,onDrop:W},[s("div",{class:k(`${a}-drag-container`,(F=t.classNames)==null?void 0:F.dragContainer),style:(S=t.styles)==null?void 0:S.dragContainer},[(U=o.default)==null?void 0:U.call(o)])]):s("div",{class:k(`${a}-select`,{[`${a}-disabled`]:t.disabled},(C=t.classNames)==null?void 0:C.select),style:(q=t.styles)==null?void 0:q.select,onClick:J},[o.default?o.default():null])};return()=>{var n,r;return s("div",{class:k(a,{[`${a}-picture-card-wrapper`]:t.listType==="picture-card",[`${a}-picture-circle-wrapper`]:t.listType==="picture-circle"},(n=t.classNames)==null?void 0:n.root),style:(r=t.styles)==null?void 0:r.root},[s("input",{ref:e,type:"file",accept:t.accept,multiple:t.multiple,style:{display:"none"},onChange:R,webkitdirectory:t.directory||void 0},null),V.value?s("div",{class:`${a}-list-${t.listType}-wrapper`},[Y(),Q()]):s(Nt,null,[Q(),Y()])])}}}),Pt=B({name:"UploadDragger",inheritAttrs:!1,setup(t,{slots:o,attrs:i}){return()=>s(L,Tt(i,{type:"drag"}),{default:()=>{var a;return(a=o.default)==null?void 0:a.call(o)}})}});L.Dragger=Pt;const tn=B({__name:"UploadBasic",setup(t){const o=w([]),i=a=>{a.file.status==="done"?console.log(`${a.file.name} 上传成功`):a.file.status==="error"&&console.log(`${a.file.name} 上传失败`),o.value=a.fileList};return(a,e)=>(I(),Z(g(L),{"file-list":o.value,"onUpdate:fileList":e[0]||(e[0]=l=>o.value=l),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:i},{default:b(()=>[s(g(z),null,{default:b(()=>[...e[1]||(e[1]=[u("点击上传",-1)])]),_:1})]),_:1},8,["file-list"]))}}),nn=`<template>
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
import { Upload, Button } from '@hmfw/ant-design'
import type { UploadFile } from '@hmfw/ant-design'

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
`,sn={class:"upload-chunked-demo"},an={key:0,class:"upload-chunked-log"},K=1024*1024,en=B({__name:"UploadChunked",setup(t){const o=w([]),i=w([]),a=p=>(i.value=[],i.value.push(`选中文件 ${p.name}，大小 ${(p.size/1024).toFixed(1)} KB`),!0),e=async p=>{const{file:d,onSuccess:y,onError:j,onProgress:T}=p;try{const x=Math.ceil(d.size/K);i.value.push(`开始分片：共 ${x} 片`);for(let R=0;R<x;R++){const A=R*K,M=Math.min(A+K,d.size),O=d.slice(A,M);await l(d.name,R,x,O);const W=Math.round((R+1)/x*95);T({percent:W}),i.value.push(`第 ${R+1}/${x} 片上传完成（${O.size} 字节）`)}await f(d.name,x),T({percent:100}),i.value.push("合并完成"),y({url:URL.createObjectURL(d)})}catch(x){j(x),i.value.push(`上传失败：${x.message}`)}};function l(p,d,y,j){return new Promise(T=>{const x=new FormData;x.append("name",p),x.append("index",String(d)),x.append("total",String(y)),x.append("chunk",j),setTimeout(T,300)})}function f(p,d){return new Promise(y=>{setTimeout(()=>y(),400)})}return(p,d)=>(I(),E("div",sn,[s(g(L),{"file-list":o.value,"onUpdate:fileList":d[0]||(d[0]=y=>o.value=y),"custom-request":e,"before-upload":a,multiple:""},{default:b(()=>[s(g(z),null,{default:b(()=>[...d[1]||(d[1]=[u("分片上传",-1)])]),_:1})]),_:1},8,["file-list"]),i.value.length?(I(),E("div",an,[(I(!0),E(Nt,null,Ot(i.value,(y,j)=>(I(),E("div",{key:j},Vt(y),1))),128))])):St("",!0)]))}}),on=$t(en,[["__scopeId","data-v-6e6c2f1e"]]),ln=`<template>
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
import { Upload, Button } from '@hmfw/ant-design'
import type { UploadFile, CustomRequestOptions } from '@hmfw/ant-design'

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
`,pn={style:{display:"flex","flex-direction":"column",gap:"32px"}},cn={class:"ant-upload-drag-icon"},rn={style:{display:"flex","flex-direction":"column","align-items":"center"}},dn={class:"ant-upload-drag-icon"},un=B({__name:"UploadClassNames",setup(t){const o=w([]),i=w([]),a=w([]),e=[{uid:"-1",name:"document.pdf",status:"done",url:"https://example.com/document.pdf"},{uid:"-2",name:"readme.txt",status:"done",url:"https://example.com/readme.txt"}],l=[{uid:"-1",name:"image1.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image2.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}];return(f,p)=>(I(),E("div",pn,[c("div",null,[p[4]||(p[4]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义选择按钮样式：",-1)),s(g(L),{action:"/api/upload","file-list":o.value,"class-names":{select:"custom-select",selectIcon:"custom-select-icon",selectText:"custom-select-text"},"onUpdate:fileList":p[0]||(p[0]=d=>o.value=d)},{default:b(()=>[s(g(z),null,{default:b(()=>[s(g(Lt)),p[3]||(p[3]=u(" 上传文件 ",-1))]),_:1})]),_:1},8,["file-list"])]),c("div",null,[p[6]||(p[6]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义拖拽区样式：",-1)),s(g(L),{action:"/api/upload",type:"drag","file-list":i.value,"class-names":{drag:"custom-drag",dragContainer:"custom-drag-container"},"onUpdate:fileList":p[1]||(p[1]=d=>i.value=d)},{default:b(()=>[c("p",cn,[s(g(It),{style:{"font-size":"48px",color:"#1890ff"}})]),p[5]||(p[5]=c("p",{class:"ant-upload-text"},"点击或拖拽文件到此区域上传",-1))]),_:1},8,["file-list"])]),c("div",null,[p[8]||(p[8]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义文件列表项样式：",-1)),s(g(L),{action:"/api/upload","default-file-list":e,"class-names":{list:"custom-list",listItem:"custom-list-item",itemIcon:"custom-item-icon",itemName:"custom-item-name"}},{default:b(()=>[s(g(z),null,{default:b(()=>[s(g(Lt)),p[7]||(p[7]=u(" 上传文件 ",-1))]),_:1})]),_:1})]),c("div",null,[p[10]||(p[10]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图片卡片样式：",-1)),s(g(L),{action:"/api/upload","list-type":"picture-card","default-file-list":l,"class-names":{itemCard:"custom-card",thumbnail:"custom-thumbnail",cardActions:"custom-actions"}},{default:b(()=>[c("div",rn,[s(g(Mt),{style:{"font-size":"24px","margin-bottom":"8px"}}),p[9]||(p[9]=c("div",null,"上传图片",-1))])]),_:1})]),c("div",null,[p[12]||(p[12]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式控制：",-1)),s(g(L),{action:"/api/upload",type:"drag","file-list":a.value,styles:{drag:{borderColor:"#722ed1",borderWidth:"2px"},dragContainer:{padding:"32px"},progress:{backgroundColor:"rgba(114, 46, 209, 0.1)"},progressBar:{backgroundColor:"#722ed1"}},"onUpdate:fileList":p[2]||(p[2]=d=>a.value=d)},{default:b(()=>[c("p",dn,[s(g(It),{style:{"font-size":"48px",color:"#722ed1"}})]),p[11]||(p[11]=c("p",{class:"ant-upload-text",style:{color:"#722ed1"}},"紫色主题拖拽上传",-1))]),_:1},8,["file-list"])])]))}}),mn=$t(un,[["__scopeId","data-v-e9f94437"]]),gn=`<template>
  <div style="display: flex; flex-direction: column; gap: 32px">
    <!-- 场景 1：自定义选择按钮 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义选择按钮样式：</div>
      <Upload
        action="/api/upload"
        :file-list="fileList1"
        :class-names="{
          select: 'custom-select',
          selectIcon: 'custom-select-icon',
          selectText: 'custom-select-text',
        }"
        @update:file-list="fileList1 = $event"
      >
        <Button>
          <UploadOutlined />
          上传文件
        </Button>
      </Upload>
    </div>

    <!-- 场景 2：自定义拖拽区 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义拖拽区样式：</div>
      <Upload
        action="/api/upload"
        type="drag"
        :file-list="fileList2"
        :class-names="{
          drag: 'custom-drag',
          dragContainer: 'custom-drag-container',
        }"
        @update:file-list="fileList2 = $event"
      >
        <p class="ant-upload-drag-icon">
          <InboxOutlined style="font-size: 48px; color: #1890ff" />
        </p>
        <p class="ant-upload-text">点击或拖拽文件到此区域上传</p>
      </Upload>
    </div>

    <!-- 场景 3：自定义文件列表项 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义文件列表项样式：</div>
      <Upload
        action="/api/upload"
        :default-file-list="defaultFiles"
        :class-names="{
          list: 'custom-list',
          listItem: 'custom-list-item',
          itemIcon: 'custom-item-icon',
          itemName: 'custom-item-name',
        }"
      >
        <Button>
          <UploadOutlined />
          上传文件
        </Button>
      </Upload>
    </div>

    <!-- 场景 4：自定义图片卡片 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义图片卡片样式：</div>
      <Upload
        action="/api/upload"
        list-type="picture-card"
        :default-file-list="pictureFiles"
        :class-names="{
          itemCard: 'custom-card',
          thumbnail: 'custom-thumbnail',
          cardActions: 'custom-actions',
        }"
      >
        <div style="display: flex; flex-direction: column; align-items: center">
          <PlusOutlined style="font-size: 24px; margin-bottom: 8px" />
          <div>上传图片</div>
        </div>
      </Upload>
    </div>

    <!-- 场景 5：使用内联样式 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">使用内联样式控制：</div>
      <Upload
        action="/api/upload"
        type="drag"
        :file-list="fileList3"
        :styles="{
          drag: { borderColor: '#722ed1', borderWidth: '2px' },
          dragContainer: { padding: '32px' },
          progress: { backgroundColor: 'rgba(114, 46, 209, 0.1)' },
          progressBar: { backgroundColor: '#722ed1' },
        }"
        @update:file-list="fileList3 = $event"
      >
        <p class="ant-upload-drag-icon">
          <InboxOutlined style="font-size: 48px; color: #722ed1" />
        </p>
        <p class="ant-upload-text" style="color: #722ed1">紫色主题拖拽上传</p>
      </Upload>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Upload, Button, UploadOutlined, InboxOutlined, PlusOutlined } from '@hmfw/ant-design'

const fileList1 = ref([])
const fileList2 = ref([])
const fileList3 = ref([])

const defaultFiles = [
  {
    uid: '-1',
    name: 'document.pdf',
    status: 'done' as const,
    url: 'https://example.com/document.pdf',
  },
  {
    uid: '-2',
    name: 'readme.txt',
    status: 'done' as const,
    url: 'https://example.com/readme.txt',
  },
]

const pictureFiles = [
  {
    uid: '-1',
    name: 'image1.png',
    status: 'done' as const,
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'image2.png',
    status: 'done' as const,
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
]
<\/script>

<style scoped>
/* 自定义选择按钮 */
:deep(.custom-select) {
  display: inline-block;
  transition: all 0.3s;
}

:deep(.custom-select-icon) {
  font-size: 18px;
  color: #1890ff;
  margin-right: 8px;
}

:deep(.custom-select-text) {
  font-weight: 500;
  color: #1890ff;
}

/* 自定义拖拽区 */
:deep(.custom-drag) {
  border: 2px dashed #1890ff !important;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, rgba(9, 109, 217, 0.05) 100%);
  transition: all 0.3s;
}

:deep(.custom-drag:hover) {
  border-color: #40a9ff !important;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.1) 0%, rgba(9, 109, 217, 0.1) 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.2);
}

:deep(.custom-drag-container) {
  padding: 32px;
}

/* 自定义文件列表 */
:deep(.custom-list) {
  margin-top: 16px;
}

:deep(.custom-list-item) {
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  background: linear-gradient(to right, rgba(82, 196, 26, 0.05), rgba(56, 158, 13, 0.05));
  border: 1px solid rgba(82, 196, 26, 0.2);
  transition: all 0.3s;
}

:deep(.custom-list-item:hover) {
  background: linear-gradient(to right, rgba(82, 196, 26, 0.1), rgba(56, 158, 13, 0.1));
  border-color: rgba(82, 196, 26, 0.4);
  transform: translateX(4px);
}

:deep(.custom-item-icon) {
  color: #52c41a;
  font-size: 18px;
}

:deep(.custom-item-name) {
  color: #389e0d;
  font-weight: 500;
}

/* 自定义图片卡片 */
:deep(.custom-card) {
  border-radius: 12px;
  border: 2px dashed #faad14;
  background: linear-gradient(135deg, rgba(250, 173, 20, 0.05) 0%, rgba(250, 219, 20, 0.05) 100%);
  transition: all 0.3s;
}

:deep(.custom-card:hover) {
  border-color: #ffc53d;
  box-shadow: 0 4px 12px rgba(250, 173, 20, 0.3);
  transform: translateY(-2px);
}

:deep(.custom-thumbnail) {
  border-radius: 8px;
  overflow: hidden;
}

:deep(.custom-actions) {
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
}
</style>
`,kn=B({__name:"UploadCustom",setup(t){const o=w([]),i=l=>l.type.startsWith("image/")?l.size/1024/1024<2?!0:(console.error("图片大小不能超过 2MB！"),!1):(console.error("只能上传图片文件！"),!1),a=({file:l,onSuccess:f,onProgress:p})=>{let d=0;const y=setInterval(()=>{d+=20,p({percent:d}),d>=100&&(clearInterval(y),f({url:URL.createObjectURL(l)}))},200)},e=l=>{o.value=l.fileList};return(l,f)=>(I(),Z(g(L),{"file-list":o.value,"onUpdate:fileList":f[0]||(f[0]=p=>o.value=p),"custom-request":a,"before-upload":i,accept:".jpg,.jpeg,.png,.gif",onChange:e},{default:b(()=>[s(g(z),null,{default:b(()=>[...f[1]||(f[1]=[u("选择图片",-1)])]),_:1})]),_:1},8,["file-list"]))}}),fn=`<template>
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
import { Upload, Button } from '@hmfw/ant-design'
import type { UploadFile } from '@hmfw/ant-design'

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
`,vn=B({__name:"UploadDragger",setup(t){const o=w([]),i=e=>{console.log("文件状态：",e.file.status),o.value=e.fileList},a=e=>{var l;console.log("拖拽文件：",(l=e.dataTransfer)==null?void 0:l.files)};return(e,l)=>(I(),Z(g(Pt),{"file-list":o.value,"onUpdate:fileList":l[0]||(l[0]=f=>o.value=f),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:i,onDrop:a},{default:b(()=>[...l[1]||(l[1]=[c("div",{style:{padding:"32px","text-align":"center"}},[c("p",{style:{"font-size":"48px","margin-bottom":"8px"}},"📥"),c("p",{style:{"font-size":"16px","margin-bottom":"4px"}},"点击或拖拽文件到此区域上传"),c("p",{style:{color:"#999","font-size":"14px"}},"支持单个或批量上传，严禁上传公司数据或其他违禁文件")],-1)])]),_:1},8,["file-list"]))}}),hn=`<template>
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
import { UploadDragger } from '@hmfw/ant-design'
import type { UploadFile } from '@hmfw/ant-design'

const fileList = ref<UploadFile[]>([])

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  console.log('文件状态：', info.file.status)
  fileList.value = info.fileList
}

const handleDrop = (event: DragEvent) => {
  console.log('拖拽文件：', event.dataTransfer?.files)
}
<\/script>
`,bn=B({__name:"UploadItemRender",setup(t){const o=w([{uid:"-1",name:"design.pdf",status:"done",url:"https://example.com/design.pdf",size:204800},{uid:"-2",name:"cover.png",status:"done",url:"https://example.com/cover.png",size:102400}]),i=({onSuccess:e,onProgress:l})=>{let f=0;const p=setInterval(()=>{f+=25,l({percent:f}),f>=100&&(clearInterval(p),e({}))},200)},a=(e,l,f,p)=>s("div",{class:"custom-upload-item","data-status":l.status},[s("span",{class:"custom-upload-item-name"},[u("📎 "),l.name]),s("span",{class:"custom-upload-item-status"},[l.status]),s(z,{class:"custom-upload-item-btn",onClick:p.preview},{default:()=>[u("预览")]}),s(z,{class:"custom-upload-item-btn danger",onClick:p.remove},{default:()=>[u("删除")]})]);return(e,l)=>(I(),Z(g(L),{"file-list":o.value,"onUpdate:fileList":l[0]||(l[0]=f=>o.value=f),"custom-request":i,"item-render":a,multiple:""},{default:b(()=>[s(g(z),null,{default:b(()=>[...l[1]||(l[1]=[u("自定义渲染",-1)])]),_:1})]),_:1},8,["file-list"]))}}),yn=`<template>
  <Upload v-model:file-list="fileList" :custom-request="customRequest" :item-render="itemRender" multiple>
    <Button>自定义渲染</Button>
  </Upload>
</template>

<script setup lang="tsx">
import { ref } from 'vue'
import { Upload, Button } from '@hmfw/ant-design'
import type { UploadFile, ItemRenderActions } from '@hmfw/ant-design'

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
`,xn={key:0},Un=B({__name:"UploadPictureCard",setup(t){const o=w([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]),i=e=>{console.log("预览：",e.url||e.thumbUrl)},a=e=>{o.value=e.fileList};return(e,l)=>(I(),Z(g(L),{"file-list":o.value,"onUpdate:fileList":l[0]||(l[0]=f=>o.value=f),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188","list-type":"picture-card","max-count":8,onPreview:i,onChange:a},{default:b(()=>[o.value.length<8?(I(),E("div",xn,[...l[1]||(l[1]=[c("div",null,"+ 上传",-1)])])):St("",!0)]),_:1},8,["file-list"]))}}),qn=`<template>
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
import { Upload } from '@hmfw/ant-design'
import type { UploadFile } from '@hmfw/ant-design'

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
`,Cn={class:"markdown-body"},Pn={__name:"upload",setup(t,{expose:o}){return o({frontmatter:{}}),(a,e)=>{const l=Zt("DemoBlock");return I(),E("div",Cn,[e[0]||(e[0]=wt('<h1 id="upload-上传" tabindex="-1">Upload 上传</h1><p>文件选择上传和拖拽上传控件。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p><ul><li>当需要上传一个或一些文件时。</li><li>当需要展现上传的进度时。</li><li>当需要使用拖拽交互时。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="点击上传" tabindex="-1">点击上传</h3><p>经典款式，用户点击按钮弹出文件选择框。</p>',8)),s(l,{title:"点击上传",source:g(nn)},{default:b(()=>[s(tn)]),_:1},8,["source"]),e[1]||(e[1]=c("h3",{id:"图片卡片",tabindex:"-1"},"图片卡片",-1)),e[2]||(e[2]=c("p",null,[u("使用 "),c("code",null,'list-type="picture-card"'),u(" 展示图片卡片样式。")],-1)),s(l,{title:"图片卡片",source:g(qn)},{default:b(()=>[s(Un)]),_:1},8,["source"]),e[3]||(e[3]=c("h3",{id:"拖拽上传",tabindex:"-1"},"拖拽上传",-1)),e[4]||(e[4]=c("p",null,"可以把文件拖入指定区域，完成上传，同样支持点击上传。",-1)),s(l,{title:"拖拽上传",source:g(hn)},{default:b(()=>[s(vn)]),_:1},8,["source"]),e[5]||(e[5]=c("h3",{id:"自定义上传",tabindex:"-1"},"自定义上传",-1)),e[6]||(e[6]=c("p",null,[u("通过 "),c("code",null,"custom-request"),u(" 覆盖默认的上传行为，实现自定义上传逻辑。")],-1)),s(l,{title:"自定义上传",source:g(fn)},{default:b(()=>[s(kn)]),_:1},8,["source"]),e[7]||(e[7]=c("h3",{id:"自定义文件项渲染",tabindex:"-1"},"自定义文件项渲染",-1)),e[8]||(e[8]=c("p",null,[u("通过 "),c("code",null,"item-render"),u(" 自定义文件列表项外观，可通过 "),c("code",null,"actions"),u(" 调用内置的 "),c("code",null,"preview"),u("、"),c("code",null,"download"),u("、"),c("code",null,"remove"),u(" 行为。")],-1)),s(l,{title:"自定义文件项渲染",source:g(yn)},{default:b(()=>[s(bn)]),_:1},8,["source"]),e[9]||(e[9]=c("h3",{id:"分片上传",tabindex:"-1"},"分片上传",-1)),e[10]||(e[10]=c("p",null,[u("大文件场景下，通过 "),c("code",null,"custom-request"),u(" 配合 "),c("code",null,"File.slice()"),u(" 切片，多次请求上传到服务端，最后合并。下面演示了串行分片 + 进度上报的实现思路。")],-1)),s(l,{title:"分片上传",source:g(ln)},{default:b(()=>[s(on)]),_:1},8,["source"]),e[11]||(e[11]=c("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[12]||(e[12]=c("p",null,[u("通过 "),c("code",null,"classNames"),u(" / "),c("code",null,"styles"),u(" 对选择按钮、拖拽区、文件列表、卡片等子元素做细粒度样式控制。")],-1)),s(l,{title:"语义化 className 与 style",source:g(gn)},{default:b(()=>[s(mn)]),_:1},8,["source"]),e[13]||(e[13]=wt(`<h2 id="api" tabindex="-1">API</h2><h3 id="upload-props" tabindex="-1">Upload Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>fileList(v-model)</td><td>已经上传的文件列表（受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>defaultFileList</td><td>默认已经上传的文件列表（非受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>accept</td><td>接受上传的文件类型，详见 input accept Attribute</td><td><code>string</code></td><td>-</td></tr><tr><td>action</td><td>上传的地址，支持函数返回字符串或 Promise</td><td><code>string | ((file: File) =&gt; string | Promise&lt;string&gt;)</code></td><td>-</td></tr><tr><td>data</td><td>上传所需额外参数，支持函数返回对象或 Promise</td><td><code>object | ((file: UploadFile) =&gt; object | Promise&lt;object&gt;)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>listType</td><td>上传列表的内建样式</td><td><code>&#39;text&#39; | &#39;picture&#39; | &#39;picture-card&#39; | &#39;picture-circle&#39;</code></td><td><code>&#39;text&#39;</code></td></tr><tr><td>type</td><td>触发器类型，<code>drag</code> 即拖拽上传区域</td><td><code>&#39;select&#39; | &#39;drag&#39;</code></td><td><code>&#39;select&#39;</code></td></tr><tr><td>maxCount</td><td>限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件</td><td><code>number</code></td><td>-</td></tr><tr><td>multiple</td><td>是否支持多选文件</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>发到后台的文件参数名</td><td><code>string</code></td><td><code>&#39;file&#39;</code></td></tr><tr><td>showUploadList</td><td>是否展示文件列表，可对象配置</td><td><code>boolean | { showRemoveIcon?: boolean; showPreviewIcon?: boolean }</code></td><td><code>true</code></td></tr><tr><td>beforeUpload</td><td>上传文件之前的钩子，返回 <code>false</code> 取消，返回 <code>File/Blob</code> 替换上传目标</td><td><code>(file: File, fileList: File[]) =&gt; boolean | File | Blob | Promise&lt;...&gt;</code></td><td>-</td></tr><tr><td>customRequest</td><td>覆盖默认上传行为；第二参数 <code>{ defaultRequest }</code> 可回退默认实现</td><td><code>(options, info?: { defaultRequest }) =&gt; void</code></td><td>-</td></tr><tr><td>onRemove</td><td>删除文件的拦截钩子，返回 <code>false</code> 阻止删除</td><td><code>(file: UploadFile) =&gt; boolean | Promise&lt;boolean&gt;</code></td><td>-</td></tr><tr><td>openFileDialogOnClick</td><td>点击触发器是否弹出文件选择框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>method</td><td>上传请求 HTTP 方法</td><td><code>string</code></td><td><code>&#39;post&#39;</code></td></tr><tr><td>isImageUrl</td><td>自定义判断是否为图片以决定是否显示缩略图</td><td><code>(file: UploadFile) =&gt; boolean</code></td><td>内置：扩展名 + MIME 检测</td></tr><tr><td>itemRender</td><td>自定义文件项渲染</td><td><code>(originNode, file, fileList, actions) =&gt; VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>UploadClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>UploadStyles</code></td><td>-</td></tr></tbody></table><h3 id="uploadfile" tabindex="-1">UploadFile</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>uid</td><td>文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突</td><td><code>string</code></td></tr><tr><td>name</td><td>文件名</td><td><code>string</code></td></tr><tr><td>size</td><td>文件大小（字节）</td><td><code>number</code></td></tr><tr><td>type</td><td>文件类型</td><td><code>string</code></td></tr><tr><td>status</td><td>上传状态</td><td><code>&#39;uploading&#39; | &#39;done&#39; | &#39;error&#39; | &#39;removed&#39;</code></td></tr><tr><td>percent</td><td>上传进度</td><td><code>number</code></td></tr><tr><td>url</td><td>下载链接额外的 html 属性</td><td><code>string</code></td></tr><tr><td>thumbUrl</td><td>缩略图地址</td><td><code>string</code></td></tr></tbody></table><h3 id="upload-events" tabindex="-1">Upload Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:fileList</td><td>文件列表变化时的回调</td><td><code>(fileList: UploadFile[]) =&gt; void</code></td></tr><tr><td>change</td><td>上传文件改变时的状态。进度变化时 <code>event</code> 字段携带 <code>{ percent }</code></td><td><code>(info: { file: UploadFile; fileList: UploadFile[]; event?: { percent: number } }) =&gt; void</code></td></tr><tr><td>remove</td><td>点击移除文件后触发（被 <code>onRemove</code> 拦截 false 时不触发）</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>preview</td><td>点击文件链接或预览图标时的回调</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>drop</td><td>文件拖拽到上传区域释放时触发</td><td><code>(event: DragEvent) =&gt; void</code></td></tr></tbody></table><h3 id="upload-slots" tabindex="-1">Upload Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发上传的控件，通常为按钮或图标</td></tr></tbody></table><h2 id="uploaddragger" tabindex="-1">Upload.Dragger</h2><p><code>&lt;UploadDragger&gt;</code> 是 <code>&lt;Upload type=&quot;drag&quot;&gt;</code> 的便捷别名，等同于 AntD 的 <code>Upload.Dragger</code>。也可通过 <code>Upload.Dragger</code> 访问。</p><pre class="language-vue"><code class="language-vue">&lt;UploadDragger v-model:file-list=&quot;fileList&quot; action=&quot;/api/upload&quot;&gt;
  ...
&lt;/UploadDragger&gt;
</code></pre><hr><h2 id="语义化-classname-与-style" tabindex="-1">语义化 className 与 style</h2><p>通过 <code>classNames</code> 和 <code>styles</code> 属性可以对上传组件的各个子节点应用自定义样式，支持细粒度控制。</p><h3 id="类型定义" tabindex="-1">类型定义</h3><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CSSProperties <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">UploadClassNames</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 根容器</span>
  select<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选择按钮容器</span>
  selectIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选择按钮图标</span>
  selectText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 选择按钮文本</span>
  drag<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 拖拽容器</span>
  dragContainer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 拖拽内部容器</span>
  list<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 文件列表容器</span>
  listItem<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表项</span>
  listItemContainer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 列表项外层容器</span>
  thumbnail<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 缩略图容器</span>
  itemInfo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 文件信息容器</span>
  itemIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 文件图标</span>
  itemName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 文件名</span>
  itemSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 文件大小</span>
  itemCard<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 卡片模式容器</span>
  cardActions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 卡片操作区</span>
  itemAction<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 操作按钮</span>
  progress<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 进度条容器</span>
  progressBar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 进度条</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UploadStyles</span> <span class="token punctuation">{</span>
  root<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  select<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  selectIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  selectText<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  drag<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  dragContainer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  list<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  listItem<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  listItemContainer<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  thumbnail<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemInfo<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemIcon<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemName<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemSize<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemCard<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  cardActions<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  itemAction<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  progress<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
  progressBar<span class="token operator">?</span><span class="token operator">:</span> CSSProperties
<span class="token punctuation">}</span>
</code></pre><h3 id="dom-结构与-classname-映射" tabindex="-1">DOM 结构与 className 映射</h3><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 选择按钮模式 (type=&quot;select&quot;) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-select<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.select / styles.select 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-select-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.selectIcon / styles.selectIcon 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-select-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.selectText / styles.selectText 应用于此 --&gt;</span>
      上传文件
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.list / styles.list 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.listItemContainer / styles.listItemContainer 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.listItem / styles.listItem 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.itemIcon / styles.itemIcon 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.itemInfo / styles.itemInfo 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.itemName / styles.itemName 应用于此 --&gt;</span>
            文件名.pdf
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-size<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.itemSize / styles.itemSize 应用于此 --&gt;</span>
            1.2 MB
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 拖拽上传模式 (type=&quot;drag&quot;) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ↑ classNames.root / styles.root 应用于此 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-drag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.drag / styles.drag 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-drag-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.dragContainer / styles.dragContainer 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ant-upload-drag-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ant-upload-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击或拖拽文件到此区域上传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 图片卡片模式 (list-type=&quot;picture-card&quot;) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list hmfw-upload-list-picture-card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.list / styles.list 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.listItemContainer / styles.listItemContainer 应用于此 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-card<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- ↑ classNames.itemCard / styles.itemCard 应用于此 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-thumbnail<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.thumbnail / styles.thumbnail 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-actions<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token comment">&lt;!-- ↑ classNames.cardActions / styles.cardActions 应用于此 --&gt;</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-action<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!-- ↑ classNames.itemAction / styles.itemAction 应用于此 --&gt;</span>
            预览
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 上传进度 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-progress<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ↑ classNames.progress / styles.progress 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmfw-upload-list-item-progress-bar<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 60%</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- ↑ classNames.progressBar / styles.progressBar 应用于此 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 自定义拖拽区样式 --&gt;
  &lt;Upload
    type=&quot;drag&quot;
    action=&quot;/api/upload&quot;
    :class-names=&quot;{
      drag: &#39;my-drag-area&#39;,
      dragContainer: &#39;my-drag-container&#39;,
    }&quot;
  &gt;
    &lt;p class=&quot;ant-upload-drag-icon&quot;&gt;
      &lt;InboxOutlined /&gt;
    &lt;/p&gt;
    &lt;p class=&quot;ant-upload-text&quot;&gt;点击或拖拽文件到此区域上传&lt;/p&gt;
  &lt;/Upload&gt;

  &lt;!-- 自定义文件列表项 --&gt;
  &lt;Upload
    action=&quot;/api/upload&quot;
    :class-names=&quot;{
      list: &#39;my-file-list&#39;,
      listItem: &#39;my-file-item&#39;,
      itemIcon: &#39;my-file-icon&#39;,
      itemName: &#39;my-file-name&#39;,
    }&quot;
  &gt;
    &lt;Button&gt;上传文件&lt;/Button&gt;
  &lt;/Upload&gt;

  &lt;!-- 自定义图片卡片 --&gt;
  &lt;Upload
    action=&quot;/api/upload&quot;
    list-type=&quot;picture-card&quot;
    :class-names=&quot;{
      itemCard: &#39;my-picture-card&#39;,
      thumbnail: &#39;my-thumbnail&#39;,
      cardActions: &#39;my-actions&#39;,
    }&quot;
  &gt;
    &lt;div&gt;+ 上传图片&lt;/div&gt;
  &lt;/Upload&gt;
&lt;/template&gt;

&lt;style scoped&gt;
:deep(.my-drag-area) {
  border: 2px dashed #1890ff;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.05) 0%, rgba(9, 109, 217, 0.05) 100%);
  transition: all 0.3s;
}

:deep(.my-drag-area:hover) {
  border-color: #40a9ff;
  background: linear-gradient(135deg, rgba(24, 144, 255, 0.1) 0%, rgba(9, 109, 217, 0.1) 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.2);
}

:deep(.my-file-item) {
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  background: linear-gradient(to right, rgba(82, 196, 26, 0.05), rgba(56, 158, 13, 0.05));
  border: 1px solid rgba(82, 196, 26, 0.2);
  transition: all 0.3s;
}

:deep(.my-file-item:hover) {
  transform: translateX(4px);
}

:deep(.my-picture-card) {
  border-radius: 12px;
  border: 2px dashed #faad14;
  transition: all 0.3s;
}

:deep(.my-picture-card:hover) {
  box-shadow: 0 4px 12px rgba(250, 173, 20, 0.3);
}
&lt;/style&gt;
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code class="language-vue">&lt;template&gt;
  &lt;!-- 内联样式控制拖拽区 --&gt;
  &lt;Upload
    type=&quot;drag&quot;
    action=&quot;/api/upload&quot;
    :styles=&quot;{
      drag: { borderColor: &#39;#722ed1&#39;, borderWidth: &#39;2px&#39; },
      dragContainer: { padding: &#39;32px&#39; },
    }&quot;
  &gt;
    &lt;p class=&quot;ant-upload-drag-icon&quot;&gt;
      &lt;InboxOutlined style=&quot;color: #722ed1&quot; /&gt;
    &lt;/p&gt;
    &lt;p class=&quot;ant-upload-text&quot;&gt;紫色主题拖拽上传&lt;/p&gt;
  &lt;/Upload&gt;

  &lt;!-- 自定义进度条颜色 --&gt;
  &lt;Upload
    action=&quot;/api/upload&quot;
    :styles=&quot;{
      progress: { backgroundColor: &#39;rgba(114, 46, 209, 0.1)&#39; },
      progressBar: { backgroundColor: &#39;#722ed1&#39; },
    }&quot;
  &gt;
    &lt;Button&gt;上传文件&lt;/Button&gt;
  &lt;/Upload&gt;

  &lt;!-- 组合使用 --&gt;
  &lt;Upload
    action=&quot;/api/upload&quot;
    list-type=&quot;picture-card&quot;
    :styles=&quot;{
      itemCard: { borderRadius: &#39;16px&#39;, borderColor: &#39;#13c2c2&#39; },
      thumbnail: { borderRadius: &#39;12px&#39; },
      cardActions: { background: &#39;linear-gradient(to bottom, transparent, rgba(19, 194, 194, 0.8))&#39; },
    }&quot;
  &gt;
    &lt;div&gt;+ 上传&lt;/div&gt;
  &lt;/Upload&gt;
&lt;/template&gt;
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>select</code>、<code>selectIcon</code>、<code>selectText</code> 仅在 <code>type=&quot;select&quot;</code> 时有效</li><li><code>drag</code>、<code>dragContainer</code> 仅在 <code>type=&quot;drag&quot;</code> 时有效</li><li><code>itemCard</code>、<code>thumbnail</code>、<code>cardActions</code> 仅在 <code>list-type=&quot;picture-card&quot;</code> 或 <code>list-type=&quot;picture-circle&quot;</code> 时有效</li><li><code>progress</code>、<code>progressBar</code> 仅在文件上传中状态时渲染</li><li>不同的 <code>listType</code>（<code>text</code>/<code>picture</code>/<code>picture-card</code>/<code>picture-circle</code>）会影响部分节点的渲染逻辑</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Upload 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-bg-text-hover</code></td><td>文本悬停背景色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题背景色</td><td><code>#e6f4ff</code>（动态生成）</td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code>（动态生成）</td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr></tbody></table>`,30))])}}};export{Pn as default};
