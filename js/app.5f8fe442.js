(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],m=0,p=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/agrinovus-receipts-prototype/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0e52":function(e,t,a){"use strict";a("720c")},"3eb7":function(e,t,a){},4874:function(e,t,a){var n={"./Bunge North America, Inc.png":"b263","./Consolidated Grain and Barge Co.png":"cf80","./Ingredion.png":"bcb4"};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id="4874"},"504c":function(e,t,a){"use strict";a("e7ed")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("342d"),i=a.n(r),o=a("8c4f"),s=a("2ee4"),c=a.n(s),l=(a("da93"),a("bc3a")),u=a.n(l),m=a("2106"),p=a.n(m),d=a("5f5b"),f=a("b1e0"),b=(a("f9e3"),a("2dd8"),a("54ba"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("NavBar"),a("router-view")],1)}),h=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{staticClass:"mb-5",attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-navbar-brand",{attrs:{to:"/"}},[e._v("Ticket Booth")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e.persona?a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/dashboard"}},[e._v("Dashboard")]),a("b-nav-item",{attrs:{to:"/tickets"}},[e._v("View Tickets")]),"driver"==e.persona?a("b-nav-item",{attrs:{to:"/camera"}},[e._v("Capture Ticket")]):e._e(),"driver"===e.persona?a("b-nav-item",{attrs:{to:"/templates"}},[e._v("Manage Templates")]):e._e()],1):e._e(),a("b-navbar-nav",{staticClass:"ml-auto",attrs:{right:""}},[e.persona?[a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[a("b-icon-person-fill")]},proxy:!0}])},[a("b-dropdown-item",{attrs:{to:"/account"}},[e._v("Account")]),a("b-dropdown-item",{on:{click:e.logout}},[e._v("Sign Out")])],1)]:a("b-nav-item",{attrs:{to:"/login"}},[a("b-icon-person-fill"),e._v(" Sign Up")],1)],2)],1)],1)},g=[],k=a("5530"),T=a("2f62"),w={name:"NavBar",computed:{persona:function(){return this.$store.state.user.persona}},methods:Object(k["a"])(Object(k["a"])({},Object(T["d"])({clear:"user/clear"})),{},{logout:function(){this.clear(),this.$router.push({name:"home"})}})},_=w,y=a("2877"),x=Object(y["a"])(_,v,g,!1,null,null,null),C=x.exports,O={name:"App",components:{NavBar:C}},S=O,j=(a("034f"),Object(y["a"])(S,b,h,!1,null,null,null)),E=j.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("TODO: Splash Screen")])},N=[],R={name:"Home"},$=R,L=Object(y["a"])($,I,N,!1,null,null,null),D=L.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-alert",{staticClass:"fixed-top",attrs:{show:e.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[e._v("Ticket uploaded successfully.")]),a("b-row",{attrs:{"align-h":"center"}},[a("div",{staticClass:"col-md-6"},[a("h1",[e._v("Capture Ticket")]),a("p",[a("b-icon-geo-alt"),e._v(" "+e._s(this.location))],1),this.img?a("b-img",{attrs:{src:this.img,fluid:""}}):e._e(),a("web-cam",{ref:"webcam",attrs:{hidden:e.img,height:"100%","device-id":e.deviceId},on:{cameras:e.onCameras,"camera-change":e.onCameraChange}}),a("b-row",{staticClass:"actions",attrs:{"align-h":"center"}},[a("b-col",[a("b-button",{attrs:{disabled:this.devices.length<2,size:"lg",variant:"outline-secondary"},on:{click:e.onShuffleCamera}},[a("b-icon",{attrs:{icon:"arrow-repeat","aria-label":"Change Camera"}})],1)],1),a("b-col",[this.img?a("b-button",{attrs:{size:"lg",variant:"primary"},on:{click:e.onSaveTicket}},[a("b-icon",{attrs:{icon:"upload","aria-label":"Save picture"}})],1):a("b-button",{attrs:{size:"lg",variant:"primary"},on:{click:e.onCapture}},[a("b-icon",{attrs:{icon:"camera-fill","aria-label":"Take picture"}})],1)],1),a("b-col",[this.img?a("b-button",{attrs:{size:"lg",variant:"secondary"},on:{click:e.onCancel}},[a("b-icon",{attrs:{icon:"x","aria-label":"Reurn to camera"}})],1):e._e()],1)],1)],1)])],1)},J=[],A=(a("99af"),a("7db0"),a("c740"),a("b0c0"),a("b3cb")),z={name:"TicketCaptor",components:{WebCam:A["WebCam"]},data:function(){return{img:null,camera:null,deviceId:null,devices:[],dismissSecs:3,dismissCountDown:0,location:""}},computed:{device:function(){var e=this;return this.devices.find((function(t){return t.deviceId===e.deviceId}))}},mounted:function(){this.saveCurrentLocation()},watch:{camera:function(e){this.deviceId=e},devices:function(){var e=this.devices[0];e&&(this.camera=e.deviceId,this.deviceId=e.deviceId)}},methods:{onCapture:function(){this.img=this.$refs.webcam.capture()},onCameras:function(e){this.devices=e},onCameraChange:function(e){this.deviceId=e,this.camera=e},onShuffleCamera:function(){var e=this,t=this.devices.findIndex((function(t){return t.deviceId===e.deviceId})),a=(t+1)%this.devices.length,n=this.devices[a];n&&(this.camera=n.deviceId,this.deviceId=n.deviceId)},onSaveTicket:function(){var e=localStorage.getItem("uploadedImages"),t=JSON.parse(e)||[],a={pathLong:this.img,pathShort:t.length+1,name:this.location};t.push(a),localStorage.setItem("uploadedImages",JSON.stringify(t)),this.img=null,this.showAlert()},onCancel:function(){this.img=null},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs},saveCurrentLocation:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.$http.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=grain%20elevator&inputtype=textquery&fields=name&locationbias=circle:200@".concat(t.coords.latitude,",").concat(t.coords.longitude,"&key=AIzaSyAe_itPE6fHbm8d9FWOfHercVThIN9LHvE")).then((function(t){var a=t.data.candidates;a.length>0&&(e.location=a[0].name)}))}))}}},P=z,V=(a("504c"),Object(y["a"])(P,M,J,!1,null,"2ef8b9a2",null)),W=V.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h1",[e._v("View Tickets")]),a("ticket-list-by-elevator",{attrs:{"group-map":this.groupsByElevator}})],1)},H=[],F=(a("4160"),a("13d5"),a("d3b7"),a("ac1f"),a("5319"),a("159b"),a("ddb0"),a("2909")),X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("h2",{staticClass:"text-muted"},[e._v("Tickets by Elevator")]),a("div",{staticClass:"accordion",attrs:{role:"tablist"}},[e._l(e.groupMap,(function(t,n,r){return[a("b-card",{key:r,staticClass:"mb-1",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+r,expression:"`accordion-${i}`"}],attrs:{block:"",variant:"info"}},[e._v(e._s(n))])],1),a("b-collapse",{attrs:{id:"accordion-"+r,accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",e._l(t,(function(t,n){return a("b-card-group",{key:n,attrs:{deck:""}},[a("b-card",{attrs:{overlay:"","img-src":t.pathLong,align:"right"}},[a("b-card-text",[n%2==0?a("b-badge",{staticClass:"mr-1",attrs:{variant:"primary"}},[e._v("Processed")]):e._e(),a("b-badge",{attrs:{variant:"success"}},[e._v("Paid")])],1)],1)],1)})),1)],1)],1)]}))],2)])},Y=[],U={name:"TicketListByElevator",props:["groupMap"]},q=U,G=Object(y["a"])(q,X,Y,!1,null,null,null),Q=G.exports,Z={name:"TicketViewer",components:{"ticket-list-by-elevator":Q},data:function(){return{images:[]}},computed:{groupsByElevator:function(){return this.images.reduce((function(e,t){var a=e[t.name]||[];return a.push(t),e[t.name]=a,e}),{})}},mounted:function(){var e,t=a("4874");this.importContext(t);var n=localStorage.getItem("uploadedImages"),r=JSON.parse(n);(e=this.images).push.apply(e,Object(F["a"])(r))},methods:{importContext:function(e){var t=this,a=/(.+)\/(.+)\.png$/;e.keys().forEach((function(n){return t.images.push({pathLong:e(n),pathShort:n,name:n.replace(a,"$2")})}))}}},K=Z,ee=Object(y["a"])(K,B,H,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("form-wizard",{attrs:{title:e.wizardTitle,subtitle:e.wizardDescription,color:"#3E92CC"}},[a("tab-content",{attrs:{title:"Select a Template",icon:"ti ti-image",beforeChange:e.readyToMarkRegions}},[a("select-ticket-template")],1),a("tab-content",{attrs:{title:"Mark Regions",icon:"ti ti-pencil-alt"}},[a("mark-regions")],1),a("tab-content",{attrs:{title:"Finish",icon:"ti ti-check"}},[e._v(" Finish editing template ")])],1)],1)},ne=[],re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-4 mb-4"},[a("div",[a("h4",[e._v("Create a new template")]),a("br"),a("b-row",[a("b-col",[e.showNewTemplateForm?a("b-form-group",{attrs:{id:"ticket-template-name-group",label:"Template Name:","label-for":"ticket-template-name","label-align":"left"}},[a("b-form-input",{attrs:{id:"ticket-template-name",placeholder:"Enter a name for the template",required:"",trim:""},on:{input:e.setNewTemplateName}})],1):e._e()],1)],1),a("br"),a("b-row",[a("b-col",[a("h6",{staticClass:"float-left"},[e._v("Select a ticket:")]),a("div",{staticClass:"clearfix"}),a("div",{staticClass:"float-left d-flex d-flex-row"},e._l(e.existingTickets,(function(t){return a("div",{key:t.pathLong,class:{"bg-primary":t.pathLong===e.selectedTicket},on:{click:function(a){return e.setNewTemplateTicket(t)}}},[a("img",{staticClass:"m-2",attrs:{width:"200",height:"200",src:t.pathLong,alt:t.pathShort}})])})),0)])],1)],1),e.hasExistingTemplates?a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"col-auto"},[e._v("OR")]),e._m(1)]):e._e(),e.hasExistingTemplates?a("div",[a("h5",[e._v("Select an existing template")]),a("div",e._l(e.existingTemplates,(function(t){return a("b-list-group",{key:t.name},[a("b-list-group-item",[e._v(e._s(t.name))])],1)})),1)]):e._e()])},ie=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col"},[a("hr")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col"},[a("hr")])}],oe={name:"SelectTicketTemplate",data:function(){return{showNewTemplateForm:!0}},computed:Object(k["a"])({},Object(T["c"])({existingTickets:"tickets/existingTickets",hasExistingTemplates:"templates/hasExistingTemplates",existingTemplates:"templates/existingTemplates",selectedTicket:"templates/selectedTicket"})),created:function(){this.fetchStaticTickets(),this.fetchUploadedTickets(),this.fetchSavedTemplates()},methods:Object(k["a"])(Object(k["a"])({},Object(T["b"])({fetchStaticTickets:"tickets/fetchStaticTickets",fetchUploadedTickets:"tickets/fetchUploadedTickets",fetchSavedTemplates:"templates/fetchSavedTemplates"})),Object(T["d"])({setNewTemplateName:"templates/setNewTemplateName",setNewTemplateTicket:"templates/setNewTemplateTicket",addRegion:"templates/addRegion",addTemplate:"templates/addTemplate",setExistingTemplates:"templates/setExistingTemplates"}))},se=oe,ce=(a("85cc"),Object(y["a"])(se,re,ie,!1,null,"3f30f553",null)),le=ce.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-4 mb-4"},[a("h5",[e._v("Mark Regions")]),a("p",[e._v("Click and drag over the image to mark the different regions of the ticket.")]),a("div",{attrs:{id:"region-editor"}},[a("canvas",{staticClass:"canvas-style",attrs:{"id:":"editor-canvas"},on:{mousedown:e.mouseDown}})])])},me=[],pe={name:"MarkRegions"},de=pe,fe=(a("9312"),Object(y["a"])(de,ue,me,!1,null,"66693e82",null)),be=fe.exports,he={components:{SelectTicketTemplate:le,MarkRegions:be},name:"TemplateEditor",head:{link:[{rel:"stylesheet",href:"https://unpkg.com/@icon/themify-icons/themify-icons.css"}]},data:function(){return{wizardTitle:"Create or Edit a Ticket Template",wizardDescription:"Templates help us process the contents of a ticket. The process is simple. Just select an image and draw a box around the different fields of the invoice. That's it. We'll take it from there.",templates:[],canvas:null}},mounted:function(){this.templates=localStorage.getItem("ticketTemplates")||[]},methods:Object(k["a"])({},Object(T["c"])({readyToMarkRegions:"templates/readyToMarkRegions"}))},ve=he,ge=Object(y["a"])(ve,ae,ne,!1,null,null,null),ke=ge.exports,Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[e.show?a("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[a("b-form-group",{attrs:{label:"Email address:","label-align":"left","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("b-form-group",{attrs:{label:"Your Name:","label-align":"left","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("b-form-group",{attrs:{label:"Your role:","label-align":"left","label-for":"btn-radios-1"}},[a("b-form-radio-group",{attrs:{id:"btn-radios-1",buttons:"",required:"",name:"radios-btn-default","button-variant":"outline-secondary"},model:{value:e.form.persona,callback:function(t){e.$set(e.form,"persona",t)},expression:"form.persona"}},[a("b-form-radio",{attrs:{value:"driver"}},[a("b-icon-truck"),a("br"),a("span",[e._v("Driver")])],1),a("b-form-radio",{attrs:{value:"farmer"}},[a("b-icon-sun"),a("br"),a("span",[e._v("Farmer")])],1)],1)],1),a("b-button",{attrs:{type:"submit",variant:"primary",block:""}},[e._v("Sign Up")])],1):e._e()],1)},we=[],_e={name:"LogIn",data:function(){return{form:{email:"",name:"",persona:""},show:!0}},methods:Object(k["a"])(Object(k["a"])({},Object(T["d"])({setPersona:"user/setPersona",setName:"user/setName",setEmail:"user/setEmail"})),{},{onSubmit:function(e){e.preventDefault(),this.setPersona(this.form.persona),this.setName(this.form.name),this.setEmail(this.form.email),this.$router.push({name:"account"})},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.persona="",this.show=!1,this.$nextTick((function(){t.show=!0}))}})},ye=_e,xe=(a("754b"),Object(y["a"])(ye,Te,we,!1,null,"3198d8d4",null)),Ce=xe.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-row",{staticClass:"m-5"},[a("b-col",[a("h1",[a("b-icon-person-square",{attrs:{"font-scale":"2"}})],1),a("h2",[e._v(e._s(this.username))]),a("h3",{staticClass:"text-muted"},[e._v(e._s(this.email))])])],1),a("b-row",{staticClass:"mt-5"},[a("b-col",[a("b-input-group",{attrs:{prepend:"Account ID"}},[a("b-form-input",{attrs:{id:"account-id",disabled:"",value:e.accountId}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"info"},on:{click:e.onCopy}},[a("b-icon-files")],1)],1)],1),a("b-input-group",{attrs:{prepend:"driver"==e.persona?"Farmer":"Driver"}},[a("b-form-input",{attrs:{id:"driver-field"}}),a("b-input-group-append",[a("b-button",{attrs:{variant:"info"},on:{click:e.onAddDriver}},[a("b-icon-plus-square")],1)],1)],1),e._l(e.accounts,(function(t){return[a("div",{key:t.guid},["farmer"==e.persona?a("b-icon-truck"):a("b-icon-sun"),e._v(" "+e._s(t.name)+" ")],1)]}))],2)],1)],1)},Se=[],je=a("9e67"),Ee=a.n(je),Ie={name:"Account",data:function(){return{accounts:[]}},computed:{accountId:function(){return(new Ee.a).guid()},username:function(){return this.$store.state.name},email:function(){return this.$store.state.email},persona:function(){return this.$store.state.persona}},mounted:function(){this.accounts=JSON.parse(localStorage.getItem("accounts"))},methods:{onCopy:function(){navigator.clipboard.writeText(this.accountId)},onAddDriver:function(){var e=document.getElementById("driver-field"),t=e.value,a={guid:t,name:(new Ee.a).name({nationality:"en"})},n=JSON.parse(localStorage.getItem("accounts"))||[];n.push(a),localStorage.setItem("accounts",JSON.stringify(n)),this.accounts=n,e.value=null}}},Ne=Ie,Re=(a("0e52"),Object(y["a"])(Ne,Oe,Se,!1,null,"34c8f9ee",null)),$e=Re.exports,Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Dashboard")]),"driver"==e.persona?[a("iframe",{attrs:{src:"https://app.powerbi.com/reportEmbed?reportId=0933ae98-db2e-46f3-a1d3-8afec39ddb75&autoAuth=true&ctid=898f7683-8ab4-4a28-b74e-510b95f981eb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",frameborder:"0",allowFullScreen:"true"}})]:[a("iframe",{attrs:{src:"https://app.powerbi.com/reportEmbed?reportId=38aa0560-fd21-44fd-a76e-0dfa8ba52371&autoAuth=true&ctid=898f7683-8ab4-4a28-b74e-510b95f981eb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",frameborder:"0",allowFullScreen:"true"}})]],2)},De=[],Me={name:"Dashboard"},Je=Me,Ae=Object(y["a"])(Je,Le,De,!1,null,null,null),ze=Ae.exports,Pe=(a("498a"),a("96cf"),a("1da1")),Ve=function(){return{existingTemplates:[],newTemplate:{name:"",ticket:null,regions:[]}}},We={hasExistingTemplates:function(e){return e.existingTemplates.length>0},existingTemplates:function(e){return e.existingTemplates},readyToMarkRegions:function(e){return!!e.newTemplate.name&&""!==e.newTemplate.name.trim()&&!!e.newTemplate.ticket},selectedTicket:function(e){var t;return null===(t=e.newTemplate.ticket)||void 0===t?void 0:t.pathLong}},Be={setNewTemplateName:function(e,t){e.newTemplate.name=t},setNewTemplateTicket:function(e,t){e.newTemplate.ticket=t},addRegion:function(e,t){e.newTemplate.regions=Array.concat(e.newTemplate.regions,[t])},addTemplate:function(e,t){e.existingTemplates=Array.concat(e.existingTemplates,[t])},setExistingTemplates:function(e,t){e.existingTemplates=t}},He={fetchSavedTemplates:function(e){return Object(Pe["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,n=JSON.parse(localStorage.getItem("ticketTemplates"))||[],a("setExistingTemplates",n);case 3:case"end":return t.stop()}}),t)})))()}},Fe={namespaced:!0,actions:He,mutations:Be,getters:We,state:Ve},Xe=(a("a630"),a("4ec9"),a("3ca3"),a("5935")),Ye=(a("d81d"),function(e){var t=e.pathLong,a=e.pathShort;return{pathLong:t,pathShort:a}}),Ue=function(e,t){return e.set(t.pathLong,t),e},qe=function(){var e=Object(Pe["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a("4874"),e.abrupt("return",t.keys().map((function(e){return Ye({pathLong:t(e),pathShort:e})})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(Pe["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("uploadedImages"))||[],e.abrupt("return",t.map((function(e,t){return Ye({pathLong:e,pathShort:t})})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Qe=function(e){return e.reduce((function(e,t){return e.set(t.pathLong,t),e}),new Map)},Ze=function(){return{all:[]}},Ke={getField:Xe["a"],existingTickets:function(e){return e.all}},et={addTickets:function(e,t){var a=Qe(e.all),n=t.reduce(Ue,a);e.all=Array.from(n.values())}},tt={fetchStaticTickets:function(e){return Object(Pe["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,qe();case 3:n=t.sent,a("addTickets",n);case 5:case"end":return t.stop()}}),t)})))()},fetchUploadedTickets:function(e){return Object(Pe["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,Ge();case 3:n=t.sent,a("addTickets",n);case 5:case"end":return t.stop()}}),t)})))()}},at={namespaced:!0,actions:tt,mutations:et,getters:Ke,state:Ze},nt=(a("b64b"),function(){return{name:"",email:"",persona:""}}),rt={setPersona:function(e,t){e.persona=t},setName:function(e,t){e.name=t},setEmail:function(e,t){e.email=t},clear:function(e){var t=nt();Object.keys(t).forEach((function(a){e[a]=t[a]}))}},it={namespaced:!0,mutations:rt,state:nt};n["default"].use(T["a"]);var ot=new T["a"].Store({modules:{user:it,tickets:at,templates:Fe},strict:!1});n["default"].use(c.a),n["default"].use(i.a),n["default"].use(o["a"]),n["default"].use(p.a,u.a),n["default"].use(d["a"]),n["default"].use(f["a"]),n["default"].config.productionTip=!1;var st=[{name:"home",path:"/",component:D},{name:"camera",path:"/camera",component:W},{name:"tickets",path:"/tickets",component:te},{name:"templates",path:"/templates",component:ke},{name:"login",path:"/login",component:Ce},{name:"account",path:"/account",component:$e},{name:"dashboard",path:"/dashboard",component:ze}],ct=new o["a"]({mode:"history",base:"/agrinovus-receipts-prototype/",routes:st});new n["default"]({router:ct,store:ot,render:function(e){return e(E)}}).$mount("#app")},"720c":function(e,t,a){},"754b":function(e,t,a){"use strict";a("b7c8")},"85cc":function(e,t,a){"use strict";a("de49")},"85ec":function(e,t,a){},9312:function(e,t,a){"use strict";a("3eb7")},b263:function(e,t,a){e.exports=a.p+"img/Bunge North America, Inc.e7d7fea7.png"},b7c8:function(e,t,a){},bcb4:function(e,t,a){e.exports=a.p+"img/Ingredion.0091b0c2.png"},cf80:function(e,t,a){e.exports=a.p+"img/Consolidated Grain and Barge Co.16f8bd76.png"},de49:function(e,t,a){},e7ed:function(e,t,a){}});
//# sourceMappingURL=app.5f8fe442.js.map