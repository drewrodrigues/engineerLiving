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

    this.data[SAN_FRANCISCO].position = { x: 20, y: 160 }
    this.data[NEW_YORK].position = { x: 650, y: 135 }
    this.data[MIAMI].position = { x: 600, y: 350 }
    this.data[BOSTON].position = { x: 680, y: 100 }
    this.data[SEATTLE].position = { x: 40, y: 40 }
    this.data[HOUSTON].position = { x: 340, y: 350 }
    this.data[SAN_JOSE].position = { x: 35, y: 190 }
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
      .attr('cx', 300)
      .attr('cy', 150)
      .attr('r', 10)
      .on('mouseenter', (d, i) => {
        // fade all other city data
        let allOtherCityData = document.querySelectorAll(`.city:not(.${d.class})`)
        allOtherCityData.forEach(data => {
          data.classList.add("filter")
        })
      })
      .on('mouseout', () => {
        let allCityData = document.querySelectorAll('.city')
        allCityData.forEach(data => {
          data.classList.remove("filter")
        })
      })
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION)
      .attr('cy', d => d.position.y)
      .attr('cx', d => d.position.x)
      .style('fill', d => d.color)
      .style('cursor', 'pointer')
      .attr('class', d => `city ${d.class} city-pinpoint`)
    
    // city labels
    svg.selectAll('text')
      .data(Object.values(this.data))
      .enter()
      .append('text')
      .attr('opacity', 0)
      .attr('class', d => `map-city-label city ${d.class}`)
      .text(d => d.city)
      .style('font-size', 14)
      .attr('fill', d => d.color)
      .on('mouseenter', (d, i) => {
        // fade all other city data
        let allOtherCityData = document.querySelectorAll(`.city:not(.${d.class})`)
        allOtherCityData.forEach(data => {
          data.classList.add("filter")
        })
      })
      .on('mouseleave', () => {
        let allCityData = document.querySelectorAll('.city')
        allCityData.forEach(data => {
          data.classList.remove("filter")
        })
      })
      .transition()
        .ease(ANIMATION_EASING)
        .delay((d, i) => i * ANIMATION_DELAY)
        .duration(ANIMATION_DURATION / 1.5)
      .attr('opacity', 1)
      .attr('x', d => {
        if (d.city === "New York") {
          return d.position.x - 75
        } else if (d.city === "Boston") {
          return d.position.x - 60
        }
        return d.position.x + 15
      })
      .attr('y', d => d.position.y + 5)
  }
}

export default Map