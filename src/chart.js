import {
  HEIGHT,
  MARGINS,
  WIDTH,
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION
} from './constants'

class Chart {
  constructor() {
    this.setChart()
    this.setData()
  }

  setChart(options) {
    const svg = d3.select('svg.sunnyDays')
      .attr('height', HEIGHT + MARGINS * 2)
      .attr('width', WIDTH + MARGINS * 2)
    this.chart = svg.append('g')
      .attr('transform', `translate(${MARGINS}, ${MARGINS / 2})`)
  }

  setData() {
    this.data = CITIES
  }

  xAxis(domain, xScale, ticks = 5) {
    this.xScale = d3[xScale]()
      .domain(domain)
      .range([0, WIDTH])
      
    this.chart
      .append('g')
      .call(d3.axisBottom(this.xScale).ticks(ticks))
      .attr('transform', `translate(0, ${HEIGHT})`)
  }

  yAxis(domain, yScale) {
    this.yScale = d3[yScale]()
      .domain(domain)
      .range([0, WIDTH])
      .padding(0.1)

    this.chart
      .append('g')
      .call(d3.axisLeft(this.yScale))
  }

  gridLines(scale, position, ticks = 5) {
    this.chart.append('g')
      .attr('class', 'grid')
      .call(d3[position]()
        .scale(scale)
        .tickSize(WIDTH, 0, 0)
        .tickFormat('')
        .ticks(ticks))
  }

  rectangleLabels() {
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

  labelTop(text) {
    this.chart
      .append('text')
      .attr('class', 'label-text')
      .attr('text-anchor', 'middle')
      .attr('x', WIDTH / 2)
      .attr('y', -20)
      .text('Sunny days per year')
  }
}

export default Chart