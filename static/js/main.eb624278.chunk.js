(this["webpackJsonpqr-barcode-reader"]=this["webpackJsonpqr-barcode-reader"]||[]).push([[0],{67:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),r=n.n(o),d=(n(67),n(24)),i=n(47),s=n.n(i),l=n(48),u=n.n(l),j=n(116),b=n(117),m=n(114),p=n(110),h=n(8),g=Object(p.a)({root:{display:"flex",alignItems:"center",flexDirection:function(){var e="row";return window.innerWidth<500&&(e="column"),e},justifyContent:"space-around",width:"100%",margin:"1em 0"}}),f=function(e){var t=Object(a.useState)("https://duckduckgo.com"),n=Object(d.a)(t,2),c=n[0],o=n[1],r=g();return Object(h.jsxs)("div",{className:"qr",children:[Object(h.jsx)(j.a,{label:"your link...",value:c,onChange:function(e){o(e.target.value)}}),Object(h.jsxs)(b.a,{classes:r,children:[Object(h.jsx)(s.a,{id:"qrCode",value:c}),Object(h.jsx)(u.a,{delay:500,onScan:function(e){o("string"==typeof e?e:c)},onError:function(e){console.log(e)},style:{width:"15em"}})]}),Object(h.jsx)(m.a,{onClick:function(){var e=document.querySelector("#qrCode").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download="qr.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)},variant:"outlined",children:"Download QR as png"})]})},O=n(50),v=n(37),x=n.n(v),y=Object(p.a)({root:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-around",width:"100%",margin:"1em 0"}}),w=function(e){var t=Object(a.useState)("https://duckduckgo.com"),n=Object(d.a)(t,2),c=n[0],o=n[1],r=y(),i=Object(O.a)({value:c,options:{displayValue:!0}}).inputRef;return Object(a.useEffect)((function(){var e=document.querySelector(".barcode").getBoundingClientRect().width,t=9*e/16;e=e>=700?640:9*e/10,x.a.init({inputStream:{type:"LiveStream",constraints:{width:e,height:t,facingMode:"environment"}},locator:{patchSize:"medium",halfSample:!0},numOfWorkers:2,decoder:{readers:["code_128_reader",{format:"ean_reader",config:{supplements:["ean_5_reader","ean_2_reader"]}},"upc_reader","upc_e_reader","codebar_reader"],debug:{drawBoundingBox:!0,showFrequency:!0,drawScanline:!0,showPattern:!0}},locate:!0},(function(e){if(e)return console.log(e);x.a.start()})),x.a.onDetected((function(e){console.log(e);var t=e.codeResult.code?e.codeResult.code:c;o(t)}))})),Object(h.jsxs)("div",{className:"barcode",children:[Object(h.jsx)(j.a,{label:"your link...",value:c,onChange:function(e){var t=e.target.value;""===t?t=" ":" "===t[0]&&(t=t.slice(1)),o(t)}}),Object(h.jsxs)(b.a,{classes:r,children:[Object(h.jsx)("canvas",{ref:i,id:"barcode"}),Object(h.jsx)("div",{id:"interactive",className:"viewport",style:{maxWidth:"640px",maxHeight:"480px",width:"100%",height:"100%"}})]}),Object(h.jsx)(m.a,{onClick:function(){var e=document.querySelector("#barcode").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download="barcode.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)},variant:"outlined",children:"Download Barcode as png"})]})},k=n(113),C=n(115),q=n(118),S=Object(p.a)({root:{width:"80vw"}}),_=Object(p.a)({root:{background:"#dedede",display:"flex",alignItmes:"center",justifyContent:"space-between",padding:".5em 2em"}}),D=function(e){var t=S(),n=_();return Object(h.jsxs)(k.a,{classes:t,elevation:3,children:[Object(h.jsxs)(b.a,{classes:n,children:[Object(h.jsx)(C.a,{variant:"h4",children:e.type}),Object(h.jsx)(q.a,{onChange:e.handleMode})]}),"qr-code"===e.type?Object(h.jsx)(f,{}):"barcode"===e.type?Object(h.jsx)(w,{}):null]})},R=function(){var e=Object(a.useState)("qr-code"),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(h.jsx)(D,{type:n,handleMode:function(e){var t=e.target.checked?"barcode":"qr-code";c(t)}})};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.eb624278.chunk.js.map