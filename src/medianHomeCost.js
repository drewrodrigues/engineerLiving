class MedianHomeCost {
  constructor() {
    this.data = [
      { city: "San Francisco", cost: 1331100, color: "#f1c40f" },
      { city: "New York", cost: 662100, color: "#2980b9" },
      { city: "Boston", cost: 587000, color: "#e74c3c" },
      { city: "Miami", cost: 326000, color: "#e67e22" },
      { city: "Seattle", cost: 761800, color: "#1abc9c" },
      { city: "Houston", cost: 175700, color: "#34495e" },
      { city: "San Jose", cost: 1083000, color: "#9b59b6" },
      { city: "Raleigh", cost: 260100, color: "#f39c12" },
      { city: "Denver", cost: 421900, color: "#2980b9" },
      { city: "Phoenix", cost: 229300, color: "#c0392b" }
    ]

    this.render()
  }

  render() {
    const width = 300
    const height = 300

    const svg = d3.select('svg.medianHomeCost').attr("height", 500).attr("width", 500)
    const chart = svg.append('g').attr("transform", "translate(100, 100)")

    // x axis
    const xScale = d3.scaleLinear()
      .domain([0, 14])
      .range([0, width]) // width in px

    chart.append('g')
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0, ${height})`)

    // y axis
    const yScale = d3.scaleBand()
      .domain(this.data.map(d => d.city))
      .range([0, height])
      .padding(0.1)
    
    // bottom label
    chart.append('text')
      .attr('x', width / 2)
      .attr('y', height + 50)
      .attr('text-anchor', 'middle')
      .text("in $100,000")
      .style('font-size', "12px")

    // top label
    chart.append('text')
      .attr('x', width / 2)
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .text("Median Home Price")
      .style('font-size', "12px")
    
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
      .attr('width', d => xScale(d.cost) / 100000)
      .style('fill', d => d.color)

    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisTop()
            .scale(xScale)
            .tickSize(-width, 0, 0)
            .tickFormat(''))
  }
}

export default MedianHomeCost