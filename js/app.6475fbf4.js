(function(e){function t(t){for(var a,c,o=t[0],s=t[1],l=t[2],d=0,v=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&v.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/agrinovus-receipts-prototype/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("8c4f"),i=n("5f5b"),c=n("b1e0"),o=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)}),s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("Ticket Booth")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"camera"}},[e._v("Capture Ticket")]),n("b-nav-item",{attrs:{to:"tickets"}},[e._v("View Tickets")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[n("BIconPersonFill")],1)]},proxy:!0}])},[n("b-dropdown-item",{attrs:{to:"#"}},[e._v("Profile")]),n("b-dropdown-item",{attrs:{to:"#"}},[e._v("Sign Out")])],1)],1)],1)],1)},u=[],d={name:"NavBar",components:[i["b"]]},v=d,f=n("2877"),p=Object(f["a"])(v,l,u,!1,null,null,null),b=p.exports,m={name:"App",components:{NavBar:b}},h=m,g=(n("034f"),Object(f["a"])(h,o,s,!1,null,null,null)),w=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},y=[],k={name:"Home"},C=k,O=Object(f["a"])(C,_,y,!1,null,null,null),I=O.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container p-4"},[n("b-row",[n("div",{staticClass:"col-md-6"},[n("h1",[e._v("Capture Ticket")]),n("web-cam",{ref:"webcam",attrs:{"device-id":e.deviceId,width:"100%"},on:{cameras:e.onCameras,"camera-change":e.onCameraChange}}),n("b-row",[n("b-col",[n("b-button",{attrs:{disabled:this.devices.length<2,size:"lg",variant:"outline-secondary"},on:{click:e.onShuffleCamera}},[n("b-icon",{attrs:{icon:"arrow-repeat","aria-label":"Change Camera"}})],1)],1),n("b-col",[n("b-button",{attrs:{size:"lg",variant:"primary"},on:{click:e.onCapture}},[n("b-icon",{attrs:{icon:"camera-fill","aria-label":"Take picture"}})],1)],1),n("b-col",[n("b-link",{on:{click:e.onSaveTickets}},[n("b-img",{attrs:{src:e.img,thumbnail:"",fluid:""}})],1)],1)],1)],1)])],1)},x=[],T=(n("7db0"),n("c740"),n("b3cb")),S={name:"TicketCaptor",components:{WebCam:T["WebCam"]},data:function(){return{img:null,camera:null,deviceId:null,devices:[]}},computed:{device:function(){var e=this;return this.devices.find((function(t){return t.deviceId===e.deviceId}))}},watch:{camera:function(e){this.deviceId=e},devices:function(){var e=this.devices[0];e&&(this.camera=e.deviceId,this.deviceId=e.deviceId)}},methods:{onCapture:function(){this.img=this.$refs.webcam.capture()},onCameras:function(e){this.devices=e},onCameraChange:function(e){this.deviceId=e,this.camera=e},onShuffleCamera:function(){var e=this,t=this.devices.findIndex((function(t){return t.deviceId===e.deviceId})),n=(t+1)%this.devices.length,a=this.devices[n];a&&(this.camera=a.deviceId,this.deviceId=a.deviceId)},onSaveTickets:function(){}}},P=S,$=Object(f["a"])(P,j,x,!1,null,null,null),E=$.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container p-4"},[n("h1",[e._v("View Tickets")])])}],N={name:"TicketViewer"},V=N,z=Object(f["a"])(V,B,M,!1,null,null,null),J=z.exports;a["default"].use(r["a"]),a["default"].use(i["a"]),a["default"].use(c["a"]),a["default"].config.productionTip=!1;var W=[{name:"home",path:"/",component:I},{name:"camera",path:"/camera",component:E},{name:"tickets",path:"/tickets",component:J}],A=new r["a"]({mode:"history",base:"/agrinovus-receipts-prototype/",routes:W});new a["default"]({router:A,render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.6475fbf4.js.map