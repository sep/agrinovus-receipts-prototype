(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],m=0,p=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/agrinovus-receipts-prototype/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"253b":function(t,e,a){},"31db":function(t,e,a){},"35b0":function(t,e,a){"use strict";a("5128")},"3a19":function(t,e,a){t.exports=a.p+"img/profile.5bb78d5f.jpg"},"3b0f":function(t,e,a){},"3c85":function(t,e,a){},"3d27":function(t,e,a){"use strict";a("3c85")},4874:function(t,e,a){var n={"./Bunge North America, Inc.png":"b263","./Consolidated Grain and Barge Co.png":"cf80","./Ingredion.png":"bcb4"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="4874"},5128:function(t,e,a){},"52cc":function(t,e,a){"use strict";a("e913")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("342d"),i=a.n(r),o=a("8c4f"),s=a("2ee4"),c=a.n(s),l=(a("da93"),a("bc3a")),u=a.n(l),m=a("2106"),p=a.n(m),d=a("5f5b"),f=a("b1e0"),b=(a("f9e3"),a("2dd8"),a("54ba"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("h1",{staticClass:"page-title"},[t._v(t._s(this.pageTitle))]),a("router-view")],1)}),h=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-navbar-brand",{attrs:{to:"/"}},[t._v("Ticket Booth")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t.persona?a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/tickets"}},[t._v("Tickets")]),a("b-nav-item",{attrs:{to:"/templates"}},[t._v("Templates")]),a("b-nav-item",{attrs:{to:"/stats"}},[t._v("Stats")])],1):t._e(),a("b-navbar-nav",{staticClass:"ml-auto",attrs:{right:""}},[t.persona?[a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("b-icon-person-fill")]},proxy:!0}])},[a("b-dropdown-item",{attrs:{to:"/account"}},[t._v("Account")]),a("b-dropdown-item",{on:{click:t.logout}},[t._v("Sign Out")])],1)]:a("b-nav-item",{attrs:{to:"/signup"}},[a("b-icon-person-fill"),t._v(" Sign Up")],1)],2)],1)],1)},v=[],k=a("5530"),w=a("2f62"),T={name:"NavBar",computed:{persona:function(){return this.$store.state.user.persona}},methods:Object(k["a"])(Object(k["a"])({},Object(w["d"])({clear:"user/clear"})),{},{logout:function(){this.clear(),this.$router.push({name:"home"})}})},_=T,y=a("2877"),x=Object(y["a"])(_,g,v,!1,null,null,null),C=x.exports,S={name:"App",components:{NavBar:C},computed:{pageTitle:function(){return this.$route.meta.title}}},O=S,j=(a("034f"),Object(y["a"])(O,b,h,!1,null,null,null)),E=j.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-alert",{staticClass:"fixed-top",attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("Ticket uploaded successfully.")]),a("b-row",{attrs:{"align-h":"center"}},[a("div",{staticClass:"col-md-6"},[a("p",[a("b-icon-geo-alt"),t._v(" "+t._s(this.location))],1),this.img?a("b-img",{attrs:{src:this.img,fluid:""}}):t._e(),a("web-cam",{ref:"webcam",attrs:{hidden:t.img,height:"100%","device-id":t.deviceId},on:{cameras:t.onCameras,"camera-change":t.onCameraChange}}),a("b-row",{staticClass:"actions",attrs:{"align-h":"between"}},[a("b-col"),a("b-col",[this.img?a("b-button",{attrs:{size:"lg",variant:"primary"},on:{click:t.onSaveTicket}},[a("b-icon",{attrs:{icon:"upload","aria-label":"Save picture"}})],1):a("b-button",{attrs:{size:"lg",variant:"primary"},on:{click:t.onCapture}},[a("b-icon",{attrs:{icon:"camera-fill","aria-label":"Take picture"}})],1)],1),a("b-col",[this.img?a("b-button",{attrs:{size:"lg",variant:"secondary"},on:{click:t.onCancel}},[a("b-icon",{attrs:{icon:"x","aria-label":"Reurn to camera"}})],1):t._e()],1)],1)],1)])],1)},A=[],L=(a("99af"),a("7db0"),a("fb6a"),a("b0c0"),a("b3cb")),$={name:"TicketCaptor",components:{WebCam:L["WebCam"]},data:function(){return{img:null,camera:null,deviceId:null,devices:[],dismissSecs:3,dismissCountDown:0,location:""}},computed:{device:function(){var t=this;return this.devices.find((function(e){return e.deviceId===t.deviceId}))}},mounted:function(){this.saveCurrentLocation()},watch:{camera:function(t){this.deviceId=t},devices:function(){var t=this.devices.slice(-1).pop();t&&(this.camera=t.deviceId,this.deviceId=t.deviceId)}},methods:{onCapture:function(){this.img=this.$refs.webcam.capture()},onCameras:function(t){this.devices=t},onCameraChange:function(t){this.deviceId=t,this.camera=t},onSaveTicket:function(){var t=localStorage.getItem("uploadedImages"),e=JSON.parse(t)||[],a={pathLong:this.img,pathShort:e.length+1,name:this.location};e.push(a),localStorage.setItem("uploadedImages",JSON.stringify(e)),this.img=null,this.showAlert()},onCancel:function(){this.img=null},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},saveCurrentLocation:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.$http.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=grain%20elevator&inputtype=textquery&fields=name&locationbias=circle:200@".concat(e.coords.latitude,",").concat(e.coords.longitude,"&key=AIzaSyAe_itPE6fHbm8d9FWOfHercVThIN9LHvE")).then((function(e){var a=e.data.candidates;a.length>0&&(t.location=a[0].name)}))}))}}},I=$,R=(a("35b0"),Object(y["a"])(I,N,A,!1,null,"35fe9bed",null)),M=R.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"float-right",attrs:{to:"/camera",title:"Add new ticket"}},[a("b-icon-plus-circle")],1),a("b-form-group",{staticClass:"group-by-radio",attrs:{label:"Group By"}},[a("b-form-radio-group",{attrs:{options:t.options,buttons:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),0==t.selected?a("ticket-list-by-elevator",{attrs:{"group-map":this.groupsByElevator}}):t._e(),1==t.selected?a("ticket-list-by-account",{attrs:{"group-map":this.groupsByAccount}}):t._e(),2==t.selected?a("ticket-list-by-account",{attrs:{"group-map":this.groupsByProduct}}):t._e()],1)},D=[],B=(a("4160"),a("13d5"),a("d3b7"),a("ac1f"),a("5319"),a("159b"),a("ddb0"),a("2909")),J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("div",{staticClass:"accordion",attrs:{role:"tablist"}},[t._l(t.groupMap,(function(e,n,r){return[a("b-card",{key:r,staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1 text-left",attrs:{"header-tag":"header"}},[t._v(" "+t._s(n)+" "),1==r?a("b-link",{staticClass:"float-right"},[a("b-icon-minecart-loaded"),t._v(" 90%")],1):t._e()],1),a("b-card-body",t._l(e,(function(e,n){return a("b-card-group",{key:n,attrs:{deck:""}},[a("b-card",{attrs:{"img-left":"","img-src":e.pathLong,align:"right"}},[a("b-card-text",[a("b-row",[a("b-col",[t._v(t._s(t.chance.date({string:!0,year:2020})))]),a("b-col",[t._v(t._s(t.chance.floating({min:800,max:1e3,fixed:2}))+" BU")]),a("b-col",[n%2==1?a("b-badge",{staticClass:"mr-1",attrs:{variant:"danger"}},[t._v("Not Processed")]):t._e(),n%3==0?a("b-badge",{attrs:{variant:"success"}},[t._v("Paid")]):t._e()],1)],1)],1)],1)],1)})),1)],1)]}))],2)])},U=[],V=a("9e67"),W=a.n(V),z={name:"TicketListByElevator",props:["groupMap"],computed:{chance:function(){return new W.a}}},F=z,Y=(a("fe74"),Object(y["a"])(F,J,U,!1,null,"3eb9f885",null)),H=Y.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("div",{staticClass:"accordion",attrs:{role:"tablist"}},[t._l(t.groupMap,(function(e,n,r){return[a("b-card",{key:r,staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1 text-left",attrs:{"header-tag":"header"}},[t._v(" "+t._s(n)+" ")]),a("b-card-body",t._l(e,(function(e,n){return a("b-card-group",{key:n,attrs:{deck:""}},[a("b-card",{attrs:{"img-left":"","img-src":e.pathLong,align:"right"}},[a("b-card-text",[a("b-row",[a("b-col",[t._v(t._s(t.chance.date({string:!0,year:2020})))]),a("b-col",[t._v(t._s(t.chance.floating({min:800,max:1e3,fixed:2}))+" BU")]),a("b-col",[n%2==1?a("b-badge",{staticClass:"mr-1",attrs:{variant:"danger"}},[t._v("Not Processed")]):t._e(),a("b-badge",{attrs:{variant:"success"}},[t._v("Paid")])],1)],1)],1)],1)],1)})),1)],1)]}))],2)])},q=[],G={name:"TicketListByElevator",props:["groupMap"],computed:{chance:function(){return new W.a}}},Q=G,Z=(a("d15a"),Object(y["a"])(Q,X,q,!1,null,"d994c8e2",null)),K=Z.exports,tt={name:"TicketViewer",components:{"ticket-list-by-elevator":H,"ticket-list-by-account":K},data:function(){return{images:[],selected:0,options:[{text:"Elevator",value:0},{text:"Account",value:1,disabled:!0},{text:"Product",value:2}]}},computed:{linkedAccounts:function(){return this.$store.state.user.accounts},groupsByElevator:function(){return this.images.reduce((function(t,e){var a=e.name,n=t[a]||[];return n.push(e),t[a]=n,t}),{})},groupsByAccount:function(){var t=this;return this.images.reduce((function(e,a){var n=Math.floor(Math.random()*t.linkedAccounts.length),r=t.linkedAccounts[n],i=r.name,o=e[i]||[];return o.push(a),e[i]=o,e}),{})},groupsByProduct:function(){var t=["Soy","Corn","Wheat"];return this.images.reduce((function(e,a){var n=Math.floor(Math.random()*t.length),r=t[n],i=r,o=e[i]||[];return o.push(a),e[i]=o,e}),{})}},mounted:function(){var t,e=a("4874");this.importContext(e);var n=localStorage.getItem("uploadedImages"),r=JSON.parse(n);(t=this.images).push.apply(t,Object(B["a"])(r)),this.options[1].disabled=0===this.linkedAccounts.length},methods:{importContext:function(t){var e=this,a=/(.+)\/(.+)\.png$/;t.keys().forEach((function(n){return e.images.push({pathLong:t(n),pathShort:n,name:n.replace(a,"$2")})}))}}},et=tt,at=(a("8f25"),Object(y["a"])(et,P,D,!1,null,"0fe294d2",null)),nt=at.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("form-wizard",{attrs:{title:"",subtitle:"",color:"#3E92CC"}},[a("tab-content",{attrs:{title:"Select a Template",icon:"ti ti-image",beforeChange:t.readyToMarkRegions}},[a("select-ticket-template")],1),a("tab-content",{attrs:{title:"Mark Regions",icon:"ti ti-pencil-alt"}},[a("mark-regions")],1),a("tab-content",{attrs:{title:"Finish",icon:"ti ti-check"}},[t._v(' Click "Finish" to apply template to existing tickets, and enable it to be run automatically against future tickets. ')])],1)],1)},it=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4 mb-4"},[a("div",[a("p",[t._v("Templates help us process the contents of a ticket. The process is simple. Just select an image and draw a box around the different fields of the invoice. That's it. We'll take it from there.")]),a("b-row",[a("b-col",[t.showNewTemplateForm?a("b-form-group",{attrs:{id:"ticket-template-name-group",label:"Template Name:","label-for":"ticket-template-name","label-align":"left"}},[a("b-form-input",{attrs:{id:"ticket-template-name",placeholder:"Enter a name for the template",required:"",trim:""},on:{input:t.setNewTemplateName}})],1):t._e()],1)],1),a("br"),a("b-row",[a("b-col",[a("h6",{staticClass:"float-left"},[t._v("Select a ticket:")]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"float-left d-flex d-flex-row"},t._l(t.existingTickets,(function(e){return a("div",{key:e.pathLong,class:{"bg-primary":e.pathLong===t.selectedTicket},on:{click:function(a){return t.setNewTemplateTicket(e)}}},[a("img",{staticClass:"m-2",attrs:{width:"200",height:"200",src:e.pathLong,alt:e.pathShort}})])})),0)])],1)],1),t.hasExistingTemplates?a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-auto"},[t._v("OR")]),t._m(1)]):t._e(),t.hasExistingTemplates?a("div",[a("h5",[t._v("Select an existing template")]),a("div",t._l(t.existingTemplates,(function(e){return a("b-list-group",{key:e.name},[a("b-list-group-item",[t._v(t._s(e.name))])],1)})),1)]):t._e()])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("hr")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("hr")])}],ct={name:"SelectTicketTemplate",data:function(){return{showNewTemplateForm:!0}},computed:Object(k["a"])({},Object(w["c"])({existingTickets:"tickets/existingTickets",hasExistingTemplates:"templates/hasExistingTemplates",existingTemplates:"templates/existingTemplates",selectedTicket:"templates/selectedTicket"})),created:function(){this.fetchStaticTickets(),this.fetchUploadedTickets(),this.fetchSavedTemplates()},methods:Object(k["a"])(Object(k["a"])({},Object(w["b"])({fetchStaticTickets:"tickets/fetchStaticTickets",fetchUploadedTickets:"tickets/fetchUploadedTickets",fetchSavedTemplates:"templates/fetchSavedTemplates"})),Object(w["d"])({setNewTemplateName:"templates/setNewTemplateName",setNewTemplateTicket:"templates/setNewTemplateTicket",addRegion:"templates/addRegion",addTemplate:"templates/addTemplate",setExistingTemplates:"templates/setExistingTemplates"}))},lt=ct,ut=(a("3d27"),Object(y["a"])(lt,ot,st,!1,null,"3378da0a",null)),mt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4 mb-4"},[a("p",[t._v("Click and drag over the image to mark the different regions of the ticket.")]),a("div",{attrs:{id:"region-editor"}},[a("canvas",{staticClass:"canvas-style",attrs:{"id:":"editor-canvas"},on:{mousedown:t.mouseDown}})])])},dt=[],ft={name:"MarkRegions"},bt=ft,ht=(a("5d72"),Object(y["a"])(bt,pt,dt,!1,null,"ff6e7016",null)),gt=ht.exports,vt={components:{SelectTicketTemplate:mt,MarkRegions:gt},name:"TemplateEditor",head:{link:[{rel:"stylesheet",href:"https://unpkg.com/@icon/themify-icons/themify-icons.css"}]},data:function(){return{templates:[],canvas:null}},mounted:function(){this.templates=localStorage.getItem("ticketTemplates")||[]},methods:Object(k["a"])({},Object(w["c"])({readyToMarkRegions:"templates/readyToMarkRegions"}))},kt=vt,wt=Object(y["a"])(kt,rt,it,!1,null,null,null),Tt=wt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[t.show?a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-group",{attrs:{label:"Username or email address","label-align":"left","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{label:"Password","label-align":"left","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary",block:""}},[t._v("Sign in")])],1):t._e()],1)},yt=[],xt=(a("caad"),a("2532"),{name:"SignIn",data:function(){return{form:{email:"",password:""},show:!0}},methods:Object(k["a"])(Object(k["a"])({},Object(w["d"])({setPersona:"user/setPersona",setName:"user/setName",setEmail:"user/setEmail"})),{},{onSubmit:function(t){t.preventDefault();var e=this.form.email.includes("farmer")?"farmer":"driver";this.setPersona(e),this.setName((new W.a).name({nationality:"en",gender:"male"})),this.setEmail(this.form.email),this.$router.push({name:"tickets"})},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.password="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})}),Ct=xt,St=(a("991c"),Object(y["a"])(Ct,_t,yt,!1,null,"359916e4",null)),Ot=St.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[t.show?a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-group",{attrs:{label:"Email address:","label-align":"left","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{label:"Your Name:","label-align":"left","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-form-group",{attrs:{label:"Your role:","label-align":"left","label-for":"btn-radios-1"}},[a("b-form-radio-group",{attrs:{id:"btn-radios-1",buttons:"",required:"",name:"radios-btn-default","button-variant":"outline-secondary"},model:{value:t.form.persona,callback:function(e){t.$set(t.form,"persona",e)},expression:"form.persona"}},[a("b-form-radio",{attrs:{value:"driver"}},[a("b-icon-truck"),a("br"),a("span",[t._v("Driver")])],1),a("b-form-radio",{attrs:{value:"farmer"}},[a("b-icon-sun"),a("br"),a("span",[t._v("Farmer")])],1)],1)],1),a("b-button",{attrs:{type:"submit",variant:"primary",block:""}},[t._v("Sign Up")])],1):t._e()],1)},Et=[],Nt={name:"SignUp",data:function(){return{form:{email:"",name:"",persona:""},show:!0}},methods:Object(k["a"])(Object(k["a"])({},Object(w["d"])({setPersona:"user/setPersona",setName:"user/setName",setEmail:"user/setEmail"})),{},{onSubmit:function(t){t.preventDefault(),this.setPersona(this.form.persona),this.setName(this.form.name),this.setEmail(this.form.email),this.$router.push({name:"account"})},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.name="",this.form.persona="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},At=Nt,Lt=(a("52cc"),Object(y["a"])(At,jt,Et,!1,null,"21f71aec",null)),$t=Lt.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"account-container"},[n("b-row",{staticClass:"m-5"},[n("b-col",[n("img",{staticClass:"m-2 rounded",attrs:{width:"150",height:"150",src:a("3a19")}}),n("h2",[t._v(t._s(this.username))]),n("h3",{staticClass:"text-muted"},[t._v(t._s(this.email))])])],1),n("b-row",{staticClass:"mt-5"},[n("b-col",[n("b-form-group",{attrs:{label:"Find a "+this.linkedAccountType,"label-align":"left","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",placeholder:"Search",autocomplete:"off",required:""},on:{input:t.onAccountLinkChange},model:{value:t.searchCriteria,callback:function(e){t.searchCriteria=e},expression:"searchCriteria"}})],1),n("label",{staticClass:"label text-left",attrs:{for:"linked-accounts"}},[t._v("Your "+t._s(t.linkedAccountType)+"s:")]),n("div",{staticClass:"mx-auto",attrs:{id:"linked-accounts"}},[t._l(t.accounts,(function(e){return[n("div",{key:e.guid,staticClass:"text-left"},["Driver"==t.linkedAccountType?n("b-icon-truck"):n("b-icon-sun"),t._v(" "+t._s(e.name)+" ")],1)]}))],2)],1)],1),n("b-popover",{attrs:{target:"input-1",triggers:"focus",placement:"bottom",container:"account-container"},model:{value:t.accountToLink,callback:function(e){t.accountToLink=e},expression:"accountToLink"}},[n("b-row",{attrs:{"align-h":"between"}},[n("b-col",{staticClass:"my-auto",attrs:{cols:"auto"}},[n("h6",[t._v(t._s(t.searchCriteria?t.accountToLink:"No search results"))])]),n("b-col",{attrs:{cols:"auto"}},[t.searchCriteria?n("b-button",{on:{click:t.onAddAccount}},[t._v("Add")]):t._e()],1)],1)],1)],1)},Rt=[],Mt={name:"Account",data:function(){return{searchCriteria:"",accountToLink:"",chance:new W.a}},computed:{linkedAccountType:function(){return"driver"===this.persona?"Farmer":"Driver"},username:function(){return this.$store.state.user.name},email:function(){return this.$store.state.user.email},persona:function(){return this.$store.state.user.persona},accounts:function(){return this.$store.state.user.accounts},searchResults:function(){return{html:!0,content:this.accountToLink}}},methods:Object(k["a"])(Object(k["a"])({},Object(w["d"])({addNewAccount:"user/addNewAccount"})),{},{onAddAccount:function(){var t={guid:this.chance.guid(),name:this.accountToLink};this.addNewAccount(t),this.searchCriteria=null},onAccountLinkChange:function(t){var e=this.chance.last({nationality:"en"});this.accountToLink="".concat(t," ").concat(e)}})},Pt=Mt,Dt=(a("ce6a"),Object(y["a"])(Pt,It,Rt,!1,null,"2341c692",null)),Bt=Dt.exports,Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mx-3 float-right",attrs:{title:"Export your raw data to CSV"},on:{click:t.downloadCSVData}},[a("b-icon-file-excel"),t._v(" Export ")],1),"driver"==t.persona?[a("iframe",{attrs:{src:"https://app.powerbi.com/reportEmbed?reportId=0933ae98-db2e-46f3-a1d3-8afec39ddb75&autoAuth=true&ctid=898f7683-8ab4-4a28-b74e-510b95f981eb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",frameborder:"0",allowFullScreen:"true"}})]:[a("iframe",{attrs:{src:"https://app.powerbi.com/reportEmbed?reportId=38aa0560-fd21-44fd-a76e-0dfa8ba52371&autoAuth=true&ctid=898f7683-8ab4-4a28-b74e-510b95f981eb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",frameborder:"0",allowFullScreen:"true"}})]],2)},Ut=[],Vt={name:"Dashboard",methods:{downloadCSVData:function(){var t="Test",e=document.createElement("a");e.href="data:text/csv;charset=utf-8,".concat(encodeURIComponent(t)),e.target="_blank",e.download="raw.csv",e.click()}}},Wt=Vt,zt=Object(y["a"])(Wt,Jt,Ut,!1,null,null,null),Ft=zt.exports,Yt=(a("498a"),a("96cf"),a("1da1")),Ht=function(){return{existingTemplates:[],newTemplate:{name:"",ticket:null,regions:[]}}},Xt={hasExistingTemplates:function(t){return t.existingTemplates.length>0},existingTemplates:function(t){return t.existingTemplates},readyToMarkRegions:function(t){return!!t.newTemplate.name&&""!==t.newTemplate.name.trim()&&!!t.newTemplate.ticket},selectedTicket:function(t){var e;return null===(e=t.newTemplate.ticket)||void 0===e?void 0:e.pathLong}},qt={setNewTemplateName:function(t,e){t.newTemplate.name=e},setNewTemplateTicket:function(t,e){t.newTemplate.ticket=e},addRegion:function(t,e){t.newTemplate.regions=Array.concat(t.newTemplate.regions,[e])},addTemplate:function(t,e){t.existingTemplates=Array.concat(t.existingTemplates,[e])},setExistingTemplates:function(t,e){t.existingTemplates=e}},Gt={fetchSavedTemplates:function(t){return Object(Yt["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,n=JSON.parse(localStorage.getItem("ticketTemplates"))||[],a("setExistingTemplates",n);case 3:case"end":return e.stop()}}),e)})))()}},Qt={namespaced:!0,actions:Gt,mutations:qt,getters:Xt,state:Ht},Zt=(a("a630"),a("4ec9"),a("3ca3"),a("5935")),Kt=(a("d81d"),function(t){var e=t.pathLong,a=t.pathShort;return{pathLong:e,pathShort:a}}),te=function(t,e){return t.set(e.pathLong,e),t},ee=function(){var t=Object(Yt["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a("4874"),t.abrupt("return",e.keys().map((function(t){return Kt({pathLong:e(t),pathShort:t})})));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ae=function(){var t=Object(Yt["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=JSON.parse(localStorage.getItem("uploadedImages"))||[],t.abrupt("return",e.map((function(t,e){return Kt({pathLong:t,pathShort:e})})));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ne=function(t){return t.reduce((function(t,e){return t.set(e.pathLong,e),t}),new Map)},re=function(){return{all:[]}},ie={getField:Zt["a"],existingTickets:function(t){return t.all}},oe={addTickets:function(t,e){var a=ne(t.all),n=e.reduce(te,a);t.all=Array.from(n.values())}},se={fetchStaticTickets:function(t){return Object(Yt["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,ee();case 3:n=e.sent,a("addTickets",n);case 5:case"end":return e.stop()}}),e)})))()},fetchUploadedTickets:function(t){return Object(Yt["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.next=3,ae();case 3:n=e.sent,a("addTickets",n);case 5:case"end":return e.stop()}}),e)})))()}},ce={namespaced:!0,actions:se,mutations:oe,getters:ie,state:re},le=(a("b64b"),function(){return{name:"",email:"",persona:"",accounts:[]}}),ue={setPersona:function(t,e){t.persona=e},setName:function(t,e){t.name=e},setEmail:function(t,e){t.email=e},addNewAccount:function(t,e){t.accounts=t.accounts||[],t.accounts.push(e)},clear:function(t){var e=le();Object.keys(e).forEach((function(a){t[a]=e[a]}))}},me={namespaced:!0,mutations:ue,state:le};n["default"].use(w["a"]);var pe=new w["a"].Store({modules:{user:me,tickets:ce,templates:Qt},mutations:{initializeStore:function(t){localStorage.getItem("store")&&this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("store"))))}},strict:!1});pe.subscribe((function(t,e){localStorage.setItem("store",JSON.stringify(e))}));var de=pe;n["default"].use(c.a),n["default"].use(i.a),n["default"].use(o["a"]),n["default"].use(p.a,u.a),n["default"].use(d["a"]),n["default"].use(f["a"]),n["default"].config.productionTip=!1;var fe=[{name:"home",path:"/",component:Ot,meta:{title:"Sign In"}},{name:"camera",path:"/camera",component:M,meta:{title:"Capture Ticket"}},{name:"tickets",path:"/tickets",component:nt,meta:{title:"Tickets"}},{name:"templates",path:"/templates",component:Tt,meta:{title:"Process Ticket Data Using Templates"}},{name:"signup",path:"/signup",component:$t,meta:{title:"Sign Up"}},{name:"account",path:"/account",component:Bt,meta:{title:"Account"}},{name:"stats",path:"/stats",component:Ft,meta:{title:"Your Stats"}}],be=new o["a"]({mode:"history",base:"/agrinovus-receipts-prototype/",routes:fe});new n["default"]({router:be,store:de,render:function(t){return t(E)},beforeCreate:function(){this.$store.commit("initializeStore")}}).$mount("#app")},5709:function(t,e,a){},"5d72":function(t,e,a){"use strict";a("7715")},7715:function(t,e,a){},"85ec":function(t,e,a){},"8f25":function(t,e,a){"use strict";a("253b")},"991c":function(t,e,a){"use strict";a("3b0f")},b263:function(t,e,a){t.exports=a.p+"img/Bunge North America, Inc.e7d7fea7.png"},bcb4:function(t,e,a){t.exports=a.p+"img/Ingredion.0091b0c2.png"},ce6a:function(t,e,a){"use strict";a("d75e")},cf80:function(t,e,a){t.exports=a.p+"img/Consolidated Grain and Barge Co.16f8bd76.png"},d15a:function(t,e,a){"use strict";a("31db")},d75e:function(t,e,a){},e913:function(t,e,a){},fe74:function(t,e,a){"use strict";a("5709")}});
//# sourceMappingURL=app.a5bc4dcb.js.map