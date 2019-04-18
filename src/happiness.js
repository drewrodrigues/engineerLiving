import {
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION,
  WIDTH,
  HEIGHT
} from './constants'

import Chart from './chart'

class Happiness extends Chart {
  constructor(selector) {
    super(selector)
    this.types = ["Studio", "1BR", "2BR", "3BR", "4BR"]
    this.xAxis(this.types, 'scalePoint')
    this.yAxis(
      [4500, 500], 
      'scaleLinear', 
      4, 
      () => d3.format("$" + "~s")
    )
    this.lines()
    this.circles()
    this.percentageLabels()
    this.labelTop('Rental Cost')
    this.gridLines(this.xScale, 'axisBottom')
    this.gridLines(this.yScale, 'axisRight')
  }

  lines() {
    let line = d3.line()
      .x(d => this.xScale(d.type))
      .y(d => this.yScale(d.price))
    
    this.chart
      .selectAll()
      .data(Object.values(this.data))
      .enter()
      .append('path')
      .style('stroke', d => d.color)
      .style('stroke-width', 2)
      .style('stroke-linecap', 'round')
      .attr('class', d => `line city ${d.class}`)
      .attr('d', d => line(d.rentalCosts))
      .transition()
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .ease(ANIMATION_EASING)
  }

  circles() {
    this.chart
      .selectAll()
      .data(Object.values(this.data))
      .enter()
      .append('g')
      .attr('class', d => `city ${d.class}`)
      .attr('fill', d => d.color)
      .selectAll()
      .data(d => d.rentalCosts)
      .enter()
      .append('circle')
      .attr('cx', d => this.xScale(d.type))
      .transition()
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .ease(ANIMATION_EASING)
        .attr('r', 3)
        .attr('cy', d => this.yScale(d.price))
  }

  percentageLabels() {
    const format = d3.format("$" + ".2~s")
    this.chart
      .selectAll()
      .data(() => Object.values(this.data))
      .enter()
      .append('g')
      .attr('class', d => `city ${d.class} city-data-toggle`)
      .selectAll('.line-point')
      .data(d => d.rentalCosts)
      .enter()
      .append('text')
      .attr('text-anchor', 'middle')
      .text(d => format(d.price))
      .attr('x', d => this.xScale(d.type))
      .attr('y', d => this.yScale(d.price) - 10)
      .style('fill', 'white')
  }
}

export default Happiness 
