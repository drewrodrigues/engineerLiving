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
    this.xAxis(
      [75000, 125000], 
      'scaleLinear',
      5,
      () => d3.format("$" + "~s")
    )
    this.yAxis(this.sortedData.map(d => d.city), 'scaleBand')
    this.rectanglesMedianSalary()
    this.rectanglesAdjustedSalary()
    this.gridLines(this.xScale, 'axisBottom')
    this.rectangleLabels(function() {
      const format = d3.format("$" + ".3~s")
      return format(this.adjustedSalary)
    })
    this.rectangleMedianLabels()
    this.labelTop('Adjusted & Median Salary')
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
      .attr('class', d => `city ${d.class} bar-label`)
      .attr('x', 1)
      .attr('y', d => this.yScale(d.city))
      .attr('height', this.yScale.bandwidth())
      .style('fill', d => d.color)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('width', d => this.xScale(d.adjustedSalary))
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
      .style('fill', '#111')
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('width', d => this.xScale(d.medianSalary))
  }

  rectangleMedianLabels() {
    this.chart.selectAll()
      .data(this.sortedData)
      .enter()
      .append('text')
      .style('fill', '#000')
      .attr('class', d => `city ${d.class} median-salary city-data-toggle`)
      .attr('y', (d, i) => this.yScale(d.city) + 5)
      .text(d => d3.format("$" + ".3~s")(d.medianSalary))
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('x', d => this.xScale(d.medianSalary) + 5)
  }
}

export default Salary
