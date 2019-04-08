import SunnyDays from './sunnyDays'
import MedianHomeCost from './medianHomeCost'
import Diversity from './diversity'
import Happiness from './happiness'
import Map from './map'
import JobMarket from './jobMarket'
import Salary from './salary'
import Filtering from './filtering'
import RankingCalculation from './rankingCalculation'

document.addEventListener("DOMContentLoaded", () => {
  new RankingCalculation()
  new SunnyDays('svg.sunnyDays')
  new Salary('svg.salary')
  new MedianHomeCost('svg.medianHomeCost')
  new Diversity('svg.diversity')
  new Happiness('svg.happiness')
  new Map('svg.map')
  new JobMarket('svg.jobMarket')
  new Filtering
})