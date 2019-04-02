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

class MedianHomeCost extends Chart {
  constructor(selector) {
    super(selector)

    this.setData()
    this.xAxis([0, 1350], 'scaleLinear')
    this.yAxis(this.sortedData.map(d => d.city), 'scaleBand')
    this.rectangles()
    this.gridLines(this.xScale, 'axisBottom')
    this.rectangleLabels(function() {
      return `$${parseInt(this.cost/1000)}K`
    })
    this.labelTop('Median Home Price')
  }

  setData() {
    this.data = CITIES

    // https://www.bestplaces.net/
    this.data[SAN_FRANCISCO].cost = 1331100
    this.data[NEW_YORK].cost = 662100
    this.data[BOSTON].cost = 587000
    this.data[PORTLAND].cost = 427500
    this.data[SEATTLE].cost = 761800
    this.data[AUSTIN].cost = 346500
    this.data[SAN_JOSE].cost = 1083000
    this.data[RALEIGN].cost = 260100
    this.data[DENVER].cost = 421900
    this.data[PHOENIX].cost = 229300

    this.sortedData = Object.values(this.data).sort((a, b) => a.cost - b.cost)
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
        .attr('width', d => this.xScale(d.cost) / 1000)
  }
}

export default MedianHomeCost