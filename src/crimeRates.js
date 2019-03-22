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
    const width = 300
    const height = 300
    const margin = 100

    const svg = d3.select('svg.crimeRates').attr('height', height + margin * 2).attr('width', width + margin * 2 + 100)
    const chart = svg.append('g').attr('transform', `translate(${margin}, ${margin})`)

    // x axis - city
    const xScale = d3.scaleBand()
      .domain(this.data.map(d => d.city))
      .range([0, width])
      .padding(0.1)
    
    chart.append('g')
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0, ${height})`)
      // rotate text
      .selectAll('text')
      .attr('transform', 'rotate(90)')
      .style("text-anchor", "start")
      .attr("y", -3)
      .attr("x", 10)
    
    // y axis - crime per capita
    const yScale = d3.scaleLinear()
      .domain([20, 80])
      .range([height, 0])
    
    chart.append('g')
      .call(d3.axisLeft(yScale))

    // fill rects
    chart.selectAll()
      // violentCrime
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.city))
      .attr('y', d => yScale(d.violentCrime))
      .attr('height', d => height - yScale(d.violentCrime))
      .attr('width', xScale.bandwidth() / 2)
      .style('fill', d => d.color)
      .exit()
      // propertyCrime
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.city) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.propertyCrime))
      .attr('height', d => height - yScale(d.propertyCrime))
      .attr('width', xScale.bandwidth() / 2)
      .style('fill', d => d.color)
      .style('opacity', 0.6)
    
    // top label
    chart.append("text")
      .attr("x", width / 2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .text("Crime Rates")

    // left label
    chart.append("text")
      .attr("x", -height/2)
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .text("1 (low crime) to 100 (high crime)")
      .attr("transform", "rotate(-90)")
      
    // bottom label
    chart.append("text")
      .attr('x', width/2)
      .attr('y', height + 90)
      .text("Violent / Property Crime")
      .attr("text-anchor", "middle")
    
    // grid line
    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft()
      .scale(yScale)
      .tickSize(-width, 0, 0)
      .tickFormat(''))
    
    // grid line - average violent crime
    chart.append('line')
      .attr('x1', 0)
      .attr('y1', height - 8)
      .attr('x2', width)
      .attr('y2', height - 8)
      .attr('stroke', 'red')
      .style('opacity', 0.75)
    
    chart.append('text')
      .text("Average Violent Crime")
      .attr('y', height - 8)
      .attr('x', width + 5)
    
    // grid line - average property cimr
    chart.append('line')
      .attr('x1', 0)
      .attr('y1', height - 77)
      .attr('x2', width)
      .attr('y2', height - 77)
      .attr('stroke', 'red')
      .style('opacity', 0.75)
    
    chart.append('text')
      .text("Average Property Crime")
      .attr('y', height - 77)
      .attr('x', width + 5)
  }
}

export default CrimeRates