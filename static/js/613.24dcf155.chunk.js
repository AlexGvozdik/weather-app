"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[613],{8613:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var a,r=e(2791),i=e(5861),c=e(2982),o=e(885),s=e(7757),u=e.n(s),d=e(3504),f=e(9434),p=e(3579),l=new Uint8Array(16);function m(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(l)}var h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var y=function(n){return"string"===typeof n&&h.test(n)},_=[],g=0;g<256;++g)_.push((g+256).toString(16).substr(1));var v=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(_[n[t+0]]+_[n[t+1]]+_[n[t+2]]+_[n[t+3]]+"-"+_[n[t+4]]+_[n[t+5]]+"-"+_[n[t+6]]+_[n[t+7]]+"-"+_[n[t+8]]+_[n[t+9]]+"-"+_[n[t+10]]+_[n[t+11]]+_[n[t+12]]+_[n[t+13]]+_[n[t+14]]+_[n[t+15]]).toLowerCase();if(!y(e))throw TypeError("Stringified UUID is invalid");return e};var w=function(n,t,e){var a=(n=n||{}).random||(n.rng||m)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){e=e||0;for(var r=0;r<16;++r)t[e+r]=a[r];return t}return v(a)},Z=e(4713),j=e(3004),x=e(4238),N=e(4569),M=e.n(N),E=e(8910),C=e(1421),b=e(577),B=(e(5462),e(184));function V(){var n=(0,f.I0)(),t=(0,f.v9)(j.M),e=(0,f.v9)(p.V),a=(0,r.useState)([]),s=(0,o.Z)(a,2),l=s[0],m=s[1];function h(){return(h=(0,i.Z)(u().mark((function n(t){var e,a,r,i,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.lat,a=t.lon,r=t.name,n.next=3,M().get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(a,"&appid=").concat("d0aef4da9ac1a34e09e4ce9ff137ae24","&units=imperial"));case 3:i=n.sent,c=i.data,m((function(n){return n.map((function(n){return n.name===r?c:n}))}));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(0,r.useEffect)((function(){for(var n=[],e=function(e){l.forEach((function(a){a.name===t[e]&&n.push(a)}))},a=0;a<t.length;a++)e(a);m(n),null===t||void 0===t||t.forEach((function(n){M().get("/weather?q=".concat(n,"&appid=").concat("d0aef4da9ac1a34e09e4ce9ff137ae24","&units=imperial")).then((function(t){var e=t.data;m((function(t){return t&&null!==t&&void 0!==t&&t.find((function(t){return t.name===n}))?t:[].concat((0,c.Z)(t),[e])}))}))}))}),[t]);var y=[];return t.length===l.length&&t.forEach((function(n){y.push(l.find((function(t){return t.name===n})))})),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("h3",{className:E.Z.heading,children:"Your favourite countries"}),e?(0,B.jsx)(C.Z,{}):(0,B.jsx)("div",{className:E.Z.wrapper,children:y.length>0?(0,B.jsx)("ul",{className:"".concat(E.Z.grid," grid"),children:y.map((function(t){return(0,B.jsxs)("li",{className:"".concat(E.Z.item," item"),children:[(0,B.jsxs)("p",{className:E.Z.cityName,children:[t.name," ",t.sys.country]}),(0,B.jsx)("p",{className:E.Z.citySun,children:t.dt}),(0,B.jsxs)("p",{className:E.Z.cityTemp,children:[Math.floor((0,x.ZL)(t.main.temp))," ","\xb0C"]}),(0,B.jsx)("p",{className:E.Z.cityDescr,children:t.weather[0].description}),(0,B.jsxs)("div",{className:E.Z.wrapperBtn,children:[(0,B.jsx)(d.rU,{className:E.Z.cityBtn,state:{lat:t.coord.lat,lon:t.coord.lon},to:"/details/".concat(t.name),children:"Details"}),(0,B.jsx)("button",{className:E.Z.cityBtn,onClick:function(){n((0,Z.VB)(t.name)),b.Am.success("REMOVED!!!")},children:"remove"}),(0,B.jsx)("button",{className:E.Z.cityBtn,onClick:function(){!function(n){h.apply(this,arguments)}({lon:t.coord.lon,lat:t.coord.lat,name:t.name}),b.Am.success("UPDATED!!!")},children:"update"})]})]},w())}))}):(0,B.jsx)("h4",{className:E.Z.emptyList,children:"No favourites HERE"})})]})}function k(){return(0,B.jsx)(V,{})}},3004:function(n,t,e){e.d(t,{M:function(){return a}});var a=function(n){return n.cities.arr}},3579:function(n,t,e){e.d(t,{D:function(){return a},V:function(){return r}});var a=function(n){return n.searchedWeather},r=function(n){return n.searchedWeather.loading}},8910:function(n,t){t.Z={wrapper:"Main_wrapper__pkenO",grid:"Main_grid__jIWGL",item:"Main_item__9Ao85",heading:"Main_heading__8U8Eb",cityName:"Main_cityName__4zdJh",citySun:"Main_citySun__BgYJW",cityDescr:"Main_cityDescr__hQV5F",cityTemp:"Main_cityTemp__8qhwH",cityCoord:"Main_cityCoord__kUEZL",wrapperBtn:"Main_wrapperBtn__QqFJ0",cityBtn:"Main_cityBtn__sKcaj",emptyList:"Main_emptyList__cYu2e"}}}]);
//# sourceMappingURL=613.24dcf155.chunk.js.map