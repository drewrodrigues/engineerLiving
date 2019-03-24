import {
  CITIES,
  SAN_FRANCISCO,
  NEW_YORK,
  MIAMI,
  BOSTON,
  SEATTLE,
  HOUSTON,
  SAN_JOSE,
  RALEIGN,
  DENVER,
  PHOENIX,
  ANIMATION_DELAY,
  ANIMATION_EASING,
  ANIMATION_DURATION,
} from './constants'

class Map {
  constructor() {
    this.data = CITIES

    this.data[SAN_FRANCISCO].position = { x: 25, y: 160 }
    this.data[NEW_YORK].position = { x: 630, y: 135 }
    this.data[MIAMI].position = { x: 600, y: 350 }
    this.data[BOSTON].position = { x: 660, y: 100 }
    this.data[SEATTLE].position = { x: 55, y: 25 }
    this.data[HOUSTON].position = { x: 340, y: 350 }
    this.data[SAN_JOSE].position = { x: 50, y: 180 }
    this.data[RALEIGN].position = { x: 610, y: 210 }
    this.data[DENVER].position = { x: 250, y: 170 }
    this.data[PHOENIX].position = { x: 150, y: 255 }

    this.render()
  }

  render() {
    const svg = d3.select('svg.map')

    // circles
    svg.selectAll('circle')
      .data(Object.values(this.data))
      .enter()
      .append('circle')
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('cy', d => d.position.y)
      .attr('cx', d => d.position.x)
      .style('fill', d => d.color)
      .attr('r', 10)
    
    // city labels
    svg.selectAll('text')
      .data(Object.values(this.data))
      .enter()
      .append('text')
      .text(d => d.city)
      .style('font-size', 14)
      .on('mouseover', (d, i) => {
        // TODO: show all of this class, hide all .city (decrease opacity)
        console.log(d.class)
      })
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('fill', d => d.color)
      .attr('x', d => d.position.x + 15)
      .attr('y', d => d.position.y + 5)
  }
}

export default Map