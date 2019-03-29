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

    this.render()
  }

  render() {
    const svg = d3.select('svg.crimeRates')
      .attr('height', HEIGHT + MARGINS * 2 - 90).attr('width', WIDTH + MARGINS * 2 + 100)
    const chart = svg.append('g')
      .attr('transform', `translate(${MARGINS}, ${MARGINS/2})`)
    
    // x axis - rank
    const xScale = d3.scaleLinear()
      .domain([145, 0])
      .range([0, WIDTH])
    
    chart.append('g')
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0, ${HEIGHT})`)

    const yScale = d3.scaleBand()
      .domain(Object.values(this.data).map(d => d.city))
      .range([0, HEIGHT])
      .padding(0.1)
    
    chart.append('g')
      .call(d3.axisLeft(yScale))

    // fill rects
    chart.selectAll()
      .data(Object.values(this.data))
      .enter()
      .append('rect')
      .attr('x', 1)
      .attr('y', d => yScale(d.city))
      .attr('height', yScale.bandwidth())
      .style('fill', d => d.color)
      .attr('class', d => `city ${d.class}`)
      .transition()
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .ease(ANIMATION_EASING)
      .attr('width', d => xScale(d.rank))
    
    // top label
    chart.append("text")
      .attr('class', 'label-text')
      .attr("x", WIDTH / 2)
      .attr("y", -20)
      .attr("text-anchor", "middle")
      .text("Happiness Ranking")
    
    // grid line
    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisTop()
      .scale(xScale)
      .tickSize(-WIDTH, 0, 0)
      .tickFormat(''))

    // rank text
    chart.selectAll(".happiness-bar")
      .data(Object.values(this.data))
      .enter()
      .append("text")
      .text(d => d.rank)
      .style('fill', '#fff')
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('x', 5)
      .attr("y", (d, i) => i * 19.9 + 14)
      .attr('class', d => `city ${d.class}`)
  }
}

export default Happiness