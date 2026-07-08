import{B as z}from"./Button-CnMq9a0G.js";import{d as R,u as Vn,r as U,c as s,F as Bn,a as j,U as Zn,g as d,s as Mn,B as Wn,o as N,q as O,w as h,e as k,b as T,z as Jn,A as Hn,K as jn,_ as Rn,f as c,h as Kn,i as Pn}from"./index-Dhlw_h7w.js";import{I as Gn}from"./Image-CwYtIZgi.js";import{c as g}from"./cls-S9IiI6wd.js";import{E as Xn}from"./EyeOutlined-D5eeo4m9.js";import{D as Yn}from"./DeleteOutlined-CVO9Ogfz.js";import{D as Qn}from"./DownloadOutlined-M_-fC7QA.js";import{U as Fn,I as Dn}from"./UploadOutlined-B3mlyAUl.js";import{P as nt}from"./PlusOutlined-B3sDTzw8.js";import"./LoadingOutlined-BpH-uTyr.js";import"./ZoomOutOutlined-BwqIT2zh.js";import"./CloseOutlined-N_iBbuHV.js";import"./LeftOutlined-Za97E0JE.js";import"./RightOutlined-D0aKK4XH.js";import"./event-CMqgYmge.js";function tt(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!Wn(n)}let st=0;function at(){return`__upload_${Date.now()}_${st++}`}function et(n){return n?n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/1024/1024).toFixed(1)} MB`:""}const ot=/\.(jpg|jpeg|png|gif|bmp|webp|svg|ico|tiff?|avif|apng|heic|heif)$/i;function pt(n){if(n.thumbUrl||n.type&&n.type.indexOf("image/")===0)return!0;const o=n.url||"";return o?ot.test(o)||/^data:image\//.test(o)?!0:!/\.[^./\\]+$/.test(o):!1}async function lt(n,o){return typeof n=="function"?await n(o):n??""}async function ct(n,o){return typeof n=="function"?await n(o)??{}:n??{}}const L=R({name:"Upload",props:{accept:String,action:[String,Function],directory:Boolean,disabled:Boolean,fileList:Array,defaultFileList:Array,listType:{type:String,default:"text"},type:{type:String,default:"select"},maxCount:Number,multiple:Boolean,name:{type:String,default:"file"},showUploadList:{type:[Boolean,Object],default:!0},beforeUpload:Function,customRequest:Function,headers:Object,data:[Object,Function],withCredentials:Boolean,openFileDialogOnClick:{type:Boolean,default:!0},method:{type:String,default:"post"},onRemove:Function,isImageUrl:Function,itemRender:Function,classNames:Object,styles:Object},emits:["update:fileList","change","remove","preview","download","drop"],setup(n,{slots:o,emit:u}){const a=Vn("upload"),e=U(),l=U(n.defaultFileList??[]),y=U(0),p=j(()=>y.value>0),m=U(!1),w=U(""),E=U(""),C=j(()=>n.fileList??l.value),b=t=>{l.value=t,u("update:fileList",t)},B=t=>{const i=new XMLHttpRequest,r=new FormData;t.data&&Object.entries(t.data).forEach(([f,v])=>r.append(f,v)),r.append(t.filename??"file",t.file),i.upload.onprogress=f=>{f.lengthComputable&&t.onProgress({percent:Math.round(f.loaded/f.total*100)})},i.onload=()=>{i.status>=200&&i.status<300?t.onSuccess(i.response,t.file):t.onError(new Error(`HTTP ${i.status}`))},i.onerror=()=>t.onError(new Error("Network error")),t.withCredentials&&(i.withCredentials=!0),t.headers&&Object.entries(t.headers).forEach(([f,v])=>i.setRequestHeader(f,v)),i.open(n.method??"post",t.action),i.send(r)},V=async t=>{const i=at(),r={uid:i,name:t.name,size:t.size,type:t.type,status:"uploading",percent:0,originFileObj:t},f=[...C.value,r];n.maxCount===1?f.splice(0,f.length-1):n.maxCount&&f.length>n.maxCount&&f.splice(n.maxCount),b(f),u("change",{file:r,fileList:f});const v=x=>{const I=C.value.map(q=>q.uid===i?{...q,status:"done",response:x,percent:100}:q);b(I),u("change",{file:{...r,status:"done",percent:100,response:x},fileList:I})},P=(x,I)=>{const q=C.value.map(_=>_.uid===i?{..._,status:"error",error:x,response:I}:_);b(q),u("change",{file:{...r,status:"error",error:x,response:I},fileList:q})},F=x=>{const I=C.value.map(q=>q.uid===i?{...q,percent:x.percent}:q);b(I),u("change",{file:{...r,percent:x.percent},fileList:I,event:x})},S=await lt(n.action,t),D=await ct(n.data,r),$={action:S,data:D,file:t,filename:n.name,headers:n.headers,withCredentials:n.withCredentials,onSuccess:v,onError:P,onProgress:F};if(n.customRequest){n.customRequest($,{defaultRequest:B});return}if(!S){setTimeout(()=>v({}),500);return}B($)},Z=async t=>{for(const i of t){let r=i;if(n.beforeUpload){const f=n.beforeUpload(i,t),v=await Promise.resolve(f);if(v===!1)continue;v instanceof File?r=v:v instanceof Blob&&(r=new File([v],i.name,{type:v.type||i.type}))}await V(r)}},M=t=>{const i=Array.from(t.target.files??[]);Z(i),e.value&&(e.value.value="")},W=t=>{t.preventDefault(),y.value+=1},G=t=>{t.preventDefault(),y.value=Math.max(0,y.value-1)},X=t=>{t.preventDefault()},Y=t=>{var r;if(t.preventDefault(),y.value=0,u("drop",t),n.disabled)return;const i=Array.from(((r=t.dataTransfer)==null?void 0:r.files)??[]);Z(i)},J=async t=>{if((n.onRemove?await Promise.resolve(n.onRemove(t)):!0)===!1)return;const r=C.value.filter(f=>f.uid!==t.uid);b(r),u("remove",t),u("change",{file:{...t,status:"removed"},fileList:r})},Q=t=>{if(u("preview",t),sn(t)){const i=t.url||t.thumbUrl;i&&(w.value=i,E.value=t.name,m.value=!0)}},H=()=>{var t;!n.disabled&&n.openFileDialogOnClick&&((t=e.value)==null||t.click())},A=j(()=>n.listType==="picture-card"||n.listType==="picture-circle"),zn=j(()=>n.type==="drag"),En=j(()=>n.showUploadList!==!1),nn=j(()=>typeof n.showUploadList=="object"?n.showUploadList.showRemoveIcon!==!1:!0),Tn=j(()=>typeof n.showUploadList=="object"?n.showUploadList.showPreviewIcon!==!1:!0),tn=j(()=>typeof n.showUploadList=="object"?!!n.showUploadList.showDownloadIcon:!1),sn=t=>n.isImageUrl?n.isImageUrl(t):pt(t),An=t=>{var f,v,P,F,S,D,$,x,I,q,_,on,pn,ln,cn,un,rn,dn,kn,mn,gn,fn,vn,yn,hn,bn,xn,qn,Un,Cn,wn,In,Ln,Nn,Sn,$n;const i=sn(t),r=t.thumbUrl||t.url;return s("div",{class:g(`${a}-list-item`,{[`${a}-list-item-${t.status}`]:!!t.status},(f=n.classNames)==null?void 0:f.listItem),style:(v=n.styles)==null?void 0:v.listItem},[(n.listType==="picture"||A.value)&&i&&r&&!A.value&&s("div",{class:g(`${a}-list-item-thumbnail`,(P=n.classNames)==null?void 0:P.thumbnail),style:(F=n.styles)==null?void 0:F.thumbnail},[s("img",{src:r,alt:t.name},null)]),A.value?s("div",{class:g(`${a}-list-item-card`,(S=n.classNames)==null?void 0:S.itemCard),style:(D=n.styles)==null?void 0:D.itemCard},[i&&r?s("img",{src:r,alt:t.name},null):s("span",{class:g(`${a}-list-item-icon`,($=n.classNames)==null?void 0:$.itemIcon),style:(x=n.styles)==null?void 0:x.itemIcon},[d("📄")]),t.status==="uploading"&&s("div",{class:g(`${a}-list-item-progress`,(I=n.classNames)==null?void 0:I.progress),style:(q=n.styles)==null?void 0:q.progress},[s("div",{class:g(`${a}-list-item-progress-bar`,(_=n.classNames)==null?void 0:_.progressBar),style:{width:`${t.percent??0}%`,...(on=n.styles)==null?void 0:on.progressBar}},null)]),s("div",{class:g(`${a}-list-item-card-actions`,(pn=n.classNames)==null?void 0:pn.cardActions),style:(ln=n.styles)==null?void 0:ln.cardActions},[(t.url||t.thumbUrl)&&Tn.value&&s("button",{class:g(`${a}-list-item-action`,(cn=n.classNames)==null?void 0:cn.itemAction),style:(un=n.styles)==null?void 0:un.itemAction,onClick:()=>Q(t)},[s(Xn,null,null)]),tn.value&&t.url&&s("button",{class:g(`${a}-list-item-action`,(rn=n.classNames)==null?void 0:rn.itemAction),style:(dn=n.styles)==null?void 0:dn.itemAction,onClick:()=>u("download",t)},[s(Qn,null,null)]),nn.value&&s("button",{class:g(`${a}-list-item-action`,(kn=n.classNames)==null?void 0:kn.itemAction),style:(mn=n.styles)==null?void 0:mn.itemAction,onClick:()=>J(t)},[s(Yn,null,null)])])]):s("div",{class:g(`${a}-list-item-info`,(gn=n.classNames)==null?void 0:gn.itemInfo),style:(fn=n.styles)==null?void 0:fn.itemInfo},[s("span",{class:g(`${a}-list-item-icon`,(vn=n.classNames)==null?void 0:vn.itemIcon),style:(yn=n.styles)==null?void 0:yn.itemIcon},[t.status==="error"?"❌":t.status==="done"?"✅":"📄"]),s("span",{class:g(`${a}-list-item-name`,(hn=n.classNames)==null?void 0:hn.itemName),style:(bn=n.styles)==null?void 0:bn.itemName},[t.name]),s("span",{class:g(`${a}-list-item-size`,(xn=n.classNames)==null?void 0:xn.itemSize),style:(qn=n.styles)==null?void 0:qn.itemSize},[et(t.size)]),t.status==="uploading"&&s("div",{class:g(`${a}-list-item-progress`,(Un=n.classNames)==null?void 0:Un.progress),style:(Cn=n.styles)==null?void 0:Cn.progress},[s("div",{class:g(`${a}-list-item-progress-bar`,(wn=n.classNames)==null?void 0:wn.progressBar),style:{width:`${t.percent??0}%`,...(In=n.styles)==null?void 0:In.progressBar}},null)]),tn.value&&t.url&&s("button",{class:g(`${a}-list-item-action`,`${a}-list-item-download`,(Ln=n.classNames)==null?void 0:Ln.itemAction),style:(Nn=n.styles)==null?void 0:Nn.itemAction,onClick:()=>u("download",t)},[d("⬇")]),nn.value&&s("button",{class:g(`${a}-list-item-action`,`${a}-list-item-remove`,(Sn=n.classNames)==null?void 0:Sn.itemAction),style:($n=n.styles)==null?void 0:$n.itemAction,onClick:()=>J(t)},[d("✕")])])])},an=()=>{var r,f;let t;return!En.value||C.value.length===0?null:s(Zn,{tag:"div",class:g(`${a}-list`,`${a}-list-${n.listType}`,(r=n.classNames)==null?void 0:r.list),style:(f=n.styles)==null?void 0:f.list,name:`${a}-animate`},tt(t=C.value.map(v=>{var F,S,D,$;const P=An(v);if(n.itemRender){const x={download:()=>u("download",v),preview:()=>Q(v),remove:()=>J(v)};return s("div",{key:v.uid,class:g(`${a}-list-item-container`,(F=n.classNames)==null?void 0:F.listItemContainer),style:(S=n.styles)==null?void 0:S.listItemContainer},[n.itemRender(P,v,C.value,x)])}return s("div",{key:v.uid,class:g(`${a}-list-item-container`,(D=n.classNames)==null?void 0:D.listItemContainer),style:($=n.styles)==null?void 0:$.listItemContainer},[P])}))?t:{default:()=>[t]})},On=j(()=>n.maxCount?C.value.length<n.maxCount:!0),en=()=>{var t,i,r,f,v,P,F,S,D,$,x,I,q;return A.value?On.value?s("div",{class:g(`${a}-select`,`${a}-select-${n.listType}`,{[`${a}-disabled`]:n.disabled},(t=n.classNames)==null?void 0:t.select),style:(i=n.styles)==null?void 0:i.select,onClick:H,onDragenter:W,onDragover:X,onDragleave:G,onDrop:Y},[o.default?o.default():s("div",{class:`${a}-select-btn`},[s("span",{class:g(`${a}-select-icon`,(r=n.classNames)==null?void 0:r.selectIcon),style:(f=n.styles)==null?void 0:f.selectIcon},[d("+")]),s("span",{class:g(`${a}-select-text`,(v=n.classNames)==null?void 0:v.selectText),style:(P=n.styles)==null?void 0:P.selectText},[d("上传")])])]):null:zn.value?s("div",{class:g(`${a}-drag`,{[`${a}-drag-uploading`]:C.value.some(_=>_.status==="uploading"),[`${a}-drag-hover`]:p.value,[`${a}-disabled`]:n.disabled},(F=n.classNames)==null?void 0:F.drag),style:(S=n.styles)==null?void 0:S.drag,onClick:H,onDragenter:W,onDragover:X,onDragleave:G,onDrop:Y},[s("div",{class:g(`${a}-drag-container`,(D=n.classNames)==null?void 0:D.dragContainer),style:($=n.styles)==null?void 0:$.dragContainer},[(x=o.default)==null?void 0:x.call(o)])]):s("div",{class:g(`${a}-select`,{[`${a}-disabled`]:n.disabled},(I=n.classNames)==null?void 0:I.select),style:(q=n.styles)==null?void 0:q.select,onClick:H},[o.default?o.default():null])};return()=>{var t,i;return s("div",{class:g(a,{[`${a}-picture-card-wrapper`]:n.listType==="picture-card",[`${a}-picture-circle-wrapper`]:n.listType==="picture-circle"},(t=n.classNames)==null?void 0:t.root),style:(i=n.styles)==null?void 0:i.root},[s("input",{ref:e,type:"file",accept:n.accept,multiple:n.multiple,style:{display:"none"},onChange:M,webkitdirectory:n.directory||void 0},null),A.value?s("div",{class:`${a}-list-${n.listType}-wrapper`},[an(),en()]):s(Bn,null,[en(),an()]),s(Gn,{style:{display:"none"},preview:{open:m.value,onOpenChange:r=>{m.value=r},src:w.value}},null)])}}}),_n=R({name:"UploadDragger",inheritAttrs:!1,setup(n,{slots:o,attrs:u}){return()=>s(L,Mn(u,{type:"drag"}),{default:()=>{var a;return(a=o.default)==null?void 0:a.call(o)}})}});L.Dragger=_n;const it=R({__name:"UploadBasic",setup(n){const o=U([]),u=a=>{a.file.status==="done"?console.log(`${a.file.name} 上传成功`):a.file.status==="error"&&console.log(`${a.file.name} 上传失败`),o.value=a.fileList};return(a,e)=>(N(),O(k(L),{"file-list":o.value,"onUpdate:fileList":e[0]||(e[0]=l=>o.value=l),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:u},{default:h(()=>[s(k(z),null,{default:h(()=>[...e[1]||(e[1]=[d("点击上传",-1)])]),_:1})]),_:1},8,["file-list"]))}}),ut=`<template>
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
`,rt={class:"upload-chunked-demo"},dt={key:0,class:"upload-chunked-log"},K=1024*1024,kt=R({__name:"UploadChunked",setup(n){const o=U([]),u=U([]),a=p=>(u.value=[],u.value.push(`选中文件 ${p.name}，大小 ${(p.size/1024).toFixed(1)} KB`),!0),e=async p=>{const{file:m,onSuccess:w,onError:E,onProgress:C}=p;try{const b=Math.ceil(m.size/K);u.value.push(`开始分片：共 ${b} 片`);for(let B=0;B<b;B++){const V=B*K,Z=Math.min(V+K,m.size),M=m.slice(V,Z);await l(m.name,B,b,M);const W=Math.round((B+1)/b*95);C({percent:W}),u.value.push(`第 ${B+1}/${b} 片上传完成（${M.size} 字节）`)}await y(m.name,b),C({percent:100}),u.value.push("合并完成"),w({url:URL.createObjectURL(m)})}catch(b){E(b),u.value.push(`上传失败：${b.message}`)}};function l(p,m,w,E){return new Promise(C=>{const b=new FormData;b.append("name",p),b.append("index",String(m)),b.append("total",String(w)),b.append("chunk",E),setTimeout(C,300)})}function y(p,m){return new Promise(w=>{setTimeout(()=>w(),400)})}return(p,m)=>(N(),T("div",rt,[s(k(L),{"file-list":o.value,"onUpdate:fileList":m[0]||(m[0]=w=>o.value=w),"custom-request":e,"before-upload":a,multiple:""},{default:h(()=>[s(k(z),null,{default:h(()=>[...m[1]||(m[1]=[d("分片上传",-1)])]),_:1})]),_:1},8,["file-list"]),u.value.length?(N(),T("div",dt,[(N(!0),T(Bn,null,Jn(u.value,(w,E)=>(N(),T("div",{key:E},Hn(w),1))),128))])):jn("",!0)]))}}),mt=Rn(kt,[["__scopeId","data-v-6e6c2f1e"]]),gt=`<template>
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
`,ft={style:{display:"flex","flex-direction":"column",gap:"32px"}},vt={class:"ant-upload-drag-icon"},yt={style:{display:"flex","flex-direction":"column","align-items":"center"}},ht={class:"ant-upload-drag-icon"},bt=R({__name:"UploadClassNames",setup(n){const o=U([]),u=U([]),a=U([]),e=[{uid:"-1",name:"document.pdf",status:"done",url:"https://example.com/document.pdf"},{uid:"-2",name:"readme.txt",status:"done",url:"https://example.com/readme.txt"}],l=[{uid:"-1",name:"image1.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image2.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}];return(y,p)=>(N(),T("div",ft,[c("div",null,[p[4]||(p[4]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义选择按钮样式：",-1)),s(k(L),{action:"/api/upload","file-list":o.value,"class-names":{select:"custom-select",selectIcon:"custom-select-icon",selectText:"custom-select-text"},"onUpdate:fileList":p[0]||(p[0]=m=>o.value=m)},{default:h(()=>[s(k(z),null,{default:h(()=>[s(k(Fn)),p[3]||(p[3]=d(" 上传文件 ",-1))]),_:1})]),_:1},8,["file-list"])]),c("div",null,[p[6]||(p[6]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义拖拽区样式：",-1)),s(k(L),{action:"/api/upload",type:"drag","file-list":u.value,"class-names":{drag:"custom-drag",dragContainer:"custom-drag-container"},"onUpdate:fileList":p[1]||(p[1]=m=>u.value=m)},{default:h(()=>[c("p",vt,[s(k(Dn),{style:{"font-size":"48px",color:"#1890ff"}})]),p[5]||(p[5]=c("p",{class:"ant-upload-text"},"点击或拖拽文件到此区域上传",-1))]),_:1},8,["file-list"])]),c("div",null,[p[8]||(p[8]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义文件列表项样式：",-1)),s(k(L),{action:"/api/upload","default-file-list":e,"class-names":{list:"custom-list",listItem:"custom-list-item",itemIcon:"custom-item-icon",itemName:"custom-item-name"}},{default:h(()=>[s(k(z),null,{default:h(()=>[s(k(Fn)),p[7]||(p[7]=d(" 上传文件 ",-1))]),_:1})]),_:1})]),c("div",null,[p[10]||(p[10]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图片卡片样式：",-1)),s(k(L),{action:"/api/upload","list-type":"picture-card","default-file-list":l,"class-names":{itemCard:"custom-card",thumbnail:"custom-thumbnail",cardActions:"custom-actions"}},{default:h(()=>[c("div",yt,[s(k(nt),{style:{"font-size":"24px","margin-bottom":"8px"}}),p[9]||(p[9]=c("div",null,"上传图片",-1))])]),_:1})]),c("div",null,[p[12]||(p[12]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式控制：",-1)),s(k(L),{action:"/api/upload",type:"drag","file-list":a.value,styles:{drag:{borderColor:"#722ed1",borderWidth:"2px"},dragContainer:{padding:"32px"},progress:{backgroundColor:"rgba(114, 46, 209, 0.1)"},progressBar:{backgroundColor:"#722ed1"}},"onUpdate:fileList":p[2]||(p[2]=m=>a.value=m)},{default:h(()=>[c("p",ht,[s(k(Dn),{style:{"font-size":"48px",color:"#722ed1"}})]),p[11]||(p[11]=c("p",{class:"ant-upload-text",style:{color:"#722ed1"}},"紫色主题拖拽上传",-1))]),_:1},8,["file-list"])])]))}}),xt=Rn(bt,[["__scopeId","data-v-abb70545"]]),qt=`<template>
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
import { UploadOutlined, InboxOutlined, PlusOutlined } from '@hmfw/icons'
import { Upload, Button } from '@hmfw/ant-design'

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
`,Ut=R({__name:"UploadCustom",setup(n){const o=U([]),u=l=>l.type.startsWith("image/")?l.size/1024/1024<2?!0:(console.error("图片大小不能超过 2MB！"),!1):(console.error("只能上传图片文件！"),!1),a=({file:l,onSuccess:y,onProgress:p})=>{let m=0;const w=setInterval(()=>{m+=20,p({percent:m}),m>=100&&(clearInterval(w),y({url:URL.createObjectURL(l)}))},200)},e=l=>{o.value=l.fileList};return(l,y)=>(N(),O(k(L),{"file-list":o.value,"onUpdate:fileList":y[0]||(y[0]=p=>o.value=p),"custom-request":a,"before-upload":u,accept:".jpg,.jpeg,.png,.gif",onChange:e},{default:h(()=>[s(k(z),null,{default:h(()=>[...y[1]||(y[1]=[d("选择图片",-1)])]),_:1})]),_:1},8,["file-list"]))}}),Ct=`<template>
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
`,wt=R({__name:"UploadDragger",setup(n){const o=U([]),u=e=>{console.log("文件状态：",e.file.status),o.value=e.fileList},a=e=>{var l;console.log("拖拽文件：",(l=e.dataTransfer)==null?void 0:l.files)};return(e,l)=>(N(),O(k(_n),{"file-list":o.value,"onUpdate:fileList":l[0]||(l[0]=y=>o.value=y),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:u,onDrop:a},{default:h(()=>[...l[1]||(l[1]=[c("div",{style:{padding:"32px","text-align":"center"}},[c("p",{style:{"font-size":"48px","margin-bottom":"8px"}},"📥"),c("p",{style:{"font-size":"16px","margin-bottom":"4px"}},"点击或拖拽文件到此区域上传"),c("p",{style:{color:"#999","font-size":"14px"}},"支持单个或批量上传，严禁上传公司数据或其他违禁文件")],-1)])]),_:1},8,["file-list"]))}}),It=`<template>
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
`,Lt=R({__name:"UploadItemRender",setup(n){const o=U([{uid:"-1",name:"design.pdf",status:"done",url:"https://example.com/design.pdf",size:204800},{uid:"-2",name:"cover.png",status:"done",url:"https://example.com/cover.png",size:102400}]),u=({onSuccess:e,onProgress:l})=>{let y=0;const p=setInterval(()=>{y+=25,l({percent:y}),y>=100&&(clearInterval(p),e({}))},200)},a=(e,l,y,p)=>s("div",{class:"custom-upload-item","data-status":l.status},[s("span",{class:"custom-upload-item-name"},[d("📎 "),l.name]),s("span",{class:"custom-upload-item-status"},[l.status]),s(z,{class:"custom-upload-item-btn",onClick:p.preview},{default:()=>[d("预览")]}),s(z,{class:"custom-upload-item-btn danger",onClick:p.remove},{default:()=>[d("删除")]})]);return(e,l)=>(N(),O(k(L),{"file-list":o.value,"onUpdate:fileList":l[0]||(l[0]=y=>o.value=y),"custom-request":u,"item-render":a,multiple:""},{default:h(()=>[s(k(z),null,{default:h(()=>[...l[1]||(l[1]=[d("自定义渲染",-1)])]),_:1})]),_:1},8,["file-list"]))}}),Nt=`<template>
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
`,St={key:0},$t=R({__name:"UploadPictureCard",setup(n){const o=U([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]),u=a=>{o.value=a.fileList};return(a,e)=>(N(),O(k(L),{"file-list":o.value,"onUpdate:fileList":e[0]||(e[0]=l=>o.value=l),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188","list-type":"picture-card","max-count":8,onChange:u},{default:h(()=>[o.value.length<8?(N(),T("div",St,[...e[1]||(e[1]=[c("div",null,"+ 上传",-1)])])):jn("",!0)]),_:1},8,["file-list"]))}}),Pt=`<template>
  <Upload
    v-model:file-list="fileList"
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    list-type="picture-card"
    :max-count="8"
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

