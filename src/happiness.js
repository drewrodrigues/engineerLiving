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

    this.sortData()
    this.rectangles()
    this.rectangleLabels(function(i) {
      return `#${i+1} - ${this.city} (overall ${this.happinessRank})`
    })
    this.labelTop('Happiness Ranking')
  }

  sortData() {
    this.sortedData = Object.values(this.data).sort((a, b) => a.happinessRank - b.happinessRank)
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