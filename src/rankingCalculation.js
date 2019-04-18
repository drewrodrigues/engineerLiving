import { CITIES } from './constants'

class RankingCalculation {
  constructor() {
    this.calculatePointsForSalary()
    // this.calculatePointsForHappiness()
    this.calculatePointsForMedianHomePrice()
    this.calculatePointsForSunnyDays()
    this.calculatePointsForDiversity()
    this.calculatePointsForJobs()
    this.setRankings()
  }

  calculatePointsForSalary() {
    this.calculateBy((a, b) => b.adjustedSalary - a.adjustedSalary, 3)
  }
  
  calculatePointsForHappiness() {
    this.calculateBy((a, b) => a.happinessRank - b.happinessRank, 1.5)
  }
  
  calculatePointsForMedianHomePrice() {
    this.calculateBy((a, b) => a.medianHomePrice - b.medianHomePrice, 3)
  }
  
  calculatePointsForSunnyDays() {
    this.calculateBy((a, b) => b.sunnyDays - a.sunnyDays)
  }
  
  calculatePointsForDiversity() {
    this.calculateBy((a, b) => {
      let aDiversityPoints = 0
      let bDiversityPoints = 0
      a.diversity.forEach(ethnicity => {
        if (ethnicity.percentage > 10) aDiversityPoints += 1
      })
      b.diversity.forEach(ethnicity => {
        if (ethnicity.percentage > 10) bDiversityPoints += 1
      })
      return b.bDiversityPoints - a.aDiversityPoints
    })
  }
  
  calculatePointsForJobs() {
    this.calculateBy((a, b) => b.jobs - a.jobs, 2)
  }
  
  setRankings() {
    let citiesSortedByPoints = Object.values(CITIES).sort((a, b) => a.points - b.points)
    citiesSortedByPoints.forEach((city, i) => {
      CITIES[city.constant].ranking = i + 1
    })
  }
  
  calculateBy(sortingCallback, multiplier = 1) {
    let sortedCities = Object.values(CITIES).sort(sortingCallback)
    sortedCities.forEach((city, i) => CITIES[city.constant].points += (i * multiplier))
  }
}

export default RankingCalculation