class SunnyDays {
  constructor() {
    this.data = [
      { city: "San Francisco", days: 256, color: "#f1c40f" },
      { city: "New York", days: 224, color: "#2980b9" },
      { city: "Boston", days: 200, color: "#e74c3c" },
      { city: "Miami", days: 248, color: "#e67e22" },
      { city: "Seattle", days: 152, color: "#1abc9c" },
      { city: "Houston", days: 204, color: "#34495e" },
      { city: "San Jose", days: 257, color: "#9b59b6" },
      { city: "Raleigh", days: 213, color: "#f39c12" },
      { city: "Denver", days: 245, color: "#2980b9" },
      { city: "Phoenix", days: 299, color: "#c0392b" },
    ]

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
      .domain(this.data.map(d => d.city))
      .range([0, width])
      .padding(0.1)

    // city labels
    chart.append('g')
      .call(d3.axisLeft(yScale))

    // fill rects
    chart.selectAll()
      .data(this.data)
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