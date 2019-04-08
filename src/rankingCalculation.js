import { CITIES } from './constants'

class RankingCalculation {
  constructor() {
    this.calculatePointsForSalary()
    this.calculatePointsForHappiness()
    this.calculatePointsForMedianHomePrice()
    this.calculatePointsForSunnyDays()
    this.calculatePointsForDiversity()
    this.calculatePointsForJobs()
    this.setRankings()
  }

  calculatePointsForSalary() {
    this.calculateBy((a, b) => b.adjustedSalary - a.adjustedSalary)
  }
  
  calculatePointsForHappiness() {
    this.calculateBy((a, b) => a.happinessRank - b.happinessRank)
  }
  
  calculatePointsForMedianHomePrice() {
    this.calculateBy((a, b) => a.medianHomePrice - b.medianHomePrice)
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
    this.calculateBy((a, b) => b.jobs - a.jobs)
  }
  
  setRankings() {
    let citiesSortedByPoints = Object.values(CITIES).sort((a, b) => a.points - b.points)
    citiesSortedByPoints.forEach((city, i) => {
      CITIES[city.constant].ranking = i + 1
    })
  }
  
  calculateBy(sortingCallback) {
    let sortedCities = Object.values(CITIES).sort(sortingCallback)
    sortedCities.forEach((city, i) => CITIES[city.constant].points += i)
  }
}

export default RankingCalculation