import{d as g,k as d,f as i,o as c,a as r,e as n,i as u,j as m,n as f,l as b,p as y,m as W,_ as k}from"./index-95c313bf.js";const x=l=>(y("data-v-efa490cd"),l=l(),W(),l),w={class:"container"},C=x(()=>n("button",{style:{background:"transparent",cursor:"pointer","font-size":"20px"}},"🤡",-1)),S=g({__name:"index",props:{pos:{default:"left"},defaultWidth:{},minWidth:{},maxWidth:{default:1e8},foldable:{type:Boolean,default:!0}},emits:["fold"],setup(l,{emit:p}){const e=l,s=d(()=>!e.pos||e.pos==="left"?{left:"sidebar",right:"main"}:{left:"main",right:"sidebar"}),v=d(()=>e.pos==="left"?1:-1),_=i(null),o=i(e.defaultWidth);function a(){o.value===0?o.value=e.defaultWidth:(p("fold"),o.value=0)}function h(){document.onmousemove=null,document.onmouseup=null,document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null,console.log("up")},console.log("down"),document.onmousemove=t=>{if(console.log("move"),o.value+=v.value*t.movementX,o.value<e.minWidth){if(document.onmouseup===null)return document.onmouseup=null;document.onmouseup(t),e.foldable?a():o.value=e.minWidth}else o.value>e.maxWidth&&(o.value=e.maxWidth)}}return(t,z)=>(c(),r("div",w,[n("div",{class:m(s.value.left),style:f({width:o.value+"px"})},[u(t.$slots,s.value.left,{},void 0,!0)],6),n("div",{class:"line",ref_key:"drag",ref:_,style:f({cursor:o.value===0?"":"col-resize"}),onMousedown:h},[e.foldable?(c(),r("div",{key:0,class:"fold-button",onClick:a},[u(t.$slots,"fold",{onClick:a},()=>[C],!0)])):b("",!0)],36),n("div",{class:m(s.value.right)},[u(t.$slots,s.value.right,{},void 0,!0)],2)]))}});const I=k(S,[["__scopeId","data-v-efa490cd"]]);export{I as default};
