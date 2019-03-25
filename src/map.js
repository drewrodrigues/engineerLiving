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
} from './constants'

class Map {
  constructor() {
    this.data = CITIES

    this.data[SAN_FRANCISCO].position = { x: 20, y: 160 }
    this.data[SAN_FRANCISCO].ranking = 1
    this.data[NEW_YORK].position = { x: 625, y: 135 }
    this.data[NEW_YORK].ranking = 2
    this.data[PORTLAND].position = { x: 45, y: 90 }
    this.data[PORTLAND].ranking = 3
    this.data[BOSTON].position = { x: 650, y: 100 }
    this.data[BOSTON].ranking = 4
    this.data[SEATTLE].position = { x: 45, y: 40 }
    this.data[SEATTLE].ranking = 5
    this.data[AUSTIN].position = { x: 320, y: 350 }
    this.data[AUSTIN].ranking = 6
    this.data[SAN_JOSE].position = { x: 35, y: 190 }
    this.data[SAN_JOSE].ranking = 7
    this.data[RALEIGN].position = { x: 600, y: 210 }
    this.data[RALEIGN].ranking = 8
    this.data[DENVER].position = { x: 250, y: 170 }
    this.data[DENVER].ranking = 9
    this.data[PHOENIX].position = { x: 150, y: 255 }
    this.data[PHOENIX].ranking = 10

    this.render()
  }

  render() {
    this.svg = d3.select('svg.map')
    this.shadowCircle()
    this.mainCircle()
    this.innerWhiteCircle()
    this.cityLabel()
    this.ranking()
  }

  shadowCircle() {
    this.svg.selectAll('.shadow')
      .data(Object.values(this.data))
      .enter()
      .append('circle')
      .attr('r', 15)
      .attr('width', 10)
      .style('fill', d => "rgba(0,0,0,0.3)")
      .transition()
        .ease(ANIMATION_EASING)
        .duration(ANIMATION_DURATION)
      .attr('cy', d => d.position.y + 5)
      .attr('cx', d => d.position.x)
      .attr('class', d => `city ${d.class} city-pinpoint`)
  }

  mainCircle() {
    this.svg.selectAll()
      .data(Object.values(this.data))
      .enter()
      .append('circle')
      .attr('r', 15)
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
      .style('fill', 'none')
      .style('cursor', 'pointer')
      .transition()
        .ease(ANIMATION_EASING)
        .duration(ANIMATION_DURATION)
        .style('fill', d => d.color)
        .attr('cy', d => d.position.y)
        .attr('cx', d => d.position.x)
      .attr('class', d => `city ${d.class} city-pinpoint`)
  }

  innerWhiteCircle() {
    // inner white circle
    this.svg.selectAll()
      .data(Object.values(this.data))
      .enter()
      .append('circle')
      .attr('r', 10)
      .style('fill', d => "#fff")
      .transition()
        .ease(ANIMATION_EASING)
        .duration(ANIMATION_DURATION)
      .attr('cy', d => d.position.y)
      .attr('cx', d => d.position.x)
      .style('z-index', 10)
      .style('cursor', 'pointer')
      .attr('class', d => `city ${d.class} city-pinpoint`)
  }

  cityLabel() {
    this.svg.selectAll('text')
      .data(Object.values(this.data))
      .enter()
      .append('text')
      .attr('opacity', 0)
      .attr('class', d => `map-city-label city ${d.class}`)
      .text(d => d.city)
      .style('font-size', 14)
      .style('stroke-width', 3)
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
      // animation
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
    this.svg.selectAll('.ranking')
      .data(Object.values(this.data))
      .enter()
      .append('text')
      .text(d => d.ranking)
      .style('fill', d => d.color)
      .style('font-size', 16)
      .transition()
        .ease(ANIMATION_EASING)
        .duration(ANIMATION_DURATION)
      .attr('y', d => d.position.y + 6)
      .attr('x', d => d.position.x)
      .style('text-anchor', 'middle')
      .attr('class', d => `city ${d.class}`)
      .attr('class', d => `city ${d.class} city-pinpoint`)
  }
}

export default Map