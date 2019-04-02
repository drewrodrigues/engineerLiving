import {
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION
} from './constants'

import Chart from './chart'

class MedianHomeCost extends Chart {
  constructor(selector) {
    super(selector)
    this.sortData()
    this.xAxis([0, 1350], 'scaleLinear')
    this.yAxis(this.sortedData.map(d => d.city), 'scaleBand')
    this.rectangles()
    this.gridLines(this.xScale, 'axisBottom')
    this.rectangleLabels(function() {
      return `$${parseInt(this.medianHomePrice/1000)}K`
    })
    this.labelTop('Median Home Price')
  }

  sortData() {
    this.sortedData = Object.values(this.data).sort((a, b) => a.medianHomePrice - b.medianHomePrice)
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
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('width', d => this.xScale(d.medianHomePrice) / 1000)
  }
}

export default MedianHomeCost