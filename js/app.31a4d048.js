(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/agrinovus-receipts-prototype/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=n("8c4f"),o=n("5f5b"),i=n("b1e0"),c=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)}),s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("Ticket Booth")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"camera"}},[e._v("Capture Ticket")]),n("b-nav-item",{attrs:{to:"#",disabled:""}},[e._v("View Tickets")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[n("BIconPersonFill")],1)]},proxy:!0}])},[n("b-dropdown-item",{attrs:{to:"#"}},[e._v("Profile")]),n("b-dropdown-item",{attrs:{to:"#"}},[e._v("Sign Out")])],1)],1)],1)],1)},u=[],d={name:"NavBar",components:[o["b"]]},p=d,v=n("2877"),f=Object(v["a"])(p,l,u,!1,null,null,null),m=f.exports,b={name:"App",components:{NavBar:m}},h=b,g=(n("034f"),Object(v["a"])(h,c,s,!1,null,null,null)),C=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},y=[],w={name:"Home"},O=w,S=Object(v["a"])(O,_,y,!1,null,null,null),j=S.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("h2",[e._v("Current Camera")]),e.device?n("code",[e._v(e._s(e.device.label))]):e._e(),n("div",{staticClass:"border"},[n("web-cam",{ref:"webcam",attrs:{"device-id":e.deviceId,width:"100%"},on:{started:e.onStarted,stopped:e.onStopped,error:e.onError,cameras:e.onCameras,"camera-change":e.onCameraChange}})],1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.camera,expression:"camera"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.camera=t.target.multiple?n:n[0]}}},[n("option",[e._v("-- Select Device --")]),e._l(e.devices,(function(t){return n("option",{key:t.deviceId,domProps:{value:t.deviceId}},[e._v(" "+e._s(t.label)+" ")])}))],2)]),n("div",{staticClass:"col-md-12"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.onCapture}},[e._v(" Capture Photo ")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:e.onStop}},[e._v(" Stop Camera ")]),n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:e.onStart}},[e._v(" Start Camera ")])])])]),n("div",{staticClass:"col-md-6"},[n("h2",[e._v("Captured Image")]),n("figure",{staticClass:"figure"},[n("img",{staticClass:"img-responsive",attrs:{src:e.img}})])])])])},I=[],x=(n("7db0"),n("b3cb")),E={name:"ReceiptCaptor",components:{WebCam:x["WebCam"]},data:function(){return{img:null,camera:null,deviceId:null,devices:[]}},computed:{device:function(){var e=this;return this.devices.find((function(t){return t.deviceId===e.deviceId}))}},watch:{camera:function(e){this.deviceId=e},devices:function(){var e=this.devices.first;e&&(this.camera=e.deviceId,this.deviceId=e.deviceId)}},methods:{onCapture:function(){this.img=this.$refs.webcam.capture()},onStarted:function(e){console.log("On Started Event",e)},onStopped:function(e){console.log("On Stopped Event",e)},onStop:function(){this.$refs.webcam.stop()},onStart:function(){this.$refs.webcam.start()},onError:function(e){console.log("On Error Event",e)},onCameras:function(e){this.devices=e,console.log("On Cameras Event",e)},onCameraChange:function(e){this.deviceId=e,this.camera=e,console.log("On Camera Change Event",e)}}},P=E,$=Object(v["a"])(P,k,I,!1,null,null,null),T=$.exports;r["default"].use(a["a"]),r["default"].use(o["a"]),r["default"].use(i["a"]),r["default"].config.productionTip=!1;var B=[{name:"home",path:"/",component:j},{name:"camera",path:"/camera",component:T}],M=new a["a"]({mode:"history",base:"/agrinovus-receipts-prototype/",routes:B});new r["default"]({router:M,render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.31a4d048.js.map