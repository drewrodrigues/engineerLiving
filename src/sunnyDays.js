import {
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION
} from './constants'

import Chart from './chart'

class SunnyDays extends Chart {
  constructor(selector) {
    super(selector)

    this.sortData()
    this.xAxis([120, 300], 'scaleLinear')
    this.yAxis(this.sortedData.map(d => d.city), 'scaleBand')
    this.rectangles()
    this.gridLines(this.xScale, 'axisBottom')
    this.rectangleLabels('sunnyDays')
    this.labelTop('Sunny Days Per Year')
  }

  sortData() {
    this.sortedData = Object.values(this.data).sort((a, b) => b.sunnyDays - a.sunnyDays)
  }

  rectangles() {
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
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .ease(ANIMATION_EASING)
        .attr('width', d => this.xScale(d.sunnyDays))
  }
}

export default SunnyDays
