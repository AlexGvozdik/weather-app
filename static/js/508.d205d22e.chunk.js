"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[508],{1508:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=a(2791),i=a(885),l=a(3504),n=a(6871),c=a(4569),p=a.n(c),o=a(4238),r={item:"Details_item__wMGf6",nameDetails:"Details_nameDetails__oLdwD",populDetails:"Details_populDetails__FsqKD",listItemTemp:"Details_listItemTemp__tM-lh",backDetails:"Details_backDetails__kUwBN"},m=a(184);function u(){var t=(0,n.TH)().state,e=(0,s.useState)(null),a=(0,i.Z)(e,2),c=a[0],u=a[1];return(0,s.useEffect)((function(){p().get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(t.lat,"&lon=").concat(t.lon,"&appid=").concat("d0aef4da9ac1a34e09e4ce9ff137ae24")).then((function(t){var e=t.data;return u(e)}))}),[]),c?(0,m.jsxs)("div",{className:"".concat(r.item),children:[(0,m.jsxs)("p",{className:r.nameDetails,children:[c.city.name," ",c.city.country]}),(0,m.jsxs)("p",{className:r.populDetails,children:["population:",c.city.population]}),(0,m.jsx)("ul",{className:r.listTemp,style:{display:"flex",position:"relative",margin:"0 auto 90px"},children:c.list.slice(0,5).map((function(t){return(0,m.jsxs)("li",{className:r.listItemTemp,style:{position:"absolute",padding:"2px",border:"1px solid white",bottom:"".concat((0,o.ZL)(t.main.temp),"px")},children:[(0,m.jsxs)("div",{className:r.temp,children:[Math.floor((0,o.ZL)(t.main.temp))," ","\xb0C"]}),(0,m.jsx)("div",{className:r.date,children:(0,o.hK)(t.dt_txt)})]},t.dt_txt)}))}),(0,m.jsx)(l.rU,{className:r.backDetails,to:"/",children:"Back"})]}):(0,m.jsx)("p",{children:"Not found"})}function d(){return(0,m.jsx)(u,{})}}}]);
//# sourceMappingURL=508.d205d22e.chunk.js.map