(window.webpackJsonpvoypost_task=window.webpackJsonpvoypost_task||[]).push([[0],{28:function(e,t,a){e.exports={main:"TripList_main__314mB",card:"TripList_card__38Ftl",nav:"TripList_nav__1kyGB"}},35:function(e){e.exports=JSON.parse('[{"fromName":"Berlin, Germany","toName":"Kyiv, Ukraine","departAt":"2019-05-29T00:00:00.000Z","vehicle":"plane"},{"fromName":"Berlin, Germany","toName":"Dnipro, Ukraine","departAt":"2019-06-02T00:00:00.000Z","vehicle":"car"},{"fromName":"London, UK","toName":"Kyiv, Ukraine","departAt":"2019-06-07T00:00:00.000Z","vehicle":"plane"},{"fromName":"Lyon, France","toName":"Kyiv, Ukraine","departAt":"2019-06-07T00:00:00.000Z","vehicle":"plane"},{"fromName":"Moscow, Russia","toName":"Kyiv, Ukraine","departAt":"2019-06-08T00:00:00.000Z","vehicle":"car"},{"fromName":"Kyiv, Ukraine","toName":"Berlin, Germany","departAt":"2019-05-30T00:00:00.000Z","vehicle":"train"}]')},42:function(e,t,a){e.exports=a(61)},47:function(e,t,a){},48:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=(a(47),a(48),a(25)),l=a(17),s=a(32),m=a(33),p=a(36),u=a(34),d=a.n(u),v=a(28),h=a.n(v),f=a(95),y=a(96),g=a(97),N=a(98),E=a(101),w=a(99),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={initialItems:a.props.content,items:a.props.content,isEmpty:!1,sortFlag:!1},a.toggleSort=function(e){var t=a.state.initialItems;a.setState({initialItems:a.state.sortFlag?a.sortUp(e,t):a.sortDown(e,t),sortFlag:!a.state.sortFlag})},a.sortDown=function(e,t){return t.sort(function(t,a){return t[e]<a[e]?1:a[e]<t[e]?-1:0})},a.sortUp=function(e,t){return t.sort(function(t,a){return t[e]>a[e]?1:a[e]>t[e]?-1:0})},a.filterList=function(e){var t=a.state.initialItems,n=e.target.value.toLowerCase();0===(t=t.filter(function(e){return e.toName.toLowerCase().includes(n)||e.toName.toLowerCase().includes(n)})).length?a.setState({isEmpty:!0}):a.setState({isEmpty:!1}),a.setState({items:t})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:h.a.nav},r.a.createElement(E.a,{onClick:function(){return e.toggleSort("fromName")},variant:"contained",color:"primary",style:{margin:20}},"Sort by dispatch"),r.a.createElement(N.a,{id:"outlined-search",label:"Search field",type:"search",margin:"normal",variant:"outlined",onChange:this.filterList}),this.state.isEmpty?r.a.createElement(w.a,{bgcolor:"grey.700",color:"white",p:1,position:"absolute",textAlign:"center",top:"19%",left:"43%",zIndex:"tooltip",boxShadow:3,borderRadius:10},r.a.createElement("p",null,"No results found")):null,r.a.createElement(E.a,{onClick:function(){return e.toggleSort("toName")},variant:"contained",color:"primary",style:{margin:20}},"Sort by delivery")),this.state.items.map(function(e){return r.a.createElement(f.a,{key:d.a.generate(),className:h.a.card},r.a.createElement(y.a,null,r.a.createElement(g.a,{className:h.a.title,color:"textSecondary"},"Trip"),r.a.createElement(g.a,{variant:"h5",component:"h2"},"From: ",e.fromName),r.a.createElement(g.a,{variant:"h5",component:"h2"},"To: ",e.toName),r.a.createElement(g.a,{variant:"body2",component:"p"},"Dispatch: ",e.departAt),r.a.createElement(g.a,{variant:"body2",component:"p"},"Vehicle: ",e.vehicle)))}))}}]),t}(n.Component),b=a(35);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}," Voypost App Search"),r.a.createElement(k,{content:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.d4336582.chunk.js.map