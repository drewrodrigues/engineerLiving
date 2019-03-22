import {
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION
} from "./constants";

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
    const width = 200
    const height = 200
    const margins = 100

    const svg = d3.select('svg.medianHomeCost').attr("height", height + margins * 2).attr("width", width + margins * 2)
    const chart = svg.append('g').attr("transform", "translate(100, 100)")

    // x axis
    const xScale = d3.scaleLinear()
      .domain([0, 14])
      .range([0, width])

    chart.append('g')
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0, ${height})`)

    // y axis
    const yScale = d3.scaleBand()
      .domain(this.data.map(d => d.city))
      .range([0, height])
      .padding(0.1)
    
    chart.append('g')
      .call(d3.axisLeft(yScale))
    
    // bottom label
    chart.append('text')
      .attr('x', width / 2)
      .attr('y', height + 50)
      .attr('text-anchor', 'middle')
      .text("in $100,000")

    // top label
    chart.append('text')
      .attr('x', width / 2)
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .text("Median Home Price")

    // fill rects
    chart.selectAll()
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', 1)
      .attr('y', d => yScale(d.city))
      .attr('height', yScale.bandwidth())
      .style('fill', d => d.color)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('width', d => xScale(d.cost) / 100000)

    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisTop()
            .scale(xScale)
            .tickSize(-width, 0, 0)
            .tickFormat(''))
  }
}

export default MedianHomeCost