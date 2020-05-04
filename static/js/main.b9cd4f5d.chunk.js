(this["webpackJsonpcoding-challenge"]=this["webpackJsonpcoding-challenge"]||[]).push([[0],{169:function(e,t,a){e.exports=a(361)},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},361:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(48),o=a.n(c),l=(a(174),a(127)),s=a(128),i=a(27),m=a(139),u=a(138),d=(a(175),a(176),function(){return r.a.createElement("header",{className:"container head"},r.a.createElement("div",{className:"item"},r.a.createElement("h1",{className:"big"},"COVID-19"),r.a.createElement("h3",{className:"small"},"Corona Virus Disease 2019 ",r.a.createElement("span",{className:"small-header"},"statistics"))))}),h=(a(177),a(178),function(e){var t=e.data,a=e.image;return r.a.createElement("div",{className:"card-container"},r.a.createElement("article",{className:"news-item"},r.a.createElement("div",null,r.a.createElement("img",{src:a.url,className:"news-image",alt:a.title})),r.a.createElement("h4",null," ",t.title," "),r.a.createElement("p",null," ",t.excerpt," "),r.a.createElement("p",{className:"card-links"},r.a.createElement("a",{href:t.webUrl,target:"_blank",className:"read",rel:"noopener noreferrer"}," Read more... "),r.a.createElement("a",{href:"https://www.".concat(t.provider.domain),target:"_blank",className:"provider-name",rel:"noopener noreferrer"}," ",t.provider.name," "))))}),f=function(e){var t=e.news,a=e.images;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"first-group"},t.map((function(e,t){return r.a.createElement(h,{key:t,data:e,image:a[t]})}))))},p=function(e){var t=e.news,a=e.images;return r.a.createElement("aside",{className:"news-container main-item"},r.a.createElement(f,{news:t,images:a}))},g=(a(179),function(e){var t=e.globalBreakdowns,a=e.fetchHistory;return r.a.createElement("main",{className:"board-container main-item"},r.a.createElement("div",{className:"board-item"},r.a.createElement("div",{className:"stat"},r.a.createElement("div",{className:"flag-title"},"Flag"),r.a.createElement("div",{className:"country"},"Country"),r.a.createElement("div",{className:"confirmed"},"Confirmed"),r.a.createElement("div",{className:"recovered"},"Recovered"),r.a.createElement("div",{className:"death"},"Death"))),t.map((function(e,t){return r.a.createElement(n.Fragment,{key:e.location.countryOrRegion},r.a.createElement("div",{className:"board-item",onClick:function(){return a(e.location.isoCode)}},r.a.createElement("div",{className:"stat"},r.a.createElement("img",{className:"flag",src:"https://www.countryflags.io/".concat(e.location.isoCode,"/flat/64.png"),alt:"flag"}),r.a.createElement("div",{className:"country"},e.location.countryOrRegion),r.a.createElement("div",{className:"confirmed"},"".concat(e.totalConfirmedCases),r.a.createElement("span",{id:"plus"}," + ".concat(e.newlyConfirmedCases))),r.a.createElement("div",{className:"recovered"},"".concat(e.totalRecoveredCases),r.a.createElement("span",{id:"plus"}," + ".concat(e.newlyRecoveredCases))),r.a.createElement("div",{className:"death"},"".concat(e.totalDeaths),r.a.createElement("span",{id:"plus"}," + ".concat(e.newDeaths))))))})))}),E=(a(180),function(e){var t=e.onChange;return r.a.createElement("input",{className:"input",type:"search",placeholder:"Search Countries",onChange:t})}),y=a(8),v=function(e){var t=e.close,a=e.graphData,n=e.countryName;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t},"close"),r.a.createElement(y.e,{width:"100%",height:450},r.a.createElement(y.d,{width:"100%",height:400,data:a,margin:{top:5,right:15,bottom:5,left:15}},r.a.createElement(y.c,{type:"monotone",dataKey:"confirmed",dot:!1,stroke:"red"}),r.a.createElement(y.c,{type:"monotone",dataKey:"deaths",dot:!1,stroke:"black"}),r.a.createElement(y.c,{type:"monotone",dataKey:"recovered",dot:!1,stroke:"green"}),r.a.createElement(y.g,{dataKey:"date"},r.a.createElement(y.a,{value:n,offset:350,position:"top"})),r.a.createElement(y.h,null),r.a.createElement(y.b,null),r.a.createElement(y.f,null))))},b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){fetch("https://api.smartable.ai/coronavirus/stats/global",{method:"get",headers:{"content-type":"application/json","Subscription-Key":"d383a676794343deab023ff0a5a7f2e5"}}).then((function(e){return e.json()})).then((function(e){return n.setState({globalHistory:e.stats.history,globalBreakdowns:e.stats.breakdowns,filteredBreakdowns:e.stats.breakdowns})})),fetch("https://api.smartable.ai/coronavirus/news/global",{method:"get",headers:{"content-type":"application/json","Subscription-Key":"d383a676794343deab023ff0a5a7f2e5"}}).then((function(e){return e.json()})).then((function(e){return e.news})).then((function(e){var t;t=e.map((function(e){return null===e.images?{url:"",title:""}:e.images[0]})),n.setState({news:e,images:t})}))},n.state={globalHistory:[],countryHistory:[],globalBreakdowns:[],filteredBreakdowns:[],news:[],countryName:"",images:[],searchfield:"",openModal:!1},n.handleInput=n.handleInput.bind(Object(i.a)(n)),n.fetchHistory=n.fetchHistory.bind(Object(i.a)(n)),n.closeModal=n.closeModal.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"handleInput",value:function(e){this.setState({searchfield:e.target.value})}},{key:"fetchHistory",value:function(e){var t=this;null!==e?(console.log("Preparing to fetch: ",e),this.setState({openModal:!0}),console.log("Fetching",e),fetch("https://api.smartable.ai/coronavirus/stats/".concat(e),{method:"get",headers:{"content-type":"application/json","Subscription-Key":"d383a676794343deab023ff0a5a7f2e5"}}).then((function(e){return e.json()})).then((function(e){return t.setState({countryName:e.location.countryOrRegion}),e.stats})).then((function(e){return e.history})).then((function(e){var a=e.map((function(e){return Object.assign({},e,{date:new Date(e.date).toDateString().slice(4,10)})}));t.setState((function(e){return{countryHistory:a}}))})).catch((function(e){return console.log("Error!",e)}))):alert("Sorry! data not available :(")}},{key:"closeModal",value:function(){this.setState({openModal:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.news,c=t.images,o=t.openModal,l=t.countryHistory,s=this.state.globalBreakdowns.filter((function(t){return t.location.countryOrRegion.toLocaleLowerCase().includes(e.state.searchfield.toLocaleLowerCase())}));return r.a.createElement(n.Fragment,null,r.a.createElement(d,null),r.a.createElement(E,{onChange:this.handleInput}),r.a.createElement("div",{className:"main-container"},o?r.a.createElement("div",{className:"board-container"},r.a.createElement(v,{graphData:l,close:this.closeModal,countryName:this.state.countryName})):r.a.createElement(g,{globalBreakdowns:s,fetchHistory:this.fetchHistory}),r.a.createElement(p,{news:a,images:c})))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.b9cd4f5d.chunk.js.map