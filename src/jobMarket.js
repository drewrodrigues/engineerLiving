import {
  CITIES,
  SAN_FRANCISCO,
  NEW_YORK,
  PORTLAND,
  BOSTON,
  SEATTLE,
  AUSTIN,
  SAN_JOSE,
  RALEIGN,
  DENVER,
  PHOENIX,
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION,
  WIDTH,
  HEIGHT,
  MARGINS
} from './constants'

class JobMarket {
  constructor() {
    this.data = CITIES

    // indeed search: software engineer w/ exact location only 3/24/2019
    this.data[SAN_FRANCISCO].jobs = 7947
    this.data[NEW_YORK].jobs = 8364
    this.data[BOSTON].jobs = 3630
    this.data[PORTLAND].jobs = 2359
    this.data[SEATTLE].jobs = 10417
    this.data[AUSTIN].jobs = 4308
    this.data[SAN_JOSE].jobs = 3023
    this.data[RALEIGN].jobs = 1377 // FIXME: RALEIGH
    this.data[DENVER].jobs = 1973
    this.data[PHOENIX].jobs = 1491

    // total = 41,733
    this.render()
  }

  render() {
    const svg = d3.select('svg.jobMarket')
      .attr("height", HEIGHT + MARGINS * 2).attr("width", WIDTH + MARGINS * 2)
    const chart = svg.append('g')
      .attr("transform", `translate(${MARGINS + 70}, ${MARGINS + 100})`)
    const radius = Math.min(WIDTH, HEIGHT) / 2

    var pie = d3.pie()
      .value(d => d.jobs)
    
    let arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    
    let labelArc = d3.arc()
      .innerRadius(radius)
      .outerRadius(radius + 110)

    let percentageArc = d3.arc()
      .innerRadius(radius)
      .outerRadius(radius)

    // pie chart
    chart
      .selectAll()
      .data(pie(Object.values(this.data)))
      .enter()
      .append('path')
      .attr('class', d => `city ${d.data.class}`)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('d', arc)
      .attr('fill', d => d.data.color)
  
    // city label
    chart
      .selectAll()
      .data(pie(Object.values(this.data)))
      .enter()
      .append("text")
      .attr('class', d => `city ${d.data.class}`)
      .attr('text-anchor', 'middle')
      .attr("transform",  d => `translate(${labelArc.centroid(d)})`)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .text(d => d.data.city)
        .attr("transform", function(d) { 
          var midAngle = d.endAngle < Math.PI ? d.startAngle/2 + d.endAngle/2 : d.startAngle/2  + d.endAngle/2 + Math.PI
          return `translate(${labelArc.centroid(d)[0]}, ${labelArc.centroid(d)[1]}) rotate(-95) rotate(${midAngle * 180/Math.PI})`;
        })
    
    // percentage label
    chart
      .selectAll()
      .data(pie(Object.values(this.data)))
      .enter()
      .append("text")
      .attr('class', d => `city ${d.data.class}`)
      .attr('text-anchor', 'middle')
      .attr("transform",  d => `translate(${percentageArc.centroid(d)})`)
      .style('fill', '#fff')
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .text(d => d.data.jobs)
        .attr("transform", function(d) { 
          var midAngle = d.endAngle < Math.PI ? d.startAngle/2 + d.endAngle/2 : d.startAngle/2  + d.endAngle/2 + Math.PI
          return `translate(${labelArc.centroid(d)[0]*.5}, ${labelArc.centroid(d)[1]*.5}) rotate(-95) rotate(${midAngle * 180/Math.PI})`;
        })
  }
}

export default JobMarket