import{f as c,g as f,d as _,h as p,o as v,a as m,i as h,_ as g}from"./index-95c313bf.js";function x(o,r){const a=c(0);let s=!1,n=0;function i(e,t){if(!(s||e<0||e>=n)){s=!0,t.ontransitionend=()=>{t.ontransitionend=null,s=!1,a.value=e};for(let l=0;l<n;l++){const d=t.children[l];d.style.transform=`translateY(-${100*e}%)`}}}function u(e){e.addEventListener("wheel",t=>{const l=a.value+(t.deltaY>0?1:-1);i(l,e)},{passive:!0})}return f(()=>{if(o.value!==null){if(n=o.value.children.length,r)for(let e=0;e<n;e++){const t=o.value.children[e];t.style.transition=`transform ${r}`}u(o.value)}}),{currIndex:a}}const b=_({__name:"index",props:{duration:{}},emits:["toPage"],setup(o,{emit:r}){const a=o,s=c(null),{currIndex:n}=x(s,a.duration);return p(n,()=>{r("toPage",n.value)}),(i,u)=>(v(),m("div",{class:"full-page-container fill-up",ref_key:"container",ref:s},[h(i.$slots,"default",{},void 0,!0)],512))}});const P=g(b,[["__scopeId","data-v-9ec70bbe"]]);export{P as default};
