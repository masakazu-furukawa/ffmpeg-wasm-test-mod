(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6609)}])},6609:function(e,r,t){"use strict";function n(e,r,t,n,o,i,a){try{var s=e[i](a),c=s.value}catch(l){return void t(l)}s.done?r(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var r=this,t=arguments;return new Promise((function(o,i){var a=e.apply(r,t);function s(e){n(a,o,i,s,c,"next",e)}function c(e){n(a,o,i,s,c,"throw",e)}s(void 0)}))}}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"===typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(r),t.d(r,{default:function(){return B}});var s=t(655),c=t(5893),l=t(7294),u=t(4298),d=t.n(u);var f=(0,t(1354).Z)(),v=t(2993),m=t(3366),h=t(7462),p=t(6010),g=t(4780),y=t(917),x=t(6622),k=t(8884),b=t(1719),w=t(4867);function S(e){return(0,w.Z)("MuiCircularProgress",e)}(0,t(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const j=["className","color","disableShrink","size","style","thickness","value","variant"];let Z,E,F,P,_=e=>e;const C=44,I=(0,y.F4)(Z||(Z=_`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),D=(0,y.F4)(E||(E=_`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),A=(0,b.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,x.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,h.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,y.iv)(F||(F=_`
      animation: ${0} 1.4s linear infinite;
    `),I))),M=(0,b.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),N=(0,b.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,x.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,h.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,y.iv)(P||(P=_`
      animation: ${0} 1.4s ease-in-out infinite;
    `),D)));var R=l.forwardRef((function(e,r){const t=(0,k.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:o="primary",disableShrink:i=!1,size:a=40,style:s,thickness:l=3.6,value:u=0,variant:d="indeterminate"}=t,f=(0,m.Z)(t,j),v=(0,h.Z)({},t,{color:o,disableShrink:i,size:a,thickness:l,value:u,variant:d}),y=(e=>{const{classes:r,variant:t,color:n,disableShrink:o}=e,i={root:["root",t,`color${(0,x.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,x.Z)(t)}`,o&&"circleDisableShrink"]};return(0,g.Z)(i,S,r)})(v),b={},w={},Z={};if("determinate"===d){const e=2*Math.PI*((C-l)/2);b.strokeDasharray=e.toFixed(3),Z["aria-valuenow"]=Math.round(u),b.strokeDashoffset=`${((100-u)/100*e).toFixed(3)}px`,w.transform="rotate(-90deg)"}return(0,c.jsx)(A,(0,h.Z)({className:(0,p.Z)(y.root,n),style:(0,h.Z)({width:a,height:a},w,s),ownerState:v,ref:r,role:"progressbar"},Z,f,{children:(0,c.jsx)(M,{className:y.svg,ownerState:v,viewBox:"22 22 44 44",children:(0,c.jsx)(N,{className:y.circle,style:b,ownerState:v,cx:C,cy:C,r:(C-l)/2,fill:"none",strokeWidth:l})})}))})),$=t(9630);function B(){var e=(0,l.useState)(),r=(e[0],e[1],(0,l.useState)([])),t=r[0],n=r[1],i=(0,l.useState)(0),u=i[0],m=i[1],h=(0,l.useState)(!1),p=h[0],g=h[1],y=(0,l.useRef)(t);(0,l.useEffect)((function(){var e,r,t,i=FFmpeg.createFFmpeg,c=FFmpeg.fetchFile,l=i({log:!0});l.setProgress((function(e){var r=e.ratio;m(r)})),o((function(){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,l.load()];case 1:return e.sent(),[2]}}))}))();var u=function(){var e=o((function(e){var r,t,o,i,u,d;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:return e.preventDefault(),g(!0),r=[],"change"===e.type?r=e.target.files:"drop"===e.type?r=e.dataTransfer.files:console.error("\u60f3\u5b9a\u5916\u306eevent\u3067\u3059"),t=r[0].name,o=l.FS,i=["writeFile",t],[4,c(r[0])];case 1:return o.apply(l,i.concat(s.sent())),[4,l.run("-i",t,"-r","15","-vf","fade=t=in:st=0:d=0.05","".concat(t,".gif"))];case 2:return s.sent(),u=l.FS("readFile","".concat(t,".gif")),d=URL.createObjectURL(new Blob([u.buffer],{type:"image/gif"})),setTimeout((function(){n(a(y.current).concat([d]))}),500),[2]}}))}));return function(r){return e.apply(this,arguments)}}();null===(e=null===document||void 0===document?void 0:document.getElementById("uploader"))||void 0===e||e.addEventListener("change",u),null===(r=null===document||void 0===document?void 0:document.getElementById("dropArea"))||void 0===r||r.addEventListener("dragover",(function(e){return e.preventDefault()})),null===(t=null===document||void 0===document?void 0:document.getElementById("dropArea"))||void 0===t||t.addEventListener("drop",u)}),[]),(0,l.useEffect)((function(){1===u&&setTimeout((function(){g(!1)}),500)}),[u]),(0,l.useEffect)((function(){y.current=t}),[t]);var x=function(){var e=Math.ceil(100*u);return e>100?100:e};return(0,c.jsxs)("div",{children:[(0,c.jsxs)(f,{id:"dropArea",maxWidth:300,children:[(0,c.jsx)("input",{type:"file",id:"uploader",hidden:!0}),(0,c.jsx)(v.Z,{fullWidth:!0,style:{height:100},variant:"contained",onClick:function(){var e;null===(e=null===document||void 0===document?void 0:document.getElementById("uploader"))||void 0===e||e.click()},children:"upload"})]}),(0,c.jsx)(d(),{strategy:"beforeInteractive",src:"ffmpeg.js"}),(0,c.jsxs)(f,{children:[t.map((function(e){return(0,c.jsxs)(f,{children:[(0,c.jsx)("img",{id:"player",src:e}),(0,c.jsx)("a",{href:e,download:"download.gif",children:"Download GIF"})]},e)})),p&&(0,c.jsxs)(f,{sx:{position:"relative",display:"inline-flex"},children:[(0,c.jsx)(R,{variant:"determinate",value:x()}),(0,c.jsx)(f,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,c.jsx)($.Z,{variant:"caption",component:"div",color:"text.secondary",children:"".concat(x(),"%")})})]})]})]})}},4298:function(e,r,t){e.exports=t(699)}},function(e){e.O(0,[853,774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);