const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
  fileList.value = info.fileList
}
<\/script>
`,Ft={class:"markdown-body"},Ht={__name:"upload",setup(n,{expose:o}){return o({frontmatter:{}}),(a,e)=>{const l=Kn("DemoBlock");return N(),T("div",Ft,[e[0]||(e[0]=Pn('<h1 id="upload-上传" tabindex="-1">Upload 上传</h1><p>文件选择上传和拖拽上传控件。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p><ul><li>当需要上传一个或一些文件时。</li><li>当需要展现上传的进度时。</li><li>当需要使用拖拽交互时。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="点击上传" tabindex="-1">点击上传</h3><p>经典款式，用户点击按钮弹出文件选择框。</p>',8)),s(l,{title:"点击上传",source:k(ut)},{default:h(()=>[s(it)]),_:1},8,["source"]),e[1]||(e[1]=c("h3",{id:"图片卡片",tabindex:"-1"},"图片卡片",-1)),e[2]||(e[2]=c("p",null,[d("使用 "),c("code",null,'list-type="picture-card"'),d(" 展示图片卡片样式。点击预览图标可查看大图。")],-1)),s(l,{title:"图片卡片",source:k(Pt)},{default:h(()=>[s($t)]),_:1},8,["source"]),e[3]||(e[3]=c("h3",{id:"拖拽上传",tabindex:"-1"},"拖拽上传",-1)),e[4]||(e[4]=c("p",null,"可以把文件拖入指定区域，完成上传，同样支持点击上传。",-1)),s(l,{title:"拖拽上传",source:k(It)},{default:h(()=>[s(wt)]),_:1},8,["source"]),e[5]||(e[5]=c("h3",{id:"自定义上传",tabindex:"-1"},"自定义上传",-1)),e[6]||(e[6]=c("p",null,[d("通过 "),c("code",null,"custom-request"),d(" 覆盖默认的上传行为，实现自定义上传逻辑。")],-1)),s(l,{title:"自定义上传",source:k(Ct)},{default:h(()=>[s(Ut)]),_:1},8,["source"]),e[7]||(e[7]=c("h3",{id:"自定义文件项渲染",tabindex:"-1"},"自定义文件项渲染",-1)),e[8]||(e[8]=c("p",null,[d("通过 "),c("code",null,"item-render"),d(" 自定义文件列表项外观，可通过 "),c("code",null,"actions"),d(" 调用内置的 "),c("code",null,"preview"),d("、"),c("code",null,"download"),d("、"),c("code",null,"remove"),d(" 行为。")],-1)),s(l,{title:"自定义文件项渲染",source:k(Nt)},{default:h(()=>[s(Lt)]),_:1},8,["source"]),e[9]||(e[9]=c("h3",{id:"分片上传",tabindex:"-1"},"分片上传",-1)),e[10]||(e[10]=c("p",null,[d("大文件场景下，通过 "),c("code",null,"custom-request"),d(" 配合 "),c("code",null,"File.slice()"),d(" 切片，多次请求上传到服务端，最后合并。下面演示了串行分片 + 进度上报的实现思路。")],-1)),s(l,{title:"分片上传",source:k(gt)},{default:h(()=>[s(mt)]),_:1},8,["source"]),e[11]||(e[11]=c("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[12]||(e[12]=c("p",null,[d("通过 "),c("code",null,"classNames"),d(" / "),c("code",null,"styles"),d(" 对选择按钮、拖拽区、文件列表、卡片等子元素做细粒度样式控制。")],-1)),s(l,{title:"语义化 className 与 style",source:k(qt)},{default:h(()=>[s(xt)]),_:1},8,["source"]),e[13]||(e[13]=Pn(`<h2 id="api" tabindex="-1">API</h2><h3 id="upload-props" tabindex="-1">Upload Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>fileList(v-model)</td><td>已经上传的文件列表（受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>defaultFileList</td><td>默认已经上传的文件列表（非受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>accept</td><td>接受上传的文件类型，详见 input accept Attribute</td><td><code>string</code></td><td>-</td></tr><tr><td>action</td><td>上传的地址，支持函数返回字符串或 Promise</td><td><code>string | ((file: File) =&gt; string | Promise&lt;string&gt;)</code></td><td>-</td></tr><tr><td>data</td><td>上传所需额外参数，支持函数返回对象或 Promise</td><td><code>object | ((file: UploadFile) =&gt; object | Promise&lt;object&gt;)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>listType</td><td>上传列表的内建样式</td><td><code>&#39;text&#39; | &#39;picture&#39; | &#39;picture-card&#39; | &#39;picture-circle&#39;</code></td><td><code>&#39;text&#39;</code></td></tr><tr><td>type</td><td>触发器类型，<code>drag</code> 即拖拽上传区域</td><td><code>&#39;select&#39; | &#39;drag&#39;</code></td><td><code>&#39;select&#39;</code></td></tr><tr><td>maxCount</td><td>限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件</td><td><code>number</code></td><td>-</td></tr><tr><td>multiple</td><td>是否支持多选文件</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>发到后台的文件参数名</td><td><code>string</code></td><td><code>&#39;file&#39;</code></td></tr><tr><td>showUploadList</td><td>是否展示文件列表，可对象配置</td><td><code>boolean | { showRemoveIcon?: boolean; showPreviewIcon?: boolean }</code></td><td><code>true</code></td></tr><tr><td>beforeUpload</td><td>上传文件之前的钩子，返回 <code>false</code> 取消，返回 <code>File/Blob</code> 替换上传目标</td><td><code>(file: File, fileList: File[]) =&gt; boolean | File | Blob | Promise&lt;...&gt;</code></td><td>-</td></tr><tr><td>customRequest</td><td>覆盖默认上传行为；第二参数 <code>{ defaultRequest }</code> 可回退默认实现</td><td><code>(options, info?: { defaultRequest }) =&gt; void</code></td><td>-</td></tr><tr><td>onRemove</td><td>删除文件的拦截钩子，返回 <code>false</code> 阻止删除</td><td><code>(file: UploadFile) =&gt; boolean | Promise&lt;boolean&gt;</code></td><td>-</td></tr><tr><td>openFileDialogOnClick</td><td>点击触发器是否弹出文件选择框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>method</td><td>上传请求 HTTP 方法</td><td><code>string</code></td><td><code>&#39;post&#39;</code></td></tr><tr><td>isImageUrl</td><td>自定义判断是否为图片以决定是否显示缩略图</td><td><code>(file: UploadFile) =&gt; boolean</code></td><td>内置：扩展名 + MIME 检测</td></tr><tr><td>itemRender</td><td>自定义文件项渲染</td><td><code>(originNode, file, fileList, actions) =&gt; VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>UploadClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>UploadStyles</code></td><td>-</td></tr></tbody></table><h3 id="uploadfile" tabindex="-1">UploadFile</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>uid</td><td>文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突</td><td><code>string</code></td></tr><tr><td>name</td><td>文件名</td><td><code>string</code></td></tr><tr><td>size</td><td>文件大小（字节）</td><td><code>number</code></td></tr><tr><td>type</td><td>文件类型</td><td><code>string</code></td></tr><tr><td>status</td><td>上传状态</td><td><code>&#39;uploading&#39; | &#39;done&#39; | &#39;error&#39; | &#39;removed&#39;</code></td></tr><tr><td>percent</td><td>上传进度</td><td><code>number</code></td></tr><tr><td>url</td><td>下载链接额外的 html 属性</td><td><code>string</code></td></tr><tr><td>thumbUrl</td><td>缩略图地址</td><td><code>string</code></td></tr></tbody></table><h3 id="upload-events" tabindex="-1">Upload Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:fileList</td><td>文件列表变化时的回调</td><td><code>(fileList: UploadFile[]) =&gt; void</code></td></tr><tr><td>change</td><td>上传文件改变时的状态。进度变化时 <code>event</code> 字段携带 <code>{ percent }</code></td><td><code>(info: { file: UploadFile; fileList: UploadFile[]; event?: { percent: number } }) =&gt; void</code></td></tr><tr><td>remove</td><td>点击移除文件后触发（被 <code>onRemove</code> 拦截 false 时不触发）</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>preview</td><td>点击预览图标时触发。对于图片文件，会自动打开内置预览弹窗</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>download</td><td>点击下载图标时触发（需配置 <code>showUploadList.showDownloadIcon</code>）</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>drop</td><td>文件拖拽到上传区域释放时触发</td><td><code>(event: DragEvent) =&gt; void</code></td></tr></tbody></table><h3 id="upload-slots" tabindex="-1">Upload Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发上传的控件，通常为按钮或图标</td></tr></tbody></table><h3 id="图片预览" tabindex="-1">图片预览</h3><p>Upload 组件内置了图片预览功能，当点击图片卡片的预览图标（👁）时：</p><ol><li><strong>自动判断</strong>：通过 <code>isImageUrl</code> 函数判断文件是否为图片</li><li><strong>触发事件</strong>：先触发 <code>@preview</code> 事件，允许用户自定义行为</li><li><strong>内置预览</strong>：对于图片文件，自动打开预览弹窗，支持缩放、旋转等操作</li><li><strong>非图片文件</strong>：只触发 <code>@preview</code> 事件，不打开预览弹窗</li></ol><p><strong>自定义预览行为</strong>：如果需要自定义预览逻辑（如跳转到详情页），可以监听 <code>@preview</code> 事件。内置预览不会影响自定义逻辑的执行。</p><pre class="language-vue"><code>&lt;Upload list-type=&quot;picture-card&quot; @preview=&quot;handlePreview&quot;&gt;
  &lt;!-- 仍会触发内置图片预览 --&gt;
