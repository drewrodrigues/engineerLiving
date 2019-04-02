!function(t){var a={};function e(s){if(a[s])return a[s].exports;var i=a[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=a,e.d=function(t,a,s){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)e.d(s,i,function(a){return t[a]}.bind(null,i));return s},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=0)}([function(t,a,e){"use strict";e.r(a);const s="SAN_FRANCISCO",i="NEW_YORK",r="BOSTON",n="PORTLAND",c="SEATTLE",l="AUSTIN",d="SAN_JOSE",h="RALEIGN",o="DENVER",y="PHOENIX",p={SAN_FRANCISCO:{city:"San Francisco",color:"#f1c40f",class:"city-San-Francisco"},NEW_YORK:{city:"New York",color:"#2980b9",class:"city-New-York"},BOSTON:{city:"Boston",color:"#e74c3c",class:"city-Boston"},PORTLAND:{city:"Portland",color:"#e67e22",class:"city-Portland"},SEATTLE:{city:"Seattle",color:"#1abc9c",class:"city-Seattle"},AUSTIN:{city:"Austin",color:"#34495e",class:"city-Austin"},SAN_JOSE:{city:"San Jose",color:"#9b59b6",class:"city-San-Jose"},RALEIGN:{city:"Raleign",color:"#f39c12",class:"city-Raleign"},DENVER:{city:"Denver",color:"#2980b9",class:"city-Denver"},PHOENIX:{city:"Phoenix",color:"#c0392b",class:"city-Phoenix"}},u=1e3,g=0,x=d3.easePoly,b=200,f=200,A=100;var v=class{constructor(t){this.setChart(t)}setChart(t){const a=d3.select(t).attr("height",f+2*A).attr("width",b+2*A);this.chart=a.append("g").attr("transform",`translate(${A}, ${A/2})`)}xAxis(t,a,e=5){this.xScale=d3[a]().domain(t).range([0,b]),this.chart.append("g").call(d3.axisBottom(this.xScale).ticks(e)).attr("transform",`translate(0, ${f})`)}yAxis(t,a){this.yScale=d3[a]().domain(t).range([0,b]).padding(.1),this.chart.append("g").call(d3.axisLeft(this.yScale))}gridLines(t,a,e=5){this.chart.append("g").attr("class","grid").call(d3[a]().scale(t).tickSize(b,0,0).tickFormat("").ticks(e))}rectangleLabels(t){this.chart.selectAll().data(this.sortedData).enter().append("text").attr("class",t=>`city ${t.class}`).attr("y",(t,a)=>19.9*a+14).style("fill","#fff").text((a,e)=>"string"==typeof t?a[t]:t.call(a,e)).transition().ease(x).delay((t,a)=>a*g).duration(u).attr("x",5)}labelTop(t){this.chart.append("text").attr("class","label-text").attr("text-anchor","middle").attr("x",b/2).attr("y",-20).text(t)}};var S=class extends v{constructor(t){super(t),this.setData(),this.xAxis([120,300],"scaleLinear"),this.yAxis(this.sortedData.map(t=>t.city),"scaleBand"),this.rectangles(),this.gridLines(this.xScale,"axisBottom"),this.rectangleLabels("days"),this.labelTop("Sunny Days Per Year")}setData(){this.data=p,this.data[s].days=256,this.data[i].days=224,this.data[n].days=144,this.data[r].days=200,this.data[c].days=152,this.data[l].days=228,this.data[d].days=204,this.data[h].days=213,this.data[o].days=245,this.data[y].days=299,this.sortedData=Object.values(this.data).sort((t,a)=>a.days-t.days)}rectangles(){this.chart.selectAll().data(this.sortedData).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>this.yScale(t.city)).attr("height",this.yScale.bandwidth()).style("fill",t=>t.color).transition().delay((t,a)=>a*g).duration(u).ease(x).attr("width",t=>this.xScale(t.days))}};var m=class extends v{constructor(t){super(t),this.setData(),this.xAxis([0,1350],"scaleLinear"),this.yAxis(this.sortedData.map(t=>t.city),"scaleBand"),this.rectangles(),this.gridLines(this.xScale,"axisBottom"),this.rectangleLabels(function(){return`$${parseInt(this.cost/1e3)}K`}),this.labelTop("Median Home Price")}setData(){this.data=p,this.data[s].cost=1331100,this.data[i].cost=662100,this.data[r].cost=587e3,this.data[n].cost=427500,this.data[c].cost=761800,this.data[l].cost=346500,this.data[d].cost=1083e3,this.data[h].cost=260100,this.data[o].cost=421900,this.data[y].cost=229300,this.sortedData=Object.values(this.data).sort((t,a)=>t.cost-a.cost)}rectangles(){this.chart.selectAll().data(this.sortedData).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>this.yScale(t.city)).attr("height",this.yScale.bandwidth()).style("fill",t=>t.color).transition().ease(x).delay((t,a)=>a*g).duration(u).attr("width",t=>this.xScale(t.cost)/1e3)}};var k=class{constructor(){this.ethnicities=["White","Asian","Hispanic","Black"],this.data=p,this.data[s].values=[{ethnicity:"White",percentage:41.4},{ethnicity:"Asian",percentage:33.3},{ethnicity:"Hispanic",percentage:15.3},{ethnicity:"Black",percentage:5.5}],this.data[i].values=[{ethnicity:"White",percentage:32.7},{ethnicity:"Asian",percentage:13.2},{ethnicity:"Hispanic",percentage:28.8},{ethnicity:"Black",percentage:22.6}],this.data[r].values=[{ethnicity:"White",percentage:46},{ethnicity:"Asian",percentage:9.1},{ethnicity:"Hispanic",percentage:18.4},{ethnicity:"Black",percentage:22.7}],this.data[n].values=[{ethnicity:"White",percentage:71.8},{ethnicity:"Asian",percentage:7.4},{ethnicity:"Hispanic",percentage:9.6},{ethnicity:"Black",percentage:5.9}],this.data[c].values=[{ethnicity:"White",percentage:66.2},{ethnicity:"Asian",percentage:14.2},{ethnicity:"Hispanic",percentage:6.4},{ethnicity:"Black",percentage:7.2}],this.data[l].values=[{ethnicity:"White",percentage:48.7},{ethnicity:"Asian",percentage:6.5},{ethnicity:"Hispanic",percentage:34.8},{ethnicity:"Black",percentage:7.5}],this.data[d].values=[{ethnicity:"White",percentage:27.5},{ethnicity:"Asian",percentage:32.9},{ethnicity:"Hispanic",percentage:33.1},{ethnicity:"Black",percentage:2.9}],this.data[h].values=[{ethnicity:"White",percentage:54},{ethnicity:"Asian",percentage:4.3},{ethnicity:"Hispanic",percentage:10.9},{ethnicity:"Black",percentage:28.5}],this.data[o].values=[{ethnicity:"White",percentage:52.9},{ethnicity:"Asian",percentage:3.4},{ethnicity:"Hispanic",percentage:31.2},{ethnicity:"Black",percentage:9.5}],this.data[y].values=[{ethnicity:"White",percentage:46},{ethnicity:"Asian",percentage:3.3},{ethnicity:"Hispanic",percentage:40.5},{ethnicity:"Black",percentage:6.5}],this.render()}render(){const t=d3.select("svg.diversity").attr("height",f+2*A-90).attr("width",b+2*A).append("g").attr("transform",`translate(${A}, ${A/2})`),a=d3.scaleBand().domain(this.ethnicities).range([0,b]);t.append("g").call(d3.axisBottom(a).tickSizeOuter(0)).attr("transform",`translate(0, ${f})`);const e=d3.scaleLinear().domain([70,0]).range([0,f]);t.append("g").call(d3.axisLeft(e).ticks(5));let s=d3.line().x(t=>a(t.ethnicity)).y(t=>e(t.percentage));t.selectAll(".line").data(Object.values(this.data)).enter().append("path").attr("transform","translate(25, 5)").attr("class",t=>`line city ${t.class}`).attr("d",t=>s(t.values)).style("stroke",t=>t.color).style("stroke-width",2).style("stroke-linecap","round"),t.selectAll().data(()=>Object.values(this.data)).enter().append("g").attr("class",t=>`city ${t.class} city-data-toggle`).selectAll(".line-point").data(t=>t.values).enter().append("text").text(t=>`${parseInt(t.percentage)}%`).transition().ease(x).delay((t,a)=>a*g).duration(u).attr("x",(t,a)=>b/4*a+20).attr("y",t=>f-f*(t.percentage/70)),t.append("text").attr("class","label-text").attr("x",-b/2).attr("y",-50).attr("transform","rotate(-90)").attr("text-anchor","middle").text("% of population"),t.append("text").attr("class","label-text").attr("x",b/2).attr("y",-20).attr("text-anchor","middle").text("Diversity"),t.append("g").attr("class","grid").call(d3.axisRight().scale(e).tickSize(b,0,0).tickFormat("").ticks(5))}};var j=class extends v{constructor(t){super(t),this.setData(),this.rectangles(),this.rectangleLabels(function(t){return`#${t+1} - ${this.city} (overall ${this.rank})`}),this.labelTop("Happiness Ranking")}setData(){this.data=p,this.data[s].rank=10,this.data[i].rank=90,this.data[r].rank=58,this.data[n].rank=84,this.data[c].rank=54,this.data[l].rank=14,this.data[d].rank=8,this.data[h].rank=23,this.data[o].rank=41,this.data[y].rank=127,this.sortedData=Object.values(this.data).sort((t,a)=>t.rank-a.rank)}rectangles(){this.chart.selectAll().data(this.sortedData).enter().append("rect").attr("class",t=>`city ${t.class}`).style("fill",t=>t.color).attr("height",f/this.sortedData.length).attr("y",(t,a)=>20*a).transition().delay((t,a)=>a*g).duration(u).ease(x).attr("width",b)}};var $=class{constructor(){this.data=p,this.data[s].position={x:20,y:160},this.data[s].ranking=1,this.data[i].position={x:625,y:135},this.data[i].ranking=2,this.data[n].position={x:45,y:90},this.data[n].ranking=3,this.data[r].position={x:650,y:100},this.data[r].ranking=4,this.data[c].position={x:45,y:40},this.data[c].ranking=5,this.data[l].position={x:320,y:350},this.data[l].ranking=6,this.data[d].position={x:35,y:190},this.data[d].ranking=7,this.data[h].position={x:600,y:210},this.data[h].ranking=8,this.data[o].position={x:250,y:170},this.data[o].ranking=9,this.data[y].position={x:150,y:255},this.data[y].ranking=10,this.render()}render(){this.svg=d3.select("svg.map"),this.shadowCircle(),this.mainCircle(),this.innerWhiteCircle(),this.cityLabel(),this.ranking()}shadowCircle(){this.svg.selectAll(".shadow").data(Object.values(this.data)).enter().append("circle").attr("r",15).attr("width",10).style("fill",t=>"rgba(0,0,0,0.3)").attr("class",t=>`city ${t.class} city-pinpoint`).transition().ease(x).duration(u).attr("cy",t=>t.position.y+5).attr("cx",t=>t.position.x)}mainCircle(){this.svg.selectAll().data(Object.values(this.data)).enter().append("circle").attr("r",15).style("fill","none").style("cursor","pointer").attr("class",t=>`city ${t.class} city-pinpoint`).transition().ease(x).duration(u).style("fill",t=>t.color).attr("cy",t=>t.position.y).attr("cx",t=>t.position.x)}innerWhiteCircle(){this.svg.selectAll().data(Object.values(this.data)).enter().append("circle").attr("r",10).style("fill",t=>"#fff").attr("class",t=>`city ${t.class} city-pinpoint`).transition().ease(x).duration(u).attr("cy",t=>t.position.y).attr("cx",t=>t.position.x).style("z-index",10).style("cursor","pointer")}cityLabel(){this.svg.selectAll("text").data(Object.values(this.data)).enter().append("text").attr("opacity",0).attr("class",t=>`map-city-label city ${t.class}`).text(t=>t.city).style("font-size",14).style("stroke-width",3).attr("fill",t=>t.color).transition().ease(x).duration(u/1.5).attr("opacity",1).attr("x",t=>"New York"===t.city?t.position.x-90:"Boston"===t.city?t.position.x-75:"Raleign"===t.city?t.position.x-80:t.position.x+25).attr("y",t=>t.position.y+5).style("z-index",10)}ranking(){this.svg.selectAll(".ranking").data(Object.values(this.data)).enter().append("text").text(t=>t.ranking).style("fill",t=>t.color).style("font-size",16).attr("class",t=>`city ${t.class} city-pinpoint`).transition().ease(x).duration(u).attr("y",t=>t.position.y+6).attr("x",t=>t.position.x).style("text-anchor","middle")}};var O=class{constructor(){this.setData(),this.setChart(),this.render()}setData(){this.data=p,this.data[s].jobs=7947,this.data[i].jobs=8364,this.data[r].jobs=3630,this.data[n].jobs=2359,this.data[c].jobs=10417,this.data[l].jobs=4308,this.data[d].jobs=3023,this.data[h].jobs=1377,this.data[o].jobs=1973,this.data[y].jobs=1491}setChart(){const t=d3.select("svg.jobMarket").attr("height",f+2*A).attr("width",b+2*A);this.chart=t.append("g").attr("transform",`translate(${A+70}, ${A+100})`)}render(){this._setChartVariables(),this._addPieChart(),this._addCityLabel(),this._addCountLabel(),this._middleLabel()}_setChartVariables(){this.radius=Math.min(b,f)/2,this.pie=d3.pie().value(t=>t.jobs),this.arc=d3.arc().innerRadius(0).outerRadius(this.radius),this.labelArc=d3.arc().innerRadius(this.radius).outerRadius(this.radius+110),this.percentageArc=d3.arc().innerRadius(this.radius/2).outerRadius(this.radius)}_addPieChart(){this.chart.selectAll().data(this.pie(Object.values(this.data))).enter().append("path").attr("class",t=>`city ${t.data.class}`).attr("d",this.arc).attr("fill",t=>t.data.color)}_addCityLabel(){this.chart.selectAll().data(this.pie(Object.values(this.data))).enter().append("text").attr("class",t=>`city ${t.data.class}`).attr("text-anchor","middle").attr("transform",t=>`translate(${this.labelArc.centroid(t)})`).text(t=>t.data.city).transition().ease(x).delay((t,a)=>a*g).duration(u).attr("transform",t=>{let a=t.endAngle<Math.PI?t.startAngle/2+t.endAngle/2:t.startAngle/2+t.endAngle/2+Math.PI;return`translate(${this.labelArc.centroid(t)[0]}, ${this.labelArc.centroid(t)[1]}) rotate(-95) rotate(${180*a/Math.PI})`})}_addCountLabel(){this.chart.selectAll().data(this.pie(Object.values(this.data))).enter().append("text").attr("class",t=>`city ${t.data.class} city-data-toggle`).attr("text-anchor","middle").attr("transform",t=>`translate(${this.percentageArc.centroid(t)})`).text(t=>t.data.jobs)}_middleLabel(){this.chart.append("text").attr("text-anchor","middle").text("Open Jobs")}};var D=class extends v{constructor(t){super(t),this.setData(),this.xAxis([75,125],"scaleLinear"),this.yAxis(this.sortedData.map(t=>t.city),"scaleBand"),this.rectanglesMedianSalary(),this.rectanglesAdjustedSalary(),this.gridLines(this.xScale,"axisBottom"),this.rectangleLabels(function(){return`$${parseInt(this.adjusted/1e3)}K`}),this.rectangleMedianLabels(),this.labelTop("Adjusted Salary | Median Salary")}setData(){this.data=p,this.data[s].salary=12e4,this.data[s].adjusted=99751,this.data[i].salary=11e4,this.data[i].adjusted=1e5,this.data[n].salary=9e4,this.data[n].adjusted=89374,this.data[r].salary=1e5,this.data[r].adjusted=90171,this.data[c].salary=113242,this.data[c].adjusted=105735,this.data[l].salary=1e5,this.data[l].adjusted=90171,this.data[d].salary=122500,this.data[d].adjusted=100989,this.data[h].salary=94142,this.data[h].adjusted=9e4,this.data[o].salary=9e4,this.data[o].adjusted=85878,this.data[y].salary=87997,this.data[y].adjusted=86765,this.sortedData=Object.values(this.data).sort((t,a)=>t.cost-a.cost)}rectanglesAdjustedSalary(){this.chart.selectAll().data(this.sortedData).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>this.yScale(t.city)).attr("height",this.yScale.bandwidth()).style("fill",t=>t.color).transition().ease(x).delay((t,a)=>a*g).duration(u).attr("width",t=>this.xScale(t.adjusted/1e3))}rectanglesMedianSalary(){this.chart.selectAll().data(this.sortedData).enter().append("rect").attr("class",t=>`city ${t.class}`).attr("x",1).attr("y",t=>this.yScale(t.city)).attr("height",this.yScale.bandwidth()).style("fill","#bbb").transition().ease(x).delay((t,a)=>a*g).duration(u).attr("width",t=>this.xScale(t.salary/1e3))}rectangleMedianLabels(){this.chart.selectAll().data(this.sortedData).enter().append("text").style("fill","#aaa").attr("class",t=>`city ${t.class}`).attr("y",(t,a)=>19.9*a+14).text(t=>`$${parseInt(t.salary/1e3)}K`).transition().ease(x).delay((t,a)=>a*g).duration(u).attr("x",t=>this.xScale(t.salary/1e3)+5)}};var L=class{constructor(){this.filterData(),this.colorTitle()}filterData(){d3.selectAll(".city").on("mouseover",(t,a)=>{let e;e=t.data?t.data.class:t.class,document.querySelectorAll(`.city:not(.${e})`).forEach(t=>{t.classList.add("filter")}),document.querySelectorAll(`.${e}.city-data-toggle`).forEach(t=>{t.classList.add("show")})}).on("mouseleave",()=>{document.querySelectorAll(".city").forEach(t=>{t.classList.remove("filter")}),document.querySelectorAll(".city-data-toggle").forEach(t=>{t.classList.remove("show")})})}colorTitle(){const t=d3.select("h1");d3.selectAll(".city").on("mouseenter",a=>{let e;e=a.data?a.data.color:a.color,t.style("color",e)}).on("mouseout",a=>{t.style("color","#ccc")})}};document.addEventListener("DOMContentLoaded",()=>{new S("svg.sunnyDays"),new D("svg.salary"),new m("svg.medianHomeCost"),new k,new j("svg.happiness"),new $,new O,new L})}]);