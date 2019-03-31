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

class JobMarket {
  constructor() {
    this.setData()
    this.setChart()
    this.render()
  }

  setData() {
    this.data = CITIES

    // indeed search: software engineer w/ exact location only 3/24/2019
    this.data[SAN_FRANCISCO].jobs = 7947
    this.data[NEW_YORK].jobs = 8364
    this.data[BOSTON].jobs = 3630
    this.data[PORTLAND].jobs = 2359
    this.data[SEATTLE].jobs = 10417
    this.data[AUSTIN].jobs = 4308
    this.data[SAN_JOSE].jobs = 3023
    this.data[RALEIGN].jobs = 1377 // FIXME: RALEIGH
    this.data[DENVER].jobs = 1973
    this.data[PHOENIX].jobs = 1491
  }

  setChart() {
    const svg = d3.select('svg.jobMarket')
      .attr('height', HEIGHT + MARGINS * 2).attr('width', WIDTH + MARGINS * 2)
    this.chart = svg.append('g')
      .attr('transform', `translate(${MARGINS + 70}, ${MARGINS + 100})`)
  }

  render() {
    this._setChartVariables()
    this._addPieChart()
    this._addCityLabel()
    this._addCountLabel()
    this._middleLabel()
  }

  _setChartVariables() {
    this.radius = Math.min(WIDTH, HEIGHT) / 2

    this.pie = d3.pie()
      .value(d => d.jobs)

    this.arc = d3.arc()
      .innerRadius(0)
      .outerRadius(this.radius)

    this.labelArc = d3.arc()
      .innerRadius(this.radius)
      .outerRadius(this.radius + 110)

    this.percentageArc = d3.arc()
      .innerRadius(this.radius / 2)
      .outerRadius(this.radius)
  }

  _addPieChart() {
    this.chart
      .selectAll()
      .data(this.pie(Object.values(this.data)))
      .enter()
      .append('path')
      .attr('class', d => `city ${d.data.class}`)
      .attr('d', this.arc)
      .attr('fill', d => d.data.color)
  }

  _addCityLabel() {
    this.chart
      .selectAll()
      .data(this.pie(Object.values(this.data)))
      .enter()
      .append('text')
      .attr('class', d => `city ${d.data.class}`)
      .attr('text-anchor', 'middle')
      .attr('transform',  d => `translate(${this.labelArc.centroid(d)})`)
      .text(d => d.data.city)
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
        .attr('transform', d => { 
          let midAngle = d.endAngle < Math.PI ? d.startAngle/2 + d.endAngle/2 : d.startAngle/2  + d.endAngle/2 + Math.PI
          return `translate(${this.labelArc.centroid(d)[0]}, ${this.labelArc.centroid(d)[1]}) rotate(-95) rotate(${midAngle * 180/Math.PI})`;
        })
  }

  _addCountLabel() {
    this.chart
      .selectAll()
      .data(this.pie(Object.values(this.data)))
      .enter()
      .append('text')
      .attr('class', d => `city ${d.data.class} city-data-toggle`)
      .attr('text-anchor', 'middle')
      .attr('transform',  d => `translate(${this.percentageArc.centroid(d)})`)
      .text(d => d.data.jobs)
  }

  _middleLabel() {
    this.chart
      .append('text')
      .attr('text-anchor', 'middle')
      .text('Open Jobs')
  }
}

export default JobMarket