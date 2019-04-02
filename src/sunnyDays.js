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
  ANIMATION_DURATION
} from './constants'

import Chart from './chart'

class SunnyDays extends Chart {
  constructor(selector) {
    super(selector)

    this.setData()
    this.xAxis([120, 300], 'scaleLinear')
    this.yAxis(this.sortedData.map(d => d.city), 'scaleBand')
    this.rectangles()
    this.gridLines(this.xScale, 'axisBottom')
    this.rectangleLabels('days')
    this.labelTop('Sunny Days Per Year')
  }

  setData() {
    this.data = CITIES

    this.data[SAN_FRANCISCO].days = 256
    this.data[NEW_YORK].days = 224
    this.data[PORTLAND].days = 144
    this.data[BOSTON].days = 200
    this.data[SEATTLE].days = 152
    this.data[AUSTIN].days = 228
    this.data[SAN_JOSE].days = 204
    this.data[RALEIGN].days = 213
    this.data[DENVER].days = 245
    this.data[PHOENIX].days = 299

    this.sortedData = Object.values(this.data).sort((a, b) => b.days - a.days)
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
        .attr('width', d => this.xScale(d.days))
  }
}

export default SunnyDays