!function(t){var e={};function a(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);const i="SAN_FRANCISCO",r="NEW_YORK",c="BOSTON",n="MIAMI",o="SEATTLE",s="HOUSTON",l="SAN_JOSE",d="RALEIGN",y="DENVER",p="PHOENIX",h={SAN_FRANCISCO:{city:"San Francisco",color:"#f1c40f",class:"city-San-Francisco"},NEW_YORK:{city:"New York",color:"#2980b9",class:"city-New-York"},BOSTON:{city:"Boston",color:"#e74c3c",class:"city-Boston"},MIAMI:{city:"Miami",color:"#e67e22",class:"city-Miami"},SEATTLE:{city:"Seattle",color:"#1abc9c",class:"city-Seattle"},HOUSTON:{city:"Houston",color:"#34495e",class:"city-Houston"},SAN_JOSE:{city:"San Jose",color:"#9b59b6",class:"city-San-Jose"},RALEIGN:{city:"Raleign",color:"#f39c12",class:"city-Raleign"},DENVER:{city:"Denver",color:"#2980b9",class:"city-Denver"},PHOENIX:{city:"Phoenix",color:"#c0392b",class:"city-Phoenix"}},x=1e3,g=500,m=d3.easePoly,u=200,f=200,v=100;var b=class{constructor(){this.data=h,this.data[i].days=256,this.data[r].days=224,this.data[n].days=248,this.data[c].days=200,this.data[o].days=152,this.data[s].days=204,this.data[l].days=204,this.data[d].days=213,this.data[y].days=245,this.data[p].days=299,this.render()}render(){const t=d3.select("svg.sunnyDays").attr("height",f+2*v).attr("width",u+2*v).append("g").attr("transform",`translate(${v}, ${v})`),e=d3.scaleLinear().domain([150,300]).range([0,u]);t.append("g").call(d3.axisBottom(e)).attr("transform",`translate(0, ${f})`);const a=d3.scaleBand().domain(Object.values(this.data).map(t=>t.city)).range([0,u]).padding(.1);t.append("g").call(d3.axisLeft(a)),t.selectAll().data(Object.values(this.data)).enter().append("rect").attr("x",1).attr("y",t=>a(t.city)).attr("height",a.bandwidth()).style("fill",t=>t.color).transition().ease(m).delay((t,e)=>e*g).duration(x).attr("width",t=>e(t.days)),t.append("g").attr("class","grid").call(d3.axisTop().scale(e).tickSize(-u,0,0).tickFormat("")),t.append("text").attr("class","label-text").attr("x",u/2).attr("y",f+50).attr("text-anchor","middle").text("Days"),t.append("text").attr("class","label-text").attr("x",u/2).attr("y",-20).attr("text-anchor","middle").text("Sunny days per year")}};var A=class{constructor(){this.data=[{city:"San Francisco",cost:1331100,color:"#f1c40f"},{city:"New York",cost:662100,color:"#2980b9"},{city:"Boston",cost:587e3,color:"#e74c3c"},{city:"Miami",cost:326e3,color:"#e67e22"},{city:"Seattle",cost:761800,color:"#1abc9c"},{city:"Houston",cost:175700,color:"#34495e"},{city:"San Jose",cost:1083e3,color:"#9b59b6"},{city:"Raleigh",cost:260100,color:"#f39c12"},{city:"Denver",cost:421900,color:"#2980b9"},{city:"Phoenix",cost:229300,color:"#c0392b"}],this.render()}render(){const t=d3.select("svg.medianHomeCost").attr("height",f+2*v).attr("width",u+2*v).append("g").attr("transform","translate(100, 100)"),e=d3.scaleLinear().domain([0,14]).range([0,u]);t.append("g").call(d3.axisBottom(e)).attr("transform",`translate(0, ${f})`);const a=d3.scaleBand().domain(this.data.map(t=>t.city)).range([0,f]).padding(.1);t.append("g").call(d3.axisLeft(a)),t.append("text").attr("class","label-text").attr("x",u/2).attr("y",f+50).attr("text-anchor","middle").text("in $100,000"),t.append("text").attr("class","label-text").attr("x",u/2).attr("y",-20).attr("text-anchor","middle").text("Median Home Price"),t.selectAll().data(this.data).enter().append("rect").attr("x",1).attr("y",t=>a(t.city)).attr("height",a.bandwidth()).style("fill",t=>t.color).transition().ease(m).delay((t,e)=>e*g).duration(x).attr("width",t=>e(t.cost)/1e5),t.append("g").attr("class","grid").call(d3.axisTop().scale(e).tickSize(-u,0,0).tickFormat(""))}};var S=class{constructor(){this.ethnicities=["White","Asian","Hispanic","Black"],this.data=[{city:"San Francisco",color:"#f1c40f",values:[{ethnicity:"White",percentage:41.4},{ethnicity:"Asian",percentage:33.3},{ethnicity:"Hispanic",percentage:15.3},{ethnicity:"Black",percentage:5.5}]},{city:"New York",color:"#2980b9",values:[{ethnicity:"White",percentage:32.7},{ethnicity:"Asian",percentage:13.2},{ethnicity:"Hispanic",percentage:28.8},{ethnicity:"Black",percentage:22.6}]},{city:"Boston",color:"#e74c3c",values:[{ethnicity:"White",percentage:46},{ethnicity:"Asian",percentage:9.1},{ethnicity:"Hispanic",percentage:18.4},{ethnicity:"Black",percentage:22.7}]},{city:"Miami",color:"#e67e22",values:[{ethnicity:"White",percentage:11.1},{ethnicity:"Asian",percentage:.8},{ethnicity:"Hispanic",percentage:70.7},{ethnicity:"Black",percentage:16.7}]},{city:"Seattle",color:"#1abc9c",values:[{ethnicity:"White",percentage:66.2},{ethnicity:"Asian",percentage:14.2},{ethnicity:"Hispanic",percentage:6.4},{ethnicity:"Black",percentage:7.2}]},{city:"Houston",color:"#34495e",values:[{ethnicity:"White",percentage:22.5},{ethnicity:"Asian",percentage:6.3},{ethnicity:"Hispanic",percentage:43.9},{ethnicity:"Black",percentage:22.8}]},{city:"San Jose",color:"#9b59b6",values:[{ethnicity:"White",percentage:27.5},{ethnicity:"Asian",percentage:32.9},{ethnicity:"Hispanic",percentage:33.1},{ethnicity:"Black",percentage:2.9}]},{city:"Raleigh",color:"#f39c12",values:[{ethnicity:"White",percentage:54},{ethnicity:"Asian",percentage:4.3},{ethnicity:"Hispanic",percentage:10.9},{ethnicity:"Black",percentage:28.5}]},{city:"Denver",color:"#2980b9",values:[{ethnicity:"White",percentage:52.9},{ethnicity:"Asian",percentage:3.4},{ethnicity:"Hispanic",percentage:31.2},{ethnicity:"Black",percentage:9.5}]},{city:"Phoenix",color:"#c0392b",values:[{ethnicity:"White",percentage:46},{ethnicity:"Asian",percentage:3.3},{ethnicity:"Hispanic",percentage:40.5},{ethnicity:"Black",percentage:6.5}]}],this.render()}render(){const t=d3.select("svg.diversity").attr("height",f+2*v).attr("width",u+2*v),e=t.append("g").attr("transform","translate(100, 100)"),a=d3.scaleBand().domain(this.ethnicities).range([0,u]).padding(.1);e.append("g").call(d3.axisBottom(a)).attr("transform",`translate(0, ${f})`);const i=d3.scaleLinear().domain([70,0]).range([0,f]);e.append("g").call(d3.axisLeft(i));let r=d3.line().x(t=>a(t.ethnicity)).y(t=>i(t.percentage)),c=t.append("g").attr("class","lines");c.selectAll(".line-group").data(this.data).enter().append("g").append("path").attr("transform","translate(122, 100)").attr("class",t=>`line ${t.city} diversity-${t.city}`).attr("d",t=>r(t.values)).style("stroke",t=>t.color).on("mouseover",function(e){t.append("text").attr("class","title-text").text(e.city).attr("text-anchor","middle").attr("x",250).attr("y",75)}).on("mouseenter",function(){d3.selectAll(".line").style("opacity",.25),d3.selectAll(".circle circle").style("opacity",.25),d3.select(this).style("opacity",1).style("cursor","pointer").style("stroke-width",3)}).on("mouseout",function(){t.select(".title-text").remove(),d3.selectAll(".circle circle").style("opacity",.5),d3.selectAll(".line").style("opacity",.5).style("stroke-width",1)}),c.selectAll("circle-group").data(this.data).enter().append("g").style("fill",t=>t.color).selectAll("circle").data(t=>t.values).enter().append("g").attr("class","circle").append("circle").attr("transform","translate(122, 100)").attr("r",5).attr("cx",t=>a(t.ethnicity)).attr("cy",t=>i(t.percentage)).style("opacity",0).on("mouseover",function(e){t.append("text").text(e.percentage).attr("class","percentage-text").attr("text-anchor","middle").attr("x",250).attr("y",75),d3.select(this).style("opacity",1)}).on("mouseout",function(e){t.select(".percentage-text").remove(),d3.select(this).style("opacity",.5)}).transition().duration(x).ease(m).delay((t,e)=>g*e).style("opacity",.75),e.append("text").attr("class","label-text").attr("x",u/2).attr("y",f+50).attr("text-anchor","middle").text("Ethnicity"),e.append("text").attr("class","label-text").attr("x",-u/2).attr("y",-50).attr("transform","rotate(-90)").attr("text-anchor","middle").text("% of population"),e.append("text").attr("class","label-text").attr("x",u/2).attr("y",-20).attr("text-anchor","middle").text("Diversity")}};var C=class{constructor(){this.averageViolentCrime=22.7,this.averagePropertyCrime=35.4,this.data=[{city:"San Francisco",color:"#f1c40f",violentCrime:39.6,propertyCrime:79.2},{city:"New York",color:"#2980b9",violentCrime:28.2,propertyCrime:24.9},{city:"Boston",color:"#e74c3c",violentCrime:37.3,propertyCrime:35.8},{city:"Miami",color:"#e67e22",violentCrime:48.8,propertyCrime:62.7},{city:"Seattle",color:"#1abc9c",violentCrime:32.3,propertyCrime:76.9},{city:"Houston",color:"#34495e",violentCrime:50.4,propertyCrime:63.2},{city:"San Jose",color:"#9b59b6",violentCrime:25,propertyCrime:36.5},{city:"Raleigh",color:"#f39c12",violentCrime:20.3,propertyCrime:44.4},{city:"Denver",color:"#2980b9",violentCrime:30.7,propertyCrime:50.8},{city:"Phoenix",color:"#c0392b",violentCrime:37.5,propertyCrime:52.8}],this.render()}render(){const t=d3.select("svg.crimeRates").attr("height",f+2*v).attr("width",u+2*v+100).append("g").attr("transform",`translate(${v}, ${v})`),e=d3.scaleLinear().domain([20,80]).range([0,u]);t.append("g").call(d3.axisBottom(e)).attr("transform",`translate(0, ${f})`);const a=d3.scaleBand().domain(this.data.map(t=>t.city)).range([0,f]).padding(.1);t.append("g").call(d3.axisLeft(a)),t.selectAll().data(this.data).enter().append("rect").attr("x",1).attr("y",t=>a(t.city)).attr("height",a.bandwidth()/2).style("fill",t=>t.color).transition().delay((t,e)=>500*e).duration(1e3).attr("width",t=>e(t.violentCrime)),t.selectAll().data(this.data).enter().append("rect").attr("x",1).attr("y",t=>a(t.city)+a.bandwidth()/2).attr("height",a.bandwidth()/2).style("fill",t=>t.color).style("opacity",.6).transition().delay((t,e)=>e*g).duration(x).ease(m).attr("width",t=>e(t.propertyCrime)),t.append("text").attr("class","label-text").attr("x",u/2).attr("y",-20).attr("text-anchor","middle").text("Crime Rates"),t.append("text").attr("class","label-text").attr("x",-f/2).attr("y",-80).attr("text-anchor","middle").text("Violent / Property Crime").attr("transform","rotate(-90)"),t.append("text").attr("class","label-text").attr("x",u/2).attr("y",f+50).text("Low to high crime").attr("text-anchor","middle"),t.append("g").attr("class","grid").call(d3.axisTop().scale(e).tickSize(-u,0,0).tickFormat("")),t.append("line").attr("x1",8).attr("y1",0).attr("x2",8).attr("y2",u).attr("stroke","red").style("opacity",.75),t.append("text").attr("class","label-text").text("Average Violent Crime").attr("y",0).attr("x",0).style("font-size","10px").attr("transform","translate(8, 0), rotate(90)"),t.append("line").attr("x1",52).attr("y1",0).attr("x2",52).attr("y2",u).attr("stroke","red").style("opacity",.75),t.append("text").attr("class","label-text").text("Average Property Crime").attr("y",0).attr("x",0).style("font-size","10px").attr("transform","translate(52, 0), rotate(90)")}};var O=class{constructor(){this.data=h,this.data[i].position={x:25,y:160},this.data[r].position={x:630,y:135},this.data[n].position={x:600,y:350},this.data[c].position={x:660,y:100},this.data[o].position={x:55,y:25},this.data[s].position={x:340,y:350},this.data[l].position={x:50,y:180},this.data[d].position={x:610,y:210},this.data[y].position={x:250,y:170},this.data[p].position={x:150,y:255},this.render()}render(){const t=d3.select("svg.map");t.selectAll("circle").data(Object.values(this.data)).enter().append("circle").transition().ease(m).delay((t,e)=>e*g).duration(x).attr("cy",t=>t.position.y).attr("cx",t=>t.position.x).style("fill",t=>t.color).attr("r",10),t.selectAll("text").data(Object.values(this.data)).enter().append("text").text(t=>t.city).style("font-size",14).on("mouseover",(t,e)=>{console.log(t.class)}).transition().ease(m).delay((t,e)=>e*g).duration(x).attr("fill",t=>t.color).attr("x",t=>t.position.x+15).attr("y",t=>t.position.y+5)}};document.addEventListener("DOMContentLoaded",()=>{new b,new A,new S,new C,new O})}]);