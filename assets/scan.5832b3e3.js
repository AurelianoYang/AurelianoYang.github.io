import{a as p,u,r,o as _,A as v,j as f,k as h,l as a,n as m,p as g,F as y,B as x,C as k}from"./vendor.c65e5af1.js";import{u as B}from"./index.dde3bed9.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";const c=o=>(x("data-v-1e92fdae"),o=o(),k(),o),b=c(()=>a("div",{class:"mask"},null,-1)),I=c(()=>a("div",{class:"line"},null,-1)),j=[I],M={style:{width:"100%",height:"100vh","text-align":"center",opacity:"0.9",background:"#000",position:"relative"}},w=p({setup(o){const d=u(),l=B().rpx,i=r(),s=r();let n;return _(()=>{navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(t=>{if(n=t,i.value){const e=i.value;e.srcObject=t,e.onloadedmetadata=()=>{e.play()}}if(s.value){const e=s.value;e.srcObject=t,e.onloadedmetadata=()=>{e.play()}}}),setTimeout(()=>{d.push("/passVerify")},5e3)}),v(()=>{n&&n.getTracks().forEach(t=>t.stop())}),(t,e)=>(f(),h(y,null,[b,a("div",{class:"scanning",style:m({height:g(l)(150)})},j,4),a("div",M,[a("video",{ref_key:"videoBg",ref:s,style:{transform:"translate(-50%, 0)",position:"absolute",left:"50%",height:"100vh",top:"0","z-index":"-99999"}},null,512)])],64))}});var F=S(w,[["__scopeId","data-v-1e92fdae"]]);export{F as default};
