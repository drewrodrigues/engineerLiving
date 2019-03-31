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
  HEIGHT,
  MARGINS
} from './constants'

class Happiness {
  constructor() {
    this.setData()
    this.setChart()
    this.render()
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

  setChart() {
    const svg = d3.select('svg.happiness')
      .attr('height', HEIGHT + MARGINS * 2 - 90)
      .attr('width', WIDTH + MARGINS * 2 + 100)
    this.chart = svg.append('g')
      .attr('transform', `translate(${MARGINS}, ${MARGINS})`)
  }

  render() {
    this._createRectangles()
    this._addText()
    this._addTopLabel()
  }

  _createRectangles() {
    this.chart.selectAll('.list-item-rects')
      .data(this.sortedData)
      .enter()
      .append('rect')
      .attr('y', (d, i) => 20 * i)
      .attr('width', WIDTH)
      .attr('height', HEIGHT / this.sortedData.length)
      .style('fill', d => d.color)
      .attr('class', d => `city ${d.class}`)
      .transition()
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .ease(ANIMATION_EASING)
  }

  _addText() {
    this.chart.selectAll('.list-items')
      .data(this.sortedData)
      .enter()
      .append('text')
      .text((d, i) => `${i+1} - ${d.city} (Overall ${d.rank})`)
      .attr('x', 10)
      .attr('y', (d, i) => 20 * i + 14)
      .style('fill', "#fff")
      .attr('class', d => `city ${d.class}`)
  }

  _addTopLabel() {
    this.chart.append("text")
      .attr('class', 'label-text')
      .attr("x", WIDTH / 2)
      .attr("y", -20)
      .attr("text-anchor", "middle")
      .text("Happiness Ranking")
  }
}

export default Happiness