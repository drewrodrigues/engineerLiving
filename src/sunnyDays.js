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
    const svg = d3.select('svg').attr("height", height + margins * 2).attr("width", width + margins * 2)

    const chart = svg.append('g')
      .attr("transform", `translate(${margins}, ${margins})`)

    // y axis
    const yScale = d3.scaleLinear()
      .domain([150, 300])
      .range([height, 0])

    chart.append('g')
      .call(d3.axisLeft(yScale))

    // x axis
    const xScale = d3.scaleBand()
      .domain(this.data.map(d => d.city))
      .range([0, width])
      .padding(0.1)

    // city labels
    chart.append('g')
      .attr('transform', `translate(0, ${height})`) // place at bottom
      .call(d3.axisBottom(xScale))
      // rotate text
      .selectAll("text")
      .attr("transform", "rotate(90)")
      .attr("y", -3)
      .attr("x", 10)
      .style("text-anchor", "start");

    // fill rects
    chart.selectAll()
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.city))
      .attr('y', d => yScale(d.days))
      .attr('height', d => height - yScale(d.days))
      .attr('width', xScale.bandwidth())
      .style('fill', d => d.color)

    // grid lines
    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft()
            .scale(yScale)
            .tickSize(-width, 0, 0)
            .tickFormat(''))
    
    // label left
    chart.append("text")
      .attr("x", -width/2)
      .attr("y", -50)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .text("Days")
      
    // label top
    chart.append("text")
      .attr("x", width / 2)
      .attr("y", -20)
      .attr('text-anchor', 'middle')
      .style("font-size", "12px")
      .text("Sunny days per year")
  }
}

export default SunnyDays