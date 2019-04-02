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
  HEIGHT
} from './constants'

import Chart from './chart'

class Happiness extends Chart {
  constructor(selector) {
    super(selector)

    this.setData()
    this.rectangles()
    this.rectangleLabels(function(i) {
      return `#${i+1} - ${this.city} (overall ${this.rank})`
    })
    this.labelTop('Happiness Ranking')
  }

  setData() {
    this.data = CITIES

    // https://wallethub.com/edu/happiest-places-to-live/32619/
    this.data[SAN_FRANCISCO].rank = 10
    this.data[NEW_YORK].rank = 90
    this.data[BOSTON].rank = 58
    this.data[PORTLAND].rank = 84
    this.data[SEATTLE].rank = 54
    this.data[AUSTIN].rank = 14
    this.data[SAN_JOSE].rank = 8
    this.data[RALEIGN].rank = 23
    this.data[DENVER].rank = 41
    this.data[PHOENIX].rank = 127

    this.sortedData = Object.values(this.data).sort((a, b) => a.rank - b.rank)
  }

  rectangles() {
    this.chart
      .selectAll()
      .data(this.sortedData)
      .enter()
      .append('rect')
      .attr('class', d => `city ${d.class}`)
      .style('fill', d => d.color)
      .attr('height', HEIGHT / this.sortedData.length)
      .attr('y', (d, i) => 20 * i)
      .transition()
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .ease(ANIMATION_EASING)
        .attr('width', WIDTH)
  }
}

export default Happiness