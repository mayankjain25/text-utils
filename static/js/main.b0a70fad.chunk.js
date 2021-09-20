(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),l=c.n(a),r=(c(10),c(2)),o=(c(11),c(0));var i=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"alert alert-".concat(e.alert.type,' d-flex align-items-center" role="alert"'),children:Object(o.jsx)("div",{children:Object(o.jsx)("strong",{children:e.alert.msg})})})})})};var d=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})})})]})})})},b=(c(13),c(5));function h(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)(!1),i=Object(r.a)(l,2),d=(i[0],i[1]);return Object(o.jsxs)("div",{style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsxs)("div",{className:"mb-3 container",children:[Object(o.jsx)("h1",{className:"textform-heading",children:e.heading}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("textarea",{placeholder:"Enter your text here",className:"form-control input-textarea",style:{backgroundColor:"light"===e.mode?"white":"lightgray"},id:"my-textarea",rows:"10",value:s,onChange:function(e){a(e.target.value)}}),Object(o.jsxs)("div",{className:"copy-and-dark",children:[Object(o.jsx)(b.CopyToClipboard,{text:s,onCopy:function(){e.showAlert("Copied!","success"),d(!0),setTimeout((function(){d(!1)}),1e3)},children:Object(o.jsx)("div",{className:"copy-area",children:Object(o.jsx)("button",{className:"btn btn-dark my-3",children:"Copy"})})}),Object(o.jsxs)("div",{className:"form-check form-switch dark-mode-toggler ",children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]}),Object(o.jsx)("div",{className:"color-picker-container",children:Object(o.jsx)("input",{title:"Any color picked from here will be applied if you press the dark mode switch",type:"color",name:"colorchooser",onChange:function(t){e.colorPicker(t.target.value)}})})]})]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("p",{children:[s.split(" ").filter((function(e){return 0!==e.length})).length," Words, ",s.length," Characters"]}),Object(o.jsxs)("div",{className:"text-btn-container",children:[Object(o.jsx)("button",{disabled:0===s.length,onClick:function(){console.log("Upper was clicked");var t=s.toUpperCase();a(t),e.showAlert("Converted to Upper Case Successfully!","success")},className:"btn btn-primary text-buttons ",children:"Convert to Upper Case"}),Object(o.jsx)("button",{disabled:0===s.length,onClick:function(){if(0===s.length)e.showAlert("Text Area empty","danger");else{var t=s.toLowerCase();a(t),e.showAlert("Converted to Lower Case Successfully","success")}},className:"btn btn-primary text-buttons",children:"Convert to Lower Case"}),Object(o.jsx)("button",{disabled:0===s.length,onClick:function(){a(s.trim()),e.showAlert("Trimmed successfully","success")},className:"btn btn-primary text-buttons",children:"Remove Trailing spaces"}),Object(o.jsx)("button",{disabled:0===s.length,onClick:function(){for(var t=s,c=t.split(" "),n=0;n<c.length;n++)c[n]=c[n].charAt(0).toUpperCase()+c[n].slice(1);t=c.join(" "),a(t),e.showAlert("Capitalized Successfully","success")},className:"btn btn-primary text-buttons",children:"Capitalize String"}),Object(o.jsx)("button",{disabled:0===s.length,onClick:function(){for(var t=0,c=prompt("Enter the value to find its occurrences: "),n=s.split(" "),a=0;a<n.length;a++)n[a]===c&&(t+=1);0===t?e.showAlert("No occurrence found","danger"):e.showAlert("".concat(c," found ").concat(t," times"),"success")},class:"btn btn-primary text-buttons",children:"Find Occurrence"})]})]}),Object(o.jsxs)("div",{className:"container text-preview",children:[Object(o.jsx)("h2",{children:"Text Preview"}),Object(o.jsx)("p",{children:""===s?"(Enter some text in the textbox to preview)":s})]})]})}var j=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),l=Object(r.a)(a,2),b=l[0],j=l[1],u=Object(n.useState)("#000000"),m=Object(r.a)(u,2),x=m[0],g=m[1],p=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{title:"TextUtils",mode:c}),Object(o.jsx)(i,{alert:b}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(h,{heading:"TextUtils - The Text Utility App",mode:c,toggleMode:function(){console.log("toggle triggered"),"light"===c?(s("dark"),document.body.style.backgroundColor=x,p("Enabled Dark Mode Successfully","success")):(s("light"),document.body.style.backgroundColor="white",p("Light Mode Enabled","success"))},showAlert:p,colorPicker:function(e){g(e)}})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),u()}},[[17,1,2]]]);
//# sourceMappingURL=main.b0a70fad.chunk.js.map