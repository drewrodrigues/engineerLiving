import {
  ANIMATION_DURATION,
  ANIMATION_DELAY,
  ANIMATION_EASING,
  WIDTH,
  HEIGHT,
  MARGINS
} from './constants'

class Diversity {
  constructor() {
    this.ethnicities = ["White", "Asian", "Hispanic", "Black"],
    this.data = [
      { city: "San Francisco", color: "#f1c40f", values: [
        { ethnicity: "White", percentage: 41.4 },
        { ethnicity: "Asian", percentage: 33.3 },
        { ethnicity: "Hispanic", percentage: 15.3 },
        { ethnicity: "Black", percentage: 5.5 }
      ]},
      { city: "New York", color: "#2980b9", values: [
        { ethnicity: "White", percentage: 32.7 },
        { ethnicity: "Asian", percentage: 13.2 },
        { ethnicity: "Hispanic", percentage: 28.8 },
        { ethnicity: "Black", percentage: 22.6 }
      ]},
      { city: "Boston", color: "#e74c3c", values: [
        { ethnicity: "White", percentage: 46 },
        { ethnicity: "Asian", percentage: 9.1 },
        { ethnicity: "Hispanic", percentage: 18.4 },
        { ethnicity: "Black", percentage: 22.7 }
      ]},
      { city: "Miami", color: "#e67e22", values: [
        { ethnicity: "White", percentage: 11.1 },
        { ethnicity: "Asian", percentage: 0.8 },
        { ethnicity: "Hispanic", percentage: 70.7 },
        { ethnicity: "Black", percentage: 16.7 }
      ]},
      { city: "Seattle", color: "#1abc9c", values: [
        { ethnicity: "White", percentage: 66.2 },
        { ethnicity: "Asian", percentage: 14.2 },
        { ethnicity: "Hispanic", percentage: 6.4 },
        { ethnicity: "Black", percentage: 7.2 }
      ]},
      { city: "Houston", color: "#34495e", values: [
        { ethnicity: "White", percentage: 22.5 },
        { ethnicity: "Asian", percentage: 6.3 },
        { ethnicity: "Hispanic", percentage: 43.9 },
        { ethnicity: "Black", percentage: 22.8 }
      ]},
      { city: "San Jose", color: "#9b59b6", values: [
        { ethnicity: "White", percentage: 27.5 },
        { ethnicity: "Asian", percentage: 32.9 },
        { ethnicity: "Hispanic", percentage: 33.1 },
        { ethnicity: "Black", percentage: 2.9 }
      ]},
      { city: "Raleigh", color: "#f39c12", values: [
        { ethnicity: "White", percentage: 54 },
        { ethnicity: "Asian", percentage: 4.3 },
        { ethnicity: "Hispanic", percentage: 10.9 },
        { ethnicity: "Black", percentage: 28.5 }
      ]},
      { city: "Denver", color: "#2980b9", values: [
        { ethnicity: "White", percentage: 52.9 },
        { ethnicity: "Asian", percentage: 3.4 },
        { ethnicity: "Hispanic", percentage: 31.2 },
        { ethnicity: "Black", percentage: 9.5 }
      ]},
      { city: "Phoenix", color: "#c0392b", values: [
        { ethnicity: "White", percentage: 46 },
        { ethnicity: "Asian", percentage: 3.3 },
        { ethnicity: "Hispanic", percentage: 40.5 },
        { ethnicity: "Black", percentage: 6.5 }
      ]}
    ]

    this.render()
  }

  render() {
    const svg = d3.select('svg.diversity')
      .attr("height", HEIGHT + MARGINS * 2).attr("width", WIDTH + MARGINS * 2)
    const chart = svg.append('g')
      .attr('transform', "translate(100, 100)")

    // x axis
    const xScale = d3.scaleBand()
      .domain(this.ethnicities)
      .range([0, WIDTH])
      .padding(0.1)

    chart.append('g')
      .call(d3.axisBottom(xScale))
      .attr("transform", `translate(0, ${HEIGHT})`)

    // y axis
    const yScale = d3.scaleLinear()
      .domain([70, 0])
      .range([0, HEIGHT])

    chart.append('g')
      .call(d3.axisLeft(yScale))

    // data
    let line = d3.line()
      .x(d => xScale(d.ethnicity))
      .y(d => yScale(d.percentage))
    
    let lines = svg.append('g')
      .attr('class', 'lines')
    
    // add lines
    lines.selectAll('.line-group')
      .data(this.data)
      .enter()
      .append('g')
      .append('path')
      .attr('transform', 'translate(122, 100)') // FIXME: why do I have to do this
      .attr('class', d => `line ${d.city} diversity-${d.city}`)
      .attr('d', d => line(d.values))
      .style('stroke', d => d.color)
      .on('mouseover', function(d) {
        svg.append("text")
          .attr('class', 'title-text')
          .text(d.city)
          .attr("text-anchor", "middle")
          .attr('x', 500/2)
          .attr('y', 75)
      })
      .on('mouseenter', function() {
        d3.selectAll(".line").style('opacity', 0.25)
        d3.selectAll(".circle circle").style('opacity', 0.25)
        d3.select(this).style('opacity', 1)
          .style("cursor", "pointer")
          .style("stroke-width", 3)
      })
      .on('mouseout', function() {
        svg.select(".title-text").remove();
        d3.selectAll(".circle circle").style('opacity', 0.5)
        d3.selectAll(".line").style('opacity', 0.5)
          .style("stroke-width", 1)
      })
  
    // add circles
    lines.selectAll('circle-group')
      .data(this.data)
      .enter()
      .append('g')
      .style('fill', d => d.color)
      .selectAll('circle')
      .data(d => d.values)
      .enter()
      .append('g')
      .attr('class', 'circle')
      .append('circle')
      .attr('transform', 'translate(122, 100)') // FIXME: why do I have to do this
      .attr('r', 5)
      .attr('cx', d => xScale(d.ethnicity))
      .attr('cy', d => yScale(d.percentage))
      .style('opacity', 0)
      .on("mouseover", function(d) {
        svg.append("text")
          .text(d.percentage)
          .attr('class', 'percentage-text')
          .attr("text-anchor", "middle")
          .attr('x', 500/2)
          .attr('y', 75)
        d3.select(this).style("opacity", 1)
      })
      .on("mouseout", function(d) {
        svg.select(".percentage-text").remove();
        d3.select(this).style("opacity", 0.5)
      })
      .transition()
        .duration(ANIMATION_DURATION)
        .ease(ANIMATION_EASING)
        .delay((d, i) => ANIMATION_DELAY * i)
        .style('opacity', 0.75)
    
    // bottom label
    chart.append('text')
      .attr('x', WIDTH / 2)
      .attr('y', HEIGHT + 50)
      .attr('text-anchor', 'middle')
      .text('Ethnicity')

    // left label
    chart.append('text')
      .attr('x', -WIDTH/2)
      .attr('y', -50)
      .attr("transform", "rotate(-90)")
      .attr('text-anchor', 'middle')
      .text('% of population')

    // top label
    chart.append('text')
      .attr('x', WIDTH / 2)
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .text('Diversity')
  }
}

export default Diversity