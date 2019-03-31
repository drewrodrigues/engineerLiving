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

    this.render()
  }

  render() {
    const svg = d3.select('svg.sunnyDays')
      .attr("height", HEIGHT + MARGINS * 2 - 90).attr("width", WIDTH + MARGINS * 2)
    const chart = svg.append('g')
      .attr("transform", `translate(${MARGINS}, ${MARGINS / 2})`)
    const sortedData = Object.values(this.data).sort((a, b) => b.days - a.days)

    // x axis - sunny days
    const xScale = d3.scaleLinear()
      .domain([120, 300])
      .range([0, WIDTH])
      
    chart.append('g')
      .call(d3.axisBottom(xScale).ticks(5))
      .attr("transform", `translate(0, ${HEIGHT})`)

    // y axis - city
    const yScale = d3.scaleBand()
      .domain(sortedData.map(d => d.city))
      .range([0, WIDTH])
      .padding(0.1)

    // city labels
    chart.append('g')
      .call(d3.axisLeft(yScale))

    // fill rects
    chart.selectAll('.sunny-day-bar')
      .data(sortedData)
      .enter()
      .append('rect')
      .attr('class', d => `city ${d.class}`)
      .attr('x', 1)
      .attr('y', d => yScale(d.city))
      .attr('height', yScale.bandwidth())
      .style('fill', d => d.color)
      // animation
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('width', d => xScale(d.days))
    
    // sunny days text
    chart.selectAll(".sunny-day-bar")
      .data(sortedData)
      .enter()
      .append("text")
      .text(d => d.days)
      .style('fill', '#fff')
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('x', 5)
      .attr("y", (d, i) => i * 19.9 + 14)
      .attr('class', d => `city ${d.class}`)

    // grid lines
    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisTop()
            .scale(xScale)
            .tickSize(-WIDTH, 0, 0)
            .tickFormat('')
            .ticks(5))
      
    // label top
    chart.append("text")
      .attr('class', 'label-text')
      .attr("x", WIDTH / 2)
      .attr("y", -20)
      .attr('text-anchor', 'middle')
      .text("Sunny days per year")
  }
}

export default SunnyDays