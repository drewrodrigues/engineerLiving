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
  new Salary
  new MedianHomeCost
  new Diversity
  new Happiness
  new Map
  new JobMarket
  new Filtering
})