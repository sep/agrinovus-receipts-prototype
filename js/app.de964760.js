(function(e){function t(t){for(var a,o,c=t[0],s=t[1],u=t[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/agrinovus-receipts-prototype/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1115:function(e,t,n){e.exports=n.p+"img/Bunge Grain Ticket Sample.e7d7fea7.png"},4874:function(e,t,n){var a={"./Bunge Grain Ticket Sample.png":"1115","./CGB Elevator Grain Ticket Sample.png":"ce6c","./Ingredion Grain Ticket Sample.png":"7689"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="4874"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("8c4f"),i=n("5f5b"),o=n("b1e0"),c=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)}),s=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("Ticket Booth")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"camera"}},[e._v("Capture Ticket")]),n("b-nav-item",{attrs:{to:"tickets"}},[e._v("View Tickets")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[n("BIconPersonFill")],1)]},proxy:!0}])},[n("b-dropdown-item",{attrs:{to:"#"}},[e._v("Profile")]),n("b-dropdown-item",{attrs:{to:"#"}},[e._v("Sign Out")])],1)],1)],1)],1)},l=[],d={name:"NavBar",components:[i["b"]]},p=d,f=n("2877"),m=Object(f["a"])(p,u,l,!1,null,null,null),v=m.exports,h={name:"App",components:{NavBar:v}},b=h,g=(n("034f"),Object(f["a"])(b,c,s,!1,null,null,null)),w=g.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},y=[],k={name:"Home"},_=k,S=Object(f["a"])(_,C,y,!1,null,null,null),I=S.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container p-4"},[n("b-alert",{staticClass:"fixed-top",attrs:{show:e.dismissCountDown,dismissible:"",fade:"",variant:"success"},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[e._v("Ticket uploaded successfully.")]),n("b-row",{attrs:{"align-h":"center"}},[n("div",{staticClass:"col-md-6"},[n("h1",[e._v("Capture Ticket")]),this.img?n("b-img",{attrs:{src:this.img,fluid:""}}):e._e(),n("web-cam",{ref:"webcam",attrs:{hidden:e.img,height:"100%","device-id":e.deviceId},on:{cameras:e.onCameras,"camera-change":e.onCameraChange}}),n("b-row",{staticClass:"actions",attrs:{"align-h":"center"}},[n("b-col",[n("b-button",{attrs:{disabled:this.devices.length<2,size:"lg",variant:"outline-secondary"},on:{click:e.onShuffleCamera}},[n("b-icon",{attrs:{icon:"arrow-repeat","aria-label":"Change Camera"}})],1)],1),n("b-col",[this.img?n("b-button",{attrs:{size:"lg",variant:"primary"},on:{click:e.onSaveTicket}},[n("b-icon",{attrs:{icon:"upload","aria-label":"Save picture"}})],1):n("b-button",{attrs:{size:"lg",variant:"primary"},on:{click:e.onCapture}},[n("b-icon",{attrs:{icon:"camera-fill","aria-label":"Take picture"}})],1)],1),n("b-col",[this.img?n("b-button",{attrs:{size:"lg",variant:"secondary"},on:{click:e.onCancel}},[n("b-icon",{attrs:{icon:"x","aria-label":"Reurn to camera"}})],1):e._e()],1)],1)],1)])],1)},x=[],T=(n("7db0"),n("c740"),n("b3cb")),j={name:"TicketCaptor",components:{WebCam:T["WebCam"]},data:function(){return{img:null,camera:null,deviceId:null,devices:[],dismissSecs:3,dismissCountDown:0}},computed:{device:function(){var e=this;return this.devices.find((function(t){return t.deviceId===e.deviceId}))}},watch:{camera:function(e){this.deviceId=e},devices:function(){var e=this.devices[0];e&&(this.camera=e.deviceId,this.deviceId=e.deviceId)}},methods:{onCapture:function(){this.img=this.$refs.webcam.capture()},onCameras:function(e){this.devices=e},onCameraChange:function(e){this.deviceId=e,this.camera=e},onShuffleCamera:function(){var e=this,t=this.devices.findIndex((function(t){return t.deviceId===e.deviceId})),n=(t+1)%this.devices.length,a=this.devices[n];a&&(this.camera=a.deviceId,this.deviceId=a.deviceId)},onSaveTicket:function(){var e=JSON.parse(localStorage.getItem("uploadedImages"))||[];e.push(this.img),localStorage.setItem("uploadedImages",JSON.stringify(e)),this.img=null,this.showAlert()},onCancel:function(){this.img=null},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},E=j,P=(n("a0c5"),Object(f["a"])(E,O,x,!1,null,"3521fb35",null)),B=P.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-4"},[n("h1",[e._v("View Tickets")]),e._l(e.images,(function(t,a){return n("b-card-group",{key:t.pathShort,attrs:{deck:""}},[n("b-card",{attrs:{overlay:"","img-src":t.pathLong,align:"right"}},[n("b-card-text",[a%2==0?n("b-badge",{staticClass:"mr-1",attrs:{variant:"primary"}},[e._v("Processed")]):e._e(),n("b-badge",{attrs:{variant:"success"}},[e._v("Paid")])],1)],1)],1)}))],2)},G=[],N=(n("4160"),n("d3b7"),n("159b"),n("ddb0"),{name:"TicketViewer",data:function(){return{images:[]}},mounted:function(){var e=n("4874");this.importContext(e);var t=JSON.parse(localStorage.getItem("uploadedImages"));this.importArray(t)},methods:{importContext:function(e){var t=this;e.keys().forEach((function(n){return t.images.push({pathLong:e(n),pathShort:n})}))},importArray:function(e){var t=this;e.forEach((function(e,n){return t.images.push({pathLong:e,pathShort:n})}))}}}),$=N,A=Object(f["a"])($,D,G,!1,null,null,null),J=A.exports;a["default"].use(r["a"]),a["default"].use(i["a"]),a["default"].use(o["a"]),a["default"].config.productionTip=!1;var M=[{name:"home",path:"/",component:I},{name:"camera",path:"/camera",component:B},{name:"tickets",path:"/tickets",component:J}],z=new r["a"]({mode:"history",base:"/agrinovus-receipts-prototype/",routes:M});new a["default"]({router:z,render:function(e){return e(w)}}).$mount("#app")},7689:function(e,t,n){e.exports=n.p+"img/Ingredion Grain Ticket Sample.0091b0c2.png"},"85ec":function(e,t,n){},a0c5:function(e,t,n){"use strict";n("b84f")},b84f:function(e,t,n){},ce6c:function(e,t,n){e.exports=n.p+"img/CGB Elevator Grain Ticket Sample.16f8bd76.png"}});
//# sourceMappingURL=app.de964760.js.map