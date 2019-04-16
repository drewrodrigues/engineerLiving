import {
  WIDTH,
  HEIGHT,
} from './constants'

import Chart from './chart'

class Diversity extends Chart {
  constructor(selector) {
    super(selector)
    this.ethnicities = ["White", "Asian", "Hispanic", "Black"]
    this.xAxis(this.ethnicities, 'scaleBand')
    this.yAxis([70, 0], 'scaleLinear')
    this.lines()
    this.percentageLabels()
    this.labelLeft()
    this.labelTop('Diversity')
    this.gridLines(this.xScale, 'axisBottom')
    this.gridLines(this.yScale, 'axisRight')
  }

  lines() {
    let line = d3.line()
      .x(d => this.xScale(d.ethnicity))
      .y(d => this.yScale(d.percentage))
    
    this.chart
      .selectAll('.line')
      .data(Object.values(this.data))
      .enter()
      .append('path')
      .attr('transform', 'translate(25, 5)')
      .attr('class', d => `line city ${d.class}`)
      .attr('d', d => line(d.diversity))
      .style('stroke', d => d.color)
      .style('stroke-width', 2)
      .style('stroke-linecap', 'round')
  }

  percentageLabels() {
    this.chart
      .selectAll()
      .data(() => Object.values(this.data))
      .enter()
      .append('g')
      .attr('class', d => `city ${d.class} city-data-toggle`)
      .selectAll('.line-point')
      .data(d => d.diversity)
      .enter()
      .append('text')
      .text(d => `${parseInt(d.percentage)}%`)
      .attr('x', (d, i) => (WIDTH / 4) * i + 20)
      .attr('y', d => HEIGHT - HEIGHT * (d.percentage / 70))
  }

  labelLeft() {
    this.chart
      .append('text')
      .attr('class', 'label-text')
      .attr('x', -WIDTH/2)
      .attr('y', -50)
      .attr("transform", "rotate(-90)")
      .attr('text-anchor', 'middle')
      .text('% of population')
  }
}

export default Diversity
