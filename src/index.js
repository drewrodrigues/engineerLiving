import SunnyDays from './sunnyDays'
import MedianHomeCost from './medianHomeCost'
import Diversity from './diversity'
import Happiness from './happiness'
import Map from './map'
import JobMarket from './jobMarket'
import Salary from './salary'

document.addEventListener("DOMContentLoaded", () => {
  const sunnyDays = new SunnyDays
  const medianHomeCost = new MedianHomeCost
  const diversity = new Diversity
  const happiness = new Happiness
  const map = new Map
  const jobMarket = new JobMarket
  const salary = new Salary

  // filter ticks
  let ticks = d3.selectAll('.tick text')
  .attr('class', function(d) {
    let city = this.textContent
    if (parseInt(city) || ["White", "Asian", "Hispanic", "Black"].includes(city)) return ""
    let cityClass = this.textContent.split(' ').join('-')
    return `city city-${cityClass}`
  })
})