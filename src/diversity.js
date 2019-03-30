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

class Diversity {
  constructor() {
    this.ethnicities = ["White", "Asian", "Hispanic", "Black"]
    this.data = CITIES
    this.data[SAN_FRANCISCO].values = [
      { ethnicity: "White", percentage: 41.4 },
      { ethnicity: "Asian", percentage: 33.3 },
      { ethnicity: "Hispanic", percentage: 15.3 },
      { ethnicity: "Black", percentage: 5.5 }
    ]
    this.data[NEW_YORK].values = [
      { ethnicity: "White", percentage: 32.7 },
      { ethnicity: "Asian", percentage: 13.2 },
      { ethnicity: "Hispanic", percentage: 28.8 },
      { ethnicity: "Black", percentage: 22.6 }
    ]
    this.data[BOSTON].values = [
      { ethnicity: "White", percentage: 46 },
      { ethnicity: "Asian", percentage: 9.1 },
      { ethnicity: "Hispanic", percentage: 18.4 },
      { ethnicity: "Black", percentage: 22.7 }
    ]
    this.data[PORTLAND].values = [
      { ethnicity: "White", percentage: 71.8 },
      { ethnicity: "Asian", percentage: 7.4 },
      { ethnicity: "Hispanic", percentage: 9.6 },
      { ethnicity: "Black", percentage: 5.9 }
    ]
    this.data[SEATTLE].values = [
      { ethnicity: "White", percentage: 66.2 },
      { ethnicity: "Asian", percentage: 14.2 },
      { ethnicity: "Hispanic", percentage: 6.4 },
      { ethnicity: "Black", percentage: 7.2 }
    ]
    this.data[AUSTIN].values = [
      { ethnicity: "White", percentage: 48.7 },
      { ethnicity: "Asian", percentage: 6.5 },
      { ethnicity: "Hispanic", percentage: 34.8 },
      { ethnicity: "Black", percentage: 7.5 }
    ]
    this.data[SAN_JOSE].values = [
      { ethnicity: "White", percentage: 27.5 },
      { ethnicity: "Asian", percentage: 32.9 },
      { ethnicity: "Hispanic", percentage: 33.1 },
      { ethnicity: "Black", percentage: 2.9 }
    ]
    this.data[RALEIGN].values = [
      { ethnicity: "White", percentage: 54 },
      { ethnicity: "Asian", percentage: 4.3 },
      { ethnicity: "Hispanic", percentage: 10.9 },
      { ethnicity: "Black", percentage: 28.5 }
    ]
    this.data[DENVER].values = [
      { ethnicity: "White", percentage: 52.9 },
      { ethnicity: "Asian", percentage: 3.4 },
      { ethnicity: "Hispanic", percentage: 31.2 },
      { ethnicity: "Black", percentage: 9.5 }
    ]
    this.data[PHOENIX].values = [
      { ethnicity: "White", percentage: 46 },
      { ethnicity: "Asian", percentage: 3.3 },
      { ethnicity: "Hispanic", percentage: 40.5 },
      { ethnicity: "Black", percentage: 6.5 }
    ]

    this.render()
  }

  render() {
    const svg = d3.select('svg.diversity')
      .attr("height", HEIGHT + MARGINS * 2 - 90).attr("width", WIDTH + MARGINS * 2)
    const chart = svg.append('g')
      .attr('transform', `translate(${MARGINS}, ${MARGINS/2})`)

    // x axis
    const xScale = d3.scaleBand()
      .domain(this.ethnicities)
      .range([0, WIDTH])

    chart.append('g')
      .call(d3.axisBottom(xScale).tickSizeOuter(0))
      .attr("transform", `translate(0, ${HEIGHT})`)

    // y axis
    const yScale = d3.scaleLinear()
      .domain([70, 0])
      .range([0, HEIGHT])

    chart.append('g')
      .call(d3.axisLeft(yScale).ticks(5))

    // data
    let line = d3.line()
      .x(d => xScale(d.ethnicity))
      .y(d => yScale(d.percentage))
    
    // add lines
    chart.selectAll('.line')
      .data(Object.values(this.data))
      .enter()
      .append('path')
      .attr('transform', 'translate(25, 5)')
      .attr('class', d => `line city ${d.class}`)
      .attr('d', d => line(d.values))
      .style('stroke', d => d.color)
      .style('stroke-width', 5)
      .style('stroke-linecap', 'round')
    
    // percentage text
    chart.selectAll()
      .data(() => Object.values(this.data))
      .enter()
      .append('g')
      .attr('class', d => `city ${d.class} city-percentage`)
      .selectAll('.line-point')
      .data(d => d.values)
      .enter()
      .append('text')
      .text(d => `${parseInt(d.percentage)}%`)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('x', (d, i) => (WIDTH / 4) * i + 20)
      .attr('y', d => HEIGHT - HEIGHT * (d.percentage / 70))

    // left label
    chart.append('text')
      .attr('class', 'label-text')
      .attr('x', -WIDTH/2)
      .attr('y', -50)
      .attr("transform", "rotate(-90)")
      .attr('text-anchor', 'middle')
      .text('% of population')

    // top label
    chart.append('text')
      .attr('class', 'label-text')
      .attr('x', WIDTH / 2)
      .attr('y', -20)
      .attr('text-anchor', 'middle')
      .text('Diversity')

    // grid lines
    chart.append('g')
      .attr('class', 'grid')
      .call(d3.axisRight()
      .scale(yScale)
      .tickSize(WIDTH, 0, 0)
      .tickFormat('')
      .ticks(5))
  }
}

export default Diversity