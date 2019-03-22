class CrimeRates {
  constructor() {
    this.averageViolentCrime = 22.7
    this.averagePropertyCrime = 35.4

    this.data = [
      { city: "San Francisco", color: "#f1c40f", violentCrime: 39.6, propertyCrime: 79.2 },
      { city: "New York", color: "#2980b9", violentCrime: 28.2, propertyCrime: 24.9 },
      { city: "Boston", color: "#e74c3c", violentCrime: 37.3, propertyCrime: 35.8 },
      { city: "Miami", color: "#e67e22", violentCrime: 48.8, propertyCrime: 62.7 },
      { city: "Seattle", color: "#1abc9c", violentCrime: 32.3, propertyCrime: 76.9 },
      { city: "Houston", color: "#34495e", violentCrime: 50.4, propertyCrime: 63.2 },
      { city: "San Jose", color: "#9b59b6", violentCrime: 25, propertyCrime: 36.5 },
      { city: "Raleigh", color: "#f39c12", violentCrime: 20.3, propertyCrime: 44.4 },
      { city: "Denver", color: "#2980b9", violentCrime: 30.7, propertyCrime: 50.8 },
      { city: "Phoenix", color: "#c0392b", violentCrime: 37.5, propertyCrime: 52.8}
    ]

    this.render()
  }

  render() {
    const width = 200
    const height = 200
    const margin = 100

    const svg = d3.select('svg.crimeRates').attr('height', height + margin * 2).attr('width', width + margin * 2 + 100)
    const chart = svg.append('g').attr('transform', `translate(${margin}, ${margin})`)
    
    // x axis - city
    const xScale = d3.scaleLinear()
      .domain([20, 80])
      .range([0, width])
    
    chart.append('g')
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0, ${height})`)

    // y axis - crime
    const yScale = d3.scaleBand()
      .domain(this.data.map(d => d.city))
      .range([0, height])
      .padding(0.1)
    
    chart.append('g')
      .call(d3.axisLeft(yScale))

    // fill rects
    chart.selectAll()
      // violentCrime
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', 1)
      .attr('y', d => yScale(d.city))
      .attr('width', d => height - xScale(d.violentCrime))
      .attr('height', yScale.bandwidth() / 2)
      .style('fill', d => d.color)
      .exit()
      // propertyCrime
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', 1)
      .attr('y', d => yScale(d.city) + yScale.bandwidth() / 2)
      .attr('width', d => height - xScale(d.propertyCrime))
      .attr('height', yScale.bandwidth() / 2)
      .style('fill', d => d.color)
      .style('opacity', 0.6)
    
    // top label
    chart.append("text")
      .attr("x", width / 2)
      .attr("y", -20)
      .attr("text-anchor", "middle")
      .text("Crime Rates")

    // left label
    chart.append("text")
      .attr("x", -height/2)
      .attr("y", -80)
      .attr("text-anchor", "middle")
      .text("Violent / Property Crime")
      .attr("transform", "rotate(-90)")
      
    // bottom label
    chart.append("text")
      .attr('x', width/2)
      .attr('y', height + 50)
      .text("Low to high crime")
      .attr("text-anchor", "middle")
    
    // grid line
    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisTop()
      .scale(xScale)
      .tickSize(-width, 0, 0)
      .tickFormat(''))
    
    // grid line - average violent crime
    chart.append('line')
      .attr('x1', 8)
      .attr('y1', 0)
      .attr('x2', 8)
      .attr('y2', width)
      .attr('stroke', 'red')
      .style('opacity', 0.75)
    
    chart.append('text')
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
      .attr('y2', width)
      .attr('stroke', 'red')
      .style('opacity', 0.75)
    
    chart.append('text')
      .text("Average Property Crime")
      .attr('y', 0)
      .attr('x', 0)
      .style("font-size", "10px")
      .attr('transform', 'translate(52, 0), rotate(90)')
  }
}

export default CrimeRates