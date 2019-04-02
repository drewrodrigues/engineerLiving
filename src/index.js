import SunnyDays from './sunnyDays'
import MedianHomeCost from './medianHomeCost'
import Diversity from './diversity'
import Happiness from './happiness'
import Map from './map'
import JobMarket from './jobMarket'
import Salary from './salary'
import Filtering from './filtering'

document.addEventListener("DOMContentLoaded", () => {
  new SunnyDays('svg.sunnyDays')
  new Salary('svg.salary')
  new MedianHomeCost('svg.medianHomeCost')
  new Diversity('svg.diversity')
  new Happiness('svg.happiness')
  new Map
  new JobMarket
  new Filtering
})