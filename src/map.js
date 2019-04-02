import {
  ANIMATION_EASING,
  ANIMATION_DURATION,
} from './constants'

import Chart from './chart'

class Map extends Chart {
  constructor(selector) {
    super(selector)
    this.svg = d3.select(selector)
    this.shadowCircle()
    this.mainCircle()
    this.innerWhiteCircle()
    this.cityLabel()
    this.ranking()
  }

  shadowCircle() {
    this.svg
      .selectAll('.shadow')
      .data(Object.values(this.data))
      .enter()
      .append('circle')
      .attr('r', 15)
      .attr('width', 10)
      .style('fill', d => "rgba(0,0,0,0.3)")
      .attr('class', d => `city ${d.class} city-pinpoint`)
      .transition()
        .ease(ANIMATION_EASING)
        .duration(ANIMATION_DURATION)
      .attr('cy', d => d.position.y + 5)
      .attr('cx', d => d.position.x)
  }

  mainCircle() {
    this.svg
      .selectAll()
      .data(Object.values(this.data))
      .enter()
      .append('circle')
      .attr('r', 15)
      .style('fill', 'none')
      .style('cursor', 'pointer')
      .attr('class', d => `city ${d.class} city-pinpoint`)
      .transition()
        .ease(ANIMATION_EASING)
        .duration(ANIMATION_DURATION)
        .style('fill', d => d.color)
        .attr('cy', d => d.position.y)
        .attr('cx', d => d.position.x)
  }

  innerWhiteCircle() {
    this.svg
      .selectAll()
      .data(Object.values(this.data))
      .enter()
      .append('circle')
      .attr('r', 10)
      .style('fill', d => "#fff")
      .attr('class', d => `city ${d.class} city-pinpoint`)
      .transition()
        .ease(ANIMATION_EASING)
        .duration(ANIMATION_DURATION)
      .attr('cy', d => d.position.y)
      .attr('cx', d => d.position.x)
      .style('z-index', 10)
      .style('cursor', 'pointer')
  }

  cityLabel() {
    this.svg
      .selectAll('text')
      .data(Object.values(this.data))
      .enter()
      .append('text')
      .attr('opacity', 0)
      .attr('class', d => `map-city-label city ${d.class}`)
      .text(d => d.city)
      .style('font-size', 14)
      .style('stroke-width', 3)
      .attr('fill', d => d.color)
      .transition()
        .ease(ANIMATION_EASING)
        .duration(ANIMATION_DURATION / 1.5)
      .attr('opacity', 1)
      .attr('x', d => {
        if (d.city === "New York") {
          return d.position.x - 90
        } else if (d.city === "Boston") {
          return d.position.x - 75
        } else if (d.city === "Raleign") {
          return d.position.x - 80
        }
        return d.position.x + 25
      })
      .attr('y', d => d.position.y + 5)
      .style('z-index', 10)
  }

  ranking() {
    this.svg
      .selectAll('.ranking')
      .data(Object.values(this.data))
      .enter()
      .append('text')
      .text(d => d.ranking)
      .style('fill', d => d.color)
      .style('font-size', 16)
      .attr('class', d => `city ${d.class} city-pinpoint`)
      .transition()
        .ease(ANIMATION_EASING)
        .duration(ANIMATION_DURATION)
      .attr('y', d => d.position.y + 6)
      .attr('x', d => d.position.x)
      .style('text-anchor', 'middle')
  }
}

export default Map