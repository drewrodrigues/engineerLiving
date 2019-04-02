import {
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION,
} from './constants'

import Chart from './chart'

class Salary extends Chart {
  constructor(selector) {
    super(selector)
    this.sortData()
    this.xAxis([75, 125], 'scaleLinear')
    this.yAxis(this.sortedData.map(d => d.city), 'scaleBand')
    this.rectanglesMedianSalary()
    this.rectanglesAdjustedSalary()
    this.gridLines(this.xScale, 'axisBottom')
    this.rectangleLabels(function() {
      return `$${parseInt(this.adjustedSalary/1000)}K`
    })
    this.rectangleMedianLabels()
    this.labelTop('Adjusted Salary | Median Salary')
  }

  sortData() {
    this.sortedData = Object.values(this.data).sort((a, b) => a.cost - b.cost)
  }

  rectanglesAdjustedSalary() {
    this.chart
      .selectAll()
      .data(this.sortedData)
      .enter()
      .append('rect')
      .attr('class', d => `city ${d.class}`)
      .attr('x', 1)
      .attr('y', d => this.yScale(d.city))
      .attr('height', this.yScale.bandwidth())
      .style('fill', d => d.color)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('width', d => this.xScale(d.adjustedSalary / 1000))
  }

  rectanglesMedianSalary() {
    this.chart
      .selectAll()
      .data(this.sortedData)
      .enter()
      .append('rect')
      .attr('class', d => `city ${d.class}`)
      .attr('x', 1)
      .attr('y', d => this.yScale(d.city))
      .attr('height', this.yScale.bandwidth())
      .style('fill', '#bbb')
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('width', d => this.xScale(d.medianSalary / 1000))
  }

  rectangleMedianLabels() {
    this.chart.selectAll()
      .data(this.sortedData)
      .enter()
      .append('text')
      .style('fill', '#aaa')
      .attr('class', d => `city ${d.class}`)
      .attr('y', (d, i) => i * 19.9 + 14)
      .text(d => `$${parseInt(d.medianSalary/1000)}K`)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('x', d => this.xScale(d.medianSalary/1000) + 5)
  }
}

export default Salary