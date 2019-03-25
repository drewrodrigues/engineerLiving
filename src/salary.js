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

class Salary {
  constructor() {
    this.data = CITIES

    // https://www.glassdoor.com/blog/25-best-paying-cities-software-engineers/
    this.data[SAN_FRANCISCO].salary = 120000
    this.data[SAN_FRANCISCO].adjusted = 99751
    this.data[NEW_YORK].salary = 110000 // TODO: sad :()
    this.data[NEW_YORK].adjusted = 100000
    this.data[PORTLAND].salary = 90000
    this.data[PORTLAND].adjusted = 89374
    this.data[BOSTON].salary = 100000
    this.data[BOSTON].adjusted = 90171
    this.data[SEATTLE].salary = 113242
    this.data[SEATTLE].adjusted = 105735
    this.data[AUSTIN].salary = 100000
    this.data[AUSTIN].adjusted = 90171
    this.data[SAN_JOSE].salary = 122500
    this.data[SAN_JOSE].adjusted = 100989
    this.data[RALEIGN].salary = 94142
    this.data[RALEIGN].adjusted = 90000
    this.data[DENVER].salary = 90000
    this.data[DENVER].adjusted = 85878
    this.data[PHOENIX].salary = 87997
    this.data[PHOENIX].adjusted = 86765

    this.render()
  }

  render() {
    const svg = d3.select('svg.salary')
      .attr("height", HEIGHT + MARGINS * 2).attr("width", WIDTH + MARGINS * 2)
    const chart = svg.append('g')
      .attr("transform", `translate(${MARGINS}, ${MARGINS})`)

    // x axis - salary
    const xScale = d3.scaleLinear()
      .domain([85, 125])
      .range([0, WIDTH])
      
    chart.append('g')
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0, ${HEIGHT})`)

    // y axis - city
    const yScale = d3.scaleBand()
      .domain(Object.values(this.data).map(d => d.city))
      .range([0, WIDTH])
      .padding(0.1)

    // city labels
    chart.append('g')
      .call(d3.axisLeft(yScale))

    // rectangles - salary
    chart.selectAll()
      .data(Object.values(this.data))
      .enter()
      .append('rect')
      .attr('class', d => `city ${d.class}`)
      .attr('x', 1)
      .attr('y', d => yScale(d.city))
      .attr('height', yScale.bandwidth())
      .style('fill', "#bbb")
      // animation
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('width', d => xScale(d.salary / 1000))

    // rectangles - adjusted salary
    chart.selectAll()
      .data(Object.values(this.data))
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
      .attr('width', d => xScale(d.adjusted / 1000))

    // grid lines
    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisTop()
            .scale(xScale)
            .tickSize(-WIDTH, 0, 0)
            .tickFormat(''))
    
    // label bottom
    chart.append("text")
      .attr('class', 'label-text')
      .attr("x", WIDTH/2)
      .attr("y", HEIGHT + 50)
      .attr("text-anchor", "middle")
      .text("in $1,000")
      
    // label top
    chart.append("text")
      .attr('class', 'label-text')
      .attr("x", WIDTH / 2)
      .attr("y", -20)
      .attr('text-anchor', 'middle')
      .text("Adjusted Salary")
  }
}

export default Salary