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

class SunnyDays {
  constructor() {
    this.setData()
    this.setChart()
    this.render()
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

  setChart() {
    const svg = d3.select('svg.sunnyDays')
      .attr('height', HEIGHT + MARGINS * 2 - 90).attr('width', WIDTH + MARGINS * 2)
    this.chart = svg.append('g')
      .attr('transform', `translate(${MARGINS}, ${MARGINS / 2})`)
  }

  render() {
    this._xAxis()
    this._yAxis()
    this._rectangles()
    this._gridLines()
    this._rectangleLabels()
    this._labelTop()
  }

  _xAxis() {
    this.xScale = d3.scaleLinear()
      .domain([120, 300])
      .range([0, WIDTH])
      
    this.chart
      .append('g')
      .call(d3.axisBottom(this.xScale).ticks(5))
      .attr('transform', `translate(0, ${HEIGHT})`)
  }

  _yAxis() {
    this.yScale = d3.scaleBand()
      .domain(this.sortedData.map(d => d.city))
      .range([0, WIDTH])
      .padding(0.1)

    this.chart
      .append('g')
      .call(d3.axisLeft(this.yScale))
  }

  _rectangles() {
    this.chart
      .selectAll('.sunny-day-bar')
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

  _gridLines() {
    this.chart
      .append('g')
      .attr('class', 'grid')
      .call(d3.axisTop()
          .scale(this.xScale)
          .tickFormat('')
          .tickSize(-WIDTH, 0, 0)
          .ticks(5))
  }

  _rectangleLabels() {
    this.chart
      .selectAll()
      .data(this.sortedData)
      .enter()
      .append('text')
      .attr('class', d => `city ${d.class}`)
      .attr('y', (d, i) => i * 19.9 + 14)
      .style('fill', '#fff')
      .text(d => d.days)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('x', 5)
  }

  _labelTop() {
    this.chart
      .append('text')
      .attr('class', 'label-text')
      .attr('text-anchor', 'middle')
      .attr('x', WIDTH / 2)
      .attr('y', -20)
      .text('Sunny days per year')
  }
}

export default SunnyDays