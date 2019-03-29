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

class MedianHomeCost {
  constructor() {
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

    this.render()
  }

  render() {
    const svg = d3.select('svg.medianHomeCost')
      .attr("height", HEIGHT + MARGINS * 2 - 90).attr("width", WIDTH + MARGINS * 2)
    const chart = svg.append('g')
      .attr("transform", `translate(${MARGINS}, ${MARGINS/2})`)
    const format = d3.format("$,")

    // x axis
    const xScale = d3.scaleLinear()
      .domain([0, 1350])
      .range([0, WIDTH])

    chart.append('g')
      .call(d3.axisBottom(xScale).ticks(5))
      .attr("transform", `translate(0, ${HEIGHT})`)

    // y axis
    const yScale = d3.scaleBand()
      .domain(Object.values(this.data).map(d => d.city))
      .range([0, HEIGHT])
      .padding(0.1)
    
    chart.append('g')
      .call(d3.axisLeft(yScale))

    // top label
    chart.append('text')
      .attr('class', 'label-text')
      .attr('x', WIDTH / 2)
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .text("Median Home Price")

    // fill rects
    chart.selectAll('.home-price-bar')
      .data(Object.values(this.data))
      .enter()
      .append('rect')
      .attr('class', d => `city ${d.class}`)
      .attr('x', 1)
      .attr('y', d => yScale(d.city))
      .attr('height', yScale.bandwidth())
      .style('fill', d => d.color)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('width', d => xScale(d.cost) / 1000)

    // sunny days text
    chart.selectAll(".sunny-price-bar")
      .data(Object.values(this.data))
      .enter()
      .append("text")
      .text(d => format(parseInt(d.cost / 1000)) + "K")
      .style('fill', '#fff')
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('x', 5)
      .attr("y", (d, i) => i * 19.9 + 14)
      .attr('class', d => `city ${d.class}`)

    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisBottom()
      .scale(xScale)
      .tickSize(WIDTH, 0, 0)
      .tickFormat('')
      .ticks(5))
  }
}

export default MedianHomeCost