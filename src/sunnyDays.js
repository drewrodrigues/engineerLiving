import { CITIES } from './constants'
import {
  SAN_FRANCISCO,
  NEW_YORK,
  BOSTON,
  SEATTLE,
  HOUSTON,
  SAN_JOSE,
  RALEIGN,
  DENVER,
  PHOENIX
} from './constants'

class SunnyDays {
  constructor() {
    this.data = CITIES

    this.data[SAN_FRANCISCO].days = 256
    this.data[NEW_YORK].days = 224
    this.data[BOSTON].days = 200
    this.data[SEATTLE].days = 152
    this.data[HOUSTON].days = 204
    this.data[SAN_JOSE].days = 204
    this.data[RALEIGN].days = 213
    this.data[DENVER].days = 245
    this.data[PHOENIX].days = 299

    this.render()
  }

  render() {
    const width = 200
    const height = 200
    const margins = 100
    
    // figure out how to get width correct
    const svg = d3.select('svg.sunnyDays').attr("height", height + margins * 2).attr("width", width + margins * 2)

    const chart = svg.append('g')
      .attr("transform", `translate(${margins}, ${margins})`)

    // x axis - sunny days
    const xScale = d3.scaleLinear()
      .domain([150, 300])
      .range([0, width])
      
    chart.append('g')
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0, ${height})`)

    // y axis - city
    const yScale = d3.scaleBand()
      .domain(Object.values(this.data).map(d => d.city))
      .range([0, width])
      .padding(0.1)

    // city labels
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
      .attr('width', d => xScale(d.days))
      .style('fill', d => d.color)

    // grid lines
    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisTop()
            .scale(xScale)
            .tickSize(-width, 0, 0)
            .tickFormat(''))
    
    // label bottom
    chart.append("text")
      .attr("x", width/2)
      .attr("y", height + 50)
      .attr("text-anchor", "middle")
      .text("Days")
      
    // label top
    chart.append("text")
      .attr("x", width / 2)
      .attr("y", -20)
      .attr('text-anchor', 'middle')
      .text("Sunny days per year")
  }
}

export default SunnyDays