&lt;/Upload&gt;
</code></pre><h2 id="uploaddragger" tabindex="-1">Upload.Dragger</h2><p><code>&lt;UploadDragger&gt;</code> 是 <code>&lt;Upload type=&quot;drag&quot;&gt;</code> 的便捷别名，等同于 AntD 的 <code>Upload.Dragger</code>。也可通过 <code>Upload.Dragger</code> 访问。</p><pre class="language-vue"><code>&lt;UploadDragger v-model:file-list=&quot;fileList&quot; action=&quot;/api/upload&quot;&gt;
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
</code></pre><h3 id="使用-classnames" tabindex="-1">使用 classNames</h3><p>通过 <code>classNames</code> 属性应用自定义 CSS 类：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 自定义拖拽区样式 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/api/upload<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      drag: &#39;my-drag-area&#39;,
      dragContainer: &#39;my-drag-container&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ant-upload-drag-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InboxOutlined</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ant-upload-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击或拖拽文件到此区域上传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Upload</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义文件列表项 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
    <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/api/upload<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      list: &#39;my-file-list&#39;,
      listItem: &#39;my-file-item&#39;,
      itemIcon: &#39;my-file-icon&#39;,
      itemName: &#39;my-file-name&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>上传文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Upload</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义图片卡片 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
    <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/api/upload<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">list-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picture-card<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:class-names</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      itemCard: &#39;my-picture-card&#39;,
      thumbnail: &#39;my-thumbnail&#39;,
      cardActions: &#39;my-actions&#39;,
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>+ 上传图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Upload</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
<span class="token selector">:deep(.my-drag-area)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px dashed #1890ff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>24<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.05<span class="token punctuation">)</span> 0%<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>9<span class="token punctuation">,</span> 109<span class="token punctuation">,</span> 217<span class="token punctuation">,</span> 0.05<span class="token punctuation">)</span> 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-drag-area:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #40a9ff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>135deg<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>24<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span> 0%<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>9<span class="token punctuation">,</span> 109<span class="token punctuation">,</span> 217<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span> 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>24<span class="token punctuation">,</span> 144<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-file-item)</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 12px 16px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>82<span class="token punctuation">,</span> 196<span class="token punctuation">,</span> 26<span class="token punctuation">,</span> 0.05<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>56<span class="token punctuation">,</span> 158<span class="token punctuation">,</span> 13<span class="token punctuation">,</span> 0.05<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>82<span class="token punctuation">,</span> 196<span class="token punctuation">,</span> 26<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-file-item:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>4px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-picture-card)</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 2px dashed #faad14<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">:deep(.my-picture-card:hover)</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4px 12px <span class="token function">rgba</span><span class="token punctuation">(</span>250<span class="token punctuation">,</span> 173<span class="token punctuation">,</span> 20<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="使用-styles" tabindex="-1">使用 styles</h3><p>通过 <code>styles</code> 属性应用内联样式：</p><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 内联样式控制拖拽区 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drag<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/api/upload<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      drag: { borderColor: &#39;#722ed1&#39;, borderWidth: &#39;2px&#39; },
      dragContainer: { padding: &#39;32px&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ant-upload-drag-icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InboxOutlined</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> #722ed1</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ant-upload-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>紫色主题拖拽上传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Upload</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 自定义进度条颜色 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
    <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/api/upload<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      progress: { backgroundColor: &#39;rgba(114, 46, 209, 0.1)&#39; },
      progressBar: { backgroundColor: &#39;#722ed1&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">&gt;</span></span>上传文件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Upload</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 组合使用 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Upload</span>
    <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/api/upload<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">list-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picture-card<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:styles</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      itemCard: { borderRadius: &#39;16px&#39;, borderColor: &#39;#13c2c2&#39; },
      thumbnail: { borderRadius: &#39;12px&#39; },
      cardActions: { background: &#39;linear-gradient(to bottom, transparent, rgba(19, 194, 194, 0.8))&#39; },
    }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>+ 上传<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Upload</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>select</code>、<code>selectIcon</code>、<code>selectText</code> 仅在 <code>type=&quot;select&quot;</code> 时有效</li><li><code>drag</code>、<code>dragContainer</code> 仅在 <code>type=&quot;drag&quot;</code> 时有效</li><li><code>itemCard</code>、<code>thumbnail</code>、<code>cardActions</code> 仅在 <code>list-type=&quot;picture-card&quot;</code> 或 <code>list-type=&quot;picture-circle&quot;</code> 时有效</li><li><code>progress</code>、<code>progressBar</code> 仅在文件上传中状态时渲染</li><li>不同的 <code>listType</code>（<code>text</code>/<code>picture</code>/<code>picture-card</code>/<code>picture-circle</code>）会影响部分节点的渲染逻辑</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Upload 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-bg-text-hover</code></td><td>文本悬停背景色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题背景色</td><td><code>#e6f4ff</code>（动态生成）</td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code>（动态生成）</td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr></tbody></table>`,35))])}}};export{Ht as default};
