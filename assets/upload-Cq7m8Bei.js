import{B as z}from"./Button-Bf04Y6dy.js";import{d as B,u as En,r as w,c as t,F as Sn,a as D,S as Tn,g as d,s as An,B as On,o as I,q as Z,w as h,e as m,b as E,z as Vn,A as Zn,K as $n,_ as Pn,f as c,h as Mn,i as Ln}from"./index-DpCWj_RH.js";import{c as g}from"./cls-S9IiI6wd.js";import{U as In,I as Nn}from"./UploadOutlined-D1DgCBoc.js";import{P as Wn}from"./PlusOutlined-CWRbwEri.js";import"./LoadingOutlined-BZTKujXV.js";function Jn(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!On(n)}let Hn=0;function Kn(){return`__upload_${Date.now()}_${Hn++}`}function Gn(n){return n?n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/1024/1024).toFixed(1)} MB`:""}const Xn=/\.(jpg|jpeg|png|gif|bmp|webp|svg|ico|tiff?|avif|apng|heic|heif)$/i;function Yn(n){if(n.thumbUrl||n.type&&n.type.indexOf("image/")===0)return!0;const o=n.url||"";return o?Xn.test(o)||/^data:image\//.test(o)?!0:!/\.[^./\\]+$/.test(o):!1}async function Qn(n,o){return typeof n=="function"?await n(o):n??""}async function ns(n,o){return typeof n=="function"?await n(o)??{}:n??{}}const L=B({name:"Upload",props:{accept:String,action:[String,Function],directory:Boolean,disabled:Boolean,fileList:Array,defaultFileList:Array,listType:{type:String,default:"text"},type:{type:String,default:"select"},maxCount:Number,multiple:Boolean,name:{type:String,default:"file"},showUploadList:{type:[Boolean,Object],default:!0},beforeUpload:Function,customRequest:Function,headers:Object,data:[Object,Function],withCredentials:Boolean,openFileDialogOnClick:{type:Boolean,default:!0},method:{type:String,default:"post"},onRemove:Function,isImageUrl:Function,itemRender:Function,classNames:Object,styles:Object},emits:["update:fileList","change","remove","preview","download","drop"],setup(n,{slots:o,emit:i}){const a=En("upload"),e=w(),p=w(n.defaultFileList??[]),f=w(0),l=D(()=>f.value>0),r=D(()=>n.fileList??p.value),b=s=>{p.value=s,i("update:fileList",s)},j=s=>{const u=new XMLHttpRequest,k=new FormData;s.data&&Object.entries(s.data).forEach(([v,y])=>k.append(v,y)),k.append(s.filename??"file",s.file),u.upload.onprogress=v=>{v.lengthComputable&&s.onProgress({percent:Math.round(v.loaded/v.total*100)})},u.onload=()=>{u.status>=200&&u.status<300?s.onSuccess(u.response,s.file):s.onError(new Error(`HTTP ${u.status}`))},u.onerror=()=>s.onError(new Error("Network error")),s.withCredentials&&(u.withCredentials=!0),s.headers&&Object.entries(s.headers).forEach(([v,y])=>u.setRequestHeader(v,y)),u.open(n.method??"post",s.action),u.send(k)},T=async s=>{const u=Kn(),k={uid:u,name:s.name,size:s.size,type:s.type,status:"uploading",percent:0,originFileObj:s},v=[...r.value,k];n.maxCount===1?v.splice(0,v.length-1):n.maxCount&&v.length>n.maxCount&&v.splice(n.maxCount),b(v),i("change",{file:k,fileList:v});const y=q=>{const C=r.value.map(U=>U.uid===u?{...U,status:"done",response:q,percent:100}:U);b(C),i("change",{file:{...k,status:"done",percent:100,response:q},fileList:C})},$=(q,C)=>{const U=r.value.map(_=>_.uid===u?{..._,status:"error",error:q,response:C}:_);b(U),i("change",{file:{...k,status:"error",error:q,response:C},fileList:U})},P=q=>{const C=r.value.map(U=>U.uid===u?{...U,percent:q.percent}:U);b(C),i("change",{file:{...k,percent:q.percent},fileList:C,event:q})},N=await Qn(n.action,s),F=await ns(n.data,k),S={action:N,data:F,file:s,filename:n.name,headers:n.headers,withCredentials:n.withCredentials,onSuccess:y,onError:$,onProgress:P};if(n.customRequest){n.customRequest(S,{defaultRequest:j});return}if(!N){setTimeout(()=>y({}),500);return}j(S)},x=async s=>{for(const u of s){let k=u;if(n.beforeUpload){const v=n.beforeUpload(u,s),y=await Promise.resolve(v);if(y===!1)continue;y instanceof File?k=y:y instanceof Blob&&(k=new File([y],u.name,{type:y.type||u.type}))}await T(k)}},R=s=>{const u=Array.from(s.target.files??[]);x(u),e.value&&(e.value.value="")},A=s=>{s.preventDefault(),f.value+=1},M=s=>{s.preventDefault(),f.value=Math.max(0,f.value-1)},O=s=>{s.preventDefault()},W=s=>{var k;if(s.preventDefault(),f.value=0,i("drop",s),n.disabled)return;const u=Array.from(((k=s.dataTransfer)==null?void 0:k.files)??[]);x(u)},J=async s=>{if((n.onRemove?await Promise.resolve(n.onRemove(s)):!0)===!1)return;const k=r.value.filter(v=>v.uid!==s.uid);b(k),i("remove",s),i("change",{file:{...s,status:"removed"},fileList:k})},H=()=>{var s;!n.disabled&&n.openFileDialogOnClick&&((s=e.value)==null||s.click())},V=D(()=>n.listType==="picture-card"||n.listType==="picture-circle"),Dn=D(()=>n.type==="drag"),Bn=D(()=>n.showUploadList!==!1),G=D(()=>typeof n.showUploadList=="object"?n.showUploadList.showRemoveIcon!==!1:!0),jn=D(()=>typeof n.showUploadList=="object"?n.showUploadList.showPreviewIcon!==!1:!0),X=D(()=>typeof n.showUploadList=="object"?!!n.showUploadList.showDownloadIcon:!1),Rn=s=>n.isImageUrl?n.isImageUrl(s):Yn(s),_n=s=>{var v,y,$,P,N,F,S,q,C,U,_,nn,sn,tn,an,en,on,pn,ln,cn,un,rn,dn,kn,mn,gn,fn,vn,yn,hn,bn,xn,qn,Un,Cn,wn;const u=Rn(s),k=s.thumbUrl||s.url;return t("div",{class:g(`${a}-list-item`,{[`${a}-list-item-${s.status}`]:!!s.status},(v=n.classNames)==null?void 0:v.listItem),style:(y=n.styles)==null?void 0:y.listItem},[(n.listType==="picture"||V.value)&&u&&k&&!V.value&&t("div",{class:g(`${a}-list-item-thumbnail`,($=n.classNames)==null?void 0:$.thumbnail),style:(P=n.styles)==null?void 0:P.thumbnail},[t("img",{src:k,alt:s.name},null)]),V.value?t("div",{class:g(`${a}-list-item-card`,(N=n.classNames)==null?void 0:N.itemCard),style:(F=n.styles)==null?void 0:F.itemCard},[u&&k?t("img",{src:k,alt:s.name},null):t("span",{class:g(`${a}-list-item-icon`,(S=n.classNames)==null?void 0:S.itemIcon),style:(q=n.styles)==null?void 0:q.itemIcon},[d("📄")]),s.status==="uploading"&&t("div",{class:g(`${a}-list-item-progress`,(C=n.classNames)==null?void 0:C.progress),style:(U=n.styles)==null?void 0:U.progress},[t("div",{class:g(`${a}-list-item-progress-bar`,(_=n.classNames)==null?void 0:_.progressBar),style:{width:`${s.percent??0}%`,...(nn=n.styles)==null?void 0:nn.progressBar}},null)]),t("div",{class:g(`${a}-list-item-card-actions`,(sn=n.classNames)==null?void 0:sn.cardActions),style:(tn=n.styles)==null?void 0:tn.cardActions},[(s.url||s.thumbUrl)&&jn.value&&t("button",{class:g(`${a}-list-item-action`,(an=n.classNames)==null?void 0:an.itemAction),style:(en=n.styles)==null?void 0:en.itemAction,onClick:()=>i("preview",s)},[d("👁")]),X.value&&s.url&&t("button",{class:g(`${a}-list-item-action`,(on=n.classNames)==null?void 0:on.itemAction),style:(pn=n.styles)==null?void 0:pn.itemAction,onClick:()=>i("download",s)},[d("⬇")]),G.value&&t("button",{class:g(`${a}-list-item-action`,(ln=n.classNames)==null?void 0:ln.itemAction),style:(cn=n.styles)==null?void 0:cn.itemAction,onClick:()=>J(s)},[d("🗑")])])]):t("div",{class:g(`${a}-list-item-info`,(un=n.classNames)==null?void 0:un.itemInfo),style:(rn=n.styles)==null?void 0:rn.itemInfo},[t("span",{class:g(`${a}-list-item-icon`,(dn=n.classNames)==null?void 0:dn.itemIcon),style:(kn=n.styles)==null?void 0:kn.itemIcon},[s.status==="error"?"❌":s.status==="done"?"✅":"📄"]),t("span",{class:g(`${a}-list-item-name`,(mn=n.classNames)==null?void 0:mn.itemName),style:(gn=n.styles)==null?void 0:gn.itemName},[s.name]),t("span",{class:g(`${a}-list-item-size`,(fn=n.classNames)==null?void 0:fn.itemSize),style:(vn=n.styles)==null?void 0:vn.itemSize},[Gn(s.size)]),s.status==="uploading"&&t("div",{class:g(`${a}-list-item-progress`,(yn=n.classNames)==null?void 0:yn.progress),style:(hn=n.styles)==null?void 0:hn.progress},[t("div",{class:g(`${a}-list-item-progress-bar`,(bn=n.classNames)==null?void 0:bn.progressBar),style:{width:`${s.percent??0}%`,...(xn=n.styles)==null?void 0:xn.progressBar}},null)]),X.value&&s.url&&t("button",{class:g(`${a}-list-item-action`,`${a}-list-item-download`,(qn=n.classNames)==null?void 0:qn.itemAction),style:(Un=n.styles)==null?void 0:Un.itemAction,onClick:()=>i("download",s)},[d("⬇")]),G.value&&t("button",{class:g(`${a}-list-item-action`,`${a}-list-item-remove`,(Cn=n.classNames)==null?void 0:Cn.itemAction),style:(wn=n.styles)==null?void 0:wn.itemAction,onClick:()=>J(s)},[d("✕")])])])},Y=()=>{var k,v;let s;return!Bn.value||r.value.length===0?null:t(Tn,{tag:"div",class:g(`${a}-list`,`${a}-list-${n.listType}`,(k=n.classNames)==null?void 0:k.list),style:(v=n.styles)==null?void 0:v.list,name:`${a}-animate`},Jn(s=r.value.map(y=>{var P,N,F,S;const $=_n(y);if(n.itemRender){const q={download:()=>i("download",y),preview:()=>i("preview",y),remove:()=>J(y)};return t("div",{key:y.uid,class:g(`${a}-list-item-container`,(P=n.classNames)==null?void 0:P.listItemContainer),style:(N=n.styles)==null?void 0:N.listItemContainer},[n.itemRender($,y,r.value,q)])}return t("div",{key:y.uid,class:g(`${a}-list-item-container`,(F=n.classNames)==null?void 0:F.listItemContainer),style:(S=n.styles)==null?void 0:S.listItemContainer},[$])}))?s:{default:()=>[s]})},zn=D(()=>n.maxCount?r.value.length<n.maxCount:!0),Q=()=>{var s,u,k,v,y,$,P,N,F,S,q,C,U;return V.value?zn.value?t("div",{class:g(`${a}-select`,`${a}-select-${n.listType}`,{[`${a}-disabled`]:n.disabled},(s=n.classNames)==null?void 0:s.select),style:(u=n.styles)==null?void 0:u.select,onClick:H,onDragenter:A,onDragover:O,onDragleave:M,onDrop:W},[o.default?o.default():t("div",{class:`${a}-select-btn`},[t("span",{class:g(`${a}-select-icon`,(k=n.classNames)==null?void 0:k.selectIcon),style:(v=n.styles)==null?void 0:v.selectIcon},[d("+")]),t("span",{class:g(`${a}-select-text`,(y=n.classNames)==null?void 0:y.selectText),style:($=n.styles)==null?void 0:$.selectText},[d("上传")])])]):null:Dn.value?t("div",{class:g(`${a}-drag`,{[`${a}-drag-uploading`]:r.value.some(_=>_.status==="uploading"),[`${a}-drag-hover`]:l.value,[`${a}-disabled`]:n.disabled},(P=n.classNames)==null?void 0:P.drag),style:(N=n.styles)==null?void 0:N.drag,onClick:H,onDragenter:A,onDragover:O,onDragleave:M,onDrop:W},[t("div",{class:g(`${a}-drag-container`,(F=n.classNames)==null?void 0:F.dragContainer),style:(S=n.styles)==null?void 0:S.dragContainer},[(q=o.default)==null?void 0:q.call(o)])]):t("div",{class:g(`${a}-select`,{[`${a}-disabled`]:n.disabled},(C=n.classNames)==null?void 0:C.select),style:(U=n.styles)==null?void 0:U.select,onClick:H},[o.default?o.default():null])};return()=>{var s,u;return t("div",{class:g(a,{[`${a}-picture-card-wrapper`]:n.listType==="picture-card",[`${a}-picture-circle-wrapper`]:n.listType==="picture-circle"},(s=n.classNames)==null?void 0:s.root),style:(u=n.styles)==null?void 0:u.root},[t("input",{ref:e,type:"file",accept:n.accept,multiple:n.multiple,style:{display:"none"},onChange:R,webkitdirectory:n.directory||void 0},null),V.value?t("div",{class:`${a}-list-${n.listType}-wrapper`},[Y(),Q()]):t(Sn,null,[Q(),Y()])])}}}),Fn=B({name:"UploadDragger",inheritAttrs:!1,setup(n,{slots:o,attrs:i}){return()=>t(L,An(i,{type:"drag"}),{default:()=>{var a;return(a=o.default)==null?void 0:a.call(o)}})}});L.Dragger=Fn;const ss=B({__name:"UploadBasic",setup(n){const o=w([]),i=a=>{a.file.status==="done"?console.log(`${a.file.name} 上传成功`):a.file.status==="error"&&console.log(`${a.file.name} 上传失败`),o.value=a.fileList};return(a,e)=>(I(),Z(m(L),{"file-list":o.value,"onUpdate:fileList":e[0]||(e[0]=p=>o.value=p),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:i},{default:h(()=>[t(m(z),null,{default:h(()=>[...e[1]||(e[1]=[d("点击上传",-1)])]),_:1})]),_:1},8,["file-list"]))}}),ts=`<template>
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
`,as={class:"upload-chunked-demo"},es={key:0,class:"upload-chunked-log"},K=1024*1024,os=B({__name:"UploadChunked",setup(n){const o=w([]),i=w([]),a=l=>(i.value=[],i.value.push(`选中文件 ${l.name}，大小 ${(l.size/1024).toFixed(1)} KB`),!0),e=async l=>{const{file:r,onSuccess:b,onError:j,onProgress:T}=l;try{const x=Math.ceil(r.size/K);i.value.push(`开始分片：共 ${x} 片`);for(let R=0;R<x;R++){const A=R*K,M=Math.min(A+K,r.size),O=r.slice(A,M);await p(r.name,R,x,O);const W=Math.round((R+1)/x*95);T({percent:W}),i.value.push(`第 ${R+1}/${x} 片上传完成（${O.size} 字节）`)}await f(r.name,x),T({percent:100}),i.value.push("合并完成"),b({url:URL.createObjectURL(r)})}catch(x){j(x),i.value.push(`上传失败：${x.message}`)}};function p(l,r,b,j){return new Promise(T=>{const x=new FormData;x.append("name",l),x.append("index",String(r)),x.append("total",String(b)),x.append("chunk",j),setTimeout(T,300)})}function f(l,r){return new Promise(b=>{setTimeout(()=>b(),400)})}return(l,r)=>(I(),E("div",as,[t(m(L),{"file-list":o.value,"onUpdate:fileList":r[0]||(r[0]=b=>o.value=b),"custom-request":e,"before-upload":a,multiple:""},{default:h(()=>[t(m(z),null,{default:h(()=>[...r[1]||(r[1]=[d("分片上传",-1)])]),_:1})]),_:1},8,["file-list"]),i.value.length?(I(),E("div",es,[(I(!0),E(Sn,null,Vn(i.value,(b,j)=>(I(),E("div",{key:j},Zn(b),1))),128))])):$n("",!0)]))}}),ps=Pn(os,[["__scopeId","data-v-6e6c2f1e"]]),ls=`<template>
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
`,cs={style:{display:"flex","flex-direction":"column",gap:"32px"}},is={class:"ant-upload-drag-icon"},us={style:{display:"flex","flex-direction":"column","align-items":"center"}},rs={class:"ant-upload-drag-icon"},ds=B({__name:"UploadClassNames",setup(n){const o=w([]),i=w([]),a=w([]),e=[{uid:"-1",name:"document.pdf",status:"done",url:"https://example.com/document.pdf"},{uid:"-2",name:"readme.txt",status:"done",url:"https://example.com/readme.txt"}],p=[{uid:"-1",name:"image1.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image2.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}];return(f,l)=>(I(),E("div",cs,[c("div",null,[l[4]||(l[4]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义选择按钮样式：",-1)),t(m(L),{action:"/api/upload","file-list":o.value,"class-names":{select:"custom-select",selectIcon:"custom-select-icon",selectText:"custom-select-text"},"onUpdate:fileList":l[0]||(l[0]=r=>o.value=r)},{default:h(()=>[t(m(z),null,{default:h(()=>[t(m(In)),l[3]||(l[3]=d(" 上传文件 ",-1))]),_:1})]),_:1},8,["file-list"])]),c("div",null,[l[6]||(l[6]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义拖拽区样式：",-1)),t(m(L),{action:"/api/upload",type:"drag","file-list":i.value,"class-names":{drag:"custom-drag",dragContainer:"custom-drag-container"},"onUpdate:fileList":l[1]||(l[1]=r=>i.value=r)},{default:h(()=>[c("p",is,[t(m(Nn),{style:{"font-size":"48px",color:"#1890ff"}})]),l[5]||(l[5]=c("p",{class:"ant-upload-text"},"点击或拖拽文件到此区域上传",-1))]),_:1},8,["file-list"])]),c("div",null,[l[8]||(l[8]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义文件列表项样式：",-1)),t(m(L),{action:"/api/upload","default-file-list":e,"class-names":{list:"custom-list",listItem:"custom-list-item",itemIcon:"custom-item-icon",itemName:"custom-item-name"}},{default:h(()=>[t(m(z),null,{default:h(()=>[t(m(In)),l[7]||(l[7]=d(" 上传文件 ",-1))]),_:1})]),_:1})]),c("div",null,[l[10]||(l[10]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"自定义图片卡片样式：",-1)),t(m(L),{action:"/api/upload","list-type":"picture-card","default-file-list":p,"class-names":{itemCard:"custom-card",thumbnail:"custom-thumbnail",cardActions:"custom-actions"}},{default:h(()=>[c("div",us,[t(m(Wn),{style:{"font-size":"24px","margin-bottom":"8px"}}),l[9]||(l[9]=c("div",null,"上传图片",-1))])]),_:1})]),c("div",null,[l[12]||(l[12]=c("div",{style:{"margin-bottom":"8px",color:"#666"}},"使用内联样式控制：",-1)),t(m(L),{action:"/api/upload",type:"drag","file-list":a.value,styles:{drag:{borderColor:"#722ed1",borderWidth:"2px"},dragContainer:{padding:"32px"},progress:{backgroundColor:"rgba(114, 46, 209, 0.1)"},progressBar:{backgroundColor:"#722ed1"}},"onUpdate:fileList":l[2]||(l[2]=r=>a.value=r)},{default:h(()=>[c("p",rs,[t(m(Nn),{style:{"font-size":"48px",color:"#722ed1"}})]),l[11]||(l[11]=c("p",{class:"ant-upload-text",style:{color:"#722ed1"}},"紫色主题拖拽上传",-1))]),_:1},8,["file-list"])])]))}}),ks=Pn(ds,[["__scopeId","data-v-abb70545"]]),ms=`<template>
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
`,gs=B({__name:"UploadCustom",setup(n){const o=w([]),i=p=>p.type.startsWith("image/")?p.size/1024/1024<2?!0:(console.error("图片大小不能超过 2MB！"),!1):(console.error("只能上传图片文件！"),!1),a=({file:p,onSuccess:f,onProgress:l})=>{let r=0;const b=setInterval(()=>{r+=20,l({percent:r}),r>=100&&(clearInterval(b),f({url:URL.createObjectURL(p)}))},200)},e=p=>{o.value=p.fileList};return(p,f)=>(I(),Z(m(L),{"file-list":o.value,"onUpdate:fileList":f[0]||(f[0]=l=>o.value=l),"custom-request":a,"before-upload":i,accept:".jpg,.jpeg,.png,.gif",onChange:e},{default:h(()=>[t(m(z),null,{default:h(()=>[...f[1]||(f[1]=[d("选择图片",-1)])]),_:1})]),_:1},8,["file-list"]))}}),fs=`<template>
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
`,vs=B({__name:"UploadDragger",setup(n){const o=w([]),i=e=>{console.log("文件状态：",e.file.status),o.value=e.fileList},a=e=>{var p;console.log("拖拽文件：",(p=e.dataTransfer)==null?void 0:p.files)};return(e,p)=>(I(),Z(m(Fn),{"file-list":o.value,"onUpdate:fileList":p[0]||(p[0]=f=>o.value=f),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",multiple:!0,onChange:i,onDrop:a},{default:h(()=>[...p[1]||(p[1]=[c("div",{style:{padding:"32px","text-align":"center"}},[c("p",{style:{"font-size":"48px","margin-bottom":"8px"}},"📥"),c("p",{style:{"font-size":"16px","margin-bottom":"4px"}},"点击或拖拽文件到此区域上传"),c("p",{style:{color:"#999","font-size":"14px"}},"支持单个或批量上传，严禁上传公司数据或其他违禁文件")],-1)])]),_:1},8,["file-list"]))}}),ys=`<template>
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
`,hs=B({__name:"UploadItemRender",setup(n){const o=w([{uid:"-1",name:"design.pdf",status:"done",url:"https://example.com/design.pdf",size:204800},{uid:"-2",name:"cover.png",status:"done",url:"https://example.com/cover.png",size:102400}]),i=({onSuccess:e,onProgress:p})=>{let f=0;const l=setInterval(()=>{f+=25,p({percent:f}),f>=100&&(clearInterval(l),e({}))},200)},a=(e,p,f,l)=>t("div",{class:"custom-upload-item","data-status":p.status},[t("span",{class:"custom-upload-item-name"},[d("📎 "),p.name]),t("span",{class:"custom-upload-item-status"},[p.status]),t(z,{class:"custom-upload-item-btn",onClick:l.preview},{default:()=>[d("预览")]}),t(z,{class:"custom-upload-item-btn danger",onClick:l.remove},{default:()=>[d("删除")]})]);return(e,p)=>(I(),Z(m(L),{"file-list":o.value,"onUpdate:fileList":p[0]||(p[0]=f=>o.value=f),"custom-request":i,"item-render":a,multiple:""},{default:h(()=>[t(m(z),null,{default:h(()=>[...p[1]||(p[1]=[d("自定义渲染",-1)])]),_:1})]),_:1},8,["file-list"]))}}),bs=`<template>
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
`,xs={key:0},qs=B({__name:"UploadPictureCard",setup(n){const o=w([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]),i=e=>{console.log("预览：",e.url||e.thumbUrl)},a=e=>{o.value=e.fileList};return(e,p)=>(I(),Z(m(L),{"file-list":o.value,"onUpdate:fileList":p[0]||(p[0]=f=>o.value=f),action:"https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188","list-type":"picture-card","max-count":8,onPreview:i,onChange:a},{default:h(()=>[o.value.length<8?(I(),E("div",xs,[...p[1]||(p[1]=[c("div",null,"+ 上传",-1)])])):$n("",!0)]),_:1},8,["file-list"]))}}),Us=`<template>
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
`,Cs={class:"markdown-body"},Ps={__name:"upload",setup(n,{expose:o}){return o({frontmatter:{}}),(a,e)=>{const p=Mn("DemoBlock");return I(),E("div",Cs,[e[0]||(e[0]=Ln('<h1 id="upload-上传" tabindex="-1">Upload 上传</h1><p>文件选择上传和拖拽上传控件。</p><h2 id="何时使用" tabindex="-1">何时使用</h2><p>上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。</p><ul><li>当需要上传一个或一些文件时。</li><li>当需要展现上传的进度时。</li><li>当需要使用拖拽交互时。</li></ul><h2 id="代码演示" tabindex="-1">代码演示</h2><h3 id="点击上传" tabindex="-1">点击上传</h3><p>经典款式，用户点击按钮弹出文件选择框。</p>',8)),t(p,{title:"点击上传",source:m(ts)},{default:h(()=>[t(ss)]),_:1},8,["source"]),e[1]||(e[1]=c("h3",{id:"图片卡片",tabindex:"-1"},"图片卡片",-1)),e[2]||(e[2]=c("p",null,[d("使用 "),c("code",null,'list-type="picture-card"'),d(" 展示图片卡片样式。")],-1)),t(p,{title:"图片卡片",source:m(Us)},{default:h(()=>[t(qs)]),_:1},8,["source"]),e[3]||(e[3]=c("h3",{id:"拖拽上传",tabindex:"-1"},"拖拽上传",-1)),e[4]||(e[4]=c("p",null,"可以把文件拖入指定区域，完成上传，同样支持点击上传。",-1)),t(p,{title:"拖拽上传",source:m(ys)},{default:h(()=>[t(vs)]),_:1},8,["source"]),e[5]||(e[5]=c("h3",{id:"自定义上传",tabindex:"-1"},"自定义上传",-1)),e[6]||(e[6]=c("p",null,[d("通过 "),c("code",null,"custom-request"),d(" 覆盖默认的上传行为，实现自定义上传逻辑。")],-1)),t(p,{title:"自定义上传",source:m(fs)},{default:h(()=>[t(gs)]),_:1},8,["source"]),e[7]||(e[7]=c("h3",{id:"自定义文件项渲染",tabindex:"-1"},"自定义文件项渲染",-1)),e[8]||(e[8]=c("p",null,[d("通过 "),c("code",null,"item-render"),d(" 自定义文件列表项外观，可通过 "),c("code",null,"actions"),d(" 调用内置的 "),c("code",null,"preview"),d("、"),c("code",null,"download"),d("、"),c("code",null,"remove"),d(" 行为。")],-1)),t(p,{title:"自定义文件项渲染",source:m(bs)},{default:h(()=>[t(hs)]),_:1},8,["source"]),e[9]||(e[9]=c("h3",{id:"分片上传",tabindex:"-1"},"分片上传",-1)),e[10]||(e[10]=c("p",null,[d("大文件场景下，通过 "),c("code",null,"custom-request"),d(" 配合 "),c("code",null,"File.slice()"),d(" 切片，多次请求上传到服务端，最后合并。下面演示了串行分片 + 进度上报的实现思路。")],-1)),t(p,{title:"分片上传",source:m(ls)},{default:h(()=>[t(ps)]),_:1},8,["source"]),e[11]||(e[11]=c("h3",{id:"细粒度样式控制",tabindex:"-1"},"细粒度样式控制",-1)),e[12]||(e[12]=c("p",null,[d("通过 "),c("code",null,"classNames"),d(" / "),c("code",null,"styles"),d(" 对选择按钮、拖拽区、文件列表、卡片等子元素做细粒度样式控制。")],-1)),t(p,{title:"语义化 className 与 style",source:m(ms)},{default:h(()=>[t(ks)]),_:1},8,["source"]),e[13]||(e[13]=Ln(`<h2 id="api" tabindex="-1">API</h2><h3 id="upload-props" tabindex="-1">Upload Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>fileList(v-model)</td><td>已经上传的文件列表（受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>defaultFileList</td><td>默认已经上传的文件列表（非受控）</td><td><code>UploadFile[]</code></td><td>-</td></tr><tr><td>accept</td><td>接受上传的文件类型，详见 input accept Attribute</td><td><code>string</code></td><td>-</td></tr><tr><td>action</td><td>上传的地址，支持函数返回字符串或 Promise</td><td><code>string | ((file: File) =&gt; string | Promise&lt;string&gt;)</code></td><td>-</td></tr><tr><td>data</td><td>上传所需额外参数，支持函数返回对象或 Promise</td><td><code>object | ((file: UploadFile) =&gt; object | Promise&lt;object&gt;)</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>listType</td><td>上传列表的内建样式</td><td><code>&#39;text&#39; | &#39;picture&#39; | &#39;picture-card&#39; | &#39;picture-circle&#39;</code></td><td><code>&#39;text&#39;</code></td></tr><tr><td>type</td><td>触发器类型，<code>drag</code> 即拖拽上传区域</td><td><code>&#39;select&#39; | &#39;drag&#39;</code></td><td><code>&#39;select&#39;</code></td></tr><tr><td>maxCount</td><td>限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件</td><td><code>number</code></td><td>-</td></tr><tr><td>multiple</td><td>是否支持多选文件</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>name</td><td>发到后台的文件参数名</td><td><code>string</code></td><td><code>&#39;file&#39;</code></td></tr><tr><td>showUploadList</td><td>是否展示文件列表，可对象配置</td><td><code>boolean | { showRemoveIcon?: boolean; showPreviewIcon?: boolean }</code></td><td><code>true</code></td></tr><tr><td>beforeUpload</td><td>上传文件之前的钩子，返回 <code>false</code> 取消，返回 <code>File/Blob</code> 替换上传目标</td><td><code>(file: File, fileList: File[]) =&gt; boolean | File | Blob | Promise&lt;...&gt;</code></td><td>-</td></tr><tr><td>customRequest</td><td>覆盖默认上传行为；第二参数 <code>{ defaultRequest }</code> 可回退默认实现</td><td><code>(options, info?: { defaultRequest }) =&gt; void</code></td><td>-</td></tr><tr><td>onRemove</td><td>删除文件的拦截钩子，返回 <code>false</code> 阻止删除</td><td><code>(file: UploadFile) =&gt; boolean | Promise&lt;boolean&gt;</code></td><td>-</td></tr><tr><td>openFileDialogOnClick</td><td>点击触发器是否弹出文件选择框</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>method</td><td>上传请求 HTTP 方法</td><td><code>string</code></td><td><code>&#39;post&#39;</code></td></tr><tr><td>isImageUrl</td><td>自定义判断是否为图片以决定是否显示缩略图</td><td><code>(file: UploadFile) =&gt; boolean</code></td><td>内置：扩展名 + MIME 检测</td></tr><tr><td>itemRender</td><td>自定义文件项渲染</td><td><code>(originNode, file, fileList, actions) =&gt; VNode</code></td><td>-</td></tr><tr><td>classNames</td><td>语义化结构 class，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>UploadClassNames</code></td><td>-</td></tr><tr><td>styles</td><td>语义化结构 style，见下方 <a href="#%E8%AF%AD%E4%B9%89%E5%8C%96-classname-%E4%B8%8E-style">语义化 className 与 style</a></td><td><code>UploadStyles</code></td><td>-</td></tr></tbody></table><h3 id="uploadfile" tabindex="-1">UploadFile</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>uid</td><td>文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突</td><td><code>string</code></td></tr><tr><td>name</td><td>文件名</td><td><code>string</code></td></tr><tr><td>size</td><td>文件大小（字节）</td><td><code>number</code></td></tr><tr><td>type</td><td>文件类型</td><td><code>string</code></td></tr><tr><td>status</td><td>上传状态</td><td><code>&#39;uploading&#39; | &#39;done&#39; | &#39;error&#39; | &#39;removed&#39;</code></td></tr><tr><td>percent</td><td>上传进度</td><td><code>number</code></td></tr><tr><td>url</td><td>下载链接额外的 html 属性</td><td><code>string</code></td></tr><tr><td>thumbUrl</td><td>缩略图地址</td><td><code>string</code></td></tr></tbody></table><h3 id="upload-events" tabindex="-1">Upload Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:fileList</td><td>文件列表变化时的回调</td><td><code>(fileList: UploadFile[]) =&gt; void</code></td></tr><tr><td>change</td><td>上传文件改变时的状态。进度变化时 <code>event</code> 字段携带 <code>{ percent }</code></td><td><code>(info: { file: UploadFile; fileList: UploadFile[]; event?: { percent: number } }) =&gt; void</code></td></tr><tr><td>remove</td><td>点击移除文件后触发（被 <code>onRemove</code> 拦截 false 时不触发）</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>preview</td><td>点击文件链接或预览图标时的回调</td><td><code>(file: UploadFile) =&gt; void</code></td></tr><tr><td>drop</td><td>文件拖拽到上传区域释放时触发</td><td><code>(event: DragEvent) =&gt; void</code></td></tr></tbody></table><h3 id="upload-slots" tabindex="-1">Upload Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发上传的控件，通常为按钮或图标</td></tr></tbody></table><h2 id="uploaddragger" tabindex="-1">Upload.Dragger</h2><p><code>&lt;UploadDragger&gt;</code> 是 <code>&lt;Upload type=&quot;drag&quot;&gt;</code> 的便捷别名，等同于 AntD 的 <code>Upload.Dragger</code>。也可通过 <code>Upload.Dragger</code> 访问。</p><pre class="language-vue"><code>&lt;UploadDragger v-model:file-list=&quot;fileList&quot; action=&quot;/api/upload&quot;&gt;
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
</code></pre><h3 id="注意事项" tabindex="-1">注意事项</h3><ul><li><code>classNames</code> 和 <code>styles</code> 可同时使用，<code>styles</code> 内联样式优先级更高</li><li><code>select</code>、<code>selectIcon</code>、<code>selectText</code> 仅在 <code>type=&quot;select&quot;</code> 时有效</li><li><code>drag</code>、<code>dragContainer</code> 仅在 <code>type=&quot;drag&quot;</code> 时有效</li><li><code>itemCard</code>、<code>thumbnail</code>、<code>cardActions</code> 仅在 <code>list-type=&quot;picture-card&quot;</code> 或 <code>list-type=&quot;picture-circle&quot;</code> 时有效</li><li><code>progress</code>、<code>progressBar</code> 仅在文件上传中状态时渲染</li><li>不同的 <code>listType</code>（<code>text</code>/<code>picture</code>/<code>picture-card</code>/<code>picture-circle</code>）会影响部分节点的渲染逻辑</li></ul><h2 id="设计-token" tabindex="-1">设计 Token</h2><p>Upload 组件使用以下 Design Token 控制样式，可通过 ConfigProvider 全局配置或 CSS 变量覆盖实现主题定制。</p><table><thead><tr><th>Token 名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>--hmfw-color-bg-container</code></td><td>容器背景色</td><td><code>#ffffff</code></td></tr><tr><td><code>--hmfw-color-bg-text-hover</code></td><td>文本悬停背景色</td><td><code>rgba(0,0,0,0.06)</code></td></tr><tr><td><code>--hmfw-color-border</code></td><td>边框色</td><td><code>#d9d9d9</code></td></tr><tr><td><code>--hmfw-color-error</code></td><td>错误状态色</td><td><code>#ff4d4f</code></td></tr><tr><td><code>--hmfw-color-primary</code></td><td>主题色</td><td><code>#1677ff</code></td></tr><tr><td><code>--hmfw-color-primary-bg</code></td><td>主题背景色</td><td><code>#e6f4ff</code>（动态生成）</td></tr><tr><td><code>--hmfw-color-primary-hover</code></td><td>主题色悬停态</td><td><code>#4096ff</code>（动态生成）</td></tr><tr><td><code>--hmfw-color-text-secondary</code></td><td>次级文本色</td><td><code>rgba(0,0,0,0.65)</code></td></tr></tbody></table>`,30))])}}};export{Ps as default};
