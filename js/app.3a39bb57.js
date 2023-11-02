(function(){"use strict";var t={1388:function(t,n,e){var r=e(9242),o=e(3396);function a(t,n,e,r,a,i){const l=(0,o.up)("NavBar");return(0,o.wg)(),(0,o.iD)("main",null,[(0,o.Wm)(l)])}const i={class:"container"},l=(0,o._)("label",{name:"search"},"Search",-1),c={type:"button",class:"btn"};function u(t,n,e,r,a,u){const s=(0,o.up)("font-awesome-icon"),f=(0,o.up)("TableView");return(0,o.wg)(),(0,o.iD)("main",null,[(0,o._)("div",i,[l,(0,o._)("input",{type:"text",placeholder:"Search",name:"searach",class:"search",onInput:n[0]||(n[0]=t=>u.handleSearch(t))},null,32),(0,o._)("button",c,[(0,o.Wm)(s,{icon:["fas","magnifying-glass"],"beat-fade":""})])]),(0,o.Wm)(f,{items:a.items},null,8,["items"])])}var s=e(7139);const f={class:"table_wrapper"},h=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"UserID"),(0,o._)("th",null,"Title"),(0,o._)("th",null,"Body")])],-1);function d(t,n,e,r,a,i){return(0,o.wg)(),(0,o.iD)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.items,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"table-container",key:t.id},[(0,o._)("div",f,[(0,o._)("table",null,[h,(0,o._)("tbody",null,[(0,o._)("tr",null,[(0,o._)("td",null,(0,s.zw)(t.userId),1),(0,o._)("td",null,(0,s.zw)(t.title),1),(0,o._)("td",null,(0,s.zw)(t.body),1)])])])])])))),128))])}var p={name:"TableView",props:["items","filterDatas"]},v=e(89);const m=(0,v.Z)(p,[["render",d]]);var b=m,w={name:"NavBar",components:{TableView:b},data(){return{items:[]}},created(){this.fetchData()},methods:{fetchData(){const t="https://jsonplaceholder.typicode.com/posts";fetch(t).then((t=>t.json())).then((t=>{this.items=t})).catch((t=>console.error("Error fetching data: ",t)))},handleSearch(t){let n=t.target.value.toLowerCase().trim(),e=this.items.filter((t=>t.title.toLowerCase().includes(n)));this.items=e}}};const _=(0,v.Z)(w,[["render",u]]);var g=_,y={components:{NavBar:g}};const O=(0,v.Z)(y,[["render",a]]);var j=O,D=e(3494),k=e(7749),x=e(8539);D.vI.add(x.mRB),(0,r.ri)(j).component("font-awesome-icon",k.GN).mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return t[r].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,a){if(!r){var i=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],a=t[s][2];for(var l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](r[c])}))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){t.splice(s--,1);var u=o();void 0!==u&&(n=u)}}return n}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[r,o,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,a,i=r[0],l=r[1],c=r[2],u=0;if(i.some((function(n){return 0!==t[n]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(c)var s=c(e)}for(n&&n(r);u<i.length;u++)a=i[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(s)},r=self["webpackChunkproject"]=self["webpackChunkproject"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(1388)}));r=e.O(r)})();
//# sourceMappingURL=app.3a39bb57.js.map