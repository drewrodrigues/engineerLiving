import {
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION,
  WIDTH,
  HEIGHT
} from './constants'

import Chart from './chart'

class JobMarket extends Chart {
  constructor(selector) {
    super(selector, { topOffset: 150, leftOffset: 80 })
    this.render()
  }

  render() {
    this.setChartVariables()
    this.addPieChart()
    this.addCityLabel()
    this.addCountLabel()
    this.topLabel()
  }

  setChartVariables() {
    this.radius = Math.min(WIDTH, HEIGHT) / 2

    this.pie = d3.pie()
      .value(d => d.jobs)

    this.arc = d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)

    this.labelArc = d3.arc()
      .innerRadius(this.radius)
      .outerRadius(this.radius + 70)

    this.percentageArc = d3.arc()
      .innerRadius(this.radius / 2)
      .outerRadius(this.radius)
  }

  addPieChart() {
    this.chart
      .selectAll()
      .data(this.pie(Object.values(this.data)))
      .enter()
      .append('path')
      .attr('class', d => `city ${d.data.class}`)
      .attr('d', this.arc)
      .attr('fill', d => d.data.color)
  }

  addCityLabel() {
    this.chart
      .selectAll()
      .data(this.pie(Object.values(this.data)))
      .enter()
      .append('text')
      .attr('class', d => `city ${d.data.class}`)
      .attr('text-anchor', 'middle')
      .attr('transform',  d => `translate(${this.labelArc.centroid(d)})`)
      .text(d => d.data.city)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('transform', d => { 
          let midAngle = d.endAngle < Math.PI ? d.startAngle/2 + d.endAngle/2 : d.startAngle/2  + d.endAngle/2 + Math.PI
          return `translate(${this.labelArc.centroid(d)[0]}, ${this.labelArc.centroid(d)[1]}) rotate(-95) rotate(${midAngle * 180/Math.PI})`;
        })
  }

  addCountLabel() {
    this.chart
      .selectAll()
      .data(this.pie(Object.values(this.data)))
      .enter()
      .append('text')
      .attr('class', d => `city ${d.data.class} city-data-toggle`)
      .attr('text-anchor', 'middle')
      .attr('transform',  d => `translate(${this.percentageArc.centroid(d)})`)
      .text(d => d.data.jobs)
  }

  topLabel() {
    this.chart
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('class', 'label-text')
      .text('Open Jobs')
      .attr('y', -175)
  }
}

export default JobMarket