(this["webpackJsonpcovid-19tracker"]=this["webpackJsonpcovid-19tracker"]||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),s=(a(100),a(24)),l=a.n(s),i=a(35),u=a(16),m=(a(102),a(238)),d=a(239),f=a(240),p=a(232),v=a(236),h=a(88),E=(a(103),a(237));var g=function(e){var t=e.title,a=e.cases,n=e.total,r=e.active,o=e.isRed,s=e.isGreen,l=e.isBlack,i=Object(h.a)(e,["title","cases","total","active","isRed","isGreen","isBlack"]);return console.log(t,r),c.a.createElement(p.a,{onClick:i.onClick,className:"infoBox ".concat(r&&"infoBox--selected"," ").concat(o&&"infoBox--red"," ").concat(s&&"infoBox--green")},c.a.createElement(v.a,null,c.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},t),c.a.createElement("h2",{className:"infoBox__cases ".concat(!s&&!o&&"infoBox__cases--black"," ").concat(!o&&!l&&"infoBox__cases--green")},a),c.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))},b=a(84),y=a(14),x=a.n(y),j={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return x()(e).format("0a")}}}]}},w=function(e,t){var a,n=[];for(var c in e.cases){if(a){var r={x:c,y:e[t][c]-a};n.push(r)}a=e[t][c]}return n};var O=function(e){var t=e.casesType,a=Object(n.useState)({}),r=Object(u.a)(a,2),o=r[0],s=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=w(e,t);s(a),console.log(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),c.a.createElement("div",null,(null===o||void 0===o?void 0:o.length)>0&&c.a.createElement(b.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},options:j}))};a(203);var _=function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return c.a.createElement("tr",null,c.a.createElement("td",null,t),c.a.createElement("td",null,c.a.createElement("strong",null,x()(a).format("0, 0"))))})))},k=a(87),C=a(241),N=a(242),B={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#000000",multiplier:2e3}},S=function(e){return Object(k.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},I=function(e){return e?"+".concat(x()(e).format("0.0a")):"+0"},D=a(243),R=a(244);a(204);var L=function(e){var t=e.countries,a=e.casesType,n=e.center,r=e.zoom;return c.a.createElement("div",{className:"map"},c.a.createElement(D.a,{center:n,zoom:r,worldCopyJump:!1,maxBounds:[[-90,-180],[90,180]],maxBoundsViscosity:1,minZoom:2},c.a.createElement(R.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:' <a href="#"></a>',noWrap:!0}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:B[t].hex,fillColor:B[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*B[t].multiplier},c.a.createElement(N.a,null,c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info-name"},e.country),c.a.createElement("div",{className:"info-confirmed"},"Cases: ",x()(e.cases).format("0,0")),c.a.createElement("div",{className:"info-recovered"},"Recovered: ",x()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info-deaths"},"Deaths: ",x()(e.deaths).format("0,0")))))}))}(t,a)))},T=a(86),W=a.n(T),z=(a(205),function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({}),s=Object(u.a)(o,2),h=s[0],E=s[1],b=Object(n.useState)([]),y=Object(u.a)(b,2),j=y[0],w=y[1],k=Object(n.useState)([]),C=Object(u.a)(k,2),N=C[0],B=C[1],D=Object(n.useState)([]),R=Object(u.a)(D,2),T=R[0],z=R[1],A=Object(n.useState)("cases"),M=Object(u.a)(A,2),G=M[0],J=M[1],F=Object(n.useState)({lat:34.80746,lng:-40.4796}),V=Object(u.a)(F,2),Y=V[0],q=V[1],U=Object(n.useState)(3),Z=Object(u.a)(U,2),$=Z[0],H=Z[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){E(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=S(e);w(t),B(e),z(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(G);var K=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){r(a),E(e),"worldwide"!==a?(q([e.countryInfo.lat,e.countryInfo.long]),H(5)):(q({lat:34.80746,lng:-40.4796}),H(3))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("img",{className:"app__image",src:W.a,alt:"COVID-19"}),c.a.createElement(m.a,{className:"app__dropdown"},c.a.createElement(d.a,{variant:"outlined",value:a,onChange:K},c.a.createElement(f.a,{value:"worldwide"},"Worldwide"),j.map((function(e){return c.a.createElement(f.a,{value:e.value},e.name)}))))),c.a.createElement("div",{style:{textAlign:"right",marginBottom:"8px"}},c.a.createElement("span",{img:"\ud83d\udd34"}," Updated: "),function(e){var t=new Date(e);return"".concat(t.toLocaleString("default",{dateStyle:"long"})," (").concat(t.toLocaleString("default",{hour12:!1,timeStyle:"short"}),")")}(h.updated)),c.a.createElement("div",{className:"app__stats"},c.a.createElement(g,{onClick:function(e){return J("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===G,cases:I(h.todayCases),total:x()(h.cases).format("0.0a")}),c.a.createElement(g,{onClick:function(e){return J("recovered")},title:"Recovered",isGreen:!0,active:"recovered"===G,cases:I(h.todayRecovered),total:x()(h.recovered).format("0.0a")}),c.a.createElement(g,{onClick:function(e){return J("deaths")},title:"Deaths",isBlack:!0,active:"deaths"===G,cases:I(h.todayDeaths),total:x()(h.deaths).format("0.0a")})),c.a.createElement(L,{countries:N,casesType:G,center:Y,zoom:$})),c.a.createElement(p.a,{className:"app__right"},c.a.createElement(v.a,null,c.a.createElement("div",{className:"app__information"},c.a.createElement("h3",null,"Live Cases by Country"),c.a.createElement(_,{countries:T}),c.a.createElement("h3",{className:"app__graphTitle"},"Worldwide new ",G),c.a.createElement(O,{className:"app__graph",casesType:G}))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a.p+"static/media/Logo.de92d3f1.png"},95:function(e,t,a){e.exports=a(206)}},[[95,1,2]]]);
//# sourceMappingURL=main.7a015e0b.chunk.js.map