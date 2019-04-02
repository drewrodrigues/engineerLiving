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

import Chart from './chart'

class Happiness extends Chart {
  constructor(selector) {
    super(selector)

    this.setData()
    this.xAxis([75, 125], 'scaleLinear')
    this.yAxis(this.sortedData.map(d => d.city), 'scaleBand')
    this.rectanglesMedianSalary()
    this.rectanglesAdjustedSalary()
    this.gridLines(this.xScale, 'axisBottom')
    this.rectangleLabels(function() {
      return `$${parseInt(this.adjusted/1000)}K`
    })
    this.rectangleMedianLabels()
    this.labelTop('Adjusted Salary | Median Salary')
  }

  setData() {
    this.data = CITIES

    // https://www.glassdoor.com/blog/25-best-paying-cities-software-engineers/
    this.data[SAN_FRANCISCO].salary = 120000
    this.data[SAN_FRANCISCO].adjusted = 99751
    this.data[NEW_YORK].salary = 110000
    this.data[NEW_YORK].adjusted = 100000
    this.data[PORTLAND].salary = 90000
    this.data[PORTLAND].adjusted = 89374
    this.data[BOSTON].salary = 100000
    this.data[BOSTON].adjusted = 90171
    this.data[SEATTLE].salary = 113242
    this.data[SEATTLE].adjusted = 105735
    this.data[AUSTIN].salary = 100000
    this.data[AUSTIN].adjusted = 90171
    this.data[SAN_JOSE].salary = 122500
    this.data[SAN_JOSE].adjusted = 100989
    this.data[RALEIGN].salary = 94142
    this.data[RALEIGN].adjusted = 90000
    this.data[DENVER].salary = 90000
    this.data[DENVER].adjusted = 85878
    this.data[PHOENIX].salary = 87997
    this.data[PHOENIX].adjusted = 86765

    this.sortedData = Object.values(this.data).sort((a, b) => a.cost - b.cost)
  }

  rectanglesAdjustedSalary() {
    this.chart
      .selectAll()
      .data(this.sortedData)
      .enter()
      .append('rect')
      .attr('class', d => `city ${d.class}`)
      .attr('x', 1)
      .attr('y', d => this.yScale(d.city))
      .attr('height', this.yScale.bandwidth())
      .style('fill', d => d.color)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('width', d => this.xScale(d.adjusted / 1000))
  }

  rectanglesMedianSalary() {
    this.chart
      .selectAll()
      .data(this.sortedData)
      .enter()
      .append('rect')
      .attr('class', d => `city ${d.class}`)
      .attr('x', 1)
      .attr('y', d => this.yScale(d.city))
      .attr('height', this.yScale.bandwidth())
      .style('fill', '#bbb')
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('width', d => this.xScale(d.salary / 1000))
  }

  rectangleMedianLabels() {
    this.chart.selectAll()
      .data(this.sortedData)
      .enter()
      .append('text')
      .style('fill', '#aaa')
      .attr('class', d => `city ${d.class}`)
      .attr('y', (d, i) => i * 19.9 + 14)
      .text(d => `$${parseInt(d.salary/1000)}K`)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('x', d => this.xScale(d.salary / 1000) + 5)
  }
}

export default Happiness