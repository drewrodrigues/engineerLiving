import {
  CITIES,
  SAN_FRANCISCO,
  NEW_YORK,
  MIAMI,
  BOSTON,
  SEATTLE,
  HOUSTON,
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

class CrimeRates {
  constructor() {
    this.averageViolentCrime = 22.7
    this.averagePropertyCrime = 35.4
    this.data = CITIES

    this.data[SAN_FRANCISCO].violentCrime = 39.6
    this.data[NEW_YORK].violentCrime = 28.2
    this.data[BOSTON].violentCrime = 37.3
    this.data[MIAMI].violentCrime = 48.8
    this.data[SEATTLE].violentCrime = 32.3
    this.data[HOUSTON].violentCrime = 50.4
    this.data[SAN_JOSE].violentCrime = 25, 
    this.data[RALEIGN].violentCrime = 20.3
    this.data[DENVER].violentCrime = 30.7
    this.data[PHOENIX].violentCrime = 37.5

    this.data[SAN_FRANCISCO].propertyCrime = 79.2
    this.data[NEW_YORK].propertyCrime = 24.9
    this.data[BOSTON].propertyCrime = 35.8
    this.data[MIAMI].propertyCrime = 62.7
    this.data[SEATTLE].propertyCrime = 76.9
    this.data[HOUSTON].propertyCrime = 63.2
    this.data[SAN_JOSE].propertyCrime = 36.5
    this.data[RALEIGN].propertyCrime = 44.4
    this.data[DENVER].propertyCrime = 50.8
    this.data[PHOENIX].propertyCrime = 52.8

    this.render()
  }

  render() {
    const svg = d3.select('svg.crimeRates')
      .attr('height', HEIGHT + MARGINS * 2).attr('width', WIDTH + MARGINS * 2 + 100)
    const chart = svg.append('g')
      .attr('transform', `translate(${MARGINS}, ${MARGINS})`)
    
    // x axis - city
    const xScale = d3.scaleLinear()
      .domain([20, 80])
      .range([0, WIDTH])
    
    chart.append('g')
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0, ${HEIGHT})`)

    // y axis - crime
    const yScale = d3.scaleBand()
      .domain(Object.values(this.data).map(d => d.city))
      .range([0, HEIGHT])
      .padding(0.1)
    
    chart.append('g')
      .call(d3.axisLeft(yScale))

    // fill rects
    chart.selectAll()
      // violentCrime
      .data(Object.values(this.data))
      .enter()
      .append('rect')
      .attr('x', 1)
      .attr('y', d => yScale(d.city))
      .attr('height', yScale.bandwidth() / 2)
      .style('fill', d => d.color)
      .attr('class', d => `city ${d.class}`)
      .transition()
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .ease(ANIMATION_EASING)
      .attr('width', d => xScale(d.violentCrime))
      
    // propertyCrime
    chart.selectAll()
      .data(Object.values(this.data))
      .enter()
      .append('rect')
      .attr('x', 1)
      .attr('y', d => yScale(d.city) + yScale.bandwidth() / 2 + 1)
      .attr('height', yScale.bandwidth() / 2)
      .style('fill', d => d.color)
      // .style('opacity', 0.6)
      .attr('class', d => `city ${d.class}`)
      .transition()
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .ease(ANIMATION_EASING)
      .attr('width', d => xScale(d.propertyCrime))
    
    // top label
    chart.append("text")
      .attr('class', 'label-text')
      .attr("x", WIDTH / 2)
      .attr("y", -20)
      .attr("text-anchor", "middle")
      .text("Crime Rates")

    // left label
    chart.append("text")
      .attr('class', 'label-text')
      .attr("x", -HEIGHT/2)
      .attr("y", -80)
      .attr("text-anchor", "middle")
      .text("Violent / Property Crime")
      .attr("transform", "rotate(-90)")
      
    // bottom label
    chart.append("text")
      .attr('class', 'label-text')
      .attr('x', WIDTH/2)
      .attr('y', HEIGHT + 50)
      .text("Low to high crime")
      .attr("text-anchor", "middle")
    
    // grid line
    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisTop()
      .scale(xScale)
      .tickSize(-WIDTH, 0, 0)
      .tickFormat(''))
    
    // grid line - average violent crime
    chart.append('line')
      .attr('x1', 8)
      .attr('y1', 0)
      .attr('x2', 8)
      .attr('y2', WIDTH)
      .attr('stroke', 'red')
      .style('opacity', 0.75)
    
    chart.append('text')
      .attr('class', 'label-text')
      .text("Average Violent Crime")
      .attr('y', 0)
      .attr('x', 0)
      .style("font-size", "10px")
      .attr('transform', "translate(8, 0), rotate(90)")
    
    // grid line - average property crime
    chart.append('line')
      .attr('x1', 52)
      .attr('y1', 0)
      .attr('x2', 52)
      .attr('y2', WIDTH)
      .attr('stroke', 'red')
      .style('opacity', 0.75)
    
    chart.append('text')
      .attr('class', 'label-text')
      .text("Average Property Crime")
      .attr('y', 0)
      .attr('x', 0)
      .style("font-size", "10px")
      .attr('transform', 'translate(52, 0), rotate(90)')
  }
}

export default CrimeRates